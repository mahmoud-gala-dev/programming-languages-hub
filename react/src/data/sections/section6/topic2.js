// src/data/sections/section6/topic2.js
// الموضوع 2: إدارة الحالة باستخدام useState (State, Immutability & Snapshots)

export const SECTION_6_TOPIC_2 = {
  id: "6.2",
  title: "إدارة الحالة باستخدام useState",
  englishTerm: "State Management with useState",
  description: "ذاكرة المكون الحية: فهم ماهية الحالة (State)، وقواعد التحديث اللاتبديلية (Immutability)، وتحديث الكائنات والمصفوفات، ومفهوم اللقطة الزمنية (State Snapshot).",
  subtopics: [
    {
      id: "6.2.a",
      title: "مفهوم State",
      englishTerm: "State Concept (Component Memory)",
      description: "ذاكرة المكون الداخلية الخاصة به. بينما تمثل الخصائص (Props) بيانات خارجية واردة من الأب وثابتة لا تتغير، تمثل الحالة (State) بيانات داخلية يمتلكها المكون وتتغير بمرور الوقت بناءً على تفاعلات المستخدم أو استجابات الشبكة، ويؤدي أي تغيير فيها إلى إعادة تصيير المكون (Re-render) فوراً لتحديث الشاشة.",
      realLifeAnalogy: "مثل السبورة الذكية المعلقة في الفصل؛ هيكل السبورة وإطارها ثابت (Component Structure)، ولكن ما يكتبه المعلم عليها بالطباشير من معادلات وملاحظات (State) يتغير ويمحى ويستبدل طوال مدة الحصة مع تفاعل الطلاب.",
      whyItMatters: "بدون State، لا يمكن لأي تطبيق أن يتذكر أي شيء؛ لا يمكن حفظ ما كتبه المستخدم، أو تذكر العناصر الموجودة في السلة، أو تسجيل حالة تسجيل الدخول، أو تبديل الأزرار.",
      syntax: "const [state, setState] = useState(initialValue);",
      simpleExample: `// استيراد خطاف useState من حزمة react
import { useState } from "react";

// مكون عداد بسيط يمتلك حالة
function SimpleCounter() {
  // تعريف حالة العداد بقيمة أولية تساوي 0
  const [count, setCount] = useState(0);

  return (
    // إرجاع واجهة تعرض الحالة
    <div className="p-4 bg-slate-900 rounded-xl text-white">
      {/* قراءة وعرض قيمة الحالة الحالية */}
      <p className="text-sm mb-2">القيمة الحالية في الذاكرة: {count}</p>
      {/* زر يقوم بتحديث الحالة */}
      <button 
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-indigo-600 rounded text-xs font-bold"
      >
        زيادة العداد +
      </button>
    </div>
  );
}`,
      advancedExample: `// استعراض مقارنة حية بين متغير عادي في JavaScript وحالة State في React
import { useState } from "react";

export function StateVsVariableDemo() {
  // 1. متغير عادي: لا يؤدي تعديله لإعادة رندر ولا تتذكره React
  let regularVariable = 0;

  // 2. حالة React: تحتفظ بقيمتها وتجبر المكون على إعادة التصيير وتحديث DOM
  const [reactState, setReactState] = useState(0);

  const incrementVariable = () => {
    regularVariable += 1;
    // المتغير يتغير في الذاكرة ولكن الواجهة لا تشعر به أبداً!
    console.log("قيمة المتغير العادي الآن في الكونسول:", regularVariable);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">الفرق بين المتغير العادي وحالة State</h4>
      
      <div className="grid grid-cols-2 gap-4">
        {/* صندوق المتغير العادي */}
        <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-2">
          <span className="text-xs text-rose-400 font-bold block">متغير عادي (let variable)</span>
          <p className="text-2xl font-black font-mono text-slate-400">{regularVariable}</p>
          <p className="text-[10px] text-slate-500">لن يتغير هذا الرقم على الشاشة عند النقر!</p>
          <button 
            onClick={incrementVariable}
            className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-lg font-medium"
          >
            زيادة المتغير
          </button>
        </div>

        {/* صندوق حالة React */}
        <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-800/40 space-y-2">
          <span className="text-xs text-emerald-400 font-bold block">حالة React (useState)</span>
          <p className="text-2xl font-black font-mono text-emerald-400">{reactState}</p>
          <p className="text-[10px] text-emerald-300/70">يتحدث الرقم فوراً وتُعاد رسم الواجهة!</p>
          <button 
            onClick={() => setReactState((prev) => prev + 1)}
            className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-xs rounded-lg font-bold"
          >
            زيادة الحالة +1
          </button>
        </div>
      </div>
    </div>
  );
}`,
      output: "عند النقر على 'زيادة المتغير' يتغير الرقم في كونسول المتصفح فقط وتظل الشاشة جامدة، بينما عند النقر على 'زيادة الحالة' يُعاد تشغيل المكون فوراً ويظهر الرقم الجديد في الشاشة.",
      commonMistakes: [
        {
          mistake: "محاولة تعديل الحالة مباشرة دون استخدام دالة التحديث مثل: count = count + 1 أو state.user = 'Ali'.",
          why: "تعديل المتغير مباشرة يغير القيمة في الذاكرة سراً دون إشعار React، فلن يعلم محرك التصيير أن هناك تغييراً ولن يُحدث شاشة المتصفح أبداً!",
          fix: "استخدم دائماً دالة التحديث المخصصة: setCount(count + 1)."
        }
      ],
      bestPractices: [
        "فكر دائماً: هل هذه البيانات تحتاج أن تؤثر على واجهة المستخدم وتحديث الشاشة؟ إذا كان الجواب نعم، استخدم State؛ وإذا كان الجواب لا، استخدم متغيراً عادياً أو useRef.",
        "احرص على إبقاء الحالة في أدنى مستوى ممكن في شجرة المكونات (Keep State Local)."
      ],
      infographicCard: {
        type: "concept-comparison",
        title: "المتغير العادي مقابل حالة React (State)",
        items: [
          { concept: "المتغير العادي (let x = 0)", effect: "لا يحفز إعادة التصيير، ويُعاد ضبطه للصفر عند أي رندر قادم." },
          { concept: "حالة React (useState)", effect: "تحتفظ بقيمتها عبر الرندرات، وتطلق تحديثاً بصرياً فورياً للشاشة." }
        ]
      }
    },
    {
      id: "6.2.b",
      title: "إنشاء حالة باستخدام useState",
      englishTerm: "Declaring State with useState Hook",
      description: "الخطاف (Hook) الأساسي والأكثر استخداماً في React. يُستدعى داخل دالة المكون لإنشاء متغير حالة جديد. يأخذ قيمة أولية (Initial Value) ويرجع مصفوفة تحتوي على عنصرين بالضبط: 1) القيمة الحالية للحالة، و2) دالة لتحديث هذه القيمة (Setter Function).",
      realLifeAnalogy: "مثل استئجار خزانة أمانات في البنك؛ يمنحك البنك صندوق الخزانة (متغير الحالة للقراءة) ومفتاحاً خاصاً لإيداع أو تعديل ما بداخلها (دالة التحديث Setter). لا يمكنك فتح الخزانة إلا بهذا المفتاح.",
      whyItMatters: "هو المدخل الإلزامي لكل منطق تفاعلي في المكونات الوظيفية (Functional Components) منذ إطلاق React 16.8.",
      syntax: "import { useState } from 'react';\nconst [value, setValue] = useState(initialValue);",
      simpleExample: `// استيراد خطاف الحالة من مكتبة ريمكت
import { useState } from "react";

// مكون لتبديل حالة المصباح
function LightSwitch() {
  // إنشاء حالة منطقية تبدأ بالقيمة false (المصباح مطفأ)
  const [isOn, setIsOn] = useState(false);

  return (
    // حاوية المكون
    <div className="p-4 bg-slate-900 rounded-xl text-white text-center">
      {/* عرض الحالة الحالية */}
      <h3 className="font-bold mb-2">المصباح: {isOn ? "مضاء 💡" : "مطفأ 🌑"}</h3>
      {/* زر التبديل يمرر عكس القيمة الحالية */}
      <button 
        onClick={() => setIsOn(!isOn)}
        className="px-4 py-1.5 bg-indigo-600 rounded-lg text-xs font-bold"
      >
        تبديل الإضاءة
      </button>
    </div>
  );
}`,
      advancedExample: `// تهيئة حالة أولية بطيئة أو معقدة باستخدام الدالة الكسولة (Lazy Initial State)
import { useState } from "react";

export function LazyStateInitializationDemo() {
  // دالة تحسب قيمة ابتدائية مكلفة (محاكاة قراءة من localStorage أو عمليات رياضية)
  const computeInitialSettings = () => {
    console.log("⚡ تم تنفيذ حساب الإعدادات الابتدائية (تُنفذ مرة واحدة فقط!)");
    return {
      theme: "dark",
      volume: 85,
      language: "ar"
    };
  };

  // تمرير دالة إلى useState يجعل React تنفذها فقط أثناء الرندر الأول وتتجاهلها في الرندرات التالية
  const [settings, setSettings] = useState(computeInitialSettings);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-sm text-indigo-400">التهيئة الكسولة للحالة (Lazy Initial State)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Performance Optimized
        </span>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono space-y-1">
        <p>السمة: {settings.theme}</p>
        <p>مستوى الصوت: {settings.volume}%</p>
        <p>اللغة: {settings.language}</p>
      </div>

      <button
        onClick={() => setSettings((prev) => ({ ...prev, volume: prev.volume + 5 }))}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
      >
        رفع الصوت +5%
      </button>
    </div>
  );
}`,
      output: "تُهيأ الحالة بالإعدادات الابتدائية المحسوبة دون تكرار حسابها في كل عملية تحديث، مما يوفر موارد المعالجة.",
      commonMistakes: [
        {
          mistake: "استدعاء دالة التهيئة مباشرة داخل useState مثل: useState(computeSettings()) بدلاً من تمرير مرجعها useState(computeSettings).",
          why: "وضع الأقواس يجعل الدالة تنفذ في كل إعادة تصيير للمكون دون جدوى حتى لو تجاهلت React نتيجتها لاحقاً، مما يسبب بطء الأداء.",
          fix: "مرر دالة التهيئة كمرجع فقط: useState(computeSettings) أو دالة سهمية: useState(() => computeSettings())."
        },
        {
          mistake: "استدعاء useState داخل جمل شرطية if أو حلقات تكرارية for.",
          why: "ينتهك هذا قواعد الخطافات (Rules of Hooks)؛ تحتاج React أن تستدعى الخطافات بنفس الترتيب التام في كل رندر للحفاظ على تتبع الحالة.",
          fix: "استدعِ useState دائماً في المستوى الأعلى للمكون (Top Level)."
        }
      ],
      bestPractices: [
        "استخدم تفكيك المصفوفات دائماً بالاسم القياسي: const [thing, setThing] = useState(init).",
        "حدد قيمة ابتدائية مناسبة لنوع البيانات دائماً ('' للنصوص، 0 للأرقام، [] للمصفوفات، null أو {} للكائنات) لمنع ظهور أخطاء undefined."
      ],
      infographicCard: {
        type: "anatomy-diagram",
        title: "تشريح سطر useState",
        parts: [
          { code: "const [count,", label: "1. متغير قراءة القيمة الحالية" },
          { code: "setCount]", label: "2. دالة تحديث القيمة (Setter)" },
          { code: "= useState(0);", label: "3. استدعاء الخطاف بالقيمة المبدئية" }
        ]
      }
    },
    {
      id: "6.2.c",
      title: "تحديث الحالة باستخدام Setter",
      englishTerm: "Updating State via Setter Function",
      description: "استدعاء دالة التحديث (المعروفة اصطلاحاً باسم Setter، مثل setCount أو setName) لإخبار React بوجود قيمة جديدة للحالة. يقوم هذا الاستدعاء بجدولة إعادة تصيير المكون (Schedule a Re-render) بالبيانات الحديثة وتحديث شجرة العناصر.",
      realLifeAnalogy: "مثل إرسال برقية عاجلة للمطبعة لتغيير عنوان الصفحة الأولى في جريدة الصباح؛ بمجرد استلام البرقية، يتم إيقاف ماكينات الطباعة وإعادة طباعة النسخ الجديدة بالعنوان المحدث فوراً.",
      whyItMatters: "دالة الـ Setter هي الطريقة القانونية الوحيدة لإشعار React بضرورة إعادة تقييم الواجهة وعرض التغييرات الجديدة للمستخدم.",
      syntax: "const [name, setName] = useState('أحمد');\nsetName('خالد');",
      simpleExample: `// استيراد useState
import { useState } from "react";

function NameUpdater() {
  // حالة نصية للاسم
  const [userName, setUserName] = useState("زائر جديد");

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2">
      <p className="text-sm">اسم العضو المسجل: <span className="font-bold text-indigo-400">{userName}</span></p>
      {/* استدعاء دالة Setter لتغيير القيمة */}
      <button 
        onClick={() => setUserName("سارة عبدالله")}
        className="px-3 py-1.5 bg-indigo-600 rounded text-xs font-bold"
      >
        تسجيل اسم العضو
      </button>
    </div>
  );
}`,
      advancedExample: `// إدارة تبديل الثيم العام وعرض الرندرات المتتابعة
import { useState } from "react";

export function ThemeModeSwitcher() {
  // حالة نمط الإضاءة
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    // تبديل النمط بين الداكن والفاتح عبر دالة الـ Setter
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  return (
    <div className={\`p-6 rounded-2xl border transition-all duration-300 \${
      themeMode === "dark" 
        ? "bg-slate-950 border-slate-800 text-white" 
        : "bg-amber-50 border-amber-200 text-slate-900"
    }\`}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="font-bold text-sm">الوضع الحالي: {themeMode === "dark" ? "الوضع الليلي 🌙" : "الوضع النهاري ☀️"}</h4>
          <p className="text-xs opacity-70">تم تحديث المظهر بالكامل عبر دالة setThemeMode</p>
        </div>
        <button
          onClick={toggleTheme}
          className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md \${
            themeMode === "dark" 
              ? "bg-indigo-600 hover:bg-indigo-500 text-white" 
              : "bg-slate-900 hover:bg-slate-800 text-white"
          }\`}
        >
          تبديل الوضع
        </button>
      </div>
    </div>
  );
}`,
      output: "عند النقر على الزر، تستلم React القيمة الجديدة عبر setThemeMode، فتقوم بإعادة تنفيذ دالة المكون وتطبيق الأنماط البصرية الجديدة فوراً.",
      commonMistakes: [
        {
          mistake: "توقع قراءة القيمة الجديدة في السطر التالي مباشرة بعد استدعاء Setter! مثل: setCount(5); console.log(count); // يطبع القيمة القديمة!",
          why: "تحديث الحالة في React غير فوري (Asynchronous) ولا يغير المتغير الحالي في نفس النطاق، بل يجدول رندراً جديداً قادماً يحمل القيمة الجديدة.",
          fix: "لا تعتمد على قراءة متغير الحالة مباشرة بعد الـ Setter؛ إذا كنت بحاجة للقيمة فوراً، استخدم متغيراً محلياً مؤقتاً: const next = 5; setCount(next); doSomething(next);."
        }
      ],
      bestPractices: [
        "تذكر دائماً: استدعاء الـ Setter لا يغير القيمة في مكانها (In-Place)، بل يطلب من React إطلاق رندر جديد في الدورة القادمة.",
        "إذا كانت القيمة الجديدة مطابقة تماماً للقيمة الحالية (Object.is equality)، ستتجاهل React التحديث بذكاء ولن تعيد الرندر (Bailing out of state update)."
      ],
      infographicCard: {
        type: "timeline",
        title: "ماذا يحدث عند استدعاء Setter؟",
        events: [
          "1. استدعاء setCount(10)",
          "2. مقارنة القيمة الجديدة بالقيمة السابقة عبر Object.is",
          "3. إذا اختلفت: جدولة إعادة التصيير (Schedule Re-render)",
          "4. تشغيل دالة المكون مرة أخرى مع count = 10",
          "5. تحديث عقد DOM الحقيقية في المتصفح"
        ]
      }
    },
    {
      id: "6.2.d",
      title: "تحديث الحالة اعتماداً على قيمتها السابقة",
      englishTerm: "Functional State Updates (Updater Function: prev => next)",
      description: "تمرير دالة تحديث إلى الـ Setter (مثل setCount(prev => prev + 1)) بدلاً من تمرير قيمة مباشرة. تضمن هذه التقنية الحصول على أحدث قيمة حقيقية للحالة في طابور التحديثات (Pending State Queue)، وتمنع أخطاء التحديثات المتزامنة أو المتسلسلة الناتجة عن تجميع التحديثات (Batching).",
      realLifeAnalogy: "مثل عداد الركاب في مدخل الحافلة؛ لو صعد 3 ركاب معاً في نفس الثانية، يقول كل راكب لآلة الحساب: 'أضيفي واحداً على أي رقم كان موجوداً قبلي' بدلاً من أن ينظر الجميع للرقم القديم (مثلاً 10) ويقول كل منهم للآلة: 'اضبطي العداد على 11!'.",
      whyItMatters: "ضروري للغاية عند استدعاء التحديث عدة مرات متتالية داخل نفس الحدث، أو داخل دوال التوقيت (setTimeout)، أو العمليات غير المتزامنة لضمان عدم ضياع أي تحديث.",
      syntax: "setCount(prevCount => prevCount + 1);",
      simpleExample: `// مقارنة حاسمة: لماذا يفشل التحديث المباشر 3 مرات متتالية؟
import { useState } from "react";

function CounterTriple() {
  const [count, setCount] = useState(0);

  // تحديث خاطئ: سيزيد العداد بمقدار 1 فقط وليس 3!
  const buggyAddThree = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // تحديث سليم بالدالة الوظيفية: سيزيد العداد بمقدار 3 دائماً وبدقة!
  const correctAddThree = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3">
      <p className="text-sm font-bold">العداد: {count}</p>
      <div className="flex gap-2">
        <button onClick={buggyAddThree} className="px-3 py-1 bg-rose-600 rounded text-xs">
          إضافة 3 (بالطريقة الخاطئة)
        </button>
        <button onClick={correctAddThree} className="px-3 py-1 bg-emerald-600 rounded text-xs">
          إضافة 3 (بالدالة الوظيفية السليمة)
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// سلة تسوق تفاعلية تزيد وتنقص وتصفر الكميات بأمان وظيفي كامل
import { useState } from "react";

export function SafeCartQuantityManager() {
  const [quantity, setQuantity] = useState(1);

  // دالة زيادة آمنة تعتمد على prev
  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, 99)); // حد أقصى 99 قطعة
  };

  // دالة إنقاص آمنة تمنع النزول تحت 1
  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1)); // حد أدنى قطعة واحدة
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto text-white space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-sm text-slate-100">الكمية المطلوبة</h4>
        <span className="text-xs text-indigo-400 font-mono">Functional Updater</span>
      </div>

      <div className="flex items-center justify-center gap-4 py-3 bg-slate-950/80 rounded-xl border border-slate-800">
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed font-black text-lg transition-all"
        >
          -
        </button>

        <span className="text-2xl font-black font-mono text-emerald-400 w-12 text-center">
          {quantity}
        </span>

        <button
          onClick={increment}
          disabled={quantity >= 99}
          className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed font-black text-lg transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
}`,
      output: "في المثال السليم، عند النقر على 'إضافة 3'، تمرر كل خطوة ناتجها للخطوة التالية في طابور React الداخلي، فيقفز العداد من 0 إلى 3 مباشرة دون أي فقدان.",
      commonMistakes: [
        {
          mistake: "تكرار setCount(count + 1) عدة مرات في نفس الحدث معتقداً أن كل سطر يرى تحديث السطر الذي قبله.",
          why: "في نفس الرندر، قيمة count ثابتة كثابت فيزيائي (State Snapshot)؛ فإذا كانت count = 0، فإن كل الأسطر تستدعي setCount(0 + 1) وتضبط النتيجة على 1!",
          fix: "استخدم دائماً الدالة الوظيفية: setCount(prev => prev + 1)."
        }
      ],
      bestPractices: [
        "القاعدة الذهبية: إذا كانت القيمة الجديدة تعتمد بأي شكل على القيمة الحالية القديمة للحالة، استخدم صيغة الدالة الوظيفية (prev => next).",
        "سمِّ معامل القيمة السابقة باسم واضح مثل prev أو prevCount لتمييزه فوراً."
      ],
      infographicCard: {
        type: "queue-diagram",
        title: "طابور معالجة التحديثات الوظيفية في React",
        stages: [
          "القيمة المبدئية: 0",
          "setCount(prev => prev + 1) -> يضع في الطابور: (+ 1) -> تصبح 1",
          "setCount(prev => prev + 1) -> يضع في الطابور: (+ 1) -> تصبح 2",
          "setCount(prev => prev + 1) -> يضع في الطابور: (+ 1) -> تصبح 3",
          "النتيجة النهائية الصادرة للمتصفح: 3 ✅"
        ]
      }
    },
    {
      id: "6.2.e",
      title: "تحديث النصوص والأرقام والقيم المنطقية",
      englishTerm: "Updating Primitives (Strings, Numbers, Booleans)",
      description: "إدارة وتحديث البيانات الأولية (Primitives) في الحالة. تتميز البيانات الأولية في JavaScript بأنها قيم غير قابلة للتغيير في أصلها (Immutable by nature)، لذا فإن تحديثها في React يتم مباشرة باستبدال القيمة القديمة بالكامل بالقيمة الجديدة.",
      realLifeAnalogy: "مثل تغيير قناة التلفزيون بجهاز التحكم؛ القناة القديمة (رقم 5) تُستبدل بالكامل بالقناة الجديدة (رقم 8) دون تعديل أجزاء داخلية في رقم 5 نفسه.",
      whyItMatters: "هي أكثر أنواع الحالات استخداماً في واجهات التطبيقات: نصوص البحث، أرقام الصفحات والعدادات، وحالات الإظهار والإخفاء المنطقية (Modals/Dropdowns toggling).",
      syntax: "const [isOpen, setIsOpen] = useState(false);\nsetIsOpen(prev => !prev);",
      simpleExample: `// أمثلة بسيطة للأنواع الأولية الثلاثة
import { useState } from "react";

function PrimitivesDemo() {
  // 1. حالة نصية
  const [text, setText] = useState("نص افتراضي");
  // 2. حالة رقمية
  const [score, setScore] = useState(10);
  // 3. حالة منطقية
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <p>النص: {text} <button onClick={() => setText("نص جديد")} className="px-2 py-0.5 bg-indigo-600 rounded mr-2">تغيير</button></p>
      <p>النقاط: {score} <button onClick={() => setScore(s => s + 5)} className="px-2 py-0.5 bg-emerald-600 rounded mr-2">+5 نقاط</button></p>
      <p>الرؤية: {isVisible ? "ظاهر" : "مخفي"} <button onClick={() => setIsVisible(v => !v)} className="px-2 py-0.5 bg-rose-600 rounded mr-2">تبديل</button></p>
    </div>
  );
}`,
      advancedExample: `// مكون صندوق إعدادات المستخدم المتكامل للبيانات الأولية
import { useState } from "react";

export function UserSettingsDashboard() {
  // حالة نصية: اسم النطاق
  const [domainName, setDomainName] = useState("my-startup.com");
  // حالة رقمية: نسبة استهلاك الذاكرة
  const [bandwidthLimit, setBandwidthLimit] = useState(50);
  // حالة منطقية: تفعيل الحماية الثنائية 2FA
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-5">
      <h3 className="font-bold text-base text-slate-100">لوحة التحكم في الإعدادات الأولية</h3>

      {/* حقل نصي */}
      <div className="space-y-1">
        <label className="text-xs text-slate-400">اسم النطاق المخصص:</label>
        <input 
          type="text"
          value={domainName}
          onChange={(e) => setDomainName(e.target.value)}
          className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
        />
      </div>

      {/* شريط تمرير رقمي */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">الحد الأقصى لنقل البيانات:</span>
          <span className="font-mono text-emerald-400 font-bold">{bandwidthLimit} GB</span>
        </div>
        <input 
          type="range"
          min="10"
          max="200"
          value={bandwidthLimit}
          onChange={(e) => setBandwidthLimit(Number(e.target.value))}
          className="w-full accent-indigo-500 cursor-pointer"
        />
      </div>

      {/* تبديل منطقي Toggle */}
      <div className="flex justify-between items-center pt-3 border-t border-slate-800">
        <div>
          <span className="text-xs font-bold block text-slate-200">المصادقة الثنائية (2FA)</span>
          <span className="text-[10px] text-slate-500">حماية إضافية عبر تطبيق Google Authenticator</span>
        </div>
        <button
          onClick={() => setTwoFactorAuth((prev) => !prev)}
          className={\`w-12 h-6 rounded-full transition-colors relative p-0.5 \${
            twoFactorAuth ? "bg-emerald-600" : "bg-slate-700"
          }\`}
        >
          <div className={\`w-5 h-5 rounded-full bg-white transition-transform \${
            twoFactorAuth ? "translate-x-6" : "translate-x-0"
          }\`} />
        </button>
      </div>
    </div>
  );
}`,
      output: "يتم تحديث كل نوع بيانات أولي بأمان وبساطة: النصوص من خلال e.target.value، والأرقام بتحويلها بـ Number()، والمنطق بتبديله بـ !prev.",
      commonMistakes: [
        {
          mistake: "تخزين قيمة حقل الإدخال الرقمي كنص String بدلاً من Number، مما يسبب أخطاء دمج مثل '10' + 5 = '105'!",
          why: "خاصية e.target.value تعيد نصوصاً دائماً حتى لو كان الحقل type='number'.",
          fix: "حول القيمة دائماً إلى رقم باستخدام Number(e.target.value) أو parseInt()."
        }
      ],
      bestPractices: [
        "استخدم الصيغة السهمية المختصرة لتبديل القيم المنطقية: setOpen(prev => !prev).",
        "حافظ على بساطة الحالة وتجنب تحويل كل شيء لكائن معقد إذا كانت بيانات أولية مستقلة."
      ],
      infographicCard: {
        type: "cards-grid",
        title: "أنماط تحديث الأنواع الأولية (Primitives)",
        cards: [
          { type: "النصوص String", pattern: "setName(e.target.value)" },
          { type: "الأرقام Number", pattern: "setCount(prev => prev + 1)" },
          { type: "المنطق Boolean", pattern: "setOpen(prev => !prev)" }
        ]
      }
    },
    {
      id: "6.2.f",
      title: "تحديث الكائنات دون تعديل الأصل",
      englishTerm: "Updating Objects Immutably with Spread Operator",
      description: "المبدأ الحاسم في React للتعامل مع الحالات التي تمثل كائنات (Objects). يُحظر تماماً تعديل خصائص الكائن الأصلي مباشرة (مثل user.name = 'X'). بدلاً من ذلك، يجب إنشاء كائن جديد تماماً في الذاكرة بنسخ الخصائص القديمة باستخدام معامل الانتشار (...Spread Operator) ثم استبدال الخاصية المراد تحديثها فقط.",
      realLifeAnalogy: "مثل تجديد رخصة القيادة؛ لا تأخذ قلم حبر لتشطب تاريخ الانتهاء على بطاقتك البلاستيكية القديمة، بل تصدر لك إدارة المرور بطاقة بلاستيكية جديدة تماماً تحمل نفس اسمك ورقم هويتك وصورتك، ولكن بتاريخ سريان جديد.",
      whyItMatters: "تعتمد React على مقارنة مرجع الكائن في الذاكرة (Shallow Equality Check). إذا قمت بتعديل الكائن في مكانه، فلن يتغير عنوان الذاكرة للكائن، وستعتقد React أنه لم يتغير، فلن تُحدث الواجهة إطلاقاً!",
      syntax: "setUser(prev => ({ ...prev, name: 'فهد' }));",
      simpleExample: `// استيراد useState
import { useState } from "react";

function UserProfileCard() {
  // حالة كائن تحتوي على بيانات المستخدم
  const [user, setUser] = useState({ name: "منى", city: "الرياض", age: 24 });

  // دالة تحديث المدينة بأمان
  function changeCity() {
    // خطوة 1: نسخ الكائن القديم بـ ... ثم كتابة الخاصية الجديدة
    setUser({ ...user, city: "جدة" });
  }

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <p>الاسم: {user.name} | المدينة: {user.city} | العمر: {user.age}</p>
      <button onClick={changeCity} className="px-3 py-1 bg-indigo-600 rounded font-bold">
        الانتقال إلى جدة
      </button>
    </div>
  );
}`,
      advancedExample: `// مكون نموذج ملف شخصي متقدم يحدث الكائنات المتشعبة دون تعديل الأصل
import { useState } from "react";

export function ImmutableProfileEditor() {
  // كائن مستخدم يحوي كائنات متداخلة (Nested Object)
  const [profile, setProfile] = useState({
    fullName: "فيصل القاسم",
    email: "faisal@example.com",
    address: {
      country: "المملكة العربية السعودية",
      city: "الدمام",
      zipCode: "31411"
    }
  });

  // تحديث الحقول البسيطة
  const handleBasicChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // تحديث كائن متداخل بأمان هندسي كامل
  const handleCityChange = (newCity) => {
    setProfile((prev) => ({
      ...prev,
      // خطوة جوهرية: نسخ الكائن الداخلي أيضاً لمنع تعديل الأصل!
      address: {
        ...prev.address,
        city: newCity
      }
    }));
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">محرر الملف الشخصي (تحديث كائنات آمن)</h4>

      <div className="space-y-3 text-xs">
        <div>
          <label className="text-slate-400 block mb-1">الاسم الكامل:</label>
          <input 
            type="text"
            value={profile.fullName}
            onChange={(e) => handleBasicChange("fullName", e.target.value)}
            className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-200"
          />
        </div>

        <div>
          <label className="text-slate-400 block mb-1">المدينة (حقل متداخل):</label>
          <input 
            type="text"
            value={profile.address.city}
            onChange={(e) => handleCityChange(e.target.value)}
            className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-200"
          />
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] font-mono text-emerald-400">
        المعاينة: {profile.fullName} | {profile.address.city}, {profile.address.country}
      </div>
    </div>
  );
}`,
      output: "يتم نسخ الكائنات بالـ Spread Operator وتوليد مرجع جديد كلياً في الذاكرة، مما يجعل React تكتشف التغيير في جزء من الثانية وتعيد رسم الواجهة بدقة.",
      commonMistakes: [
        {
          mistake: "تعديل الكائن مباشرة ثم تمريره للـ Setter مثل: user.city = 'مكة'; setUser(user);.",
          why: "المتغير user ما زال يشير إلى نفس عنوان الذاكرة القديم! تفحص React المرجع (user === user) فتجده متطابقاً، فتتجاهل التحديث تماماً ولا تعيد الرندر!",
          fix: "اصنع دائماً كائناً جديداً: setUser({ ...user, city: 'مكة' })."
        }
      ],
      bestPractices: [
        "استخدم معامل الانتشار ...prev دائماً قبل كتابة الخصائص المراد تغييرها.",
        "انتبه للكائنات المتداخلة (Nested Objects)؛ تذكر أن Spread يقوم بنسخ سطحي فقط (Shallow Copy)، لذا يجب نسخ الكائنات الداخلية يدوياً كما وُضح في المثال المتقدم."
      ],
      infographicCard: {
        type: "code-comparison",
        title: "التحديث اللاتبديلي للكائنات (Immutability)",
        structure: [
          "❌ خطأ قاتل: state.name = 'علي' -> نفس المرجع في الذاكرة -> لا يحدث رندر!",
          "✅ الكود السليم: setState(prev => ({ ...prev, name: 'علي' })) -> مرجع جديد -> رندر فوري!"
        ]
      }
    },
    {
      id: "6.2.g",
      title: "تحديث المصفوفات دون تعديل الأصل",
      englishTerm: "Updating Arrays Immutably (Spread, filter, map)",
      description: "القواعد الذهبية لتعديل مصفوفات الحالة في React دون انتهاك مبدأ النقاء وعدم تعديل الأصل (Immutability). يُحظر استخدام الدوال التي تعدل المصفوفة في مكانها (Mutating methods مثل push, pop, shift, splice, sort, reverse)؛ وبدلاً منها نستخدم الدوال النقية التي ترجع مصفوفة جديدة تماماً (Non-mutating methods مثل [...arr], filter, map, concat, slice).",
      realLifeAnalogy: "مثل كتابة مسودة جديدة لقائمة المشتريات على ورقة بيضاء نظيفة بدلاً من الشطب والحك على الورقة القديمة حتى تتمزق.",
      whyItMatters: "حماية سجل الحالة في الذاكرة، وضمان عمل أدوات التصحيح (Time Travel Debugging)، وتجنب الأخطاء الغامضة الناتجة عن تعديل مصفوفات يقرؤها أكثر من مكون في نفس الوقت.",
      syntax: "// إضافة: [...prev, newItem]\n// حذف: prev.filter(item => item.id !== targetId)\n// تعديل: prev.map(item => item.id === targetId ? updated : item)",
      simpleExample: `// أمثلة العمليات الثلاث الأساسية على المصفوفات
import { useState } from "react";

function SimpleArrayDemo() {
  const [tags, setTags] = useState(["تقنية", "تصميم"]);

  // 1. إضافة عنصر جديد
  const addTag = () => setTags([...tags, "برمجة"]);

  // 2. حذف العنصر الأول
  const removeFirst = () => setTags(tags.filter((_, i) => i !== 0));

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <p>الوسوم: {tags.join(" | ")}</p>
      <div className="flex gap-2">
        <button onClick={addTag} className="px-2 py-1 bg-indigo-600 rounded">إضافة وسم</button>
        <button onClick={removeFirst} className="px-2 py-1 bg-rose-600 rounded">حذف أول وسم</button>
      </div>
    </div>
  );
}`,
      advancedExample: `// جدول مرجعي تفاعلي يقارن بين دوال المصفوفات المحظورة والموصى بها في React
export function ArrayImmutabilityCheatTable() {
  const operations = [
    { op: "إضافة عنصر في النهاية", bad: "arr.push(item) ❌", good: "[...arr, item] ✅" },
    { op: "إضافة عنصر في البداية", bad: "arr.unshift(item) ❌", good: "[item, ...arr] ✅" },
    { op: "حذف عنصر محدد", bad: "arr.splice(index, 1) ❌", good: "arr.filter(it => it.id !== id) ✅" },
    { op: "تعديل عنصر محدد", bad: "arr[index] = newItem ❌", good: "arr.map(it => it.id === id ? newItem : it) ✅" },
    { op: "فرز وترتيب العناصر", bad: "arr.sort() ❌", good: "[...arr].sort() ✅" },
    { op: "عكس الترتيب", bad: "arr.reverse() ❌", good: "[...arr].reverse() ✅" }
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-white p-4">
      <h4 className="font-bold text-sm text-indigo-400 mb-3">الدليل المرجعي الصارم لتحديث المصفوفات في React</h4>
      <table className="w-full text-right text-xs">
        <thead className="bg-slate-950/60 text-slate-400">
          <tr>
            <th className="p-2.5">العملية</th>
            <th className="p-2.5 text-rose-400">محظور (تعديل الأصل Mutation)</th>
            <th className="p-2.5 text-emerald-400">موصى به في React (نسخة نقية)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 font-mono">
          {operations.map((row, i) => (
            <tr key={i} className="hover:bg-slate-800/50">
              <td className="p-2.5 font-sans font-medium text-slate-200">{row.op}</td>
              <td className="p-2.5 text-rose-300 bg-rose-950/10">{row.bad}</td>
              <td className="p-2.5 text-emerald-300 bg-emerald-950/10">{row.good}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
      output: "باستخدام الدوال النقية (filter و map و [...arr])، يتم إنشاء مصفوفة جديدة في كل تحديث مما يضمن إطلاق عملية التصيير بسلاسة مطلقة.",
      commonMistakes: [
        {
          mistake: "استخدام arr.push(item) ثم استدعاء setArr(arr).",
          why: "دالة push تعدل نفس المصفوفة الأصلية وتعيد طول المصفوفة الجديد (رقم) ولا تنشئ مصفوفة جديدة، فلا تستشعر React التغيير!",
          fix: "استخدم دائماً معامل الانتشار: setArr([...arr, item])."
        }
      ],
      bestPractices: [
        "احفظ الجدول المرجعي أعلاه عن ظهر قلب: الإضافة بـ Spread، الحذف بـ filter، التعديل بـ map، والفرز بنسخ المصفوفة أولاً بـ [...arr].sort()."
      ],
      infographicCard: {
        type: "summary-table",
        title: "الثالوث المقدس لتحديث مصفوفات React",
        headers: ["الهدف", "الدالة السحرية"],
        rows: [
          ["الإضافة", "[...prev, newElement]"],
          ["الحذف", "prev.filter(item => item.id !== id)"],
          ["التعديل", "prev.map(item => item.id === id ? updated : item)"]
        ]
      }
    },
    {
      id: "6.2.h",
      title: "إضافة العناصر وحذفها وتعديلها",
      englishTerm: "Adding, Removing, and Updating List Items in State",
      description: "التطبيق العملي الكامل لإدارة القوائم المعقدة من الكائنات في حالة المكون (State List CRUD): إضافة عنصر جديد بمعرف فريد مستقر، حذف عنصر بالنقر على زره المخصص، وتعديل خاصية واحدة في عنصر محدد (مثل تغيير حالة اكتمال المهمة isCompleted).",
      realLifeAnalogy: "مثل مدير دفتر المهام التنفيذي؛ يضيف سطراً جديداً لمهمة طارئة، ويشطب سطراً لمهمة أُلغيت، ويضع علامة صح أمام مهمة أُنجزت.",
      whyItMatters: "هي جوهر عمل 90% من تطبيقات الويب التجارية (قوائم المهام، إدارة المخازن، سلات الشراء، جداول الموظفين، والتعليقات).",
      syntax: "// الإضافة\nsetList(prev => [...prev, { id: crypto.randomUUID(), title }]);\n// الحذف\nsetList(prev => prev.filter(it => it.id !== id));\n// التعديل\nsetList(prev => prev.map(it => it.id === id ? { ...it, done: !it.done } : it));",
      simpleExample: `// تطبيق قائمة مهام مصغر يجمع الإضافة والحذف والتبديل
import { useState } from "react";

function MiniTodoApp() {
  const [todos, setTodos] = useState([
    { id: "1", text: "تعلم React State", done: true }
  ]);

  // إضافة
  const addTodo = () => {
    setTodos([...todos, { id: Date.now().toString(), text: "مهمة جديدة", done: false }]);
  };

  // تبديل الإنجاز
  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  // حذف
  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <button onClick={addTodo} className="px-3 py-1 bg-indigo-600 rounded font-bold">+ إضافة</button>
      {todos.map(t => (
        <div key={t.id} className="flex justify-between items-center p-2 bg-slate-800 rounded">
          <span onClick={() => toggleTodo(t.id)} className={t.done ? "line-through text-slate-400" : ""}>{t.text}</span>
          <button onClick={() => deleteTodo(t.id)} className="text-rose-400 font-bold">✕</button>
        </div>
      ))}
    </div>
  );
}`,
      advancedExample: `// تطبيق إدارة قائمة أجهزة متكامل (إضافة، تعديل السعر، تبديل التوفر، وحذف)
import { useState } from "react";

export function DeviceInventoryManager() {
  const [devices, setDevices] = useState([
    { id: "dev-1", name: "شاشة احترافية 4K", price: 2199, available: true },
    { id: "dev-2", name: "فأرة لاسلكية مريحة", price: 349, available: false }
  ]);
  const [newDeviceName, setNewDeviceName] = useState("");
  const [newDevicePrice, setNewDevicePrice] = useState("");

  // 1. إضافة جهاز جديد
  const handleAddDevice = (e) => {
    e.preventDefault();
    if (!newDeviceName.trim()) return;

    const newEntry = {
      id: \`dev-\${Date.now()}\`,
      name: newDeviceName,
      price: Number(newDevicePrice) || 100,
      available: true
    };

    setDevices((prev) => [...prev, newEntry]);
    setNewDeviceName("");
    setNewDevicePrice("");
  };

  // 2. تعديل حالة التوفر (Toggle availability)
  const handleToggleAvailable = (id) => {
    setDevices((prev) =>
      prev.map((dev) =>
        dev.id === id ? { ...dev, available: !dev.available } : dev
      )
    );
  };

  // 3. حذف جهاز بالمعرف
  const handleDeleteDevice = (id) => {
    setDevices((prev) => prev.filter((dev) => dev.id !== id));
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-5 max-w-lg mx-auto">
      <h4 className="font-bold text-base text-indigo-400">إدارة مخزون الأجهزة (CRUD كامل)</h4>

      {/* نموذج الإضافة */}
      <form onSubmit={handleAddDevice} className="flex gap-2">
        <input 
          type="text"
          value={newDeviceName}
          onChange={(e) => setNewDeviceName(e.target.value)}
          placeholder="اسم الجهاز..."
          className="flex-1 p-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
          required
        />
        <input 
          type="number"
          value={newDevicePrice}
          onChange={(e) => setNewDevicePrice(e.target.value)}
          placeholder="السعر..."
          className="w-24 p-2 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white"
          required
        />
        <button type="submit" className="px-4 py-2 bg-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-500">
          إضافة
        </button>
      </form>

      {/* قائمة الأجهزة */}
      <div className="space-y-2">
        {devices.map((dev) => (
          <div key={dev.id} className="flex items-center justify-between p-3 bg-slate-800/80 rounded-xl text-xs">
            <div>
              <p className="font-bold text-slate-100">{dev.name}</p>
              <p className="text-[11px] font-mono text-emerald-400">{dev.price} ر.س</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleToggleAvailable(dev.id)}
                className={\`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all \${
                  dev.available ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-700 text-slate-400"
                }\`}
              >
                {dev.available ? "متوفر بالمستودع" : "غير متاح"}
              </button>
              <button
                onClick={() => handleDeleteDevice(dev.id)}
                className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-700 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "إمكانية إضافة الأجهزة الجديدة بسلاسة، وتغيير حالتها من متوفر إلى غير متاح بنقرة زر دون مساس ببقية العناصر، وحذف أي جهاز فوراً مع الحفاظ على استقرار الواجهة.",
      commonMistakes: [
        {
          mistake: "نسيان إعادة العنصر القديم في فرع else داخل دالة map مثل: list.map(item => { if (item.id === id) return updated; })!",
          why: "إذا نسيت كتابة : item في الطرف الآخر، فإن map سترجع undefined لكافة العناصر الأخرى التي لم يطابقها الشرط، مما يدمر القائمة ويمسح بياناتها!",
          fix: "اكتب دائماً المعامل الثلاثي الكامل: list.map(item => item.id === targetId ? updated : item)."
        }
      ],
      bestPractices: [
        "استخدم دوال سهمية مختصرة بسطر واحد لعمليات التحديث: prev => prev.map(...).",
        "احرص دائماً على أن يكون لكل عنصر جديد يضاف إلى المصفوفة معرف فريد دائم (id: crypto.randomUUID() أو تاريخ زمني دقيق)."
      ],
      infographicCard: {
        type: "code-pattern",
        title: "النمط المعماري الكامل لتحديث عنصر في مصفوفة بالـ map",
        pattern: "setList(prev => prev.map(item => item.id === targetId ? { ...item, modifiedProp: newValue } : item))"
      }
    },
    {
      id: "6.2.i",
      title: "استخدام عدة متغيرات State",
      englishTerm: "Multiple State Variables vs Single Object State",
      description: "المقارنة الهندسية والمعمارية بين تقسيم حالة المكون إلى عدة متغيرات مستقلة عبر استدعاءات متعددة لـ useState، مقابل جمع كافة المتغيرات في كائن واحد كبير. في React الحديثة، يوصى بفصل الحالات غير المترابطة إلى متغيرات منفصلة لتسهيل القراءة وتجنب تعقيدات نسخ الكائنات.",
      realLifeAnalogy: "مثل تنظيم أدوات المكتب؛ وضع الأقلام في مقلمة مستقلة، والأوراق في درج منفصل، والمقص والدباسة في علبة أخرى، بدلاً من تكديس كل الأدوات في صندوق واحد كبير يجبرك على تفريغه بالكامل في كل مرة تبحث فيها عن قلم.",
      whyItMatters: "الفصل يجعل الكود أبسط بمراحل؛ فلست مضطراً لعمل ...prev في كل مرة تغير فيها حقل بحث أو زر تبديل، كما يسهل لاحقاً استخراج الحالات المستقلة إلى Custom Hooks.",
      syntax: "// موصى به: حالات منفصلة مستقلة\nconst [query, setQuery] = useState('');\nconst [page, setPage] = useState(1);\nconst [isLoading, setIsLoading] = useState(false);",
      simpleExample: `// مكون يستخدم 3 حالات منفصلة ونظيفة
import { useState } from "react";

function MultiStateSearch() {
  // حالة نص البحث
  const [searchTerm, setSearchTerm] = useState("");
  // حالة رقم الصفحة
  const [pageNumber, setPageNumber] = useState(1);
  // حالة حالة التحميل
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <input 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="ابحث هنا..."
        className="p-1 bg-slate-800 rounded text-white"
      />
      <p>الصفحة: {pageNumber} <button onClick={() => setPageNumber(p => p + 1)} className="px-2 py-0.5 bg-indigo-600 rounded">التالية</button></p>
      <p>حالة التحميل: {isLoading ? "جارٍ الجلب..." : "جاهز"}</p>
    </div>
  );
}`,
      advancedExample: `// قاعدة القرار المعماري: متى نفصل ومتى نجمع في كائن واحد؟
import { useState } from "react";

export function StateArchitectureAdvisor() {
  // 1. حالات منفصلة: تتغير بشكل مستقل في أوقات مختلفة
  const [filterQuery, setFilterQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 2. كائن موحد: بيانات تتغير معاً كوحدة منطقية واحدة مترابطة (مثل إحداثيات أو أبعاد)
  const [position, setPosition] = useState({ x: 100, y: 250 });

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">القاعدة المعمارية: فصل الحالات مقابل دمجها</h4>
      
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-1">
          <p className="font-bold text-emerald-400">✅ افصلها لعدة useState إذا:</p>
          <ul className="text-slate-300 text-[11px] space-y-1 list-disc list-inside">
            <li>كانت البيانات تتغير في أوقات وأحداث مختلفة.</li>
            <li>كانت أنواع البيانات غير متجانسة (نص + بوليان + رقم).</li>
            <li>تريد استخراج المنطق لاحقاً إلى Custom Hook.</li>
          </ul>
        </div>

        <div className="p-3 bg-indigo-950/20 border border-indigo-800/40 rounded-xl space-y-1">
          <p className="font-bold text-indigo-400">📦 اجمعها في كائن واحد إذا:</p>
          <ul className="text-slate-300 text-[11px] space-y-1 list-disc list-inside">
            <li>كانت البيانات تتغير معاً دائماً (مثل x و y).</li>
            <li>كانت تمثل بيانات نموذج متكامل (مثل حقول بطاقة الدفع).</li>
            <li>كانت معقدة لدرجة تفضيل استخدام useReducer بدلاً منها.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}`,
      output: "يقدم المكون توجيهاً معمارياً عملياً؛ فصل الحالات المستقلة يقلل تعقيد الأكواد بنسبة تزيد عن 50% ويمنع أخطاء نسيان نسخ الخصائص الأخرى.",
      commonMistakes: [
        {
          mistake: "وضع كافة حالات التطبيق في كائن عملاق واحد: const [state, setState] = useState({ a, b, c, d, e, f, g }) كما كان شائعاً في class components القديمة.",
          why: "في المكونات الوظيفية، دالة setState لا تقوم بالدمج التلقائي (No automatic merging) كما كانت تفعل this.setState، مما يجبرك على كتابة ...prev في كل مكان ويزيد احتمالية مسح بيانات أخرى بالخطأ!",
          fix: "قسّم الكائن الكبير إلى حالات useState صغيرة ومركزة."
        }
      ],
      bestPractices: [
        "اجعل حالتك ذرية (Atomic State)؛ كل جزء من المعلومات يمثل فكرة واحدة مستقلة له خطاف useState مخصص.",
        "إذا وجدت نفسك تدير أكثر من 5 متغيرات حالة مترابطة داخل نفس المكون، فكر في الترقية إلى خطاف useReducer."
      ],
      infographicCard: {
        type: "decision-matrix",
        title: "مصفوفة اتخاذ القرار لحالة المكون",
        options: [
          { if: "حقل بحث + حالة نافذة منبثقة", then: "متغيران منفصلان: useState('') و useState(false)" },
          { if: "إحداثيات نقطة {x, y}", then: "كائن موحد: useState({x: 0, y: 0})" },
          { if: "نموذج تسجيل بـ 10 حقول", then: "كائن موحد أو خطاف useReducer" }
        ]
      }
    },
    {
      id: "6.2.j",
      title: "مفهوم State Snapshot",
      englishTerm: "State as a Snapshot in Time & Render Closures",
      description: "المفهوم الفلسفي والفيزيائي الأعمق لكيفية عمل الحالة في React. متغير الحالة (State) لا يتغير كمتغير حي أثناء تنفيذ دالة المكون، بل هو عبارة عن 'لقطة ثابتة' (Snapshot) مأخوذة في زمن تشغيل ذلك الرندر المحدد. كل عملية تصيير تمتلك قيم حالتها الخاصة، وتبقى تلك القيم ثابتة داخل معالجات الأحداث والدوال المنفذة في ذلك الرندر مهما تغيرت الحالة لاحقاً.",
      realLifeAnalogy: "مثل الصور الفوتوغرافية في ألبوم الذكريات؛ صورتك وأنت في سن العاشرة هي لقطة زمنية ثابتة للماضي. حتى لو كبرت اليوم وأصبحت في سن الثلاثين وتغير مظهرك، فإن صورتك القديمة في الألبوم ستظل تظهرك في سن العاشرة ولن تتغير صورتها المطبوعة أبداً.",
      whyItMatters: "فهم هذا المفهوم يفسر لماذا لا تتغير قيمة count فوراً في السطر التالي لـ setCount، ولماذا تحتفظ دوال setTimeout بالقيمة التي كانت موجودة وقت النقر حتى لو تغيرت الحالة بعدها بثوانٍ.",
      syntax: "// الحالة لقطة ثابتة في زمن الرندر:\nconst handleClick = () => {\n  setCount(count + 1); // يجدول رندراً جديداً بلقطة جديدة\n  console.log(count);  // يطبع القيمة الحالية للقطة الحالية!\n};",
      simpleExample: `// مثال يثبت أن الحالة لقطة ثابتة لا تتغير فوراً
import { useState } from "react";

function SnapshotProof() {
  const [number, setNumber] = useState(0);

  const testSnapshot = () => {
    // نطلب تغيير الرقم إلى 5
    setNumber(5);
    // نطبع الرقم في السطر التالي مباشرة
    alert(\`القيمة المطبوعة فوراً في هذه اللقطة هي: \${number}\`);
    // المفاجأة: ستظهر القيمة 0 وليس 5! لأن الرندر الحالي لقطته تحمل 0!
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <p>الرقم الحالي: {number}</p>
      <button onClick={testSnapshot} className="px-3 py-1 bg-indigo-600 rounded font-bold">
        اختبار اللقطة الزمنية
      </button>
    </div>
  );
}`,
      advancedExample: `// تجربة زمنية مع setTimeout تثبت احتفاظ الدالة بلقطة زمن النقر
import { useState } from "react";

export function TimeTravelSnapshotDemo() {
  const [count, setCount] = useState(0);

  const handleDelayedAlert = () => {
    // جدولة تنبيه بعد 3 ثوانٍ
    setTimeout(() => {
      // سيطبع التنبيه القيمة التي كانت موجودة لحظة الضغط بالضبط!
      alert(\`اللقطة الزمنية المحفوظة في وقت الضغط كانت: \${count}\`);
    }, 3000);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">مختبر اللقطة الزمنية والـ Closure</h4>
      <p className="text-xs text-slate-300">
        العداد الحالي في الشاشة: <span className="text-xl font-bold font-mono text-emerald-400">{count}</span>
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold transition-all"
        >
          زيادة العداد +1 فوراً
        </button>

        <button
          onClick={handleDelayedAlert}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
        >
          تنبيه مؤجل (بعد 3 ثوانٍ)
        </button>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
        💡 <strong>جرّب هذا الاختبار المثير:</strong> اضغط زر 'تنبيه مؤجل' عندما يكون العداد 0، ثم اضغط زر 'زيادة العداد' 5 مرات بسرعة! ستلاحظ بعد 3 ثوانٍ أن التنبيه يخبرك بأن القيمة هي 0! لأن الدالة التقطت لقطة الرندر وقت النقر واحتفظت بها في الذاكرة (Closure).
      </div>
    </div>
  );
}`,
      output: "حتى لو أصبح العداد 5 في واجهة المستخدم، يخرج التنبيه المؤجل بالقيمة 0 بالضبط، مما يثبت بالدليل القاطع أن كل رندر يمتلك لقطته الخاصة المستقلة من المتغيرات.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن setCount تغير قيمة المتغير count في نفس السطر كما في المتغيرات العادية.",
          why: "المتغير count معرّف بـ const! وهو ثابت في نطاق دالة المكون الحالية ولا يمكن تعديله، بل يُستدعى المكون من جديد في الدورة القادمة بمتغير const جديد يحمل اللقطة التالية.",
          fix: "تذكر دائماً: 'State is a Snapshot'. الكود الحالي يرى لقطة الماضي، والـ Setter يُحضر لقطة المستقبل."
        }
      ],
      bestPractices: [
        "إذا كنت بحاجة لقراءة أحدث قيمة تم تحديثها داخل دالة متتالية دون انتظار الرندر، احفظها في متغير محلي: const nextVal = count + 1; setCount(nextVal); sendToServer(nextVal);.",
        "إذا كنت بحاجة لقيمة حية متغيرة باستمرار لا تتجمد داخل الـ Closures ولا تطلق إعادة رندر، فكر في استخدام خطاف useRef."
      ],
      infographicCard: {
        type: "filmstrip-diagram",
        title: "فيلم لقطات الحالة (State Snapshots Filmstrip)",
        frames: [
          "🎬 إطار الرندر 1: { count: 0 } -> النقرة تأخذ لقطة '0' وتجدول التالي",
          "🎬 إطار الرندر 2: { count: 1 } -> كل المتغيرات في هذا الإطار ترى '1'",
          "🎬 إطار الرندر 3: { count: 2 } -> شاشة المتصفح تعرض لقطة '2' الحالية"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q6-2-1",
      question: "ماذا سيحدث لواجهة المستخدم إذا قمت بتعديل كائن الحالة مباشرة دون Setter، مثل: user.name = 'فهد'؟",
      options: [
        "ستقوم React بتحديث الواجهة فوراً بسرعة فائقة",
        "ستتغير القيمة في ذاكرة جافاسكريبت ولكن لن يتم إعادة تصيير المكون ولن يشعر المتصفح بأي تغيير على الشاشة",
        "سيظهر خطأ برمجي أحمر يوقف تشغيل المتصفح بالكامل",
        "سيتم مسح بيانات المستخدم من التخزين المحلي"
      ],
      correctAnswer: 1,
      explanation: "تعتمد React على استدعاء دوال الـ Setter لجدولة عملية إعادة التصيير؛ تعديل الكائن مباشرة يغير الذاكرة خفية دون إشعار React، مما يبقي الواجهة جامدة على قيمتها القديمة."
    },
    {
      id: "q6-2-2",
      question: "لماذا نستخدم الصيغة الوظيفية setCount(prev => prev + 1) بدلاً من setCount(count + 1) عند تكرار التحديث؟",
      options: [
        "لأنها تستهلك مساحة تخزين أقل في بطاقة الشاشة",
        "لأن قيمة count في نفس الرندر ثابتة (Snapshot)، والصيغة الوظيفية تضمن استلام القيمة المحدثة في طابور العمليات المتتابعة",
        "لأن جافاسكريبت تحظر استخدام علامة الجمع + داخل معالجات الأحداث",
        "لا يوجد أي فرق حقيقي بينهما وهي مسألة تفضيل شكلي فقط"
      ],
      correctAnswer: 1,
      explanation: "في الرندر الواحد، count ثابت كلقطة زمنية؛ تكرار setCount(count + 1) يعتمد على نفس الرقم المكرر، بينما الدالة الوظيفية تستقبل دائماً أحدث قيمة حقيقية ناتجة عن التحديث السابق في الطابور."
    },
    {
      id: "q6-2-3",
      question: "ما الطريقة الصحيحة لحذف عنصر يحمل id معين من مصفوفة الحالة في React؟",
      options: [
        "arr.splice(index, 1) ثم setArr(arr)",
        "setArr(arr.filter(item => item.id !== id))",
        "arr.pop() ثم setArr(arr)",
        "delete arr[id]"
      ],
      correctAnswer: 1,
      explanation: "دالة filter هي دالة نقية (Non-mutating) تُنشئ وترجع مصفوفة جديدة تماماً مستثنى منها العنصر المستهدف، مما يحافظ على مبدأ الامتناع عن تعديل الأصل (Immutability)."
    }
  ],
  exercise: {
    id: "ex6-2",
    title: "بناء نظام سلة مشتريات ذكي يدعم العمليات اللاتبديلية (Immutability)",
    description: "المطلوب بناء مكون React تفاعلي باسم SmartCartManager يدير سلة تسوق تحتوي على منتجات متعددة. يجب توفير أزرار لزيادة كمية منتج محدد بأمان وظيفي (map)، وإنقاص كميته أو حذفه إذا وصلت الكمية إلى 0 بـ filter، وزر لإضافة منتج جديد بـ Spread، مع حساب إجمالي الفاتورة تلقائياً وعرض تنبيه مؤجل بـ setTimeout يوضح مفهوم اللقطة الزمنية (Snapshot).",
    starterCode: `export function SmartCartManager() {
  // اكتب كود الحالة وعمليات السلة هنا
  return (
    <div>
      {/* صمم واجهة السلة */}
    </div>
  );
}`,
    hints: [
      "استخدم مصفوفة كائنات للحالة الأولية: [{ id, name, price, qty }].",
      "في زيادة الكمية، استخدم map لتعديل qty للمنتج المطابق فقط.",
      "في إنقاص الكمية، إذا كانت qty === 1، استخدم filter لحذفه، وإلا قلل qty بـ map.",
      "احسب الإجمالي باستخدام دالة reduce على مصفوفة الحالة."
    ],
    solution: `import { useState } from "react";

// بيانات ابتدائية نموذجية للسلة
const INITIAL_ITEMS = [
  { id: "c-1", name: "لوحة مفاتيح ميكانيكية RGB", price: 450, qty: 1 },
  { id: "c-2", name: "فأرة ألعاب بدقة 20K DPI", price: 280, qty: 2 }
];

export function SmartCartManager() {
  const [cartItems, setCartItems] = useState(INITIAL_ITEMS);

  // 1. زيادة كمية منتج بأمان لاتبديلي (Immutably using map)
  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // 2. إنقاص الكمية أو الحذف التلقائي عند الوصول للصفر (filter + map)
  const handleDecrease = (id) => {
    setCartItems((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target && target.qty <= 1) {
        // إذا كانت الكمية 1 ونقصت، نحذف المنتج كلياً من السلة
        return prev.filter((item) => item.id !== id);
      }
      // تقليل الكمية للمنتج المطابق
      return prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      );
    });
  };

  // 3. إضافة منتج عشوائي جديد (Spread Operator)
  const handleAddNewItem = () => {
    const randomProduct = {
      id: \`c-\${Date.now()}\`,
      name: "سماعة رأس احترافية",
      price: 320,
      qty: 1
    };
    setCartItems((prev) => [...prev, randomProduct]);
  };

  // 4. اختبار مفهوم اللقطة الزمنية (Snapshot) مع تنبيه مؤجل
  const handleSnapshotTest = () => {
    const currentCount = cartItems.length;
    alert(\`تم التقاط لقطة السلة الحالية: عدد العناصر هو \${currentCount}. غير السلة الآن وسترى النتيجة بعد ثانيتين!\`);
    setTimeout(() => {
      alert(\`اللقطة المحفوظة داخل المؤقت الزمني كانت: \${currentCount} عناصر (ثابتة في الذاكرة Closure)!\`);
    }, 2000);
  };

  // حساب الإجمالي الكلي (حالة مشتقة لا تحتاج useState!)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto text-white space-y-5 font-sans">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-black text-slate-100">سلة المشتريات الذكية</h3>
          <p className="text-xs text-slate-400">تطبيق تفاعلي يجسد كافة قواعد الحالة واللاتبديلية</p>
        </div>
        <button
          onClick={handleAddNewItem}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/40"
        >
          + إضافة صنف
        </button>
      </div>

      {/* قائمة المنتجات في السلة */}
      {cartItems.length === 0 ? (
        <div className="p-8 text-center text-slate-400 border border-dashed border-slate-800 rounded-2xl">
          السلة خاوية تماماً! أضف بعض المنتجات للبدء.
        </div>
      ) : (
        <div className="space-y-2.5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-3 bg-slate-800/80 rounded-2xl text-xs">
              <div>
                <p className="font-bold text-slate-100">{item.name}</p>
                <p className="text-[11px] font-mono text-emerald-400">
                  {item.price} ر.س × {item.qty} = <span className="font-bold">{item.price * item.qty} ر.س</span>
                </p>
              </div>

              {/* أزرار زيادة ونقصان الكمية */}
              <div className="flex items-center gap-2 bg-slate-900 px-2 py-1 rounded-xl border border-slate-700">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 font-bold text-rose-400"
                >
                  -
                </button>
                <span className="font-mono font-bold w-4 text-center text-slate-200">{item.qty}</span>
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 font-bold text-emerald-400"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ملخص الفاتورة واختبار الـ Snapshot */}
      <div className="pt-4 border-t border-slate-800 space-y-3">
        <div className="flex justify-between items-center text-sm font-bold">
          <span>المبلغ الإجمالي المستحق:</span>
          <span className="text-xl font-mono text-emerald-400 font-black">{totalPrice.toLocaleString()} ر.س</span>
        </div>

        <button
          onClick={handleSnapshotTest}
          className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold border border-slate-700 transition-colors"
        >
          اختبار اللقطة الزمنية (Snapshot Demo) ⏱️
        </button>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان حالة useState في React",
    description: "الدليل المرئي الشامل لإدارة الذاكرة، مبادئ Immutability الصارمة، وفلسفة اللقطات الزمنية.",
    sections: [
      {
        heading: "1. قواعد الامتناع عن تعديل الأصل (Immutability)",
        bullets: [
          "حظر التعديل المباشر: obj.prop = val محظور تماماً؛ استخدم دائماً دالة الـ Setter.",
          "تحديث الكائنات: استخدم كائناً جديداً بنسخ الخصائص القديمة: { ...prev, key: value }.",
          "تحديث المصفوفات: الإضافة بـ [...arr, it]، الحذف بـ filter، والتعديل بـ map."
        ]
      },
      {
        heading: "2. التحديثات الوظيفية (Functional Updates)",
        bullets: [
          "صيغة prev: إلزامية عندما تعتمد القيمة الجديدة على السابقة (setCount(prev => prev + 1)).",
          "حماية الطابور: تمنع ضياع التحديثات المتتالية وتضمن معالجة متسلسلة صحيحة في الذاكرة."
        ]
      },
      {
        heading: "3. فلسفة اللقطة الزمنية (Snapshot)",
        bullets: [
          "ثبات الرندر: الحالة في كل رندر ثابتة كصورة فوتوغرافية لا تتغير في نفس النطاق.",
          "الاستدعاء المؤجل: الدوال المؤقتة (setTimeout) تحتفظ بلقطة اللحظة التي وُلدت فيها (Closure)."
        ]
      }
    ]
  }
};
