// topic2.js - القسم 34، الموضوع 2: الاستعداد لمقابلات JavaScript (JavaScript Interview Mastery)
// يحتوي على 8 مواضيع فرعية مفصلة وفق معايير الجودة الصارمة والشرح من الصفر

export const TOPIC_34_2 = {
  id: "topic-34-2",
  title: "الاستعداد لمقابلات JavaScript",
  description: "دليل تدريبي معماري شامل لاجتياز المقابلات التقنية في لغة JavaScript المتقدمة، يغطي المفاهيم العميقة التي يركز عليها كبار المهندسين ومسؤولو التوظيف: دورة حياة المحرك (Execution Context)، الإغلاقات (Closures)، حلقة الأحداث (Event Loop)، الوعود غير المتزامنة، وحل المسائل الخوارزمية الأكثر تكراراً في شركات التقنية العالمية.",
  subtopics: [
    {
      id: "34.2.a",
      title: "مراجعة نطاق المتغيرات والرفع (Scope & Hoisting Deep Dive)",
      technicalTerm: {
        english: "Lexical Scope & Temporal Dead Zone (TDZ)",
        pronunciation: "ليكسيكال سكوب آند تيمبورال ديد زون",
        arabicMeaning: "النطاق المعجمي والمنطقة الميتة المؤقتة"
      },
      description: "في مقابلات العمل، يُطرح سؤال Hoisting دائماً لكشف فهم المطور لكيفية قراءة محرك V8 للكود. يمر كود JavaScript بمرحلتين: مرحلة الإنشاء (Creation Phase) ومرحلة التنفيذ (Execution Phase). أثناء مرحلة الإنشاء، يتم 'رفع' (Hoisting) تعريفات الدوال وإعلانات المتغيرات `var` إلى قمة النطاق مع تعيين قيمة أولية `undefined`. في المقابل، فإن المتغيرات المعلنة بـ `let` و`const` تُرفع أيضاً لكن دون تهيئة، وتبقى في 'المنطقة الميتة المؤقتة' (Temporal Dead Zone - TDZ)؛ محاولة الوصول إليها قبل سطر الإعلان يُطلق خطأ فوري `ReferenceError`.",
      realWorldAnalogy: "مثل حجز طاولة في مطعم؛ عند رفع `var`، يتم وضع لافتة 'طاولة فارغة' (undefined) قبل وصولك، بينما مع `let` يُحظر دخول الغرفة تماماً (TDZ) حتى يفتح النادل الباب رسمياً عند موعد حجزك.",
      whyItMatters: "فهم الـ TDZ والنطاق يمنع الأخطاء غير المتوقعة (Silent Bugs) الناتجة عن تداخل المتغيرات في الحلقات التكرارية والشروط البرمجية.",
      syntax: "// الرفع مع TDZ\nconsole.log(a); // ReferenceError: Cannot access 'a' before initialization\nlet a = 10;",
      simpleExample: `// مقارنة بين var وlet في سلوك الرفع والنطاق
// محاكاة سؤال مقابلة شهير: ماذا سيطبع هذا الكود؟

function testHoisting() {
  // console.log(b); // يطلق ReferenceError بسبب وجوده في المنطقة الميتة المؤقتة (TDZ)
  console.log(a); // يطبع undefined لأن var يتم تهيئته تلقائياً عند الرفع

  var a = 'أنا var';
  let b = 'أنا let';

  console.log(b); // يطبع 'أنا let' بعد المرور بسطر الإعلان
}

testHoisting();`,
      advancedExample: `// لغز المقابلات الكلاسيكي: var داخل حلقة تكرار غير متزامنة مقابل let
function interviewScopePuzzle() {
  // 1. استخدام var: نطاق الدالة يجعل جميع الموقتات تشترك في نفس المتغير
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      // سيطبع 3 ثلاث مرات لأن i وصل إلى 3 عند انتهاء الحلقة وقبل تشغيل التايمر
      console.log('var index:', i);
    }, 100);
  }

  // 2. استخدام let: ينشئ نطاق كتلة (Block Scope) جديد تماماً لكل دورة حلقة
  for (let j = 0; j < 3; j++) {
    setTimeout(() => {
      // سيطبع 0 ثم 1 ثم 2 لأن كل تايمر يغلق على نسخته الخاصة من j
      console.log('let index:', j);
    }, 200);
  }
}

interviewScopePuzzle();`,
      outputExplanation: "في حالة `var`، يتم رفع متغير واحد مشترك للنطاق الأبوي فيطبع 3 ثلاث مرات. أما في حالة `let`، يتم إنشاء ارتباط جديد (New Binding) مع كل دورة حلقة تكرار ليحتفظ كل مؤقت بقيمته المستقلة.",
      commonMistakes: "الاعتقاد بأن `let` و`const` لا يتم رفعهما (Not Hoisted)؛ الحقيقة أنهما يُرفعان ولكن يتم حظرهما داخل المنطقة الميتة المؤقتة (TDZ) حتى سطر التهيئة.",
      bestPractices: "استخدم دائماً `const` كخيار افتراضي و`let` عند الحاجة للتعديل، وتجنب استخدام `var` نهائياً في الكود الحديث.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="35" width="240" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="150" y="60" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">var Behavior</text>
  <text x="150" y="85" fill="#cbd5e1" fontSize="10" textAnchor="middle">Hoisted + Initialized = undefined</text>
  <text x="150" y="110" fill="#94a3b8" fontSize="10" textAnchor="middle">Function Scoped (Leaky in loops)</text>
  <path d="M 285 90 L 315 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="35" width="240" height="120" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="60" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">let / const Behavior</text>
  <text x="450" y="85" fill="#cbd5e1" fontSize="10" textAnchor="middle">Hoisted in TDZ (Throws ReferenceError)</text>
  <text x="450" y="110" fill="#38bdf8" fontSize="10" textAnchor="middle">Block Scoped { Safe & Predictable }</text>
</svg>`
    },
    {
      id: "34.2.b",
      title: "مراجعة الإغلاقات (Closures & Lexical Scoping)",
      technicalTerm: {
        english: "Closures & Persistent Lexical Scope",
        pronunciation: "كلوجرز آند بيرسيستنت ليكسيكال سكوب",
        arabicMeaning: "الإغلاقات والنطاق المعجمي المستمر"
      },
      description: "الإغلاق (Closure) هو قدرة الدالة الداخلية على تذكر والوصول إلى المتغيرات الموجودة في نطاق الدالة الخارجية التي احتوتها، حتى بعد انتهاء تنفيذ الدالة الخارجية وخروجها من مكدس الاستدعاء (Call Stack). الإغلاق هو الأساس الذي تُبنى عليه خطافات React مثل `useState` ومصانع الدوال (Function Factories) ومفهوم البيانات الخاصة (Data Privacy / Encapsulation).",
      realWorldAnalogy: "مثل حقيبة الظهر التي تأخذها معك عند مغادرة منزلك؛ حتى بعد أن تغلق باب المنزل وتسافر لمدينة أخرى، ما زلت تملك حقيبتك التي تحوي أغراضك الخاصة وتستطيع استخدامها في أي وقت.",
      whyItMatters: "الإغلاقات هي الركيزة الجوهرية لكتابة دوال نقية وتطبيقات React، وفهمها بدقة يمنع أخطاء الحالات العالقة القديمة (Stale Closures في useEffect).",
      syntax: "// الإغلاق القياسي\nfunction makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nnext(); // 1\nnext(); // 2",
      simpleExample: `// تطبيق الإغلاق لإنشاء عداد بمتغير خاص محمي
function createPrivateCounter() {
  // متغير محلي خاص لا يمكن للواجهة الخارجية الوصول إليه مباشرة
  let count = 0;

  return {
    increment: () => {
      count += 1;
      return count;
    },
    getValue: () => count
  };
}

const counter = createPrivateCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count); // undefined (المتغير محمي بالكامل)`,
      advancedExample: `// محاكاة مبسطة لآلية عمل خطاف useState الداخلي باستخدام Closures
const MyReact = (() => {
  let stateValue; // القيمة المحفوظة في الإغلاق

  return {
    useState(initialValue) {
      // تهيئة الحالة إذا كانت غير معينة
      if (stateValue === undefined) {
        stateValue = initialValue;
      }

      // دالة التحديث تحتفظ بالوصول عبر الـ Closure
      const setState = (newValue) => {
        stateValue = newValue;
      };

      return [stateValue, setState];
    }
  };
})();

// اختبار المحاكي
const [count, setCount] = MyReact.useState(0);
console.log('القيمة الأولية:', count); // 0
setCount(42);
const [updatedCount] = MyReact.useState(0);
console.log('القيمة بعد التحديث:', updatedCount); // 42`,
      outputExplanation: "تحتفظ الدالة الداخلية بالوصول إلى المتغير `stateValue` المحفوظ في الـ Scope الأبوي، تماماً كما يحتفظ محرك React بحالة كل مكون عبر شجرة الألياف Fiber والإغلاقات.",
      commonMistakes: "الوقوع في فخ الإغلاق القديم (Stale Closure) داخل `useEffect` عند نسيان إضافة المتغير المستهلك في مصفوفة الاعتماديات (Dependency Array).",
      bestPractices: "استخدم الإغلاقات لإنشاء دوال مساعدة معزولة ومصانع دوال (Factories)، وانتبه لتنظيف المؤقتات والمستمعات لتجنب تسرب الذاكرة المرتبطة بالإغلاقات القديمة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="40" y="30" width="240" height="120" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="60" y="55" fill="#818cf8" fontSize="12" fontWeight="bold">Outer Function Scope</text>
  <rect x="60" y="70" width="200" height="60" rx="6" fill="#0f172a" />
  <text x="75" y="95" fill="#cbd5e1" fontSize="11">let secretData = 42;</text>
  <rect x="330" y="45" width="230" height="90" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="350" y="75" fill="#34d399" fontSize="12" fontWeight="bold">Returned Inner Function</text>
  <text x="350" y="100" fill="#cbd5e1" fontSize="10">Still remembers secretData!</text>
  <path d="M 260 100 L 325 100" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />
</svg>`
    },
    {
      id: "34.2.c",
      title: "مراجعة حلقة الأحداث (Event Loop, Call Stack & Microtasks)",
      technicalTerm: {
        english: "Event Loop, Microtasks & Macrotasks Queue",
        pronunciation: "إيفينت لوب مايكرو تاسكس آند ماكرو تاسكس كيو",
        arabicMeaning: "حلقة الأحداث وقوائم المهام الدقيقة والكبيرة"
      },
      description: "لغة JavaScript أحادية الخيط (Single-Threaded)، ولتنفيذ المهام غير المتزامنة دون تجميد الواجهة تعتمد على حلقة الأحداث (Event Loop). يتكون النظام من: 1. مكدس الاستدعاء (Call Stack) للعمليات المتزامنة، 2. قائمة المهام الدقيقة (Microtask Queue) المخصصة للوعود (`Promise.then` و`queueMicrotask`)، و3. قائمة المهام الكبيرة (Macrotask Queue) للمؤقتات (`setTimeout`, `setInterval`). قاعدة المحرك الذهبية: لا يتم سحب أي مهمة من Macrotask إلا بعد إفراغ Call Stack وإفراغ قائمة Microtask بالكامل.",
      realWorldAnalogy: "مثل موظف خدمة العملاء في بنك؛ ينتهي أولاً من العميل الواقف أمامه (Call Stack)، ثم ينظر في صندوق المعاملات العاجلة ذات الأولوية القصوى (Microtasks: الوعود)، وبعد إفراغه تماماً ينادي على أصحاب التذاكر العادية المنتظرين في المقاعد (Macrotasks: setTimeout).",
      whyItMatters: "هذا السؤال يفرز المهندسين الذين يفهمون سلوك المتصفح الداخلي؛ ومعرفته تمنع التجميد العارض للشاشة (UI Freezes).",
      syntax: "// ترتيب التنفيذ القياسي\nconsole.log(1);\nsetTimeout(() => console.log(2), 0);\nPromise.resolve().then(() => console.log(3));\nconsole.log(4);\n// النتيجة: 1, 4, 3, 2",
      simpleExample: `// لغز ترتيب طباعة حلقة الأحداث الكلاسيكي في المقابلات
console.log('1: بداية متزامنة (Call Stack)');

setTimeout(() => {
  console.log('4: مهمة كبيرة (Macrotask Timer)');
}, 0);

Promise.resolve().then(() => {
  console.log('3: مهمة دقيقة (Microtask Promise)');
});

console.log('2: نهاية متزامنة (Call Stack)');

// الترتيب النهائي للطباعة في وحدة التحكم:
// 1
// 2
// 3
// 4`,
      advancedExample: `// محاكاة تجربة معقدة تجمع بين MutationObserver والوعود والمؤقتات
function deepEventLoopDemo() {
  console.log('A: Sync');

  setTimeout(() => {
    console.log('B: Macrotask 1');
    Promise.resolve().then(() => {
      console.log('C: Microtask inside Macrotask');
    });
  }, 0);

  Promise.resolve().then(() => {
    console.log('D: Microtask 1');
    queueMicrotask(() => {
      console.log('E: Chained Microtask');
    });
  });

  console.log('F: Sync End');
}

deepEventLoopDemo();
// النتيجة المتوقعة بالترتيب:
// A -> F -> D -> E -> B -> C`,
      outputExplanation: "ينفذ المحرك العمليات المتزامنة أولاً (A ثم F)، ثم يفرغ طابور الـ Microtasks كاملاً بما فيه المهام المتسلسلة (D ثم E)، ثم ينتقل إلى التايمر B الذي يضيف مهمة دقيقة C يتم إفراغها فوراً.",
      commonMistakes: "الاعتقاد بأن `setTimeout(..., 0)` سينفذ فوراً في 0 ميلي ثانية؛ في الواقع هو يوضع في نهاية طابور Macrotask ولا ينفذ إلا بعد إفراغ كل الكود المتزامن والوعود المعلقة.",
      bestPractices: "استخدم `queueMicrotask` إذا كنت تريد جدولة كود غير متزامن ذي أولوية قصوى ينفذ قبل تحديث واجهة العرض (Repaint) ودون تأخير المؤقتات.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="25" y="35" width="130" height="130" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="90" y="65" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">1. Call Stack</text>
  <text x="90" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">Sync Execution</text>
  <text x="90" y="125" fill="#10b981" fontSize="10" textAnchor="middle">Runs to completion</text>
  <path d="M 160 100 L 200 100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="205" y="35" width="170" height="130" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="290" y="65" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">2. Microtask Queue</text>
  <text x="290" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">Promises & queueMicrotask</text>
  <text x="290" y="125" fill="#34d399" fontSize="10" textAnchor="middle">Emptied completely FIRST</text>
  <path d="M 380 100 L 420 100" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="425" y="35" width="150" height="130" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
  <text x="500" y="65" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">3. Macrotask Queue</text>
  <text x="500" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">setTimeout & I/O</text>
  <text x="500" y="125" fill="#f59e0b" fontSize="10" textAnchor="middle">1 task per tick</text>
</svg>`
    },
    {
      id: "34.2.d",
      title: "مراجعة الوعود والبرمجة غير المتزامنة (Promises, async/await & Promise Combinators)",
      technicalTerm: {
        english: "Promise Lifecycle & Concurrent Combinators",
        pronunciation: "بروميس لايف سايكل آند كونكرنت كومبيناتورز",
        arabicMeaning: "دورة حياة الوعود والمجمعات المتزامنة"
      },
      description: "يمر الـ Promise بثلاث حالات غير قابلة للتراجع: المعلقة (`pending`)، المحققة بنجاح (`fulfilled`)، والمرفوضة بخطأ (`rejected`). في المقابلات، يركز الممتحنون على دوال التجميع الأربع: `Promise.all` (يفشل كلياً إذا فشل وعد واحد)، `Promise.allSettled` (ينتظر الجميع ويعيد نتائج كل وعد نجاحاً أو فشلاً)، `Promise.race` (يعيد أول وعد ينتهي سواء بنجاح أو فشل)، و`Promise.any` (يعيد أول وعد ينجح فقط).",
      realWorldAnalogy: "مثل مسابقة جري بين 4 عدائين؛ `Promise.race` يعطيك أول من يقطع خط النهاية بغض النظر هل فاز أم تعثر وسقط، بينما `Promise.allSettled` ينتظر وصول جميع المتسابقين ويكتب تقريراً بحالة كل منهم.",
      whyItMatters: "إدارة الاتصالات المتوازية بالـ Combinator المناسب ترفع سرعة استجابة التطبيق وتمنع انهيار الواجهة عند تعطل أحد المصادر الخارجية.",
      syntax: "// مقارنة المجمعات\nconst results = await Promise.allSettled([fetchUsers(), fetchPosts()]);\nconst fastest = await Promise.race([fetchFromPrimary(), timeout(5000)]);",
      simpleExample: `// استخدام Promise.allSettled لجلب بيانات آمنة دون توقف الصفحة
async function loadDashboardData() {
  const [usersRes, analyticsRes] = await Promise.allSettled([
    Promise.resolve(['سارة', 'أحمد']),
    Promise.reject(new Error('خدمة التحليلات معطلة مؤقتاً'))
  ]);

  // التحقق من نتائج كل وعد على حدة
  if (usersRes.status === 'fulfilled') {
    console.log('المستخدمين:', usersRes.value);
  }

  if (analyticsRes.status === 'rejected') {
    console.warn('تنبيه:', analyticsRes.reason.message);
  }
}

loadDashboardData();`,
      advancedExample: `// دمج Promise.race لبناء دالة Fetch مزودة بمهلة زمنية ذاتية (Fetch with Timeout)
async function fetchWithTimeout(url, timeoutMs = 4000) {
  // إنشاء وعد مهلة زمنية يرفض بعد انقضاء الوقت المحدد
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(\`انتهت المهلة الزمنية للطلب بعد \${timeoutMs} ميلي ثانية\`));
    }, timeoutMs);
  });

  // سباق بين طلب الشبكة الفعلي ومؤقت المهلة
  const networkPromise = fetch(url).then(res => {
    if (!res.ok) throw new Error('فشل الطلب من الخادم');
    return res.json();
  });

  // يفوز الأسرع بينهما
  return await Promise.race([networkPromise, timeoutPromise]);
}`,
      outputExplanation: "تضمن هذه الدالة عدم تعليق واجهة المستخدم إلى الأبد إذا كان خادم التطبيق لا يستجيب، حيث يقوم مؤقت `Promise.race` بقطع الانتظار بعد 4 ثوانٍ وإلقاء خطأ مهلة نظيف.",
      commonMistakes: "استخدام `Promise.all` عند جلب بيانات من خدمات غير أساسية، مما يؤدي إلى فشل الصفحة بأكملها في حال تعطل خدمة فرعية واحدة.",
      bestPractices: "استخدم `Promise.allSettled` عندما ترغب في عرض ما نجح من البيانات والتعامل مع الأخطاء بشكل هادئ ومنفصل لكل قسم في الواجهة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="160" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Promise.all</text>
  <text x="110" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">All must resolve (Fail-fast)</text>
  <rect x="220" y="30" width="160" height="60" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="300" y="55" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Promise.allSettled</text>
  <text x="300" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">Waits for ALL (Success or Fail)</text>
  <rect x="410" y="30" width="160" height="60" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="490" y="55" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Promise.race</text>
  <text x="490" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">First to settle wins (Any status)</text>
  <rect x="220" y="105" width="160" height="60" rx="8" fill="#1e293b" stroke="#818cf8" />
  <text x="300" y="130" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Promise.any</text>
  <text x="300" y="150" fill="#cbd5e1" fontSize="9" textAnchor="middle">First SUCCESSFUL wins</text>
</svg>`
    },
    {
      id: "34.2.e",
      title: "مراجعة دوال المصفوفات المتقدمة (map, filter, reduce & flatMap)",
      technicalTerm: {
        english: "Functional Array Pipeline & Accumulator Transformation",
        pronunciation: "فانكشنال أراي بايبلاين آند أكيوميولاتور ترانسفورميشن",
        arabicMeaning: "مسار المصفوفات الوظيفي وتحويلات المجمع"
      },
      description: "دوال التحويل الوظيفية للمصفوفات هي أساس التعامل مع البيانات في واجهات React. تعتبر دالة `reduce` هي السويسرية المتعددة الاستخدامات في المقابلات؛ حيث يمكن بها إعادة بناء `map` و`filter` وتجميع العناصر وتطبيع المصفوفات إلى كائنات قواميس (Grouping & Normalizing). يتم التركيز في المقابلات على عدم التعديل في الأصل (Pure Functions) وتجنب السلاسل الحسابية المفرطة التي تستهلك الذاكرة.",
      realWorldAnalogy: "مثل خط تجميع في مصنع عصير؛ `filter` تستبعد الفاكهة التالفة، و`map` تقشر وتعصر الفاكهة الصالحة، بينما `reduce` تجمع العصير كله في قارورة واحدة كبيرة جاهزة للتوزيع.",
      whyItMatters: "تستخدم هذه الدوال في كل سطر تقريباً داخل مكونات React، والتمكن منها يمكّنك من كتابة كود وظيفي أنيق، مقروء، وخالٍ من الأخطاء الجانبية.",
      syntax: "// تجميع البيانات باستخدام reduce\nconst grouped = items.reduce((acc, item) => {\n  acc[item.category] = acc[item.category] || [];\n  acc[item.category].push(item);\n  return acc;\n}, {});",
      simpleExample: `// تجميع قائمة من الموظفين حسب القسم باستخدام reduce
const employees = [
  { name: 'أحمد', department: 'الهندسة' },
  { name: 'سارة', department: 'التصميم' },
  { name: 'خالد', department: 'الهندسة' }
];

// تجميع في كائن منظم: { الهندسة: [...], التصميم: [...] }
const groupedByDept = employees.reduce((acc, emp) => {
  const dept = emp.department;
  if (!acc[dept]) acc[dept] = [];
  acc[dept].push(emp.name);
  return acc;
}, {});

console.log(groupedByDept);`,
      advancedExample: `// بناء دالة groupBy مخصصة مع دعم الفلترة والتحويل في مسار واحد فائق السرعة
function processOrdersPipeline(orders) {
  // تحويل مصفوفة الطلبات إلى إحصائيات مالية مجمعة في دورة فحص واحدة O(N)
  return orders.reduce((acc, order) => {
    // استبعاد الطلبات الملغاة
    if (order.status === 'canceled') return acc;

    // تجميع الإجمالي المالي الكلي
    acc.totalRevenue += order.amount;

    // حساب عدد الطلبات حسب المدينة
    acc.byCity[order.city] = (acc.byCity[order.city] || 0) + 1;

    return acc;
  }, { totalRevenue: 0, byCity: {} });
}

const sampleOrders = [
  { id: 1, amount: 150, city: 'الرياض', status: 'completed' },
  { id: 2, amount: 200, city: 'دبي', status: 'completed' },
  { id: 3, amount: 50, city: 'الرياض', status: 'canceled' }
];

console.log(processOrdersPipeline(sampleOrders));
// { totalRevenue: 350, byCity: { 'الرياض': 1, 'دبي': 1 } }`,
      outputExplanation: "باستخدام `reduce` في مسار واحد، تم حساب الإيرادات وفلترة الملغى وتجميع المدن دون الحاجة لربط `orders.filter().map().reduce()` معاً مما وفر 3 دورات فحص كاملة في الذاكرة.",
      commonMistakes: "نسيان إرجاع كائن المجمع `return acc;` في نهاية دالة الـ `reduce`، مما يجعل المجمع `undefined` في الدورة التالية ويتسبب في انهيار الكود.",
      bestPractices: "وفر دائماً القيمة الأولية (Initial Value) كمعامل ثانٍ لدالة `reduce` لتجنب الأخطاء عند تمرير مصفوفات فارغة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="75" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Array [N items]</text>
  <text x="95" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">Flat List</text>
  <path d="M 165 90 L 235 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="320" y="75" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">.reduce(fn, init)</text>
  <text x="320" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Accumulator Engine</text>
  <path d="M 405 90 L 465 90" stroke="#10b981" strokeWidth="2" />
  <rect x="470" y="45" width="100" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="520" y="75" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Dictionary</text>
  <text x="520" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">{ [group]: [] }</text>
</svg>`
    },
    {
      id: "34.2.f",
      title: "مراجعة عدم تعديل البيانات والنسخ العميق (Immutability & Deep Cloning)",
      technicalTerm: {
        english: "Structural Sharing & Immutability Patterns",
        pronunciation: "ستركتشرال شيرينج آند إيميوتابيليتي باترنز",
        arabicMeaning: "المشاركة الهيكلية وأنماط عدم تعديل البيانات"
      },
      description: "عدم التعديل المباشر في البيانات (Immutability) هو العقيدة الأساسية التي يقوم عليها React. تعديل كائن أو مصفوفة مباشرة (مثل `arr.push()` أو `obj.x = 2`) لا يغير المرجع في الذاكرة (Memory Reference)، مما يجعل مقارنة المساواة السطحية في React تفشل ولا تطلق إعادة التصيير. في المقابلات، يتم اختبار الفرق بين النسخ السطحي (Shallow Copy عبر `Object.assign` وSpread `...`) والنسخ العميق (Deep Copy عبر `structuredClone`).",
      realWorldAnalogy: "مثل تعديل عقد بيع عقاري؛ لا تقوم بشطب الأرقام بالقلم على نفس الورقة الأصلية الموقعة، بل تطبع نسخة جديدة تماماً تحمل التعديل وتوقعها بتاريخ اليوم لحفظ التوثيق التاريخي.",
      whyItMatters: "انتهاك الـ Immutability يسبب أخطر أنواع الأخطاء في React: عدم تحديث الواجهة عند تغير البيانات، أو تشوه بيانات مكونات أخرى تشترك في نفس المرجع.",
      syntax: "// النسخ العميق الحديث في جافاسكريبت\nconst deepCopy = structuredClone(originalObject);\n// النسخ السطحي غير القابل للتعديل\nconst updated = { ...state, count: state.count + 1 };",
      simpleExample: `// مثال يوضح الفرق بين التعديل المباشر الخاطئ والتحديث غير القابل للتعديل
const originalUser = { name: 'طارق', profile: { age: 28 } };

// ❌ تعديل مباشر يكسر React (Mutation):
// originalUser.profile.age = 29;

// ⚠️ نسخ سطحي (Shallow Copy) - الكائنات المتداخلة لا تزال تشترك في نفس المرجع:
const shallowClone = { ...originalUser };
// shallowClone.profile.age = 30; // سيعدل في originalUser أيضاً!

// ✅ تحديث غير قابل للتعديل مع الحفاظ على الهيكل (Immutable Update):
const safeUpdatedUser = {
  ...originalUser,
  profile: {
    ...originalUser.profile,
    age: 29
  }
};`,
      advancedExample: `// دالة نسخ عميق مخصصة (Custom Deep Clone) لمعالجة الكائنات والمصفوفات
function customDeepClone(target, hash = new WeakMap()) {
  // إذا كانت القيمة بدائية (Primitive) أو null نعيدها كما هي
  if (target === null || typeof target !== 'object') {
    return target;
  }

  // معالجة التواريخ
  if (target instanceof Date) return new Date(target);

  // حماية من المراجع الدائرية (Circular References)
  if (hash.has(target)) return hash.get(target);

  // إنشاء مصفوفة أو كائن جديد
  const clone = Array.isArray(target) ? [] : {};
  hash.set(target, clone);

  for (const key of Object.keys(target)) {
    clone[key] = customDeepClone(target[key], hash);
  }

  return clone;
}`,
      outputExplanation: "توضح الدالة المتقدمة كيفية نسخ الكائنات المعقدة بعمق متكامل، مع استخدام `WeakMap` لتفادي الوقوع في حلقة لا نهائية إذا كان الكائن يشير إلى نفسه دائرياً.",
      commonMistakes: "استخدام `JSON.parse(JSON.stringify(obj))` للنسخ العميق، حيث يفقد التواريخ والدوال وقيم `undefined` والـ Symbols والخرائط.",
      bestPractices: "استخدم واجهة المتصفح الأصلية الحديثة `structuredClone(obj)` للنسخ العميق، واعتمد معاملات الانتشار `{ ...obj }` للتحديثات المتداخلة السريعة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="160" height="100" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="110" y="65" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">Mutation (Mutate ref)</text>
  <text x="110" y="90" fill="#94a3b8" fontSize="10" textAnchor="middle">obj.title = 'New'</text>
  <text x="110" y="115" fill="#f87171" fontSize="9" textAnchor="middle">React skips render!</text>
  <path d="M 200 90 L 250 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="40" width="160" height="100" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="340" y="65" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Shallow ({ ...obj })</text>
  <text x="340" y="90" fill="#cbd5e1" fontSize="9" textAnchor="middle">Top level cloned</text>
  <text x="340" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">Nested refs shared</text>
  <path d="M 430 90 L 480 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="40" width="80" height="100" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="530" y="95" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">structuredClone</text>
</svg>`
    },
    {
      id: "34.2.g",
      title: "حل مسائل المصفوفات والكائنات في المقابلات (Array & Object Coding Challenges)",
      technicalTerm: {
        english: "Time Complexity & Hash Map Lookups",
        pronunciation: "تايم كومبليكسيتي آند هاش ماب لوك آبس",
        arabicMeaning: "التعقيد الزمني وعمليات البحث بجدول التجزئة"
      },
      description: "في المقابلات التقنية الحية، يُطلب منك حل مسائل خوارزمية على المصفوفات والكائنات مع التركيز الشديد على التعقيد الزمني (Time Complexity O(N)). أشهر هذه المسائل: مسألة المجموعين (Two Sum)، تسطيح المصفوفات المتداخلة (Flatten Array)، إزالة العناصر المكررة، وحساب تكرار الكلمات. مفتاح النجاح هو استبدال الحلقات المتداخلة O(N^2) باستخدام جداول التجزئة `Map` أو كائنات القواميس لتحقيق سرعة خطية O(N).",
      realWorldAnalogy: "مثل البحث عن كتاب في مكتبة ضخمة؛ بدلاً من تصفح كل الرفوف من البداية للنهاية لكل زائر (O(N^2))، تنظر في دفتر الفهرس الأبجدي لتجد رقم الرف فوراً (O(1)).",
      whyItMatters: "يختبر قدرتك على كتابة كود فعال لا ينهار عندما ترتفع كمية البيانات في بيئة الإنتاج إلى مئات الآلاف من العناصر.",
      syntax: "// خوارزمية Two Sum بزمن O(N)\nfunction twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) return [map.get(diff), i];\n    map.set(nums[i], i);\n  }\n}",
      simpleExample: `// تسطيح مصفوفة متداخلة بعمق غير محدود (Flatten Deep Array)
function customFlatten(arr) {
  return arr.reduce((acc, item) => {
    // إذا كان العنصر مصفوفة نعيد استدعاء الدالة عودياً
    return acc.concat(Array.isArray(item) ? customFlatten(item) : item);
  }, []);
}

const nested = [1, [2, [3, [4, 5]]]];
console.log(customFlatten(nested)); // [1, 2, 3, 4, 5]`,
      advancedExample: `// حل مسألة Two Sum الشهيرة في مقابلات Google وMeta بزمن خطي O(N)
function twoSumOptimized(numbers, targetSum) {
  // استخدام Map لتخزين الرقم المكمل وفهرسه
  const seenMap = new Map();

  for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
    const currentNumber = numbers[currentIndex];
    const neededComplement = targetSum - currentNumber;

    // فحص ما إذا كان الرقم المكمل موجوداً مسبقاً في جدول الهاش O(1)
    if (seenMap.has(neededComplement)) {
      return [seenMap.get(neededComplement), currentIndex];
    }

    // حفظ الرقم الحالي مع فهرسه
    seenMap.set(currentNumber, currentIndex);
  }

  return []; // لم يتم العثور على مجموع مطابق
}

console.log(twoSumOptimized([2, 7, 11, 15], 9)); // [0, 1] لأن 2 + 7 = 9`,
      outputExplanation: "تنجز خوارزمية `twoSumOptimized` المهمة في دورة فحص واحدة O(N) عبر البحث اللحظي O(1) في الـ Map، متفوقة على خوارزمية الحلقات المزدوجة القديمة التي تستغرق O(N^2).",
      commonMistakes: "استخدام حل الحلقات المتداخلة `for (let i...) { for (let j...) }` كأول إجابة في المقابلة دون توضيح عيوب التعقيد الزمني.",
      bestPractices: "وضح دائماً للممتحن التعقيد الزمني (Time Complexity) والتعقيد المكاني (Space Complexity) للحل قبل البدء في كتابة أول سطر كود.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="220" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="140" y="75" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">Nested Loops O(N²)</text>
  <text x="140" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">Slow for large datasets</text>
  <path d="M 265 90 L 315 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="45" width="240" height="90" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Hash Map Lookup O(N)</text>
  <text x="450" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">Single Pass + Instant O(1) Check</text>
</svg>`
    },
    {
      id: "34.2.h",
      title: "حل مسائل البرمجة غير المتزامنة (Debounce, Throttle & Async Queue)",
      technicalTerm: {
        english: "Async Control Flow: Debounce, Throttle & Concurrency Queue",
        pronunciation: "إيسينك كنترول فلو دي باونس ثروتل آند كونكرنسي كيو",
        arabicMeaning: "التحكم في التدفق غير المتزامن: التقييد والتنظيم وطابور التزامن"
      },
      description: "تعتبر مسألتا `debounce` و`throttle` وطابور تنفيذ الوعود المتزامنة (Async Concurrency Queue) من أكثر الأسئلة اختباراً للقدرات المتقدمة للمهندس. التقييد الزمني (Debounce) يؤجل تنفيذ الدالة حتى يمر وقت محدد من آخر استدعاء (مثالي لحقول البحث)، بينما التنظيم (Throttle) يضمن عدم تنفيذ الدالة أكثر من مرة واحدة خلال فترة زمنية محددة (مثالي لأحداث التمرير والتمرير بالماوس).",
      realWorldAnalogy: "مثل باب المصعد الذكي؛ مع Debounce، كلما دخل شخص يظل الباب مفتوحاً وينتظر 5 ثوانٍ من دخول آخر شخص ليغلق. ومع Throttle، يصعد المصعد كل 3 دقائق بانتظام بغض النظر عن عدد الأشخاص المنتظرين.",
      whyItMatters: "حماية الواجهة والشبكة من مئات الطلبات غير الضرورية في الثانية الواحدة وتقديم تجربة استخدام بالغة النعومة.",
      syntax: "// صيغة دالة Debounce المعيارية\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
      simpleExample: `// تنفيذ دالة debounce من الصفر
function debounce(callback, delayMs) {
  let timerId;

  return function (...args) {
    // إلغاء المؤقت السابق عند كل استدعاء جديد
    clearTimeout(timerId);

    // جدولة مؤقت جديد
    timerId = setTimeout(() => {
      callback.apply(this, args);
    }, delayMs);
  };
}

// اختبار الدالة
const logSearch = debounce((query) => console.log('بحث عن:', query), 300);
logSearch('R');
logSearch('Re');
logSearch('React'); // سيطبع فقط 'بحث عن: React' بعد 300ms من التوقف`,
      advancedExample: `// طابور مهام غير متزامنة مع تحديد أقصى عدد للمهام المتزامنة (Async Queue with Concurrency Limit)
class AsyncConcurrencyQueue {
  constructor(concurrencyLimit = 2) {
    this.limit = concurrencyLimit;
    this.runningCount = 0;
    this.queue = [];
  }

  // إضافة مهمة جديدة للطابور
  enqueue(taskFn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ taskFn, resolve, reject });
      this.next();
    });
  }

  // معالجة المهمة التالية في الطابور
  async next() {
    if (this.runningCount >= this.limit || this.queue.length === 0) {
      return;
    }

    const { taskFn, resolve, reject } = this.queue.shift();
    this.runningCount++;

    try {
      const result = await taskFn();
      resolve(result);
    } catch (err) {
      reject(err);
    } finally {
      this.runningCount--;
      this.next(); // تشغيل المهمة التالية فور فراغ المقعد
    }
  }
}`,
      outputExplanation: "يضمن هذا الطابور عدم تشغيل أكثر من عمليتين في نفس الوقت (مثلاً رفع ملفين معاً فقط)، وبمجرد انتهاء أحدهما يتم سحب المهمة التالية تلقائياً لمنع إغراق الخادم.",
      commonMistakes: "فقدان سياق `this` أو المعاملات داخل دالة `debounce` عند عدم استخدام `apply(this, args)` أو الدوال السهمية.",
      bestPractices: "أضف خاصية إلغاء (`cancel`) إلى دالة `debounce` لتمكين تنظيفها بسهولة داخل `useEffect` عند إلغاء تركيب المكون.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="240" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="150" y="75" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Debounce (Wait for silence)</text>
  <text x="150" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Executes after 300ms of INACTIVITY</text>
  <path d="M 285 90 L 315 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="45" width="240" height="90" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="75" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Throttle (Paced execution)</text>
  <text x="450" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Executes at most ONCE per interval</text>
</svg>`
    }
  ],
  quizzes: [
    {
      id: "quiz-34-2-1",
      question: "ما الفرق الجوهري بين قائمة المهام الدقيقة (Microtask Queue) والمهام الكبيرة (Macrotask Queue) في حلقة الأحداث؟",
      options: [
        "المهام الكبيرة تنفذ أسرع دائماً",
        "المحرك يفرغ قائمة المهام الدقيقة (Microtasks كالوعود) بالكامل أولاً قبل سحب أي مهمة من قائمة المهام الكبيرة (Macrotasks كالـ setTimeout)",
        "لا يوجد أي فرق بينهما",
        "المهام الدقيقة مخصصة فقط لأجهزة الهواتف المحمولة"
      ],
      correctAnswer: 1,
      explanation: "قاعدة الـ Event Loop الذهبية هي إفراغ الـ Microtask Queue بالكامل فور انتهاء مكدس الاستدعاء، ثم سحب مهمة واحدة من الـ Macrotask Queue."
    },
    {
      id: "quiz-34-2-2",
      question: "ما الذي يحدث عند محاولة قراءة متغير معلن بـ let قبل سطر الإعلان عنه؟",
      options: [
        "يطبع undefined بصمت",
        "يطلق خطأ ReferenceError بسبب وجود المتغير في المنطقة الميتة المؤقتة (Temporal Dead Zone)",
        "يقوم بحذف المتغير تلقائياً",
        "يعيد القيمة 0"
      ],
      correctAnswer: 1,
      explanation: "يتم رفع متغيرات `let` و`const` ولكن تظل غير مهيأة داخل المنطقة الميتة المؤقتة (TDZ) حتى يمر التنفيذ بسطر إعلانها، والوصول إليها يطلق ReferenceError."
    },
    {
      id: "quiz-34-2-3",
      question: "أي من مجمعات الوعود التالية يعيد نتائج جميع الوعود (سواء نجحت أو فشلت) دون أن ينهار بالكامل عند فشل أحدها؟",
      options: [
        "Promise.race",
        "Promise.all",
        "Promise.allSettled",
        "Promise.any"
      ],
      correctAnswer: 2,
      explanation: "دالة `Promise.allSettled` تنتظر اكتمال كافة الوعود وتعيد مصفوفة بحالة وقيمة كل وعد (`fulfilled` أو `rejected`) مما يجعلها آمنة ضد انهيار الصفحة."
    }
  ],
  practicalExercise: {
    id: "exercise-34-2",
    title: "بناء دالة Throttle تفاعلية لمراقبة معدل النقرات المفرط",
    description: "قم بإنشاء مكون تفاعلي يحتوي على تطبيق لدالة `throttle` لمنع تكرار النقر السريع على زر معالجة الدفع، وعرض عداد النقرات الإجمالي مقابل عدد المرات الفعلية التي تم فيها تنفيذ الدالة.",
    hints: [
      "احفظ وقت آخر استدعاء (lastExecutionTime) عبر useRef أو داخل الإغلاق.",
      "قارن بين الوقت الحالي ووقت آخر تنفيذ للتأكد من انقضاء المهلة المحددة.",
      "احرص على كتابة تعليق عربي فوق كل سطر برمجي يوضح الغرض من الكود."
    ],
    solution: `// الحل النموذجي لمكون اختبار دالة Throttle التفاعلية
import React, { useState, useRef, useCallback } from 'react';

// دالة throttle المعيارية المعتمدة على الوقت
function createThrottle(func, limitMs) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limitMs);
    }
  };
}

export function ThrottlePlayground() {
  // عداد النقرات الإجمالي الفعلي للمستخدم
  const [totalClicks, setTotalClicks] = useState(0);
  // عداد التنفيذات الفعلية المسموح بها عبر الـ Throttle
  const [executedCalls, setExecutedCalls] = useState(0);

  // إنشاء نسخة مستقرة من الدالة المحددة بالـ Throttle لمدة 1000 ميلي ثانية
  const throttledExecution = useRef(
    createThrottle(() => {
      setExecutedCalls(prev => prev + 1);
    }, 1000)
  ).current;

  const handleClick = () => {
    setTotalClicks(prev => prev + 1);
    throttledExecution();
  };

  return (
    <div className="w-full max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 text-center font-sans">
      <div>
        <h3 className="text-base font-black text-white">اختبار دالة Throttle (1 ثانية)</h3>
        <p className="text-xs text-slate-400 mt-1">
          انقر بسرعة وبشكل متكرر على الزر ولاحظ كيف يتم تقييد المعالجة لمرة واحدة كل ثانية.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block">إجمالي النقرات</span>
          <span className="text-2xl font-black text-rose-400 mt-1 block">{totalClicks}</span>
        </div>

        <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800">
          <span className="text-xs text-slate-400 block">التنفيذات الفعلية</span>
          <span className="text-2xl font-black text-emerald-400 mt-1 block">{executedCalls}</span>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-bold rounded-2xl text-xs transition-all shadow-xl shadow-indigo-600/30"
      >
        انقر هنا بسرعة فائقة! ⚡
      </button>
    </div>
  );
}`
  },
  topicInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Advanced JavaScript Interview Architecture</text>
  <rect x="40" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="115" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Engine Internals</text>
  <text x="115" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Hoisting & TDZ</text>
  <text x="115" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Closures & Scope</text>
  <text x="115" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Memory Retention</text>
  <text x="115" y="185" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Core Principles</text>
  <path d="M 195 135 L 235 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="315" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Concurrency</text>
  <text x="315" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Event Loop</text>
  <text x="315" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Microtasks Priority</text>
  <text x="315" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Promise Combinators</text>
  <text x="315" y="185" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">Non-blocking I/O</text>
  <path d="M 395 135 L 435 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="505" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Coding Prowess</text>
  <text x="505" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">O(N) Hash Maps</text>
  <text x="505" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Pure Immutability</text>
  <text x="505" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Debounce & Throttle</text>
  <text x="505" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Interview Ready</text>
</svg>`
};

