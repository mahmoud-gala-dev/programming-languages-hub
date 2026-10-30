// topic5.js - القسم 34، الموضوع 5: التعلم المستمر والتخصص (Continuous Learning & Career Specialization)
// يحتوي على 10 مواضيع فرعية مفصلة وفق معايير الجودة الصارمة والشرح من الصفر

export const TOPIC_34_5 = {
  id: "topic-34-5",
  title: "التعلم المستمر والتخصص",
  description: "خريطة الطريق الاستراتيجية للاستمرار في صدارة المشهد التقني العالمي؛ تشمل كيفية قراءة ملاحظات الإصدارات الجديدة (Release Notes)، متابعة تطورات بيئة React وNext.js وTypeScript، استكشاف تطبيقات الهواتف عبر React Native، والرسوم ثلاثية الأبعاد بـ Three.js، والمساهمة في المصادر المفتوحة (Open Source)، واختيار التخصص الهندسي الأنسب لطموحك.",
  subtopics: [
    {
      id: "34.5.a",
      title: "متابعة التوثيق الرسمي لـ React ومجتمع المطورين (Official React Documentation Ecosystem)",
      technicalTerm: {
        english: "Living Documentation & Core Team RFC Tracking",
        pronunciation: "ليفينج دوكيومنتيشن آند كور تيم آر إف سي تراكينج",
        arabicMeaning: "التوثيق الحي ومتابعة مقترحات الفريق الأساسي"
      },
      description: "عالم React لا يتوقف عن التطور؛ والموقع الرسمي (react.dev) ليس مجرد مرجع للأوامر بل هو دليل فلسفي حي يُعاد تحديثه باستمرار. المهندس المتميز يتابع قناة الأخبار الرسمية ومدونة فريق React الأساسي (React Blog) ومناقشات RFCs (Requests for Comments) على GitHub لمعرفة الميزات القادمة قبل طرحها للجمهور بـ 6 إلى 12 شهراً، مما يمنحه ميزة تنافسية هائلة في السوق.",
      realWorldAnalogy: "مثل طبيب يقرأ المجلة الطبية الدولية المرموقة (The Lancet) أسبوعياً؛ يعرف أحدث بروتوكولات العلاج المعتمدة قبل أن تصبح ممارسات عامة في المستشفيات.",
      whyItMatters: "يحميك من تعلم واستخدام أنماط برمجية أصبحت معيبة أو مهملة (Deprecated)، ويجعلك مرجعاً تقنياً موثوقاً لزملائك في الشركة.",
      syntax: "// الروابط الرسمية لمتابعة قرارات فريق React الأساسي:\nhttps://react.dev/blog\nhttps://github.com/reactjs/rfcs",
      simpleExample: `// مثال لمتابعة أحدث المفاهيم المعتمدة رسمياً مثل React 19 Actions
// في React 19 تم إدخال ميزات إدارة النماذج والحالة غير المتزامنة رسمياً
import React, { useTransition } from 'react';

export function ModernActionExample() {
  const [isPending, startTransition] = useTransition();

  const handleUpdate = () => {
    startTransition(async () => {
      // معالجة متزامنة غير حاجزة مع التحديث التلقائي للحالة
      await new Promise(r => setTimeout(r, 1000));
      console.log('تم التحديث بأسلوب React 19 الحديث');
    });
  };

  return (
    <button onClick={handleUpdate} disabled={isPending} className="px-3 py-1 bg-indigo-600 text-white rounded text-xs">
      {isPending ? 'جاري الحفظ...' : 'حفظ التغييرات'}
    </button>
  );
}`,
      advancedExample: `// أداة برمجية لمراقبة وقراءة خلاصات RSS لأحدث مقالات التوثيق الرسمي
export class TechRadarSubscriber {
  static getCoreFeeds() {
    return [
      { name: 'React Official Blog', url: 'https://react.dev/feed.xml', priority: 'Critical' },
      { name: 'Next.js Blog & Releases', url: 'https://nextjs.org/feed.xml', priority: 'High' },
      { name: 'TypeScript Announcements', url: 'https://devblogs.microsoft.com/typescript/feed/', priority: 'High' }
    ];
  }
}`,
      outputExplanation: "توفر هذه المنهجية راداراً تقنياً يضمن وصول الأخبار والتحديثات الجوهرية فور اعتمادها رسمياً من الشركات الراعية للتقنية.",
      commonMistakes: "الاعتماد على منشورات منصات التواصل الاجتماعي السطحية التي تروج لشائعات أو صرعات غير معتمدة من الفريق الأساسي.",
      bestPractices: "خصص 30 دقيقة صباح كل يوم إثنين لقراءة مقالات التوثيق الرسمية وسجلات الـ Release Notes لتظل في صدارة المتخصصين.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">React Core Team</text>
  <text x="110" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">GitHub RFC Discussions</text>
  <path d="M 195 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="340" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">react.dev Blog</text>
  <text x="340" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Official Release Guidance</text>
  <path d="M 425 90 L 485 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="45" width="80" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="530" y="85" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Senior</text>
  <text x="530" y="105" fill="#10b981" fontSize="9" textAnchor="middle">Future-Proof</text>
</svg>`
    },
    {
      id: "34.5.b",
      title: "قراءة ملاحظات إصدارات React وفهم الإصدارات الدلالية (Semantic Versioning & Release Notes)",
      technicalTerm: {
        english: "Semantic Versioning (SemVer) & Migration Codemods",
        pronunciation: "سيمانتك فيرجينينج آند مايجريشن كود مودز",
        arabicMeaning: "ترقيم الإصدارات الدلالي وسكريبتات الترقية الآلية"
      },
      description: "تتبع لغة الترقيم الدلالي (SemVer: `MAJOR.MINOR.PATCH`): الترقيع (Patch: إصلاح أخطاء أمنية دون تغيير في الدوال)، التحديث الفرعي (Minor: إضافة ميزات متوافقة مع الإصدار السابق)، والتحديث الجذري (Major: تغييرات كاسرة للتوافق Breaking Changes). قراءة الـ Release Notes تتيح لك معرفة مسارات الترقية والتحذيرات المهملة (Deprecation Warnings) وكيفية استخدام سكريبتات الترقية التلقائية الرسمية (React Codemods) لتحديث مئات الملفات في ثوانٍ.",
      realWorldAnalogy: "مثل كتيب تحديث أنظمة الطائرات؛ يوضح للمهندس أي القطع تم تحسين كفاءتها، وأي القطع أصبحت غير متوافقة ويجب استبدالها قبل الإقلاع التالي.",
      whyItMatters: "ترقية اعتماديات المشروع بشكل أعمى دون قراءة ملاحظات الإصدار يؤدي إلى انهيار التطبيق في الإنتاج لتعطل مكتبات أساسية.",
      syntax: "// تشغيل كود مود رسمي لترقية مشاريع React القديمة تلقائياً\nnpx @react-codemod/react-19 ./src",
      simpleExample: `// مثال لفهم أرقام SemVer في package.json
// ^18.2.0 تعني قبول تحديثات Minor وPatch (18.3.0 مسموح)
// ~18.2.0 تعني قبول تحديثات Patch فقط (18.2.1 مسموح، و18.3 مرفوض)
// 19.0.0 تعني إصدار Major جديد يتطلب قراءة الـ Migration Guide بعناية!`,
      advancedExample: `// سكريبت آلي لفحص توافق الحزم قبل الترقية الكبرى (Pre-upgrade Health Check)
export class UpgradeReadinessChecker {
  static assessUpgradeRisk(currentVersion: string, targetVersion: string) {
    const [currentMajor] = currentVersion.split('.').map(Number);
    const [targetMajor] = targetVersion.split('.').map(Number);

    if (targetMajor > currentMajor) {
      return {
        riskLevel: 'HIGH (Breaking Changes Expected)',
        action: 'يجب قراءة Migration Guide وتشغيل الـ Codemods واختبار حزمة E2E في بيئة Staging معزولة.'
      };
    }

    return {
      riskLevel: 'LOW (Backwards Compatible)',
      action: 'ترقية آمنة مع تشغيل اختبارات الوحدة السريعة للتأكد.'
    };
  }
}`,
      outputExplanation: "يوضح هذا التقييم كيف يتعامل المهندس بحذر ومسؤولية مع ترقيات الإصدارات الكبرى لتفادي تعطل أنظمة الشركات الحساسة.",
      commonMistakes: "استخدام الرمز `*` في ملف package.json لتثبيت أحدث إصدار تلقائياً دون تثبيت النسخ المستقرة، مما يسبب أعطالاً مفاجئة أثناء بناء المشروع بالـ CI.",
      bestPractices: "استخدم دائماً ملف `package-lock.json` مقفلاً بدقة وثبت التحديثات تدريجياً في فرع مستقل مع تشغيل حزمة الاختبارات الشاملة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="110" y="75" fill="#f87171" fontSize="12" fontWeight="bold" textAnchor="middle">MAJOR (19.0.0)</text>
  <text x="110" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">Breaking Changes!</text>
  <rect x="220" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="300" y="75" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">MINOR (18.3.0)</text>
  <text x="300" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">New Features (Safe)</text>
  <rect x="410" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="490" y="75" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">PATCH (18.2.1)</text>
  <text x="490" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">Bug & Security Fixes</text>
</svg>`
    },
    {
      id: "34.5.c",
      title: "متابعة تحديثات React Router وموجهات الويب (React Router v6+ & Framework Mode)",
      technicalTerm: {
        english: "Data Loaders, Actions & Framework Mode Evolution",
        pronunciation: "داتا لودرز آكشنز آند فريم وورك مود إيفولوشن",
        arabicMeaning: "محملات البيانات والإجراءات وتحول نمط إطار العمل"
      },
      description: "شهدت مكتبة React Router تحولاً جذرياً في إصداراتها الحديثة (دمج ميزات Remix)؛ حيث انتقلت من مجرد مكتبة لتبديل المكونات في المتصفح إلى إطار عمل متكامل يدعم: محملات البيانات المتوازية (`loaders`) التي تجلب البيانات قبل بدء تصيير الصفحة للتخلص من شاشات التحميل المتتالية (Waterfalls)، وإجراءات النماذج (`actions`)، والتعامل الموحد مع الأخطاء عبر `errorElement`.",
      realWorldAnalogy: "مثل حجز قطار سريع مع وجبة طعام مسبقة الدفع؛ بدلاً من الركوب ثم الانتظار طويلاً حتى يمر عربة الطعام لطلب الغداء، تستلم وجبتك فور جلوسك في مقعدك دون أي تأخير.",
      whyItMatters: "استخدام Data Loaders في React Router يزيل ظاهرة الشاشات المتذبذبة ومؤشرات التحميل المتلاحقة ويمنح تطبيق الـ SPA سرعة فائقة.",
      syntax: "// مسار حديث مع محمل بيانات في React Router\nconst router = createBrowserRouter([\n  { path: '/users', element: <UsersPage />, loader: async () => fetchUsers() }\n]);",
      simpleExample: `// تعريف مسار مع محمل بيانات متوازي (Data Loader)
import { createBrowserRouter, useLoaderData } from 'react-router-dom';

export async function projectListLoader() {
  // جلب البيانات قبل تحميل المكون في الـ DOM
  const res = await fetch('/api/projects');
  return res.json();
}

export function ProjectsRoute() {
  // البيانات جاهزة فوراً دون الحاجة لـ useEffect أو isLoading!
  const projects = useLoaderData();

  return (
    <ul className="text-xs text-white space-y-1">
      {projects.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}`,
      advancedExample: `// تكوين موجه التطبيق المتكامل مع حواجز الأخطاء وإجراءات الإرسال (Actions)
import { createBrowserRouter } from 'react-router-dom';

export const modernAppRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // حاجز أخطاء مخصص لكل مسار فرعي
    errorElement: <RouteLevelErrorFallback />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardView />,
        loader: async ({ request }) => {
          // جلب بيانات لوحة التحكم قبل بداية التصيير
          return { stats: await fetchStats() };
        }
      },
      {
        path: 'projects/new',
        element: <CreateProjectForm />,
        // معالجة إرسال النموذج تلقائياً
        action: async ({ request }) => {
          const formData = await request.formData();
          return await saveProject(formData);
        }
      }
    ]
  }
]);`,
      outputExplanation: "يلغي هذا النمط تماماً مشكلة الشلالات المتتالية (Network Waterfalls)؛ فبمجرد نقر المستخدم على الرابط يبدأ جلب كود المكون وبيانات الـ API معاً في نفس اللحظة.",
      commonMistakes: "الاستمرار في جلب البيانات داخل `useEffect` بعد تصيير المكون في مشاريع React Router الحديثة، مما يسبب وميضاً وبطء استجابة.",
      bestPractices: "استخدم ميزة `loader` في React Router لتحميل البيانات بالتوازي مع المسارات لتحقيق تجربة تصفح فورية (Instant Navigation).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="220" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="140" y="75" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">Old useEffect Waterfall</text>
  <text x="140" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Download JS -> Render -> Fetch Data</text>
  <path d="M 270 90 L 310 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="45" width="240" height="90" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Modern Router Loader</text>
  <text x="450" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Fetch Data & Component IN PARALLEL</text>
</svg>`
    },
    {
      id: "34.5.d",
      title: "متابعة تحديثات Next.js ومعمارية الإنتاج (Next.js Evolution & App Router Maturity)",
      technicalTerm: {
        english: "PPR (Partial Prerendering) & Turbopack Evolution",
        pronunciation: "بي بي آر بارشيال بري ريندرينج آند توربو باك إيفولوشن",
        arabicMeaning: "التصيير المسبق الجزئي وتطور محرك Turbopack"
      },
      description: "يقود Next.js معايير تطوير الويب الحديثة. تشمل الميزات الأحدث التي يركز عليها سوق العمل: التصيير المسبق الجزئي (Partial Prerendering - PPR) الذي يجمع بين سرعة الصفحات الثابتة (Static Shell) وتدفق المكونات الديناميكية (Dynamic Holes) في نفس الصفحة في طلب HTTP واحد، ومحرك التجميع فائق السرعة المكتوب بلغة Rust والمعروف باسم `Turbopack` الذي يسرع زمن التشغيل وتحديث الكود الفوري (Fast Refresh) بما يصل إلى 10 أضعاف مقارنة بـ Webpack القديم.",
      realWorldAnalogy: "مثل متجر فاخر؛ الهيكل الخارجي والرفوف الزجاجية جاهزة وثابتة ولا تتغير (Static Shell)، بينما الشاشات الإلكترونية المعلقة على الرفوف تعرض السعر والعروض الحية المحدثة لحظياً (Dynamic Streams).",
      whyItMatters: "إتقان معماريات Next.js الحديثة يجعلك من أكثر المهندسين طلباً برواتب استثنائية في الشركات العالمية والمؤسسات الناشئة سريعة النمو.",
      syntax: "// تفعيل التصيير المسبق الجزئي (PPR) في Next.js\n// next.config.js\nmodule.exports = { experimental: { ppr: 'incremental' } };",
      simpleExample: `// مثال لتطبيق نمط PPR: هيكل ثابت مع محتوى ديناميكي متدفق
import React, { Suspense } from 'react';

// هذا الهيكل ثابت تماماً ويُقدم فورياً من شبكة CDN (0ms)
export default function ProductPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold text-white">سماعات رأس لاسلكية احترافية</h1>
      
      {/* القسم الديناميكي فقط يتدفق من الخادم دون تأخير الصفحة بأكملها */}
      <Suspense fallback={<div className="h-6 w-32 bg-slate-800 animate-pulse rounded" />}>
        <RealtimeInventoryStock />
      </Suspense>
    </div>
  );
}

async function RealtimeInventoryStock() {
  // فحص المخزون الديناميكي المباشر
  const stock = await fetchStockLive();
  return <span className="text-xs text-emerald-400">متبقي في المخزن: {stock} قطع</span>;
}`,
      advancedExample: `// الاستفادة من ميزة Next.js Image ومحرك التحسين التلقائي للأصول
import Image from 'next/image';

export function HighEfficiencyAvatar({ src, name }: { src: string; name: string }) {
  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-700">
      <Image
        src={src}
        alt={name}
        fill
        sizes="(max-width: 768px) 48px, 64px"
        // جلب بصيغة WebP أو AVIF تلقائياً ومنع الـ CLS
        className="object-cover"
        loading="lazy"
      />
    </div>
  );
}`,
      outputExplanation: "يوضح الكود كيف يتعامل Next.js مع تحسين الأصول وتدفق البيانات بأعلى المعايير دون أي تكلفة تعقيد يدوية على المطور.",
      commonMistakes: "استخدام وسم `<img>` العادي في صفحات Next.js بدلاً من مكون `<Image>`، مما يؤدي إلى هدر باقة الزوار وانخفاض تقييم مؤشرات أداء Core Web Vitals.",
      bestPractices: "اعتمد دائماً مكون `<Image>` المدمج ومحرك Turbopack لتسريع التطوير المحلي (`next dev --turbo`).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="540" height="120" rx="10" fill="#1e293b" stroke="#334155" />
  <text x="50" y="55" fill="#38bdf8" fontSize="12" fontWeight="bold">PPR (Partial Prerendering Architecture)</text>
  <rect x="50" y="70" width="300" height="65" rx="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="200" y="95" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Static Shell (Edge CDN: 0ms)</text>
  <text x="200" y="115" fill="#cbd5e1" fontSize="9" textAnchor="middle">Headers, Layout, Nav, Text</text>
  <rect x="370" y="70" width="180" height="65" rx="6" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" />
  <text x="460" y="95" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Dynamic Hole (Streamed)</text>
  <text x="460" y="115" fill="#cbd5e1" fontSize="9" textAnchor="middle">Live Cart, User Personalization</text>
</svg>`
    },
    {
      id: "34.5.e",
      title: "متابعة تغييرات لغة TypeScript المتقدمة (TypeScript Typing Mastery)",
      technicalTerm: {
        english: "Conditional Types, Template Literals & Inferred Generics",
        pronunciation: "كونديشنال تايبس تيمبليت ليتيرالز آند إنفيرد جينيريكس",
        arabicMeaning: "الأنواع الشرطية وقوالب النصوص النصية والأنواع المعممة المستنتجة"
      },
      description: "تعتبر لغة TypeScript اليوم معياراً إلزامياً لا غنى عنه في سوق العمل لمهندسي React. لا يقتصر الأمر على كتابة `string` و`number`، بل يتطلب إتقان المفاهيم المتقدمة: الأنواع الشرطية (Conditional Types: `T extends U ? X : Y`)، واستخراج الأنواع عبر `infer`، وقوالب النصوص (Template Literal Types مثل `type Event = \`on\${string}\``)، والـ Generics المتقدمة لمكونات React المتعددة الاستخدامات.",
      realWorldAnalogy: "مثل القوالب المعدنية في مصانع قطع الغيار؛ كلما كان القالب مصبوباً بدقة ميكرومترية متناهية، استحال خروج أي قطعة معيبة أو غير مطابقة لمواصفات الأمان.",
      whyItMatters: "يوفر أماناً بنكياً بنسبة 100% ويمنع وقوع أخطاء النوع الشائعة (`TypeError: undefined is not a function`) أثناء تشغيل التطبيق في الإنتاج.",
      syntax: "// نوع استخراج القيمة العائدة من الوعد غير المتزامن\ntype AwaitedReturnType<T extends (...args: any) => Promise<any>> = \n  T extends (...args: any) => Promise<infer R> ? R : never;",
      simpleExample: `// مكون React متعدد الاستخدامات بـ Generics آمنة النوع تماماً
import React from 'react';

// المكون يقبل أي نوع من البيانات T ويعيد العنصر المحدد بنوعه الدقيق
interface SelectListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onSelect: (item: T) => void;
}

export function GenericSelectList<T>({ items, renderItem, onSelect }: SelectListProps<T>) {
  return (
    <div className="space-y-1">
      {items.map((item, idx) => (
        <div key={idx} onClick={() => onSelect(item)} className="cursor-pointer hover:bg-slate-800 p-2 rounded">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}`,
      advancedExample: `// نوع متقدم لتحويل أسماء خصائص الكائن إلى خصائص أحداث (Event Emitter Mappings)
type EventPropNames<T> = {
  [K in keyof T as \`on\${Capitalize<string & K>}Change\`]: (newValue: T[K]) => void;
};

// واجهة مستخدم
interface UserSettings {
  theme: 'light' | 'dark';
  notifications: boolean;
}

// النوع المولد تلقائياً يصبح:
// { onThemeChange: (val: 'light' | 'dark') => void; onNotificationsChange: (val: boolean) => void; }
type GeneratedHandlerProps = EventPropNames<UserSettings>;`,
      outputExplanation: "يوضح الكود قدرة TypeScript على توليد عقود الأنواع البرمجية تلقائياً ومطابقتها مع واجهات المستخدم دون أي كتابة يدوية مكررة.",
      commonMistakes: "استخدام نوع `any` للهروب من رسائل التحذير؛ استخدام `any` يعطل محرك فحص الأنواع بالكامل ويفقد المشروع ميزة الأمان.",
      bestPractices: "استخدم `unknown` بدلاً من `any` إذا كانت القيمة غير معروفة مسبقاً، واعتمد حراس النوع (Type Guards: `is` operator) للتحقق الآمن.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="220" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="140" y="75" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">❌ Using 'any'</text>
  <text x="140" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Turns OFF the type checker</text>
  <path d="M 270 90 L 310 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="45" width="240" height="90" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">✅ Strict Generics & infer</text>
  <text x="450" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">100% Type-Safe & Autocomplete</text>
</svg>`
    },
    {
      id: "34.5.f",
      title: "التعرف على تطبيقات الهواتف عبر React Native (Cross-Platform Mobile Expansion)",
      technicalTerm: {
        english: "React Native Architecture & Expo Ecosystem",
        pronunciation: "ريأكت نيتيف آركيتكتشر آند إكسبو إيكوسيستم",
        arabicMeaning: "معمارية ريأكت نيتيف وبيئة عمل إكسبو"
      },
      description: "بمجرد إتقانك لمفاهيم React الأساسية (Props, State, Hooks, Component Composition)، تصبح قادراً بنسبة 85% على بناء تطبيقات هواتف ذكية حقيقية لنظامي iOS وAndroid باستخدام `React Native` ومنصة `Expo`. الفارق الوحيد هو استبدال وسوم الـ HTML بوسوم أصيلة خاصة بالهاتف: `<View>` بدلاً من `<div>`، `<Text>` بدلاً من `<p>` و`<span>`، و`<Pressable>` بدلاً من `<button>`. تعمل معمارية New Architecture في React Native بمحرك JavaScript Hermes ونظام JSI المباشر للأداء الفائق.",
      realWorldAnalogy: "مثل قيادة سيارة في بلد آخر؛ قواعد المرور وعجلة القيادة والمكابح هي نفسها تماماً، الفارق الوحيد هو أن اللافتات على جانبي الطريق مكتوبة بلغة البلد المضيف.",
      whyItMatters: "يضاعف من قيمتك السوقية وفرصك الوظيفية، حيث تبحث الشركات دائماً عن مطور يستطيع المساهمة في منصة الويب وتطبيق الهاتف في نفس الوقت.",
      syntax: "// مكون React Native قياسي\nimport { View, Text, Pressable } from 'react-native';\n<View><Text>مرحباً بالهاتف</Text></View>",
      simpleExample: `// مقارنة مباشرة بين مكون الويب ومكون الهاتف المطابق
// 1. في React Web:
// export function WebCard() {
//   return (
//     <div onClick={() => alert('نقر')} style={{ padding: 16 }}>
//       <p>مرحباً بك في الويب</p>
//     </div>
//   );
// }

// 2. في React Native (نفس المنطق بأسماء وسوم النظام الأصيل):
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export function MobileCard() {
  return (
    <Pressable onPress={() => alert('نقر على الهاتف')} style={styles.card}>
      <Text style={styles.text}>مرحباً بك في عالم الهواتف الذكية 📱</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#1e293b', borderRadius: 12 },
  text: { color: '#ffffff', fontSize: 14, fontWeight: 'bold' }
});`,
      advancedExample: `// مشاركة منطق الأعمال (Shared Business Logic) بين الويب وتطبيق الهاتف عبر Monorepo
// يمكن استخدام نفس الـ Zustand Stores ونفس دوال التحقق Zod في كلا التطبيقين دون تعديل حرف واحد!
export const sharedCartLogic = {
  calculateTotal(items: { price: number; qty: number }[]) {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }
};`,
      outputExplanation: "يوضح الكود كيف يمكن لمهندس React استخدام نفس منطق الأعمال، وحسابات الـ State، والخطافات في كل من منصة الويب وتطبيق الهاتف بفضل المشاركة الهيكلية.",
      commonMistakes: "محاولة كتابة نصوص بدون تغليفها بوسم `<Text>` في React Native، وهو ما يرفضه محرك الهاتف تماماً ويطلق خطأ فوري.",
      bestPractices: "استخدم بيئة عمل Expo المتطورة (Expo Router) عند بدء مشاريع الهواتف، حيث توفر تجربة تشبه Next.js App Router على نظامي iOS وAndroid.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">React Web (DOM)</text>
  <text x="110" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">div, p, button, input</text>
  <path d="M 195 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <circle cx="300" cy="90" r="35" fill="#4338ca" />
  <text x="300" y="94" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Shared Logic</text>
  <path d="M 345 90 L 405 90" stroke="#10b981" strokeWidth="2" />
  <rect x="410" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="490" y="75" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">React Native</text>
  <text x="490" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">View, Text, Pressable</text>
</svg>`
    },
    {
      id: "34.5.g",
      title: "التعرف على مكتبات الرسوم ثلاثية الأبعاد (3D Web & React Three Fiber)",
      technicalTerm: {
        english: "Declarative WebGL & React Three Fiber (R3F)",
        pronunciation: "ديكلاراتيف ويب جي إل آند ريأكت ثري فايبر",
        arabicMeaning: "رسوم WebGL التصريحية ومكتبة React Three Fiber"
      },
      description: "تمثل الرسوم التفاعلية ثلاثية الأبعاد (3D Web Graphics) قمة الإبهار البصري في واجهات الويب الحديثة. باستخدام مكتبة `React Three Fiber` (R3F) ومكتبة المساعدات `@react-three/drei`، يتم تحويل مكتبة `Three.js` إلى مكونات React تصريحية نقية: `<Canvas>`, `<mesh>`, `<ambientLight>`, و`<meshStandardMaterial>`. تتيح هذه التقنية عرض نماذج المنتجات ثلاثية الأبعاد وتدويرها والتفاعل معها في متاجر التجارة الإلكترونية وصفحات الهبوط الفاخرة.",
      realWorldAnalogy: "مثل استوديو تصوير ثلاثي الأبعاد؛ تضع الكاميرا الرقمية (`PerspectiveCamera`)، وتوجه أضواء الاستوديو (`Lights`)، وتضع مجسم المنتج في المنتصف على منصة دوارة يتأملها الزائر من كل زاوية.",
      whyItMatters: "يميزك عن المطورين التقليديين ويفتح لك أبواب العمل في المواقع الإبداعية الفائزة بجوائز التصميم العالمية (Awwwards).",
      syntax: "// نموذج ثلاثي الأبعاد بأسلوب React التفاعلي\n<Canvas>\n  <ambientLight intensity={0.5} />\n  <mesh rotation={[0.4, 0.2, 0]}>\n    <boxGeometry />\n    <meshStandardMaterial color=\"indigo\" />\n  </mesh>\n</Canvas>",
      simpleExample: `// هيكل مبسط لمكون ثلاثي الأبعاد تفاعلي بواسطة React Three Fiber
import React, { useRef, useState } from 'react';

// ملاحظة: يتطلب تثبيت three و @react-three/fiber
export function RotatingCube({ position }) {
  const [hovered, setHovered] = useState(false);

  return (
    // عنصر mesh يمثل المجسم الهندسي مع المادة المكسوة به
    <mesh
      position={position}
      scale={hovered ? 1.2 : 1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* شكل هندسي لمكعب */}
      <boxGeometry args={[1, 1, 1]} />
      {/* مادة قياسية تتأثر بالإضاءة وتتغير لونها عند التحليق */}
      <meshStandardMaterial color={hovered ? '#6366f1' : '#38bdf8'} />
    </mesh>
  );
}`,
      advancedExample: `// مشهد ثلاثي الأبعاد متكامل مع التحكم في الكاميرا عبر الماوس
import React, { Suspense } from 'react';

export function Product3DShowcase() {
  return (
    <div className="w-full h-80 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
      {/* لوحة الرسم الثلاثية الأبعاد المجهزة بإضاءة الكاميرا */}
      <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
        <span>🎮 نموذج ثلاثي الأبعاد تفاعلي مدمج بتقنية WebGL وReact Three Fiber</span>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح الكود كيف يتم تحويل الرسوم البرمجية المعقدة في WebGL إلى بنية مكونات React اعتيادية وسهلة الإدارة والتفاعل.",
      commonMistakes: "تحميل نماذج ثلاثية الأبعاد بتفاصيل هندسية مفرطة (High-poly models) بحجم 50 ميجابايت، مما يسبب بطء تحميل الصفحة وانهيار الذاكرة على الهواتف.",
      bestPractices: "استخدم دائماً نماذج مضغوطة بصيغة `.gltf` أو `.glb` مع تقنية Draco Compression لضمان أن يكون حجم النموذج أقل من 2 ميجابايت.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Three.js Imperative</text>
  <text x="110" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">scene.add(new Mesh(...))</text>
  <path d="M 195 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="170" height="90" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="345" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">React Three Fiber (R3F)</text>
  <text x="345" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle"><Canvas><mesh /></Canvas></text>
  <path d="M 435 90 L 495 90" stroke="#10b981" strokeWidth="2" />
  <rect x="500" y="45" width="75" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="537" y="85" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">60 FPS</text>
  <text x="537" y="105" fill="#10b981" fontSize="9" textAnchor="middle">Interactive 3D</text>
</svg>`
    },
    {
      id: "34.5.h",
      title: "المساهمة في مشاريع المصادر المفتوحة (Open Source Contribution Protocol)",
      technicalTerm: {
        english: "Open Source Hygiene, Issue Triaging & Fork PRs",
        pronunciation: "أوبن سورس هايجين إيشو ترياجينج آند فورك بي آر إز",
        arabicMeaning: "قواعد المصادر المفتوحة وفرز المشاكل وطلبات السحب من التفرع"
      },
      description: "المساهمة في المصادر المفتوحة (Open Source) هي أسرع وسيلة للحصول على اعتراف دولي بمهاراتك البرمجية. مساهمة مقبولة واحدة في مكتبة كبرى (مثل TanStack أو Next.js أو Tailwind) تساوي شهادة خبرة كاملة في سيرتك الذاتية. تبدأ المساهمة بـ: 1. البحث عن مشاكل موسومة بـ `good first issue`، 2. قراءة دليل المساهمة `CONTRIBUTING.md`، 3. إنشاء Fork ونسخ المشروع محلياً، 4. كتابة الإصلاح مع إضافة اختبارات تثبت عدم الانكسار، 5. فتح Pull Request منسق بدقة يشرح حل المشكلة.",
      realWorldAnalogy: "مثل التطوع في تشييد حديقة عامة في مدينتك؛ يراك كبار المهندسين والمسؤولين وأنت تعمل باحترافية وتتقن البناء، فيعرضون عليك عقود عمل رسمية فوراً لإعجابهم بجودة عملك التطوعي.",
      whyItMatters: "تثبت للشركات أنك تستطيع قراءة وتعديل قواعد كود ضخمة (Large Codebases) والتعاون مع فرق دولية موزعة حول العالم.",
      syntax: "// خطوات المساهمة في المصادر المفتوحة عبر سطر الأوامر:\ngit clone https://github.com/my-fork/project.git\ngit checkout -b fix/issue-123\n# code + test\ngit push origin fix/issue-123",
      simpleExample: `// مثال لتوثيق مساهمة Open Source في السيرة الذاتية
export const sampleOpenSourceCV = {
  project: "TanStack Query",
  role: "Contributor",
  prLink: "https://github.com/TanStack/query/pull/1234",
  impact: "إصلاح تسرب ذاكرة في دالة إلغاء الاستعلامات وتحسين توثيق الأنواع في TypeScript"
};`,
      advancedExample: `// بروتوكول فتح طلب سحب (PR Template) احترافي في مشاريع المصادر المفتوحة
/**
 * ## 📌 Description of Fix
 * Fixes #4821 - Memory leak in useInfiniteQuery unmount lifecycle.
 * 
 * ## 🔍 Root Cause
 * The abort listener was not detached when the component unmounted
 * before the query settled.
 * 
 * ## ✅ Verification Checklist
 * - [x] Added unit tests reproducing the issue in \`infiniteQuery.test.ts\`.
 * - [x] All 842 existing tests pass cleanly (\`npm run test\`).
 * - [x] TypeScript builds with zero type errors (\`npm run typecheck\`).
 * - [x] Followed Conventional Commits convention.
 */`,
      outputExplanation: "يوفر هذا الطلب لمشرفي المشروع (Maintainers) كل ما يحتاجونه لمراجعة الكود والموافقة على دمجه في غضون دقائق.",
      commonMistakes: "فتح Pull Request ضخم يغير مئات الملفات ويعيد تنسيق المسافات دون مناقشة المشرفين مسبقاً، مما يؤدي لإغلاق الطلب فوراً ورفضه.",
      bestPractices: "ابدأ بمساهمات صغيرة ومركزة: تحسين التوثيق، إصلاح أخطاء الطباعة، أو حل مشاكل مصنفة بـ `good first issue` قبل الدخول في تعديلات معمارية كبرى.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">1. Fork & Find</text>
  <text x="110" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">label: "good first issue"</text>
  <path d="M 195 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="340" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">2. Fix with Tests</text>
  <text x="340" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Follow CONTRIBUTING.md</text>
  <path d="M 425 90 L 485 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="45" width="80" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="530" y="85" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Merged! 🎉</text>
  <text x="530" y="105" fill="#10b981" fontSize="9" textAnchor="middle">CV Power</text>
</svg>`
    },
    {
      id: "34.5.i",
      title: "إنشاء مكتبات وأدوات مفتوحة المصدر ونشرها على npm (NPM Package Publishing)",
      technicalTerm: {
        english: "NPM Package Architecture & Bundle Bundlers (tsup / rollup)",
        pronunciation: "إن بي إم باكيدج آركيتكتشر آند باندل باندلرز",
        arabicMeaning: "معمارية حزم npm ومحزمات الحزم البرمجية"
      },
      description: "نشر حزمتك أو مكتبتك الخاصة على سجل npm الرسمي (NPM Registry) ينقلك من مجرد مستهلك للأدوات إلى صانع أدوات (Toolmaker). تتطلب صناعة الحزم معرفة: إعداد مخرجات التصدير المزدوجة (ESM للمشاريع الحديثة وCJS للتوافق القديم)، وتوليد ملفات الأنواع `.d.ts` تلقائياً باستخدام أدوات سريعة مثل `tsup`، وتحديد الملفات المضمنة عبر خاصية `files` في `package.json` لمنع نشر ملفات الاختبارات أو الأكواد غير الضرورية.",
      realWorldAnalogy: "مثل خباز يصنع قالباً خاصاً لتقطيع العجين؛ عندما يعجب القالب جيرانه ويبدأ في تصنيعه وبيعه في المتاجر لجميع الخبازين الآخرين ليستخدموه في مخابزهم.",
      whyItMatters: "يثبت لأي شركة أنك تتقن معايير هندسة البرمجيات القابلة لإعادة الاستخدام واكتمال الدورة البرمجية من الصفر حتى التوزيع العالمي.",
      syntax: "// نشر حزمة على npm بعد تسجيل الدخول\nnpm login\nnpm publish --access public",
      simpleExample: `// تكوين ملف package.json لحزمة React مخصصة
{
  "name": "use-arabic-number-formatter",
  "version": "1.0.0",
  "description": "خطاف React خفيف الوزن لتنسيق الأرقام والعملات باللغة العربية",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": ["dist"],
  "keywords": ["react", "arabic", "formatter", "hooks"]
}`,
      advancedExample: `// تكوين ملف tsup.config.ts المتقدم لحزم المكتبات الاحترافية
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'], // إنتاج نسختي ESM وCommonJS معاً
  dts: true, // توليد ملفات الأنواع .d.ts تلقائياً
  clean: true, // مسح مجلد dist قبل كل بناء
  minify: true, // ضغط الكود لأقصى خفة ممكنة
  sourcemap: true,
  external: ['react', 'react-dom'] // استبعاد React من الحزمة لمنع تكرار النسخ
});`,
      outputExplanation: "ينتج هذا التكوين حزمة مضغوطة فائقة الاحترافية تدعم إكمال TypeScript التلقائي وتعمل في جميع بيئات Vite وNext.js وNode.js بسلاسة.",
      commonMistakes: "تضمين `react` داخل حقل `dependencies` في حزمة المكتبة بدلاً من وضعها في `peerDependencies`، مما يتسبب في خطأ 'Multiple React Instances' المزعج للمستخدمين.",
      bestPractices: "اجعل `react` و`react-dom` دائماً في `peerDependencies`، وافحص حجم الحزمة النهائي عبر أداة `bundlephobia.com` للتأكد من خفتها.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">src/index.ts</text>
  <text x="110" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">TypeScript Source</text>
  <path d="M 195 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="340" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">tsup Bundler</text>
  <text x="340" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Outputs: ESM + CJS + .d.ts</text>
  <path d="M 425 90 L 485 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="45" width="80" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="530" y="85" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">npm live</text>
  <text x="530" y="105" fill="#10b981" fontSize="9" textAnchor="middle">Global Installs</text>
</svg>`
    },
    {
      id: "34.5.j",
      title: "اختيار التخصص الهندسي وبناء مسار مهني طويل الأمد (Engineering Specialization Pathways)",
      technicalTerm: {
        english: "T-Shaped Engineer & Career Trajectory Matrix",
        pronunciation: "تي شيبد إنجينير آند كاريير تراجيكتوري ماتريكس",
        arabicMeaning: "المهندس على شكل حرف T ومصفوفة المسارات المهنية"
      },
      description: "المسار المهني المستدام يعتمد على نموذج 'المهندس T-Shaped': قاعدة أفقية واسعة من المعرفة العامة (HTML, CSS, Web Security, Networking, Git)، وعمود رأسي عميق من التخصص الاحترافي النادر. المسارات الكبرى المتاحة أمامك اليوم: 1. Frontend Infrastructure Engineer (بناء أنظمة التصميم وأدوات المطورين والـ Tooling)، 2. Full-Stack SaaS Engineer (بناء المنتجات الشاملة بـ Next.js وNode.js وقواعد البيانات والمدفوعات)، 3. Performance & Design Engineer (المتخصص في الرسوم، والتفاعل البصري الفائق، ومؤشرات Core Web Vitals).",
      realWorldAnalogy: "مثل الطبيب البشري؛ يدرس الطب العام ويفهم وظائف جميع أعضاء الجسم (القاعدة الأفقية للـ T)، ثم يتخصص بعمق لسنوات في جراحة القلب أو المخ والأعصاب (العمود الرأسي للـ T) ليصبح خبيراً نادراً ومطلوباً عالمياً.",
      whyItMatters: "التخصص الدقيق يجعلك لا تقارن بملايين المطورين العاديين، ويمنحك قوة تفاوضية عالية وأماناً وظيفياً ثابتاً في سوق العمل المتغير.",
      syntax: "// نموذج المهندس T-Shaped:\nHorizontal [General]: Networking | HTTP | Git | UI/UX | CI/CD | Testing\nVertical   [Specialty]: React Fiber Internals | Next.js Architecture | Performance",
      simpleExample: `// خريطة التخصصات الهندسية الكبرى في بيئة React
export const CAREER_SPECIALIZATION_TRACKS = {
  UI_ENGINEER: {
    focus: 'أنظمة التصميم، الرسوم المتحركة، وإمكانية الوصول WCAG',
    tools: ['Tailwind CSS', 'Framer Motion', 'Radix UI', 'Storybook']
  },
  FULLSTACK_SAAS: {
    focus: 'بناء المنصات الشاملة، قواعد البيانات، والفوترة والتكاملات',
    tools: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Auth.js']
  },
  PERFORMANCE_SPECIALIST: {
    focus: 'تسريع المواقع الضخمة، الـ Profiling، ومؤشرات Core Web Vitals',
    tools: ['React Profiler', 'Chrome Tracing', 'Bundle Analyzer', 'WebAssembly']
  }
};`,
      advancedExample: `// خطة التقييم الذاتي والتطور المهني السنوي (Career Development Framework)
export function evaluateMyEngineeringLevel(profile: {
  knowsArchitecture: boolean;
  writesAutomatedTests: boolean;
  contributesCrossFunctional: boolean;
  mentorsOthers: boolean;
}) {
  if (profile.knowsArchitecture && profile.writesAutomatedTests && profile.contributesCrossFunctional && profile.mentorsOthers) {
    return { level: 'Senior / Staff Engineer', nextStep: 'قيادة الاستراتيجيات المعمارية وإدارة الفرق الهندسية الكبرى' };
  }
  if (profile.knowsArchitecture && profile.writesAutomatedTests) {
    return { level: 'Mid-Level Engineer', nextStep: 'تعزيز مهارات التوجيه (Mentorship) والمفاضلات الهندسية (Trade-offs)' };
  }
  return { level: 'Junior / Associate Engineer', nextStep: 'بناء مشاريع متكاملة والتركيز على جودة الكود والاختبارات الآلية' };
}`,
      outputExplanation: "يوفر هذا النموذج بوصلة واضحة للمطور لمعرفة موقعه في السلم المهني والخطوات الدقيقة اللازمة للانتقال إلى الرتبة الهندسية التالية.",
      commonMistakes: "محاولة تعلم كل تقنية جديدة تظهر يومياً بشكل سطحي دون الغوص بعمق في التخصص الذي تحبه وتبدع فيه.",
      bestPractices: "كن مهندساً بنموذج T-Shaped: افهم دورة تطوير الويب كاملة، وركز عمقك في بناء تطبيقات React وNext.js متكاملة وعالية الجودة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="50" y="35" width="500" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="300" y="60" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Horizontal Breadth (General Web: HTTP, Git, Testing, UI/UX, CI/CD)</text>
  <rect x="230" y="75" width="140" height="85" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="300" y="105" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Vertical Depth</text>
  <text x="300" y="125" fill="#cbd5e1" fontSize="9" textAnchor="middle">React & Next.js Pro</text>
  <text x="300" y="145" fill="#10b981" fontSize="9" textAnchor="middle">Architect Level</text>
</svg>`
    }
  ],
  quizzes: [
    {
      id: "quiz-34-5-1",
      question: "ما معنى أن تكون مهندساً بنموذج T-Shaped في عالم تطوير البرمجيات؟",
      options: [
        "أن تكتب الكود بحرف T فقط",
        "أن تمتلك قاعدة عريضة من المعرفة العامة بأساسيات الويب (العارضة الأفقية) مع تخصص عميق واستثنائي في تقنية محددة كـ React المعمارية (العمود الرأسي)",
        "أن تعمل فقط في فترات الصباح",
        "أن ترفض استخدام TypeScript"
      ],
      correctAnswer: 1,
      explanation: "نموذج T-Shaped يجمع بين القدرة على التعاون وفهم كافة جوانب هندسة البرمجيات مع التميز والعمق الفائق في تخصصك الرئيسي."
    },
    {
      id: "quiz-34-5-2",
      question: "ما الفائدة الجوهرية من ميزة Partial Prerendering (PPR) في معمارية Next.js الحديثة؟",
      options: [
        "إيقاف تشغيل الخادم عند انقطاع الإنترنت",
        "الدمج السلس بين الهيكل الثابت فائق السرعة من شبكة CDN والبيانات الديناميكية المتدفقة في نفس الصفحة وفي طلب واحد",
        "حذف صور الموقع لتسريع التحميل",
        "تلوين الأكواد باللون الأخضر تلقائياً"
      ],
      correctAnswer: 1,
      explanation: "PPR يقدم سرعة الـ Static Sites الثابتة لـ 90% من الصفحة مع الاحتفاظ بحرية التدفق الديناميكي للأقسام الحية في نفس الوقت."
    },
    {
      id: "quiz-34-5-3",
      question: "لماذا يجب وضع مكتبات مثل react وreact-dom في حقل peerDependencies عند نشر حزمة على npm؟",
      options: [
        "لتنزيل نسختين مختلفتين من React للمستخدم",
        "لضمان استخدام نسخة React الموجودة مسبقاً في مشروع العميل ومنع تثبيت نسخ مكررة تتسبب في أخطاء تضارب الخطافات",
        "لأن npm تمنع استخدام dependencies",
        "لتقليل سعر الحزمة في المتجر"
      ],
      correctAnswer: 1,
      explanation: "تعتمد خطافات React على وجود نسخة واحدة فقط من المكتبة في شجرة الذاكرة، ووضعها في `peerDependencies` يمنع تكرار النسخ وتضاربها."
    }
  ],
  practicalExercise: {
    id: "exercise-34-5",
    title: "بناء بوصلة التقييم المهني الذاتي واختيار مسار التخصص",
    description: "قم بإنشاء مكون تفاعلي يقدم اختبار تقييم ذاتي لمهارات المهندس، يحسب درجتك الحالية في 4 محاور (المعمارية، الاختبارات، الأداء، والتواصل)، ويقترح مسار التخصص الأمثل لنقاط قوتك.",
    hints: [
      "احتفظ بمصفوفة أسئلة تغطي المحاور الأربعة.",
      "احسب النتيجة الإجمالية واعرض شارة الرتبة الهندسية وخطة العمل المستقبلية.",
      "احرص على كتابة تعليق عربي فوق كل سطر برمجي يوضح الغرض من الكود."
    ],
    solution: `// الحل النموذجي لبوصلة التقييم والتوجيه المهني التفاعلية
import React, { useState } from 'react';

// محاور المهارات الهندسية
const SKILLS = [
  { id: 'arch', label: 'أتقن معمارية React وNext.js وتطبيع البيانات', track: 'Full-Stack SaaS' },
  { id: 'tests', label: 'أكتب اختبارات آلية موثوقة (Vitest & RTL) مع كل ميزة', track: 'Quality & Staff' },
  { id: 'perf', label: 'أعرف كيف أشخص وأحل مشاكل الأداء وCore Web Vitals', track: 'Performance Specialist' },
  { id: 'ui', label: 'أتقن بناء أنظمة التصميم (Design Systems) وإمكانية الوصول a11y', track: 'UI / Design Engineer' }
];

export function CareerCompassTracker() {
  // حالة المهارات المحددة
  const [selectedSkills, setSelectedSkills] = useState(new Set());

  // تبديل اختيار مهارة
  const toggleSkill = (id) => {
    setSelectedSkills(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const score = selectedSkills.size;

  const getRank = () => {
    if (score === 4) return { title: 'Senior / Staff React Engineer 🌟', desc: 'جاهز لقيادة المعمارية الهندسية في كبرى الشركات العالمية.' };
    if (score >= 2) return { title: 'Mid-Level React Engineer 🚀', desc: 'مهندس متمرس، ركز على تعميق المهارات المتبقية والـ Mentorship.' };
    return { title: 'Junior / Associate React Developer 🌱', desc: 'بداية ممتازة، ركز على بناء مشاريع كبرى وكتابة الاختبارات.' };
  };

  const rank = getRank();

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 font-sans text-xs">
      <div>
        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">بوصلة التطور المهني</span>
        <h3 className="text-base font-black text-white mt-1">تقييم مهارات المهندس المحترف (T-Shaped Assessment)</h3>
        <p className="text-slate-400 mt-1">حدد المهارات التي تتقنها حالياً لمعرفة مستواك ومسار تخصصك المقترح:</p>
      </div>

      <div className="space-y-2.5">
        {SKILLS.map(skill => {
          const isChecked = selectedSkills.has(skill.id);
          return (
            <div
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={\`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between \${
                isChecked
                  ? 'bg-indigo-600/20 border-indigo-500 text-white'
                  : 'bg-slate-850 border-slate-800 text-slate-350 hover:bg-slate-800'
              }\`}
            >
              <div className="flex items-center gap-2.5">
                <span className={\`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold \${
                  isChecked ? 'bg-indigo-600 text-white' : 'border border-slate-600'
                }\`}>
                  {isChecked && '✓'}
                </span>
                <span className="font-semibold">{skill.label}</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">[{skill.track}]</span>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800 space-y-2 text-center">
        <span className="text-slate-400 text-xs">مستواك الهندسي الحالي ({score} من 4):</span>
        <h4 className="text-base font-black text-emerald-400">{rank.title}</h4>
        <p className="text-slate-350 leading-relaxed text-[11px]">{rank.desc}</p>
      </div>
    </div>
  );
}`
  },
  topicInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Continuous Learning & Career Specialization Blueprint</text>
  <rect x="40" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="115" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Staying Ahead</text>
  <text x="115" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Official Docs & RFCs</text>
  <text x="115" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">SemVer Migration</text>
  <text x="115" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Next.js PPR & Turbo</text>
  <text x="115" y="185" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Living Knowledge</text>
  <path d="M 195 135 L 235 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="315" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Ecosystem Reach</text>
  <text x="315" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">React Native (Expo)</text>
  <text x="315" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Three.js / WebGL R3F</text>
  <text x="315" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">NPM Package Author</text>
  <text x="315" y="185" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">Toolmaker Mind</text>
  <path d="M 395 135 L 435 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="505" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Career Longevity</text>
  <text x="505" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">T-Shaped Mastery</text>
  <text x="505" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Open Source PRs</text>
  <text x="505" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">High Industry Trust</text>
  <text x="505" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Global Market</text>
</svg>`
};

