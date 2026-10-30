// src/data/sections/section32/topic2.js
// القسم 32: مشاريع تطبيقية للمستوى المتوسط
// الموضوع 2: مشروع 7: لوحة تحكم وإحصائيات (Dashboard Application)

export const topic2 = {
  id: "32.2",
  title: "مشروع 7: لوحة تحكم Dashboard",
  description: "مشروع تطبيقي متقدم لبناء لوحة تحكم وإحصائيات احترافية (Admin Analytics Dashboard)؛ يغطي بناء التخطيط الشبكي المتجاوب مع Sidebar قابل للطي، توجيه الصفحات المتعددة، بطاقات مؤشرات الأداء (KPI Cards)، الرسوم البيانية التفاعلية باستخدام Recharts، جداول البيانات المعقدة مع TanStack Table والفرز والترقيم، الوضع الداكن الشامل، والدرج الجانبي للهواتف المحمولة.",
  subtopics: [
    {
      id: "32.2.a",
      title: "إنشاء Layout للوحة التحكم (Dashboard Layout & Responsive Grid)",
      englishTerm: {
        term: "Dashboard Layout & Shell Architecture",
        pronunciation: "داشبورد لاي آوت آند شيل آركيتكتشر",
        meaning: "هندسة وتخطيط هيكل لوحة التحكم الشاملة"
      },
      description: "تعتمد لوحات التحكم الإدارية على هيكل تخطيطي صلب ومحكم (Application Shell Architecture)؛ يضمن بقاء شريط التنقل الجانبي (Sidebar) وشريط العنوان العلوي (Navbar) ثابتين في أماكنهما مع تمرير منطقة المحتوى المركزية فقط (Scrollable Viewport). يتم بناء هذا التخطيط باستخدام تقنيات CSS Grid و Flexbox الحديثة لتوزيع الشاشة إلى: عمود جانبي للتنقل، شريط علوي للبحث والإشعارات وحساب المستخدم، ومساحة عمل ديناميكية تتكيف مع مختلف درجات دقة الشاشات الكبيرة والصغيرة دون أي انكسار بصري.",
      analogy: "يشبه قمرة قيادة الطائرة التجارية؛ لوحة المفاتيح والشاشات الجانبية ثابتة في متناول يد الطيار، بينما تتغير قراءات الخرائط والملاحة في الشاشة المركزية أمامه باستمرار دون أن تتحرك اللوحة من مكانها.",
      whyItMatters: "يوفر تجربة استخدام ثابتة ومستقرة لمديري النظام الذين يقضون ساعات طويلة في مراقبة البيانات، ويمنع اهتزاز أو إعادة تحميل أشرطة التنقل أثناء التنقل بين أقسام اللوحة.",
      syntax: `// التخطيط الهيكلي للوحة التحكم عبر Tailwind CSS
<div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
  <Sidebar isCollapsed={collapsed} />
  <div className="flex flex-col flex-1 overflow-hidden">
    <Navbar onToggleSidebar={toggle} />
    <main className="flex-1 overflow-y-auto p-6">{children}</main>
  </div>
</div>`,
      simpleExample: {
        title: "هيكل لوحة تحكم بسيط يقسم الشاشة لشريط جانبي ومحتوى مركزي",
        code: `import React, { useState } from "react";

// مكون التخطيط الأساسي للوحة التحكم
function SimpleDashboardLayout({ children }) {
  // حالة طي الشريط الجانبي
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "sans-serif" }}>
      {/* الشريط الجانبي الثابت */}
      <aside style={{
        width: collapsed ? "70px" : "240px",
        backgroundColor: "#0f172a",
        color: "#ffffff",
        transition: "width 0.3s ease",
        display: "flex",
        flexDirection: "column",
        padding: "16px"
      }}>
        <h2 style={{ fontSize: collapsed ? "12px" : "18px", margin: "0 0 24px", whiteSpace: "nowrap" }}>
          {collapsed ? "لوحة" : "لوحة التحكم"}
        </h2>
        <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <a href="#overview" style={{ color: "#38bdf8", textDecoration: "none" }}>📊 الإحصائيات</a>
          <a href="#users" style={{ color: "#94a3b8", textDecoration: "none" }}>👥 المستخدمين</a>
          <a href="#settings" style={{ color: "#94a3b8", textDecoration: "none" }}>⚙️ الإعدادات</a>
        </nav>
      </aside>

      {/* الحاوية الرأسية: الشريط العلوي ومنطقة المحتوى */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* شريط التنقل العلوي Navbar */}
        <header style={{ height: "60px", backgroundColor: "#ffffff", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
          <button onClick={() => setCollapsed(!collapsed)} style={{ padding: "6px 12px", cursor: "pointer" }}>
            ☰
          </button>
          <div>👤 مرحباً، المدير</div>
        </header>

        {/* منطقة المحتوى القابلة للتمرير الداخلي */}
        <main style={{ flex: 1, overflowY: "auto", padding: "24px", backgroundColor: "#f8fafc" }}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default SimpleDashboardLayout;`
      },
      advancedExample: {
        title: "هيكل لوحة تحكم احترافي يدعم التجاوب الكامل، وحفظ حالة الشريط الجانبي في LocalStorage",
        code: `import React, { useState, useEffect } from "react";

// مكون هيكل لوحة التحكم الإدارية المتقدم
export function EnterpriseDashboardShell({ children, activeRoute = "overview" }) {
  // استرجاع حالة طي الشريط من التخزين المحلي
  const [isCollapsed, setIsCollapsed] = useState(() => {
    return localStorage.getItem("DASHBOARD_SIDEBAR_COLLAPSED") === "true";
  });
  // حالة فتح الدرج في شاشات الجوال
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // حفظ حالة الطي في LocalStorage
  useEffect(() => {
    localStorage.setItem("DASHBOARD_SIDEBAR_COLLAPSED", String(isCollapsed));
  }, [isCollapsed]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans">
      {/* 1. الشريط الجانبي لشاشات سطح المكتب */}
      <aside
        className={\`hidden lg:flex flex-col border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 z-30 \${
          isCollapsed ? "w-20" : "w-64"
        }\`}
      >
        {/* ترويسة الشريط والشعار */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100 dark:border-slate-800">
          {!isCollapsed && (
            <span className="font-black text-slate-900 dark:text-white text-base">نظام الإدارة Pro</span>
          )}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs mx-auto"
            title={isCollapsed ? "توسيع" : "طي"}
          >
            {isCollapsed ? "⇄" : "⇆"}
          </button>
        </div>

        {/* روابط التنقل الرئيسية */}
        <nav className="flex-1 p-3 space-y-1.5 overflow-y-auto">
          {[
            { id: "overview", label: "نظرة عامة", icon: "📈" },
            { id: "analytics", label: "التحليلات والمبيعات", icon: "📊" },
            { id: "customers", label: "العملاء والطلبات", icon: "👥" },
            { id: "reports", label: "التقارير المالية", icon: "📑" },
            { id: "settings", label: "إعدادات النظام", icon: "⚙️" }
          ].map((link) => {
            const isActive = activeRoute === link.id;
            return (
              <a
                key={link.id}
                href={\`#\${link.id}\`}
                className={\`flex items-center gap-3 px-3 py-2.5 rounded-2xl text-xs font-bold transition \${
                  isActive
                    ? "bg-sky-600 text-white shadow-md shadow-sky-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                }\`}
              >
                <span className="text-base">{link.icon}</span>
                {!isCollapsed && <span>{link.label}</span>}
              </a>
            );
          })}
        </nav>
      </aside>

      {/* 2. منطقة العمل الرئيسية (الشريط العلوي + المحتوى القابل للتمرير) */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* شريط التنقل العلوي Navbar */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 z-20">
          <div className="flex items-center gap-3">
            {/* زر فتح القائمة للشاشات الصغيرة */}
            <button
              type="button"
              onClick={() => setMobileDrawerOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              ☰
            </button>
            <h1 className="text-sm font-black text-slate-800 dark:text-slate-200">
              لوحة البيانات والتحليلات
            </h1>
          </div>

          {/* حساب المستخدم السريع */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">المهندس / أحمد</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow">
              أ
            </div>
          </div>
        </header>

        {/* مساحة العرض الرئيسية مع تمرير عمودي مخصص */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50 dark:bg-slate-950">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا التخطيط الهيكلي تطبيق نمط Application Shell؛ حيث يبقى الشريط الجانبي والشريط العلوي في موضعين ثابتين، بينما يتم تمرير المحتوى في حاوية overflow-y-auto مع حفظ تفضيل الطي في LocalStorage.",
      commonMistakes: [
        {
          wrong: "// وضع خاصية overflow-y-auto على كامل الصفحة (body) مما يجعل الشريط الجانبي والعلوي يختفيان عند النزول لأسفل",
          correct: "// تثبيت ارتفاع الشاشة على 100vh وقفل التمرير الخارجي بـ overflow-hidden، وتفعيل التمرير الداخلي في عنصر main فقط"
        }
      ],
      bestPractices: [
        "دعم وضع الطي (Collapsed Mode) لتمكين المستخدم من الاستفادة من المساحة الأفقية الكاملة في الشاشات العريضة",
        "تخزين حالة طي الشريط في LocalStorage لتبقى مفعلة عند تحديث الصفحة",
        "توفير درج جانبي (Mobile Drawer) يفتح فوق المحتوى عند استخدام الشاشات الصغيرة"
      ],
      infographic: {
        title: "هندسة تخطيط لوحة التحكم (Dashboard Shell)",
        nodes: [
          { label: "1. الشريط الجانبي الثابت (Sidebar)", detail: "روابط الأقسام مع دعم الطي وحفظ الحالة" },
          { label: "2. شريط الأدوات العلوي (Navbar)", detail: "محرك البحث، الإشعارات، وبيانات الحساب" },
          { label: "3. الحاوية القابلة للتمرير (Main)", detail: "منطقة المحتوى المستقلة مع شريط تمرير داخلي" },
          { label: "4. التجاوب الكامل (Responsive)", detail: "التحول لدرج منبثق على شاشات الهواتف المحمولة" }
        ]
      }
    },
    {
      id: "32.2.b",
      title: "إنشاء Sidebar وNavbar (Collapsible Sidebar, Navigation Links & User Menu)",
      englishTerm: {
        term: "Collapsible Sidebar & Navigation Controls",
        pronunciation: "كولابسابل سايدبار آند نافيجيشن كونترولز",
        meaning: "الشريط الجانبي القابل للطي وعناصر التحكم بالقائمة"
      },
      description: "يمثل الشريطان الجانبي والعلوي (Sidebar & Navbar) العمود الفقري للتنقل داخل لوحة التحكم. يتطلب بناؤهما إتاحة ميزات متقدمة: (1) القائمة الجانبية القابلة للطي (Collapsible Sidebar) التي تتحول بنقرة زر من شريط كامل بعناوين نصية إلى شريط أيقونات رفيع مع تلميحات عائمة (Tooltips)، (2) تمييز الرابط النشط حالياً (Active Link Highlighting) تلقائياً، (3) شريط بحث شامل في الهيدر، و (4) قائمة المستخدم المنسدلة (User Profile Dropdown) التي تحتوي على خيارات الملف الشخصي وتبديل الثيم وزر تسجيل الخروج.",
      analogy: "يشبه الفهرس الجانبي وشريط الترويسة في الموسوعات العلمية الفاخرة؛ الفهرس يرشدك مباشرة للمجلد الذي تريده، وترويسة كل صفحة توضح لك في أي باب أنت وتتيح لك البحث عن مصطلح معين.",
      whyItMatters: "يوفر سرعة وصول قصوى إلى كافة أجزاء النظام الإداري، ويحافظ على مساحة الشاشة للمخططات والجداول عبر إمكانية طي الأشرطة عند عدم الحاجة إليها.",
      syntax: `// مكون الرابط الجانبي مع فحص الحالة النشطة
const NavItem = ({ to, icon, label, isCollapsed }) => {
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={isActive ? "active-style" : "normal-style"}>
      <span>{icon}</span>
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};`,
      simpleExample: {
        title: "مكون شريط جانبي يبرز الرابط النشط ويدعم الطي",
        code: `import React, { useState } from "react";

// مكون الشريط الجانبي البسيط
function SimpleSidebar({ activeTab, onSelectTab }) {
  const [collapsed, setCollapsed] = useState(false);

  const links = [
    { id: "dash", label: "الرئيسية", icon: "🏠" },
    { id: "sales", label: "المبيعات", icon: "💰" },
    { id: "settings", label: "الإعدادات", icon: "⚙️" }
  ];

  return (
    <div style={{ width: collapsed ? "60px" : "200px", transition: "width 0.2s", backgroundColor: "#1e293b", color: "#fff", padding: "12px", minHeight: "100vh" }}>
      <button onClick={() => setCollapsed(!collapsed)} style={{ marginBottom: "16px", cursor: "pointer", width: "100%" }}>
        {collapsed ? "»" : "« طي"}
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onSelectTab(link.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px",
              backgroundColor: activeTab === link.id ? "#0284c7" : "transparent",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              textAlign: "right"
            }}
          >
            <span>{link.icon}</span>
            {!collapsed && <span>{link.label}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SimpleSidebar;`
      },
      advancedExample: {
        title: "شريط علوي احترافي (Navbar) مزود ببحث شامل، وقائمة إشعارات منبثقة، وقائمة ملف المستخدم",
        code: `import React, { useState, useRef, useEffect } from "react";

// مكون شريط التنقل العلوي المتكامل للوحة التحكم
export function DashboardNavbar({ onSearch, unreadNotificationsCount = 3, user }) {
  // حالة فتح قائمة الإشعارات
  const [showNotifications, setShowNotifications] = useState(false);
  // حالة فتح قائمة المستخدم
  const [showUserMenu, setShowUserMenu] = useState(false);
  // حالة نص البحث
  const [searchValue, setSearchValue] = useState("");

  const notifRef = useRef(null);
  const userMenuRef = useRef(null);

  // إغلاق القوائم عند النقر الخارجي
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifications(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="h-16 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between z-20 font-sans">
      {/* حقل البحث السريع في البيانات */}
      <div className="relative w-72">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            if (onSearch) onSearch(e.target.value);
          }}
          placeholder="بحث سريع (Ctrl + K)..."
          className="w-full pl-3 pr-9 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-sky-500"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
      </div>

      {/* الأدوات اليمنى: الإشعارات وحساب المستخدم */}
      <div className="flex items-center gap-4">
        {/* زر وقائمة الإشعارات */}
        <div ref={notifRef} className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <span className="text-base">🔔</span>
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center">
                {unreadNotificationsCount}
              </span>
            )}
          </button>

          {/* القائمة المنبثقة للإشعارات */}
          {showNotifications && (
            <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-3 z-30">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 px-2 py-1 border-b border-slate-100 dark:border-slate-800 flex justify-between">
                <span>الإشعارات الحديثة</span>
                <span className="text-sky-500 text-[10px] cursor-pointer">تحديد كمقروء</span>
              </div>
              <div className="space-y-1 my-2">
                <div className="p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-right cursor-pointer">
                  <div className="font-bold text-slate-900 dark:text-white">طلب جديد #ORD-9821</div>
                  <div className="text-[10px] text-slate-400">منذ 5 دقائق بواسطة أحمد خالد</div>
                </div>
                <div className="p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 text-xs text-right cursor-pointer">
                  <div className="font-bold text-slate-900 dark:text-white">تحديث قاعدة البيانات السحابية</div>
                  <div className="text-[10px] text-slate-400">اكتملت المزامنة بنجاح</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* قائمة ملف المستخدم */}
        <div ref={userMenuRef} className="relative">
          <button
            type="button"
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow">
              {(user?.name || "A")[0]}
            </div>
            <div className="hidden sm:block text-right">
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                {user?.name || "المدير العام"}
              </div>
              <div className="text-[10px] text-slate-400">admin@system.io</div>
            </div>
          </button>

          {/* القائمة المنبثقة لحساب المستخدم */}
          {showUserMenu && (
            <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-30 text-xs">
              <a href="#profile" className="block px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
                👤 الملف الشخصي
              </a>
              <a href="#preferences" className="block px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
                ⚙️ تفضيلات النظام
              </a>
              <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
              <button
                type="button"
                onClick={() => alert("تم تسجيل الخروج")}
                className="w-full text-right px-3 py-2 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-600 font-bold"
              >
                🚪 تسجيل الخروج
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}`
      },
      outputExplanation: "يوفر هذا المكون واجهة تحكم علوية تفاعلية تدعم إشعارات النظام في نافذة منبثقة، وقائمة ملف المستخدم مع زر تسجيل الخروج، وتجاوباً كاملاً مع النقر الخارجي لإغلاق القوائم تلقائياً.",
      commonMistakes: [
        {
          wrong: "// فتح القوائم المنبثقة دون مستمع للنقر الخارجي (Outside Click Listener)، مما يترك القائمة مفتوحة وتغطي المحتوى",
          correct: "// استخدام مرجع useRef مع حدث mousedown لإغلاق القوائم المنبثقة فور نقر المستخدم خارجها"
        }
      ],
      bestPractices: [
        "عرض مؤشر أحمر للرسائل غير المقروءة على أيقونة الجرس لجذب انتباه المدير للمهام الطارئة",
        "توفير اختصار لوحة مفاتيح (مثل Ctrl+K) للتركيز السريع على حقل البحث العام",
        "تنسيق القوائم المنبثقة بظلال ناعمة (shadow-2xl) وحدود رقيقة متوافقة مع الثيمين الفاتح والمظلم"
      ],
      infographic: {
        title: "منظومة أشرطة التحكم والتنقل",
        nodes: [
          { label: "الشريط الجانبي (Sidebar)", detail: "روابط الأقسام مع ميزة الطي والتلميحات العائمة" },
          { label: "حقل البحث الذكي (Search)", detail: "فلترة سريعة لكافة محتويات لوحة التحكم" },
          { label: "مركز الإشعارات (Notifications)", detail: "تنبيهات فورية بالطلبات والمزامنة السحابية" },
          { label: "قائمة المستخدم (User Dropdown)", detail: "إدارة الملف الشخصي وتسجيل الخروج الآمن" }
        ]
      }
    },
    {
      id: "32.2.c",
      title: "بناء صفحات متعددة باستخدام React Router (Nested Routes, Overview, Analytics, Settings)",
      englishTerm: {
        term: "Nested Routing & Sub-page Architecture",
        pronunciation: "نيستد راوتينج آند سب بيج آركيتكتشر",
        meaning: "المسارات المتداخلة وهندسة الصفحات الفرعية"
      },
      description: "تتكون لوحة التحكم الإدارية من عدة صفحات وظيفية متخصصة ترتبط معاً عبر بنية التوجيه المتداخل (Nested Routes) في `React Router`. يتم تعريف مسار أصل يمثل التخطيط العام للوحة (`/admin`)، وبداخله تتفرع الصفحات الفرعية عبر عنصر `<Outlet />`: صفحة النظرة العامة (`/admin/overview`)، صفحة التحليلات والمبيعات (`/admin/analytics`)، صفحة إدارة المستخدمين (`/admin/users`)، وصفحة إعدادات النظام (`/admin/settings`). يضمن هذا النمط بقاء التخطيط ثابتاً وتغيير محتوى المسار الفرعي فقط بسلاسة فائقة ودون وميض.",
      analogy: "يشبه تصفح فصول كتاب داخل غلاف جلدي ثابت؛ الغلاف والفهرس الخارجي يظلان في يدك، بينما تقلب الصفحات الداخلية بين فصول التحليلات والإحصائيات والإعدادات بسهولة تامة.",
      whyItMatters: "يتيح تنظيم الكود البرمجي في وحدات مستقلة (Modular Code Organization)، ودعم التحميل الكسول (Lazy Loading) لكل صفحة فرعية على حدة لتسريع وقت التحميل الأولي للوحة.",
      syntax: `// هيكل المسارات المتداخلة عبر React Router
<Routes>
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<OverviewPage />} />
    <Route path="analytics" element={<AnalyticsPage />} />
    <Route path="users" element={<UsersPage />} />
    <Route path="settings" element={<SettingsPage />} />
  </Route>
</Routes>`,
      simpleExample: {
        title: "محاكاة التوجيه المتداخل بين صفحات اللوحة عبر حالة التبويب",
        code: `import React, { useState } from "react";

// مكون محاكاة التوجيه بين صفحات اللوحة الفرعية
function TabBasedRouterDemo() {
  const [activeRoute, setActiveRoute] = useState("overview");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* شريط تبديل المسارات */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
        <button onClick={() => setActiveRoute("overview")} style={{ fontWeight: activeRoute === "overview" ? "bold" : "normal" }}>
          📊 النظرة العامة
        </button>
        <button onClick={() => setActiveRoute("analytics")} style={{ fontWeight: activeRoute === "analytics" ? "bold" : "normal" }}>
          📈 التحليلات
        </button>
        <button onClick={() => setActiveRoute("settings")} style={{ fontWeight: activeRoute === "settings" ? "bold" : "normal" }}>
          ⚙️ الإعدادات
        </button>
      </div>

      {/* عرض الصفحة الفرعية النشطة (Outlet Simulation) */}
      <div style={{ padding: "16px", backgroundColor: "#f8fafc", borderRadius: "10px" }}>
        {activeRoute === "overview" && <div>صفحة النظرة العامة: عرض المؤشرات الحيوية</div>}
        {activeRoute === "analytics" && <div>صفحة التحليلات: عرض الرسوم البيانية للمبيعات</div>}
        {activeRoute === "settings" && <div>صفحة الإعدادات: ضبط تفضيلات النظام</div>}
      </div>
    </div>
  );
}

export default TabBasedRouterDemo;`
      },
      advancedExample: {
        title: "نظام توجيه لوحة تحكم متكامل يدعم المسارات الفرعية وحماية الصلاحيات وتمرير وسائط الرابط",
        code: `// مخطط مسارات لوحة التحكم الإدارية
export const ADMIN_NAVIGATION_TREE = [
  {
    path: "/admin",
    label: "النظرة العامة",
    icon: "📊",
    component: "OverviewDashboardView",
    description: "ملخص الأداء والمؤشرات الرئيسية"
  },
  {
    path: "/admin/analytics",
    label: "التحليلات المتقدمة",
    icon: "📈",
    component: "DeepAnalyticsView",
    description: "معدلات التحويل ومصادر الزيارات"
  },
  {
    path: "/admin/transactions",
    label: "العمليات والطلبات",
    icon: "💳",
    component: "TransactionsTableView",
    description: "سجل العمليات المالية والمبيعات"
  },
  {
    path: "/admin/settings",
    label: "إعدادات المنصة",
    icon: "⚙️",
    component: "PlatformSettingsView",
    description: "الأمان، التكاملات، ونسخ البيانات"
  }
];

// فئة فحص أذونات المسارات الإدارية (Route Guard)
export class AdminRouteGuard {
  static isAuthorized(userRole, targetPath) {
    // صفحة الإعدادات مخصصة فقط للمدير الفائق (Super Admin)
    if (targetPath.includes("settings") && userRole !== "super_admin") {
      return { allowed: false, message: "صلاحية غير كافية لفتح إعدادات النظام الحساسة." };
    }
    return { allowed: true };
  }
}

// اختبار صلاحيات مسار الإعدادات
const regularAdminCheck = AdminRouteGuard.isAuthorized("editor", "/admin/settings");
console.log("هل يُسمح للمحرر بفتح الإعدادات؟", regularAdminCheck.allowed); // false
console.log("السبب:", regularAdminCheck.message);`
      },
      outputExplanation: "يوضح هذا التأسيس تقسيم لوحة التحكم إلى مسارات متداخلة مستقلة ومحمية بقواعد صلاحيات (Route Guards)، مما يضمن عدم وصول المستخدمين العاديين إلى صفحات الإعدادات الحساسة.",
      commonMistakes: [
        {
          wrong: "// إعادة كتابة مكونات الـ Navbar والـ Sidebar في كل صفحة فرعية بشكل مكرر",
          correct: "// استخدام نمط Layout مع عنصر <Outlet /> في React Router لتغليف جميع الصفحات الفرعية بهيكل موحد"
        }
      ],
      bestPractices: [
        "استخدام ميزة React.lazy مع Suspense لتحميل صفحات اللوحة عند الطلب وتخفيف حجم حزمة الجافاسكريبت الأولية",
        "تحديث عنوان الصفحة في المتصفح (document.title) ديناميكياً مع كل انتقال بين الصفحات الفرعية",
        "توفير مسار افتراضي (Index Route) يعرض صفحة النظرة العامة تلقائياً عند فتح الرابط الأساسي للوحة"
      ],
      infographic: {
        title: "شجرة المسارات المتداخلة للوحة التحكم",
        nodes: [
          { label: "المسار الأصل (/admin)", detail: "التخطيط العام الثابت: Sidebar + Navbar" },
          { label: "1. النظرة العامة (Overview)", detail: "المؤشرات السريعة وبطاقات الأداء الحيوية" },
          { label: "2. التحليلات (Analytics)", detail: "الرسوم البيانية وتدفق المبيعات التاريخي" },
          { label: "3. الإعدادات (Settings)", detail: "تفضيلات الأمان والمظهر والصلاحيات" }
        ]
      }
    },
    {
      id: "32.2.d",
      title: "إنشاء إحصائيات Cards (Metric KPI Cards & Sparklines)",
      englishTerm: {
        term: "KPI Metric Cards & Sparkline Indicators",
        pronunciation: "كي بي آي ميتريك كاردز آند سباركلاين إنديكيتورز",
        meaning: "بطاقات مؤشرات الأداء الرئيسية والرسوم البيانية المصغرة"
      },
      description: "بطاقات مؤشرات الأداء الرئيسية (KPI Cards) هي أول ما تقع عليه عين المدير عند دخول لوحة التحكم. تعرض هذه البطاقات الأرقام الحيوية للمؤسسة: مثل إجمالي الإيرادات، عدد المستخدمين الجدد، معدل التحويل، وحجم الطلبات اليومية. يتطلب تصميم البطاقة الاحترافية أربعة عناصر أساسية: (1) القيمة الرقمية الكبرى المنسقة مالياً أو عددياً، (2) مؤشر التغير والنمو بالنسبة المئوية (+12.5% أو -3.2%) مع لون أخضر أو أحمر وسهم دلالي، (3) أيقونة دلالية في خلفية مبهجة، و (4) رسم بياني خطي مصغر (Sparkline) يوضح منحنى الاتجاه خلال الأيام الأخيرة بلمحة سريعة.",
      analogy: "يشبه شاشات البورصة وغرف الأخبار الاقتصادية؛ تعرض مؤشرات الأسهم الخضراء والحمراء مع أسهم صعود وهبوط ورسوم بيانية خطية متناهية الصغر لتخبر المستثمر فجأة ما إذا كان السهم يرتفع أم يهبط.",
      whyItMatters: "تختصر آلاف السجلات المحاسبية في أربعة أرقام بالغة الوضوح تمكن متخذ القرار من تقييم صحة المشروع في أقل من 5 ثوانٍ.",
      syntax: `// هيكل بطاقة مؤشر الأداء KPI
<div className="kpi-card">
  <Header title="إجمالي المبيعات" icon={<DollarIcon />} />
  <Value amount="$124,500" />
  <TrendBadge percentage="+14.2%" isPositive={true} period="مقارنة بالشهر السابق" />
  <Sparkline data={monthlyTrend} />
</div>`,
      simpleExample: {
        title: "مكون بطاقة مؤشر أداء بسيط مع تحديد نسبة النمو",
        code: `import React from "react";

// مكون بطاقة مؤشر أداء مبسط
function SimpleKpiCard({ title, value, changePercent, isPositive }) {
  return (
    <div style={{
      padding: "20px",
      borderRadius: "16px",
      backgroundColor: "#ffffff",
      border: "1px solid #e2e8f0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      fontFamily: "sans-serif",
      minWidth: "200px"
    }}>
      <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "8px" }}>{title}</div>
      <div style={{ fontSize: "28px", fontWeight: "bold", color: "#0f172a", marginBottom: "8px" }}>{value}</div>
      <div style={{ fontSize: "12px", fontWeight: "bold", color: isPositive ? "#16a34a" : "#dc2626", display: "flex", alignItems: "center", gap: "4px" }}>
        <span>{isPositive ? "▲" : "▼"}</span>
        <span>{changePercent}%</span>
        <span style={{ color: "#94a3b8", fontWeight: "normal" }}>مقارنة بالشهر الماضي</span>
      </div>
    </div>
  );
}

export default SimpleKpiCard;`
      },
      advancedExample: {
        title: "شبكة بطاقات KPI متطورة مع رسوم خطية مصغرة بتقنية SVG وخلفيات متدرجة ناعمة",
        code: `import React from "react";

// مكون رسم بياني مصغر Sparkline باستخدام SVG الخفيف
function MiniSparkline({ data = [], strokeColor = "#10b981" }) {
  if (data.length < 2) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = 80;
  const height = 28;

  // توليد نقاط مسار الـ SVG
  const points = data
    .map((val, idx) => {
      const x = (idx / (data.length - 1)) * width;
      const y = height - ((val - min) / range) * height;
      return \`\${x},\${y}\`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        fill="none"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}

// مكون بطاقة KPI الاحترافية
export function AdvancedKpiMetricCard({ title, value, changePercent, isPositive, icon, history = [] }) {
  return (
    <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      {/* الصف العلوي: العنوان والأيقونة */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{title}</span>
        <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">
          {icon}
        </div>
      </div>

      {/* الصف الأوسط: القيمة الرقمية الكبرى */}
      <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
        {value}
      </div>

      {/* الصف السفلي: مؤشر النسبة والرسم البياني المصغر */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/60">
        <div className="flex items-center gap-1.5 text-xs font-bold">
          <span className={\`px-2 py-0.5 rounded-full flex items-center gap-1 \${
            isPositive
              ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600"
              : "bg-rose-50 dark:bg-rose-950/60 text-rose-600"
          }\`}>
            <span>{isPositive ? "↑" : "↓"}</span>
            <span>{Math.abs(changePercent)}%</span>
          </span>
          <span className="text-[10px] text-slate-400 font-normal">عن الأسبوع الماضي</span>
        </div>

        {/* الرسم الخطي المصغر */}
        <MiniSparkline
          data={history}
          strokeColor={isPositive ? "#10b981" : "#f43f5e"}
        />
      </div>
    </div>
  );
}

// شبكة بطاقات الأداء الرباعية المعيارية للوحة التحكم
export function KpiMetricsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <AdvancedKpiMetricCard
        title="إجمالي الإيرادات"
        value="$128,430"
        changePercent={14.8}
        isPositive={true}
        icon="💵"
        history={[10, 25, 18, 30, 45, 42, 60]}
      />
      <AdvancedKpiMetricCard
        title="الطلبات المكتملة"
        value="1,429"
        changePercent={8.4}
        isPositive={true}
        icon="📦"
        history={[20, 22, 19, 28, 35, 33, 40]}
      />
      <AdvancedKpiMetricCard
        title="المستخدمين الجدد"
        value="3,842"
        changePercent={-2.1}
        isPositive={false}
        icon="👥"
        history={[50, 48, 42, 45, 39, 41, 35]}
      />
      <AdvancedKpiMetricCard
        title="معدل التحويل (CR)"
        value="3.64%"
        changePercent={4.2}
        isPositive={true}
        icon="🎯"
        history={[2.1, 2.5, 2.8, 3.1, 3.0, 3.4, 3.6]}
      />
    </div>
  );
}`
      },
      outputExplanation: "توفر شبكة بطاقات KPI الرباعية نظرة بانورامية للمؤشرات الحيوية مدعمة برسم بياني خفيف (Sparkline) مبني مباشرة عبر SVG، لتقديم تصور بصري للاتجاه العام دون الحاجة لتحميل مكتبات رسم ثقيلة.",
      commonMistakes: [
        {
          wrong: "// استخدام مكتبات رسوم بيانية ضخمة لرسم خط بسيط في كل بطاقة مما يبطئ رندر الصفحة بشكل ملحوظ",
          correct: "// استخدام مسار SVG خفيف ومحسوب محلياً لرسم الـ Sparkline بأعلى كفاءة وأقل استهلاك للموارد"
        }
      ],
      bestPractices: [
        "تنسيق الأرقام الكبيرة بوضوح باستخدام الفواصل (مثلاً: 128,430$) لتسهيل قراءتها السريعة",
        "استخدام ألوان ذات دلالة واضحة: الأخضر للنمو الإيجابي والأحمر للهبوط والتحذير",
        "توضيح الإطار الزمني للمقارنة (مثال: 'مقارنة بالشهر الماضي') لمنح الرقم دلالة سياقية صحيحة"
      ],
      infographic: {
        title: "تشريح بطاقة مؤشر الأداء (KPI Card)",
        nodes: [
          { label: "1. العنوان والأيقونة", detail: "اسم المقياس وأيقونة تعبيرية واضحة" },
          { label: "2. القيمة الرقمية الكبرى", detail: "الرقم الأساسي بخط ضخم ومنسق مالياً" },
          { label: "3. شارة النمو والتغير", detail: "نسبة الصعود/الهبوط مع مؤشر لوني" },
          { label: "4. الرسم المصغر (Sparkline)", detail: "منحنى خطي يوضح مسار الأيام الأخيرة" }
        ]
      }
    },
    {
      id: "32.2.e",
      title: "عرض رسوم بيانية باستخدام Recharts (Recharts Integration, Area, Bar & Donut Charts)",
      englishTerm: {
        term: "Data Visualization with Recharts",
        pronunciation: "داتا فيجوالايزيشن ويذ ريتشارتس",
        meaning: "تصوير وتجسيد البيانات باستخدام مكتبة Recharts"
      },
      description: "تمثل الرسوم البيانية التفاعلية القلب النابض للوحات التحكم الإدارية. مكتبة `Recharts` هي المكتبة الأكثر شيوعاً في منظومة React؛ لأنها مبنية بأسلوب يعتمد كلياً على المكونات (Component-driven SVG). يغطي هذا الموضوع إنشاء ثلاثة أنواع محورية من المخططات: (1) المخطط المساحي المتدرج (AreaChart) لتتبع تدفق الإيرادات اليومي مع تأثيرات التدرج، (2) المخطط الشريطي (BarChart) لمقارنة المبيعات بين فئات المنتجات، و (3) مخطط الكعكة المجوفة (Donut / Pie Chart) لتوضيح الحصص النسبية لمصادر الزيارات وحركات الشراء، مع تخصيص التلميحات المنبثقة (Tooltips) ومحاور البيانات.",
      analogy: "يشبه شاشات التحليل الجغرافي والطقس في المحطات التلفزيونية؛ تحول ملايين القراءات الرقمية المعقدة إلى مساحات لونية وأعمدة واضحة يستطيع أي مشاهد فهم دلالتها في ثوانٍ معدودة.",
      whyItMatters: "يحول البيانات الجافة إلى رؤى بصرية ثرية (Actionable Insights) تسهل على الإدارة اكتشاف الأنماط الموسمية ومواطن الخلل في المبيعات.",
      syntax: `// استخدام Recharts في React
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

<ResponsiveContainer width="100%" height={300}>
  <AreaChart data={chartData}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="sales" stroke="#0ea5e9" fill="#e0f2fe" />
  </AreaChart>
</ResponsiveContainer>`,
      simpleExample: {
        title: "رسم بياني مساحي بسيط لتتبع الإيرادات الشهرية عبر محاكاة المكونات",
        code: `import React from "react";

// بيانات المبيعات الشهرية
const MONTHLY_SALES_DATA = [
  { month: "يناير", sales: 4000 },
  { month: "فبراير", sales: 6500 },
  { month: "مارس", sales: 5800 },
  { month: "أبريل", sales: 8200 },
  { month: "مايو", sales: 9500 }
];

// مكون محاكاة رسم الأعمدة البسيط
function SimpleBarChartVisualizer({ data = MONTHLY_SALES_DATA }) {
  const maxVal = Math.max(...data.map(d => d.sales));

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #e2e8f0", fontFamily: "sans-serif" }}>
      <h4 style={{ margin: "0 0 16px" }}>المبيعات الشهرية (بالدولار)</h4>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "16px", height: "180px", paddingTop: "20px" }}>
        {data.map((item, idx) => {
          const heightPercent = (item.sales / maxVal) * 100;
          return (
            <div key={idx} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "11px", fontWeight: "bold" }}>\${item.sales}</span>
              <div style={{ width: "100%", height: \`\${heightPercent}%\`, backgroundColor: "#0284c7", borderRadius: "6px 6px 0 0", transition: "height 0.3s" }} />
              <span style={{ fontSize: "12px", color: "#64748b" }}>{item.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SimpleBarChartVisualizer;`
      },
      advancedExample: {
        title: "لوحة تحليلات بيانية متقدمة تدمج المخطط المساحي التفاعلي مع بطاقة توزيع النسب ومحاور القياس",
        code: `import React, { useState } from "react";

// بيانات التدفق المالي الممتد على مدار الأسبوع
const WEEKLY_ANALYTICS = [
  { day: "السبت", revenue: 12400, orders: 120 },
  { day: "الأحد", revenue: 18200, orders: 185 },
  { day: "الإثنين", revenue: 15600, orders: 160 },
  { day: "الثلاثاء", revenue: 22400, orders: 240 },
  { day: "الأربعاء", revenue: 19800, orders: 210 },
  { day: "الخميس", revenue: 28900, orders: 310 },
  { day: "الجمعة", revenue: 24500, orders: 260 }
];

// مكون محاكاة Recharts المتطور برسم SVG متفاعل وتلميحات Tooltips
export function AdvancedAreaChartStudio({ data = WEEKLY_ANALYTICS }) {
  // حالة العمود المختار لإظهار التلميح
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const svgWidth = 600;
  const svgHeight = 220;

  // تحويل النقاط إلى إحداثيات SVG
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * (svgWidth - 60) + 30;
    const y = svgHeight - 40 - (d.revenue / maxRevenue) * (svgHeight - 80);
    return { x, y, ...d };
  });

  // بناء مسار المنحنى الممتلئ (Area Fill)
  const pathD = points.reduce((acc, p, i) => {
    return i === 0 ? \`M \${p.x} \${p.y}\` : \`\${acc} L \${p.x} \${p.y}\`;
  }, "");
  const closedPathD = \`\${pathD} L \${points[points.length - 1].x} \${svgHeight - 40} L \${points[0].x} \${svgHeight - 40} Z\`;

  return (
    <div className="w-full bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm font-sans">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            تحليل الإيرادات والطلبات الأسبوعية
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">مقارنة التدفق النقدي اليومي عبر المنصة</p>
        </div>
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full">
          معدل أسبوعي ممتاز +18%
        </span>
      </div>

      {/* منطقة الرسم البياني */}
      <div className="relative w-full overflow-x-auto">
        <svg viewBox={\`0 0 \${svgWidth} \${svgHeight}\`} className="w-full h-56">
          <defs>
            {/* التدرج اللوني للمساحة الممتلئة */}
            <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* خطوط الشبكة الأفقية */}
          {[0.25, 0.5, 0.75, 1].map((ratio, idx) => (
            <line
              key={idx}
              x1="30"
              y1={svgHeight - 40 - ratio * (svgHeight - 80)}
              x2={svgWidth - 30}
              y2={svgHeight - 40 - ratio * (svgHeight - 80)}
              stroke="currentColor"
              className="text-slate-100 dark:text-slate-800"
              strokeDasharray="4 4"
            />
          ))}

          {/* مساحة التدرج السفلي */}
          <path d={closedPathD} fill="url(#revenueGrad)" />

          {/* الخط العلوي للمنحنى */}
          <path d={pathD} fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />

          {/* نقاط البيانات التفاعلية */}
          {points.map((p, idx) => (
            <g key={idx} onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
              <circle
                cx={p.x}
                cy={p.y}
                r={hoveredIndex === idx ? 6 : 4}
                className="fill-sky-500 stroke-white dark:stroke-slate-900 cursor-pointer transition-all"
                strokeWidth="2"
              />
              {/* نص اليوم أسفل المحور */}
              <text
                x={p.x}
                y={svgHeight - 15}
                textAnchor="middle"
                className="text-[11px] fill-slate-400 font-medium"
              >
                {p.day}
              </text>
            </g>
          ))}
        </svg>

        {/* التلميح المنبثق التفاعلي (Interactive Tooltip) */}
        {hoveredIndex !== null && (
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white p-3 rounded-xl shadow-xl text-xs flex gap-4 pointer-events-none"
          >
            <div>
              <span className="text-slate-400 text-[10px] block">اليوم:</span>
              <strong className="text-white">{points[hoveredIndex].day}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">الإيراد:</span>
              <strong className="text-sky-400">\${points[hoveredIndex].revenue.toLocaleString()}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block">الطلبات:</span>
              <strong className="text-emerald-400">{points[hoveredIndex].orders} طلب</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا المثال كيفية بناء الرسوم البيانية التفاعلية المدعمة بالتدرجات اللونية وشبكات الإحداثيات والتلميحات المنبثقة الذكية (Tooltips)، مما يضفي لمسة احترافية تنافس أكبر منصات التحليلات العالمية.",
      commonMistakes: [
        {
          wrong: "// عدم استخدام حاوية ResponsiveContainer أو نسيان تحديد الارتفاع الثابت مما يتسبب في انهيار الرسم وظهوره بارتفاع 0px",
          correct: "// دائماً استخدم ResponsiveContainer مع تحديد height ثابت أو aspect ratio محكم لضمان تكيف الرسم مع عرض الشاشة"
        }
      ],
      bestPractices: [
        "استخدام التدرجات اللونية الناعمة (Linear Gradients) بدلاً من الألوان المصمتة لجعل المخططات مريحة للعين",
        "تنسيق قيم المحاور الرأسية (Y-Axis) بصيغة مختصرة (مثلاً: 10k بدلاً من 10,000) لتوفير المساحة الأفقية",
        "توفير مفتاح مصطلحات واضح (Legend) عند رسم أكثر من متغير بياني في نفس المخطط"
      ],
      infographic: {
        title: "منظومة الرسوم البيانية التفاعلية",
        nodes: [
          { label: "1. المخطط المساحي (Area)", detail: "تتبع التدفق المالي التراكمي وتغيرات الإيرادات" },
          { label: "2. المخطط الشريطي (Bar)", detail: "المقارنات الكمية بين الفئات والمنتجات" },
          { label: "3. المخطط الدائري (Donut)", detail: "الحصص النسبية لمصادر الزيارات والعملاء" },
          { label: "4. التلميحات الذكية (Tooltips)", detail: "عرض أرقام النقطة بدقة متناهية عند التحويم" }
        ]
      }
    },
    {
      id: "32.2.f",
      title: "إنشاء جداول باستخدام TanStack Table (TanStack Table Headless Architecture & Sorting)",
      englishTerm: {
        term: "TanStack Table Headless Architecture & Multi-sorting",
        pronunciation: "تان ستاك تيبل هيدليس آركيتكتشر آند مالتي سورتينج",
        meaning: "معمارية جداول تان ستاك بدون واجهة والترتيب المتعدد"
      },
      description: "تمثل جداول البيانات (Data Tables) الأداة الأكثر تعقيداً وأهمية في لوحات التحكم. مكتبة `TanStack Table` (المعروفة سابقاً بـ React Table) هي المعيار الذهبي لبناء الجداول؛ لأنها تتبع نمط 'المكتبة بدون واجهة' (Headless UI Library). تعني 'Headless' أن المكتبة تتولى 100% من منطق الجداول المعقد (الفرز Sorting، التصفية Filtering، الترقيم Pagination، وتحديد الصفوف Selection)، وتترك لك 100% من حرية تصميم عناصر الـ HTML و Tailwind CSS كما تشاء دون إجبارك على قوالب جاهزة قبيحة.",
      analogy: "يشبه شراء محرك سيارة خارق وفائق الأداء؛ تضع المحرك في الهيكل المعدني الذي تختاره بنفسك وتصمم الصالون الداخلي على ذوقك الخاص، فتحصل على سيارة أحلامك بجمال من اختيارك وقوة ميكانيكية لا تُضاهى.",
      whyItMatters: "يمنحك تحكماً مطلقاً في كل بكسل داخل الجدول مع التمتع بقدرات فرز وترقيم هائلة تتحمل آلاف الصفوف دون أدنى بطء.",
      syntax: `// استخدام هوك useReactTable في TanStack Table
import { useReactTable, getCoreRowModel, getSortedRowModel } from "@tanstack/react-table";

const table = useReactTable({
  data,
  columns,
  state: { sorting },
  onSortingChange: setSorting,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel()
});`,
      simpleExample: {
        title: "جدول بيانات بسيط يدعم الفرز عند النقر على رؤوس الأعمدة",
        code: `import React, { useState } from "react";

// بيانات تجريبية للمستخدمين
const SAMPLE_USERS = [
  { id: 1, name: "عمر خالد", role: "مدير", orders: 15 },
  { id: 2, name: "سارة أحمد", role: "محرر", orders: 28 },
  { id: 3, name: "ياسين علي", role: "عميل", orders: 8 }
];

// جدول مبسط يدعم الفرز
function SimpleSortableTable() {
  const [data, setData] = useState(SAMPLE_USERS);
  const [sortField, setSortField] = useState("name");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field) => {
    const isAsc = sortField === field ? !sortAsc : true;
    setSortField(field);
    setSortAsc(isAsc);

    const sorted = [...data].sort((a, b) => {
      if (a[field] < b[field]) return isAsc ? -1 : 1;
      if (a[field] > b[field]) return isAsc ? 1 : -1;
      return 0;
    });
    setData(sorted);
  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "sans-serif", fontSize: "14px" }}>
      <thead>
        <tr style={{ backgroundColor: "#f1f5f9", textAlign: "right" }}>
          <th onClick={() => handleSort("name")} style={{ padding: "10px", cursor: "pointer" }}>
            الاسم {sortField === "name" ? (sortAsc ? "▲" : "▼") : ""}
          </th>
          <th onClick={() => handleSort("role")} style={{ padding: "10px", cursor: "pointer" }}>
            الدور {sortField === "role" ? (sortAsc ? "▲" : "▼") : ""}
          </th>
          <th onClick={() => handleSort("orders")} style={{ padding: "10px", cursor: "pointer" }}>
            الطلبات {sortField === "orders" ? (sortAsc ? "▲" : "▼") : ""}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(u => (
          <tr key={u.id} style={{ borderBottom: "1px solid #e2e8f0" }}>
            <td style={{ padding: "10px" }}>{u.name}</td>
            <td style={{ padding: "10px" }}>{u.role}</td>
            <td style={{ padding: "10px" }}>{u.orders}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SimpleSortableTable;`
      },
      advancedExample: {
        title: "جدول TanStack متكامل يحاكي عمارة Headless مع تعريف الأعمدة وخلايا مخصصة وأوسمة ملونة",
        code: `import React, { useState, useMemo } from "react";

// بيانات العمليات التجارية
const ORDERS_DATASET = [
  { id: "ORD-101", customer: "محمد حسن", total: 450, status: "completed", date: "2026-10-24" },
  { id: "ORD-102", customer: "ريم عبد الله", total: 120, status: "pending", date: "2026-10-25" },
  { id: "ORD-103", customer: "خالد منصور", total: 890, status: "completed", date: "2026-10-25" },
  { id: "ORD-104", customer: "فاطمة إبراهيم", total: 230, status: "cancelled", date: "2026-10-26" }
];

// ألوان شارات الحالات
const STATUS_BADGES = {
  completed: { label: "مكتمل", classes: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  pending: { label: "قيد الانتظار", classes: "bg-amber-50 text-amber-700 border-amber-200" },
  cancelled: { label: "ملغي", classes: "bg-rose-50 text-rose-700 border-rose-200" }
};

// مكون جدول العمليات الاحترافي
export function AdvancedTransactionsTable() {
  const [sortCol, setSortCol] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");

  // الفرز المشتق للبيانات
  const sortedOrders = useMemo(() => {
    return [...ORDERS_DATASET].sort((a, b) => {
      let valA = a[sortCol];
      let valB = b[sortCol];
      if (valA < valB) return sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortCol, sortDirection]);

  // تبديل اتجاه الفرز
  const toggleSort = (colKey) => {
    if (sortCol === colKey) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortCol(colKey);
      setSortDirection("asc");
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm font-sans">
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white">سجل العمليات التجارية</h3>
        <span className="text-xs text-slate-400">إجمالي السجلات: {ORDERS_DATASET.length}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-right text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-400 border-b border-slate-100 dark:border-slate-800">
              <th onClick={() => toggleSort("id")} className="p-3.5 font-bold cursor-pointer hover:text-slate-600">
                رقم الطلب {sortCol === "id" && (sortDirection === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => toggleSort("customer")} className="p-3.5 font-bold cursor-pointer hover:text-slate-600">
                العميل {sortCol === "customer" && (sortDirection === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => toggleSort("total")} className="p-3.5 font-bold cursor-pointer hover:text-slate-600">
                المبلغ {sortCol === "total" && (sortDirection === "asc" ? "▲" : "▼")}
              </th>
              <th className="p-3.5 font-bold">الحالة</th>
              <th onClick={() => toggleSort("date")} className="p-3.5 font-bold cursor-pointer hover:text-slate-600">
                التاريخ {sortCol === "date" && (sortDirection === "asc" ? "▲" : "▼")}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {sortedOrders.map((order) => {
              const badge = STATUS_BADGES[order.status] || STATUS_BADGES.pending;
              return (
                <tr key={order.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
                  <td className="p-3.5 font-mono font-bold text-slate-900 dark:text-white">{order.id}</td>
                  <td className="p-3.5 font-medium text-slate-700 dark:text-slate-300">{order.customer}</td>
                  <td className="p-3.5 font-black text-slate-900 dark:text-white">\${order.total}</td>
                  <td className="p-3.5">
                    <span className={\`px-2.5 py-0.5 rounded-full border text-[10px] font-bold \${badge.classes}\`}>
                      {badge.label}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-400">{order.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوضح هذا المثال كيفية بناء جداول احترافية تدعم الفرز التفاعلي عند النقر على الأعمدة، مع تخصيص الخلايا لإظهار وسوم الحالات الملونة، واستخدام الخطوط أحادية العرض (Monospace) لأرقام الطلبات.",
      commonMistakes: [
        {
          wrong: "// استخدام حزم جداول جاهزة تفرض أنماط CSS مغلقة يصعب تعديلها أو تعريبها أو دعم الوضع الداكن فيها",
          correct: "// استخدام نمط الجداول بدون واجهة (Headless) مثل TanStack Table لضمان التوافق الكامل مع Tailwind CSS والـ RTL"
        }
      ],
      bestPractices: [
        "إضافة سهم دلالي (▲ أو ▼) بجانب رأس العمود المفروز لتوضيح اتجاه الترتيب للمستخدم بوضوح",
        "تغليف الجدول في حاوية ذات خاصية overflow-x-auto لضمان التمرير الأفقي السلس في الشاشات الصغيرة دون كسر التخطيط العام",
        "تنسيق المبالغ المالية والأرقام بخطوط واضحة وتبريز الحالات بألوان متفق عليها عالمياً"
      ],
      infographic: {
        title: "فلسفة معمارية جداول TanStack Headless",
        nodes: [
          { label: "1. النواة الحسابية (Headless Core)", detail: "إدارة الفرز، والتصفية، والترقيم بدون واجهة" },
          { label: "2. تعريف الأعمدة (Columns Def)", detail: "تحديد مفاتيح البيانات وتخصيص دوال الرندر" },
          { label: "3. الواجهة المخصصة (Tailwind)", detail: "بناء وسوم <table> وتنسيق الألوان بحرية تامة" },
          { label: "4. الأداء والاستقرار", detail: "تحمل مئات الصفوف والتحديث السلس دون وميض" }
        ]
      }
    },
    {
      id: "32.2.g",
      title: "إضافة البحث والفلترة (Table Global Filtering & Column Filters)",
      englishTerm: {
        term: "Table Global & Column-specific Filtering",
        pronunciation: "تيبل جلوبال آند كولم سبيسيفيك فيلترينج",
        meaning: "البحث الشامل والتصفية المخصصة لأعمدة الجدول"
      },
      description: "تحتاج جداول الأعمال الإدارية إلى قدرات بحث ثنائية الأبعاد: (1) البحث الشامل (Global Search) الذي يفحص أي كلمة في كافة أعمدة الجدول (اسم العميل، رقم الهاتف، رقم المعاملة، أو الملاحظات) من حقل إدخال واحد، و (2) التصفية المخصصة للأعمدة (Column-level Filters)؛ مثل تصفية العمليات بحسب حالتها (ناجحة / معلقة) عبر قائمة منسدلة، أو تصفية نطاق التواريخ. يتم ربط هذه الفلاتر بمنطق TanStack Table لترشيح البيانات آنياً وعرض عدد السجلات المتبقية.",
      analogy: "يشبه استخدام أجهزة التفتيش الأمني المزدوجة في المطارات؛ بوابة التفتيش الكبرى الأولى تفحص جميع الحقائب والأشخاص بشكل عام (Global Search)، بينما يُفرد فحص خاص إضافي للأجهزة الإلكترونية في مسار مستقل (Column Filter).",
      whyItMatters: "يمكن المدير من العثور على أي عملية أو عميل في غمضة عين وسط آلاف السجلات، مما يرفع الكفاءة التشغيلية ويختصر وقت المراجعة.",
      syntax: `// تطبيق الفلترة الشاملة في TanStack Table
const table = useReactTable({
  state: { globalFilter },
  onGlobalFilterChange: setGlobalFilter,
  getFilteredRowModel: getFilteredRowModel()
});`,
      simpleExample: {
        title: "بحث شامل في جدول المستخدمين عبر حقل نصي مفرد",
        code: `import React, { useState } from "react";

// بيانات المستخدمين
const DATA = [
  { name: "خالد", email: "khaled@test.com", city: "جدة" },
  { name: "نورة", email: "noura@test.com", city: "الرياض" },
  { name: "سلطان", email: "sultan@test.com", city: "الدمام" }
];

function GlobalSearchTableDemo() {
  const [query, setQuery] = useState("");

  // فلترة شاملة تفحص كل الحقول
  const filtered = DATA.filter(row => {
    const q = query.toLowerCase();
    return row.name.toLowerCase().includes(q) ||
           row.email.toLowerCase().includes(q) ||
           row.city.toLowerCase().includes(q);
  });

  return (
    <div style={{ padding: "16px", fontFamily: "sans-serif" }}>
      <input
        type="text"
        placeholder="بحث شامل في الجدول..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "12px", boxSizing: "border-box" }}
      />
      <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
        النتائج المطابقة: {filtered.length}
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f1f5f9" }}>
            <th style={{ padding: "8px", textAlign: "right" }}>الاسم</th>
            <th style={{ padding: "8px", textAlign: "right" }}>البريد</th>
            <th style={{ padding: "8px", textAlign: "right" }}>المدينة</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>{r.name}</td>
              <td style={{ padding: "8px" }}>{r.email}</td>
              <td style={{ padding: "8px" }}>{r.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GlobalSearchTableDemo;`
      },
      advancedExample: {
        title: "نظام فلترة جداول احترافي يجمع بين البحث الشامل وفلتر حالة المعاملة وزر إعادة التعيين",
        code: `import React, { useState, useMemo } from "react";

// بيانات العمليات التفصيلية
const TRANSACTIONS_DATA = [
  { id: "TX-901", user: "علي الأحمد", amount: 1500, status: "مقبول", method: "فيزا" },
  { id: "TX-902", user: "منى خليل", amount: 320, status: "قيد المراجعة", method: "مدى" },
  { id: "TX-903", user: "باسم سعيد", amount: 750, status: "مرفوض", method: "ماستركارد" },
  { id: "TX-904", user: "أروى ناصر", amount: 2400, status: "مقبول", method: "تحويل بنكي" }
];

// شريط أدوات الفلترة والبحث المزدوج
export function FilterableTransactionsStudio() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("الكل");

  // تطبيق التصفية المركبة
  const filteredData = useMemo(() => {
    return TRANSACTIONS_DATA.filter((item) => {
      // 1. فلتر الحالة
      const matchStatus = statusFilter === "الكل" || item.status === statusFilter;

      // 2. البحث الشامل في جميع الحقول
      const q = search.trim().toLowerCase();
      const matchSearch = !q ||
        item.id.toLowerCase().includes(q) ||
        item.user.toLowerCase().includes(q) ||
        item.method.toLowerCase().includes(q) ||
        String(item.amount).includes(q);

      return matchStatus && matchSearch;
    });
  }, [search, statusFilter]);

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm font-sans space-y-4">
      {/* شريط الفلاتر العلوي */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* حقل البحث الشامل */}
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="بحث برقم العملية، اسم العميل، طريقة الدفع..."
            className="w-full pl-4 pr-10 py-2.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none"
          />
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🔍</span>
        </div>

        {/* قائمة تصفية الحالة */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-slate-400 whitespace-nowrap">الحالة:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="text-xs py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none font-bold"
          >
            <option value="الكل">جميع الحالات</option>
            <option value="مقبول">مقبول فقط</option>
            <option value="قيد المراجعة">قيد المراجعة</option>
            <option value="مرفوض">مرفوض</option>
          </select>

          {/* زر إعادة التعيين السريع */}
          {(search || statusFilter !== "الكل") && (
            <button
              type="button"
              onClick={() => { setSearch(""); setStatusFilter("الكل"); }}
              className="text-xs text-rose-500 hover:underline px-2 whitespace-nowrap"
            >
              تصفير الفلاتر
            </button>
          )}
        </div>
      </div>

      {/* جدول النتائج */}
      <div className="overflow-x-auto">
        <table className="w-full text-right text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-400">
              <th className="p-3">رقم العملية</th>
              <th className="p-3">العميل</th>
              <th className="p-3">المبلغ</th>
              <th className="p-3">طريقة الدفع</th>
              <th className="p-3">الحالة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {filteredData.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <td className="p-3 font-mono font-bold">{row.id}</td>
                <td className="p-3">{row.user}</td>
                <td className="p-3 font-black">\${row.amount}</td>
                <td className="p-3 text-slate-500">{row.method}</td>
                <td className="p-3">
                  <span className={\`px-2 py-0.5 rounded-full text-[10px] font-bold \${
                    row.status === "مقبول" ? "bg-emerald-100 text-emerald-800" :
                    row.status === "مرفوض" ? "bg-rose-100 text-rose-800" : "bg-amber-100 text-amber-800"
                  }\`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-[11px] text-slate-400 pt-2 flex justify-between">
        <span>العمليات المطابقة: {filteredData.length} من أصل {TRANSACTIONS_DATA.length}</span>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يدمج هذا المكون بين البحث الشامل المتعدد في كافة الحقول مع تصفية محددة لقيم عمود الحالة (Status)، ويوفر زراً فورياً لتصفير جميع شروط البحث بضغطة واحدة.",
      commonMistakes: [
        {
          wrong: "// تحويل قيم الأرقام أو المعرفات دون تحويلها لنصوص مما يسبب خطأ TypeError: item.amount.toLowerCase is not a function",
          correct: "// دائماً استخدم String(val).toLowerCase() لضمان أمان البحث في الحقول الرقمية والتاريخية"
        }
      ],
      bestPractices: [
        "عرض عدد النتائج المطابقة بشكل حي بجانب الجدول لتأكيد نتائج التصفية للمستخدم",
        "توفير زر تصفير فوري يظهر فقط عند وجود فلاتر نشطة لتسريع إعادة ضبط الجدول",
        "استخدام useMemo لحساب المصفوفة المفلترة لمنع إعادة الفحص عند رندرات الصفحة غير المرتبطة بالجدول"
      ],
      infographic: {
        title: "هندسة الفلترة الشاملة والمخصصة للجداول",
        nodes: [
          { label: "1. حقل البحث الشامل (Global Search)", detail: "فحص متزامن في المعرف والاسم والبريد والمبلغ" },
          { label: "2. فلاتر الأعمدة (Column Filters)", detail: "قوائم منسدلة للحالات وتحديد نطاقات الأسعار" },
          { label: "3. دمج الشروط عبر useMemo", detail: "تطبيق قواعد الفلترة بشكل متزامن وذري" },
          { label: "4. تصفير الفلاتر بنقرة زر", detail: "إعادة تعيين الحالة للوضع الافتراضي بلمح البصر" }
        ]
      }
    },
    {
      id: "32.2.h",
      title: "تنفيذ Pagination (Client & Server Pagination Controls)",
      englishTerm: {
        term: "Table Pagination & Page Size Controls",
        pronunciation: "تيبل باجينيشن آند بيج سايز كونترولز",
        meaning: "ترقيم صفحات الجداول والتحكم في حجم الصفحة"
      },
      description: "عندما تحتوي لوحة التحكم على آلاف السجلات، يصبح عرضها دفعة واحدة في صفحة واحدة أمراً مستحيلاً يؤدي لتجمد المتصفح وانهيار الأداء. ميزة الترقيم (Pagination) تقسم البيانات إلى شرائح محددة (مثلاً 10، 25، أو 50 سجلاً لكل صفحة). يتضمن نظام الترقيم الاحترافي: أزرار التنقل (الصفحة السابقة، التالية، الأولى، والأخيرة)، قائمة اختيار حجم الصفحة (Page Size Selector)، مؤشر رقم الصفحة الحالي نسبة للإجمالي (مثال: صفحة 3 من 12)، وعرض نطاق السجلات الحالية المعروضة (مثال: عرض 21-30 من أصل 120 سجلاً).",
      analogy: "يشبه تصفح كتاب ضخم ذي 500 صفحة؛ لا يتم نشر كل كلمات الكتاب في صفحة واحدة بطول برج خليفة، بل تقسم الفقرات إلى صفحات مرقمة مع وجود فهرس وزر للقفز السريع للصفحة المطلوبة.",
      whyItMatters: "يحافظ على استقرار استهلاك الذاكرة في المتصفح، ويسرع وقت الرندر الأولي، ويمنح المستخدم تنظيماً هادئاً لتصفح البيانات دون إرهاق بصري.",
      syntax: `// منطق ترقيم البيانات في جانب العميل (Client-side Pagination)
const pageCount = Math.ceil(totalItems / pageSize);
const paginatedData = data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);`,
      simpleExample: {
        title: "ترقيم بيانات محلي مع أزرار التنقل السابقة والتالية",
        code: `import React, { useState } from "react";

// مصفوفة تجريبية من 25 عنصراً
const ALL_ITEMS = Array.from({ length: 25 }, (_, i) => \`عنصر رقم \${i + 1}\`);

function SimplePaginationDemo() {
  const [page, setPage] = useState(0);
  const pageSize = 5;
  const totalPages = Math.ceil(ALL_ITEMS.length / pageSize);

  // شريحة الصفحة الحالية
  const pageItems = ALL_ITEMS.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div style={{ padding: "16px", fontFamily: "sans-serif", maxWidth: "300px" }}>
      <h4>قائمة العناصر المرقمة</h4>
      <ul>
        {pageItems.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
        <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>
          السابق
        </button>
        <span style={{ fontSize: "12px" }}>{page + 1} / {totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))} disabled={page >= totalPages - 1}>
          التالي
        </button>
      </div>
    </div>
  );
}

export default SimplePaginationDemo;`
      },
      advancedExample: {
        title: "شريط تحكم ترقيم احترافي متكامل مع اختيار حجم الصفحة والقفز المباشر للصفحات",
        code: `import React from "react";

// مكون شريط الترقيم المتطور للوحات التحكم
export function AdvancedPaginationToolbar({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startItem = totalItems === 0 ? 0 : currentPage * pageSize + 1;
  const endItem = Math.min((currentPage + 1) * pageSize, totalItems);

  // إنشاء مصفوفة أرقام الصفحات مع اختصار النقاط (...)
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      if (
        i === 0 ||
        i === totalPages - 1 ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 px-6 py-4 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs shadow-sm">
      {/* نطاق السجلات المعروضة ومحدد حجم الصفحة */}
      <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
        <span>
          عرض <strong className="text-slate-900 dark:text-white">{startItem}-{endItem}</strong> من أصل <strong className="text-slate-900 dark:text-white">{totalItems}</strong>
        </span>

        <div className="flex items-center gap-1.5 border-r border-slate-200 dark:border-slate-800 pr-4">
          <span>السطور:</span>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="py-1 px-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold outline-none"
          >
            {[5, 10, 25, 50].map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>

      {/* أزرار التنقل بين الصفحات */}
      <div className="flex items-center gap-1">
        {/* زر الانتقال للبداية */}
        <button
          type="button"
          onClick={() => onPageChange(0)}
          disabled={currentPage === 0}
          className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold"
          title="الصفحة الأولى"
        >
          ««
        </button>

        {/* زر الصفحة السابقة */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold"
        >
          السابق
        </button>

        {/* أرقام الصفحات */}
        <div className="flex items-center gap-1 mx-1">
          {getPageNumbers().map((num, idx) => {
            if (num === "...") {
              return <span key={idx} className="px-2 text-slate-400">...</span>;
            }
            const isCurrent = num === currentPage;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onPageChange(num)}
                className={\`w-8 h-8 rounded-xl font-bold transition \${
                  isCurrent
                    ? "bg-sky-600 text-white shadow-sm"
                    : "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }\`}
              >
                {num + 1}
              </button>
            );
          })}
        </div>

        {/* زر الصفحة التالية */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages - 1}
          className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold"
        >
          التالي
        </button>

        {/* زر الانتقال للنهاية */}
        <button
          type="button"
          onClick={() => onPageChange(totalPages - 1)}
          disabled={currentPage >= totalPages - 1}
          className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold"
          title="الصفحة الأخيرة"
        >
          »»
        </button>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوفر هذا الشريط حلاً قياسياً متكاملاً لترقيم الجداول؛ يتيح تغيير حجم الصفحة (5، 10، 25، 50)، والقفز السريع للصفحتين الأولى والأخيرة، مع إظهار نقاط الاختصار (...) للصفحات البعيدة لضمان عدم ازدحام الأزرار.",
      commonMistakes: [
        {
          wrong: "// نسيان إعادة تصفير الصفحة الحالية (setCurrentPage(0)) عند تغيير حجم الصفحة أو تغيير معايير البحث والفلترة",
          correct: "// دائماً قم بإعادة تعيين currentPage إلى 0 عند تغيير حجم الصفحة أو البحث لتفادي الوقوف في صفحة فارغة خارج النطاق"
        }
      ],
      bestPractices: [
        "إتاحة اختصار أرقام الصفحات بواسطة علامة (...) لتفادي خروج الأزرار عن إطار الشاشة في الجداول التي تحوي مئات الصفحات",
        "تعطيل زري 'السابق' و'الأولى' عند التواجد في أول صفحة، وزري 'التالي' و'الأخيرة' عند التواجد في نهاية الجدول",
        "تنسيق نطاق السجلات (مثال: 'عرض 1-10 من أصل 50') لتزويد المستخدم بسياق كمي واضح لموضعه الحالي"
      ],
      infographic: {
        title: "آلية ترقيم الجداول وضبط الحدود",
        nodes: [
          { label: "1. حجم الصفحة (Page Size)", detail: "تحديد عدد السجلات في الشريحة (10, 25, 50)" },
          { label: "2. حساب عدد الصفحات", detail: "Math.ceil(totalItems / pageSize)" },
          { label: "3. استخراج الشريحة الحالية", detail: "data.slice(start, end) بشكل نقي" },
          { label: "4. أزرار القفز والتنقل", detail: "التنقل الخطي والقفز للبداية والنهاية" }
        ]
      }
    },
    {
      id: "32.2.i",
      title: "إضافة الوضع الداكن (Dark Mode Theme Toggle & Persistent Preference)",
      englishTerm: {
        term: "Dark Mode Theme Architecture & Persistence",
        pronunciation: "دارك مود ثيم آركيتكتشر آند بيرسيستنس",
        meaning: "معمارية الوضع الداكن وتخزين التفضيل الدائم"
      },
      description: "الوضع الداكن (Dark Mode) لم يعد مجرد خيار تجميلي إضافي، بل أصبح معياراً هندسياً إلزامياً في لوحات التحكم الاحترافية التي يعمل عليها الموظفون والمهندسون لساعات طويلة. يتطلب تطبيق الوضع الداكن بنية ثلاثية المستويات: (1) كشف تفضيلات نظام التشغيل عبر استعلام الوسائط `prefers-color-scheme`، (2) حفظ وتثبيت اختيار المستخدم في `LocalStorage` لتطبيقه في الزيارات القادمة، و (3) حقن فئة `dark` في جذر مستند الـ HTML (`document.documentElement`) مع استخدام فئات Tailwind CSS الداكنة (`dark:bg-slate-900`, `dark:text-white`) في كافة المكونات لضمان تباين مريح وتجربة خالية من وميض الشاشة البيضاء (FOUC).",
      analogy: "يشبه إعدادات لوحة قيادة السيارة ليلاً؛ تتحول الإضاءة الخلفية للعدادات تلقائياً إلى الوضع الخافت المظلم بمجرد حلول المساء لحماية عين السائق من الإبهار، مع إمكانية ضبط الإضاءة يدوياً حسب الرغبة.",
      whyItMatters: "يحمي عيون المستخدمين من الإجهاد البصري أثناء نوبات العمل الليلية، ويوفر طاقة بطاريات الأجهزة المحمولة ذات شاشات OLED.",
      syntax: `// دالة تبديل الوضع الداكن مع مزامنة LocalStorage
const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};`,
      simpleExample: {
        title: "زر تبديل الوضع الداكن البسيط مع تحديث كلاس HTML",
        code: `import React, { useState, useEffect } from "react";

// مكون تبديل الثيم البسيط
function SimpleThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // تبديل فئة dark في عنصر html
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      style={{
        padding: "8px 16px",
        borderRadius: "10px",
        border: "1px solid #94a3b8",
        backgroundColor: isDark ? "#0f172a" : "#ffffff",
        color: isDark ? "#ffffff" : "#0f172a",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      {isDark ? "☀️ الوضع الفاتح" : "🌙 الوضع الداكن"}
    </button>
  );
}

export default SimpleThemeSwitcher;`
      },
      advancedExample: {
        title: "نظام ثيمات احترافي ثلاثي الخيارات (فاتح، داكن، وتلقائي بحسب النظام) مع منع الوميض والتخزين الدائم",
        code: `import React, { useState, useEffect } from "react";

// أنواع السمات المتاحة
export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system"
};

// هوك مخصص لإدارة سمة لوحة التحكم الاحترافية
export function useDashboardTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("DASHBOARD_THEME") || THEME_MODES.SYSTEM;
  });

  useEffect(() => {
    const root = document.documentElement;
    const systemQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // دالة تطبيق الثيم الفعلي على الـ DOM
    const applyTheme = () => {
      let shouldBeDark = false;

      if (theme === THEME_MODES.DARK) {
        shouldBeDark = true;
      } else if (theme === THEME_MODES.SYSTEM) {
        shouldBeDark = systemQuery.matches;
      }

      if (shouldBeDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    applyTheme();
    localStorage.setItem("DASHBOARD_THEME", theme);

    // الاستماع لتغير تفضيل نظام التشغيل في الوقت الفعلي
    const handleSystemChange = () => {
      if (theme === THEME_MODES.SYSTEM) applyTheme();
    };

    systemQuery.addEventListener("change", handleSystemChange);
    return () => systemQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  return [theme, setTheme];
}

// مكون مبدل السمات الثلاثي الأنيق لشريط Navbar
export function ThemeSegmentedControl() {
  const [theme, setTheme] = useDashboardTheme();

  return (
    <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-sans">
      <button
        type="button"
        onClick={() => setTheme(THEME_MODES.LIGHT)}
        className={\`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1 \${
          theme === THEME_MODES.LIGHT
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
        }\`}
        title="الوضع الفاتح"
      >
        <span>☀️</span>
        <span className="hidden sm:inline">فاتح</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme(THEME_MODES.DARK)}
        className={\`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1 \${
          theme === THEME_MODES.DARK
            ? "bg-slate-900 text-white shadow-sm"
            : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
        }\`}
        title="الوضع الداكن"
      >
        <span>🌙</span>
        <span className="hidden sm:inline">داكن</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme(THEME_MODES.SYSTEM)}
        className={\`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1 \${
          theme === THEME_MODES.SYSTEM
            ? "bg-sky-600 text-white shadow-sm"
            : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
        }\`}
        title="تلقائي بحسب إعدادات الجهاز"
      >
        <span>💻</span>
        <span className="hidden sm:inline">تلقائي</span>
      </button>
    </div>
  );
}`
      },
      outputExplanation: "يوفر هذا المكون تحكماً ثلاثياً راقياً (Segmented Control)؛ يتيح للمدير اختيار الوضع الفاتح أو الداكن أو التلقائي المتكيف مع إعدادات نظام تشغيله في الوقت الفعلي مع الحفظ الدائم.",
      commonMistakes: [
        {
          wrong: "// استخدام ألوان نصوص سوداء أو بيضاء فاقعة تسبب تباينات حادة ومزعجة للعين في الوضع الداكن",
          correct: "// استخدام درجات ألوان ناعمة متدرجة (مثل Slate 800 للخلفيات و Slate 100 للنصوص) لتحقيق قراءة مريحة"
        }
      ],
      bestPractices: [
        "دعم خيار 'تلقائي / النظام' (System) لمزامنة ثيم لوحة التحكم تلقائياً مع جدول نظام تشغيل المستخدم",
        "تطبيق تحولات ناعمة (transition-colors duration-200) لمنع الوميض الصادم للعين عند تبديل الثيم",
        "اختبار كافة الرسوم البيانية والجداول في كلا الوضعين للتأكد من وضوح خطوط المحاور والأرقام"
      ],
      infographic: {
        title: "معمارية الوضع الداكن الثلاثية",
        nodes: [
          { label: "1. تفضيل النظام (OS Sync)", detail: "رصد prefers-color-scheme تلقائياً" },
          { label: "2. فئة الجذر (HTML .dark)", detail: "تبديل فئات Tailwind CSS الشاملة" },
          { label: "3. الحفظ الدائم (LocalStorage)", detail: "تذكر الخيار المفضل عبر جلسات التصفح" },
          { label: "4. التباين المريح (Eye Comfort)", detail: "اعتماد درجات الـ Slate لحماية العين" }
        ]
      }
    },
    {
      id: "32.2.j",
      title: "تصميم واجهة متجاوبة (Mobile Navigation Drawer & Responsive Breakpoints)",
      englishTerm: {
        term: "Responsive Breakpoints & Mobile Drawer UX",
        pronunciation: "ريسبونسيف بريك بوينتس آند موبايل دراور يو إكس",
        meaning: "نقاط التجاوب والدرج الجانبي للأجهزة المحمولة"
      },
      description: "يدير العديد من رواد الأعمال والمشرفين أعمالهم عبر الهواتف الذكية والأجهزة اللوحية أثناء تنقلاتهم؛ لذا فإن استجابة لوحة التحكم للشاشات الصغيرة تمثل متطلباً رئيسياً للمشروع. يغطي هذا الموضوع تحويل الشريط الجانبي في شاشات الجوال إلى درج منبثق (Off-canvas Navigation Drawer) ينزلق بنعومة من جهة اليمين عند النقر على زر الهامبرغر ☰، مع خلفية معتمة (Backdrop Overlay) تمنع التفاعل مع الصفحة خلفه، وإغلاق تلقائي عند اختيار أي رابط أو الضغط على مفتاح Escape، مع إعادة تنظيم شبكات بطاقات KPI لتصبح عموداً واحداً متناسقاً على الشاشات الرأسية.",
      analogy: "يشبه الستارة المنزلقة في مقصورة القطار السريع؛ عند رغبتك في الخصوصية أو الوصول لممر التنقل تسحب الستارة بنعومة، وعند الانتهاء تعيدها لمكانها لتوفر المساحة الكاملة للجلوس.",
      whyItMatters: "يضمن أن تظل لوحة التحكم أداة عملية فعالة في يد الإدارة في أي وقت ومن أي جهاز، دون حدوث تشويه بصري أو تمرير أفقي غير مقصود.",
      syntax: `// مكون الدرج الجانبي المنزلق للهواتف
{isOpen && (
  <div className="fixed inset-0 z-50 flex">
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
    <aside className="relative w-64 bg-white dark:bg-slate-900 h-full p-4 shadow-2xl">
      {/* روابط القائمة */}
    </aside>
  </div>
)}`,
      simpleExample: {
        title: "درج جانبي بسيط للهواتف مع خلفية معتمة قابلة للنقر للإغلاق",
        code: `import React, { useState } from "react";

// مكون درج الهاتف المنبثق البسيط
function SimpleMobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "16px" }}>
      {/* زر فتح القائمة */}
      <button onClick={() => setIsOpen(true)} style={{ padding: "8px 16px", cursor: "pointer" }}>
        ☰ فتح القائمة
      </button>

      {/* نافذة الدرج والخلفية */}
      {isOpen && (
        <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: 100 }}>
          {/* الخلفية المعتمة */}
          <div
            onClick={() => setIsOpen(false)}
            style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, backgroundColor: "rgba(0,0,0,0.5)" }}
          />
          {/* القائمة المنزلقة */}
          <div style={{ position: "relative", width: "240px", height: "100%", backgroundColor: "#0f172a", color: "#fff", padding: "20px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{ fontWeight: "bold" }}>القائمة</span>
              <button onClick={() => setIsOpen(false)} style={{ color: "#fff", background: "none", border: "none", cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="#home" style={{ color: "#38bdf8", textDecoration: "none" }}>الرئيسية</a>
              <a href="#sales" style={{ color: "#e2e8f0", textDecoration: "none" }}>المبيعات</a>
              <a href="#users" style={{ color: "#e2e8f0", textDecoration: "none" }}>المستخدمين</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SimpleMobileDrawer;`
      },
      advancedExample: {
        title: "درج هواتف احترافي متكامل مع دعم التمرير وقفل تمرير الصفحة خلفه ومفتاح Escape والرسوم الحركية",
        code: `import React, { useEffect } from "react";

// مكون الدرج الجانبي المتقدم للشاشات الصغيرة
export function ResponsiveMobileNavigationDrawer({ isOpen, onClose, activeRoute = "overview" }) {
  // قفل تمرير الصفحة الأصلية عندما يكون الدرج مفتوحاً، والاستماع لمفتاح Escape
  useEffect(() => {
    if (!isOpen) return;

    // قفل التمرير في الخلفية
    document.body.style.overflow = "hidden";

    // معالج زر Escape
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end lg:hidden font-sans">
      {/* 1. الطبقة المعتمة الشفافة (Backdrop) */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
      />

      {/* 2. اللوحة المنزلقة للدرج */}
      <div className="relative w-72 max-w-[80vw] h-full bg-white dark:bg-slate-900 shadow-2xl border-r border-slate-200 dark:border-slate-800 flex flex-col z-10 animate-slide-left">
        {/* ترويسة الدرج مع زر الإغلاق */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xl">📊</span>
            <span className="font-black text-slate-900 dark:text-white text-sm">لوحة الإدارة</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center text-xs"
          >
            ✕
          </button>
        </div>

        {/* قائمة الروابط القابلة للتمرير */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {[
            { id: "overview", label: "نظرة عامة", icon: "📈" },
            { id: "analytics", label: "التحليلات والمبيعات", icon: "📊" },
            { id: "customers", label: "العملاء والطلبات", icon: "👥" },
            { id: "reports", label: "التقارير المالية", icon: "📑" },
            { id: "settings", label: "إعدادات المنصة", icon: "⚙️" }
          ].map((link) => {
            const isActive = activeRoute === link.id;
            return (
              <a
                key={link.id}
                href={\`#\${link.id}\`}
                onClick={onClose}
                className={\`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition \${
                  isActive
                    ? "bg-sky-600 text-white shadow-md shadow-sky-500/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }\`}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* تذييل الدرج مع حساب المستخدم وزر الخروج */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs">
              أ
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">المهندس / أحمد</div>
              <div className="text-[10px] text-slate-400">admin@system.io</div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => { alert("تسجيل خروج"); onClose(); }}
            className="w-full py-2 bg-rose-50 dark:bg-rose-950/40 text-rose-600 text-xs font-bold rounded-xl"
          >
            تسجيل الخروج 🚪
          </button>
        </div>
      </div>
    </div>
  );
}`
      },
      outputExplanation: "يوفر هذا الدرج تجربة هواتف ذكية ممتازة؛ حيث يقفل تمرير الصفحة خلفه تلقائياً ويستجيب لمفتاح Escape والنقر على الخلفية المعتمة، ويغلق نفسه تلقائياً عند النقر على أي رابط للانتقال.",
      commonMistakes: [
        {
          wrong: "// ترك تمرير الصفحة الخلفية مفعلاً أثناء فتح الدرج مما يسبب ارتباكاً عند محاولة تمرير قائمة الدرج",
          correct: "// ضبط document.body.style.overflow = 'hidden' أثناء فتح الدرج وإعادته لـ 'unset' فور الإغلاق"
        }
      ],
      bestPractices: [
        "إغلاق الدرج تلقائياً عند نقر المستخدم على أي رابط للتنقل لمنحه مساحة رؤية كاملة للصفحة الجديدة",
        "تطبيق تأثير التغبيش البصري على الخلفية (backdrop-blur-sm) لإضفاء لمسة جمالية عصرية",
        "تحديد أقصى عرض للدرج (max-w-[80vw]) لضمان بقاء جزء من الخلفية مرئياً للمستخدم"
      ],
      infographic: {
        title: "التجاوب الذكي ودرج الهواتف المنبثق",
        nodes: [
          { label: "1. رصد العرض (<1024px)", detail: "إخفاء Sidebar الثابت وإظهار زر الهامبرغر ☰" },
          { label: "2. فتح الدرج المنزلق (Drawer)", detail: "انزلاق سلس من جهة اليمين مع قفل تمرير الصفحة" },
          { label: "3. الخلفية المعتمة (Backdrop)", detail: "تغبيش وضبابية للخلفية مع النقر للإغلاق السريع" },
          { label: "4. الإغلاق التلقائي", detail: "إغلاق الدرج بمجرد اختيار وجهة التنقل المطلوبة" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-32.2-1",
      question: "ما هي الفلسفة الأساسية لمكتبة جداول TanStack Table التي تميزها عن بقية مكتبات الجداول؟",
      options: [
        "أنها مكتبة مغلقة تجبرك على استخدام ألوان وقوالب ثابتة غير قابلة للتعديل",
        "أنها مكتبة بدون واجهة (Headless UI) تتولى كل الحسابات والفرز والترقيم وتترك لك حرية تصميم الـ HTML والـ CSS بنسبة 100%",
        "أنها تعمل فقط داخل خوادم Node.js ولا تعمل في المتصفحات",
        "أنها تمنع استخدام Tailwind CSS في الجداول"
      ],
      correctAnswer: 1,
      explanation: "نمط Headless في TanStack Table يفصل بين منطق إدارة البيانات (Sorting, Filtering, Pagination) وبين طبقة العرض البصرية، مما يمنحك مرونة مطلقة في التصميم."
    },
    {
      id: "quiz-32.2-2",
      question: "لماذا نفضل استخدام مسار SVG خفيف ومحسوب محلياً لرسم Sparklines في بطاقات KPI بدلاً من مكتبات الرسوم الكبرى؟",
      options: [
        "لأن Recharts لا تدعم رسم الخطوط نهائياً",
        "لأن إنشاء مسار SVG خفيف يوفر أداءً فائق السرعة وخفة متناهية في الذاكرة دون تحميل حزم ثقيلة لكل بطاقة",
        "لأن المتصفح يمنع استخدام أكثر من رسم بياني واحد في الصفحة",
        "لأن SVG لا تستهلك أي كهرباء من حاسوب المستخدم"
      ],
      correctAnswer: 1,
      explanation: "رسم الـ Sparkline هو مجرد خط بسيط من عدة نقاط؛ حسابه عبر معادلة رياضية داخل وسم <polyline> يوفر آلاف الكيلوبايتات ويمنع هبوط معدل الإطارات (FPS)."
    },
    {
      id: "quiz-32.2-3",
      question: "ما هو الإجراء الضروري عند فتح الدرج الجانبي للهواتف المحمولة (Mobile Drawer)؟",
      options: [
        "إعادة تحميل الصفحة بالكامل ومسح بيانات السلة",
        "قفل تمرير الصفحة الخلفية عبر document.body.style.overflow = 'hidden' لتفادي ارتباك التمرير المزدوج",
        "حذف قائمة الروابط وإظهار زر واحد فقط",
        "إيقاف تشغيل الإنترنت في المتصفح"
      ],
      correctAnswer: 1,
      explanation: "قفل تمرير الصفحة الخلفية يضمن أن حركات التمرير بأصبع المستخدم ستتحكم حصرياً في قائمة الدرج الجانبي دون تحريك محتوى الصفحة الواقعة في الخلفية."
    }
  ],
  exercise: {
    id: "exercise-32.2",
    title: "تمرين عملي: بناء لوحة تحكم مصغرة مع بطاقات KPI وجدول فرز وترقيم",
    description: "قم ببناء مكون لوحة تحكم React يحتوي على شريط علوي، وبطاقتي مؤشرات أداء KPI مع نسب التغير، وجدول بيانات لـ 6 عمليات تجارية مع خاصية الفرز بالنقر على الأعمدة، وترقيم الصفحات بمعدل 3 عناصر لكل صفحة.",
    hints: [
      "استخدم useState لإدارة الصفحة الحالية واتجاه الفرز",
      "احسب البيانات المفرزة والمعروضة عبر useMemo و slice",
      "أضف أزرار السابق والتالي مع تعطيل الأزرار عند الحدود"
    ],
    solution: `import React, { useState, useMemo } from "react";

const DATA = [
  { id: 1, client: "شركة الأمل", amount: 5000, date: "2026-10-01" },
  { id: 2, client: "مؤسسة النور", amount: 3200, date: "2026-10-03" },
  { id: 3, client: "مكتب الإبداع", amount: 8400, date: "2026-10-05" },
  { id: 4, client: "سوق التقنية", amount: 1200, date: "2026-10-07" },
  { id: 5, client: "وكالة الفضاء", amount: 9600, date: "2026-10-09" },
  { id: 6, client: "مركز التدريب", amount: 2100, date: "2026-10-11" }
];

export default function MiniDashboardLab() {
  const [page, setPage] = useState(0);
  const [sortAsc, setSortAsc] = useState(false);
  const pageSize = 3;

  const sortedAndPaged = useMemo(() => {
    const sorted = [...DATA].sort((a, b) => sortAsc ? a.amount - b.amount : b.amount - a.amount);
    return sorted.slice(page * pageSize, (page + 1) * pageSize);
  }, [page, sortAsc]);

  const totalPages = Math.ceil(DATA.length / pageSize);

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "16px", fontFamily: "sans-serif" }}>
      <h3>مختبر لوحة التحكم المصغرة</h3>
      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <div style={{ flex: 1, padding: "12px", background: "#e0f2fe", borderRadius: "10px" }}>
          <small>المبيعات الإجمالية</small>
          <h4>\$29,500 <span style={{ color: "green", fontSize: "11px" }}>+12% ↑</span></h4>
        </div>
        <div style={{ flex: 1, padding: "12px", background: "#fef3c7", borderRadius: "10px" }}>
          <small>العمليات</small>
          <h4>6 عقود <span style={{ color: "green", fontSize: "11px" }}>+5% ↑</span></h4>
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
        <thead>
          <tr style={{ background: "#f1f5f9" }}>
            <th style={{ padding: "8px", textAlign: "right" }}>العميل</th>
            <th onClick={() => setSortAsc(!sortAsc)} style={{ padding: "8px", textAlign: "right", cursor: "pointer" }}>
              المبلغ {sortAsc ? "▲" : "▼"}
            </th>
            <th style={{ padding: "8px", textAlign: "right" }}>التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {sortedAndPaged.map(row => (
            <tr key={row.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>{row.client}</td>
              <td style={{ padding: "8px", fontWeight: "bold" }}>\${row.amount}</td>
              <td style={{ padding: "8px" }}>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
        <button disabled={page === 0} onClick={() => setPage(p => p - 1)}>السابق</button>
        <span>{page + 1} من {totalPages}</span>
        <button disabled={page >= totalPages - 1} onClick={() => setPage(p => p + 1)}>التالي</button>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي لمشروع لوحة التحكم (Dashboard Architecture)",
    nodes: [
      { label: "1. Shell & Layout", detail: "شريط جانبي ثابت قابل للطي مع شريط علوي وحفظ الحالة" },
      { label: "2. KPI & Sparklines", detail: "بطاقات المؤشرات مع نسب النمو ورسوم SVG الخفيفة المصغرة" },
      { label: "3. Visual Charts", detail: "رسوم Recharts البيانية لتتبع الإيرادات وحصص المبيعات" },
      { label: "4. Headless Table", detail: "جداول TanStack مع الفرز، والبحث الشامل، والترقيم الذكي" },
      { label: "5. Dark Mode & Drawer", detail: "سمة داكنة كاملة ودرج جانبي متجاوب مع الهواتف المحمولة" }
    ]
  }
};

