// src/data/sections/section3/topic3.js
// الموضوع 3: البرمجة غير المتزامنة (Asynchronous JavaScript & APIs)

export const SECTION_3_TOPIC_3 = {
  id: "3.3",
  title: "البرمجة غير المتزامنة",
  englishTitle: "Asynchronous JavaScript & Network APIs",
  description: "فن التعامل مع الوقت والشبكة دون تجميد المتصفح: حلقة الأحداث Event Loop، مكدس الاستدعاءات Call Stack، الوعود Promises، الصياغة الساحرة async/await، إرسال واستقبال بيانات الـ APIs بـ Fetch، وإلغاء الطلبات بـ AbortController.",
  icon: "Clock",
  subtopics: [
    {
      id: "3.3.a",
      title: "مفهوم Synchronous و Asynchronous",
      englishTitle: "Synchronous vs Asynchronous: Blocking vs Non-Blocking",
      definition: "البرمجة المتزامنة (Synchronous) تعني تنفيذ الأوامر بالترتيب واحداً تلو الآخر؛ حيث ينتظر السطر التالي اكتمال السطر الحالي حتى لو استغرق وقتاً طويلاً (حظر التنفيذ Blocking). بينما البرمجة غير المتزامنة (Asynchronous) تسمح للمتصفح ببدء مهمة طويلة (مثل تحميل صورة أو جلب بيانات من خادم) في الخلفية، ومواصلة تنفيذ باقي الأوامر فوراً دون تجميد واجهة المستخدم (Non-Blocking).",
      analogy: "تخيل طابورين في مطعم:\n1. الطابور المتزامن (Sync): يطلب الزبون وجبة تأخذ 20 دقيقة للطهي، ويقف عند شباك الدفع يحدق في الطباخ، ويقف خلفه 50 زبوناً متجمدين في الشارع ينتظرونه حتى يستلم وجبته!\n2. الطابور غير المتزامن (Async): يطلب الزبون ويدفع ويأخذ 'جهاز تنبيه يهتز' (Buzzer) ويجلس على طاولته، بينما يتقدم الزبائن الآخرون لطلب وجباتهم دون ثانية واحدة من التعطيل. عندما تجهز الوجبة، يهتز الجهاز ويستلمها بهدوء.",
      why: "لغة JavaScript تعمل في المتصفح على مسار معالجة واحد فقط (Single-Threaded). إذا جعلت طلب الشبكة متزامناً، فستتجمد الشاشة تماماً ولن يتمكن المستخدم من النقر على أي زر أو التمرير بالصفحة حتى يكتمل الطلب!",
      terms: [
        { term: "Synchronous (Sync)", pronunciation: "سينكرونس", meaning: "متزامن؛ تنفيذ ترتيبي حاظر للتنفيذ" },
        { term: "Asynchronous (Async)", pronunciation: "إيسينكرونس", meaning: "غير متزامن؛ تنفيذ في الخلفية غير حاظر للواجهة" },
        { term: "Blocking", pronunciation: "بلوكينغ", meaning: "حظر وتجميد مسار التنفيذ بانتظار مهمة بطيئة" },
        { term: "Non-Blocking", pronunciation: "نان بلوكينغ", meaning: "عدم حظر الواجهة ومواصلة تشغيل الكود بسلاسة" },
        { term: "Single-Threaded", pronunciation: "سينجل ثريديد", meaning: "محرك أحادي المسار ينفذ أمراً واحداً فقط في كل لحظة" }
      ],
      syntax: "// 1. كود متزامن (يُنفذ فوراً بالترتيب)\nconsole.log('أولاً');\nconsole.log('ثانياً');\n\n// 2. كود غير متزامن (يُفوض للمتصفح ويُنفذ لاحقاً)\nsetTimeout(() => console.log('مهمة غير متزامنة انتهت!'), 1000);",
      codeSimple: `// توضيح ترتيب التنفيذ المدهش في JavaScript
console.log('1. بداية البرنامج (متزامن)');

// مهمة غير متزامنة مجدولة بعد ثانية واحدة (1000ms)
setTimeout(() => {
  console.log('2. استجابة المؤقت غير المتزامن (في الخلفية)');
}, 1000);

// أمر متزامن يُنفذ فوراً قبل انتهاء المؤقت!
console.log('3. نهاية البرنامج (متزامن)');`,
      codeAdvanced: `// محاكاة لمحاولة محاكاة كود متزامن حاظر للتنفيذ (تجنب هذا دائماً!)
console.log('⏰ بدء مهمة محاكاة التحميل...');

// دالة غير متزامنة باستخدام الوعد ومؤقت المتصفح
function simulateServerFetch(dataName, delayMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(\`تم استلام \${dataName} بنجاح!\`);
    }, delayMs);
  });
}

// إطلاق عدة مهام غير متزامنة دون تجميد التطبيق
simulateServerFetch('بيانات المستخدم', 800).then(res => console.log('وصل الرد 1:', res));
simulateServerFetch('قائمة المنتجات', 400).then(res => console.log('وصل الرد 2 (أسرع):', res));

console.log('🚀 واجهة المستخدم حرة وسلسة وتستقبل نقرات الزوار الآن!');`,
      output: `1. بداية البرنامج (متزامن)\n3. نهاية البرنامج (متزامن)\n⏰ بدء مهمة محاكاة التحميل...\n🚀 واجهة المستخدم حرة وسلسة وتستقبل نقرات الزوار الآن!\nوصل الرد 2 (أسرع): تم استلام قائمة المنتجات بنجاح!\nوصل الرد 1: تم استلام بيانات المستخدم بنجاح!\n2. استجابة المؤقت غير المتزامن (في الخلفية)`,
      mistakes: [
        {
          wrong: `// افتراض أن setTimeout بقيمة 0 ثانية سينفذ متزامناً فوراً!\nsetTimeout(() => console.log('داخل المؤقت'), 0);\nconsole.log('خارج المؤقت'); // ❌ ظن المبرمج أن المؤقت يطبع أولاً لأن وقته 0!`,
          correct: `// setTimeout يذهب دائماً لطابور المهام (Task Queue) ولا ينفذ إلا بعد تفريغ كل الكود المتزامن بالكامل\n// الترتيب الحتمي دائماً:\n// 1. خارج المؤقت\n// 2. داخل المؤقت`,
          explanation: "حتى لو حددت التأخير بـ 0 مللي ثانية، يُفوض الأمر لمحرك الـ Web APIs ويذهب لطابور المهام ولا يدخل الـ Call Stack إلا بعد انتهاء السطر الأخير من الكود المتزامن."
        }
      ],
      bestPractices: [
        "اجعل كل العمليات البطيئة (طلبات الشبكة، قراءة الملفات، المؤقتات) غير متزامنة دائماً.",
        "في React، أظهر للمستخدم مؤشر تحميل مرئي (Spinner / Skeleton) أثناء انتظار العمليات غير المتزامنة لتفادي شعوره بتجمد الصفحة.",
        "تذكر أن JavaScript تعمل بمسار واحد؛ لا تكتب حلقات تكرارية عملاقة غير متزامنة تؤخر معالجة الرسوم."
      ],
      infographic: {
        title: "إنفوجرافيك: مقارنة التنفيذ المتزامن وغير المتزامن في المتصفح",
        concept: "Sync vs Async Execution Flow",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 المتزامن (Sync) مقابل غير المتزامن (Async)   │
└─────────────────────────────────────────────────────────────┘
  المتزامن (Blocking):
  أمر 1 ──> [ انتظار طلب الشبكة 5 ثواني... ⏳ ] ──> أمر 2 (الواجهة متجمدة!)
  
  غير المتزامن (Non-Blocking):
  أمر 1 ──> إطلاق طلب الشبكة في الخلفية ──> أمر 2 ──> تفاعل المستخدم سليم!
                   │
                   ▼ (بعد 5 ثواني)
            وصول البيانات وتحديث الشاشة بهدوء`
      }
    },
    {
      id: "3.3.b",
      title: "Event Loop",
      englishTitle: "The Event Loop: Microtasks, Macrotasks & Web APIs",
      definition: "حلقة الأحداث (Event Loop) هي الآلية الذكية والسر الأكبر في معمارية JavaScript التي تسمح لها بأداء مهام غير متزامنة خارقة رغم كونها لغة ذات مسار واحد (Single-Threaded). تراقب حلقة الأحداث مكدس الاستدعاءات (Call Stack)، وفور أن يصبح فارغاً، تقوم بسحب المهام المنتظرة من طابور المهام الدقيقة (Microtasks كـ Promises) ثم طابور المهام الكبيرة (Macrotasks كـ setTimeout) وتدفعها للتنفيذ.",
      analogy: "تخيل شرطي مرور ذكياً يقف عند تقاطع طرق:\n1. الشارع الرئيسي (Call Stack): طالما تسير فيه سيارات، يمنع أي سيارة من الشوارع الجانبية من الدخول.\n2. سيارات الطوارئ (Microtasks - Promises): بمجرد أن يفرغ الشارع الرئيسي، يفتح الإشارة لسيارات الإسعاف أولاً لأنها ذات أولوية قصوى!\n3. السيارات العادية (Macrotasks - setTimeout): بعد عبور سيارات الإسعاف، يسمح للسيارات العادية بالمرور تباعاً.",
      why: "فهم الـ Event Loop هو العلامة الفارقة لمهندس الواجهات المحترف؛ فهو يفسر لك بدقة أولويات تنفيذ العمليات، ولماذا تُنفذ نتائج الـ Promise قبل مؤقتات setTimeout حتى لو كانت بنفس التوقيت، وكيف تضمن بقاء واجهة React سريعة التجاوب.",
      terms: [
        { term: "Event Loop", pronunciation: "إيفنت لوب", meaning: "حلقة الأحداث؛ المنسق الأبدي بين مكدس الذاكرة وطوابير الانتظار" },
        { term: "Microtask Queue", pronunciation: "مايكرو تاسك كيو", meaning: "طابور المهام الدقيقة ذو الأولوية القصوى (مثل Promises)" },
        { term: "Macrotask Queue (Task Queue)", pronunciation: "ماكرو تاسك كيو", meaning: "طابور المهام العادية (مثل setTimeout و أحداث DOM)" },
        { term: "Web APIs", pronunciation: "ويب إيه بي آيز", meaning: "خدمات المتصفح الخارجية المتعددة المسارات (المؤقتات والشبكة)" }
      ],
      syntax: "// أولوية التنفيذ الحتمية في الـ Event Loop:\n// 1. الكود المتزامن المباشر (Call Stack)\n// 2. الوعود والمهام الدقيقة (Microtasks: Promise.then)\n// 3. المؤقتات والمهام الكبيرة (Macrotasks: setTimeout)",
      codeSimple: `// اختبار الأولويات الشهير في مقابلات العمل التقنية
console.log('1. متزامن مباشر');

setTimeout(() => {
  console.log('2. مؤقت Macrotask (أولوية ثانوية)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. وعد Microtask (أولوية عليا قبل المؤقت!)');
});

console.log('4. متزامن مباشر أخير');`,
      codeAdvanced: `// محاكاة تسلسل العمليات الكامل في محرك الـ Event Loop
console.log('🏁 انطلاق سيناريو المتصفح');

// 1. مؤقت عادي
setTimeout(() => {
  console.log('⏳ مؤقت setTimeout رقم 1 نفذ');
  
  // وعد مولد داخل مؤقت
  Promise.resolve().then(() => {
    console.log('⚡ وعد تم حله داخل المؤقت مباشرة!');
  });
}, 0);

// 2. سلسلة وعود فورية
Promise.resolve()
  .then(() => {
    console.log('🎯 وعد رئيسي رقم 1');
    return 'بيانات جاهزة';
  })
  .then((data) => {
    console.log('🎯 وعد رئيسي رقم 2 استلم:', data);
  });

console.log('🛑 نهاية الكود المتزامن الأساسي');`,
      output: `1. متزامن مباشر\n4. متزامن مباشر أخير\n3. وعد Microtask (أولوية عليا قبل المؤقت!)\n2. مؤقت Macrotask (أولوية ثانوية)\n🏁 انطلاق سيناريو المتصفح\n🛑 نهاية الكود المتزامن الأساسي\n🎯 وعد رئيسي رقم 1\n🎯 وعد رئيسي رقم 2 استلم: بيانات جاهزة\n⏳ مؤقت setTimeout رقم 1 نفذ\n⚡ وعد تم حله داخل المؤقت مباشرة!`,
      mistakes: [
        {
          wrong: `// ظن أن كتابة حلقة Promise لا نهائية سيسمح للـ setTimeout بالعمل بعدها\nfunction loop() {\n  Promise.resolve().then(loop);\n}\n// loop(); // ❌ سيتجمد المتصفح بالكامل ولن يعمل أي setTimeout أبداً!`,
          correct: `// الـ Event Loop يفرغ طابور الـ Microtasks بالكامل قبل أن يلمس أي Macrotask؛ حلقة Microtask مستمرة تجوع بقية المهام (Starvation)\n// الحل: وزع المهام الكبيرة باستخدام setTimeout أو requestIdleCallback`,
          explanation: "طابور المهام الدقيقة (Microtasks) له أولوية احتكارية؛ لا ينتقل المتصفح للمؤقتات إلا بعد تصفيره بالكامل."
        }
      ],
      bestPractices: [
        "اعتمد على Promises و async/await لمعظم العمليات غير المتزامنة لأنها أسرع وأعلى أولوية في الـ Event Loop.",
        "استخدم `setTimeout(fn, 0)` بحكمة فقط إذا كنت تريد تأجيل عملية ثانوية حتى تنتهي العمليات الحالية ويعاد رسم الشاشة.",
        "تجنب حجب الـ Event Loop بحسابات رياضية ثقيلة متزامنة؛ انقل العمليات الضخمة إلى Web Workers."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح وتدفق حلقة الأحداث Event Loop",
        concept: "Event Loop Architecture & Queue Hierarchy",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 تشريح حلقة الأحداث (The Event Loop)          │
└─────────────────────────────────────────────────────────────┘
  [ 1. Call Stack ]  ◄── هل المكدس فارغ تماماً؟
         ▲                        │
         │                        ▼ (نعم!)
         │             [ 2. Microtask Queue ] (أولوية قصوى!)
         │             (Promises, queueMicrotask)
         │                        │
         │                        ▼ (عندما يفرغ تماماً)
         └─────────────[ 3. Macrotask Queue ] (أولوية عادية)
                       (setTimeout, setInterval, I/O Events)`
      }
    },
    {
      id: "3.3.c",
      title: "Call Stack",
      englishTitle: "The Call Stack: Stack Frames, LIFO & Stack Overflow",
      definition: "مكدس الاستدعاءات (Call Stack) هو هيكل بيانات داخلي في ذاكرة JavaScript يعمل بنظام 'الداخل آخراً يخرج أولاً' (Last In, First Out - LIFO). يُسجل هذا المكدس في أي مكان يتواجد فيه البرنامج حالياً؛ فعندما تستدعي دالة تُدفع إلى قمة المكدس (Push)، وعندما تكتمل وتنتهي تُسحب وتُحذف من المكدس (Pop).",
      analogy: "تخيل رزمة من الأطباق فوق طاولة: عندما تغسل طبقاً تضعه فوق الرزمة (Push)، وعندما تحتاج طبقاً للأكل تأخذ الطبق الأخير الموضوع في الأعلى أولاً (Pop). لا يمكنك سحب الطبق الموجود في قاع الرزمة دون إزالة الأطباق التي فوقه أولاً!",
      why: "الـ Call Stack هو قلب محرك JavaScript؛ فهمه يفسر لك رسائل تتبع الأخطاء (Error Stack Trace) لتعرف بالضبط السطر الذي انطلق منه الخطأ وتسلسل الدوال التي أدت إليه، ويحميك من خطأ تجاوز سعة الذاكرة الشهير (Stack Overflow).",
      terms: [
        { term: "Call Stack", pronunciation: "كول ستاك", meaning: "مكدس الاستدعاءات اللحظي للدوال في الذاكرة" },
        { term: "LIFO (Last In, First Out)", pronunciation: "لايفو", meaning: "مبدأ الداخل أخيراً هو الخارج أولاً" },
        { term: "Stack Frame", pronunciation: "ستاك فريم", meaning: "إطار الدالة في المكدس متضمناً متغيراتها ومعاملاتها" },
        { term: "Stack Overflow", pronunciation: "ستاك أوفر فلو", meaning: "طفحان المكدس وانهيار البرنامج عند استدعاء دالة لنفسها بلا توقف" }
      ],
      syntax: "function a() { b(); } // a تُدفع للمكدس، ثم b فوقها\nfunction b() { c(); } // c فوق b\nfunction c() { return; } // c تنتهي وتخرج، ثم b، ثم a",
      codeSimple: `// تتبع مسار مكدس الاستدعاءات LIFO
function multiply(x, y) {
  console.log('3. داخل multiply في قمة المكدس');
  return x * y;
}

function calculateSquare(n) {
  console.log('2. داخل calculateSquare');
  return multiply(n, n); // استدعاء يدفع multiply فوق calculateSquare
}

function printResult(num) {
  console.log('1. داخل printResult');
  const res = calculateSquare(num);
  console.log('4. عاد التنفيذ إلى printResult مع الناتج:', res);
}

printResult(4);`,
      codeAdvanced: `// محاكاة لخطأ طفحان المكدس الشهير (RangeError: Maximum call stack size exceeded)
function demonstrateStackOverflow(counter = 1) {
  try {
    // دالة عودية (Recursive) تستدعي نفسها دون شرط توقف (Base Case)
    // لتوضيح أن للـ Stack سعة محددة في الذاكرة
    if (counter > 5) {
      console.log('توقف آمن: تم الوصول للحد التجريبي المسموح');
      return;
    }
    console.log(\`عمق المكدس الحالي: \${counter}\`);
    demonstrateStackOverflow(counter + 1); // دفع إطار جديد فوق القديم
  } catch (err) {
    console.error('تم اصطياد انهيار المكدس:', err.message);
  }
}

demonstrateStackOverflow();`,
      output: `1. داخل printResult\n2. داخل calculateSquare\n3. داخل multiply في قمة المكدس\n4. عاد التنفيذ إلى printResult مع الناتج: 16\nعمق المكدس الحالي: 1\nعمق المكدس الحالي: 2\nعمق المكدس الحالي: 3\nعمق المكدس الحالي: 4\nعمق المكدس الحالي: 5\nتوقف آمن: تم الوصول للحد التجريبي المسموح`,
      mistakes: [
        {
          wrong: `// كتابة دالة عودية بدون شرط توقف صريح\nfunction countdown(n) {\n  console.log(n);\n  countdown(n - 1); // ❌ سيستمر بالسوالب للأبد حتى ينفجر المكدس بـ RangeError!\n}`,
          correct: `// وضع شرط توقف إلزامي (Base Case) في بداية الدالة العودية دائماً\nfunction countdown(n) {\n  if (n <= 0) return; // ✅ شرط أمان يفرغ المكدس\n  console.log(n);\n  countdown(n - 1);\n}`,
          explanation: "كل استدعاء لدالة يحجز مكاناً في الـ Stack؛ وإذا استمر الاستدعاء دون توقف فستنفد المساحة المخصصة ويتوقف المتصفح بخطأ Stack Overflow."
        }
      ],
      bestPractices: [
        "اقرأ رسالة الخطأ (Stack Trace) دائماً من الأعلى للأسفل؛ السطر العلوي هو موقع الانفجار الفعلي.",
        "عند كتابة دوال عودية، تأكد أولاً وقبل أي كود من كتابة شرط التوقف (Base Case).",
        "في React، تجنب استدعاء دالة تحديث الحالة (setState) مباشرة داخل جسم المكون دون حدث أو useEffect، لأن ذلك يسبب إعادة تصيير لا نهائية تفجر المكدس."
      ],
      infographic: {
        title: "إنفوجرافيك: كيف تنمو وتفرغ إطارات مكدس الاستدعاءات؟",
        concept: "Call Stack Push & Pop Mechanism",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 مكدس الاستدعاءات (Call Stack) LIFO          │
└─────────────────────────────────────────────────────────────┘
  عند الاستدعاء (Push):             عند الانتهاء (Pop):
  ┌──────────────┐                  ┌──────────────┐
  │ multiply()   │ ◄── القمة (ينفذ) │   (أفرغت)    │
  ├──────────────┤                  ├──────────────┤
  │ square()     │                  │   (أفرغت)    │
  ├──────────────┤                  ├──────────────┤
  │ main()       │                  │ main() ينتهي │
  └──────────────┘                  └──────────────┘`
      }
    },
    {
      id: "3.3.d",
      title: "Callbacks",
      englishTitle: "Callbacks & The Problem of 'Callback Hell'",
      definition: "دالة الاستدعاء اللاحق (Callback) هي دالة عادية تُمرر كمعامل إلى دالة أخرى، بهدف استدعائها وتشغيلها في وقت لاحق بعد اكتمال مهمة معينة (غالباً غير متزامنة). والمشكلة التاريخية التي عانى منها المبرمجون هي 'جحيم النداءات المتداخلة' (Callback Hell) عندما تعتمد كل عملية على نتيجة العملية السابقة فتتكدس الأقواس بشكل هرمي يصعب فهمه.",
      analogy: "تخيل أنك سلمت رقم هاتفك لمركز صيانة الحواسيب وقلت للموظف: 'عندما تنتهي من فحص اللابتوب، اتصل بهذا الرقم وأخبرني بالنتيجة'. رقم هاتفك هذا هو الـ Callback؛ لم تتصل أنت بالمركز فوراً، بل انتظرت اتصالهم هم لاحقاً.",
      why: "كانت الـ Callbacks هي الطريقة الوحيدة قديماً للتعامل مع العمليات غير المتزامنة في JavaScript؛ وفهم مشكلاتها يوضح لك السبب العبقري الذي دفع مجتمع البرمجة لابتكار الوعود (Promises) و async/await لتطهير الكود وجعله خطياً ومقروءاً.",
      terms: [
        { term: "Callback Function", pronunciation: "كول باك فانكشن", meaning: "دالة تُمرر كمعامل لتُستدعى لاحقاً بعد انتهاء المهمة" },
        { term: "Callback Hell / Pyramid of Doom", pronunciation: "كول باك هيل", meaning: "جحيم تداخل الـ Callbacks الهرمي المائل لليمين" },
        { term: "Error-First Callback", pronunciation: "إيرور فيرست", meaning: "نمط تمرير الخطأ كأول معامل في دالة الـ Callback (شائع في Node.js)" }
      ],
      syntax: "// 1. تمرير Callback بسيط\nfunction loadData(callback) {\n  setTimeout(() => callback('تم التحميل!'), 500);\n}\n\nloadData(result => console.log(result));",
      codeSimple: `// دالة غير متزامنة تستقبل دالة Callback
function fetchUser(userId, onSuccess) {
  setTimeout(() => {
    const user = { id: userId, name: 'مريم أحمد' };
    // استدعاء دالة الـ Callback بعد اكتمال التحميل
    onSuccess(user);
  }, 300);
}

// استدعاء الدالة وتمرير دالة سهمية كـ Callback
fetchUser(101, (userData) => {
  console.log('وصلت بيانات المستخدم عبر Callback:', userData.name);
});`,
      codeAdvanced: `// محاكاة حية لمأساة جحيم النداءات المتداخلة (Callback Hell)
// لاحظ كيف يتجه الكود بشكل هرمي مائل لليمين ويستحيل تتبع الأخطاء!
function step1(callback) { setTimeout(() => callback(null, 'الخطوة 1: تسجيل الدخول'), 100); }
function step2(callback) { setTimeout(() => callback(null, 'الخطوة 2: جلب الملف الشخصي'), 100); }
function step3(callback) { setTimeout(() => callback(null, 'الخطوة 3: تحميل الصور'), 100); }

// هرم الجحيم (Pyramid of Doom):
step1((err1, res1) => {
  if (err1) return console.error(err1);
  console.log(res1);

  step2((err2, res2) => {
    if (err2) return console.error(err2);
    console.log(res2);

    step3((err3, res3) => {
      if (err3) return console.error(err3);
      console.log(res3);
      console.log('انتهت كل الخطوات المتداخلة بشق الأنفس!');
    });
  });
});`,
      output: `وصلت بيانات المستخدم عبر Callback: مريم أحمد\nالخطوة 1: تسجيل الدخول\nالخطوة 2: جلب الملف الشخصي\nالخطوة 3: تحميل الصور\nانتهت كل الخطوات المتداخلة بشق الأنفس!`,
      mistakes: [
        {
          wrong: `// استدعاء دالة الـ Callback بالأقواس () فوراً أثناء تمريرها كمعامل!\nfetchUser(10, myCallback()); // ❌ هذا ينفذ myCallback فوراً ويمرر ناتجها بدلاً من تمرير الدالة نفسها!`,
          correct: `// تمرير اسم الدالة فقط دون أقواس لكي يستدعيها السيرفر عند وقت الانتهاء\nfetchUser(10, myCallback); // ✅ سليم ومثالي`,
          explanation: "وضع الأقواس () يستدعي الدالة في نفس اللحظة المتزامنة؛ بينما الـ Callback يجب أن يُمرر كمرجع فقط ليُستدعى في المستقبل."
        }
      ],
      bestPractices: [
        "تجنب استخدام الـ Callbacks للعمليات غير المتزامنة المتسلسلة؛ استخدم Promises أو async/await بدلاً منها.",
        "إذا اضطررت لكتابة Callbacks، فافصل الدوال إلى أسماء مستقلة مسطحة بدلاً من كتابتها مضمنة ومتداخلة كأهرامات.",
        "في معالجات أحداث React (مثل `onClick={handleClick}`)، تذكر أنك تمرر دالة Callback تستدعيها React عند نقر المستخدم."
      ],
      infographic: {
        title: "إنفوجرافيك: تشريح جحيم النداءات (Callback Hell) وبديلها الحديث",
        concept: "Callback Hell vs Clean Async Pattern",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 جحيم الـ Callbacks مقابل الكود الحديث        │
└─────────────────────────────────────────────────────────────┘
  جحيم الأهرامات القديم (Callback Hell):
  getData(a => {
    getMore(a, b => {
      getFinal(b, c => {
        // كود هرمي مائل يصعب قراءته وصيانته ❌
      });
    });
  });

  الكود الحديث الأنيق بـ async/await:
  const a = await getData();
  const b = await getMore(a);
  const c = await getFinal(b); // كود خطي مستقيم فائق الجمال ✅`
      }
    },
    {
      id: "3.3.e",
      title: "Promises",
      englishTitle: "Promises: States (Pending, Fulfilled, Rejected) & Chaining",
      definition: "الوعد (Promise) هو كائن خاص في JavaScript يمثل نتيجة مستقبلية لعملية غير متزامنة لم تكتمل بعد. يكون الوعد دائماً في إحدى ثلاث حالات حتمية: قيد الانتظار (Pending)، أو مُنفذ بنجاح (Fulfilled) عبر دالة resolve، أو مرفوض بفشل (Rejected) عبر دالة reject، ويمكن متابعته بسلاسة عبر .then و .catch و .finally.",
      analogy: "تخيل أنك طلبت وجبة في مطعم وسلّمك الكاشير 'فاتورة مرقمة'. الفاتورة هي 'الوعد': في تلك اللحظة هي (Pending) قيد الطهي. إذا جهزت الوجبة بنجاح، يُنفذ الوعد (Fulfilled) وتأكل، وإذا احترق الطعام أو نفد المكون، يُرفض الوعد (Rejected) ويعتذر لك المطعم أو يعيد نقودك.",
      why: "الوعد هو الحل الجذري والمنقذ الذي قضى على جحيم الـ Callbacks؛ فهو يحول العمليات غير المتزامنة المعقدة إلى سلاسل خطية واضحة ومقروءة، ويوفر قناة موحدة وقوية لمعالجة الأخطاء عبر دالة .catch واحدة.",
      terms: [
        { term: "Promise", pronunciation: "بروميس", meaning: "الوعد؛ كائن يمثل قيمة ستتوفر في المستقبل" },
        { term: "Pending", pronunciation: "بيندينغ", meaning: "حالة الانتظار الأولية قبل حسم نتيجة الوعد" },
        { term: "Fulfilled / Resolved", pronunciation: "فولفيلد", meaning: "اكتمال العملية بنجاح وتوفر البيانات المطلوبة" },
        { term: "Rejected", pronunciation: "ريجكتيد", meaning: "فشل العملية وصدور خطأ أو رفض" },
        { term: "Promise Chaining", pronunciation: "بروميس تشينينغ", meaning: "تسلسل الوعود بربط توالي دوال .then وراء بعضها" }
      ],
      syntax: "const myPromise = new Promise((resolve, reject) => {\n  if (success) resolve('نجاح');\n  else reject('فشل');\n});\n\nmyPromise\n  .then(data => console.log(data))\n  .catch(err => console.error(err))\n  .finally(() => console.log('اكتمل الوعد'));",
      codeSimple: `// إنشاء وعد يفحص حالة الاتصال بالخادم
const checkConnection = new Promise((resolve, reject) => {
  const isOnline = true;

  setTimeout(() => {
    if (isOnline) {
      resolve('✅ متصل بالخادم بنجاح وبسرعة فائقة');
    } else {
      reject('❌ تعذر الاتصال بالخادم؛ تحقق من الإنترنت');
    }
  }, 400);
});

// استهلاك الوعد بسلسلة then و catch و finally
checkConnection
  .then((message) => {
    console.log('مرحلة النجاح (Fulfilled):', message);
  })
  .catch((error) => {
    console.error('مرحلة الفشل (Rejected):', error);
  })
  .finally(() => {
    console.log('مرحلة النهاية (Finally): تم إغلاق مؤشر التحميل.');
  });`,
      codeAdvanced: `// تسلسل الوعود (Promise Chaining) للعمليات المتتالية
function getUserId() {
  return new Promise(resolve => setTimeout(() => resolve(77), 100));
}

function getUserProfile(id) {
  return new Promise(resolve => setTimeout(() => resolve({ id, role: 'author' }), 100));
}

function getAuthorArticles(role) {
  return new Promise(resolve => setTimeout(() => resolve(['مقال React 19', 'مقال JavaScript ES6']), 100));
}

// تسلسل خطي نظيف جداً: كل then تسلم ناتجها للـ then التي تليها!
getUserId()
  .then(id => {
    console.log('1. استلمنا المعرف:', id);
    return getUserProfile(id); // إرجاع وعد جديد
  })
  .then(profile => {
    console.log('2. استلمنا الملف الشخصي للدور:', profile.role);
    return getAuthorArticles(profile.role); // إرجاع وعد ثالث
  })
  .then(articles => {
    console.log('3. استلمنا قائمة المقالات النهائية:', articles);
  })
  .catch(err => {
    console.error('تم اصطياد أي خطأ حدث في أي مرحلة من السلسلة:', err);
  });`,
      output: `مرحلة النجاح (Fulfilled): ✅ متصل بالخادم بنجاح وبسرعة فائقة\nمرحلة النهاية (Finally): تم إغلاق مؤشر التحميل.\n1. استلمنا المعرف: 77\n2. استلمنا الملف الشخصي للدور: author\n3. استلمنا قائمة المقالات النهائية: [ 'مقال React 19', 'مقال JavaScript ES6' ]`,
      mistakes: [
        {
          wrong: `// نسيان عمل return للوعد داخل سلسلة then\npromise.then(res => {\n  getUser(res); // ❌ نسيت كلمة return! السلسلة التالية ستستلم undefined!\n}).then(user => console.log(user));`,
          correct: `// إرجاع الوعد صراحة لكي تنتظره دالة then التالية في السلسلة\npromise.then(res => {\n  return getUser(res); // ✅ سليم 100%\n}).then(user => console.log(user));`,
          explanation: "في سلسلة then، إذا لم ترجع الوعد الجديد عبر return، فلن تنتظره الدالة التالية وستستلم undefined فوراً."
        }
      ],
      bestPractices: [
        "ضع دائماً دالة `.catch()` في نهاية كل سلسلة وعود لمنع الأخطاء غير الملتقطة (UnhandledPromiseRejection).",
        "استخدم دالة `.finally()` لتنفيذ كود التنظيف وإخفاء مؤشرات التحميل سواء نجحت العملية أو فشلت.",
        "إذا وجدت نفسك تكتب وعوداً متداخلة بداخل بعضها، فتوقف فوراً؛ حولها إلى سلسلة خطية بـ return أو استخدم async/await."
      ],
      infographic: {
        title: "إنفوجرافيك: دورة حياة حالات الوعد Promise الثلاث",
        concept: "Promise States & Resolution Lifecycle",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 دورة حياة الوعد (Promise Lifecycle)          │
└─────────────────────────────────────────────────────────────┘
                     [ 1. Pending: قيد الانتظار ]
                                │
                 ┌──────────────┴──────────────┐
                 ▼                             ▼
       resolve(بيانات)                  reject(خطأ)
                 │                             │
                 ▼                             ▼
    [ 2. Fulfilled: نجاح ]           [ 3. Rejected: فشل ]
                 │                             │
                 ▼                             ▼
              .then()                       .catch()
                 │                             │
                 └──────────────┬──────────────┘
                                ▼
                       .finally() (دائماً!)`
      }
    },
    {
      id: "3.3.f",
      title: "async و await",
      englishTitle: "async/await: Syntactic Sugar for Clean Asynchronous Code",
      definition: "الكلمتان المفتاحيتان `async` و `await` هما صياغة برمجية عصرية وساحرة (Syntactic Sugar) بُنيت فوق الوعود (Promises)، تتيح لك كتابة الكود غير المتزامن وقراءته بنفس الترتيب الخطي الطبيعي للكود المتزامن العادي، دون الحاجة لسلاسل `.then()` المتكررة.",
      analogy: "تخيل أنك تركب مصعداً فائق السرعة ومزوداً بزر سحري اسمه 'انتظرني هنا' (await): بدلاً من أن تقفز خارج المصعد وتضع لافتة معقدة لتبلغ صديقك متى يصل الدور الخامس، يضغط المصعد الزر ويتوقف بهدوء في مكانه حتى تنزل وتشتري قهوتك وتعود، ثم يواصل صعوده للأعلى بسلاسة دون أن يغادر المسار!",
      why: "هي الطريقة المفضلة والمعيارية بلا منازع في عالم React الحديث! تجعل استدعاء الـ APIs، والتعامل مع قواعد البيانات، وإدارة الحالات المعقدة سهلة القراءة كأنها رواية أدبية، وتسمح باستخدام جمل try/catch الطبيعية لاصطياد الأخطاء.",
      terms: [
        { term: "async keyword", pronunciation: "إيسينك كيوورد", meaning: "توضع قبل الدالة لتجعلها تعيد وعداً (Promise) تلقائياً" },
        { term: "await keyword", pronunciation: "أويت كيوورد", meaning: "توضع قبل الوعد لتوقف تنفيذ الدالة مؤقتاً حتى يُحل الوعد" },
        { term: "Syntactic Sugar", pronunciation: "سينتاكتك شوجر", meaning: "صياغة جمالية تسهل كتابة وقراءة مفاهيم برمجية موجودة مسبقاً" }
      ],
      syntax: "// الدالة الموسومة بـ async تعيد Promise دائماً\nasync function loadDashboard() {\n  // await توقف التنفيذ محلياً حتى تكتمل العملية وتستخرج البيانات مباشرة\n  const data = await fetchReport();\n  return data;\n}",
      codeSimple: `// دالة غير متزامنة بسيطة تحاكي استرجاع اسم مستخدم
async function fetchCurrentUserName() {
  // محاكاة تأخير شبكة عبر Promise
  const name = await new Promise(resolve => setTimeout(() => resolve('سارة المنصور'), 300));
  
  // طباعة النتيجة المستخرجة مباشرة
  console.log('تم استقبال الاسم بسلاسة بفضل await:', name);
  return name;
}

// تشغيل الدالة
fetchCurrentUserName();`,
      codeAdvanced: `// سيناريو واقعي في React: جلب بيانات المستخدم مع التحقق من الصلاحيات
function mockAuthService(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === 'VALID_SECURE_TOKEN') {
        resolve({ userId: 42, role: 'editor' });
      } else {
        reject(new Error('التوكن غير صالح أو منتهي الصلاحية!'));
      }
    }, 200);
  });
}

function mockPostService(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'الدليل الكامل لـ async/await' },
        { id: 2, title: 'أسرار الأداء في React 19' }
      ]);
    }, 200);
  });
}

// دالة مركبة متكاملة تقرأ كالكود المتزامن العادي
async function initializeUserDashboard(userToken) {
  try {
    console.log('🔄 جاري التحقق من هوية المستخدم...');
    const auth = await mockAuthService(userToken);
    console.log('✅ تم توثيق الحساب للمعرف:', auth.userId);

    console.log('🔄 جاري تحميل مقالات الكاتب...');
    const posts = await mockPostService(auth.userId);
    console.log('✅ تم تحميل المقالات بنجاح! العدد:', posts.length);

    return { auth, posts };
  } catch (error) {
    console.error('❌ حدث خطأ أثناء تشغيل اللوحة:', error.message);
  }
}

initializeUserDashboard('VALID_SECURE_TOKEN');`,
      output: `تم استقبال الاسم بسلاسة بفضل await: سارة المنصور\n🔄 جاري التحقق من هوية المستخدم...\n✅ تم توثيق الحساب للمعرف: 42\n🔄 جاري تحميل مقالات الكاتب...\n✅ تم تحميل المقالات بنجاح! العدد: 2`,
      mistakes: [
        {
          wrong: `// استخدام كلمة await داخل دالة عادية غير موسومة بـ async\nfunction loadData() {\n  const res = await fetch('/api'); // ❌ SyntaxError: await is only valid in async functions!\n}`,
          correct: `// وسم الدالة بكلمة async قبل استخدام await بداخلها\nasync function loadData() {\n  const res = await fetch('/api'); // ✅ سليم\n}`,
          explanation: "محرك JavaScript يمنع استخدام كلمة await إلا داخل دالة عُرفت صراحة بكلمة async (أو في قمة الملفات بـ Top-Level Await في وحدات ES Modules الحديثة)."
        }
      ],
      bestPractices: [
        "استخدم async/await كخيار أول مفضل للتعامل مع الوعود بدلاً من سلاسل .then المتكررة.",
        "غلف استدعاءات await دائماً بجملة `try...catch` لاصطياد أخطاء الشبكة بأمان.",
        "تذكر أن await توقف الدالة المحلية فقط ولا توقف أو تجمد المتصفح إطلاقاً؛ فالمتصفح يواصل عمله في الخلفية."
      ],
      infographic: {
        title: "إنفوجرافيك: المقارنة البصرية بين then() و async/await",
        concept: "Promises (.then) vs async/await",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 مقارنة .then() مقابل الصياغة العصرية await  │
└─────────────────────────────────────────────────────────────┘
  طريقة الوعود الكلاسيكية بـ .then:
  fetchUser()
    .then(u => fetchPosts(u.id))
    .then(p => render(p))
    .catch(e => showError(e));

  طريقة async/await العصرية والنظيفة:
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    render(posts);
  } catch (error) {
    showError(error);
  }`
      }
    },
    {
      id: "3.3.g",
      title: "Promise.all و Promise.allSettled",
      englishTitle: "Parallel Promises: Promise.all vs Promise.allSettled",
      definition: "دوال التوازي المجمعة تسمح لك بتشغيل عدة وعود في نفس اللحظة بالتوازي (Parallel Execution). `Promise.all` تنتظر نجاح جميع الوعود معاً وتفشل فوراً إذا فشل أي وعد واحد (الكل أو لا شيء All-or-Nothing)، بينما `Promise.allSettled` تنتظر اكتمال كافة الوعود وتخبرك بنتيجة كل وعد على حدة سواء نجح أو فشل دون أن تنهار.",
      analogy: "تخيل أنك ترسل 3 فرسان في مهمة استطلاع:\n1. نمط Promise.all: أنت تشترط أن يعود الفرسان الثلاثة سالمين ومعهم كل الخرائط؛ إذا مات فارس واحد في الطريق، تلغي الخطة فوراً وتعلن فشل المهمة بالكامل!\n2. نمط Promise.allSettled: أنت تنتظر عودة من بقي حياً؛ من عاد بسلام تأخذ خريطته، ومن سقط تسجل اسمه كشهيد، وتواصل خطتك بما وصلك من معلومات.",
      why: "تسريع التطبيقات بشكل مذهل! إذا كنت تحتاج لجلب 3 أشياء من السيرفر (بيانات المستخدم، الإشعارات، والمنتجات)، فإن استخدام await لكل واحدة على حدة يستغرق 3 ثوانٍ (1+1+1)، بينما تشغيلها بالتوازي بـ Promise.all يستغرق ثانية واحدة فقط (وقت أطول عملية بينها)!",
      terms: [
        { term: "Promise.all", pronunciation: "بروميس دوت أوول", meaning: "تشغيل الوعود بالتوازي بشرط نجاحها جميعاً (Fast-Fail)" },
        { term: "Promise.allSettled", pronunciation: "بروميس دوت أوول سيتلد", meaning: "تشغيل الوعود بالتوازي مع تسجيل نتيجة كل واحد بنجاحه أو فشله" },
        { term: "Parallel Execution", pronunciation: "باراليل إكسيكيوشن", meaning: "التنفيذ المتوازي المتزامن في نفس الوقت" },
        { term: "Fast-Fail", pronunciation: "فاست فيل", meaning: "الفشل والانهيار الفوري عند أول خطأ" }
      ],
      syntax: "// 1. Promise.all (تنتظر نجاح الكل)\nconst [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);\n\n// 2. Promise.allSettled (تجمع الحالات دون انهيار)\nconst results = await Promise.allSettled([reqA(), reqB()]);",
      codeSimple: `// دالتان تحاكيان طلبات شبكة متوازية
const fetchCategories = () => new Promise(res => setTimeout(() => res(['إلكترونيات', 'كتب']), 300));
const fetchFeatured = () => new Promise(res => setTimeout(() => res(['سماعة ذكية']), 200));

async function loadStore() {
  console.time('وقت التحميل بالتوازي');

  // إطلاق العمليتين في نفس اللحظة بالضبط
  const [categories, featured] = await Promise.all([
    fetchCategories(),
    fetchFeatured()
  ]);

  console.timeEnd('وقت التحميل بالتوازي'); // يستغرق 300ms فقط بدلاً من 500ms!
  console.log('التصنيفات المستلمة:', categories);
  console.log('المنتج المميز المستلم:', featured);
}

loadStore();`,
      codeAdvanced: `// مقارنة عملية بين سحق الأخطاء بـ all وصمود التطبيق بـ allSettled
const api1 = () => Promise.resolve({ source: 'طقس الرياض', temp: 32 });
const api2 = () => Promise.reject(new Error('خادم طقس دبي لا يستجيب حالياً!'));
const api3 = () => Promise.resolve({ source: 'طقس القاهرة', temp: 28 });

async function loadWeatherDashboard() {
  console.log('--- تجربة Promise.allSettled المرنة ---');
  
  // allSettled تضمن عدم انهيار الصفحة بالكامل إذا تعطل خادم مدينة واحدة
  const weatherResults = await Promise.allSettled([api1(), api2(), api3()]);

  weatherResults.forEach((result, idx) => {
    if (result.status === 'fulfilled') {
      console.log(\`✅ محطة \${idx + 1} نجحت:\`, result.value.source, 'الحرارة:', result.value.temp);
    } else {
      console.warn(\`⚠️ محطة \${idx + 1} فشلت بأمان:\`, result.reason.message);
    }
  });
}

loadWeatherDashboard();`,
      output: `وقت التحميل بالتوازي: 305ms\nالتصنيفات المستلمة: [ 'إلكترونيات', 'كتب' ]\nالمنتج المميز المستلم: [ 'سماعة ذكية' ]\n--- تجربة Promise.allSettled المرنة ---\n✅ محطة 1 نجحت: طقس الرياض الحرارة: 32\n⚠️ محطة 2 فشلت بأمان: خادم طقس دبي لا يستجيب حالياً!\n✅ محطة 3 نجحت: طقس القاهرة الحرارة: 28`,
      mistakes: [
        {
          wrong: `// استخدام await المتتالية لعمليات مستقلة لا تعتمد على بعضها (تضييع للوقت!)\nconst users = await fetchUsers(); // ينتظر 1 ثانية\nconst products = await fetchProducts(); // ينتظر 1 ثانية إضافية! إجمالي ثانيتين ❌`,
          correct: `// تشغيلهما بالتوازي بـ Promise.all لتوفير نصف وقت الانتظار\nconst [users, products] = await Promise.all([fetchUsers(), fetchProducts()]); // يستغرق ثانية واحدة فقط ✅`,
          explanation: "إذا كانت العمليتان مستقلتين تماماً ولا تحتاج الأولى لنتيجة الثانية، فتشغيلهما بالتعاقب يهدر وقت المستخدم؛ استخدم Promise.all دائماً."
        }
      ],
      bestPractices: [
        "استخدم `Promise.all` عندما تكون كل البيانات مترابطة وإلزامية لظهور الصفحة (مثل بيانات الفاتورة ومنتجاتها).",
        "استخدم `Promise.allSettled` عندما تعرض لوحة تحكم مستقلة الودجات (Widgets)؛ حتى لو فشلت ودجة الطقس تظل ودجة الأخبار تعمل.",
        "احذر من إرسال مئات الطلبات بـ Promise.all دفعة واحدة في المتصفح؛ لأن المتصفح له حد أقصى للاتصالات المتزامنة (حوالي 6 اتصالات لكل دومين)."
      ],
      infographic: {
        title: "إنفوجرافيك: Promise.all الصارمة مقابل Promise.allSettled المتسامحة",
        concept: "Promise.all vs Promise.allSettled Decision Matrix",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│          مقارنة التوازي: Promise.all مقابل allSettled        │
└─────────────────────────────────────────────────────────────┘
  السيناريو: 3 طلبات متوازية (طلب أ نجح، طلب ب فشل، طلب ج نجح)
  
  Promise.all([أ, ب, ج]):
  ├── ب يفشل ──> انهيار فوري للمصفوفة كلها! 💥
  └── الناتج: خطأ مباشر دون استلام أ أو ج (All-or-Nothing)
  
  Promise.allSettled([أ, ب, ج]):
  ├── أ: { status: 'fulfilled', value: ... } ✅
  ├── ب: { status: 'rejected', reason: ... } ⚠️
  └── ج: { status: 'fulfilled', value: ... } ✅
  (تستلم كافة النتائج بأمان تام لتقرر كيف تعرضها للمستخدم)`
      }
    },
    {
      id: "3.3.h",
      title: "التعامل مع الأخطاء غير المتزامنة",
      englishTitle: "Async Error Handling: try/catch vs .catch() Patterns",
      definition: "معالجة الأخطاء غير المتزامنة هي الممارسة البرمجية التي تضمن حماية التطبيق من الانهيار المفاجئ عند فشل طلبات الشبكة، أو انقطاع الإنترنت، أو استقبال استجابات غير متوقعة من الخوادم، من خلال التقاط الأخطاء بجمل `try...catch` مع `await` أو عبر صائد الأخطاء `.catch()`.",
      analogy: "تخيل شبكة أمان مثبتة أسفل لاعبي السيرك في الهواء: اللاعب يقفز ويؤدي حركات بهلوانية صعبة (كود الشبكة). إذا انزلق وسقط، لا يرتطم بالأرض الصلبة ويموت (انهيار التطبيق)، بل تسقط جثته بأمان على الشبكة المطاطية (كتلة catch)، ويقف ويبتسم للجمهور ويعتذر بهدوء!",
      why: "في تطبيقات الويب الحقيقية، تفشل طلبات الشبكة باستمرار لأسباب خارجة عن إرادتك (ضعف تغطية 4G، سيرفر قيد الصيانة، أو انتهاء الجلسة). بدون معالجة الأخطاء، ستتجمد شاشة المستخدم على مؤشر تحميل أبدي دون أن يفهم ما الذي حدث.",
      terms: [
        { term: "try...catch", pronunciation: "تراي كاتش", meaning: "كتلة برمجية لتجربة الكود المعرض للخطأ واصطياده عند حدوثه" },
        { term: "Unhandled Rejection", pronunciation: "أن هاندلد ريجيكشن", meaning: "رفض غير ملتقط للوعد يؤدي لتحذيرات وأخطاء حمراء في الكونسول" },
        { term: "Error Object", pronunciation: "إيرور أوبجكت", meaning: "كائن الخطأ الذي يحمل اسم الخطأ ورسالته ومسار تتبعه" },
        { term: "User-Friendly Message", pronunciation: "يوزر فريندلي مسج", meaning: "رسالة خطأ لطيفة ومفهومة للبشر بدلاً من الأكواد التقنية المرعبة" }
      ],
      syntax: "try {\n  const res = await riskyNetworkCall();\n} catch (err) {\n  console.error('تم اصطياد الخطأ بأمان:', err.message);\n} finally {\n  setLoading(false); // كود ينفذ في كل الأحوال\n}",
      codeSimple: `// دالة غير متزامنة تفشل عمداً لمحاكاة انقطاع الإنترنت
async function loadUserData() {
  try {
    console.log('1. محاولة الاتصال بالسيرفر...');
    
    // محاكاة خطأ شبكة
    await new Promise((_, reject) => {
      setTimeout(() => reject(new Error('انقطع الاتصال بالإنترنت (Network Timeout)')), 300);
    });

    console.log('هذا السطر لن يُنفذ أبداً بسبب الخطأ أعلاه');
  } catch (err) {
    // التقاط الخطأ وعرض رسالة ودودة للمستخدم
    console.warn('2. تم اصطياد الخطأ بنجاح وبقيت الصفحة تعمل:', err.message);
  } finally {
    console.log('3. مرحلة التنظيف: إيقاف مؤشر التحميل الدوار.');
  }
}

loadUserData();`,
      codeAdvanced: `// نمط معالجة الأخطاء الاحترافي في React مع تمييز أنواع الأخطاء
async function fetchSafeApi(url) {
  try {
    const response = await fetch(url);

    // التحقق من حالة استجابة الـ HTTP (لأن fetch لا تطلق خطأ عند كود 404 أو 500!)
    if (!response.ok) {
      throw new Error(\`خطأ من الخادم برقم: \${response.status} (\${response.statusText})\`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    // تمييز ما إذا كان الخطأ بسبب انقطاع الإنترنت أو كود الخادم
    const isNetworkError = error.name === 'TypeError';
    const friendlyMessage = isNetworkError 
      ? 'يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً.'
      : error.message;

    return { success: false, error: friendlyMessage };
  }
}

// تجربة جلب رابط خاطئ
fetchSafeApi('https://api.example.com/non-existent-endpoint')
  .then(res => console.log('نتيجة المعالجة الآمنة:', res));`,
      output: `1. محاولة الاتصال بالسيرفر...\n2. تم اصطياد الخطأ بنجاح وبقيت الصفحة تعمل: انقطع الاتصال بالإنترنت (Network Timeout)\n3. مرحلة التنظيف: إيقاف مؤشر التحميل الدوار.\nنتيجة المعالجة الآمنة: { success: false, error: 'يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً.' }`,
      mistakes: [
        {
          wrong: `// ظن أن دالة fetch تطلق خطأ catch تلقائياً عند تلقي رمز 404 أو 500 من الخادم\ntry {\n  const res = await fetch('/missing-page');\n  // ❌ إذا أعاد السيرفر 404، فلن يذهب الكود لـ catch بل سيواصل العمل!\n} catch (e) { ... }`,
          correct: `// فحص خاصية response.ok يدوياً وإطلاق خطأ صريح إذا كانت false\nconst res = await fetch('/missing-page');\nif (!res.ok) throw new Error('تعذر العثور على الصفحة (404)'); // ✅ سليم ومثالي`,
          explanation: "دالة fetch تطلق خطأ في catch فقط في حالة فشل الشبكة الفيزيائي (انقطاع النت تماماً)، أما إذا رد السيرفر بأي رمز (حتى 404 أو 500) فيعتبر ذلك استجابة ناجحة للوعد ويجب فحص `res.ok`."
        }
      ],
      bestPractices: [
        "افحص دائماً `response.ok` بعد استدعاء `fetch` وقبل محاولة قراءة `response.json()`.",
        "لا تترك كتلة catch فارغة أبداً (Silent Failure)؛ سجل الخطأ وأبلغ المستخدم بما حدث.",
        "في React، استخدم مكونات حراسة الأخطاء (Error Boundaries) لحماية الشجرة الكاملة للمكونات من الانهيار عند حدوث خطأ مفاجئ."
      ],
      infographic: {
        title: "إنفوجرافيك: الدروع الواقية للأخطاء غير المتزامنة",
        concept: "Async Error Shielding Architecture",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 الدرع الواقي للأخطاء غير المتزامنة           │
└─────────────────────────────────────────────────────────────┘
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('فشل من الخادم'); ──┐
    const data = await res.json();                  │
  } catch (error) {                                 ▼
    // 🛡️ درع الأمان:                             (التقاط الخطأ)
    // 1. تسجيل الخطأ للمطور
    // 2. إظهار رسالة ودودة للمستخدم بدلاً من الشاشة البيضاء!
  } finally {
    // 🧹 كود التنظيف الحتمي: إخفاء الـ Spinner
  }`
      }
    },
    {
      id: "3.3.i",
      title: "استخدام Fetch API",
      englishTitle: "The Fetch API: GET, POST, Headers & Response Handling",
      definition: "واجهة `fetch()` هي الأداة القياسية المدمجة في متصفحات الويب الحديثة وبيئة Node.js لإرسال واستقبال طلبات شبكة HTTP/HTTPS غير المتزامنة لجلب البيانات من الخوادم (APIs) أو إرسال النماذج والبيانات إليها.",
      analogy: "تخيل موظف بريد سريع (Fetch): ترسل معه رسالة مغلقة تحتوي على عنوان الوجهة ونوع الطلب (GET لقراءة رسالة، أو POST لتسليم طرد). يذهب إلى المقر المطلوب، ويعود لك بظرف مختوم من الخادم يحتوي على رد الـ HTTP وكود الحالة والمحتوى المطلوب.",
      why: "Fetch هي شريان الحياة لكل تطبيقات الويب التفاعلية وتطبيقات React؛ فبدونها لا يمكن للموقع أن يعرض منشورات جديدة، أو يسجل دخول مستخدم، أو يحفظ بيانات الطلب في قاعدة البيانات.",
      terms: [
        { term: "Fetch API", pronunciation: "فيتش إيه بي آي", meaning: "الواجهة البرمجية القياسية لجلب البيانات وإرسال طلبات الـ HTTP" },
        { term: "HTTP Methods (GET / POST)", pronunciation: "إتش تي تي بي ميثودز", meaning: "طرق الطلب: GET لجلب البيانات، و POST لإرسال وإنشاء بيانات جديدة" },
        { term: "Headers", pronunciation: "هيدرز", meaning: "ترويسات الطلب الإضافية لتحديد نوع البيانات والتوكنات" },
        { term: "response.json()", pronunciation: "ريسبونس دوت جيسون", meaning: "دالة غير متزامنة لتحويل النص القادم إلى كائن JavaScript حقيقي" }
      ],
      syntax: "// 1. طلب جلب عادي (GET)\nconst res = await fetch('https://api.example.com/users');\nconst data = await res.json();\n\n// 2. طلب إرسال بيانات (POST)\nconst res = await fetch(url, {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'سالم' })\n});",
      codeSimple: `// دالة لجلب قائمة مستخدمين تجريبية باستخدام Fetch
async function fetchSampleUsers() {
  try {
    // إرسال طلب GET للخادم المجاني الشهير jsonplaceholder
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=2');

    // التأكد من أن رمز الاستجابة في نطاق الـ 200 (Success)
    if (!response.ok) {
      throw new Error(\`فشل الاتصال: \${response.status}\`);
    }

    // قراءة وتحويل جسم الاستجابة إلى كائنات حقيقية
    const users = await response.json();
    console.log('تم استلام المستخدمين بنجاح:');
    users.forEach(u => console.log(\`- \${u.name} (\${u.email})\`));
  } catch (err) {
    console.error('خطأ في الـ Fetch:', err.message);
  }
}

fetchSampleUsers();`,
      codeAdvanced: `// محاكاة متكاملة لطلب POST احترافي لإنشاء مقال جديد في متجر
async function createNewArticle(articleData) {
  const endpoint = 'https://jsonplaceholder.typicode.com/posts';

  try {
    console.log('🚀 إرسال طلب POST إلى الخادم...');
    
    const response = await fetch(endpoint, {
      method: 'POST', // تحديد نوع الطلب كإنشاء جديد
      headers: {
        'Content-Type': 'application/json; charset=UTF-8', // نوع المحتوى المرسل
        'Authorization': 'Bearer sample_token_12345'       // ترويسة التوثيق
      },
      // تحويل كائن الـ JavaScript إلى نص JSON قبل الإرسال
      body: JSON.stringify(articleData)
    });

    if (!response.ok) {
      throw new Error(\`فشل الخادم في حفظ المقال: كود \${response.status}\`);
    }

    const createdRecord = await response.json();
    console.log('✅ تم إنشاء المقال بنجاح في السيرفر مع المعرف الجديد:', createdRecord);
    return createdRecord;
  } catch (error) {
    console.error('❌ تعذر إكمال الإرسال:', error.message);
  }
}

// اختبار دالة الـ POST
createNewArticle({
  title: 'أسرار البرمجة غير المتزامنة في React',
  body: 'شرح مفصل لكيفية استخدام Fetch مع async/await بأعلى كفاءة.',
  userId: 1
});`,
      output: `تم استلام المستخدمين بنجاح:\n- Leanne Graham (Sincere@april.biz)\n- Ervin Howell (Shanna@melissa.tv)\n🚀 إرسال طلب POST إلى الخادم...\n✅ تم إنشاء المقال بنجاح في السيرفر مع المعرف الجديد: {\n  title: 'أسرار البرمجة غير المتزامنة في React',\n  body: 'شرح مفصل لكيفية استخدام Fetch مع async/await بأعلى كفاءة.',\n  userId: 1,\n  id: 101\n}`,
      mistakes: [
        {
          wrong: `// نسيان وضع كلمة await أمام response.json()\nconst response = await fetch('/api/data');\nconst data = response.json(); // ❌ نسيت await! data ستكون Promise { <pending> } وليس الكائن المطلوب!`,
          correct: `// استخدام await مرتين: الأولى للـ fetch والثانية للـ json()\nconst response = await fetch('/api/data');\nconst data = await response.json(); // ✅ سليم تماماً`,
          explanation: "قراءة جسم الاستجابة (response.json()) هي عملية تدفق غير متزامنة تقرأ البيانات من الشبكة؛ لذلك تعيد وعداً يحتاج إلى await أخرى لحله."
        }
      ],
      bestPractices: [
        "حدد دائماً ترويسة `'Content-Type': 'application/json'` عند إرسال بيانات كائنات في طلبات POST و PUT.",
        "اعزل استدعاءات الـ fetch في دوال خدمات مستقلة (مثل `services/api.js`) ولا تخلطها مباشرة مع عناصر الـ JSX في React.",
        "في مشاريع React الإنتاجية الكبرى، فكر في استخدام مكتبات مثل TanStack Query (React Query) التي تدير التخزين المؤقت وحالات التحميل تلقائياً."
      ],
      infographic: {
        title: "إنفوجرافيك: الخطوتان الإلزاميتان لطلب الـ Fetch في JavaScript",
        concept: "The Two-Step Fetch Lifecycle",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 الخطوتان الإلزاميتان لدالة Fetch             │
└─────────────────────────────────────────────────────────────┘
  الخطوة 1: وصول الترويسات وحالة الخادم (Response Headers)
  const res = await fetch(url);
  ├── تفحص هل res.ok === true؟
  └── تعرف رمز الـ Status (200, 404, 500)
  
  الخطوة 2: تدفق وقراءة البيانات وتفكيكها (Body Parsing)
  const data = await res.json();
  └── هنا فقط تتحول نصوص الـ JSON القادمة إلى كائن JS صالح للاستخدام!`
      }
    },
    {
      id: "3.3.j",
      title: "إلغاء الطلبات باستخدام AbortController",
      englishTitle: "Cancelling Requests with AbortController in React",
      definition: "متحكم الإلغاء (AbortController) هو كائن قياسي في المتصفح يتيح لك إلغاء طلب شبكة قيد التنفيذ (Fetch Request) أو مهام غير متزامنة في أي لحظة قبل اكتمالها، عبر تمرير إشارة الإلغاء `signal` إلى دالة fetch واستدعاء `controller.abort()`.",
      analogy: "تخيل أنك طلبت سيارة أجرة عبر تطبيق الهاتف: بينما السائق في طريقه إليك (الطلب قيد التنفيذ)، قررت فجأة الذهاب مع صديقك، فضغطت زر 'إلغاء الرحلة' في التطبيق. زر الإلغاء هذا هو الـ AbortController؛ يلغي المهمة فوراً ويوفر الوقت والموارد دون انتظار وصول السائق لمنزلك!",
      why: "هو الركيزة الأساسية لتفادي تسريب الذاكرة (Memory Leaks) وأشهر أخطاء React داخل خطاف `useEffect`! عندما يكتب المستخدم حرفاً في خانة البحث ثم يكتب حرفاً ثانياً بسرعة، يجب إلغاء طلب البحث الأول فوراً حتى لا تصل نتيجته القديمة متأخرة وتغطي على النتيجة الحديثة (Race Condition).",
      terms: [
        { term: "AbortController", pronunciation: "أبورت كونترولر", meaning: "متحكم رسمي لإلغاء طلبات الشبكة قيد التنفيذ" },
        { term: "AbortSignal", pronunciation: "أبورت سيجنال", meaning: "إشارة الإلغاء التي تُربط مع دالة fetch" },
        { term: "AbortError", pronunciation: "أبورت إيرور", meaning: "خطأ خاص ينطلق عند نجاح إلغاء الطلب عبر abort()" },
        { term: "Race Condition", pronunciation: "ريس كونديشن", meaning: "سباق غير متزامن؛ وصول استجابة قديمة بعد الاستجابة الحديثة" }
      ],
      syntax: "// 1. إنشاء المتحكم\nconst controller = new AbortController();\n\n// 2. ربط الإشارة بالطلب\nfetch(url, { signal: controller.signal });\n\n// 3. إلغاء الطلب في أي وقت تشاء\ncontroller.abort();",
      codeSimple: `// تجربة إلغاء طلب شبكة سريع
const controller = new AbortController();

async function fetchWithCancel() {
  try {
    console.log('1. إطلاق طلب الشبكة مع ربط إشارة الإلغاء...');
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      signal: controller.signal // ربط الإشارة بالطلب
    });

    const data = await response.json();
    console.log('لن يصل إلى هنا إذا تم الإلغاء!');
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('2. ✅ تم إلغاء الطلب بنجاح ومنع تسريب الذاكرة!');
    } else {
      console.error('خطأ آخر:', err.message);
    }
  }
}

fetchWithCancel();

// إلغاء الطلب فوراً بعد إطلاقه
controller.abort();`,
      codeAdvanced: `// محاكاة لنمط React useEffect Cleanup الشهير لمنع Race Conditions
let currentSearchController = null;

async function searchLiveProducts(query) {
  // إذا كان هناك طلب بحث سابق لا يزال يعمل، قم بإلغائه فوراً!
  if (currentSearchController) {
    console.log(\`🛑 إلغاء البحث السابق لأن المستخدم كتب كلمة جديدة: "\${query}"\`);
    currentSearchController.abort();
  }

  // إنشاء متحكم جديد للبحث الحالي
  currentSearchController = new AbortController();

  try {
    console.log(\`🔍 بدء البحث عن: "\${query}"...\`);
    const response = await fetch(\`https://jsonplaceholder.typicode.com/posts?q=\${encodeURIComponent(query)}\`, {
      signal: currentSearchController.signal
    });

    const results = await response.json();
    console.log(\`✨ وصلت نتائج البحث عن "\${query}":\`, results.length);
  } catch (err) {
    if (err.name === 'AbortError') {
      // تجاهل خطأ الإلغاء تماماً لأنه سلوك مقصود
    } else {
      console.error('حدث خلل حقيقي أثناء البحث:', err.message);
    }
  }
}

// محاكاة مستخدم يكتب بسرعة: 'react' ثم يغير رأيه إلى 'nextjs'
searchLiveProducts('react');
searchLiveProducts('nextjs'); // يلغي بحث 'react' فوراً!`,
      output: `1. إطلاق طلب الشبكة مع ربط إشارة الإلغاء...\n2. ✅ تم إلغاء الطلب بنجاح ومنع تسريب الذاكرة!\n🔍 بدء البحث عن: "react"...\n🛑 إلغاء البحث السابق لأن المستخدم كتب كلمة جديدة: "nextjs"\n🔍 بدء البحث عن: "nextjs"...\n✨ وصلت نتائج البحث عن "nextjs": 100`,
      mistakes: [
        {
          wrong: `// إظهار رسالة خطأ حمراء مرعبة للمستخدم عندما يكون الخطأ AbortError\ncatch (err) {\n  alert('خطأ فادح: فشل الطلب!'); // ❌ تجربة مستخدم سيئة لأن الإلغاء كان متعمداً!\n}`,
          correct: `// فحص err.name وتجاهل AbortError لأنه تصرف مقصود وطبيعي\ncatch (err) {\n  if (err.name === 'AbortError') return; // تجاهل بأمان\n  alert('فشل الاتصال: ' + err.message);\n}`,
          explanation: "عند إلغاء الطلب بـ abort()، يُطلق المتصفح خطأ اسمه 'AbortError' عمداً؛ ولا يجب اعتباره عطلاً بالشبكة أو إزعاج المستخدم به."
        }
      ],
      bestPractices: [
        "استخدم AbortController دائماً في دالة تنظيف (Cleanup Function) لخطاف `useEffect` في React.",
        "استخدمه مع حقول البحث الحية (Autocomplete) لإلغاء النتائج القديمة فور كتابة حرف جديد.",
        "يمكنك ضبط مهلة زمنية تلقائية للإلغاء باستخدام الميزة الحديثة `AbortSignal.timeout(5000)` لإلغاء أي طلب يتجاوز 5 ثوانٍ."
      ],
      infographic: {
        title: "إنفوجرافيك: كيف يحمي AbortController تطبيقات React؟",
        concept: "AbortController & Race Condition Prevention",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 درع AbortController ضد سباق البيانات        │
└─────────────────────────────────────────────────────────────┘
  المستخدم يكتب: 'سيارة'  ──> إطلاق طلب 1 ──┐ (بطيء في الشبكة)
  المستخدم يكتب: 'طائرة'  ──> إطلاق طلب 2    │
                                           │
  بدون AbortController:                    ▼
  نتائج 'طائرة' تصل أولاً ──> ثم تصل نتائج 'سيارة' القديمة وتغطي عليها! ❌
  
  مع AbortController:
  فور كتابة 'طائرة'  ──> controller.abort() يُسقط طلب 'سيارة' فوراً ✅`
      }
    },
    {
      id: "3.3.k",
      title: "مفهوم JSON وتحويل البيانات",
      englishTitle: "JSON: stringify & parse (Data Serialization)",
      definition: "صيغة جيسون (JSON: JavaScript Object Notation) هي المعيار العالمي لنقل وتبادل البيانات بين الخوادم وتطبيقات الويب بصيغة نصية خفيفة وقابلة للقراءة. نستخدم `JSON.stringify()` لتحويل كائن JavaScript إلى نص JSON لإرساله عبر الشبكة أو حفظه، ونستخدم `JSON.parse()` لتحويل نص الـ JSON المستلم إلى كائن JavaScript حقيقي.",
      analogy: "تخيل أن لديك خيمة تخييم مركبة وكاملة (كائن JavaScript حي): إذا أردت شحنها بالبريد إلى بلد آخر، لا ترسلها وهي منصوبة في الهواء، بل تقوم بطيها وضغطها في حقيبة سفر مسطحة (JSON.stringify: تسطيح النص). وعندما يستلمها صديقك يفتح الحقيبة وينصب الخيمة مجدداً لتعود كائناً ثلاثي الأبعاد قابلاً للاستخدام (JSON.parse: فك وضبط الكائن).",
      why: "شبكات الإنترنت وذاكرة التخزين المحلي (LocalStorage) لا تفهم ولا تقبل سوى النصوص البسيطة (Strings)! لا يمكنك إرسال كائن JavaScript بذاكرته ومؤشراته عبر سلك الإنترنت مباشرة؛ بل يجب تحويله أولاً إلى نص JSON قياسي متفق عليه بين جميع لغات البرمجة (Python, PHP, Java, JS).",
      terms: [
        { term: "JSON", pronunciation: "جيسون", meaning: "تنسيق كائنات JavaScript القياسي العالمي لتبادل البيانات" },
        { term: "JSON.stringify()", pronunciation: "جيسون سترينجفاي", meaning: "تحويل كائن أو مصفوفة إلى نص JSON مسطح" },
        { term: "JSON.parse()", pronunciation: "جيسون بارس", meaning: "تحويل نص JSON إلى كائن أو مصفوفة JavaScript حية" },
        { term: "Serialization", pronunciation: "سيريالايزيشن", meaning: "تسلسل وتسطيح هياكل البيانات إلى صيغة نصية قابلة للتخزين والنقل" }
      ],
      syntax: "// 1. تحويل الكائن إلى نص\nconst jsonString = JSON.stringify(userObject);\n\n// 2. تحويل النص إلى كائن\nconst parsedObject = JSON.parse(jsonString);",
      codeSimple: `// كائن مستخدم حي في الذاكرة
const sessionUser = {
  id: 12,
  username: 'basem_dev',
  isLoggedIn: true,
  skills: ['React', 'TypeScript']
};

// 1. تحويل الكائن إلى نص JSON لإرساله للسيرفر أو حفظه بـ LocalStorage
const serializedJson = JSON.stringify(sessionUser);
console.log('نوع البيانات بعد التسطيح:', typeof serializedJson);
console.log('النص المسطح الناتج:', serializedJson);

// 2. استقبال نص الـ JSON وفكه مجدداً إلى كائن حي
const restoredUser = JSON.parse(serializedJson);
console.log('اسم المستخدم المسترجع بعد الفك:', restoredUser.username);
console.log('هل المهارات مصفوفة حقيقية؟:', Array.isArray(restoredUser.skills));`,
      codeAdvanced: `// خدعة احترافية: تنسيق نصوص JSON مع مسافات جمالية للمعاينة (Pretty Print)
const complexConfig = {
  appName: 'ReactMastery',
  version: 19.1,
  modules: {
    auth: { enabled: true, provider: 'OAuth2' },
    cache: { maxAgeSec: 3600 }
  }
};

// استخدام المعاملات الإضافية لـ stringify لطباعة نص منسق بمسافتين لكل مستوى
const prettyJson = JSON.stringify(complexConfig, null, 2);
console.log('--- تكوين النظام المنسق بجمال ---');
console.log(prettyJson);

// معالجة أخطاء الفك الآمن (Safe JSON Parse)
function safeJsonParse(rawString, fallback = {}) {
  try {
    return JSON.parse(rawString);
  } catch (err) {
    console.warn('⚠️ نص الـ JSON تالف أو غير صالح؛ تم استخدام القيمة البديلة:', err.message);
    return fallback;
  }
}

// تجربة فك نص تالف
const corruptedResult = safeJsonParse('{ name: "bad_json" بدون إغلاق }', { safe: true });
console.log('الناتج المحمي من الانهيار:', corruptedResult);`,
      output: `نوع البيانات بعد التسطيح: string\nالنص المسطح الناتج: {"id":12,"username":"basem_dev","isLoggedIn":true,"skills":["React","TypeScript"]}\nاسم المستخدم المسترجع بعد الفك: basem_dev\nهل المهارات مصفوفة حقيقية؟: true\n--- تكوين النظام المنسق بجمال ---\n{\n  "appName": "ReactMastery",\n  "version": 19.1,\n  "modules": {\n    "auth": {\n      "enabled": true,\n      "provider": "OAuth2"\n    },\n    "cache": {\n      "maxAgeSec": 3600\n    }\n  }\n}\n⚠️ نص الـ JSON تالف أو غير صالح؛ تم استخدام القيمة البديلة: Unexpected token n in JSON at position 2\nالناتج المحمي من الانهيار: { safe: true }`,
      mistakes: [
        {
          wrong: `// استخدام علامات تنصيص فردية '' في مفاتيح JSON اليدوية\nconst badJson = "{ 'name': 'خالد' }";\nJSON.parse(badJson); // ❌ SyntaxError: معيار JSON يفرض علامات التنصيص المزدوجة حصراً "" !`,
          correct: `// في JSON، يجب أن تكون المفاتيح والنصوص محاطة بعلامات تنصيص مزدوجة "" دوماً\nconst goodJson = '{ "name": "خالد" }';\nJSON.parse(goodJson); // ✅ سليم ومثالي`,
          explanation: "قواعد JSON صارمة جداً: لا تقبل علامات التنصيص الفردية، ولا تقبل الفواصل الزائدة في نهاية القوائم (Trailing Commas)، وتتجاهل الدوال والقيم undefined."
        }
      ],
      bestPractices: [
        "غلف `JSON.parse()` دائماً بجملة `try...catch` عند قراءة نصوص قادمة من LocalStorage أو مصادر خارجية تجنباً لانهيار التطبيق.",
        "تذكر أن `JSON.stringify()` تحذف الدوال والخصائص ذات القيمة `undefined` تلقائياً ولا تدعم تراكيب مثل `Map` و `Set` و `Symbol`.",
        "لعمل نسخ عميق (Deep Copy)، استخدم الدالة القياسية الحديثة `structuredClone(obj)` بدلاً من خدعة `JSON.parse(JSON.stringify(obj))` القديمة."
      ],
      infographic: {
        title: "إنفوجرافيك: رحلة البيانات بين كائنات JavaScript ونصوص JSON",
        concept: "Serialization and Deserialization Cycle",
        diagram: `┌─────────────────────────────────────────────────────────────┐
│                 رحلة تحويل البيانات (JSON Cycle)             │
└─────────────────────────────────────────────────────────────┘
      كائن JavaScript حي في الذاكرة:  { id: 1, name: 'عمر' }
                     │
         JSON.stringify(obj)  ──>  تسطيح إلى نص للنقل عبر الشبكة
                     │
                     ▼
      نص JSON مسطح خفيف:        '{"id":1,"name":"عمر"}'
                     │
         JSON.parse(string)   ──>  فك ونفخ النص لكائن حي في المتصفح
                     │
                     ▼
      كائن JavaScript تفاعلي:         user.name  ──>  'عمر'`
      }
    }
  ],
  quiz: [
    {
      id: "q3.3.1",
      question: "ما هو الترتيب الصحيح لأولويات التنفيذ في حلقة الأحداث (Event Loop)؟",
      options: [
        "المؤقتات (setTimeout) أولاً، ثم الكود المتزامن، ثم الوعود (Promises).",
        "الكود المتزامن المباشر أولاً، ثم طابور المهام الدقيقة (Microtasks كـ Promises)، ثم طابور المهام العادية (Macrotasks كـ setTimeout).",
        "جميع العمليات تنفذ عشوائياً في نفس اللحظة تماماً.",
        "الطلبات الشبكية دائماً تنفذ قبل الكود المتزامن."
      ],
      correctAnswer: 1,
      explanation: "المحرك ينفذ كل الكود المتزامن في الـ Call Stack أولاً، ثم يفرغ طابور المهام الدقيقة (Microtask Queue) الخاص بالوعود بالكامل، وأخيراً ينتقل لطابور المؤقتات (Macrotask Queue)."
    },
    {
      id: "q3.3.2",
      question: "لماذا نستخدم AbortController مع طلبات Fetch في مكونات React؟",
      options: [
        "لتسريع سرعة الإنترنت لدى المستخدم بنسبة 200%.",
        "لإلغاء طلبات الشبكة القديمة غير المرغوب فيها وتفادي تسريب الذاكرة ومشكلة سباق البيانات (Race Conditions).",
        "لتحويل طلبات الـ POST إلى طلبات GET تلقائياً.",
        "لتشفير البيانات بكلمة سر قبل إرسالها."
      ],
      correctAnswer: 1,
      explanation: "الـ AbortController يسمح بإلغاء الطلبات المتأخرة عند كتابة مدخلات جديدة أو عند خروج المكون من الشاشة، مما يمنع وصول بيانات قديمة وتحديث مكونات أُلغيت."
    },
    {
      id: "q3.3.3",
      question: "ما الفرق الأساسي بين Promise.all و Promise.allSettled؟",
      options: [
        "Promise.all تفشل وتنهار فوراً عند فشل أي وعد واحد (All-or-Nothing)، بينما allSettled تنتظر الكل وتسجل حالة كل وعد بنجاحه أو فشله.",
        "Promise.all تعمل مع النصوص فقط و allSettled تعمل مع الأرقام فقط.",
        "Promise.all أبطأ بعشر مرات من allSettled.",
        "لا يوجد فرق جوهري؛ كلاهما يرمي نفس نوع الخطأ دائماً."
      ],
      correctAnswer: 0,
      explanation: "Promise.all صارمة وتفشل فورياً عند أول عطل، بينما Promise.allSettled مرنة وتوفر قائمة كاملة بحالة كل وعد سواء انتهى بنجاح (fulfilled) أو بفشل (rejected)."
    }
  ],
  exercise: {
    title: "تمرين عملي: بناء محرك بحث غير متزامن مع إلغاء الطلبات ومعالجة الأخطاء",
    description: "المطلوب بناء دالة بحث `searchProducts(keyword)` غير متزامنة تستخدم `fetch` لاسترجاع المنتجات من واجهة API. يجب أن تدعم الدالة: إلغاء الطلب السابق تلقائياً باستخدام `AbortController`، والتحقق من `response.ok`، والتعامل مع الأخطاء بـ `try...catch` مع تجاهل `AbortError`، وإرجاع قائمة المنتجات مصفوفة نظيفة.",
    starterCode: `let activeSearchController = null;

async function searchProducts(keyword) {
  // 1. إذا كان هناك بحث نشط سابق، ألغه عبر activeSearchController.abort()
  // 2. أنشئ AbortController جديد واربطه بـ signal
  // 3. أرسل طلب Fetch إلى: https://dummyjson.com/products/search?q=\${keyword}
  // 4. افحص response.ok وفكك الـ JSON
  // 5. التقط الأخطاء وتجاهل خطأ AbortError
}`,
    hints: [
      "في البداية: `if (activeSearchController) activeSearchController.abort();`",
      "إنشاء الجديد: `activeSearchController = new AbortController();`",
      "الاستدعاء: `fetch(url, { signal: activeSearchController.signal })`",
      "في catch: `if (err.name === 'AbortError') return [];`"
    ],
    solution: `let activeSearchController = null;

async function searchProducts(keyword) {
  // 1. إلغاء أي طلب بحث سابق لا يزال يعمل لمنع سباق البيانات (Race Condition)
  if (activeSearchController) {
    activeSearchController.abort();
  }

  // 2. إنشاء متحكم إلغاء جديد للبحث الحالي
  activeSearchController = new AbortController();

  try {
    const url = \`https://dummyjson.com/products/search?q=\${encodeURIComponent(keyword)}&limit=3\`;
    
    // 3. إرسال الطلب مع ربط الإشارة
    const response = await fetch(url, {
      signal: activeSearchController.signal
    });

    // 4. التحقق من كود حالة الاستجابة
    if (!response.ok) {
      throw new Error(\`فشل جلب المنتجات: كود \${response.status}\`);
    }

    // 5. فك نص الـ JSON إلى كائن
    const data = await response.json();
    return data.products;
  } catch (err) {
    // 6. التعامل مع الأخطاء وتجاهل الإلغاء المقصود
    if (err.name === 'AbortError') {
      console.log(\`تم إلغاء البحث عن "\${keyword}" بنجاح بسبب بحث أحدث.\`);
      return [];
    }

    console.error('خطأ غير متوقع في البحث:', err.message);
    return [];
  }
}

// اختبار الدالة: إطلاق بحث ثم إطلاق بحث آخر يلغي الأول فوراً
searchProducts('phone');
searchProducts('laptop').then(products => {
  console.log('نتائج البحث الأحدث عن laptop:', products.map(p => p.title));
});`
  },
  infographic: {
    title: "إنفوجرافيك الموضوع: الترسانة الكاملة للبرمجة غير المتزامنة في JavaScript",
    badge: "محرك الشبكة والوقت",
    summary: "البرمجة غير المتزامنة هي التي تصنع الفارق بين موقع ويب متجمد وبطيء وبين تطبيق فائق السرعة والسلاسة. إتقان async/await، الـ Event Loop، والـ Fetch مع AbortController هو جواز سفرك لاحتراف بناء تطبيقات React العالمية.",
    points: [
      "Async vs Sync: العمليات في الخلفية تبقي واجهة المستخدم طليقة دون تجميد.",
      "Event Loop: يراقب الـ Call Stack ويفرغ الـ Microtasks قبل الـ Macrotasks.",
      "Promises: ثلاث حالات حتمية (Pending, Fulfilled, Rejected) تحمي من جحيم الـ Callbacks.",
      "async/await: صياغة ساحرة تجعل الكود غير المتزامن خطياً ومقروءاً كالمتزامن.",
      "Promise.all & allSettled: تشغيل المهام بالتوازي لتوفير وقت المستخدم الثمين.",
      "AbortController: حارس الأمان لإلغاء الطلبات المتأخرة وحماية React من الـ Race Conditions."
    ]
  }
};
