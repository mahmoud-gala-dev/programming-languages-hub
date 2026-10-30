// src/data/sections/section2/topic1.js
// الموضوع 1: المفاهيم الأساسية في JavaScript (JavaScript Core Concepts)

export const SECTION_2_TOPIC_1 = {
  id: "2.1",
  title: "المفاهيم الأساسية",
  englishTitle: "Core JavaScript Concepts",
  description: "اللبنات الأولى للغة التفاعل والذكاء: المتغيرات الحديثة، أنواع البيانات، العمليات المنطقية، الشروط، الحلقات، الدوال، نطاقات المتغيرات Scope، والتعامل مع الأخطاء.",
  icon: "Binary",
  subtopics: [
    {
      id: "2.1.a",
      title: "المتغيرات let و const",
      englishTitle: "Variables: let & const (vs var)",
      definition: "المتغير هو صندوق تخزين في ذاكرة الحاسوب (RAM) تضع بداخله قيمة (مثل اسم المستخدم، أو رصيده البنكي) وتطلق عليه اسماً لتسترجعه وقتما تشاء. نستخدم const لتخزين القيم الثابتة التي لا نريد تغييرها أبداً، ونستخدم let لتخزين القيم القابلة للتغير، بينما كلمة var هي النمط القديم الذي تجاوزه الزمن.",
      analogy: "تخيل أن لديك صندوقين في غرفتك:\n1. صندوق حديدي مغلق برقم سري (const): وضعت فيه 'شهادة ميلادك' ورقم هويتك الوطنية، شيء ثابت لا يتغير طوال حياتك.\n2. صندوق خشبي مفتوح (let): وضعت فيه 'ملابسك اليومية' أو 'رصيد محفظتك'، شيء يتغير ويزيد وينقص كل يوم.",
      why: "بدون المتغيرات، لن يتذكر الموقع أي شيء عن الزائر! لن يعرف اسمه عند التنقل بين الصفحات، ولن يعرف عدد المنتجات في سلة المشتريات. المتغيرات هي ذاكرة البرنامج الحية.",
      terms: [
        { term: "Variable", pronunciation: "فاريبل", meaning: "المتغير؛ مساحة محجوزة في الذاكرة لتخزين البيانات" },
        { term: "const (Constant)", pronunciation: "كونست", meaning: "ثابت لا يمكن إعادة تعيين قيمته بعد تعريفه" },
        { term: "let", pronunciation: "ليت", meaning: "متغير مرن يقبل تغيير وتحديث قيمته لاحقاً" },
        { term: "var", pronunciation: "فار", meaning: "الطريقة القديمة غير المحبذة في JavaScript الحديثة" },
        { term: "Reassignment", pronunciation: "ري أساينمنت", meaning: "إعادة إسناد قيمة جديدة للمتغير" }
      ],
      syntax: "const appName = 'متجر الأمل'; // قيمة ثابتة لا تتغير\nlet cartTotal = 0;              // قيمة متغيرة تبدأ بصفر\ncartTotal = 50;                 // تحديث سليم للـ let\n// appName = 'متجر آخر';        // ❌ خطأ فادح! لا يمكن تغيير const",
      simpleCode: `// 1. استخدام const لتخزين اسم الموقع الثابت
const siteTitle = "أكاديمية تعليم React";

// 2. استخدام let لتخزين عدد المشتركين القابل للزيادة
let activeStudents = 100;

// 3. انضم طالب جديد، نقوم بزيادة العدد بمقدار 1
activeStudents = activeStudents + 1;

// 4. طباعة النتيجة في الكونسول للتأكد
console.log("اسم المنصة:", siteTitle); // يطبع: أكاديمية تعليم React
console.log("عدد الطلاب الحالي:", activeStudents); // يطبع: 101`,
      advancedCode: `<!-- تجربة تفاعلية لحساب رصيد المحفظة باستخدام let و const -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 440px;">
  <h4 style="margin-top: 0; color: #38bdf8;">محاكاة إدارة الرصيد (let vs const):</h4>
  
  <div style="background: #1e293b; padding: 12px; border-radius: 8px; margin-bottom: 12px; font-size: 13px;">
    <div>👤 صاحب الحساب (const): <b id="user-display" style="color: #60a5fa;">أحمد البطل</b></div>
    <div style="margin-top: 6px;">💰 الرصيد الحالي (let): <b id="balance-display" style="color: #4ade80;">\$100</b></div>
  </div>

  <div style="display: flex; gap: 8px;">
    <button onclick="addCash()" style="background: #10b981; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
      إيداع + \$50
    </button>
    <button onclick="spendCash()" style="background: #ef4444; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
      شراء - \$30
    </button>
  </div>
</div>

<script>
  // اسم المستخدم ثابت لا يتغير طوال الجلسة
  const userName = "أحمد البطل";
  // الرصيد متغير يزيد وينقص مع العمليات
  let currentBalance = 100;

  function addCash() {
    // زيادة 50 على الرصيد المتغير
    currentBalance = currentBalance + 50;
    document.getElementById('balance-display').innerText = '$' + currentBalance;
  }

  function spendCash() {
    // خصم 30 من الرصيد المتغير
    currentBalance = currentBalance - 30;
    document.getElementById('balance-display').innerText = '$' + currentBalance;
  }
</script>`,
      outputExplanation: "يرى المستخدم كيف يظل اسم صاحب الحساب ثابتاً لا يمسه أي تغيير بفضل const، بينما يتحدث رقم الرصيد فوراً بالزيادة والنقصان بفضل let مع كل نقرة زر.",
      commonMistakes: [
        {
          wrong: "استخدام let لكل شيء عشوائياً حتى للمتغيرات التي لا تتغير أبداً.",
          right: "اجعل const هي اختيارك التلقائي الافتراضي، واستخدم let فقط عندما تعلم يقيناً أن القيمة ستتغير لاحقاً.",
          reason: "استخدام const يحمي كودك من تغيير القيم بالخطأ ويسهل قراءة الكود للمطورين الآخرين."
        },
        {
          wrong: "محاولة إعادة تعيين قيمة لمتغير const مثل: const pi = 3.14; pi = 3.15;.",
          right: "إذا كانت القيمة ستتغير، عرفها بـ let من البداية.",
          reason: "المتصفح سيطلق خطأ صريحاً يوقف البرنامج: TypeError: Assignment to constant variable."
        }
      ],
      bestPractices: [
        "اختر أسماء ذات معنى واضح للمتغيرات (مثل studentAge بدلاً من الحروف المبهمة مثل x أو a).",
        "اتبع أسلوب سنام الجمل (camelCase) في تسمية المتغيرات؛ تبدأ الكلمة الأولى بحرف صغير والكلمات التالية بحرف كبير."
      ],
      infographic: {
        badge: "أساس الذاكرة",
        title: "المتغيرات let و const",
        icon: "Box",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "const (الخيار الافتراضي)", desc: "لقيم ثابتة ومحمية لا تتغير مثل أسماء الدوال والروابط الثابتة" },
          { title: "let (الخيار المرن)", desc: "لقيم تتغير مع تفاعل المستخدم مثل العدادات ومجاميع السلة" },
          { title: "تجنب var نهائياً", desc: "نمط قديم يعاني من مشاكل تسريب النطاق (Scope Leaks) والفوضى" },
          { title: "تسمية camelCase", desc: "كتابة أسماء نظيفة ومعبرة مثل userAccountBalance" }
        ],
        summary: "ابدأ دائماً بـ const، وإذا احتجت للتعديل حولها إلى let، وانسَ var تماماً."
      }
    },
    {
      id: "2.1.b",
      title: "أنواع البيانات",
      englishTitle: "Data Types (Primitive & Reference)",
      definition: "البيانات في جافاسكريبت هي المواد الخام التي نتعامل معها، وتنقسم إلى نوعين كبيرين: بيانات أولية بسيطة (Primitive) مثل النصوص String، والأرقام Number، والقيم المنطقية Boolean، والعدم null و undefined. وبيانات مرجعية مركبة (Reference) مثل الكائنات Objects والمصفوفات Arrays.",
      analogy: "تخيل أنواع الأشياء في حقيبتك:\n- الرقم (Number): مثل عدد القطع النقدية المعدنية (5 أو 10.5).\n- النص (String): مثل رسالة مكتوبة بالحروف بين علامتي تنصيص 'مرحباً'.\n- المنطقي (Boolean): مثل مفتاح مصباح، إما مضاء (true) أو مطفأ (false).\n- العدم (null): مثل صندوق وضعته فارغاً عمداً في انتظار امتلائه.\n- غير المعرف (undefined): مثل صندوق نسيت أن تضع فيه شيئاً أصلاً!",
      why: "الحاسوب جهاز منطقي يحتاج لمعرفة طبيعة المادة: هل يجمعها كأرقام (5 + 5 = 10) أم يدمجها كنصوص ('5' + '5' = '55')؟ معرفة نوع البيانات تمنع الحسابات الكارثية في التطبيقات المالية.",
      terms: [
        { term: "String", pronunciation: "سترينج", meaning: "نص محصور بين علامتي تنصيص '...' أو \"...\"" },
        { term: "Number", pronunciation: "نمبر", meaning: "رقم صحيح أو عشري (مثل 42 أو 3.14)" },
        { term: "Boolean", pronunciation: "بوليان", meaning: "قيمة منطقية لها احتمالان فقط: إما true (صح) أو false (خطأ)" },
        { term: "null", pronunciation: "نَل", meaning: "قيمة فارغة مقصودة وضعها المبرمج عمداً لتمثيل الغياب" },
        { term: "undefined", pronunciation: "آن ديفايند", meaning: "متغير تم تعريفه في الذاكرة ولكن لم يُعطَ أي قيمة بعد" },
        { term: "typeof", pronunciation: "تايب أوف", meaning: "معامل برمجي لمعرفة وفحص نوع البيانات لأي متغير" }
      ],
      syntax: "const text = 'نص عربي';         // String\nconst age = 25;                  // Number\nconst isStudent = true;          // Boolean\nlet selectedItem = null;         // null (فارغ عمداً)\nlet futurePlan;                  // undefined (غير محدد بعد)",
      simpleCode: `// 1. نوع نصي String
const developerName = "سارة محمد";

// 2. نوع رقمي Number
const completedCourses = 12;

// 3. نوع منطقي Boolean (نعم أو لا)
const isSubscribed = true;

// 4. استخدام معامل typeof لمعرفة نوع المتغير في الكونسول
console.log(typeof developerName);   // يطبع: "string"
console.log(typeof completedCourses); // يطبع: "number"
console.log(typeof isSubscribed);     // يطبع: "boolean"`,
      advancedCode: `<!-- فاحص تفاعلي لأنواع البيانات (Data Types Inspector) -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">فاحص أنواع البيانات التفاعلي (typeof):</h4>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 15px;">
    <button onclick="checkType('text')" style="background: #1e293b; color: #38bdf8; border: 1px solid #334155; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      'مرحباً بك' (String)
    </button>
    <button onclick="checkType('num')" style="background: #1e293b; color: #4ade80; border: 1px solid #334155; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      2026 (Number)
    </button>
    <button onclick="checkType('bool')" style="background: #1e293b; color: #facc15; border: 1px solid #334155; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      true (Boolean)
    </button>
    <button onclick="checkType('undef')" style="background: #1e293b; color: #f43f5e; border: 1px solid #334155; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      undefined
    </button>
  </div>

  <div id="type-result" style="background: #020617; padding: 12px; border-radius: 6px; border: 1px dashed #334155; font-family: monospace; font-size: 13px; color: #a7f3d0;">
    انقر على أي قيمة بالأعلى لفحص نوعها الحقيقي...
  </div>
</div>

<script>
  function checkType(kind) {
    const res = document.getElementById('type-result');
    if (kind === 'text') {
      const val = "مرحباً بك";
      res.innerHTML = 'القيمة: "' + val + '"<br>النوع (typeof): <b style="color:#38bdf8;">' + typeof val + '</b> (سلسلة نصية)';
    } else if (kind === 'num') {
      const val = 2026;
      res.innerHTML = 'القيمة: ' + val + '<br>النوع (typeof): <b style="color:#4ade80;">' + typeof val + '</b> (رقم حسابي)';
    } else if (kind === 'bool') {
      const val = true;
      res.innerHTML = 'القيمة: ' + val + '<br>النوع (typeof): <b style="color:#facc15;">' + typeof val + '</b> (قيمة منطقية)';
    } else if (kind === 'undef') {
      let val;
      res.innerHTML = 'القيمة: undefined<br>النوع (typeof): <b style="color:#f43f5e;">' + typeof val + '</b> (غير معرف بعد)';
    }
  }
</script>`,
      outputExplanation: "يعاين المتعلم كيف يكتشف المعالج الداخلي للغة نوع كل قيمة بدقة تامة، فيميز بين الأرقام والنصوص والقيم المنطقية الصريحة.",
      commonMistakes: [
        {
          wrong: "وضع الأرقام بين علامتي تنصيص مثل const price = \"100\"; ومحاولة جمعها رياضياً.",
          right: "كتابة الأرقام بدون علامات تنصيص const price = 100; إذا كنت تريد إجراء عمليات حسابية عليها.",
          reason: "وضع الأرقام في علامات تنصيص يحولها فوراً لنصوص وتصبح عملية الجمع دمجاً حروفياً ('100' + '50' = '10050')!"
        }
      ],
      bestPractices: [
        "استخدم null عندما تريد تفريغ متغير عمداً كدليل على خلوه من القيمة (مثل إلغاء اختيار صورة).",
        "استخدم معامل typeof للتأكد من نوع البيانات القادمة من نماذج المستخدمين قبل معالجتها."
      ],
      infographic: {
        badge: "المواد الخام",
        title: "أنواع البيانات في JavaScript",
        icon: "Layers",
        colors: "from-amber-500 to-yellow-400",
        steps: [
          { title: "String (نصوص)", desc: "كلمات وجمل محصورة بين اقتباسات 'نص' للحوار والأسماء" },
          { title: "Number (أرقام)", desc: "أرقام صحيحة وعشرية صالحة للعمليات الحسابية بدون اقتباس" },
          { title: "Boolean (منطق)", desc: "قيمتا true و false لتحديد القرارات والشروط البرمجية" },
          { title: "null vs undefined", desc: "null فراغ مقصود بيدك، و undefined فراغ أوتوماتيكي منسي" }
        ],
        summary: "كل معلومة في حاسوبك تنتمي بالضرورة إلى أحد هذه الأنواع لتحديد طريقة التعامل معها."
      }
    },
    {
      id: "2.1.c",
      title: "العمليات الحسابية والمنطقية",
      englishTitle: "Arithmetic & Logical Operators",
      definition: "العمليات الحسابية هي الرموز الرياضية المعروفة للجمع (+)، والطرح (-)، والضرب (*)، والقسمة (/)، وباقي القسمة (%). أما العمليات المنطقية فهي أدوات الربط بين الشروط: المعامل AND (&&) الذي يشترط تحقق كل الشروط، والمعامل OR (||) الذي يكتفي بتحقق شرط واحد على الأقل، والمعامل NOT (!) الذي يعكس الحقيقة.",
      analogy: "تخيل شروط دخول قاعة سينما:\n- المعامل AND (&&): يشترط أن 'تملك تذكرة' && 'عمرك أكبر من 18 سنة' معاً لتدخل! إذا فقدت أحدهما فلن تدخل.\n- المعامل OR (||): يمكنك الدفع بـ 'بطاقة بنكية' || 'نقود كاش'؛ يكفي أي واحد منهما لتتم العملية.\n- المعامل NOT (!): مثل زر العكس، إذا كان المصباح مطفأ وضغطت عليه ينير!",
      why: "البرامج الذكية مبنية على المنطق الرياضي: حساب الخصومات في المتجر، والتأكد من تطابق كلمة المرور وتفعيل الحساب معاً للسماح للمستخدم بالدخول.",
      terms: [
        { term: "Arithmetic Operators", pronunciation: "أريثميتيك أوبيراتورز", meaning: "العمليات الحسابية (+, -, *, /, %)" },
        { term: "Modulus (%)", pronunciation: "موديولاس", meaning: "باقي القسمة؛ معرفة ما يتبقى بعد قسمة عددين" },
        { term: "Logical AND (&&)", pronunciation: "لوجيكال آند", meaning: "يشترط أن يكون الطرفان كلاهما صحيحين true" },
        { term: "Logical OR (||)", pronunciation: "لوجيكال أور", meaning: "يكفي أن يكون أحد الطرفين على الأقل صحيحاً true" },
        { term: "Logical NOT (!)", pronunciation: "لوجيكال نوت", meaning: "نفي القيمة؛ تحويل true إلى false والعكس" }
      ],
      syntax: "// عمليات حسابية\nconst sum = 10 + 5;\nconst remainder = 10 % 3; // الباقي 1\n\n// عمليات منطقية\nconst canDrive = hasLicense && isAdult;\nconst canEnter = hasTicket || isVIP;\nconst isClosed = !isOpen;",
      simpleCode: `// 1. حساب السعر النهائي لمنتج مع خصم 10 دولارات
const originalPrice = 100;
const discount = 10;
// عملية الطرح الحسابية
const finalPrice = originalPrice - discount; // النتيجة: 90

// 2. التحقق المنطقي من شروط التوصيل المجاني
const isCartOver100 = finalPrice >= 100; // خطأ false
const hasVipCoupon = true;               // صح true

// نستخدم المعامل OR (||) لتقديم التوصيل إذا تحقق أحد الشرطين
const freeShipping = isCartOver100 || hasVipCoupon; // النتيجة: true!

console.log("السعر المطلوب:", finalPrice);
console.log("هل يستحق توصيلاً مجانياً؟", freeShipping);`,
      advancedCode: `<!-- محاكي تفاعلي لبوابة تحقق أمني تجمع العمليات المنطقية && و || -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">بوابة التحقق المنطقي الذكية 🚦:</h4>

  <div style="space-y-2; font-size: 13px; margin-bottom: 15px;">
    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">
      <input type="checkbox" id="chk-email" onchange="runLogicGate()" />
      <span>1. البريد الإلكتروني مؤكد (hasVerifiedEmail)</span>
    </label>
    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">
      <input type="checkbox" id="chk-phone" onchange="runLogicGate()" />
      <span>2. رقم الجوال مؤكد (hasVerifiedPhone)</span>
    </label>
    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
      <input type="checkbox" id="chk-blocked" onchange="runLogicGate()" />
      <span>3. المستخدم محظور (isBlocked) ⚠️</span>
    </label>
  </div>

  <div id="gate-result" style="padding: 12px; border-radius: 8px; font-weight: bold; text-align: center; font-size: 13px; background: #450a0a; color: #fca5a5; border: 1px solid #ef4444;">
    الدخول مرفوض ❌ (يجب تأكيد البريد أو الهاتف، وألا يكون محظوراً)
  </div>
</div>

<script>
  function runLogicGate() {
    const hasEmail = document.getElementById('chk-email').checked;
    const hasPhone = document.getElementById('chk-phone').checked;
    const isBlocked = document.getElementById('chk-blocked').checked;
    const res = document.getElementById('gate-result');

    // المعادلة المنطقية: (لديه بريد مؤكد أو هاتف مؤكد) وَ (ليس محظوراً!)
    const canAccess = (hasEmail || hasPhone) && (!isBlocked);

    if (canAccess) {
      res.style.background = '#064e3b';
      res.style.color = '#34d399';
      res.style.borderColor = '#10b981';
      res.innerText = 'تم السماح بالدخول بنجاح! ✓ (تحققت الشروط المنطقية)';
    } else {
      res.style.background = '#450a0a';
      res.style.color = '#fca5a5';
      res.style.borderColor = '#ef4444';
      res.innerText = 'الدخول مرفوض ❌ (الشرط المنطقي لم يتحقق)';
    }
  }
</script>`,
      outputExplanation: "يعاين المستخدم كيف تتفاعل المعادلة المنطقية الحقيقية: إذا كان البريد مؤكداً لكن المستخدم محظور، يتدخل المعامل (!isBlocked) ليرفض الدخول فوراً وبأمان مطلق.",
      commonMistakes: [
        {
          wrong: "استخدام علامة مساواة واحدة = للمقارنة بدلاً من == أو ===.",
          right: "تذكر دائماً أن = المفردة مخصصة لتعيين وحفظ القيمة، بينما === للمقارنة والتحقق.",
          reason: "كتابة if (role = 'admin') ستقوم بتعيين الدور كأدمن بدلاً من فحص هل هو أدمن أصلاً!"
        }
      ],
      bestPractices: [
        "استخدم الأقواس () لتوضيح أولويات العمليات المنطقية والحسابية المعقدة لتجعل كودك واضحاً لأي زميل في الفريق.",
        "استخدم خاصية باقي القسمة (%) للتحقق مما إذا كان الرقم زوجياً (num % 2 === 0)."
      ],
      infographic: {
        badge: "محرك المنطق",
        title: "العمليات الحسابية والمنطقية",
        icon: "Calculator",
        colors: "from-blue-600 to-cyan-500",
        steps: [
          { title: "+, -, *, /", desc: "الحسابات الرياضية الأساسية لجمع وطرح وضرب وقسمة الأرقام" },
          { title: "% (باقي القسمة)", desc: "معرفة ما تبقى بعد القسمة لاكتشاف الأرقام الزوجية والفردية" },
          { title: "&& (AND المنطقية)", desc: "الصرامة المطلقة: تشترط تحقق كافة الشروط معاً بلا استثناء" },
          { title: "|| (OR المنطقية)", desc: "المرونة التامة: تكتفي بتحقق شرط واحد صحيح على الأقل" }
        ],
        summary: "العمليات المنطقية هي شبكة الأعصاب التي يتخذ من خلالها حاسوبك القرارات المصيرية."
      }
    },
    {
      id: "2.1.d",
      title: "المقارنات والمساواة",
      englishTitle: "Comparisons & Strict Equality (=== vs ==)",
      definition: "المقارنات هي فحص العلاقة بين قيمتين: هل القيمة أكبر من (>), أو أصغر من (<), أو تماثلها؟ وأهم قاعدة ذهبية في تاريخ جافاسكريبت هي الفرق بين المساواة الصارمة (===) التي تفحص القيمة ونوع البيانات معاً، وبين المساواة المتساهلة (==) التي تحاول تحويل الأنواع عشوائياً وتسبب كوارث برمجية.",
      analogy: "تخيل حارس أمن يفحص جواز سفرك:\n- الحارس المتساهل (==): يرى طفلاً يحمل بطاقة بلاستيكية مكتوب عليها كلمة 'جواز' فيدخله ويقول: 'كلاهما اسمه جواز سفر!' (هذا خطير!).\n- الحارس الصارم (===): يفحص الوجه، والختم الرسمي، ونوع الورقة، ويشترط تطابق الهوية ونوع المستند 100% قبل أن يسمح لك بالدخول!",
      why: "المساواة المتساهلة (==) في جافاسكريبت تعتبر أن 0 == '' (صفر يساوي نصاً فارغاً!) وأن false == '0'! هذه التساهلات تسببت في ملايين الأخطاء البرمجية حول العالم. استخدام === الصارمة يحميك من كل هذه المشاكل.",
      terms: [
        { term: "Strict Equality (===)", pronunciation: "ستريكت إيكواليتي", meaning: "المساواة الصارمة ثلاثية الحدود؛ تفحص القيمة والنوع معاً (الموصى بها دائماً)" },
        { term: "Loose Equality (==)", pronunciation: "لوز إيكواليتي", meaning: "المساواة المتساهلة ثنائية الحدود؛ تقوم بتحويل الأنواع خفية (محظورة في الكود النظيف)" },
        { term: "Strict Inequality (!==)", pronunciation: "ستريكت إن إيكواليتي", meaning: "عدم المساواة الصارمة؛ التأكد من اختلاف القيمة أو النوع" }
      ],
      syntax: "5 === 5;         // true (نفس الرقم والنوع)\n5 === '5';       // false (رقم مقابل نص، مختلفان تماماً! ✓)\n5 == '5';        // true (⚠️ خطأ فادح بسبب تساهل الـ == القديمة)",
      simpleCode: `// القاعدة الصارمة المعتمدة في كل شركات التقنية العالمية:
const enteredPin = "1234"; // مدخلات المستخدم من الحقل (نص String)
const correctPin = 1234;   // الرقم المحفوظ في النظام (رقم Number)

// 1. الفحص الصارم بـ === يحميك ويكشف اختلاف النوع
if (enteredPin === correctPin) {
  console.log("متطابقان تماماً في القيمة والنوع");
} else {
  // هذا ما سيطبع بالفعل لأن أحدهما نص والآخر رقم!
  console.log("مختلفان في النوع! النص لا يساوي الرقم في الفحص الصارم ✓");
}`,
      advancedCode: `<!-- تجربة بصرية حية توضح عجائب وفوارق === مقابل == في JavaScript -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">معمل المقارنات: === مقابل ==</h4>

  <div style="background: #1e293b; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 2;">
    <div>1. المقارنة: <span style="color: #67e8f9;">5 === '5'</span> ➔ <b style="color: #f87171;">false</b> (صارمة وصحيحة ✓)</div>
    <div>2. المقارنة: <span style="color: #67e8f9;">5 == '5'</span> ➔ <b style="color: #fbbf24;">true</b> (⚠️ متساهلة حولت النص لرقم!)</div>
    <div>3. المقارنة: <span style="color: #67e8f9;">0 === false</span> ➔ <b style="color: #f87171;">false</b> (صارمة: رقم مقابل بوليان)</div>
    <div>4. المقارنة: <span style="color: #67e8f9;">0 == false</span> ➔ <b style="color: #fbbf24;">true</b> (⚠️ متساهلة وخادعة جداً!)</div>
  </div>

  <div style="margin-top: 12px; padding: 10px; border-radius: 6px; background: rgba(56, 189, 248, 0.1); border: 1px solid #38bdf8; font-size: 12px; color: #bae6fd;">
    📌 <b>القاعدة القطعية:</b> احذف مفتاح == من لوحة مفاتيحك نهائياً، واستخدم <b>===</b> و <b>!==</b> في كل سطر تكتبه في حياتك البرمجية!
  </div>
</div>`,
      outputExplanation: "يرى المتعلم بالأدلة القاطعة كيف تكشف === الحقيقة الصادقة للفروق بين الأنواع، وتحميه من التناقضات الغريبة التي تسببها == المتساهلة القديمة.",
      commonMistakes: [
        {
          wrong: "استخدام == في شروط المقارنة بحجة أنها 'أقصر' في الكتابة.",
          right: "كتابة === دائماً دون أي استثناء في مشاريع الويب و React.",
          reason: "أداة ESLint تضع خطاً أحمر إجبارياً تحت أي علامة == في الشركات العالمية لمنع الكوارث الحسابية."
        }
      ],
      bestPractices: [
        "استخدم !== للمقارنة عند نفي التساوي بدلاً من != القديمة.",
        "إذا أردت مقارنة نص برقم، حول النص إلى رقم صراحة أولاً باستخدام دالة Number(text) ثم قارن بـ ===."
      ],
      infographic: {
        badge: "القاضي الصارم",
        title: "المقارنات والمساواة (=== vs ==)",
        icon: "Scale",
        colors: "from-purple-600 to-indigo-600",
        steps: [
          { title: "المساواة الصارمة ===", desc: "المعيار العالمي: تفحص تطابق القيمة والنوع معاً بأمان 100%" },
          { title: "عدم المساواة الصارمة !==", desc: "التأكد الصارم من اختلاف القيمة أو النوع بدقة تامة" },
          { title: "المساواة المتساهلة ==", desc: "خادعة وخطيرة؛ تحول النصوص لأرقام خلسة وتسبب ثغرات" },
          { title: "المقارنات الرقمية", desc: "أكبر من (>) وأصغر من (<) وأكبر من أو يساوي (>=)" }
        ],
        summary: "الصرامة الثلاثية === هي صمام الأمان الذي يحمي منطق تطبيقك من أي مفاجآت غادرة."
      }
    },
    {
      id: "2.1.e",
      title: "الشروط if و switch",
      englishTitle: "Conditional Statements: if / else & switch",
      definition: "الجمل الشرطية هي مفترق الطرق وعقل البرنامج الذي يتيح له اتخاذ قرارات مختلفة بناءً على حالة معينة: إذا (if) تحقق الشرط نفذ الكود (أ)، وإلا (else) نفذ الكود (ب). وجملة switch تستخدم عندما يكون لديك خيارات متعددة لنفس المتغير (مثل حالات الطلب: قيد المعالجة، تم الشحن، تم التوصيل).",
      analogy: "تخيل أنك تقف في محطة القطار وتنظر إلى لوحة الطقس:\n- جملة if / else: 'إذا كانت السماء تمطر، افتح المظلة، وإلا امشِ بحرية تحت الشمس'.\n- جملة switch: 'إذا كان لون إشارة المرور أحمر قف، وإذا كان أصفر استعد، وإذا كان أخضر انطلق!'.",
      why: "بدون الشروط، سيكون البرنامج روبوتاً أعمى ينفذ نفس السطور لكل الناس! بفضل if نظهر للمستخدم رسالة 'أهلاً بك يا أحمد' إذا كان مسجلاً، أو نعرض له 'زر تسجيل الدخول' إذا كان زائراً غريباً.",
      terms: [
        { term: "if Statement", pronunciation: "إف ستيتمنت", meaning: "إذا الشرطية؛ تنفذ الكود المحصور بداخلها فقط إذا كان الشرط true" },
        { term: "else / else if", pronunciation: "إلس / إلس إف", meaning: "وإلا؛ البديل الذي يتم تنفيذه إذا فشل الشرط الأول" },
        { term: "switch Statement", pronunciation: "سويتش ستيتمنت", meaning: "جملة التبديل لاختبار حالات متعددة لمتغير واحد بنظافة وترتيب" },
        { term: "case & break", pronunciation: "كيس آند بريك", meaning: "case تحدد الحالة المطابقة، و break توقف التنفيذ لمنع تسربه لما بعده" }
      ],
      syntax: "if (score >= 90) {\n  grade = 'ممتاز';\n} else if (score >= 75) {\n  grade = 'جيد جداً';\n} else {\n  grade = 'يحتاج لمزيد من المذاكرة';\n}",
      simpleCode: `// نظام بسيط لفحص صلاحية المستخدم للدخول
const userRole = "admin"; // رتبة المستخدم

// جملة if شرطية بسيطة
if (userRole === "admin") {
  // يطبع هذا السطر فقط إذا كانت الرتبة مساوية تماماً لأدمن
  console.log("مرحباً بك في لوحة الإدارة والتحكم الكاملة 👑");
} else {
  // يطبع هذا السطر لأي مستخدم آخر عادي
  console.log("مرحباً بك كعضو عادي في الموقع");
}`,
      advancedCode: `<!-- محاكي تتبع شحنة المتجر الإلكتروني باستخدام جملة switch الأنيقة -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">نظام تتبع الطلب (switch / case):</h4>

  <div style="margin-bottom: 12px;">
    <label style="font-size: 12px; color: #94a3b8; display: block; margin-bottom: 4px;">اختر حالة الشحنة:</label>
    <select id="order-status-select" onchange="checkOrderStatus()" style="width: 100%; padding: 8px 12px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white;">
      <option value="pending">قيد المعالجة (pending)</option>
      <option value="shipped">تم الشحن في الطريق (shipped)</option>
      <option value="delivered">تم التوصيل للعميل (delivered)</option>
      <option value="cancelled">تم إلغاء الطلب (cancelled)</option>
    </select>
  </div>

  <div id="status-card" style="padding: 14px; border-radius: 8px; font-size: 13px; background: #1e293b; border: 1px solid #334155; text-align: center;">
    ⏳ جاري تجهيز منتجاتك في المستودع الآن...
  </div>
</div>

<script>
  function checkOrderStatus() {
    const status = document.getElementById('order-status-select').value;
    const card = document.getElementById('status-card');

    // استخدام switch للتعامل مع خيارات الحالات المتعددة بنظافة تامة
    switch (status) {
      case "pending":
        card.style.borderColor = "#facc15";
        card.innerHTML = "⏳ <b>قيد التجهيز:</b> نقوم بتغليف طلبك بعناية في المستودع.";
        break;
      case "shipped":
        card.style.borderColor = "#38bdf8";
        card.innerHTML = "🚚 <b>في الطريق:</b> المندوب في طريقه إلى عنوانك اليوم!";
        break;
      case "delivered":
        card.style.borderColor = "#4ade80";
        card.innerHTML = "🎉 <b>تم الاستلام:</b> نتمنى أن تنال المنتجات إعجابك الكامل!";
        break;
      case "cancelled":
        card.style.borderColor = "#ef4444";
        card.innerHTML = "❌ <b>ملغي:</b> تم إلغاء الطلب واسترجاع المبلغ لحسابك.";
        break;
      default:
        card.innerHTML = "حالة غير معروفة.";
    }
  }
</script>`,
      outputExplanation: "يرى الزائر كيف تتغير حالة الصندوق واللون والرسالة فوراً عند اختيار أي حالة من القائمة، حيث تقوم جملة switch بالقفز المباشر للحالة المطابقة دون الحاجة لتكرار عشرات أسطر if / else المتداخلة.",
      commonMistakes: [
        {
          wrong: "نسيان كتابة كلمة break في نهاية كل حالة case داخل جملة switch.",
          right: "كتابة break دائماً في نهاية كل case لإيقاف التنفيذ بعد مطابقة الحالة.",
          reason: "نسيان break يسبب خطأ شهيراً يسمى (Fall-through)، حيث يستمر الكود في تنفيذ الحالات التالية حتى لو لم تكن مطابقة!"
        }
      ],
      bestPractices: [
        "استخدم if / else إذا كان الشرط مقارنة رقمية (مثل العمر أكبر من 18) أو شرطين فقط.",
        "استخدم switch إذا كان لديك متغير واحد يملك أكثر من 3 أو 4 قيم محددة وثابتة لتجعل كودك نظيفاً ومقروءاً."
      ],
      infographic: {
        badge: "مفترق الطرق",
        title: "الشروط if و switch",
        icon: "GitFork",
        colors: "from-blue-600 to-emerald-600",
        steps: [
          { title: "if (الشرط)", desc: "البوابة الأولى: تنفذ ما بداخلها فقط إذا كان الشرط صحيحاً true" },
          { title: "else if & else", desc: "المسارات البديلة التي تسلكها السيارة إذا لم يتحقق الشرط الأول" },
          { title: "switch (variable)", desc: "لوحة مفاتيح لاختيار الحالة المطابقة من بين عدة خيارات جاهزة" },
          { title: "break و default", desc: "break لإيقاف التسرب، و default للتعامل مع أي حالة طارئة غير متوقعة" }
        ],
        summary: "الشروط هي العقل المفكر الذي يمنح موقعك القدرة على تمييز الأشخاص والتكيف مع الأحداث."
      }
    },
    {
      id: "2.1.f",
      title: "الحلقات التكرارية",
      englishTitle: "Loops (for, while, for...of)",
      definition: "الحلقات التكرارية (Loops) هي قدرة الحاسوب الخارقة على تكرار تنفيذ أمر برمجي معين مئات أو ملايين المرات في أجزاء من الثانية دون تعب، طالما أن هناك شرطاً ما زال صحيحاً (مثل تكرار طباعة أسماء 1000 طالب أو معالجة 500 منتج).",
      analogy: "تخيل مدرب لياقة بدنية يقول لك: 'قم بتكرار تمرين الضغط طالما أنك لم تكمل 20 عدة (for loop)'. في كل لفة تعد: 1، 2، 3... وتزيد العدة واحداً، حتى تصل إلى 20 فيصفر المدرب لتقف فوراً وتستريح! هذا هو عمل العداد والشرط في الحلقة التكرارية.",
      why: "إذا كان لديك متجر يحوي 100 منتج، هل ستكتب كود رسم البطاقة 100 مرة يدوياً وتضيع يومك؟ بالتأكيد لا! بحلقة تكرارية واحدة من 3 أسطر، تأمر الحاسوب بالمرور على كل المنتجات ورسمها جميعاً في رمشة عين.",
      terms: [
        { term: "Loop", pronunciation: "لوب", meaning: "الحلقة التكرارية؛ تكرار كود محدد عدة مرات" },
        { term: "for Loop", pronunciation: "فور لوب", meaning: "الحلقة التقليدية المعتمدة على عداد يبدأ برقم وينتهي عند شرط محدد" },
        { term: "while Loop", pronunciation: "وايل لوب", meaning: "حلقة تستمر في الدوران طالما أن الشرط صحيح (مثل: طالما اللعبة مستمرة)" },
        { term: "for...of", pronunciation: "فور أوف", meaning: "النمط الحديث الأنيق للمرور على عناصر المصفوفات بسهولة فائقة" },
        { term: "Infinite Loop", pronunciation: "إنفينيت لوب", meaning: "الحلقة اللانهائية؛ خطأ كارثي يحدث عندما لا ينتهي الشرط فيتجمد المتصفح!" }
      ],
      syntax: "// 1. حلقة for التقليدية\nfor (let i = 1; i <= 5; i++) {\n  console.log('الرقم:', i);\n}\n\n// 2. حلقة for...of الحديثة للمصفوفات\nfor (const item of items) {\n  console.log(item);\n}",
      simpleCode: `// طباعة جدول الضرب للرقم 5 من 1 إلى 5 باستخدام حلقة for
// 1. نبدأ العداد بـ 1
// 2. نستمر طالما العداد أقل من أو يساوي 5
// 3. نزيد العداد واحداً بعد كل لفة (i++)
for (let i = 1; i <= 5; i++) {
  // حساب الناتج في كل دورة
  const result = 5 * i;
  // طباعة سطر النتيجة
  console.log("5 × " + i + " = " + result);
}`,
      advancedCode: `<!-- مولد قائمة مهام تفاعلي باستخدام حلقة for...of الحديثة -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h4 style="margin: 0; color: #38bdf8;">توليد القوائم بالحلقات (for...of):</h4>
    <button onclick="renderFruitsLoop()" style="background: #10b981; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 11px; font-weight: bold;">
      تشغيل الحلقة التكرارية ⚡
    </button>
  </div>

  <div id="loop-output" style="background: #020617; padding: 12px; border-radius: 8px; border: 1px solid #1e293b; min-height: 90px; font-size: 13px;">
    انقر على الزر لتشاهد كيف تولد الحلقة التكرارية العناصر آلياً...
  </div>
</div>

<script>
  function renderFruitsLoop() {
    const box = document.getElementById('loop-output');
    // مصفوفة أسماء مهارات تطوير الويب
    const skills = ["HTML5 الدلالية", "CSS3 المتجاوبة", "JavaScript الحديثة", "React.js الخارقة"];
    
    let htmlContent = '<div style="color: #4ade80; font-weight:bold; margin-bottom:6px;">تم التوليد بواسطة حلقة for...of:</div>';
    let counter = 1;

    // المرور على كل عنصر في المصفوفة بسلاسة
    for (const skill of skills) {
      htmlContent += '<div style="padding:4px 0; border-bottom:1px solid #1e293b; color:#cbd5e1;">' + 
                     counter + '. ' + skill + ' ✓</div>';
      counter++;
    }

    box.innerHTML = htmlContent;
  }
</script>`,
      outputExplanation: "يرى الزائر كيف تدور الحلقة آلياً حول مصفوفة المهارات، فتولد أسطر HTML منسقة لكل مهارة وتضع الأرقام التسلسلية تلقائياً دون كتابة كود مكرر يدوياً.",
      commonMistakes: [
        {
          wrong: "نسيان زيادة العداد في حلقة while مثل: let i = 0; while (i < 5) { console.log(i); }.",
          right: "التأكد دائماً من وجود خطوة زيادة العداد (i++) التي تضمن وصول الشرط لنهايته.",
          reason: "نسيان زيادة العداد يسبب (Infinite Loop) حلقة لانهائية تلتهم 100% من معالج الحاسوب وتجمد تبويب المتصفح تماماً!"
        }
      ],
      bestPractices: [
        "استخدم حلقة for...of عند التعامل مع المصفوفات البسيطة لأنها أنظف في القراءة وتجنبك أخطاء كتابة العداد i.",
        "تجنب إجراء عمليات ثقيلة (مثل تعديل شجرة الـ DOM) داخل كل لفة في الحلقة؛ بل جمع المحتوى أولاً واحقنه مرة واحدة في النهاية."
      ],
      infographic: {
        badge: "التكرار الفائق",
        title: "الحلقات التكرارية (Loops)",
        icon: "Repeat",
        colors: "from-amber-500 to-orange-600",
        steps: [
          { title: "نقطة البداية (let i = 0)", desc: "تهيئة العداد لأول مرة في الذاكرة لتحديد من أين نبدأ" },
          { title: "شرط الاستمرار (i < N)", desc: "الفحص قبل كل دورة: هل نستمر أم نتوقف الآن فوراً؟" },
          { title: "خطوة التحديث (i++)", desc: "زيادة العداد بعد كل لفة لضمان التقدم نحو النهاية بأمان" },
          { title: "for...of الحديثة", desc: "المرور الذكي الأنيق على كل عناصر المصفوفات بدون عدادات يدوية" }
        ],
        summary: "الحلقات التكرارية هي العمال الرقميون الذين ينجزون آلاف المهمات المتكررة في غمضة عين."
      }
    },
    {
      id: "2.1.g",
      title: "الدوال والمعاملات",
      englishTitle: "Functions & Parameters",
      definition: "الدالة (Function) هي مصنع أو آلة برمجية مستقلة تجمع بداخلها مجموعة أوامر لتنفيذ مهمة محددة، تمنحها اسماً، وتمرر لها مدخلات تسمى (المعاملات Parameters)، لتقوم بتشغيلها وإرجاع نتيجة جاهزة عبر كلمة (return)، مما يتيح لك إعادة استخدام هذا المصنع مئات المرات في أي مكان دون إعادة كتابته.",
      analogy: "تخيل 'ماكينة تحضير العصير البرتقالي': الدالة هي الماكينة نفسها. المعامل (Parameter) هو 'البرتقال الطازج' الذي تدخله في فتحة الماكينة. الكود الداخلي هو شفرات العصر والتصفية. أما النتيجة المرجوعة (return) فهي 'كأس العصير اللذيذ' الذي يخرج لك لتشربه وتستمتع به!",
      why: "المبدأ الأول لكل مبرمج محترف هو (DRY: Don't Repeat Yourself / لا تكرر نفسك!). بدلاً من كتابة 20 سطراً لحساب فاتورة الضريبة في 10 صفحات مختلفة، تضع الحسابات في دالة واحدة وتستدعيها بكلمة واحدة: calculateTax(100).",
      terms: [
        { term: "Function", pronunciation: "فانكشن", meaning: "الدالة؛ كتلة برمجية قابلة للاستدعاء وإعادة الاستخدام" },
        { term: "Parameters", pronunciation: "باراميترز", meaning: "المعاملات؛ المتغيرات التي تستقبلها الدالة في تعريفها" },
        { term: "Arguments", pronunciation: "آرجومنتس", meaning: "القيم الحقيقية الفعلية التي ترسلها للدالة عند استدعائها" },
        { term: "return", pronunciation: "ريتيرن", meaning: "أمر إرجاع النتيجة المحسوبة وتسليمها لمن نادى الدالة" },
        { term: "DRY Principle", pronunciation: "دي آر واي", meaning: "مبدأ عدم تكرار الكود وكتابته مرة واحدة واستدعائه عند الحاجة" }
      ],
      syntax: "// تعريف الدالة\nfunction greetUser(name) {\n  return 'مرحباً بك يا ' + name + '!';\n}\n\n// استدعاء الدالة\nconst message = greetUser('أحمد');",
      simpleCode: `// 1. صناعة دالة مصنع لحساب ضريبة القيمة المضافة (15%)
function calculateVAT(amount) {
  // حساب قيمة الضريبة وضربها في 0.15
  const tax = amount * 0.15;
  // إرجاع النتيجة المحسوبة
  return tax;
}

// 2. استدعاء الدالة لمنتج سعره 200 ريال
const phoneTax = calculateVAT(200); // النتيجة: 30

// 3. استدعاء نفس الدالة لمنتج آخر سعره 1000 ريال دون إعادة كتابة الكود!
const laptopTax = calculateVAT(1000); // النتيجة: 150

console.log("ضريبة الجوال:", phoneTax);
console.log("ضريبة اللابتوب:", laptopTax);`,
      advancedCode: `<!-- حاسبة ذكية تفاعلية توضح قوة الدوال والمعاملات في العمل الحقيقي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">حاسبة الخصم الذكية (Function Demo) 🏷️:</h4>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
    <div>
      <label style="font-size: 11px; color: #94a3b8; display: block; margin-bottom: 4px;">السعر الأصلي (\$):</label>
      <input type="number" id="calc-price" value="250" style="width: 100%; padding: 8px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white;" />
    </div>
    <div>
      <label style="font-size: 11px; color: #94a3b8; display: block; margin-bottom: 4px;">نسبة الخصم (%):</label>
      <input type="number" id="calc-discount" value="20" style="width: 100%; padding: 8px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white;" />
    </div>
  </div>

  <button onclick="handleCalculate()" style="background: #2563eb; color: white; border: none; padding: 10px; border-radius: 6px; width: 100%; font-weight: bold; cursor: pointer; font-size: 12px;">
    تشغيل دالة الحساب الآن
  </button>

  <div id="calc-result" style="margin-top: 12px; padding: 12px; background: #020617; border-radius: 6px; border: 1px dashed #334155; font-size: 13px; text-align: center; color: #4ade80;">
    السعر بعد الخصم: \$200 (وفرت \$50)
  </div>
</div>

<script>
  // دالة الحساب النقية والمستقلة
  function applyDiscount(price, discountPercent) {
    const discountAmount = price * (discountPercent / 100);
    const finalPrice = price - discountAmount;
    return {
      final: finalPrice,
      saved: discountAmount
    };
  }

  function handleCalculate() {
    const p = parseFloat(document.getElementById('calc-price').value) || 0;
    const d = parseFloat(document.getElementById('calc-discount').value) || 0;
    
    // استدعاء الدالة وتمرير القيم كـ Arguments
    const result = applyDiscount(p, d);

    document.getElementById('calc-result').innerHTML = 
      'السعر بعد الخصم: <b style="color:#38bdf8;">$' + result.final + '</b> (وفرت $' + result.saved + ')';
  }
</script>`,
      outputExplanation: "يشاهد المستخدم كيف تتولى الدالة معالجة الأرقام المدخلة من الحقول بدقة، وتحسب قيمة الخصم والسعر النهائي ثم ترجع كائناً يحمل النتائج ليتم عرضه فوراً على الشاشة.",
      commonMistakes: [
        {
          wrong: "نسيان كتابة أمر return داخل الدالة ثم محاولة تخزين نتيجتها في متغير.",
          right: "كتابة return دائماً عندما تريد من الدالة أن تعيد قيمة للمتغير الذي استدعاها.",
          reason: "بدون أمر return، تقوم الدالة بالعمليات وتنهي نفسها دون أن تسلمك أي شيء فتكون النتيجة undefined!"
        }
      ],
      bestPractices: [
        "اجعل الدالة تقوم بمهمة واحدة فقط وتتقنها تماماً (مبدأ Single Responsibility).",
        "سمِّ الدوال بأسماء أفعال صريحة توضح وظيفتها مثل: getUser(), calculateTotal(), sendEmail()."
      ],
      infographic: {
        badge: "مصانع الأكواد",
        title: "الدوال والمعاملات (Functions)",
        icon: "Wrench",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "تعريف الدالة function", desc: "بناء المصنع وتسميته باسم معبر واضح يعكس مهمته" },
          { title: "المعاملات Parameters", desc: "فتحات إدخال المواد الخام والأرقام التي يحتاجها المصنع" },
          { title: "التنفيذ والمعالجة", desc: "العمليات الحسابية والمنطقية الداخلية التي تجري خلف الستار" },
          { title: "أمر return", desc: "تسليم المنتج النهائي الجاهز لمن نادى واستدعى الدالة" }
        ],
        summary: "الدوال هي حجر الأساس لكل تطبيقات React؛ فكل مكون (Component) في React هو في الحقيقة دالة!"
      }
    },
    {
      id: "2.1.h",
      title: "نطاق المتغيرات Scope",
      englishTitle: "Variable Scope (Global, Function & Block)",
      definition: "نطاق المتغيرات (Scope) هو حدود المنطقة الجغرافية التي يكون فيها المتغير مرئياً ومعروفاً ويمكن الوصول إليه؛ ينقسم إلى نطاق عام (Global) متاح في كل أرجاء الملف، ونطاق دالة (Function Scope)، ونطاق الكتلة المحصورة (Block Scope) بين قوسي معقوفين { ... } مثل التي تصاحب if و for.",
      analogy: "تخيل لوائح وأنظمة السفر:\n- النطاق العام (Global Scope): مثل 'قوانين الطيران الدولية'؛ معترف بها ومطبقة في كل سماء العالم.\n- نطاق الكتلة (Block Scope): مثل 'القواعد الداخلية لمنزلك الخاص': في بيتك يمكنك المشي بملابس النوم، لكن بمجرد خروجك إلى الشارع العام فلن يعرفك الناس ولا يمكنك تطبيق قواعد منزلك عليهم!",
      why: "بدون حماية النطاقات، ستتصادم أسماء المتغيرات في التطبيقات الكبيرة؛ فإذا عرفت متغيراً باسم temp في دالة الطقس، سيفسد متغيراً آخر بنفس الاسم في دالة حساب حرارة المعالج! النطاق الكتلي يحمي خصوصية كل جزء.",
      terms: [
        { term: "Scope", pronunciation: "سكوب", meaning: "النطاق؛ حدود الرؤية والصلاحية للمتغيرات" },
        { term: "Global Scope", pronunciation: "جلوبال سكوب", meaning: "النطاق العام المكشوف لكل أجزاء الكود" },
        { term: "Block Scope", pronunciation: "بلوك سكوب", meaning: "نطاق الكتلة المحصورة بين القوسين { } وتدعمه let و const" },
        { term: "Lexical Scope", pronunciation: "ليكسيكال سكوب", meaning: "النطاق الهرمي؛ الأبناء يرون متغيرات آبائهم، ولكن الآباء لا يرون أسرار أبنائهم" }
      ],
      syntax: "const globalVar = 'عام';\n\nif (true) {\n  const blockVar = 'خاص بالكتلة';\n  console.log(globalVar); // ✓ مسموح: يرى العام\n}\n// console.log(blockVar); // ❌ خطأ: المتغير محبوس بالداخل وغير معروف هنا!",
      simpleCode: `// 1. متغير عام في كل الملف
const companyName = "شركة المستقبل";

function printDetails() {
  // 2. متغير خاص بالدالة فقط
  const secretKey = "12345";
  // الدالة تستطيع قراءة المتغير العام بسهولة
  console.log("نحن في:", companyName);
  console.log("المفتاح الخاص:", secretKey);
}

printDetails();
// 3. محاولة قراءة secretKey من الخارج ستفجر خطأ ReferenceError!
// console.log(secretKey); // ❌ خطأ: المتغير محبوس داخل الدالة فقط`,
      advancedCode: `<!-- تجربة تفاعلية توضح كيف تحمي أقواس الكتلة { } المتغيرات بـ let و const -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">تشريح نطاق الكتلة (Block Scope Demo):</h4>

  <div style="background: #1e1e1e; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 12px; border: 1px solid #333; line-height: 1.8;">
    <span style="color: #60a5fa;">let</span> city = <span style="color: #a7f3d0;">"الرياض"</span>; <span style="color: #94a3b8;">// عام (Global)</span><br>
    <br>
    <span style="color: #f43f5e;">if</span> (true) {<br>
    &nbsp;&nbsp;<span style="color: #60a5fa;">let</span> secretCode = <span style="color: #facc15;">999</span>; <span style="color: #94a3b8;">// محبوس داخل { }</span><br>
    &nbsp;&nbsp;console.log(city); <span style="color: #4ade80;">// ✓ يرى الخارج بنجاح</span><br>
    }<br>
    <br>
    console.log(secretCode); <span style="color: #f87171;">// ❌ ReferenceError!</span>
  </div>

  <div style="margin-top: 12px; font-size: 12px; color: #cbd5e1; background: #020617; padding: 10px; border-radius: 6px; border: 1px dashed #334155;">
    💡 <b>المكسب الجوهري:</b> المتغيرات المعرفة بـ <code>let</code> و <code>const</code> لا تتسرب خارج حدود القوسين <code>{ }</code> مما يضمن أمان ونظافة الذاكرة تماماً.
  </div>
</div>`,
      outputExplanation: "يرى المتعلم كيف تشكل الأقواس المعقوفة { } قلعة حصينة تحمي المتغيرات الداخلية من التسرب أو التداخل مع بقية أجزاء التطبيق.",
      commonMistakes: [
        {
          wrong: "استخدام var القديمة التي لا تحترم نطاق الكتلة { } وتتسرب خارجه وتفسد المتغيرات الأخرى.",
          right: "استخدام let و const دائماً لأنهما ملتزمان تماماً بنطاق الكتلة Block Scope.",
          reason: "المتغير var يتسرب من داخل جمل if و for إلى الخارج مسبباً مشاكل تداخل غير متوقعة."
        }
      ],
      bestPractices: [
        "قلل من استخدام المتغيرات العامة (Global Variables) قدر الإمكان واجعل المتغيرات محصورة داخل الدوال الخاصة بها.",
        "تذكر القاعدة الذهبية: النطاق الداخلي يرى الخارجي، ولكن النطاق الخارجي لا يستطيع كشف ما بداخل الأقواس الداخلية."
      ],
      infographic: {
        badge: "أسوار الحماية",
        title: "نطاق المتغيرات (Scope)",
        icon: "Shield",
        colors: "from-teal-600 to-emerald-600",
        steps: [
          { title: "النطاق العام (Global)", desc: "مفتوح ومعروف لكل الملف؛ ينصح بالتقليل منه قدر الإمكان" },
          { title: "نطاق الكتلة { Block }", desc: "قلعة محصنة تحمي متغيرات let و const من التسرب للخارج" },
          { title: "نطاق الدالة Function", desc: "كل ما يولد داخل الدالة يموت مع انتهائها ولا يخرج لغيرها" },
          { title: "الرؤية الهرمية", desc: "الصغير يرى الكبير في الخارج، والكبير لا يخترق أسرار الصغير" }
        ],
        summary: "النطاقات هي الجدران العازلة التي تمنع الفوضى وتسمح لملايين أسطر الكود بالتعايش في سلام."
      }
    },
    {
      id: "2.1.i",
      title: "القيم Truthy و Falsy",
      englishTitle: "Truthy & Falsy Values in JavaScript",
      definition: "في JavaScript، كل قيمة في الوجود - حتى لو لم تكن من نوع بوليان أصلي - يتم تقييمها عند وضعها في جملة شرطية (if) على أنها إما صحيحة افتراضياً (Truthy) أو خاطئة افتراضياً (Falsy). وهناك 6 قيم فقط في كل لغة جافاسكريبت تعتبر Falsy (خاطئة)، وكل ما عداها في الكون يعتبر Truthy!",
      analogy: "تخيل موظف أمن يفحص حقائب المسافرين بحثاً عن أشياء ممنوعة:\n- القيم الـ Falsy هي قائمة الممنوعات الستة المحددة بالاسم: (الصندوق الفارغ ''، والرقم صفر 0، و null، و undefined، و NaN، و false).\n- أي شيء آخر في العالم ليس في هذه القائمة الستة (حتى لو كان كلمة 'مرحبا' أو مصفوفة فارغة []) يعتبر مصرحاً وصحيحاً (Truthy) تلقائياً!",
      why: "هذه الميزة تجعل كتابة الشروط في React فائقة الأناقة؛ فبدلاً من فحص if (userName !== '' && userName !== null)، يمكنك كتابة if (userName) فقط لتتأكد من وجود اسم حقيقي!",
      terms: [
        { term: "Truthy", pronunciation: "تروثي", meaning: "قيمة تتحول تلقائياً إلى true عند اختبارها في شرط منطقي" },
        { term: "Falsy", pronunciation: "فولسي", meaning: "إحدى القيم الست الخاطئة التي تتحول إلى false تلقائياً" },
        { term: "NaN (Not a Number)", pronunciation: "إن إيه إن", meaning: "قيمة رقمية غير صالحة ناتجة عن عملية حسابية خاطئة" },
        { term: "Coercion", pronunciation: "كوهيرشن", meaning: "التحويل الضمني التلقائي لنوع البيانات الذي يقوم به المتصفح" }
      ],
      syntax: "/* القيم الـ Falsy الستة الحصرية في JavaScript: */\n1. false\n2. 0\n3. '' (نص فارغ)\n4. null\n5. undefined\n6. NaN\n\n/* كل ما عداها في الوجود هو Truthy! */",
      simpleCode: `// فحص ذكي وسريع لوجود نص باستخدام خاصية Truthy / Falsy
const userMessage = "أهلاً بكم في المنصة";

// بدلاً من فحص الطول، نضع المتغير مباشرة في الشرط
if (userMessage) {
  // يطبع هذا السطر لأن النص الممتلئ هو Truthy!
  console.log("الرسالة موجودة:", userMessage);
}

const emptyInput = ""; // نص فارغ (Falsy!)
if (emptyInput) {
  console.log("لن يطبع هذا السطر أبداً");
} else {
  console.log("الحقل فارغ تماماً وتم اكتشافه بذكاء بفضل Falsy ✓");
}`,
      advancedCode: `<!-- معمل فحص واختبار القيم الـ Truthy و Falsy التفاعلي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">معمل فحص Truthy vs Falsy:</h4>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
    <button onclick="testTruth(0)" style="background: #1e293b; color: #f87171; border: 1px solid #334155; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      اختبار: 0
    </button>
    <button onclick="testTruth('')" style="background: #1e293b; color: #f87171; border: 1px solid #334155; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      اختبار: '' (نص فارغ)
    </button>
    <button onclick="testTruth('React')" style="background: #1e293b; color: #4ade80; border: 1px solid #334155; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      اختبار: 'React'
    </button>
    <button onclick="testTruth([])" style="background: #1e293b; color: #4ade80; border: 1px solid #334155; padding: 8px; border-radius: 6px; cursor: pointer; font-size: 11px;">
      اختبار: [] (مصفوفة)
    </button>
  </div>

  <div id="truth-result" style="background: #020617; padding: 12px; border-radius: 6px; border: 1px dashed #334155; font-size: 13px; text-align: center;">
    اضغط على أي قيمة لاختبار هل يعتبرها المتصفح Truthy أم Falsy...
  </div>
</div>

<script>
  function testTruth(val) {
    const res = document.getElementById('truth-result');
    const isTruthy = Boolean(val);
    if (isTruthy) {
      res.style.color = '#4ade80';
      res.innerHTML = 'القيمة: (' + JSON.stringify(val) + ') تُعتبر <b>Truthy (صحيحة ✓)</b> لأنها ليست من الستة!';
    } else {
      res.style.color = '#f87171';
      res.innerHTML = 'القيمة: (' + JSON.stringify(val) + ') تُعتبر <b>Falsy (خاطئة ❌)</b> ضمن قائمة الستة!';
    }
  }
</script>`,
      outputExplanation: "يرى المتعلم النتيجة الفورية: النصوص الفارغة والصفر تضيء باللون الأحمر كقيم Falsy، بينما النصوص الممتلئة والمصفوفات حتى لو كانت فارغة تعتبر Truthy خضراء.",
      commonMistakes: [
        {
          wrong: "الاعتقاد بأن المصفوفة الفارغة [] أو الكائن الفارغ {} يعتبران Falsy.",
          right: "تذكر دائماً أن المصفوفات والكائنات هي كائنات مرجعية وتعتبر دائماً Truthy حتى وإن كانت فارغة!",
          reason: "فقط القيم الستة المحددة هي Falsy، أما [] فهو صندوق حقيقي موجود في الذاكرة."
        }
      ],
      bestPractices: [
        "استخدم معامل النفي المزدوج (!!) لتحويل أي قيمة في الوجود صراحة إلى قيمة Boolean حقيقية (مثل: !!userToken).",
        "احذر من فحص الصفر إذا كان رقماً صالحاً للنتيجة (مثل نتيجة اختبار score = 0) حتى لا يعتبره الكود خاطئاً ويهمله."
      ],
      infographic: {
        badge: "ميزان الحقيقة",
        title: "القيم Truthy و Falsy",
        icon: "CheckCheck",
        colors: "from-cyan-600 to-blue-700",
        steps: [
          { title: "قائمة Falsy الستة", desc: "false, 0, '' (فارغ), null, undefined, NaN" },
          { title: "عالم Truthy الشامل", desc: "كل قيمة أخرى في الكون تتحول تلقائياً إلى true في الشروط" },
          { title: "المصفوفات [] والكائنات {}", desc: "تعتبر Truthy دائماً حتى لو كانت فارغة تماماً من الداخل" },
          { title: "التحويل بـ !!", desc: "طريقة ذكية سريعة لاختبار حقيقة وجود القيمة كـ Boolean" }
        ],
        summary: "احفظ قائمة الـ Falsy الستة، وستفهم كل سلوكيات الشروط الذكية في مكتبة React."
      }
    },
    {
      id: "2.1.j",
      title: "التعامل مع الأخطاء باستخدام try و catch",
      englishTitle: "Error Handling: try, catch & finally",
      definition: "بنية try و catch هي شبكة الأمان وحزام الأمان لبرنامجك؛ تضع الكود الحساس المعرض للمشاكل (مثل جلب بيانات من خادم عبر الإنترنت) داخل صندوق (try)، فإذا حدث أي عطل مفاجئ يمسك به صندوق (catch) ويعالجه بهدوء دون أن تنهار شاشة الموقع أو يتجمد المتصفح أمام العميل.",
      analogy: "مثل 'ألعاب السيرك وحركات البهلوان في الهواء': يقوم لاعب السيرك بالحركة الخطيرة في الأعلى (try)، ولكن إدارة السيرك تضع دائماً 'شبكة صيد مطاطية قوية في الأسفل' (catch)؛ فإذا اختل توازنه وسقط، تلقفته الشبكة بسلام ووقف على قدميه يحيي الجمهور دون أن يصاب بأذى!",
      why: "الإنترنت بيئة غير مستقرة: قد ينقطع اتصال الزائر، أو يتعطل خادم الشركة فجأة. بدون try / catch، سيتوقف كود جافاسكريبت بالكامل وتتحول الشاشة إلى صفحة بيضاء ميتة. مع try / catch تظهر للعميل رسالة لطيفة: 'عذراً، تعذر الاتصال، يرجى إعادة المحاولة'.",
      terms: [
        { term: "try block", pronunciation: "تراي بلوك", meaning: "كتلة التجربة؛ نضع بداخلها الكود الذي قد يسبب خطأ" },
        { term: "catch block", pronunciation: "كاتش بلوك", meaning: "كتلة الالتقاط؛ تمسك بالخطأ فور حدوثه وتوفر حلاً بديلاً" },
        { term: "finally block", pronunciation: "فاينالي بلوك", meaning: "كتلة التتويج؛ تنفذ دائماً في كل الأحوال سواء نجح الكود أو فشل" },
        { term: "throw", pronunciation: "ثرو", meaning: "إطلاق ورمي خطأ مخصص برمجياً لإعلام النظام بحدوث مشكلة" }
      ],
      syntax: "try {\n  // كود خطير قد ينفجر (مثل جلب بيانات من سيرفر)\n  riskyOperation();\n} catch (error) {\n  // التعامل مع الانفجار وتنبيه المستخدم بلطف\n  console.error('حدثت مشكلة:', error.message);\n} finally {\n  // ينفذ دائماً (مثل إيقاف مؤشر التحميل)\n  stopSpinner();\n}",
      simpleCode: `// محاكاة قراءة بيانات من نص قد يكون معطوباً
const rawJsonData = "{ الاسم: معطوب بدون علامات تنصيص }";

try {
  // نحاول قراءة وتحويل البيانات الخطيرة
  const user = JSON.parse(rawJsonData);
  console.log("تمت القراءة بنجاح:", user);
} catch (error) {
  // يتدخل هذا الكود فوراً لحماية الصفحة من الانهيار!
  console.warn("⚠️ تم التقاط الخطأ بسلام: البيانات غير صالحة ولكن الموقع مستمر بالعمل!");
} finally {
  console.log("انتهت عملية الفحص بنجاح تام.");
}`,
      advancedCode: `<!-- محاكي جلب بيانات حقيقي يوضح صمام الأمان try/catch مع مؤشر التحميل -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">شبكة الأمان (try / catch / finally):</h4>

  <div style="display: flex; gap: 8px; margin-bottom: 12px;">
    <button onclick="simulateFetch(true)" style="background: #10b981; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 11px; font-weight: bold;">
      تجربة طلب ناجح (200 OK)
    </button>
    <button onclick="simulateFetch(false)" style="background: #ef4444; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 11px; font-weight: bold;">
      تجربة انقطاع السيرفر (Error)
    </button>
  </div>

  <div id="fetch-status" style="background: #020617; padding: 14px; border-radius: 8px; border: 1px solid #1e293b; font-size: 13px; line-height: 1.6;">
    اضغط على أحد الزرين لتشاهد كيف يحمي try/catch الموقع من الانهيار...
  </div>
</div>

<script>
  function simulateFetch(isSuccess) {
    const statusBox = document.getElementById('fetch-status');
    statusBox.innerHTML = '⏳ 1. [try]: بدأنا طلب البيانات وفتحنا مؤشر التحميل...<br>';

    setTimeout(() => {
      try {
        if (!isSuccess) {
          // رمي خطأ برمجياً لمحاكاة سقوط السيرفر
          throw new Error("فشل الاتصال: السيرفر لا يستجيب (Error 500)");
        }
        // الكود الناجح
        statusBox.innerHTML += '<b style="color:#4ade80;">✓ 2. [نجاح]: تم استقبال بيانات المستخدم بنجاح!</b><br>';
      } catch (err) {
        // شبكة الصيد تمسك بالخطأ وتعرض رسالة أنيقة
        statusBox.innerHTML += '<b style="color:#f87171;">⚠️ 2. [catch]: تم التقاط الخطأ: ' + err.message + '</b><br>';
      } finally {
        // تنفذ دائماً لإغلاق مؤشر التحميل وتأمين الواجهة
        statusBox.innerHTML += '<span style="color:#94a3b8; font-size:11px;">🔒 3. [finally]: تم إغلاق مؤشر التحميل بأمان تام.</span>';
      }
    }, 600);
  }
</script>`,
      outputExplanation: "يعاين المستخدم الشاشة عندما يحدث خطأ كارثي في الخادم: بدلاً من أن تتجمد الصفحة، يقوم كتلة catch باحتواء الخطأ بلباقة، بينما يضمن finally إغلاق شاشة التحميل ليبقى التطبيق متماسكاً ومهنياً.",
      commonMistakes: [
        {
          wrong: "ترك كتلة catch فارغة دون طباعة الخطأ أو تنبيه المستخدم (Silent Failure).",
          right: "تسجيل الخطأ في الكونسول أو إظهار رسالة واضحة للمستخدم تشرح المشكلة.",
          reason: "ابتلاع الخطأ بصمت يجعلك عاجزاً عن اكتشاف سبب عدم عمل الزر عند المراجعة والبرمجة."
        }
      ],
      bestPractices: [
        "استخدم try / catch دائماً حول عمليات جلب البيانات من الـ APIs وعمليات قراءة التخزين المحلي LocalStorage.",
        "استخدم كتلة finally لإيقاف مؤشرات التحميل (Loading Spinners) حتى لا تظل تدور للأبد إذا فشل الطلب."
      ],
      infographic: {
        badge: "حزام الأمان",
        title: "إدارة الأخطاء (try / catch)",
        icon: "ShieldAlert",
        colors: "from-rose-600 to-red-700",
        steps: [
          { title: "try { ... }", desc: "صندوق التجربة الآمن: وضع الأكواد الحساسة المعرضة للتقلبات" },
          { title: "catch (error)", desc: "شبكة الإنقاذ: التقاط الخطأ ومنع تجمد الشاشة أو انهيار الموقع" },
          { title: "throw new Error", desc: "إطلاق تنبيه مخصص عند اكتشاف بيانات غير منطقية" },
          { title: "finally { ... }", desc: "الخاتمة الإلزامية: تنفذ دائماً لتنظيف الذاكرة وإيقاف مؤشر التحميل" }
        ],
        summary: "الفرق بين المبرمج المبتدئ والمحترف هو أن المحترف يضع حزام أمان try/catch في كل منعطف خطر."
      }
    }
  ],
  quiz: [
    {
      question: "ما هي الكلمة المفتاحية الافتراضية التي يجب أن تبدأ بها دائماً لتعريف المتغيرات في JavaScript الحديثة لحمايتها من التعديل العفوي؟",
      options: ["var", "let", "const", "def"],
      correctIndex: 2,
      explanation: "الكلمة const هي الخيار الافتراضي الذهبي للمبرمج المحترف؛ تضمن أن القيمة ثابتة وتمنع إعادة تعيينها بالخطأ، ولا نلجأ إلى let إلا للضرورة المتغيرة."
    },
    {
      question: "أي من القيم التالية تعتبر قيمة Falsy حصرية في لغة JavaScript؟",
      options: ["[] (مصفوفة فارغة)", "{} (كائن فارغ)", "0 (الرقم صفر)", "'false' (كلمة false كنص)"],
      correctIndex: 2,
      explanation: "الرقم 0 هو أحد أعضاء قائمة الـ Falsy الستة الحصرية، بينما المصفوفة والكائن والنص الممتلئ تعتبر جميعها Truthy دائماً."
    },
    {
      question: "ما فائدة كتلة finally داخل بنية try / catch؟",
      options: [
        "تنفذ فقط إذا حدث خطأ",
        "تنفذ دائماً سواء نجح كود try أو حدث خطأ وتم التقاطه في catch",
        "تستخدم لتلوين الخطأ بالأحمر",
        "تقوم بإعادة تشغيل الحاسوب"
      ],
      correctIndex: 1,
      explanation: "كتلة finally مخصصة للتنفيذ الإلزامي في كل الأحوال؛ وتستخدم غالباً لإيقاف مؤشر التحميل وتنظيف الموارد لضمان استقرار الواجهة."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء دالة فحص وتصريح دخول مستخدم مع try/catch",
    description: "قم بإنشاء دالة باسم verifyUserPass تستقبل اسم المستخدم وعمره؛ تتحقق بأن الاسم موجود وأن العمر أكبر من أو يساوي 18 بـ ===، وإذا كان العمر أقل تطلق خطأ برمجي بـ throw، مع تغليف العملية كاملة داخل try و catch.",
    hints: [
      "استخدم throw new Error('رسالة الخطأ') عند اكتشاف عمر أقل من 18.",
      "استخدم try لتجربة استدعاء الدالة، و catch (err) لالتقاط رسالة الخطأ وطباعتها.",
      "استخدم const لتعريف الدالة واسم المستخدم."
    ],
    solution: `// الحل النموذجي لدالة الفحص والتصريح خطوة بخطوة مع تعليق على كل سطر:

// 1. تعريف دالة الفحص التي تستقبل الاسم والعمر
function verifyUserPass(userName, age) {
  // فحص هل الاسم فارغ أو Falsy
  if (!userName) {
    // إطلاق خطأ فوري برمجياً
    throw new Error("اسم المستخدم مطلوب ولا يمكن تركه فارغاً!");
  }

  // فحص هل السن قانوني (18 سنة فما فوق)
  if (age < 18) {
    // إطلاق خطأ السن الصغير
    throw new Error("عذراً، هذا المحتوى مخصص لمن هم في سن 18 عاماً فما فوق فقط.");
  }

  // إذا تجاوز الشروط، نرجع رسالة الترحيب والنجاح
  return "مرحباً بك يا " + userName + "، تم منحك تصريح الدخول الكامل بنجاح! 🎟️";
}

// 2. تجربة تشغيل الدالة داخل شبكة الأمان try / catch
try {
  // استدعاء الدالة باسم صالح ولكن بعمر 16 (سيطلق خطأ!)
  const accessMessage = verifyUserPass("أحمد", 16);
  console.log(accessMessage);
} catch (error) {
  // يمسك بالخطأ فوراً ويطبع رسالته بهدوء دون انهيار البرنامج
  console.warn("⚠️ تنبيه الأمان:", error.message);
} finally {
  console.log("اكتمل فحص السجلات الأمنية.");
}`
  },
  topicInfographic: {
    title: "خريطة المفاهيم: أساسيات JavaScript الصخرية",
    badge: "الموضوع 2.1",
    overview: "المفاهيم الأساسية تشكل المنطق الداخلي لأي تطبيق: المتغيرات الحديثة const و let، أنواع البيانات وميزان الحقائق، والعمليات المنطقية والشروط والحلقات والدوال المحمية بـ try/catch.",
    pillars: [
      { name: "الذاكرة", color: "#38bdf8", role: "const للثوابت، let للمتغيرات، و camelCase للتسمية" },
      { name: "الأنواع والمنطق", color: "#facc15", role: "String, Number, Boolean, === الصارمة، وقائمة Falsy الستة" },
      { name: "المسارات والقرارات", color: "#4ade80", role: "if/else للقرارات، switch للحالات، و for...of للتكرار" },
      { name: "المصانع والأمان", color: "#f43f5e", role: "الدوال لعدم التكرار DRY، و try/catch كحزام أمان دائم" }
    ]
  }
};
