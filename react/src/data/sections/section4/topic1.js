// src/data/sections/section4/topic1.js
// الموضوع 1: مقدمة إلى React (Introduction to React & Philosophy)

export const SECTION_4_TOPIC_1 = {
  id: "4.1",
  title: "مقدمة إلى React",
  englishTitle: "Introduction to React",
  description: "المدخل الرسمي لعالم React: فهم فلسفة بناء الواجهات، التفكير بطريقة التصريح Declarative، تقسيم الواجهة إلى مكونات Components، شجرة المكونات Component Tree، ودور محرك React DOM والإصدارات الحديثة React 18 و React 19.",
  icon: "Atom",
  subtopics: [
    {
      id: "4.1.a",
      title: "ما هي مكتبة React",
      englishTitle: "What is React? (A JavaScript Library for Building User Interfaces)",
      definition: "رياكت (React.js) هي مكتبة برمجية مفتوحة المصدر مبنية بلغة JavaScript طورتها شركة Facebook (Meta) عام 2013، مخصصة حصرياً لبناء واجهات المستخدم (User Interfaces - UI) التفاعلية والسريعة لتطبيقات الويب.",
      analogy: "تخيل أن بناء صفحة ويب قديمة هو مثل صناعة تمثال من الصلصال: إذا أردت تعديل يد التمثال، تضطر لإعادة تشكيل وتلطيخ التمثال كله بيديك. بينما React هي مثل مكعبات 'الليجو' (Lego): تبني الواجهة من قطع مكعبات مستقلة، وإذا أردت تغيير قطعة، تفكها وتركب قطعة جديدة في ثانية دون لمس باقي القلعة!",
      why: "قبل React، كان تحديث صفحة الويب يتطلب تعديلاً يدوياً مضنياً لشجرة الـ DOM بواسطة JavaScript العادية أو jQuery. مع نمو حجم التطبيقات، أصبح تتبع التعديلات وتحديث الشاشة كابوساً برمجياً مليئاً بالأخطاء والبطء. React حلت هذا الكابوس بجعل تحديث الواجهة تلقائياً وسريعاً وخالياً من الفوضى.",
      terms: [
        { term: "React.js", pronunciation: "رياكت جي إس", meaning: "مكتبة JavaScript الرسمية لبناء واجهات المستخدم" },
        { term: "User Interface (UI)", pronunciation: "يوزر إنترفيس", meaning: "واجهة المستخدم؛ الأزرار والشاشات التي يتفاعل معها الزائر" },
        { term: "Open Source", pronunciation: "أوبن سورس", meaning: "مفتوح المصدر ومتاح مجاناً للمطورين حول العالم" },
        { term: "Component-Based", pronunciation: "كومبوننت بيسد", meaning: "معمارية برمجية قائمة على تقسيم الشاشة إلى مكونات مستقلة" }
      ],
      syntax: "// المفهوم الأساسي لمكون React: مجرد دالة JS تعيد واجهة\nfunction WelcomeBanner() {\n  return <h1>أهلاً بك في عالم React!</h1>;\n}",
      executionFlow: "المطور يكتب كود المكون ➔ Babel/Vite يترجم JSX إلى دوال _jsx ➔ محرك React يبني شجرة الـ Virtual DOM في الذاكرة ➔ عند تحديث البيانات تحسب خوارزمية Diffing التعديل الصافي فقط ➔ دفع التعديلات للـ Real DOM دون إعادة رسم الشاشة بالكامل.",
      mentalModel: "معادلة React الذهبية: UI = f(State). بدلاً من أن تتتبع أين يوجد الزر في الـ DOM وكيف تعدل لونه بنفسك، أنت فقط تصف كيف يجب أن تبدو الواجهة عندما تكون البيانات X. وعندما تتغير البيانات إلى Y، يتكفل محرك React بنقل الواجهة من الحالة الأولى للثانية تلقائياً بأقل عدد من لمسات الـ DOM الحقيقية.",
      productionPitfalls: [
        "الاعتقاد بأن React إطار عمل كامل (Framework) ومحاولة البحث عن خدمات الاتصال بالخادم والتوجيه بداخلها مسبقاً، بينما هي مكتبة عرض نقية تتكامل بمرونة مع منظومة الويب.",
        "تعديل الـ DOM الحقيقي يدوياً بواسطة document.getElementById داخل مشاريع React، مما يكسر مزامنة شجرة الـ Virtual DOM ويحدث أخطاء تضارب عشوائية.",
        "بناء مكونات عملاقة تجمع كافة منطق التطبيق في ملف واحد بدلاً من تقسيمها إلى مكونات صغيرة يعاد استخدامها."
      ],
      performanceSecrets: [
        "الاستفادة من الـ Component-Based Architecture لعزل التحديثات؛ بحيث يعاد تصيير المكون الذي تغيرت بياناته فقط دون إعادة تصيير الصفحة بأكملها.",
        "الاعتماد على React Compiler في إصدار React 19 لحفظ مراجع المكونات تلقائياً وتفادي إعادة الحسابات الزائدة.",
        "تقسيم شجرة المكونات وتطبيق التحميل الكسول (Lazy Loading) للشاشات الكبيرة لخفض وقت التحميل الأولي لأقل من ثانية واحدة."
      ],
      headToHeadComparison: {
        oldWay: "استخدام جافاسكريبت العادية أو jQuery والتعديل المباشر على DOM يدوياً (Imperative UI)، مما يؤدي لكود سباغيتي يستحيل صيانته عند نمو التطبيق.",
        modernWay: "برمجة تصريحية نقية (Declarative UI) قائمة على المكونات وحسابات الـ Virtual DOM الصاروخية.",
        verdict: "توفير أكثر من 70% من وقت التطوير، واختفاء أخطاء التزامن اليدوي، وقابلية صيانة لا نهائية للمشاريع الضخمة."
      },
      interviewPrep: {
        question: "سؤال المقابلات: لماذا تصنف React كمكتبة (Library) وليس كإطار عمل (Framework) مثل Angular؟ وما الميزة المعمارية لهذا التصنيف في المشاريع الكبرى؟",
        answer: "لأن React تركز بنسبة 100% فقط على طبقة العرض (View Layer) وإدارة واجهة المستخدم دون فرض معمارية محددة لقواعد البيانات أو مسارات الروابط أو جلب البيانات. هذه المرونة تتيح للشركات الكبرى دمج React تدريجياً في مشاريع قائمة، واختيار أفضل أدوات المنظومة بحرية تامة دون التقيد بقرارات الإطار الصارمة.",
        insiderTip: "احرص على ذكر مبدأ (Inversion of Control): في الإطار (Framework) هو من يستدعي كودك، بينما في المكتبة (Library) أنت من تتحكم وتستدعي وظائفها متى شئت."
      },
      enterpriseCaseStudy: {
        company: "Facebook & Instagram Complete Overhaul",
        story: "ابتكر المهندس Jordan Walke مكتبة React عام 2011 لحل أزمة تعقيد واجهة فيسبوك (Facebook Ads والـ Newsfeed)، حيث كانت التنبيهات والأزرار تتضارب وتتعطل باستمرار مع كثرة الأحداث. بعد تطبيق React، انخفضت أخطاء عدم تزامن الواجهات بنسبة 95% وأصبحت واجهات إنستغرام وفيسبوك فائقة السلاسة لملايين المستخدمين في وقت واحد.",
        takeaway: "البرمجة التصريحية والمكونات المعزولة هي الحل الوحيد لإدارة واجهات المستخدم فائقة التعقيد."
      },
      deepDiveFaqs: [
        {
          q: "ما معنى أن React مكتبة تصريحية (Declarative) وليست إجرائية (Imperative)؟",
          a: "في الأسلوب الإجرائي تشرح للمتصفح 'كيف' يفعل كل خطوة (اذهب للعنصر، غير لونه، احذف الكلاس القديم). أما في الأسلوب التصريحي فتقول لـ React 'ماذا' تريد أن يظهر فقط بناءً على البيانات، وهي تتكفل بكافة خطوات التنفيذ خلف الكواليس."
        },
        {
          q: "هل React 19 متوافقة مع المشاريع المكتوبة بإصدارات سابقة مثل React 18؟",
          a: "نعم، تحتفظ React دائماً بالتوافقية العكسية العالية، وتضيف ميزات جديدة اختيارية مثل useActionState و useOptimistic ودعم الـ React Compiler دون كسر الأكواد السابقة."
        }
      ],
      handsOnChallenge: {
        task: "قم بإنشاء مكون بطاقة مستخدم (UserCard) يستقبل الخصائص (Props: name, role, avatar) ويعرض شارة حالة الحساب بلون أخضر إذا كان نشطاً أو رمادي إذا كان معطلاً.",
        hint: "// تلميح للتحدي:\n// 1. استخدم دالة مكون وظيفي تأخذ props كمعامل.\n// 2. استخدم الأسلوب التصريحي في التلوين الشرطي.\n// 3. صدّر المكون باستخدام export default."
      },
      codeSimple: `// استيراد React (في بيئة المكونات الحديثة)
// مكون React وظيفي بسيط يمثل بطاقة ترحيب
function GreetingCard() {
  // إرجاع واجهة المستخدم بصيغة تشبه HTML
  return (
    <div className="card">
      <h2>مرحباً بك في عالم React 19! ⚛️</h2>
      <p>أول مكون تبرمجه بأسلوب المكونات الحديثة.</p>
    </div>
  );
}

// تصدير المكون ليعاد استخدامه في أي مكان بالتطبيق
export default GreetingCard;`,
      codeAdvanced: `// مثال يعكس فلسفة React: الواجهة كدالة تعتمد على البيانات
// UI = f(data)
function UserBadge({ username, role, isOnline }) {
  return (
    <div className="badge-container">
      <span className="name">{username}</span>
      <span className="role">({role})</span>
      {/* إظهار حالة الاتصال شرطياً وتلقائياً */}
      <span className={isOnline ? 'status-green' : 'status-gray'}>
        {isOnline ? '🟢 متصل الآن' : '⚪ غير متصل'}
      </span>
    </div>
  );
}

// استخدام نفس المكون ثلاث مرات ببيانات مختلفة في شجرة واحدة
function TeamList() {
  return (
    <section>
      <UserBadge username="أحمد علي" role="قائد الفريق" isOnline={true} />
      <UserBadge username="سارة خالد" role="مهندسة واجهات" isOnline={true} />
      <UserBadge username="عمر فاروق" role="مصمم تجربة" isOnline={false} />
    </section>
  );
}`,
      output: `أحمد علي (قائد الفريق) 🟢 متصل الآن\nسارة خالد (مهندسة واجهات) 🟢 متصل الآن\nعمر فاروق (مصمم تجربة) ⚪ غير متصل`,
      mistakes: [
        {
          wrong: `// اعتبار React إطار عمل كامل متكامل مثل Angular\n// "React تحتوي تلقائياً على نظام توجيه الروابط Routing وإدارة قواعد البيانات!" // ❌ خطأ شائع!`,
          correct: `// React هي "مكتبة واجهات" فقط (View Library)؛ وأنت من يختار مكتبات التوجيه (React Router) وحزم الاتصال بالخادم بحرية تامة ✅`,
          explanation: "React تركز بنسبة 100% على طبقة العرض (View Layer) وإدارة الواجهة، وتمنحك الحرية الكاملة لاختيار باقي أدوات مشروعك بنفسك."
        }
      ],
      bestPractices: [
        "فكر في كل جزء من واجهة موقعك كقطعة ليجو مستقلة يمكن إعادة استخدامها.",
        "تذكر المعادلة الذهبية لـ React: الواجهة هي مجرد انعكاس لحالة البيانات الحالية (UI = f(State)).",
        "احرص على تسمية مكونات React بحرف كبير في البداية دائماً (PascalCase مثل `UserProfile`)."
      ],
      infographic: {
        title: "إنفوجرافيك: هوية React في عالم تطوير الويب",
        concept: "What is React Core Identity",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 ما هي مكتبة React.js باختصار؟                │
└─────────────────────────────────────────────────────────────┘
  • المطور:      شركة Meta (Facebook) عام 2013
  • التصنيف:     مكتبة JavaScript لبناء واجهات المستخدم (UI Library)
  • الفلسفة:     UI = f(State)  ──> الواجهة تتبع البيانات تلقائياً
  • المعمارية:   مبنية على المكونات (Component-Based)
  • الأداء:      تحديث فائق السرعة عبر الـ Virtual DOM`
      }
    },
    {
      id: "4.1.b",
      title: "لماذا نستخدم React",
      englishTitle: "Why React? (Ecosystem, Performance & Industry Standard)",
      definition: "نستخدم React لأنها المعيار الأول والأكثر طلباً في سوق العمل العالمي لتطوير الواجهات، وتوفر سرعة خارقة في تحديث الشاشة، ونظاماً بيئياً عملاقاً من المكتبات الجاهزة، ومجتمع دعم هو الأكبر في التاريخ، وإمكانية نقل مهاراتك لبناء تطبيقات الهواتف الذكية عبر React Native.",
      analogy: "تخيل أنك تريد شراء سيارة: يمكنك شراء سيارة من شركة نادرة لا يعرف ميكانيكي مدينتك كيف يصلحها ولا توجد لها قطع غيار، أو شراء سيارة تويوتا عالمية تجد قطع غيارها وخبراء صيانتها في كل شارع بالعالم! React هي تويوتا عالم الويب: موثوقة، مستقرة، وكل شركات العالم تبحث عن مبرمجيها.",
      why: "تختصر عليك شهوراً من العمل؛ فبدلاً من إعادة اختراع العجلة وبرمجة الجداول التفاعلية والقوائم ونوافذ التنبيهات من الصفر، تجد آلاف المكونات الجاهزة والمجربة على مدار أكثر من 10 سنوات من قبل عمالقة التقنية (Netflix, Airbnb, Twitter, Instagram).",
      terms: [
        { term: "Ecosystem", pronunciation: "إيكوسيستم", meaning: "النظام البيئي البرمجي من أدوات ومكتبات وحزم داعمة" },
        { term: "Industry Standard", pronunciation: "إندستري ستاندرد", meaning: "المعيار المهني المعتمد والمفضل في كبرى الشركات العالمية" },
        { term: "React Native", pronunciation: "رياكت نيتف", meaning: "إطار عمل لبناء تطبيقات الهواتف الذكية (iOS و Android) بنفس كود React" },
        { term: "Job Market Demand", pronunciation: "جوب ماركت ديماند", meaning: "الطلب الهائل على وظائف مطوري React في سوق العمل" }
      ],
      syntax: "// قوة React: مكون واحد يُكتب مرة واحدة ويستخدم في أي شاشة\n<ReusableButton variant=\"primary\" onClick={handleSave}>\n  حفظ البيانات\n</ReusableButton>",
      codeSimple: `// ميزة React العظمى: مكون زر قابل لإعادة الاستخدام في 100 صفحة
function AppButton({ text, color = 'blue' }) {
  // تصميم الزر يعتمد كلياً على الـ Props الممررة له
  return (
    <button style={{ backgroundColor: color, color: 'white', padding: '10px 16px', borderRadius: '8px', border: 'none' }}>
      {text}
    </button>
  );
}

// في الصفحة نستخدمه بعدة ألوان ووظائف بسهولة مذهلة
function ActionMenu() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <AppButton text="تأكيد الشراء" color="#10b981" />
      <AppButton text="تعديل السلة" color="#3b82f6" />
      <AppButton text="إلغاء الطلب" color="#ef4444" />
    </div>
  );
}`,
      codeAdvanced: `// محاكاة لسر قوة React: ربط واجهة البحث بحالة البيانات دون لمس الـ DOM
// لاحظ كيف يتغير الجدول تلقائياً بمجرد تحديث متغير الحالة state!
function LiveSearchDemo() {
  // مصفوفة المنتجات الأصلية
  const allProducts = ['لابتوب ديل', 'لابتوب أبل ماك بوك', 'شاشة سامسونج', 'سماعات سوني'];

  // في React: نحدد الكلمة المبحوث عنها، والواجهة تُصنع تلقائياً
  const searchTerm = 'لابتوب';

  // تصفية وظيفية فورية
  const filtered = allProducts.filter(item => item.includes(searchTerm));

  return (
    <div>
      <h3>نتائج البحث عن: "{searchTerm}"</h3>
      <ul>
        {filtered.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}`,
      output: `نتائج البحث عن: "لابتوب"\n• لابتوب ديل\n• لابتوب أبل ماك بوك`,
      mistakes: [
        {
          wrong: `// ظن أن تعلم React يقتصر على مواقع الويب فقط\n// "إذا تعلمت React سأحتاج لتعلم لغة Swift و Java لبناء تطبيقات الموبايل!" // ❌ غير صحيح!`,
          correct: `// مبدأ React الشهير: "Learn Once, Write Anywhere" (تعلم المبادئ مرة واحدة، وابنِ للويب، والموبايل بـ React Native، وسطح المكتب بـ Electron) ✅`,
          explanation: "نفس المفاهيم (JSX, Components, Props, State, Hooks) التي تتعلمها هنا في الويب هي ذاتها المستخدمة حرفياً في برمجة تطبيقات الآيفون والأندرويد بـ React Native."
        }
      ],
      bestPractices: [
        "استفد من النظام البيئي الغني (Ecosystem) لـ React ولا تعيد بناء أدوات شائعة متوفرة بجودة عالية.",
        "تعلم أساسيات React النقية أولاً بعمق قبل التسرع في استخدام المكتبات الخارجية المعقدة.",
        "حافظ على بساطة المكونات لضمان أقصى قدر من القابلية لإعادة الاستخدام والصيانة."
      ],
      infographic: {
        title: "إنفوجرافيك: الأسباب الستة لاكتساح React عالم البرمجة",
        concept: "Why Developers Love React",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 لماذا يفضل المطورون والشركات React؟          │
└─────────────────────────────────────────────────────────────┘
  1. معمارية المكونات:       كود مجزأ، نظيف، وقابل لإعادة الاستخدام 🧩
  2. السرعة الفائقة:         تحديث ذكي للشاشة عبر الـ Virtual DOM ⚡
  3. التفكير التصريحي:       أنت تصف "ماذا تريد" وReact تدير الـ DOM 🎨
  4. أكبر مجتمع دعم:         ملايين الحلول والمكتبات الجاهزة في العالم 🌐
  5. الاستثمار المستقبلي:     الأكثر طلباً وتفضيلاً في سوق العمل والرواتب 💼
  6. الويب والموبايل:        تعلم React للويب وابنِ هواتف بـ React Native 📱`
      }
    },
    {
      id: "4.1.c",
      title: "الفرق بين المكتبة وإطار العمل",
      englishTitle: "Library vs Framework: The Inversion of Control",
      definition: "المكتبة (Library) هي مجموعة من الدوال والأدوات المساعدة التي تستدعيها أنت وقتما تشاء وتتحكم بها بحرية كاملة (أنت من يقود السيارة). بينما إطار العمل (Framework) يفرض عليك هيكلاً صارماً وقواعد محددة لكتابة وتسمية الملفات، ويقوم الإطار باستدعاء كودك والتحكم بمساره (هو من يقود وأنت مجرد راكب). React هي مكتبة.",
      analogy: "تخيل شراء منزل:\n1. المكتبة (Library): مثل أن تشتري أثاثاً من متجر IKEA؛ تشتري طاولة تضعها في الصالة، وسريراً تضعه في الغرفة، وأنت صاحب القرار الكامل في ترتيب منزلك وألوانه.\n2. إطار العمل (Framework): مثل أن تستأجر شقة فندقية مفروشة بالكامل بقواعد صارمة: السرير ملتصق بالأرض، ممنوع تغيير مكان التلفاز، ويجب أن تتناول طعامك في المكان الذي حددوه لك بالضبط!",
      why: "معرفة هذا الفرق يزيل اللبس عند مقارنة React بأطر عمل مثل Angular أو Next.js؛ فهو يوضح لك لماذا تتميز React بمرونة مطلقة تسمح بدمجها في أي مشروع قائم (حتى لو كان صفحة HTML بسيطة) دون إجبارك على إعادة كتابة المشروع كله.",
      terms: [
        { term: "Library", pronunciation: "لايبراري", meaning: "مكتبة برمجية؛ أداة تستدعيها في كودك للقيام بمهمة محددة" },
        { term: "Framework", pronunciation: "فريم وورك", meaning: "إطار عمل؛ هيكل ونظام صارم هو من يستدعي كودك" },
        { term: "Inversion of Control (IoC)", pronunciation: "إنفيرجن أوف كونترول", meaning: "انقلاب السيطرة؛ المفهوم الفارق بين استدعائك للمكتبة أو استدعاء الإطار لك" },
        { term: "Opinionated vs Unopinionated", pronunciation: "أوبينيونيتد", meaning: "متحيز يفرض عليك خيارات محددة مقابل مرن يترك لك الخيار" }
      ],
      syntax: "// المكتبة (React): أنت تستدعي دوالها بحرية في أي ملف\nimport { useState } from 'react';\n\n// إطار العمل (Next.js / Angular): يفرض هيكل ملفات صارم\n// مجلد app/page.jsx هو الصفحة تلقائياً؛ لا يمكنك تغيير قواعده!",
      codeSimple: `// مرونة React كمكتبة: يمكنك استدعاء دالة React داخل كود JS عادي
function SimpleCounter() {
  // أنت من يقرر كيف تبني هذه الدالة وأين تضعها
  const count = 5;

  return (
    <div>
      <p>العداد الحالي: {count}</p>
    </div>
  );
}

export default SimpleCounter;`,
      codeAdvanced: `// محاكاة معمارية لمفهوم "انقلاب السيطرة" (Inversion of Control)
// 1. أسلوب المكتبة (أنت من يستدعي الدالة وقتما تريد):
function useAsLibrary() {
  console.log('أنا المطور، وأنا من يستدعي مكتبة التنسيق الآن بحريتي:');
  const formatted = Math.round(15.78);
  console.log('الناتج:', formatted);
}

// 2. أسلوب إطار العمل (الإطار هو من يدير دورة الحياة ويستدعي كودك):
const miniFramework = {
  run(userCallback) {
    console.log('الإطار يقوم بتهيئة بيئة التشغيل وفحص الأمان أولاً...');
    // الإطار يستدعي كودك في اللحظة التي يراها هو مناسبة!
    userCallback();
    console.log('الإطار يغلق الاتصالات وينظف الذاكرة.');
  }
};

miniFramework.run(() => {
  console.log('👉 كود المطور نُفذ بتوجيه واستدعاء من الإطار!');
});`,
      output: `الإطار يقوم بتهيئة بيئة التشغيل وفحص الأمان أولاً...\n👉 كود المطور نُفذ بتوجيه واستدعاء من الإطار!\nالإطار يغلق الاتصالات وينظف الذاكرة.`,
      mistakes: [
        {
          wrong: `// الشكوى من أن React لا توفر حلولاً مدمجة للـ Routing وإدارة النماذج افتراضياً\n// "React ناقصة وغير مكتملة لأنها لا تحتوي على راوتر مدمج!" // ❌ سوء فهم لطبيعة المكتبات!`,
          correct: `// ميزة React أنها مكتبة خفيفة ومرنة وغير مقيدة (Unopinionated)؛ يمكنك استخدام React Router أو TanStack Router أو بناء راوترك الخاص بحرية كاملة ✅`,
          explanation: "المكتبات صُممت لتكون خفيفة ومركزة؛ وإذا أردت إطار عمل مبنياً فوق React يحتوي على كل شيء مدمجاً (Routing, SSR, API routes) يمكنك استخدام Next.js أو Remix."
        }
      ],
      bestPractices: [
        "استغل مرونة React في اختيار أفضل الأدوات التي تناسب حجم مشروعك بالتحديد.",
        "إذا كان مشروعك ضخماً ويحتاج لمعايير موحدة لفريق عمل كبير، فكر في اعتماد إطار عمل مبني فوق React مثل Next.js.",
        "تذكر دائماً: في React أنت المتحكم الأول بهيكل ملفاتك وطريقة تنظيم مشروعك."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة المكتبة وإطار العمل وانقلاب السيطرة",
        concept: "Library vs Framework & Inversion of Control",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المكتبة (Library) مقابل إطار العمل (Framework)│
└─────────────────────────────────────────────────────────────┘
  المكتبة (React):                  إطار العمل (Angular / Next.js):
  [ كودك أنت ]                      [ إطار العمل ]
       │ (أنت تستدعي)                     │ (هو يستدعي كودك)
       ▼                                  ▼
  [ مكتبة React ]                   [ كودك أنت ]
  
  أنت من يقود السيارة 🚗           الإطار هو سائق الحافلة وأنت راكب 🚌`
      }
    },
    {
      id: "4.1.d",
      title: "مفهوم الواجهات المبنية على المكونات",
      englishTitle: "Component-Based Architecture (Reusability & Modularity)",
      definition: "معمارية الواجهات المبنية على المكونات (Component-Based Architecture) هي منهجية هندسية تقوم على تجزئة وتفتيت واجهة المستخدم المعقدة إلى قطع مستقلة وصغيرة ومعزولة ومغلفة تُدعى 'المكونات' (Components)، حيث يدير كل مكون تصميمه ومنطقه وبياناته الخاصة، ويمكن إعادة استخدامه وتركيبه لبناء واجهات عملاقة.",
      analogy: "تخيل بناء ساعة يد سويسرية فاخرة: لا تُصنع الساعة كقطعة معدنية واحدة مصمتة، بل تُصنع من تروس مستقلة، وعقارب، وبطارية، وزجاج أمامي. كل قطعة تُصنع وتُختبر على حدة بدقة، ثم تُركب معاً لتشكل الساعة المتكاملة!",
      why: "تقضي تماماً على تكرار الكود (DRY: Don't Repeat Yourself) وتجعل الصيانة سهلة للغاية؛ فإذا أردت تعديل شكل زر أو بطاقة منتج، تعدل ملف المكون مرة واحدة فقط، فيتحدث شكله تلقائياً في مئات الصفحات عبر موقعك بأكمله دون لمس بقية الكود.",
      terms: [
        { term: "Component", pronunciation: "كومبوننت", meaning: "مكون برمجي مستقل يجمع واجهة ومنطقاً خاصاً به" },
        { term: "Reusability", pronunciation: "ريوزابيليتي", meaning: "إمكانية إعادة استخدام نفس المكون مرات لا حصر لها" },
        { term: "Modularity", pronunciation: "موديولاريتي", meaning: "التقسيم المعياري للكود إلى وحدات مستقلة ومفصولة" },
        { term: "Separation of Concerns", pronunciation: "سيبريشن أوف كونسيرنز", meaning: "فصل الاهتمامات والمسؤوليات البرمجية" }
      ],
      syntax: "// تعريف مكون زر مستقل\nfunction Button({ title }) {\n  return <button className=\"btn\">{title}</button>;\n}\n\n// تركيبه داخل مكون شريط علوي\nfunction Navbar() {\n  return <header><Button title=\"تسجيل\" /></header>;\n}",
      codeSimple: `// مكون مستقل يمثل بطاقة مستخدم (User Card)
function UserCard({ name, avatar, bio }) {
  // المكون يملك هيكله الخاص المعزول
  return (
    <article className="user-profile-card">
      <img src={avatar} alt={name} className="avatar-img" />
      <h3>{name}</h3>
      <p>{bio}</p>
    </article>
  );
}

// استخدام المكون عدة مرات مع بيانات مختلفة بنظافة تامة
function MembersDirectory() {
  return (
    <div className="directory-grid">
      <UserCard 
        name="خالد السعيد" 
        avatar="https://via.placeholder.com/60" 
        bio="مطور تطبيقات واجهات أول" 
      />
      <UserCard 
        name="ريم العتيبي" 
        avatar="https://via.placeholder.com/60" 
        bio="متخصصة أمن معلومات وسحابة" 
      />
    </div>
  );
}`,
      codeAdvanced: `// نموذج حقيقي لتقسيم صفحة متجر إلكتروني كاملة إلى مكونات ذرية
// 1. مكون سعري نقي
function PriceTag({ amount, currency = 'ر.س' }) {
  return <span className="price-tag">{amount} {currency}</span>;
}

// 2. مكون بطاقة منتج يركب المكون السعري بداخله
function ProductCard({ title, price, inStock }) {
  return (
    <div className="product-item">
      <h4>{title}</h4>
      <PriceTag amount={price} />
      <span className={inStock ? 'in' : 'out'}>
        {inStock ? 'متوفر' : 'نفد من المخزن'}
      </span>
    </div>
  );
}

// 3. مكون الصفحة الذي يجمع كل المكونات في لوحة واحدة
function StoreCatalog() {
  const catalog = [
    { id: 1, title: 'شاشة حاسوب 27 بوصة', price: 1100, inStock: true },
    { id: 2, title: 'ماوس لاسلكي مريح', price: 150, inStock: false }
  ];

  return (
    <section className="catalog-container">
      <h2>كتالوج المنتجات المتاحة 🛒</h2>
      <div className="items-list">
        {catalog.map(prod => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
}`,
      output: `كتالوج المنتجات المتاحة 🛒\n• شاشة حاسوب 27 بوصة - 1100 ر.س (متوفر)\n• ماوس لاسلكي مريح - 150 ر.س (نفد من المخزن)`,
      mistakes: [
        {
          wrong: `// كتابة مكون عملاق يحتوي على 1500 سطر كود يجمع الرأسية والجدول والنموذج والتذييل معاً!\nfunction MegaPage() { ... 1500 سطر في ملف واحد ... } // ❌ كود فوضوي يستحيل صيانته أو إعادة استخدامه!`,
          correct: `// تقسيم الصفحة إلى مكونات صغيرة مركزة لا تتجاوز 100-150 سطراً لكل ملف:\n// Header, ProductTable, FilterSidebar, Footer ✅`,
          explanation: "المكون المثالي يتبع مبدأ المسؤولية الواحدة (Single Responsibility Principle)؛ ينجز مهمة محددة بوضوح ويسهل فهمه واختباره."
        }
      ],
      bestPractices: [
        "إذا لاحظت أنك نسخت نفس كود الـ JSX مرتين في مشروعك، فاعزله فوراً في مكون مستقل وقابل لإعادة الاستخدام.",
        "اجعل مكوناتك 'غبية' قدر الإمكان (تستقبل بيانات وترسمها فقط)، وركز المنطق المعقد في مكونات الحاوية أو الـ Hooks.",
        "ضع كل مكون رئيسي في ملف مستقل يحمل نفس اسم المكون (مثال: `ProductCard.jsx`)."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح الصفحة إلى شجرة مكونات متناسقة",
        concept: "Deconstructing a Web Page into Components",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تفكيك الصفحة إلى مكونات مستقلة              │
└─────────────────────────────────────────────────────────────┘
  صفحة الموقع الكاملة:              مكونات React المعمارية:
  ┌─────────────────────────┐
  │         Navbar          │  ──>  <Navbar />
  ├───────────┬─────────────┤
  │  Sidebar  │   Content   │  ──>  <Sidebar />
  │           │  ┌───────┐  │
  │           │  │ Card  │  │  ──>  <ProductCard /> (يعاد استخدامه)
  │           │  └───────┘  │
  ├───────────┴─────────────┤
  │         Footer          │  ──>  <Footer />
  └─────────────────────────┘`
      }
    },
    {
      id: "4.1.e",
      title: "التفكير بطريقة Declarative UI",
      englishTitle: "Declarative vs Imperative UI Programming",
      definition: "البرمجة التصريحية (Declarative Programming) تعني أنك تصف في الكود 'الشكل النهائي للواجهة الذي تريده' بناءً على حالة البيانات الحالية، وتترك لـ React مهمة التعديل الفعلي للـ DOM. على النقيض من البرمجة الإجرائية (Imperative Programming) القديمة التي تفرض عليك كتابة أوامر خطوة بخطوة للمتصفح تخبره 'كيف يمسك العنصر وكيف يضيف الكلاس وكيف يغير النص يدparamياً'.",
      analogy: "تخيل أنك تركب سيارة أجرة وتريد الذهاب للمطار:\n1. الأسلوب الإجرائي (Imperative): تجلس بجانب السائق وتملي عليه كل حركة: 'شغل المحرك، ادس فرامل، لف المقود يميناً 30 درجة، سر للأمام 100 متر، تجاوز الشاحنة، قف هنا...'. مرهق جداً ومعرض للحوادث!\n2. الأسلوب التصريحي (Declarative): تركب في المقعد الخلفي وتقول للسائق ببساطة: 'إلى المطار من فضلك!'. أنت حددت الوجهة النهائية (النتيجة)، ودع السائق المحترف يتكفل بكل تفاصيل القيادة والطريق!",
      why: "هو أعظم تقدم أنجزته React في تاريخ الواجهات! يحررك تماماً من كتابة آلاف أسطر التعديل اليدوي المملة مثل `document.getElementById` و `classList.add`، ويضمن أن الواجهة لن تخرج أبداً عن المزامنة مع بياناتك؛ فما تراه في البيانات هو ما يُعرض على الشاشة حتماً.",
      terms: [
        { term: "Declarative UI", pronunciation: "ديكلاراتيف يو آي", meaning: "البرمجة التصريحية؛ وصف النتيجة والشكل النهائي للواجهة" },
        { term: "Imperative UI", pronunciation: "إمبيراتيف يو آي", meaning: "البرمجة الإجرائية القديمة؛ إعطاء أوامر تفصيلية خطوة بخطوة للـ DOM" },
        { term: "DOM Synchronization", pronunciation: "دوم سينكرونايزيشن", meaning: "مزامنة الشاشة مع البيانات دون تدخل يدوي" }
      ],
      syntax: "// 1. النمط التصريحي في React (أنا أصف النتيجة فقط!):\nreturn <button className={isLoading ? 'loading' : 'ready'}>{isLoading ? 'انتظر' : 'إرسال'}</button>;\n\n// 2. النمط الإجرائي القديم (خطوات يدوية مرهقة):\n// const btn = document.querySelector('button');\n// btn.classList.add('loading'); btn.textContent = 'انتظر';",
      codeSimple: `// النمط التصريحي النقي في React
// المكون يعلن: "إذا كان المستخدم مسجلاً اعرض اسمه، وإلا اعرض زر الدخول"
function AuthStatus({ isLoggedIn, userName }) {
  // وصف مباشر وصريح للنتيجة النهائية بناءً على الحالة
  return (
    <div className="auth-box">
      {isLoggedIn ? (
        <span className="welcome">مرحباً بعودتك يا {userName}! 👋</span>
      ) : (
        <button className="btn-login">تسجيل الدخول الآن 🔑</button>
      )}
    </div>
  );
}`,
      codeAdvanced: `// مقارنة متعمقة بين الأسلوبين الإجرائي والتصريحي لإدارة نموذج معقد
// السيناريو: زر إرسال يتغير نصه ولونه ويتعطل أثناء التحميل

// ❌ 1. الأسلوب الإجرائي القديم بـ JavaScript العادية (خطوات يدوية مملة ومعرضة للأخطاء):
function imperativeUpdateUI(isLoading) {
  const btn = document.getElementById('submit-btn');
  const spinner = document.getElementById('spinner');
  
  if (isLoading) {
    btn.setAttribute('disabled', 'true');
    btn.textContent = 'جاري الحفظ...';
    btn.classList.add('btn-disabled');
    spinner.style.display = 'inline-block';
  } else {
    btn.removeAttribute('disabled');
    btn.textContent = 'إرسال الطلب';
    btn.classList.remove('btn-disabled');
    spinner.style.display = 'none';
  }
}

// ✅ 2. الأسلوب التصريحي الأنيق في React (سطرين تصف فيهما الحالة فقط!):
function DeclarativeSubmitButton({ isLoading, onClick }) {
  return (
    <button 
      disabled={isLoading} 
      className={isLoading ? 'btn-disabled' : 'btn-active'}
      onClick={onClick}
    >
      {isLoading && <span className="spinner">⏳ </span>}
      {isLoading ? 'جاري الحفظ...' : 'إرسال الطلب'}
    </button>
  );
}`,
      output: `في React: بمجرد تغيير isLoading من false إلى true، تتغير كل عناصر الزر وألوانه ونصوصه تلقائياً دون لمس الـ DOM!`,
      mistakes: [
        {
          wrong: `// استخدام document.querySelector أو getElementById لتعديل نصوص في React!\nfunction BadComponent() {\n  const handleClick = () => {\n    document.getElementById('title').textContent = 'نص جديد!'; // ❌ خرق فادح لفلسفة React!\n  };\n  return <h1 id="title">النص القديم</h1>;\n}`,
          correct: `// الاعتماد على الحالة State والتفكير التصريحي الخالص:\n// const [title, setTitle] = useState('النص القديم');\n// <h1 onClick={() => setTitle('نص جديد!')}>{title}</h1> // ✅ سليم ومثالي`,
          explanation: "في React، التعديل المباشر على عناصر الـ DOM يكسر مزامنة React مع الشاشة ويجعل الـ Virtual DOM غير مدرك للتغييرات، مما يؤدي لأخطاء واختفاء التعديلات فجأة."
        }
      ],
      bestPractices: [
        "انسَ تماماً دوال التعديل اليدوي القديمة (مثل `innerHTML` و `classList.add`) عند كتابة كود React.",
        "عبر عن أي تغيير في واجهتك كتغيير في قيمة حالة (State) أو خاصية (Prop).",
        "اطرح على نفسك دائماً السؤال التصريحي: 'ما هو شكل هذه الواجهة عندما تكون البيانات X؟ وما شكلها عندما تكون Y؟'."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة الأسلوب الإجرائي القديم بالأسلوب التصريحي الحديث",
        concept: "Imperative vs Declarative Mental Model",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 الإجرائي القديم مقابل التصريحي في React      │
└─────────────────────────────────────────────────────────────┘
  الأسلوب الإجرائي (Imperative - كيف تفعل ذلك بالتفصيل؟):
  1. اجلب الزر بالـ ID ──> 2. غيّر النص ──> 3. أضف الكلاس ──> 4. عطّل الزر ❌
  (كود طويل، معرض للأخطاء والنسيان)

  الأسلوب التصريحي في React (Declarative - ماذا تريد أن ترى؟):
  <button disabled={loading}>{loading ? 'انتظر' : 'حفظ'}</button> ✅
  (وصف مباشر للنتيجة، وReact تتكفل بالباقي خلف الكواليس)`
      }
    },
    {
      id: "4.1.f",
      title: "مفهوم Component Tree",
      englishTitle: "The Component Tree: Hierarchy & Parent-Child Relationships",
      definition: "شجرة المكونات (Component Tree) هي الهيكل الهرمي المتفرع الذي تتجمع فيه كافة مكونات تطبيق React في علاقة (آباء وأبناء Parent-Child) تبدأ من مكون جذري رئيسي واحد في القمة (غالباً اسمه `<App />`) ويتفرع منه باقي أقسام ومكونات الصفحة وصولاً إلى أصغر زر وحقل إدخال في القاعدة.",
      analogy: "تخيل 'شجرة العائلة' (Family Tree): في القمة الجد الأكبر (المكون App)، يتفرع منه الأبناء (Navbar, Sidebar, MainContent)، ويتفرع من الأبناء الأحفاد (Button, UserCard, PriceTag). كل فرع متصل بالشجرة ويسري فيه النسغ والبيانات من الأعلى للأسفل!",
      why: "فهم شجرة المكونات هو المفتاح لفهم كيف تسافر البيانات في React عبر تدفق البيانات أحادي الاتجاه (One-Way Data Flow)، ويوضح لك أين يجب وضع المتغيرات وحالات الـ State (رفع الحالة المشتركة Lifting State Up) حتى تتمكن المكونات الشقيقة من استخدامها.",
      terms: [
        { term: "Component Tree", pronunciation: "كومبوننت تري", meaning: "شجرة المكونات الهرمية التي تمثل هيكل التطبيق بالكامل" },
        { term: "Root Component", pronunciation: "روت كومبوننت", meaning: "المكون الجذري في قمة الشجرة (عادة App)" },
        { term: "Parent Component", pronunciation: "بارنت كومبوننت", meaning: "المكون الأب الحاضن لمكونات أخرى بداخله" },
        { term: "Child Component", pronunciation: "تشايلد كومبوننت", meaning: "المكون الابن الموجود داخل سياق مكون أب" },
        { term: "One-Way Data Flow", pronunciation: "ون واي داتا فلو", meaning: "تدفق البيانات في اتجاه واحد هابط من الآباء للأبناء عبر Props" }
      ],
      syntax: "// شجرة مكونات واضحة التسلسل:\n<App>                   {/* الجذر الرئيسي */}\n  <Navbar />            {/* ابن أول */}\n  <MainContent>         {/* ابن ثانٍ */}\n    <Sidebar />         {/* حفيد */}\n    <ProductGrid />     {/* حفيد */}\n  </MainContent>\n</App>",
      codeSimple: `// مكونات تمثل فروع شجرة عائلة رقمية
function LeafButton() {
  return <button className="leaf">زر إجراء بسيط (ورقة في قاع الشجرة)</button>;
}

function BranchCard() {
  return (
    <div className="branch">
      <h3>بطاقة فرعية (مكون ابن)</h3>
      {/* احتضان المكون الحفيد */}
      <LeafButton />
    </div>
  );
}

// المكون الجذري الذي يجمع الفروع
export default function AppTree() {
  return (
    <main className="tree-root">
      <h1>المكون الجذري (App Root)</h1>
      <BranchCard />
    </main>
  );
}`,
      codeAdvanced: `// توضيح تدفق البيانات أحادي الاتجاه عبر شجرة المكونات
// البيانات تبدأ في الأب الأعلى وتتدفق للأسفل عبر الـ Props
function Avatar({ imgUrl, altText }) {
  // حفيد في قاع الشجرة يستلم الصورة فقط
  return <img src={imgUrl} alt={altText} className="avatar-circle" />;
}

function UserHeader({ user }) {
  // ابن وسيط يمرر بيانات محددة للحفيد
  return (
    <header className="user-hdr">
      <Avatar imgUrl={user.avatar} altText={user.name} />
      <h3>{user.name}</h3>
    </header>
  );
}

function UserDashboard() {
  // الأب في قمة هذا القسم يملك البيانات الكاملة
  const currentUser = {
    id: 1,
    name: 'عبد الله السالم',
    avatar: 'https://via.placeholder.com/50',
    accountLevel: 'الذهبي'
  };

  return (
    <div className="dashboard-container">
      <h2>لوحة إدارة الحساب</h2>
      {/* تمرير الكائن للأبناء ليتدفق في الشجرة */}
      <UserHeader user={currentUser} />
    </div>
  );
}`,
      output: `لوحة إدارة الحساب\n[صورة العضوية] عبد الله السالم`,
      mistakes: [
        {
          wrong: `// محاولة تمرير البيانات من الابن إلى الأب مباشرة عبر الـ Props كالسحر المعاكس!\n// "الابن يمرر props إلى الأب" // ❌ مستحيل في React! البيانات تسير في اتجاه واحد فقط من الأعلى للأسفل!`,
          correct: `// للتواصل من الأسفل للأعلى، يقوم الأب بتمرير دالة كـ Callback يستدعيها الابن عند حدوث حدث (مثل onClick) ✅`,
          explanation: "تدفق البيانات في React هابط دائماً (Top-Down / Unidirectional)؛ وإذا احتاج الابن لتغيير بيانات الأب، يستدعي دالة مررها له الأب مسبقاً."
        }
      ],
      bestPractices: [
        "استكشف شجرة مكونات تطبيقك دائماً باستخدام أداة المتصفح الرسمية React Developer Tools.",
        "ضع الحالة المشتركة (Shared State) في أقرب أب مشترك للمكونات التي تحتاج تلك البيانات (Lifting State Up).",
        "تجنب تعميق الشجرة بدون داعٍ (Props Drilling المفرط)؛ إذا كانت الشجرة عميقة جداً فاستخدم Context API."
      ],
      infographic: {
        title: "إنفوجرافيك: شجرة المكونات وتدفق البيانات أحادي الاتجاه",
        concept: "Component Tree & Top-Down Data Flow",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 شجرة المكونات (The Component Tree)           │
└─────────────────────────────────────────────────────────────┘
                         [ <App /> ]  (الجذر الأعلى)
                              │
               ┌──────────────┴──────────────┐
               ▼                             ▼
         [ <Header /> ]               [ <Main /> ]
               │                             │
         [ <UserBadge /> ]            [ <Feed /> ]
                                             │
                                      [ <PostCard /> ]
  
  قاعدة سريان البيانات:
  البيانات والـ Props تتدفق من الأعلى للأسفل دائماً ⬇️`
      }
    },
    {
      id: "4.1.g",
      title: "نظرة عامة على آلية تحديث واجهة React",
      englishTitle: "How React Updates the UI: Render, Diffing & Commit Phases",
      definition: "آلية تحديث الواجهة في React هي العملية الثلاثية المراحل التي تحدث في كل مرة تتغير فيها البيانات أو الحالة (State): 1) إطلاق التحديث (Triggering a Render)، 2) مرحلة التصيير وحساب الفروقات (Render & Diffing Phase) حيث تستدعي React المكونات وتقارن الشجرة الجديدة بالشجرة السابقة في الذاكرة عبر Virtual DOM، 3) مرحلة التثبيت (Commit Phase) حيث تطبق React التغييرات الصافية فقط على شجرة الـ DOM الحقيقية في الشاشة.",
      analogy: "تخيل مطعماً فاخراً بثلاث خطوات متقنة:\n1. إطلاق الطلب (Trigger): الزبون يطلب تعديل الوجبة (تغيرت الحالة State).\n2. مرحلة المطبخ (Render): يقوم الطباخون في المطبخ بإعداد الطبق وتذوقه ومقارنته بالوصفة (عملية حسابية سريعة في الكواليس داخل الذاكرة).\n3. مرحلة التقديم (Commit): يخرج النادل ويضع طبق الطعام النهائي الجاهز على طاولة الزبون في الصالة (تحديث شاشة المتصفح الحقيقية بأقل حركة ممكنة).",
      why: "فهم هذه المراحل الثلاث يجعلك مبرمجاً محترفاً يفهم لماذا يحدث الـ Re-render، ويحميك من الاعتقاد الخاطئ بأن 'إعادة التصيير تعني إعادة بناء صفحة الـ HTML من الصفر'؛ فالتصيير في React هو مجرد استدعاء دوال في الذاكرة لحساب الفروقات الصافية بأقصى سرعة.",
      terms: [
        { term: "Trigger Phase", pronunciation: "تريجر فيز", meaning: "مرحلة إطلاق طلب التحديث بسبب تغير الـ State أو الـ Props" },
        { term: "Render Phase", pronunciation: "ريندر فيز", meaning: "مرحلة استدعاء دوال المكونات وحساب الـ Virtual DOM في الذاكرة" },
        { term: "Reconciliation / Diffing", pronunciation: "ريكونسيلييشن", meaning: "خوارزمية مطابقة واكتشاف الفروقات بين الشجرة القديمة والجديدة" },
        { term: "Commit Phase", pronunciation: "كوميت فيز", meaning: "مرحلة تطبيق التغييرات الفعلية الدقيقة على الـ DOM الحقيقي" }
      ],
      syntax: "// دورة التحديث التلقائية:\n// 1. setState(newValue) ──> يطلق التحديث Trigger\n// 2. React تستدعي Component() ──> مرحلة Render & Diffing\n// 3. React تطبق الفروقات فقط على الـ DOM ──> مرحلة Commit",
      codeSimple: `// محاكاة بصرية لمراحل التحديث
function CounterDemo({ count }) {
  // هذه الدالة تُستدعى في مرحلة الـ Render لحساب الـ JSX الجديد
  console.log('🔄 مرحلة الـ Render: جاري استدعاء الدالة لحساب الواجهة للقيمة:', count);

  return (
    <div className="box">
      {/* في مرحلة الـ Commit، ستعدل React فقط الرقم التالي دون مساس بباقي العناصر */}
      <h2>العداد الذكي: {count}</h2>
    </div>
  );
}`,
      codeAdvanced: `// إثبات كفاءة React المذهلة: التعديل الدقيق في مرحلة الـ Commit
// إذا تغير الوقت كل ثانية، فإن React لا تعيد بناء حقل الإدخال ولا تفقد ما كتبه المستخدم!
function ClockAndInput() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <p>الوقت يتغير كل ثانية: <strong>{currentTime}</strong></p>
      {/* حقل الإدخال هذا لن يفقد التركيز (Focus) ولن يُمحى نصه أبداً لأن React لا تلمسه في الـ Commit! */}
      <input type="text" placeholder="اكتب هنا بحرية تامة..." />
    </div>
  );
}`,
      output: `الوقت يتغير كل ثانية: 10:45:12 م\n[حقل إدخال يحتفظ بكتابتك وتركيزك بسلاسة تامة]`,
      mistakes: [
        {
          wrong: `// الاعتقاد بأن كل "Re-render" هو عملية بطيئة ومكلفة تدمر أداء المتصفح\n// "المكون أعاد التصيير 3 مرات، هذا يعني أن الصفحة أُعيد تحميلها 3 مرات!" // ❌ خطأ تماماً!`,
          correct: `// الـ Render في React هو مجرد استدعاء دالة JS عادية في الذاكرة يستغرق أجزاء من الميلي ثانية؛ والتعديل الحقيقي للـ DOM يحدث فقط للبكسل الذي تغير فعلياً ✅`,
          explanation: "الـ Render في الذاكرة فائق السرعة والخفة؛ وتكلفة الأداء الحقيقية تكون فقط عندما تكون هناك عمليات حسابية ثقيلة جداً غير مجهزة بـ useMemo."
        }
      ],
      bestPractices: [
        "حافظ على نقاء دوال المكونات أثناء مرحلة الـ Render؛ لا تضع آثاراً جانبية (Side Effects) داخل جسم الدالة المباشر.",
        "استخدم أداة React Profiler لفحص مدة مرحلة الـ Render وتحديد المكونات البطيئة التي تحتاج لتحسين.",
        "تذكر أن تحديث الحالة بقيمة مطابقة تماماً للقيمة السابقة يتجاهله محرك React تلقائياً (Bailing out)."
      ],
      infographic: {
        title: "إنفوجرافيك: المراحل الثلاث لدورة تحديث الواجهة في React",
        concept: "The 3 Steps of React UI Updates",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المراحل الثلاث لتحديث واجهة React             │
└─────────────────────────────────────────────────────────────┘
  1. الإطلاق (Trigger):
     المستخدم ينقر أو تتغير الحالة setState ──> إرسال طلب تحديث
                 │
                 ▼
  2. التصيير وحساب الفروقات في الذاكرة (Render & Diffing):
     React تستدعي دوال المكونات ──> تقارن Virtual DOM القديم بالجديد
                 │
                 ▼
  3. التثبيت على شاشة المتصفح (Commit):
     React تغير السطر أو الكلمة التي تغيرت فقط في الـ DOM الحقيقي! 🎯`
      }
    },
    {
      id: "4.1.h",
      title: "مفهوم React DOM",
      englishTitle: "ReactDOM & createRoot: Mounting React to the Web",
      definition: "رياكت دوم (ReactDOM) هي الحزمة والوسيط البرمجي المسؤول عن أخذ شجرة مكونات React وتحويلها وتثبيتها فعلياً على شاشة متصفح الويب داخل عنصر HTML حقيقي (غالباً `<div id=\"root\"></div>`) باستخدام دالة `createRoot()` الحديثة، وتتولى مزامنة الفروقات بين Virtual DOM و Real DOM.",
      analogy: "تخيل أن React هي 'المخرج وكاتب السيناريو' (الذي يكتب القصة والشخصيات في خياله وعلى الورق)، بينما ReactDOM هو 'فريق الإنتاج وديكور المسرح الحقيقي' (الذي يحول الخيال إلى خشب حقيقي وإضاءة وممثلين يقفون على خشبة المسرح أمام عيون الجمهور!).",
      why: "فصل React عن ReactDOM هو سر عبقرية بنية Meta؛ فبفضل هذا الفصل، تظل مكتبة React نقية وخاصة بالمنطق، بينما تتولى ReactDOM العرض في متصفحات الويب، وتتولى حزمة ReactNative العرض على هواتف الآيفون والأندرويد، وتتولى React3D العرض في الواقع الافتراضي!",
      terms: [
        { term: "ReactDOM", pronunciation: "رياكت دوم", meaning: "حزمة ربط وتثبيت React في بيئة متصفحات الويب" },
        { term: "createRoot()", pronunciation: "كرييت روت", meaning: "الدالة القياسية الحديثة في React 18 و 19 لإنشاء نقطة تثبيت التطبيق" },
        { term: "Mounting", pronunciation: "ماونتينغ", meaning: "عملية تثبيت وتركيب مكون React للمرة الأولى في الـ DOM الحقيقي" },
        { term: "Root Element", pronunciation: "روت إليمنت", meaning: "العنصر الجذري في ملف index.html الذي يستضيف كل تطبيق React" }
      ],
      syntax: "// الكود الأساسي لنقطة انطلاق أي تطبيق React في ملف main.jsx:\nimport ReactDOM from 'react-dom/client';\nimport App from './App.jsx';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
      codeSimple: `// ملف main.jsx النموذجي في مشاريع Vite الحديثة
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 1. العثور على عنصر HTML الحاضن في صفحة index.html
const rootElement = document.getElementById('root');

// 2. إنشاء جذر React فائق السرعة عبر createRoot
const root = ReactDOM.createRoot(rootElement);

// 3. تثبيت وضخ شجرة المكونات كاملة داخل الجذر
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
      codeAdvanced: `// محاكاة توضيحية لكيفية عمل createRoot و render خلف الكواليس
function simulateReactDOM() {
  return {
    createRoot(container) {
      return {
        render(componentVNode) {
          // تفريغ الحاوية وتثبيت النتيجة المحسوبة
          container.innerHTML = '';
          const realDOMElement = document.createElement('div');
          realDOMElement.className = 'react-mounted-app';
          realDOMElement.innerHTML = '<h1>تم تثبيت تطبيق React بنجاح داخل الـ DOM الحقيقي! 🚀</h1>';
          container.appendChild(realDOMElement);
          console.log('✅ اكتملت عملية التثبيت (Mounting) بنجاح.');
        }
      };
    }
  };
}

// اختبار المحاكي
const mockContainer = { innerHTML: '', appendChild(el) { console.log('تم إدراج العنصر:', el.innerHTML); } };
const customReactDOM = simulateReactDOM();
const appRoot = customReactDOM.createRoot(mockContainer);
appRoot.render({ type: 'App' });`,
      output: `تم إدراج العنصر: <h1>تم تثبيت تطبيق React بنجاح داخل الـ DOM الحقيقي! 🚀</h1>\n✅ اكتملت عملية التثبيت (Mounting) بنجاح.`,
      mistakes: [
        {
          wrong: `// استخدام دالة ReactDOM.render القديمة الملغاة منذ React 17\nimport ReactDOM from 'react-dom';\nReactDOM.render(<App />, document.getElementById('root')); // ⚠️ تحذير مزعج في React 18 و 19 ويعطل الميزات الحديثة!`,
          correct: `// استخدام ReactDOM.createRoot من مسار react-dom/client الحديث\nimport ReactDOM from 'react-dom/client';\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />); // ✅ قياسي ومعتمد ويدعم الـ Concurrent Features`,
          explanation: "دالة ReactDOM.render القديمة أصبحت مهجورة (Deprecated)؛ ومحرك React 18 و 19 يتطلب حصرياً createRoot للاستفادة من قدرات التزامن ومعالجة الأداء."
        }
      ],
      bestPractices: [
        "استدعِ `ReactDOM.createRoot` مرة واحدة فقط في مدخل المشروع بالكامل (ملف `main.jsx` أو `index.js`).",
        "احرص دائماً على وجود `<div id=\"root\"></div>` في ملف `index.html` ليكون الحاضن الرسمي لتطبيقك.",
        "اترك إدارة الـ DOM لـ ReactDOM؛ لا تحاول إضافة أو حذف عناصر داخل `<div id=\"root\">` بنفسك عبر JavaScript العادية."
      ],
      infographic: {
        title: "إنفوجرافيك: دور ReactDOM كجسر بين كودك وشاشة المتصفح",
        concept: "ReactDOM as the Bridge to the Browser",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 دور حزمة ReactDOM في المنظومة                │
└─────────────────────────────────────────────────────────────┘
  مكونات React النقية (JSX + State + Logic)
                     │
                     ▼
  [ حزمة ReactDOM: الجسر المتخصص بالويب ]
                     │  (createRoot + render)
                     ▼
  صفحة HTML الحقيقية:  <div id="root">
                         ├── <header>...</header>
                         └── <main>...</main>
                       </div>`
      }
    },
    {
      id: "4.1.i",
      title: "التعرف على إصدارات React الحديثة",
      englishTitle: "Modern React Versions: React 18 Concurrent Mode & React 19 Actions",
      definition: "إصدارات React الحديثة نقلت المكتبة إلى آفاق غير مسبوقة: قدمت **React 18** معمارية التزامن المتوازي (Concurrent React) عبر ميزات الانتقالات `useTransition` والتحميل التدريجي `Suspense`. وقدمت **React 19** ثورة الإجراءات (Actions) لإدارة النماذج والعمليات غير المتزامنة تلقائياً، ومترجم React Compiler الذي يلغي الحاجة لمعظم استدعاءات `useMemo` و `useCallback` اليدوية.",
      analogy: "تخيل تطور شبكات الهاتف المحمول:\n• الإصدارات القديمة (React 16-17): مثل شبكة 3G؛ تؤدي الغرض ولكن إذا فتحت فيديو تتوقف المكالمة وتنتظر التحميل.\n• إصدار React 18: مثل شبكة 4G مع ميزة تعدد المهام؛ يمكنك تحميل فيلم وإجراء مكالمة فيديو فائقة الدقة في نفس الوقت دون تقطيع (التزامن Concurrent).\n• إصدار React 19: مثل شبكة 5G والقيادة الذاتية الذكية بالكامل؛ السيارة تراقب الطريق وتحسب المسافات وتحفظ الوقود تلقائياً دون أن تضطر للتدخل يدوياً (مترجم React Compiler و Actions)!",
      why: "معرفة الإصدارات يضمن أنك تتعلم أحدث معايير التوظيف العالمية في 2026 ولا تضيع وقتك في دراسة أنماط بالية عفا عليها الزمن، ويجعلك مستعداً للاستفادة من السرعة الخارقة لـ React 19 وتبسيط كود النماذج وإدارة الحالات.",
      terms: [
        { term: "React 18", pronunciation: "رياكت ثمانية عشر", meaning: "إصدار التزامن التاريخي الذي قدم Transitions و Suspense للواجهات" },
        { term: "React 19", pronunciation: "رياكت تسعة عشر", meaning: "الإصدار الأحدث الثوري الذي قدم Actions و useActionState و React Compiler" },
        { term: "Concurrent Rendering", pronunciation: "كونكرنت ريندرينغ", meaning: "التصيير المتزامن متعدد الأولويات القابل للمقاطعة والاستئناف" },
        { term: "React Compiler", pronunciation: "رياكت كومبايلر", meaning: "مترجم ذكي يحسن أداء الكود تلقائياً ويقوم بعمليات الـ Memoization ذاتياً" }
      ],
      syntax: "// ميزة React 18 (useTransition لتفادي تجميد الواجهة):\nconst [isPending, startTransition] = useTransition();\n\n// ميزة React 19 (إدارة النماذج والإجراءات المباشرة Actions):\nconst [state, formAction, isPending] = useActionState(submitHandler, null);",
      codeSimple: `// استعراض ميزات التزامن الحديثة بأسلوب React 18/19
import { useState, useTransition } from 'react';

function ModernSearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (e) => {
    const value = e.target.value;
    
    // 1. تحديث حقل الإدخال فوري بأولوية قصوى عاجلة (Urgent)
    setSearchTerm(value);

    // 2. تحديث قائمة النتائج الثقيلة كـ Transition منخفض الأولوية غير معطل للواجهة
    startTransition(() => {
      // محاكاة تصفية 10,000 عنصر في الخلفية بسلاسة تامة
      console.log('جاري تصفية القائمة في مسار غير حاظر...');
    });
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="ابحث بسرعة..." />
      {isPending && <span className="loader">⚡ جاري التحديث في الخلفية...</span>}
    </div>
  );
}`,
      codeAdvanced: `// نظرة خاطفة على مستقبل React 19: نموذج معالجة إجراءات النماذج (Actions)
// في React 19، يمكنك تمرير دالة غير متزامنة مباشرة لخاصية action في وسم <form>!
async function updateProfileName(previousState, formData) {
  'use server'; // في بيئات الخادم Next.js / Server Actions
  const newName = formData.get('userName');
  
  // محاكاة حفظ في الخادم
  await new Promise(res => setTimeout(res, 500));
  return { success: true, name: newName };
}

function ProfileForm() {
  // ميزة useActionState الثورية في React 19 تدير حالة الإرسال والانتظار والنتيجة تلقائياً!
  // const [state, formAction, isPending] = useActionState(updateProfileName, { success: false, name: '' });

  return (
    <form action="/* formAction */">
      <label>تعديل الاسم في React 19:</label>
      <input name="userName" type="text" required placeholder="أدخل اسمك الجديد" />
      <button type="submit">حفظ التغييرات</button>
    </form>
  );
}`,
      output: `في React 18/19: استجابة فورية ونعومة تامة لحركة أصابع المستخدم دون أي تقطيع!`,
      mistakes: [
        {
          wrong: `// الإفراط في كتابة useMemo و useCallback في كل سطر في كودك بعد ظهور React 19\n// const memoizedVal = useMemo(() => calculate(), []); // ❌ أصبح زائداً عن الحاجة مع React Compiler الحديث!`,
          correct: `// في React 19 مع React Compiler، اكتب كود JavaScript طبيعي ونقي، وسيقوم المترجم بتحسين الأداء وتثبيت المراجع ذاتياً بأعلى كفاءة ✅`,
          explanation: "مترجم React Compiler الجديد يقوم بتحليل الكود تلقائياً وتثبيت المراجع وحفظ الحسابات في الذاكرة دون أن تضطر لتلطيخ كودك بـ useMemo و useCallback يدوياً."
        }
      ],
      bestPractices: [
        "استخدم ميزات التزامن مثل `useTransition` عندما تجد أن تصفية كميات ضخمة من البيانات تؤخر استجابة حقول الإدخال.",
        "احرص على ترقية مشاريعك إلى React 18 و 19 للاستفادة من تحسينات الأمان والأداء وإدارة الذاكرة المدمجة.",
        "تابع التطورات الرسمية لفريق React عبر مدونتهم الرسمية `react.dev/blog` لتواكب الميزات الجديدة باستمرار."
      ],
      infographic: {
        title: "إنفوجرافيك: خريطة تطور React من البدايات إلى React 19",
        concept: "The Evolution of React Versions",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 محطات تطور React التاريخية العظمى            │
└─────────────────────────────────────────────────────────────┘
  • React 16 (2018):   إطلاق خطافات React Hooks (ثورة التخلي عن Classes) 🪝
  • React 18 (2022):   إطلاق معمارية التزامن Concurrent React و useTransition ⚡
  • React 19 (2024+):  ثورة الـ Actions ومترجم React Compiler التلقائي 🚀
  
  الخلاصة لمطور 2026:
  أنت تتعلم النسخة الأكثر نضجاً وسرعة وسهولة في تاريخ هندسة الويب!`
      }
    }
  ],
  quiz: [
    {
      id: "q4.1.1",
      question: "ما الفرق الجوهري بين البرمجة التصريحية (Declarative) والبرمجة الإجرائية (Imperative)؟",
      options: [
        "البرمجة الإجرائية تعمل فقط في الهواتف بينما التصريحية تعمل في الحواسيب فقط.",
        "البرمجة التصريحية تصف النتيجة النهائية المرغوبة للواجهة بناءً على البيانات وتدع المكتبة تدير الـ DOM، بينما الإجرائية تملي أوامر تفصيلية خطوة بخطوة.",
        "البرمجة التصريحية لا تدعم استخدام الألوان والخطوط في CSS.",
        "لا يوجد فرق جوهري بينهما؛ كلاهما يستخدمان document.getElementById بنفس الطريقة."
      ],
      correctAnswer: 1,
      explanation: "في النمط التصريحي (Declarative) المتبع في React، أنت تصف شكل الواجهة النهائي بناءً على الحالة (UI = f(State))، وتتولى React تلقائياً تحديث الـ DOM بكفاءة."
    },
    {
      id: "q4.1.2",
      question: "ما هي المراحل الثلاث التي تمر بها React لتحديث واجهة المستخدم؟",
      options: [
        "التحميل (Download)، التثبيت (Install)، التشغيل (Run).",
        "الإطلاق (Trigger)، التصيير وحساب الفروقات في الذاكرة (Render & Diffing)، ثم التثبيت على الشاشة الحقيقية (Commit).",
        "قراءة الملفات (Read)، تشفير البيانات (Encrypt)، إرسال الطلب (Send).",
        "تنسيق CSS، حساب الـ HTML، ثم تلوين الصفحة."
      ],
      correctAnswer: 1,
      explanation: "تمر عملية التحديث بثلاث مراحل متتالية: إطلاق التحديث بتغير الحالة (Trigger)، ثم حساب الفروقات في الذاكرة (Render)، وأخيراً تثبيت التعديل الصافي فقط على الـ DOM الحقيقي (Commit)."
    },
    {
      id: "q4.1.3",
      question: "لماذا تم فصل مكتبة React الأساسية عن حزمة ReactDOM؟",
      options: [
        "لأن حجم الملف كان كبيراً جداً ولم يتسع في قرص صلب واحد.",
        "لكي تظل React نقية لإدارة منطق ومكونات الواجهة، مما يسمح باستخدامها في بيئات مختلفة (ReactDOM للويب، و ReactNative للهواتف، و React3D للواقع الافتراضي).",
        "لأن ReactDOM مخصصة لمعالجة الصوت فقط في المتصفح.",
        "بسبب خلاف قانوني بين شركتي Meta و Google في عام 2015."
      ],
      correctAnswer: 1,
      explanation: "فصل React عن بيئة العرض يسمح بنقل نفس المنطق والشفرة إلى بيئات متعددة: ReactDOM لمتصفحات الويب، و React Native لهواتف الآيفون والأندرويد."
    }
  ],
  exercise: {
    title: "تمرين عملي: تفكيك واجهة متجر وتصميم شجرة المكونات بالأسلوب التصريحي",
    description: "أمامك سيناريو صفحة متجر إلكتروني تحتوي على شريط تنقل، وقائمة منتجات، وبطاقة سلة مشتريات. المطلوب: كتابة هيكل مكونات React نقية وتصريحية (Declarative) مقسمة لمعمارية واضحة (Header, ProductCard, CartSummary) مع تطبيق مفهوم تدفق البيانات من الأعلى للأسفل عبر Props.",
    starterCode: `// 1. صمم مكون بطاقة المنتج ProductCard
function ProductCard({ product, onAddToCart }) {
  // المطلوب: إرجاع واجهة تعرض الاسم والسعر وزر شراء تصريحي
}

// 2. صمم مكون ملخص السلة CartSummary
function CartSummary({ itemCount, totalPrice }) {
  // المطلوب: عرض عدد المنتجات والإجمالي شرطياً (إذا كان فارغاً يعرض "السلة فارغة")
}

// 3. صمم المكون الأب AppStore
export default function AppStore() {
  const products = [
    { id: 101, title: 'سماعة محيطية', price: 220 },
    { id: 102, title: 'حامل لابتوب مريح', price: 90 }
  ];

  return (
    <div className="store-app">
      {/* المطلوب: تركيب شجرة المكونات وتمرير البيانات */}
    </div>
  );
}`,
    hints: [
      "في ProductCard: اعرض `{product.title}` وزراً يستدعي `onAddToCart(product)` عند النقر.",
      "في CartSummary: استخدم المعامل الثلاثي `itemCount === 0 ? 'السلة فارغة' : ...`",
      "في AppStore: استخدم `.map(prod => <ProductCard key={prod.id} ... />)`"
    ],
    solution: `// 1. مكون بطاقة المنتج المستقل القابل لإعادة الاستخدام
function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card" style={{ border: '1px solid #334155', padding: '16px', borderRadius: '10px', background: '#1e293b' }}>
      <h3 style={{ color: '#f8fafc', marginBottom: '8px' }}>{product.title}</h3>
      <p style={{ color: '#38bdf8', fontWeight: 'bold', marginBottom: '12px' }}>{product.price} ر.س</p>
      <button 
        onClick={() => onAddToCart(product)}
        style={{ background: '#2563eb', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer' }}
      >
        إضافة للسلة 🛒
      </button>
    </article>
  );
}

// 2. مكون ملخص السلة بأسلوب تصريحي كامل
function CartSummary({ itemCount, totalPrice }) {
  return (
    <div className="cart-summary" style={{ background: '#0f172a', padding: '14px', borderRadius: '8px', border: '1px solid #1e293b', marginTop: '20px' }}>
      <h4 style={{ color: '#cbd5e1' }}>ملخص سلة الشراء:</h4>
      {itemCount === 0 ? (
        <p style={{ color: '#64748b' }}>السلة فارغة حالياً 🌿</p>
      ) : (
        <p style={{ color: '#10b981', fontWeight: 'bold' }}>
          لديك {itemCount} منتجات بإجمالي: {totalPrice} ر.س
        </p>
      )}
    </div>
  );
}

// 3. المكون الأب الذي يربط شجرة المكونات بالكامل
export default function AppStore() {
  const storeCatalog = [
    { id: 101, title: 'سماعة محيطية لاسلكية', price: 220 },
    { id: 102, title: 'حامل لابتوب ألمنيوم مريح', price: 90 },
    { id: 103, title: 'لوحة إضاءة استوديو LED', price: 140 }
  ];

  const handleAddToCart = (item) => {
    console.log('تم طلب إضافة المنتج:', item.title);
  };

  return (
    <div className="store-app" style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <header style={{ marginBottom: '20px' }}>
        <h1 style={{ color: '#38bdf8' }}>متجر التقنية الحديث 🛍️</h1>
        <p style={{ color: '#94a3b8' }}>نموذج معمارية المكونات في React 19</p>
      </header>

      {/* فرع شجرة المنتجات */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {storeCatalog.map(prod => (
          <ProductCard 
            key={prod.id} 
            product={prod} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </section>

      {/* فرع ملخص السلة */}
      <CartSummary itemCount={1} totalPrice={220} />
    </div>
  );
}`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: المبادئ التأسيسية الأربعة لمكتبة React",
    badge: "فلسفة React 1.0",
    summary: "React ليست مجرد مكتبة أكواد، بل هي طريقة تفكير جديدة تماماً في هندسة واجهات المستخدم: التفكير بالمكونات، التعبير التصريحي، شجرة الهيكل الهرمي، والتحديث الذكي الفائق للـ DOM.",
    points: [
      "Component Architecture: كل واجهة هي مجموعة مكعبات ليجو مستقلة وقابلة لإعادة الاستخدام.",
      "Declarative UI: صف النتيجة النهائية ووجهتك (UI = f(State)) ودع React تقود السيارة.",
      "Component Tree: تسلسل هرمي منظم يسري فيه تدفق البيانات من الأعلى للأسفل.",
      "Render & Commit: حساب الفروقات في الذاكرة أولاً وتطبيق التعديل الصافي فقط على الشاشة.",
      "ReactDOM: الجسر المتين الذي يثبت مكونات React داخل متصفح الويب بكفاءة.",
      "React 18 & 19: عصر التزامن المتوازي التلقائي ومترجم React Compiler الثوري."
    ]
  }
};
