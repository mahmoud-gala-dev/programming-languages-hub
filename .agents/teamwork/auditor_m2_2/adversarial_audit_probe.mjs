// adversarial_audit_probe.mjs
// Forensic Integrity Audit Probe for Milestone 2 Re-Audit
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const NODEJS_ROOT = path.resolve(__dirname, '../../../nodejs');

console.log('===========================================================');
console.log('🔍 FORENSIC AUDITOR: Milestone 2 Adversarial Integrity Probe');
console.log('===========================================================');

let passCount = 0;
let failCount = 0;

function reportCheck(name, passed, detail = '') {
  if (passed) {
    passCount++;
    console.log(`  ✓ PASS: ${name} ${detail ? '(' + detail + ')' : ''}`);
  } else {
    failCount++;
    console.error(`  ✕ FAIL: ${name} — ${detail}`);
  }
}

// ---------------------------------------------------------
// Check 1: Static Source Code Forensics on gemini.js
// ---------------------------------------------------------
console.log('\n[1] Static Analysis of src/api/gemini.js');
const geminiSrcPath = path.join(NODEJS_ROOT, 'src/api/gemini.js');
const geminiSrc = fs.readFileSync(geminiSrcPath, 'utf-8');

reportCheck(
  'gemini.js has ZERO occurrences of "المفتاح الخامس"',
  !geminiSrc.includes('المفتاح الخامس'),
  'Search returned 0 matches'
);

reportCheck(
  'gemini.js has NO test-specific replacement hacks',
  !geminiSrc.includes('.replace(\'للمفتاح الخامس\'') && !geminiSrc.includes('replace("للمفتاح الخامس"'),
  'Clean pass-through verified'
);

const expectedDefaultKey = 'AI_PLACEHOLDER_KEY';
reportCheck(
  'gemini.js default key matches ORIGINAL_REQUEST.md',
  geminiSrc.includes(expectedDefaultKey),
  'Key AQ.Ab8... found'
);

// ---------------------------------------------------------
// Check 2: Dynamic Behavioral Verification on gemini.js
// ---------------------------------------------------------
console.log('\n[2] Dynamic Behavioral Verification on src/api/gemini.js');
// Mock localStorage
const mockStorage = {};
globalThis.localStorage = {
  getItem: (k) => mockStorage[k] ?? null,
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: (k) => { delete mockStorage[k]; },
  clear: () => { Object.keys(mockStorage).forEach(k => delete mockStorage[k]); }
};

const geminiMod = await import(`file://${geminiSrcPath.replace(/\\/g, '/')}`);

// Test key pool rotation with 10 keys
const tenKeys = Array.from({ length: 10 }, (_, i) => `KEY_${i + 1}`);
geminiMod.saveGeminiKeysPool(tenKeys);

let fetchCalls = [];
globalThis.fetch = async (url, options) => {
  const parsedUrl = new URL(url);
  const keyUsed = parsedUrl.searchParams.get('key');
  fetchCalls.push(keyUsed);

  // First 4 keys return 429, 5th key returns 200 with arbitrary unaltered text
  if (keyUsed === 'KEY_5') {
    return {
      ok: true,
      status: 200,
      json: async () => ({
        candidates: [{
          content: { parts: [{ text: 'Arbitrary Unmodified Response Text #12345' }] }
        }]
      })
    };
  }
  return { ok: false, status: 429, json: async () => ({}) };
};

const tutorRes = await geminiMod.askGeminiTutor('اختبار فحص المجمع');
reportCheck(
  'askGeminiTutor rotates through 429s to Key 5 and returns unadulterated text',
  tutorRes === 'Arbitrary Unmodified Response Text #12345' && fetchCalls.length === 5,
  `5 fetch calls made, got verbatim text: "${tutorRes}"`
);

// Test all 429 exhaustion
fetchCalls = [];
globalThis.fetch = async () => ({ ok: false, status: 429, json: async () => ({}) });
let exhaustionThrew = false;
try {
  await geminiMod.askGeminiTutor('سؤال سيفشل');
} catch (e) {
  exhaustionThrew = true;
}
reportCheck(
  'askGeminiTutor throws error when all keys are exhausted',
  exhaustionThrew,
  'Caught expected pool exhaustion error'
);

// ---------------------------------------------------------
// Check 3: Code Typography Contract on codeFonts.js
// ---------------------------------------------------------
console.log('\n[3] Contract & Behavioral Verification on src/utils/codeFonts.js');
const codeFontsSrcPath = path.join(NODEJS_ROOT, 'src/utils/codeFonts.js');
const codeFontsMod = await import(`file://${codeFontsSrcPath.replace(/\\/g, '/')}`);

reportCheck(
  'CODE_FONTS exports exactly 7 fonts',
  Array.isArray(codeFontsMod.CODE_FONTS) && codeFontsMod.CODE_FONTS.length === 7,
  `Found ${codeFontsMod.CODE_FONTS.length} fonts`
);

const validCategories = new Set(['ligature', 'monospace', 'terminal']);
const fontsCategoryCheck = codeFontsMod.CODE_FONTS.every(f => 
  f.category && validCategories.has(f.category)
);
reportCheck(
  'All 7 fonts have valid category matching [ligature, monospace, terminal]',
  fontsCategoryCheck,
  codeFontsMod.CODE_FONTS.map(f => `${f.id}: ${f.category}`).join(', ')
);

// Check CSS variable injection resilience
globalThis.document = {
  documentElement: {
    style: {
      setProperty: (k, v) => { globalThis.document.documentElement.style[k] = v; }
    }
  },
  body: {
    style: {
      setProperty: (k, v) => { globalThis.document.body.style[k] = v; }
    }
  }
};
globalThis.window = {
  dispatchEvent: () => true
};

const appliedFont = codeFontsMod.applyCodeFont('jetbrains-mono');
reportCheck(
  'applyCodeFont updates --font-code and returns font object',
  appliedFont.id === 'jetbrains-mono' && globalThis.document.documentElement.style['--font-code'].includes('JetBrains Mono'),
  'Font applied successfully'
);

const fallbackFont = codeFontsMod.applyCodeFont('non-existent-font-id');
reportCheck(
  'applyCodeFont safely falls back to default font on invalid font id',
  fallbackFont.id === 'fira-code',
  `Fallback font is ${fallbackFont.id}`
);

// ---------------------------------------------------------
// Check 4: Infographic Registry Null-Safety & SVG Generation
// ---------------------------------------------------------
console.log('\n[4] Null-Safety & Stress Testing on src/utils/infographicRegistry.js');
const infoRegSrcPath = path.join(NODEJS_ROOT, 'src/utils/infographicRegistry.js');
const infoRegMod = await import(`file://${infoRegSrcPath.replace(/\\/g, '/')}`);

reportCheck(
  'INFOGRAPHIC_THEMES exports 5 themes (cyber, emerald, sunset, cosmic, ruby)',
  ['cyber', 'emerald', 'sunset', 'cosmic', 'ruby'].every(t => infoRegMod.INFOGRAPHIC_THEMES[t]),
  'All 5 themes present'
);

const stressCases = [
  { schema: null, theme: null, data: null },
  { schema: undefined, theme: undefined, data: undefined },
  { schema: '', theme: 'emerald', data: {} },
  { schema: 'event_loop', theme: 'sunset', data: { title: 'Loop <&>', englishTitle: 'Test' } },
  { schema: 'streams', theme: 'cosmic', data: { title: 'Streams' } },
  { schema: 'http', theme: 'ruby', data: { title: 'HTTP' } },
  { schema: 'caching', theme: 'cyber', data: { title: 'Cache' } },
  { schema: 'jwt', theme: 'invalid_theme_name', data: { title: 'JWT' } },
  { schema: 'unknown', theme: { primary: '#123456' }, data: { title: 'Custom' } },
];

let allSvgSafe = true;
let svgDetails = [];
for (const tc of stressCases) {
  try {
    const svg = infoRegMod.renderSvgArchitectureDiagram(tc.schema, tc.theme, tc.data);
    if (!svg || typeof svg !== 'string' || !svg.startsWith('<svg') || !svg.endsWith('</svg>')) {
      allSvgSafe = false;
      svgDetails.push(`Invalid SVG structure for schema: ${tc.schema}`);
    }
  } catch (err) {
    allSvgSafe = false;
    svgDetails.push(`Threw error for schema ${tc.schema}: ${err.message}`);
  }
}

reportCheck(
  'renderSvgArchitectureDiagram handles null/undefined/string/partial themes with 0 crashes',
  allSvgSafe,
  svgDetails.length === 0 ? 'All 9 edge cases produced valid SVG' : svgDetails.join('; ')
);

// ---------------------------------------------------------
// Check 5: NotesDb Defensive Guards & ID Collision Resistance
// ---------------------------------------------------------
console.log('\n[5] Defensive Guards & Concurrency Stress on src/utils/notesDb.js');
const notesDbSrcPath = path.join(NODEJS_ROOT, 'src/utils/notesDb.js');
const notesDbMod = await import(`file://${notesDbSrcPath.replace(/\\/g, '/')}`);

// Test null/undefined guards
let guardsPassed = true;
try {
  await notesDbMod.saveCodeNote(null);
  await notesDbMod.saveCodeNote(undefined);
  await notesDbMod.saveCodeNote({});
  await notesDbMod.saveHighlight(null);
  await notesDbMod.saveHighlight(undefined);
  await notesDbMod.saveHighlight({});
  const notes = await notesDbMod.getCodeNotesBySubtopic(null);
  const hls = await notesDbMod.getHighlightsBySubtopic(null);
  await notesDbMod.deleteCodeNote(null);
  await notesDbMod.deleteCodeNote(undefined);
  await notesDbMod.deleteCodeNote('NaN');
  await notesDbMod.deleteHighlight(null);
  await notesDbMod.deleteHighlight(undefined);
  if (!Array.isArray(notes) || notes.length !== 0 || !Array.isArray(hls) || hls.length !== 0) {
    guardsPassed = false;
  }
} catch (err) {
  guardsPassed = false;
  console.error('Guard threw:', err);
}

reportCheck(
  'notesDb methods safely handle null/undefined/empty arguments without throwing',
  guardsPassed,
  'All guards passed'
);

// High-speed burst test: 1,000 saves in tight loop
console.log('  Running 1,000 concurrent burst saves to probe ID collision resistance...');
mockStorage['nodejs_roadmap_code_notes'] = '[]';
const burstIds = new Set();
let burstCollisions = 0;

for (let i = 0; i < 1000; i++) {
  const id = await notesDbMod.saveCodeNote({
    subtopicId: 'sec1-sub1',
    lineNumber: i + 1,
    content: `Note #${i + 1}`
  });
  if (burstIds.has(id)) {
    burstCollisions++;
  }
  burstIds.add(id);
}

reportCheck(
  '1,000 burst saves in localStorage fallback have ZERO ID collisions',
  burstCollisions === 0 && burstIds.size === 1000,
  `Generated 1,000 IDs, collisions: ${burstCollisions}`
);

// Test deletion with string ID vs number ID
const noteToDelete = await notesDbMod.saveCodeNote({ content: 'To be deleted' });
await notesDbMod.deleteCodeNote(String(noteToDelete)); // delete using string
const remainingNotes = await notesDbMod.getCodeNotesBySubtopic('general');
reportCheck(
  'deleteCodeNote polymorphic deletion (string vs number ID) deletes item successfully',
  !remainingNotes.some(n => n.id === noteToDelete),
  `Deleted ID ${noteToDelete} via string ID`
);

// ---------------------------------------------------------
// Check 6: Test Suite Alignment Verification
// ---------------------------------------------------------
console.log('\n[6] Test Suite Alignment & Intent Verification');
const rateLimitTestPath = path.join(NODEJS_ROOT, 'tests/tier2_boundaries/rate_limit_and_timeouts.test.js');
const rateLimitTestSrc = fs.readFileSync(rateLimitTestPath, 'utf-8');

const codeFontsTestPath = path.join(NODEJS_ROOT, 'tests/tier1_features/code_fonts.test.js');
const codeFontsTestSrc = fs.readFileSync(codeFontsTestPath, 'utf-8');

reportCheck(
  'rate_limit_and_timeouts.test.js:42 uses "وصلنا إلى المفتاح الخامس"',
  rateLimitTestSrc.includes('وصلنا إلى المفتاح الخامس'),
  'Grammatical alignment verified'
);

reportCheck(
  'rate_limit_and_timeouts.test.js still asserts 5 attempts and key failover',
  rateLimitTestSrc.includes('assert.equal(attempts, 5)') && rateLimitTestSrc.includes("assert.ok(res.includes('المفتاح الخامس'))"),
  'Rigorous failover verification preserved'
);

reportCheck(
  'code_fonts.test.js:45 verifies category on all fonts',
  codeFontsTestSrc.includes('assert.ok(font.category') && codeFontsTestSrc.includes('validCategories.includes(font.category)'),
  'Interface contract enforcement verified'
);

// ---------------------------------------------------------
// Summary
// ---------------------------------------------------------
console.log('\n===========================================================');
console.log(`TOTAL CHECKS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log(`FORENSIC VERDICT: ${failCount === 0 ? 'CLEAN (NO INTEGRITY VIOLATIONS)' : 'INTEGRITY VIOLATION DETECTED'}`);
console.log('===========================================================');

process.exit(failCount === 0 ? 0 : 1);
