// src/data/sections/section7/topic1.js
// الموضوع 1: قواعد استخدام Hooks في React (Rules of Hooks & Internal Mechanism)

export const SECTION_7_TOPIC_1 = {
  id: "7.1",
  title: "قواعد استخدام Hooks",
  englishTitle: "Rules of React Hooks",
  description: "الأسس الهندسية والقوانين الصارمة التي تحكم عمل خطافات React: لماذا ابتكرت، كيفية اعتماد React على الترتيب التتابعي الصارم للاستدعاءات في الذاكرة، وقواعد استدعائها في المستوى الأعلى وفحصها عبر ESLint.",
  subtopics: [
    {
      id: "7.1.a",
      title: "ما هي React Hooks",
      englishTerm: "What are React Hooks (History & Philosophy)",
      description: "دوال جافاسكريبت خاصة تبدأ كلماتها دائماً بكلمة use (مثل useState, useEffect, useRef). أُطلقت في إصدار React 16.8 لتمكين المطورين من 'ربط' (Hook into) مميزات محرك React الداخلي (كإدارة الحالة والآثار الجانبية ودورة الحياة) من قلب الدوال والمكونات الوظيفية البسيطة (Functional Components)، مما أنهى الحاجة المعقدة لكتابة الأصناف Class Components وكلمة this المربكة.",
      realLifeAnalogy: "مثل خطافات الصنارة أو خطافات تعليق الأدوات في ورشة العمل؛ بدلاً من بناء خزانة جدارية خرسانية ضخمة ومعقدة (Class Component) لحمل مطرقة ومفك، تعلق خطافاً صغيراً بسيطاً (Hook) على الجدار مباشرة لتعليق المطرقة واستخدامها فوراً بنقاء وخفة.",
      whyItMatters: "أحدثت الخطافات ثورة في عالم الواجهات الأمامية؛ حيث خفضت حجم الأكواد بنسبة تزيد عن 40%، وسمحت بإعادة استخدام منطق الحالة (State Logic Reuse) ومشاركته بين المكونات بسهولة مطلقة عبر دوال Custom Hooks.",
      syntax: "import { useState, useEffect } from 'react';\n// أي دالة تبدأ بـ use وتستدعي ميزات React تعتبر Hook",
      simpleExample: `// استيراد الخطاف الأساسي من مكتبة react
import { useState } from "react";

// مكون وظيفي نقي يستفيد من خطاف الحالة
function ModernGreeting() {
  // استدعاء الخطاف لربط المكون بذاكرة React
  const [name, setName] = useState("المطور المبدع");

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>مرحباً بك يا: <span className="font-bold text-indigo-400">{name}</span></p>
      <button 
        onClick={() => setName("محترف React")}
        className="px-3 py-1 bg-indigo-600 rounded font-bold"
      >
        ترقية اللقب
      </button>
    </div>
  );
}`,
      advancedExample: `// استعراض مقارنة تاريخية بين كلاس React القديم والمكون الوظيفي الحديث بالـ Hooks
import { useState } from "react";

// النموذج الحديث بالخطافات: سطران واضحان بدون تعقيدات this
export function ModernHooksComparisonCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">ثورة React Hooks (عصر الدوال النقية)</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded">
          React 16.8+
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-rose-950/20 border border-rose-800/40 rounded-xl space-y-1">
          <p className="font-bold text-rose-400">❌ قبل الخطافات (Classes):</p>
          <ul className="text-[10px] text-slate-400 space-y-1">
            <li>تعقيدات كلمة this وربط الدوال بـ .bind(this).</li>
            <li>تشتت المنطق بين componentDidMount و componentWillUnmount.</li>
            <li>صعوبة مشاركة المنطق وإعادة استخدامه (Wrapper Hell).</li>
          </ul>
        </div>

        <div className="p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1">
          <p className="font-bold text-emerald-400">✅ بعد الخطافات (Hooks):</p>
          <ul className="text-[10px] text-slate-300 space-y-1">
            <li>دوال جافاسكريبت نقية وبسيطة بلا أصناف.</li>
            <li>تجميع المنطق المترابط في مكان واحد (Effects).</li>
            <li>إمكانية إنشاء Custom Hooks لمشاركة المنطق بسهولة.</li>
          </ul>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
        <span>العداد الحالي بالخطاف: <strong className="text-indigo-400 font-mono">{count}</strong></span>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-bold"
        >
          زيادة العداد +
        </button>
      </div>
    </div>
  );
}`,
      output: "المكون يعمل بكفاءة وخفة تامة دون الحاجة لكتابة constructor أو دالة render معقدة أو استخدام this.setState.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام الخطافات داخل دوال جافاسكريبت عادية ليست مكونات React وليست Custom Hooks.",
          why: "تحتاج الخطافات إلى بيئة تنفيذ خاصة بـ React (Component Context) لتتبع الذاكرة والمطابقة؛ استدعاؤها في دالة عادية يسبب خطأ: Invalid hook call.",
          fix: "استدعِ الخطافات فقط داخل المكونات الوظيفية (تسمى بـ PascalCase) أو داخل دوال Custom Hooks مخصصة (تبدأ بـ use)."
        }
      ],
      bestPractices: [
        "استخدم المكونات الوظيفية والخطافات في 100% من مشاريعك الحديثة؛ لا تبدأ أي مشروع جديد باستخدام Class Components.",
        "التزم باتفاقية التسمية الإلزامية: أي دالة تستخدم خطافات يجب أن تبدأ بكلمة use بحرف صغير متبوعة بحرف كبير (camelCase)."
      ],
      infographicCard: {
        type: "timeline-evolution",
        title: "مسيرة التطور من Classes إلى Hooks",
        milestones: [
          "2013-2018: سيطرة الأصناف Class Components و this المعقدة وصعوبة مشاركة المنطق",
          "2019 (React 16.8): إطلاق ثورة الخطافات Hooks والانتقال الكامل للدوال النقية",
          "اليوم (React 19): الخطافات هي المعيار القياسي الوحيد لتطوير كافة واجهات وتطبيقات الويب"
        ]
      }
    },
    {
      id: "7.1.b",
      title: "استدعاء Hooks في المستوى الأعلى",
      englishTerm: "Call Hooks at the Top Level Only",
      description: "القاعدة الأولى والأساسية لاستخدام الخطافات في React. يجب دائماً وأبداً استدعاء الخطافات في قمة جسم المكون الوظيفي (Top Level) مباشرة، وقبل أي جمل شرطية (if)، أو حلقات تكرارية (loops)، وقبل أي عبارة إرجاع مبكر (Early return).",
      realLifeAnalogy: "مثل تسجيل الحضور في طابور التفتيش في المطار؛ يجب أن يقف كل مسافر في الطابور المخصص له من البداية وبترتيب بطاقته؛ لا يجوز لأحد أن يقفز فجأة في منتصف الطابور أو يختفي بحسب مزاجه، وإلا تعطل نظام الجوازات بالكامل.",
      whyItMatters: "تعتمد React داخلياً على مصفوفة أحادية مترابطة لتتبع الحالات؛ فإذا تغير ترتيب الاستدعاء أو تم تجاوزه، ستختلط بيانات المكون وتنهار الذاكرة كلياً.",
      syntax: "// ✅ سليم: استدعاء في قمة الدالة\nfunction MyComponent() {\n  const [val, setVal] = useState(0);\n  useEffect(() => {}, []);\n  // ... بقية المنطق هنا\n}",
      simpleExample: `// مثال يوضح الاستدعاء السليم في قمة المكون
import { useState, useEffect } from "react";

function ProperTopLevelComponent() {
  // 1. استدعاء الخطاف الأول في قمة المكون
  const [count, setCount] = useState(0);

  // 2. استدعاء الخطاف الثاني تالياً في القمة
  useEffect(() => {
    // طباعة القيمة مع كل تحديث
    console.log("العداد الحالي في التأثير:", count);
  }, [count]);

  // إرجاع واجهة المستخدم بعد الانتهاء من استدعاء كافة الخطافات
  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>استدعاءات الخطافات منظمة في القمة: {count}</p>
      <button onClick={() => setCount(c => c + 1)} className="px-3 py-1 bg-indigo-600 rounded">
        زيادة
      </button>
    </div>
  );
}`,
      advancedExample: `// تحليل معماري: الفرق بين الكود المنضبط في القمة والكود الخاطئ
import { useState, useEffect } from "react";

export function TopLevelRuleInspector({ userRole = "guest" }) {
  // خطأ شائع كان يقع فيه المبرمجون: محاولة وضع الخطاف بعد شرط التحقق!
  // if (userRole === "guest") return <div>يرجى الدخول</div>; // ❌ خطأ لو وُضع قبل useState!

  // ✅ الصواب الصارم: استدعاء كافة الخطافات في قمة الملف أولاً
  const [data, setData] = useState("بيانات عامة");
  const [secretCode, setSecretCode] = useState(9941);

  // ثم بعد استدعاء كافة الخطافات، يمكنك استخدام الإرجاع المبكر بحرية كاملة
  if (userRole === "guest") {
    return (
      <div className="p-4 bg-slate-900 border border-amber-500/40 rounded-2xl text-amber-300 text-xs">
        ⚠️ أنت مسجل كـ ضيف؛ يرجى تسجيل الدخول لعرض البيانات السرية. (الخطافات استُدعيت في القمة بسلام).
      </div>
    );
  }

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white text-xs space-y-2">
      <p>البيانات: {data}</p>
      <p className="font-mono text-emerald-400">الرمز السري: {secretCode}</p>
    </div>
  );
}`,
      output: "يتم استدعاء الخطافات بترتيب ثابت في كل رندر بغض النظر عن دور المستخدم، مما يضمن استقرار الذاكرة وتفادي أي أخطاء رندر.",
      commonMistakes: [
        {
          mistake: "وضع استدعاء خطاف useState أو useEffect بعد جملة if تحتوي على return (Early Return).",
          why: "إذا تحقق الشرط وأرجع المكون واجهته مبكراً، فلن يتم استدعاء الخطافات الموجودة أسفل الـ return، مما يقلل عدد الخطافات المستدعاة في ذلك الرندر ويدمر ترتيب الذاكرة!",
          fix: "ضع جميع استدعاءات الخطافات (useState, useEffect, ...) في أول أسطر المكون قبل أي جملة return."
        }
      ],
      bestPractices: [
        "ضع خطافات الحالة (useState) أولاً، تليها المراجع (useRef)، تليها السياقات (useContext)، وأخيراً الآثار الجانبية (useEffect).",
        "لا تضع أي شرط برمجي قبل استدعاء أي خطاف."
      ],
      infographicCard: {
        type: "rule-box",
        title: "قانون القمة (The Top-Level Law)",
        rules: [
          "1. في أعلى الدالة دائماً قبل أي شيء آخر.",
          "2. ممنوع وضع return مبكر قبل استدعاء أي خطاف.",
          "3. ضمان استدعاء نفس عدد الخطافات بنفس الترتيب في كل رندر."
        ]
      }
    },
    {
      id: "7.1.c",
      title: "عدم استدعاء Hooks داخل الشروط والحلقات",
      englishTerm: "Don't Call Hooks inside Conditions or Loops",
      description: "الحظر القاطع والنهائي في React لاستدعاء الخطافات داخل: 1) جمل الشروط (if, switch, ternary)، 2) الحلقات التكرارية (for, while, map)، 3) الدوال المتداخلة الفرعية (Nested functions). يجب أن يتم تنفيذ كل خطاف في كل دورة تصيير بدون استثناء وبنفس الترتيب الرقمي الثابت.",
      realLifeAnalogy: "مثل عربات قطار المترو المرقمة بدقة خلف قاطرة القيادة؛ العربة رقم 1 للمحرك، والعربة رقم 2 لركاب الدرجة الأولى، والعربة رقم 3 لركاب الدرجة الثانية. لا يمكن في يوم ما أن تقرر العربة 2 أن تختفي لأن الجو ممطر، وإلا سينفصل القطار في منتصف السكة وتحدث كارثة تصادم.",
      whyItMatters: "تعتمد خوارزمية React على معرفة 'أي خطاف ينتمي لأي حالة' عبر رقم ترتيبه (Index: 0, 1, 2)؛ فإذا كان الخطاف داخل if ولم يتحقق الشرط، سيقرأ الخطاف التالي بيانات الخطاف المحذوف بالخطأ، مما يسبب اختلاطاً مروعاً للبيانات!",
      syntax: "// ❌ خطأ قاتل ممنوع:\nif (condition) { useState(0); }\n\n// ✅ الصواب: ضع الشرط داخل الخطاف وليس حوله:\nconst [val, setVal] = useState(0);\nuseEffect(() => {\n  if (condition) { /* المنطق المشروط هنا */ }\n}, [condition]);",
      simpleExample: `// مثال يوضح كيفية التعامل مع الشروط داخل الخطاف وليس حوله
import { useState, useEffect } from "react";

function ConditionalHookFixDemo() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLog, setAdminLog] = useState("");

  // ✅ الصواب: استدعاء useEffect دائماً، ووضع شرط if في قلبه
  useEffect(() => {
    // الشرط يعيش بسلام داخل جسم التأثير
    if (isAdmin) {
      setAdminLog("تم تفعيل سجلات المشرف الفائقة.");
    } else {
      setAdminLog("سجلات المستخدم العادي.");
    }
  }, [isAdmin]);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>السجل: {adminLog}</p>
      <button onClick={() => setIsAdmin(a => !a)} className="px-3 py-1 bg-indigo-600 rounded">
        تبديل الرتبة
      </button>
    </div>
  );
}`,
      advancedExample: `// محاكاة بصرية لكارثة اختلاط الحالات عند استدعاء خطاف داخل شرط (Bug Simulation)
export function ConditionViolationSimulator() {
  const bugExplanation = [
    {
      step: "الرندر 1 (الشرط صحيح):",
      state0: "Hook 0 (useState): اسم المستخدم = 'سارة'",
      state1: "Hook 1 (useState داخل if): النقاط = 50",
      state2: "Hook 2 (useState): النمط = 'dark'",
      status: "كل شيء يبدو سليماً مؤقتاً."
    },
    {
      step: "الرندر 2 (الشرط أصبح غير محقق!):",
      state0: "Hook 0 (useState): اسم المستخدم = 'سارة'",
      state1: "Hook 1 اختفى لأن الـ if لم تُنفذ!",
      state2: "Hook 2 (النمط) أصبح يحمل الترتيب رقم 1 بدلاً من 2!",
      status: "🚨 كارثة: React تعطي 'النمط' قيمة '50' الخاصة بالنقاط، فينهار التطبيق بأخطاء خفية مستعصية!"
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-rose-900/40 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-rose-400">لماذا تحظر React استدعاء الخطافات داخل if؟</h4>
      <p className="text-xs text-slate-300">
        تعتمد React على الترتيب التتابعي؛ شاهد ما يحدث للذاكرة عند تخطي خطاف واحد:
      </p>

      <div className="space-y-3 font-mono text-[11px]">
        {bugExplanation.map((sc, i) => (
          <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-indigo-400 block font-sans">{sc.step}</span>
            <p className="text-slate-300">{sc.state0}</p>
            <p className="text-slate-300">{sc.state1}</p>
            <p className="text-slate-300">{sc.state2}</p>
            <span className="text-[10px] text-amber-400 block mt-1 font-sans">{sc.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يقدم المكون شرحاً مفصلاً يثبت بالدليل الرياضي كيف يؤدي تخطي خطاف داخل if إلى إزاحة ترتيب كافة الخطافات التالية له في الذاكرة مما يسبب خلط البيانات.",
      commonMistakes: [
        {
          mistake: "استدعاء خطاف داخل دالة map لتكرار مصفوفة: items.map(item => { const [state, setState] = useState(0); }).",
          why: "هذا يجعل عدد الخطافات المستدعاة يعتمد على طول المصفوفة (items.length)، فإذا حُذف عنصر من المصفوفة تغير عدد الخطافات وتدمرت شجرة الذاكرة بالكامل!",
          fix: "استخرج العنصر في مكون فرعي مخصص (ListItemComponent) وضع الخطاف في المستوى الأعلى للمكون الفرعي."
        }
      ],
      bestPractices: [
        "إذا احتجت لمنطق مشروط في تأثير جانبي، استدعِ useEffect دائماً وضع جملة if في أول سطر داخله.",
        "إذا احتجت لحالة لكل عنصر في مصفوفة، أنشئ مكوناً فرعياً مستقلاً لكل عنصر."
      ],
      infographicCard: {
        type: "danger-matrix",
        title: "أماكن الحظر المطلق للخطافات ❌",
        forbiddenZones: [
          "داخل جمل if / else أو switch الشرطية",
          "داخل حلقات التكرار for / while / map / forEach",
          "داخل دوال الأحداث المضمنة () => { ... }",
          "داخل دوال التوقيت setTimeout أو fetch callbacks"
        ]
      }
    },
    {
      id: "7.1.d",
      title: "استخدام Hooks داخل المكونات والدوال المخصصة",
      englishTerm: "Only Call Hooks from React Functions",
      description: "القاعدة الثانية الرسمية لاستخدام الخطافات في React: لا تستدعِ الخطافات من دوال جافاسكريبت عادية (Regular JavaScript functions). يُسمح باستدعاء الخطافات فقط وفقط من مكانين اثنين: 1) المكونات الوظيفية لـ React (React Function Components التي ترجع JSX)، 2) الخطافات المخصصة (Custom Hooks التي تبدأ أسماؤها بـ use).",
      realLifeAnalogy: "مثل استخدام العملة الرسمية للدولة؛ الريال السعودي أو الدرهم الإماراتي يمكنك الشراء به حصراً داخل المتاجر والأسواق المعتمدة في الدولة. لا يمكنك استخدام عملة البلايستيشن أو نقاط الألعاب للشراء في البقالة الحقيقية في الشارع.",
      whyItMatters: "يحافظ على سياق تشغيل React (Execution Context) ويضمن أن الخطافات تتصل بنواة إدارة الذاكرة وتحديث الشاشة في المكونات فقط.",
      syntax: "// مسموح 1: داخل مكون React\nfunction UserProfile() { const [s] = useState(); return <div />; }\n\n// مسموح 2: داخل Custom Hook\nfunction useAuth() { const [s] = useState(); return s; }",
      simpleExample: `// مثال يوضح المكانين المسموحين فقط
import { useState } from "react";

// 1. المكان المسموح الأول: Custom Hook مخصص يبدأ بـ use
function useCounter(initialVal = 0) {
  const [val, setVal] = useState(initialVal);
  const increment = () => setVal(v => v + 1);
  return { val, increment };
}

// 2. المكان المسموح الثاني: React Function Component يرجع JSX
function ValidHookUsageDemo() {
  const { val, increment } = useCounter(5);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>القيمة من الخطاف المخصص: {val}</p>
      <button onClick={increment} className="px-3 py-1 bg-indigo-600 rounded">
        زيادة +1
      </button>
    </div>
  );
}`,
      advancedExample: `// فحص معماري لكيفية تحويل دالة مساعدة عادية إلى Custom Hook قانوني
import { useState, useEffect } from "react";

// ❌ محاولة غير قانونية: دالة مساعدة عادية لا تبدأ بـ use تحاول استخدام خطافات
// function getWindowWidthHelper() { const [w] = useState(window.innerWidth); return w; } // خطأ!

// ✅ الصواب القانوني: تحويلها إلى Custom Hook رسمي بتسميتها useWindowWidth
function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export function HookLocationRulesDemo() {
  // استدعاء الخطاف المخصص داخل مكون وظيفي رسمي
  const currentWidth = useWindowWidth();

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-3 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">استدعاء الخطافات في الأماكن المعتمدة</h4>
      <p className="text-xs text-slate-300">
        عرض نافذة المتصفح الحالية عبر Custom Hook رسمي:
      </p>
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center font-mono text-emerald-400 text-lg font-bold">
        {currentWidth} بكسل (px)
      </div>
      <p className="text-[10px] text-slate-500 text-center">
        تم استدعاء useState و useEffect داخل useWindowWidth ثم داخل المكون بسلاسة تامة.
      </p>
    </div>
  );
}`,
      output: "المكون والخطاف المخصص يتعاونان بتوافق تام مع محرك React ودون أي اعتراض من مدقق القواعد ESLint.",
      commonMistakes: [
        {
          mistake: "تسمية دالة Custom Hook باسم عادي لا يبدأ بـ use، مثل: function fetchUserData() { const [data] = useState(); }.",
          why: "أداة فحص الكود (Linter) ومحرك React يعتمدان على بادئة use لاكتشاف أن هذه الدالة خطاف والتأكد من تطبيق القواعد عليها؛ بدون كلمة use ستفترض React أنها دالة عادية وتطلق تحذيراً أحمر.",
          fix: "سمِّ أي دالة مخصصة تستدعي خطافات بالبادئة use دائماً: useUserData()."
        }
      ],
      bestPractices: [
        "لا تستدعِ الخطافات داخل فئات جافاسكريبت (Classes) إطلاقاً.",
        "اجعل الخطافات المخصصة نقية وقابلة لإعادة الاستخدام في ملفات منفصلة في مجلد src/hooks/."
      ],
      infographicCard: {
        type: "approval-badge",
        title: "أين يجوز استدعاء الخطافات في الوجود؟",
        allowed: [
          "1. داخل React Function Components (مثل: function App() { ... })",
          "2. داخل Custom Hooks المخصصة (مثل: function useOnlineStatus() { ... })"
        ],
        rejected: [
          "داخل دوال JavaScript المساعدة العادية (مثل: formatData)",
          "داخل Class Components القديمة",
          "خارج نطاق الدوال في ملفات الـ JS العامة"
        ]
      }
    },
    {
      id: "7.1.e",
      title: "أهمية ترتيب استدعاءات Hooks",
      englishTerm: "How React Relies on Order of Hook Calls (Linked Lists)",
      description: "الكشف عن الآلية الهندسية الداخلية التي تخزن بها React بيانات الخطافات في الذاكرة. لا تستخدم React أسماء المتغيرات للتمييز بين الحالات، بل تخزنها في قائمة أحادية مترابطة (Singly Linked List of Fiber Nodes) أو مصفوفة داخلية مرتبطة بالمكون (Component Fiber). في كل رندر، تحرك React مؤشراً (Internal Pointer) خطوة للأمام لقراءة الخطاف التالي بالترتيب التتابعي الصارم.",
      realLifeAnalogy: "مثل حبات عقد اللؤلؤ المنظومة في خيط واحد بالترتيب: الحبة البيضاء الأولى، تليها الزرقاء، تليها الخضراء. الخيط لا يقرأ الأسماء، بل يعرف الحبات بتسلسلها في الخيط. لو انقطعت حبة في المنتصف، سينهار نظام التتابع للعقد بالكامل.",
      whyItMatters: "يزيل الغموض السحري حول React؛ فبمجرد أن تفهم أن React تعتمد على مؤشر تتابعي بسيط (Cursor Index)، ستفهم فوراً وبشكل بديهي لماذا يحظر وضع الخطافات داخل if أو loops.",
      syntax: "// خلف الكواليس في محرك React:\n// currentlyRenderingFiber.memoizedState = { value: 0, next: { value: 'Ali', next: null } }",
      simpleExample: `// محاكاة مبسّطة للغاية لكيفية تتبع React للخطافات داخلياً
function FakeReactEngine() {
  // مصفوفة الحالة الداخلية ومؤشر الترتيب
  const hooks = [];
  let cursor = 0;

  function fakeUseState(initialValue) {
    const hookIndex = cursor;
    // تهيئة القيمة في أول رندر فقط
    if (hooks[hookIndex] === undefined) {
      hooks[hookIndex] = initialValue;
    }
    const setter = (newValue) => {
      hooks[hookIndex] = newValue;
    };
    // تقديم المؤشر للخطوة التالية للخطاف القادم!
    cursor++;
    return [hooks[hookIndex], setter];
  }

  return { fakeUseState, resetCursor: () => { cursor = 0; } };
}

// توضيح للمبرمج
console.log("React تستخدم مؤشر cursor داخلي يتقدم خطوة مع كل استدعاء خطاف!");
`,
      advancedExample: `// محاكي حي تفاعلي يشرح مؤشر الخطافات الداخلي في React (Internal Cursor Simulator)
import { useState } from "react";

export function InternalHookLinkedListSimulator() {
  const [stepIndex, setStepIndex] = useState(0);

  const hookList = [
    { id: 0, name: "useState(0)", purpose: "عداد الإعجابات", memoryValue: 142 },
    { id: 1, name: "useState('dark')", purpose: "السمة البصرية", memoryValue: "'dark'" },
    { id: 2, name: "useEffect(...)", purpose: "تحديث عنوان المتصفح", memoryValue: "[Function Cleanup]" },
    { id: 3, name: "useRef(null)", purpose: "مرجع حقل الإدخال", memoryValue: "{ current: inputNode }" }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">محاكي القائمة المترابطة للخطافات</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Fiber Node Architecture
        </span>
      </div>

      <p className="text-xs text-slate-300">
        المؤشر الداخلي ينتقل تتابعياً في الذاكرة لقراءة كل خطاف:
      </p>

      <div className="space-y-2">
        {hookList.map((hk, i) => (
          <div
            key={hk.id}
            className={\`p-3 rounded-xl border text-xs transition-all flex justify-between items-center \${
              stepIndex === i
                ? "bg-indigo-950 border-indigo-500 shadow-md shadow-indigo-900/50 scale-[1.02]"
                : "bg-slate-950 border-slate-800 opacity-60"
            }\`}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-emerald-400 font-bold">#{hk.id}</span>
                <span className="font-bold text-slate-200">{hk.name}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">{hk.purpose}</p>
            </div>
            <span className="font-mono text-[11px] text-amber-400 bg-slate-900 px-2 py-1 rounded">
              {String(hk.memoryValue)}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setStepIndex((prev) => (prev + 1) % hookList.length)}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
      >
        تحريك مؤشر React خطوة للأمام (Cursor: #{stepIndex}) 👉
      </button>
    </div>
  );
}`,
      output: "المحاكي يوضح بصرياً كيف تعتمد React على الترتيب التتابعي للمؤشر (Cursor #0 -> #1 -> #2 -> #3)؛ فإذا فُقد خطاف في المنتصف، يقرأ المؤشر بيانات الخطاف الخاطئ فوراً.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن React تستخدم أسماء المتغيرات (مثل const [name] مقابل const [age]) لمعرفة أين تخزن القيم.",
          why: "عند بناء المشروع وتصغير الكود (Minification)، يقوم المترجم بحذف أسماء المتغيرات وتحويلها إلى أحرف مفردة عشوائية مثل const [a] و const [b]؛ لذا يستحيل على React الاعتماد على الأسماء وتعتمد حصراً على الترتيب التتابعي للأماكن في الذاكرة.",
          fix: "استوعب أن الترتيب هو الهوية الوحيدة للخطافات في نظر محرك React."
        }
      ],
      bestPractices: [
        "حافظ على ثبات ترتيب الخطافات في ملفات المكونات ولا تعيد ترتيبها عشوائياً بين الإصدارات دون داعٍ.",
        "تذكر دائماً: 'Order is Identity' (الترتيب هو الهوية في عالم React Hooks)."
      ],
      infographicCard: {
        type: "linked-list",
        title: "بنية القائمة المترابطة الداخلية (Fiber Linked List)",
        nodes: [
          "🪢 Hook 1 (Index 0) -> next:",
          "🪢 Hook 2 (Index 1) -> next:",
          "🪢 Hook 3 (Index 2) -> next: null"
        ]
      }
    },
    {
      id: "7.1.f",
      title: "استخدام ESLint للتحقق من قواعد Hooks",
      englishTerm: "ESLint Rules of Hooks Plugin (eslint-plugin-react-hooks)",
      description: "الحارس الآلي المبرمج الذي يحميك من ارتكاب أي أخطاء في قواعد الخطافات أثناء كتابة الكود وقبل تشغيل المتصفح. توفر React إضافة رسمية لـ ESLint تُدعى eslint-plugin-react-hooks، تتضمن قاعدتين أساسيتين صارمتين: 1) react-hooks/rules-of-hooks (تكتشف استدعاء الخطافات داخل if أو loops أو دوال عادية وتطلق خطأً أحمر فورياً)، 2) react-hooks/exhaustive-deps (تتحقق من أن مصفوفة اعتماديات useEffect تحوي كافة المتغيرات المطلوبة وتمنع الحالات الميتة).",
      realLifeAnalogy: "مثل رادار قياس السرعة وحزام الأمان في السيارة الحديثة؛ لن يسمح لك المحرك بالانطلاق وسينبهك بصوت إنذار فوري بمجرد أن تنسى ربط حزام الأمان حمايةً لحياتك من الحوادث.",
      whyItMatters: "تكتشف 99.9% من أخطاء المبتدئين والمحترفين في نفس ثانية كتابة الكود داخل المحرر (VS Code)، مما يوفر ساعات طويلة من تشخيص المشاكل المعقدة.",
      syntax: "// إعداد الحارس في eslint.config.js أو .eslintrc.json:\n{\n  \"plugins\": [\"react-hooks\"],\n  \"rules\": {\n    \"react-hooks/rules-of-hooks\": \"error\",\n    \"react-hooks/exhaustive-deps\": \"warn\"\n  }\n}",
      simpleExample: `// مثال يوضح كيف يصرخ ESLint عند ارتكاب خطأ
import { useState } from "react";

function LintProtectedComponent({ shouldTrack }) {
  // ❌ إذا حاولت كتابة هذا الكود:
  // if (shouldTrack) {
  //   const [track, setTrack] = useState(true); // خطأ أحمر من ESLint: React Hook "useState" is called conditionally.
  // }

  // ✅ الكود النظيف المعتمد من ESLint:
  const [track, setTrack] = useState(shouldTrack);

  return (
    <div className="p-3 bg-slate-800 rounded-lg text-xs text-white">
      التتبع مفعل: {track ? "نعم ✅" : "لا ❌"}
    </div>
  );
}`,
      advancedExample: `// استعراض حي لقواعد ESLint الرسمية وأشكال التنبيهات التي تطلقها
export function ESLintRulesShowcase() {
  const lintRules = [
    {
      rule: "react-hooks/rules-of-hooks",
      severity: "Error (أحمر قاطع)",
      description: "تمنع استدعاء الخطافات داخل الشروط والحلقات والدوال العادية خارج المكونات.",
      exampleTrigger: "if (auth) { useEffect(...) } ❌"
    },
    {
      rule: "react-hooks/exhaustive-deps",
      severity: "Warning (أصفر تحذيري)",
      description: "تتحقق من أن كل قيمة أو دالة مستخدمة داخل useEffect مذكورة في مصفوفة الاعتماديات [deps].",
      exampleTrigger: "useEffect(() => { console.log(userId); }, []); // مفقود userId ⚠️"
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">إضافة ESLint الرسمية لحماية الخطافات</h4>
        <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
          Automated Linter
        </span>
      </div>

      <div className="space-y-3">
        {lintRules.map((rl, i) => (
          <div key={i} className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-1 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-mono font-bold text-indigo-300">{rl.rule}</span>
              <span className={\`text-[10px] font-bold px-2 py-0.5 rounded \${
                rl.severity.includes("Error") ? "bg-rose-500/20 text-rose-400" : "bg-amber-500/20 text-amber-400"
              }\`}>
                {rl.severity}
              </span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">{rl.description}</p>
            <div className="p-2 bg-slate-900 rounded-lg text-rose-400 font-mono text-[10px] mt-1 border border-slate-800">
              المحفز: {rl.exampleTrigger}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يقدم المكون دليلاً سريعاً للقاعدتين الرسميتين ويؤكد على ضرورة احترام تحذيرات المحرر وعدم تجاهلها أو إسكاتها بتعليقات eslint-disable دون فهم عميق.",
      commonMistakes: [
        {
          mistake: "إسكات تحذير مصفوفة الاعتماديات بتعليق: // eslint-disable-next-line react-hooks/exhaustive-deps.",
          why: "إسكات التحذير لا يحل المشكلة بل يخفي قنبلة موقوتة، مما يسبب تجمد التطبيق على قيم قديمة ميتة (Stale Closures) تفشل في التحديث عند تغير المدخلات!",
          fix: "أضف المتغير المطلوب إلى مصفوفة الاعتماديات، أو أعد هيكلة الدالة بوضعها داخل الـ Effect إذا كانت لا تُستخدم في مكان آخر."
        }
      ],
      bestPractices: [
        "تأكد دائماً من تثبيت eslint-plugin-react-hooks في ملف package.json في أي مشروع React جديد.",
        "عامل تحذيرات الخطافات كأنها أخطاء مانعة للبناء (Errors) لضمان أعلى معايير الجودة والاستقرار."
      ],
      infographicCard: {
        type: "guardian-shield",
        title: "درع الحماية: قاعدتا ESLint للخطافات",
        shields: [
          "🛡️ rules-of-hooks: حارس المكان والترتيب (فقط في القمة وفي المكونات)",
          "🛡️ exhaustive-deps: حارس الاعتماديات والتزامن النظيف"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q7-1-1",
      question: "لماذا تحظر React بشكل قاطع استدعاء الخطافات (Hooks) داخل جمل الشرط if والحلقات التكرارية؟",
      options: [
        "لأن المتصفح يمنع استخدام الدوال داخل الشروط في جافاسكريبت",
        "لأن React تعتمد على الترتيب التتابعي الصارم للاستدعاءات في الذاكرة لمطابقة الحالات، وتخطي خطاف يسبب اختلاط كافة الحالات التالية له",
        "لأن لغة React تترجم الكود إلى لغة بايثون التي لا تدعم الشروط",
        "لأن الخطافات تستهلك سرعة الإنترنت عند وضعها داخل الشروط"
      ],
      correctAnswer: 1,
      explanation: "تعتمد React داخلياً على مؤشر تتابعي (Cursor) في قائمة مترابطة؛ تخطي خطاف واحد داخل if يخل بتسلسل الذاكرة ويجعل كل خطاف تالٍ يقرأ بيانات خطاف آخر مما يؤدي لانهيار فوري للتطبيق."
    },
    {
      id: "q7-1-2",
      question: "ما هما المكانان الوحيدان المسموح فيهما باستدعاء React Hooks؟",
      options: [
        "داخل ملفات CSS وملفات HTML",
        "داخل دوال JavaScript العادية ودوال الكلاسات",
        "داخل المكونات الوظيفية (React Function Components) والخطافات المخصصة (Custom Hooks)",
        "في أي مكان داخل ملف التطبيق دون أي قيود"
      ],
      correctAnswer: 2,
      explanation: "وفق القواعد الرسمية لـ React، لا يجوز استدعاء الخطافات إلا داخل المكونات الوظيفية التي ترجع JSX أو داخل دوال Custom Hooks تبدأ بكلمة use."
    },
    {
      id: "q7-1-3",
      question: "ما الذي يجب فعله إذا أردت تنفيذ منطق مشروط يعتمد على حالة معينة داخل خطاف useEffect؟",
      options: [
        "وضع جملة if خارج الخطاف لتحيط به بالكامل",
        "استدعاء الخطاف دائماً في القمة ووضع جملة if داخل جسم دالة التأثير",
        "حذف خطاف useEffect واستخدام setTimeout بدلاً منه",
        "إسكات مدقق ESLint بتعليق إيقاف التنبيه"
      ],
      correctAnswer: 1,
      explanation: "يجب استدعاء useEffect دائماً في كل رندر دون شرط، والتحقق من الشرط داخل جسم الدالة: useEffect(() => { if (condition) { ... } }, [condition])."
    }
  ],
  exercise: {
    id: "ex7-1",
    title: "إصلاح وتصحيح مكون ينتهك قواعد الخطافات (Rules of Hooks Refactor)",
    description: "أمامك مكون مكسور برمجياً ينتهك قواعد الخطافات بثلاثة أشكال مختلفة: استدعاء خطاف بعد return مبكر، استدعاء خطاف داخل جملة if شرطية، واستدعاء خطاف داخل دالة فرعية متداخلة. المطلوب إعادة هيكلة المكون وتصحيحه ليتبع قواعد React الصارمة بنسبة 100%.",
    starterCode: `import { useState, useEffect } from "react";

// ❌ كود خاطئ ينتهك قواعد الخطافات!
export function BuggyComponent({ isLocked, userId }) {
  if (isLocked) {
    return <div>الحساب مقفل مؤقتاً!</div>;
  }

  // انتهاك 1: خطاف مستدعى بعد return مبكر!
  const [count, setCount] = useState(0);

  // انتهاك 2: خطاف مستدعى داخل شرط!
  if (userId) {
    useEffect(() => {
      console.log("المستخدم:", userId);
    }, [userId]);
  }

  // انتهاك 3: خطاف داخل دالة فرعية!
  const handleClick = () => {
    const [flag, setFlag] = useState(false);
  };

  return <div>العداد: {count}</div>;
}`,
    hints: [
      "انقل كافة استدعاءات useState في أول سطرين في قمة المكون قبل أي if.",
      "استدعِ useEffect دائماً في المستوى الأعلى، وضع فحص if (userId) داخل التأثير.",
      "احذف استدعاء useState من داخل دالة handleClick وانقله لقمة المكون.",
      "ضع جملة if (isLocked) return ... في النهاية بعد الانتهاء من استدعاء كافة الخطافات."
    ],
    solution: `import { useState, useEffect } from "react";

// ✅ الكود المصحح النظيف الملتزم بقواعد الخطافات 100%
export function BuggyComponentFixed({ isLocked = false, userId = "usr-101" }) {
  // 1. استدعاء كافة الخطافات في قمة المكون أولاً دائماً وبلا استثناء
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // 2. استدعاء التأثير في المستوى الأعلى مع نقل فحص الشرط إلى داخل جسم الدالة
  useEffect(() => {
    // الشرط يعيش بسلام داخل جسم التأثير
    if (userId) {
      console.log("تم رصد معرف المستخدم بنجاح:", userId);
    }
  }, [userId]);

  // 3. معالج الحدث يستدعي دالة التحديث setFlag فقط ولا ينشئ خطافاً جديداً
  const handleClick = () => {
    setFlag((prev) => !prev);
    setCount((c) => c + 1);
  };

  // 4. الآن وبعد استدعاء كافة الخطافات، يحق لك استخدام الإرجاع المبكر بأمان مطلق!
  if (isLocked) {
    return (
      <div className="p-4 bg-slate-900 border border-rose-500/40 rounded-2xl text-rose-300 text-xs">
        🔒 الحساب مقفل مؤقتاً؛ تم استدعاء الخطافات بترتيب ثابت وآمن.
      </div>
    );
  }

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-3 max-w-sm mx-auto text-xs">
      <h4 className="font-bold text-sm text-emerald-400">مكون منضبط ومتوافق مع ESLint ✅</h4>
      <p>العداد: <span className="font-mono text-indigo-400 font-bold">{count}</span></p>
      <p>الحالة الفرعية: {flag ? "مفعلة" : "معطلة"}</p>
      <button
        onClick={handleClick}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all"
      >
        زيادة العداد وتفعيل الحالة
      </button>
    </div>
  );
}`
  },
  infographic: {
    title: "دستور قواعد الخطافات في React",
    description: "الدليل المرئي الشامل لقواعد استخدام Hooks، الترتيب التتابعي، وحماية ESLint.",
    sections: [
      {
        heading: "1. قانون القمة (Top-Level Rule)",
        bullets: [
          "في أعلى المكون دائماً: قبل أي if أو loop أو return مبكر.",
          "نفس العدد في كل رندر: لضمان استقرار القائمة المترابطة في الذاكرة.",
          "الشروط داخل الخطاف: ضع الشرط داخل جسم التأثير وليس حول استدعائه."
        ]
      },
      {
        heading: "2. قانون النطاق (Scope Rule)",
        bullets: [
          "المكونات الوظيفية: فقط في الدوال التي ترجع JSX (تبدأ بـ PascalCase).",
          "الخطافات المخصصة: فقط في الدوال التي تبدأ بـ use (مثل useAuth).",
          "حظر الدوال العادية: لا تستدعِ الخطافات من دوال جافاسكريبت المساعدة العادية."
        ]
      },
      {
        heading: "3. هندسة الذاكرة والمؤشر (Linked List)",
        bullets: [
          "الترتيب هو الهوية: React تطابق الحالات بأرقام المؤشر (0, 1, 2) وليس بالأسماء.",
          "حماية ESLint: تفعيل react-hooks/rules-of-hooks يكتشف الأخطاء في ثانية واحدة."
        ]
      }
    ]
  }
};
