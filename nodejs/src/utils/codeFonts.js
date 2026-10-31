// src/utils/codeFonts.js
// إدارة وتخصيص خطوط الأكواد البرمجية العالمية لمنصة Node.js التعليمية
// تدعم 7 خطوط برمجة عالمية مع الرموز المتصلة (Ligatures) وحفظ الخيار في localStorage

export const CODE_FONTS = [
  {
    id: 'fira-code',
    name: 'Fira Code',
    arabicName: 'فيرا كود (Fira Code)',
    family: "'Fira Code', 'Cairo', monospace",
    rawFamily: 'Fira Code',
    category: 'ligature',
    author: 'Mozilla / Nikita Prokopov',
    badge: 'افتراضي • رموز متصلة (Ligatures)',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    description: 'الخط الأكثر شعبية عالمياً بين المطورين مع دعم الرموز البرمجية المتصلة الذكية (=>, !==, ===).',
    preview: 'const server = http.createServer((req, res) => res.end("OK"));'
  },
  {
    id: 'jetbrains-mono',
    name: 'JetBrains Mono',
    arabicName: 'جيت برينز مونو (JetBrains Mono)',
    family: "'JetBrains Mono', 'Cairo', monospace",
    rawFamily: 'JetBrains Mono',
    category: 'ligature',
    author: 'JetBrains IDE Team',
    badge: 'الأفضل لبيئات التطوير IDEs',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    description: 'مصمم هندسياً بواسطة فريق JetBrains لتقليل إجهاد العين بفضل ارتفاع الحروف المريح والتمييز الدقيق.',
    preview: 'async function handleRequest(req: IncomingMessage): Promise<void> {}'
  },
  {
    id: 'cascadia-code',
    name: 'Cascadia Code',
    arabicName: 'كاسكاديا كود (Cascadia Code)',
    family: "'Cascadia Code', 'Cairo', monospace",
    rawFamily: 'Cascadia Code',
    category: 'ligature',
    author: 'Microsoft Windows Terminal',
    badge: 'عصري وناعم من مايكروسوفت',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    description: 'الخط الرسمي لـ Windows Terminal و VS Code، يتميز بحواف ناعمة وانسيابية فائقة في السطور البرمجية.',
    preview: 'app.get("/api/v1/health", (req, res) => res.json({ status: "up" }));'
  },
  {
    id: 'source-code-pro',
    name: 'Source Code Pro',
    arabicName: 'سورس كود برو (Source Code Pro)',
    family: "'Source Code Pro', 'Cairo', monospace",
    rawFamily: 'Source Code Pro',
    category: 'monospace',
    author: 'Adobe Type Systems',
    badge: 'كلاسيكي متزن وفائق الوضوح',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    description: 'أحد أشهر الخطوط المتزنة من أدوبي، يقدم وضوحاً هندسياً فريداً بين المعاملات الرياضية والأقواس.',
    preview: 'const pipeline = util.promisify(stream.pipeline);'
  },
  {
    id: 'inconsolata',
    name: 'Inconsolata',
    arabicName: 'إنكونسولاتا (Inconsolata)',
    family: "'Inconsolata', 'Cairo', monospace",
    rawFamily: 'Inconsolata',
    category: 'monospace',
    author: 'Raph Levien',
    badge: 'نقي ومثالي للشاشات الدقيقة',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    description: 'خط مونوسبيس كلاسيكي مستوحى من Consolas ومحسن للشاشات عالية الدقة (High-DPI).',
    preview: 'const buffer = Buffer.alloc(1024, "Node.js Core");'
  },
  {
    id: 'space-mono',
    name: 'Space Mono',
    arabicName: 'سبيس مونو (Space Mono)',
    family: "'Space Mono', 'Cairo', monospace",
    rawFamily: 'Space Mono',
    category: 'terminal',
    author: 'Colophon Foundry',
    badge: 'سايبر جرافيكي ريترو',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    description: 'طابع سايبربنك وهندسي مميز يمنح الأكواد شخصية مستقبلية غير تقليدية تلفت الأنظار.',
    preview: 'const EVENT_LOOP_TICK = { phase: "poll", microtasks: 0 };'
  },
  {
    id: 'ubuntu-mono',
    name: 'Ubuntu Mono',
    arabicName: 'أوبونتو مونو (Ubuntu Mono)',
    family: "'Ubuntu Mono', 'Cairo', monospace",
    rawFamily: 'Ubuntu Mono',
    category: 'terminal',
    author: 'Canonical / Dalton Maag',
    badge: 'طبيعي ومريح للعين',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    description: 'خط نظام أوبونتو ذو النهايات المنحنية المريحة جداً لجلسات البرمجة والمذاكرة الطويلة.',
    preview: 'process.on("uncaughtException", (err) => console.error(err));'
  }
];

const STORAGE_KEY = 'nodejs_roadmap_code_font';

/**
 * الحصول على معرف الخط النشط حالياً
 */
export function getActiveCodeFontId() {
  try {
    if (typeof localStorage === 'undefined') return 'fira-code';
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('react_roadmap_code_font');
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
      if (document.documentElement && document.documentElement.style) {
        if (typeof document.documentElement.style.setProperty === 'function') {
          document.documentElement.style.setProperty('--font-code', fontObj.family);
        } else {
          document.documentElement.style['--font-code'] = fontObj.family;
        }
      }
      if (document.body && document.body.style) {
        if (typeof document.body.style.setProperty === 'function') {
          document.body.style.setProperty('--font-code', fontObj.family);
        } else {
          document.body.style['--font-code'] = fontObj.family;
        }
      }
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, fontObj.id);
    }
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') {
      try {
        window.dispatchEvent(new CustomEvent('code-font-changed', { detail: fontObj }));
      } catch {
        // تجاهل بيئات الاختبار بدون CustomEvent كامل
      }
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
