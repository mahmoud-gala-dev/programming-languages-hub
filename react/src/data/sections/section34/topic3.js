// topic3.js - القسم 34، الموضوع 3: الاستعداد لمقابلات React (React Deep Technical Interviews)
// يحتوي على 15 موضوعاً فرعياً مفصلاً وفق معايير الجودة الصارمة والشرح من الصفر

export const TOPIC_34_3 = {
  id: "topic-34-3",
  title: "الاستعداد لمقابلات React",
  description: "الموسوعة الهندسية الأعمق لاجتياز المقابلات التقنية لمهندسي React المتقدمين، تشمل المقارنات المفصلة، آليات شجرة الألياف (Fiber Tree)، دورة التصيير، التوفيق والمصالحة (Reconciliation)، خطافات الأداء، وخوارزميات RSC وSSR.",
  subtopics: [
    {
      id: "34.3.a",
      title: "الفرق الجوهري بين Props وState (Props vs State Architecture)",
      technicalTerm: {
        english: "Props vs State & Unidirectional Data Flow",
        pronunciation: "بروبس فيرسس ستيت آند يوني دايريكشنال داتا فلو",
        arabicMeaning: "الخصائص مقابل الحالة والتدفق أحادي الاتجاه للبيانات"
      },
      description: "في مقابلات العمل، يتم اختبار فهمك للتدفق أحادي الاتجاه (Unidirectional Flow): الـ `Props` هي بيانات واردة من المكون الأب إلى المكون الابن، وتكون للقراءة فقط (Read-Only / Immutable) ولا يجوز للمكون المستقبل تعديلها أبداً. في المقابل، فإن `State` هي بيانات داخلية خاصة بالمكون نفسه (Encapsulated / Mutable via Setter)، يمتلكها ويديرها ويعدلها، وكل تغيير في الحالة يطلق دورة إعادة تصيير (Re-render) لتحديث واجهة المستخدم.",
      realWorldAnalogy: "مثل شهادة ميلادك مقابل ملابسك؛ شهادة ميلادك ومعلوماتك الرسمية (Props) يمنحك إياها والداك ولا يمكنك تغيير اسم والدك بنفسك، بينما ملابسك (State) هي قرارك الداخلي اليومي تستطيع تغييره متى شئت.",
      whyItMatters: "محاولة تعديل الـ Props مباشرة تكسر نمط التدفق أحادي الاتجاه وتسبب تشوهات بصرية مستحيلة التتبع في شجرة التطبيق.",
      syntax: "// Props: تمرير خارجي\n<UserCard name=\"سارة\" age={25} />\n// State: إدارة داخلية\nconst [count, setCount] = useState(0);",
      simpleExample: `// مثال مقارنة Props وState في مكون تفاعلي
import React, { useState } from 'react';

// المكون يستقبل title كخاصية خارجية Props غير قابلة للتعديل
export function ArticleReader({ title }) {
  // المكون يمتلك حالته الخاصة State لتتبع حجم الخط
  const [fontSize, setFontSize] = useState(14);

  return (
    <div className="p-4 bg-slate-900 rounded-xl space-y-3">
      {/* عرض الـ Prop الثابت */}
      <h3 className="text-white font-bold">{title}</h3>
      {/* تعديل الـ State الداخلية */}
      <p style={{ fontSize: \`\${fontSize}px\` }} className="text-slate-350">
        هذا النص يتغير حجمه داخلياً دون المساس بالعنوان الوارد من الأب.
      </p>
      <button 
        onClick={() => setFontSize(prev => prev + 2)}
        className="px-3 py-1 bg-indigo-600 text-white rounded text-xs"
      >
        تكبير الخط
      </button>
    </div>
  );
}`,
      advancedExample: `// تصعيد الحالة للأعلى (Lifting State Up) عندما تحتاج مكونات متجاورة لمشاركة البيانات
import React, { useState } from 'react';

// المكون الأب يدير الحالة المركزية
export function ParentDashboard() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="p-4 bg-slate-950 rounded-2xl space-y-4">
      {/* المكون الأول يستقبل دالة تغيير الحالة كـ Prop */}
      <FilterButtons current={activeFilter} onChange={setActiveFilter} />
      {/* المكون الثاني يستقبل القيمة الحالية كـ Prop للقراءة والعرض فقط */}
      <DataView filter={activeFilter} />
    </div>
  );
}

function FilterButtons({ current, onChange }) {
  return (
    <div className="flex gap-2">
      {['all', 'active', 'completed'].map(f => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={\`px-3 py-1 rounded text-xs \${current === f ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

function DataView({ filter }) {
  return <div className="text-xs text-slate-350">البيانات المعروضة وفق الفلتر: {filter}</div>;
}`,
      outputExplanation: "يوضح الكود كيف تصعد الحالة إلى أقرب أب مشترك (Lifting State Up) ليتم تمريرها للأسفل كـ Props نقية تحافظ على التدفق أحادي الاتجاه.",
      commonMistakes: "محاولة كتابة `props.count = 5` مباشرة داخل المكون الفرعي، وهو ما يمنعه وضع StrictMode في React ويطلق تحذيراً فورياً.",
      bestPractices: "اجعل الحالة (State) في أدنى مستوى ممكن من شجرة المكونات واصعد بها للأب فقط عندما تشترك عدة مكونات في نفس البيانات.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="220" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="140" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Props (External)</text>
  <text x="140" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Passed by Parent</text>
  <text x="140" y="110" fill="#34d399" fontSize="10" textAnchor="middle">Read-Only (Immutable)</text>
  <path d="M 270 90 L 310 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="65" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">State (Internal)</text>
  <text x="450" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Managed within Component</text>
  <text x="450" y="110" fill="#f59e0b" fontSize="10" textAnchor="middle">Triggers Re-render on change</text>
</svg>`
    },
    {
      id: "34.3.b",
      title: "شرح دورة حياة التصيير في React (Render Phase vs Commit Phase)",
      technicalTerm: {
        english: "Render Phase vs Commit Phase Pipeline",
        pronunciation: "ريندر فيز فيرسس كوميت فيز بايبلاين",
        arabicMeaning: "مرحلة التصيير الحسابية مقابل مرحلة التنفيذ في الـ DOM"
      },
      description: "يقسم محرك React دورة حياة المكون إلى مرحلتين منفصلتين: 1. مرحلة التصيير (Render Phase): وهي مرحلة نقية خالية من الآثار الجانبية (Pure & Side-effect free)، يقوم فيها React باستدعاء دوال المكونات، وبناء شجرة JSX الافتراضية، ومقارنة الفوارق (Diffing)، ويمكن تعليقها أو إلغاؤها بفضل Concurrent Mode. 2. مرحلة التنفيذ (Commit Phase): وهي مرحلة متزامنة وسريعة يقوم فيها React بكتابة التعديلات الفعلية في الـ DOM الحقيقي ثم تشغيل `useLayoutEffect` متبوعاً بـ `useEffect`.",
      realWorldAnalogy: "مثل تجهيز مخططات عمارة جديدة؛ المهندس المعماري يجلس في مكتبه ويرسم ويعدل المخططات عدة مرات دون لمس الأرض (Render Phase)، وبمجرد اعتماد المخطط النهائي يأتي عمال البناء لوضع الطوب في موقع العمل الفعلي (Commit Phase).",
      whyItMatters: "فهم المرحلتين يوضح سبب عدم وضع أي آثار جانبية (مثل `fetch` أو اشتراكات الموقتات) داخل جسم المكون مباشرة بل حصرها داخل `useEffect`.",
      syntax: "// مرحلة Render: داخل جسم الدالة (نقية دائماً)\nfunction Component() {\n  // مرحلة Commit: داخل useEffect بعد اكتمال الـ DOM\n  useEffect(() => { /* Side Effects */ }, []);\n}",
      simpleExample: `// مثال يوضح توقيت تنفيذ مراحل التصيير
import React, { useEffect } from 'react';

export function RenderLifecycleDemo() {
  // 1. مرحلة Render: تنفذ أولاً في كل تحديث
  console.log('1. Render Phase: حساب وحساب شجرة JSX الافتراضية');

  // 2. مرحلة Commit: تنفذ فقط بعد تحديث الـ DOM
  useEffect(() => {
    console.log('2. Commit Phase: الـ DOM جاهز ومتاح للتفاعل');
  }, []);

  return <div className="text-white text-xs">فحص وحدة التحكم لرؤية الترتيب</div>;
}`,
      advancedExample: `// إثبات تكرار مرحلة الـ Render في StrictMode للتأكد من نقاء الدوال (Purity Check)
import React, { useState } from 'react';

let renderCounter = 0;

export function PurityStressTest() {
  const [count, setCount] = useState(0);

  // جسم الدالة ينفذ مرتين في بيئة التطوير بفضل StrictMode لرصد الـ Side Effects
  renderCounter++;
  console.log(\`Render count: \${renderCounter}\`);

  return (
    <div className="p-4 bg-slate-900 rounded-xl space-y-2">
      <span className="text-xs text-white">العداد الحالي: {count}</span>
      <button 
        onClick={() => setCount(c => c + 1)}
        className="block px-3 py-1 bg-indigo-600 text-white rounded text-xs"
      >
        زيادة العداد
      </button>
    </div>
  );
}`,
      outputExplanation: "في مرحلة Render، يستدعي React المكون مرتين في بيئة التطوير (StrictMode) للتأكد من خلوه من أي تعديل في متغيرات خارجية، ثم ينفذ مرحلة Commit مرة واحدة لكتابة التغييرات في الـ DOM.",
      commonMistakes: "كتابة طلبات شبكة أو تعديل متغيرات عامة مباشرة في جسم دالة المكون (داخل Render Phase)، مما يسبب استدعاءات مكررة وهدراً في الذاكرة.",
      bestPractices: "اجعل جسم دالة المكون نقياً بنسبة 100% (Pure Function)، وانقل جميع العمليات غير المتزامنة والاتصالات إلى `useEffect` أو إجراءات الخادم.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="230" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="145" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">1. Render Phase (Pure)</text>
  <text x="145" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Call functions, Diff Virtual DOM</text>
  <text x="145" y="110" fill="#f59e0b" fontSize="9" textAnchor="middle">Can be paused or restarted</text>
  <path d="M 280 90 L 320 90" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="340" y="40" width="230" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="455" y="65" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">2. Commit Phase (Mutate)</text>
  <text x="455" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Write to Real DOM synchronously</text>
  <text x="455" y="110" fill="#10b981" fontSize="9" textAnchor="middle">Run useLayoutEffect & useEffect</text>
</svg>`
    },
    {
      id: "34.3.c",
      title: "شرح الـ Virtual DOM وخوارزمية التوفيق (Virtual DOM & Reconciliation)",
      technicalTerm: {
        english: "React Fiber Architecture & Heuristic Reconciliation",
        pronunciation: "ريأكت فايبر آركيتكتشر آند هيورستك ريكونسيلييشن",
        arabicMeaning: "معمارية ألياف React وخوارزمية التوفيق الاستدلالية"
      },
      description: "الـ Virtual DOM هو تمثيل كائني خفيف في الذاكرة (Lightweight JS Tree) لشجرة الـ DOM الحقيقية. عند حدوث أي تغيير في الحالة، يبني React شجرة جديدة ويقارنها بالشجرة السابقة عبر خوارزمية التوفيق الاستدلالية (Diffing Heuristic) بزمن O(N). تعتمد الخوارزمية على قاعدتين: 1. إذا تغير نوع العنصر (مثلاً من `<div>` إلى `<span>`)، يتم هدم الشجرة القديمة وبناؤها من الصفر. 2. يتم استخدام خاصية `key` في القوائم لتتبع العناصر المتحركة والحفاظ على هويتها بدقة دون إعادة بنائها.",
      realWorldAnalogy: "مثل مسودة مقال في محرر نصوص؛ بدلاً من مسح الصفحة وإعادة كتابة المقال بأكمله يدوياً عند كل تعديل إملائي، يحدد المصحح الكلمة المتغيرة فقط ويستبدلها في مكانها بدقة متناهية.",
      whyItMatters: "تعديل الـ DOM الحقيقي عملية مكلفة جداً للمتصفح لأنها تطلق حسابات إعادة التخطيط (Reflow) وإعادة الرسم (Repaint)؛ والـ Virtual DOM يقلل هذه العمليات للحد الأدنى الممكن.",
      syntax: "// قاعدة المقارنة الاستدلالية بالـ Key\n{items.map(item => <ItemCard key={item.id} data={item} />)}",
      simpleExample: `// مثال يوضح كيف يغير React جزءاً صغيراً من الـ DOM فقط
import React, { useState } from 'react';

export function VirtualDomDiffDemo() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  return (
    <div className="p-4 bg-slate-900 rounded-xl space-y-3">
      {/* هذا العنصر ثابت تماماً ولن يلمسه الـ DOM الحقيقي مطلقاً */}
      <h3 className="text-white font-bold">لوحة الساعة الرقمية</h3>
      {/* هذا السطر فقط هو الذي يتم تعديله وتحديثه في الـ DOM الحقيقي في كل ثانية */}
      <span className="text-emerald-400 font-mono text-sm block">{time}</span>
      <button 
        onClick={() => setTime(new Date().toLocaleTimeString())}
        className="px-3 py-1 bg-slate-800 text-xs text-white rounded"
      >
        تحديث الوقت
      </button>
    </div>
  );
}`,
      advancedExample: `// إثبات تأثير المفاتيح المستقرة (Key) على الاحتفاظ بالحالة الداخلية للمكون
import React, { useState } from 'react';

export function KeyReconciliationDemo() {
  const [isReversed, setIsReversed] = useState(false);
  const items = isReversed ? ['العنصر ب', 'العنصر أ'] : ['العنصر أ', 'العنصر ب'];

  return (
    <div className="space-y-4 p-4 bg-slate-900 rounded-xl">
      <button
        onClick={() => setIsReversed(!isReversed)}
        className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-bold"
      >
        عكس ترتيب القائمة 🔄
      </button>

      <div className="space-y-2">
        {items.map(item => (
          // استخدام المفتاح المستقر يحافظ على حقل الإدخال الخاص بكل عنصر بدقة
          <div key={item} className="flex gap-2 items-center">
            <span className="text-xs text-white w-20">{item}:</span>
            <input
              type="text"
              placeholder="اكتب ملاحظة..."
              className="bg-slate-800 border border-slate-700 px-2 py-1 text-xs text-white rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "بفضل خاصية `key`، يتعرف محرك المصالحة على أن العناصر تحركت فقط، فيقوم بتبديل مواضعها في الـ DOM مع الاحتفاظ بالنصوص المكتوبة في حقول الإدخال دون مسحها.",
      commonMistakes: "استخدام الفهرس الرقمي `key={index}` مع القوائم الديناميكية القابلة للفرز أو الحذف، مما يسبب تشوه الحالة وارتباط بيانات الحقول بالعنصر الخطأ.",
      bestPractices: "استخدم دائماً معرفاً فريداً ومستقراً صادراً من قاعدة البيانات (مثل `id` أو `uuid`) كمفتاح `key` للقوائم.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="160" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="65" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Previous V-DOM</text>
  <text x="110" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle"><div><p>Old</p></div></text>
  <path d="M 200 90 L 250 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="40" width="160" height="100" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="340" y="65" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Fiber Diffing O(N)</text>
  <text x="340" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Compute minimal delta</text>
  <text x="340" y="115" fill="#34d399" fontSize="9" textAnchor="middle">Only text changed!</text>
  <path d="M 430 90 L 480 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="40" width="80" height="100" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="530" y="95" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">DOM Patch</text>
</svg>`
    },
    {
      id: "34.3.d",
      title: "قواعد استخدام خطافات React والسبب الهندسي وراءها (Rules of Hooks & Array Indexing)",
      technicalTerm: {
        english: "Rules of Hooks & Internal Linked List State",
        pronunciation: "رولز أوف هوكس آند إنترنال لينكد ليست ستيت",
        arabicMeaning: "قواعد الخطافات والقائمة المتصلة الداخلية للحالة"
      },
      description: "قاعدتا الخطافات الشهيرتان هما: 1. استدعاء الخطافات في المستوى الأعلى فقط (Top Level Only)، وتجنب استدعائها داخل الشروط `if` أو الحلقات `for` أو الدوال المتداخلة. 2. استدعاء الخطافات داخل مكونات React الوظيفية أو الخطافات المخصصة فقط. السبب الهندسي وراء هذه القواعد هو أن محرك React الداخلي لا يخزن الحالات بأسمائها، بل يخزنها في قائمة متصلة (Singly Linked List) أو مصفوفة مفهرسة تعتمد كلياً على ثبات ترتيب الاستدعاء عند كل تصيير.",
      realWorldAnalogy: "مثل طابور التذاكر المرقم؛ ينادي الموظف 'رقم 1 ثم رقم 2 ثم رقم 3'، فإذا قرر العميل رقم 2 الاختفاء فجأة داخل غرفة خلفية، سيستلم العميل رقم 3 تذكرة غيره ويحدث ارتباك شامل في النظام.",
      whyItMatters: "خرق ترتيب الخطافات يؤدي إلى خلط الحالات ببعضها وظهور خطأ React الشهير: 'Rendered fewer hooks than expected'.",
      syntax: "// ❌ خطأ فادح يكسر الترتيب الداخلي:\nif (isLoaded) { useEffect(() => {}, []); }\n// ✅ صحيح دائماً:\nuseEffect(() => { if (isLoaded) { /*...*/ } }, [isLoaded]);",
      simpleExample: `// مثال يوضح كيف يربك الشرط ترتيب الخطافات
// ❌ كود خاطئ يمنعه ESLint:
// function BadComponent({ condition }) {
//   if (condition) {
//     const [a, setA] = useState(1); // قد ينفذ أو لا ينفذ!
//   }
//   const [b, setB] = useState(2); // سيتغير موقعه بين الأول والثاني!
// }

// ✅ الكود الصحيح: الاستدعاء دائماً في القمة دون شروط
export function GoodComponent({ condition }) {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);

  // الشروط توضع داخل المنطق وليس حول استدعاء الخطاف
  const displayVal = condition ? a : b;

  return <div className="text-white text-xs">{displayVal}</div>;
}`,
      advancedExample: `// محاكاة قائمة متصلة توضح لماذا يحتاج React إلى ثبات ترتيب الخطافات
let hooksStateArray = [];
let hookCursor = 0;

function mockUseState(initial) {
  const currentCursor = hookCursor;
  if (hooksStateArray[currentCursor] === undefined) {
    hooksStateArray[currentCursor] = initial;
  }

  const setState = (newVal) => {
    hooksStateArray[currentCursor] = newVal;
  };

  hookCursor++;
  return [hooksStateArray[currentCursor], setState];
}

// محاكاة تصيير المكون
function MyRenderedComponent(shouldIncludeSpecial) {
  hookCursor = 0; // تصفير المؤشر في بداية كل دورة تصيير
  const [name] = mockUseState('أحمد'); // مؤشر 0 دائماً

  // إذا تم وضع شرط هنا سيتغير مؤشر الخطاف التالي!
  const [age] = mockUseState(30); // مؤشر 1 دائماً

  return { name, age };
}`,
      outputExplanation: "يعتمد محرك React على تطابق المؤشر `hookCursor` مع نفس الخطاف في كل دورة تصيير؛ لذا فإن ثبات الترتيب إلزامي لضمان عودة كل خطاف لحالته الصحيحة.",
      commonMistakes: "وضع استدعاء `useMemo` أو `useEffect` داخل حلقة تكرار للمصفوفات لتطبيق عملية على كل عنصر، بدلاً من استخدام خطاف واحد يعالج المصفوفة بالكامل.",
      bestPractices: "ثبت دائماً إضافة `eslint-plugin-react-hooks` في مشروعك، واجعل استدعاء كافة الخطافات في أول 10 أسطر من مكونك قبل أي شروط أو إرجاع مبكر (Early Return).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="240" height="120" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="150" y="55" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Render 1 (Order Preserved)</text>
  <text x="150" y="80" fill="#cbd5e1" fontSize="10" textAnchor="middle">1. useState('Name') [Idx 0]</text>
  <text x="150" y="105" fill="#cbd5e1" fontSize="10" textAnchor="middle">2. useEffect(fn) [Idx 1]</text>
  <text x="150" y="130" fill="#cbd5e1" fontSize="10" textAnchor="middle">3. useState(0) [Idx 2]</text>
  <path d="M 280 90 L 320 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="30" width="240" height="120" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="450" y="55" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">Render 2 (Conditional Crash!)</text>
  <text x="450" y="80" fill="#cbd5e1" fontSize="10" textAnchor="middle">1. useState('Name') [Idx 0]</text>
  <text x="450" y="105" fill="#ef4444" fontSize="10" textAnchor="middle">❌ Skipped useEffect!</text>
  <text x="450" y="130" fill="#f87171" fontSize="10" textAnchor="middle">CRASH: Idx mismatch!</text>
</svg>`
    },
    {
      id: "34.3.e",
      title: "الفرق الدقيق بين useEffect وuseLayoutEffect (Painting & Layout Thrashing)",
      technicalTerm: {
        english: "Passive Effects vs Synchronous Layout Effects",
        pronunciation: "باسيف إيفيكتس فيرسس سينكرونس لاي آوت إيفيكتس",
        arabicMeaning: "الآثار السلبية غير المتزامنة مقابل آثار التخطيط المتزامنة"
      },
      description: "الفرق الجوهري يكمن في توقيت التنفيذ مقارنة بلحظة رسم الشاشة (Screen Painting): `useEffect` ينفذ بشكل غير متزامن (Asynchronously) بعد أن يقوم المتصفح برسم التعديلات على الشاشة للمستخدم، وهو الأنسب لـ 99% من الحالات (جلب البيانات والاشتراكات). في المقابل، فإن `useLayoutEffect` ينفذ بشكل متزامن (Synchronously) فور تحديث الـ DOM وقبل أن يرسم المتصفح أي بكسل على الشاشة، ويستخدم حصرياً لحساب أبعاد العناصر (`getBoundingClientRect`) وتعديل مواضعها لمنع الوميض البصري (Flickering).",
      realWorldAnalogy: "مثل ترتيب طاولة طعام في حفل؛ `useLayoutEffect` يشبه تعديل وضع الكراسي والمفارش قبل فتح الستار ودخول الضيوف، بينما `useEffect` يشبه تشغيل الموسيقى الهادئة بعد أن جلس الضيوف بالفعل في مقاعدهم.",
      whyItMatters: "استخدام `useEffect` لحساب موضع عنصر منبثق (Tooltip) يجعله يظهر في موضع خاطئ لجزء من الثانية ثم يقفز لموضعه الصحيح (Flicker)؛ بينما `useLayoutEffect` يحل المشكلة قبل ظهورها للمستخدم.",
      syntax: "// قياس الأبعاد دون وميض\nuseLayoutEffect(() => {\n  const rect = ref.current.getBoundingClientRect();\n  setOffset(rect.height);\n}, []);",
      simpleExample: `// مثال يوضح متى يكون useLayoutEffect ضرورياً لمنع القفز
import React, { useState, useLayoutEffect, useRef } from 'react';

export function TooltipPositioner() {
  const [tooltipTop, setTooltipTop] = useState(0);
  const buttonRef = useRef(null);

  // استخدام useLayoutEffect يضمن حساب الموضع قبل أن يرسم المتصفح العنصر
  useLayoutEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      // وضع التلميح فوق الزر مباشرة دون أي وميض أو قفزة بصرية
      setTooltipTop(rect.top - 30);
    }
  }, []);

  return (
    <div className="p-6 relative">
      <button ref={buttonRef} className="px-4 py-2 bg-indigo-600 text-white rounded text-xs">
        زر القياس
      </button>
      <div style={{ top: \`\${tooltipTop}px\` }} className="absolute text-[10px] bg-slate-800 text-white p-1 rounded">
        تلميح موضعي دقيق
      </div>
    </div>
  );
}`,
      advancedExample: `// محاكاة بصرية لتسلسل الأحداث بين useEffect وuseLayoutEffect
import React, { useEffect, useLayoutEffect } from 'react';

export function EffectTimingBenchmark() {
  useLayoutEffect(() => {
    // 1. ينفذ أولاً ويحظر الرسم حتى يكتمل الكود
    console.log('1. useLayoutEffect: متزامن وقبل رسم الشاشة (Screen Paint)');
  }, []);

  useEffect(() => {
    // 2. ينفذ بعد رسم الشاشة بهدوء في الخلفية
    console.log('2. useEffect: غير متزامن وبعد أن رأى المستخدم الشاشة');
  }, []);

  return <div className="text-white text-xs">راجع ترتيب ظهور الرسائل في الكونسول</div>;
}`,
      outputExplanation: "يحظر `useLayoutEffect` عملية الرسم حتى ينهي عملياته الحسابية، بينما ينتظر `useEffect` اكتمال الرسم أولاً لتفادي تجميد تفاعل المستخدم.",
      commonMistakes: "استخدام `useLayoutEffect` لطلبات جلب البيانات (Data Fetching)، مما يؤدي إلى تجميد تحديث الواجهة وتأخير استجابة الصفحة.",
      bestPractices: "اجعل `useEffect` هو خيارك الافتراضي الدائم، ولا تلجأ إلى `useLayoutEffect` إلا عند قياس أبعاد DOM أو تعديل موضع عناصر متحركة تفادياً للوميض.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="25" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">1. DOM Mutated</text>
  <text x="95" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">React updates nodes</text>
  <path d="M 170 90 L 205 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="210" y="45" width="150" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
  <text x="285" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">useLayoutEffect</text>
  <text x="285" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Sync / Blocks Paint</text>
  <path d="M 365 90 L 400 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="405" y="45" width="80" height="90" rx="8" fill="#0284c7" />
  <text x="445" y="85" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">PAINT</text>
  <text x="445" y="105" fill="#cbd5e1" fontSize="8" textAnchor="middle">To screen</text>
  <path d="M 490 90 L 515 90" stroke="#10b981" strokeWidth="2" />
  <rect x="520" y="45" width="65" height="90" rx="8" fill="#10b981" />
  <text x="552" y="85" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">useEffect</text>
  <text x="552" y="105" fill="#cbd5e1" fontSize="8" textAnchor="middle">Async</text>
</svg>`
    },
    {
      id: "34.3.f",
      title: "الفرق بين useMemo وuseCallback (Memoization Mechanics)",
      technicalTerm: {
        english: "Referential Equality & Memoization Overhead",
        pronunciation: "ريفرينشال إيكواليتي آند ميمويزيشن أوفر هيد",
        arabicMeaning: "المساواة المرجعية والعبء الإضافي للتخزين المؤقت"
      },
      description: "كلا الخطافين يعتمدان على تقنية التخزين المؤقت (Memoization)، والفرق بينهما بسيط ودقيق: `useMemo` يخزن مؤقتاً 'القيمة الناتجة' عن تنفيذ الدالة `useMemo(() => computeValue(a, b), [a, b])`، بينما `useCallback` يخزن مؤقتاً 'مرجع الدالة نفسها' `useCallback(() => doSomething(), [deps])`. يُستخدم `useCallback` بالأساس للحفاظ على ثبات مرجع الدالة الممررة كممتلك (Prop) إلى مكون ابن مغلف بـ `React.memo` لمنع إعادة تصييره بدون داعٍ.",
      realWorldAnalogy: "مثل طلب وجبة في مطعم؛ `useMemo` هو حفظ الطبق الجاهز في الثلاجة لإعادة تسخينه بدلاً من طبخه من جديد، بينما `useCallback` هو حفظ بطاقة وصفة الطهي في جيبك حتى لا تضطر لإعادة كتابة خطوات الوصفة في كل مرة.",
      whyItMatters: "الإفراط في استخدام `useMemo` و`useCallback` لعمليات حسابية تافهة يضر بالأداء بدلاً من تحسينه، بسبب تكلفة مقارنة مصفوفات الاعتماديات وتخصيص الذاكرة الإضافي.",
      syntax: "// useMemo للقيمة\nconst cachedValue = useMemo(() => expensiveCalculation(count), [count]);\n// useCallback لمرجع الدالة\nconst cachedFn = useCallback(() => handleAction(id), [id]);",
      simpleExample: `// مثال يوضح الفرق الأساسي بين تخزين القيمة وتخزين الدالة
import React, { useState, useMemo, useCallback } from 'react';

export function MemoComparisonDemo() {
  const [num, setNum] = useState(5);

  // useMemo يخزن ناتج الحساب (رقم أو كائن أو مصفوفة)
  const squaredNumber = useMemo(() => {
    console.log('حساب التربيع...');
    return num * num;
  }, [num]);

  // useCallback يخزن دالة يمكن استدعاؤها لاحقاً
  const logCurrentSquare = useCallback(() => {
    console.log('الناتج المحفوظ هو:', squaredNumber);
  }, [squaredNumber]);

  return (
    <div className="p-4 bg-slate-900 rounded-xl space-y-2 text-xs">
      <span className="text-white">العدد: {num} | التربيع: {squaredNumber}</span>
      <div className="flex gap-2">
        <button onClick={() => setNum(n => n + 1)} className="px-2 py-1 bg-indigo-600 text-white rounded">
          زيادة
        </button>
        <button onClick={logCurrentSquare} className="px-2 py-1 bg-slate-800 text-slate-350 rounded">
          طباعة
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// متى يكون useCallback فعالاً حقاً؟ اقترانه بـ React.memo لمنع إعادة تصيير الابن
import React, { useState, useCallback, memo } from 'react';

// مكون ابن مغلف بـ React.memo: لا يعاد تصييره إلا إذا تغيرت ممتلكاته فعلياً
const ExpensiveChildButton = memo(function ExpensiveChildButton({ onAction, label }) {
  console.log(\`تصيير المكون الابن: \${label}\`);
  return (
    <button onClick={onAction} className="px-3 py-1 bg-emerald-600 text-white rounded text-xs">
      {label}
    </button>
  );
});

export function ParentWithMemo() {
  const [unrelatedState, setUnrelatedState] = useState(0);

  // بدون useCallback، يتم إنشاء دالة جديدة بمرجع جديد مع كل تصيير للأب
  // مع useCallback، يظل مرجع الدالة ثابتاً تماماً فيتخطى الابن إعادة التصيير
  const handleStableAction = useCallback(() => {
    console.log('تم النقر');
  }, []);

  return (
    <div className="p-4 bg-slate-900 rounded-xl space-y-3">
      <button 
        onClick={() => setUnrelatedState(s => s + 1)}
        className="px-3 py-1 bg-slate-800 text-white rounded text-xs"
      >
        تحديث الأب فقط ({unrelatedState})
      </button>
      <ExpensiveChildButton onAction={handleStableAction} label="زر مستقر" />
    </div>
  );
}`,
      outputExplanation: "بفضل `useCallback` و`React.memo`، لا يعاد تصيير المكون الابن مطلقاً عند تحديث العداد في المكون الأب لأن مرجع دالة `handleStableAction` ظل متطابقاً مرجعياً.",
      commonMistakes: "تغليف الدوال بـ `useCallback` دون تغليف المكون المستقبل بـ `React.memo`؛ وهو ما لا يقدم أي ميزة للأداء على الإطلاق ويزيد تعقيد الكود.",
      bestPractices: "استخدم `useMemo` فقط للعمليات المعقدة ذات التعقيد الحسابي الكبير، واستخدم `useCallback` بشكل أساسي للممتلكات الممررة لمكونات مغلفة بـ `memo`.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="150" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">useMemo(() => val, [deps])</text>
  <text x="150" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Caches the RETURNED VALUE</text>
  <text x="150" y="110" fill="#34d399" fontSize="9" textAnchor="middle">Avoids expensive re-computations</text>
  <path d="M 285 90 L 315 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="65" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">useCallback(fn, [deps])</text>
  <text x="450" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Caches the FUNCTION REFERENCE</text>
  <text x="450" y="110" fill="#38bdf8" fontSize="9" textAnchor="middle">Prevents child re-render via memo</text>
</svg>`
    },
    {
      id: "34.3.g",
      title: "الفرق بين useRef وuseState وحالات الاستخدام (Escape Hatch & Persistent Values)",
      technicalTerm: {
        english: "Render Trigger State vs Escape Hatch Ref",
        pronunciation: "ريندر تريجر ستيت فيرسس إسكيب هاتش ريف",
        arabicMeaning: "حالة إطلاق التصيير مقابل المرجع الثابت المستقل"
      },
      description: "الفرق الجوهري بينهما هو إعادة التصيير (Re-render): تحديث قيمة `useState` يطلق دورة إعادة تصيير للمكون وتحديث للواجهة، بينما تعديل خاصية `useRef.current` لا يطلق أي إعادة تصيير على الإطلاق. يعتبر `useRef` هو 'مخرج الطوارئ' (Escape Hatch) في React لتخزين قيم مستمرة عبر دورات التصيير لا تؤثر على شكل الواجهة البصري (مثل معرّفات المؤقتات `timerId` أو لقطات القيم السابقة)، بالإضافة إلى دوره في الوصول المباشر لعناصر الـ DOM الحقيقية.",
      realWorldAnalogy: "مثل مذكرة الجيب السرية للمدير مقابل لوحة الإعلانات العامة للمكتب؛ عندما يكتب المدير إعلاناً على اللوحة العامة (useState) ينتبه جميع الموظفين ويعيدون تنظيم عملهم، بينما كتابة ملاحظة في مفكرته الخاصة (useRef) لا يراها أحد ولا تقاطع سير العمل.",
      whyItMatters: "تخزين معرّفات المؤقتات أو عدد النقرات داخل `useState` يسبب إعادة تصيير مفرطة وغير مفيدة تضر بأداء التطبيق.",
      syntax: "// useRef: تعديل صامت ومستمر\nconst countRef = useRef(0);\ncountRef.current += 1; // لا يطلق تصيير\n// useState: تعديل مرئي\nconst [count, setCount] = useState(0);",
      simpleExample: `// مقارنة تفاعلية بين useRef وuseState
import React, { useState, useRef } from 'react';

export function RefVsStateDemo() {
  const [renderCount, setRenderCount] = useState(0);
  const secretClickRef = useRef(0);

  const handleRefClick = () => {
    secretClickRef.current += 1;
    // القيمة زادت لكن الواجهة لن تتغير حتى يحدث تصيير خارجي!
    console.log('نقرات الـ Ref الصامتة:', secretClickRef.current);
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl space-y-3 text-xs">
      <p className="text-white">عداد التصيير المرئي: {renderCount}</p>
      <p className="text-slate-400">قيمة Ref في الكونسول: {secretClickRef.current}</p>
      <div className="flex gap-2">
        <button onClick={handleRefClick} className="px-3 py-1 bg-slate-800 text-white rounded">
          زيادة Ref (صامت دون تصيير)
        </button>
        <button onClick={() => setRenderCount(c => c + 1)} className="px-3 py-1 bg-indigo-600 text-white rounded font-bold">
          إطلاق تصيير مرئي 🔄
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// استخدام useRef لتخزين القيمة السابقة (Previous State Hook) بأناقة
import React, { useState, useEffect, useRef } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    // يتم تحديث القيمة فقط بعد اكتمال التصيير في مرحلة Commit
    ref.current = value;
  }, [value]);
  // يعيد القيمة قبل تحديثها في التصيير الحالي
  return ref.current;
}

export function PriceTrackerComponent() {
  const [price, setPrice] = useState(100);
  const prevPrice = usePrevious(price);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-xs space-y-2">
      <span className="text-white block font-bold">السعر الحالي: {price} $</span>
      <span className="text-slate-400 block">السعر السابق: {prevPrice ?? 'لا يوجد'} $</span>
      <button 
        onClick={() => setPrice(p => p + 15)}
        className="px-3 py-1 bg-emerald-600 text-white rounded font-semibold"
      >
        رفع السعر
      </button>
    </div>
  );
}`,
      outputExplanation: "يوضح الكود قدرة `useRef` على الاحتفاظ باللقطة السابقة للمتغير بين دورات التصيير دون أن يتسبب بنفسه في إعادة تصيير إضافية.",
      commonMistakes: "قراءة أو كتابة `ref.current` داخل جسم دالة المكون مباشرة أثناء مرحلة Render، مما يسبب عدم اتساق وتعارض مع ميزة Concurrent React.",
      bestPractices: "قم بتعديل `ref.current` فقط داخل معالجات الأحداث (Event Handlers) أو داخل `useEffect` لحماية نقاء مرحلة الـ Render.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="230" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="145" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">useState(val)</text>
  <text x="145" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Visual Data for UI</text>
  <text x="145" y="110" fill="#34d399" fontSize="9" textAnchor="middle">Setter triggers RE-RENDER</text>
  <path d="M 280 90 L 320 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="340" y="40" width="230" height="100" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
  <text x="455" y="65" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">useRef(val)</text>
  <text x="455" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Persistent Object Reference</text>
  <text x="455" y="110" fill="#f87171" fontSize="9" textAnchor="middle">Mutating .current = NO render</text>
</svg>`
    },
    {
      id: "34.3.h",
      title: "شرح React Context مقابل مكتبات إدارة الحالة (Context API vs Redux / Zustand)",
      technicalTerm: {
        english: "Context Injection vs State Management Subscriptions",
        pronunciation: "كونتكست إنجيكشن فيرسس ستيت مانيجمينت سبسكريبشنز",
        arabicMeaning: "حقن السياق مقابل اشتراكات إدارة الحالة الموجهة"
      },
      description: "من الأسئلة الكبرى في المقابلات: 'هل Context بديل لـ Redux؟' الإجابة الهندسية القاطعة: لا؛ Context هو آلية لنقل وحقن التبعيات (Dependency Injection) لتفادي تمرير الخصائص المفرط (Props Drilling) لبيانات نادرة التغير (كالسمة المظلمة أو لغة الموقع أو جلسة المستخدم). المشكلة في Context هي أن أي تحديث لقيمته يجبر 'جميع' المكونات المستهلكة له على إعادة التصيير. في المقابل، فإن مكتبات إدارة الحالة (Zustand / Redux) تدعم الاشتراكات الموجهة (Fine-grained Selectors) التي تعيد تصيير المكون فقط عند تغير الحقل المحدد الذي يستمع إليه.",
      realWorldAnalogy: "مثل مكبر الصوت في المدرسة مقابل إرسال رسالة SMS خاصة؛ الـ Context مثل مكبر الصوت العام؛ حين يتحدث المدير يسمعه كل الفصل وينتبه الجميع حتى لو كان الإعلان يخص طالباً واحداً، بينما Zustand يرسل رسالة خاصة للطالب المعني فقط دون إزعاج باقي الفصل.",
      whyItMatters: "استخدام Context لإدارة حالات عالية التردد (مثل موضع مؤشر الماوس أو مدخلات النماذج المعقدة) يؤدي إلى تدمير أداء التطبيق بسبب آلاف عمليات إعادة التصيير غير الضرورية.",
      syntax: "// اشتراك موجه مع Zustand O(1) Re-render\nconst total = useCartStore(state => state.total);\n// استهلاك Context (يعاد تصييره مع أي تغيير في أي حقل)\nconst { total } = useContext(CartContext);",
      simpleExample: `// متى يكون Context مناسباً؟ بيانات نادرة التغير كالسمة الليلية
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('dark');

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeButton() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <button onClick={toggle} className="px-3 py-1 bg-slate-800 text-white rounded text-xs">
      السمة الحالية: {theme} (تغيير)
    </button>
  );
}`,
      advancedExample: `// مقارنة هندسية: حل مشكلة إعادة التصيير في Context بتقسيم السياقات (Context Splitting)
import React, { createContext, useContext, useState } from 'react';

// سياق منفصل للبيانات القابلة للقراءة
const StateCtx = createContext(null);
// سياق منفصل للدوال المحدثة الثابتة
const DispatchCtx = createContext(null);

export function SplitCounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <StateCtx.Provider value={count}>
      <DispatchCtx.Provider value={setCount}>
        {children}
      </DispatchCtx.Provider>
    </StateCtx.Provider>
  );
}

// هذا المكون يستهلك فقط دالة التحديث؛ وبفضل الفصل لن يعاد تصييره مطلقاً عند تغير count!
export function IncrementOnlyButton() {
  const setCount = useContext(DispatchCtx);
  console.log('تصيير زر الزيادة (مرة واحدة فقط)');
  return (
    <button onClick={() => setCount(c => c + 1)} className="px-3 py-1 bg-indigo-600 text-white rounded text-xs">
      +1
    </button>
  );
}`,
      outputExplanation: "بتقسيم الـ Context إلى سياقين، تم عزل المكونات التي تحدث الحالة عن المكونات التي تقرأها، مما منع إعادة تصيير زر التحديث نهائياً.",
      commonMistakes: "وضع كائن الحالة الشامل للتطبيق بالكامل داخل سياق Context واحد، مما يتسبب في إعادة تصيير كل شجرة المكونات عند كل نقرة زر صغيرة.",
      bestPractices: "استخدم Context للبيانات الثابتة نادرة التغير (Theme, Auth, Language)، واستخدم Zustand أو Redux Toolkit لحالات الأعمال المتغيرة والمتشعبة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="150" y="65" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">Context API</text>
  <text x="150" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Dependency Injection</text>
  <text x="150" y="110" fill="#f87171" fontSize="9" textAnchor="middle">ALL consumers re-render on change</text>
  <path d="M 285 90 L 315 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="65" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Zustand / Redux</text>
  <text x="450" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">State Management with Selectors</text>
  <text x="450" y="110" fill="#34d399" fontSize="9" textAnchor="middle">Only SUBSCRIBED components re-render</text>
</svg>`
    },
    {
      id: "34.3.i",
      title: "شرح المكونات المضبوطة وغير المضبوطة (Controlled vs Uncontrolled Components)",
      technicalTerm: {
        english: "Controlled State Binding vs DOM Ref Form Controls",
        pronunciation: "كنترولد ستيت بايندنج فيرسس دوم ريف فورم كنترولز",
        arabicMeaning: "ربط الحالة المضبوطة مقابل عناصر تحكم DOM المرجعية"
      },
      description: "في المكونات المضبوطة (Controlled Components)، تكون قيمة حقل الإدخال مخزنة ومتحكماً بها بالكامل داخل حالة React عبر `value={state}` و`onChange={e => setState(...)}`؛ ويكون React هو المصدر الوحيد للحقيقة (Single Source of Truth). أما في المكونات غير المضبوطة (Uncontrolled Components)، فإن عنصر الـ DOM نفسه هو من يحتفظ بقيمته داخلياً، ويتم قراءتها عند الحاجة فقط (مثل عند تقديم النموذج) عبر `useRef` أو `FormData`. المكونات غير المضبوطة أسرع أداءً لأنها لا تطلق إعادة تصيير مع كل حرف يُكتب.",
      realWorldAnalogy: "مثل قيادة طائرة؛ Controlled Component يشبه الطيران اليدوي؛ كل حركة صغيرة في المقود يوجهها الطيار بوعي كامل في كل لحظة، بينما Uncontrolled Component يشبه الطيار الآلي؛ تتركه يطير بمفرده وتفحص موقعه فقط عند الهبوط.",
      whyItMatters: "اختيار النمط المناسب يحدد كفاءة النماذج الضخمة؛ فمكتبات شهيرة مثل `react-hook-form` تعتمد على النمط غير المضبوط لتحقيق سرعة فائقة.",
      syntax: "// Controlled: React هو المتحكم\n<input value={val} onChange={e => setVal(e.target.value)} />\n// Uncontrolled: الـ DOM هو المتحكم\n<input ref={inputRef} defaultValue=\"Initial\" />",
      simpleExample: `// مقارنة سريعة بين الحقل المضبوط وغير المضبوط
import React, { useState, useRef } from 'react';

export function FormInputsComparison() {
  // 1. حقل مضبوط (Controlled): تصيير مع كل نقرة حرف
  const [controlledVal, setControlledVal] = useState('');

  // 2. حقل غير مضبوط (Uncontrolled): بدون أي تصيير
  const uncontrolledRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('المضبوط:', controlledVal);
    console.log('غير المضبوط:', uncontrolledRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-900 rounded-xl space-y-3 text-xs">
      <input
        value={controlledVal}
        onChange={(e) => setControlledVal(e.target.value)}
        placeholder="مضبوط مع State"
        className="w-full bg-slate-800 p-2 text-white rounded border border-slate-700"
      />
      <input
        ref={uncontrolledRef}
        defaultValue="قيمة افتراضية"
        placeholder="غير مضبوط مع Ref"
        className="w-full bg-slate-800 p-2 text-white rounded border border-slate-700"
      />
      <button type="submit" className="px-3 py-1 bg-indigo-600 text-white rounded font-bold">
        طباعة القيم
      </button>
    </form>
  );
}`,
      advancedExample: `// قراءة نموذج كامل غير مضبوط بأداء استثنائي عبر FormData الأصلية
export function HighPerformanceUncontrolledForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // استخراج كافة بيانات النموذج دفعة واحدة بدون أي useState!
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);
    console.log('بيانات الإرسال النظيفة:', payload);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-900 rounded-xl space-y-3 text-xs">
      <input name="email" type="email" placeholder="البريد" className="w-full bg-slate-800 p-2 text-white rounded" required />
      <input name="password" type="password" placeholder="كلمة المرور" className="w-full bg-slate-800 p-2 text-white rounded" required />
      <button type="submit" className="w-full py-2 bg-emerald-600 text-white font-bold rounded">
        تسجيل الدخول في 0ms إعادة تصيير 🚀
      </button>
    </form>
  );
}`,
      outputExplanation: "يوضح النموذج غير المضبوط كيف يمكن جمع بيانات الاستمارات المعقدة دون أي إعادة تصيير أثناء كتابة المستخدم، مما يوفر أداءً خاطفاً في النماذج الضخمة.",
      commonMistakes: "تمرير `value={undefined}` في البداية ثم تمرير نص لاحقاً، مما يجعل React يطلق تحذيراً شهيراً: 'A component is changing an uncontrolled input to be controlled'.",
      bestPractices: "استخدم المكونات المضبوطة عندما تحتاج لتحقق فوري من كل حرف (Instant Validation)، واستخدم النمط غير المضبوط في النماذج الطويلة لتعظيم الأداء.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="150" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Controlled Input</text>
  <text x="150" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">value + onChange bind to State</text>
  <text x="150" y="110" fill="#38bdf8" fontSize="9" textAnchor="middle">React is Single Source of Truth</text>
  <path d="M 285 90 L 315 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="65" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Uncontrolled Input</text>
  <text x="450" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">DOM holds internal value (Ref / defaultValue)</text>
  <text x="450" y="110" fill="#10b981" fontSize="9" textAnchor="middle">Zero re-renders on keystroke</text>
</svg>`
    },
    {
      id: "34.3.j",
      title: "شرح حواجز الأخطاء (Error Boundaries & Component Resilience)",
      technicalTerm: {
        english: "Class Component Error Boundaries & Fallback UI",
        pronunciation: "كلاس كومبوننت إيرور باوندريز آند فول باك يو آي",
        arabicMeaning: "حواجز أخطاء المكونات وواجهة التعافي البديلة"
      },
      description: "حواجز الأخطاء (Error Boundaries) هي مكونات React خاصة تلتقط أخطاء جافاسكريبت غير المعالجة في أي مكان داخل شجرة مكوناتها الفرعية أثناء مرحلة التصيير (Render Phase)، وتسجل تلك الأخطاء، وتعرض واجهة بديلة (Fallback UI) بدلاً من انهيار التطبيق بالكامل وظهور الشاشة البيضاء (White Screen of Death). حتى اليوم، تتطلب حواجز الأخطاء استخدام Class Components لتطبيق الدالتين: `static getDerivedStateFromError` و`componentDidCatch`.",
      realWorldAnalogy: "مثل قواطع الدائرة الكهربائية (الأوتوماتيك) في المنزل؛ إذا حدث التماس كهربائي في المطبخ، ينفصل قاطع المطبخ فقط لحمايته، وتظل الكهرباء تعمل في باقي غرف المنزل ويبقى التلفاز مضاءً.",
      whyItMatters: "تضمن استمرارية تجربة المستخدم؛ بحيث إذا انهار ودجت الطقس أو صندوق التعليقات يظل باقي الموقع والمتجر يعمل دون أن يغلق في وجه العميل.",
      syntax: "// دالتا دورة حياة Error Boundary\nstatic getDerivedStateFromError(error) { return { hasError: true }; }\ncomponentDidCatch(error, info) { logToSentry(error, info); }",
      simpleExample: `// مكون حاجز الأخطاء الكلاسيكي
import React, { Component } from 'react';

export class SimpleErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('تم التقاط الخطأ بأمان:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-350 text-xs">
          ⚠️ تعذر تحميل هذا القسم، يرجى المحاولة لاحقاً.
        </div>
      );
    }

    return this.props.children;
  }
}`,
      advancedExample: `// حاجز أخطاء متطور يدعم زر إعادة المحاولة (Reset & Retry) وإرسال البلاغ لـ Sentry
import React, { Component } from 'react';

export class ResilientErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // محاكاة إرسال الخطأ إلى خدمة المراقبة
    console.log('Sending error to monitoring service:', error.message);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-slate-900 border border-rose-500/30 rounded-2xl text-center space-y-3">
          <span className="text-2xl">🚨</span>
          <h4 className="text-sm font-bold text-white">حدث خطأ أثناء عرض هذا العنصر</h4>
          <p className="text-xs text-rose-400 font-mono">{this.state.error?.message}</p>
          <button
            onClick={this.handleRetry}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors"
          >
            إعادة المحاولة 🔄
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}`,
      outputExplanation: "يلتقط هذا المكون الانهيارات البرمجية ويعزلها داخل نطاق فرعي محدد، ويوفر زراً يتيح للمستخدم إعادة تشغيل المكون بعد تعافيه.",
      commonMistakes: "الاعتقاد بأن Error Boundary يلتقط أخطاء معالجات الأحداث `onClick` أو الكود غير المتزامن `fetch`؛ هذه الأخطاء يجب معالجتها بـ `try/catch` عادية لأنها لا تنفذ داخل دورة الـ Render.",
      bestPractices: "ضع حواجز أخطاء متفرقة حول الأجزاء المستقلة في صفحتك (مثل: صندوق الدفع، مشغل الفيديو، والتعليقات) لعزل الأعطال ومنع انتشارها.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="540" height="120" rx="10" fill="#1e293b" stroke="#334155" />
  <text x="50" y="55" fill="#38bdf8" fontSize="12" fontWeight="bold">Application Tree</text>
  <rect x="50" y="70" width="220" height="65" rx="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="160" y="105" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Navbar & Header (Working)</text>
  <rect x="300" y="70" width="250" height="65" rx="6" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
  <text x="425" y="95" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">Crash in Feed Widget!</text>
  <text x="425" y="115" fill="#cbd5e1" fontSize="9" textAnchor="middle">Error Boundary catches & shows Fallback UI</text>
</svg>`
    },
    {
      id: "34.3.k",
      title: "شرح React.memo والمقارنة السطحية (React.memo & Shallow Comparison)",
      technicalTerm: {
        english: "Higher-Order Component Memoization & Custom arePropsEqual",
        pronunciation: "هاي أوردر كومبوننت ميمويزيشن آند كاستم آر بروبس إيكوال",
        arabicMeaning: "تخزين المكونات ذات الرتبة العليا ودالة فحص الممتلكات المخصصة"
      },
      description: "`React.memo` هو مكون ذو رتبة عليا (Higher-Order Component) يقوم بتغليف المكون الوظيفي لمنع إعادة تصييره إذا لم تتغير الـ Props الممررة إليه مقارنة بالتصيير السابق. يعتمد افتراضياً على مقارنة المساواة السطحية (Shallow Equality `===`). إذا كانت الـ Props كائنات أو مصفوفات أو دوال جديدة تم إنشاؤها في الأب، ستفشل المقارنة ويعاد تصيير المكون ما لم تكن مستقرة، أو ما لم نمرر دالة مقارنة مخصصة `arePropsEqual` كمعامل ثانٍ.",
      realWorldAnalogy: "مثل حارس بوابة المؤتمر؛ ينظر في بطاقة هويتك، وإذا كانت نفس البطاقة ونفس الاسم لا يعيدك لإجراءات التسجيل والتفتيش من البداية، بل يفتح لك الباب فوراً لتوفير الوقت.",
      whyItMatters: "يحمي المكونات الفرعية المعقدة ذات العبء التصييري الثقيل من إعادة البناء المتكررة بسبب تغييرات لا علاقة لها بها في المكونات الأبوية.",
      syntax: "// React.memo مع دالة مقارنة مخصصة\nexport const MyComp = memo(Component, (prevProps, nextProps) => {\n  return prevProps.id === nextProps.id;\n});",
      simpleExample: `// استخدام React.memo لمنع إعادة تصيير بطاقة الموظف
import React, { memo } from 'react';

// لن يعاد تصيير هذا المكون إذا تغير الأب طالما ظل name وrole متطابقين
export const EmployeeCard = memo(function EmployeeCard({ name, role }) {
  console.log('تصيير بطاقة الموظف:', name);
  return (
    <div className="p-3 bg-slate-800 rounded-lg text-xs text-white">
      <span className="font-bold">{name}</span> - <span className="text-slate-400">{role}</span>
    </div>
  );
});`,
      advancedExample: `// استخدام دالة مقارنة مخصصة (Custom arePropsEqual) لتجاهل التغييرات غير المهمة
import React, { memo } from 'react';

function ComplexDataWidget({ user, timestamp }) {
  console.log('تصيير الودجت المعقد');
  return (
    <div className="p-4 bg-slate-900 rounded-xl text-xs text-white">
      <h4>المستخدم: {user.name} ({user.id})</h4>
      <p className="text-slate-500 text-[10px]">آخر تحديث: {timestamp}</p>
    </div>
  );
}

// دالة فحص مخصصة: نتجاهل تحديث timestamp إذا لم يتغير معرف المستخدم أو اسمه
export const OptimizedDataWidget = memo(ComplexDataWidget, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id && prevProps.user.name === nextProps.user.name;
});`,
      outputExplanation: "تتجاهل دالة المقارنة المخصصة التغيرات الثانوية (مثل تغير الـ timestamp كل ثانية)، وتمنع إعادة تصيير المكون المكلف طالما بقيت بيانات المستخدم الجوهرية ثابتة.",
      commonMistakes: "تغليف كل مكون في التطبيق بـ `React.memo` بشكل عشوائي، مما يستهلك ذاكرة المقارنة السطحية دون فائدة إذا كانت الـ Props تتغير دائماً.",
      bestPractices: "استخدم `React.memo` للمكونات الكبيرة ذات الشجرة العميقة (Leaf / Heavy Subtrees) التي تتلقى Props مستقرة ونادراً ما تتغير.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Parent Re-rendered</text>
  <text x="110" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Passes props to child</text>
  <path d="M 195 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="170" height="90" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="345" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">React.memo Check</text>
  <text x="345" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">prevProps === nextProps ?</text>
  <path d="M 435 65 L 495 65" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="465" y="55" fill="#10b981" fontSize="9" textAnchor="middle">EQUAL</text>
  <rect x="500" y="45" width="75" height="40" rx="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="537" y="70" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">SKIP Render</text>
  <path d="M 435 115 L 495 115" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="465" y="130" fill="#ef4444" fontSize="9" textAnchor="middle">CHANGED</text>
  <rect x="500" y="95" width="75" height="40" rx="6" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
  <text x="537" y="120" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle">RE-RENDER</text>
</svg>`
    },
    {
      id: "34.3.l",
      title: "شرح التحميل الكسول والتعليق (Suspense & React.lazy Code Splitting)",
      technicalTerm: {
        english: "Code Splitting & Asynchronous Boundary Suspense",
        pronunciation: "كود سبليتنج آند إيسينكرونس باوندري ساسبينس",
        arabicMeaning: "تقسيم الكود وحواجز التعليق غير المتزامنة"
      },
      description: "التحميل الكسول (Lazy Loading عبر `React.lazy`) يتيح تقسيم حزمة الجافاسكريبت الكبيرة إلى أجزاء صغيرة (Chunks) تُحمّل من الخادم فقط عند الحاجة إليها (Dynamic Import). يعمل `React.lazy` بالتعاون التام مع مكون `<Suspense fallback={<Skeleton />}>`؛ فعندما يكون المكون الكسول قيد التحميل عبر الشبكة، يُعلّق React العرض ويُظهر واجهة التحميل البديلة (Fallback UI) بسلاسة دون تجميد باقي الصفحة.",
      realWorldAnalogy: "مثل تصفح قائمة الطعام في مطعم عبر رمز QR؛ بدلاً من تنزيل كتاب الطبخ الكامل بجميع أقسامه (الحلويات، اللحوم، المشروبات) دفعة واحدة، ينزل هاتفك صفحة الحلويات فقط عندما تضغط على قسم الحلويات.",
      whyItMatters: "يقلل حجم حزمة التحميل الأولية للموقع (Initial Bundle Size) بنسبة تزيد عن 60%، مما يحقق سرعة خاطفة للصفحة الأولى.",
      syntax: "// تقسيم الكود مع Suspense\nconst AnalyticsChart = React.lazy(() => import('./AnalyticsChart'));\n<Suspense fallback={<ChartSkeleton />}><AnalyticsChart /></Suspense>",
      simpleExample: `// تحميل كسول لنافذة إعدادات ثقيلة
import React, { lazy, Suspense, useState } from 'react';

// استيراد كسول لا ينزل كود المكون إلا عند استدعائه
const HeavyModal = lazy(() => import('./HeavyModal'));

export function LazyModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 bg-slate-900 rounded-xl space-y-3">
      <button 
        onClick={() => setIsOpen(true)}
        className="px-3 py-1.5 bg-indigo-600 text-white rounded text-xs font-bold"
      >
        فتح النافذة المعقدة 🗂
      </button>

      {isOpen && (
        <Suspense fallback={<div className="text-xs text-slate-400">جاري تحميل الكود عبر الشبكة...</div>}>
          <HeavyModal onClose={() => setIsOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}`,
      advancedExample: `// دمج Suspense مع تدفقات البيانات (Streaming Suspense) في بنية Next.js
import React, { Suspense } from 'react';

// مكون خادم بطيء يجلب بيانات ثقيلة
async function SlowRevenueMetrics() {
  // محاكاة تأخير استعلام قاعدة بيانات معقد
  await new Promise(r => setTimeout(r, 2000));
  return <div className="text-emerald-400 font-bold">$148,200 (إيرادات سنوية)</div>;
}

export function StreamingDashboard() {
  return (
    <div className="p-6 bg-slate-900 rounded-2xl space-y-4">
      <h3 className="text-sm font-bold text-white">لوحة الإحصائيات الفورية</h3>
      
      {/* يعرض الهيكل المؤقت فوراً دون انتظار الاستعلام البطيء */}
      <Suspense fallback={<div className="h-8 bg-slate-800 animate-pulse rounded-lg w-48" />}>
        <SlowRevenueMetrics />
      </Suspense>
    </div>
  );
}`,
      outputExplanation: "يتيح هذا النمط عرض الهيكل العام للصفحة فورياً للمستخدم، ثم يتدفق محتوى الأقسام البطيئة بمجرد اكتمال جلب بياناتها دون تعطيل الشاشة بأكملها.",
      commonMistakes: "استخدام `React.lazy` دون تغليفه بمكون `<Suspense>`، مما يتسبب في انهيار التطبيق وإلقاء خطأ فوري في المتصفح.",
      bestPractices: "استخدم التحميل الكسول على مستوى المسارات والصفحات الرئيسية (Route-based Code Splitting) وللمكونات الثقيلة نادرة الاستخدام (كالرسوم البيانية والمحررات الغنية).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Initial Bundle</text>
  <text x="110" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Main Page (Fast 50KB)</text>
  <path d="M 195 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="150" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="335" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle"><Suspense></text>
  <text x="335" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Shows Skeleton Fallback</text>
  <path d="M 415 90 L 475 90" stroke="#10b981" strokeWidth="2" />
  <rect x="480" y="45" width="90" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="525" y="85" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Chunk.js</text>
  <text x="525" y="105" fill="#10b981" fontSize="9" textAnchor="middle">Loaded on click</text>
</svg>`
    },
    {
      id: "34.3.m",
      title: "شرح ومقارنة استراتيجيات التصيير (CSR vs SSR vs SSG vs ISR)",
      technicalTerm: {
        english: "Web Rendering Strategies & Hydration Mechanics",
        pronunciation: "ويب ريندرينج ستراتيجيز آند هايدريشن ميكانيكس",
        arabicMeaning: "استراتيجيات تصيير الويب وآليات الإرواء التفاعلي"
      },
      description: "المقارنة الرباعية الحاسمة في كل مقابلة معمارية: 1. CSR (Client-Side Rendering): المتصفح يستلم صفحة HTML فارغة ويقوم بتحميل كود JS وبناء الواجهة (أبطأ في اللحظة الأولى وغير مثالي للـ SEO). 2. SSR (Server-Side Rendering): الخادم يولد صفحة HTML كاملة مع كل طلب وارد (ممتاز للبيانات المتغيرة لحظياً). 3. SSG (Static Site Generation): يتم بناء صفحات HTML أثناء مرحلة البناء Build Time (الأسرع على الإطلاق LCP < 0.5s). 4. ISR (Incremental Static Regeneration): تحديث الصفحات الثابتة في الخلفية بعد مدة زمنية محددة دون إعادة بناء الموقع بأكمله.",
      realWorldAnalogy: "مثل إعداد الوجبات؛ CSR يشبه إرسال المقادير النيئة للعميل ليطبخها بنفسه، وSSR يشبه طهي الوجبة طازجة فور طلب الزبون على الهاتف، وSSG يشبه المعلبات الجاهزة مسبقاً في السوبرماركت تأخذها فوراً، بينما ISR هو إعادة تعبئة الرفوف بمعلبات جديدة كل ساعة بهدوء.",
      whyItMatters: "اختيار الاستراتيجية الخاطئة قد يسبب بطء استجابة الخادم لآلاف الزوار أو حرمان موقعك من التصدر في محركات البحث.",
      syntax: "// Next.js ISR التجديد التلقائي بعد 60 ثانية\nexport const revalidate = 60;\n// Next.js SSR الجلب الديناميكي\nexport const dynamic = 'force-dynamic';",
      simpleExample: `// جدول توضيحي سريع لمقارنة استراتيجيات التصيير
export const RENDERING_STRATEGIES_MAP = {
  CSR: { renderAt: 'متصفح العميل', seo: 'متواضع', speed: 'يعتمد على جهاز العميل', bestFor: 'لوحات التحكم الخاصة' },
  SSR: { renderAt: 'الخادم مع كل طلب', seo: 'ممتاز', speed: 'يعتمد على سرعة الخادم', bestFor: 'صفحات النتائج المخصصة' },
  SSG: { renderAt: 'وقت البناء Build Time', seo: 'استثنائي', speed: 'فائق السرعة (Edge CDN)', bestFor: 'المدونات وصفحات الهبوط' },
  ISR: { renderAt: 'خلفية الخادم دورياً', seo: 'استثنائي', speed: 'فائق السرعة مع تحديث دوري', bestFor: 'صفحات المنتجات والتجارة' }
};`,
      advancedExample: `// نموذج مكون يحدد استراتيجية التصيير ديناميكياً بحسب طبيعة المحتوى
export function RenderingStrategyAdvisor({ pageType }) {
  const getRecommendation = () => {
    switch (pageType) {
      case 'dashboard':
        return { strategy: 'CSR', reason: 'لوحة تحكم خاصة ومحمية بكلمة مرور ولا تحتاج لمحركات البحث.' };
      case 'product-page':
        return { strategy: 'ISR (revalidate: 60)', reason: 'سرعة CDN قصوى مع تحديث أسعار ومخزون المنتجات كل دقيقة في الخلفية.' };
      case 'blog-post':
        return { strategy: 'SSG', reason: 'محتوى ثابت لا يتغير، وتوليده مسبقاً يحقق سرعة 100/100 في SEO.' };
      default:
        return { strategy: 'SSR', reason: 'بيانات فورية تتغير مع كل مستخدم.' };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-1 text-xs">
      <span className="text-white font-bold">الاستراتيجية الموصى بها: <span className="text-indigo-400">{rec.strategy}</span></span>
      <p className="text-slate-400">{rec.reason}</p>
    </div>
  );
}`,
      outputExplanation: "يوضح النموذج كيفية اختيار استراتيجية التصيير المثلى هندسياً بناءً على متطلبات العمل وسرعة التحديث واحتياجات محركات البحث.",
      commonMistakes: "استخدام SSR لصفحات تسويقية ثابتة لا تتغير، مما يهدر موارد الخادم ويبطئ زمن الاستجابة الأول (TTFB).",
      bestPractices: "اجعل SSG وISR خيارك الافتراضي لصفحات الويب العامة، واقصر SSR على الصفحات التي تعتمد على ترويسات طلب العميل كالمصادقة واللغات.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="25" y="45" width="125" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="87" y="75" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">CSR</text>
  <text x="87" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Browser Renders</text>
  <text x="87" y="115" fill="#94a3b8" fontSize="8" textAnchor="middle">Dashboards</text>
  <rect x="165" y="45" width="125" height="90" rx="8" fill="#1e293b" stroke="#818cf8" />
  <text x="227" y="75" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">SSR</text>
  <text x="227" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Per-Request Server</text>
  <text x="227" y="115" fill="#94a3b8" fontSize="8" textAnchor="middle">Live Feeds</text>
  <rect x="305" y="45" width="125" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="367" y="75" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">SSG</text>
  <text x="367" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Build-Time HTML</text>
  <text x="367" y="115" fill="#10b981" fontSize="8" textAnchor="middle">Blogs & Landing</text>
  <rect x="445" y="45" width="130" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="510" y="75" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">ISR</text>
  <text x="510" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Revalidate in Bg</text>
  <text x="510" y="115" fill="#f59e0b" fontSize="8" textAnchor="middle">E-commerce</text>
</svg>`
    },
    {
      id: "34.3.n",
      title: "مناقشة مكونات خادم React (React Server Components vs Traditional SSR)",
      technicalTerm: {
        english: "RSC Paradigm Shift & Zero Client-Side Hydration",
        pronunciation: "آر إس سي بارادايغم شيفت آند زيرو كلاينت سايد هايدريشن",
        arabicMeaning: "التحول النموذجي لـ RSC والإرواء الصفري في العميل"
      },
      description: "السؤال الأكثر حداثة في المقابلات اليوم: 'ما الفرق بين SSR التقليدي وRSC؟' الإجابة الدقيقة: في SSR التقليدي، ينشئ الخادم كود HTML المبدئي، ولكن يتم إرسال حزمة الـ JavaScript كاملة إلى المتصفح ليقوم بعملية 'الإرواء' (Hydration) وإعادة بناء شجرة المكونات في الذاكرة. أما في RSC (React Server Components)، فإن كود المكون ينفذ حصرياً على الخادم ولا يُرسل منه أي بايت JavaScript إلى المتصفح نهائياً، ولا يخضع للإرواء (Zero Hydration Cost)، مع إمكانية الوصول المباشر لقاعدة البيانات ونظام الملفات.",
      realWorldAnalogy: "في SSR التقليدي؛ يرسل لك المتجر خزانة خشبية مركبة، لكنه يرسل معها أيضاً صندوق المسامير والمفكات والكتالوج لتعيد فحص كل مسمار في بيتك (Hydration). أما في RSC، يستلم العميل الخزانة الجاهزة فقط ولا يرى صندوق الأدوات أبداً.",
      whyItMatters: "يحذف RSC آلاف الأسطر من كود المكتبات الثقيلة (مثل Markdown Parser أو Dayjs) من حزمة العميل، مما يجعل التطبيقات الضخمة تفتح بلمح البصر.",
      syntax: "// مكون خادم RSC (افتراضي في Next.js App Router)\nasync function ServerWidget() {\n  const data = await db.query();\n  return <div>{data.title}</div>;\n}",
      simpleExample: `// مقارنة بين مكون خادم ومكون عميل
// 1. مكون خادم (RSC) - ينفذ على الخادم فقط
export async function ServerOnlyProfile({ userId }) {
  // وصول مباشر للبيانات بدون مسارات API
  const user = await fetch(\`https://api.internal/users/\${userId}\`).then(r => r.json());
  return <div className="text-white text-xs">اسم المستخدم: {user.name}</div>;
}

// 2. مكون عميل (Client Component) - تفاعلي مع المتصفح
'use client';
import React, { useState } from 'react';

export function InteractiveLikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(l => l + 1)} className="px-2 py-1 bg-indigo-600 text-white rounded text-xs">
      إعجاب ({likes})
    </button>
  );
}`,
      advancedExample: `// دمج نمط الأطفال (Children Pattern) لتمرير مكونات الخادم داخل مكونات العميل
'use client';

import React, { useState } from 'react';

// مكون عميل تفاعلي يوفر سياق الفتح والإغلاق
export function ClientCollapsibleSection({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-slate-800 rounded-xl p-4 bg-slate-900 space-y-3">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h4 className="font-bold text-xs text-white">{title}</h4>
        <span className="text-xs text-slate-400">{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* الأطفال الممررون هنا يمكن أن يكونوا مكونات خادم RSC نقية لم ترسل كود JS للعميل! */}
      {isOpen && <div className="pt-2 border-t border-slate-800">{children}</div>}
    </div>
  );
}`,
      outputExplanation: "يوضح الكود كيف يمكن لمكون العميل أن يحتوي على مكون خادم كـ `children`، مما يحافظ على التفاعل الخفيف مع بقاء محتوى البيانات خالياً من عبء الجافاسكريبت.",
      commonMistakes: "الاعتقاد بأن `'use client'` تعني أن المكون ينفذ في العميل فقط؛ الحقيقة أنه ينفذ على الخادم كـ SSR مبدئياً ثم يتم إرواؤه في العميل، بينما RSC لا يلمس كود العميل مطلقاً.",
      bestPractices: "اجعل معظم شجرة تطبيقك مكونات خادم (RSC)، وضع توجيه `'use client'` في أصغر نقاط التفاعل الممكنة كالأزرار وحقول الإدخال.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="230" height="100" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="145" y="65" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">Traditional SSR</text>
  <text x="145" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">HTML + FULL JS BUNDLE</text>
  <text x="145" y="110" fill="#f87171" fontSize="9" textAnchor="middle">Heavy Hydration step in browser</text>
  <path d="M 280 90 L 320 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="340" y="40" width="230" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="455" y="65" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">React Server Components</text>
  <text x="455" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">0 KB JS sent for Server Components</text>
  <text x="455" y="110" fill="#10b981" fontSize="9" textAnchor="middle">Zero Hydration Overhead</text>
</svg>`
    },
    {
      id: "34.3.o",
      title: "شرح طرق تحسين الأداء الشاملة في React (React Web Performance Optimization)",
      technicalTerm: {
        english: "Holistic React Performance Tuning & Core Web Vitals",
        pronunciation: "هوليستك ريأكت بيرفورمانس تيونينج آند كور ويب فايتالز",
        arabicMeaning: "الضبط الشامل لأداء React ومؤشرات الويب الأساسية"
      },
      description: "السؤال الختامي الأهم في المقابلات المعمارية: 'كيف تشخص وتحسن أداء تطبيق React بطيء؟' تتضمن الإجابة خريطة طريق متكاملة: 1. التشخيص الدقيق عبر React Profiler وأدوات المتصفح لكشف هدر إعادة التصيير (Wasted Renders). 2. تقسيم الكود (Code Splitting & Lazy Loading). 3. تقنية القوائم الافتراضية (Windowing / Virtualization عبر TanStack Virtual) لعرض آلاف العناصر دون ملء الـ DOM. 4. تحسين الصور عبر WebP وأبعاد ثابتة لمنع انزياح التخطيط التراكمي (CLS). 5. الانتقال للعمليات غير المحظورة باستخدام `useTransition`.",
      realWorldAnalogy: "مثل تجهيز سيارة لسباق الفورمولا 1؛ لا يقتصر الأمر على تقوية المحرك، بل يشمل تخفيف وزن الهيكل (تقسيم الكود)، ضبط تدفق الوقود (التقييد والتنظيم)، واستخدام إطارات انسيابية (Virtualization).",
      whyItMatters: "يحول التطبيقات البطيئة المترنحة إلى تجارب استخدام فائقة السرعة تحقق أعلى تصنيفات Google وتحافظ على ولاء المستخدمين.",
      syntax: "// تأجيل التحديثات غير العاجلة\nconst [isPending, startTransition] = useTransition();\nstartTransition(() => setSearchQuery(input));",
      simpleExample: `// استخدام useTransition لجعل الواجهة سريعة الاستجابة أثناء الحسابات
import React, { useState, useTransition } from 'react';

export function NonBlockingSearchDemo() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const val = e.target.value;
    // 1. تحديث حقل الإدخال فوراً دون أي تأخير
    setQuery(val);

    // 2. وضع تصفية القائمة الثقيلة في مرحلة غير عاجلة
    startTransition(() => {
      // حسابات تصفية آلاف العناصر
    });
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl space-y-2 text-xs">
      <input
        value={query}
        onChange={handleChange}
        placeholder="ابحث بسلاسة تامة..."
        className="w-full bg-slate-800 p-2 text-white rounded border border-slate-700"
      />
      {isPending && <span className="text-[10px] text-indigo-400">جاري تصفية القائمة بالخلفية...</span>}
    </div>
  );
}`,
      advancedExample: `// قائمة مراجعة تحسين الأداء المعمارية للمهندسين (Performance Audit Checklist)
export const REACT_PERF_PLAYBOOK = [
  { area: 'Bundle Size', action: 'استبدال المكتبات الثقيلة كـ Moment بـ date-fns أو Intl وتقسيم المسارات بـ React.lazy' },
  { area: 'Re-renders', action: 'استخدام React.memo وuseCallback للمكونات الحساسة وتطبيق Zustand بدلاً من Context الشامل' },
  { area: 'Large Lists', action: 'تطبيق التصفح الافتراضي (Windowing) لعرض العناصر الظاهرة فقط في مجال الرؤية' },
  { area: 'Network I/O', action: 'التخزين المؤقت مع TanStack Query وتطبيق التحديثات المتفائلة (Optimistic UI)' },
  { area: 'Core Web Vitals', action: 'ضغط الصور بصيغة WebP وتحديد أبعاد width/height مسبقاً لمنع انزياح التخطيط (CLS)' }
];`,
      outputExplanation: "تغطي هذه المعايير كافة طبقات تحسين الأداء؛ بدءاً من معالجة المعالج وذاكرة المتصفح وحتى شبكة نقل البيانات وتجربة المستخدم النهائية.",
      commonMistakes: "محاولة تطبيق تحسينات الأداء والـ Memoization بشكل أعمى قبل قياس المشكلة وتحديد المكون المسبب للاختناق عبر React Profiler.",
      bestPractices: "قس أولاً (Measure First, Optimize Later) باستخدام React DevTools Profiler، وركز على تحسين مقاييس Core Web Vitals (LCP, FID/INP, CLS).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="25" y="45" width="125" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="87" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">1. Measure</text>
  <text x="87" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">React Profiler</text>
  <path d="M 155 90 L 175 90" stroke="#94a3b8" strokeWidth="2" />
  <rect x="180" y="45" width="125" height="90" rx="8" fill="#1e293b" stroke="#818cf8" />
  <text x="242" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">2. Bundle Split</text>
  <text x="242" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">React.lazy & Suspense</text>
  <path d="M 310 90 L 330 90" stroke="#94a3b8" strokeWidth="2" />
  <rect x="335" y="45" width="125" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="397" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">3. Virtualize</text>
  <text x="397" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Windowing DOM</text>
  <path d="M 465 90 L 485 90" stroke="#94a3b8" strokeWidth="2" />
  <rect x="490" y="45" width="85" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="532" y="85" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">60 FPS</text>
  <text x="532" y="105" fill="#10b981" fontSize="9" textAnchor="middle">Silky Smooth</text>
</svg>`
    }
  ],
  quizzes: [
    {
      id: "quiz-34-3-1",
      question: "ما الفرق الأساسي في توقيت التنفيذ بين useEffect وuseLayoutEffect؟",
      options: [
        "لا يوجد أي فرق سوى الاسم",
        "useLayoutEffect ينفذ متزامناً فور تعديل الـ DOM وقبل أن يرسم المتصفح الشاشة لمنع الوميض، بينما useEffect ينفذ بعد رسم الشاشة",
        "useEffect مخصص فقط لمكونات الخادم",
        "useLayoutEffect مخصص فقط للهواتف المحمولة"
      ],
      correctAnswer: 1,
      explanation: "يحظر `useLayoutEffect` رسم المتصفح حتى ينتهي من حساباته، مما يجعله مثالياً لحساب أبعاد ومواقع العناصر دون أي قفزات بصرية للمستخدم."
    },
    {
      id: "quiz-34-3-2",
      question: "لماذا لا يُعتبر React Context بديلاً حقيقياً لمكتبات إدارة الحالة مثل Zustand في التطبيقات الكبيرة؟",
      options: [
        "لأن Context غير مدعوم في الإصدارات الحديثة من React",
        "لأن أي تغيير في قيمة Context يجبر جميع المكونات المستهلكة له على إعادة التصيير، بينما تدعم Zustand الاشتراكات الموجهة (Selectors)",
        "لأن Context يعمل فقط مع الأرقام وليس الكائنات",
        "لأن Redux مجاني بينما Context مدفوع"
      ],
      correctAnswer: 1,
      explanation: "يفتقر Context لآلية الاشتراكات الدقيقة؛ فأي تعديل في جزء صغير منه يسبب إعادة تصيير جماعية للمستهلكين، بينما تمنع مكتبات الحالة المتخصصة ذلك عبر Selectors."
    },
    {
      id: "quiz-34-3-3",
      question: "ما الفارق الجوهري بين مكونات خادم React (RSC) وتصيير SSR التقليدي؟",
      options: [
        "RSC يتطلب تثبيت مكتبة jQuery",
        "في RSC ينفذ كود المكون على الخادم فقط ولا يُرسل أي JavaScript منه إلى المتصفح دون تكلفة إرواء (0 Hydration)، بينما في SSR يُرسل كود JS بالكامل للعميل",
        "لا يوجد فرق فهما اسمان لنفس الميزة",
        "RSC يعمل فقط بدون اتصال بالإنترنت"
      ],
      correctAnswer: 1,
      explanation: "يمثل RSC ثورة معمارية بإلغاء إرسال حزم الجافاسكريبت لمكونات الخادم وإلغاء عملية الإرواء (Hydration) مما يحقق خفة وسرعة غير مسبوقة."
    }
  ],
  practicalExercise: {
    id: "exercise-34-3",
    title: "بناء مكون تدريب تفاعلي على فحص المساواة في React.memo",
    description: "قم بإنشاء مكون تفاعلي يختبر فهمك لـ React.memo؛ يحتوي على زرين: أحدهما يغير حالة الأب فقط دون تغيير الـ Props الممررة للابن، والآخر يغير الـ Props الممررة، مع وجود عداد يرصد عدد مرات إعادة تصيير المكون الابن فعلياً.",
    hints: [
      "غلف المكون الابن بـ React.memo.",
      "استخدم متغير خارجي أو useRef داخل الابن لتسجيل عدد مرات تصييره.",
      "احرص على كتابة تعليق عربي فوق كل سطر برمجي يوضح الغرض من الكود."
    ],
    solution: `// الحل النموذجي لمختبر اختبار React.memo والمساواة المرجعية
import React, { useState, memo, useRef } from 'react';

// مكون ابن مغلف بـ React.memo لتتبع مرات التصيير
const MemoizedChild = memo(function MemoizedChild({ staticText }) {
  // مرجع لتسجيل عدد مرات تصيير هذا المكون تحديداً
  const childRenderCounter = useRef(0);
  childRenderCounter.current += 1;

  return (
    <div className="p-4 bg-slate-850 border border-slate-700 rounded-2xl text-xs space-y-1">
      <span className="font-bold text-white block">المكون الابن المغلف بـ React.memo:</span>
      <p className="text-slate-350">النص الثابت الممرر: "{staticText}"</p>
      <span className="text-emerald-400 font-mono font-bold block">
        عدد مرات تصيير الابن: {childRenderCounter.current}
      </span>
    </div>
  );
});

export function MemoInteractivePlayground() {
  // حالة الأب غير المرتبطة بالابن
  const [parentCount, setParentCount] = useState(0);
  // حالة النص الممرر للابن
  const [text, setText] = useState('مرحباً');

  return (
    <div className="w-full max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5 font-sans text-xs">
      <div>
        <h3 className="text-base font-black text-white">مختبر React.memo التفاعلي</h3>
        <p className="text-slate-400 mt-1">
          لاحظ كيف يتجاهل الابن تصيير الأب عند النقر على الزر الأول، بينما يعاد تصييره فقط عند النقر على الزر الثاني!
        </p>
      </div>

      <div className="p-3 bg-slate-800/80 rounded-xl">
        <span className="text-slate-350">عداد تصيير الأب: <strong className="text-white">{parentCount}</strong></span>
      </div>

      {/* المكون الابن المغلف */}
      <MemoizedChild staticText={text} />

      <div className="flex flex-col gap-2 pt-2">
        <button
          onClick={() => setParentCount(c => c + 1)}
          className="w-full py-2.5 bg-slate-800 hover:bg-slate-750 text-white rounded-xl font-semibold border border-slate-700 transition-colors"
        >
          1. تحديث حالة الأب فقط (لن يعاد تصيير الابن) 🛡️
        </button>

        <button
          onClick={() => setText(t => t === 'مرحباً' ? 'أهلاً بك' : 'مرحباً')}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-indigo-600/20"
        >
          2. تغيير الـ Prop الممررة (سيعاد تصيير الابن) 🔄
        </button>
      </div>
    </div>
  );
}`
  },
  topicInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">React Technical Interview Mastery Blueprint</text>
  <rect x="40" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="115" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Core Lifecycle</text>
  <text x="115" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Render vs Commit</text>
  <text x="115" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Fiber V-DOM Diffing</text>
  <text x="115" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Linked List Hooks</text>
  <text x="115" y="185" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Heuristic O(N)</text>
  <path d="M 195 135 L 235 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="315" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Hooks & Effects</text>
  <text x="315" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Layout vs Passive</text>
  <text x="315" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">useMemo vs Callback</text>
  <text x="315" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">useRef Escape Hatch</text>
  <text x="315" y="185" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">Zero Glitch UI</text>
  <path d="M 395 135 L 435 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="505" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Modern Web</text>
  <text x="505" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">RSC 0 KB JS</text>
  <text x="505" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">SSR / SSG / ISR</text>
  <text x="505" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Suspense Streaming</text>
  <text x="505" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Senior Engineer</text>
</svg>`
};

