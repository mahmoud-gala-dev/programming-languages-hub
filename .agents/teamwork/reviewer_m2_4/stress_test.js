// e:\KD\lang\.agents\teamwork\reviewer_m2_4\stress_test.js
// Independent Adversarial Stress Test Suite for Milestone 2

import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { pathToFileURL } from 'node:url';

// Setup Mock Browser Environment
class MockLocalStorage {
  constructor() { this.store = new Map(); }
  getItem(k) { return this.store.has(k) ? this.store.get(k) : null; }
  setItem(k, v) { this.store.set(k, String(v)); }
  removeItem(k) { this.store.delete(k); }
  clear() { this.store.clear(); }
}

globalThis.localStorage = new MockLocalStorage();
globalThis.document = {
  documentElement: { style: { setProperty: (k, v) => { document.documentElement.style[k] = v; } } },
  body: { style: { setProperty: (k, v) => { document.body.style[k] = v; } }, appendChild: () => {}, removeChild: () => {} },
  createElement: (tag) => ({
    style: {},
    querySelectorAll: () => [],
    getContext: () => ({
      clearRect: () => {},
      fillRect: () => {},
      getImageData: () => ({ data: [34, 197, 94, 255] })
    })
  })
};

globalThis.window = {
  document: globalThis.document,
  location: { href: 'http://localhost/' },
  dispatchEvent: () => true,
  getComputedStyle: (el) => el.style || {}
};

let passedCount = 0;
let totalCount = 0;

function runTest(name, fn) {
  totalCount++;
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passedCount++;
  } catch (err) {
    console.error(`  ✕ ${name}`);
    console.error(`    Error: ${err.message}`);
    throw err;
  }
}

async function runAsyncTest(name, fn) {
  totalCount++;
  try {
    await fn();
    console.log(`  ✓ ${name}`);
    passedCount++;
  } catch (err) {
    console.error(`  ✕ ${name}`);
    console.error(`    Error: ${err.message}`);
    throw err;
  }
}

console.log('======================================================================');
console.log(' 🔥 REVIEWER 4 — ADVERSARIAL STRESS TEST & INTEGRITY VERIFICATION');
console.log('======================================================================\n');

// --------------------------------------------------------------------
// Section 1: Integrity & Anti-Facade Source Code Scan
// --------------------------------------------------------------------
console.log('--- Section 1: Integrity & Anti-Facade Source Code Scan ---');

await runAsyncTest('INT.1: Zero hardcoded test cheat strings across all M2 src files', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const files = [
    'src/api/gemini.js',
    'src/utils/codeFonts.js',
    'src/utils/infographicRegistry.js',
    'src/utils/notesDb.js',
    'src/utils/exportImage.js'
  ];
  for (const rel of files) {
    const full = path.resolve('e:/KD/lang/nodejs', rel);
    const content = fs.readFileSync(full, 'utf8');
    assert.ok(!content.includes('المفتاح الخامس المفتاح الخامس'), `Found hardcoded hack in ${rel}`);
    assert.ok(!content.includes('test_only'), `Found test backdoor in ${rel}`);
  }
});

// --------------------------------------------------------------------
// Section 2: Gemini API Pool & Failover
// --------------------------------------------------------------------
console.log('\n--- Section 2: Gemini API Pool & Failover ---');

const gemini = await import(pathToFileURL('e:/KD/lang/nodejs/src/api/gemini.js').href);

runTest('GEM.1: Empty and whitespace prompts throw immediately', () => {
  assert.rejects(async () => await gemini.askGeminiTutor(''), /الرجاء إدخال/);
  assert.rejects(async () => await gemini.askGeminiTutor('   '), /الرجاء إدخال/);
  assert.rejects(async () => await gemini.askGeminiTutor(null), /الرجاء إدخال/);
});

runTest('GEM.2: saveGeminiKeysPool cleans, deduplicates, trims and orders keys', () => {
  globalThis.localStorage.clear();
  gemini.saveGeminiKeysPool(['  key_A  ', 'key_B', 'key_A', '', '   ', '  key_C  ']);
  const stored = gemini.getGeminiKeysPool();
  assert.deepEqual(stored, ['key_A', 'key_B', 'key_C']);
  assert.equal(gemini.getActiveApiKey(), 'key_A');
});

runTest('GEM.3: saveUserGeminiApiKey prepends key and prioritizes it', () => {
  gemini.saveUserGeminiApiKey('key_NEW');
  assert.equal(gemini.getActiveApiKey(), 'key_NEW');
  const pool = gemini.getGeminiKeysPool();
  assert.equal(pool[0], 'key_NEW');
  assert.equal(pool.filter(k => k === 'key_NEW').length, 1);
});

await runAsyncTest('GEM.4: Model tier fallback (404 on model 1 cascades to model 2)', async () => {
  gemini.saveGeminiKeysPool(['Test_Key_1']);
  let calledModels = [];
  globalThis.fetch = async (url) => {
    const model = gemini.CANDIDATE_GEMINI_MODELS.find(m => url.includes(m));
    calledModels.push(model);
    if (model === gemini.CANDIDATE_GEMINI_MODELS[0]) {
      return { ok: false, status: 404, json: async () => ({}) };
    }
    return {
      ok: true,
      status: 200,
      json: async () => ({ candidates: [{ content: { parts: [{ text: 'Response from fallback model' }] } }] })
    };
  };

  const reply = await gemini.askGeminiTutor('Test model fallback');
  assert.equal(reply, 'Response from fallback model');
  assert.ok(calledModels.includes(gemini.CANDIDATE_GEMINI_MODELS[0]));
  assert.ok(calledModels.includes(gemini.CANDIDATE_GEMINI_MODELS[1]));
});

await runAsyncTest('GEM.5: Rate limit 429 cascades through 10 keys to recover on 10th', async () => {
  const keys = Array.from({ length: 10 }, (_, i) => `Key_${i + 1}`);
  gemini.saveGeminiKeysPool(keys);
  let attempts = 0;
  globalThis.fetch = async (url) => {
    attempts++;
    if (url.includes('Key_10')) {
      return {
        ok: true,
        status: 200,
        json: async () => ({ candidates: [{ content: { parts: [{ text: 'Success on key 10' }] } }] })
      };
    }
    return { ok: false, status: 429, json: async () => ({}) };
  };

  const reply = await gemini.askGeminiTutor('Test 10 key cascade');
  assert.equal(reply, 'Success on key 10');
  assert.equal(attempts, 10);
});

await runAsyncTest('GEM.6: generateGeminiReply falls back gracefully to local tutor on total failure', async () => {
  gemini.saveGeminiKeysPool(['Failing_Key']);
  globalThis.fetch = async () => {
    return { ok: false, status: 429, json: async () => ({}) };
  };

  const reply = await gemini.generateGeminiReply('سؤال عن الـ Streams', 'Streams');
  assert.ok(reply.includes('مرحباً بك يا بطل!'));
  assert.ok(reply.includes('Streams'));
});

await runAsyncTest('GEM.7: testGeminiKeysInParallel handles 200, 429, 401, 403, 503, and network errors', async () => {
  const testKeys = ['K_200', 'K_429', 'K_401', 'K_403', 'K_503', 'K_NET'];
  globalThis.fetch = async (url) => {
    if (url.includes('K_200')) return { ok: true, status: 200 };
    if (url.includes('K_429')) return { ok: false, status: 429 };
    if (url.includes('K_401')) return { ok: false, status: 401 };
    if (url.includes('K_403')) return { ok: false, status: 403 };
    if (url.includes('K_503')) return { ok: false, status: 503 };
    throw new Error('Network Connection Refused');
  };

  const results = await gemini.testGeminiKeysInParallel(testKeys);
  assert.equal(results.length, 6);
  assert.equal(results.find(r => r.key === 'K_200').status, 'active');
  assert.equal(results.find(r => r.key === 'K_429').status, 'exhausted');
  assert.equal(results.find(r => r.key === 'K_401').status, 'invalid');
  assert.equal(results.find(r => r.key === 'K_403').status, 'invalid');
  assert.equal(results.find(r => r.key === 'K_503').status, 'invalid');
  assert.equal(results.find(r => r.key === 'K_NET').status, 'error');
});

// --------------------------------------------------------------------
// Section 3: Code Typography Studio (codeFonts.js)
// --------------------------------------------------------------------
console.log('\n--- Section 3: Code Typography Studio (codeFonts.js) ---');

const codeFonts = await import(pathToFileURL('e:/KD/lang/nodejs/src/utils/codeFonts.js').href);

runTest('FONT.1: CODE_FONTS contains exactly 7 fonts meeting interface contract', () => {
  assert.equal(codeFonts.CODE_FONTS.length, 7);
  const validCategories = new Set(['ligature', 'monospace', 'terminal']);
  for (const font of codeFonts.CODE_FONTS) {
    assert.ok(font.id, 'Font id is required');
    assert.ok(font.name, 'Font name is required');
    assert.ok(font.arabicName, 'Font arabicName is required');
    assert.ok(font.family, 'Font family is required');
    assert.ok(font.description, 'Font description is required');
    assert.ok(font.category, `Font category is required on ${font.id}`);
    assert.ok(validCategories.has(font.category), `Invalid category "${font.category}" on ${font.id}`);
  }
});

runTest('FONT.2: Unknown font ID safely defaults to fira-code without crash', () => {
  const font = codeFonts.applyCodeFont('totally-fake-font-id');
  assert.equal(font.id, 'fira-code');
  assert.equal(codeFonts.getActiveCodeFont().id, 'fira-code');
});

runTest('FONT.3: applyCodeFont injects --font-code into document styles and saves to storage', () => {
  codeFonts.applyCodeFont('jetbrains-mono');
  assert.equal(globalThis.localStorage.getItem('nodejs_roadmap_code_font'), 'jetbrains-mono');
  assert.ok(globalThis.document.documentElement.style['--font-code'].includes('JetBrains Mono'));
});

// --------------------------------------------------------------------
// Section 4: Infographic Registry & SVG Schemas
// --------------------------------------------------------------------
console.log('\n--- Section 4: Infographic Registry & SVG Schemas ---');

const info = await import(pathToFileURL('e:/KD/lang/nodejs/src/utils/infographicRegistry.js').href);

runTest('INFO.1: All 5 neon themes are defined with complete color palettes', () => {
  const expectedThemes = ['cyber', 'emerald', 'sunset', 'cosmic', 'ruby'];
  for (const t of expectedThemes) {
    const theme = info.INFOGRAPHIC_THEMES[t];
    assert.ok(theme, `Theme ${t} missing`);
    assert.ok(theme.id && theme.primary && theme.secondary && theme.accent && theme.bg && theme.glow);
  }
});

runTest('INFO.2: renderSvgArchitectureDiagram is safe against null/undefined/string theme', () => {
  const svg1 = info.renderSvgArchitectureDiagram('event_loop', null);
  assert.ok(svg1.startsWith('<svg') && svg1.endsWith('</svg>'));

  const svg2 = info.renderSvgArchitectureDiagram('event_loop', undefined);
  assert.ok(svg2.startsWith('<svg') && svg2.endsWith('</svg>'));

  const svg3 = info.renderSvgArchitectureDiagram('event_loop', 'emerald');
  assert.ok(svg3.includes(info.INFOGRAPHIC_THEMES.emerald.primary));

  const svg4 = info.renderSvgArchitectureDiagram('event_loop', 'invalid-theme-name');
  assert.ok(svg4.includes(info.INFOGRAPHIC_THEMES.cyber.primary));

  const svg5 = info.renderSvgArchitectureDiagram('event_loop', { primary: '#123456' });
  assert.ok(svg5.includes('#123456'));
});

runTest('INFO.3: XML Escaping in subtopic title & englishTitle prevents injection', () => {
  const malicious = {
    title: '<script>alert("XSS")</script> & "Danger"',
    englishTitle: '</text><g id="hacked">'
  };
  const svg = info.renderSvgArchitectureDiagram('universal_flow', 'cyber', malicious);
  assert.ok(!svg.includes('<script>'));
  assert.ok(svg.includes('&lt;script&gt;'));
  assert.ok(!svg.includes('</text><g id="hacked">'));
});

runTest('INFO.4: All 5 core architectural schemas produce valid SVG', () => {
  const schemas = ['event_loop', 'streams_pipeline', 'http_flow', 'db_caching', 'jwt_auth', 'universal_flow'];
  for (const s of schemas) {
    const svg = info.renderSvgArchitectureDiagram(s, 'cosmic', { title: 'Test Node', englishTitle: 'Test Eng' });
    assert.ok(svg.startsWith('<svg'), `Schema ${s} did not start with <svg`);
    assert.ok(svg.includes('viewBox="0 0 800 400"'), `Schema ${s} missing viewBox`);
    assert.ok(svg.endsWith('</svg>'), `Schema ${s} did not end with </svg>`);
  }
});

// --------------------------------------------------------------------
// Section 5: IndexedDB & Fallback Engine (notesDb.js)
// --------------------------------------------------------------------
console.log('\n--- Section 5: IndexedDB & Fallback Engine (notesDb.js) ---');

const notesDb = await import(pathToFileURL('e:/KD/lang/nodejs/src/utils/notesDb.js').href);

await runAsyncTest('NOTES.1: Null and malformed input safety on saveCodeNote & saveHighlight', async () => {
  const id1 = await notesDb.saveCodeNote(null);
  assert.ok(Number.isFinite(id1));

  const id2 = await notesDb.saveHighlight(null);
  assert.ok(Number.isFinite(id2));

  const id3 = await notesDb.saveCodeNote({ lineNumber: 'invalid_number' });
  assert.ok(Number.isFinite(id3));
});

await runAsyncTest('NOTES.2: High-concurrency burst test: 2,000 saves produce 0 duplicate IDs', async () => {
  globalThis.localStorage.clear();
  const count = 2000;
  const promises = [];
  for (let i = 0; i < count; i++) {
    promises.push(notesDb.saveCodeNote({ subtopicId: 'burst-test', content: `Note ${i}` }));
  }
  const ids = await Promise.all(promises);
  assert.equal(ids.length, count);
  const uniqueIds = new Set(ids);
  assert.equal(uniqueIds.size, count, `Detected ${count - uniqueIds.size} collision(s) in burst saves!`);
});

await runAsyncTest('NOTES.3: Polymorphic ID deletion (numeric vs string vs NaN)', async () => {
  globalThis.localStorage.clear();
  const id = await notesDb.saveCodeNote({ subtopicId: 'del-test', content: 'To be deleted' });
  let notes = await notesDb.getCodeNotesBySubtopic('del-test');
  assert.equal(notes.length, 1);

  // Delete via string representation
  await notesDb.deleteCodeNote(String(id));
  notes = await notesDb.getCodeNotesBySubtopic('del-test');
  assert.equal(notes.length, 0);

  // Deletion with null / undefined does not throw or corrupt
  await notesDb.deleteCodeNote(null);
  await notesDb.deleteCodeNote(undefined);
  await notesDb.deleteCodeNote('');
});

await runAsyncTest('NOTES.4: JSON Export exports both highlights and codeNotes', async () => {
  await notesDb.saveCodeNote({ subtopicId: 'exp-test', content: 'Export Note' });
  await notesDb.saveHighlight({ subtopicId: 'exp-test', text: 'Export Highlight' });

  const jsonStr = await notesDb.exportAllNotesToJson();
  const parsed = JSON.parse(jsonStr);
  assert.ok(Array.isArray(parsed.codeNotes));
  assert.ok(Array.isArray(parsed.highlights));
  assert.ok(parsed.codeNotes.length > 0);
  assert.ok(parsed.highlights.length > 0);
});

// --------------------------------------------------------------------
// Section 6: DOM Color Sanitization (exportImage.js)
// --------------------------------------------------------------------
console.log('\n--- Section 6: DOM Color Sanitization (exportImage.js) ---');

const exportImg = await import(pathToFileURL('e:/KD/lang/nodejs/src/utils/exportImage.js').href);

runTest('EXP.1: sanitizeCssString cleans diverse gradient color-space declarations', () => {
  const inputs = [
    'linear-gradient(in oklab, #06b6d4, #3b82f6)',
    'linear-gradient(in oklch 180deg, #10b981, #14b8a6)',
    'radial-gradient(in srgb circle, #8b5cf6, #050811)',
    'conic-gradient(in lab from 45deg, #f43f5e, #fbbf24)',
    'linear-gradient(135deg, in oklab, #f97316 0%, #ea580c 100%)'
  ];

  for (const input of inputs) {
    const cleaned = exportImg.sanitizeCssString(input);
    assert.ok(!cleaned.includes('in oklab'), `Failed to remove in oklab from ${input}`);
    assert.ok(!cleaned.includes('in oklch'), `Failed to remove in oklch from ${input}`);
    assert.ok(!cleaned.includes('in srgb'), `Failed to remove in srgb from ${input}`);
    assert.ok(!cleaned.includes('in lab'), `Failed to remove in lab from ${input}`);
    assert.ok(cleaned.includes('gradient('), `Lost gradient call in ${input}`);
  }
});

runTest('EXP.2: sanitizeCssString transforms functional oklab(...) to rgba(...)', () => {
  const css = 'background-color: oklab(0.6 0.12 -0.05); border: 1px solid oklch(0.7 0.15 140);';
  const cleaned = exportImg.sanitizeCssString(css);
  assert.ok(!cleaned.includes('oklab('));
  assert.ok(!cleaned.includes('oklch('));
  assert.ok(cleaned.includes('rgba('));
});

runTest('EXP.3: sanitizeCssString safely handles null, undefined, non-strings', () => {
  assert.equal(exportImg.sanitizeCssString(null), null);
  assert.equal(exportImg.sanitizeCssString(undefined), undefined);
  assert.equal(exportImg.sanitizeCssString(123), 123);
});

console.log('\n======================================================================');
console.log(` 🏆 ALL ADVERSARIAL TESTS PASSED: ${passedCount}/${totalCount} (100%)`);
console.log('======================================================================\n');
