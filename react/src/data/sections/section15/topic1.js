// topic1.js - القسم 15: React Hooks المتقدمة ومفاهيم React الحديثة
// الموضوع 1: استخدام useMemo و useCallback

export const topic1 = {
  id: "15.1",
  title: "استخدام useMemo و useCallback",
  englishTitle: "Using useMemo & useCallback",
  description: "الدليل المرجعي العميق لفهم تقنيات التخزين المؤقت (Memoization) في React، متى وكيف تستخدم useMemo و useCallback لتعزيز الأداء والحفاظ على استقرار المراجع، وكيف تتجنب فخاخ التحسين المبكر وقياس الأداء بدقة.",
  subtopics: [
    {
      id: "15.1.a",
      title: "مفهوم Memoization",
      englishTerm: {
        term: "Memoization Concept",
        pronunciation: "ميمويزيشن كونسيبت",
        meaning: "تقنية برمجية لتحسين الأداء عبر تخزين نتائج العمليات الحسابية المكلفة واسترجاعها فوراً عند تكرار نفس المدخلات"
      },
      description: "التخزين المؤقت (Memoization) هو نمط تحسين مشهور في علوم الحاسوب؛ عند استدعاء دالة نقية (Pure Function) بمدخلات معينة، تقوم الدالة بحساب النتيجة وتخزينها في الذاكرة (Cache). وإذا طُلب حساب النتيجة بنفس المعاملات مرة أخرى، يتم إرجاع القيمة المخزنة فوراً دون إعادة تنفيذ المنطق الحسابي المستهلك للوقت وموارد المعالج. في React، يساعدنا هذا النمط على حماية التطبيق من الحسابات الثقيلة المتكررة عند كل إعادة تصيير (Re-render).",
      analogy: "تخيل أن لديك جدول الضرب مطبوعاً على ظهر دفترك المدرسي؛ حين يسألك المعلم 'كم حاصل ضرب 17 في 23؟'، تحسبها بالورقة والقلم مرة واحدة وتكتب النتيجة بجانبك. وفي المرات القادمة، لا تعيد الضرب المطول من الصفر، بل تنظر للرقم المدون لديك فوراً وتجيب في رمشة عين!",
      whyItMatters: "تقوم مكونات React بإعادة تنفيذ كافة الأكواد والدوال الموجودة بداخلها مع كل تغيير في الـ State؛ وبدون الـ Memoization، ستتكرر معالجة آلاف السجلات أو العمليات الرياضية المعقدة في كل نقرة زر أو ضغطة مفتاح، مما يسبب بطئاً وتجمداً واضحاً في واجهة المستخدم.",
      syntax: "// المفهوم العام للـ Memoization في JavaScript:\nconst cache = new Map();\nfunction memoizedCalc(x) {\n  if (cache.has(x)) return cache.get(x);\n  const res = heavyWork(x);\n  cache.set(x, res);\n  return res;\n}",
      simpleExample: `// دالة عامة توضح فكرة التخزين المؤقت البسيط في JavaScript
function createMemoizedAdder() {
  // كائن الذاكرة المؤقتة لحفظ النتائج السابقة
  const cache = new Map();

  // إرجاع الدالة المحسنة
  return function (num: number): number {
    // التحقق من وجود النتيجة المحسوبة مسبقاً في الذاكرة
    if (cache.has(num)) {
      // طباعة توضيحية لجلب القيمة من الكاش
      console.log(\`⚡ قراءة سريعة من الكاش للرقم: \${num}\`);
      // إرجاع القيمة المخزنة مباشرة دون حساب
      return cache.get(num)!;
    }

    // محاكاة حساب ثقيل
    console.log(\`⏳ حساب مكلف ومستهلك للوقت للرقم: \${num}...\`);
    const result = num * num + 100;

    // حفظ النتيجة في الكاش للمرات القادمة
    cache.set(num, result);

    // إرجاع النتيجة المحسوبة
    return result;
  };
}

// إنشاء نسخة من الدالة
const fastSquare = createMemoizedAdder();
// الحساب الأول: يستغرق وقتاً ويسجل النتيجة
fastSquare(5); // ⏳ حساب مكلف... 125
// الحساب الثاني لنفس المدخل: استرجاع فوري من الذاكرة!
fastSquare(5); // ⚡ قراءة سريعة من الكاش... 125`,
      advancedExample: `// استيراد useState من React
import { useState } from 'react';

// دالة محاكاة لحساب الأرقام الأولية (عملية مكلفة حسابياً)
function computePrimesCount(maxLimit: number): number {
  // تسجيل بداية زمن المعالجة
  const startTime = performance.now();
  let primeCount = 0;

  // خوارزمية الفحص الحسابية
  for (let i = 2; i <= maxLimit; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primeCount++;
  }

  // حساب الزمن المستغرق
  const duration = (performance.now() - startTime).toFixed(2);
  console.log(\`⏱️ استغرق حساب الأعداد الأولية حتى \${maxLimit}: \${duration} ملي ثانية\`);

  return primeCount;
}

// مكون يوضح مشكلة عدم استخدام Memoization مع إعادة التصيير
export function PrimeNumbersViewer() {
  // حالة الحد الأقصى للأرقام
  const [limit, setLimit] = useState<number>(100000);
  // حالة العداد التفاعلي المستقل (عداد نقرات)
  const [clickCount, setClickCount] = useState<number>(0);

  // حساب غير مخزن مؤقتاً: سيعاد تنفيذه بالكامل حتى عند مجرد النقر على زر العداد!
  const totalPrimes = computePrimesCount(limit);

  // إرجاع واجهة المستخدم
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-amber-400 mb-2">تأثير إعادة التصيير بدون Memoization</h3>
      <p className="text-xs text-slate-400 mb-4">
        انقر على زر العداد؛ ستلاحظ ثقل الواجهة لأن React تعيد حساب 100 ألف رقم في كل نقرة!
      </p>

      {/* شاشة عرض النتيجة */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl mb-4 space-y-2">
        <p className="text-sm">
          <span className="text-slate-400">عدد الأعداد الأولية حتى {limit}:</span>{' '}
          <span className="font-bold text-emerald-400 text-lg">{totalPrimes}</span>
        </p>
        <p className="text-sm">
          <span className="text-slate-400">نقرات الزر العادي:</span>{' '}
          <span className="font-mono text-cyan-400 font-bold">{clickCount}</span>
        </p>
      </div>

      {/* أزرار التجربة */}
      <div className="flex gap-2">
        <button
          onClick={() => setClickCount((c) => c + 1)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-bold transition-all"
        >
          نقر العداد (+1)
        </button>
        <button
          onClick={() => setLimit(limit === 100000 ? 150000 : 100000)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-semibold"
        >
          تبديل الحد الأقصى
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح المثال أن تغيير حالة مستقلة مثل `clickCount` يطلق إعادة تصيير كاملة للمكون، مما يجبر المعالج على إعادة حساب 100 ألف رقم أولي بدون أي داعٍ، وهنا تكمن ضرورة حلول الـ Memoization لتخزين النتيجة وتجنب تجميد الواجهة.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن Memoization مجاني وبلا تكلفة",
          fix: "تذكر أن الـ Memoization يستهلك ذاكرة إضافية لمقارنة المعاملات وتخزين الكاش؛ لا تستخدمه إلا للعمليات الحسابية المكلفة فعلياً."
        },
        {
          mistake: "تطبيق التخزين المؤقت على دوال تحتوي آثاراً جانبية (Impure Functions)",
          fix: "التخزين المؤقت يعمل بنجاح فقط مع الدوال النقية التي ترجع دائماً نفس المخرجات لنفس المدخلات."
        }
      ],
      bestPractices: [
        "افهم مبدأ التخزين المؤقت كـ 'مقايضة بين الذاكرة وسرعة المعالجة' (Memory vs CPU Tradeoff).",
        "احرص على أن تكون الدوال المراد تخزين نتائجها دوالاً نقية (Pure Functions) لا تعتمد على متغيرات خارجية غير مستقرة."
      ],
      infographic: {
        title: "آلية عمل Memoization في الذاكرة",
        points: [
          "الطلب الأول: إدخال معاملات (A, B) ➔ معالجة شاقة ➔ حفظ النتيجة في الذاكرة ➔ إرجاع النتيجة.",
          "الطلبات التالية: نفس المعاملات (A, B) ➔ فحص الكاش ➔ تطابق تام ➔ إرجاع النتيجة فوراً بـ 0ms!",
          "تغير المعاملات: مدخلات جديدة (A, C) ➔ كسر الكاش ➔ إعادة الحساب وحفظ النتيجة الجديدة."
        ]
      }
    },
    {
      id: "15.1.b",
      title: "استخدام useMemo",
      englishTerm: {
        term: "Using useMemo Hook",
        pronunciation: "يوزينغ يوز ميمو هوك",
        meaning: "خطاف مدمج في React لحفظ ناتج العمليات الحسابية وقيم الكائنات والمصفوفات عبر عمليات إعادة التصيير"
      },
      description: "يقوم خطاف `useMemo` بتخزين القيمة الناتجة عن دالة حسابية بين عمليات إعادة التصيير. يستقبل الخطاف معاملين: دالة حسابية ترجع قيمة `() => computeValue()` ومصفوفة اعتماديات `[depA, depB]`. في أول تصيير، يشغل دالتك ويحفظ قيمتها. وفي عمليات التصيير اللاحقة، يقارن عناصر مصفوفة الاعتماديات بأسلوب `Object.is`؛ فإذا لم تتغير، يرجع القيمة المحفوظة فوراً، وإذا تغيرت إحداها، يعيد حساب القيمة ويحدث الكاش.",
      analogy: "يشبه الأمر طباخاً يقوم بتحضير بهارات خاصة معقدة تكفي لطهي 100 وجبة؛ لا يعيد طحن وخلط البهارات من البداية مع كل صحن يطلبه الزبون، بل يغرف ملعقة جاهزة من البرطمان المحفوظ، ولا يقوم بخلط بهارات جديدة إلا عندما يغير الوصفة الأساسية للمطعم بالكامل!",
      whyItMatters: "بالإضافة إلى حفظ الحسابات المعقدة (كالفلترة والترتيب في الجداول الضخمة)، يلعب `useMemo` دوراً حاسماً في الحفاظ على استقرار المراجع (Referential Equality) للكائنات والمصفوفات، مما يمنع انطلاق خطافات `useEffect` أو إعادة تصيير المكونات الأبناء المغلفة بـ `React.memo` دون مبرر.",
      syntax: "const memoizedValue = useMemo(() => {\n  return computeExpensiveValue(a, b);\n}, [a, b]);",
      simpleExample: `// استيراد useMemo و useState من React
import { useState, useMemo } from 'react';

// مكون بسيط لحساب مجموع مصفوفة أرقام كبيرة بكفاءة
export function SimpleMemoSum() {
  // حالة العداد العادي
  const [count, setCount] = useState<number>(0);
  // حالة حجم المصفوفة
  const [size, setSize] = useState<number>(10000);

  // استخدام useMemo لحساب مجموع أرقام المصفوفة فقط عند تغير الحجم size
  const totalSum = useMemo(() => {
    // طباعة إشعار لتأكيد وقت إعادة الحساب
    console.log("⚡ جاري حساب المجموع الكلي للمصفوفة...");
    let sum = 0;
    for (let i = 1; i <= size; i++) {
      sum += i;
    }
    return sum;
  }, [size]); // لا يعاد الحساب عند تغير count أبداً!

  // إرجاع واجهة المستخدم
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <h3 className="font-bold text-emerald-400 mb-2">استخدام useMemo لتفادي إعادة الحساب</h3>
      <p className="text-sm text-slate-300">المجموع المحسوب: <span className="font-mono font-bold text-amber-400">{totalSum}</span></p>
      <p className="text-xs text-slate-400 mb-3">العداد المنفصل: {count}</p>
      <div className="flex gap-2">
        {/* زيادة العداد دون إطلاق دالة useMemo */}
        <button onClick={() => setCount((c) => c + 1)} className="px-3 py-1.5 bg-blue-600 rounded-lg text-xs">
          زيادة العداد (بدون إعادة حساب)
        </button>
        {/* تغيير الحجم لإطلاق useMemo */}
        <button onClick={() => setSize((s) => s + 5000)} className="px-3 py-1.5 bg-emerald-600 rounded-lg text-xs">
          توسيع الحجم (+5000)
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// استيراد الأدوات المطلوبة من React
import { useState, useMemo } from 'react';

// تعريف واجهة سجل المعاملات المالية
interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: 'income' | 'expense' | 'investment';
  date: string;
}

// عينة ضخمة من المعاملات المالية
const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tx-1', description: 'راتب شهري', amount: 4500, category: 'income', date: '2026-10-01' },
  { id: 'tx-2', description: 'إيجار المكتب', amount: 1200, category: 'expense', date: '2026-10-03' },
  { id: 'tx-3', description: 'شراء أسهم تقنية', amount: 800, category: 'investment', date: '2026-10-05' },
  { id: 'tx-4', description: 'فاتورة سحابة AWS', amount: 350, category: 'expense', date: '2026-10-08' },
  { id: 'tx-5', description: 'مبيعات متجر إلكتروني', amount: 2100, category: 'income', date: '2026-10-12' },
  { id: 'tx-6', description: 'شراء شاشات عرض', amount: 600, category: 'expense', date: '2026-10-15' }
];

// مكون لوحة التحليلات المالية المتقدمة مع useMemo متعدد
export function FinancialAnalyticsDashboard() {
  // حالة تصنيف التصفية
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // حالة نص البحث
  const [searchQuery, setSearchQuery] = useState<string>('');
  // حالة مظهر الواجهة (تغييرها يسبب re-render لا ينبغي أن يعيد تصفية السجلات)
  const [isCompactView, setIsCompactView] = useState<boolean>(false);

  // 1. استخدام useMemo لتصفية وبحث المعاملات فقط عند تغير شروط البحث والتصنيف
  const filteredTransactions = useMemo(() => {
    console.log("📊 تصفية المعاملات تجري الآن...");
    return MOCK_TRANSACTIONS.filter((tx) => {
      const matchesCategory = selectedCategory === 'all' || tx.category === selectedCategory;
      const matchesSearch = tx.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // 2. استخدام useMemo لحساب الإحصائيات التراكمية بناء على المصفوفة المصفاة
  const analyticsSummary = useMemo(() => {
    console.log("💰 إعادة حساب ملخص الإحصائيات المالية...");
    let totalIncome = 0;
    let totalExpense = 0;
    let totalInvestment = 0;

    for (const tx of filteredTransactions) {
      if (tx.category === 'income') totalIncome += tx.amount;
      if (tx.category === 'expense') totalExpense += tx.amount;
      if (tx.category === 'investment') totalInvestment += tx.amount;
    }

    const netProfit = totalIncome - totalExpense;

    return {
      totalIncome,
      totalExpense,
      totalInvestment,
      netProfit
    };
  }, [filteredTransactions]);

  // إرجاع واجهة المستخدم
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      {/* رأس الصفحة وأدوات التحكم */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
        <div>
          <h3 className="text-xl font-bold text-cyan-400">لوحة التحليلات المالية الذكية</h3>
          <p className="text-xs text-slate-400">معالجة الحسابات المعقدة عبر useMemo بكفاءة متناهية</p>
        </div>
        {/* زر تبديل العرض الذي لا يؤثر على حسابات الـ useMemo */}
        <button
          onClick={() => setIsCompactView((v) => !v)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl border border-slate-700"
        >
          {isCompactView ? 'عرض مفصل' : 'عرض مضغوط'}
        </button>
      </div>

      {/* حقول التصفية والبحث */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="ابحث في وصف المعاملة..."
          className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:border-cyan-500 focus:outline-none"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:border-cyan-500 focus:outline-none"
        >
          <option value="all">كافة التصنيفات</option>
          <option value="income">إيرادات (Income)</option>
          <option value="expense">مصروفات (Expense)</option>
          <option value="investment">استثمار (Investment)</option>
        </select>
      </div>

      {/* بطاقات الملخص المحسوبة بـ useMemo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          <span className="text-xs text-slate-400 block">إجمالي الدخل</span>
          <span className="text-lg font-bold text-emerald-400">+{analyticsSummary.totalIncome} $</span>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          <span className="text-xs text-slate-400 block">إجمالي المصروفات</span>
          <span className="text-lg font-bold text-rose-400">-{analyticsSummary.totalExpense} $</span>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          <span className="text-xs text-slate-400 block">الاستثمارات</span>
          <span className="text-lg font-bold text-purple-400">{analyticsSummary.totalInvestment} $</span>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          <span className="text-xs text-slate-400 block">صافي الربح</span>
          <span className={\`text-lg font-bold \${analyticsSummary.netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}\`}>
            {analyticsSummary.netProfit} $
          </span>
        </div>
      </div>

      {/* جدول أو قائمة المعاملات */}
      <div className="space-y-2">
        {filteredTransactions.map((tx) => (
          <div
            key={tx.id}
            className={\`bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center \${isCompactView ? 'p-2 text-xs' : 'p-3.5 text-sm'}\`}
          >
            <div>
              <p className="font-semibold text-slate-200">{tx.description}</p>
              <span className="text-[10px] text-slate-500">{tx.date} | {tx.category}</span>
            </div>
            <span className={\`font-mono font-bold \${tx.category === 'income' ? 'text-emerald-400' : 'text-slate-300'}\`}>
              {tx.category === 'income' ? '+' : '-'}{tx.amount} $
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال استخدام `useMemo`، يتم عزل عمليات التصفية وحسابات الإحصائيات تماماً عن تغييرات الواجهة السطحية (مثل تبديل `isCompactView`)، ولا يتم استهلاك دورات المعالج إلا إذا كتب المستخدم نص بحث جديد أو اختار تصنيفاً مختلفاً.",
      commonMistakes: [
        {
          mistake: "تغليف كل عملية جمع أو تنسيق نص بسيط بـ useMemo مثل `useMemo(() => a + b, [a, b])`",
          fix: "تجنب تغليف العمليات البسيطة؛ فتكلفة مقارنة مصفوفة الاعتماديات ودوال الـ Hooks تفوق تكلفة عملية الجمع البسيطة."
        },
        {
          mistake: "نسيان تضمين متغير مستخدم داخل الدالة الحسابية في مصفوفة الاعتماديات",
          fix: "ضع كافة المتغيرات الخارجية المستخدمة داخل مصفوفة الاعتماديات لضمان عدم قراءة قيم قديمة منتهية الصلاحية (Stale Values)."
        }
      ],
      bestPractices: [
        "استخدم `useMemo` للعمليات التي تأخذ أكثر من 1 ميلي ثانية أو عند إنشاء كائنات تُمرر كـ Props لمكونات مغلفة بـ `React.memo`.",
        "قسّم الحسابات المتسلسلة إلى طبقات useMemo مترابطة لتوفير أقصى قدر من إعادة الاستخدام الذكي."
      ],
      infographic: {
        title: "دورة حياة الحسابات مع useMemo",
        points: [
          "التصيير الأولي (Initial Mount): تشغيل الدالة الحسابية ➔ حفظ النتيجة والكائن في الذاكرة.",
          "تصيير بدون تغير الاعتماديات: تخطي الدالة تماماً ➔ إرجاع المرجع المحفوظ فوراً من الكاش.",
          "تغير أحد عناصر الاعتماديات: اكتشاف التغير بـ Object.is ➔ إعادة تشغيل الدالة وتحديث الكاش."
        ]
      }
    },
    {
      id: "15.1.c",
      title: "استخدام useCallback",
      englishTerm: {
        term: "Using useCallback Hook",
        pronunciation: "يوزينغ يوز كول باك هوك",
        meaning: "خطاف لتثبيت المرجع التذكيري للدوال ومنع إعادة إنشائها عبر عمليات التصيير لدعم المكونات المحسنة"
      },
      description: "في JavaScript، كل دالة تُعرّف داخل المكون هي كائن جديد تماماً في الذاكرة مع كل عملية تصيير: `() => {} !== () => {}`. هذا الاختلاف المرجعي لا يؤثر على الدوال البسيطة، لكنه يتسبب في مشكلة كبرى عندما نمرر هذه الدالة كـ Prop لمكون ابن مغلف بـ `React.memo`، حيث يرى المكون الابن أن الدالة قد تغيرت ويعيد تصيير نفسه بلا داعٍ! يقوم خطاف `useCallback` بتثبيت مرجع الدالة ذاته طالما لم تتغير مصفوفة الاعتماديات.",
      analogy: "يشبه الأمر بطاقة بصمة موحدة للموظف للدخول إلى البوابة الآلية؛ ما دام الموظف هو نفسه لم تتغير رتبته ولا اسمه، يمرر نفس بطاقته القديمة وتفتح البوابة بلمح البصر دون سؤاله. بينما بدون useCallback، يصدر الموظف كل صباح بطاقة بلاستيكية جديدة بنفس بياناته، مما يضطر رجل الأمن لفحصه وإدخال بياناته من الصفر كل يوم!",
      whyItMatters: "يعتبر `useCallback` الشريك الإلزامي لـ `React.memo`. بدون `useCallback`، تصبح حماية `React.memo` في المكونات الفرعية عديمة الجدوى تماماً بمجرد تمرير أي معالج أحداث مثل `onDelete` أو `onSelect`.",
      syntax: "const memoizedCallback = useCallback((param) => {\n  doSomething(param, a, b);\n}, [a, b]);",
      simpleExample: `// استيراد React الأدوات الأساسية
import React, { useState, useCallback } from 'react';

// مكون ابن بسيط مغلف بـ React.memo لمنع إعادة تصييره إلا إذا تغيرت خصائصه
const FastButton = React.memo(({ onClick, label }: { onClick: () => void; label: string }) => {
  // طباعة تأكيدية في الكونسول لتتبع عدد مرات تصيير الزر
  console.log(\`🔘 إعادة تصيير الزر الابن: \${label}\`);
  return (
    <button onClick={onClick} className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-semibold text-white">
      {label}
    </button>
  );
});

// المكون الأب
export function SimpleCallbackDemo() {
  // حالة العداد الأول
  const [count, setCount] = useState<number>(0);
  // حالة نصية منفصلة
  const [text, setText] = useState<string>('');

  // تثبيت مرجع دالة النقر باستخدام useCallback
  const handleButtonClick = useCallback(() => {
    // زيادة العداد بالاعتماد على الدالة السابقة لمنع تضمين count في الاعتماديات
    setCount((prev) => prev + 1);
  }, []); // مصفوفة فارغة: الدالة تحتفظ بنفس المرجع دائماً للأبد!

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <h3 className="font-bold text-amber-400 mb-2">useCallback مع React.memo</h3>
      <p className="text-xs text-slate-400 mb-3">العداد الحالي: {count}</p>
      {/* حقل نصي يسبب إعادة تصيير للمكون الأب عند الكتابة */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب هنا، ولن يعاد تصيير الزر..."
        className="w-full px-3 py-1.5 bg-slate-800 rounded-lg text-xs border border-slate-700 mb-3"
      />
      {/* تمرير الدالة المثبتة للمكون الابن المحسن */}
      <FastButton onClick={handleButtonClick} label="انقر لزيادة العداد بأمان" />
    </div>
  );
}`,
      advancedExample: `// استيراد الأدوات المتقدمة من React
import React, { useState, useCallback, useMemo } from 'react';

// تعريف واجهة بيانات العنصر
interface UserItem {
  id: string;
  name: string;
  role: string;
  isActive: boolean;
}

// مكون صف المستخدم الفرعي المغلف بـ React.memo لتحقيق أقصى درجات الأداء
interface UserRowProps {
  user: UserItem;
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

const UserRow = React.memo(({ user, onToggleStatus, onDelete }: UserRowProps) => {
  // طباعة في الكونسول لمراقبة تصيير العناصر الفردية فقط
  console.log(\`👤 تصيير صف المستخدم: \${user.name}\`);

  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
      <div>
        <p className="font-semibold text-slate-200 text-sm">{user.name}</p>
        <span className="text-[11px] text-slate-400">{user.role}</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggleStatus(user.id)}
          className={\`px-2.5 py-1 text-xs rounded-lg font-bold transition-all \${user.isActive ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-800 text-slate-500'}\`}
        >
          {user.isActive ? 'نشط ✅' : 'معطل ⏸️'}
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-2.5 py-1 bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 rounded-lg text-xs font-semibold"
        >
          حذف
        </button>
      </div>
    </div>
  );
});

// المكون الأب لإدارة فريق العمل
export function TeamManagementList() {
  // قائمة أعضاء الفريق
  const [users, setUsers] = useState<UserItem[]>([
    { id: 'u1', name: 'طارق عبد الله', role: 'Frontend Engineer', isActive: true },
    { id: 'u2', name: 'منى السعيد', role: 'UI/UX Designer', isActive: true },
    { id: 'u3', name: 'أحمد نبيل', role: 'DevOps Lead', isActive: false }
  ]);

  // حالة عداد مهام المشرف (تحديثها يسبب تصيير للأب، ولكن لا يجب أن يعيد تصيير أي UserRow!)
  const [supervisorTicks, setSupervisorTicks] = useState<number>(0);

  // 1. تثبيت دالة تبديل الحالة باستخدام useCallback وتحديث الـ State الوظيفي
  const handleToggleStatus = useCallback((id: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u))
    );
  }, []); // مرجع ثابت لا يتغير نهائياً

  // 2. تثبيت دالة الحذف باستخدام useCallback
  const handleDeleteUser = useCallback((id: string) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
  }, []); // مرجع ثابت لا يتغير نهائياً

  // إرجاع واجهة المستخدم
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      {/* شريط الإحصائيات المنفصل */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-emerald-400">إدارة الفريق (useCallback + React.memo)</h3>
          <p className="text-xs text-slate-400">تحديث العداد لا يعيد تصيير أي عنصر من صفوف المستخدمين</p>
        </div>
        <button
          onClick={() => setSupervisorTicks((t) => t + 1)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl border border-slate-700"
        >
          نبضات المشرف: {supervisorTicks} ⏱️
        </button>
      </div>

      {/* قائمة المستخدمين */}
      <div className="space-y-2">
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDeleteUser}
          />
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "من خلال دمج `useCallback` في المكون الأب مع `React.memo` في المكون الابن `UserRow`، يحتفظ كل صف بمرجع ثابت للدوال `onToggleStatus` و `onDelete`، مما يمنع إعادة تصيير كافة عناصر القائمة عند تغيير أي حالة عليا في المكون الأب.",
      commonMistakes: [
        {
          mistake: "استخدام `useCallback` بدون تغليف المكون الابن بـ `React.memo`",
          fix: "تذكر أن المكون الابن سيعاد تصييره تلقائياً إذا أعيد تصيير الأب ما لم يكن مغلفاً بـ `React.memo`، مما يجعل useCallback بلا فائدة بمفرده."
        },
        {
          mistake: "تضمين متغيرات الحالة داخل مصفوفة الاعتماديات بدون داعٍ عند تحديث State",
          fix: "استخدم التحديث المعتمد على القيمة السابقة `setState(prev => ...)` لتفريغ مصفوفة الاعتماديات وتثبيت المرجع للأبد."
        }
      ],
      bestPractices: [
        "استخدم `useCallback` دوماً عند تمرير دوال لمكونات أبناء محسنة بـ `React.memo` أو داخل مصفوفة اعتماديات لـ `useEffect` آخر.",
        "استعن بالصيغة الوظيفية `setState((prev) => ...)` داخل الدالة لتقليل عناصر مصفوفة الاعتماديات."
      ],
      infographic: {
        title: "التحالف الثلاثي: useCallback و React.memo و Props",
        points: [
          "المشكلة: الدوال الجديدة تنشئ مراجع ذاكرة مختلفة ➔ كسر مقارنة Props السطحية في المكون الابن.",
          "الحل: `useCallback` يحتفظ بنفس مرجع الدالة ➔ مقارنة Props تنجح ➔ المكون الابن يتخطى التصيير تماماً!",
          "القاعدة: استخدم `useCallback` متى ما كان المستهلك يعتمد على ثبات المرجع (React.memo أو useEffect deps)."
        ]
      }
    },
    {
      id: "15.1.d",
      title: "فهم Dependency Arrays",
      englishTerm: {
        term: "Understanding Dependency Arrays",
        pronunciation: "أندرستاندينغ ديبندنسي أرايز",
        meaning: "مصفوفة الاعتماديات التي تحدد متى يتم تجديد الكاش أو تشغيل التأثيرات الجانبية وقواعد التدقيق الصارم"
      },
      description: "تعتمد خطافات `useMemo` و `useCallback` و `useEffect` على مصفوفة الاعتماديات (Dependency Array) لمعرفة متى يجب إبطال الكاش وإعادة تشغيل المنطق. يقارن React كل عنصر في المصفوفة بقيمته في التصيير السابق باستخدام خوارزمية المساواة الصارمة `Object.is`. إن إهمال أي متغير مستخدم داخل الدالة يؤدي إلى ظاهرة الإغلاق المتعفن (Stale Closures)، حيث يقرأ الكود قيماً قديمة ومخزنة من الذاكرة بدلاً من أحدث الحالات.",
      analogy: "تشبه مصفوفة الاعتماديات قائمة المكونات المكتوبة على تذكرة الطبخ الآلي؛ إذا نسيت كتابة 'الملح' في القائمة، فسيستمر الروبوت في استخدام قياس الملح القديم حتى لو قمت بتغيير نوع الطعام، وتكون النتيجة وجبة مالحة وفاسدة لا تطابق طلب الزبون!",
      whyItMatters: "تفرض قاعدة ESLint الرسمية `react-hooks/exhaustive-deps` تضمين كل متغير أو دالة أو خاصية مستخدمة داخل الخطاف في مصفوفة الاعتماديات؛ مخالفتها تعد المصدر الأول للأخطاء الخفية (Bugs) وسلوكيات التطبيق غير المتوقعة في بيئات الإنتاج.",
      syntax: "// مصفوفة اعتماديات شاملة وصحيحة:\nuseMemo(() => fn(a, b), [a, b]);\n\n// مصفوفة فارغة تعني تثبيت النتيجة للأبد:\nuseCallback(() => fn(), []);",
      simpleExample: `// مثال يوضح خطأ الاستبعاد والحل الصحيح
import { useState, useCallback } from 'react';

export function StaleClosureDemo() {
  const [step, setStep] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  // ❌ خطأ شائع: نسيان وضع step في مصفوفة الاعتماديات!
  // ستحتفظ الدالة بقيمة step الأولى (1) للأبد ولن ترى التعديلات الجديدة!
  const badIncrement = useCallback(() => {
    setCount((c) => c + step);
  }, []); // خطأ: مصفوفة فارغة رغم استخدام step!

  // ✅ الأسلوب السليم المعتمد على مصفوفة الاعتماديات الصارمة:
  const safeIncrement = useCallback(() => {
    setCount((c) => c + step);
  }, [step]); // يتم تجديد الدالة فور تغير step لتقرأ القيمة الحديثة

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <h3 className="font-bold text-rose-400 mb-2">تأثير Stale Closures والاعتماديات</h3>
      <p className="text-sm">الخطوة الحالية (step): <span className="font-bold text-amber-400">{step}</span></p>
      <p className="text-sm mb-3">العداد: <span className="font-bold text-emerald-400">{count}</span></p>
      <div className="flex gap-2">
        <button onClick={() => setStep((s) => s + 1)} className="px-3 py-1 bg-slate-800 rounded text-xs">
          زيادة قيمة Step
        </button>
        <button onClick={safeIncrement} className="px-3 py-1 bg-emerald-600 rounded text-xs font-bold">
          زيادة آمنة بالاعتمادية
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// استيراد الأدوات من React
import { useState, useMemo, useEffect } from 'react';

// واجهة تكوين التصفية
interface FilterConfig {
  minPrice: number;
  maxPrice: number;
  inStockOnly: boolean;
}

// مكون متقدم يوضح إدارة الاعتماديات الكائنية والدوال
export function DependencyArrayMastery() {
  // حالات فرعية مستقلة
  const [minPrice, setMinPrice] = useState<number>(50);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [inStockOnly, setInStockOnly] = useState<boolean>(true);
  const [triggerRender, setTriggerRender] = useState<number>(0);

  // 1. بناء كائن الإعدادات وتثبيته بـ useMemo لمنع كسر المساواة المرجعية
  const filterConfig: FilterConfig = useMemo(() => {
    console.log("⚙️ إعادة توليد كائن الإعدادات FilterConfig...");
    return {
      minPrice,
      maxPrice,
      inStockOnly
    };
  }, [minPrice, maxPrice, inStockOnly]);

  // 2. استخدام useMemo آخر يعتمد على كائن الإعدادات المثبت
  const querySummary = useMemo(() => {
    console.log("🔍 تشغيل الاستعلام استناداً إلى كائن الإعدادات...");
    return \`نطاق الأسعار: من \${filterConfig.minPrice}$ إلى \${filterConfig.maxPrice}$ | في المخزن: \${filterConfig.inStockOnly ? 'نعم' : 'لا'}\`;
  }, [filterConfig]); // اعتماد سليم ومستقر بفضل useMemo الأول

  // إرجاع واجهة المستخدم
  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">إتقان مصفوفات الاعتماديات وتفادي كسر المراجع</h3>
      <p className="text-xs text-slate-400 mb-4">
        تغيير حالة المكون الأب لا يكسر اعتمادية كائن الإعدادات بفضل التثبيت المرجعي الدقيق.
      </p>

      {/* شاشة الملخص */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl mb-4 text-xs font-mono text-emerald-300">
        {querySummary}
      </div>

      {/* عناصر التحكم في المتغيرات */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3">
          <label className="text-xs text-slate-400 w-24">الحد الأدنى:</label>
          <input
            type="range"
            min="0"
            max="200"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-xs font-bold text-amber-400">{minPrice} $</span>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-xs text-slate-400 w-24">الحد الأقصى:</label>
          <input
            type="range"
            min="200"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-xs font-bold text-amber-400">{maxPrice} $</span>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="stockCheck"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="stockCheck" className="text-xs text-slate-300">المتوفر في المخزن فقط</label>
        </div>
      </div>

      {/* زر إطلاق إعادة تصيير خارجي للتأكد من ثبات الكاش */}
      <button
        onClick={() => setTriggerRender((n) => n + 1)}
        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl border border-slate-700"
      >
        إعادة تصيير الأب (مرات النقر: {triggerRender})
      </button>
    </div>
  );
}`,
      outputExplanation: "الكود يوضح كيف يؤدي تثبيت كائن `filterConfig` بواسطة `useMemo` إلى منع تشغيل الخطاف التابع `querySummary` عند إعادة تصيير الأب العادية، مع ضمان تحديثه فوراً ودون أخطاء بمجرد تعديل أشرطة الأسعار.",
      commonMistakes: [
        {
          mistake: "تعطيل تحذير ESLint `// eslint-disable-next-line react-hooks/exhaustive-deps` للهروب من المشاكل",
          fix: "لا تعطل القاعدة أبداً؛ بل قم بإعادة هيكلة الكود أو نقل المتغيرات أو استخدام الدوال المحدثة الآمنة."
        },
        {
          mistake: "وضع كائن جديد كاعتمادية مباشرة مثل `[ { id, name } ]` مما يكسر الكاش في كل تصيير",
          fix: "مرر القيم البدائية مباشرة `[id, name]` أو ثبّت الكائن مسبقاً عبر `useMemo`."
        }
      ],
      bestPractices: [
        "احرص على تمرير القيم البدائية (string, number, boolean) في مصفوفة الاعتماديات كلما أمكن ذلك.",
        "اتبع توجيهات linter الرسمية ولا تتجاهل تحذيرات الاعتماديات الناقصة إطلاقاً."
      ],
      infographic: {
        title: "قواعد مصفوفة الاعتماديات الصارمة",
        points: [
          "تضمين كافة المتغيرات: كل قيمة من الـ State أو Props تُستخدم بالداخل يجب تسجيلها في المصفوفة.",
          "مقارنة Object.is: القيم البدائية تقارن بالقيمة، بينما الكائنات والدوال تقارن بالموقع في الذاكرة (المراجع).",
          "ممنوع الكتمان: إخفاء الاعتماديات يؤدي مباشرة إلى Stale Closures وسلوكيات كارثية غير قابلة للتتبع."
        ]
      }
    },
    {
      id: "15.1.e",
      title: "متى يكون Memoization مفيداً",
      englishTerm: {
        term: "When Memoization is Truly Useful",
        pronunciation: "وين ميمويزيشن إز ترولي يوزفل",
        meaning: "الحالات الحقيقية والمثبتة التي تحقق فيها تقنيات useMemo و useCallback مكاسب أداء حقيقية للمشروع"
      },
      description: "ليست كل دالة أو كائن بحاجة إلى تخزين مؤقت. يكون التخزين المؤقت عبر `useMemo` و `useCallback` مجدياً ومطلوباً في ثلاث حالات رئيسية فقط:\n1. العمليات الحسابية الثقيلة بصرياً وحسابياً (Heavy Computations) والتي تستغرق عادة أكثر من 1 إلى 2 ملي ثانية.\n2. الحفاظ على المراجع الممرة كـ Props إلى مكونات أبناء مغلفة بحارس `React.memo` لتفادي إعادة تصيير شجرة المكونات المعقدة.\n3. الحفاظ على استقرار كائن أو دالة تُستخدم كاعتمادية في خطافات أخرى مثل `useEffect` لمنع الحلقات اللانهائية (Infinite Loops).",
      analogy: "يشبه الأمر ارتداء خوذة حماية وسترة مضادة للرصاص؛ ارتدائها أثناء قيادة دراجة نارية على طريق سريع أو في مهمة أمنية خطيرة هو قرار حكيم ينقذ حياتك. ولكن ارتدائها أثناء الجلوس على الأريكة لمشاهدة التلفاز هو عبء مضحك يثقل جسدك بلا أدنى فائدة!",
      whyItMatters: "معرفة متى تستخدم هذه الخطافات يحميك من إضاعة ساعات العمل في تحسينات وهمية لا تقدم أي فارق، ويوجه تركيزك الهندسي نحو تحسين عنق الزجاجة الحقيقي (Performance Bottlenecks) في تطبيقك.",
      syntax: "// الحالة 1: حساب ثقيل على مصفوفة ضخمة\nconst sorted = useMemo(() => bigList.sort(compare), [bigList]);\n\n// الحالة 2: دالة تمرر لمكون مغلف بـ React.memo\nconst handleClick = useCallback(() => ..., []);\n<MemoizedList onItemClick={handleClick} />",
      simpleExample: `// مثال يوضح الحالات المناسبة وغير المناسبة لـ useMemo

// ❌ حالة غير مفيدة (إهدار للموارد وتعقيد للكود):
function BadUsage({ firstName, lastName }: { firstName: string; lastName: string }) {
  // عملية دمج نصوص بسيطة تستغرق أجزاء من النانو ثانية! useMemo يضيف تكلفة بدون عائد
  const fullName = useMemo(() => \`\${firstName} \${lastName}\`, [firstName, lastName]);
  return <div>{fullName}</div>;
}

// ✅ حالة مفيدة جداً ومثالية:
function GoodUsage({ items }: { items: number[] }) {
  // فلترة وترتيب وتجميع آلاف العناصر في عملية إحصائية معقدة
  const stats = useMemo(() => {
    const sorted = [...items].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)] || 0;
    const sum = sorted.reduce((acc, n) => acc + n, 0);
    return { median, sum, count: sorted.length };
  }, [items]); // تحسب فقط عند تغير عناصر القائمة

  return <div>الوسيط: {stats.median} | المجموع: {stats.sum}</div>;
}`,
      advancedExample: `// استيراد الأدوات من React
import React, { useState, useMemo, useCallback } from 'react';

// مكون ابن معقد يحتوي على قائمة عناصر ضخمة ومغلف بـ React.memo
interface HeavyGridProps {
  data: number[];
  onAction: (val: number) => void;
}

const ExpensiveDataGrid = React.memo(({ data, onAction }: HeavyGridProps) => {
  console.log("🎨 إعادة تصيير شبكة البيانات المعقدة ExpensiveDataGrid!");
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
      <p className="text-xs text-slate-400 mb-2">عرض {data.length} عنصر بياني:</p>
      <div className="grid grid-cols-4 gap-2">
        {data.slice(0, 8).map((num, i) => (
          <button
            key={i}
            onClick={() => onAction(num)}
            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-mono text-cyan-300"
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
});

// المكون الحقيقي الذي يستفيد من كلا الخطافين بشكل مثالي
export function OptimizedAppWorkspace() {
  const [dataSize, setDataSize] = useState<number>(500);
  const [themeMode, setThemeMode] = useState<'dark' | 'dim'>('dark');

  // 1. استخدام useMemo مبرر لتوليد ومعالجة مصفوفة ضخمة
  const generatedDataset = useMemo(() => {
    console.log("⚡ توليد ومعالجة المصفوفة الضخمة...");
    return Array.from({ length: dataSize }, (_, i) => Math.floor(Math.sin(i) * 1000));
  }, [dataSize]);

  // 2. استخدام useCallback مبرر لأنه يمرر لمكون مغلف بـ React.memo
  const handleItemSelect = useCallback((val: number) => {
    alert(\`تم اختيار العنصر ذو القيمة: \${val}\`);
  }, []);

  return (
    <div className={\`p-6 rounded-2xl border transition-colors \${themeMode === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-900 border-slate-700 text-slate-100'}\`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-emerald-400">بيئة الاستخدام المثمر لـ Memoization</h3>
        {/* تبديل السمة لا يعيد تصيير ExpensiveDataGrid إطلاقاً! */}
        <button
          onClick={() => setThemeMode((m) => (m === 'dark' ? 'dim' : 'dark'))}
          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-semibold"
        >
          تبديل المظهر ({themeMode})
        </button>
      </div>

      <div className="mb-4">
        <button
          onClick={() => setDataSize((s) => s + 200)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold border border-slate-700"
        >
          توسيع حجم البيانات (+200 عنصر)
        </button>
      </div>

      {/* المكون الابن المحمي بـ useMemo و useCallback معاً */}
      <ExpensiveDataGrid data={generatedDataset} onAction={handleItemSelect} />
    </div>
  );
}`,
      outputExplanation: "يوضح الكود المثال النموذجي للجدوى؛ فعند النقر على 'تبديل المظهر'، يتغير لون المكون الأب، لكن المكون الابن `ExpensiveDataGrid` لا يعيد تصيير نفسه إطلاقاً لأن مصفوفة `generatedDataset` ودالة `handleItemSelect` حافظتا على نفس المرجع بدقة متناهية.",
      commonMistakes: [
        {
          mistake: "استخدام useMemo في كل مكان بحجة 'زيادة السرعة مسبقاً'",
          fix: "طبق مبدأ القياس أولاً؛ إذا كانت الواجهة سريعة ولا توجد شكوى أو بطء ملحوظ، فالكود البسيط هو الأفضل دائماً."
        },
        {
          mistake: "استخدام useCallback لدالة تُمرر إلى عنصر HTML عادي مثل `<button onClick={cb}>`",
          fix: "عناصر الـ HTML الأصلية لا تستفيد من ثبات المرجع؛ useCallback مفيد فقط مع المكونات الفرعية المغلفة بـ React.memo."
        }
      ],
      bestPractices: [
        "ضع useMemo عندما تلاحظ بطئاً أو عند تصفية مصفوفات تتجاوز مئات العناصر.",
        "استخدم useCallback كزوج مكمل لـ React.memo حصراً، أو عندما تكون الدالة في مصفوفة اعتماديات لـ useEffect."
      ],
      infographic: {
        title: "متى تستخدم التخزين المؤقت؟",
        points: [
          "نعم: عمليات رياضية ثقيلة (فرز، فلترة ضخمة) تستغرق وقتاً ملحوظاً في المعالج.",
          "نعم: تثبيت مراجع تمرر لمكونات فرعية بطيئة مغلفة بـ `React.memo`.",
          "لا: دمج نصوص، عمليات حسابية تافهة (جمع وطرح)، أو تمرير دوال لعناصر HTML عادية."
        ]
      }
    },
    {
      id: "15.1.f",
      title: "تجنب التحسين المبكر",
      englishTerm: {
        term: "Avoiding Premature Optimization",
        pronunciation: "أفويدينغ بريماتشور أوبتيميزيشن",
        meaning: "القاعدة الذهبية لتفادي إضافة التعقيدات البرمجية وحيل الذاكرة قبل إثبات وجود مشكلة أداء حقيقية"
      },
      description: "يقول العالم الشهير دونالد كنوث: 'التحسين المبكر هو أصل كل الشرور في البرمجة' (Premature optimization is the root of all evil). في React، الإفراط في استخدام `useMemo` و `useCallback` دون حاجة حقيقية يضر المشروع أكثر مما ينفعه؛ فهو يستهلك ذاكرة إضافية لحفظ الكاش ومصفوفات الاعتماديات، ويبطئ سرعة التصيير الأولي، ويزيد من تعقيد الكود وصعوبة قراءته وصيانته، بالإضافة لخطر التسبب في أخطاء Stale Closures.",
      analogy: "يشبه الأمر بناء مدرج طائرات نفاثة داخل حديقة منزلك الخلفية فقط لأنك قد تشتري طائرة بعد 10 سنوات؛ لقد أتلفت حديقتك الجميلة وأنفقت كل مدخراتك وعقدت حياتك اليومية من أجل سيناريو لم يحدث ولن يحدث!",
      whyItMatters: "تحديثات متصفحات الويب وأجهزة الحواسيب الحديثة تجعل تنفيذ مئات العمليات البرمجية البسيطة يستغرق أقل من 0.01 ملي ثانية؛ وكتابة كود نظيف وبسيط وقابل للصيانة يجب أن تكون أولويتك دائماً قبل الشروع في أي محاولات تحسين.",
      syntax: "// القاعدة:\n// 1. اكتب كوداً نظيفاً وبسيطاً أولاً.\n// 2. قس الأداء عند الشعور بالبطء.\n// 3. أضف useMemo / useCallback في المكان الذي أثبت القياس أنه عنق زجاجة.",
      simpleExample: `// مثال يوضح الفرق بين الكود النظيف البسيط والكود المعقد بلا مبرر

// ❌ كود معقد ومثقل بالتحسين المبكر غير المبرر:
function OverEngineeredGreeter({ name }: { name: string }) {
  // إهدار للذاكرة وإرهاق للمحرر والمطور
  const formattedName = useMemo(() => name.trim().toUpperCase(), [name]);
  const handleAlert = useCallback(() => {
    alert(formattedName);
  }, [formattedName]);

  return <button onClick={handleAlert}>مرحباً {formattedName}</button>;
}

// ✅ كود نظيف وبسيط وسريع للغاية:
export function CleanGreeter({ name }: { name: string }) {
  // عمليات فورية تأخذ أجزاء من المايكروثانية وتجعل الكود مقروءاً بنسبة 100%
  const formattedName = name.trim().toUpperCase();
  const handleAlert = () => alert(formattedName);

  return (
    <button onClick={handleAlert} className="px-3 py-1.5 bg-blue-600 rounded-lg text-white text-xs">
      مرحباً {formattedName}
    </button>
  );
}`,
      advancedExample: `// مقارنة واقعية لتكلفة الذاكرة والتعقيد
import { useState } from 'react';

// مكون يعرض قائمة بطاقات بسيطة
export function SimplicityVsOverOptimization() {
  const [activeTab, setActiveTab] = useState<'simple' | 'overkill'>('simple');
  const [filterText, setFilterText] = useState<string>('');

  const items = ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query'];

  // في السيناريو العادي البسيط: فلترة 5 عناصر تأخذ 0.0001 ملي ثانية!
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-rose-400 mb-2">مبدأ تفادي التحسين المبكر</h3>
      <p className="text-xs text-slate-400 mb-4">
        قارن بين بساطة الكود المباشر وتعقيد التحسينات الوهمية على القوائم الصغيرة.
      </p>

      {/* أزرار التبديل */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('simple')}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${activeTab === 'simple' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          الكود البسيط الطبيعي ✅
        </button>
        <button
          onClick={() => setActiveTab('overkill')}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${activeTab === 'overkill' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          التحسين الزائد (Overkill) ❌
        </button>
      </div>

      {/* حقل البحث */}
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="فلترة التقنيات..."
        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs mb-4 focus:outline-none focus:border-cyan-500"
      />

      {/* نتائج العرض */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
        <span className="text-xs text-slate-400 block mb-2">
          {activeTab === 'simple'
            ? 'الكود مباشر: فلترة فورية بدون أي Hooks إضافية.'
            : 'الكود معقد: استخدام useMemo و useCallback لـ 5 عناصر فقط! تكلفة مصفوفات الاعتماديات تفوق تكلفة الفلترة.'}
        </span>
        <ul className="space-y-1">
          {filtered.map((item, idx) => (
            <li key={idx} className="text-xs font-mono text-cyan-300">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح المثال أن فلترة بضعة عناصر نصية لا تحتاج نهائياً إلى `useMemo`؛ فمحرك V8 في المتصفح ينفذ هذه العملية في أجزاء من المايكروثانية، وإضافة الـ Hooks تزيد من حجم الكود وتكلفة إدارة الذاكرة بدون أي مكسب حقيقي.",
      commonMistakes: [
        {
          mistake: "كتابة useMemo تلقائياً على كل مصفوفة أو كائن في المشروع كعادة روتينية",
          fix: "اجعل الكود الافتراضي بسيطاً ومباشراً؛ ولا تضف التخزين المؤقت إلا بعد ملاحظة بطء أو إجراء قياس أداء."
        },
        {
          mistake: "الاعتقاد بأن كثرة الـ Hooks تعني أن الكود مكتوب باحترافية أعلى",
          fix: "البساطة وقابلية القراءة والصيانة هي المعيار الحقيقي لجودة الشفرة البرمجية."
        }
      ],
      bestPractices: [
        "ابدأ دائماً بالكود الأبسط والأكثر وضوحاً.",
        "تذكر: تكلفة التخزين المؤقت = استهلاك ذاكرة + مقارنة دورية للمصفوفات + تعقيد ذهني للمطور."
      ],
      infographic: {
        title: "مخاطر التحسين المبكر في React",
        points: [
          "تضخم الشفرة: تكرار مصفوفات الاعتماديات وتغليف الدوال يضاعف أسطر الملفات بلا فائدة.",
          "استهلاك الذاكرة: حجز مساحات في الذاكرة لحفظ قيم تافهة لا يتطلب حسابها أي جهد.",
          "قاعدة المهندس المحترف: 'Make it work, make it right, make it fast' (بالترتيب فقط!)."
        ]
      }
    },
    {
      id: "15.1.g",
      title: "قياس الأداء قبل التحسين",
      englishTerm: {
        term: "Benchmarking & Profiling Performance",
        pronunciation: "بنشماركينغ آند بروفايلينغ بيرفورمانس",
        meaning: "استخدام أدوات الفحص مثل React Profiler و Performance API لتحديد أسباب البطء بالأدلة الرقمية"
      },
      description: "التحسين الحقيقي لا يبنى على التخمين، بل على الأدلة الرقمية والقياس الدقيق (Data-Driven Optimization). توفر React أداة `React DevTools Profiler` الرائعة لتسجيل عمليات التصيير، ومعرفة زمن تنفيذ كل مكون بالميلي ثانية، وتحديد السبب الدقيق لإعادة تصييره (Why did this render?). كما يمكننا استخدام واجهة `performance.now()` في JavaScript لحساب زمن الدوال الحسابية بدقة متناهية والتأكد مما إذا كانت تستحق `useMemo` فعلاً.",
      analogy: "يشبه الأمر فحص السيارة بجهاز الكمبيوتر التشخيصي (OBD-II Scanner) قبل تغيير أي قطعة غيار؛ الجهاز يخبرك بدقة أن 'شمعة الاحتراق رقم 3 تحتاج استبدال'، فلا تذهب وتستبدل صندوق التروس والمكابح عشوائياً بناء على حدس غير مدروس!",
      whyItMatters: "يمنعك القياس من إضاعة أيام كاملة في تحسين مكون سريع بالفعل، ويوجه جهدك مباشرة نحو الـ 5% من المكونات التي تبتلع 95% من وقت المعالج وتتسبب في هبوط معدل الإطارات (Drop Frames).",
      syntax: "// قياس زمن دالة حسابية بالملي ثانية:\nconst t0 = performance.now();\ndoHeavyCalculation();\nconst t1 = performance.now();\nconsole.log(\`استغرقت الدالة: \${(t1 - t0).toFixed(2)} ms\`);",
      simpleExample: `// دالة قياس أداء سريعة باستخدام console.time
export function measureOperationSpeed() {
  // بدء قياس الوقت بالاسم المميز
  console.time("⏱️ معالجة البيانات");

  let total = 0;
  // محاكاة حلقة تكرارية
  for (let i = 0; i < 1000000; i++) {
    total += Math.sqrt(i);
  }

  // إنهاء القياس وطباعة النتيجة المباشرة
  console.timeEnd("⏱️ معالجة البيانات");
  return total;
}`,
      advancedExample: `// استيراد الأدوات من React
import { useState } from 'react';

// مكون مختبر قياس الأداء التفاعلي في React
export function PerformanceBenchmarkStudio() {
  const [dataCount, setDataCount] = useState<number>(50000);
  const [lastDuration, setLastDuration] = useState<number | null>(null);
  const [isWorthMemo, setIsWorthMemo] = useState<boolean | null>(null);

  // دالة تشغيل الاختبار وقياس الزمن الفعلي بدقة
  const runBenchmark = () => {
    // تسجيل نقطة البداية الدقيقة بـ performance.now()
    const startTime = performance.now();

    // تنفيذ عملية محاكاة حسابية مكثفة (ترتيب وفلترة)
    const list = Array.from({ length: dataCount }, () => Math.random());
    list.sort((a, b) => b - a);
    const sum = list.slice(0, 1000).reduce((a, b) => a + b, 0);

    // تسجيل نقطة النهاية
    const endTime = performance.now();
    const durationMs = endTime - startTime;

    setLastDuration(durationMs);

    // المعيار الهندسي: إذا كانت العملية تأخذ أكثر من 1ms، فهي مرشحة جيدة لـ useMemo
    setIsWorthMemo(durationMs > 1.0);
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-xl font-bold text-amber-400 mb-2">مختبر قياس الأداء الرقمي (Benchmarking Studio)</h3>
      <p className="text-xs text-slate-400 mb-4">
        قم بقياس الوقت الحقيقي لتنفيذ العملية واكتشف هل تحتاج فعلاً إلى useMemo أم لا!
      </p>

      {/* اختيار حجم العينة */}
      <div className="flex items-center gap-3 mb-4">
        <label className="text-xs text-slate-300">حجم العينة:</label>
        <select
          value={dataCount}
          onChange={(e) => setDataCount(Number(e.target.value))}
          className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs focus:outline-none"
        >
          <option value={5000}>5,000 عنصر (صغيرة)</option>
          <option value={50000}>50,000 عنصر (متوسطة)</option>
          <option value={200000}>200,000 عنصر (ضخمة)</option>
        </select>
        <button
          onClick={runBenchmark}
          className="px-4 py-1.5 bg-amber-600 hover:bg-amber-500 font-bold rounded-xl text-xs transition-colors"
        >
          ابدأ فحص الأداء ⏱️
        </button>
      </div>

      {/* لوحة النتائج والتقييم */}
      {lastDuration !== null && (
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-xs text-slate-400">الوقت المستغرق بدقة:</span>
            <span className="text-lg font-mono font-bold text-cyan-400">{lastDuration.toFixed(3)} ms</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">التقييم الهندسي للجدوى:</span>
            <span
              className={\`text-xs px-2.5 py-1 rounded-full font-bold \${isWorthMemo ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'}\`}
            >
              {isWorthMemo ? 'يستحق useMemo قطعاً (تجاوز 1ms) ✅' : 'سريع جداً، لا داعي لـ useMemo ⚡'}
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            * القاعدة الذهبية: العمليات التي تنفذ في أقل من 1ms لا تسبب أي تقطيع ملحوظ في معدل 60FPS.
          </p>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "باستخدام `performance.now()`، يمنحك الاستوديو رقماً حقيقياً بالميلي ثانية؛ فإذا كانت العملية تستغرق أقل من 1ms، يمكنك الاستغناء بأمان عن useMemo وتوفير استهلاك الذاكرة، بينما العمليات الأطول من 1ms تستحق الحماية فوراً.",
      commonMistakes: [
        {
          mistake: "قياس الأداء في بيئة التطوير Development Mode فقط مع وجود React Strict Mode",
          fix: "تذكر أن بيئة التطوير تقوم بتشغيل المكونات مرتين وتضيف أدوات فحص تبطئ التنفيذ؛ أجرِ القياسات النهائية دائماً على نسخة الإنتاج (Production Build)."
        },
        {
          mistake: "الاعتماد على الشعور الشخصي أو سرعة جهاز المطور القوي دون فحص الأجهزة الضعيفة",
          fix: "استخدم ميزة CPU Throttling (4x or 6x slowdown) في أدوات المتصفح لمحاكاة أجهزة الهواتف المتوسطة والضعيفة."
        }
      ],
      bestPractices: [
        "استخدم علامة تبويب Profiler في React DevTools لتسجيل التفاعلات الحية ومعرفة سبب تصيير كل مكون.",
        "قس زمن العمليات الحسابية المشتبه بها؛ إذا كانت أقل من 1 ملي ثانية، فلا تضيع وقتك في تحسينها."
      ],
      infographic: {
        title: "خطوات قياس وتحسين الأداء",
        points: [
          "1. رصد المشكلة: ملاحظة تأخر استجابة أو انخفاض معدل الإطارات (Drop Frames).",
          "2. الفحص بالـ Profiler: تسجيل التفاعل وتحديد المكون المسبب لتأخر الـ Commit.",
          "3. القياس بـ performance.now: التحقق مما إذا كان المنطق الداخلي يستغرق > 1ms.",
          "4. التدخل الجراحي: تطبيق useMemo أو useCallback بدقة، ثم إعادة القياس لإثبات التحسن!"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q15.1.1",
      question: "ما هو الفارق الجوهري بين خطاف useMemo وخطاف useCallback؟",
      options: [
        "useMemo يعمل مع الأرقام فقط، بينما useCallback يعمل مع النصوص فقط",
        "useMemo يخزن القيمة الناتجة عن دالة حسابية (Cached Value)، بينما useCallback يخزن مرجع الدالة نفسها (Cached Function Instance)",
        "useCallback يوقف إعادة التصيير تلقائياً، بينما useMemo يقوم بإعادة التصيير",
        "لا يوجد أي فرق بينهما وهما مجرد اسمين بديلين لنفس الخطاف"
      ],
      correctAnswer: 1,
      explanation: "يقوم `useMemo(() => computeValue(), deps)` بتشغيل الدالة وحفظ ناتجها، بينما يقوم `useCallback(fn, deps)` بحفظ مرجع الدالة `fn` ذاتها لمنع إعادة إنشائها عبر عمليات التصيير."
    },
    {
      id: "q15.1.2",
      question: "متى تفقد حماية React.memo في المكون الابن فاعليتها تماماً؟",
      options: [
        "عندما يكون المكون الابن مكتوباً بلغة TypeScript",
        "عندما يمرر المكون الأب دالة عادية غير مغلفة بـ useCallback كـ Prop للمكون الابن، لأن مرجع الدالة يتغير في كل تصيير",
        "عندما نستخدم Tailwind CSS في تنسيق المكون",
        "عندما يحتوي المكون الابن على أكثر من خاصيتين"
      ],
      correctAnswer: 1,
      explanation: "يقوم `React.memo` بمقارنة الخصائص سطحيّاً (`Object.is`)؛ فإذا استلم دالة جديدة في كل تصيير، سيعتبر أن الخصائص قد تغيرت وسيعيد تصيير نفسه دائماً، وهنا يأتي دور `useCallback` لتثبيت مرجع الدالة."
    },
    {
      id: "q15.1.3",
      question: "ماذا يقصد بظاهرة الإغلاق المتعفن (Stale Closure) في React Hooks؟",
      options: [
        "إغلاق المتصفح فجأة أثناء تشغيل كود جافاسكربت",
        "أن تحتفظ الدالة بقيم قديمة للـ State أو Props من تصيير سابق بسبب نسيان إضافتها في مصفوفة الاعتماديات",
        "امتلاء الذاكرة المؤقتة لكاش المتصفح",
        "انتهاء صلاحية توكن المصادقة أثناء إرسال الطلب"
      ],
      correctAnswer: 1,
      explanation: "تحدث ظاهرة Stale Closure عندما تغلق الدالة على متغيرات من التصيير الذي أنشئت فيه، فإذا أهمل المطور وضعها في مصفوفة الاعتماديات، ستستمر الدالة في قراءة القيم القديمة المخزنة بدلاً من أحدث الحالات."
    }
  ],
  exercise: {
    id: "ex-15.1",
    title: "تمرين عملي: تحسين قائمة المنتجات الكبرى باستخدام useMemo و useCallback و React.memo",
    description: "لديك تطبيق متجر إلكتروني يحتوي على 10,000 منتج. قم ببناء مكونين:\n1. مكون فرعي `ProductItem` مغلف بـ `React.memo` يعرض المنتج وزر الشراء.\n2. مكون رئيسي `ProductCatalog` يستخدم `useMemo` لفلترة وحساب المنتجات، و `useCallback` لمعالج الشراء، مع ضمان عدم إعادة تصيير عناصر القائمة عند تغيير حالات أخرى في الصفحة.",
    hints: [
      "غلف المكون الفرعي بـ `React.memo`.",
      "استخدم `useMemo` لفلترة مصفوفة المنتجات وحساب إجمالي السعر.",
      "استخدم `useCallback` لمعالج الشراء مع تمرير `id` المنتج كمعامل.",
      "استخدم التحديث الوظيفي للـ state لتجنب إدخال متغيرات في مصفوفة الاعتماديات."
    ],
    solution: `// استيراد الأدوات المطلوبة من React
import React, { useState, useMemo, useCallback } from 'react';

// تعريف نوع المنتج
interface Product {
  id: string;
  name: string;
  price: number;
}

// 1. المكون الفرعي المحسن بحارس React.memo
interface ProductItemProps {
  product: Product;
  onAddToCart: (id: string) => void;
}

export const ProductItem = React.memo(({ product, onAddToCart }: ProductItemProps) => {
  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center text-white">
      <div>
        <p className="font-semibold text-sm">{product.name}</p>
        <span className="text-xs text-emerald-400 font-mono">{product.price} $</span>
      </div>
      <button
        onClick={() => onAddToCart(product.id)}
        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold transition-colors"
      >
        إضافة للسلة
      </button>
    </div>
  );
});

// 2. المكون الرئيسي مع التحسينات الشاملة
export function ProductCatalog() {
  // مصفوفة تجريبية للمنتجات
  const [products] = useState<Product[]>([
    { id: 'p1', name: 'شاشة ألعاب 240Hz', price: 350 },
    { id: 'p2', name: 'لوحة مفاتيح ميكانيكية', price: 95 },
    { id: 'p3', name: 'فأرة لاسلكية فائقة الخفة', price: 65 }
  ]);

  // حالة البحث
  const [query, setQuery] = useState<string>('');
  // حالة السلة
  const [cartCount, setCartCount] = useState<number>(0);

  // استخدام useMemo لفلترة المنتجات بكفاءة
  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  // استخدام useCallback لتثبيت مرجع معالج الإضافة للسلة
  const handleAddToCart = useCallback((id: string) => {
    // زيادة عدد السلة بالاعتماد على الحالة السابقة
    setCartCount((prev) => prev + 1);
  }, []); // مصفوفة فارغة تضمن ثبات المرجع للأبد

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-cyan-400">كتالوج المنتجات المحسن</h3>
        <span className="text-xs bg-slate-800 px-3 py-1 rounded-full text-emerald-400 font-bold">
          السلة: {cartCount} 🛒
        </span>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ابحث عن منتج..."
        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs mb-4 focus:outline-none focus:border-cyan-500"
      />

      <div className="space-y-2">
        {filteredProducts.map((prod) => (
          <ProductItem
            key={prod.id}
            product={prod}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان useMemo و useCallback",
    nodes: [
      { id: "1", title: "مفهوم Memoization", desc: "تخزين النتائج بناء على المدخلات لمقايضة الذاكرة بالسرعة" },
      { id: "2", title: "useMemo", desc: "تخزين ناتج العمليات المكلفة وتثبيت مراجع الكائنات" },
      { id: "3", title: "useCallback", desc: "تثبيت مراجع الدوال كشريك لا غنى عنه لـ React.memo" },
      { id: "4", title: "الاعتماديات الصارمة", desc: "تسجيل كافة المتغيرات لمنع مشاكل Stale Closures" },
      { id: "5", title: "تجنب التحسين المبكر", desc: "البدء بالكود البسيط دائماً وعدم التعقيد بدون مبرر" },
      { id: "6", title: "القياس بالأدلة", desc: "استخدام Profiler و performance.now قبل الشروع في أي تحسين" }
    ]
  }
};
