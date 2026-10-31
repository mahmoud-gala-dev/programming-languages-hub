// src/utils/notesDb.js
// قاعدة بيانات IndexedDB محلية شاملة لتدوين وحفظ الملاحظات البرمجية، والتظليلات الذكية لمحتوى Node.js
// يدعم قاعدة البيانات NodejsRoadmapNotesDB (v2) ومخزني codeNotes و highlights مع التخزين الاحتياطي في LocalStorage

const DB_NAME = "NodejsRoadmapNotesDB";
const DB_VERSION = 2;
const NOTES_STORE = "codeNotes";
const HIGHLIGHTS_STORE = "highlights";

const STORAGE_KEY_NOTES = "nodejs_roadmap_code_notes";
const STORAGE_KEY_HIGHLIGHTS = "nodejs_roadmap_saved_highlights";

/**
 * فتح اتصال آمن بقاعدة بيانات IndexedDB
 */
function openDatabase() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error("IndexedDB is not supported in this environment"));
      return;
    }

    try {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        // 1. مخزن ملاحظات الكود
        if (!db.objectStoreNames.contains(NOTES_STORE)) {
          const store = db.createObjectStore(NOTES_STORE, { keyPath: "id", autoIncrement: true });
          store.createIndex("subtopicId", "subtopicId", { unique: false });
          store.createIndex("createdAt", "createdAt", { unique: false });
        }

        // 2. مخزن التظليلات والمقتطفات
        if (!db.objectStoreNames.contains(HIGHLIGHTS_STORE)) {
          const hStore = db.createObjectStore(HIGHLIGHTS_STORE, { keyPath: "id", autoIncrement: true });
          hStore.createIndex("subtopicId", "subtopicId", { unique: false });
          hStore.createIndex("type", "type", { unique: false });
          hStore.createIndex("color", "color", { unique: false });
          hStore.createIndex("createdAt", "createdAt", { unique: false });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    } catch (err) {
      reject(err);
    }
  });
}

// =========================================================================
// التخزين الاحتياطي في LocalStorage (Fallback Helpers)
// =========================================================================

function getLocalStorageArray(key) {
  try {
    if (typeof localStorage === 'undefined') return [];
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setLocalStorageArray(key, arr) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(arr));
    }
  } catch {
    // تجاهل أخطاء التخزين
  }
}

let fallbackIdSeq = 0;

/**
 * توليد معرف رقمي فريد وحتمي للتخزين الاحتياطي يمنع التصادم حتى عند الحفظ فائق السرعة
 */
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

// =========================================================================
// 1. عمليات ملاحظات الكود (Code Notes CRUD)
// =========================================================================

/**
 * حفظ ملاحظة سطرية جديدة على الكود
 * @param {Object} note { subtopicId, lineNumber, tag, content, codeTitle }
 * @returns {Promise<number>}
 */
export async function saveCodeNote(note) {
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

  try {
    const db = await openDatabase();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(NOTES_STORE, "readwrite");
      const store = tx.objectStore(NOTES_STORE);
      const req = store.add(noteData);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  } catch {
    const all = getLocalStorageArray(STORAGE_KEY_NOTES);
    const id = generateUniqueFallbackId(all);
    all.push({ id, ...noteData });
    setLocalStorageArray(STORAGE_KEY_NOTES, all);
    return id;
  }
}

export const addCodeNote = saveCodeNote;

/**
 * استرجاع كافة الملاحظات لدرس محدد
 */
export async function getCodeNotesBySubtopic(subtopicId) {
  if (!subtopicId) return [];
  try {
    const db = await openDatabase();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(NOTES_STORE, "readonly");
      const store = tx.objectStore(NOTES_STORE);
      const index = store.index("subtopicId");
      const req = index.getAll(subtopicId);
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch {
    const all = getLocalStorageArray(STORAGE_KEY_NOTES);
    return all.filter(n => n.subtopicId === subtopicId);
  }
}

export const getNotesBySubtopic = getCodeNotesBySubtopic;

/**
 * حذف ملاحظة برمجية بواسطة معرفها الرقمي
 */
export async function deleteCodeNote(id) {
  if (id === null || id === undefined || id === '') return;
  const numId = Number(id);
  const targetKey = Number.isFinite(numId) ? numId : id;
  try {
    const db = await openDatabase();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(NOTES_STORE, "readwrite");
      const store = tx.objectStore(NOTES_STORE);
      const req = store.delete(targetKey);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    const all = getLocalStorageArray(STORAGE_KEY_NOTES);
    const filtered = all.filter(n => {
      if (n.id === id || n.id === targetKey) return false;
      if (Number.isFinite(numId) && Number(n.id) === numId) return false;
      if (String(n.id) === String(id)) return false;
      return true;
    });
    setLocalStorageArray(STORAGE_KEY_NOTES, filtered);
  }
}

// =========================================================================
// 2. عمليات التظليلات والمقتطفات (Highlights CRUD)
// =========================================================================

/**
 * حفظ تظليل جديد من الشرح أو الكود
 * @param {Object} highlight { subtopicId, title, text, type, color, note, tag }
 * @returns {Promise<number>}
 */
export async function saveHighlight(highlight) {
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

  try {
    const db = await openDatabase();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(HIGHLIGHTS_STORE, "readwrite");
      const store = tx.objectStore(HIGHLIGHTS_STORE);
      const req = store.add(highlightData);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  } catch {
    const all = getLocalStorageArray(STORAGE_KEY_HIGHLIGHTS);
    const id = generateUniqueFallbackId(all);
    all.push({ id, ...highlightData });
    setLocalStorageArray(STORAGE_KEY_HIGHLIGHTS, all);
    return id;
  }
}

export const addHighlight = saveHighlight;

/**
 * استرجاع جميع التظليلات المحفوظة في كامل المنهاج
 */
export async function getAllHighlights() {
  try {
    const db = await openDatabase();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(HIGHLIGHTS_STORE, "readonly");
      const store = tx.objectStore(HIGHLIGHTS_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return getLocalStorageArray(STORAGE_KEY_HIGHLIGHTS);
  }
}

/**
 * استرجاع تظليلات درس محدد
 */
export async function getHighlightsBySubtopic(subtopicId) {
  if (!subtopicId) return [];
  try {
    const db = await openDatabase();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(HIGHLIGHTS_STORE, "readonly");
      const store = tx.objectStore(HIGHLIGHTS_STORE);
      const index = store.index("subtopicId");
      const req = index.getAll(subtopicId);
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch {
    const all = getLocalStorageArray(STORAGE_KEY_HIGHLIGHTS);
    return all.filter(h => h.subtopicId === subtopicId);
  }
}

/**
 * حذف تظليل بواسطة معرفه الرقمي
 */
export async function deleteHighlight(id) {
  if (id === null || id === undefined || id === '') return;
  const numId = Number(id);
  const targetKey = Number.isFinite(numId) ? numId : id;
  try {
    const db = await openDatabase();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(HIGHLIGHTS_STORE, "readwrite");
      const store = tx.objectStore(HIGHLIGHTS_STORE);
      const req = store.delete(targetKey);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    const all = getLocalStorageArray(STORAGE_KEY_HIGHLIGHTS);
    const filtered = all.filter(h => {
      if (h.id === id || h.id === targetKey) return false;
      if (Number.isFinite(numId) && Number(h.id) === numId) return false;
      if (String(h.id) === String(id)) return false;
      return true;
    });
    setLocalStorageArray(STORAGE_KEY_HIGHLIGHTS, filtered);
  }
}

// =========================================================================
// 3. تصدير البيانات (JSON Export)
// =========================================================================

/**
 * تصدير كافة الملاحظات والتظليلات بصيغة JSON
 */
export async function exportAllNotesToJson() {
  const highlights = await getAllHighlights();
  let codeNotes = [];

  try {
    const db = await openDatabase();
    codeNotes = await new Promise((resolve) => {
      const tx = db.transaction(NOTES_STORE, "readonly");
      const store = tx.objectStore(NOTES_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => resolve([]);
    });
  } catch {
    codeNotes = getLocalStorageArray(STORAGE_KEY_NOTES);
  }

  return JSON.stringify({ highlights, codeNotes }, null, 2);
}

export const exportAllNotesAsJson = exportAllNotesToJson;

export async function exportAllHighlightsAsJson() {
  const all = await getAllHighlights();
  return JSON.stringify(all, null, 2);
}
