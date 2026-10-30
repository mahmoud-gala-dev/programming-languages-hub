// src/data/sections/section1/topic1.js
// الموضوع 1: مقدمة في تطوير الويب (Introduction to Web Development)

export const TOPIC_1 = {
  id: "1.1",
  title: "مقدمة في تطوير الويب",
  englishTitle: "Introduction to Web Development",
  description: "المدخل الأساسي لفهم بنية الويب، دور المتصفح والخادم، وكيف تتحول الشفرات البرمجية إلى صفحات تفاعلية يراها المستخدم.",
  icon: "Globe",
  subtopics: [
    {
      id: "1.1.a",
      title: "مفهوم تطوير الواجهات الأمامية",
      englishTitle: "Frontend Development Concept",
      definition: "تطوير الواجهات الأمامية هو فن وعلم بناء كل ما يراه المستخدم ويتفاعل معه مباشرة في متصفح الإنترنت؛ من أزرار، ونصوص، وصور، وحركات، ونماذج إدخال.",
      analogy: "تخيل أنك دخلت مطعماً فخماً: الديكور الرائع، الطاولات المنسقة، قائمة الطعام الأنيقة، وطريقة استقبال النادل لك، كلها تمثل 'الواجهة الأمامية' للمطعم. أنت لا ترى المطبخ الداخلي أو ثلاجات حفظ اللحوم، بل ترى فقط الواجهة المصممة لراحتك وتفاعلك.",
      why: "بدون واجهة أمامية، سيكون الإنترنت عبارة عن شاشات سوداء ونصوص صلبة لا يفهمها إلا المتخصصون. الواجهة الأمامية تحول البيانات المعقدة إلى تجربة بصرية سهلة وممتعة لأي إنسان على وجه الأرض.",
      terms: [
        { term: "Frontend", pronunciation: "فرونت إند", meaning: "الواجهة الأمامية المرئية للمستخدم" },
        { term: "User Interface (UI)", pronunciation: "يوزر إنترفيس", meaning: "واجهة المستخدم؛ أي الأشكال والألوان والأزرار" },
        { term: "User Experience (UX)", pronunciation: "يوزر إكسبيرينس", meaning: "تجربة المستخدم؛ مدى سهولة وسلاسة استخدام الموقع" }
      ],
      syntax: "يتكون الفرونت إند من ثلاث ركائز أساسية:\n1. HTML: العظام والهيكل.\n2. CSS: الملابس والشكل الجمالي.\n3. JavaScript: العضلات والحركة والتفاعل.",
      simpleCode: `<!-- هيكل بسيط لزر واجهة أمامية مع تفاعل بسيط -->
<!-- زر عادي يستمع لنقرة المستخدم -->
<button onclick="alert('أهلاً بك في عالم الويب!')" style="background-color: #3b82f6; color: white; padding: 10px 20px; border-radius: 8px; border: none; cursor: pointer; font-size: 16px;">
  <!-- نص الزر الذي يراه المستخدم -->
  اضغط هنا للتفاعل
<!-- إغلاق وسم الزر -->
</button>`,
      advancedCode: `<!-- مثال متكامل يوضح تضافر HTML و CSS و JS في واجهة بطاقة منتج تفاعلية -->
<div id="product-card" style="border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px; max-width: 280px; text-align: center; font-family: sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
  <!-- صورة المنتج المرئية -->
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" alt="حذاء رياضي" style="width: 100%; border-radius: 8px;" />
  <!-- اسم المنتج -->
  <h3 style="margin: 12px 0 6px 0; color: #1e293b;">حذاء رياضي مريح</h3>
  <!-- سعر المنتج -->
  <p style="color: #059669; font-weight: bold; font-size: 18px; margin: 0 0 12px 0;">\$99</p>
  <!-- زر إضافة للسلة مع دالة جافاسكريبت تغير حالة الزر برمجياً -->
  <button id="buy-btn" onclick="handleBuy()" style="background-color: #2563eb; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold;">
    إضافة إلى السلة
  </button>
</div>

<script>
  // دالة تحاكي التفاعل مع المستخدم عند النقر
  function handleBuy() {
    // جلب عنصر الزر من الصفحة عبر معرفه الفريد
    const btn = document.getElementById('buy-btn');
    // تغيير نص الزر ليعرف المستخدم أن العملية تمت
    btn.innerText = 'تمت الإضافة بنجاح! ✓';
    // تغيير لون الزر إلى الأخضر لإشعار المستخدم بالنجاح
    btn.style.backgroundColor = '#10b981';
  }
</script>`,
      outputExplanation: "يرى المستخدم بطاقة منتج جذابة تحتوي على صورة حذاء رياضي وسعره. بمجرد الضغط على زر 'إضافة إلى السلة'، تتغير كلمة الزر فوراً إلى 'تمت الإضافة بنجاح! ✓' ويتحول لونه إلى الأخضر الجذاب، مما يوفر استجابة مرئية فورية (Feedback).",
      commonMistakes: [
        {
          wrong: "التركيز على مظهر الموقع (UI) فقط وإهمال سرعة استجابته وسهولة تصفحه (UX).",
          right: "الموازنة الدقيقة بين الجمال البصري وسرعة التحميل وسهولة وصول المستخدم للهدف.",
          reason: "الموقع الجميل والبطيء ينفر الزوار ويدفعهم للمغادرة فوراً."
        }
      ],
      bestPractices: [
        "اجعل الأزرار واضحة وذات حجم مناسب للنقر بأصابع اليد على الهواتف الذكية (44px على الأقل).",
        "قدم تغذية راجعة بصرية فورية (Visual Feedback) لأي نقرة يقوم بها المستخدم.",
        "حافظ على التناسق في الألوان ونوعية الخطوط عبر جميع صفحات موقعك."
      ],
      infographic: {
        badge: "الركيزة الأولى",
        title: "الواجهات الأمامية (Frontend)",
        icon: "Layout",
        colors: "from-blue-600 to-cyan-500",
        steps: [
          { title: "HTML", desc: "الهيكل العظمي للموقع (نصوص، روابط، صور)" },
          { title: "CSS", desc: "المظهر الخارجي والملابس (ألوان، مسافات، متجاوب)" },
          { title: "JavaScript", desc: "العقل والحركة (أحداث النقر، جلب بيانات، حركات)" }
        ],
        summary: "كل بكسل يراه الزائر على شاشته هو من صميم عمل مطور الواجهات الأمامية."
      }
    },
    {
      id: "1.1.b",
      title: "الفرق بين Frontend وBackend",
      englishTitle: "Difference between Frontend & Backend",
      definition: "الـ Frontend هو كل ما يراه المستخدم ويتفاعل معه في متصفحه (جانب العميل)، بينما الـ Backend هو الخوادم وقواعد البيانات والمنطق البرمجي الخفي الذي يعمل خلف الكواليس لتنفيذ العمليات الحساسة (جانب الخادم).",
      analogy: "مثل ماكينة الصراف الآلي (ATM): الشاشة والأزرار والمكان الذي تضع فيه بطاقتك وتكتب فيه رقمك السري هو 'Frontend'. بينما اتصال الماكينة بالبنك المركزي، والتأكد من رصيدك وخصم المبلغ وتحديث الحساب المصرفي هو 'Backend'.",
      why: "لا يمكن وضع أسرار الموقع وقواعد بياناته داخل متصفح المستخدم لأنه يستطيع العبث بها وسرقتها. لذلك تم فصل المعالجة الحساسة في خوادم آمنة (Backend) والتركيز على العرض في المتصفح (Frontend).",
      terms: [
        { term: "Backend", pronunciation: "باك إند", meaning: "الخلفية البرمجية وخوادم البيانات المعالجة خلف الستار" },
        { term: "Client-Side", pronunciation: "كلاينت سايد", meaning: "جانب العميل (جهاز الزائر ومتصفحه)" },
        { term: "Server-Side", pronunciation: "سيرفر سايد", meaning: "جانب الخادم (حواسيب الشركات العملاقة المؤمنة)" },
        { term: "Database", pronunciation: "داتابيس", meaning: "قاعدة البيانات التي تحفظ الحسابات والمنتجات" }
      ],
      syntax: "العلاقة بينهما قائمة على الطلب والاستجابة (Request & Response):\nالعميل يرسل (طلب Request) -> الخادم يعالج البيانات ويرسل (استجابة Response).",
      simpleCode: `// توضيح برمجي بسيط لطلب بيانات من الـ Backend وعرضها في الـ Frontend
// نرسل طلباً عبر الإنترنت إلى خادم الـ Backend
fetch('https://api.example.com/user-data')
  // ننتظر استجابة الخادم ونحولها إلى صيغة مفهومة (JSON)
  .then(response => response.json())
  // نستقبل البيانات ونطبعها أو نعرضها في واجهة المستخدم
  .then(data => {
    // طباعة اسم المستخدم القادم من قاعدة البيانات الآمنة
    console.log('مرحباً بك يا:', data.name);
  });`,
      advancedCode: `<!-- محاكاة تفاعلية للتواصل بين الفرونت إند والباك إند -->
<div style="font-family: sans-serif; background: #0f172a; color: white; padding: 20px; border-radius: 12px; max-width: 380px;">
  <h4 style="margin-top: 0; color: #38bdf8;">نموذج تسجيل دخول (Frontend)</h4>
  <input id="user-email" type="email" placeholder="بريدك الإلكتروني" style="width: 100%; padding: 8px; margin-bottom: 10px; border-radius: 6px; border: 1px solid #334155; background: #1e293b; color: white;" />
  <button onclick="loginUser()" style="background: #0284c7; color: white; width: 100%; padding: 10px; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
    تسجيل الدخول
  </button>
  <div id="status-box" style="margin-top: 15px; font-size: 13px; color: #94a3b8; line-height: 1.5;"></div>
</div>

<script>
  function loginUser() {
    const email = document.getElementById('user-email').value;
    const status = document.getElementById('status-box');
    
    // 1. الواجهة الأمامية تجمع المدخلات
    status.innerHTML = '⏳ 1. الفرونت إند يرسل البريد: (' + email + ') إلى الخادم...<br>';
    
    // محاكاة تأخير إرسال الطلب عبر الإنترنت (1 ثانية)
    setTimeout(() => {
      // 2. الباك إند يتحقق من قاعدة البيانات
      status.innerHTML += '🔒 2. الباك إند استلم الطلب وفحص قاعدة البيانات: تم العثور على الحساب!<br>';
      // 3. الخادم يرجع تصريح الدخول والفرونت إند يرحب بالزائر
      setTimeout(() => {
        status.innerHTML += '<b style="color: #4ade80;">✓ 3. الفرونت إند استلم الموافقة وفتح لوحة التحكم!</b>';
      }, 800);
    }, 1000);
  }
</script>`,
      outputExplanation: "يرى الزائر محاكاة لرحلة البيانات: عند النقر، يظهر نص يشرح انتقال البيانات إلى السيرفر، ثم قيام السيرفر بالتحقق من الحساب، ثم وصول إشعار النجاح للواجهة الأمامية.",
      commonMistakes: [
        {
          wrong: "تخزين كلمات المرور أو أرقام البطاقات الائتمانية في كود الـ JavaScript في المتصفح.",
          right: "إرسال البيانات فوراً إلى الـ Backend المشفر وعدم الاحتفاظ بأي سر في المتصفح.",
          reason: "أي كود جافاسكريبت مكتوب في الفرونت إند يمكن لأي شخص في العالم قراءته بضغطة زر الفحص (Inspect)."
        }
      ],
      bestPractices: [
        "التحقق من صحة المدخلات في الفرونت إند لتسريع تجربة المستخدم، لكن إلزامي إعادة التحقق منها في الباك إند للأمان.",
        "عرض مؤشر تحميل (Spinner) دائماً أثناء انتظار رد الباك إند لمنع شعور الزائر بتجمد الموقع."
      ],
      infographic: {
        badge: "المعمارية",
        title: "Frontend vs Backend",
        icon: "ArrowLeftRight",
        colors: "from-purple-600 to-indigo-600",
        steps: [
          { title: "Frontend (المتصفح)", desc: "الأزرار، المظهر، النماذج، والتفاعل البصري الفوري" },
          { title: "قناة الاتصال (API / HTTP)", desc: "تبادل طلبات واستجابات البيانات بسرعة البرق" },
          { title: "Backend (الخادم)", desc: "قواعد البيانات، التحقق الأمني، والعمليات الحسابية" }
        ],
        summary: "الفرونت إند هو سفير الموقع مع الزائر، والباك إند هو العقل الحامي والمنفذ للأوامر."
      }
    },
    {
      id: "1.1.c",
      title: "كيفية عمل المتصفح والخادم",
      englishTitle: "How Browser and Server Work",
      definition: "المتصفح (مثل Chrome أو Firefox) هو برنامج على جهازك يترجم لغات الويب (HTML, CSS, JS) إلى واجهة مرئية. الخادم (Server) هو كمبيوتر ضخم متصل بالإنترنت دائماً يقوم بتخزين ملفات الموقع وإرسالها لمن يطلبها.",
      analogy: "عندما تطلب كتاباً من متجر إلكتروني: أنت المشتري (المتصفح)، عنوان موقع المتجر هو عنوان المستودع، والشاحنة التي تنقل الكتاب هي شبكة الإنترنت، وأمين المستودع الذي يجهز الكتاب ويرسله لك هو (الخادم Server).",
      why: "المتصفحات بدون خوادم لا فائدة منها لأنها لن تجد ملفات لتعرضها. والخوادم بدون متصفحات لن يستطيع البشر العاديون قراءة بياناتها. تكاملهما هو سر وجود شبكة الإنترنت بأكملها.",
      terms: [
        { term: "Web Browser", pronunciation: "ويب براوزر", meaning: "متصفح الويب (مثل كروم، سفاري، إيدج)" },
        { term: "Web Server", pronunciation: "ويب سيرفر", meaning: "خادم الويب، حاسوب قوي وظيفته إرسال ملفات الموقع" },
        { term: "IP Address", pronunciation: "آي بي أدرس", meaning: "العنوان الرقمي الفريد لكل جهاز على شبكة الإنترنت (مثل 142.250.190.46)" },
        { term: "DNS (Domain Name System)", pronunciation: "دي إن إس", meaning: "دفتر هاتف الإنترنت الذي يترجم اسم الموقع google.com إلى رقم الـ IP" }
      ],
      syntax: "دورة حياة الطلب:\n1. المستخدم يكتب الرابط (URL)\n2. نظام DNS يبحث عن رقم IP الخادم\n3. المتصفح يرسل طلب HTTP Request للخادم\n4. الخادم يرد بملفات الموقع HTTP Response\n5. محرك المتصفح يقوم بتصيير الصفحات (Parsing & Rendering).",
      simpleCode: `// محاكاة تمثيلية بسيطة لطلب صفحة الويب
// الخطوة 1: عنوان الموقع الذي كتبه المستخدم في شريط العناوين
const url = "https://www.mywebsite.com/index.html";

// الخطوة 2: نظام الـ DNS يترجم الاسم إلى رقم IP
const serverIP = "192.168.1.100"; // هكذا يعرف الإنترنت أين يذهب الطلب

// الخطوة 3: إرسال الطلب واستقبال الصفحة
console.log("جاري طلب ملفات الموقع من السيرفر صاحب العنوان:", serverIP);
// النتيجة: ملف HTML يعود إلى المتصفح ليقوم برسمه على الشاشة`,
      advancedCode: `<!-- محاكي مرئي يوضح خطوات طلب الصفحة في المتصفح -->
<div style="font-family: sans-serif; background: #111827; border: 1px solid #374151; padding: 20px; border-radius: 12px; max-width: 480px; color: #f3f4f6;">
  <h4 style="margin: 0 0 10px 0; color: #38bdf8;">محاكي رحلة تصفح موقع:</h4>
  <div style="display: flex; gap: 8px; margin-bottom: 15px;">
    <input id="domain-input" type="text" value="google.com" style="flex: 1; padding: 8px 12px; border-radius: 6px; border: 1px solid #4b5563; background: #1f2937; color: white;" />
    <button onclick="simulateRequest()" style="background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">
      انطلق!
    </button>
  </div>
  <div id="sim-log" style="background: #030712; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 12px; min-height: 100px; color: #a7f3d0; line-height: 1.6;">
    جاهز للتجربة... اكتب اسم الموقع واضغط 'انطلق'
  </div>
</div>

<script>
  function simulateRequest() {
    const domain = document.getElementById('domain-input').value;
    const log = document.getElementById('sim-log');
    log.innerHTML = '1. تم إدخال الرابط: ' + domain + '<br>';
    
    setTimeout(() => {
      log.innerHTML += '2. نظام DNS يبحث عن دفتر الهاتف... وجد الآي بي: (142.250.180.14)<br>';
      setTimeout(() => {
        log.innerHTML += '3. المتصفح يرسل برقية HTTP GET إلى الخادم...<br>';
        setTimeout(() => {
          log.innerHTML += '4. الخادم استجاب برمز (200 OK) وأرسل ملف index.html!<br>';
          setTimeout(() => {
            log.innerHTML += '<b style="color: #60a5fa;">5. متصفحك يقرأ كود HTML ويرسم النصوص والصور أمام عينيك! ✓</b>';
          }, 600);
        }, 600);
      }, 600);
    }, 600);
  }
</script>`,
      outputExplanation: "يعاين المتعلم بالخطوات الدقيقة كيف يكتب العنوان، ثم يتدخل الـ DNS ليحدد الـ IP، ثم يتصل بالسيرفر ليجلب كود الـ HTML، وأخيراً محرك المتصفح يقوم برسم الألوان والصور على الشاشة.",
      commonMistakes: [
        {
          wrong: "الاعتقاد بأن متصفح الإنترنت يقوم بتخزين كل مواقع العالم على القرص الصلب لحاسوبك.",
          right: "المتصفح مجرد عارض ومترجم ذكي؛ يقوم بتحميل الملفات مؤقتاً عند زيارة الموقع فقط.",
          reason: "المواقع تتحدث باستمرار، والخوادم هي التي تحتفظ بالنسخة الأصلية الحية."
        }
      ],
      bestPractices: [
        "تقليل حجم الصور وملفات الكود حتى يستطيع الخادم إرسالها بسرعة والمتصفح رسمها بلمح البصر.",
        "الاستفادة من ميزة الـ Cache (التخزين المؤقت) للملفات الثابتة في المتصفح لتقليل تكرار تحميلها."
      ],
      infographic: {
        badge: "دورة الحياة",
        title: "كيف يعمل المتصفح والسيرفر؟",
        icon: "Server",
        colors: "from-emerald-600 to-teal-500",
        steps: [
          { title: "1. إدخال الرابط", desc: "المستخدم يكتب عنوان الموقع في شريط العناوين" },
          { title: "2. فحص الـ DNS", desc: "تحويل العنوان إلى رقم IP حاسوب الخادم" },
          { title: "3. إرسال الطلب", desc: "المتصفح يطلب ملفات HTML/CSS/JS عبر الإنترنت" },
          { title: "4. التصيير والرسم", desc: "المتصفح يترجم الأكواد ويعرض الموقع أمامك" }
        ],
        summary: "الإنترنت هو حوار مستمر وسريع جداً بين طالب (المتصفح) ومجيب (الخادم)."
      }
    },
    {
      id: "1.1.d",
      title: "مفهوم HTTP وHTTPS",
      englishTitle: "HTTP and HTTPS Protocols",
      definition: "بروتوكول HTTP هو القاموس وقواعد المرور التي يتحدث بها المتصفح مع الخادم لنقل صفحات الويب. أما حرف الـ S في HTTPS فهو يعني (Secure / آمن)، أي أن كل كلمة ورقم مرور يمر بينك وبين الخادم يكون مشفراً بالكامل ضد التجسس.",
      analogy: "تخيل أنك ترسل رسالة لصديقك: إذا أرسلتها في 'بطاقة بريدية مكشوفة' يمكن لساعي البريد أو أي شخص في الطريق قراءتها، فهذا هو (HTTP). أما إذا وضعتها في 'صندوق فولاذي مغلق بقفل سرّي' لا يملك مفتاحه إلا صديقك، فهذا هو (HTTPS).",
      why: "بدون التشفير (HTTPS)، يستطيع أي شخص جالس معك على نفس شبكة الواي فاي العامة في مقهى أن يشاهد كلمات مرورك وبيانات بطاقتك الائتمانية وهي تعبر في الهواء.",
      terms: [
        { term: "HTTP (HyperText Transfer Protocol)", pronunciation: "إتش تي تي بي", meaning: "بروتوكول نقل النص الفائق (غير مشفر)" },
        { term: "HTTPS (HTTP Secure)", pronunciation: "إتش تي تي بي إس", meaning: "بروتوكول نقل النص الفائق الآمن والمشفر" },
        { term: "SSL / TLS Certificate", pronunciation: "إس إس إل / تي إل إس", meaning: "الشهادة الرقمية التي تثبت هوية الموقع وتشفر الاتصال" },
        { term: "Encryption", pronunciation: "إنكربشن", meaning: "التشفير، تحويل النص المقروء إلى شفرة غير مفهومة" }
      ],
      syntax: "الروابط تبدأ بأحد البروتوكولين:\nhttp://example.com (غير آمن ⚠️)\nhttps://example.com (آمن تماماً وعليه علامة القفل الأخضر 🔒)",
      simpleCode: `// في تطبيقات الويب الحديثة، نقوم دائماً بطلب الروابط التي تبدأ بـ https
const secureApiUrl = "https://api.github.com/users/octocat";

// المتصفح يرفض تلقائياً الاتصال بـ http إذا كان الموقع الرئيسي يعمل بـ https لحمايتك
console.log("رابط آمن ومحمي بشهادة SSL:", secureApiUrl);`,
      advancedCode: `<!-- مقارنة مرئية بين النص العادي عبر HTTP والنص المشفر عبر HTTPS -->
<div style="font-family: sans-serif; background: #0f172a; padding: 20px; border-radius: 12px; color: white; max-width: 440px;">
  <h4 style="margin-top: 0;">محاكي تشفير البيانات عبر HTTPS:</h4>
  <label style="font-size: 13px; color: #94a3b8;">اكتب كلمة مرورك للتجربة:</label>
  <input id="plain-text" type="text" value="Secret123!" oninput="updateCrypto()" style="width: 100%; padding: 8px; margin: 6px 0 15px 0; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white;" />
  
  <div style="border-right: 4px solid #ef4444; background: #1e1b4b; padding: 10px; margin-bottom: 10px; border-radius: 4px;">
    <div style="color: #f87171; font-weight: bold; font-size: 13px;">❌ عبر HTTP (مكشوف للجميع):</div>
    <div id="http-view" style="font-family: monospace; font-size: 13px; color: #fca5a5;">Secret123!</div>
  </div>
  
  <div style="border-right: 4px solid #10b981; background: #064e3b; padding: 10px; border-radius: 4px;">
    <div style="color: #34d399; font-weight: bold; font-size: 13px;">🔒 عبر HTTPS (مشفر بـ TLS):</div>
    <div id="https-view" style="font-family: monospace; font-size: 13px; color: #6ee7b7; word-break: break-all;">
      e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
    </div>
  </div>
</div>

<script>
  function updateCrypto() {
    const val = document.getElementById('plain-text').value;
    document.getElementById('http-view').innerText = val || '(فارغ)';
    // تشفير تمثيلي تجريبي
    let hash = '';
    for (let i = 0; i < val.length; i++) {
      hash += (val.charCodeAt(i) * 7391).toString(16) + 'f8a';
    }
    document.getElementById('https-view').innerText = hash || 'لا توجد بيانات للإرسال';
  }
</script>`,
      outputExplanation: "يرى المستخدم كيف تظهر كلمة المرور صريحة لمن يتلصص على شبكة HTTP، بينما تتحول في HTTPS إلى نص مشفر يستحيل فهمه أو اختراقه.",
      commonMistakes: [
        {
          wrong: "تشغيل موقع إنتاجي أو متجر إلكتروني باستخدام بروتوكول http:// العادي.",
          right: "تفعيل شهادة SSL مجانية (مثل Let's Encrypt) وإجبار كل الروابط على التحويل لـ https://.",
          reason: "المتصفحات الحديثة مثل كروم تظهر تحذيراً أحمر مخيفاً 'الموقع غير آمن' مما يدمر ثقة الزوار."
        }
      ],
      bestPractices: [
        "تأكد دائماً من وجود علامة القفل بجانب شريط العنوان قبل كتابة أي بطاقة بنكية أو كلمة مرور في أي موقع.",
        "استخدم تقنية HSTS (HTTP Strict Transport Security) في خادمك لإجبار المتصفح على استخدام HTTPS دائماً."
      ],
      infographic: {
        badge: "الأمان والتشفير",
        title: "HTTP مقابل HTTPS",
        icon: "ShieldCheck",
        colors: "from-green-600 to-emerald-500",
        steps: [
          { title: "HTTP (غير آمن)", desc: "البيانات تمر كنص مكشوف يراه أي متطفل في الشبكة" },
          { title: "شهادة SSL/TLS", desc: "مفتاح تشفير رقمي يربط المتصفح بالخادم فقط" },
          { title: "HTTPS (آمن 100%)", desc: "البيانات مشفرة، لا يمكن فك شفرتها إلا في السيرفر المقصد" }
        ],
        summary: "HTTPS ليس خياراً ترفيهياً، بل هو المعيار الإلزامي لكل مواقع الويب في العالم الحديث."
      }
    },
    {
      id: "1.1.e",
      title: "مفهوم Client-Side Rendering",
      englishTitle: "Client-Side Rendering (CSR) Concept",
      definition: "معالجة العرض لدى العميل (CSR) هي تقنية يرسل فيها الخادم صفحة HTML شبه فارغة مع ملف جافاسكريبت، ويقوم متصفح المستخدم (العميل) ببناء ورسم الصفحة بالكامل محلياً على جهازه.",
      analogy: "تخيل أنك طلبت وجبة من متجر: الطريقة التقليدية أن يرسل لك الوجبة مطبوخة وجاهزة تماماً في طبقها. أما طريقة CSR، فالمتجر يرسل لك طبقاً فارغاً ومعها روبوت سريع جداً ومعه المكونات ليقوم بطبخ وتزيين الوجبة في مطبخك فوراً!",
      why: "هذه التقنية هي سر قوة React وسرعة استجابة التطبيقات الحديثة! عندما ينقر المستخدم على زر، لا ننتظر السيرفر ليصنع لنا صفحة جديدة بالكامل، بل يقوم المتصفح بتحديث الجزء المتغير فقط في جزء من الألف من الثانية.",
      terms: [
        { term: "Rendering", pronunciation: "ريندرينج", meaning: "التصيير، أي تحويل الأكواد البرمجية إلى بكسلات ورسومات على الشاشة" },
        { term: "Client-Side Rendering (CSR)", pronunciation: "كلاينت سايد ريندرينج", meaning: "تصيير وبناء عناصر الواجهة داخل متصفح المستخدم عبر جافاسكريبت" },
        { term: "Bundle", pronunciation: "باندل", meaning: "حزمة ملفات الجافاسكريبت المجمعة التي يستلمها المتصفح" }
      ],
      syntax: "هيكل صفحة CSR يكون غالباً:\n<div id=\"root\"></div>\nثم يقوم كود JavaScript بحقن كافة محتويات الموقع داخل هذا العنصر الوحيد.",
      simpleCode: `<!-- ملف HTML الحقيقي الذي يصل من السيرفر في تطبيقات CSR و React -->
<div id="root">
  <!-- هذا المكان فارغ تماماً عندما يصل من السيرفر! -->
</div>

<script>
  // كود جافاسكريبت الذي يقوم ببناء المحتوى في متصفحك (العميل)
  const rootElement = document.getElementById('root');
  
  // بناء عنوان وفقرة وزر بالكامل من داخل متصفح المستخدم!
  rootElement.innerHTML = \`
    <h1>مرحباً بك في موقع مبني بـ CSR</h1>
    <p>هذا النص تم توليده داخل متصفحك مباشرة عبر JavaScript!</p>
  \`;
</script>`,
      advancedCode: `<!-- محاكاة تفاعلية تقارن سرعة التنقل في CSR دون إعادة تحميل الصفحة -->
<div style="font-family: sans-serif; background: #0f172a; padding: 20px; border-radius: 12px; color: white; max-width: 420px;">
  <div style="display: flex; gap: 8px; margin-bottom: 12px;">
    <button onclick="navigatePage('home')" style="background: #3b82f6; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">الرئيسية</button>
    <button onclick="navigatePage('about')" style="background: #64748b; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">عن الموقع</button>
    <button onclick="navigatePage('contact')" style="background: #64748b; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">اتصل بنا</button>
  </div>
  
  <!-- منطقة العرض التي تتغير فوراً في متصفح الزائر -->
  <div id="page-content" style="background: #1e293b; padding: 15px; border-radius: 8px; border: 1px dashed #475569; min-height: 80px;">
    <h3>صفحة الرئيسية</h3>
    <p style="color: #94a3b8; font-size: 13px;">ملاحظة: لاحظ أن المتصفح لم يقم بإعادة تحميل (Reload) أبداً! الصفحة تغيرت في لحظة واحدة عبر CSR.</p>
  </div>
</div>

<script>
  function navigatePage(page) {
    const content = document.getElementById('page-content');
    if (page === 'home') {
      content.innerHTML = '<h3>صفحة الرئيسية</h3><p style="color: #94a3b8; font-size: 13px;">مرحباً بك في الصفحة الأولى بدون ريلود!</p>';
    } else if (page === 'about') {
      content.innerHTML = '<h3>عن الموقع</h3><p style="color: #94a3b8; font-size: 13px;">نحن منصة متخصصة في تعليم React من الصفر.</p>';
    } else if (page === 'contact') {
      content.innerHTML = '<h3>اتصل بنا</h3><p style="color: #94a3b8; font-size: 13px;">راسلنا عبر البريد الإلكتروني وسنرد فوراً.</p>';
    }
  }
</script>`,
      outputExplanation: "بالنقر بين الأزرار، تتغير الصفحة على الفور بنعومة تامة بدون وميض الشاشة الأبيض وبدون أي إعادة تحميل للصفحة في المتصفح.",
      commonMistakes: [
        {
          wrong: "إرسال ملفات جافاسكريبت ضخمة جداً في البداية مما يجعل الشاشة تظل بيضاء لعدة ثوانٍ.",
          right: "استخدام تجزئة الكود (Code Splitting) وتحميل ما يحتاجه الزائر في صفحته الحالية فقط.",
          reason: "متصفحات الهواتف الضعيفة تستغرق وقتاً في معالجة ملفات الجافاسكريبت الكبيرة."
        }
      ],
      bestPractices: [
        "عرض هيكل تحميل أنيق (Skeleton Loading) أثناء قيام المتصفح ببناء عناصر الصفحة الأولى.",
        "الاهتمام بتهيئة الموقع لمحركات البحث (SEO) إذا كان المحتوى مهماً للظهور في نتائج بحث جوجل."
      ],
      infographic: {
        badge: "التصيير",
        title: "Client-Side Rendering (CSR)",
        icon: "Cpu",
        colors: "from-cyan-600 to-blue-600",
        steps: [
          { title: "1. طلب أولي", desc: "المتصفح يستقبل ملف HTML فارغ تقريباً + كود JS" },
          { title: "2. تشغيل الكود محلياً", desc: "معالج جهاز المستخدم يشغل كود JavaScript" },
          { title: "3. بناء الواجهة التفاعلية", desc: "إنشاء العناصر وحقنها في الـ DOM مباشرة" },
          { title: "4. تنقل فائق السرعة", desc: "التنقل بين الصفحات يتم بدون إعادة تحميل إطلاقاً" }
        ],
        summary: "الـ CSR ينقل عبء تصيير وتوليد الصفحات من عاتق السيرفر إلى قوة معالج متصفح العميل."
      }
    },
    {
      id: "1.1.f",
      title: "مفهوم Single Page Application",
      englishTitle: "Single Page Application (SPA) Concept",
      definition: "تطبيقات الصفحة الواحدة (SPA) هي مواقع ويب تعمل بالكامل داخل صفحة HTML واحدة فقط، بحيث يتم تبديل الشاشات والمحتوى ديناميكياً عبر الجافاسكريبت دون الحاجة لإعادة تحميل الصفحة أو طلب صفحة جديدة من السيرفر في كل نقرة.",
      analogy: "مثل تطبيق WhatsApp أو Gmail على هاتفك: عندما تنتقل من محادثة إلى أخرى، هل يغلق التطبيق ويعيد فتحه؟ بالتأكيد لا! فقط المحتوى الداخلي يتغير بسلاسة وفورية بينما الإطار الخارجي ثابت ومستقر. هكذا بالضبط تعمل مواقع الـ SPA.",
      why: "المواقع التقليدية القديمة (Multi-Page Apps) كانت تعيد تحميل كل شيء مع كل نقرة، مما يسبب شاشة بيضاء ومضيعة لباقات الإنترنت. مواقع الـ SPA جعلت تجربة تصفح الويب تشبه تماماً سرعة وسلاسة تطبيقات الهاتف الذكي.",
      terms: [
        { term: "SPA (Single Page Application)", pronunciation: "إس بي إيه", meaning: "تطبيق الصفحة الواحدة" },
        { term: "MPA (Multi-Page Application)", pronunciation: "إم بي إيه", meaning: "تطبيق متعدد الصفحات (النمط القديم التقليدي)" },
        { term: "Client-Side Routing", pronunciation: "كلاينت سايد راوتينج", meaning: "توجيه وتبديل الصفحات داخل المتصفح دون إعادة طلبها من السيرفر" }
      ],
      syntax: "في الـ SPA، كل المكونات تعيش تحت سقف صفحة واحدة index.html وتتبدل الشاشات عبر مكتبات التوجيه مثل (React Router).",
      simpleCode: `// محاكاة لكيفية قيام تطبيقات الـ SPA بتبديل المحتوى دون إعادة تحميل
const appContainer = document.getElementById('app');

// دالة تعرض صفحة البروفايل
function showProfile() {
  appContainer.innerHTML = '<h2>صفحة الملف الشخصي</h2><p>هنا بياناتك دون ريلود!</p>';
  // تحديث شريط عنوان المتصفح برمجياً ليعرف المستخدم أين هو
  window.history.pushState({}, '', '/profile');
}

// دالة تعرض صفحة الإعدادات
function showSettings() {
  appContainer.innerHTML = '<h2>صفحة الإعدادات</h2><p>هنا خياراتك دون ريلود!</p>';
  window.history.pushState({}, '', '/settings');
}`,
      advancedCode: `<!-- تطبيق SPA مصغر كامل يوضح سرعة التبديل بين الشاشات -->
<div style="font-family: sans-serif; background: #020617; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden; max-width: 450px; color: #f8fafc;">
  <!-- شريط التنقل العلوي الثابت -->
  <header style="background: #0f172a; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b;">
    <span style="font-weight: bold; color: #38bdf8;">🌐 تطبيق تجريبي SPA</span>
    <nav style="display: flex; gap: 8px;">
      <button onclick="renderTab('feed')" style="background: #1e293b; color: white; border: 1px solid #334155; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 12px;">الأخبار</button>
      <button onclick="renderTab('messages')" style="background: #1e293b; color: white; border: 1px solid #334155; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 12px;">الرسائل</button>
      <button onclick="renderTab('profile')" style="background: #1e293b; color: white; border: 1px solid #334155; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 12px;">حسابي</button>
    </nav>
  </header>
  
  <!-- منطقة الشاشة المتغيرة ديناميكياً -->
  <main id="spa-view" style="padding: 20px; min-height: 120px;">
    <h3 style="margin-top: 0; color: #f1f5f9;">آخر الأخبار 📰</h3>
    <p style="color: #94a3b8; font-size: 13px;">أهلاً بك في تطبيق الـ SPA. انقر على التبويبات بالأعلى واستمتع بالسرعة الخارقة في التبديل!</p>
  </main>
</div>

<script>
  function renderTab(tab) {
    const view = document.getElementById('spa-view');
    if (tab === 'feed') {
      view.innerHTML = '<h3 style="margin-top:0; color:#f1f5f9;">آخر الأخبار 📰</h3><p style="color:#94a3b8; font-size:13px;">تم نشر مقال جديد عن مميزات React 19 اليوم!</p>';
    } else if (tab === 'messages') {
      view.innerHTML = '<h3 style="margin-top:0; color:#38bdf8;">الرسائل الخاصة 💬</h3><p style="color:#94a3b8; font-size:13px;">لديك رسالة جديدة من المدرب: مرحباً بك في الدورة!</p>';
    } else if (tab === 'profile') {
      view.innerHTML = '<h3 style="margin-top:0; color:#34d399;">الملف الشخصي 👤</h3><p style="color:#94a3b8; font-size:13px;">الاسم: أحمد المبرمج | المستوى: مطور واجهات واعد</p>';
    }
  }
</script>`,
      outputExplanation: "يلاحظ المتعلم أن شريط الرأس يظل ثابتاً لا يتحرك إطلاقاً، وفقط المحتوى داخل الحاوية هو الذي يتبدل بنعومة بالغة تحاكي برامج الهاتف والكمبيوتر المكتبية.",
      commonMistakes: [
        {
          wrong: "استخدام وسوم الروابط التقليدية <a href=\"/page.html\"> مما يسبب إعادة تحميل الصفحة كاملة وكسر تجربة الـ SPA.",
          right: "استخدام مكونات التوجيه المخصصة (مثل <Link to=\"/page\"> في React Router) أو منع السلوك الافتراضي برمجياً.",
          reason: "المتصفح عند الضغط على رابط عادي يعتقد أنك تطلب موقعاً جديداً فيعيد تحميل كل الملفات."
        }
      ],
      bestPractices: [
        "إدارة أزرار الرجوع والتقدم في المتصفح بعناية (Back & Forward) حتى لا يرتبك المستخدم عند محاولة العودة للصفحة السابقة.",
        "الاحتفاظ بحالة المستخدم (مثل سلة المشتريات) أثناء التنقل بين التبويبات دون فقدانها."
      ],
      infographic: {
        badge: "التطبيقات الحديثة",
        title: "Single Page Application (SPA)",
        icon: "Layers",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "صفحة واحدة ثابتة", desc: "يتم تحميل ملف index.html والقوالب العامة مرة واحدة فقط" },
          { title: "تحديث الأجزاء المتغيرة", desc: "تبديل المحتوى الداخلي فقط عند التنقل بدون Reload" },
          { title: "سلاسة تطبيقات الهاتف", desc: "تجربة استخدام فورية خالية من الشاشات البيضاء المزعجة" }
        ],
        summary: "تطبيقات الـ SPA حولت متصفحات الإنترنت من مجرد قارئات مستندات إلى منصات تشغيل برامج حقيقية."
      }
    },
    {
      id: "1.1.g",
      title: "التعرف على أدوات المطور في المتصفح",
      englishTitle: "Chrome DevTools Overview",
      definition: "أدوات المطور (DevTools) هي مجموعة أدوات احترافية مدمجة داخل متصفح الإنترنت تمنحك قوى خارقة لفحص أكواد HTML وتعديل أنماط CSS حياً، واكتشاف أخطاء JavaScript عبر شاشة الـ Console، ومراقبة سرعة تحميل الشبكة.",
      analogy: "DevTools للمبرمج هي تماماً مثل 'جهاز الأشعة السينية والمجهر' للطبيب الجراح: تتيح لك النظر داخل جسم صفحة الويب، وفحص كل عضو بكسل ببكسل، ومعرفة العضو المصاب وسبب المشكلة وعلاجه فوراً على الهواء مباشرة!",
      why: "بدون أدوات المطور، سيكون المبرمج أعمى تماماً! إذا لم يعمل زر أو تشوهت صورة، لن تعرف السبب. بفضل DevTools تضغط زر الفحص وتعرف فوراً السطر المسبب للمشكلة في ثوانٍ معدودة.",
      terms: [
        { term: "Chrome DevTools", pronunciation: "كروم ديف تولز", meaning: "أدوات المطور في متصفح جوجل كروم" },
        { term: "Inspect Element", pronunciation: "إنسبكت إليمينت", meaning: "فحص العنصر؛ الضغط بزر الفأرة الأيمن لفحص أي جزء في الصفحة" },
        { term: "Console", pronunciation: "كونسول", meaning: "شاشة الأوامر والرسائل التنبيهية وأخطاء الجافاسكريبت" },
        { term: "Network Tab", pronunciation: "نتورك تاب", meaning: "تبويب الشبكة لمراقبة الملفات المحملة وسرعتها" }
      ],
      syntax: "لفتح أدوات المطور في أي متصفح بالعالم:\nاضغط زر F12 في لوحة المفاتيح\nأو انقر بالزر الأيمن للفأرة واختر (Inspect / فحص)\nأو الاختصار: Ctrl + Shift + I (على ويندوز).",
      simpleCode: `// تجربة رسائل الكونسول التي نراها داخل أدوات المطور DevTools
// 1. طباعة رسالة عادية للمطور
console.log("هذه رسالة عادية تخبرك بأن الكود وصل إلى هنا بنجاح!");

// 2. طباعة رسالة تحذير بلون أصفر
console.warn("تنبيه: حجم الصورة كبير وقد يبطئ الموقع!");

// 3. طباعة رسالة خطأ بلون أحمر صريح
console.error("خطأ فادح: لم نتمكن من الاتصال بقاعدة البيانات!");`,
      advancedCode: `<!-- محاكي مرئي لشاشة Console داخل أدوات المطور -->
<div style="font-family: sans-serif; background: #1e1e1e; border: 1px solid #333; border-radius: 8px; max-width: 460px; overflow: hidden; color: #ccc;">
  <div style="background: #252526; padding: 8px 12px; font-size: 12px; display: flex; justify-content: space-between; border-bottom: 1px solid #333;">
    <span style="color: #61dafb; font-weight: bold;">🖥️ محاكي Chrome DevTools (Console)</span>
    <span style="color: #888;">F12</span>
  </div>
  
  <div id="devtools-screen" style="padding: 12px; font-family: monospace; font-size: 12px; min-height: 110px; background: #181818; line-height: 1.6;">
    <div style="color: #4ade80;">> console.log("المتصفح جاهز ومستعد للفحص ✓");</div>
  </div>
  
  <div style="padding: 8px; background: #252526; display: flex; gap: 6px;">
    <button onclick="logNormal()" style="background: #3b82f6; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">إرسال Log</button>
    <button onclick="logWarn()" style="background: #f59e0b; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">إرسال Warn ⚠️</button>
    <button onclick="logErr()" style="background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">إرسال Error ❌</button>
    <button onclick="clearScreen()" style="background: #475569; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">مسح</button>
  </div>
</div>

<script>
  function logNormal() {
    const s = document.getElementById('devtools-screen');
    s.innerHTML += '<div style="color: #93c5fd;">ℹ️ [INFO]: تم تحميل بيانات المستخدم بنجاح!</div>';
  }
  function logWarn() {
    const s = document.getElementById('devtools-screen');
    s.innerHTML += '<div style="color: #fde047; background: rgba(245,158,11,0.1); padding: 2px 4px; border-radius: 2px;">⚠️ [WARN]: الذاكرة المستهلكة مرتفعة قليلاً.</div>';
  }
  function logErr() {
    const s = document.getElementById('devtools-screen');
    s.innerHTML += '<div style="color: #fca5a5; background: rgba(239,68,68,0.15); padding: 2px 4px; border-radius: 2px;">❌ [ERROR]: حدث خطأ 404: الصفحة غير موجودة!</div>';
  }
  function clearScreen() {
    document.getElementById('devtools-screen').innerHTML = '<div style="color: #888;">// تم تنظيف الشاشة (Console was cleared)</div>';
  }
</script>`,
      outputExplanation: "يعاين المستخدم الشاشة السوداء المألوفة للمطورين مع الألوان التوضيحية الثلاثة: الأزرق للمعلومات، والأصفر للتحذيرات، والأحمر البارز للأخطاء الصريحة.",
      commonMistakes: [
        {
          wrong: "تعديل كود الـ HTML والـ CSS داخل تبويب Elements وتوقع أن التعديلات ستُحفظ تلقائياً في ملفات مشروعك على الكمبيوتر.",
          right: "تذكر دائماً أن تعديلات DevTools هي تجارب مؤقتة على المتصفح فقط؛ وتضيع بمجرد تحديث الصفحة.",
          reason: "أدوات المطور مخصصة للاختبار السريع، وبعد أن ترتاح للمظهر عليك نسخ الكود ووضعه في ملفاتك بـ VS Code."
        }
      ],
      bestPractices: [
        "استخدم أداة Device Toggle (أيقونة الهاتف والتابلت) لفحص شكل موقعك على شاشات iPhone وسامسونج وغيرها.",
        "راقب تبويب Network دائماً لاكتشاف أي صورة ضخمة تلتهم وقت الزائر وتبطئ سرعة الموقع."
      ],
      infographic: {
        badge: "أداة المطور الأولى",
        title: "Chrome DevTools",
        icon: "Terminal",
        colors: "from-amber-500 to-orange-600",
        steps: [
          { title: "Elements Tab", desc: "فحص وتعديل هيكل HTML وتنسيقات CSS في الوقت الفعلي" },
          { title: "Console Tab", desc: "صندوق الأوامر البرمجية ورؤية رسائل الأخطاء والأداء" },
          { title: "Network Tab", desc: "مراقبة ملفات الصور والـ APIs وسرعة تحميل كل مورد" },
          { title: "Device Toolbar", desc: "محاكاة تصفح الموقع على شاشات الهواتف واللوحيات" }
        ],
        summary: "DevTools هي مرآتك ومجهرك السحري الذي لا يستغني عنه أي مطور ويب في العالم."
      }
    }
  ],
  quiz: [
    {
      question: "ما هي التقنية المسؤولة عن المظهر الجمالي والألوان وتنسيق الخطوط في صفحة الويب؟",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      correctIndex: 1,
      explanation: "لغة CSS (Cascading Style Sheets) هي المسؤولة حصرياً عن الألوان والخطوط والمسافات والمظهر الجمالي للموقع، بينما HTML للهيكل وJavaScript للتفاعل."
    },
    {
      question: "ما الفائدة الجوهرية لحرف الـ S في بروتوكول HTTPS مقارنة بـ HTTP؟",
      options: [
        "يجعل الموقع أسرع بعشر مرات",
        "يقوم بتشفير البيانات المنقولة بين المتصفح والخادم لمنع التجسس عليها",
        "يقوم بتكبير الصور التلقائي في الصفحة",
        "يسمح للموقع بالعمل بدون إنترنت"
      ],
      correctIndex: 1,
      explanation: "حرف الـ S يعني (Secure) ويعتمد على شهادة SSL/TLS لتشفير كل حرف ورقم يمر عبر الإنترنت، مما يمنع المخترقين من سرقة كلمات المرور والبطاقات."
    },
    {
      question: "كيف يفتح المطور نافذة أدوات المطور (DevTools) في متصفح جوجل كروم؟",
      options: [
        "الضغط على زر F12 أو النقر بزر الفأرة الأيمن واختيار Inspect (فحص)",
        "إغلاق المتصفح وإعادة تشغيله 3 مرات",
        "الضغط على زر المسافة 5 مرات متتالية",
        "كتابة كلمة code في شريط البحث"
      ],
      correctIndex: 0,
      explanation: "يتم فتح DevTools ببساطة عبر زر F12 أو الاختصار Ctrl+Shift+I أو بالنقر بالزر الأيمن في أي مكان بالصفحة واختيار 'فحص / Inspect'."
    }
  ],
  exercise: {
    title: "تمرين عملي: فحص وتعديل عنوان موقع محلياً عبر DevTools",
    description: "قم بفتح أي صفحة ويب في متصفحك (مثل google.com أو صفحة تجريبية)، وافتح أدوات المطور، وابحث عن العنوان الرئيسي، وقم بتغيير النص ولونه إلى الأزرق.",
    hints: [
      "انقر بالزر الأيمن على النص واختر 'فحص' (Inspect) ليحدد لك العنصر في تبويب Elements فوراً.",
      "انقر نقراً مزدوجاً على النص داخل وسم العنصر في تبويب Elements واكتب النص الجديد.",
      "في نافذة Styles على اليمين، أضف الخاصية: color: blue; ولاحظ التغيير الفوري."
    ],
    solution: `<!-- خطوات الحل النموذجية مشروحة خطوة بخطوة -->
/* 1. فتح نافذة المطور بالضغط على F12 */
/* 2. في تبويب Elements، نجد العنصر المكتوب مثلاً: */
<h1 id="main-title">العنوان الأصلي القديم</h1>

/* 3. نقوم بالنقر المزدوج على النص داخل الوسم ونستبدله بـ: */
<h1 id="main-title">أنا الآن أتقن استخدام DevTools بنجاح! 🎉</h1>

/* 4. في لوحة CSS (Styles) على اليمين نضيف التنسيق: */
/* #main-title { color: #2563eb; font-size: 32px; } */
/* النتيجة: يتغير العنوان ولونه فوراً أمام عينيك على الشاشة! */`
  },
  topicInfographic: {
    title: "خريطة المفاهيم: مقدمة عالم الويب",
    badge: "الموضوع 1.1",
    overview: "الويب يتكون من عميل (المتصفح) وخادم (السيرفر) يتحدثان ببروتوكول HTTPS المشفر، مع لغات ثلاث متحدة: HTML للعظام، CSS للمظهر، و JS للحركة.",
    pillars: [
      { name: "Frontend", color: "#38bdf8", role: "كل ما يراه العميل ويتفاعل معه" },
      { name: "Backend", color: "#818cf8", role: "الخوادم وقواعد البيانات الآمنة" },
      { name: "HTTPS", color: "#34d399", role: "قناة التشفير والحماية الصارمة" },
      { name: "DevTools", color: "#fbbf24", role: "مجهر المطور لفحص الأكواد وحل الأخطاء" }
    ]
  }
};

