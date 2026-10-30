// topic1.js - القسم 34، الموضوع 1: بناء معرض أعمال Portfolio (Developer Portfolio Architecture)
// يحتوي على 9 مواضيع فرعية مفصلة وفق معايير الجودة الصارمة والشرح من الصفر

export const TOPIC_34_1 = {
  id: "topic-34-1",
  title: "بناء معرض أعمال Portfolio",
  description: "دليل عملي وهندسي شامل لبناء معرض أعمال استثنائي (Developer Portfolio) يعكس خبرتك الحقيقية في React، بدءاً من اختيار المشاريع الاستراتيجية التي تجذب مسؤولي التوظيف (Tech Recruiters)، وهندسة الموقع، وتوثيق التحديات التقنية، وتنظيم مستودعات GitHub واحتراف ملفات الـ README.",
  subtopics: [
    {
      id: "34.1.a",
      title: "اختيار أفضل المشاريع (Project Curation & Signal-to-Noise Ratio)",
      technicalTerm: {
        english: "Strategic Project Selection & Curation",
        pronunciation: "ستراتيجي ك بروجيكت سيليكشن آند كيوريشن",
        arabicMeaning: "الاختيار والفرز الاستراتيجي للمشاريع"
      },
      description: "أكبر خطأ يقع فيه المطورون المبتدئون هو إغراق معرض الأعمال بعشرات المشاريع الصغيرة والمبتذلة (مثل تطبيقات الطقس البسيطة أو الحاسبة العادية). في سوق العمل التنافسي، 'القليل المتميز يغلب الكثير المكرر' (High Signal-to-Noise Ratio). يُنصح باختيار 3 إلى 4 مشاريع كبرى فقط تظهر عمق المهارات المعمارية: 1. تطبيق تجارة إلكترونية كامل (E-commerce)، 2. تطبيق تفاعلي معقد مثل لوحة كانبان بالسحب والإفلات، 3. تطبيق لحظي متعدد المستخدمين (Realtime WebSockets)، و4. منصة برمجيات كخدمة (SaaS) متكاملة.",
      realWorldAnalogy: "مثل صالة عرض المجوهرات الفاخرة؛ لا يضع الصائغ في واجهة المحل مئات الخواتم النحاسية الرخيصة، بل يبرز في المنتصف 3 قطع ألماس استثنائية تسلب أنظار المارة وتثبت براعته الفائقة.",
      whyItMatters: "يقضي مسؤولو التوظيف والمهندسون الرئيسيون أقل من دقيقة واحدة في تصفح محفظة أعمالك؛ إذا رأوا مشاريع مأخوذة من قنوات يوتيوب سيفقدون الاهتمام، بينما إذا رأوا مشروعاً حقيقياً يحل مشكلة معقدة سيتصلون بك للمقابلة فوراً.",
      syntax: "// مصفوفة تصنيف واختيار المشاريع الاستراتيجية\nconst PORTFOLIO_PROJECTS = [\n  { tier: 'Flagship', type: 'Full-Stack SaaS', complexity: 'High' },\n  { tier: 'Core', type: 'Realtime Collaboration', complexity: 'High' }\n];",
      simpleExample: `// هيكل تعريف المشروع المميز داخل معرض الأعمال
export const featuredProjects = [
  {
    id: "saas-flow",
    title: "منصة إدارة فرق العمل والمهام الذكية",
    badge: "المشروع الرائد (Flagship)",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    highlight: "يدعم تعدد المستأجرين (Multi-tenancy) واشتراكات المؤسسات"
  },
  {
    id: "kanban-live",
    title: "لوحة مهام تفاعلية بالسحب والإفلات اللحظي",
    badge: "مشروع متقدم",
    techStack: ["React", "Zustand", "HTML5 DnD", "WebSockets"],
    highlight: "استجابة بصرية في 0 ميلي ثانية مع التحديث المتفائل"
  }
];`,
      advancedExample: `// مكون فلترة واختيار المشاريع حسب الدور الوظيفي المستهدف
import React, { useState } from 'react';

const ALL_PROJECTS = [
  { id: '1', name: 'منصة التجارة الإلكترونية Pro', role: 'frontend', level: 'enterprise', metrics: '+1,200 طلب تجريبي' },
  { id: '2', name: 'تطبيق المحادثة الفورية المشفر', role: 'fullstack', level: 'enterprise', metrics: 'زمن استجابة < 20ms' },
  { id: '3', name: 'نظام تصميم Design System متكامل', role: 'ui-eng', level: 'advanced', metrics: '45+ مكون WCAG AAA' }
];

export function StrategicProjectFilter({ onSelect }) {
  const [targetRole, setTargetRole] = useState('all');

  const filtered = ALL_PROJECTS.filter(p => targetRole === 'all' || p.role === targetRole);

  return (
    <div className="space-y-4">
      <div className="flex gap-2 text-xs">
        <button onClick={() => setTargetRole('all')} className={\`px-3 py-1.5 rounded-lg \${targetRole === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}\`}>الكل</button>
        <button onClick={() => setTargetRole('frontend')} className={\`px-3 py-1.5 rounded-lg \${targetRole === 'frontend' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}\`}>وظائف Frontend</button>
        <button onClick={() => setTargetRole('fullstack')} className={\`px-3 py-1.5 rounded-lg \${targetRole === 'fullstack' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}\`}>وظائف Full-Stack</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(proj => (
          <div key={proj.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
            <h4 className="font-bold text-sm text-white">{proj.name}</h4>
            <span className="text-xs text-emerald-400 font-mono">أرقام التأثير: {proj.metrics}</span>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوجه هذا النموذج البصري الزائر مباشرة إلى المشاريع الأكثر ارتباطاً بالمنصب الوظيفي المستهدف، مع إبراز مقاييس التأثير والأرقام بدلاً من مجرد سرد التقنيات.",
      commonMistakes: "تضمين 15 مشروعاً متواضعاً من دورات تعليمية أساسية مثل آلة حاسبة أو عداد نقرات، مما يعطي انطباعاً فورياً بأن المطور مبتدئ ولم يبنِ شيئاً حقيقياً بنفسه.",
      bestPractices: "ركز على 3 أو 4 مشاريع كبرى مستقلة، واجعل لكل مشروع غرضاً هندسياً واضحاً (مثل: حل مشكلة الأداء، إدارة الخادم، أو تكامل الدفع الإلكتروني).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="220" height="100" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="140" y="65" fill="#ef4444" fontSize="12" fontWeight="bold" textAnchor="middle">❌ Weak Portfolio</text>
  <text x="140" y="90" fill="#94a3b8" fontSize="10" textAnchor="middle">15 Small Tutorial Apps</text>
  <text x="140" y="110" fill="#cbd5e1" fontSize="9" textAnchor="middle">Weather App, Calculator, Counter</text>
  <path d="M 270 90 L 320 90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="340" y="40" width="230" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="455" y="65" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">✅ Strategic Portfolio</text>
  <text x="455" y="90" fill="#ffffff" fontSize="10" textAnchor="middle">3-4 Flagship Complex Projects</text>
  <text x="455" y="110" fill="#38bdf8" fontSize="9" textAnchor="middle">Full-Stack SaaS, Kanban DnD, E2EE Chat</text>
</svg>`
    },
    {
      id: "34.1.b",
      title: "إنشاء موقع Portfolio باستخدام React (Portfolio Architecture & Performance)",
      technicalTerm: {
        english: "Fast-Loading Minimalist Portfolio Architecture",
        pronunciation: "فاست لودينج مينيمالست بورتفوليو آركيتكتشر",
        arabicMeaning: "معمارية موقع معرض الأعمال البسيط وفائق السرعة"
      },
      description: "موقع معرض أعمالك هو مشروعك رقم صفر (Project Zero)؛ فهو أول عينة كود يراها مسؤول التوظيف. يجب أن يجمع بين: سرعة تحميل خاطفة (Lighthouse 100/100)، تصميم نظيف ومريح للعين (Minimalist Clean UI)، تجاوب كامل مع الهواتف المحمولة، ودعم الوضع الليلي (Dark Mode). تجنب الرسوم الكرتونية البطيئة أو المؤثرات ثلاثية الأبعاد الثقيلة التي تستنزف بطارية الهاتف وتشتت الزائر عن رؤية أعمالك.",
      realWorldAnalogy: "مثل بدلة المقابلة الشخصية؛ يجب أن تكون أنيقة، مكوية بدقة، ومريحة، دون ألوان صاخبة أو إكسسوارات غريبة تشتت الانتباه عن كفاءتك الحقيقية.",
      whyItMatters: "إذا كان موقع معرض أعمالك بطيئاً في التحميل أو يحتوي على أخطاء في العرض على الهاتف، فلن يكلف فاحص التوظيف نفسه عناء النقر على مشاريعك الأخرى.",
      syntax: "/* تخطيط الصفحة الشخصية الحديث */\n<div className=\"max-w-4xl mx-auto px-6 py-12 space-y-16\">\n  <HeroBio />\n  <FeaturedProjectsGrid />\n  <ExperienceTimeline />\n</div>",
      simpleExample: `// قسم النبذة والتعريف الشخصي (Hero Bio) في المعرض
import React from 'react';

export function PortfolioHeroBio() {
  return (
    <section className="space-y-4 py-8">
      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
        متاح للعمل في مشاريع جديدة وفرص وظيفية
      </div>
      <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
        أحمد محمد — مهندس برمجيات واجهات أمامية متقدمة (Senior React Engineer)
      </h1>
      <p className="text-sm text-slate-350 leading-relaxed max-w-2xl">
        متخصص في بناء منصات الويب الحديثة فائقة الأداء باستخدام React وNext.js وTypeScript. أركز على تجربة المستخدم السلسة، وإمكانية الوصول، والتطبيقات القابلة للتوسع.
      </p>
    </section>
  );
}`,
      advancedExample: `// هيكل الصفحة المتكامل مع تبديل السمة وتتبع الزيارات السريعة
import React, { useState } from 'react';

export function PortfolioShell({ children }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('engineer@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* شريط التنقل البسيط والمريح */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-6 py-3.5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="font-mono text-sm font-bold text-white tracking-wider">DEV.PORTFOLIO</span>
          <nav className="flex items-center gap-4 text-xs font-semibold text-slate-350">
            <a href="#projects" className="hover:text-white transition-colors">المشاريع</a>
            <a href="#skills" className="hover:text-white transition-colors">المهارات</a>
            <button
              onClick={copyEmail}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all text-xs"
            >
              {copiedEmail ? '✓ تم نسخ البريد' : 'تواصل معي ✉'}
            </button>
          </nav>
        </div>
      </header>

      {/* المحتوى الرئيسي للموقع */}
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-16">
        {children}
      </main>
    </div>
  );
}`,
      outputExplanation: "يقدم هذا الهيكل موقعاً سريعاً وأنيقاً يبرز هوية المطور بوضوح، مع زر اتصال فوري ينسخ البريد الإلكتروني بنقرة واحدة لتسهيل التواصل.",
      commonMistakes: "استخدام مكتبات أنيميشن ضخمة مثل Three.js دون سبب مقنع تجعل مروحة كمبيوتر مسؤول التوظيف تدور بأقصى سرعة وتجمد المتصفح.",
      bestPractices: "اجعل تصميم الموقع بسيطاً وسريعاً ونظيفاً؛ فالشركات تبحث عن مهندس يبني منتجات سريعة ومتقنة وليس عن مصمم ألعاب ثلاثية الأبعاد.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="540" height="30" rx="6" fill="#1e293b" />
  <circle cx="50" cy="45" r="4" fill="#ef4444" />
  <circle cx="65" cy="45" r="4" fill="#f59e0b" />
  <circle cx="80" cy="45" r="4" fill="#10b981" />
  <text x="120" y="49" fill="#94a3b8" fontSize="10">https://ahmed-engineer.dev</text>
  <rect x="30" y="75" width="340" height="75" rx="8" fill="#1e293b" />
  <text x="45" y="100" fill="#ffffff" fontSize="12" fontWeight="bold">Ahmed — Senior Frontend Engineer</text>
  <text x="45" y="125" fill="#94a3b8" fontSize="9">Building high-performance React applications</text>
  <rect x="390" y="75" width="180" height="75" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="480" y="105" fill="#34d399" fontSize="14" fontWeight="bold" textAnchor="middle">100 / 100</text>
  <text x="480" y="125" fill="#cbd5e1" fontSize="9" textAnchor="middle">Google Lighthouse Speed</text>
</svg>`
    },
    {
      id: "34.1.c",
      title: "كتابة وصف واضح لكل مشروع (Impact-Driven Case Study Descriptions)",
      technicalTerm: {
        english: "STAR Framework Technical Case Studies",
        pronunciation: "ستار فريم وورك تكنيكال كيس ستاديز",
        arabicMeaning: "دراسات الحالة التقنية وفق نموذج STAR"
      },
      description: "لا تكتب مجرد سطر واحد يقول: 'هذا تطبيق متجر إلكتروني بنيته بـ React'؛ بل قدم دراسة حالة موجزة وفق نموذج STAR المعتمد عالمياً في التوظيف: 1. الموقف (Situation): ما هو سياق المشروع والمشكلة التي أردت حلها؟ 2. المهمة (Task): ما هي الأهداف المعمارية المحددة؟ 3. الإجراء (Action): ما القرارات الهندسية والمكتبات التي اخترتها ولماذا؟ 4. النتيجة (Result): ما الأثر الملموس والأرقام المحققة (مثلاً: تقليل حجم الحزمة بنسبة 40% وزمن التحميل إلى 1.1 ثانية).",
      realWorldAnalogy: "مثل التقرير الطبي للطبيب الجراح؛ لا يكتب 'أجريت عملية لمريض'، بل يوثق حالة المريض عند الوصول، والتحديات أثناء الجراحة، والتقنيات المستخدمة، ونسبة تعافي المريض بعد العملية.",
      whyItMatters: "يثبت لمديري التوظيف أنك تفكر كمهندس يحل مشاكل أعمال حقيقية (Business Problems) وتدرك عواقب قراراتك التقنية، وليس مجرد مبرمج ينفذ التعليمات دون تفكير.",
      syntax: "// هيكل دراسة الحالة لمشروع المعرض\ninterface CaseStudy {\n  situation: string;\n  architectureDecision: string;\n  measurableResult: string;\n}",
      simpleExample: `// بطاقة وصف دراسة الحالة لمشروع معين
import React from 'react';

export function ProjectCaseStudyCard({ title, challenge, solution, outcome }) {
  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 text-xs">
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <div className="space-y-1.5 text-slate-350">
        <p><strong className="text-rose-400">التحدي:</strong> {challenge}</p>
        <p><strong className="text-sky-400">الحل المعماري:</strong> {solution}</p>
        <p><strong className="text-emerald-400">النتيجة بالأرقام:</strong> {outcome}</p>
      </div>
    </div>
  );
}`,
      advancedExample: `// مكون عرض دراسة الحالة الموسعة بأسلوب كبار المهندسين (Engineering Deep Dive)
import React, { useState } from 'react';

export function EngineeringDeepDive({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-bold text-white">{project.title}</h3>
          <p className="text-xs text-slate-400 mt-1">{project.summary}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-bold text-indigo-400 hover:text-indigo-300"
        >
          {isExpanded ? 'إخفاء التفاصيل ▲' : 'قراءة التحليل الهندسي ▼'}
        </button>
      </div>

      {isExpanded && (
        <div className="pt-4 border-t border-slate-800 space-y-3 text-xs leading-relaxed">
          <div className="bg-slate-850 p-3.5 rounded-xl border border-slate-800">
            <span className="font-bold text-indigo-300 block mb-1">🎯 لماذا تم اختيار Zustand بدلاً من Redux؟</span>
            <p className="text-slate-350">
              لتقليل الكود المتكرر بنسبة 70% وتفادي إعادة تصيير شجرة المكونات بالكامل عبر اشتراكات الـ Selectors الدقيقة، مما خفض استهلاك الذاكرة وحافظ على خفة التطبيق.
            </p>
          </div>

          <div className="bg-slate-850 p-3.5 rounded-xl border border-slate-800">
            <span className="font-bold text-emerald-300 block mb-1">📊 نتائج الأداء الملموسة:</span>
            <ul className="list-disc list-inside text-slate-350 space-y-1">
              <li>تحقيق زمن استجابة 0 ميلي ثانية لواجهة السحب والإفلات عبر التحديث المتفائل.</li>
              <li>تقليل حجم حزمة الجافاسكريبت النهائية من 450KB إلى 140KB باستخدام التقسيم الكودي (Code Splitting).</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يحول هذا العرض المشروع من مجرد رابط كود عادي إلى قصة نجاح هندسية ممتعة تجعل مسؤول التوظيف متلهفاً لمناقشتها معك في المقابلة.",
      commonMistakes: "الاكتفاء بسرد قائمة أسماء المكتبات المستخدمة (مثل 'React, Tailwind, Axios') دون شرح سبب اختيارها أو المشكلة التي حلتها.",
      bestPractices: "استخدم الأرقام والنسب المئوية المحسوبة؛ فالأرقام تثبت الاحترافية وتبرهن على اهتمامك بمقاييس الأداء وتجربة المستخدم.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="120" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="90" y="75" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">1. Situation</text>
  <text x="90" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">The Real Problem</text>
  <path d="M 155 90 L 195 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="200" y="45" width="120" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="260" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">2. Action</text>
  <text x="260" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Architecture Choices</text>
  <path d="M 325 90 L 365 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="370" y="45" width="200" height="90" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="470" y="75" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">3. Measurable Result</text>
  <text x="470" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">-40% Bundle | 100/100 Core Vitals</text>
</svg>`
    },
    {
      id: "34.1.d",
      title: "إضافة صور وعروض توضيحية للمشاريع (Visual Demos & GIF Walkthroughs)",
      technicalTerm: {
        english: "Visual Artifacts & Micro-Demo Recordings",
        pronunciation: "فيجوال آرتيفاكتس آند مايكرو ديمو ريكوردينجز",
        arabicMeaning: "المصنوعات البصرية وتسجيلات العروض التوضيحية المصغرة"
      },
      description: "الصورة تساوي ألف كلمة، ومقطع فيديو قصير مدته 15 ثانية بصيغة WebM أو GIF متحرك يساوي ألف سطر كود. نظراً لأن العديد من مسؤولي التوظيف يتصفحون المعارض من هواتفهم السريعة دون رغبة في التسجيل وإنشاء حساب جديد داخل مشروعك لتجربته، فإن وجود تسجيل متحرك عالي الدقة يوضح تدفق العمل الحرج (مثل سحب البطاقات أو الدفع ببطاقة وهمية) يضمن إيصال الفكرة فوراً بنظرة واحدة.",
      realWorldAnalogy: "مثل مقاطع 'المعاينة السريعة' (Trailer) للأفلام الجديدة؛ تشاهد لقطات مشوقة مدتها ثوانٍ تقنعك بقوة الفيلم دون الحاجة لمشاهدة الساعتين كاملتين.",
      whyItMatters: "يحمي مشروعك من التجاهل إذا كان الخادم المجاني بطيئاً في الاستيقاظ (Cold Start) أو إذا لم يكن لدى الزائر وقت لإنشاء حساب تجريبي.",
      syntax: "/* فيديو معاينة ذاتي التشغيل وصامت داخل بطاقة المشروع */\n<video autoPlay loop muted playsInline poster=\"/poster.webp\" src=\"/demo.webm\" />",
      simpleExample: `// مكون عرض مقطع توضيحي صامت للمشروع
import React from 'react';

export function ProjectVideoTeaser({ videoSrc, posterSrc, altTitle }) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-video shadow-lg">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterSrc}
        className="w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/webm" />
        <img src={posterSrc} alt={altTitle} className="w-full h-full object-cover" />
      </video>
    </div>
  );
}`,
      advancedExample: `// عارض تفاعلي قبل/بعد أو للقطات الشاشة المتعددة مع التكبير
import React, { useState } from 'react';

export function ProjectScreenshotGallery({ screenshots = [] }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (screenshots.length === 0) return null;

  return (
    <div className="space-y-3">
      {/* الصورة المعروضة بحجم كبير مع تأثير الظل */}
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl">
        <img
          src={screenshots[activeIdx].url}
          alt={screenshots[activeIdx].caption}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-sm p-2 text-center text-xs text-slate-350">
          {screenshots[activeIdx].caption}
        </div>
      </div>

      {/* شريط الصور المصغرة للتنقل */}
      <div className="flex gap-2 justify-center">
        {screenshots.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={\`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all \${
              activeIdx === idx ? 'border-indigo-500 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
            }\`}
          >
            <img src={s.url} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر هذا المعرض تجربة تفاعلية تتيح لزائر موقعك استكشاف ميزات وتصميم تطبيقك دون مغادرة صفحة المعرض.",
      commonMistakes: "رفع ملفات GIF ضخمة بحجم 20 ميجابايت تستنزف باقة الزائر وتتطلب وقتاً طويلاً للتحميل، بدلاً من استخدام فيديو بصيغة WebM أو MP4 خفيف الوزن.",
      bestPractices: "استخدم دائماً وسم `<video autoPlay loop muted playsInline>` مع ملف WebM عالي الضغط بحجم أقل من 1.5 ميجابايت لضمان التشغيل الفوري على كافة الهواتف.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="40" y="30" width="220" height="120" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="150" y="65" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">❌ Heavy GIF File</text>
  <text x="150" y="95" fill="#94a3b8" fontSize="10" textAnchor="middle">18 MB Download</text>
  <text x="150" y="115" fill="#f87171" fontSize="9" textAnchor="middle">Lags mobile browser</text>
  <path d="M 280 90 L 320 90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="340" y="30" width="220" height="120" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="65" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">✅ Optimized WebM Video</text>
  <text x="450" y="95" fill="#ffffff" fontSize="10" textAnchor="middle">850 KB Ultra Light</text>
  <text x="450" y="115" fill="#38bdf8" fontSize="9" textAnchor="middle">Plays instantly (0s delay)</text>
</svg>`
    },
    {
      id: "34.1.e",
      title: "نشر المشاريع بروابط مباشرة وبيانات دخول تجريبية (Live Deployments & Demo Credentials)",
      technicalTerm: {
        english: "Live Production Demos & 1-Click Demo Logins",
        pronunciation: "لايف برودكشن ديموز آند ون كليك ديمو لوجينز",
        arabicMeaning: "عروض الإنتاج الحية وبيانات الدخول التجريبية بنقرة واحدة"
      },
      description: "المشروع الذي لا يمتلك رابطاً حياً يعمل عبر الإنترنت يعتبر مشروعاً غير موجود بالنسبة لمسؤولي التوظيف. لا يملك أي مهندس وقت لتنزيل مستودعك وتشغيل `npm install` و`npm run dev` محلياً. يجب نشر كل مشروع على نطاق إنتاجي سريع (Vercel / Netlify / Railway) وتوفير زر 'دخول تجريبي بنقرة واحدة' (1-Click Demo Login) يقوم بتعبئة اسم مستخدم وكلمة مرور حساب تجريبي مملوء بالبيانات لتسهيل التصفح الفوري.",
      realWorldAnalogy: "مثل تجربة قيادة سيارة في المعرض؛ يجهز لك البائع المفتاح داخل مقود السيارة مع خزان وقود ممتلئ، لتجلس وتنطلق فوراً في التجربة دون أن يطلب منك فك وتركيب المحرك بنفسك.",
      whyItMatters: "يزيل أي احتكاك (Friction) أو عائق أمام مسؤول التوظيف، مما يرفع احتمالية قيامه بتجربة مشروعك والتأكد من مهاراتك بنسبة 500%.",
      syntax: "// زر التعبئة التلقائية لحساب الدخول التجريبي\nconst fillDemoAccount = (role) => {\n  setEmail(role === 'admin' ? 'admin@demo.com' : 'user@demo.com');\n  setPassword('Demo1234!');\n};",
      simpleExample: `// أزرار روابط المعاينة المباشرة وكود المصدر في بطاقة المشروع
import React from 'react';

export function ProjectActionLinks({ liveUrl, githubUrl }) {
  return (
    <div className="flex gap-2 pt-2">
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-600/20"
      >
        المعاينة الحية ↗
      </a>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold border border-slate-700 transition-all"
      >
        الكود المصدري (GitHub) ⌥
      </a>
    </div>
  );
}`,
      advancedExample: `// شريط بيانات الاعتماد التجريبية الجاهزة للمعاينة السريعة (1-Click Demo Logins)
import React, { useState } from 'react';

export function DemoCredentialsBar({ onQuickLogin }) {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = (role, email, pass) => {
    setSelectedRole(role);
    onQuickLogin(email, pass);
  };

  return (
    <div className="p-3.5 bg-slate-900 border border-indigo-500/40 rounded-xl space-y-2 text-xs">
      <div className="flex justify-between items-center text-slate-350">
        <span className="font-bold text-white">⚡ تجربة سريعة بدون تسجيل:</span>
        <span className="text-[10px] text-indigo-400">انقر لملء البيانات وتسجيل الدخول فوراً</span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleSelect('admin', 'admin@saas-demo.io', 'DemoPass2026!')}
          className={\`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all \${
            selectedRole === 'admin' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-300'
          }\`}
        >
          حساب مسؤول (Admin) 👑
        </button>

        <button
          onClick={() => handleSelect('member', 'sara@saas-demo.io', 'DemoPass2026!')}
          className={\`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all \${
            selectedRole === 'member' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-300'
          }\`}
        >
          حساب موظف (Member) 💼
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر هذا المكون لمسؤولي التوظيف والمهندسين إمكانية الدخول الفوري وتجربة كافة صلاحيات النظام بنقرة زر واحدة دون إضاعة دقيقة واحدة في إنشاء حساب.",
      commonMistakes: "ترك التطبيق فارغاً بدون أي بيانات تجريبية (Empty State)، مما يجعل لوحة التحكم تبدو ميتة وغير جذابة للزائر.",
      bestPractices: "املأ قاعدة البيانات التجريبية ببيانات واقعية مسبقة (Seed Data) تشمل 10 مشاريع، ورسوماً بيانية ملونة، وصوراً رمزية للأعضاء لتبدو كمنصة حية نشطة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Recruiter Clicks Live URL</text>
  <text x="110" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">vercel.app / custom domain</text>
  <path d="M 195 90 L 245 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="250" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="330" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">1-Click Demo Login</text>
  <text x="330" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">No sign-up form friction</text>
  <path d="M 415 90 L 465 90" stroke="#10b981" strokeWidth="2" />
  <rect x="470" y="45" width="100" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="520" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Pre-seeded DB</text>
  <text x="520" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Charts & Tasks 🚀</text>
</svg>`
    },
    {
      id: "34.1.f",
      title: "تنظيم مستودعات GitHub واحتراف سجل الالتزامات (GitHub Hygiene & Clean Git Commits)",
      technicalTerm: {
        english: "Conventional Commits & Clean Git Workflow",
        pronunciation: "كونفينشنال كوميتس آند كلين جيت ويرك فلو",
        arabicMeaning: "رسائل الالتزام المعيارية ومسار عمل Git النظيف"
      },
      description: "يدخل مسؤولو التوظيف التقنيون إلى مستودع GitHub الخاص بمشروعك للتأكد من طريقة عملك الحقيقية. المستودع الذي يحتوي على التزام واحد ضخم بعنوان 'Initial Commit' أو رسائل عشوائية مثل 'update' و'fix bug' يعكس فوضى وعدم نضج مهني. المهندس المحترف يتبع معيار الالتزامات الاصطلاحية (Conventional Commits: `feat:`, `fix:`, `refactor:`, `test:`، `chore:`)، وينظم مشروعه في فروع منفصلة (Feature Branches) تُدمج عبر Pull Requests موثقة.",
      realWorldAnalogy: "مثل سجل صيانة الطائرات؛ يجب أن يسجل المهندس كل مسمار تم استبداله والتاريخ والسبب بدقة متناهية، بدلاً من كتابة 'تم إصلاح الطائرة' في سطر واحد غامض.",
      whyItMatters: "يثبت قدرتك على الاندماج الفوري في فرق العمل الهندسية الكبرى والتزامك بأفضل الممارسات المتبعة في كبرى شركات التقنية.",
      syntax: "// صياغة رسائل Git المعيارية (Conventional Commits)\nfeat(auth): implement jwt token refresh in edge middleware\nfix(cart): prevent negative quantity updates\ntest(billing): add stripe webhook signature verification tests",
      simpleExample: `// أمثلة لرسائل Git الرديئة مقابل الرسائل المهنية الممتازة
// ❌ رسائل عشوائية تضر بسمعتك المهنية:
// git commit -m "fixed stuff"
// git commit -m "final version 2"
// git commit -m "asdasd"

// ✅ رسائل معيارية تثبت احترافك (Conventional Commits):
// git commit -m "feat(kanban): add optimistic drag and drop support"
// git commit -m "fix(payment): handle expired stripe sessions gracefully"
// git commit -m "docs: add architecture diagram and env setup in README"`,
      advancedExample: `// تكوين أداة Husky وcommitlint لفرض المعايير تلقائياً قبل الالتزام
// في ملف .commitlintrc.json
{
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "perf", "test", "chore", "revert"]
    ],
    "subject-case": [2, "always", "lower-case"]
  }
}

// في ملف .husky/commit-msg لمنع الالتزامات العشوائية محلياً
// npx --no -- commitlint --edit "\${1}"`,
      outputExplanation: "تضمن هذه الأدوات أن يكون سجل مشروعك البرمجي (Git History) بمثابة كتاب توثيقي نظيف ومحترف يوضح تطور كل ميزة خطوة بخطوة.",
      commonMistakes: "رفع ملفات حساسة مثل `.env` أو مجلد `node_modules` داخل مستودع GitHub لعدم إضافتها في ملف `.gitignore`، مما يمثل ثغرة أمنية فادحة.",
      bestPractices: "احرص دائماً على وجود ملف `.gitignore` شامل ومحدث، واجعل التزاماتك صغيرة ومترابطة مع اتباع معايير Conventional Commits.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="220" height="100" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="140" y="65" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">❌ Unprofessional Commits</text>
  <text x="140" y="90" fill="#94a3b8" fontSize="10" textAnchor="middle">'asdf', 'updates', 'fixed'</text>
  <text x="140" y="110" fill="#f87171" fontSize="9" textAnchor="middle">Shows chaos & amateurism</text>
  <path d="M 270 90 L 310 90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="65" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">✅ Conventional Commits</text>
  <text x="450" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">feat(auth): add edge session refresh</text>
  <text x="450" y="110" fill="#38bdf8" fontSize="9" textAnchor="middle">fix(cart): prevent negative bounds</text>
</svg>`
    },
    {
      id: "34.1.g",
      title: "كتابة ملف README احترافي لكل مشروع (Professional Project Documentation)",
      technicalTerm: {
        english: "Executive README Architecture & System Blueprints",
        pronunciation: "إكزيكتيف ريد مي آركيتكتشر آند سيستم بلوبرينتس",
        arabicMeaning: "معمارية ملف README التنفيذي والمخططات الهيكلية"
      },
      description: "ملف `README.md` هو واجهة المستودع وبوابته الأولى. الملف الاحترافي يجب أن يجيب على 6 أسئلة فورية: 1. ما هو المشروع مع صورة أو GIF متحرك في القمة؟ 2. رابط المعاينة الحية وكود المصدر، 3. الميزات المعمارية الرئيسية، 4. المخطط الهيكلي للبنية التحتية (Architecture Diagram)، 5. خطوات التشغيل المحلي للمطورين، 6. متغيرات البيئة المطلوبة (`.env.example`).",
      realWorldAnalogy: "مثل دليل التشغيل والصيانة لسيارة فارهة؛ تجد غلافاً جذاباً، ثم جدولاً بقطع الغيار والمواصفات الفنية، ثم إرشادات خطوة بخطوة للتشغيل والسلامة.",
      whyItMatters: "ملف README المتقن يظهر اهتمامك بالتوثيق والتواصل الفني الواضح، وهي من أهم صفات المهندس المحترف (Senior Mindset).",
      syntax: "<!-- هيكل README الاحترافي في GitHub -->\n# Project Title\n[![Deploy](https://badge)]() [![Tests](https://badge)]()\n\n> High-level elevator pitch.\n\n## 🏛 Architecture Diagram\n## 🚀 Quick Start & Env Variables",
      simpleExample: `// قالب مبسّط لملف README.md احترافي
# 🚀 منصة التجارة الإلكترونية المتكاملة (Pro E-Commerce)

> منصة تجارة إلكترونية متطورة تدعم بوابات الدفع Stripe، إدارة المخزون، ولوحة تحكم للإدارة.

## 🔗 روابط سريعة
- **المعاينة الحية:** [live-demo.vercel.app](https://example.com)
- **فيديو توضيحي (30 ثانية):** [Watch Demo](https://example.com)

## 🛠 حزمة التقنيات (Tech Stack)
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Stripe Payments & Webhooks
- PostgreSQL & Prisma ORM

## ⚙️ التشغيل المحلي
\`\`\`bash
git clone https://github.com/username/project.git
npm install
npm run dev
\`\`\``,
      advancedExample: `// مثال متقدم لتوثيق مخطط متغيرات البيئة والمعمارية داخل README
## 🔐 متغيرات البيئة (Environment Variables)

قم بنسخ ملف \`.env.example\` إلى \`.env.local\` واملأ المتغيرات التالية:

\`\`\`env
# قاعدة البيانات
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# توثيق الجلسات
NEXTAUTH_SECRET="your-ultra-secure-secret-key-32-chars"
NEXTAUTH_URL="http://localhost:3000"

# بوابات الدفع Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
\`\`\`

## 🏗 المعمارية الهندسية (System Architecture)

\`\`\`mermaid
graph TD
  A[Client Browser] -->|HTTPS Requests| B[Next.js App Router]
  B -->|Direct DB Queries| C[(PostgreSQL Database)]
  B -->|Webhook Events| D[Stripe Payment Engine]
  B -->|Error Tracking| E[Sentry APM]
\`\`\``,
      outputExplanation: "يوفر هذا التوثيق للمهندسين دليلاً شاملاً يتيح لهم فهم المعمارية وتشغيل المشروع محلياً في 3 دقائق دون أي عناء أو غموض.",
      commonMistakes: "ترك ملف README الافتراضي الذي يولده Next.js أو Vite (`This is a Next.js project bootstrapped with create-next-app`) دون أي تعديل.",
      bestPractices: "أضف شارات الحالة (Badges) لحالة الاختبارات ونشر Vercel، ووثق نموذج المتغيرات في ملف `.env.example` بدون كتابة كلمات المرور الحقيقية.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="160" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">1. Hero & Badges</text>
  <text x="110" y="80" fill="#cbd5e1" fontSize="9" textAnchor="middle">Live Link + Demo GIF</text>
  <text x="110" y="105" fill="#10b981" fontSize="9" textAnchor="middle">Build: PASSING</text>
  <path d="M 195 90 L 235 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="30" width="150" height="120" rx="8" fill="#1e293b" stroke="#818cf8" />
  <text x="315" y="55" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">2. Architecture</text>
  <text x="315" y="80" fill="#cbd5e1" fontSize="9" textAnchor="middle">Mermaid Flowcharts</text>
  <text x="315" y="105" fill="#94a3b8" fontSize="9" textAnchor="middle">Trade-offs & Decisions</text>
  <path d="M 395 90 L 435 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="30" width="130" height="120" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="505" y="55" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">3. Setup & Env</text>
  <text x="505" y="80" fill="#cbd5e1" fontSize="9" textAnchor="middle">.env.example Guide</text>
  <text x="505" y="105" fill="#10b981" fontSize="9" textAnchor="middle">3-Step Quickstart</text>
</svg>`
    },
    {
      id: "34.1.h",
      title: "توثيق التحديات والحلول التقنية (Engineering Trade-offs & Postmortems)",
      technicalTerm: {
        english: "Technical Trade-offs & Architecture Decision Records (ADR)",
        pronunciation: "تكنيكال تريد أوفس آند آركيتكتشر ديسيجن ريكوردز",
        arabicMeaning: "المفاضلات التقنية وسجلات القرارات المعمارية"
      },
      description: "المطور العادي يكتفي بالحديث عن نجاحاته، أما المهندس المحترف فيوثق التحديات الصعبة (Technical Hurdles) والمفاضلات الهندسية (Trade-offs) التي واجهته. على سبيل المثال: 'واجهنا بطء في سحب بطاقات الكانبان عند تجاوز 100 بطاقة؛ قمنا بتحليل الأداء واكتشفنا تكرار إعادة تصيير العمود بأكمله، فقمنا بحل المشكلة بتطبيع البيانات واستخدام React.memo، مما خفض زمن المعالجة من 80ms إلى 4ms'. توثيق هذه التفاصيل في قسم خاص يسمى ADR (Architecture Decision Record) هو أقوى برهان على احترافيتك.",
      realWorldAnalogy: "مثل مذكرات قائد سفينة فضاء؛ يوثق فيها العواصف النيزكية غير المتوقعة التي واجهتها الرحلة، وكيف أعاد توجيه المحركات لتجاوز الخطر بسلام.",
      whyItMatters: "هذا القسم هو الوقود الحقيقي لأسئلة المقابلات التقنية؛ فإذا أثرت فضول المهندس المقابل بتحدٍ واقعي قمت بحله، ستتحول المقابلة من استجواب نظري إلى حوار هندسي ممتع بين زميلين.",
      syntax: "## 🧠 Architecture Decision Record (ADR 001)\n- **Context:** State re-renders in large Kanban boards.\n- **Decision:** Normalize state structure (IDs vs entities).\n- **Consequences:** O(1) card lookups, complexity in initial reducer.",
      simpleExample: `// مثال لتوثيق مفاضلة معمارية حقيقية في الكود
/**
 * ADR: اختيار استخدام TanStack Query لإدارة حالة الخادم
 * 
 * السبب:
 * تفادي كتابة كود useEffect وuseState متكرر لإدارة حالات التحميل والأخطاء،
 * والاستفادة من ميزة التخزين المؤقت التلقائي (Automatic Background Refetching).
 * 
 * المقايضة (Trade-off):
 * زيادة حجم حزمة التطبيق بمقدار 12KB، لكن تم تعويضها بحذف مئات أسطر كود الـ Reducers المخصصة.
 */`,
      advancedExample: `// مكون واجهة يعرض سجلات القرارات المعمارية (ADR Viewer) في محفظة الأعمال
import React, { useState } from 'react';

const ADR_LIST = [
  {
    id: 'ADR-01',
    title: 'حل مشكلة تضارب التمرير والسحب في كانبان',
    problem: 'عند سحب البطاقة على الشاشات التي تعمل باللمس، كان المتصفح يبدأ بالتمرير العمودي للصفحة بدلاً من سحب البطاقة.',
    solution: 'إضافة خاصية touch-action: none على مقبض السحب واستخدام مكتبة dnd-kit المجهزة بـ Pointer Sensors.',
    impact: 'تجربة سحب سلسة بنسبة 100% على كافة هواتف أندرويد وآيفون.'
  },
  {
    id: 'ADR-02',
    title: 'تأمين أحداث Stripe Webhooks ضد هجمات Replay',
    problem: 'احتمالية تكرار تنفيذ عملية شحن الحساب إذا أعاد المخترق إرسال نفس الطلب المقبوض.',
    solution: 'استخدام التوقيع الزمني stripe-signature والتحقق من أن توقيت الحدث لا يتجاوز 5 دقائق، مع حفظ معرف الحدث في Redis لمنع التكرار (Idempotency).',
    impact: 'منع محاولات التكرار والتزوير المالي بنسبة 100%.'
  }
];

export function ArchitecturalDecisionsViewer() {
  const [selectedId, setSelectedId] = useState(ADR_LIST[0].id);
  const activeAdr = ADR_LIST.find(a => a.id === selectedId);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-white">سجلات القرارات الهندسية (Engineering ADRs)</h3>
        <span className="text-[10px] text-slate-400 font-mono">Senior Engineering Artifact</span>
      </div>

      <div className="flex gap-2">
        {ADR_LIST.map(adr => (
          <button
            key={adr.id}
            onClick={() => setSelectedId(adr.id)}
            className={\`px-3 py-1.5 rounded-lg text-xs font-semibold \${
              selectedId === adr.id ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
            }\`}
          >
            {adr.id}
          </button>
        ))}
      </div>

      <div className="p-4 bg-slate-850 rounded-xl border border-slate-800 space-y-2 text-xs leading-relaxed">
        <h4 className="font-bold text-white">{activeAdr.title}</h4>
        <p className="text-rose-400"><strong className="text-white">المشكلة:</strong> {activeAdr.problem}</p>
        <p className="text-sky-300"><strong className="text-white">الحل الهندسي:</strong> {activeAdr.solution}</p>
        <p className="text-emerald-400"><strong className="text-white">الأثر النهائي:</strong> {activeAdr.impact}</p>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوثق هذا النموذج عمق تفكير المطور كمهندس يواجه التحديات ويبتكر الحلول ويقيس أثرها الإيجابي على استقرار وأمان المنتج.",
      commonMistakes: "الادعاء بأن المشروع بُني بسهولة ودون أي مشاكل على الإطلاق، مما يعطي انطباعاً بأن المشروع سطحي أو منسوخ.",
      bestPractices: "خصص قسماً في ملف README بعنوان 'Engineering Trade-offs & Lessons Learned' واشرح تحديين تقنيين حقيقيين تغلبت عليهما.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="110" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">1. The Roadblock</text>
  <text x="110" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Re-render lag at 100 tasks</text>
  <path d="M 195 90 L 255 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="340" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">2. The Trade-off (ADR)</text>
  <text x="340" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Normalized ID state lookup</text>
  <path d="M 425 90 L 485 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="45" width="80" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="530" y="85" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">4ms Speed</text>
  <text x="530" y="105" fill="#10b981" fontSize="9" textAnchor="middle">O(1) Win 🎉</text>
</svg>`
    },
    {
      id: "34.1.i",
      title: "إظهار الاختبارات وجودة الكود (Test Coverage & CI Badges)",
      technicalTerm: {
        english: "Test Coverage Visibility & GitHub Actions CI Badges",
        pronunciation: "تيست كافريج فيزيبيلتي آند جيت هاب آكشنز سي آي بادجز",
        arabicMeaning: "إبراز تغطية الاختبارات وشارات التكامل المستمر في GitHub"
      },
      description: "الميزة الحاسمة التي تفصل بين مطور هاوٍ ومهندس برمجيات حقيقي هي 'الاختبارات الآلية' (Automated Tests). عندما يرى مسؤول التوظيف شارة خضراء في قمة مشروعك تقول `Tests: 42 Passing` و`Coverage: 88%`، يدرك فوراً أن كودك موثوق، مدروس، ولن ينهار عند إجراء أي تعديل مستقبلي. يتضمن ذلك كتابة اختبارات وحدة لوظائف الأعمال الحسابية واختبارات E2E للتدفقات الحرجة وتفعيلها عبر خط أنابيب GitHub Actions.",
      realWorldAnalogy: "مثل شهادة الأمان ومطابقة المواصفات القياسية على الأجهزة الكهربائية (CE أو ISO)؛ تثبت للزبون أن الجهاز خضع لمئات الاختبارات قبل طرحه في السوق.",
      whyItMatters: "تعتبر جودة الكود والاختبارات الآلية المعيار الأول لتقييم مهندسي الـ Mid-level والـ Senior في المقابلات التقنية العالمية.",
      syntax: "// سكريبت توليد شارة التغطية\n\"test:coverage\": \"vitest run --coverage\"",
      simpleExample: `// شارة الاختبارات في واجهة بطاقة المشروع
import React from 'react';

export function ProjectQualityBadges({ passingTestsCount, coveragePercent }) {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono">
      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
        ✓ {passingTestsCount} Tests Passing
      </span>
      <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold">
        Coverage: {coveragePercent}%
      </span>
    </div>
  );
}`,
      advancedExample: `// نموذج تقرير الاختبارات المضمن في لوحة تفاصيل المشروع بالمعرض
import React from 'react';

export function TestSuiteSummaryModal({ suites = [] }) {
  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 text-xs font-mono">
      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
        <span className="font-bold text-white text-sm">حزمة الاختبارات الآلية (Vitest & Playwright)</span>
        <span className="text-emerald-400 font-bold">كل الاختبارات ناجحة (PASS)</span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between p-2.5 bg-slate-850 rounded-lg">
          <span className="text-slate-350">✓ calculateCartTotal.test.ts (12 cases)</span>
          <span className="text-slate-500 text-[10px]">18ms</span>
        </div>
        <div className="flex justify-between p-2.5 bg-slate-850 rounded-lg">
          <span className="text-slate-350">✓ useOptimisticDrag.test.ts (8 cases)</span>
          <span className="text-slate-500 text-[10px]">34ms</span>
        </div>
        <div className="flex justify-between p-2.5 bg-slate-850 rounded-lg">
          <span className="text-slate-350">✓ checkout-flow.e2e.ts (4 scenarios)</span>
          <span className="text-slate-500 text-[10px]">1.2s</span>
        </div>
      </div>

      <div className="p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-indigo-300 text-[11px] leading-relaxed">
        💡 تم تشغيل هذه الحزمة تلقائياً مع كل Pull Request عبر GitHub Actions مع حظر الدمج في حال فشل أي اختبار.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوثق هذا العرض ثقافة الجودة الصارمة التي يتبعها المطور، مما يمنح الشركات الثقة الكاملة في أن كوده جاهز لبيئات الإنتاج الحساسة دون مخاطر.",
      commonMistakes: "كتابة اختبارات وهمية فارغة لا تحتوي على أي تأكيدات (`expect(...)`) فقط لزيادة عداد الاختبارات في الشارة.",
      bestPractices: "ركز على اختبار المنطق الحرج (Critical Business Logic) مثل: حساب الضرائب، الخصومات، والتحقق من الصلاحيات بدلاً من اختبار خصائص CSS البسيطة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="110" y="75" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Vitest Suite</text>
  <text x="110" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">48 / 48 Tests Passed</text>
  <path d="M 195 90 L 245 90" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="250" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="330" y="75" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Coverage Metric</text>
  <text x="330" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">89% Business Logic</text>
  <path d="M 415 90 L 465 90" stroke="#38bdf8" strokeWidth="2" />
  <rect x="470" y="45" width="100" height="90" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="520" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">CI Badge</text>
  <text x="520" y="100" fill="#34d399" fontSize="9" textAnchor="middle">Build: PASS ✓</text>
</svg>`
    }
  ],
  quizzes: [
    {
      id: "quiz-34-1-1",
      question: "ما المعيار الأهم لاختيار مشاريع معرض الأعمال التي تبهر مسؤولي التوظيف والمهندسين؟",
      options: [
        "كثرة المشاريع ولو كانت تطبيقات طقس وحاسبة بسيطة مأخوذة من يوتيوب",
        "التركيز على 3 أو 4 مشاريع كبرى ذات عمق معماري تحل مشاكل حقيقية (مثل SaaS أو تجارة إلكترونية متكاملة أو لوحة كانبان بالسحب والإفلات)",
        "أن يحتوي المشروع على رسوم متحركة ثلاثية الأبعاد فقط",
        "أن تكون المشاريع مكتوبة بلغة PHP القديمة"
      ],
      correctAnswer: 1,
      explanation: "المشاريع الكبرى المعقدة تثبت نضجك المعماري وقدرتك على التعامل مع تحديات الإنتاج الحقيقية وتفصلك عن مئات المبتدئين ذوي المشاريع المكررة."
    },
    {
      id: "quiz-34-1-2",
      question: "لماذا يُعتبر توفير زر 'دخول تجريبي بنقرة واحدة' (1-Click Demo Login) ميزة استراتيجية في مشاريعك؟",
      options: [
        "لإلغاء حماية كلمة المرور نهائياً",
        "لأنه يزيل عقبة التسجيل ويسمح لمسؤول التوظيف السريع بتجربة التطبيق بكافة صلاحياته دون إضاعة وقته في ملء نماذج",
        "لزيادة عدد الزوار الوهميين",
        "لأنه إلزامي في مواصفات W3C"
      ],
      correctAnswer: 1,
      explanation: "مسؤولو التوظيف لديهم وقت محدود جداً، وتسهيل الدخول بنقرة واحدة يضمن تجربة مشروعك فورياً وتفقد ميزاته المتقدمة."
    },
    {
      id: "quiz-34-1-3",
      question: "ما فائدة توثيق القرارات المعمارية (ADRs) والمقايضات الهندسية (Trade-offs) في ملف README؟",
      options: [
        "زيادة عدد أسطر الملف فقط",
        "إثبات التفكير الهندسي الناضج والقدرة على تقييم عواقب القرارات التقنية، وتوفير مواضيع حوار هندسية ثرية في المقابلات",
        "إخفاء الأخطاء التي وقع فيها المطور",
        "تسريع بناء التطبيق في Vercel"
      ],
      correctAnswer: 1,
      explanation: "توثيق التحديات والمفاضلات هو السمة الأبرز للمهندسين المحترفين، ويظهر لفرق التوظيف أنك تدرك أسباب اختيار أدواتك وتتعلم من التجارب الواقعية."
    }
  ],
  practicalExercise: {
    id: "exercise-34-1",
    title: "بناء مكون بطاقة مشروع تفاعلية مع المعاينة ودراسة الحالة الهندسية",
    description: "قم بإنشاء مكون بطاقة مشروع لمعرض أعمالك يعرض صورة الغلاف، حزمة التقنيات، نبذة دراسة الحالة وفق نموذج (التحدي والحل والنتيجة)، وروابط المعاينة المباشرة وكود GitHub.",
    hints: [
      "استخدم كائن مشروع يحتوي على title, challenge, solution, result, techStack, liveUrl, githubUrl.",
      "أضف زراً لتبديل إظهار دراسة الحالة الفنية (Deep Dive).",
      "احرص على كتابة تعليق عربي فوق كل سطر برمجي يوضح الغرض من الكود."
    ],
    solution: `// الحل النموذجي لمكون بطاقة المشروع الاحترافية لمعرض الأعمال
import React, { useState } from 'react';

// كائن بيانات المشروع النموذجي
const SAMPLE_PROJECT = {
  title: 'منصة إدارة المشاريع الرشيقة (Kanban Pro)',
  badge: 'مشروع رائد (Flagship)',
  summary: 'لوحة كانبان تفاعلية تدعم السحب والإفلات والتحديث المتفائل ومزامنة الويب سوكيت.',
  challenge: 'بطء ملحوظ في سحب البطاقات على المتصفح عند وصول عدد المهام لأكثر من 150 مهمة.',
  solution: 'تطبيع بنية البيانات واستخدام تقنية Virtualized Columns مع React.memo لعزل التصيير.',
  outcome: 'انخفاض زمن معالجة السحب إلى 0ms مع تحقيق تقييم 99% في مؤشرات الويب الأساسية.',
  techStack: ['React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Vitest'],
  liveUrl: 'https://kanban-demo.example.com',
  githubUrl: 'https://github.com/example/kanban-pro'
};

export function InteractivePortfolioCard() {
  // حالة فتح وإغلاق دراسة الحالة الهندسية
  const [showDeepDive, setShowDeepDive] = useState(false);

  return (
    <div className="w-full max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5 font-sans">
      {/* رأس البطاقة والشارة */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {SAMPLE_PROJECT.badge}
          </span>
          <h3 className="text-base font-black text-white mt-1.5">{SAMPLE_PROJECT.title}</h3>
        </div>
        <button
          onClick={() => setShowDeepDive(!showDeepDive)}
          className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {showDeepDive ? 'إخفاء التفاصيل ▲' : 'دراسة الحالة الهندسية ▼'}
        </button>
      </div>

      <p className="text-xs text-slate-350 leading-relaxed">{SAMPLE_PROJECT.summary}</p>

      {/* تفاصيل دراسة الحالة عند فتحها */}
      {showDeepDive && (
        <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800 space-y-2.5 text-xs animate-fadeIn">
          <p><strong className="text-rose-400">التحدي:</strong> {SAMPLE_PROJECT.challenge}</p>
          <p><strong className="text-sky-400">الحل المعماري:</strong> {SAMPLE_PROJECT.solution}</p>
          <p><strong className="text-emerald-400">النتيجة بالأرقام:</strong> {SAMPLE_PROJECT.outcome}</p>
        </div>
      )}

      {/* حزمة التقنيات */}
      <div className="flex flex-wrap gap-1.5">
        {SAMPLE_PROJECT.techStack.map(tech => (
          <span key={tech} className="px-2.5 py-1 bg-slate-800 text-slate-350 rounded-lg text-[10px] font-mono">
            {tech}
          </span>
        ))}
      </div>

      {/* أزرار الروابط المباشرة */}
      <div className="flex gap-3 pt-2 border-t border-slate-800">
        <a
          href={SAMPLE_PROJECT.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-indigo-600/20"
        >
          المعاينة المباشرة ↗
        </a>
        <a
          href={SAMPLE_PROJECT.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-slate-800 hover:bg-slate-750 text-slate-200 font-semibold rounded-xl text-xs transition-colors border border-slate-700"
        >
          كود GitHub ⌥
        </a>
      </div>
    </div>
  );
}`
  },
  topicInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Developer Portfolio Architecture Blueprint</text>
  <rect x="40" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="115" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Project Curation</text>
  <text x="115" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">3-4 Flagship Apps</text>
  <text x="115" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">High Signal-to-Noise</text>
  <text x="115" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Impact-driven STAR</text>
  <text x="115" y="185" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Focus on Quality</text>
  <path d="M 195 135 L 235 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="315" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Recruiter UX</text>
  <text x="315" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">1-Click Demo Login</text>
  <text x="315" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Pre-seeded DB Data</text>
  <text x="315" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Fast WebM Teaser</text>
  <text x="315" y="185" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">Zero Friction</text>
  <path d="M 395 135 L 435 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="505" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Engineering Proof</text>
  <text x="505" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">README Blueprints</text>
  <text x="505" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Documented ADRs</text>
  <text x="505" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Passing CI Badges</text>
  <text x="505" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Senior Mindset</text>
</svg>`
};

