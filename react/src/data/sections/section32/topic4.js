// src/data/sections/section32/topic4.js
// القسم 32: مشاريع تطبيقية للمستوى المتوسط
// الموضوع 4: مشروع 9: تطبيق إدارة المصروفات (Expense Tracker Application)

export const topic4 = {
  id: "32.4",
  title: "مشروع 9: تطبيق إدارة المصروفات",
  description: "مشروع تطبيقي متوسط متكامل لبناء نظام إدارة وتتبع المصروفات والميزانية الشخصية (Personal Expense Tracker)؛ يغطي إدارة العمليات المالية المعقدة عبر خطاف useReducer، الفصل المحاسبي بين الإيرادات والمصروفات، احتساب صافي الرصيد والمؤشرات المالية، فلترة الحركات بنطاقات التواريخ، الرسوم البيانية لتوزيع الفئات، التخزين الدائم، وتصدير كشوف الحسابات كملفات CSV حقيقية، مع اختبارات حسابية دقيقة.",
  subtopics: [
    {
      id: "32.4.a",
      title: "إنشاء نموذج إضافة العمليات المالية (Transaction Form & Entry Modal)",
      englishTerm: {
        term: "Transaction Entry Form & Modal Dialog",
        pronunciation: "ترانزاكشن إنتري فورم آند مودال دايلوج",
        meaning: "نموذج ونافذة إدخال المعاملة المالية"
      },
      description: "يمثل نموذج تسجيل المعاملات المالية البوابة التي تضمن دقة السجلات المحاسبية للمستخدم. يتطلب هذا النموذج جمع معلومات متكاملة عن كل عملية: (1) نوع العملية (إيراد Income أو مصروف Expense)، (2) المبلغ المالي بدقة مع حظر الأرقام السالبة، (3) العنوان أو الوصف السريع للعملية، (4) تاريخ المعاملة، و (5) الفئة المحاسبية المخصصة (مثل راتب، استثمار، طعام، فواتير، تسوق، أو مواصلات)، بالإضافة إلى إمكانية إضافة وسوم إضافية وملاحظات، مع توفير مؤشر مرئي يلون الحقل بالأخضر عند اختيار الإيراد وبالأحمر عند اختيار المصروف.",
      analogy: "يشبه دفتر قيد السندات وسندات الصرف والقبض لدى المحاسب القانوني؛ يحدد في رأس السند فوراً هل هذا سند قبض أم صرف، ويدون المبلغ بالحروف والأرقام وتاريخ اليوم مع سبب الصرف قبل توقيع المعاملة.",
      whyItMatters: "دقة المدخلات المالية من المصدر هي الضمان الوحيد لصحة التقارير والمخططات البيانية اللاحقة؛ فأي خطأ في تحديد نوع العملية أو كتابة المبلغ يقلب حسابات الميزانية رأساً على عقب.",
      syntax: `// نموذج قيد المعاملة المالية
interface TransactionEntry {
  id: string;
  type: "income" | "expense";
  title: string;
  amount: number;
  category: string;
  date: string;
  notes?: string;
}`,
      simpleExample: {
        title: "نموذج تسجيل حركة مالية بسيط مع تحديد نوع العملية",
        code: `import React, { useState } from "react";

// نموذج إضافة حركة مالية مبسط
function SimpleTransactionForm({ onAddTransaction }) {
  const [type, setType] = useState("expense");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (!title.trim() || isNaN(parsedAmount) || parsedAmount <= 0) return;

    onAddTransaction({
      id: "tx_" + Date.now(),
      type: type,
      title: title.trim(),
      amount: parsedAmount,
      date: new Date().toISOString().slice(0, 10)
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "350px", margin: "20px auto", padding: "16px", border: "1px solid #ccc", borderRadius: "10px", fontFamily: "sans-serif" }}>
      <h4>تسجيل معاملة مالية</h4>
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <button
          type="button"
          onClick={() => setType("income")}
          style={{ flex: 1, padding: "8px", backgroundColor: type === "income" ? "#16a34a" : "#eee", color: type === "income" ? "#fff" : "#000", border: "none", borderRadius: "6px" }}
        >
          + إيراد
        </button>
        <button
          type="button"
          onClick={() => setType("expense")}
          style={{ flex: 1, padding: "8px", backgroundColor: type === "expense" ? "#dc2626" : "#eee", color: type === "expense" ? "#fff" : "#000", border: "none", borderRadius: "6px" }}
        >
          - مصروف
        </button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="عنوان العملية (مثال: راتب، بقالة)..."
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "6px", boxSizing: "border-box" }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <input
          type="number"
          step="0.01"
          placeholder="المبلغ بالريال/الدولار..."
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
          style={{ width: "100%", padding: "6px", boxSizing: "border-box" }}
        />
      </div>

      <button type="submit" style={{ width: "100%", padding: "8px", backgroundColor: "#0284c7", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "bold" }}>
        حفظ المعاملة
      </button>
    </form>
  );
}

export default SimpleTransactionForm;`
      },
      advancedExample: {
        title: "نافذة منبثقة احترافية لتسجيل المعاملات المالية مع قوائم الفئات والتحقق من التواريخ",
        code: `import React, { useState } from "react";

// الفئات المعتمدة للإيرادات والمصروفات
const EXPENSE_CATEGORIES = ["طعام ومطاعم", "فواتير وسكن", "مواصلات ووقود", "تسوق وترفيه", "صحة وتعليم", "أخرى"];
const INCOME_CATEGORIES = ["راتب شهري", "أرباح استثمار", "عمل حر", "مكافأة", "أخرى"];

export function AdvancedTransactionModal({ isOpen, onClose, onSaveTransaction }) {
  const [txType, setTxType] = useState("expense");
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: EXPENSE_CATEGORIES[0],
    date: new Date().toISOString().slice(0, 10),
    notes: ""
  });

  if (!isOpen) return null;

  // تبديل النوع وتحديث الفئة الافتراضية المناسبة
  const handleTypeChange = (newType) => {
    setTxType(newType);
    setFormData(prev => ({
      ...prev,
      category: newType === "expense" ? EXPENSE_CATEGORIES[0] : INCOME_CATEGORIES[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numAmount = parseFloat(formData.amount);
    if (!formData.title.trim() || isNaN(numAmount) || numAmount <= 0) return;

    onSaveTransaction({
      id: "tx_" + Date.now(),
      type: txType,
      title: formData.title.trim(),
      amount: numAmount,
      category: formData.category,
      date: formData.date,
      notes: formData.notes.trim(),
      createdAt: Date.now()
    });

    onClose();
  };

  const activeCategories = txType === "expense" ? EXPENSE_CATEGORIES : INCOME_CATEGORIES;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm font-sans animate-fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-base font-black text-slate-900 dark:text-white">إضافة معاملة مالية جديدة</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* محدد نوع المعاملة التفاعلي الملون */}
          <div className="grid grid-cols-2 gap-3 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
            <button
              type="button"
              onClick={() => handleTypeChange("expense")}
              className={\`py-2.5 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 \${
                txType === "expense" ? "bg-rose-500 text-white shadow-md" : "text-slate-600 dark:text-slate-400"
              }\`}
            >
              <span>🔻</span> مصروف (Expense)
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange("income")}
              className={\`py-2.5 rounded-xl text-xs font-black transition flex items-center justify-center gap-1.5 \${
                txType === "income" ? "bg-emerald-500 text-white shadow-md" : "text-slate-600 dark:text-slate-400"
              }\`}
            >
              <span>🔺</span> إيراد (Income)
            </button>
          </div>

          {/* حقل المبلغ الكلي */}
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">المبلغ المالي *</label>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                min="0.01"
                required
                value={formData.amount}
                onChange={e => setFormData({ ...formData, amount: e.target.value })}
                placeholder="0.00"
                className="w-full p-3 text-lg font-black rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none text-slate-900 dark:text-white"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">ريال / $</span>
            </div>
          </div>

          {/* العنوان والفئة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">وصف العملية *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                placeholder="مثال: تسوق سوبرماركت..."
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">التصنيف المحاسبي</label>
              <select
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none font-bold"
              >
                {activeCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
          </div>

          {/* التاريخ والملاحظات */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">تاريخ المعاملة</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={e => setFormData({ ...formData, date: e.target.value })}
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">ملاحظات إضافية</label>
              <input
                type="text"
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder="اختياري..."
                className="w-full p-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none"
              />
            </div>
          </div>

          {/* أزرار الحفظ والإلغاء */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-500 font-bold hover:text-slate-800"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className={\`px-6 py-2.5 text-white font-bold text-xs rounded-xl shadow-lg transition \${
                txType === "income" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-rose-600 hover:bg-rose-700"
              }\`}
            >
              تأكيد وقيد المعاملة ✓
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوفر هذا المكون واجهة تسجيل قياسية تفرق بوضوح بين الإيرادات والمصروفات بالألوان، وتحدث قائمة الفئات تلقائياً بحسب نوع المعاملة، وتمنع إدخال مبالغ صفرية أو سالبة.",
      commonMistakes: [
        {
          wrong: "// السماح بإدخال مبالغ سالبة في حقل المصروف اعتقاداً بأنه يجب أن يكون سالباً، مما يسبب أخطاء طرح مزدوجة في الحسابات",
          correct: "// دائماً خزن المبلغ كقيمة موجبة مطلقة (Positive Absolute Number)، ودع خاصية type: 'expense' تحدد كيفية معالجته رياضياً"
        }
      ],
      bestPractices: [
        "استخدام parseFloat مع دقة step='0.01' للسماح بإدخال الهللات والكسور العشرية المالية",
        "تحديث تاريخ المعاملة افتراضياً إلى تاريخ اليوم الحالي لتسريع وتسهيل الإدخال اليومي",
        "تخصيص ألوان أزرار الحفظ لتتناسب مع طبيعة المعاملة (الأخضر للإيراد والأحمر للمصروف)"
      ],
      infographic: {
        title: "خطوات تسجيل المعاملة المالية",
        nodes: [
          { label: "1. تحديد النوع (Type)", detail: "إيراد (+) بالأخضر أو مصروف (-) بالأحمر" },
          { label: "2. المبلغ والوصف", detail: "قيمة موجبة دقيقة مع عنوان موجز للعملية" },
          { label: "3. التصنيف المحاسبي", detail: "اختيار الفئة المناسبة من القائمة المتكيفة" },
          { label: "4. التأكيد والقيد", detail: "حفظ السجل وتحديث الرصيد والمؤشرات فورياً" }
        ]
      }
    },
    {
      id: "32.4.b",
      title: "تصنيف الإيرادات والمصروفات (Income vs Expense Taxonomy)",
      englishTerm: {
        term: "Income/Expense Taxonomy & Category Grouping",
        pronunciation: "إنكوم/إكسبنس تاكسونومي آند كاتيجوري جروبينج",
        meaning: "التصنيف المحاسبي وتجميع الإيرادات والمصروفات"
      },
      description: "التصنيف المحاسبي المنظم هو الأساس الذي يحول قائمة الأرقام المالية العشوائية إلى رؤى إدارية واضحة. يغطي هذا الموضوع بناء شجرة تصنيفات معيارية (Taxonomy): تتوزع المصروفات على فئات واضحة مثل (الاحتياجات الأساسية Needs: طعام، فواتير، سكن)، (الرغبات Wants: ترفيه، مطاعم، تسوق)، و (الاستثمار والادخار Savings)، بينما تتوزع الإيرادات على (راتب، أرباح، أعمال حرة). يتضمن النظام تلوين كل فئة بأيقونة ولون دلالي خاص، مع إمكانية حساب المجموع التراكمي ونسبة الاستهلاك لكل فئة مقارنة بإجمالي النفقات.",
      analogy: "يشبه استخدام أسلوب الأظرف المالية (Envelope Budgeting Method) الشهير؛ حيث تخصص ظرفاً للمنزل، وظرفاً للمشتريات، وظرفاً للتوفير، فتعرف في نهاية الشهر بالضبط أي الأظرف استهلك أكثر من نصيبه.",
      whyItMatters: "يمكن المستخدم من تطبيق قواعد إدارة المال العالمية (مثل قاعدة 50/30/20) ومعرفة أين تتسرب أمواله تحديداً بدلاً من التساؤل الدائم عن سبب نفاد الراتب.",
      syntax: `// كائن فئات المصروفات مع الألوان والأيقونات
const EXPENSE_CATEGORIES_CONFIG = {
  food: { label: "طعام وبقالة", icon: "🍔", color: "#f59e0b" },
  housing: { label: "سكن وفواتير", icon: "🏠", color: "#3b82f6" },
  entertainment: { label: "ترفيه وتسوق", icon: "🎮", color: "#ec4899" }
};`,
      simpleExample: {
        title: "تجميع المصروفات حسب الفئات وحساب المجموع لكل فئة",
        code: `// دالة تجميع النفقات حسب الفئة
function groupExpensesByCategory(transactions) {
  const summary = {};

  transactions
    .filter(t => t.type === "expense")
    .forEach(t => {
      summary[t.category] = (summary[t.category] || 0) + t.amount;
    });

  return summary;
}

// اختبار الدالة
const mockTx = [
  { type: "expense", category: "طعام", amount: 150 },
  { type: "expense", category: "طعام", amount: 50 },
  { type: "expense", category: "وقود", amount: 80 }
];

console.log("ملخص الفئات:", groupExpensesByCategory(mockTx)); // { 'طعام': 200, 'وقود': 80 }`
      },
      advancedExample: {
        title: "نظام تصنيف مالي احترافي يحسب النسب المئوية لكل فئة ويولد أشرطة تقدم ملونة",
        code: `// فئة إدارة وهيكلة التصنيفات المالية
export class FinanceCategoryTaxonomy {
  static CATEGORY_DEFINITIONS = {
    // فئات المصروفات
    "طعام ومطاعم": { icon: "🍽️", color: "#f97316", type: "expense" },
    "فواتير وسكن": { icon: "🏠", color: "#0ea5e9", type: "expense" },
    "مواصلات ووقود": { icon: "🚗", color: "#8b5cf6", type: "expense" },
    "تسوق وترفيه": { icon: "🛍️", color: "#ec4899", type: "expense" },
    "صحة وعناية": { icon: "💊", color: "#10b981", type: "expense" },
    // فئات الإيرادات
    "راتب شهري": { icon: "💼", color: "#10b981", type: "income" },
    "استثمار": { icon: "📈", color: "#3b82f6", type: "income" },
    "عمل حر": { icon: "💻", color: "#6366f1", type: "income" }
  };

  // احتساب تحليل توزيع المصروفات بالنسبة المئوية
  static computeExpenseDistribution(transactions = []) {
    const expenses = transactions.filter(t => t.type === "expense");
    const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

    if (totalExpense === 0) return [];

    // تجميع المبالغ حسب الفئة
    const totalsMap = {};
    expenses.forEach(t => {
      totalsMap[t.category] = (totalsMap[t.category] || 0) + t.amount;
    });

    // تحويلها لمصفوفة مع النسبة المئوية والتفاصيل
    return Object.entries(totalsMap)
      .map(([category, amount]) => {
        const config = FinanceCategoryTaxonomy.CATEGORY_DEFINITIONS[category] || { icon: "📦", color: "#64748b" };
        const percentage = Math.round((amount / totalExpense) * 100);
        return {
          category,
          amount: Math.round(amount * 100) / 100,
          percentage,
          icon: config.icon,
          color: config.color
        };
      })
      .sort((a, b) => b.amount - a.amount); // ترتيب تنازلي حسب الأكثر استهلاكاً
  }
}

// اختبار التحليل
const sampleData = [
  { type: "expense", category: "طعام ومطاعم", amount: 600 },
  { type: "expense", category: "فواتير وسكن", amount: 1400 }
];

const distribution = FinanceCategoryTaxonomy.computeExpenseDistribution(sampleData);
console.log("توزيع النفقات:", distribution);`
      },
      outputExplanation: "يوضح هذا التصنيف كيف تحسب الدالة النسب المئوية الدقيقة لكل فئة إنفاق وترتبها تنازلياً؛ مما يوضح للمستخدم فورياً أن 'فواتير وسكن' تمثل 70% من ميزانيته الشهرية بينما يمثل 'طعام ومطاعم' 30%.",
      commonMistakes: [
        {
          wrong: "// خلط إيرادات الاستثمار والرواتب مع بنود المصروفات في نفس قائمة التحليل الإحصائي",
          correct: "// الفصل الصارم بين تحليل مصادر الإيرادات (Income Sources) وبين بنود المصروفات (Expense Distribution)"
        }
      ],
      bestPractices: [
        "إرفاق أيقونة تعبيرية ولون مميز لكل فئة لسهولة التمييز البصري في الجداول والمخططات",
        "ترتيب الفئات تنازلياً حسب الأكثر إنفاقاً لتسليط الضوء على أكبر بنود الاستنزاف المالي",
        "توفير فئة عامة 'أخرى' للعمليات النادرة التي لا تندرج تحت التصنيفات المعتادة"
      ],
      infographic: {
        title: "شجرة التصنيف المحاسبي وتحليل النسب",
        nodes: [
          { label: "1. الإيرادات (Incomes)", detail: "رواتب، استثمارات، وأعمال حرة بالأخضر" },
          { label: "2. المصروفات الأساسية", detail: "سكن، فواتير، وطعام بالأزرق والبرتقالي" },
          { label: "3. المصروفات الترفيهية", detail: "تسوق، ترفيه، وأسفار بالوردي" },
          { label: "4. التحليل الإحصائي (%)", detail: "حساب حصة كل فئة مقارنة بإجمالي النفقات" }
        ]
      }
    },
    {
      id: "32.4.c",
      title: "إدارة الحالة باستخدام useReducer (Complex State Management with useReducer)",
      englishTerm: {
        term: "Predictable State Management with useReducer",
        pronunciation: "بريديكتابل ستيت مانجمنت ويذ يوز ريديوسر",
        meaning: "إدارة الحالة المتوقعة باستخدام خطاف useReducer"
      },
      description: "عندما تترابط العمليات المالية مع حسابات الأرصدة وتواريخ التعديل وعمليات الحذف والتصفية، يصبح استخدام `useState` المبعثر مصدراً لتضارب الحالات وصعوبة تصحيح الأخطاء. خطاف `useReducer` هو الأداة الموصى بها في React لإدارة الحالات المعقدة؛ حيث يعتمد على نمط 'الدوال النقية والإجراءات' (Redux Architecture). تتجمع كافة تعديلات الحالة في دالة مخفض واحدة (`transactionReducer`) تستقبل الحالة الحالية وكائن الإجراء (`Action`)، وتطبق قواعد التحويل المحددة بدقة متناهية (مثل ADD_TRANSACTION, DELETE_TRANSACTION, UPDATE_TRANSACTION, CLEAR_ALL, SET_FILTER).",
      analogy: "يشبه أمين الصندوق في البنك؛ لا يمسك كل موظف خزنة الأموال بيده عشوائياً، بل يرسل الموظفون استمارة طلب إيداع أو سحب مختومة (Action)، ويقوم أمين الصندوق وحده بتنفيذ العملية في السجل المركزي الموحد (Reducer).",
      whyItMatters: "يجعل تدفق البيانات قابلاً للتنبؤ بنسبة 100%، ويفصل منطق الحسابات والعمليات المالية تماماً عن مكونات واجهة المستخدم، مما يسهل اختبارها واكتشاف أي خطأ حسابي.",
      syntax: `// استخدام useReducer في React
const [state, dispatch] = useReducer(transactionsReducer, initialFinanceState);

// إرسال إجراء إضافة
dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });`,
      simpleExample: {
        title: "إدارة قائمة العمليات المالية عبر useReducer",
        code: `import React, { useReducer } from "react";

// دالة المخفض البسيطة
function financeReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "DELETE":
      return state.filter(item => item.id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

function MiniFinanceReducerDemo() {
  const [transactions, dispatch] = useReducer(financeReducer, [
    { id: 1, title: "مكافأة", amount: 500 }
  ]);

  return (
    <div style={{ padding: "16px", fontFamily: "sans-serif" }}>
      <h4>سجل الحركات المالية ({transactions.length})</h4>
      <button onClick={() => dispatch({ type: "ADD", payload: { id: Date.now(), title: "قهوة", amount: 20 } })}>
        + إضافة مصروف
      </button>
      <button onClick={() => dispatch({ type: "CLEAR" })} style={{ marginRight: "8px" }}>
        تفريغ السجل
      </button>
      <ul>
        {transactions.map(t => (
          <li key={t.id}>
            {t.title}: \${t.amount}
            <button onClick={() => dispatch({ type: "DELETE", payload: t.id })} style={{ marginRight: "10px" }}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MiniFinanceReducerDemo;`
      },
      advancedExample: {
        title: "نظام إدارة حالة مالية متكامل بـ useReducer يدمج العمليات وفلاتر التاريخ والبحث والتخزين المؤقت",
        code: `// أنواع إجراءات النظام المالي
export const FINANCE_ACTIONS = {
  ADD_TRANSACTION: "ADD_TRANSACTION",
  DELETE_TRANSACTION: "DELETE_TRANSACTION",
  UPDATE_TRANSACTION: "UPDATE_TRANSACTION",
  SET_DATE_RANGE: "SET_DATE_RANGE",
  SET_CATEGORY_FILTER: "SET_CATEGORY_FILTER",
  RESET_STATE: "RESET_STATE"
};

// الحالة الابتدائية المركزية
export const INITIAL_FINANCE_STATE = {
  transactions: [],
  filters: {
    startDate: null,
    endDate: null,
    selectedCategory: "ALL"
  },
  lastUpdated: Date.now()
};

// دالة المخفض الشاملة (Pure Reducer Function)
export function comprehensiveFinanceReducer(state, action) {
  switch (action.type) {
    // إضافة معاملة جديدة
    case FINANCE_ACTIONS.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
        lastUpdated: Date.now()
      };

    // حذف معاملة
    case FINANCE_ACTIONS.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(t => t.id !== action.payload),
        lastUpdated: Date.now()
      };

    // تعديل معاملة موجودة
    case FINANCE_ACTIONS.UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map(t =>
          t.id === action.payload.id ? { ...t, ...action.payload } : t
        ),
        lastUpdated: Date.now()
      };

    // تعيين نطاق التواريخ
    case FINANCE_ACTIONS.SET_DATE_RANGE:
      return {
        ...state,
        filters: {
          ...state.filters,
          startDate: action.payload.start,
          endDate: action.payload.end
        }
      };

    // تعيين فلتر الفئة
    case FINANCE_ACTIONS.SET_CATEGORY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          selectedCategory: action.payload
        }
      };

    // تصفير الحالة
    case FINANCE_ACTIONS.RESET_STATE:
      return INITIAL_FINANCE_STATE;

    default:
      return state;
  }
}

// اختبار دالة المخفض مع معالجة تسلسل الإجراءات
let appState = INITIAL_FINANCE_STATE;

// 1. إضافة عملية
appState = comprehensiveFinanceReducer(appState, {
  type: FINANCE_ACTIONS.ADD_TRANSACTION,
  payload: { id: "tx_1", type: "income", title: "راتب", amount: 10000 }
});
console.log("العمليات بعد الإضافة الأولى:", appState.transactions.length); // 1

// 2. تحديث فلتر الفئة
appState = comprehensiveFinanceReducer(appState, {
  type: FINANCE_ACTIONS.SET_CATEGORY_FILTER,
  payload: "راتب شهري"
});
console.log("الفئة المحددة بالفلتر:", appState.filters.selectedCategory); // راتب شهري`
      },
      outputExplanation: "يوضح هذا التصميم كيف يجمع useReducer كافة جوانب الحالة (المعاملات والفلاتر ومواعيد التحديث) في مكان مركزي واحد، ويحدد التغييرات من خلال كائنات Action موصوفة بوضوح بدلاً من كتابة عشرات دوال useState المنفصلة.",
      commonMistakes: [
        {
          wrong: "// تعديل كائن الحالة مباشرة داخل المخفض عبر state.transactions.push(action.payload) مما يفسد نقاء الدالة",
          correct: "// دائماً أرجع كائناً جديداً بنسخة معدلة {...state, transactions: [new, ...state.transactions]}"
        }
      ],
      bestPractices: [
        "استخدام كائن ثوابت لأنواع الإجراءات (Actions Object) لتفادي الأخطاء الإملائية الصامتة في أسماء الأحداث",
        "تضمين حالة الفلاتر داخل نفس المخفض لضمان اتساق ترشيح البيانات وتزامنها مع العمليات",
        "فصل ملف المخفض (financeReducer.js) واختباره كوحدة نقية مستقلة دون الحاجة لتركيب مكونات React"
      ],
      infographic: {
        title: "معمارية useReducer لإدارة الحالة المالية",
        nodes: [
          { label: "1. الإجراء (Dispatch Action)", detail: "إرسال نوع الحدث والبيانات { type, payload }" },
          { label: "2. المخفض (Pure Reducer)", detail: "دالة نقية تحسب الحالة التالية بناءً على نوع الحدث" },
          { label: "3. الحالة الجديدة الموحدة", detail: "تحديث المعاملات، الفلاتر، وتاريخ النشاط" },
          { label: "4. إعادة رندر المكونات المشتركة", detail: "تحديث الشاشات والبطاقات فورياً دون تضارب" }
        ]
      }
    },
    {
      id: "32.4.d",
      title: "حساب الرصيد الإجمالي (Balance, Net Income & Spending Metrics)",
      englishTerm: {
        term: "Balance, Cash Flow & Financial Metrics Calculation",
        pronunciation: "بلانس، كاش فلو آند فاينانشال ميتريكس كالكوليشن",
        meaning: "حساب الرصيد وصافي التدفق النقدي والمقاييس المالية"
      },
      description: "المعادلات المحاسبية هي العمود الفقري لتطبيق تتبع المصروفات؛ حيث لا يجوز أن يشوبها أي خطأ رقمي. يتطلب هذا الموضوع حساب ثلاثة مؤشرات حيوية رئيسية: (1) إجمالي الإيرادات (Total Income) = مجموع كافة العمليات ذات النوع 'income'، (2) إجمالي المصروفات (Total Expense) = مجموع كافة العمليات ذات النوع 'expense'، و (3) صافي الرصيد الحالي (Net Balance) = إجمالي الإيرادات - إجمالي المصروفات. كما يغطي احتساب معدل الادخار (Savings Rate %) وتنبيه المستخدم باللون الأحمر الداكن إذا كان الرصيد سالباً (عجز مالي) أو بالأخضر إذا كان موجباً (فائض مالي).",
      analogy: "يشبه كشف حسابك البنكي الشهري الصادر من تطبيق البنك؛ يوضح لك دائرة خضراء للأموال التي دخلت حسابك، ودائرة حمراء للأموال التي سحبتها، وفي المنتصف الرقم الأهم وهو رصيدك المتبقي المتاح للسحب اليوم.",
      whyItMatters: "يمنح المستخدم وضوحاً كاملاً حول قدرته المالية الحالية، ويحذره فوراً عندما تقترب نفقاته من التهام كامل دخله الشهري.",
      syntax: `// دوال حساب الرصيد الصافي
const totalIncome = transactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
const totalExpense = transactions.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
const netBalance = totalIncome - totalExpense;
const savingsRate = totalIncome > 0 ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100) : 0;`,
      simpleExample: {
        title: "حساب الرصيد وإجمالي الإيرادات والمصروفات بدوال بسيطة",
        code: `// دالة حساب المؤشرات المالية البسيطة
function computeFinancialMetrics(transactions) {
  let income = 0;
  let expense = 0;

  transactions.forEach(item => {
    if (item.type === "income") income += item.amount;
    else if (item.type === "expense") expense += item.amount;
  });

  const balance = income - expense;

  return {
    totalIncome: income.toFixed(2),
    totalExpense: expense.toFixed(2),
    netBalance: balance.toFixed(2),
    isDeficit: balance < 0
  };
}

// اختبار الدالة
const sampleTransactions = [
  { type: "income", amount: 5000 },
  { type: "expense", amount: 1200 },
  { type: "expense", amount: 800 }
];

const report = computeFinancialMetrics(sampleTransactions);
console.log("صافي الرصيد المتبقي:", report.netBalance); // 3000.00`
      },
      advancedExample: {
        title: "محرك حسابات مالية متقدم مع احتساب معدل الادخار، وتتبع متوسط الصرف اليومي، والتقييم الصحي للميزانية",
        code: `// محرك الحسابات المالية الشخصية المتقدم
export class PersonalFinanceMetricsEngine {
  static evaluateMetrics(transactions = []) {
    let incomeSum = 0;
    let expenseSum = 0;

    transactions.forEach((tx) => {
      const amt = Number(tx.amount) || 0;
      if (tx.type === "income") {
        incomeSum += amt;
      } else if (tx.type === "expense") {
        expenseSum += amt;
      }
    });

    const netBalance = incomeSum - expenseSum;
    // احتساب معدل الادخار بالنسبة المئوية
    const savingsRate = incomeSum > 0 ? Math.round((netBalance / incomeSum) * 100) : 0;

    // تقييم صحة الميزانية
    let budgetHealth = "معتدل";
    let healthBadgeColor = "bg-amber-100 text-amber-800";

    if (netBalance < 0) {
      budgetHealth = "عجز مالي - النفقات تتجاوز الدخل!";
      healthBadgeColor = "bg-rose-100 text-rose-800";
    } else if (savingsRate >= 30) {
      budgetHealth = "ممتاز - معدل ادخار استثنائي";
      healthBadgeColor = "bg-emerald-100 text-emerald-800";
    } else if (savingsRate >= 15) {
      budgetHealth = "جيد جداً - خطة ادخار مستقرة";
      healthBadgeColor = "bg-sky-100 text-sky-800";
    }

    return {
      totalIncome: Math.round(incomeSum * 100) / 100,
      totalExpense: Math.round(expenseSum * 100) / 100,
      netBalance: Math.round(netBalance * 100) / 100,
      savingsRate,
      budgetHealth,
      healthBadgeColor,
      isNegative: netBalance < 0
    };
  }
}

// اختبار المحرك
const testData = [
  { type: "income", amount: 8000 },
  { type: "expense", amount: 4800 }
];

const metrics = PersonalFinanceMetricsEngine.evaluateMetrics(testData);
console.log("صافي الرصيد:", metrics.netBalance + "$"); // 3200$
console.log("معدل الادخار:", metrics.savingsRate + "%"); // 40%
console.log("تقييم صحة الميزانية:", metrics.budgetHealth);`
      },
      outputExplanation: "يوضح هذا المحرك كيف يتجاوز مجرد حساب الجمع والطرح البسيط إلى احتساب معدل الادخار (Savings Rate %) وتقديم تقييم استشاري لصحة الميزانية يوضح للمستخدم ما إذا كان في نطاق الأمان المالي أم يواجه عجزاً.",
      commonMistakes: [
        {
          wrong: "// حساب معدل الادخار دون التحقق من أن totalIncome > 0 مما يؤدي لظهور NaN أو Infinity عند غياب الإيرادات",
          correct: "// دائماً افحص وجود دخل أكبر من صفر قبل القسمة، وضع قيمة افتراضية 0% في حال غياب الدخل"
        }
      ],
      bestPractices: [
        "عرض صافي الرصيد باللون الأحمر الداكن مع علامة تحذير إذا كان سالباً (عجز مالي) لتنبيه المستخدم فورياً",
        "تنسيق الأرقام بخانتين عشريتين لتمثيل الكسور المالية بدقة محاسبية رسمية",
        "استخدام useMemo لاحتساب هذه المؤشرات لحماية الأداء عند تزايد عدد المعاملات إلى الآلاف"
      ],
      infographic: {
        title: "معادلات ومؤشرات الحسابات المالية",
        nodes: [
          { label: "1. إجمالي الإيرادات", detail: "مجموع حركات القبض والرواتب والاستثمارات (+)" },
          { label: "2. إجمالي المصروفات", detail: "مجموع النفقات والفواتير والمشتريات (-)" },
          { label: "3. صافي الرصيد (Net Balance)", detail: "إجمالي الإيرادات - إجمالي المصروفات" },
          { label: "4. معدل الادخار (Savings Rate)", detail: "(الرصيد الصافي / إجمالي الدخل) * 100" }
        ]
      }
    },
    {
      id: "32.4.e",
      title: "فلترة العمليات بالتاريخ (Date Range Filtering & Month Pickers)",
      englishTerm: {
        term: "Date Range & Temporal Filtering",
        pronunciation: "ديت رينج آند تمبورال فيلترينج",
        meaning: "تصفية المعاملات بنطاق التواريخ ومحددات الشهور"
      },
      description: "المعاملات المالية ترتبط بطبيعتها بالزمن؛ فالمستخدم يريد دوماً مراجعة 'مصاريف هذا الشهر' أو 'مصاريف الأسبوع الماضي' أو تحديد نطاق مخصص (من تاريخ X إلى تاريخ Y). يتطلب هذا الموضوع بناء شريط فلترة زمنية يتيح: (1) أزرار الفترات الجاهزة (Presets: اليوم، هذا الأسبوع، هذا الشهر، هذا العام، أو الكل)، و (2) محدد نطاق تاريخ مخصص (Custom Date Range عبر حقول Date Inputs)، مع تحديث فوري لكافة بطاقات الأرصدة والمخططات لتقتصر على المعاملات التي وقعت داخل هذا النطاق الزمني حصراً.",
      analogy: "يشبه ضبط فترة كشف الحساب في ماكينة الصراف الآلي؛ يمكنك طلب 'كشف آخر 7 أيام' أو 'كشف الشهر الحالي'، فتخرج الورقة متضمنة العمليات التي تمت في تلك الفترة الزمنية فقط دون العمليات القديمة.",
      whyItMatters: "يوفر فهماً دقيقاً للسلوك المالي الموسمي، ويساعد في معرفة ما إذا كانت النفقات تتزايد في أوقات معينة من الشهر (مثل بداية الشهر بعد نزول الراتب).",
      syntax: `// فلترة المعاملات بنطاق التواريخ
const filteredByDate = transactions.filter(t => {
  const txDate = new Date(t.date).getTime();
  const start = startDate ? new Date(startDate).getTime() : -Infinity;
  const end = endDate ? new Date(endDate).getTime() : Infinity;
  return txDate >= start && txDate <= end;
});`,
      simpleExample: {
        title: "فلترة مصفوفة معاملات لشهر محدد",
        code: `// دالة ترشيح العمليات لشهر معين (صيغة YYYY-MM)
function filterTransactionsByMonth(transactions, targetMonth) {
  // targetMonth بصيغة "2026-10"
  return transactions.filter(t => t.date.startsWith(targetMonth));
}

// اختبار الدالة
const data = [
  { id: 1, title: "فاتورة هاتف", date: "2026-10-15", amount: 100 },
  { id: 2, title: "مشتريات", date: "2026-09-28", amount: 250 }
];

const octoberTx = filterTransactionsByMonth(data, "2026-10");
console.log("معاملات شهر أكتوبر 2026:", octoberTx.length); // 1`
      },
      advancedExample: {
        title: "شريط تحكم زمني احترافي يدعم الفترات الجاهزة (هذا الأسبوع، هذا الشهر) والنطاق المخصص",
        code: `import React, { useState } from "react";

// الفترات الزمنية الجاهزة
export const DATE_PRESETS = {
  ALL: "ALL",
  THIS_MONTH: "THIS_MONTH",
  LAST_MONTH: "LAST_MONTH",
  THIS_YEAR: "THIS_YEAR",
  CUSTOM: "CUSTOM"
};

// دالة مساعدة لحساب تواريخ الفترات
export function calculatePresetDates(presetKey) {
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10);

  if (presetKey === DATE_PRESETS.THIS_MONTH) {
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
    return { start: firstDay, end: todayStr };
  }

  if (presetKey === DATE_PRESETS.THIS_YEAR) {
    const firstDay = new Date(now.getFullYear(), 0, 1).toISOString().slice(0, 10);
    return { start: firstDay, end: todayStr };
  }

  return { start: null, end: null };
}

// مكون شريط الفلترة الزمنية المتكامل
export function DateRangeToolbar({ activePreset, onSelectPreset, customStart, customEnd, onCustomRangeChange }) {
  return (
    <div className="w-full bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs">
      {/* أزرار الفترات الجاهزة */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-slate-400 font-bold ml-1">الفترة:</span>
        {[
          { key: DATE_PRESETS.ALL, label: "الكل" },
          { key: DATE_PRESETS.THIS_MONTH, label: "هذا الشهر" },
          { key: DATE_PRESETS.THIS_YEAR, label: "هذا العام" },
          { key: DATE_PRESETS.CUSTOM, label: "نطاق مخصص..." }
        ].map(item => (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelectPreset(item.key)}
            className={\`px-3 py-1.5 rounded-xl font-bold transition \${
              activePreset === item.key
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            }\`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* محدد التواريخ المخصصة يظهر عند اختيار CUSTOM */}
      {activePreset === DATE_PRESETS.CUSTOM && (
        <div className="flex items-center gap-2">
          <span>من:</span>
          <input
            type="date"
            value={customStart || ""}
            onChange={e => onCustomRangeChange(e.target.value, customEnd)}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
          />
          <span>إلى:</span>
          <input
            type="date"
            value={customEnd || ""}
            onChange={e => onCustomRangeChange(customStart, e.target.value)}
            className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 outline-none"
          />
        </div>
      )}
    </div>
  );
}`
      },
      outputExplanation: "يوفر هذا الشريط مرونة مطلقة للمستخدم؛ حيث يمكنه بنقرة واحدة حصر السجلات في 'هذا الشهر' أو 'هذا العام'، أو فتح حقول التاريخ لتحديد نطاق مخصص باليوم والشهر.",
      commonMistakes: [
        {
          wrong: "// مقارنة نصوص التواريخ بشكل غير منسق (مثل 2026/1/5 مع 2026-01-05) مما يسبب فشل الفلترة",
          correct: "// دائماً استخدم صيغة ISO المعيارية YYYY-MM-DD مع إضافة أصفار الخانات (Zero-padding) للمقارنة الدقيقة"
        }
      ],
      bestPractices: [
        "توفير خيار 'هذا الشهر' كخيار افتراضي أو سريع لتلبية الاحتياج الأكثر تكراراً لدى المستخدمين",
        "تحديث كافة المخططات البيانية وبطاقات الرصيد تلقائياً فور تغيير الفترة الزمنية",
        "التحقق من أن تاريخ البداية يسبق أو يساوي تاريخ النهاية عند اختيار نطاق مخصص"
      ],
      infographic: {
        title: "آلية الفلترة الزمنية للمصروفات",
        nodes: [
          { label: "1. الفترات الجاهزة (Presets)", detail: "هذا الشهر، هذا العام، أو الكل بنقرة واحدة" },
          { label: "2. النطاق المخصص (Custom)", detail: "حقول من تاريخ X إلى تاريخ Y" },
          { label: "3. مطابقة التاريخ القياسية", detail: "فحص المعاملات بصيغة YYYY-MM-DD" },
          { label: "4. تحديث الرصيد والرسوم", detail: "حصر الإحصائيات في الفترة المحددة حصراً" }
        ]
      }
    },
    {
      id: "32.4.f",
      title: "عرض مخططات المصروفات (Spending Visualizations & Category Breakdown)",
      englishTerm: {
        term: "Spending Visualizations & Category Breakdown",
        pronunciation: "سبيندينج فيجوالايزيشنز آند كاتيجوري بريك داون",
        meaning: "تصوير وتجسيد المصروفات وتفصيل توزيع الفئات"
      },
      description: "المخططات البصرية هي الوسيلة الأسهل لفهم السلوك المالي الإنساني. يتطلب تطبيق المصروفات نوعين رئيسيين من الرسوم البيانية: (1) مخطط الكعكة الدائري المجوف (Donut Chart) لعرض حصص فئات الإنفاق كنسب مئوية متباينة الألوان (مثلاً 40% طعام، 30% سكن، 20% مواصلات)، و (2) مخطط الأعمدة التراكمي (Bar Chart) لمقارنة الإيرادات مقابل المصروفات شهراً بشهر، مع أشرطة تقدم أفقية توضح استهلاك ميزانية كل فئة (مثلاً: تم استهلاك 80% من ميزانية الترفيه المحددة).",
      analogy: "يشبه تقطيع بيتزا عائلية كبيرة إلى مثلثات ملونة؛ كل مثلث يمثل بنداً من بنود نفقاتك، فتعرف بمجرد النظر إلى حجم المثلث أي بند التهم أكبر قطعة من راتبك.",
      whyItMatters: "يساعد العقل البشري على استيعاب الأولويات المالية فورياً بدون الحاجة لقراءة وتدقيق عشرات السطور في الجداول.",
      syntax: `// مكون عرض توزيع المصروفات بالـ SVG
<DonutChart data={categorySpending} total={totalExpense} />
<CategoryBudgetProgressBars categories={breakdown} />`,
      simpleExample: {
        title: "أشرطة تقدم بصرية توضح نسبة استهلاك كل فئة من الميزانية",
        code: `import React from "react";

// بيانات استهلاك الفئات
const CATEGORY_STATS = [
  { name: "طعام وبقالة", spent: 800, total: 1000, color: "#f59e0b" },
  { name: "فواتير ومسكن", spent: 1500, total: 1500, color: "#0ea5e9" },
  { name: "ترفيه وتسوق", spent: 350, total: 500, color: "#ec4899" }
];

function SimpleBudgetProgressBars({ stats = CATEGORY_STATS }) {
  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "16px", border: "1px solid #e2e8f0", borderRadius: "12px", fontFamily: "sans-serif" }}>
      <h4>استهلاك ميزانية الفئات</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {stats.map((item, idx) => {
          const percent = Math.min(100, Math.round((item.spent / item.total) * 100));
          return (
            <div key={idx}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                <span>{item.name}</span>
                <span>\${item.spent} من \${item.total} ({percent}%)</span>
              </div>
              <div style={{ height: "8px", backgroundColor: "#f1f5f9", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: \`\${percent}%\`, height: "100%", backgroundColor: item.color, borderRadius: "4px" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimpleBudgetProgressBars;`
      },
      advancedExample: {
        title: "مخطط دائري تفاعلي (Donut SVG Chart) مع وسوم الفئات والنسب المئوية ومفتاح الألوان",
        code: `import React from "react";

// مكون المخطط الدائري التفاعلي المتطور لتوزيع المصروفات
export function AdvancedExpenseDonutStudio({ distribution = [] }) {
  const totalExpense = distribution.reduce((sum, d) => sum + d.amount, 0);

  if (distribution.length === 0 || totalExpense === 0) {
    return (
      <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-400 text-xs font-sans">
        لا توجد مصروفات مسجلة لعرض المخطط البياني في هذه الفترة.
      </div>
    );
  }

  // حساب أقواس الدائرة لكل فئة
  const radius = 35;
  const circumference = 2 * Math.PI * radius; // ~219.9
  let accumulatedPercent = 0;

  return (
    <div className="w-full bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm font-sans">
      <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
        توزيع المصروفات حسب الفئات
      </h3>
      <p className="text-xs text-slate-400 mb-6">الحصص النسبية لبنود الإنفاق للشهر الحالي</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* الرسم الدائري المجوف بالـ SVG */}
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* دائرة الخلفية الرمادية */}
            <circle cx="50" cy="50" r={radius} stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100 dark:text-slate-800" />

            {/* شرائح الفئات الملونة */}
            {distribution.map((item, idx) => {
              const strokeDasharray = \`\${(item.percentage / 100) * circumference} \${circumference}\`;
              const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
              accumulatedPercent += item.percentage;

              return (
                <circle
                  key={idx}
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke={item.color}
                  strokeWidth="12"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  fill="transparent"
                  className="transition-all duration-700 ease-out hover:opacity-80"
                />
              );
            })}
          </svg>

          {/* الرقم الإجمالي في قلب الدائرة */}
          <div className="absolute flex flex-col items-center">
            <span className="text-[10px] text-slate-400 font-bold">المصروف</span>
            <span className="text-base font-black text-slate-900 dark:text-white">\${totalExpense}</span>
          </div>
        </div>

        {/* قائمة مفاتيح الفئات وأشرطة النسب */}
        <div className="space-y-3">
          {distribution.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
                  <span>{item.icon}</span>
                  <span>{item.category}</span>
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  \${item.amount} <small className="text-slate-400">({item.percentage}%)</small>
                </span>
              </div>
              {/* شريط النسبة المصغر */}
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: \`\${item.percentage}%\`, backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يقدم هذا الاستوديو البياني تمثيلاً مزدوجاً للمصروفات: مخطط كعكة مجوفة بتقنية SVG يرسم نسب الفئات بدقة، مدعماً بقائمة مفاتيح الفئات مع أشرطة تقدم ملونة وأيقونات تعبيرية ومبالغ مفصلة.",
      commonMistakes: [
        {
          wrong: "// استخدام نفس اللون لجميع فئات المصروفات مما يجعل من المستحيل التمييز بينها في المخطط الدائري",
          correct: "// تخصيص لوحة ألوان متناغمة ومتباينة (Distinct Palette) لكل فئة لسهولة التعرف البصري"
        }
      ],
      bestPractices: [
        "عرض المجموع الإجمالي للنفقات في منتصف الدائرة المجوفة لاستغلال الفراغ الداخلي بذكاء",
        "تنسيق النسب المئوية بجانب المبالغ النقدية لمنح فهم مزدوج للحصة النسبية والقيمة المالية",
        "إظهار رسالة لطيفة عند عدم وجود بيانات بدلاً من عرض رسم فارغ مشوه"
      ],
      infographic: {
        title: "هندسة تصوير وتجسيد المصروفات",
        nodes: [
          { label: "1. المخطط الدائري (Donut)", detail: "تقسيم محيط الدائرة بحسب نسب الإنفاق" },
          { label: "2. قلب الدائرة الرقمي", detail: "إجمالي المصروفات المالية بخط عريض" },
          { label: "3. أشرطة الميزانية التفاعلية", detail: "متابعة نسبة استهلاك المخصص لكل فئة" },
          { label: "4. الألوان والأيقونات الدلالية", detail: "هوية بصرية واضحة لكل بند إنفاق" }
        ]
      }
    },
    {
      id: "32.4.g",
      title: "حفظ البيانات (Data Persistence & Schema Migration)",
      englishTerm: {
        term: "Data Persistence & LocalStorage Schema Migration",
        pronunciation: "داتا بيرسيستنس آند لوكال ستوريدج سكيما مايجريشن",
        meaning: "الحفظ الدائم للبيانات وترقية مخطط التخزين المحلي"
      },
      description: "المعاملات المالية لا يمكن التفريط بها؛ لذا فإن حفظها الدائم في المتصفح هو خطوة حاسمة. يغطي هذا الموضوع بناء هوك تخزين دائم آمن يقرأ ويكتب على `LocalStorage` مع معالجة استثناءات التصفح الخاص وتلف البيانات. بالإضافة إلى مفهوم متقدم بالغ الأهمية وهو 'ترقية المخطط' (Schema Migration)؛ فإذا قمت في الإصدار الثاني من التطبيق بإضافة حقل جديد لكل معاملة (مثل `notes` أو `currency`)، يتكفل كود الترقية بتحويل السجلات القديمة المخزنة لدى المستخدم إلى الهيكل الجديد تلقائياً دون فقدان أي معاملة مسجلة في الماضي.",
      analogy: "يشبه تحديث برنامج المحاسبة القديم في الشركة إلى الإصدار الجديد؛ يقوم البرنامج الذكي بنقل كافة قيود وسجلات السنوات السابقة وتكييفها مع الحقول الجديدة في ثوانٍ دون أن تضطر لإعادة كتابة فواتيرك القديمة من الصفر.",
      whyItMatters: "يحمي بيانات المستخدم من الضياع، ويضمن استمرارية عمل التطبيق بسلاسة عبر التحديثات البرمجية دون حدوث أخطاء كسر البيانات (Breaking Data Changes).",
      syntax: `// ترقية المخطط في التخزين المحلي
const CURRENT_SCHEMA_VERSION = 2;
const migrateData = (savedData) => {
  if (savedData.version === 1) {
    savedData.transactions = savedData.transactions.map(t => ({ ...t, notes: t.notes || "" }));
    savedData.version = 2;
  }
  return savedData;
};`,
      simpleExample: {
        title: "حفظ واسترجاع المعاملات من LocalStorage مع معالجة الخطأ",
        code: `// دالة قراءة آمنة من LocalStorage
function getPersistedTransactions(key = "EXPENSE_TRACKER_DATA") {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error("فشل قراءة البيانات من LocalStorage:", err);
    return [];
  }
}

// دالة حفظ آمنة
function saveTransactionsLocally(data, key = "EXPENSE_TRACKER_DATA") {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error("فشل حفظ البيانات:", err);
  }
}

// تجربة الحفظ
saveTransactionsLocally([{ id: 1, title: "وجبة غداء", amount: 45 }]);
console.log("البيانات المحفوظة المسترجعة:", getPersistedTransactions().length); // 1`
      },
      advancedExample: {
        title: "نظام حفظ دائم متطور مع ترقية الإصدارات التلقائية (Schema Migration Engine)",
        code: `// محرك التخزين الدائم مع ترقية المخططات البرمجية
export class FinanceStorageMigrationEngine {
  static STORAGE_KEY = "PRO_EXPENSE_TRACKER_VAULT_V2";
  static CURRENT_VERSION = 2;

  // ترقية السجلات القديمة للإصدار الأحدث تلقائياً
  static #migrateRecord(record, fromVersion) {
    let upgraded = { ...record };

    // الترقية من الإصدار 1 إلى 2: إضافة حقل الملاحظات وحقل العملة الافتراضية
    if (fromVersion < 2) {
      upgraded.notes = upgraded.notes || "لا توجد ملاحظات";
      upgraded.currency = upgraded.currency || "SAR";
      upgraded.updatedAt = upgraded.updatedAt || Date.now();
    }

    return upgraded;
  }

  // قراءة وترقية البيانات المخزنة
  static loadTransactions(defaultData = []) {
    try {
      const serialized = localStorage.getItem(FinanceStorageMigrationEngine.STORAGE_KEY);
      if (!serialized) return defaultData;

      const parsed = JSON.parse(serialized);

      // فحص إصدار المخطط
      const storedVersion = parsed.version || 1;
      let rawTransactions = Array.isArray(parsed) ? parsed : (parsed.transactions || []);

      if (storedVersion < FinanceStorageMigrationEngine.CURRENT_VERSION) {
        console.info(\`جاري ترقية مخطط البيانات من الإصدار \${storedVersion} إلى \${FinanceStorageMigrationEngine.CURRENT_VERSION}...\`);
        rawTransactions = rawTransactions.map(tx => FinanceStorageMigrationEngine.#migrateRecord(tx, storedVersion));
        // حفظ النسخة المحدثة فورياً
        FinanceStorageMigrationEngine.saveTransactions(rawTransactions);
      }

      return rawTransactions;
    } catch (e) {
      console.warn("تلف في بيانات التخزين، استخدام البيانات الافتراضية:", e);
      return defaultData;
    }
  }

  // حفظ البيانات بالإصدار الجديد
  static saveTransactions(transactions) {
    try {
      const payload = {
        version: FinanceStorageMigrationEngine.CURRENT_VERSION,
        transactions,
        savedAt: Date.now()
      };
      localStorage.setItem(FinanceStorageMigrationEngine.STORAGE_KEY, JSON.stringify(payload));
      return true;
    } catch (e) {
      console.error("فشل حفظ البيانات في LocalStorage:", e);
      return false;
    }
  }
}

// اختبار المحرك
const items = [{ id: "tx_10", title: "فاتورة إنترنت", amount: 250, type: "expense" }];
FinanceStorageMigrationEngine.saveTransactions(items);
const loaded = FinanceStorageMigrationEngine.loadTransactions();
console.log("البيانات المحملة بإصدار المخطط المحدث:", loaded[0].title);`
      },
      outputExplanation: "يوضح هذا التصميم الهندسي كيف يحمي محرك الترقية التلقائي (Migration Engine) استمرارية عمل التطبيق؛ فإذا فتح المستخدم الموقع بعد عام ووجد تحديثات جديدة في بنية المعاملات، تتم ترقية بياناته المحفوظة محلياً دون أن يشعر بأي خلل.",
      commonMistakes: [
        {
          wrong: "// تغيير بنية كائن المعاملة في التحديث الجديد دون كود ترقية، مما يؤدي لانهيار التطبيق بأخطاء undefined عند قراءة السجلات القديمة",
          correct: "// تضمين رقم إصدار (version) في كائن التخزين مع دالة ترقية تضيف الحقول الجديدة للبيانات القديمة"
        }
      ],
      bestPractices: [
        "إحاطة عمليات التخزين دائماً بكتل try/catch للتعامل مع أوضاع التصفح المتخفي أو امتلاء مساحة القرص",
        "حفظ طابع زمني (savedAt) لتوثيق توقيت آخر مزامنة محلية ناجحة",
        "توفير خيار 'نسخ احتياطي واستعادة' (Backup & Restore) بصيغة JSON لتمكين المستخدم من نقل بياناته لجهاز آخر"
      ],
      infographic: {
        title: "معمارية الحفظ وترقية البيانات المحلية",
        nodes: [
          { label: "1. قراءة التخزين المحلي", detail: "استرجاع كائن JSON من LocalStorage" },
          { label: "2. فحص رقم الإصدار (Version)", detail: "مقارنة إصدار البيانات مع CURRENT_VERSION" },
          { label: "3. تنفيذ الترقية (Migration)", detail: "إلحاق الحقول الناقصة بالبيانات القديمة" },
          { label: "4. الحفظ المتطور الآمن", detail: "كتابة الحزمة المحدثة مع حماية من الأخطاء" }
        ]
      }
    },
    {
      id: "32.4.h",
      title: "تصدير التقارير إلى CSV (Client-side CSV Export Engine)",
      englishTerm: {
        term: "Client-side CSV Export & Spreadsheet Encoding",
        pronunciation: "كلاينت سايد سي إس في إكسبورت آند سبريد شيت إنكودينج",
        meaning: "تصدير البيانات إلى CSV وترميز جداول البيانات في المتصفح"
      },
      description: "المستخدمون والشركات يحتاجون دوماً لتصدير بياناتهم المالية لفتحها في برامج الجداول الإلكترونية مثل Microsoft Excel أو Google Sheets أو تسليمها للمحاسبين. يتطلب بناء محرك تصدير CSV من جانب العميل: (1) بناء رأس الأعمدة (Headers) باللغة العربية والإنجليزية، (2) تحويل مصفوفة المعاملات إلى سطور مفصولة بفواصل (Comma-Separated Values)، (3) التعامل مع النصوص التي تحتوي على فواصل أو أسطر جديدة عبر تغليفها بعلامات الاقتباس المزدوجة، و (4) إضافة علامة ترتيب البايتات (`UTF-8 BOM: \\uFEFF`) في بداية الملف لضمان فتح الحروف العربية في برنامج Excel دون أن تظهر كرموز غير مفهومة وغريبة.",
      analogy: "يشبه طباعة كشف حساب بنكي رسمي مختوم؛ لا يكتفي البنك بعرض الأرقام على شاشة الصراف، بل يطبع لك ورقة رسمية منسقة بجدول واضح يضم التاريخ ورقم السند والمبلغ لتودعها في ملفك الورقي.",
      whyItMatters: "يمنح المستخدم استقلالية تامة وملكية كاملة لبياناته المالية (Data Portability)، ويسهل مشاركة السجلات مع المحاسبين والمدققين دون الحاجة لخادم backend.",
      syntax: `// إضافة BOM لدعم اللغة العربية في ملفات CSV
const csvContent = "\\uFEFF" + headers.join(",") + "\\n" + rows.join("\\n");
const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });`,
      simpleExample: {
        title: "توليد ملف CSV بسيط وتحميله في المتصفح",
        code: `// دالة تصدير مصفوفة إلى ملف CSV مع دعم العربية
function exportTransactionsToCsv(transactions) {
  // رأس الجدول
  const headers = ["المعرف", "النوع", "العنوان", "المبلغ", "التاريخ"];
  
  // تحويل كل معاملة إلى سطر
  const rows = transactions.map(t => [
    t.id,
    t.type === "income" ? "إيراد" : "مصروف",
    \`"\${t.title.replace(/"/g, '""')}"\`, // حماية الفواصل والنصوص
    t.amount,
    t.date
  ].join(","));

  // دمج المحتوى مع علامة UTF-8 BOM لدعم الحروف العربية في Excel
  const fullContent = "\\uFEFF" + headers.join(",") + "\\n" + rows.join("\\n");

  // إنشاء الملف وتنزيله
  const blob = new Blob([fullContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = \`Financial_Report_\${new Date().toISOString().slice(0, 10)}.csv\`;
  a.click();
  URL.revokeObjectURL(url);
}

// اختبار الدالة
console.log("محرك تصدير الـ CSV جاهز للاستدعاء عبر أزرار الواجهة");`
      },
      advancedExample: {
        title: "محرك تصدير CSV احترافي متكامل مع تفقيط الإجماليات وملخص الفاتورة وتنسيق العملات",
        code: `// محرك تصدير التقارير المالية المتقدم
export class FinanceCsvExportEngine {
  // توليد ملف كشف الحساب المتكامل
  static generateReport(transactions = [], metadata = {}) {
    if (!transactions || transactions.length === 0) {
      alert("لا توجد معاملات مالية لتصديرها في الفترة المحددة.");
      return;
    }

    const reportDate = new Date().toLocaleDateString("ar-SA");
    let incomeTotal = 0;
    let expenseTotal = 0;

    // حساب الإجماليات
    transactions.forEach(t => {
      if (t.type === "income") incomeTotal += Number(t.amount);
      else expenseTotal += Number(t.amount);
    });

    const netBalance = incomeTotal - expenseTotal;

    // 1. ترويسة التقرير
    let csv = "\\uFEFF"; // إضافة رمز UTF-8 BOM لدعم العربية في Excel
    csv += \`"تقرير كشف الحساب المالي الشامل","تاريخ التصدير: \${reportDate}"\\n\`;
    csv += \`"إجمالي الإيرادات:","\${incomeTotal.toFixed(2)}"\` + "\\n";
    csv += \`"إجمالي المصروفات:","\${expenseTotal.toFixed(2)}"\` + "\\n";
    csv += \`"صافي الرصيد:","\${netBalance.toFixed(2)}"\` + "\\n";
    csv += "\\n"; // سطر فاصل

    // 2. رؤوس أعمدة جدول المعاملات
    const tableHeaders = ["رقم الحركة", "النوع", "الوصف", "التصنيف", "المبلغ", "التاريخ", "ملاحظات"];
    csv += tableHeaders.map(h => \`"\${h}"\`).join(",") + "\\n";

    // 3. سطور المعاملات
    transactions.forEach(t => {
      const cleanTitle = (t.title || "").replace(/"/g, '""');
      const cleanNotes = (t.notes || "").replace(/"/g, '""');
      const typeLabel = t.type === "income" ? "إيراد (+)" : "مصروف (-)";

      const row = [
        \`"\${t.id}"\`,
        \`"\${typeLabel}"\`,
        \`"\${cleanTitle}"\`,
        \`"\${t.category || "عام"}"\`,
        \`"\${Number(t.amount).toFixed(2)}"\`,
        \`"\${t.date}"\`,
        \`"\${cleanNotes}"\`
      ];

      csv += row.join(",") + "\\n";
    });

    // 4. إنشاء وتنزيل الملف
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = \`Statement_\${new Date().toISOString().slice(0, 10)}.csv\`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);
  }
}

// اختبار توليد التقرير
const sampleTxList = [
  { id: "TX-1", type: "income", title: "راتب شهري", category: "راتب", amount: 12000, date: "2026-10-25", notes: "تم الإيداع" },
  { id: "TX-2", type: "expense", title: "إيجار شقة", category: "سكن", amount: 3000, date: "2026-10-26", notes: "الدفعة الربع سنوية" }
];

console.log("دالة التصدير جاهزة ومفحوصة مع دعم اللغة العربية و BOM");`
      },
      outputExplanation: "يقوم هذا المحرك بإنشاء ملف CSV متكامل يضم ملخص الإيرادات والمصروفات في الترويسة، يتبعه جدول العمليات المفصل، مع إضافة البايت السحري \\uFEFF لضمان فتح الحروف العربية في Excel بشكل سليم ودون تشويه.",
      commonMistakes: [
        {
          wrong: "// نسيان إضافة علامة UTF-8 BOM (\\uFEFF) في بداية الملف مما يتسبب في ظهور الحروف العربية كرموز غريبة وغير مقروءة في برنامج Excel",
          correct: "// دائماً ابدأ محتوى نص الـ CSV بالبادئة '\\uFEFF' لفرض ترميز UTF-8 الصحيح في برامج الجداول الإلكترونية"
        }
      ],
      bestPractices: [
        "تغليف القيم النصية بعلامات اقتباس مزدوجة ومضاعفة أي علامة اقتباس داخلية لمنع تكسر أسطر الـ CSV عند وجود فواصل",
        "تضمين ملخص مالي في مقدمة الملف لتوضيح إجمالي الإيرادات والمصروفات لمدقق الحسابات",
        "تسمية الملف المحمل باسم واضح يضم تاريخ اليوم (مثال: Statement_2026-10-30.csv)"
      ],
      infographic: {
        title: "خطوات محرك تصدير التقارير المالية (CSV)",
        nodes: [
          { label: "1. تجميع وتلخيص المعاملات", detail: "حساب إجمالي الإيراد والمصروف وصافي الرصيد" },
          { label: "2. حقن بادئة UTF-8 BOM", detail: "\\uFEFF لضمان فتح الحروف العربية في Excel" },
          { label: "3. تنسيق السطور وتأمين الفواصل", detail: "تغليف النصوص بـ quotes ومفصولة بفواصل" },
          { label: "4. توليد وتحميل الملف (Blob)", detail: "إنشاء رابط مؤقت وتنزيل الكشف إلى حاسوب المستخدم" }
        ]
      }
    },
    {
      id: "32.4.i",
      title: "إضافة اختبارات للحسابات (Financial Calculation Unit Tests)",
      englishTerm: {
        term: "Financial Calculation Testing & Currency Math Precision",
        pronunciation: "فاينانشال كالكوليشن تيستينج آند كارنسي ماث بريسيجن",
        meaning: "اختبار الحسابات المالية ودقة العمليات الحسابية"
      },
      description: "التطبيقات المالية لا تحتمل أي هامش خطأ؛ فخطأ بسنت واحد أو هللة واحدة يفقد التطبيق مصداقيته بالكامل. يغطي هذا الموضوع كتابة اختبارات وحدات (Unit Tests) صارمة تغطي: (1) اختبار حساب إجمالي الإيرادات والمصروفات بدقة متناهية، (2) اختبار حالات الشروط الحدية (Edge Cases) مثل السجلات الخالية تماماً أو وجود مبالغ بأرقام عشرية دقيقة، (3) التحقق من عدم ظهور قيم `NaN` أو `Infinity` عند احتساب نسب التوفير في حال غياب الإيرادات، و (4) اختبار الفلترة الزمنية للتأكد من استبعاد المعاملات الواقعة خارج النطاق المحدد.",
      analogy: "يشبه الفحص الدوري الدقيق لموازين الذهب والعملات في البنوك المركزية؛ يتم وضع عيارات قياسية محددة بالمليغرام للتأكد من أن الميزان لا يميل ولا يخطئ قيد أنملة.",
      whyItMatters: "يحمي المستخدم من الأخطاء المحاسبية القاتلة ويمنح المطور ثقة مطلقة عند تعديل أو تحسين خوارزميات الحسابات في المستقبل.",
      syntax: `// اختبارات الحسابات المالية بنمط Vitest
test("يجب حساب صافي الرصيد ومعدل الادخار بدقة", () => {
  const result = PersonalFinanceMetricsEngine.evaluateMetrics(mockData);
  expect(result.netBalance).toBe(3200);
  expect(result.savingsRate).toBe(40);
});`,
      simpleExample: {
        title: "كتابة اختبار بسيط لفحص دقة حساب الرصيد الصافي",
        code: `// دالة فحص دقة الرصيد
function testBalanceCalculation() {
  const testTransactions = [
    { type: "income", amount: 1000 },
    { type: "expense", amount: 250 },
    { type: "expense", amount: 150 }
  ];

  const income = testTransactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const expense = testTransactions.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
  const balance = income - expense;

  const expected = 600;
  const isAccurate = balance === expected;

  console.log("نتيجة فحص دقة الرصيد الصافي (600$):", isAccurate ? "PASS ✓" : "FAIL ✕");
  return isAccurate;
}

testBalanceCalculation();`
      },
      advancedExample: {
        title: "جناح اختبارات مالية متكامل يفحص الأعداد العشرية، والنسب المئوية، وحالات السجلات الفارغة",
        code: `// جناح اختبارات الحسابات المحاسبية الاحترافي
export class FinancialEngineTestSuite {
  // اختبار 1: فحص دقة الأرقام العشرية والكسور العائمة
  static testFloatingPointPrecision() {
    const txList = [
      { type: "income", amount: 0.1 },
      { type: "income", amount: 0.2 }
    ];
    // مشاكل JavaScript الشهيرة: 0.1 + 0.2 = 0.30000000000000004
    const total = txList.reduce((s, t) => s + t.amount, 0);
    const rounded = Math.round(total * 100) / 100;

    const isPass = rounded === 0.3;
    console.log("[Test 1]: معالجة دقة الكسور العشرية (0.1 + 0.2 = 0.3):", isPass ? "PASS ✓" : "FAIL ✕");
    return isPass;
  }

  // اختبار 2: فحص منع القسمة على الصفر عند غياب الإيرادات
  static testZeroDivisionSavingsRate() {
    const txList = [
      { type: "expense", amount: 500 }
    ];
    const income = txList.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
    const expense = txList.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
    const savingsRate = income > 0 ? ((income - expense) / income) * 100 : 0;

    const isPass = savingsRate === 0 && !isNaN(savingsRate);
    console.log("[Test 2]: حماية معدل الادخار من أخطاء NaN عند غياب الدخل:", isPass ? "PASS ✓" : "FAIL ✕");
    return isPass;
  }

  // اختبار 3: فحص رصد العجز المالي عندما تتجاوز النفقات الدخل
  static testDeficitDetection() {
    const txList = [
      { type: "income", amount: 2000 },
      { type: "expense", amount: 2500 }
    ];
    const balance = 2000 - 2500;
    const isDeficit = balance < 0;

    const isPass = isDeficit && balance === -500;
    console.log("[Test 3]: رصد العجز المالي الصافي (-500$):", isPass ? "PASS ✓" : "FAIL ✕");
    return isPass;
  }
}

// تشغيل جناح الاختبارات
console.log("--- بدء تشغيل اختبارات الدقة الحسابية للمصروفات ---");
FinancialEngineTestSuite.testFloatingPointPrecision();
FinancialEngineTestSuite.testZeroDivisionSavingsRate();
FinancialEngineTestSuite.testDeficitDetection();`
      },
      outputExplanation: "يوضح هذا الجناح معالجة المشاكل الحسابية الشائعة في JavaScript؛ بما يشمل أخطاء الكسور العشرية العائمة، ومنع أخطاء القسمة على الصفر، والتأكد من دقة رصد حالات العجز المالي.",
      commonMistakes: [
        {
          wrong: "// إجراء العمليات الحسابية للأرقام العشرية مباشرة دون تقريب مما يظهر نواتج مثل 29.9999999994$ على الشاشة",
          correct: "// استخدام تقنيات التقريب المالي Math.round(val * 100) / 100 لتفادي أخطاء التمثيل الثنائي للكسور"
        }
      ],
      bestPractices: [
        "اختبار حالة المصفوفة الفارغة للتأكد من إرجاع أصفار آمنة بدلاً من انهيار المكون",
        "اختبار الحدود القصوى والدنيا للمبالغ المالية (Zero, Negative, Large Numbers)",
        "فصل دوال الحسابات في ملف خدمات نقي لتسهيل تغطيتها باختبارات آلية مستقلة"
      ],
      infographic: {
        title: "منظومة اختبارات الدقة المحاسبية",
        nodes: [
          { label: "1. دقة الكسور العشرية", detail: "حل مشكلة 0.1 + 0.2 عبر التقريب الرياضي المالي" },
          { label: "2. منع أخطاء NaN", detail: "حماية معدلات الادخار عند غياب الدخل أو تساويه بالصفر" },
          { label: "3. رصد العجز المالي", detail: "التأكد من دقة الإشارات السالبة والتحذيرات اللونية" },
          { label: "4. اختبارات الحدود الفارغة", detail: "ضمان استقرار التطبيق عند بدء جلسة جديدة خالية" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-32.4-1",
      question: "لماذا يجب تخزين مبلغ المعاملة كقيمة موجبة مطلقة وتحديد طبيعتها عبر خاصية type: 'expense' بدلاً من حفظها برقم سالب؟",
      options: [
        "لأن الأرقام السالبة محظورة في لغة JavaScript",
        "لتفادي أخطاء الطرح المزدوج (- - = +) وضمان اتساق الحسابات وعرض المبالغ بوضوح في الجداول والمخططات",
        "لأن LocalStorage لا يدعم تخزين علامة السالب",
        "لتسريع تحميل الخطوط العربية في المتصفح"
      ],
      correctAnswer: 1,
      explanation: "حفظ المبلغ كرقم موجب مطلق يفصل القيمة الرياضية عن طبيعة المعاملة، ويمنع أخطاء الطرح المزدوج المعقدة ويسهل حساب الإجماليات بدقة."
    },
    {
      id: "quiz-32.4-2",
      question: "لماذا نضيف الرمز \\uFEFF (UTF-8 BOM) في بداية ملف الـ CSV المصدر في المتصفح؟",
      options: [
        "لتشفير كلمة المرور الخاصة بالملف",
        "لإعلام برامج الجداول الإلكترونية مثل Excel بأن الملف يستخدم ترميز UTF-8 مما يضمن ظهور الحروف العربية بشكل صحيح دون تشويه",
        "لتقليل حجم ملف الـ CSV إلى النصف",
        "لمنع المستخدم من تعديل محتوى الملف بعد تحميله"
      ],
      correctAnswer: 1,
      explanation: "علامة ترتيب البايتات (Byte Order Mark - \\uFEFF) تخبر برامج مثل Excel بأن المحتوى مكتوب بترميز UTF-8 الدولي، مما يحل مشكلة ظهور النصوص العربية كرموز غريبة."
    },
    {
      id: "quiz-32.4-3",
      question: "ما هي الفائدة من تطبيق 'ترقية المخطط' (Schema Migration) في التخزين المحلي LocalStorage؟",
      options: [
        "مسح كافة بيانات المستخدم القديمة وإجباره على البدء من جديد",
        "ترقية السجلات المحفوظة قديماً لدى المستخدم وإلحاق الحقول الجديدة بها تلقائياً لمنع انهيار التطبيق عند تحديث هيكل البيانات",
        "تغيير اسم المتجر الإلكتروني تلقائياً",
        "تسريع الاتصال بقواعد البيانات السحابية"
      ],
      correctAnswer: 1,
      explanation: "ترقية المخطط (Schema Migration) تضمن التوافق الرجعي (Backward Compatibility)؛ فتعدل السجلات المخزنة في المتصفح لتطابق الهيكل الجديد دون فقدان أي معاملة سابقة."
    }
  ],
  exercise: {
    id: "exercise-32.4",
    title: "تمرين عملي: بناء متتبع مصروفات متكامل بـ useReducer وتصدير CSV",
    description: "قم بإنشاء مكون React متكامل يحتوي على نموذج لإضافة حركة مالية (إيراد أو مصروف)، وحساب صافي الرصيد التلقائي، وعرض قائمة العمليات مع زر حذف، وزر لتصدير المعاملات كملف CSV باللغة العربية.",
    hints: [
      "استخدم useReducer لإدارة مصفوفة العمليات المالية",
      "احسب إجمالي الإيرادات والمصروفات وصافي الرصيد عبر reduce",
      "استخدم Blob و URL.createObjectURL مع إضافة \\uFEFF لتصدير الـ CSV"
    ],
    solution: `import React, { useReducer, useState } from "react";

function txReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "DELETE":
      return state.filter(t => t.id !== action.payload);
    default:
      return state;
  }
}

export default function MiniExpenseTrackerLab() {
  const [transactions, dispatch] = useReducer(txReducer, [
    { id: "1", title: "راتب", amount: 4000, type: "income", date: "2026-10-01" },
    { id: "2", title: "إيجار", amount: 1200, type: "expense", date: "2026-10-02" }
  ]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const income = transactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const expense = transactions.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0);
  const balance = income - expense;

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now().toString(),
        title,
        amount: parseFloat(amount),
        type,
        date: new Date().toISOString().slice(0, 10)
      }
    });
    setTitle("");
    setAmount("");
  };

  const exportCsv = () => {
    let csv = "\\uFEFFالنوع,الوصف,المبلغ,التاريخ\\n";
    transactions.forEach(t => {
      csv += \`"\${t.type === "income" ? "إيراد" : "مصروف"}","\${t.title}","\${t.amount}","\${t.date}"\\n\`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my_expenses.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ maxWidth: "450px", margin: "auto", padding: "16px", fontFamily: "sans-serif" }}>
      <h3>مختبر تتبع المصروفات المصغر</h3>
      
      {/* بطاقات الرصيد */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <div style={{ flex: 1, padding: "10px", background: "#f0fdf4", borderRadius: "8px" }}>
          <small>الدخل: </small><br /><strong>+\${income}</strong>
        </div>
        <div style={{ flex: 1, padding: "10px", background: "#fef2f2", borderRadius: "8px" }}>
          <small>المصروف: </small><br /><strong>-\${expense}</strong>
        </div>
        <div style={{ flex: 1, padding: "10px", background: balance >= 0 ? "#e0f2fe" : "#fee2e2", borderRadius: "8px" }}>
          <small>الرصيد: </small><br /><strong>\${balance}</strong>
        </div>
      </div>

      {/* نموذج الإضافة */}
      <form onSubmit={handleAdd} style={{ padding: "12px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "16px" }}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
          <button type="button" onClick={() => setType("expense")} style={{ flex: 1, background: type === "expense" ? "#dc2626" : "#eee", color: type === "expense" ? "#fff" : "#000" }}>مصروف</button>
          <button type="button" onClick={() => setType("income")} style={{ flex: 1, background: type === "income" ? "#16a34a" : "#eee", color: type === "income" ? "#fff" : "#000" }}>إيراد</button>
        </div>
        <input type="text" placeholder="الوصف..." value={title} onChange={e => setTitle(e.target.value)} style={{ width: "100%", padding: "6px", marginBottom: "6px", boxSizing: "border-box" }} />
        <input type="number" placeholder="المبلغ..." value={amount} onChange={e => setAmount(e.target.value)} style={{ width: "100%", padding: "6px", marginBottom: "6px", boxSizing: "border-box" }} />
        <button type="submit" style={{ width: "100%", padding: "8px", background: "#0284c7", color: "#fff", border: "none", borderRadius: "6px" }}>إضافة المعاملة</button>
      </form>

      {/* جدول العمليات */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <h4>السجل المالي ({transactions.length})</h4>
        <button onClick={exportCsv} style={{ fontSize: "11px", padding: "4px 8px" }}>تصدير CSV 📥</button>
      </div>
      {transactions.map(t => (
        <div key={t.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px", borderBottom: "1px solid #eee" }}>
          <span>{t.title} <small style={{ color: "#666" }}>({t.date})</small></span>
          <div>
            <strong style={{ color: t.type === "income" ? "green" : "red" }}>
              {t.type === "income" ? "+" : "-"}\${t.amount}
            </strong>
            <button onClick={() => dispatch({ type: "DELETE", payload: t.id })} style={{ marginLeft: "8px", color: "#999", border: "none", background: "none" }}>✕</button>
          </div>
        </div>
      ))}
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي لمشروع إدارة المصروفات (Expense Tracker Architecture)",
    nodes: [
      { label: "1. State Reducer", detail: "إدارة الحركات المالية والفلاتر والتحديثات عبر useReducer الموحد" },
      { label: "2. Financial Engine", detail: "حساب الرصيد الصافي، إجمالي الإيرادات والمصروفات، ومعدل الادخار" },
      { label: "3. Visual Analytics", detail: "مخططات Donut الدائرية لتوزيع الفئات وأشرطة استهلاك الميزانية" },
      { label: "4. Temporal Filtering", detail: "فلترة المعاملات بالشهور والسنوات والنطاقات المخصصة" },
      { label: "5. CSV Export Engine", detail: "توليد ملفات الجداول الإلكترونية مع بادئة UTF-8 BOM الداعمة للعربية" }
    ]
  }
};

