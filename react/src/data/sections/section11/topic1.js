// src/data/sections/section11/topic1.js
// القسم 11: التوجيه والتنقل باستخدام React Router - الموضوع 1: مقدمة إلى Routing

export const topic1 = {
  id: "11.1",
  title: "مقدمة إلى Routing",
  description: "الأسس والمفاهيم الجوهرية للتوجيه من جانب العميل (Client-Side Routing)، وفهم الفرق بين المواقع التقليدية وتطبيقات الصفحة الواحدة (SPA)، وتثبيت وإعداد مكتبة React Router v6/v7، وتعريف شجرة المسارات وإنشاء الصفحات وصفحة 404.",
  subtopics: [
    {
      id: "11.1.a",
      title: "مفهوم Client-Side Routing",
      englishTerm: "Client-Side Routing (كْلَايِنْت سَايْد رُوتِينْغ: التوجيه والتنقل من جانب العميل)",
      description: "التوجيه من جانب العميل (CSR Routing) هو الآلية التي تتيح لتطبيقات الويب الحديثة تغيير محتوى الصفحة وتحديث شريط عنوان المتصفح (URL) دون إرسال طلب جديد إلى الخادم لجلب ملف HTML كامل ودون وميض أو إعادة تحميل للصفحة (No Full Page Reload). يتولى كود جافاسكريبت في React مراقبة عنوان المتصفح واعتراض النقر على الروابط وتبديل المكونات المعروضة على الشاشة لحظياً بسرعة البرق.",
      analogy: "مثل مسرح كبير ذي ديكورات متغيرة على نفس الخشبة: بدلاً من إخراج الجمهور من المبنى بالكامل وإدخالهم في مسرح آخر لمشاهدة الفصل الثاني (Traditional Web)، يبقى الجمهور في مقاعدهم وتتغير الستائر والممثلون والديكور في ثوانٍ أمام أعينهم في نفس الغرفة (Client-Side Routing).",
      whyItMatters: "يوفر تجربة استخدام فائقة السلاسة تشبه تطبيقات الهواتف الذكية وتطبيقات سطح المكتب الأصلية، ويلغي تماماً الشاشة البيضاء والوميض المزعج الذي يحدث عند التنقل بين صفحات المواقع التقليدية.",
      syntax: "URL Change ---> History API PushState ---> React Router intercepts ---> Swap Active Component (0ms)",
      simpleExample: `// مثال مفاهيمي مبسط يوضح فكرة التوجيه من جانب العميل
import React, { useState } from 'react';

function SimpleRouterDemo() {
  // تتبع المسار الحالي في الحالة المحلية
  const [currentPath, setCurrentPath] = useState('/');

  // دالة لتغيير المسار دون إعادة تحميل الصفحة
  const navigateTo = (path) => {
    // تحديث شريط عنوان المتصفح برمجياً عبر History API
    window.history.pushState(null, '', path);
    // تحديث الحالة لتبديل المكون المعروض
    setCurrentPath(path);
  };

  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => navigateTo('/')}>الرئيسية</button>
        <button onClick={() => navigateTo('/about')}>من نحن</button>
      </nav>

      {/* عرض الصفحة المطابقة للمسار الحالي */}
      {currentPath === '/' && <h1>مرحباً بك في الصفحة الرئيسية</h1>}
      {currentPath === '/about' && <h1>صفحة نبذة عن الشركة</h1>}
    </div>
  );
}`,
      advancedExample: `// محاكي توجيه متقدم يتفاعل مع أحداث المتصفح History popstate
import React, { useState, useEffect } from 'react';

function CustomHistoryRouter({ routes }) {
  // تخزين المسار الحالي من شريط العنوان مباشرة
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    // الاستماع لنقر المستخدم على زري الرجوع والتقدم في المتصفح
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // دالة ملاحة مركزية
  const navigate = (to) => {
    window.history.pushState(null, '', to);
    setPathname(to);
  };

  // مطابقة المكون المناسب
  const ActiveComponent = routes[pathname] || routes['*'];

  return (
    <div>
      <header className="p-4 bg-slate-800 text-white flex gap-4">
        <button onClick={() => navigate('/')} className="hover:text-blue-300">الرئيسية</button>
        <button onClick={() => navigate('/products')} className="hover:text-blue-300">المنتجات</button>
        <button onClick={() => navigate('/contact')} className="hover:text-blue-300">اتصل بنا</button>
      </header>
      <main className="p-6">
        <ActiveComponent />
      </main>
    </div>
  );
}`,
      output: "تحديث الشاشة وعنوان الرابط فوراً في أجزاء من الثانية مع دعم كامل لزري الرجوع والتقدم دون أي إعادة تحميل.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن Client-Side Routing يغني عن إعداد خادم الويب (مثل Nginx أو Apache أو Vercel).",
          fix: "تأكد من ضبط الخادم لإعادة توجيه كافة المسارات (/*) إلى ملف index.html (SPA Fallback).",
          explanation: "عندما يقوم المستخدم بإعادة تحميل الصفحة (F5) على مسار مثل /about، سيبحث الخادم عن مجلد باسم about؛ إذا لم تكن قاعدة Fallback مفعلة ستظهر شاشة 404 من الخادم."
        }
      ],
      bestPractices: [
        "استخدم مكتبات معتمدة ومختبرة مثل React Router بدلاً من محاولة اختراع نظام توجيه يدوي من الصفر للمشاريع الكبيرة.",
        "احرص دائماً على مزامنة المسارات مع خادم الاستضافة (Rewrites to index.html)."
      ],
      infographic: {
        title: "آلية عمل التوجيه من جانب العميل (CSR)",
        elements: [
          { label: "1. نقر الرابط", role: "اعتراض حدث النقر ومنع السلوك الافتراضي لوسم <a>", color: "blue" },
          { label: "2. History API", role: "استدعاء pushState لتغيير الـ URL بدون إرسال طلب شبكي", color: "purple" },
          { label: "3. Router Matcher", role: "مقارنة الـ URL الجديد بشجرة المسارات المسجلة", color: "amber" },
          { label: "4. Component Render", role: "إلغاء تركيب المكون القديم وتركيب الجديد فوراً (0ms)", color: "emerald" }
        ]
      }
    },
    {
      id: "11.1.b",
      title: "الفرق بين التنقل التقليدي وSPA",
      englishTerm: "Traditional Multi-Page Apps (MPA) vs Single-Page Apps (SPA) (التَّنَقُّلُ التَّقْلِيدِيُّ ضِدَّ تَطْبِيقَاتِ الصَّفْحَةِ الوَاحِدَة)",
      description: "في المواقع التقليدية متعددة الصفحات (MPA)، يؤدي النقر على أي رابط إلى طلب ملف HTML كامل جديد من الخادم، مما يتسبب في تفريغ الصفحة القديمة وظهور شاشة بيضاء مؤقتة وإعادة تحميل كافة ملفات CSS وجافاسكريبت وضياع حالة التطبيق (State). أما في تطبيقات الصفحة الواحدة (SPA) المبنية بـ React، يتم تحميل ملف HTML وملفات التطبيق مرة واحدة فقط في البداية، ويقتصر التنقل اللاحق على جلب بيانات JSON خفيفة واستبدال المكونات محلياً.",
      analogy: "MPA مثل إعادة بناء وهدم المنزل بالكامل كلما أردت الانتقال من غرفة النوم إلى المطبخ؛ بينما SPA مثل المشي بحرية وسلاسة بين غرف نفس المنزل مع بقاء الأساسات والأعمدة ثابتة في مكانها دون أي هدم.",
      whyItMatters: "فهم الفرق يجعلك تقدر لماذا نستخدم وسم <Link> بدلاً من <a href>، ولماذا نحتاج لحفظ الحالة واستخدام التخزين المؤقت، وكيف تنعكس تجربة SPA على سرعة التطبيق.",
      syntax: "MPA: <a href='/page'> -> Full Network Roundtrip -> Blank Screen -> New Page\nSPA: <Link to='/page'> -> JS intercepts -> Instant Component Swap (0 latency)",
      simpleExample: `// مقارنة بين التنقلين في نفس المكون
import React from 'react';
import { Link } from 'react-router-dom';

function NavigationComparison() {
  return (
    <div>
      {/* تنقل تقليدي خاطئ في تطبيقات React: يسبب إعادة تحميل كاملة للشاشة وضياع الـ State */}
      <a href="/dashboard">تنقل تقليدي (إعادة تحميل كاملة ❌)</a>

      <hr />

      {/* تنقل احترافي بتقنية SPA: تبديل سلس للمكونات مع الحفاظ على الـ State والسرعة */}
      <Link to="/dashboard">تنقل SPA حديث (فوري وسلس ✔️)</Link>
    </div>
  );
}`,
      advancedExample: `// مثال يوضح كيف يحافظ التنقل في SPA على الصوت أو الفيديو المشغل أثناء التنقل
import React, { useState } from 'react';

function PersistentLayoutDemo() {
  const [currentPage, setCurrentPage] = useState('home');
  const [counter, setCounter] = useState(0);

  return (
    <div className="p-4 max-w-lg mx-auto bg-slate-900 text-white rounded-2xl">
      {/* عنصر مستمر لا ينقطع أبداً عند التنقل بين الصفحات */}
      <div className="p-3 mb-4 bg-blue-900/60 rounded-xl border border-blue-500/30 flex justify-between items-center">
        <span>مشغل البودكاست الصوتي (مستمر أثناء التنقل) 🎙️</span>
        <button
          onClick={() => setCounter((c) => c + 1)}
          className="px-2 py-1 bg-blue-600 rounded text-xs"
        >
          عداد الإعجاب: {counter}
        </button>
      </div>

      <nav className="flex gap-3 mb-4">
        <button
          onClick={() => setCurrentPage('home')}
          className={"px-3 py-1 rounded " + (currentPage === 'home' ? 'bg-blue-600' : 'bg-slate-800')}
        >
          الرئيسية
        </button>
        <button
          onClick={() => setCurrentPage('profile')}
          className={"px-3 py-1 rounded " + (currentPage === 'profile' ? 'bg-blue-600' : 'bg-slate-800')}
        >
          الملف الشخصي
        </button>
      </nav>

      {/* تبديل محتوى الصفحة فقط دون إيقاف الصوت أو تصفير العداد */}
      <div className="p-4 bg-slate-800 rounded-xl min-h-[120px]">
        {currentPage === 'home' ? (
          <p>مرحباً بك في الصفحة الرئيسية! لاحظ أن عداد الإعجاب ومشغل الصوت لم يتأثرا مطلقاً.</p>
        ) : (
          <p>هذه صفحة الملف الشخصي. التنقل تم في 0 ثانية دون وميض الشاشة إطلاقاً.</p>
        )}
      </div>
    </div>
  );
}`,
      output: "تنقل فوري بين الشاشات مع بقاء العناصر المشتركة (المشغلات، النوافذ الجانبية، الإشعارات) حية ومستمرة.",
      commonMistakes: [
        {
          mistake: "استخدام وسم <a href='/...'> للتنقل داخل تطبيق React.",
          fix: "استبدله دائماً بوسم <Link to='/...'> أو <NavLink to='/...'> من مكتبة React Router.",
          explanation: "وسم <a> العادي يجبر المتصفح على طلب صفحة HTML جديدة من الخادم ومسح كافة الـ State في الذاكرة."
        }
      ],
      bestPractices: [
        "استخدم وسم <a> فقط للروابط الخارجية التي تؤدي لمواقع خارج نطاق تطبيقك (مثل رابط تويتر أو لينكدإن).",
        "استغل ميزة بقاء الهيكل الخارجي (Persistent Shell) لتشغيل مشغلات الوسائط والدردشة المستمرة."
      ],
      infographic: {
        title: "مقارنة MPA التقليدي مقابل SPA الحديث",
        elements: [
          { label: "زمن الاستجابة", role: "MPA: بطيء (طلب HTML كامل من الخادم) | SPA: فوري (تبديل محلي بـ جافاسكريبت)", color: "blue" },
          { label: "ثبات الحالة (State)", role: "MPA: تمحى الذاكرة تماماً عند كل نقرة | SPA: تحافظ الحالة على قيمها بسلاسة", color: "emerald" },
          { label: "تجربة المستخدم UX", role: "MPA: وميض أبيض وانقطاع بصري | SPA: انتقال ناعم يشبه تطبيقات الهاتف", color: "purple" },
          { label: "استهلاك البيانات", role: "MPA: إعادة تحميل CSS/JS في كل صفحة | SPA: تحميل مرة واحدة ثم جلب JSON فقط", color: "amber" }
        ]
      }
    },
    {
      id: "11.1.c",
      title: "تثبيت React Router",
      englishTerm: "Installing React Router (تَثْبِيتُ حُزْمَةِ رِياكْت رُوتَرْ: إضافة مكتبة الملاحة القياسية)",
      description: "مكتبة `react-router-dom` هي المعيار القياسي الفعلي (De-facto Standard) لإدارة التوجيه والتنقل في تطبيقات الويب المبنية بـ React. يتم تثبيتها كاعتمادية إنتاجية (Production Dependency) عبر مدير الحزم `npm` أو `yarn` أو `pnpm`، وتوفر كافة المكونات والخطافات اللازمة مثل `BrowserRouter` و `Routes` و `Route` و `Link` و `useNavigate`.",
      analogy: "مثل تركيب لوحة التحكم في شبكة القطارات السريعة: تطبيق React هو عربات القطار، ومكتبة React Router هي قضبان السكك الحديدية وإشارات التحويل الذكية التي توجه كل قطار إلى محطته بدقة.",
      whyItMatters: "بدون React Router، ستضطر لكتابة مئات الأسطر اليدوية لإدارة شريط العنوان وتاريخ التصفح وحماية المسارات وتمرير المعاملات.",
      syntax: "npm install react-router-dom",
      simpleExample: `// أمر التثبيت في سطر الأوامر (Terminal):
// npm install react-router-dom

// التحقق من الإضافة في ملف package.json:
// {
//   "dependencies": {
//     "react": "^19.0.0",
//     "react-dom": "^19.0.0",
//     "react-router-dom": "^6.28.0"
//   }
// }

// استيراد المكونات الأساسية للبدء:
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';`,
      advancedExample: `// مثال على التأكد البرمجي من جاهزية وإصدار React Router في التطبيق
import React from 'react';
// استيراد كافة الأدوات الأساسية من الحزمة المثبتة
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';

function AppBootstrap() {
  return (
    <BrowserRouter>
      <div className="p-4 font-sans text-right">
        <h3 className="text-emerald-600 font-bold">
          تم تثبيت وتهيئة React Router بنجاح! 🚀
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          أصبح التطبيق قادراً على إدارة المسارات والتنقل التفاعلي بسلاسة تامة.
        </p>
      </div>
    </BrowserRouter>
  );
}`,
      output: "تطبيق React مجهز بالكامل بأحدث أدوات التوجيه وجاهز لتعريف الصفحات والمسارات.",
      commonMistakes: [
        {
          mistake: "تثبيت حزمة react-router بدلاً من react-router-dom في مشاريع الويب.",
          fix: "تأكد من تثبيت react-router-dom؛ لأنها تتضمن الحزمة الأساسية مضافاً إليها مكونات الـ DOM الخاصة بالمتصفح.",
          explanation: "حزمة react-router تحتوي على المنطق المجرد فقط، بينما react-router-dom تضم BrowserRouter و Link و NavLink المخصصة للمتصفحات."
        }
      ],
      bestPractices: [
        "ثبت دائماً أحدث إصدار مستقر من react-router-dom لدعم أحدث ميزات React 18 و React 19.",
        "تأكد من عدم وجود تضارب في الإصدارات مع الحزم الأخرى عبر فحص package.json."
      ],
      infographic: {
        title: "خطوات تثبيت وتهيئة React Router",
        elements: [
          { label: "1. أمر التثبيت", role: "npm install react-router-dom", color: "blue" },
          { label: "2. فحص الاعتماديات", role: "التأكد من وجود الحزمة في package.json", color: "emerald" },
          { label: "3. الاستيراد", role: "import { BrowserRouter, Routes, Route } from 'react-router-dom'", color: "purple" },
          { label: "4. التغليف الأبوي", role: "تغليف شجرة التطبيق بالكامل داخل <BrowserRouter>", color: "amber" }
        ]
      }
    },
    {
      id: "11.1.d",
      title: "إعداد نظام التوجيه",
      englishTerm: "Configuring the Routing System (إِعْدَادُ نِظَامِ التَّوْجِيهِ: تغليف التطبيق بـ BrowserRouter)",
      description: "لتمكين ميزات التوجيه في React، يجب تغليف شجرة المكونات بالكامل داخل موفر السياق `BrowserRouter` (عادةً في أعلى قمة التطبيق في ملف `main.jsx` أو `App.jsx`). يقوم `BrowserRouter` باستخدام واجهة المتصفح الأصلية HTML5 History API (دوال `pushState` و `replaceState` وحدث `popstate`) لإبقاء واجهة المستخدم متزامنة مع عنوان الـ URL في شريط المتصفح.",
      analogy: "مثل تركيب شبكة الكهرباء الرئيسية في المبنى: تضع القاطع الرئيسي (BrowserRouter) عند مدخل المبنى لتصل الكهرباء إلى كافة الغرف والأجهزة الفرعية في كل طابق بسلاسة.",
      whyItMatters: "أي مكون يستدعي `<Link>` أو خطافات التوجيه مثل `useNavigate()` خارج سياق `BrowserRouter` سينهار التطبيق فوراً ويقذف خطأ شهيراً: `useNavigate() may be used only in the context of a <Router> component`.",
      syntax: "import { BrowserRouter } from 'react-router-dom';\n\n<BrowserRouter>\n  <App />\n</BrowserRouter>",
      simpleExample: `// إعداد نظام التوجيه في ملف المدخل الرئيسي: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// استيراد موفر التوجيه
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* تغليف التطبيق بالكامل بموفر التوجيه لتمكين الملاحة في كل المكونات */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);`,
      advancedExample: `// إعداد نظام التوجيه الحديث بواسطة createBrowserRouter و RouterProvider
import React from 'react';
import ReactDOM from 'react-dom/client';
// استيراد واجهة Data Router الحديثة
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// تعريف الصفحات
function HomePage() { return <h2>الصفحة الرئيسية</h2>; }
function AboutPage() { return <h2>صفحة من نحن</h2>; }

// بناء مصفوفة المسارات المعيارية (Data Router Mode)
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
]);

// تشغيل التطبيق باستخدام RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);`,
      output: "نظام توجيه نشط ومتكامل يغذي كافة المكونات بالقدرة على قراءة وتغيير الـ URL بكل أمان.",
      commonMistakes: [
        {
          mistake: "وضع أكثر من <BrowserRouter> واحد متداخل في نفس التطبيق دون داعٍ.",
          fix: "استخدم BrowserRouter واحد فقط في أعلى نقطة من التطبيق (غالباً في main.jsx).",
          explanation: "تعدد موفرات التوجيه يؤدي إلى تضارب وتصادم في إدارة تاريخ التصفح وأخطاء في المسارات النسبية."
        },
        {
          mistake: "استدعاء خطاف useNavigate() داخل مكون يقع خارج وسم <BrowserRouter>.",
          fix: "تأكد من أن المكون الذي يستدعي الخطاف هو ابن مباشر أو غير مباشر لـ BrowserRouter.",
          explanation: "الخطافات تحتاج للوصول إلى كائن الـ Context الخاص بالتوجيه والذي يوفره Router."
        }
      ],
      bestPractices: [
        "غلف التطبيق بـ BrowserRouter في ملف main.jsx ليبقى ملف App.jsx نظيفاً ومخصصاً للمسارات وتخطيط الصفحة.",
        "في التطبيقات الحديثة الكبيرة، فضل استخدام createBrowserRouter لدعم ميزات الـ Loaders والـ Actions."
      ],
      infographic: {
        title: "هرمية تغليف نظام التوجيه",
        elements: [
          { label: "main.jsx", role: "نقطة الدخول وتغليف شجرة التطبيق بـ <BrowserRouter>", color: "blue" },
          { label: "App.jsx", role: "تعريف شريط التنقل وشجرة المسارات <Routes>", color: "purple" },
          { label: "Page Components", role: "الصفحات الفعلية التي تستهلك المعاملات وتتنقل", color: "emerald" },
          { label: "History Sync", role: "المزامنة الحية مع شريط عنوان المتصفح في الخلفية", color: "amber" }
        ]
      }
    },
    {
      id: "11.1.e",
      title: "تعريف المسارات Routes",
      englishTerm: "Defining Routes (تَعْرِيفُ المَسَارَاتِ: الربط بين عناوين الـ URL ومكونات العرض)",
      description: "تعريف المسارات يتم من خلال المكونين الأساسيين `<Routes>` و `<Route>`. يعمل وسم `<Routes>` كحاوية ذكية تقوم بفحص عنوان الـ URL الحالي في المتصفح، والبحث بين كافة وسوم `<Route>` بداخله للعثور على 'أفضل تطابق' (Best Match)، ثم عرض المكون المحدد في خاصية `element` للمسار الفائز. يأخذ كل مسار خاصية `path` لتحديد نمط الرابط وخاصية `element` لتحديد المكون البرمجي.",
      analogy: "مثل لوحة التحويلات الهاتفية المركزية (Switchboard): عندما يطلب المتصل رقماً معيناً (URL)، تقوم اللوحة بفحص كافة الخطوط المتاحة (Routes) وتحويل المكالمة فوراً إلى المكتب المعني المحدد بدقة (Component).",
      whyItMatters: "هو العمود الفقري لهندسة التطبيق؛ من خلاله تنظم شجرة الصفحات وترسم هيكل الملاحة الذي يكتشفه المستخدم ومحركات البحث.",
      syntax: "<Routes>\n  <Route path='/' element={<Home />} />\n  <Route path='/about' element={<About />} />\n</Routes>",
      simpleExample: `import React from 'react';
import { Routes, Route } from 'react-router-dom';

// مكونات الصفحات
function Home() { return <h2>الصفحة الرئيسية 🏠</h2>; }
function Contact() { return <h2>تواصل معنا 📞</h2>; }

function AppRoutes() {
  return (
    // حاوية المسارات الذكية
    <Routes>
      {/* المسار الجذري الافتراضي */}
      <Route path="/" element={<Home />} />
      {/* مسار صفحة التواصل */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}`,
      advancedExample: `import React from 'react';
import { Routes, Route } from 'react-router-dom';

// صفحات التطبيق
function DashboardHome() { return <div>لوحة المؤشرات العامة 📊</div>; }
function UserList() { return <div>قائمة المستخدمين المعتمدين 👥</div>; }
function SystemSettings() { return <div>إعدادات النظام والأمان ⚙️</div>; }

function MasterRouteRegistry() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <Routes>
        {/* مسار لوحة التحكم الرئيسي */}
        <Route path="/dashboard" element={<DashboardHome />} />
        
        {/* مسار قائمة المستخدمين */}
        <Route path="/dashboard/users" element={<UserList />} />
        
        {/* مسار الإعدادات */}
        <Route path="/dashboard/settings" element={<SystemSettings />} />
      </Routes>
    </div>
  );
}`,
      output: "ظهور المكون المناسب على الشاشة تلقائياً بمجرد تغير مسار الـ URL في شريط المتصفح.",
      commonMistakes: [
        {
          mistake: "كتابة <Route component={Home}> كما كان في الإصدار القديم v5 بدلاً من <Route element={<Home />}>.",
          fix: "في React Router v6 و v7 يجب دائماً استخدام خاصية element وتمرير عنصر JSX: element={<Home />} وليس اسم المكون مجرداً.",
          explanation: "تمرير عنصر JSX element={<Home />} يتيح تمرير Props مباشرة للمكون بسهولة فائقة."
        }
      ],
      bestPractices: [
        "ضع كافة وسوم <Route> داخل وسم <Routes> واحد جامع في نفس المستوى.",
        "استخدم حروفاً صغيرة مفصولة بشرطات (kebab-case) في مسارات الـ path مثل /user-profile."
      ],
      infographic: {
        title: "آلية مطابقة المسارات في React Router v6+",
        elements: [
          { label: "URL في المتصفح", role: "المسار الحالي مثلاً: /products/laptops", color: "blue" },
          { label: "حاوية <Routes>", role: "فحص المسارات واختيار المسار الأكثر دقة ومطابقة", color: "amber" },
          { label: "خاصية path", role: "قالب مطابقة الرابط (Path Pattern)", color: "purple" },
          { label: "خاصية element", role: "عنصر الـ JSX الذي سيتم رسمه على الشاشة", color: "emerald" }
        ]
      }
    },
    {
      id: "11.1.f",
      title: "إنشاء صفحات متعددة",
      englishTerm: "Creating Multi-Page Layouts (إِنْشَاءُ صَفَحَاتٍ مُتَعَدِّدَة: تنظيم شجرة الصفحات والمجلدات)",
      description: "في تطبيقات React الاحترافية، تُنظم الصفحات داخل مجلد مخصص يسمى عادةً `src/pages` أو `src/views`، حيث تمثل كل صفحة ملفاً مستقلاً (مثل `HomePage.jsx` و `AboutPage.jsx` و `ProductsPage.jsx`). يتم استيراد هذه الصفحات وتوزيعها على المسارات المحددة، مع توفير شريط تنقل مشترك (Navbar) وتذييل موحد (Footer) يحيط بكافة الصفحات لتوفير هوية بصرية متسقة.",
      analogy: "مثل غرف الفندق الفاخر: الفندق يمتلك بهواً عاماً مشتركاً ومصاعد مشتركة (Layout/Navbar)، ولكن كل جناح له بابه الخاص وغرفته المستقلة تماماً (Pages) بديكوراتها وأثاثها الخاص.",
      whyItMatters: "الفصل المنظم للملفات يمنع الفوضى ويسهل صيانة التطبيق واختبار كل صفحة على حدة وتطبيق ميزات التحميل الكسول (Lazy Loading) لاحقاً.",
      syntax: "// src/pages/Home.jsx\n// src/pages/About.jsx\n// في App.jsx: <Navbar /> <Routes>...</Routes> <Footer />",
      simpleExample: `import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// تعريف صفحات مستقلة
function HomePage() {
  return <div className="p-4">أهلاً بك في موقعنا التعليمي 📚</div>;
}

function AboutPage() {
  return <div className="p-4">نحن منصة متخصصة في احتراف React من الصفر 🚀</div>;
}

function MultiPageApp() {
  return (
    <div>
      {/* شريط تنقل علوي مشترك يظهر في كافة الصفحات */}
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">الرئيسية</Link>
        <Link to="/about">من نحن</Link>
      </nav>

      {/* منطقة تبديل الصفحات */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}`,
      advancedExample: `// هيكلية احترافية كاملة لتطبيق متعدد الصفحات مع شريط تنقل وتذييل
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// مكونات الهيكل العام المشترك
function AppNavbar() {
  return (
    <header className="bg-slate-900 text-white p-4 flex justify-between items-center shadow-md">
      <div className="font-bold text-lg text-blue-400">منصة كود برو 💻</div>
      <nav className="flex gap-4 text-sm">
        <Link to="/" className="hover:text-blue-300">الرئيسية</Link>
        <Link to="/courses" className="hover:text-blue-300">الدورات</Link>
        <Link to="/blog" className="hover:text-blue-300">المدونة</Link>
        <Link to="/contact" className="hover:text-blue-300">اتصل بنا</Link>
      </nav>
    </header>
  );
}

function AppFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs text-center py-6 border-t border-slate-800">
      جميع الحقوق محفوظة © 2026 - أكاديمية React المتقدمة
    </footer>
  );
}

// صفحات مستقلة
function Home() { return <div className="py-12 text-center text-xl font-bold">مرحباً بكم في أكاديمية البرمجة الحديثة</div>; }
function Courses() { return <div className="py-12 text-center text-xl font-bold">قائمة الدورات البرمجية المعتمدة</div>; }
function Blog() { return <div className="py-12 text-center text-xl font-bold">أحدث مقالات التقنية وتطوير الويب</div>; }
function Contact() { return <div className="py-12 text-center text-xl font-bold">تواصل مع فريق الدعم الفني</div>; }

export function FullMultiPageView() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-sans">
      <AppNavbar />
      <main className="flex-1 container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
}`,
      output: "تطبيق ويب متكامل يضم شريط تنقل علوي وتذييل سفلي ثابتين، مع تغير محتوى الصفحة الرئيسية بسلاسة عند النقر على أي رابط.",
      commonMistakes: [
        {
          mistake: "وضع شريط التنقل Navbar داخل كل صفحة على حدة مكرراً.",
          fix: "ضع شريط التنقل خارج وسم <Routes> في المكون الأب المشترك ليظهر مرة واحدة في كافة الصفحات.",
          explanation: "تكرار الـ Navbar داخل كل ملف صفحة يسبب إعادة رسمه من الصفر مع كل تنقل ويهدر الأداء ومبدأ DRY."
        }
      ],
      bestPractices: [
        "نظم مشروعك دائماً بفصل مجلد src/pages للصفحات ومجلد src/components للمكونات المعاد استخدامها.",
        "اجعل الصفحات مجرد منسقات (Orchestrators) تستدعي المكونات الفرعية وتجلب البيانات."
      ],
      infographic: {
        title: "هيكل تطبيق React متعدد الصفحات",
        elements: [
          { label: "Persistent Navbar", role: "شريط التنقل العلوي المشترك (ثابت أثناء الانتقال)", color: "blue" },
          { label: "Dynamic <Routes>", role: "المنطقة الديناميكية التي تستبدل الصفحات بحسب المسار", color: "purple" },
          { label: "Page Modules", role: "ملفات الصفحات المستقلة داخل مجلد src/pages", color: "emerald" },
          { label: "Persistent Footer", role: "التذييل السفلي المشترك الحاوي للحقوق والروابط السريعة", color: "amber" }
        ]
      }
    },
    {
      id: "11.1.g",
      title: "إنشاء صفحة Not Found",
      englishTerm: "Creating a 404 Not Found Page (صَفْحَةُ 404: التقاط وتوجيه المسارات غير المعرفة)",
      description: "صفحة 404 (Not Found / Catch-All) هي صفحة الأمان التي تظهر للمستخدم عندما يحاول كتابة أو فتح رابط غير مسجل في شجرة المسارات (مثل `/wrong-url` أو `/page999`). في React Router، يتم التقاط أي مسار غير معروف ببساطة متناهية عن طريق كتابة علامة النجمة كمسار: `path='*'` في آخر قائمة المسارات داخل `<Routes>`. ويجب أن تتضمن الصفحة تصميماً مريحاً وزراً يعيد المستخدم إلى الصفحة الرئيسية.",
      analogy: "مثل موظف الاستقبال في برج تجاري ضخم: إذا سأله زائر عن 'المكتب رقم 9999' وهو غير موجود بالبرج، لا يتركه حائراً في الممر المظلم، بل يبتسم ويقول: 'عذراً هذا المكتب غير موجود، تفضل بالعودة إلى بهو الاستقبال الرئيسي'.",
      whyItMatters: "يحمي التطبيق من عرض شاشة بيضاء مفرغة ومحيرة للمستخدم، ويمنح تجربة تصفح مرنة واحترافية توجه الزائر للعودة إلى المسار الصحيح.",
      syntax: "<Route path='*' element={<NotFoundPage />} />",
      simpleExample: `import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() { return <h2>الصفحة الرئيسية</h2>; }

// مكون صفحة 404 البسيطة
function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '72px', color: '#e11d48' }}>404</h1>
      <h2>عذراً! الصفحة المطلوبة غير موجودة</h2>
      <p>ربما تم نقل الصفحة أو كتابة الرابط بشكل غير صحيح.</p>
      <Link to="/" style={{ color: '#2563eb', fontWeight: 'bold' }}>
        العودة إلى الصفحة الرئيسية 🏠
      </Link>
    </div>
  );
}

function AppWith404() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* مسار النجمة يلتقط أي مسار غير مطابق للمسارات السابقة */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}`,
      advancedExample: `import React from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

// صفحة 404 احترافية تسجل الرابط الخاطئ وتوفر أزرار رجوع وبحث
function AdvancedNotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 my-4 shadow-2xl">
      <div className="w-24 h-24 bg-rose-500/10 text-rose-400 rounded-full flex items-center justify-center text-5xl mb-4 border border-rose-500/20">
        🧭
      </div>
      
      <span className="text-xs font-mono px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full border border-rose-500/30 mb-3">
        ERROR 404 - PAGE NOT FOUND
      </span>

      <h2 className="text-3xl font-black mb-2">
        يبدو أنك سلكت مساراً غير موجود!
      </h2>

      <p className="text-slate-400 text-sm max-w-md mb-2">
        الرابط الذي تحاول الوصول إليه غير مسجل في نظامنا:
      </p>

      <code className="text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg text-amber-400 border border-slate-800 mb-6 dir-ltr">
        {location.pathname}
      </code>

      <div className="flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition"
        >
          ⬅️ العودة للصفحة السابقة
        </button>
        <Link
          to="/"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition shadow-lg shadow-blue-600/30"
        >
          🏠 التوجه للرئيسية
        </Link>
      </div>
    </div>
  );
}`,
      output: "عرض شاشة خطأ 404 غاية في الرقي والأناقة توضح المسار المفقود وتتيح العودة بزرين تفاعليين.",
      commonMistakes: [
        {
          mistake: "وضع مسار path='*' في أول قائمة المسارات داخل <Routes>.",
          fix: "ضع مسار path='*' في نهاية قائمة المسارات دائماً بعد كافة المسارات المحددة.",
          explanation: "في React Router v6 يتم تقييم الدقة تلقائياً، ولكن ترتيبه في النهاية يعتبر أفضل ممارسة برمجية للتنظيم والوضوح."
        }
      ],
      bestPractices: [
        "قدم دائماً رابطاً واضحاً للعودة للصفحة الرئيسية في صفحة 404.",
        "استخدم useLocation لعرض المسار الخاطئ الذي كتبه المستخدم لتوضيح سبب المشكلة."
      ],
      infographic: {
        title: "آلية عمل مسار النجمة (Catch-All Wildcard Route)",
        elements: [
          { label: "المسار 1: /", role: "مطابقة الصفحة الرئيسية بدقة", color: "blue" },
          { label: "المسار 2: /about", role: "مطابقة صفحة نبذة عن الموقع", color: "purple" },
          { label: "المسار 3: /products", role: "مطابقة كتالوج المنتجات", color: "emerald" },
          { label: "المسار الحارس: *", role: "التقاط أي رابط عشوائي آخر وعرض صفحة 404 الصديقة", color: "rose" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q11.1.1",
      question: "ما الفارق الجوهري بين التنقل عبر <Link to='/about'> وبين التنقل عبر <a href='/about'>؟",
      options: [
        "وسم Link يقوم بتغيير عنوان الرابط وتبديل المكون محلياً بـ 0 ثانية دون إعادة تحميل الصفحة، بينما <a> يطلب صفحة كاملة من الخادم ويعيد تحميل كل شيء.",
        "وسم Link يعمل فقط مع الصور بينما <a> يعمل مع النصوص.",
        "لا يوجد أي فرق بينهما وهما بديلان متطابقان تماماً.",
        "وسم Link يحذف ذاكرة التخزين المؤقتة للمتصفح تلقائياً."
      ],
      correctAnswer: 0,
      explanation: "وسم Link يعتمد على Client-Side Routing واعتراض حدث النقر وتحديث الـ URL محلياً عبر History API دون إعادة تحميل الصفحة (No Page Reload)."
    },
    {
      id: "q11.1.2",
      question: "لماذا يجب تغليف التطبيق بالكامل داخل مكون <BrowserRouter>؟",
      options: [
        "لأنه يوفر سياق التوجيه ومزامنة شريط عنوان المتصفح لجميع المكونات والخطافات الفرعية مثل Link و useNavigate.",
        "لأنه يقوم بتحسين ترتيب الموقع في محرك جوجل تلقائياً.",
        "لأنه يمنع المستخدمين من التقاط لقطات شاشة.",
        "لأنه يقوم بضغط صور الموقع بنسبة 50%."
      ],
      correctAnswer: 0,
      explanation: "كافة مكونات وخطافات React Router تعتمد على كائن السياق (Context) الذي يبثه BrowserRouter لتعمل بدون أخطاء."
    },
    {
      id: "q11.1.3",
      question: "كيف نلتقط كافة المسارات العشوائية غير المعرفة في التطبيق لعرض صفحة 404؟",
      options: [
        "باستخدام المسار ذي علامة النجمة: <Route path='*' element={<NotFound />} />.",
        "بكتابة كلمة 404 في خاصية path: <Route path='404' />.",
        "بإنشاء ملف باسم 404.html في مجلد src.",
        "المتصفح يقوم بفتح صفحة 404 تلقائياً بدون أي كود برمجي."
      ],
      correctAnswer: 0,
      explanation: "علامة النجمة (*) في مسار Route تمثل المحرف الشامل (Wildcard) الذي يطابق أي مسار لم يتطابق مع المسارات المحددة السابقة."
    }
  ],
  exercise: {
    id: "ex-11.1",
    title: "بناء هيكل توجيه لموقع تعليمي متعدد الصفحات مع صفحة 404 (Multi-Page Academy Router)",
    description: "قم بإنشاء تطبيق ملاحة متكامل يضم: شريط تنقل بروابط <Link>، وثلاث صفحات (الرئيسية، الدورات، اتصل بنا)، ومسار حارس لالتقاط الروابط الخاطئة وعرض صفحة 404 أنيقة مزودة بزر عودة للرئيسية.",
    starterCode: `import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// 1. عرف المكونات: Home, Courses, Contact, NotFound

export function AcademyApp() {
  return (
    <BrowserRouter>
      {/* 2. اكتب شريط التنقل هنا */}
      
      {/* 3. عرف شجرة المسارات مع صفحة 404 */}
    </BrowserRouter>
  );
}`,
    hints: [
      "استخدم وسم <nav> واجعل بداخله <Link to='/'> و <Link to='/courses'> و <Link to='/contact'>.",
      "ضع وسم <Route path='*' element={<NotFound />} /> في نهاية شجرة <Routes>.",
      "احرص على أن تكون خاصية element تأخذ JSX صالحاً مثل element={<Home />}."
    ],
    solution: `import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// تعريف الصفحات
function HomePage() {
  return (
    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">أكاديمية البرمجة الحديثة 🎓</h2>
      <p className="text-blue-700">مرحباً بك في أفضل بيئة لتعلم React واحتراف تطوير الواجهات الأمامية.</p>
    </div>
  );
}

function CoursesPage() {
  return (
    <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
      <h2 className="text-2xl font-bold text-emerald-900 mb-2">الدورات المتاحة 📚</h2>
      <ul className="list-disc list-inside text-emerald-700 space-y-1">
        <li>دورة React.js من الصفر إلى الاحتراف</li>
        <li>دورة هندسة الحالات المتقدمة وإدارة البيانات</li>
        <li>دورة Tailwind CSS والواجهات المتجاوبة</li>
      </ul>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="p-6 bg-purple-50 rounded-2xl border border-purple-200">
      <h2 className="text-2xl font-bold text-purple-900 mb-2">اتصل بنا 📬</h2>
      <p className="text-purple-700">فريق الدعم والمدربون جاهزون للإجابة عن كافة استفساراتك البرمجية.</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="p-8 text-center bg-rose-50 rounded-2xl border border-rose-200">
      <h1 className="text-5xl font-black text-rose-600 mb-2">404</h1>
      <h3 className="text-lg font-bold text-rose-900 mb-2">الصفحة المطلوبة غير موجودة!</h3>
      <p className="text-rose-700 text-sm mb-4">تأكد من صحة الرابط أو تفضل بالعودة للمسار الآمن.</p>
      <Link
        to="/"
        className="inline-block px-4 py-2 bg-rose-600 text-white font-bold rounded-xl text-xs hover:bg-rose-700 transition"
      >
        العودة للرئيسية 🏠
      </Link>
    </div>
  );
}

export function AcademyApp() {
  return (
    <BrowserRouter>
      <div className="max-w-xl mx-auto p-4 font-sans text-right">
        {/* شريط التنقل المشترك */}
        <nav className="flex justify-between items-center p-3 mb-6 bg-slate-900 text-white rounded-2xl shadow-lg">
          <div className="font-black text-blue-400">Academy Pro</div>
          <div className="flex gap-4 text-xs font-semibold">
            <Link to="/" className="hover:text-blue-300 transition">الرئيسية</Link>
            <Link to="/courses" className="hover:text-blue-300 transition">الدورات</Link>
            <Link to="/contact" className="hover:text-blue-300 transition">تواصل معنا</Link>
          </div>
        </nav>

        {/* شجرة المسارات */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* المسار الشامل لصفحة 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}`
  },
  infographic: {
    title: "خريطة طريق التوجيه الأولى في React Router",
    description: "الخطوات الأربع الأساسية لتأسيس ملاحة ناجحة وسلسة في تطبيقك",
    steps: [
      { step: "1", title: "تثبيت المكتبة", desc: "npm install react-router-dom لإدراج حزمة الملاحة الرسمية" },
      { step: "2", title: "تغليف التطبيق", desc: "وضع <BrowserRouter> في القمة لتوليد ومزامنة السياق العام" },
      { step: "3", title: "تعريف المسارات", desc: "إنشاء <Routes> وتحديد عناوين الـ path ومكونات element" },
      { step: "4", title: "حماية 404", desc: "إضافة مسار path='*' في النهاية لحماية الزوار من الروابط التائهة" }
    ]
  }
};
