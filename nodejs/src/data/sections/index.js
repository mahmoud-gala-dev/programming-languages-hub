// src/data/sections/index.js
// محرك التحميل الكسول والذاكرة المؤقتة للأقسام الـ 23 لخريطة طريق Node.js
// Dynamic Chunking & In-Memory Caching Engine

import { ROADMAP_SECTIONS } from '../roadmapMeta.js';

// تصدير البيانات الوصفية الخفيفة لتغذية Sidebar و Navbar دون تحميل محتوى الأقسام الثقيل
export const SECTIONS_META = ROADMAP_SECTIONS;
export { ROADMAP_SECTIONS };

// مسجلات التحميل الكسول الديناميكي لـ 23 قسماً مستقلاً
export const SECTION_LOADERS = {
  1: () => import('./section1.js'),
  2: () => import('./section2.js'),
  3: () => import('./section3.js'),
  4: () => import('./section4.js'),
  5: () => import('./section5.js'),
  6: () => import('./section6.js'),
  7: () => import('./section7.js'),
  8: () => import('./section8.js'),
  9: () => import('./section9.js'),
  10: () => import('./section10.js'),
  11: () => import('./section11.js'),
  12: () => import('./section12.js'),
  13: () => import('./section13.js'),
  14: () => import('./section14.js'),
  15: () => import('./section15.js'),
  16: () => import('./section16.js'),
  17: () => import('./section17.js'),
  18: () => import('./section18.js'),
  19: () => import('./section19.js'),
  20: () => import('./section20.js'),
  21: () => import('./section21.js'),
  22: () => import('./section22.js'),
  23: () => import('./section23.js')
};

// الذاكرة المؤقتة للأقسام المحملة (In-Memory Cache)
export const sectionCache = new Map();

/**
 * جلب بيانات القسم بشكل غير متزامن مع التخزين المؤقت في الذاكرة مع التحقق الصارم من المدخلات
 * @param {number|string} sectionId رقم القسم (1-23)
 * @returns {Promise<any>} كائن القسم التعليمي الكامل
 */
export async function fetchSectionData(sectionId) {
  if (sectionId === null || sectionId === undefined || typeof sectionId === 'boolean' || typeof sectionId === 'symbol') {
    throw new Error(`Section ID "${sectionId}" is invalid or not found in roadmap registry (Must be an integer between 1 and 23)`);
  }

  const numId = Number(sectionId);
  if (isNaN(numId) || !Number.isInteger(numId) || numId < 1 || numId > 23) {
    throw new Error(`Section ID "${sectionId}" is invalid or not found in roadmap registry (Must be an integer between 1 and 23)`);
  }

  if (sectionCache.has(numId)) {
    return sectionCache.get(numId);
  }

  const loader = SECTION_LOADERS[numId];
  if (!loader) {
    throw new Error(`Section ID ${numId} not found in roadmap registry`);
  }

  const module = await loader();
  const sectionData = module[`SECTION_${numId}`] || module.default;
  sectionCache.set(numId, sectionData);
  return sectionData;
}

/**
 * دالة الحصول على كائن القسم (للتوافق التراجعي)
 * ترجع البيانات من الذاكرة المؤقتة إن وجدت، أو بيانات وصفية خفيفة لحين اكتمال التحميل
 * @param {number|string} id رقم القسم
 * @returns {any}
 */
export function getSectionById(id) {
  if (id === null || id === undefined || typeof id === 'boolean' || typeof id === 'symbol') {
    return undefined;
  }
  const numId = Number(id);
  if (isNaN(numId) || !Number.isInteger(numId) || numId < 1 || numId > 23) {
    return undefined;
  }
  if (sectionCache.has(numId)) {
    return sectionCache.get(numId);
  }
  const meta = ROADMAP_SECTIONS.find(s => s.id === numId);
  if (!meta) return undefined;
  return {
    ...meta,
    topics: []
  };
}

/**
 * كائن Proxy للتوافق التراجعي الكامل مع SECTIONS_MAP
 */
export const SECTIONS_MAP = new Proxy({}, {
  get(target, prop) {
    if (typeof prop === 'string' || typeof prop === 'number') {
      const id = Number(prop);
      if (!isNaN(id) && Number.isInteger(id) && id >= 1 && id <= 23) {
        return getSectionById(id);
      }
    }
    return target[prop];
  }
});

export const AVAILABLE_SECTIONS = ROADMAP_SECTIONS.map(meta => getSectionById(meta.id)).filter(Boolean);
