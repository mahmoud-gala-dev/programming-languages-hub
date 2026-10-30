// src/data/sections/section32/section32Meta.js
// القسم 32: مشاريع تطبيقية للمستوى المتوسط - البيانات الوصفية والاستوديو الشامل

export const section32Meta = {
  summary: {
    title: "الخلاصة المعمارية للمشاريع التطبيقية للمستوى المتوسط",
    description: "يمثل هذا القسم الانتقال النوعي من التطبيقات البسيطة إلى بناء منصات برمجية ناضجة تحاكي متطلبات الشركات الناشئة والمؤسسات الرقمية. من خلال إنجاز المشاريع الأربعة (المتجر الإلكتروني، لوحة التحكم التحليلية، نظام إدارة المستخدمين، وتطبيق تتبع المصروفات والميزانية)، تبلورت ثماني ركائز هندسية متقدمة.",
    rules: [
      {
        rule: "1. الفصل الصارم بين حالة الخادم وحالة العميل (Server vs Client State)",
        detail: "استخدم TanStack Query لإدارة بيانات الخادم والكاش والمزامنة التلقائية، واستخدم Zustand أو useReducer لإدارة الحالات التفاعلية للواجهة مثل السلة والمسودات."
      },
      {
        rule: "2. اعتماد نمط الجداول بدون واجهة (Headless UI Tables)",
        detail: "افصل منطق الفرز والترقيم والفلترة عن طبقة العرض البصرية باستخدام TanStack Table؛ مما يمنحك مرونة مطلقة في تصميم الـ HTML والتوافق الكامل مع الـ RTL و Tailwind."
      },
      {
        rule: "3. التحقق القائم على المخططات الصارمة (Schema-first Validation)",
        detail: "اكتب مخططات Zod المنفصلة لتحديد قواعد صحة البيانات، وادمجها مع React Hook Form لضمان أداء فائق دون إعادات رندر مفرطة مع كل ضغطة مفتاح."
      },
      {
        rule: "4. الترقية الآمنة لبيانات التخزين (LocalStorage Schema Migration)",
        detail: "ضمّن رقم إصدار (version) مع كل كائن تخزين محلي؛ لترقية السجلات المحفوظة مسبقاً لدى المستخدمين تلقائياً عند إضافة حقول جديدة في التحديثات اللاحقة."
      },
      {
        rule: "5. تأمين الإجراءات التدميرية (Destructive Action Safeguards)",
        detail: "لا تنفذ أي حذف نهائي للحسابات أو البيانات المالية بنقرة عفوية؛ افرض استخدام نوافذ تأكيد تحذيرية تشترط مطابقة اسم المستخدم لفك قفل زر الحذف."
      },
      {
        rule: "6. دعم اللغة العربية في تصدير البيانات (UTF-8 BOM in CSV)",
        detail: "احرص دائماً على حقن علامة ترتيب البايتات (\\uFEFF) في مقدمة ملفات الـ CSV المولدة في المتصفح لضمان فتح الحروف العربية في Microsoft Excel دون تشويه."
      },
      {
        rule: "7. تجنب العمليات الحسابية العائمة (Floating-point Precision)",
        detail: "عالج مشكلة جمع وطرح الكسور العشرية في JavaScript عبر التقريب المالي Math.round(val * 100) / 100 لضمان دقة الفواتير حتى الهللة والسنت الأخير."
      },
      {
        rule: "8. الهيكل العام الثابت مع التمرير الداخلي (App Shell Architecture)",
        detail: "ثبت شريط التنقل الجانبي والعلوي بقفل overflow-hidden على الحاوية الكبرى، واجعل التمرير الداخلي مقصوراً على منطقة المحتوى المركزية لثبات بصري ممتاز."
      }
    ]
  },
  cheatSheet: {
    title: "جدول المقارنة والمرجع السريع للمشاريع التطبيقية المتوسطة",
    description: "مقارنة معمارية وهندسية شاملة بين المشاريع الأربعة تغطي أدوات إدارة الحالة، وحزم الواجهات، والتحديات الرياضية، وحلول الأداء والتصدير.",
    headers: ["المشروع المتوسط", "النمط المعماري الأساسي", "إدارة الحالة (State)", "أدوات المعالجة والتحقق", "التحدي التقني المحوري", "أفضل الممارسات المطبقة"],
    rows: [
      [
        "1. المتجر الإلكتروني (E-commerce)",
        "Catalog & Cart Engine",
        "Zustand مع التخزين الدائم (persist)",
        "REST API, Debounced Search",
        "حساب الضريبة والخصومات والشحن وفحص المخزون",
        "حفظ السلة محلياً، والتراجع السريع، ومحاكاة الدفع البنكي"
      ],
      [
        "2. لوحة التحكم (Dashboard)",
        "App Shell & Data Analytics",
        "React Router + Context / Zustand",
        "Recharts + TanStack Table",
        "معالجة الرسوم البيانية التفاعلية والجداول سريعة الفرز",
        "دعم الوضع الداكن الشامل، والدرج الجانبي للهواتف، وبطاقات KPI"
      ],
      [
        "3. إدارة المستخدمين (User Management)",
        "Server-driven CRUD System",
        "TanStack Query (React Query)",
        "React Hook Form + Zod Schema",
        "إبطال الكاش فورياً بعد الطفرات والتحقق الصارم من الحقول",
        "نوافذ الحذف التدميرية المشروطة وهياكل عظمية Skeleton متحركة"
      ],
      [
        "4. تتبع المصروفات (Expense Tracker)",
        "Accounting Ledger Engine",
        "useReducer الموحد للعمليات والفلاتر",
        "SVG Donut Charts, CSV Engine",
        "معالجة دقة الكسور العشرية وترقية مخططات التخزين",
        "تصدير كشوف الحسابات بـ UTF-8 BOM، واحتساب معدل الادخار"
      ],
      [
        "مكتبات النماذج والتحقق",
        "Controlled vs Uncontrolled",
        "Uncontrolled via Refs",
        "Zod Schema Resolvers",
        "منع إعادات الرندر الزائدة مع الحفاظ على رسائل خطأ دقيقة",
        "التحقق عند حدث onBlur لتوفير تجربة هادئة ومريحة"
      ],
      [
        "الجداول وعرض البيانات",
        "Headless Architecture",
        "TanStack Table Core Models",
        "Pagination, Sorting, Filtering",
        "التعامل مع آلاف السجلات دون هبوط في معدل الإطارات (FPS)",
        "حساب الشريحة الحالية محلياً أو عبر الخادم وضبط الأزرار"
      ],
      [
        "الأمان والموثوقية المالية",
        "Defensive Programming",
        "Immutable State Updates",
        "Financial Math Precision",
        "منع أخطاء NaN والقسمة على الصفر والأرقام السالبة",
        "تغطية الحسابات والعمليات باختبارات تكاملية صارمة بـ RTL"
      ]
    ]
  },
  capstoneProject: {
    id: "capstone-32",
    title: "المشروع التطبيقي الجامع: منصة الأعمال المتوسطة المتكاملة (Intermediate Projects Arena Pro)",
    description: "منظومة تفاعلية جامعة تدمج المشاريع الأربعة المتقدمة للمستوى المتوسط في بيئة تشغيلية موحدة؛ تشمل المتجر الإلكتروني بالسلة التفاعلية، لوحة التحكم التحليلية ببطاقات KPI ومخططات SVG، نظام إدارة المستخدمين مع التحقق، واستوديو تتبع المصروفات مع ميزة تصدير الـ CSV الحقيقية المباشرة.",
    features: [
      "مبدل مشاريع رباعي متطور ينقل المشرف بين 4 أنظمة أعمال مستقلة ومتزامنة بنقرة واحدة",
      "محاكي بيانات متقدم يغطي سلة التسوق، الرسوم البيانية، سجل الموظفين، والدفتر المالي",
      "محرك تصدير CSV حقيقي ومباشر باللغة العربية يقوم بتنزيل ملفات حقيقية للمتصفح",
      "تطبيق حي لمبادئ Zustand و useReducer و Headless Tables في واجهة موحدة",
      "توافق تام مع الوضعين المظلم والفاتح والأجهزة المكتبية والمحمولة"
    ],
    code: `import React, { useState, useReducer, useMemo } from "react";

// ==========================================
// 1. نظام المتجر الإلكتروني المصغر
// ==========================================
const STORE_PRODUCTS = [
  { id: 1, title: "شاشة ألعاب 4K منحنية", price: 499, category: "شاشات", inStock: true },
  { id: 2, title: "سماعات محيطية لاسلكية", price: 149, category: "صوتيات", inStock: true },
  { id: 3, title: "لوحة مفاتيح ميكانيكية RGB", price: 89, category: "إكسسوارات", inStock: true }
];

function MiniEcommerceProject() {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const addToCart = (p) => {
    setCart(prev => {
      const found = prev.find(i => i.id === p.id);
      if (found) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0));
  };

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SAVE10") {
      setDiscountPercent(10);
      alert("تم تفعيل خصم 10% بنجاح!");
    } else {
      alert("كود غير صالح! جرب: SAVE10");
    }
  };

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = (subtotal * discountPercent) / 100;
  const tax = (subtotal - discount) * 0.15;
  const total = subtotal - discount + tax;

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 font-sans">
      <div className="text-xs font-bold text-slate-400 mb-4 text-center">مشروع 1: المتجر الإلكتروني وسلة التسوق الذكية</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {STORE_PRODUCTS.map(p => (
          <div key={p.id} className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
            <div>
              <div className="text-xs text-sky-500 font-bold mb-1">{p.category}</div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white mb-2">{p.title}</h4>
              <div className="text-base font-black text-slate-800 dark:text-slate-200 mb-3">\${p.price}</div>
            </div>
            <button onClick={() => addToCart(p)} className="w-full py-2 bg-slate-900 text-white dark:bg-sky-600 rounded-xl text-xs font-bold hover:opacity-90 transition">
              🛒 أضف للسلة
            </button>
          </div>
        ))}
      </div>

      {/* تفاصيل السلة */}
      <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
        <h4 className="font-bold text-xs text-slate-900 dark:text-white mb-3">سلة المشتريات ({cart.length})</h4>
        {cart.length === 0 ? (
          <p className="text-xs text-slate-400">السلة خالية حالياً.</p>
        ) : (
          <div className="space-y-2 mb-4">
            {cart.map(i => (
              <div key={i.id} className="flex justify-between items-center text-xs border-b border-slate-100 dark:border-slate-700/60 pb-2">
                <span>{i.title} (\${i.price} x {i.qty})</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(i.id, -1)} className="px-2 bg-slate-100 dark:bg-slate-700 rounded">-</button>
                  <span className="font-bold">{i.qty}</span>
                  <button onClick={() => updateQty(i.id, 1)} className="px-2 bg-slate-100 dark:bg-slate-700 rounded">+</button>
                  <strong className="mr-2">\${i.price * i.qty}</strong>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="pt-3 border-t border-slate-200 dark:border-slate-700 text-xs space-y-1 text-slate-600 dark:text-slate-300">
            <div className="flex gap-2 mb-3">
              <input type="text" placeholder="كود الخصم (SAVE10)" value={coupon} onChange={e => setCoupon(e.target.value)} className="p-1.5 text-xs rounded-lg border flex-1" />
              <button onClick={applyCoupon} className="px-3 bg-sky-600 text-white rounded-lg font-bold">تطبيق</button>
            </div>
            <div className="flex justify-between"><span>المجموع الفرعي:</span><span>\${subtotal.toFixed(2)}</span></div>
            {discount > 0 && <div className="flex justify-between text-emerald-600 font-bold"><span>الخصم (10%):</span><span>-\${discount.toFixed(2)}</span></div>}
            <div className="flex justify-between"><span>ضريبة 15%:</span><span>\${tax.toFixed(2)}</span></div>
            <div className="flex justify-between font-black text-sm text-slate-900 dark:text-white pt-1 border-t">
              <span>الإجمالي النهائي:</span><span>\${total.toFixed(2)}</span>
            </div>
            <button onClick={() => { alert("تمت محاكاة عملية الدفع بنجاح!"); setCart([]); setDiscountPercent(0); }} className="w-full mt-3 py-2.5 bg-emerald-600 text-white rounded-xl font-bold">
              تأكيد الدفع 💳
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 2. نظام لوحة التحكم التحليلية المصغرة
// ==========================================
function MiniDashboardProject() {
  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 font-sans">
      <div className="text-xs font-bold text-slate-400 mb-4 text-center">مشروع 2: لوحة التحكم التحليلية وبطاقات KPI</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <small className="text-slate-400 text-xs">إجمالي الإيرادات</small>
          <div className="text-2xl font-black text-slate-900 dark:text-white my-1">\$124,500</div>
          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">↑ +14.2% نمو</span>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <small className="text-slate-400 text-xs">الطلبات المسجلة</small>
          <div className="text-2xl font-black text-slate-900 dark:text-white my-1">1,820</div>
          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">↑ +8.5% نشاط</span>
        </div>
        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
          <small className="text-slate-400 text-xs">المستخدمين النشطين</small>
          <div className="text-2xl font-black text-slate-900 dark:text-white my-1">9,410</div>
          <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-2 py-0.5 rounded-full">✓ مستقر</span>
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
        <h4 className="font-bold text-xs text-slate-900 dark:text-white mb-3">رسم بياني مساحي للتدفق الأسبوعي</h4>
        <div className="h-32 flex items-end gap-3 pt-6 border-b border-slate-200 dark:border-slate-700">
          {[40, 65, 55, 80, 95, 75, 100].map((h, i) => (
            <div key={i} style={{ height: \`\${h}%\` }} className="flex-1 bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-lg transition hover:opacity-80" />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-slate-400 mt-2">
          <span>السبت</span><span>الأحد</span><span>الإثنين</span><span>الثلاثاء</span><span>الأربعاء</span><span>الخميس</span><span>الجمعة</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. نظام إدارة المستخدمين والصلاحيات المصغر
// ==========================================
function MiniUserManagerProject() {
  const [users, setUsers] = useState([
    { id: "1", name: "د. عبد العزيز الفهد", email: "fahad@system.io", role: "Admin", active: true },
    { id: "2", name: "سارة القحطاني", email: "sara@system.io", role: "Editor", active: true }
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (name.length < 3 || !email.includes("@")) {
      alert("الاسم 3 أحرف على الأقل والبريد يجب أن يحتوي @");
      return;
    }
    setUsers([...users, { id: Date.now().toString(), name, email, role: "Viewer", active: true }]);
    setName("");
    setEmail("");
  };

  const deleteUser = (id) => {
    if (window.confirm("هل أنت متأكد من رغبتك في حذف هذا الحساب؟")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 font-sans">
      <div className="text-xs font-bold text-slate-400 mb-4 text-center">مشروع 3: نظام إدارة المستخدمين والصلاحيات</div>
      <form onSubmit={addUser} className="flex flex-col sm:flex-row gap-2 mb-4">
        <input type="text" placeholder="الاسم الكامل..." value={name} onChange={e => setName(e.target.value)} className="p-2 text-xs rounded-xl border flex-1" />
        <input type="email" placeholder="البريد..." value={email} onChange={e => setEmail(e.target.value)} className="p-2 text-xs rounded-xl border flex-1" />
        <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold">إضافة</button>
      </form>

      <div className="space-y-2">
        {users.map(u => (
          <div key={u.id} className="p-3 bg-white dark:bg-slate-800 rounded-xl border flex justify-between items-center text-xs">
            <div>
              <div className="font-bold text-slate-900 dark:text-white">{u.name}</div>
              <div className="text-[10px] text-slate-400">{u.email} • {u.role}</div>
            </div>
            <button onClick={() => deleteUser(u.id)} className="text-rose-500 font-bold hover:underline">حذف 🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 4. نظام تتبع المصروفات وتصدير CSV المصغر
// ==========================================
function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD": return [action.payload, ...state];
    case "DEL": return state.filter(t => t.id !== action.payload);
    default: return state;
  }
}

function MiniExpenseTrackerProject() {
  const [items, dispatch] = useReducer(expenseReducer, [
    { id: "1", title: "راتب شهري", amount: 9000, type: "income", date: "2026-10-01" },
    { id: "2", title: "إيجار شقة", amount: 2500, type: "expense", date: "2026-10-02" },
    { id: "3", title: "فواتير كهرباء وإنترنت", amount: 450, type: "expense", date: "2026-10-05" }
  ]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const income = items.filter(i => i.type === "income").reduce((s, i) => s + i.amount, 0);
  const expense = items.filter(i => i.type === "expense").reduce((s, i) => s + i.amount, 0);
  const balance = income - expense;

  const addTx = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    dispatch({
      type: "ADD",
      payload: { id: Date.now().toString(), title, amount: parseFloat(amount), type, date: new Date().toISOString().slice(0, 10) }
    });
    setTitle("");
    setAmount("");
  };

  const exportCsv = () => {
    let csv = "\\uFEFFالنوع,الوصف,المبلغ,التاريخ\\n";
    items.forEach(t => {
      csv += \`"\${t.type === "income" ? "إيراد" : "مصروف"}","\${t.title}","\${t.amount}","\${t.date}"\\n\`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Statement_Pro_2026.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 font-sans">
      <div className="text-xs font-bold text-slate-400 mb-4 text-center">مشروع 4: متتبع المصروفات والميزانية مع تصدير CSV</div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
        <div className="p-3 bg-emerald-50 rounded-xl text-emerald-800 font-bold">+\${income}<br /><span className="text-[10px] font-normal">إيرادات</span></div>
        <div className="p-3 bg-rose-50 rounded-xl text-rose-800 font-bold">-\${expense}<br /><span className="text-[10px] font-normal">مصروفات</span></div>
        <div className="p-3 bg-sky-50 rounded-xl text-sky-800 font-bold">\${balance}<br /><span className="text-[10px] font-normal">الرصيد الصافي</span></div>
      </div>

      <form onSubmit={addTx} className="p-3 bg-white dark:bg-slate-800 rounded-2xl border mb-4 space-y-2">
        <div className="flex gap-2">
          <button type="button" onClick={() => setType("expense")} className={\`flex-1 py-1 rounded-lg text-xs font-bold \${type === "expense" ? "bg-rose-500 text-white" : "bg-slate-100"}\`}>مصروف</button>
          <button type="button" onClick={() => setType("income")} className={\`flex-1 py-1 rounded-lg text-xs font-bold \${type === "income" ? "bg-emerald-500 text-white" : "bg-slate-100"}\`}>إيراد</button>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="الوصف..." value={title} onChange={e => setTitle(e.target.value)} className="p-2 text-xs rounded-xl border flex-1" />
          <input type="number" placeholder="المبلغ..." value={amount} onChange={e => setAmount(e.target.value)} className="p-2 text-xs rounded-xl border w-28" />
        </div>
        <button type="submit" className="w-full py-2 bg-slate-900 text-white dark:bg-sky-600 rounded-xl text-xs font-bold">قيد المعاملة</button>
      </form>

      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-slate-400">السجل ({items.length})</span>
        <button onClick={exportCsv} className="text-xs font-bold text-sky-600 hover:underline">تصدير CSV 📥</button>
      </div>

      <div className="space-y-1.5">
        {items.map(t => (
          <div key={t.id} className="p-2.5 bg-white dark:bg-slate-800 rounded-xl border flex justify-between items-center text-xs">
            <span>{t.title} <small className="text-slate-400">({t.date})</small></span>
            <div className="flex items-center gap-3">
              <strong className={t.type === "income" ? "text-emerald-600" : "text-rose-600"}>
                {t.type === "income" ? "+" : "-"}\${t.amount}
              </strong>
              <button onClick={() => dispatch({ type: "DEL", payload: t.id })} className="text-slate-400 hover:text-rose-500">✕</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// المكون الجامع: ساحة المشاريع المتوسطة
// ==========================================
export default function IntermediateProjectsArenaPro() {
  const [currentProject, setCurrentProject] = useState("ecommerce");

  const TABS = [
    { id: "ecommerce", label: "متجر إلكتروني", icon: "🛒" },
    { id: "dashboard", label: "لوحة تحكم", icon: "📊" },
    { id: "users", label: "إدارة مستخدمين", icon: "👥" },
    { id: "expenses", label: "تتبع مصروفات", icon: "💵" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl font-sans">
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full">
          القسم 32: المشاريع التطبيقية للمستوى المتوسط
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
          ساحة المشاريع التطبيقية المتوسطة (Intermediate Arena Pro)
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-1">
          منصة تفاعلية موحدة تجمع المشاريع الأربعة المتوسطة مع إمكانية تجربة السلة، المخططات، المستخدمين، وتصدير ملفات CSV حقيقية.
        </p>
      </div>

      {/* شريط التبديل الرباعي */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setCurrentProject(tab.id)}
            className={\`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition \${
              currentProject === tab.id
                ? "bg-indigo-600 text-white shadow-md scale-105"
                : "bg-slate-100 text-slate-600 dark:bg-slate-850 dark:text-slate-300 hover:bg-slate-200"
            }\`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* منطقة المشروع النشط */}
      <div>
        {currentProject === "ecommerce" && <MiniEcommerceProject />}
        {currentProject === "dashboard" && <MiniDashboardProject />}
        {currentProject === "users" && <MiniUserManagerProject />}
        {currentProject === "expenses" && <MiniExpenseTrackerProject />}
      </div>

      <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
        <div>حالة المنظومة: <strong className="text-emerald-500">جاهزة ونشطة 100%</strong></div>
        <div>المشاريع المدمجة: 4 منصات أعمال متكاملة</div>
        <div>المكتبات والتقنيات: React 19, Zustand, useReducer, TanStack Patterns, CSV Engine</div>
      </div>
    </div>
  );
}
`
  },
  infographic: {
    title: "خارطة المشاريع التطبيقية للمستوى المتوسط (Intermediate Ecosystem)",
    nodes: [
      { label: "1. متجر إلكتروني E-commerce", detail: "سلة تسوق Zustand، قسائم الخصم، حساب الضرائب، ومحاكاة الدفع" },
      { label: "2. لوحة تحكم Dashboard", detail: "هيكل Shell، بطاقات KPI، رسوم بيانية تفاعلية، وجداول TanStack" },
      { label: "3. إدارة المستخدمين User Manager", detail: "التحقق بـ Zod و RHF، إدارة الكاش بـ TanStack Query، ونوافذ الحذف" },
      { label: "4. تتبع المصروفات Expense Tracker", detail: "useReducer المحاسبي، رسوم Donut، ترقية المخططات، وتصدير CSV" }
    ]
  }
};

