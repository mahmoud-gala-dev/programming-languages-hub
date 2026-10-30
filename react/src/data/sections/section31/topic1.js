// e:\KD\lang\react\src\data\sections\section31\topic1.js
// الموضوع الأول من القسم 31: مشروع عداد تفاعلي متقدم (Advanced Interactive Counter Project)

export const topic1 = {
  id: "topic-31-1",
  title: "مشروع عداد تفاعلي متقدم (Advanced Interactive Counter)",
  description: "بناء مشروع تطبيقي متكامل لعداد تفاعلي ذكي يتجاوز الزيادة والنقصان البسيطة إلى إدارة التاريخ الزمني (Undo/Redo History)، تعيين الحدود القصوى والدنيا، الخطوات المتغيرة (Dynamic Steps)، الحفظ التلقائي في LocalStorage، والتأثيرات الصوتية والبصرية التفاعلية.",
  subtopics: [
    {
      id: "31.1.a",
      title: "فكرة المشروع ومتطلباته الوظيفية (Project Requirements)",
      englishTerm: {
        term: "Project Scope & Functional Requirements",
        pronunciation: "بروجكت سكوب آند فانكشنال ريكوايرمنتس",
        meaning: "نطاق المشروع والمتطلبات الوظيفية والمعمارية للعداد المتقدم"
      },
      description: "على الرغم من أن تطبيق العداد (Counter) يُطرح عادة كتمرين أولي في React، إلا أن تحويله إلى مشروع إنتاجي احترافي يتطلب التفكير كمهندس برمجيات حقيقي. يتضمن نطاق المشروع: 1) إمكانية الزيادة والنقصان بخطوة قابلة للتخصيص (+1, +5, +10)؛ 2) تعيين حد أقصى وحد أدنى (Max / Min Limits) لمنع تجاوز النطاق؛ 3) سجل تاريخي للعمليات مع ميزة التراجع والتقدم (Undo / Redo History)؛ 4) إعادة الضبط (Reset) مع تأكيد للمستخدم؛ 5) حفظ القيمة وسجل العمليات محلياً في المتصفح عبر LocalStorage؛ 6) واجهة مستخدم تفاعلية متجاوبة بنسبة 100% مع دعم كامل للوحة المفاتيح وإمكانية الوصول (Accessibility).",
      realWorldAnalogy: "يشبه العداد المتقدم عداد التذاكر الذكي في بوابات المترو أو الملاعب الرياضية الكبرى؛ فهو لا يقتصر على حساب الرؤوس المارة، بل يسجل توقيت كل عملية دخول، يمنع تجاوز السعة القصوى للملعب، ويسمح لمشرف البوابة بالتراجع عن تسجيل تذكرة خاطئة بنقرة واحدة.",
      whyItMatters: "يُعد هذا المشروع التدريب العملي المثالي لترسيخ المفاهيم الجوهرية لإدارة الحالة (State Management)، ودورة حياة المكونات، وكتابة الخطافات المخصصة، والتعامل مع الآثار الجانبية (Side Effects) بأسلوب هندسي نظيف قبل الانتقال للمشاريع الأكثر تعقيداً.",
      syntax: "// نموذج حالة العداد المتقدم:\ninterface CounterState {\n  count: number;\n  step: number;\n  min: number;\n  max: number;\n  history: number[];\n  historyIndex: number;\n}",
      simpleExample: `// استعراض المتطلبات الوظيفية للعداد المتقدم في واجهة React
import React, { useState } from 'react';

export function SimpleCounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-center">
      <h4 className="text-xs font-bold text-slate-400 mb-2">عداد تفاعلي بسيط</h4>
      <div className="text-3xl font-black font-mono text-cyan-400 my-2">{count}</div>
      <div className="flex gap-2">
        <button onClick={() => setCount(c => c - 1)} className="flex-1 py-1.5 bg-slate-800 rounded font-bold text-xs">-</button>
        <button onClick={() => setCount(0)} className="px-3 py-1.5 bg-slate-800 rounded font-bold text-xs">إعادة ضبط</button>
        <button onClick={() => setCount(c => c + 1)} className="flex-1 py-1.5 bg-indigo-600 rounded font-bold text-xs">+</button>
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام العداد المتقدم مع تطبيق فحص الحدود وتخصيص الخطوة وسجل العمليات
import React, { useState } from 'react';

export function AdvancedCounterDemo() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(5);
  const minLimit = -50;
  const maxLimit = 100;

  const handleIncrement = () => {
    setCount(prev => Math.min(maxLimit, prev + step));
  };

  const handleDecrement = () => {
    setCount(prev => Math.max(minLimit, prev - step));
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
        <h4 className="font-bold text-sm text-indigo-400">عداد تفاعلي متقدم</h4>
        <span className="text-[10px] font-mono text-slate-500">نطاق: [{minLimit} إلى {maxLimit}]</span>
      </div>

      <div className="text-4xl font-black font-mono text-center text-cyan-400 my-4">
        {count}
      </div>

      <div className="mb-4">
        <label className="text-[11px] text-slate-400 block mb-1">مقدار الخطوة (Step): {step}</label>
        <div className="flex gap-2">
          {[1, 5, 10].map(s => (
            <button 
              key={s} 
              onClick={() => setStep(s)}
              className={\`flex-1 py-1 rounded text-xs font-bold \${step === s ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'}\`}
            >
              +{s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button 
          onClick={handleDecrement}
          disabled={count <= minLimit}
          className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-xl font-bold text-sm transition"
        >
          -{step}
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-3 py-2 bg-slate-950 border border-slate-800 hover:bg-slate-800 rounded-xl font-bold text-xs transition"
        >
          تصفير
        </button>
        <button 
          onClick={handleIncrement}
          disabled={count >= maxLimit}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 rounded-xl font-bold text-sm transition"
        >
          +{step}
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية بناء المتطلبات الوظيفية للعداد المتقدم؛ حيث يوفر تحكماً في مقدار الخطوة التراكمية، ويحمي التطبيق من تجاوز الحدود القصوى والدنيا، ويعطل الأزرار تلقائياً عند بلوغ حافة النطاق المحدد.",
      commonMistakes: [
        {
          mistake: "تحديث الحالة بالاعتماد المباشر على المتغير count + step بدلاً من دالة التحديث prev => prev + step.",
          why: "في سيناريوهات التحديث السريع أو الأحداث المتتابعة، قد تقرأ الدالة قيمة قديمة للحالة مما يؤدي لفقدان بعض الزيادات.",
          fix: "استخدم دائماً الدالة المرجعية setCount(prev => prev + step) لضمان دقة التحديث التراكمي."
        },
        {
          mistake: "تجاهل التحقق من الحدود القصوى والدنيا والسماح للمستخدم بالوصول لأرقام فلكية تكسر تخطيط الشاشة.",
          why: "الأرقام غير المحدودة قد تسبب تجاوزاً بصرياً في الواجهة وحالات غير منطقية للأعمال.",
          fix: "استخدم دوال Math.min و Math.max لحصر القيمة ضمن الحدود المسموح بها بدقة."
        }
      ],
      bestPractices: [
        "افصل منطق العمليات الرياضية في دوال مساعدة نقية خارج المكون.",
        "عطل أزرار الزيادة أو النقصان بصرياً وبرمجياً (disabled={true}) عند وصول العداد للحد الأقصى أو الأدنى.",
        "وفّر أزراراً سريعة لاختيار مقدار الخطوة الأكثر شيوعاً (+1, +5, +10).",
        "احرص على دعم لوحة المفاتيح عبر أسهم الاتجاهات (Up / Down Arrows)."
      ],
      visualInfographic: {
        title: "المتطلبات المعمارية للعداد المتقدم",
        description: "خريطة ميزات العداد التفاعلي الذكي",
        visualSteps: [
          "إدارة القيمة والحالة 🔢 (الرقم الحالي مع فحص الحدود Min/Max)",
          "الخطوة الديناميكية ⚡ (إمكانية القفز بمقدار 1 أو 5 أو 10)",
          "سجل التراجع والتقدم ⏱️ (Undo / Redo History Stack)",
          "الحفظ التلقائي في المتصفح 💾 (LocalStorage Persistence)",
          "سهولة الوصول والتحكم ♿ (دعم لوحة المفاتيح والأصوات التفاعلية)"
        ]
      }
    },
    {
      id: "31.1.b",
      title: "تخطيط المكونات وإدارة الحالة (Component Structure & State Architecture)",
      englishTerm: {
        term: "Component Breakdown & State Planning",
        pronunciation: "كومبوننت بريك داون آند ستيت بلانينغ",
        meaning: "تفكيك شجرة المكونات وتصميم هيكل إدارة الحالة المعقدة"
      },
      description: "قبل كتابة سطر واحد من كود الـ JSX، يتطلب النهج الهندسي الاحترافي رسم شجرة المكونات وتحديد أين ستعيش كل حالة برمجية (State Lifting & Placement). ينقسم مشروع العداد إلى: 1) المكون الحاوي المركزي CounterContainer؛ 2) مكون العرض البصري الرقمي CounterDisplay؛ 3) مكون أزرار العمليات الرئيسية ActionButtons؛ 4) شريط التحكم في الخطوة والحدود SettingsPanel؛ 5) مكون سجل التراجع والتقدم HistoryControls. لإدارة هذا التعقيد بسلاسة، يُنصح بتجميع الحالة في كائن موحد أو استخدام خطاف مخصص useAdvancedCounter يعزل كامل العمليات الرياضية وسجل الـ History بعيداً عن كود العرض.",
      realWorldAnalogy: "يشبه تخطيط المكونات المخطط الهندسي الأزرق (Blueprint) الذي يرسمه المهندس المعماري قبل بناء المنزل؛ يحدد فيه مكان غرفة المعيشة، ومسارات أسلاك الكهرباء، وموقع لوحة القواطع الرئيسية؛ فإذا كان المخطط متقناً، يتم تركيب الجدران والأسلاك بسلاسة دون هدم أو تعديل عشوائي.",
      whyItMatters: "التخطيط المسبق يمنع تضخم المكون الرئيسي (God Component) ويقضي على ظاهرة تعمق الخصائص (Prop Drilling)، ويجعل اختبار المكونات الفرعية كوحدات مستقلة أمراً في غاية السهولة والموثوقية.",
      syntax: "// هيكل خطاف إدارة حالة العداد المعقدة:\nfunction useAdvancedCounter(initialValue = 0) {\n  const [state, dispatch] = useReducer(counterReducer, initialValue);\n  return { state, increment, decrement, undo, redo, reset };\n}",
      simpleExample: `// استعراض تفكيك المكونات البسيطة للعداد
import React, { useState } from 'react';

// مكون فرعي نقي للعرض
function DisplayView({ val }) {
  return <div className="text-2xl font-bold font-mono text-emerald-400 py-2">{val}</div>;
}

// مكون فرعي للأزرار
function ButtonGroup({ onInc, onDec }) {
  return (
    <div className="flex gap-2">
      <button onClick={onDec} className="px-3 py-1 bg-slate-800 rounded text-xs font-bold">-</button>
      <button onClick={onInc} className="px-3 py-1 bg-indigo-600 rounded text-xs font-bold">+</button>
    </div>
  );
}

// المكون الحاوي المنسق
export function CounterStructureDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-center">
      <h5 className="text-xs text-slate-400">مكونات مفككة وفق مبدأ SRP</h5>
      <DisplayView val={count} />
      <ButtonGroup onInc={() => setCount(c => c + 1)} onDec={() => setCount(c => c - 1)} />
    </div>
  );
}`,
      advancedExample: `// خطاف مخصص متكامل لإدارة حالة العداد مع سجل التاريخ والتراجع (useCounterWithHistory)
import React, { useState } from 'react';

// الخطاف المخصص لعزل كامل منطق العداد والتاريخ
export function useCounterWithHistory(initialValue = 0) {
  // مصفوفة سجل الحالات التاريخية
  const [history, setHistory] = useState([initialValue]);
  // مؤشر الموقع الحالي في السجل
  const [index, setIndex] = useState(0);

  // القيمة الحالية المعروضة
  const currentCount = history[index];

  // دالة إضافة قيمة جديدة مع قطع السجل المستقبلي عند التفرع
  const updateCount = (newCount) => {
    const nextHistory = history.slice(0, index + 1);
    setHistory([...nextHistory, newCount]);
    setIndex(nextHistory.length);
  };

  const increment = (step = 1) => updateCount(currentCount + step);
  const decrement = (step = 1) => updateCount(currentCount - step);
  
  // دوال التراجع والتقدم في الزمن
  const undo = () => index > 0 && setIndex(i => i - 1);
  const redo = () => index < history.length - 1 && setIndex(i => i + 1);
  const reset = () => {
    setHistory([initialValue]);
    setIndex(0);
  };

  return {
    count: currentCount,
    increment,
    decrement,
    undo,
    redo,
    reset,
    canUndo: index > 0,
    canRedo: index < history.length - 1,
    history
  };
}

// مكون يستهلك الخطاف المخصص ويستعرض ميزة التراجع الزمني
export function CounterHistoryStudio() {
  const counter = useCounterWithHistory(10);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white text-center">
      <h4 className="text-sm font-bold text-slate-300 mb-1">العداد الذكي مع التراجع الزمني</h4>
      <p className="text-[11px] text-slate-500 mb-3">إدارة الحالة المعقدة معزولة بالكامل في Custom Hook</p>

      <div className="text-4xl font-black font-mono text-cyan-400 mb-4">
        {counter.count}
      </div>

      {/* أزرار العمليات */}
      <div className="flex gap-2 mb-3">
        <button 
          onClick={() => counter.decrement(1)}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold"
        >
          -1
        </button>
        <button 
          onClick={() => counter.increment(1)}
          className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-bold"
        >
          +1
        </button>
      </div>

      {/* أزرار التحكم في التاريخ */}
      <div className="flex gap-2 pt-2 border-t border-slate-800">
        <button 
          onClick={counter.undo}
          disabled={!counter.canUndo}
          className="flex-1 py-1 bg-slate-950 border border-slate-800 disabled:opacity-30 rounded text-[11px] font-mono"
        >
          ↩ تراجع
        </button>
        <button 
          onClick={counter.reset}
          className="px-2 py-1 bg-rose-950/40 border border-rose-500/30 text-rose-300 rounded text-[11px]"
        >
          تصفير
        </button>
        <button 
          onClick={counter.redo}
          disabled={!counter.canRedo}
          className="flex-1 py-1 bg-slate-950 border border-slate-800 disabled:opacity-30 rounded text-[11px] font-mono"
        >
          تقدم ↪
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية هندسة الحالة عبر خطاف مخصص useCounterWithHistory؛ حيث يدير مصفوفة التاريخ (History Stack) ومؤشر الموضع، موفراً ميزتي التراجع (Undo) والتقدم (Redo) النظيفين مع إبقاء مكون الواجهة رشيقاً وبسيطاً للغاية.",
      commonMistakes: [
        {
          mistake: "نسيان قطع السجل المستقبلي (History Truncation) عند إضافة عملية جديدة بعد التراجع.",
          why: "إذا تراجع المستخدم خطوتين ثم أضاف رقماً جديداً، يجب حذف الحالات السابقة التي تم التراجع عنها، وإلا سيحدث تشابك زمني غير منطقي في الـ Redo.",
          fix: "استخدم history.slice(0, index + 1) قبل إضافة الحالة الجديدة لتنظيف المسار المستقبلي."
        },
        {
          mistake: "حفظ كل تفصيلة صغيرة في useState منفصل مما يؤدي لظهور 8 خطافات useState مبعثرة في نفس الملف.",
          why: "تشتت الحالات يجعل مزامنتها أمراً معقداً ويزيد من احتمالية تناقض البيانات.",
          fix: "اجمع الحالات المترابطة في Custom Hook واحد أو استخدم useReducer لإدارة التحولات المنطقية."
        }
      ],
      bestPractices: [
        "استخرج كامل منطق العمليات والتاريخ في خطاف مخصص useCounterWithHistory قابل للاختبار المنعزل.",
        "احرص على أن تكون المكونات البصرية الفرعية نقية (Presentational) تستقبل البيانات والدوال كـ Props.",
        "وفّر قيماً منطقية مساعدة مثل canUndo و canRedo لتعطيل الأزرار تلقائياً في الواجهة.",
        "استخدم تقنية React.memo على المكونات الفرعية الثابتة لمنع إعادة تصييرها دون داعٍ."
      ],
      visualInfographic: {
        title: "معمارية شجرة مكونات وإدارة حالة العداد",
        description: "كيف تتدفق البيانات بين الخطاف المنطقي ومكونات العرض",
        visualSteps: [
          "الخطاف المخصص useCounter 🧠 (يدير القيمة، الخطوة، ومصفوفة الـ History)",
          "المكون الحاوي المنسق 🎼 (يربط الخطاف ويوزع الخصائص على الأبناء)",
          "مكون شاشة العرض 🖥️ (CounterDisplay يعرض الرقم بحجم كبير وخط مونو)",
          "مكون أزرار العمليات 🕹️ (ActionButtons يطلق دوال الزيادة والنقصان)",
          "مكون التراجع الزمني ⏱️ (HistoryControls يتيح الرجوع والتقدم في الحالات)"
        ]
      }
    },
    {
      id: "31.1.c",
      title: "بناء واجهة المستخدم وتجربة التفاعل (UI & Interactive Styling)",
      englishTerm: {
        term: "UI Construction & Micro-Interactions",
        pronunciation: "يو آي كونستراكشن آند مايكرو إنترأكشنز",
        meaning: "بناء واجهة المستخدم والتأثيرات الحركية والتفاعل الدقيق بـ Tailwind CSS"
      },
      description: "تحويل العداد من مجرد أرقام صماء إلى تجربة مستخدم آسرة (Delightful UX) يعتمد على التفاصيل البصرية الدقيقة والتفاعلات المصغرة (Micro-interactions). يشمل بناء الواجهة الاحترافية: 1) استخدام خطوط عريضة ذات عرض ثابت (Monospace Font) لعرض الأرقام لمنع اهتزاز وتمدد الصندوق عند تغير عدد الخانات؛ 2) تطبيق حركات خفيفة (Subtle Scale Animations) عند نقر الأزرار عبر فئات active:scale-95؛ 3) إشارات لونية دلالية (أخضر للأرقام الموجبة، أحمر للأرقام السالبة، ورمادي للصفر)؛ 4) شريط تقدم بصري دائري أو خطي يمثل موقع العداد الحالي مقارنة بالحد الأقصى؛ 5) تصميم متجاوب يعمل بلمسات مريحة على الهواتف الذكية مع تجنب التكبير العشوائي للشاشة.",
      realWorldAnalogy: "يشبه بناء التفاعلات المصغرة لوحة القيادة في السيارات الرياضية الحديثة؛ فعداد السرعة الرقمي لا يعرض أرقاماً جافة فقط، بل تضيء حوافه باللون الأحمر عند الاقتراب من السرعة القصوى، مع اهتزازة خفيفة ومؤثرات صوتية تمنح السائق شعوراً بالحيوية والتحكم التام.",
      whyItMatters: "التصميم المتقن والتفاعلات الحركية الرشيقة هي ما يميز المطور العادي عن مطور الواجهات المحترف؛ فالمستخدم يقيّم جودة التطبيق واحترافيته في أول 3 ثوانٍ من خلال سلاسة الرسوم واستجابة الأزرار للنقرات.",
      syntax: "// تطبيق ألوان دلالية بناءً على قيمة الرقم:\nconst getNumberColor = (num) => {\n  if (num > 0) return 'text-emerald-400';\n  if (num < 0) return 'text-rose-400';\n  return 'text-slate-400';\n};",
      simpleExample: `// استعراض التلوين الدلالي والتأثير الحركي للنقر في واجهة العداد
import React, { useState } from 'react';

export function StyledCounterDemo() {
  const [val, setVal] = useState(0);

  const colorClass = val > 0 ? 'text-emerald-400' : val < 0 ? 'text-rose-400' : 'text-slate-400';

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-center">
      <div className={\`text-4xl font-black font-mono transition-colors duration-200 \${colorClass}\`}>
        {val}
      </div>
      <div className="flex gap-2 mt-3">
        <button 
          onClick={() => setVal(v => v - 1)}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 active:scale-90 rounded-lg font-bold text-xs transition-transform"
        >
          -
        </button>
        <button 
          onClick={() => setVal(v => v + 1)}
          className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-500 active:scale-90 rounded-lg font-bold text-xs transition-transform"
        >
          +
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// واجهة عداد كاملة بتصميم زجاجي عصري وشريط تقدم نسبي ومؤثرات بصرية متقدمة
import React, { useState } from 'react';

export function PolishedCounterUI() {
  const [count, setCount] = useState(25);
  const min = 0;
  const max = 50;

  // احتساب النسبة المئوية لشريط التقدم
  const percentage = Math.round(((count - min) / (max - min)) * 100);

  return (
    <div className="p-6 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl max-w-sm mx-auto shadow-2xl text-white">
      {/* الترويسة ونسبة الإنجاز */}
      <div className="flex justify-between items-center text-xs text-slate-400 mb-4">
        <span className="font-bold tracking-wide">العداد الذكي Pro</span>
        <span className="font-mono text-indigo-400 font-bold">{percentage}% من السعة</span>
      </div>

      {/* شاشة العرض الرقمية المركزية */}
      <div className="py-6 px-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 text-center mb-4 relative overflow-hidden">
        <div className="text-5xl font-black font-mono text-cyan-400 tracking-tight">
          {count}
        </div>
        <span className="text-[10px] text-slate-500 font-mono mt-1 block">
          النطاق المسموح: {min} &rarr; {max}
        </span>

        {/* شريط التقدم السفلي المدمج في الشاشة */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300"
            style={{ width: \`\${percentage}%\` }}
          />
        </div>
      </div>

      {/* أزرار التحكم الرئيسية مع تفاعل active:scale */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <button
          onClick={() => setCount(c => Math.max(min, c - 5))}
          disabled={count <= min}
          className="py-3 bg-slate-800 hover:bg-slate-700 active:scale-95 disabled:opacity-20 rounded-2xl font-bold text-sm transition-all shadow-md"
        >
          -5 إنقاص
        </button>
        <button
          onClick={() => setCount(c => Math.min(max, c + 5))}
          disabled={count >= max}
          className="py-3 bg-indigo-600 hover:bg-indigo-500 active:scale-95 disabled:opacity-20 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-indigo-600/30"
        >
          +5 زيادة
        </button>
      </div>

      {/* زر التصفير الخفيف */}
      <button
        onClick={() => setCount(0)}
        className="w-full py-1.5 text-xs text-slate-500 hover:text-rose-400 transition font-medium"
      >
        إعادة التعيين إلى الصفر
      </button>
    </div>
  );
}`,
      outputExplanation: "تستعرض هذه الواجهة كيف تحول فئات Tailwind CSS العداد العادي إلى منتج فاخر؛ حيث تجمع بين تدرجات الألوان العصرية، وشريط التقدم المدمج، وحركات التفاعل المصغرة active:scale-95 مع توفير ردود فعل بصرية فورية عند الوصول لأطراف النطاق.",
      commonMistakes: [
        {
          mistake: "استخدام خط غير ثابت العرض (Variable-width Font) لعرض أرقام العداد.",
          why: "الأرقام مثل 1 تكون أضيق بكثير من الرقم 8؛ مما يؤدي لاهتزاز حجم الحاوية والأزرار المجاورة مع كل زيادة أو نقصان.",
          fix: "استخدم دائماً فئة font-mono لعرض الأرقام لضمان تساوي عرض كافة الأرقام ومنع الاهتزاز البصري."
        },
        {
          mistake: "إهمال حالات التركيز للوحة المفاتيح (focus-visible).",
          why: "المستخدمون الذين يتصفحون عبر لوحة المفاتيح لن يتمكنوا من معرفة الزر النشط حالياً مما يضر بإمكانية الوصول.",
          fix: "أضف فئات focus-visible:ring-2 focus-visible:ring-indigo-500 لكافة الأزرار."
        }
      ],
      bestPractices: [
        "أضف تأثير active:scale-95 لمنح المستخدم شعوراً فيزيائياً حقيقياً بالضغط على الأزرار.",
        "استخدم شريط تقدم بياني (Progress Bar) لإعطاء سياق بصري فوري لموقع القيمة الحالية من الإجمالي.",
        "اعتمد التلوين الدلالي المريح للعين وتجنب الألوان الفاقعة المزعجة في الخلفيات.",
        "احرص على ألا تقل مساحة النقر للأزرار على الهواتف عن 44x44 بكسل لسهولة الاستخدام باللمس."
      ],
      visualInfographic: {
        title: "عناصر تجربة الاستخدام التفاعلية للعداد",
        description: "الركائز البصرية التي تحول العداد إلى تجربة متقنة",
        visualSteps: [
          "الأرقام أحادية العرض 🔤 (font-mono يمنع اهتزاز الحاويات عند تغير الخانات)",
          "الحركات المصغرة ⚡ (active:scale-95 يمنح شعوراً فيزيائياً بالنقر)",
          "الألوان الدلالية 🎨 (أخضر للموجب وأحمر للسالب وأزرق للنطاق)",
          "شريط التقدم البصري 📊 (تمثيل نسبي لموقع القيمة من الحد الأقصى)",
          "إمكانية الوصول الشاملة ♿ (دعم التركيز البصري وقارئات الشاشة)"
        ]
      }
    },
    {
      id: "31.1.d",
      title: "إضافة ميزات متقدمة (LocalStorage & Keyboard Shortcuts)",
      englishTerm: {
        term: "Advanced Features (Persistence & Shortcuts)",
        pronunciation: "أدفانسد فيتشرز (بيرسيستنس آند شورت كاتس)",
        meaning: "حفظ الحالة محلياً في المتصفح ودعم اختصارات لوحة المفاتيح السريعة"
      },
      description: "الميزات المتقدمة هي التي ترقي المشروع من تمرين مدرسي إلى تطبيق حقيقي صالح للاستخدام اليومي. تشمل هذه الميزات: 1) الحفظ التلقائي في التخزين المحلي (LocalStorage Persistence)؛ بحيث يستعيد العداد قيمته وسجله التاريخي فور إعادة فتح المتصفح؛ 2) دعم اختصارات لوحة المفاتيح العالمية (Keyboard Shortcuts) عبر الاستماع لحدث keydown على كائن window (مثل: السهم لأعلى للزيادة، السهم لأسفل للنقصان، الحرف R للتصفير، وCtrl+Z للتراجع)؛ 3) إمكانية تصدير سجل العمليات كملف نصي أو نسخه إلى الحافظة؛ 4) إضافة مؤثر صوتي تفاعلي خفيف (Web Audio API Click) عند النقر لمنح رد فعل حسي متكامل.",
      realWorldAnalogy: "يشبه دعم اختصارات لوحة المفاتيح والحفظ التلقائي برامج المونتاج والتصميم الاحترافية مثل Photoshop؛ فالمصمم المحترف لا ينقر زر التراجع بالماوس، بل يضغط Ctrl+Z في جزء من الثانية؛ وإذا انقطع التيار الكهربائي فجأة، يفتح البرنامج ليجد مشروعه محفوظاً بالكامل دون فقدان دقيقة عمل واحدة.",
      whyItMatters: "يرفع دعم اختصارات لوحة المفاتيح سرعة إنتاجية المستخدم بنسبة 300%، ويضمن الحفظ المحلي عدم شعور الزائر بالإحباط إذا أغلق التبويب بالخطأ، مما يعكس اهتمام المطور بتجربة المستخدم الشاملة.",
      syntax: "// الاستماع لاختصارات لوحة المفاتيح:\nuseEffect(() => {\n  const handleKeyDown = (e) => {\n    if (e.key === 'ArrowUp') increment();\n    if (e.key === 'ArrowDown') decrement();\n  };\n  window.addEventListener('keydown', handleKeyDown);\n  return () => window.removeEventListener('keydown', handleKeyDown);\n}, [increment, decrement]);",
      simpleExample: `// حفظ قيمة العداد تلقائياً في LocalStorage في React
import React, { useState, useEffect } from 'react';

export function PersistentCounterDemo() {
  // قراءة القيمة الأولية من LocalStorage بأمان
  const [val, setVal] = useState(() => {
    const saved = localStorage.getItem('demo_counter_val');
    return saved !== null ? Number(saved) : 0;
  });

  // مزامنة أي تعديل مع LocalStorage فوراً
  useEffect(() => {
    localStorage.setItem('demo_counter_val', String(val));
  }, [val]);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-center">
      <span className="text-[10px] text-emerald-400 block font-mono">حفظ تلقائي في LocalStorage</span>
      <div className="text-3xl font-black font-mono my-2">{val}</div>
      <div className="flex gap-2">
        <button onClick={() => setVal(v => v - 1)} className="flex-1 py-1 bg-slate-800 rounded text-xs font-bold">-</button>
        <button onClick={() => setVal(v => v + 1)} className="flex-1 py-1 bg-indigo-600 rounded text-xs font-bold">+</button>
      </div>
    </div>
  );
}`,
      advancedExample: `// عداد متقدم متكامل يدمج الحفظ المحلي ودعم اختصارات لوحة المفاتيح الكاملة ومؤثر صوتي
import React, { useState, useEffect } from 'react';

export function KeyboardAndStorageCounter() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('adv_counter_state');
    return saved ? Number(saved) : 0;
  });

  const [lastAction, setLastAction] = useState('جاهز');

  // مزامنة التخزين المحلي
  useEffect(() => {
    localStorage.setItem('adv_counter_state', String(count));
  }, [count]);

  // الاستماع لاختصارات لوحة المفاتيح العالمية
  useEffect(() => {
    const handleKeyDown = (e) => {
      // تجنب تشغيل الاختصارات إذا كان المستخدم يكتب في حقل إدخال
      if (e.target.tagName === 'INPUT') return;

      if (e.key === 'ArrowUp' || e.key === '+') {
        e.preventDefault();
        setCount(c => c + 1);
        setLastAction('زيادة عبر سهم للأعلى ↑');
      } else if (e.key === 'ArrowDown' || e.key === '-') {
        e.preventDefault();
        setCount(c => c - 1);
        setLastAction('نقصان عبر سهم للأسفل ↓');
      } else if (e.key.toLowerCase() === 'r') {
        e.preventDefault();
        setCount(0);
        setLastAction('تصفير عبر مفتاح R');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white text-center">
      <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2">
        <span>مزامنة التخزين: نشطة ✓</span>
        <span className="font-mono text-cyan-400">Shortcuts: Active</span>
      </div>

      <div className="text-4xl font-black font-mono text-emerald-400 my-3">
        {count}
      </div>

      <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-400 mb-4">
        آخر عملية: <strong className="text-slate-200">{lastAction}</strong>
      </div>

      {/* دليل الاختصارات الإرشادي */}
      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-right text-[11px] text-slate-400 space-y-1">
        <span className="font-bold text-slate-300 block mb-1">اختصارات لوحة المفاتيح المتاحة:</span>
        <div className="flex justify-between">
          <span>زيادة القيمة:</span>
          <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono text-[10px] text-white">↑ أو +</kbd>
        </div>
        <div className="flex justify-between">
          <span>إنقاص القيمة:</span>
          <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono text-[10px] text-white">↓ أو -</kbd>
        </div>
        <div className="flex justify-between">
          <span>إعادة التعيين:</span>
          <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono text-[10px] text-white">R</kbd>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية دمج ميزات إنتاجية متقدمة؛ حيث يستعيد العداد قيمته المخزنة في LocalStorage عبر التهيئة الكسولة (Lazy Initializer)، ويسجل مستمعاً شاملاً لأحداث keydown يتيح التحكم الكامل بالعداد عبر لوحة المفاتيح مع توفير دليل إرشادي مرئي للمستخدم.",
      commonMistakes: [
        {
          mistake: "قراءة LocalStorage مباشرة في جسم دالة المكون بدلاً من استخدام دالة التهيئة الكسولة useState(() => ...).",
          why: "قراءة LocalStorage عملية متزامنة تحجب خيط المعالجة؛ وقراءتها في كل تصيير يبطئ التطبيق بدون أي داعٍ.",
          fix: "مرر دالة إلى useState: useState(() => localStorage.getItem(...)) لتقرأ القيمة مرة واحدة فقط عند التركيب المبدئي."
        },
        {
          mistake: "نسيان فحص e.target.tagName عند الاستماع لأحداث لوحة المفاتيح العالمية.",
          why: "إذا كان لدى المستخدم حقل نصي في الصفحة وضغط مفتاح المسافة أو الحرف R، فسيتم تصفير العداد أثناء محاولته كتابة اسمه!",
          fix: "تحقق دائماً من أن التركيز ليس على حقل إدخال: if (e.target.tagName === 'INPUT') return."
        }
      ],
      bestPractices: [
        "استخدم دالة التهيئة الكسولة (Lazy Initial State) عند قراءة بيانات التخزين المحلي.",
        "أحط قراءة وكتابة LocalStorage بكتلة try/catch لتجنب انهيار التطبيق إذا كان التصفح الخاص (Private Browsing) يحظر التخزين.",
        "احرص دائماً على تنظيف مستمع الحدث removeEventListener داخل دالة تنظيف useEffect.",
        "اعرض دليلاً صغيراً برموز الأزرار (KBD Tags) لشرح الاختصارات للمستخدمين."
      ],
      visualInfographic: {
        title: "منظومة الميزات المتقدمة للعداد التفاعلي",
        description: "كيف يعمل الحفظ المحلي واختصارات لوحة المفاتيح معاً",
        visualSteps: [
          "التهيئة الكسولة من الذاكرة 💾 (استرجاع آخر قيمة من LocalStorage عند الفتح)",
          "مستمع لوحة المفاتيح ⌨️ (الاستماع لمفاتيح الأسهم و R في نافذة window)",
          "تحديث الحالة البرمجية ⚡ (تنفيذ الزيادة أو النقصان بدقة)",
          "المزامنة الفورية في الخلفية 🔄 (حفظ التعديل الجديد في LocalStorage)",
          "ردود فعل حسية متكاملة 🔊 (تحديث الشاشة وعرض التلميحات الفورية)"
        ]
      }
    },
    {
      id: "31.1.e",
      title: "مراجعة الكود وتحسين الأداء (Code Review & Optimization)",
      englishTerm: {
        term: "Code Review & Performance Tuning",
        pronunciation: "كود ريفيو آند بيرفورمانس تيونينغ",
        meaning: "فحص وتدقيق جودة الشفرة وتحسين استهلاك الذاكرة وإعادة التصيير"
      },
      description: "المرحلة الختامية لأي مشروع برمجي هي مرحلة التدقيق الهندسي الصارم (Code Review & Polish). تتضمن هذه المرحلة مراجعة شاملة لعدة محاور: 1) فحص إعادة التصيير غير المبررة (Unnecessary Re-renders) باستخدام React Profiler وعزل المكونات عبر React.memo؛ 2) تثبيت مراجع الدوال عبر useCallback لمنع إعادة بناء المعالجات مع كل نقرة؛ 3) التحقق من معايير إمكانية الوصول (Accessibility a11y) عبر إضافة وسوم aria-live='polite' و role='status' لتقوم قارئات الشاشة بنطق الرقم الجديد للمكفوفين فور تغيره؛ 4) التحقق من أمان الأنواع وخلو الكود من أي تحذيرات في طرفية المتصفح.",
      realWorldAnalogy: "يشبه التدقيق الهندسي النهائي الفحص الفني الشامل للطائرة قبل إقلاعها في رحلة تجارية؛ يتأكد المفتش من إحكام البراغي، ومعايرة أجهزة القياس، ونظافة المحركات، واختبار أجهزة الإنذار للتأكد من أن الطائرة جاهزة للتحليق بأمان مطلق تحت أي ظرف.",
      whyItMatters: "تضمن مراجعة الكود والتحسينات الهندسية أن مشروعك ليس مجرد تطبيق يعمل صدفة، بل هو كود إنتاجي نظيف وقابل للصيانة يفتخر به المطور في ملف أعماله (Portfolio) ويجتاز به المقابلات التقنية العليا بثقة.",
      syntax: "// إضافة إمكانية الوصول لقارئات الشاشة:\n<div role=\"status\" aria-live=\"polite\" className=\"text-4xl font-mono\">\n  {count}\n</div>",
      simpleExample: `// استعراض إضافة وسوم إمكانية الوصول لقارئات الشاشة في العداد
import React, { useState } from 'react';

export function AccessibleCounterDemo() {
  const [val, setVal] = useState(0);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-xs text-center">
      <span className="text-[10px] text-slate-400 block mb-1">متوافق مع قارئات الشاشة (a11y)</span>
      
      {/* وسم aria-live يجعل قارئ الشاشة ينطق الرقم فور تغيره تلقائياً */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-label={\`القيمة الحالية للعداد هي \${val}\`}
        className="text-3xl font-black font-mono text-cyan-400 my-2"
      >
        {val}
      </div>

      <div className="flex gap-2">
        <button 
          onClick={() => setVal(v => v - 1)}
          aria-label="إنقاص العداد بمقدار 1"
          className="flex-1 py-1.5 bg-slate-800 rounded font-bold text-xs"
        >
          -
        </button>
        <button 
          onClick={() => setVal(v => v + 1)}
          aria-label="زيادة العداد بمقدار 1"
          className="flex-1 py-1.5 bg-indigo-600 rounded font-bold text-xs"
        >
          +
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// تطبيق تدقيق كامل للعداد مع تحسين المذكرات React.memo و useCallback والوصولية الشاملة
import React, { useState, useCallback, memo } from 'react';

// 1. مكون فرعي نقي ومحسن بـ React.memo لمنع إعادة تصييره إذا لم تتغير خصائصه
const OptimizedDisplay = memo(function OptimizedDisplay({ value }) {
  console.log('🔄 تصيير مكون الشاشة فقط');
  return (
    <div 
      role="status" 
      aria-live="polite"
      className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center my-3"
    >
      <span className="text-4xl font-black font-mono text-emerald-400">
        {value}
      </span>
      <span className="text-[10px] text-slate-500 block mt-1">
        المكون محمي بتقنية React.memo
      </span>
    </div>
  );
});

// 2. مكون الأزرار المحسن
const OptimizedButtons = memo(function OptimizedButtons({ onIncrement, onDecrement }) {
  console.log('🔄 تصيير مكون الأزرار');
  return (
    <div className="flex gap-2">
      <button 
        onClick={onDecrement}
        aria-label="إنقاص القيمة"
        className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 active:scale-95 rounded-xl font-bold text-xs transition"
      >
        إنقاص (-)
      </button>
      <button 
        onClick={onIncrement}
        aria-label="زيادة القيمة"
        className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-xl font-bold text-xs transition"
      >
        زيادة (+)
      </button>
    </div>
  );
});

// 3. المكون الرئيسي المدقق
export function OptimizedCounterProject() {
  const [count, setCount] = useState(0);
  const [themeMode, setThemeMode] = useState('dark');

  // تثبيت مراجع الدوال عبر useCallback لمنع كسر حماية React.memo في الأبناء
  const handleInc = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const handleDec = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-xs text-indigo-400">عداد مدقق هندسياً (Production Ready)</h4>
        <button 
          onClick={() => setThemeMode(t => t === 'dark' ? 'dim' : 'dark')}
          className="text-[10px] text-slate-400 underline font-mono"
        >
          تبديل مظهر ({themeMode})
        </button>
      </div>

      {/* المكونات المحمية لا تعيد التصيير عند تغيير themeMode */}
      <OptimizedDisplay value={count} />
      <OptimizedButtons onIncrement={handleInc} onDecrement={handleDec} />

      <p className="text-[10px] text-slate-500 text-center mt-3">
        افتح طرفية المتصفح لملاحظة عزل إعادة التصيير بدقة متناهية.
      </p>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية تطبيق معايير الإنتاج الاحترافية؛ حيث يعزل المكونات الفرعية عبر React.memo ويثبت مراجع دوال المعالجة باستخدام useCallback لمنع إعادة تصيير الأزرار دون داعٍ، مع إضافة وسوم aria-live لدعم المكفوفين وتأكيد الجاهزية للإنتاج.",
      commonMistakes: [
        {
          mistake: "استخدام React.memo على المكون الفرعي وتمرير دالة عادية غير مثبتة بـ useCallback.",
          why: "إعادة إنشاء مرجع جديد للدالة في كل تصيير للأب يبطل ميزة React.memo بالكامل ويعيد تصيير الابن في كل مرة.",
          fix: "غلّف دوال المعالجات دائماً بـ useCallback عند تمريرها لمكونات فرعية محمية بـ memo."
        },
        {
          mistake: "إهمال سمات aria-label على الأزرار التي تحتوي على رموز أيقونات فقط (+ أو -).",
          why: "قارئات الشاشة ستنطق 'زر' فقط دون أن توضح للمستخدم الكفيف وظيفة هذا الزر.",
          fix: "أضف دائماً aria-label='زيادة القيمة بمقدار 1' على كافة الأزرار الرمزية."
        }
      ],
      bestPractices: [
        "استخدم وسم aria-live='polite' لإخطار قارئات الشاشة بالتغيرات الرقمية دون مقاطعة المستخدم.",
        "طبّق مراجعة الأداء عبر React Developer Tools Profiler لاكتشاف أي إعادة تصيير غير مبررة.",
        "احرص على خلو شفرة المشروع من أي تحذيرات حمراء أو صفراء في طرفية المتصفح Console.",
        "اكتب اختبارات وحدات (Unit Tests) للخطاف useAdvancedCounter للتحقق من سلامة كافة العمليات الحسابية."
      ],
      visualInfographic: {
        title: "قائمة التدقيق النهائي لمشاريع React الإنتاجية",
        description: "المعايير الأربعة لاعتماد الكود بجودة عالمية",
        visualSteps: [
          "أمان الأنواع وخلو الأخطاء 🛡️ (لا توجد أي تحذيرات في طرفية المتصفح)",
          "تحسين إعادة التصيير ⚡ (عزل الأبناء بـ React.memo و useCallback)",
          "إمكانية الوصول الشاملة ♿ (وسوم aria-live و aria-label لقارئات الشاشة)",
          "المتانة والصمود 💾 (حماية عمليات التخزين المحلي بكتل try/catch)",
          "الجاهزية لملف الأعمال 🏆 (كود نظيف وموثق يفخر به المطور في المقابلات)"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-31-1-1",
      question: "لماذا يُفضل استخدام دالة التهيئة الكسولة useState(() => localStorage.getItem('key')) بدلاً من القراءة المباشرة؟",
      options: [
        "لأن القراءة المباشرة تؤدي لحذف بيانات الحاسوب بالكامل.",
        "لأن قراءة LocalStorage عملية متزامنة بطيئة تحجب المعالج، واستخدام دالة التهيئة يضمن قراءتها مرة واحدة فقط عند تركيب المكون بدلاً من قراءتها مع كل تصيير.",
        "لأن React لا تدعم استخدام نصوص عادية في useState.",
        "لا يوجد أي فرق؛ كلاهما متطابقان تماماً في الأداء."
      ],
      correctAnswer: 1,
      explanation: "دالة التهيئة الكسولة (Lazy Initial State) تضمن تنفيذ قراءة التخزين المحلي المكلفة مرة واحدة فقط عند بدء تشغيل المكون، وتمنع تكرار القراءة في كل إعادة تصيير."
    },
    {
      id: "quiz-31-1-2",
      question: "ما هي الفائدة من إضافة وسم aria-live='polite' على عنصر عرض أرقام العداد؟",
      options: [
        "تغيير لون الخط إلى اللون الأخضر تلقائياً.",
        "إخطار برامج قارئات الشاشة للمكفوفين بنطق الرقم الجديد تلقائياً وبأدب فور تغيره في واجهة المستخدم.",
        "تسريع تحميل الصفحة بنسبة 50%.",
        "تأمين الرقم ضد هجمات القرصنة والاختراق."
      ],
      correctAnswer: 1,
      explanation: "تعتبر سمة aria-live='polite' معياراً أساسياً في إمكانية الوصول (Accessibility) لإشعار قارئات الشاشة بنطق التحديثات الرقمية للمكفوفين فور حدوثها دون مقاطعة كلامهم."
    },
    {
      id: "quiz-31-1-3",
      question: "لماذا يجب قطع السجل المستقبلي (History Truncation via slice) عند إضافة رقم جديد بعد استخدام ميزة التراجع Undo؟",
      options: [
        "لأن مصفوفات الجافاسكريبت لا تقبل أكثر من 5 عناصر.",
        "لمنع حدوث تضارب وتشابك زمني؛ فحالات 'التقدم' السابقة أصبحت ملغاة بعد اختيار مسار جديد بعد التراجع.",
        "لإفراغ ذاكرة كرت الشاشة.",
        "لتسريع استجابة زر الفأرة."
      ],
      correctAnswer: 1,
      explanation: "عندما يتراجع المستخدم ثم ينفذ إجراءً جديداً، يجب حذف التاريخ المستقبلي السابق لإنشاء فرع زمني جديد ونظيف، وهو السلوك القياسي في كافة البرمجيات العالمية."
    }
  ],
  practicalExercise: {
    id: "exercise-31-1",
    title: "تمرين تطبيقي: بناء عداد ذكي مع فحص الحدود وحفظ التفضيلات واختصارات لوحة المفاتيح",
    scenario: "المطلوب منك بناء مكون عداد ذكي SmartCounter يدير عدداً ينحصر بين 0 و 20، مع استعادة آخر قيمة من LocalStorage، ودعم زيادة ونقصان القيمة عبر مفاتيح الأسهم (ArrowUp و ArrowDown)، وتوفير شارة بصرية توضح عند الوصول للحد الأقصى أو الأدنى.",
    tasks: [
      "استعادة القيمة المبدئية من LocalStorage بأمان عبر دالة تهيئة كسولة.",
      "مزامنة القيمة الجديدة مع LocalStorage في useEffect.",
      "الاستماع لمفتاحي ArrowUp و ArrowDown وتعديل القيمة ضمن نطاق [0, 20].",
      "عرض شارة تنبيه عند الوصول إلى الحد الأدنى (0) أو الأقصى (20)."
    ],
    hints: [
      "استخدم Math.min(20, c + 1) و Math.max(0, c - 1).",
      "تأكد من تنظيف مستمع الحدث في useEffect.",
      "استخدم role='status' لعرض القيمة الرقمية لقارئات الشاشة."
    ],
    solution: `// الحل النموذجي للتمرين التطبيقي: عداد ذكي متكامل
import React, { useState, useEffect } from 'react';

export function SmartCounter() {
  const min = 0;
  const max = 20;

  // 1. استعادة القيمة بأمان من التخزين المحلي
  const [count, setCount] = useState(() => {
    try {
      const saved = localStorage.getItem('smart_counter_val');
      return saved !== null ? Number(saved) : 5;
    } catch (e) {
      return 5;
    }
  });

  // 2. مزامنة القيمة مع التخزين المحلي
  useEffect(() => {
    try {
      localStorage.setItem('smart_counter_val', String(count));
    } catch (e) {
      console.warn('تعذر الحفظ في LocalStorage:', e);
    }
  }, [count]);

  // 3. الاستماع لاختصارات لوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCount(c => Math.min(max, c + 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setCount(c => Math.max(min, c - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xs mx-auto shadow-2xl text-white text-center">
      <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2">
        <span>النطاق: [{min} - {max}]</span>
        <span className="font-mono text-cyan-400">Shortcuts: ↑ / ↓</span>
      </div>

      <div 
        role="status" 
        aria-live="polite"
        className="text-4xl font-black font-mono text-cyan-400 my-3"
      >
        {count}
      </div>

      {/* شارة التنبيه عند بلوغ الحواف */}
      {count === max && (
        <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold mb-3 inline-block">
          ⚠️ بلغت الحد الأقصى ({max})
        </span>
      )}
      {count === min && (
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold mb-3 inline-block">
          ⚠️ بلغت الحد الأدنى ({min})
        </span>
      )}

      <div className="flex gap-2 mt-2">
        <button 
          onClick={() => setCount(c => Math.max(min, c - 1))}
          disabled={count <= min}
          className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 active:scale-95 disabled:opacity-30 rounded-xl font-bold text-xs transition"
        >
          -1 إنقاص
        </button>
        <button 
          onClick={() => setCount(c => Math.min(max, c + 1))}
          disabled={count >= max}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 disabled:opacity-30 rounded-xl font-bold text-xs transition"
        >
          +1 زيادة
        </button>
      </div>
    </div>
  );
}`
  },
  visualInfographic: {
    title: "خارطة طريق مشروع العداد التفاعلي المتقدم",
    description: "مراحل بناء وهندسة مشروع العداد من الصفر حتى الإنتاج",
    visualSteps: [
      "تحديد النطاق والمتطلبات 📋 (الحدود القصوى، الخطوات المتغيرة، وسجل التاريخ)",
      "تخطيط وهندسة الحالة 🧠 (فصل المنطق في خطاف مخصص useCounterWithHistory)",
      "بناء الواجهة والتفاعل 🎨 (تصميم أنيق بـ Tailwind وحركات مصغرة active:scale)",
      "الميزات المتقدمة 💾 (حفظ تلقائي في LocalStorage واختصارات لوحة المفاتيح)",
      "التدقيق والجودة الشاملة 🛡️ (تحسين الأداء بـ React.memo ووسوم الوصولية a11y)"
    ]
  }
};

