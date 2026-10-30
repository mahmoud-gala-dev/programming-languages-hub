// src/data/sections/section2/topic3.js
// الموضوع 3: التعامل مع DOM (DOM Manipulation & Virtual DOM)

export const SECTION_2_TOPIC_3 = {
  id: "2.3",
  title: "التعامل مع DOM",
  englishTitle: "DOM Manipulation & Virtual DOM",
  description: "الجسر الذي يصل بين كود JavaScript وشاشة المتصفح: شجرة DOM، اختيار العناصر، تعديل النصوص والألوان حياً، معالجة النقرات والأحداث، وفهم سر الـ Virtual DOM في React.",
  icon: "Workflow",
  subtopics: [
    {
      id: "2.3.a",
      title: "مفهوم Document Object Model",
      englishTitle: "Document Object Model (DOM) Concept",
      definition: "شجرة الـ DOM (Document Object Model / نموذج كائن المستند) هي تمثيل شجري حي يقوم المتصفح ببنائه في الذاكرة فور قراءة ملف HTML؛ حيث يتحول كل وسم (مثل <body> أو <h1> أو <button>) إلى كائن برمجي (Node) يستطيع كود JavaScript التحدث معه وتغييره وإخفائه وإظهاره في أي لحظة.",
      analogy: "تخيل 'شجرة عائلية' أو 'مسرح عرائس متحركة': كود HTML المكتوب في الملف هو 'النص المكتوب على الورق'. أما شجرة الـ DOM في المتصفح فهي 'الدمى الحقيقية الواقفة على خشبة المسرح'؛ وكود JavaScript هو محرك الدمى الذي يمسك بالخيوط: يشير للدمية فترفع يدها، ويأمر الدمية الثانية بالابتسام فيتغير شكلها أمام الجمهور فوراً!",
      why: "بدون الـ DOM، لكانت صفحات الويب مجرد لوحات حجرية ميتة! الـ DOM هو الذي يجعل المتصفح يتيح للجافاسكريبت أن تعدل الصفحة بعد تحميلها (مثل إضافة رسالة جديدة في الشات دون إعادة تحميل الصفحة).",
      terms: [
        { term: "DOM", pronunciation: "دوم", meaning: "نموذج كائن المستند؛ الشجرة التفاعلية لصفحة الويب في الذاكرة" },
        { term: "Node", pronunciation: "نود", meaning: "العقدة أو الفرع في الشجرة (كل عنصر أو نص أو خاصية هو عقدة)" },
        { term: "Document", pronunciation: "دوكيومنت", meaning: "الكائن الرئيسي في جافاسكريبت الذي يمثل بوابة الدخول لكامل الصفحة" },
        { term: "Tree Structure", pronunciation: "تري ستركشر", meaning: "الهيكل الشجري؛ علاقة الآباء والأبناء والأشقاء بين العناصر" }
      ],
      syntax: "// كائن document هو البوابة الكبرى لشجرة الـ DOM\nconsole.log(document.title); // قراءة عنوان الصفحة الحالي\ndocument.title = 'عنوان جديد!'; // تغييره برمجياً فوراً!",
      simpleCode: `// تغيير عنوان تبويب المتصفح ولون خلفية الصفحة برمجياً عبر الـ DOM
// 1. قراءة وتحديث عنوان التبويب في المتصفح
document.title = "أهلاً بك في عالم الـ DOM التفاعلي!";

// 2. الوصول إلى جسم الصفحة <body> وتغيير لون خلفيته إلى الأزرق الداكن
document.body.style.backgroundColor = "#0f172a";

// 3. طباعة رسالة تؤكد اكتمال التعديل
console.log("تم تحديث شجرة الـ DOM في ذاكرة المتصفح بنجاح! ✓");`,
      advancedCode: `<!-- محاكي مرئي يوضح كيف ترى جافاسكريبت صفحة الويب كشجرة عائلية DOM Tree -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">شجرة الـ DOM الهرمية (The DOM Tree):</h4>

  <!-- رسم توضيحي هرمي للشجرة -->
  <div style="background: #020617; border: 1px solid #1e293b; border-radius: 8px; padding: 14px; font-family: monospace; font-size: 12px; line-height: 1.8;">
    <div style="color: #facc15;">document (الجذر الأعلى)</div>
    <div style="padding-right: 15px; color: #38bdf8;">└── &lt;html&gt; (الأب الأكبر)</div>
    <div style="padding-right: 30px; color: #a7f3d0;">├── &lt;head&gt; (الرأس)</div>
    <div style="padding-right: 45px; color: #94a3b8;">└── &lt;title&gt; (العنوان)</div>
    <div style="padding-right: 30px; color: #4ade80;">└── &lt;body&gt; (الجسم)</div>
    <div style="padding-right: 45px; color: #f43f5e;">├── &lt;h1&gt; (عقدة عنوان)</div>
    <div style="padding-right: 45px; color: #60a5fa;">└── &lt;button&gt; (عقدة زر تفاعلي)</div>
  </div>

  <div style="margin-top: 10px; font-size: 11px; color: #94a3b8; text-align: center;">
    جافاسكريبت تتنقل بين هذه الفروع كالقرد بين أغصان الشجرة لتصل لأي عنصر وتعدله!
  </div>
</div>`,
      outputExplanation: "يرى المتعلم الهرمية الكاملة للشجرة: كيف يتفرع كل وسم من سلفه، مما يوضح لماذا تسمى هيكلة الـ DOM بالبنية الشجرية.",
      commonMistakes: [
        {
          wrong: "الاعتقاد بأن ملف index.html المكتوب على القرص الصلب يتغير عندما تعدل الـ DOM بـ JavaScript.",
          right: "تذكر دائماً أن الـ DOM هو نسخة حية موجودة في ذاكرة الـ RAM المؤقتة للمتصفح فقط، ولا تمس الملف الأصلي على القرص.",
          reason: "الـ DOM تفاعلي وحي، وتحديث الصفحة يعيد بناءه من الملف الأصلي من الصفر."
        }
      ],
      bestPractices: [
        "ضع كود جافاسكريبت في نهاية وسم <body> أو استخدم خاصية defer في وسم <script> لضمان اكتمال بناء شجرة الـ DOM قبل محاولة قراءتها.",
        "افحص شجرة الـ DOM الحية دائماً من خلال تبويب Elements في أدوات المطور DevTools."
      ],
      infographic: {
        badge: "شجرة الحياة للويب",
        title: "مفهوم شجرة الـ DOM",
        icon: "GitBranch",
        colors: "from-blue-600 to-cyan-500",
        steps: [
          { title: "ملف HTML الأصلي", desc: "نص جامد مكتوب على القرص الصلب يقرأه المتصفح" },
          { title: "بناء الـ DOM", desc: "المتصفح يترجم كل وسم إلى كائن برمجي حي في ذاكرة الـ RAM" },
          { title: "كائن document", desc: "النافذة السحرية التي تتيح للغة JavaScript التحدث مع الصفحة" },
          { title: "التفاعل الحي المباشر", desc: "تعديل النصوص، وتبديل الألوان، وحذف وإضافة عناصر بلحظات" }
        ],
        summary: "الـ DOM هو المسرح الحي الذي يمنح جافاسكريبت قواها الخارقة في التحكم بالمتصفح."
      }
    },
    {
      id: "2.3.b",
      title: "اختيار عناصر الصفحة",
      englishTitle: "Selecting DOM Elements (querySelector & getElementById)",
      definition: "لاختيار عنصر في الصفحة والتعديل عليه، تستخدم جافاسكريبت دوال بحث متطورة؛ وأشهرها وأكثرها حداثة هي document.querySelector() التي تبحث بنفس محددات CSS (سواء بالصنف .class أو المعرف #id أو اسم الوسم)، ودالة document.querySelectorAll() لاختيار قائمة بكل العناصر المطابقة.",
      analogy: "تخيل أنك تنادي شخصاً في حفل كبير:\n- getElementById('ahmed'): مثل أن تنادي برقم الهوية القومية: 'صاحب البطاقة 101 تقدم!'، فيخرج لك شخص واحد فقط ومحدد بدقة.\n- querySelector('.btn'): مثل أن تقول: 'أول شخص يرتدي قميصاً أزرق تقدم!'.\n- querySelectorAll('.btn'): مثل أن تقول عبر مكبر الصوت: 'كل من يرتدي قميصاً أزرق في القاعة يقف في صف واحد!' فيتجمعون في مصفوفة.",
      why: "قبل أن تلون زراً أو تقرأ ما كتبه المستخدم في حقل إدخال، يجب أولاً أن 'تمسك به وتختاره' في كودك؛ دوال الاختيار هي يدك التي تمتد لشجرة الـ DOM للإمساك بالعنصر المستهدف.",
      terms: [
        { term: "querySelector", pronunciation: "كويري سيلكتور", meaning: "دالة اختيار حديثة تعيد أول عنصر يطابق محدد CSS" },
        { term: "querySelectorAll", pronunciation: "كويري سيلكتور أول", meaning: "دالة تعيد قائمة (NodeList) بكل العناصر المطابقة للمحدد" },
        { term: "getElementById", pronunciation: "جيت إليمينت باي آي دي", meaning: "دالة كلاسيكية سريعة لاختيار العنصر عبر معرفه الفريد id" }
      ],
      syntax: "// 1. اختيار عنصر واحد بالـ ID أو الـ Class\nconst mainBtn = document.querySelector('#submit-btn');\nconst firstCard = document.querySelector('.card');\n\n// 2. اختيار كل البطاقات دفعة واحدة\nconst allCards = document.querySelectorAll('.card');",
      simpleCode: `// اختيار العناصر من الصفحة لتجهيزها للتفاعل
// 1. اختيار العنوان الرئيسي عبر معرّفه الفريد id
const titleElement = document.getElementById("page-title");

// 2. اختيار أول زر يحمل صنف .action-btn عبر querySelector
const actionButton = document.querySelector(".action-btn");

// 3. اختيار جميع الفقرات في المقال عبر querySelectorAll
const allParagraphs = document.querySelectorAll("article p");

console.log("العنصر المختار بالـ ID:", titleElement);
console.log("عدد الفقرات التي عثرنا عليها:", allParagraphs.length);`,
      advancedCode: `<!-- معمل تفاعلي يوضح كيفية اصطياد العناصر بدقة عبر querySelector -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">اصطياد العناصر بـ querySelector:</h4>

  <div style="display: flex; gap: 8px; margin-bottom: 15px;">
    <!-- عناصر تجريبية لاصطيادها -->
    <div id="target-1" class="demo-box" style="flex: 1; padding: 10px; background: #1e293b; border: 1px solid #334155; border-radius: 6px; text-align: center; font-size: 11px;">
      صندوق #target-1
    </div>
    <div id="target-2" class="demo-box" style="flex: 1; padding: 10px; background: #1e293b; border: 1px solid #334155; border-radius: 6px; text-align: center; font-size: 11px;">
      صندوق #target-2
    </div>
  </div>

  <div style="display: flex; gap: 6px;">
    <button onclick="highlightTarget(1)" style="background: #2563eb; color: white; border: none; padding: 6px 10px; border-radius: 4px; font-size: 11px; cursor: pointer;">
      اختر #target-1 ولونه
    </button>
    <button onclick="highlightAll()" style="background: #10b981; color: white; border: none; padding: 6px 10px; border-radius: 4px; font-size: 11px; cursor: pointer;">
      اختر الكل بـ .demo-box
    </button>
  </div>
</div>

<script>
  function highlightTarget(num) {
    // اصطياد الصندوق بالمعرف
    const box = document.querySelector('#target-' + num);
    box.style.borderColor = '#38bdf8';
    box.style.backgroundColor = '#1e3a8a';
  }

  function highlightAll() {
    // اصطياد كل الصناديق دفعة واحدة
    const boxes = document.querySelectorAll('.demo-box');
    boxes.forEach(b => {
      b.style.borderColor = '#10b981';
      b.style.backgroundColor = '#064e3b';
    });
  }
</script>`,
      outputExplanation: "يعاين المستخدم كيف تستهدف الدالة الصندوق الأول بمفرده بالمعرف #target-1 فيتلون بالأزرق، أو تستهدف الجميع بالصنف المشترك .demo-box فيتلون الجميع بالأخضر بنقرة واحدة.",
      commonMistakes: [
        {
          wrong: "نسيان كتابة رمز الشباك # أو النقطة . داخل querySelector مثل: querySelector('myBtn').",
          right: "تذكر دائماً أن querySelector تستخدم نفس محددات CSS تماماً: # للـ ID و . للـ Class.",
          reason: "بدون الرمز، يظن المتصفح أنك تبحث عن وسم HTML اسمه <myBtn> ولا يعثر على شيء!"
        }
      ],
      bestPractices: [
        "استخدم querySelector و querySelectorAll كخيارك العصري الموحد لجميع عمليات البحث في الـ DOM.",
        "احفظ العنصر المختار في متغير (Cache the element) إذا كنت ستستخدمه عدة مرات لتفادي تكرار البحث في الشجرة وإبطاء الموقع."
      ],
      infographic: {
        badge: "أدوات الصيد",
        title: "اختيار العناصر في الـ DOM",
        icon: "Target",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "querySelector('#id')", desc: "صيد دقيق لعنصر وحيد عبر معرفه المسبوق بعلامة الشباك #" },
          { title: "querySelector('.class')", desc: "صيد أول عنصر يطابق صنف التنسيق المسبوق بالنقطة ." },
          { title: "querySelectorAll()", desc: "صيد جماعي يعيد قائمة NodeList بكل العناصر المتطابقة" },
          { title: "قوة محددات CSS", desc: "استخدام أي محدد متقدم مثل 'article > p.lead' بحرية مطلقة" }
        ],
        summary: "دوال الاختيار هي الجسر الذي يمسك بالعنصر قبل تطبيق أي سحر برمجي عليه."
      }
    },
    {
      id: "2.3.c",
      title: "تعديل المحتوى والخصائص",
      englishTitle: "Modifying Content & Attributes (textContent, innerHTML, setAttribute)",
      definition: "بعد الإمساك بالعنصر، تتيح لك جافاسكريبت تغيير نصوصه عبر textContent (وهو الأكثر أماناً وسرعة)، أو حقن أكواد HTML كاملة بداخله عبر innerHTML، أو تعديل خصائصه مثل تغيير رابط الصورة src أو رابط الوجهة href عبر dot notation أو دالة setAttribute.",
      analogy: "تخيل 'لوحة إعلانات ذكية' في الشارع:\n- خاصية textContent: مثل تغيير الحروف والكلمات المكتوبة على اللوحة النصية.\n- خاصية innerHTML: مثل تغيير اللوحة بالكامل وتبديلها بشاشة فيديو تفاعلية ملونة!\n- تعديل الخصائص (Attributes): مثل تبديل كابل الصورة لتأخذ الصورة من مصدر جديد كلياً.",
      why: "المواقع التفاعلية تعيش على تغيير المحتوى: عندما ينقر المستخدم على 'عرض الترجمة'، يتغير النص فوراً، وعندما يختار منتجاً باللون الأسود، يتغير رابط صورة المنتج src إلى الصورة السوداء في التو واللحظة.",
      terms: [
        { term: "textContent", pronunciation: "تكست كونتنت", meaning: "قراءة أو تعديل النص النقي فقط داخل العنصر (آمن وسريع)" },
        { term: "innerHTML", pronunciation: "إنر إتش تي إم إل", meaning: "قراءة أو حقن أكواد ووسوم HTML حقيقية داخل العنصر" },
        { term: "setAttribute", pronunciation: "سيت أتريبيوت", meaning: "دالة تعيين أو تعديل أي خاصية في العنصر (مثل src أو href)" },
        { term: "classList", pronunciation: "كلاس ليست", meaning: "أداة سحرية لإضافة وحذف وتبديل أصناف الـ CSS (مثل add, remove, toggle)" }
      ],
      syntax: "// 1. تعديل النص\nelement.textContent = 'نص جديد ناصع';\n// 2. تعديل خاصية\nimgElement.src = 'new-photo.jpg';\n// 3. تبديل صنف التنسيق\nelement.classList.toggle('active');",
      simpleCode: `// اختيار بطاقة من الصفحة وتعديل كل تفاصيلها برمجياً
const heading = document.querySelector("#main-heading");
const bannerImage = document.querySelector("#banner-img");

// 1. تغيير النص بأمان وسرعة بـ textContent
heading.textContent = "تم تحديث العنوان بنجاح عبر JavaScript!";

// 2. تغيير رابط الصورة لعرض صورة جديدة
bannerImage.src = "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=300";

// 3. إضافة صنف CSS لتلوين العنصر
heading.classList.add("text-success");`,
      advancedCode: `<!-- محاكي تفاعلي يوضح الفرق بين textContent الآمن و innerHTML -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">معمل التعديل: textContent مقابل innerHTML</h4>

  <div id="demo-output-box" style="background: #1e293b; padding: 15px; border-radius: 8px; border: 1px solid #334155; margin-bottom: 12px; font-size: 13px;">
    النص الأصلي هنا ينتظر التعديل...
  </div>

  <div style="display: flex; gap: 8px;">
    <button onclick="applyTextContent()" style="background: #2563eb; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      تجربة textContent (نص نقي)
    </button>
    <button onclick="applyInnerHTML()" style="background: #10b981; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      تجربة innerHTML (وسوم ملونة)
    </button>
  </div>
</div>

<script>
  function applyTextContent() {
    const box = document.getElementById('demo-output-box');
    // textContent يعامل أي وسم كأنه نص عادي ويطبعه كما هو
    box.textContent = "<b>هذا نص نقي آمن</b> (لم تتحول b إلى خط عريض لأن textContent لا تفسر الـ HTML)";
  }

  function applyInnerHTML() {
    const box = document.getElementById('demo-output-box');
    // innerHTML يفسر الوسوم ويرسمها كعناصر حقيقية ملونة
    box.innerHTML = '<span style="color:#4ade80; font-weight:bold; font-size:15px;">✓ تم حقن عنصر HTML حقيقي ملون بنجاح!</span>';
  }
</script>`,
      outputExplanation: "يعاين المستخدم الفرق العملي: textContent يعامل الكلمات بحياد كنص صريح مما يمنع ثغرات الاختراق، بينما innerHTML يقوم بترجمة وسوم الـ HTML ورسمها كعناصر جديدة ملونة على الشاشة.",
      commonMistakes: [
        {
          wrong: "استخدام innerHTML لحقن نصوص قادمة من مدخلات الزوار أو مربعات التعليقات.",
          right: "استخدام textContent دائماً لعرض مدخلات المستخدمين لمنع هجمات (XSS Injection).",
          reason: "استخدام innerHTML مع مدخلات مجهولة يسمح للمخترقين بحقن كود خبيث <script> يسرق حسابات الزوار!"
        }
      ],
      bestPractices: [
        "استخدم element.classList.toggle('dark-mode') لتبديل الثيم أو القوائم بسطر واحد نظيف.",
        "اجعل textContent هو خيارك التلقائي، ولا تستخدم innerHTML إلا عندما تكون أنت من كتب وسوم الـ HTML الموثوقة."
      ],
      infographic: {
        badge: "التحديث اللحظي",
        title: "تعديل المحتوى والخصائص",
        icon: "Edit3",
        colors: "from-cyan-600 to-blue-600",
        steps: [
          { title: "textContent", desc: "تعديل النصوص فقط بأمان مطلق وسرعة فائقة ضد الاختراق" },
          { title: "innerHTML", desc: "حقن وسوم وبطاقات HTML جديدة وتفسيرها داخل العنصر" },
          { title: "تعديل الخصائص (src, href)", desc: "تغيير مسار الصور والروابط المباشرة في أجزاء من الثانية" },
          { title: "إدارة الأصناف classList", desc: "دوال add و remove و toggle للتحكم بمظهر الـ CSS بنعومة" }
        ],
        summary: "تعديل الـ DOM هو السحر الذي يحول الصفحة من مستند صامت إلى شاشة حية متجاوبة."
      }
    },
    {
      id: "2.3.d",
      title: "إضافة العناصر وحذفها",
      englishTitle: "Creating & Removing DOM Elements (createElement & appendChild)",
      definition: "تتيح لك جافاسكريبت ولادة عناصر جديدة بالكامل في الذاكرة عبر document.createElement()، ثم ضبط نصوصها وتنسيقاتها، ثم غرسها وربطها في شجرة الصفحة عبر appendChild() أو append(). كما يمكنك إعدام وحذف أي عنصر من الصفحة نهائياً عبر دالة remove().",
      analogy: "تخيل أنك تبني مجسماً بقطع 'الليجو' (Lego):\n- دالة createElement: تشبه إخراج قطعة ليجو جديدة من الصندوق وتلوينها بيديك (لكنها ما زالت في يدك ولم تركبها في المجسم بعد).\n- دالة appendChild: تشبه تركيب القطعة في موضعها المحدد في المجسم لتراها العيون!\n- دالة remove: تشبه فك قطعة من المجسم وإعادتها للصندوق وإخفاءها من المبنى.",
      why: "هذا هو محرك تطبيقات التواصل الاجتماعي: عندما تنقر على 'نشر تعليق'، لا يعاد تحميل الصفحة؛ بل يتم إنشاء عنصر تعليق جديد (createElement) وتثبيته في أسفل المنشور فوراً (append).",
      terms: [
        { term: "createElement", pronunciation: "كرييت إليمينت", meaning: "دالة صناعة عنصر HTML جديد في الذاكرة" },
        { term: "appendChild / append", pronunciation: "أبيند تشايلد", meaning: "دالة غرس وإلصاق العنصر كابن في نهاية العنصر الأب" },
        { term: "remove()", pronunciation: "ريموف", meaning: "دالة حذف العنصر نهائياً وإزالته من شجرة الـ DOM والشاشة" }
      ],
      syntax: "// 1. صناعة الزر في الذاكرة\nconst newBtn = document.createElement('button');\nnewBtn.textContent = 'زر جديد';\n\n// 2. غرسه في الصفحة\ndocument.body.appendChild(newBtn);\n\n// 3. حذفه لاحقاً\nnewBtn.remove();",
      simpleCode: `// إنشاء فقرة جديدة وحقنها في صندوق الرسائل برمجياً
// 1. صناعة وسم <p> جديد في الذاكرة
const newParagraph = document.createElement("p");

// 2. وضع النص الترحيبي بداخله
newParagraph.textContent = "أهلاً بك! تم إنشاء هذا العنصر حديثاً عبر JavaScript.";

// 3. تلوين النص بالأخضر الجميل
newParagraph.style.color = "#10b981";

// 4. اختيار الحاوية الحاضنة وغرس العنصر بداخلها
const container = document.querySelector("#messages-box");
container.appendChild(newParagraph); // يظهر الآن أمام عين الزائر في الشاشة!`,
      advancedCode: `<!-- تطبيق قائمة مهام مصغر يوضح ولادة وحذف العناصر في الـ DOM في الوقت الفعلي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">توليد وحذف العناصر (DOM Generator):</h4>

  <div style="display: flex; gap: 8px; margin-bottom: 12px;">
    <input type="text" id="task-input" placeholder="اكتب اسم المهمة الجديدة..." style="flex: 1; padding: 8px 12px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white; font-size: 12px;" />
    <button onclick="addNewTask()" style="background: #2563eb; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
      إضافة +
    </button>
  </div>

  <!-- الحاوية التي ستستقبل العناصر الجديدة -->
  <div id="tasks-container" style="space-y-2; min-height: 50px;">
    <!-- ستغرس العناصر هنا -->
  </div>
</div>

<script>
  function addNewTask() {
    const input = document.getElementById('task-input');
    const text = input.value.trim();
    if (!text) return;

    // 1. صناعة عنصر الحاوية للمهمة
    const taskCard = document.createElement('div');
    taskCard.style.cssText = 'background:#1e293b; border:1px solid #334155; padding:8px 12px; border-radius:6px; margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; font-size:12px;';

    // 2. وضع النص
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    taskCard.appendChild(textSpan);

    // 3. صناعة زر الحذف وتزويده بدالة remove()
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'حذف ✕';
    deleteBtn.style.cssText = 'background:#ef4444; color:white; border:none; padding:3px 8px; border-radius:4px; cursor:pointer; font-size:10px; font-weight:bold;';
    deleteBtn.onclick = function() {
      // إعدام العنصر وحذفه من الـ DOM فوراً!
      taskCard.remove();
    };
    taskCard.appendChild(deleteBtn);

    // 4. غرس البطاقة في الحاوية الرئيسية
    document.getElementById('tasks-container').appendChild(taskCard);
    input.value = '';
  }
</script>`,
      outputExplanation: "يشاهد المستخدم دورة حياة العنصر كاملة: كيف يولد العنصر في الذاكرة بنقرة زر الإضافة، ثم يغرس في الصفحة، ثم يختفي ويُحذف تماماً من شجرة الـ DOM عند الضغط على زر الحذف الخاص به.",
      commonMistakes: [
        {
          wrong: "إنشاء العنصر بـ createElement ونسيان غرسه بـ appendChild في الشجرة، ثم التعجب من عدم ظهوره في المتصفح.",
          right: "تذكر دائماً أن createElement يصنع العنصر في الهواء في الذاكرة فقط؛ ولا يظهر للناس حتى تغرسه بـ append.",
          reason: "العنصر غير المربوط بالشجرة هو مجرد كائن تائه في ذاكرة الحاسوب لا يعلم المتصفح مكانه."
        }
      ],
      bestPractices: [
        "استخدم دالة task.remove() الحديثة لحذف العنصر مباشرة بدلاً من الطريقة القديمة المعقدة parent.removeChild(child).",
        "استخدم DocumentFragment عند إضافة مئات العناصر دفعة واحدة لتقليل عمليات إعادة الرسم وإراحة معالج الجهاز."
      ],
      infographic: {
        badge: "دورة الحياة البرمجية",
        title: "إنشاء وحذف العناصر",
        icon: "PlusCircle",
        colors: "from-emerald-600 to-teal-600",
        steps: [
          { title: "1. الولادة createElement", desc: "صناعة وسم HTML جديد تماماً وتجهيزه في الذاكرة" },
          { title: "2. التجهيز والتزيين", desc: "إضافة النصوص والألوان والأزرار للعنصر الوليد" },
          { title: "3. الغرس appendChild", desc: "ربط العنصر في مكانه المحدد داخل الشجرة ليراه الزائر" },
          { title: "4. الإعدام remove()", desc: "حذف العنصر نهائياً وتنظيف الذاكرة بلمسة زر واحدة" }
        ],
        summary: "الولادة والغرس والحذف هي أفعال الخلق البرمجية التي تبني وتحدث واجهات الويب الحية."
      }
    },
    {
      id: "2.3.e",
      title: "التعامل مع أحداث المستخدم",
      englishTitle: "Event Listeners & Handling (addEventListener)",
      definition: "أحداث المستخدم (Events) هي الإشارات والتفاعلات التي يقوم بها الزائر على الصفحة؛ مثل النقر بالفأرة (click)، أو تحريك الماوس (mousemove)، أو الكتابة في لوحة المفاتيح (keydown)، أو تمرير الصفحة (scroll). ودالة addEventListener() هي 'أذن التنصت' التي نضعها على العنصر للاستماع للحدث وتشغيل دالة مخصصة فور وقوعه.",
      analogy: "تخيل 'جرس باب منزلك': الزر المعلق في الخارج يستمع لضغطات الزوار (Event Listener). عندما يضغط الزائر بإصبعه (حدث Click)، يرن الجرس في الصالة ويجعلك تتحرك لتفتح الباب (دالة معالجة الحدث Event Handler). بدون جرس التنصت، سيدق الزائر الباب ولن يسمعه أحد!",
      why: "الموقع بدون أحداث هو تمثال صلب لا يتفاعل؛ الأحداث هي التي تحول أزرار موقعك إلى أدوات حية ترسل النماذج وتفتح القوائم وتنفذ أوامر المستخدم.",
      terms: [
        { term: "Event", pronunciation: "إيفنت", meaning: "الحدث؛ مثل النقر، أو مرور الفأرة، أو الضغط على زر الكيبورد" },
        { term: "addEventListener", pronunciation: "آد إيفنت ليسنر", meaning: "أداة زرع أذن التنصت على العنصر للاستماع لحدث معين" },
        { term: "Event Handler", pronunciation: "إيفنت هاندلر", meaning: "الدالة التي يتم استدعاؤها وتنفيذها فور وقوع الحدث" },
        { term: "event (e) object", pronunciation: "إيفنت أوبجكت", meaning: "كائن يحمل تفاصيل الحدث (مثل إحداثيات الفأرة أو الحرف المكتوب)" }
      ],
      syntax: "button.addEventListener('click', function(event) {\n  console.log('تم النقر على الزر!');\n});",
      simpleCode: `// 1. اختيار الزر من الصفحة
const alertButton = document.querySelector("#my-button");

// 2. زرع أذن التنصت للاستماع لحدث النقر (click)
alertButton.addEventListener("click", function() {
  // يشتغل هذا الكود فور نقر الزائر على الزر!
  alert("مرحباً بك! لقد استمعنا لنقرتك بنجاح عبر addEventListener 🎉");
});

// 3. الاستماع لحدث مرور الفأرة فوق الزر (mouseenter)
alertButton.addEventListener("mouseenter", () => {
  console.log("الفأرة تقف فوق الزر الآن!");
});`,
      advancedCode: `<!-- لوحة تفاعلية متطورة تستمع لحركات الفأرة وأزرار لوحة المفاتيح وتظهرها حياً -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">مركز الاستماع للأحداث (Event Radar) 📡:</h4>

  <!-- حقل تفاعلي يستمع للكيبورد -->
  <div style="margin-bottom: 12px;">
    <input type="text" id="radar-input" placeholder="اكتب أي حرف في لوحة المفاتيح هنا..." 
           style="width: 100%; padding: 8px 12px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white; font-size: 12px;" />
  </div>

  <div id="radar-display" style="background: #020617; padding: 14px; border-radius: 8px; border: 1px dashed #334155; font-family: monospace; font-size: 12px; line-height: 1.8; color: #a7f3d0;">
    <div>آخر حدث مسجل: <span style="color: #facc15;">في انتظار تفاعلك...</span></div>
    <div>الحرف المكتوب: <span id="radar-key" style="color: #38bdf8;">-</span></div>
  </div>
</div>

<script>
  const radarInput = document.getElementById('radar-input');
  const radarKey = document.getElementById('radar-key');

  // الاستماع لحدث الضغط على أي زر في لوحة المفاتيح
  radarInput.addEventListener('keydown', (event) => {
    // كائن الحدث (event) يحمل اسم المفتاح المكبوس
    radarKey.innerText = '"' + event.key + '" (رمز المفتاح: ' + event.code + ')';
  });
</script>`,
      outputExplanation: "يعاين المستخدم كيف يلتقط كائن الحدث (event) كل تفاصيل التفاعل في أجزاء من الألف من الثانية، فيعرض اسم الزر المكبوس ورمزه النحوي فوراً.",
      commonMistakes: [
        {
          wrong: "كتابة onclick=\"myFunc()\" المضمنة في HTML بدلاً من addEventListener في ملف الجافاسكريبت.",
          right: "استخدام addEventListener دائماً في ملفات الكود المنفصلة.",
          reason: "دالة addEventListener تتيح لك إضافة أكثر من وظيفة لنفس الزر وتفصل التفاعل عن الهيكل بنظافة تامة."
        }
      ],
      bestPractices: [
        "استخدم الدوال السهمية المختصرة مع addEventListener لتنظيم الكود.",
        "احرص على إزالة أذن التنصت عبر removeEventListener إذا قمت بإنهاء استخدام العنصر لمنع تسريب الذاكرة (Memory Leaks)."
      ],
      infographic: {
        badge: "رادار التفاعل",
        title: "الاستماع للأحداث (addEventListener)",
        icon: "Zap",
        colors: "from-amber-500 to-yellow-400",
        steps: [
          { title: "نوع الحدث 'click'", desc: "تحديد الحدث المستهدف: نقر، حركة ماوس، كتابة كيبورد" },
          { title: "أذن التنصت addEventListener", desc: "ربط العنصر بمحرك الاستماع ليظل يقظاً ومستعداً للتفاعل" },
          { title: "دالة المعالجة Callback", desc: "الأوامر البرمجية التي تنطلق فور استشعار النقر أو الإدخال" },
          { title: "كائن الحدث (event)", desc: "صندوق يحمل كل أسرار الحركة: إحداثيات الماوس، والحروف المكتوبة" }
        ],
        summary: "الأحداث هي نبضات القلب التي تشعر بها جافاسكريبت لتتحرك وتلبي رغبات الزائر."
      }
    },
    {
      id: "2.3.f",
      title: "انتشار الأحداث Event Bubbling",
      englishTitle: "Event Bubbling & stopPropagation()",
      definition: "انتشار الأحداث (Event Bubbling / صعود الفقاعة) هو السلوك الطبيعي في المتصفح حيث أنه عندما تنقر على عنصر ابن (مثل زر)، فإن الحدث لا يقف عنده، بل 'يصعد كفقاعة الهواء تحت الماء' إلى أبيه، ثم إلى جده، حتى يصل إلى قمة الصفحة! ودالة event.stopPropagation() هي السلاح الذي يوقف صعود هذه الفقاعة فوراً.",
      analogy: "تخيل أنك ضغطت بيدك على 'جرس في غرفة طفل داخل قصر ضخم': إذا كان الصوت يرن في غرفة الطفل، ثم ينتقل لغرفة والده، ثم لبهو القصر الرئيسي (هذا هو صعود الفقاعة Bubbling). إذا أردت أن يرن الجرس في غرفة الطفل فقط دون إزعاج والديه وباقي القصر، تضع عازلاً للصوت فوراً وهو (stopPropagation)!",
      why: "إذا كانت لديك بطاقة كاملة قابلة للنقر لفتح مقال، وبداخلها 'زر حذف'، فعندما ينقر الزائر على زر الحذف قد يتفاجأ بأن المقال فُتح أيضاً رغماً عنه! استخدام stopPropagation يمنع هذا التصادم ويحصر النقر في زر الحذف فقط.",
      terms: [
        { term: "Event Bubbling", pronunciation: "إيفنت بابلينج", meaning: "صعود وتدفق الحدث من الابن الأصغر إلى الآباء للأعلى كفقاعة" },
        { term: "stopPropagation()", pronunciation: "ستوب بروباجيشن", meaning: "دالة إيقاف انتشار وصعود الحدث وحصره في العنصر الحالي" },
        { term: "Event Delegation", pronunciation: "إيفنت ديليجيشن", meaning: "تفويض الأحداث؛ وضع مستمع واحد على الأب لإدارة كل أبنائه بذكاء" }
      ],
      syntax: "childButton.addEventListener('click', (event) => {\n  event.stopPropagation(); // إيقاف صعود الفقاعة للأب!\n  console.log('نقرنا الابن فقط دون إشعار الأب');\n});",
      simpleCode: `// بطاقة أب وبداخلها زر ابن
const parentCard = document.querySelector("#card");
const deleteBtn = document.querySelector("#delete-btn");

// مستمع الأب
parentCard.addEventListener("click", () => {
  console.log("تم فتح صفحة المقال (نقر الأب)!");
});

// مستمع الابن مع إيقاف صعود الفقاعة
deleteBtn.addEventListener("click", (event) => {
  // ⛔ نمنع وصول النقر للأب حتى لا يفتح المقال أثناء الحذف!
  event.stopPropagation();
  console.log("تم حذف العنصر بنجاح دون فتح المقال ✓");
});`,
      advancedCode: `<!-- محاكي مرئي يثبت ظاهرة صعود الفقاعة Bubbling وتأثير stopPropagation -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">محاكي صعود الفقاعة (Event Bubbling):</h4>

  <!-- الأب الأكبر -->
  <div id="grandpa-box" onclick="logBubble('👴 نقر الجد الأكبر!')" style="background: #1e293b; border: 2px solid #475569; padding: 20px; border-radius: 10px; cursor: pointer;">
    <div style="font-size: 11px; color: #94a3b8; margin-bottom: 6px;">العنصر الأب (Grandpa Box)</div>

    <!-- الابن بالداخل -->
    <div style="display: flex; gap: 8px;">
      <button onclick="logBubble('👶 نقر الابن العادي (ستصعد الفقاعة للأب!)')" style="background: #ef4444; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 11px; cursor: pointer; font-weight: bold;">
        نقر بدون stopPropagation
      </button>

      <button onclick="event.stopPropagation(); logBubble('🛡️ نقر الابن المحمي بـ stopPropagation (توقفت الفقاعة!)')" style="background: #10b981; color: white; border: none; padding: 8px 12px; border-radius: 6px; font-size: 11px; cursor: pointer; font-weight: bold;">
        نقر مع stopPropagation
      </button>
    </div>
  </div>

  <div id="bubble-log" style="margin-top: 12px; background: #020617; padding: 10px; border-radius: 6px; border: 1px dashed #334155; font-family: monospace; font-size: 11px; color: #facc15; min-height: 45px;">
    اضغط على الأزرار أعلاه لتشاهد هل يصعد الحدث للأب أم يتوقف...
  </div>
</div>

<script>
  function logBubble(msg) {
    const l = document.getElementById('bubble-log');
    l.innerHTML += '<div>' + msg + '</div>';
  }
</script>`,
      outputExplanation: "يرى المتعلم كيف أن الزر الأحمر يطلق تنبيهين متتاليين (نقر الابن ثم نقر الأب تلقائياً لأن الفقاعة صعدت)، بينما الزر الأخضر يوقف الفقاعة بمكانها بفضل stopPropagation.",
      commonMistakes: [
        {
          wrong: "الخلط بين preventDefault() و stopPropagation().",
          right: "preventDefault تمنع السلوك الافتراضي للمتصفح (مثل منع تحديث الصفحة في النماذج)، بينما stopPropagation تمنع صعود الحدث للعناصر الأب في الشجرة.",
          reason: "لكل دالة وظيفة مستقلة تماماً؛ واحدة للمتصفح والأخرى لشجرة الـ DOM."
        }
      ],
      bestPractices: [
        "استغل صعود الفقاعة لتطبيق تقنية تفويض الأحداث (Event Delegation): ضع مستمع نقر واحداً على القائمة <ul> بدلاً من وضع 100 مستمع على كل <li> لتسريع موقعك!",
        "استخدم stopPropagation دائماً في النوافذ المنبثقة (Modals) لتمنع إغلاق النافذة عند النقر داخل صندوق المحتوى."
      ],
      infographic: {
        badge: "صعود الفقاعات",
        title: "انتشار الأحداث (Event Bubbling)",
        icon: "Radio",
        colors: "from-purple-600 to-indigo-600",
        steps: [
          { title: "نقطة الانطلاق (Target)", desc: "الزر أو العنصر الصغير الذي تلقى نقرة الفأرة مباشرة" },
          { title: "صعود الفقاعة Bubbling", desc: "الحدث يصعد تلقائياً للعنصر الأب ثم الجد حتى قمة الصفحة" },
          { title: "العازل stopPropagation()", desc: "إيقاف صعود الحدث وحبسه في مكانه دون إشعار الآباء" },
          { title: "تفويض الأحداث Delegation", desc: "استغلال الظاهرة بذكاء لمراقبة آلاف العناصر بمستمع واحد" }
        ],
        summary: "الأحداث تصعد دائماً كفقاعات الهواء، وأنت القائد الذي يقرر متى يوقف صعودها."
      }
    },
    {
      id: "2.3.g",
      title: "التعامل مع النماذج",
      englishTitle: "Form Handling & event.preventDefault()",
      definition: "التعامل مع النماذج في JavaScript يعني قراءة ما كتبه المستخدم في الحقول لحظياً، والتحقق منه برمجياً، وأهم خطوة على الإطلاق هي استدعاء دالة event.preventDefault() عند إرسال النموذج (submit) لمنع المتصفح من إعادة تحميل الصفحة (Reload) وكسر تجربة التطبيق.",
      analogy: "تخيل أنك تسلم معاملة لموظف استقبال:\n- السلوك القديم الغبي للمتصفح: بمجرد أن تسلمه الورقة، يطردك خارج المكتب ويغلق الباب ويعيد فتح الصالة من جديد (وهذا هو الـ Page Reload المزعج!).\n- السلوك الذكي مع preventDefault: يستلم الورقة منك بهدوء وأنت جالس في مكانك، ويفحصها ويرسلها عبر الحاسوب في صمت دون أن تتحرك من مقعدك!",
      why: "تطبيقات الـ SPA وتطبيقات React تعتمد على عدم إعادة تحميل الصفحة إطلاقاً. إذا نسيت e.preventDefault() في النموذج، سيقوم المتصفح بمسح كل شيء وإعادة تحميل الصفحة وتفقد حالة المستخدم وبياناته!",
      terms: [
        { term: "submit event", pronunciation: "سبمت إيفنت", meaning: "حدث إرسال النموذج عند الضغط على زر الإرسال أو زر Enter" },
        { term: "preventDefault()", pronunciation: "بريفنت ديفولت", meaning: "دالة إلغاء السلوك التلقائي الافتراضي للمتصفح" },
        { term: "input.value", pronunciation: "إنبوت فاليو", meaning: "خاصية قراءة النص المكتوب حالياً داخل الحقل" }
      ],
      syntax: "form.addEventListener('submit', (e) => {\n  e.preventDefault(); // 🛑 إيقاف إعادة تحميل الصفحة الإلزامية!\n  const value = input.value;\n  console.log('أرسلنا البيانات بدون ريلود:', value);\n});",
      simpleCode: `// ربط نموذج بحث ذكي دون إعادة تحميل الصفحة
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-box");

searchForm.addEventListener("submit", function(event) {
  // 1. الأمر الذهبي الإلزامي لمنع وميض وتحديث الصفحة
  event.preventDefault();

  // 2. قراءة ما كتبه الزائر في حقل البحث
  const query = searchInput.value.trim();

  // 3. التحقق وإرسال البحث عبر جافاسكريبت
  if (query) {
    console.log("جاري البحث في قاعدة البيانات عن:", query);
  }
});`,
      advancedCode: `<!-- نموذج تسجيل فوري تفاعلي يوضح قوة preventDefault -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">نموذج تفاعلي مع preventDefault:</h4>

  <form id="ajax-demo-form" onsubmit="handleAjaxSubmit(event)">
    <div style="margin-bottom: 10px;">
      <input type="text" id="demo-name-field" placeholder="اكتب اسمك الكامل..." required 
             style="width: 100%; padding: 8px 12px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white; font-size: 12px;" />
    </div>

    <button type="submit" style="background: #2563eb; color: white; border: none; padding: 10px; border-radius: 6px; width: 100%; font-weight: bold; cursor: pointer; font-size: 12px;">
      إرسال بدون أي Reload 🚀
    </button>
  </form>

  <div id="submit-response" style="margin-top: 12px; padding: 10px; border-radius: 6px; background: #020617; border: 1px dashed #334155; font-size: 12px; text-align: center; color: #94a3b8;">
    لم يتم إرسال النموذج بعد...
  </div>
</div>

<script>
  function handleAjaxSubmit(e) {
    // إيقاف السلوك القديم للمتصفح
    e.preventDefault();

    const name = document.getElementById('demo-name-field').value;
    const res = document.getElementById('submit-response');

    res.style.borderColor = '#10b981';
    res.style.color = '#34d399';
    res.innerHTML = '✓ أهلاً بك يا <b>' + name + '</b>! تم استلام بياناتك فوراً دون أي إعادة تحميل للصفحة.';
  }
</script>`,
      outputExplanation: "يرى المتعلم كيف تظهر رسالة الترحيب الخضراء فوراً في جزء من الثانية ويبقى النص في الحقل مستقراً دون أن ترمش الشاشة أو تعيد تحميل نفسها، بفضل دالة preventDefault().",
      commonMistakes: [
        {
          wrong: "نسيان كتابة e.preventDefault() في معالج حدث submit بالنماذج.",
          right: "كتابة e.preventDefault() دائماً كأول سطر في أي دالة معالجة إرسال نموذج.",
          reason: "نسيانها يجعل المتصفح يفرغ الصفحة ويعيد تحميلها فوراً فتضيع كل متغيرات الذاكرة في React!"
        }
      ],
      bestPractices: [
        "استمع لحدث submit على وسم <form> نفسه بدلاً من الاستماع لحدث click على زر الإرسال، لضمان استجابة النموذج عند ضغط المستخدم على زر Enter في لوحة المفاتيح.",
        "استخدم دالة input.value.trim() دائماً لحذف المسافات الفارغة غير المقصودة من بداية ونهاية مدخلات المستخدم."
      ],
      infographic: {
        badge: "إلغاء التحديث",
        title: "التعامل مع النماذج (preventDefault)",
        icon: "FileSignature",
        colors: "from-blue-600 to-cyan-500",
        steps: [
          { title: "حدث submit", desc: "ينطلق عند نقر زر الإرسال أو ضغط مفتاح Enter بالكيبورد" },
          { title: "event.preventDefault()", desc: "الحارس الإلزامي لمنع وميض وإعادة تحميل صفحة المتصفح" },
          { title: "قراءة المدخلات .value", desc: "استخراج ما كتبه العميل وفحصه وتنظيفه عبر دالة trim()" },
          { title: "إرسال صامت بـ fetch", desc: "إرسال البيانات للسيرفر في الخلفية بنعومة وسلاسة تامة" }
        ],
        summary: "دالة preventDefault هي الصمام الذي يجعل الويب يتصرف كتطبيق ذكي ناعم وخالٍ من الانقطاع."
      }
    },
    {
      id: "2.3.h",
      title: "فهم الفرق بين DOM و Virtual DOM",
      englishTitle: "DOM vs Virtual DOM (The Bridge to React)",
      definition: "الـ Real DOM هو الشجرة الحقيقية الثقيلة التي يرسمها المتصفح في الشاشة، وتعديلها المتكرر يعتبر عملية بطيئة جداً ومكلفة لمعالج الجهاز. أما الـ Virtual DOM (وهو سر ثورة مكتبة React) فهو 'نسخة شجرة خفيفة وافتراضية ونقية' محفوظة في ذاكرة الـ JavaScript؛ عندما تتغير البيانات، تقارن React بين النسخة القديمة والجديدة وتحدد فقط البكسلات التي تغيرت لتحدثها في الـ Real DOM بلمح البصر (Reconciliation / Diffing).",
      analogy: "تخيل أنك تريد إعادة ترتيب أثاث قصر ضخم:\n- طريقة الـ Real DOM القديمة: أن تقوم بنفسك بسحب الأرائك الثقيلة والدواليب وتحريكها يدوياً وعينياً في كل مرة يغير فيها صاحب البيت رأيه (ستصاب بالإرهاق الشديد ويهتز القصر!).\n- طريقة الـ Virtual DOM في React: أن تحضر 'مخططاً رقمياً مصغراً على شاشة الآيباد'؛ تجرب فيه نقل الكراسي وتعديل الألوان ألف مرة في ثانية واحدة، وعندما تستقر على التعديل النهائي، تذهب فقط للكرسي الوحيد المطلوب وتغير مكانه بدقة متناهية دون تحريك أي أثاث آخر في القصر!",
      why: "هذا هو السبب الجوهري الذي جعل شركة Meta (فيسبوك) تخترع مكتبة React وتجعلها تكتسح كوكب الأرض بأكمله! الـ Virtual DOM جعل الواجهات فائقة السرعة وخفيفة على بطاريات الهواتف الضعيفة.",
      terms: [
        { term: "Real DOM", pronunciation: "ريل دوم", meaning: "شجرة المتصفح الحقيقية الثقيلة والمرئية على الشاشة" },
        { term: "Virtual DOM", pronunciation: "فيرتشوال دوم", meaning: "النسخة الافتراضية الخفيفة المحفوظة في ذاكرة React" },
        { term: "Diffing Algorithm", pronunciation: "ديفينج ألجوريزم", meaning: "خوارزمية مقارنة الفروق بين النسخة القديمة والجديدة بذكاء" },
        { term: "Reconciliation", pronunciation: "ريكونسيلييشن", meaning: "عملية التوفيق وتحديث الأجزاء المتغيرة فقط في الـ Real DOM" }
      ],
      syntax: "/* فلسفة React الداخلية */\n// 1. تغيرت البيانات في الـ State\n// 2. تم بناء Virtual DOM Tree جديدة في الذاكرة\n// 3. مقارنة Diffing بين الشجرتين الافتراضيتين\n// 4. تحديث الجزء المتغير فقط في الـ Real DOM بسرعة قياسية!",
      simpleCode: `// مقارنة برمجية مفاهيمية توضح الفرق:

// ❌ في الـ Real DOM القديم:
// إذا تغيرت كلمة واحدة، كان الكود القديم يعيد بناء كامل القائمة 100 عنصر!
// container.innerHTML = newBigList; // بطيء ومكلف للأجهزة الضعيفة

// ✓ في React عبر الـ Virtual DOM:
// React ترى أن العنصر رقم 3 فقط هو الذي تغير سعره من 10 إلى 12
// فترسل أمراً واحداً بالمليمتر للـ Real DOM:
// "غير نص العنصر 3 فقط ولا تلمس باقي الـ 99 عنصراً!"`,
      advancedCode: `<!-- محاكاة تفاعلية بصرية توضح كيف تعمل خوارزمية Diffing في الـ Virtual DOM -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h4 style="margin: 0; color: #38bdf8;">محاكاة الـ Virtual DOM وسرعة React ⚛️:</h4>
    <button onclick="simulateVirtualDomDiff()" style="background: #0284c7; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 11px; cursor: pointer; font-weight: bold;">
      تحديث عداد واحد ⚡
    </button>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
    <!-- الشجرة الافتراضية في الذاكرة -->
    <div style="background: #1e293b; border: 1px solid #38bdf8; border-radius: 8px; padding: 10px; font-size: 11px;">
      <b style="color: #38bdf8;">1. Virtual DOM (في الذاكرة)</b>
      <p style="margin: 4px 0 0 0; color: #94a3b8;">
        يتم فحص ومقارنة شجرة الكائنات في جزء من الألف من الثانية.
      </p>
    </div>

    <!-- الشجرة الحقيقية في الشاشة -->
    <div style="background: #1e293b; border: 1px solid #10b981; border-radius: 8px; padding: 10px; font-size: 11px;">
      <b style="color: #34d399;">2. Real DOM (على الشاشة)</b>
      <p style="margin: 4px 0 0 0; color: #94a3b8;">
        تحديث العنصر المتغير فقط وتجنب إعادة رسم الصفحة!
      </p>
    </div>
  </div>

  <div id="vdom-display" style="background: #020617; padding: 12px; border-radius: 6px; border: 1px dashed #334155; font-size: 13px; text-align: center;">
    عداد التفاعل: <b id="vdom-count" style="color: #facc15; font-size: 18px;">0</b>
  </div>
</div>

<script>
  let vCount = 0;
  function simulateVirtualDomDiff() {
    vCount++;
    // فقط الرقم داخل الـ <b> هو الذي يتم تحديثه، دون لمس باقي نصوص الصندوق!
    document.getElementById('vdom-count').innerText = vCount;
  }
</script>`,
      outputExplanation: "يعاين المتعلم كيف تعمل تقنية الـ Virtual DOM: عندما ينقر الزر، لا يعاد رسم الصندوق أو النصوص المجاورة له إطلاقاً، بل يتم استهداف الرقم المتغير فقط في جزء من الثانية.",
      commonMistakes: [
        {
          wrong: "الاعتقاد بأن الـ Virtual DOM يلغي الـ Real DOM أو يعمل بدلاً منه في المتصفح.",
          right: "الـ Virtual DOM هو مجرد وسيط ومخطط ذكي يعمل خلف الكواليس؛ وفي النهاية يقوم بتحديث الـ Real DOM الحقيقي بأقل مجهود ممكن.",
          reason: "المتصفح في النهاية لا يفهم إلا الـ Real DOM، و React تستخدم Virtual DOM كمدير ذكي للعمليات."
        }
      ],
      bestPractices: [
        "افهم هذه المقارنة جيداً؛ فهي السؤال رقم #1 في أي مقابلة عمل لمطور React في العالم.",
        "تذكر دائماً أن كفاءة وسرعة React تنبع من خوارزمية الـ Diffing التي تقلل لمس الـ Real DOM إلى أقصى حد."
      ],
      infographic: {
        badge: "بوابة العبور لـ React",
        title: "Real DOM مقابل Virtual DOM",
        icon: "Cpu",
        colors: "from-cyan-500 to-blue-600",
        steps: [
          { title: "Real DOM الثقيل", desc: "الشجرة الحقيقية البطيئة في التحديث التي يرسمها المتصفح بالبكسلات" },
          { title: "Virtual DOM الخفيف", desc: "مخطط افتراضي سريع جداً في ذاكرة JavaScript وخاص بـ React" },
          { title: "خوارزمية Diffing", desc: "مقارنة النسخة القديمة بالجديدة لاكتشاف الفروق بدقة متناهية" },
          { title: "التحديث الجراحي الدقيق", desc: "إرسال تعديل للجزء المتغير فقط إلى الشاشة دون المساس بباقي العناصر" }
        ],
        summary: "الـ Virtual DOM هو المعجزة المعمارية التي حولت React إلى أسرع مكتبة واجهات في العالم."
      }
    }
  ],
  quiz: [
    {
      question: "ما هي الدالة الحديثة في JavaScript التي نستخدمها لاختيار أول عنصر يطابق أي محدد CSS في الصفحة؟",
      options: [
        "document.findCSS()",
        "document.querySelector()",
        "document.searchElement()",
        "document.grab()"
      ],
      correctIndex: 1,
      explanation: "دالة document.querySelector() هي المعيار الحديث الذي يقبل أي محدد CSS (سواء كان صنف .class أو معرف #id أو وسماً) ويعيد العنصر الأول المطابق."
    },
    {
      question: "لماذا نستخدم دالة event.preventDefault() كأول سطر في معالجة إرسال النماذج بـ JavaScript و React؟",
      options: [
        "لتكبير خط الزر",
        "لمنع السلوك الافتراضي للمتصفح المتمثل في إعادة تحميل الصفحة (Page Reload) ومسح الذاكرة",
        "لتسجيل الخروج من الحساب",
        "لتغيير لون خلفية الصفحة للأخضر"
      ],
      correctIndex: 1,
      explanation: "المتصفح افتراضياً عند إرسال النموذج يقوم بطلب الصفحة من جديد ومسح الذاكرة؛ ودالة preventDefault تلغي هذا السلوك لتسمح لمعالجة الـ SPA السلسة بالعمل."
    },
    {
      question: "ما هو الدور الجوهري للـ Virtual DOM في مكتبة React مقارنة بالـ Real DOM؟",
      options: [
        "يقوم بإطفاء شاشة الحاسوب لتوفير الطاقة",
        "نسخة افتراضية خفيفة في الذاكرة تقارن التغييرات (Diffing) لتحديث الأجزاء المتغيرة فقط في الشاشة الحقيقية بسرعة فائقة",
        "يحذف أكواد الـ CSS من المشروع",
        "يعمل فقط بدون اتصال بالإنترنت"
      ],
      correctIndex: 1,
      explanation: "الـ Virtual DOM هو مخطط خفيف في الذاكرة تستخدمه React لمقارنة الفروق وتحديث الأجزاء المتغيرة فقط في شجرة المتصفح الحقيقية دون إعادة رسم الصفحة كاملة."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء تطبيق مفكرة ملاحظات تفاعلية متكامل مع DOM و Events",
    description: "قم بإنشاء كود JavaScript يقوم بـ:\n1. الاستماع لنموذج إضافة ملاحظة مع منع إعادة التحميل عبر preventDefault().\n2. قراءة النص المكتوب في الحقل وفحصه.\n3. صناعة عنصر <li> جديد في الـ DOM بـ createElement وغرس النص بداخله.\n4. إضافة زر 'حذف' بجانب كل ملاحظة يقوم بحذفها عند النقر عليه عبر remove() مع stopPropagation().\n5. إلحاق الملاحظة بقائمة <ul> في الصفحة.",
    hints: [
      "استخدم form.addEventListener('submit', (e) => { e.preventDefault(); ... }).",
      "استخدم document.createElement('li') و document.createElement('button').",
      "استخدم btn.onclick = (e) => { e.stopPropagation(); li.remove(); } لحذف الملاحظة بسلام."
    ],
    solution: `// الحل النموذجي لتطبيق مفكرة الملاحظات مع تعليق عربي فوق كل سطر:

// 1. اختيار العناصر الرئيسية من شجرة الـ DOM
const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-text");
const notesList = document.querySelector("#notes-ul");

// 2. الاستماع لحدث إرسال النموذج
noteForm.addEventListener("submit", function(event) {
  // منع المتصفح من إعادة تحميل الصفحة
  event.preventDefault();

  // قراءة وتنظيف النص المدخل
  const text = noteInput.value.trim();
  if (!text) return; // إذا كان الحقل فارغاً نتوقف

  // 3. إنشاء عنصر القائمة الجديد في الذاكرة
  const li = document.createElement("li");
  li.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 8px 12px; background: #1e293b; margin-bottom: 6px; border-radius: 6px; color: white;";

  // إنشاء عنصر النص
  const contentSpan = document.createElement("span");
  contentSpan.textContent = text;
  li.appendChild(contentSpan);

  // 4. إنشاء زر الحذف المزود بحزام أمان stopPropagation
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "حذف ✕";
  deleteBtn.style.cssText = "background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 11px;";

  deleteBtn.addEventListener("click", function(e) {
    // إيقاف صعود الفقاعة
    e.stopPropagation();
    // إعدام وحذف الملاحظة من الـ DOM
    li.remove();
  });

  li.appendChild(deleteBtn);

  // 5. غرس الملاحظة كاملة في قائمة الملاحظات <ul>
  notesList.appendChild(li);

  // تفريغ الحقل لاستقبال الملاحظة التالية
  noteInput.value = "";
});`
  },
  topicInfographic: {
    title: "خريطة المفاهيم: أسرار الـ DOM و Virtual DOM",
    badge: "الموضوع 2.3",
    overview: "الـ DOM هو ساحة التفاعل الحقيقية: من اختيار العناصر وتعديل المحتوى، إلى ولادة وحذف الأبناء، والسيطرة على صعود الأحداث بـ stopPropagation، والعبور نحو سرعة React الفائقة عبر الـ Virtual DOM.",
    pillars: [
      { name: "شجرة الـ DOM", desc: "شجرة المتصفح الحية التي تمثل كل وسم ككائن في الذاكرة" },
      { name: "الصيد والتعديل", desc: "querySelector للاختيار، textContent للأمان، و classList للمظهر" },
      { name: "الأحداث والنماذج", desc: "addEventListener للتنصت، و preventDefault لمنع الـ Reload" },
      { name: "Virtual DOM السحري", desc: "خوارزمية Diffing التي نقلت React إلى صدارة لغات وتطبيقات العالم" }
    ]
  }
};
