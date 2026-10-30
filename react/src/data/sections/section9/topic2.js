// src/data/sections/section9/topic2.js
// الموضوع 2: استخدام Tailwind CSS في React (Tailwind Architecture, Utilities, Responsive Design & Dark Mode)

export const SECTION_9_TOPIC_2 = {
  id: "9.2",
  title: "استخدام Tailwind CSS",
  englishTerm: "Tailwind CSS Mastery in React Applications",
  description: "الدليل الشامل لإتقان إطار العمل الأكثر شعبية واستخداماً في عالم الواجهات الأمامية: فلسفة Utility-First، التكامل مع Vite و React، بناء التخطيطات المعقدة بـ Flexbox و Grid، التصميم فائق التجاوب للشاشات المختلفة، تخصيص سمات الألوان والخطوط، إدارة الحالات التفاعلية (:hover, :focus, :active)، هندسة الوضع الداكن (Dark Mode)، وتنظيم الأصناف القابلة لإعادة الاستخدام.",
  subtopics: [
    {
      id: "9.2.a",
      title: "مقدمة إلى Tailwind CSS",
      englishTerm: "Introduction to Tailwind CSS & Utility-First Philosophy",
      description: "المفهوم الهندسي لإطار عمل Tailwind CSS ولماذا أحدث ثورة جذرية في تطوير الواجهات. بدلاً من كتابة كود CSS تقليدي والتفكير في أسماء كلاسات مثل .author-bio-container، توفر Tailwind آلاف الأصناف المساعدة الصغيرة والمحددة (Utility Classes مثل p-4 و flex و text-center و rounded-xl). هذه الأصناف تُطبق مباشرة داخل كود JSX لتركيب الواجهات بسرعة هائلة دون الحاجة لمغادرة ملف المكون إطلاقاً.",
      realLifeAnalogy: "مثل قطع مكعبات 'الليغو' (Lego)؛ بدلاً من أن تصنع كل قطعة بلاستيكية بنفسك في مصنع قوالب وتنتظر لتجف، لديك صندوق ممتلئ بآلاف المكعبات المعيارية الجاهزة، وما عليك سوى تركيبها معاً لبناء قلعة متكاملة في دقائق.",
      whyItMatters: "ينهي Tailwind أزمة 'التنقل الذهني المرهق' (Context Switching) بين ملف JSX وملف CSS. كما أنه يقضي على تضخم ملفات التنسيق؛ لأن مجمع الحزم يستخرج فقط الكلاسات التي استخدمتها بالفعل في مشروعك (Purging/JIT)، مما يجعل حجم ملف CSS النهائي في الإنتاج صغيراً جداً (غالباً أقل من 15KB).",
      syntax: "<div className=\"flex items-center justify-between p-6 bg-slate-900 rounded-2xl text-white shadow-xl\">\n  <h2 className=\"text-lg font-bold text-indigo-400\">العنوان</h2>\n</div>",
      simpleExample: `// بناء بطاقة كاملة باستخدام أصناف Tailwind المساعدة
import React from "react";

export function SimpleTailwindCard() {
  return (
    // استخدام أصناف مساعدة متكاملة للتباعد والألوان والحدود
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-base font-bold text-indigo-400">بطاقة Tailwind</h3>
      <p className="text-xs text-slate-300 mt-1">
        تم تنسيقها بالكامل داخل JSX دون كتابة سطر CSS واحد!
      </p>
    </div>
  );
}
`,
      advancedExample: `// لوحة مقارنة إنتاجية المطور بين CSS التقليدي و Tailwind Utility-First
import React from "react";

export function TailwindPhilosophyVisualizer() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">فلسفة Utility-First في Tailwind</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          Zero Context Switch
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
          <span className="text-slate-400 font-bold block">1. التفكير في أسماء الكلاسات (المأزق القديم):</span>
          <p className="text-[11px] text-rose-400 font-mono">
            .profile-card-header-inner-wrapper-v2
          </p>
          <span className="text-[10px] text-slate-500">
            تضييع 30% من الوقت في ابتكار أسماء لكلاسات لن تعاد استخدامها أبداً.
          </span>
        </div>

        <div className="p-3 bg-slate-950 rounded-2xl border border-indigo-500/30 space-y-1">
          <span className="text-indigo-400 font-bold block">2. الحل الذكي مع Tailwind:</span>
          <p className="text-[11px] text-emerald-400 font-mono">
            flex items-center gap-3 p-4 bg-slate-900 rounded-xl
          </p>
          <span className="text-[10px] text-slate-400">
            أصناف معيارية موحدة ذات دلالة واضحة تنفذ التصميم فوراً في نفس المكان.
          </span>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span>حجم ملف CSS النهائي في الإنتاج (Purged):</span>
        <span className="font-mono text-emerald-400 font-bold">~ 12.4 kB فقط!</span>
      </div>
    </div>
  );
}
`,
      outputExplanation: "من خلال استخدام أصناف Tailwind، يتم تطبيق خصائص CSS المعيارية مثل display: flex و padding: 1rem و background-color مباشرة عبر أسماء مختصرة متناسقة عالمياً.",
      commonMistakes: [
        {
          mistake: "محاولة اختراع أصناف CSS معقدة وتجميع فئات Tailwind عبر @apply في كل مكان.",
          fix: "استخدم الفئات مباشرة في JSX واعتمد على تقسيم المكونات (Component Composition) لإعادة الاستخدام.",
          reason: "الإفراط في استخدام @apply يعيدك إلى المأزق القديم في ابتكار أسماء الكلاسات ويفقدك ميزة Tailwind."
        }
      ],
      bestPractices: [
        "ثبت إضافة 'Tailwind CSS IntelliSense' في محرر VS Code للحصول على الإكمال التلقائي الفوري لكافة الفئات.",
        "حافظ على ترتيب منطقي للكلاسات: (التخطيط Layout -> الأبعاد Sizing -> التباعد Spacing -> الألوان Colors -> الحركات Transitions)."
      ],
      infographicCard: {
        title: "ركائز Tailwind CSS الثلاث",
        points: [
          "Utility-First: أصناف ذرية صغيرة تبني واجهات بالغة التعقيد.",
          "JIT Compiler: إنتاج الكلاسات المستخدمة فقط لتصغير حجم الملف.",
          "Design Tokens: مقاييس معيارية ثابتة للمسافات والألوان والخطوط."
        ]
      }
    },
    {
      id: "9.2.b",
      title: "إعداد Tailwind مع Vite",
      englishTerm: "Setting up Tailwind CSS v4 / v3 with Vite & React",
      description: "الخطوات البرمجية لإعداد وتهيئة مكتبة Tailwind CSS في مشاريع Vite الحديثة. يشمل ذلك: تثبيت حزم الاعتماديات، إنشاء وتعديل ملف tailwind.config.js لتعريف مسارات الملفات (content)، واستيراد توجيهات Tailwind الثلاثة الأساسية في ملف index.css العام: (@tailwind base, @tailwind components, @tailwind utilities في v3 أو @import 'tailwindcss' في v4).",
      realLifeAnalogy: "مثل توصيل الكهرباء وشبكة المياه للمبنى الجديد قبل تركيب الأثاث؛ بمجرد ربط الشبكة الرئيسية، تعمل كافة الأجهزة والمصابيح في كافة الغرف بسلاسة.",
      whyItMatters: "الإعداد الصحيح يضمن تشغيل محرك JIT (Just-In-Time) السريع، الذي يراقب ملفات .jsx الخاصة بك في الوقت الفعلي وينشئ كود CSS الفوري مع ميزة التحديث اللحظي الفائق Fast Refresh.",
      syntax: "// في ملف tailwind.config.js:\nexport default {\n  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n  theme: { extend: {} },\n  plugins: []\n};\n\n// في ملف index.css:\n@tailwind base;\n@tailwind components;\n@tailwind utilities;",
      simpleExample: `// أوامر تثبيت وإعداد Tailwind مع مشروع Vite
// 1. تثبيت الحزم عبر الطرفية:
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// 2. ملف index.css الرئيسي:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// 3. الاستخدام المباشر في App.jsx:
import React from "react";

export function App() {
  return (
    <h1 className="text-3xl font-black text-indigo-500 text-center mt-10">
      مرحباً بك في عالم Tailwind مع Vite! 🚀
    </h1>
  );
}
`,
      advancedExample: `// دليل التحقق من صحة إعدادات Tailwind في مشروع React
import React from "react";

export function TailwindSetupChecklist() {
  const setupSteps = [
    { step: "تثبيت الحزم", cmd: "npm i -D tailwindcss postcss autoprefixer", done: true },
    { step: "توليد ملفات الضبط", cmd: "npx tailwindcss init -p", done: true },
    { step: "تحديد مسارات content", file: "tailwind.config.js: ['./src/**/*.{jsx,tsx}']", done: true },
    { step: "حقن التوجيهات", file: "src/index.css: @tailwind base, components, utilities", done: true },
    { step: "استيراد CSS في main.jsx", file: "import './index.css';", done: true }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">قائمة التحقق من إعداد Tailwind</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          Vite Integration
        </span>
      </div>

      <div className="space-y-2 text-xs">
        {setupSteps.map((s, i) => (
          <div key={i} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-200">{i + 1}. {s.step}</span>
              <span className="text-emerald-400 font-bold">✓ مكتمل</span>
            </div>
            <code className="text-[10px] font-mono text-indigo-300 block bg-slate-900 px-2 py-1 rounded">
              {s.cmd || s.file}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "عند تشغيل npm run dev، يقرأ Vite ملف tailwind.config.js ويقوم بمسح كافة ملفات JSX في مسار src بحثاً عن الكلاسات وتوليد ملف CSS خفيف ومباشر في الذاكرة.",
      commonMistakes: [
        {
          mistake: "نسيان تحديد امتدادات الملفات في خاصية content داخل tailwind.config.js.",
          fix: "تأكد من كتابة: content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'].",
          reason: "إذا لم يتم تضمين مسار الملفات، فلن يتعرف محرك Tailwind على الكلاسات التي كتبتها في ملفات JSX ولن يولد لها أي تنسيق."
        }
      ],
      bestPractices: [
        "تأكد من استيراد ملف index.css في أول سطر في ملف src/main.jsx.",
        "في Tailwind v4 الحديثة، يكفي وضع @import 'tailwindcss'; في ملف CSS دون الحاجة لملفات ضبط إضافية."
      ],
      infographicCard: {
        title: "خطوات تكامل Tailwind مع Vite",
        points: [
          "تثبيت الحزم: tailwindcss و postcss و autoprefixer.",
          "مصفوفة content: تحديد مسارات ملفات .jsx لفحصها.",
          "توجيهات @tailwind: حقن القواعد الأساسية والأدوات المساعدة."
        ]
      }
    },
    {
      id: "9.2.c",
      title: "استخدام Utility Classes",
      englishTerm: "Core Utility Classes (Spacing, Sizing, Colors, Typography)",
      description: "المعجم الأساسي لفئات Tailwind الأكثر استخداماً يومياً: التباعد الداخلي (Padding: p-, px-, py-)، التباعد الخارجي (Margin: m-, mx-, my-)، الأبعاد (Width: w-, Height: h-)، الألوان والدرجات اللونية (bg-indigo-600, text-slate-300, border-emerald-500)، والخطوط والنصوص (text-sm, font-bold, leading-relaxed, tracking-wide).",
      realLifeAnalogy: "مثل مسطرة القياس الهندسية المعيارية؛ الدرجات مرقمة بدقة وثبات: 1 تعني 4px، و 2 تعني 8px، و 4 تعني 16px، و 6 تعني 24px، مما يضمن أن كافة المسافات في تطبيقك متناسقة ومريحة للعين.",
      whyItMatters: "في CSS العادي، يكتب مطور margin: 15px ويكتب آخر margin: 18px مما يشوه تناسق الصفحة. في Tailwind، تعتمد على سلم قياس معتمد ومدروس عالمياً (Design System Scale) يضمن التناغم البصري الكامل.",
      syntax: "p-4      => padding: 1rem (16px)\nmx-auto  => margin-left: auto; margin-right: auto;\nw-full   => width: 100%;\ntext-lg  => font-size: 1.125rem; line-height: 1.75rem;",
      simpleExample: `// استخدام الفئات الأساسية لبناء عنصر نصي منسق
import React from "react";

export function UtilityShowcase() {
  return (
    // p-6 (تباعد 24px), rounded-2xl (حواف دائرية 16px), bg-slate-900 (خلفية داكنة)
    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white max-w-sm mx-auto">
      {/* text-xl (حجم خط 20px), font-black (وزن خط 900), text-indigo-400 (لون بنفسجي فاتح) */}
      <h3 className="text-xl font-black text-indigo-400 mb-2">معجم الفئات الذكية</h3>
      {/* text-xs (خط صغير 12px), leading-relaxed (تباعد أسطر مريح), text-slate-300 */}
      <p className="text-xs leading-relaxed text-slate-300">
        التحكم الكامل في الخطوط، المسافات، والحدود بكلمات دلالية بديهية وموحدة.
      </p>
    </div>
  );
}
`,
      advancedExample: `// محاكي تفاعلي لمقاييس المسافات (Spacing Scale) والأبعاد في Tailwind
import React, { useState } from "react";

export function SpacingScaleExplorer() {
  const [scale, setScale] = useState(4); // 4 = 16px

  const scaleValues = [
    { num: 2, px: "8px", rem: "0.5rem" },
    { num: 4, px: "16px", rem: "1rem" },
    { num: 6, px: "24px", rem: "1.5rem" },
    { num: 8, px: "32px", rem: "2rem" },
    { num: 12, px: "48px", rem: "3rem" }
  ];

  const currentScale = scaleValues.find((s) => s.num === scale) || scaleValues[1];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مقياس المسافات القياسي (Spacing Scale)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          p-{scale} = {currentScale.px}
        </span>
      </div>

      {/* معاينة بصرية للمسافة الحية */}
      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex justify-center items-center">
        <div
          className="bg-indigo-600/30 border border-indigo-500 rounded-xl transition-all duration-300 flex items-center justify-center text-xs font-mono font-bold text-indigo-300"
          style={{ padding: currentScale.px }}
        >
          <div className="bg-indigo-600 px-3 py-1.5 rounded-lg text-white">
            المحتوى الداخلي
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {scaleValues.map((s) => (
          <button
            key={s.num}
            onClick={() => setScale(s.num)}
            className={\`p-2 rounded-xl text-xs font-mono font-bold border transition-all \${
              scale === s.num
                ? "bg-indigo-600 border-indigo-500 text-white"
                : "bg-slate-950 border-slate-800 text-slate-400"
            }\`}
          >
            {s.num} ({s.px})
          </button>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "يعتمد Tailwind على معادلة رياضية بسيطة للمسافات: الرقم مضروب في 4 بكسل (مثال: p-4 = 4 * 4 = 16px، و p-8 = 8 * 4 = 32px)، مما يسهل حفظها وتطبيقها بدقة مذهلة.",
      commonMistakes: [
        {
          mistake: "محاولة كتابة كلاسات عشوائية عبر قيم مخصصة دائماً مثل p-[17px] دون سبب وجيه.",
          fix: "التزم بمقاييس Tailwind المعتمدة مثل p-4 أو p-5 إلا في الحالات النادرة جداً.",
          reason: "الاعتماد المفرط على القيم العشوائية [17px] يفسد التناغم البصري لتصميم التطبيق."
        }
      ],
      bestPractices: [
        "استخدم w-full لجعل العنصر يملأ عرض الحاوية بالكامل، و max-w-* لتحديد الحد الأقصى للعرض.",
        "استخدم الدرجات اللونية المتقاربة للخلفيات والنصوص لتحقيق أعلى درجات التباين والراحة البصرية."
      ],
      infographicCard: {
        title: "قاموس مقاييس Tailwind الذكية",
        points: [
          "قاعدة الضرب في 4: الرقم * 4px = القياس الحقيقي (p-4 = 16px).",
          "تدرج الألوان: من 50 (الأفتح) إلى 950 (الأغمق والأعمق).",
          "المحاذاة التلقائية: mx-auto لتوسيط العناصر أفقياً."
        ]
      }
    },
    {
      id: "9.2.d",
      title: "تصميم Layout باستخدام Flex وGrid",
      englishTerm: "Layout Architecture with Flexbox & CSS Grid",
      description: "بناء وتوزيع هياكل واجهات المستخدم المعقدة باستخدام نظامي Flexbox و CSS Grid في Tailwind CSS. يتيح Flexbox المحاذاة الخطية المرنة في بعد واحد (صفوف أو أعمدة: flex, flex-col, items-center, justify-between, gap-4). بينما يوفر CSS Grid توزيعاً ثنائي الأبعاد في شبكة متناسقة (grid, grid-cols-12, col-span-4) لتصميم لوحات التحكم والجداول المتقدمة.",
      realLifeAnalogy: "مثل تخطيط مدينة ذكية؛ شوارع المشاة والمحلات تصطف في مسار طولي مستقيم ومرن (Flexbox)، بينما المربعات السكنية والمناطق التجارية تُقسم في مربعات وشبكات دقيقة متوازية (Grid).",
      whyItMatters: "التخطيط الخاطئ يسبب تكسر العناصر وتشوه الواجهة عند فتحها على شاشات مختلفة. إتقان فئات Flex و Grid في Tailwind يتيح لك بناء أي واجهة عالمية معقدة خلال دقائق وبأسطر معدودة.",
      syntax: "// Flexbox:\n<div className=\"flex items-center justify-between gap-4\">...</div>\n\n// CSS Grid:\n<div className=\"grid grid-cols-1 md:grid-cols-3 gap-6\">...</div>",
      simpleExample: `// استخدام Flexbox و Grid في مكونين متجاورين
import React from "react";

export function LayoutMiniDemo() {
  return (
    <div className="space-y-4">
      {/* شريط أدوات باستخدام Flexbox */}
      <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl">
        <span className="font-bold text-xs text-white">شريط علوي</span>
        <button className="px-3 py-1 bg-indigo-600 text-xs rounded-lg text-white">إجراء</button>
      </div>

      {/* شبكة بطاقات باستخدام CSS Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-slate-900 rounded-xl text-xs text-slate-300">العمود 1</div>
        <div className="p-3 bg-slate-900 rounded-xl text-xs text-slate-300">العمود 2</div>
      </div>
    </div>
  );
}
`,
      advancedExample: `// لوحة تحكم إحصائية متقدمة (Dashboard Grid) بنظام 12 عموداً
import React from "react";

export function DashboardGridLayout() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تخطيط لوحة التحكم (Grid + Flex)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          12-Column Grid
        </span>
      </div>

      {/* شبكة 12 عمود متطورة */}
      <div className="grid grid-cols-12 gap-3 text-xs">
        {/* بطاقة رئيسية تأخذ 8 أعمدة */}
        <div className="col-span-8 p-4 bg-slate-950 rounded-2xl border border-indigo-500/30 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-indigo-400 font-bold block mb-1">المخطط البياني للنمو:</span>
            <p className="text-slate-300 text-xs">تحليلات الأداء الأسبوعي للمنصة</p>
          </div>
          <div className="h-20 bg-slate-900/60 rounded-xl mt-3 flex items-center justify-center text-slate-500 font-mono text-[11px]">
            [مخطط تفاعلي 📈]
          </div>
        </div>

        {/* بطاقتان فرعيتان كل منهما تأخذ 4 أعمدة */}
        <div className="col-span-4 space-y-3">
          <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block">المستخدمين:</span>
            <span className="font-mono text-base font-bold text-emerald-400">14,290</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
            <span className="text-[10px] text-slate-500 block">المبيعات:</span>
            <span className="font-mono text-base font-bold text-amber-400">89,120 $</span>
          </div>
        </div>

        {/* شريط أسفل الشبكة بعرض كامل (12 عموداً) مع Flexbox */}
        <div className="col-span-12 p-3 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-300 text-[11px]">الخادم السحابي يعمل بكفاءة 99.9%</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Node v22 / React 19</span>
        </div>
      </div>
    </div>
  );
}
`,
      outputExplanation: "الجمع بين grid grid-cols-12 و col-span-* يتيح توزيع المساحات بنسب رياضية دقيقة، بينما يضمن استخدام gap-* تباعداً متسقاً بين كافة البطاقات دون الحاجة لكتابة هوامش margin يدوية.",
      commonMistakes: [
        {
          mistake: "استخدام margin على العناصر الأبناء بدلاً من استخدام خاصية gap على الحاوية الأب.",
          fix: "ضع دائماً gap-3 أو gap-4 على عنصر flex أو grid الأب.",
          reason: "استخدام margin على الأبناء يسبب تباعداً زائداً عند أطراف الحاوية الخارجية ويجعل التجاوب معقداً."
        }
      ],
      bestPractices: [
        "استخدم Flexbox للمحاذاة في اتجاه واحد (أشرطة التنقل، الأزرار مع الأيقونات، قوائم الروابط).",
        "استخدم CSS Grid للمصفوفات ثنائية الأبعاد (معارض الصور، لوحات التحكم، شبكات المنتجات)."
      ],
      infographicCard: {
        title: "قواعد التخطيط Layout Rules",
        points: [
          "Flexbox: اتجاه واحد (flex-row أو flex-col) للمحاذاة السريعة.",
          "CSS Grid: شبكات ثنائية الأبعاد بنظام الأعمدة (grid-cols-12).",
          "خاصية gap: التباعد المعياري التلقائي بين كافة العناصر."
        ]
      }
    },
    {
      id: "9.2.e",
      title: "إنشاء تصميم متجاوب",
      englishTerm: "Responsive Design with Mobile-First Breakpoints",
      description: "بناء الواجهات المتجاوبة مع كافة أحجام الشاشات باستخدام نقاط كسر Tailwind المبنية بفلسفة 'الهاتف أولاً' (Mobile-First Breakpoints). القواعد المكتوبة بدون بادئة تنطبق على شاشات الجوال تلقائياً، وتُستخدم البادئات (sm:, md:, lg:, xl:, 2xl:) لترقية التصميم وتعديله تدريجياً للشاشات الأكبر.",
      realLifeAnalogy: "مثل الملابس المطاطية الذكية؛ حجمها الأساسي يناسب الأجسام الصغيرة بدقة، وعندما يرتديها شخص أضخم، تتمدد تلقائياً وتتكيف مع قياساته براحة وأناقة.",
      whyItMatters: "أكثر من 65% من زيارات الويب اليوم تأتي من الهواتف المحمولة. فلسفة Mobile-First تضمن أن موقعك يبدأ خفيفاً ومثالياً على الشاشات الصغيرة ثم يتوسع بذكاء على الحواسيب المكتبية.",
      syntax: "// الهيكل المتجاوب: جوال أولاً ثم حاسوب\n<div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4\">\n  {/* عمود واحد في الجوال، عمودان في التابلت، و 4 في الحاسوب */}\n</div>",
      simpleExample: `// مكون يتغير تخطيطه تلقائياً حسب حجم الشاشة
import React from "react";

export function ResponsiveCardSnippet() {
  return (
    // في الجوال عمود واحد (w-full)، وفي شاشات md وما فوق يتغير لـ flex أفقي
    <div className="p-4 bg-slate-900 rounded-xl flex flex-col md:flex-row items-center justify-between gap-3">
      <p className="text-xs text-white">النص يتوسط في الجوال وينحاز في الحاسوب</p>
      <button className="w-full md:w-auto px-4 py-2 bg-indigo-600 text-xs rounded-lg text-white">
        زر متجاوب
      </button>
    </div>
  );
}
`,
      advancedExample: `// محاكي نقاط الكسر Responsive Breakpoints واختبار أحجام الشاشات
import React, { useState } from "react";

export function ResponsiveBreakpointsSimulator() {
  const [activeScreen, setActiveScreen] = useState("mobile"); // mobile | tablet | desktop

  const screenConfigs = {
    mobile: { width: "max-w-xs", label: "شاشة هاتف (Default)", cols: "grid-cols-1" },
    tablet: { width: "max-w-sm", label: "شاشة لوحي (md: 768px)", cols: "grid-cols-2" },
    desktop: { width: "max-w-md", label: "شاشة حاسوب (lg: 1024px)", cols: "grid-cols-3" }
  };

  const current = screenConfigs[activeScreen];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">محاكي التجاوب (Mobile-First Breakpoints)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          {current.label}
        </span>
      </div>

      <div className="flex gap-2">
        {["mobile", "tablet", "desktop"].map((sc) => (
          <button
            key={sc}
            onClick={() => setActiveScreen(sc)}
            className={\`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all border \${
              activeScreen === sc
                ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-950"
                : "bg-slate-950 border-slate-800 text-slate-400"
            }\`}
          >
            {sc === "mobile" ? "📱 جوال" : sc === "tablet" ? "📟 لوحي" : "💻 حاسوب"}
          </button>
        ))}
      </div>

      {/* إطار محاكاة الشاشة المتغيرة */}
      <div className={\`mx-auto p-4 bg-slate-950 rounded-2xl border border-indigo-500/30 transition-all duration-300 \${current.width}\`}>
        <div className={\`grid gap-2 text-center text-xs \${current.cols}\`}>
          <div className="p-3 bg-indigo-600/20 border border-indigo-500/40 rounded-xl text-indigo-300 font-bold">
            البطاقة 1
          </div>
          <div className="p-3 bg-indigo-600/20 border border-indigo-500/40 rounded-xl text-indigo-300 font-bold">
            البطاقة 2
          </div>
          <div className="p-3 bg-indigo-600/20 border border-indigo-500/40 rounded-xl text-indigo-300 font-bold">
            البطاقة 3
          </div>
        </div>
      </div>
    </div>
  );
}
`,
      outputExplanation: "من خلال كتابة grid-cols-1 md:grid-cols-2 lg:grid-cols-3، تتكيف الواجهة تلقائياً مع حجم الشاشة عبر استعلامات وسائط @media min-width خفيفة ومحسنة مسبقاً.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن sm: تعني شاشة الجوال؛ في Tailwind، شاشة الجوال هي الكود المجرد بدون بادئة، و sm: تعني الشاشات التي تزيد عن 640px.",
          fix: "اكتب كود الجوال مباشرة: p-2، ثم رقه للشاشات الأكبر: md:p-6 lg:p-8.",
          reason: "يعتمد Tailwind نظام Mobile-First (min-width) حصراً، فلا توجد استعلامات max-width افتراضياً."
        }
      ],
      bestPractices: [
        "ابدأ دائماً بتصميم وتجربة الواجهة على شاشات الهواتف المحمولة أولاً ثم وسعها للحواسيب.",
        "استخدم w-full في الجوال و md:w-auto للأزرار والحقول لتسهيل النقر بالإبهام."
      ],
      infographicCard: {
        title: "نقاط كسر Tailwind (Mobile-First)",
        points: [
          "بدون بادئة: الهواتف المحمولة (الشاشات الصغيرة جداً).",
          "sm: الشاشات فوق 640px | md: التابلت فوق 768px.",
          "lg: الحواسيب فوق 1024px | xl: الشاشات العريضة فوق 1280px."
        ]
      }
    },
    {
      id: "9.2.f",
      title: "تخصيص الألوان والخطوط",
      englishTerm: "Customizing Theme (Colors, Fonts & Extensions)",
      description: "كيفية توسيع وتخصيص سمات Tailwind CSS عبر كائن theme.extend في ملف tailwind.config.js. يتيح لك ذلك إضافة ألوان هويتك البصرية الخاصة (Brand Colors مثل primary, secondary, accent)، وتحديد خطوط عربية جميلة (مثل Cairo, Tajawal, IBM Plex Sans Arabic)، وتعيين مسافات أو انحناءات حدود خاصة بمشروعك.",
      realLifeAnalogy: "مثل اختيار ألوان شعار شركتك الرسمية وزيها الموحد؛ بدلاً من استخدام ألوان عشوائية في كل فرع، تضع دليلاً صارماً للهوية البصرية (Brand Guidelines) يلتزم به الجميع.",
      whyItMatters: "تخصيص السمات في مكان مركزي واحد يمنح تطبيقك طابعاً وهوية فريدة تخرجه من المظهر النمطي الافتراضي. وإذا قررت الإدارة تغيير درجة اللون الأزرق للشركة مستقبلاً، تعدل سطراً واحداً في tailwind.config.js ليتحدث الموقع كاملاً فوراً.",
      syntax: "// في tailwind.config.js:\ntheme: {\n  extend: {\n    colors: {\n      brand: { 500: '#6366f1', 600: '#4f46e5' }\n    },\n    fontFamily: {\n      cairo: ['Cairo', 'sans-serif']\n    }\n  }\n}",
      simpleExample: `// استخدام لون مخصص وخط مخصص معرف في الإعدادات
import React from "react";

export function CustomBrandElement() {
  return (
    // bg-brand-500 و font-cairo معرفان في tailwind.config.js
    <div className="p-4 bg-brand-500 rounded-2xl font-cairo text-white">
      <h3 className="text-lg font-bold">هوية بصرية مخصصة</h3>
      <p className="text-xs opacity-90">باستخدام خط Cairo ولون العلامة التجارية الخاص.</p>
    </div>
  );
}
`,
      advancedExample: `// لوحة استعراض منظومة الألوان والخطوط المخصصة في المشروع
import React from "react";

export function ThemeCustomizationShowcase() {
  const brandPalette = [
    { name: "brand-primary", hex: "#6366f1", bg: "bg-indigo-600", text: "text-white" },
    { name: "brand-surface", hex: "#0f172a", bg: "bg-slate-900 border border-slate-800", text: "text-white" },
    { name: "brand-accent", hex: "#10b981", bg: "bg-emerald-500", text: "text-slate-950 font-bold" }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تخصيص الهوية (theme.extend)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Custom Tokens
        </span>
      </div>

      <div className="space-y-2">
        {brandPalette.map((color, idx) => (
          <div
            key={idx}
            className={\`p-3.5 rounded-2xl flex justify-between items-center text-xs \${color.bg} \${color.text}\`}
          >
            <span>{color.name}</span>
            <span className="font-mono text-[11px] opacity-90">{color.hex}</span>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
        💡 <strong className="text-slate-200">نصيحة معمارية:</strong> استخدم خاصية <code className="text-indigo-300 font-mono">extend</code> دائماً داخل كائن <code className="text-indigo-300 font-mono">theme</code> حتى لا تحذف ألوان Tailwind الافتراضية بالخطأ.
      </div>
    </div>
  );
}
`,
      outputExplanation: "من خلال وضع الألوان داخل theme.extend، تقوم Tailwind بتوليد كافة مشتقات الفئات تلقائياً: bg-brand-primary و text-brand-primary و border-brand-primary.",
      commonMistakes: [
        {
          mistake: "وضع الألوان والخطوط داخل theme مباشرة دون استخدام كلمة extend.",
          fix: "ضعها دائماً داخل theme.extend: { colors: { ... } }.",
          reason: "وضعها مباشرة داخل theme يحذف كافة ألوان وخطوط ومسافات Tailwind الافتراضية ويستبدلها بما كتبته فقط."
        }
      ],
      bestPractices: [
        "استخدم المتغيرات المتكيفة مع CSS Variables (مثل hsl(var(--primary))) لدعم تبديل السمات والوضع الداكن بسلاسة.",
        "حدد خطوط عربية بديلة احتياطية مثل fontFamily: { cairo: ['Cairo', 'Tajawal', 'sans-serif'] }."
      ],
      infographicCard: {
        title: "قواعد تخصيص السمات theme.extend",
        points: [
          "استخدم extend دائماً للحفاظ على باقي فئات Tailwind الافتراضية.",
          "توليد تلقائي: تعريف لون يولد له فئات bg و text و border تلقائياً.",
          "ربط الخطوط: استيراد خطوط Google Fonts وتضمينها في fontFamily."
        ]
      }
    },
    {
      id: "9.2.g",
      title: "إدارة حالات Hover وFocus",
      englishTerm: "Interactive States (Hover, Focus, Active, Group & Peer)",
      description: "التحكم في التفاعل اللحظي لعناصر الواجهة عبر البادئات التفاعلية في Tailwind: hover: (عند مرور الفأرة)، focus: و focus-visible: (عند التركيز أو التنقل بلوحة المفاتيح)، active: (عند الضغط)، disabled: (عند تعطيل العنصر)، وبادئات المجموعات المتقدمة group-hover: (تغيير شكل الابن عند تحويم الفأرة فوق الأب) و peer-focus: (التفاعل بين العناصر الشقيقة).",
      realLifeAnalogy: "مثل أزرار كشك الخدمة الذاتية المضيئة؛ عندما تقرب يدك من الزر يتوهج بخفة (Hover)، وعندما تلمسه يتغير لونه بالكامل (Active)، وعندما تتركه يعود لطبيعته.",
      whyItMatters: "التغذية الراجعة البصرية (Micro-Interactions) هي الفارق بين التطبيق العادي والتطبيق فائق الاحترافية. استخدام بادئات Tailwind يلغي الحاجة لكتابة كود جافاسكريبت أو CSS خارجي لمراقبة حركة الفأرة.",
      syntax: "<button className=\"bg-indigo-600 hover:bg-indigo-500 active:scale-95 focus:ring-2 focus:ring-indigo-400 transition-all\">\n  زر تفاعلي\n</button>",
      simpleExample: `// زر متكامل يجمع كافة الحالات التفاعلية
import React from "react";

export function InteractiveStatesButton() {
  return (
    // hover للتفتيح، active للتصغير الخفيف، focus لحلقة التركيز
    <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-indigo-900/40">
      مرر الفأرة واضغط هنا 👆
    </button>
  );
}
`,
      advancedExample: `// بطاقة تفاعلية متقدمة توظف تقنية group-hover لتفعيل حركات الأبناء
import React from "react";

export function GroupHoverCardShowcase() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">الحالات التفاعلية (group-hover)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Micro-Interactions
        </span>
      </div>

      {/* الحاوية الأب تحمل كلاس group */}
      <div className="group p-5 bg-slate-950 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/80 rounded-2xl transition-all duration-300 cursor-pointer space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* الأيقونة تدور وتكبر عند تحويم الفأرة فوق الأب بالكامل */}
            <span className="p-2 bg-slate-900 group-hover:bg-indigo-600 text-indigo-400 group-hover:text-white rounded-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              🚀
            </span>
            <h5 className="font-bold text-xs text-white group-hover:text-indigo-300 transition-colors">
              نشر تطبيق React فائق السرعة
            </h5>
          </div>
          {/* السهم يتحرك لليسار عند التحويم */}
          <span className="text-slate-500 group-hover:text-indigo-400 transition-all group-hover:-translate-x-1">
            ←
          </span>
        </div>

        <p className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors">
          مرر الفأرة فوق أي مكان في هذه البطاقة لمشاهدة تفاعل الأيقونة والسهم والنصوص معاً بسلاسة.
        </p>
      </div>
    </div>
  );
}
`,
      outputExplanation: "تسمح فئة group على الحاوية الأب وفئة group-hover: على الأبناء بربط تفاعل عدة عناصر بحركة فأرة واحدة دون كتابة أي كود JavaScript إضافي.",
      commonMistakes: [
        {
          mistake: "نسيان إضافة transition-all أو transition-colors عند استخدام hover: مما يجعل التحول مفاجئاً وفجاً.",
          fix: "أضف دائماً transition-all duration-200 للحصول على حركة ناعمة وانسيابية.",
          reason: "بدون توجيه transition، يحدث التبديل فوراً بـ 0ms وهو ما يبدو حاداً للمستخدم."
        }
      ],
      bestPractices: [
        "استخدم active:scale-95 لإعطاء إحساس فيزيائي فوري بالضغط عند النقر على الأزرار.",
        "استخدم focus-visible: بدلاً من focus: العادي لمنع ظهور حلقات التركيز الزرقاء عند النقر بالفأرة وإظهارها فقط لمستخدمي لوحة المفاتيح."
      ],
      infographicCard: {
        title: "ترسانة الحالات التفاعلية في Tailwind",
        points: [
          "hover: & active:scale-95: لتغذية راجعة حركية ولمسية ممتعة.",
          "focus-visible:ring-2: لسهولة الوصول وحماية مستخدمي لوحة المفاتيح.",
          "group & group-hover: لتحريك الأبناء بتناغم عند لمس الحاوية الأب."
        ]
      }
    },
    {
      id: "9.2.h",
      title: "تفعيل الوضع الداكن",
      englishTerm: "Dark Mode Architecture with dark: Modifier",
      description: "بناء وتطبيق الوضع الداكن (Dark Mode) في Tailwind CSS عبر البادئة dark:. تدعم Tailwind طريقتين: الطريقة الأولى التلقائية بحسب تفضيلات نظام تشغيل المستخدم (media)، والطريقة الثانية الاحترافية المعتمدة على إضافة كلاس 'dark' لعنصر <html> الأعلى في الصفحة (class strategy)، مما يتيح للمستخدم التبديل اليدوي بين الوضع الفاتح والداكن وحفظ اختياره في localStorage.",
      realLifeAnalogy: "مثل إطفاء مصابيح الغرفة وتشغيل الإضاءة الهادئة ليلاً؛ أثاث الغرفة ومقاعدها تظل في مكانها، ولكن ألوان الجدران والإضاءة تتغير لحماية عينيك من السطوع المزعج.",
      whyItMatters: "الوضع الداكن لم يعد ميزة كمالية، بل هو معيار أساسي في كافة التطبيقات العالمية للحفاظ على راحة عيون المستخدمين وتوفير طاقة بطارية شاشات OLED.",
      syntax: "// في tailwind.config.js:\ndarkMode: 'class',\n\n// في JSX:\n<div className=\"bg-white text-slate-900 dark:bg-slate-950 dark:text-white\">\n  محتوى متكيف مع الوضعين\n</div>",
      simpleExample: `// استخدام بادئة dark: للتكيف مع المظهر الداكن
import React from "react";

export function DarkModeCardSnippet() {
  return (
    // خلفية بيضاء في الوضع العادي، وتتحول لـ slate-950 عند تفعيل كلاس dark في html
    <div className="p-4 bg-white text-slate-900 dark:bg-slate-950 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl transition-colors">
      <h3 className="text-sm font-bold">بطاقة متكيفة مع الوضعين</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        تتغير ألوانها تلقائياً مع زر التبديل.
      </p>
    </div>
  );
}
`,
      advancedExample: `// مبدل الوضع الداكن الكامل مع تطبيق كلاس dark على عنصر html الجذري
import React, { useState, useEffect } from "react";

export function LiveDarkModeController() {
  const [isDark, setIsDark] = useState(true);

  // تحديث كلاس dark على عنصر جذر المستند
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">هندسة الوضع الداكن (Dark Mode)</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded font-bold \${
          isDark ? "bg-indigo-950 text-indigo-300" : "bg-amber-950 text-amber-300"
        }\`}>
          {isDark ? "الوضع الداكن 🌙" : "الوضع المشرق ☀️"}
        </span>
      </div>

      {/* بطاقة محاكاة تتغير فئاتها حياً */}
      <div className={\`p-4 rounded-2xl border transition-all duration-300 \${
        isDark
          ? "bg-slate-950 border-slate-800 text-white"
          : "bg-slate-100 border-slate-200 text-slate-900 shadow-lg"
      }\`}>
        <div className="flex justify-between items-center mb-1">
          <h5 className="font-bold text-xs">معاينة استجابة البطاقة</h5>
          <span className="text-[10px] font-mono opacity-60">dark: modifier</span>
        </div>
        <p className={\`text-xs \${isDark ? "text-slate-400" : "text-slate-600"}\`}>
          الخلفيات والنصوص والإطارات تتغير في لمح البصر بفضل بادئة dark: في Tailwind.
        </p>
      </div>

      <button
        onClick={() => setIsDark((d) => !d)}
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/30 flex items-center justify-center gap-2"
      >
        <span>تبديل المظهر العام:</span>
        <span>{isDark ? "تحويل للوضع المشرق ☀️" : "تحويل للوضع الداكن 🌙"}</span>
      </button>
    </div>
  );
}
`,
      outputExplanation: "عند تفعيل darkMode: 'class' في الإعدادات، تراقب Tailwind وجود كلاس 'dark' في وسم <html>؛ وعند وجوده، تقوم بتفعيل كافة فئات dark:* المحددة في الصفحة تلقائياً.",
      commonMistakes: [
        {
          mistake: "نسيان تحديد darkMode: 'class' في tailwind.config.js والاعتماد على وضع media الافتراضي.",
          fix: "أضف darkMode: 'class' صراحة في ملف الإعدادات لتمكين التبديل اليدوي بالأزرار.",
          reason: "بدون خيار class، يتجاهل Tailwind أزرار التبديل ويعتمد فقط على إعدادات نظام التشغيل العامة."
        }
      ],
      bestPractices: [
        "احفظ تفضيل المستخدم دائماً في window.localStorage ليتذكره الموقع عند إعادة الفتح.",
        "اقرأ تفضيل نظام التشغيل window.matchMedia('(prefers-color-scheme: dark)') كقيمة أولية افتراضية."
      ],
      infographicCard: {
        title: "معمارية الوضع الداكن في Tailwind",
        points: [
          "إعداد إلزامي: darkMode: 'class' في ملف الضبط.",
          "كلاس الجذر: إضافة 'dark' لعنصر html في المتصفح.",
          "بادئة متناسقة: dark:bg-slate-950 dark:text-white في JSX."
        ]
      }
    },
    {
      id: "9.2.i",
      title: "تنظيم الأصناف القابلة لإعادة الاستخدام",
      englishTerm: "Reusable Classes & Component Extraction Best Practices",
      description: "الممارسات الهندسية لإعادة استخدام فئات Tailwind ومنع تكرار النصوص الطويلة في الواجهات الضخمة. بدلاً من اللجوء لكتابة ملفات CSS تقليدية، يتم استخدام المنهجيات المعيارية الثلاث: 1) استخراج مكونات React قابلة لإعادة الاستخدام (Component Extraction مثل <Button variant='primary' />)، 2) استخدام كائنات التنسيق المشتركة، و 3) الاستخدام المتزن لتوجيه @apply في الحالات الضرورية.",
      realLifeAnalogy: "مثل إعداد قالب الحلوى؛ بدلاً من تقطيع كل قطعة بسكين وقياس أبعادها يدوياً في كل مرة، تستخدم قالباً معدنياً واحداً يخرج لك 50 قطعة متطابقة في ثوانٍ.",
      whyItMatters: "نسخ ولصق 15 كلاس Tailwind لكل زر في التطبيق يجعل الكود غير قابل للصيانة ويصعب تعديل التصميم لاحقاً. استخراج المكون هو الحل الأمثل في فلسفة React و Tailwind.",
      syntax: "// استخراج مكون الزر المعياري:\nfunction Button({ variant = 'primary', className, children, ...props }) {\n  const base = 'px-4 py-2 rounded-xl text-xs font-bold transition-all';\n  return <button className={cn(base, variants[variant], className)} {...props}>{children}</button>;\n}",
      simpleExample: `// استخراج مكون زر معياري يجمع فئات Tailwind في مكان واحد
import React from "react";

export function ReusableButton({ children, isDestructive, ...props }) {
  // تجميع الفئات الأساسية المشتركة
  const baseClasses = "px-4 py-2 rounded-xl text-xs font-bold transition-all";
  const themeClasses = isDestructive
    ? "bg-rose-600 hover:bg-rose-500 text-white"
    : "bg-indigo-600 hover:bg-indigo-500 text-white";

  return (
    <button className={\`\${baseClasses} \${themeClasses}\`} {...props}>
      {children}
    </button>
  );
}
`,
      advancedExample: `// نظام مكونات الأزرار متعدد الأشكال (Variants System) باستخدام CVA / Custom Logic
import React, { useState } from "react";

const BUTTON_VARIANTS = {
  primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-900/30",
  secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
  danger: "bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-900/30",
  outline: "bg-transparent border border-indigo-500 text-indigo-300 hover:bg-indigo-950/40"
};

const BUTTON_SIZES = {
  sm: "px-2.5 py-1.5 text-[11px]",
  md: "px-4 py-2 text-xs",
  lg: "px-5 py-2.5 text-sm"
};

function StandardButton({ variant = "primary", size = "md", children, ...props }) {
  const base = "inline-flex items-center justify-center font-bold rounded-xl transition-all active:scale-95";
  return (
    <button className={\`\${base} \${BUTTON_VARIANTS[variant]} \${BUTTON_SIZES[size]}\`} {...props}>
      {children}
    </button>
  );
}

export function ReusableVariantsShowcase() {
  const [activeVariant, setActiveVariant] = useState("primary");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">استخراج المكونات المعيارية (Variants)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          DRY with Components
        </span>
      </div>

      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex justify-center gap-3">
        <StandardButton variant={activeVariant} size="md">
          زر معياري: {activeVariant}
        </StandardButton>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {Object.keys(BUTTON_VARIANTS).map((v) => (
          <button
            key={v}
            onClick={() => setActiveVariant(v)}
            className={\`py-1.5 rounded-lg text-[11px] font-mono border transition-all \${
              activeVariant === v ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-950 border-slate-800 text-slate-400"
            }\`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "باستخراج مكون <StandardButton variant='...' />، تتخلص من تكرار كلاسات Tailwind في كل ملف، وتتيح تعديل التصميم في مكان واحد مركزي يخدم كافة صفحات التطبيق.",
      commonMistakes: [
        {
          mistake: "نسخ ولصق نفس سلسلة كلاسات Tailwind الطويلة في 20 زراً مختلفاً في ملفات متعددة.",
          fix: "استخرج زراً واحداً Reusable Button واجعله يقبل خاصية variant أو size.",
          reason: "النسخ واللصق يضاعف الجهد عند الرغبة في تعديل انحناء الحواف أو درجات الألوان مستقبلاً."
        }
      ],
      bestPractices: [
        "اعتمد على مبدأ Component Extraction كحل أول لإعادة الاستخدام في React.",
        "استخدم مكتبات مثل class-variance-authority (cva) لبناء أنظمة مكونات احترافية متطابقة مع معايير الشركات الكبرى."
      ],
      infographicCard: {
        title: "هندسة إعادة الاستخدام في Tailwind",
        points: [
          "استخراج المكونات: الطريقة المثلى في React (<Button variant='...' />).",
          "جداول الأشكال (Variants Map): كائن يربط كل نمط بمجموعة كلاساته.",
          "تجنب النسخ واللصق: صيانة مركزية لكافة عناصر الواجهة."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q9-2-1",
      question: "ما هي الفلسفة الجوهرية لـ Utility-First في إطار عمل Tailwind CSS؟",
      options: [
        "كتابة كود CSS داخل ملفات HTML منفصلة معقدة",
        "استخدام فئات مساعدة ذرية صغيرة ومحددة مباشرة داخل كود JSX لبناء الواجهات دون مغادرة ملف المكون",
        "الاعتماد على الذكاء الاصطناعي لكتابة ألوان الواجهة عشوائياً",
        "تثبيت خادم Apache محلي في كل صفحة"
      ],
      correctAnswer: 1,
      explanation: "فلسفة Utility-First تعتمد على تزويدك بآلاف الفئات المساعدة الجاهزة (مثل p-4, flex, rounded) لتنسيق العناصر مباشرة داخل JSX دون الحاجة لابتكار أسماء كلاسات أو مغادرة الملف."
    },
    {
      id: "q9-2-2",
      question: "في نظام نقاط الكسر المتجاوبة (Responsive Breakpoints) في Tailwind، ماذا تعني الفئة المكتوبة بدون أي بادئة مثل p-4؟",
      options: [
        "أنها تنطبق على شاشات الحواسيب الضخمة 4K فقط",
        "أنها تنطبق على شاشات الهواتف المحمولة أولاً (Mobile-First) وتظل سارية ما لم تُعدل ببادئة أكبر مثل md: أو lg:",
        "أنها لن تعمل إلا إذا كان المتصفح باللغة الإنجليزية",
        "أنها كلاس ملغى ولا قيمة له"
      ],
      correctAnswer: 1,
      explanation: "تعتمد Tailwind فلسفة Mobile-First الصارمة؛ أي فئة بدون بادئة تُطبق على أصغر الشاشات (الجوال) تلقائياً، وتُستخدم البادئات (md:, lg:) لترقية التنسيق للشاشات الأكبر."
    },
    {
      id: "q9-2-3",
      question: "كيف نقوم بتفعيل التبديل اليدوي للوضع الداكن (Dark Mode) بواسطة الأزرار في Tailwind CSS؟",
      options: [
        "بحذف كافة الألوان من ملف CSS",
        "بضبط darkMode: 'class' في tailwind.config.js وإضافة كلاس 'dark' لعنصر <html> الجذري في المتصفح",
        "بإطفاء شاشة الحاسوب يدوياً",
        "بالاعتماد على دالة Math.random()"
      ],
      correctAnswer: 1,
      explanation: "ضبط darkMode: 'class' يخبر Tailwind بتفعيل فئات dark:* بمجرد وجود كلاس 'dark' في وسم <html>، مما يتيح لك التحكم به برمجياً بالأزرار وحفظه في localStorage."
    }
  ],
  exercise: {
    id: "ex9-2",
    title: "بناء بطاقة منتج متجاوبة وتفاعلية بالكامل باستخدام Tailwind CSS",
    description: "المطلوب بناء بطاقة منتج متجر إلكتروني متجاوبة: شبكة متجاوبة (عمود في الجوال، عمودان في التابلت، 3 في الحاسوب)، دعم حالات hover التفاعلية وتكبير الصورة بـ group-hover، دعم الوضع الداكن بـ dark:، وإضافة شارة تخفيض أنيقة.",
    starterCode: `import React from "react";

export function ResponsiveProductGrid() {
  const products = [
    { id: 1, name: "لوحة مفاتيح ميكانيكية", price: "450 ر.س", tag: "خصم 20%" },
    { id: 2, name: "فأرة ألعاب لاسلكية", price: "280 ر.س", tag: "جديد" },
    { id: 3, name: "سماعة محيطية عازلة", price: "620 ر.س", tag: "الأكثر مبيعاً" }
  ];

  return (
    <div className="p-4">
      {/* شبكة المنتجات المتجاوبة هنا */}
    </div>
  );
}`,
    hints: [
      "استخدم للشبكة: grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.",
      "استخدم للبطاقة: group p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl.",
      "أضف active:scale-95 لزر الشراء."
    ],
    solution: `import React from "react";

export function ResponsiveProductGrid() {
  const products = [
    { id: 1, name: "لوحة مفاتيح ميكانيكية RGB", price: "450 ر.س", tag: "خصم 20%", icon: "⌨️" },
    { id: 2, name: "فأرة ألعاب لاسلكية فائقة الخفة", price: "280 ر.س", tag: "جديد", icon: "🖱️" },
    { id: 3, name: "سماعة محيطية عازلة للضوضاء", price: "620 ر.س", tag: "الأكثر مبيعاً", icon: "🎧" }
  ];

  return (
    <div className="p-6 bg-slate-950 rounded-3xl border border-slate-800 max-w-4xl mx-auto space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">معرض المنتجات المتجاوب (Tailwind Grid)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          1 col (mobile) -> 2 cols (tablet) -> 3 cols (desktop)
        </span>
      </div>

      {/* شبكة متجاوبة Mobile-First */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group p-4 bg-slate-900 border border-slate-800 hover:border-indigo-500/60 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/40 flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                  {product.icon}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                  {product.tag}
                </span>
              </div>

              <h5 className="font-bold text-xs text-white group-hover:text-indigo-300 transition-colors">
                {product.name}
              </h5>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center">
              <span className="font-mono text-sm font-black text-emerald-400">
                {product.price}
              </span>
              <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-xs font-bold rounded-xl transition-all">
                شراء الآن 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان Tailwind CSS في React",
    description: "الدليل المرئي الشامل لـ Utility Classes والتجاوب والتخطيطات والوضع الداكن.",
    sections: [
      {
        heading: "1. مقاييس التنسيق (Design Scales)",
        bullets: [
          "المسافات: معادلة الضرب في 4 (p-4 = 16px, p-8 = 32px).",
          "الألوان: درجات متناسقة من 50 (الأفتح) إلى 950 (الأعمق).",
          "التخطيط: Flexbox للمحاذاة و CSS Grid بنظام 12 عموداً."
        ]
      },
      {
        heading: "2. التجاوب والحالات (Responsive & States)",
        bullets: [
          "Mobile-First: الجوال بدون بادئة -> md: للتابلت -> lg: للحواسيب.",
          "التفاعل: hover: للتفتيح، active:scale-95 للضغط، و focus-visible:ring للتنقل.",
          "المجموعات: group و group-hover: لتحريك الأبناء بتناغم."
        ]
      },
      {
        heading: "3. الميزات المتقدمة (Advanced Features)",
        bullets: [
          "الوضع الداكن: تفعيل darkMode: 'class' واستخدام بادئة dark:.",
          "إعادة الاستخدام: استخراج المكونات المعيارية Component Extraction."
        ]
      }
    ]
  }
};
