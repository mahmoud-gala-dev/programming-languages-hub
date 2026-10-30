// src/data/sections/section20/topic1.js

export const topic1 = {
  id: "20.1",
  title: "أساسيات Accessibility (Accessibility Fundamentals)",
  description: "المدخل الشامل لمفاهيم إمكانية الوصول للويب (a11y)؛ مبادئ WCAG العالمية، واستخدام HTML الدلالي كخط دفاع أول، والنصوص البديلة للصور، ونسب تباين الألوان، والملاحة الكاملة بلوحة المفاتيح، وإدارة التركيز والـ Focus، والاستخدام الرشيد لسمات ARIA، واختبار الواجهات بقارئات الشاشة.",
  subtopics: [
    {
      id: "20.1.a",
      title: "مفهوم Web Accessibility",
      englishTerm: "Web Accessibility (a11y) (ويب أكسيسيبيليتي)",
      description: "إمكانية الوصول للويب (المعروفة اختصاراً بـ a11y حيث يوجد 11 حرفاً بين a و y) تعني تصميم وبناء مواقع وتطبيقات الويب بحيث يتمكن جميع الأشخاص، بمن فيهم ذوو الإعاقات البصرية، والسمعية، والحركية، والإدراكية، من إدراك المحتوى وفهمه والتنقل فيه والتفاعل معه بسهولة واستقلالية تامة.",
      analogy: "يشبه بناء منحدر مائل ومصاعد بجانب الدرج عند مدخل مبنى عام؛ يتيح للشخص الذي يستخدم كرسياً متحركاً، وللأم التي تدفع عربة أطفال، وللمسافر الذي يجر حقيبة ثقيلة، الدخول بنفس الكرامة والسهولة.",
      whyItMatters: "أكثر من 1.3 مليار شخص حول العالم (16% من سكان الأرض) يعانون من إعاقات معينة، وإتاحة الوصول ليست مجرد واجب أخلاقي وإنساني، بل هي متطلب قانوني ملزم في العديد من الدول وتحسن من جودة الـ SEO وتجربة كافة المستخدمين.",
      syntax: "// المبدأ الأساسي: بناء واجهات تخدم الجميع دون حواجز تقنية",
      simpleExample: `// مثال بسيط يوضح الفرق بين زر غير متاح وزر متاح 100%
import React from 'react';

// ❌ طريقة سيئة: استخدام div كزر مما يحرم مستخدمي الكيبورد وقارئات الشاشة من التفاعل
function InaccessibleButton({ onClick, label }) {
  return (
    <div onClick={onClick} className="btn-fake">
      {label}
    </div>
  );
}

// ✅ طريقة متاحة قياسياً: استخدام زر HTML أصلي
export default function AccessibleButton({ onClick, label }) {
  return (
    // زر أصلي يتلقى التركيز تلقائياً عبر مفتاح Tab ويعمل بـ Enter و Space
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold"
    >
      {label}
    </button>
  );
}`,
      advancedExample: [
        "// مكوّن لافتة الوعي بإمكانية الوصول يعرض فئات الإعاقات الأربع وكيفية تلبيتها برمجياً",
        "import React from 'react';",
        "",
        "export const DISABILITY_CATEGORIES = [",
        "  {",
        "    category: 'بصرية (Visual)',",
        "    needs: 'فقدان بصر، عمى ألوان، ضعف رؤية.',",
        "    solutions: 'دعم قارئات الشاشة (NVDA/VoiceOver)، تباين ألوان عالي (>= 4.5:1)، ونصوص بديلة للصور.'" ,
        "  },",
        "  {",
        "    category: 'حركية (Motor / Mobility)',",
        "    needs: 'شلل رعاش، صعوبة التحكم بالفأرة، متلازمة النفق الرسغي.',",
        "    solutions: 'ملاحة كاملة بلوحة المفاتيح (Keyboard-only)، أهداف لمسية واسعة (>= 44x44px)، واختصارات سريعة.'" ,
        "  },",
        "  {",
        "    category: 'سمعية (Auditory)',",
        "    needs: 'صمم جزئي أو كلي.',",
        "    solutions: 'توفير ترجمة نصية للفيديوهات (Subtitles/Captions)، ونصوص بديلة للتسجيلات الصوتية.'" ,
        "  },",
        "  {",
        "    category: 'إدراكية (Cognitive)',",
        "    needs: 'عسر القراءة (Dyslexia)، تشتت الانتباه، صعوبات التعلم.',",
        "    solutions: 'بنية واضحة، رسائل خطأ صريحة، لغة مباشرة، وتجنب الحركات والوميض المشتت.'" ,
        "  }",
        "];",
        "",
        "export function AccessibilityManifesto() {",
        "  return (",
        "    <section aria-labelledby='a11y-heading' className='p-6 bg-slate-900 border border-slate-800 rounded-2xl'>",
        "      <h2 id='a11y-heading' className='text-xl font-bold text-sky-400 mb-4'>",
        "        أبعاد إمكانية الوصول الأربعة (The 4 Accessibility Dimensions)",
        "      </h2>",
        "      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-xs'>",
        "        {DISABILITY_CATEGORIES.map((item, idx) => (",
        "          <div key={idx} className='p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1.5'>",
        "            <h3 className='font-bold text-white text-sm'>{item.category}</h3>",
        "            <p className='text-slate-400'><strong className='text-slate-300'>الحالات:</strong> {item.needs}</p>",
        "            <p className='text-emerald-400'><strong className='text-slate-300'>الحلول البرمجية:</strong> {item.solutions}</p>",
        "          </div>",
        "        ))}",
        "      </div>",
        "    </section>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقدم المكون توثيقاً هندسياً يوضح الأبعاد الأربعة لإمكانية الوصول وكيفية مراعاة مختلف المستخدمين برمجياً.",
      commonMistakes: "الاعتقاد بأن a11y تخص المكفوفين فقط؛ إمكانية الوصول تخدم ملايين الأشخاص الذين يعانون من ضعف مؤقت (مثل كسر اليد اليمنى والاعتماد على الكيبورد، أو التصفح تحت أشعة الشمس الساطعة).",
      bestPractices: "اجعل إمكانية الوصول جزءاً لا يتجزأ من مرحلة التصميم والتطوير (Shift-Left Accessibility) بدلاً من محاولة ترقيعها بعد اكتمال المشروع.",
      visualDiagram: "Web Accessibility Pillars (POUR):\nPerceivable (قابل للإدراك) ──► Operable (قابل للتشغيل بالكامل)\n           ▲                                  │\n           │                                  ▼\nRobust (قوي وقابل للتفسير) ◄── Understandable (قابل للفهم بيسر)"
    },
    {
      id: "20.1.b",
      title: "مبادئ WCAG",
      englishTerm: "WCAG Principles (POUR) (مبادئ دبليو سي إيه جي)",
      description: "إرشادات الوصول إلى محتوى الويب (Web Content Accessibility Guidelines) هي المعيار الدولي المعتمد من اتحاد W3C. تنقسم إلى 4 مبادئ رئيسية تختصر بكلمة (POUR): أن يكون المحتوى قابلاً للإدراك (Perceivable)، وقابلاً للتشغيل (Operable)، وقابلاً للفهم (Understandable)، وقوياً ومتوافقاً مع التقنيات المساعدة (Robust).",
      analogy: "يشبه كود البناء الهندسي الدولي المعتمد للمباني والأبراج السكنية؛ يحدد عرض الأبواب، وميلان السلالم، ومخارج الطوارئ لضمان سلامة الجميع.",
      whyItMatters: "تعتمد التشريعات والقوانين الدولية ومحاكم الدول على معيار WCAG 2.1 / 2.2 بالمستوى (Level AA) كمعيار إلزامي للامتثال وتفادي الغرامات والدعاوى القضائية.",
      syntax: "// مستويات الامتثال:\n// Level A (الأساسي) ➔ Level AA (المعياري المطلوب للشركات) ➔ Level AAA (الأعلى تخصصاً)",
      simpleExample: `// استيراد React
import React from 'react';

// تطبيق مبدأ Perceivable و Operable في نموذج بسيط
export default function PourPrinciplesForm() {
  return (
    <form className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 text-white">
      {/* 1. Perceivable: النص واضح ومرتبط بحقل الإدخال برمجياً */}
      <div>
        <label htmlFor="user-national-id" className="block text-xs font-semibold mb-1">
          رقم الهوية الوطنية (10 أرقام):
        </label>
        {/* 2. Operable: يمكن الوصول إليه بالـ Tab وملؤه بالكيبورد */}
        {/* 3. Understandable: إرشادات واضحة ونمط محدد */}
        {/* 4. Robust: وسم input قياسي تفهمه كافة قارئات الشاشة */}
        <input
          id="user-national-id"
          type="text"
          pattern="[0-9]{10}"
          required
          aria-describedby="id-hint"
          className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-sm"
        />
        <p id="id-hint" className="text-[11px] text-slate-400 mt-1">
          يجب أن تبدأ الهوية برقم 1 أو 2.
        </p>
      </div>
    </form>
  );
}`,
      advancedExample: [
        "// بطاقة تفاعلية لشرح أركان POUR ومعايير المستوى AA الإلزامية",
        "export const WCAG_POUR_RULES = [",
        "  {",
        "    principle: '1. Perceivable (قابل للإدراك)',",
        "    coreRule: 'لا يمكن للمستخدم أن يتفاعل مع شيء لا يدركه بحواسه.',",
        "    requirements: [",
        "      'توفير بدائل نصية للصور والمحتوى غير النصي.',",
        "      'توفير نصوص وكابشن للفيديوهات والتسجيلات.',",
        "      'نسبة تباين ألوان لا تقل عن 4.5:1 للنصوص العادية.'",
        "    ]",
        "  },",
        "  {",
        "    principle: '2. Operable (قابل للتشغيل)',",
        "    coreRule: 'يجب أن تكون كافة أجزاء الواجهة قابلة للتنقل والتشغيل دون استثناء.',",
        "    requirements: [",
        "      'إتاحة 100% من الوظائف عبر لوحة المفاتيح بدون فأرة.',",
        "      'عدم حجز تركيز الكيبورد في فخ مغلق (No Keyboard Trap).',",
        "      'منح المستخدم وقتاً كافياً للقراءة وتجنب المؤقتات الخاطفة.'",
        "    ]",
        "  },",
        "  {",
        "    principle: '3. Understandable (قابل للفهم)',",
        "    coreRule: 'يجب أن تكون المعلومات وطريقة تشغيل الواجهة واضحة ومفهومة.',",
        "    requirements: [",
        "      'تحديد لغة الصفحة في الـ HTML (مثال: lang=\"ar\").',",
        "      'ظهور رسائل الخطأ بأسلوب مقروء مع توجيه المستخدم لكيفية الإصلاح.',",
        "      'تجنب التغييرات المفاجئة في السياق عند مجرد التنقل بين الحقول.'",
        "    ]",
        "  },",
        "  {",
        "    principle: '4. Robust (قوي ومتوافق)',",
        "    coreRule: 'يجب أن يكون الكود متوافقاً مع مختلف المتصفحات والتقنيات المساعدة.',",
        "    requirements: [",
        "      'استخدام وسوم HTML دلالية وصالحة بدون أخطاء تداخل.',",
        "      'استخدام سمات ARIA المتوافقة مع مواصفات WAI-ARIA الرسمية.',",
        "      'توافق العناصر المخصصة مع قارئات الشاشة الحديثة.'",
        "    ]",
        "  }",
        "];",
        "",
        "export function logWcagPourMatrix() {",
        "  console.table(WCAG_POUR_RULES);",
        "}"
      ].join('\n'),
      output: "شرح معماري كامل لمبادئ POUR الأربعة مع متطلبات الامتثال للمستوى AA المعياري.",
      commonMistakes: "الاستهداف الساذج للمستوى AAA في كامل المشروع؛ المستوى AAA صُمم لبيئات مخصصة جداً (مثل كتب المكفوفين)، وتطبيقه على كل شاشة قد يُقيد التصميم والجماليات بدون داعٍ. المستوى المعياري الذهبي عالمياً هو **WCAG 2.1 AA**.",
      bestPractices: "اجعل متطلبات POUR جزءاً من مراجعة الكود (Code Review Checklist): هل هو قابل للإدراك، والتشغيل بالكيبورد، ومفهوم، ومتوافق دلالياً؟",
      visualDiagram: "WCAG Compliance Levels:\nLevel A   ──► Basic Requirement (Prevent absolute barriers)\nLevel AA  ──► Global Standard for Business & Legal Compliance (Target! 🎯)\nLevel AAA ──► Specialized Maximum (For dedicated accessible apps)"
    },
    {
      id: "20.1.c",
      title: "استخدام Semantic HTML",
      englishTerm: "Semantic HTML Elements (إتش تي إم إل الدلالي)",
      description: "استخدام عناصر HTML ذات المعنى الدلالي الصريح (مثل `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<button>`, `<a>`) بدلاً من بناء الواجهة بالكامل باستخدام وسوم `<div>` و `<span>` عديمة المعنى (Div Soup). عناصر HTML الدلالية توفر أدوار ARIA المدمجة والملاحة المجانية لقارئات الشاشة تلقائياً.",
      analogy: "يشبه بناء مدينة بلافتات شوارع واضحة: 'مستشفى'، 'محطة قطار'، 'مدرسة'؛ بدلاً من وضع لافتات متطابقة على كافة المباني مكتوب عليها 'مبنى 1'، 'مبنى 2' وإجبار الناس على التخمين.",
      whyItMatters: "توفر لك 90% من متطلبات إمكانية الوصول مجاناً دون كتابة سطر ARIA واحد؛ قارئات الشاشة تعتمد على الـ Landmarks الدلالية لتمكين المكفوفين من القفز مباشرة إلى المحتوى الرئيسي أو القائمة.",
      syntax: "// ❌ غير دلالي (Div Soup):\n<div className=\"header\"><div className=\"nav\">...</div></div>\n// ✅ دلالي ونظيف:\n<header><nav>...</nav></header>",
      simpleExample: `// استيراد React
import React from 'react';

// هيكل صفحة مقال دلالي متكامل
export default function SemanticPageStructure() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ترويسة الموقع الدلالية */}
      <header className="p-4 border-b border-slate-800">
        <nav aria-label="القائمة العلوية">
          <ul className="flex gap-4 text-sm">
            <li><a href="/" className="hover:text-sky-400">الرئيسية</a></li>
            <li><a href="/docs" className="hover:text-sky-400">التوثيق</a></li>
          </ul>
        </nav>
      </header>

      {/* منطقة المحتوى الرئيسي الدلالية */}
      <main className="p-6 max-w-3xl mx-auto">
        <article>
          <h1 className="text-2xl font-bold text-sky-400">هندسة الواجهات الدلالية</h1>
          <p className="mt-2 text-slate-300 leading-relaxed">
            الاعتماد على وسوم HTML الدلالية يسهل على محركات البحث وقارئات الشاشة فهم بنية الصفحة.
          </p>
        </article>
      </main>

      {/* تذييل الصفحة الدلالي */}
      <footer className="p-4 border-t border-slate-800 text-center text-xs text-slate-500">
        حقوق النشر محفوظة © 2026
      </footer>
    </div>
  );
}`,
      advancedExample: [
        "// جدول إرشادي يوضح الاستبدالات الدلالية الموصى بها لإلغاء ظاهرة Div Soup",
        "export const SEMANTIC_ELEMENTS_MAP = [",
        "  { nonSemantic: '<div onClick={...}>نقر</div>', semantic: '<button type=\"button\">نقر</button>', benefit: 'يدعم التفاعل بلوحة المفاتيح والتركيز البصري تلقائياً.' },",
        "  { nonSemantic: '<div onClick={goToPage}>رابط</div>', semantic: '<a href=\"/path\">رابط</a>', benefit: 'يتيح فتح الرابط في تبويب جديد ونسخ العنوان وقراءة الوجهة.' },",
        "  { nonSemantic: '<div className=\"main-content\">', semantic: '<main>', benefit: 'ينشئ معلماً دلالياً (Landmark) يتيح القفز السريع للمحتوى.' },",
        "  { nonSemantic: '<div className=\"sidebar\">', semantic: '<aside>', benefit: 'يفيد بأن المحتوى جانبي ومكمل للمقال الرئيسي.' },",
        "  { nonSemantic: '<div className=\"heading\">عنوان</div>', semantic: '<h1> إلى <h6>', benefit: 'يبني شجرة تسلسل هرمي للمستند لقارئات الشاشة ومحركات البحث.' }",
        "];",
        "",
        "export function SemanticHtmlShowcase() {",
        "  return (",
        "    <div className='p-6 bg-slate-900 border border-slate-800 rounded-2xl'>",
        "      <h3 className='font-bold text-white mb-3 text-sm'>التحول من Div Soup إلى الهيكل الدلالي:</h3>",
        "      <div className='space-y-2 text-xs'>",
        "        {SEMANTIC_ELEMENTS_MAP.map((item, i) => (",
        "          <div key={i} className='p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex flex-col md:flex-row justify-between gap-2'>",
        "            <div>",
        "              <span className='text-rose-400 font-mono block'>❌ {item.nonSemantic}</span>",
        "              <span className='text-emerald-400 font-mono block'>✅ {item.semantic}</span>",
        "            </div>",
        "            <p className='text-slate-400 text-[11px] self-center'>{item.benefit}</p>",
        "          </div>",
        "        ))}",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "شجرة HTML نقية ونظيفة تفهمها قارئات الشاشة تلقائياً وتبني خريطة Landmarks تتيح للمستخدمين القفز والتنقل بيسر.",
      commonMistakes: "القفز في مستويات العناوين؛ مثل كتابة `<h1>` ثم يليه مباشرة `<h3>` دون وجود `<h2>`؛ هذا يربك قارئ الشاشة ويوحي بأن هناك قسماً محذوفاً. يجب أن يكون تسلسل العناوين منطقياً وهرمياً.",
      bestPractices: "القاعدة الأولى في ARIA تنص على: 'لا تستخدم ARIA إذا كان هناك وسم HTML دلالي يؤدي نفس الغرض'. استخدم `<button>` بدلاً من `<div role=\"button\">` دائماً.",
      visualDiagram: "Semantic Landmarks Hierarchy:\n<header> ──► Landmark: Banner\n  └── <nav> ──► Landmark: Navigation\n<main> ──► Landmark: Main Content (Target of 'Skip to Content')\n  ├── <article> ──► Self-contained document\n  └── <aside>   ──► Landmark: Complementary\n<footer> ──► Landmark: Contentinfo"
    },
    {
      id: "20.1.d",
      title: "النصوص البديلة للصور",
      englishTerm: "Image Alternative Text (alt Text) (النصوص البديلة)",
      description: "كتابة خاصية `alt` على كافة وسوم الصور `<img>` لتقديم وصف نصي موجز ودقيق لمحتوى الصورة وسياقها في الصفحة. يقرأ قارئ الشاشة هذا النص للمستخدمين المكفوفين، ويعرضه المتصفح كبديل إذا فشل تحميل ملف الصورة عبر الشبكة.",
      analogy: "يشبه المعلق الرياضي في الراديو؛ لا يمكنك رؤية ملعب كرة القدم بعينيك، لكن صوت المعلق يصف لك بدقة: 'الكرة الآن مع المهاجم في منطقة الجزاء ويمررها لليمين'.",
      whyItMatters: "غياب نص الـ alt يجعل قارئ الشاشة يقرأ اسم ملف الصورة المشفر مثل 'IMG_99482_compressed.jpg' مما يسبب إحباطاً وضياعاً للمستخدم الكفيف.",
      syntax: "<!-- صورة ذات مغزى إخباري: -->\n<img src=\"chart.png\" alt=\"رسم بياني يوضح نمو المبيعات بنسبة 25% في الربع الأول\" />\n<!-- صورة تزيينية بحتة: -->\n<img src=\"divider.svg\" alt=\"\" aria-hidden=\"true\" />",
      simpleExample: `// استيراد React
import React from 'react';

export default function AltTextBestPractices() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-4 text-white">
      {/* 1. صورة وظيفية تحمل معنى مهماً */}
      <div>
        <p className="text-xs text-slate-400 mb-1">صورة ذات دلالة ومعنى:</p>
        <img
          src="/assets/founder.jpg"
          alt="صورة شخصية لمؤسس المنصة المهندس أحمد وهو يلقي كلمة في المؤتمر"
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>

      {/* 2. صورة تزيينية بحتة لا تقدم أي معلومة جديدة */}
      <div>
        <p className="text-xs text-slate-400 mb-1">صورة ديكور تزيينية (alt فارغ):</p>
        <img
          src="/assets/decorative-wave.svg"
          alt="" // alt فارغ يخبر قارئ الشاشة بتجاهل الصورة تماماً
          aria-hidden="true"
          className="w-full h-8 opacity-40"
        />
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// مكوّن صورة ذكي يفرض كتابة النص البديل ويمنع العبارات المحظورة مثل 'صورة لـ'",
        "import React from 'react';",
        "",
        "export function AccessibleImage({ src, alt, caption, isDecorative = false, ...props }) {",
        "  // التحقق من جودة النص البديل في بيئة التطوير",
        "  if (process.env.NODE_ENV !== 'production') {",
        "    if (!isDecorative && (!alt || alt.trim().length === 0)) {",
        "      console.warn('⚠️ تحذير إمكانية وصول: الصورة تفتقر لخاصية alt ذات معنى!', src);",
        "    }",
        "    // تجنب العبارات الزائدة لأن قارئ الشاشة ينطق كلمة 'صورة' تلقائياً",
        "    if (alt && (/^صورة\\s/i.test(alt) || /^image of\\s/i.test(alt))) {",
        "      console.warn('💡 نصيحة a11y: لا تبدأ alt بكلمة \"صورة لـ\" لأن قارئ الشاشة يذكر ذلك تلقائياً.');",
        "    }",
        "  }",
        "",
        "  if (isDecorative) {",
        "    // صورة تزيينية: يجب إخفاؤها تماماً عن التقنيات المساعدة",
        "    return <img src={src} alt='' aria-hidden='true' {...props} />;",
        "  }",
        "",
        "  if (caption) {",
        "    // صورة مرفقة بشرح توضيحي دلالي عبر figure و figcaption",
        "    return (",
        "      <figure className='space-y-1 my-2'>",
        "        <img src={src} alt={alt} {...props} className='rounded-xl max-w-full h-auto' />",
        "        <figcaption className='text-xs text-slate-400 italic text-center'>{caption}</figcaption>",
        "      </figure>",
        "    );",
        "  }",
        "",
        "  return <img src={src} alt={alt} {...props} />;",
        "}"
      ].join('\n'),
      output: "يقوم المكون بفرض كتابة نصوص بديلة ذات جودة عالية وتصفية الصور التزيينية بحسب معايير W3C.",
      commonMistakes: "كتابة `alt=\"صورة\"` أو `alt=\"image\"`؛ هذا أسوأ من ترك الـ alt فارغاً لأنه يخبر الكفيف بوجود صورة دون أن يشرح له محتواها! الخطأ الآخر هو حذف خاصية `alt` تماماً؛ مما يجبر قارئ الشاشة على قراءة رابط ملف الصورة كاملاً.",
      bestPractices: "إذا كانت الصورة تزيينية لا تضيف أي معنى، ضع `alt=\"\"` فارغة، ولا تحذف الخاصية أبداً. إذا كانت الصورة إنفوجرافيك أو رسماً بيانياً معقداً، وفر نصاً تفصيلياً موازياً في الصفحة.",
      visualDiagram: "Alt Text Decision Tree:\nDoes the image convey critical information?\n  ├── YES ──► Write concise, meaningful description in `alt=\"...\"`\n  ├── NO (Decorative only) ──► Use empty `alt=\"\"` and `aria-hidden=\"true\"`\n  └── Inside a button/link ──► Describe the ACTION: `alt=\"بحث\"`"
    },
    {
      id: "20.1.e",
      title: "تباين الألوان",
      englishTerm: "Color Contrast Ratios (تباين الألوان)",
      description: "المعيار البصري الذي يحدد مدى وضوح النص مقارنة بلون الخلفية التي يقع عليها. تشترط معايير WCAG 2.1 AA نسبة تباين لا تقل عن 4.5:1 للنصوص العادية (أقل من 18pt)، ونسبة 3:1 للنصوص الكبيرة (18pt فما فوق أو 14pt عريض) ولعناصر الواجهة الرسومية والحدود النشطة.",
      analogy: "يشبه محاولة قراءة لافتة صفراء مكتوبة بلون أبيض تحت شمس الصحراء؛ تكاد تصاب بالعمى لقراءتها، بينما كتابة خط أسود داكن على خلفية صفراء ساطعة يمكن رؤيته من مسافة 500 متر.",
      whyItMatters: "يحمي ملايين المستخدمين الذين يعانون من ضعف الإبصار أو عمى الألوان، ويضمن إمكانية قراءة تطبيقك على شاشات الهواتف المحمولة في الشارع تحت ضوء الشمس.",
      syntax: "/* نسب التباين في معيار WCAG AA: */\n/* نصوص عادية: Contrast >= 4.5:1 */\n/* نصوص كبيرة وأيقونات تفاعلية: Contrast >= 3:1 */",
      simpleExample: `// استيراد React مع مقارنة بصرية بين التباين الضعيف والممتاز
import React from 'react';

export default function ContrastComparisonDemo() {
  return (
    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
      {/* ❌ تباين سيئ جداً يفشل في معايير WCAG (رمادي فاتح على خلفية بيضاء: ~2:1) */}
      <div className="p-3 bg-white rounded">
        <p className="text-gray-300 text-sm font-normal">
          ❌ هذا النص تباينه ضعيف جداً ويصعب على الكثيرين قراءته!
        </p>
      </div>

      {/* ✅ تباين ممتاز يجتاز معايير WCAG AA بتفوق (> 10:1) */}
      <div className="p-3 bg-slate-900 border border-slate-800 rounded">
        <p className="text-emerald-400 text-sm font-semibold">
          ✅ هذا النص تباينه ممتاز (أخضر زمردي على كحلي داكن) ومريح للعين.
        </p>
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// دالة رياضية لحساب نسبة التباين اللوني الدقيقة (Luminance & Contrast Ratio) برمجياً",
        "export function getLuminance(r, g, b) {",
        "  const [rs, gs, bs] = [r, g, b].map(c => {",
        "    c = c / 255;",
        "    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);",
        "  });",
        "  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;",
        "}",
        "",
        "export function calculateContrastRatio(rgb1, rgb2) {",
        "  const lum1 = getLuminance(...rgb1);",
        "  const lum2 = getLuminance(...rgb2);",
        "  const brightest = Math.max(lum1, lum2);",
        "  const darkest = Math.min(lum1, lum2);",
        "  // المعادلة القياسية لـ WCAG",
        "  const ratio = (brightest + 0.05) / (darkest + 0.05);",
        "  return Number(ratio.toFixed(2));",
        "}",
        "",
        "export function checkWcagCompliance(ratio, isLargeText = false) {",
        "  const minRequired = isLargeText ? 3.0 : 4.5;",
        "  return {",
        "    ratio,",
        "    passesAA: ratio >= minRequired,",
        "    passesAAA: ratio >= (isLargeText ? 4.5 : 7.0),",
        "    verdict: ratio >= minRequired ? 'مطابق لمعايير WCAG AA ✅' : 'مخالف وغير مطابق ❌'",
        "  };",
        "}"
      ].join('\n'),
      output: "يقوم بحساب التباين الرياضي بدقة وفق معادلات W3C، والتأكد من اجتياز عتبة 4.5:1 للنصوص.",
      commonMistakes: "الاعتماد على اللون كأداة وحيدة لتوضيح المعنى؛ مثل وضع نص أخضر للنجاح ونص أحمر للخطأ دون إرفاق أي أيقونة أو كلمة مساعدة؛ مستخدمو عمى الألوان (Color Blindness) لن يستطيعوا التمييز بينهما.",
      bestPractices: "استخدم دائماً التباين مع مؤشر إضافي (مثل كتابة كلمة 'خطأ:' بجانب الأيقونة)، وافحص تصميمك باستخدام أداة Color Contrast Checker في Chrome DevTools.",
      visualDiagram: "Contrast Ratios Spectrum:\n1:1 (Invisible) ────► 3:1 (Minimum for Large Text / Icons)\n               ────► 4.5:1 (WCAG AA Standard for Normal Text 🎯)\n               ────► 7:1 (WCAG AAA Enhanced)\n               ────► 21:1 (Pure Black on Pure White - Maximum Contrast)"
    },
    {
      id: "20.1.f",
      title: "إتاحة عناصر التحكم بلوحة المفاتيح",
      englishTerm: "Keyboard Accessibility (إمكانية الوصول بالكيبورد)",
      description: "المبدأ الذي ينص على ضرورة تمكين المستخدم من الوصول لكافة الوظائف التفاعلية في الموقع وتشغيلها باستخدام لوحة المفاتيح فقط دون لمس الفأرة. يشمل: التنقل بزر Tab، وتفعيل الأزرار والروابط بـ Enter و Space، وإغلاق النوافذ المنبثقة بـ Escape، والتنقل في القوائم بالأسهم (Arrow Keys).",
      analogy: "يشبه إمكانية تشغيل كافة أجهزة التلفزيون في المنزل بالريموت كنترول دون أن تضطر للنهوض والمشي نحو الشاشة للضغط على أزرارها الجانبية في كل مرة.",
      whyItMatters: "هو عصب إمكانية الوصول؛ فالمكفوفون، ومستخدمو التقنيات المساعدة، والأشخاص المصابون بإعاقات حركية، وحتى المبرمجون المحترفون يعتمدون على لوحة المفاتيح بنسبة 100% للتصفح السريع.",
      syntax: "// دعم مفاتيح Enter و Space تلقائياً عند استخدام وسوم HTML الأصلية:\n<button onClick={handleClick}>تشغيل</button>\n// أو الاستماع لأحداث الكيبورد:\nonKeyDown={(e) => { if (e.key === 'Escape') closeModal(); }}",
      simpleExample: `// استيراد React
import React, { useState } from 'react';

export default function KeyboardFriendlyDialog() {
  const [isOpen, setIsOpen] = useState(false);

  // دالة الاستماع لمفتاح الهروب Escape لإغلاق النافذة
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  return (
    <div onKeyDown={handleKeyDown} className="p-4 bg-slate-900 rounded-lg text-white">
      <button 
        onClick={() => setIsOpen(true)}
        className="px-3 py-1.5 bg-sky-600 rounded text-xs font-bold focus:outline-none focus:ring-2 focus:ring-sky-400"
      >
        فتح النافذة (تنقل بالـ Tab)
      </button>

      {isOpen && (
        <div role="dialog" aria-modal="true" className="mt-3 p-4 bg-slate-800 border border-slate-700 rounded-lg">
          <p className="text-sm">اضغط على مفتاح Escape للإغلاق بالكيبورد.</p>
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-2 px-2 py-1 bg-rose-600 rounded text-xs"
          >
            إغلاق
          </button>
        </div>
      )}
    </div>
  );
}`,
      advancedExample: [
        "// مكون ملاحة بالأسهم (Roving TabIndex Pattern) المستخدم في القوائم والشاشات الاحترافية",
        "import React, { useState, useRef } from 'react';",
        "",
        "export function RovingToolbar({ items }) {",
        "  // مؤشر الزر المركز عليه حالياً",
        "  const [focusedIndex, setFocusedIndex] = useState(0);",
        "  const buttonsRef = useRef([]);",
        "",
        "  const handleKeyDown = (e) => {",
        "    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {",
        "      e.preventDefault();",
        "      const nextIndex = (focusedIndex + 1) % items.length;",
        "      setFocusedIndex(nextIndex);",
        "      buttonsRef.current[nextIndex]?.focus();",
        "    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {",
        "      e.preventDefault();",
        "      const prevIndex = (focusedIndex - 1 + items.length) % items.length;",
        "      setFocusedIndex(prevIndex);",
        "      buttonsRef.current[prevIndex]?.focus();",
        "    }",
        "  };",
        "",
        "  return (",
        "    <div",
        "      role='toolbar'",
        "      aria-label='شريط الأدوات التفاعلي'",
        "      onKeyDown={handleKeyDown}",
        "      className='flex gap-1 p-2 bg-slate-950 border border-slate-800 rounded-xl'",
        "    >",
        "      {items.map((item, idx) => (",
        "        <button",
        "          key={item.id}",
        "          ref={el => buttonsRef.current[idx] = el}",
        "          // الزر النشط فقط يملك tabIndex=0، وباقي الأزرار -1 ليتم التنقل بالأسهم فقط",
        "          tabIndex={focusedIndex === idx ? 0 : -1}",
        "          onClick={() => console.log('تنفيذ:', item.label)}",
        "          className={'px-3 py-1.5 rounded-lg text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-sky-400 transition-colors ' + (focusedIndex === idx ? 'bg-sky-600 text-white' : 'bg-slate-900 text-slate-300')}",
        "        >",
        "          {item.label}",
        "        </button>",
        "      ))}",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يتحرك المستخدم بين خيارات شريط الأدوات بالأسهم الأربعة في كسر من الثانية، ويصل إليهم بضغطة Tab واحدة بدلاً من إجباره على الضغط 20 مرة.",
      commonMistakes: "كتابة `outline: none` في كود الـ CSS لحذف إطار التركيز الأزرق الافتراضي دون توفير بديل بصري مثل `focus-visible:ring-2`؛ هذا يعمي مستخدم الكيبورد تماماً ويجعله لا يعرف أين يقع مؤشر الاختيار في الصفحة!",
      bestPractices: "استخدم فئة `:focus-visible` دائماً في Tailwind أو CSS؛ فهي تُظهر مؤشر التركيز الأنيق فقط عند استخدام الكيبورد وتخفيه عند النقر بالفأرة لتجمع بين الجمال وإمكانية الوصول.",
      visualDiagram: "Keyboard Navigation Standards:\nTab Key       ──► Moves to Next Interactive Control\nShift + Tab   ──► Moves to Previous Control\nEnter / Space ──► Activates Button / Link / Toggles Checkbox\nEscape Key    ──► Closes Open Modals, Menus & Tooltips"
    },
    {
      id: "20.1.g",
      title: "إدارة Focus",
      englishTerm: "Focus Management in React (إدارة التركيز البصري)",
      description: "التحكم البرمجي في موضع مؤشر التركيز (Focus Ring) باستخدام خطاف `useRef()` واستدعاء `elementRef.current.focus()`؛ يشمل إعادة التركيز للزر المشغل بعد إغلاق النافذة المنبثقة، وتوجيه التركيز لأول حقل يحتوي على خطأ عند إرسال النموذج، وحبس التركيز (Focus Trap) داخل المودال.",
      analogy: "يشبه توجيه كشاف الإضاءة الرئيسي في المسرح على بطل المسرحية أثناء إلقائه للمونولوج الحاسم، ثم إعادة الكشاف إلى وسط المسرح فور انتهاء المشهد.",
      whyItMatters: "بدون إدارة التركيز، إذا فتح مستخدم الكيبورد نافذة منبثقة، سيظل التركيز خلف النافذة في الصفحة الأصلية، مما يجعله عاجزاً عن التفاعل مع المودال.",
      syntax: "const inputRef = useRef(null);\nuseEffect(() => {\n  inputRef.current?.focus();\n}, []);",
      simpleExample: `// استيراد React مع خطاف المرجع لإدارة التركيز
import React, { useRef } from 'react';

export default function AutoFocusSearchInput() {
  const searchInputRef = useRef(null);

  function handleOpenSearch() {
    // توجيه مؤشر التركيز برمجياً وفورياً إلى حقل البحث
    searchInputRef.current?.focus();
  }

  return (
    <div className="p-4 bg-slate-900 rounded-lg text-white space-y-3">
      <button 
        onClick={handleOpenSearch}
        className="px-3 py-1.5 bg-sky-600 rounded text-xs font-bold"
      >
        بدء البحث السريع
      </button>

      <input
        ref={searchInputRef}
        type="text"
        placeholder="ابحث هنا مباشرة..."
        className="block w-full p-2 bg-slate-800 border border-slate-700 rounded text-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
      />
    </div>
  );
}`,
      advancedExample: [
        "// خطاف احترافي لإعادة التركيز للعنصر السابق بعد إغلاق المودال (Restore Focus Pattern)",
        "import { useEffect, useRef } from 'react';",
        "",
        "export function useRestoreFocus(isOpen) {",
        "  // مرجع للاحتفاظ بالعنصر الذي كان نشطاً قبل فتح النافذة",
        "  const lastActiveElementRef = useRef(null);",
        "",
        "  useEffect(() => {",
        "    if (isOpen) {",
        "      // حفظ العنصر النشط حالياً في وثيقة الـ DOM (غالباً الزر الذي فتح المودال)",
        "      lastActiveElementRef.current = document.activeElement;",
        "    } else if (lastActiveElementRef.current) {",
        "      // عند الإغلاق: إعادة التركيز فوراً للزر الأصلي لمنع تشتت مستخدم الكيبورد",
        "      lastActiveElementRef.current.focus();",
        "    }",
        "  }, [isOpen]);",
        "}",
        "",
        "// مكوّن رابط تخطي المحتوى (Skip to Content Link) الإلزامي في المواقع الاحترافية",
        "export function SkipToContentLink() {",
        "  return (",
        "    <a",
        "      href='#main-content'",
        "      // مخفي بصرياً خارج الشاشة ويظهر فقط عند الضغط على مفتاح Tab في بداية الصفحة!",
        "      className='sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-50 focus:p-3 focus:bg-sky-600 focus:text-white focus:rounded-lg focus:shadow-2xl focus:font-bold text-xs'",
        "    >",
        "      تخطي إلى المحتوى الرئيسي ➔",
        "    </a>",
        "  );",
        "}"
      ].join('\n'),
      output: "يوفر مكوّن Skip to Content لمستخدمي الكيبورد القدرة على تخطي 40 رابطاً في الهيدر والوصول للمحتوى مباشرة بنقرة واحدة، ويعيد التركيز لمكانه الأصلي بعد إغلاق النوافذ.",
      commonMistakes: "إغلاق النافذة المنبثقة وترك مؤشر التركيز يضيع في جسم الصفحة `<body>`؛ مما يجبر مستخدم الكيبورد على الضغط على زر Tab من أول الصفحة مجدداً في كل مرة!",
      bestPractices: "وفر دائماً رابط 'Skip to Content' في أعلى ملف `App.jsx` كأول عنصر قابل للتركيز، وطبق نمط Restore Focus في كافة النوافذ المنبثقة.",
      visualDiagram: "Focus Restoration Cycle:\n[Button: 'Open Settings'] (Focused) ──► Click ──► Saves reference to Button\n                                                   │\n                                                   ▼\nModal Opens ──► Focus moved inside Modal inputs\n                                                   │\n                                                   ▼\nModal Closes (Esc) ──► Focus INSTANTLY RESTORED back to 'Open Settings' button!"
    },
    {
      id: "20.1.h",
      title: "استخدام ARIA عند الحاجة",
      englishTerm: "Using ARIA Roles & Attributes (استخدام سمات أريا)",
      description: "مواصفات ARIA (Accessible Rich Internet Applications) هي مجموعة من السمات المخصصة (مثل `role`, `aria-label`, `aria-expanded`, `aria-hidden`) التي تضاف لعناصر HTML لتعريف طبيعتها وحالتها للتقنيات المساعدة عندما لا تتوفر وسوم HTML دلالية أصلية تغطي تلك الوظيفة المعقدة.",
      analogy: "يشبه وضع ملصق برايل (Braille) البارز على أزرار المصعد الكهربائي؛ يتيح للمكفوفين معرفة رقم الطابق بمجرد لمس الزر بأصابعهم.",
      whyItMatters: "تمكنك من بناء واجهات وتطبيقات تفاعلية فائقة التعقيد (مثل القوائم المنسدلة المخصصة، والمودال، والـ Tabs) مع الحفاظ على قدرة قارئات الشاشة على قراءتها وتفسيرها بنجاح.",
      syntax: "<button aria-expanded={isOpen} aria-controls=\"menu-id\" aria-label=\"قائمة الإشعارات\">\n  🔔\n</button>",
      simpleExample: `// استيراد React
import React, { useState } from 'react';

export default function AriaBadgeToggle() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-4 bg-slate-900 rounded-lg text-white">
      {/* 
        زر يستخدم سمات ARIA:
        1. aria-label: لأن الزر يحتوي على أيقونة فقط بدون نص
        2. aria-expanded: يخبر الكفيف هل القائمة مفتوحة أم مغلقة
      */}
      <button
        onClick={() => setExpanded(v => !v)}
        aria-label="قائمة التنبيهات الجديدة"
        aria-expanded={expanded}
        className="p-2 bg-slate-800 rounded-full border border-slate-700"
      >
        🔔
      </button>
      {expanded && <div role="region" className="p-2 text-xs mt-2 bg-slate-800">لا توجد تنبيهات جديدة</div>}
    </div>
  );
}`,
      advancedExample: [
        "// القواعد الذهبية الخمس لمواصفات WAI-ARIA وتطبيقاتها البرمجية",
        "export const ARIA_FIVE_RULES = [",
        "  {",
        "    rule: 'القاعدة 1: لا تستخدم ARIA إذا كان هناك وسم HTML أصلي',",
        "    explanation: 'استخدم <button> بدلاً من <div role=\"button\">؛ لأن الوسم الأصلي يأتي بخصائص التركيز والكيبورد مجاناً.'",
        "  },",
        "  {",
        "    rule: 'القاعدة 2: لا تغير دلالات HTML الأصلية بدون سبب قاطع',",
        "    explanation: 'لا تكتب <h2 role=\"button\">؛ لأنك دمرت بنية العناوين الدلالية لقارئ الشاشة.'",
        "  },",
        "  {",
        "    rule: 'القاعدة 3: كافة عناصر ARIA التفاعلية يجب أن تكون قابلة للتشغيل بالكيبورد',",
        "    explanation: 'إذا أنشأت role=\"checkbox\" على وسم مخصص، فأنت ملزم برمجياً بإضافة tabIndex=\"0\" ودعم زر Space.'",
        "  },",
        "  {",
        "    rule: 'القاعدة 4: لا تستخدم role=\"presentation\" أو aria-hidden=\"true\" على عناصر قابلة للتركيز',",
        "    explanation: 'إخفاء عنصر يمكن للمستخدم الوقوف عليه بالكيبورد يربك مستخدمي قارئات الشاشة تماماً.'",
        "  },",
        "  {",
        "    rule: 'القاعدة 5: كافة عناصر التحكم التفاعلية يجب أن تملك اسماً متاحاً (Accessible Name)',",
        "    explanation: 'استخدم aria-label أو aria-labelledby للأزرار التي تحتوي على أيقونات SVG فقط دون نص مرئي.'",
        "  }",
        "];",
        "",
        "export function logAriaRules() {",
        "  console.table(ARIA_FIVE_RULES);",
        "}"
      ].join('\n'),
      output: "يقدم توجيهاً صارماً يحميك من الاستخدام الخاطئ أو المفرط لـ ARIA، ويضمن توفير أسماء وحالات دقيقة للمكونات.",
      commonMistakes: "استخدام ARIA كبديل للتصميم الجيد أو الإفراط في كتابتها في كل سطر كود؛ القاعدة المشهورة في W3C هي: 'Bad ARIA is worse than No ARIA' (كتابة ARIA خاطئة أسوأ بكثير من عدم كتابتها على الإطلاق لأنها تضلل المكفوفين بمعلومات كاذبة).",
      bestPractices: "استخدم `aria-label` للأزرار التي تحتوي على أيقونات فقط (مثل زر الإغلاق ✕ أو زر الحذف 🗑️)، واستخدم `aria-expanded` لتوثيق حالة فتح وإغلاق القوائم المشروطة.",
      visualDiagram: "First Rule of ARIA:\nNeed a button?\n  ├── Option A: <div role=\"button\" tabIndex=\"0\" onKeyDown={...} onClick={...}> ⚠️ (15 lines of risky manual code)\n  └── Option B: <button onClick={...}> ⚡ (1 line, 100% native accessibility free!)"
    },
    {
      id: "20.1.i",
      title: "اختبار الواجهة باستخدام قارئ الشاشة",
      englishTerm: "Testing with Screen Readers (اختبار قارئات الشاشة)",
      description: "التجربة العملية المباشرة لتصفح التطبيق وإغلاق شاشة الحاسوب أو إطفاء الشاشة وتصفح الواجهة بالاعتماد فقط على الصوت الصادر من قارئ الشاشة؛ مثل NVDA (مجاني لويندوز)، و JAWS، و VoiceOver (مدمج في macOS و iOS)، و TalkBack (في أندرويد).",
      analogy: "يشبه إطفاء أضواء الغرفة بالكامل والمشي فيها بالاعتماد فقط على العصا البيضاء أو اللمس، لتتأكد من عدم وجود أي أسلاك أو عوائق غير متوقعة على الأرضية قد تعثر أحداً.",
      whyItMatters: "هو الاختبار الحقيقي والنهائي لجهود إمكانية الوصول؛ الأدوات الآلية تكتشف 30% إلى 40% فقط من مشاكل a11y، بينما التجربة الفعلية بقارئ الشاشة هي التي تكشف الارتباك والأسماء المفقودة.",
      syntax: "// اختصارات قارئات الشاشة الأساسية:\n// NVDA: Insert + Down Arrow (بدء القراءة المستمرة)\n// VoiceOver: Control + Option + Right Arrow (العنصر التالي)",
      simpleExample: `// مثال يوضح كيف ينطق قارئ الشاشة كود الزر
import React from 'react';

export default function ScreenReaderTestPreview() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3 text-white">
      <h4 className="font-bold text-sky-400">محاكاة نطق قارئ الشاشة:</h4>
      
      {/* 
        ما يقرؤه NVDA / VoiceOver بصوت مسموع:
        "زر، سلة المشتريات، ثلاثة عناصر، غير مضغوط"
      */}
      <button
        aria-label="سلة المشتريات، 3 عناصر"
        className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-2"
      >
        <span>🛒</span>
        <span className="text-xs text-emerald-400 font-bold">3</span>
      </button>
    </div>
  );
}`,
      advancedExample: [
        "// دليل المطور لاختبار الواجهات باستخدام قارئ الشاشة VoiceOver (Mac) و NVDA (Windows)",
        "export const SCREEN_READER_CHEATSHEET = [",
        "  {",
        "    reader: 'NVDA (Windows - مجاني)',",
        "    shortcutStart: 'Ctrl + Alt + N لتشغيله.',",
        "    keyNavigation: 'استخدم الأسهم Up/Down للقراءة، و Tab للتنقل بين الأزرار والروابط، و H للقفز بين العناوين (Headings).'",
        "  },",
        "  {",
        "    reader: 'VoiceOver (macOS - مدمج)',",
        "    shortcutStart: 'Cmd + F5 لتفعيله أو إغلاقه.',",
        "    keyNavigation: 'استخدم مفتاحي VO (Ctrl + Option) مع الأسهم، واضغط VO + U لفتح نافذة الـ Rotor واستعراض كافة الروابط والعناوين.'",
        "  },",
        "  {",
        "    reader: 'iOS VoiceOver (iPhone)',",
        "    shortcutStart: 'تفعيله عبر الإعدادات ➔ تسهيلات الاستخدام ➔ VoiceOver.',",
        "    keyNavigation: 'التمرير بإصبع واحد لليمين للانتقال للعنصر التالي، والنقر المزدوج في أي مكان لتفعيل الزر المختار.'",
        "  }",
        "];",
        "",
        "export function logScreenReaderGuide() {",
        "  console.table(SCREEN_READER_CHEATSHEET);",
        "}"
      ].join('\n'),
      output: "يقدم إرشادات سريعة لتمكين أي مطور من تشغيل قارئ الشاشة في نظامه وتجربة قراءة التطبيق والتأكد من وضوح كافة الرسائل.",
      commonMistakes: "الاعتماد الحصري على أدوات الفحص الآلي (Lighthouse أو axe)؛ الأدوات الآلية لا تفهم السياق، ولا تستطيع إخبارك ما إذا كان نص الـ alt المكتوب مفيداً حقاً وواضحاً للأذن البشرية أم لا.",
      bestPractices: "قم بإجراء جلسة اختبار ربع سنوية بقارئ الشاشة VoiceOver أو NVDA لأهم شاشات موقعك (تسجيل الدخول، المتجر، والدفع) وافحص قائمة الـ Rotor للتأكد من سلامة العناوين.",
      visualDiagram: "Screen Reader Speech Flow:\nVisual Button: [🛒 3] ──► Reads: \"Button, Shopping Cart, 3 items, collapsed\"\nScreen Reader User understands context INSTANTLY without sight!"
    }
  ],
  quizzes: [
    {
      id: "q20.1.1",
      question: "ماذا تعني القاعدة الأولى لمواصفات WAI-ARIA الصادرة عن اتحاد W3C؟",
      options: [
        "يجب كتابة سمات ARIA على كافة عناصر الصفحة بدون استثناء.",
        "لا تستخدم ARIA إذا كان هناك وسم أو خاصية HTML أصلية دلالية تؤدي نفس الوظيفة.",
        "ARIA تعمل فقط مع تطبيقات الهواتف الذكية.",
        "سمات ARIA محظورة في مشاريع React الحديثة."
      ],
      correctAnswer: 1,
      explanation: "تنص القاعدة الذهبية الأولى لـ ARIA على: 'If you can use a native HTML element or attribute with the semantics and behavior you require already built in, then do so instead of re-purposing an element and adding ARIA.' لأن العناصر الأصلية توفر دعم الكيبورد والتركيز مجاناً."
    },
    {
      id: "q20.1.2",
      question: "ما هي نسبة تباين الألوان الدنيا المطلوبة للنصوص العادية في معيار WCAG 2.1 Level AA؟",
      options: [
        "1.5:1",
        "3.0:1",
        "4.5:1",
        "10:1"
      ],
      correctAnswer: 2,
      explanation: "يشترط معيار WCAG AA نسبة تباين لا تقل عن 4.5:1 للنصوص العادية، ونسبة 3.0:1 للنصوص الكبيرة والأيقونات الرسومية النشطة."
    },
    {
      id: "q20.1.3",
      question: "كيف يجب التعامل مع الصور التزيينية البحتة (Decorative Images) التي لا تقدم أي معلومة جديدة؟",
      options: [
        "حذف كود الـ HTML الخاص بها من الصفحة.",
        "تزويدها بخاصية alt فارغة alt=\"\" مع aria-hidden=\"true\" لإخبار قارئ الشاشة بتجاهلها بسلام دون قراءة اسم الملف.",
        "كتابة alt=\"صورة تزيينية جميلة\".",
        "تكرار الرابط في وسم alt."
      ],
      correctAnswer: 1,
      explanation: "ترك خاصية alt فارغة `alt=\"\"` يُعرّف الصورة بأنها تزيينية فقط، مما يجعل قارئات الشاشة تتجاوزها بصمت دون إزعاج المستخدم المكفوف بقراءة أسماء ملفات مشفرة."
    }
  ],
  exercise: {
    title: "تمرين عملي: تحويل كارت ترويجي معيب إلى مكوّن متاح 100% وفق WCAG AA",
    description: "لديك مكوّن يحتوي على div يعمل كزر، وصورة بدون alt، وتباعد لوني ضعيف، وإطار تركيز ملغي. قم بإعادة صياغته باستخدام وسوم Semantic HTML ونصوص بديلة ونسب تباين ممتازة ودعم كامل للكيبورد.",
    hints: [
      "استبدل <div onClick={...}> بـ <button> صريح.",
      "أضف نص alt مناسب للصورة.",
      "استخدم فئات تباين ألوان قوية مع تركيز مرئي focus-visible:ring-2."
    ],
    solution: `import React from 'react';

// المكون بعد تصحيح وتطبيق كافة معايير إمكانية الوصول
export function FullyAccessiblePromoCard({ title, description, imageUrl, imageAlt, onAction, actionLabel }) {
  return (
    <article className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 max-w-sm">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h3 className="text-lg font-bold text-white leading-tight">
        {title}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        {description}
      </p>
      <button
        type="button"
        onClick={onAction}
        className="w-full px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors"
      >
        {actionLabel}
      </button>
    </article>
  );
}`
  },
  infographic: {
    title: "أركان إمكانية الوصول (a11y) الأساسية",
    subtitle: "الدليل الشامل لبناء واجهات ويب تشمل كافة البشر بعدالة",
    steps: [
      { step: "1", title: "Semantic HTML First", desc: "استخدام الوسوم الدلالية (button, nav, main, header) لضمان أدوار ARIA المدمجة مجاناً." },
      { step: "2", title: "Keyboard Everywhere", desc: "إتاحة كافة الوظائف بزر Tab و Enter و Space مع الحفاظ على إطار التركيز المرئي focus-visible." },
      { step: "3", title: "Contrast & Alt Texts", desc: "تحقيق نسبة تباين 4.5:1 للنصوص وكتابة نصوص بديلة ذات معنى واستبعاد الصور التزيينية بـ alt=\"\"." },
      { step: "4", title: "ARIA & Screen Readers", desc: "استخدام سمات ARIA عند الحاجة فقط وتجربة قراءة الواجهة عملياً عبر VoiceOver أو NVDA." }
    ]
  }
};
