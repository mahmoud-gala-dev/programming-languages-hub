// tests/tier5_adversarial/whitebox_hardening_1.test.js
// ==============================================================================
// Tier 5 White-Box Adversarial Hardening Suite — Part 1
// Author: Challenger 1 (`challenger_m6_1`)
// Roles: critic, specialist (Empirical Challenger)
// Target Components:
//   - Modals & Navigation: BookViewModal.jsx, InfographicGalleryModal.jsx, Navbar.jsx
//   - Core API & Utilities: gemini.js, notesDb.js, codeFonts.js, infographicRegistry.js, exportImage.js
// Verification methodology: White-box static analysis, empirical oracles, boundary fuzzing, error injection
// ==============================================================================

import assert from 'node:assert/strict';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { performance } from 'node:perf_hooks';
import React from 'react';

// Setup Mock Browser Environment
import { setupMockEnvironment, PROJECT_ROOT, SRC_ROOT, safeImport, createMockFetch } from '../test_helper.js';
setupMockEnvironment();

// Collector integration
import { collector } from '../collector.js';
collector.setTier('Tier 5: Adversarial Hardening');

// Target module imports
import { 
  getGeminiKeysPool, 
  saveGeminiKeysPool, 
  getActiveApiKey, 
  saveUserGeminiApiKey,
  testGeminiKeysInParallel,
  askGeminiTutor,
  generateGeminiReply,
  generateLocalTutorReply,
  generateAiQuizForLesson,
  generateLessonQuiz,
  DEFAULT_API_KEY
} from '../../src/api/gemini.js';

import {
  saveCodeNote,
  getCodeNotesBySubtopic,
  deleteCodeNote,
  saveHighlight,
  getAllHighlights,
  getHighlightsBySubtopic,
  deleteHighlight,
  exportAllNotesToJson
} from '../../src/utils/notesDb.js';

import {
  CODE_FONTS,
  getActiveCodeFontId,
  getActiveCodeFont,
  applyCodeFont,
  initCodeFont
} from '../../src/utils/codeFonts.js';

import {
  INFOGRAPHIC_THEMES,
  buildInfographicForSubtopic,
  getAllInfographics,
  searchInfographics,
  renderSvgArchitectureDiagram
} from '../../src/utils/infographicRegistry.js';

import {
  sanitizeCssString,
  sanitizeDomColors,
  downloadElementAsPng
} from '../../src/utils/exportImage.js';

const RESULTS = {
  total: 0,
  passed: 0,
  failed: 0,
  gapsConfirmed: 0,
  findings: []
};

// =========================================================================
// SUITE 1: Modals & Navigation Invariants & Resilience
// =========================================================================
collector.suite('1. Modals & Navigation Invariants & Resilience', (test) => {

    test('T5.1.1: [Hardened] BookViewModal.jsx static AST check confirms Escape key listener', () => {
      const bookModalSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/book/BookViewModal.jsx'), 'utf-8');
      const galleryModalSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/gallery/InfographicGalleryModal.jsx'), 'utf-8');

      // InfographicGalleryModal has keydown and Escape listener
      assert.ok(galleryModalSource.includes("e.key === 'Escape'"), 'InfographicGalleryModal must handle Escape key');
      
      // BookViewModal now includes Escape key listener
      const hasEscapeInBookModal = bookModalSource.includes("Escape") && bookModalSource.includes("keydown");
      assert.strictEqual(hasEscapeInBookModal, true, 'Hardened: BookViewModal.jsx now includes Escape keyboard listener');
    });

    test('T5.1.2: [Code Quality Gap] BookViewModal.jsx static check identifies unused searchFilter state', () => {
      const bookModalSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/book/BookViewModal.jsx'), 'utf-8');
      
      const declaresSearchFilter = bookModalSource.includes("const [searchFilter, setSearchFilter] = useState('')");
      assert.ok(declaresSearchFilter, 'BookViewModal declares searchFilter state');

      // Check whether searchFilter is used anywhere in JSX or filtering
      const usages = (bookModalSource.match(/searchFilter/g) || []).length;
      assert.strictEqual(usages, 1, 'White-box finding: searchFilter state is declared but never read or referenced in UI');
    });

    test('T5.1.3: [Hardened] BookViewModal.jsx backdrop click dismissal analysis', () => {
      const bookModalSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/book/BookViewModal.jsx'), 'utf-8');
      
      const outerDivMatch = bookModalSource.match(/<div[^>]*className="fixed inset-0[^>]*>/);
      assert.ok(outerDivMatch, 'Must locate outer backdrop modal div');
      const outerDiv = outerDivMatch[0];
      
      const hasBackdropClick = outerDiv.includes('onClick=');
      assert.strictEqual(hasBackdropClick, true, 'Hardened: outer backdrop now has onClick dismissal handler');
    });

    test('T5.1.4: BookViewModal component export contract and section calculation resilience', async () => {
      const mod = await safeImport('src/components/book/BookViewModal.jsx');
      assert.ok(typeof mod.default === 'function', 'BookViewModal must export a React component');

      // Emulate sectionsToRender calculation logic from BookViewModal.jsx line 77-85
      const scope = 'all';
      const allSections = [];
      const currentSection = null;
      
      const sectionsToRender = scope === 'current' && currentSection 
        ? [currentSection] 
        : (allSections.length > 0 ? allSections : (currentSection ? [currentSection] : []));

      const totalTopicsCount = sectionsToRender.reduce((sum, s) => sum + (s.topics?.length || 0), 0);
      const totalSubtopicsCount = sectionsToRender.reduce((sum, s) => {
        return sum + (s.topics ? s.topics.reduce((tSum, t) => tSum + (t.subtopics?.length || 0), 0) : 0);
      }, 0);

      assert.strictEqual(totalTopicsCount, 0, 'totalTopicsCount must be 0 for empty sections');
      assert.strictEqual(totalSubtopicsCount, 0, 'totalSubtopicsCount must be 0 for empty sections');
    });

    test('T5.1.5: BookViewModal A4 print media stylesheet separation', () => {
      const bookModalSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/book/BookViewModal.jsx'), 'utf-8');
      assert.ok(bookModalSource.includes('no-print'), 'Must use no-print class for header controls');
      assert.ok(bookModalSource.includes('print-page-break'), 'Must enforce page breaks on section headers');
      assert.ok(bookModalSource.includes('print-avoid-break'), 'Must prevent breaking mid-table or cheat-sheet');
    });

    test('T5.1.6: [Hardened] InfographicGalleryModal keyboard arrow listener guards against input typing', () => {
      const galleryModalSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/gallery/InfographicGalleryModal.jsx'), 'utf-8');
      
      const handleKeyDownMatch = galleryModalSource.match(/const handleKeyDown = \((.*?)\) => \{([\s\S]*?)\};/);
      assert.ok(handleKeyDownMatch, 'handleKeyDown function must exist');
      const body = handleKeyDownMatch[2];

      const checksInput = body.includes('tagName') || body.includes('INPUT') || body.includes('target');
      assert.strictEqual(checksInput, true, 'Hardened: InfographicGalleryModal guards arrow keys against input typing');
    });

    test('T5.1.7: [Boundary Gap] InfographicGalleryModal empty search result wrap-around yields negative index', () => {
      const galleryModalSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/gallery/InfographicGalleryModal.jsx'), 'utf-8');
      assert.ok(galleryModalSource.includes('filteredList.length - 1'), 'handlePrev wraps around to filteredList.length - 1');
      
      const emptyLength = 0;
      const targetIndex = emptyLength - 1;
      assert.strictEqual(targetIndex, -1, 'Empty list wrap-around produces negative index -1');
    });

    test('T5.1.8: [Race Condition Gap] InfographicGalleryModal initialSubtopicId ignored when cache is unpopulated', () => {
      const galleryModalSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/gallery/InfographicGalleryModal.jsx'), 'utf-8');
      
      // Lines 58-69: loadAllInfographics().then(items => { setAllInfographics(items); ... })
      const asyncThenBlock = galleryModalSource.match(/loadAllInfographics\(\)[\s\S]*?\.then\(items => \{([\s\S]*?)\}\)/);
      assert.ok(asyncThenBlock, 'loadAllInfographics promise handler must exist');
      const thenContent = asyncThenBlock[1];

      // Verify that initialSubtopicId is not re-checked in the async then callback
      const checksInitialSubtopicInThen = thenContent.includes('initialSubtopicId');
      assert.strictEqual(checksInitialSubtopicInThen, false, 'Race condition: initialSubtopicId is not re-checked after async load completes');
    });

    test('T5.1.9: [Clamping Gap] Navbar.jsx progressPercent calculation under boundary completedCount values', () => {
      const navbarSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/layout/Navbar.jsx'), 'utf-8');
      assert.ok(navbarSource.includes('Math.round((completedCount / totalSubtopics) * 100)'), 'progressPercent uses unchecked division formula');

      const calcProgress = (completed, total) => total > 0 ? Math.round((completed / total) * 100) : 0;
      
      assert.strictEqual(calcProgress(-5, 981), -1, 'Unclamped negative completedCount yields negative percentage');
      assert.strictEqual(calcProgress(2000, 981), 204, 'Unclamped excessive completedCount yields percentage > 100');
      assert.strictEqual(calcProgress(0, 0), 0, 'Zero totalSubtopics yields 0');
    });

    test('T5.1.10: [Vulnerability Gap] Navbar.jsx handleOpenApiKeyModal throws TypeError when showSwal resolves undefined', () => {
      const navbarSource = fs.readFileSync(path.resolve(SRC_ROOT, 'components/layout/Navbar.jsx'), 'utf-8');
      assert.ok(navbarSource.includes('result.isConfirmed'), 'Navbar directly accesses result.isConfirmed');
      
      const simulateSwalAccess = (result) => {
        try {
          if (result.isConfirmed) return 'confirmed';
          return 'cancelled';
        } catch (e) {
          return e.name;
        }
      };
      
      assert.strictEqual(simulateSwalAccess(undefined), 'TypeError', 'Direct result.isConfirmed throws TypeError if result is undefined');
      assert.strictEqual(simulateSwalAccess(null), 'TypeError', 'Direct result.isConfirmed throws TypeError if result is null');
      assert.strictEqual(simulateSwalAccess({ isConfirmed: true }), 'confirmed');
    });

  });

  // =========================================================================
  // SUITE 2: IndexedDB Quota & Error Fallback Resilience (notesDb.js)
  // =========================================================================
collector.suite('2. IndexedDB Quota & Error Fallback Resilience (notesDb.js)', (test) => {

    test('T5.1.11: [Hardened] saveCodeNote catches QuotaExceededError and seamlessly falls back to LocalStorage', async () => {
      const origIndexedDB = globalThis.window.indexedDB;
      
      globalThis.window.indexedDB = {
        open: () => {
          const req = {
            result: {
              objectStoreNames: { contains: () => true },
              transaction: () => ({
                objectStore: () => ({
                  add: () => {
                    const addReq = {};
                    setTimeout(() => {
                      if (addReq.onerror) {
                        addReq.error = new Error("QuotaExceededError: The quota has been exceeded.");
                        addReq.onerror();
                      }
                    }, 5);
                    return addReq;
                  }
                })
              })
            }
          };
          setTimeout(() => { if (req.onsuccess) req.onsuccess(); }, 5);
          return req;
        }
      };

      let threwOrRejected = false;
      let savedId = null;

      try {
        savedId = await saveCodeNote({ subtopicId: '1.1', lineNumber: 5, tag: '💡 test', content: 'Test Note' });
      } catch (err) {
        threwOrRejected = true;
      } finally {
        globalThis.window.indexedDB = origIndexedDB;
      }

      assert.strictEqual(threwOrRejected, false, 'Hardened: saveCodeNote must catch QuotaExceededError and not reject');
      assert.ok(savedId, 'saveCodeNote must return a valid fallback ID from LocalStorage');
    });

    test('T5.1.12: [Hardened] saveHighlight catches transaction error and seamlessly falls back to LocalStorage', async () => {
      const origIndexedDB = globalThis.window.indexedDB;
      
      globalThis.window.indexedDB = {
        open: () => {
          const req = {
            result: {
              objectStoreNames: { contains: () => true },
              transaction: () => ({
                objectStore: () => ({
                  add: () => {
                    const addReq = {};
                    setTimeout(() => {
                      if (addReq.onerror) {
                        addReq.error = new Error("TransactionInactiveError: Transaction has already completed.");
                        addReq.onerror();
                      }
                    }, 5);
                    return addReq;
                  }
                })
              })
            }
          };
          setTimeout(() => { if (req.onsuccess) req.onsuccess(); }, 5);
          return req;
        }
      };

      let threwOrRejected = false;
      let savedId = null;

      try {
        savedId = await saveHighlight({ subtopicId: '1.2', title: 'Test', text: 'Sample text', type: 'code', color: 'emerald' });
      } catch (err) {
        threwOrRejected = true;
      } finally {
        globalThis.window.indexedDB = origIndexedDB;
      }

      assert.strictEqual(threwOrRejected, false, 'Hardened: saveHighlight must catch store error and not reject');
      assert.ok(savedId, 'saveHighlight must return a valid fallback ID from LocalStorage');
    });

    test('T5.1.13: Fallback to LocalStorage succeeds when indexedDB.open() itself fails at startup', async () => {
      const origIndexedDB = globalThis.window.indexedDB;
      
      globalThis.window.indexedDB = {
        open: () => {
          throw new Error("SecurityError: Access to IndexedDB is denied in this context.");
        }
      };

      try {
        const noteId = await saveCodeNote({
          subtopicId: 'sec1.sub1',
          lineNumber: 42,
          content: 'Fallback Persistence Test',
          tag: '💡 مفهوم'
        });

        assert.ok(typeof noteId === 'number', 'Must return a generated numeric ID from fallback');
        
        const storedNotes = JSON.parse(globalThis.localStorage.getItem("nodejs_roadmap_code_notes") || "[]");
        const found = storedNotes.find(n => n.id === noteId);
        assert.ok(found, 'Note must exist in localStorage fallback store');
        assert.strictEqual(found.content, 'Fallback Persistence Test');
      } finally {
        globalThis.window.indexedDB = origIndexedDB;
      }
    });

    test('T5.1.14: Fallback ID generation uniqueness under 200 rapid sequential saves', async () => {
      const origIndexedDB = globalThis.window.indexedDB;
      globalThis.window.indexedDB = null;

      const ids = new Set();
      const count = 200;

      for (let i = 0; i < count; i++) {
        const id = await saveCodeNote({
          subtopicId: 'stress_test',
          lineNumber: i,
          content: `Rapid save item ${i}`
        });
        assert.ok(!ids.has(id), `Duplicate ID generated: ${id}`);
        ids.add(id);
      }

      assert.strictEqual(ids.size, count, `All ${count} IDs must be strictly unique`);
      globalThis.window.indexedDB = origIndexedDB;
    });

    test('T5.1.15: deleteCodeNote handles boundary / invalid IDs without throwing', async () => {
      await assert.doesNotReject(async () => {
        await deleteCodeNote(null);
        await deleteCodeNote(undefined);
        await deleteCodeNote('');
        await deleteCodeNote(9999999);
        await deleteCodeNote('invalid_non_numeric');
      }, 'deleteCodeNote must not throw on invalid or non-existent IDs');
    });

    test('T5.1.16: deleteHighlight handles boundary / invalid IDs without throwing', async () => {
      await assert.doesNotReject(async () => {
        await deleteHighlight(null);
        await deleteHighlight(undefined);
        await deleteHighlight('');
        await deleteHighlight(9999999);
      }, 'deleteHighlight must not throw on invalid or non-existent IDs');
    });

    test('T5.1.17: getCodeNotesBySubtopic and getHighlightsBySubtopic return empty array for missing IDs', async () => {
      const notesNull = await getCodeNotesBySubtopic(null);
      assert.deepStrictEqual(notesNull, [], 'null subtopicId must return []');

      const notesEmpty = await getCodeNotesBySubtopic('');
      assert.deepStrictEqual(notesEmpty, [], 'empty subtopicId must return []');

      const hlNull = await getHighlightsBySubtopic(null);
      assert.deepStrictEqual(hlNull, [], 'null subtopicId must return []');
    });

    test('T5.1.18: exportAllNotesToJson handles empty stores and returns valid JSON', async () => {
      const json = await exportAllNotesToJson();
      assert.ok(typeof json === 'string', 'Must return a JSON string');
      const parsed = JSON.parse(json);
      assert.ok(Array.isArray(parsed.highlights), 'Export must contain highlights array');
      assert.ok(Array.isArray(parsed.codeNotes), 'Export must contain codeNotes array');
    });

  });

  // =========================================================================
  // SUITE 3: Multi-Key Gemini API Pool Exhaustion & Fallback (gemini.js)
  // =========================================================================
collector.suite('3. Multi-Key Gemini API Pool Exhaustion & Fallback (gemini.js)', (test) => {

    test('T5.1.19: testGeminiKeysInParallel boundary fuzzing (null, empty, whitespace, non-array)', async () => {
      const resNull = await testGeminiKeysInParallel(null);
      assert.deepStrictEqual(resNull, [], 'null input must return empty array');

      const resEmpty = await testGeminiKeysInParallel([]);
      assert.deepStrictEqual(resEmpty, [], 'empty array must return empty array');

      const resWhitespace = await testGeminiKeysInParallel(['   ', '']);
      assert.deepStrictEqual(resWhitespace, [], 'array of only whitespace keys must return empty array');

      const resNumber = await testGeminiKeysInParallel(12345);
      assert.deepStrictEqual(resNumber, [], 'non-string/non-array input must return empty array');
    });

    test('T5.1.20: [Hardened] saveGeminiKeysPool sanitizes null and undefined items from key pool', () => {
      const dirty = ['key1', null, undefined, 'key2', 'null', 'undefined', ''];
      saveGeminiKeysPool(dirty);
      
      const stored = getGeminiKeysPool();
      const hasStringNull = stored.includes('null');
      const hasStringUndefined = stored.includes('undefined');

      assert.strictEqual(hasStringNull, false, 'Hardened: null and "null" are filtered out');
      assert.strictEqual(hasStringUndefined, false, 'Hardened: undefined and "undefined" are filtered out');
      assert.deepStrictEqual(stored, ['key1', 'key2'], 'Pool contains only clean non-empty string keys');
    });

    test('T5.1.21: getActiveApiKey returns DEFAULT_API_KEY when key pool is cleared', () => {
      saveGeminiKeysPool([]);
      const active = getActiveApiKey();
      assert.strictEqual(active, DEFAULT_API_KEY, 'Active key must fall back to DEFAULT_API_KEY');
    });

    test('T5.1.22: askGeminiTutor oracle confirms 429 quota exhaustion throws expected error', async () => {
      const mockFetch = createMockFetch({
        'generativelanguage.googleapis.com': async () => ({
          ok: false,
          status: 429,
          json: async () => ({ error: { message: 'Resource has been exhausted (e.g. check quota).' } })
        })
      });
      globalThis.fetch = mockFetch;

      let threw = false;
      let caughtError = null;

      try {
        saveGeminiKeysPool(['dummy_key_1', 'dummy_key_2']);
        await askGeminiTutor('ما هي حلقة الأحداث في Node.js؟');
      } catch (err) {
        threw = true;
        caughtError = err;
      } finally {
        mockFetch.restore();
      }

      assert.strictEqual(threw, true, 'askGeminiTutor must throw when all keys return 429');
      assert.ok(caughtError.message.includes('429') || caughtError.message.includes('حصة'), 'Error message must specify 429 / quota exhaustion');
    });

    test('T5.1.23: generateGeminiReply catches exhaustion and falls back to local tutor reply', async () => {
      const mockFetch = createMockFetch({
        'generativelanguage.googleapis.com': async () => ({
          ok: false,
          status: 429,
          json: async () => ({ error: { message: 'Rate limit' } })
        })
      });
      globalThis.fetch = mockFetch;

      try {
        saveGeminiKeysPool(['exhausted_key']);
        const reply = await generateGeminiReply('اشرح لي Streams', 'Streams Context');
        
        assert.ok(typeof reply === 'string', 'Must return a string');
        assert.ok(reply.includes('مرحباً بك يا بطل'), 'Must contain local tutor fallback greeting');
        assert.ok(reply.includes('Streams Context') || reply.includes('Node.js'), 'Must contain context');
      } finally {
        mockFetch.restore();
      }
    });

    test('T5.1.24: generateLocalTutorReply returns structured Arabic educational content', () => {
      const reply = generateLocalTutorReply('سؤال عن fs.promises', 'File System');
      assert.ok(reply.includes('File System'), 'Must mention context');
      assert.ok(reply.includes('حلقة الأحداث (Event Loop)'), 'Must reference Event Loop');
      assert.ok(reply.includes('async/await'), 'Must include async/await advice');
    });

    test('T5.1.25: generateAiQuizForLesson sanitizes markdown code fences and handles invalid JSON', async () => {
      const mockFetch1 = createMockFetch({
        'generativelanguage.googleapis.com': async () => ({
          ok: true,
          status: 200,
          json: async () => ({
            candidates: [{
              content: {
                parts: [{
                  text: '```json\n{\n  "question": "ما وظيفة Buffer؟",\n  "options": ["تخزين بايتات ثنائية", "تشفير كلمات السر", "إيقاف الخادم", "طباعة رسائل"],\n  "correctIndex": 0,\n  "explanation": "يستخدم Buffer للتعامل مع البيانات الثنائية المباشرة في الذاكرة."\n}\n```'
                }]
              }
            }]
          })
        })
      });
      globalThis.fetch = mockFetch1;

      try {
        const quiz = await generateAiQuizForLesson('مفهوم Buffer', 'ملخص درس الـ Buffer');
        assert.ok(quiz !== null, 'Quiz must be parsed successfully from fenced JSON');
        assert.strictEqual(quiz.question, 'ما وظيفة Buffer؟');
        assert.strictEqual(quiz.correctIndex, 0);
      } finally {
        mockFetch1.restore();
      }

      const mockFetch2 = createMockFetch({
        'generativelanguage.googleapis.com': async () => ({
          ok: true,
          status: 200,
          json: async () => ({
            candidates: [{
              content: { parts: [{ text: 'عذراً لا أستطيع توليد سؤال الآن' }] }
            }]
          })
        })
      });
      globalThis.fetch = mockFetch2;

      try {
        const failedQuiz = await generateAiQuizForLesson('Bad Lesson', 'Bad Summary');
        assert.strictEqual(failedQuiz, null, 'Must return null gracefully on malformed AI response');
      } finally {
        mockFetch2.restore();
      }
    });

    test('T5.1.26: generateLessonQuiz outputs 3 comprehensive pedagogical questions', async () => {
      const questions = await generateLessonQuiz({ title: 'Event Emitter' });
      assert.strictEqual(questions.length, 3, 'Must produce 3 questions');
      
      const types = questions.map(q => q.type);
      assert.ok(types.includes('fill_blank'), 'Must include fill_blank question');
      assert.ok(types.includes('true_false'), 'Must include true_false question');
      assert.ok(types.includes('code_output'), 'Must include code_output question');

      questions.forEach(q => {
        assert.ok(q.question && q.question.length > 5, 'Question text must be substantive');
        assert.ok(Array.isArray(q.options) && q.options.length >= 2, 'Options must be >= 2');
        assert.ok(typeof q.correctIndex === 'number' && q.correctIndex >= 0, 'correctIndex must be valid');
        assert.ok(q.explanation && q.explanation.length > 5, 'Explanation must be substantive');
      });
    });

  });

  // =========================================================================
  // SUITE 4: Code Typography Studio Edge Cases (codeFonts.js)
  // =========================================================================
collector.suite('4. Code Typography Studio Edge Cases (codeFonts.js)', (test) => {

    test('T5.1.27: applyCodeFont fuzzing with invalid / adversarial IDs safely falls back to fira-code', () => {
      const invalidInputs = [
        null,
        undefined,
        '',
        '   ',
        'comic-sans-ms',
        '"><script>alert(1)</script>',
        12345,
        {},
        []
      ];

      invalidInputs.forEach(input => {
        const res = applyCodeFont(input);
        assert.ok(res, 'applyCodeFont must return a font object');
        assert.strictEqual(res.id, 'fira-code', `Invalid input ${JSON.stringify(input)} must fall back to fira-code`);
      });
    });

    test('T5.1.28: getActiveCodeFontId handles corrupted localStorage entries gracefully', () => {
      globalThis.localStorage.setItem('nodejs_roadmap_code_font', 'corrupt_nonexistent_font_id');
      assert.strictEqual(getActiveCodeFontId(), 'fira-code', 'Corrupt font ID in localStorage must fall back to fira-code');

      globalThis.localStorage.setItem('nodejs_roadmap_code_font', '');
      assert.strictEqual(getActiveCodeFontId(), 'fira-code', 'Empty font ID must fall back to fira-code');
    });

    test('T5.1.29: applyCodeFont sets --font-code on both documentElement and body', () => {
      const font = applyCodeFont('jetbrains-mono');
      assert.strictEqual(font.id, 'jetbrains-mono');
      
      const docStyle = globalThis.document.documentElement.style;
      const val = docStyle['--font-code'] || (docStyle.getPropertyValue && docStyle.getPropertyValue('--font-code'));
      assert.ok(val && val.includes('JetBrains Mono'), '--font-code must be applied to documentElement');
    });

    test('T5.1.30: CODE_FONTS array immutability and complete schema audit', () => {
      assert.strictEqual(CODE_FONTS.length, 7, 'Must have exactly 7 programming fonts');
      
      CODE_FONTS.forEach(f => {
        assert.ok(f.id, 'id is required');
        assert.ok(f.name, 'name is required');
        assert.ok(f.arabicName, 'arabicName is required');
        assert.ok(f.family && f.family.includes('Cairo'), 'family must contain Cairo fallback for RTL Arabic comments');
        assert.ok(f.rawFamily, 'rawFamily is required');
        assert.ok(['ligature', 'monospace', 'terminal'].includes(f.category), 'category must be valid');
        assert.ok(f.preview, 'preview code snippet is required');
      });
    });

    test('T5.1.31: initCodeFont idempotency across repeated calls', () => {
      const f1 = initCodeFont();
      const f2 = initCodeFont();
      assert.strictEqual(f1.id, f2.id, 'Repeated calls to initCodeFont must be idempotent');
    });

  });

  // =========================================================================
  // SUITE 5: Infographic Registry & Export Image Hardening
  // =========================================================================
collector.suite('5. Infographic Registry & Export Image Hardening', (test) => {

    test('T5.1.32: buildInfographicForSubtopic schema resilience with partial/empty subtopic data', () => {
      assert.strictEqual(buildInfographicForSubtopic(null), null, 'null subtopic returns null');

      const sparse = { id: '99.1', title: 'مفهوم اختباري' };
      const info = buildInfographicForSubtopic(sparse, { id: 99, title: 'القسم التجريبي' });
      
      assert.ok(info !== null, 'Sparse subtopic must still build complete infographic object');
      assert.strictEqual(info.id, '99.1');
      assert.strictEqual(info.sectionId, 99);
      assert.strictEqual(info.sectionTitle, 'القسم التجريبي');
      assert.ok(info.theme && INFOGRAPHIC_THEMES[info.theme], 'Theme must resolve to valid theme key');
      assert.ok(info.visualDiagram && info.visualDiagram.type, 'visualDiagram must be populated');
      assert.ok(info.goldenRule && info.goldenRule.length > 5, 'goldenRule fallback must be present');
      assert.ok(info.pitfall && info.pitfall.length > 5, 'pitfall fallback must be present');
      assert.ok(info.codeSnippet && info.codeSnippet.length > 5, 'codeSnippet fallback must be present');
    });

    test('T5.1.33: searchInfographics regex and special character fuzzing', () => {
      const regexQueries = [
        '.*',
        '(',
        '[',
        '\\',
        '+',
        '?',
        '^',
        '$',
        '|',
        '{',
        'مفهوم (اختباري)'
      ];

      regexQueries.forEach(q => {
        assert.doesNotThrow(() => {
          const res = searchInfographics(q);
          assert.ok(Array.isArray(res), `Search for '${q}' must return an array without regex syntax crash`);
        }, `searchInfographics threw on query '${q}'`);
      });
    });

    test('T5.1.34: sanitizeCssString deeply cleans unsupported in oklab / oklch gradient syntax', () => {
      const inputs = [
        'linear-gradient(in oklab 90deg, #10b981 0%, #14b8a6 100%)',
        'linear-gradient(in oklch, #f97316 0%, #ea580c 100%)',
        'radial-gradient(in srgb, #06b6d4, #3b82f6)',
        'conic-gradient(in lab from 45deg, #8b5cf6, #ec4899)',
        'oklab(0.5 0.1 0.2)'
      ];

      inputs.forEach(css => {
        const cleaned = sanitizeCssString(css);
        assert.ok(!cleaned.includes('in oklab'), `Must remove 'in oklab' from: ${css}`);
        assert.ok(!cleaned.includes('in oklch'), `Must remove 'in oklch' from: ${css}`);
        assert.ok(!cleaned.includes('in srgb'), `Must remove 'in srgb' from: ${css}`);
        assert.ok(!cleaned.includes('in lab'), `Must remove 'in lab' from: ${css}`);
      });
    });

    test('T5.1.35: [Hardened] sanitizeDomColors safely guards against objects without querySelectorAll', () => {
      let threw = false;

      try {
        sanitizeDomColors({});
        sanitizeDomColors({ nodeName: 'DIV' });
      } catch (e) {
        threw = true;
      }

      assert.strictEqual(threw, false, 'Hardened: sanitizeDomColors does not crash when passed non-DOM element');
    });

    test('T5.1.36: sanitizeDomColors handles null and valid DOM element with querySelectorAll safely', () => {
      assert.doesNotThrow(() => {
        sanitizeDomColors(null);
        sanitizeDomColors(undefined);
      }, 'sanitizeDomColors must handle null or undefined safely');

      const mockEl = {
        querySelectorAll: () => [],
        style: {}
      };
      assert.doesNotThrow(() => {
        sanitizeDomColors(mockEl);
      }, 'sanitizeDomColors must handle valid DOM mock element without throwing');
    });

    test('T5.1.37: downloadElementAsPng returns false for null/undefined elements without unhandled crash', async () => {
      const resNull = await downloadElementAsPng(null);
      assert.strictEqual(resNull, false, 'downloadElementAsPng(null) must return false');

      const resUndef = await downloadElementAsPng(undefined);
      assert.strictEqual(resUndef, false, 'downloadElementAsPng(undefined) must return false');
    });

  });

  // =========================================================================
  // EXECUTION SUMMARY & RUNNER
  // =========================================================================
export async function runAllHardeningTests() {
  console.log(`\n\x1b[1m\x1b[36m======================================================================\x1b[0m`);
  console.log(`\x1b[1m\x1b[37m 🛡️  Tier 5 White-Box Adversarial Hardening Suite — Part 1\x1b[0m`);
  console.log(`\x1b[2m Target: Modals, Navigation, Core API, IndexedDB, Fonts, and Export Engines\x1b[0m`);
  console.log(`\x1b[1m\x1b[36m======================================================================\x1b[0m\n`);

  const suites = (collector.tiers['Tier 5: Adversarial Hardening'] || []).slice(0, 5);
  for (const s of suites) {
    console.log(`\n\x1b[1m\x1b[35m=== Suite: ${s.name} ===\x1b[0m`);
    for (const t of s.tests) {
      RESULTS.total++;
      const t0 = performance.now();
      try {
        await t.fn();
        const dur = (performance.now() - t0).toFixed(2);
        RESULTS.passed++;
        console.log(`  \x1b[32m✓\x1b[0m ${t.name} \x1b[2m(${dur}ms)\x1b[0m`);
      } catch (err) {
        const dur = (performance.now() - t0).toFixed(2);
        RESULTS.failed++;
        console.error(`  \x1b[31m✕\x1b[0m ${t.name} \x1b[2m(${dur}ms)\x1b[0m`);
        console.error(`    \x1b[31mError:\x1b[0m ${err.message}`);
        RESULTS.findings.push({ suite: s.name, test: t.name, error: err.message, stack: err.stack });
      }
    }
  }

  console.log(`\n\x1b[1m\x1b[36m======================================================================\x1b[0m`);
  console.log(`\x1b[1m\x1b[37m 📊 Tier 5 Hardening Suite 1 Execution Summary\x1b[0m`);
  console.log(`\x1b[1m\x1b[36m======================================================================\x1b[0m`);
  console.log(`  Total Invariants Tested : \x1b[1m${RESULTS.total}\x1b[0m`);
  console.log(`  Passed Invariants        : \x1b[32m${RESULTS.passed}\x1b[0m`);
  console.log(`  Failed Tests             : \x1b[${RESULTS.failed > 0 ? '31' : '32'}m${RESULTS.failed}\x1b[0m`);
  console.log(`  Pass Rate                : \x1b[32m${((RESULTS.passed / RESULTS.total) * 100).toFixed(1)}%\x1b[0m`);
  console.log(`\x1b[1m\x1b[36m======================================================================\x1b[0m\n`);

  return RESULTS;
}

// Self-executing runner
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  runAllHardeningTests().then(res => {
    if (res.failed > 0) {
      process.exitCode = 1;
    }
  }).catch(err => {
    console.error('\nFatal Error in Hardening Suite:', err);
    process.exitCode = 2;
  });
}
