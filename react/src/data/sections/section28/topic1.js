// src/data/sections/section28/topic1.js
// القسم 28: بناء التطبيقات ونشرها - الموضوع 1: إعداد نسخة الإنتاج وتحليل الحزم

export const topic1 = {
  id: "28.1",
  title: "إعداد نسخة الإنتاج وتحليل الحزم",
  englishTitle: "Production Build Preparation & Bundle Analysis",
  description:
    "الدليل الفني الشامل لتهيئة تطبيقات React للانطلاق نحو الإنتاج: فهم الفروقات المعمارية بين بيئة التطوير (Development) وبيئة الإنتاج (Production)، أسرار عملية البناء وتجزئة الأكواد Tree Shaking والضغط Minification، إدارة متغيرات البيئة بدقة وحماية الأسرار من التسرب للعميل، ضبط عناوين الـ API الأساسية بمرونة، تحليل أوزان الحزم البرمجية بالأدوات البصرية، وإدارة خرائط المصدر Source Maps بأمان، مع اختبار نسخة الإنتاج محلياً قبل النشر.",
  subtopics: [
    {
      id: "28.1.a",
      title: "فهم الفرق بين بيئة التطوير وبيئة الإنتاج",
      englishTerm: {
        term: "Development vs Production Environments",
        pronunciation: "ديفيلوبمنت فيرسس برودكشن إنفيرونمنتس",
        meaning: "المقارنة بين بيئة كتابة الكود السريعة والمحملة بأدوات الفحص والتشخيص، وبيئة التشغيل النهائية المحسنة للسرعة والأمان"
      },
      description:
        "في بيئة التطوير (Development)، يكون الهدف الأساسي هو راحة المبرمج وسرعة اكتشاف الأخطاء؛ لذلك يعمل خادم التطوير بتقنية Hot Module Replacement (HMR)، وتكون رسائل التحذير مفصلة، ويتم تشغيل React StrictMode لإعادة رندر المكونات عمداً لكشف الآثار الجانبية، ولا يتم ضغط الكود. في المقابل، بيئة الإنتاج (Production) مخصصة حصراً للمستخدم النهائي؛ حيث يتم تجريد الكود من كافة رسائل التحذير وأكواد التصحيح، وتفعيل تقنية اقتطاع الأكواد الميتة (Tree Shaking)، وضغط وتعتيم الشيفرة (Minification & Obfuscation)، وتقسيم الحزم إلى قطع صغيرة بأسماء تحمل بصمات تشفير (Content Hashing) لتمكين الكاش طويل الأمد بأقصى سرعة ممكنة.",
      realWorldAnalogy:
        "بيئة التطوير تشبه ورشة صانع السيارات وهي مليئة بأجهزة القياس وأسلاك الاختبار والرافعات الهيدروليكية المفتوحة. بينما بيئة الإنتاج هي السيارة بعد الانتهاء من تصنيعها وإغلاق هيكلها الخارجي بطلاء فاخر وصقل محركها لتباع في المعرض وتنطلق على الطريق السريع بأعلى سرعة وانسيابية.",
      whyItMatters:
        "تشغيل تطبيق React بحزمة التطوير في الإنتاج يؤدي إلى كارثة في الأداء؛ حيث يكون حجم الملفات أضخم بـ 5 إلى 8 أضعاف وتكون سرعة التنفيذ أبطأ بنسبة تفوق 40%، فضلاً عن كشف تفاصيل الكود والتحذيرات للجمهور.",
      syntax:
        "// فحص البيئة الحالية برمجياً في كود React:\nif (process.env.NODE_ENV === 'production') {\n  // كود ينفذ فقط في بيئة الإنتاج\n} else {\n  // كود مخصص لأدوات المطور والمحاكاة\n}",
      codeExample: `// مثال بسيط: عزل أدوات التشخيص والمراقبة عن نسخة الإنتاج
import React from 'react';

function DiagnosticLogger({ data }) {
  // فحص ما إذا كان التطبيق يعمل في بيئة التطوير
  const isDev = import.meta.env.DEV;

  // تسجيل البيانات في وحدة التحكم فقط أثناء التطوير
  if (isDev) {
    console.log('🔍 [Dev Inspector] حالة البيانات الحالية:', data);
  }

  return (
    <div className="p-3 bg-slate-900 rounded-lg text-xs">
      <span className="text-slate-300">محتوى المكون المحمي...</span>
      {/* ظهور شارة البيئة للمطور فقط */}
      {isDev && (
        <span className="mr-2 px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded text-[10px]">
          وضع التطوير
        </span>
      )}
    </div>
  );
}

export default DiagnosticLogger;`,
      advancedExample: `// مثال متقدم: نظام حماية الإنتاج وتعطيل console.log تلقائياً ومحاكاة المقاييس
// دالة تهيئة يتم استدعاؤها في main.jsx
export function configureProductionGuards() {
  // التحقق من وضع الإنتاج عبر متغيرات Vite القياسية
  if (import.meta.env.PROD) {
    // 1. كتم سجلات console.log و console.debug العادية لحماية خصوصية البيانات
    const noop = () => {};
    console.log = noop;
    console.debug = noop;
    console.info = noop;

    // 2. الإبقاء فقط على console.error و console.warn للرصد الحرج
    console.warn('⚠️ تم تفعيل حماية الإنتاج: تم تعطيل سجلات التصحيح العامة.');

    // 3. تعطيل أدوات React DevTools لمنع التلاعب الخارجي (اختياري)
    if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
      for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === 'function' ? noop : null;
      }
    }
  }
}

// نموذج واجهة لمقارنة خصائص البيئتين
import React from 'react';

export function EnvironmentComparisonCard() {
  const currentEnv = import.meta.env.MODE;

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-slate-100 font-sans">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
        <h3 className="font-bold text-white text-sm">محدد البيئة الحالي (Vite Mode)</h3>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/50 font-mono text-xs">
          {currentEnv}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
          <div className="text-amber-400 font-bold mb-1">🛠️ بيئة التطوير (Development)</div>
          <ul className="text-slate-400 space-y-1 list-disc list-inside">
            <li>خادم محلي سريع مع HMR</li>
            <li>رسائل أخطاء تفصيلية وموسعة</li>
            <li>كود غير مضغوط لتسهيل القراءة</li>
            <li>تفعيل React StrictMode</li>
          </ul>
        </div>

        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
          <div className="text-emerald-400 font-bold mb-1">🚀 بيئة الإنتاج (Production)</div>
          <ul className="text-slate-400 space-y-1 list-disc list-inside">
            <li>ضغط الحزم وتصغير الحجم 90%</li>
            <li>حذف الأكواد الميتة (Tree Shaking)</li>
            <li>بصمات تجزئة لتخزين الكاش الدائم</li>
            <li>أعلى سرعة استجابة وأمان تام</li>
          </ul>
        </div>
      </div>
    </div>
  );
}`,
      output:
        "ضمان فصل منطق التشخيص عن كود الإنتاج، مما يمنح التطبيق سرعة قصوى وأماناً استثنائياً عند رفعه للخوادم الحية.",
      commonMistakes: [
        {
          mistake: "رفع خادم التطوير (npm run dev) إلى بيئة الإنتاج وتشغيله وراء خادم Nginx بدلاً من بناء حزمة الإنتاج.",
          fix: "استخدام npm run build دائماً لإنتاج ملفات HTML وJS وCSS الثابتة داخل مجلد dist/ واستضافتها عبر خادم ويب حقيقي."
        },
        {
          mistake: "ترك أوامر console.log تحوي بيانات حساسة للعملاء (مثل كلمات المرور أو التوكنات) مكشوفة في الإنتاج.",
          fix: "إما مسحها تلقائياً أثناء البناء عبر إضافات Rollup مثل terser أو استبدالها بدوال صامتة في الإنتاج."
        }
      ],
      bestPractices: [
        "اعتمد على import.meta.env.PROD و import.meta.env.DEV في مشاريع Vite للتفرقة النظيفة بين البيئات.",
        "احرص على ألا يحتوي كود الإنتاج على أي مراجع لحزم المحاكاة والتطوير (مثل MSW أو fake-data).",
        "اختبر سلوك التطبيق في بيئة الإنتاج محلياً بانتظام لتفادي المفاجآت التي قد يخفيها خادم التطوير."
      ],
      infographic: {
        title: "المقارنة الجوهرية: التطوير مقابل الإنتاج",
        nodes: [
          { label: "حجم الملفات", desc: "التطوير: 15MB غير مضغوطة ➔ الإنتاج: أقل من 250KB مضغوطة بـ Gzip/Brotli" },
          { label: "الأداء وسرعة التنفيذ", desc: "التطوير: بطيء بسبب الفحوصات ➔ الإنتاج: سرعة 60fps فائقة ومثالية" },
          { label: "الأمان والخصوصية", desc: "التطوير: السجلات والأخطاء مكشوفة ➔ الإنتاج: شيفرة معماة ومحمية" }
        ]
      }
    },
    {
      id: "28.1.b",
      title: "إنشاء نسخة الإنتاج وتجزئة الحزم Production Build",
      englishTerm: {
        term: "Production Build & Tree Shaking",
        pronunciation: "برودكشن بيلد آند تري شيكنج",
        meaning: "عملية تجميع وضغط وتحسين ملفات المشروع لإنتاج حزمة نهائية جاهزة للاستضافة في مجلد dist"
      },
      description:
        "أمر npm run build هو اللحظة التحويلية الكبرى التي يمر بها تطبيق React. يقوم محرك البناء (مثل Rollup المدمج في Vite أو Webpack) بقراءة نقطة الدخول الرئيسية (index.html وmain.jsx) وبناء شجرة الاعتماديات الكاملة للمشروع. تمر العملية بثلاث مراحل رئيسية: 1) Tree Shaking: خض شجرة الكود وحذف أي دوال أو مكونات تم استيرادها ولكن لم يتم استخدامها فعلياً. 2) Minification: إزالة كافة المسافات والتعليقات واختصار أسماء المتغيرات (مثل تحويل calculateUserDiscount إلى a). 3) Code Splitting & Chunking: تقسيم التطبيق إلى قطع صغيرة بأسماء تحوي تجزئة فريدة (مثل index-BrdVhbPP.js)، مما يسمح للمتصفح بتحميل الأجزاء المطلوبة فقط وحفظها في الكاش مدى الحياة.",
      realWorldAnalogy:
        "يشبه إعداد حقيبة السفر للرحلة الجوية؛ تضع كافة ملابسك على السرير (الكود المكتوب)، ثم تتخلص من الملابس غير المناسبة للطقس (Tree Shaking)، وتستخدم أكياس التفريغ الهوائي لضغط الملابس وسحب الهواء منها لأصغر حجم ممكن (Minification)، وتوزع الأغراض الثقيلة في حقائب مستقلة مرقمة (Chunking).",
      whyItMatters:
        "تنتج هذه العملية ملفات ثابتة خفيفة الوزن وخارقة السرعة يمكن استضافتها على أي خادم CDN حول العالم بتكلفة خادم تقارب الصفر وبسرعة تحميل لحظية للعملاء.",
      syntax:
        "# تشغيل عملية البناء للإنتاج في Vite\nnpm run build\n\n# المخرجات تنتج في المجلد:\n/dist",
      codeExample: `// مثال سطر أوامر: تشغيل البناء وتحليل المخرجات في مشروع Vite
$ npm run build

vite v8.3.5 building client environment for production...
transforming...
✓ 2406 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                        1.10 kB │ gzip:     0.66 kB
dist/assets/index-VUlm4zHO.css       193.97 kB │ gzip:    24.16 kB
dist/assets/index.es-9VBItIOv.js     151.37 kB │ gzip:    48.88 kB
dist/assets/index-BrdVhbPP.js      8,826.25 kB │ gzip: 2,339.96 kB
✓ built in 1.51s`,
      advancedExample: `// مثال متقدم: تكوين تقسيم الحزم اليدوي (Manual Chunks) في vite.config.js لتقليل حجم الحزمة الرئيسية
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // تحديد سقف التحذير لحجم الحزمة إلى 600 كيلوبايت
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // تقسيم المكتبات الضخمة إلى حزم مستقلة للاستفادة من كاش المتصفح طويل الأمد
        manualChunks(id) {
          // فصل مكتبات React الأساسية في حزمة مستقلة
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          // فصل مكتبات الرسوم البيانية الضخمة في حزمة منفصلة
          if (id.includes('node_modules/recharts') || id.includes('node_modules/d3')) {
            return 'vendor-charts';
          }
          // فصل أدوات معالجة النصوص وتنسيق الألوان
          if (id.includes('node_modules/lodash') || id.includes('node_modules/date-fns')) {
            return 'vendor-utils';
          }
        }
      }
    }
  }
});`,
      output:
        "توليد حزم مخصصة ومقسمة بدقة في مجلد dist/، مما يمنع تحميل المكتبات الثقيلة إلا عندما يحتاجها المستخدم ويقلل وقت أول رسم للمحتوى (FCP).",
      commonMistakes: [
        {
          mistake: "استيراد مكتبات ضخمة كاملة مثل 'import _ from lodash' بدلاً من استيراد الدوال المحددة 'import debounce from lodash/debounce'، مما يعطل عمل Tree Shaking.",
          fix: "استخدام صيغ ES Modules واستيراد ما تحتاجه فقط أو استخدام مكتبات متوافقة حديثاً مثل lodash-es."
        },
        {
          mistake: "تجاهل تحذير Vite: Some chunks are larger than 500 kB after minification دون تقسيم الكود.",
          fix: "استخدام تقنية React.lazy والتحميل الكسول للمسارات الثقيلة مع إعداد manualChunks في Rollup."
        }
      ],
      bestPractices: [
        "افحص دائماً حجم حزمة الـ Gzip الفعلي المطبوع في الطرفية؛ فهو الحجم الحقيقي الذي سيعبر أسلاك الإنترنت لهواتف المستخدمين.",
        "تأكد من نظافة مجلد dist/ قبل كل بناء عبر التأكد من خيار build.emptyOutDir: true الافتراضي في Vite.",
        "احرص على ألا تزيد الحزمة الأولية الحيوية (Initial Chunk) عن 150 إلى 200 كيلوبايت لضمان تحقيق أعلى درجات Core Web Vitals."
      ],
      infographic: {
        title: "مراحل معالجة البناء (Production Build Pipeline)",
        nodes: [
          { label: "1. Parsing & Tree Shaking", desc: "تحليل الشجرة وحذف الأكواد والدوال المهملة غير المستخدمة" },
          { label: "2. Minification", desc: "إزالة المسافات والتعليقات واختصار أسماء المتغيرات لأقصى ضغط" },
          { label: "3. Code Splitting", desc: "تجزئة الشيفرة إلى حزم chunks مستقلة بحسب المسارات والمكتبات" },
          { label: "4. Content Hashing", desc: "تسمية الملفات ببصمات SHA فريدة لتفعيل الكاش الدائم في المتصفحات" }
        ]
      }
    },
    {
      id: "28.1.c",
      title: "إدارة متغيرات البيئة والأسرار Environment Variables",
      englishTerm: {
        term: "Environment Variables Management",
        pronunciation: "إنفيرونمنت فاريابلز مانجمنت",
        meaning: "فصل إعدادات التشغيل وعناوين الـ API عن الشيفرة المصدرية باستخدام ملفات .env المختلفة"
      },
      description:
        "إدارة متغيرات البيئة هي أحد المبادئ الاثني عشر الأساسية لهندسة التطبيقات السحابية (12-Factor App). الشيفرة المصدرية يجب أن تكون واحدة وموحدة، ولكن سلوكها وعناوين خوادمها يتغير بناءً على البيئة التي تعمل فيها (التطوير المحلي، بيئة الاختبار Staging، أو بيئة الإنتاج Production). يوفر محرك Vite نظام أولويات هرمي ذكي لتحميل ملفات .env: ملف .env (إعدادات افتراضية لكافة البيئات)، و.env.development (خاص بـ npm run dev)، و.env.production (خاص بـ npm run build)، وملفات .env.local (إعدادات خاصة بحاسوبك الشخصي يتم تجاهلها بواسطة Git).",
      realWorldAnalogy:
        "يشبه محول الكهرباء الذكي العالمي؛ جهازك الكهربائي نفسه ثابت ولا تغير فيه أي سلك داخلي، ولكنك تضع له مقبساً يتكيف مع كهرباء 110 فولت في دولة ومع 220 فولت في دولة أخرى دون المساس بالجهاز نفسه.",
      whyItMatters:
        "يمنع الاتصال بقواعد بيانات الإنتاج عن طريق الخطأ أثناء تجاربك المحلية، ويتيح لك تغيير عناوين الخوادم والمفاتيح دون الحاجة لإعادة كتابة الكود البرمجي أو تعديله.",
      syntax:
        "# ملف .env.development:\nVITE_API_URL=http://localhost:5000/api\n\n# ملف .env.production:\nVITE_API_URL=https://api.production.example.com",
      codeExample: `// مثال بسيط: قراءة متغير البيئة واستخدامه في اتصال Axios
import axios from 'axios';

// قراءة عنوان الـ API الأساسي المحدد في ملف البيئة الحالي
const apiBaseUrl = import.meta.env.VITE_API_URL;

// إنشاء مثيل مخصص من Axios مضبوط بالمسار المعتمد
export const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

console.log('✅ تم توجيه الاتصال إلى الخادم:', apiBaseUrl);`,
      advancedExample: `// مثال متقدم: نظام التحقق الصارم من متغيرات البيئة قبل تشغيل التطبيق (Type-Safe Env Validator)
// هذا الملف يوضع في src/config/env.js ويستدعى فوراً في main.jsx لمنع انهيار التطبيق الصامت

class EnvironmentValidator {
  constructor() {
    this.requiredVars = [
      'VITE_API_URL',
      'VITE_APP_TITLE',
      'VITE_AUTH_DOMAIN'
    ];
  }

  validate() {
    const missing = [];

    this.requiredVars.forEach((key) => {
      // التحقق من وجود المتغير وعدم كونه نصاً فارغاً
      if (!import.meta.env[key]) {
        missing.push(key);
      }
    });

    if (missing.length > 0) {
      const errorMessage = \`💥 خطأ تكوين فادح: متغيرات البيئة التالية مفقودة تماماً في ملف .env:
- \${missing.join('\\n- ')}
يرجى مراجعة ملف .env.example وضبط القيم قبل المتابعة.\`;
      
      console.error(errorMessage);
      // في بيئة التطوير نظهر تحذيراً صريحاً يمنع تشغيل الواجهة المعطوبة
      if (import.meta.env.DEV) {
        document.body.innerHTML = \`<div style="padding: 24px; font-family: monospace; background: #fee2e2; color: #991b1b; border: 2px solid #ef4444; border-radius: 8px;">\${errorMessage.replace(/\\n/g, '<br/>')}</div>\`;
      }
      throw new Error(errorMessage);
    }
  }

  get(key) {
    return import.meta.env[key];
  }
}

export const env = new EnvironmentValidator();
env.validate();`,
      output:
        "حماية التطبيق من الانهيارات الصامتة؛ حيث يتم التأكد من وجود كافة المتغيرات المطلوبة فور تشغيل المشروع مع توفير رسائل خطأ إرشادية للمطور.",
      commonMistakes: [
        {
          mistake: "تسمية متغير البيئة في Vite باسم عادي (مثل API_KEY) والارتباك عند ظهوره كـ undefined.",
          fix: "تذكر دائماً أن Vite يتطلب بادئة إجبارية VITE_ (مثل VITE_API_KEY) ليسمح بتمرير المتغير إلى كود جافاسكريبت في المتصفح."
        },
        {
          mistake: "رفع ملفات .env.local التي تحتوي على مفاتيحك الخاصة إلى مستودع Git العام.",
          fix: "التأكد من إدراج كافة ملفات .env.local و.env*.local داخل ملف .gitignore ومشاركة ملف .env.example الخالي من الأسرار فقط."
        }
      ],
      bestPractices: [
        "أنشئ دائماً ملف .env.example يحتوي على أسماء كافة المتغيرات مع قيم توضيحية ليكون دليلاً للمطورين الجدد.",
        "استخدم مكتبات مثل zod أو t3-env للتحقق من أنواع وصحة قيم متغيرات البيئة أثناء وقت البناء.",
        "لا تعتمد على متغيرات البيئة لتمرير أسرار يجب حجبها عن المتصفح؛ لأن أي متغير في كود العميل يمكن استخراجه بسهولة."
      ],
      infographic: {
        title: "ترتيب أولوية تحميل ملفات البيئة في Vite",
        nodes: [
          { label: "1. .env.[mode].local", desc: "أعلى أولوية (إعدادات محلية خاصة بنمط محدد لا تُرفع لـ Git)" },
          { label: "2. .env.[mode]", desc: "خاص بالنمط الحالي (.env.production أو .env.development)" },
          { label: "3. .env.local", desc: "إعدادات محلية عامة لحاسوبك تتجاوز الملف الافتراضي" },
          { label: "4. .env", desc: "أقل أولوية: الإعدادات العامة الافتراضية لكافة الأنماط" }
        ]
      }
    },
    {
      id: "28.1.d",
      title: "أمان المتغيرات المكشوفة للعميل Client-Exposed Variables",
      englishTerm: {
        term: "Client-Side Exposed Variables & Secret Leaks",
        pronunciation: "كلاينت سايد إكسبوزد فاريابلز",
        meaning: "فهم حقيقة أن كافة المتغيرات الممررة لتطبيق React تصبح نصوصاً عامة ومكشوفة لأي مستخدم يفحص المتصفح"
      },
      description:
        "هذه واحدة من أخطر المفاهيم الأمنية التي يجب على كل مطور React استيعابها بصورة قاطعة: تطبيق React هو كود يعمل داخل متصفح المستخدم النهائي (Client-Side). عندما تستخدم متغيراً يحمل بادئة VITE_ (أو NEXT_PUBLIC_ في Next.js)، يقوم محرك البناء باستبدال هذا المتغير بقيمته النصية الصريحة داخل ملف جافاسكريبت النهائي (Hardcoded string). هذا يعني أن أي مفتاح سري (مثل STRIPE_SECRET_KEY أو DATABASE_PASSWORD أو OPENAI_API_KEY) تضعه في ملف .env مع بادئة VITE_، يمكن لأي شخص في العالم استخراجه بضغطة زر واحدة عبر فتح تبويب Sources في أدوات المطور DevTools أو البحث في ملف الـ bundle!",
      realWorldAnalogy:
        "يشبه كتابة الرقم السري لبطاقتك الائتمانية بالخط العريض على قميصك الشفاف؛ حتى لو كنت تعتقد أنك خبأته في جيب داخلي، فإن القميص بأكمله مرئي لكل شخص يمر بجانبك في الشارع.",
      whyItMatters:
        "تسريب المفاتيح السرية في كود العميل قد يؤدي إلى اختراق قواعد بيانات شركتك بالكامل، أو استنزاف ميزانيتك المالية في دقائق عبر استخدام مفاتيح الذكاء الاصطناعي المسروقة.",
      syntax:
        "// ❌ كارثة أمنية محققة:\nVITE_STRIPE_SECRET_KEY=sk_live_123456789\n\n// ✅ الأسلوب الآمن الصحيح (المفاتيح العامة فقط للعميل):\nVITE_STRIPE_PUBLIC_KEY=pk_live_abcdef123",
      codeExample: `// مثال توضيحي: ما يفعله محرك البناء في الكود الحقيقي
// الكود الذي تكتبه أنت في مكون React:
const apiKey = import.meta.env.VITE_MAPS_PUBLIC_KEY;

// ما ينتجه Rollup/Vite في ملف dist/assets/index.js النهائي الذي يراه المستخدم:
const apiKey = "pk_test_AIzaSyD987654321_PUBLIC_ONLY";

// ⚠️ لاحظ: القيمة تم تضمينها كنص صريح مكشوف للجميع!`,
      advancedExample: `// مثال متقدم: المعمارية الآمنة لمعالجة العمليات الحساسة عبر خادم وسيط (BFF - Backend for Frontend)
// 1. في كود React: لا تضع أي مفاتيح سرية، بل تواصل مع خادمك الخلفي الآمن فقط
import React, { useState } from 'react';

export function SecurePaymentForm() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    // استدعاء خادم الـ Node.js أو Serverless Function الخاص بك
    // لا وجود لمفاتيح سرية هنا إطلاقاً!
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 5000, currency: 'usd' })
    });
    const data = await response.json();
    console.log('معرف جلسة الدفع الآمن:', data.clientSecret);
    setLoading(false);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs space-y-3">
      <div className="text-emerald-400 font-bold">🛡️ معمارية المعاملات الحساسة الآمنة</div>
      <p className="text-slate-400">
        المفاتيح السرية محفوظة حصراً في خادم Node.js السحابي، والواجهة تستلم فقط توكنات مؤقتة محدودة الصلاحية.
      </p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold"
      >
        {loading ? 'جارٍ المعالجة الآمنة...' : 'بدء عملية الدفع الآمن'}
      </button>
    </div>
  );
}`,
      output:
        "حماية أسرار الشركة وبياناتها الحساسة بنسبة 100% عبر حظر وجود المفاتيح السرية في كود العميل وحصرها في خوادم Backend المحمية.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن تعمية الكود (Minification / Obfuscation) تجعل المفاتيح السرية محمية ومخفية عن المخترقين.",
          fix: "المخترقون يستخدمون أدوات مسح تلقائية (Regex scanners) تبحث عن أنماط المفاتيح المشهورة مثل sk_live_ وتستخرجها في ثوانٍ حتى من الكود المعمى."
        },
        {
          mistake: "تمرير توكنات صلاحيات الإدارة (Admin Service Role Tokens) في تطبيق React للاتصال بـ Supabase أو Firebase مباشرة.",
          fix: "استخدام مفاتيح العميل العامة المحدودة فقط (Anon / Public Keys) مع تفعيل قواعد أمان الصفوف (Row Level Security - RLS)."
        }
      ],
      bestPractices: [
        "القاعدة الذهبية: أي معلومة توضع في تطبيق React تعتبر عامة ومكشوفة للعالم بأسره؛ لا تضع فيها سراً أبداً.",
        "استخدم أدوات الفحص الأمني مثل git-secrets أو Gitleaks لمنع الـ commit لأي ملف يحوي مفاتيح سرية.",
        "راجع حزمة الإنتاج الناتجة في dist عبر البحث فيها عن أي نصوص سرية قبل نشرها على الإنترنت."
      ],
      infographic: {
        title: "تصنيف المتغيرات: ما يسمح به وما يحظر في React",
        nodes: [
          { label: "✅ مسموح وآمن في العميل", desc: "عناوين API العامة، مفاتيح خرائط جوجل العامة، معرفات التحليلات GA" },
          { label: "⛔ محظور قطعياً في العميل", desc: "مفاتيح Stripe السرية sk_، كلمات مرور قواعد البيانات، توكنات التوقيع JWT Secrets" },
          { label: "🛡️ الحل الهندسي", desc: "حفظ الأسرار في خوادم Backend ومعالجة العمليات عبر نقاط نهاية REST/RPC" }
        ]
      }
    },
    {
      id: "28.1.e",
      title: "إدارة عناوين الـ API الأساسية API Base URLs بمرونة",
      englishTerm: {
        term: "API Base URLs & Proxy Configuration",
        pronunciation: "إيه بي آي بيس يو آر إل آند بروكسي",
        meaning: "تهيئة وإدارة مسارات الخوادم الخلفية ديناميكياً لتجنب مشاكل CORS وتبديل البيئات بسلاسة"
      },
      description:
        "أحد التحديات اليومية لمطور الواجهات هو توجيه طلبات الـ API بسلاسة بين بيئة التطوير المحلية (حيث يعمل السيرفر مثلاً على http://localhost:5000) وبيئة الإنتاج الحقيقية (حيث يعمل الـ API على نطاق فرعي مثل https://api.mysite.com أو مسار نسبي مثل /api). في بيئة التطوير، تظهر مشكلة سياسة مشاركة الموارد عبر الأصول المختلفة (CORS Error) عند إرسال طلبات من منفذ المتصفح 5173 إلى منفذ السيرفر 5000. يوفر Vite ميزة وكيل التطوير (Dev Proxy) في ملف vite.config.js لحل هذه المشكلة محلياً عبر إعادة توجيه الطلبات في الخلفية دون إثارة أخطاء CORS.",
      realWorldAnalogy:
        "يشبه وكيل السفر الشخصي؛ بدلاً من أن تسافر بنفسك وتتعرض لإجراءات الجمارك والتأشيرات المعقدة في كل خطوة (مشاكل CORS)، تسلم طلبك للوكيل المقيم معك في نفس المدينة (خادم الـ Proxy)، وهو يتولى التواصل مع الخوادم الأجنبية بالنيابة عنك ويسلمك النتيجة جاهزة.",
      whyItMatters:
        "تضمن انتقال التطبيق من جهازك إلى السيرفر الحي بنقرة زر واحدة دون الحاجة لتعديل سطر كود واحد أو مواجهة أخطاء CORS المحبطة.",
      syntax:
        "// إعداد خادم الوكيل في vite.config.js\nserver: {\n  proxy: {\n    '/api': {\n      target: 'http://localhost:5000',\n      changeOrigin: true\n    }\n  }\n}",
      codeExample: `// مثال بسيط: إعداد وكيل التطوير في vite.config.js لحل مشاكل CORS محلياً
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // توجيه كافة الطلبات التي تبدأ بـ /api تلقائياً إلى خادم Node.js المحلي
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        // إزالة بادئة /api إذا كان السيرفر لا يتوقعها
        rewrite: (path) => path.replace(/^\\/api/, '')
      }
    }
  }
});`,
      advancedExample: `// مثال متقدم: بنية عميل HTTP ذكي متعدد البيئات مع دعم إعادة المحاولة وتوحيد العناوين
import axios from 'axios';

// دالة ذكية لتحديد الرابط الأساسي للـ API بناءً على البيئة الحالية
function getApiBaseUrl() {
  // إذا كان هناك متغير بيئة صريح تم تحديده، نعتمد عليه
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  // في بيئة التطوير نستخدم المسار النسبي للاستفادة من Vite Proxy
  if (import.meta.env.DEV) {
    return '/api';
  }
  // في بيئة الإنتاج نعتمد على نفس النطاق النسبي لخدمة الإنتاج
  return 'https://api.myproductiondomain.com/v1';
}

export const api = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: 8000,
  withCredentials: true // إرسال ملفات تعريف الارتباط الآمنة مع كل طلب
});

// معترض الطلبات لحقن توكن المصادقة تلقائياً
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

// معترض الاستجابات لمعالجة انتهاء الجلسة 401 موحداً
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('انتهت صلاحية الجلسة، جارٍ إعادة التوجيه لتسجيل الدخول...');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);`,
      output:
        "إرسال واستقبال طلبات الـ API بسلاسة تامة دون الاصطدام بحواجز CORS في التطوير، مع توجيه دقيق ومحمي في خوادم الإنتاج.",
      commonMistakes: [
        {
          mistake: "كتابة روابط الـ API الصريحة بالكامل داخل مكونات React (مثل: fetch('http://localhost:5000/users')) وتفاجؤك بانهيارها عند النشر.",
          fix: "استخدام مسارات نسبية أو قراءة الرابط الأساسي حصراً من متغير البيئة VITE_API_URL أو كائن عميل موحد."
        },
        {
          mistake: "الاعتقاد بأن وكيل Vite (Vite Proxy) سيعمل تلقائياً في بيئة الإنتاج على Vercel أو Netlify.",
          fix: "وكيل Vite مخصص لبيئة التطوير المحلي فقط؛ وفي الإنتاج يجب ضبط التوجيه عبر ملفات تكوين السيرفر مثل vercel.json أو netlify.toml أو Nginx."
        }
      ],
      bestPractices: [
        "استخدم المسارات النسبية (مثل /api/v1/...) كلما أمكن إذا كان الـ Frontend والـ Backend يستضافان على نفس النطاق.",
        "وفر دائماً مهلة زمنية للطلبات (Timeout لا تتجاوز 10 ثوانٍ) لمنع تعليق واجهة المستخدم عند بطء السيرفر.",
        "عزل كافة استدعاءات الـ API داخل مجلد خدمات موحد (src/services/ أو src/api/) وفصلها عن واجهات المكونات."
      ],
      infographic: {
        title: "آلية تدفق طلبات الـ API: التطوير مقابل الإنتاج",
        nodes: [
          { label: "في التطوير (Dev Proxy)", desc: "React (:5173) ➔ وكيل Vite الداخلي ➔ خادم Backend (:5000) بدون أي خطأ CORS" },
          { label: "في الإنتاج (Same Domain)", desc: "React CDN ➔ مسار نسبي (/api) ➔ موازن الأحمال Nginx/Cloudflare ➔ السيرفر الحقيقي" },
          { label: "في الإنتاج (Cross Domain)", desc: "React ➔ رابط كامل (api.domain.com) ➔ تفعيل ترويسات CORS المسموحة في السيرفر" }
        ]
      }
    },
    {
      id: "28.1.f",
      title: "تحليل حجم الحزم البرمجية Bundle Size Analysis",
      englishTerm: {
        term: "Bundle Size Analysis & Visualization",
        pronunciation: "باندل سايز أناليسيس",
        meaning: "فحص وتشريح محتويات ملفات الجافاسكريبت النهائية بيانياً لاكتشاف المكتبات المتضخمة والحد من وزن الحزمة"
      },
      description:
        "كل كيلوبايت إضافي تضيفه إلى حزمة الجافاسكريبت يكلف مستخدميك زمناً إضافياً في التنزيل والتحليل والتنفيذ (Parse & Compile). في مشاريع React، قد تقوم بتثبيت مكتبة بسيطة لأداء وظيفة واحدة وتتفاجأ بأنها أضافت 200 كيلوبايت إلى الحزمة دون علمك! تتيح لك أدوات التحليل البصري (مثل rollup-plugin-visualizer لمشاريع Vite أو webpack-bundle-analyzer) توليد خريطة حرارية تفاعلية (Treemap) تُظهر كافة المكتبات والمكونات بأحجامها ونسبها المئوية من حجم التطبيق الإجمالي، مما يمكنك من رصد 'الديناصورات البرمجية' واستبدالها ببدائل فائقة الخفة.",
      realWorldAnalogy:
        "تشبه فحص فاتورة استهلاك الكهرباء المفصلة لجهاز تلو الآخر في منزلك؛ بدلاً من التذمر من غلاء الفاتورة الإجمالية، تكتشف فوراً أن هناك سخاناً قديماً يستهلك وحده 70% من الطاقة دون مبرر فتقوم باستبداله بجهاز حديث موفر للطاقة.",
      whyItMatters:
        "تقليص حجم الحزمة بنسبة 30% يرفع سرعة تفاعل الصفحة (Interaction to Next Paint - INP) ويقلل معدل ارتداد الزوار على شبكات الهاتف بنسبة تفوق 25%.",
      syntax:
        "# تثبيت إضافة التحليل البصري في Vite:\nnpm install --save-dev rollup-plugin-visualizer\n\n# تشغيل البناء وتوليد تقرير stats.html:\nnpm run build",
      codeExample: `// مثال عملي: إعداد rollup-plugin-visualizer في vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    // توليد ملف تقرير بصري تفاعلي stats.html بعد كل عملية بناء
    visualizer({
      filename: 'dist/stats.html',
      open: true, // فتح التقرير تلقائياً في المتصفح فور انتهاء البناء
      gzipSize: true, // حساب الحجم بعد ضغط Gzip
      brotliSize: true // حساب الحجم بعد ضغط Brotli الحديث
    })
  ]
});`,
      advancedExample: `// مثال متقدم: استبدال المكتبات المتضخمة ببدائل عصرية خفيفة الوزن
// قائمة أشهر المقايضات الهندسية لتقليص حجم حزمة React:

const bundleOptimizationGuide = [
  {
    bloatedLibrary: "moment.js (حوالي 280KB مع حزم اللغات)",
    modernAlternative: "date-fns أو dayjs (أقل من 6KB)",
    savings: "توفير أكثر من 270KB من الجافاسكريبت غير الضروري!"
  },
  {
    bloatedLibrary: "lodash الكاملة (حوالي 72KB)",
    modernAlternative: "استخدام دوال JavaScript الحديثة المدمجة (ES6+) أو lodash-es",
    savings: "توفير 60KB واستغلال Tree Shaking"
  },
  {
    bloatedLibrary: "react-icons (استيراد كافة الأيقونات)",
    modernAlternative: "lucide-react مع استيراد الأيقونات المحددة حصراً",
    savings: "تخفيض الحزمة بنسبة 80% للأيقونات"
  },
  {
    bloatedLibrary: "استيراد مكون محرر النصوص الضخم في أول تحميل",
    modernAlternative: "التحميل الكسول: const Editor = lazy(() => import('./RichEditor'))",
    savings: "تأجيل تحميل 350KB لحين دخول المستخدم لصفحة التحرير"
  }
];

console.table(bundleOptimizationGuide);`,
      output:
        "توليد خريطة حرارية تفاعلية في ملف stats.html تكشف بدقة عن أوزان الحزم والمكتبات المتسببة في بطء التطبيق.",
      commonMistakes: [
        {
          mistake: "استيراد حزم الأيقونات بشكل عشوائي مثل 'import * as Icons from react-icons/fa' مما يجبر المتصفح على تحميل آلاف الأيقونات غير المستخدمة.",
          fix: "استيراد الأيقونات المطلوبة فقط بالاسم: 'import { FaUser, FaLock } from react-icons/fa'."
        },
        {
          mistake: "تجاهل حجم مكتبات التحقق مثل yup أو validator عندما تكون بدائل خفيفة مثل zod تكفي وتوفر الكثير.",
          fix: "التحقق من وزن أي مكتبة قبل تثبيتها عبر موقع Bundlephobia.com."
        }
      ],
      bestPractices: [
        "استخدم موقع Bundlephobia دائماً للتحقق من وزن الحزمة وزمن تنزيلها على شبكات 3G/4G قبل تنفيذ npm install.",
        "اعتمد على React.lazy وSuspense لتقسيم المسارات الكبيرة إلى أجزاء يتم تحميلها عند الطلب فقط (Route-based Code Splitting).",
        "اجعل فحص حجم الحزم خطوة إلزامية في الـ CI عبر أدوات مثل bundlewatch لمنع أي PR يزيد حجم الحزمة عن حد محدد."
      ],
      infographic: {
        title: "خطوات تخسيس وتحسين حجم حزمة React",
        nodes: [
          { label: "1. الفحص البصري", desc: "تشغيل visualizer واكتشاف أثقل المكتبات في ملف stats.html" },
          { label: "2. استبدال المتضخمات", desc: "استبدال moment بـ date-fns واستبدال lodash بـ ES6 المدمج" },
          { label: "3. التحميل الكسول", desc: "تطبيق React.lazy للمسارات ولوحات التحكم المعقدة" },
          { label: "4. حراسة الـ CI", desc: "وضع حد أقصى للحجم لمنع تضخم الحزم مستقبلاً" }
        ]
      }
    },
    {
      id: "28.1.g",
      title: "استخدام خرائط المصدر Source Maps بحذر في الإنتاج",
      englishTerm: {
        term: "Source Maps in Production",
        pronunciation: "سورس مابس إن برودكشن",
        meaning: "ملفات ربط تترجم الكود المضغوط والمعمى إلى الكود المصدري الأصلي لتسهيل تتبع الأخطاء"
      },
      description:
        "عندما يحدث خطأ برمجي في بيئة الإنتاج، تطبع وحدة التحكم رسالة مبهمة مثل: 'Error at a.js:1:3429'، لأن الكود تم ضغطه وتعتيمه واختصار أسمائه. ملفات خرائط المصدر (.map) هي القاموس المترجم الذي يربط بين كل حرف في الكود المضغوط والسطر الأصلي في ملف React المصدري (مثل App.jsx:42). ولكن يكمن الخطر الأمني الجسيم في نشر هذه الملفات علناً على خوادم الإنتاج؛ حيث يستطيع أي شخص في العالم فتح أدوات المتصفح وقراءة كافة ملفات مشروعك المصدرية الأصلية بكل تعليقاتها وهياكلها! لذلك، يجب إدارة خرائط المصدر بذكاء: إما تعطيلها كلياً في الإنتاج، أو رفعها سراً إلى منصات مراقبة الأخطاء مثل Sentry مع حذفها من الخادم العام.",
      realWorldAnalogy:
        "تشبه شفرة فك الأسرار العسكرية؛ الجنود في الميدان يتحدثون بلغة مشفرة مختصرة وسريعة (الكود المضغوط). إذا أضعت دفتر فك الشفرة في الشارع (رفع Source Maps للعامة)، سيقرأ العدو كافة خططك العسكرية الأصلية بسهولة تامة.",
      whyItMatters:
        "تمنع سرقة الشيفرة المصدرية للمنتج التجاري للشركة وحماية منطق الأعمال من الهندسة العكسية، مع الحفاظ في نفس الوقت على القدرة على تتبع الأخطاء الحرجة فور حدوثها.",
      syntax:
        "// تكوين خيارات Source Maps في vite.config.js\nbuild: {\n  sourcemap: false // تعطيلها كلياً في الإنتاج لحماية الكود\n  // أو 'hidden' لتوليدها سراً ورفعها لمنصات التتبع مثل Sentry\n}",
      codeExample: `// مثال عملي: ضبط خرائط المصدر في vite.config.js لحماية الإنتاج
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // الخيارات الشائعة:
    // true: توليد ملفات .map ونشرها (غير موصى به للإنتاج التجاري)
    // false: عدم توليد خرائط مصدر نهائياً (أعلى أمان وأصغر حجم)
    // 'hidden': توليد ملفات .map دون تضمين تعليق الرابط في ملفات JS
    sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true
  }
});`,
      advancedExample: `// مثال متقدم: تكوين رفع خرائط المصدر المخفية إلى Sentry ثم حذفها من حزمة الإنتاج
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    // إضافة وتفعيل إضافة Sentry لرفع خرائط المصدر تلقائياً أثناء البناء
    sentryVitePlugin({
      org: 'my-company',
      project: 'react-frontend',
      authToken: process.env.SENTRY_AUTH_TOKEN,
      // حذف ملفات .map من مجلد dist بعد رفعها بنجاح لمنع تسربها للجمهور
      sourcemaps: {
        filesToDeleteAfterUpload: ['dist/**/*.map']
      }
    })
  ],
  build: {
    // توليد خرائط المصدر ليقرأها Sentry
    sourcemap: 'hidden'
  }
});`,
      output:
        "حماية الشيفرة المصدرية للإنتاج من الفحص العام والقرصنة، مع احتفاظ فريق الهندسة بالقدرة على قراءة أخطاء Sentry بالأسطر الأصلية الدقيقة.",
      commonMistakes: [
        {
          mistake: "ترك sourcemap: true مفعلاً في بيئة الإنتاج لتطبيقات الشركات المغلقة والمشاريع الربحية.",
          fix: "تعطيلها (sourcemap: false) أو استخدام خيار 'hidden' مع رفعها لمنصة حماية الأخطاء الخاصة وحذفها من السيرفر العام."
        },
        {
          mistake: "الاعتقاد بأن ملفات .map تزيد من حجم تنزيل التطبيق للمستخدم العادي في المتصفح.",
          fix: "المتصفح لا يقوم بتنزيل ملفات .map إلا إذا قام المستخدم بفتح أدوات المطور DevTools يدوياً؛ لكن الخطر فيها أمني بحت وليس في سرعة التحميل."
        }
      ],
      bestPractices: [
        "استخدم sourcemap: true دائماً أثناء التطوير المحلي لتمكين تتبع الأخطاء ونقاط التوقف Breakpoints بسهولة.",
        "إذا استخدمت Sentry، فعّل خيار filesToDeleteAfterUpload لحذف ملفات .map فور الانتهاء من رفعها للأرشيف المحمي.",
        "افحص مجلد dist/ بعد البناء وتأكد من عدم وجود أي ملف ينتهي بـ .map قبل رفعه إلى خادمك العام إن لم تكن متعمداً ذلك."
      ],
      infographic: {
        title: "خيارات إدارة خرائط المصدر (Source Maps Strategies)",
        nodes: [
          { label: "sourcemap: false (الافتراضي)", desc: "لا يتم توليد أي خرائط ➔ أمان مطلق ومنع الهندسة العكسية تماماً" },
          { label: "sourcemap: 'hidden'", desc: "توليد ملفات .map دون ربطها ➔ مخصصة للرفع السري لمنصات مثل Sentry" },
          { label: "sourcemap: true", desc: "توليد ونشر الخرائط علناً ➔ مناسب حصراً لبيئات التطوير والمشاريع مفتوحة المصدر" }
        ]
      }
    },
    {
      id: "28.1.h",
      title: "اختبار ومعاينة نسخة الإنتاج محلياً Local Preview",
      englishTerm: {
        term: "Local Production Preview",
        pronunciation: "لوكال برودكشن بريفيو",
        meaning: "تشغيل خادم محلي يحاكي سلوك خوادم الويب الحقيقية لتقديم ملفات مجلد dist واختبارها قبل النشر"
      },
      description:
        "أكبر خطأ يقع فيه المطور هو الاعتماد على خادم التطوير (npm run dev) طوال الوقت والافتراض بأن الكود سيعمل بنفس الطريقة على السيرفر الحي. خادم التطوير يتساهل مع أخطاء عديدة ويختلف في التخزين المؤقت وتوجيه المسارات. لاختبار التطبيق الحقيقي تماماً كما سيراه المستخدمون، توفر أداة Vite أمر المعاينة الفورية: npm run preview (أو استخدام حزم خوادم الويب الثابتة مثل مكتبة serve العالمية). يقوم هذا الأمر بتشغيل خادم ويب خفيف يقدم ملفات مجلد dist/ المبنية بالفعل، مما يمكنك من اختبار سرعة التحميل الواقعية، وتوجيه مسارات الـ SPA، ومطابقة ملفات الكاش قبل إطلاق الكود للإنتاج.",
      realWorldAnalogy:
        "يشبه البروفة النهائية للمسرحية بكامل الأزياء والديكورات والإضاءة والمؤثرات الصوتية قبل يوم واحد من صعود الجمهور إلى مقاعد المسرح؛ تمكنك من رصد أي ثغرة في اللحظة الأخيرة وتداركها قبل أن يراها الجمهور الحقيقي.",
      whyItMatters:
        "يكتشف أخطاء البناء القاتلة، وتضارب المسارات النسبية للصور والخطوط، ومشاكل حزم جافاسكريبت التي تظهر حصراً بعد الضغط والـ Minification.",
      syntax:
        "# خطوات الاختبار المحلي لنسخة الإنتاج:\n1. npm run build\n2. npm run preview\n\n# أو استخدام خادم serve المستقل:\nnpx serve dist -s",
      codeExample: `// مثال سطر أوامر: تشغيل ومعاينة الإنتاج محلياً عبر Vite
# 1. بناء حزمة الإنتاج أولاً للتأكد من خلوها من أخطاء TypeScript أو Vite
$ npm run build

# 2. إطلاق خادم المعاينة المحلي
$ npm run preview

# مخرجات خادم المعاينة:
#   ➜  Local:   http://localhost:4173/
#   ➜  Network: use --host to expose
#   ➜  press h + enter to show help`,
      advancedExample: `// مثال متقدم: تكوين خادم المعاينة المخصص في vite.config.js لمحاكاة رؤوس الأمان وضبط المنافذ
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ضبط سلوك خادم المعاينة المحلي preview
  preview: {
    port: 8080,
    open: true, // فتح المتصفح تلقائياً عند تشغيل الأمر
    strictPort: true,
    // محاكاة رؤوس الأمان وخيارات الكاش للإنتاج
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
});`,
      output:
        "تشغيل خادم محلي سريع يقدم الملفات الثابتة المضغوطة بكفاءة، مما يتيح لك تجربة التطبيق بالسرعة والسلوك الواقعي للمستخدم النهائي.",
      commonMistakes: [
        {
          mistake: "تشغيل npm run preview قبل تنفيذ npm run build، وتلقي خطأ: Output directory 'dist' does not exist.",
          fix: "تذكر دائماً أن preview لا يقوم ببناء الكود، بل يعرض فقط ما تم بناؤه مسبقاً داخل مجلد dist/."
        },
        {
          mistake: "تعديل الكود في محرر VS Code أثناء تشغيل npm run preview وتوقع رؤية التعديل فورياً (ظناً أنه مثل dev server).",
          fix: "خادم preview يقدم ملفات ثابتة مبنية؛ لرؤية أي تعديل يجب إيقاف الأمر، وإعادة تشغيل npm run build ثم npm run preview مجدداً."
        }
      ],
      bestPractices: [
        "افحص شاشة التبويب Network في أدوات المطور أثناء تشغيل preview لقياس حجم الحزم المضغوطة وسرعة التحميل.",
        "قم بتحديث الصفحة (Hard Refresh) داخل مسار فرعي (مثل /dashboard/settings) للتأكد من عدم ظهور خطأ 404.",
        "جرب تشغيل فحص Lighthouse كاملاً على رابط المعاينة المحلي http://localhost:4173 للحصول على درجات أداء دقيقة تحاكي الإنتاج."
      ],
      infographic: {
        title: "خطوات دورة الاختبار النهائي للإنتاج (Local Preview)",
        nodes: [
          { label: "1. npm run build", desc: "ضغط وتعتيم وتجزئة الكود وإنتاج الملفات الثابتة في مجلد dist" },
          { label: "2. npm run preview", desc: "تشغيل خادم ويب محلي مستقل يقدم ملفات dist حصراً" },
          { label: "3. اختبار التصفح والمسارات", desc: "التحقق من عمل الراوتر الداخلي وتحديث الصفحات دون أخطاء 404" },
          { label: "4. فحص Lighthouse", desc: "قياس مؤشرات الأداء والوصولية والـ SEO قبل النشر الفعلي 🚀" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-28-1-1",
      question: "ماذا يحدث عند وضع مفتاح سري (مثل STRIPE_SECRET_KEY) في ملف .env مع بادئة VITE_ واستخدامه في مكون React؟",
      options: [
        "يقوم Vite بتشفير المفتاح بتقنية البلوكشين وحمايته من الظهور.",
        "يتم استبدال المتغير بقيمته النصية الصريحة داخل ملف جافاسكريبت النهائي، مما يجعله مكشوفاً لأي مستخدم يفحص كود المتصفح.",
        "يتم مسح المفتاح تلقائياً وحظر استخدام بطاقات الائتمان.",
        "يعمل المفتاح فقط داخل خادم الشركة الداخلي."
      ],
      correctAnswer: 1,
      explanation:
        "كافة متغيرات العميل (VITE_) تُحقن كنصوص صريحة داخل حزم الجافاسكريبت الموزعة للمتصفح؛ لذا يُحظر تماماً وضع أي مفاتيح سرية في كود العميل لحمايتها من السرقة."
    },
    {
      id: "quiz-28-1-2",
      question: "ما هي الفائدة التقنية لخاصية Tree Shaking أثناء عملية إنشاء نسخة الإنتاج (Production Build)؟",
      options: [
        "إعادة ترتيب الألوان والخطوط تلقائياً بحسب شاشات الهواتف.",
        "حذف الأكواد والدوال والمكونات التي تم استيرادها ولكن لم يتم استخدامها فعلياً في المشروع لتقليص حجم الحزمة.",
        "توليد رسوم متحركة خفيفة لعناصر شجرة الـ DOM.",
        "إصلاح الأخطاء المنطقية في كود جافاسكريبت تلقائياً بالذكاء الاصطناعي."
      ],
      correctAnswer: 1,
      explanation:
        "تقنية Tree Shaking تحلل شجرة الاستيراد في الكود وتقوم بإسقاط واقتطاع كافة الأكواد الميتة (Dead Code) والوظائف غير المستخدمة لتوفير مساحة الحزمة وسرعة التحميل."
    },
    {
      id: "quiz-28-1-3",
      question: "ما هو الغرض الأساسي من استخدام أمر npm run preview في مشاريع Vite؟",
      options: [
        "تشغيل خادم محلي يقدم ملفات الإنتاج المبنية في مجلد dist لاختبار التطبيق وسرعته الحقيقية قبل النشر.",
        "فتح بيئة تحرير تفاعلية لكتابة نصوص CSS.",
        "تنزيل وتحديث حزم npm تلقائياً.",
        "نشر الموقع مباشرة على خوادم AWS مجاناً."
      ],
      correctAnswer: 0,
      explanation:
        "يوفر أمر preview خادم ويب محلي يحاكي بيئة الإنتاج بدقة، حيث يقدم المخرجات المجمعة في dist/ لاختبار التوجيه والكاش والأداء الواقعي قبل رفعه للسيرفرات الحية."
    }
  ],
  exercise: {
    id: "exercise-28-1",
    title: "تكوين إعدادات البناء المتقدمة وتحليل الحزم وحظر خريطة المصدر للإنتاج",
    description:
      "اكتب ملف 'vite.config.js' متكامل لمشروع React يقوم بما يلي:\n1) ضبط خادم الوكيل المحلي proxy لتوجيه /api إلى http://localhost:5000.\n2) دمج أداة visualizer لتوليد تقرير stats.html في مجلد dist.\n3) تعطيل خرائط المصدر sourcemap في بيئة الإنتاج وتفعيلها في التطوير.\n4) تقسيم مكتبات 'react' و'react-dom' في حزمة مستقلة vendor-react عبر manualChunks.",
    hints: [
      "استخدم import { visualizer } from 'rollup-plugin-visualizer'.",
      "استخدم خاصية build.rollupOptions.output.manualChunks لتقسيم الكود.",
      "اضبط build.sourcemap بناءً على قيمة mode أو process.env.NODE_ENV."
    ],
    solution: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      react(),
      // توليد التقرير البصري لأوزان الحزم بعد البناء
      visualizer({
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true
      })
    ],
    server: {
      // إعداد وكيل التطوير المحلي لتجنب أخطاء CORS
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          changeOrigin: true
        }
      }
    },
    build: {
      // حظر خرائط المصدر في الإنتاج لحماية الشيفرة وتفعيلها في التطوير
      sourcemap: !isProduction,
      rollupOptions: {
        output: {
          // تقسيم مكتبات React الأساسية في حزمة مستقلة للاستفادة من الكاش
          manualChunks(id) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
          }
        }
      }
    }
  };
});`
  },
  infographic: {
    title: "خريطة إعداد نسخة الإنتاج وتحليل الحزم في React",
    subtitle: "المسار الهندسي من إدارة متغيرات البيئة إلى ضغط الشيفرة وتجزئة الحزم واختبارها محلياً",
    nodes: [
      {
        id: "env-security",
        title: "1. إدارة البيئات والأمان",
        description: "فصل إعدادات .env واستخدام VITE_ للمتغيرات العامة وحظر الأسرار في كود العميل.",
        badge: "Security & Env"
      },
      {
        id: "api-config",
        title: "2. مرونة عناوين الـ API",
        description: "وكيل التطوير Dev Proxy لتجاوز CORS ومسارات نسبية مرنة في الإنتاج.",
        badge: "API Routing"
      },
      {
        id: "bundling",
        title: "3. البناء والتحسين التلقائي",
        description: "Tree Shaking لاقتطاع الأكواد الميتة والضغط والتعتيم Minification في مجلد dist.",
        badge: "Production Build"
      },
      {
        id: "analysis",
        title: "4. تحليل أوزان الحزم",
        description: "التحليل البصري بـ visualizer واستبدال المكتبات المتضخمة ببدائل خفيفة.",
        badge: "Bundle Analysis"
      },
      {
        id: "preview",
        title: "5. المعاينة والاختبار المحلي",
        description: "تشغيل npm run preview لاختبار الأداء والمسارات والكاش قبل النشر السحابي.",
        badge: "Local Preview"
      }
    ]
  }
};

export default topic1;

