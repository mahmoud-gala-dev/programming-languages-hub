// src/data/sections/section4/topic2.js
// الموضوع 2: إنشاء مشروع React (Project Setup with Vite & Architecture)

export const SECTION_4_TOPIC_2 = {
  id: "4.2",
  title: "إنشاء مشروع React",
  englishTitle: "Creating a React Project with Vite",
  description: "الدليل العملي الشامل لإطلاق مشاريع React الاحترافية باستخدام أداة Vite الحديثة: فهم ملفات المشروع ومجلداته، تشريح package.json و index.html و main.jsx، تشغيل خادم التطوير فائق السرعة، وإنشاء نسخة الإنتاج النهائية Build.",
  icon: "Rocket",
  subtopics: [
    {
      id: "4.2.a",
      title: "إنشاء مشروع باستخدام Vite",
      englishTitle: "Creating a Project with Vite (Next-Gen Frontend Tooling)",
      definition: "فايت (Vite - كلمة فرنسية تعني 'سريع' وتُنطق 'فيت') هي أداة بناء وتطوير عصرية وخارقة السرعة لمشاريع الواجهات الأمامية أنشأها Evan You (مطور Vue). تفوقت على أداة Create React App (CRA) القديمة بفضل استغلالها لوحدات المتصفح الطبيعية (Native ES Modules) ومحرك esbuild المكتوب بلغة Go السريعة.",
      analogy: "تخيل الفرق بين قطار بخاري قديم وقطار مغناطيسي رصاصة فائق السرعة (Maglev): أداة Create React App القديمة مثل القطار البخاري؛ كانت تجمع وتضغط كل ملفات المشروع وتستغرق دقيقتين أو ثلاثاً لتبدأ فقط! بينما Vite مثل قطار الرصاصة؛ يبدأ خادم التطوير في أقل من 300 ميلي ثانية (في جزء من الثانية) لأنها لا تجمع الملفات مقدماً بل تقدم للمتصفح الملف الذي يحتاجه فقط في تلك اللحظة!",
      why: "أعلنت شركة Meta وفريق React الرسمي رسمياً إيقاف واعتبار أداة Create React App (CRA) قديمة ومهجورة (Deprecated)، وأوصوا جميع المطورين عالمياً باعتماد Vite كأداة المعيار الأول لإنشاء تطبيقات React لسرعتها المذهلة وسهولة تكوينها.",
      terms: [
        { term: "Vite", pronunciation: "فيت", meaning: "أداة بناء وتطوير الواجهات الحديثة فائقة السرعة" },
        { term: "Create React App (CRA)", pronunciation: "كرييت رياكت آب", meaning: "الأداة القديمة المتقاعدة التي تم استبدالها بـ Vite" },
        { term: "Build Tool", pronunciation: "بيلد توول", meaning: "أداة بناء وتجميع حزم المشروع وتحويل الكود للإنتاج" },
        { term: "Native ES Modules", pronunciation: "نيتف إي إس موديولز", meaning: "استغلال دعم المتصفح المباشر لوحدات import و export دون تجميع مسبق" }
      ],
      syntax: "// الأمر السحري لإنشاء مشروع React حديث مع Vite عبر سطر الأوامر:\nnpm create vite@latest my-react-app -- --template react\n\n// الدخول لمجلد المشروع وتثبيت الحزم وتشغيله:\ncd my-react-app\nnpm install\nnpm run dev",
      codeSimple: `// استعراض ملف إعدادات Vite الأساسي: vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// إعداد خادم التطوير وإضافة إضافة دعم React
export default defineConfig({
  plugins: [
    // تمكين دعم JSX وتحديث الكود الفوري السريع Fast Refresh
    react()
  ],
  server: {
    // تحديد منفذ مخصص اختياري بدلاً من الافتراضي 5173
    port: 3000,
    // فتح المتصفح تلقائياً عند بدء التشغيل
    open: true
  }
});`,
      codeAdvanced: `// محاكاة لسلسلة أوامر التثبيت وبدء المشروع في الطرفية (Terminal Simulator)
const terminalSteps = [
  { step: 1, command: 'npm create vite@latest store-frontend -- --template react', desc: 'توليد هيكل المشروع وقالب React في ثانية واحدة' },
  { step: 2, command: 'cd store-frontend', desc: 'الانتقال إلى مجلد المشروع الجديد' },
  { step: 3, command: 'npm install', desc: 'تنزيل حزم react و react-dom و vite في مجلد node_modules' },
  { step: 4, command: 'npm run dev', desc: 'إطلاق خادم التطوير المحلي فائق السرعة على http://localhost:5173' }
];

console.log('--- خطوات إطلاق مشروع React الاحترافي بـ Vite ---');
terminalSteps.forEach(s => {
  console.log(\`[\${s.step}] الأمر: \${s.command}\`);
  console.log(\`    المهمة: \${s.desc}\`);
});`,
      output: `--- خطوات إطلاق مشروع React الاحترافي بـ Vite ---\n[1] الأمر: npm create vite@latest store-frontend -- --template react\n    المهمة: توليد هيكل المشروع وقالب React في ثانية واحدة\n[2] الأمر: cd store-frontend\n    المهمة: الانتقال إلى مجلد المشروع الجديد\n[3] الأمر: npm install\n    المهمة: تنزيل حزم react و react-dom و vite في مجلد node_modules\n[4] الأمر: npm run dev\n    المهمة: إطلاق خادم التطوير المحلي فائق السرعة على http://localhost:5173`,
      mistakes: [
        {
          wrong: `// استخدام أداة create-react-app في عام 2026\n// npx create-react-app my-app // ❌ بطيء جداً، يعاني من ثغرات أمنية قديمة، وغير مدعوم من فريق React!`,
          correct: `// استخدام Vite دائماً:\nnpm create vite@latest my-app -- --template react // ✅ يبدأ في نصف ثانية، خفيف، وأحدث المعايير العالمية`,
          explanation: "أداة CRA لم تعد تُحدث منذ سنوات وهي مهجورة تماماً، ومجتمع React العالمي انتقل رسمياً إلى Vite لمشاريع الـ SPA أو Next.js للـ Fullstack."
        }
      ],
      bestPractices: [
        "استخدم Vite دائماً كخيارك الأول والافتراضي لبناء تطبيقات React المستقلة (SPAs).",
        "احرص على تثبيت إصدار Node.js حديث (الإصدار 18 أو 20 أو 22 LTS) لضمان توافق Vite الكامل.",
        "استخدم العلم `-- --template react` في أمر الإنشاء لتخطي الأسئلة التفاعلية والبدء فوراً."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة سرعة وبنية Vite مقابل Create React App",
        concept: "Vite vs Create React App Architecture",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المعركة المعمارية: Vite مقابل CRA القديم     │
└─────────────────────────────────────────────────────────────┘
  أداة CRA القديمة (Webpack Bundler):
  تجميع وتشفير مئات الملفات ──> انتظار دقيقة كاملة ──> تشغيل الخادم 🐢
  
  أداة Vite الحديثة (Native ESM + esbuild):
  تشغيل الخادم فوراً في 200ms ──> تقديم الملفات المطلوبة فقط عند الطلب ⚡
  
  النتيجة:
  سرعة تشغيل وتعديل فورية لا تقارن تجعل تجربة البرمجة متعة خالصة!`
      }
    },
    {
      id: "4.2.b",
      title: "اختيار قالب JavaScript أو TypeScript",
      englishTitle: "Choosing Your Template: JavaScript vs TypeScript",
      definition: "عند إنشاء مشروع بـ Vite، يمكنك الاختيار بين قالب JavaScript النقي (الملفات بصيغة `.jsx`) وقالب TypeScript المتطور (الملفات بصيغة `.tsx`). يضيف TypeScript فحصاً صارماً لنوع البيانات أثناء كتابة الكود لاكتشاف الأخطاء مبكراً وتوفير إكمال تلقائي مذهل في محرر VS Code.",
      analogy: "تخيل قيادة سيارة:\n1. قالب JavaScript: قيادة سيارة عادية على طريق مفتوح؛ حرية كاملة وسرعة انطلاق، لكن إذا أخطأت في حساب المنعطف قد تقع في حفرة دون تحذير مسبق!\n2. قالب TypeScript: قيادة نفس السيارة مع وجود نظام مساعد القيادة ورادارات ذكية وحزام أمان؛ يرن الجرس وينبهك فوراً قبل 50 متراً إذا حاولت الانعطاف بدون إشارة (ينبهك بالخطأ فور كتابته قبل تشغيل المتصفح)!",
      why: "كلا القالبين معتمدان عالمياً؛ يُفضل JavaScript للمبتدئين للتركيز على استيعاب مفاهيم React أولاً دون تشتت بقواعد الأنواع، بينما يُفضل TypeScript في الشركات الكبرى والمشاريع الضخمة التي يعمل عليها عشرات المبرمجين لضمان عدم كسر العقود البرمجية للـ Props والـ APIs.",
      terms: [
        { term: "JavaScript Template (.jsx)", pronunciation: "جافا سكريبت تمبليت", meaning: "قالب لغة JavaScript القياسي السلس والسريع" },
        { term: "TypeScript Template (.tsx)", pronunciation: "تايب سكريبت تمبليت", meaning: "قالب مدعوم بفحص أنواع البيانات الصارم" },
        { term: "Type Safety", pronunciation: "تايب سيفتي", meaning: "أمان واستقرار أنواع البيانات لتفادي أخطاء التشغيل" },
        { term: "Autocompletion", pronunciation: "أوتو كومبليشن", meaning: "الإكمال التلقائي الذكي لاقتراحات الخصائص في محرر الكود" }
      ],
      syntax: "// 1. إنشاء قالب JavaScript:\nnpm create vite@latest my-js-app -- --template react\n\n// 2. إنشاء قالب TypeScript:\nnpm create vite@latest my-ts-app -- --template react-ts",
      codeSimple: `// مقارنة شكل كتابة المكون في القالبين
// في قالب JavaScript (.jsx):
function UserCardJS({ name, age }) {
  // كتابة حرة وسلسة دون تحديد أنواع مسبقة
  return <div>{name} - {age} سنة</div>;
}

// في قالب TypeScript (.tsx):
// interface UserProps { name: string; age: number; }
// function UserCardTS({ name, age }: UserProps) {
//   return <div>{name} - {age} سنة</div>;
// }`,
      codeAdvanced: `// محاكاة لدور TypeScript في اصطياد أخطاء Props القاتلة قبل التشغيل
// تخيل مكون ينتظر رقماً لحساب السعر
function PriceCalculator({ price, discountPercent }) {
  // في JavaScript: إذا مرر أحدهم نصاً مثل 'عشرة' بدلاً من 10، فستحدث كارثة حسابية NaN!
  const finalPrice = price - (price * (discountPercent / 100));
  return <span>السعر بعد الخصم: {finalPrice} ر.س</span>;
}

// في TypeScript: المحرر يضع خطاً أحمر فوراً ويمنع الحفظ:
// <PriceCalculator price={100} discountPercent="عشرة" /> // ❌ Type 'string' is not assignable to type 'number'!
console.log('TypeScript يحميك من تمرير نصوص لحقول الأرقام!');`,
      output: `TypeScript يحميك من تمرير نصوص لحقول الأرقام!`,
      mistakes: [
        {
          wrong: `// الإصرار على البدء بـ TypeScript في أول أسبوع لك لتعلم React وأنت لا تعرف كيف يعمل useState بعد!\n// "سأتعلم React و TypeScript معاً في نفس اليوم!" // ❌ إحباط وتشتت كبيران بسبب كثرة الخطوط الحمراء!`,
          correct: `// القاعدة الذهبية للمبتدئ: ابدأ بقالب JavaScript (.jsx) حتى تتقن مفاهيم React (Props, State, Hooks, Routing)، ثم انتقل لـ TypeScript لتقوية كودك ✅`,
          explanation: "تعلم React بمفردها يتطلب بناء نموذج ذهني جديد للمكونات؛ وإضافة TypeScript في نفس اللحظة يضاعف العبء الذهني على المبتدئ دون فائدة فورية."
        }
      ],
      bestPractices: [
        "إذا كنت في مرحلة التعلم وبناء النماذج الأولية السريعة (Prototypes)، اختر قالب JavaScript (.jsx).",
        "إذا كنت تبني مشروع تخرج متقدماً، أو تطبيق شركة للإنتاج، فاعتمد قالب TypeScript (.tsx).",
        "تذكر أن الانتقال من JS إلى TS في Vite سهل جداً لاحقاً بمجرد إضافة ملف `tsconfig.json` وتغيير امتدادات الملفات إلى `.tsx`."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة اتخاذ القرار: JavaScript أم TypeScript؟",
        concept: "Template Decision Matrix",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 متى تختار JavaScript ومتى تختار TypeScript؟  │
└─────────────────────────────────────────────────────────────┘
  اختر JavaScript (.jsx) إذا كنت:
  • مبتدئاً تتعلم مبادئ React الأساسية لأول مرة 🎓
  • تبني نماذج أولية ومشاريع صغيرة سريعة ⏱️
  • تريد التركيز على التصميم والتجربة دون تعقيدات الأنواع 🎨
  
  اختر TypeScript (.tsx) إذا كنت:
  • تعمل ضمن فريق برمجي كبير في شركة 🏢
  • تبني تطبيقاً تجارياً كبيراً طويل الأمد 🛡️
  • تريد أقصى درجات الإكمال التلقائي وتفادي أخطاء الـ Props ⚡`
      }
    },
    {
      id: "4.2.c",
      title: "فهم package.json",
      englishTitle: "Understanding package.json: Manifest, Scripts & Dependencies",
      definition: "ملف `package.json` هو بمثابة 'شهادة ميلاد وبطاقة هوية المشروع' ودليل إدارته في بيئة Node.js؛ يحتوي على بيانات المشروع (الاسم والإصدار)، واختصارات أوامر التشغيل (scripts)، وقائمة الحزم والمكتبات الإلزامية لتشغيل التطبيق (dependencies)، والحزم المخصصة للمطور فقط أثناء التطوير (devDependencies).",
      analogy: "تخيل قائمة مكونات وتفاصيل وجبة غذائية في مصنع: يوضح الغلاف اسم الوجبة وتاريخ صلاحيتها، والمكونات الغذائية الأساسية التي تدخل في طعام الزبون (dependencies مثل React)، والمعدات والأفران التي يستخدمها الطباخون داخل المصنع فقط ولا يتناولها الزبون (devDependencies مثل Vite و Prettier)!",
      why: "بدون ملف package.json، لن يعرف زميلك في العمل أو خادم النشر السحابي (Vercel, Netlify) ما هي المكتبات التي يحتاجها مشروعك ليعمل، ولن تتمكن من تنزيل الحزم بنقرة واحدة عبر أمر `npm install`.",
      terms: [
        { term: "package.json", pronunciation: "باكيدج دوت جيسون", meaning: "ملف البيان والتعريف الشامل للمشروع وحزمه" },
        { term: "scripts", pronunciation: "سكريبتس", meaning: "اختصارات الأوامر النصية التي تشغلها بـ npm run" },
        { term: "dependencies", pronunciation: "ديبندنسيز", meaning: "حزم الإنتاج الإلزامية التي تدخل في كود المستخدم النهائي" },
        { term: "devDependencies", pronunciation: "ديف ديبندنسيز", meaning: "حزم بيئة التطوير المساعدة التي تُستخدم فقط أثناء البرمجة" },
        { term: "package-lock.json", pronunciation: "باكيدج لوك", meaning: "ملف قفل وحفظ أرقام الإصدارات الدقيقة لكل حزمة وفرعياتها" }
      ],
      syntax: "{\n  \"name\": \"my-app\",\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\"\n  },\n  \"dependencies\": {\n    \"react\": \"^19.0.0\"\n  }\n}",
      codeSimple: `// تشريح ملف package.json النموذجي لمشروع React Vite
const samplePackageJson = {
  "name": "my-react-store",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",               // تشغيل خادم التطوير السريع
    "build": "vite build",        // ضغط وتجهيز ملفات الإنتاج
    "preview": "vite preview"     // معاينة نسخة الإنتاج محلياً
  },
  "dependencies": {
    "react": "^19.0.0",           // نواة مكتبة React
    "react-dom": "^19.0.0",       // حزمة التثبيت بالـ DOM
    "lucide-react": "^1.0.0"      // مكتبة الأيقونات
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.0", // ملحق React لـ Vite
    "vite": "^8.0.0"                  // خادم وأداة البناء الفائقة
  }
};

console.log('اسم المشروع في الملف:', samplePackageJson.name);
console.log('أمر التطوير:', samplePackageJson.scripts.dev);`,
      codeAdvanced: `// فهم علامات الإصدارات: الفرق بين ^ (Caret) و ~ (Tilde) في package.json
const versionExamples = [
  { symbol: '^19.0.0 (Caret)', meaning: 'يسمح بتحديثات التوافق والميزات البسيطة حتى الإصدار 19.9.9، ويمنع الانتقال للإصدار الرئيسي 20.0.0' },
  { symbol: '~19.0.2 (Tilde)', meaning: 'أكثر صرامة؛ يسمح بإصلاحات الأخطاء فقط (Patch) حتى 19.0.9 ويمنع التغييرات الأكبر' },
  { symbol: '19.0.0 (Exact)', meaning: 'تثبيت هذا الرقم المحدد بالضبط دون أي تحديث إطلاقاً' }
];

console.log('--- دليل فك شفرة أرقام الإصدارات في package.json ---');
versionExamples.forEach(ex => console.log(\`• \${ex.symbol}: \${ex.meaning}\`));`,
      output: `اسم المشروع في الملف: my-react-store\nأمر التطوير: vite\n--- دليل فك شفرة أرقام الإصدارات في package.json ---\n• ^19.0.0 (Caret): يسمح بتحديثات التوافق والميزات البسيطة حتى الإصدار 19.9.9، ويمنع الانتقال للإصدار الرئيسي 20.0.0\n• ~19.0.2 (Tilde): أكثر صرامة؛ يسمح بإصلاحات الأخطاء فقط (Patch) حتى 19.0.9 ويمنع التغييرات الأكبر\n• 19.0.0 (Exact): تثبيت هذا الرقم المحدد بالضبط دون أي تحديث إطلاقاً`,
      mistakes: [
        {
          wrong: `// تثبيت حزم مساعدة للمطورين مثل eslint أو vite كـ dependencies عامة بـ npm i vite\n// "كل الحزم توضع في dependencies دون تمييز!" // ❌ يثقل حجم الإنتاج بلا داعٍ!`,
          correct: `// تثبيت أدوات التطوير المساعدة باستخدام علم --save-dev أو -D:\nnpm install -D tailwindcss @types/react // ✅ توضع في devDependencies وتستبعد من الإنتاج`,
          explanation: "حزم dependencies تذهب مع التطبيق للإنتاج، بينما devDependencies مخصصة لحاسوبك أثناء التطوير ويجب عزلها لتوفير الحجم والأمان."
        }
      ],
      bestPractices: [
        "لا تعدل ملف `package-lock.json` يدوياً أبداً؛ دع أمر npm يتولى إدارته لضمان تطابق البيئات بين المطورين.",
        "احفظ `package.json` في نظام Git دائماً، لكن ضع مجلد `node_modules` في ملف `.gitignore`.",
        "استخدم قسم `scripts` لإضافة أوامر اختصارات مخصصة لتنظيف وتنسيق وفحص المشروع."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح الأقسام الأربعة لملف package.json",
        concept: "package.json Anatomy & Sections",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تشريح ملف package.json الداخلي               │
└─────────────────────────────────────────────────────────────┘
  {
    "name": "super-react-app",    ──> هوية واسم المشروع
    "scripts": {
      "dev": "vite"               ──> أوامر التشغيل (npm run dev)
    },
    "dependencies": {
      "react": "^19.0.0"          ──> مكتبات التشغيل مع المستخدم النهائي 🌐
    },
    "devDependencies": {
      "vite": "^8.0.0"            ──> أدوات المطور أثناء العمل فقط 🛠️
    }
  }`
      }
    },
    {
      id: "4.2.d",
      title: "فهم ملفات المشروع ومجلداته",
      englishTitle: "Project Folder Structure: src, public, node_modules & assets",
      definition: "هيكل مجلدات مشروع Vite ينظم الكود والأصول في أماكن متفق عليها عالمياً: مجلد `src` (المصدر) يحتوي على كل كود JavaScript و JSX والمكونات التي تعالجها Vite، مجلد `public` للأصول الثابتة التي تُقدم كما هي دون تعديل، مجلد `node_modules` لحزم المكتبات المنزلة، وملف `.gitignore` لحظر رفع المجلدات الضخمة لـ GitHub.",
      analogy: "تخيل مبنى لجريدة يومية:\n• مجلد `src`: هو غرفة التحرير والمطبعة؛ حيث يكتب الصحفيون المقالات ويحررونها ويطبعونها (المكان الذي تقضي فيه 99% من وقتك البرمجي).\n• مجلد `public`: هو مكتب التوزيع الخارجي؛ توضع فيه المنشورات الجاهزة تماماً مثل شعار الجريدة وأيقونة Favicon لتباع كما هي دون طباعة.\n• مجلد `node_modules`: هو مستودع الورق والأحبار الضخم في القبو؛ لا ترسله للقارئ بل يستخدمه العمال داخلياً فقط!",
      why: "معرفة وظيفة كل مجلد يمنحك الثقة الكاملة ويزيل الخوف من كثرة الملفات عند إنشاء أول مشروع، ويحميك من أخطاء شائعة مثل وضع الصور في مجلد خاطئ أو محاولة رفع مجلد node_modules إلى مستودعات GitHub.",
      terms: [
        { term: "src (Source)", pronunciation: "سورس", meaning: "مجلد الكود المصدري للتطبيق (المكونات والتنسيقات والصفحات)" },
        { term: "public folder", pronunciation: "ببليك فولدر", meaning: "مجلد الأصول الثابتة التي تُخدم مباشرة دون معالجة من Vite" },
        { term: "node_modules", pronunciation: "نود موديولز", meaning: "مجلد حزم ومكتبات المشروع الخارجية المحملة من npm" },
        { term: ".gitignore", pronunciation: "جت إجنور", meaning: "ملف استبعاد وحجب الملفات والمجلدات غير المرغوبة من الرفع لـ Git" }
      ],
      syntax: "// الهيكل الشجري القياسي لمشروع React Vite:\nmy-app/\n├── node_modules/     (حزم npm - محظورة في git)\n├── public/           (أصول ثابتة مثل favicon.svg)\n├── src/              (كود React - عملك اليومي)\n│   ├── assets/       (الصور والخطوط المعالجة)\n│   ├── App.jsx       (المكون الجذري)\n│   ├── index.css     (التنسيقات العامة)\n│   └── main.jsx      (نقطة الدخول وتثبيت الجذر)\n├── .gitignore        (قائمة الاستبعاد)\n├── index.html        (صفحة الويب الوحيدة)\n├── package.json      (بيان المشروع والحزم)\n└── vite.config.js    (إعدادات Vite)",
      codeSimple: `// توضيح متى تضع الصورة في src/assets ومتى تضعها في public
// 1. صورة في src/assets (تخضع للضغط والتحسين والتشفير بـ Vite):
import reactLogo from './assets/react.svg';
// استخدامها: <img src={reactLogo} alt="React" />

// 2. صورة في مجلد public (تُخدم مباشرة من الجذر / دون استيراد):
// مسارها: public/favicon.ico
// استخدامها مباشرة كنص: <img src="/favicon.ico" alt="Favicon" />`,
      codeAdvanced: `// نموذج تنظيمي احترافي لتوسيع مجلد src في مشاريع React الكبيرة (Feature-Based Structure)
/*
src/
├── api/             (استدعاءات fetch وخدمات الشبكة الخارجية)
├── assets/          (الصور، الشعارات، والخطوط)
├── components/      (المكونات المشتركة: Button, Modal, Navbar)
│   ├── ui/          (مكونات الأزرار والحقول البسيطة)
│   └── layout/      (الهيكل العام: Sidebar, Header)
├── hooks/           (خطافات React المخصصة: useAuth, useTheme)
├── pages/           (صفحات التطبيق المستقلة: Home, Dashboard)
├── utils/           (دوال الحسابات والمساعدات: formatDate, math)
├── App.jsx          (ربط المكونات وإدارة التوجيه)
└── main.jsx         (نقطة انطلاق ReactDOM)
*/
console.log('تنظيم مجلد src الاحترافي يجعل مشروعك جاهزاً للنمو مع آلاف الملفات!');`,
      output: `تنظيم مجلد src الاحترافي يجعل مشروعك جاهزاً للنمو مع آلاف الملفات!`,
      mistakes: [
        {
          wrong: `// رفع مجلد node_modules إلى مستودع GitHub بحجم 300 ميجابايت!\n// نسيان تضمينه في ملف .gitignore // ❌ كارثة في مساحة التخزين وبطء شديد في الرفع!`,
          correct: `// التأكد دائماً من وجود سطر node_modules في ملف .gitignore:\n// node_modules\n// dist\n// .env // ✅ يرفع كودك الصافي فقط بحجم أقل من 1 ميجابايت`,
          explanation: "مجلد node_modules لا يُرفع أبداً للـ Git؛ أي شخص ينزل مشروعك يستطيع إعادة توليده في ثوانٍ بكتابة أمر `npm install`."
        }
      ],
      bestPractices: [
        "ضع 100% من كود المكونات والتنسيقات والمنطق داخل مجلد `src`.",
        "استخدم مجلد `public` فقط للملفات التي تحتاج الوصول إليها برابط مباشر مثل `robots.txt` و `favicon.ico`.",
        "نظم مجلد `src` مبكراً إلى مجلدات فرعية متخصصة (`components`, `pages`, `hooks`) لكي لا تضيع بين عشرات الملفات."
      ],
      infographic: {
        title: "إنفوجرافيك: خريطة مجلدات مشروع React Vite",
        concept: "React Vite Folder Hierarchy",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 خريطة مجلدات مشروع React Vite القياسية       │
└─────────────────────────────────────────────────────────────┘
  my-app/
  ├── public/       ──> ملفات ثابتة كما هي (Favicon, Robots) 📁
  ├── src/          ──> قلب مشروعك (كل كود React هنا!) ⚛️
  │   ├── assets/   ──> صور وخطوط تخضع للمعالجة والتحسين 🖼️
  │   ├── App.jsx   ──> المكون الرئيسي للتطبيق 🧩
  │   └── main.jsx  ──> شعلة البداية ونقطة التثبيت 🔌
  ├── index.html    ──> الصفحة الحاضنة الوحيدة (SPA Container) 📄
  ├── package.json  ──> دليل الحزم وأوامر التشغيل 📋
  └── .gitignore    ──> حظر رفع node_modules إلى GitHub 🚫`
      }
    },
    {
      id: "4.2.e",
      title: "فهم index.html",
      englishTitle: "The index.html File: SPA Root & Module Script",
      definition: "ملف `index.html` في مشاريع Vite يقع في الجذر الرئيسي للمشروع (وليس في public)، وهو الصفحة الوحيدة الحقيقية في تطبيق الـ Single Page Application بالكامل؛ يحتوي على العنصر الحاضن الشهير `<div id=\"root\"></div>` ووسم استدعاء سكريبت الدخول كـ وحدة موديول `<script type=\"module\" src=\"/src/main.jsx\"></script>`.",
      analogy: "تخيل برواز لوحة فنية ضخم فارغ معلق على جدار المعرض: البرواز الخارجي هو ملف `index.html`؛ لا يحتوي بداخله على أي رسمة من البداية. ومكتبة React هي الفنان الساحر الذي يقف أمام البرواز وبمجرد فتح المعرض يملأ المساحة البيضاء الفارغة برسمة متحركة نابضة بالحياة!",
      why: "فهم index.html يوضح لك كيف تبدأ رحلة التطبيق في المتصفح؛ فهو المكان الذي تضبط فيه عنوان الموقع في شريط المتصفح `<title>`، وخطوط Google Fonts، وأيقونة الموقع Favicon، وبيانات محركات البحث SEO ومقاييس العرض للموبايل Viewport.",
      terms: [
        { term: "Single Page Application (SPA)", pronunciation: "سنجل بيج أبليكيشن", meaning: "تطبيق الصفحة الواحدة؛ صفحة HTML وحيدة تُبدل محتوياتها برمجياً" },
        { term: "div#root", pronunciation: "ديف آي دي روت", meaning: "الحاوية الجسدية التي يُعلق ويُثبت فيها تطبيق React بالكامل" },
        { term: "type=\"module\"", pronunciation: "تايب موديول", meaning: "إخبار المتصفح بأن الملف يتبع نظام وحدات ES Modules الحديث" },
        { term: "Viewport Meta Tag", pronunciation: "فيوبورت ميتا تاج", meaning: "وسم ضبط التجاوب والتكبير على شاشات الهواتف" }
      ],
      syntax: "<!doctype html>\n<html lang=\"ar\" dir=\"rtl\">\n  <head>\n    <title>تطبيقي الرائع</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/src/main.jsx\"></script>\n  </body>\n</html>",
      codeSimple: `<!-- محتوى ملف index.html القياسي في مشاريع Vite -->
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>تطبيق React 19 الحديث | منصتي</title>
  </head>
  <body>
    <!-- الحاضن الوحيد الذي ستضخ فيه ReactDOM كل المكونات -->
    <div id="root"></div>

    <!-- وسم تشغيل وتثبيت كود React الحديث -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
      codeAdvanced: `// محاكاة لما يحدث لملف index.html أثناء عمل التطبيق
console.log('1. المتصفح يفتح صفحة index.html أولاً كملف خام');
console.log('2. يقرأ وسم: <script type="module" src="/src/main.jsx">');
console.log('3. يبدأ ملف main.jsx في تنفيذ createRoot(document.getElementById("root"))');
console.log('4. يتحول <div id="root"></div> من صندوق فارغ إلى شجرة مكونات متكاملة وحية!');`,
      output: `1. المتصفح يفتح صفحة index.html أولاً كملف خام\n2. يقرأ وسم: <script type="module" src="/src/main.jsx">\n3. يبدأ ملف main.jsx في تنفيذ createRoot(document.getElementById("root"))\n4. يتحول <div id="root"></div> من صندوق فارغ إلى شجرة مكونات متكاملة وحية!`,
      mistakes: [
        {
          wrong: `// وضع محتوى HTML كبير وكتابة نصوص وأزرار مباشرة داخل <div id="root"> في ملف index.html!\n<div id="root"><h1>عنوان قديم</h1></div> // ❌ ستقوم React بمسحه واستبداله فوراً دون أي فائدة!`,
          correct: `// اترك <div id="root"></div> فارغاً تماماً في index.html، واكتب كل نصوصك ومكوناتك داخل مكونات React في مجلد src ✅`,
          explanation: "دالة render في ReactDOM تمحو أي محتوى قديم موجود داخل العنصر الحاضن وتستبدله بشجرة مكونات React."
        }
      ],
      bestPractices: [
        "اضبط دائماً سمة اتجاه النص `dir=\"rtl\"` ولغة الصفحة `lang=\"ar\"` في وسم `<html>` إذا كان تطبيقك باللغة العربية.",
        "استورد خطوط الويب الخارجية (مثل خط Cairo من Google Fonts) داخل قسم `<head>` في ملف `index.html` لتحسين سرعة ظهور الخطوط وتفادي الوميض.",
        "في مشاريع Vite، يجب أن يكون ملف `index.html` في المجلد الجذري مباشرة، لأن Vite تعتبره نقطة البداية للمشروع."
      ],
      infographic: {
        title: "إنفوجرافيك: رحلة ملف index.html من الصندوق الفارغ إلى التطبيق الحي",
        concept: "The Role of index.html in Vite SPAs",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 دور ملف index.html في تطبيقات React          │
└─────────────────────────────────────────────────────────────┘
  ملف index.html الأولي:
  <body>
    <div id="root"></div>  ◄── صندوق فارغ في البداية ⚪
    <script type="module" src="/src/main.jsx"></script>
  </body>
                     │
                     ▼ (بعد ثوانٍ أجزاء من الثانية بفضل Vite)
  داخل شاشة المتصفح الحية:
  <div id="root">
    <header>...</header>
    <main>...</main>       ◄── تطبيق React حي نابض بالألوان والتفاعل! 🎨
    <footer>...</footer>
  </div>`
      }
    },
    {
      id: "4.2.f",
      title: "فهم main.jsx",
      englishTitle: "Understanding main.jsx: Application Entry Point & Strict Mode",
      definition: "ملف `main.jsx` (أو `index.js` في المشاريع القديمة) هو 'شعلة الانطلاق ونقطة الدخول التنفيذية' لمشروع React؛ وظيفته حصرية ومحددة: التقاط العنصر الحاضن `<div id=\"root\">` من صفحة الـ HTML، وإنشاء جذر React عبر `ReactDOM.createRoot()`، وتثبيت المكون الجذري الأعلى `<App />` مغلفاً بأداة الفحص الصارم `<React.StrictMode>`.",
      analogy: "تخيل مفتاح تشغيل محرك الطائرة: الطيار لا يطير بالمفتاح في السماء، بل يستخدمه لثانية واحدة لتشغيل وإشعال المحركات النفاثة الضخمة. ملف `main.jsx` هو ذلك المفتاح بالضبط؛ يقوم بإشعال محرك React مرة واحدة فقط عند فتح الصفحة ثم يسلم القيادة لمكون `<App />` وباقي المكونات!",
      why: "هو الملف الذي يربط عالم الـ HTML والـ DOM الحقيقي بعالم React ومكوناتها؛ وفهم هذا الملف يوضح لك أين تُستورد التنسيقات العامة للمشروع (`index.css`)، ولماذا يُنفذ كود الـ console.log مرتين أثناء التطوير بسبب `StrictMode`.",
      terms: [
        { term: "Entry Point", pronunciation: "إنتري بوينت", meaning: "نقطة الدخول والانطلاق الأولى للبرنامج" },
        { term: "React.StrictMode", pronunciation: "ستريكت مود", meaning: "أداة فحص بيئة التطوير لاكتشاف الأخطاء والآثار الجانبية المزدوجة" },
        { term: "createRoot", pronunciation: "كرييت روت", meaning: "دالة إنشاء جذر شجرة React الحديثة" },
        { term: "Global Stylesheet", pronunciation: "جلوبال ستايل شيت", meaning: "ملف التنسيقات العامة للمشروع المستورد في main.jsx" }
      ],
      syntax: "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App.jsx';\nimport './index.css';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);",
      codeSimple: `// تشريح سطر بسطر لملف main.jsx
// 1. استيراد مكتبة React الأساسية
import React from 'react';

// 2. استيراد حزمة الربط بمتصفح الويب من المسار الحديث client
import ReactDOM from 'react-dom/client';

// 3. استيراد المكون الجذري الأعلى لتطبيقنا
import App from './App.jsx';

// 4. استيراد التنسيقات العامة (CSS) لتسري على المشروع كله
import './index.css';

// 5. البحث عن عنصر الـ root وإنشاء الجذر وضخ المكون App بداخله
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
      codeAdvanced: `// محاكاة لسر تكرار التنفيذ في بيئة التطوير بسبب React.StrictMode
// Strict Mode يقوم عمداً بتشغيل مرحلة الـ Render مرتين لمساعدتك على اكتشاف الآثار الجانبية غير النقية!
function demonstrateStrictModeBehavior() {
  console.log('--- محاكاة React.StrictMode أثناء التطوير ---');
  
  let renderCount = 0;

  function mockComponentRender() {
    renderCount++;
    console.log(\`⚡ تصيير المكون (محاولة رقم \${renderCount})\`);
    if (renderCount === 2) {
      console.log('💡 تنبيه للمطور: StrictMode أعاد التشغيل للتأكد من أن دالتك نقية وخالية من الآثار الجانبية الخبيثة!');
      console.log('✅ هذا السلوك يحدث في وضع التطوير فقط؛ وفي نسخة الإنتاج (Production) يُنفذ مرة واحدة فقط!');
    }
  }

  // المحاكاة
  mockComponentRender();
  mockComponentRender();
}

demonstrateStrictModeBehavior();`,
      output: `--- محاكاة React.StrictMode أثناء التطوير ---\n⚡ تصيير المكون (محاولة رقم 1)\n⚡ تصيير المكون (محاولة رقم 2)\n💡 تنبيه للمطور: StrictMode أعاد التشغيل للتأكد من أن دالتك نقية وخالية من الآثار الجانبية الخبيثة!\n✅ هذا السلوك يحدث في وضع التطوير فقط؛ وفي نسخة الإنتاج (Production) يُنفذ مرة واحدة فقط!`,
      mistakes: [
        {
          wrong: `// القلق والارتباك من طباعة console.log مرتين في وحدة التحكم والظن بأن هناك خللاً في كودك!\n// "الـ useEffect ينفذ مرتين، مشروعي معطوب!" // ❌ خطأ شائع يربك كل المبتدئين!`,
          correct: `// هذا سلوك مقصود وطبيعي 100% يفرضه <React.StrictMode> في بيئة التطوير لمساعدتك على فحص كودك، ولا يحدث إطلاقاً في الإنتاج ✅`,
          explanation: "الـ StrictMode يقوم بعمل Mount ثم Unmount ثم Re-mount للمكون في بيئة التطوير للتأكد من أنك قمت بتنظيف دوال الـ useEffect بشكل سليم."
        }
      ],
      bestPractices: [
        "لا تحذف `<React.StrictMode>`؛ فهو حارس أمين ينبهك للأنماط القديمة والمهجورة والآثار الجانبية غير النقية.",
        "استورد التنسيقات العامة ومكتبات مثل Tailwind CSS في قمة ملف `main.jsx` لضمان تحميلها مسبقاً.",
        "اترك ملف `main.jsx` نظيفاً ومقتضباً جداً؛ لا تكتب فيه منطقاً تجارياً أو مكونات إضافية."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح ملف main.jsx وسر الـ Strict Mode",
        concept: "main.jsx Architecture & StrictMode Double-Render",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تشريح ملف الانطلاق main.jsx                  │
└─────────────────────────────────────────────────────────────┘
  document.getElementById('root') ──> التقاط الصندوق من index.html
                 │
  ReactDOM.createRoot() ──> إشعال محرك التزامن الحديث في الذاكرة
                 │
  <React.StrictMode> ──> حارس الجودة أثناء التطوير (فحص النقاء) 🛡️
         │
         ▼
     [ <App /> ] ──> بوابة انطلاق شجرة تطبيقك الكاملة!`
      }
    },
    {
      id: "4.2.g",
      title: "فهم App.jsx",
      englishTitle: "Understanding App.jsx: The Root Component & Layout Conductor",
      definition: "ملف `App.jsx` هو 'المكون الجذري الأول' لتطبيقك؛ وهو المكان الفعلي الذي تبدأ فيه كتابة واجهة المستخدم الخاصة بمشروعك، وتركيب المكونات الرئيسية معاً (مثل الشريط العلوي والقائمة والمحتوى)، وإدارة الحالات العامة ونظام التوجيه.",
      analogy: "تخيل قائد الأوركسترا الموسيقية (App.jsx): هو لا يعزف على كل آلة بنفسه، بل يقف في منتصف المسرح ويوجه عازف الكمان (Navbar)، وعازف الطبول (Sidebar)، والمغني الرئيسي (MainView) ليعزف الجميع معاً سيمفونية واحدة متناسقة وجميلة!",
      why: "هو نقطة البداية الحقيقية لعملك اليومي كمطور؛ فبدلاً من تعديل ملفات الإعدادات، تقضي معظم وقتك في ملف App.jsx لربط الشاشات وإدارة تدفق البيانات وتنسيق تجربة المستخدم.",
      terms: [
        { term: "App.jsx", pronunciation: "آب دوت جي إس إكس", meaning: "المكون الجذري الأعلى الذي يحضن كل مكونات التطبيق" },
        { term: "Layout Component", pronunciation: "لاي آوت كومبوننت", meaning: "مكون التخطيط والهيكل العام للصفحة" },
        { term: "Root State", pronunciation: "روت ستيت", meaning: "الحالة العامة للتطبيق الموجودة في أعلى الشجرة" }
      ],
      syntax: "// الهيكل القياسي لمكون App.jsx:\nimport React from 'react';\n\nexport default function App() {\n  return (\n    <div className=\"app-wrapper\">\n      <h1>مرحباً بك في تطبيقي!</h1>\n    </div>\n  );\n}",
      codeSimple: `// نموذج مكون App.jsx نظيف واحترافي
import React, { useState } from 'react';

export default function App() {
  // حالة بسيطة لإدارة عدد الإعجابات
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'system-ui' }}>
      <header>
        <h1 style={{ color: '#2563eb' }}>منصة الإبداع البرمجي 🚀</h1>
        <p style={{ color: '#64748b' }}>أهلاً بك في المكون الجذري App.jsx</p>
      </header>

      <main style={{ marginTop: '24px' }}>
        <button 
          onClick={() => setLikes(likes + 1)}
          style={{ padding: '10px 20px', fontSize: '1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          أعجبني 👍 ({likes})
        </button>
      </main>
    </div>
  );
}`,
      codeAdvanced: `// هيكل App.jsx متقدم يعكس إدارة تطبيق كامل مع التخطيط المشترك
/*
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import DashboardView from './components/DashboardView.jsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [user, setUser] = useState({ name: 'فيصل', role: 'admin' });

  return (
    <div className="layout-grid">
      <Navbar user={user} />
      <div className="main-body">
        <Sidebar activeTab={currentTab} onSelectTab={setCurrentTab} />
        <main className="content-area">
          <DashboardView activeTab={currentTab} />
        </main>
      </div>
    </div>
  );
}
*/
console.log('المكون App هو منسق التخطيط الشامل لجميع المكونات الفرعية.');`,
      output: `منصة الإبداع البرمجي 🚀\nأهلاً بك في المكون الجذري App.jsx\n[زر تفاعلي يحدث عدد الإعجابات بلحظية]`,
      mistakes: [
        {
          wrong: `// تكديس كل أكواد المشروع في ملف App.jsx ليصبح 3000 سطر دون إنشاء مكونات فرعية!\n// "كل شيء يعمل في App.jsx فلماذا أنشئ ملفات أخرى؟" // ❌ كارثة تنظيمية تعيق العمل الجماعي والصيانة!`,
          correct: `// اجعل App.jsx منسقاً عاماً (Conductor) يركب مكونات صغيرة مستوردة من مجلد components/ ✅`,
          explanation: "ملف App.jsx يجب أن يكون نظيفاً وواضحاً يُظهر الهيكل العام للتطبيق في لمحة سريعة دون تفاصيل أكواد النماذج والجداول الدقيقة."
        }
      ],
      bestPractices: [
        "اجعل App.jsx موطناً لإعدادات المظهر العام، وتوفير الـ Context Providers، وموجه الروابط (Router).",
        "احرص على كتابة اسم المكون بحرف كبير `App` دائماً لتميزه React كمكون وليس عنصر HTML عادي.",
        "استخدم تصدير `export default function App() {}` لتسهيل استيراده في `main.jsx`."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح ودور المكون الجذري App.jsx",
        concept: "The Role of App.jsx in the Architecture",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المكون الجذري App.jsx قائد الأوركسترا       │
└─────────────────────────────────────────────────────────────┘
                         [ <App.jsx /> ]
                                │
          ┌─────────────────────┼─────────────────────┐
          ▼                     ▼                     ▼
     <Navbar />          <PageContent />          <Footer />
  (الشريط العلوي)        (مساحة العرض الحية)      (تذييل الصفحة)
  
  مهمته:
  تنسيق التخطيط العام، إدارة الحالات المشتركة، وحضن مسارات الروابط`
      }
    },
    {
      id: "4.2.h",
      title: "تشغيل خادم التطوير",
      englishTitle: "Running the Development Server: npm run dev & Hot Module Replacement (HMR)",
      definition: "خادم التطوير (Development Server) في Vite هو خادم محلي فائق السرعة يعمل على حاسوبك (عادة على الرابط `http://localhost:5173`) أثناء مرحلة البرمجة؛ يتميز بخاصية الاستبدال الفوري للمكونات (Hot Module Replacement - HMR) التي تعكس تعديلاتك على الشاشة في جزء من الثانية فور حفظ الملف دون فقدان حالة الصفحة ودون إعادة تحميل كاملة.",
      analogy: "تخيل أنك ترتسم أمام 'مرآة سحرية فورية': في كل مرة تجرب فيها قبعة جديدة أو تغير لون قميصك، تتغير صورتك في المرآة فوراً في نفس اللحظة دون أن تضطر للرمش أو الخروج من الغرفة والعودة مرة أخرى! خاصية HMR هي تلك المرآة السحرية في شاشتك.",
      why: "ترفع إنتاجيتك وسرعة برمجتك بمقدار 10 أضعاف! في الأدوات القديمة، كان كل تعديل بسيط في الكود يستغرق 5 إلى 10 ثوانٍ ليعيد تحميل المتصفح بالكامل ويفقد ما كتبته في النماذج؛ بينما مع Vite يتم التعديل في أقل من 50 ميلي ثانية وتظل بيانات النموذج كما هي في مكانها.",
      terms: [
        { term: "Dev Server", pronunciation: "ديف سيرفر", meaning: "خادم التطوير المحلي السريع لتجربة الكود أثناء البرمجة" },
        { term: "HMR (Hot Module Replacement)", pronunciation: "هوت موديول ريبليسمنت", meaning: "الاستبدال الحي والفوري للمكون المعدل في الشاشة" },
        { term: "localhost:5173", pronunciation: "لوكال هوست", meaning: "العنوان والمنفذ الافتراضي لخادم Vite على جهازك" },
        { term: "Fast Refresh", pronunciation: "فاست ريفريش", meaning: "آلية React لتحديث المكونات مع الحفاظ على قيم الـ State" }
      ],
      syntax: "// تشغيل خادم التطوير عبر الطرفية:\nnpm run dev\n\n// لإيقاف الخادم:\nاضغط Ctrl + C في لوحة المفاتيح",
      codeSimple: `// مخرجات شاشة سطر الأوامر النموذجية عند تشغيل npm run dev
/*
  VITE v8.3.5  ready in 180 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
*/
console.log('خادم Vite جاهز للعمل والخدمة في 180 ميلي ثانية فقط! ⚡');`,
      codeAdvanced: `// كشف خاصية إتاحة الخادم للشبكة المحلية (الهاتف المحمول)
// إذا أردت تجربة موقعك على هاتفك الشخصي المتصل بنفس شبكة الواي فاي (Wi-Fi):
// شغل الأمر مع إضافة علم المضيف:
// npm run dev -- --host
/*
  VITE v8.3.5  ready in 210 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.15:5173/  ◄── افتح هذا الرابط من متصفح جوالك!
*/
console.log('يمكنك معاينة تطبيقك حياً على شاشة هاتفك في نفس اللحظة عبر Network IP!');`,
      output: `VITE v8.3.5 ready in 180 ms\n➜ Local: http://localhost:5173/\nخادم Vite جاهز للعمل والخدمة في 180 ميلي ثانية فقط! ⚡`,
      mistakes: [
        {
          wrong: `// إغلاق نافذة سطر الأوامر (Terminal) ثم التساؤل لماذا لا يفتح الرابط localhost:5173 في المتصفح!\n// "الموقع لا يفتح بعد إغلاق الشاشة السوداء!" // ❌ خطأ شائع للمبتدئين!`,
          correct: `// خادم التطوير يجب أن يظل يعمل في نافذة الـ Terminal طوال فترة برمجتك؛ لا تغلقها حتى تنتهي من العمل تماماً ✅`,
          explanation: "المتصفح يحتاج لخادم Vite لترجمة ملفات JSX إلى JavaScript يفهمها المتصفح في الوقت الفعلي؛ وبمجرد إغلاق الطرفية يتوقف الخادم فوراً."
        }
      ],
      bestPractices: [
        "ضع نافذة المتصفح بجانب نافذة محرر VS Code لتشاهد سحر الـ Fast Refresh فور حفظك لأي ملف.",
        "استخدم اختصار لوحة المفاتيح `Ctrl + C` لإيقاف خادم التطوير بنظافة عند الانتهاء.",
        "استخدم خيار `--host` لمعاينة التجاوب مع شاشات اللمس الحقيقية على هاتفك المحمول."
      ],
      infographic: {
        title: "إنفوجرافيك: سحر خاصية الـ Fast Refresh و HMR في خادم Vite",
        concept: "Hot Module Replacement Execution Flow",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 خاصية الاستبدال الفوري المباشر (HMR)        │
└─────────────────────────────────────────────────────────────┘
  أنت تعدل سطراً في Button.jsx وتضغط Ctrl + S
                 │
  Vite يكتشف التغيير في 10ms ──> يرسل الملف المعدل فقط للمتصفح عبر WebSocket
                 │
                 ▼
  المتصفح يستبدل كود الزر فقط في الشاشة في 30ms دون إعادة تحميل الصفحة!
  (النتيجة: سرعة خارقة وبقاء بياناتك كما هي دون أن تُمحى) 🚀`
      }
    },
    {
      id: "4.2.i",
      title: "إنشاء نسخة الإنتاج Build",
      englishTitle: "Building for Production: npm run build & The dist Folder",
      definition: "إنشاء نسخة الإنتاج (Production Build) عبر أمر `npm run build` هي العملية التي تقوم فيها Vite بجمع وكبس وتصغير وتحسين كل كود المشروع (Minification, Tree-Shaking, Bundling) باستخدام مجمع Rollup السريع، لإخراج مجلد نهائي اسمه `dist` يحتوي على ملفات HTML و CSS و JavaScript فائقة الخفة وجاهزة للرفع على خوادم الاستضافة العالمية.",
      analogy: "تخيل ورشة نجارة لتصنيع الأثاث:\n• أثناء التطوير: الغرفة مليئة بنشارة الخشب والمناشير وأجهزة القياس المزعجة (ملفات التطوير والملاحظات).\n• نسخة الإنتاج (Build): يقوم العمال بتنظيف الطاولة وتلميع الأثاث وتغليفه بالبلاستيك الشفاف في صندوق كرتوني صغير وأنيق (مجلد dist) جاهز للشحن والتسليم للعميل في أفضل صورة ممكنة!",
      why: "كود التطوير الذي تكتبه مليء بالفراغات والتعليقات والتحذيرات وأكواد الفحص الصارم (StrictMode) مما يجعله كبيراً وبطيئاً؛ بينما تقوم عملية الـ Build بحذف كل الزوائد وضغط الكود بنسبة تصل لـ 80% لتفتح صفحات موقعك في رمشة عين لأي زائر حول العالم.",
      terms: [
        { term: "Production Build", pronunciation: "برودكشن بيلد", meaning: "توليد النسخة الإنتاجية المحسنة والمصغرة للتوزيع" },
        { term: "dist folder", pronunciation: "ديست فولدر", meaning: "مجلد التوزيع النهائي الجاهز للرفع على الاستضافة" },
        { term: "Minification", pronunciation: "مينيفيكيشن", meaning: "ضغط الكود وإزالة المسافات واختصار أسماء المتغيرات لحرف واحد" },
        { term: "Tree-Shaking", pronunciation: "تري شيكينغ", meaning: "إسقاط وحذف الدوال والمكتبات غير المستخدمة لتخفيف الحجم" },
        { term: "npm run preview", pronunciation: "بريفيو", meaning: "أمر معاينة واختبار مجلد dist الإنتاجي محلياً قبل رفعه للسيرفر" }
      ],
      syntax: "// 1. توليد نسخة الإنتاج النهائية:\nnpm run build\n\n// 2. تجربة ومعاينة نسخة الإنتاج محلياً للتأكد من خلوها من الأخطاء:\nnpm run preview",
      codeSimple: `// مخرجات عملية الـ Build النموذجية في Vite
/*
  vite v8.3.5 building for production...
  ✓ 45 modules transformed.
  dist/index.html                   0.82 kB │ gzip:  0.42 kB
  dist/assets/index-Dk29s0a.css     1.45 kB │ gzip:  0.65 kB
  dist/assets/index-B9a82kl.js    142.10 kB │ gzip: 45.20 kB
  ✓ built in 420ms
*/
console.log('تم توليد مجلد dist بنجاح بحجم مضغوط فائق الخفة (45KB فقط)!');`,
      codeAdvanced: `// محاكاة لما يفعله الـ Minifier في كودك أثناء الـ Build
// الكود الأصلي الذي كتبته أنت في التطوير:
function calculateTotalPrice(subtotal, taxRate) {
  // دالة لحساب المجموع مع الضريبة
  return subtotal + (subtotal * taxRate);
}

// الكود بعد تشغيل npm run build وضغطه:
// function c(a,b){return a+a*b}
console.log('الكود بعد الضغط والـ Minification: أصغر بنسبة 70% وأسرع في التحميل!');`,
      output: `تم توليد مجلد dist بنجاح بحجم مضغوط فائق الخفة (45KB فقط)!\nالكود بعد الضغط والـ Minification: أصغر بنسبة 70% وأسرع في التحميل!`,
      mistakes: [
        {
          wrong: `// رفع ملفات المشروع كاملة (src, package.json, vite.config) على خوادم الاستضافة العادية\n// "رفعت كل المشروع على السيرفر ولم يظهر أي شيء!" // ❌ خطأ شائع جداً للمبتدئين!`,
          correct: `// الاستضافة السحابية ومواقع الويب تحتاج فقط محتويات مجلد dist الناتج من npm run build؛ فهو المنتج النهائي الحقيقي ✅`,
          explanation: "المتصفحات لا تفهم ملفات JSX مباشرة؛ وأمر npm run build هو من يحولها إلى ملفات HTML و JS نقية ومصغرة صالحة للعمل في أي سيرفر بالعالم."
        }
      ],
      bestPractices: [
        "شغل دائماً أمر `npm run preview` قبل رفع مجلد `dist` إلى الاستضافة للتأكد من أن كل الروابط والصور تعمل بشكل سليم.",
        "اربط مستودع GitHub بمنصات الاستضافة الحديثة (مثل Vercel أو Netlify)؛ فهي تقوم بتشغيل `npm run build` ونشر الموقع تلقائياً في كل مرة تدفع فيها الكود.",
        "راقب أحجام الملفات المحذرة باللون الأصفر؛ إذا تجاوزت الحزمة 500KB فكر في تقسيم الكود (Code Splitting) عبر `lazy` و `Suspense`."
      ],
      infographic: {
        title: "إنفوجرافيك: رحلة الكود من مجلد src إلى مجلد dist للإنتاج",
        concept: "The Build Pipeline to dist",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 رحلة الإنتاج: من src إلى مجلد dist           │
└─────────────────────────────────────────────────────────────┘
  كود التطوير الواسع (src):
  ├── ملفات JSX متعددة، تعليقات، مسافات، وتحذيرات StrictMode
                 │
  أمر: npm run build (Vite + Rollup) ⚙️
                 │  • تصفية وحذف الكود غير المستخدم (Tree-Shaking)
                 │  • ضغط النصوص وتصغير الأسماء (Minification)
                 │  • دمج الملفات في حزم فائقة الخفة (Bundling)
                 ▼
  مجلد التوزيع الجاهز للنشر (dist):
  ├── index.html (خفيف جداً)
  └── assets/ (js و css مضغوطة بالكامل جاهزة لأسرع تحميل في العالم) 🚀`
      }
    },
    {
      id: "4.2.j",
      title: "إدارة متغيرات البيئة في Vite",
      englishTitle: "Environment Variables in Vite: VITE_ Prefix & import.meta.env",
      definition: "إدارة متغيرات البيئة (Environment Variables) في Vite هي الطريقة القياسية والآمنة لتخزين وتمرير الإعدادات وروابط الخوادم والمفاتيح العامة التي تتغير باختلاف بيئة التشغيل (مثل بيئة التطوير المحلية Development مقابل بيئة الإنتاج الحقيقية Production) داخل ملفات `.env`، وتلزم Vite المطور ببدء أسماء المتغيرات بالبادئة `VITE_` لقراءتها عبر `import.meta.env`.",
      analogy: "تخيل أن لديك مقلداً كهربائياً مع ملصقين:\n1. ملصق التطوير: مكتوب عليه عنوان محطة الاختبار الوهمية في ورشتك (مثل رابط السيرفر التجريبي localhost:8000).\n2. ملصق الإنتاج: مكتوب عليه عنوان المحطة الرسمية المشفرة لشركة الكهرباء العامة.\nعندما تبدل البيئة، لا تعيد لحام الأسلاك؛ بل تبدل الملصق فقط! كودك يقرأ الملصق ويتصل بالمحطة المناسبة تلقائياً.",
      why: "تحميك من فضيحة تسريب الروابط والمفاتيح في كودك المصدري على GitHub؛ وتسمح لك باستخدام رابط API محلي أثناء التجربة، والانتقال تلقائياً للرابط الحقيقي فور رفع الموقع للإنتاج دون تعديل سطر كود واحد يدparamياً.",
      terms: [
        { term: "Environment Variables", pronunciation: "إنفيرونمنت فاريبلز", meaning: "متغيرات البيئة؛ إعدادات خارجية تتغير بتغير بيئة التشغيل" },
        { term: ".env file", pronunciation: "دوت إنف فايل", meaning: "الملف السري الذي تُحفظ فيه أزواج المفاتيح والقيم" },
        { term: "VITE_ prefix", pronunciation: "فايت بريفكس", meaning: "البادئة الإلزامية التي تشترطها Vite لتصدير المتغير إلى واجهة المستخدم" },
        { term: "import.meta.env", pronunciation: "إمبورت دوت ميتا دوت إنف", meaning: "الكائن القياسي الحديث في ES Modules للوصول لمتغيرات البيئة" }
      ],
      syntax: "// 1. في ملف .env في جذر المشروع:\nVITE_API_URL=https://api.my-store.com/v1\nVITE_APP_TITLE=متجري الحديث\n\n// 2. في كود React نقرؤها عبر import.meta.env:\nconst apiUrl = import.meta.env.VITE_API_URL;\nconsole.log(import.meta.env.MODE); // 'development' أو 'production'",
      codeSimple: `// قراءة متغيرات البيئة في مكون React
function ApiStatusBadge() {
  // قراءة رابط السيرفر واسم التطبيق المحددين في ملف .env
  const appTitle = import.meta.env.VITE_APP_TITLE || 'تطبيق تجريبي';
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  const isDev = import.meta.env.DEV; // قيمة بوليان تلقائية من Vite (true أثناء التطوير)

  return (
    <div className="env-badge">
      <h3>{appTitle}</h3>
      <p>رابط الخادم النشط: <code>{apiUrl}</code></p>
      <span className={isDev ? 'badge-dev' : 'badge-prod'}>
        {isDev ? 'وضع التطوير المحلي 🛠️' : 'وضع الإنتاج المباشر 🌐'}
      </span>
    </div>
  );
}`,
      codeAdvanced: `// محاكاة التبديل الذكي لخدمات الـ API حسب بيئة التشغيل في Vite
const ConfigService = {
  // تحديد بيئة التشغيل الحالية
  currentEnv: import.meta.env.MODE, // 'development' أو 'production'
  
  // تحديد الرابط الأساسي للـ API
  getBaseApiUrl() {
    // في الإنتاج نستخدم الرابط المشفر الحقيقي، وفي التطوير نستخدم الخادم المحلي
    return import.meta.env.VITE_BACKEND_ENDPOINT || 'https://api.production-server.com';
  },

  // مفتاح عام لتحليلات جوجل أو Stripe
  getAnalyticsId() {
    return import.meta.env.VITE_ANALYTICS_TRACKING_ID || 'UA-MOCK-DEV-000';
  }
};

console.log('بيئة التشغيل الحالية المعترف بها بـ Vite:', ConfigService.currentEnv);
console.log('رابط الـ API المعتمد تلقائياً:', ConfigService.getBaseApiUrl());`,
      output: `بيئة التشغيل الحالية المعترف بها بـ Vite: development\nرابط الـ API المعتمد تلقائياً: https://api.production-server.com`,
      mistakes: [
        {
          wrong: `// تسمية المتغير في ملف .env بدون بادئة VITE_ (مثل: API_SECRET=123)\n// ومحاولة قراءته بـ import.meta.env.API_SECRET // ❌ سيعيد undefined ولن يظهر في كود المتصفح!`,
          correct: `// إضافة بادئة VITE_ إلزامياً لأي متغير تريد ظهوره في كود React:\nVITE_API_SECRET=123\n// import.meta.env.VITE_API_SECRET // ✅ سيعمل بنجاح ومثالي`,
          explanation: "ميزة أمان عبقرية في Vite: أي متغير لا يبدأ بـ VITE_ يُحجب تماماً عن المتصفح لمنع تسريب المفاتيح السرية الحساسة للمستخدمين."
        }
      ],
      bestPractices: [
        "ضع ملف `.env` و `.env.local` في قائمة استبعاد ملف `.gitignore` لمنع رفعه بالخطأ إلى GitHub.",
        "أنشئ ملفاً توضيحياً اسمه `.env.example` يحتوي على أسماء المتغيرات فقط بقيم فارغة ليعرف زملاؤك في الفريق ما يحتاجون لضبطه.",
        "تذكر قاعدة ذهبية: أي متغير يبدأ بـ `VITE_` سيكون مرئياً لأي شخص يفحص كود موقعك في المتصفح؛ لا تضع فيه كلمات سر قواعد البيانات الخاصة بالسيرفر!"
      ],
      infographic: {
        title: "إنفوجرافيك: إدارة متغيرات البيئة بـ Vite وقاعدة VITE_ الذهبية",
        concept: "Vite Environment Variables & Security Prefix",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 متغيرات البيئة في Vite (قاعدة VITE_)        │
└─────────────────────────────────────────────────────────────┘
  في ملف .env في جذر المشروع:
  DB_PASSWORD=secret1234  ──> 🛑 محجوب عن المتصفح تماماً (حماية أمنية)
  VITE_API_URL=https://... ──> ✅ يُصدّر بأمان للمتصفح عبر البادئة VITE_
                 │
                 ▼
  داخل كود مكونات React:
  const api = import.meta.env.VITE_API_URL;`
      }
    }
  ],
  quiz: [
    {
      id: "q4.2.1",
      question: "لماذا تشترط أداة Vite بدء أسماء متغيرات البيئة بالبادئة VITE_ في ملف .env؟",
      options: [
        "لكي تبدو الكلمات باللغة الفرنسية التي يحبها مطورو Vite.",
        "لحماية أمنية صارمة تمنع تسريب المفاتيح السرية الخاصة بالخادم تلقائياً إلى كود المتصفح المكشوف للزوار.",
        "لأن نظام التشغيل Windows لا يقبل نصوصاً بدون بادئات إنجليزية.",
        "لتحويل المتغيرات إلى نصوص مشفرة تلقائياً بكلمة مرور."
      ],
      correctAnswer: 1,
      explanation: "تشترط Vite بادئة VITE_ لكي تضمن ألا تُسرّب أي مفاتيح خاصة (مثل كلمات سر قواعد البيانات) إلى كود الواجهة الأمامية المكشوف للعامة في المتصفح."
    },
    {
      id: "q4.2.2",
      question: "ما هو المجلد الناتج من تشغيل أمر npm run build والمخصص للرفع على الاستضافة؟",
      options: [
        "مجلد node_modules الضخم.",
        "مجلد src.",
        "مجلد dist الذي يحتوي على الملفات المجمعة والمصغرة الجاهزة للإنتاج.",
        "مجلد public القديم."
      ],
      correctAnswer: 2,
      explanation: "أمر npm run build يخرج مجلد التوزيع (dist) الذي يحتوي على كود الإنتاج المضغوط والمحسن الصالح للعمل على أي خادم استضافة في العالم."
    },
    {
      id: "q4.2.3",
      question: "لماذا يتفوق خادم تطوير Vite بشكل ساحق في سرعة التشغيل والتحديث على Create React App؟",
      options: [
        "لأنه يعمل بدون اتصال بالإنترنت فقط.",
        "لأنه يستغل ميزة الـ Native ES Modules ومحرك esbuild السريع لتقديم الملفات عند الطلب دون تجميع مسبق للمشروع بالكامل.",
        "لأنه يمنع استخدام مكتبات التنسيق CSS في المشروع.",
        "لأنه يحذف ملفات المشروع بعد كل نصف ساعة."
      ],
      correctAnswer: 1,
      explanation: "Vite لا تضيع الوقت في تجميع كل الملفات مسبقاً، بل تشغل الخادم فوراً وتقدم الملف المطلوب فقط عند طلب المتصفح له مدعومة بمحرك esbuild فائق السرعة المكتوب بلغة Go."
    }
  ],
  exercise: {
    title: "تمرين عملي: محاكاة إعداد مشروع React احترافي مع قراءة متغيرات البيئة وعرضها",
    description: "المطلوب بناء مكون إعدادات نظام `ProjectConfigViewer` يقرأ معلومات بيئة التشغيل من كائن محاكي لـ `import.meta.env`، ويعرض بطاقة بيانات توضح: اسم التطبيق، رابط الـ API المعتمد، ووضع التشغيل (تطوير Development أو إنتاج Production)، مع إظهار شارة ملونة بالحالة وتحذير إذا كان الرابط غير مشفر.",
    starterCode: `// محاكاة لكائن بيئة Vite
const mockEnv = {
  VITE_APP_NAME: 'بوابة المطورين React',
  VITE_API_ENDPOINT: 'http://localhost:5000/api',
  MODE: 'development',
  DEV: true
};

// المطلوب: مكون يعرض الإعدادات بأسلوب منظم
export default function ProjectConfigViewer() {
  // 1. استخرج المتغيرات من mockEnv
  // 2. حدد هل الرابط محلي أم إنتاجي
  // 3. أرجع واجهة أنيقة بالبيانات
}`,
    hints: [
      "استخرج القيم عبر التفكيك: `const { VITE_APP_NAME, VITE_API_ENDPOINT, MODE, DEV } = mockEnv;`",
      "افحص هل الرابط مشفر باستخدام: `VITE_API_ENDPOINT.startsWith('https://')`",
      "اعرض شارة بلون أخضر للإنتاج ولون برتقالي للتطوير."
    ],
    solution: `// محاكاة لكائن بيئة Vite
const mockEnv = {
  VITE_APP_NAME: 'بوابة المطورين React 19',
  VITE_API_ENDPOINT: 'http://localhost:5000/api',
  MODE: 'development',
  DEV: true
};

export default function ProjectConfigViewer() {
  const { VITE_APP_NAME, VITE_API_ENDPOINT, MODE, DEV } = mockEnv;
  const isHttps = VITE_API_ENDPOINT.startsWith('https://');

  return (
    <div style={{ maxWidth: '550px', margin: '20px auto', background: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '20px', color: '#f8fafc', fontFamily: 'system-ui' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '12px', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#38bdf8' }}>⚙️ إعدادات بيئة تشغيل Vite</h2>
        <span style={{ 
          background: DEV ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)', 
          color: DEV ? '#fbbf24' : '#34d399', 
          border: \`1px solid \${DEV ? '#f59e0b' : '#10b981'}\`,
          padding: '3px 10px', 
          borderRadius: '999px', 
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          {MODE.toUpperCase()}
        </span>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
        <div>
          <span style={{ color: '#94a3b8' }}>اسم التطبيق: </span>
          <strong>{VITE_APP_NAME}</strong>
        </div>

        <div>
          <span style={{ color: '#94a3b8' }}>رابط الـ API المستهدف: </span>
          <code style={{ background: '#0f172a', padding: '2px 6px', borderRadius: '4px', color: '#38bdf8' }}>
            {VITE_API_ENDPOINT}
          </code>
        </div>

        <div style={{ marginTop: '8px', padding: '10px', borderRadius: '6px', background: isHttps ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: isHttps ? '#34d399' : '#f87171', fontSize: '0.85rem' }}>
          {isHttps ? '🔒 اتصال مشفر وآمن عبر HTTPS.' : '⚠️ اتصال محلي غير مشفر (مقبول فقط أثناء التطوير).'}
        </div>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: الدليل الكامل لدورة حياة مشروع React مع Vite",
    badge: "هندسة مشاريع Vite",
    summary: "Vite ليست مجرد أداة تشغيل سريعة، بل هي منظومة تطوير وبناء متكاملة ترشدك من أول أمر npm create إلى لحظة نشر مجلد dist الإنتاجي على السيرفرات العالمية.",
    points: [
      "Vite Scaffold: إنشاء فوري بأحدث قوالب React الرسمية.",
      "JS vs TS: ابدأ بـ JavaScript للسرعة ثم عزز بـ TypeScript للأمان.",
      "package.json: بطاقة هوية المشروع ودليل أوامره وحزمه.",
      "Folder Structure: مجلد src هو قلبك ومجلد public للملفات المباشرة.",
      "index.html & main.jsx: الصندوق الحاضن ومفتاح إشعال المحرك بـ createRoot.",
      "Dev vs Build: خادم HMR فوري محلياً وضغط مصغر في مجلد dist للإنتاج."
    ]
  }
};
