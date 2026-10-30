// src/utils/codeFonts.js
// إدارة وتخصيص خطوط الأكواد البرمجية العالمية المميزة
// تدعم: Fira Code, JetBrains Mono, Cascadia Code, Source Code Pro, Inconsolata, Space Mono, Ubuntu Mono

export const CODE_FONTS = [
  {
    id: 'fira-code',
    name: 'Fira Code',
    family: "'Fira Code', 'Cairo', monospace",
    rawFamily: 'Fira Code',
    author: 'Mozilla / Nikita Prokopov',
    badge: 'افتراضي • رموز متصلة (Ligatures)',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    description: 'الخط الأكثر شعبية عالمياً بين المطورين مع دعم الرموز البرمجية المتصلة الذكية (=>, !==, ===).',
    preview: 'const calcTotal = (price, tax) => price !== 0 ? price * (1 + tax) : 0;'
  },
  {
    id: 'jetbrains-mono',
    name: 'JetBrains Mono',
    family: "'JetBrains Mono', 'Cairo', monospace",
    rawFamily: 'JetBrains Mono',
    author: 'JetBrains IDE Team',
    badge: 'الأفضل لبيئات التطوير IDEs',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    description: 'مصمم هندسياً بواسطة فريق JetBrains لتقليل إجهاد العين بفضل ارتفاع الحروف المريح والتمييز الدقيق.',
    preview: 'function renderList<T>(items: T[]): Promise<void> { /* 0 vs O, 1 vs l */ }'
  },
  {
    id: 'cascadia-code',
    name: 'Cascadia Code',
    family: "'Cascadia Code', 'Cairo', monospace",
    rawFamily: 'Cascadia Code',
    author: 'Microsoft Windows Terminal',
    badge: 'عصري وناعم من مايكروسوفت',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    description: 'الخط الرسمي لـ Windows Terminal و VS Code، يتميز بحواف ناعمة وانسيابية فائقة في السطور البرمجية.',
    preview: 'export const fetchData = async (url: string) => await fetch(url);'
  },
  {
    id: 'source-code-pro',
    name: 'Source Code Pro',
    family: "'Source Code Pro', 'Cairo', monospace",
    rawFamily: 'Source Code Pro',
    author: 'Adobe Type Systems',
    badge: 'كلاسيكي متزن وفائق الوضوح',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    description: 'أحد أشهر الخطوط المتزنة من أدوبي، يقدم وضوحاً هندسياً فريداً بين المعاملات الرياضية والأقواس.',
    preview: 'const [state, dispatch] = useReducer(reducer, initialState);'
  },
  {
    id: 'inconsolata',
    name: 'Inconsolata',
    family: "'Inconsolata', 'Cairo', monospace",
    rawFamily: 'Inconsolata',
    author: 'Raph Levien',
    badge: 'نقي ومثالي للشاشات الدقيقة',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    description: 'خط مونوسبيس كلاسيكي مستوحى من Consolas ومحسن للشاشات عالية الدقة (High-DPI).',
    preview: 'for (let idx = 0; idx < matrix.length; idx++) { process(idx); }'
  },
  {
    id: 'space-mono',
    name: 'Space Mono',
    family: "'Space Mono', 'Cairo', monospace",
    rawFamily: 'Space Mono',
    author: 'Colophon Foundry',
    badge: 'سايبر جرافيكي ريترو',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    description: 'طابع سايبربنك وهندسي مميز يمنح الأكواد شخصية مستقبلية غير تقليدية تلفت الأنظار.',
    preview: 'const CYBER_PAYLOAD = { id: 0x7F, secure: true, hash: "a9f8" };'
  },
  {
    id: 'ubuntu-mono',
    name: 'Ubuntu Mono',
    family: "'Ubuntu Mono', 'Cairo', monospace",
    rawFamily: 'Ubuntu Mono',
    author: 'Canonical / Dalton Maag',
    badge: 'طبيعي ومريح للعين',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    description: 'خط نظام أوبونتو ذو النهايات المنحنية المريحة جداً لجلسات البرمجة والمذاكرة الطويلة.',
    preview: 'import React, { memo, useMemo } from "react"; // Pure comfort'
  }
];

const STORAGE_KEY = 'react_roadmap_code_font';

/**
 * الحصول على معرف الخط النشط حالياً
 */
export function getActiveCodeFontId() {
  try {
    if (typeof window === 'undefined') return 'fira-code';
    const saved = localStorage.getItem(STORAGE_KEY);
    const exists = CODE_FONTS.some(f => f.id === saved);
    return exists ? saved : 'fira-code';
  } catch {
    return 'fira-code';
  }
}

/**
 * الحصول على كائن الخط النشط حالياً بكافة تفاصيله
 */
export function getActiveCodeFont() {
  const currentId = getActiveCodeFontId();
  return CODE_FONTS.find(f => f.id === currentId) || CODE_FONTS[0];
}

/**
 * تطبيق خط الكود المختار وتعميمه فورياً على كافة الأكواد وحفظه
 */
export function applyCodeFont(fontId) {
  const fontObj = CODE_FONTS.find(f => f.id === fontId) || CODE_FONTS[0];

  try {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--font-code', fontObj.family);
      document.body.style.setProperty('--font-code', fontObj.family);
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, fontObj.id);
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('code-font-changed', { detail: fontObj }));
    }
  } catch (e) {
    console.error('Failed to apply code font:', e);
  }

  return fontObj;
}

/**
 * تهيئة الخط عند إقلاع التطبيق
 */
export function initCodeFont() {
  const currentFont = getActiveCodeFont();
  applyCodeFont(currentFont.id);
  return currentFont;
}

