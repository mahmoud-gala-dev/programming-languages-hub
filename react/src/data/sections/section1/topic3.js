// src/data/sections/section1/topic3.js
// الموضوع 3: أساسيات CSS (CSS Fundamentals)

export const TOPIC_3 = {
  id: "1.3",
  title: "أساسيات CSS",
  englishTitle: "CSS Fundamentals",
  description: "فن تحويل الهيكل العظمي إلى تحفة بصرية: المحددات، درجات الأولوية، نموذج الصندوق، أنظمة التخطيط Flexbox و Grid، والتصميم المتجاوب والحركات.",
  icon: "Palette",
  subtopics: [
    {
      id: "1.3.a",
      title: "طرق كتابة CSS",
      englishTitle: "Ways to Write CSS (Inline, Internal, External)",
      definition: "هناك 3 طرق لكتابة أنماط CSS وتطبيقها على عناصر الصفحة: مضمنة داخل العنصر نفسه (Inline)، أو داخل وسم <style> في رأس الصفحة (Internal)، أو في ملف خارجي منفصل بصيغة .css وربطه عبر وسم <link> (External وهو الأفضل والأكثر احترافية).",
      analogy: "تخيل أنك تصمم زياً لجيش من الموظفين: الطريقة المضمنة (Inline) تشبه أن تمسك كل موظف وتخيط شارة على قميصه واحداً تلو الآخر (مجهدة ومضيعة للوقت!). أما الطريقة الخارجية (External) فتشبه تعليق لائحة تعليمات عامة على باب الشركة: 'الجميع يرتدون قميصاً أزرق'، فإذا أردت تغيير اللون إلى الأخضر، تغير كلمة واحدة في اللائحة ليتغير زي كل الموظفين فوراً!",
      why: "فصل التصميم والشكل (CSS) عن الهيكل والمحتوى (HTML) يسهل تعديل مظهر آلاف الصفحات في موقعك بمجرد تعديل سطر واحد في ملف CSS المشترك دون لمس أي ملف HTML.",
      terms: [
        { term: "CSS (Cascading Style Sheets)", pronunciation: "سي إس إس", meaning: "صفحات الأنماط الانسيابية؛ لغة تصميم وتزيين وتخطيط صفحات الويب" },
        { term: "Inline CSS", pronunciation: "إنلاين سي إس إس", meaning: "تنسيق مضمن داخل خاصية style بالعنصر نفسه" },
        { term: "Internal CSS", pronunciation: "إنترنال سي إس إس", meaning: "تنسيق داخلي يكتب بين وسمي <style> داخل رأس الصفحة" },
        { term: "External CSS", pronunciation: "إكسترنال سي إس إس", meaning: "تنسيق خارجي في ملف منفصل مثل style.css ويتم استدعاؤه بـ <link>" }
      ],
      syntax: "<!-- 1. Inline -->\n<p style=\"color: red;\">نص أحمر</p>\n<!-- 2. Internal -->\n<style> p { color: blue; } </style>\n<!-- 3. External -->\n<link rel=\"stylesheet\" href=\"styles.css\" />",
      simpleCode: `<!-- 1. الطريقة المضمنة (Inline): مفيدة للتجارب السريعة فقط -->
<h2 style="color: #2563eb; font-size: 20px;">عنوان أزرق بتنسيق Inline</h2>

<!-- 2. الطريقة الداخلية (Internal): توضع داخل <head> للصفحات الفردية -->
<style>
  /* استهداف كل الفقرات وتلوينها باللون الداكن */
  p {
    /* لون النص الرمادي الداكن المريح للعين */
    color: #334155;
    /* ارتفاع السطر لتحسين سهولة القراءة */
    line-height: 1.6;
  }
</style>

<!-- 3. الطريقة الخارجية (External): المعيار العالمي الأفضل -->
<!-- <link rel="stylesheet" href="style.css" /> -->`,
      advancedCode: `<!-- استعراض تفاعلي للمقارنة بين الطرق الثلاث وأثرها على الصيانة -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 520px;">
  <h4 style="color: #38bdf8; margin-top: 0;">مقارنة طرق كتابة CSS:</h4>
  
  <div style="display: flex; flex-direction: column; gap: 10px;">
    <!-- كرت Inline -->
    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-right: 4px solid #f59e0b;">
      <b style="color: #fbbf24;">1. Inline CSS:</b>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">
        يكتب مباشرة داخل العنصر: <code style="color: #67e8f9;">&lt;h1 style="color: red"&gt;</code><br>
        ⚠️ <b>العيوب:</b> يصعب تعديله إذا كان لديك 100 صفحة، ويفسد نظافة كود HTML.
      </p>
    </div>

    <!-- كرت Internal -->
    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-right: 4px solid #3b82f6;">
      <b style="color: #60a5fa;">2. Internal CSS:</b>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">
        يوضع داخل وسم <code style="color: #67e8f9;">&lt;style&gt;</code> في رأس صفحة محددة.<br>
        ℹ️ <b>الاستخدام:</b> ممتاز للصفحات الفردية المستقلة (Landing Pages).
      </p>
    </div>

    <!-- كرت External -->
    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-right: 4px solid #10b981;">
      <b style="color: #34d399;">3. External CSS (المفضل عالمياً):</b>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">
        ملف مستقل <code style="color: #67e8f9;">style.css</code> يربط مع كل صفحات الموقع.<br>
        ✓ <b>المميزات:</b> كود نظيف، تحميل أسرع بفضل كاش المتصفح، وسهولة تامة في تغيير الثيم كاملاً بثوانٍ.
      </p>
    </div>
  </div>
</div>`,
      outputExplanation: "تظهر المقارنة بوضوح لماذا يعتمد المطورون في الشركات الكبرى على ملفات CSS الخارجية لتوفير الوقت والجهد، مع تجنب حشو ملفات HTML بتنسيقات inline مبعثرة.",
      commonMistakes: [
        {
          wrong: "الاعتماد الدائم على خاصية style=\"...\" داخل كل وسم HTML في مشاريع حقيقية.",
          right: "إنشاء ملف style.css خارجي واستخدام الأصناف (Classes) لتنسيق العناصر المشتركة.",
          reason: "كتابة الأنماط المضمنة تمنع إعادة استخدام الكود وتجعل حجم ملفات HTML ضخماً وبطيئاً."
        }
      ],
      bestPractices: [
        "استخدم External CSS دائماً في المشاريع الحقيقية لتقليل التكرار وللسماح للمتصفح بحفظ الملف في الـ Cache.",
        "اجعل أسماء ملفات التنسيق واضحة مثل main.css أو theme.css."
      ],
      infographic: {
        badge: "طرق الربط",
        title: "طرق كتابة CSS الثلاث",
        icon: "FileCode2",
        colors: "from-blue-600 to-cyan-500",
        steps: [
          { title: "Inline (مضمن)", desc: "داخل الوسم مباشرة (خاصية style) للأمور السريعة جداً" },
          { title: "Internal (داخلي)", desc: "بين وسمي <style> داخل <head> لصفحة واحدة مستقلة" },
          { title: "External (خارجي)", desc: "في ملف .css منفصل وربطه بـ <link>، وهو المعيار الذهبي" }
        ],
        summary: "فصل المظهر في ملف خارجي هو سر احترافية وسرعة صيانة كبرى مواقع الإنترنت."
      }
    },
    {
      id: "1.3.b",
      title: "المحددات ودرجة الأولوية",
      englishTitle: "Selectors & Specificity",
      definition: "المحددات (Selectors) هي الطريقة التي تشير بها إلى العناصر لتلوينها وتنسيقها؛ مثل اختيار الوسم (p)، أو الصنف (.btn)، أو المعرف الفريد (#header). ودرجة الأولوية (Specificity) هي نظام النقاط الصارم الذي يعتمده المتصفح لحسم النزاع إذا حصل عنصر واحد على أمرين متناقضين (مثل أمر يقول لونه أحمر وآخر يقول أزرق!).",
      analogy: "تخيل رتب الجيش: الجندي العادي هو (محدد الوسم tag)، والضابط هو (محدد الصنف class)، والجنرال القائد هو (محدد المعرف الفريد id). إذا أمرك الجندي بارتداء قبعة زرقاء، لكن الجنرال أمرك بقبعة حمراء، فإن أمر الجنرال الأعلى رتبة هو الذي ينتصر دائماً دون نقاش!",
      why: "في المشاريع الكبيرة ذات آلاف أسطر الـ CSS، تتداخل التنسيقات ويكتب عدة مطورين أوامر مختلفة. فهم نظام الأولوية يمنعك من الوقوع في الإحباط عندما تكتب تنسيقاً ولا يظهر على الشاشة وتتساءل لماذا لم يتغير اللون؟",
      terms: [
        { term: "Element Selector", pronunciation: "إليمينت سيلكتور", meaning: "محدد الوسم؛ يختار كل عناصر النوع المذكور (مثل h1 أو p)" },
        { term: "Class Selector", pronunciation: "كلاس سيلكتور", meaning: "محدد الصنف؛ يبدأ بنقطة . ويختار كل عنصر يحمل هذا الكلاس (مثل .btn)" },
        { term: "ID Selector", pronunciation: "آي دي سيلكتور", meaning: "محدد المعرف؛ يبدأ بهاشتاغ # ويختار العنصر الفريد فقط (مثل #logo)" },
        { term: "Specificity", pronunciation: "سبيسيفيسيتي", meaning: "درجة الخصوصية والأولوية الرياضية للمحدد" },
        { term: "!important", pronunciation: "إمبورتانت", meaning: "كلمة استثنائية تفرض التنسيق بالقوة القصوى (ينصح بتجنبها)" }
      ],
      syntax: "/* وزن 1 نقطة (وسم) */\np { color: black; }\n\n/* وزن 10 نقاط (صنف) */\n.text-blue { color: blue; }\n\n/* وزن 100 نقطة (معرف فريد) */\n#special-text { color: red; }\n\n/* وزن 1000 نقطة (Inline Style) */",
      simpleCode: `/* 1. محدد الوسم البسيط (وزن: 1 نقطة فقط) */
p {
  color: #64748b; /* لون رمادي لكل الفقرات */
}

/* 2. محدد الصنف Class (وزن: 10 نقاط - أقوى من الوسم) */
.highlight {
  color: #2563eb; /* لون أزرق جذاب يتغلب على الرمادي */
  font-weight: bold;
}

/* 3. محدد المعرف الفريد ID (وزن: 100 نقطة - أقوى من الكلاس) */
#hero-text {
  color: #dc2626; /* لون أحمر ناري يتغلب على الجميع */
}`,
      advancedCode: `<!-- تجربة حية توضح كيف ينتصر المحدد الأقوى وزناً في CSS -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">حساب أوزان الأولوية (Specificity Calculator):</h4>
  
  <div style="background: #1e293b; padding: 15px; border-radius: 8px; margin-bottom: 15px; font-family: monospace; font-size: 13px; line-height: 1.8;">
    <span style="color: #94a3b8;">/* القاعدة 1: */</span> p { color: gray; } <span style="color: #38bdf8;">(1 نقطة)</span><br>
    <span style="color: #94a3b8;">/* القاعدة 2: */</span> .alert { color: blue; } <span style="color: #38bdf8;">(10 نقاط)</span><br>
    <span style="color: #94a3b8;">/* القاعدة 3: */</span> #urgent { color: red; } <span style="color: #38bdf8;">(100 نقطة)</span><br>
    <span style="color: #94a3b8;">/* القاعدة 4: */</span> style="..." <span style="color: #38bdf8;">(1000 نقطة)</span>
  </div>

  <!-- عنصر يحمل الوسم p والكلاس alert والمعرف urgent -->
  <div style="border: 2px dashed #475569; padding: 12px; border-radius: 6px; text-align: center;">
    <p id="urgent" class="alert" style="margin: 0; font-size: 16px; font-weight: bold; color: #f87171;">
      هذا النص يحمل (Tag + Class + ID) فما هو لونه الفائز؟
    </p>
    <div style="font-size: 12px; color: #4ade80; margin-top: 8px;">
      ✓ فاز المعرف ID (#urgent) ذو الـ 100 نقطة وتلون النص بالأحمر!
    </div>
  </div>
</div>`,
      outputExplanation: "يرى الزائر معادلة رياضية واضحة: بالرغم من وجود 3 قواعد ألوان مطبقة على الفقرة نفسها، إلا أن المتصفح طبق اللون الأحمر لأن محدد الـ ID يملك 100 نقطة متفوقاً على الكلاس (10) والوسم (1).",
      commonMistakes: [
        {
          wrong: "استخدام !important في نهاية كل سطر لحل مشكلة عدم ظهور التنسيق بالقوة.",
          right: "فهم أوزان المحددات وكتابة محدد أكثر دقة مثل .card .btn بدلاً من تدمير الكود بـ !important.",
          reason: "كلمة !important تكسر قواعد الانسياب الطبيعية وتجعل تعديل الكود في المستقبل كابوساً مستحيلاً."
        }
      ],
      bestPractices: [
        "اعتمد في 95% من تصميمك على محددات الأصناف (.classes) لأنها مرنة، متوازنة الوزن، وقابلة لإعادة الاستخدام.",
        "احجز المعرفات (#id) لاستخدامها مع JavaScript ونادراً ما تستخدمها في كتابة CSS لتجنب صعوبة الكتابة فوقها."
      ],
      infographic: {
        badge: "حرب الأوزان",
        title: "درجة الأولوية (CSS Specificity)",
        icon: "ShieldAlert",
        colors: "from-purple-600 to-indigo-600",
        steps: [
          { title: "الوسوم (العناصر)", desc: "وزن 1 نقطة (مثل div, p, h1, a)" },
          { title: "الأصناف (Classes)", desc: "وزن 10 نقاط (مثل .btn, .card, .active)" },
          { title: "المعرفات (IDs)", desc: "وزن 100 نقطة (مثل #header, #main-nav)" },
          { title: "Inline Style", desc: "وزن 1000 نقطة داخل خاصية style بالعنصر" }
        ],
        summary: "المحدد الأكثر تحديداً والأعلى وزناً هو من ينتصر دائماً في رسم الألوان."
      }
    },
    {
      id: "1.3.c",
      title: "الألوان والخطوط والمسافات",
      englishTitle: "Colors, Typography & Spacing (Margins/Paddings)",
      definition: "هذه هي المثلث الأساسي لجمال أي موقع: الألوان تحدد هوية البراند وتُكتب بصيغ (HEX, RGB, HSL). الخطوط (Typography) تضبط حجم النص ونوعه وسماكته. والمسافات (Spacing) تنقسم إلى مسافة داخلية بين المحتوى وحدود الصندوق (Padding)، ومسافة خارجية تدفع العناصر المجاورة بعيداً (Margin).",
      analogy: "تخيل 'لوحة فنية داخل إطار خشبي معلقة على جدار': اللوحة نفسها هي المحتوى. المسافة البيضاء بين الرسمة وحافة الإطار الخشبي هي المسافة الداخلية (Padding). الإطار الخشبي نفسه هو الحدود (Border). أما المسافة بين لوحتك واللوحة المعلقة بجانبها على الجدار هي المسافة الخارجية (Margin).",
      why: "الموقع الذي تلتصق نصوصه بحواف الشاشة وبألوان غير متناسقة ينفر الزائر في أول ثانيتين. التباعد المدروس (White Space) يعطي التصميم فخامة ويسمح لعين القارئ بالارتياح والتنقل بسلاسة.",
      terms: [
        { term: "HEX Color", pronunciation: "هيكس كود", meaning: "كود لوني يبدأ بعلامة الشباك مثل #3b82f6 (أحمر، أخضر، أزرق)" },
        { term: "RGB / RGBA", pronunciation: "آر جي بي إيه", meaning: "نظام ألوان مع قناة الشفافية Alpha من 0 إلى 1" },
        { term: "font-family", pronunciation: "فونت فاميلي", meaning: "نوع الخط المستخدم (مثل Cairo أو Tajawal)" },
        { term: "Padding", pronunciation: "بادينج", meaning: "المسافة الداخلية بين المحتوى وحدود العنصر" },
        { term: "Margin", pronunciation: "مارجن", meaning: "المسافة الخارجية الفاصلة بين العنصر والعناصر المحيطة به" }
      ],
      syntax: "/* الألوان */\ncolor: #2563eb; background-color: rgba(37, 99, 235, 0.1);\n/* الخطوط */\nfont-family: 'Cairo', sans-serif; font-size: 16px; font-weight: 700;\n/* المسافات */\npadding: 16px; margin: 24px auto;",
      simpleCode: `/* تصميم بطاقة تجمع الألوان والخطوط والمسافات باحترافية */
.card {
  /* لون خلفية فاتح ومريح */
  background-color: #f8fafc;
  /* نوع الخط العربي الأنيق */
  font-family: 'Cairo', sans-serif;
  /* مسافة داخلية حتى لا يلتصق النص بجدران البطاقة */
  padding: 20px;
  /* مسافة خارجية لدفع البطاقات الأخرى بعيداً بمقدار 15 بكسل */
  margin: 15px;
  /* حدود ناعمة بلون رمادي خفيف */
  border: 1px solid #e2e8f0;
  /* تدوير حواف البطاقة لتبدو عصرية */
  border-radius: 8px;
}`,
      advancedCode: `<!-- تجربة بصرية توضح الفرق بين Padding و Margin بالألوان الحية -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">تشريح المسافات (Margin vs Padding):</h4>

  <!-- الصندوق الخارجي يمثل الحاوية -->
  <div style="background: #334155; padding: 15px; border-radius: 8px;">
    <div style="font-size: 11px; color: #cbd5e1; margin-bottom: 6px;">حاوية الأب (Parent Container)</div>
    
    <!-- صندوق يوضح المسافة الخارجية والداخلية -->
    <div style="background: #f59e0b; padding: 12px; border-radius: 6px; margin: 15px 0;">
      <div style="font-size: 11px; color: #78350f; font-weight: bold; margin-bottom: 4px;">
        المنطقة البرتقالية = مسافة داخلية (Padding: 12px)
      </div>

      <!-- المحتوى الفعلي في القلب -->
      <div style="background: #1e293b; color: white; padding: 12px; border-radius: 4px; text-align: center; border: 2px solid #38bdf8;">
        <span style="color: #38bdf8; font-weight: bold;">المحتوى الفعلي (Content Box)</span>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8;">
          لاحظ كيف تحمي المسافة الداخلية (Padding) هذا النص من الالتصاق بالحواف!
        </p>
      </div>
    </div>
    
    <div style="font-size: 11px; color: #94a3b8; text-align: center;">
      المسافة الفارغة في الأعلى والأسفل هي المسافة الخارجية (Margin: 15px)
    </div>
  </div>
</div>`,
      outputExplanation: "يشاهد المتعلم تفكيكاً بصرياً دقيقاً: المنطقة الرمادية تمثل الحاوية، والمنطقة البرتقالية تمثل الـ Padding الذي يحتضن النص، والمساحة الفاصلة تمثل الـ Margin الذي يمنع التلاصق.",
      commonMistakes: [
        {
          wrong: "استخدام Margin موجب ومحاولة تلوين خلفيته بلون مختلف.",
          right: "تذكر دائماً أن الـ Margin شفاف تماماً وتظهر من خلاله خلفية الصفحة الأصلية، بينما الـ Padding يأخذ نفس لون خلفية العنصر.",
          reason: "الـ Padding جزء من داخل الصندوق، والـ Margin خارجه تماماً."
        }
      ],
      bestPractices: [
        "استخدم نظام مضاعفات الرقم 4 أو 8 في المسافات (مثل: 4px, 8px, 16px, 24px, 32px) لخلق إيقاع بصري متناغم ومتوازن.",
        "احرص على ألا يقل حجم خط النصوص الأساسية في الهواتف عن 16px لمنع الزائر من تقريب الشاشة لقراءة المحتوى."
      ],
      infographic: {
        badge: "التناغم الجمالي",
        title: "الألوان والخطوط والمسافات",
        icon: "Sliders",
        colors: "from-amber-500 to-rose-500",
        steps: [
          { title: "أنظمة الألوان", desc: "HEX (#3b82f6) للثوابت و RGBA(..., 0.5) للشفافية الناعمة" },
          { title: "الطباعة والخطوط", desc: "اختيار خط واضح مع ضبط line-height بنسبة 1.6 لإراحة العين" },
          { title: "Padding (داخلي)", desc: "المسافة الداخلية بين الحروف والجدار؛ وتأخذ لون الخلفية" },
          { title: "Margin (خارجي)", desc: "المسافة الفاصلة بين الصناديق في الغرفة؛ وتكون شفافة دائماً" }
        ],
        summary: "المسافات البيضاء المدروسة ليست فراغاً ضائعاً، بل هي التنفس الحقيقي للتصميم الراقي."
      }
    },
    {
      id: "1.3.d",
      title: "نموذج الصندوق Box Model",
      englishTitle: "CSS Box Model & box-sizing",
      definition: "نموذج الصندوق هو المبدأ الأساسي الذي يرى المتصفح من خلاله كل عنصر في الصفحة: مستطيل يتكون من 4 طبقات متداخلة (Content, Padding, Border, Margin). وخاصية box-sizing: border-box هي السحر الذي يضمن ألا يتغير عرض الصندوق عند إضافة مسافات داخلية أو حدود.",
      analogy: "تخيل أنك اشتريت 'صندوق هدايا' بعرض 30 سم لتضعه في حقيبة سفرك. بالطريقة القديمة الغبية: إذا أضفت بطانة صوفية داخل الصندوق (Padding) وسماكة للكرتون (Border)، كان الصندوق يتمدد ليصبح 36 سم ويفشل في الدخول في الحقيبة! أما مع border-box، يظل الصندوق 30 سم تماماً وتُخصم البطانة من المساحة الداخلية تلقائياً.",
      why: "بدون box-sizing: border-box، ستنفجر أعصابك كمطور! تطلب عرض عنصر 50% وعنصر بجانبه 50%، وبمجرد إضافة border 1px يقفز العنصر الثاني للسطر الأسفل ويتشوه التصميم.",
      terms: [
        { term: "Content", pronunciation: "كونتنت", meaning: "مساحة المحتوى النصي أو الصورة الفعلية" },
        { term: "Padding", pronunciation: "بادينج", meaning: "المسافة الداخلية العازلة المحيطة بالمحتوى" },
        { term: "Border", pronunciation: "بوردر", meaning: "الحدود أو الإطار المحيط بالعنصر" },
        { term: "Margin", pronunciation: "مارجن", meaning: "المسافة الخارجية العازلة للصندوق عن جيرانه" },
        { term: "box-sizing: border-box", pronunciation: "بوكس سايزينج بوردر بوكس", meaning: "خاصية تجعل العرض الكلي يشمل الـ Padding والـ Border دون زيادة" }
      ],
      syntax: "/* القاعدة الذهبية الإلزامية في بداية كل ملف CSS في العالم */\n*, *::before, *::after {\n  box-sizing: border-box;\n}",
      simpleCode: `/* تفعيل نموذج الصندوق السليم لجميع العناصر */
* {
  /* إجبار المتصفح على حساب العرض والارتفاع شاملاً المسافات الداخلية والإطار */
  box-sizing: border-box;
}

/* صندوق بعرض 200 بكسل حقيقي وثابت */
.box {
  /* عرض الصندوق الثابت */
  width: 200px;
  /* مسافة داخلية 20 بكسل */
  padding: 20px;
  /* إطار بسماكة 2 بكسل */
  border: 2px solid #2563eb;
  /* العرض الكلي سيظل 200px بالتمام والكمال ولن يزيد أبداً بفضل border-box! */
}`,
      advancedCode: `<!-- محاكاة تفاعلية تقارن بين الصندوق المشوه (content-box) والصندوق الذكي (border-box) -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">لماذا نحتاج box-sizing: border-box دائماً؟</h4>
  
  <!-- الصندوق القديم السيئ -->
  <div style="margin-bottom: 20px;">
    <div style="font-size: 12px; color: #f87171; margin-bottom: 4px;">
      ❌ content-box: كتبنا width: 250px لكن حجمه الفعلي أصبح (290px)!
    </div>
    <div style="box-sizing: content-box; width: 250px; padding: 15px; border: 5px solid #ef4444; background: #450a0a; color: #fca5a5; font-size: 12px; border-radius: 6px;">
      تمدد الصندوق رغماً عنا بسبب إضافة الـ Padding والإطار!
    </div>
  </div>

  <!-- الصندوق الحديث الصحيح -->
  <div>
    <div style="font-size: 12px; color: #4ade80; margin-bottom: 4px;">
      ✓ border-box: كتبنا width: 250px وظل حجمه الفعلي (250px) بالتمام!
    </div>
    <div style="box-sizing: border-box; width: 250px; padding: 15px; border: 5px solid #10b981; background: #064e3b; color: #a7f3d0; font-size: 12px; border-radius: 6px;">
      المقاس منضبط 100% كما صممناه دون أي تشوه في التخطيط.
    </div>
  </div>
</div>`,
      outputExplanation: "يلاحظ المتعلم بالعين المجردة كيف أن الصندوق الأول أصبح أطول وخرج عن المسار الطبيعي، بينما الصندوق الثاني المعتمد على border-box حافظ على حدوده الهندسية بدقة تامة.",
      commonMistakes: [
        {
          wrong: "نسيان كتابة قاعدة *, *::before, *::after { box-sizing: border-box; } في أول سطر بمشروعك.",
          right: "اعتماد هذه القاعدة كطقس مقدس يبدأ به أي مشروع ويب حول العالم.",
          reason: "بدونها ستفاجأ بأن أي بطاقة تضيف لها padding تنكسر وتخرج عن إطار الصفحة في شاشات الجوال."
        }
      ],
      bestPractices: [
        "ضع قاعدة border-box العامة في أعلى ملف styles.css لتريح نفسك من حساب البكسلات يدوياً للأبد.",
        "استخدم أداة فحص العناصر في DevTools؛ حيث تظهر لك رسماً ملوناً لطبقات نموذج الصندوق في أسفل تبويب Computed."
      ],
      infographic: {
        badge: "الهندسة الحسابية",
        title: "نموذج الصندوق (CSS Box Model)",
        icon: "Box",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "1. Content", desc: "النواة الداخلية: النص أو الصورة الفعلية" },
          { title: "2. Padding", desc: "الوسادة الهوائية الداخلية التي تحيط بالمحتوى" },
          { title: "3. Border", desc: "الجدار الفولاذي أو الإطار الذي يحيط بالصندوق" },
          { title: "4. Margin", desc: "المنطقة العازلة الخارجية التي تدفع الجيران" }
        ],
        summary: "كل بكسل على شاشتك هو في الحقيقة صندوق خاضع لقوانين الـ Box Model."
      }
    },
    {
      id: "1.3.e",
      title: "خاصية Display",
      englishTitle: "Display Property (block, inline, inline-block, none)",
      definition: "خاصية display تحدد سلوك العنصر وكيف يظهر في تدفق الصفحة: هل يحتكر السطر بالكامل من بدايته لنهايته (block مثل <div> و <p>)، أم يجلس متجاوراً مع الكلمات ولا يقبل تحديد العرض والارتفاع (inline مثل <span> و <a>)، أم يجمع الميزتين معاً (inline-block)، أم يختفي تماماً من الوجود (none).",
      analogy: "تخيل ركاب حافلة: الراكب (block) هو شخص يجلس بمفرده على مقعد عريض بالعرض ويرفض جلوس أي شخص بجانبه في نفس الصف! والراكب (inline) هو طفل صغير يجلس بجانب الركاب بين الكلمات. أما الراكب (inline-block) فهو شخص يجلس بجوارك لكنه يحتفظ بحقيبته الخاصة بأبعاد محددة. والراكب (none) هو شخص اختفى تماماً وكأنه لم يركب الحافلة أصلاً!",
      why: "التحكم في تدفق العناصر هو جوهر التخطيط في الويب؛ إذا أردت وضع زرين بجانب بعضهما، أو تحويل رابط عادي إلى زر عريض يملأ الشاشة، فخاصية display هي أداتك السحرية.",
      terms: [
        { term: "display: block", pronunciation: "ديسبلاي بلوك", meaning: "عنصر كتلي يبدأ في سطر جديد ويملأ العرض المتاح كاملاً 100%" },
        { term: "display: inline", pronunciation: "ديسبلاي إنلاين", meaning: "عنصر سطري يتدفق مع النص ولا يقبل تحديد width أو height" },
        { term: "display: inline-block", pronunciation: "ديسبلاي إنلاين بلوك", meaning: "عنصر يجلس بجوار العناصر الأخرى ولكنه يقبل تحديد العرض والارتفاع" },
        { term: "display: none", pronunciation: "ديسبلاي نان", meaning: "إخفاء العنصر تماماً وإزالته من شجرة التخطيط دون حجز أي فراغ" }
      ],
      syntax: "div { display: block; }\nspan { display: inline; }\nbutton { display: inline-block; }\n.hidden-box { display: none; }",
      simpleCode: `/* تحويل رابط عادي (كان inline) إلى زر عريض كتلي (block) */
.full-width-link {
  /* إجبار الرابط على احتلال السطر كاملاً */
  display: block;
  /* لون خلفية الزر */
  background-color: #2563eb;
  /* لون النص الأبيض */
  color: white;
  /* محاذاة النص في المنتصف */
  text-align: center;
  /* مسافة داخلية مريحة للنقر */
  padding: 12px;
  /* تدوير الحواف */
  border-radius: 6px;
  /* إزالة الخط السفلي التقليدي للروابط */
  text-decoration: none;
}`,
      advancedCode: `<!-- مقارنة تفاعلية عملية بين قيم Display الأربعة على شاشة واحدة -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">معاينة حية لسلوكيات خاصية Display:</h4>
  
  <!-- 1. نموذج block -->
  <div style="margin-bottom: 12px;">
    <span style="font-size: 11px; color: #94a3b8;">1. عناصر Block (تحتكر السطر كاملاً):</span>
    <div style="display: block; background: #1e3a8a; color: #93c5fd; padding: 6px 12px; border-radius: 4px; margin-top: 4px;">
      صندوق 1 (Block) يمتد لآخر الشاشة
    </div>
    <div style="display: block; background: #1e3a8a; color: #93c5fd; padding: 6px 12px; border-radius: 4px; margin-top: 4px;">
      صندوق 2 (Block) بدأ في سطر جديد حتماً!
    </div>
  </div>

  <!-- 2. نموذج inline-block -->
  <div style="margin-bottom: 12px;">
    <span style="font-size: 11px; color: #94a3b8;">2. عناصر Inline-block (تتجاور وتحدد أبعادها):</span>
    <div style="margin-top: 4px;">
      <div style="display: inline-block; width: 120px; background: #065f46; color: #6ee7b7; padding: 8px; border-radius: 4px; text-align: center; font-size: 12px;">
        صندوق أ (120px)
      </div>
      <div style="display: inline-block; width: 120px; background: #065f46; color: #6ee7b7; padding: 8px; border-radius: 4px; text-align: center; font-size: 12px; margin-right: 8px;">
        صندوق ب (120px)
      </div>
    </div>
  </div>

  <!-- 3. نموذج none مقابل visibility -->
  <div style="border-top: 1px dashed #334155; padding-top: 10px; font-size: 12px; color: #cbd5e1;">
    💡 <b>ملاحظة ذهبية:</b> <code style="color: #f43f5e;">display: none</code> يخفي العنصر ويحذف مساحته تماماً كأنه لم يكن، بينما <code style="color: #f43f5e;">visibility: hidden</code> يخفيه ويترك مكانه فراغاً فارغاً كالشبح!
  </div>
</div>`,
      outputExplanation: "يرى المتعلم كيف يقفز العنصر الكتلي ليحجز العرض كاملاً ويدفع ما بعده للأسفل، بينما تقف عناصر inline-block متجاورة جنباً إلى جنب كأزرار متناسقة في نفس الصف.",
      commonMistakes: [
        {
          wrong: "محاولة إعطاء وسم <span> خاصية width: 200px ثم التعجب من عدم تغير حجمه.",
          right: "تغيير خاصية display الخاصة بالـ span إلى inline-block أو block حتى يقبل تغيير العرض والارتفاع.",
          reason: "العناصر السطرية (inline) لا تستجيب لخصائص العرض والارتفاع في CSS وفقاً للمواصفات القياسية."
        }
      ],
      bestPractices: [
        "استخدم inline-block لتصميم الأزرار وشارات الوسوم (Badges) حتى تحتفظ بحجمها وتتجاور بسلاسة.",
        "استخدم display: none مع JavaScript لإظهار وإخفاء القوائم والنوافذ المنبثقة ديناميكياً."
      ],
      infographic: {
        badge: "التدفق البصري",
        title: "خاصية Display",
        icon: "LayoutGrid",
        colors: "from-teal-600 to-emerald-500",
        steps: [
          { title: "block", desc: "يبدأ في سطر جديد ويحتكر العرض 100% مثل div و h1" },
          { title: "inline", desc: "يتدفق في نفس السطر بين الكلمات مثل a و span ولا يقبل العرض" },
          { title: "inline-block", desc: "يجلس متجاوراً مع غيره في نفس السطر ويقبل تحديد العرض والارتفاع" },
          { title: "none", desc: "إخفاء تام وإزالة من المساحة والشاشة بدون حجز أي فراغ" }
        ],
        summary: "Display هي المفتاح الذي يتحكم في طاقة تدفق العناصر على مسرح الصفحة."
      }
    },
    {
      id: "1.3.f",
      title: "التموضع Position",
      englishTitle: "CSS Positioning (static, relative, absolute, fixed, sticky)",
      definition: "خاصية position تحدد الموقع الفيزيائي للعنصر في الشاشة: static هو الوضع الطبيعي التلقائي، relative يتحرك بالنسبة لموقعه الأصلي، absolute يتحرك بحرية تامة داخل أقرب أب نسبي له، fixed يلتصق بالشاشة دائماً حتى مع التمرير، و sticky يلتصق بعد الوصول لمسافة تمرير محددة.",
      analogy: "تخيل سيارات على طريق سريع:\n- Static: سيارة تقف في طابور السير الطبيعي.\n- Relative: سيارة انحرفت نصف متر لليمين بالنسبة لمكانها الأصلي.\n- Absolute: طائرة درون تطير بحرية داخل حدود ساحة الانتظار فقط (تطير أينما تشاء عبر top/left).\n- Fixed: ملصق مثبت على الزجاج الأمامي لعين السائق؛ أينما سارت السيارة يظل الملصق أمام عينيك ثابتاً!\n- Sticky: شريط تتبع يتحرك معك طبيعياً، لكن بمجرد أن يلامس سقف الشاشة يعلق فيه كالمغناطيس.",
      why: "بدون التموضع، لن تستطيع بناء شريط علوي يثبت في أعلى الموقع أثناء النزول لأسفل، ولن تستطيع وضع أيقونة إغلاق (X) في الركن العلوي الأيمن لنافذة منبثقة، أو زر واتساب عائم أسفل الشاشة.",
      terms: [
        { term: "position: static", pronunciation: "بوزيشن ستاتيك", meaning: "التموضع الافتراضي العادي وفق تدفق المستند الطبيعي" },
        { term: "position: relative", pronunciation: "بوزيشن ريلاتيف", meaning: "تموضع نسبي؛ يسمح بالتحرك عن مكانه الأصلي ويصبح مرجعاً لأبنائه" },
        { term: "position: absolute", pronunciation: "بوزيشن أبسولوت", meaning: "تموضع مطلق؛ يطير بحرية بالنسبة لأقرب عنصر أب يملك position: relative" },
        { term: "position: fixed", pronunciation: "بوزيشن فيكسد", meaning: "تموضع مثبت؛ يلتصق بنافذة المتصفح ولا يتحرك مع التمرير" },
        { term: "position: sticky", pronunciation: "بوزيشن ستيكي", meaning: "تموضع لاصق؛ يتحرك مع التمرير ثم يلتصق بالسقف عند نقطة معينة" }
      ],
      syntax: ".parent { position: relative; }\n.child-badge { position: absolute; top: 10px; right: 10px; }\n.fixed-nav { position: fixed; top: 0; width: 100%; z-index: 1000; }",
      simpleCode: `/* صناعة شارة تنبيهية عائمة فوق الزاوية العليا للأيقونة */
.notification-container {
  /* جعل الأب نقطة ارتكاز ومرجعاً لحركة الابن الطائر */
  position: relative;
  /* أبعاد الأب */
  display: inline-block;
}

.badge-count {
  /* طيران الشارة بحرية تامة */
  position: absolute;
  /* التصاق بالأعلى بمسافة سالبة لتبدو خارجة عن الإطار */
  top: -8px;
  /* الالتصاق بالركن الأيمن */
  right: -8px;
  /* لون خلفية أحمر للتنبيه */
  background-color: #ef4444;
  /* نص أبيض */
  color: white;
  /* دائرة كاملة */
  border-radius: 50%;
  /* مسافة داخلية لتشكيل الدائرة */
  padding: 2px 6px;
  /* خط صغير وواضح */
  font-size: 11px;
}`,
      advancedCode: `<!-- محاكي مرئي يوضح العلاقة السحرية بين position: relative و absolute -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <h4 style="color: #38bdf8; margin-top: 0;">القاعدة الذهبية: Absolute يحتاج أب Relative!</h4>
  
  <!-- الأب يملك position: relative ليكون قفصاً يحتوي طيران الابن -->
  <div style="position: relative; background: #1e293b; border: 2px dashed #38bdf8; padding: 30px 15px; border-radius: 8px; text-align: center; margin-top: 15px;">
    <span style="color: #94a3b8; font-size: 13px;">الأب: <code style="color: #38bdf8;">position: relative</code> (هو المرجع)</span>
    <p style="margin: 8px 0 0 0; color: #e2e8f0; font-size: 14px;">محتوى البطاقة الطبيعي</p>

    <!-- الابن يطير بالركن العلوي الأيمن للأب فقط -->
    <div style="position: absolute; top: 8px; right: 8px; background: #ef4444; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">
      جديد! (absolute)
    </div>

    <!-- زر إغلاق بالركن العلوي الأيسر -->
    <div style="position: absolute; top: 8px; left: 8px; background: #475569; color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; cursor: pointer;">
      ✕
    </div>
  </div>
  
  <p style="font-size: 12px; color: #a7f3d0; margin-top: 10px;">
    💡 لو لم يكن للأب position: relative، لطارت هذه الشارة إلى زاوية شاشة المتصفح الرئيسية بدلاً من البقاء داخل البطاقة!
  </p>
</div>`,
      outputExplanation: "يعاين المستخدم بطاقة أنيقة تحوي شارة 'جديد!' حمراء وزر إغلاق (X) رمادي في زاويتي البطاقة تماماً، بفضل إحداثيات top و right المنسوبة للحاوية الأم.",
      commonMistakes: [
        {
          wrong: "كتابة position: absolute للعنصر دون وضع position: relative على عنصره الأب.",
          right: "تذكر دائماً المعادلة: كل Absolute يحتاج إلى أب Relative ليحتويه ويقيده.",
          reason: "بدون أب نسبي، يستمر العنصر المطلق في الصعود حتى يربط نفسه بكامل نافذة المتصفح (body) فيطير بعيداً."
        }
      ],
      bestPractices: [
        "استخدم position: sticky لترويسة الجداول الطويلة لتظل العناوين مرئية ومثبتة للمستخدم أثناء قراءة الأرقام الطويلة.",
        "استخدم z-index فقط عندما تملك العناصر خاصية position (غير static) لتحديد من يظهر فوق الآخر في الترتيب الرأسي."
      ],
      infographic: {
        badge: "التحكم في الأبعاد",
        title: "التموضع في CSS (Positioning)",
        icon: "Move",
        colors: "from-rose-500 to-pink-600",
        steps: [
          { title: "Static", desc: "الموقع التلقائي الطبيعي، لا يستجيب لإحداثيات top و left" },
          { title: "Relative", desc: "يتحرك نسبياً عن موقعه الأصلي ويكون حامياً ومرجعاً لأبنائه" },
          { title: "Absolute", desc: "يطير بحرية داخل حدود أقرب أب نسبي له وفق الإحداثيات" },
          { title: "Fixed", desc: "يلتصق بنافذة المتصفح ثابتاً ولا يتحرك مع التمرير إطلاقاً" },
          { title: "Sticky", desc: "يتصرف كعنصر طبيعي حتى يصل لسقف الشاشة فيلتصق به" }
        ],
        summary: "التموضع هو الذي يحرر عناصرك من قيود الجاذبية الأرضية للتدفق التلقائي."
      }
    },
    {
      id: "1.3.g",
      title: "التخطيط باستخدام Flexbox",
      englishTitle: "Flexbox Layout (1D Layout)",
      definition: "فليكس بوكس (Flexbox) هو أقوى نظام لتخطيط وتوزيع العناصر في بعد واحد (إما في صف أفقي Row أو في عمود رأسي Column)، مع سهولة خارقة في محاذاة العناصر، وتوسيطها في قلب الشاشة، وتوزيع الفراغات بينها بنعومة.",
      analogy: "تخيل 'شريطاً مطاطياً سحرياً': تضع عليه الأزرار والبطاقات، وتستطيع بأمر واحد أن تأمر الشريط بأن يوزع العناصر بالتساوي مع مسافات متطابقة (space-between)، أو يضعهم جميعاً في المنتصف تماماً (center)، أو يغير اتجاههم من أفقي إلى رأسي بكبسة زر واحدة دون أي حسابات يدوية معقدة!",
      why: "قبل ظهور Flexbox، كان وضع عنصرين بجانب بعضهما وتوسيط نص رأسياً في منتصف الشاشة كابوساً يتطلب حيل float و table المعقدة التي تنكسر بسهولة. فليكس بوكس جاء لينهي هذه المعاناة في سطرين فقط: display: flex و justify-content: center!",
      terms: [
        { term: "display: flex", pronunciation: "ديسبلاي فليكس", meaning: "تحويل الحاوية إلى نظام الصندوق المرن" },
        { term: "flex-direction", pronunciation: "فليكس دايركشن", meaning: "اتجاه المحور الرئيسي (row أفقياً أو column رأسياً)" },
        { term: "justify-content", pronunciation: "جستيفاي كونتنت", meaning: "محاذاة العناصر وتوزيع الفراغات على المحور الرئيسي" },
        { term: "align-items", pronunciation: "ألاين آيتمز", meaning: "محاذاة العناصر على المحور المتقاطع المعاكس (رأسياً)" },
        { term: "gap", pronunciation: "جاب", meaning: "تحديد الفجوة والمسافة الفاصلة بين العناصر تلقائياً" }
      ],
      syntax: ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}",
      simpleCode: `/* الحل الأسطوري لتوسيط أي عنصر في منتصف الشاشة رأسياً وأفقياً */
.center-box {
  /* 1. تفعيل نظام الفليكس بوكس */
  display: flex;
  /* 2. التوسيط على المحور الأفقي */
  justify-content: center;
  /* 3. التوسيط على المحور الرأسي */
  align-items: center;
  /* ارتفاع كامل للشاشة لتجربة التوسيط التام */
  height: 200px;
  /* لون خلفية الحاوية */
  background-color: #0f172a;
}`,
      advancedCode: `<!-- شريط تنقل حقيقي متجاوب (Navbar) مبني بالكامل بـ Flexbox في 5 أسطر -->
<nav style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 12px 24px; border-radius: 10px; font-family: sans-serif; color: white; max-width: 520px; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
  <!-- الشعار على اليمين -->
  <div style="font-weight: bold; font-size: 18px; color: #38bdf8; display: flex; align-items: center; gap: 8px;">
    <span>⚛️</span> أكاديمية React
  </div>

  <!-- روابط التنقل في المنتصف بمحاذاة مرنة -->
  <div style="display: flex; gap: 15px; font-size: 13px;">
    <a href="#" style="color: #cbd5e1; text-decoration: none;">الرئيسية</a>
    <a href="#" style="color: #cbd5e1; text-decoration: none;">المسارات</a>
    <a href="#" style="color: #cbd5e1; text-decoration: none;">المشاريع</a>
  </div>

  <!-- زر تسجيل الدخول على اليسار -->
  <button style="background: #2563eb; color: white; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
    دخول
  </button>
</nav>`,
      outputExplanation: "يقوم المتصفح تلقائياً بوضع الشعار في أقصى اليمين، والزر في أقصى اليسار، وتوزيع الروابط في الفراغ بينهم بمحاذاة رأسية متطابقة في سطر واحد دون أي حسابات بكسل يدوية.",
      commonMistakes: [
        {
          wrong: "وضع display: flex على العناصر الأبناء وتوقع أن يتحاذوا تلقائياً.",
          right: "تطبيق display: flex يكون دائماً على الحاوية الأم (Parent Container) لتتحكم في ترتيب أبنائها المباشرين.",
          reason: "الحاوية هي التي تمتلك قوانين المحاذاة وتوجه الأبناء بداخلها."
        },
        {
          wrong: "استخدام margin لحساب الفراغات بين عناصر الفليكس بدلاً من استخدام gap.",
          right: "استخدام خاصية gap: 16px لأنها تضع المسافات بين العناصر فقط وتتجنب الفراغات الزائدة على الأطراف.",
          reason: "خاصية gap نظيفة، دقيقة، وتغنيك عن إلغاء المارجن للعنصر الأخير بـ :last-child."
        }
      ],
      bestPractices: [
        "استخدم flex-wrap: wrap عندما ترغب في أن تنزل العناصر إلى سطر جديد تلقائياً عند ضيق شاشة الموبايل.",
        "فكر دائماً: إذا كان التخطيط في بعد واحد (شريط أفقي أو قائمة رأسية) فإن Flexbox هو خيارك الأول بلا منازع."
      ],
      infographic: {
        badge: "التخطيط أحادي البعد",
        title: "التخطيط بـ Flexbox",
        icon: "Columns",
        colors: "from-blue-600 to-cyan-500",
        steps: [
          { title: "display: flex", desc: "تفعيل المحور السحري المرن على الحاوية الأم" },
          { title: "justify-content", desc: "توزيع العناصر أفقياً: center أو space-between أو flex-start" },
          { title: "align-items", desc: "محاذاة العناصر رأسياً: center أو stretch أو flex-end" },
          { title: "gap", desc: "وضع مسافات بينية متساوية ونظيفة بين كل عنصر وشقيقه" }
        ],
        summary: "فليكس بوكس هو السلاح الأساسي لمطور الويب لتوسيط أي عنصر وتوزيع القوائم بمرونة خارقة."
      }
    },
    {
      id: "1.3.h",
      title: "التخطيط باستخدام CSS Grid",
      englishTitle: "CSS Grid Layout (2D Layout)",
      definition: "سي إس إس جريد (CSS Grid) هو أقوى نظام تخطيط ثنائي الأبعاد (صفوف وأعمدة معاً في نفس اللحظة) في تاريخ لغة CSS؛ يتيح لك تقسيم الصفحة إلى شبكة هندسية وتوزيع البطاقات والمكونات في خلايا الشبكة بدقة هندسية مطلقة.",
      analogy: "تخيل 'لوحة شطرنج' أو 'جدول إكسل': اللوحة مقسمة إلى مربعات منتظمة من خلال خطوط أفقية ورأسية. تستطيع أن تأمر قلعة بأن تأخذ مربعين، والوزير يأخذ 4 مربعات، وتحدد أبعاد كل صف وعمود بنظام الكسور fr بكل حرية وسهولة!",
      why: "Flexbox ممتاز للأشرطة الأفقية الفردية (بعد واحد)، لكن عندما تبني معرض بطاقات منتجات (مثل متجر أمازون)، أو لوحة تحكم كاملة (Dashboard) تحوي شريطاً جانبياً وترويسة وبطاقات إحصائية، فإن Grid ينشئ هذا الهيكل المعقد في 3 أسطر فقط دون تداخل.",
      terms: [
        { term: "display: grid", pronunciation: "ديسبلاي جريد", meaning: "تحويل الحاوية إلى شبكة تخطيطية ثنائية الأبعاد" },
        { term: "grid-template-columns", pronunciation: "جريد تمبلت كولومنز", meaning: "تحديد عدد الأعمدة وعرض كل عمود منها" },
        { term: "fr (Fraction Unit)", pronunciation: "إف آر", meaning: "وحدة الكسر النسبي؛ تقتسم المساحة المتبقية بالتساوي" },
        { term: "repeat()", pronunciation: "ريبييت", meaning: "دالة لتكرار عدد الأعمدة تلقائياً دون كتابتها يدوياً" },
        { term: "auto-fit / auto-fill", pronunciation: "أوتو فيت", meaning: "القدرة على إنشاء أعمدة متجاوبة تلف تلقائياً حسب حجم الشاشة بدون ميديا كويري!" }
      ],
      syntax: ".grid-gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}",
      simpleCode: `/* إنشاء شبكة متجر تعرض 3 أعمدة متساوية الحجم تلقائياً */
.products-grid {
  /* 1. تفعيل نظام الشبكة ثنائي الأبعاد */
  display: grid;
  /* 2. إنشاء 3 أعمدة متطابقة المساحة باستخدام دالة repeat ووحدة fr */
  grid-template-columns: repeat(3, 1fr);
  /* 3. فجوة وفراغ متساوٍ بين كل بطاقة وأخرى */
  gap: 16px;
}`,
      advancedCode: `<!-- لوحة تحكم حقيقية (Dashboard Layout) مبنية بالكامل بنظام CSS Grid -->
<div style="font-family: sans-serif; display: grid; grid-template-columns: 140px 1fr; grid-template-rows: auto 1fr; gap: 10px; max-width: 520px; background: #020617; padding: 12px; border-radius: 12px; color: white; min-height: 220px;">
  <!-- الترويسة العليا تمتد على العمودين معاً -->
  <header style="grid-column: 1 / -1; background: #0f172a; padding: 12px; border-radius: 6px; border: 1px solid #1e293b; font-weight: bold; color: #38bdf8; display: flex; justify-content: space-between;">
    <span>لوحة التحكم الرئيسية</span>
    <span style="font-size: 12px; color: #4ade80;">متصل الآن ●</span>
  </header>

  <!-- الشريط الجانبي (Sidebar) في العمود الأول -->
  <aside style="background: #0f172a; padding: 12px; border-radius: 6px; border: 1px solid #1e293b; font-size: 12px; line-height: 2;">
    <div style="color: #60a5fa;">📊 الإحصائيات</div>
    <div style="color: #94a3b8;">👥 المستخدمين</div>
    <div style="color: #94a3b8;">⚙️ الإعدادات</div>
  </aside>

  <!-- منطقة المحتوى الرئيسية المقسمة لشبكة بطاقات مصغرة -->
  <main style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
    <div style="background: #1e293b; padding: 12px; border-radius: 6px; border-right: 3px solid #10b981;">
      <span style="font-size: 11px; color: #94a3b8;">إجمالي المبيعات</span>
      <h3 style="margin: 4px 0 0 0; color: #34d399;">\$12,450</h3>
    </div>
    <div style="background: #1e293b; padding: 12px; border-radius: 6px; border-right: 3px solid #3b82f6;">
      <span style="font-size: 11px; color: #94a3b8;">العملاء الجدد</span>
      <h3 style="margin: 4px 0 0 0; color: #60a5fa;">+340</h3>
    </div>
  </main>
</div>`,
      outputExplanation: "يرى المتعلم كيف يقسم Grid المساحة الكلية بدقة إلى رأس يمتد على كامل العرض (grid-column: 1 / -1)، وشريط جانبي على اليمين، ومنطقة محتوى بداخلها بطاقات تتوزع بالتساوي.",
      commonMistakes: [
        {
          wrong: "استخدام CSS Grid للأمور البسيطة مثل وضع أيقونة بجانب كلمة (هذا تضييع جهد).",
          right: "استخدم Flexbox للأمور الخطية الصغيرة (نص مع أيقونة، شريط روابط)، واستخدم Grid للهياكل الكلية الكبيرة والبطاقات المتقاطعة.",
          reason: "لكل أداة وظيفتها المثالية؛ Flexbox للأشرطة أحادية البعد و Grid للشبكات ثنائية الأبعاد."
        }
      ],
      bestPractices: [
        "استخدم السطر السحري: grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) لبناء معارض بطاقات متجاوبة تلقائياً تناسب الموبايل والكمبيوتر دون كتابة أي كود Media Query!",
        "استخدم وحدة fr (الكسور) دائماً بدلاً من النسب المئوية % حتى لا يخرج المحتوى عن الإطار بسبب الـ gap."
      ],
      infographic: {
        badge: "التخطيط ثنائي الأبعاد",
        title: "التخطيط بـ CSS Grid",
        icon: "Grid",
        colors: "from-indigo-600 to-purple-600",
        steps: [
          { title: "display: grid", desc: "رسم شبكة هندسية مكونة من صفوف وأعمدة متقاطعة" },
          { title: "repeat(N, 1fr)", desc: "توليد أعمدة متساوية المساحة النسبية بمرونة فائقة" },
          { title: "grid-column: 1 / -1", desc: "أمر العنصر بأن يمتد من بداية الشبكة لآخرها كشريط كامل" },
          { title: "auto-fit & minmax", desc: "التجاوب الذكي مع شاشات الهواتف والأجهزة تلقائياً" }
        ],
        summary: "CSS Grid هي المعمارية الهندسية العظمى لبناء أقوى لوحات التحكم والمعارض في العالم."
      }
    },
    {
      id: "1.3.i",
      title: "التصميم المتجاوب Media Queries",
      englishTitle: "Responsive Web Design & Media Queries",
      definition: "التصميم المتجاوب (Responsive Web Design) هو جعل موقعك مرناً كالمطاط؛ يتكيف مظهره تلقائياً ليكون مريحاً ومثالياً على شاشات الهواتف الصغيرة، وشاشات الأجهزة اللوحية، وشاشات الحواسيب العملاقة 4K. والاستعلامات (Media Queries) هي الشروط التي تكتبها في CSS لتغيير التنسيق عند عرض معين للشاشة.",
      analogy: "مثل 'الماء': إذا وضعت الماء في فنجان قهوة صغير أخذ شكله، وإذا وضعته في إبريق كبير أخذ شكله، وإذا سكبته في حوض سباحة ملأه بانتظام! الموقع المتجاوب يكون كالماء؛ لا ينكسر ولا يجبر المستخدم على التكبير والتصغير بأصابعه، بل يعيد ترتيب نفسه ليريح عين الزائر.",
      why: "أكثر من 65% من زيارات الإنترنت حول العالم تأتي من الهواتف الذكية. إذا كان موقعك غير متجاوب وتظهر نصوصه مجهرية وصغيرة على الهاتف، فإن محرك بحث جوجل سيعاقبك بخفض ترتيبك وسيغادر الزوار موقعك في ثوانٍ.",
      terms: [
        { term: "Responsive Design", pronunciation: "ريسبونسيف ديزاين", meaning: "التصميم المتجاوب الذي يتكيف مع مختلف أحجام الشاشات" },
        { term: "Media Query", pronunciation: "ميديا كويري", meaning: "استعلام في CSS يشترط تنفيذ التنسيق فقط عند حجم شاشة محدد" },
        { term: "Breakpoint", pronunciation: "بريك بوينت", meaning: "نقطة التحول؛ العرض الذي يتغير عنده التصميم (مثل 768px للأجهزة اللوحية)" },
        { term: "Mobile-First", pronunciation: "موبايل فيرست", meaning: "منهجية البدء بتصميم شاشة الهاتف أولاً ثم التوسع للشاشات الأكبر" }
      ],
      syntax: "@media (max-width: 768px) {\n  /* هذا التنسيق يطبق فقط على الشاشات التي يقل عرضها عن 768 بكسل (الموبايل) */\n  .sidebar { display: none; }\n  .content { width: 100%; }\n}",
      simpleCode: `/* التنسيق الأساسي لشاشات الحواسيب الكبيرة */
.container {
  /* عرض مقسم لثلاثة أعمدة على الحاسوب */
  display: flex;
  /* اتجاه أفقي */
  flex-direction: row;
}

/* الاستعلام الشرطي للهواتف الذكية (أقل من 600 بكسل) */
@media (max-width: 600px) {
  .container {
    /* تحويل الاتجاه إلى عمود رأسي حتى تتراص البطاقات فوق بعضها في الموبايل! */
    flex-direction: column;
  }
}`,
      advancedCode: `<!-- محاكي مرئي يوضح كيف تتغير البطاقات من التراص الأفقي للتراص الرأسي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h4 style="color: #38bdf8; margin: 0;">محاكاة التجاوب (Media Queries):</h4>
    <span style="font-size: 11px; background: #1e293b; padding: 2px 8px; border-radius: 4px; color: #94a3b8;">شاشات &lt; 768px</span>
  </div>
  
  <p style="font-size: 12px; color: #cbd5e1; margin-bottom: 12px;">
    على شاشة الحاسوب تظهر البطاقتان جنباً إلى جنب، ولكن على شاشة الهاتف يتدخل كود الميديا كويري ليجعلهما فوق بعضهما لسهولة التمرير بالإبهام:
  </p>

  <!-- حاوية تحاكي شاشة الجوال الضيقة -->
  <div style="background: #020617; border: 2px solid #334155; border-radius: 8px; padding: 12px; max-width: 280px; margin: 0 auto; text-align: center;">
    <div style="font-size: 10px; color: #64748b; margin-bottom: 8px;">📱 محاكاة شاشة الموبايل (iPhone)</div>
    
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div style="background: #1e3a8a; padding: 10px; border-radius: 6px; font-size: 12px; color: #93c5fd;">
        البطاقة 1 (بعرض كامل للشاشة)
      </div>
      <div style="background: #1e3a8a; padding: 10px; border-radius: 6px; font-size: 12px; color: #93c5fd;">
        البطاقة 2 (تتحول لعمود رأسي تلقائياً)
      </div>
    </div>
  </div>
</div>`,
      outputExplanation: "يرى الزائر بوضوح كيف تحولت البطاقات من العرض الأفقي الصعب في الموبايل إلى ترتيب رأسي مريح يمكن تصفحه بسلاسة تامة بالإبهام على الهواتف الذكية.",
      commonMistakes: [
        {
          wrong: "نسيان كتابة وسام الفيو بورت <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> في رأس الصفحة <head>.",
          right: "التأكد دائماً من وجود هذا الوسم في كل مشروع.",
          reason: "بدون هذا الوسم، سيعتبر المتصفح الهاتف شاشة كمبيوتر مصغرة ويعرض الصفحة بنصوص مجهرية وغير متجاوبة إطلاقاً!"
        }
      ],
      bestPractices: [
        "اتبع دائماً مبدأ Mobile-First: صمم كودك الأساسي لشاشة الهاتف أولاً، ثم استخدم @media (min-width: 768px) لإضافة المزايا للشاشات الأكبر.",
        "اختر نقاط التحول (Breakpoints) بناءً على المحتوى نفسه عندما يبدأ في التشوه، وليس بناءً على أحجام هواتف محددة لأن الهواتف تتغير كل شهر."
      ],
      infographic: {
        badge: "التكيف الشامل",
        title: "التصميم المتجاوب (Media Queries)",
        icon: "Smartphone",
        colors: "from-cyan-500 to-blue-600",
        steps: [
          { title: "Meta Viewport", desc: "الوسم الإلزامي في <head> لضبط مقياس الرؤية على الهواتف" },
          { title: "@media (max-width: ...)", desc: "كتابة شروط برمجية لتغيير التنسيق عند ضيق الشاشة" },
          { title: "المرونة الانسيابية", desc: "تحويل الصفوف الأفقية إلى أعمدة رأسية لراحة الإبهام" },
          { title: "تكبير الخطوط والأزرار", desc: "أزرار عريضة سهلة اللمس دون الحاجة لتقريب الشاشة" }
        ],
        summary: "التصميم المتجاوب هو احترام لراحة كل زائر بغض النظر عن الجهاز الذي يحمله بيده."
      }
    },
    {
      id: "1.3.j",
      title: "متغيرات CSS Variables",
      englishTitle: "CSS Variables (Custom Properties)",
      definition: "متغيرات CSS (وتسمى رسمياً Custom Properties) هي حاويات نخزن بداخلها قيماً متكررة (مثل لون البراند الأساسي، أو نوع الخط، أو مقاس المسافات)، بحيث تبدأ دائماً بشرطتين -- مثل --primary-color: #2563eb; ونستدعيها عبر دالة var().",
      analogy: "تخيل أن لديك شركة دهانات ورمز لون علامتك التجارية هو كود معقد (#3b82f6). بدلاً من حفظ هذا الكود وكتابته في 500 موضع مختلف، تسميه اسماً سهلاً: 'لون-البراند'. إذا قرر مجلس الإدارة بعد سنة تغيير اللون إلى البنفسجي، تغير القيمة في سطر واحد فقط بالأعلى، ليتغير لون كل المباني والسيارات والأوراق فوراً في لحظة واحدة!",
      why: "المتغيرات توفر آلاف الساعات من الصيانة! كما أنها السر التقني الكامن وراء ميزة 'تبديل الوضع الداكن والفاتح (Dark / Light Mode)' بنقرة زر واحدة في أشهر المواقع الحديثة.",
      terms: [
        { term: "CSS Variables", pronunciation: "سي إس إس فاريبلز", meaning: "متغيرات CSS لحفظ واستدعاء القيم المتكررة" },
        { term: ":root", pronunciation: "روت", meaning: "المحدد الجذري الأعلى في الصفحة، حيث يتم تعريف المتغيرات العامة عالمياً" },
        { term: "var()", pronunciation: "فار", meaning: "الدالة المستخدمة لاسترجاع وقراءة قيمة المتغير في أي سطر" }
      ],
      syntax: ":root {\n  --primary: #3b82f6;\n  --radius: 8px;\n}\n\n.btn {\n  background-color: var(--primary);\n  border-radius: var(--radius);\n}",
      simpleCode: `/* 1. تعريف المتغيرات عالمياً في أعلى المستند داخل :root */
:root {
  /* لون العلامة التجارية الأزرق */
  --brand-color: #2563eb;
  /* حجم خط العناوين الرئيسي */
  --main-font-size: 24px;
  /* المسافة الموحدة للتصميم */
  --spacing-md: 16px;
}

/* 2. استدعاء المتغيرات في العناصر عبر دالة var() */
.btn-primary {
  /* استخدام لون البراند للخلفية */
  background-color: var(--brand-color);
  /* استخدام المسافة الموحدة */
  padding: var(--spacing-md);
  /* لون النص أبيض */
  color: white;
  /* تدوير الحواف */
  border-radius: 6px;
}`,
      advancedCode: `<!-- تجربة تفاعلية توضح تبديل الثيم من الفاتح إلى الداكن بمتغيرات CSS -->
<div id="theme-demo-box" style="font-family: sans-serif; --card-bg: #1e293b; --card-text: #f8fafc; --card-accent: #38bdf8; background: var(--card-bg); color: var(--card-text); padding: 22px; border-radius: 12px; border: 1px solid #334155; max-width: 460px; transition: all 0.3s ease;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
    <h4 style="margin: 0; color: var(--card-accent);">تجربة تبديل الثيم الفوري 🌓</h4>
    <button onclick="toggleThemeDemo()" style="background: var(--card-accent); color: #0f172a; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
      تبديل الوضع
    </button>
  </div>
  
  <p style="font-size: 13px; line-height: 1.6; opacity: 0.9;">
    لاحظ كيف تتغير ألوان الخلفية والنصوص والأزرار بنعومة فائقة بمجرد تعديل 3 متغيرات فقط، دون الحاجة لإعادة كتابة أي كود تنسيق جديد!
  </p>
</div>

<script>
  let isDark = true;
  function toggleThemeDemo() {
    const box = document.getElementById('theme-demo-box');
    isDark = !isDark;
    if (isDark) {
      box.style.setProperty('--card-bg', '#1e293b');
      box.style.setProperty('--card-text', '#f8fafc');
      box.style.setProperty('--card-accent', '#38bdf8');
    } else {
      box.style.setProperty('--card-bg', '#ffffff');
      box.style.setProperty('--card-text', '#0f172a');
      box.style.setProperty('--card-accent', '#2563eb');
    }
  }
</script>`,
      outputExplanation: "بالنقر على زر 'تبديل الوضع'، يتحول الصندوق بنعومة فائقة بين الوضع الداكن والوضع الفاتح، حيث يتم تحديث قيم المتغيرات برمجياً فتتأثر بها كل العناصر المرتبطة في جزء من الثانية.",
      commonMistakes: [
        {
          wrong: "نسيان كتابة الشرطتين المزدوجتين -- قبل اسم المتغير مثل: primary-color: #3b82f6;.",
          right: "البدء دائماً بشرطتين مثل: --primary-color: #3b82f6;.",
          reason: "الشرطتان هما العلامة التي تميز المتغيرات عن خصائص CSS القياسية الأخرى."
        }
      ],
      bestPractices: [
        "ضع قيمة احتياطية (Fallback) داخل دالة var في حال لم يكن المتغير معرفاً، مثل: var(--color, black).",
        "عرف لوحة ألوان موقعك الكاملة ودرجات المسافات في ملف :root موحد لتسهيل إعادة استخدامها."
      ],
      infographic: {
        badge: "الكود الذكي والمرن",
        title: "متغيرات CSS Variables",
        icon: "Database",
        colors: "from-teal-500 to-emerald-600",
        steps: [
          { title: ":root { ... }", desc: "الحاوية العالمية لتعريف الألوان والخطوط والمسافات المشتركة" },
          { title: "--variable-name", desc: "تسمية المتغير بشرطتين مسبقتين لتمييزه كخاصية مخصصة" },
          { title: "var(--variable-name)", desc: "استدعاء القيمة المحفوظة في أي عنصر بملفات التنسيق" },
          { title: "الوضع الداكن Dark Mode", desc: "تغيير قيم المتغيرات بنقرة واحدة لتبديل ثيم الموقع كاملاً" }
        ],
        summary: "المتغيرات تمنح لغة CSS قوة لغات البرمجة الحقيقية في إعادة الاستخدام وإدارة الثيمات."
      }
    },
    {
      id: "1.3.k",
      title: "الانتقالات والحركات",
      englishTitle: "CSS Transitions & Keyframe Animations",
      definition: "الانتقالات (Transitions) هي التغير السلس والناعم لخصائص العنصر خلال فترة زمنية محددة عند حدوث تفاعل (مثل تحول لون الزر بنعومة عند مرور الفأرة :hover). أما الحركات المتقدمة (@keyframes) فهي إنشاء فيلم رسومي متكامل يتحرك فيه العنصر باستمرار عبر مراحل ونسب مئوية (من 0% إلى 100%).",
      analogy: "تخيل مفتاح إضاءة الغرفة:\n- بدون Transitions: تضغط الزر فينير المصباح فجأة بشكل فج ويصدم عينيك!\n- مع Transitions: تضغط الزر فتتدرج الإضاءة بنعومة فائقة وهدوء (Dimming).\n- أما @keyframes: فهي مثل لعبة الأراجيح الدوارة؛ تدور وتهتز وترتفع وتنخفض بحركات دورية مبهجة ومستمرة!",
      why: "الواجهات الخالية من الحركات تبدو ميتة وجامدة كألواح الخشب القديمة! الحركات الخفيفة والناعمة تمنح موقعك حياة وفخامة وتوفر تغذية بصرية تفاعلية تجعل الزائر يشعر بأن الموقع يستجيب لمساته بذكاء.",
      terms: [
        { term: "transition", pronunciation: "ترانزيشن", meaning: "الانتقال السلس من حالة شكلية إلى أخرى (مثل hover)" },
        { term: "transition-duration", pronunciation: "ترانزيشن ديوريشن", meaning: "المدة الزمنية التي يستغرقها الانتقال (مثل 0.3s)" },
        { term: "@keyframes", pronunciation: "كي فريمز", meaning: "الإطارات المفتاحية لتصميم حركات معقدة متعددة المراحل" },
        { term: "animation", pronunciation: "أنيميشن", meaning: "الخاصية التي تربط اسم الحركة @keyframes بالعنصر لتشغيلها" }
      ],
      syntax: "/* الانتقال */\n.btn { transition: all 0.3s ease; }\n.btn:hover { transform: translateY(-2px); }\n\n/* الحركة المستمرة */\n@keyframes pulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}\n.badge { animation: pulse 2s infinite; }",
      simpleCode: `/* زر ناعم جداً يتغير لونه ويرتفع للأعلى قليلاً عند تمرير الفأرة عليه */
.smooth-button {
  /* لون الزر الأصلي */
  background-color: #2563eb;
  /* لون النص */
  color: white;
  /* مسافة داخلية */
  padding: 10px 20px;
  /* إزالة الحدود */
  border: none;
  /* تدوير الحواف */
  border-radius: 6px;
  /* مؤشر الفأرة كيد قابلة للنقر */
  cursor: pointer;
  /* القاعدة السحرية: جعل كل التغييرات تحدث بنعومة خلال 0.3 ثانية */
  transition: all 0.3s ease;
}

/* ماذا يحدث عندما يضع الزائر الفأرة فوق الزر؟ */
.smooth-button:hover {
  /* تغيير اللون لدرجة أغمق */
  background-color: #1d4ed8;
  /* رفع الزر 3 بكسل للأعلى ليعطي شعوراً بأنه ثلاثي الأبعاد ونابض بالحياة */
  transform: translateY(-3px);
  /* إضافة ظل ناعم تحته */
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}`,
      advancedCode: `<!-- عرض تفاعلي لمؤشر تحميل متحرك مستمر (Spinner Animation) مبني بـ @keyframes -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px; text-align: center;">
  <h4 style="color: #38bdf8; margin-top: 0;">أمثلة الحركات التفاعلية (@keyframes):</h4>

  <!-- حركة دوران مستمرة (Loading Spinner) -->
  <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin: 20px 0;">
    <div style="width: 40px; height: 40px; border: 4px solid #334155; border-top-color: #38bdf8; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    <span style="font-size: 13px; color: #94a3b8;">جاري معالجة البيانات...</span>
  </div>

  <!-- زر تفاعلي ناعم للتجربة -->
  <button style="background: #10b981; color: white; border: none; padding: 10px 22px; border-radius: 8px; cursor: pointer; font-weight: bold; transition: transform 0.2s, box-shadow 0.2s;"
          onmouseenter="this.style.transform='scale(1.06)'; this.style.boxShadow='0 0 15px rgba(16, 185, 129, 0.5)';"
          onmouseleave="this.style.transform='scale(1)'; this.style.boxShadow='none';">
    مرر الفأرة فوقي لتشاهد النعومة ✨
  </button>

  <style>
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</div>`,
      outputExplanation: "يرى الزائر حلقة تحميل تدور بنعومة متناهية وبشكل لانهائي في سياق متزن، وزراً يتجاوب مع مرور الفأرة بالتضخم الخفيف والانبعاث الضوئي الأخضر مما يمنح تجربة تصفح غنية وممتعة.",
      commonMistakes: [
        {
          wrong: "المبالغة في الحركات واستخدام مدد زمنية طويلة جداً (مثل 2 ثانية لكل زر).",
          right: "اجعل حركات الأزرار سريعة ورشيقة بين 0.15s إلى 0.3s كحد أقصى.",
          reason: "الحركات البطيئة تجعل المستخدم يشعر بأن الموقع ثقيل وبطيء ويعيق إنجاز مهامه."
        }
      ],
      bestPractices: [
        "حرك دائماً الخصائص التي تدعمها بطاقة الرسوميات (GPU) مثل transform و opacity لتفادي أي تقطيع أو تهنيج في الشاشة (Jank).",
        "احترم إعدادات المستخدمين الذين يعانون من دوار الحركة عبر استعلام @media (prefers-reduced-motion: reduce) لإيقاف الحركات المزعجة."
      ],
      infographic: {
        badge: "الحيوية والنعومة",
        title: "الانتقالات والحركات (Animations)",
        icon: "Sparkles",
        colors: "from-pink-500 to-rose-600",
        steps: [
          { title: "transition", desc: "انتقال ناعم للخصائص خلال ثوانٍ معدودة عند تفاعل المستخدم" },
          { title: "transform", desc: "التحريك للأعلى، والتكبير والتصغير والدوران بخفة ودون بطء" },
          { title: "@keyframes", desc: "رسم مسار الحركة عبر مراحل (0% حتى 100%) لإنتاج فيلم متكامل" },
          { title: "الأداء السريع (60fps)", desc: "استخدام خصائص تسريع الهاردوير لحركات حريرية خالية من التقطيع" }
        ],
        summary: "الحركات المحسوبة هي البهارات السرية التي تحول الموقع من صفحة ميتة إلى تجربة حية تأسر القلوب."
      }
    },
    {
      id: "1.3.l",
      title: "الأصناف الزائفة والعناصر الزائفة",
      englishTitle: "Pseudo-classes & Pseudo-elements",
      definition: "الأصناف الزائفة (Pseudo-classes وتبدأ بنقطتين :) تختار العناصر بناءً على حالتها اللحظية (مثل :hover عند مرور الفأرة، أو :focus عند الكتابة، أو :nth-child لترتيب العناصر). أما العناصر الزائفة (Pseudo-elements وتبدأ بنقطتين مزدوجتين ::) فتنشئ أجزاء افتراضية داخل العنصر دون كتابة أي وسم HTML إضافي (مثل ::before و ::after لإضافة أيقونات وزخارف).",
      analogy: "مثل 'الممثل على المسرح': الصنف الزائف (:hover) هو 'حالة الممثل النفسية': عندما يغضب أو يبتسم يغير ملامحه لكنه نفس الشخص. أما العنصر الزائف (::before و ::after) فهو مثل 'قبعة أو رداء سحري' يلبسه الممثل من حقيبة أزيائه خلف الستار ليظهر به دون أن نحتاج لإحضار ممثل جديد على المسرح!",
      why: "تتيح لك إضافة أيقونات وزخارف وخطوط جمالية وأرقام تلقائية للأزرار والعناوين دون تلويث كود الـ HTML بوسوم فارغة عديمة الفائدة مثل <span></span> لمجرد وضع شريط تزييني.",
      terms: [
        { term: ":hover", pronunciation: "هوفر", meaning: "صنف زائف ينشط عند مرور مؤشر الفأرة فوق العنصر" },
        { term: ":focus", pronunciation: "فوكس", meaning: "صنف زائف ينشط عندما يحدد المستخدم الحقل للكتابة فيه" },
        { term: ":nth-child(n)", pronunciation: "إنث تشايلد", meaning: "صنف زائف يختار العنصر حسب ترتيبه الرقمي (مثل الصفوف الزوجية)" },
        { term: "::before", pronunciation: "بيفور", meaning: "عنصر زائف يولد محتوى زخرفياً قبل محتوى العنصر مباشرة" },
        { term: "::after", pronunciation: "أفتر", meaning: "عنصر زائف يولد محتوى زخرفياً بعد محتوى العنصر مباشرة" }
      ],
      syntax: "/* صنف زائف للحالة */\na:hover { color: orange; }\ninput:focus { border-color: blue; }\n\n/* عنصر زائف للزخرفة */\n.title::after {\n  content: '';\n  display: block;\n  width: 50px;\n  height: 3px;\n  background: blue;\n}",
      simpleCode: `/* تلوين الصفوف الزوجية في الجداول بلون مختلف تلقائياً (Zebra Striping) */
tr:nth-child(even) {
  /* خلفية رمادية فاتحة لكل صف يحمل رقماً زوجياً */
  background-color: #f1f5f9;
}

/* إضافة خط زخرفي أزرق تحت العناوين تلقائياً عبر ::after */
.heading-underline {
  /* جعل العنوان مرجعاً للعنصر الزائف */
  position: relative;
  /* نوع العرض كتلي */
  display: inline-block;
}

.heading-underline::after {
  /* خاصية إجبارية في العناصر الزائفة حتى لو كانت فارغة */
  content: '';
  /* تموضع مطلق في قاع العنوان */
  position: absolute;
  bottom: -4px;
  right: 0;
  /* عرض الخط الزخرفي */
  width: 60%;
  /* سماكة الخط */
  height: 3px;
  /* لون الخط الزخرفي */
  background-color: #2563eb;
  /* تدوير أطراف الخط */
  border-radius: 2px;
}`,
      advancedCode: `<!-- تجربة تفاعلية توضح قوة ::before و :focus في بناء واجهات ساحرة -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <!-- عنوان مزين تلقائياً عبر عنصر زائف دون وسوم إضافية -->
  <h3 style="color: #38bdf8; margin-top: 0; position: relative; padding-bottom: 8px;">
    أسرار العناصر الزائفة
    <span style="position: absolute; bottom: 0; right: 0; width: 45px; height: 3px; background: #38bdf8; border-radius: 2px;"></span>
  </h3>

  <p style="font-size: 13px; color: #94a3b8; line-height: 1.6;">
    العناصر الزائفة <code style="color: #67e8f9;">::before</code> و <code style="color: #67e8f9;">::after</code> تتطلب دائماً وجود خاصية <code style="color: #f43f5e;">content: ''</code> حتى تظهر على الشاشة.
  </p>

  <!-- حقل إدخال يبرز جمال :focus -->
  <div style="margin-top: 15px;">
    <label style="display: block; font-size: 12px; color: #cbd5e1; margin-bottom: 4px;">جرب النقر داخل الحقل لمشاهدة تأثير :focus التلقائي:</label>
    <input type="text" placeholder="انقر هنا للكتابة..." 
           style="width: 100%; padding: 10px 14px; border-radius: 6px; background: #1e293b; border: 2px solid #334155; color: white; outline: none; transition: border-color 0.3s, box-shadow 0.3s;"
           onfocus="this.style.borderColor='#38bdf8'; this.style.boxShadow='0 0 10px rgba(56, 189, 248, 0.3)';"
           onblur="this.style.borderColor='#334155'; this.style.boxShadow='none';" />
  </div>
</div>`,
      outputExplanation: "يرى المتعلم كيف يتغير الحقل عند النقر داخله وينبعث منه توهج أزرق جميل بفضل حالة :focus، وكيف تتزين العناوين بخطوط زخرفية أنيقة دون كتابة وسم HTML واحد إضافي.",
      commonMistakes: [
        {
          wrong: "كتابة تنسيق للعنصر الزائف ::before أو ::after ونسيان كتابة خاصية content: '';.",
          right: "كتابة content: ''; دائماً كأول سطر داخل أي عنصر زائف حتى لو كان محتواه فارغاً.",
          reason: "بدون خاصية content، يعتبر المتصفح العنصر الزائف غير موجود أصلاً ولن يرسمه على الشاشة إطلاقاً."
        }
      ],
      bestPractices: [
        "استخدم :focus-visible بدلاً من :focus العادي لتطبيق حلقة التركيز فقط لمن يستخدمون لوحة المفاتيح وتجنب إزعاج مستخدمي الفأرة.",
        "استخدم :nth-child(odd) و :nth-child(even) لتلوين صفوف الجداول المتناوبة لتسهيل قراءة البيانات الطويلة."
      ],
      infographic: {
        badge: "الحالات والزخارف",
        title: "الأصناف والعناصر الزائفة",
        icon: "Sparkle",
        colors: "from-purple-600 to-indigo-600",
        steps: [
          { title: ":hover & :focus", desc: "الاستجابة التفاعلية اللحظية لحركات الفأرة والنقر في الحقول" },
          { title: ":nth-child(n)", desc: "استهداف العناصر بذكاء حسب ترتيبها الرقمي في الشجرة" },
          { title: "::before & ::after", desc: "توليد عناصر زخرفية وهمية وأيقونات في CSS دون لمس HTML" },
          { title: "content: ''", desc: "المفتاح الإلزامي السحري لتنشيط ظهور العناصر الزائفة" }
        ],
        summary: "الأصناف الزائفة تمنحك استشعاراً لحالات المستخدم، والعناصر الزائفة تمنحك ريشة رسم زخرفية إضافية."
      }
    }
  ],
  quiz: [
    {
      question: "ما هي الخاصية الإلزامية التي تحل مشكلة تمدد حجم العناصر عند إضافة Padding وحدود في CSS؟",
      options: [
        "display: flex;",
        "box-sizing: border-box;",
        "overflow: hidden;",
        "position: absolute;"
      ],
      correctIndex: 1,
      explanation: "خاصية box-sizing: border-box تجبر المتصفح على حساب العرض والارتفاع شاملاً الـ Padding والـ Border، مما يمنع انكسار الصناديق وتمددها خارج الحجم المطلوب."
    },
    {
      question: "ما هو الفرق الرئيسي بين نظام Flexbox ونظام CSS Grid في التخطيط؟",
      options: [
        "Flexbox للصور فقط بينما Grid للنصوص فقط",
        "Flexbox يعمل في بعد واحد (صف أو عمود) بينما Grid يعمل في بعدين متزامنين (صفوف وأعمدة معاً)",
        "Flexbox يعمل على الموبايل فقط بينما Grid للحاسوب فقط",
        "لا يوجد أي فرق بينهما فهما نفس الشيء"
      ],
      correctIndex: 1,
      explanation: "فليكس بوكس نظام أحادي البعد (1D) مخصص لمحاذاة وتوزيع العناصر في محور واحد، بينما جريد نظام ثنائي الأبعاد (2D) مخصص لبناء شبكات هندسية متكاملة بصفوف وأعمدة."
    },
    {
      question: "أي خاصية إجبارية يجب كتابتها دائماً داخل العناصر الزائفة ::before و ::after حتى تظهر على الشاشة؟",
      options: ["display: block;", "color: black;", "content: '';", "position: relative;"],
      correctIndex: 2,
      explanation: "بدون خاصية content: '' يعتبر المتصفح العنصر الزائف غير موجود في الـ DOM ولن يعرضه أبداً مهما وضعت له من ألوان وحدود."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: بناء بطاقة تسعير متجاوبة بـ Flexbox مع شارة عائمة وزر ناعم",
    description: "قم بإنشاء بطاقة تسعير منتج تحوي: شارة 'الأكثر طلباً' عائمة في الزاوية العليا عبر position: absolute، واسم الخطة وسعرها في المنتصف، وقائمة مزايا موزعة بـ Flexbox، وزر شراء يرتفع للأعلى بنعومة عند مرور الفأرة :hover مع transition.",
    hints: [
      "اجعل البطاقة الحاوية تملك position: relative حتى تنضبط الشارة العائمة بداخلها.",
      "استخدم display: flex و flex-direction: column لتنظيم محتويات البطاقة عمودياً.",
      "استخدم transition: all 0.3s ease على زر الشراء، وعند الـ :hover استخدم transform: translateY(-3px) مع ظل.",
      "استخدم متغيرات CSS لتحديد لون البراند الأساسي."
    ],
    solution: `<!-- الحل النموذجي لبطاقة التسعير الاحترافية المتجاوبة -->
<div style="--primary-color: #2563eb; --card-bg: #ffffff; position: relative; width: 280px; background: var(--card-bg); border: 2px solid #e2e8f0; border-radius: 12px; padding: 24px; font-family: sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; flex-direction: column; text-align: center;">
  
  <!-- الشارة العائمة في الركن العلوي الأيمن عبر Absolute -->
  <div style="position: absolute; top: -12px; right: 16px; background: #f59e0b; color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: bold; box-shadow: 0 2px 4px rgba(245,158,11,0.4);">
    الأكثر طلباً ⭐
  </div>

  <!-- عنوان الخطة -->
  <h3 style="margin: 8px 0 4px 0; color: #1e293b;">الخطة الاحترافية</h3>
  <p style="color: #64748b; font-size: 13px; margin: 0 0 16px 0;">للأفراد والشركات الناشئة</p>

  <!-- السعر الشهري -->
  <div style="font-size: 32px; font-weight: bold; color: var(--primary-color); margin-bottom: 20px;">
    \$29 <span style="font-size: 14px; color: #94a3b8; font-weight: normal;">/شهرياً</span>
  </div>

  <!-- قائمة المزايا المنظمة بـ Flexbox -->
  <ul style="list-style: none; padding: 0; margin: 0 0 24px 0; text-align: right; display: flex; flex-direction: column; gap: 10px; font-size: 13px; color: #334155;">
    <li>✓ وصول كامل لجميع مشاريع React الـ 14</li>
    <li>✓ شهادة إتمام معتمدة قابلة للمشاركة</li>
    <li>✓ دعم فني مباشر ومراجعة دورية للأكواد</li>
  </ul>

  <!-- زر الاشتراك التفاعلي الناعم -->
  <button style="background: var(--primary-color); color: white; border: none; padding: 12px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: all 0.3s ease;"
          onmouseenter="this.style.backgroundColor='#1d4ed8'; this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 15px rgba(37,99,235,0.3)';"
          onmouseleave="this.style.backgroundColor='#2563eb'; this.style.transform='translateY(0)'; this.style.boxShadow='none';">
    اشترك الآن وابدأ التعلم
  </button>
</div>`
  },
  topicInfographic: {
    title: "خريطة المفاهيم: أسرار CSS الحديثة",
    badge: "الموضوع 1.3",
    overview: "CSS هي روح ولون وتخطيط الويب؛ من نموذج الصندوق الحسابي، إلى أنظمة التخطيط الفائقة Flexbox و Grid، وانتهاءً بالحركات الناعمة والتجاوب مع كل الشاشات.",
    pillars: [
      { name: "الهندسة والحساب", color: "#38bdf8", role: "Box Model, box-sizing: border-box, Specificity" },
      { name: "التخطيط والتموضع", color: "#818cf8", role: "Flexbox أحادي البعد، Grid ثنائي الأبعاد، Position" },
      { name: "التجاوب والمطاطية", color: "#34d399", role: "Media Queries, Mobile-First, auto-fit" },
      { name: "الحيوية والجمال", color: "#f43f5e", role: "Transitions, @keyframes, CSS Variables, Pseudo" }
    ]
  }
};

