// e:\KD\lang\react\src\data\sections\section30\topic4.js
// الموضوع الرابع من القسم 30: الواجهات المصغرة Micro Frontends (Webpack Module Federation, Routing, Shared State & Independent Deployments)

export const topic4 = {
  id: "topic-30-4",
  title: "الواجهات المصغرة (Micro Frontends Architecture & Module Federation)",
  description: "دليل معماري وتطبيقي شامل لاحتراف معمارية الواجهات المصغرة (Micro Frontends): المفاهيم والأسس المعمارية، معايير القرار (متى نستخدمها ومتى نتجنبها)، أساليب الدمج (Build-time vs Runtime Integration)، استخدام تقنية Webpack / Vite Module Federation مع React، إدارة التوجيه الموحد بين التطبيقات المستقلة، استراتيجيات مشاركة الحالة والاتصال عبر الأحداث المخصصة، ضبط الاعتماديات المشتركة وتفادي التكرار، والنشر المستقل لكل واجهة مصغرة دون إعادة بناء التطبيق المضيف.",
  subtopics: [
    {
      id: "30.4.a",
      title: "مفهوم الواجهات المصغرة (Micro Frontends Concept)",
      englishTerm: {
        term: "Micro Frontends Architecture",
        pronunciation: "مايكرو فرونت إندز أركيتكشر",
        meaning: "تقسيم تطبيق الويب الأحادي إلى تطبيقات مصغرة ومستقلة"
      },
      description: "معمارية الواجهات المصغرة (Micro Frontends) هي نقل فلسفة الخدمات المصغرة (Microservices) من الخوادم الخلفية إلى عالم الواجهات الأمامية (Frontend). في التطبيقات الأحادية التقليدية (Monolithic Frontend)، يعمل مئات المطورين على شفرة مصدرية واحدة؛ مما يؤدي إلى اختناقات في النشر وتضارب دائم. تقوم معمارية الواجهات المصغرة على تفكيك تطبيق الويب الكبير إلى تطبيقات ويب صغيرة ومستقلة تماماً (Micro Apps)؛ بحيث يتولى كل فريق مسؤولية تطبيق مصغر متكامل من البداية إلى النهاية (مثل: تطبيق سلة الشراء، تطبيق البحث، تطبيق الملف الشخصي). يتم بعد ذلك دمج هذه التطبيقات المصغرة ديناميكياً لتظهر للمستخدم النهائي كواجهة ويب واحدة متناسقة وسلسة.",
      realWorldAnalogy: "يشبه تطبيق الواجهات المصغرة مراكز التسوق الكبرى (المول التجاري)؛ فالمول من الخارج يبدو ككيان واحد متكامل، ولكن من الداخل يضم عشرات المتاجر المستقلة (متجر ملابس، مطعم، صيدلية)؛ لكل متجر فريقه الخاص، ونظامه المالي، ومواعيد تشغيله المستقلة دون أن يؤثر تجديد أحد المحلات على عمل باقي المول.",
      whyItMatters: "تتيح الواجهات المصغرة للشركات العملاقة التوسع اللانهائي؛ حيث يمكن لفرق التطوير المتعددة نشر تحديثاتها بشكل يومي ومستقل تماماً (Independent Deployment) دون الحاجة لانتظار موافقة باقي الفرق أو إعادة بناء التطبيق بالكامل، كما تتيح استخدام تقنيات مختلفة داخل نفس الصفحة إذا لزم الأمر.",
      syntax: "// المفهوم الأساسي للمضيف (Host / Shell) والتطبيقات المستقلة (Remotes):\n// Host: التطبيق الأساسي الذي يجمع الواجهات ويستورد المكونات عبر الشبكة\n// Remote: تطبيق مصغر يصدر مكوناته ليتم تحميلها ديناميكياً في وقت التشغيل",
      simpleExample: `// استعراض محاكاة مفهوم التطبيق المضيف الحاوي (Shell) الذي يدمج تطبيقات مصغرة
import React, { useState } from 'react';

// محاكاة تطبيق مصغر مستقل لميزة المنتجات (Remote 1: Products Micro-App)
function RemoteProductsWidget() {
  return (
    <div className="p-3 bg-blue-950/40 border border-blue-500/30 rounded-xl text-xs text-blue-300">
      📦 <strong>تطبيق المنتجات المصغر (Products Remote):</strong> تم تحميله من خادم منفصل (Port 3001).
    </div>
  );
}

// محاكاة تطبيق مصغر مستقل لميزة السلة (Remote 2: Cart Micro-App)
function RemoteCartWidget() {
  return (
    <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
      🛒 <strong>تطبيق السلة المصغر (Cart Remote):</strong> تم تحميله من خادم منفصل (Port 3002).
    </div>
  );
}

// التطبيق المضيف المركزي (Host Application Shell)
export function MicroFrontendShellDemo() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
        <h4 className="font-bold text-xs text-indigo-400">التطبيق المضيف (Host Shell)</h4>
        <div className="flex gap-1 text-[10px]">
          <button 
            onClick={() => setActiveTab('products')}
            className={\`px-2 py-0.5 rounded \${activeTab === 'products' ? 'bg-blue-600 font-bold' : 'bg-slate-800 text-slate-400'}\`}
          >
            المنتجات
          </button>
          <button 
            onClick={() => setActiveTab('cart')}
            className={\`px-2 py-0.5 rounded \${activeTab === 'cart' ? 'bg-emerald-600 font-bold' : 'bg-slate-800 text-slate-400'}\`}
          >
            السلة
          </button>
        </div>
      </div>

      {activeTab === 'products' ? <RemoteProductsWidget /> : <RemoteCartWidget />}
    </div>
  );
}`,
      advancedExample: `// استوديو تفاعلي يستعرض معمارية المضيف والمكونات البعيدة (Host & Remotes Architecture)
import React, { useState } from 'react';

// محاكاة خوادم المايكرو فرونت إند المستقلة
const MICRO_APPS = [
  {
    id: 'header-app',
    name: 'تطبيق الترويسة والمصادقة (Header Remote)',
    origin: 'https://auth.company.cdn:8081',
    team: 'فريق الهوية والأمان (Team Auth)',
    tech: 'React 18 + Tailwind'
  },
  {
    id: 'catalog-app',
    name: 'تطبيق كتالوج المنتجات (Catalog Remote)',
    origin: 'https://catalog.company.cdn:8082',
    team: 'فريق تجارة التجزئة (Team Catalog)',
    tech: 'React 19 + Zustand'
  },
  {
    id: 'checkout-app',
    name: 'تطبيق الدفع والفواتير (Checkout Remote)',
    origin: 'https://checkout.company.cdn:8083',
    team: 'فريق المدفوعات (Team Payments)',
    tech: 'React 18 + React Hook Form'
  }
];

// مكون استوديو استعراض شبكة الواجهات المصغرة
export function MicroFrontendArchitectureStudio() {
  const [selectedApp, setSelectedApp] = useState(MICRO_APPS[0]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">معمارية الواجهات المصغرة (Micro Frontends)</h3>
          <p className="text-xs text-slate-400">تفكيك الواجهة الأحادية إلى تطبيقات مستقلة تندمج ديناميكياً</p>
        </div>
        <span className="text-xs font-mono bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-full border border-purple-500/20">
          Decoupled UI
        </span>
      </div>

      {/* قائمة التطبيقات المصغرة */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {MICRO_APPS.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedApp(app)}
            className={\`p-3 rounded-xl text-right transition border text-xs \${
              selectedApp.id === app.id
                ? 'bg-indigo-600/20 border-indigo-500 text-white'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800/40'
            }\`}
          >
            <span className="font-bold block truncate">{app.name.split(' ')[1]}</span>
            <span className="text-[10px] text-slate-500 block mt-1 font-mono">{app.id}</span>
          </button>
        ))}
      </div>

      {/* بطاقة تفاصيل التطبيق المصغر المختار */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm text-slate-200">{selectedApp.name}</span>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
            {selectedApp.tech}
          </span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>الفريق الهندسي المسؤول:</span>
          <span className="text-slate-200 font-bold">{selectedApp.team}</span>
        </div>
        <div className="flex justify-between text-slate-400 font-mono">
          <span>خادم الاستضافة المستقل (Origin):</span>
          <span className="text-indigo-400">{selectedApp.origin}</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-200">الاستقلالية المطلقة:</strong> يمكن لفريق المدفوعات نشر تحديث جديد في تطبيق <code className="text-indigo-300">checkout-app</code> الساعة 2 ظهراً دون الحاجة لإخطار أو التنسيق مع فريق الكتالوج ودون إعادة نشر التطبيق المضيف!
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية تفكيك الصفحة الواحدة إلى تطبيقات مصغرة مستقلة (Header, Catalog, Checkout)، كل تطبيق يعمل على خادم واستضافة مستقلة، ويقوم التطبيق الحاوي (Host Shell) بدمجها في وقت التشغيل دون أي اعتماديات متبادلة.",
      commonMistakes: [
        {
          mistake: "محاولة تطبيق Micro Frontends على موقع بسيط يديره فريق صغير مكون من مطورين أو ثلاثة فقط.",
          why: "تضيف الواجهات المصغرة تعقيداً هائلاً في الشبكة والأداء وتكاليف البنية التحتية؛ وتطبيقها بلا داعٍ يُعد أكبر خطأ معماري قد يرتكبه الفريق.",
          fix: "استخدم الواجهات المصغرة فقط عند وجود فرق عمل متعددة (أكثر من 20-30 مهندساً) تعاني من اختناق النشر المشترك."
        },
        {
          mistake: "استخدام أطر عمل متنافرة ومتباينة كلياً (مثل خلط Angular وReact وVue في نفس الصفحة) دون مبرر قاطع.",
          why: "هذا يجبر متصفح المستخدم على تنزيل محركات 3 أطر عمل مختلفة، مما يضخم حجم الصفحة إلى أكثر من 5 ميجابايت ويبطئ التحميل بشكل كارثي.",
          fix: "وحّد إطار العمل الأساسي (React عبر كافة التطبيقات المصغرة) وشارك مكتبات الأساس لتجنب مضاعفة التنزيل."
        }
      ],
      bestPractices: [
        "قسّم التطبيقات المصغرة بناءً على نطاقات الأعمال (Business Domains) وليس بناءً على الأقسام البصرية العشوائية.",
        "اجعل كل تطبيق مصغر يمتلك مسار CI/CD ونشراً مستقلاً تماماً.",
        "وفّر واجهات بديلة (Fallbacks) قوية في التطبيق الحاوي للتعامل مع احتمال فشل أحد التطبيقات المصغرة دون انهيار كامل الصفحة.",
        "وحّد نظام التصميم (Design System) المشترك لضمان هوية بصرية واحدة متناسقة للمستخدم."
      ],
      visualInfographic: {
        title: "معمارية الواجهات المصغرة (Micro Frontends Architecture)",
        description: "كيف تندمج التطبيقات المصغرة المستقلة في صفحة واحدة متناسقة",
        visualSteps: [
          "تطبيق الحاوية المركزي 🏢 (Host Application Shell يدير التوجيه العام)",
          "تطبيق المنتجات المستقل 📦 (Catalog Remote يُدار بواسطة فريق الكتالوج)",
          "تطبيق الدفع والفواتير 💳 (Checkout Remote يُدار بواسطة فريق المدفوعات)",
          "الدمج في وقت التشغيل ⚡ (تحميل الأكواد ديناميكياً عبر شبكة الـ CDN)",
          "تجربة مستخدم موحدة 🏆 (العميل يرى موقعاً واحداً متناسقاً وسريعاً)"
        ]
      }
    },
    {
      id: "30.4.b",
      title: "متى نستخدم Micro Frontends ومتى نتجنبها؟",
      englishTerm: {
        term: "Micro Frontends Decision Framework",
        pronunciation: "مايكرو فرونت إندز ديسيجن فريم ورك",
        meaning: "إطار اتخاذ القرار المعماري لاستخدام الواجهات المصغرة أو تفاديها"
      },
      description: "ليست معمارية الواجهات المصغرة (Micro Frontends) حلاً سحرياً يناسب كل المشاريع؛ بل هي حل تنظيمي لمشكلة مقياس بشري (Organizational Scaling Problem) أكثر من كونها ميزة تقنية للواجهات. تتلخص معايير استخدامها عندما: 1) تضم الشركة أكثر من 4-5 فرق هندسية مستقلة تعمل على نفس المنتج الرقمي؛ 2) تعاني الشركة من اختناقات متكررة في دورات النشر المشتركة (Release Bottlenecks)؛ 3) وجود خطة تدريجية لاستبدال تطبيق قديم (Legacy Migration) عبر نمط Strangler Pattern. في المقابل، يجب تجنبها تماماً عندما: 1) يكون الفريق صغيراً (أقل من 15 مطوراً)؛ 2) يكون التطبيق ذا حركة مرور منخفضة وبنية واضحة؛ 3) يكون زمن التحميل الأول والأداء الحرج (Performance & SEO) هو الأولوية الأولى دون وجود بنية تحتية متطورة.",
      realWorldAnalogy: "يشبه استخدام Micro Frontends استئجار أسطول طائرات خاصة لشركة؛ إذا كانت الشركة بنكاً عالمياً يضم آلاف التنفيذيين الذين يسافرون يومياً لعقد صفقات بمليارات، فإن الطائرات الخاصة استثمار ذكي وموفر للوقت؛ أما إذا كانت شركة محلية صغيرة تضم 5 موظفين، فإن استئجار أسطول طائرات سيفلس الشركة في شهر واحد دون فائدة!",
      whyItMatters: "تجنب التبني العشوائي لـ Micro Frontends ينقذ الشركات من إهدار مئات الآلاف من الدولارات في بناء وصيانة بنية تحتية شديدة التعقيد لم يكونوا بحاجة إليها من الأساس؛ حيث يُعد Monorepo المنظم حلاً أفضل وأبسط لـ 95% من الشركات.",
      syntax: "// مصفوفة تقييم الجدوى:\nconst shouldAdoptMFE = teamCount >= 4 && requiresIndependentDeployments && acceptsPerformanceOverhead;",
      simpleExample: `// استعراض محاكاة مصفوفة فحص قرار اعتماد الواجهات المصغرة
import React, { useState } from 'react';

export function MFEDecisionMatrixDemo() {
  const [teams, setTeams] = useState(2);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <h4 className="font-bold text-xs text-slate-300 mb-2">حاسبة قرار Micro Frontends</h4>
      <div className="mb-3">
        <label className="text-xs text-slate-400 block mb-1">عدد الفرق الهندسية المستقلة: {teams}</label>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={teams} 
          onChange={(e) => setTeams(Number(e.target.value))}
          className="w-full accent-indigo-600 cursor-pointer"
        />
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        {teams >= 5 ? (
          <div className="text-emerald-400">
            ✓ <strong>قرار سليم:</strong> مع {teams} فرق، الواجهات المصغرة ستمنحكم استقلالية تامة في النشر وتنهي اختناقات الـ Releases.
          </div>
        ) : (
          <div className="text-amber-400">
            ⚠️ <strong>تجنب Micro Frontends:</strong> مع {teams} فرق فقط، يُنصح بشدة باعتماد Monorepo عادي لتفادي التعقيد غير المبرر.
          </div>
        )}
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو تقييم الجدوى المعمارية المتكامل لاعتماد Micro Frontends (MFE Evaluation Matrix)
import React, { useState } from 'react';

// محاور التقييم المعماري
const EVALUATION_FACTORS = [
  {
    category: 'متى نستخدمها (Green Flags)',
    items: [
      'تعدد الفرق المستقلة المكتفية ذاتياً (Cross-functional Teams).',
      'الحاجة الملحة للنشر اليومي المستقل دون انتظار باقي الأقسام.',
      'ترقية تدريجية لتطبيق قديم (Strangler Fig Migration).',
      'وضوح الحدود بين نطاقات الأعمال (Clean Domain Boundaries).'
    ],
    color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20'
  },
  {
    category: 'متى نتجنبها (Red Flags & Warnings)',
    items: [
      'فريق صغير أو متوسط يعمل في مساحة كود متقاربة.',
      'التطبيقات التي تتطلب أداءً فائقاً وزمن تحميل مبدئي حرج (SEO-driven).',
      'غياب بنية تحتية قوية لأتمتة النشر والـ CI/CD.',
      'وجود تشابك كبير في الحالة بين أجزاء الصفحة المختلفة.'
    ],
    color: 'text-rose-400 border-rose-500/30 bg-rose-950/20'
  }
];

// مكون استوديو مصفوفة القرار
export function MFEDecisionStudio() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">إطار اتخاذ القرار المعماري (MFE Framework)</h3>
          <p className="text-xs text-slate-400">التقييم الموضوعي بين مكاسب الاستقلالية وتكلفة التعقيد التقني</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20">
          Decision Guide
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {EVALUATION_FACTORS.map((factor, idx) => (
          <div key={idx} className={\`p-4 rounded-xl border \${factor.color}\`}>
            <h4 className="font-bold text-xs mb-3">{factor.category}</h4>
            <ul className="space-y-2 text-[11px] leading-relaxed">
              {factor.items.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5 text-slate-300">
                  <span className="text-current">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
        📌 <strong className="text-slate-200">الخلاصة الهندسية:</strong> Micro Frontends هي حل تنظيمي لمشكلة إدارة الفرق الكبيرة وليست حلاً برمجياً لتحسين كود الواجهة؛ فإذا لم تكن تعاني من اختناق تنسيق مواعيد النشر بين الفرق، فأنت لست بحاجة إليها.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا التقييم المعماري أن Micro Frontends ليست مناسبة للجميع؛ حيث تكون مفيدة جداً للمؤسسات الكبرى ذات الفرق المتعددة التي تحتاج لنشر مستقل، بينما تمثل عبئاً وتعقيداً مضراً بالمشاريع الصغيرة والمتوسطة التي يكفيها Monorepo منظم.",
      commonMistakes: [
        {
          mistake: "اختيار Micro Frontends بهدف 'تسريع أداء الموقع وزمن التحميل'.",
          why: "الواجهات المصغرة في الواقع تضيف عبئاً خفيفاً على الشبكة وتزيد وقت التحميل بسبب تنزيل ملفات البناء المتعددة وتنسيق وقت التشغيل.",
          fix: "تذكر دائماً أن Micro Frontends تسرع وتيرة إنتاج الفرق (Team Velocity) وليس سرعة تحميل المتصفح."
        },
        {
          mistake: "تطبيق الواجهات المصغرة دون وجود نظام تصميم موحد (Design System) مسبق.",
          why: "بدون نظام تصميم موحد، سيقوم كل فريق باختيار ألوان وخطوط وأزرار مختلفة، ويظهر الموقع كأنه خليط مشوه من 5 مواقع متنافرة.",
          fix: "ابنِ نظام تصميم موحد كحزمة مشتركة أولاً قبل التفكير في تقسيم الواجهات."
        }
      ],
      bestPractices: [
        "اختر نمط Monorepo أولاً؛ فإذا واجهت اختناقات حقيقية في النشر، فكر حينها في Micro Frontends.",
        "قسّم التطبيقات بحيث تقلل التبعيات المشتركة والاتصال الشبكي بينها إلى الحد الأدنى.",
        "ضع مؤشرات أداء حيوية (SLOs) لزمن تحميل كل تطبيق مصغر لضمان عدم تدهور تجربة المستخدم.",
        "استخدم نمط Strangler Fig للانتقال التدريجي للشاشات المعقدة دون المخاطرة بإعادة البناء الكاملة."
      ],
      visualInfographic: {
        title: "شجرة قرار اعتماد الواجهات المصغرة",
        description: "مسار التحقق الهندسي لاختيار المعمارية المناسبة",
        visualSteps: [
          "هل عدد الفرق الهندسية 4 فأكثر؟ 👥 (نعم &rarr; استمر في الفحص | لا &rarr; Monorepo)",
          "هل النشر المشترك يسبب اختناقات يومية؟ 🛑 (نعم &rarr; استمر | لا &rarr; Monorepo)",
          "هل حدود نطاقات الأعمال واضحة؟ 🏬 (نعم &rarr; استمر | لا &rarr; إعادة هيكلة)",
          "هل تتوفر بنية CI/CD متطورة؟ ⚙️ (نعم &rarr; اعتمد Micro Frontends | لا &rarr; تطوير البنية)",
          "الاعتماد الناجح للمشروع 🚀 (استقلالية تامة في النشر وتوسع لا نهائي)"
        ]
      }
    },
    {
      id: "30.4.c",
      title: "أساليب تطبيق Micro Frontends (Build-time vs Runtime)",
      englishTerm: {
        term: "Build-time vs Runtime Integration",
        pronunciation: "بيلد تايم فيرسس رن تايم إنتجريشن",
        meaning: "المقارنة بين الدمج أثناء البناء والدمج الديناميكي أثناء التشغيل"
      },
      description: "تتنوع الأساليب التقنية لدمج التطبيقات المصغرة معاً، وتتوزع بشكل رئيسي بين مدرستين معماريتين: 1) الدمج في وقت البناء (Build-time Integration): حيث يتم حزم كل تطبيق مصغر كحزمة npm، ثم يتم استيرادها وبناؤها معاً في التطبيق الرئيسي أثناء أمر npm run build؛ يتميز هذا الأسلوب بالبساطة وتقليم الكود الميت (Tree-shaking)، ولكنه يعيدنا لمشكلة ضرورة إعادة بناء ونشر التطبيق الرئيسي بالكامل عند تعديل أي تطبيق مصغر؛ 2) الدمج في وقت التشغيل (Runtime Integration): وهو المعيار الحديث المتفوق (باستخدام Module Federation أو Web Components أو iframes)؛ حيث يتم نشر كل تطبيق مصغر بشكل مستقل على خادمه الخاص، ويقوم المتصفح بتنزيل ودمج الأكواد عبر الشبكة في اللحظة التي يفتح فيها المستخدم الصفحة دون الحاجة لإعادة بناء التطبيق المضيف إطلاقاً.",
      realWorldAnalogy: "يشبه الدمج في وقت البناء طبع موسوعة ورقية تجمع مقالات كتبها 10 كتاب مختلفين؛ فإذا عدل أحدهم فصلاً، يجب إعادة طباعة وتجليد وتوزيع الموسوعة بالكامل؛ بينما يشبه الدمج في وقت التشغيل موقع ويكيبيديا؛ حيث يكتب كل كاتب مقالته على صفحته المستقلة وتظهر فوراً ومباشرة للقارئ عبر الإنترنت.",
      whyItMatters: "يحقق الدمج في وقت التشغيل (Runtime Integration) الوعد الحقيقي للواجهات المصغرة: وهو النشر المستقل بنسبة 100%؛ ففريق ميزة البحث يمكنه نشر 10 تحديثات يومياً دون أن يحتاج فريق الصفحة الرئيسية للقيام بأي خطوة بناء أو نشر من جهتهم.",
      syntax: "// أساليب الدمج في وقت التشغيل:\n// 1. Module Federation (الأحدث والأكثر كفاءة): import('remoteApp/Widget')\n// 2. Web Components (محايد للأطر): <custom-cart-element></custom-cart-element>\n// 3. iframes (عزل أمني صارم): <iframe src=\"https://checkout.com\" />",
      simpleExample: `// مقارنة برمجية ومفاهيمية بين أسلوبي الدمج في جدول تفاعلي
import React, { useState } from 'react';

export function IntegrationStylesDemo() {
  const [method, setMethod] = useState('runtime');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-indigo-400">أساليب دمج Micro Frontends</h4>
        <div className="flex gap-1 text-[10px]">
          <button 
            onClick={() => setMethod('runtime')} 
            className={\`px-2 py-0.5 rounded \${method === 'runtime' ? 'bg-indigo-600 font-bold' : 'bg-slate-800'}\`}
          >
            وقت التشغيل (Runtime)
          </button>
          <button 
            onClick={() => setMethod('buildtime')} 
            className={\`px-2 py-0.5 rounded \${method === 'buildtime' ? 'bg-indigo-600 font-bold' : 'bg-slate-800'}\`}
          >
            وقت البناء (Build-time)
          </button>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        {method === 'runtime' ? (
          <div>
            <span className="font-bold text-emerald-400 block mb-1">⚡ Module Federation (Runtime):</span>
            <p className="text-slate-400 leading-relaxed">
              تحميل الكود ديناميكياً عبر الشبكة. نشر مستقل 100% لكل تطبيق مصغر دون إعادة بناء التطبيق المضيف.
            </p>
          </div>
        ) : (
          <div>
            <span className="font-bold text-amber-400 block mb-1">📦 حزم NPM (Build-time):</span>
            <p className="text-slate-400 leading-relaxed">
              تثبيت التطبيقات كحزم npm. يتطلب إعادة بناء ونشر التطبيق الحاوي عند كل تحديث في أي تطبيق مصغر.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو معماري يقارن بين تقنيات الدمج في وقت التشغيل (Module Federation vs Web Components vs iframes)
import React, { useState } from 'react';

// تقنيات الدمج الثلاث الشهيرة
const RUNTIME_TECHNIQUES = [
  {
    name: 'Module Federation (موصى به)',
    isolation: 'مشاركة الاعتماديات مع أداء فائق',
    performance: 'ممتاز (مشاركة كود React في الذاكرة)',
    useCase: 'الخيار المثالي لتطبيقات React الكبيرة',
    pros: 'مشاركة مكتبات React و Tailwind تلقائياً وتفادي التكرار.'
  },
  {
    name: 'Web Components (Custom Elements)',
    isolation: 'عزل كبسلي عبر Shadow DOM',
    performance: 'متوسط (قد يعاد تنزيل حزم إضافية)',
    useCase: 'عند خلط أطر عمل متعددة (React مع Angular)',
    pros: 'معيار رسمي من المتصفح ومحايد تماماً لأي إطار عمل.'
  },
  {
    name: 'iframes (الأسلوب الكلاسيكي المعزول)',
    isolation: 'عزل أمني تام 100% في نافذة مستقلة',
    performance: 'ضعيف (استهلاك ذاكرة وبطء في التفاعل)',
    useCase: 'بوابات الدفع والتطبيقات البنكية شديدة الحساسية',
    pros: 'استحالة تسريب الأخطاء أو أكواد التجسس بين التطبيقات.'
  }
];

// مكون استوديو مقارنة تقنيات الدمج
export function RuntimeTechniquesStudio() {
  const [selectedTech, setSelectedTech] = useState(RUNTIME_TECHNIQUES[0]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">تقنيات الدمج في وقت التشغيل (Runtime Integration)</h3>
          <p className="text-xs text-slate-400">مقارنة أساليب تحميل وتجميع الواجهات المصغرة في المتصفح</p>
        </div>
        <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded-full border border-cyan-500/20">
          Runtime Matrix
        </span>
      </div>

      {/* أزرار اختيار التقنية */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {RUNTIME_TECHNIQUES.map((tech) => (
          <button
            key={tech.name}
            onClick={() => setSelectedTech(tech)}
            className={\`p-3 rounded-xl text-right transition border text-xs \${
              selectedTech.name === tech.name
                ? 'bg-indigo-600/20 border-indigo-500 text-white'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800/40'
            }\`}
          >
            <span className="font-bold block truncate">{tech.name.split(' ')[0]}</span>
            <span className="text-[10px] text-slate-500 block mt-1">{tech.useCase.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* تفاصيل التقنية المختارة */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2.5">
        <h4 className="font-bold text-sm text-slate-200">{selectedTech.name}</h4>
        <div className="flex justify-between text-slate-400">
          <span>درجة العزل والأمان:</span>
          <span className="text-slate-200 font-medium">{selectedTech.isolation}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>مستوى الأداء والذاكرة:</span>
          <span className="text-emerald-400 font-bold">{selectedTech.performance}</span>
        </div>
        <div className="flex justify-between text-slate-400">
          <span>الميزة الجوهرية:</span>
          <span className="text-cyan-300 font-medium">{selectedTech.pros}</span>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "تستعرض هذه المصفوفة المعمارية الفوارق الجوهرية بين أساليب الدمج؛ موضحة أن Module Federation هي الخيار الأفضل والأكثر كفاءة لتطبيقات React الحديثة بفضل ميزة مشاركة الاعتماديات المشتركة في الذاكرة ومنع التكرار.",
      commonMistakes: [
        {
          mistake: "استخدام الدمج في وقت البناء (Build-time via npm) والادعاء بتطبيق Micro Frontends حقيقي.",
          why: "الدمج عبر npm يعيد ربط الحزم في وقت البناء ويجبر الفريق على إعادة نشر التطبيق المضيف في كل مرة، مما يلغي ميزة الاستقلالية في النشر.",
          fix: "اعتمد الدمج في وقت التشغيل (Runtime Integration عبر Module Federation) لتحقيق استقلالية النشر الفعلية."
        },
        {
          mistake: "الاعتماد على iframes لبناء كافة أجزاء الصفحة الداخلية.",
          why: "تستهلك نوافذ iframes موارد الذاكرة بشكل مفرط، وتكسر إمكانية الوصول وقارئات الشاشة، وتجعل التجاوب مع مقاسات الهواتف كابوساً.",
          fix: "احجز iframes للمكونات الخارجية شديدة الحساسية فقط (مثل استمارة إدخال بطاقة الفيزا)، واستخدم Module Federation لباقي التطبيق."
        }
      ],
      bestPractices: [
        "اعتمد تقنية Module Federation كخيار افتراضي أول لتطبيقات React لما تقدمه من أداء فائق ومشاركة ذكية للحزم.",
        "استخدم تقنية Web Components إذا كان نظامك يدمج أجزاء قديمة مبنية بـ Angular أو Vue داخل صفحة React.",
        "وفّر آلية استرجاع تلقائية (Fallback Mechanism) في حال تعذر تنزيل كود التطبيق المصغر عبر الشبكة.",
        "عزز حدود التطبيقات المصغرة بمعالجة أخطاء داخلية (Error Boundaries) مستقلة لكل تطبيق."
      ],
      visualInfographic: {
        title: "مقارنة أساليب دمج الواجهات المصغرة",
        description: "كيف تختلف طرق ربط وتجميع التطبيقات في بيئة الويب",
        visualSteps: [
          "الدمج أثناء البناء Build-time 📦 (حزم npm + تجميع في حزمة واحدة + إعادة نشر إلزامية)",
          "الدمج أثناء التشغيل Runtime ⚡ (تحميل ديناميكي عبر الشبكة + استقلالية تامة)",
          "تقنية Module Federation 🚀 (مشاركة كود React في الذاكرة + أداء فائق)",
          "تقنية Web Components 🧩 (عزل Shadow DOM + حيادية تامة للأطر)",
          "تقنية iframes 🛡️ (عزل أمني صارم لبوابات الدفع الخارجية)"
        ]
      }
    },
    {
      id: "30.4.d",
      title: "استخدام Module Federation مع React",
      englishTerm: {
        term: "Webpack & Vite Module Federation",
        pronunciation: "ويب باك آند فايت موديول فيديريشن",
        meaning: "التحميل الديناميكي المباشر للموديولات البرمجية بين التطبيقات عبر الشبكة"
      },
      description: "تقنية اتحاد الوحدات (Module Federation، التي ابتكرها Zack Jackson وأصبحت جزءاً أساسياً في Webpack 5 وتوفرت لـ Vite عبر إضافات متقدمة) هي التطور التكنولوجي الثوري الذي جعل معمارية Micro Frontends قابلة للتطبيق العملي في أكبر شركات العالم. تتيح Module Federation لتطبيق JavaScript أن يقوم بتصدير مكونات أو دوال معينة (Exposed Modules)، وفي المقابل، يمكن لأي تطبيق آخر في أي مكان في العالم استيراد تلك المكونات واستدعاؤها عبر الشبكة في وقت التشغيل (Runtime Remote Import) كأنها ملفات محلية تماماً، مع ميزة أسطورية تتفرد بها: المشاركة التلقائية للاعتماديات (Automatic Shared Dependencies)؛ فإذا كان التطبيقان يعتمدان على React، يتم تنزيل نسخة واحدة فقط في المتصفح ومشاركتها في الذاكرة!",
      realWorldAnalogy: "يشبه Module Federation منصات البث الفضائي الحديثة؛ لا تحتاج لشراء جهاز تلفاز جديد لكل قناة؛ فالشاشة الأساسية (Host) تستقبل ترددات القنوات المتنوعة عبر الأقمار الصناعية (Remotes) وتعرضها بسلاسة تامة، مع مشاركة نظام الصوت والكهرباء الداخلي للشاشة.",
      whyItMatters: "تنهي Module Federation معضلة تكرار تنزيل المكتبات؛ حيث يمكن لـ 5 تطبيقات مصغرة في نفس الصفحة أن تشترك في نسخة واحدة من React وTailwind، مما يجعل حجم الصفحة خفيفاً وسريعاً للغاية مع الحفاظ على استقلالية نشر كل تطبيق بشكل منفصل.",
      syntax: "// تكوين Module Federation في vite.config.js أو webpack.config.js:\nnew ModuleFederationPlugin({\n  name: 'remoteApp',\n  filename: 'remoteEntry.js',\n  exposes: { './Button': './src/Button' },\n  shared: { react: { singleton: true }, 'react-dom': { singleton: true } }\n})",
      simpleExample: `// استعراض محاكاة استيراد مكون بعيد عبر Module Federation باستخدام React.lazy
import React, { Suspense, useState } from 'react';

// محاكاة استيراد مكون بعيد عبر الشبكة: const RemoteHeader = React.lazy(() => import('authRemote/Header'));
function MockRemoteHeader() {
  return (
    <div className="p-3 bg-indigo-950/60 border border-indigo-500/40 rounded-xl text-xs flex justify-between items-center">
      <span className="font-bold text-indigo-300">🏢 الترويسة البعيدة (Remote Header)</span>
      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono">
        Loaded from remoteEntry.js
      </span>
    </div>
  );
}

// التطبيق المضيف
export function ModuleFederationConsumerDemo() {
  const [loadRemote, setLoadRemote] = useState(false);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <h4 className="font-bold text-xs text-slate-300 mb-2">استهلاك Module Federation</h4>
      
      {!loadRemote ? (
        <button 
          onClick={() => setLoadRemote(true)}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-xs font-bold transition"
        >
          تحميل المكون البعيد عبر الشبكة (Load Remote)
        </button>
      ) : (
        <Suspense fallback={<div className="text-xs text-slate-500">جاري تنزيل remoteEntry.js...</div>}>
          <MockRemoteHeader />
        </Suspense>
      )}
    </div>
  );
}`,
      advancedExample: `// استعراض ملف تكوين Module Federation الاحترافي لكل من التطبيق البعيد (Remote) والتطبيق المضيف (Host)
// ==========================================
// 1. تكوين التطبيق المصغر البعيد (apps/checkout/vite.config.ts)
// ==========================================
/*
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    federation({
      name: 'checkoutApp', // اسم التطبيق البعيد
      filename: 'remoteEntry.js', // ملف الفهرس الذي يتم تنزيله عبر الشبكة
      // المكونات المصرح للآخرين باستيرادها
      exposes: {
        './CheckoutWidget': './src/components/CheckoutWidget.tsx',
        './usePayment': './src/hooks/usePayment.ts'
      },
      // المكتبات المشتركة لضمان عدم تكرار تنزيلها
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' }
      }
    })
  ]
});
*/

// ==========================================
// 2. تكوين التطبيق المضيف الحاوي (apps/host/vite.config.ts)
// ==========================================
/*
export default defineConfig({
  plugins: [
    federation({
      name: 'hostApp',
      // روابط التطبيقات البعيدة التي يستورد منها
      remotes: {
        checkoutApp: 'checkoutApp@https://checkout.my-cdn.com/remoteEntry.js'
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      }
    })
  ]
});
*/

// ==========================================
// 3. استهلاك المكون داخل كود React في المضيف (Host React Code)
// ==========================================
import React, { Suspense } from 'react';

// استيراد كسول للمكون البعيد من خلال الـ remote المسمى
// const RemoteCheckoutWidget = React.lazy(() => import('checkoutApp/CheckoutWidget'));

export function ModuleFederationHostView() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-4">
        <div>
          <h3 className="text-base font-bold">التطبيق المضيف (Host App)</h3>
          <p className="text-xs text-slate-400">استيراد المكونات ديناميكياً عبر Module Federation</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20">
          Fed v2 Active
        </span>
      </div>

      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 mb-4">
        <p className="text-xs text-slate-400 mb-3">
          يتم جلب كود الدفع مباشرة من خادم <code className="text-indigo-300">checkoutApp</code> عبر الشبكة مع مشاركة نسخة React الحالية في الذاكرة.
        </p>

        <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs text-emerald-300">
          ✓ تم التحقق من تطابق نسخة React (Singleton: True). لم يتم تنزيل أي بايت إضافي مكرر.
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "يشرح هذا النموذج كيفية تكوين Module Federation في بيئات Vite وWebpack؛ حيث يصدر التطبيق البعيد مكوناته عبر حقل exposes في ملف remoteEntry.js، ويقوم المضيف باستيراده ديناميكياً عبر remotes، مع تفعيل خاصية singleton: true لمنع تكرار تنزيل مكتبة React.",
      commonMistakes: [
        {
          mistake: "نسيان تعيين خاصية singleton: true لمكتبتي react و react-dom في حقل shared.",
          why: "عدم تفعيل singleton يسمح لكل تطبيق مصغر بتنزيل نسخته الخاصة من React، مما يكسر سياقات React (Context) ويؤدي لانهيار الخطافات (Invalid Hook Call Error).",
          fix: "اضبط دائماً { singleton: true, requiredVersion: '^18.0.0' } لمكتبات React و React-DOM في كلي الطرفين (Host و Remote)."
        },
        {
          mistake: "استيراد المكون البعيد بشكل متزامن مباشر (Direct Synchronous Import) بدلاً من React.lazy.",
          why: "المكون البعيد يتم تنزيله عبر الشبكة من خادم خارجي؛ والاستيراد المباشر يفشل فوراً لأن الكود لم يكن موجوداً محلياً عند بدء تشغيل الصفحة.",
          fix: "استخدم دائماً التحميل الكسول المعزول: const RemoteComp = React.lazy(() => import('remote/Comp')) مع إحاطته بـ Suspense."
        }
      ],
      bestPractices: [
        "أحط كافة استدعاءات المكونات البعيدة بمكونات Error Boundary لحماية الصفحة الرئيسية من الانهيار إذا تعطل خادم التطبيق البعيد.",
        "استخدم أداة Module Federation 2.0 الحديثة المدعومة من ByteDance لدعم Vite وWebpack وتطبيقات Rspack بسرعة فائقة.",
        "وفّر واجهات هياكل عظمية (Skeleton Loaders) داخل Suspense fallback أثناء فترة انتظار تنزيل ملف remoteEntry.js.",
        "وحّد إصدارات الاعتماديات المشتركة عبر حقل requiredVersion لتفادي التضارب."
      ],
      visualInfographic: {
        title: "آلية عمل تقنية Module Federation",
        description: "كيف تتبادل التطبيقات المكونات وتتشارك الاعتماديات في الذاكرة",
        visualSteps: [
          "تطبيق المضيف الحاوي 🖥️ (Host App يطلب المكون البعيد عبر الشبكة)",
          "تنزيل ملف الفهرس 📜 (تنزيل remoteEntry.js من خادم التطبيق البعيد)",
          "فحص ومشاركة الاعتماديات 🛡️ (التحقق من وجود React في الذاكرة ومشاركتها)",
          "تنزيل كود المكون فقط 📦 (تنزيل الجزء الخاص بالمكون المطلوب حصراً)",
          "التصيير السلس في الـ DOM ⚡ (عرض المكون في واجهة React بزمن استجابة فائق)"
        ]
      }
    },
    {
      id: "30.4.e",
      title: "إدارة التوجيه بين التطبيقات المصغرة (Cross-App Routing)",
      englishTerm: {
        term: "Micro Frontend Routing Architecture",
        pronunciation: "مايكرو فرونت إند راوتينغ أركيتكشر",
        meaning: "تنسيق وإدارة التوجيه والانتقال بين المسارات عبر التطبيقات المستقلة"
      },
      description: "تعد إدارة التوجيه (Routing) أحد أكبر التحديات المعمارية في أنظمة الواجهات المصغرة؛ حيث يمتلك التطبيق المضيف (Host) موجهه الخاص (مثال: مسار /checkout)، ويمتلك التطبيق المصغر البعيد مساراته الداخلية المتشعبة (مثال: /checkout/shipping و /checkout/payment). تتطلب المعمارية السليمة للتوجيه: 1) استخدام 'التوجيه الموزع' (Distributed Routing)؛ حيث يتولى المضيف توجيه المستخدم إلى التطبيق المصغر المناسب بناءً على البادئة (Route Prefix)؛ 2) استخدام ذاكرة التوجيه المعزولة (MemoryRouter) داخل التطبيقات المصغرة أو مزامنة متقدمة مع History API للمتصفح؛ 3) إرسال أحداث مخصصة (Custom Events) عند تغير المسار لضمان عدم حدوث تعارض أو قفزات مفاجئة في شريط العنوان.",
      realWorldAnalogy: "يشبه التوجيه في الواجهات المصغرة إدارة حركة المرور بين الخطوط الجوية الدولية والرحلات الداخلية؛ فالمطار الدولي (المضيف) يوجه المسافر إلى صالة الرحلات الإقليمية (التطبيق المصغر) بناءً على وجهته العامة؛ وبمجرد دخوله الصالة، يتولى فريق الصالة توجيهه إلى بوابات الصعود الفرعية بدقة.",
      whyItMatters: "يمنع التوجيه المنسق أخطاء تجمد شريط العنوان، ويضمن عمل زري 'الرجوع' و'التقدم' (Back/Forward Buttons) في المتصفح بسلاسة تامة، ويتيح للمستخدم نسخ ومشاركة الروابط المباشرة (Deep Linking) لأي صفحة فرعية داخل التطبيق المصغر دون أي خلل.",
      syntax: "// مزامنة التوجيه عبر أحداث المتصفح المخصصة:\nwindow.dispatchEvent(new CustomEvent('app:navigate', { detail: { path: '/checkout/step-2' } }));",
      simpleExample: `// استعراض محاكاة مزامنة التوجيه بين التطبيق الحاوي وتطبيق مصغر
import React, { useState } from 'react';

// المكون المضيف يدير المسار العام
export function CrossAppRoutingDemo() {
  const [currentPath, setCurrentPath] = useState('/shop');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-slate-300">التوجيه بين التطبيقات المصغرة</h4>
        <span className="font-mono text-[10px] text-cyan-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
          URL: {currentPath}
        </span>
      </div>

      <div className="flex gap-2 mb-3">
        <button 
          onClick={() => setCurrentPath('/shop')}
          className={\`flex-1 py-1.5 rounded text-xs font-bold transition \${currentPath.startsWith('/shop') ? 'bg-indigo-600' : 'bg-slate-800 text-slate-400'}\`}
        >
          المتجر (/shop)
        </button>
        <button 
          onClick={() => setCurrentPath('/account/settings')}
          className={\`flex-1 py-1.5 rounded text-xs font-bold transition \${currentPath.startsWith('/account') ? 'bg-indigo-600' : 'bg-slate-800 text-slate-400'}\`}
        >
          الحساب (/account)
        </button>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        {currentPath.startsWith('/shop') ? (
          <p className="text-slate-400">📦 تم تنشيط تطبيق المتجر المصغر وتوجيهه للمسار الداخلي.</p>
        ) : (
          <p className="text-slate-400">👤 تم تنشيط تطبيق الحساب المصغر وتوجيهه لقسم الإعدادات.</p>
        )}
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام متكامل لمزامنة التوجيه العميق (Deep Linking Bridge) بين المضيف والتطبيقات المصغرة
import React, { useState, useEffect } from 'react';

// فئة وسيط التوجيه الموحد للمايكرو فرونت إند
class MicroRoutingBridge {
  // بث حدث الانتقال لجميع التطبيقات في الصفحة
  static navigate(targetPath) {
    window.dispatchEvent(new CustomEvent('micro-app:route-change', { detail: { path: targetPath } }));
  }

  // الاستماع لتغييرات المسار الصادرة من التطبيقات الأخرى
  static subscribe(callback) {
    const handler = (event) => callback(event.detail.path);
    window.addEventListener('micro-app:route-change', handler);
    return () => window.removeEventListener('micro-app:route-change', handler);
  }
}

// مكون تطبيق المتجر المصغر المستقل (Remote App Simulation)
function RemoteStoreMicroApp({ activeSubRoute }) {
  return (
    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold text-indigo-400">تطبيق المتجر المصغر (Store Remote)</span>
        <span className="text-[10px] font-mono text-slate-500">مسار فرعي: {activeSubRoute}</span>
      </div>

      <div className="flex gap-2 pt-2">
        <button 
          onClick={() => MicroRoutingBridge.navigate('/store/electronics')}
          className="px-2.5 py-1 bg-slate-900 border border-slate-700 hover:border-indigo-500 rounded text-slate-300"
        >
          قسم الإلكترونيات
        </button>
        <button 
          onClick={() => MicroRoutingBridge.navigate('/store/books')}
          className="px-2.5 py-1 bg-slate-900 border border-slate-700 hover:border-indigo-500 rounded text-slate-300"
        >
          قسم الكتب
        </button>
      </div>
    </div>
  );
}

// التطبيق الحاوي المركزي المنسق للمسارات
export function CrossAppRoutingStudio() {
  const [globalRoute, setGlobalRoute] = useState('/store/electronics');

  useEffect(() => {
    // الاشتراك في جسر التوجيه الموحد
    const unsubscribe = MicroRoutingBridge.subscribe((newPath) => {
      setGlobalRoute(newPath);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-4">
        <div>
          <h3 className="text-base font-bold">جسر التوجيه الموحد (Routing Bridge)</h3>
          <p className="text-xs text-slate-400">مزامنة شريط العنوان وأحداث التنقل بين التطبيقات المصغرة</p>
        </div>
        <span className="text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded-full border border-cyan-500/20">
          Sync: Active
        </span>
      </div>

      {/* شريط العنوان التفاعلي */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 flex items-center gap-2 mb-4">
        <span className="text-slate-500">https://my-company.com</span>
        <span className="text-emerald-400 font-bold">{globalRoute}</span>
      </div>

      {/* المكون البعيد */}
      <RemoteStoreMicroApp activeSubRoute={globalRoute.replace('/store', '')} />
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية حل معضلة التوجيه في المايكرو فرونت إند عبر بناء جسر توجيه موحد (MicroRoutingBridge) يعتمد على أحداث المتصفح المخصصة (Custom Events)؛ مما يتيح للتطبيق المصغر طلب تغيير المسار، ليتكفل المضيف بتحديث شريط العنوان ومزامنة التاريخ بسلاسة.",
      commonMistakes: [
        {
          mistake: "استخدام BrowserRouter التقليدي في كل من التطبيق المضيف والتطبيقات المصغرة في نفس الوقت.",
          why: "وجود نسختين متنافستين من BrowserRouter يستمعان لنفس كائن history يسبب تعارضات دائرية وانهيار التوجيه عند النقر على الروابط.",
          fix: "استخدم BrowserRouter في التطبيق المضيف فقط، واستخدم MemoryRouter أو جسر أحداث مخصص داخل التطبيقات المصغرة البعيدة."
        },
        {
          mistake: "تجاهل دعم الروابط العميقة (Deep Linking) عند فتح الصفحة مباشرة من شريط العنوان.",
          why: "إذا فتح المستخدم رابطاً مثل /checkout/shipping مباشرة، وفشل المضيف في تمرير المسار الفرعي للتطبيق المصغر، سيعود المستخدم للصفحة الرئيسية محبطاً.",
          fix: "مرر المسار الأولي (initialPath) من المضيف إلى المكون البعيد فور تركيبه لضمان فتح الشاشة الصحيحة."
        }
      ],
      bestPractices: [
        "عيّن بادئة فريدة لكل تطبيق مصغر في المسار العام (مثل /checkout/* و /catalog/*) لتفادي تداخل المسارات.",
        "استمع لحدث popstate في المتصفح لدعم زري الرجوع والتقدم بسلاسة تامة.",
        "عزز التوجيه بأحداث تنبيه مخصصة لتحديث شريط العنوان وتتبع تحليلات Google Analytics بدقة.",
        "استخدم تقنية التحميل الكسول الموجه بالمسار (Route-driven Lazy Loading) لتحميل حزم التطبيق المصغر فقط عند زيارة مساره."
      ],
      visualInfographic: {
        title: "هندسة التوجيه الموزع (Cross-App Routing Flow)",
        description: "كيف يتم تنسيق مسارات المتصفح بين المضيف والتطبيقات المصغرة",
        visualSteps: [
          "تغيير مسار المتصفح 🌐 (المستخدم ينقر رابطاً جديداً أو يفتح شريط العنوان)",
          "توجيه المضيف المركزي 🏢 (Host Router يفحص البادئة /checkout/*)",
          "تنشيط التطبيق المصغر ⚡ (تحميل حزمة Remote App المعنية فقط)",
          "التوجيه الداخلي المعزول 🔀 (MemoryRouter ينفذ المسار الفرعي داخل المكون)",
          "مزامنة أزرار المتصفح 🔄 (تنسيق History API لدعم الرجوع والتقدم بسلاسة)"
        ]
      }
    },
    {
      id: "30.4.f",
      title: "مشاركة الحالة والاتصال بين الواجهات المصغرة (Cross-App State & Event Bus)",
      englishTerm: {
        term: "Cross-App State & Event Bus",
        pronunciation: "كروس آب ستيت آند إيفنت بص",
        meaning: "تبادل البيانات والاتصال الخفيف بين التطبيقات المصغرة المستقلة"
      },
      description: "القاعدة الذهبية الأولى في معمارية الواجهات المصغرة هي: 'قلل مشاركة الحالة إلى أقصى حد ممكن' (Minimize Shared State)؛ لأن الإفراط في مشاركة الحالة يعيد خلق معمارية متشابكة وفوضوية (Distributed Monolith). ومع ذلك، تحتاج التطبيقات المصغرة للتواصل في حالات محدودة وحرجة (مثل: إخطار سلة الشراء بأن المستخدم أضاف منتجاً في تطبيق الكتالوج، أو إخطار كافة الشاشات بتسجيل الخروج). يتم الاتصال ومشاركة الحالة النظيفة عبر أسلوبين رئيسيين: 1) ناقل الأحداث العالمي (Global Event Bus) المعتمد على أحداث DOM المخصصة القياسية (CustomEvent و window.dispatchEvent)؛ 2) مخازن الحالة الخفيفة المحايدة (Micro Stores) عبر مكتبات ذرية مثل Zustand مع تمرير كائن الستور عبر نافذة window المشتركة.",
      realWorldAnalogy: "يشبه ناقل الأحداث (Event Bus) نظام الإذاعة الداخلية في المدارس؛ إذا أراد المدير إعلان انتهاء اليوم الدراسي، يذيع رسالة صوتية عامة (Event)؛ كل معلم في فصله يسمع الرسالة ويتصرف باستقلالية مع طلابه دون أن يحتاج المدير للدخول لكل فصل على حدة والتحدث مع كل طالب.",
      whyItMatters: "يحافظ ناقل الأحداث على فك الارتباط المعماري (Loose Coupling)؛ فتطبيق الكتالوج يطلق حدث 'CART_UPDATED' ولا يهتم هل تطبيق السلة موجود أم لا، ومن بناه، وكيف سيعالج البيانات؛ مما يمنع انكسار التطبيقات عند غياب بعضها.",
      syntax: "// 1. إرسال حدث من التطبيق الأول:\nwindow.dispatchEvent(new CustomEvent('cart:item-added', { detail: { productId: 101 } }));\n// 2. الاستماع للحدث في التطبيق الثاني:\nwindow.addEventListener('cart:item-added', (e) => updateCount(e.detail.productId));",
      simpleExample: `// استعراض محاكاة ناقل الأحداث (Event Bus) للتواصل بين تطبيقين مصغرين
import React, { useState, useEffect } from 'react';

// تطبيق المتجر المصغر يطلق حدثاً
function StoreRemotePublisher() {
  const handleAdd = () => {
    window.dispatchEvent(new CustomEvent('demo:cart-add', { detail: { item: 'كتاب React المعماري' } }));
  };

  return (
    <button 
      onClick={handleAdd}
      className="w-full py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded text-xs font-bold transition text-white"
    >
      إضافة منتج للسلة (بث حدث)
    </button>
  );
}

// تطبيق السلة المصغر يستمع للحدث ويعرض النتيجة
export function CartRemoteSubscriber() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      setItems(prev => [...prev, e.detail.item]);
    };
    window.addEventListener('demo:cart-add', handler);
    return () => window.removeEventListener('demo:cart-add', handler);
  }, []);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm space-y-3">
      <h4 className="font-bold text-xs text-slate-300">الاتصال عبر ناقل الأحداث (Event Bus)</h4>
      <StoreRemotePublisher />
      <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-xs">
        <span className="text-slate-400 block mb-1">عناصر السلة (تطبيق السلة المستمع):</span>
        <span className="text-emerald-400 font-mono font-bold">
          {items.length} عناصر مسجلة
        </span>
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو تفاعلي لمحاكي ناقل الأحداث المؤسسي الموحد (Typed Global Event Bus)
import React, { useState, useEffect } from 'react';

// فئة ناقل الأحداث الموحد المكتوب بصرامة
class EnterpriseEventBus {
  static emit(eventName, payload) {
    const event = new CustomEvent(\`org-event:\${eventName}\`, { detail: payload });
    window.dispatchEvent(event);
  }

  static on(eventName, callback) {
    const listener = (e) => callback(e.detail);
    window.addEventListener(\`org-event:\${eventName}\`, listener);
    return () => window.removeEventListener(\`org-event:\${eventName}\`, listener);
  }
}

// مكون استوديو اختبار الاتصال بين التطبيقات المصغرة
export function CrossAppStateStudio() {
  const [eventLogs, setEventLogs] = useState([]);

  // الاستماع لكافة الأحداث المشتركة
  useEffect(() => {
    const unsubAuth = EnterpriseEventBus.on('USER_LOGIN', (data) => {
      setEventLogs(prev => [\`[AUTH]: تم تسجيل دخول المستخدم \${data.name} في \${new Date().toLocaleTimeString()}\`, ...prev]);
    });

    const unsubCart = EnterpriseEventBus.on('ITEM_PURCHASED', (data) => {
      setEventLogs(prev => [\`[COMMERCE]: تم شراء المنتج \${data.item} بمبلغ \$\${data.price}\`, ...prev]);
    });

    return () => {
      unsubAuth();
      unsubCart();
    };
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">ناقل الأحداث العالمي (Global Event Bus)</h3>
          <p className="text-xs text-slate-400">تبادل البيانات الخفيف بين التطبيقات المصغرة دون تشابك الحالة</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20">
          Pub/Sub Bus
        </span>
      </div>

      {/* أزرار بث الأحداث لمحاكاة التطبيقات المصغرة */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          onClick={() => EnterpriseEventBus.emit('USER_LOGIN', { name: 'سارة خالد' })}
          className="p-3 bg-slate-950 border border-slate-800 hover:border-indigo-500 rounded-xl text-xs font-bold transition text-right"
        >
          <span className="text-indigo-400 block mb-0.5">تطبيق المصادقة 🔐</span>
          بث حدث USER_LOGIN
        </button>

        <button 
          onClick={() => EnterpriseEventBus.emit('ITEM_PURCHASED', { item: 'شاشة 4K', price: 399 })}
          className="p-3 bg-slate-950 border border-slate-800 hover:border-emerald-500 rounded-xl text-xs font-bold transition text-right"
        >
          <span className="text-emerald-400 block mb-0.5">تطبيق المتجر 🛒</span>
          بث حدث ITEM_PURCHASED
        </button>
      </div>

      {/* سجل الأحداث المباشر */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-1.5 min-h-[120px]">
        <span className="text-slate-500 block mb-2 font-sans font-bold text-[11px]">
          سجل حركة الأحداث المشتركة في الناقل:
        </span>
        {eventLogs.length === 0 ? (
          <span className="text-slate-600">انقر الأزرار أعلاه لبث أحداث تجريبية ومراقبة تفاعل الناقل...</span>
        ) : (
          eventLogs.map((log, idx) => (
            <div key={idx} className="text-slate-300">
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية استخدام نمط الناشر والمشترك (Pub/Sub) عبر فئة EnterpriseEventBus المعتمدة على أحداث DOM المخصصة؛ مما يتيح للتطبيقات المصغرة تبادل الرسائل والتنبيهات بخفة وأمان تام دون الحاجة لمشاركة مخزن حالة معقد يربط بينها.",
      commonMistakes: [
        {
          mistake: "مشاركة متجر Redux مركزي واحد ضخم بين جميع التطبيقات المصغرة في نفس الصفحة.",
          why: "مشاركة مخزن حالة واحد يعيد بناء معمارية المونوليث المتشابك (Distributed Monolith) ويلغي استقلالية التطبيقات ويعقد تحديثها.",
          fix: "اجعل كل تطبيق مصغر يدير حالته الداخلية المستقلة، واستخدم ناقل الأحداث (Event Bus) للرسائل المشتركة الضرورية فقط."
        },
        {
          mistake: "نسيان تنظيف مستمعي الأحداث removeEventListener عند إلغاء تركيب المكونات في React.",
          why: "عدم إزالة المستمعين يؤدي إلى تسريب خطير في الذاكرة (Memory Leaks) وتنفيذ معالجات الأحداث عدة مرات متتالية.",
          fix: "احرص دائماً على إرجاع دالة التنظيف داخل useEffect لإلغاء الاشتراك فور مغادرة الشاشة."
        }
      ],
      bestPractices: [
        "وثّق أسماء وهياكل حمولات الأحداث المشتركة (Event Contracts) في حزمة الأنواع المركزية @my-org/types.",
        "استخدم البادئة الموحدة لجميع الأحداث (مثل org:event-name) لتفادي التداخل مع أحداث المتصفح الأصلية.",
        "اعتمد على معرّفات بسيطة في الحمولات (مثل إرسال userId فقط) ودع التطبيق المستلم يجلب التفاصيل التي يحتاجها.",
        "احرص على ألا يؤدي غياب أحد التطبيقات المستمعة إلى تعطل أو توقف التطبيق الباث للحدث."
      ],
      visualInfographic: {
        title: "معمارية ناقل الأحداث العالمي (Global Event Bus)",
        description: "كيف تتواصل التطبيقات المصغرة بأمان ودون تشابك في الحالة",
        visualSteps: [
          "تطبيق المصدر ينفذ الإجراء 🖱️ (المستخدم يضيف منتجاً أو يسجل الدخول)",
          "بث الحدث عبر الناقل 📢 (window.dispatchEvent مع حمولة مخصصة)",
          "ناقل الأحداث الموحد 🚌 (Event Bus يوجه الرسالة للمتصفح)",
          "استقبال الحدث المستقل 📥 (التطبيقات المشتركة تستمع وتحدث واجهاتها)",
          "فك الارتباط التام 🛡️ (استقلالية كاملة وعدم اعتماد أي تطبيق على الآخر)"
        ]
      }
    },
    {
      id: "30.4.g",
      title: "التعامل مع الاعتماديات المشتركة في Module Federation",
      englishTerm: {
        term: "Shared Dependencies & Singleton Control",
        pronunciation: "شيرد ديبندنسيز آند سينجلتون كونترول",
        meaning: "ضبط وتوحيد المكتبات المشتركة ومنع تعدد نسخ React"
      },
      description: "تعد إدارة الاعتماديات المشتركة (Shared Dependencies Management) قلب تقنية Module Federation والضمان الوحيد لنجاح معمارية الواجهات المصغرة. عندما تقوم 5 تطبيقات مصغرة باستيراد مكتبة React وReact DOM، فإذا لم يتم ضبط التشارك، سيقوم المتصفح بتنزيل 5 نسخ مختلفة من React! تتضمن الإدارة الدقيقة لحقل shared في ملف التكوين ضبط خيارات حاسمة: 1) خيار singleton: true الذي يفرض تحميل نسخة واحدة فقط من المكتبة عبر كامل الصفحة ومشاركتها في الذاكرة؛ 2) خيار strictVersion: true الذي يرفض تنزيل نسخة غير متوافقة ويطلق تحذيراً صريحاً؛ 3) خيار requiredVersion لتحديد مدى التوافق الدلالي للإصدارات المسموح بها وفق معايير SemVer.",
      realWorldAnalogy: "يشبه ضبط الاعتماديات المشتركة توصيل الأجهزة الكهربائية في مبنى ضخم بنظام تكييف مركزي واحد؛ فبدلاً من أن يركب كل مستأجر مكيفاً ضخماً على نافذته يستهلك كهرباء المبنى بالكامل، يشترك الجميع في مضخة تبريد مركزية واحدة في السطح تغذي كافة الغرف بكفاءة وهدوء.",
      whyItMatters: "يقلل الضبط السليم لحقل shared حجم التنزيل الشبكي لصفحات Micro Frontends بنسبة تتراوح بين 60% إلى 75%، ويمنع ظهور أخطاء انهيار React الغامضة (مثل تعطل Context API والـ Hooks) الناتجة عن تضارب نسخ React المتعددة في نفس شجرة الـ DOM.",
      syntax: "// الإعداد الاحترافي للحزم المشتركة في Module Federation:\nshared: {\n  react: { singleton: true, strictVersion: true, requiredVersion: '^18.3.0' },\n  'react-dom': { singleton: true, strictVersion: true, requiredVersion: '^18.3.0' },\n  'lucide-react': { singleton: true }\n}",
      simpleExample: `// استعراض محاكاة فحص نسخة React المشتركة في بيئة Module Federation
import React from 'react';

export function SharedDependencyCheckDemo() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <h4 className="font-bold text-xs text-indigo-400 mb-2">فحص الاعتماديات المشتركة (Shared Singleton)</h4>
      <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs space-y-1 font-mono">
        <div className="flex justify-between">
          <span className="text-slate-400">حزمة React المحملة:</span>
          <span className="text-emerald-400 font-bold">{React.version}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">حالة التشارك (Singleton):</span>
          <span className="text-cyan-400 font-bold">نشطة (Shared 100%)</span>
        </div>
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو محاكاة كاشف تضارب إصدارات المكتبات في بيئة Module Federation (Federated Dep Auditor)
import React, { useState } from 'react';

// محاكاة تقرير فحص الحزم المشتركة بين المضيف والتطبيقات البعيدة
export function FederatedDepAuditorStudio() {
  const [dependencies, setDependencies] = useState([
    { name: 'react', hostVer: '18.3.1', remoteVer: '18.3.1', isSingleton: true, status: 'OPTIMAL' },
    { name: 'react-dom', hostVer: '18.3.1', remoteVer: '18.3.1', isSingleton: true, status: 'OPTIMAL' },
    { name: 'date-fns', hostVer: '3.6.0', remoteVer: '2.30.0', isSingleton: false, status: 'FALLBACK_LOADED' }
  ]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">فاحص الحزم المشتركة (Federated Dep Auditor)</h3>
          <p className="text-xs text-slate-400">مراقبة تفعيل الـ Singleton ومطابقة قيود SemVer للحزم المشتركة</p>
        </div>
        <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
          Singleton Guard
        </span>
      </div>

      <div className="space-y-3 mb-6">
        {dependencies.map((dep) => (
          <div key={dep.name} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
            <div className="flex justify-between items-center mb-1">
              <span className="font-mono font-bold text-slate-200 text-sm">{dep.name}</span>
              <span className={\`text-[10px] font-bold px-2 py-0.5 rounded font-mono \${
                dep.status === 'OPTIMAL' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
              }\`}>
                {dep.status === 'OPTIMAL' ? 'نسخة موحدة (Shared)' : 'نسخة بديلة (Fallback)'}
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              Host: {dep.hostVer} | Remote: {dep.remoteVer} | Singleton: {String(dep.isSingleton)}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-200">آلية عمل Singleton:</strong> عند تفعيل خيار <code className="text-indigo-300">singleton: true</code>، يبحث المتصفح عن أعلى نسخة متوافقة تم تنزيلها أولاً ويشاركها مع باقي التطبيقات تلقائياً دون إعادة تحميلها.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية ضبط ومراقبة الحزم المشتركة في Module Federation؛ حيث تضمن إعدادات singleton تشارك نسخة واحدة من مكتبات النواة (React وReact-DOM) عبر كامل التطبيقات، بينما تسمح للمكتبات المساعدة الأخرى بتحميل نسخ بديلة (Fallbacks) بأمان إذا تباينت إصداراتها الجذرية.",
      commonMistakes: [
        {
          mistake: "مشاركة جميع حزم المشروع دون استثناء داخل مصفوفة shared.",
          why: "مشاركة عشرات الحزم غير الحساسة يربك عملية التفاوض بين التطبيقات (Negotiation Overhead) وقد يؤدي إلى تنزيل حزم زائدة لا يحتاجها التطبيق المصغر.",
          fix: "شارك فقط المكتبات المشتركة الكبرى الحساسة: react، react-dom، ومكتبة نظام التصميم المشتركة."
        },
        {
          mistake: "إهمال تحديد requiredVersion في حقل التشارك.",
          why: "إذا حاول تطبيق مصغر استهلاك نسخة قديمة جداً لا تحتوي على الميزات المطلوبة، ستحدث أخطاء انهيار غير متوقعة أثناء التشغيل.",
          fix: "حدد دائماً requiredVersion: dependencies['react'] لضمان التوافق الدلالي التام."
        }
      ],
      bestPractices: [
        "فعّل دائماً singleton: true لمكتبات الحالة والسياق (Context & State) لمنع انقسام شجرة البيانات.",
        "استخدم strictVersion: false في بيئات الإنتاج للسماح بتشغيل التطبيقات حتى لو وجد اختلاف طفيف في رقم الـ Patch.",
        "راقب أحجام حزم الشبكة في نافذة Network بأدوات المطورين للتأكد من تنزيل react.js مرة واحدة فقط.",
        "وحّد إصدارات الحزم المشتركة عبر الـ Monorepo لتفادي تنزيل نسخ بديلة قدر الإمكان."
      ],
      visualInfographic: {
        title: "آلية تفاوض الحزم المشتركة (Shared Dependencies Negotiation)",
        description: "كيف يختار المتصفح نسخة الحزمة الموحدة بين التطبيقات",
        visualSteps: [
          "طلب التطبيق المضيف للحزم 📄 (المضيف يطلب react@^18.3.0 كـ Singleton)",
          "تحميل التطبيق البعيد 🌐 (الريموت يطلب نفس الحزمة المتوافقة)",
          "التفاوض اللحظي في المتصفح ⚖️ (Module Federation يفحص النسخة في الذاكرة)",
          "إعادة استخدام النسخة المحملة ⚡ (تجاوز تنزيل الحزمة واستخدام النسخة الجاهزة)",
          "أقصى توفير في استهلاك الشبكة 🚀 (0ms زمن تحميل و0 بايت إضافي)"
        ]
      }
    },
    {
      id: "30.4.h",
      title: "استراتيجيات النشر المستقل للتطبيقات المصغرة (Independent Deployments)",
      englishTerm: {
        term: "Independent Deployment Strategies",
        pronunciation: "إندبندنت ديبلويمينت ستراتيجيز",
        meaning: "استراتيجيات النشر المستقل للتطبيقات المصغرة دون إعادة بناء المضيف"
      },
      description: "النشر المستقل (Independent Deployment) هو الهدف الأسمى والغاية الكبرى التي تبرر كل الجهد المبذول في معمارية الواجهات المصغرة. يعني ذلك ببساطة: قدرة أي فريق هندسي على بناء، واختبار، ونشر تطبيقه المصغر إلى بيئة الإنتاج السحابية (CDN / S3 / Vercel) في أي وقت وبشكل منفصل تماماً، دون الحاجة للتنسيق مع أي فريق آخر، ودون الحاجة لإعادة بناء أو إعادة تشغيل التطبيق المضيف (Host App). يتطلب تحقيق هذا النشر المستقل بنية تحتية تعتمد على: 1) النشر الموجه بروابط ثابتة لملفات الفهرس remoteEntry.js مع كاش صارم للروابط الفرعية ذات التجزئة؛ 2) استخدام نظام إدارة التكوين الديناميكي (Dynamic Remotes Manifest) لتوجيه المضيف لعناوين التطبيقات المصغرة الحية في وقت التشغيل.",
      realWorldAnalogy: "يشبه النشر المستقل للتطبيقات المصغرة إرسال التحديثات لركاب قطار كهربائي عبر شاشات الإعلانات التفاعلية؛ لا تحتاج لإيقاف القطار في المحطة وإنزال الركاب لإضافة إعلان جديد؛ بل يتم تحديث شاشة الإعلانات عبر شبكة الواي فاي والقطار يسير بأقصى سرعته دون أن يشعر الركاب بأي توقف.",
      whyItMatters: "يحول النشر المستقل وتيرة إطلاق الميزات في الشركات الكبرى من إطلاق شهري معقد ومحفوف بالمخاطر (Monthly Big-Bang Release) إلى عشرات عمليات الإطلاق اليومية الخفيفة والآمنة، مما يمكن الشركات من الاستجابة السريعة لطلبات العملاء ومواكبة المنافسين.",
      syntax: "# نشر التطبيق المصغر كملفات ثابتة على CDN:\naws s3 sync dist/ s3://my-company-micro-apps/checkout/ --delete",
      simpleExample: `// استعراض محاكاة ميزة استدعاء التطبيق المصغر عبر رابط CDN ديناميكي دون إعادة بناء المضيف
import React, { useState } from 'react';

export function IndependentDeployDemo() {
  const [remoteVersion, setRemoteVersion] = useState('v1.0.0');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-indigo-400">النشر المستقل (Independent Deploy)</h4>
        <div className="flex gap-1 text-[10px]">
          <button 
            onClick={() => setRemoteVersion('v1.0.0')}
            className={\`px-2 py-0.5 rounded \${remoteVersion === 'v1.0.0' ? 'bg-indigo-600 font-bold' : 'bg-slate-800'}\`}
          >
            v1.0.0
          </button>
          <button 
            onClick={() => setRemoteVersion('v2.0.0')}
            className={\`px-2 py-0.5 rounded \${remoteVersion === 'v2.0.0' ? 'bg-emerald-600 font-bold' : 'bg-slate-800'}\`}
          >
            v2.0.0 (نشر جديد)
          </button>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono">
        <span className="text-slate-400 block mb-1">رابط الحزمة البعيدة المنشورة على CDN:</span>
        <span className="text-cyan-400 break-all">
          https://cdn.company.com/checkout/{remoteVersion}/remoteEntry.js
        </span>
        <p className="text-slate-500 text-[10px] mt-2 font-sans">
          ✓ تم تحديث التطبيق المصغر فوراً للمستخدمين دون إعادة بناء التطبيق المضيف!
        </p>
      </div>
    </div>
  );
}`,
      advancedExample: `// نظام متكامل لإدارة سجل التطبيقات المصغرة الديناميكي (Dynamic Remotes Manifest Engine)
import React, { useState } from 'react';

// محاكي جدول بيان التطبيقات المصغرة الحية في وقت التشغيل (Remotes Manifest)
export function DynamicRemotesStudio() {
  const [manifest, setManifest] = useState({
    header: 'https://cdn.company.com/remotes/header/v1.4.2/remoteEntry.js',
    checkout: 'https://cdn.company.com/remotes/checkout/v2.1.0/remoteEntry.js',
    analytics: 'https://cdn.company.com/remotes/analytics/v1.0.5/remoteEntry.js'
  });

  const [deployMsg, setDeployMsg] = useState('');

  // محاكاة نشر إصدار جديد لتطبيق الدفعcheckout في السحابة
  const deployNewCheckoutVersion = () => {
    setManifest(prev => ({
      ...prev,
      checkout: 'https://cdn.company.com/remotes/checkout/v2.2.0/remoteEntry.js'
    }));
    setDeployMsg('🚀 تم نشر الإصدار v2.2.0 من تطبيق الدفع checkout بنجاح! تم تحديث سجل البيان دون المساس بالمضيف.');
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">سجل البيان الديناميكي (Dynamic Remotes Manifest)</h3>
          <p className="text-xs text-slate-400">توجيه المضيف لعناوين التطبيقات الحية في وقت التشغيل دون إعادة البناء</p>
        </div>
        <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
          Zero-Downtime
        </span>
      </div>

      <div className="space-y-2 mb-6">
        {Object.entries(manifest).map(([key, url]) => (
          <div key={key} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-slate-200 capitalize">{key} Remote App</span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">ONLINE</span>
            </div>
            <span className="font-mono text-[11px] text-slate-400 block truncate">{url}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={deployNewCheckoutVersion}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl transition shadow mb-3"
      >
        محاكاة نشر تحديث مستقل لتطبيق الدفع (Deploy Checkout)
      </button>

      {deployMsg && (
        <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
          {deployMsg}
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية تطبيق النشر المستقل باستخدام سجل البيان الديناميكي (Dynamic Remotes Manifest)؛ حيث يقرأ التطبيق المضيف ملف JSON صغير عند بدء التشغيل يحدد عناوين الـ CDN الحالية للتطبيقات المصغرة، مما يتيح لأي فريق تحديث رابط تطبيقه وإطلاقه فوراً للمستخدمين دون إعادة بناء المضيف.",
      commonMistakes: [
        {
          mistake: "وضع سياسة كاش طويلة الأجل (Long-term Caching) على ملف الفهرس remoteEntry.js في خادم الـ CDN.",
          why: "إذا تم تخزين ملف remoteEntry.js لمدة عام في كاش المتصفح، فلن يرى المستخدمون أي تحديث جديد تنشره الفرق حتى يمسحوا الكاش يدوياً.",
          fix: "اضبط دائماً Cache-Control: no-cache, no-store, must-revalidate على ملف remoteEntry.js، وضع التخزين طويل الأجل (immutable) على الحزم الفرعية ذات التجزئة فقط."
        },
        {
          mistake: "تطبيق تغييرات جذرية (Breaking Changes) في الواجهات المصدرة للمكون البعيد دون الحفاظ على التوافقية السابقة.",
          why: "تعديل أسماء الـ Props أو حذفها فجأة في التطبيق البعيد سيكسر التطبيق المضيف فور نشر التحديث المستقل.",
          fix: "حافظ دائماً على التوافقية الرجعية (Backward Compatibility) واستخدم الإصدارات الدلالية عند تحديث العقود البرمجية."
        }
      ],
      bestPractices: [
        "استخدم تقنية Canary Releases أو التفعيل التدريجي (Feature Flags) لنشر الإصدارات الجديدة من التطبيق المصغر لنسبة 5% من المستخدمين أولاً.",
        "اضبط آليات تتبع الأخطاء Sentry بمحددات واضحة لعزل أخطاء كل تطبيق مصغر وفريقه المسؤول.",
        "وفّر مسارات تراجع تلقائية فائقة السرعة (Instant Rollback) بالعودة للرابط السابق في ملف البيان الديناميكي عند حدوث أي خطأ.",
        "عزز اختبارات التكامل عبر مسارات الـ CI للتأكد من توافق التطبيق المصغر مع المضيف قبل السماح بالنشر."
      ],
      visualInfographic: {
        title: "دورة النشر المستقل للواجهات المصغرة (Independent Deploy Flow)",
        description: "كيف يتم تحديث التطبيق المصغر في ثوانٍ دون لمس التطبيق المضيف",
        visualSteps: [
          "تعديل كود التطبيق المصغر ✍️ (فريق المدفوعات ينهي ميزة جديدة)",
          "البناء والاختبار المنعزل 🧪 (GitHub Actions يختبر التطبيق المصغر وحده)",
          "الرفع إلى شبكة الـ CDN 🌐 (رفع الحزم وملف remoteEntry.js للإنتاج)",
          "تحديث سجل البيان 📝 (تحديث رابط الإصدار في Dynamic Manifest JSON)",
          "التحديث اللحظي للزوار 🚀 (المستخدمون يستقبلون الميزة الجديدة بزمن 0ms توقف)"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-30-4-1",
      question: "ما هي الميزة الثورية التي تقدمها تقنية Module Federation مقارنة بأساليب دمج Micro Frontends السابقة؟",
      options: [
        "تحويل كود JavaScript إلى كود C++ بسرعة البرق.",
        "إمكانية استيراد المكونات البعيدة ديناميكياً عبر الشبكة في وقت التشغيل مع المشاركة التلقائية للمكتبات الكبرى (مثل React) في الذاكرة ومنع تكرار تنزيلها.",
        "إلغاء الحاجة لاستخدام المتصفحات لتصفح الإنترنت.",
        "جعل الموقع مجانياً بدون دفع فواتير الاستضافة."
      ],
      correctAnswer: 1,
      explanation: "تتيح Module Federation استيراد المكونات عبر الشبكة في وقت التشغيل، وتتفرد بميزة التفاوض ومشاركة الاعتماديات (Shared Dependencies) مثل React، مما يمنع تكرار تنزيل الحزم ويوفر مساحات الشبكة."
    },
    {
      id: "quiz-30-4-2",
      question: "لماذا يُعد خيار { singleton: true } إلزامياً لمكتبتي react و react-dom في إعدادات Module Federation؟",
      options: [
        "لأن npm لا تسمح بوجود أكثر من ملف واحد في مجلد المشروع.",
        "لضمان تنزيل نسخة واحدة فقط من React ومشاركتها في الذاكرة عبر كافة التطبيقات المصغرة، مما يمنع أخطاء انهيار الـ Hooks والسياقات (Invalid Hook Call).",
        "لتحويل التطبيق إلى تطبيق للهواتف الذكية تلقائياً.",
        "لتقليل سطوع شاشة الحاسوب أثناء الليل."
      ],
      correctAnswer: 1,
      explanation: "يضمن خيار singleton: true استخدام نسخة واحدة مشتركة من React في كامل الصفحة، مما يمنع تعارض وتعدد نسخ React الذي يؤدي لانهيار الخطافات وسياقات التطبيق."
    },
    {
      id: "quiz-30-4-3",
      question: "ما هي سياسة التخزين المؤقت (Cache-Control) الصحيحة لملف الفهرس remoteEntry.js لضمان نجاح النشر المستقل؟",
      options: [
        "تخزين الملف لمدة 10 سنوات بدون تحديث نهائياً.",
        "ضبط Cache-Control: no-cache, no-store لضمان جلب أحدث عنوان للحزم المنشورة دائماً دون أن يعلق المتصفح في كاش قديم.",
        "حذف الملف من الخادم بعد أول زيارة للمستخدم.",
        "تشفير الملف بكلمة مرور لا يعرفها إلا المطور."
      ],
      correctAnswer: 1,
      explanation: "يجب ألا يتم تخزين ملف remoteEntry.js في كاش طويل الأجل (no-cache) لضمان أن المتصفح يقرأ أحدث مسارات الحزم فور نشر أي تحديث جديد من قِبل الفريق المستقل."
    }
  ],
  practicalExercise: {
    id: "exercise-30-4",
    title: "تمرين تطبيقي: بناء ناقل أحداث خفيف (Micro Event Bus) وتنسيق التوجيه بين تطبيق مضيف وتطبيق بعيد",
    scenario: "أنت تقود البنية التحتية لمعمارية Micro Frontends في شركتك؛ المطلوب منك كتابة ناقل أحداث خفيف EventBus يربط بين تطبيق المتجر وتطبيق السلة المصغر، وتجهيز مكون React يستمع لحدث 'ADD_TO_CART' ويحدث العداد فوراً مع الحفاظ على فك الارتباط المعماري التام.",
    tasks: [
      "إنشاء كائن EventBus يحتوي على دالتي emit و subscribe تعتمدان على CustomEvent.",
      "بناء مكون RemoteCartIndicator يستمع للحدث ويحدث عداد السلة الداخلي.",
      "بناء زر في التطبيق المضيف يطلق الحدث بحمولة تحتوي على معرف المنتج وسعره.",
      "التأكد من تنظيف المستمعين لمنع تسريب الذاكرة."
    ],
    hints: [
      "استخدم window.dispatchEvent مع CustomEvent لإرسال البيانات.",
      "في دالة subscribe، أرجع دالة إلغاء الاشتراك removeEventListener.",
      "في المكون، استخدم useEffect لربط الاشتراك وإلغائه."
    ],
    solution: `// الحل النموذجي للتمرين التطبيقي: ناقل أحداث معماري متكامل
import React, { useState, useEffect } from 'react';

// ==========================================
// 1. ناقل الأحداث الخفيف المحايد (Micro Event Bus)
// ==========================================
export const MicroEventBus = {
  // دالة بث الحدث
  emit(eventName, detail) {
    const event = new CustomEvent(\`micro:\${eventName}\`, { detail });
    window.dispatchEvent(event);
  },
  // دالة الاشتراك في الحدث مع تنظيف تلقائي
  subscribe(eventName, callback) {
    const handler = (e) => callback(e.detail);
    window.addEventListener(\`micro:\${eventName}\`, handler);
    return () => window.removeEventListener(\`micro:\${eventName}\`, handler);
  }
};

// ==========================================
// 2. تطبيق السلة المصغر المستمع (Remote Cart Indicator)
// ==========================================
export function RemoteCartIndicator() {
  const [count, setCount] = useState(0);
  const [lastItem, setLastItem] = useState('');

  useEffect(() => {
    // الاشتراك النظيف في ناقل الأحداث
    const unsubscribe = MicroEventBus.subscribe('ADD_TO_CART', (data) => {
      setCount(c => c + 1);
      setLastItem(data.title);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-xs text-white">
      <div className="flex justify-between items-center mb-1">
        <span className="font-bold text-emerald-300">🛒 سلة المشتريات (Remote App)</span>
        <span className="font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
          {count} عناصر
        </span>
      </div>
      {lastItem && (
        <span className="text-[10px] text-slate-400 block mt-1">
          آخر إضافة: {lastItem}
        </span>
      )}
    </div>
  );
}

// ==========================================
// 3. التطبيق المضيف الباث للحدث (Host Product Card)
// ==========================================
export function HostProductView() {
  const handleAddToCart = () => {
    // إرسال الحدث عبر الناقل دون أي معرفة بتفاصيل تطبيق السلة
    MicroEventBus.emit('ADD_TO_CART', {
      id: 104,
      title: 'سماعات احترافية عازلة للضوضاء',
      price: 249
    });
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm space-y-3">
      <h4 className="font-bold text-xs text-indigo-400">تطبيق المضيف (Host App)</h4>
      <RemoteCartIndicator />
      <button 
        onClick={handleAddToCart}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-xs font-bold transition shadow"
      >
        شراء السماعة الاحترافية ($249)
      </button>
    </div>
  );
}`
  },
  visualInfographic: {
    title: "خارطة طريق الواجهات المصغرة (Micro Frontends Roadmap)",
    description: "الأركان الأربعة لبناء وتشغيل الواجهات المصغرة بنجاح",
    visualSteps: [
      "المفهوم والقرار الهندسي 🏬 (تقييم الجدوى وفك الارتباط للفرق الكبيرة)",
      "تقنية Module Federation ⚡ (تحميل الكود في وقت التشغيل ومشاركة React)",
      "التوجيه وناقل الأحداث 🔀 (Cross-App Routing & Custom Event Bus)",
      "النشر المستقل والـ CDN 🚀 (نشر فوري دون إعادة بناء المضيف عبر Manifest)"
    ]
  }
};

