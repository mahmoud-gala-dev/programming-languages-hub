// src/data/sections/section26/topic1.js
// القسم 26: SEO وتطبيقات الويب التقدمية - الموضوع 1: تحسين محركات البحث في تطبيقات React

export const topic1 = {
  id: "26.1",
  title: "تحسين محركات البحث في تطبيقات React",
  englishTitle: "Search Engine Optimization (SEO) in React",
  description:
    "دليل شامل ومتعمق لإتقان تحسين محركات البحث (SEO) لتطبيقات React الحديثة: فهم آلية عمل عناكب البحث والفهرسة، الإدارة الديناميكية لعناوين الصفحات والأوصاف الوصفية، ضبط الروابط المعيارية Canonical URLs، إعداد بطاقات التواصل الاجتماعي Open Graph، بناء البيانات المنظمة JSON-LD لظهور النتائج الغنية، وفهم الفارق الجوهري بين CSR وSSR في ميزانية الزحف ومعدلات التحويل.",
  subtopics: [
    {
      id: "26.1.a",
      title: "مفهوم SEO وآلية عمل محركات البحث",
      englishTerm: {
        term: "Search Engine Optimization (SEO)",
        pronunciation: "سيرتش إنجين أوبتيميزيشن",
        meaning: "تحسين ظهور وترتيب صفحات الموقع في نتائج محركات البحث العضوية (غير المدفوعة)"
      },
      description:
        "تحسين محركات البحث (SEO) هو مجموعة من الاستراتيجيات والتقنيات الهندسية والتحريرية المصممة لرفع قابلية قراءة وفهم موقع الويب بواسطة برمجيات الزحف (Web Crawlers مثل Googlebot وBingbot). تمر العملية بثلاث مراحل رئيسية: الزحف (Crawling) لاكتشاف الروابط والصفحات، الفهرسة (Indexing) لتحليل النصوص والوسوم وفهم المعنى، والترتيب (Ranking) لعرض النتائج الأكثر صلة وسرعة وجودة للمستخدم. في تطبيقات React، التحدي الأكبر يكمن في مرحلة التصيير (Rendering Phase)، حيث يتعين على عناكب البحث تشغيل كود جافاسكريبت لبناء شجرة الـ DOM، وهو ما قد يستهلك ميزانية الزحف (Crawl Budget) أو يؤخر أرشفة المحتوى إذا لم يتم تهيئة الموقع معمارياً بالشكل السليم.",
      realWorldAnalogy:
        "محرك البحث يشبه أمين مكتبة ضخمة يقوم بمسح رفوف الكتب، وفهرسة عناوينها وموضوعاتها في سجل مركزي. إذا كان كتابك مكتوباً بحبر سحري لا يظهر إلا بعد تشغيل جهاز كهربائي معقد (كما هو الحال في تطبيقات CSR التي تحتاج تشغيل جافاسكريبت مكثف)، فقد يتجاوزه أمين المكتبة سريعاً مفضلاً الكتب المطبوعة بوضوح وجاهزة للقراءة الفورية (مثل صفحات SSR/SSG).",
      whyItMatters:
        "أكثر من 70% من الزيارات الرقمية عالية الجودة والتحويلات تأتي من نتائج البحث العضوي (Organic Search). أي تطبيق واجهات بدون استراتيجية SEO محكمة محكوم عليه بالعزلة الرقمية وانعدام الزوار الطبيعيين، مما يكلف الشركات مبالغ طائلة في الإعلانات المدفوعة.",
      syntax:
        "<!-- الهيكل الأساسي للوسوم الأولية لمحركات البحث داخل <head> -->\n<title>عنوان فريد ومعبر</title>\n<meta name=\"description\" content=\"ملخص دقيق لمحتوى الصفحة\" />\n<meta name=\"robots\" content=\"index, follow\" />",
      codeExample: `// مثال بسيط: إعداد وسوم SEO الأساسية داخل مكون React
import React, { useEffect } from 'react';

// مكون لضبط وسوم الصفحة يدوياً في المتصفح
function BasicSEO({ title, description }) {
  // استخدام التأثير الجانبي لتحديث وثيقة المتصفح
  useEffect(() => {
    // تحديث عنوان الصفحة المعروض في تبويب المتصفح ومحرك البحث
    document.title = title;
    
    // البحث عن وسم الوصف الحالي أو إنشائه إن لم يكن موجوداً
    let metaDescription = document.querySelector('meta[name="description"]');
    // التحقق مما إذا كان الوسم غير موجود
    if (!metaDescription) {
      // إنشاء عنصر meta جديد
      metaDescription = document.createElement('meta');
      // تحديد نوع الوسم كوصف للمحتوى
      metaDescription.name = 'description';
      // إلحاق الوسم برأس الوثيقة head
      document.head.appendChild(metaDescription);
    }
    // تعيين محتوى الوصف النصي للصفحة
    metaDescription.content = description;
  }, [title, description]);

  // إرجاع واجهة فارغة لأن الغرض تعديل الرأس فقط
  return null;
}

export default BasicSEO;`,
      advancedExample: `// مثال متقدم: نظام SEO متكامل لإدارة وسوم الرأس عبر React Helmet / React 19
import React from 'react';

// واجهة متكاملة لتوليد وسوم الرأس الدلالية
export function SeoHead({
  title,
  description,
  canonicalUrl,
  robots = 'index, follow',
  keywords = []
}) {
  // صياغة العنوان الكامل مع العلامة التجارية
  const fullTitle = title ? title + ' | أكاديمية المطورين' : 'أكاديمية المطورين - تعلم البرمجة';

  return (
    <>
      {/* في React 19 يتم رفع وسوم title وmeta تلقائياً إلى <head> */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonicalUrl && (
        <link rel="canonical" href={canonicalUrl} />
      )}
    </>
  );
}

// نموذج استخدام عملي في صفحة دورات البرمجة
export function CoursesPage() {
  return (
    <div className="p-8">
      {/* حقن وسوم SEO المخصصة لهذه الصفحة */}
      <SeoHead
        title="دورة احتراف React 19 الشاملة"
        description="تعلم React 19 وNext.js من الصفر حتى بناء المنصات السحابية الضخمة بأفضل الممارسات البرمجية."
        canonicalUrl="https://example.com/courses/react-mastery"
        keywords={['React', 'Next.js', 'برمجة', 'جافاسكريبت']}
      />
      <h1 className="text-2xl font-bold">محتوى الدورة التعليمية</h1>
      <p className="mt-2 text-gray-600">ابدأ رحلتك التعليمية الآن مع أفضل المشاريع الواقعية.</p>
    </div>
  );
}`,
      output:
        "عند زيارة الصفحة، يتم تحديث <title> وعنصر <meta name='description'> في رأس الوثيقة، مما يمكن روبوتات البحث من قراءة وصف الصفحة وفهرستها بدقة في صفحة نتائج البحث (SERP).",
      commonMistakes: [
        {
          mistake: "الاعتماد على عنوان ثابت واحد (مثل 'React App') لكافة صفحات التطبيق متعدد المسارات.",
          fix: "توليد عنوان ديناميكي فريد لكل صفحة ومسار يعكس بدقة المحتوى المحدد المعروض."
        },
        {
          mistake: "إخفاء المحتوى الأساسي خلف تفاعلات المستخدم (كتسجيل الدخول أو الضغط على زر) دون تقديمه في نص الصفحة.",
          fix: "توفير النصوص والمحتوى الدلالي في شجرة HTML الأساسية ليتمكن روبوت الفهرسة من قراءته فوراً."
        }
      ],
      bestPractices: [
        "اجعل العنوان فريداً ومعبراً ومكوناً من 50 إلى 60 حرفاً لتفادي اقتطاعه في صفحة نتائج Google.",
        "اكتب وصفاً جذاباً يتراوح بين 140 و160 حرفاً يشتمل على دعوة لاتخاذ إجراء (Call to Action).",
        "احرص على ألا تمنع ملف robots.txt أو وسم noindex محركات البحث عن طريق الخطأ في بيئة الإنتاج."
      ],
      infographic: {
        title: "دورة حياة الفهرسة والزحف في محركات البحث",
        nodes: [
          { label: "1. الاكتشاف (Crawling)", desc: "تتبع الروابط واكتشاف الصفحات عبر Googlebot" },
          { label: "2. التصيير (Rendering)", desc: "تنفيذ جافاسكريبت واستخراج كود HTML النهائي" },
          { label: "3. الفهرسة (Indexing)", desc: "تحليل الكلمات المفتاحية والعناوين وبناء الفهرس" },
          { label: "4. الترتيب (Ranking)", desc: "تحديد موقع الصفحة في نتائج البحث وفق الجودة والأداء" }
        ]
      }
    },
    {
      id: "26.1.b",
      title: "إدارة عنوان الصفحة Page Title ديناميكياً",
      englishTerm: {
        term: "Page Title Tag",
        pronunciation: "بيج تايتل تاج",
        meaning: "وسم عنوان الصفحة HTML الذي يظهر كعنوان رئيسي في نتائج البحث وتبويب المتصفح"
      },
      description:
        "يعتبر وسم <title> العامل الفردي الأكثر أهمية في الـ On-Page SEO بعد جودة المحتوى نفسه. في تطبيقات الصفحة الواحدة (SPA)، يتغير المحتوى دون إعادة تحميل المستند، مما يوجب على المطور تحديث عنوان الوثيقة ديناميكياً مع كل تنقل مسار. يجب أن يتبع العنوان نمطاً هيكلياً ثابتاً يسهل على المستخدم ومحرك البحث فهم موقع الصفحة ضمن التسلسل الهرمي للموقع (مثل: 'عنوان الصفحة | اسم القسم | اسم المنصة'). في React 19، أصبح بالإمكان كتابة وسم <title> مباشرة داخل أي مكون وظيفي، وسيقوم محرك React برفعه تلقائياً إلى داخل وسم <head> في مستند الـ HTML.",
      realWorldAnalogy:
        "عنوان الصفحة هو لافتة المتجر الكبيرة المعلقة في الواجهة الرئيسية. إذا كانت كل المتاجر في المركز التجاري تحمل نفس اللافتة المبهمة 'متجر'، فلن يعرف الزبون ماذا تبيع، بينما لافتة مثل 'مخبوزات باريسية طازجة | متجر الأناقة' تخبر الجميع فوراً بطبيعة المحتوى.",
      whyItMatters:
        "العنوان هو أول ما يراه المستخدم في صفحة نتائج البحث SERP. عنوان دقيق وجذاب يرفع نسبة النقر إلى الظهور (Click-Through Rate - CTR) بأكثر من 40%، وهو إشارة ترتيب مباشرة وقوية لخوارزميات Google.",
      syntax:
        "// React 19 المدمج\n<title>دورة React المتقدمة - أكاديمية الويب</title>\n\n// المتصفح التقليدي\ndocument.title = 'دورة React المتقدمة - أكاديمية الويب';",
      codeExample: `// مثال بسيط: تحديث العنوان ديناميكياً بناءً على بيانات المقال
import React, { useEffect } from 'react';

function ArticleView({ articleTitle }) {
  // تحديث العنوان مع تغير اسم المقال
  useEffect(() => {
    // وضع نمط موحد: عنوان المقال متبوعاً باسم المدونة
    document.title = articleTitle + ' - مدونة التقنية الحديثة';
  }, [articleTitle]);

  return (
    <article className="p-4">
      {/* ترويسة المقال الرئيسية */}
      <h1 className="text-xl font-bold">{articleTitle}</h1>
      <p className="mt-2 text-gray-700">محتوى المقال التثقيفي والشرح البرمجي العميق...</p>
    </article>
  );
}

export default ArticleView;`,
      advancedExample: `// مثال متقدم: نظام إدارة العناوين الموحد مع القوالب والتنظيف
import React, { createContext, useContext, useEffect, useState } from 'react';

// سياق إدارة العناوين
const TitleContext = createContext({
  setTitle: () => {},
  baseTitle: 'منصة التعلم الذكي'
});

// موفر سياق العناوين لكامل التطبيق
export function TitleProvider({ children, baseTitle = 'منصة التعلم الذكي' }) {
  const [currentTitle, setCurrentTitle] = useState('');

  // مراقبة وتحديث وثيقة المتصفح
  useEffect(() => {
    if (currentTitle) {
      document.title = currentTitle + ' | ' + baseTitle;
    } else {
      document.title = baseTitle;
    }
  }, [currentTitle, baseTitle]);

  return (
    <TitleContext.Provider value={{ setTitle: setCurrentTitle, baseTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

// خطاف مخصص لاستخدام العنوان وتغييره بسهولة في أي صفحة
export function useDocumentTitle(pageTitle) {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    // تعيين العنوان عند تركيب الصفحة
    setTitle(pageTitle);
    // استعادة العنوان الافتراضي عند مغادرة الصفحة
    return () => setTitle('');
  }, [pageTitle, setTitle]);
}

// تطبيق الخطاف في مكون صفحة المنتجات
export function ProductsPage({ categoryName = 'الكتب البرمجية' }) {
  // استدعاء الخطاف المخصص لتحديث العنوان تلقائياً
  useDocumentTitle(categoryName);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">تصفح {categoryName}</h2>
      <p className="text-gray-500">اختر من بين مئات الكتب التخصصية المتاحة.</p>
    </div>
  );
}`,
      output:
        "يتحول عنوان التبويب في المتصفح ونتائج البحث إلى 'الكتب البرمجية | منصة التعلم الذكي'، مع تنظيف العنوان تلقائياً عند الانتقال إلى صفحة أخرى.",
      commonMistakes: [
        {
          mistake: "تجاوز طول 60 حرفاً في العنوان، مما يؤدي إلى اقتطاعه وظهور نقاط (...) قبيحة في نتائج بحث Google.",
          fix: "الحفاظ على طول العنوان بين 50 و60 حرفاً، ووضع الكلمة المفتاحية الأهم في بداية العنوان."
        },
        {
          mistake: "حشو الكلمات المفتاحية (Keyword Stuffing) مثل 'شراء حذاء، أحذية رخيصة، متجر أحذية، أفضل حذاء'.",
          fix: "صياغة جملة طبيعية جذابة ومقروءة للمستخدم البشري تلخص القيمة الحقيقية للصفحة."
        }
      ],
      bestPractices: [
        "ضع الكلمة المفتاحية المستهدفة في أول 3 كلمات من العنوان لزيادة وزنها الدلالي.",
        "استخدم فاصلاً قياسياً أنيقاً مثل الواصلة العمودية (|) أو الشرطة (-) بين عنوان الصفحة واسم الموقع.",
        "اجعل العنوان يتطابق دلالياً مع وسم <h1> الرئيسي في الصفحة لتعزيز المصداقية والترابط الموضوعي."
      ],
      infographic: {
        title: "الهيكل المثالي لعنوان صفحة الويب Page Title",
        nodes: [
          { label: "الكلمة المفتاحية الأساسية", desc: "أول 30 حرفاً: الموضوع المباشر للبحث" },
          { label: "الفاصل الدلالي", desc: "رمز أنيق مثل | أو - يفصل الموضوع عن الهوية" },
          { label: "العلامة التجارية / الموقع", desc: "آخر 15-20 حرفاً لترسيخ الوعي بالاسم التجاري" },
          { label: "الحد الأقصى", desc: "55 إلى 60 حرفاً (حوالي 600 بكسل عرض في Google)" }
        ]
      }
    },
    {
      id: "26.1.c",
      title: "إدارة الوصف التعريفي Meta Description",
      englishTerm: {
        term: "Meta Description",
        pronunciation: "ميتا ديسكريبشن",
        meaning: "وسم وصفي غير مرئي مباشرة في الصفحة، يمثل المقتطف التفسيري أسفل العنوان في محركات البحث"
      },
      description:
        "وسم Meta Description هو فقرة تسويقية ملخصة تشرح محتوى الصفحة لمحركات البحث والمستخدمين. بالرغم من أن Google صرحت بأن محتوى هذا الوسم لا يؤثر بصورة مباشرة ومطلقة في خوارزمية الترتيب الرياضية، إلا أنه العامل الأقوى في تحديد نسبة النقر (CTR). إذا كان الوصف جذاباً وواضحاً، سينقر المستخدم على رابط موقعك حتى وإن كان ترتيبه الثاني أو الثالث. إذا لم تقم بتحديد وصف مخصص، فسيقوم محرك البحث باقتطاع نصوص عشوائية من أول الصفحة، والتي غالباً ما تكون عناصر قوائم أو أزرار غير مفهومة سياقياً.",
      realWorldAnalogy:
        "إذا كان العنوان هو اسم المنتج على الغلاف، فالـ Meta Description هو الملخص المكتوب على ظهر الغلاف الذي يقنع القارئ بفتح الكتاب وشرائه بدلاً من إعادة وضعه على الرف.",
      whyItMatters:
        "يرفع الوصف المصاغ بإحكام نسبة التحويل وزيارات الموقع بنسبة تتجاوز 30%، ويمنحك فرصة ذهبية لعرض المزايا الفريدة (مثل: شحن مجاني، كود تجريبي مجاني، شرح خطوة بخطوة).",
      syntax:
        "<meta name=\"description\" content=\"اكتشف أقوى دورة تدريبية لتعلم React 19 باللغة العربية مع تطبيقات عملية ومشاريع تخرج حقيقية.\" />",
      codeExample: `// مثال بسيط: تعيين وسم الوصف ديناميكياً لكل مقال
import React, { useEffect } from 'react';

function DynamicDescription({ descriptionText }) {
  useEffect(() => {
    // العثور على وسم الوصف الحالي
    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    // تحديث المحتوى بالنص الجديد
    metaTag.setAttribute('content', descriptionText);
  }, [descriptionText]);

  return null;
}

export default DynamicDescription;`,
      advancedExample: `// مثال متقدم: مكون MetaDescription متكامل مع فحص الطول والتحذيرات
import React from 'react';

export function MetaDescriptionWatcher({ text, minChars = 120, maxChars = 160 }) {
  // حساب عدد الأحرف الحالي
  const length = text ? text.length : 0;
  // فحص ما إذا كان الطول مناسباً
  const isValidLength = length >= minChars && length <= maxChars;

  return (
    <>
      {/* حقن الوسم مباشرة في رأس الصفحة */}
      <meta name="description" content={text} />

      {/* لوحة تحذير بيئة التطوير لمساعدة الفريق على ضبط الـ SEO */}
      {process.env.NODE_ENV === 'development' && !isValidLength && (
        <div className="p-3 bg-amber-900/30 border border-amber-600 rounded-lg text-amber-200 text-xs">
          ⚠️ تنبيه SEO: طول الوصف ({length} حرف) غير مثالي! المدى الموصى به هو بين {minChars} و {maxChars} حرفاً.
        </div>
      )}
    </>
  );
}

// نموذج استخدام عملي
export function BlogPost() {
  const postSummary = "تعرف على أسرار React 19 المتقدمة: كيفية استخدام React Server Components والعمليات الخادمة Server Actions لبناء تطبيقات خارقة السرعة وبصفر جافاسكريبت.";

  return (
    <div className="max-w-2xl mx-auto p-4">
      <MetaDescriptionWatcher text={postSummary} />
      <h1 className="text-3xl font-bold">أسرار معمارية React 19</h1>
      <p className="mt-4 leading-relaxed text-gray-800">{postSummary}</p>
    </div>
  );
}`,
      output:
        "يتم حقن وسم الوصف النصي في الـ DOM، ويظهر في لوحة نتائج Google كمقتطف نصي متناسق وجذاب يشجع الباحث على الدخول إلى الموقع.",
      commonMistakes: [
        {
          mistake: "نسخ نفس الوصف التعريفي وتكراره عبر مئات الصفحات والمنتجات المختلفة.",
          fix: "كتابة وصف مخصص وفريد لكل صفحة يعكس القيمة الفريدة للمحتوى المعروض فيها."
        },
        {
          mistake: "كتابة وصف قصير جداً (مثل: 'صفحة هواتف') مما يدفع Google لتجاهله وتوليد مقتطف تلقائي غير منسق.",
          fix: "صياغة وصف غني يتراوح بين 140 إلى 155 حرفاً يحتوي على عبارات مفتاحية طبيعية."
        }
      ],
      bestPractices: [
        "ضمن الوصف عبارة واضحة تحفز على النقر مثل: 'اكتشف الآن'، 'حمل نسختك المجانية'، أو 'اقرأ الدليل الكامل'.",
        "تجنب استخدام علامات الاقتباس المزدوجة (\") داخل نص الوصف لأنها قد تقطع كود HTML لخاصية content.",
        "تأكد من أن الكلمة المفتاحية المستهدفة موجودة في الوصف، حيث تقوم محركات البحث بتظليلها بالخط العريض عند مطابقة استعلام المستخدم."
      ],
      infographic: {
        title: "المعايير الذهبية لصياغة الـ Meta Description",
        nodes: [
          { label: "الطول المثالي", desc: "بين 140 و155 حرفاً لتفادي الاقتطاع على شاشات الجوال والحاسوب" },
          { label: "القيمة المضافة", desc: "توضيح ما سيستفيده القارئ بدقة داخل هذه الصفحة المحددة" },
          { label: "الكلمة المفتاحية", desc: "تضمين الكلمة الرئيسية لتظهر بالخط العريض عند مطابقة بحث المستخدم" },
          { label: "الدعوة للتحرك CTA", desc: "إنهاء المقتطف بفعل أمر مشجع مثل: تعرف على المزيد، جرب مجاناً" }
        ]
      }
    },
    {
      id: "26.1.d",
      title: "استخدام الروابط المعيارية Canonical URLs",
      englishTerm: {
        term: "Canonical URL",
        pronunciation: "كانونيكال يو آر إل",
        meaning: "رابط معتمد يُبلغ محركات البحث بالنسخة الأصلية الرسمية للصفحة لمنع مشكلة المحتوى المكرر"
      },
      description:
        "في تطبيقات الويب وتطبيقات React، يمكن الوصول إلى نفس الصفحة عبر عدة روابط مختلفة، مثل الروابط مع معلمات التتبع (مثل: ?utm_source=facebook أو ?ref=newsletter) أو الترتيب والتصفية (مثل: /products?sort=price_asc) أو الفروقات بين بروتوكولات https/http ووجود أو عدم وجود www. بدون وسم الرابط المعياري rel='canonical'، قد تعتبر محركات البحث هذه الروابط نسخاً مكررة، مما يؤدي إلى تشتيت سلطة الصفحة (PageRank Dilution) ومعاقبة الموقع بتراجع ترتيبه. وسم Canonical يحدد بشكل قاطع أي رابط هو المرجع الأصلي الذي يجب أرشفته واحتساب الروابط الواردة لصالحه.",
      realWorldAnalogy:
        "إذا كان لديك عدة نسخ مطبوعة ومصورة من نفس وثيقة العقد، فإنك تضع الختم الذهبي الرسمي على النسخة الأصلية فقط ليتم اعتمادها قانونياً، بينما النسخ الأخرى مجرد صور مساعدة.",
      whyItMatters:
        "يمنع تشتيت قوة ترتيب صفحات الموقع وتجنب عقوبات المحتوى المكرر (Duplicate Content Penalty)، ويضمن تركيز كافة إشارات الزحف والروابط الخارجية على الرابط المستهدف رسمياً.",
      syntax:
        "<link rel=\"canonical\" href=\"https://www.example.com/blog/react-seo-guide\" />",
      codeExample: `// مثال بسيط: مكون لتعيين الرابط المعياري للصفحة
import React, { useEffect } from 'react';

function CanonicalLink({ url }) {
  useEffect(() => {
    // البحث عن وسم الرابط المعياري الحالي
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    // تعيين الرابط المطلق
    link.setAttribute('href', url);
  }, [url]);

  return null;
}

export default CanonicalLink;`,
      advancedExample: `// مثال متقدم: توليد الرابط المعياري التلقائي مع تنظيف معاملات التتبع في React Router
import React, { useEffect } from 'react';

// مكون ينظف معاملات الاستعلام ويحدد الرابط المعياري النظيف
export function AutoCanonicalizer({ baseUrl = 'https://mysite.com' }) {
  useEffect(() => {
    // قراءة المسار النظيف فقط بدون استعلامات التتبع
    const currentPath = window.location.pathname;
    // تركيب الرابط المعياري المعتمد
    const cleanCanonicalUrl = baseUrl.replace(/\\/$/, '') + currentPath;

    // جلب أو إنشاء وسم الكانونيكال
    let linkElement = document.querySelector('link[rel="canonical"]');
    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.rel = 'canonical';
      document.head.appendChild(linkElement);
    }

    // إسناد الرابط النظيف
    linkElement.href = cleanCanonicalUrl;
  }, [baseUrl]);

  return null;
}

// نموذج استخدام داخل تطبيق بمتجر إلكتروني
export function ProductCatalog() {
  return (
    <div className="p-6">
      {/* حتى لو كان الرابط /products?page=2&sort=asc&utm_campaign=winter */}
      {/* سيتم إخبار محرك البحث بأن الرابط الأصلي هو /products */}
      <AutoCanonicalizer baseUrl="https://shop.example.com" />
      <h1 className="text-2xl font-bold">دليل المنتجات البرمجية</h1>
      <p className="text-gray-600">تصفح أحدث الحزم التعليمية المعتمدة.</p>
    </div>
  );
}`,
      output:
        "يتم إدراج <link rel='canonical' href='https://shop.example.com/products' /> داخل رأس الصفحة، مما يحمي الترتيب من التشتت بسبب معلمات الاستعلام.",
      commonMistakes: [
        {
          mistake: "استخدام رابط نسبي (مثل: href='/products') بدلاً من رابط مطلق كامل (Absolute URL).",
          fix: "استخدام رابط كامل يتضمن البروتوكول والنطاق بالكامل دائماً (https://example.com/products)."
        },
        {
          mistake: "توجيه رابط الكانونيكال لصفحة تعيد التوجيه 301 أو تعطي خطأ 404.",
          fix: "التأكد من أن الرابط المعياري يشير مباشرة إلى صفحة سليمة وحية برمز استجابة 200 OK."
        }
      ],
      bestPractices: [
        "اعتمد صيغة موحدة لنطاقك: إما مع www أو بدونها، ومع / في النهاية أو بدونها، والتزم بها في كافة وسوم canonical.",
        "في صفحات التصفح المرقمة (Pagination)، وجه الكانونيكال إلى الصفحة نفسها برقمها وليس للصفحة الأولى، إلا إذا وُجدت صفحة 'عرض الكل'.",
        "احرص على تطابق رابط الكانونيكال مع الرابط المذكور في ملف sitemap.xml بدقة."
      ],
      infographic: {
        title: "آلية عمل الروابط المعيارية Canonical URLs",
        nodes: [
          { label: "رابط مع تتبع UTM", desc: "site.com/item?utm_source=fb" },
          { label: "رابط مع فرز الأسعار", desc: "site.com/item?sort=asc" },
          { label: "رابط بروتوكول بديل", desc: "http://site.com/item" },
          { label: "🎯 الرابط المعياري المعتمد", desc: "https://site.com/item (النسخة الوحيدة المفهرسة)" }
        ]
      }
    },
    {
      id: "26.1.e",
      title: "إعداد وسوم بطاقات التواصل الاجتماعي Open Graph",
      englishTerm: {
        term: "Open Graph Protocol (OG Tags)",
        pronunciation: "أوبن جراف بروتوكول",
        meaning: "مجموعة وسوم تعريفية تتيح لمنصات التواصل كفيسبوك ولينكدإن وإكس عرض بطاقات معاينة تفاعلية غنية"
      },
      description:
        "بروتوكول Open Graph هو معيار أنشأته شركة فيسبوك وتبنته كافة المنصات الاجتماعية مثل LinkedIn وتطبيقات المراسلة مثل WhatsApp وTelegram وسلاك. عندما يقوم مستخدم بنسخ رابط تطبيقك ومشاركته، يقوم روبوت المنصة (مثل Facebook External Hit) بزيارة الرابط وقراءة وسوم og:title وog:description وog:image وog:url. إذا لم تكن هذه الوسوم متوفرة بشكل صحيح في كود الـ HTML الأساسي للصفحة، فستظهر المشاركة كنص رمادي باهت بدون صورة، مما يقلل بشكل مأساوي من رغبة المتابعين في النقر على الرابط.",
      realWorldAnalogy:
        "وسوم Open Graph هي كبطاقة الهوية الأنيقة المرفقة مع الهدية؛ بدلاً من إرسال طرد مغلف بورق جرائد مجهول الهوية، ترسل هدية فاخرة تحمل بطاقة مذهلة عليها صورة واضحة وعنوان براق يجذب الأنظار فوراً.",
      whyItMatters:
        "مشاركات الروابط ذات البطاقات التفاعلية والصور الواضحة تحظى بنسبة نقر (CTR) ومشاركة وتفاعل أعلى بنسبة 250% مقارنة بالروابط النصية الجافة.",
      syntax:
        "<meta property=\"og:title\" content=\"عنوان المقال الرائع\" />\n<meta property=\"og:description\" content=\"موجز شيق عن المقال\" />\n<meta property=\"og:image\" content=\"https://example.com/thumb.jpg\" />\n<meta property=\"og:url\" content=\"https://example.com/article\" />\n<meta name=\"twitter:card\" content=\"summary_large_image\" />",
      codeExample: `// مثال بسيط: مكون بطاقة Open Graph الأساسية
import React from 'react';

function OpenGraphTags({ title, description, imageUrl, pageUrl }) {
  return (
    <>
      {/* وسوم Open Graph المعتمدة لفيسبوك ولينكدإن */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={pageUrl} />

      {/* وسوم Twitter Cards الخاصة بمنصة إكس */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}

export default OpenGraphTags;`,
      advancedExample: `// مثال متقدم: مولد وسوم Open Graph ديناميكي مع ضبط أبعاد الصور ونوع المحتوى
import React from 'react';

export function SocialShareHead({
  title,
  description,
  imageUrl,
  canonicalUrl,
  siteName = 'أكاديمية البرمجة الحديثة',
  type = 'article',
  publishedTime,
  author
}) {
  return (
    <>
      {/* بيانات Open Graph الأساسية */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* صورة المعاينة مع تحديد الأبعاد الموصى بها 1200x630 */}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* في حال كان المحتوى مقالاً يتم تضمين توقيت النشر والمؤلف */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* بطاقة إكس الكبيرة لضمان عرض الصورة بالعرض الكامل */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}

// تجربة استخدام المكون في صفحة الإعلان عن ورشة عمل
export function WorkshopPage() {
  return (
    <div className="p-8">
      <SocialShareHead
        title="ورشة عمل: بناء تطبيقات Next.js 15 الفائقة"
        description="انضم إلينا في ورشة عمل تفاعلية حية لمدة 3 ساعات لبناء وتوزيع نظام خادم كامل."
        imageUrl="https://cdn.example.com/banners/nextjs15-workshop.png"
        canonicalUrl="https://example.com/workshops/nextjs15"
        publishedTime="2026-10-29T10:00:00Z"
        author="م. أحمد الشافعي"
      />
      <h1 className="text-3xl font-bold">ورشة العمل التفاعلية</h1>
      <p className="mt-2 text-gray-600">سجل الآن لضمان مقعدك في البث المباشر.</p>
    </div>
  );
}`,
      output:
        "عند نسخ رابط الصفحة ولصقه في WhatsApp أو Facebook أو Twitter، يقوم التطبيق بعرض صورة مصغرة جذابة وعريضة مع عنوان واضح ووصف مفصل، مما يشجع المستخدم على النقر.",
      commonMistakes: [
        {
          mistake: "استخدام رابط نسبي للصورة (مثل: /images/thumb.jpg) بدلاً من رابط سحابي كامل يبدأ بـ https://.",
          fix: "استخدام رابط مطلق مباشر للصورة يبدأ بـ https:// دائماً لأن روبوتات المنصات الخارجية لا تعرف نطاق موقعك تلقائياً."
        },
        {
          mistake: "استخدام صورة بأبعاد صغيرة جداً (أقل من 200x200 بكسل) مما يؤدي إلى رفضها من قِبل المنصات.",
          fix: "استخدام أبعاد 1200x630 بكسل بنسبة أبعاد 1.91:1 للحصول على أجمل ظهور عريض على كافة الشاشات."
        }
      ],
      bestPractices: [
        "اختبر روابطك دائماً عبر أدوات المعاينة الرسمية: Facebook Sharing Debugger وTwitter Card Validator.",
        "احرص على ألا يتجاوز حجم ملف صورة الـ OG مساحة 1 ميجابايت لضمان سرعة تحميلها للروبوتات دون مهلة انتظار.",
        "ضع النصوص الهامة في مركز صورة الـ OG لتفادي قصها عند تغيير أبعاد العرض بين المنصات المختلفة."
      ],
      infographic: {
        title: "الأبعاد والمواصفات القياسية لصور Open Graph",
        nodes: [
          { label: "الأبعاد الموصى بها", desc: "1200 × 630 بكسل بنسبة عرض لارتفاع 1.91:1" },
          { label: "صيغة الملف", desc: "JPG أو PNG مضغوطة بحجم أقل من 1MB" },
          { label: "المحتوى البصري", desc: "شعار واضح + عنوان قصير مقروء + خلفية غير مشوشة" },
          { label: "نوع البطاقة في X", desc: "summary_large_image للحصول على العرض الكامل" }
        ]
      }
    },
    {
      id: "26.1.f",
      title: "إعداد البيانات المنظمة Structured Data عبر JSON-LD",
      englishTerm: {
        term: "Structured Data (JSON-LD)",
        pronunciation: "ستركتشر داتا (جيسون إل دي)",
        meaning: "كود منظم بصيغة JSON وفق معايير Schema.org يخبر محركات البحث بالمعنى الدلالي الدقيق للمحتوى"
      },
      description:
        "البيانات المنظمة (Structured Data) هي الطريقة الأكثر تطوراً لمخاطبة عقل محرك البحث مباشرة بلغة لا تقبل اللبس. بدلاً من أن يحاول Googlebot تخمين ما إذا كان هذا الرقم هو 'سعر منتج' أو 'تاريخ ميلاد' أو 'تقييم نجوم'، يحدد كود JSON-LD المعتمد من Schema.org هوية الكيان ونوعه (مقال Article، منتج Product، حدث Event، أسئلة شائعة FAQ، مسار تنقل Breadcrumb). عندما يتعرف محرك البحث على هذه البيانات، فإنه يكافئ الموقع بعرض النتائج الغنية (Rich Snippets) في صفحة البحث، مثل نجوم التقييم الصفراء، الأسعار، مدى توفر المنتج في المخزون، أو قوائم الأسئلة والأجوبة المنسدلة.",
      realWorldAnalogy:
        "بدلاً من إعطاء المفتش مجلد أوراق مبعثرة لكي يقرأها بنفسه ويستنتج التفاصيل، تقدم له استمارة حكومية رسمية مجدولة ومختومة تحتوي على خانات محددة: الاسم، السعر، التقييم، وتاريخ الصلاحية.",
      whyItMatters:
        "النتائج الغنية (Rich Snippets) تزيد من مساحة موقعك المرئية في نتائج البحث بنسبة تزيد عن 40%، وتضاعف نسبة النقر والتحويل، وتؤهل موقعك للظهور في لوحات المعرفة التلقائية ومساعدات الذكاء الاصطناعي (AI Overviews).",
      syntax:
        "<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Article\",\n  \"headline\": \"عنوان المقال\",\n  \"author\": { \"@type\": \"Person\", \"name\": \"أحمد\" }\n}\n</script>",
      codeExample: `// مثال بسيط: حقن بيانات Schema لمقال في React
import React from 'react';

function ArticleSchema({ title, authorName, datePublished, imageUrl }) {
  // بناء كائن البيانات المنظمة وفق معيار Schema.org
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    image: imageUrl,
    datePublished: datePublished,
    author: {
      '@type': 'Person',
      name: authorName
    }
  };

  return (
    // حقن الكود كنص داخل عنصر script من نوع application/ld+json
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default ArticleSchema;`,
      advancedExample: `// مثال متقدم: نظام Schema متكامل للأسئلة الشائعة FAQPage وتقييم المنتجات
import React from 'react';

export function ProductWithFaqSchema({
  productName,
  price,
  currency = 'USD',
  ratingValue,
  reviewCount,
  faqs = []
}) {
  // مخطط المنتج وتقييم المراجعات
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount
    }
  };

  // مخطط الأسئلة الشائعة FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <>
      {/* حقن مخطط المنتج */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* حقن مخطط الأسئلة الشائعة */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}

// تجربة استخدام المكون في صفحة دورة تدريبية
export function CourseDetailsView() {
  const faqList = [
    { question: 'هل الدورة مناسبة للمبتدئين؟', answer: 'نعم، تبدأ الدورة من الصفر مع تغطية شاملة لأساسيات جافاسكريبت ثم React.' },
    { question: 'هل يحصل المتدرب على شهادة إتمام؟', answer: 'نعم، يحصل المتدرب على شهادة رقمية معتمدة قابلة للتحقق ومشاريع بورتفوليو.' }
  ];

  return (
    <div className="p-6">
      <ProductWithFaqSchema
        productName="دورة React 19 الاحترافية المتكاملة"
        price="49.99"
        ratingValue="4.9"
        reviewCount="320"
        faqs={faqList}
      />
      <h1 className="text-2xl font-bold">دورة React 19 الشاملة</h1>
      <p className="text-emerald-600 font-bold mt-2">السعر: $49.99 | التقييم: 4.9 ⭐ (320 تقييم)</p>
    </div>
  );
}`,
      output:
        "يتم تضمين كود JSON-LD في صفحة الـ HTML، مما يؤهل الصفحة للظهور في نتائج بحث Google مع نجوم التقييم الصفراء وقائمة الأسئلة المنسدلة التفاعلية (Rich Results).",
      commonMistakes: [
        {
          mistake: "تضمين بيانات في كود JSON-LD لا تظهر ولا تتطابق مع المحتوى المعروض للمستخدم الحقيقي في الصفحة.",
          fix: "التأكد من تطابق الأسعار والتقييمات والعناوين في كود JSON-LD تماماً مع ما يراه الزائر البشري في الصفحة لتفادي العقوبات اليدوية من Google."
        },
        {
          mistake: "أخطاء في بناء كود الـ JSON (مثل فواصل إضافية أو أقواس غير مغلقة) تجعل الكود غير صالح للقراءة.",
          fix: "استخدام أداة Google Rich Results Test للتحقق من صحة الكود وسلامة تركيبه قبل اعتماده في بيئة الإنتاج."
        }
      ],
      bestPractices: [
        "استخدم صيغة JSON-LD دائماً بدلاً من معايير Microdata أو RDFa لأن Google توصي بـ JSON-LD رسمياً لسهولة صيانته وفصله عن كود الواجهة.",
        "استخدم مخطط BreadcrumbList لتنظيم مسار التنقل وتسهيل فهم بنية مجلدات موقعك في نتائج البحث.",
        "احرص على استخدام JSON.stringify لتوليد النصوص لتجنب أخطاء الهروب النصي وتأمين الكود ضد ثغرات XSS."
      ],
      infographic: {
        title: "أنواع النتائج الغنية التي يتيحها كود JSON-LD",
        nodes: [
          { label: "Product & Rating", desc: "عرض نجوم التقييم والسعر وحالة التوفر في المخزن" },
          { label: "FAQ Page", desc: "عرض قائمة أسئلة وأجوبة منسدلة داخل صفحة نتائج البحث" },
          { label: "Article / TechArticle", desc: "الظهور في شريط الأخبار العاجلة وموجز Google Discover" },
          { label: "Breadcrumbs", desc: "استبدال الرابط الطويل بمسار تصفح أنيق (الرئيسية > الدورات > React)" }
        ]
      }
    },
    {
      id: "26.1.g",
      title: "تحسين بنية الروابط الداخلية والتنقل الدلالي",
      englishTerm: {
        term: "Internal Linking & Semantic Navigation",
        pronunciation: "إنترنال لينكنج آند سيمانتك نافيجيشن",
        meaning: "بناء شبكة روابط داخلية صحيحة باستخدام عناصر <a> لتوزيع قوة الترتيب وتسهيل زحف العناكب"
      },
      description:
        "في تطبيقات React، يقع العديد من المطورين في خطأ فادح باستخدام عناصر <div> أو <button> مع أحداث onClick والتنقل عبر useNavigate() للتنقل بين الصفحات. برمجيات زحف محركات البحث لا تقوم بالضغط على الأزرار ولا تنفذ أحداث النقر الوهمية لاكتشاف الصفحات، بل تبحث تحديداً عن وسوم الرابط القياسية <a href='...'> لتتبعها واستخراج الروابط منها. علاوة على ذلك، تلعب نصوص الروابط (Anchor Text) دوراً جوهرياً في تعريف محرك البحث بموضوع الصفحة المستهدفة. بناء بنية هرمية واضحة تضمن ألا تبعد أي صفحة هامة أكثر من 3 نقرات عن الصفحة الرئيسية (Crawl Depth).",
      realWorldAnalogy:
        "الروابط الداخلية في الموقع تشبه شبكة الطرق والجسور بين مدن الدولة. إذا كانت الطرق ممهدة ومكتوب عليها لافتات واضحة تشير إلى الوجهة، ستصل كل الشاحنات (الزوار وروبوتات البحث) بسلاسة، أما إذا كانت الطرق أبواباً سرية تتطلب كلمة سر (أحداث onClick)، فستبقى مدنك معزولة ومهجورة.",
      whyItMatters:
        "الروابط الداخلية المتقنة تنقل سلطة النطاق (PageRank Equity) من الصفحات القوية إلى الصفحات الجديدة، وتخفض معدل الارتداد عبر إبقاء المستخدمين داخل موقعك لأطول فترة ممكنة.",
      syntax:
        "// استخدام مكون Link الدلالي من مكتبات التوجيه\n<Link to=\"/courses/react\" aria-label=\"دورة تعلم رياكت الشاملة\">\n  دورة تعلم React 19 الشاملة\n</Link>",
      codeExample: `// مثال بسيط: الفرق بين التنقل الخاطئ للـ SEO والتنقل الدلالي الصحيح
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavigationComparison() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 p-4">
      {/* ❌ أسلوب خاطئ تماماً لـ SEO: زر بدون رابط لا تتبعه عناكب البحث */}
      <button
        onClick={() => navigate('/about')}
        className="px-4 py-2 bg-rose-600 text-white rounded"
      >
        من نحن (زر بدون رابط حقيقي)
      </button>

      {/* ✅ أسلوب صحيح دلالياً: يولد وسم <a href="/about"> تتبعه روبوتات Google */}
      <Link
        to="/about"
        className="inline-block px-4 py-2 bg-emerald-600 text-white rounded"
      >
        تعرف على فريق عمل الأكاديمية ورسالتنا
      </Link>
    </div>
  );
}

export default NavigationComparison;`,
      advancedExample: `// مثال متقدم: مكون شريط مسار التنقل الدلالي (Breadcrumbs) المتكامل مع JSON-LD
import React from 'react';
import { Link } from 'react-router-dom';

export function SemanticBreadcrumbs({ items }) {
  // بناء بيانات JSON-LD لمسار التنقل
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.url
    }))
  };

  return (
    <nav aria-label="مسار التنقل" className="text-sm text-gray-500 py-3">
      {/* حقن المخطط لمحركات البحث */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ol className="flex items-center space-x-2 space-x-reverse">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.url} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              {isLast ? (
                // العنصر الأخير هو الصفحة الحالية
                <span className="font-semibold text-gray-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                // العناصر السابقة روابط دلالية حقيقية
                <Link to={item.url} className="hover:text-emerald-600 transition">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// نموذج استخدام عملي
export function TutorialPage() {
  const trail = [
    { label: 'الرئيسية', url: 'https://example.com' },
    { label: 'المقالات التعليمية', url: 'https://example.com/tutorials' },
    { label: 'دليل تحسين SEO', url: 'https://example.com/tutorials/seo-guide' }
  ];

  return (
    <div className="p-6">
      <SemanticBreadcrumbs items={trail} />
      <h1 className="text-3xl font-bold mt-2">دليل تحسين الـ SEO لتطبيقات React</h1>
    </div>
  );
}`,
      output:
        "يتم إنشاء شجرة تنقل دلالية واضحة للمستخدم وروبوتات البحث، مما يساعد Google على فهم التسلسل الهرمي للموقع وفهرسة الأقسام الوسيطة بسلاسة.",
      commonMistakes: [
        {
          mistake: "استخدام نصوص روابط غامضة مثل 'اضغط هنا' أو 'المزيد' (Generic Anchor Text).",
          fix: "استخدام نصوص روابط وصفية تعبر بدقة عن محتوى الصفحة الهدف، مثل 'اقرأ الدليل الكامل لخطافات React'."
        },
        {
          mistake: "وجود صفحات يتيمة (Orphan Pages) لا يوجد أي رابط داخلي في الموقع يشير إليها.",
          fix: "التأكد من أن كل صفحة جديدة يتم ربطها من الأقسام ذات الصلة أو شريط التنقل أو الفهرس السفلي للموقع."
        }
      ],
      bestPractices: [
        "احرص على ألا يزيد عمق النقر (Click Depth) لأي صفحة حيوية عن 3 نقرات من الصفحة الرئيسية.",
        "استخدم السمة rel='nofollow' للروابط الخارجية غير الموثوقة أو روابط الإعلانات لحماية سمعة موقعك.",
        "راجع الروابط المعطلة (Broken Links 404) دورياً وأصلحها فوراً لتجنب إهدار ميزانية الزحف."
      ],
      infographic: {
        title: "هرمية الروابط الداخلية وعمق الزحف المثالي",
        nodes: [
          { label: "المستوى 0", desc: "الصفحة الرئيسية (أعلى قوة ترتيب وأول نقطة زحف)" },
          { label: "المستوى 1", desc: "الأقسام الرئيسية (المتجر، المدونة، الدورات) - نقرة واحدة" },
          { label: "المستوى 2", desc: "التصنيفات الفرعية والمقالات - نقرتان" },
          { label: "المستوى 3", desc: "تفاصيل المنتجات والمحتوى العميق - أقصى حد موصى به للزحف" }
        ]
      }
    },
    {
      id: "26.1.h",
      title: "أثر تصيير العميل CSR والتصيير الخادمي SSR على SEO",
      englishTerm: {
        term: "CSR vs SSR Impact on SEO",
        pronunciation: "سي إس آر فيرسس إس إس آر إمباكت أون إس إي أوه",
        meaning: "المقارنة الفنية بين تسليم HTML فارغ ومعالجته بالمتصفح مقابل تسليمه جاهزاً ومكتمل النصوص من الخادم"
      },
      description:
        "المعضلة التاريخية لتطبيقات React التقليدية المبنية على Client-Side Rendering (CSR) تكمن في أن الخادم يرسل ملف HTML شبه فارغ يحتوي على <div id='root'></div> مصحوباً بملف جافاسكريبت ضخم. عندما يصل Googlebot، فإنه يقوم بقراءة HTML أولاً في المرحلة الأولى؛ وإذا تطلب الأمر جافاسكريبت، فإنه يضع الصفحة في طابور انتظار التصيير (Render Queue)، والذي قد يستغرق أياماً أو أسابيع اعتماداً على ميزانية الزحف المخصصة لموقعك. في المقابل، مع Server-Side Rendering (SSR) أو Static Site Generation (SSG)، يُرسل كود HTML مكتمل النصوص والعناوين والصور في أول بايت، مما يضمن فهرسة لحظية كاملة وأداء فائقاً لمؤشرات أداء الويب الأساسية (Core Web Vitals).",
      realWorldAnalogy:
        "الـ CSR يشبه إرسال صندوق مسحوق خبيز ومكونات خام للزبون ليقوم بعجنها وخبزها بنفسه في المنزل قبل تناولها، بينما الـ SSR هو تسليم كعكة طازجة وساخنة جاهزة للأكل والتصوير والتقييم فور وصول عامل التوصيل.",
      whyItMatters:
        "المواقع التي تعتمد على SSR أو SSG تحظى بفهرسة أسرع بنسبة 80%، وأداء أعلى في سرعة أول رسم للمحتوى (First Contentful Paint - FCP)، وهو ما يرفع ترتيبها مباشرة في خوارزميات Page Experience لدى Google.",
      syntax:
        "// CSR: HTML أولي فارغ\n<div id=\"root\"></div>\n\n// SSR: HTML أولي غني بالمحتوى\n<div id=\"root\"><h1>عنوان المقال الجاهز</h1><p>النص المفهرس فوراً...</p></div>",
      codeExample: `// مثال توضيحي: محاكاة فحص ما يراه روبوت البحث في بيئة CSR مقابل SSR
import React, { useState, useEffect } from 'react';

function CrawlerInsightSimulator() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // جلب البيانات بعد اكتمال تحميل كود الجافاسكريبت (نمط CSR)
    setTimeout(() => {
      setData({ title: 'دورة React المتقدمة', price: '$99' });
    }, 1500);
  }, []);

  return (
    <div className="p-4 border rounded-xl bg-slate-900 text-white font-mono text-sm">
      <div className="text-amber-400 font-bold mb-2">🔍 فحص ما تراه عناكب البحث في اللحظة 0:</div>
      
      {/* في CSR تظهر رسالة التحميل الفارغة للروبوت إذا لم ينتظر تنفيذ الكود */}
      {!data ? (
        <div className="text-rose-400">
          &lt;div id="root"&gt;جارٍ تحميل المحتوى...&lt;/div&gt; ❌ محتوى غير مفهرس!
        </div>
      ) : (
        <div className="text-emerald-400">
          &lt;h1&gt;{data.title}&lt;/h1&gt; &lt;span&gt;{data.price}&lt;/span&gt; ✅ محتوى مفهرس!
        </div>
      )}
    </div>
  );
}

export default CrawlerInsightSimulator;`,
      advancedExample: `// مثال متقدم: استراتيجية الترطيب التدريجي والتحقق من نوع الروبوت لمعالجة الطلبات
import React from 'react';

// مكون يعرض المحتوى الحرج في هيكل HTML أولي يضمن قراءته فورياً
export function CriticalSeoContainer({ initialHtmlContent, children }) {
  return (
    <section className="seo-critical-wrapper">
      {/* حاوية للمحتوى النصي المفهرس المولد مسبقاً */}
      <div
        className="critical-seo-text"
        dangerouslySetInnerHTML={{ __html: initialHtmlContent }}
      />

      {/* المكون التفاعلي الذي يتم ترطيبه للعميل البشري */}
      <div className="interactive-client-tree">
        {children}
      </div>
    </section>
  );
}

// نموذج استخدام المكون لحماية تصنيف مقال تقني
export function TechArticlePage() {
  // محتوى HTML خادم تم إنشاؤه مسبقاً أثناء البناء SSG أو في الخادم SSR
  const preRenderedHtml = '<h1>تعلم React Server Components في عام 2026</h1><p>دليل معماري كامل لفهم الثورة الجديدة في عالم أطر عمل جافاسكريبت وكيفية إلغاء حزم العميل الزائدة.</p>';

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <CriticalSeoContainer initialHtmlContent={preRenderedHtml}>
        {/* أزرار وتفاعلات العميل الحية */}
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold">
            ❤️ حفظ في المفضلة
          </button>
          <button className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold">
            📢 مشاركة المقال
          </button>
        </div>
      </CriticalSeoContainer>
    </div>
  );
}`,
      output:
        "يضمن هذا الأسلوب قراءة العناكب للنصوص الكاملة فور استلام أول بايت من السيرفر، بينما يحصل الزائر البشري على كافة الإمكانات التفاعلية بمجرد اكتمال الترطيب.",
      commonMistakes: [
        {
          mistake: "الافتراض بأن Googlebot سيقوم دائماً بتشغيل كافة ملفات جافاسكريبت وانتظار استدعاءات API البطيئة في مواقع CSR.",
          fix: "الاعتماد على SSR أو SSG للمحتوى العام والتسويقي لضمان قراءة المحتوى فورياً دون الاعتماد على مرحلة التصيير المؤجلة."
        },
        {
          mistake: "استخدام أسلوب Cloaking (تقديم محتوى نصي مختلف كلياً للروبوت عن المحتوى المعروض للمستخدم الحقيقي).",
          fix: "تقديم نفس المحتوى للجميع التزاماً بإرشادات Google لتفادي الحظر والعقوبات الصارمة."
        }
      ],
      bestPractices: [
        "اختر أطر عمل تدعم التصيير الهجين مثل Next.js أو Remix للمشاريع التي تشكل الزيارات العضوية شريان حياتها.",
        "احرص على تقليل وقت استجابة الخادم الأول (Time to First Byte - TTFB) إلى أقل من 200 مللي ثانية في بيئات SSR.",
        "في حال اضطررت لاستخدام CSR خالص، استخدم حلول التوليد المسبق (Pre-rendering) للصفحات الثابتة قبل النشر."
      ],
      infographic: {
        title: "مقارنة مسار معالجة محركات البحث: CSR مقابل SSR",
        nodes: [
          { label: "مسار CSR (العميل)", desc: "تحميل HTML فارغ ➔ انتظار طابور التصيير ➔ تشغيل JS ➔ الفهرسة بعد أيام!" },
          { label: "مسار SSR (الخادم)", desc: "تحميل HTML غني بالنصوص ➔ فهرسة فورية مباشرة في الثواني الأولى ✅" },
          { label: "ميزانية الزحف", desc: "SSR يوفر 90% من استهلاك موارد خوادم محرك البحث مقارنة بالـ CSR" }
        ]
      }
    },
    {
      id: "26.1.i",
      title: "فحص قابلية الفهرسة وتوليد ملفات Sitemap وRobots",
      englishTerm: {
        term: "Indexability, Sitemap & Robots.txt",
        pronunciation: "إندكسبيلتي، سايت ماب آند روبوتس تكست",
        meaning: "الأدوات والملفات التنظيمية التي توجه روبوتات البحث للصفحات المسموح بفهرستها وتحدد خريطة الموقع"
      },
      description:
        "الفهرسة الناجحة تتطلب خطة إرشادية واضحة لمحركات البحث. ملف robots.txt هو بمثابة حارس البوابة الذي يحدد المسارات المسموح بالزحف إليها (Allow) والمسارات المحظورة (Disallow مثل لوحة الإدارة /admin أو مسارات الحساب الشخصي). بينما يمثل ملف sitemap.xml خريطة جغرافية رقمية تضم كافة روابط الصفحات العامة المتاحة مع تاريخ آخر تعديل لها وأولويتها. تكتمل المنظومة باستخدام أدوات الفحص المعتمدة مثل Google Search Console لفحص قابلية الزحف واختبار النتائج الغنية، وLighthouse للتحقق من سلامة وسوم الـ SEO والأداء.",
      realWorldAnalogy:
        "ملف robots.txt هو تعليمات الأمن عند مدخل المبنى ('المكاتب الإدارية ممنوعة، صالة العرض مفتوحة')، وملف sitemap.xml هو كتالوج دليل المعرض الموزع على الزوار ليرشدهم إلى كل الأجنحة بدقة دون أن يضيعوا في الممرات.",
      whyItMatters:
        "يضمن ملف robots.txt عدم إهدار ميزانية الزحف على صفحات لا قيمة لها لمحركات البحث، بينما يسرع sitemap.xml اكتشاف المقالات والمنتجات الجديدة خلال ساعات من نشرها بدلاً من أسابيع.",
      syntax:
        "# نموذج ملف robots.txt\nUser-agent: *\nDisallow: /admin/\nDisallow: /checkout/\nAllow: /\n\nSitemap: https://www.example.com/sitemap.xml",
      codeExample: `// مثال بسيط: محاكي التحقق من مسارات robots.txt في تطبيق React
import React, { useState } from 'react';

function RobotsChecker() {
  const [testUrl, setTestUrl] = useState('/products/shoes');

  // قائمة المسارات المحظورة المحددة في robots.txt
  const disallowedPaths = ['/admin', '/dashboard', '/cart', '/checkout'];

  // التحقق مما إذا كان المسار مسموحاً لمحركات البحث
  const isBlocked = disallowedPaths.some(blocked => testUrl.startsWith(blocked));

  return (
    <div className="p-4 border border-slate-700 bg-slate-900 rounded-xl text-white">
      <h3 className="text-sm font-bold text-slate-300">محلل فحص مسارات robots.txt</h3>
      <input
        type="text"
        value={testUrl}
        onChange={(e) => setTestUrl(e.target.value)}
        className="mt-2 w-full px-3 py-1.5 bg-slate-800 rounded border border-slate-700 text-sm font-mono text-emerald-400"
      />
      <div className="mt-3 text-xs">
        حالة الفهرسة المسموحة:{' '}
        {isBlocked ? (
          <span className="text-rose-400 font-bold">⛔ محظور من الزحف (Disallow)</span>
        ) : (
          <span className="text-emerald-400 font-bold">✅ مسموح بالزحف والفهرسة (Allow)</span>
        )}
      </div>
    </div>
  );
}

export default RobotsChecker;`,
      advancedExample: `// مثال متقدم: مولد خريطة الموقع sitemap.xml ديناميكياً بناءً على بيانات المقالات
// يُنفذ في جانب الخادم أو عبر مسار Route Handler / Server Action
export async function generateDynamicSitemapXml(articlesList, baseUrl = 'https://example.com') {
  // رأس ملف XML المعتمد لمحركات البحث
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n';

  // توليد عقد الروابط للصفحات الثابتة
  const staticUrls = [
    \`  <url>\\n    <loc>\${baseUrl}</loc>\\n    <changefreq>daily</changefreq>\\n    <priority>1.0</priority>\\n  </url>\\n\`,
    \`  <url>\\n    <loc>\${baseUrl}/courses</loc>\\n    <changefreq>weekly</changefreq>\\n    <priority>0.8</priority>\\n  </url>\\n\`
  ].join('');

  // توليد عقد الروابط للمقالات الديناميكية بناءً على تاريخ آخر تعديل
  const dynamicArticleUrls = articlesList.map(article => {
    return \`  <url>\\n\` +
      \`    <loc>\${baseUrl}/blog/\${article.slug}</loc>\\n\` +
      \`    <lastmod>\${article.updatedAt}</lastmod>\\n\` +
      \`    <changefreq>monthly</changefreq>\\n\` +
      \`    <priority>0.7</priority>\\n\` +
      \`  </url>\\n\`;
  }).join('');

  // إغلاق وسم الحاوية
  const xmlFooter = '</urlset>';

  // دمج كافة الأجزاء في نص XML واحد سليم
  return xmlHeader + staticUrls + dynamicArticleUrls + xmlFooter;
}

// نموذج واجهة فحص جاهزية الـ SEO
import React, { useState } from 'react';

export function SeoHealthDashboard() {
  const [checklist, setChecklist] = useState([
    { id: 1, label: 'وجود ملف robots.txt سليم ومتاح في الجذر', done: true },
    { id: 2, label: 'ربط ملف sitemap.xml وتحديثه تلقائياً', done: true },
    { id: 3, label: 'فحص عدم وجود أخطاء زحف 404 في Search Console', done: true },
    { id: 4, label: 'تثبيت وسوم Canonical لمنع تكرار المحتوى', done: true },
    { id: 5, label: 'تحقيق نتيجة تفوق 95 في فحص Lighthouse SEO', done: true }
  ]);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-slate-100">
      <h2 className="text-xl font-bold text-white flex items-center gap-2">
        <span className="text-emerald-400">🛡️</span> لوحة تدقيق جاهزية الفهرسة والـ SEO
      </h2>
      <div className="mt-4 space-y-2">
        {checklist.map(item => (
          <div key={item.id} className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
            <span className="text-sm">{item.label}</span>
            <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded font-mono">
              مكتمل ومفحوص
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output:
        "توليد ملف sitemap.xml دقيق يحدد تواريخ التعديل وأولويات الروابط، مع التحقق من أن مسارات لوحة التحكم محمية بـ robots.txt دون التأثير على فهرسة الصفحات العامة.",
      commonMistakes: [
        {
          mistake: "وضع وسم Disallow: / في ملف robots.txt في بيئة الإنتاج بعد نسخه من بيئة التطوير (Staging).",
          fix: "التأكد المشدد من إزالة سطر Disallow: / عند الإطلاق على السيرفر الحي، واستبداله بسماح عام Allow: / للمسارات العامة."
        },
        {
          mistake: "تضمين روابط ترجع خطأ 404 أو تعيد التوجيه داخل ملف sitemap.xml.",
          fix: "أتمتة توليد sitemap برمجياً للتأكد من احتوائه حصراً على صفحات حية وناجحة برمز حالة 200 OK."
        }
      ],
      bestPractices: [
        "سجل موقعك فورياً في Google Search Console وBing Webmaster Tools وقدم رابط ملف sitemap.xml.",
        "اجعل رابط ملف sitemap.xml مذكوراً كسطر أخير صريح داخل ملف robots.txt لتسهيل عثور العناكب عليه.",
        "استخدم أداة URL Inspection Tool في Search Console بعد إطلاق أي صفحة حيوية لطلب فهرستها الفورية (Request Indexing)."
      ],
      infographic: {
        title: "منظومة فحص وأتمتة الفهرسة الرقمية",
        nodes: [
          { label: "robots.txt", desc: "يوجه الروبوتات للمسموح والمحظور ويحدد موقع خريطة الموقع" },
          { label: "sitemap.xml", desc: "قائمة محدثة تلقائياً بجميع الروابط المتاحة وتاريخ تعديلها" },
          { label: "Search Console", desc: "مراقبة الكلمات المفتاحية وأخطاء الزحف وطلب الفهرسة" },
          { label: "Lighthouse SEO", desc: "فحص معايير الوصولية وجودة وسوم الرأس ومقروئية الخطوط" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-26-1-1",
      question: "ما هو السبب الرئيسي الذي قد يجعل تطبيق React المبني على CSR يعاني من تأخر الفهرسة في Google؟",
      options: [
        "محركات البحث لا تدعم قراءة لغة جافاسكريبت نهائياً.",
        "الخادم يرسل ملف HTML شبه فارغ، مما يضع الصفحة في طابور انتظار التصيير (Render Queue) لتنفيذ كود جافاسكريبت لاحقاً.",
        "استخدام مكتبة Tailwind CSS يؤثر سلباً على الفهرسة.",
        "لأن حجم ملف package.json يكون كبيراً جداً."
      ],
      correctAnswer: 1,
      explanation:
        "في CSR، يرسل الخادم HTML أولياً فارغاً تقريباً. تضطر محركات البحث لوضع الصفحة في طابور انتظار حتى تتوفر الموارد لتشغيل محرك جافاسكريبت واستخراج النصوص، مما يستهلك ميزانية الزحف ويؤخر ظهور المحتوى في نتائج البحث."
    },
    {
      id: "quiz-26-1-2",
      question: "ما الغرض التقني الأساسي من وسم الرابط المعياري <link rel='canonical' />؟",
      options: [
        "زيادة سرعة تحميل صور الصفحة بنسبة 50%.",
        "تحديد الرابط الأصلي المعتمد للصفحة لمنع مشكلة المحتوى المكرر وتشتيت قوة الترتيب عند وجود معلمات تتبع في الرابط.",
        "تشفير اتصالات المستخدم مع السيرفر كبديل لشهادة SSL.",
        "منع المتصفح من حفظ الصفحة في الكاش المحلي."
      ],
      correctAnswer: 1,
      explanation:
        "وسم Canonical يعلن لمحركات البحث عن الرابط المرجع الرسمي للصفحة، مما يمنع معاقبة الموقع بالمحتوى المكرر الناتج عن معلمات الاستعلام، روابط الفرز، أو تعدد إصدارات النطاق."
    },
    {
      id: "quiz-26-1-3",
      question: "لماذا يُوصى بصيغة JSON-LD عند تضمين البيانات المنظمة Structured Data بدلاً من كتابة نصوص عادية؟",
      options: [
        "لأنها تمكن محركات البحث من فهم المعنى الدلالي الدقيق وعرض النتائج الغنية (Rich Snippets) مثل نجوم التقييم وقوائم FAQ.",
        "لأنها تقلل حجم ملف bundle الخاص بـ React إلى النصف.",
        "لأنها الطريقة الوحيدة لتشغيل الصوت في صفحات الويب.",
        "لأنها تحول المتصفح تلقائياً إلى تطبيق PWA."
      ],
      correctAnswer: 0,
      explanation:
        "بيانات JSON-LD المنظمة تفهرس الكيانات الدلالية (منتج، مقال، أسئلة شائعة، أحداث) وفق معايير Schema.org، مما يتيح لمحركات البحث إبراز الصفحة في النتائج الغنية التي تجذب نقرات واهتمام الزوار."
    }
  ],
  exercise: {
    id: "exercise-26-1",
    title: "بناء مكون إدارة وسوم الـ SEO الديناميكي مع دعم JSON-LD وOpen Graph",
    description:
      "قم بإنشاء مكون React متكامل باسم 'SeoManager' يقبل الخصائص: title وdescription وcanonicalUrl وogImage وjsonLdData، ويقوم بحقن وتحديث وسوم <title> و<meta> وروابط canonical وكود <script type='application/ld+json'> بأمان داخل رأس الوثيقة.",
    hints: [
      "استخدم useEffect لتحديث document.title والبحث عن وسوم meta وتعديلها.",
      "تأكد من تنظيف أو تحديث وسم script الخاص بـ JSON-LD عند تغيير البيانات.",
      "استخدم JSON.stringify لتوليد كود البيانات المنظمة بشكل آمن."
    ],
    solution: `import React, { useEffect } from 'react';

// مكون شامل لإدارة وسوم الـ SEO والبيانات المنظمة ديناميكياً
export function SeoManager({
  title,
  description,
  canonicalUrl,
  ogImage,
  jsonLdData
}) {
  useEffect(() => {
    // 1. تحديث عنوان الصفحة
    if (title) {
      document.title = title;
    }

    // دالة مساعدة لإنشاء أو تحديث وسم meta
    const setMetaTag = (attributeName, attributeValue, content) => {
      let meta = document.querySelector(\`meta[\${attributeName}="\${attributeValue}"]\`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. تحديث وسم الوصف
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
    }

    // 3. تحديث وسوم Open Graph
    if (title) {
      setMetaTag('property', 'og:title', title);
    }
    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
    }
    if (canonicalUrl) {
      setMetaTag('property', 'og:url', canonicalUrl);
    }

    // 4. تحديث الرابط المعياري Canonical
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // 5. تحديث كود البيانات المنظمة JSON-LD
    let scriptTag = document.getElementById('dynamic-jsonld');
    if (jsonLdData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'dynamic-jsonld';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(jsonLdData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalUrl, ogImage, jsonLdData]);

  return null;
}`
  },
  infographic: {
    title: "خريطة منظومة SEO المتكاملة في تطبيقات React",
    subtitle: "التنسيق المحكم بين عناصر الرأس والبيانات المنظمة واستراتيجية التصيير لتحقيق الصدارة في نتائج البحث",
    nodes: [
      {
        id: "tags",
        title: "1. وسوم الرأس الأساسية",
        description: "Title مميز (55 حرفاً) + Meta Description جذاب (150 حرفاً) + Robots توجيهي.",
        badge: "Meta Tags"
      },
      {
        id: "canonical",
        title: "2. الروابط المعيارية",
        description: "ضبط rel='canonical' لمنع تكرار المحتوى وحماية سلطة الترتيب من التشتت.",
        badge: "Canonical"
      },
      {
        id: "social",
        title: "3. بطاقات Open Graph",
        description: "صور بأبعاد 1200x630 وعناوين جذابة لمشاركات التواصل الاجتماعي الغنية.",
        badge: "Social Cards"
      },
      {
        id: "structured",
        title: "4. البيانات المنظمة JSON-LD",
        description: "Schema.org لتمكين النتائج الغنية: النجوم والأسعار وقوائم FAQ ومسار التنقل.",
        badge: "Rich Snippets"
      },
      {
        id: "rendering",
        title: "5. استراتيجية التصيير الفوري",
        description: "الاعتماد على SSR/SSG لتسليم HTML جاهز ومفهرس لحظياً مع سرعة FCP قصوى.",
        badge: "SSR / SSG"
      }
    ]
  }
};

export default topic1;

