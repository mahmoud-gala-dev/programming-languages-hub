// src/data/sections/section9/topic1.js
// الموضوع 1: طرق كتابة CSS في React (CSS Paradigms, Modules, Inline Styles & clsx)

export const SECTION_9_TOPIC_1 = {
  id: "9.1",
  title: "طرق كتابة CSS في React",
  englishTerm: "CSS Methodologies & Styling Paradigms in React",
  description: "المقارنة المعمارية والعملية لكافة منهجيات تنسيق المكونات في React: ملفات CSS العامة، التنسيقات المضمنة (Inline Styles)، العزل النطاقي عبر CSS Modules ومنع تضارب الكلاسات، تنظيم ملفات الأنماط، إدارة الأصناف الشرطية باحترافية، واستخدام أدوات دمج الأصناف الذكية مثل clsx و tailwind-merge.",
  subtopics: [
    {
      id: "9.1.a",
      title: "استخدام ملفات CSS العادية",
      englishTerm: "Global CSS Files & Imports in React",
      description: "الطريقة التقليدية لكتابة التنسيقات في React عبر إنشاء ملفات .css عادية واستيرادها مباشرة داخل ملف المكون عبر import './styles.css'. عند استيراد ملف CSS بهذه الطريقة، يقوم مجمع الحزم (Vite أو Webpack) بحقن كافة التنسيقات في النطاق العام (Global Scope) للصفحة داخل وسم <style> في رأس الصفحة (Head).",
      realLifeAnalogy: "مثل إذاعة المدرسة الصباحية؛ عندما يتحدث المدير في الميكروفون العام، يسمعه كافة الطلاب في جميع الفصول الدراسية دون أي استثناء، ولا يمكن حصر الصوت في فصل دراسي واحد فقط.",
      whyItMatters: "تعد ملفات CSS العامة مثالية لإعداد القواعد الأساسية للموقع بالكامل (Global Reset)، وتحديد خطوط الصفحة، وضبط المتغيرات اللونية للجذر :root. لكن الاعتماد عليها في تنسيق المكونات الفردية يسبب كابوساً برمجياً بسبب تضارب الأسماء (Class Name Collisions).",
      syntax: "/* في ملف App.css */\n.btn-primary {\n  background-color: #4f46e5;\n  color: white;\n}\n\n// في ملف App.jsx:\nimport './App.css';\n<button className=\"btn-primary\">زر</button>",
      simpleExample: `// استيراد واستخدام ملف CSS تقليدي في React
import React from "react";
// استيراد ملف التنسيقات العامة
import "./ButtonStyles.css";

export function GlobalStyledButton() {
  return (
    // استخدام اسم الصنف المعرف في ملف CSS
    <button className="global-brand-btn">
      زر بتنسيق عام
    </button>
  );
}
`,
      advancedExample: `// محاكي خطر تضارب الأسماء العام (Global Class Collision Simulator)
import React from "react";

export function GlobalCollisionDemo() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تنسيقات CSS العامة (Global CSS)</h4>
        <span className="text-[10px] font-mono bg-rose-950 text-rose-300 px-2 py-0.5 rounded">
          Global Scope Danger
        </span>
      </div>

      <p className="text-xs text-slate-300">
        عند كتابة <code className="text-indigo-300 font-mono">.card</code> في ملفين مختلفين، سيقوم الأخير بحذف وتجاوز تنسيق الأول في كامل التطبيق!
      </p>

      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs">
        <div className="flex items-center gap-2 text-amber-400 font-bold">
          <span>⚠️</span>
          <span>ظاهرة التجاوز العرضي (Accidental Overrides)</span>
        </div>
        <p className="text-[11px] text-slate-400">
          إذا سمى مطور في فريقك زراً بـ <code className="text-indigo-400">.title</code> ومطور آخر سمى عنوان المقال بـ <code className="text-indigo-400">.title</code>، سيختلط تنسيق الزر بالعنوان!
        </p>
      </div>

      <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
        💡 <strong className="text-white">الاستخدام السليم:</strong> احصر ملفات CSS العامة لضبط المتغيرات (:root) وقواعد Reset وإعداد الخطوط فقط.
      </div>
    </div>
  );
}
`,
      outputExplanation: "تنسيقات ملفات CSS العادية لا تملك حدوداً عازلة؛ بمجرد استيراد الملف في أي مكون، تصبح كلاساته متاحة ونافذة على كافة مكونات التطبيق بلا استثناء.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن استيراد import './Card.css' داخل Card.jsx يحصر التنسيقات في هذا المكون فقط.",
          fix: "استخدم CSS Modules عبر تسمية الملف Card.module.css للحصول على العزل النطاقي الحقيقي.",
          reason: "جملة import لملف CSS عادي في بيئة Webpack/Vite تحقن الكود في الصفحة العامة ولا تملك نطاقاً محلياً."
        }
      ],
      bestPractices: [
        "استخدم ملفات CSS العادية حصراً للأنماط العامة مثل index.css أو typography.css.",
        "تجنب استخدام أسماء أصناف عامة جداً مثل .btn أو .container أو .card في الملفات العامة."
      ],
      infographicCard: {
        title: "خصائص CSS العامة في React",
        points: [
          "نطاق عام 100%: تؤثر على كامل شجرة DOM.",
          "خطر تضارب الأسماء: سهولة الكتابة فوق أصناف المطورين الآخرين.",
          "المجال المثالي: التهيئات الأولية (CSS Reset) والمتغيرات العامة :root."
        ]
      }
    },
    {
      id: "9.1.b",
      title: "استخدام Inline Styles",
      englishTerm: "Inline Styles & Style Objects in JSX",
      description: "تطبيق التنسيقات المباشرة على عناصر JSX عبر خاصية style={{ ... }}. في React، لا يُكتب التنسيق المضمن كنص عادي كما في HTML (style='color: red')، بل يُمرر ككائن JavaScript نقي تُكتب أسماء خصائصه بصيغة الحروف المحدبة (camelCase مثل backgroundColor و fontSize)، وتُحدد قيمه كنصوص أو أرقام.",
      realLifeAnalogy: "مثل كتابة بطاقة لاصقة مخصصة وتثبيتها مباشرة على صندوق معين؛ التوجيه المكتوب على الصندوق ينطبق على هذا الصندوق حصراً ولا علاقة له ببقية الصناديق في المستودع.",
      whyItMatters: "التنسيقات المضمنة مفيدة جداً عند التعامل مع 'القيم الديناميكية المحسوبة في وقت التشغيل' (Runtime Values)، مثل حساب نسبة شريط التقدم width: `${percent}%`، أو ضبط إحداثيات مؤشر الفأرة، أو حساب ألوان مخصصة يختارها المستخدم عبر لوحة الألوان.",
      syntax: "<div style={{\n  backgroundColor: '#1e293b',\n  fontSize: '14px',\n  padding: 16 // يتحول تلقائياً إلى 16px\n}} />",
      simpleExample: `// تطبيق التنسيقات المضمنة عبر كائن JavaScript
import React from "react";

export function InlineStyleSnippet() {
  // كائن التنسيق مكتوب بنمط camelCase
  const cardStyle = {
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid #334155"
  };

  return (
    // تمرير الكائن لخاصية style
    <div style={cardStyle}>
      <h3 style={{ fontSize: "18px", color: "#38bdf8" }}>بطاقة مضمنة</h3>
      <p style={{ marginTop: 8 }}>تنسيق ديناميكي مباشر ومحلي 100%.</p>
    </div>
  );
}
`,
      advancedExample: `// شريط تقدم ديناميكي تفاعلي يتم التحكم بأبعاده عبر Inline Styles
import React, { useState } from "react";

export function DynamicProgressCard() {
  const [progress, setProgress] = useState(45);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">التنسيقات المضمنة الديناميكية (Inline Styles)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Dynamic Width
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-slate-300">نسبة اكتمال رفع الملف:</span>
          <span className="font-mono text-emerald-400 font-bold">{progress}%</span>
        </div>

        {/* حاوية شريط التقدم */}
        <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
          {/* استخدام style المضمن لتمرير العرض المحسوب ديناميكياً بدقة */}
          <div
            style={{
              width: \`\${progress}%\`,
              backgroundColor: progress > 80 ? "#10b981" : progress > 40 ? "#6366f1" : "#f59e0b",
              height: "100%",
              transition: "width 0.3s ease, background-color 0.3s ease"
            }}
          />
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          onClick={() => setProgress((p) => Math.max(0, p - 15))}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl transition-all"
        >
          - تقليص (-15%)
        </button>
        <button
          onClick={() => setProgress((p) => Math.min(100, p + 15))}
          className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs rounded-xl font-bold transition-all"
        >
          + زيادة (+15%)
        </button>
      </div>
    </div>
  );
}
`,
      outputExplanation: "تسمح Inline Styles بحساب قيم مثل width: `${progress}%` في كل رندر ديناميكياً بناءً على الحالة الحالية، وهو ما يصعب فعله بالاعتماد فقط على ملفات CSS الثابتة.",
      commonMistakes: [
        {
          mistake: "كتابة التنسيقات بنمط الشرطة مثل style={{ font-size: '14px' }}.",
          fix: "استخدم نمط الحروف المحدبة دائماً: style={{ fontSize: '14px' }}.",
          reason: "في كائنات جافاسكريبت، تعتبر الشرطة (-) معامل طرح حسابي ما لم توضع بين علامات اقتباس."
        },
        {
          mistake: "محاولة كتابة حالات :hover أو Media Queries داخل كائن style المضمن.",
          fix: "استخدم CSS Modules أو Tailwind CSS لدعم الحالات التفاعلية والاستجابة للشاشات.",
          reason: "خاصية style المضمنة في متصفحات الويب لا تدعم الأصناف الزائفة (:hover, :focus) ولا استعلامات الوسائط (@media)."
        }
      ],
      bestPractices: [
        "اقتصر في استخدام Inline Styles على القيم المحسوبة برمجياً المتغيرة (Dynamic Runtime Values).",
        "الأرقام المجردة بدون وحدة (مثل padding: 16) تحولها React تلقائياً إلى بكسل '16px'."
      ],
      infographicCard: {
        title: "حدود واستخدامات Inline Styles",
        points: [
          "تكتب ككائن جافاسكريبت بنمط camelCase (مثل backgroundColor).",
          "الأفضل للقيم الحسابية المتغيرة مثل الأبعاد ومؤشرات الفأرة.",
          "لا تدعم :hover ولا :focus ولا استعلامات @media إطلاقاً."
        ]
      }
    },
    {
      id: "9.1.c",
      title: "استخدام CSS Modules",
      englishTerm: "Scoped Styling with CSS Modules",
      description: "المعيار الهندسي الأكثر موثوقية لعزل التنسيقات النطاقية (Scoped CSS) دون الحاجة لمكتبات إضافية. يتم إنشاء ملف يحمل لاحقة .module.css (مثل Button.module.css)، وعند استيراده في React، يقوم مجمع الحزم بتوليد أسماء كلاسات فريدة ومشفرة في وقت البناء (مثل Button_primary__a1b2c)، مما يجعل تصادم وتضارب الكلاسات بين المكونات مستحيلاً بنسبة 100%.",
      realLifeAnalogy: "مثل رقم الشقة داخل المجمع السكني الكبير؛ يوجد شقة رقم 101 في العمارة A وشقة رقم 101 في العمارة B. العنوان الفريد الكامل 'A-101' يمنع ساعي البريد من تسليم الطرد للشخص الخطأ.",
      whyItMatters: "تتيح لك CSS Modules كتابة أسماء كلاسات بديهية وبسيطة مثل .title أو .card أو .wrapper في كل ملف، دون الخوف إطلاقاً من أن يؤثر ملف على ملف آخر في المشروع، مع دعم كامل للـ Media Queries و :hover.",
      syntax: "/* ملف Button.module.css */\n.btn {\n  padding: 10px 20px;\n}\n\n// في Button.jsx:\nimport styles from './Button.module.css';\n<button className={styles.btn}>زر معزول</button>",
      simpleExample: `// استخدام CSS Modules لعزل التنسيق النطاقي
import React from "react";
// استيراد كائن التنسيقات المعزولة
import styles from "./Card.module.css";

export function ScopedCard() {
  return (
    // ربط الكلاس عبر خاصية styles المشفرة
    <div className={styles.cardContainer}>
      <h2 className={styles.cardHeading}>عنوان آمن من التصادم</h2>
    </div>
  );
}
`,
      advancedExample: `// محاكي التشفير التلقائي لأسماء الكلاسات في CSS Modules
import React from "react";

export function CSSModulesEncoderDemo() {
  const simulatedClasses = [
    { original: ".button", compiled: "Header_button__x89Qz", scope: "Header Component" },
    { original: ".button", compiled: "Sidebar_button__kL21m", scope: "Sidebar Component" },
    { original: ".title", compiled: "Article_title__p09Az", scope: "Article Component" }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">آلية عمل CSS Modules المشفرة</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          Zero Collisions
        </span>
      </div>

      <p className="text-xs text-slate-300">
        كيف يحول مجمع الحزم الكلاسات البسيطة إلى هويات فريدة مستحيلة التكرار:
      </p>

      <div className="space-y-2">
        {simulatedClasses.map((item, idx) => (
          <div key={idx} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-300 font-mono">{item.original}</span>
              <span className="text-[10px] text-slate-500">{item.scope}</span>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[10px] text-indigo-400 font-mono bg-indigo-950/80 px-2 py-0.5 rounded">
                HTML Class: {item.compiled}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-indigo-500/30 text-xs text-indigo-300">
        ✓ يمكنك استخدام نفس اسم الكلاس (.title) في 100 مكون مختلف بأمان مطلق!
      </div>
    </div>
  );
}
`,
      outputExplanation: "يقوم مجمع الحزم بتصدير كائن جافاسكريبت يحتوي على أسماء الكلاسات كمفاتيح، وقيمها هي الأسماء الفريدة المشفرة التي تم حقنها في الـ DOM، مما يمنحك عزلاً تاماً.",
      commonMistakes: [
        {
          mistake: "نسيان كلمة .module في اسم الملف وتسميته styles.css بدلاً من styles.module.css.",
          fix: "تأكد من وجود .module.css في نهاية اسم الملف دائماً.",
          reason: "يتعرف مجمع الحزم (Vite / Webpack) على ملفات الموديول فقط من خلال الامتداد .module.css."
        },
        {
          mistake: "كتابة أسماء كلاسات تحتوي على شرطات واستدعاؤها بالنقطة: styles.btn-primary (خطأ في بناء الجملة).",
          fix: "استخدم إما camelCase في الكلاس (styles.btnPrimary) أو استخدم الأقواس المربعة: styles['btn-primary'].",
          reason: "الشرطة (-) غير مسموحة في أسماء المتغيرات في جافاسكريبت."
        }
      ],
      bestPractices: [
        "اكتب أسماء الكلاسات بنمط camelCase داخل ملفات CSS لتتمكن من استدعائها بـ styles.myClass بنظافة.",
        "استخدم خاصية :global(.someClass) داخل ملف الموديول إذا كنت بحاجة لتعريف صنف عام استثنائي."
      ],
      infographicCard: {
        title: "معمارية CSS Modules",
        points: [
          "امتداد إلزامي: [Name].module.css لتفعيل العزل.",
          "تشفير تلقائي: توليد أسماء عشوائية فريدة لمنع التضارب.",
          "كتابة كلاسات بديهية (.container) في كل ملف بأمان مطلق."
        ]
      }
    },
    {
      id: "9.1.d",
      title: "تنظيم ملفات الأنماط",
      englishTerm: "Style File Organization & Architecture Patterns",
      description: "المعايير الهندسية لتنظيم وهيكلة ملفات التنسيق في مشاريع React الكبيرة. يشمل ذلك: نمط المكون المستقل (Colocation Pattern) حيث يوضع ملف Button.module.css بجانب Button.jsx في نفس المجلد، فصل المتغيرات المشتركة في مجلد styles/variables، وإنشاء ملفات رئيسية للطباعة والألوان والرموز.",
      realLifeAnalogy: "مثل تنظيم أدوات الجراح في غرفة العمليات؛ كل مشرط ومقص خاص بعملية القلب يوضع في حقيبة معقمة خاصة بجانب طاولة القلب، ولا تُخلط مع أدوات جراحة العظام في المستودع العام.",
      whyItMatters: "في المشاريع الكبيرة التي تضم 200 مكون، وضع كافة ملفات CSS في مجلد واحد ضخم يجعل البحث عن التنسيق وحذفه عند حذف المكون مستحيلاً. تنظيم الملفات بجوار مكوناتها يسهل الصيانة والحذف الآمن.",
      syntax: "src/\n├── components/\n│   ├── Button/\n│   │   ├── Button.jsx\n│   │   ├── Button.module.css\n│   │   └── index.js\n└── styles/\n    ├── variables.css\n    └── globals.css",
      simpleExample: `// هيكل المكون المستقل بذاته (Colocation Pattern)
// ملف: src/components/Badge/Badge.jsx
import React from "react";
// استيراد التنسيق من نفس مجلد المكون مباشرة
import styles from "./Badge.module.css";

export function Badge({ text, variant = "info" }) {
  return (
    <span className={\`\${styles.badge} \${styles[variant]}\`}>
      {text}
    </span>
  );
}
`,
      advancedExample: `// مستعرض شجرة المجلدات الهندسية المعيارية لتنظيم التنسيقات
import React from "react";

export function StyleArchitectureViewer() {
  const treeNodes = [
    { type: "folder", name: "src/styles/", desc: "الأنماط العامة، المتغيرات، وإعدادات الخطوط" },
    { type: "file", name: "├── globals.css", desc: "إعدادات CSS Reset والمتغيرات العامة :root" },
    { type: "file", name: "├── theme.css", desc: "لوحات الألوان، الدرجات، ونقاط كسر الشاشات" },
    { type: "folder", name: "src/components/Navbar/", desc: "مكون شريط التنقل المعزول تماماً" },
    { type: "file", name: "├── Navbar.jsx", desc: "كود المكون المنطقي وJSX" },
    { type: "file", name: "├── Navbar.module.css", desc: "التنسيقات المحصورة لشريط التنقل فقط" },
    { type: "file", name: "└── index.js", desc: "تصدير نظيف للمكون للخارج" }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تنظيم وهيكلة التنسيقات (Colocation)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Enterprise Structure
        </span>
      </div>

      <div className="space-y-1.5 font-mono text-xs">
        {treeNodes.map((node, i) => (
          <div
            key={i}
            className={\`p-2 rounded-xl flex justify-between items-center \${
              node.type === "folder" ? "bg-slate-950 font-bold text-indigo-300" : "text-slate-400 pl-4"
            }\`}
          >
            <span>{node.name}</span>
            <span className="text-[10px] font-sans text-slate-500">{node.desc}</span>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
        📌 <strong className="text-slate-300">قاعدة ذهبية:</strong> ضع ملف التنسيق دائماً بجوار ملف المكون؛ إذا حذفت مجلد المكون مستقبلاً، يُحذف تنسيقه معه تلقائياً دون ترك كود ميت في المشروع.
      </div>
    </div>
  );
}
`,
      outputExplanation: "من خلال مبدأ المجاورة (Colocation)، يصبح كل مكون وحدة قائمة بذاتها تحتوي على منطقها وتنسيقها واختباراتها، مما يرفع كفاءة صيانة وتطوير المشاريع الكبيرة.",
      commonMistakes: [
        {
          mistake: "إنشاء مجلد خارجي يجمع كافة ملفات CSS الخاصة بجميع الصفحات في مكان واحد بعيداً عن المكونات.",
          fix: "ضع ملف التنسيق في نفس مجلد المكون المعني به.",
          reason: "الفصل الجغرافي بين كود JSX وتنسيقه يضاعف الجهد عند التعديل ويترك آلاف أسطر CSS الميتة بعد حذف المكونات."
        }
      ],
      bestPractices: [
        "طبق مبدأ Colocation بوضع [Component].module.css بجانب [Component].jsx دائماً.",
        "أنشئ ملفاً موحداً لمتغيرات الألوان والتصميم (Design Tokens) لضمان اتساق الواجهات."
      ],
      infographicCard: {
        title: "دستور تنظيم ملفات التنسيق",
        points: [
          "Colocation: المكون وتنسيقه في نفس المجلد جنباً إلى جنب.",
          "حذف آمن: حذف المكون يزيل كود التنسيق الخاص به تلقائياً.",
          "Design Tokens: ملف مركزي لتعريف الألوان والمسافات العامة."
        ]
      }
    },
    {
      id: "9.1.e",
      title: "إدارة الأصناف الشرطية",
      englishTerm: "Conditional Class Names Management",
      description: "تقنيات تطبيق الكلاسات التنسيقية بناءً على حالة المكون أو الخصائص (Props). في التطبيقات التفاعلية، يتغير شكل العنصر وفق حالته: نشط (Active)، معطل (Disabled)، خطأ (Error)، أو نجاح (Success). يتم ذلك في JSX باستخدام القوالب النصية (Template Literals)، المعامل الثلاثي (Ternary Operator)، أو المعامل المنطقي &&.",
      realLifeAnalogy: "مثل إشارات المرور الضوئية؛ يتغير لون المصباح المضاء بين الأحمر والأصفر والأخضر بناءً على حالة توقيت التقاطع، فلا تضاء كافة الألوان في نفس الوقت.",
      whyItMatters: "واجهات المستخدم الحديثة كلها واجهات شرطية وحركية. كتابة التنسيقات الشرطية بصورة صحيحة يمنع ظهور قيم مشوهة مثل 'btn undefined' أو 'card false' في خاصية class داخل عناصر HTML.",
      syntax: "<button className={`btn ${isActive ? 'btn-active' : ''} ${isDisabled ? 'btn-disabled' : ''}`} />",
      simpleExample: `// تطبيق الأصناف الشرطية بالمعامل الثلاثي والقوالب النصية
import React, { useState } from "react";

export function ConditionalClassDemo() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {/* دمج كلاس أساسي مع كلاس شرطي بناءً على متغير الحالة */}
      <button
        onClick={() => setIsActive(!isActive)}
        className={\`base-btn \${isActive ? "active-btn" : "inactive-btn"}\`}
      >
        الحالة: {isActive ? "مفعل 🟢" : "معطل 🔴"}
      </button>
    </div>
  );
}
`,
      advancedExample: `// محاكي تبديل بطاقات الحالات التفاعلية بالأصناف الشرطية
import React, { useState } from "react";

export function StatusCardSwitcher() {
  const [status, setStatus] = useState("success"); // 'success' | 'warning' | 'error'

  const statusConfigs = {
    success: { label: "العملية تمت بنجاح", border: "border-emerald-500", bg: "bg-emerald-950/40", text: "text-emerald-400" },
    warning: { label: "تنبيه: اقتراب انتهاء الاشتراك", border: "border-amber-500", bg: "bg-amber-950/40", text: "text-amber-400" },
    error: { label: "فشل الاتصال بقاعدة البيانات", border: "border-rose-500", bg: "bg-rose-950/40", text: "text-rose-400" }
  };

  const current = statusConfigs[status];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">الأصناف الشرطية (Conditional Classes)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Ternary / Config Map
        </span>
      </div>

      {/* بطاقة يتغير مظهرها كلياً بناءً على الأصناف الشرطية */}
      <div className={\`p-4 rounded-2xl border transition-all duration-300 \${current.border} \${current.bg} \${current.text}\`}>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xs">{current.label}</span>
          <span className="text-xs uppercase font-mono font-bold">[{status}]</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2">
        {["success", "warning", "error"].map((st) => (
          <button
            key={st}
            onClick={() => setStatus(st)}
            className={\`p-2 rounded-xl text-xs font-bold border transition-all \${
              status === st
                ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-950"
                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
            }\`}
          >
            {st}
          </button>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "من خلال دمج القوالب النصية ${current.border} ${current.bg}، تتغير فئات CSS المطبقة في الـ DOM لحظياً وبسلاسة مع كل تغيير في متغير الحالة.",
      commonMistakes: [
        {
          mistake: "استخدام المعامل المنطقي && هكذا: className={`btn ${isActive && 'active'}`} مما ينتج نص 'btn false' عندما تكون الحالة غير مفعلة.",
          fix: "استخدم المعامل الثلاثي مع نص فارغ: ${isActive ? 'active' : ''}، أو استخدم مكتبة clsx.",
          reason: "في جافاسكريبت، تقييم false && 'active' ينتج القيمة false، والتي تتحول لنص 'false' داخل القالب النصي."
        }
      ],
      bestPractices: [
        "استخدم كائن الإعدادات (Config Map) بدلاً من كتابة عشرات الشروط المتداخلة if/else.",
        "اعتمد على مكتبة clsx للتخلص التلقائي من القيم الخالية والمسافات الزائدة."
      ],
      infographicCard: {
        title: "قواعد الأصناف الشرطية",
        points: [
          "تجنب ${cond && 'class'} لأنها تولد نص 'false' قبيح في الـ HTML.",
          "استخدم المعامل الثلاثي الصريح: ${cond ? 'class' : ''}.",
          "استخدم كائنات الخرائط (Config Maps) للحالات المتعددة."
        ]
      }
    },
    {
      id: "9.1.f",
      title: "استخدام مكتبة clsx",
      englishTerm: "Dynamic Class Manipulation with clsx & tailwind-merge",
      description: "المكتبة المعيارية الخفيفة clsx (وحليفتها tailwind-merge في دالة cn الشهيرة). تتيح لك دمج الأصناف الشرطية بسهولة متناهية باستخدام الكائنات والمصفوفات، مع التخلص التلقائي والذكي من القيم الزائفة (Falsy Values: false, null, undefined, 0). تقوم tailwind-merge أيضاً بحل تضاربات كلاسات Tailwind المتعارضة تلقائياً.",
      realLifeAnalogy: "مثل مصفاة الحبوب الذكية في المطحنة؛ تضع فيها كل الحبوب، فتقوم المصفاة بفرز الحبوب السليمة، وطرد الشوائب والحصى والأوراق الجافة تلقائياً، لتخرج لك طحيناً نقياً ومرتباً.",
      whyItMatters: "كتابة القوالب النصية الطويلة مع الشروط ${a ? 'x' : ''} ${b ? 'y' : ''} تصبح فوضوية وغير مقروءة وسريعة الخطأ. مكتبة clsx ودالة cn الشهيرة أصبحت السطر الأول في أي مشروع React و shadcn/ui حديث.",
      syntax: "import clsx from 'clsx';\nimport { twMerge } from 'tailwind-merge';\n\nexport function cn(...inputs) {\n  return twMerge(clsx(inputs));\n}",
      simpleExample: `// استخدام دالة clsx لدمج الأصناف بنقاء
import React from "react";
import clsx from "clsx";

export function ClsxButton({ isPrimary, isLarge, isDisabled }) {
  // clsx تتجاهل القيم الخالية والـ false تلقائياً!
  const btnClass = clsx("base-button", {
    "btn-primary": isPrimary,
    "btn-large": isLarge,
    "btn-disabled": isDisabled
  });

  return <button className={btnClass}>زر ديناميكي نظيف</button>;
}
`,
      advancedExample: `// بناء وتجربة دالة cn() القياسية المعتمدة في shadcn/ui و Tailwind
import React, { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// الدالة المعيارية العالمية الأكثر استخداماً في مجتمع React الحديث
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function CnUtilityDemonstrator() {
  const [variant, setVariant] = useState("primary");
  const [isOutline, setIsOutline] = useState(false);

  // دمج الأصناف بسلاسة مطلقة وحل التضاربات تلقائياً
  const buttonClasses = cn(
    "w-full py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2",
    variant === "primary" && "bg-indigo-600 text-white hover:bg-indigo-500",
    variant === "secondary" && "bg-slate-800 text-slate-200 hover:bg-slate-700",
    variant === "danger" && "bg-rose-600 text-white hover:bg-rose-500",
    isOutline && "bg-transparent border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-950/30"
  );

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">سحر دالة cn() = clsx + twMerge</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          Tailwind Helper
        </span>
      </div>

      <button className={buttonClasses}>
        زر معاينة التنسيق الديناميكي ⚡
      </button>

      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-[11px] space-y-1 font-mono text-slate-400">
        <span className="text-slate-300 font-sans font-bold block">الكلاسات الناتجة الصافية:</span>
        <p className="text-indigo-300 break-all">{buttonClasses}</p>
      </div>

      <div className="flex gap-2">
        {["primary", "secondary", "danger"].map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            className={\`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all border \${
              variant === v ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-950 border-slate-800 text-slate-400"
            }\`}
          >
            {v}
          </button>
        ))}
      </div>

      <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-1">
        <input
          type="checkbox"
          checked={isOutline}
          onChange={(e) => setIsOutline(e.target.checked)}
          className="w-4 h-4 accent-indigo-500 rounded"
        />
        <span>تفعيل وضع الإطار الشفاف (Outline Mode)</span>
      </label>
    </div>
  );
}
`,
      outputExplanation: "دالة cn() تدمج مزايا clsx (لتنظيف القيم الخالية والشرطية) مع tailwind-merge (لحل التضاربات، مثل إزالة bg-indigo-600 تلقائياً عندما يتداخل مع bg-transparent).",
      commonMistakes: [
        {
          mistake: "استخدام clsx وحدها مع Tailwind دون tailwind-merge عند تمرير كلاسات خارجية كـ Props.",
          fix: "ادمج دائماً twMerge(clsx(inputs)) لحل تضارب فئات Tailwind مثل p-4 ضد p-2.",
          reason: "بدون twMerge، إذا مرر المستخدم p-4 والمكون يحمل p-2 افتراضياً، فستبقى الخاصيتان في HTML وتعتمد النتيجة على ترتيب CSS العشوائي في الملف النهائي."
        }
      ],
      bestPractices: [
        "أنشئ ملفاً دائماً باسم src/lib/utils.js وضع فيه دالة cn() المعيارية.",
        "استخدم دالة cn() في كافة مكونات الواجهة لدعم استقبال خاصية className مخصصة من المستخدم الخارجي."
      ],
      infographicCard: {
        title: "معادلة القوة لدالة cn()",
        points: [
          "clsx: تفرز الشروط وتنظف القيم الزائفة (null, undefined, false).",
          "tailwind-merge: تحل تضاربات فئات Tailwind المكررة بحكمة.",
          "النتيجة: كود فائق النقاء والمرونة لكافة مكونات المشروع."
        ]
      }
    },
    {
      id: "9.1.g",
      title: "المقارنة بين طرق التنسيق المختلفة",
      englishTerm: "Comprehensive Styling Solutions Comparison Matrix",
      description: "المقارنة الهندسية الشاملة بين منهجيات التنسيق الأربعة في منظومة React: 1) CSS العادي، 2) Inline Styles، 3) CSS Modules، و 4) Utility-First (Tailwind CSS) و CSS-in-JS. يغطي هذا المحور معايير الأداء (Performance)، سرعة التطوير (DX)، حجم الحزمة (Bundle Size)، ودعم سهولة الصيانة في الفرق البرمجية الكبيرة.",
      realLifeAnalogy: "مثل اختيار خامة بناء البيت؛ الخشب سريع وسهل، الحجر قوي وثابت، والخرسانة المسلحة تتحمل ناطحات السحاب الضخمة. معرفة خصائص كل خامة تضمن بناء بيت آمن واقتصادي.",
      whyItMatters: "اختيار طريقة التنسيق الخاطئة في بداية المشروع قد يكلف الفريق مئات الساعات لاحقاً أو يسبب انتفاخاً هائلاً في حجم ملفات JavaScript. معرفة المزايا والعيوب لكل تقنية يرشدك للقرار الهندسي الأمثل.",
      syntax: "// مصفوفة القرار:\n// المشاريع الحديثة والسريعة: Tailwind CSS\n// التصاميم الفريدة ذات CSS مخصص معقد: CSS Modules\n// القيم الحسابية في الرندر: Inline Styles\n// الثوابت العامة: Global CSS",
      simpleExample: `// استعراض سريع لشكل الكود في المنهجيات الثلاث
// 1. Inline Style:
<div style={{ color: "blue", margin: 8 }} />

// 2. CSS Modules:
<div className={styles.container} />

// 3. Tailwind CSS:
<div className="text-blue-500 m-2" />
`,
      advancedExample: `// بطاقة مصفوفة المقارنة الهندسية التفاعلية لكافة حلول التنسيق
import React from "react";

export function StylingMatrixCard() {
  const approaches = [
    {
      name: "Tailwind CSS",
      rating: "الخيار الأول عالمياً ⭐",
      pros: "سرعة تطوير هائلة، حجم CSS نهائي صغير جداً (Purged)، لا حاجة للتنقل بين الملفات، ونظام متسق للألوان والمسافات.",
      cons: "قد تبدو أسماء الكلاسات في JSX طويلة ومزدحمة في البداية."
    },
    {
      name: "CSS Modules",
      rating: "المعيار الآمن لعزل CSS 🛡️",
      pros: "عزل نطاقي 100%، دعم كافة ميزات CSS الحديثة و Keyframes، وحرية كاملة في كتابة CSS تقليدي.",
      cons: "الحاجة لإنشاء ملف .module.css منفصل لكل مكون وربط كل كلاس يدوياً."
    },
    {
      name: "Inline Styles",
      rating: "للحسابات الديناميكية فقط ⚡",
      pros: "ممتازة لقيم وقت التشغيل اللحظية (مثل العرض المحسوب والارتفاع وإحداثيات الفأرة).",
      cons: "لا تدعم :hover أو :focus أو @media وتزيد من حجم كود JSX."
    },
    {
      name: "Global CSS",
      rating: "للثوابت العامة فقط 🌐",
      pros: "ممتازة لـ CSS Reset وإعداد الخطوط والمتغيرات العامة في :root.",
      cons: "تضارب أسماء الكلاسات وانهيار التنسيق في المشاريع الكبيرة."
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مصفوفة المقارنة الهندسية لحلول التنسيق</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Decision Guide
        </span>
      </div>

      <div className="space-y-3">
        {approaches.map((app, i) => (
          <div key={i} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="font-bold text-emerald-400">{app.name}</span>
              <span className="text-[10px] text-indigo-300 font-mono bg-slate-900 px-2 py-0.5 rounded">
                {app.rating}
              </span>
            </div>
            <p className="text-[11px] text-slate-300">✓ <strong className="text-slate-400">المزايا:</strong> {app.pros}</p>
            <p className="text-[11px] text-rose-300/80">⚠ <strong className="text-slate-400">العيوب:</strong> {app.cons}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "تظهر هذه المصفوفة بوضوح سبب هيمنة Tailwind CSS و CSS Modules على صناعة الواجهات اليوم، مع الاحتفاظ بـ Inline Styles للقيم الديناميكية المحسوبة.",
      commonMistakes: [
        {
          mistake: "اختيار مكتبات CSS-in-JS القديمة مثل Styled-Components مع React 19 أو Server Components.",
          fix: "اعتمد على Tailwind CSS أو CSS Modules في التطبيقات الحديثة.",
          reason: "مكتبات CSS-in-JS المعتمدة على وقت التشغيل (Runtime Injection) غير متوافقة مع React Server Components وتسبب بطئاً في الرندر."
        }
      ],
      bestPractices: [
        "اجعل Tailwind CSS خيارك القياسي الأول للسرعة والاتساق وخفة الحزمة النهائية.",
        "استخدم CSS Modules إذا كنت تبني مكونات مكتبية مخصصة بحركات معقدة جداً أو تعتمد على مصممين يكتبون CSS خام."
      ],
      infographicCard: {
        title: "بوصلة اختيار تقنية التنسيق",
        points: [
          "تطبيقات الويب الحديثة والسرعة: Tailwind CSS.",
          "المكونات المعزولة بـ CSS خام: CSS Modules.",
          "القيم الرياضية الحسابية: Inline Styles.",
          "قواعد الخطوط و :root: Global CSS."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q9-1-1",
      question: "ما هي الميزة الجوهرية لاستخدام CSS Modules مقارنة بملفات CSS العادية في React؟",
      options: [
        "أنها تحول ملفات CSS إلى لغة بايثون تلقائياً",
        "أنها تعزل التنسيقات نطاقياً (Scoped) بتوليد أسماء كلاسات فريدة مشفرة تمنع تضارب الأسماء بين المكونات",
        "أنها تجعل الموقع يفتح بدون إنترنت",
        "أنها تلغي الحاجة لكتابة وسوم HTML"
      ],
      correctAnswer: 1,
      explanation: "تقوم CSS Modules بتشفير أسماء الكلاسات أثناء البناء إلى أسماء فريدة مثل Component_class__hash مما يمنع أي تداخل بين مكونين يستخدمان نفس اسم الكلاس."
    },
    {
      id: "q9-1-2",
      question: "ما هي المشكلة الناتجة عن كتابة className={`btn ${isActive && 'btn-active'}`} عندما تكون isActive خاطئة (false)؟",
      options: [
        "انهيار المتصفح وتوقف التطبيق عن العمل فوراً",
        "توليد نص غير مرغوب فيه داخل خاصية class في HTML مثل 'btn false'",
        "تحول لون الزر إلى اللون الأحمر تلقائياً",
        "حذف الزر نهائياً من شجرة العناصر"
      ],
      correctAnswer: 1,
      explanation: "في جافاسكريبت، تقييم false && 'btn-active' يعيد القيمة false، والتي تتحول إلى كلمة 'false' كنص داخل القالب النصي مما يلوث كود الـ HTML."
    },
    {
      id: "q9-1-3",
      question: "ما الدور الذي تقدمه مكتبة tailwind-merge عند دمجها مع clsx في دالة cn() الشهيرة؟",
      options: [
        "حذف ملفات الصور غير المستخدمة",
        "حل التضاربات بين كلاسات Tailwind المتعارضة تلقائياً (مثل استبدال p-2 بـ p-4 دون تعارض)",
        "تسريع تحميل الخادم بنسبة 90%",
        "إضافة حركات ثلاثية الأبعاد تلقائية"
      ],
      correctAnswer: 1,
      explanation: "تكتشف tailwind-merge فئات Tailwind التي تستهدف نفس خاصية CSS وتقوم بإلغاء الفئات المتعارضة الأقدم وإبقاء الفئة الأحدث الممررة."
    }
  ],
  exercise: {
    id: "ex9-1",
    title: "بناء دالة cn() ومكون شارة ذكي متعدد الحالات",
    description: "المطلوب كتابة دالة مساعدة باسم cn لدمج الأصناف وتنظيف القيم الزائفة، ثم بناء مكون شارة (StatusBadge) يقبل خاصية status ('online' | 'busy' | 'offline') وخاصية className مخصصة ويدمج الأصناف بنقاء تام.",
    starterCode: `import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// 1. عرف دالة cn المعيارية
export function cn(...inputs) {
  // ادمج clsx مع twMerge
}

// 2. ابنِ مكون StatusBadge
export function StatusBadge({ status = "online", className }) {
  // استخدم cn لدمج الكلاس الأساسي والشرطي والمخصص
  return (
    <span>اختبر الشارة هنا</span>
  );
}`,
    hints: [
      "في دالة cn: return twMerge(clsx(inputs));.",
      "حدد كائن ألوان الحالات: { online: 'bg-emerald-500', busy: 'bg-amber-500', offline: 'bg-slate-500' }.",
      "ادمج الكلاسات: className={cn('px-2.5 py-1 rounded-full text-xs font-bold text-white', statusMap[status], className)}."
    ],
    solution: `import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// 1. الدالة المعيارية العالمية
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const STATUS_CONFIGS = {
  online: { label: "متصل الآن", dotColor: "bg-emerald-400", badgeBg: "bg-emerald-950/60 border-emerald-500/40 text-emerald-300" },
  busy: { label: "مشغول حالياً", dotColor: "bg-amber-400", badgeBg: "bg-amber-950/60 border-amber-500/40 text-amber-300" },
  offline: { label: "غير متصل", dotColor: "bg-slate-500", badgeBg: "bg-slate-900 border-slate-700 text-slate-400" }
};

// 2. مكون الشارة الذكي
export function StatusBadge({ status = "online", className }) {
  const current = STATUS_CONFIGS[status] || STATUS_CONFIGS.online;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold transition-all select-none",
        current.badgeBg,
        className
      )}
    >
      <span className={cn("w-2 h-2 rounded-full", current.dotColor)} />
      <span>{current.label}</span>
    </div>
  );
}

// مكون تجريبي متكامل
export function BadgePlayground() {
  const [currentStatus, setCurrentStatus] = useState("online");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm mx-auto text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">مكون الشارة الذكي مع cn()</h4>

      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex justify-center">
        <StatusBadge status={currentStatus} />
      </div>

      <div className="grid grid-cols-3 gap-2">
        {["online", "busy", "offline"].map((st) => (
          <button
            key={st}
            onClick={() => setCurrentStatus(st)}
            className="py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold transition-all"
          >
            {st}
          </button>
        ))}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة منهجيات التنسيق في React",
    description: "الدليل المرئي الشامل لـ Global CSS, Inline Styles, CSS Modules ودالة الدمج cn().",
    sections: [
      {
        heading: "1. نطاق التنسيق (Scoping & Boundaries)",
        bullets: [
          "Global CSS: نطاق عام مفتوح؛ الأفضل لإعدادات الخطوط والـ :root فقط.",
          "CSS Modules: عزل نطاقي مشفر عبر .module.css لمنع تصادم الأسماء.",
          "Inline Styles: كائن جافاسكريبت لحساب القيم الديناميكية في الرندر."
        ]
      },
      {
        heading: "2. المعمارية والتنظيم (File Architecture)",
        bullets: [
          "نمط Colocation: وضع ملف التنسيق بجانب ملف المكون في نفس المجلد.",
          "حذف نظيف: إزالة المكون تحذف تنسيقاته تلقائياً وتمنع الكود الميت."
        ]
      },
      {
        heading: "3. أدوات الدمج الذكية (Dynamic Tooling)",
        bullets: [
          "clsx: تنظيف الشروط والقيم الزائفة (null, undefined, false).",
          "tailwind-merge: حل التضاربات التلقائي بين فئات Tailwind المتعارضة.",
          "دالة cn(): المعيار العالمي في React لدمج فئات المكونات بسلاسة."
        ]
      }
    ]
  }
};
