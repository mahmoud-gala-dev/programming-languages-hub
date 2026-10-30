// src/data/sections/section3/topic1.js
// الموضوع 1: ميزات ES6 وما بعدها (Modern ES6+ Features)

export const SECTION_3_TOPIC_1 = {
  id: "3.1",
  title: "ميزات ES6 وما بعدها",
  englishTitle: "ES6+ Modern Features",
  description: "الميزات الثورية التي نقلت JavaScript إلى العصر الحديث وتعتبر لغة التخاطب اليومية داخل مكتبة React: الدوال السهمية، التفكيك Destructuring، معاملي Spread و Rest، والوحدات البرمجية ES Modules.",
  icon: "Zap",
  subtopics: [
    {
      id: "3.1.a",
      title: "الدوال السهمية Arrow Functions",
      englishTitle: "Arrow Functions: Syntax & Lexical this",
      definition: "الدالة السهمية هي طريقة كتابة حديثة ومختصرة لتعريف الدوال في JavaScript باستخدام السهم (=>). بالإضافة إلى اختصار الكود، تتميز بأنها ترث قيمة كلمة this تلقائياً من المحيط الذي كُتبت فيه (Lexical Scope) بدلاً من إنشاء this خاصة بها.",
      analogy: "تخيل أن لديك 'جهاز تحكم عن بُعد ذكي ومضغوط' يحتوي على زر واحد أساسي ينجز المهمة مباشرة دون الحاجة لشراء جهاز قديم ضخم مليء بالأزرار المعقدة والأسلاك المتشابكة.",
      why: "قبل ES6، كانت كتابة الدوال التقليدية بكلمة function تسبب إرباكاً شديداً مع كلمة this خاصة داخل مؤقتات setTimeout وأحداث React، كما أنها كانت تتطلب أسطر كود كثيرة لأبسط العمليات الحسابية.",
      terms: [
        { term: "Arrow Function", pronunciation: "آرو فانكشن", meaning: "دالة سهمية حديثة ومختصرة" },
        { term: "Fat Arrow (=>)", pronunciation: "فات آرو", meaning: "رمز السهم الذي يفصل المعاملات عن جسم الدالة" },
        { term: "Implicit Return", pronunciation: "إمبليست ريتيرن", meaning: "الإرجاع الضمني للقيمة دون كتابة كلمة return" },
        { term: "Lexical this", pronunciation: "ليكسيكال ذيس", meaning: "وراثة سياق this من النطاق الخارجي الحاضن" }
      ],
      syntax: "// الدالة السهمية الكاملة مع أقواس\nconst add = (a, b) => {\n  return a + b;\n};\n\n// الإرجاع الضمني في سطر واحد دون أقواس معقوفة ولا كلمة return\nconst multiply = (x, y) => x * y;",
      codeSimple: `// تعريف دالة سهمية لحساب مربع الرقم مع إرجاع ضمني
const square = (n) => n * n;

// استدعاء الدالة السهمية وتخزين الناتج
const result = square(5);

// طباعة النتيجة في وحدة التحكم
console.log('مربع الرقم 5 هو:', result);`,
      codeAdvanced: `// مصفوفة من المنتجات في متجر إلكتروني
const products = [
  { id: 1, name: 'حاسوب محمول', price: 1200 },
  { id: 2, name: 'سماعات لاسلكية', price: 150 },
  { id: 3, name: 'فأرة مريحة', price: 50 }
];

// دالة سهمية متعددة الخطوات لتطبيق خصم وحساب الضريبة
const calculateFinalPrices = (items, discountPercent) => 
  items.map(item => ({
    // الاحتفاظ بمعرف المنتج واسمه
    id: item.id,
    name: item.name,
    // حساب السعر النهائي بعد الخصم وإضافة 15% ضريبة
    finalPrice: Math.round(item.price * (1 - discountPercent / 100) * 1.15)
  }));

// تنفيذ الدالة بخصم 10%
const discountedList = calculateFinalPrices(products, 10);

// طباعة النتيجة
console.log('الأسعار النهائية بعد الخصم والضريبة:', discountedList);`,
      output: `مربع الرقم 5 هو: 25\nالأسعار النهائية بعد الخصم والضريبة: [\n  { id: 1, name: 'حاسوب محمول', finalPrice: 1242 },\n  { id: 2, name: 'سماعات لاسلكية', finalPrice: 155 },\n  { id: 3, name: 'فأرة مريحة', finalPrice: 52 }\n]`,
      mistakes: [
        {
          wrong: `// خطأ شائع: محاولة إرجاع كائن مباشرة في سطر واحد دون أقواس دائرية\nconst makeUser = (name) => { name: name }; // يعتقد المتصفح أن الأقواس المعقوفة هي جسم الدالة وليست كائناً!`,
          correct: `// التصحيح: تغليف الكائن بأقواس دائرية () لتمييزه كقيمة معادة\nconst makeUser = (name) => ({ name: name });`,
          explanation: "عند استخدام الإرجاع الضمني لكائن في سطر واحد، يعتبر محرك JavaScript الأقواس المعقوفة {} بداية ونهاية لجسم الدالة (Block) وليس كائناً، والحل هو إحاطتها بأقواس () كـ ({ key: value })."
        }
      ],
      bestPractices: [
        "استخدم الإرجاع الضمني في سطر واحد فقط عندما تكون العملية شديدة الوضوح والبساطة.",
        "عند كتابة دالة سهمية تعيد كائناً كـ JSX أو Object، غلف الكائن بأقواس دائرية مثل ({ id, title }).",
        "تذكر أن الدوال السهمية لا تملك كائن arguments خاصاً بها؛ بل استخدم معامل Rest (...) بدلاً منه."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح الدالة السهمية في JavaScript الحديثة",
        concept: "Arrow Functions Syntax & Returns",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│              تشريح الدالة السهمية (Arrow Function)          │
└─────────────────────────────────────────────────────────────┘
  ( المعاملات )    =>    { جسم الدالة أو التعبير المعاد }
       │           │                    │
   Parameters    السهم            Function Body
 
  حالات الاختصار الذكية:
  1. معامل واحد فقط:         x => x * 2          (بدون أقواس للمعامل)
  2. إرجاع فوري ضمني:        (a, b) => a + b     (بدون return ولا أقواس)
  3. إرجاع كائن فوري:        name => ({ name })  (أقواس دائرية إجبارية)`
      }
    },
    {
      id: "3.1.b",
      title: "القوالب النصية Template Literals",
      englishTitle: "Template Literals: Backticks & String Interpolation",
      definition: "القوالب النصية هي طريقة ذكية لكتابة النصوص باستخدام علامة الفاصلة المائلة العكسية (Backtick: \`\`) بدلاً من علامات التنصيص التقليدية. تسمح بدمج المتغيرات والتعبيرات البرمجية مباشرة داخل النص باستخدام ${expression}، وتدعم النصوص متعددة الأسطر تلقائياً.",
      analogy: "تخيل نموذج شهادة تقدير مطبوع مسبقاً وفيه فراغات مخصصة لكتابة اسم الطالب وتاريخ اليوم؛ بمجرد ملء الفراغات تصبح الشهادة مكتملة، دون الحاجة لتقطيع الورق ولصقه بجانب بعضه بغراء!",
      why: "قديماً، كان دمج النصوص والمتغيرات يتطلب استخدام علامة الزائد (+) المتكررة مثل: 'مرحباً ' + name + '، رصيدك هو ' + balance + ' ريال'. كان الكود عرضة لأخطاء المسافات وصعب القراءة والصيانة.",
      terms: [
        { term: "Template Literal", pronunciation: "تمبليت لترال", meaning: "قالب نصي ذكي باستخدام علامة الـ Backtick" },
        { term: "Backtick (\`)", pronunciation: "باك تيك", meaning: "علامة التنصيص المائلة العكسية الموجودة فوق زر Tab" },
        { term: "String Interpolation", pronunciation: "سترينغ إنتربوليشن", meaning: "إقحام ودمج المتغيرات مباشرة داخل النص بـ ${}" },
        { term: "Multiline String", pronunciation: "ملتي لاين سترينغ", meaning: "نص ممتد عبر أسطر متعددة دون الحاجة لـ \\n" }
      ],
      syntax: "const greeting = `مرحباً يا ${userName}! رصيدك الحالي: ${balance + 10} $`;\n\nconst multiLine = `\n  سطر أول\n  سطر ثاني\n  سطر ثالث\n`;",
      codeSimple: `// تعريف اسم المستخدم ونقاطه
const userName = 'سارة';
const points = 120;

// بناء رسالة ترحيبية بالقالب النصي
const message = \`أهلاً بك يا \${userName}، مجموع نقاطك الحالية هو \${points * 2} نقطة مضاعفة!\`;

// طباعة الرسالة
console.log(message);`,
      codeAdvanced: `// بيانات مقال إخباري
const article = {
  title: 'إطلاق الإصدار الجديد من React 19',
  author: 'فريق التطوير',
  readTimeMinutes: 5,
  tags: ['React', 'JavaScript', 'Frontend']
};

// إنشاء كود HTML كامل متعدد الأسطر مع تعبيرات شرطية بداخله
const articleCardHtml = \`
  <div class="article-card">
    <h2>\${article.title}</h2>
    <p class="meta">
      بقلم: \${article.author} | وقت القراءة: \${article.readTimeMinutes} دقائق
    </p>
    <div class="tags">
      \${article.tags.map(tag => \`<span class="badge">#\${tag}</span>\`).join(' ')}
    </div>
    <div class="status">
      \${article.readTimeMinutes < 10 ? '⚡ قراءة سريعة' : '📖 مقال متعمق'}
    </div>
  </div>
\`;

// طباعة قالب الـ HTML الناتج
console.log(articleCardHtml);`,
      output: `أهلاً بك يا سارة، مجموع نقاطك الحالية هو 240 نقطة مضاعفة!\n\n  <div class="article-card">\n    <h2>إطلاق الإصدار الجديد من React 19</h2>\n    <p class="meta">\n      بقلم: فريق التطوير | وقت القراءة: 5 دقائق\n    </p>\n    <div class="tags">\n      <span class="badge">#React</span> <span class="badge">#JavaScript</span> <span class="badge">#Frontend</span>\n    </div>\n    <div class="status">\n      ⚡ قراءة سريعة\n    </div>\n  </div>`,
      mistakes: [
        {
          wrong: `// استخدام علامة التنصيص المفردة العادية بدلاً من الباك تيك\nconst name = 'علي';\nconst msg = 'مرحباً \${name}'; // ❌ ستطبع النص الحرفي '\${name}' دون تعويض!`,
          correct: `// استخدام علامة الـ Backtick الصحيحة (\`)\nconst name = 'علي';\nconst msg = \`مرحباً \${name}\`; // ✅ ستطبع: مرحباً علي`,
          explanation: "الدمج بـ ${} لا يعمل إطلاقاً مع علامات التنصيص الفردية (' ') أو المزدوجة (\" \")؛ بل يحتاج حصرياً إلى علامة الـ Backtick (\`)."
        }
      ],
      bestPractices: [
        "استخدم القوالب النصية دائماً عند بناء عناوين الـ URL الديناميكية للـ APIs (مثل: `/api/users/${id}`).",
        "يمكنك وضع أي تعبير JavaScript صالح داخل ${}، بما في ذلك استدعاء الدوال والمعامل الثلاثي.",
        "تجنب وضع منطق معقد جداً داخل ${}؛ إذا كان التعبير طويلاً فاحسبه في متغير خارجي أولاً لتسهيل القراءة."
      ],
      infographic: {
        title: "إنفوجرافيك: قوة القوالب النصية في JavaScript",
        concept: "Template Literals & String Interpolation",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│           القوالب النصية الحديثة (Template Literals)         │
└─────────────────────────────────────────────────────────────┘
  \` نص يبدأ بالباك تيك \${ متغير أو تعبير برمجى } وباقي النص \`
                           │
       يمكن وضع أي كود JavaScript حي هنا:
       • متغيرات عادية:        \${user.name}
       • عمليات حسابية:        \${price * 1.15}
       • دوال وشرطيات:         \${isPro ? 'مشترك مميز' : 'مجاني'}
       • نصوص متعددة الأسطر:   تدعم النزول لسطر جديد دون \\n`
      }
    },
    {
      id: "3.1.c",
      title: "تفكيك المصفوفات والكائنات Destructuring",
      englishTitle: "Destructuring Assignment (Objects & Arrays)",
      definition: "التفكيك (Destructuring) هو صياغة برمجية تسمح لك باستخراج وتفريغ قيم محددة من داخل كائن أو عناصر من داخل مصفوفة، وتخزينها مباشرة في متغيرات مستقلة بسطر كود واحد أنيق.",
      analogy: "تخيل أنك استلمت طرداً بريدياً يحتوي على (هاتف، شاحن، وسماعة). التفكيك يعني أن تفتح الصندوق وتضع الهاتف في جيبك والشاحن على مكتبك والسماعة في حقيبتك دفعة واحدة دون الحاجة للقول في كل مرة: 'هات الطرد، افتحه، خذ الهاتف، ثم هات الطرد مرة أخرى...'.",
      why: "في React، نستخدم التفكيك مئات المرات يومياً! كل المكونات تستقبل خصائصها (Props) ككائن، ودوال الحالة (مثل useState) تعيد مصفوفة من قيمتين. بدون التفكيك، سيكون كودك مليئاً بتكرارات مملة مثل props.title و props.user و props.onClick.",
      terms: [
        { term: "Destructuring", pronunciation: "ديستركتشرينغ", meaning: "تفكيك وتفريغ البيانات إلى متغيرات منفصلة" },
        { term: "Object Destructuring", pronunciation: "أوبجكت ديستركتشرينغ", meaning: "استخراج الخصائص من الكائنات بمطابقة أسمائها" },
        { term: "Array Destructuring", pronunciation: "أراي ديستركتشرينغ", meaning: "استخراج العناصر من المصفوفات وفق ترتيب مواقعها" },
        { term: "Default Value in Destructuring", pronunciation: "ديفولت فاليو", meaning: "قيمة افتراضية في حال كانت الخاصية غير موجودة" },
        { term: "Renaming / Aliasing", pronunciation: "رينيمنغ", meaning: "تغيير اسم المتغير المستخرج أثناء عملية التفكيك" }
      ],
      syntax: "// تفكيك الكائنات (بالمطابقة حسب اسم الخاصية)\nconst { name, age, role = 'زائر' } = user;\n\n// تفكيك المصفوفات (بالمطابقة حسب الترتيب)\nconst [firstColor, secondColor] = colors;\n\n// تغيير اسم المتغير أثناء التفكيك\nconst { title: postTitle } = article;",
      codeSimple: `// كائن يمثل بيانات مستخدم
const member = {
  fullName: 'طارق خالد',
  age: 28,
  city: 'الرياض'
};

// تفكيك الكائن واستخراج الاسم والمدينة وتعيين قيمة افتراضية للوظيفة
const { fullName, city, job = 'مطور برمجيات' } = member;

// طباعة المتغيرات المستقلة
console.log('الاسم:', fullName);
console.log('المدينة:', city);
console.log('الوظيفة:', job);`,
      codeAdvanced: `// محاكاة لدالة React useState الشهيرة عبر تفكيك المصفوفات
function mockUseState(initialValue) {
  let state = initialValue;
  const setState = (newValue) => {
    state = newValue;
    console.log('تم تحديث الحالة إلى:', state);
  };
  return [state, setState];
}

// استخدام تفكيك المصفوفة للحصول على القيمة ودالة التحديث
const [count, setCount] = mockUseState(10);
console.log('القيمة الأولية للعداد:', count);
setCount(11);

// تفكيك متقدم لكائن متداخل مع إعادة تسمية
const apiResponse = {
  data: {
    user: { id: 101, username: 'dev_alex' },
    status: 200
  }
};

const {
  data: {
    user: { username: accountHandle }
  }
} = apiResponse;

console.log('اسم الحساب المستخرج:', accountHandle);`,
      output: `الاسم: طارق خالد\nالمدينة: الرياض\nالوظيفة: مطور برمجيات\nالقيمة الأولية للعداد: 10\nتم تحديث الحالة إلى: 11\nاسم الحساب المستخرج: dev_alex`,
      mistakes: [
        {
          wrong: `// محاولة تفكيك كائن بأقواس مصفوفة\nconst user = { name: 'عمر', age: 30 };\nconst [name, age] = user; // ❌ خطأ: user is not iterable!`,
          correct: `// تفكيك الكائنات يستخدم دائماً الأقواس المعقوفة {}\nconst user = { name: 'عمر', age: 30 };\nconst { name, age } = user; // ✅ سليم تماماً`,
          explanation: "تفكيك الكائنات يتطلب أقواس {} وأسماء تطابق الخصائص، بينما تفكيك المصفوفات يتطلب أقواس [] ويعتمد على الترتيب."
        }
      ],
      bestPractices: [
        "فكك معلمات دوال مكونات React مباشرة في سطر التعريف: `function Button({ text, onClick })`.",
        "حدد قيماً افتراضية للخصائص الاختيارية لتفادي أخطاء undefined غير المتوقعة.",
        "تجنب التفكيك المتداخل شديد العمق (أكثر من مستويين) لأنه يجعل الكود صعب الفهم ويصعب اكتشاف مسارات الخصائص المفقودة."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة تفكيك الكائنات وتفكيك المصفوفات",
        concept: "Object vs Array Destructuring",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│          تفكيك الكائنات (Object) مقابل المصفوفات (Array)     │
└─────────────────────────────────────────────────────────────┘
  تفكيك الكائنات (بالأقواس المعقوفة {}):
  const { title, price } = course;
  • يعتمد على: تطابق أسماء الخصائص (الترتيب لا يهم إطلاقاً)
  • تغيير الاسم: { title: courseTitle }
  
  تفكيك المصفوفات (بالأقواس المربعة []):
  const [value, setValue] = useState(0);
  • يعتمد على: الترتيب وموقع العنصر في المصفوفة (أنت من تختار الاسم)
  • تجاهل عنصر: const [first, , third] = list;`
      }
    },
    {
      id: "3.1.d",
      title: "معامل الانتشار Spread",
      englishTitle: "Spread Operator (...)",
      definition: "معامل الانتشار (Spread Operator) والممثل بثلاث نقاط متتالية (...)، يقوم بنشر وبسط وفك عناصر مصفوفة أو خصائص كائن وتفريغها فرداً فرداً داخل مصفوفة جديدة أو كائن جديد أو كمعاملات لدالة.",
      analogy: "تخيل أن لديك علبة شوكولاتة مغلقة. معامل الانتشار هو كأنك قلبت العلبة على الطاولة ونثرت كل قطع الشوكولاتة بشكل حر حتى تتمكن من وضعها في صينية ضيافة جديدة إلى جانب حلويات أخرى.",
      why: "هو السلاح رقم واحد لتحقيق مبدأ عدم التعديل المباشر (Immutability) في React! عندما نريد إضافة عنصر لمصفوفة أو تعديل خاصية في كائن حالة (State)، نستخدم (...) لإنشاء نسخة جديدة معدلة دون تخريب الأصل.",
      terms: [
        { term: "Spread Operator", pronunciation: "سبريد أوبيريتور", meaning: "معامل الانتشار والنشر الممثل بـ (...)" },
        { term: "Shallow Copy", pronunciation: "شالو كوبي", meaning: "نسخ سطحي للمستوى الأول من البيانات" },
        { term: "Object Merge", pronunciation: "أوبجكت ميرج", meaning: "دمج كائنين أو أكثر في كائن واحد" },
        { term: "Immutability", pronunciation: "إيميُوتابيلتي", meaning: "عدم التعديل المباشر على البيانات الأصلية" }
      ],
      syntax: "// نسخ ودمج المصفوفات\nconst newArr = [...oldArr, newItem];\n\n// نسخ وتعديل الكائنات\nconst updatedObj = { ...oldObj, status: 'نشط' };",
      codeSimple: `// مصفوفة أرقام أصلية
const numbers = [1, 2, 3];

// إنشاء مصفوفة جديدة تحتوي على أرقام إضافية دون تعديل الأصل
const expandedNumbers = [0, ...numbers, 4, 5];

// كائن مستخدم أصلي
const profile = { name: 'يوسف', theme: 'light' };

// إنشاء كائن جديد بنسخ الأصلي وتعديل خاصية الثيم
const updatedProfile = { ...profile, theme: 'dark' };

console.log('المصفوفة المنشورة:', expandedNumbers);
console.log('الملف المعدل:', updatedProfile);`,
      codeAdvanced: `// محاكاة لتحديث حالة عربة تسوق معقدة في React
const initialCart = {
  items: [
    { id: 1, name: 'لوحة مفاتيح ميكانيكية', price: 80, qty: 1 }
  ],
  coupon: null,
  isPaid: false
};

// منتج جديد يريد المستخدم إضافته للسلة
const newItem = { id: 2, name: 'شاشة حاسوب 4K', price: 400, qty: 1 };

// تحديث حالة السلة بأسلوب غير مدمر باستخدام Spread مرتين
const updatedCart = {
  // 1. نسخ كافة خصائص السلة القديمة
  ...initialCart,
  // 2. تحديث مصفوفة العناصر بنسخ القديم وإضافة الجديد
  items: [...initialCart.items, newItem],
  // 3. إضافة كوبون خصم
  coupon: 'DISCOUNT10'
};

console.log('السلة الأصلية بقيت سالمة:', initialCart.items.length);
console.log('السلة الجديدة تم تحديثها بأمان:', updatedCart.items.length);`,
      output: `المصفوفة المنشورة: [ 0, 1, 2, 3, 4, 5 ]\nالملف المعدل: { name: 'يوسف', theme: 'dark' }\nالسلة الأصلية بقيت سالمة: 1\nالسلة الجديدة تم تحديثها بأمان: 2`,
      mistakes: [
        {
          wrong: `// وضع المعامل في المكان الخطأ عند تعديل الخاصية\nconst user = { name: 'فهد', role: 'admin' };\nconst updated = { role: 'user', ...user }; // ❌ ستظل role تساوي admin لأن spread نسخت القديم بعدها!`,
          correct: `// وضع التعديل بعد معامل الانتشار لتجاوز القيمة السابقة\nconst user = { name: 'فهد', role: 'admin' };\nconst updated = { ...user, role: 'user' }; // ✅ تم تعديل role بنجاح`,
          explanation: "ترتيب الخصائص داخل الكائن مهم جداً؛ فالخاصية المكتوبة لاحقاً تلغي وتستبدل أي خاصية تحمل نفس الاسم قبلها."
        }
      ],
      bestPractices: [
        "ضع دائماً {...oldState} أولاً ثم ضع الخصائص الجديدة أو المعدلة بعدها ليتم تجاوزها بنجاح.",
        "تذكر أن Spread يقوم بنسخ سطحي فقط (Shallow Copy)؛ الكائنات المتداخلة بداخله ستظل تشير لنفس العنوان في الذاكرة.",
        "استخدم Spread لتمرير كافة خصائص الكائن كمكونات في React: `<UserProfile {...userData} />`."
      ],
      infographic: {
        title: "إنفوجرافيك: سحر معامل الانتشار Spread في React",
        concept: "Spread Operator in Action",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 معامل الانتشار Spread Operator (...)        │
└─────────────────────────────────────────────────────────────┘
  المصفوفات:  [ ...قديم, عنصر جديد ]  ──>  إضافة عنصر بأمان تام
  الكائنات:   { ...قديم, مفتاح: قيمة } ──>  تعديل خاصية دون مساس بالأصل

  لماذا الترتيب حاسم داخل الكائنات؟
  { role: 'user', ...user }  ──>  user الأصلي يغلب ويلغي 'user'!
  { ...user, role: 'user' }  ──>  ✅ القيمة الجديدة تلغي ما قبلها`
      }
    },
    {
      id: "3.1.e",
      title: "معامل Rest",
      englishTitle: "Rest Parameter (...): Gathering Remaining Arguments",
      definition: "معامل البواقي (Rest Parameter) يستخدم نفس رمز النقاط الثلاث (...) لكن في موضع مختلف: يوضع في نهاية معلمات الدالة ليجمع كل الوسائط المتبقية التي مررها المستخدم ويضعها في مصفوفة حقيقية واحدة.",
      analogy: "تخيل مدرب كرة قدم يختار التشكيلة: 'أنت يا أحمد حارس مرمى، وأنت يا كريم رأس حربة، وباقي الفريق (...) اجلسوا على مقاعد البدلاء كفريق احتياط'. معامل Rest هو ذلك المقعد الذي يجمع كل البقية في مصفوفة واحدة.",
      why: "يحل مشكلة الدوال المرنة التي لا تعرف كم عدد المعاملات التي قد يرسلها المستخدم مسبقاً (مثل دالة حساب المجموع، أو دالة دمج النصوص)، ويستبدل كائن arguments القديم بمصفوفة JavaScript نقية تدعم دوال map و filter و reduce فوراً.",
      terms: [
        { term: "Rest Parameter", pronunciation: "ريست باراميتر", meaning: "معامل تجميع المعاملات المتبقية في مصفوفة" },
        { term: "Gathering", pronunciation: "جاذرينغ", meaning: "تجميع العناصر المتفرقة" },
        { term: "Variadic Function", pronunciation: "فارياديك فانكشن", meaning: "دالة تقبل عدداً غير محدد من المعاملات" }
      ],
      syntax: "// يجب أن يكون معامل Rest هو الأخير دائماً في قائمة المعاملات\nfunction myFunc(first, second, ...theRest) {\n  console.log(theRest); // مصفوفة حقيقية بالبقية\n}",
      codeSimple: `// دالة تجمع أي عدد من الأرقام يمرره المستخدم
function sumNumbers(...nums) {
  // معامل nums هنا هو مصفوفة كاملة تقبل reduce
  return nums.reduce((total, n) => total + n, 0);
}

// استدعاء الدالة بعدد معاملات مختلف في كل مرة
console.log('مجموع رقمين:', sumNumbers(10, 20));
console.log('مجموع أربعة أرقام:', sumNumbers(5, 15, 25, 35));`,
      codeAdvanced: `// نمط شهير جداً في React: تفكيك مكون وتمرير البقية لزر HTML
function renderCustomButton(label, variant, ...htmlProps) {
  console.log('عنوان الزر المستخرج:', label);
  console.log('نوع التصميم المستخرج:', variant);
  console.log('باقي خصائص الـ HTML المتبقية:', htmlProps);
}

// استدعاء مع خصائص متنوعة
renderCustomButton('تسجيل الدخول', 'primary', { id: 'btn-login', disabled: true, title: 'انقر هنا' });

// استخدام Rest أثناء تفكيك الكائنات
const serverResponse = {
  id: 88,
  token: 'xyz_secret_99',
  name: 'حمزة',
  email: 'hamza@domain.com'
};

// عزل التوكن الحساس واستخراج بقية البيانات العامة في كائن مستقل
const { token, ...publicProfile } = serverResponse;
console.log('الملف العام بعد إخفاء التوكن الحساس:', publicProfile);`,
      output: `مجموع رقمين: 30\nمجموع أربعة أرقام: 80\nعنوان الزر المستخرج: تسجيل الدخول\nنوع التصميم المستخرج: primary\nباقي خصائص الـ HTML المتبقية: [ { id: 'btn-login', disabled: true, title: 'انقر هنا' } ]\nالملف العام بعد إخفاء التوكن الحساس: { id: 88, name: 'حمزة', email: 'hamza@domain.com' }`,
      mistakes: [
        {
          wrong: `// وضع معامل Rest في البداية أو في الوسط\nfunction saveUser(...rest, role) { // ❌ خطأ فادح: Rest parameter must be last! \n  // كود...\n}`,
          correct: `// جعل معامل Rest دائماً هو العنصر الأخير في قائمة المعاملات\nfunction saveUser(role, ...rest) {\n  // ✅ سليم تماماً\n}`,
          explanation: "محرك JavaScript يحتاج لتوزيع المعاملات المحددة أولاً، ثم يجمع كل ما تبقى بعد ذلك في معامل Rest؛ لذا لا يمكن أن يأتي أي معامل بعده إطلاقاً."
        }
      ],
      bestPractices: [
        "استخدم Rest في تفكيك الكائنات لاستبعاد الحقول الحساسة (مثل كلمات المرور والتوكنز) قبل مشاركة البيانات.",
        "في مكونات React، استخدم Rest لجمع بقية الـ Props وتمريرها للعنصر الجذري: `const { title, ...rest } = props`.",
        "تذكر الفرق الذهني: Spread ينثر العناصر ويوزعها، بينما Rest يجمع العناصر المتفرقة في مصفوفة واحدة."
      ],
      infographic: {
        title: "إنفوجرافيك: الفرق بين Spread و Rest في JavaScript",
        concept: "Spread (Scatter) vs Rest (Gather)",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│              معامل الانتشار (Spread) مقابل معامل البواقي (Rest)│
└─────────────────────────────────────────────────────────────┘
  نفس الرمز (...) ولكن المهمة معاكسة تماماً:

  معامل الانتشار (Spread): ينثر ويبسط
  • المكان: عند بناء مصفوفة جديدة، كائن جديد، أو استدعاء دالة.
  • الحركة: [ 1, ...[2, 3], 4 ]  ──>  تفكيك إلى 1, 2, 3, 4

  معامل البواقي (Rest): يجمع ويحزم
  • المكان: في تعريف معاملات الدالة أو تفكيك الكائنات والمصفوفات.
  • الحركة: function(a, ...others)  ──>  جمع الباقي في مصفوفة واحدة`
      }
    },
    {
      id: "3.1.f",
      title: "المعاملات الافتراضية Default Parameters",
      englishTitle: "Default Parameters: Fallbacks for Missing Arguments",
      definition: "المعاملات الافتراضية تسمح لك بتهيئة معاملات الدالة بقيم احتياطية محددة مسبقاً إذا لم يقم المستدعي بتمرير قيمة لها، أو إذا مرر القيمة undefined صراحة.",
      analogy: "تخيل أنك تطلب وجبة برجر من المطعم؛ إذا لم تحدد نوع المشروب الذي تريده، فإن المطعم يقدم لك 'ماء' كخيار افتراضي تلقائي، بينما لو طلبت 'عصير برتقال' فسيعطيك اختيارك المحدد بدلاً من الافتراضي.",
      why: "قديماً، كان المبرمج يضطر لكتابة شروط مملة داخل كل دالة مثل `name = name || 'زائر'`، وكانت هذه الطريقة تفشل إذا كانت القيمة الممررة رقماً صفراً (0) أو نصاً فارغاً ('') لأنها تعتبر Falsy. المعاملات الافتراضية الحديثة في ES6 حلت المشكلة تماماً وبأناقة.",
      terms: [
        { term: "Default Parameter", pronunciation: "ديفولت باراميتر", meaning: "قيمة احتياطية افتراضية لمعامل الدالة" },
        { term: "Fallback", pronunciation: "فول باك", meaning: "خيار بديل يُلجأ إليه عند غياب القيمة الأساسية" },
        { term: "Undefined", pronunciation: "أن ديفايند", meaning: "القيمة الوحيدة التي تؤدي لتفعيل القيمة الافتراضية" }
      ],
      syntax: "function greet(name = 'صديقي العزيز', role = 'زائر') {\n  return `مرحباً يا ${name}، صفتك: ${role}`;\n}",
      codeSimple: `// دالة لحساب سعر الفاتورة مع ضريبة افتراضية بنسبة 15%
function calculateTotal(subtotal, taxRate = 0.15) {
  // حساب المجموع مع الضريبة
  return subtotal + (subtotal * taxRate);
}

// استدعاء بدون تحديد الضريبة (تطبق 15% تلقائياً)
console.log('الفاتورة بالضريبة الافتراضية:', calculateTotal(100));

// استدعاء مع تحديد ضريبة مخفضة 5%
console.log('الفاتورة بالضريبة المخصصة:', calculateTotal(100, 0.05));`,
      codeAdvanced: `// دالة لإرسال إشعارات النظام مع إعدادات افتراضية متقدمة
function pushNotification(message, options = {}) {
  // استخدام التفكيك مع قيم افتراضية داخلية وخارجية
  const {
    type = 'info',
    durationMs = 3000,
    showCloseBtn = true
  } = options;

  console.log('--- إرسال إشعار جديد ---');
  console.log('الرسالة:', message);
  console.log('النوع:', type);
  console.log('مدة الظهور بالمللي ثانية:', durationMs);
  console.log('زر الإغلاق مفعل:', showCloseBtn);
}

// اختبار بإرسال نص فقط (تُستخدم كل الخيارات الافتراضية)
pushNotification('تم حفظ التعديلات بنجاح!');

// اختبار بتخصيص نوع الإشعار فقط
pushNotification('انتبه! وشك الرصيد على النفاد', { type: 'warning', durationMs: 6000 });`,
      output: `الفاتورة بالضريبة الافتراضية: 115\nالفاتورة بالضريبة المخصصة: 105\n--- إرسال إشعار جديد ---\nالرسالة: تم حفظ التعديلات بنجاح!\nالنوع: info\nمدة الظهور بالمللي ثانية: 3000\nزر الإغلاق مفعل: true\n--- إرسال إشعار جديد ---\nالرسالة: انتبه! وشك الرصيد على النفاد\nالنوع: warning\nمدة الظهور بالمللي ثانية: 6000\nزر الإغلاق مفعل: true`,
      mistakes: [
        {
          wrong: `// وضع المعامل الافتراضي في أول الدالة وترك معامل إلزامي بعده\nfunction sendEmail(subject = 'تنبيه', userEmail) {\n  // كود...\n}\nsendEmail('user@test.com'); // ❌ ستعتبر الإيميل هو الـ subject ويظل userEmail هو undefined!`,
          correct: `// وضع المعاملات ذات القيم الافتراضية في نهاية قائمة المعاملات\nfunction sendEmail(userEmail, subject = 'تنبيه') {\n  // ✅ سليم: الإيميل هو الأول دائماً والموضوع اختياري\n}`,
          explanation: "المعاملات تُملأ بالترتيب من اليسار إلى اليمين؛ إذا وضعت المعامل الافتراضي أولاً فلن يتمكن المستدعي من الاستفادة منه إلا بتمرير undefined صراحة."
        }
      ],
      bestPractices: [
        "ضع المعاملات الإلزامية أولاً والمعاملات ذات القيم الافتراضية في النهاية دائماً.",
        "في مكونات React، استخدم القيم الافتراضية عند تفكيك الـ Props: `function Badge({ count = 0, variant = 'primary' })`.",
        "يمكن للقيمة الافتراضية أن تكون ناتجة عن استدعاء دالة أخرى أو عملية حسابية؛ فهي تحسب عند وقت التشغيل فقط."
      ],
      infographic: {
        title: "إنفوجرافيك: آلية عمل المعاملات الافتراضية",
        concept: "Default Parameters Execution Flow",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│              آلية عمل المعاملات الافتراضية (Default Params) │
└─────────────────────────────────────────────────────────────┘
  استدعاء الدالة:  fn(arg)
                     │
       هل القيمة الممررة undefined؟
           ├─── نعم ───> تفعيل القيمة الافتراضية (Fallback Value)
           └─── لا  ───> استخدام القيمة التي أرسلها المستخدم كما هي!
  
  تنبيه هام:
  null أو 0 أو false أو ""  ──>  تعتبر قيماً حقيقية ولا تُفعل القيمة الافتراضية!`
      }
    },
    {
      id: "3.1.g",
      title: "Optional Chaining (?.)",
      englishTitle: "Optional Chaining: Safe Property Navigation (?.)",
      definition: "معامل التسلسل الاختياري (Optional Chaining: ?.) يسمح لك بقراءة قيم الخصائص العميقة داخل الكائنات أو استدعاء الدوال دون التسبب في خطأ فادح يوقف البرنامج إذا كانت إحدى الخصائص في المسار تساوي null أو undefined؛ بل يعيد undefined بأمان.",
      analogy: "تخيل أنك تبحث عن كتاب في مكتبة صديقك: في الطريقة القديمة إذا كانت الخزانة مقفلة واقتحمتها بالقوة تكسر الباب وتحدث ضجة هائلة (خطأ يوقف التطبيق). في الطريقة الذكية (?.) تنظر أولاً: إذا كانت الخزانة غير موجودة من الأساس تبتسم وتعود بهدوء دون أن تكسر شيئاً.",
      why: "هو الحل النهائي لأشهر وأسوأ خطأ عرفه تاريخ JavaScript: `TypeError: Cannot read properties of undefined (reading 'name')`. في تطبيقات الويب نتلقى بيانات من السيرفر (APIs) قد لا تحتوي على بعض الخصائص، وبدونه كنا نكتب شروطاً معقدة مثل `user && user.address && user.address.city`.",
      terms: [
        { term: "Optional Chaining", pronunciation: "أوبشونال تشينينغ", meaning: "معامل التحقق الاختياري المتسلسل (?.)" },
        { term: "TypeError", pronunciation: "تايب إيرور", meaning: "خطأ نوع البيانات الكارثي عند محاولة قراءة خاصية من undefined أو null" },
        { term: "Short-circuiting", pronunciation: "شورت سيركتينغ", meaning: "التوقف الفوري وإرجاع undefined دون إكمال المسار" }
      ],
      syntax: "// قراءة خاصية من كائن بأمان\nconst city = user?.address?.city;\n\n// قراءة عنصر من مصفوفة بأمان\nconst firstItem = list?.[0];\n\n// استدعاء دالة اختيارية بأمان\nonComplete?.();",
      codeSimple: `// كائن مستخدم لا يحتوي على قسم العناوين
const customer = {
  id: 10,
  name: 'أحمد'
  // address مفقود تماماً
};

// محاولة قراءة المدينة بأمان دون انهيار البرنامج
const cityName = customer?.address?.city;

// استدعاء دالة مجهولة بأمان
const customLog = customer?.printInfo?.();

console.log('اسم المدينة المستخرج بأمان:', cityName);
console.log('نتيجة استدعاء الدالة المفقودة:', customLog);`,
      codeAdvanced: `// بيانات قادمة من خادم خارجي مع احتمالية نقص بعض الحقول
const apiUsers = [
  {
    id: 1,
    name: 'سالم',
    company: { details: { department: 'الهندسة' } }
  },
  {
    id: 2,
    name: 'منى'
    // لا تملك شركة ولا تفاصيل
  }
];

// دالة لمعالجة واستخراج القسم بأمان تام لجميع المستخدمين
const departments = apiUsers.map(user => ({
  userName: user.name,
  // استخدام Optional Chaining متبوعاً بقيمة بديلة
  dept: user?.company?.details?.department || 'غير محدد'
}));

console.log('أقسام المستخدمين المعالجة:', departments);`,
      output: `اسم المدينة المستخرج بأمان: undefined\nنتيجة استدعاء الدالة المفقودة: undefined\nأقسام المستخدمين المعالجة: [\n  { userName: 'سالم', dept: 'الهندسة' },\n  { userName: 'منى', dept: 'غير محدد' }\n]`,
      mistakes: [
        {
          wrong: `// وضع ?. في الجانب الأيسر لمحاولة إسناد وتعيين قيمة جديدة\nuser?.address?.city = 'دبي'; // ❌ خطأ صياغي فادح: Invalid left-hand side in assignment!`,
          correct: `// Optional Chaining مخصص للقراءة فقط وليس للكتابة أو الإسناد\nif (user?.address) {\n  user.address.city = 'دبي'; // ✅ سليم\n}`,
          explanation: "معامل ?. صُمم خصيصاً للقراءة الآمنة؛ لا يمكنك استخدامه كهدف لإسناد وتعيين قيم جديدة في الذاكرة."
        }
      ],
      bestPractices: [
        "استخدم ?. عند قراءة البيانات القادمة من الـ APIs أو البيانات غير المؤكدة في مكونات React.",
        "استخدمه مع الدوال الاختيارية الممررة عبر الـ Props: `props.onClick?.()` لتفادي الأخطاء إذا لم يمرر المستخدم الدالة.",
        "لا تفرط في استخدامه في كل مكان؛ إذا كان الكائن حتماً يجب أن يكون موجوداً، فدعه يطلق خطأ مبكراً لتكتشف الخلل أثناء التطوير."
      ],
      infographic: {
        title: "إنفوجرافيك: وداعاً لخطأ Cannot read properties of undefined",
        concept: "Optional Chaining (?.) Syntax & Behavior",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│              معامل التسلسل الاختياري Optional Chaining (?.)  │
└─────────────────────────────────────────────────────────────┘
  كود قديم متعب:   user && user.address && user.address.geo && user.address.geo.lat
  كود ES6 العصري:  user?.address?.geo?.lat

  ماذا يحدث عند التشغيل؟
  • إذا وُجد user.address ──> يواصل التقدم للخاصية التالية
  • إذا كان null أو undefined ──> يتوقف فوراً ويعيد undefined دون أي خطأ!`
      }
    },
    {
      id: "3.1.h",
      title: "Nullish Coalescing (??)",
      englishTitle: "Nullish Coalescing Operator (??): Strict Fallback",
      definition: "مشغل الدمج الفارغ (Nullish Coalescing: ??) هو مشغل منطقي يعيد الطرف الأيمن فقط إذا كان الطرف الأيسر مساوياً لقيمة فارغة فعلياً (null أو undefined)، ويتجاهل تماماً باقي القيم المنطقية مثل الصفر (0) والنص الفارغ ('') والقيمة false.",
      analogy: "تخيل نموذج تسجيل يسألك: 'كم عدد أطفالك؟' إذا كتبت '0'، فهذا رقم حقيقي ويعني أنه ليس لديك أطفال. المعامل القديم (||) كان يعتبر الصفر خطأ ويعطيك القيمة الافتراضية '1' كأنك لم تجب! بينما المشغل الجديد (??) يفهم أن '0' هي إجابة حقيقية مقصودة ولا يستبدلها إلا إذا تركت الخانة فارغة تماماً.",
      why: "المعامل القديم (||) كان وما زال مفيداً، لكنه يعاني من عيب خطير: يعتبر الأرقام (0) والنصوص الفارغة ('') والقيم (false) قيماً ساقطة (Falsy) فيستبدلها بالقيمة الافتراضية حتى لو كان المستخدم يقصدها عمداً! مشغل (??) حل هذا العيب الشائع بدقة.",
      terms: [
        { term: "Nullish Coalescing", pronunciation: "ناليش كواليسينغ", meaning: "مشغل الدمج للقيم المعدومة حصراً (null و undefined)" },
        { term: "Nullish Values", pronunciation: "ناليش فاليوز", meaning: "القيمتان المعدومتان فقط: null و undefined" },
        { term: "Falsy Values", pronunciation: "فولسي فاليوز", meaning: "القيم الساقطة الست: false, 0, '', null, undefined, NaN" }
      ],
      syntax: "// استخدام مشغل ?? لتعيين قيمة احتياطية آمنة\nconst realScore = userScore ?? 10;\n\n// مقارنة الفرق بين || و ??\n0 || 100   // 100 (المعامل القديم يتجاهل الصفر!)\n0 ?? 100   // 0   (المعامل الجديد يحترم الصفر ويحافظ عليه!)",
      codeSimple: `// إعدادات صوت لعبة فيديو
const userVolume = 0; // المستخدم يريد كتم الصوت تماماً بجعله صفراً

// الطريقة القديمة بـ || (كارثة: تحول الصفر إلى 50!)
const volumeWithOr = userVolume || 50;

// الطريقة الحديثة الصارمة بـ ?? (تحترم الصفر وتحافظ عليه)
const volumeWithNullish = userVolume ?? 50;

console.log('مستوى الصوت بـ || (خاطئ):', volumeWithOr);
console.log('مستوى الصوت بـ ?? (صحيح):', volumeWithNullish);`,
      codeAdvanced: `// معالجة إعدادات تطبيق مالي في React
function setupUserPreferences(prefs) {
  return {
    // يجب الحفاظ على القيمة false إذا اختار المستخدم إيقاف الإشعارات
    enableNotifications: prefs.enableNotifications ?? true,
    // يجب الحفاظ على الرصيد 0 إذا كان حساب المستخدم فارغاً
    minimumBalance: prefs.minimumBalance ?? 100,
    // نص ترحيبي مخصص أو افتراضي
    customGreeting: prefs.customGreeting ?? 'أهلاً بعودتك'
  };
}

// اختبار مع إعدادات حقيقية تحتوي أصفاراً وقيم false
const userConfig = setupUserPreferences({
  enableNotifications: false, // المستخدم عطلها عمداً
  minimumBalance: 0,          // رصيده الحالي صفر فعلياً
  customGreeting: undefined   // لم يحدد نصاً ترحيبياً
});

console.log('إعدادات المستخدم النهائية:', userConfig);`,
      output: `مستوى الصوت بـ || (خاطئ): 50\nمستوى الصوت بـ ?? (صحيح): 0\nإعدادات المستخدم النهائية: {\n  enableNotifications: false,\n  minimumBalance: 0,\n  customGreeting: 'أهلاً بعودتك'\n}`,
      mistakes: [
        {
          wrong: `// الخلط والجمع بين && أو || مع ?? في نفس السطر دون أقواس تفصيلية\nconst result = a || b ?? c; // ❌ خطأ نحوي: SyntaxError: Unexpected token '??'`,
          correct: `// فصل العمليات بأقواس واضحة لتحديد الأولويات\nconst result = (a || b) ?? c; // ✅ سليم وصريح`,
          explanation: "محرك JavaScript يمنع خلط مشغل ?? مباشرة مع || أو && في نفس التعبير لتجنب الغموض، ويلزمك بوضع أقواس لتوضيح قصدك."
        }
      ],
      bestPractices: [
        "استخدم ?? دائماً عند التعامل مع الأرقام (حيث قد يكون الصفر قيمة صالحة) أو القيم المنطقية (حيث قد تكون false صالحة).",
        "استخدم || فقط عندما تريد فعلياً استبدال النصوص الفارغة ('') أو الأصفار بالقيمة الافتراضية.",
        "ادمجه بذكاء مع Optional Chaining: `const speed = car?.speed ?? 60;`."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة حاسمة بين المشغلين (||) و (??)",
        concept: "OR (||) vs Nullish Coalescing (??)",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│             مقارنة حاسمة: المشغل (||) مقابل المشغل (??)      │
└─────────────────────────────────────────────────────────────┘
  القيمة المدخلة         المعامل (||)             المعامل (??)
  ─────────────────────────────────────────────────────────────
  null                   بديل افتراضي            بديل افتراضي
  undefined              بديل افتراضي            بديل افتراضي
  0                      بديل افتراضي ❌         يحافظ على 0 ✅
  false                  بديل افتراضي ❌         يحافظ على false ✅
  "" (نص فارغ)          بديل افتراضي            يحافظ على "" ✅
  
  القاعدة الذهبية:
  استخدم (??) لحماية الصفر والقيم المنطقية؛ استخدم (||) للنصوص الشاملة`
      }
    },
    {
      id: "3.1.i",
      title: "الاستيراد والتصدير ES Modules",
      englishTitle: "ES Modules: import & export (Named vs Default)",
      definition: "نظام الوحدات البرمجية (ES Modules: ESM) هو المعيار الرسمي في JavaScript لتقسيم الكود الكبير إلى ملفات مستقلة ومنظمة؛ حيث تصدر الدوال والمكونات بـ export من ملف، وتستوردها بـ import في ملف آخر.",
      analogy: "تخيل أن مشروعك هو سيارة متطورة: بدلاً من صهر الحديد وتصنيع المحرك والعجلات والزجاج في غرفة واحدة ضيقة، يتم تصنيع المحرك في مصنع مستقل وتصديره (export)، وتصنع الإطارات في مصنع آخر، ثم يتم استيرادها جميعاً (import) في مصنع التجميع النهائي لتركيب السيارة بسهولة.",
      why: "بدون نظام الوحدات، كان المبرمجون يضطرون لتكديس آلاف أسطر الكود في ملف واحد، أو تضمين عشرات وسوم <script> في صفحة HTML، مما كان يسبب تضارب المتغيرات العامة (Global Scope Pollution) واستحالة صيانة المشاريع الكبيرة.",
      terms: [
        { term: "ES Module (ESM)", pronunciation: "إي إس موديول", meaning: "نظام الوحدات البرمجية الرسمي لتقسيم واستيراد الكود" },
        { term: "Default Export", pronunciation: "ديفولت إكسبورت", meaning: "تصدير افتراضي وحيد لكل ملف؛ يستورد بأي اسم وبدون أقواس" },
        { term: "Named Export", pronunciation: "نيمد إكسبورت", meaning: "تصدير مسمى لعناصر متعددة؛ يستورد بنفس الاسم داخل أقواس معقوفة {}" },
        { term: "Import Aliasing (as)", pronunciation: "إمبورت ألياسينغ", meaning: "إعادة تسمية العنصر المستورد لتفادي تضارب الأسماء" }
      ],
      syntax: "// 1. التصدير المسمى (يمكن تكراره أكثر من مرة بالملف)\nexport const add = (a, b) => a + b;\nexport const PI = 3.14;\n\n// 2. التصدير الافتراضي (مرة واحدة فقط بالملف)\nexport default function App() { ... }\n\n// 3. الاستيراد في ملف آخر\nimport App from './App.js';                 // استيراد افتراضي بدون أقواس\nimport { add, PI as CirclePI } from './math.js'; // استيراد مسمى مع أقواس وتغيير الاسم",
      codeSimple: `// محاكاة لملف خدمات الحسابات: mathUtils.js
// export const multiply = (x, y) => x * y;
// export default function calcDiscount(price, rate) { return price * (1 - rate); }

// في الملف الرئيسي main.js نستورد بهذه الطريقة:
// استيراد التصدير الافتراضي (اخترنا له اسماً معبراً) مع التصدير المسمى بالأقواس {}
import calculateDiscount, { multiply } from './mathUtils.js';

const cost = multiply(10, 5);
const discounted = calculateDiscount(cost, 0.2);

console.log('التكلفة الأصلية:', cost);
console.log('التكلفة بعد الخصم:', discounted);`,
      codeAdvanced: `// محاكاة لتنظيم وتصدير مكونات مكتبة واجهات مستخدم كاملة (Barrel Pattern)
// ملف components/index.js يجمع ويعيد تصدير كل شيء بسطر واحد:
/*
  export { default as Button } from './Button.jsx';
  export { default as Modal } from './Modal.jsx';
  export { default as Navbar } from './Navbar.jsx';
  export * from './themeConstants.js';
*/

// في صفحة الصفحة الرئيسية Dashboard.jsx نستورد الكل في سطر واحد فائق النظافة:
/*
  import { Button, Modal, PRIMARY_COLOR } from './components';
*/

console.log('تم تجميع مكونات الواجهة وتصديرها بنمط Barrel الاحترافي!');`,
      output: `التكلفة الأصلية: 50\nالتكلفة بعد الخصم: 40\nتم تجميع مكونات الواجهة وتصديرها بنمط Barrel الاحترافي!`,
      mistakes: [
        {
          wrong: `// وضع أقواس معقوفة حول التصدير الافتراضي أثناء الاستيراد\n// في ملف Button.jsx: export default function Button() {}\nimport { Button } from './Button.jsx'; // ❌ خطأ: Button is not exported as named!`,
          correct: `// الاستيراد الافتراضي يُكتب دائماً بدون أي أقواس معقوفة\nimport Button from './Button.jsx'; // ✅ سليم ومثالي`,
          explanation: "القاعدة الذهبية: التصدير الافتراضي (Default) يستورد بدون أقواس وبأي اسم تختاره، بينما التصدير المسمى (Named) يحتاج أقواس معقوفة {} ونفس الاسم الأصلي."
        }
      ],
      bestPractices: [
        "في React، يفضل عادة تصدير المكون الرئيسي لكل ملف كتصدير افتراضي `export default MyComponent`.",
        "استخدم التصدير المسمى `export const util = ...` لملفات الأدوات المساعدة التي تحوي أكثر من دالة.",
        "استخدم نمط Barrel (ملف `index.js` في كل مجلد) لتسهيل استيراد المكونات المتعددة بسطر واحد نظيف."
      ],
      infographic: {
        title: "إنفوجرافيك: التصدير الافتراضي مقابل التصدير المسمى في ES6",
        concept: "Default Export vs Named Export",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│            التصدير الافتراضي (Default) مقابل المسمى (Named)   │
└─────────────────────────────────────────────────────────────┘
  التصدير الافتراضي (Default Export):
  • التصدير:   export default function App() {}
  • الاستيراد:  import App from './App'  (بدون أقواس، الاسم مرن)
  • العدد:      واحد فقط لكل ملف!
  
  التصدير المسمى (Named Export):
  • التصدير:   export const helper = () => {}
  • الاستيراد:  import { helper } from './utils'  (بأقواس معقوفة إجبارية)
  • العدد:      يمكن تصدير عشرات الدوال في نفس الملف!`
      }
    },
    {
      id: "3.1.j",
      title: "الاختصار في تعريف خصائص الكائنات Object Property Shorthand",
      englishTitle: "Object Property Shorthand & Computed Properties",
      definition: "الاختصار في تعريف خصائص الكائنات هو ميزة تسمح لك بإنشاء خاصية في الكائن بكتابة اسم المتغير فقط دون تكرار اسمه إذا كان اسم المفتاح مطابقاً لاسم المتغير، بالإضافة لميزة الخصائص المحسوبة ديناميكياً [expression].",
      analogy: "تخيل أن لديك ملف أوراق اسمه 'أحمد'، وعندما تضعه في الدرج تكتفي بوضعه مباشرة؛ لا تحتاج لكتابة لافتة جديدة تقول: 'هذا الدرج لأحمد ومحتواه ملف أحمد'. التكرار لا فائدة منه!",
      why: "يوفر الكثير من الكتابة المتكررة والمملة في كود JavaScript؛ فبدلاً من كتابة `{ name: name, age: age, email: email }`، تكتب ببساطة وبأناقة تامة `{ name, age, email }`.",
      terms: [
        { term: "Property Shorthand", pronunciation: "بروبيرتي شورت هاند", meaning: "اختصار كتابة المفتاح والقيمة عند تطابق أسمائهما" },
        { term: "Method Shorthand", pronunciation: "ميثود شورت هاند", meaning: "تعريف الدوال داخل الكائنات دون كتابة كلمة function" },
        { term: "Computed Property Name", pronunciation: "كومبيوتيد بروبيرتي", meaning: "حساب اسم المفتاح ديناميكياً باستخدام الأقواس المربعة [key]" }
      ],
      syntax: "// 1. اختصار الخاصية عند تطابق الاسمين\nconst user = { name, email }; // تعادل { name: name, email: email }\n\n// 2. اختصار الدالة\nconst math = {\n  sum(a, b) { return a + b; } // تعادل sum: function(a, b) {}\n};\n\n// 3. مفتاح ديناميكي محسوب\nconst dynamicKey = 'status';\nconst data = { [dynamicKey]: 'نشط' };",
      codeSimple: `// متغيرات حرة
const title = 'تعلم React 19';
const lessonsCount = 34;

// إنشاء كائن باستخدام الاختصار النظيف
const course = {
  title,         // اختصار لـ title: title
  lessonsCount,  // اختصار لـ lessonsCount: lessonsCount
  // اختصار الدالة
  start() {
    return 'انطلقت الدورة!';
  }
};

console.log('كائن الدورة المختصر:', course);
console.log('تشغيل دالة الكائن:', course.start());`,
      codeAdvanced: `// معالجة مدخلات النماذج المتعددة في React عبر Computed Properties
function handleFormChange(fieldName, value) {
  // توليد كائن التحديث ديناميكياً بحساب اسم الحقل في الأقواس المربعة
  const updatedFormState = {
    timestamp: Date.now(),
    [fieldName]: value // اسم الحقل يصبح مفتاح الكائن تلقائياً!
  };
  return updatedFormState;
}

// المستخدم يكتب في حقل البريد
console.log('تحديث حقل البريد:', handleFormChange('email', 'dev@example.com'));

// المستخدم يكتب في حقل الهاتف
console.log('تحديث حقل الهاتف:', handleFormChange('phone', '+966500000000'));`,
      output: `كائن الدورة المختصر: { title: 'تعلم React 19', lessonsCount: 34, start: [Function: start] }\nتشغيل دالة الكائن: انطلقت الدورة!\nتحديث حقل البريد: { timestamp: 1714000000000, email: 'dev@example.com' }\nتحديث حقل الهاتف: { timestamp: 1714000000000, phone: '+966500000000' }`,
      mistakes: [
        {
          wrong: `// نسيان الأقواس المربعة عند الرغبة في استخدام متغير كاسم للمفتاح\nconst field = 'email';\nconst obj = { field: 'test@mail.com' }; // ❌ المفتاح سيكون حرفياً كلمة 'field' وليس 'email'!`,
          correct: `// إحاطة المتغير بأقواس مربعة لحسابه كقيمة ديناميكية\nconst field = 'email';\nconst obj = { [field]: 'test@mail.com' }; // ✅ المفتاح سيكون 'email' كما قصدت`,
          explanation: "إذا لم تستخدم الأقواس المربعة [key]، سيعامل محرك JavaScript الكلمة كنص ثابت ومفتاح حرفي بدلاً من قراءة قيمة المتغير."
        }
      ],
      bestPractices: [
        "استخدم Property Shorthand دائماً عند إرجاع كائنات من الدوال المساعدة أو مكونات React.",
        "استخدم Computed Properties لإدارة حالات النماذج التي تحتوي على حقول متعددة بمعالج حدث واحد (`handleChange`).",
        "حافظ على تناسق أسماء المتغيرات مع أسماء خصائص الـ API لتقليل التكرار واستغلال الـ Shorthand بأقصى درجة."
      ],
      infographic: {
        title: "إنفوجرافيك: اختصارات الكائنات والخصائص المحسوبة في ES6",
        concept: "Object Property Shorthand & Computed Keys",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│            اختصارات الكائنات الحديثة في JavaScript ES6+       │
└─────────────────────────────────────────────────────────────┘
  1. اختصار الخصائص (Property Shorthand):
     const name = 'سالم';
     const user = { name };  ──>  يكافئ تماماً: { name: 'سالم' }

  2. اختصار الدوال (Method Shorthand):
     const calc = {
       add(x, y) { return x + y; }  (بدون : function)
     };

  3. المفاتيح الديناميكية المحسوبة (Computed Keys):
     const myKey = 'age';
     const person = { [myKey]: 25 };  ──>  ينتج الكائن: { age: 25 }`
      }
    }
  ],
  quiz: [
    {
      id: "q3.1.1",
      question: "ما الفرق الرئيسي بين المشغل المنطقي (||) ومشغل الدمج الفارغ (??)؟",
      options: [
        "لا يوجد فرق؛ كلاهما يقومان بنفس العمل تماماً في جميع الحالات.",
        "(??) يعيد القيمة البديلة فقط عند null أو undefined، بينما (||) يستبدل أيضاً الصفر 0 والنص الفارغ '' و false.",
        "(||) مخصص للأرقام فقط بينما (??) مخصص للنصوص فقط.",
        "(??) يتسبب في توقف التطبيق عند وجود أخطاء في الكود."
      ],
      correctAnswer: 1,
      explanation: "المشغل (??) صارم جداً؛ فهو لا يفعل القيمة البديلة إلا إذا كانت القيمة الأولى معدومة حقيقة (null أو undefined)، ويحافظ بأمان على الصفر 0 والقيمة false والنص الفارغ."
    },
    {
      id: "q3.1.2",
      question: "إذا كانت لدينا الدالة `const make = (id) => ({ id })`، ماذا تفعل الأقواس الدائرية () المحيطة بالكائن؟",
      options: [
        "هي مجرد زينة شكلية يمكن حذفها دون أي تأثير.",
        "تخبر محرك JavaScript بأن الأقواس المعقوفة {} تمثل كائناً يُراد إرجاعه ضمنياً وليست جسماً للدالة.",
        "تقوم بتحويل الكائن إلى مصفوفة أرقام.",
        "تمنع الدالة من استقبال أي معاملات جديدة."
      ],
      correctAnswer: 1,
      explanation: "في الدوال السهمية ذات الإرجاع الضمني، تعتبر الأقواس المعقوفة {} جسماً للدالة؛ ولإرجاع كائن في سطر واحد يجب إحاطته بأقواس دائرية ({ ... }) لتفادي الخطأ النحوي."
    },
    {
      id: "q3.1.3",
      question: "ما هي القاعدة الإلزامية عند استخدام معامل البواقي Rest Parameter (...) في الدوال؟",
      options: [
        "يجب أن يكون معامل Rest هو المعامل الأخير دائماً في قائمة المعاملات.",
        "يجب وضع معامل Rest في أول الدالة دائماً قبل أي معامل آخر.",
        "لا يمكن استخدام معامل Rest إلا مع الأرقام فقط.",
        "يجب أن يسبق معامل Rest كلمة function حصراً ولا يعمل مع الدوال السهمية."
      ],
      correctAnswer: 0,
      explanation: "محرك JavaScript يفرض أن يكون معامل Rest هو الأخير في القائمة ليجمع كافة المعاملات المتبقية التي لم تلتقطها المعاملات السابقة له."
    }
  ],
  exercise: {
    title: "تمرين عملي: بناء محول بيانات وتحديث حالة متجر إلكتروني بميزات ES6+",
    description: "أنت تبني تطبيق متجر في React وتستقبل استجابة من خادم API. المطلوب كتابة دالة سهمية حديثة تستخدم: تفكيك الكائن (Destructuring)، واستخراج الحقول الحساسة بمعامل Rest، واستخدام Optional Chaining و Nullish Coalescing، وتحديث الكائن بأسلوب غير مدمر عبر معامل Spread.",
    starterCode: `// بيانات قادمة من الـ API
const rawApiResponse = {
  productId: 501,
  title: 'لوحة مفاتيح لاسلكية',
  meta: {
    pricing: {
      basePrice: 120,
      discount: 0 // خصم صفر (يجب الحفاظ عليه ولا يعتبر معدوماً!)
    }
  },
  secretSupplierCode: 'SUPP-992-SECRET',
  inStock: true
};

// المطلوب: دالة سهمية تنظف البيانات وتعيد كائناً جديداً
const processProduct = (apiData) => {
  // 1. استبعد secretSupplierCode واحتفظ ببقية الخصائص بـ Rest
  // 2. اقرأ السعر والخصم بأمان باستخدام ?. و ??
  // 3. أرجع كائناً جديداً يحتوي على السعر النهائي بعد الخصم
};`,
    hints: [
      "استخدم التفكيك مع Rest لعزل الكود السري: `const { secretSupplierCode, ...cleanData } = apiData;`",
      "استخدم Optional Chaining مع ?? لقراءة الخصم بأمان: `apiData?.meta?.pricing?.discount ?? 0`",
      "أرجع الكائن مدمجاً باستخدام Spread: `return { ...cleanData, finalPrice };`"
    ],
    solution: `// بيانات قادمة من الـ API
const rawApiResponse = {
  productId: 501,
  title: 'لوحة مفاتيح لاسلكية',
  meta: {
    pricing: {
      basePrice: 120,
      discount: 0 // خصم صفر (يجب الحفاظ عليه!)
    }
  },
  secretSupplierCode: 'SUPP-992-SECRET',
  inStock: true
};

// الدالة السهمية الاحترافية باستخدام كافة ميزات ES6+
const processProduct = (apiData) => {
  // 1. استبعاد الكود السري الحساس واستخراج بقية البيانات بأمان
  const { secretSupplierCode, meta, ...cleanData } = apiData;

  // 2. استخراج الأسعار بأمان باستخدام Optional Chaining و Nullish Coalescing
  const basePrice = meta?.pricing?.basePrice ?? 0;
  const discount = meta?.pricing?.discount ?? 0;

  // 3. حساب السعر النهائي بعد الخصم
  const finalPrice = basePrice - discount;

  // 4. إرجاع كائن جديد كلياً بأسلوب غير مدمر (Immutability) مع ميزة Property Shorthand
  return {
    ...cleanData,
    basePrice,
    discount,
    finalPrice,
    isFreeShipping: finalPrice > 100
  };
};

const result = processProduct(rawApiResponse);
console.log('المنتج المعالج بنجاح:', result);`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: حزمة أدوات ES6+ الذهبية لمطوري React",
    badge: "أدوات ES6+ الخارقة",
    summary: "ميزات ES6 ليست رفاهية برمجية؛ بل هي اللغة اليومية التي كُتبت بها مكتبة React 19 الحديثة. إتقان التفكيك، المعاملات، والـ Modules يمنحك كوداً نظيفاً، آمناً، وسريع الأداء.",
    points: [
      "Arrow Functions: كتابة رشيقة مع وراثة سياق this تلقائياً.",
      "Destructuring: تفكيك الكائنات والمصفوفات بسطر واحد دون تكرار.",
      "Spread & Rest (...): نسخ ودمج البيانات بأمان دون تعديل الأصل.",
      "Optional Chaining (?.): قراءة آمنة لخصائص الكائنات دون انهيار.",
      "Nullish Coalescing (??): حماية الصفر والقيم المنطقية من الاستبدال الخاطئ.",
      "ES Modules: تنظيم الكود وتقسيمه إلى ملفات مستقلة بـ import و export."
    ]
  }
};
