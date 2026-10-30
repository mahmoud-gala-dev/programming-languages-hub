// src/data/sections/section6/topic3.js
// الموضوع 3: دورة التصيير في React (The Render Cycle, Commit Phase & Reconciliation)

export const SECTION_6_TOPIC_3 = {
  id: "6.3",
  title: "دورة التصيير في React",
  englishTerm: "The React Render Cycle & Reconciliation",
  description: "الغوص في المحرك الداخلي لـ React: فهم مراحل Render وCommit، التجميع التلقائي (Automatic Batching)، الفرق الجوهري بين حساب الشجرة وتحديث DOM الحقيقي، وكيف يؤثر موقع المكون ومفتاحه key على الحفاظ على الحالة أو إعادة تصفيرها.",
  subtopics: [
    {
      id: "6.3.a",
      title: "متى يحدث Render",
      englishTerm: "When Does React Render? (Render Triggers)",
      description: "المحفزات والأسباب الأساسية التي تدفع React لبدء عملية التصيير (Render Process). هناك سببان رئيسيان فقط لإطلاق عملية الرندر في أي تطبيق React: 1) الرندر المبدئي (Initial Render) عند تشغيل التطبيق وتركيب المكون لأول مرة على الشاشة، 2) تحديث الحالة (State Update) لأحد المكونات أو قيام المكون الأب بإعادة التصيير، مما يؤدي تلقائياً إلى إعادة تصيير كافة أبنائه في الشجرة ما لم يتم تحسينهم.",
      realLifeAnalogy: "مثل محرك السيارة؛ لا يعمل المحرك إلا في حالتين: إما لحظة إدارة المفتاح لبدء الرحلة لأول مرة (Initial Render)، أو عند الضغط على دواسة البنزين لضخ وقود جديد (State Update) لزيادة السرعة استجابةً لطلب السائق.",
      whyItMatters: "معرفة متى ولماذا يُعاد تصيير المكونات هو الأساس الجوهري لتشخيص مشاكل الأداء، وتفادي الرندرات غير المبررة (Wasted Re-renders)، ومنع تكرار استدعاء دوال الاتصال بالشبكة.",
      syntax: "// محفز الرندر: استدعاء دالة التحديث\nconst [count, setCount] = useState(0);\nsetCount(1); // يطلق عملية رندر فورية",
      simpleExample: `// استيراد useState
import { useState } from "react";

function RenderTriggerDemo() {
  // تعريف حالة يطلق تحديثها عملية رندر
  const [triggerCount, setTriggerCount] = useState(0);

  // طباعة رسالة في الكونسول مع كل رندر
  console.log("⚡ حدث رندر للمكون الآن! الرقم:", triggerCount);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <p>عدد مرات تحديث الحالة: {triggerCount}</p>
      {/* هذا الزر يحفز رندراً جديداً */}
      <button 
        onClick={() => setTriggerCount(c => c + 1)}
        className="px-3 py-1 bg-indigo-600 rounded font-bold"
      >
        إطلاق رندر جديد
      </button>
    </div>
  );
}`,
      advancedExample: `// أداة بصرية لتتبع محفزات الرندر في شجرة المكونات (الأب والابن)
import { useState } from "react";

// مكون الابن: يُعاد رندره تلقائياً عند إعادة رندر الأب!
function ChildComponent({ label }) {
  console.log(\`🔄 رندر المكون الابن [\${label}]\`);
  return (
    <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs">
      <span className="text-emerald-400 font-bold">المكون الابن:</span> {label}
      <p className="text-[10px] text-slate-400 mt-1">يُعاد تصييره تلقائياً لأن المكون الأب أعاد التصيير</p>
    </div>
  );
}

// مكون الأب الحاوي للحالة
export function ParentRenderTracker() {
  const [parentState, setParentState] = useState(0);

  console.log("⚡ رندر المكون الأب Parent!");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-sm text-indigo-400">تتبع محفزات الرندر (Parent-Child)</h4>
        <span className="text-xs font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          حالة الأب: {parentState}
        </span>
      </div>

      <button
        onClick={() => setParentState((s) => s + 1)}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
      >
        تحديث حالة الأب (+1)
      </button>

      {/* مكونات أبناء تتأثر برندر الأب */}
      <div className="space-y-2 pt-2 border-t border-slate-800">
        <ChildComponent label="الابن الأول (ثابت الخصائص)" />
        <ChildComponent label="الابن الثاني (مستقل)" />
      </div>
    </div>
  );
}`,
      output: "عند النقر على زر الأب، يُطبع في الكونسول: رندر الأب، ثم رندر الابن الأول، ثم رندر الابن الثاني، مما يثبت أن رندر الأب ينحدر تلقائياً إلى كافة الأبناء في شجرته.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن المكون الابن لا يُعاد رندره إلا إذا تغيرت خصائصه (Props).",
          why: "في السلوك الافتراضي لـ React، عندما يُعاد تصيير المكون الأب، فإن كافة مكوناته الأبناء تُعاد تصييرها تلقائياً بغض النظر عما إذا كانت الـ Props تغيرت أم لا (ما لم يُستخدم React.memo).",
          fix: "استخدم React.memo لحماية المكونات الثقيلة من الرندرات الزائدة الناتجة عن رندر الأب."
        }
      ],
      bestPractices: [
        "افصل المكونات التي تتغير حالتها بسرعة (مثل حقول الكتابة المتكررة) في مكونات فرعية صغيرة معزولة لمنع إعادة تصيير الصفحة بأكملها.",
        "لا تستدعِ دوال setState أثناء مرحلة الرندر المباشرة أبداً لمنع الحلقات اللانهائية."
      ],
      infographicCard: {
        type: "trigger-cards",
        title: "محفزا الرندر في React (The 2 Triggers)",
        triggers: [
          { name: "1. الرندر الابتدائي (Initial Render)", desc: "استدعاء createRoot(domNode).render(<App />) لتركيب التطبيق أول مرة." },
          { name: "2. تحديث الحالة (State Update)", desc: "استدعاء setter لحالة داخلية في المكون، أو إعادة تصيير المكون الأب الأعلى منه." }
        ]
      }
    },
    {
      id: "6.3.b",
      title: "مفهوم Render وCommit",
      englishTerm: "Render Phase vs Commit Phase",
      description: "المرحلتان المنفصلتان تماماً اللتان تقطعهما React لتحديث شاشة المستخدم: 1) مرحلة التصيير (Render Phase): وهي مرحلة حسابية نقية (Pure Calculation) تقوم فيها React باستدعاء دوال المكونات ومقارنة الشجرة القديمة بالجديدة لتحديد ما تغير، دون لمس متصفح DOM على الإطلاق. 2) مرحلة التثبيت (Commit Phase): وهي المرحلة السريعة التي تقوم فيها React بتطبيق الفروقات المحسوبة فعلياً وتعديل عقد DOM الحقيقية في المتصفح.",
      realLifeAnalogy: "مثل المطعم الفاخر؛ مرحلة Render هي وقوف الطاهي في المطبخ لتجهيز الطبق واختبار نكهته وتزيينه (حسابات داخلية لا يراها الزبون). ومرحلة Commit هي قيام النادل بتقديم الطبق الجاهز على طاولة الزبون في ثانية واحدة (تحديث حقيقي يراه الزبون).",
      whyItMatters: "فصل الحسابات عن تعديل DOM الحقيقي هو سر سرعة React الأسطورية؛ فعمليات DOM في المتصفح بطيئة ومكلفة جداً، لذا تحصرها React في مرحلة Commit السريعة وفقط للعقد التي تغيرت فعلاً.",
      syntax: "// مرحلة Render: تنفيذ دالة المكون وحساب JSX في الذاكرة\n// مرحلة Commit: تطبيق الفروقات في DOM بواسطة ReactDOM",
      simpleExample: `// توضيح بساطة عمل مرحلتي الرندر والتثبيت
function RenderCommitInsight() {
  // [Render Phase]: هنا تستدعي React هذه الدالة وتحسب ناتج الـ JSX
  const currentTime = new Date().toLocaleTimeString();

  // [Commit Phase]: لاحقاً تأخذ React هذا العنصر وتضعه في الـ DOM الحقيقي
  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs">
      <p>الوقت المحسوب في مرحلة Render: <span className="font-mono text-emerald-400">{currentTime}</span></p>
    </div>
  );
}`,
      advancedExample: `// تمثيل مرئي تفاعلي يشرح خطوات خط الإنتاج: من المحفز إلى الشاشة
export function RenderCommitPipelineVisualizer() {
  const steps = [
    {
      phase: "1. المحفز (Trigger)",
      name: "طلب التحديث",
      desc: "المستخدم ينقر زراً أو تنتهي عملية جلب بيانات، فيتم استدعاء setCount().",
      color: "border-amber-500 bg-amber-500/10 text-amber-300"
    },
    {
      phase: "2. التصيير (Render Phase)",
      name: "الحساب والمقارنة النظيفة",
      desc: "تستدعي React المكونات، وتولد شجرة الـ Virtual DOM الجديدة، وتقارنها بالقديمة (Diffing). لا يتم لمس المتصفح إطلاقاً!",
      color: "border-indigo-500 bg-indigo-500/10 text-indigo-300"
    },
    {
      phase: "3. التثبيت (Commit Phase)",
      name: "تحديث DOM الفعلي",
      desc: "تطبق React التغييرات الصافية فقط على شجرة المتصفح الحقيقية (DOM Nodes)، ثم يتم تفعيل تأثيرات useLayoutEffect و useEffect.",
      color: "border-emerald-500 bg-emerald-500/10 text-emerald-300"
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">خط إنتاج التحديثات في React (The 3-Step Pipeline)</h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {steps.map((st, i) => (
          <div key={i} className={\`p-4 rounded-xl border \${st.color} space-y-1.5\`}>
            <span className="text-[10px] font-mono uppercase tracking-wider block opacity-75">{st.phase}</span>
            <h5 className="font-bold text-xs">{st.name}</h5>
            <p className="text-[11px] leading-relaxed opacity-90">{st.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يعرض المكون تدفق التحديث بدقة علمية: يبدأ بالمحفز، يمر بالحسابات النقية في الذاكرة (Render Phase)، وينتهي بالتعديل الخاطف في الشاشة (Commit Phase).",
      commonMistakes: [
        {
          mistake: "إحداث آثار جانبية (Side Effects) مثل استدعاء fetch() أو تعديل DOM يدوياً داخل جسم دالة المكون أثناء مرحلة Render.",
          why: "مرحلة Render يجب أن تكون دالة نقية تماماً (Pure Function)؛ قد تقوم React بإلغاء الرندر وإعادة حسابه عدة مرات في وضع التزامن (Concurrent Mode)، مما يسبب تكرار طلبات الشبكة العشوائية!",
          fix: "ضع الآثار الجانبية دائماً داخل خطاف useEffect أو داخل معالجات الأحداث (Event Handlers)."
        }
      ],
      bestPractices: [
        "حافظ على نقاء مرحلة Render: نفس المدخلات (Props & State) يجب أن تُرجع نفس ناتج الـ JSX بدون تعديل متغيرات خارجية.",
        "تذكر أن الرندر لا يعني بالضرورة تغيير DOM؛ إذا كانت نتيجة الرندر مطابقة للشجرة السابقة، فلن تلمس React شجرة DOM الحقيقية في مرحلة الـ Commit نهائياً!"
      ],
      infographicCard: {
        type: "phases-diagram",
        title: "الفرق الحاسم بين مرحلتي Render و Commit",
        columns: [
          { phase: "Render Phase (التصيير)", attributes: ["استدعاء دوال المكونات", "حساب Virtual DOM", "مقارنة الفروقات (Diffing)", "لا يلمس DOM إطلاقاً"] },
          { phase: "Commit Phase (التثبيت)", attributes: ["تعديل DOM الحقيقي", "إدخال وحذف العقد في المتصفح", "سريع جداً ومقتصر على الفروقات", "تشغيل المؤثرات الجانبية"] }
        ]
      }
    },
    {
      id: "6.3.c",
      title: "تجميع تحديثات الحالة Batching",
      englishTerm: "Automatic Batching (React 18+ State Coalescing)",
      description: "الميزة الذكية التي تدمج عدة استدعاءات لتحديث الحالة (Multiple setState calls) في عملية إعادة تصيير واحدة (Single Re-render) بدلاً من إعادة تصيير المكون بعد كل سطر على حدة. في React 18 و 19، يتم التجميع تلقائياً (Automatic Batching) في كل الأماكن: داخل معالجات الأحداث، والوعود (Promises)، ومؤقتات setTimeout، والعمليات غير المتزامنة (Fetch).",
      realLifeAnalogy: "مثل نادل المطعم الذي يستلم طلبات الطعام، والشوربة، والمشروبات، والحلوى من جميع الجالسين على الطاولة ويسجلها في ورقة واحدة، ثم يذهب للمطبخ مرة واحدة لتسليم الطلب كاملاً، بدلاً من الركض للمطبخ والعودة بعد كل صنف يطلبه شخص.",
      whyItMatters: "يحمي التطبيق من إعادة الرسم الجزئي المشوه (Half-Finished States)، ويضاعف سرعة أداء التطبيق بتوفير مئات الرندرات غير الضرورية.",
      syntax: "// في React 18+: سطران للتحديث يسببان رندراً واحداً فقط!\nsetCount(c => c + 1);\nsetFlag(f => !f);\n// -> Single Re-render!",
      simpleExample: `// إثبات التجميع التلقائي (Automatic Batching)
import { useState } from "react";

function BatchingDemo() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // مراقبة عدد مرات الرندر
  console.log("رندر BatchingDemo: count =", count, "flag =", flag);

  const handleClick = () => {
    // استدعاءان متتاليان لتحديث حالتين مختلفتين
    setCount(c => c + 1);
    setFlag(f => !f);
    // بفضل Automatic Batching، سيحدث رندر واحد فقط يجمع التحديثين معاً!
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <p>العداد: {count} | الحالة: {flag ? "مفعل" : "معطل"}</p>
      <button onClick={handleClick} className="px-3 py-1 bg-indigo-600 rounded font-bold">
        تحديث الحالتين معاً
      </button>
    </div>
  );
}`,
      advancedExample: `// اختبار التجميع في العمليات غير المتزامنة (Async / setTimeout)
import { useState } from "react";

export function AsyncBatchingTester() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("خامل");
  const [renderCounter, setRenderCounter] = useState(0);

  // تحديث داخل دالة غير متزامنة (كان يفشل في التجميع قبل React 18 ولكنه مجمع تلقائياً الآن!)
  const handleAsyncUpdate = () => {
    setTimeout(() => {
      // هذان التحديثان مجمعان في رندر واحد تلقائياً في React 18 فصاعداً
      setStep((s) => s + 1);
      setStatus("تم الإنجاز بنجاح");
    }, 500);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-sm text-indigo-400">التجميع التلقائي في العمليات غير المتزامنة</h4>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
          React 18+ Feature
        </span>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono space-y-1">
        <p>الخطوة الحالية: {step}</p>
        <p>الحالة النصية: {status}</p>
      </div>

      <button
        onClick={handleAsyncUpdate}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
      >
        تنفيذ تحديث غير متزامن (داخل setTimeout)
      </button>

      <p className="text-[11px] text-slate-400">
        يتم دمج التحديثين داخل المؤقت في رندر واحد مشترك دون أي وميض أو ازدواج في الرسم.
      </p>
    </div>
  );
}`,
      output: "عند النقر على الزر، يُحدث المكون الحالتين معاً دفعة واحدة وينتج رندراً واحداً فقط، مما يحافظ على استقرار الواجهة وسرعتها.",
      commonMistakes: [
        {
          mistake: "الخوف من استدعاء دوال setState متعددة في نفس الدالة والظن بأن ذلك سيبطئ التطبيق.",
          why: "تعتني React 18 تلقائياً بتجميع كافة التحديثات في رندر موحد؛ لا داعي لدمج الحالات في كائن واحد لمجرد الخوف من بطء التحديثات المتتالية.",
          fix: "اكتب كودك بحرية؛ فنظام Automatic Batching يتولى تحسين الأداء في الخلفية نيابة عنك."
        }
      ],
      bestPractices: [
        "إذا كنت مضطراً في حالات نادرة جداً لفصل التحديث وإجبار المتصفح على رسم الواجهة فوراً بين سطرين (مثل قياس حجم عنصر DOM)، يمكنك استخدام flushSync من 'react-dom' بحذر شديد."
      ],
      infographicCard: {
        type: "batching-chart",
        title: "كيف يعمل التجميع التلقائي (Automatic Batching)؟",
        timeline: [
          "سطر 1: setCount(1)",
          "سطر 2: setText('جاهز')",
          "سطر 3: setIsReady(true)",
          "⚡ تجميع ذكي (Coalescing)",
          "🚀 إطلاق رندر واحد فقط (1 Single Re-render) بالقيم الثلاث مجتمعة!"
        ]
      }
    },
    {
      id: "6.3.d",
      title: "فهم إعادة تصيير المكونات",
      englishTerm: "Understanding Component Re-rendering & Tree Traversal",
      description: "المسار الهرمي الذي تسلكه React عندما يُطلب منها إعادة تصيير شجرة المكونات. عندما يُعاد تصيير مكون، تسير React في مسار تنازلي (Top-Down Cascade) وتعيد تشغيل دوال كافة المكونات الأبناء المتفرعة منه في الشجرة افتراضياً. فهم هذا المسار يساعد في تحديد الاختناقات الأدائية وتصميم هيكل شجرة المكونات بكفاءة.",
      realLifeAnalogy: "مثل قطرات المطر التي تسقط على قمة شجرة خضراء؛ تنزلق قطرات الماء من الغصن الأكبر في القمة نحو الأغصان الفرعية ثم إلى الأوراق الصغيرة بالأسفل بالكامل.",
      whyItMatters: "تجنب الرندرات المتتالية العشوائية عبر الشجرة بالكامل؛ وتنظيم هيكلية المكونات بحيث لا تسبب الحالات المتغيرة باستمرار اهتزاز الشجرة كاملة.",
      syntax: "// نمط عزل الرندر بوضع المكون المتغير في فرع مستقل\n<StaticHeader />\n<LiveTicker /> {/* يتغير بمفرده دون إعادة رندر الهيدر */}",
      simpleExample: `// إيضاح انحدار الرندر من الأب للأبناء
function StaticChild() {
  console.log("رندر الابن الثابت!");
  return <div className="text-slate-400 text-xs">أنا مكون ابن ثابت تماماً</div>;
}

function ParentContainer() {
  const [tick, setTick] = useState(0);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2">
      <button onClick={() => setTick(t => t + 1)} className="px-3 py-1 bg-indigo-600 rounded text-xs">
        إعادة رندر الأب ({tick})
      </button>
      {/* سيعاد رندره في كل مرة يُنقر فيها الزر بالأعلى */}
      <StaticChild />
    </div>
  );
}`,
      advancedExample: `// تقنية عزل الرندرات عبر التكوين (Composition via Children Prop)
import { useState } from "react";

// مكون ثقيل ومعقد جداً يستغرق وقتاً في الرندر
function VeryHeavyComponent() {
  console.log("🛑 تم تنفيذ المكون الثقيل جداً!");
  return (
    <div className="p-4 bg-indigo-950/40 border border-indigo-700/40 rounded-xl text-xs text-indigo-300">
      محتوى ثابت ثقيل (رسوم بيانية وجداول ضخمة)
    </div>
  );
}

// مكون حاوية متقلب الحالة يستقبل الأبناء عبر children
function DynamicColorChanger({ children }) {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["from-indigo-950", "from-emerald-950", "from-purple-950", "from-rose-950"];

  return (
    <div className={\`p-6 rounded-2xl border border-slate-800 bg-gradient-to-br \${colors[colorIndex]} to-slate-950 text-white space-y-4\`}>
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-xs">عزل الرندر بالـ Children Pattern</h4>
        <button
          onClick={() => setColorIndex((prev) => (prev + 1) % colors.length)}
          className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold"
        >
          تغيير لون الحاوية
        </button>
      </div>

      {/* المحتوى الممرر كـ children لن يُعاد رندره عند تغيير اللون! */}
      {children}
    </div>
  );
}

export function RenderIsolationArchitectureDemo() {
  return (
    <DynamicColorChanger>
      <VeryHeavyComponent />
    </DynamicColorChanger>
  );
}`,
      output: "عند النقر على تغيير لون الحاوية، يُعاد رندر DynamicColorChanger فقط، بينما لا يُعاد تشغيل VeryHeavyComponent نهائياً لأنه ممرر كـ children من خارج نطاق التغيير!",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن إعادة رندر المكون تعني بطء التطبيق تلقائياً.",
          why: "إعادة الرندر في React سريعة جداً وخفيفة لأنها مجرد استدعاء دوال JavaScript نقية؛ المشكلة تحدث فقط إذا كان المكون يحتوي حسابات رياضية عملاقة أو يولد آلاف عناصر DOM في مرحلة Commit.",
          fix: "لا تبالغ في محاولات التحسين المبكر (Premature Optimization) إلا بعد قياس الأداء الفعلي عبر React Profiler."
        }
      ],
      bestPractices: [
        "استخدم نمط (Lift Content Up via children) لعزل الأجزاء الثابتة الثقيلة عن الحالات الديناميكية دون الحاجة لاستخدام useMemo أو React.memo.",
        "اجعل الحالة قريبة قدر الإمكان من المكان الذي يحتاجها فقط."
      ],
      infographicCard: {
        type: "tree-cascade",
        title: "انحدار الرندر في شجرة المكونات",
        nodes: [
          "🌲 المكون الجذر (App)",
          "   ├── 🔄 المكون الأب (تغيرت حالته -> يبدأ الرندر هنا)",
          "   │    ├── ⚠️ الابن 1 (يُعاد رندره تلقائياً)",
          "   │    └── ⚠️ الابن 2 (يُعاد رندره تلقائياً)",
          "   └── ✅ المكون الشقيق (لم يتأثر ولن يُعاد رندره!)"
        ]
      }
    },
    {
      id: "6.3.e",
      title: "التمييز بين التصيير وتحديث DOM",
      englishTerm: "Re-rendering vs DOM Updating (Diffing Algorithm)",
      description: "المقارنة الأساسية بين استدعاء المكون وإعادة حساب ناتج JSX في الذاكرة (Re-rendering)، وبين التعديل الفيزيائي الحقيقي لعناصر الصفحة في المتصفح (DOM Mutation). تقوم React بمقارنة شجرة العناصر الافتراضية السابقة بالحالية عبر خوارزمية الفحص (Diffing)، وإذا كانت النتيجة متطابقة، فإنها لا تلمس شجرة DOM نهائياً.",
      realLifeAnalogy: "مثل مهندس الديكور الذي يعيد مراجعة مخطط الشقة على حاسوبه (Re-render)؛ وبعد مراجعة المخطط اكتشف أن الأريكة مكانها سليم ومناسب تماماً كما في الواقع، فلن يطلب من عمال النقل تحريك الأريكة الحقيقية ملميتراً واحداً (No DOM Update).",
      whyItMatters: "يزيل هذا المفهوم الخوف غير المبرر لدى المبتدئين؛ فرندر المكون 100 مرة لا يعني أن الصفحة ستطرف أو تنهار، لأن محرك React يحمي المتصفح من عمليات الرسم الباطلة.",
      syntax: "// رندر في الذاكرة: نعم يُنفذ\n// تحديث DOM: فقط إذا تغيرت الخاصية أو النص في الناتج الفعلي",
      simpleExample: `// مثال يوضح أن الرندر لا يعني بالضرورة تغيير عقدة الـ DOM
import { useState } from "react";

function DiffingProof() {
  const [clickCount, setClickCount] = useState(0);

  console.log("المكون يُعاد رندره! نقرة رقم:", clickCount);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <button onClick={() => setClickCount(c => c + 1)} className="px-3 py-1 bg-indigo-600 rounded">
        انقر هنا ({clickCount})
      </button>
      {/* هذا العنوان يُعاد رندره برمجياً ولكن React لا تلمس DOM الخاص به نهائياً لأنه ثابت! */}
      <h4 className="text-slate-300 font-bold">هذا العنوان لم يتغير ولن يُعاد رسمه في DOM الحقيقي</h4>
    </div>
  );
}`,
      advancedExample: `// فحص حقيقي عبر فحص عقدة DOM وحالة التركيز
import { useState } from "react";

export function DomDiffingInspector() {
  const [tick, setTick] = useState(0);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-sm text-indigo-400">مختبر خوارزمية Diffing وتحديث DOM</h4>
        <button
          onClick={() => setTick((t) => t + 1)}
          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold"
        >
          رندر تجريبي ({tick})
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-slate-400">
          اكتب في حقل الإدخال بالأسفل واضغط زر الرندر:
        </p>

        {/* حقل إدخال يحتفظ بالنص وبمؤشر الكتابة لأن React لم تستبدل عقدة الـ DOM بل تركتها كما هي */}
        <input 
          placeholder="اكتب شيئاً واضغط رندر تجريبي..."
          className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
        />

        <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono text-emerald-400">
          العقدة التي تتغير فعلياً في DOM هي فقط: [زر الرندر: {tick}]
        </div>
      </div>
    </div>
  );
}`,
      output: "عند الضغط على رندر، يظل حقل الإدخال محتفظاً بالتركيز وبالمؤشر الوامض وما كُتب بداخله دون أي تشويش، لأن React عبر خوارزمية Diffing علمت أن الحقل لم يتغير فلم تمس عقدة الـ DOM الخاصة به.",
      commonMistakes: [
        {
          mistake: "الظن بأن استخدام React Profiler ورؤية المكون باللون الأخضر أو الأصفر يعني أن DOM المتصفح يُعاد بناؤه من الصفر.",
          why: "المحلل (Profiler) يقيس وقت تنفيذ كود جافاسكريبت في مرحلة Render، ولا يعني ذلك أن عقد الـ DOM قد استُبدلت.",
          fix: "استخدم تبويب 'Rendering' في متصفح Chrome وفعل 'Paint Flashing' لترى الأجزاء الحقيقية التي يُعاد طلاؤها في المتصفح باللون الأخضر."
        }
      ],
      bestPractices: [
        "ثق في خوارزمية المطابقة (Reconciliation) في React؛ فهي مصممة بذكاء فائق لتطبيق الحد الأدنى المطلق من تعديلات DOM الحقيقية."
      ],
      infographicCard: {
        type: "diff-diagram",
        title: "كيف توفر React عمليات الـ DOM عبر الـ Diffing؟",
        steps: [
          "شجرة الـ Virtual DOM السابقة: <div> <h1 /> <input /> </div>",
          "شجرة الـ Virtual DOM الجديدة: <div> <h1 /> <input /> </div>",
          "المقارنة: التطابق 100% بين الشجرتين",
          "القرار في مرحلة Commit: 0 تعديلات في DOM الحقيقي! سرعة قصوى بدون استهلاك للبطارية أو المعالج!"
        ]
      }
    },
    {
      id: "6.3.f",
      title: "تأثير هوية المكون وموقعه على الحالة",
      englishTerm: "Component Position in Tree & State Preservation",
      description: "القاعدة الهندسية التي تحكم كيفية احتفاظ React بحالة المكونات أو تدميرها: ترتبط حالة المكون (State) بموقعه الدقيق في شجرة واجهة المستخدم (UI Tree)، وليس بتعريف الدالة نفسها. طالما ظل المكون في نفس الموضع الهيكلي ونفس نوع الوسم بين الرندرات المتتابعة، تحتفظ React بحالته؛ وإذا تغير موضعه أو نوعه، تُدمر الحالة فوراً وتُعاد للصفر.",
      realLifeAnalogy: "مثل صندوق البريد في الشارع؛ طالما أن الصندوق موضوع في نفس العنوان ونفس الزاوية في الحي، ستظل الرسائل تتراكم فيه يومياً. ولكن لو هدمت البلدية الصندوق وأنشأت مكانه كشك جرائد ثم أعادت وضع صندوق بريد بعد شهر، ستبدأ بصندوق فارغ تماماً وسيمسح السجل القديم.",
      whyItMatters: "تفسر لماذا تفقد المكونات حالتها أحياناً بشكل غامض عند كتابة شروط معقدة، وكيفية التحكم في بقاء البيانات أو مسحها عمداً.",
      syntax: "// نفس الموضع ونفس النوع -> بقاء الحالة\n{isFancy ? <Counter isFancy={true} /> : <Counter isFancy={false} />}\n\n// موضعان مختلفان بهياكل مختلفة -> مسح الحالة\n{isFancy ? <div><Counter /></div> : <section><Counter /></section>}",
      simpleExample: `// مثال يوضح بقاء الحالة طالما أن المكون في نفس الموضع في الشجرة
import { useState } from "react";

function SubCounter({ styleType }) {
  const [score, setScore] = useState(0);
  return (
    <div className={\`p-3 rounded-lg \${styleType === "pro" ? "bg-indigo-900" : "bg-slate-800"}\`}>
      <p className="text-xs">النقاط: {score}</p>
      <button onClick={() => setScore(s => s + 1)} className="px-2 py-0.5 bg-slate-700 rounded text-xs mt-1">+1</button>
    </div>
  );
}

function PositionPersistenceDemo() {
  const [isPro, setIsPro] = useState(false);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3">
      {/* المكون في نفس الموضع ونفس النوع SubCounter، لذا ستحتفظ React بالنقاط عند التبديل! */}
      {isPro ? <SubCounter styleType="pro" /> : <SubCounter styleType="basic" />}
      <button onClick={() => setIsPro(p => !p)} className="px-3 py-1 bg-emerald-600 rounded text-xs">
        تبديل النمط (النقاط ستبقى محفوظة!)
      </button>
    </div>
  );
}`,
      advancedExample: `// تجربة حية تثبت هدم الحالة عند تغيير الوسم الأب المحيط (div vs section)
import { useState } from "react";

function StatefulFormInput({ label }) {
  const [text, setText] = useState("");
  return (
    <div className="space-y-1">
      <label className="text-xs text-slate-300 font-bold">{label}:</label>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب ملاحظة هنا..."
        className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white"
      />
    </div>
  );
}

export function TreePositionStateExperiment() {
  const [changeWrapper, setChangeWrapper] = useState(false);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-sm text-indigo-400">تأثير الهيكل الشجري على بقاء الحالة</h4>
        <button
          onClick={() => setChangeWrapper((w) => !w)}
          className="px-3 py-1 bg-rose-600 hover:bg-rose-500 rounded-xl text-xs font-bold transition-all"
        >
          تغيير الوسم الأب المحيط
        </button>
      </div>

      <p className="text-xs text-slate-400">
        اكتب نصاً في الحقل ثم اضغط زر تغيير الوسم الأب: ستلاحظ مسح النص لأن React هدمت العقدة بسبب تغيير نوع الأب من div إلى section!
      </p>

      {/* تغيير نوع الوسم الخارجي يدمر حالة كافة الأبناء بالداخل */}
      {changeWrapper ? (
        <section className="p-4 bg-slate-800/80 rounded-xl border border-rose-500/50">
          <span className="text-[10px] text-rose-300 block mb-2 font-mono">&lt;section&gt; (نوع جديد)</span>
          <StatefulFormInput label="حقل في حاوية قسم" />
        </section>
      ) : (
        <div className="p-4 bg-slate-800/80 rounded-xl border border-indigo-500/50">
          <span className="text-[10px] text-indigo-300 block mb-2 font-mono">&lt;div&gt; (حاوية أصلية)</span>
          <StatefulFormInput label="حقل في حاوية صندوق" />
        </div>
      )}
    </div>
  );
}`,
      output: "عند تغيير الوسم الأب من div إلى section، ترى React شجرة هيكلية مختلفة، فتفرغ الحالة القديمة بالكامل وتبني المكون من الصفر بقيمة فارغة.",
      commonMistakes: [
        {
          mistake: "تعريف مكون داخل جسم مكون آخر مثل: function Parent() { function Child() { ... } return <Child />; }.",
          why: "في كل مرة يُعاد فيها رندر Parent، يتم إنشاء دالة Child جديدة كلياً في الذاكرة بنوع وهوية مختلفة، مما يجعل React تهدم حالة Child وتعيد بناءها في كل نقرة!",
          fix: "عرف دائماً المكونات في المستوى الأعلى الخارجي للملف، ولا تعرف مكوناً في قلب دالة مكون آخر أبداً."
        }
      ],
      bestPractices: [
        "حافظ على ثبات هيكل شجرة المكونات وتجنب تبديل الوسوم الحاوية (Wrappers) إذا كنت ترغب في الحفاظ على حالة الأبناء.",
        "إذا أردت عمداً مسح الحالة وإعادة تصفيرها بدون تغيير الهيكل، استخدم خاصية key مختلفة (كما في النقطة التالية)."
      ],
      infographicCard: {
        type: "rule-box",
        title: "القاعدة الذهبية لارتباط الحالة بالهيكل (Position Rule)",
        rules: [
          "نفس المكون في نفس الموضع الهيكلي الشجري = تحتفظ React بالحالة.",
          "تغير نوع المكون أو تغير الوسم الأب المحيط به = تدمير الحالة وإعادة التهيئة للصفر."
        ]
      }
    },
    {
      id: "6.3.g",
      title: "إعادة تعيين الحالة باستخدام key",
      englishTerm: "Resetting State with Key Property",
      description: "التقنية الرسمية الأنيقة في React لإجبار المكون على تفريغ حالته وإعادة تهيئتها للصفر عمداً (Force State Reset) دون الحاجة لكتابة دوال يدوية شاقة. بتغيير قيمة خاصية key للمكون، تُخبر React بأن هذا المكون يمثل كياناً مختلفاً تماماً، فتقوم بهدم النسخة القديمة وإنشاء نسخة جديدة بحالة نظيفة.",
      realLifeAnalogy: "مثل تغيير دفتر الملاحظات بالكامل عند بدء مشروع جديد؛ بدلاً من الجلوس بالساعات واستخدام الممحاة لمسح 100 صفحة من الملاحظات القديمة وتفريغها، تشتري دفتراً جديداً نظيفاً (تغيير الـ Key) لتبدأ فيه من الصفحة الأولى.",
      whyItMatters: "أفضل وأبسط حل لإعادة تصفير نماذج الإدخال عند اختيار مستخدم آخر (مثل التبديل بين جهات الاتصال)، أو إعادة تشغيل مقطع فيديو، أو تصفير استبيان دون كتابة سطور useEffect وتفريغ الحالات يدوياً.",
      syntax: "<ChatBox key={userId} recipientId={userId} />",
      simpleExample: `// إعادة تعيين حقل إدخال عند تغيير المستخدم المختار
import { useState } from "react";

function ProfileNotes({ user }) {
  // حالة الملاحظات المكتوبة
  const [note, setNote] = useState("");

  return (
    <div className="p-3 bg-slate-800 rounded-lg text-xs space-y-2">
      <p className="font-bold text-slate-200">ملاحظات العميل: {user.name}</p>
      <input 
        value={note} 
        onChange={(e) => setNote(e.target.value)} 
        placeholder="اكتب ملاحظة هنا..."
        className="w-full p-1.5 bg-slate-900 border border-slate-700 rounded text-white"
      />
    </div>
  );
}

function ContactSwitcherDemo() {
  const [currentId, setCurrentId] = useState("user-1");

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3">
      <div className="flex gap-2">
        <button onClick={() => setCurrentId("user-1")} className="px-2 py-1 bg-indigo-600 rounded text-xs">سارة</button>
        <button onClick={() => setCurrentId("user-2")} className="px-2 py-1 bg-emerald-600 rounded text-xs">عمر</button>
      </div>
      {/* مفتاح key={currentId} يعيد بناء المكون ويصفر الملاحظة تلقائياً عند التبديل! */}
      <ProfileNotes key={currentId} user={{ id: currentId, name: currentId === "user-1" ? "سارة" : "عمر" }} />
    </div>
  );
}`,
      advancedExample: `// تطبيق محادثة فورية متعدد القنوات يعتمد على الـ Key لعزل المسودات وإعادة التهيئة
import { useState } from "react";

// مكون صندوق الدردشة ذو الحالة الداخلية
function ChannelChatRoom({ channelName }) {
  const [draftMessage, setDraftMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: \`مرحباً بكم في قناة #\${channelName}!\`, time: "10:00 ص" }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!draftMessage.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), text: draftMessage, time: new Date().toLocaleTimeString() }]);
    setDraftMessage("");
  };

  return (
    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 text-xs">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <span className="font-bold text-indigo-400">قناة: #{channelName}</span>
        <span className="text-[10px] text-slate-500 font-mono">حالة معزولة ومصفرة بالـ key</span>
      </div>

      <div className="h-32 overflow-y-auto space-y-2 p-2 bg-slate-900/60 rounded-xl">
        {messages.map((m) => (
          <div key={m.id} className="p-2 bg-slate-800/80 rounded-lg">
            <p className="text-slate-200">{m.text}</p>
            <span className="text-[9px] text-slate-500 block text-left font-mono">{m.time}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input 
          type="text"
          value={draftMessage}
          onChange={(e) => setDraftMessage(e.target.value)}
          placeholder="اكتب رسالتك في هذه القناة..."
          className="flex-1 p-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white"
        />
        <button type="submit" className="px-3 py-1.5 bg-indigo-600 rounded-xl font-bold text-white hover:bg-indigo-500">
          إرسال
        </button>
      </form>
    </div>
  );
}

export function KeyResetMasterDemo() {
  const [activeChannel, setActiveChannel] = useState("general");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">نظام القنوات وإعادة تصفير الحالة بالـ key</h4>

      {/* أزرار التبديل بين القنوات */}
      <div className="flex gap-2">
        {["general", "frontend", "announcements"].map((ch) => (
          <button
            key={ch}
            onClick={() => setActiveChannel(ch)}
            className={\`px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${
              activeChannel === ch 
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/40" 
                : "bg-slate-800 text-slate-400 hover:text-slate-200"
            }\`}
          >
            #{ch}
          </button>
        ))}
      </div>

      {/* بتغيير key={activeChannel}، تدمر React المحادثة السابقة وتبدأ محادثة جديدة نظيفة للقناة المحددة */}
      <ChannelChatRoom key={activeChannel} channelName={activeChannel} />
    </div>
  );
}`,
      output: "عند التبديل بين القنوات عبر الأزرار، يتم تصفير مسودة الرسائل وحالة القناة تلقائياً وبشكل نظيف دون كتابة سطر كود واحد للتصفير اليدوي، بفضل تغيير مفتاح key={activeChannel}.",
      commonMistakes: [
        {
          mistake: "استخدام useEffect لمزامنة وتصفير كل حقل يدوي عند تغير الـ ID المستلم في الـ Props.",
          why: "كتابة useEffect لتصفير 5 أو 6 حالات يدوياً (setA(''), setB(''), ...) تسبب رندراً مزدوجاً غير مرغوب فيه وتبطئ التطبيق وتزيد التعقيد!",
          fix: "مرر خاصية key={id} على المكون من الخارج في المكون الأب، وستتكفل React بتصفير كل الحالات تلقائياً في رندر واحد خاطف."
        }
      ],
      bestPractices: [
        "استخدم key={entityId} في أي نموذج تفصيلي (Detail View) أو محرر (Editor) يعرض بيانات عناصر قابلة للتغيير.",
        "تذكر: المفتاح key ليس محصوراً بالقوائم ومصفوفات map؛ هو أداة هوية عامة يمكن وضعها على أي مكون منفرد في React."
      ],
      infographicCard: {
        type: "concept-card",
        title: "القوة الخارقة لخاصية key خارج القوائم",
        points: [
          "تغيير الـ Key يخبر React: هذا كيان جديد كلياً وليس نفس القديم.",
          "تقوم React بهدم المكون القديم (Unmount) وإنشاء الجديد (Mount).",
          "تصفير كافة حالات useState ومربعات الإدخال فوراً وبأعلى أداء ممكن."
        ]
      }
    },
    {
      id: "6.3.h",
      title: "الأخطاء الناتجة عن تعديل State مباشرة",
      englishTerm: "Direct State Mutation Pitfalls & Bug Anatomy",
      description: "التشريح الجنائي لأخطر وأخبث الأخطاء البرمجية الناتجة عن تعديل متغيرات الحالة مباشرة (Mutation Bugs). عندما يقوم المبرمج بتعديل كائن أو مصفوفة في مكانها، تنهار منظومة المراقبة، وتتعطل أدوات التطوير، وتظهر أخطاء عشوائية مستعصية لا يمكن تتبعها.",
      realLifeAnalogy: "مثل تزوير سجلات القيود في السجل العقاري؛ عندما يغير المزور أسماء الملاك سراً في الورق القديم دون المرور بكاتب العدل وتوثيق المعاملة في النظام الإلكتروني، تنشأ نزاعات عقارية كارثية وتفقد الدولة القدرة على تتبع المالك الحقيقي.",
      whyItMatters: "تجنب ساعات طويلة من التصحيح المؤلم (Debugging nightmares)؛ فهم أسباب الخلل يرسخ لديك عقلية الامتناع عن التعديل المباشر كقانون مقدس لا مساومة عليه في React.",
      syntax: "// ❌ الخطيئة الكبرى: تعديل مباشر\nstate.items.push(x);\n\n// ✅ الصواب: نسخة جديدة بالكامل\nsetState(prev => ({ ...prev, items: [...prev.items, x] }));",
      simpleExample: `// مثال مباشر للأخطاء الناتجة عن التعديل المباشر
import { useState } from "react";

function DirectMutationTrap() {
  const [data, setData] = useState({ score: 10 });

  const buggyMutation = () => {
    // تعديل الخاصية مباشرة في نفس الكائن الأصلي
    data.score = 99;
    // استدعاء التحديث بنفس الكائن
    setData(data);
    // المفاجأة الصادمة: لن يتغير الرقم على الشاشة أبداً! لأن المرجع في الذاكرة لم يتغير!
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
      <p>النقاط المعروضة: {data.score}</p>
      <button onClick={buggyMutation} className="px-3 py-1 bg-rose-600 rounded font-bold">
        تعديل خاطئ مباشر (جرّب النقر)
      </button>
    </div>
  );
}`,
      advancedExample: `// محاكاة شاملة للأضرار الخمسة للتعديل المباشر مع مقارنة الأداء
import { useState } from "react";

export function MutationAnatomyLab() {
  const [user, setUser] = useState({ name: "سامي", roles: ["عضو"] });
  const [log, setLog] = useState("");

  // السيناريو الخاطئ: التعديل المباشر
  const executeBuggyMutation = () => {
    // 1. تعديل مباشر للمصفوفة
    user.roles.push("مشرف");
    // 2. محاولة الحفظ
    setUser(user);
    setLog("⚠️ تم تعديل الذاكرة مباشرة: الـ roles أصبحت ['عضو', 'مشرف'] ولكن الشاشة ترفض التحديث لأن user === user!");
  };

  // السيناريو السليم: اللاتبديلية النقية
  const executeCorrectUpdate = () => {
    setUser((prev) => ({
      ...prev,
      roles: [...prev.roles, "مشرف ممتاز"]
    }));
    setLog("✅ تم إنشاء مرجع جديد تماماً: React اكتشفت التغيير وأعادت تصيير الشاشة فوراً!");
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-rose-400">التشريح الجنائي لأخطاء التعديل المباشر (Mutation)</h4>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono space-y-1">
        <p>الاسم: {user.name}</p>
        <p>الأدوار الحالية: {user.roles.join(" ، ")}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={executeBuggyMutation}
          className="flex-1 py-2 bg-rose-600/30 hover:bg-rose-600/50 text-rose-300 border border-rose-500/40 rounded-xl text-xs font-bold transition-all"
        >
          تعديل مباشر ❌
        </button>
        <button
          onClick={executeCorrectUpdate}
          className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold transition-all text-white shadow-md shadow-emerald-900/40"
        >
          تحديث نقي ✅
        </button>
      </div>

      {log && (
        <div className="p-3 bg-slate-800/80 rounded-xl text-xs text-slate-300 leading-relaxed border border-slate-700">
          {log}
        </div>
      )}
    </div>
  );
}`,
      output: "عند الضغط على الزر الخاطئ تظل الشاشة كما هي دون تغيير الأدوار، بينما عند الضغط على الزر السليم تظهر الأدوار الجديدة فوراً أمام عين المستخدم.",
      commonMistakes: [
        {
          mistake: "استخدام المكتبات القديمة أو أساليب lodash cloneDeep المفرطة لحل المشكلة دون فهم.",
          why: "لا تحتاج لمكتبات خارجية ثقيلة في أغلب الحالات؛ المعاملات القياسية مثل Spread (...) و filter و map كافية لتغطية 99% من سيناريوهات التحديث النظيف بكفاءة خارقة.",
          fix: "التزم بأنماط جافاسكريبت الحديثة الموضحة في هذا القسم."
        }
      ],
      bestPractices: [
        "عامل أي كائن أو مصفوفة مخزنة في useState كأنها مجمدة بالقفل والحديد (Treat State as Read-Only).",
        "استخدم أدوات مثل StrictMode في بيئة التطوير لاكتشاف التعديلات المباشرة العارضة مبكراً."
      ],
      infographicCard: {
        type: "danger-breakdown",
        title: "الكوارث الخمس الناتجة عن التعديل المباشر (Direct Mutation)",
        dangers: [
          "1. صمت الواجهة: عدم حدوث أي رندر جديد لتطابق المرجع في الذاكرة.",
          "2. انهيار الـ Memoization: فشل أدوات مثل React.memo و useMemo.",
          "3. تعطل Time-Travel Debugging في أدوات المطور Redux / React DevTools.",
          "4. تسرب البيانات وتشويهها بين المكونات الشقيقة التي تشارك نفس المرجع.",
          "5. فقدان القدرة على استرجاع الحالات السابقة وإلغاء التراجع (Undo/Redo)."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q6-3-1",
      question: "ما الفرق الأساسي بين مرحلة Render ومرحلة Commit في دورة حياة React؟",
      options: [
        "مرحلة Render تتعامل مع قواعد البيانات، بينما Commit تتعامل مع المتصفح",
        "مرحلة Render حسابية نقية في الذاكرة لحساب الفروقات دون لمس المتصفح، بينما Commit هي مرحلة تطبيق تلك الفروقات في DOM الفعلي",
        "لا يوجد فرق حقيقي وهما مجرد اسمين لنفس الخطوة في نفس الوقت",
        "مرحلة Commit تُنفذ قبل مرحلة Render في كل دورة"
      ],
      correctAnswer: 1,
      explanation: "في Render Phase تستدعي React دوال المكونات وتحسب Virtual DOM وتقارنه (Diffing) دون المساس بمتصفح الويب؛ وفقط في Commit Phase يتم تحديث عناصر DOM الحقيقية بسرعة فائقة."
    },
    {
      id: "q6-3-2",
      question: "ماذا تفعل ميزة Automatic Batching في React 18+ عندما تستدعي دالتي setState متتاليتين؟",
      options: [
        "تقوم بإعادة رندر المكون مرتين متتاليتين بسرعة فائقة",
        "تدمج التحديثين وتطلق رندراً واحداً فقط للمكون لتوفير الأداء",
        "تتجاهل التحديث الثاني وتنفذ التحديث الأول فقط",
        "توقف تنفيذ الكود حتى يضغط المستخدم على الشاشة"
      ],
      correctAnswer: 1,
      explanation: "تجمع ميزة Automatic Batching كافة استدعاءات الحالة المتزامنة وغير المتزامنة في دورة رندر واحدة لتقليل الجهد الحسابي ومنع وميض الشاشة غير المرغوب فيه."
    },
    {
      id: "q6-3-3",
      question: "كيف يمكنك إجبار مكون مستقل على إعادة تصفير حالته الداخلية (State Reset) عند اختيار عنصر جديد؟",
      options: [
        "بحذف المكون من ملفات المشروع",
        "بتمرير خاصية key فريدة تتغير بتغير العنصر المختار (مثل key={item.id})",
        "باستدعاء window.location.reload()",
        "بحذف كلمة useState من المكون"
      ],
      correctAnswer: 1,
      explanation: "عندما تتغير قيمة خاصية key للمكون، تدرك React أن هذا كيان جديد كلياً، فتقوم بهدم المكون القديم وبناء مكون جديد تماماً بحالة أولية نظيفة ومصفرة."
    }
  ],
  exercise: {
    id: "ex6-3",
    title: "بناء مستكشف ومختبر دورة التصيير والتصفير بالمفتاح",
    description: "المطلوب بناء مكون React تفاعلي باسم RenderCycleLab يحاكي دورة التصيير الكاملة: يتيح التبديل بين ملفي مستخدمين مختلفين مع تصفير حقول نموذج التقييم بالكامل عبر key={activeUserId}، ويوفر زراً لتحديث حالتين مجمعتين بـ Automatic Batching، مع عرض شريط تقدم يوضح مرحلتي Render و Commit بصرياً.",
    starterCode: `export function RenderCycleLab() {
  // اكتب كود المختبر وحالات التبديل والتجميع هنا
  return (
    <div>
      {/* صمم واجهة المختبر */}
    </div>
  );
}`,
    hints: [
      "أنشئ مكوناً فرعياً اسمه UserFeedbackForm له حالة محلية لحقل الملاحظات.",
      "في المكون الأب، ضع key={activeUserId} على استدعاء UserFeedbackForm ليتم التصفير تلقائياً.",
      "أضف زراً يغير حالتين (الرقم والحالة) في نفس الدالة لمشاهدة التجميع في الرندر.",
      "أضف console.log في جسم الدالة لتأكيد حدوث رندر واحد فقط."
    ],
    solution: `import { useState } from "react";

// 1. مكون نموذج تقييم الموظف المستقل (يحوي حالة داخلية)
function UserFeedbackForm({ userId, userName }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  return (
    <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3 text-xs">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <span className="font-bold text-slate-100">تقييم الموظف: {userName}</span>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
          المعرف: {userId}
        </span>
      </div>

      <div className="space-y-1">
        <label className="text-slate-400 block">درجة التقييم (من 10):</label>
        <div className="flex items-center gap-3">
          <input 
            type="range" 
            min="1" 
            max="10" 
            value={rating} 
            onChange={(e) => setRating(Number(e.target.value))}
            className="flex-1 accent-indigo-500"
          />
          <span className="font-bold text-indigo-400 font-mono text-sm w-6">{rating}</span>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-slate-400 block">الملاحظات التقييمية:</label>
        <textarea
          rows={2}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="اكتب التقييم هنا (سيتم تصفيره بالـ key عند التبديل)..."
          className="w-full p-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500"
        />
      </div>
    </div>
  );
}

// 2. المكون الرئيسي للمختبر
export function RenderCycleLab() {
  const [selectedUser, setSelectedUser] = useState("u-1");
  const [batchCount, setBatchCount] = useState(0);
  const [batchFlag, setBatchFlag] = useState(false);

  // دالة تحديث مجمعة تثبت الـ Automatic Batching
  const handleBatchClick = () => {
    // استدعاءان متتاليان
    setBatchCount((c) => c + 1);
    setBatchFlag((f) => !f);
    // تجميع تلقائي في رندر واحد!
  };

  const users = [
    { id: "u-1", name: "م. حسام الدين" },
    { id: "u-2", name: "د. ريم الفهد" },
    { id: "u-3", name: "أ. طارق الشريف" }
  ];

  const currentUser = users.find((u) => u.id === selectedUser);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto text-white space-y-5 font-sans">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-black text-slate-100">مختبر دورة التصيير في React</h3>
          <p className="text-xs text-slate-400">تطبيق عملي للـ Batching، ومراحل الرندر، والتصفير بالـ Key</p>
        </div>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2.5 py-1 rounded-lg">
          React Reconciliation
        </span>
      </div>

      {/* شريط اختيار الموظف لتجربة الـ Key Reset */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-300">اختر موظفاً لاختبار تصفير النموذج التلقائي بالـ key:</label>
        <div className="flex gap-2">
          {users.map((u) => (
            <button
              key={u.id}
              onClick={() => setSelectedUser(u.id)}
              className={\`flex-1 py-2 rounded-xl text-xs font-bold transition-all border \${
                selectedUser === u.id
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-900/40"
                  : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800"
              }\`}
            >
              {u.name}
            </button>
          ))}
        </div>
      </div>

      {/* النموذج الذي يُعاد تصفيره تلقائياً عبر خاصية key={selectedUser} */}
      <UserFeedbackForm key={selectedUser} userId={currentUser.id} userName={currentUser.name} />

      {/* قسم اختبار الـ Batching */}
      <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-slate-300">اختبار التجميع التلقائي (Automatic Batching):</span>
          <span className="font-mono text-emerald-400">{batchFlag ? "حالة A" : "حالة B"} (عداد: {batchCount})</span>
        </div>

        <button
          onClick={handleBatchClick}
          className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold border border-slate-700 transition-all"
        >
          تحديث الحالتين دفعة واحدة (Single Re-render) ⚡
        </button>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة دورة التصيير وهندسة الشجرة في React",
    description: "الدليل المرئي الشامل لمحفزات الرندر، التجميع التلقائي، وحفظ الحالة بالهيكل والمفتاح.",
    sections: [
      {
        heading: "1. محفزات الرندر ومراحله",
        bullets: [
          "محفزان لا ثالث لهما: الرندر المبدئي (Mount) أو تحديث الحالة (State Update).",
          "Render Phase: حساب نقي لـ Virtual DOM دون لمس المتصفح إطلاقاً.",
          "Commit Phase: تطبيق الفروقات المحسوبة فقط في DOM الحقيقي بسرعة فائقة."
        ]
      },
      {
        heading: "2. التجميع التلقائي (Automatic Batching)",
        bullets: [
          "دمج ذكي: استدعاءات setState المتتالية تُدمج في رندر واحد مشترك.",
          "شامل للجميع: يعمل داخل النماذج، الوعود (Promises)، ومؤقتات setTimeout في React 18+."
        ]
      },
      {
        heading: "3. هوية المكون والمفتاح (Identity & Key)",
        bullets: [
          "ارتباط الموضع: نفس المكون في نفس الموضع الهيكلي = بقاء الحالة واستقرارها.",
          "سحر الـ key: تغيير المفتاح يهدم المكون القديم ويصفر كافة حالاته تلقائياً."
        ]
      }
    ]
  }
};
