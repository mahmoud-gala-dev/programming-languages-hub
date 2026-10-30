// src/data/sections/section11/section11Meta.js
// بيانات القسم 11: الملخص، جدول المرجع السريع، والمشروع المصغر

import React, { useState, useMemo, useEffect } from 'react';

export const SECTION_11_META = {
  id: "section-11",
  title: "القسم 11: التوجيه والتنقل باستخدام React Router",
  englishTitle: "Client-Side Routing, React Router Suite & Data Architecture",
  description: "الدليل الشامل لاحتراف نظم الملاحة والتوجيه في React: من المفاهيم الأساسية للتوجيه من جانب العميل (CSR) والتنقل الفوري بـ Link و NavLink، إلى الملاحة البرمجية بـ useNavigate والمسارات الديناميكية بـ useParams و useSearchParams، وهندسة المسارات المتداخلة (Nested Routes) ومكون المخرج Outlet ومسارات التخطيط (Layout Routes)، وصولاً إلى أحدث ميزات Data Routers من دوال التحميل المسبق (Loaders) ودوال النماذج (Actions) وحدود الأعطال (errorElement) واستدعاءات Fetcher وإعادة التحقق التلقائي.",
  summary: [
    "جوهر Client-Side Routing: اعتراض النقر على الروابط وتحديث عنوان المتصفح عبر History API مع تبديل المكونات محلياً في 0 ثانية دون وميض أو إعادة تحميل للصفحة.",
    "استخدام Link و NavLink حصراً: استبدال وسوم <a> التقليدية بـ <Link> لمنع طلبات الخادم الكاملة، واستخدام <NavLink> لتلوين وإبراز التبويب النشط تلقائياً بمتغير isActive.",
    "قراءة المعاملات بـ useParams و useSearchParams: استخراج المتغيرات الديناميكية من المسارات (:id) واستخدام معلمات الاستعلام (?key=val) لجعل الفلاتر قابلة للمشاركة والحفظ في المفضلة.",
    "هندسة المسارات المتداخلة (Nested Routes) بـ Outlet: الحفاظ على استقرار الهياكل المشتركة (الأشرطة الجانبية والترويسات) وحقن الشاشات الفرعية موضعياً عبر مكون <Outlet />.",
    "مسارات التخطيط (Pathless Layouts): تطبيق قوالب بصرية مستقلة (مثل Auth Layout و Dashboard Layout) دون تشويه أو تمديد مسارات الـ URL.",
    "حراسة المسارات (Protected Routes): عزل الصفحات الخاصة بالمستخدمين عبر مكونات وسيطة تفحص شروط التوثيق والصلاحيات (RBAC) وتحول غير المسجلين لـ /login فوراً.",
    "ثورة Data Routers بـ Loaders و Actions: جلب البيانات بالتوازي مع كود الصفحة قبل الرندر للقضاء على شلالات البيانات (Network Waterfalls)، ومعالجة النماذج بـ Form وإعادة التحقق التلقائي.",
    "عزل الأعطال عبر errorElement: حماية شجرة التطبيق من الانهيار الكامل باحتجاز الأخطاء في مستوى المسار المعطوب فقط وعرض واجهات تعافٍ واضحة."
  ],
  cheatSheet: [
    {
      concept: "موفر التوجيه BrowserRouter",
      syntax: "<BrowserRouter>\n  <App />\n</BrowserRouter>",
      note: "يغلف التطبيق بالكامل في القمة (main.jsx) لبث سياق التوجيه وتاريخ التصفح."
    },
    {
      concept: "حاوية المسارات Routes",
      syntax: "<Routes>\n  <Route path='/' element={<Home />} />\n</Routes>",
      note: "تفحص الرابط الحالي وتختار المسار الأكثر مطابقة ودقة لرسمه على الشاشة."
    },
    {
      concept: "تعريف المسار Route",
      syntax: "<Route path='/about' element={<About />} />",
      note: "يربط مسار الـ path بعنصر الـ JSX المحدد في خاصية element."
    },
    {
      concept: "رابط التنقل السلس Link",
      syntax: "<Link to='/products'>المنتجات</Link>",
      note: "البديل الحديث لـ <a>؛ يمنع إعادة تحميل الصفحة ويحافظ على الـ State."
    },
    {
      concept: "رابط التنقل النشط NavLink",
      syntax: "<NavLink to='/' end className={({ isActive }) => isActive ? 'active' : ''}>",
      note: "يزود كلاسات التنسيق بمتغير isActive لتلوين التبويب الحالي تلقائياً."
    },
    {
      concept: "الملاحة البرمجية useNavigate",
      syntax: "const navigate = useNavigate();\nnavigate('/dashboard'); // أو للوراء: navigate(-1);",
      note: "توجيه المستخدم من داخل الدوال والأحداث بعد إتمام الدفع أو تسجيل الدخول."
    },
    {
      concept: "المسار الديناميكي Dynamic Route",
      syntax: "<Route path='/users/:userId' element={<User />} />",
      note: "قالب مسار يطابق المعرفات المتغيرة المسبوقة بنقطتين رأسيتين :."
    },
    {
      concept: "استخراج المعاملات useParams",
      syntax: "const { userId } = useParams();",
      note: "يستخرج المتغيرات من الرابط ككائن يحوي قيماً نصية جاهزة للاستخدام."
    },
    {
      concept: "إدارة الاستعلام useSearchParams",
      syntax: "const [params, setParams] = useSearchParams();\nparams.get('q');",
      note: "قراءة وتعديل معاملات ?sort=asc&page=2 ومزامنة الفلاتر مع الرابط."
    },
    {
      concept: "فحص المسار useLocation",
      syntax: "const { pathname, search, state } = useLocation();",
      note: "قراءة تفاصيل الرابط الحالي واستلام البيانات الخفية الممررة في state."
    },
    {
      concept: "مخرج المسارات المتداخلة Outlet",
      syntax: "<aside /><main><Outlet /></main>",
      note: "نقطة الحقن في المكون الأب التي تُرسم فيها الصفحة الفرعية المحددة."
    },
    {
      concept: "سياق المخرج useOutletContext",
      syntax: "<Outlet context={{ user }} />\n// في الابن:\nconst { user } = useOutletContext();",
      note: "مشاركة البيانات والحالات العامة من المكون الأب إلى كافة الأبناء بسلاسة."
    },
    {
      concept: "المسار الافتراضي Index Route",
      syntax: "<Route index element={<DashboardHome />} />",
      note: "الصفحة الافتراضية التي تظهر عند زيارة مسار الأب مباشرة دون تفريعات."
    },
    {
      concept: "مسار التخطيط Pathless Route",
      syntax: "<Route element={<AuthLayout />}>\n  <Route path='/login' ... />\n</Route>",
      note: "تطبيق قالب موحد على مجموعة مسارات دون إضافة بادئة في عنوان الـ URL."
    },
    {
      concept: "إعادة التوجيه التقريرية Navigate",
      syntax: "<Navigate to='/login' replace state={{ from: location }} />",
      note: "تحويل فوري للمستخدم لمسار آخر مع استبدال سجل التاريخ بأمان."
    },
    {
      concept: "مسار الحارس 404 Wildcard",
      syntax: "<Route path='*' element={<NotFound />} />",
      note: "يوضع في نهاية المسارات لالتقاط أي رابط خاطئ وتوجيه الزائر بلطف."
    },
    {
      concept: "دالة التحميل المسبق loader",
      syntax: "loader: async ({ params }) => fetch('/api/' + params.id)",
      note: "جلب بيانات الصفحة بالتوازي مع تحميل الكود قبل بدء الرندر بـ Data Router."
    },
    {
      concept: "قراءة بيانات التحميل useLoaderData",
      syntax: "const data = useLoaderData();",
      note: "قراءة البيانات المحقونة من loader فوراً في أول رندر بدون useEffect."
    },
    {
      concept: "دالة معالجة النماذج action",
      syntax: "action: async ({ request }) => { const fd = await request.formData(); }",
      note: "استقبال بيانات نماذج <Form method='post'> وتحديث الخادم تلقائياً."
    },
    {
      concept: "مراقبة حالة الانتقال useNavigation",
      syntax: "const nav = useNavigation();\nconst isBusy = nav.state !== 'idle';",
      note: "مراقبة حالات الانتقال (idle, loading, submitting) لرسم شريط التقدم."
    },
    {
      concept: "المعاملات الموضعية useFetcher",
      syntax: "const fetcher = useFetcher();\n<fetcher.Form method='post' action='/like'>",
      note: "تعديل البيانات في الخلفية دون أي تغيير في عنوان صفحة المتصفح."
    },
    {
      concept: "حدود أخطاء المسار errorElement",
      syntax: "errorElement: <RouteErrorBoundary />",
      note: "عزل انهيار المسار المعطوب وحماية باقي شجرة التطبيق وشريط التنقل."
    }
  ],
  miniProject: {
    id: "mini-project-section-11",
    title: "منصة RouterPilot Pro: استوديو الملاحة وهندسة المسارات التفاعلي",
    englishTitle: "RouterPilot Pro: Interactive Routing Simulator, Dynamic Guard & Nested Layout Suite",
    description: "استوديو هندسي متكامل ومحاكي ملاحة حي يجسد كافة ترسانة التوجيه في React Router: محاكاة شريط عنوان URL متفاعل، مسارات متداخلة (Nested Layouts) مع مخرج حي <Outlet />، مسار ديناميكي لفحص المستخدمين (:id) واستخراج المعاملات، مزامنة حية لمعاملات الاستعلام (useSearchParams) للفلترة والترتيب، حارس مسارات محمية (Protected Route Guard) يتطلب تسجيل الدخول مع توجيه تلقائي وحفظ مسار العودة (Redirect with Return URL)، شريط مسارات التتبع (Breadcrumbs)، ومسار 404 الذكي لالتقاط الروابط المفقودة.",
    code: `import React, { useState, useMemo } from 'react';

// ==========================================
// 1. المكون الرئيسي: RouterPilot Pro
// ==========================================
export function RouterPilotPro() {
  // تتبع مسار المتصفح المحاكى في الحالة
  const [currentUrl, setCurrentUrl] = useState('/dashboard');
  const [historyStack, setHistoryStack] = useState(['/dashboard']);
  const [historyIndex, setHistoryIndex] = useState(0);

  // حالة المصادقة
  const [user, setUser] = useState({ name: 'أحمد السعيد', role: 'admin', isLoggedIn: true });
  
  // معلمات الاستعلام المحاكاة
  const [searchFilter, setSearchFilter] = useState('');
  const [activeTab, setActiveTab] = useState('overview'); // overview | analytics | settings

  // قاعدة بيانات تجريبية للمستخدمين
  const usersList = [
    { id: '101', name: 'سارة خالد', role: 'مهندسة واجهات', email: 'sara@code.io' },
    { id: '102', name: 'عمر ياسين', role: 'مدير منتج', email: 'omar@code.io' },
    { id: '103', name: 'فاطمة علي', role: 'مصممة تجربة مستخدم', email: 'fatima@code.io' },
  ];

  // دالة الملاحة البرمجية المحاكية لنظام History API
  const navigateTo = (path, replace = false) => {
    if (replace) {
      const nextStack = [...historyStack];
      nextStack[historyIndex] = path;
      setHistoryStack(nextStack);
      setCurrentUrl(path);
    } else {
      const nextStack = historyStack.slice(0, historyIndex + 1);
      nextStack.push(path);
      setHistoryStack(nextStack);
      setHistoryIndex(nextStack.length - 1);
      setCurrentUrl(path);
    }
  };

  // الرجوع للخلف navigate(-1)
  const goBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
      setCurrentUrl(historyStack[historyIndex - 1]);
    }
  };

  // التقدم للأمام navigate(1)
  const goForward = () => {
    if (historyIndex < historyStack.length - 1) {
      setHistoryIndex((prev) => prev + 1);
      setCurrentUrl(historyStack[historyIndex + 1]);
    }
  };

  // تفكيك عنوان الـ URL الحالي إلى مسار ومعاملات
  const { pathname, searchParams } = useMemo(() => {
    const [pathPart, queryPart] = currentUrl.split('?');
    const params = new URLSearchParams(queryPart || '');
    return { pathname: pathPart, searchParams: params };
  }, [currentUrl]);

  // فحص المسار الديناميكي /users/:id
  const userMatch = pathname.match(/^\\/users\\/(\\w+)$/);
  const matchedUserId = userMatch ? userMatch[1] : null;

  // توليد شريط مسار التتبع (Breadcrumbs)
  const breadcrumbs = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean);
    const crumbs = [{ label: 'الرئيسية 🏠', path: '/' }];
    let accumulated = '';
    parts.forEach((part) => {
      accumulated += '/' + part;
      let label = part;
      if (part === 'dashboard') label = 'لوحة التحكم';
      if (part === 'users') label = 'فريق العمل';
      if (part === 'settings') label = 'الإعدادات';
      if (part === 'login') label = 'تسجيل الدخول';
      if (part === matchedUserId) label = 'المستخدم #' + matchedUserId;
      crumbs.push({ label, path: accumulated });
    });
    return crumbs;
  }, [pathname, matchedUserId]);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 border border-slate-800 shadow-2xl relative font-sans text-right">
      {/* رأس المحاكي وشريط أدوات المتصفح الحي */}
      <div className="flex flex-col gap-4 pb-6 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧭</span>
            <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
              RouterPilot Pro Suite
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono">
              React Router Engine
            </span>
          </div>

          {/* تبديل حالة تسجيل الدخول لاختبار الحارس */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">حالة المصادقة:</span>
            <button
              onClick={() => {
                const nextStatus = !user.isLoggedIn;
                setUser({ ...user, isLoggedIn: nextStatus });
                if (!nextStatus && pathname.startsWith('/dashboard')) {
                  navigateTo('/login');
                }
              }}
              className={
                "px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 " +
                (user.isLoggedIn ? "bg-emerald-600/20 text-emerald-300 border border-emerald-500/30" : "bg-rose-600/20 text-rose-300 border border-rose-500/30")
              }
            >
              <span>{user.isLoggedIn ? '✔ مسجل دخول' : '✖ زائر مجهول'}</span>
              <span className="text-[10px] underline">(تبديل)</span>
            </button>
          </div>
        </div>

        {/* محاكي شريط عنوان المتصفح الحقيقي (Mock Browser Address Bar) */}
        <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-2xl border border-slate-800">
          <div className="flex gap-1">
            <button
              onClick={goBack}
              disabled={historyIndex === 0}
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs flex items-center justify-center font-bold"
              title="navigate(-1) الرجوع للخلف"
            >
              ⬅️
            </button>
            <button
              onClick={goForward}
              disabled={historyIndex >= historyStack.length - 1}
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-xs flex items-center justify-center font-bold"
              title="navigate(1) التقدم للأمام"
            >
              ➡️
            </button>
            <button
              onClick={() => navigateTo(currentUrl, true)}
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs flex items-center justify-center font-bold"
              title="إعادة تحميل المسار"
            >
              🔄
            </button>
          </div>

          {/* شريط الإدخال للـ URL */}
          <div className="flex-1 flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 text-xs font-mono dir-ltr">
            <span className="text-emerald-400 font-bold">https://my-app.io</span>
            <input
              type="text"
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigateTo(currentUrl);
              }}
              className="flex-1 bg-transparent text-slate-100 outline-none"
            />
          </div>

          <button
            onClick={() => navigateTo('/unknown-broken-link')}
            className="px-2.5 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-lg text-xs font-bold border border-rose-500/20"
            title="تجربة مسار 404"
          >
            مسار مفقود (404)
          </button>
        </div>

        {/* شريط مسار التتبع (Breadcrumbs) */}
        <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
          <span className="text-slate-500">مسار التتبع:</span>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.path}>
              {idx > 0 && <span className="text-slate-600 font-bold">/</span>}
              <button
                onClick={() => navigateTo(crumb.path)}
                className={
                  "hover:underline " +
                  (idx === breadcrumbs.length - 1 ? "text-blue-400 font-bold" : "text-slate-300")
                }
              >
                {crumb.label}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* شريط التنقل العلوي المشترك (Global NavLink Menu) */}
      <nav className="flex gap-2 my-5 border-b border-slate-800 pb-3">
        {[
          { label: 'الرئيسية 🏠', path: '/' },
          { label: 'لوحة التحكم 📊 (Protected)', path: '/dashboard' },
          { label: 'فريق العمل 👥 (Dynamic)', path: '/users' },
          { label: 'الإعدادات ⚙️', path: '/settings' },
        ].map((item) => {
          const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
          return (
            <button
              key={item.path}
              onClick={() => navigateTo(item.path)}
              className={
                "px-4 py-2 rounded-xl text-xs font-bold transition-all " +
                (isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800")
              }
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* ========================================================== */}
      {/* محرك مطابقة المسارات وعرض المحتوى (Router Engine Simulator) */}
      {/* ========================================================== */}

      {/* 1. الصفحة الرئيسية العامة */}
      {pathname === '/' && (
        <div className="p-8 bg-slate-800/40 rounded-3xl border border-slate-800 text-center space-y-4">
          <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center text-3xl mx-auto border border-blue-500/20">
            🚀
          </div>
          <h3 className="text-xl font-black text-white">مرحباً بك في المنصة العامة</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            هذه الصفحة عامة ومتاحة لجميع الزوار بدون أي متطلبات تسجيل دخول. جرب النقر على 'لوحة التحكم' لاختبار مسار الحماية.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('/dashboard')}
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/30"
            >
              التوجه للوحة التحكم المحمية ➔
            </button>
          </div>
        </div>
      )}

      {/* 2. صفحة تسجيل الدخول */}
      {pathname === '/login' && (
        <div className="p-8 bg-slate-800/40 rounded-3xl border border-slate-800 max-w-sm mx-auto text-center space-y-4">
          <span className="text-4xl">🔐</span>
          <h3 className="text-lg font-bold text-white">بوابة المصادقة وتسجيل الدخول</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            لقد تم توجيهك إلى هنا تلقائياً لأنك حاولت الوصول إلى مسار محمي دون تسجيل دخول.
          </p>
          <button
            onClick={() => {
              setUser({ name: 'أحمد السعيد', role: 'admin', isLoggedIn: true });
              navigateTo('/dashboard');
            }}
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition"
          >
            تسجيل الدخول فوراً والعبور للوحة التحكم ➔
          </button>
        </div>
      )}

      {/* 3. لوحة التحكم المحمية بمسارات متداخلة (Nested Layout + Outlet) */}
      {pathname.startsWith('/dashboard') && (
        <>
          {!user.isLoggedIn ? (
            // تطبيق سلوك Protected Route: إعادة التوجيه لـ /login
            <div className="p-6 bg-rose-500/10 border border-rose-500/30 rounded-2xl text-rose-300 text-xs text-center">
              ⚠️ مسار محمي! تم حظر الوصول، جاري تحويلك لصفحة تسجيل الدخول...
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-4 bg-slate-800/30 p-4 rounded-3xl border border-slate-800">
              {/* شريط جانبي ثابت للوحة التحكم */}
              <aside className="w-full md:w-48 bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  تبويبات لوحة التحكم (Outlet)
                </span>
                <button
                  onClick={() => {
                    setActiveTab('overview');
                    navigateTo('/dashboard');
                  }}
                  className={
                    "w-full text-right p-2 rounded-xl text-xs font-semibold block transition " +
                    (activeTab === 'overview' ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:bg-slate-800")
                  }
                >
                  📊 نظرة عامة (Index)
                </button>
                <button
                  onClick={() => {
                    setActiveTab('analytics');
                    navigateTo('/dashboard?tab=analytics');
                  }}
                  className={
                    "w-full text-right p-2 rounded-xl text-xs font-semibold block transition " +
                    (activeTab === 'analytics' ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:bg-slate-800")
                  }
                >
                  📈 التحليلات المتقدمة
                </button>
                <button
                  onClick={() => {
                    setActiveTab('security');
                    navigateTo('/dashboard?tab=security');
                  }}
                  className={
                    "w-full text-right p-2 rounded-xl text-xs font-semibold block transition " +
                    (activeTab === 'security' ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:bg-slate-800")
                  }
                >
                  🛡️ إعدادات الأمان
                </button>
              </aside>

              {/* منطقة المخرج Outlet المحاكية */}
              <main className="flex-1 bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80 min-h-[220px]">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
                  <span className="text-xs text-blue-400 font-mono">نقطة حقن المخرج: &lt;Outlet /&gt;</span>
                  <span className="text-[10px] text-slate-500">المستخدم: {user.name} ({user.role})</span>
                </div>

                {activeTab === 'overview' && (
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm text-slate-200">ملخص المؤشرات اللحظي</h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-slate-800 rounded-xl">
                        <span className="text-slate-400">الزيارات اليومية:</span>
                        <p className="text-lg font-black text-emerald-400 mt-1">14,290 زائر</p>
                      </div>
                      <div className="p-3 bg-slate-800 rounded-xl">
                        <span className="text-slate-400">معدل التحويل:</span>
                        <p className="text-lg font-black text-blue-400 mt-1">4.8 %</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div>
                    <h4 className="font-bold text-sm text-slate-200 mb-2">تقرير التحليلات المتقدمة</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      هذا التبويب يعكس ميزة مزامنة معلمات الاستعلام: <code>/dashboard?tab=analytics</code>. جرب نسخ الرابط أو تحديثه!
                    </p>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div>
                    <h4 className="font-bold text-sm text-slate-200 mb-2">إعدادات الأمان والمصادقة</h4>
                    <p className="text-xs text-slate-400">
                      جلسة العمل محمية برمز تشفير JWT مع تفعيل التحقق الثنائي (2FA).
                    </p>
                  </div>
                )}
              </main>
            </div>
          )}
        </>
      )}

      {/* 4. كتالوج المستخدمين والمسار الديناميكي /users و /users/:id */}
      {pathname.startsWith('/users') && (
        <div className="p-6 bg-slate-800/40 rounded-3xl border border-slate-800 space-y-4">
          {matchedUserId ? (
            // عرض تفاصيل المستخدم المستخرج بـ useParams
            (() => {
              const matchedUser = usersList.find((u) => u.id === matchedUserId);
              if (!matchedUser) {
                return (
                  <div className="text-center py-6 text-rose-400 text-xs font-bold">
                    المستخدم #{matchedUserId} غير موجود في قاعدة البيانات!
                  </div>
                );
              }
              return (
                <div className="space-y-4">
                  <button
                    onClick={() => navigateTo('/users')}
                    className="text-xs text-blue-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    ⬅️ العودة لقائمة فريق العمل
                  </button>
                  <div className="p-5 bg-slate-900 rounded-2xl border border-slate-700 max-w-sm">
                    <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                      useParams().id = "{matchedUserId}"
                    </span>
                    <h3 className="text-lg font-bold text-white mt-2">{matchedUser.name}</h3>
                    <p className="text-xs text-slate-400">{matchedUser.role}</p>
                    <p className="text-xs text-emerald-400 mt-2 font-mono">{matchedUser.email}</p>
                  </div>
                </div>
              );
            })()
          ) : (
            // عرض قائمة المستخدمين مع فلترة بـ searchParams
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-sm text-slate-200">أعضاء الفريق (Dynamic Routes /users/:id)</h3>
                <input
                  type="text"
                  placeholder="فلترة بالاسم..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="p-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none w-44"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {usersList
                  .filter((u) => u.name.includes(searchFilter))
                  .map((u) => (
                    <div key={u.id} className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2">
                      <span className="text-[10px] font-mono text-slate-500">#{u.id}</span>
                      <h4 className="font-bold text-sm text-white">{u.name}</h4>
                      <p className="text-xs text-slate-400">{u.role}</p>
                      <button
                        onClick={() => navigateTo('/users/' + u.id)}
                        className="w-full mt-2 py-1.5 bg-slate-800 hover:bg-slate-700 text-blue-400 font-bold rounded-xl text-xs transition"
                      >
                        عرض التفاصيل (:id) ➔
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. صفحة الإعدادات العامة */}
      {pathname === '/settings' && (
        <div className="p-6 bg-slate-800/40 rounded-3xl border border-slate-800 space-y-3">
          <h3 className="font-bold text-sm text-slate-200">إعدادات التطبيق والمظهر</h3>
          <p className="text-xs text-slate-400">
            يمكنك تخصيص معايير التوجيه والتخزين المؤقت وسجلات التصفح.
          </p>
        </div>
      )}

      {/* 6. صفحة 404 الشاملة (Catch-All Wildcard Route *) */}
      {pathname !== '/' &&
        pathname !== '/login' &&
        !pathname.startsWith('/dashboard') &&
        !pathname.startsWith('/users') &&
        pathname !== '/settings' && (
          <div className="p-10 bg-slate-800/40 rounded-3xl border border-rose-500/30 text-center space-y-3">
            <span className="text-5xl">🧭</span>
            <span className="text-xs font-mono px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full block w-max mx-auto">
              ROUTE NOT FOUND (*)
            </span>
            <h3 className="text-xl font-bold text-white">404 - المسار المطلوب غير مسجل</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              المسار <code>{pathname}</code> لم يتطابق مع أي مسار معرف في شجرة Routes.
            </p>
            <button
              onClick={() => navigateTo('/')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition"
            >
              العودة للصفحة الرئيسية 🏠
            </button>
          </div>
        )}
    </div>
  );
}
`,
    infographic: {
      title: "معمارية منصة RouterPilot Pro التفاعلية",
      description: "التنسيق الهرمي لنظام التوجيه والملاحة والحماية والمسارات المتداخلة.",
      sections: [
        {
          heading: "1. طبقة الملاحة والـ History API",
          bullets: [
            "Mock Address Bar: تحكم مباشر برمز الـ URL مع زري الرجوع والتقدم.",
            "Breadcrumbs: توليد مسار التتبع الهرمي تلقائياً من أجزاء المسار."
          ]
        },
        {
          heading: "2. المسارات المتداخلة والحماية (Nested & Guards)",
          bullets: [
            "Protected Route: فحص حالة الدخول وإعادة التوجيه لـ /login فوراً.",
            "Outlet Sandbox: بقاء الشريط الجانبي ثابتاً مع حقن المحتوى الفرعي."
          ]
        },
        {
          heading: "3. المسارات الديناميكية و 404 (Dynamic & Fallback)",
          bullets: [
            "Dynamic Params: مطابقة /users/:id واستخراج المعرف لعرض التفاصيل.",
            "Wildcard Catch-All: التقاط الروابط المجهولة بعلامة * وعرض شاشة 404."
          ]
        }
      ]
    }
  },
  infographic: {
    title: "خارطة التوجيه والملاحة الشاملة في React Router",
    description: "الدليل المرجعي الكامل لإتقان هندسة المسارات من الصفر إلى نمط Data Routers الحديث.",
    sections: [
      {
        heading: "1. أساسيات التوجيه من جانب العميل (CSR Core)",
        bullets: [
          "BrowserRouter: تغليف التطبيق ومزامنة History API مع شريط العنوان.",
          "Link & NavLink: الملاحة بـ 0ms وتمييز التبويب النشط بـ isActive تلقائياً.",
          "useNavigate & useLocation: التنقل البرمجي وفحص الـ pathname والـ state."
        ]
      },
      {
        heading: "2. المسارات المتداخلة والتخطيط (Nested & Layouts)",
        bullets: [
          "Nested Routes: الحفاظ على ثبات الأشرطة الجانبية والترويسات المشتركة.",
          "المكون Outlet: نقطة الحقن الموضعية وتمرير سياق useOutletContext.",
          "Layout Routes: توحيد القوالب البصرية بدون التلاعب بعناوين الـ URL."
        ]
      },
      {
        heading: "3. أمان وحراسة المسارات (Route Guards & RBAC)",
        bullets: [
          "Protected Routes: حظر الزوار غير المسجلين وحفظ مكان العودة في state.",
          "Role-Based Access: إدارة الصلاحيات وتوجيه المستخدمين غير المرخصين لـ 403.",
          "مسار 404 النجمة: احتجاز الروابط التائهة وتوجيه الزائر للبر الآمن."
        ]
      },
      {
        heading: "4. معمارية Data Routers الحديثة (Loaders & Actions)",
        bullets: [
          "Loaders: جلب البيانات بالتوازي مع تحميل الكود قبل بدء رندر الصفحة.",
          "Actions & Form: معالجة النماذج التقريرية وإعادة التحقق التلقائي للبيانات.",
          "errorElement: عزل الانهيارات الموضعية وحماية استقرار باقي التطبيق."
        ]
      }
    ]
  }
};

export default SECTION_11_META;
