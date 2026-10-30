// src/data/sections/section5/topic4.js
// الموضوع 4: عرض البيانات (Data Rendering, Conditionals & Lists)

export const SECTION_5_TOPIC_4 = {
  id: "5.4",
  title: "عرض البيانات",
  englishTitle: "Data Rendering in React",
  description: "إتقان تقنيات عرض المتغيرات، العرض الشرطي (Conditional Rendering)، تكرار القوائم (List Rendering) باستخدام map، وفهم الآلية العميقة لمفتاح key وتجنب ثغرات الأداء.",
  subtopics: [
    {
      id: "5.4.a",
      title: "عرض المتغيرات داخل JSX",
      englishTerm: "Displaying Variables in JSX (Curly Braces Interpolation)",
      description: "تضمين قيم المتغيرات والتعبيرات البرمجية من JavaScript في قلب وسوم JSX باستخدام الأقواس المعقوفة {}. تتيح هذه الميزة تحويل الواجهة الثابتة إلى واجهة ديناميكية حية تعكس بيانات الذاكرة، مع مراعاة كيفية تعامل React مع أنواع البيانات المختلفة (النصوص والأرقام تُعرض، بينما القيم المنطقية وnull وundefined لا تظهر في واجهة المستخدم).",
      realLifeAnalogy: "مثل الشاشات الإلكترونية في المطارات أو محطات القطار؛ الهيكل الخارجي للشاشة وإطارات الجداول ثابتة، ولكن نصوص أرقام الرحلات، والوجهات، وأوقات الإقلاع تتغير ديناميكياً بملء فراغات الحقول ببيانات حية من قاعدة البيانات.",
      whyItMatters: "بدون القدرة على حقن المتغيرات، ستكون قوالب React ميتة وثابتة كصفحات HTML الكلاسيكية. التضمين هو الجسر الفعلي الذي يربط منطق التطبيق (Logic) وقواعد البيانات بمرئيات المستخدم (UI).",
      syntax: "<h1>{variableName}</h1>\n<p>{object.property}</p>\n<span>{number * 2}</span>",
      simpleExample: `// تعريف متغير نصي يحمل اسم المستخدم
const userName = "سارة المنصور";
// تعريف متغير رقمي يحمل عدد التنبيهات الجديدة
const notificationCount = 5;
// مكون بسيط يعرض المتغيرات داخل وسوم JSX
function UserBadge() {
  // إرجاع واجهة المستخدم مع تضمين المتغيرات داخل الأقواس المعقوفة
  return (
    // حاوية الشارة بتنسيق أنيق
    <div className="user-badge p-4 bg-slate-900 text-white rounded-lg">
      {/* عرض اسم المستخدم كعنوان رئيسي */}
      <h3 className="text-lg font-bold">أهلاً بك يا {userName}</h3>
      {/* عرض عدد الإشعارات مع عملية حسابية بسيطة */}
      <p className="text-sm text-emerald-400">لديك {notificationCount} إشعارات جديدة غير مقروءة</p>
    </div>
  );
}`,
      advancedExample: `// كائن بيانات متكامل يمثل بيانات ملف مستخدم مصرفي
const accountData = {
  id: "ACC-9941",
  owner: { firstName: "عبدالله", lastName: "الخالدي" },
  balance: 14250.75,
  currency: "SAR",
  isActive: true,
  lastLogin: new Date("2026-10-29T10:30:00Z")
};
// دالة مساعدة لتنسيق العملة والمبالغ المالية
function formatCurrency(amount, currency) {
  // استخدام منسق الأرقام القياسي في جافاسكريبت
  return new Intl.NumberFormat("ar-SA", { style: "currency", currency }).format(amount);
}
// مكون بطاقة الحساب المصرفي المتقدم
export function BankCard() {
  // تفكيك الخصائص المطلوبة من كائن الحساب
  const { owner, balance, currency, isActive, lastLogin } = accountData;
  // إرجاع بطاقة مصرفية متطورة
  return (
    // بطاقة الحساب المصرفي بتأثير تدرج لوني وبطاقة ائتمانية
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-indigo-900 to-slate-900 p-6 text-white shadow-2xl border border-indigo-700/50">
      {/* شريط رأس البطاقة */}
      <div className="flex justify-between items-center mb-6">
        {/* اسم مالك الحساب بدمج الاسم الأول والأخير */}
        <span className="font-medium tracking-wide">{owner.firstName} {owner.lastName}</span>
        {/* عرض حالة الحساب الحالية */}
        <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
          {isActive ? "حساب نشط" : "مجمد"}
        </span>
      </div>
      {/* الرصيد الحالي بتنسيق احترافي */}
      <div className="mb-4">
        {/* تسمية توضيحية للرصيد */}
        <p className="text-xs uppercase text-indigo-300 font-medium">الرصيد المتاح</p>
        {/* حقن ناتج استدعاء دالة التنسيق المالي مباشرة داخل JSX */}
        <h2 className="text-3xl font-extrabold tracking-tight">{formatCurrency(balance, currency)}</h2>
      </div>
      {/* تذييل البطاقة يعرض تاريخ آخر تسجيل دخول بعد تنسيقه */}
      <div className="text-[11px] text-slate-400 border-t border-slate-700/60 pt-3 flex justify-between">
        {/* رقم المعرف */}
        <span>المعرف: {accountData.id}</span>
        {/* تحويل كائن التاريخ إلى نص مقروء */}
        <span>آخر دخول: {lastLogin.toLocaleDateString("ar-SA")}</span>
      </div>
    </div>
  );
}`,
      output: "يتم استبدال كل زوج من الأقواس المعقوفة بالقيمة النصية الناتجة عن التعبير؛ نرى اسم المستخدم، والرصيد المنسق بالريال السعودي، بينما القيم مثل true/false لا تطبع على الشاشة بل يُستفاد منها منطقياً.",
      commonMistakes: [
        {
          mistake: "محاولة طباعة كائن جافاسكريبت كامل مباشرة داخل JSX مثل: <div>{userObject}</div>.",
          why: "محرك React يرفض عرض الكائنات العادية كأبناء (Objects are not valid as a React child)، لأن React لا يدري كيف يحول الكائن المتشعب إلى نصوص في DOM.",
          fix: "اطبع خصائص محددة من الكائن مثل {userObject.name} أو حوله لنص تجريبي بـ {JSON.stringify(userObject)}."
        },
        {
          mistake: "توقع طباعة القيم المنطقية بـ <span>{isActive}</span> وتفاجؤ المبرمج بأن العنصر فارغ.",
          why: "تتجاهل React طباعة booleans, null, وundefined في الواجهة عمداً لتسهيل العرض الشرطي.",
          fix: "إذا أردت عرض القيمة نصياً، حولها يدوياً باستخدام String(isActive) أو المعامل الشرطي {isActive ? 'نعم' : 'لا'}."
        }
      ],
      bestPractices: [
        "اجعل التعبيرات داخل الأقواس المعقوفة بسيطة ومقروءة؛ إذا زاد المنطق عن سطر استخرجه لدالة مساعدة منفصلة خارج JSX.",
        "نسق البيانات (كالعملات والتواريخ) بدوال خارجية قبل إقحامها في الواجهة للحفاظ على نظافة كود المكون."
      ],
      infographicCard: {
        type: "concept-grid",
        title: "ماذا يحدث لكل نوع بيانات داخل { Expression } في React؟",
        items: [
          { label: "نصوص وأرقام (String & Number)", desc: "تُعرض وتُطبع في الشاشة كنص عادي (DOM Text Node)" },
          { label: "القيم المنطقية (true / false)", desc: "يتم تجاهلها تماماً ولا يظهر لها أي أثر في HTML النهائي" },
          { label: "القيم المعدومة (null & undefined)", desc: "يتم تجاهلها تماماً (تُستخدم لإخفاء العناصر برمجياً)" },
          { label: "المصفوفات (Arrays)", desc: "تُفكك وتُعرض عناصرها بالتتابع واحداً تلو الآخر" },
          { label: "الكائنات العادية (Objects)", desc: "تسبب خطأً قاتلاً Uncaught Error: Objects are not valid as a React child!" }
        ]
      }
    },
    {
      id: "5.4.b",
      title: "العرض الشرطي باستخدام if",
      englishTerm: "Conditional Rendering with if / Early Return",
      description: "استخدام جمل الشرط الكلاسيكية if خارج نطاق إرجاع JSX لتحديد أي واجهة مستخدم كاملة أو أي جزء سيتم تقديمه بناءً على الحالة الحالية للمكون. وتُعرف هذه التقنية أيضاً باسم الإرجاع المبكر (Early Return Pattern).",
      realLifeAnalogy: "مثل موظف الاستقبال في قاعة كبار الشخصيات؛ إذا لم تكن مسجلاً في قائمة المدعوين (شرط مفقود)، يتم توجيهك فوراً إلى بوابة التسجيل الخارجية ولن ترى قاعة الاحتفال بالداخل إطلاقاً.",
      whyItMatters: "هي الأداة الأنقى والأكثر نظافة للتعامل مع الحالات الحاسمة مثل: شاشات التحميل (Loading States)، رسائل الخطأ القاتلة (Error Banners)، وصفحات منع الوصول (Access Denied)، مما يمنع تشويش كود الواجهة الرئيسية بتفريعات معقدة.",
      syntax: "if (isLoading) { return <LoadingSpinner />; }\nif (hasError) { return <ErrorMessage />; }\nreturn <MainContent />;",
      simpleExample: `// مكون بطاقة المستخدم يقبل خاصية isLoggedIn
function UserGreeting({ isLoggedIn }) {
  // فحص شرط تسجيل الدخول خارج JSX
  if (!isLoggedIn) {
    // إرجاع واجهة الضيف فوراً (Early Return) في حال عدم تسجيل الدخول
    return (
      // تنبيه يطلب تسجيل الدخول
      <div className="p-4 bg-amber-500/10 text-amber-500 rounded-md border border-amber-500/20">
        {/* نص يطلب من الزائر تسجيل الدخول */}
        <p>يرجى تسجيل الدخول للوصول إلى لوحة التحكم الخاصة بك.</p>
      </div>
    );
  }
  // إذا وصل التنفيذ هنا فهذا يعني أن المستخدم مسجل بنجاح
  return (
    // واجهة الترحيب الرسمية
    <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
      {/* نص الترحيب بالمستخدم */}
      <h2 className="font-bold">مرحباً بعودتك! يسعدنا رؤيتك مجدداً.</h2>
    </div>
  );
}`,
      advancedExample: `// مكون متكامل لمعالجة الحالات الثلاث: التحميل، الخطأ، وعرض البيانات
export function WeatherWidget({ status, temperature, city, onRetry }) {
  // الحالة الأولى: حالة التحميل النشط (Loading State)
  if (status === "loading") {
    // إرجاع واجهة مؤشر الانتظار الدوار
    return (
      // صندوق عرض التحميل
      <div className="flex flex-col items-center justify-center p-8 bg-slate-900 rounded-xl border border-slate-800">
        {/* دائرة دوران متحركة باستخدام Tailwind */}
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-3"></div>
        {/* نص التحميل */}
        <p className="text-slate-400 text-sm">جارٍ جلب أحدث بيانات الطقس...</p>
      </div>
    );
  }
  // الحالة الثانية: حالة حدوث خطأ في الاتصال (Error State)
  if (status === "error") {
    // إرجاع واجهة الخطأ مع زر إعادة المحاولة
    return (
      // صندوق الخطأ بخلفية حمراء خافتة
      <div className="p-6 bg-rose-950/40 rounded-xl border border-rose-800 text-rose-200 text-center">
        {/* أيقونة أو عنوان الخطأ */}
        <h4 className="font-bold text-rose-400 mb-2">تعذر الاتصال بمركز الأرصاد</h4>
        {/* زر إعادة المحاولة ينفذ الدالة الممررة */}
        <button 
          onClick={onRetry}
          className="mt-3 px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-sm font-medium transition-colors"
        >
          إعادة المحاولة
        </button>
      </div>
    );
  }
  // الحالة الافتراضية: نجاح العملية وعرض بيانات الطقس
  return (
    // بطاقة الطقس المتكاملة
    <div className="p-6 bg-gradient-to-br from-sky-900 to-indigo-950 rounded-xl border border-sky-700/40 text-white">
      {/* اسم المدينة */}
      <h3 className="text-xl font-bold mb-1">{city}</h3>
      {/* درجة الحرارة الحالية */}
      <div className="text-5xl font-black text-sky-300 my-4">{temperature}°م</div>
      {/* حالة الطقس */}
      <p className="text-xs text-sky-200/80">سماء صافية مع نسيم عليل</p>
    </div>
  );
}`,
      output: "يقوم المكون بفحص قيمة status بترتيب منطقي دقيق؛ فإذا كانت loading ينهي التنفيذ ويعرض المؤشر، وإذا كانت error يعرض زر المحاولة، وإذا نجح يكمل للمسار الطبيعي ويعرض بطاقة الطقس.",
      commonMistakes: [
        {
          mistake: "محاولة كتابة جملة if مباشرة داخل شجرة JSX مثل: <div>{ if (auth) { return <Admin />; } }</div>.",
          why: "تتوقع الأقواس المعقوفة داخل JSX تعبيراً يُرجع قيمة (Expression) بينما جملة if هي تصريح برمجي (Statement) لا يُرجع قيمة تلقائياً.",
          fix: "استخدم if خارج تعليمة return كإرجاع مبكر، أو استبدلها بالمعامل الثلاثي Ternary داخل JSX."
        }
      ],
      bestPractices: [
        "اعتمد أسلوب الإرجاع المبكر (Early Return) للتحقق من الأخطاء وحالات الانتظار أولاً لتقليل عمق التداخل (Nesting) في كودك.",
        "تأكد دائماً أن كل مسار من مسارات if يرجع عنصر JSX صالحاً أو null لمنع ظهور أخطاء تصيير فارغة."
      ],
      infographicCard: {
        type: "flow-diagram",
        title: "مسار اتخاذ القرار في تقنية الإرجاع المبكر (Early Return)",
        steps: [
          "1. بدء تنفيذ المكون واستلام الخصائص Props",
          "2. فحص: هل التطبيق في حالة انتظار (isLoading)؟ نعم -> إرجاع شاشة Skeleton/Spinner فوراً واختصار الطريق",
          "3. فحص: هل حدث خطأ في الخادم (isError)؟ نعم -> إرجاع كرت الخطأ وزر المحاولة واختصار الطريق",
          "4. المسار الافتراضي: كل الشروط سليمة -> إرجاع واجهة المستخدم الرئيسية المكتملة"
        ]
      }
    },
    {
      id: "5.4.c",
      title: "العرض الشرطي باستخدام المعامل الثلاثي",
      englishTerm: "Ternary Operator (condition ? trueJSX : falseJSX)",
      description: "استخدام معامل المقارنة الثلاثي المدمج في JavaScript (؟ :) داخل الأقواس المعقوفة في JSX لاختيار أحد عنصرين مرئيين بديلين. هذا المعامل يُعتبر تعبيراً حقيقياً (Expression) ينتج عنه قيمة، مما يجعله مناسباً تماماً للمقارنات ذات الخيارين إما / أو.",
      realLifeAnalogy: "مثل مفتاح الإضاءة المزدوج ثنائي المسار؛ إذا كان المفتاح موجهاً لأعلى يُشعل المصباح الأبيض، وإذا كان موجهاً لأسفل يُشعل المصباح الأصفر الخافت. لا يوجد خيار ثالث، أحدهما دائماً فعال.",
      whyItMatters: "يمكّن المطور من تغيير جزء صغير ومحدد من الشاشة (مثل تغيير نص زر، أيقونة، أو لون خلفية) دون الحاجة لإعادة كتابة وتكرار كامل شجرة المكون من الصفر.",
      syntax: "{isSubscribed ? <PremiumBadge /> : <UpgradeButton />}",
      simpleExample: `// مكون بطاقة الاشتراك يستقبل خاصية isSubscribed
function MembershipStatus({ isSubscribed }) {
  // إرجاع واجهة تعرض حالة العضوية بمرونة
  return (
    // حاوية الحالة
    <div className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg">
      {/* نص يحدد نوع الحساب */}
      <span className="text-sm text-slate-300">نوع الحساب:</span>
      {/* المعامل الثلاثي يختار بين شارة العضو الذهبي أو الزر العادي */}
      {isSubscribed ? (
        // في حال تحقق الشرط: شارة العضوية المميزة
        <span className="px-3 py-1 bg-amber-500/20 text-amber-400 font-bold text-xs rounded-full border border-amber-500/30">
          عضو ذهبي ممتاز
        </span>
      ) : (
        // في حال عدم تحقق الشرط: زر الترقية
        <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-full">
          ترقية الحساب الآن
        </button>
      )}
    </div>
  );
}`,
      advancedExample: `// مكون بطاقة منتج متقدم مع زر المفضلة وتنبيه المخزون
export function ProductMiniCard({ title, price, inStock, isFavorited, onToggleFav }) {
  // إرجاع كرت المنتج المتفاعل
  return (
    // كرت المنتج بتنسيق حديث
    <div className="relative p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg text-white">
      {/* زر التفضيل العلوي يستغل المعامل الثلاثي لاختيار الأيقونة واللون */}
      <button 
        onClick={onToggleFav}
        className="absolute top-4 left-4 p-2 rounded-full transition-transform active:scale-95 bg-slate-800/80"
      >
        {/* اختيار قلب ممتلئ أحمر أو قلب رمادي مفرغ بناءً على حالة المفضلة */}
        {isFavorited ? (
          <span className="text-rose-500 text-lg">❤️</span>
        ) : (
          <span className="text-slate-400 text-lg">🤍</span>
        )}
      </button>
      {/* عنوان المنتج */}
      <h4 className="font-bold text-base mb-1 text-slate-100">{title}</h4>
      {/* السعر المالي */}
      <p className="text-xl font-black text-emerald-400 mb-3">{price} ر.س</p>
      {/* شريط حالة توفر المنتج في المستودع */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <span>حالة التوفر:</span>
        {/* تبديل الشارة بين متوفر بالمخزن أو نفدت الكمية */}
        {inStock ? (
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            متوفر للشحن الفوري
          </span>
        ) : (
          <span className="text-rose-400 font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-400 inline-block"></span>
            نفدت الكمية حالياً
          </span>
        )}
      </div>
    </div>
  );
}`,
      output: "يتم تقييم الشرط في زمن التشغيل؛ فإذا كان isFavorited صحيحاً تظهر أيقونة القلب الأحمر، وإذا كان inStock غير متوفر يظهر تنبيه نفاد الكمية الأحمر بدل الأخضر بسلاسة.",
      commonMistakes: [
        {
          mistake: "كتابة شروط ثلاثية متداخلة متتالية (Nested Ternaries) داخل JSX مثل: cond1 ? res1 : cond2 ? res2 : cond3 ? res3 : res4.",
          why: "التداخل المعقد يجعل كود JSX غير قابل للقراءة ويصعب تصحيحه وتتبعه بصرياً.",
          fix: "إذا كان لديك أكثر من حالتين بديلتين، استخدم دالة مستقلة تحتوي على switch أو جمل if مخصصة خارج شجرة JSX."
        }
      ],
      bestPractices: [
        "احصر استخدام المعامل الثلاثي في الشروط البسيطة التي تقارن بين خيارين واضحين فقط.",
        "نسق كود المعامل الثلاثي المتعدد الأسطر بوضع الشرط في سطر، ثم علامة ؟ وقوس JSX في سطر، ثم علامة : وقوس JSX في السطر التالي لتسهيل القراءة."
      ],
      infographicCard: {
        type: "code-comparison",
        title: "تشريح المعامل الثلاثي داخل JSX",
        structure: [
          "{ الشرط (Condition) ",
          "   ? ( <عنصر_النجاح /> ) ",
          "   : ( <عنصر_البديل /> ) }"
        ]
      }
    },
    {
      id: "5.4.d",
      title: "العرض الشرطي باستخدام المعامل &&",
      englishTerm: "Short-Circuit Evaluation with Logical AND (&&)",
      description: "استغلال خاصية الاختصار المنطقي (Short-Circuit) للمعامل && في JavaScript لعرض عنصر في واجهة المستخدم فقط إذا كان الشرط محققاً (Truthy)، وإخفائه كلياً في حال كان الشرط غير محقق (Falsy) دون الحاجة لتقديم بديل.",
      realLifeAnalogy: "مثل شارة التنبيهات الحمراء فوق أيقونة الرسائل في الهاتف؛ إذا كان عدد الرسائل الجديدة أكبر من الصفر تظهر الشارة الحمراء، وإذا لم تكن هناك رسائل تختفي الشارة تماماً ولا يظهر مكانها شيء.",
      whyItMatters: "هو الأسلوب الأكثر إيجازاً وشيوعاً في React لإظهار الإشعارات العارضة، والأزرار الشرطية، وأيقونات التحقق، ومربعات الحوار المشروطة دون كتابة خيار بديل فارغ مثل : null.",
      syntax: "{unreadCount > 0 && <span className='badge'>{unreadCount}</span>}",
      simpleExample: `// مكون يقبل عدد الرسائل غير المقروءة
function InboxIcon({ unreadMessages }) {
  // إرجاع أيقونة البريد مع إشعار مشروط
  return (
    // حاوية الأيقونة
    <div className="relative inline-flex p-3 bg-slate-800 rounded-xl">
      {/* أيقونة البريد النصية */}
      <span className="text-2xl">✉️</span>
      {/* استخدام && لعرض العداد فقط في حال وجود رسائل */}
      {unreadMessages > 0 && (
        // وسم الشارة الدائرية يظهر فقط إذا تحقق الشرط
        <span className="absolute -top-1 -right-1 px-2 py-0.5 bg-rose-600 text-white text-[11px] font-bold rounded-full animate-pulse">
          {unreadMessages}
        </span>
      )}
    </div>
  );
}`,
      advancedExample: `// مكون نموذج تحقق مالي مع إظهار أخطاء وتنبيهات أمان مشروطة
export function TransferVerificationBox({ amount, userVerified, isSuspicious, onVerifyNow }) {
  // إرجاع صندوق تفاصيل التحويل
  return (
    // الحاوية الأساسية للعملية
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-4">
      {/* العنوان والمبلغ */}
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">تأكيد الحوالة البنكية</h3>
        <span className="text-xl font-mono text-emerald-400 font-bold">{amount} ر.س</span>
      </div>
      {/* تنبيه أمني مشروط: يظهر فقط إذا كانت العملية مشبوهة */}
      {isSuspicious && (
        <div className="p-3 bg-amber-500/15 border border-amber-500/30 rounded-xl flex items-start gap-3 text-amber-300 text-xs">
          <span className="text-lg">⚠️</span>
          <p>تم تصنيف هذه الحوالة بأنها غير معتادة؛ قد تستغرق المعالجة وقتاً إضافياً للتأكد من أمان حسابك.</p>
        </div>
      )}
      {/* تنبيه وجوب التوثيق: يظهر فقط إذا لم يكن المستخدم موثقاً لهويته */}
      {!userVerified && (
        <div className="p-4 bg-rose-950/40 border border-rose-800 rounded-xl flex items-center justify-between text-xs">
          <span className="text-rose-300">حسابك غير موثق بالهوية الوطنية؛ التوثيق مطلوب لإتمام الحوالة.</span>
          <button 
            onClick={onVerifyNow}
            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold transition-all"
          >
            توثيق الآن
          </button>
        </div>
      )}
      {/* زر الإرسال النهائي: يتاح ويعرض فقط في حال كان المستخدم موثقاً والعملية آمنة */}
      {userVerified && !isSuspicious && (
        <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/30">
          إتمام الحوالة بنجاح
        </button>
      )}
    </div>
  );
}`,
      output: "عندما تكون الشروط السابقة صحيحة (truthy)، تظهر المربعات التحذيرية أو الأزرار؛ وإذا كانت خاطئة، يتم تجاوزها تماماً دون ترك أي أثر في شجرة العناصر.",
      commonMistakes: [
        {
          mistake: "كتابة فحص المصفوفات كـ {items.length && <List items={items} />} وطباعة الرقم 0 على الشاشة إذا كانت المصفوفة فارغة!",
          why: "في JavaScript، عندما يكون الطرف الأيسر للمعامل && رقماً صفرياً (0)، فإن التعبير يرجع 0، وتقوم React بطباعة الرقم 0 في الواجهة لأنه رقم وليس boolean!",
          fix: "حول الشرط دائماً إلى قيمة منطقية صريحة: {items.length > 0 && <List />} أو {Boolean(items.length) && <List />}."
        }
      ],
      bestPractices: [
        "تأكد دائماً أن الطرف الأيسر لمعامل && هو قيمة منطقية boolean خالصة (باستخدام > 0 أو Boolean() أو !!).",
        "لا تستخدم && إذا كان لديك خيار بديل (Else)؛ استخدم المعامل الثلاثي في تلك الحالة لتجنب المنطق المزدوج المعقد."
      ],
      infographicCard: {
        type: "danger-alert",
        title: "فخ الرقم صفر القاتل مع المعامل &&",
        details: [
          "❌ كود خاطئ: {count && <Badge />} -> إذا كان count = 0، ستطبع React الرقم 0 على الشاشة!",
          "✅ كود سليم: {count > 0 && <Badge />} -> سيعود الشرط بـ false وبالتالي لن يطبع أي شيء إطلاقاً!"
        ]
      }
    },
    {
      id: "5.4.e",
      title: "عرض المصفوفات باستخدام map",
      englishTerm: "Rendering Lists with Array.prototype.map()",
      description: "الأسلوب القياسي والوحيد الموصى به في React لتحويل مصفوفات البيانات الأولية (Raw Data Arrays) إلى مصفوفة من عناصر ووسوم JSX قابلة للعرض في DOM. تقوم الدالة map بالمرور على كل عنصر وإنتاج عنصر JSX مخصص له مع حقن خصائصه الفريدة.",
      realLifeAnalogy: "مثل ماكينة طباعة وتغليف بطاقات العمل؛ تُدخل لها قائمة رقمية بأسماء 100 موظف، فتخرج لك 100 بطاقة مطبوعة بنفس القالب والتصميم تماماً، ولكن كل بطاقة تحمل اسم وبيانات موظف مختلف.",
      whyItMatters: "الواجهات الحقيقية في كل تطبيقات العالم (منشورات فيسبوك، تغريدات إكس، منتجات أمازون، رسائل الواتساب) كلها مبنية على مصفوفات ديناميكية قادمة من قواعد البيانات ومكررة برمجياً.",
      syntax: "{items.map((item) => (\n  <li key={item.id}>{item.name}</li>\n))}",
      simpleExample: `// مصفوفة بسيطة بأسماء اللغات البرمجية
const skills = ["JavaScript", "React.js", "TypeScript", "Next.js", "Tailwind CSS"];
// مكون يعرض قائمة المهارات
function SkillsList() {
  // إرجاع قائمة غير مرتبة
  return (
    // الحاوية بتنسيق بطاقة
    <div className="p-4 bg-slate-900 rounded-xl text-white">
      {/* عنوان القائمة */}
      <h3 className="text-lg font-bold mb-3 text-indigo-400">مهارات التطوير:</h3>
      {/* قائمة العناصر */}
      <ul className="space-y-2">
        {/* استخدام دالة map لتحويل كل نص في المصفوفة إلى وسم li */}
        {skills.map((skill, index) => (
          // عنصر القائمة مع مفتاح مؤقت
          <li key={index} className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm flex items-center gap-2">
            {/* أيقونة نقطية */}
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            {/* طباعة اسم المهارة */}
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `// مصفوفة كائنات متقدمة تمثل قائمة الطلاب ودرجاتهم
const students = [
  { id: "std-101", name: "أحمد المهدي", score: 95, department: "علوم الحاسب" },
  { id: "std-102", name: "منى الزهراني", score: 88, department: "نظم المعلومات" },
  { id: "std-103", name: "ياسر الحربي", score: 72, department: "هندسة البرمجيات" },
  { id: "std-104", name: "فاطمة الدوسري", score: 98, department: "الذكاء الاصطناعي" }
];
// مكون جدول لوحة الشرف الأكاديمية
export function HonorRollTable() {
  // إرجاع جدول احترافي
  return (
    // حاوية الجدول بحدود مستديرة
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 text-white">
      {/* ترويسة اللوحة */}
      <div className="p-4 bg-slate-800/60 border-b border-slate-700 flex justify-between items-center">
        <h3 className="font-bold text-base text-indigo-300">لوحة شرف المتفوقين</h3>
        <span className="text-xs text-slate-400">إجمالي الطلاب: {students.length}</span>
      </div>
      {/* جدول البيانات */}
      <table className="w-full text-right text-sm">
        {/* عناوين الأعمدة */}
        <thead className="bg-slate-950/50 text-slate-400 text-xs font-semibold uppercase">
          <tr>
            <th className="p-3">المعرف</th>
            <th className="p-3">اسم الطالب</th>
            <th className="p-3">التخصص</th>
            <th className="p-3 text-center">الدرجة</th>
            <th className="p-3 text-center">التقدير</th>
          </tr>
        </thead>
        {/* جسم الجدول الذي يتم بناؤه تكرارياً عبر map */}
        <tbody className="divide-y divide-slate-800">
          {students.map((student) => (
            // صف لكل طالب مع تحديد مفتاح فريد ومستقر id
            <tr key={student.id} className="hover:bg-slate-800/40 transition-colors">
              {/* رقم الطالب */}
              <td className="p-3 font-mono text-xs text-slate-400">{student.id}</td>
              {/* اسم الطالب */}
              <td className="p-3 font-medium text-slate-100">{student.name}</td>
              {/* التخصص */}
              <td className="p-3 text-slate-300">{student.department}</td>
              {/* الدرجة */}
              <td className="p-3 text-center font-bold text-emerald-400 font-mono">{student.score}%</td>
              {/* التقدير بحساب شرطي سريع */}
              <td className="p-3 text-center">
                <span className={\`px-2 py-0.5 rounded text-xs font-bold \${
                  student.score >= 90 ? "bg-emerald-500/20 text-emerald-300" : "bg-sky-500/20 text-sky-300"
                }\`}>
                  {student.score >= 90 ? "ممتاز" : "جيد جداً"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
      output: "تقوم الدالة map بتحويل مصفوفة الطلاب الأربعة إلى 4 صفوف tr داخل جدول HTML، مع حقن معرفاتهم ودرجاتهم وتلوين الشارات بدقة وفق كل صف.",
      commonMistakes: [
        {
          mistake: "استخدام دالة forEach بدلاً من map لعرض العناصر داخل JSX مثل: {items.forEach(item => <li>{item}</li>)}.",
          why: "دالة forEach لا ترجع أي قيمة على الإطلاق (ترجع undefined دائماً)، بينما تتطلب React مصفوفة من عناصر JSX لتعرضها، وهو ما تفعله map بالضبط.",
          fix: "استخدم map دائماً لعرض القوائم، لأنها تنشئ وترجع مصفوفة جديدة تحتوي على عناصر JSX المحدثة."
        },
        {
          mistake: "نسيان كلمة return عند فتح أقواس معقوفة بعد دالة السهم: items.map(item => { <li>{item}</li> }).",
          why: "الأقواس المعقوفة في الدوال السهمية تعني كتلة تعليمات (Function Body) تتطلب return صريحة، وإلا فإنها ترجع undefined خفياً.",
          fix: "استخدم الأقواس الدائرية للإرجاع التلقائي: items.map(item => ( <li>{item}</li> )) أو أضف كلمة return يدوياً."
        }
      ],
      bestPractices: [
        "احرص دائماً على تمرير خاصية key فريدة ومستقرة لكل عنصر يخرج من دالة map.",
        "إذا كان كود العنصر الواحد داخل map طويلاً ويتجاوز 15 سطراً، استخرجه إلى مكون فرعي منفصل (مثل StudentRow)."
      ],
      infographicCard: {
        type: "pipeline-chart",
        title: "كيف تحول دالة map البيانات إلى واجهات؟",
        stages: [
          "1. مصفوفة بيانات خام: [{id: 1, text: 'أ'}, {id: 2, text: 'ب'}]",
          "2. معالجة map: تحويل كل كائن إلى وسم <Card key={item.id} ... />",
          "3. مصفوفة عناصر JSX: [<Card key='1' />, <Card key='2' />]",
          "4. تحويل React إلى DOM حقيقي في المتصفح بكفاءة وسرعة فائقة"
        ]
      }
    },
    {
      id: "5.4.f",
      title: "استخدام key مع القوائم",
      englishTerm: "The Key Prop in React Lists (Identity & Reconciliation)",
      description: "خاصية خاصة ومحجوزة تطلبها React عند عرض أي قائمة عناصر ديناميكية عبر map. يعمل المفتاح (key) كبصمة هوية فريدة وثابتة لكل عنصر تمكن محرك المطابقة (Reconciliation Engine) من تتبع هوية العناصر بين عمليات إعادة التصيير لمعرفة أي العناصر أُضيف، أيها حُذف، وأيها تم تعديل ترتيبه دون هدم كامل القائمة.",
      realLifeAnalogy: "مثل رقم الهوية الوطنية أو رقم بطاقة الصعود للطائرة (Boarding Pass) لكل مسافر؛ لو تحرك المسافرون في طابور التفتيش وتبادلوا أماكنهم، يعرف ضابط الجوازات هوية كل شخص برقم هويته وليس بترتيب وقوفه في الطابور.",
      whyItMatters: "بدون key، تضطر React لإعادة بناء كامل عناصر DOM الحقيقية من الصفر عند كل تحديث، مما يسبب بطئاً شديداً في الأداء وخللاً مرئياً كارثياً في حقول الإدخال والرسوم المتحركة.",
      syntax: "<li key={uniqueId}>{content}</li>",
      simpleExample: `// قائمة مهام يومية تحتوي كل مهمة على معرف رقمي فريد
const todos = [
  { id: "task-01", text: "شراء قهوة الصباح", isDone: true },
  { id: "task-02", text: "قراءة توثيق React الرسمي", isDone: false },
  { id: "task-03", text: "بناء مكون البطاقة الذكية", isDone: false }
];
// مكون يعرض قائمة المهام مع المفتاح الصحيح
function TodoList() {
  // إرجاع قائمة المهام
  return (
    // الحاوية
    <div className="p-4 bg-slate-900 rounded-xl text-white max-w-md">
      {/* عنوان المهام */}
      <h3 className="font-bold text-lg mb-3">قائمة المهام اليومية</h3>
      {/* القائمة */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          // تمرير id كمفتاح فريد للعنصر الأب المرجع مباشرة من map
          <li 
            key={todo.id} 
            className="p-3 bg-slate-800 rounded-lg flex items-center justify-between text-sm"
          >
            {/* نص المهمة مع خط في حال اكتمالها */}
            <span className={todo.isDone ? "line-through text-slate-500" : "text-slate-200"}>
              {todo.text}
            </span>
            {/* حالة المهمة */}
            <span className="text-xs font-mono text-indigo-400">{todo.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `// مكون عربة التسوق الديناميكية المتقدمة
export function ShoppingCartList({ items, onRemoveItem }) {
  // إرجاع قائمة المنتجات في السلة
  return (
    // حاوية العربة
    <div className="p-5 bg-slate-900 rounded-2xl border border-slate-800 text-white">
      {/* ترويسة السلة */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-extrabold text-base">عربة التسوق ({items.length})</h4>
        <span className="text-xs text-slate-400">المفتاح يضمن سلامة الحقول عند الحذف</span>
      </div>
      {/* قائمة المنتجات المحجوزة */}
      <div className="space-y-3">
        {items.map((item) => (
          // استخدام معرف المنتج الفريد كمفتاح key، يوضع دائماً في العنصر الجذري الخارجي
          <div 
            key={item.sku} 
            className="flex items-center justify-between p-3 bg-slate-800/70 border border-slate-700/50 rounded-xl transition-all hover:border-indigo-500/50"
          >
            {/* تفاصيل المنتج */}
            <div className="flex items-center gap-3">
              {/* صورة مصغرة */}
              <div className="w-10 h-10 bg-indigo-950 rounded-lg flex items-center justify-center font-bold text-indigo-400">
                {item.title[0]}
              </div>
              {/* العنوان والسعر */}
              <div>
                <p className="font-semibold text-sm text-slate-200">{item.title}</p>
                <p className="text-xs text-emerald-400 font-mono">{item.price} ر.س</p>
              </div>
            </div>
            {/* زر حذف المنتج يمرر معرّفه الفريد */}
            <button 
              onClick={() => onRemoveItem(item.sku)}
              className="px-2.5 py-1 bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 rounded-lg text-xs font-medium transition-colors"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "عند قيام المستخدم بحذف عنصر من منتصف السلة، تستخدم React المفتاح SKU للتعرف على العنصر المحذوف بدقة وإزالته فقط من DOM الحقيقي دون التأثير على العناصر المتبقية أو إعادة رسمها.",
      commonMistakes: [
        {
          mistake: "وضع خاصية key على عنصر داخلي فرعي بدلاً من العنصر الجذري المباشر المرجع من دالة map.",
          why: "تطلب React المفتاح على العنصر المحيط المباشر (Direct Outer Wrapper) في التكرار؛ وضعه في الداخل يعتبر عديم الجدوى ويؤدي لتحذير missing key.",
          fix: "ضع key دائماً على أول وسم يتم إرجاعه مباشرة داخل دالة map (سواء كان <li> أو <div> أو مكون مخصص)."
        },
        {
          mistake: "محاولة قراءة قيمة props.key داخل المكون المستقبِل كخاصية عادية!",
          why: "خاصية key هي كلمة محجوزة لمحرك React الداخلي وليست prop عادية، ولا يتم تمريرها إلى داخل كائن props المكون.",
          fix: "إذا كنت بحاجة لقيمة المعرف داخل المكون، مررها بخاصية مستقلة مثل <Card key={item.id} id={item.id} />."
        }
      ],
      bestPractices: [
        "استخدم دائماً المفاتيح الطبيعية القادمة من قاعدة البيانات (مثل id أو uuid أو slug).",
        "تأكد أن المفاتيح فريدة بين العناصر الشقيقة في نفس القائمة (ليس بالضرورة أن تكون فريدة عالمياً في كامل التطبيق)."
      ],
      infographicCard: {
        type: "architecture-diagram",
        title: "كيف تستخدم React المفتاح (key) أثناء التحديث؟",
        nodes: [
          "قبل التحديث: [A: key=1], [B: key=2], [C: key=3]",
          "حذف العنصر B في التطبيق",
          "بعد التحديث: [A: key=1], [C: key=3]",
          "ذكاء React: بفضل المفاتيح، تعرف React فوراً أن B فقط قد حُذف، فتحذفه من DOM في ميكروثانية واحدة دون لمس A أو C!"
        ]
      }
    },
    {
      id: "5.4.g",
      title: "اختيار مفاتيح مستقرة وفريدة",
      englishTerm: "Stable & Unique Keys Selection",
      description: "القواعد الصارمة والمعايير الهندسية لاختيار قيمة المفتاح key في React. يجب أن يتمتع المفتاح بخاصيتين إلزاميتين: 1) التفرد (Uniqueness) بين العناصر الشقيقة في القائمة، و2) الاستقرار (Stability) بحيث لا تتغير قيمة المفتاح لنفس العنصر بين عمليات إعادة التصيير المتتابعة.",
      realLifeAnalogy: "مثل رقم لوحة السيارة؛ لوحة السيارة فريدة لكل مركبة ومستقرة تماماً لا تتغير في كل إشارة مرور أو موقف سيارات. تخيل لو تغير رقم اللوحة عشوائياً في كل مرة تدوس فيها على المكابح! ستنهار سجلات المرور وتفقد الشرطة تتبع السيارات.",
      whyItMatters: "توليد مفاتيح عشوائية في زمن التشغيل يدمر خوارزمية المطابقة في React، مما يجبر المتصفح على إعادة إنشاء شجرة DOM من الصفر في كل رندر، مؤدياً لفقدان حالة حقول الإدخال وإلغاء التركيز (Focus loss) وتدني الأداء.",
      syntax: "// الصحيح: معرف ثابت ومستقر\n<Card key={item.id} />\n\n// الخاطئ القاتل: مفتاح عشوائي غير مستقر\n<Card key={Math.random()} />",
      simpleExample: `// مصفوفة فئات المنتجات بمعرفات نصية فريدة ومستقرة (IDs)
const categories = [
  { slug: "electronics", label: "إلكترونيات وأجهزة" },
  { slug: "home-kitchen", label: "المنزل والمطبخ" },
  { slug: "books", label: "كتب وروايات" },
  { slug: "sports", label: "رياضة ولياقة" }
];
// مكون أزرار تصنيفات المتجر
function CategoryTabs() {
  // إرجاع شريط التصنيفات
  return (
    // الحاوية الأفقية
    <div className="flex flex-wrap gap-2 p-3 bg-slate-900 rounded-xl">
      {categories.map((cat) => (
        // استخدام slug المستقر والفريد كمفتاح key
        <button 
          key={cat.slug}
          className="px-4 py-2 bg-slate-800 hover:bg-indigo-600 text-slate-200 text-xs font-semibold rounded-lg transition-colors border border-slate-700/60"
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}`,
      advancedExample: `// استعراض مقارنة بين المفاتيح المستقرة والمفاتيح العشوائية الضارة
import { useState } from "react";

// بيانات تجريبية ثابتة
const initialUsers = [
  { uid: "usr-901", name: "عمر الفاروق", role: "مدير عام" },
  { uid: "usr-902", name: "سعاد الشمري", role: "مهندسة جودة" },
  { uid: "usr-903", name: "ماجد العتيبي", role: "مطور واجهات" }
];

export function KeyStabilityDemo() {
  // حالة المكون لتفعيل إعادة التصيير عند الضغط
  const [renderCount, setRenderCount] = useState(0);

  // إرجاع واجهة توضيحية
  return (
    // الحاوية الأساسية
    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white space-y-4">
      {/* زر تحديث يدوي لإظهار استقرار المفاتيح */}
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-base">مقارنة استقرار المفاتيح (Keys)</h4>
        <button 
          onClick={() => setRenderCount((prev) => prev + 1)}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-bold transition-all"
        >
          إعادة تصيير تجريبية (العدد: {renderCount})
        </button>
      </div>

      {/* قائمة تستخدم المفاتيح السليمة المستقرة (uid) */}
      <div className="p-4 bg-emerald-950/20 border border-emerald-800/40 rounded-xl space-y-2">
        <p className="text-xs text-emerald-400 font-bold mb-2">✅ مفاتيح مستقرة (uid) - تحتفظ بالحالة والتركيز:</p>
        {initialUsers.map((user) => (
          // المفتاح مستقر ولا يتغير بتغير renderCount
          <div key={user.uid} className="flex items-center justify-between p-2.5 bg-slate-800/80 rounded-lg text-xs">
            <span className="font-semibold text-slate-200">{user.name}</span>
            <input 
              placeholder="اكتب ملاحظة هنا لاختبار الثبات..."
              className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-slate-200 text-xs w-56 focus:outline-indigo-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "عند الضغط على زر إعادة التصيير عدة مرات، تظل النصوص المكتوبة داخل حقول الإدخال ثابتة كما هي دون فقدان التركيز، لأن React علمت عبر المفتاح المستقر (user.uid) أن نفس العنصر موجود ولم يتغير.",
      commonMistakes: [
        {
          mistake: "توليد المفتاح عشوائياً في كل رندر مثل: key={Math.random()} أو key={crypto.randomUUID()}.",
          why: "في كل مرة يُعاد فيها تصيير المكون، يتم توليد مفتاح جديد تماماً لنفس العنصر، فتعتقد React أن العنصر القديم قد دُمّر وعنصراً جديداً قد وُلد، مما يؤدي لمسح ما كتبه المستخدم في حقول الإدخال وبطء شديد!",
          fix: "إذا كانت البيانات تفتقر لمعرفات، قم بتوليد المعرفات الفريدة مرة واحدة عند إنشاء البيانات وتخزينها، وليس داخل دالة map."
        }
      ],
      bestPractices: [
        "المفتاح الممتاز يأتي من مصدر البيانات نفسه (id من قاعدة البيانات أو رقم فريد ثابت).",
        "لا تدمج بيانات متغيرة داخل المفتاح مثل key={`${item.id}-${new Date().getTime()}`}."
      ],
      infographicCard: {
        type: "rule-badge",
        title: "الشرطان الذهبيان لاختيار key في React",
        rules: [
          "1. الفرادة بين الشركاء (Unique among siblings): لا يجوز لعنصرين في نفس القائمة أن يحملا نفس المفتاح.",
          "2. الاستقرار الدائم (Permanent Stability): يجب أن يحافظ العنصر على نفس المفتاح طوال فترة وجوده في الذاكرة."
        ]
      }
    },
    {
      id: "5.4.h",
      title: "مخاطر استخدام الفهرس كمفتاح",
      englishTerm: "Pitfalls of Using Index as Key (Reordering & State Leaks)",
      description: "تحليل المشكلات الخفية والعيوب القاتلة التي تحدث عند استخدام رقم الفهرس الترتيبي للمصفوفة (index) كخاصية key (مثل key={index}). رغم أنها تعمل ظاهرياً مع القوائم الثابتة غير التفاعلية، إلا أنها تسبب كوارث برمجية وسلوكية فور إضافة عناصر، حذفها، أو إعادة ترتيبها.",
      realLifeAnalogy: "مثل كراسي الانتظار المرقمة في عيادة الطبيب (كرسي 1، كرسي 2، كرسي 3)؛ إذا جلس مريض على كرسي 1 ووضع معطفه عليه، ثم جاء مريض طوارئ وجلس في المقدمة وتراجع الجميع كرسياً للوراء، سيصبح المريض الأصلي على كرسي 2 بينما معطفه ومحفظته ما زالت مرتبطة برقم كرسي 1!",
      whyItMatters: "استخدام index كمفتاح يربط حالة المكون الداخلية (Local State وحقول Input والرسوم المتحركة) بترتيب العنصر وليس بهويته الحقيقية، مما يسبب تسرب نصوص الحقول إلى عناصر أخرى عند الحذف أو الإضافة في الأعلى.",
      syntax: "// تحذير: تجنب هذا النمط مع القوائم القابلة للتعديل والفرز!\n{items.map((item, index) => <Item key={index} />)}",
      simpleExample: `// مثال يوضح متى يُسمح استثنائياً بفهرس index ومتى يُحظر
// قائمة ثابتة جامدة لن تتغير أو يُعاد فرزها إطلاقاً (مسموح استثنائياً)
const staticLinks = ["الرئيسية", "عن الشركة", "الخدمات", "اتصل بنا"];

function StaticNavigation() {
  // إرجاع روابط الترويسة
  return (
    // قائمة أفقية
    <nav className="flex gap-4 p-3 bg-slate-900 rounded-lg text-sm text-slate-300">
      {/* هنا مسموح لأن القائمة جامدة كلياً ولا تحتوي على حقول إدخال أو حذف */}
      {staticLinks.map((link, index) => (
        <span key={index} className="hover:text-white cursor-pointer">
          {link}
        </span>
      ))}
    </nav>
  );
}`,
      advancedExample: `// محاكاة حية لمشكلة تسرب حالة الحقول عند استخدام index في قائمة قابلة للحذف
import { useState } from "react";

export function IndexBugDemonstration() {
  // مصفوفة عناصر قابلة للحذف
  const [tasks, setTasks] = useState([
    { id: "t-1", title: "مراجعة الكود" },
    { id: "t-2", title: "إعداد العرض التقديمي" },
    { id: "t-3", title: "إرسال البريد" }
  ]);

  // دالة لحذف المهمة الأولى في القائمة
  const deleteFirstTask = () => {
    setTasks((prev) => prev.slice(1));
  };

  return (
    <div className="p-6 bg-slate-900 rounded-2xl border border-rose-900/40 text-white space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-rose-400">تجربة حية: كارثة استخدام index كمفتاح</h4>
        <button 
          onClick={deleteFirstTask}
          className="px-3 py-1 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-bold transition-all"
        >
          حذف المهمة الأولى من الأعلى
        </button>
      </div>

      <p className="text-xs text-slate-400">
        اكتب نصاً في الحقل الأول واضغط حذف: ستلاحظ أن النص بقي في السطر الأول وانتقلت القيمة للسطر التالي بالخطأ بسبب index!
      </p>

      {/* قائمة مشوهة تستخدم index عمداً لإيضاح الخلل */}
      <div className="space-y-2">
        {tasks.map((task, index) => (
          // استخدام index كمفتاح يسبب اقتران حقل الإدخال بالترتيب 0 و 1 وليس بالبيانات
          <div key={index} className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg border border-slate-700">
            <span className="text-xs font-mono text-amber-400 w-14">مفتاح: {index}</span>
            <span className="text-sm font-semibold flex-1">{task.title}</span>
            <input 
              placeholder="اكتب هنا ولاحظ ما يحدث عند الحذف..."
              className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-200 w-64"
            />
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "عند حذف المهمة الأولى ذات الفهرس 0، تصبح المهمة الثانية هي صاحبة الفهرس 0، فتعتقد React أن العنصر 0 لم يتغير، فتبقي على نص الإدخال المكتوب فيه بينما تغير العنوان! هذا تشوه مرئي خطير ناتج عن key={index}.",
      commonMistakes: [
        {
          mistake: "الاعتماد على key={index} كحل سريع لإسكات تحذير React Warning: Each child in a list should have a unique key.",
          why: "إسكات التحذير بـ index يخفي المشكلة ولا يحلها، بل يزرع قنابل موقوتة تظهر على شكل أخطاء عشوائية مستعصية عند فرز البيانات أو حذفها.",
          fix: "أضف معرفاً فريداً لكل عنصر في بياناتك من البداية واستخدمه دوماً: key={task.id}."
        }
      ],
      bestPractices: [
        "القاعدة الذهبية: لا تستخدم index كمفتاح إلا إذا تحققت الشروط الثلاثة مجتمعة: 1) القائمة ثابتة تماماً، 2) لا يمكن إعادة ترتيبها أو فرزها أو تصفيتها، 3) عناصر القائمة لا تحتوي على حقول إدخال أو حالة داخلية."
      ],
      infographicCard: {
        type: "comparison-table",
        title: "متى يجوز ومتى يُحظر استخدام index كمفتاح؟",
        headers: ["الحالة المعمارية", "الحكم في React", "النتيجة المتوقعة"],
        rows: [
          ["قائمة ثابتة لا تتغير (مثل روابط الفوتر)", "مقبول كحل مؤقت", "أداء سليم لعدم وجود تعديل أو فرز"],
          ["قائمة تحوي حقول إدخال Inputs", "ممنوع قطعاً ❌", "تسرب النصوص المكتوبة بين الحقول"],
          ["قائمة تدعم الفرز والترتيب (Sorting)", "ممنوع قطعاً ❌", "تخبط في الرسوم المتحركة وإعادة رسم باطلة"],
          ["قائمة تدعم الحذف والإضافة في المقدمة", "ممنوع قطعاً ❌", "حذف بيانات غير مقصودة في واجهة المستخدم"]
        ]
      }
    },
    {
      id: "5.4.i",
      title: "التعامل مع القوائم الفارغة",
      englishTerm: "Empty State Handling in Lists",
      description: "تصميم وتقديم واجهة بديلة مخصصة وجذابة (تُعرف باسم Empty State UI) تظهر للمستخدم عندما تكون مصفوفة البيانات فارغة (items.length === 0). يضمن هذا النمط ألا تظهر الواجهة بيضاء ميتة أو خاوية مما يشعر المستخدم بالضياع والخلل البرمجي.",
      realLifeAnalogy: "مثل متجر ملابس افتتح حديثاً ولم تصل بضاعته بعد؛ بدلاً من ترك الأرفف خاوية والأنوار مطفأة فيظن المشتري أن المتجر مغلق، يضع أصحاب المتجر لافتة أنيقة مكتوباً عليها: 'ترقبوا وصول مجموعتنا الصيفية الجديدة غداً! تصفح الكتالوج عبر الرابط'.",
      whyItMatters: "الواجهات الخاوية تقتل تجربة المستخدم (UX). الحالة الفارغة المدروسة توجه المستخدم للخطوة التالية بوضوح (Call to Action)، مثل زر 'أضف أول مهمة' أو 'استكشف المنتجات الشائعة'.",
      syntax: "{items.length === 0 ? <EmptyState /> : <List items={items} />}",
      simpleExample: `// مكون يقبل مصفوفة الإشعارات
function NotificationsList({ notifications = [] }) {
  // التحقق من حالة القائمة الفارغة أولاً
  if (notifications.length === 0) {
    // إرجاع واجهة القائمة الفارغة الودية
    return (
      // صندوق الحالة الفارغة
      <div className="p-8 text-center bg-slate-900 rounded-xl border border-dashed border-slate-800 text-slate-400">
        {/* أيقونة الحالة الفارغة */}
        <span className="text-4xl block mb-2">🔔</span>
        {/* الرسالة الأساسية */}
        <p className="font-medium text-slate-300">لا توجد إشعارات جديدة حالياً</p>
        {/* نص إرشادي لطيف */}
        <p className="text-xs text-slate-500 mt-1">سنخبرك فور وصول أي تحديث أو رسالة مهمة.</p>
      </div>
    );
  }

  // عرض القائمة عند توفر البيانات
  return (
    <ul className="space-y-2">
      {notifications.map((n) => (
        <li key={n.id} className="p-3 bg-slate-800 rounded-lg text-sm text-white">
          {n.text}
        </li>
      ))}
    </ul>
  );
}`,
      advancedExample: `// مكون متقدم لعرض نتائج البحث مع حالة فارغة متكاملة وزر إعادة تعيين
export function ProductSearchResults({ query, results = [], onResetFilters }) {
  // التحقق من فراغ مصفوفة النتائج بعد عملية البحث
  const hasNoResults = results.length === 0;

  return (
    <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white">
      {/* عنوان النتائج والبحث */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg">نتائج البحث عن: \"{query}\"</h3>
        <span className="text-xs text-slate-400">عثرنا على {results.length} منتج</span>
      </div>

      {/* العرض الشرطي بين الحالة الفارغة التفاعلية أو شبكة المنتجات */}
      {hasNoResults ? (
        // واجهة Empty State متقدمة ومكتملة العناصر
        <div className="flex flex-col items-center justify-center p-12 bg-slate-950/40 rounded-xl border border-slate-800 text-center space-y-3">
          {/* أيقونة بصرية دالة */}
          <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center text-3xl mb-1">
            🔍
          </div>
          {/* العنوان التوضيحي */}
          <h4 className="text-base font-bold text-slate-200">لم نجد أي منتج يطابق بحثك</h4>
          {/* الوصف الإرشادي */}
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            تأكد من كتابة الكلمات بشكل صحيح، أو جرّب استخدام مصطلحات أعمّ، أو قم بإعادة ضبط خيارات التصفية السابقة.
          </p>
          {/* زر دعوة للعمل (Call to Action) ينفذ دالة الإعادة */}
          <button 
            onClick={onResetFilters}
            className="mt-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-900/40"
          >
            إعادة تعيين خيارات البحث والتصفية
          </button>
        </div>
      ) : (
        // شبكة المنتجات في حال وجود بيانات
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((product) => (
            <div key={product.id} className="p-4 bg-slate-800 rounded-xl border border-slate-700/60">
              <h5 className="font-bold text-sm text-slate-100">{product.name}</h5>
              <p className="text-xs text-emerald-400 font-mono mt-1">{product.price} ر.س</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
      output: "عندما تكون مصفوفة النتائج فارغة، تُعرض واجهة Empty State المخصصة التي تحوي الأيقونة، التوجيهات، وزر استعادة الفلاتر بدلاً من ترك مساحة بيضاء فارغة، مما يحافظ على تفاعل واحترافية الموقع.",
      commonMistakes: [
        {
          mistake: "الاعتماد على فحص {items && <List />} للتحقق من وجود عناصر في المصفوفة!",
          why: "في JavaScript، المصفوفة الفارغة [] هي قيمة Truthy! وبالتالي فإن الشرط [].length يتحقق كـ Truthy مع &&، وتُعرض القائمة ولكن بدون أي عناصر فيبدو الموقع مكسوراً.",
          fix: "تحقق دائماً من طول المصفوفة الصريح: {items.length > 0 ? <List /> : <EmptyState />}."
        }
      ],
      bestPractices: [
        "اجعل الحالة الفارغة دائماً إيجابية ومفيدة وتحتوي على زر إجراء واضح (CTA Button).",
        "اضبط قيمة افتراضية لمصفوفة الخصائص (مثل items = []) لتجنب أخطاء cannot read property length of undefined."
      ],
      infographicCard: {
        type: "checklist",
        title: "عناصر الحالة الفارغة المثالية (Empty State Checklist)",
        items: [
          "1. أيقونة أو رسمة بصرية مبهجة تشرح السياق فوراً",
          "2. عنوان صريح يوضح الموقف (لا توجد عناصر حالياً)",
          "3. نص ثانوي خفيف يقترح على المستخدم ماذا يفعل",
          "4. زر دعوة للعمل (CTA) يساعده على إنشاء أول عنصر أو استكشاف البدائل"
        ]
      }
    },
    {
      id: "5.4.j",
      title: "تقسيم واجهة العرض إلى مكونات",
      englishTerm: "Decomposing List UI into Specialized Subcomponents",
      description: "المبدأ الهندسي القائم على فصل مسؤولية عرض القائمة (List Container) عن مسؤولية عرض العنصر الفردي (List Item Component). بدلاً من كتابة كتل JSX عملاقة ومكتظة داخل دالة map، يتم استخراج العنصر المفرد في مكون مخصص، مما يعزز إعادة الاستخدام، تسهيل الاختبار، وتقليل تعقيد الكود.",
      realLifeAnalogy: "مثل طاقم عمل مطعم فاخر؛ المدير (قائد القائمة) مسؤول عن توزيع الطاولات واستلام عدد الزبائن، بينما النادل المخصص (مكون العنصر الفردي) مسؤول عن خدمة طاولة واحدة وتقديم الأطباق وتلبية طلباتها الخاصة دون أن يتدخل في باقي الصالة.",
      whyItMatters: "الدمج بين إدارة القائمة وتفاصيل العنصر الفردي ينتج عنه مكونات عملاقة (God Components) يصعب قراءتها أو تعديلها. الفصل يعطيك كوداً رشيقاً ومكونات جزئية قابلة لإعادة الاستخدام في أماكن مختلفة من التطبيق.",
      syntax: "// نمط التفكيك القياسي\nfunction TodoList({ todos }) {\n  return todos.map(todo => <TodoItem key={todo.id} todo={todo} />);\n}",
      simpleExample: `// 1. المكون الفرعي المتخصص في عرض مستخدم واحد فقط (Item Component)
function UserRow({ user }) {
  // إرجاع سطر المستخدم
  return (
    // عنصر القائمة للسطر الفردي
    <li className="p-3 bg-slate-800 rounded-lg flex items-center justify-between text-sm">
      {/* اسم المستخدم */}
      <span className="font-medium text-slate-100">{user.name}</span>
      {/* دور المستخدم الوظيفي */}
      <span className="text-xs text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded">{user.role}</span>
    </li>
  );
}

// 2. المكون الأب المسؤول عن إدارة القائمة بالكامل (Container Component)
function UsersList({ users = [] }) {
  // إرجاع الحاوية مع تفويض كل عنصر للمكون الفرعي
  return (
    <ul className="space-y-2">
      {users.map((user) => (
        // المفتاح key يوضع دائماً هنا على المكون المستدعى داخل map
        <UserRow key={user.id} user={user} />
      ))}
    </ul>
  );
}`,
      advancedExample: `// نموذج معماري متكامل لتطبيق مدونة تفاعلية مقسم إلى مكونات متخصصة

// أ) المكون الصغير 1: شارة التصنيف
function PostCategoryBadge({ category }) {
  return (
    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
      {category}
    </span>
  );
}

// ب) المكون الصغير 2: بطاقة المقال الفردي المستقلة (PostCard)
export function PostCard({ post, onLike, isLiked }) {
  return (
    <article className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all">
      <div>
        <div className="flex justify-between items-center mb-3">
          <PostCategoryBadge category={post.category} />
          <span className="text-xs text-slate-500 font-mono">{post.readTime} دقائق قراءة</span>
        </div>
        <h4 className="font-bold text-base text-slate-100 mb-2 hover:text-indigo-400 cursor-pointer transition-colors">
          {post.title}
        </h4>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
        <span className="text-slate-400">بقلم: {post.author}</span>
        <button 
          onClick={() => onLike(post.id)}
          className={\`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all font-medium \${
            isLiked ? "bg-rose-500/20 text-rose-400" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }\`}
        >
          <span>{isLiked ? "❤️" : "🤍"}</span>
          <span>{post.likesCount + (isLiked ? 1 : 0)}</span>
        </button>
      </div>
    </article>
  );
}

// ج) المكون الأب المنظم للشبكة وحالات التحميل والفراغ (PostFeed)
export function PostFeed({ posts = [], likedIds = new Set(), onToggleLike }) {
  if (posts.length === 0) {
    return <div className="p-8 text-center text-slate-400">لا توجد مقالات منشورة بعد.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        // وضع key على PostCard الأب وتمرير الخصائص المحددة
        <PostCard 
          key={post.id} 
          post={post} 
          isLiked={likedIds.has(post.id)}
          onLike={onToggleLike}
        />
      ))}
    </div>
  );
}`,
      output: "يقوم المكون الأب PostFeed بالتركيز على التكرار وتوزيع الشبكة، بينما يركز PostCard على تفاصيل المقال، مما يتيح إعادة استخدام PostCard في الشريط الجانبي أو صفحة المفضلة دون تكرار أي سطر برمجي.",
      commonMistakes: [
        {
          mistake: "وضع خاصية key داخل المكون الفرعي نفسه (داخل PostCard) بدلاً من استدعائه في دالة map!",
          why: "تحتاج React إلى رؤية خاصية key في المكان الذي يتم فيه التكرار الفعلي داخل دالة map لكي تتمكن من فرز العناصر الشقيقة.",
          fix: "ضع key دائماً حيث تُستدعى الدالة map: <PostCard key={post.id} ... /> وليس داخل تعريف دالة PostCard."
        }
      ],
      bestPractices: [
        "طبق مبدأ المسؤولية الفردية (Single Responsibility Principle)؛ اجعل المكون الأب مسؤولاً عن القائمة، والمكون الابن مسؤولاً عن تفاصيل العنصر.",
        "تجنب تمرير خصائص ضخمة غير لازمة إلى المكون الفرعي؛ مرر فقط ما يحتاجه فعلياً ليعمل بكفاءة."
      ],
      infographicCard: {
        type: "hierarchy-tree",
        title: "هندسة تجزئة القوائم إلى مكونات متخصصة",
        tree: [
          "📦 PostFeed (المكون الأب الحاوي للشبكة والتكرار)",
          "   ├── 🧩 PostCard (key=1) (مكون فرعي للمقال الأول)",
          "   │    └── 🏷️ PostCategoryBadge (شارة التصنيف)",
          "   ├── 🧩 PostCard (key=2) (مكون فرعي للمقال الثاني)",
          "   │    └── 🏷️ PostCategoryBadge (شارة التصنيف)",
          "   └── 🧩 PostCard (key=3) (مكون فرعي للمقال الثالث)",
          "        └── 🏷️ PostCategoryBadge (شارة التصنيف)"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q5-4-1",
      question: "ماذا سيظهر على شاشة المتصفح عند تنفيذ الكود التالي: const count = 0; return <div>{count && <Badge />}</div>; ؟",
      options: [
        "لن يظهر أي شيء وتبقى الشاشة فارغة تماماً",
        "سيظهر الرقم 0 كعنصر نصي مطبوع على الشاشة",
        "ستظهر شارة <Badge /> لأن الصفر قيمة مقبولة",
        "سيحدث خطأ برمجي أحمر Uncaught Error"
      ],
      correctAnswer: 1,
      explanation: "في لغة JavaScript، عندما يكون الطرف الأيسر لمعامل && صفراً (0)، فإن التعبير يرجع 0 مباشرة (Falsy number). ولأن React تطبع الأرقام كنصوص، فإنها ستطبع الرقم 0 على الشاشة! لتفادي ذلك، استخدم دائماً count > 0."
    },
    {
      id: "q5-4-2",
      question: "أين يجب وضع خاصية key تحديداً عند استخدام دالة map لتكرار مكون مخصص؟",
      options: [
        "داخل المكون الفرعي على أول وسم داخلي فيه",
        "على المكون الأب المستدعى مباشرة داخل دالة map",
        "في كائن المكون الأصلي props.key",
        "خاصية key اختيارية تماماً ولا فائدة لها سوى إزالة التحذيرات"
      ],
      correctAnswer: 1,
      explanation: "يجب وضع key دائماً على العنصر أو المكون المرجع مباشرة في حلقة map لكي تتمكن خوارزمية المطابقة (Reconciliation) في React من تمييز العناصر الشقيقة أثناء التحديث."
    },
    {
      id: "q5-4-3",
      question: "لماذا يُعد استخدام رقم الفهرس الترتيبي key={index} ممارسة خطيرة مع القوائم الديناميكية؟",
      options: [
        "لأنه يستهلك مساحة تخزين ضخمة في الذاكرة العشوائية",
        "لأنه يجعل شجرة العناصر ترتبط بترتيب العرض وليس بالهوية، مما يسبب تسرب نصوص الحقول وأخطاء في الحذف والفرز",
        "لأن محرك المتصفح يمنع استخدام الأرقام كمفاتيح برمجية",
        "لأنه يمنع استدعاء دوال JavaScript العادية داخل المكون"
      ],
      correctAnswer: 1,
      explanation: "المفتاح يعبر عن الهوية الحقيقية؛ عند استخدام index يتغير رقم العنصر عند الحذف أو إضافة عناصر في المقدمة، فتعتقد React أن العنصر هو ذاته، مما يخلط بين بيانات حقول الإدخال والرسوم المتحركة."
    }
  ],
  exercise: {
    id: "ex5-4",
    title: "تطبيق متجر الإلكترونيات الذكي: تصفية، مفاتيح مستقرة، وحالة فارغة",
    description: "المطلوب بناء مكون React تفاعلي باسم SmartElectronicsStore يعرض قائمة منتجات تقنية، مع توفير أزرار لتصفية المنتجات حسب التصنيف (الكل، هواتف، حواسيب، ملحقات)، واستخدام مفاتيح فريدة ومستقرة، وتوفير واجهة حالة فارغة (Empty State) تفاعلية وزر لإلغاء التصفية، مع تفكيك الكود إلى مكون أب ومكون فرعي لكل بطاقة منتج.",
    starterCode: `// بيانات المنتجات الأولية
const PRODUCTS = [
  { id: "prod-101", name: "هاتف آيفون 16 برو", category: "phones", price: 4699, inStock: true },
  { id: "prod-102", name: "حاسوب ماك بوك برو M3", category: "laptops", price: 8299, inStock: false },
  { id: "prod-103", name: "سماعة سوني عازلة للصوت", category: "accessories", price: 1199, inStock: true },
  { id: "prod-104", name: "هاتف سامسونج S25 ألترا", category: "phones", price: 4499, inStock: true }
];

export function SmartElectronicsStore() {
  // اكتب كود الحالة والتصفية هنا
  return (
    <div>
      {/* اعرض أزرار التصنيفات والمنتجات */}
    </div>
  );
}`,
    hints: [
      "استخدم حالة useState لحفظ التصنيف المحدد حالياً (مثلاً 'all' أو 'phones').",
      "استخدم دالة filter لتصفية المنتجات قبل استخدام دالة map.",
      "إذا كان طول المصفوفة المصفاة 0، اعرض مكون الحالة الفارغة مع زر يعيد التصنيف إلى 'all'.",
      "مرر كل منتج إلى مكون فرعي مخصص مثل ProductCard وضع خاصية key={product.id} عليه."
    ],
    solution: `import { useState } from "react";

// بيانات المنتجات النموذجية
const PRODUCTS = [
  { id: "prod-101", name: "هاتف آيفون 16 برو ماكس", category: "phones", price: 4699, inStock: true },
  { id: "prod-102", name: "حاسوب ماك بوك برو M3 Max", category: "laptops", price: 8299, inStock: false },
  { id: "prod-103", name: "سماعة سوني WH-1000XM5", category: "accessories", price: 1199, inStock: true },
  { id: "prod-104", name: "هاتف سامسونج جالاكسي S25 ألترا", category: "phones", price: 4499, inStock: true },
  { id: "prod-105", name: "حاسوب ديل XPS 15", category: "laptops", price: 6599, inStock: true }
];

// تصنيفات المتجر المتاحة
const CATEGORIES = [
  { id: "all", label: "جميع المنتجات" },
  { id: "phones", label: "الهواتف الذكية" },
  { id: "laptops", label: "الحواسيب المحمولة" },
  { id: "accessories", label: "الملحقات والسماعات" },
  { id: "gaming", label: "منصات الألعاب" } // فئة فارغة لتجربة الـ Empty State
];

// 1. المكون الفرعي المتخصص لعرض بطاقة المنتج الواحدة
function ProductCard({ product }) {
  return (
    <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 flex flex-col justify-between hover:border-indigo-500 transition-all">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-sm text-slate-100">{product.name}</h4>
          {product.inStock ? (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400">متوفر</span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400">نفد</span>
          )}
        </div>
        <p className="text-lg font-black text-indigo-400 font-mono">{product.price} ر.س</p>
      </div>
      <button 
        disabled={!product.inStock}
        className={\`mt-4 w-full py-2 rounded-lg text-xs font-bold transition-all \${
          product.inStock 
            ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-900/40" 
            : "bg-slate-700 text-slate-500 cursor-not-allowed"
        }\`}
      >
        {product.inStock ? "إضافة إلى السلة 🛒" : "غير متوفر حالياً"}
      </button>
    </div>
  );
}

// 2. المكون الرئيسي للمتجر
export function SmartElectronicsStore() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // تصفية المنتجات بناءً على التصنيف المحدد
  const filteredProducts = selectedCategory === "all" 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 text-white space-y-6 font-sans">
      {/* ترويسة المتجر */}
      <div className="flex justify-between items-center pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-2xl font-black text-white">متجر الإلكترونيات الذكي</h2>
          <p className="text-xs text-slate-400 mt-1">تطبيق تفاعلي يجسد عرض القوائم، المفاتيح المستقرة، والحالة الفارغة</p>
        </div>
        <span className="text-xs font-mono bg-slate-800 px-3 py-1.5 rounded-lg text-indigo-300">
          عدد المعروض: {filteredProducts.length}
        </span>
      </div>

      {/* أزرار التصفية الفئوية */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all border \${
              selectedCategory === cat.id
                ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-900/50"
                : "bg-slate-800/80 border-slate-700/60 text-slate-300 hover:bg-slate-800"
            }\`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* عرض المنتجات أو الحالة الفارغة */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center bg-slate-950/60 rounded-xl border border-dashed border-slate-800 space-y-3">
          <span className="text-5xl block">📦</span>
          <h3 className="font-bold text-base text-slate-200">لا توجد منتجات في هذا القسم حالياً</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            لم يتم إضافة أجهزة تابعة لهذا التصنيف بعد؛ يمكنك العودة إلى عرض جميع المنتجات بضغطة زر.
          </p>
          <button
            onClick={() => setSelectedCategory("all")}
            className="mt-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all"
          >
            عرض كافة المنتجات
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}`
  },
  infographic: {
    title: "الخارطة الشاملة لعرض البيانات والقوائم في React",
    description: "الدليل البصري المتكامل لتقنيات JSX، العرض الشرطي، المفاتيح المستقرة وتجنب الثغرات.",
    sections: [
      {
        heading: "1. أنماط العرض الشرطي",
        bullets: [
          "Early Return (if): ممتاز لشاشات التحميل الكاملة ورسائل الخطأ القاتلة.",
          "Ternary (؟ :): مثالي للتبديل بين حالتين متضادتين (متوفر / غير متوفر).",
          "Short-Circuit (&&): ممتاز للشارات والإشعارات التي لا بديل لها عند الغياب.",
          "تحذير الصفر: استخدم دائماً count > 0 مع && لمنع طباعة الرقم 0."
        ]
      },
      {
        heading: "2. الأصول الهندسية للمفاتيح (keys)",
        bullets: [
          "المفتاح هوية وليس ترتيباً: يحدد مكان العنصر في الذاكرة وليس موضعه المرئي.",
          "تجنب key={index}: يسبب تسرب نصوص الحقول وتشوه الفرز والحذف.",
          "المفتاح المستقر: يأتي من مصدر البيانات (id أو uuid) ولا يتغير في كل رندر.",
          "مكان المفتاح: يوضع دائماً على العنصر الأب المباشر داخل استدعاء دالة map."
        ]
      },
      {
        heading: "3. تجزئة القوائم وتجربة المستخدم",
        bullets: [
          "فصل الأب عن الابن: List Container لإدارة البيانات و ListItem للعرض النقي.",
          "الحالة الفارغة (Empty State): تقديم شاشة إرشادية بديلة بزر تفاعلي عند فراغ المصفوفة.",
          "استخدام map بدلاً من forEach: لأن الأولى ترجع عناصر JSX بينما الثانية ترجع undefined."
        ]
      }
    ]
  }
};
