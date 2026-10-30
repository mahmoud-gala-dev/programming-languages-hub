// src/utils/notesDb.js
// قاعدة بيانات IndexedDB محلية شاملة لتدوين وحفظ الملاحظات البرمجية، والمقتطفات المظللة من الكود والشرح
// مع دعم التصدير بصيغة JSON والتخزين الاحتياطي في LocalStorage وبنية متوافقة مع Prisma ORM

const DB_NAME = "ReactRoadmapNotesDB";
const DB_VERSION = 2; // ترقية الإصدار لدعم متجر التظليلات والمقتطفات
const NOTES_STORE = "codeNotes";
const HIGHLIGHTS_STORE = "highlights";

/**
 * فتح اتصال آمن بقاعدة بيانات IndexedDB مع معالجة الترقية
 */
function openDatabase() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error("IndexedDB is not supported in this environment"));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // 1. مخزن ملاحظات الكود
      if (!db.objectStoreNames.contains(NOTES_STORE)) {
        const store = db.createObjectStore(NOTES_STORE, { keyPath: "id", autoIncrement: true });
        store.createIndex("subtopicId", "subtopicId", { unique: false });
        store.createIndex("createdAt", "createdAt", { unique: false });
      }

      // 2. مخزن التظليلات والمقتطفات المحفوظة من الكود والشرح
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
  });
}

// =========================================================================
// 1. عمليات ملاحظات الكود (Code Notes CRUD)
// =========================================================================

/**
 * إضافة ملاحظة جديدة على الكود
 * @param {Object} note { subtopicId, codeTitle, lineNumber, content, tag }
 */
export async function addCodeNote({ subtopicId, codeTitle = "شفرة توضيحية", lineNumber = null, content, tag = "concept" }) {
  const noteData = {
    subtopicId,
    codeTitle,
    lineNumber: lineNumber ? Number(lineNumber) : null,
    tag: tag || "concept",
    content: content.trim(),
    createdAt: new Date().toISOString()
  };

  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(NOTES_STORE, "readwrite");
      const store = tx.objectStore(NOTES_STORE);
      const req = store.add(noteData);
      req.onsuccess = () => resolve({ id: req.result, ...noteData });
      req.onerror = () => reject(req.error);
    });
  } catch {
    return saveNoteToLocalStorage(noteData);
  }
}

/**
 * استرجاع كافة الملاحظات لدرس محدد
 */
export async function getNotesBySubtopic(subtopicId) {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(NOTES_STORE, "readonly");
      const store = tx.objectStore(NOTES_STORE);
      const index = store.index("subtopicId");
      const req = index.getAll(subtopicId);
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return getNotesFromLocalStorage(subtopicId);
  }
}

/**
 * حذف ملاحظة بواسطة معرفها
 */
export async function deleteCodeNote(id) {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(NOTES_STORE, "readwrite");
      const store = tx.objectStore(NOTES_STORE);
      const req = store.delete(Number(id));
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return deleteNoteFromLocalStorage(id);
  }
}

/**
 * تصدير كافة الملاحظات كملف JSON
 */
export async function exportAllNotesAsJson() {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(NOTES_STORE, "readonly");
      const store = tx.objectStore(NOTES_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve(JSON.stringify(req.result, null, 2));
      req.onerror = () => reject(req.error);
    });
  } catch {
    return JSON.stringify(getAllNotesFromLocalStorage(), null, 2);
  }
}

// =========================================================================
// 2. عمليات التظليلات والمقتطفات الذكية (Highlights & Snippets CRUD)
// =========================================================================

/**
 * إضافة تظليل ومقتطف جديد من الكود أو الشرح
 * @param {Object} highlight { subtopicId, subtopicTitle, text, type, color, note }
 */
export async function addHighlight({ 
  subtopicId = "general", 
  subtopicTitle = "درس تعليمي", 
  text = "", 
  type = "explanation", // "explanation" | "code"
  color = "amber",      // "amber" | "emerald" | "cyan" | "purple"
  note = "" 
}) {
  if (!text || !text.trim()) return null;

  const highlightData = {
    subtopicId,
    subtopicTitle,
    text: text.trim(),
    type,
    color,
    note: (note || "").trim(),
    createdAt: new Date().toISOString()
  };

  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(HIGHLIGHTS_STORE, "readwrite");
      const store = tx.objectStore(HIGHLIGHTS_STORE);
      const req = store.add(highlightData);
      req.onsuccess = () => resolve({ id: req.result, ...highlightData });
      req.onerror = () => reject(req.error);
    });
  } catch {
    return saveHighlightToLocalStorage(highlightData);
  }
}

/**
 * استرجاع كافة التظليلات لدرس محدد
 */
export async function getHighlightsBySubtopic(subtopicId) {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(HIGHLIGHTS_STORE, "readonly");
      const store = tx.objectStore(HIGHLIGHTS_STORE);
      const index = store.index("subtopicId");
      const req = index.getAll(subtopicId);
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return getHighlightsFromLocalStorage(subtopicId);
  }
}

/**
 * استرجاع جميع التظليلات في كامل خريطة الطريق
 */
export async function getAllHighlights() {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(HIGHLIGHTS_STORE, "readonly");
      const store = tx.objectStore(HIGHLIGHTS_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return getAllHighlightsFromLocalStorage();
  }
}

/**
 * حذف تظليل بواسطة معرفه
 */
export async function deleteHighlight(id) {
  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(HIGHLIGHTS_STORE, "readwrite");
      const store = tx.objectStore(HIGHLIGHTS_STORE);
      const req = store.delete(Number(id));
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return deleteHighlightFromLocalStorage(id);
  }
}

/**
 * تصدير كافة التظليلات والمقتطفات بصيغة JSON
 */
export async function exportAllHighlightsAsJson() {
  try {
    const all = await getAllHighlights();
    return JSON.stringify(all, null, 2);
  } catch {
    return JSON.stringify(getAllHighlightsFromLocalStorage(), null, 2);
  }
}

// =========================================================================
// 3. دوال التخزين الاحتياطي LocalStorage Fallbacks
// =========================================================================

// --- ملاحظات الكود ---
function getNotesStorageAll() {
  try {
    const data = localStorage.getItem("react_roadmap_code_notes");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveNoteToLocalStorage(note) {
  const all = getNotesStorageAll();
  const id = Date.now();
  const savedNote = { id, ...note };
  all.push(savedNote);
  localStorage.setItem("react_roadmap_code_notes", JSON.stringify(all));
  return savedNote;
}

function getNotesFromLocalStorage(subtopicId) {
  return getNotesStorageAll().filter(n => n.subtopicId === subtopicId);
}

function getAllNotesFromLocalStorage() {
  return getNotesStorageAll();
}

function deleteNoteFromLocalStorage(id) {
  const all = getNotesStorageAll().filter(n => n.id !== Number(id));
  localStorage.setItem("react_roadmap_code_notes", JSON.stringify(all));
  return true;
}

// --- التظليلات والمقتطفات ---
function getHighlightsStorageAll() {
  try {
    const data = localStorage.getItem("react_roadmap_saved_highlights");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveHighlightToLocalStorage(h) {
  const all = getHighlightsStorageAll();
  const id = Date.now();
  const saved = { id, ...h };
  all.push(saved);
  localStorage.setItem("react_roadmap_saved_highlights", JSON.stringify(all));
  return saved;
}

function getHighlightsFromLocalStorage(subtopicId) {
  return getHighlightsStorageAll().filter(h => h.subtopicId === subtopicId);
}

function getAllHighlightsFromLocalStorage() {
  return getHighlightsStorageAll();
}

function deleteHighlightFromLocalStorage(id) {
  const all = getHighlightsStorageAll().filter(h => h.id !== Number(id));
  localStorage.setItem("react_roadmap_saved_highlights", JSON.stringify(all));
  return true;
}
