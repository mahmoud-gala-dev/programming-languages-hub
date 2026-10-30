// src/data/sections/section11/topic2.js
// القسم 11: التوجيه والتنقل باستخدام React Router - الموضوع 2: التنقل بين الصفحات

export const topic2 = {
  id: "11.2",
  title: "التنقل بين الصفحات",
  description: "إتقان أدوات وخطافات التنقل في React Router: وسم Link للملاحة السريعة، وسم NavLink لإبراز الروابط النشطة، خطاف useNavigate للملاحة البرمجية، هندسة المسارات الديناميكية واستخراج المتغيرات بـ useParams، قراءة مسار المتصفح بـ useLocation، وإدارة معاملات الاستعلام بـ useSearchParams وتمرير حالات التنقل (Location State).",
  subtopics: [
    {
      id: "11.2.a",
      title: "استخدام Link",
      englishTerm: "Using Link Component (اِسْتِخْدَامُ مُكَوِّنِ الرَّابِط: الملاحة السلسة داخل التطبيق)",
      description: "المكون `<Link>` هو البديل القياسي لوسم الروابط التقليدي `<a href>` في تطبيقات React Router. يقوم برسم وسم `<a>` صالح في الـ DOM لدعم إمكانية الوصول ومحركات البحث (SEO)، ولكنه يعترض حدث النقر للمستخدم ويمنع المتصفح من إعادة تحميل الصفحة (Prevent Default)، ويستخدم HTML5 History API لنقل المستخدم إلى المسار الهدف فوراً في الصفر ثانية مع الحفاظ على كافة الـ State في الذاكرة.",
      analogy: "مثل الباب المسحور في أفلام الخيال: بدلاً من الخروج إلى الشارع وركوب سيارة أجرة للوصول للغرفة المجاورة، تفتح الباب فتجد نفسك فوراً داخل الغرفة في طرفة عين.",
      whyItMatters: "يحول كل نقرة لرابط في موقعك إلى تجربة سريعة وفورية تماثل تطبيقات الهاتف، ويوفر استهلاك موارد الشبكة بنسبة 100% مقارنة بإعادة تحميل الصفحات.",
      syntax: "<Link to='/target-path' replace={false}>اسم الرابط</Link>",
      simpleExample: `import React from 'react';
// استيراد المكون من مكتبة التوجيه
import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <nav style={{ display: 'flex', gap: '15px' }}>
      {/* رابط الصفحة الرئيسية */}
      <Link to="/">الرئيسية</Link>

      {/* رابط صفحة المنتجات */}
      <Link to="/products">كتالوج المنتجات</Link>

      {/* رابط صفحة التواصل */}
      <Link to="/contact">اتصل بنا</Link>
    </nav>
  );
}`,
      advancedExample: `import React from 'react';
import { Link } from 'react-router-dom';

// استخدام خصائص Link المتقدمة: المسارات النسبية، استبدال التاريخ (replace)، والحالة (state)
function AdvancedLinkShowcase({ productId, productName }) {
  return (
    <div className="p-4 bg-slate-800 text-white rounded-xl space-y-3">
      <h4 className="font-bold text-sm text-blue-400">خيارات الملاحة المتقدمة بـ Link:</h4>

      {/* 1. تمرير حالة غير مرئية في الرابط (Hidden Location State) */}
      <div>
        <Link
          to={'/products/' + productId}
          state={{ fromCatalog: true, timestamp: Date.now() }}
          className="text-emerald-400 hover:underline text-xs block"
        >
          عرض تفاصيل: {productName} (مع تمرير State سريعة) ➔
        </Link>
      </div>

      {/* 2. استبدال المسار الحالي في سجل التاريخ بدلاً من إضافة صفحة جديدة (replace) */}
      <div>
        <Link
          to="/login"
          replace={true}
          className="text-amber-400 hover:underline text-xs block"
        >
          تسجيل الدخول (مع استبدال مسار التاريخ replace لمنع الرجوع العرضي) ➔
        </Link>
      </div>
    </div>
  );
}`,
      output: "نقر الروابط يغير عنوان المتصفح فورا ويعرض المكون الجديد دون وميض أو إعادة تحميل.",
      commonMistakes: [
        {
          mistake: "استخدام خاصية href بدلاً من خاصية to في وسم <Link>.",
          fix: "استخدم دائماً خاصية to='/path'؛ فالمكون <Link> لا يقبل href.",
          explanation: "خاصية href خاصة بـ <a> العادي؛ Link صُمم ليتعرف على خاصية to فقط."
        }
      ],
      bestPractices: [
        "استخدم المسارات المطلقة التي تبدأ بشرطة / (مثل /users) إلا إذا كنت متعمداً استخدام المسارات النسبية داخل Nested Routes.",
        "استخدم خاصية replace={true} عند توجيه المستخدم بعد تسجيل الخروج لمنعه من الرجوع للصفحة المحمية بزر Back."
      ],
      infographic: {
        title: "خصائص ومزايا مكون <Link>",
        elements: [
          { label: "خاصية to", role: "المسار الهدف (نص أو كائن يحمل pathname و search)", color: "blue" },
          { label: "خاصية replace", role: "استبدال السجل الحالي في تاريخ المتصفح بدلاً من دفعه", color: "amber" },
          { label: "خاصية state", role: "تمرير بيانات وكائنات غير ظاهرة في شريط الـ URL", color: "purple" },
          { label: "SEO & a11y", role: "يرسم وسم <a> حقيقي في DOM ليفهمه قارئ الشاشة ومحركات البحث", color: "emerald" }
        ]
      }
    },
    {
      id: "11.2.b",
      title: "استخدام NavLink",
      englishTerm: "Using NavLink for Active State (مُكَوِّنُ نَافْ لِينْك: تمييز الرابط النشط تلقائياً)",
      description: "المكون `<NavLink>` هو إصدار خاص وذكي من `<Link>` صُمم خصيصاً لأشرطة التنقل وقوائم الملاحة. يتميز بقدرته الفطرية على معرفة ما إذا كان مساره يطابق عنوان الـ URL الحالي في المتصفح؛ وعند حدوث التطابق، يزود المكون تلقائياً بمتغير `{ isActive }` و `{ isPending }` داخل دالة `className` أو `style`، مما يتيح تلوين وإبراز التبويب أو الصفحة التي يقف عليها المستخدم حالياً دون الحاجة لكتابة شروط يدوية.",
      analogy: "مثل لوحة إعلانات المحطات في مترو الأنفاق: تضيء المحطة الحالية بلون أخضر أو أحمر ساطع لتعلم فوراً أين أنت الآن، بينما تظل باقي المحطات بلونها الرمادي العادي.",
      whyItMatters: "يوفر تجربة ملاحة ممتازة عبر إعلام المستخدم بمكانه الحالي في شجرة الموقع، ويلغي الحاجة لحفظ وتتبع مسار الصفحة الحالية يدوياً في كل شريط تنقل.",
      syntax: "<NavLink to='/path' className={({ isActive }) => isActive ? 'active-class' : 'normal-class'}>",
      simpleExample: `import React from 'react';
// استيراد NavLink
import { NavLink } from 'react-router-dom';

function SimpleNavbar() {
  return (
    <nav style={{ display: 'flex', gap: '12px' }}>
      {/* تطبيق التمييز التلقائي باستخدام دالة ترجع نمط CSS */}
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? '#2563eb' : '#4b5563',
          fontWeight: isActive ? 'bold' : 'normal',
          borderBottom: isActive ? '2px solid #2563eb' : 'none',
        })}
      >
        الرئيسية
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? '#2563eb' : '#4b5563',
          fontWeight: isActive ? 'bold' : 'normal',
          borderBottom: isActive ? '2px solid #2563eb' : 'none',
        })}
      >
        من نحن
      </NavLink>
    </nav>
  );
}`,
      advancedExample: `import React from 'react';
import { NavLink } from 'react-router-dom';

// شريط تنقل احترافي مع Tailwind CSS وميزة end للمسار الجذري
function ModernNavTabs() {
  const getNavClass = ({ isActive }) =>
    "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 " +
    (isActive
      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
      : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700");

  return (
    <header className="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between">
      <div className="text-white font-black text-sm">متجر الأجهزة 💻</div>
      <nav className="flex gap-2">
        {/* خاصية end تضمن عدم اعتبار الصفحة الرئيسية نشطة عندما نكون في /products */}
        <NavLink to="/" end className={getNavClass}>
          <span>🏠</span>
          <span>الرئيسية</span>
        </NavLink>

        <NavLink to="/products" className={getNavClass}>
          <span>🛍️</span>
          <span>المنتجات</span>
        </NavLink>

        <NavLink to="/orders" className={getNavClass}>
          <span>📦</span>
          <span>طلباتي</span>
        </NavLink>
      </nav>
    </header>
  );
}`,
      output: "إضاءة وتكبير التبويب الذي يقف عليه المستخدم حالياً باللون الأزرق المشرق وظل متوهج، بينما تبقى باقي الأزرار رمادية هادئة.",
      commonMistakes: [
        {
          mistake: "نسيان خاصية end على رابط الصفحة الرئيسية to='/'.",
          fix: "أضف خاصية end: <NavLink to='/' end> لمنع بقاء الرابط نشطاً طوال الوقت.",
          explanation: "المسار / هو بادئة لكل مسارات الموقع؛ بدون end سيعتبر NavLink أن / نشط دائماً حتى عند زيارة /products أو /about."
        }
      ],
      bestPractices: [
        "استخدم NavLink في أشرطة التنقل العلوية والقوائم الجانبية، واستخدم Link للروابط العادية داخل نصوص الفقرات والجداول.",
        "استغل دالة className={({ isActive }) => ...} لتطبيق تنسيقات متباينة بدلاً من التنسيقات المضمنة المباشرة."
      ],
      infographic: {
        title: "آلية عمل وسم <NavLink>",
        elements: [
          { label: "فحص المسار التلقائي", role: "المقارنة اللحظية بين خاصية to ورابط المتصفح الحالي", color: "blue" },
          { label: "معامل isActive", role: "قيمة منطقية تمنحك الحرية لتطبيق أي كلاس أو لون عند التطابق", color: "emerald" },
          { label: "خاصية end", role: "مطابقة تامة للمسار لمنع تفعيل الرابط الأب عند زيارة مسارات فرعية", color: "amber" },
          { label: "معامل isPending", role: "مؤشر انتقال رائع يوضح أن الصفحة قيد التحميل في وضع Data Router", color: "purple" }
        ]
      }
    },
    {
      id: "11.2.c",
      title: "التنقل البرمجي باستخدام useNavigate",
      englishTerm: "Programmatic Navigation with useNavigate (التَّنَقُّلُ البَرْمَجِيُّ: توجيه المستخدم عبر الأكواد)",
      description: "خطاف `useNavigate()` هو الأداة المخصصة لتنفيذ الملاحة برمجياً من داخل دوال جافاسكريبت، بدلاً من انتظار نقر المستخدم المباشر على رابط. يُستخدم هذا النمط بشكل واسع بعد إتمام أحداث معينة، مثل: توجيه المستخدم لصفحة لوحة التحكم بعد نجاح تسجيل الدخول، أو نقله لصفحة 'تم الدفع' بعد تأكيد المعاملة المالية، أو العودة للصفحة السابقة عبر `navigate(-1)`.",
      analogy: "مثل السائق الخاص أو المترجم: لا تحتاج لفتح الباب والمشي بنفسك (Link)، بل تعطي أمراً شفهياً للسائق: 'خذني إلى فندق كذا فوراً' (navigate('/hotel')) فيقود بك السيارة مباشرة إلى وجهتك.",
      whyItMatters: "ضروري للغاية لإدارة دورات حياة العمليات (Workflows)؛ فالمستخدم لا ينقر على رابط ليذهب لصفحة الشكر بعد الدفع، بل يتم توجيهه تلقائياً فور تأكيد البنك للعملية.",
      syntax: "const navigate = useNavigate();\nnavigate('/dashboard');\n// أو العودة خطوة للخلف:\nnavigate(-1);",
      simpleExample: `import React from 'react';
// استيراد خطاف التنقل البرمجي
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // محاكاة نجاح تسجيل الدخول
    alert('تم تسجيل الدخول بنجاح!');
    // توجيه المستخدم برمجياً إلى لوحة التحكم
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="البريد الإلكتروني" required />
      <button type="submit">دخول</button>
    </form>
  );
}`,
      advancedExample: `import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// استخدام useNavigate مع استبدال التاريخ وتمرير State ومؤقت زمني
function CheckoutSimulator() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const processOrder = async () => {
    setIsProcessing(true);

    // محاكاة معالجة مصرفية لمدة ثانيتين
    setTimeout(() => {
      const orderId = 'ORD-' + Math.floor(Math.random() * 100000);

      // توجيه المستخدم لصفحة الإيصال مع استبدال التاريخ لمنع الرجوع للدفع مرة أخرى
      navigate('/order-success/' + orderId, {
        replace: true, // يمنع زر Back من إعادة المستخدم لشاشة الدفع وتكرار الخصم
        state: {
          paidAmount: 249.99,
          paymentMethod: 'Apple Pay',
          timestamp: new Date().toLocaleTimeString('ar-SA'),
        },
      });
    }, 2000);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm text-right text-white">
      <h3 className="font-bold mb-2">تأكيد عملية الدفع</h3>
      <p className="text-xs text-slate-400 mb-4">المبلغ المستحق: 249.99 $</p>

      <div className="flex gap-2">
        {/* العودة خطوة واحدة للخلف في تاريخ المتصفح */}
        <button
          onClick={() => navigate(-1)}
          disabled={isProcessing}
          className="flex-1 py-2 bg-slate-800 text-slate-300 rounded-xl text-xs font-bold hover:bg-slate-700"
        >
          ⬅️ إلغاء وتراجع
        </button>

        <button
          onClick={processOrder}
          disabled={isProcessing}
          className="flex-1 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 disabled:opacity-50"
        >
          {isProcessing ? 'جاري السحب...' : '💳 تأكيد ودفع'}
        </button>
      </div>
    </div>
  );
}`,
      output: "توجيه آلي فوري للمستخدم بعد اكتمال المعالجة مع تمرير بيانات الفاتورة واستبدال مسار التاريخ بأمان.",
      commonMistakes: [
        {
          mistake: "استدعاء navigate() أثناء مرحلة الرندر المباشرة للمكون مثل if (!user) navigate('/login').",
          fix: "ضع استدعاء navigate() دائماً داخل معالج أحداث (Event Handler) أو داخل خطاف useEffect.",
          explanation: "محاولة تغيير المسار أثناء تصيير المكون تخرق قواعد React وتسبب أخطاء تصيير متتالية (Cannot update during render)."
        }
      ],
      bestPractices: [
        "استخدم navigate(-1) لتنفيذ أزرار 'الرجوع للخلف' الذكية التي تعيد المستخدم للنقطة التي أتى منها بدقة.",
        "استخدم خاصية { replace: true } في شاشات تسجيل الدخول والمدفوعات لتأمين سجل التصفح."
      ],
      infographic: {
        title: "أنماط استخدام دالة navigate()",
        elements: [
          { label: "المسار المباشر", role: "navigate('/home') للانتقال لصفحة محددة", color: "blue" },
          { label: "الرجوع النسبي", role: "navigate(-1) للرجوع خطوة للخلف، أو navigate(-2) لخطوتين", color: "amber" },
          { label: "خيارات replace", role: "navigate('/path', { replace: true }) لمنع العودة للمسار الحالي", color: "rose" },
          { label: "خيارات state", role: "navigate('/path', { state: { data } }) لنقل بيانات خاصة بالرحلة", color: "emerald" }
        ]
      }
    },
    {
      id: "11.2.d",
      title: "المسارات الديناميكية",
      englishTerm: "Dynamic Routes (المَسَارَاتُ الدِّينَامِيكِيَّة: قوالب العناوين بالمتغيرات)",
      description: "المسارات الديناميكية (Dynamic Routes) هي مسارات تحتوي على أجزاء متغيرة (Segments) يُشار إليها بوضع نقطتين رأسيتين `:` متبوعة باسم المعامل (مثل `:userId` أو `:slug` أو `:invoiceId`). بدلاً من تعريف آلاف المسارات لكل منتج أو مستخدم على حدة، يُعرف مسار نمطي واحد مثل `/products/:id` يقوم بمطابقة أي رابط مثل `/products/42` أو `/products/999`، وتمرير هذا المعرف للمكون البرمجي لقراءة بياناته وعرضها.",
      analogy: "مثل استمارة طلب التوظيف التي تحتوي على خانة: 'الاسم: [...........]'؛ القالب والاستمارة واحدة، ولكن كل متقدم يكتب اسمه الخاص في الخانة وتتم معالجته وفق نفس الإجراءات.",
      whyItMatters: "حجر الزاوية للمواقع التجارية والمنصات التفاعلية؛ فمن المستحيل برمجة صفحة ثابتة لكل منتج من بين نصف مليون منتج في متجر أمازون.",
      syntax: "<Route path='/users/:id' element={<UserProfile />} />\n<Route path='/posts/:category/:slug' element={<Article />} />",
      simpleExample: `import React from 'react';
import { Routes, Route } from 'react-router-dom';

// مكون يعرض معرف المنتج الملتقط
function ProductDetails() {
  return <h2>صفحة تفاصيل المنتج الديناميكية</h2>;
}

function ProductCatalogRouter() {
  return (
    <Routes>
      {/* مسار ثابت يعرض كافة المنتجات */}
      <Route path="/products" element={<h3>كافة المنتجات</h3>} />
      
      {/* مسار ديناميكي يطابق أي معرف مثل /products/101 أو /products/apple-watch */}
      <Route path="/products/:productId" element={<ProductDetails />} />
    </Routes>
  );
}`,
      advancedExample: `import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// تعريف مسارات ديناميكية متعددة المقاطع (Multi-Segment Dynamic Routes)
function ArticleReader() {
  return <div className="p-4 bg-slate-800 text-white rounded">محتوى المقال التخصصي</div>;
}

function DynamicRoutesDemo() {
  // قائمة مقالات تجريبية بروابط ديناميكية
  const articles = [
    { cat: 'react', slug: 'hooks-mastery', title: 'أسرار React Hooks' },
    { cat: 'css', slug: 'tailwind-v4-guide', title: 'دليل Tailwind الجديد' },
  ];

  return (
    <div className="p-4">
      <h4 className="font-bold mb-3">اختر مقالاً لتجربة الرابط الديناميكي:</h4>
      <div className="space-y-2 mb-6">
        {articles.map((art) => (
          <Link
            key={art.slug}
            to={'/blog/' + art.cat + '/' + art.slug}
            className="block p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 font-medium hover:bg-blue-100"
          >
            {art.title} (الرابط: /blog/{art.cat}/{art.slug})
          </Link>
        ))}
      </div>

      <Routes>
        {/* مسار ديناميكي يحتوي على متغيرين: :category و :slug */}
        <Route path="/blog/:category/:slug" element={<ArticleReader />} />
      </Routes>
    </div>
  );
}`,
      output: "مطابقة المسارات متعددة المتغيرات بدقة فائقة وعرض المكون المناسب لأي رابط يطابق الهيكل.",
      commonMistakes: [
        {
          mistake: "نسيان النقطتين الرأسيتين قبل اسم المعامل، مثل كتابة path='/users/id' بدلاً من path='/users/:id'.",
          fix: "تأكد دائماً من إضافة النقطتين :id للإشارة إلى أنه جزء ديناميكي متغير.",
          explanation: "بدون النقطتين سيبحث React Router عن كلمة id حرفياً في الرابط ولن يطابق الأرقام أو الأسماء."
        }
      ],
      bestPractices: [
        "اختر أسماء ذات دلالة لمعاملات المسار (مثل :productId و :orderId) بدلاً من مجرد :id لتجنب اللبس في المسارات المتداخلة.",
        "رتّب المسارات الثابتة مثل /users/new قبل المسارات الديناميكية /users/:id للوضوح البرمجي."
      ],
      infographic: {
        title: "تشريح المسار الديناميكي في React Router",
        elements: [
          { label: "المسار الثابت", role: "/products/ (جزء نصي ثابت يحدد نوع الكيان)", color: "blue" },
          { label: "النقطتان :", role: "العلامة البرمجية التي تحول الجزء إلى متغير ديناميكي", color: "rose" },
          { label: "اسم المعامل", role: "productId (المفتاح الذي سنستخرجه عبر الخطاف)", color: "emerald" },
          { label: "الرابط الفعلي", role: "/products/99 -> يتم استخراج productId = '99'", color: "purple" }
        ]
      }
    },
    {
      id: "11.2.e",
      title: "استخدام useParams",
      englishTerm: "Extracting Params with useParams (اِسْتِخْرَاجُ مُعَامِلَاتِ المَسَارِ عَبْرَ يُوزْ بَارَامْز)",
      description: "خطاف `useParams()` هو الوسيلة الأساسية لقراءة واستخراج قيم المتغيرات الديناميكية من عنوان الـ URL الحالي. يُرجع الخطاف كائناً يحتوي على أزواج المفاتيح والقيم (Key-Value Pairs) لجميع معاملات المسار المعرفة في وسم الـ Route (مثل `{ productId: '42' }`). تكون القيم المستخرجة سلاسل نصية (Strings) دائماً، وتستخدم لجلب البيانات الخاصة بهذا العنصر من الـ API.",
      analogy: "مثل استلام طرد بريدي مكتوب عليه رقم الشقة: يفتح خطاف useParams صندوق الطرد ويقرأ لك الرقم المكتوب على الغلاف: 'رقم الشقة هو 5B'، فتذهب مباشرة لتسليم الطرد لصاحب الشقة 5B.",
      whyItMatters: "يمكن المكون من معرفة أي عنصر طلب المستخدم استعراضه، وبدء جلب وتفصيل بياناته بدقة بالاعتماد على معرّفه الرقمي.",
      syntax: "const { id } = useParams();\n// القيمة المسترجعة دائماً نصية string: id === '42'",
      simpleExample: `import React from 'react';
// استيراد خطاف قراءة المعاملات
import { useParams } from 'react-router-dom';

function UserProfilePage() {
  // استخراج المعامل :userId المحدد في المسار /users/:userId
  const { userId } = useParams();

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>الملف الشخصي للمستخدم</h3>
      <p>المعرف الرقمي المطلوب حالياً: <strong>{userId}</strong></p>
    </div>
  );
}`,
      advancedExample: `import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// مكون متكامل يستخرج المعرف من الرابط ويجلب بياناته من API خارجي
function ProductDetailsView() {
  // استخراج المعرف :productId
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // استدعاء الـ API بالاعتماد على المعامل المستخرج
    fetch('https://dummyjson.com/products/' + productId)
      .then((res) => {
        if (!res.ok) throw new Error('المنتج غير موجود');
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [productId]); // يعاد الجلب تلقائياً إذا انتقل المستخدم لمنتج آخر

  if (loading) return <div className="p-6 text-center text-blue-500">جاري تحميل المنتج #{productId}...</div>;
  if (error) return <div className="p-6 text-center text-red-500 font-bold">خطأ: {error}</div>;

  return (
    <div className="p-6 max-w-md mx-auto bg-slate-900 text-white rounded-2xl border border-slate-800">
      <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
        معرف المنتج: #{productId}
      </span>
      <h3 className="text-xl font-bold mt-2">{product?.title}</h3>
      <p className="text-slate-400 text-xs mt-1 leading-relaxed">{product?.description}</p>
      <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
        <span className="text-emerald-400 font-black text-lg">{product?.price} $</span>
        <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">{product?.category}</span>
      </div>
    </div>
  );
}`,
      output: "قراءة معرف المنتج من شريط العنوان وجلب بياناته فوراً من الـ API ورسمها على الشاشة.",
      commonMistakes: [
        {
          mistake: "نسيان أن القيم المستخرجة من useParams تكون دائماً سلاسل نصية وليست أرقاماً.",
          fix: "استخدم Number(id) أو parseInt(id, 10) إذا كنت تجري مقارنة صارمة (===) مع معرفات رقمية.",
          explanation: "المقارنة '42' === 42 تعطي false وتسبب عدم تطابق العناصر."
        }
      ],
      bestPractices: [
        "ضع قيمة المعامل المستخرج (مثل productId) داخل مصفوفة اعتماديات useEffect لضمان تحديث الصفحة عند تغير الرابط.",
        "استخدم تفكيك الخصائص Destructuring لاستخراج المعاملات مباشرة: const { id } = useParams()."
      ],
      infographic: {
        title: "مسار استخراج واستخدام useParams",
        elements: [
          { label: "1. تعريف المسار", role: "<Route path='/items/:itemId' element={<Details />} />", color: "blue" },
          { label: "2. عنوان الرابط", role: "المستخدم يفتح: /items/849", color: "purple" },
          { label: "3. استدعاء الخطاف", role: "const { itemId } = useParams() -> itemId = '849'", color: "emerald" },
          { label: "4. جلب البيانات", role: "fetch('/api/items/' + itemId) وعرض التفاصيل", color: "amber" }
        ]
      }
    },
    {
      id: "11.2.f",
      title: "استخدام useLocation",
      englishTerm: "Inspecting Route State with useLocation (فَحْصُ مَعْلُومَاتِ المَسَارِ عَبْرَ يُوزْ لُوكَيْشَن)",
      description: "خطاف `useLocation()` يعيد كائناً يمثل عنوان الـ URL الحالي بتفاصيله الكاملة، وهو الموازي لكائن `window.location` في المتصفح ولكنه متوافق مع دورة حياة React. يحتوي كائن `location` على خصائص أساسية: `pathname` (المسار الحالي)، `search` (سلسلة الاستعلام التي تبدأ بـ ?)، `hash` (علامة التجزئة التي تبدأ بـ #)، و `state` (البيانات المخفية الممررة أثناء التنقل عبر Link أو navigate).",
      analogy: "مثل جهاز الـ GPS أو لوحة عدادات السيارة: يخبرك في أي شارع تسير الآن (pathname)، وما هي الإحداثيات الفرعية (search)، وما هي الحمولة المنقولة في صندوق السيارة (state).",
      whyItMatters: "ضروري لتتبع نشاط الزوار (Analytics)، وتشغيل تأثيرات التمرير لأعلى الصفحة عند كل انتقال، وقراءة البيانات المنقولة سراً بين الصفحات دون إظهارها في الرابط.",
      syntax: "const location = useLocation();\nconsole.log(location.pathname, location.search, location.state);",
      simpleExample: `import React from 'react';
// استيراد خطاف فحص المسار
import { useLocation } from 'react-router-dom';

function CurrentPathBadge() {
  const location = useLocation();

  return (
    <div style={{ padding: '8px', background: '#f3f4f6', borderRadius: '8px' }}>
      <p style={{ margin: 0, fontSize: '13px' }}>
        أنت تتصفح حالياً المسار: <code>{location.pathname}</code>
      </p>
    </div>
  );
}`,
      advancedExample: `import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// مكون عالمي يعيد تمرير الصفحة لأعلى (Scroll to Top) ويرسل تحليلات التصفح
function ScrollToTopAndTrackAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // 1. إعادة شريط التمرير إلى أعلى الصفحة بسلاسة عند كل تغيير في المسار
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // 2. محاكاة إرسال حدث زيارة لمنصة التحليلات (Google Analytics / Mixpanel)
    console.log('تم تسجيل زيارة صفحة جديدة:', {
      path: location.pathname,
      queryParams: location.search,
      hashTag: location.hash,
      customState: location.state,
    });
  }, [location.pathname]); // يشتغل التأثير كلما تغير المسار

  return null; // مكون خدمات لا يرسم واجهة
}`,
      output: "إعادة تلقائية لشريط التمرير لأعلى الصفحة عند كل انتقال مع طباعة سجلات التتبع الدقيقة.",
      commonMistakes: [
        {
          mistake: "محاولة تعديل خصائص location.pathname يدوياً.",
          fix: "كائن location للقراءة فقط (Read-only)؛ استخدم navigate() لتغيير المسار.",
          explanation: "تعديل خصائص location مباشرة لا يؤثر على التوجيه ويخرق قواعد بيانات React."
        }
      ],
      bestPractices: [
        "استخدم useLocation داخل مكون ScrollToTop يوضع في قمة التطبيق لضمان بدء كل صفحة من الأعلى.",
        "استفد من location.state لنقل إشعارات سريعة بين الصفحات (Flash Messages)."
      ],
      infographic: {
        title: "تشريح كائن useLocation()",
        elements: [
          { label: "pathname", role: "المسار النصي مثل /dashboard/reports", color: "blue" },
          { label: "search", role: "سلسلة الاستعلام مثل ?sort=asc&page=2", color: "amber" },
          { label: "hash", role: "معرف الركيزة بالصفحة مثل #section-features", color: "purple" },
          { label: "state", role: "كائن بيانات خاص تم تمريره برمجياً عبر Link أو navigate", color: "emerald" }
        ]
      }
    },
    {
      id: "11.2.g",
      title: "استخدام useSearchParams",
      englishTerm: "Managing Query Strings with useSearchParams (إِدَارَةُ اِسْتِعْلَامَاتِ الـ URL عَبْرَ يُوزْ سِيرْتْش بَارَامْز)",
      description: "خطاف `useSearchParams()` هو الأداة الرسمية في React Router لقراءة وتعديل معاملات الاستعلام (Query Parameters بعد علامة الاستفهام `?sort=asc&page=2`). يعمل بطريقة مطابقة تماماً لخطاف `useState`: يعيد مصفوفة من عنصرين `[searchParams, setSearchParams]`؛ حيث يتيح الأول قراءة القيم عبر دوال مثل `searchParams.get('q')`، ويتيح الثاني تعديل الرابط وتحديث معاملات البحث برمجياً مع دعم كامل لتاريخ المتصفح.",
      analogy: "مثل راديو السيارة الذي يحتوي على مؤشر رقمي دقيق لتردد المحطة: يمكنك قراءة التردد الحالي المضبوط في الشاشة، ويمكنك إدارة القرص لاختيار تردد جديد فيتغير الصوت وموقع المؤشر في نفس اللحظة.",
      whyItMatters: "هو الحل الأمثل لجعل الفلاتر وصفحات الترقيم وكلمات البحث قابلة للمشاركة والحفظ في المفضلة واستعادتها بعد تحديث الصفحة (F5).",
      syntax: "const [searchParams, setSearchParams] = useSearchParams();\n// قراءة: searchParams.get('key');\n// كتابة: setSearchParams({ key: 'val' });",
      simpleExample: `import React from 'react';
// استيراد خطاف معلمات الاستعلام
import { useSearchParams } from 'react-router-dom';

function FilterByColor() {
  const [searchParams, setSearchParams] = useSearchParams();

  // قراءة اللون الحالي من الرابط (أو افتراض 'all')
  const currentColor = searchParams.get('color') || 'all';

  return (
    <div>
      <h4>اللون المختار حالياً: {currentColor}</h4>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setSearchParams({ color: 'red' })}>أحمر</button>
        <button onClick={() => setSearchParams({ color: 'blue' })}>أزرق</button>
        <button onClick={() => setSearchParams({})}>مسح الفلتر</button>
      </div>
    </div>
  );
}`,
      advancedExample: `import React from 'react';
import { useSearchParams } from 'react-router-dom';

// إدارة فلاتر متعددة متزامنة مع شريط العنوان بأمان
function MultiFilterDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();

  // قراءة كافة المعاملات
  const query = searchParams.get('q') || '';
  const category = searchParams.get('cat') || 'all';
  const page = Number(searchParams.get('page')) || 1;

  // دالة مساعدة لتحديث معامل واحد مع الحفاظ على باقي المعاملات
  const updateQueryParam = (key, value) => {
    // إنشاء نسخة قابلة للتعديل من المعاملات الحالية
    const nextParams = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }
    // تصفير الصفحة عند تغيير الفلاتر
    if (key !== 'page') {
      nextParams.delete('page');
    }
    setSearchParams(nextParams);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl max-w-md text-white text-right space-y-3">
      <h4 className="font-bold text-sm text-blue-400">فلاتر متزامنة مع شريط الـ URL:</h4>

      <div>
        <label className="block text-xs text-slate-400 mb-1">بحث بالاسم:</label>
        <input
          type="text"
          value={query}
          onChange={(e) => updateQueryParam('q', e.target.value)}
          placeholder="ابحث..."
          className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
        />
      </div>

      <div>
        <label className="block text-xs text-slate-400 mb-1">القسم:</label>
        <select
          value={category}
          onChange={(e) => updateQueryParam('cat', e.target.value)}
          className="w-full p-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-slate-200 outline-none"
        >
          <option value="all">كافة الأقسام</option>
          <option value="tech">تقنية</option>
          <option value="health">صحة</option>
        </select>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-xs">
        <button
          onClick={() => updateQueryParam('page', Math.max(page - 1, 1).toString())}
          disabled={page <= 1}
          className="px-3 py-1 bg-slate-800 rounded disabled:opacity-30"
        >
          السابق
        </button>
        <span className="text-blue-400 font-bold">الصفحة {page}</span>
        <button
          onClick={() => updateQueryParam('page', (page + 1).toString())}
          className="px-3 py-1 bg-slate-800 rounded"
        >
          التالي
        </button>
      </div>
    </div>
  );
}`,
      output: "تحديث معاملات شريط الـ URL فوراً مع إمكانية مشاركة الرابط واستعادة حالة الصفحة بدقة.",
      commonMistakes: [
        {
          mistake: "استدعاء setSearchParams({ newKey: 'val' }) مما يؤدي لمحو كافة المعاملات الأخرى السابقة.",
          fix: "انسخ المعاملات الحالية أولاً عبر new URLSearchParams(searchParams) ثم عدل عليها واحفظها.",
          explanation: "تمرير كائن جديد يستبدل كافة معلمات الاستعلام ما لم تقم بدمج القديم مع الجديد."
        }
      ],
      bestPractices: [
        "احذف المعامل من الرابط إذا كانت قيمته فارغة عبر nextParams.delete('key') للحفاظ على رابط نظيف.",
        "أعد ضبط الصفحة إلى 1 (page = 1) كلما غير المستخدم معايير البحث أو القسم."
      ],
      infographic: {
        title: "هندسة خطاف useSearchParams()",
        elements: [
          { label: "searchParams.get(key)", role: "قراءة قيمة المعامل من الرابط الحالي", color: "blue" },
          { label: "setSearchParams(obj)", role: "كتابة معاملات جديدة وتحديث الرابط برمجياً", color: "emerald" },
          { label: "new URLSearchParams()", role: "أداة التعديل الآمن للحفاظ على باقي المعاملات", color: "amber" },
          { label: "Shareable State", role: "تحويل حالة الواجهة لروابط قابلة للنسخ والإرسال", color: "purple" }
        ]
      }
    },
    {
      id: "11.2.h",
      title: "التعامل مع حالة التنقل",
      englishTerm: "Handling Navigation State (إِدَارَةُ حَالَةِ التَّنَقُّلِ: نقل البيانات الخفية بين الصفحات)",
      description: "حالة التنقل (Location State) هي ميزة فائقة القوة تتيح تمرير كائنات وبيانات جافاسكريبت كاملة بين صفحة وأخرى أثناء التنقل (عبر خاصية `state` في `<Link to='...' state={{ ... }}>` أو خيارات `navigate('/path', { state: { ... } })`) دون كتابتها في شريط عنوان المتصفح. تقرأ الصفحة الهدف هذه البيانات عبر `location.state`؛ وتبقى هذه البيانات محفوظة في ذاكرة الجلسة حتى لو قام المستخدم بتحديث الصفحة (F5).",
      analogy: "مثل إرسال خطاب داخل مظروف مغلق ومختوم بالشمع: المسار في شريط الـ URL هو العنوان المكتوب على ظهر المظروف ليراه الجميع، بينما الـ state هو الرسالة السرية الموضوعة بالداخل التي لا يقرؤها إلا الشخص الذي يفتح المظروف.",
      whyItMatters: "مثالية لتمرير رسائل النجاح المؤقتة (Flash Messages)، أو نقل كائن المنتج بالكامل لتسريع عرضه بدلاً من إعادة طلبه من الشبكة من الصفر.",
      syntax: "// إرسال:\n<Link to='/success' state={{ orderNumber: 123 }}>...\n// استلام:\nconst { state } = useLocation();",
      simpleExample: `import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// 1. الصفحة المرسلة: تمرر كائن في خاصية state
function ProductCard({ item }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px' }}>
      <h4>{item.name}</h4>
      <Link to="/checkout" state={{ selectedItem: item }}>
        شراء الآن 💳
      </Link>
    </div>
  );
}

// 2. الصفحة المستقبلة: تقرأ الكائن من useLocation
function CheckoutPage() {
  const location = useLocation();
  // قراءة الكائن المنقول في state
  const item = location.state?.selectedItem;

  if (!item) {
    return <p>لم يتم اختيار أي منتج للشراء!</p>;
  }

  return (
    <div>
      <h3>إتمام شراء: {item.name}</h3>
      <p>السعر المطلوب: {item.price} $</p>
    </div>
  );
}`,
      advancedExample: `import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// نمط إشعار النجاح المنقول عبر state بعد إنشاء مقال
function CreateArticleForm() {
  const navigate = useNavigate();

  const handlePublish = (e) => {
    e.preventDefault();
    // تنفيذ النشر...
    // التوجيه لصفحة المقالات مع إرفاق رسالة تأكيد خفية
    navigate('/articles', {
      state: {
        flashMessage: 'تم نشر مقالك بنجاح وهو متاح للجميع الآن! 🎉',
        articleId: 884,
      },
    });
  };

  return (
    <button onClick={handlePublish} className="px-4 py-2 bg-blue-600 text-white rounded">
      نشر المقال
    </button>
  );
}

function ArticlesListPage() {
  const location = useLocation();
  // قراءة رسالة التأكيد إن وجدت
  const flash = location.state?.flashMessage;

  return (
    <div className="p-4">
      {/* عرض شريط التنبيه إذا كان قادماً من عملية نشر سابقة */}
      {flash && (
        <div className="p-3 mb-4 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-xl text-xs font-bold animate-fadeIn">
          {flash}
        </div>
      )}
      <h3 className="font-bold">قائمة المقالات المنشورة</h3>
    </div>
  );
}`,
      output: "ظهور شريط التهنئة الأخضر فقط عند القدوم من صفحة النشر واختفاؤه في الزيارات العادية.",
      commonMistakes: [
        {
          mistake: "الاعتماد على location.state دون استخدام Optional Chaining (?.) مما يسبب انهيار الصفحة عند الدخول المباشر.",
          fix: "استخدم دائماً location.state?.myProperty أو وفر قيمة احتياطية.",
          explanation: "إذا قام زائر بفتح الرابط مباشرة من المفضلة، سيكون location.state مساوياً لـ null."
        }
      ],
      bestPractices: [
        "لا تستخدم location.state للبيانات الضرورية للغاية التي يحتاجها المستخدم إذا شارك الرابط مع غيره؛ بل ضع المعرفات الضرورية في مسار الـ URL.",
        "استخدم location.state للرسائل المؤقتة وحالات الواجهة السريعة والتحسينات الإدراكية."
      ],
      infographic: {
        title: "مقارنة تخزين البيانات في الـ URL مقابل Location State",
        elements: [
          { label: "URL Params & Query", role: "علني | يظهر في شريط العنوان | قابل للمشاركة والنسخ | نصي فقط", color: "blue" },
          { label: "Location State", role: "خفي | لا يظهر في الرابط | محلي لجلسة المتصفح | ينقل كائنات ومصفوفات", color: "emerald" },
          { label: "حالات الاستخدام", role: "State للرسائل المؤقتة Flash وتفاصيل الانتقال | URL للمعرفات والفلاتر", color: "purple" },
          { label: "الأمان الدفاعي", role: "فحص location.state?.val دائماً لمنع أخطاء null عند الدخول المباشر", color: "amber" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q11.2.1",
      question: "ما هي ميزة NavLink الرئيسية مقارنة بـ Link العادي؟",
      options: [
        "NavLink يحمل الصور بشكل أسرع.",
        "NavLink يعرف تلقائياً ما إذا كان مساره يطابق المسار الحالي ويوفر خاصية isActive لتلوين الرابط النشط.",
        "NavLink يمنع المستخدم من النقر بالزر الأيمن.",
        "NavLink يتصل بالخادم ويحذف ملفات الكوكيز."
      ],
      correctAnswer: 1,
      explanation: "المكون NavLink مخصص لأشرطة التنقل؛ حيث يزود className و style بمتغير isActive تلقائياً عند تطابق المسار."
    },
    {
      id: "q11.2.2",
      question: "ماذا يرجع خطاف useParams() في React Router؟",
      options: [
        "يرجع دالة لتغيير المسار برمجياً.",
        "يرجع كائناً يحتوي على أزواج المفاتيح والقيم لجميع المتغيرات الديناميكية المعرفة في المسار (مثل :id).",
        "يرجع رمز التحقق من الصلاحيات JWT.",
        "يرجع مصفوفة بأسماء ملفات المشروع."
      ],
      correctAnswer: 1,
      explanation: "خطاف useParams يستخرج المتغيرات المسبوقة بنقطتين من قالب المسار ويعيدها ككائن يحوي قيماً نصية."
    },
    {
      id: "q11.2.3",
      question: "متى نفضل استخدام navigate(..., { replace: true })؟",
      options: [
        "عند الدخول إلى الصفحة الرئيسية لأول مرة.",
        "بعد إتمام عمليات تسجيل الدخول أو إتمام الدفع لمنع زر 'الرجوع للخلف' من إعادة المستخدم لنفس شاشة الدفع أو الدخول.",
        "عندما يكون اتصال الإنترنت منقطعاً.",
        "لاستبدال محرك المتصفح بـ Chrome."
      ],
      correctAnswer: 1,
      explanation: "استبدال السجل (replace: true) يمسح الصفحة السابقة من تاريخ التصفح، مما يحمي المستخدم من تكرار الخصم أو الرجوع لصفحات منتهية."
    }
  ],
  exercise: {
    id: "ex-11.2",
    title: "بناء كتالوج منتجات مع روابط ديناميكية وبحث وفحص المعاملات (Dynamic Product Explorer)",
    description: "قم بإنشاء تطبيق ملاحة متكامل يضم: 1) قائمة منتجات تنقل لصفحة تفاصيل ديناميكية `/product/:id`، 2) صفحة تفاصيل تقرأ المعرف بـ useParams وتعرضه، 3) استخدام useSearchParams لفلترة المنتجات حسب الفئة، و 4) شريط تنقل يستخدم NavLink مع تمييز التبويب النشط.",
    starterCode: `import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, useParams, useSearchParams } from 'react-router-dom';

// اكتب مكوناتك هنا لتطبيق الملاحة والمسارات الديناميكية
`,
    hints: [
      "في صفحة التفاصيل، استخرج const { id } = useParams().",
      "في صفحة المنتجات، استخدم const [params, setParams] = useSearchParams() لقراءة params.get('cat').",
      "استخدم NavLink مع دالة className={({ isActive }) => ...} لإبراز الزر النشط."
    ],
    solution: `import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';

// بيانات تجريبية
const PRODUCTS = [
  { id: 1, name: 'هاتف ذكي Pro', cat: 'phones', price: 900 },
  { id: 2, name: 'سماعة رأس لاسلكية', cat: 'audio', price: 150 },
  { id: 3, name: 'حاسوب محمول خفيف', cat: 'laptops', price: 1200 },
];

// 1. صفحة المنتجات مع فلترة بالـ useSearchParams
function ProductsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCat = searchParams.get('cat') || 'all';

  const filtered = currentCat === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.cat === currentCat);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm border">
      <h3 className="font-bold text-gray-800 mb-3">قائمة المنتجات</h3>

      {/* أزرار الفلترة */}
      <div className="flex gap-2 mb-4">
        {['all', 'phones', 'audio', 'laptops'].map((cat) => (
          <button
            key={cat}
            onClick={() => (cat === 'all' ? setSearchParams({}) : setSearchParams({ cat }))}
            className={
              "px-3 py-1 rounded-lg text-xs font-semibold " +
              (currentCat === cat ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700")
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* روابط المسارات الديناميكية */}
      <div className="space-y-2">
        {filtered.map((item) => (
          <Link
            key={item.id}
            to={'/product/' + item.id}
            className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition border"
          >
            <span className="font-medium text-gray-900">{item.name}</span>
            <span className="text-emerald-600 font-bold">{item.price} $</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// 2. صفحة تفاصيل المنتج الديناميكية بـ useParams
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-6 text-center text-red-500 font-bold">المنتج رقم #{id} غير موجود!</div>;
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border max-w-sm mx-auto text-right">
      <button
        onClick={() => navigate(-1)}
        className="text-xs text-blue-600 hover:underline mb-3 block"
      >
        ⬅️ العودة للقائمة
      </button>
      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-mono">
        المعرف: #{product.id}
      </span>
      <h2 className="text-xl font-bold text-gray-900 mt-2">{product.name}</h2>
      <p className="text-gray-500 text-xs mt-1">الفئة: {product.cat}</p>
      <p className="text-emerald-600 text-2xl font-black mt-4">{product.price} $</p>
    </div>
  );
}

export function App() {
  const navStyle = ({ isActive }) =>
    "px-4 py-2 rounded-xl text-xs font-bold transition " +
    (isActive ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:bg-gray-100");

  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto p-4 font-sans text-right">
        <nav className="flex justify-center gap-2 p-2 mb-4 bg-white rounded-2xl shadow-sm border">
          <NavLink to="/" end className={navStyle}>
            الرئيسية
          </NavLink>
          <NavLink to="/products" className={navStyle}>
            المنتجات
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<div className="p-6 text-center">أهلاً بك في الصفحة الرئيسية 🏠</div>} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}`
  },
  infographic: {
    title: "خريطة أدوات وخطافات التنقل في React Router",
    description: "الأدوات الست الأساسية للتنقل وإدارة المسارات في تطبيقات React الحديثة",
    steps: [
      { step: "Link", title: "الملاحة الأساسية", desc: "استبدال وسم <a> لمنع إعادة التحميل والانتقال الفوري" },
      { step: "NavLink", title: "الرابط النشط", desc: "تمييز التبويب الحالي تلقائياً بمتغير isActive" },
      { step: "useNavigate", title: "التوجيه البرمجي", desc: "الملاحة من داخل الدوال والأحداث بعد التسجيل أو الدفع" },
      { step: "useParams", title: "المسار الديناميكي", desc: "استخراج المعرفات الرقمية والنصوص من قوالب المسارات :id" },
      { step: "useSearchParams", title: "معاملات الاستعلام", desc: "قراءة وتحديث ?search=... لمزامنة الفلاتر مع الـ URL" },
      { step: "useLocation", title: "فحص المسار الكامل", desc: "استخراج pathname و search واستقبال بيانات state الخفية" }
    ]
  }
};
