// src/data/sections/section5/topic1.js
// الموضوع 1: أساسيات JSX (JSX Fundamentals & Syntax Rules)

export const SECTION_5_TOPIC_1 = {
  id: "5.1",
  title: "أساسيات JSX",
  englishTitle: "JSX Fundamentals & Syntax Rules",
  description: "اللغة البصرية الساحرة لمكتبة React: فهم ما هو JSX، الفرق الجوهري بينه وبين HTML، إقحام التعبيرات بالأقواس المعقوفة {}، استخدام className و htmlFor، إغلاق العناصر الذاتي، واستخدام React Fragments لتفادي فوضى الـ DOM.",
  icon: "Code",
  subtopics: [
    {
      id: "5.1.a",
      title: "ما هو JSX",
      englishTitle: "What is JSX? (JavaScript XML & React.createElement)",
      definition: "جي إس إكس (JSX: JavaScript XML) هو امتداد صياغي (Syntax Extension) للغة JavaScript يتيح لك كتابة كود يشبه لغة HTML مباشرة داخل ملفات JavaScript. خلف الكواليس، يقوم مترجم مثل Babel أو Vite بتحويل كل سطر JSX إلى استدعاءات دالة نقية هي `React.createElement()` تنتج كائنات عادية تصف واجهة المستخدم.",
      analogy: "تخيل أنك مهندس معماري: يمكنك رسم مخطط القصر برسم كروكي هندسي أنيق وواضح (كود JSX)، أو كتابة وصف حرفي ممل من 500 صفحة يصف إحداثيات كل طوبة وإسمنت بدقة (استدعاءات React.createElement القديمة). JSX يمنحك الرسم الهندسي الجميل، والكمبيوتر يترجمه تلقائياً لقائمة المواد في الذاكرة!",
      why: "قبل JSX، كانت كتابة واجهات React تتم يدوياً بدوال معقدة مثل `React.createElement('div', { className: 'box' }, React.createElement('h1', null, 'مرحباً'))`. كانت كتابة شاشة متوسطة تتطلب صفحات من الأقواس المتداخلة المرهقة. JSX جعل كتابة الواجهات بديهية وطبيعية لكل من يعرف لغة HTML.",
      terms: [
        { term: "JSX (JavaScript XML)", pronunciation: "جي إس إكس", meaning: "امتداد صياغي لكتابة وسوم تشبه HTML داخل JavaScript" },
        { term: "React.createElement", pronunciation: "رياكت كرييت إليمنت", meaning: "الدالة الأصلية في الذاكرة التي يتحول إليها كود JSX بعد الترجمة" },
        { term: "Transpiler (Babel/esbuild)", pronunciation: "ترانسبايلر", meaning: "المترجم الذي يحول JSX إلى كود JavaScript قياسي يفهمه المتصفح" },
        { term: "Virtual Element Object", pronunciation: "فيرتشوال إليمنت أوبجكت", meaning: "الكائن البسيط في الذاكرة الذي يعبر عن عنصر الواجهة" }
      ],
      syntax: "// 1. ما تكتبه أنت بـ JSX:\nconst element = <h1 className=\"title\">مرحباً بك!</h1>;\n\n// 2. ما يتحول إليه الكود تلقائياً بعد الترجمة:\n// const element = React.createElement('h1', { className: 'title' }, 'مرحباً بك!');",
      codeSimple: `// مكون بسيط يوضح صياغة JSX
function WelcomeMessage() {
  // كتابة وسوم مألوفة تشبه HTML مباشرة داخل دالة JavaScript
  return (
    <div className="welcome-banner">
      <h1>أهلاً بك في عالم JSX! 🎨</h1>
      <p>أبسط وأجمل طريقة لبناء واجهات الويب التفاعلية.</p>
    </div>
  );
}

export default WelcomeMessage;`,
      codeAdvanced: `// إثبات ما هو JSX في حقيقته: استعراض كائن React Element في الذاكرة
function inspectJsxUnderTheHood() {
  // عند كتابة هذا السطر بـ JSX:
  const vNode = <button id="btn-save">حفظ</button>;

  // في الحقيقة، المتغير vNode هو مجرد كائن JavaScript عادي يحمل هذه الخصائص:
  console.log('نوع العنصر (type):', vNode.type); // 'button'
  console.log('الخصائص (props):', vNode.props); // { id: 'btn-save', children: 'حفظ' }
}

inspectJsxUnderTheHood();`,
      output: `نوع العنصر (type): button\nالخصائص (props): { id: 'btn-save', children: 'حفظ' }`,
      mistakes: [
        {
          wrong: `// الاعتقاد بأن JSX هو كود HTML حقيقي يُرسل للمتصفح كما هو\n// "المتصفح يفهم JSX تلقائياً دون الحاجة لأدوات بناء!" // ❌ خطأ فادح! المتصفح لا يفهم JSX وسينهار فوراً بـ SyntaxError!`,
          correct: `// المتصفح لا يفهم إلا JavaScript النقية؛ وأداة البناء (مثل Vite) هي من تترجم JSX إلى دوال JS قياسية قبل تشغيلها في المتصفح ✅`,
          explanation: "JSX ليس جزءاً من مواصفات لغة JavaScript القياسية؛ بل هو تمديد صياغي يحتاج لمترجم (Transpiler) مثل esbuild المدمج في Vite ليحوله إلى كود JS عادي."
        }
      ],
      bestPractices: [
        "ضع كود الـ JSX متعدد الأسطر داخل أقواس دائرية `(...)` لتفادي مشاكل الفاصلة المنقوطة التلقائية في JavaScript.",
        "استخدم امتداد الملف `.jsx` للملفات التي تحتوي على JSX لتمكين التلوين والتدقيق الذكي في VS Code.",
        "تذكر دائماً أن JSX هي في النهاية كائن JavaScript؛ يمكنك تخزينها في متغيرات وتمريرها وإرجاعها من الدوال بحرية."
      ],
      infographic: {
        title: "إنفوجرافيك: رحلة كود JSX من المحرر إلى شاشة المتصفح",
        concept: "The JSX Compilation Pipeline",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 رحلة كود الـ JSX إلى الـ Virtual DOM         │
└─────────────────────────────────────────────────────────────┘
  ما تكتبه في المحرر (JSX):
  const el = <h1 className="hero">مرحباً</h1>;
                 │
  المترجم (Vite / Babel) ⚙️
                 │
                 ▼
  كود JavaScript النقي:
  const el = React.createElement('h1', { className: 'hero' }, 'مرحباً');
                 │
                 ▼
  كائن الـ Virtual DOM البسيط في الذاكرة:
  { type: 'h1', props: { className: 'hero', children: 'مرحباً' } }`
      }
    },
    {
      id: "5.1.b",
      title: "الفرق بين JSX و HTML",
      englishTitle: "JSX vs HTML: Stricter Rules & Key Differences",
      definition: "رغم أن JSX تبدو متطابقة ظاهرياً مع HTML، إلا أن JSX أكثر صرامة ودقة؛ فهي تتبع قواعد لغة XML: تتطلب إغلاقاً إلزامياً لكافة الوسوم، وتستخدم تسميات سنام الجمل (camelCase) للخصائص بدلاً من الشرطات، وتعتبر الكلمات المحجوزة في JS مثل `class` و `for` محظورة وتستبدلها بـ `className` و `htmlFor`، وتوفر حماية ذاتية خارقة من هجمات الحقن XSS.",
      analogy: "تخيل الفرق بين اللغة العامية واللغة الفصحى القانونية الصارمة: في لغة HTML العادية (العامية)، يمكنك ترك باب مفتوحاً أو نسيان إغلاق وسم `<input>` وسيتسامح معك المتصفح. أما JSX فهي كالعقد القانوني الصارم؛ كل وسم يجب أن يُقفل بدقة، وكل مصطلح يجب أن يطابق القواعد حرفياً دون أي تهاون!",
      why: "فهم هذه الفروق يمنع الصدمات الأولى لكل مطور قادم من عالم الويب التقليدي؛ فهو يفسر لك لماذا تظهر لك شاشة حمراء إذا نسيت علامة الإغلاق السريع `/>` في حقل الإدخال، ولماذا لا يقبل React كلمة `class`.",
      terms: [
        { term: "camelCase", pronunciation: "كامل كيس", meaning: "طريقة تسمية تبدأ بحرف صغير وكل كلمة تالية بحرف كبير (مثل onClick)" },
        { term: "Self-Closing Tag", pronunciation: "سيلف كلوزينغ", meaning: "وسم الإغلاق الذاتي الذي ينتهي بـ /> إجبارياً في JSX" },
        { term: "XSS Protection", pronunciation: "إكس إس إس بروتكشن", meaning: "حماية ذاتية في JSX من هجمات حقن الأكواد الخبيثة عبر تشفير النصوص" }
      ],
      syntax: "// مقارنة سريعة بين HTML و JSX:\n// في HTML:  <div class=\"card\"><input type=\"text\"><br></div>\n// في JSX:   <div className=\"card\"><input type=\"text\" /><br /></div>",
      codeSimple: `// نموذج يجسد الفروق الأساسية بين JSX و HTML
function FormDifferenceDemo() {
  return (
    // 1. استخدام className بدلاً من class
    <div className="form-container">
      {/* 2. استخدام htmlFor بدلاً من for لربط الـ Label */}
      <label htmlFor="user-email">البريد الإلكتروني:</label>
      
      {/* 3. إغلاق ذاتي إلزامي لوسم input بـ /> */}
      <input id="user-email" type="email" placeholder="name@domain.com" />

      {/* 4. إغلاق ذاتي إلزامي لفاصل السطر br */}
      <br />

      {/* 5. تسمية الأحداث بـ camelCase مثل onClick */}
      <button onClick={() => alert('تم النقر!')}>إرسال</button>
    </div>
  );
}`,
      codeAdvanced: `// إثبات الحماية الذاتية لـ JSX من هجمات الحقن الخبيثة (XSS Injection Prevention)
function SecurityDemo() {
  // محاولة خبيثة من مستخدم لحقن كود JavaScript ضار عبر نص
  const maliciousUserInput = '<img src="x" onerror="alert(\\'تم اختراقك!\\')" />';

  return (
    <div className="security-box">
      <h3>اختبار الحماية الذاتية لـ JSX:</h3>
      {/* في HTML العادية عبر innerHTML، سينفذ كود الاختراق فوراً! */}
      {/* في React JSX: تقوم React بتحويل كل النصوص إلى نصوص آمنة ومشفرة تلقائياً! */}
      <p>{maliciousUserInput}</p>
    </div>
  );
}`,
      output: `[يُعرض النص الحرفي كاملاً على الشاشة كنص عادي مسالم دون تشغيل أي كود اختراق خبيث نهائياً! 🛡️]`,
      mistakes: [
        {
          wrong: `// كتابة وسوم بدون إغلاق كما في HTML القديمة:\n// return <div><img src="pic.jpg"><input type="text"></div> // ❌ خطأ ترجمة فادح: Unterminated JSX contents!`,
          correct: `// إغلاق كل وسم لا يحتوي على أبناء بشرطة مائلة في نهايته /> إجبارياً:\n// return <div><img src="pic.jpg" /><input type="text" /></div> // ✅ سليم ومثالي`,
          explanation: "قواعد JSX تطبق معيار XML الصارم؛ لا يمكن ترك أي وسم مفتوحاً في الهواء إطلاقاً دون إغلاقه بـ `/>`."
        }
      ],
      bestPractices: [
        "تذكر دائماً التحويلات الكلاسيكية: `class` ──> `className` و `for` ──> `htmlFor`.",
        "استخدم صياغة camelCase لكافة الخصائص والأحداث (`onClick`, `onChange`, `tabIndex`, `autoFocus`).",
        "اطمئن لأمان JSX؛ فهي تشفر كافة المدخلات تلقائياً لحمايتك وحماية مستخدميك من ثغرات Cross-Site Scripting."
      ],
      infographic: {
        title: "إنفوجرافيك: جدول الفروق الجوهرية بين HTML العادية و JSX في React",
        concept: "HTML vs JSX Differences Table",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المقارنة الحاسمة: HTML مقابل JSX في React   │
└─────────────────────────────────────────────────────────────┘
  الميزة             في لغة HTML العادية       في لغة JSX الحديثة
  ─────────────────────────────────────────────────────────────
  تحديد فئة الـ CSS   class="box"              className="box"
  ربط التسمية Label   for="my-id"              htmlFor="my-id"
  إغلاق الوسوم       <input> (مسموح بالفتح)   <input /> (إغلاق ذاتي إلزامي)
  تسمية الأحداث      onclick="fn()"           onClick={fn} (camelCase)
  تنسيقات CSS المضمنة style="color: red;"      style={{ color: 'red' }}
  الحماية من XSS     غير محمية تلقائياً        مشفرة ومحمية ذاتياً 100% 🛡️`
      }
    },
    {
      id: "5.1.c",
      title: "كتابة التعبيرات داخل JSX",
      englishTitle: "Expressions vs Statements in JSX: What Works & What Fails",
      definition: "التعبيرات داخل JSX تعني أنك تستطيع كتابة أي كود JavaScript يُحسب ويُرجع قيمة (Expression مثل العمليات الحسابية، استدعاء الدوال، المعامل الثلاثي، قراءة المتغيرات) داخل الأقواس المعقوفة `{}`. بينما الجمل التقريرية (Statements مثل جملة `if` الكاملة، وحلقات `for` التقليدية، و `switch`) لا يمكن كتابتها مباشرة داخل أقواس JSX لأنها لا تعيد قيمة في نفس السطر.",
      analogy: "تخيل أن الأقواس المعقوفة `{}` هي 'ماكينة صراف آلي': الماكينة تقبل فقط الأشياء التي لها قيمة مالية محددة فورية (تعبير Expression: شيك أو بطاقة تسحب منها نقوداً). لا يمكنك أن تقف أمام ماكينة الصراف وتقرأ عليها خطاباً إنشائياً طويلاً أو قراراً إدارياً (جملة تقريرية Statement)؛ الماكينة ستلفظه فوراً وتقول: 'أعطني قيمة ملموسة فقط!'",
      why: "فهم الفرق بين التعبير (Expression) والجملة التقريرية (Statement) يحل أشهر لغز يواجهه المبتدئون عند محاولة كتابة شرط داخل JSX؛ فهو يوضح لك لماذا نستخدم المعامل الثلاثي `cond ? a : b` أو `cond && a` بدلاً من جملة `if` الكاملة داخل JSX.",
      terms: [
        { term: "Expression", pronunciation: "إكسبريشن", meaning: "تعبير برمجى يُحسب ويعيد قيمة واحدة (مقبول داخل JSX)" },
        { term: "Statement", pronunciation: "ستيتمنت", meaning: "جملة تقريرية تتحكم في مسار الكود ولا تعيد قيمة بذاتها (ممنوعة داخل JSX)" },
        { term: "Ternary Operator", pronunciation: "تيرناري أوبيريتور", meaning: "المعامل الشرطي الثلاثي المقبول داخل JSX كبديل لجمل if" }
      ],
      syntax: "// مسموح داخل JSX (تعبيرات تعيد قيمة):\n<h1>{user.name}</h1>\n<p>{price * 1.15}</p>\n<span>{isLoggedIn ? 'أهلاً' : 'دخول'}</span>\n\n// ممنوع ومرفوض تماماً داخل JSX (جمل تقريرية):\n// <h1>{ if (isLoggedIn) { 'أهلاً' } }</h1> ❌ خطأ نحوي فادح!",
      codeSimple: `// أمثلة لتعبيرات صالحة تعيد قيماً داخل JSX
function ExpressionsShowcase() {
  const firstName = 'سلطان';
  const points = 80;
  const doublePoints = (p) => p * 2;

  return (
    <div className="showcase">
      {/* 1. قراءة متغير */}
      <h2>مرحباً يا {firstName}</h2>

      {/* 2. عملية حسابية */}
      <p>نقاطك القادمة: {points + 20}</p>

      {/* 3. استدعاء دالة */}
      <p>مكافأة النقاط المضاعفة: {doublePoints(points)}</p>

      {/* 4. تعبير شرطي ثلاثي يعيد نصاً */}
      <p>الحالة: {points >= 50 ? '🌟 متأهل للمكافأة' : 'يحتاج لمزيد من النقاط'}</p>
    </div>
  );
}`,
      codeAdvanced: `// كيف نتعامل مع المنطق المعقد إذا احتجنا لجمل Statements؟
// الحل: احسب المنطق بالجمل التقريرية في جسم الدالة أولاً، ثم اعرض الناتج في JSX!
function ComplexLogicComponent({ score }) {
  // هنا في جسم دالة JavaScript العادي: مسموح بكل أنواع الجمل التقريرية (if, switch, for)
  let badgeTitle = '';
  let badgeColor = '';

  if (score >= 90) {
    badgeTitle = 'خبير برمجيات متميز 🏆';
    badgeColor = '#10b981';
  } else if (score >= 60) {
    badgeTitle = 'مطور واجهات صاعد 🚀';
    badgeColor = '#3b82f6';
  } else {
    badgeTitle = 'مبتدئ شغوف في البداية 🌿';
    badgeColor = '#f59e0b';
  }

  // في الـ JSX: نعرض المتغيرات المحسوبة بنقاء تام
  return (
    <div className="badge-card" style={{ borderColor: badgeColor }}>
      <h3>تقييم المطور:</h3>
      <p style={{ color: badgeColor, fontWeight: 'bold' }}>{badgeTitle}</p>
    </div>
  );
}`,
      output: `مرحباً يا سلطان\nنقاطك القادمة: 100\nمكافأة النقاط المضاعفة: 160\nالحالة: 🌟 متأهل للمكافأة`,
      mistakes: [
        {
          wrong: `// محاولة حشر حلقة for تقليدية أو جملة if داخل أقواس JSX\nreturn <div>{ for (let i = 0; i < 5; i++) { ... } }</div>; // ❌ SyntaxError: Unexpected token 'for'`,
          correct: `// استخدام دوال التعبيرات مثل map للمصفوفات والمعامل الثلاثي للشروط:\nreturn <div>{items.map(item => <span key={item}>{item}</span>)}</div>; // ✅ سليم ومثالي`,
          explanation: "حلقات for وجمل if هي Statements ولا تُرجع قيمة رياضية مباشرة؛ ومحرك JSX يشترط تعبيراً ينتج قيمة قابلة للرسم."
        }
      ],
      bestPractices: [
        "إذا كان الشرط بسيطاً جداً، استخدم المعامل الثلاثي `condition ? trueVal : falseVal` داخل JSX.",
        "إذا كان المنطق الشرطي طويلاً أو يحتوي على شروط متداخلة كثيرة، فاحسبه خارج JSX في متغير مستقل أولاً لتنظيف الكود.",
        "تذكر أن القيم المنطقية `true` و `false` والقيمتين `null` و `undefined` لا ترسم أي شيء على الشاشة عند وضعها داخل JSX."
      ],
      infographic: {
        title: "إنفوجرافيك: ما الذي يدخل داخل أقواس JSX المعقوفة؟",
        concept: "What Can Go Inside JSX Curly Braces",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 ما يُسمح وما يُمنع داخل أقواس JSX {}        │
└─────────────────────────────────────────────────────────────┘
  ✅ مسموح (Expressions - تعبيرات تعيد قيمة):
  • المتغيرات:         {user.name}
  • العمليات الحسابية: {price * 1.15}
  • استدعاء الدوال:    {formatDate(item.date)}
  • المعامل الثلاثي:   {isOnline ? '🟢' : '⚪'}
  • دوال المصفوفات:    {list.map(x => <li>{x}</li>)}
  
  ❌ ممنوع تماماً (Statements - جمل تقريرية لا تعيد قيمة):
  • جملة if الكاملة:   { if (x) { ... } }
  • حلقة for العادية:  { for (let i...) { ... } }
  • جملة switch:       { switch(val) { ... } }`
      }
    },
    {
      id: "5.1.d",
      title: "استخدام الأقواس المعقوفة {}",
      englishTitle: "Curly Braces in JSX: The JavaScript Portal Window",
      definition: "الأقواس المعقوفة `{}` في JSX هي 'البوابة السحرية ونافذة العبور' التي تنقلك من وضع كتابة نصوص الـ HTML إلى وضع كتابة كود JavaScript حي في قلب الواجهة؛ تسمح لك بحقن النصوص الحية، وتمرير الخصائص الديناميكية، وربط معالجات الأحداث، وإقحام كائنات التنسيقات المضمنة `{{ ... }}`.",
      analogy: "تخيل أنك تبني نافذة زجاجية في جدار خرساني مصمت: الجدار هو كود HTML الثابت؛ والأقواس المعقوفة `{}` هي تلك النافذة الشفافة التي تطل من خلالها على محرك JavaScript الذكي في الداخل! كل ما تضعه داخل النافذة يُنفذ برمجياً ويعود ناتجه ليظهر على الجدار.",
      why: "بدون الأقواس المعقوفة، ستكون صفحة الويب ميتة وثابتة؛ فلن تستطيع عرض اسم المستخدم الحقيقي، ولن تستطيع تمرير روابط الصور الديناميكية، ولن تتمكن من ربط نقرات الفأرة بالدوال.",
      terms: [
        { term: "Curly Braces {}", pronunciation: "كيرلي بريسز", meaning: "الأقواس المعقوفة التي تفعل وضع كود JavaScript داخل JSX" },
        { term: "JSX Interpolation", pronunciation: "إنتربوليشن", meaning: "إقحام ودمج كود JavaScript الحي داخل وسوم الواجهة" },
        { term: "Double Curlies {{ }}", pronunciation: "دبل كيرليز", meaning: "القوسان المزدوجان؛ القوس الخارجي لـ JSX والقوس الداخلي لكائن JS" }
      ],
      syntax: "// 1. حقن نص داخل العنصر:\n<h2>{title}</h2>\n\n// 2. حقن خاصية ديناميكية:\n<img src={avatarUrl} alt={altText} />\n\n// 3. حقن كائن تنسيق مضمن (Double Curlies):\n<div style={{ color: 'red', fontSize: '18px' }}>نص أحمر</div>",
      codeSimple: `// نموذج يوضح مختلف استخدامات الأقواس المعقوفة {}
function UserProfileWidget() {
  const user = {
    name: 'ليلى الحربي',
    avatar: 'https://via.placeholder.com/80',
    themeColor: '#7c3aed'
  };

  return (
    // استخدام {{}} لتمرير كائن تنسيق CSS مضمن
    <div style={{ padding: '16px', border: \`2px solid \${user.themeColor}\`, borderRadius: '12px' }}>
      {/* استخدام {} لتمرير رابط الصورة الديناميكي للخاصية src */}
      <img src={user.avatar} alt={user.name} style={{ borderRadius: '50%' }} />

      {/* استخدام {} لعرض النص من الكائن */}
      <h3 style={{ color: user.themeColor }}>{user.name}</h3>
    </div>
  );
}`,
      codeAdvanced: `// فك لغز القوسين المزدوجين {{ }} الشهير في خاصية style
// الكثير من المبتدئين يظنون أن {{}} هي صياغة خاصة بـ React؛ ولكنها في الحقيقة قوسان مستقلان تماماً:
function DeconstructDoubleCurlies() {
  // 1. كائن JavaScript عادي للتنسيقات
  const myStyles = {
    backgroundColor: '#0f172a',
    color: '#38bdf8',
    padding: '12px'
  };

  // 2. تمرير الكائن بالقوس المفرد لـ JSX:
  // <div style={myStyles}>...</div>

  // 3. إذا لم تعرف متغيراً وكتبت الكائن مباشرة، فستحتاج للقوس الخارجي لـ JSX والقوس الداخلي للكائن:
  return (
    <div style={{ backgroundColor: '#0f172a', color: '#38bdf8', padding: '12px' }}>
      فك شفرة القوسين المزدوجين: القوس الخارجي هو بوابة JSX، والداخلي هو كائن الـ Object!
    </div>
  );
}`,
      output: `فك شفرة القوسين المزدوجين: القوس الخارجي هو بوابة JSX، والداخلي هو كائن الـ Object!`,
      mistakes: [
        {
          wrong: `// وضع علامات تنصيص حول الأقواس المعقوفة للخصائص:\n// <img src="{avatarUrl}" /> // ❌ سيعاملها كنص حرفي غريب اسمه "{avatarUrl}" ولن تظهر الصورة أبداً!`,
          correct: `// حذف علامات التنصيص تماماً عند استخدام الأقواس المعقوفة للخصائص:\n// <img src={avatarUrl} /> // ✅ سليم ويمرر قيمة المتغير الحقيقية`,
          explanation: "في JSX، إما أن تستخدم علامات التنصيص للنصوص الثابتة `src=\"logo.png\"`، أو تستخدم الأقواس المعقوفة للقيم الديناميكية `src={logoUrl}`؛ لا تخلطهما معاً أبداً."
        }
      ],
      bestPractices: [
        "لا تضع علامات تنصيص حول الأقواس المعقوفة للخصائص نهائياً.",
        "عند كتابة التنسيقات المضمنة، استخدم صياغة camelCase لأسماء الخواص مثل `backgroundColor` بدلاً من `background-color`.",
        "إذا كان كائن التنسيق كبيراً، فافصله في متغير مستقل خارج الـ JSX لتسهيل قراءة الكود."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح الأقواس المعقوفة في JSX وفك لغز {{ }}",
        concept: "JSX Curly Braces & Double Curlies Explained",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تشريح الأقواس المعقوفة {} وفك لغز {{ }}      │
└─────────────────────────────────────────────────────────────┘
  الأقواس المفردة {}: نافذة العبور لعالم JavaScript
  <img src={ photoUrl } />  ──> تقرأ قيمة المتغير photoUrl
  <h1>{ 5 + 5 }</h1>       ──> تحسب وتطبع 10
  
  القوسان المزدوجان {{}}:
  <div style={ { color: 'red', fontSize: '14px' } } />
              │   └────────────┬───────────────┘
              │                └── كائن JavaScript عادي (Object)
              └─────────────────── بوابة JSX لإدخال كود JS`
      }
    },
    {
      id: "5.1.e",
      title: "الفرق بين class و className",
      englishTitle: "class vs className: Reserved Keywords in JavaScript",
      definition: "في JSX، نستخدم السمة `className` دائماً بدلاً من السمة التقليدية `class` في HTML لتحديد أصناف وفئات الـ CSS للعناصر؛ لأن كلمة `class` هي كلمة محجوزة رسمياً في لغة JavaScript لإنشاء الأصناف البرمجية (ES6 Classes).",
      analogy: "تخيل أنك تسافر لبلد أجنبي وهناك كلمة في لغتك تعني 'مرحبا' ولكنها في لغتهم تعني 'الشرطة'! لا يمكنك نطق تلك الكلمة بحرية لأنها تسبب إرباكاً للمحرك الأمني للبلد. كلمة `class` في JavaScript لها معنى محجوز قانونياً، ولذا اختارت React كلمة بديلة واضحة ومهذبة هي `className` لتفادي أي سوء تفاهم مع محرك اللغة.",
      why: "لأن كود JSX يتحول في النهاية إلى كائنات JavaScript عادية؛ فكتابة `<div class=\"box\">` تترجم إلى `{ class: 'box' }`، وفي الإصدارات المبكرة كان هذا يسبب انهياراً للمترجمات؛ ورغم أن المعايير الحديثة تدعم أسماء الكائنات المحجوزة، ظلت React ملتزمة بـ `className` للتطابق مع خاصية DOM القياسية `element.className`.",
      terms: [
        { term: "className", pronunciation: "كلاس نيم", meaning: "السمة الرسمية المعتمدة في React لتحديد فئات الـ CSS" },
        { term: "class (Reserved Keyword)", pronunciation: "كلاس", meaning: "الكلمة المحجوزة في JS لتعريف الأصناف الموجهة للكائنات (OOP Classes)" },
        { term: "element.className", pronunciation: "دوم كلاس نيم", meaning: "الخاصية البرمجية الأصلية في شجرة الـ DOM للوصول لفئات العنصر" }
      ],
      syntax: "// في HTML العادية:\n// <div class=\"container active\"></div>\n\n// في React JSX الإلزامية:\n<div className=\"container active\"></div>",
      codeSimple: `// استخدام className الثابت والديناميكي
import React from 'react';

function StatusCard({ isActive }) {
  return (
    // دمج className ديناميكي باستخدام القوالب النصية Template Literals
    <div className={\`card-box \${isActive ? 'status-active' : 'status-idle'}\`}>
      <h3 className="card-title">بطاقة الخادم</h3>
      <p className="card-desc">الحالة الحالية للخادم السحابي.</p>
    </div>
  );
}

export default StatusCard;`,
      codeAdvanced: `// نمط احترافي: بناء classNames ديناميكية ونظيفة في React بدون أخطاء المسافات
// محاكاة لدوال شهيرة مثل clsx أو classnames
function classNames(...classes) {
  // تصفية القيم الخاطئة والفارغة ودمجها بمسافة
  return classes.filter(Boolean).join(' ');
}

function ModernButton({ variant = 'primary', isBlock, disabled, children }) {
  // بناء فئات CSS بأسلوب شرطي فائق الأناقة
  const btnClass = classNames(
    'btn',
    variant === 'primary' && 'btn-primary',
    variant === 'danger' && 'btn-danger',
    isBlock && 'btn-full-width',
    disabled && 'btn-disabled'
  );

  return (
    <button className={btnClass} disabled={disabled}>
      {children}
    </button>
  );
}

console.log('مكون الزر يدير فئات className الشرطية باحترافية تامة!');`,
      output: `مكون الزر يدير فئات className الشرطية باحترافية تامة!`,
      mistakes: [
        {
          wrong: `// استخدام class في JSX عن طريق الخطأ الناتج من نسخ كود HTML جاهز:\n// return <div class="alert alert-danger">انتبه!</div>; // ⚠️ تحذير مزعج في الكونسول: Did you mean "className"?`,
          correct: `// استبدالها بـ className فوراً:\n// return <div className="alert alert-danger">انتبه!</div>; // ✅ كود نظيف ومطابق لمعايير React`,
          explanation: "React ستتسامح معك أحياناً في المتصفح ولكنها ستطلق تحذيراً أصفر صارخاً في الكونسول يطلب منك استخدام `className`."
        }
      ],
      bestPractices: [
        "استخدم أداة البحث والاستبدال في VS Code (Ctrl + H) لاستبدال `class=\"` بـ `className=\"` عند نسخ قوالب HTML جاهزة من الإنترنت.",
        "استخدم مكتبات مساعدة مثل `clsx` أو `tailwind-merge` لإدارة وتنسيق الـ `className` الشرطية المتعددة.",
        "تذكر أن المكونات المخصصة التي تبنيها يمكنك أن تسمي خصائصها بأي اسم تريده، ولكن عناصر HTML القياسية (div, span, button) تشترط حصرياً `className`."
      ],
      infographic: {
        title: "إنفوجرافيك: سر التحول من class إلى className في React",
        concept: "The Story Behind className in React",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 لماذا نكتب className بدلاً من class؟         │
└─────────────────────────────────────────────────────────────┘
  في JavaScript الأصلية:
  class Person { ... } ◄── كلمة محجوزة لبناء الأصناف البرمجية! 🚫
  
  في شجرة الـ DOM الأصلية للمتصفح:
  const el = document.getElementById('my-div');
  el.className = 'active'; ◄── الاسم البرمجي الحقيقي في المتصفح هو className!
  
  القرار الهندسي لـ React:
  اعتماد className في JSX للتطابق مع معيار DOM الأصلي وتفادي تضارب لغة JS ✅`
      }
    },
    {
      id: "5.1.f",
      title: "استخدام htmlFor",
      englishTitle: "htmlFor: Label Association Without Keyword Collision",
      definition: "في JSX، نستخدم السمة `htmlFor` لربط عنصر التسمية `<label>` بحقل الإدخال `<input>` المقابل له بواسطة معرف الحقل `id`، بدلاً من السمة التقليدية `for` في HTML؛ لأن كلمة `for` هي كلمة محجوزة رسمياً في لغة JavaScript لحلقات التكرار (for loops).",
      analogy: "تخيل أن لديك مفتاحين متطابقين في الشكل: المفتاح الأول يفتح خزانة الملابس (حلقات التكرار for)، وتريد اسماً لمفتاح ثانٍ يفتح صندوق الأمانات (ربط التسمية بحقل النموذج). لكي لا تختلط المفاتيح في جيبك وتسحب مفتاح الخزانة بالخطأ وأنت أمام الصندوق، تضع شريطاً لاصقاً على المفتاح الثاني وتكتب عليه 'htmlFor' لتمييزه فوراً!",
      why: "ربط التسمية بالحقل عبر `htmlFor` هو ركيزة أساسية لمعايير إمكانية الوصول العالمية (Accessibility - a11y)؛ فهو يسمح للمستخدم بالنقر على النص التوضيحي لتفعيل حقل الإدخال تلقائياً، ويمكن قارئات الشاشة (Screen Readers) للمكفوفين من قراءة وصف الحقل بدقة.",
      terms: [
        { term: "htmlFor", pronunciation: "إتش تي إم إل فور", meaning: "السمة الرسمية في JSX لربط وسم label بحقل الإدخال" },
        { term: "for (Loop Keyword)", pronunciation: "فور كيوورد", meaning: "الكلمة المحجوزة في لغة JavaScript لحلقات التكرار التقريرية" },
        { term: "Accessible Labeling", pronunciation: "أكسيسيبل ليبلنغ", meaning: "تسمية الحقول وفق معايير سهولة الوصول لذوي الاحتياجات الخاصة" }
      ],
      syntax: "// في HTML العادية:\n// <label for=\"username\">الاسم:</label><input id=\"username\" />\n\n// في React JSX الإلزامية:\n<label htmlFor=\"username\">الاسم:</label>\n<input id=\"username\" />",
      codeSimple: `// نموذج حقل إدخال نموذجي مع ربط التسمية بـ htmlFor
import React from 'react';

function LabeledInputField({ label, id, type = 'text', placeholder }) {
  return (
    <div className="input-group" style={{ marginBottom: '14px' }}>
      {/* استخدام htmlFor لربطه بـ id الحقل بالأسفل */}
      <label 
        htmlFor={id} 
        style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', cursor: 'pointer' }}
      >
        {label}
      </label>

      {/* عند نقر المستخدم على الـ label، سيقفز التركيز (Focus) لهذا الحقل فوراً! */}
      <input 
        id={id} 
        type={type} 
        placeholder={placeholder} 
        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #334155' }}
      />
    </div>
  );
}

export default LabeledInputField;`,
      codeAdvanced: `// نموذج لتسجيل المستخدم يجمع عدة حقول مربوطة بـ htmlFor
function RegistrationForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <LabeledInputField 
        label="اسم المستخدم الكامل:" 
        id="reg-fullname" 
        placeholder="مثال: عمر الفاروق" 
      />

      <LabeledInputField 
        label="كلمة المرور السرية:" 
        id="reg-password" 
        type="password" 
        placeholder="••••••••" 
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
        <input type="checkbox" id="agree-terms" />
        {/* ربط مربع الاختيار بالنص التوضيحي */}
        <label htmlFor="agree-terms" style={{ cursor: 'pointer', fontSize: '0.9rem' }}>
          أوافق على الشروط والأحكام وسياسة الخصوصية
        </label>
      </div>
    </form>
  );
}`,
      output: `[نموذج تسجيل متكامل: النقر على أي نص ينقل مؤشر الكتابة إلى الحقل المناسب فوراً]`,
      mistakes: [
        {
          wrong: `// استخدام for في وسم label داخل JSX:\n// <label for="email">البريد:</label> // ⚠️ تحذير فوري في الكونسول: Did you mean "htmlFor"?`,
          correct: `// استبدالها بـ htmlFor:\n// <label htmlFor="email">البريد:</label> // ✅ سليم ومطابق للمواصفات القياسية`,
          explanation: "كلمة for مخصصة لحلقة التكرار في JavaScript؛ ولذلك تفرض React استخدام htmlFor للتطابق مع خاصية الـ DOM المقابلة `labelElement.htmlFor`."
        }
      ],
      bestPractices: [
        "اربط دائماً كل حقل إدخال بوسم `<label htmlFor=\"...\">` ولا تعتمد على النصوص العائمة وحدها.",
        "تأكد من تطابق قيمة `htmlFor` في الـ Label مع قيمة `id` في الـ Input بدقة حرفية.",
        "هناك أسلوب بديل في إمكانية الوصول وهو تغليف حقل الإدخال داخل وسم الـ Label مباشرة: `<label>الاسم: <input /></label>`، ولكن الصياغة الصريحة بـ htmlFor تظل الأكثر شيوعاً ودقة في التصميم."
      ],
      infographic: {
        title: "إنفوجرافيك: سحر وأهمية htmlFor في النماذج وسهولة الوصول",
        concept: "The Role of htmlFor in Form Accessibility",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 كيف يعمل الربط السحري بـ htmlFor؟            │
└─────────────────────────────────────────────────────────────┘
  <label htmlFor="user-phone">رقم الهاتف:</label>
           │
           │ (رابط غير مرئي يطابق المعرف id)
           ▼
  <input id="user-phone" type="tel" />
  
  الفائدة المذهلة للمستخدم:
  نقر الزائر على كلمة "رقم الهاتف" ──> تفعيل حقل الإدخال تلقائياً! 🎯
  (تجربة لمس مريحة على الجوال ودعم كامل لقارئات الشاشة)`
      }
    },
    {
      id: "5.1.g",
      title: "إغلاق العناصر بشكل صحيح",
      englishTitle: "Self-Closing Tags: The Strict XML Rule of JSX",
      definition: "في JSX، كل عنصر بدون استثناء يجب أن يُغلق بشكل صريح. إذا كان العنصر يحتوي على وسم فتح وإغلاق كالمعتاد مثل `<div>...</div>`، فيجب كتابة وسم الإغلاق. أما إذا كان العنصر فارغاً ولا يحتوي على أطفال أو محتوى داخلي (مثل عناصر `<img>` و `<input>` و `<br>` و `<hr>`)، فيجب إغلاقه ذاتياً بإضافة شرطة مائلة قبل قوس النهاية الإلزامي: `<img />` و `<input />`.",
      analogy: "تخيل أنك تغادر منزلك: لا يمكنك ترك أي نافذة أو باب مفتوحاً في مهب الريح! إما أن تغلق الباب بالمفتاح الكبير (وسم الإغلاق الكامل `</div>`)، أو تقفل مزلاج النافذة الذاتي الصغير بإحكام (وسم الإغلاق الذاتي `/>`). في JSX، ترك أي باب مفتوح يطلق جهاز الإنذار فوراً ويمنع التطبيق من العمل!",
      why: "لغة HTML القديمة كانت متساهلة جداً لدرجة الفوضى؛ فكان يمكنك كتابة `<img src=\"pic.jpg\">` وتتركها مفتوحة، وكان المتصفح يخمن مكان نهايتها. JSX تتبع معيار XML الصارم لإزالة أي غموض في بناء شجرة الـ Virtual DOM وضمان أن كل عقدة في الشجرة محددة البداية والنهاية رياضياً بنسبة 100%.",
      terms: [
        { term: "Self-Closing Tag", pronunciation: "سيلف كلوزينغ تاج", meaning: "وسم الإغلاق الذاتي المنتهي بشرطة مائلة />" },
        { term: "Void Elements", pronunciation: "فويد إليمنتس", meaning: "العناصر الفارغة في HTML التي لا تقبل أي محتوى بداخلها" },
        { term: "Unterminated JSX", pronunciation: "أن تيرمينيتد جي إس إكس", meaning: "خطأ نحوي قاتل ينطلق عند نسيان إغلاق أحد وسوم JSX" }
      ],
      syntax: "// عناصر عادية ذات محتوى:\n<button>انقر هنا</button>\n\n// عناصر فارغة ذات إغلاق ذاتي إلزامي:\n<img src=\"logo.png\" alt=\"شعار\" />\n<input type=\"text\" />\n<hr />\n<br />",
      codeSimple: `// نموذج يوضح الإغلاق السليم لكافة الوسوم الفارغة
function ContactCard() {
  return (
    <div className="card">
      {/* 1. إغلاق الصورة ذاتياً */}
      <img src="https://via.placeholder.com/100" alt="المستخدم" />

      {/* 2. إغلاق خط الفاصل الأفقي ذاتياً */}
      <hr />

      {/* 3. إغلاق حقول الإدخال ذاتياً */}
      <input type="text" placeholder="الاسم" />
      
      {/* 4. إغلاق فاصل السطر ذاتياً */}
      <br />
      
      <input type="email" placeholder="البريد" />
    </div>
  );
}`,
      codeAdvanced: `// قاعدة متقدمة: مكونات React المخصصة التي لا تحتوي على أطفال يجب أن تُغلق ذاتياً أيضاً!
function CustomSpinner() {
  return <div className="loading-spinner">🌀</div>;
}

function DashboardHeader() {
  const isLoading = true;

  return (
    <header className="hdr">
      <h2>لوحة التحكم الحية</h2>
      {/* ❌ أسلوب ركيك طويل لا داعي له: <CustomSpinner></CustomSpinner> */}
      {/* ✅ الأسلوب الاحترافي النظيف: إغلاق المكون المخصص ذاتياً بـ /> */}
      {isLoading && <CustomSpinner />}
    </header>
  );
}`,
      output: `لوحة التحكم الحية 🌀\n[تطبيق قواعد الإغلاق الذاتي على وسوم HTML ومكونات React المخصصة]`,
      mistakes: [
        {
          wrong: `// نسيان إغلاق وسم hr أو br أو img في JSX:\n// return <div>مرحبا<br>كيف حالك<hr></div> // ❌ خطأ ترجمة يوقف المشروع: Expected corresponding JSX closing tag for '<br>'!`,
          correct: `// إضافة الشرطة المائلة /> لجميع الوسوم الفارغة دائماً:\n// return <div>مرحبا<br />كيف حالك<hr /></div> // ✅ سليم ومثالي`,
          explanation: "محرك JSX لا يملك قائمة بالوسوم المسموح بتركها مفتوحة؛ القاعدة عالمية ومطلقة: كل وسم يبدأ بـ `<` يجب أن ينتهي إما بـ `</name>` أو بـ `/>`."
        }
      ],
      bestPractices: [
        "أغلق أي مكون React مخصص ذاتياً إذا لم تمرر له أطفالاً بداخله: `<UserBadge name=\"علي\" />`.",
        "فعل ميزة الإغلاق التلقائي للأقواس والوسوم في إعدادات محرر VS Code (Auto Close Tag).",
        "تأكد دائماً من وجود مسافة جمالية قبل الشرطة المائلة لسهولة القراءة: `<input />`."
      ],
      infographic: {
        title: "إنفوجرافيك: قاعدة الإغلاق الذاتي الصارمة في JSX",
        concept: "Self-Closing Tags Rule in JSX",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 قاعدة الإغلاق الإلزامي في لغة JSX            │
└─────────────────────────────────────────────────────────────┘
  هل العنصر يحتوي على نص أو مكونات بداخله؟
           ├─── نعم ───> وسم فتح وإغلاق كامل:  <button>نص</button>
           └─── لا  ───> إغلاق ذاتي فوري بـ />:
                         • <img src="..." />
                         • <input type="..." />
                         • <br />  و  <hr />
                         • <MyComponent /> (المكونات المخصصة)
  
  قاعدة لا استثناء لها:
  ممنوع نهائياً ترك أي وسم مفتوحاً في الهواء في لغة JSX! 🛑`
      }
    },
    {
      id: "5.1.h",
      title: "إرجاع عنصر جذري واحد",
      englishTitle: "Single Root Element Rule: Why Components Return One Parent",
      definition: "قاعدة العنصر الجذري الواحد (Single Root Element) في React تنص على أن كل دالة مكون يجب أن ترجع عنصراً جذرياً واحداً جامعاً في قمة الـ JSX العائد؛ فلا يمكنك إرجاع عنصرين متجاورين جنباً إلى جنب مثل `<h1>...</h1><p>...</p>` دون تغليفهما داخل عنصر أب واحد (مثل `<div>` أو React Fragment).",
      analogy: "تخيل دالة حسابية في الرياضيات: الدالة الرياضية يمكن أن تستقبل عدة أرقام كمدخلات، لكنها عندما ترجع النتيجة عبر كلمة `return`، يجب أن تعيد 'قيمة رقمية واحدة' فقط (لا يمكنك كتابة `return 5, 10;` في لغة برمجية!). نفس الشيء في React: دالة المكون تعيد قيمة واحدة، وتلك القيمة هي شجرة واحدة لها جذر واحد جامع.",
      why: "لأن كود JSX يتحول إلى استدعاءات دوال JavaScript نقية؛ فالدالة تتحول إلى `return React.createElement(...)`. لغة JavaScript تمنع الدالة من إرجاع استدعاءين متجاورين في نفس السطر (`return fn1(), fn2();` مستحيل!). لذلك يجب أن يكون هناك استدعاء أب رئيسي واحد يحضن بداخله كافة الأطفال كمعاملات.",
      terms: [
        { term: "Single Root Element", pronunciation: "سنجل روت إليمنت", meaning: "قاعدة إرجاع عنصر أب واحد في قمة كود الـ JSX" },
        { term: "Adjacent JSX Elements", pronunciation: "أدجيسنت إليمنتس", meaning: "عناصر JSX المتجاورة التي ترفض React إرجاعها دون أب" },
        { term: "Wrapper Hell", pronunciation: "رابر هيل", meaning: "فوضى تكديس وسوم الـ div الإضافية لحل مشكلة الجذر الواحد" }
      ],
      syntax: "// ❌ غير مسموح ومرفوض:\n// return (\n//   <h1>عنوان</h1>\n//   <p>فقرة</p>\n// );\n\n// ✅ سليم بتغليفهما في جذر واحد:\nreturn (\n  <div>\n    <h1>عنوان</h1>\n    <p>فقرة</p>\n  </div>\n);",
      codeSimple: `// تغليف العناصر المتجاورة في عنصر جذري واحد
function ProductHeader() {
  return (
    // عنصر أب واحد (header) يجمع كل العناصر الفرعية تحته بنجاح
    <header className="product-header">
      <h2>هاتف آيفون 16 برو</h2>
      <p className="subtitle">أحدث تقنيات الذكاء الاصطناعي والكاميرا.</p>
      <span className="price">4,500 ر.س</span>
    </header>
  );
}

export default ProductHeader;`,
      codeAdvanced: `// إثبات سبب القاعدة من زاوية مترجم JavaScript
// إذا حاولنا تخيل كيف سيترجم الكود الخاطئ إلى دالة JavaScript:
/*
  function BadTranslation() {
    return (
      React.createElement('h1', null, 'أولاً')
      React.createElement('p', null, 'ثانياً') // ❌ خطأ نحوي قاتل في JS: لا يمكن وضع قيمتين بعد return دون جمع!
    );
  }

  بينما الكود المغلف في أب واحد:
  function GoodTranslation() {
    return React.createElement('div', null, // ✅ استدعاء واحد فقط يعيد كائناً جذرياً واحداً يحمل أطفاله!
      React.createElement('h1', null, 'أولاً'),
      React.createElement('p', null, 'ثانياً')
    );
  }
*/
console.log('فهم الترجمة الباطنية يفسر لك لماذا تفرض React حتماً عنصراً جذرياً واحداً!');`,
      output: `فهم الترجمة الباطنية يفسر لك لماذا تفرض React حتماً عنصراً جذرياً واحداً!`,
      mistakes: [
        {
          wrong: `// إرجاع عناصر متجاورة بدون أب جامع:\n// return (\n//   <h1>العنوان</h1>\n//   <button>زر</button>\n// ); // ❌ خطأ فادح: Adjacent JSX elements must be wrapped in an enclosing tag!`,
          correct: `// تغليف العناصر إما بـ <div> أو بـ Fragment فارغ <>...</>:\n// return (\n//   <>\n//     <h1>العنوان</h1>\n//     <button>زر</button>\n//   </>\n// ); // ✅ سليم ومثالي`,
          explanation: "نص رسالة الخطأ واضح جداً: يجب تغليف العناصر المتجاورة في وسم جامع يحضنها ليتم إرجاع قيمة جذرية واحدة."
        }
      ],
      bestPractices: [
        "إذا كان العنصر الأب يخدم التصميم أو فئات CSS، فاستخدم وسماً دلالياً مناسباً مثل `<header>` أو `<main>` أو `<div>`.",
        "إذا كنت لا تحتاج لأي وسم حقيقي في الـ DOM ولا تريد تلويث الصفحة بـ div زائدة، فاستخدم React Fragment فوراً.",
        "احرص دائماً على إحاطة جملة `return (...)` بأقواس دائرية لحماية الكود من الـ Automatic Semicolon Insertion."
      ],
      infographic: {
        title: "إنفوجرافيك: سر قاعدة العنصر الجذري الواحد في دوال المكونات",
        concept: "The Single Root Element Mandate",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 سر قاعدة العنصر الجذري الواحد في React       │
└─────────────────────────────────────────────────────────────┘
  ❌ كود مرفوض (عنصران في الهواء):
  return (
    <h1>العنوان</h1>   ──┐
    <p>الوصف</p>       ──┴──> مستحيل في JS! الدالة تعيد قيمة واحدة فقط!
  );

  ✅ كود سليم (جذر واحد يحمل الجميع):
  return (
    <div>              ◄── قيمة واحدة جذرية تخرج من دالة return
      <h1>العنوان</h1>
      <p>الوصف</p>
    </div>
  );`
      }
    },
    {
      id: "5.1.i",
      title: "استخدام React Fragments",
      englishTitle: "React Fragments (<>...</>): Clean DOM Without Wrapper Bloat",
      definition: "المجزءات أو القصاصات (React Fragments) والممثلة بالصياغة المختصرة الفارغة `<>...</>` (أو `<React.Fragment>...</React.Fragment>`) هي وسيلة عبقرية تتيح لك جمع وتغليف عدة عناصر متجاورة معاً لتلبية شرط الجذر الواحد، دون توليد أو إضافة أي عنصر أو وسم `<div>` زائد في شجرة الـ DOM الحقيقية للمتصفح.",
      analogy: "تخيل أنك تشتري باقة زهور منسقة: يقوم البائع بلف سيقان الزهور بشريط لاصق خفيف وشفاف جداً ليحملها معاً أثناء نقلها في يدك. وعندما تضع الزهور في المزهرية في منزلك، يختفي الشريط اللاصق تماماً وتظهر الزهور حرة ومتناسقة! الـ Fragment هو ذلك الشريط الشفاف الذي يجمع العناصر دون أن يترك أثراً في الصفحة.",
      why: "يحميك من داء 'فوضى الـ div الزائدة' (div Soup) التي كانت تدمر تخطيطات Flexbox و CSS Grid قديماً، وتفسد جداول الـ HTML؛ فمثلاً في الجدول لا يمكنك وضع `<div>` بين `<tr>` و `<td>` لأن ذلك يكسر المعايير ويشوه التخطيط.",
      terms: [
        { term: "React Fragment", pronunciation: "رياكت فراجمنت", meaning: "مكون شفاف لتجميع العناصر دون إنتاج عقدة حقيقية في ال DOM" },
        { term: "Short Syntax (<>...</>)", pronunciation: "شورت سينتاكس", meaning: "الصياغة المختصرة السريعة للـ Fragment بأقواس فارغة" },
        { term: "div Soup", pronunciation: "ديف سوب", meaning: "فوضى تكدس وسوم الـ div الزائدة وغير المفيدة في الصفحة" }
      ],
      syntax: "// 1. الصياغة المختصرة الأكثر شيوعاً:\n<>\n  <h1>عنوان</h1>\n  <p>فقرة</p>\n</>\n\n// 2. الصياغة الكاملة (تستخدم فقط عند الحاجة لتمرير خاصية key في الحلقات):\n<React.Fragment key={item.id}>\n  <dt>{item.term}</dt>\n  <dd>{item.desc}</dd>\n</React.Fragment>",
      codeSimple: `// حل مشكلة تخطيط Flexbox بـ React Fragment
import React from 'react';

function NavigationLinks() {
  return (
    // استخدام الصياغة المختصرة <>...</>
    // لن يُولد أي div في المتصفح؛ ستظهر الروابط مباشرة كأبناء لقائمة التنقل!
    <>
      <a href="#home">الرئيسية</a>
      <a href="#courses">الدورات</a>
      <a href="#contact">اتصل بنا</a>
    </>
  );
}

export default NavigationLinks;`,
      codeAdvanced: `// الحالة الوحيدة التي تشترط استخدام <React.Fragment> الكامل بدلاً من <>...</>:
// عند استخدام الحلقات التكرارية (map) والحاجة لتمرير خاصية key فريدة!
import React from 'react';

function GlossaryList({ items }) {
  return (
    <dl className="glossary">
      {items.map((item) => (
        // الصياغة المختصرة <> لا تقبل الخصائص؛ لذا نستخدم React.Fragment الصريحة لتمرير key
        <React.Fragment key={item.id}>
          <dt style={{ fontWeight: 'bold', color: '#38bdf8' }}>{item.term}</dt>
          <dd style={{ marginBottom: '10px', color: '#94a3b8' }}>{item.definition}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

const sampleGlossary = [
  { id: 1, term: 'Props', definition: 'خصائص ممررة من المكون الأب للابن.' },
  { id: 2, term: 'State', definition: 'بيانات داخلية يديرها المكون وتتغير مع الوقت.' }
];

console.log('مكون المعجم ينفذ الـ Fragment مع خاصية key بنظافة تامة!');`,
      output: `مكون المعجم ينفذ الـ Fragment مع خاصية key بنظافة تامة!`,
      mistakes: [
        {
          wrong: `// محاولة تمرير خاصية key إلى الصياغة المختصرة الفارغة:\n// return <key={item.id}>...</> // ❌ خطأ صياغي فادح! الصياغة المختصرة لا تقبل أي سمات نهائياً!`,
          correct: `// استيراد واستخدام الاسم الكامل <React.Fragment key={item.id}> عندما تحتاج لتمرير مفتاح key ✅`,
          explanation: "الصياغة المختصرة `<>...</>` صُممت للبساطة ولا تقبل أي سمات أو خصائص؛ والحالة الوحيدة لاستخدام الاسم الصريح `React.Fragment` هي عند الحاجة لتمرير خاصية `key` في القوائم."
        }
      ],
      bestPractices: [
        "استخدم الصياغة المختصرة `<>...</>` كخيارك الافتراضي الأول في 99% من الحالات لتغليف العناصر المتجاورة.",
        "تجنب استخدام `<div>` لمجرد إرضاء شرط الجذر الواحد؛ حافظ على نظافة شجرة الـ DOM واستخدم Fragments.",
        "تذكر استخدام Fragments لحماية تخطيطات CSS Flexbox و CSS Grid والجداول وقوائم التعريفات `<dl>` من التشتت."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة الـ div العادية مقابل React Fragment الشفافة",
        concept: "div vs React Fragment in the DOM",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المقارنة في شجرة الـ DOM الحقيقية            │
└─────────────────────────────────────────────────────────────┘
  عند استخدام <div> العادية:
  <div class="flex-container">
    <div>  ◄── وسم زائد شوه تخطيط الـ Flexbox! ❌
      <button>1</button>
      <button>2</button>
    </div>
  </div>
  
  عند استخدام React Fragment (<>...</>):
  <div class="flex-container">
    <button>1</button>  ◄── الأزرار أصبحت أبناء مباشرة للـ Flexbox فوراً! ✅
    <button>2</button>
  </div>
  (الـ Fragment اختفى تماماً كأنه غير موجود وترك العناصر متناسقة)`
      }
    },
    {
      id: "5.1.j",
      title: "قواعد كتابة JSX",
      englishTitle: "JSX Golden Syntax Rules: Comments, Styles & Attributes",
      definition: "قواعد كتابة JSX الذهبية هي مجموعة الضوابط الإلزامية التي تحكم كتابة الواجهات في React: كتابة التعليقات داخل أقواس تعبيرات `{/* تعليق */}`، كتابة خصائص التنسيقات المضمنة بصيغة سنام الجمل ككائنات داخل `style={{ ... }}`, وتوحيد أسماء السمات (camelCase)، وتحديد القيم المنطقية المختصرة (مثل `disabled` تعادل `disabled={true}`).",
      analogy: "تخيل أنك تلعب مباراة شطرنج دولية: هناك قواعد أساسية للملعب (حركة الفيل وحركة الحصان)؛ إذا التزمت بها تلعب بمتعة وذكاء، وإذا خرقت قاعدة واحدة يوقفك الحكم فوراً. قواعد JSX هي تلك القواعد البسيطة الأربع التي تضمن ألا تقع في أي خطأ نحوي طوال مسيرتك.",
      why: "اتباع هذه القواعد يوفر عليك ساعات من البحث عن أخطاء غريبة؛ مثل لماذا يظهر التعليق المكتوب كنص عادي مشوه على الشاشة، أو لماذا لا يعمل تنسيق `background-color` في التنسيقات المضمنة.",
      terms: [
        { term: "JSX Comment", pronunciation: "جي إس إكس كومنت", meaning: "طريقة كتابة التعليقات داخل JSX بالأقواس {/* ... */}" },
        { term: "Inline Style Object", pronunciation: "إنلاين ستايل أوبجكت", meaning: "كتابة التنسيقات ككائن JS داخل style={{ ... }}" },
        { term: "Boolean Attributes", pronunciation: "بوليان أتريبيوتس", meaning: "الخصائص المنطقية التي يكفي كتابة اسمها فقط لتعتبر true" }
      ],
      syntax: "// 1. كتابة التعليقات داخل JSX:\n{/* هذا تعليق آمن وخفي لن يظهر للمستخدم */}\n\n// 2. التنسيق المضمن (camelCase والأرقام بدون px تلقائياً):\n<div style={{ marginTop: 20, backgroundColor: '#1e293b' }}></div>\n\n// 3. الخصائص المنطقية المختصرة:\n<input required disabled /> {/* تكافئ required={true} disabled={true} */}",
      codeSimple: `// تطبيق شامل للقواعد الذهبية الأربع لـ JSX
function GoldenRulesDemo() {
  return (
    <section 
      // استخدام camelCase للسمات
      tabIndex={0}
      // استخدام التنسيق المضمن السليم
      style={{ padding: '24px', backgroundColor: '#0f172a', color: '#f8fafc', borderRadius: 12 }}
    >
      {/* 1. هذا تعليق صحيح 100% داخل مساحة الـ JSX */}
      <h2 style={{ fontSize: '1.5rem', marginBottom: 12 }}>قواعد JSX الذهبية 📜</h2>

      {/* 2. خاصية منطقية مختصرة (disabled تعادل disabled={true}) */}
      <button disabled className="btn-inactive" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
        زر معطل حالياً
      </button>

      {/* 3. دمج نصوص وأرقام بأمان */}
      <p style={{ marginTop: 16 }}>الرقم: {100 + 50} بكسل</p>
    </section>
  );
}`,
      codeAdvanced: `// دليل تحويل خصائص CSS التقليدية إلى خصائص JSX المضمنة
const cssToJsxMap = [
  { css: 'background-color: red;', jsx: 'backgroundColor: "red"' },
  { css: 'font-size: 16px;', jsx: 'fontSize: 16 // الأرقام المجردة تعامل كـ px تلقائياً' },
  { css: 'z-index: 10;', jsx: 'zIndex: 10' },
  { css: 'border-radius: 8px;', jsx: 'borderRadius: "8px" أو 8' },
  { css: 'margin-top: 20px;', jsx: 'marginTop: 20' }
];

console.log('--- دليل تحويل خصائص CSS إلى كائنات JSX ---');
cssToJsxMap.forEach(item => {
  console.log(\`CSS: \${item.css.padEnd(25)} ──> JSX: \${item.jsx}\`);
});`,
      output: `--- دليل تحويل خصائص CSS إلى كائنات JSX ---\nCSS: background-color: red;    ──> JSX: backgroundColor: "red"\nCSS: font-size: 16px;           ──> JSX: fontSize: 16 // الأرقام المجردة تعامل كـ px تلقائياً\nCSS: z-index: 10;               ──> JSX: zIndex: 10\nCSS: border-radius: 8px;        ──> JSX: borderRadius: "8px" أو 8\nCSS: margin-top: 20px;          ──> JSX: marginTop: 20`,
      mistakes: [
        {
          wrong: `// كتابة تعليقات HTML العادية <!-- تعليق --> داخل JSX:\n// return <div><!-- هذا تعليق قديم --><h1>مرحبا</h1></div> // ❌ خطأ نحوي فادح!`,
          correct: `// استخدام تعليق JavaScript المغلف بالأقواس المعقوفة {/* ... */}:\n// return <div>{/* هذا تعليق سليم وخفي */}<h1>مرحبا</h1></div> // ✅ سليم ومثالي`,
          explanation: "في JSX، علامات `<!--` غير صالحة نحstreamياً؛ والتعليق داخل مساحة الـ JSX يجب أن يُكتب كتعليق كتلي في JS محاط بأقواس `{/* ... */}`."
        }
      ],
      bestPractices: [
        "استخدم ملفات CSS الخارجية أو Tailwind CSS بدلاً من الإفراط في كتابة التنسيقات المضمنة `style={{}}` لتسهيل الصيانة وتحسين الأداء.",
        "عند استخدام أرقام للمسافات والأبعاد في `style`، يمكنك كتابة الرقم مجرداً مثل `fontSize: 14` وستفهم React أنه بكسل تلقائياً.",
        "استخدم اختصار لوحة المفاتيح في VS Code `Ctrl + /` وسيتكفل المحرر بكتابة صياغة التعليق الصحيحة لك تلقائياً داخل JSX."
      ],
      infographic: {
        title: "إنفوجرافيك: لوحة القواعد الذهبية الأربع لكتابة JSX دون أخطاء",
        concept: "The 4 Golden Rules of JSX Syntax",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 لوحة القواعد الذهبية الأربع لكتابة JSX       │
└─────────────────────────────────────────────────────────────┘
  1. التعليقات:           {/* يُكتب التعليق هكذا حصراً داخل JSX */}
  2. التنسيق المضمن:      style={{ backgroundColor: 'blue', padding: 10 }}
  3. الخصائص المنطقية:    <input disabled />  (تعادل disabled={true})
  4. تسميات camelCase:   onClick, onChange, htmlFor, className`
      }
    }
  ],
  quiz: [
    {
      id: "q5.1.1",
      question: "لماذا نستخدم className بدلاً من class في لغة JSX؟",
      options: [
        "لأن كلمة class تزيد من حجم حزمة المشروع بمقدار 5 ميجابايت.",
        "لأن كلمة class هي كلمة محجوزة رسمياً في لغة JavaScript لبناء الـ ES6 Classes، واستخدام className يطابق خاصية الـ DOM الأصلية element.className.",
        "لأن المتصفح يمنع استخدام الألوان في العناصر التي تحمل كلمة class.",
        "لأن محرك البحث Google يعاقب المواقع التي تستخدم كلمة class."
      ],
      correctAnswer: 1,
      explanation: "كلمة class محجوزة في لغة JavaScript؛ واعتمدت React كلمة className للتوافق مع معيار DOM الأصلي `element.className` وتفادي أي تضارب لغوي."
    },
    {
      id: "q5.1.2",
      question: "ما الفائدة المعمارية الكبرى لاستخدام React Fragments (<>...</>)؟",
      options: [
        "تشفير كلمات المرور والبيانات البنكية في التطبيق.",
        "تجميع وتغليف عدة عناصر متجاورة لتلبية شرط الجذر الواحد دون تلويث شجرة الـ DOM بوسوم div إضافية قد تكسر تخطيطات Flexbox و CSS Grid.",
        "تسريع استجابة الخادم أثناء طلبات الـ Fetch.",
        "إجبار المستخدم على النقر مرتين لتفعيل الأزرار."
      ],
      correctAnswer: 1,
      explanation: "المجزءات (Fragments) تسمح لك بإرجاع عدة عناصر متجاورة دون توليد أي وسم أب إضافي في الـ DOM الحقيقي، مما يحافظ على نظافة الشجرة وسلامة تخطيطات Flexbox و Grid."
    },
    {
      id: "q5.1.3",
      question: "كيف تُكتب التنسيقات المضمنة (Inline Styles) بشكل صحيح داخل وسم في JSX؟",
      options: [
        'style="color: red; font-size: 16px;" (بنفس نص HTML القديم).',
        'style={{ color: "red", fontSize: 16 }} (ككائن JavaScript داخل أقواس JSX المعقوفة وبصيغة camelCase).',
        'css={color: red}.',
        '<style>color: red</style> داخل الوسم مباشرة.'
      ],
      correctAnswer: 1,
      explanation: "التنسيقات المضمنة في JSX تتطلب كائن JavaScript؛ لذا نستخدم القوسين المزدوجين `style={{ color: 'red', fontSize: 16 }}` وتتحول أسماء الخواص إلى سنام الجمل camelCase."
    }
  ],
  exercise: {
    title: "تمرين عملي: تصحيح وتحويل كود HTML قديم مليء بالأخطاء إلى كود JSX نقي ومثالي",
    description: "أمامك كود بطاقة تسجيل دخول قديم كُتب بلغة HTML العادية ويحتوي على 5 أخطاء فادحة تمنع تشغيله في React (استخدام class و for، وسوم غير مغلقة، تعليق قديم، غياب الجذر الواحد). المطلوب: إعادة كتابة المكون بـ JSX حديث ونظيف يتبع كافة القواعد الذهبية واستخدام React Fragment.",
    starterCode: `// ❌ كود قديم معطوب يرفض محرك JSX تشغيله:
export default function BrokenLoginCard() {
  return (
    <!-- كارت تسجيل الدخول -->
    <div class="login-card">
      <h3 style="color: blue; font-size: 18px;">تسجيل الدخول</h3>
      <label for="user-input">اسم المستخدم:</label>
      <input type="text" id="user-input">
      <br>
      <button class="btn" onclick="alert('دخول')">دخول</button>
    </div>
    <p>ليس لديك حساب؟ سجل الآن</p>
  );
}`,
    hints: [
      "غلف العنصرين المتجاورين في قمة الـ return بـ `<>...</>`.",
      "استبدل التعليق القديم بـ `{/* كارت تسجيل الدخول */}`.",
      "استبدل `class` بـ `className`، و `for` بـ `htmlFor`.",
      "أغلق وسوم `input` و `br` ذاتياً بـ `/>`.",
      "حول التنسيق المضمن إلى كائن: `style={{ color: 'blue', fontSize: 18 }}` و `onClick` بـ camelCase."
    ],
    solution: `import React from 'react';

// ✅ الكود المصحح النظيف المطابق لمعايير JSX الذهبية
export default function SafeLoginCard() {
  return (
    // 1. تغليف العناصر المتجاورة في React Fragment شفاف (<>...</>) لتلبية شرط الجذر الواحد
    <>
      {/* 2. كتابة التعليق بأسلوب JSX السليم المعتمد */}
      {/* كارت تسجيل الدخول */}
      
      {/* 3. استبدال class بـ className */}
      <div className="login-card" style={{ maxWidth: '350px', padding: '20px', background: '#1e293b', borderRadius: '10px', color: '#f8fafc' }}>
        
        {/* 4. كتابة التنسيق المضمن ككائن JavaScript بـ camelCase */}
        <h3 style={{ color: '#38bdf8', fontSize: 18, marginBottom: '14px' }}>
          تسجيل الدخول الآمن
        </h3>

        {/* 5. استبدال for بـ htmlFor لربط الحقل */}
        <label htmlFor="user-input" style={{ display: 'block', marginBottom: '6px', fontSize: '0.9rem' }}>
          اسم المستخدم:
        </label>

        {/* 6. إغلاق وسم input ذاتياً بـ /> */}
        <input 
          type="text" 
          id="user-input" 
          placeholder="أدخل اسمك"
          style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #334155', background: '#0f172a', color: '#f8fafc' }} 
        />

        {/* 7. إغلاق وسم br ذاتياً بـ /> */}
        <br />

        {/* 8. كتابة الأحداث بصيغة camelCase ودالة سهمية */}
        <button 
          className="btn" 
          onClick={() => alert('تم تسجيل الدخول بنجاح!')}
          style={{ marginTop: '12px', background: '#2563eb', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}
        >
          دخول
        </button>
      </div>

      <p style={{ marginTop: '10px', color: '#94a3b8', fontSize: '0.85rem' }}>
        ليس لديك حساب؟ <a href="#register" style={{ color: '#38bdf8' }}>سجل الآن</a>
      </p>
    </>
  );
}`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: الدليل البصري الشامل لإتقان قواعد JSX",
    badge: "لغة JSX 1.0",
    summary: "لغة JSX تجمع بين جمال وبساطة HTML وقوة وذكاء JavaScript. إتقان قواعدها الصارمة يمنحك تجربة تطوير ممتعة وخالية تماماً من الأخطاء النحوية والتحذيرات.",
    points: [
      "JSX Translates to JS: كل سطر يتحول لاستدعاء دالة React.createElement في الذاكرة.",
      "Stricter than HTML: وسوم الإغلاق الذاتي /> إلزامية للوسوم الفارغة (img, input, br).",
      "Reserved Words: نستخدم className بدلاً من class، و htmlFor بدلاً من for.",
      "Curly Braces {}: نافذة العبور لإقحام كود JavaScript والتعبيرات الحية.",
      "Double Curlies {{}}: القوس الخارجي لبوابة JSX والداخلي لكائن التنسيق المضمن style.",
      "Fragments (<>...</>): حل سحري لتجميع العناصر دون توليد وسوم div زائدة ومزعجة."
    ]
  }
};
