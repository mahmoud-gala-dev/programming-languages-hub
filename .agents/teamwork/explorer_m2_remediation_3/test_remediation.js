// test_remediation.js - Validation of proposed fixes for Explorer 3
import assert from 'node:assert';

// -----------------------------------------------------------------------------
// Test 1: InfographicRegistry theme resolution
// -----------------------------------------------------------------------------
const INFOGRAPHIC_THEMES = {
  cyber: { id: "cyber", primary: "#06b6d4", secondary: "#3b82f6", accent: "#22d3ee", bg: "#050811" },
  emerald: { id: "emerald", primary: "#10b981", secondary: "#14b8a6", accent: "#06b6d4", bg: "#061712" }
};

function proposedRenderSvg(schemaType, theme = INFOGRAPHIC_THEMES.cyber, subtopicData = {}) {
  const resolvedTheme = (typeof theme === 'string' ? INFOGRAPHIC_THEMES[theme] : theme) || INFOGRAPHIC_THEMES.cyber;
  const primary = resolvedTheme.primary || '#06b6d4';
  const secondary = resolvedTheme.secondary || '#3b82f6';
  const accent = resolvedTheme.accent || '#22d3ee';
  const bg = resolvedTheme.bg || '#050811';
  const safeData = subtopicData || {};
  const rawTitle = safeData.title ?? 'Node.js Architecture';
  const title = String(rawTitle).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const rawEngTitle = safeData.englishTitle ?? '';
  const engTitle = String(rawEngTitle).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `<svg data-bg="${bg}" data-primary="${primary}">${title}</svg>`;
}

// Verification 1
assert.doesNotThrow(() => proposedRenderSvg('event_loop', null));
assert.doesNotThrow(() => proposedRenderSvg('event_loop', undefined));
assert.doesNotThrow(() => proposedRenderSvg('event_loop', 'emerald'));
assert.doesNotThrow(() => proposedRenderSvg('event_loop', null, null));
const resNull = proposedRenderSvg('event_loop', null);
assert.ok(resNull.includes('#050811'), 'Must use cyber theme default when null is provided');
console.log('✓ Verification 1: InfographicRegistry null/string theme resolution verified');

// -----------------------------------------------------------------------------
// Test 2 & 3 & 4: NotesDb ID Generation, Null Safety, and String Deletion
// -----------------------------------------------------------------------------
const store = {};
const mockLocalStorage = {
  getItem: k => store[k] || null,
  setItem: (k, v) => { store[k] = String(v); },
  removeItem: k => { delete store[k]; }
};

let fallbackIdSeq = 0;
function generateUniqueFallbackId(existingItems = []) {
  fallbackIdSeq = (fallbackIdSeq + 1) % 1000;
  const now = Date.now();
  const maxExisting = existingItems.reduce((max, item) => {
    const num = Number(item?.id);
    return Number.isSafeInteger(num) && num > max ? num : max;
  }, 0);
  const baseId = now * 1000 + fallbackIdSeq;
  return Math.max(baseId, maxExisting + 1);
}

function getArray(key) {
  const raw = mockLocalStorage.getItem(key);
  return raw ? JSON.parse(raw) : [];
}
function setArray(key, arr) {
  mockLocalStorage.setItem(key, JSON.stringify(arr));
}

async function proposedSaveCodeNote(note) {
  const safeNote = (typeof note === 'object' && note !== null) ? note : {};
  const parsedLine = safeNote.lineNumber !== undefined && safeNote.lineNumber !== null ? Number(safeNote.lineNumber) : null;
  const noteData = {
    subtopicId: safeNote.subtopicId || "general",
    lineNumber: Number.isFinite(parsedLine) ? parsedLine : null,
    tag: safeNote.tag || "💡 مفهوم",
    content: String(safeNote.content || "").trim(),
    codeTitle: safeNote.codeTitle || "شفرة توضيحية",
    createdAt: safeNote.createdAt || new Date().toISOString()
  };

  const all = getArray('notes');
  const id = generateUniqueFallbackId(all);
  all.push({ id, ...noteData });
  setArray('notes', all);
  return id;
}

async function proposedSaveHighlight(highlight) {
  const safeHighlight = (typeof highlight === 'object' && highlight !== null) ? highlight : {};
  const highlightData = {
    subtopicId: safeHighlight.subtopicId || "general",
    title: safeHighlight.title || safeHighlight.subtopicTitle || "درس Node.js",
    text: String(safeHighlight.text || "").trim(),
    type: safeHighlight.type || "explanation",
    color: safeHighlight.color || "amber",
    note: String(safeHighlight.note || "").trim(),
    tag: safeHighlight.tag || "💡 مفهوم",
    createdAt: safeHighlight.createdAt || new Date().toISOString()
  };

  const all = getArray('highlights');
  const id = generateUniqueFallbackId(all);
  all.push({ id, ...highlightData });
  setArray('highlights', all);
  return id;
}

async function proposedDeleteCodeNote(id) {
  if (id === null || id === undefined || id === '') return;
  const numId = Number(id);
  const targetKey = Number.isFinite(numId) ? numId : id;

  const all = getArray('notes');
  const filtered = all.filter(n => {
    if (n.id === id || n.id === targetKey) return false;
    if (Number.isFinite(numId) && Number(n.id) === numId) return false;
    if (String(n.id) === String(id)) return false;
    return true;
  });
  setArray('notes', filtered);
}

// Verification 2: Null Safety on save
await assert.doesNotReject(async () => {
  const nId = await proposedSaveCodeNote(null);
  assert.ok(typeof nId === 'number');
  const hId = await proposedSaveHighlight(null);
  assert.ok(typeof hId === 'number');
});
console.log('✓ Verification 2: saveCodeNote(null) and saveHighlight(null) are safe');

// Verification 3: String and NaN deletion
setArray('notes', [{ id: 'abc', content: 'string id' }, { id: 456, content: 'num id' }]);
await proposedDeleteCodeNote('abc');
const afterStrDelete = getArray('notes');
assert.equal(afterStrDelete.length, 1);
assert.equal(afterStrDelete[0].id, 456);

await proposedDeleteCodeNote(456);
const afterNumDelete = getArray('notes');
assert.equal(afterNumDelete.length, 0);

// Null deletion should be no-op
setArray('notes', [{ id: 789, content: 'keep' }]);
await proposedDeleteCodeNote(null);
await proposedDeleteCodeNote(undefined);
await proposedDeleteCodeNote('');
assert.equal(getArray('notes').length, 1);
console.log('✓ Verification 3: String/NaN deletion and null safety in deleteCodeNote verified');

// Verification 4: Burst Collision Prevention (500 parallel saves)
store['notes'] = '[]';
const burstPromises = [];
for (let i = 0; i < 500; i++) {
  burstPromises.push(proposedSaveCodeNote({ subtopicId: 'burst.' + i, content: 'note ' + i }));
}
const burstIds = await Promise.all(burstPromises);
const uniqueBurst = new Set(burstIds);
assert.equal(burstIds.length, 500);
assert.equal(uniqueBurst.size, 500, 'All 500 IDs must be strictly unique');
console.log('✓ Verification 4: 500 burst saves produced 0 collisions (100% unique IDs)');

console.log('\n🎉 ALL VERIFICATIONS PASSED SUCCESSFULLY!');
