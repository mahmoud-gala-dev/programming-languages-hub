// src/data/sections/section11/topic3.js
// القسم 11: التوجيه والتنقل باستخدام React Router - الموضوع 3: المسارات المتقدمة

export const topic3 = {
  id: "11.3",
  title: "المسارات المتقدمة",
  description: "الأنماط المعمارية المتقدمة للتوجيه: المسارات المتداخلة (Nested Routes) ومكون المخرج Outlet، مسارات التخطيط (Layout Routes)، إعادة التوجيه الفوري بـ Navigate، حماية المسارات (Protected Routes) وإدارة الصلاحيات (RBAC)، والتحميل الكسول للصفحات (Lazy Loading & Suspense) لتحقيق أقصى درجات الأداء.",
  subtopics: [
    {
      id: "11.3.a",
      title: "Nested Routes",
      englishTerm: "Nested Routes (المَسَارَاتُ المُتَدَاخِلَة: هرمية المسارات والواجهات الفرعية)",
      description: "المسارات المتداخلة (Nested Routes) هي ميزة معمارية رئيسية تتيح تداخل وسوم `<Route>` داخل وسم `<Route>` أب. يعكس هذا التداخل الهرمية البصرية لصفحات الويب الحقيقية: فعندما يكون لديك لوحة تحكم (/dashboard) تحتوي على شريط جانبي ثابت، وبداخله صفحات فرعية (/dashboard/analytics و /dashboard/settings)، فإن المسارات المتداخلة تضمن بقاء الشريط الجانبي في مكانه دون إعادة تصيير مع استبدال المنطقة الفرعية فقط.",
      analogy: "مثل هيكل المجلدات في حاسوبك: لديك مجلد رئيسي اسمه 'المستندات'، وبداخله مجلدات فرعية 'العمل' و'الفواتير'؛ عندما تفتح مجلد الفواتير، لا تغلق نافذة المستندات، بل تتصفح المحتوى الفرعي داخل نفس الإطار.",
      whyItMatters: "تقضي على تكرار الأكواد (DRY)، وتحافظ على استقرار الحالة في المكونات الأبوية، وتتيح بناء لوحات تحكم وتطبيقات إدارة احترافية ذات تخطيطات متعددة المستويات.",
      syntax: "<Route path='/dashboard' element={<DashboardLayout />}>\n  <Route path='stats' element={<Stats />} />\n  <Route path='settings' element={<Settings />} />\n</Route>",
      simpleExample: `import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// المكون الأب المشترك: يحتوي على قائمة الروابط ومكان عرض الابن
function Dashboard() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* القائمة الجانبية الثابتة */}
      <aside style={{ width: '150px', background: '#f3f4f6', padding: '10px' }}>
        <h4>القائمة</h4>
        <Link to="/dashboard/profile">الملف الشخصي</Link><br />
        <Link to="/dashboard/orders">الطلبات</Link>
      </aside>

      {/* المخرج الذي ستظهر فيه الصفحة الفرعية المحددة */}
      <main style={{ flex: 1, padding: '10px' }}>
        <Outlet />
      </main>
    </div>
  );
}

function Profile() { return <h3>محتوى الملف الشخصي</h3>; }
function Orders() { return <h3>قائمة الطلبات السابقة</h3>; }

function App() {
  return (
    <Routes>
      {/* مسار أبوي يتداخل بداخله مساران فرعيان */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
}`,
      advancedExample: `import React from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';

// لوحة إدارة متعددة التبويبات المتداخلة مع index route
function AdminPortalLayout() {
  const getTabClass = ({ isActive }) =>
    "px-4 py-2 text-xs font-bold rounded-xl transition " +
    (isActive ? "bg-blue-600 text-white shadow-md" : "text-slate-400 hover:bg-slate-800");

  return (
    <div className="min-h-[400px] bg-slate-900 border border-slate-800 rounded-3xl p-6 text-white text-right">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h2 className="text-xl font-black text-blue-400">بوابة الإدارة المتقدمة</h2>
          <p className="text-xs text-slate-500">نظام إدارة الموارد عبر المسارات المتداخلة (Nested Routing Architecture)</p>
        </div>
        <nav className="flex gap-2">
          {/* مسار نسبي يشير للمسار الافتراضي index */}
          <NavLink to="" end className={getTabClass}>نظرة عامة</NavLink>
          {/* مسار نسبي يشير لـ /admin/users */}
          <NavLink to="users" className={getTabClass}>المستخدمين</NavLink>
          {/* مسار نسبي يشير لـ /admin/logs */}
          <NavLink to="logs" className={getTabClass}>سجلات النظام</NavLink>
        </nav>
      </div>

      {/* نقطة الحقن الموضعية للمكون الفرعي */}
      <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800/80">
        <Outlet />
      </div>
    </div>
  );
}

function OverviewTab() { return <div className="text-emerald-400">📊 شاشة النظرة العامة الافتراضية (Index Route)</div>; }
function UsersTab() { return <div className="text-blue-400">👥 شاشة إدارة وتفعيل المستخدمين الفرعية</div>; }
function LogsTab() { return <div className="text-amber-400">📜 سجلات العمليات والأمان اللحظية</div>; }

export function MasterNestedRoutingDemo() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPortalLayout />}>
        {/* مسار index يظهر تلقائياً عندما يزور المستخدم /admin بدون أي مسار فرعي */}
        <Route index element={<OverviewTab />} />
        <Route path="users" element={<UsersTab />} />
        <Route path="logs" element={<LogsTab />} />
      </Route>
    </Routes>
  );
}`,
      output: "بقاء شريط لوحة التحكم العلوي ثابتاً ومستقراً مع تبديل المحتوى الداخلي فقط بنعومة فائقة.",
      commonMistakes: [
        {
          mistake: "وضع شرطة مائلة / في بداية مسار الابن المتداخل مثل: <Route path='/users'> داخل المسار الأب /admin.",
          fix: "اكتب مسارات الأبناء كمسارات نسبية بدون شرطة في البداية: path='users'.",
          explanation: "المسار الذي يبدأ بـ / يعتبر مساراً مطلقاً يبدأ من جذر الموقع، مما يكسر التداخل."
        },
        {
          mistake: "نسيان وضع مكون <Outlet /> في المكون الأب.",
          fix: "تأكد دائماً من استيراد ووضع <Outlet /> في المكان المخصص لظهور الأبناء داخل المكون الأب.",
          explanation: "بدون <Outlet /> لن يعلم React Router أين يضع المكون الفرعي، فلن يظهر أي ابن على الشاشة."
        }
      ],
      bestPractices: [
        "استخدم المسار الافتراضي <Route index element={<DefaultChild />} /> لتعريف الصفحة التي تظهر عند زيارة مسار الأب مباشرة.",
        "استخدم المسارات المتداخلة لبناء التخطيطات ذات الأشرطة الجانبية والتبويبات المتقدمة."
      ],
      infographic: {
        title: "هندسة المسارات المتداخلة (Nested Routing)",
        elements: [
          { label: "المسار الأب Parent", role: "يحتوي على الهيكل الثابت (Sidebar / Header) ومكون <Outlet />", color: "blue" },
          { label: "المسار الفرعي 1 (index)", role: "يظهر افتراضياً عند زيارة الرابط الأساسي", color: "emerald" },
          { label: "المسار الفرعي 2 (users)", role: "يُحقن داخل <Outlet /> عند زيارة /parent/users", color: "purple" },
          { label: "كفاءة الأداء", role: "عدم إعادة تصيير الهيكل الأبوي وتوفير موارد المعالج", color: "amber" }
        ]
      }
    },
    {
      id: "11.3.b",
      title: "استخدام Outlet",
      englishTerm: "The Outlet Component (مُكَوِّنُ المَخْرَج: نقطة حقن المكونات الفرعية)",
      description: "المكون `<Outlet />` هو المخرج البرمجي ونائب الموضع (Placeholder Component) الذي يُخبر React Router بالمكان الدقيق داخل شجرة المكون الأب الذي يجب أن يُرسم فيه المكون الفرعي (Child Route). بالإضافة إلى وظيفته في الحقن، يمكن لـ `<Outlet />` تمرير بيانات وسياقات مشتركة من الأب إلى كافة الأبناء عبر خاصية `context`، والتي يقرؤها أي مكون فرعي باستخدام خطاف `useOutletContext()`.",
      analogy: "مثل إطار الصورة المعلق على الجدار: الإطار والزجاج ثابتان على الجدار دائماً (المكون الأب)، والفتحة المفرغة بالداخل (Outlet) هي المكان الذي تضع فيه أي صورة فوتوغرافية تختارها وتبدلها بحرية دون خلع الإطار من الجدار.",
      whyItMatters: "هو الرابط الفعلي الذي يجعل هندسة المسارات المتداخلة ممكنة، ويوفر قناة تواصل نظيفة بين الهيكل الأب ومختلف الصفحات الفرعية دون Props Drilling.",
      syntax: "// في الأب:\n<Outlet context={{ user, theme }} />\n// في الابن:\nconst { user } = useOutletContext();",
      simpleExample: `import React from 'react';
import { Outlet } from 'react-router-dom';

// مكون تخطيط يحتوي على رأس وتذييل ومخرج بالمنتصف
function StandardLayout() {
  return (
    <div>
      <header style={{ padding: '15px', background: '#3b82f6', color: 'white' }}>
        ترويسة الموقع الثابتة
      </header>

      {/* هنا بالتمام والكمال ستظهر الصفحات الفرعية */}
      <main style={{ minHeight: '200px', padding: '20px' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '10px', background: '#1f2937', color: 'white' }}>
        تذييل الصفحة الثابت
      </footer>
    </div>
  );
}`,
      advancedExample: `import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

// تخطيط أبوي يمرر حالة مشتركة لكافة الأبناء عبر Outlet Context
export function AccountSettingsLayout() {
  // حالة مشتركة في الأب (مثلاً رصيد المستخدم وإعدادات الإشعارات)
  const [balance, setBalance] = useState(1500);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-lg mx-auto text-white text-right">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
        <h3 className="font-bold">إدارة الحساب الشخصي</h3>
        <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-mono">
          الرصيد: {balance} $
        </span>
      </div>

      {/* تمرير الحالة ودوال التعديل إلى كافة المكونات الفرعية عبر context */}
      <Outlet context={{ balance, setBalance, notificationsEnabled, setNotificationsEnabled }} />
    </div>
  );
}

// مكون فرعي يستهلك السياق الممرر من Outlet
export function BillingChildPage() {
  // قراءة بيانات الأب عبر useOutletContext
  const { balance, setBalance } = useOutletContext();

  return (
    <div className="p-4 bg-slate-800 rounded-xl space-y-3">
      <h4 className="text-sm font-bold text-blue-400">إضافة رصيد للحساب:</h4>
      <p className="text-xs text-slate-400">الرصيد الحالي المقروء من الأب: {balance} $</p>
      <button
        onClick={() => setBalance((prev) => prev + 100)}
        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition"
      >
        ➕ شحن رصيد 100$
      </button>
    </div>
  );
}`,
      output: "حقن الصفحات الفرعية في مكانها المخصص بدقة مع إمكانية مشاركة وتعديل بيانات الأب المشتركة بسلاسة.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام useOutletContext() داخل مكون غير موجود كابن لـ <Outlet />.",
          fix: "تأكد من أن المكون معرف كمسار فرعي متداخل للمسار الذي يضم Outlet.",
          explanation: "الخطاف useOutletContext يعتمد على سياق Outlet الأبوي؛ استدعاؤه خارج هذه الهرمية يعطي undefined."
        }
      ],
      bestPractices: [
        "استخدم Outlet Context لتمرير بيانات الجلسة والمظهر للمسارات الفرعية بدلاً من تعريف Context إضافي مكرر.",
        "اجعل مكون التخطيط (Layout) خالياً من المنطق التجاري المعقد وركز على الهيكل البصري ووضع Outlet."
      ],
      infographic: {
        title: "آلية عمل المكون <Outlet /> و useOutletContext()",
        elements: [
          { label: "المكون الأب", role: "يعرف التنسيق العام ويوفر <Outlet context={{ data }} />", color: "blue" },
          { label: "نقطة الحقن", role: "المتصفح يضع محتوى المكون الفرعي المطابق للـ URL مكان Outlet", color: "emerald" },
          { label: "المكون الابن", role: "يقرأ البيانات المشتركة عبر const { data } = useOutletContext()", color: "purple" },
          { label: "ثبات العرض", role: "بقاء الترويسة والشريط الجانبي مستقرين دون أي وميض", color: "amber" }
        ]
      }
    },
    {
      id: "11.3.c",
      title: "إنشاء Layout Routes",
      englishTerm: "Layout Routes (مَسَارَاتُ التَّخْطِيطِ: توحيد القوالب بدون تعديل الـ URL)",
      description: "مسارات التخطيط (Layout Routes أو Pathless Routes) هي مسارات `<Route>` خاصة تُستخدم فقط لتطبيق تخطيط وقالب بصري مشترك على مجموعة من الصفحات دون إضافة أي مقطع إضافي إلى عنوان الـ URL (تُعرف بدون خاصية `path`). على سبيل المثال: يمكنك إنشاء تخطيط لصفحات المصادقة (AuthLayout) يحيط بصفحتي `/login` و `/register` بخلفية زجاجية وبطاقة مركزية دون أن يصبح الرابط `/auth/login`.",
      analogy: "مثل ارتداء زي موحد (زي الشركة): موظف المبيعات وموظف الاستقبال يرتدون نفس البدلة الرسمية الأنيقة (Layout)، ولكن لكل واحد منهم اسمه الخاص ومكتبه المستقل دون تغيير اسمه الأصلي.",
      whyItMatters: "تمنحك حرية معمارية مطلقة لتطبيق تصاميم وقوالب متعددة (مثل: قالب لوحة التحكم، قالب صفحات الهبوط العامة، وقالب صفحات المصادقة) في نفس التطبيق مع الحفاظ على عناوين URL نظيفة ومباشرة.",
      syntax: "<Route element={<AuthLayout />}>\n  <Route path='/login' element={<Login />} />\n  <Route path='/register' element={<Register />} />\n</Route>",
      simpleExample: `import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// قالب تخطيط مركزي مخصص لصفحات تسجيل الدخول والتسجيل
function CenteredAuthLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#e5e7eb' }}>
      <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>بوابة الأمان 🔒</h2>
        {/* مكان ظهور نموذج الدخول أو التسجيل */}
        <Outlet />
      </div>
    </div>
  );
}

function Login() { return <div>نموذج تسجيل الدخول</div>; }
function Register() { return <div>نموذج إنشاء حساب جديد</div>; }

function App() {
  return (
    <Routes>
      {/* مسار تخطيط بدون path: يطبق القالب على /login و /register دون تغيير الرابط */}
      <Route element={<CenteredAuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}`,
      advancedExample: `import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

// 1. قالب صفحات التسويق العامة (Public Marketing Layout)
function MarketingLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <header className="p-4 border-b border-slate-800 flex justify-between">
        <span className="font-bold text-blue-400">منصة كلاود سبيس 🌐</span>
        <div className="flex gap-4 text-xs">
          <Link to="/">الرئيسية</Link>
          <Link to="/pricing">الأسعار</Link>
          <Link to="/login" className="text-blue-400 font-bold">دخول ➔</Link>
        </div>
      </header>
      <main className="p-8 max-w-4xl mx-auto"><Outlet /></main>
    </div>
  );
}

// 2. قالب لوحة الإدارة المحمية (Dashboard Layout)
function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-slate-900 text-white font-sans">
      <aside className="w-56 p-4 border-l border-slate-800 space-y-2">
        <div className="font-bold text-sm mb-4 text-emerald-400">لوحة التحكم ⚙️</div>
        <Link to="/app" className="block text-xs text-slate-300 hover:text-white">المؤشرات العامة</Link>
        <Link to="/app/servers" className="block text-xs text-slate-300 hover:text-white">الخوادم السحابية</Link>
      </aside>
      <main className="flex-1 p-6"><Outlet /></main>
    </div>
  );
}

// صفحات التطبيق
function Landing() { return <h2>صفحة الهبوط والتسويق الرئيسية</h2>; }
function Pricing() { return <h2>باقات وخطط الأسعار المرنة</h2>; }
function DashboardMetrics() { return <h2>إحصائيات استخدام الخوادم</h2>; }

export function MultiLayoutAppArchitecture() {
  return (
    <Routes>
      {/* تخطيط التسويق العام */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>

      {/* تخطيط لوحة التحكم الخاص */}
      <Route path="/app" element={<DashboardLayout />}>
        <Route index element={<DashboardMetrics />} />
      </Route>
    </Routes>
  );
}`,
      output: "تطبيق قوالب بصرية متباينة تماماً على مختلف أجزاء الموقع مع الحفاظ على هيكل روابط نظيف ومنطقي.",
      commonMistakes: [
        {
          mistake: "إضافة path='/' إلى مسار التخطيط بدون داعٍ مما قد يتسبب في تضارب مع المسار الجذري الفعلي.",
          fix: "اترك خاصية path محذوفة كلياً في مسار التخطيط: <Route element={<MyLayout />}>.",
          explanation: "حذف خاصية path يعرف المسار كـ Layout Route حقيقي لا يتدخل في بنية الـ URL."
        }
      ],
      bestPractices: [
        "استخدم Layout Routes للفصل الواضح بين صفحات الزوار العامة (Public Pages) وصفحات الأعضاء المسجلين (Private App).",
        "احرص على ألا تعيد Layout Routes رسم شريط التنقل مع كل انتقال داخل نفس القالب."
      ],
      infographic: {
        title: "معمارية مسارات التخطيط بدون مسار (Pathless Layouts)",
        elements: [
          { label: "Route (No Path)", role: "قالب أبوي بدون عنوان يلتف حول الأبناء لتطبيق المظهر المشترك", color: "blue" },
          { label: "Auth Layout", role: "يغلف /login و /register ببطاقة زجاجية وخلفية مموهة", color: "purple" },
          { label: "Marketing Layout", role: "يغلف / و /pricing بترويسة تسويقية وروابط عامة", color: "emerald" },
          { label: "Clean URLs", role: "الحفاظ على روابط قصيرة ومباشرة للمستخدمين ومحركات البحث", color: "amber" }
        ]
      }
    },
    {
      id: "11.3.d",
      title: "إعادة التوجيه Redirect",
      englishTerm: "Redirection with Navigate Component (إِعَادَةُ التَّوْجِيهِ: تحويل المسارات باستخدام مكوّن Navigate)",
      description: "المكون `<Navigate>` هو الأداة التقريرية (Declarative) في React Router لإعادة توجيه المستخدم فوراً إلى مسار آخر عند محاولة فتح مسار معين. يعمل بمجرد تصييره في الشجرة، ويشيع استخدامه لتحويل المستخدم من الروابط القديمة إلى الجديدة (مثل توجيه زائر `/old-home` إلى `/`)، أو لتحويل المستخدم غير المسجل إلى صفحة تسجيل الدخول `/login` تلقائياً.",
      analogy: "مثل لافتة التحويل المروري على الطريق السريع: عندما يقترب السائق من مسار مغلق لأعمال الصيانة، تشير اللافتة بسهم واضح: 'تحويلة إجبارية إلى المخرج رقم 4' دون أن يتوقف السائق.",
      whyItMatters: "يحافظ على الروابط القديمة المؤرشفة في محركات البحث من التعطل، ويمنع المستخدمين غير المصرح لهم من البقاء في الصفحات المحمية.",
      syntax: "<Route path='/old-path' element={<Navigate to='/new-path' replace />} />",
      simpleExample: `import React from 'react';
// استيراد المكون التقريري للتحويل
import { Routes, Route, Navigate } from 'react-router-dom';

function Home() { return <h2>الصفحة الرئيسية الحالية 🏠</h2>; }
function Contact() { return <h2>تواصل معنا 📞</h2>; }

function RedirectRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      {/* تحويل أي زائر يفتح الرابط القديم /contact-us إلى /contact فوراً مع استبدال التاريخ */}
      <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
    </Routes>
  );
}`,
      advancedExample: `import React, { useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

// إعادة توجيه مشروطة بحسب دور المستخدم (Role-Based Redirection)
function RoleBasedRedirector() {
  // محاكاة مستخدم مسجل دوره الحالي: كاتب مقالات
  const [currentUser] = useState({ name: 'سارة', role: 'editor' });

  return (
    <Routes>
      {/* توجيه مسار لوحة التحكم الرئيسي /dashboard وفق الصلاحية */}
      <Route
        path="/dashboard"
        element={
          currentUser.role === 'admin' ? (
            <Navigate to="/dashboard/admin" replace />
          ) : (
            <Navigate to="/dashboard/editor" replace />
          )
        }
      />

      <Route
        path="/dashboard/admin"
        element={<div className="p-4 bg-purple-900 text-white rounded">لوحة تحكم المدير العام 👑</div>}
      />
      
      <Route
        path="/dashboard/editor"
        element={<div className="p-4 bg-blue-900 text-white rounded">لوحة تحرير المقالات والمحتوى ✍️</div>}
      />
    </Routes>
  );
}`,
      output: "نقل فوري وسلس للمستخدم إلى الوجهة المناسبة له تلقائياً دون أي تدخل يدوي.",
      commonMistakes: [
        {
          mistake: "نسيان خاصية replace في وسم <Navigate to='...' replace />.",
          fix: "أضف خاصية replace دائماً في عمليات إعادة التوجيه التلقائية.",
          explanation: "بدون replace، فإذا ضغط المستخدم زر 'الرجوع للخلف' في المتصفح، سيعود للرابط المحول الذي سيعيد توجيهه للأمام مجدداً في حلقة مفرغة محبطة."
        }
      ],
      bestPractices: [
        "استخدم <Navigate> في طبقة المسارات Declarative لحماية الروابط، واستخدم useNavigate() داخل الدوال والأحداث.",
        "استخدم خاصية state لنقل سبب التحويل (مثل: state={{ reason: 'unauthorized' }})."
      ],
      infographic: {
        title: "دورة عمل مكون إعادة التوجيه <Navigate />",
        elements: [
          { label: "1. طلب الرابط", role: "المستخدم يفتح الرابط /old-path أو مساراً غير مصرح به", color: "blue" },
          { label: "2. تقييم الشرط", role: "فحص الشرط أو مطابقة مسار التحويل", color: "amber" },
          { label: "3. تنفيذ Navigate", role: "تفعيل <Navigate to='/new-path' replace /> فوراً", color: "purple" },
          { label: "4. تحديث التاريخ", role: "استبدال السجل في History والوصول للوجهة الصحيحة (0ms)", color: "emerald" }
        ]
      }
    },
    {
      id: "11.3.e",
      title: "حماية المسارات حسب حالة تسجيل الدخول",
      englishTerm: "Protected Routes (المَسَارَاتُ المَحْمِيَّة: حراسة الصفحات الخاصة وتسجيل الدخول)",
      description: "المسار المحمي (Protected Route أو Route Guard) هو نمط تصميمي يعزل الصفحات الحساسة (مثل لوحة التحكم، تفاصيل الحساب، والفواتير) عن الزوار غير المسجلين. يتم بناؤه عادةً كمكون وسيط (Wrapper Component) يفحص حالة المصادقة (isLoggedIn / token)؛ فإذا كان المستخدم مسجلاً يُسمح له بالعبور وعرض المحتوى عبر `<Outlet />`، وإذا كان زائراً مجهولاً يتم تحويله تلقائياً لصفحة الدخول عبر `<Navigate to='/login' />` مع حفظ الصفحة التي كان يحاول زيارتها للعودة إليها بعد الدخول.",
      analogy: "مثل رجل الأمن على باب صالة كبار الشخصيات (VIP Lounge): تبرز له بطاقة عضويتك؛ إذا كانت البطاقة سارية يسمح لك بالدخول، وإذا لم تكن معك بطاقة يوجهك بلطف إلى مكتب الاستقبال لشراء تذكرة أو التسجيل أولاً.",
      whyItMatters: "حماية خصوصية المستخدمين ومنع المتطفلين من الاطلاع على لوحات التحكم والبيانات السرية قبل التحقق من هويتهم.",
      syntax: "function ProtectedRoute({ isAuth }) {\n  return isAuth ? <Outlet /> : <Navigate to='/login' replace />;\n}",
      simpleExample: `import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

// مكون الحارس البسيط
function ProtectedRoute({ isAuthenticated }) {
  // إذا كان مسجلاً اعرض المحتوى الفرعي، وإلا وجهه لصفحة الدخول
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

function Dashboard() { return <h2>مرحباً بك في لوحتك الخاصة 🔒</h2>; }
function Login() { return <h2>صفحة تسجيل الدخول 🔑</h2>; }

function App() {
  const isUserLoggedIn = false; // محاكاة مستخدم غير مسجل

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* حماية كافة المسارات المتداخلة داخل الحارس */}
      <Route element={<ProtectedRoute isAuthenticated={isUserLoggedIn} />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}`,
      advancedExample: `import React, { createContext, useContext, useState } from 'react';
import { Routes, Route, Navigate, Outlet, useLocation, Link } from 'react-router-dom';

// 1. سياق التوثيق العام (Auth Context)
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { name: 'أحمد', token: 'xyz' }

  const login = (name) => setUser({ name, token: 'fake-jwt-token' });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 2. مكون الحماية الاحترافي الذي يحفظ مكان الزيارة السابقة
export function RequireAuth() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    // توجيه لصفحة الدخول مع حفظ الرابط الحالي في state للعودة إليه تلقائياً بعد الدخول
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

// 3. صفحة الدخول التي تعيد توجيه المستخدم لمكانه الأصلي
export function LoginPage() {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  // المسار الأصلي الذي كان يريده المستخدم قبل إجباره على تسجيل الدخول
  const fromPath = location.state?.from?.pathname || '/profile';

  return (
    <div className="p-6 bg-slate-900 text-white rounded-2xl max-w-sm mx-auto text-right">
      <h3 className="font-bold mb-3">تسجيل الدخول مطلوب</h3>
      <p className="text-xs text-slate-400 mb-4">يجب التحقق من هويتك أولاً للمتابعة.</p>
      <button
        onClick={() => login('عبدالرحمن')}
        className="w-full py-2 bg-blue-600 text-white font-bold text-xs rounded-xl hover:bg-blue-500"
      >
        دخول سريع كـ "عبدالرحمن" ➔
      </button>
    </div>
  );
}`,
      output: "منع الزوار غير المسجلين وتوجيههم لصفحة الدخول فوراً مع حفظ مسارهم لإعادتهم إليه بعد إثبات الهوية.",
      commonMistakes: [
        {
          mistake: "الاعتماد على Protected Route في جانب العميل فقط لحماية البيانات الحساسة.",
          fix: "تذكر دائماً أن حماية React Router هي حماية بصرية للواجهة فقط؛ يجب أن تكون الـ API محمية بالرموز (JWT) في الخادم بشكل صارم.",
          explanation: "يمكن لأي شخص تجاوز جافاسكريبت في المتصفح؛ الحماية الحقيقية للبيانات تكون دائماً في الـ Backend."
        }
      ],
      bestPractices: [
        "احفظ المسار الأصلي عبر state={{ from: location }} لتقديم تجربة مستخدم ذكية تعيد الزائر لمقاله أو سلته فور تسجيل دخوله.",
        "اربط حارس التوجيه بحالة سياق AuthContext أو متجر Zustand لتحديث حالة الدخول في كامل التطبيق لحظياً."
      ],
      infographic: {
        title: "تدفق عمل المسار المحمي (Protected Route Flow)",
        elements: [
          { label: "1. محاولة الزيارة", role: "المستخدم يفتح /dashboard/billing مباشرة", color: "blue" },
          { label: "2. فحص الحارس", role: "RequireAuth يفحص هل token موجود وصالح؟", color: "amber" },
          { label: "3. نعم (مسجل)", role: "يعرض <Outlet /> ويفتح الصفحة الخاصة فوراً", color: "emerald" },
          { label: "4. لا (مجهول)", role: "توجيه إجباري إلى /login مع حفظ المسار المطلوب في state", color: "rose" }
        ]
      }
    },
    {
      id: "11.3.f",
      title: "التحقق من الصلاحيات على الخادم",
      englishTerm: "Role-Based Access Control & Server Verification (التَّحَقُّقُ مِنَ الصَّلَاحِيَّاتِ وَأَدْوَارِ المُسْتَخْدِمِينَ)",
      description: "التحكم في الوصول القائم على الأدوار (RBAC) يتجاوز مجرد معرفة 'هل المستخدم مسجل أم لا؟' إلى فحص 'ما هي صلاحيات هذا المستخدم ورتبته؟' (مثل: Admin، Editor، Member). يقوم التطبيق بفحص مصفوفة صلاحيات المستخدم في الواجهة وتوجيهه لشاشة 'ممنوع الوصول' (403 Forbidden) إذا كان دوره غير كافٍ، مع الاعتماد الأساسي على خادم الـ API لرفض أي طلب غير مرخص بأكواد 401/403.",
      analogy: "مثل بطاقات الدخول في مستشفى ضخم: جميع العاملين يحملون بطاقات هوية للدخول من البوابة الرئيسية؛ ولكن بطاقة الطبيب الجراح تفتح غرف العمليات، بينما بطاقة المريض أو الزائر لا تفتح سوى غرفة التنويم الخاصة به.",
      whyItMatters: "يمنع تسرب لوحات الإعدادات المالية أو إدارة الصلاحيات للمستخدمين العاديين، ويوفر بيئة عمل آمنة ومنضبطة في الأنظمة المؤسسية الكبرى.",
      syntax: "<Route element={<RoleGuard allowedRoles={['admin', 'manager']} />}>\n  <Route path='/settings' element={<SystemSettings />} />\n</Route>",
      simpleExample: `import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

// حارس الصلاحيات القائم على الأدوار
function RoleGuard({ userRole, allowedRoles }) {
  // فحص هل دور المستخدم موجود ضمن الأدوار المسموح لها
  const hasAccess = allowedRoles.includes(userRole);

  if (!hasAccess) {
    // توجيه المستخدم لصفحة نقص الصلاحيات
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

function AdminPanel() { return <h2>لوحة تحكم المشرفين فقط 👑</h2>; }
function Unauthorized() { return <h2 style={{ color: 'red' }}>⚠️ ليس لديك صلاحية للدخول هنا! (403)</h2>; }

function App() {
  const currentUserRole = 'user'; // دور المستخدم الحالي

  return (
    <Routes>
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* حماية لوحة المشرفين لتكون متاحة لدور 'admin' فقط */}
      <Route element={<RoleGuard userRole={currentUserRole} allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
}`,
      advancedExample: `import React from 'react';
import { Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';

// حارس متقدم يدعم أدواراً متعددة ويفحص انتهاء الجلسة عبر الـ API
function AdvancedRoleGuard({ user, requiredPermissions }) {
  // 1. إذا لم يكن مسجل دخول إطلاقاً -> توجيه لصفحة تسجيل الدخول
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. التحقق من امتلاك المستخدم لكافة الصلاحيات المطلوبة
  const hasAllPermissions = requiredPermissions.every((perm) =>
    user.permissions?.includes(perm)
  );

  // 3. إذا كان مسجلاً ولكن تنقصه الصلاحية -> توجيه لشاشة 403 مع شرح السبب
  if (!hasAllPermissions) {
    return (
      <div className="p-8 text-center bg-slate-900 text-white rounded-3xl border border-rose-500/30 max-w-md mx-auto my-6">
        <div className="text-4xl mb-3">🚫</div>
        <h3 className="text-xl font-bold text-rose-400 mb-2">صلاحيات غير كافية (403 Forbidden)</h3>
        <p className="text-xs text-slate-400 mb-4">
          أنت مسجل كـ <strong>"{user.name}"</strong> برتبة ({user.role})، ولكن هذه الصفحة تتطلب تصريحاً خاصاً.
        </p>
        <Link to="/" className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold hover:bg-slate-700">
          العودة للصفحة الرئيسية
        </Link>
      </div>
    );
  }

  return <Outlet />;
}`,
      output: "حظر محكم لأي مستخدم لا يملك الدور المناسب مع توجيه دقيق وشاشات توضيحية راقية.",
      commonMistakes: [
        {
          mistake: "الاعتماد على كائن user المخزن في localStorage لتحديد الصلاحيات دون مصادقة الخادم.",
          fix: "تذكر أن localStorage يمكن تعديله من أي شخص عبر المتصفح؛ احرص على أن تكون الـ API تطبق نفس التحقق الصارم في كل طلب.",
          explanation: "التحقق في الواجهة هو لتحسين تجربة المستخدم فقط، أما الأمان الحقيقي فهو مسؤولية الخادم وقاعدة البيانات."
        }
      ],
      bestPractices: [
        "استخدم نظام الصلاحيات المحددة (Permissions مثل: edit_article, delete_user) بدلاً من مجرد الأدوار العامة لتوفير مرونة أكبر.",
        "أخفِ أزرار وروابط لوحة الإدارة من شريط التنقل للمستخدمين العاديين حتى لا ينقروا عليها أصلاً."
      ],
      infographic: {
        title: "مستويات الأمان في حراسة التوجيه (RBAC)",
        elements: [
          { label: "المستوى 1: التوثيق Authentication", role: "هل أنت شخص مسجل في النظام؟ (401)", color: "blue" },
          { label: "المستوى 2: التفويض Authorization", role: "هل تملك الصلاحية لدخول هذه الغرفة المحددة؟ (403)", color: "amber" },
          { label: "المستوى 3: حماية الخادم Backend Enforcement", role: "فحص رمز JWT والصلاحيات مع كل استدعاء API", color: "rose" },
          { label: "المستوى 4: تجربة المستخدم UX Shield", role: "إخفاء الأزرار غير المتاحة وتوجيه لصفحات توضيحية", color: "emerald" }
        ]
      }
    },
    {
      id: "11.3.g",
      title: "Lazy Loading للصفحات",
      englishTerm: "Route-Based Code Splitting & Lazy Loading (التَّحْمِيلُ الكَسُولُ لِلصَّفَحَاتِ: تقسيم حزم الكود)",
      description: "التحميل الكسول للصفحات (Lazy Loading عبر `React.lazy` و `Suspense`) هو أهم تقنية لتحسين سرعة وأداء تطبيقات React الكبيرة. بدلاً من تحميل كود التطبيق بالكامل (مثلاً 5 ميغابايت تضم مئات الصفحات) في أول زيارة للمستخدم مما يسبب بطء الإقلاع الأولي؛ يتم تقسيم الكود إلى حزم صغيرة مستقلة (Chunks)، ولا يتم تحميل كود صفحة معينة من الخادم إلا في اللحظة التي يقرر فيها المستخدم زيارة رابط تلك الصفحة فعلياً.",
      analogy: "مثل تطبيق البث التلفزيوني (Netflix): التطبيق لا يقوم بتنزيل كافة الأفلام والمسلسلات الموجودة في مكتبته إلى ذاكرة هاتفك مسبقاً دفعة واحدة؛ بل يعرض لك الأغلفة فقط، ولا يحمل ملف الفيلم إلا عندما تنقر على زر 'تشغيل'.",
      whyItMatters: "يقلل حجم حزمة التحميل الأولية (Initial Bundle Size) بنسبة تصل إلى 80%، ويسرع مؤشرات الويب الحيوية مثل FCP و LCP بنسبة هائلة.",
      syntax: "const Dashboard = React.lazy(() => import('./pages/Dashboard'));\n// في الرندر:\n<Suspense fallback={<Spinner />}>\n  <Dashboard />\n</Suspense>",
      simpleExample: `import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// استيراد الصفحات بشكل كسول باستخدام dynamic import
const HomePage = lazy(() => import('./pages/Home'));
const AnalyticsPage = lazy(() => import('./pages/Analytics'));

function AppWithLazyLoading() {
  return (
    // تغليف المسارات بـ Suspense لعرض شاشة مؤقتة أثناء تحميل حزمة جافاسكريبت
    <Suspense fallback={<div style={{ padding: '20px' }}>جاري تحميل الصفحة... ⏳</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </Suspense>
  );
}`,
      advancedExample: `import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// دالة مساعدة لتوفير تأخير محاكى للتطوير وعرض الهيكل العظمي
const AdminDashboard = lazy(() =>
  import('./pages/AdminDashboard').catch(() => ({
    default: () => <div className="p-6 text-red-500">فشل في تحميل حزمة الصفحة. تحقق من الشبكة.</div>,
  }))
);

// هيكل عظمي مخصص يظهر أثناء تحميل حزمة الصفحة من الخادم
function PageLoadingSkeleton() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4 animate-pulse">
      <div className="h-8 bg-slate-800 rounded-xl w-1/3"></div>
      <div className="h-4 bg-slate-800 rounded-lg w-2/3"></div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="h-32 bg-slate-800 rounded-2xl"></div>
        <div className="h-32 bg-slate-800 rounded-2xl"></div>
        <div className="h-32 bg-slate-800 rounded-2xl"></div>
      </div>
    </div>
  );
}

export function HighPerformanceRouter() {
  return (
    <Suspense fallback={<PageLoadingSkeleton />}>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </Suspense>
  );
}`,
      output: "تحميل حزم جافاسكريبت المستقلة عند الطلب فقط مع ظهور هياكل عظمية ناعمة أثناء فترة التنزيل القصيرة.",
      commonMistakes: [
        {
          mistake: "نسيان تغليف المكونات المستوردة بـ lazy داخل وسم <Suspense>.",
          fix: "ضع وسماً جامعاً لـ <Suspense fallback={<Loading />}> يحيط بـ <Routes> أو بالـ element مباشرة.",
          explanation: "المكون المستورد بـ React.lazy يقذف Promise للمحرك؛ إذا لم يجد Suspense سيتوقف التطبيق فوراً."
        }
      ],
      bestPractices: [
        "طبق التحميل الكسول على مستوى الصفحات الرئيسية (Route-Level Code Splitting) أولاً، فهو يعطي أكبر أثر إيجابي.",
        "صمم مكون fallback في Suspense ليكون شبيهاً بالصفحة المتوقعة (Skeleton UI) لمنع انزياح التخطيط التراكمي."
      ],
      infographic: {
        title: "آلية التحميل الكسول للمسارات (Route Code Splitting)",
        elements: [
          { label: "الحزمة الرئيسية (main.js)", role: "تحتوي فقط على الكود المشترك ومحرك التوجيه (حجم خفيف جداً)", color: "blue" },
          { label: "حزمة الصفحة 1 (Home.chunk.js)", role: "تُحمل فوراً عند فتح الموقع لأول مرة", color: "emerald" },
          { label: "حزمة الصفحة 2 (Admin.chunk.js)", role: "تبقى نائمة في الخادم ولا تُنزل إلا عند نقر المستخدم على الرابط", color: "purple" },
          { label: "مكون Suspense", role: "يعرض شاشة التحميل fallback ريثما يكتمل وصول الحزمة عبر الشبكة", color: "amber" }
        ]
      }
    },
    {
      id: "11.3.h",
      title: "التحكم في تجربة الانتقال بين الصفحات",
      englishTerm: "Page Transitions & View Transitions API (تَحْسِينُ تَجْرِبَةِ الاِنْتِقَالِ وَالحَرَكَاتِ البَصَرِيَّة)",
      description: "تحسين تجربة الانتقال بين الصفحات ينقل تطبيقك من مجرد موقع ويب عادي إلى تجربة بصرية باهرة تشبه أحدث تطبيقات الهواتف الذكية. يتم ذلك إما باستخدام واجهة المتصفح الحديثة View Transitions API (المدعومة أصلياً في React Router عبر خاصية `unstable_viewTransition` في Link)، أو عبر مكتبات الحركة مثل Framer Motion لعمل تأثيرات ظهور واختفاء ناعمة (Fade, Slide) بين المسارات.",
      analogy: "مثل الانتقال بين مشاهد الأفلام السينمائية: بدلاً من قطع المشهد فجأة وبصورة مربكة (Hard Cut)، يستخدم المخرج تقنية التلاشي الناعم (Cross-Fade) أو الحركة الانسيابية التي تقود عين المشاهد برقة وارتياح.",
      whyItMatters: "يعزز الإحساس بالسرعة والانسيابية، ويجعل التطبيق يبدو متقناً وذا جودة عالمية ويمنح المستخدم شعوراً بالراحة النفسية أثناء التصفح.",
      syntax: "<Link to='/path' viewTransition>صفحة بحركة سلسة</Link>",
      simpleExample: `import React from 'react';
import { Link } from 'react-router-dom';

function ViewTransitionDemo() {
  return (
    <div>
      {/* في المتصفحات الحديثة، ميزة viewTransition تفعل التحول البصري التلقائي */}
      <Link to="/gallery" viewTransition style={{ fontWeight: 'bold' }}>
        استعراض المعرض (انتقال انسيابي View Transitions) 🎨
      </Link>
    </div>
  );
}`,
      advancedExample: `import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// محاكي حركات الانتقال الانسيابية بين الصفحات بتأثير التلاشي الحركي
function AnimatedPageTransitionContainer({ children }) {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      className="animate-fadeIn transition-all duration-300 transform translate-y-0"
    >
      {/* هذا الكلاس يضمن ظهور كل صفحة بحركة انسيابية صاعدة خفيفة وتلاشي */}
      {children}
    </div>
  );
}

export function TransitionWrapperDemo({ pageContent }) {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white text-right overflow-hidden">
      <div className="text-xs text-blue-400 font-mono mb-2">⚡ ميزة الانتقال الانسيابي الناعم</div>
      <AnimatedPageTransitionContainer>
        <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
          {pageContent}
        </div>
      </AnimatedPageTransitionContainer>
    </div>
  );
}`,
      output: "انتقال بصري غاية في النعومة يزيل الشعور بالقفز المفاجئ بين عناصر الصفحات المختلفة.",
      commonMistakes: [
        {
          mistake: "استخدام حركات انتقال بطيئة ومبالغ فيها تستغرق أكثر من ثانية.",
          fix: "اجعل مدة الحركة قصيرة ورشيقة للغاية (بين 150ms إلى 300ms كحد أقصى).",
          explanation: "الحركات الطويلة تشعر المستخدم بأن الموقع بطيء وثقيل الاستجابة وتعيق إنجاز المهام."
        }
      ],
      bestPractices: [
        "احترم تفضيلات المستخدم عبر فحص استعلام الوسائط prefers-reduced-motion وتعطيل الحركات لمن يعانون من دوار الحركة.",
        "استغل View Transitions API في المتصفحات الحديثة لتمرير الصور بين الصفحات بسلاسة سحرية."
      ],
      infographic: {
        title: "ركائز تجربة الانتقال الاحترافية بين الصفحات",
        elements: [
          { label: "View Transitions API", role: "معيار المتصفح الحديث لربط العناصر المشتركة بسلاسة", color: "blue" },
          { label: "تلاشي لطيف Fade-in", role: "حركة سريعة (200ms) تمنع القفزات البصرية الفجة", color: "emerald" },
          { label: "مراعاة إمكانية الوصول", role: "احترام prefers-reduced-motion وإيقاف الحركة عند الطلب", color: "amber" },
          { label: "Scroll Restoration", role: "إعادة ضبط موضع التمرير لبدء الصفحة من القمة", color: "purple" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q11.3.1",
      question: "ما هي الوظيفة الأساسية لمكون <Outlet /> في المسارات المتداخلة؟",
      options: [
        "يقوم بحذف بيانات الجلسة من الذاكرة.",
        "يعمل كنقطة مخرج وموضع حقن يُرسم فيه المكون الفرعي المطابق لمسار الـ Route الابن.",
        "يقوم بإرسال طلبات POST للخادم تلقائياً.",
        "يمنع المستخدم من تغيير عنوان الرابط."
      ],
      correctAnswer: 1,
      explanation: "المكون Outlet يحدد المكان الذي ستظهر فيه الصفحة الفرعية المحددة داخل الهيكل العام للمكون الأب."
    },
    {
      id: "q11.3.2",
      question: "ما الفائدة المعمارية من استخدام مسارات التخطيط (Pathless Layout Routes)؟",
      options: [
        "تسمح بتطبيق قالب وشريط مشترك على مجموعة من الصفحات دون إضافة أجزاء جديدة إلى عنوان الـ URL.",
        "تقوم بتشفير كلمات المرور في المتصفح.",
        "تمنع الخادم من رؤية أسماء الصفحات.",
        "تغني عن استخدام React Router بالكامل."
      ],
      correctAnswer: 0,
      explanation: "مسارات التخطيط المعرفة بدون خاصية path تسمح بلف الصفحات في قالب وتصميم موحد مع الإبقاء على روابط URL نظيفة وقصيرة."
    },
    {
      id: "q11.3.3",
      question: "لماذا نستخدم React.lazy() مع Suspense عند تعريف مسارات الصفحات؟",
      options: [
        "لتقسيم كود التطبيق إلى حزم صغيرة وتنزيل كود الصفحة فقط عند زيارتها فعلياً، مما يسرع تحميل الموقع بنسبة هائلة.",
        "لإبطاء الموقع عمداً حتى يتمكن المستخدم من قراءة رسائل التحميل.",
        "لأن React ترفض تشغيل أكثر من 3 صفحات بدون lazy.",
        "لحظر محركات البحث من فهرسة الصفحات."
      ],
      correctAnswer: 0,
      explanation: "التحميل الكسول (Route-based Code Splitting) يقلل حجم الحزمة الابتدائية المحملة ويؤجل تحميل باقي الصفحات حتى يطلبها الزائر."
    }
  ],
  exercise: {
    id: "ex-11.3",
    title: "بناء لوحة إدارة محمية بمسارات متداخلة وحارس صلاحيات (Protected Admin Nested Suite)",
    description: "قم بإنشاء نظام مسارات متكامل يضم: 1) مسار محمي `ProtectedRoute` يفحص حالة المصادقة، 2) مسار أبوي للوحة التحكم `/admin` يحتوي على شريط جانبي ومكون `<Outlet />`، 3) مسارين فرعيين متداخلين: `/admin/stats` للإحصائيات و `/admin/settings` للإعدادات، و 4) مسار افتراضي `index route` يعرض رسالة ترحيبية.",
    starterCode: `import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';

// 1. ابنِ مكون ProtectedRoute الحارس
// 2. ابنِ مكون AdminLayout الذي يحتوي على الشريط الجانبي و Outlet
// 3. ابنِ الصفحات الفرعية وركب شجرة المسارات
`,
    hints: [
      "في ProtectedRoute: إذا كان !isAuth فاستخدم <Navigate to='/login' replace />، وإلا فاستخدم <Outlet />.",
      "في AdminLayout: ضع روابط <Link to='stats'> و <Link to='settings'> ولا تضع شرطة / في البداية لتكون نسبية.",
      "استخدم <Route index element={<Welcome />} /> للمسار الافتراضي."
    ],
    solution: `import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';

// 1. مكون الحراسة المشروط
function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

// 2. تخطيط لوحة الإدارة المتداخل
function AdminLayout() {
  return (
    <div className="flex min-h-[300px] bg-slate-900 text-white rounded-2xl border border-slate-800 overflow-hidden font-sans">
      {/* القائمة الجانبية المشتركة */}
      <aside className="w-48 p-4 bg-slate-950 border-l border-slate-800 space-y-2 text-right">
        <h4 className="font-bold text-xs text-blue-400 mb-3">لوحة الإدارة</h4>
        <Link to="/admin" className="block text-xs text-slate-300 hover:text-white p-1">
          🏠 الرئيسية
        </Link>
        <Link to="stats" className="block text-xs text-slate-300 hover:text-white p-1">
          📊 الإحصائيات
        </Link>
        <Link to="settings" className="block text-xs text-slate-300 hover:text-white p-1">
          ⚙️ الإعدادات
        </Link>
      </aside>

      {/* منطقة الحقن الديناميكية */}
      <main className="flex-1 p-6 text-right">
        <Outlet />
      </main>
    </div>
  );
}

// الصفحات الفرعية
function AdminWelcome() { return <h3 className="text-emerald-400 font-bold">مرحباً بك في لوحة الإدارة الرئيسية (Index Route)</h3>; }
function AdminStats() { return <h3 className="text-blue-400 font-bold">تقارير وإحصائيات النظام اللحظية 📈</h3>; }
function AdminSettings() { return <h3 className="text-amber-400 font-bold">تفضيلات الأمان وإعدادات النظام ⚙️</h3>; }
function LoginPage() { return <div className="p-6 bg-red-50 text-red-700 rounded-xl text-center">يرجى تسجيل الدخول أولاً للوصول للوحة التحكم 🔒</div>; }

export function MasterAdminApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <div className="max-w-xl mx-auto p-4 space-y-4">
        <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border text-xs">
          <span>حالة المستخدم: <strong>{isLoggedIn ? 'مسجل دخول ✔️' : 'غير مسجل ❌'}</strong></span>
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="px-3 py-1 bg-blue-600 text-white rounded-lg font-bold"
          >
            تبديل حالة الدخول
          </button>
        </div>

        <Routes>
          <Route path="/login" element={<LoginPage />} />

          {/* المسارات المحمية */}
          <Route element={<ProtectedRoute isAuthenticated={isLoggedIn} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminWelcome />} />
              <Route path="stats" element={<AdminStats />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}`
  },
  infographic: {
    title: "خريطة هندسة المسارات المتقدمة في React Router",
    description: "التكامل الهرمي بين التخطيطات، المخرجات، الحماية، والأداء العالي",
    steps: [
      { step: "1", title: "Nested & Outlet", desc: "تداخل المسارات وحقن الشاشات الفرعية بنقطة <Outlet /> موضعية" },
      { step: "2", title: "Layout Routes", desc: "توحيد القوالب البصرية بدون التلاعب أو تمديد مسار الـ URL" },
      { step: "3", title: "Route Guards", desc: "حماية الصفحات الحساسة وتحويل الزوار غير المسجلين لـ /login" },
      { step: "4", title: "Lazy & Suspense", desc: "تقسيم الكود بحزم مستقلة وتسريع الإقلاع الأولي للتطبيق" }
    ]
  }
};
