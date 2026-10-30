// src/data/sections/section1/topic4.js
// الموضوع 4: أدوات تطوير الويب (Web Development Tools)

export const TOPIC_4 = {
  id: "1.4",
  title: "أدوات تطوير الويب",
  englishTitle: "Web Development Tools",
  description: "العدة الاحترافية لمطور البرمجيات: محرر الأكواد VS Code، سطر الأوامر Terminal، بيئة Node.js ومدير الحزم npm، ومنسق Prettier، وفاحص ESLint.",
  icon: "Wrench",
  subtopics: [
    {
      id: "1.4.a",
      title: "استخدام Visual Studio Code",
      englishTitle: "Using Visual Studio Code (VS Code)",
      definition: "فيجوال ستوديو كود (VS Code) هو أشهر وأقوى محرر أكواد مجاني ومفتوح المصدر في العالم تطوره شركة مايكروسوفت؛ يوفر بيئة عمل فائقة السرعة مع إكمال تلقائي ذكي للأكواد (IntelliSense)، وتلوين نحوي، وتكامل مع سطر الأوامر ومتجر ضخم للإضافات (Extensions).",
      analogy: "تخيل أنك نجار محترف: يمكنك استخدام منشار يدوي قديم ومطرقة صدئة (مثل برنامج Notepad البدائي)، لكن VS Code هو 'ورشة عمل متطورة بالليزر والروبوتات': كل أداة مرتبة في مكانها، والأجهزة تنبهك إذا وضعت قطعة خشب معوجة وتساعدك في قطعها بالمليمتر في ثوانٍ معدودة!",
      why: "كتابة الأكواد في مفكرة عادية يجعلك عرضة لارتكاب مئات الأخطاء الإملائية التي توقف مشروعك دون أن تدري. VS Code يلون الكود، ويكتشف الأخطاء قبل تشغيلها، ويكمل الكلمات عنك لتكتب بسرعة تفوق 5 أضعاف سرعتك العادية.",
      terms: [
        { term: "Code Editor", pronunciation: "كود إيديتور", meaning: "محرر الأكواد البرمجية لكتابة وتنظيم ملفات المشروع" },
        { term: "IntelliSense", pronunciation: "إنتيلي سينس", meaning: "ميزة الإكمال التلقائي الذكي والتنبؤ بما تريد كتابته" },
        { term: "Extension", pronunciation: "إكستنشن", meaning: "إضافة برمجية صغيرة تثبتها لتمنح المحرر قدرات جديدة" },
        { term: "Shortcut", pronunciation: "شورت كت", meaning: "اختصار لوحة المفاتيح لإنجاز المهام بلمسة زر سريعة" }
      ],
      syntax: "أهم اختصارات لوحة المفاتيح اليومية في VS Code:\n- Ctrl + P : فتح أي ملف في مشروعك بالاسم فوراً\n- Ctrl + ` : فتح سطر الأوامر (Terminal) الداخلي\n- Alt + Up/Down : تحريك سطر الكود كاملاً للأعلى أو للأسفل\n- Ctrl + / : تحويل السطر إلى تعليق (Comment) فوراً.",
      simpleCode: `// عند كتابة هذا الكود في VS Code، سيقوم المحرر بتلوين كل كلمة بلون ذكي:
// الكلمة باللون الأزرق تعني كلمة مفتاحية خاصة بلغة البرمجة
const developerName = "أحمد";

// الكلمة بالأصفر تعني استدعاء دالة جاهزة
console.log("مرحباً بك يا:", developerName);
// بالضغط على Ctrl + / يقوم المحرر بكتابة الشخطتين // تلقائياً لتحويل السطر لتعليق!`,
      advancedCode: `<!-- دليل أهم الإضافات (Extensions) الإلزامية لمطور React في VS Code -->
<div style="font-family: sans-serif; background: #1e1e1e; border: 1px solid #333; padding: 22px; border-radius: 12px; color: #ccc; max-width: 500px;">
  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; border-bottom: 1px solid #333; padding-bottom: 10px;">
    <span style="font-size: 24px;">💻</span>
    <div>
      <h4 style="margin: 0; color: #61dafb;">إضافات VS Code الأساسية للمحترفين:</h4>
      <span style="font-size: 11px; color: #888;">Extensions Marketplace</span>
    </div>
  </div>

  <div style="display: flex; flex-direction: column; gap: 10px; font-size: 13px;">
    <div style="background: #252526; padding: 10px; border-radius: 6px; border-right: 3px solid #38bdf8;">
      <b style="color: white;">1. Prettier - Code Formatter</b>
      <p style="margin: 3px 0 0 0; font-size: 11px; color: #94a3b8;">تنسيق الكود والمحاذاة التلقائية بمجرد الضغط على زر الحفظ (Save).</p>
    </div>

    <div style="background: #252526; padding: 10px; border-radius: 6px; border-right: 3px solid #f59e0b;">
      <b style="color: white;">2. ESLint</b>
      <p style="margin: 3px 0 0 0; font-size: 11px; color: #94a3b8;">وضع خط أحمر متعرج تحت أي متغير منسي أو خطأ منطقي يحذر المطور فوراً.</p>
    </div>

    <div style="background: #252526; padding: 10px; border-radius: 6px; border-right: 3px solid #10b981;">
      <b style="color: white;">3. Tailwind CSS IntelliSense</b>
      <p style="margin: 3px 0 0 0; font-size: 11px; color: #94a3b8;">الإكمال التلقائي لأصناف Tailwind مع إظهار معاينة حية للألوان في نافذة عائمة.</p>
    </div>
  </div>
</div>`,
      outputExplanation: "يرى المطور قائمة بأفضل الإضافات العالمية التي تجعل بيئة VS Code منصة عمل فائقة الذكاء، توفر الراحة وتمنع الأخطاء وتختصر وقت التطوير بنسبة تزيد عن 50%.",
      commonMistakes: [
        {
          wrong: "تثبيت عشرات الإضافات العشوائية وغير الضرورية في المحرر دفعة واحدة.",
          right: "تثبيت الإضافات المعتمدة وذات التقييم العالي فقط التي تحتاجها فعلياً.",
          reason: "كثرة الإضافات العشوائية تستهلك ذاكرة الجهاز (RAM) وتجعل تشغيل المحرر بطيئاً وثقيلاً."
        }
      ],
      bestPractices: [
        "فعل ميزة Format on Save في إعدادات VS Code ليقوم المحرر بترتيب وتنسيق الكود تلقائياً في كل مرة تحفظ فيها الملف.",
        "تعلم اختصارات لوحة المفاتيح الأساسية؛ فالمطور المحترف يقلل اعتماده على الفأرة ويكتفي بلوحة المفاتيح للسرعة."
      ],
      infographic: {
        badge: "منصة المبرمج",
        title: "محرر VS Code",
        icon: "Code",
        colors: "from-blue-600 to-sky-500",
        steps: [
          { title: "IntelliSense", desc: "الإكمال التلقائي الذكي للأكواد والمتغيرات أثناء الكتابة" },
          { title: "Terminal المدمج", desc: "فتح سطر الأوامر داخل نفس النافذة بالاختصار Ctrl + `" },
          { title: "متجر الإضافات", desc: "آلاف الأدوات المساعدة لتنسيق واكتشاف الأخطاء تلقائياً" },
          { title: "Git مدمج", desc: "إدارة التعديلات ورفع الأكواد على GitHub دون مغادرة المحرر" }
        ],
        summary: "VS Code ليس مجرد محرر نصوص، بل هو الورشة الرقمية المتكاملة لكل مطور ويب حديث."
      }
    },
    {
      id: "1.4.b",
      title: "التعامل مع سطر الأوامر",
      englishTitle: "Command Line / Terminal Basics",
      definition: "سطر الأوامر (Terminal أو CLI - Command Line Interface) هو نافذة نصية سوداء تتيح لك التحدث مع نظام تشغيل جهازك (Windows أو Mac أو Linux) مباشرة عبر كتابة أوامر نصية سريعة؛ لإنشاء المجلدات، وتشغيل خوادم التطوير، وتثبيت المكتبات، بدلاً من النقر بالفأرة.",
      analogy: "تخيل أنك تتواصل مع مساعدك الشخصي:\n- الطريقة المرئية (GUI): أن تشير بإصبعك على شاشة وتفتح مجلداً تلو الآخر وتبحث بعينك.\n- سطر الأوامر (CLI): أن تعطيه أمراً صوتياً واضحاً ومباشراً: 'أنشئ مجلداً باسم react وافتح خادم التطوير الآن!' فينفذه في ربع ثانية دون أي لف أو دوران!",
      why: "أدوات بناء المواقع الحديثة مثل React و Vite و Next.js لا تمتلك أزراراً مرئية لتشغيلها؛ بل تُدار بالكامل عبر سطر الأوامر. إتقان الشاشة السوداء هو العلامة الفاصلة التي تحولك من هاوٍ إلى مبرمج محترف.",
      terms: [
        { term: "Terminal / CLI", pronunciation: "تيرمينال", meaning: "واجهة سطر الأوامر النصية للتفاعل مع النظام" },
        { term: "pwd / cd", pronunciation: "بي دبليو دي / سي دي", meaning: "cd تعني Change Directory لتغيير المجلد والدخول فيه" },
        { term: "mkdir", pronunciation: "ميك دايركتوري", meaning: "أمر صناعة وإنشاء مجلد جديد (Make Directory)" },
        { term: "ls / dir", pronunciation: "إل إس / داير", meaning: "عرض قائمة الملفات والمجلدات الموجودة في المسار الحالي" }
      ],
      syntax: "mkdir my-project   # إنشاء مجلد جديد باسم my-project\ncd my-project      # الدخول إلى المجلد الجديد\ncode .             # فتح المجلد الحالي داخل برنامج VS Code فوراً!",
      simpleCode: `// محاكاة للأوامر الأكثر تكراراً في رحلة مطور React اليومية
// 1. الدخول إلى مجلد المشاريع
cd E:\\KD\\lang\\react

// 2. فحص محتويات المجلد لمعرفة الملفات الموجودة
dir  // على ويندوز (أو ls على ماك ولينكس)

// 3. تشغيل خادم التطوير المباشر
npm run dev

// 4. إيقاف الخادم عند الانتهاء بالضغط على لوحة المفاتيح:
// Ctrl + C ثم الضغط على حرف Y للتأكيد`,
      advancedCode: `<!-- محاكي مرئي تفاعلي لسطر الأوامر (Interactive Terminal Simulator) -->
<div style="font-family: monospace; background: #030712; border: 1px solid #1e293b; border-radius: 8px; max-width: 480px; overflow: hidden; color: #a7f3d0;">
  <!-- شريط رأس التيرمينال -->
  <div style="background: #0f172a; padding: 8px 12px; display: flex; align-items: center; gap: 6px; border-bottom: 1px solid #1e293b;">
    <span style="width: 10px; height: 10px; border-radius: 50%; background: #ef4444; display: inline-block;"></span>
    <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span>
    <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981; display: inline-block;"></span>
    <span style="color: #64748b; font-size: 11px; margin-right: auto;">bash / powershell - terminal</span>
  </div>

  <!-- شاشة الأوامر -->
  <div id="cli-screen" style="padding: 14px; font-size: 12px; min-height: 120px; line-height: 1.6;">
    <div style="color: #38bdf8;">user@pc:~/projects$ <span style="color: white;">pwd</span></div>
    <div style="color: #94a3b8;">/e/KD/lang/react</div>
    <div style="color: #38bdf8; margin-top: 6px;">user@pc:~/projects$ <span style="color: white;">npm run dev</span></div>
    <div style="color: #4ade80;">  VITE v8.3.5  ready in 210 ms</div>
    <div style="color: #60a5fa;">  ➜  Local:   http://localhost:5173/</div>
  </div>

  <!-- أزرار تجربة الأوامر -->
  <div style="background: #0f172a; padding: 8px; display: flex; gap: 6px;">
    <button onclick="cliRun('ls')" style="background: #1e293b; color: #38bdf8; border: 1px solid #334155; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">أمر ls (عرض)</button>
    <button onclick="cliRun('build')" style="background: #1e293b; color: #34d399; border: 1px solid #334155; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">أمر build (بناء)</button>
    <button onclick="cliRun('clear')" style="background: #1e293b; color: #f87171; border: 1px solid #334155; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">أمر clear (مسح)</button>
  </div>
</div>

<script>
  function cliRun(cmd) {
    const s = document.getElementById('cli-screen');
    if (cmd === 'ls') {
      s.innerHTML += '<div style="color:#38bdf8; margin-top:6px;">user@pc:~$ <span style="color:white;">ls</span></div><div style="color:#cbd5e1;">node_modules  src  public  package.json  vite.config.js</div>';
    } else if (cmd === 'build') {
      s.innerHTML += '<div style="color:#38bdf8; margin-top:6px;">user@pc:~$ <span style="color:white;">npm run build</span></div><div style="color:#4ade80;">✓ built in 350ms (Production Ready!)</div>';
    } else if (cmd === 'clear') {
      s.innerHTML = '<div style="color:#38bdf8;">user@pc:~$ <span style="color:white;">clear</span></div>';
    }
  }
</script>`,
      outputExplanation: "يعاين المستخدم الشاشة السوداء الشهيرة للمطورين وكيف تستجيب للأوامر النصية بسرعة الصاروخ، وتعرض عنوان الخادم المحلي http://localhost:5173/ لمعاينة الموقع في المتصفح.",
      commonMistakes: [
        {
          wrong: "إغلاق نافذة سطر الأوامر (Terminal) والتفاجؤ بتوقف موقع React عن العمل في المتصفح.",
          right: "ترك نافذة التيرمينال مفتوحة في الخلفية طوال فترة برمجتك لأنها هي التي تشغل خادم التطوير.",
          reason: "إغلاق التيرمينال يعني قتل عملية الخادم المحلي فيفقد المتصفح الاتصال فوراً."
        }
      ],
      bestPractices: [
        "استخدم مفتاح Tab دائماً للإكمال التلقائي لأسماء المجلدات والملفات في سطر الأوامر دون كتابتها حرفاً بحرف.",
        "استخدم الأسهم العلوية والسفلية (Up / Down) في لوحة المفاتيح لاسترجاع آخر الأوامر التي كتبتها دون إعادة كتابتها."
      ],
      infographic: {
        badge: "قوة التحكم المباشر",
        title: "سطر الأوامر (Terminal / CLI)",
        icon: "Terminal",
        colors: "from-slate-800 to-zinc-950",
        steps: [
          { title: "cd [folder]", desc: "التنقل والدخول إلى مجلد المشروع المطلوب" },
          { title: "mkdir [name]", desc: "صناعة مجلد جديد على القرص الصلب فوراً" },
          { title: "code .", desc: "فتح المجلد الحالي داخل VS Code بلمشة زر واحدة" },
          { title: "npm run dev", desc: "إطلاق خادم التطوير المحلي السريع لبدء البرمجة" }
        ],
        summary: "الشاشة السوداء ليست معقدة؛ بل هي أسرع وسيلة حوار مباشرة بين عقلك وحاسوبك."
      }
    },
    {
      id: "1.4.c",
      title: "تثبيت Node.js",
      englishTitle: "Installing Node.js & Runtime Concept",
      definition: "نود جي إس (Node.js) هي بيئة تشغيل برمجية خارقة مكنت لغة JavaScript من الخروج من سجن متصفح الإنترنت والعمل مباشرة على نظام تشغيل جهازك (Windows, Mac, Linux) كأي لغة برمجة قوية مثل بايثون أو سي بلس بلس.",
      analogy: "تخيل أن جافاسكريبت كانت مثل 'سمكة تعيش داخل حوض زجاجي صغير فقط' (وهو المتصفح). جاءت تقنية Node.js ومنحت السمكة 'رئتين وأرجلاً' لتخرج من الحوض وتجري بحرية على اليابسة في أي مكان في العالم!",
      why: "بدون Node.js على حاسوبك، لن تتمكن من تشغيل React أو Vite أو تنزيل أي مكتبة ويب حديثة، لأن كل أدوات البناء وتجميع الأكواد الحديثة مبرمجة لتعمل فوق بيئة Node.js.",
      terms: [
        { term: "Node.js", pronunciation: "نود جي إس", meaning: "بيئة تشغيل الجافاسكريبت خارج المتصفح" },
        { term: "Runtime Environment", pronunciation: "ران تايم إنفايرونمنت", meaning: "البيئة والمحرك الذي يقوم بقراءة وتنفيذ الأكواد" },
        { term: "V8 Engine", pronunciation: "في إيت إنجين", meaning: "محرك جوجل فائق السرعة المكتوب بـ C++ الذي يشغل Node.js ومتصفح كروم" },
        { term: "LTS (Long Term Support)", pronunciation: "إل تي إس", meaning: "نسخة الدعم طويل الأمد الأكثر استقراراً وأماناً للتحميل" }
      ],
      syntax: "للتأكد من تثبيت نود بنجاح على جهازك، اكتب في سطر الأوامر:\nnode -v\nستظهر لك النسخة المثبتة (مثل v20.x أو v24.x).",
      simpleCode: `// لفحص إصدار نود المثبت في جهازك افتح التيرمينال واكتب:
// node -v
// النتيجة التي ستظهر:
// v24.21.0 (أو أي إصدار حديث مثبت)

// كما يمكنك تشغيل أي ملف جافاسكريبت مباشرة من حاسوبك دون متصفح:
// node app.js
console.log("هذا الكود يعمل الآن على معالج حاسوبك مباشرة بفضل Node.js!");`,
      advancedCode: `<!-- دليل خطوات تثبيت Node.js للمبتدئين من الموقع الرسمي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
    <span style="font-size: 26px;">🟢</span>
    <h4 style="margin: 0; color: #4ade80;">خطوات تحميل وتثبيت Node.js:</h4>
  </div>

  <ol style="color: #cbd5e1; font-size: 13px; line-height: 1.8; padding-right: 20px; margin: 0 0 15px 0;">
    <li>الدخول إلى الموقع الرسمي المعتمد: <code style="color: #38bdf8;">nodejs.org</code></li>
    <li>اختيار النسخة المكتوب عليها <b>(LTS)</b> دائماً لأنها الأكثر استقراراً وخالية من المشاكل.</li>
    <li>تحميل ملف التثبيت والضغط على (Next) حتى إتمام العملية كأي برنامج عادي.</li>
    <li>فتح سطر الأوامر (Terminal) وكتابة: <code style="color: #4ade80; background: #1e293b; padding: 2px 6px; border-radius: 4px;">node -v</code> للتأكد من نجاح التثبيت!</li>
  </ol>

  <div style="background: #020617; padding: 10px; border-radius: 6px; border: 1px dashed #334155; font-size: 12px; color: #94a3b8;">
    💡 <b>بشرى سارة:</b> عند تثبيت Node.js، يتم تثبيت مدير الحزم الشهير <b>npm</b> معه تلقائياً في نفس اللحظة دون أي خطوات إضافية!
  </div>
</div>`,
      outputExplanation: "يشرح الدليل خطوة بخطوة كيف يقوم المبتدئ بتحميل نسخة الدعم المستقر LTS من الموقع الرسمي وفحص نجاح التثبيت بأمر بسيط يعيد رقم الإصدار.",
      commonMistakes: [
        {
          wrong: "تحميل النسخة التجريبية (Current) بدلاً من النسخة المستقرة (LTS).",
          right: "تحميل نسخة LTS دائماً لضمان توافق جميع حزم ومشاريع React مع جهازك دون أخطاء غير متوقعة.",
          reason: "نسخ Current تكون قيد التجربة وتحتوي ميزات غير مستقرة قد تكسر بعض المكتبات القديمة."
        }
      ],
      bestPractices: [
        "أعد تشغيل محرر VS Code وسطر الأوامر بعد تثبيت Node.js لأول مرة حتى يتعرف النظام على المسارات الجديدة (PATH).",
        "احرص على تحديث Node.js مرة واحدة كل عام للاستفادة من تحسينات السرعة والأمان الهائلة."
      ],
      infographic: {
        badge: "المحرك النفاث",
        title: "بيئة تشغيل Node.js",
        icon: "Cpu",
        colors: "from-green-600 to-emerald-700",
        steps: [
          { title: "حرية الجافاسكريبت", desc: "نقل JS من مجرد لغة متصفح إلى بيئة برمجية شاملة للحاسوب" },
          { title: "محرك V8 الخارق", desc: "معالجة وتحويل الأكواد إلى لغة الآلة بسرعة قياسية" },
          { title: "تحميل نسخة LTS", desc: "اختيار الإصدار المستقر الموصى به لجميع المطورين والشركات" },
          { title: "بوابة أدوات React", desc: "البيئة التحتية الإلزامية لتشغيل Vite و Next.js و npm" }
        ],
        summary: "نود جي إس هي الأرض الصلبة التي تقف عليها كل أدوات ومكتبات تطوير الويب في العصر الحديث."
      }
    },
    {
      id: "1.4.d",
      title: "التعرف على npm",
      englishTitle: "Introduction to npm (Node Package Manager)",
      definition: "إن بي إم (npm - Node Package Manager) هو أضخم مستودع سحابي للبرمجيات والمكتبات الجاهزة في تاريخ البشرية؛ ومدير الحزم الرسمي الذي يمكنك من تنزيل وتثبيت وحذف أي أداة أو مكتبة جافاسكريبت كتبها مبرمجون آخرون في العالم بضغطة زر وأمر واحد.",
      analogy: "يشبه تماماً 'متجر التطبيقات App Store أو Google Play' على هاتفك: إذا أردت مشغل موسيقى أو تطبيق طقس لا تبرمجه من الصفر، بل تدخل المتجر وتبحث عنه وتضغط (Install). مستودع npm هو نفس المتجر ولكن للمبرمجين؛ يضم ملايين الأدوات الجاهزة التي توفر عليك شهوراً من العمل الشاق!",
      why: "لماذا تعيد اختراع العجلة؟ إذا أردت أيقونات رائعة، أو رسوماً بيانية، أو نظام توجيه صفحات، لا تبرمجه من الصفر؛ بل تكتب npm install lucide-react فتحصل على آلاف الأيقونات في ثانية واحدة مجاناً!",
      terms: [
        { term: "npm (Node Package Manager)", pronunciation: "إن بي إم", meaning: "مدير حزم نود والمستودع السحابي للأكواد المفتوحة" },
        { term: "Package", pronunciation: "باكيدج", meaning: "حزمة برمجية، كود جاهز كتبه مبرمج آخر ومشارك مع العالم" },
        { term: "npm install (npm i)", pronunciation: "إن بي إم إنستول", meaning: "أمر تنزيل وتثبيت الحزمة البرمجية في مشروعك" },
        { term: "Registry", pronunciation: "ريجستري", meaning: "الموقع المركزي السحابي الذي يخزن كل الحزم (npmjs.com)" }
      ],
      syntax: "npm install <package-name>   # تثبيت حزمة عادية في المشروع\nnpm install -D <package-name># تثبيت أداة مساعدة للمطورين فقط (DevDependency)\nnpm uninstall <package-name> # حذف الحزمة والتخلص منها",
      simpleCode: `// 1. أمر تثبيت مكتبة الأيقونات الرائعة lucide-react في مشروعنا
// npm install lucide-react

// 2. بعد التثبيت، يمكننا استيراد أي أيقونة واستخدامها في كودنا فوراً:
import { Heart, Search, CheckCircle } from 'lucide-react';

// استخدام الأيقونة كأنها عنصر واجهة عادي!
// <Heart color="red" size={24} />`,
      advancedCode: `<!-- محاكاة تفاعلية لتنزيل حزم npm من المستودع السحابي بنقرة زر -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h4 style="margin: 0; color: #f43f5e;">📦 مستودع npm المركزي (npmjs.com)</h4>
    <span style="font-size: 11px; background: #4c0519; color: #fca5a5; padding: 2px 6px; border-radius: 4px;">2+ مليون حزمة</span>
  </div>

  <p style="font-size: 12px; color: #94a3b8; line-height: 1.6;">
    جرب تثبيت مكتبة افتراضية الآن لتشاهد ما يحدث خلف الكواليس في مشروعك:
  </p>

  <div style="display: flex; gap: 8px; margin-bottom: 15px;">
    <button onclick="installPkgDemo('lucide-react')" style="background: #e11d48; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
      npm i lucide-react
    </button>
    <button onclick="installPkgDemo('canvas-confetti')" style="background: #2563eb; color: white; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
      npm i canvas-confetti
    </button>
  </div>

  <div id="npm-log" style="background: #020617; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 11px; min-height: 70px; color: #a7f3d0; border: 1px solid #1e293b;">
    انقر على أحد الأزرار بالأعلى لمحاكاة التثبيت...
  </div>
</div>

<script>
  function installPkgDemo(pkg) {
    const log = document.getElementById('npm-log');
    log.innerHTML = '⏳ 1. الاتصال بمستودع npmjs.com والبحث عن ' + pkg + '...<br>';
    setTimeout(() => {
      log.innerHTML += '⬇️ 2. تنزيل ملفات الكود إلى مجلد node_modules...<br>';
      setTimeout(() => {
        log.innerHTML += '<b style="color: #4ade80;">✓ 3. تم تسجيل ' + pkg + ' داخل package.json بنجاح! جاهز للاستخدام.</b>';
      }, 500);
    }, 500);
  }
</script>`,
      outputExplanation: "يعاين المستخدم رحلة الحزمة: من البحث السحابي في مستودع npm، وتنزيل ملفات الأكواد إلى مجلد node_modules، ثم تسجيل اسم ورقم إصدار الحزمة في ملف package.json تلقائياً.",
      commonMistakes: [
        {
          wrong: "تنزيل الحزم بنسخ ملفاتها يدوياً من الإنترنت ولصقها في مجلدات المشروع.",
          right: "استخدام أمر npm install دائماً لضمان إدارة التبعيات وتحديثاتها السليمة تلقائياً.",
          reason: "الحزم تعتمد على بعضها البعض (Dependencies)، و npm هو الوحيد القادر على حل شجرة التبعيات بأمان."
        }
      ],
      bestPractices: [
        "افحص دائماً عدد التنزيلات الأسبوعية للحزمة على موقع npmjs.com قبل استخدامها لضمان أنها تحظى بثقة المجتمع ومستمرة في التحديث.",
        "شغل أمر npm audit دورياً لفحص أي ثغرة أمنية في المكتبات المستخدمة وحلها تلقائياً."
      ],
      infographic: {
        badge: "متجر البرمجيات العالمي",
        title: "مدير الحزم npm",
        icon: "PackageCheck",
        colors: "from-rose-600 to-red-600",
        steps: [
          { title: "البحث في المستودع", desc: "أكثر من 2 مليون مكتبة مفتوحة المصدر جاهزة للتحميل" },
          { title: "npm install", desc: "أمر سحري لتنزيل المكتبة وتضمينها في المشروع بضغطة زر" },
          { title: "شجرة التبعيات", desc: "تنزيل كل الملفات التي تحتاجها المكتبة لتعمل دون عناء" },
          { title: "التحديثات والأمان", desc: "ترقية الحزم بـ npm update وفحص الثغرات بـ npm audit" }
        ],
        summary: "npm هو القوة التشاركية الكبرى التي تجعل مبرمجي العالم فريق عمل واحد يتعاون معك."
      }
    },
    {
      id: "1.4.e",
      title: "مفهوم الحزم والاعتماديات",
      englishTitle: "Dependencies & package.json Concept",
      definition: "ملف package.json هو بطاقة الهوية وشهادة الميلاد الرسمية لأي مشروع برمجي؛ يحتوي على اسم المشروع، وإصداره، والأوامر التشغيلية (Scripts)، وقائمة بكل المكتبات التي يحتاجها المشروع (Dependencies). أما مجلد node_modules فهو المخزن الضخم الذي يضم الأكواد الفعلية لتلك الحزم.",
      analogy: "مثل 'قائمة المقادير وطريقة الطهي' في كتاب طبخ:\n- ملف package.json هو 'ورقة المقادير': مكتوب فيها (نحتاج 2 بيضة، وكوب دقيق، وملعقة سكر).\n- أما مجلد node_modules فهو 'ثلاجة المطبخ الحقيقية': التي تحتوي على أكياس الدقيق وكراتين البيض الفعلية!\nورقة المقادير خفيفة جداً يمكنك إرسالها بالواتساب، أما الثلاجة فلا تحملها على ظهرك!",
      why: "مجلد node_modules ضخم جداً ويصل حجمه إلى مئات الميجابايتات؛ لذا يُمنع رفعه على GitHub! بدلاً من ذلك، نرفع ملف package.json الصغير فقط، وعندما يحمل صديقك المشروع يكتب أمراً واحداً: npm install، فيقوم npm بقراءة القائمة وتنزيل كل المكونات في ثوانٍ!",
      terms: [
        { term: "package.json", pronunciation: "باكيدج دوت جيسون", meaning: "ملف هوية المشروع وقائمة المكتبات والأوامر التشغيلية" },
        { term: "dependencies", pronunciation: "ديبندنسيز", meaning: "الاعتماديات والمكتبات الأساسية التي يحتاجها الموقع ليعمل لدى الزوار (مثل react)" },
        { term: "devDependencies", pronunciation: "ديف ديبندنسيز", meaning: "أدوات يحتاجها المطور أثناء البرمجة فقط ولا يحتاجها الزائر (مثل vite و eslint)" },
        { term: "node_modules", pronunciation: "نود موديولز", meaning: "المجلد المحلي الذي يخزن أكواد كل الحزم المنزلة (لا يرفع على جيت هب)" }
      ],
      syntax: "{\n  \"name\": \"my-react-app\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\"\n  },\n  \"dependencies\": {\n    \"react\": \"^19.0.0\"\n  }\n}",
      simpleCode: `// هيكل توضيحي لملف package.json الحقيقي الذي نقرأه الآن في مشروعنا:
{
  // اسم المشروع
  "name": "react-learning-platform",
  // إصدار المشروع
  "version": "1.0.0",
  // الأوامر المختصرة التي نشغلها في التيرمينال
  "scripts": {
    "dev": "vite",        // نشغله بـ npm run dev
    "build": "vite build"  // نشغله بـ npm run build
  },
  // المكتبات الإلزامية لتشغيل الواجهة
  "dependencies": {
    "react": "^19.3.1",
    "lucide-react": "^1.16.0"
  }
}`,
      advancedCode: `<!-- محاكاة تفاعلية توضح ملف .gitignore وأهميته لمنع رفع node_modules -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <h4 style="color: #38bdf8; margin-top: 0;">لماذا نضيف node_modules إلى ملف .gitignore؟</h4>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 15px;">
    <!-- كرت package.json -->
    <div style="background: #1e293b; padding: 12px; border-radius: 6px; border-top: 3px solid #10b981;">
      <b style="color: #34d399; font-size: 13px;">📄 package.json</b>
      <div style="font-size: 11px; color: #94a3b8; margin-top: 4px;">
        • حجمه: <b>2 كيلوبايت فقط</b><br>
        • يرفع على GitHub فوراً<br>
        • يحوي قائمة الأسماء فقط
      </div>
    </div>

    <!-- كرت node_modules -->
    <div style="background: #1e293b; padding: 12px; border-radius: 6px; border-top: 3px solid #ef4444;">
      <b style="color: #f87171; font-size: 13px;">📁 node_modules</b>
      <div style="font-size: 11px; color: #94a3b8; margin-top: 4px;">
        • حجمه: <b>350+ ميجابايت</b><br>
        • يُحظر رفعه على GitHub!<br>
        • يعاد توليده بـ npm install
      </div>
    </div>
  </div>

  <div style="background: #020617; padding: 10px; border-radius: 6px; font-family: monospace; font-size: 12px; color: #cbd5e1; border: 1px dashed #334155;">
    <span style="color: #64748b;"># محتوى ملف .gitignore الإلزامي:</span><br>
    <span style="color: #f43f5e;">node_modules/</span><br>
    <span style="color: #f43f5e;">dist/</span>
  </div>
</div>`,
      outputExplanation: "يرى المتعلم الفرق الجوهري بين الورقة الخفيفة package.json التي توثق قائمة المقادير ويتم مشاركتها في ثانية، وبين المجلد العملاق node_modules الذي نمنع رفعه على GitHub ونعيد توليده تلقائياً بأمر npm install.",
      commonMistakes: [
        {
          wrong: "رفع مجلد node_modules على موقع GitHub أو إرساله في ملف مضغوط لصديقك أو في مقابلة عمل.",
          right: "تضمين كلمة node_modules دائماً داخل ملف .gitignore وإرسال باقي الملفات فقط.",
          reason: "رفع node_modules يستغرق ساعات طويلة جداً ويعتبر خطأ فادحاً يثبت جهل المتقدم بأساسيات أدوات التطوير."
        }
      ],
      bestPractices: [
        "حافظ على ملف package-lock.json وارفعه دائماً على GitHub؛ فهو يحفظ الأرقام الدقيقة لكل حزمة لضمان أن يعمل المشروع لدى زميلك بنفس النتيجة بالضبط.",
        "استخدم العلم -D عند تثبيت أدوات الفحص والتنسيق لتذهب إلى devDependencies وتفصلها عن مكتبات الإنتاج."
      ],
      infographic: {
        badge: "شهادة ميلاد المشروع",
        title: "package.json و node_modules",
        icon: "FileCheck2",
        colors: "from-blue-600 to-indigo-600",
        steps: [
          { title: "package.json", desc: "ملف الهوية وقائمة أسماء المكتبات والأوامر البرمجية" },
          { title: "dependencies", desc: "الحزم الجوهرية التي يحتاجها الزائر في المتصفح مثل React" },
          { title: "devDependencies", desc: "أدوات يحتاجها المطور فقط في جهازه مثل Vite و ESLint" },
          { title: "node_modules", desc: "المخزن المحلي للأكواد المنزلة الذي يُستثنى من الرفع بـ .gitignore" }
        ],
        summary: "ملف package.json هو الوصفة، و node_modules هي المكونات الحقيقية."
      }
    },
    {
      id: "1.4.f",
      title: "استخدام أدوات المتصفح في التطوير المتقدم",
      englishTitle: "Advanced Browser Tools & Device Emulation",
      definition: "استخدام أدوات المتصفح في التطوير المتقدم يتجاوز مجرد فحص الألوان إلى استخدام محاكي الأجهزة (Device Toolbar) لاختبار الشاشات المتعددة، ومحاكاة بطء شبكات الهواتف (Network Throttling مثل 3G)، وفحص أداء استهلاك الذاكرة (Performance Tab).",
      analogy: "مثل 'مختبر اختبار السيارات في أصعب الظروف': لا يختبرون السيارة في شارع ممهد فقط، بل يضعونها في غرفة جليد لمعرفة كيف تعمل تحت الصفر، وفي غرفة رمال لمحاكاة العواصف! أدوات المتصفح المتقدمة تسمح لك بمحاكاة مستخدم يتصفح موقعك بهاتف ضعيف وشبكة إنترنت رديئة في قطار سريع لترى كيف يتصرف موقعك!",
      why: "المطور غالباً يملك حاسوباً قوياً وإنترنت منزلي فائق السرعة، فيظن أن موقعه سريع جداً! لكن الحقيقة أن ملايين المستخدمين يتصفحون بهواتف متواضعة وشبكات ضعيفة. بدون هذه الأدوات ستنصدم عندما يشتكي الناس من ثقل موقعك.",
      terms: [
        { term: "Device Mode", pronunciation: "ديفايس مود", meaning: "وضع محاكاة أبعاد شاشات الهواتف والتابلت في كروم" },
        { term: "Network Throttling", pronunciation: "نتورك ثروتلنج", meaning: "الفرملة المتعمدة لسرعة الإنترنت لمحاكاة شبكات 3G البطيئة" },
        { term: "Disable Cache", pronunciation: "ديسابل كاش", meaning: "إلغاء التخزين المؤقت لضمان تحميل أحدث نسخة من كودك دائماً أثناء التطوير" },
        { term: "Lighthouse", pronunciation: "لايت هاوس", meaning: "أداة تدقيق آلية مدمجة تقيم موقعك في الأداء والـ SEO والـ a11y من 100" }
      ],
      syntax: "لتفعيل وضع محاكاة الهواتف في DevTools:\nاضغط على أيقونة (الهاتف والتابلت) في الزاوية العلوية\nأو الاختصار: Ctrl + Shift + M.",
      simpleCode: `// تجربة برمجية بسيطة توضح كيفية معرفة أبعاد الشاشة الحالية للمستخدم
console.log("عرض شاشة المتصفح الحالية:", window.innerWidth, "بكسل");
console.log("ارتفاع شاشة المتصفح الحالية:", window.innerHeight, "بكسل");

// فحص هل يتصفح المستخدم من هاتف محمول أم كمبيوتر
if (window.innerWidth < 768) {
  console.log("المستخدم يتصفح الآن من هاتف ذكي أو جهاز لوحي!");
}`,
      advancedCode: `<!-- محاكي مرئي لاختبار موقعك تحت سرعات شبكة مختلفة عبر المتصفح -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 480px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h4 style="margin: 0; color: #38bdf8;">محاكاة سرعة الشبكة (Network Throttling):</h4>
    <span style="font-size: 11px; background: #1e293b; padding: 2px 8px; border-radius: 4px; color: #94a3b8;">DevTools Network</span>
  </div>

  <p style="font-size: 12px; color: #cbd5e1; margin-bottom: 12px;">
    اختر سرعة الشبكة واضغط 'تجربة التحميل' لترى كم ثانية سينتظر عميلك:
  </p>

  <div style="display: flex; gap: 8px; margin-bottom: 15px;">
    <button onclick="testSpeed('wifi')" style="background: #10b981; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px;">ألياف بصرية (Fast)</button>
    <button onclick="testSpeed('3g')" style="background: #f59e0b; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 12px;">شبكة 3G بطيئة</button>
  </div>

  <div id="speed-result" style="background: #020617; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 12px; min-height: 50px; color: #93c5fd; border: 1px solid #1e293b;">
    اضغط على أحد الأزرار لتجربة وقت الاستجابة...
  </div>
</div>

<script>
  function testSpeed(mode) {
    const res = document.getElementById('speed-result');
    if (mode === 'wifi') {
      res.innerHTML = '<span style="color: #4ade80;">⚡ سرعة فائقة: تم تحميل صور الموقع بالكامل في 85 ملي ثانية!</span>';
    } else {
      res.innerHTML = '⏳ جاري تحميل الصور عبر 3G...<br>';
      setTimeout(() => {
        res.innerHTML += '<span style="color: #f87171;">⚠️ استغرق التحميل 3.4 ثوانٍ! نصيحة: قلل حجم الصور عبر الويب.</span>';
      }, 1500);
    }
  }
</script>`,
      outputExplanation: "يعاين المستخدم كيف تكشف أدوات المتصفح نقاط الضعف الحقيقية للموقع، وتبين الفرق الشاسع بين التصفح عبر واي فاي فائق السرعة والتصفح عبر شبكات الهاتف في الأماكن النائية.",
      commonMistakes: [
        {
          wrong: "الاكتفاء بتجربة الموقع على شاشة الحاسوب الكبيرة والاعتقاد بأنه سيعمل تلقائياً بنفس السلاسة على الهواتف.",
          right: "تفعيل Device Toolbar وفحص الموقع على مقاسات iPhone SE و Galaxy و iPad قبل كتابة أي سطر جديد.",
          reason: "أبعاد الشاشات وتصرف اللمس يختلف جذرياً عن مؤشر الفأرة والشاشات العريضة."
        }
      ],
      bestPractices: [
        "علم دائماً على خيار Disable Cache في تبويب Network في أدوات المطور أثناء كتابة الأكواد لتتأكد من عدم رؤية نسخة مخزنة قديمة.",
        "شغل تقرير Lighthouse في متصفح كروم دورياً للحصول على درجات تقييم فورية ونصائح ذهبية لتحسين سرعة الموقع ومطابقته لـ SEO."
      ],
      infographic: {
        badge: "مختبر التجارب القاسية",
        title: "أدوات المتصفح المتقدمة",
        icon: "SlidersHorizontal",
        colors: "from-amber-600 to-orange-600",
        steps: [
          { title: "Device Toolbar (Ctrl+Shift+M)", desc: "محاكاة فورية لمقاسات شاشات أشهر الهواتف والأجهزة اللوحية" },
          { title: "Network Throttling", desc: "محاكاة شبكات الإنترنت البطيئة واكتشاف زمن تحميل الصور والملفات" },
          { title: "Disable Cache", desc: "منع التخزين المؤقت لتنزيل التعديلات البرمجية الحديثة دائماً" },
          { title: "تقرير Lighthouse", desc: "شهادة فحص شاملة للأداء وإمكانية الوصول وتوافق محركات البحث" }
        ],
        summary: "المطور الذكي يختبر موقعه في أسوأ الظروف الممكنة ليضمن إبهار الزوار في أفضل الظروف."
      }
    },
    {
      id: "1.4.g",
      title: "تنسيق الكود باستخدام Prettier",
      englishTitle: "Code Formatting with Prettier",
      definition: "بريتير (Prettier) هو أداة التنسيق الآلي الأوسع انتشاراً في العالم؛ تقوم بقراءة كودك البرمجي غير المرتب وإعادة صياغته وهيكلته وفق قواعد جمالية ومعايير قياسية صارمة (ضبط المسافات، الفواصل المنقوطة، علامات التنصيص، والتفاف الأسطر الطويلة) بنقرة زر واحدة أو بمجرد حفظ الملف.",
      analogy: "مثل 'مكواة البخار السريعة': ترمي إليها قميصاً مجعداً وممتلئاً بالثنيات المبعثرة، فتخرجه لك في ثانية واحدة ناصع البياض ومفروداً بأعلى معايير الأناقة والترتيب ليراه الجميع بإعجاب!",
      why: "النقاشات العقيمة بين المطورين في الشركات حول: (هل نضع مسافتين أم أربعة؟ هل نستخدم علامات تنصيص فردية ' أم مزدوجة \"؟) كانت تضيع مئات ساعات العمل الثمينة. جاءت أداة Prettier لتفرض معياراً جمالياً موحداً وترتب كود الجميع تلقائياً دون تضييع ثانية واحدة.",
      terms: [
        { term: "Code Formatter", pronunciation: "كود فورماتر", meaning: "منسق الأكواد البرمجية التلقائي" },
        { term: "Prettier", pronunciation: "بريتيير", meaning: "اسم أشهر أداة لتنسيق الأكواد في عالم جافاسكريبت" },
        { term: "Format on Save", pronunciation: "فورمات أون سيف", meaning: "إعداد يقوم بتنسيق الملف آلياً عند الضغط على Ctrl + S" },
        { term: ".prettierrc", pronunciation: "بريتيير آر سي", meaning: "ملف إعدادات قواعد التنسيق الخاصة بمشروعك" }
      ],
      syntax: "// ملف إعدادات .prettierrc بسيط ونموذجي:\n{\n  \"semi\": true,\n  \"singleQuote\": true,\n  \"tabWidth\": 2,\n  \"trailingComma\": \"es5\"\n}",
      simpleCode: `// 1. الكود المجعد والمبعثر قبل التنسيق بـ Prettier:
const x={name:"سارة",age:25,skills:["React","HTML"],city:"الرياض"};

// 2. الكود بعد أن ضغطنا Ctrl + S وقام Prettier بتنسيقه تلقائياً:
const x = {
  name: 'سارة',
  age: 25,
  skills: ['React', 'HTML'],
  city: 'الرياض',
};
// لاحظ كيف وضع مسافات متناسقة، وقسم الخصائص في أسطر مريحة للعين!`,
      advancedCode: `<!-- تجربة تفاعلية توضح السحر الفوري لتنسيق الأكواد بـ Prettier -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
    <h4 style="margin: 0; color: #38bdf8;">سحر منسق الأكواد Prettier ✨</h4>
    <button onclick="formatCodeDemo()" style="background: #10b981; color: white; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: bold;">
      تنسيق الكود الآن (Ctrl+S)
    </button>
  </div>

  <div style="font-size: 12px; color: #94a3b8; margin-bottom: 8px;">معاينة صندوق الكود:</div>
  <pre id="ugly-code" style="background: #020617; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 12px; color: #fca5a5; border: 1px solid #334155; overflow-x: auto; line-height: 1.5;">
function calculateTotal(price,tax){
let total=price+(price*tax);
return total;}
  </pre>

  <div id="format-status" style="font-size: 12px; color: #64748b; text-align: center; margin-top: 8px;">
    الحالة: كود غير منسق ومكدس يصعب قراءته!
  </div>
</div>

<script>
  function formatCodeDemo() {
    const box = document.getElementById('ugly-code');
    const status = document.getElementById('format-status');
    box.style.color = '#a7f3d0';
    box.innerText = \`function calculateTotal(price, tax) {
  // حساب المجموع مع الضريبة بعد التنسيق
  const total = price + price * tax;
  return total;
}\`;
    status.innerHTML = '<span style="color: #4ade80;">✓ تم التنسيق السحري بـ Prettier! أصبح الكود نظيفاً وأنيقاً بنقرة زر.</span>';
  }
</script>`,
      outputExplanation: "يشاهد المتعلم كيف يتحول الكود المشوه الملتصق ببعضه إلى شفرة نظيفة ومبوبة بمسافات بادئة متقنة (Indentation) تسعد عين أي قارئ بمجرد الضغط على زر التنسيق.",
      commonMistakes: [
        {
          wrong: "إضاعة الوقت في تعديل المسافات والأسطر يدوياً بالمسطرة وزر المسافة في لوحة المفاتيح.",
          right: "تفعيل خيار Editor: Format On Save في إعدادات VS Code وترك Prettier يتكفل بكل شيء.",
          reason: "المبرمج يجب أن يركز عقله على حل المشكلات البرمجية، ويترك الأمور الشكلية للأدوات الآلية."
        }
      ],
      bestPractices: [
        "ضع ملف .prettierrc في جذر مستودع مشروعك حتى يلتزم كل أفراد الفريق بنفس قواعد التنسيق عند كتابة الأكواد.",
        "استخدم مسافة بادئة (tabWidth: 2) فهي المعيار الأكثر شيوعاً ومحبة في مجتمع React و JavaScript."
      ],
      infographic: {
        badge: "أناقة الكود",
        title: "منسق الأكواد Prettier",
        icon: "FileSignature",
        colors: "from-teal-600 to-cyan-600",
        steps: [
          { title: "تنسيق آلي", desc: "ترتيب المسافات والأقواس والفواصل تلقائياً بضغطة زر" },
          { title: "Format on Save", desc: "تنسيق وحياكة الكود في كل مرة تضغط فيها على Ctrl + S" },
          { title: "ملف .prettierrc", desc: "توحيد معايير علامات التنصيص والمسافات لكل فريق العمل" },
          { title: "تركيز أعلى", desc: "تفريغ ذهنك للتفكير في الخوارزميات دون القلق بشأن المسافات" }
        ],
        summary: "الكود النظيف المنسق ليس رفاهية؛ بل هو عنوان المبرمج المتقن لمهنته."
      }
    },
    {
      id: "1.4.h",
      title: "فحص الكود باستخدام ESLint",
      englishTitle: "Linting & Code Quality with ESLint",
      definition: "إي إس لينت (ESLint) هو أداة التحليل الثابت والفحص الأمني لجودة الكود؛ يقوم بقراءة كودك فور كتابته لاكتشاف الأخطاء القاتلة، والمتغيرات المعرفة التي نسيتها ولم تستخدمها، والأنماط الخطيرة التي قد تسبب انهيار الموقع (Bugs)، وتنبيهك بوضع خط أحمر تحتها قبل تشغيل الكود أصلاً!",
      analogy: "إذا كان Prettier هو 'مكواة الملابس التي ترتب الشكل الخارجي'، فإن ESLint هو 'طبيب الفحص الشامل ومفتش الجودة': يفحص كودك ويقول لك: 'انتبه! هذا المتغير مكرر، وهذه الدالة مكتوبة بطريقة ستسبب ثغرة أمنية أو تجمد شاشة المستخدم!'.",
      why: "البحث عن خطأ إملائي في اسم متغير استغرق في السابق ساعات طويلة من البكاء أمام الشاشة لمعرفة سبب توقف الموقع! ESLint يضع خطاً أحمر تحت الحرف الخاطئ فور كتابته ويشرح لك كيفية تصليحه فوراً.",
      terms: [
        { term: "Linter", pronunciation: "لينتر", meaning: "أداة تفحص الكود لاكتشاف الأخطاء البرمجية والأسلوبية" },
        { term: "ESLint", pronunciation: "إي إس لينت", meaning: "المعيار القياسي العالمي لفحص جودة كود جافاسكريبت و React" },
        { term: "Static Analysis", pronunciation: "ستاتيك أناليسيس", meaning: "التحليل الساكن؛ فحص الأكواد دون الحاجة لتشغيلها فعلياً" },
        { term: "Rule", pronunciation: "رول", meaning: "قاعدة فحص محددة (مثل قاعدة: ممنوع ترك متغير غير مستخدم no-unused-vars)" }
      ],
      syntax: "/* في ملف eslint.config.js يتم تحديد القواعد: */\nexport default [\n  {\n    rules: {\n      'no-unused-vars': 'error', // وضع خط أحمر تحت أي متغير لم يستخدم\n      'no-console': 'warn'       // تحذير أصفر عند نسيان console.log\n    }\n  }\n];",
      simpleCode: `// مثال يوضح كيف يكتشف ESLint خطأ خطيراً قبل تشغيل الكود:

// قمنا بتعريف متغير يحمل كلمة السر
const secretKey = "123456"; 
// ⚠️ ينبهك ESLint فوراً بخط أصفر متعرج:
// 'secretKey' is assigned a value but never used (no-unused-vars)
// هذا ينبهك بأنك نسيت حذف المتغير الحساس قبل رفع المشروع!

// استخدام المتغير في مكانه الصحيح يزيل الخطأ فوراً
console.log("تم فحص المفتاح بنجاح:", secretKey);`,
      advancedCode: `<!-- محاكي مرئي يوضح كيف يحميك ESLint من الأخطاء المنطقية في الوقت الفعلي -->
<div style="font-family: sans-serif; background: #0f172a; padding: 22px; border-radius: 12px; color: white; max-width: 500px;">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
    <span style="font-size: 22px;">🛡️</span>
    <h4 style="margin: 0; color: #f43f5e;">الحارس الأمين لجودة الكود (ESLint):</h4>
  </div>

  <div style="background: #1e1e1e; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 12px; border: 1px solid #333; line-height: 1.7;">
    <span style="color: #60a5fa;">function</span> <span style="color: #facc15;">calculateDiscount</span>() {<br>
    &nbsp;&nbsp;<span style="color: #60a5fa;">let</span> <span style="text-decoration: underline wavy #ef4444; color: #fca5a5;">discount</span> = 0.2;<br>
    &nbsp;&nbsp;<span style="color: #94a3b8;">// المتغير discount موضوع تحته خط أحمر متعرج!</span><br>
    &nbsp;&nbsp;<span style="color: #f43f5e;">return</span> 100;<br>
    }
  </div>

  <div style="background: rgba(239, 68, 68, 0.1); border-right: 4px solid #ef4444; padding: 10px; border-radius: 4px; margin-top: 12px; font-size: 12px; color: #fca5a5;">
    ❌ <b>تحذير ESLint الصارم:</b> لقد عرفت متغيراً باسم <code>discount</code> وأخذت من ذاكرة الجهاز، ولكنك نسيت استخدامه في معادلة الحساب إطلاقاً!
  </div>

  <div style="margin-top: 10px; font-size: 12px; color: #4ade80;">
    💡 <b>المكسب:</b> حمى ESLint موقعك من خطأ حسابي فادح كان سيكلف شركتك أموالاً بسبب نسيان تطبيق الخصم على العميل!
  </div>
</div>`,
      outputExplanation: "يعاين المستخدم الشاشة التي يراها كل مبرمج في محرره: خط أحمر متعرج تحت الخطأ مع شرح فوري لسبب المشكلة وكيفية معالجتها قبل أن تصل للعملاء في الإنتاج.",
      commonMistakes: [
        {
          wrong: "تجاهل تحذيرات ESLint أو تعطيل القواعد عشوائياً بكتابة // eslint-disable في كل سطر.",
          right: "قراءة رسالة الخطأ بعناية وإصلاح سبب المشكلة الجذري.",
          reason: "قواعد ESLint وُضعت بعد تجارب مريرة لملايين المبرمجين لحمايتك من الوقوع في نفس الكوارث."
        }
      ],
      bestPractices: [
        "ثبت إضافة ESLint الرسمية في VS Code لتظهر لك التنبيهات والأخطاء أثناء كتابة الكود حرفاً بحرف.",
        "اجعل فحص ESLint خطوة إجبارية في خط الإنتاج الآلي (CI/CD) قبل قبول أي تعديل برمجي من الفريق."
      ],
      infographic: {
        badge: "حارس الجودة والأمان",
        title: "فاحص الأكواد ESLint",
        icon: "ShieldAlert",
        colors: "from-red-600 to-rose-700",
        steps: [
          { title: "التحليل الساكن", desc: "قراءة وتحليل الكود بحثاً عن الأخطاء دون الحاجة لتشغيله" },
          { title: "خطوط حمراء متعرجة", desc: "تحديد مكان السطر المسبب للمشكلة فور كتابته في المحرر" },
          { title: "حماية من الثغرات", desc: "كشف المتغيرات التائهة والحلقات اللانهائية القاتلة للأداء" },
          { title: "قواعد موحدة للفريق", desc: "إلزام جميع المبرمجين بكتابة كود متطابق وأعلى جودة وموثوقية" }
        ],
        summary: "ESLint هو المراجع الصارم الخبير الذي يجلس بجانبك طوال اليوم ليرشدك نحو أفضل كود ممكن."
      }
    }
  ],
  quiz: [
    {
      question: "ما هو الاختصار السريع لفتح سطر الأوامر (Terminal) المدمج داخل محرر VS Code؟",
      options: ["Ctrl + Alt + Del", "Ctrl + ` (علامة التلدة)", "Shift + F1", "Alt + F4"],
      correctIndex: 1,
      explanation: "الضغط على زر Ctrl ومعه زر علامة التلدة (`) يفتح لك نافذة سطر الأوامر فوراً في قاع محرر VS Code دون مغادرته."
    },
    {
      question: "لماذا نضيف مجلد node_modules دائماً إلى ملف .gitignore قبل رفع المشروع على GitHub؟",
      options: [
        "لأن حجمه ضخم جداً ويمكن إعادة تنزيله تلقائياً بأمر npm install من ملف package.json",
        "لأن موقع GitHub يحظر هذا الاسم قانونياً",
        "لأنه يحتوي على صور سرية للمستخدمين",
        "لأنه يعمل على أجهزة ماك فقط"
      ],
      correctIndex: 0,
      explanation: "مجلد node_modules عملاق ويصل لمئات الميجابايتات، بينما ملف package.json يحتوي على قائمة المقادير فقط، لذا لا داعي لرفع المجلد العملاق على الإطلاق."
    },
    {
      question: "ما الفرق الجوهري بين وظيفة أداة Prettier ووظيفة أداة ESLint؟",
      options: [
        "Prettier لتشغيل الخادم و ESLint لحفظ الملفات",
        "Prettier مخصص للمظهر وتنسيق المسافات الجمالي، بينما ESLint مخصص لفحص الجودة واكتشاف الأخطاء البرمجية والمنطقية",
        "كلاهما نفس البرنامج ولكن بأسماء مختلفة",
        "ESLint مخصص فقط للألوان والخطوط"
      ],
      correctIndex: 1,
      explanation: "بريتير مكواة لتنسيق المسافات والأسطر وضبط المظهر، بينما إي إس لينت هو الفاحص الأمني الذي يكشف الأخطاء المنطقية والمتغيرات الضائعة."
    }
  ],
  exercise: {
    title: "تمرين تطبيقي: تهيئة مشروع ويب جديد عبر سطر الأوامر وفحص بيئة العمل",
    description: "قم بفتح التيرمينال، وافحص إصدارات الأدوات المثبتة لديك (node و npm)، وأنشئ مجلداً جديداً لمشروعك، وادخل فيه، ثم أنشئ ملف package.json مبدئي.",
    hints: [
      "استخدم الأمرين node -v و npm -v لفحص الإصدارات.",
      "استخدم أمر mkdir my-web-app لإنشاء المجلد، ثم أمر cd my-web-app للدخول فيه.",
      "استخدم أمر npm init -y لإنشاء ملف package.json افتراضي في ثانية واحدة دون أسئلة."
    ],
    solution: `<!-- خطوات الحل النموذجية المشروحة خطوة بخطوة في سطر الأوامر -->
# 1. التأكد من سلامة بيئة Node و npm:
node -v
# يظهر مثلاً: v24.21.0

npm -v
# يظهر مثلاً: 11.19.0

# 2. إنشاء مجلد المشروع والدخول إليه:
mkdir my-first-project
cd my-first-project

# 3. توليد ملف package.json الأولي بضغطة زر واحدة:
npm init -y
# النتيجة: يتم إنشاء ملف package.json فوري يحمل اسم المجلد وإصدار 1.0.0

# 4. فتح بيئة العمل كاملة داخل محرر VS Code بلمسة واحدة:
code .
# ومبروك! تفتح نافذة VS Code في المجلد الجديد فوراً وجاهزة للبرمجة!`
  },
  topicInfographic: {
    title: "خريطة المفاهيم: عدة المطور الاحترافية",
    badge: "الموضوع 1.4",
    overview: "أدوات التطوير هي الترسانة التي تمكن المطور من بناء واختبار وتنسيق أضخم التطبيقات في العالم بسرعة وموثوقية بالغة.",
    pillars: [
      { name: "محرر الأكواد", color: "#38bdf8", role: "VS Code مع متجر الإضافات واختصارات لوحة المفاتيح" },
      { name: "سطر الأوامر", color: "#f59e0b", role: "Terminal و CLI للتفاعل الفوري مع النظام وخوادم البناء" },
      { name: "بيئة وحزم نود", color: "#4ade80", role: "Node.js للتشغيل خارج المتصفح، و npm لإدارة التبعيات" },
      { name: "التنسيق والجودة", color: "#f43f5e", role: "Prettier للمظهر الأنيق التلقائي، و ESLint لحراسة الجودة" }
    ]
  }
};

