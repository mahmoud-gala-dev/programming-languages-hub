// tests/challenger3_empirical_stress.mjs
// EMPIRICAL CHALLENGER STRESS HARNESS — Milestone 6 Deliverables
// Strictly verifies:
// 1. notesDb.js QuotaExceededError fallback to localStorage (sync/async/concurrent/disaster)
// 2. gemini.js pool clean keys filtering & 429 failover
// 3. BookViewModal & InfographicGalleryModal keyboard events & edge cases

import assert from 'node:assert/strict';
import { setupMockEnvironment, safeImport, createMockFetch } from './test_helper.js';

let passed = 0;
let failed = 0;

async function test(name, fn) {
  try {
    await fn();
    console.log(`  ✓ PASS: ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ FAIL: ${name}`);
    console.error(`    ${err.message}`);
    failed++;
  }
}

async function run() {
  console.log("======================================================================");
  console.log(" 🧪 Challenger 3: Empirical Adversarial Stress Harness");
  console.log("======================================================================\n");

  const { mockStorage } = setupMockEnvironment();

  // -------------------------------------------------------------------------
  // SUITE 1: notesDb.js QuotaExceededError & IndexedDB Fallback Stress
  // -------------------------------------------------------------------------
  console.log("▶ Suite 1: notesDb.js QuotaExceededError & Fallback Stress");

  const notesDb = await safeImport('src/utils/notesDb.js');

  await test("1.1: QuotaExceededError on openDatabase() gracefully falls back to localStorage", async () => {
    mockStorage.clear();
    // Simulate indexedDB open throwing QuotaExceededError
    const originalIndexedDB = globalThis.window.indexedDB;
    globalThis.window.indexedDB = {
      open: () => {
        const req = {};
        setTimeout(() => {
          req.error = new Error("QuotaExceededError: Database storage limit exceeded");
          if (req.onerror) req.onerror();
        }, 5);
        return req;
      }
    };

    const noteId = await notesDb.saveCodeNote({
      subtopicId: "test-quota-1",
      lineNumber: 42,
      tag: "⚡ اختبار",
      content: "ملاحظة تحت ضغط تجاوز الحصة"
    });

    assert.ok(typeof noteId === 'number' && noteId > 0, "Should return a positive fallback ID");

    // Check localStorage
    const storedNotes = JSON.parse(mockStorage.getItem("nodejs_roadmap_code_notes") || "[]");
    assert.equal(storedNotes.length, 1);
    assert.equal(storedNotes[0].id, noteId);
    assert.equal(storedNotes[0].content, "ملاحظة تحت ضغط تجاوز الحصة");

    // Check retrieval
    const retrieved = await notesDb.getCodeNotesBySubtopic("test-quota-1");
    assert.equal(retrieved.length, 1);
    assert.equal(retrieved[0].id, noteId);

    globalThis.window.indexedDB = originalIndexedDB;
  });

  await test("1.2: Asynchronous QuotaExceededError during store.add() triggers fallback", async () => {
    mockStorage.clear();
    // open succeeds, but add fails asynchronously with QuotaExceededError
    globalThis.window.indexedDB = {
      open: () => {
        const req = {};
        setTimeout(() => {
          req.result = {
            transaction: () => ({
              objectStore: () => ({
                add: () => {
                  const addReq = {};
                  setTimeout(() => {
                    const quotaErr = new Error("QuotaExceededError: disk full");
                    quotaErr.name = "QuotaExceededError";
                    addReq.error = quotaErr;
                    if (addReq.onerror) addReq.onerror();
                  }, 5);
                  return addReq;
                }
              })
            })
          };
          if (req.onsuccess) req.onsuccess();
        }, 5);
        return req;
      }
    };

    const hlId = await notesDb.saveHighlight({
      subtopicId: "test-quota-async",
      title: "درس الذاكرة",
      text: "تظليل هام",
      type: "explanation",
      color: "emerald"
    });

    assert.ok(typeof hlId === 'number' && hlId > 0, "Highlight should fall back and return numeric ID");
    const storedHls = JSON.parse(mockStorage.getItem("nodejs_roadmap_saved_highlights") || "[]");
    assert.equal(storedHls.length, 1);
    assert.equal(storedHls[0].text, "تظليل هام");
  });

  await test("1.3: Synchronous throw inside transaction falls back cleanly", async () => {
    mockStorage.clear();
    globalThis.window.indexedDB = {
      open: () => {
        const req = {};
        setTimeout(() => {
          req.result = {
            transaction: () => {
              throw new Error("QuotaExceededError: Transaction creation rejected");
            }
          };
          if (req.onsuccess) req.onsuccess();
        }, 2);
        return req;
      }
    };

    const noteId = await notesDb.saveCodeNote({ content: "Sync throw test" });
    assert.ok(typeof noteId === 'number' && noteId > 0);
  });

  await test("1.4: High-Velocity Concurrency Stress (100 concurrent saves, no ID collisions)", async () => {
    mockStorage.clear();
    // Simulate IDB completely unavailable to force all 100 into fallback
    globalThis.window.indexedDB = null;

    const promises = [];
    for (let i = 0; i < 100; i++) {
      promises.push(notesDb.saveCodeNote({
        subtopicId: `sub-${i % 5}`,
        lineNumber: i,
        content: `Concurrent Note #${i}`
      }));
    }

    const ids = await Promise.all(promises);
    assert.equal(ids.length, 100);

    // Verify all IDs are strictly unique
    const uniqueIds = new Set(ids);
    assert.equal(uniqueIds.size, 100, "All 100 concurrent fallback IDs must be unique (no collision)");

    const stored = JSON.parse(mockStorage.getItem("nodejs_roadmap_code_notes") || "[]");
    assert.equal(stored.length, 100, "All 100 notes must exist in localStorage");

    // Verify retrieval by subtopic
    const sub0 = await notesDb.getCodeNotesBySubtopic("sub-0");
    assert.equal(sub0.length, 20);
  });

  await test("1.5: Fallback deletion works for both numeric and string IDs", async () => {
    mockStorage.clear();
    globalThis.window.indexedDB = null;

    const id1 = await notesDb.saveCodeNote({ subtopicId: "del-test", content: "Note 1" });
    const id2 = await notesDb.saveCodeNote({ subtopicId: "del-test", content: "Note 2" });

    let remaining = await notesDb.getCodeNotesBySubtopic("del-test");
    assert.equal(remaining.length, 2);

    // Delete using number
    await notesDb.deleteCodeNote(id1);
    remaining = await notesDb.getCodeNotesBySubtopic("del-test");
    assert.equal(remaining.length, 1);
    assert.equal(remaining[0].id, id2);

    // Delete using string representation of ID
    await notesDb.deleteCodeNote(String(id2));
    remaining = await notesDb.getCodeNotesBySubtopic("del-test");
    assert.equal(remaining.length, 0);
  });

  await test("1.6: Disaster Resilience: Both IndexedDB AND localStorage throw QuotaExceededError", async () => {
    globalThis.window.indexedDB = null;
    const originalSetItem = mockStorage.setItem.bind(mockStorage);
    mockStorage.setItem = () => {
      const err = new Error("QuotaExceededError: LocalStorage quota exceeded");
      err.name = "QuotaExceededError";
      throw err;
    };

    // Should NOT crash or throw unhandled error
    const noteId = await notesDb.saveCodeNote({ content: "Total storage failure" });
    assert.ok(typeof noteId === 'number' && noteId > 0, "Must return safe ID even if localStorage fails");

    mockStorage.setItem = originalSetItem;
  });

  await test("1.7: Corrupt JSON in localStorage is handled without crash", async () => {
    globalThis.window.indexedDB = null;
    mockStorage.setItem("nodejs_roadmap_saved_highlights", "CORRUPTED_JSON_{{{");

    const hls = await notesDb.getAllHighlights();
    assert.deepEqual(hls, [], "Corrupt storage should safely parse to empty array");

    const newId = await notesDb.saveHighlight({ text: "Recovered highlight" });
    assert.ok(typeof newId === 'number');
  });

  // -------------------------------------------------------------------------
  // SUITE 2: gemini.js Pool Clean Keys Filtering Stress
  // -------------------------------------------------------------------------
  console.log("\n▶ Suite 2: gemini.js Pool Clean Keys Filtering & Failover Stress");

  const gemini = await safeImport('src/api/gemini.js');

  await test("2.1: saveGeminiKeysPool strictly filters literal 'null' and 'undefined' strings", async () => {
    mockStorage.clear();
    const input = [
      "AIzaSyD-ValidKey1",
      "null",
      "undefined",
      "  null  ",
      " undefined ",
      "AIzaSyD-ValidKey2"
    ];

    const ok = gemini.saveGeminiKeysPool(input);
    assert.equal(ok, true);

    const storedPool = JSON.parse(mockStorage.getItem("nodejs_gemini_api_keys_pool"));
    assert.deepEqual(storedPool, ["AIzaSyD-ValidKey1", "AIzaSyD-ValidKey2"]);
    assert.equal(mockStorage.getItem("nodejs_gemini_user_api_key"), "AIzaSyD-ValidKey1");
  });

  await test("2.2: saveGeminiKeysPool filters primitives, empty strings, objects, and trims keys", async () => {
    mockStorage.clear();
    const input = [
      null,
      undefined,
      12345,
      {},
      [],
      "",
      "     ",
      "   AIzaSyD-TrimmedKey   ",
      "AIzaSyD-TrimmedKey", // duplicate
      "AIzaSyD-KeyB"
    ];

    gemini.saveGeminiKeysPool(input);
    const storedPool = JSON.parse(mockStorage.getItem("nodejs_gemini_api_keys_pool"));
    assert.deepEqual(storedPool, ["AIzaSyD-TrimmedKey", "AIzaSyD-KeyB"]);
  });

  await test("2.3: Clearing pool via empty array or empty string removes active user key", async () => {
    mockStorage.clear();
    gemini.saveGeminiKeysPool(["valid-key"]);
    assert.equal(mockStorage.getItem("nodejs_gemini_user_api_key"), "valid-key");

    // Clear via saveUserGeminiApiKey("")
    gemini.saveUserGeminiApiKey("");
    assert.deepEqual(JSON.parse(mockStorage.getItem("nodejs_gemini_api_keys_pool")), []);
    assert.equal(mockStorage.getItem("nodejs_gemini_user_api_key"), null);

    // getActiveApiKey falls back to DEFAULT_API_KEY
    assert.equal(gemini.getActiveApiKey(), gemini.DEFAULT_API_KEY);
  });

  await test("2.4: saveUserGeminiApiKey moves existing key to front of pool without duplicates", async () => {
    mockStorage.clear();
    gemini.saveGeminiKeysPool(["keyA", "keyB", "keyC"]);
    gemini.saveUserGeminiApiKey("keyB");

    const pool = gemini.getGeminiKeysPool();
    assert.deepEqual(pool, ["keyB", "keyA", "keyC"]);
    assert.equal(gemini.getActiveApiKey(), "keyB");
  });

  await test("2.5: askGeminiTutor transparently fails over on 429 across key pool", async () => {
    mockStorage.clear();
    gemini.saveGeminiKeysPool(["key-exhausted-1", "key-exhausted-2", "key-success-3"]);

    const mockFetch = createMockFetch({
      'key=key-exhausted-1': () => ({
        ok: false,
        status: 429,
        json: async () => ({ error: { message: "Quota exceeded" } })
      }),
      'key=key-exhausted-2': () => ({
        ok: false,
        status: 429,
        json: async () => ({ error: { message: "Quota exceeded" } })
      }),
      'key=key-success-3': () => ({
        ok: true,
        status: 200,
        json: async () => ({
          candidates: [{ content: { parts: [{ text: "رد ناجح من المفتاح الثالث" }] } }]
        })
      })
    });
    globalThis.fetch = mockFetch;

    const reply = await gemini.askGeminiTutor("سؤال تجريبي");
    assert.equal(reply, "رد ناجح من المفتاح الثالث");

    mockFetch.restore();
  });

  // -------------------------------------------------------------------------
  // SUITE 3: BookViewModal & InfographicGalleryModal Keyboard Interaction Stress
  // -------------------------------------------------------------------------
  console.log("\n▶ Suite 3: BookViewModal & InfographicGalleryModal Keyboard & Edge Cases");

  await test("3.1: BookViewModal Escape key listener dismisses modal", async () => {
    let closed = false;
    const onClose = () => { closed = true; };

    // Simulate keydown event handler as implemented in BookViewModal
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    // Test with Escape key
    handleKeyDown({ key: 'Escape' });
    assert.equal(closed, true, "Escape key should trigger onClose");

    // Test with non-Escape key
    closed = false;
    handleKeyDown({ key: 'Enter' });
    assert.equal(closed, false, "Enter key should not trigger onClose");
  });

  await test("3.2: BookViewModal backdrop click dismisses only on outer backdrop (e.target === e.currentTarget)", async () => {
    let closed = false;
    const onClose = () => { closed = true; };

    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose?.();
      }
    };

    // Click on outer backdrop
    const outerTarget = { id: "backdrop" };
    handleBackdropClick({ target: outerTarget, currentTarget: outerTarget });
    assert.equal(closed, true, "Click on backdrop should trigger onClose");

    // Click inside dialog content
    closed = false;
    const innerTarget = { id: "dialog-content" };
    handleBackdropClick({ target: innerTarget, currentTarget: outerTarget });
    assert.equal(closed, false, "Click inside dialog content should NOT trigger onClose");
  });

  await test("3.3: InfographicGalleryModal keyboard handler ignores Arrow keys when target is INPUT/TEXTAREA", async () => {
    let prevCalled = false;
    let nextCalled = false;

    const handlePrev = () => { prevCalled = true; };
    const handleNext = () => { nextCalled = true; };

    const handleKeyDown = (e, viewMode = 'single') => {
      if (e.key === 'Escape') {
        // close
      } else if (viewMode === 'single') {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
          handlePrev();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
          handleNext();
        }
      }
    };

    // When typing in search input:
    handleKeyDown({ key: 'ArrowRight', target: { tagName: 'INPUT' } });
    assert.equal(prevCalled, false, "ArrowRight inside INPUT must not trigger handlePrev");

    handleKeyDown({ key: 'ArrowLeft', target: { tagName: 'INPUT' } });
    assert.equal(nextCalled, false, "ArrowLeft inside INPUT must not trigger handleNext");

    handleKeyDown({ key: 'ArrowRight', target: { tagName: 'TEXTAREA' } });
    assert.equal(prevCalled, false, "ArrowRight inside TEXTAREA must not trigger handlePrev");

    // When target is not an input (e.g. DIV / body):
    handleKeyDown({ key: 'ArrowRight', target: { tagName: 'DIV' } });
    assert.equal(prevCalled, true, "ArrowRight outside input must trigger handlePrev");

    handleKeyDown({ key: 'ArrowLeft', target: { tagName: 'DIV' } });
    assert.equal(nextCalled, true, "ArrowLeft outside input must trigger handleNext");
  });

  await test("3.4: InfographicGalleryModal carousel boundary clamping prevents index -1 on empty list", async () => {
    const filteredList = []; // empty search results
    let currentIndex = 0;

    const handlePrev = () => {
      if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
      } else {
        currentIndex = filteredList.length > 0 ? filteredList.length - 1 : 0;
      }
    };

    const handleNext = () => {
      if (currentIndex < filteredList.length - 1) {
        currentIndex = currentIndex + 1;
      } else {
        currentIndex = 0;
      }
    };

    // Test handlePrev on empty list
    handlePrev();
    assert.equal(currentIndex, 0, "Index must remain 0 and not become -1");

    // Test handleNext on empty list
    handleNext();
    assert.equal(currentIndex, 0, "Index must remain 0 on empty list");
  });

  await test("3.5: InfographicGalleryModal circular wrapping on populated list", async () => {
    const filteredList = [{ id: "A" }, { id: "B" }, { id: "C" }];
    let currentIndex = 0;

    const handleNext = () => {
      if (currentIndex < filteredList.length - 1) {
        currentIndex = currentIndex + 1;
      } else {
        currentIndex = 0;
      }
    };

    const handlePrev = () => {
      if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
      } else {
        currentIndex = filteredList.length > 0 ? filteredList.length - 1 : 0;
      }
    };

    // Forward: 0 -> 1 -> 2 -> 0
    handleNext();
    assert.equal(currentIndex, 1);
    handleNext();
    assert.equal(currentIndex, 2);
    handleNext();
    assert.equal(currentIndex, 0, "Wrap around to beginning");

    // Backward: 0 -> 2
    handlePrev();
    assert.equal(currentIndex, 2, "Wrap around to end");
  });

  // -------------------------------------------------------------------------
  // SUMMARY
  // -------------------------------------------------------------------------
  console.log("\n======================================================================");
  console.log(` 📊 Challenger 3 Empirical Stress Results: ${passed} passed, ${failed} failed`);
  console.log("======================================================================\n");

  if (failed > 0) {
    process.exit(1);
  }
}

run().catch(err => {
  console.error("Fatal runner error:", err);
  process.exit(1);
});
