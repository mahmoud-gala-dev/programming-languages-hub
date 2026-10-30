// src/data/sections/section3/topic2.js
// الموضوع 2: مفاهيم JavaScript المتقدمة (Advanced JavaScript Concepts)

export const SECTION_3_TOPIC_2 = {
  id: "3.2",
  title: "مفاهيم JavaScript المتقدمة",
  englishTitle: "Advanced JavaScript Concepts",
  description: "الغوص في أعماق محرك JavaScript لفهم كيف يفكر وكيف يدير الذاكرة: سياق التنفيذ Execution Context، الرفع Hoisting، الدوال الحاضنة Closures، كلمة this، والبرمجة الوظيفية والدوال النقية التي بُنيت عليها بنية React بالكامل.",
  icon: "Cpu",
  subtopics: [
    {
      id: "3.2.a",
      title: "Execution Context",
      englishTitle: "Execution Context: Creation & Execution Phases",
      definition: "سياق التنفيذ (Execution Context) هو البيئة أو الصندوق الافتراضي الذي ينشئه محرك JavaScript في الذاكرة لتقييم وتشغيل الكود. يمر كل سياق بمرحلتين صارمتين: مرحلة الإنشاء (Creation Phase) حيث تُحجز المتغيرات والدوال في الذاكرة، ثم مرحلة التنفيذ (Execution Phase) حيث يُنفذ الكود سطراً بسطر.",
      analogy: "تخيل مخرج مسرحية قبل بدء العرض: أولاً، يقف المخرج في المسرح الفارغ ويرتب الديكورات ويوزع الممثلين في أماكنهم المحددة في الكواليس (مرحلة الإنشاء). ثانياً، يفتح الستار ويبدأ الممثلون في الكلام والحركة الفعلية سطراً بسطر (مرحلة التنفيذ).",
      why: "فهم سياق التنفيذ يزيل الغموض تماماً عن كيفية عمل JavaScript خلف الكواليس؛ فهو يفسر لك لماذا يمكنك استدعاء دالة قبل سطر تعريفها، ولماذا تكون المتغيرات undefined في لحظة معينة، وكيف تتصرف الذاكرة داخل مكونات React أثناء إعادة التصيير (Re-render).",
      terms: [
        { term: "Execution Context", pronunciation: "إكسيكيوشن كونتكست", meaning: "سياق وبيئة تنفيذ الكود في الذاكرة" },
        { term: "Global Execution Context (GEC)", pronunciation: "جلوبال كونتكست", meaning: "سياق التنفيذ العام الأولي الذي ينشأ فور فتح الصفحة" },
        { term: "Function Execution Context (FEC)", pronunciation: "فانكشن كونتكست", meaning: "سياق تنفيذ خاص ينشأ عند كل استدعاء لدالة جديدة" },
        { term: "Creation Phase", pronunciation: "كرييشن فيز", meaning: "مرحلة حجز الذاكرة وتهيئة المتغيرات والدوال" },
        { term: "Execution Phase", pronunciation: "إكسيكيوشن فيز", meaning: "مرحلة تعيين القيم وتشغيل الكود الفعلي" }
      ],
      syntax: "// 1. سياق التنفيذ العام (Global Context) ينشأ أولاً\nconst app = 'React';\n\n// 2. سياق تنفيذ دالة (Function Context) ينشأ في كل مرة تُستدعى فيها\nfunction start() {\n  const message = 'جاهز';\n  return `${app} ${message}`;\n}\n\nstart(); // هنا يولد سياق دالة جديد ويُدفع إلى الـ Call Stack",
      codeSimple: `// كود يوضح مرحلتي الإنشاء والتنفيذ
console.log('1. قيمة المتغير a في البداية:', typeof a);

// تعريف متغير باستخدام let
let a = 100;

// دالة عادية يتم حفظ نسختها الكاملة في مرحلة الإنشاء
function calculateDouble(num) {
  // سياق تنفيذ دالة محلي
  return num * 2;
}

// استدعاء الدالة في مرحلة التنفيذ
const result = calculateDouble(a);

console.log('2. قيمة النتيجة بعد اكتمال التنفيذ:', result);`,
      codeAdvanced: `// تتبع مسار سياقات التنفيذ المتداخلة في الذاكرة
const globalTheme = 'dark'; // سياق عام Global

function renderHeader(user) {
  // سياق تنفيذ رقم 1 للدالة renderHeader
  const headerId = 'hdr-main';

  function formatGreeting() {
    // سياق تنفيذ متداخل رقم 2 للدالة formatGreeting
    // هذه الدالة تبحث عن المتغيرات في سياقها، ثم سياق والدها، ثم السياق العام
    return \`أهلاً بك يا \${user} في وضع \${globalTheme}\`;
  }

  return formatGreeting(); // استدعاء يفتح سياقاً جديداً
}

// تشغيل الشجرة
const greetingText = renderHeader('عبد الرحمن');
console.log('المخرج النهائي لسلسلة السياقات:', greetingText);`,
      output: `1. قيمة المتغير a في البداية: undefined\n2. قيمة النتيجة بعد اكتمال التنفيذ: 200\nالمخرج النهائي لسلسلة السياقات: أهلاً بك يا عبد الرحمن في وضع dark`,
      mistakes: [
        {
          wrong: `// افتراض أن محرك JavaScript يقرأ وينفذ السطر الأول فوراً دون مرحلة فحص وإنشاء سابقة\nconsole.log(x); // ظن المبرمج أن هذا سيعمل لأن x معرفة بالأسفل بـ let!\nlet x = 50; // ❌ ReferenceError: Cannot access 'x' before initialization`,
          correct: `// المتغيرات بـ let و const تدخل في منطقة الـ Temporal Dead Zone (TDZ) حتى تصل مرحلة التنفيذ لسطر تعريفها\nlet x = 50;\nconsole.log(x); // ✅ طباعة سليمة: 50`,
          explanation: "في مرحلة الإنشاء، يحجز المحرك مكاناً لـ let و const لكنه يمنع قراءتها نهائياً ويضعها في منطقة الخمول المؤقت (TDZ) حتى يصل سطر الإسناد الفعلي في مرحلة التنفيذ."
        }
      ],
      bestPractices: [
        "عرف متغيراتك ودوالك دائماً في أعلى الملف والنطاق قبل استخدامها لتحافظ على وضوح الكود وتسلسله المنطقي.",
        "تذكر أن كل استدعاء لدالة يستهلك جزءاً من الذاكرة لإنشاء سياق جديد؛ تجنب إنشاء سياقات غير منتهية (Infinite Recursion).",
        "في React، كل عملية إعادة تصيير (Re-render) لمكون تنشئ سياق تنفيذ جديد كلياً للدالة، وهو ما يفسر إعادة حساب المتغيرات المحلية في كل تصيير."
      ],
      infographic: {
        title: "إنفوجرافيك: المرحلتان السحريتان لسياق التنفيذ في JavaScript",
        concept: "Creation Phase vs Execution Phase",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 سياق التنفيذ (Execution Context)            │
└─────────────────────────────────────────────────────────────┘
  المرحلة الأولى: مرحلة الإنشاء (Creation Phase)
  ├── 1. حجز الذاكرة للمتغيرات (Hoisting)
  ├── 2. حفظ الدوال التقليدية بنسختها الكاملة
  └── 3. إنشاء كائن الـ Scope وسياق كلمة this

  المرحلة الثانية: مرحلة التنفيذ (Execution Phase)
  ├── 1. تشغيل الكود سطراً بسطر من الأعلى للأسفل
  ├── 2. إسناد القيم الفعلية للمتغيرات (x = 10)
  └── 3. استدعاء الدوال وتمرير المعاملات`
      }
    },
    {
      id: "3.2.b",
      title: "Hoisting",
      englishTitle: "Hoisting: Declarations, TDZ & Function Hoisting",
      definition: "الرفع (Hoisting) هو سلوك محرك JavaScript أثناء مرحلة الإنشاء حيث يقوم برفع إعلانات المتغيرات والدوال نظرياً إلى قمة نطاقها الحالي قبل تشغيل أي سطر كود. الدوال التقليدية تُرفع بكامل جسمها، بينما المتغيرات بـ var تُرفع بقيمة undefined، أما let و const فتُرفع مع حظر الوصول إليها في منطقة تُدعى المنطقة الميتة زمنياً (TDZ).",
      analogy: "تخيل أن لديك قائمة طعام معلقة على جدار مطعم؛ قام مدير المطعم بتعليق لافتات أسماء الوجبات قبل فتح الأبواب للزبائن (مرحلة الإنشاء). عندما يدخل الزبون يرى اسم الوجبة لكن الطباخ لم يجهز الطعام بعد، فإذا كانت الوجبة (let) يقول له النادل: 'ممنوع السؤال عنها حتى نعلن جهوزيتها!' (الـ TDZ).",
      why: "فهم الرفع يحميك من أغرب السلوكيات غير المتوقعة في JavaScript؛ خاصة ظاهرة undefined الغامضة مع var، وأخطاء ReferenceError القاتلة مع let و const، ويشرح لك لماذا تعمل الدوال التقليدية حتى لو استدعيتها في السطر الأول من الملف.",
      terms: [
        { term: "Hoisting", pronunciation: "هويستينغ", meaning: "الرفع؛ حجز المتغيرات والدوال في الذاكرة قبل بدء التنفيذ" },
        { term: "Temporal Dead Zone (TDZ)", pronunciation: "تمبرال ديد زون", meaning: "المنطقة الميتة زمنياً؛ الفترة بين رفع المتغير والسطر الذي يُعرف فيه رسمياً" },
        { term: "Declaration vs Initialization", pronunciation: "ديكلريشن ضد إنيشلايزيشن", meaning: "الإعلان عن وجود المتغير مقابل إسناد قيمة أولية له" }
      ],
      syntax: "// 1. رفع الدوال التقليدية بالكامل (يعمل بنجاح!)\nsayHello(); // ستطبع مرحباً!\nfunction sayHello() { console.log('مرحباً!'); }\n\n// 2. الـ TDZ مع let و const\n// console.log(age); // ❌ ReferenceError خطأ قاتل لأنها في الـ TDZ\nlet age = 25;       // هنا ينتهي الـ TDZ ويبدأ المتغير بالعمل",
      codeSimple: `// استدعاء دالة تقليدية قبل سطر كتابتها في الكود
const greeting = getWelcomeMessage('أنس');
console.log('نتيجة الدالة المرفوعة:', greeting);

// الدالة التقليدية تُرفع بكامل كودها إلى الذاكرة
function getWelcomeMessage(name) {
  return \`أهلاً بك يا \${name} في عالم الرفع Hoisting!\`;
}

// محاولة استخدام var القديمة (تُرفع بقيمة undefined)
console.log('قيمة var قبل سطرها:', oldVar); // يطبع: undefined دون انهيار
var oldVar = 'أنا قيمة قديمة';`,
      codeAdvanced: `// إثبات المنطقة الميتة زمنياً (Temporal Dead Zone - TDZ)
let scopeTest = 'القيمة العامة';

function testTDZ() {
  // محرك JavaScript يعلم بوجود scopeTest المحلية داخل هذه الدالة في مرحلة الإنشاء!
  // لذا يمنع قراءة القيمة العامة ويعتبر المحلية في الـ TDZ حتى سطر تعريفها
  try {
    // console.log(scopeTest); // سيفجر ReferenceError!
  } catch (err) {
    console.log('تم اصطياد خطأ TDZ بنجاح:', err.name);
  }

  // هنا ينتهي الـ TDZ الخاص بالمتغير المحلي
  let scopeTest = 'القيمة المحلية المحمية';
  return scopeTest;
}

console.log('النتيجة بعد الخروج من TDZ:', testTDZ());`,
      output: `نتيجة الدالة المرفوعة: أهلاً بك يا أنس في عالم الرفع Hoisting!\nقيمة var قبل سطرها: undefined\nالنتيجة بعد الخروج من TDZ: القيمة المحلية المحمية`,
      mistakes: [
        {
          wrong: `// استدعاء دالة سهمية أو دالة معينة كمتغير قبل سطر تعريفها\ncalculate(5); // ❌ ReferenceError: Cannot access 'calculate' before initialization\nconst calculate = (x) => x * 10;`,
          correct: `// الدوال السهمية والدوال المسندة لمتغيرات تعامل كمتغيرات وتخضع لـ TDZ؛ يجب استدعاؤها بعد تعريفها دائماً\nconst calculate = (x) => x * 10;\ncalculate(5); // ✅ سليم ويعيد 50`,
          explanation: "الدوال السهمية تخزن داخل متغيرات (const أو let)؛ لذا لا تُرفع بكامل جسمها كالدوال التقليدية، وتظل غير متاحة حتى يتم تنفيذ سطر تعريفها."
        }
      ],
      bestPractices: [
        "لا تعتمد على الرفع أبداً في تنظيم كودك؛ اكتب كل الدوال والمتغيرات أولاً ثم استخدمها تالياً.",
        "تجنب var نهائياً؛ فرفعها بقيمة undefined يخلق أخطاء صامتة خبيثة يصعب اكتشافها.",
        "في مكونات React، عرف الـ Hooks والمساعدات في بداية المكون دائماً لضمان عدم الوقوع في أخطاء الـ TDZ."
      ],
      infographic: {
        title: "إنفوجرافيك: خريطة الرفع (Hoisting) وأنواع المتغيرات",
        concept: "Hoisting Behavior by Declaration Type",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 خريطة الرفع (Hoisting) في الذاكرة           │
└─────────────────────────────────────────────────────────────┘
  نوع الإعلان          ما الذي يُرفع للذاكرة؟      هل يمكن استخدامه قبل سطره؟
  ─────────────────────────────────────────────────────────────
  function foo() {}     الدالة بكامل جسمها         نعم بكل أمان ✅
  var x = 10;           يُرفع الاسم فقط كـ undefined نعم ولكن يعيد undefined ⚠️
  let / const y = 20;   يُحجز الاسم فقط            ممنوع تماماً (TDZ) ❌
  const fn = () => {}   يُعامل كـ const             ممنوع تماماً (TDZ) ❌`
      }
    },
    {
      id: "3.2.c",
      title: "Closures",
      englishTitle: "Closures: Lexical Scoping & State Preservation",
      definition: "الدالة المغلقة أو الحاضنة (Closure) هي دالة تتذكر وتحتفظ بإمكانية الوصول إلى المتغيرات الموجودة في نطاق والدها الخارجي (Lexical Scope) حتى بعد أن تنتهي دالة الوالد من التنفيذ وتغادر مكدس الاستدعاءات (Call Stack).",
      analogy: "تخيل طالباً سافر للدراسة في الخارج وترك منزل والديه؛ أخذ معه حقيبة سفر صغيرة وضع فيها 'مفاتيح بيت عائلته وذكرياتهم'. أينما يذهب حول العالم، يظل محتفظاً بالقدرة على استخدام تلك المفاتيح والوصول إلى تلك الذكريات رغم أن منزل والديه بعيد جداً!",
      why: "الـ Closure هو الأساس الهندسي لكل ما يجعل React تعمل! خطافات React الشهيرة مثل `useState` و `useEffect` مبنية كلياً على الـ Closures لتتذكر قيمة الحالة (State) بين عمليات إعادة التصيير دون أن تفقدها.",
      terms: [
        { term: "Closure", pronunciation: "كلوجر", meaning: "دالة حاضنة تحتفظ بمتغيرات محيطها الخارجي في الذاكرة" },
        { term: "Encapsulation", pronunciation: "إنكابسوليشن", meaning: "تغليف وحماية البيانات من التعديل الخارجي المباشر" },
        { term: "Call Stack Pop", pronunciation: "كول ستاك بوب", meaning: "خروج الدالة من مكدس الاستدعاء بعد انتهاء تنفيذها" }
      ],
      syntax: "function createCounter() {\n  let count = 0; // متغير خاص محمي داخل النطاق\n  return function() {\n    count++; // الـ Closure يحتفظ بهذا المتغير ولا يمحوه\n    return count;\n  };\n}",
      codeSimple: `// دالة تنشئ عداداً مغلقاً وخاصاً بالكامل
function makeCounter(startFrom = 0) {
  // متغير محلي محمي لا يمكن لأحد في الكود الخارجي لمسه مباشرة
  let current = startFrom;

  // إرجاع دالة سهمية تشكل Closure حول المتغير current
  return () => {
    current += 1;
    return current;
  };
}

// إنشاء عدادين مستقلين تماماً في الذاكرة
const counterA = makeCounter(10);
const counterB = makeCounter(100);

console.log('عداد أ الخطوة 1:', counterA());
console.log('عداد أ الخطوة 2:', counterA());
console.log('عداد ب الخطوة 1 (مستقل تماماً):', counterB());`,
      codeAdvanced: `// محاكاة حقيقية لكيفية عمل خطاف useState في React عبر الـ Closures
const ReactSimulator = (() => {
  // مصفوفة سرية لحفظ حالات المكونات في الذاكرة العامة
  let hooksState = [];
  let currentHookIndex = 0;

  return {
    // محاكاة خطاف useState
    useState(initialValue) {
      const hookIndex = currentHookIndex;
      // تهيئة الحالة إذا كانت هذه أول زيارة
      if (hooksState[hookIndex] === undefined) {
        hooksState[hookIndex] = initialValue;
      }

      // دالة التحديث تشكل Closure حول hookIndex المحدد
      const setState = (newValue) => {
        hooksState[hookIndex] = newValue;
      };

      currentHookIndex++;
      return [hooksState[hookIndex], setState];
    },

    // إعادة ضبط المؤشر قبل كل تصيير جديد للمكون
    resetIndex() {
      currentHookIndex = 0;
    }
  };
})();

// استخدام المحاكي تماماً مثل React!
const [score, setScore] = ReactSimulator.useState(50);
console.log('الحالة الأولية المخزنة عبر Closure:', score);
setScore(99);
ReactSimulator.resetIndex();
const [updatedScore] = ReactSimulator.useState(50);
console.log('الحالة المسترجعة بعد التحديث عبر الـ Closure:', updatedScore);`,
      output: `عداد أ الخطوة 1: 11\nعداد أ الخطوة 2: 12\nعداد ب الخطوة 1 (مستقل تماماً): 101\nالحالة الأولية المخزنة عبر Closure: 50\nالحالة المسترجعة بعد التحديث عبر الـ Closure: 99`,
      mistakes: [
        {
          wrong: `// خطأ شهير: حلقة for بـ var مع setTimeout يطبع نفس الرقم الأخير دائماً!\nfor (var i = 1; i <= 3; i++) {\n  setTimeout(() => console.log(i), 100); // ❌ سيطبع 4 ثلاث مرات لأن var نطاقها عام!\n}`,
          correct: `// استخدام let يولد سياقاً كتلياً مستقلاً (Block Scope) لكل دورة يشكل Closure منفصلاً\nfor (let i = 1; i <= 3; i++) {\n  setTimeout(() => console.log(i), 100); // ✅ يطبع: 1 ثم 2 ثم 3 كما هو متوقع\n}`,
          explanation: "المتغير var له نطاق وظيفي مشترك فيتشارك الجميع نفس المتغير، بينما let تنشئ متغير i جديداً ومغلقاً بـ Closure مستقل لكل تكرار في الحلقة."
        }
      ],
      bestPractices: [
        "استخدم الـ Closures لحماية المتغيرات الحساسة وإنشاء دوال الخصوصية وتوليد المعرفات الفريدة.",
        "احذر من ظاهرة الـ Stale Closures (الدوال التي تحتفظ بنسخة قديمة من الحالة) داخل خطافات React مثل useEffect و useCallback.",
        "تذكر أن الـ Closure يبقي المتغيرات في ذاكرة الرام؛ تجنب احتجاز كائنات ضخمة غير مستخدمة تفادياً لتسريب الذاكرة (Memory Leaks)."
      ],
      infographic: {
        title: "إنفوجرافيك: كيف يحتفظ الـ Closure ببياناته بعد انتهاء الدالة؟",
        concept: "Closure Memory Snapshot",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تشريح الـ Closure في ذاكرة الـ Heap          │
└─────────────────────────────────────────────────────────────┘
   function parent() {
     let secret = 'سري للغاية';   ──┐
     return function child() {    │  هنا تنشأ 'فقاعة الـ Closure'
       console.log(secret);       │  وتُحفظ في الذاكرة (Heap)
     };                          ──┘
   }
   
   const access = parent(); // انتهت الدالة parent وخرجت من الـ Stack!
   access(); // تظل الدالة child قادرة على قراءة 'سري للغاية' عبر فقاعة الـ Closure!`
      }
    },
    {
      id: "3.2.d",
      title: "Lexical Scope",
      englishTitle: "Lexical Scope & Scope Chain",
      definition: "النطاق المعجمي (Lexical Scope) يعني أن نطاق وصول الدالة إلى المتغيرات يتحدد بناءً على المكان الجغرافي الذي كُتبت فيه الدالة فعلياً داخل الكود المصدري أثناء تأليف البرنامج، وليس بناءً على المكان الذي تم استدعاؤها منه أثناء التشغيل.",
      analogy: "تخيل عمارة سكنية من عدة طوابق: إذا كنت تعيش في شقة في الطابق الثالث، فيمكنك النظر من نافذتك ورؤية فناء الطابق الثاني وفناء الشارع العام بالأسفل. لكن الجالس في الشارع لا يمكنه النظر إلى داخل غرفتك في الطابق الثالث! البحث عن المتغيرات يسير من الداخل إلى الخارج فقط.",
      why: "بدون فهم النطاق المعجمي وسلسلة النطاقات (Scope Chain)، ستواجه ألغازاً محيرة عند كتابة دوال متداخلة؛ فهو القاعدة الصارمة التي تحكم كيف يبحث محرك JavaScript عن المتغير المفقود من النطاق الداخلي صعوداً إلى النطاق العام.",
      terms: [
        { term: "Lexical Scope", pronunciation: "ليكسيكال سكوب", meaning: "النطاق المعجمي الثابت المعتمد على مكان كتابة الكود" },
        { term: "Scope Chain", pronunciation: "سكوب تشين", meaning: "سلسلة النطاقات؛ مسار البحث عن المتغير من الداخل إلى الخارج" },
        { term: "Outer Scope", pronunciation: "آوتر سكوب", meaning: "النطاق الخارجي الحاضن" },
        { term: "Shadowing", pronunciation: "شادوينغ", meaning: "حجب المتغير الخارجي بتعريف متغير محلي بنفس الاسم" }
      ],
      syntax: "const globalVar = 'عام';\n\nfunction outer() {\n  const outerVar = 'خارجي';\n  function inner() {\n    // تبحث الدالة أولاً في inner، ثم outer، ثم globalVar\n    console.log(globalVar, outerVar);\n  }\n}",
      codeSimple: `// متغير عام
const appName = 'منصة المطورين';

function firstLevel() {
  const level1 = 'المستوى 1';

  function secondLevel() {
    const level2 = 'المستوى 2';

    // قراءة متغيرات من كافة النطاقات المعجمية الخارجية
    console.log('قراءة من الداخل:', \`\${appName} > \${level1} > \${level2}\`);
  }

  secondLevel();
}

firstLevel();`,
      codeAdvanced: `// ظاهرة حجب المتغيرات (Variable Shadowing) في النطاق المعجمي
const userRole = 'زائر عام'; // متغير في النطاق العام

function authorizeAdmin() {
  // حجب المتغير العام بتعريف متغير محلي يحمل نفس الاسم تماماً
  const userRole = 'مدير نظام مسجل';

  function checkPermissions() {
    // محرك JavaScript يجد userRole في أول نطاق والد (authorizeAdmin) فيتوقف فوراً!
    console.log('الدور المستخدم للتحقق هو:', userRole);
  }

  checkPermissions();
}

authorizeAdmin();
console.log('المتغير العام الخارجي لم يتأثر بالحجب:', userRole);`,
      output: `قراءة من الداخل: منصة المطورين > المستوى 1 > المستوى 2\nالدور المستخدم للتحقق هو: مدير نظام مسجل\nالمتغير العام الخارجي لم يتأثر بالحجب: زائر عام`,
      mistakes: [
        {
          wrong: `// محاولة قراءة متغير محلي من النطاق الخارجي المعاكس\nfunction setup() {\n  const secretKey = 'XYZ_123';\n}\nsetup();\nconsole.log(secretKey); // ❌ ReferenceError: secretKey is not defined!`,
          correct: `// سلسلة النطاقات تسير باتجاه واحد فقط: من الداخل نحو الخارج؛ النطاق الخارجي لا يملك أي وصول للمتغيرات الداخلية\nfunction setup() {\n  const secretKey = 'XYZ_123';\n  return secretKey; // إرجاع القيمة صراحة\n}\nconst key = setup();\nconsole.log(key); // ✅ سليم`,
          explanation: "المتغيرات المحمية داخل الدوال تعيش وتموت داخل نطاقها المحلي؛ لا يمكن لأي كود في النطاق الخارجي قراءتها ما لم تُرجعها الدالة صراحة."
        }
      ],
      bestPractices: [
        "تجنب حجب المتغيرات (Shadowing) بتسميات متطابقة؛ استخدم أسماء مميزة لكل متغير لتفادي الارتباك البشري.",
        "احصر المتغيرات دائماً في أضيق نطاق ممكن (Principle of Least Privilege).",
        "تذكر أن مكان كتابة الدالة هو الذي يحدد نطاقها المعجمي، وليس مكان استدعائها أو تشغيلها."
      ],
      infographic: {
        title: "إنفوجرافيك: سلسلة النطاقات وسهم البحث باتجاه واحد",
        concept: "Scope Chain One-Way Lookup",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│           سلسلة النطاقات (Scope Chain) باتجاه واحد فقط       │
└─────────────────────────────────────────────────────────────┘
  النطاق العام (Global Scope):  const app = 'React';
      ▲
      │  (البحث يصعد للأعلى فقط)
  النطاق الخارجي (Outer Function): const count = 5;
      ▲
      │  (إذا لم يجد المتغير محلياً، يصعد خطوة لأعلى)
  النطاق الداخلي (Inner Function):  const local = true;
  
  قاعدة حديدية:
  الداخلي يرى الخارجي والعام ✅  |  العام لا يرى الداخلي أبداً ❌`
      }
    },
    {
      id: "3.2.e",
      title: "مفهوم this",
      englishTitle: "The 'this' Keyword: Dynamic Binding, call, apply, bind & Arrow Functions",
      definition: "كلمة this في JavaScript هي مرجع خاص يشير إلى 'الكائن الذي يستدعي الدالة حالياً'. على عكس النطاق المعجمي الثابت، تتحدد قيمة this في الدوال التقليدية ديناميكياً أثناء وقت التشغيل بناءً على كيفية استدعاء الدالة، بينما في الدوال السهمية ترث this النطاق الحاضن تلقائياً.",
      analogy: "تخيل كلمة 'أنا' في اللغة العربية: إذا قالها محمد فهي تعني محمداً، وإذا قالتها فاطمة فهي تعني فاطمة! كلمة 'أنا' (this) ليس لها معنى ثابت بذاتها، بل يعتمد معناها كلياً على الشخص الذي ينطق بها في تلك اللحظة.",
      why: "فهم this يحل كابوس التخبط الذي يعاني منه مبرمجو JavaScript الكلاسيكيون مع معالجات الأحداث (Event Handlers) ومؤقتات setTimeout، ويوضح لك الميزة العظمى للدوال السهمية في React التي حلت مشكلة ربط الدوال المعقدة (binding) بضربة واحدة.",
      terms: [
        { term: "this keyword", pronunciation: "ذيس كيوورد", meaning: "مرجع يشير للكائن صاحب السياق الحالي للدالة" },
        { term: "bind()", pronunciation: "بايند", meaning: "دالة تثبت قيمة this نهائياً وتعيد دالة جديدة معدلة" },
        { term: "call() & apply()", pronunciation: "كول وأبلاي", meaning: "استدعاء الدالة فوراً مع تحديد قيمة this ومعاملاتها صراحة" },
        { term: "Lexical this", pronunciation: "ليكسيكال ذيس", meaning: "وراثة this تلقائياً من النطاق المعجمي في الدوال السهمية" }
      ],
      syntax: "// 1. في كائن عادي\nconst obj = { name: 'عمر', show() { return this.name; } };\n\n// 2. التثبيت بـ bind\nconst boundFn = fn.bind(customContext);\n\n// 3. الدالة السهمية ترث this المحيطة ولا تنشئ this خاصة بها\nconst arrowFn = () => this.property;",
      codeSimple: `// كائن مستخدم يحتوي على دالة تقليدية
const developer = {
  name: 'خالد',
  title: 'مهندس واجهات',
  // دالة تقليدية: this تشير للكائن developer نفسه
  introduce() {
    return \`أنا \${this.name}، وأعمل كـ \${this.title}\`;
  }
};

console.log('استدعاء مباشر من الكائن:', developer.introduce());

// استخراج الدالة في متغير مستقل (يفقد سياق this!)
const looseIntro = developer.introduce;
// console.log(looseIntro()); // ستفشل وتطبع undefined لأن this ضاعت!

// تثبيت السياق صراحة باستخدام bind
const fixedIntro = developer.introduce.bind(developer);
console.log('بعد التثبيت باستخدام bind:', fixedIntro());`,
      codeAdvanced: `// مقارنة حاسمة: الدالة التقليدية مقابل الدالة السهمية داخل مؤقت
const timerApp = {
  counter: 0,

  // الطريقة القديمة (المعطوبة): الدالة التقليدية داخل setInterval تنشئ this جديدة عامة!
  startBroken() {
    setTimeout(function() {
      // this هنا تشير لكائن window/global وليس timerApp!
      console.log('العداد المعطوب:', this.counter); // يطبع: undefined
    }, 50);
  },

  // الطريقة الحديثة الرائعة (الدالة السهمية): ترث this من دالة startCorrect
  startCorrect() {
    setTimeout(() => {
      this.counter += 1;
      console.log('العداد الصحيح بالدالة السهمية:', this.counter); // يطبع: 1 بنجاح!
    }, 50);
  }
};

timerApp.startBroken();
timerApp.startCorrect();`,
      output: `استدعاء مباشر من الكائن: أنا خالد، وأعمل كـ مهندس واجهات\nبعد التثبيت باستخدام bind: أنا خالد، وأعمل كـ مهندس واجهات\nالعداد المعطوب: undefined\nالعداد الصحيح بالدالة السهمية: 1`,
      mistakes: [
        {
          wrong: `// استخدام دالة سهمية كدالة أصلية لكائن (Method) وتوقع أن تشير this للكائن\nconst user = {\n  score: 100,\n  getScore: () => this.score // ❌ خطأ: this في الدالة السهمية تشير للـ Window/Global!\n};`,
          correct: `// الدوال المباشرة للكائنات يجب أن تكون دوال تقليدية (Method Shorthand)\nconst user = {\n  score: 100,\n  getScore() { return this.score; } // ✅ سليم تماماً: this تشير لـ user\n};`,
          explanation: "الدوال السهمية ليس لها this خاصة بها، بل تلتقط this من النطاق الخارجي المحيط بها؛ لذلك لا تصلح كدوال رئيسية داخل الكائنات."
        }
      ],
      bestPractices: [
        "استخدم الدوال السهمية داخل الدوال الفرعية والمؤقتات وأحداث React للاستفادة من وراثة this التلقائية دون الحاجة لـ bind.",
        "استخدم صياغة الدوال المختصرة `method() {}` عند كتابة دوال الكائنات العادية.",
        "في مكونات React الوظيفية الحديثة (Functional Components)، لن تحتاج كلمة this تقريباً بفضل الدوال السهمية وخطافات React!"
      ],
      infographic: {
        title: "إنفوجرافيك: قواعد تحديد قيمة كلمة this في JavaScript",
        concept: "The 4 Rules of 'this' Binding",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 قواعد تحديد قيمة كلمة this الأربع            │
└─────────────────────────────────────────────────────────────┘
  1. الاستدعاء من كائن (obj.fn()):     this تشير للكائن obj نفسه ✅
  2. التثبيت الصريح (call/apply/bind): this تشير للكائن المحدد يدوياً 🎯
  3. كلمة new (new Person()):          this تشير للكائن الجديد المنشأ 🏗️
  4. الاستدعاء الحر (fn()):           this تشير للعام (Window) أو undefined
  
  قاعدة الدوال السهمية (=>):
  لا تتبع القواعد الأربع أعلاه إطلاقاً! بل ترث this من المحيط الذي كُتبت فيه`
      }
    },
    {
      id: "3.2.f",
      title: "Pass by Value و Object References",
      englishTitle: "Pass by Value vs Pass by Reference in Memory",
      definition: "في JavaScript، تُمرر وتُنسخ الأنواع البدائية (الأرقام، النصوص، البوليان) بالقيمة (Pass by Value)، مما يعني إنشاء نسخة رقمية مستقلة تماماً في الذاكرة. بينما تُمرر الكائنات والمصفوفات والدوال بالمرجع (Pass by Reference)، مما يعني نسخ عنوان الذاكرة فقط، ليشير كلا المتغيرين إلى نفس الكائن المشترك.",
      analogy: "تخيل أن لديك ملف Word:\n1. التمرير بالقيمة (Value): أرسلت لصديقك نسخة من الملف كملف مرفق في البريد. إذا فتح الملف وحذف كل الكلمات، فلن يتأثر ملفك الأصلي على حاسوبك إطلاقاً.\n2. التمرير بالمرجع (Reference): أرسلت لصديقك رابط مستند Google Docs المشترك. إذا دخل صديقك وحذف كلمة واحدة، ستختفي الكلمة أمام عينيك فوراً لأنكما تعملان على نفس الملف في السحابة!",
      why: "هذا المفهوم هو السر وراء 80% من أغرب أخطاء المبتدئين في React! عندما تعدل خاصية في كائن حالة (State) مباشرة، فإن React لن تدرك أن البيانات تغيرت لأن عنوان الذاكرة ظل ثابتاً، مما يؤدي لعدم تحديث الشاشة وتجمد الواجهة.",
      terms: [
        { term: "Pass by Value", pronunciation: "باس باي فاليو", meaning: "التمرير بالنسخ المستقل للقيمة الأصلية" },
        { term: "Pass by Reference", pronunciation: "باس باي ريفرنس", meaning: "التمرير بنسخ عنوان ومؤشر الذاكرة لكائن مشترك" },
        { term: "Memory Address / Pointer", pronunciation: "ميموري أدريس", meaning: "عنوان الخلية في ذاكرة الـ Heap التي يقيم فيها الكائن" },
        { term: "Mutation", pronunciation: "ميوتيشن", meaning: "التعديل المباشر على محتوى الكائن في نفس عنوان الذاكرة" }
      ],
      syntax: "// الأنواع البدائية (قيمة مستقلة)\nlet a = 10;\nlet b = a; // b أخذت نسخة؛ تغيير b لن يؤثر على a إطلاقاً\n\n// الكائنات (مرجع مشترك لنفس العنوان)\nconst user1 = { name: 'سامي' };\nconst user2 = user1; // نسخ العنوان فقط؛ تغيير user2 سيغير user1 فوراً!",
      codeSimple: `// 1. اختبار التمرير بالقيمة (الأنواع البدائية)
let originalPrice = 100;
let clonedPrice = originalPrice;
clonedPrice = 150; // تعديل النسخة

console.log('السعر الأصلي البدائي لم يتأثر:', originalPrice); // 100

// 2. اختبار التمرير بالمرجع (الكائنات والمصفوفات)
const settings = { darkMode: true };
const aliasSettings = settings; // كلاهما يشيران لنفس العنوان 0x01
aliasSettings.darkMode = false; // تعديل مباشر عبر المرجع

console.log('كائن الإعدادات الأصلي تم تخريبه وتغييره!:', settings.darkMode); // false!`,
      codeAdvanced: `// محاكاة لكارثة التعديل المباشر على حالة React (State Mutation Bug)
let reactState = {
  user: { id: 1, name: 'جميل', active: false }
};

// طريقة مدمرة وخاطئة في React:
function wrongToggleActive(state) {
  // تعديل الخاصية مباشرة في نفس عنوان الذاكرة
  state.user.active = true;
  return state; // يعيد نفس المرجع القديم؛ React تعتقد أنه لم يتغير شيء!
}

// الطريقة الصحيحة النقية (إنشاء كائن جديد تماماً بعنوان ذاكرة جديد):
function correctToggleActive(state) {
  return {
    ...state,
    user: {
      ...state.user,
      active: true // عنوان ذاكرة جديد يطلق إعادة التصيير في React بنجاح!
    }
  };
}

const newState = correctToggleActive(reactState);
console.log('هل تغير عنوان الذاكرة للكائن؟:', reactState !== newState);
console.log('الحالة الجديدة تم تحديثها بنقاء تام:', newState.user.active);`,
      output: `السعر الأصلي البدائي لم يتأثر: 100\nكائن الإعدادات الأصلي تم تخريبه وتغييره!: false\nهل تغير عنوان الذاكرة للكائن؟: true\nالحالة الجديدة تم تحديثها بنقاء تام: true`,
      mistakes: [
        {
          wrong: `// مقارنة كائنين ظاهرياً يحتويان على نفس البيانات بـ ===\nconst obj1 = { id: 1 };\nconst obj2 = { id: 1 };\nconsole.log(obj1 === obj2); // ❌ false! لأن محرك JS يقارن عناوين الذاكرة وليس المحتوى!`,
          correct: `// الكائنات تتساوى فقط إذا كانت تشير لنفس العنوان بالضبط في الذاكرة\nconst obj1 = { id: 1 };\nconst obj2 = obj1;\nconsole.log(obj1 === obj2); // ✅ true! كلاهما يشيران لنفس الكائن`,
          explanation: "المشغل === عند استخدامه مع الكائنات والمصفوفات يقارن العناوين في الذاكرة فقط (Reference Equality)؛ لذا حتى لو كان الكائنان متطابقين في كل حرف، فهما كائنان منفصلان فيزيائياً في الذاكرة."
        }
      ],
      bestPractices: [
        "لا تقم أبداً بتعديل كائن أو مصفوفة وصلتك كمعامل لدالة إلا إذا كان هذا هو الهدف الصريح والموثق للدالة.",
        "في React، عامل كل State كأنها حجر صلب غير قابل للكسر أو التعديل؛ انسخ بـ Spread وأنشئ مرجعاً جديداً دائماً.",
        "لعمل نسخ عميق (Deep Copy) يحمي الكائنات المتداخلة، استخدم الدالة القياسية الحديثة `structuredClone(obj)`."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة الذاكرة بين القيمة البدائية والمرجع",
        concept: "Stack vs Heap Memory Representation",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 الذاكرة: القيمة (Stack) مقابل المرجع (Heap)  │
└─────────────────────────────────────────────────────────────┘
  الأنواع البدائية (Primitive - Value):
  [ المتغير a: 100 ]   ──نسخ مستقل──>   [ المتغير b: 100 ]
  (تعديل b لا علاقة له بـ a)

  الكائنات والمصفوفات (Reference):
  [ المتغير user1 ] ──عنوان 0x88──┐
                                  ▼
                            { name: 'علي' } في الـ Heap
                                  ▲
  [ المتغير user2 ] ──عنوان 0x88──┘
  (أي تعديل في أحدهما يغير الآخر فوراً لأنهما نفس الكائن فيزيائياً!)`
      }
    },
    {
      id: "3.2.g",
      title: "البرمجة الوظيفية Functional Programming",
      englishTitle: "Functional Programming (FP) Fundamentals in Modern JS",
      definition: "البرمجة الوظيفية (Functional Programming: FP) هي نموذج وأسلوب برمجي يعتمد على بناء البرامج من خلال تجميع وتركيب دوال نقية وصغيرة، وتجنب تغيير الحالة العامة للبرنامج وتفادي تعديل البيانات في مكانها، واعتبار الدوال 'مواطنين من الدرجة الأولى' (First-Class Citizens).",
      analogy: "تخيل خط إنتاج في مصنع تعليب عصائر حديث: تمر علبة العصير على محطة أولى تغسل العلبة، ثم محطة ثانية تملؤها بالعصير، ثم محطة ثالثة تغلق الغطاء، ثم محطة رابعة تطبع التاريخ. كل محطة تنجز مهمة وظيفية محددة بدقة وتسلم العلبة للمحطة التالية دون أن تعبث بباقي مصنع الشركة!",
      why: "مكتبة React بأكملها تحولت بشكل كامل إلى نموذج البرمجة الوظيفية منذ إطلاق الـ React Hooks؛ فمكوناتك أصبحت مجرد دوال نقية تستقبل مدخلات (Props) وتعيد مخرجات (JSX)، وإتقان هذا الفكر يمنحك كوداً خالياً من التعقيد، فائق السهولة في الاختبار البرمجي، وقابلاً للتوسع دون خوف.",
      terms: [
        { term: "Functional Programming (FP)", pronunciation: "فانكشنال بروجرامينغ", meaning: "البرمجة الوظيفية؛ نموذج هندسي معتمد على الدوال" },
        { term: "First-Class Functions", pronunciation: "فيرست كلاس فانكشنز", meaning: "معاملة الدوال كأي متغير عادي (تمرر وتعاد وتخزن)" },
        { term: "Higher-Order Function (HOF)", pronunciation: "هاير أوردر فانكشن", meaning: "دالة تستقبل دالة أخرى كمعامل أو تعيد دالة" },
        { term: "Declarative Code", pronunciation: "ديكلاراتيف كود", meaning: "كتابة الكود بوصف 'ماذا نريد' بدلاً من أوامر 'كيف تفعل ذلك خطوة بخطوة'" }
      ],
      syntax: "// الدوال كمواطنين من الدرجة الأولى (يمكن تخزينها كمتغير)\nconst multiply = (x) => x * 2;\n\n// دالة عليا (HOF) تستقبل دالة وتطبقها\nconst transform = (fn, value) => fn(value);\n\ntransform(multiply, 10); // يعيد 20",
      codeSimple: `// الدوال مواطنون من الدرجة الأولى: يمكن تخزينها في مصفوفة وتمريرها
const double = (n) => n * 2;
const addTen = (n) => n + 10;

// مصفوفة من الدوال التحويلية
const pipeline = [double, addTen];

// تمرير رقم 5 عبر خط الإنتاج الوظيفي
let val = 5;
pipeline.forEach(fn => {
  val = fn(val);
});

console.log('القيمة الناتجة بعد خط الإنتاج الوظيفي:', val); // (5 * 2) + 10 = 20`,
      codeAdvanced: `// بناء دالة عليا شهيرة في البرمجة الوظيفية: دالة التركيب Compose / Pipe
const pipe = (...fns) => (initialValue) => 
  fns.reduce((acc, fn) => fn(acc), initialValue);

// دوال نقية صغيرة شديدة التخصص
const sanitizeText = (str) => str.trim().toLowerCase();
const removeSpecialChars = (str) => str.replace(/[^a-zA-Z0-9 ]/g, '');
const convertToSlug = (str) => str.split(' ').join('-');

// تركيب الدوال معاً لبناء مولد روابط ويب نظيف
const generateSlug = pipe(
  sanitizeText,
  removeSpecialChars,
  convertToSlug
);

const inputTitle = '   React 19 & Next.js: The Complete Guide!   ';
const slugUrl = generateSlug(inputTitle);

console.log('الرابط النظيف المولد بالبرمجة الوظيفية:', slugUrl);`,
      output: `القيمة الناتجة بعد خط الإنتاج الوظيفي: 20\nالرابط النظيف المولد بالبرمجة الوظيفية: react-19--nextjs-the-complete-guide`,
      mistakes: [
        {
          wrong: `// الاعتماد على متغير عام وتعديله داخل الدالة (أسلوب إجرائي مدمر)\nlet globalCounter = 0;\nfunction increment() {\n  globalCounter++; // ❌ تعديل حالة خارجية يجعل الدالة غير قابلة للتنبؤ!\n}`,
          correct: `// الأسلوب الوظيفي: الدالة تستقبل قيمة وتعيد قيمة جديدة دون المساس بالخارج\nfunction increment(current) {\n  return current + 1; // ✅ دالة وظيفية نقية يمكن اختبارها بسهولة في أي مكان\n}`,
          explanation: "البرمجة الوظيفية تمنع الدوال من العبث بالمتغيرات العامة أو تعديل الحالة خارج نطاقها، وتفضل تمرير البيانات كمعاملات وإرجاع نتائج جديدة."
        }
      ],
      bestPractices: [
        "قسم منطق تطبيقك إلى دوال صغيرة شديدة البساطة تنجز مهمة واحدة فقط وتتقنها.",
        "استخدم دوال المصفوفات الوظيفية (map, filter, reduce) بدلاً من حلقات for التقليدية.",
        "تذكر دائماً المعادلة الذهبية لـ React: `UI = f(state)` الواجهة هي مجرد ناتج دالة تستقبل الحالة وتعيد رسومات الشاشة."
      ],
      infographic: {
        title: "إنفوجرافيك: أعمدة البرمجة الوظيفية في JavaScript",
        concept: "The Pillars of Functional Programming",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 أعمدة البرمجة الوظيفية (FP Pillars)          │
└─────────────────────────────────────────────────────────────┘
  1. الدوال النقية (Pure Functions)    ──> نفس المدخلات تعطي دائماً نفس المخرجات
  2. عدم التعديل (Immutability)        ──> لا تعدل البيانات في مكانها؛ بل أنشئ نس Remove
  3. الدوال العليا (Higher-Order)      ──> دوال تستقبل دوال أخرى كمعاملات أو تعيدها
  4. تركيب الدوال (Function Composition) ──> ربط دوال صغيرة لبناء أنظمة خارقة`
      }
    },
    {
      id: "3.2.h",
      title: "الدوال النقية Pure Functions",
      englishTitle: "Pure Functions & Side Effects (Why React Demands Purity)",
      definition: "الدالة النقية (Pure Function) هي دالة تلتزم بشرطين صارمين دون أي تهاون: 1) إذا أُعطيت نفس المعاملات، فإنها تعيد دائماً نفس النتيجة المتوقعة بنسبة 100%. 2) ليس لها أي آثار جانبية (No Side Effects)، أي أنها لا تعدل أي متغير خارجي، ولا ترسل طلبات شبكة، ولا تتلاعب بـ DOM خارج نطاقها.",
      analogy: "تخيل آلة حاسبة جيب عادية: كلما كتبت `2 + 2` وضغطت يساوي، ستعطيك دائماً `4` في الصباح، وفي المساء، واليوم، وبعد 10 سنوات، ولن تفتح نافذة الغرفة أو ترسل رسالة سرية لجارك! هذه هي الدالة النقية.",
      why: "مكتبة React مبنية على افتراض مقدس: 'مكونات React يجب أن تكون دوالاً نقية'. إذا كان المكون غير نقي، فستشهد واجهتك وميضاً عشوائياً، وتكراراً للأزرار، وظهور بيانات قديمة، وفشل تام في آليات الذاكرة المؤقتة (Caching).",
      terms: [
        { term: "Pure Function", pronunciation: "بيور فانكشن", meaning: "دالة نقية متوقعة المخرجات وخالية من الآثار الجانبية" },
        { term: "Side Effect", pronunciation: "سايد إيفكت", meaning: "أثر جانبي؛ أي تفاعل مع العالم الخارجي خارج الدالة" },
        { term: "Deterministic", pronunciation: "ديترمينستك", meaning: "حتمية النتيجة وتطابقها التام لكل استدعاء" },
        { term: "Idempotent", pronunciation: "آيدمبوتنت", meaning: "القدرة على تشغيل الدالة ألف مرة دون تغيير حالة النظام" }
      ],
      syntax: "// دالة نقية 100% (تعتمد على مدخلاتها فقط ولا تمس أي شيء خارجي)\nfunction add(a, b) {\n  return a + b;\n}\n\n// دالة غير نقية (Impure) بسبب استخدام Math.random أو Date.now\nfunction getRandomId() {\n  return Math.random(); // تعيد ناتجاً مختلفاً في كل مرة!\n}",
      codeSimple: `// دالة نقية تماماً لحساب الضريبة
function calculateSalesTax(amount, taxRate = 0.15) {
  // نفس المدخلات ستعطي حتماً نفس المخرجات كل ثانية
  return amount * taxRate;
}

console.log('تشغيل 1:', calculateSalesTax(100)); // 15
console.log('تشغيل 2:', calculateSalesTax(100)); // 15 حتماً وللأبد!

// دالة غير نقية (تعتمد على ساعة الحاسوب الحالية)
function getGreeting() {
  const hour = new Date().getHours(); // أثر خارجي متغير
  return hour < 12 ? 'صباح الخير' : 'مساء الخير';
}`,
      codeAdvanced: `// مقارنة واقعية داخل فكر مكونات React
// سيناريو كائن قائمة مهام
const initialTodos = [
  { id: 1, text: 'تعلم JavaScript المتقدمة', done: false }
];

// دالة غير نقية خبيثة (Impure): تعدل المصفوفة الأصلية مباشرة بـ push!
function impureAddTodo(todos, newText) {
  todos.push({ id: 2, text: newText, done: false }); // ❌ أثر جانبي خرب المصفوفة الأصلية!
  return todos;
}

// دالة نقية مثالية لـ React (Pure): لا تلمس الأصل وتنشئ مصفوفة جديدة بنقاء تام
function pureAddTodo(todos, newText) {
  return [
    ...todos,
    { id: todos.length + 1, text: newText, done: false } // ✅ نقي 100%
  ];
}

const cleanTodoList = pureAddTodo(initialTodos, 'بناء مشروع React 19');
console.log('طول القائمة الأصلية لم يتغير (نقاء تام):', initialTodos.length);
console.log('القائمة الجديدة النقية تحتوي على:', cleanTodoList.length);`,
      output: `تشغيل 1: 15\nتشغيل 2: 15\nطول القائمة الأصلية لم يتغير (نقاء تام): 1\nالقائمة الجديدة النقية تحتوي على: 2`,
      mistakes: [
        {
          wrong: `// تغيير محتوى معامل الدالة مباشرة داخل الدالة\nfunction setUserName(user, newName) {\n  user.name = newName; // ❌ غير نقي! قام بتعديل الكائن الخارجي بالمرجع\n  return user;\n}`,
          correct: `// إرجاع كائن جديد بنسخ الأصلي مع التعديل\nfunction setUserName(user, newName) {\n  return { ...user, name: newName }; // ✅ نقي تماماً؛ الكائن الأصلي لم يُمس\n}`,
          explanation: "تعديل خصائص الكائنات الممررة كمعاملات هو أشهر أثر جانبي غير نقي، والحل هو دائماً استنساخ الكائن وإرجاع النسخة الجديدة."
        }
      ],
      bestPractices: [
        "اجعل مكونات React ودوال المعالجة الحسابية نقية دائماً؛ دع المدخلات تحدد المخرجات فقط.",
        "اعزل الآثار الجانبية (مثل جلب البيانات عبر fetch أو التعامل مع LocalStorage) في أماكن مخصصة مثل خطاف `useEffect`.",
        "تجنب استخدام `Math.random()` أو `Date.now()` داخل جسم مكونات React المباشرة أثناء التصيير."
      ],
      infographic: {
        title: "إنفوجرافيك: شروط الدالة النقية مقابل الآثار الجانبية",
        concept: "Pure Functions vs Side Effects",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 ميزان النقاء: الدالة النقية (Pure Function) │
└─────────────────────────────────────────────────────────────┘
  نفس المدخلات  ──> [ الدالة النقية ] ──> دائماً نفس المخرجات بنسبة 100%
                          │
                   ممنوع الآثار الجانبية:
                   ❌ لا تعديل على متغيرات عامة
                   ❌ لا طلبات شبكة أو Fetch بداخلها
                   ❌ لا تلاعب بـ DOM خارجي
                   ❌ لا استدعاءات عشوائية (Math.random)`
      }
    },
    {
      id: "3.2.i",
      title: "عدم تعديل البيانات Immutability",
      englishTitle: "Immutability: The Core Law of React State",
      definition: "مبدأ عدم التعديل المباشر (Immutability) ينص على أنه بمجرد إنشاء قيمة أو مصفوفة أو كائن في الذاكرة، فإنه لا ينبغي أبداً تعديل محتوياته الأصلية في مكانه (Mutation). وبدلاً من ذلك، عندما نريد تعديل أي شيء، نقوم بإنشاء نسخة جديدة تحتوي على التغييرات المطلوبة.",
      analogy: "تخيل أنك تكتب وصية قانونية في سجل المحكمة: إذا أردت تعديل بند في الوصية، لا يمسك القاضي ممحاة ويمسح الحبر القديم ويكتب فوقه، لأن ذلك يعتبر تزويراً! بدلاً من ذلك، يقوم بطباعة 'وثيقة ملحق جديدة' مؤرخة باليوم، مع الاحتفاظ بالأصل التاريخي سالماً.",
      why: "هو القانون الأقدس في مكتبة React! تعتمد React على مقارنة المراجع السطحية الخاطفة (Shallow Equality) لاكتشاف ما إذا كانت الحالة قد تغيرت لإعادة تصيير الواجهة. إذا قمت بتعديل الكائن في مكانه (Mutable)، سيظل عنوان الذاكرة متطابقاً ولن تدري React أنك غيرت شيئاً، فتتجمد الواجهة تماماً.",
      terms: [
        { term: "Immutability", pronunciation: "إيميُوتابيلتي", meaning: "مبدأ عدم التعديل المباشر على البيانات" },
        { term: "Mutation", pronunciation: "ميوتيشن", meaning: "التبديل أو التعديل المباشر في نفس عنوان الذاكرة" },
        { term: "Object.freeze()", pronunciation: "أوبجكت فريز", meaning: "دالة لتجميد الكائن ومنع إضافة أو تعديل خصائصه برمجياً" },
        { term: "State Reconciliation", pronunciation: "ستيت ريكونسيلييشن", meaning: "مطابقة ومقارنة الحالة القديمة بالجديدة في React" }
      ],
      syntax: "// 1. مصفوفات: استخدام filter بدلاً من splice\nconst newItems = items.filter(i => i.id !== removeId);\n\n// 2. كائنات: استخدام spread بدلاً من التعديل المباشر\nconst nextUser = { ...user, isVerified: true };",
      codeSimple: `// مصفوفة علامات دراسية
const grades = [85, 90, 78];

// طريقة مدمرة (Mutation): تعدل الأصل وتعتبر جريمة في React!
// grades.push(95); 

// الطريقة النقية غير المدمرة (Immutability):
const updatedGrades = [...grades, 95];

console.log('المصفوفة القديمة بقيت سليمة 100%:', grades);
console.log('المصفوفة الجديدة تحتوي على التعديل المطلوب:', updatedGrades);`,
      codeAdvanced: `// تحديث حالة معقدة متداخلة لمستخدم في تطبيق React
const appState = {
  theme: 'dark',
  account: {
    username: 'dev_hero',
    preferences: {
      newsletter: true,
      soundVolume: 80
    }
  }
};

// تعديل خاصية عميقة soundVolume بنقاء تام دون المساس بأي كائن أب
const nextAppState = {
  ...appState,
  account: {
    ...appState.account,
    preferences: {
      ...appState.account.preferences,
      soundVolume: 20 // التعديل في أعمق مستوى بنسخ نظيف
    }
  }
};

// إثبات النقاء ومقارنة عناوين الذاكرة
console.log('هل تغير الكائن الجذري بالكامل؟:', appState !== nextAppState); // true
console.log('هل بقي الثيم غير المتأثر كما هو؟:', appState.theme === nextAppState.theme); // true
console.log('مستوى الصوت الجديد:', nextAppState.account.preferences.soundVolume);`,
      output: `المصفوفة القديمة بقيت سليمة 100%: [ 85, 90, 78 ]\nالمصفوفة الجديدة تحتوي على التعديل المطلوب: [ 85, 90, 78, 95 ]\nهل تغير الكائن الجذري بالكامل؟: true\nهل بقي الثيم غير المتأثر كما هو؟: true\nمستوى الصوت الجديد: 20`,
      mistakes: [
        {
          wrong: `// استخدام دوال المصفوفات المدمرة مثل splice أو sort أو reverse مباشرة على الحالة في React\nstate.items.sort(); // ❌ تدمر ترتيب المصفوفة في الذاكرة وتمنع React من اكتشاف التغيير!\nstate.items.splice(0, 1); // ❌ تحذف العنصر في نفس المكان!`,
          correct: `// إنشاء نسخة أولاً ثم التعديل عليها، أو استخدام الدوال الحديثة toSorted و toReversed\nconst sortedItems = [...state.items].sort(); // ✅ سليم\nconst filtered = state.items.filter((_, idx) => idx !== 0); // ✅ سليم`,
          explanation: "دوال sort و splice و reverse تعدل المصفوفة في نفس عنوان الذاكرة وتخرب مبدأ الـ Immutability، والحل هو نسخ المصفوفة أولاً بـ Spread قبل إجراء أي تعديل."
        }
      ],
      bestPractices: [
        "اعتمد دائماً على دوال المصفوفات غير المدمرة: map و filter و slice و concat.",
        "استخدم ميزات JavaScript الحديثة مثل `toSorted()` و `toReversed()` التي تعيد مصفوفات جديدة تلقائياً.",
        "في التطبيقات الضخمة المعقدة، يمكنك الاستعانة بمكتبات شهيرة مثل Immer لتسهيل كتابة الكود غير المدمر."
      ],
      infographic: {
        title: "إنفوجرافيك: دوال المصفوفات المدمرة مقابل الدوال غير المدمرة",
        concept: "Mutating vs Non-Mutating Array Methods",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│             دوال المصفوفات: المدمرة (احذرها) مقابل النقية    │
└─────────────────────────────────────────────────────────────┘
  ❌ دوال مدمرة (تعدل الأصل في مكانه وتفسد React):
  • push() / pop()      (إضافة وحذف في النهاية)
  • shift() / unshift() (إضافة وحذف في البداية)
  • splice()            (حذف وإدراج في الوسط)
  • sort() / reverse()  (ترتيب وقلب العناصر)

  ✅ دوال نقية آمنة لـ React (تنشئ مصفوفة جديدة كلياً):
  • map()               (تحويل العناصر)
  • filter()            (تصفية العناصر)
  • concat() / [...arr] (دمج وإضافة العناصر)
  • slice()             (استخراج جزء دون مساس بالأصل)`
      }
    },
    {
      id: "3.2.j",
      title: "الفرق بين Shallow Equality و Deep Equality",
      englishTitle: "Shallow Equality vs Deep Equality in React Performance",
      definition: "المساواة السطحية (Shallow Equality) تقارن فقط عناوين الذاكرة للمستوى الأول من الكائن دون فحص خصائصه الداخلية؛ وهي سريعة وخفيفة جداً. بينما المساواة العميقة (Deep Equality) تقوم بفحص كل خاصية وكل كائن متداخل في الأعماق بشكل تكراري؛ وهي مكلفة وبطيئة مع الكائنات الضخمة.",
      analogy: "تخيل فحص سيارتين في جمرك المطار:\n1. الفحص السطحي (Shallow): يقف الموظف وينظر لرقم لوحة السيارة فقط؛ إذا اختلف الرقم عرف في ثانية واحدة أنها سيارة مختلفة وانتهى الفحص.\n2. الفحص العميق (Deep): يقوم الموظف بتفكيك السيارة بالكامل برغياً برغياً وفحص كل قطعة ومقارنتها بالسيارة الأخرى للتأكد من تطابق كل جرام! عملية دقيقة جداً لكنها تستغرق ساعات طويلة.",
      why: "هذا هو سر سرعة React الخارقة وسر أدوات تحسين الأداء مثل `React.memo` و `useMemo` و `useCallback`! تستخدم React المساواة السطحية الفائقة السرعة لمقارنة الـ Props والـ State، فإذا وجد عنوان ذاكرة جديد أعادت تصيير المكون فوراً.",
      terms: [
        { term: "Shallow Equality", pronunciation: "شالو إيكواليتي", meaning: "المساواة السطحية بفحص عناوين الذاكرة والمستوى الأول فقط" },
        { term: "Deep Equality", pronunciation: "ديب إيكواليتي", meaning: "المساواة العميقة بفحص كافة الخصائص المتداخلة بالكامل" },
        { term: "Referential Equality", pronunciation: "ريفرنشال إيكواليتي", meaning: "تطابق عنوان المرجع في الذاكرة باستخدام المشغل ===" },
        { term: "Re-render Optimization", pronunciation: "ري ريندر أوبتيميزيشن", meaning: "تحسين وتفادي إعادة التصيير غير الضرورية" }
      ],
      syntax: "// مقارنة سطحية بالمرجع (تستغرق جزءاً من الميكروثانية)\nconst isShallowSame = prevProps === nextProps;\n\n// محاكاة لمقارنة عميقة\nconst isDeepSame = JSON.stringify(objA) === JSON.stringify(objB);",
      codeSimple: `// كائنان متطابقان تماماً في البيانات لكنهما في مكانين مختلفين في الذاكرة
const item1 = { id: 1, title: 'كتاب' };
const item2 = { id: 1, title: 'كتاب' };

// مقارنة سطحية (Shallow): تفحص العنوان فقط
console.log('مقارنة سطحية (===):', item1 === item2); // false!

// مقارنة عميقة (Deep) بفحص المحتوى
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log('مقارنة عميقة بمطابقة المحتوى:', deepEqual(item1, item2)); // true!`,
      codeAdvanced: `// محاكاة لآلية فحص React.memo السطحي للمكونات
function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) return true;
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

// اختبار محاكاة لـ Props في React
const prevProps = { user: 'سارة', config: { theme: 'dark' } };
// إنشاء كائن جديد للـ config رغم أن بياناته متطابقة!
const nextProps = { user: 'سارة', config: { theme: 'dark' } };

console.log('هل تعتبر React الـ Props متطابقة سطحياً؟:', shallowEqual(prevProps, nextProps));
// الناتج false! لأن prevProps.config و nextProps.config هما كائنان مختلفان في الذاكرة، مما سيعيد تصيير المكون!`,
      output: `مقارنة سطحية (===): false\nمقارنة عميقة بمطابقة المحتوى: true\nهل تعتبر React الـ Props متطابقة سطحياً؟: false`,
      mistakes: [
        {
          wrong: `// تعريف كائنات أو دوال جديدة مضمنة (inline) داخل JSX في كل تصيير\n// <MyComponent style={{ color: 'red' }} onClick={() => doSomething()} />\n// ❌ هذا ينشئ كائناً جديداً ودالة جديدة بعنوان مختلف في كل ثانية، مما يبطل مفعول React.memo!`,
          correct: `// تثبيت المراجع باستخدام useMemo للكائنات و useCallback للدوال\n// const cachedStyle = useMemo(() => ({ color: 'red' }), []);\n// const cachedClick = useCallback(() => doSomething(), []);`,
          explanation: "كتابة الكائنات والدوال المضمنة داخل JSX تولد مراجع جديدة في كل تصيير، مما يفشل الفحص السطحي لـ React ويؤدي لإعادة تصيير غير ضرورية."
        }
      ],
      bestPractices: [
        "افهم دائماً أن React تقارن سطحياً فقط؛ لذلك فإن إنشاء كائن جديد بـ Spread يحدث الواجهة بنجاح وبأقصى سرعة.",
        "استخدم `useMemo` و `useCallback` فقط عندما تكون تكلفة إعادة تصيير المكون الأبناء باهظة فعلياً.",
        "تجنب المقارنة العميقة عبر `JSON.stringify` في الكود المتكرر، لأنها تهدر طاقة المعالج وتفشل مع الدوال والقيم undefined."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة حاسمة بين المساواة السطحية والعميقة",
        concept: "Shallow vs Deep Equality Mechanics",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المساواة السطحية (Shallow) مقابل العميقة (Deep) │
└─────────────────────────────────────────────────────────────┘
  المساواة السطحية (Shallow Equality) - خيار React الافتراضي:
  • كيف تعمل؟   تقارن عناوين الذاكرة والمستوى الأول فقط (===)
  • السرعة:      فائقة الصاروخية (O(1) أو O(N) للمستوى الأول)
  • الهدف:       اكتشاف التغييرات فوراً دون إبطاء المتصفح

  المساواة العميقة (Deep Equality):
  • كيف تعمل؟   تدخل في كل كائن ومصفوفة متداخلة لمطابقة كل قيمة
  • السرعة:      بطيئة ومكلفة حسابياً (O(N) في العمق)
  • التكلفة:     قد تجمد التطبيق مع هياكل البيانات الشجرية الضخمة`
      }
    }
  ],
  quiz: [
    {
      id: "q3.2.1",
      question: "ما هو التعريف الدقيق للدالة المغلقة (Closure) في JavaScript؟",
      options: [
        "دالة لا يمكن استدعاؤها إلا مرة واحدة فقط ثم تُحذف تلقائياً من الذاكرة.",
        "دالة تحتفظ بإمكانية الوصول إلى متغيرات نطاقها الخارجي حتى بعد انتهاء تنفيذ دالة الوالد وخروجها من الـ Stack.",
        "دالة خالية من أي مدخلات ولا تعيد أي مخرجات للمستخدم.",
        "طريقة قديمة لكتابة الشروط والحلقات التكرارية قبل ظهور ES6."
      ],
      correctAnswer: 1,
      explanation: "الـ Closure هو الميزة التي تسمح للدالة بتذكر واحتجاز متغيرات بيئتها الحاضنة (Lexical Scope) في الذاكرة حتى بعد انتهاء دالة الوالد تماماً."
    },
    {
      id: "q3.2.2",
      question: "لماذا تصر مكتبة React على مبدأ عدم تعديل البيانات (Immutability) عند تحديث الحالة (State)؟",
      options: [
        "لأن تعديل الكائنات في مكانها يغير لون شاشة المتصفح إلى الأسود.",
        "لأن محركات الويب لا تدعم الكائنات المصفوفية بعد عام 2020.",
        "لأن React تعتمد على المقارنة السطحية السريعة للمراجع (Shallow Equality)؛ وتعديل الكائن في مكانه يبقي نفس المرجع فلا تدرك React حدوث التغيير.",
        "لأن لغة JavaScript تحذف أي متغير يتم تعديله أكثر من ثلاث مرات."
      ],
      correctAnswer: 2,
      explanation: "تعتمد React على المقارنة السطحية الفائقة السرعة؛ وإذا عدلت الكائن في مكانه سيظل عنوان الذاكرة متطابقاً، مما يجعل React تعتقد أنه لا يوجد أي تغيير وتتجاهل تحديث الشاشة."
    },
    {
      id: "q3.2.3",
      question: "أي من العبارات التالية تصف الدالة النقية (Pure Function) بشكل صحيح؟",
      options: [
        "دالة تعيد قيماً مختلفة في كل مرة لزيادة التنوع في واجهة المستخدم.",
        "دالة تعيد دائماً نفس النتيجة إذا أُعطيت نفس المعاملات، وليس لها أي آثار جانبية (No Side Effects).",
        "دالة تقوم بتغيير المتغيرات العامة وتحديث قواعد البيانات بشكل مباشر.",
        "دالة لا يمكن تشغيلها إلا في متصفح Google Chrome فقط."
      ],
      correctAnswer: 1,
      explanation: "الدالة النقية حتمية تماماً: نفس المدخلات تعطي حتماً نفس المخرجات، ولا تلمس أو تعدل أي شيء خارج نطاقها إطلاقاً."
    }
  ],
  exercise: {
    title: "تمرين عملي: بناء محرك إدارة حالة بنمط البرمجة الوظيفية وعدم التعديل المباشر",
    description: "المطلوب بناء دالة نقية (Reducer Function) تدير سلة مشتريات تطبيق تجارة إلكترونية بنقاء تام (Immutability). تستقبل الدالة الحالة الحالية وكائن الإجراء (Action)، وتدعم ثلاثة إجراءات: إضافة منتج جديد (ADD_ITEM)، تعديل الكمية (UPDATE_QTY)، وحذف منتج (REMOVE_ITEM) دون أي تعديل مباشر على المصفوفة الأصلية.",
    starterCode: `// الحالة الابتدائية للسلة
const cartState = {
  items: [
    { id: 1, name: 'فأرة مريحة', price: 40, qty: 1 }
  ],
  coupon: null
};

// دالة نقية لإدارة الحالة
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // المطلوب: إضافة المنتج للمصفوفة بأسلوب غير مدمر (Spread)
      break;
    case 'UPDATE_QTY':
      // المطلوب: تعديل كمية المنتج بدالة map النقية
      break;
    case 'REMOVE_ITEM':
      // المطلوب: حذف المنتج بدالة filter النقية
      break;
    default:
      return state;
  }
}`,
    hints: [
      "في ADD_ITEM: استخدم Spread لنسخ الكائن العام ثم نسخ مصفوفة العناصر: `items: [...state.items, action.payload]`",
      "في UPDATE_QTY: استخدم `state.items.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)`",
      "في REMOVE_ITEM: استخدم `state.items.filter(item => item.id !== action.payload.id)`"
    ],
    solution: `// الحالة الابتدائية للسلة
const cartState = {
  items: [
    { id: 1, name: 'فأرة مريحة', price: 40, qty: 1 }
  ],
  coupon: null
};

// الدالة النقية الاحترافية المتبعة في Redux و useReducer
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      // 1. إضافة منتج بنقاء تام عبر Spread
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    }

    case 'UPDATE_QTY': {
      // 2. تحديث الكمية بدالة map التي تعيد مصفوفة جديدة كلياً
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.id 
            ? { ...item, qty: action.payload.qty } 
            : item
        )
      };
    }

    case 'REMOVE_ITEM': {
      // 3. حذف المنتج بدالة filter غير المدمرة
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    }

    default:
      return state;
  }
}

// اختبار الإجراءات
const stateAfterAdd = cartReducer(cartState, {
  type: 'ADD_ITEM',
  payload: { id: 2, name: 'لوحة مفاتيح', price: 90, qty: 1 }
});

const stateAfterUpdate = cartReducer(stateAfterAdd, {
  type: 'UPDATE_QTY',
  payload: { id: 1, qty: 3 }
});

const finalState = cartReducer(stateAfterUpdate, {
  type: 'REMOVE_ITEM',
  payload: { id: 2 }
});

console.log('الحالة الأصلية بقيت عذراء سالمة:', cartState.items.length); // 1
console.log('الحالة النهائية بعد التعديل النقي:', finalState.items);`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: الدماغ الخفي لـ JavaScript والأساس الهندسي لـ React",
    badge: "مفاهيم النخبة البرمجية",
    summary: "الفرق بين المبرمج الهاوي والمحترف هو فهم كواليس اللغة: سياق التنفيذ، الـ Closures، عدم التعديل المباشر، والدوال النقية. هذا الفهم هو الذي يجعل React منطقية وبديهية وممتعة.",
    points: [
      "Execution Context: ينظم الذاكرة بمرحلتي الإنشاء ثم التنفيذ.",
      "Hoisting & TDZ: يرفع الدوال التقليدية ويحجز let/const في منطقة أمان.",
      "Closures: الدوال المغلقة التي تتذكر متغيرات والدها وتدير خطافات React.",
      "Lexical Scope: مكان كتابة الكود هو الذي يحكم صلاحيات الوصول.",
      "Pass by Value & Reference: الأرقام تُنسخ؛ الكائنات تتشارك العنوان.",
      "Pure Functions & Immutability: الركيزة المطلقة لسرعة وموثوقية React 19."
    ]
  }
};
