// src/data/sections/section10/section10Meta.js
// بيانات القسم 10: الملخص، جدول المرجع السريع، والمشروع المصغر

export const SECTION_10_META = {
  id: "section-10",
  title: "القسم 10: التعامل مع APIs والبيانات الخارجية",
  englishTitle: "Working with APIs, RESTful Architecture & CRUD in React",
  description: "الدليل الشامل للربط بين تطبيقات React والخوادم وقواعد البيانات: معايير RESTful وأفعال HTTP وأكواد الحالة، استهلاك البيانات بـ Fetch API و Axios وإدارة دورة حياة الطلبات (Loading, Error, Empty, Success)، الوقاية الصارمة من تسريب الموارد بـ AbortController وتفادي سباق البيانات (Race Conditions)، تنفيذ عمليات CRUD المكتملة مع التحديث المتفائل (Optimistic Updates) وتأكيد الحذف وإشعارات التوست، وبناء محركات البحث المؤجل (Debounce)، الترقيم، والتمرير اللانهائي (Infinite Scroll).",
  summary: [
    "احترام معايير RESTful: تعامل مع كل كيان كمورد ذي مسار جمعي (/products) واستخدم أفعال HTTP للتعبير عن العمليات: GET للقراءة، POST للإنشاء، PUT/PATCH للتعديل، و DELETE للحذف.",
    "فحص response.ok دائماً في Fetch: دالة fetch الأصلية لا تعتبر أكواد 404 أو 500 كأخطاء شبكية مقذوفة؛ لذا يجب فحص if (!response.ok) يدوياً قبل محاولة فك تشفير JSON.",
    "إدارة الحالات الأربع للواجهة (Life-Cycle States): أي مكون يستهلك API يجب أن يتعامل بوضوح مع أربع حالات منفصلة: حالة التحميل (Loading)، حالة الخطأ (Error)، حالة الفراغ (Empty)، وحالة النجاح (Success).",
    "منع تسريب الموارد عبر AbortController: أرفق دائماً controller.signal بأي طلب شبكي داخل useEffect، ونفذ controller.abort() في دالة التنظيف عند إلغاء تركيب المكون.",
    "الوقاية الصارمة من سباق البيانات (Race Conditions): تجنب استبدال نتائج الطلبات الحديثة بردود طلبات قديمة بطيئة باستخدام نمط متغير الراية (isCurrent flag) أو إلغاء الطلبات السابقة.",
    "التمييز بين التحديث المتشائم والمتفائل: استخدم التحديث المتفائل (Optimistic) للتفاعلات الخفيفة السريعة كالإعجابات وحفظ المسودات، والتحديث المتشائم (Pessimistic) للعمليات المالية والحساسة.",
    "خفض العبء عبر البحث المؤجل (Debounce): لا ترسل طلبات بحث للخادم مع كل نقرة حرف؛ بل أخر الإرسال 300ms إلى 500ms بعد توقف أصابع المستخدم لتوفير 90% من استهلاك الشبكة.",
    "فصل طبقة الـ API عن مكونات العرض (API Layer): اعزل كافة عناوين الـ URL وترويسات التوثيق داخل طبقة خدمات مركزية مستقلة (Services)، واجعل مكونات JSX تركز فقط على رسم وتجربة المستخدم."
  ],
  cheatSheet: [
    {
      concept: "HTTP GET Request",
      syntax: "fetch('/api/products')",
      note: "عملية آمنة و Idempotent لجلب الموارد دون أي تعديل؛ لا تحتوي على جسم body."
    },
    {
      concept: "HTTP POST Request",
      syntax: "fetch('/api/products', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify(data)\n})",
      note: "إنشاء مورد جديد بالكامل؛ تتطلب تحويل الكائن لنص JSON وتعيين Content-Type."
    },
    {
      concept: "HTTP PUT Request",
      syntax: "fetch('/api/products/42', {\n  method: 'PUT',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify(fullObject)\n})",
      note: "استبدال المورد بالكامل؛ يتطلب إرسال كافة حقول الكائن لتجنب محو الحقول المفقودة."
    },
    {
      concept: "HTTP PATCH Request",
      syntax: "fetch('/api/products/42', {\n  method: 'PATCH',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ price: 199 })\n})",
      note: "تعديل جزئي لحقول محددة فقط دون الحاجة لإرسال كامل بيانات الكائن."
    },
    {
      concept: "HTTP DELETE Request",
      syntax: "fetch('/api/products/42', { method: 'DELETE' })",
      note: "حذف المورد المحدد نهائياً؛ عند استلام كود 204 لا تستدعِ .json() لتفادي الخطأ."
    },
    {
      concept: "كود الحالة 200 OK",
      syntax: "if (res.status === 200) { ... }",
      note: "يدل على نجاح تنفيذ الطلب واسترجاع أو تحديث البيانات المطلوبة."
    },
    {
      concept: "كود الحالة 201 Created",
      syntax: "if (res.status === 201) { ... }",
      note: "يدل على نجاح إنشاء مورد جديد، وعادة يرجع الكائن المنشأ مع معرفه الرقمي ID."
    },
    {
      concept: "كود الحالة 204 No Content",
      syntax: "if (res.status === 204) return null;",
      note: "نجاح العملية بدون أي محتوى مرجع (شائع جداً في عمليات الحذف الناجحة DELETE)."
    },
    {
      concept: "كود الحالة 401 Unauthorized",
      syntax: "if (res.status === 401) redirectToLogin();",
      note: "المستخدم مجهول الهوية أو أن رمز التوثيق مفقود أو منتهي الصلاحية."
    },
    {
      concept: "كود الحالة 403 Forbidden",
      syntax: "if (res.status === 403) showPermissionError();",
      note: "المستخدم مسجل دخوله ولكن لا يمتلك الصلاحيات الإدارية الكافية للوصول لهذا المورد."
    },
    {
      concept: "كود الحالة 404 Not Found",
      syntax: "if (res.status === 404) showNotFoundUI();",
      note: "المورد المطلوب بالمعرف المحدد غير موجود في قاعدة البيانات أو أن المسار غير صالح."
    },
    {
      concept: "كود الحالة 422 Unprocessable Entity",
      syntax: "if (res.status === 422) setErrors(await res.json());",
      note: "فشل التحقق من صحة حقول النموذج (Form Validation) في الواجهة الخلفية."
    },
    {
      concept: "كود الحالة 500 Server Error",
      syntax: "if (res.status >= 500) showRetryButton();",
      note: "عطل غير متوقع في الخادم أو انقطاع في قاعدة البيانات؛ يتطلب إتاحة إعادة المحاولة."
    },
    {
      concept: "ترويسة Authorization",
      syntax: "headers: { 'Authorization': 'Bearer ' + token }",
      note: "المعيار العالمي لإرسال رمز الوصول JWT مع كل طلب للتحقق من هوية المستخدم."
    },
    {
      concept: "إلغاء الطلبات بـ AbortController",
      syntax: "const ctl = new AbortController();\nfetch(url, { signal: ctl.signal });\nreturn () => ctl.abort();",
      note: "إيقاف الطلبات المعلقة في الشبكة عند مغادرة الصفحة لمنع تسريب الذاكرة وتحديث حالة ميتة."
    },
    {
      concept: "تأجيل البحث Debounce Pattern",
      syntax: "useEffect(() => {\n  const t = setTimeout(() => search(q), 400);\n  return () => clearTimeout(t);\n}, [q]);",
      note: "تأخير إرسال الطلب حتى تتوقف أصابع المستخدم عن الكتابة بـ 400ms؛ يوفر 90% من استهلاك الشبكة."
    },
    {
      concept: "ترقيم الصفحات Pagination",
      syntax: "GET /api/items?limit=10&skip=(page - 1) * 10",
      note: "جلب أجزاء صغيرة بدلاً من جلب قاعدة البيانات كاملة دفعة واحدة."
    },
    {
      concept: "التمرير اللانهائي IntersectionObserver",
      syntax: "const obs = new IntersectionObserver(([e]) => {\n  if (e.isIntersecting && hasMore) loadMore();\n});",
      note: "مراقبة عنصر حارس أسفل القائمة وتحميل الدفعة التالية تلقائياً عند اقتراب الرؤية."
    },
    {
      concept: "التحديث المتفائل Optimistic Update",
      syntax: "const prev = items;\nsetItems(nextItems);\ntry { await api(); } catch { setItems(prev); }",
      note: "تحديث الواجهة فوراً في 0ms مع حفظ نسخة احتياطية للتراجع الفوري في حال رفض الخادم."
    },
    {
      concept: "الوقاية من سباق البيانات Race Condition",
      syntax: "let isCurrent = true;\napi().then(d => { if (isCurrent) setData(d); });\nreturn () => { isCurrent = false; };",
      note: "تجاهل الردود القديمة المتأخرة وضمان عرض أحدث استدعاء طلبه المستخدم فقط."
    },
    {
      concept: "بناء روابط الاستعلام بأمان",
      syntax: "const qs = new URLSearchParams({ q, page, limit }).toString();",
      note: "تشفير المسافات والرموز الخاصة تلقائياً وتجنب تكسر الروابط."
    },
    {
      concept: "إنشاء عميل Axios مركزي",
      syntax: "const api = axios.create({ baseURL: 'https://...', timeout: 8000 });",
      note: "توحيد المسارات وتعيين مهلة زمنية قصوى وتفعيل معترضات التوثيق التلقائية."
    }
  ],
  miniProject: {
    id: "mini-project-section-10",
    title: "منصة APIFleet Pro: لوحة تحكم وإدارة الموارد التفاعلية المتكاملة",
    englishTitle: "APIFleet Pro: Interactive CRUD, Debounced Search, Pagination & Status Monitor Suite",
    description: "استوديو هندسي تطبيقي متكامل يجمع كافة مهارات القسم العاشر في واجهة واحدة فائقة التطور: محاكاة استدعاءات RESTful حقيقية، حقل بحث مؤجل ذكي (Debounce 350ms) يخفف استهلاك الشبكة، تصفية متعددة المعايير (الأقسام، التوفر في المخزون، والترتيب)، جدول بيانات بصفحات مرقمة ذكية (Pagination)، نموذج إنشاء مورد جديد (POST)، تعديل متفائل لحالة المخزون في 0ms مع التراجع (Optimistic Update)، نافذة تأكيد حذف احترافية لمنع الحوادث العرضية، ونظام إشعارات توست حركي عائم متعدد التنبيهات.",
    code: `import React, { useState, useEffect, useMemo, useCallback } from 'react';

// ==========================================
// 1. المكون الرئيسي: منصة APIFleet Pro
// ==========================================
export function APIFleetPro() {
  // قاعدة بيانات تجريبية تحاكي استجابة الخادم
  const initialProducts = [
    { id: 101, title: 'هاتف ذكي Galaxy Ultra', category: 'smartphones', price: 950, stock: true },
    { id: 102, title: 'حاسوب محمول MacBook Pro 16', category: 'laptops', price: 2300, stock: true },
    { id: 103, title: 'سماعات رأس لاسلكية ANC', category: 'audio', price: 220, stock: false },
    { id: 104, title: 'شاشة ألعاب منحنية 144Hz', category: 'screens', price: 420, stock: true },
    { id: 105, title: 'لوحة مفاتيح ميكانيكية RGB', category: 'accessories', price: 110, stock: true },
    { id: 106, title: 'كاميرا احترافية بدون مرآة', category: 'cameras', price: 1400, stock: false },
    { id: 107, title: 'مكبر صوت ذكي منزلي', category: 'audio', price: 75, stock: true },
    { id: 108, title: 'جهاز لوحي iPad Air M2', category: 'tablets', price: 650, stock: true },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortBy, setSortBy] = useState('price_asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);
  const [isSimulatingNetwork, setIsSimulatingNetwork] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [deleteModalItem, setDeleteModalItem] = useState(null);
  const [newProductForm, setNewProductForm] = useState({ title: '', category: 'accessories', price: '' });
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  // نظام إشعارات التوست
  const addToast = useCallback((msg, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  // تطبيق البحث المؤجل Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1);
    }, 350);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // تصفية وترتيب البيانات
  const processedProducts = useMemo(() => {
    let result = products.filter((p) => {
      if (debouncedSearch.trim() && !p.title.toLowerCase().includes(debouncedSearch.toLowerCase())) {
        return false;
      }
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      if (onlyInStock && !p.stock) {
        return false;
      }
      return true;
    });

    result.sort((a, b) => {
      if (sortBy === 'price_asc') return a.price - b.price;
      if (sortBy === 'price_desc') return b.price - a.price;
      return a.title.localeCompare(b.title, 'ar');
    });

    return result;
  }, [products, debouncedSearch, selectedCategory, onlyInStock, sortBy]);

  // حساب الترقيم
  const totalItems = processedProducts.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return processedProducts.slice(start, start + pageSize);
  }, [processedProducts, currentPage, pageSize]);

  // التحديث المتفائل للمخزون
  const handleToggleStock = async (id) => {
    const previousProducts = products;
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, stock: !item.stock } : item))
    );

    try {
      setIsSimulatingNetwork(true);
      await new Promise((resolve) => setTimeout(resolve, 350));
      addToast('تم تحديث حالة المخزون بنجاح (Optimistic Update)', 'success');
    } catch {
      setProducts(previousProducts);
      addToast('فشل تحديث المخزون! تمت استعادة الحالة الأصلية.', 'error');
    } finally {
      setIsSimulatingNetwork(false);
    }
  };

  // إنشاء منتج جديد POST
  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!newProductForm.title.trim() || !newProductForm.price) return;

    const newEntry = {
      id: Date.now(),
      title: newProductForm.title.trim(),
      category: newProductForm.category,
      price: Number(newProductForm.price),
      stock: true,
    };

    setProducts((prev) => [newEntry, ...prev]);
    setNewProductForm({ title: '', category: 'accessories', price: '' });
    setIsAddFormOpen(false);
    addToast('تمت إضافة المنتج الجديد بنجاح مع المعرف #' + newEntry.id, 'success');
  };

  // تأكيد الحذف النهائي DELETE
  const handleConfirmDelete = () => {
    if (!deleteModalItem) return;
    setProducts((prev) => prev.filter((p) => p.id !== deleteModalItem.id));
    addToast('تم حذف المنتج "' + deleteModalItem.title + '" نهائياً', 'info');
    setDeleteModalItem(null);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden font-sans">
      {/* التوست العائم */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={
              "pointer-events-auto px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold text-white flex items-center gap-2 " +
              (t.type === 'success' ? 'bg-emerald-600' : t.type === 'error' ? 'bg-rose-600' : 'bg-blue-600')
            }
          >
            <span>{t.type === 'success' ? '✔' : t.type === 'error' ? '✖' : 'ℹ'}</span>
            <span>{t.msg}</span>
          </div>
        ))}
      </div>

      {/* الرأس */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              APIFleet Pro Studio
            </h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono">
              REST & CRUD Suite
            </span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            لوحة تفاعلية متكاملة تجسد كافة معايير CRUD، البحث المؤجل (Debounce)، الفلترة، والترقيم الذكي.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {isSimulatingNetwork && (
            <span className="flex items-center gap-1.5 text-xs text-amber-400 animate-pulse bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              محاكاة استدعاء شبكي...
            </span>
          )}
          <button
            onClick={() => setIsAddFormOpen(!isAddFormOpen)}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-blue-500/25 transition"
          >
            {isAddFormOpen ? '✕ إغلاق النموذج' : '➕ إضافة منتج (POST)'}
          </button>
        </div>
      </div>

      {/* نموذج الإضافة */}
      {isAddFormOpen && (
        <form onSubmit={handleCreateProduct} className="my-5 p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
          <h4 className="text-xs font-bold text-blue-300 uppercase tracking-wider">نموذج إنشاء مورد جديد (POST /products)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="اسم المنتج..."
              value={newProductForm.title}
              onChange={(e) => setNewProductForm({ ...newProductForm, title: e.target.value })}
              className="p-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500"
              required
            />
            <select
              value={newProductForm.category}
              onChange={(e) => setNewProductForm({ ...newProductForm, category: e.target.value })}
              className="p-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500"
            >
              <option value="accessories">إكسسوارات (accessories)</option>
              <option value="smartphones">هواتف (smartphones)</option>
              <option value="laptops">حواسيب (laptops)</option>
              <option value="audio">صوتيات (audio)</option>
              <option value="screens">شاشات (screens)</option>
            </select>
            <input
              type="number"
              placeholder="السعر بالدولار..."
              value={newProductForm.price}
              onChange={(e) => setNewProductForm({ ...newProductForm, price: e.target.value })}
              className="p-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition"
          >
            تأكيد الإرسال للـ API وإنشاء المنتج
          </button>
        </form>
      )}

      {/* التحكم والفلاتر */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        <div className="relative">
          <input
            type="text"
            placeholder="بحث فوري (مؤجل 350ms)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2.5 pl-8 bg-slate-800/60 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500"
          />
          <span className="absolute left-2.5 top-3 text-slate-400 text-xs">
            {searchTerm !== debouncedSearch ? '⏳' : '🔍'}
          </span>
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="p-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500"
        >
          <option value="all">كافة الفئات (All Categories)</option>
          <option value="smartphones">هواتف ذكية</option>
          <option value="laptops">حواسيب محمولة</option>
          <option value="audio">صوتيات</option>
          <option value="screens">شاشات</option>
          <option value="accessories">إكسسوارات</option>
          <option value="tablets">أجهزة لوحية</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none focus:border-blue-500"
        >
          <option value="price_asc">السعر: من الأقل للأعلى ⬆️</option>
          <option value="price_desc">السعر: من الأعلى للأقل ⬇️</option>
          <option value="name_asc">الاسم أبجدياً 🔤</option>
        </select>

        <label className="flex items-center gap-2 p-2.5 bg-slate-800/60 border border-slate-700 rounded-xl text-xs text-slate-300 cursor-pointer hover:bg-slate-800">
          <input
            type="checkbox"
            checked={onlyInStock}
            onChange={(e) => {
              setOnlyInStock(e.target.checked);
              setCurrentPage(1);
            }}
            className="rounded accent-blue-500"
          />
          <span>المتوفر بالمخزون فقط</span>
        </label>
      </div>

      {/* الجدول */}
      <div className="bg-slate-800/40 rounded-2xl border border-slate-800 overflow-hidden">
        {paginatedProducts.length === 0 ? (
          <div className="text-center py-12">
            <span className="text-3xl">🔍</span>
            <h4 className="text-sm font-bold text-slate-300 mt-2">لا توجد نتائج تطابق شروط البحث الحالية</h4>
            <p className="text-xs text-slate-500 mt-1 mb-4">جرب مسح البحث أو تغيير فئة المنتجات المختارة.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setOnlyInStock(false);
              }}
              className="px-4 py-1.5 bg-slate-700 text-slate-200 rounded-lg text-xs hover:bg-slate-600 transition"
            >
              🔄 إعادة ضبط كافة الفلاتر
            </button>
          </div>
        ) : (
          <table className="w-full text-right text-xs">
            <thead className="bg-slate-800 text-slate-400 font-semibold border-b border-slate-700">
              <tr>
                <th className="p-3">المعرف</th>
                <th className="p-3">المنتج</th>
                <th className="p-3">الفئة</th>
                <th className="p-3">السعر</th>
                <th className="p-3">المخزون (Optimistic Toggle)</th>
                <th className="p-3 text-center">إجراءات CRUD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {paginatedProducts.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/50 transition">
                  <td className="p-3 text-slate-500 font-mono">#{item.id}</td>
                  <td className="p-3 font-semibold text-slate-100">{item.title}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 text-[10px]">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-3 font-mono font-bold text-emerald-400">{item.price} $</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleToggleStock(item.id)}
                      className={
                        "px-2.5 py-1 rounded-full text-[10px] font-bold transition flex items-center gap-1.5 " +
                        (item.stock
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30"
                          : "bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-500/30")
                      }
                    >
                      <span className={"w-1.5 h-1.5 rounded-full " + (item.stock ? "bg-emerald-400" : "bg-rose-400")}></span>
                      {item.stock ? 'متوفر (متاح)' : 'نفد المخزون'}
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => setDeleteModalItem(item)}
                      className="px-2.5 py-1 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg text-[11px] font-medium border border-rose-500/20 transition"
                    >
                      🗑️ حذف (DELETE)
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* الترقيم */}
        <div className="p-3 bg-slate-800/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>
            عرض <strong>{paginatedProducts.length}</strong> من إجمالي <strong>{totalItems}</strong> منتج (صفحة {currentPage} من {totalPages})
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-30 rounded-lg text-slate-200 transition"
            >
              السابق
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={
                  "w-7 h-7 rounded-lg font-bold transition text-xs " +
                  (currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-slate-800 hover:bg-slate-700 text-slate-300")
                }
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 disabled:opacity-30 rounded-lg text-slate-200 transition"
            >
              التالي
            </button>
          </div>
        </div>
      </div>

      {/* نافذة التأكيد */}
      {deleteModalItem && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-rose-500/40 rounded-2xl max-w-sm w-full p-5 shadow-2xl text-right">
            <div className="text-3xl text-rose-500 mb-2">⚠️</div>
            <h4 className="text-base font-bold text-slate-100 mb-1">تأكيد حذف المنتج نهائياً</h4>
            <p className="text-xs text-slate-400 mb-4">
              هل أنت متأكد من رغبتك في حذف <strong>"{deleteModalItem.title}"</strong>؟ هذا الإجراء لا يمكن التراجع عنه.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteModalItem(null)}
                className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
              >
                إلغاء
              </button>
              <button
                onClick={handleConfirmDelete}
                className="flex-1 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-semibold"
              >
                نعم، تأكيد الحذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`,
    infographic: {
      title: "معمارية منصة APIFleet Pro المتكاملة",
      description: "التنسيق الهرمي لطبقة الـ API والبحث المؤجل والترقيم والعمليات المتفائلة.",
      sections: [
        {
          heading: "1. طبقة الاتصال والاستهلاك (Network & REST)",
          bullets: [
            "RESTful Verbs: تمثيل دقيق لعمليات GET و POST و PATCH و DELETE.",
            "Debounced Search: تأخير إرسال الطلب حتى سكون الكتابة 350ms."
          ]
        },
        {
          heading: "2. طبقة التزامن والمزامنة (State Sync & Optimistic UI)",
          bullets: [
            "Optimistic Toggle: استجابة فورية في 0ms مع التراجع السلس عند العطل.",
            "Delete Confirmation Modal: نافذة تأكيد لمنع الحوادث وفقدان البيانات."
          ]
        },
        {
          heading: "3. تصفح المجموعات الضخمة (Exploration Engine)",
          bullets: [
            "Smart Pagination: تجزئة السجلات وتحديث مؤشرات الصفحات تلقائياً.",
            "Multi-Criteria Filtering: دمج الأقسام والتوفر والترتيب بلحظة واحدة."
          ]
        }
      ]
    }
  },
  infographic: {
    title: "خارطة التعامل مع APIs والبيانات الخارجية في React",
    description: "الدليل الشامل للربط بين الواجهة الأمامية والخوادم وقواعد البيانات وفق أحدث المعايير.",
    sections: [
      {
        heading: "1. أساسيات بروتوكول REST والمعايير العالمية",
        bullets: [
          "أفعال HTTP: GET للقراءة، POST للإنشاء، PUT/PATCH للتعديل، و DELETE للحذف.",
          "أكواد الحالة: 2xx نجاح، 4xx أخطاء عميل وتوثيق، و 5xx أعطال خادم.",
          "ترويسات التوثيق: استخدام Bearer Token لتأمين كافة نقاط النهاية المحمية."
        ]
      },
      {
        heading: "2. دورة حياة الطلبات والوقاية من المشاكل الخفية",
        bullets: [
          "الحالات الأربع: Loading، Error، Empty، و Success.",
          "AbortController: حماية الذاكرة ومنع تسريب الموارد عند إلغاء التركيب.",
          "Race Conditions: استخدام متغيرات الراية لمنع ظهور نتائج متأخرة قديمة."
        ]
      },
      {
        heading: "3. عمليات CRUD والتحديث المتفائل",
        bullets: [
          "Pessimistic vs Optimistic: الاختيار الذكي بين الأمان الصارم والسرعة اللحظية.",
          "تأكيد الحذف: الوقاية من النقر العرضي عبر نوافذ التنبيه المخصصة.",
          "إشعارات التوست: تغذية راجعة عائمة تزيد من ثقة وطمأنينة المستخدم."
        ]
      },
      {
        heading: "4. محركات الاستكشاف والبحث والترقيم",
        bullets: [
          "Debounced Search: خفض استهلاك الشبكة بنسبة 90% بتأخير إرسال الحروف.",
          "Pagination & Infinite Scroll: إدارة السجلات الضخمة بسلاسة وأداء عالٍ.",
          "URL Synchronization: جعل شريط العنوان مصدر الحقيقة لسهولة المشاركة والمفضلة."
        ]
      }
    ]
  }
};

export default SECTION_10_META;
