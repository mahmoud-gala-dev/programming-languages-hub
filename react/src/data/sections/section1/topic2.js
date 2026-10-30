// src/data/sections/section1/topic2.js
// الموضوع 2: أساسيات HTML (HTML Fundamentals)

export const TOPIC_2 = {
  id: "1.2",
  title: "أساسيات HTML",
  englishTitle: "HTML Fundamentals",
  description: "تعلم حجر الأساس لكل صفحات الويب: هيكل المستند، العناصر والخصائص، الوسوم الدلالية، النماذج، وأسرار إمكانية الوصول.",
  icon: "Code2",
  subtopics: [
    {
      id: "1.2.a",
      title: "هيكل صفحة HTML",
      englishTitle: "HTML Page Structure",
      definition: "هيكل HTML هو المخطط التنظيمي الإلزامي لأي صفحة ويب في العالم، ويتكون من وسم النوع <!DOCTYPE html>، وحاوية <html>، ورأس الصفحة <head> للمعلومات الخفية، وجسم الصفحة <body> لكل ما يراه الزائر.",
      analogy: "يشبه تماماً هيكل جسم الإنسان: الجمجمة والرأس (Head) تحتوي على الدماغ والأفكار والهوية التي لا تراها بالعين ولكنها تتحكم بكل شيء. أما الجسد (Body) فهو الأطراف والملامح الظاهرة للناس والتي تتحرك وتتفاعل.",
      why: "بدون هذا الهيكل المنظم، لن يعرف المتصفح نوع الملف أو لغة الصفحة أو الترميز اللغوي (UTF-8) لدعم الحروف العربية، وقد تظهر النصوص على شكل رموز غريبة مشوهة مثل ().",
      terms: [
        { term: "HTML (HyperText Markup Language)", pronunciation: "إتش تي إم إل", meaning: "لغة توصيف النص الفائق، لبناء هيكل صفحات الويب" },
        { term: "DOCTYPE", pronunciation: "دوك تايب", meaning: "إعلان نوع المستند ليخبر المتصفح أن هذا أحدث إصدار HTML5" },
        { term: "Head", pronunciation: "هيد", meaning: "رأس المستند، يحتوي على العنوان والترميز والروابط الخارجية" },
        { term: "Body", pronunciation: "بودي", meaning: "جسم الصفحة، يحتوي على كل ما يظهر أمام عين المستخدم" }
      ],
      syntax: "<!DOCTYPE html>\n<html lang=\"ar\" dir=\"rtl\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>عنوان الصفحة</title>\n  </head>\n  <body>\n    <!-- محتوى الصفحة هنا -->\n  </body>\n</html>",
      simpleCode: `<!-- إعلان نوع المستند للإصدار الحديث HTML5 -->
<!DOCTYPE html>
<!-- بداية وسم الجذر مع تحديد اللغة عربية والاتجاه من اليمين لليسار -->
<html lang="ar" dir="rtl">
  <!-- رأس الصفحة ويحوي البيانات الوصفية للمتصفح -->
  <head>
    <!-- ترميز UTF-8 لضمان ظهور الحروف العربية بدون أخطاء -->
    <meta charset="UTF-8" />
    <!-- عنوان التبويب الذي يظهر في شريط المتصفح العلوي -->
    <title>صفحتي الأولى</title>
  <!-- إغلاق وسم رأس الصفحة -->
  </head>
  <!-- بداية جسم الصفحة الذي يراه الزائر في شاشته -->
  <body>
    <!-- عنوان رئيسي كبير يرحب بالزائر -->
    <h1>مرحباً بك في عالم تطوير الويب!</h1>
    <!-- فقرة نصية توضيحية بسيطة -->
    <p>هذا أول هيكل HTML متكامل أقوم ببنائه بنفسي.</p>
  <!-- إغلاق جسم الصفحة -->
  </body>
<!-- إغلاق وسم الجذر النهائي -->
</html>`,
      advancedCode: `<!-- هيكل صفحة HTML كامل واحترافي جاهز للإنتاج ومحسن لمحركات البحث -->
<!DOCTYPE html>
<!-- تحديد لغة الصفحة العربية واتجاه النص لليمين لتوافق المعايير العالمية -->
<html lang="ar" dir="rtl">
<head>
  <!-- ترميز الحروف العالمي UTF-8 لدعم كل اللغات الحية -->
  <meta charset="UTF-8">
  <!-- وسام التجاوب الضروري لضبط العرض على شاشات الهواتف الذكية -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- وصف دقيق يظهر أسفل رابط الموقع في نتائج بحث جوجل -->
  <meta name="description" content="تعلم تطوير الويب من الصفر حتى احتراف مكتبة React.js خطوة بخطوة">
  <!-- أيقونة التبويب المصغرة في المتصفح -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <!-- عنوان التبويب المميز -->
  <title>منصة تعلم React.js | الدرس الأول</title>
</head>
<body style="font-family: system-ui, sans-serif; margin: 0; padding: 20px; background-color: #f8fafc; color: #1e293b;">
  <!-- رأس الموقع المرئي -->
  <header style="background: white; padding: 15px 25px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-bottom: 20px;">
    <h2 style="margin: 0; color: #0284c7;">🚀 أكاديمية التقنية الحديثة</h2>
  </header>
  
  <!-- المحتوى الرئيسي للمقالة -->
  <main style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h1 style="color: #0f172a; margin-top: 0;">أهلاً بك في رحلة البرمجة</h1>
    <p style="line-height: 1.8; color: #475569;">
      صفحة الويب تشبه المبنى المعماري: كود HTML يمثل الأعمدة الخرسانية والجدران الصلبة،
      وبدونه لن يستطيع أي دهان (CSS) أو كهرباء (JavaScript) أن تجد مكاناً تقف عليه.
    </p>
  </main>
  
  <!-- تذييل الصفحة لحقوق الملكية -->
  <footer style="text-align: center; margin-top: 30px; color: #94a3b8; font-size: 13px;">
    <p>جميع الحقوق محفوظة © 2026</p>
  </footer>
</body>
</html>`,
      outputExplanation: "يعرض المتصفح صفحة أنيقة تحوي شريطاً علوياً يحمل اسم الأكاديمية، ثم بطاقة بيضاء بداخلها العنوان ومقال تعريفي بخط واضح ومقروء، وتذييل أسفل الصفحة، مع ضبط اتجاه القراءة من اليمين لليتمين وعرض سليم للحروف العربية.",
      commonMistakes: [
        {
          wrong: "نسيان وسم <meta charset=\"UTF-8\"> داخل وسم <head>.",
          right: "كتابة <meta charset=\"UTF-8\"> دائماً كأول سطر داخل <head>.",
          reason: "نسيان هذا الوسم يسبب تحول كل الكلمات العربية إلى حروف لاتينية مبعثرة ورموز غريبة في بعض المتصفحات."
        },
        {
          wrong: "وضع عناصر مرئية مثل العناوين <h1> أو الصور داخل وسم <head>.",
          right: "كل عنصر يريد المستخدم رؤيته في الشاشة يجب أن يوضع داخل وسم <body> حصراً.",
          reason: "وسم <head> مخصص حصراً للمعلومات الوصفية للمتصفح ومحركات البحث فقط."
        }
      ],
      bestPractices: [
        "أضف دائماً الخاصية lang=\"ar\" و dir=\"rtl\" في وسم <html> عند بناء مواقع عربية لضبط محاذاة المؤشر والقراءة.",
        "احرص على إضافة وسام <meta name=\"viewport\" ...> لتظهر الصفحة بأبعاد طبيعية على شاشات الهواتف."
      ],
      infographic: {
        badge: "أساس الويب",
        title: "هيكل صفحة HTML5",
        icon: "FileCode",
        colors: "from-orange-500 to-amber-600",
        steps: [
          { title: "<!DOCTYPE html>", desc: "إعلان رسمي للمتصفح بأن المستند مكتوب بأحدث معايير HTML5" },
          { title: "<head>", desc: "غرفة التحكم الخفية: العنوان، الترميز، وروابط الخطوط وملفات الـ CSS" },
          { title: "<body>", desc: "المسرح العلني: كل ما يراه ويلمسه الزائر من أزرار وصور ونصوص" }
        ],
        summary: "كل صفحة ويب على وجه البسيطة تبدأ بـ DOCTYPE وتنقسم إلى Head خفي و Body مرئي."
      }
    },
    {
      id: "1.2.b",
      title: "العناصر والخصائص",
      englishTitle: "Elements & Attributes",
      definition: "العنصر (Element) هو كتلة البناء في HTML ويتكون من وسم بداية ومحتوى ووسم نهاية (مثل <p>مرحبا</p>). أما الخاصية (Attribute) فهي معلومة إضافية نكتبها داخل وسم البداية لمنح العنصر قدرات جديدة أو تخصيصه (مثل معرف id أو رابط href أو فئة class).",
      analogy: "تخيل أن العنصر هو 'سيارة'. الخصائص (Attributes) هي صفات هذه السيارة المميزة: لونها (color='أحمر')، ورقم لوحتها الفريد (id='1234')، وسرعتها القصوى. السيارة هي الشيء نفسه، والخصائص تحدد تفاصيلها الدقيقة.",
      why: "بدون الخصائص، ستكون كل العناصر متشابهة ولا تملك هوية! لن تستطيع التفريق بين زر وآخر، ولن تستطيع الصور معرفة مصدرها من أين تجلب الملفات.",
      terms: [
        { term: "Element", pronunciation: "إليمينت", meaning: "العنصر كاملاً (وسم البداية + النص الداخلي + وسم النهاية)" },
        { term: "Tag", pronunciation: "تاج", meaning: "الوسم المحصور بين قوسي < و > (مثل <p> أو </p>)" },
        { term: "Attribute", pronunciation: "أتريبيوت", meaning: "الخاصية التي تضاف داخل وسم الفتح لتعديل سلوكه" },
        { term: "Self-closing tag", pronunciation: "سيلف كلوزينج تاج", meaning: "وسم ذاتي الإغلاق ليس له محتوى نصي داخلي (مثل <img> أو <input>)" }
      ],
      syntax: "<tagname attribute_name=\"attribute_value\">المحتوى النصي هنا</tagname>\nمثال: <a href=\"https://google.com\" target=\"_blank\">زيارة جوجل</a>",
      simpleCode: `<!-- وسم فقرة عادي يمتلك خاصية المعرف الفريد id وخاصية العنوان title -->
<!-- وسم الفتح مع خاصية id لتمييزه وخاصية title لتظهر تلميحة عند مرور الفأرة -->
<p id="welcome-text" title="هذه تلميحة تظهر عند وضع الماوس علي!">
  <!-- المحتوى الداخلي للعنصر -->
  أهلاً بك يا بطل البرمجة
<!-- وسم إغلاق الفقرة مسبوقاً بشرطة مائلة / -->
</p>`,
      advancedCode: `<!-- نموذج يوضح تنوع العناصر والخصائص الأكثر استخداماً في الويب -->
<div style="font-family: sans-serif; background: #0f172a; padding: 20px; border-radius: 12px; color: white; max-width: 440px;">
  <!-- عنصر عنوان يحمل خاصية class وخاصية style مضمنة -->
  <h3 class="highlight-title" style="color: #38bdf8; margin-top: 0;">العناصر والخصائص في العمل الحقيقي:</h3>
  
  <!-- وسم رابط <a> يحمل خاصية href للوجهة وخاصية target لفتحه في تبويب جديد -->
  <p>
    رابط خارجي:
    <a href="https://react.dev" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; text-decoration: underline;">
      زيارة توثيق React الرسمي (يفتح بتبويب جديد)
    </a>
  </p>

  <!-- وسم ذاتي الإغلاق <input> يحمل خصائص type و placeholder و disabled -->
  <div style="margin-top: 15px;">
    <label for="sample-input" style="display: block; font-size: 13px; color: #94a3b8; margin-bottom: 5px;">حقل معطل (خاصية disabled):</label>
    <input 
      id="sample-input" 
      type="text" 
      placeholder="لا يمكنك الكتابة هنا لأن الحقل معطل" 
      disabled 
      style="width: 100%; padding: 8px; border-radius: 6px; border: 1px solid #334155; background: #1e293b; color: #64748b; cursor: not-allowed;" 
    />
  </div>
</div>`,
      outputExplanation: "يرى الزائر رابطاً مخصصاً باللون الأزرق يفتح التوثيق في تبويب مستقل بفضل خاصية target='_blank' دون مغادرة موقعك، مع حقل إدخال بلون باهت لا يقبل الكتابة بفضل خاصية disabled.",
      commonMistakes: [
        {
          wrong: "نسيان علامات التنصيص حول قيمة الخاصية مثل: <img src=photo.jpg alt=صورة>.",
          right: "وضع علامات التنصيص المزدوجة دائماً حول القيم: <img src=\"photo.jpg\" alt=\"صورة\">.",
          reason: "القيم التي تحتوي على مسافات ستنكسر وتفسد الكود إذا كُتبت بدون علامات تنصيص."
        },
        {
          wrong: "تكرار نفس قيمة المعرف id أكثر من مرة في نفس الصفحة.",
          right: "المعرف id يجب أن يكون فريداً جداً لشخص واحد (مثل رقم بطاقة الهوية القومية).",
          reason: "تكرار الـ id يربك الجافاسكريبت ويفسد الوصول للعنصر الصحيح."
        }
      ],
      bestPractices: [
        "استخدم خاصية class عندما تريد تطبيق تنسيق مظهر مشترك على عناصر متعددة.",
        "احرص على كتابة أسماء الوسوم والخصائص بحروف صغيرة (lowercase) كمعيار قياسي عالمي."
      ],
      infographic: {
        badge: "التشريح البرمجي",
        title: "تشريح عنصر HTML",
        icon: "Code",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "وسم البداية <tag>", desc: "يحدد نوع العنصر ويبدأ به الكتلة" },
          { title: "الخصائص name=\"value\"", desc: "توضع داخل وسم البداية وتمنحه صفات خاصة" },
          { title: "المحتوى الداخلي", desc: "النصوص أو العناصر الفرعية الموجودة في المنتصف" },
          { title: "وسم الإغلاق </tag>", desc: "ينتهي بالشرطة المائلة لإعلام المتصفح بانتهاء العنصر" }
        ],
        summary: "العنصر هو الكائن الكامل، والوسم هو علامة البداية والنهاية، والخاصية هي الإعدادات الإضافية."
      }
    },
    {
      id: "1.2.c",
      title: "العناوين والفقرات والروابط",
      englishTitle: "Headings, Paragraphs & Links",
      definition: "العناوين من <h1> إلى <h6> ترتب المحتوى بشكل هرمي (مثل عناوين الصحف). الفقرة <p> تحتوي على كتل النصوص التوضيحية العادية. والروابط <a> (Anchor) هي الشرايين التي تربط صفحات الإنترنت ببعضها البعض لنقل الزائر بضغطة زر.",
      analogy: "مثل مقال في جريدة ورقية مطبوعة: المانشيت العريض بالأعلى هو (h1)، والعناوين الفرعية للأقسام هي (h2)، والتفاصيل الصغيرة تحتها (h3)، والأسطر الإخبارية العادية هي الفقرات (p). أما عبارة 'للمزيد اقرأ صفحة 5' فهي الرابط التشعبي (a).",
      why: "القراء ومحركات البحث (Google) لا يقرؤون الصفحة كلمة بكلمة في البداية؛ بل يمرون بأعينهم على العناوين لمعرفة الموضوع. بدون هرمية العناوين والفقرات، ستكون الصفحة كتلة نصية صامتة ومملة ومستحيلة القراءة.",
      terms: [
        { term: "Heading (h1 - h6)", pronunciation: "هيدينج", meaning: "وسوم العناوين الستة؛ h1 هو الأكبر والأهم و h6 هو الأصغر" },
        { term: "Paragraph (p)", pronunciation: "باراجراف", meaning: "وسم الفقرة النصية العادية" },
        { term: "Anchor (a)", pronunciation: "أنكور", meaning: "وسم الرابط التشعبي لنقل المستخدم لصفحة أو موقع آخر" },
        { term: "href (Hypertext Reference)", pronunciation: "إتش ريف", meaning: "الخاصية التي تحدد عنوان رابط الوجهة المقصودة" }
      ],
      syntax: "<h1>عنوان رئيسي</h1>\n<p>فقرة نصية عادية تشرح التفاصيل.</p>\n<a href=\"https://example.com\">نص الرابط الذي يضغط عليه الزائر</a>",
      simpleCode: `<!-- وسم العنوان الرئيسي الأكثر أهمية في الصفحة -->
<h1>دورة احتراف الويب الشاملة</h1>

<!-- وسم عنوان فرعي تحت العنوان الرئيسي -->
<h2>الدرس الأول: مقدمة</h2>

<!-- وسم فقرة نصية عادية تشرح المفهوم -->
<p>نتعلم في هذا الدرس كيف تصنع صفحات مذهلة باستخدام HTML.</p>

<!-- وسم رابط ينقل الزائر إلى صفحة الدروس مع نص واضح -->
<a href="/lessons.html">
  انقر هنا للانتقال إلى جدول الدروس
</a>`,
      advancedCode: `<!-- نموذج هرمي احترافي يوضح العناوين والفقرات والروابط الداخلية والخارجية -->
<article style="font-family: system-ui, sans-serif; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; max-width: 520px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); color: #1e293b;">
  <!-- العنوان الرئيسي الأوحد للمقالة -->
  <h1 style="color: #0f172a; font-size: 24px; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">
    دليلك الشامل لتعلم تطوير الواجهات
  </h1>
  
  <!-- عنوان فرعي من المستوى الثاني -->
  <h2 style="color: #1e40af; font-size: 18px; margin-top: 20px;">1. لماذا نبدأ بـ HTML؟</h2>
  <!-- فقرة منسقة -->
  <p style="line-height: 1.7; color: #475569;">
    تعد لغة HTML هي العمود الفقري لأي تطبيق ويب. حتى وإن كنت تستخدم أحدث أطر العمل مثل React أو Next.js، فإن ما يراه المتصفح في نهاية المطاف هو أكواد HTML نقية.
  </p>
  
  <!-- عنوان فرعي من المستوى الثالث للتفاصيل الدقيقة -->
  <h3 style="color: #334155; font-size: 15px; margin-top: 15px;">الموارد المقترحة:</h3>
  <ul style="color: #475569; padding-right: 20px; line-height: 1.8;">
    <!-- رابط داخلي يتنقل إلى قسم في نفس الصفحة عبر id -->
    <li><a href="#summary-section" style="color: #2563eb; text-decoration: none;">الانتقال لملخص المقال بالأسفل (رابط داخلي)</a></li>
    <!-- رابط خارجي يفتح التوثيق في نافذة جديدة -->
    <li><a href="https://developer.mozilla.org" target="_blank" style="color: #2563eb; text-decoration: none;">موقع شبكة مطوري موزيلا MDN (رابط خارجي) ↗</a></li>
  </ul>
  
  <div id="summary-section" style="margin-top: 25px; padding: 12px; background: #eff6ff; border-radius: 6px; font-size: 13px; color: #1e40af;">
    📌 <b>ملخص سريع:</b> استخدم دائماً h1 مرة واحدة فقط لكل صفحة لضمان أفضل ترتيب في محركات البحث.
  </div>
</article>`,
      outputExplanation: "تظهر المقالة بشكل هرمي مريح جداً للعين: عنوان رئيسي عريض يتبعه خط أزرق، ثم عنوان فرعي، وفقرة متناسقة الأسطر، ثم روابط بلون أزرق، ينقل الرابط الأول الزائر لقاع الصفحة بسلاسة، بينما يفتح الثاني موقع MDN الخارجي.",
      commonMistakes: [
        {
          wrong: "استخدام وسم العنوان <h1> أكثر من مرة في الصفحة الواحدة أو استخدامه فقط لتكبير حجم خط عادي.",
          right: "استخدم <h1> مرة واحدة فقط كعنوان رئيسي، وإذا أردت تكبير حجم خط عادي فاستخدم CSS.",
          reason: "تعدد وسوم h1 يضر بترتيب موقعك في محرك بحث جوجل (SEO) لأنه يربك روبوت الفهرسة."
        },
        {
          wrong: "كتابة نص الرابط بكلمات غامضة مثل: 'اضغط هنا'.",
          right: "كتابة نص وصفي صريح مثل: 'تحميل كتاب خريطة React بصيغة PDF'.",
          reason: "النصوص الواضحة تساعد ذوي الاحتياجات الخاصة الذين يستمعون لقارئات الشاشة في معرفة وجهة الرابط."
        }
      ],
      bestPractices: [
        "اتبع الترتيب الهرمي: لا تقفز من <h1> مباشرة إلى <h3> دون المرور بـ <h2>.",
        "عند وضع روابط خارجية تفتح بـ target=\"_blank\" أضف دائماً rel=\"noopener noreferrer\" لحماية أمان موقعك."
      ],
      infographic: {
        badge: "التنظيم الهرمي",
        title: "العناوين والفقرات والروابط",
        icon: "Type",
        colors: "from-sky-500 to-blue-600",
        steps: [
          { title: "<h1>", desc: "العنوان الرئيسي الوحيد في الصفحة (عنوان المقال الأساسي)" },
          { title: "<h2> - <h6>", desc: "عناوين فرعية متدرجة في الأهمية لتنظيم الأقسام" },
          { title: "<p>", desc: "الفقرات النصية لحكاية وسرد المحتوى والتفاصيل" },
          { title: "<a href=\"...\">", desc: "الروابط لنقل الزائر لصفحات ومواقع أخرى بسلاسة" }
        ],
        summary: "العناوين ترسم الهيكل العظمي للمحتوى، والروابط تمنحه صفة الشبكة العنكبوتية المترابطة."
      }
    },
    {
      id: "1.2.d",
      title: "الصور والقوائم والجداول",
      englishTitle: "Images, Lists & Tables",
      definition: "الصور <img> تعرض المحتوى البصري المعبر. القوائم المنظمة <ul> و <ol> و <li> تعرض عناصر متتابعة سواء نقطية أو مرقمة. والجداول <table> تنظم البيانات المتقاطعة في صفوف وأعمدة مثل جداول الأسعار والنتائج.",
      analogy: "مثل 'كتالوج مطعم': الصور تعرض أطباق الطعام الشهية، وقائمة المكونات مكتوبة في نقاط مرتبة، وجدول الأسعار يوضح حجم كل وجبة مقابل ثمنها في صفوف وأعمدة متناسقة.",
      why: "الصورة بألف كلمة وتجذب عين الزائر فوراً. والقوائم تجعل قراءة المهام والخطوات سريعة دون ملل. والجداول هي الطريقة العلمية الوحيدة لعرض البيانات المالية والإحصائية المعقدة بوضوح.",
      terms: [
        { term: "img (Image)", pronunciation: "إيميج", meaning: "وسم عرض الصورة في الصفحة (ذاتي الإغلاق)" },
        { term: "alt (Alternative Text)", pronunciation: "ألت", meaning: "النص البديل لوصف الصورة لمحركات البحث ولمن لا تفتح الصورة عندهم" },
        { term: "ul (Unordered List)", pronunciation: "يو إل", meaning: "قائمة غير مرتبة (نقطية)" },
        { term: "ol (Ordered List)", pronunciation: "أو إل", meaning: "قائمة مرتبة (مرقمة 1، 2، 3)" },
        { term: "li (List Item)", pronunciation: "إل آي", meaning: "عنصر مفرد داخل القائمة" },
        { term: "table", pronunciation: "تيبل", meaning: "وسم الجدول، ويحوي tr للسطور و th للعناوين و td للبيانات" }
      ],
      syntax: "<!-- صورة -->\n<img src=\"logo.png\" alt=\"شعار الموقع\" />\n<!-- قائمة -->\n<ul>\n  <li>العنصر الأول</li>\n</ul>\n<!-- جدول -->\n<table>\n  <tr><th>الاسم</th><th>الدرجة</th></tr>\n  <tr><td>محمد</td><td>100</td></tr>\n</table>",
      simpleCode: `<!-- وسم صورة مع مسار الصورة ونصها البديل وأبعادها -->
<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200" alt="حاسوب مبرمج مفتوح على طاولة العمل" width="200" />

<!-- قائمة نقطية بالمهام المطلوبة اليوم -->
<ul>
  <!-- كل عنصر يوضع داخل وسم li -->
  <li>تعلم وسوم الصور في HTML</li>
  <li>إنشاء قائمة وجبات الغداء</li>
  <li>بناء أول جدول لمقارنة الأسعار</li>
</ul>`,
      advancedCode: `<!-- نموذج شامل يدمج صورة وقائمة وجدول مقارنة باقات احترافي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 24px; border-radius: 12px; color: #f8fafc; max-width: 520px;">
  <!-- قسم الصورة مع تعليق نصي دلالي -->
  <figure style="margin: 0 0 20px 0; text-align: center;">
    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=450" alt="شاشة كود برمجي ملون" style="width: 100%; max-height: 180px; object-fit: cover; border-radius: 8px;" />
    <figcaption style="font-size: 12px; color: #94a3b8; margin-top: 6px;">شكل (1): بيئة كتابة الكود للمطور المحترف</figcaption>
  </figure>

  <!-- قائمة مرقمة لخطوات التعلم -->
  <h4 style="color: #38bdf8; margin: 0 0 8px 0;">خطوات التسجيل في الدورة:</h4>
  <ol style="color: #cbd5e1; padding-right: 20px; line-height: 1.6; margin: 0 0 20px 0;">
    <li>إنشاء حساب جديد عبر البريد.</li>
    <li>اختيار مسار التدريب المناسب لمستواك.</li>
    <li>البدء في مشاهدة التطبيقات وحل التحديات.</li>
  </ol>

  <!-- جدول مقارنة اشتراكات أنيق -->
  <h4 style="color: #38bdf8; margin: 0 0 8px 0;">مقارنة باقات الاشتراك:</h4>
  <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: right; background: #1e293b; border-radius: 6px; overflow: hidden;">
    <thead>
      <tr style="background: #334155; color: #38bdf8;">
        <th style="padding: 10px; border: 1px solid #475569;">الباقة</th>
        <th style="padding: 10px; border: 1px solid #475569;">المشاريع</th>
        <th style="padding: 10px; border: 1px solid #475569;">السعر</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px 10px; border: 1px solid #334155;">الأساسية</td>
        <td style="padding: 8px 10px; border: 1px solid #334155;">5 مشاريع</td>
        <td style="padding: 8px 10px; border: 1px solid #334155; color: #4ade80;">مجاناً</td>
      </tr>
      <tr style="background: rgba(56, 189, 248, 0.05);">
        <td style="padding: 8px 10px; border: 1px solid #334155;">الاحترافية</td>
        <td style="padding: 8px 10px; border: 1px solid #334155;">14 مشروعاً متقدماً</td>
        <td style="padding: 8px 10px; border: 1px solid #334155; color: #facc15;">\$49</td>
      </tr>
    </tbody>
  </table>
</div>`,
      outputExplanation: "يرى المستخدم بطاقة جذابة تحوي صورة مع وصف رسمي أسفلها، تليها قائمة مرقمة تلقائياً (1، 2، 3) بواسطة المتصفح، ثم جدول منظم بصفوف ملونة يفصل بين الباقة المجانية والاحترافية.",
      commonMistakes: [
        {
          wrong: "إهمال خاصية alt في وسوم الصور أو كتابة alt=\"صورة\" فقط.",
          right: "كتابة وصف دقيق لما تحويه الصورة مثل alt=\"شعار شركة أبل الفضي على خلفية بيضاء\".",
          reason: "الـ alt هو ما يقرأه المكفوفون عبر قارئ الشاشة، وهو ما يفهرسه محرك بحث الصور في جوجل."
        },
        {
          wrong: "استخدام الجداول (Tables) لتقسيم وتخطيط شكل صفحات الموقع بدلاً من استخدام CSS.",
          right: "الجداول مخصصة حصراً لعرض البيانات المجدولة (Tabular Data)، بينما تخطيط الصفحة يكون بـ Flexbox أو Grid.",
          reason: "تخطيط الصفحات بالجداول يدمر توافق الموقع مع الهواتف الذكية ويجعل الكود بطيئاً ومعقداً."
        }
      ],
      bestPractices: [
        "استخدم <ul> عندما لا يهم ترتيب العناصر، واستخدم <ol> عندما تكون العناصر خطوات متسلسلة يلزم اتباعها بالترتيب.",
        "احرص دائماً على تحديد العرض والارتفاع (width و height) للصور لمنع قفز الصفحة أثناء التحميل (CLS)."
      ],
      infographic: {
        badge: "المحتوى الغني",
        title: "الصور والقوائم والجداول",
        icon: "Image",
        colors: "from-amber-500 to-red-500",
        steps: [
          { title: "<img src=\"...\" alt=\"...\">", desc: "عرض الرسوميات والصور مع وصف بديل إلزامي" },
          { title: "<ul> و <ol>", desc: "القوائم النقطية والمرقمة لتنظيم الأفكار والخطوات" },
          { title: "<table>", desc: "تنظيم مصفوفات الأرقام والإحصائيات في صفوف وأعمدة متناسقة" }
        ],
        summary: "الصور تجذب الانتباه، والقوائم ترتب الأفكار، والجداول تقدم الحقائق بوضوح."
      }
    },
    {
      id: "1.2.e",
      title: "النماذج وحقول الإدخال",
      englishTitle: "Forms & Input Fields",
      definition: "النماذج <form> هي وسيلة التواصل المباشرة بين الزائر والموقع؛ حيث تتيح له إدخال نصوص، واختيار تواريخ، وكتابة كلمات مرور، وتحديد خيارات، ثم إرسالها إلى الخادم بضغطة زر.",
      analogy: "مثل 'استمارة فتح حساب بنكي': ورقة رسمية تحوي خانة لكتابة اسمك (text input)، وخانة لتوقيعك السري (password input)، ودائرة لاختيار جنسيتك (radio button)، ومربع للتأشير على موافقتك على الشروط (checkbox)، ثم تسليمها للموظف (submit button).",
      why: "بدون النماذج، سيكون الإنترنت طريقاً باتجاه واحد فقط (قراءة فقط)! لن يمكنك تسجيل الدخول، أو شراء منتج، أو كتابة تعليق على يوتيوب، أو نشر منشور على وسائل التواصل.",
      terms: [
        { term: "form", pronunciation: "فورم", meaning: "حاوية النموذج التي تجمع كافة حقول الإدخال معاً" },
        { term: "input", pronunciation: "إنبوت", meaning: "وسم حقل الإدخال، ويتحدد نوعه عبر الخاصية type" },
        { term: "label", pronunciation: "ليبل", meaning: "التسمية التوضيحية المكتوبة بجانب الحقل لإعلام المستخدم بما يكتبه" },
        { term: "type", pronunciation: "تايب", meaning: "نوع الحقل (مثل text, email, password, checkbox, radio)" },
        { term: "button", pronunciation: "بوتون", meaning: "زر تنفيذ الإجراء أو إرسال النموذج" }
      ],
      syntax: "<form action=\"/submit\" method=\"POST\">\n  <label for=\"uname\">الاسم:</label>\n  <input id=\"uname\" type=\"text\" name=\"username\" />\n  <button type=\"submit\">إرسال</button>\n</form>",
      simpleCode: `<!-- وسم النموذج الجامع للحقول -->
<form onsubmit="event.preventDefault(); alert('تم استلام بياناتك!');">
  <!-- تسمية توضيحية مربوطة بالحقل عبر معرف id -->
  <label for="full-name">الاسم الكامل:</label><br />
  <!-- حقل إدخال نصي عادي -->
  <input id="full-name" type="text" placeholder="اكتب اسمك هنا" /><br /><br />

  <!-- تسمية توضيحية لكلمة المرور -->
  <label for="pass">كلمة المرور:</label><br />
  <!-- حقل يخفي الحروف بنقاط سوداء لحماية السرية -->
  <input id="pass" type="password" /><br /><br />

  <!-- زر إرسال النموذج -->
  <button type="submit">تسجيل الدخول</button>
<!-- إغلاق النموذج -->
</form>`,
      advancedCode: `<!-- نموذج تسجيل بيانات متكامل يوضح مختلف أنواع الحقول مع أفضل ممارسات UX -->
<form onsubmit="handleFormDemo(event)" style="font-family: sans-serif; background: #0f172a; border: 1px solid #1e293b; padding: 24px; border-radius: 12px; color: white; max-width: 440px;">
  <h3 style="margin-top: 0; color: #38bdf8;">إنشاء حساب جديد ✍️</h3>
  
  <!-- حقل البريد الإلكتروني مع أيقونة ونوع مخصص -->
  <div style="margin-bottom: 14px;">
    <label for="reg-email" style="display: block; font-size: 13px; color: #cbd5e1; margin-bottom: 5px;">البريد الإلكتروني:</label>
    <input id="reg-email" type="email" required placeholder="user@example.com" style="width: 100%; padding: 8px 12px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white;" />
  </div>

  <!-- قائمة منسدلة لاختيار الدولة -->
  <div style="margin-bottom: 14px;">
    <label for="country-select" style="display: block; font-size: 13px; color: #cbd5e1; margin-bottom: 5px;">اختر دولتك:</label>
    <select id="country-select" style="width: 100%; padding: 8px 12px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white;">
      <option value="sa">المملكة العربية السعودية</option>
      <option value="eg">مصر</option>
      <option value="ae">الإمارات العربية المتحدة</option>
      <option value="other">دولة أخرى</option>
    </select>
  </div>

  <!-- خيارات الراديو (لاختيار عنصر واحد فقط من مجموعة) -->
  <div style="margin-bottom: 14px;">
    <span style="display: block; font-size: 13px; color: #cbd5e1; margin-bottom: 5px;">المستوى البرمجي:</span>
    <label style="margin-left: 12px; font-size: 13px; cursor: pointer;">
      <input type="radio" name="level" value="beginner" checked /> مبتدئ من الصفر
    </label>
    <label style="font-size: 13px; cursor: pointer;">
      <input type="radio" name="level" value="intermediate" /> لدي خلفية سابقة
    </label>
  </div>

  <!-- مربع تأشير الموافقة (Checkbox) -->
  <div style="margin-bottom: 18px;">
    <label style="font-size: 13px; display: flex; align-items: center; gap: 8px; cursor: pointer;">
      <input type="checkbox" required /> أوافق على شروط الاستخدام وسياسة الخصوصية
    </label>
  </div>

  <!-- زر الإرسال -->
  <button type="submit" style="background: #0284c7; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold;">
    إتمام التسجيل الآن
  </button>
  <div id="form-msg" style="margin-top: 10px; font-size: 13px; text-align: center;"></div>
</form>

<script>
  function handleFormDemo(e) {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    msg.innerHTML = '<span style="color: #4ade80;">✓ تم التحقق من الحقول وإرسال النموذج بنجاح!</span>';
  }
</script>`,
      outputExplanation: "يرى المستخدم نموذجاً مرتباً يتأكد من صحة صيغة البريد تلقائياً بفضل type=\"email\"، ولا يسمح بالإرسال إلا بعد التأشير على المربع المطلوب بفضل الخاصية required.",
      commonMistakes: [
        {
          wrong: "وضع حقل إدخال <input> بدون وسم <label> مخصص له.",
          right: "ربط كل حقل بتسمية توضيحية باستخدام <label for=\"inputId\"> لتسهيل النقر وقراءة الشاشة.",
          reason: "عندما ينقر المستخدم على نص الـ Label، يتم توجيه الفأرة ووضع المؤشر فوراً داخل الحقل تلقائياً."
        },
        {
          wrong: "إعطاء أزرار الراديو أسماء name مختلفة، مما يتيح للمستخدم اختيار كل الخيارات في نفس الوقت بشكل خاطئ.",
          right: "توحيد اسم name=\"level\" لجميع أزرار الراديو في نفس السؤال ليسمح باختيار خيار واحد فقط.",
          reason: "المتصفح يجمع أزرار الراديو بناءً على تطابق خاصية name."
        }
      ],
      bestPractices: [
        "استخدم placeholder لتقديم مثال توضيحي للمدخلات (مثل name@example.com) وليس كبديل عن الـ Label.",
        "اختر type المناسب دائماً: مثل type=\"tel\" للهواتف و type=\"email\" للبريد لتظهر لوحة المفاتيح المناسبة على الموبايل."
      ],
      infographic: {
        badge: "التفاعل والإرسال",
        title: "النماذج وحقول الإدخال",
        icon: "CheckSquare",
        colors: "from-cyan-600 to-blue-700",
        steps: [
          { title: "<form>", desc: "الوعاء الحاوي لكل عناصر الإدخال وإدارتها كوحدة واحدة" },
          { title: "<label for=\"...\">", desc: "التسمية التوضيحية المربوطة بالمعرف لنقر أسهل" },
          { title: "<input type=\"...\">", desc: "الحقول المتنوعة (نص، بريد، كلمة سر، خيارات)" },
          { title: "<button type=\"submit\">", desc: "محرك الإرسال لتوصيل البيانات إلى الخادم" }
        ],
        summary: "النماذج هي الجسر الوحيد الذي ينقل إرادة الزائر ومدخلاته إلى خوادم الموقع لتنفيذ رغبته."
      }
    },
    {
      id: "1.2.f",
      title: "العناصر الدلالية Semantic HTML",
      englishTitle: "Semantic HTML Elements",
      definition: "العناصر الدلالية (Semantic Tags) هي وسوم HTML تقدم معنى واضحاً وصريحاً للمتصفح والمطور ومحركات البحث عما تحتويه؛ مثل استخدام <header> لرأس الموقع، و <nav> لروابط التنقل، و <article> للمقال، و <footer> للتذييل، بدلاً من حشو الصفحة بوسوم <div> عمياء عديمة المعنى.",
      analogy: "تخيل أنك ترتب منزلك: هل تضع الملابس، والأطعمة، والكتب، وأدوات الحمام كلها داخل 'كراتين بنية متشابهة لا تحمل أي اسم' (وهذا هو كود div soup القديم)؟ أم تضع الملابس في خزانة، والطعام في الثلاجة، والكتب في المكتبة مع بطاقات واضحة (وهذا هو Semantic HTML)؟",
      why: "محركات البحث مثل Google ترسل روبوتات ذكية تقرأ كود موقعك؛ فإذا وجدت وسوم دلالية واضحة عرفت فوراً أين المقال الرئيسي وأين شريط التنقل وتصدر موقعك نتائج البحث الأولى، إضافة لدعم قارئات الشاشة للمكفوفين.",
      terms: [
        { term: "Semantic HTML", pronunciation: "سيمانتك إتش تي إم إل", meaning: "لغة التوصيف ذات المعنى الدلالي الواضح" },
        { term: "header", pronunciation: "هيدر", meaning: "ترويسة أو رأس الصفحة أو ترويسة المقال" },
        { term: "nav (Navigation)", pronunciation: "ناف", meaning: "شريط روابط التنقل الرئيسية للموقع" },
        { term: "main", pronunciation: "مين", meaning: "المحتوى الرئيسي الأهم والفريد في الصفحة" },
        { term: "article", pronunciation: "آرتيكل", meaning: "مقال مستقل بذاته يمكن نسخه ونشره بمفرده" },
        { term: "section", pronunciation: "سكشن", meaning: "قسم موضوعي يجمع فقرات ومحتوى ذو علاقة" },
        { term: "aside", pronunciation: "أسايد", meaning: "شريط جانبي يحتوي معلومات إضافية أو إعلانات" },
        { term: "footer", pronunciation: "فوتر", meaning: "تذييل أسفل الصفحة لحقوق النشر والروابط السفلية" }
      ],
      syntax: "<header>\n  <nav><!-- روابط التنقل --></nav>\n</header>\n<main>\n  <article><!-- محتوى المقال --></article>\n  <aside><!-- شريط جانبي --></aside>\n</main>\n<footer><!-- الحقوق --></footer>",
      simpleCode: `<!-- هيكل صفحة بسيط مبني بوسوم دلالية نقية وواضحة -->
<header>
  <!-- شريط روابط التنقل -->
  <nav>
    <a href="/">الرئيسية</a> | <a href="/blog">المدونة</a>
  </nav>
</header>

<!-- المحتوى الجوهري الوحيد للصفحة -->
<main>
  <!-- مقال مستقل -->
  <article>
    <h1>أهمية العناصر الدلالية</h1>
    <p>تساعد محركات البحث في فهم موقعنا بدقة متناهية.</p>
  </article>
</main>

<!-- تذييل الصفحة -->
<footer>
  <p>حقوق النشر محفوظة © 2026</p>
</footer>`,
      advancedCode: `<!-- مقارنة تفاعلية بين كود قديم عشوائي (Div Soup) وكود دلالي حديث (Semantic) -->
<div style="font-family: sans-serif; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; max-width: 600px; color: white;">
  <!-- الكود الخاطئ القديم -->
  <div style="background: #1e1b4b; border: 1px solid #4338ca; padding: 15px; border-radius: 8px;">
    <h4 style="color: #f87171; margin-top: 0;">❌ النمط القديم (Div Soup)</h4>
    <div style="background: #0f172a; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 11px; line-height: 1.6; color: #94a3b8;">
      &lt;div class="header"&gt;<br>
      &nbsp;&nbsp;&lt;div class="nav-links"&gt;...&lt;/div&gt;<br>
      &lt;/div&gt;<br>
      &lt;div class="content"&gt;<br>
      &nbsp;&nbsp;&lt;div class="article-box"&gt;...&lt;/div&gt;<br>
      &lt;/div&gt;<br>
      &lt;div class="footer"&gt;...&lt;/div&gt;
    </div>
    <p style="font-size: 12px; color: #fca5a5; margin-bottom: 0;">المتصفح وقارئ الشاشة وجوجل يرون مجرد صناديق عمياء لا معنى لها!</p>
  </div>

  <!-- الكود الحديث الدلالي -->
  <div style="background: #064e3b; border: 1px solid #059669; padding: 15px; border-radius: 8px;">
    <h4 style="color: #34d399; margin-top: 0;">✓ النمط الدلالي (Semantic)</h4>
    <div style="background: #0f172a; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 11px; line-height: 1.6; color: #6ee7b7;">
      &lt;header&gt;<br>
      &nbsp;&nbsp;&lt;nav&gt;...&lt;/nav&gt;<br>
      &lt;/header&gt;<br>
      &lt;main&gt;<br>
      &nbsp;&nbsp;&lt;article&gt;...&lt;/article&gt;<br>
      &lt;/main&gt;<br>
      &lt;footer&gt;...&lt;/footer&gt;
    </div>
    <p style="font-size: 12px; color: #a7f3d0; margin-bottom: 0;">كل عنصر ينطق باسمه ووظيفته، وسهل جداً في القراءة والصيانة وممتاز للـ SEO!</p>
  </div>
</div>`,
      outputExplanation: "تظهر المقارنة البصرية للمتعلم كيف يتحول الكود من متاهة من وسوم div المتكررة والمحيرة، إلى كود ناصع الوضوح يفهمه أي مبرمج أو محرك بحث بمجرد إلقاء نظرة سريعة عليه.",
      commonMistakes: [
        {
          wrong: "استخدام وسم <section> كبديل عشوائي عن <div> لمجرد التنسيق الشكلي.",
          right: "استخدم <section> فقط إذا كان القسم يحتوي على عنوان موضوعي خاص به (h2, h3)، واستخدم <div> إذا كان الغرض هو التنسيق الشكلي الصرف.",
          reason: "وسم section يعني وحدة موضوعية وليس مجرد حاوية للألوان والحدود."
        }
      ],
      bestPractices: [
        "استخدم وسم <main> مرة واحدة فقط في الصفحة ليحتوي على المحتوى الفريد الخاص بتلك الصفحة.",
        "اجعل كودك مقروءاً للبشر وللآلات معاً؛ فالكود الدلالي يرفع تقييم موقعك في اختبارات الأداء (Lighthouse) تلقائياً."
      ],
      infographic: {
        badge: "الكود النظيف والـ SEO",
        title: "العناصر الدلالية (Semantic HTML)",
        icon: "Compass",
        colors: "from-emerald-600 to-teal-500",
        steps: [
          { title: "<header> و <nav>", desc: "الرأسية وقائمة الروابط للتنقل بين الصفحات" },
          { title: "<main> و <article>", desc: "جوهر الصفحة والمقالات المستقلة القابلة للمشاركة" },
          { title: "<aside>", desc: "الشريط الجانبي للملاحظات والمحتوى ذي الصلة" },
          { title: "<footer>", desc: "تذييل الموقع لحقوق الملكية والروابط القانونية والتواصل" }
        ],
        summary: "الوسوم الدلالية تمنح موقعك صوتاً مفهوماً لمحركات البحث وقارئات الشاشة لذوي الاحتياجات الخاصة."
      }
    },
    {
      id: "1.2.g",
      title: "أساسيات إمكانية الوصول",
      englishTitle: "Web Accessibility (a11y) Basics",
      definition: "إمكانية الوصول (Accessibility وتختصر بـ a11y) هي ممارسة وتصميم مواقع الويب بحيث يمكن لأي إنسان في العالم استخدامها والاستفادة منها بسهولة، بمن فيهم ذوي الاحتياجات الخاصة كالمكفوفين، وضعاف البصر، ومن يعانون من صعوبات حركية ويعتمدون على لوحة المفاتيح فقط دون فأرة.",
      analogy: "مثل 'المنحدر الخرساني الخاص بالكراسي المتحركة' بجانب درجات السلم في مدخل المستشفى أو المركز التجاري: وجود الدرج يفيد الأصحاء، لكن وجود المنحدر يسمح للجميع بالدخول بكرامة ويسر دون عوائق.",
      why: "أكثر من 15% من سكان العالم يعانون من إعاقات بصرية أو سمعية أو حركية. إهمال إمكانية الوصول يحرم الملايين من زيارة موقعك، كما أن الدول الكبرى تفرض غرامات قانونية قاسية على المواقع التجارية التي لا تلتزم بمعايير النفاذ الرقمي.",
      terms: [
        { term: "Accessibility (a11y)", pronunciation: "أكسسبيليتي", meaning: "إمكانية الوصول الرقمي؛ الرقم 11 يرمز لعدد الحروف بين a و y" },
        { term: "Screen Reader", pronunciation: "سكرين ريدر", meaning: "قارئ الشاشة؛ برنامج يقرأ محتويات الصفحة صوتياً للمكفوفين" },
        { term: "Keyboard Navigation", pronunciation: "كيبورد نافيجيشن", meaning: "القدرة على تصفح الموقع بالكامل عبر زر Tab والأسهم دون استخدام الفأرة" },
        { term: "Color Contrast", pronunciation: "كلر كونتراست", meaning: "نسبة التباين اللوني بين لون النص ولون الخلفية لسهولة القراءة" }
      ],
      syntax: "<!-- أمثلة لتطبيق a11y -->\n<button aria-label=\"إغلاق النافذة\">✕</button>\n<img src=\"chart.png\" alt=\"رسم بياني يوضح زيادة المبيعات بنسبة 20% هذا الشهر\" />",
      simpleCode: `<!-- زر يحوي أيقونة بصرية فقط، مع خاصية aria-label لإعلام فاقدي البصر بوظيفته -->
<button aria-label="البحث في محتويات الموقع" style="background: none; border: 1px solid #ccc; padding: 8px 12px; border-radius: 6px; cursor: pointer;">
  <!-- الأيقونة البصرية التي يراها المبصرون فقط -->
  🔍
</button>

<!-- استخدام عناصر التباين اللوني العالي (نص داكن على خلفية فاتحة جداً) -->
<div style="background-color: #ffffff; color: #0f172a; padding: 12px;">
  نص ذو تباين لوني ممتاز ومريح للعين ولا يجهد النظر.
</div>`,
      advancedCode: `<!-- تجربة تفاعلية لفحص إمكانية الوصول والتنقل بلوحة المفاتيح والتباين -->
<div style="font-family: sans-serif; background: #0f172a; padding: 20px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">اختبار إمكانية الوصول السريع (a11y):</h4>
  
  <p style="font-size: 13px; color: #94a3b8; line-height: 1.6;">
    💡 جرب الضغط على زر <b>Tab</b> في لوحة مفاتيحك الآن؛ ستلاحظ كيف ينتقل مستطيل التركيز الأزرق (Focus Ring) بنعومة بين العناصر لتسهيل التصفح لمن لا يملكون فأرة!
  </p>

  <div style="display: flex; gap: 10px; margin-top: 15px;">
    <!-- زر متوافق مع لوحة المفاتيح والتركيز البصري -->
    <button style="background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; outline: 2px solid transparent; outline-offset: 2px;" 
            onfocus="this.style.outlineColor='#60a5fa'" 
            onblur="this.style.outlineColor='transparent'">
      حفظ التغييرات
    </button>
    
    <!-- زر إلغاء -->
    <button style="background: #334155; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; outline: 2px solid transparent; outline-offset: 2px;"
            onfocus="this.style.outlineColor='#cbd5e1'" 
            onblur="this.style.outlineColor='transparent'">
      إلغاء
    </button>
  </div>
</div>`,
      outputExplanation: "يرى المستخدم كيف تتنقل لوحة المفاتيح بسلاسة وتظهر حلقة مضيئة حول العنصر النشط، مما يضمن أن أي شخص لا يستطيع استخدام الفأرة قادر على إتمام كل مهامه في الموقع بنجاح.",
      commonMistakes: [
        {
          wrong: "كتابة تنسيق CSS يحذف حلقة التركيز تماماً مثل: outline: none دون وضع بديل بصري.",
          right: "تخصيص شكل أنيق لحلقة التركيز (Focus Ring) بلون واضح وبارز.",
          reason: "حذف الـ outline يجعل مستخدمي لوحة المفاتيح تائهين تماماً ولا يعرفون أين يقف المؤشر."
        },
        {
          wrong: "استخدام نصوص رمادية باهتة على خلفية رمادية فاتحة لتبدو 'عصرية'، مما يجعلها مستحيلة القراءة لضعاف البصر.",
          right: "الحفاظ على نسبة تباين لا تقل عن 4.5:1 بين النص والخلفية وفق معايير WCAG العالمية.",
          reason: "الوضوح وسهولة القراءة تسبق أي جمالية بصرية خادعة."
        }
      ],
      bestPractices: [
        "استخدم الوسوم الدلالية الأصلية مثل <button> بدلاً من <div onclick=...> لأن الأزرار الأصلية تدعم لوحة المفاتيح تلقائياً مجاناً.",
        "احرص على ألا تنقل المعنى عبر الألوان وحدها؛ أضف نصوصاً أو أيقونات بجانب اللون الأحمر في رسائل الخطأ لمساعدة المصابين بعمى الألوان."
      ],
      infographic: {
        badge: "الإنسانية الرقمية",
        title: "إمكانية الوصول (Web Accessibility)",
        icon: "Eye",
        colors: "from-blue-600 to-teal-500",
        steps: [
          { title: "التباين اللوني العالي", desc: "نصوص واضحة وحادة تسهل القراءة لجميع الفئات وفي كل الإضاءات" },
          { title: "النصوص البديلة alt", desc: "تتيح للمكفوفين سماع وصف دقيق لكل صورة في الصفحة" },
          { title: "التنقل بلوحة المفاتيح", desc: "القدرة على تصفح الموقع كاملاً بلمسات زر Tab دون فأرة" },
          { title: "حلقات التركيز Focus", desc: "مؤشر بصري واضح يبين للعالم أين يقف الزائر في كل لحظة" }
        ],
        summary: "الويب صُمم ليكون متاحاً لكل البشر سواسية، وإمكانية الوصول هي الباب الذي يضمن عدم إقصاء أحد."
      }
    },
    {
      id: "1.2.h",
      title: "التحقق من صحة النماذج",
      englishTitle: "HTML Form Validation",
      definition: "التحقق من صحة النماذج في HTML هو قدرة المتصفح المدمجة على فحص مدخلات المستخدم تلقائياً قبل إرسالها إلى الخادم؛ للتأكد من أنها ليست فارغة، وأن البريد مكتوب بصيغة سليمة، وأن الأرقام ضمن الحدود المسموحة.",
      analogy: "مثل 'حارس الأمن عند بوابة الصعود للطائرة': يفحص تذكرتك وجوازك قبل أن تخطو خطوة واحدة؛ فإذا وجد التذكرة ناقصة أو منتهية الصلاحية نبهك فوراً لتصحيحها على البوابة دون أن تضيع وقتاً في ركوب الطائرة والرجوع منها!",
      why: "توفير وقت الزائر وسرعة التنبيه! بدلاً من إرسال النموذج للسيرفر وانتظار ثوانٍ ثم وصول رسالة 'لقد نسيت كتابة الإيميل'، يقوم المتصفح بفحصها في أجزاء من الثانية وينبه الزائر فوراً.",
      terms: [
        { term: "Form Validation", pronunciation: "فورم فاليديشن", meaning: "التحقق من صحة وتطابق بيانات النموذج" },
        { term: "required", pronunciation: "ريكوايرد", meaning: "خاصية تجعل الحقل إلزامياً ولا يمكن ترك النموذج فارغاً" },
        { term: "minlength / maxlength", pronunciation: "مين لينجث", meaning: "تحديد الحد الأدنى والأقصى لعدد الحروف المسموح بها" },
        { term: "pattern", pronunciation: "باترن", meaning: "تحديد نمط محدد للمدخلات باستخدام التعبيرات النمطية (Regex)" }
      ],
      syntax: "<input type=\"text\" required minlength=\"3\" maxlength=\"20\" />\n<input type=\"email\" required />\n<input type=\"number\" min=\"1\" max=\"100\" />",
      simpleCode: `<!-- نموذج يستخدم فحص المتصفح التلقائي المدمج -->
<form onsubmit="event.preventDefault(); alert('تم قبول البيانات لأنها مطابقة للشروط تماماً!');">
  <!-- حقل إلزامي لا يقبل تركه فارغاً -->
  <label for="u-name">اسم المستخدم (إلزامي):</label><br />
  <input id="u-name" type="text" required minlength="3" placeholder="3 أحرف على الأقل" /><br /><br />

  <!-- حقل بريد إلكتروني يفحص وجود علامة @ والنطاق -->
  <label for="u-mail">البريد الإلكتروني:</label><br />
  <input id="u-mail" type="email" required /><br /><br />

  <!-- زر الإرسال الذي يشغل الفحص التلقائي -->
  <button type="submit">إرسال الفحص</button>
</form>`,
      advancedCode: `<!-- نموذج تفاعلي متقدم يوضح رسائل الخطأ المخصصة وشروط كلمة المرور -->
<form onsubmit="handleValidateDemo(event)" style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 440px; border: 1px solid #1e293b;">
  <h4 style="color: #38bdf8; margin-top: 0;">نموذج مع فحص دقيق للمدخلات 🛡️</h4>
  
  <div style="margin-bottom: 12px;">
    <label for="v-phone" style="display: block; font-size: 13px; color: #94a3b8; margin-bottom: 4px;">رقم الجوال (10 أرقام تبدأ بـ 05):</label>
    <!-- استخدام خاصية pattern للتحقق من الأرقام بنمط Regex -->
    <input id="v-phone" type="tel" required pattern="05[0-9]{8}" placeholder="05XXXXXXXX" style="width: 100%; padding: 8px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white;" />
    <span style="font-size: 11px; color: #64748b;">مثال: 0512345678</span>
  </div>

  <div style="margin-bottom: 15px;">
    <label for="v-age" style="display: block; font-size: 13px; color: #94a3b8; margin-bottom: 4px;">العمر (بين 18 و 60 سنة):</label>
    <!-- استخدام min و max مع حقل الأرقام -->
    <input id="v-age" type="number" required min="18" max="60" style="width: 100%; padding: 8px; border-radius: 6px; background: #1e293b; border: 1px solid #334155; color: white;" />
  </div>

  <button type="submit" style="background: #10b981; color: white; border: none; padding: 10px; border-radius: 6px; width: 100%; cursor: pointer; font-weight: bold;">
    تحقق وأرسل البيانات
  </button>
  <div id="v-result" style="margin-top: 10px; font-size: 13px; text-align: center;"></div>
</form>

<script>
  function handleValidateDemo(e) {
    e.preventDefault();
    document.getElementById('v-result').innerHTML = '<span style="color: #34d399;">✓ رائع! جميع المدخلات مطابقة تماماً للمواصفات المطلوبة.</span>';
  }
</script>`,
      outputExplanation: "إذا حاول المستخدم الضغط على الزر دون كتابة رقم جوال صحيح يبدأ بـ 05 ويتكون من 10 أرقام، يقوم المتصفح تلقائياً بإيقاف الإرسال وإظهار بالون تنبيهي أنيق باللغة العربية يوضح سبب عدم قبول الإدخال.",
      commonMistakes: [
        {
          wrong: "الاعتماد الكامل على فحص الـ HTML (Frontend) فقط وإهمال الفحص في الخادم (Backend).",
          right: "الفحص في المتصفح هو لتحسين تجربة المستخدم، لكن الفحص الحقيقي للأمان يجب أن يعاد بالكامل في الخادم.",
          reason: "يمكن لأي مستخدم ذكي فتح أدوات المطور وحذف كلمة required في ثانية وإرسال بيانات فارغة."
        }
      ],
      bestPractices: [
        "وضح للمستخدم شروط الإدخال مسبقاً بنص خفيف تحت الحقل (مثل: كلمة المرور 8 خانات تحوي رقماً ورمزاً).",
        "استخدم خاصية autocomplete=\"email\" أو autocomplete=\"current-password\" لتسهيل التعبئة التلقائية للمستخدم بلمسة واحدة."
      ],
      infographic: {
        badge: "حراسة المدخلات",
        title: "التحقق من صحة النماذج (Validation)",
        icon: "ShieldAlert",
        colors: "from-green-600 to-teal-600",
        steps: [
          { title: "required", desc: "منع إرسال الحقول الفارغة وإجبار الزائر على ملء الخانة" },
          { title: "type=\"email\"", desc: "التأكد الذاتي من احتواء البريد على @ واسم النطاق .com" },
          { title: "minlength / maxlength", desc: "ضبط الحد الأدنى والأقصى لعدد الحروف والكلمات" },
          { title: "pattern=\"...\"", desc: "التحقق من تطابق الأرقام مع أنماط الهواتف والبطاقات عبر Regex" }
        ],
        summary: "التحقق المدمج في HTML يحمي السيرفر من البيانات المشوهة ويوفر تجربة استخدام فائقة السرعة."
      }
    }
  ],
  quiz: [
    {
      question: "ما هو الوسم الإلزامي لوضع الحروف والترميز العربي لضمان عدم ظهور رموز غريبة؟",
      options: [
        "<meta charset=\"UTF-8\" />",
        "<arabic lang=\"true\" />",
        "<font language=\"arabic\" />",
        "<style charset=\"ar\" />"
      ],
      correctIndex: 0,
      explanation: "وسم <meta charset=\"UTF-8\" /> داخل <head> هو المعيار العالمي الذي يضمن فك شفرة الحروف العربية وكل لغات العالم بدون أي تشوه."
    },
    {
      question: "لماذا نفضل استخدام <article> و <nav> على استخدام وسوم <div> المتكررة؟",
      options: [
        "لأنها تجعل خلفية الموقع ملونة تلقائياً",
        "لأنها وسوم دلالية (Semantic) تفهمها محركات البحث وتساعد ذوي الاحتياجات الخاصة",
        "لأنها تقلل من حجم استهلاك باقة الإنترنت إلى النصف",
        "لأن وسوم div تم إلغاؤها من الإنترنت"
      ],
      correctIndex: 1,
      explanation: "الوسوم الدلالية تمنح المعنى الصحيح لمحركات البحث (SEO) لترتيب موقعك في جوجل، وتساعد قارئات الشاشة في توجيه ذوي الإعاقة البصرية."
    },
    {
      question: "أي خاصية من الخصائص التالية تجعل حقل الإدخال إلزامياً ولا تسمح بإرسال النموذج وهو فارغ؟",
      options: ["must=\"true\"", "mandatory", "required", "checked"],
      correctIndex: 2,
      explanation: "الخاصية required هي الكلمة المفتاحية القياسية في HTML5 لإجبار المستخدم على إدخال قيمة قبل إرسال النموذج."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء بطاقة شخصية متكاملة لمدرب تقني",
    description: "قم بإنشاء كود HTML لبطاقة تعريفية لمدرب تقني تحوي: عنوان رئيسي (h1)، وصورة للمدرب مع نص بديل (alt)، وفقرة توضح خبراته، وقائمة نقطية بالمهارات التقنية (HTML, CSS, JS)، ورابط لحسابه الشخصي يفتح في نافذة جديدة.",
    hints: [
      "استخدم وسم <article> لاحتواء البطاقة كعنصر دلالي مستقل.",
      "استخدم <img> مع خاصية src و alt واضحة.",
      "استخدم <ul> وبداخلها عناصر <li> لكل مهارة تقنية.",
      "استخدم <a> مع خاصية target=\"_blank\" و rel=\"noopener noreferrer\"."
    ],
    solution: `<!-- الحل النموذجي لبطاقة المدرب التقني خطوة بخطوة مع تعليقات كاملة -->
<!-- حاوية المقال الدلالية المستقلة -->
<article style="border: 1px solid #cbd5e1; border-radius: 12px; padding: 20px; max-width: 320px; font-family: sans-serif; text-align: center;">
  <!-- صورة المدرب مع نص بديل دقيق وأبعاد واضحة -->
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="صورة المدربة سارة أحمد استشارية واجهات الويب" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;" />
  
  <!-- العنوان الرئيسي للاسم -->
  <h1 style="font-size: 20px; color: #1e293b; margin: 12px 0 4px 0;">سارة أحمد</h1>
  <!-- عنوان فرعي للوظيفة -->
  <h3 style="font-size: 14px; color: #64748b; margin: 0 0 12px 0;">مهندسة واجهات ومطورة React</h3>

  <!-- فقرة نبذة مختصرة -->
  <p style="font-size: 13px; color: #475569; line-height: 1.6;">
    شغوفة بتعليم وتدريب المبتدئين على بناء تطبيقات الويب السريعة والحديثة من الصفر.
  </p>

  <!-- قائمة المهارات النقطية -->
  <div style="text-align: right; margin-top: 15px;">
    <h4 style="font-size: 13px; color: #0284c7; margin: 0 0 6px 0;">المهارات الأساسية:</h4>
    <ul style="font-size: 13px; color: #334155; padding-right: 20px; margin: 0;">
      <li>إتقان HTML5 الدلالية وإمكانية الوصول</li>
      <li>تنسيق الواجهات بـ CSS3 المتجاوبة</li>
      <li>برمجة التفاعلات بـ JavaScript الحديثة</li>
    </ul>
  </div>

  <!-- رابط الحساب الشخصي الخارجي -->
  <div style="margin-top: 20px;">
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #0f172a; color: white; text-decoration: none; padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: bold;">
      زيارة الملف الشخصي في GitHub ↗
    </a>
  </div>
</article>`
  },
  topicInfographic: {
    title: "خريطة المفاهيم: أساسيات HTML5",
    badge: "الموضوع 1.2",
    overview: "HTML هي عظام وهيكل الويب؛ تبدأ بهيكل الصفحة المنظم، مروراً بالعناوين والنصوص، والوسائط من صور وجداول، وانتهاءً بالنماذج التفاعلية والعناصر الدلالية وإمكانية الوصول.",
    pillars: [
      { name: "الهيكل", color: "#f97316", role: "DOCTYPE, head, body الترميز العربي" },
      { name: "المحتوى", color: "#38bdf8", role: "عناوين h1-h6، فقرات، قوائم، صور مع alt" },
      { name: "التفاعل", color: "#34d399", role: "نماذج form، حقول input بأنواعها، validation" },
      { name: "الدلالة والنفاذ", color: "#a855f7", role: "Semantic HTML، معايير a11y، تباين ونفاذ" }
    ]
  }
};

