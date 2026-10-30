// src/data/sections/section1/section1Meta.js
// ملخص القسم الأول، جدول المرجع السريع، المشروع التطبيقي الشامل، وبطاقة الإنفوجرافيك العامة

export const SECTION_1_META = {
  id: 1,
  title: "القسم 1: أساسيات تطوير الويب",
  englishTitle: "Section 1: Web Development Fundamentals",
  summary: [
    "الواجهة الأمامية (Frontend) هي كل ما يراه ويتفاعل معه المستخدم في متصفحه، بينما الخلفية (Backend) هي الخوادم وقواعد البيانات المؤمنة.",
    "الإنترنت يعمل بحوار مستمر بين العميل والخادم عبر بروتوكول HTTPS المشفر، حيث يترجم DNS اسم الموقع إلى رقم IP حاسوب الخادم.",
    "تطبيقات الصفحة الواحدة (SPA) وتصيير جانب العميل (CSR) توفر سرعة خارقة لتصفح الويب تشبه برامج الهاتف دون وميض إعادة تحميل الصفحة.",
    "لغة HTML5 هي العظام الصلبة؛ واستخدام الوسوم الدلالية (Semantic Tags) مثل <header> و <main> و <article> ضروري جداً لتصدر نتائج محركات البحث وإمكانية الوصول (a11y).",
    "لغة CSS3 هي الرداء الجمالي؛ نموذج الصندوق (Box Model) يحتاج دائماً لقاعدة box-sizing: border-box لضبط المساحات بدقة.",
    "نظام Flexbox هو الأفضل للتخطيطات أحادية البعد (أفقية أو رأسية)، بينما CSS Grid هو الأقوى للشبكات ثنائية الأبعاد (صفوف وأعمدة معاً).",
    "التصميم المتجاوب بـ Media Queries يجعل الموقع مطاطياً يتكيف مع شاشات الهواتف والأجهزة اللوحية دون تشوه.",
    "أدوات التطوير الاحترافية تشمل: VS Code للبرمجة، سطر الأوامر للتحكم السريع، Node.js و npm لإدارة المكتبات، و Prettier للتنسيق، و ESLint لحراسة جودة الكود."
  ],
  cheatSheet: [
    { category: "أوامر سطر الأوامر (CLI)", syntax: "cd [path]", description: "تغيير والدخول إلى مجلد محدد" },
    { category: "أوامر سطر الأوامر (CLI)", syntax: "mkdir [name]", description: "إنشاء مجلد جديد على القرص الصلب" },
    { category: "أوامر سطر الأوامر (CLI)", syntax: "npm init -y", description: "توليد ملف package.json أولي في لحظة" },
    { category: "أوامر سطر الأوامر (CLI)", syntax: "npm install [pkg]", description: "تنزيل وتثبيت حزمة برمجية من مستودع npm" },
    { category: "أوامر سطر الأوامر (CLI)", syntax: "npm run dev", description: "تشغيل خادم التطوير المحلي فائق السرعة" },
    { category: "وسوم HTML الأساسية", syntax: "<!DOCTYPE html>", description: "إعلان نوع المستند للإصدار القياسي HTML5" },
    { category: "وسوم HTML الأساسية", syntax: "<meta charset=\"UTF-8\">", description: "ترميز الحروف العالمي لدعم اللغة العربية" },
    { category: "وسوم HTML الأساسية", syntax: "<h1> إلى <h6>", description: "العناوين الهرمية للمحتوى (h1 هو الأهم ويستخدم مرة واحدة)" },
    { category: "وسوم HTML الأساسية", syntax: "<a href=\"...\" target=\"_blank\">", description: "رابط تشعبي يفتح في نافذة جديدة" },
    { category: "وسوم HTML الأساسية", syntax: "<img src=\"...\" alt=\"...\">", description: "عرض صورة مع نص بديل إلزامي لـ SEO وقارئات الشاشة" },
    { category: "وسوم HTML الدلالية", syntax: "<header>, <nav>, <main>", description: "الرأسية وقائمة التنقل والمحتوى الرئيسي الوحيد" },
    { category: "وسوم HTML الدلالية", syntax: "<article>, <section>, <footer>", description: "المقالات المستقلة والأقسام الموضوعية وتذييل الصفحة" },
    { category: "نماذج HTML", syntax: "<input required type=\"email\">", description: "حقل بريد إلزامي يمنع إرسال النموذج وهو فارغ أو خاطئ" },
    { category: "قواعد CSS المحورية", syntax: "* { box-sizing: border-box; }", description: "ضبط حسابات العرض لتشمل الـ Padding والـ Border دون تمدد" },
    { category: "تخطيط CSS", syntax: "display: flex; gap: 16px;", description: "تفعيل التخطيط المرن في بعد واحد مع فجوات بينية متساوية" },
    { category: "تخطيط CSS", syntax: "justify-content: center; align-items: center;", description: "توسيط العناصر في قلب الشاشة رأسياً وأفقياً بدقة" },
    { category: "تخطيط CSS", syntax: "display: grid; grid-template-columns: repeat(3, 1fr);", description: "إنشاء شبكة من 3 أعمدة متطابقة المساحة النسبية" },
    { category: "التجاوب CSS", syntax: "@media (max-width: 768px) { ... }", description: "شروط تنسيق خاصة تطبق فقط على شاشات الهواتف والتابلت" },
    { category: "المتغيرات CSS", syntax: ":root { --brand: #2563eb; }", description: "تعريف متغير عالمي يعاد استخدامه بـ var(--brand)" },
    { category: "الحركات CSS", syntax: "transition: all 0.3s ease;", description: "تنعيم كافة التغييرات الشكلية خلال 0.3 ثانية لتبدو نابضة بالحياة" }
  ],
  miniProject: {
    title: "مشروع القسم الأول: موقع تعريفي لشركة تقنية ناشئة (Tech Startup Landing Page)",
    description: "بناء صفحة هبوط لشركة تقنية ناشئة تجمع كل ما تعلمناه في القسم الأول: هيكل HTML5 دلالي كامل، وقائمة تنقل مرنة بـ Flexbox، وشبكة بطاقات خدمات بـ CSS Grid، ونموذج تواصل مع التحقق التلقائي، وتصميم متجاوب بالكامل مع الهواتف.",
    livePreviewCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>شركة الإبداع للبرمجيات | حلول المستقبل</title>
  <style>
    /* قاعدة الصندوق الذهبية لجميع العناصر */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    /* المتغيرات العامة للألوان والخطوط */
    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --bg-dark: #0f172a;
      --card-bg: #1e293b;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
    }

    body {
      font-family: system-ui, -apple-system, sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-main);
      line-height: 1.6;
    }

    /* 1. الترويسة وشريط التنقل بـ Flexbox */
    header {
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(8px);
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid #334155;
      padding: 14px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 20px;
      font-weight: 800;
      color: #38bdf8;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    nav {
      display: flex;
      gap: 20px;
    }

    nav a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s;
    }

    nav a:hover {
      color: #38bdf8;
    }

    /* 2. قسم البطل الترحيبي (Hero Section) */
    .hero {
      text-align: center;
      padding: 60px 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 38px;
      color: #ffffff;
      margin-bottom: 16px;
      line-height: 1.3;
    }

    .hero p {
      font-size: 16px;
      color: var(--text-muted);
      margin-bottom: 24px;
    }

    .btn-cta {
      display: inline-block;
      background: var(--primary);
      color: white;
      padding: 12px 28px;
      border-radius: 8px;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .btn-cta:hover {
      background: var(--primary-dark);
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
    }

    /* 3. شبكة بطاقات الخدمات بـ CSS Grid */
    .services {
      padding: 40px 20px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      font-size: 26px;
      margin-bottom: 30px;
      color: #38bdf8;
    }

    .grid-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }

    .card {
      background: var(--card-bg);
      border: 1px solid #334155;
      border-radius: 12px;
      padding: 24px;
      text-align: right;
      transition: transform 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: #38bdf8;
    }

    .card-icon {
      font-size: 32px;
      margin-bottom: 12px;
    }

    .card h3 {
      font-size: 18px;
      margin-bottom: 8px;
      color: #ffffff;
    }

    .card p {
      font-size: 14px;
      color: var(--text-muted);
    }

    /* 4. نموذج التواصل مع التحقق التلقائي */
    .contact-section {
      background: #090d16;
      padding: 50px 20px;
      margin-top: 40px;
      border-top: 1px solid #1e293b;
    }

    .form-box {
      max-width: 480px;
      margin: 0 auto;
      background: var(--card-bg);
      padding: 26px;
      border-radius: 12px;
      border: 1px solid #334155;
    }

    .form-group {
      margin-bottom: 14px;
    }

    .form-group label {
      display: block;
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 6px;
    }

    .form-group input, .form-group textarea {
      width: 100%;
      padding: 10px 12px;
      border-radius: 6px;
      border: 1px solid #475569;
      background: #0f172a;
      color: white;
      font-family: inherit;
    }

    .form-group input:focus, .form-group textarea:focus {
      outline: none;
      border-color: #38bdf8;
      box-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
    }

    /* 5. التذييل الدلالي */
    footer {
      text-align: center;
      padding: 20px;
      color: #64748b;
      font-size: 13px;
      border-top: 1px solid #1e293b;
    }

    /* 6. التجاوب مع شاشات الهواتف (Media Query) */
    @media (max-width: 650px) {
      header {
        flex-direction: column;
        gap: 12px;
      }
      .hero h1 {
        font-size: 26px;
      }
    }
  </style>
</head>
<body>

  <!-- 1. الترويسة الدلالية -->
  <header>
    <div class="logo">🚀 إبداع تك</div>
    <nav>
      <a href="#services">خدماتنا</a>
      <a href="#contact">تواصل معنا</a>
    </nav>
  </header>

  <!-- 2. المحتوى الرئيسي -->
  <main>
    <!-- قسم البطل الترحيبي -->
    <section class="hero">
      <h1>نبني واجهات وتطبيقات الويب للمستقبل</h1>
      <p>نساعد الشركات في تحويل أفكارهم إلى منصات سريعة وتفاعلية بأحدث تقنيات React و HTML5 و CSS3.</p>
      <a href="#contact" class="btn-cta">ابدأ مشروعك معنا اليوم ✨</a>
    </section>

    <!-- قسم الخدمات المبني بـ CSS Grid -->
    <section id="services" class="services">
      <h2 class="section-title">خدماتنا الاحترافية</h2>
      <div class="grid-cards">
        <article class="card">
          <div class="card-icon">⚡</div>
          <h3>واجهات فائقة السرعة</h3>
          <p>تطبيقات سريعة الاستجابة مبنية بتقنيات SPA وتصيير العميل فائق السلاسة.</p>
        </article>
        <article class="card">
          <div class="card-icon">📱</div>
          <h3>تصميم متجاوب بالكامل</h3>
          <p>مواقع مرنة تتكيف بذكاء مع كل الشاشات من الهواتف حتى شاشات 4K.</p>
        </article>
        <article class="card">
          <div class="card-icon">♿</div>
          <h3>إمكانية وصول شاملة (a11y)</h3>
          <p>مراعاة معايير التباين ودعم قارئات الشاشة لتصل خدمتك لكل عميل.</p>
        </article>
      </div>
    </section>

    <!-- قسم التواصل بنموذج تفاعلي -->
    <section id="contact" class="contact-section">
      <div class="form-box">
        <h3 style="margin-bottom: 16px; color: #38bdf8; text-align: center;">تواصل معنا مجاناً ✉️</h3>
        <form onsubmit="event.preventDefault(); alert('شكراً لك! تم استلام رسالتك وسيتواصل فريقنا معك خلال 24 ساعة.');">
          <div class="form-group">
            <label for="c-name">الاسم الكريم:</label>
            <input id="c-name" type="text" required placeholder="مثال: أحمد عبد الله">
          </div>
          <div class="form-group">
            <label for="c-email">البريد الإلكتروني:</label>
            <input id="c-email" type="email" required placeholder="name@company.com">
          </div>
          <div class="form-group">
            <label for="c-msg">تفاصيل فكرتك:</label>
            <textarea id="c-msg" rows="3" required placeholder="أخبرنا عن مشروعك القادم..."></textarea>
          </div>
          <button type="submit" class="btn-cta" style="width: 100%; border: none; cursor: pointer;">
            إرسال الطلب الآن
          </button>
        </form>
      </div>
    </section>
  </main>

  <!-- 3. التذييل الدلالي -->
  <footer>
    <p>جميع الحقوق محفوظة © 2026 - تم التطوير ضمن خريطة طريق احتراف React</p>
  </footer>

</body>
</html>`
  },
  sectionInfographic: {
    title: "إنفوجرافيك القسم الأول: حجر أساس تطوير الويب",
    badge: "خريطة الختام 1.0",
    overview: "القسم الأول يشكل القاعدة الصلبة لأي مبرمج: فهم كيف تسافر البيانات عبر الإنترنت، بناء هياكل HTML الدلالية، تزيين وتخطيط الواجهات بـ CSS3 المتجاوبة، وإتقان أدوات المطور سريعة الأداء.",
    stages: [
      { step: "1", title: "مقدمة الويب", desc: "الفرق بين العميل والخادم، بروتوكول HTTPS المشفر، و DevTools للفحص" },
      { step: "2", title: "أساسيات HTML5", desc: "هيكل المستند، الوسوم الدلالية، النماذج، ومعايير إمكانية الوصول a11y" },
      { step: "3", title: "أساسيات CSS3", desc: "نموذج الصندوق، شبكات Flexbox و Grid، المتغيرات والتصميم المتجاوب" },
      { step: "4", title: "أدوات التطوير", desc: "بيئة VS Code، سطر الأوامر، تثبيت Node و npm، والتنسيق الآلي بـ Prettier" }
    ],
    goldenRule: "لا تنتقل إلى React قبل أن تكون قادراً على بناء صفحة ويب متجاوبة بـ HTML و CSS النقيين؛ فهما عظام وثياب كل تطبيق في العالم."
  }
};

