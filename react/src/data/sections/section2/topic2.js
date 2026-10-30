// src/data/sections/section2/topic2.js
// الموضوع 2: المصفوفات والكائنات (Arrays & Objects)

export const SECTION_2_TOPIC_2 = {
  id: "2.2",
  title: "المصفوفات والكائنات",
  englishTitle: "Arrays & Objects",
  description: "العمود الفقري لإدارة بيانات وتطبيقات React الحديثة: المصفوفات، دوال التحويل الخارقة map و filter و reduce، بنية الكائنات Objects، والنسخ السطحي والعميق.",
  icon: "Boxes",
  subtopics: [
    {
      id: "2.2.a",
      title: "إنشاء المصفوفات",
      englishTitle: "Creating Arrays & Array Basics",
      definition: "المصفوفة (Array) هي قائمة مرتبة ومنظمة من العناصر محصورة بين قوسين مربعين [ ... ]، تتيح لك تخزين مجموعة من البيانات تحت اسم متغير واحد (مثل قائمة المنتجات، أو أسماء الطلاب، أو درجات الحرارة) بدلاً من إنشاء متغير منفصل لكل عنصر.",
      analogy: "تخيل 'علبة ألوان مائية' أو 'صينية كب كيك': لديك صينية واحدة كبيرة (المصفوفة)، وبداخلها خانات مرتبة بجانب بعضها، كل خانة تضم قالباً بلون وطعم مختلف، وكل خانة لها رقم ترتيب يحدد مكانها بدقة.",
      why: "إذا كان لديك متجر به 10,000 منتج، هل من المعقول أن تنشئ 10,000 متغير مثل product1, product2...؟ المصفوفات تجمعهم في متغير واحد أنيق: products = [...]، مما يسهل معالجتهم والبحث فيهم في سطر واحد.",
      terms: [
        { term: "Array", pronunciation: "أراي", meaning: "المصفوفة؛ قائمة مرتبة من العناصر والبيانات" },
        { term: "Square Brackets [ ]", pronunciation: "سكوير براكيتس", meaning: "الأقواس المربعة المستخدمة لتعريف المصفوفات" },
        { term: "Element", pronunciation: "إليمينت", meaning: "العنصر المخزن داخل المصفوفة" },
        { term: "length", pronunciation: "لينجث", meaning: "خاصية توضح عدد العناصر الإجمالي الموجود في المصفوفة" }
      ],
      syntax: "const fruits = ['تفاح', 'موز', 'برتقال'];\nconst numbers = [10, 20, 30, 40];\nconsole.log(fruits.length); // 3 عناصر",
      simpleCode: `// 1. إنشاء مصفوفة نصوص بسيطة تضم أشهر مهارات الويب
const webSkills = ["HTML", "CSS", "JavaScript", "React"];

// 2. إنشاء مصفوفة أرقام لأسعار المنتجات في السلة
const itemPrices = [49, 99, 150, 25];

// 3. طباعة عدد العناصر الإجمالي في كل مصفوفة عبر خاصية .length
console.log("عدد المهارات:", webSkills.length); // يطبع: 4
console.log("عدد السلع في السلة:", itemPrices.length); // يطبع: 4`,
      advancedCode: `<!-- تجربة تفاعلية لإنشاء وعرض مصفوفة عناصر في واجهة المستخدم -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">منشئ المصفوفات التفاعلي (Array Visualizer):</h4>

  <div style="display: flex; gap: 8px; margin-bottom: 12px;">
    <input type="text" id="new-item-input" placeholder="اكتب اسم مهارة جديدة..." style="flex: 1; padding: 8px 12px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white; font-size: 12px;" />
    <button onclick="addItemToArray()" style="background: #2563eb; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
      إضافة للمصفوفة
    </button>
  </div>

  <div style="font-size: 12px; color: #94a3b8; margin-bottom: 6px;">
    محتويات المصفوفة الحالية (<span id="arr-count" style="color: #4ade80; font-weight: bold;">3</span> عناصر):
  </div>

  <div id="array-items-box" style="display: flex; flex-wrap: wrap; gap: 6px; background: #020617; padding: 12px; border-radius: 8px; border: 1px dashed #334155; min-height: 40px;">
    <span style="background: #1e3a8a; color: #93c5fd; padding: 4px 10px; border-radius: 4px; font-size: 12px;">HTML</span>
    <span style="background: #1e3a8a; color: #93c5fd; padding: 4px 10px; border-radius: 4px; font-size: 12px;">CSS</span>
    <span style="background: #1e3a8a; color: #93c5fd; padding: 4px 10px; border-radius: 4px; font-size: 12px;">JavaScript</span>
  </div>
</div>

<script>
  // مصفوفة البداية
  const mySkillsList = ["HTML", "CSS", "JavaScript"];

  function addItemToArray() {
    const input = document.getElementById('new-item-input');
    const val = input.value.trim();
    if (!val) return;

    // إضافة العنصر إلى نهاية المصفوفة باستخدام دالة push
    mySkillsList.push(val);
    input.value = "";

    // تحديث الواجهة
    document.getElementById('arr-count').innerText = mySkillsList.length;
    const box = document.getElementById('array-items-box');
    box.innerHTML = mySkillsList.map(item => 
      '<span style="background: #1e3a8a; color: #93c5fd; padding: 4px 10px; border-radius: 4px; font-size: 12px;">' + item + '</span>'
    ).join('');
  }
</script>`,
      outputExplanation: "يشاهد المتعلم كيف تنمو المصفوفة ويزداد طولها (length) مع كل إضافة جديدة، حيث تتجمع العناصر معاً في وعاء منظم واحد.",
      commonMistakes: [
        {
          wrong: "استخدام الأقواس المنحنية ( ) أو المعقوفة { } لإنشاء المصفوفة بدلاً من الأقواس المربعة [ ].",
          right: "المصفوفات تُعرف حصراً بالأقواس المربعة [ element1, element2 ].",
          reason: "الأقواس المعقوفة { } مخصصة للكائنات Objects، والأقواس ( ) مخصصة للدوال والمعادلات."
        }
      ],
      bestPractices: [
        "عرف المصفوفات دائماً باستخدام const (مثل: const list = [])؛ لأن تعريفها بـ const يمنع استبدالها بمصفوفة أخرى ولكن يسمح لك بإضافة وحذف عناصر بداخلها بحرية.",
        "اجمع عناصر من نفس النوع في المصفوفة الواحدة (مصفوفة نصوص، أو مصفوفة أرقام) للحفاظ على تناسق الكود."
      ],
      infographic: {
        badge: "قوائم البيانات",
        title: "إنشاء المصفوفات (Arrays)",
        icon: "ListOrdered",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "الأقواس المربعة [ ]", desc: "الرمز القياسي لحبس وتجميع العناصر في مصفوفة واحدة" },
          { title: "الفواصل بين العناصر", desc: "فصل كل عنصر عن جاره بفاصلة إنجليزية عادية (,)" },
          { title: "خاصية length", desc: "معرفة العدد الإجمالي للعناصر الموجودة في المصفوفة في أي وقت" },
          { title: "دالة push()", desc: "إضافة عنصر جديد إلى نهاية القائمة بسهولة وسرعة" }
        ],
        summary: "المصفوفة هي القطار الرقمي الذي يحمل بضائع ومحتويات موقعك في عربات متتالية."
      }
    },
    {
      id: "2.2.b",
      title: "الوصول إلى عناصر المصفوفة",
      englishTitle: "Accessing Array Elements (Zero-Based Index)",
      definition: "عناصر المصفوفة مرقمة في الذاكرة بنظام يسمى الفهرس (Index)، ويبدأ هذا الترقيم دائماً من الصفر (Zero-Based Index) وليس من الواحد؛ فالعنصر الأول في المصفوفة يقع في الخانة [0]، والعنصر الثاني في [1]، وهكذا. ويمكن الوصول لآخر عنصر بـ [array.length - 1] أو عبر دالة at(-1) الحديثة.",
      analogy: "تخيل طوابق برج سكني على الطراز الأوروبي الحديث:\n- الطابق الأرضي (Ground Floor) هو الرقم 0 (الخانة الأولى).\n- الطابق الأول فوقه هو الرقم 1 (الخانة الثانية).\n- الطابق الثاني هو الرقم 2 (الخانة الثالثة).\nفإذا أردت الشخص الساكن في أول طابق في العمارة، تضغط على زر المصعد رقم 0!",
      why: "كل عنصر في المصفوفة يجب أن يكون له عنوان فريد ودقيق جداً للوصول إليه في جزء من المليار من الثانية لقراءته، أو تعديله، أو حذفه.",
      terms: [
        { term: "Index", pronunciation: "إندكس", meaning: "الفهرس؛ الرقم التسلسلي لموضع العنصر في المصفوفة (يبدأ من 0)" },
        { term: "Zero-Based", pronunciation: "زيرو بيسد", meaning: "نظام العد المعتمد على البدء من الصفر" },
        { term: "array[0]", pronunciation: "أراي زيرو", meaning: "طلب واسترجاع أول عنصر في المصفوفة" },
        { term: "array.at(-1)", pronunciation: "أراي آت ماينس ون", meaning: "دالة حديثة فائقة الأناقة لجلب آخر عنصر في المصفوفة فوراً" }
      ],
      syntax: "const colors = ['أحمر', 'أخضر', 'أزرق'];\nconst first = colors[0];     // 'أحمر'\nconst second = colors[1];    // 'أخضر'\nconst last = colors.at(-1);  // 'أزرق'",
      simpleCode: `// مصفوفة تضم أيام عطلة نهاية الأسبوع
const weekend = ["الجمعة", "السبت"];

// 1. جلب أول عنصر في المصفوفة عبر الفهرس 0
const firstDay = weekend[0]; // النتيجة: "الجمعة"

// 2. جلب ثاني عنصر في المصفوفة عبر الفهرس 1
const secondDay = weekend[1]; // النتيجة: "السبت"

// 3. تعديل قيمة عنصر موجود عبر الفهرس
weekend[1] = "السبت المبارك";

console.log("أول يوم:", firstDay);
console.log("المصفوفة بعد التعديل:", weekend); // ["الجمعة", "السبت المبارك"]`,
      advancedCode: `<!-- محاكي مرئي تفاعلي لفهم نظام الفهرسة من الصفر (Zero-Based Indexing) -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">تشريح الفهرسة: انقر على رقم الفهرس (Index):</h4>

  <!-- صف يوضح الفهارس وأسفلها القيم المقابلة -->
  <div style="display: flex; gap: 8px; justify-content: center; margin: 15px 0;">
    <div onclick="selectIndex(0, 'React')" style="background: #1e293b; border: 2px solid #38bdf8; border-radius: 8px; padding: 10px 14px; text-align: center; cursor: pointer;">
      <div style="font-size: 11px; color: #94a3b8;">Index [0]</div>
      <b style="color: #38bdf8; font-size: 14px;">React</b>
    </div>

    <div onclick="selectIndex(1, 'Vue')" style="background: #1e293b; border: 2px solid #10b981; border-radius: 8px; padding: 10px 14px; text-align: center; cursor: pointer;">
      <div style="font-size: 11px; color: #94a3b8;">Index [1]</div>
      <b style="color: #34d399; font-size: 14px;">Vue</b>
    </div>

    <div onclick="selectIndex(2, 'Next.js')" style="background: #1e293b; border: 2px solid #f59e0b; border-radius: 8px; padding: 10px 14px; text-align: center; cursor: pointer;">
      <div style="font-size: 11px; color: #94a3b8;">Index [2]</div>
      <b style="color: #facc15; font-size: 14px;">Next.js</b>
    </div>
  </div>

  <div id="index-output" style="background: #020617; padding: 12px; border-radius: 6px; border: 1px dashed #334155; font-size: 13px; text-align: center; color: #cbd5e1;">
    اضغط على أي صندوق أعلاه لمعرفة كيفية كتابة الكود البرمجي له...
  </div>
</div>

<script>
  function selectIndex(idx, name) {
    const out = document.getElementById('index-output');
    out.innerHTML = 'طلبنا العنصر: <code style="color:#38bdf8;">frameworks[' + idx + ']</code> ➔ النتيجة المرجوعة: <b style="color:#4ade80;">"' + name + '"</b>';
  }
</script>`,
      outputExplanation: "يرى المتعلم كيف يقابل كل عنصر رقم فهرس محدد بدقة؛ فالأول يقابله 0، والأخير يقابله طول المصفوفة ناقص واحد (length - 1).",
      commonMistakes: [
        {
          wrong: "محاولة طلب أول عنصر بكتابة arr[1] والاعتقاد بأن 1 تعني العنصر الأول.",
          right: "تذكر دائماً أن العنصر الأول هو arr[0]، وكتابة arr[1] ستعطيك العنصر الثاني.",
          reason: "البرمجة تبدأ من الصفر (0)، وهو أول إزاحة (Offset) في ذاكرة الحاسوب."
        },
        {
          wrong: "طلب فهرس غير موجود مثل مصفوفة بها 3 عناصر وأنت تطلب arr[5].",
          right: "التأكد من أن الفهرس يقع بين 0 و length - 1، وإلا ستكون النتيجة undefined.",
          reason: "المتصفح لن يوقف البرنامج لكنه سيعيد لك القيمة undefined مما قد يسبب أخطاء لاحقة."
        }
      ],
      bestPractices: [
        "استخدم دالة arr.at(-1) دائماً لجلب آخر عنصر في المصفوفة؛ فهي أسهل وأنظف بكثير من الصيغة القديمة arr[arr.length - 1].",
        "تحقق من أن المصفوفة ليست فارغة (arr.length > 0) قبل محاولة قراءة أول عنصر منها لتجنب المفاجآت."
      ],
      infographic: {
        badge: "العناوين الرقمية",
        title: "الوصول للفهارس (Index)",
        icon: "Hash",
        colors: "from-cyan-600 to-blue-600",
        steps: [
          { title: "البداية من الصفر [0]", desc: "أول عنصر في أي مصفوفة في العالم يقع في الخانة رقم 0" },
          { title: "العنصر الثاني [1]", desc: "كل عنصر بعده يزيد رقمه التسلسلي بمقدار 1" },
          { title: "آخر عنصر arr.at(-1)", desc: "الدالة العبقرية الحديثة لجلب نهاية القائمة برقم سالب" },
          { title: "الفهرس المفقود", desc: "طلب خانة خارج الحدود يرجع قيمة undefined الهادئة" }
        ],
        summary: "الفهرس هو عنوان الشقة؛ يبدأ من الدور الأرضي 0 ليصل لكل عنصر بدقة متناهية."
      }
    },
    {
      id: "2.2.c",
      title: "دوال map و filter و find",
      englishTitle: "Array Methods: map, filter & find (The React Triad)",
      definition: "هذه الدوال الثلاث هي 'المثلث المقدس' في برمجة React:\n- دالة map: تمر على كل عنصر في المصفوفة وتحوله إلى شكل جديد (مثل تحويل قائمة نصوص إلى بطاقات HTML/JSX).\n- دالة filter: مصفاة ذكية تفحص كل عنصر وتستخرج فقط العناصر التي تطابق الشرط (مثل المنتجات الأقل من 50 دولاراً).\n- دالة find: صائد سريع يبحث في المصفوفة ويعيد 'أول عنصر مفرد' يطابق شرطك ويتوقف فوراً.",
      analogy: "تخيل سلة تفاح في مزرعة:\n- دالة map: تأخذ كل تفاحة في السلة وتقشرها وتضع عليها شوكولاتة؛ فتحصل على سلة كاملة من التفاح المغطى بالشوكولاتة!\n- دالة filter: مصفاة تمرر التفاح السليم وتطرد التفاح الفاسد؛ فتحصل على سلة أصغر من التفاح السليم فقط.\n- دالة find: تقول لك: 'اعطني أول تفاحة حمراء تقابلك في السلة' فتأخذها وتكتفي بها!",
      why: "في React، 90% من عملك هو جلب مصفوفة بيانات من السيرفر وعرضها؛ دالة map هي الطريقة الوحيدة التي نستخدمها في React لرسم القوائم، و filter هي التي تستخدمها لحذف العناصر وتصفية نتائج البحث.",
      terms: [
        { term: "map()", pronunciation: "ماب", meaning: "دالة التحويل؛ تنتج مصفوفة جديدة بنفس الطول بعد تطبيق دالة على كل عنصر" },
        { term: "filter()", pronunciation: "فلتر", meaning: "دالة التصفية؛ تنتج مصفوفة جديدة تضم العناصر التي تحقق الشرط فقط" },
        { term: "find()", pronunciation: "فايند", meaning: "دالة البحث؛ تعيد أول عنصر يطابق الشرط ككائن أو قيمة مفردة" },
        { term: "Callback Function", pronunciation: "كول باك فانكشن", meaning: "الدالة الممررة كوسيط ليتم تنفيذها على كل عنصر في المصفوفة" }
      ],
      syntax: "// 1. map\nconst doubled = nums.map(n => n * 2);\n// 2. filter\nconst evens = nums.filter(n => n % 2 === 0);\n// 3. find\nconst user = users.find(u => u.id === 5);",
      simpleCode: `// مصفوفة أرقام بسيطة
const prices = [10, 20, 30, 40];

// 1. استخدام map لمضاعفة كل الأسعار بخصم 10%
const discounted = prices.map(price => price * 0.9); // [9, 18, 27, 36]

// 2. استخدام filter لاستخراج الأسعار التي تزيد عن 25 فقط
const expensive = prices.filter(price => price > 25); // [30, 40]

// 3. استخدام find للعثور على أول سعر يساوي 30
const target = prices.find(price => price === 30); // 30

console.log("الأسعار بعد الخصم (map):", discounted);
console.log("الأسعار المفلترة (filter):", expensive);
console.log("العنصر المعثور عليه (find):", target);`,
      advancedCode: `<!-- معمل تفاعلي يوضح الفرق الصارخ بين map و filter و find على قائمة منتجات -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">معمل الدوال الثلاث (The React Triad):</h4>
  
  <div style="font-size: 11px; color: #94a3b8; margin-bottom: 8px;">
    المصفوفة الأصلية: [ {هاتف: 500\$}, {ساعة: 150\$}, {سماعة: 50\$} ]
  </div>

  <div style="display: flex; gap: 6px; margin-bottom: 12px;">
    <button onclick="runMapDemo()" style="background: #2563eb; color: white; border: none; padding: 6px 10px; border-radius: 6px; font-size: 11px; cursor: pointer; font-weight: bold;">
      تجربة map()
    </button>
    <button onclick="runFilterDemo()" style="background: #10b981; color: white; border: none; padding: 6px 10px; border-radius: 6px; font-size: 11px; cursor: pointer; font-weight: bold;">
      تجربة filter(سعر &lt; 200)
    </button>
    <button onclick="runFindDemo()" style="background: #f59e0b; color: white; border: none; padding: 6px 10px; border-radius: 6px; font-size: 11px; cursor: pointer; font-weight: bold;">
      تجربة find(ساعة)
    </button>
  </div>

  <div id="triad-result" style="background: #020617; padding: 12px; border-radius: 6px; border: 1px dashed #334155; font-family: monospace; font-size: 12px; color: #cbd5e1; min-height: 60px;">
    اختر إحدى الدوال لمشاهدة نتيجتها الحقيقية...
  </div>
</div>

<script>
  const productsList = [
    { name: "هاتف ذكي", price: 500 },
    { name: "ساعة ذكية", price: 150 },
    { name: "سماعة أذن", price: 50 }
  ];

  function runMapDemo() {
    // map تحول المنتجات لقائمة أسماء فقط
    const names = productsList.map(p => p.name);
    document.getElementById('triad-result').innerHTML = 
      '<span style="color:#38bdf8;">map() استخرجت مصفوفة جديدة بالأسماء فقط:</span><br>' + JSON.stringify(names);
  }

  function runFilterDemo() {
    // filter تستخرج السلع الأقل من 200
    const cheap = productsList.filter(p => p.price < 200);
    document.getElementById('triad-result').innerHTML = 
      '<span style="color:#4ade80;">filter() استخرجت السلع الرخيصة فقط:</span><br>' + JSON.stringify(cheap);
  }

  function runFindDemo() {
    // find تعيد أول عنصر مفرد يطابق الاسم
    const item = productsList.find(p => p.name === "ساعة ذكية");
    document.getElementById('triad-result').innerHTML = 
      '<span style="color:#facc15;">find() عثرت على الكائن المفرد:</span><br>' + JSON.stringify(item);
  }
</script>`,
      outputExplanation: "يشاهد المتعلم كيف تنتج map مصفوفة جديدة بنفس الطول ولكن بهيئة محولة، وتنتج filter مصفوفة مصغرة، بينما تعيد find عنصراً مفرداً فقط فور العثور عليه.",
      commonMistakes: [
        {
          wrong: "نسيان أمر return داخل دالة map الطويلة، مما يجعل المصفوفة الناتجة ممتلئة بـ [undefined, undefined].",
          right: "استخدم الدوال السهمية المختصرة (p => p.name) أو تأكد من وجود return صريح إذا فتحت أقواس { }.",
          reason: "دالة map تحتاج إلى إرجاع قيمة لكل عنصر لتحقنها في المصفوفة الجديدة."
        }
      ],
      bestPractices: [
        "تذكر دائماً أن map و filter لا تعدلان على المصفوفة الأصلية إطلاقاً (Pure Functions)، بل تنتجان مصفوفة جديدة تماماً، وهذا هو المبدأ الجوهري لإدارة الحالة في React.",
        "استخدم find بدلاً من filter عندما تبحث عن عنصر فريد بالـ id لتوفير المعالجة والتوقف فور العثور عليه."
      ],
      infographic: {
        badge: "المثلث المقدس",
        title: "دوال map و filter و find",
        icon: "Filter",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "map(fn)", desc: "تحويل كل عنصر إلى شيء جديد؛ الأداة الأولى لعرض القوائم في React" },
          { title: "filter(fn)", desc: "تصفية واستخراج العناصر المطابقة للشرط؛ تستخدم لحذف العناصر وتصفيتها" },
          { title: "find(fn)", desc: "صائد فوري يعيد أول عنصر مفرد يحقق الشرط ويتوقف فوراً" },
          { title: "عدم التعديل (Immutability)", desc: "المصفوفة الأصلية تظل سالمة وآمنة وتولد مصفوفة جديدة نظيفة" }
        ],
        summary: "إذا أتقنت map و filter و find، فقد قطعت 50% من الطريق نحو احتراف التعامل مع البيانات في React."
      }
    },
    {
      id: "2.2.d",
      title: "دوال reduce و some و every",
      englishTitle: "Array Methods: reduce, some & every",
      definition: "دوال متقدمة تمنحك تحكماً خارقاً بالمصفوفات:\n- دالة reduce: تجمع وتصهر كل عناصر المصفوفة في 'قيمة واحدة نهائية' (مثل جمع أسعار كل المنتجات في السلة لحساب المجموع الإجمالي الفاتورة).\n- دالة some: تفحص هل يوجد 'عنصر واحد على الأقل' يطابق الشرط؟ (ترجع true أو false).\n- دالة every: تفحص هل 'جميع العناصر بلا استثناء' تطابق الشرط؟",
      analogy: "تخيل غرفة اختبارات مدرسية:\n- دالة reduce: تأخذ درجات كل الطلاب وتجمعها واحدة تلو الأخرى لتخرج برقم واحد نهائي هو: 'المجموع الكلي للدرجات'.\n- دالة some: يسأل المدير: 'هل هناك طالب واحد على الأقل رسب اليوم؟'؛ فإذا وجد واحداً فقط قال: نعم true!\n- دالة every: يسأل المدير: 'هل الجميع نجحوا بلا أي استثناء؟'؛ إذا رسب طالب واحد يقول: لا false!",
      why: "بدون reduce، ستضطر لإنشاء متغير خارجي let sum = 0 وكتابة حلقة for يدوية وإدارة عدادات مبعثرة. reduce تجمع الإجمالي في سطر واحد نظيف وغير قابل للخطأ.",
      terms: [
        { term: "reduce()", pronunciation: "ريديوس", meaning: "دالة الاختزال؛ صهر عناصر المصفوفة في قيمة واحدة نهائية" },
        { term: "Accumulator (acc)", pronunciation: "أكيوموليتور", meaning: "المُجمِّع؛ الحصالة التي تتجمع فيها النتائج دورة بعد دورة" },
        { term: "some()", pronunciation: "صَم", meaning: "هل يتحقق الشرط في عنصر واحد على الأقل؟ (ترجع true / false)" },
        { term: "every()", pronunciation: "إيفري", meaning: "هل يتحقق الشرط في جميع العناصر بلا استثناء؟" }
      ],
      syntax: "// 1. حساب المجموع بـ reduce\nconst total = prices.reduce((acc, curr) => acc + curr, 0);\n// 2. هل يوجد عنصر رخيص؟\nconst hasCheap = prices.some(p => p < 20);\n// 3. هل الكل إيجابي؟\nconst allPositive = prices.every(p => p > 0);",
      simpleCode: `// مصفوفة أسعار السلع في سلة المشتريات
const cartPrices = [50, 100, 200];

// 1. حساب المجموع الكلي للفاتورة باستخدام reduce
// نبدأ الحصالة برقم 0، وفي كل دورة نضيف السعر الحالي
const totalPrice = cartPrices.reduce((accumulator, currentPrice) => {
  return accumulator + currentPrice;
}, 0); // 0 هي القيمة الابتدائية للحصالة

console.log("المجموع الإجمالي للفاتورة:", totalPrice); // يطبع: 350

// 2. فحص هل يوجد عنصر باهظ الثمن (> 150)
const hasLuxury = cartPrices.some(price => price > 150); // true

// 3. فحص هل كل الأسعار أكبر من صفر
const isAllValid = cartPrices.every(price => price > 0); // true`,
      advancedCode: `<!-- محاكي سلة مشتريات حقيقي يحسب الإجمالي عبر reduce في الوقت الفعلي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">حاسبة سلة المشتريات (reduce in Action) 🛒:</h4>

  <div id="cart-list" style="space-y-1; font-size: 13px; margin-bottom: 12px;">
    <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #1e293b;">
      <span>كتاب React 19 الشامل</span>
      <span style="color: #4ade80;">\$40</span>
    </div>
    <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #1e293b;">
      <span>دورة JavaScript المتقدمة</span>
      <span style="color: #4ade80;">\$60</span>
    </div>
    <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #1e293b;">
      <span>اشتراك المنصة السنوي</span>
      <span style="color: #4ade80;">\$100</span>
    </div>
  </div>

  <div style="background: #1e293b; padding: 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-weight: bold; font-size: 14px;">المجموع الإجمالي (reduce):</span>
    <b id="cart-total-badge" style="font-size: 18px; color: #38bdf8;">\$200</b>
  </div>

  <div style="margin-top: 10px; font-size: 11px; color: #94a3b8; text-align: center;">
    تم اختزال المصفوفة [40, 60, 100] إلى رقم واحد هو 200 عبر دالة reduce().
  </div>
</div>`,
      outputExplanation: "يعاين المستخدم كيف تختزل reduce قائمة العناصر في رقم مالي نهائي واحد، وتحدث الفاتورة فوراً دون الحاجة لكتابة حلقات تكرار طويلة.",
      commonMistakes: [
        {
          wrong: "نسيان تمرير القيمة الابتدائية (Initial Value مثل 0) في دالة reduce.",
          right: "تحديد القيمة الابتدائية دائماً في نهاية الدالة مثل: reduce(..., 0).",
          reason: "نسيان القيمة الابتدائية قد يسبب أخطاء غريبة إذا كانت المصفوفة فارغة (Reduce of empty array with no initial value)."
        }
      ],
      bestPractices: [
        "استخدم some للتحقق السريع من الشروط الأمنية (مثل: هل يوجد أي تعليق يحتوي على كلمات محظورة؟).",
        "استخدم every للتأكد من اكتمال النماذج (مثل: هل كل الحقول الإلزامية ممتلئة؟)."
      ],
      infographic: {
        badge: "قوة الاختزال والمنطق",
        title: "دوال reduce و some و every",
        icon: "Layers",
        colors: "from-emerald-600 to-teal-600",
        steps: [
          { title: "reduce() والحصالة", desc: "صهر كل عناصر المصفوفة في ناتج واحد (مجموع، كائن مجمع)" },
          { title: "some() للبحث الجزئي", desc: "ترجع true فور العثور على عنصر واحد فقط يطابق الشرط" },
          { title: "every() للإجماع التام", desc: "ترجع true فقط إذا كان جميع أفراد المصفوفة متطابقين مع الشرط" },
          { title: "القيمة الابتدائية initialValue", desc: "نقطة انطلاق الحصالة (0 للأرقام، أو [] للمصفوفات)" }
        ],
        summary: "reduce هي السكين السويسري المتعدد الاستخدامات لأي مبرمج يريد صهر البيانات في خلاصة واحدة."
      }
    },
    {
      id: "2.2.e",
      title: "دوال slice و splice",
      englishTitle: "Array Slicing vs Splicing (slice vs splice)",
      definition: "هناك فرق جوهري بين الدالتين في التعامل مع أجزاء المصفوفة:\n- دالة slice (القطعة): تقطع شريحة وتنسخها في مصفوفة جديدة 'دون لمس أو تغيير المصفوفة الأصلية' (دالة نقية وآمنة جداً).\n- دالة splice (الجراحة العميقة): تقوم بالعمليات الجراحية المباشرة في 'قلب المصفوفة الأصلية' فتحذف منها وتضيف عناصر مكانها (تعدل الأصل وهي خطيرة في React!).",
      analogy: "تخيل كعكة عيد ميلاد:\n- دالة slice: تشبه التقاط 'صورة فوتوغرافية' لجزء من الكعكة؛ الكعكة الأصلية تظل سالمة كاملة كما هي.\n- دالة splice: تشبه إحضار 'سكين حقيقي وقص قطعة من الكعكة وأكلها واستبدالها بحبة فراولة'؛ لقد تغيرت الكعكة الأصلية للأبد!",
      why: "في عالم React، القاعدة الذهبية الصارمة هي عدم تعديل البيانات الأصلية مباشرة (Immutability). لذا نستخدم slice بكثرة لأنها آمنة ونقية، ونبتعد عن splice إلا بحذر شديد.",
      terms: [
        { term: "slice(start, end)", pronunciation: "سلايس", meaning: "قطع ونسخ جزء من المصفوفة دون تعديل الأصل" },
        { term: "splice(start, count, items)", pronunciation: "سبلايس", meaning: "حذف أو إضافة عناصر مباشرة وتعديل المصفوفة الأصلية" },
        { term: "Immutability", pronunciation: "إيمييوتابيليتي", meaning: "عدم القابلية للتغيير المباشر؛ حفظ البيانات الأصلية ناصعة" }
      ],
      syntax: "// 1. slice الآمنة (لا تعدل الأصل)\nconst piece = arr.slice(0, 2); // تأخذ من الخانة 0 إلى قبل 2\n\n// 2. splice الجراحية (تعدل الأصل!)\narr.splice(1, 1); // تحذف عنصراً واحداً بدءاً من الخانة 1",
      simpleCode: `// مصفوفة لاعبين أصلية
const players = ["محمد", "علي", "سارة", "خالد"];

// 1. استخدام slice لنسخ أول لاعبين في مصفوفة جديدة آمنة
const firstTwo = players.slice(0, 2); // ["محمد", "علي"]
// لاحظ: مصفوفة players الأصلية لم تتأثر إطلاقاً وظلت 4 لاعبين!

// 2. استخدام splice الجراحية (تعديل الأصل!)
// سنحذف لاعباً واحداً بدءاً من الخانة رقم 1 (علي)
players.splice(1, 1);
// الآن تغيرت مصفوفة players الأصلية وأصبحت: ["محمد", "سارة", "خالد"]!

console.log("النسخة المقطوعة بـ slice:", firstTwo);
console.log("المصفوفة الأصلية بعد splice:", players);`,
      advancedCode: `<!-- مقارنة تفاعلية حية بين slice الآمنة و splice المعدلة للأصل -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">المقارنة المصيرية: slice مقابل splice</h4>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
    <!-- كرت slice -->
    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-top: 3px solid #10b981;">
      <b style="color: #34d399; font-size: 13px;">✓ slice() النقية الآمنة</b>
      <p style="font-size: 11px; color: #94a3b8; margin: 4px 0 0 0; line-height: 1.5;">
        • لا تعدل الأصل أبداً.<br>
        • تصنع نسخة مقطوعة جديدة.<br>
        • مثالية تماماً لمكتبة React.
      </p>
    </div>

    <!-- كرت splice -->
    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-top: 3px solid #ef4444;">
      <b style="color: #f87171; font-size: 13px;">⚠️ splice() الجراحية</b>
      <p style="font-size: 11px; color: #94a3b8; margin: 4px 0 0 0; line-height: 1.5;">
        • تعدل المصفوفة الأصلية فوراً.<br>
        • تحذف وتغير الخانات الحقيقية.<br>
        • ممنوعة في تحديثات React State.
      </p>
    </div>
  </div>

  <div style="background: #020617; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 12px; border: 1px dashed #334155; color: #a7f3d0; text-align: center;">
    القاعدة: تذكر دائماً حرف الـ <b>p</b> الإضافي في s<b>p</b>lice يرمز إلى (Pain / ألم وتعديل مباشر)!
  </div>
</div>`,
      outputExplanation: "يرى المطور المقارنة بوضوح: slice تنتج شريحة مع بقاء الأصل سليماً، بينما splice تمزق المصفوفة الأصلية وتغير محتواها الداخلي.",
      commonMistakes: [
        {
          wrong: "استخدام splice لحذف عنصر من State في تطبيق React مباشرة (مثل items.splice(i, 1)).",
          right: "استخدام دالة filter أو معامل الانتشار بدلاً منها للحفاظ على مبدأ عدم تعديل الأصل.",
          reason: "تعديل State مباشرة عبر splice يربك محرك React ويمنع إعادة تصيير الواجهة (Re-render) فلن يرى المستخدم التحديث!"
        }
      ],
      bestPractices: [
        "استخدم arr.slice() بدون معاملات لعمل نسخة سطحية سريعة ومستقلة من المصفوفة.",
        "احفظ دائماً: slice للنسخ والقطع الآمن، و splice للجراحة والتعديل المباشر للأصل."
      ],
      infographic: {
        badge: "القطع والنسخ",
        title: "slice مقابل splice",
        icon: "Scissors",
        colors: "from-rose-500 to-pink-600",
        steps: [
          { title: "slice(start, end)", desc: "قص جزء ووضعه في مصفوفة جديدة مع حماية الأصل 100%" },
          { title: "splice(start, count)", desc: "عملية جراحية تحذف من الأصل مباشرة وتغير الذاكرة" },
          { title: "مبدأ Immutability", desc: "القاعدة الذهبية في React: لا تعدل على البيانات الأصلية" },
          { title: "التوافق مع React", desc: "slice صديقة لـ React، و splice تسبب مشاكل في الـ State" }
        ],
        summary: "الفرق بينهما حرف واحد، لكنه الفارق بين كود نظيف آمن وكود يحدث أعطالاً مفاجئة."
      }
    },
    {
      id: "2.2.f",
      title: "ترتيب المصفوفات باستخدام sort",
      englishTitle: "Sorting Arrays with sort() & Comparator",
      definition: "دالة sort() تقوم بترتيب عناصر المصفوفة (أبجدياً أو رقمياً). وبشكل افتراضي خادع، تقوم بتحويل كل العناصر إلى نصوص وترتيبها أبجدياً حسب جدول UTF-16؛ لذا لترتيب الأرقام حسابياً بشكل سليم يلزمنا تزويدها بدالة مقارنة (Comparator Function مثل (a, b) => a - b).",
      analogy: "تخيل شخصاً يرتب مجلدات الأوراق في مكتب: إذا رتبها 'أبجدياً بالنظر للخانة الأولى' سيضع الرقم 100 قبل الرقم 25 لأن الرقم 100 يبدأ بالرقم '1' وهو قبل '2'! هذا هو سلوك sort الافتراضي. لترتيبها حسب القيمة الحقيقية للمال، يجب أن تعطيه ميزاناً حسابياً (دالة المقارنة) ليزن الرقم كاملاً!",
      why: "المتاجر الإلكترونية تحتاج دائماً لميزة 'ترتيب المنتجات من الأقل سعراً للأعلى' أو 'ترتيب الأسماء أبجدياً'. فهم دالة المقارنة هو الذي يضمن ظهور الأسعار بترتيب سليم ومنطقي.",
      terms: [
        { term: "sort()", pronunciation: "سورت", meaning: "دالة ترتيب المصفوفات" },
        { term: "Comparator Function", pronunciation: "كومباراتور فانكشن", meaning: "دالة المقارنة التي تقارن بين عنصرين (a و b)" },
        { term: "Ascending", pronunciation: "أسيندينج", meaning: "ترتيب تصاعدي (من الأصغر للأكبر: a - b)" },
        { term: "Descending", pronunciation: "ديسيندينج", meaning: "ترتيب تنازلي (من الأكبر للأصغر: b - a)" }
      ],
      syntax: "// 1. ترتيب الأرقام تصاعدياً (من الصغير للكبير)\nnumbers.sort((a, b) => a - b);\n\n// 2. ترتيب الأرقام تنازلياً (من الكبير للصغير)\nnumbers.sort((a, b) => b - a);\n\n// 3. ترتيب آمن في React دون تعديل الأصل بـ toSorted\nconst sorted = numbers.toSorted((a, b) => a - b);",
      simpleCode: `// مصفوفة أرقام عشوائية
const scores = [100, 25, 5, 80];

// ❌ الترتيب الافتراضي بدون دالة مقارنة يرتكب خطأ شهيراً:
// scores.sort(); // النتيجة: [100, 25, 5, 80] لأن '1' تسبق '2' و '5'!

// ✓ الترتيب الرقمي الحسابي السليم باستخدام دالة المقارنة:
scores.sort((a, b) => {
  // إذا كان الناتج سالباً، يضع a قبل b
  // وإذا كان موجباً، يضع b قبل a
  return a - b;
});

console.log("الترتيب التصاعدي الصحيح:", scores); // [5, 25, 80, 100]`,
      advancedCode: `<!-- محاكي تفاعلي لترتيب قائمة أسعار متجر من الأقل للأعلى ومن الأعلى للأقل -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h4 style="margin: 0; color: #38bdf8;">ترتيب المنتجات الحسابي (sort):</h4>
    <div style="display: flex; gap: 6px;">
      <button onclick="sortPrices(true)" style="background: #1e293b; color: #4ade80; border: 1px solid #334155; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">
        من الأرخص ⬆️
      </button>
      <button onclick="sortPrices(false)" style="background: #1e293b; color: #f43f5e; border: 1px solid #334155; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">
        من الأغلى ⬇️
      </button>
    </div>
  </div>

  <div id="sort-items" style="background: #020617; padding: 12px; border-radius: 8px; border: 1px solid #1e293b; font-family: monospace; font-size: 13px; text-align: center; color: #a7f3d0;">
    [\$100, \$25, \$5, \$80, \$12]
  </div>
</div>

<script>
  let currentList = [100, 25, 5, 80, 12];

  function sortPrices(isAscending) {
    if (isAscending) {
      // تصاعدي: a - b
      currentList.sort((a, b) => a - b);
    } else {
      // تنازلي: b - a
      currentList.sort((a, b) => b - a);
    }
    document.getElementById('sort-items').innerText = 
      '[' + currentList.map(n => '$' + n).join(', ') + ']';
  }
</script>`,
      outputExplanation: "يعاين المستخدم كيف تترتب الأسعار الرقمية بسلاسة تامة وتستجيب للأزرار فوراً، بفضل معادلة المقارنة البسيطة (a - b) للتصاعدي و (b - a) للتنازلي.",
      commonMistakes: [
        {
          wrong: "استخدام [10, 5, 20].sort() وتوقع أن يتم ترتيب الأرقام حسابياً تلقائياً.",
          right: "تزويد دالة sort دائماً بدالة مقارنة: (a, b) => a - b للأرقام.",
          reason: "بدون دالة مقارنة، ترتب دالة sort الأرقام كحروف أبجدية فيسبق 100 الرقم 5!"
        }
      ],
      bestPractices: [
        "استخدم الدالة الحديثة arr.toSorted() إذا كان المتصفح يدعمها؛ لأنها ترتب وتنتج مصفوفة جديدة دون تعديل الأصل.",
        "إذا أردت ترتيب نصوص عربية أبجدياً، استخدم دالة localeCompare: (a, b) => a.localeCompare(b, 'ar')."
      ],
      infographic: {
        badge: "التنظيم والترتيب",
        title: "ترتيب المصفوفات (sort)",
        icon: "ArrowDownUp",
        colors: "from-amber-500 to-orange-600",
        steps: [
          { title: "الترتيب الافتراضي", desc: "يرتب أبجدياً كنصوص (UTF-16) ويخدع في حالة الأرقام" },
          { title: "التصاعدي (a - b)", desc: "طرح a من b لترتيب الأرقام من الأصغر إلى الأكبر بدقة" },
          { title: "التنازلي (b - a)", desc: "عكس المعادلة لطرح b من a للترتيب من الأغلى للأرخص" },
          { title: "localeCompare للعربية", desc: "الترتيب الأبجدي الدقيق للحروف والكلمات العربية" }
        ],
        summary: "دالة المقارنة (a - b) هي البوصلة التي توجه دالة sort نحو الترتيب الحسابي الصحيح."
      }
    },
    {
      id: "2.2.g",
      title: "إنشاء الكائنات Objects",
      englishTitle: "Objects Basics (Key-Value Pairs)",
      definition: "الكائن (Object) هو هيكل بيانات مركب يتيح لك تمثيل الأشياء الحقيقية في العالم الواقعي (مثل مستخدم، أو سيارة، أو مقال) على شكل أزواج من المفاتيح والقيم (Key-Value Pairs) محصورة بين قوسين معقوفين { ... }.",
      analogy: "تخيل 'بطاقة الهوية الوطنية' أو 'جواز السفر': ليست مجرد ورقة أرقام مبعثرة، بل تحوي حقولاً واضحة:\n- الاسم (key): 'محمد' (value)\n- العمر (key): 28 (value)\n- الجنسية (key): 'سعودي' (value)\nهذه البطاقة بكامل حقولها هي تمثيل حي للكائن في البرمجة!",
      why: "المصفوفة تخزن عناصر مرتبة، لكنها لا توضح معنى كل رقم؛ فإذا كان لديك [25, 'أحمد', true] لن تعرف ما هو 25؟ هل هو عمره أم مقاس حذائه؟ الكائن يوضح المعنى تماماً: { name: 'أحمد', age: 25, isMember: true }.",
      terms: [
        { term: "Object", pronunciation: "أوبجكت", meaning: "الكائن؛ هيكل بيانات يجمع خصائص مترابطة تمثل كياناً واحداً" },
        { term: "Key (Property)", pronunciation: "كي / بروبيرتي", meaning: "المفتاح أو اسم الخاصية (مثل name أو price)" },
        { term: "Value", pronunciation: "فاليو", meaning: "القيمة المخزنة في هذا المفتاح (نص، رقم، مصفوفة، دالة)" },
        { term: "Curly Braces { }", pronunciation: "كيرلي بريسز", meaning: "الأقواس المعقوفة المخصصة لتعريف وحصر الكائنات" }
      ],
      syntax: "const user = {\n  name: 'أحمد',\n  age: 26,\n  isVerified: true,\n  skills: ['React', 'CSS']\n};",
      simpleCode: `// إنشاء كائن يمثل منتجاً في متجر إلكتروني
const laptopProduct = {
  // المفتاح: القيمة
  id: 101,
  title: "لابتوب حديث فائق السرعة",
  price: 1200,
  inStock: true,
  // يمكن أن يحوي الكائن مصفوفة بداخله!
  colors: ["فضي", "رمادي", "أسود"]
};

// طباعة الكائن كاملاً في الكونسول
console.log("بيانات المنتج:", laptopProduct);`,
      advancedCode: `<!-- بطاقة شخصية تفاعلية مولدة من كائن JavaScript حقيقي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 440px;">
  <h4 style="color: #38bdf8; margin-top: 0;">تمثيل الكائن في واجهة المستخدم (Object ➔ UI):</h4>

  <!-- بطاقة تم رسمها من بيانات الكائن -->
  <div style="background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 16px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <h3 id="obj-name" style="margin: 0; color: #f8fafc; font-size: 16px;">سارة المنصور</h3>
      <span id="obj-badge" style="font-size: 11px; background: #065f46; color: #6ee7b7; padding: 2px 8px; border-radius: 12px;">موثق ✓</span>
    </div>
    
    <div style="font-size: 12px; color: #94a3b8; line-height: 1.6;">
      <div>💼 الوظيفة: <span id="obj-job" style="color: #cbd5e1;">مهندسة واجهات أولى</span></div>
      <div>📍 المدينة: <span id="obj-city" style="color: #cbd5e1;">الرياض</span></div>
      <div>⭐ التقييم: <span id="obj-rate" style="color: #facc15;">4.9 / 5.0</span></div>
    </div>
  </div>

  <div style="margin-top: 10px; font-size: 11px; color: #64748b; text-align: center;">
    هذه البطاقة تم استخراج كل تفاصيلها من كائن واحد: <code>const profile = { ... }</code>
  </div>
</div>`,
      outputExplanation: "يرى الزائر كيف تتحول خصائص الكائن البرمجي إلى بطاقة تعريفية حية في الصفحة؛ فكل مفتاح يغذي عنصراً مخصصاً في واجهة المستخدم.",
      commonMistakes: [
        {
          wrong: "نسيان كتابة الفاصلة (,) بين كل زوج من المفتاح والقيمة داخل الكائن.",
          right: "وضع فاصلة عادية بعد كل سطر خاصية داخل الكائن تفصلها عن السطر التالي.",
          reason: "نسيان الفاصلة يسبب خطأ نحوياً يوقف الكود: SyntaxError: Unexpected identifier."
        }
      ],
      bestPractices: [
        "استخدم الأسماء الإنجليزية المعبرة للمفاتيح مثل createdAt بدلاً من الحروف المجهولة.",
        "ضع فاصلة إضافية في نهاية آخر خاصية (Trailing Comma) لتسهيل إضافة خصائص جديدة مستقبلاً ومقارنة التعديلات في Git."
      ],
      infographic: {
        badge: "تمثيل الواقع",
        title: "الكائنات (Objects)",
        icon: "Box",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "المفتاح والقيمة (Key: Value)", desc: "تسمية كل معلومة بوضوح مثل age: 25 بدلاً من الأرقام الصامتة" },
          { title: "الأقواس المعقوفة { }", desc: "الحاوية الجامعة لكل خصائص الكائن تحت سقف واحد" },
          { title: "تنوع البيانات بداخلها", desc: "يمكن للكائن أن يحوي نصوصاً وأرقاماً ومصفوفات ودوال" },
          { title: "جوهر الـ Props في React", desc: "كل خصائص المكونات (Props) في React هي في الحقيقة كائنات!" }
        ],
        summary: "الكائن هو المرآة البرمجية التي تترجم كائنات العالم الحقيقي إلى شفرات رقمية ذكية."
      }
    },
    {
      id: "2.2.h",
      title: "قراءة خصائص الكائنات وتعديلها",
      englishTitle: "Accessing & Modifying Object Properties (Dot vs Bracket)",
      definition: "هناك طريقتان للوصول لبيانات الكائن وقراءتها أو تعديلها:\n1. طريقة النقطة (Dot Notation مثل user.name): وهي الأبسط والأكثر استخداماً 95% من الوقت.\n2. طريقة الأقواس المربعة (Bracket Notation مثل user['name']): وتستخدم عندما يكون اسم المفتاح مخزناً داخل متغير آخر، أو يحوي مسافات ورموزاً خاصة.",
      analogy: "تخيل صندوق أمانات بنكي:\n- طريقة النقطة (.): تشبه أن تقرأ اللوحة المعدنية المكتوبة على الباب بوضوح: 'صندوق.الذهب'.\n- طريقة الأقواس [ ]: تشبه أن تملك ورقة صغيرة مكتوب فيها اسم الصندوق المطلوب، فتطابق الاسم المكتوب في الورقة مع الصندوق وتفتحه ديناميكياً!",
      why: "عندما يبني المطور نموذج بحث، قد يريد قراءة خاصية يحددها المستخدم في القائمة المنسدلة؛ هنا تكون طريقة الأقواس user[selectedField] هي المنقذ الوحيد لقراءة الخاصية ديناميكياً.",
      terms: [
        { term: "Dot Notation (.)", pronunciation: "دوت نوتيشن", meaning: "الوصول السريع للخاصية بكتابة نقطة ثم اسم المفتاح" },
        { term: "Bracket Notation [ ]", pronunciation: "براكيت نوتيشن", meaning: "الوصول للخاصية بالأقواس المربعة؛ يدعم المفاتيح الديناميكية" },
        { term: "delete operator", pronunciation: "ديليت أوبيراتور", meaning: "معامل لحذف خاصية محددة من الكائن نهائياً" }
      ],
      syntax: "const car = { brand: 'تويوتا', year: 2024 };\nconsole.log(car.brand);      // 'تويوتا' (Dot Notation)\nconsole.log(car['year']);    // 2024 (Bracket Notation)\ncar.color = 'أبيض';          // إضافة خاصية جديدة\ndelete car.year;             // حذف خاصية",
      simpleCode: `// كائن يمثل طالباً
const student = {
  name: "خالد عبد الله",
  grade: 95
};

// 1. قراءة الاسم باستخدام طريقة النقطة (.)
console.log("اسم الطالب:", student.name);

// 2. تعديل الدرجة وزيادتها
student.grade = 100;

// 3. إضافة خاصية جديدة لم تكن موجودة من قبل بكل بساطة!
student.school = "مدرسة الرواد";

// 4. قراءة خاصية ديناميكية عبر متغير وطريقة الأقواس []
const propertyToLookFor = "grade";
console.log("قراءة ديناميكية للدرجة:", student[propertyToLookFor]); // 100`,
      advancedCode: `<!-- محاكي تعديل بيانات الملف الشخصي في الوقت الفعلي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">محرر خصائص الكائن التفاعلي:</h4>

  <div style="display: flex; gap: 8px; margin-bottom: 12px;">
    <input type="text" id="edit-city-input" placeholder="اكتب المدينة الجديدة..." style="flex: 1; padding: 8px 12px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white; font-size: 12px;" />
    <button onclick="updateObjectCity()" style="background: #10b981; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
      تحديث city.
    </button>
  </div>

  <div id="obj-preview-box" style="background: #020617; padding: 12px; border-radius: 8px; border: 1px dashed #334155; font-family: monospace; font-size: 12px; color: #a7f3d0; line-height: 1.6;">
    const user = {<br>
    &nbsp;&nbsp;name: "عمر",<br>
    &nbsp;&nbsp;city: <span id="city-val" style="color: #facc15;">"جدة"</span><br>
    };
  </div>
</div>

<script>
  const userAccount = {
    name: "عمر",
    city: "جدة"
  };

  function updateObjectCity() {
    const input = document.getElementById('edit-city-input');
    const val = input.value.trim();
    if (!val) return;

    // تعديل الخاصية بطريقة النقطة
    userAccount.city = val;
    input.value = "";

    document.getElementById('city-val').innerText = '"' + userAccount.city + '"';
  }
</script>`,
      outputExplanation: "يرى المتعلم كيف يتم تحديث قيمة المفتاح city داخل الكائن فورياً عبر طريقة النقطة userAccount.city = val، وتنعكس في الشفرة المعروضة بلمح البصر.",
      commonMistakes: [
        {
          wrong: "استخدام طريقة النقطة مع متغير ديناميكي مثل: user.myVariable بدلاً من user[myVariable].",
          right: "استخدام الأقواس المربعة user[myVariable] عندما يكون اسم المفتاح مخزناً داخل متغير.",
          reason: "المتصفح عند كتابة user.myVariable يبحث حرفياً عن مفتاح اسمه 'myVariable' وليس عن القيمة المخزنة بداخله!"
        }
      ],
      bestPractices: [
        "استخدم طريقة النقطة user.name كخيارك الافتراضي الدائم لنظافتها وسرعتها.",
        "استخدم ميزة الـ Optional Chaining (user?.address?.city) عند قراءة الخصائص المتداخلة لمنع انهيار البرنامج إذا كان الكائن فارغاً."
      ],
      infographic: {
        badge: "طرق القراءة والتعديل",
        title: "خصائص الكائنات (Properties)",
        icon: "Key",
        colors: "from-teal-600 to-emerald-600",
        steps: [
          { title: "طريقة النقطة (user.name)", desc: "الطريقة القياسية المباشرة والأكثر قراءة وأناقة في الكود" },
          { title: "طريقة الأقواس (user['name'])", desc: "المنقذ للمفاتيح الديناميكية وتلك التي تحوي مسافات أو أرقاماً" },
          { title: "إضافة وتعديل سهل", desc: "كتابة اسم الخاصية وتعيين القيمة يضيفها فوراً إن لم تكن موجودة" },
          { title: "حذف الخصائص delete", desc: "إزالة المفتاح وقيمته بالكامل من الكائن عبر معامل delete" }
        ],
        summary: "طريقة النقطة للثوابت، وطريقة الأقواس للمتغيرات الديناميكية."
      }
    },
    {
      id: "2.2.i",
      title: "المصفوفات والكائنات المتداخلة",
      englishTitle: "Nested Arrays & Objects (Complex Data)",
      definition: "في التطبيقات الحقيقية، لا تأتي البيانات في سطر واحد بسيط؛ بل تتداخل كائنات داخل مصفوفات (مثل مصفوفة مستخدمين يحوي كل مستخدم كائن عنوان)، وتتداخل مصفوفات داخل كائنات (مثل كائن متجر يحوي مصفوفة فئات). ويتم الوصول لها بسلسلة متتالية من النقط والأقواس المربعة (مثل users[0].address.city).",
      analogy: "مثل 'مجلدات الكمبيوتر المتداخلة': لديك مجلد كبير اسمه (المشاريع)، وبداخله مجلد لكل سنة (2026)، وبداخله ملف باسم (تقرير.pdf). لتصل للملف، تفتح المجلد الأول، ثم الثاني، ثم الثالث بتسلسل هرمي طبيعي.",
      why: "كل البيانات القادمة من الـ APIs وخوادم الويب في العالم تأتي بصيغة JSON المعقدة الممتلئة بالكائنات والمصفوفات المتداخلة. إتقان التنقل فيها هو الشرط الأساسي لعرض بيانات المستخدمين والمنتجات في React.",
      terms: [
        { term: "Nesting", pronunciation: "نيستينج", meaning: "التداخل؛ وضع مصفوفات وكائنات داخل بعضها البعض" },
        { term: "JSON (JavaScript Object Notation)", pronunciation: "جيسون", meaning: "الصيغة العالمية القياسية لتبادل البيانات بين الخادم والمتصفح" },
        { term: "Deep Property Access", pronunciation: "ديب أكسس", meaning: "الوصول المتسلسل للخصائص العميقة مثل data.user.posts[0].title" }
      ],
      syntax: "const company = {\n  name: 'ألفا تك',\n  branches: [\n    { city: 'الرياض', employees: 50 },\n    { city: 'دبي', employees: 30 }\n  ]\n};\nconsole.log(company.branches[0].city); // 'الرياض'",
      simpleCode: `// كائن متداخل يمثل بيانات طالب كاملة
const studentProfile = {
  id: 1,
  name: "عبد الرحمن",
  contact: {
    email: "abdo@example.com",
    phone: "0501234567"
  },
  registeredCourses: ["React الأساسية", "Node.js المتقدمة"]
};

// 1. الوصول إلى الإيميل داخل كائن contact المتداخل
const email = studentProfile.contact.email;

// 2. الوصول إلى اسم الدورة الأولى داخل مصفوفة registeredCourses
const firstCourse = studentProfile.registeredCourses[0];

console.log("البريد:", email); // abdo@example.com
console.log("الدورة الأولى:", firstCourse); // React الأساسية`,
      advancedCode: `<!-- محاكي استخراج وعرض بيانات قادمة من API حقيقي بصيغة JSON متداخلة -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">قراءة البيانات المتداخلة (Nested Data Access):</h4>

  <div style="background: #1e293b; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 11px; color: #94a3b8; line-height: 1.6; margin-bottom: 12px;">
    const orders = [<br>
    &nbsp;&nbsp;{ id: 101, customer: { name: "فاطمة" }, items: ["عطر", "ساعة"] }<br>
    ];
  </div>

  <div style="background: #020617; padding: 12px; border-radius: 6px; border: 1px dashed #334155; font-size: 13px;">
    <div>👤 اسم العميل: <b style="color: #38bdf8;">orders[0].customer.name</b> ➔ "فاطمة"</div>
    <div style="margin-top: 6px;">📦 أول سلعة طلبتها: <b style="color: #4ade80;">orders[0].items[0]</b> ➔ "عطر"</div>
  </div>
</div>`,
      outputExplanation: "يعاين المتعلم كيف يتنقل كوده البرمجي خطوة بخطوة: يختار العنصر الأول من مصفوفة الطلبات orders[0]، ثم يفتح كائن العميل .customer، ثم يقرأ الاسم .name بنعومة متناهية.",
      commonMistakes: [
        {
          wrong: "محاولة قراءة خاصية من كائن غير موجود مثل: user.address.city عندما يكون address قيمة undefined.",
          right: "استخدام ميزة الـ Optional Chaining الحديثة: user.address?.city.",
          reason: "القراءة من undefined تفجر خطأ فادحاً يوقف الموقع كاملاً: Cannot read properties of undefined (reading 'city')."
        }
      ],
      bestPractices: [
        "استخدم علامة الاستفهام ونقطة (?.) Optional Chaining في كل مرة تقرأ فيها بيانات متداخلة قادمة من خادم خارجي.",
        "فكك البيانات الكبيرة والمعقدة إلى متغيرات صغيرة قبل استخدامها في رسم شاشات الـ JSX."
      ],
      infographic: {
        badge: "الهياكل المعقدة",
        title: "البيانات المتداخلة (Nesting)",
        icon: "Network",
        colors: "from-purple-600 to-indigo-600",
        steps: [
          { title: "مصفوفات داخل كائنات", desc: "كائن المستخدم يضم مصفوفة مهاراته المفضلة skills: [...]" },
          { title: "كائنات داخل مصفوفات", desc: "مصفوفة المنتجات تضم كائنات تفصيلية لكل منتج [ {}, {} ]" },
          { title: "التنقل المتسلسل", desc: "الجمع بين النقطة والأقواس مثل store.products[0].title" },
          { title: "أمان Optional Chaining (?.)", desc: "الحارس الذي يمنع الانهيار إذا كان أحد الحقول المتداخلة مفقوداً" }
        ],
        summary: "البيانات المتداخلة هي اللغة المشتركة التي تتحدث بها كل واجهات برمجة التطبيقات (APIs) في العالم."
      }
    },
    {
      id: "2.2.j",
      title: "النسخ السطحي والنسخ العميق",
      englishTitle: "Shallow Copy vs Deep Copy (Spread & Immutability)",
      definition: "في JavaScript، الكائنات والمصفوفات تُخزن في الذاكرة عبر 'عناوين مرجعية' (References)؛ فإذا كتبت const b = a، فأنت لم تصنع نسخة جديدة، بل صنعت اسماً ثانياً يشير لنفس الصندوق في الذاكرة! لتصنع نسخة مستقلة حقيقية، نستخدم النسخ السطحي (Shallow Copy عبر معامل الانتشار {...obj}) أو النسخ العميق (Deep Copy عبر structuredClone).",
      analogy: "تخيل أن لديك 'مفتاح شقة':\n- النسخ الخاطئ (b = a): يشبه أن تعطي صديقك 'نسخة ثانية من نفس مفتاح شقتك'! إذا دخل صديقك وقام بطلاء الجدران بالأصفر، ستدخل أنت وتتفاجأ بأن بيتك تلون بالأصفر رغماً عنك!\n- النسخ الحقيقي المستقل (Copy): يشبه أن تبني 'شقة جديدة مطابقة تماماً في عمارة مجاورة وتمنحه مفتاحها'؛ فإذا هدم بيته فلن يتأثر بيتك إطلاقاً!",
      why: "هذا هو المفهوم رقم #1 في كل فلسفة مكتبة React! إذا عدلت كائناً أو مصفوفة في الذاكرة مباشرة دون إنشاء نسخة جديدة (Immutable Update)، فلن تعرف مكتبة React أن البيانات تغيرت ولن تحدث الشاشة للمستخدم أبداً!",
      terms: [
        { term: "Reference", pronunciation: "ريفرينس", meaning: "العنوان المرجعي لموقع الصندوق في ذاكرة الـ Heap" },
        { term: "Spread Operator (...)", pronunciation: "سبريد أوبيراتور", meaning: "معامل الانتشار؛ لنسخ عناصر المصفوفة أو الكائن سطحياً بلمسة زر" },
        { term: "Shallow Copy", pronunciation: "شالو كوبي", meaning: "النسخ السطحي؛ ينسخ الطبقة الأولى فقط ولكنه يشترك في الكائنات المتداخلة" },
        { term: "Deep Copy", pronunciation: "ديب كوبي", meaning: "النسخ العميق الشامل لكل الطبقات المستقلة بـ structuredClone" },
        { term: "structuredClone()", pronunciation: "ستركشرد كلون", meaning: "الدالة القياسية الحديثة في المتصفحات لعمل نسخ عميق كامل ومستقل 100%" }
      ],
      syntax: "// 1. النسخ السطحي لمعامل الانتشار (الأشهر في React)\nconst newObj = { ...originalObj, newProp: 'قيمة' };\nconst newArr = [ ...originalArr, 'عنصر جديد' ];\n\n// 2. النسخ العميق المستقل تماماً\nconst deepCloned = structuredClone(originalObj);",
      simpleCode: `// التجربة الكارثية للنسخ الخاطئ المرجعي:
const originalUser = { name: "سالم", score: 50 };

// ❌ هذا ليس نسخاً بل توأم يمسك بنفس الصندوق!
const fakeCopy = originalUser;
fakeCopy.score = 100; // قمنا بتعديل النسخة فقط.. ولكن!
console.log("الأصل تأثر رغماً عنا وتغير:", originalUser.score); // يطبع: 100!

// ✓ الحل الصحيح بالنسخ السطحي عبر معامل الانتشار Spread (...):
const realCopy = { ...originalUser };
realCopy.score = 200; // تعديل النسخة الحقيقية المستقلة
console.log("الأصل محفوظ وسالم:", originalUser.score); // يظل: 100 كما هو ✓!
console.log("النسخة الجديدة المستقلة:", realCopy.score); // أصبحت: 200!`,
      advancedCode: `<!-- محاكي مرئي يثبت بالأدلة العملية الفرق بين النسخ المرجعي الفاسد والنسخ الحقيقي بـ Spread -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">معمل النسخ المستقل (Immutability Lab):</h4>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
    <!-- النسخ المرجعي -->
    <div style="background: #1e1b4b; border: 1px solid #ef4444; padding: 12px; border-radius: 8px;">
      <b style="color: #f87171; font-size: 12px;">❌ النسخ المرجعي (b = a)</b>
      <p style="font-size: 11px; color: #cbd5e1; margin: 6px 0 0 0; line-height: 1.5;">
        تعديل نسخة واحدة يفسد الأصل فوراً لأنها مجرد مؤشر لنفس المكان في الذاكرة!
      </p>
    </div>

    <!-- النسخ بـ Spread -->
    <div style="background: #064e3b; border: 1px solid #10b981; padding: 12px; border-radius: 8px;">
      <b style="color: #34d399; font-size: 12px;">✓ النسخ بـ Spread ({...a})</b>
      <p style="font-size: 11px; color: #cbd5e1; margin: 6px 0 0 0; line-height: 1.5;">
        ينشئ قالباً مستقلاً جديداً تماماً في الذاكرة دون المساس بالأصل؛ وهذا هو قلب React!
      </p>
    </div>
  </div>

  <div style="background: #020617; padding: 12px; border-radius: 8px; border: 1px dashed #334155; font-size: 12px; color: #a7f3d0; text-align: center;">
    📌 <b>قاعدة React الذهبية:</b> دائماً وأبداً: انسخ أولاً بـ <code>{...obj}</code> أو <code>[...arr]</code> ثم عدل على النسخة بحرية!
  </div>
</div>`,
      outputExplanation: "يشاهد المطور التجربة التي تحسم أهم مفهوم في جافاسكريبت: كيف أن علامة التساوي العادية تشترك في نفس مساحة الذاكرة، بينما يفتح معامل الانتشار (...) مساحة جديدة تماماً تضمن استقلال البيانات.",
      commonMistakes: [
        {
          wrong: "كتابة const updatedCart = cart; ثم updatedCart.push(newItem) في مشاريع React.",
          right: "كتابة const updatedCart = [...cart, newItem] لإنتاج مصفوفة جديدة مستقلة بالكامل.",
          reason: "النسخ الخاطئ المرجعي يمنع ميزة المقارنة السريعة في React فيظن المحرك أن شيئاً لم يتغير ولا يعيد رسم الواجهة!"
        }
      ],
      bestPractices: [
        "استخدم معامل الانتشار {...obj} للنسخ السطحي وتحديث الخصائص في سطر واحد: { ...user, age: 26 }.",
        "استخدم الدالة القياسية الحديثة structuredClone(complexData) إذا كان الكائن يحوي مستويات متداخلة عميقة وتريد نسخه بالكامل دون أي ارتباط."
      ],
      infographic: {
        badge: "سر أسرار React",
        title: "النسخ السطحي والعميق (Immutability)",
        icon: "CopyCheck",
        colors: "from-emerald-600 to-teal-500",
        steps: [
          { title: "الفخ المرجعي (b = a)", desc: "لا ينشئ نسخة بل يعطي مفتاحاً إضافياً لنفس الغرفة في الذاكرة" },
          { title: "معامل الانتشار {...obj}", desc: "سلاح المطور لنسخ الكائنات سطحياً وتحديثها بنظافة وأمان" },
          { title: "معامل مصفوفات [...arr]", desc: "صناعة مصفوفة جديدة وإضافة عناصر لها دون تعديل الأصل" },
          { title: "دالة structuredClone()", desc: "الحل المتكامل للنسخ العميق لجميع الطبقات المتداخلة في المتصفح" }
        ],
        summary: "النسخ المستقل وعدم تعديل الأصل هو القانون الأول الذي تقوم عليه كل شاشات ومكونات مكتبة React."
      }
    }
  ],
  quiz: [
    {
      question: "ما هي الدالة التي نستخدمها في JavaScript و React لتحويل مصفوفة بيانات إلى مصفوفة جديدة من عناصر الواجهة بنفس الطول؟",
      options: ["filter()", "map()", "splice()", "find()"],
      correctIndex: 1,
      explanation: "دالة map() هي الدالة الأساسية في React التي تمر على كل عنصر في المصفوفة وتحوله إلى مكون JSX أو شكل جديد مع الاحتفاظ بنفس العدد."
    },
    {
      question: "ما هو ناتج تنفيذ الكود التالي: const a = [1, 2]; const b = a; b.push(3); console.log(a.length); ؟",
      options: ["2", "3", "خطأ برمجياً Error", "undefined"],
      correctIndex: 1,
      explanation: "الناتج هو 3! لأن كتابة b = a لم تنشئ نسخة جديدة، بل جعلت b يشير لنفس المصفوفة a في الذاكرة، فتأثرت a بالإضافة فوراً."
    },
    {
      question: "كيف نصل إلى آخر عنصر في مصفوفة أسماء باستخدام الميزة الحديثة في JavaScript؟",
      options: ["names.last()", "names.at(-1)", "names[last]", "names.end()"],
      correctIndex: 1,
      explanation: "دالة names.at(-1) هي الإضافة القياسية الحديثة الأنيقة في JavaScript لجلب آخر عنصر في المصفوفة برقم سالب دون الحاجة لكتابة names.length - 1."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: إدارة وتصفية سلة مشتريات إلكترونية وحساب إجمالي الفاتورة",
    description: "لديك مصفوفة منتجات في سلة التسوق. اكتب كوداً يقوم بـ:\n1. تصفية المنتجات المتوفرة في المخزن فقط (inStock: true) باستخدام filter.\n2. حساب المجموع الكلي لأسعار المنتجات المتوفرة باستخدام دالة reduce.\n3. إنتاج مصفوفة جديدة بأسماء المنتجات المتوفرة فقط باستخدام map.",
    hints: [
      "استخدم products.filter(p => p.inStock) للمنتجات المتوفرة.",
      "استخدم availableProducts.reduce((sum, p) => sum + p.price, 0) لحساب المجموع.",
      "استخدم availableProducts.map(p => p.name) لاستخراج الأسماء فقط."
    ],
    solution: `// الحل النموذجي الشامل لتمرين سلة المشتريات مع تعليق على كل سطر:

// 1. مصفوفة المنتجات الأصلية القادمة من السيرفر
const cartItems = [
  { id: 1, name: "لابتوب مبرمج", price: 1000, inStock: true },
  { id: 2, name: "ماوس لاسلكي", price: 50, inStock: false }, // غير متوفر!
  { id: 3, name: "شاشة فائقة الدقة", price: 300, inStock: true },
  { id: 4, name: "لوحة مفاتيح ميكانيكية", price: 100, inStock: true }
];

// 2. تصفية المنتجات المتوفرة في المخزن فقط عبر filter
const availableItems = cartItems.filter(item => item.inStock === true);
console.log("المنتجات المتوفرة في المخزن (filter):", availableItems);

// 3. استخراج مصفوفة نظيفة بأسماء المنتجات المتوفرة فقط عبر map
const itemNames = availableItems.map(item => item.name);
console.log("قائمة الأسماء الجاهزة للعرض (map):", itemNames);

// 4. حساب المجموع الكلي الإجمالي للفاتورة عبر reduce
const finalTotal = availableItems.reduce((accumulator, item) => {
  return accumulator + item.price;
}, 0); // نبدأ الحصالة بـ 0

console.log("المجموع الإجمالي المطلوب دفعه (reduce):", finalTotal, "دولار"); // النتيجة: 1400$`
  },
  topicInfographic: {
    title: "خريطة المفاهيم: المصفوفات والكائنات في JavaScript",
    badge: "الموضوع 2.2",
    overview: "المصفوفات والكائنات هي أوعية الذاكرة الفائقة: من تنظيم القوائم بالفهارس، إلى دوال التحويل والتصفية map و filter و reduce، وانتهاءً بمبدأ عدم تعديل الأصل بالنسخ المستقل Spread.",
    pillars: [
      { name: "المصفوفات [ ]", desc: "ترقيم الفهارس من الصفر [0]، وخصائص length و at(-1)" },
      { name: "الثلاثي المقدس", desc: "map للتحويل في React، و filter للتصفية، و find للصيد المفرد" },
      { name: "الكائنات { }", desc: "أزواج المفاتيح والقيم Key: Value، وطرق النقطة . والأقواس [ ]" },
      { name: "النسخ السطحي {...}", desc: "عدم المساس بالأصل Immutability لحماية كود وحالة React" }
    ]
  }
};
