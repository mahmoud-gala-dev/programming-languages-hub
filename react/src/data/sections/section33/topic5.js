// topic5.js - القسم 33، الموضوع 5: مشروع 14: تطبيق SaaS باستخدام Next.js (Enterprise Full-Stack SaaS Platform)
// يحتوي على 17 موضوعاً فرعياً مفصلاً وفق معايير الجودة الصارمة والشرح من الصفر

export const TOPIC_33_5 = {
  id: "topic-33-5",
  title: "مشروع 14: تطبيق SaaS باستخدام Next.js",
  description: "دليل معماري وهندسي إنتاجي متكامل لبناء منصة برمجيات كخدمة (SaaS) باستخدام Next.js App Router وTypeScript، تدعم تعدد المستأجرين (Multi-tenancy)، مكونات الخادم (RSC)، إدارة الاشتراكات مع Stripe Webhooks، وسجلات التدقيق والمراقبة والنشر المستمر.",
  subtopics: [
    {
      id: "33.5.a",
      title: "تحديد فكرة المنتج ومتطلباته (Product Scope & SaaS PRD)",
      technicalTerm: {
        english: "Product Requirements Document (PRD) & Domain Modeling",
        pronunciation: "برودكت ريكوايرمينتس دوكيومنت آند دومين موديلينج",
        arabicMeaning: "وثيقة متطلبات المنتج ونمذجة نطاق الأعمال"
      },
      description: "قبل كتابة أي سطر برمجي لمشروع SaaS، يجب صياغة وثيقة متطلبات المنتج (PRD) وتحديد النموذج الربحي (B2B SaaS). يتضمن ذلك تحديد المشكلة التي يحلها المنتج، شخصية المشتري (Buyer Persona)، مقاييس النجاح الأساسية مثل الإيرادات المتكررة شهرياً (MRR)، وتحديد الكيانات الأساسية للنطاق: المنظمات (Organizations)، الأعضاء (Memberships)، الاشتراكات (Subscriptions)، وخطط التسعير (Tiers: Starter, Pro, Enterprise).",
      realWorldAnalogy: "مثل المخطط الهندسي لبرج تجاري متكامل؛ قبل وضع أول حجر أساس، يجب تحديد عدد الطوابق، مداخل الشركات، أنظمة الأمان، وتكلفة الإيجار لكل جناح مكتبي.",
      whyItMatters: "البدء في البرمجة دون تحديد دقيق لنموذج البيانات ومتطلبات SaaS يؤدي إلى إعادة كتابة معمارية المشروع بالكامل بعد بضعة أشهر لعدم توافقها مع اشتراكات المؤسسات.",
      syntax: "// نموذج كيانات SaaS الأساسية (PRD Entities)\ninterface Organization { id: string; name: string; slug: string; stripeCustomerId: string; plan: 'free' | 'pro' | 'enterprise'; }\ninterface User { id: string; email: string; defaultOrgId: string; }",
      simpleExample: `// تعريف ثوابت خطط الاشتراك في وثيقة المنتج
export const SAAS_PLANS = {
  FREE: { id: 'plan_free', name: 'البداية', price: 0, maxMembers: 3, storageGb: 1 },
  PRO: { id: 'plan_pro', name: 'الاحترافية', price: 29, maxMembers: 15, storageGb: 50 },
  ENTERPRISE: { id: 'plan_ent', name: 'المؤسسات', price: 99, maxMembers: 100, storageGb: 500 }
};

export function PlanSummaryBadge({ planKey }) {
  const plan = SAAS_PLANS[planKey] || SAAS_PLANS.FREE;
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
      خطة: {plan.name} ({plan.price} $/شهر)
    </span>
  );
}`,
      advancedExample: `// مخطط نطاق البيانات (Domain Matrix) لتقييد الميزات حسب باقة الاشتراك
export const FEATURE_ENTITLEMENTS = {
  API_ACCESS: ['plan_pro', 'plan_ent'],
  AUDIT_LOGS: ['plan_ent'],
  CUSTOM_DOMAIN: ['plan_pro', 'plan_ent'],
  SSO_SAML: ['plan_ent']
};

export class EntitlementEngine {
  // فحص استحقاق المنظمة للميزة المحددة
  static canAccessFeature(orgPlan, featureKey) {
    const allowedPlans = FEATURE_ENTITLEMENTS[featureKey];
    if (!allowedPlans) return false;
    return allowedPlans.includes(orgPlan);
  }

  // إرجاع رسالة ترقية الخطة عند محاولة الوصول لميزة محظورة
  static getUpgradeNudge(featureKey) {
    if (featureKey === 'AUDIT_LOGS' || featureKey === 'SSO_SAML') {
      return 'هذه الميزة متاحة حصرياً لمشتركي خطة المؤسسات (Enterprise). يرجى ترقية حسابك.';
    }
    return 'يرجى ترقية خطتك إلى الخطة الاحترافية (Pro) للاستفادة من هذه الإمكانية.';
  }
}`,
      outputExplanation: "يوفر الكود نموذجاً معمارياً مركزياً يربط خطط الأسعار بصلاحيات الميزات، مما يسهل قفل أو فتح الميزات في الواجهة وقاعدة البيانات بشكل متسق.",
      commonMistakes: "كتابة شروط فحص الخطة بشكل يدوي مبعثر داخل المكونات مثل `if (user.plan === 'pro')`، مما يجعل تعديل شروط الباقات كابوساً صيانة مستقبلاً.",
      bestPractices: "اعتمد دائماً محرك استحقاق مركزي (Centralized Entitlements Service) يقوم على فحص القدرات (Capabilities) وليس أسماء الخطط المجردة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="160" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="70" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Free Tier ($0)</text>
  <text x="110" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">Up to 3 Users</text>
  <text x="110" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Core Features</text>
  <rect x="220" y="40" width="160" height="100" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="300" y="70" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Pro Tier ($29)</text>
  <text x="300" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">15 Users + API</text>
  <text x="300" y="115" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Custom Domain</text>
  <rect x="410" y="40" width="160" height="100" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="490" y="70" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">Enterprise ($99)</text>
  <text x="490" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">Unlimited + SSO</text>
  <text x="490" y="115" fill="#cbd5e1" fontSize="10" textAnchor="middle">Audit Logs & SLA</text>
</svg>`
    },
    {
      id: "33.5.b",
      title: "إنشاء تطبيق Next.js باستخدام TypeScript وموجه التطبيق (App Router Setup)",
      technicalTerm: {
        english: "Next.js 14+ App Router & TypeScript Architecture",
        pronunciation: "نكست جيه إس فورتين آب راوتر آند تايب سكريبت آركيتكتشر",
        arabicMeaning: "معمارية موجه التطبيق App Router وتايب سكريبت في Next.js"
      },
      description: "تعتمد مشاريع الـ SaaS الحديثة على موجه التطبيق (Next.js App Router) داخل مجلد `src/app`. يوفر هذا النظام تجميع المسارات المنطقية (Route Groups) مثل `(marketing)` للصفحات العامة و`(dashboard)` للوحة التحكم الخاصة، بالإضافة إلى ملفات التخطيط المتداخلة (`layout.tsx`)، وحالات التحميل التلقائية (`loading.tsx`)، وحواجز التقاط الأخطاء (`error.tsx`).",
      realWorldAnalogy: "مثل مبنى سكني وتجاري مشترك؛ له مدخل رئيسي فاخر للمتسوقين (الصفحات العامة)، ومصعد خاص ببطاقات إلكترونية ينقل الموظفين فقط إلى مكاتبهم (لوحة التحكم).",
      whyItMatters: "عزل التخطيط العام عن لوحة التحكم يمنع تحميل مكتبات وأكواد لوحة التحكم الثقيلة للزوار العاديين، مما يحافظ على سرعة قصوى لصفحة الهبوط.",
      syntax: "/* هيكلة مجلدات App Router المقترحة */\nsrc/\n  app/\n    (marketing)/layout.tsx, page.tsx\n    (dashboard)/[orgSlug]/layout.tsx, page.tsx\n    api/\n      webhook/stripe/route.ts",
      simpleExample: `// مثال لملف تخطيط لوحة التحكم المتداخل (dashboard)/[orgSlug]/layout.tsx
import React from 'react';

export default function DashboardLayout({ children, params }) {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans">
      {/* شريط جانبي خاص بالمنظمة المحددة */}
      <aside className="w-64 bg-slate-900 border-e border-slate-800 p-4 flex flex-col justify-between">
        <div>
          <div className="font-bold text-sm text-indigo-400 mb-6">🏢 {params.orgSlug}</div>
          <nav className="space-y-1 text-xs text-slate-350">
            <div className="p-2 bg-slate-800 rounded text-white font-medium">لوحة المعلومات</div>
            <div className="p-2 hover:bg-slate-800/50 rounded cursor-pointer">الإعدادات</div>
          </nav>
        </div>
      </aside>

      {/* المحتوى الرئيسي للوحة */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}`,
      advancedExample: `// إعداد ملف root layout مع خطوط Next.js وتحسين الأداء ومزودي السياق
import React from 'react';

export const metadata = {
  title: {
    template: '%s | SaaS Platform Pro',
    default: 'SaaS Platform Pro - إدارة فرق العمل الذكية'
  },
  description: 'المنصة السحابية المتكاملة لإدارة المشاريع والاشتراكات والمؤسسات'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-indigo-500 selection:text-white">
        {/* تغليف التطبيق بمزودي السياق الضروريين فقط */}
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}`,
      outputExplanation: "ينشئ هذا التكوين هيكلاً متيناً لتطبيق الـ SaaS؛ بحيث تشترك صفحات التسويق في تخطيط عام، وتنعزل لوحة التحكم بتخطيط محمي ومفهرس برمز المنظمة `orgSlug`.",
      commonMistakes: "وضع وسوم `<html>` و`<body>` داخل ملفات `layout.tsx` الفرعية المتداخلة، حيث يسمح Next.js بوجودها فقط في الـ Root Layout الرئيسي.",
      bestPractices: "استخدم مجموعات المسارات `(marketing)` و`(dashboard)` بين قوسين دائريين لتنظيم المجلدات دون التأثير على شكل روابط الـ URL.",
      visualInfographic: `<svg viewBox="0 0 600 200" className="w-full h-auto">
  <rect width="600" height="200" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="160" height="140" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="110" y="55" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">app/ (Root)</text>
  <text x="110" y="80" fill="#94a3b8" fontSize="10" textAnchor="middle">layout.tsx (HTML/Body)</text>
  <text x="110" y="105" fill="#94a3b8" fontSize="10" textAnchor="middle">globals.css</text>
  <path d="M 190 70 L 250 70" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="30" width="150" height="65" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="335" y="55" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">(marketing)</text>
  <text x="335" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">Landing / Pricing</text>
  <path d="M 190 130 L 250 130" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="105" width="150" height="65" rx="8" fill="#1e293b" stroke="#818cf8" />
  <text x="335" y="130" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">(dashboard)</text>
  <text x="335" y="150" fill="#cbd5e1" fontSize="9" textAnchor="middle">/[orgSlug]/analytics</text>
  <rect x="440" y="60" width="130" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="505" y="90" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Route Isolation</text>
  <text x="505" y="112" fill="#94a3b8" fontSize="9" textAnchor="middle">Zero CSS/JS Leak</text>
</svg>`
    },
    {
      id: "33.5.c",
      title: "تصميم Dashboard احترافية (Enterprise SaaS Dashboard Shell)",
      technicalTerm: {
        english: "Enterprise Dashboard Shell & Metric Cards",
        pronunciation: "إنتربرايز داشبورد شيل آند ميتريك كاردز",
        arabicMeaning: "هيكل لوحة التحكم المؤسسية وبطاقات المقاييس"
      },
      description: "تحتاج لوحات تحكم SaaS إلى تجربة استخدام متميزة تعرض للمستخدم أهم مؤشرات الأداء (KPIs) فور تسجيل الدخول: بطاقات الإحصائيات (Stat Cards) مع نسب النمو مقارنة بالشهر السابق (+12% MoM)، ومخططات بيانية تفاعلية، وقائمة بآخر الأنشطة والعمليات التي تمت داخل المنظمة.",
      realWorldAnalogy: "مثل لوحة العدادات في الطائرة التجارية الحديثة؛ تزود الطيار بجميع قراءات السرعة والارتفاع واستهلاك الوقود والتنبيهات في شاشات متناسقة دون تشتيت انتباهه.",
      whyItMatters: "تقديم رؤية فورية وواضحة لقيمة المنتج الاستثمارية للعميل يثبت جدوى الاشتراك الشهري ويقلل من نسب إلغاء الاشتراكات (Churn).",
      syntax: "// بطاقة المقاييس القياسية\n<MetricCard title=\"MRR\" value=\"$12,450\" change=\"+14.2%\" trend=\"up\" />",
      simpleExample: `// مكون بطاقة مؤشر أداء رئيسي (KPI Stat Card)
import React from 'react';

export function SaaSMetricCard({ title, value, change, isPositive }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-3">
      <div className="flex justify-between items-center text-xs text-slate-400">
        <span>{title}</span>
        <span className={\`font-bold px-2 py-0.5 rounded-full text-[10px] \${
          isPositive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
        }\`}>
          {change}
        </span>
      </div>
      <div className="text-2xl font-black text-white tracking-tight">{value}</div>
    </div>
  );
}`,
      advancedExample: `// شبكة مؤشرات الأداء المتكاملة للوحة SaaS مع الرسوم البيانية المصغرة
import React from 'react';

export function DashboardOverview({ stats }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white">نظرة عامة على الأداء</h2>
          <p className="text-xs text-slate-400 mt-1">آخر تحديث قبل دقيقتين</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-indigo-600/20">
          تصدير التقرير الشهري 📊
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400">الدخل المتكرر (MRR)</span>
          <div className="text-2xl font-black text-white mt-2">$24,850</div>
          <span className="text-[10px] text-emerald-400 font-bold mt-1 inline-block">↑ +18.4% عن الشهر السابق</span>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400">المستخدمين النشطين</span>
          <div className="text-2xl font-black text-white mt-2">1,894</div>
          <span className="text-[10px] text-emerald-400 font-bold mt-1 inline-block">↑ +8.2% نمو مستمر</span>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400">معدل الإلغاء (Churn)</span>
          <div className="text-2xl font-black text-white mt-2">1.2%</div>
          <span className="text-[10px] text-emerald-400 font-bold mt-1 inline-block">↓ انخفاض ممتاز (-0.4%)</span>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400">سعة التخزين المستهلكة</span>
          <div className="text-2xl font-black text-white mt-2">64%</div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-indigo-500 h-full w-[64%]" />
          </div>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "تعرض هذه اللوحة مؤشرات الأعمال الحيوية بتسلسل بصري فوري يبرز نقاط القوة وفرص النمو لمسؤولي الشركات.",
      commonMistakes: "تحميل بيانات الرسوم البيانية الثقيلة دفعة واحدة في جذر الصفحة مما يسبب تأخير عرض بطاقات الأرقام الأولية.",
      bestPractices: "استخدم ميزة `Suspense` في React لعرض بطاقات الأرقام السريعة فوراً مع عرض مؤشر تحميل هيكلي (Skeleton) للرسوم البيانية الأثقل أثناء جلبها.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="25" y="30" width="125" height="120" rx="10" fill="#1e293b" stroke="#10b981" />
  <text x="40" y="55" fill="#94a3b8" fontSize="10">MRR</text>
  <text x="40" y="90" fill="#ffffff" fontSize="18" fontWeight="bold">$24.8k</text>
  <text x="40" y="125" fill="#34d399" fontSize="9">+18.4% MoM</text>
  <rect x="165" y="30" width="125" height="120" rx="10" fill="#1e293b" stroke="#38bdf8" />
  <text x="180" y="55" fill="#94a3b8" fontSize="10">Active Users</text>
  <text x="180" y="90" fill="#ffffff" fontSize="18" fontWeight="bold">1,894</text>
  <text x="180" y="125" fill="#38bdf8" fontSize="9">+8.2% New</text>
  <rect x="305" y="30" width="125" height="120" rx="10" fill="#1e293b" stroke="#f59e0b" />
  <text x="320" y="55" fill="#94a3b8" fontSize="10">Churn Rate</text>
  <text x="320" y="90" fill="#ffffff" fontSize="18" fontWeight="bold">1.2%</text>
  <text x="320" y="125" fill="#f59e0b" fontSize="9">Optimal Zone</text>
  <rect x="445" y="30" width="125" height="120" rx="10" fill="#1e293b" stroke="#6366f1" />
  <text x="460" y="55" fill="#94a3b8" fontSize="10">Quota Used</text>
  <text x="460" y="90" fill="#ffffff" fontSize="18" fontWeight="bold">64%</text>
  <rect x="460" y="115" width="95" height="6" rx="3" fill="#334155" />
  <rect x="460" y="115" width="60" height="6" rx="3" fill="#818cf8" />
</svg>`
    },
    {
      id: "33.5.d",
      title: "بناء صفحات تسويقية محسنة لمحركات البحث (SEO Landing Page)",
      technicalTerm: {
        english: "Conversion-Focused SEO Landing Page",
        pronunciation: "كونفيرجن فوكاسد إس إي أو لاندينج بيج",
        arabicMeaning: "صفحة هبوط تسويقية تركز على التحويل ومحركات البحث"
      },
      description: "صفحة الهبوط (Landing Page) هي واجهة الاستحواذ الرئيسية لعملاء SaaS. يجب أن تصمم لغرضين: إقناع الزائر بالتسجيل عبر نداء اتخاذ إجراء قوي (Hero Section CTA)، وتحقيق أعلى تقييم في مؤشرات الويب الأساسية (Core Web Vitals) عبر التصيير الثابت السريع (Static Prerendering) وتحسين وسوم الميتا ومقتطفات الأسئلة الشائعة (FAQ Schema).",
      realWorldAnalogy: "مثل واجهة المعرض الزجاجية المجهزة بأضواء مبهرة ولافتات واضحة تبرز العروض الحصرية وتجذب المارة للدخول وتجربة المنتج.",
      whyItMatters: "الحصول على سرعة تحميل خاطفة (LCP < 1.2s) يضمن تصدر الموقع لنتائج محركات البحث ورفع معدل تحويل الزائرين.",
      syntax: "// تصيير صفحة الهبوط كثابتة مسبقاً (SSG)\nexport const dynamic = 'force-static';\nexport default function LandingPage() { return <HeroSection />; }",
      simpleExample: `// قسم البطل في صفحة الهبوط (Hero Section)
import React from 'react';

export function SaaSHero() {
  return (
    <section className="py-20 px-4 text-center max-w-4xl mx-auto space-y-6">
      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
        🚀 الإصدار 2.0 متاح الآن لجميع الفرق
      </span>
      <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
        أدر مشاريع فريقك بذكاء وسرعة لم تعهدها من قبل
      </h1>
      <p className="text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
        المنصة السحابية الموحدة التي تجمع بين إدارة المهام، أتمتة العمليات، ومتابعة الأرباح في واجهة واحدة فائقة السرعة.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <button className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl text-sm transition-all shadow-xl shadow-indigo-600/30">
          ابدأ تجربتك المجانية لمدة 14 يوماً
        </button>
        <button className="px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-2xl text-sm border border-slate-800">
          مشاهدة العرض التوضيحي 🎥
        </button>
      </div>
    </section>
  );
}`,
      advancedExample: `// جدول مقارنة خطط الأسعار (Pricing Table) في صفحة الهبوط
import React from 'react';

const PLANS = [
  { name: 'الأساسية', price: 0, desc: 'مثالية للأفراد والفرق الناشئة', features: ['حتى 3 أعضاء', 'مساحة 2 جيجابايت', 'دعم عبر البريد'], isPopular: false },
  { name: 'الاحترافية', price: 29, desc: 'للشركات سريعة النمو', features: ['حتى 15 عضواً', 'مساحة 50 جيجابايت', 'ربط API وWebhooks', 'دعم فني متميز'], isPopular: true },
  { name: 'المؤسسات', price: 99, desc: 'للأمان والتحكم الكامل', features: ['أعضاء غير محدودين', 'مساحة 500 جيجابايت', 'تسجيل الدخول الموحد SSO', 'مدير حساب مخصص'], isPopular: false }
];

export function SaaSInteractivePricing() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-black text-white">خطط تسعير بسيطة وشفافة</h2>
        <p className="text-xs text-slate-400 mt-2">لا توجد رسوم خفية. قم بالإلغاء في أي وقت.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {PLANS.map(plan => (
          <div
            key={plan.name}
            className={\`p-6 rounded-2xl bg-slate-900 border flex flex-col justify-between transition-all \${
              plan.isPopular ? 'border-indigo-500 shadow-2xl shadow-indigo-500/10 ring-1 ring-indigo-500' : 'border-slate-800'
            }\`}
          >
            <div>
              {plan.isPopular && (
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-600 text-white inline-block mb-3">
                  الأكثر طلباً ⭐
                </span>
              )}
              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{plan.desc}</p>
              <div className="my-6">
                <span className="text-3xl font-black text-white">\${plan.price}</span>
                <span className="text-xs text-slate-500 font-medium"> / شهرياً</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-350">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-indigo-400">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <button className={\`w-full mt-8 py-3 rounded-xl text-xs font-bold transition-all \${
              plan.isPopular ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-800 hover:bg-slate-750 text-slate-200'
            }\`}>
              اختيار الخطة
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}`,
      outputExplanation: "يوفر الكود صفحة هبوط تسويقية مصممة بأعلى معايير الـ Conversion Rate Optimization، مع جداول تسعير واضحة ومحفزة للتحويل.",
      commonMistakes: "تحميل مكونات العميل التفاعلية الثقيلة في صفحة الهبوط، مما يقلل من مؤشر Performance في تقرير Google Lighthouse.",
      bestPractices: "اجعل صفحة الهبوط مكون خادم بالكامل (RSC) مع عزل المكونات التفاعلية الصغيرة فقط (مثل حاسبة الأسعار) داخل `'use client'`.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="30" width="220" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="140" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Hero Conversion CTA</text>
  <text x="140" y="80" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">Catchy H1 + 14d Trial</text>
  <rect x="60" y="100" width="160" height="30" rx="6" fill="#6366f1" />
  <text x="140" y="120" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Start Free Trial ➔</text>
  <path d="M 265 90 L 305 90" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="320" y="30" width="250" height="120" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="445" y="55" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Core Web Vitals</text>
  <text x="445" y="80" fill="#cbd5e1" fontSize="10" textAnchor="middle">LCP: 0.8s (Static HTML)</text>
  <text x="445" y="105" fill="#cbd5e1" fontSize="10" textAnchor="middle">CLS: 0.00 (Zero layout shift)</text>
  <text x="445" y="130" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">100/100 Lighthouse Score</text>
</svg>`
    },
    {
      id: "33.5.e",
      title: "إنشاء نظام مصادقة آمن (Auth.js / Supabase Auth)",
      technicalTerm: {
        english: "Edge-Compatible Session Management",
        pronunciation: "إيدج كومباتيبل سيشن مانيجمينت",
        arabicMeaning: "إدارة الجلسات المتوافقة مع حوسبة الحافة"
      },
      description: "المصادقة في تطبيقات Next.js الحديثة تتطلب معالجة فورية على حوسبة الحافة (Edge Middleware). باستخدام مكتبات مثل `Auth.js` (NextAuth v5) أو `Supabase Auth`، يتم فحص رموز الجلسات (JWT / Session Cookies) وتجديدها في ملف `middleware.ts` قبل وصول الطلب إلى مسارات الصفحات، وتوجيه المستخدمين غير المسجلين فوراً إلى صفحة `/login` وحماية مسارات `/dashboard/*`.",
      realWorldAnalogy: "مثل رجل الأمن الواقف عند بوابة المبنى الدوارة؛ يفحص بطاقة كل قادم في جزء من الثانية؛ فإن كانت صالحة فتح له البوابة، وإن كانت منتهية وجهه فوراً إلى مكتب الاستقبال لتجديدها.",
      whyItMatters: "حماية جميع مسارات وبيانات لوحة التحكم والـ API تلقائياً على مستوى خادم الحافة السريع دون الاعتماد على تحقق بطيء في واجهة العميل.",
      syntax: "// حماية المسارات في middleware.ts\nexport { auth as middleware } from '@/auth';\nexport const config = { matcher: ['/dashboard/:path*', '/api/protected/:path*'] };",
      simpleExample: `// فحص جلسة المستخدم داخل Server Component
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function ProtectedDashboardPage() {
  // جلب الجلسة مباشرة على الخادم بسرعة فائقة
  const session = await auth();

  // إذا لم يكن مسجلاً، يتم توجيهه تلقائياً
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-white">مرحباً بك، {session.user.name} 👋</h1>
      <p className="text-xs text-slate-400 mt-1">البريد الإلكتروني: {session.user.email}</p>
    </div>
  );
}`,
      advancedExample: `// ملف middleware.ts الشامل لحماية المسارات وإعادة التوجيه حسب حالة الدخول
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('saas_session_token')?.value;
  const { pathname } = request.nextUrl;

  const isAuthRoute = pathname.startsWith('/login') || pathname.startsWith('/signup');
  const isDashboardRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/admin');

  // حالة 1: المستخدم غير مسجل ويحاول دخول لوحة التحكم
  if (isDashboardRoute && !sessionToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // حالة 2: المستخدم مسجل بالفعل ويحاول دخول صفحة تسجيل الدخول مجدداً
  if (isAuthRoute && sessionToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/login', '/signup']
};`,
      outputExplanation: "يعمل هذا الوسيط البرمجي (Middleware) كدرع حماية يسبق تحميل أي صفحة، مانعاً غير المصرح لهم من فتح لوحة التحكم، وموجهاً المسجلين تلقائياً إلى واجهتهم.",
      commonMistakes: "الاعتماد على فحص الجلسة داخل `useEffect` في المتصفح فقط؛ مما يسبب وميضاً بظهور أجزاء من لوحة التحكم قبل حدوث إعادة التوجيه.",
      bestPractices: "قم دائماً بحظر المسارات في `middleware.ts` على مستوى خادم الحافة (Edge) لضمان عدم تسريب أي بايت من بيانات الصفحة لغير المسجلين.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Incoming Request</text>
  <text x="95" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">/dashboard/acme</text>
  <path d="M 165 90 L 235 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="310" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Edge Middleware</text>
  <text x="310" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Token valid? (5ms)</text>
  <path d="M 385 65 L 455 65" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="420" y="55" fill="#10b981" fontSize="9" textAnchor="middle">YES</text>
  <rect x="460" y="45" width="110" height="40" rx="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="515" y="70" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Render Page</text>
  <path d="M 385 115 L 455 115" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
  <text x="420" y="130" fill="#ef4444" fontSize="9" textAnchor="middle">NO</text>
  <rect x="460" y="95" width="110" height="40" rx="6" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" />
  <text x="515" y="120" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">Redirect /login</text>
</svg>`
    },
    {
      id: "33.5.f",
      title: "تنفيذ إدارة المنظمات وفرق العمل (Multi-tenancy Architecture)",
      technicalTerm: {
        english: "Logical Multi-Tenancy & Tenant Isolation",
        pronunciation: "لوجيكال ملتي تينانسي آند تينانت آيسوليشن",
        arabicMeaning: "تعدد المستأجرين المنطقي وعزل بيانات المؤسسات"
      },
      description: "تعدد المستأجرين (Multi-tenancy) هو المعمارية التي تتيح لآلاف الشركات والفرق العمل على نفس التطبيق وقاعدة البيانات مع عزل بيانات كل شركة تماماً (Tenant Isolation). يمكن للمستخدم الواحد الانتماء لأكثر من منظمة (مثل منظمة عمله الرسمية، ومنظمة مشروعه الجانبي)، ويتم توجيهه حسب مسار المنظمة الفرعي في الرابط `/[orgSlug]/*` أو النطاق المخصص `company.saas.com`.",
      realWorldAnalogy: "مثل مبنى الفندق الضخم؛ يشترك جميع النزلاء في نفس المصاعد وأنابيب المياه، لكن كل نزيل يملك مفتاحاً إلكترونياً خاصاً لا يفتح إلا باب غرفته المحكمة.",
      whyItMatters: "يقلل تكلفة البنية التحتية للخوادم بنسبة 90% مقارنة بإنشاء قاعدة بيانات منفصلة لكل عميل، ويسهل صيانة وتحديث التطبيق.",
      syntax: "// نموذج عضوية المنظمة (Many-to-Many)\ninterface Membership {\n  id: string;\n  userId: string;\n  organizationId: string;\n  role: 'owner' | 'admin' | 'member';\n}",
      simpleExample: `// مبدل المنظمات السريع في شريط التنقل (Organization Switcher)
import React from 'react';

export function OrgSwitcher({ organizations, currentOrgId, onSelectOrg }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-slate-400">المنظمة:</span>
      <select
        value={currentOrgId}
        onChange={(e) => onSelectOrg(e.target.value)}
        className="bg-slate-800 text-white rounded-lg px-3 py-1.5 text-xs font-semibold border border-slate-700 focus:outline-none"
      >
        {organizations.map(org => (
          <option key={org.id} value={org.id}>{org.name}</option>
        ))}
      </select>
    </div>
  );
}`,
      advancedExample: `// فلترة استعلامات قاعدة البيانات الصارمة بموجب منظمة المستأجر (Tenant Scope Guard)
export class TenantRepository {
  constructor(private db: any, private currentOrgId: string) {
    if (!currentOrgId) throw new Error('Security Violation: Multi-tenancy orgId is required');
  }

  // جلب مشاريع هذه المنظمة فقط لمنع تسرب بيانات المنظمات الأخرى
  async getProjects() {
    return await this.db.project.findMany({
      where: {
        organizationId: this.currentOrgId
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  // إنشاء مشروع جديد مع الحقن الإجباري لمعرف المنظمة
  async createProject(data: { name: string; description?: string }) {
    return await this.db.project.create({
      data: {
        ...data,
        organizationId: this.currentOrgId
      }
    });
  }
}`,
      outputExplanation: "يضمن هذا النمط المعماري حقن معرّف المنظمة الإجباري `organizationId` في جميع عمليات القراءة والكتابة، مما يمنع نهائياً أي خطأ برمجي قد يكشف بيانات منظمة لأخرى.",
      commonMistakes: "نسيان تضمين `where: { organizationId }` في استعلامات البحث أو التحديث، مما يسمح بتعديل بيانات عميل آخر إذا تم تمرير معرف `id` عشوائي.",
      bestPractices: "استخدم ميزة أمان الصفوف في قاعدة البيانات (PostgreSQL Row-Level Security - RLS) كطبقة حماية أساسية وغير قابلة للاختراق على مستوى محرك البيانات.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="150" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="105" y="70" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Tenant A (Acme)</text>
  <text x="105" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">org_id: 'org-1'</text>
  <text x="105" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Projects: [P1, P2]</text>
  <line x1="205" y1="30" x2="205" y2="150" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
  <text x="205" y="20" fill="#ef4444" fontSize="9" textAnchor="middle">STRICT ISOLATION</text>
  <rect x="230" y="40" width="150" height="100" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="305" y="70" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Tenant B (Stark)</text>
  <text x="305" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">org_id: 'org-2'</text>
  <text x="305" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Projects: [P3]</text>
  <path d="M 390 90 L 440 90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="445" y="40" width="125" height="100" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="507" y="70" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Shared DB</text>
  <text x="507" y="95" fill="#cbd5e1" fontSize="9" textAnchor="middle">Postgres RLS</text>
  <text x="507" y="115" fill="#34d399" fontSize="9" textAnchor="middle">Row Security</text>
</svg>`
    },
    {
      id: "33.5.g",
      title: "إدارة الأدوار والصلاحيات المتقدمة (Granular Organization RBAC)",
      technicalTerm: {
        english: "Organization RBAC & Invitation Tokens",
        pronunciation: "أورجانيزيشن آر باك آند إنفيتيشن توكنز",
        arabicMeaning: "التحكم في الوصول القائم على الأدوار ونظام رموز الدعوة"
      },
      description: "تتضمن منصات SaaS للشركات أربعة أدوار رئيسية داخل كل منظمة: 'المالك' (Owner) الذي يملك صلاحيات حذف المنظمة وإدارة الفوترة والاشتراكات؛ 'المسؤول' (Admin) الذي يدعو الأعضاء ويعدل الإعدادات العامة؛ 'العضو' (Member) الذي ينشئ ويحرر المشاريع؛ و'المشاهد' (Viewer) المخصص لعملاء الشركة الخارجيين للاطلاع على التقارير دون تعديل.",
      realWorldAnalogy: "مثل الصلاحيات في الحساب البنكي للشركات؛ المدير المالي والمالك فقط يملكان صلاحية تحويل الأموال، بينما المحاسب يسجل الفواتير، والمدقق يطبع كشوف الحسابات.",
      whyItMatters: "يمكن فرق العمل الكبيرة من التعاون دون القلق من قيام موظف عادي بتغيير خطة الاشتراك أو حذف مشاريع حساسة.",
      syntax: "// التحقق من صلاحية المنظمة\nconst canManageBilling = (membership) => membership.role === 'owner';\nconst canInviteMembers = (membership) => ['owner', 'admin'].includes(membership.role);",
      simpleExample: `// إخفاء إعدادات الفوترة لغير مالكي المنظمة
import React from 'react';

export function BillingSettingsTab({ userRole }) {
  if (userRole !== 'owner') {
    return (
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-400">
        🔒 إعدادات الفوترة والاشتراك متاحة فقط لمالك المنظمة (Owner).
      </div>
    );
  }

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
      <h4 className="text-sm font-bold text-white">إدارة الاشتراك والبطاقات البنكية</h4>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold">
        تحديث وسيلة الدفع 💳
      </button>
    </div>
  );
}`,
      advancedExample: `// نظام دعوة الأعضاء للمنظمة وتوليد رموز الدعوة الآمنة (Invitation Engine)
import crypto from 'crypto';

export class OrgInvitationService {
  // إنشاء دعوة مشفرة مع تحديد الدور وتاريخ انتهاء الصلاحية
  static async createInvite(db: any, orgId: string, email: string, role: string) {
    // التحقق من عدم وجود عضوية حالية
    const existingMember = await db.membership.findFirst({
      where: { organizationId: orgId, user: { email } }
    });
    if (existingMember) throw new Error('هذا المستخدم عضو بالفعل في هذه المنظمة');

    // توليد رمز فريد عشوائي آمن (Cryptographically Secure Token)
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 48); // صالح لمدة 48 ساعة

    return await db.invitation.create({
      data: {
        organizationId: orgId,
        email,
        role,
        token,
        expiresAt
      }
    });
  }
}`,
      outputExplanation: "ينشئ هذا النظام دعوات مشفرة محددة الصلاحية زمنياً، تتيح للمستخدم الانضمام للمنظمة بالدور المحدد مسبقاً بمجرد فتح الرابط.",
      commonMistakes: "إرسال معرف المنظمة في الرابط بشكل صريح دون رمز تشفير عشوائي، مما يتيح لأي مستخدم تخمين المعرف والانضمام للمنظمة دون إذن.",
      bestPractices: "استخدم دائماً رموز تشفير عشوائية (Random Tokens) ذات مدة انتهاء محددة (مثل 48 ساعة) مع التحقق من مطابقة البريد الإلكتروني للمدعو.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <g transform="translate(30, 40)">
    <rect width="115" height="100" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
    <text x="57" y="30" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Owner</text>
    <text x="57" y="55" fill="#cbd5e1" fontSize="9" textAnchor="middle">Billing & Plans</text>
    <text x="57" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">Delete Org</text>
  </g>
  <g transform="translate(170, 40)">
    <rect width="115" height="100" rx="8" fill="#1e293b" stroke="#818cf8" />
    <text x="57" y="30" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Admin</text>
    <text x="57" y="55" fill="#cbd5e1" fontSize="9" textAnchor="middle">Invite Members</text>
    <text x="57" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">Edit Settings</text>
  </g>
  <g transform="translate(310, 40)">
    <rect width="115" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
    <text x="57" y="30" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Member</text>
    <text x="57" y="55" fill="#cbd5e1" fontSize="9" textAnchor="middle">Create Projects</text>
    <text x="57" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">Manage Tasks</text>
  </g>
  <g transform="translate(450, 40)">
    <rect width="115" height="100" rx="8" fill="#1e293b" stroke="#64748b" />
    <text x="57" y="30" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">Viewer</text>
    <text x="57" y="55" fill="#cbd5e1" fontSize="9" textAnchor="middle">Read Only</text>
    <text x="57" y="75" fill="#cbd5e1" fontSize="9" textAnchor="middle">Client Reviews</text>
  </g>
</svg>`
    },
    {
      id: "33.5.h",
      title: "استخدام مكونات خادم React (React Server Components - RSC)",
      technicalTerm: {
        english: "React Server Components & Zero-Bundle Architecture",
        pronunciation: "ريأكت سيرفر كومبوننتس آند زيرو باندل آركيتكتشر",
        arabicMeaning: "مكونات خادم React ومعمارية الحزم الصفرية"
      },
      description: "مكونات خادم React (RSC) هي الثورة التقنية الكبرى في Next.js. يتم تصيير هذه المكونات حصرياً على الخادم كدوال غير متزامنة (`async/await`) تجلب البيانات مباشرة من قاعدة البيانات أو التخزين السحابي دون إرسال أي بايت من كود JavaScript الخاص بها إلى المتصفح (Zero JavaScript Bundle). يتم الاكتفاء بإرسال شجرة JSON بصرية خفيفة مع HTML الجاهز، مما يرفع سرعة التحميل إلى أقصى حد.",
      realWorldAnalogy: "مثل طلب وجبة جاهزة في مطعم فاخر؛ يقوم الطاهي بفرم وتقطيع المكونات وطهيها في المطبخ (الخادم)، ويقدم لك الطبق الجاهز الشهي على طاولتك، دون أن تضطر لإحضار السكاكين وأدوات الطهي معك إلى المطعم.",
      whyItMatters: "يحذف آلاف الكيلوبايتات من حزم JavaScript للمتصفح، ويحمي بيانات الاعتماد وأسرار قواعد البيانات من الظهور في أدوات فحص المتصفح.",
      syntax: "// مكون خادم قياسي يجلب البيانات مباشرة\nexport default async function TeamListPage({ params }) {\n  const members = await db.members.findMany({ where: { orgId: params.orgId } });\n  return <ul>{members.map(m => <li key={m.id}>{m.name}</li>)}</ul>;\n}",
      simpleExample: `// مكون خادم متوازي لجلب بيانات المنظمة مباشرة
import React from 'react';

// هذا المكون ينفذ على الخادم فقط ولا يرسل أي JS للمتصفح
export default async function OrganizationOverview({ orgId }) {
  // محاكاة جلب مباشر من قاعدة البيانات
  const org = await new Promise(resolve => setTimeout(() => resolve({ name: 'شركة التقنية المتقدمة', plan: 'Enterprise' }), 50));

  return (
    <div className="p-5 bg-slate-900 rounded-xl border border-slate-800">
      <h3 className="font-bold text-white text-base">{org.name}</h3>
      <span className="text-xs text-indigo-400">الخطة النشطة: {org.plan}</span>
    </div>
  );
}`,
      advancedExample: `// دمج مكونات الخادم مع مكونات العميل التفاعلية بنمط التداخل (Interleaving Pattern)
import React from 'react';
// استيراد مكون عميل تفاعلي يحتوي على حالة useState
import { ClientInteractiveFilter } from './ClientInteractiveFilter';

export default async function InvoicesServerPage({ params }: { params: { orgSlug: string } }) {
  // جلب الفواتير مباشرة على الخادم دون الحاجة لـ useEffect أو API Route
  const invoices = await fetch(\`https://api.internal/orgs/\${params.orgSlug}/invoices\`, {
    headers: { 'X-Internal-Secret': process.env.INTERNAL_SECRET! },
    cache: 'no-store' // جلب ديناميكي دائم
  }).then(r => r.json());

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">سجل الفواتير والمدفوعات</h2>
        <span className="text-xs text-slate-400">إجمالي الفواتير: {invoices.length}</span>
      </div>

      {/* تمرير بيانات الخادم الجاهزة كممتلكات لمكون العميل التفاعلي */}
      <ClientInteractiveFilter initialInvoices={invoices} />
    </div>
  );
}`,
      outputExplanation: "يجلب هذا الكود بيانات الفواتير من الخادم مباشرة بأمان تام باستخدام مفتاح داخلي سري لا يمكن للعميل رؤيته، ثم يسلمها لمكون العميل للفرز التفاعلي.",
      commonMistakes: "إضافة `'use client'` في قمة الصفحة دون داعٍ، مما يحرم الصفحة من مزايا جلب البيانات المباشر على الخادم ويزيد من حجم حزمة JavaScript.",
      bestPractices: "اجعل الصفحات مكونات خادم بشكل افتراضي، وانقل التفاعل الصغير (`onClick`, `useState`) إلى مكونات أوراق شجرة العرض (Leaf Components).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="160" height="100" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="110" y="70" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">React Server Comp</text>
  <text x="110" y="95" fill="#cbd5e1" fontSize="10" textAnchor="middle">Direct DB: async/await</text>
  <text x="110" y="115" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">0 KB JS Sent to Client</text>
  <path d="M 200 90 L 260 90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="270" y="40" width="140" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="340" y="70" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">RSC Stream Wire</text>
  <text x="340" y="95" fill="#cbd5e1" fontSize="9" textAnchor="middle">HTML + JSON payload</text>
  <text x="340" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">Instantly streamable</text>
  <path d="M 420 90 L 480 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="40" width="80" height="100" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="530" y="95" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Browser</text>
</svg>`
    },
    {
      id: "33.5.i",
      title: "تنفيذ إجراءات الخادم وعمليات التحقق (Server Actions & Zod Validation)",
      technicalTerm: {
        english: "Server Actions & Schema Validation with Zod",
        pronunciation: "سيرفر آكشنز آند سكيما فاليديشن وذ زاد",
        arabicMeaning: "إجراءات الخادم والتحقق من المخطط عبر Zod"
      },
      description: "إجراءات الخادم (Server Actions) تتيح استدعاء دوال الخادم مباشرة من نماذج HTML أو تفاعلات React دون الحاجة لإنشاء مسارات API يدوية (`/api/...`). تبدأ الدالة بتوجيه `'use server'`، ويتم التحقق من صحة المدخلات بشكل صارم باستخدام مكتبة `Zod`، وتحديث سجلات قاعدة البيانات، ثم إبطال التخزين المؤقت للصفحة باستخدام `revalidatePath` لتحديث الواجهة فوراً.",
      realWorldAnalogy: "مثل تقديم طلب رسمي في مكتب حكومي؛ تقوم بتعبئة النموذج، ويفحص الموظف صحة أوراقك بموجب القانون (التحقق مع Zod)، ويختم الطلب فوراً ويحدث سجلك في قاعدة البيانات دون انتظار وسيط.",
      whyItMatters: "يلغي الحاجة لكتابة كود جلب بيانات `fetch()` وكود مسارات `POST` منفصلة، ويضمن أماناً بنكياً بنسبة 100% للبيانات الواردة.",
      syntax: "// إجراء خادم قياسي مع Zod\n'use server';\nexport async function updateOrgName(formData: FormData) {\n  const parsed = schema.safeParse(Object.fromEntries(formData));\n  if (!parsed.success) return { error: 'بيانات غير صحيحة' };\n  await db.update(parsed.data);\n  revalidatePath('/dashboard');\n}",
      simpleExample: `// إجراء خادم بسيط لتحديث اسم المنظمة
'use server';

import { revalidatePath } from 'next/cache';

export async function renameOrganizationAction(orgId, newName) {
  // فحص أساسي لصحة الاسم
  if (!newName || newName.trim().length < 3) {
    return { success: false, message: 'يجب أن يتكون الاسم من 3 أحرف على الأقل' };
  }

  // محاكاة تحديث في قاعدة البيانات
  console.log(\`Updated org \${orgId} to \${newName}\`);

  // إعادة تنشيط كاش مسار لوحة التحكم لعرض الاسم الجديد فوراً
  revalidatePath('/dashboard');

  return { success: true };
}`,
      advancedExample: `// إجراء خادم متقدم ومحكم مع Zod والتحقق من صلاحيات الجلسة
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

// مخطط التحقق من حقول إنشاء المشروع الجديد
const CreateProjectSchema = z.object({
  name: z.string().min(3, 'اسم المشروع قصير جداً').max(50, 'اسم المشروع طويل جداً'),
  orgId: z.string().uuid('معرف منظمة غير صالح'),
  visibility: z.enum(['private', 'public'])
});

export async function createProjectAction(prevState: any, formData: FormData) {
  // 1. تحويل وقراءة المدخلات
  const rawData = {
    name: formData.get('name'),
    orgId: formData.get('orgId'),
    visibility: formData.get('visibility')
  };

  // 2. التحقق الصارم بواسطة Zod
  const validation = CreateProjectSchema.safeParse(rawData);
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: 'يرجى تصحيح أخطاء الإدخال'
    };
  }

  try {
    const { name, orgId, visibility } = validation.data;

    // 3. كتابة السجل في قاعدة البيانات
    // await db.project.create({ data: { name, orgId, visibility } });

    // 4. تحديث كاش مسار المشاريع
    revalidatePath(\`/dashboard/\${orgId}/projects\`);

    return { success: true, message: 'تم إنشاء المشروع بنجاح 🎉' };
  } catch (err: any) {
    return { message: err.message || 'حدث خطأ غير متوقع في الخادم' };
  }
}`,
      outputExplanation: "يوفر هذا الإجراء نمط معالجة متكامل يبدأ بالتحقق الدقيق من سلامة المدخلات في جانب الخادم، وينتهي بتحديث ذكي لكاش Next.js.",
      commonMistakes: "الاعتماد على التحقق من صحة النموذج في جانب العميل فقط دون فحص المدخلات داخل Server Action، مما يسمح بتمرير بيانات ضارة عبر أدوات Postman أو cURL.",
      bestPractices: "استخدم دائماً `zod.safeParse()` داخل إجراء الخادم وأعد كائن أخطاء مفصل للمستخدم بدلاً من إطلاق أخطاء غير معالجة تتسبب في انهيار الصفحة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">HTML <form></text>
  <text x="95" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">action={createAction}</text>
  <path d="M 165 90 L 235 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="310" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">'use server'</text>
  <text x="310" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Zod.safeParse()</text>
  <path d="M 385 90 L 455 90" stroke="#10b981" strokeWidth="2" />
  <rect x="460" y="45" width="110" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="515" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">DB Persist</text>
  <text x="515" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">revalidatePath()</text>
</svg>`
    },
    {
      id: "33.5.j",
      title: "ربط قاعدة البيانات عبر طبقة خادم (Prisma / Drizzle ORM)",
      technicalTerm: {
        english: "Type-Safe ORM Layer & Connection Pooling",
        pronunciation: "تايب سيف أو آر إم لاير آند كونيكشن بولينج",
        arabicMeaning: "طبقة نمذجة البيانات الآمنة وتجميع اتصالات الخادم"
      },
      description: "لضمان أمان وتكامل البيانات، يتم ربط تطبيق Next.js بقاعدة بيانات علائقية مثل PostgreSQL عبر طبقة ORM حديثة وآمنة مثل Prisma أو Drizzle ORM. نظراً لأن خوادم Vercel وServerless تفتح وتغلق دوال خادم متعددة في ثوانٍ، يجب استخدام ميزة تجميع الاتصالات (Connection Pooling عبر PgBouncer أو Prisma Accelerate / Neon) لمنع استنفاد الحد الأقصى لاتصالات قاعدة البيانات.",
      realWorldAnalogy: "مثل موظف الاستقبال الذي ينظم دخول المراجعين إلى قاعة الاجتماعات؛ يجمع الطلبات ويدخلهم في مجموعات منظمة بدلاً من السماح لمئات الأشخاص بالتدافع معاً داخل القاعة وتحطيم الأبواب.",
      whyItMatters: "يوفر إكمالاً تلقائياً آمناً لأسماء الجداول والحقول في TypeScript مع حماية مطلقة من هجمات حقن SQL (SQL Injection).",
      syntax: "// نموذج Prisma الشامل للـ SaaS\nmodel Organization {\n  id String @id @default(uuid())\n  name String\n  memberships Membership[]\n  subscriptions Subscription?\n}",
      simpleExample: `// تهيئة كائن Prisma الآمن من تعدد النسخ في بيئة التطوير
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['error']
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;`,
      advancedExample: `// استعلام مركب لجلب بيانات المنظمة مع الأعضاء والاشتراك النشط في طلب واحد
import { prisma } from '@/lib/prisma';

export async function getOrganizationFullDetails(orgSlug: string) {
  return await prisma.organization.findUnique({
    where: { slug: orgSlug },
    include: {
      memberships: {
        include: {
          user: {
            select: { id: true, name: true, email: true, image: true }
          }
        },
        orderBy: { createdAt: 'asc' }
      },
      subscriptions: {
        select: {
          id: true,
          status: true,
          currentPeriodEnd: true,
          priceId: true
        }
      }
    }
  });
}`,
      outputExplanation: "يجلب هذا الاستعلام بيانات المنظمة وأعضاءها وحالة اشتراكها دفعة واحدة بكفاءة عبر استعلام SQL مُحسن ومحمي من هجمات الحقن.",
      commonMistakes: "إنشاء نسخة `new PrismaClient()` جديدة داخل كل ملف استدعاء، مما يؤدي إلى نفاد اتصالات قاعدة البيانات (Connection Exhaustion) فور تشغيل خادم التطوير.",
      bestPractices: "استخدم دائماً نمط Singleton لتهيئة عميل قاعدة البيانات، واعتمد خدمات قواعد البيانات السحابية التي تدعم Serverless Pooling مثل Neon أو Supabase.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="100" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Next.js Serverless</text>
  <text x="100" y="100" fill="#94a3b8" fontSize="10" textAnchor="middle">100s of Lambdas</text>
  <path d="M 175 90 L 245 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="250" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="320" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Connection Pooler</text>
  <text x="320" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">PgBouncer / Neon</text>
  <path d="M 395 90 L 465 90" stroke="#10b981" strokeWidth="2" />
  <rect x="470" y="45" width="100" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="520" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">PostgreSQL</text>
  <text x="520" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">Strict Schema</text>
</svg>`
    },
    {
      id: "33.5.k",
      title: "إنشاء نظام خطط واشتراكات (Billing & Subscriptions Architecture)",
      technicalTerm: {
        english: "Metered & Tiered Subscription Architecture",
        pronunciation: "ميترد آند تيرد سبسكريبشن آركيتكتشر",
        arabicMeaning: "معمارية الاشتراكات المدرجة والمقاسة حسب الاستهلاك"
      },
      description: "تعتمد دورة حياة اشتراكات SaaS على حالتين رئيسيتين: الاشتراكات المدرجة (Tiered Subscriptions: شهري/سنوي)، والاشتراكات المقاسة حسب الاستهلاك (Metered Billing: استهلاك سعة التخزين أو عدد طلبات الـ API). يتم ربط منظمة المستخدم بمعرف عميل Stripe (`stripeCustomerId`) وتتبع تواريخ انتهاء الفترة الحالية (`currentPeriodEnd`) وحالة الحساب (Active, Past Due, Canceled).",
      realWorldAnalogy: "مثل فاتورة الكهرباء والإنترنت؛ تدفع رسوماً ثابتة للباقة الشهرية لسرعة الخط، وتدفع رسوماً إضافية محسوبة بدقة إذا تجاوزت باقة الجيجابايت المحددة.",
      whyItMatters: "الاشتراكات هي شريان الحياة المالي لشركات SaaS، والتنظيم المعماري الدقيق يضمن عدم انقطاع الخدمة عن العملاء الذين يسددون التزاماتهم في الموعد.",
      syntax: "// نموذج حالة اشتراك المنظمة\ninterface Subscription {\n  id: string;\n  status: 'active' | 'past_due' | 'canceled' | 'trialing';\n  currentPeriodEnd: Date;\n  cancelAtPeriodEnd: boolean;\n}",
      simpleExample: `// تنبيه اقتراب موعد تجديد الاشتراك أو وجود مشكلة بالدفع
import React from 'react';

export function SubscriptionBanner({ status, nextBillingDate }) {
  if (status === 'past_due') {
    return (
      <div className="bg-rose-500/20 border border-rose-500/40 p-3 rounded-xl text-xs text-rose-350 flex justify-between items-center">
        <span>⚠️ تعذر تجديد اشتراكك الشهري. يرجى تحديث البطاقة البنكية لتجنب إيقاف الخدمة.</span>
        <button className="px-3 py-1 bg-rose-600 text-white rounded font-bold">تحديث البطاقة</button>
      </div>
    );
  }

  return (
    <div className="text-xs text-slate-400">
      تاريخ التجديد القادم: <span className="text-white font-mono">{nextBillingDate}</span>
    </div>
  );
}`,
      advancedExample: `// بوابة العميل لإدارة الاشتراك وتوليد رابط Stripe Customer Portal
'use server';

import Stripe from 'stripe';
import { redirect } from 'next/navigation';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });

export async function createStripeCustomerPortalAction(orgId: string, stripeCustomerId: string) {
  // إنشاء جلسة بوابة فواتير Stripe الآمنة
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/dashboard/\${orgId}/settings/billing\`
  });

  // توجيه المستخدم إلى بوابة Stripe الرسمية لتعديل البطاقة أو تحميل الفواتير
  redirect(portalSession.url);
}`,
      outputExplanation: "يوجه هذا الإجراء المالك مباشرة إلى بوابة Stripe الرسمية المشفرة لإدارة وسيلة الدفع أو ترقية الباقة دون الحاجة لبناء نماذج بنكية معقدة داخل التطبيق.",
      commonMistakes: "محاولة حفظ وتخزين أرقام البطاقات الائتمانية للعملاء في قاعدة بيانات التطبيق المحلية، مما يعد انتهاكاً خطيراً لمعايير أمان PCI-DSS.",
      bestPractices: "اعتمد دائماً على بوابات Stripe الرسمية المشفرة (Stripe Checkout & Billing Portal) للامتثال التام لمعايير PCI-DSS دون أي مخاطر أمنية.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="150" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="105" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">SaaS Dashboard</text>
  <text x="105" y="100" fill="#cbd5e1" fontSize="10" textAnchor="middle">Manage Subscription</text>
  <path d="M 185 90 L 255 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="260" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="340" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Stripe Portal API</text>
  <text x="340" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Create Portal Session</text>
  <path d="M 425 90 L 485 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="45" width="80" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="530" y="95" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Stripe UI 💳</text>
</svg>`
    },
    {
      id: "33.5.l",
      title: "دمج الدفع من خلال Backend آمن وخطافات Stripe (Stripe Webhooks Pipeline)",
      technicalTerm: {
        english: "Idempotent Stripe Webhook Event Pipeline",
        pronunciation: "آيدم بوتينت سترايب ويب هوك إيفينت بايبلاين",
        arabicMeaning: "مسار أحداث خطافات الويب المتكررة الآمنة لـ Stripe"
      },
      description: "تعتبر خطافات الويب (Webhooks) هي المصدر النهائي للحقيقة (Source of Truth) لحالة الاشتراكات والمدفوعات. عند نجاح عملية سداد أو فشلها، يرسل Stripe حدثاً مشفراً إلى `/api/webhook/stripe`. يجب التحقق من توقيع الخطاف (`stripe-signature`)، وقراءة الـ Payload كنص خام (`req.text()`)، والتعامل مع الأحداث بشكل متكرر آمن (Idempotent) لمنع مضاعفة أيام الاشتراك في حال إعادة إرسال الحدث.",
      realWorldAnalogy: "مثل إشعار بنكي رسمي مختوم بختم حراري لا يمكن تزويره؛ يتأكد المحاسب من صحة الختم أولاً، ثم يسجل الدفعة في الدفتر مرة واحدة فقط حتى لو وصل الإشعار في البريد مرتين.",
      whyItMatters: "حماية التطبيق من عمليات السداد الوهمية وتحديث حالة اشتراكات العملاء فورياً دون أي تدخل يدوي.",
      syntax: "// التحقق من توقيع Stripe Webhook\nconst event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);\nswitch (event.type) {\n  case 'invoice.payment_succeeded': handleSuccess(event.data.object);\n}",
      simpleExample: `// معالج أحداث Stripe Webhook الأساسي
import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get('stripe-signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return new Response(\`Webhook Error: \${err.message}\`, { status: 400 });
  }

  if (event.type === 'invoice.payment_succeeded') {
    console.log('تم تجديد الاشتراك بنجاح:', event.data.object.id);
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}`,
      advancedExample: `// مسار خطاف الويب الشامل لمعالجة دورة حياة الاشتراك الكاملة
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2023-10-16' });

export async function POST(req: Request) {
  const rawBody = await req.text();
  const signature = headers().get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    // 1. التحقق الحاسم من التوقيع السري لمنع انتحال الطلبات
    event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    return new Response(\`Webhook Signature Verification Failed: \${err.message}\`, { status: 400 });
  }

  const session = event.data.object as any;

  switch (event.type) {
    // حالة 1: اكتمال عملية الاشتراك الجديد بنجاح
    case 'checkout.session.completed': {
      const subscription = await stripe.subscriptions.retrieve(session.subscription);
      const orgId = session.metadata.orgId;

      await prisma.subscription.upsert({
        where: { organizationId: orgId },
        create: {
          organizationId: orgId,
          stripeSubscriptionId: subscription.id,
          stripeCustomerId: session.customer,
          status: subscription.status,
          currentPeriodEnd: new Date(subscription.current_period_end * 1000)
        },
        update: {
          stripeSubscriptionId: subscription.id,
          status: subscription.status,
          currentPeriodEnd: new Date(subscription.current_period_end * 1000)
        }
      });
      break;
    }

    // حالة 2: إلغاء الاشتراك من قبل العميل
    case 'customer.subscription.deleted': {
      await prisma.subscription.updateMany({
        where: { stripeSubscriptionId: session.id },
        data: { status: 'canceled' }
      });
      break;
    }
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}`,
      outputExplanation: "يعالج هذا المسار أحداث الدفع بأمان مطلق، ويتحقق من التوقيع الرقمي لمنع أي هجوم تزوير، ويحدث قاعدة البيانات تلقائياً بمجرد إتمام السداد في Stripe.",
      commonMistakes: "استخدام `req.json()` لقراءة الـ Body في مسار Webhook بدلاً من `req.text()`، مما يغير تسلسل البايتات ويفشل التحقق من التوقيع الرقمي دائماً.",
      bestPractices: "اقرأ دائماً نص الطلب الخام `req.text()` واحتفظ بـ Webhook Secret مشفر في متغيرات البيئة السرية.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Stripe Cloud</text>
  <text x="95" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">Payment Success Event</text>
  <path d="M 165 90 L 235 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="45" width="150" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="315" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Next.js Webhook</text>
  <text x="315" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Verify (stripe-signature)</text>
  <path d="M 395 90 L 465 90" stroke="#10b981" strokeWidth="2" />
  <rect x="470" y="45" width="100" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="520" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Database</text>
  <text x="520" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Upsert Sub ✓</text>
</svg>`
    },
    {
      id: "33.5.m",
      title: "إضافة سجل للأنشطة والتدقيق (Immutable Audit Logs Pipeline)",
      technicalTerm: {
        english: "Enterprise Audit Logging & Activity Stream",
        pronunciation: "إنتربرايز أوديت لوجينج آند أكتيفيتي ستريم",
        arabicMeaning: "سجل التدقيق المؤسسي وموجز الأنشطة غير القابل للتعديل"
      },
      description: "تعتبر ميزة سجل التدقيق (Audit Logs) شرطاً أساسياً لبيع برمجيات SaaS للشركات الكبرى (Enterprise Compliance: SOC2 / ISO27001). يقوم النظام بتسجيل كل عملية حساسة داخل المنظمة (مثل: إضافة عضو، تغيير دور، حذف مشروع، أو تصدير بيانات)، مع تسجيل هوية الفاعل (`actorId`)، عنوان الـ IP، نوع الحدث، والوقت الزمني الدقيق في جدول غير قابل للتعديل أو الحذف (Append-only Table).",
      realWorldAnalogy: "مثل الصندوق الأسود في الطائرة أو كاميرات المراقبة في البنك؛ تسجل كل حركة وكل زر تم الضغط عليه، ولا يمكن لأي موظف مسح التسجيلات لحماية النزاهة.",
      whyItMatters: "يمنح مديري أمن المعلومات في الشركات الثقة التامة، ويساعد في كشف التهديدات الأمنية والتحقيق في الأخطاء التشغيلية.",
      syntax: "// نموذج سجل التدقيق\ninterface AuditLog {\n  id: string;\n  orgId: string;\n  actorId: string;\n  action: 'PROJECT_DELETED' | 'MEMBER_INVITED' | 'ROLE_UPDATED';\n  metadata: Record<string, any>;\n  ipAddress: string;\n  createdAt: Date;\n}",
      simpleExample: `// دالة مساعدة لتسجيل حدث تدقيق في قاعدة البيانات
export async function logAuditEvent(db, { orgId, actorId, action, metadata = {} }) {
  try {
    await db.auditLog.create({
      data: {
        orgId,
        actorId,
        action,
        metadata: JSON.stringify(metadata),
        createdAt: new Date()
      }
    });
  } catch (err) {
    console.error('فشل حفظ سجل التدقيق:', err);
  }
}`,
      advancedExample: `// مكون عرض سجل التدقيق في لوحة المؤسسات مع البحث والفلترة
import React from 'react';

export function AuditLogTable({ logs }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center">
        <h3 className="text-sm font-bold text-white">سجل التدقيق والأنشطة الأمنية (Audit Trail)</h3>
        <span className="text-[10px] bg-slate-800 text-slate-400 px-2.5 py-1 rounded-full font-mono">
          SOC2 Compliant
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-start">
          <thead className="bg-slate-850 text-slate-400 font-semibold border-b border-slate-800">
            <tr>
              <th className="p-3 text-start">الحدث</th>
              <th className="p-3 text-start">المستخدم</th>
              <th className="p-3 text-start">التفاصيل</th>
              <th className="p-3 text-start">الوقت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300">
            {logs.map(log => (
              <tr key={log.id} className="hover:bg-slate-850/50">
                <td className="p-3 font-mono text-indigo-400 font-bold">{log.action}</td>
                <td className="p-3">{log.actorEmail}</td>
                <td className="p-3 text-slate-400">{log.description}</td>
                <td className="p-3 font-mono text-[11px] text-slate-500">
                  {new Date(log.createdAt).toLocaleString('ar-EG')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر الكود سجلاً تدقيقياً أمنياً واضحاً يتيح للمسؤولين مراجعة جميع العمليات الحساسة التي تمت داخل المنظمة مع توثيق هوية وتوقيت كل إجراء.",
      commonMistakes: "السماح بحذف أو تعديل سجلات التدقيق عبر أوامر مثل `DELETE FROM audit_logs`، مما ينتهك معايير الامتثال الأمني SOC2.",
      bestPractices: "اجعل جدول سجلات التدقيق للقراءة والإضافة فقط (Append-only)، واقفل صلاحيات الحذف عنه برمجياً وعلى مستوى قاعدة البيانات.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Critical Action</text>
  <text x="95" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">"Delete Project #42"</text>
  <path d="M 165 90 L 235 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="310" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Audit Pipeline</text>
  <text x="310" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Append Actor + IP</text>
  <path d="M 385 90 L 455 90" stroke="#10b981" strokeWidth="2" />
  <rect x="460" y="45" width="110" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="515" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Audit Logs</text>
  <text x="515" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Append-Only 🔒</text>
</svg>`
    },
    {
      id: "33.5.n",
      title: "اختبار التطبيق آلياً (Unit, Integration & E2E Testing)",
      technicalTerm: {
        english: "Full-Spectrum SaaS Test Automation",
        pronunciation: "فل سبيكترم ساس تيست أوتوميشن",
        arabicMeaning: "أتمتة الاختبارات الشاملة لمنصة البرمجيات كخدمة"
      },
      description: "تعتمد موثوقية منصات SaaS على هرم اختبارات آلي متين يجمع بين: اختبارات الوحدة (Unit Tests بواسطة Vitest) لمحركات الفوترة وحساب الصلاحيات؛ اختبارات التكامل (Integration Tests) للتحقق من إجراءات الخادم Server Actions واستعلامات الـ ORM؛ واختبارات E2E (بواسطة Playwright) لمحاكاة تدفقات تسجيل المستخدم الجديد، واختيار الخطة، وترقية الحساب.",
      realWorldAnalogy: "مثل خط اختبار تصنيع الأجهزة الطبية؛ يتم فحص كل رقاقة إلكترونية بمفردها، ثم فحص عمل اللوحة مع البطارية، ثم تشغيل الجهاز كاملاً لمحاكاة إنقاذ مريض.",
      whyItMatters: "يمنع حدوث انكسار في مسارات الاشتراك وجلب الإيرادات، ويمنح المطورين الجرأة لنشر ميزات جديدة يومياً دون خوف.",
      syntax: "// اختبار Server Action بواسطة Vitest\ntest('should reject non-admin from inviting', async () => {\n  const res = await inviteMemberAction({ role: 'member' }, formData);\n  expect(res.error).toBe('Forbidden');\n});",
      simpleExample: `// اختبار وحدة لمحرك الصلاحيات (Vitest)
import { describe, it, expect } from 'vitest';
import { EntitlementEngine } from '@/lib/entitlements';

describe('SaaS Entitlement Engine', () => {
  it('يجب أن يمنع الخطة المجانية من الوصول لسجلات التدقيق', () => {
    const canAccess = EntitlementEngine.canAccessFeature('plan_free', 'AUDIT_LOGS');
    expect(canAccess).toBe(false);
  });

  it('يجب أن يسمح لخطة المؤسسات بالوصول الكامل لجميع الميزات', () => {
    const canAccess = EntitlementEngine.canAccessFeature('plan_ent', 'AUDIT_LOGS');
    expect(canAccess).toBe(true);
  });
});`,
      advancedExample: `// سيناريو اختبار E2E لتسجيل الدخول وإنشاء منظمة جديدة بواسطة Playwright
import { test, expect } from '@playwright/test';

test.describe('SaaS Onboarding Flow', () => {
  test('تسجيل مستخدم جديد وإنشاء أول مساحة عمل بنجاح', async ({ page }) => {
    // 1. الانتقال إلى صفحة التسجيل
    await page.goto('/signup');

    // 2. إدخال بيانات المستخدم الجديد
    await page.fill('input[name="email"]', 'ceo@startup.io');
    await page.fill('input[name="password"]', 'SuperSecretPass123!');
    await page.click('button[type="submit"]');

    // 3. التحقق من الوصول لشاشة إعداد المنظمة (Onboarding)
    await expect(page.locator('h1')).toContainText('أنشئ مساحة عمل لفريقك');

    // 4. كتابة اسم الشركة واختيار الخطة
    await page.fill('input[name="orgName"]', 'Startup Labs');
    await page.click('button[data-testid="create-org-btn"]');

    // 5. التحقق من التوجيه التلقائي إلى لوحة تحكم المنظمة
    await page.waitForURL('**/dashboard/startup-labs');
    await expect(page.locator('h2')).toContainText('نظرة عامة على الأداء');
  });
});`,
      outputExplanation: "يضمن هذا الاختبار الآلي سلامة رحلة المستخدم الحساسة من أول نقرة تسجيل حتى استقرار حسابه داخل لوحة تحكم منظمته الجديدة.",
      commonMistakes: "إجراء اختبارات الدفع ببطاقات ائتمان حقيقية بدلاً من استخدام بطاقات Stripe الاختبارية الرسمية في بيئة المحاكاة.",
      bestPractices: "ادمج الاختبارات الآلية في خط أنابيب CI/CD لمنع دمج أي كود يكسر مسار الاشتراكات أو التسجيل.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <polygon points="300,30 420,150 180,150" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="300" y="65" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">E2E (Playwright)</text>
  <text x="300" y="100" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Integration (Server Actions)</text>
  <text x="300" y="135" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Unit Tests (Vitest & Zod)</text>
</svg>`
    },
    {
      id: "33.5.o",
      title: "إنشاء خط أنابيب التكامل والنشر المستمر (GitHub Actions CI/CD Pipeline)",
      technicalTerm: {
        english: "Automated CI/CD Pipeline & Quality Gates",
        pronunciation: "أوتوميتد سي آي سي دي بايبلاين آند كواليتي جيتس",
        arabicMeaning: "خط أنابيب التكامل والنشر المستمر وبوابات الجودة"
      },
      description: "يعتمد النشر الاحترافي لمنصات SaaS على مسار آلي صارم عبر GitHub Actions. عند إرسال أي Pull Request، يتم تشغيل بوابات الجودة بالترتيب: 1. فحص الأخطاء النحوية والتنسيق (`ESLint & Prettier`)، 2. فحص الأنواع الصارم (`tsc --noEmit`)، 3. تشغيل حزمة الاختبارات الآلية (`vitest run`)، 4. بناء المشروع التجريبي (`next build`). إذا اجتازت كل الفحوصات بنجاح، يتم النشر التلقائي لبيئة الإنتاج.",
      realWorldAnalogy: "مثل بوابات التفتيش الأمني والجمارك في المطارات؛ لا يمكن لأي حقيبة أو راكب صعود الطائرة قبل المرور عبر أجهزة الفحص الإشعاعي والتحقق من صلاحية الجواز والتأشيرة.",
      whyItMatters: "يمنع وصول أي كود يحتوي على أخطاء برمجية أو انكسار في الأنواع (Type Errors) إلى خوادم الإنتاج المباشرة.",
      syntax: "# ملف سير العمل في .github/workflows/ci.yml\nname: CI Pipeline\non: [push, pull_request]\njobs:\n  check:\n    runs-on: ubuntu-latest\n    steps: [npm run lint, npm run build]",
      simpleExample: `// سكريبتات package.json المخصصة لخط أنابيب الجودة
{
  "scripts": {
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "build": "next build",
    "ci": "npm run lint && npm run typecheck && npm run test && npm run build"
  }
}`,
      advancedExample: `# ملف GitHub Actions المتكامل والاحترافي لبناء واختبار تطبيق Next.js
name: SaaS Production CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    name: Lint, Typecheck and Test
    runs-on: ubuntu-latest

    steps:
      - name: فحص واستخراج الكود المصدري
        uses: actions/checkout@v4

      - name: إعداد بيئة Node.js 20 مع التخزين المؤقت للحزم
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: تثبيت الاعتماديات بدقة
        run: npm ci

      - name: توليد عميل قاعدة البيانات Prisma
        run: npx prisma generate

      - name: تشغيل فاحص الجودة ESLint
        run: npm run lint

      - name: التحقق الصارم من سلامة أنواع TypeScript
        run: npm run typecheck

      - name: تشغيل حزمة اختبارات الوحدة والتكامل
        run: npm run test

      - name: تجربة بناء نسخة الإنتاج Next.js Build
        run: npm run build
        env:
          NEXT_PUBLIC_APP_URL: https://example.com`,
      outputExplanation: "يوفر ملف سير العمل هذا صمام أمان حديدي يمنع دمج أي كود غير متوافق، ويضمن أن كل إصدار يصل لبيئة الإنتاج قد خضع لـ 5 مستويات فحص دقيقة.",
      commonMistakes: "تخطي أمر `npx prisma generate` في خط أنابيب الـ CI، مما يؤدي إلى فشل فحص TypeScript نظراً لغياب أنواع الجداول المولدة.",
      bestPractices: "فعل ميزة التخزين المؤقت لحزم npm وحزمة كاش Next.js (`actions/cache`) لاختصار زمن بناء الـ CI من 6 دقائق إلى أقل من 90 ثانية.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="25" y="45" width="100" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="75" y="75" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">1. Git Push</text>
  <text x="75" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">Trigger Hook</text>
  <path d="M 130 90 L 165 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="170" y="45" width="115" height="90" rx="8" fill="#1e293b" stroke="#818cf8" />
  <text x="227" y="75" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">2. Lint & Types</text>
  <text x="227" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">ESLint + tsc</text>
  <path d="M 290 90 L 325 90" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="45" width="115" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="387" y="75" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">3. Automated Test</text>
  <text x="387" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Vitest Suite</text>
  <path d="M 450 90 L 485 90" stroke="#10b981" strokeWidth="2" />
  <rect x="490" y="45" width="85" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="532" y="75" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">4. Deploy</text>
  <text x="532" y="98" fill="#10b981" fontSize="8" textAnchor="middle">Vercel Prod ✓</text>
</svg>`
    },
    {
      id: "33.5.p",
      title: "إعداد المراقبة والتنبيهات وجمع الأخطاء (Sentry & OpenTelemetry Monitoring)",
      technicalTerm: {
        english: "Realtime APM & Error Tracking with Sentry",
        pronunciation: "ريال تايم إيه بي إم آند إيرور تراكينج وذ سينتري",
        arabicMeaning: "مراقبة أداء التطبيقات ورصد الأخطاء اللحظية مع سينتري"
      },
      description: "لا ينتهي عمل مهندس البرمجيات بنشر الكود؛ بل تبدأ مرحلة المراقبة اللحظية (Application Performance Monitoring - APM). باستخدام Sentry وOpenTelemetry، يتم التقاط الاستثناءات والأخطاء غير المعالجة فور حدوثها في متصفح العميل أو خوادم الحافة، وتنبيه فريق الهندسة عبر Slack فوراً مع تفاصيل مسار الخطأ (Stack Trace)، وسجل المتصفح، ومعرف المنظمة المتضررة.",
      realWorldAnalogy: "مثل أبراج المراقبة في محطات الطاقة النووية؛ تراقب كل عداد وحرارة كل أنبوب، وتطلق صفارة إنذار فورية للمهندسين في غرفة التحكم قبل أن يتفاقم أي تسريب.",
      whyItMatters: "يتيح لك إصلاح المشاكل قبل أن يلاحظها العميل أو يتقدم بشكوى إلى الدعم الفني، مما يحافظ على سمعة المنتج المرموقة.",
      syntax: "// إعداد Sentry في Next.js\nimport * as Sentry from '@sentry/nextjs';\nSentry.init({ dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, tracesSampleRate: 1.0 });",
      simpleExample: `// التقاط خطأ مخصص مع إرفاق سياق المنظمة والمستخدم
import * as Sentry from '@sentry/nextjs';

export function reportCustomSaaSError(error, { orgId, userId }) {
  Sentry.withScope((scope) => {
    scope.setTag('organization_id', orgId);
    scope.setUser({ id: userId });
    Sentry.captureException(error);
  });
}`,
      advancedExample: `// التقاط أخطاء مكونات العميل الذاتي عبر Error Boundary مع زر إعادة المحاولة
'use client';

import React, { Component } from 'react';
import * as Sentry from '@sentry/nextjs';

export class GlobalSaaSErrorBoundary extends Component {
  state = { hasError: false, errorId: null };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // إرسال تقرير مفصل إلى Sentry مع معرف فريد
    const eventId = Sentry.captureException(error, { extra: errorInfo });
    this.setState({ errorId: eventId });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 bg-slate-900 border border-rose-500/40 rounded-2xl max-w-lg mx-auto my-12 text-center space-y-4">
          <span className="text-3xl">⚠️</span>
          <h3 className="text-base font-bold text-white">حدث خطأ غير متوقع في هذا الجزء</h3>
          <p className="text-xs text-slate-400">
            تم إرسال تقرير فوري لفريق الصيانة لمراجعة المشكلة.
          </p>
          {this.state.errorId && (
            <span className="text-[10px] text-slate-500 font-mono block">
              رقم تتبع الحادثة: {this.state.errorId}
            </span>
          )}
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors"
          >
            إعادة تحميل الصفحة
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}`,
      outputExplanation: "يلتقط هذا المكون أي انهيار في شجرة React بأمان، ويمنع الشاشة البيضاء (White Screen of Death)، ويرسل تقريراً أمنياً لسينتري مع تمكين المستخدم من إعادة المحاولة.",
      commonMistakes: "إرسال البيانات الحساسة للمستخدمين (مثل كلمات المرور أو أرقام البطاقات) داخل تقارير Sentry دون تطبيق تنقيح البيانات (PII Scrubbing).",
      bestPractices: "فعل ميزة `beforeSend` في Sentry لحجب أي بيانات شخصية (PII)، واربط تنبيهات الأخطاء بقنوات التنبيه في Discord أو Slack.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="100" y="75" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">Unhandled Error</text>
  <text x="100" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Crash in Dashboard</text>
  <path d="M 175 90 L 245 90" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="250" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="320" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Sentry APM</text>
  <text x="320" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">PII Scrubbing</text>
  <path d="M 395 90 L 465 90" stroke="#6366f1" strokeWidth="2" />
  <rect x="470" y="45" width="100" height="90" rx="8" fill="#1e293b" stroke="#6366f1" />
  <text x="520" y="75" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">Slack Alert</text>
  <text x="520" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">PagerDuty 🚨</text>
</svg>`
    },
    {
      id: "33.5.q",
      title: "نشر التطبيق للإنتاج (Production Deployment on Vercel & Custom Domains)",
      technicalTerm: {
        english: "Edge Network Deployment & Custom Domain Routing",
        pronunciation: "إيدج نيتورك ديبلويمينت آند كاستم دومين راوتينج",
        arabicMeaning: "نشر شبكة الحافة وتوجيه النطاقات المخصصة"
      },
      description: "المرحلة الختامية لبناء الـ SaaS هي نشر التطبيق للإنتاج على منصة حوسبة حافة عالمية مثل Vercel أو AWS. تتضمن هذه الخطوة: ضبط متغيرات البيئة المشفرة، ربط النطاق الأساسي للشركة مع شهادات أمان SSL تلقائية، وإعداد ميزة النطاقات المخصصة للعملاء (Custom Domains: `app.clientcompany.com`) عبر التحقق من سجلات CNAME بمساعدة واجهة Vercel Domains API.",
      realWorldAnalogy: "مثل افتتاح المقر الرسمي للشركة؛ بعد انتهاء التشطيبات الداخلية، ترفع اللوحة الرسمية على واجهة المبنى وتستقبل الوفود العالمية رسمياً لتقديم الخدمة.",
      whyItMatters: "يجعل تطبيقك متاحاً لملايين المستخدمين حول العالم بزمن استجابة أقل من 50 ميلي ثانية من أقرب مركز بيانات جغرافي.",
      syntax: "// التحقق من صحة النطاق المخصص عبر Vercel API\nconst res = await fetch(\`https://api.vercel.com/v9/projects/\${projectId}/domains/\${domain}/verify\`, {\n  headers: { Authorization: \`Bearer \${process.env.VERCEL_AUTH_TOKEN}\` }\n});",
      simpleExample: `// التحقق من المتغيرات البيئية الإلزامية قبل بدء تشغيل الإنتاج
export function validateProductionEnv() {
  const requiredKeys = [
    'DATABASE_URL',
    'STRIPE_SECRET_KEY',
    'STRIPE_WEBHOOK_SECRET',
    'NEXT_PUBLIC_APP_URL'
  ];

  requiredKeys.forEach(key => {
    if (!process.env[key]) {
      throw new Error(\`FATAL ERROR: Environment variable \${key} is missing in production!\`);
    }
  });
}`,
      advancedExample: `// خدمة إدارة وربط النطاقات المخصصة للمؤسسات عبر Vercel Domains API
export class CustomDomainService {
  private static VERCEL_API = 'https://api.vercel.com/v9/projects';

  // إضافة نطاق مخصص لمشروع الـ SaaS في شبكة Vercel
  static async addDomainToProject(domain: string) {
    const res = await fetch(\`\${this.VERCEL_API}/\${process.env.VERCEL_PROJECT_ID}/domains\`, {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${process.env.VERCEL_TOKEN}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: domain })
    });
    return await res.json();
  }

  // فحص حالة سجلات الـ DNS (CNAME Verification)
  static async verifyDomainDNS(domain: string) {
    const res = await fetch(
      \`\${this.VERCEL_API}/\${process.env.VERCEL_PROJECT_ID}/domains/\${domain}/verify\`,
      {
        method: 'POST',
        headers: { Authorization: \`Bearer \${process.env.VERCEL_TOKEN}\` }
      }
    );
    const data = await res.json();
    return {
      verified: data.verified || false,
      verificationRecords: data.verification || []
    };
  }
}`,
      outputExplanation: "تتيح هذه الخدمة للعملاء من فئة Enterprise استخدام نطاقاتهم الخاصة الموجهة لمنصة الـ SaaS الخاصة بك مع توليد شهادات SSL مؤتمتة بالكامل.",
      commonMistakes: "نسيان ضبط الـ Environment Variables في لوحة Vercel وتطبيق النشر معتمداً على ملف `.env.local` غير المرفوع على Git.",
      bestPractices: "استخدم أداة `t3-oss/env-nextjs` لفرض التحقق الصارم من متغيرات البيئة أثناء مرحلة البناء (`Build Step`) لمنع النشر بمتغيرات ناقصة.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="95" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Customer CNAME</text>
  <text x="95" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">app.client.com</text>
  <path d="M 165 90 L 235 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="310" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Vercel Edge Network</text>
  <text x="310" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Auto SSL (Let's Encrypt)</text>
  <path d="M 385 90 L 455 90" stroke="#10b981" strokeWidth="2" />
  <rect x="460" y="45" width="110" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="515" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Live SaaS 🎉</text>
  <text x="515" y="100" fill="#10b981" fontSize="9" textAnchor="middle">Global 300+ Edge POPs</text>
</svg>`
    }
  ],
  quizzes: [
    {
      id: "quiz-33-5-1",
      question: "ما الفائدة المعمارية الأهم لمكونات خادم React (RSC) في تطبيقات Next.js SaaS؟",
      options: [
        "إجبار المتصفح على تشغيل WebAssembly تلقائياً",
        "جلب البيانات مباشرة من قاعدة البيانات بأمان وسرعة مع إرسال 0 كيلوبايت من كود JavaScript الخاص بها إلى المتصفح",
        "الاستغناء عن استخدام CSS في التصميم",
        "تخزين بطاقات الائتمان على هاتف المستخدم"
      ],
      correctAnswer: 1,
      explanation: "تنفذ مكونات الخادم على الخادم فقط، وتجلب البيانات مباشرة دون الحاجة لمسارات API وسيطة، وتوفر أقصى درجات الأمان والسرعة مع حجم حزمة صفرية للمتصفح."
    },
    {
      id: "quiz-33-5-2",
      question: "لماذا يجب قراءة الـ Body كنص خام (req.text()) في مسار خطاف الويب Stripe Webhook؟",
      options: [
        "لأن Stripe لا يدعم صيغة JSON نهائياً",
        "لأن التحقق من التوقيع الرقمي (Signature Verification) يعتمد على البايتات الدقيقة للطلب، وأي تحويل إلى كائن يغير تسلسل البايتات ويفشل التحقق",
        "لتوفير سرعة الإنترنت فقط",
        "لحفظ الملف كصورة PNG"
      ],
      correctAnswer: 1,
      explanation: "تعتمد خوارزمية التوقيع التشفيري لـ Stripe على مطابقة تسلسل البايتات الأصلي تماماً، لذا فإن استخدام النص الخام إلزامي لاجتياز التحقق الأمني."
    },
    {
      id: "quiz-33-5-3",
      question: "ما الدور الأساسي لميزة Row-Level Security (RLS) في معمارية تعدد المستأجرين (Multi-tenancy)؟",
      options: [
        "إيقاف تشغيل الخادم أثناء الليل",
        "فرض عزل بيانات المنظمات والمستأجرين على مستوى محرك قاعدة البيانات، بحيث يستحيل استرجاع بيانات منظمة أخرى حتى لو احتوى الكود على خطأ برمجي",
        "تلوين جداول قاعدة البيانات بألوان مختلفة",
        "تسريع تحميل الخطوط في المتصفح"
      ],
      correctAnswer: 1,
      explanation: "تعتبر سياسات RLS خط الدفاع الأخير والأقوى، حيث تمنع قاعدة البيانات تسرب أي صفوف لا تنتمي إلى هوية المستأجر الحالي حتى في حال وجود ثغرة برمجية في الكود."
    }
  ],
  practicalExercise: {
    id: "exercise-33-5",
    title: "بناء لوحة إدارة اشتراكات SaaS ومحاكاة ترقية الباقة",
    description: "قم بإنشاء مكون تفاعلي للوحة تحكم SaaS يعرض الخطة الحالية للمنظمة، المميزات المستهلكة، ومبدل تفاعلي للترقية مع تحديث فوري للميزات المتاحة.",
    hints: [
      "احتفظ بكائن الخطة الحالية في الـ State.",
      "قارن بين باقتي Free وPro واعرض شارة الميزات المغلقة والمفتوحة.",
      "احرص على كتابة تعليق عربي فوق كل سطر برمجي يوضح الغرض من الكود."
    ],
    solution: `// الحل النموذجي لمكون إدارة اشتراكات SaaS التفاعلي
import React, { useState } from 'react';

// تعريف خطط المنصة
const PLANS = {
  free: { name: 'المجانية', price: 0, maxUsers: 3, hasApi: false, hasCustomDomain: false },
  pro: { name: 'الاحترافية (Pro)', price: 29, maxUsers: 15, hasApi: true, hasCustomDomain: true }
};

export function SaaSBillingManager() {
  // حالة خطة المنظمة الحالية
  const [currentPlanKey, setCurrentPlanKey] = useState('free');
  // حالة إشعار العملية
  const [notification, setNotification] = useState(null);

  const plan = PLANS[currentPlanKey];

  // محاكاة ترقية أو تخفيض الخطة
  const togglePlan = () => {
    const nextKey = currentPlanKey === 'free' ? 'pro' : 'free';
    setCurrentPlanKey(nextKey);
    setNotification(\`تم تحديث باقة منظمتك بنجاح إلى: \${PLANS[nextKey].name} 🚀\`);
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6 font-sans">
      {/* إشعار التحديث */}
      {notification && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs rounded-xl font-bold animate-fadeIn">
          {notification}
        </div>
      )}

      {/* رأس إدارة الفوترة */}
      <div className="flex justify-between items-start border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">اشتراك المنظمة</span>
          <h3 className="text-lg font-black text-white mt-1">الخطة النشطة: {plan.name}</h3>
          <p className="text-xs text-slate-400 mt-1">قيمة الاشتراك: {plan.price} $ / شهرياً</p>
        </div>
        <button
          onClick={togglePlan}
          className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-lg \${
            currentPlanKey === 'free'
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
          }\`}
        >
          {currentPlanKey === 'free' ? 'ترقية إلى الخطة الاحترافية (29$) ⬆' : 'التحويل للخطة المجانية'}
        </button>
      </div>

      {/* استعراض الميزات المتاحة والمغلقة في الباقة الحالية */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-slate-350">الميزات المتاحة بحسب اشتراكك:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-slate-850 rounded-xl border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">الحد الأقصى للمستخدمين</span>
            <span className="font-mono font-bold text-white">{plan.maxUsers} أعضاء</span>
          </div>

          <div className="p-3 bg-slate-850 rounded-xl border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">الربط البرمجي API Access</span>
            <span className={plan.hasApi ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              {plan.hasApi ? '✓ متاح' : '🔒 يتطلب ترقية'}
            </span>
          </div>

          <div className="p-3 bg-slate-850 rounded-xl border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">النطاق المخصص Custom Domain</span>
            <span className={plan.hasCustomDomain ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
              {plan.hasCustomDomain ? '✓ متاح' : '🔒 يتطلب ترقية'}
            </span>
          </div>

          <div className="p-3 bg-slate-850 rounded-xl border border-slate-800 flex items-center justify-between">
            <span className="text-slate-300">سجلات الأمان والتدقيق</span>
            <span className="text-slate-500 font-medium">🔒 باقة المؤسسات</span>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  topicInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Next.js Enterprise SaaS Full-Stack Architecture</text>
  <rect x="35" y="60" width="160" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="115" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Edge & Auth Layer</text>
  <text x="115" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Next.js App Router</text>
  <text x="115" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Edge Middleware Guards</text>
  <text x="115" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Multi-Tenant Isolation</text>
  <text x="115" y="185" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Zero Latency Routing</text>
  <path d="M 200 135 L 235 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="60" width="160" height="150" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="320" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Full-Stack Core</text>
  <text x="320" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Server Components (RSC)</text>
  <text x="320" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Server Actions & Zod</text>
  <text x="320" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Prisma / Drizzle ORM</text>
  <text x="320" y="185" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">Type-Safe End-to-End</text>
  <path d="M 405 135 L 440 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="445" y="60" width="125" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="507" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Revenue & Ops</text>
  <text x="507" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Stripe Webhooks</text>
  <text x="507" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Audit Logs SOC2</text>
  <text x="507" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Sentry + CI/CD</text>
  <text x="507" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Enterprise Grade</text>
</svg>`
};

