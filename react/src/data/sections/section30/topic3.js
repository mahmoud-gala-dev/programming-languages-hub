// e:\KD\lang\react\src\data\sections\section30\topic3.js
// الموضوع الثالث من القسم 30: إدارة المستودعات المتعددة Monorepo (Monorepo Architecture, Turborepo & pnpm Workspaces)

export const topic3 = {
  id: "topic-30-3",
  title: "إدارة المستودعات المتعددة (Monorepo Architecture & Turborepo)",
  description: "دليل معماري تطبيقي شامل لإدارة وتوسيع مستودعات الكود المتعددة (Monorepo Architecture): المقارنة الاستراتيجية بين Monorepo وPolyrepo، إعداد بيئات العمل الحديثة عبر pnpm وnpm Workspaces، تسريع البناء عبر محرك Turborepo، مشاركة حزم المكونات والأدوات بين تطبيقات متعددة (Web, Docs, Admin, Mobile)، إدارة التبعيات المشتركة، تشغيل المهام بالتوازي، تقنيات التخزين المؤقت الحسابي للبناء (Build Caching & Remote Cache)، وهندسة مسارات CI/CD الذكية للمستودعات الضخمة.",
  subtopics: [
    {
      id: "30.3.a",
      title: "مفهوم Monorepo مقابل Polyrepo",
      englishTerm: {
        term: "Monorepo vs Polyrepo Architecture",
        pronunciation: "مونوريبو فيرسس بوليريبو أركيتكشر",
        meaning: "مفهوم المستودع الواحد الشامل مقارنة بنهج المستودعات المتفرقة"
      },
      description: "المستودع الموحد (Monorepo، اختصاراً لـ Monolithic Repository) هو استراتيجية معمارية لإدارة الكود البرمجي يتم فيها جمع عدة مشاريع وتطبيقات ومكتبات برمجية مختلفة تابعة للشركة داخل مستودع Git واحد مركزي، مع الحفاظ على استقلالية كل حزمة ونظافة حدودها المعمارية. في المقابل، يمثل نهج المستودعات المتفرقة (Polyrepo أو Multi-repo) النموذج التقليدي حيث يمتلك كل تطبيق (مثل: موقع العملاء، لوحة تحكم الإدارة، ومكتبة نظام التصميم) مستودع Git خاص به ومنفصل تماماً. تتيح معمارية Monorepo الحديثة للشركات الكبرى (مثل Google وMeta وUber) توحيد أدوات التطوير، ومشاركة الأكواد بسهولة فائقة، وتعديل الكود عبر حزم متعددة في عملية اعتماد واحدة (Atomic Commits).",
      realWorldAnalogy: "يشبه نهج Polyrepo قيام عائلة بامتلاك 5 شقق صغيرة منفصلة في أحياء متباعدة؛ إذا أرادوا استعارة كتاب أو وعاء طبخ، يجب السفر من حي لآخر؛ بينما يشبه Monorepo العيش في قصر عائلي واحد كبير؛ كل شخص لديه غرفته وجناحه المستقل والخاص، ولكنهم يشتركون في المطبخ والمكتبة والمستودع المركزي بسلاسة وبلا أي عناء.",
      whyItMatters: "في بيئة Polyrepo، إذا قمت بتحديث زر في مكتبة المكونات، يجب عليك: عمل commit في مستودع المكتبة، ورفع رقم الإصدار، ونشر الحزمة إلى npm، ثم فتح مستودع تطبيق الويب، وتشغيل npm update، ثم فتح مستودع لوحة الإدارة وتكرار نفس العملية! في Monorepo، تستهلك التطبيقات الحزمة محلياً ومباشرة، ويتم تحديث الكل واختباره في Pull Request واحد وبأمان مطلق.",
      syntax: "// الهيكل الشجري الكلاسيكي لـ Monorepo:\n// my-org/\n// ├── apps/\n// │   ├── web/ (تطبيق الويب الرئيسي - Next.js)\n// │   └── admin/ (لوحة تحكم الإدارة - Vite)\n// ├── packages/\n// │   ├── ui/ (نظام التصميم والمكونات المشتركة)\n// │   ├── config/ (إعدادات ESLint وTypeScript المشتركة)\n// │   └── utils/ (الدوال المساعدة والنماذج)",
      simpleExample: `// استعراض هيكل ومقارنة مفهوم Monorepo و Polyrepo
import React, { useState } from 'react';

// مكون بسيط يوضح المقارنة بين النهجين
export function MonorepoComparisonCard() {
  const [approach, setApproach] = useState('monorepo');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-indigo-400">مقارنة إدارة المستودعات</h4>
        <div className="flex gap-1 text-[10px] font-mono">
          <button 
            onClick={() => setApproach('monorepo')}
            className={\`px-2 py-0.5 rounded \${approach === 'monorepo' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-400'}\`}
          >
            Monorepo
          </button>
          <button 
            onClick={() => setApproach('polyrepo')}
            className={\`px-2 py-0.5 rounded \${approach === 'polyrepo' ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-800 text-slate-400'}\`}
          >
            Polyrepo
          </button>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        {approach === 'monorepo' ? (
          <div>
            <span className="font-bold text-emerald-400 block mb-1">✓ مستودع Git موحد:</span>
            <p className="text-slate-400 leading-relaxed">
              جميع التطبيقات (Web, Docs, UI) في مكان واحد. تعديل واحد يحدث التغيير في كل المشاريع فوراً دون انتظار نشر الحزم على npm.
            </p>
          </div>
        ) : (
          <div>
            <span className="font-bold text-amber-400 block mb-1">⚠️ مستودعات مستقلة متفرقة:</span>
            <p className="text-slate-400 leading-relaxed">
              كل مشروع في مستودع مستقل. مشاركة الكود تتطلب نشر الحزم على npm وتحديث التبعيات يدوياً في كل مستودع منفصل.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو تفاعلي يستعرض شجرة ملفات Monorepo الحقيقية وتدفق الاعتماديات المحلية (Workspace Dependency Graph)
import React, { useState } from 'react';

// بيانات شجرة تطبيقات وحزم الـ Monorepo
const WORKSPACE_PACKAGES = [
  {
    name: 'apps/web',
    type: 'تطبيق عملاء (Next.js App Router)',
    dependsOn: ['@my-org/ui', '@my-org/utils'],
    description: 'الموقع الرئيسي للشركة ويستهلك مكتبة المكونات محلياً.'
  },
  {
    name: 'apps/admin',
    type: 'لوحة إدارة داخلية (Vite + React)',
    dependsOn: ['@my-org/ui', '@my-org/utils'],
    description: 'لوحة التحكم للموظفين وتشارك نفس نظام التصميم.'
  },
  {
    name: 'packages/ui',
    type: 'مكتبة مكونات مشتركة (Design System)',
    dependsOn: ['@my-org/tokens'],
    description: 'الأزرار وحقول الإدخال المستخدمة في جميع التطبيقات.'
  },
  {
    name: 'packages/tokens',
    type: 'رموز التصميم المركزية (Design Tokens)',
    dependsOn: [],
    description: 'الألوان والخطوط والمسافات المشتركة لنظام الشركة.'
  }
];

// مكون استعراض شجرة الـ Monorepo التفاعلية
export function MonorepoGraphStudio() {
  const [selectedPkg, setSelectedPkg] = useState(WORKSPACE_PACKAGES[0]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">معمارية المستودع الموحد (Monorepo Workspace)</h3>
          <p className="text-xs text-slate-400">تطبيقات ومكتبات متعددة تتقاسم الكود في مستودع Git مركزي واحد</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20">
          Workspaces Active
        </span>
      </div>

      {/* قائمة الحزم */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {WORKSPACE_PACKAGES.map((pkg) => (
          <div
            key={pkg.name}
            onClick={() => setSelectedPkg(pkg)}
            className={\`p-3 rounded-xl border transition cursor-pointer text-xs \${
              selectedPkg.name === pkg.name ? 'border-indigo-500 bg-indigo-950/20' : 'border-slate-800 bg-slate-950 hover:border-slate-700'
            }\`}
          >
            <span className="font-mono font-bold text-slate-200 block truncate">{pkg.name}</span>
            <span className="text-[10px] text-indigo-400 block mt-0.5">{pkg.type}</span>
          </div>
        ))}
      </div>

      {/* تفاصيل الحزمة المختارة وتدفق الاعتماديات */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
        <h4 className="text-sm font-bold text-slate-200 mb-1">{selectedPkg.name}</h4>
        <p className="text-xs text-slate-400 mb-3">{selectedPkg.description}</p>

        <span className="text-xs text-slate-500 block mb-2 font-mono">الاعتماديات المشتركة المستهلكة محلياً (Internal Dependencies):</span>
        {selectedPkg.dependsOn.length === 0 ? (
          <span className="text-xs text-slate-500 italic">لا تعتمد على أي حزم داخلية (حزمة جذرية أساسية).</span>
        ) : (
          <div className="flex flex-wrap gap-2">
            {selectedPkg.dependsOn.map((dep, idx) => (
              <span key={idx} className="text-xs font-mono bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-emerald-400 font-bold">
                🔗 {dep}: "workspace:*"
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-300">بروتوكول Workspace:</strong> يربط مدير الحزم الحزم التابعة بروابط رمزية صلبة (Symlinks)، مما يتيح لتطبيق <code className="text-indigo-300">apps/web</code> رؤية التعديل فور حفظه في <code className="text-indigo-300">packages/ui</code> دون الحاجة للبناء أو النشر.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال المعماري كيف تنظم معمارية الـ Monorepo تطبيقات متعددة (Web, Admin) ومكتبات مشتركة (UI, Tokens) في بيئة واحدة متكاملة؛ حيث تستهلك التطبيقات الحزم الداخلية مباشرة عبر بروتوكول workspace:* مما يضمن تحديثاً فورياً متزامناً لجميع المشاريع.",
      commonMistakes: [
        {
          mistake: "الخلط بين Monorepo و Monolith (التطبيق الأحادي المتضخم).",
          why: "المونوليث هو كود واحد متشابك وغير منظم؛ بينما Monorepo هو مستودع موحد يضم مشاريع وحزم مفصولة ومستقلة ومعزولة معمارياً بدقة.",
          fix: "حافظ دائماً على حدود معمارية صارمة بين الحزم داخل الـ Monorepo ولا تسمح بالتشابك غير المنظم."
        },
        {
          mistake: "إنشاء Monorepo ضخم دون استخدام أدوات تسريع متطورة مثل Turborepo أو Nx.",
          why: "بدون أدوات التسريع الذكية، ستصبح أوامر البناء والاختبار بطيئة جداً ومحبطة للمطورين مع كل تغيير صغير.",
          fix: "استخدم دائماً محرك مهام متطور مثل Turborepo لتشغيل المهام بالتوازي والتخزين المؤقت الذكي."
        }
      ],
      bestPractices: [
        "نظم المستودع إلى مجلدين رئيسيين: apps/ للتطبيقات القابلة للنشر، وpackages/ للحزم والمكتبات المشتركة.",
        "استخدم pnpm كمدير حزم أساسي لسرعته الفائقة وتوفيره لمساحات التخزين عبر الروابط الصلبة (Hard Links).",
        "احرص على ألا تعتمد الحزم المشتركة على التطبيقات أبداً (التدفق باتجاه واحد: التطبيقات تعتمد على الحزم).",
        "وحّد إصدارات الأدوات المشتركة مثل TypeScript وESLint وPrettier في جذر المستودع."
      ],
      visualInfographic: {
        title: "مقارنة معمارية Monorepo مقابل Polyrepo",
        description: "كيف تختلف إدارة الأكواد ومشاركتها بين النهجين",
        visualSteps: [
          "نهج Polyrepo 📂 (مستودعات متعددة متباعدة + إدارة نشر معقدة على npm)",
          "نهج Monorepo 🏢 (مستودع واحد يضم كافة التطبيقات والحزم المشتركة)",
          "الروابط المباشرة 🔗 (بروتوكول workspace:* لمشاركة الكود اللحظية)",
          "تعديل ذري موحد 🎯 (تعديل الحزمة والتطبيق واختبارهما في Commit واحد)",
          "أدوات بناء ذكية ⚡ (Turborepo يسرع البناء بالتوازي والكاش)"
        ]
      }
    },
    {
      id: "30.3.b",
      title: "مميزات وتحديات استخدام Monorepo",
      englishTerm: {
        term: "Benefits & Challenges of Monorepo",
        pronunciation: "بينيفيتس آند تشالينجز أوف مونوريبو",
        meaning: "المكاسب الهندسية والعقبات التشغيلية لاعتماد المستودع الموحد"
      },
      description: "يوفر الانتقال إلى معمارية Monorepo فوائد هندسية هائلة ولكنه يفرض في الوقت نفسه تحديات تنظيمية وتقنية يجب إدارتها بحكمة. من أبرز المميزات: 1) التعديلات الذرية (Atomic Refactoring): إمكانية تعديل اسم دالة أو خاصية في مكتبة المكونات وتحديث كافة الشاشات في التطبيقات التابعة في Pull Request واحد دون كسر أي نظام؛ 2) تبسيط مشاركة الكود ومنع التكرار؛ 3) توحيد التكوين وإعدادات CI/CD وجودة الكود. في المقابل، تشمل التحديات: 1) تضخم حجم مستودع Git وبطء عمليات git clone إذا لم يتم ضبطه؛ 2) تعقيد إدارة الصلاحيات ومنع المطورين من تعديل ميزات خارج نطاقهم؛ 3) الحاجة لبنية تحتية متطورة لتشغيل مسارات البناء الذكي والتخزين المؤقت.",
      realWorldAnalogy: "يشبه اعتماد Monorepo بناء شبكة قطارات فائقة السرعة تربط بين عدة مدن؛ المميزات مذهلة: سهولة التنقل الفوري ونقل البضائع والركاب في دقائق؛ ولكن التحدي يكمن في تكلفة البنية التحتية وصيانتها وحاجة الشبكة لنظام مراقبة وتحكم إلكتروني بالغ التعقيد لمنع الحوادث.",
      whyItMatters: "معرفة المزايا والتحديات تساعد القيادة الهندسية على اتخاذ القرار الصحيح في التوقيت المناسب؛ فالمشاريع الصغيرة ذات التطبيق الواحد لا تحتاج إلى تعقيد Monorepo، بينما الشركات التي تدير عدة تطبيقات ويب وهواتف تستفيد بشكل هائل من توحيد الكود وتسريع دورات التطوير.",
      syntax: "// مصفوفة القرار المعماري:\nconst useMonorepo = hasMultipleApps && sharesDesignSystem && teamSize > 3;",
      simpleExample: `// استعراض محاكاة مزايا وتحديات Monorepo في جدول مقارنة تفاعلي
import React, { useState } from 'react';

export function MonorepoTradeoffsDemo() {
  const [filter, setFilter] = useState('all');

  const points = [
    { title: 'تعديلات ذرية موحدة (Atomic Commits)', type: 'benefit', desc: 'تحديث الحزمة المشتركة وتطبيقاتها في نفس الـ PR بأمان.' },
    { title: 'مشاركة الكود اللحظية (0ms Publishing)', type: 'benefit', desc: 'لا حاجة لانتظار نشر الحزم على npm للاستهلاك المحلي.' },
    { title: 'تضخم وقت استنساخ Git (Large Clone Size)', type: 'challenge', desc: 'المستودع يحتوي على كل كود الشركة ويتطلب مساحة قرص أكبر.' },
    { title: 'تعقيد مسارات الـ CI/CD (Complex Pipelines)', type: 'challenge', desc: 'يتطلب أدوات كاش ذكية لبناء الحزم المعدلة فقط.' }
  ];

  const filtered = filter === 'all' ? points : points.filter(p => p.type === filter);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-slate-300">مزايا وتحديات Monorepo</h4>
        <div className="flex gap-1 text-[10px]">
          <button onClick={() => setFilter('all')} className={\`px-2 py-0.5 rounded \${filter === 'all' ? 'bg-indigo-600' : 'bg-slate-800'}\`}>الكل</button>
          <button onClick={() => setFilter('benefit')} className={\`px-2 py-0.5 rounded \${filter === 'benefit' ? 'bg-emerald-600' : 'bg-slate-800'}\`}>المزايا</button>
          <button onClick={() => setFilter('challenge')} className={\`px-2 py-0.5 rounded \${filter === 'challenge' ? 'bg-rose-600' : 'bg-slate-800'}\`}>التحديات</button>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        {filtered.map((item, idx) => (
          <div key={idx} className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
            <span className={\`font-bold block \${item.type === 'benefit' ? 'text-emerald-400' : 'text-rose-400'}\`}>
              {item.type === 'benefit' ? '✓ ' : '⚠️ '}{item.title}
            </span>
            <p className="text-slate-400 text-[11px] mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: `// حاسبة القرار المعماري لاعتماد Monorepo (Monorepo Readiness Score Calculator)
import React, { useState } from 'react';

// معايير تقييم جاهزية الفريق للمستودع الموحد
const READINESS_CRITERIA = [
  { id: 1, text: 'هل تمتلك الشركة أكثر من تطبيق يتقاسم نفس الهوية البصرية ونظام التصميم؟', weight: 25 },
  { id: 2, text: 'هل يعاني الفريق من تكرار نسخ ولصق الدوال والمكونات بين المشاريع؟', weight: 25 },
  { id: 3, text: 'هل يتجاوز عدد مهندسي الفريق 3 مطورين يعملون بالتوازي؟', weight: 20 },
  { id: 4, text: 'هل يعاني الفريق من بطء تحديث الحزم المشتركة وتعدد مستودعات Git؟', weight: 30 }
];

// مكون استوديو تقييم قرار Monorepo
export function MonorepoReadinessStudio() {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const toggleCheck = (id) => {
    setSelectedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // حساب النتيجة الإجمالية
  const totalScore = READINESS_CRITERIA.reduce((sum, item) => {
    return sum + (selectedAnswers[item.id] ? item.weight : 0);
  }, 0);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">مؤشر الجاهزية لاعتماد Monorepo</h3>
          <p className="text-xs text-slate-400">تقييم الاحتياج المعماري الفعلي للتحول للمستودع الموحد</p>
        </div>
        <div className="text-right">
          <span className={\`text-2xl font-black font-mono \${
            totalScore >= 70 ? 'text-emerald-400' : totalScore >= 40 ? 'text-amber-400' : 'text-slate-500'
          }\`}>
            {totalScore}%
          </span>
          <span className="block text-[10px] text-slate-400 font-semibold">معدل الاحتياج</span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {READINESS_CRITERIA.map((q) => (
          <div 
            key={q.id}
            onClick={() => toggleCheck(q.id)}
            className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-3 cursor-pointer hover:bg-slate-900/50 transition text-xs"
          >
            <input 
              type="checkbox"
              checked={Boolean(selectedAnswers[q.id])}
              onChange={() => {}}
              className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
            />
            <span className="text-slate-300 flex-1 leading-relaxed">{q.text}</span>
            <span className="text-[10px] font-mono text-slate-500 font-bold">+{q.weight}%</span>
          </div>
        ))}
      </div>

      {/* القرار المعماري النهائي */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        {totalScore >= 70 ? (
          <div className="text-emerald-400">
            🚀 <strong>توصية قاطعة:</strong> مشروعك وفريقك مؤهلان تماماً لاعتماد Monorepo؛ سيحقق الانتقال توفيراً هائلاً في الوقت ويوحد نظام التصميم.
          </div>
        ) : totalScore >= 40 ? (
          <div className="text-amber-400">
            ⚠️ <strong>توصية متوازنة:</strong> يمكنك البدء بـ pnpm Workspaces خفيف، ولكن احذر من التعقيد المبكر إذا كان المشروع ينمو ببطء.
          </div>
        ) : (
          <div className="text-slate-400">
            🛑 <strong>توصية بالتأجيل:</strong> مشروعك في مرحلة مبكرة؛ احتفظ بمستودع بسيط مفرد (Single Repo) وتجنب تكلفة صيانة Monorepo حالياً.
          </div>
        )}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا التقييم المعماري كيفية اتخاذ قرار التحول إلى Monorepo بناءً على معايير واقعية (حجم الفريق، مشاركة نظام التصميم، وتعدد التطبيقات) بدلاً من الانجراف وراء الصيحات التقنية دون حاجة فعلية.",
      commonMistakes: [
        {
          mistake: "التحول إلى Monorepo لمشروع ناشئ بسيط يمتلك تطبيقاً واحداً ومطوراً واحداً فقط.",
          why: "هذا يضيف طبقات تعقيد في ملفات التكوين والـ CI دون أي عائد وظيفي أو مالي ملموس.",
          fix: "ابدأ دائماً بمستودع عادي بسيط، وعندما تنشئ تطبيقاً ثانياً يحتاج لمشاركة نفس المكونات، انتقل حينها إلى Monorepo."
        },
        {
          mistake: "تجاهل استخدام ملفات CODEOWNERS لتنظيم صلاحيات المراجعة والدمج في المستودع الموحد.",
          why: "بدون CODEOWNERS، قد يقوم مطور في فريق واجهة الإدارة بدمج تعديل يكسر ميزة في تطبيق الدفع دون علم الفريق المسؤول.",
          fix: "استخدم ملف .github/CODEOWNERS لفرض موافقة أصحاب الحزمة المحددة قبل السماح بدمج أي تعديل."
        }
      ],
      bestPractices: [
        "استخدم ميزة Git Sparse-Checkout لتسريع استنساخ المستودع للمطورين الذين يعملون على تطبيق واحد فقط.",
        "قسّم الحزم المشتركة إلى حزم صغيرة ومتخصصة بدلاً من حزمة مشتركة واحدة عملاقة تحوي كل شيء.",
        "اضبط قواعد صارمة في ESLint لمنع الاستيراد العشوائي بين التطبيقات.",
        "استخدم أدوات التخزين المؤقت السحابي (Remote Caching) لتسريع مسارات البناء في الـ CI بنسبة 80%."
      ],
      visualInfographic: {
        title: "مصفوفة قرار اعتماد معمارية Monorepo",
        description: "متى يكون المستودع الموحد الخيار الهندسي الأمثل للشركة",
        visualSteps: [
          "تقييم تعدد التطبيقات 📱 (وجود أكثر من تطبيق ويب أو هاتف للشركة)",
          "فحص مشاركة المكونات 🎨 (الرغبة في توحيد نظام التصميم والأدوات)",
          "تطبيق pnpm Workspaces 📦 (إدارة الحزم المحلية بروابط صلبة خفيفة)",
          "دمج محرك Turborepo ⚡ (تشغيل المهام بالتوازي مع التخزين المؤقت)",
          "حماية الشجرة بـ CODEOWNERS 🛡️ (تنظيم المراجعات وضمان استقرار الحزم)"
        ]
      }
    },
    {
      id: "30.3.c",
      title: "استخدام npm Workspaces و pnpm Workspaces",
      englishTerm: {
        term: "Workspaces Management (npm & pnpm)",
        pronunciation: "ورك سبيسز مانيجمنت (إن بي إم آند بي إن بي إم)",
        meaning: "إدارة مساحات العمل والربط الرمزي بين الحزم المحلية"
      },
      description: "مساحات العمل (Workspaces) هي ميزة مدمجة وأساسية في مديري حزم JavaScript الحديثة (npm وpnpm وyarn) تتيح إدارة مشاريع وحزم متعددة داخل مستودع واحد بجذر موحد. تقوم ميزة Workspaces بوظيفتين حاسمتين: 1) تثبيت الحزم المشتركة مرة واحدة في جذر المستودع وتفادي تكرار تنزيلها (Hoisting)؛ 2) إنشاء روابط رمزية صلبة (Symlinks) تلقائية بين الحزم الداخلية، مما يتيح لتطبيق معين (مثل apps/web) استيراد مكتبة داخلية (مثل packages/ui) كأنها حزمة مثبتة من npm دون الحاجة لنشرها. يعتبر مدير الحزم pnpm هو المعيار الذهبي في عالم Monorepo بفضل بنية التخزين الموجه بالمحتوى (Content-Addressable Store) التي توفر مساحات القرص وتمنع الأخطاء الشبحية (Phantom Dependencies).",
      realWorldAnalogy: "يشبه نظام Workspaces إدارة المكاتب المشتركة (Co-working Space)؛ حيث تشترك كافة الشركات في طابعة مركزية عملاقة واحدة، وثلاجة واحدة، واتصال إنترنت سريع في البهو الرئيسي (node_modules في الجذر)؛ ولكن لكل شركة مكتبها وغرفتها الخاصة المغلقة بأمان.",
      whyItMatters: "يوفر استخدام pnpm Workspaces سرعة تثبيت خارقة أسرع بنسبة تصل إلى 300% مقارنة بـ npm العادي، ويوفر عشرات الجيجابايت من مساحة القرص الصلب؛ حيث تخزن الحزم المتطابقة في مكان واحد على جهاز المطور ويتم ربطها بروابط صلبة في كافة المشاريع.",
      syntax: "# ملف تكوين مساحات العمل في pnpm (pnpm-workspace.yaml):\npackages:\n  - 'apps/*'\n  - 'packages/*'\n\n# تشغيل أمر في حزمة محددة فقط:\npnpm --filter @my-org/web dev",
      simpleExample: `// استعراض محتويات ملف pnpm-workspace.yaml لتهيئة مساحات العمل
# pnpm-workspace.yaml
packages:
  # كافة التطبيقات القابلة للتشغيل في مجلد apps
  - 'apps/*'
  # كافة المكتبات والحزم المشتركة في مجلد packages
  - 'packages/*'`,
      advancedExample: `// استعراض كيفية ربط حزمة داخلية في ملف package.json لتطبيق ويب باستخدام بروتوكول workspace:*
// apps/web/package.json
{
  "name": "@my-org/web-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    // استهلاك حزمة المكونات الداخلية المحلية مباشرة وبلا نشر على npm!
    "@my-org/ui": "workspace:*",
    // استهلاك حزمة الأدوات المساعدة المشتركة
    "@my-org/utils": "workspace:*"
  },
  "devDependencies": {
    // استهلاك إعدادات TypeScript و ESLint المشتركة
    "@my-org/tsconfig": "workspace:*",
    "@my-org/eslint-config": "workspace:*"
  }
}`,
      outputExplanation: "يوضح هذا الملف كيف يمكن لتطبيق apps/web استهلاك حزم النظام المشتركة (@my-org/ui و @my-org/utils) كاعتماديات حقيقية باستخدام بروتوكول workspace:*؛ حيث يوجه مدير الحزم pnpm الاستيراد إلى المجلد المحلي مباشرة بروابط رمزية سريعة.",
      commonMistakes: [
        {
          mistake: "استخدام npm العادي بدلاً من pnpm في مستودعات Monorepo الكبيرة.",
          why: "آلية الرفع (Hoisting) في npm العادي تسمح للمشاريع باستيراد حزم لم تسجلها في ملف package.json الخاص بها (Phantom Dependencies)، مما يؤدي إلى انهيار غير مفهوم عند بناء التطبيق في خوادم الإنتاج.",
          fix: "اعتمد pnpm حصراً؛ فبنيته الصارمة وعزل الاعتماديات يمنعان أي حزمة من الوصول إلا للاعتماديات المسجلة صراحة في ملفها الخاص."
        },
        {
          mistake: "تثبيت نفس الحزمة بإصدارات مختلفة تماماً ومتناقضة داخل كل تطبيق فرعي.",
          why: "هذا يستهلك الذاكرة ويزيد مساحة القرص ويعقد استكشاف أخطاء التوافقية بين الحزم.",
          fix: "استخدم ميزة pnpm.overrides أو وحّد أرقام الإصدارات في الحزم المشتركة."
        }
      ],
      bestPractices: [
        "استخدم دائماً صيغة workspace:* للإشارة إلى أحدث نسخة من الحزم الداخلية في بيئة التطوير.",
        "شغّل الأوامر المخصصة بحكمة عبر الفلترة: pnpm --filter <pkg-name> <command> دون الحاجة للتنقل بين المجلدات في الطرفية.",
        "اجعل ملفات package.json للتطبيقات الداخلية تحمل الخاصية 'private': true لمنع نشرها بالخطأ إلى npm.",
        "ضع ملف .npmrc في جذر المستودع واضبط خيار auto-install-peers=true لتبسيط التعامل مع الاعتماديات النظيرة."
      ],
      visualInfographic: {
        title: "آلية عمل مساحات العمل (pnpm Workspaces Architecture)",
        description: "كيف يربط مدير الحزم التطبيقات والمكتبات بروابط صلبة",
        visualSteps: [
          "تحديد مسارات المساحات 📄 (pnpm-workspace.yaml يحدد apps/* وpackages/*)",
          "تنزيل الحزم في المخزن الموحد 📦 (Content-Addressable Global Store)",
          "إنشاء الروابط الصلبة Symlinks 🔗 (ربط الحزم الداخلية بروتوكول workspace:*)",
          "عزل الاعتماديات الصارم 🛡️ (منع الحزم الشبحية Phantom Dependencies)",
          "سرعة تنفيذ مذهلة ⚡ (تثبيت ومزامنة لحظية عبر كامل المستودع)"
        ]
      }
    },
    {
      id: "30.3.d",
      title: "التعرف على أدوات Monorepo الحديثة (Turborepo & Nx)",
      englishTerm: {
        term: "Turborepo & Monorepo Build Tools",
        pronunciation: "تيربوريبو آند مونوريبو بيلد تولز",
        meaning: "أدوات تنسيق وتسريع مهام البناء والتخزين المؤقت الذكي"
      },
      description: "بينما يتولى مدير الحزم (مثل pnpm) مهمة تنزيل الاعتماديات وربط مساحات العمل، تظهر مشكلة كبرى عند نمو المشروع: كيف نشغل أوامر البناء والاختبار والفحص (Linting) لعشرات المشاريع بكفاءة دون إهدار ساعات من الانتظار؟ هنا يأتي دور أدوات تنسيق المهام الفائقة السرعة وأشهرها Turborepo (من تطوير شركة Vercel ومبنية بلغة Rust). يقوم Turborepo بتحليل شجرة الاعتماديات بين الحزم، إنشاء رسم بياني دقيق للمهام (Task Dependency Graph - DAG)، تشغيل المهام غير المترابطة بالتوازي على أنوية المعالج المتعددة، وتطبيق نظام تخزين مؤقت حاسوبي ذكي (Build Caching)؛ فإذا لم يتغير كود حزمة معينة، يعيد Turborepo نتائج البناء السابقة في أجزاء من الثانية دون إعادة تشغيله!",
      realWorldAnalogy: "يشبه Turborepo مايسترو الأوركسترا الموسيقية أو برج مراقبة الطيران في المطارات العملاقة؛ لا يترك كل طائرة تقلع عشوائياً، بل ينظم حركة المدرجات بدقة: الطائرات المتجهة لمسارات مختلفة تقلع بالتوازي معاً، والطائرات المرتبطة ببعضها تنتظر بالترتيب الدقيق، مما يضمن أقصى سرعة وانسيابية مع صفر حوادث.",
      whyItMatters: "يحول Turborepo زمن بناء المشروع في خوادم CI/CD من 25 دقيقة من الانتظار الممل إلى دقيقتين أو حتى 15 ثانية فقط بفضل التخزين المؤقت! هذا يعني توفيراً هائلاً في تكاليف خوادم البناء وتسريعاً كبيراً لإنتاجية المطورين وسرعة إطلاق التحديثات.",
      syntax: "// ملف تكوين مهام Turborepo في جذر المشروع (turbo.json):\n{\n  \"$schema\": \"https://turbo.build/schema.json\",\n  \"tasks\": {\n    \"build\": {\n      \"dependsOn\": [\"^build\"],\n      \"outputs\": [\"dist/**\", \".next/**\"]\n    },\n    \"lint\": {}\n  }\n}",
      simpleExample: `// استعراض محتويات ملف turbo.json الأساسي لضبط مهام المستودع الموحد
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    // مهمة البناء: تعتمد على بناء الحزم الداخلية التابعة أولاً (^build)
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
    },
    // مهمة الفحص الثابت: تعمل بالتوازي ولا تحتاج لمخرجات ملفات
    "lint": {
      "dependsOn": []
    },
    // خادم التطوير الحي: مهمة دائمة ومستمرة
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}`,
      advancedExample: `// استوديو محاكاة محرك Turborepo ومخطط تدفق المهام بالتوازي (DAG Pipeline Explorer)
import React, { useState } from 'react';

// محاكاة مهام الـ Monorepo وحالتها في كاش Turborepo
export function TurborepoPipelineStudio() {
  const [taskLogs, setTaskLogs] = useState([]);
  const [running, setRunning] = useState(false);

  // تشغيل محاكاة أمر turbo run build
  const runTurboBuild = () => {
    setRunning(true);
    setTaskLogs([]);

    const steps = [
      { text: '• بناء packages/tokens (مهمة أساسية)...', cache: false, delay: 400 },
      { text: '• بناء packages/ui (تعتمد على tokens)...', cache: false, delay: 900 },
      { text: '⚡ apps/admin: تم القراءة من التخزين المؤقت [FULL TURBO] في 8ms!', cache: true, delay: 1200 },
      { text: '• بناء apps/web بالتوازي على النواة 3...', cache: false, delay: 1800 },
      { text: '🎉 اكتمل بناء 4 حزم بنجاح خلال 1.8 ثانية بدلاً من 14 ثانية!', cache: true, delay: 2200 }
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setTaskLogs((prev) => [...prev, step]);
        if (step.text.includes('اكتمل')) setRunning(false);
      }, step.delay);
    });
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">محرك مهام Turborepo (Pipeline Runner)</h3>
          <p className="text-xs text-slate-400">تحليل شجرة الاعتماديات وتوليد المهام بالتوازي مع التخزين المؤقت الذكي</p>
        </div>
        <span className="text-xs font-mono bg-pink-500/10 text-pink-400 px-2.5 py-1 rounded-full border border-pink-500/20">
          Rust Powered
        </span>
      </div>

      <div className="mb-4">
        <button 
          onClick={runTurboBuild}
          disabled={running}
          className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 hover:opacity-90 font-bold text-xs rounded-xl transition shadow-lg disabled:opacity-50"
        >
          {running ? 'جاري التنفيذ بالتوازي...' : 'تشغيل turbo run build'}
        </button>
      </div>

      {/* لوحة مخرجات الطرفية لمحاكاة توربو */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs min-h-[160px] space-y-2">
        {taskLogs.length === 0 ? (
          <span className="text-slate-600">اضغط الزر أعلاه لمحاكاة مسار البناء المتوازي والتخزين المؤقت...</span>
        ) : (
          taskLogs.map((log, idx) => (
            <div key={idx} className={log.cache ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
              {log.text}
            </div>
          ))
        )}
      </div>

      <div className="mt-4 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
        ⚡ <strong className="text-slate-300">مفهوم Full Turbo:</strong> عندما لا يتغير كود المشروع أو اعتمادياته، يتخطى Turborepo تنفيذ السكربت بالكامل ويسترجع ملفات البناء من الكاش فوراً.
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية عمل محرك Turborepo؛ حيث يعتمد على ملف turbo.json لتنسيق تبعيات المهام (^build تعني بناء الحزم المشتركة أولاً)، ثم يشغل بناء التطبيقات غير المترابطة بالتوازي، مع استرجاع مخرجات الحزم غير المعدلة من الكاش (Full Turbo) في أجزاء من الثانية.",
      commonMistakes: [
        {
          mistake: "نسيان تحديد مخرجات المهمة في مصفوفة outputs داخل ملف turbo.json.",
          why: "إذا لم تحدد مسار المخرجات (مثل dist/** أو .next/**)، لن يتمكن Turborepo من حفظ واستعادة ملفات البناء من التخزين المؤقت ويعيد البناء في كل مرة دون داعٍ.",
          fix: "حدد دائماً مجلدات المخرجات بدقة: 'outputs': ['dist/**', '.next/**', 'build/**']."
        },
        {
          mistake: "تفعيل خيار cache: true لمهام الخوادم الحية التفاعلية مثل dev.",
          why: "مهام التطوير الحية (Dev Servers) يجب ألا تتوقف ولا يتم تخزين مخرجاتها؛ وحفظها في الكاش يمنع تشغيل الخادم.",
          fix: "اضبط دائماً 'cache': false و 'persistent': true لمهمة dev في turbo.json."
        }
      ],
      bestPractices: [
        "استخدم رمز الكاريت (^build) لضمان بناء الحزم المشتركة قبل التطبيقات التي تعتمد عليها.",
        "اربط Turborepo بحساب Vercel لتفعيل ميزة التخزين المؤقت السحابي المشترك (Remote Caching) بين كافة أعضاء الفريق.",
        "استخدم ميزة turbo prune لتجهيز حزم Docker مدمجة وخفيفة لكل تطبيق على حدة.",
        "شغّل مهام الفحص الثابت lint والاختبارات test بالتوازي لتوفير وقت التطوير اليومي."
      ],
      visualInfographic: {
        title: "هندسة خط أنابيب المهام في Turborepo",
        description: "كيف ينسق Turborepo بناء الحزم بالتوازي مع التخزين المؤقت",
        visualSteps: [
          "قراءة شجرة الاعتماديات 🌳 (تحليل حزم package.json وملف turbo.json)",
          "بناء رسم بياني للمهام DAG 📊 (تحديد الأولويات: Tokens ثم UI ثم Apps)",
          "فحص تجزئة البصمة Hash 🔍 (مقارنة الملفات لمعرفة ما إذا كان الكود قد تغير)",
          "استرجاع الكاش الفوري ⚡ (Full Turbo للحزم غير المعدلة في 8ms)",
          "التنفيذ المتوازي الفائق 🚀 (بناء التطبيقات المعدلة بالتوازي على أنوية المعالج)"
        ]
      }
    },
    {
      id: "30.3.e",
      title: "مشاركة الحزم والمكونات بين التطبيقات (Internal Packages)",
      englishTerm: {
        term: "Sharing Internal Packages",
        pronunciation: "شيرينغ إنترنال باكيدجز",
        meaning: "إنشاء واستخدام الحزم الداخلية المشتركة دون نشرها على npm"
      },
      description: "القوة الأعظم لمعمارية Monorepo تكمن في سهولة إنشاء واستهلاك الحزم والمكتبات المشتركة محلياً (Internal Workspace Packages) دون الحاجة لرفعها إلى مستودع npm العام أو الخاص. تتنوع هذه الحزم المشتركة لتشمل: 1) حزم المكونات ونظام التصميم (@my-org/ui)؛ 2) حزم الإعدادات المشتركة مثل إعدادات TypeScript (@my-org/tsconfig) وإعدادات ESLint (@my-org/eslint-config) لفرض معايير كود موحدة في الشركة؛ 3) حزم الدوال والنماذج المشتركة (@my-org/utils) لحسابات التواريخ والضرائب ونماذج Zod. يتم استهلاك هذه الحزم مباشرة في كود التطبيقات عبر جمل import عادية وسلسة بفضل الربط الرمزي لمساحات العمل.",
      realWorldAnalogy: "يشبه إنشاء الحزم الداخلية في Monorepo وجود شبكة مياه وكهرباء داخلية خاصة بمجمع سكني مغلق؛ المجمع ينتج طاقته ويوزعها على كل الفلل السكنية عبر شبكة أنابيب داخلية سريعة؛ لا يحتاجون لشراء بطاريات تجارية يومية من السوق الخارجي لتشغيل منازلهم.",
      whyItMatters: "يقضي هذا النهج تماماً على تكرار إعدادات التكوين المملة (Copy-Pasting tsconfig.json) في كل مشروع جديد، ويضمن أن أي مطور ينشئ تطبيقاً جديداً في الشركة يبدأ بقواعد ESLint ونظام تصميم جاهز ومتناسق 100% في أقل من دقيقة واحدة.",
      syntax: "// استيراد الحزمة المشتركة داخل تطبيق apps/web/src/App.tsx:\nimport { PrimaryButton } from '@my-org/ui';\nimport { formatDate } from '@my-org/utils';\nimport type { UserProfile } from '@my-org/types';",
      simpleExample: `// استعراض محاكاة استيراد واستخدام حزمة داخلية مشتركة في واجهة React
import React from 'react';

// محاكاة دالة مستوردة من حزمة داخلية: import { formatCurrency } from '@my-org/utils'
function formatCurrency(amount) {
  return \`\$\${amount.toLocaleString()} USD\`;
}

// محاكاة مكون مستورد من حزمة داخلية: import { OrgHeader } from '@my-org/ui'
function OrgHeader({ title }) {
  return (
    <div className="border-b border-slate-800 pb-2 mb-2 flex items-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
      <h5 className="font-bold text-xs text-white">{title}</h5>
    </div>
  );
}

// المكون في التطبيق المستهلك
export function InternalPackageConsumerDemo() {
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <OrgHeader title="تطبيق الويب (apps/web)" />
      <p className="text-xs text-slate-400 mb-1">استهلاك دالة من حزمة @my-org/utils:</p>
      <span className="text-base font-bold font-mono text-emerald-400">
        {formatCurrency(14500)}
      </span>
    </div>
  );
}`,
      advancedExample: `// استعراض كيفية بناء حزمة إعدادات TypeScript المشتركة وإعادة استخدامها في كافة مشاريع الـ Monorepo
// packages/tsconfig/base.json (الحزمة المشتركة)
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}

// packages/tsconfig/react.json (إعدادات خاصة بتطبيقات React)
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["DOM", "DOM.Iterable", "ESNext"]
  }
}

// apps/web/tsconfig.json (التطبيق يرث الإعدادات بكلمة واحدة!)
{
  "extends": "@my-org/tsconfig/react.json",
  "include": ["src"]
}`,
      outputExplanation: "يوضح هذا المثال كيفية حزم إعدادات TypeScript في حزمة مشتركة (@my-org/tsconfig) ترث منها كافة تطبيقات المستودع الموحد عبر حقل extends؛ مما يوحد قواعد التحقق البرمجي ويسمح بتعديل الإعدادات في مكان واحد ليطبق على جميع المشاريع فوراً.",
      commonMistakes: [
        {
          mistake: "بناء الحزم المشتركة كملفات CJS قديمة مما يعطل ميزة تقليم الكود الميت (Tree-shaking) في التطبيقات المستهلكة.",
          why: "تصدير الحزم الداخلية بصيغة غير محسنة يضخم حزم البناء لتطبيقات الويب بمكتبات غير مستخدمة.",
          fix: "استخدم تقنية Just-in-Time Packages (تصدير كود TypeScript المصدري مباشرة) لتقوم أداة التجميع في التطبيق (Vite / Next.js) بتجميعه وتقليمه بكفاءة."
        },
        {
          mistake: "نسيان تسجيل الحزمة المشتركة في dependencies الخاصة بالتطبيق المستهلك والاعتماد على الاستيراد النسبي (../../packages/ui).",
          why: "الاستيراد النسبي يكسر مسارات الحزم ويفشل عملية البناء والتخزين المؤقت في Turborepo.",
          fix: "سجل دائماً الحزمة في package.json باسمها المعياري: '@my-org/ui': 'workspace:*'."
        }
      ],
      bestPractices: [
        "استخدم البادئة الموحدة لجميع حزم الشركة (Scope) مثل @my-company/ لتسهيل تمييز الحزم الداخلية عن حزم npm الخارجية.",
        "اجعل الحزم المشتركة صغيرة ومسؤولة عن مهمة واحدة (مثل @my-org/math, @my-org/auth).",
        "احرص على توفير ملف index.ts موحد لكل حزمة يمثل بوابتها العامة للمشاركة.",
        "وثق الحزم المشتركة داخل ملف README.md خاص بكل حزمة لتوضيح الدوال المتاحة."
      ],
      visualInfographic: {
        title: "شبكة مشاركة الحزم الداخلية (Internal Packages Ecosystem)",
        description: "كيف تتغذى التطبيقات على الحزم المشتركة داخل المستودع الموحد",
        visualSteps: [
          "حزمة الإعدادات ⚙️ (@my-org/tsconfig & eslint-config توحد الجودة)",
          "حزمة نظام التصميم 🎨 (@my-org/ui تمد الجميع بالأزرار والواجهات)",
          "حزمة النماذج والأدوات 🛠️ (@my-org/utils توفر دوال الحسابات ونماذج Zod)",
          "التطبيقات المستهلكة 📱 (Web, Admin, Mobile تستورد الحزم بسلاسة)",
          "تعديل واحد ينعكس فوراً 🚀 (Atomic Updates عبر كامل مشاريع الشركة)"
        ]
      }
    },
    {
      id: "30.3.f",
      title: "إدارة الاعتماديات المشتركة (Shared Dependencies Management)",
      englishTerm: {
        term: "Shared Dependencies & Deduplication",
        pronunciation: "شيرد ديبندنسيز آند ديدوبليكيشن",
        meaning: "توحيد وإدارة إصدارات المكتبات الخارجية ومنع تكرار النسخ"
      },
      description: "في المستودعات المتعددة التي تضم 10 تطبيقات و20 حزمة، قد يقوم كل فريق بتثبيت إصدار مختلف من مكتبة خارجية شهيرة (مثل: تطبيق web يثبت react@18.2، وتطبيق admin يثبت react@18.3، ومكتبة ui تعتمد على react@17). يؤدي هذا التباين إلى معضلة 'جحيم الاعتماديات' (Dependency Hell) وتكرار تنزيل مئات الميجابايت من المكتبات المتطابقة. تتضمن الإدارة الاحترافية للاعتماديات المشتركة: 1) استخدام ميزة pnpm catalogs المبتكرة لتعريف إصدار موحد مركزي لكل مكتبة في جذر المستودع؛ 2) استخدام أدوات تدقيق مثل syncpack لفحص وتوحيد إصدارات الحزم تلقائياً؛ 3) إزالة التكرار (Deduplication) لضمان استخدام نسخة واحدة فقط في الذاكرة.",
      realWorldAnalogy: "يشبه توحيد الاعتماديات المشتركة توحيد مقاسات وأبعاد الإطارات في أسطول سيارات شركة نقل كبرى؛ فإذا كانت كافة الشاحنات تستخدم نفس قياس الإطار، يمكن شراء الإطارات بالجملة بأسعار مخفضة والاحتفاظ بقطع غيار موحدة في المستودع تناسب جميع الشاحنات دون هدر.",
      whyItMatters: "يمنع توحيد الاعتماديات الأخطاء البرمجية الغامضة الناتجة عن تضارب سلوك الإصدارات المختلفة للمكتبات، ويوفر مساحات القرص بنسبة تفوق 60%، ويسهل ترقية المكتبات الحيوية (مثل ترقية React 19) عبر كامل مشاريع الشركة في خطوة واحدة منظمة.",
      syntax: "// ميزة Catalogs في pnpm-workspace.yaml:\ncatalog:\n  react: ^18.3.1\n  zod: ^3.23.8\n// استهلاك الإصدار المركزي في أي تطبيق:\n\"dependencies\": { \"react\": \"catalog:\", \"zod\": \"catalog:\" }",
      simpleExample: `// استعراض محاكاة ميزة pnpm Catalog الموحدة لإصدارات الحزم
// pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'

# الكتالوج المركزي الموحد لإصدارات الحزم الخارجية
catalog:
  react: ^18.3.1
  react-dom: ^18.3.1
  tailwindcss: ^3.4.10
  zod: ^3.23.8`,
      advancedExample: `// استعراض محاكي أداة Syncpack لفحص واكتشاف تضارب إصدارات المكتبات في الـ Monorepo
import React, { useState } from 'react';

// قائمة الحزم وحالة تطابق إصداراتها
const MOCK_DEPENDENCY_AUDIT = [
  { package: 'react', app1: '18.3.1', app2: '18.3.1', status: 'MATCHED' },
  { package: 'zod', app1: '3.22.4', app2: '3.23.8', status: 'MISMATCH' },
  { package: 'axios', app1: '1.6.0', app2: '1.7.2', status: 'MISMATCH' },
  { package: 'lucide-react', app1: '0.344.0', app2: '0.344.0', status: 'MATCHED' }
];

// مكون استوديو تدقيق وتوحيد الاعتماديات
export function DependencySyncStudio() {
  const [auditList, setAuditList] = useState(MOCK_DEPENDENCY_AUDIT);
  const [fixedNotice, setFixedNotice] = useState(false);

  // دالة توحيد الإصدارات تلقائياً (محاكاة npx syncpack format)
  const syncAllVersions = () => {
    setAuditList((prev) =>
      prev.map((item) => ({ ...item, app1: item.app2, status: 'MATCHED' }))
    );
    setFixedNotice(true);
  };

  const hasMismatch = auditList.some((i) => i.status === 'MISMATCH');

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">فاحص وموحد الاعتماديات (Syncpack Studio)</h3>
          <p className="text-xs text-slate-400">اكتشاف تضارب إصدارات الحزم وتوحيدها عبر مساحات العمل</p>
        </div>
        <span className={\`text-xs font-mono font-bold px-2.5 py-1 rounded-full border \${
          hasMismatch ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        }\`}>
          {hasMismatch ? 'يوجد تضارب في الإصدارات' : 'جميع الإصدارات متطابقة'}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        {auditList.map((item) => (
          <div key={item.package} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
            <div>
              <span className="font-mono font-bold text-slate-200 block">{item.package}</span>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                apps/web: {item.app1} | apps/admin: {item.app2}
              </span>
            </div>
            <span className={\`text-[10px] font-bold px-2 py-0.5 rounded font-mono \${
              item.status === 'MATCHED' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
            }\`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>

      {hasMismatch && (
        <button 
          onClick={syncAllVersions}
          className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl transition shadow"
        >
          توحيد كافة الإصدارات تلقائياً (syncpack fix-mismatches)
        </button>
      )}

      {fixedNotice && (
        <div className="mt-3 p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl text-xs text-emerald-300">
          ✓ تم توحيد كافة أرقام الإصدارات بنجاح. أصبحت الشجرة نظيفة وموحدة بنسبة 100%.
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية استخدام أدوات التدقيق مثل Syncpack وميزة Catalogs في pnpm لتوحيد إصدارات الحزم الخارجية؛ حيث ترصد الأداة التضارب في أرقام إصدارات المكتبات (مثل Zod وAxios) بين التطبيقات المختلفة وتقوم بتوحيدها تلقائياً بضغطة زر.",
      commonMistakes: [
        {
          mistake: "تثبيت حزم التطوير العامة (مثل Prettier أو TypeScript) بشكل منفصل في كل حزمة داخلية.",
          why: "هذا يكرر ملفات الضبط ويؤدي إلى اختلاف سلوك المترجم بين تطبيق وآخر في نفس المستودع.",
          fix: "ثبت أدوات التطوير العامة في جذر المستودع الموحد (Root DevDependencies) باستخدام: pnpm add -Dw prettier typescript."
        },
        {
          mistake: "تجاهل تشغيل أداة تدقيق التوافقية syncpack في مسارات الـ CI/CD.",
          why: "قد يقوم أحد المطورين بتثبيت إصدار فرعي متباين دون قصد وتتراكم التضاربات مع الوقت.",
          fix: "أضف أمر syncpack list-mismatches كخطوة فحص إلزامية في مسار GitHub Actions."
        }
      ],
      bestPractices: [
        "استخدم ميزة pnpm Catalogs لتوحيد إدارة إصدارات الحزم الخارجية في ملف مركزي واحد.",
        "شغّل أمر pnpm dedupe دورياً لتنظيف شجرة الحزم وإزالة أي نسخ مكررة من ملف القفل.",
        "احرص على ألا تختلف نسخة React المثبتة في أي مكان داخل المستودع الموحد نهائياً.",
        "استخدم أدوات المراقبة الآلية مثل Dependabot المجهزة لدعم مساحات عمل pnpm."
      ],
      visualInfographic: {
        title: "منظومة توحيد الاعتماديات (Shared Dependencies Strategy)",
        description: "كيف تحافظ على شجرة حزم نظيفة ومتطابقة في Monorepo",
        visualSteps: [
          "كتالوج الإصدارات المركزي 📖 (pnpm Catalogs يحدد الإصدار المعتمد)",
          "استهلاك موحد في الحزم 🔗 (جميع التطبيقات تطلب catalog:)",
          "المسح والتدقيق الآلي 🔍 (syncpack يكشف أي تباين في الأرقام)",
          "إزالة التكرار الذكية 🗑️ (pnpm dedupe يحذف النسخ الزائدة من القفل)",
          "استقرار وأداء فائق ⚡ (نسخة واحدة في الذاكرة وصيانة موحدة)"
        ]
      }
    },
    {
      id: "30.3.g",
      title: "تشغيل أوامر البناء والاختبار بالتوازي (Parallel Execution)",
      englishTerm: {
        term: "Parallel Task Execution & Concurrency",
        pronunciation: "باراليل تاسك إكزيكيوشن آند كونكيرنسي",
        meaning: "تشغيل مهام الاختبار والبناء بالتوازي على أنوية المعالج المتعددة"
      },
      description: "في المستودعات التقليدية القديمة، كانت أوامر البناء تنفذ بشكل تسلسلي خطي بطيء (Sequential Execution)؛ حيث ينتظر المطور انتهاء بناء الحزمة A، ثم تبدأ الحزمة B، ثم C؛ مما يعني أنه إذا كانت كل حزمة تستغرق دقيقتين، فإن بناء 10 حزم يستغرق 20 دقيقة كاملة! يعتمد التشغيل المتوازي الحديث (Parallel Execution) عبر محركات مثل Turborepo على الاستفادة القصوى من كافة أنوية المعالج المتاحة في جهازك أو خادم البناء (Multi-core CPU Utilization)؛ حيث يتم تشغيل كافة المهام غير المعتمدة على بعضها في آن واحد وفي نفس اللحظة (مثلاً: تشغيل فحص ESLint، واختبارات Vitest، وبناء تطبيق الإدارة في نفس الوقت)، مع تنظيم تدفق المخرجات لمنع تداخل نصوص الطرفية.",
      realWorldAnalogy: "يشبه التنفيذ المتوازي طاقم الصيانة السريع في سباقات الفورمولا 1 (Pit Stop Crew)؛ لا يقوم عامل واحد بفك العجلة الأولى ثم المشي للعجلة الثانية؛ بل ينقض 4 عمال في نفس اللحظة بالتوازي على العجلات الأربع فيغيرونها جميعاً في أقل من ثانيتين!",
      whyItMatters: "يختصر التنفيذ المتوازي زمن اختبار وبناء المشاريع بنسبة تصل إلى 75%؛ فبدلاً من الانتظار لنصف ساعة لاجتياز اختبارات الـ CI، تكتمل كافة الفحوصات في دقائق معدودة، مما يتيح للمطورين الحصول على رد فعل فوري (Fast Feedback Loop) على تعديلاتهم البرمجية.",
      syntax: "# تشغيل مهام الفحص والاختبار بالتوازي عبر كامل المستودع:\nturbo run lint test build --parallel\n\n# تحديد عدد الأنوية المخصصة للتنفيذ المتوازي:\nturbo run build --concurrency=4",
      simpleExample: `// استعراض محاكاة الفارق الزمني بين التنفيذ التسلسلي والتنفيذ المتوازي
import React, { useState } from 'react';

export function ParallelExecutionDemo() {
  const [mode, setMode] = useState('parallel');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-indigo-400">نمط تشغيل المهام</h4>
        <div className="flex gap-1 text-[10px]">
          <button 
            onClick={() => setMode('parallel')} 
            className={\`px-2 py-0.5 rounded \${mode === 'parallel' ? 'bg-indigo-600 font-bold' : 'bg-slate-800'}\`}
          >
            متوازي (Parallel)
          </button>
          <button 
            onClick={() => setMode('sequential')} 
            className={\`px-2 py-0.5 rounded \${mode === 'sequential' ? 'bg-indigo-600 font-bold' : 'bg-slate-800'}\`}
          >
            تسلسلي (Sequential)
          </button>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        {mode === 'parallel' ? (
          <div>
            <span className="font-bold text-emerald-400 block mb-1">⚡ التنفيذ المتوازي (Turborepo):</span>
            <p className="text-slate-400 leading-relaxed">
              تشغيل lint و test و build في نفس اللحظة عبر أنوية المعالج. الزمن الكلي = أطول مهمة فقط (مثال: 3 ثوانٍ).
            </p>
          </div>
        ) : (
          <div>
            <span className="font-bold text-amber-400 block mb-1">⏳ التنفيذ التسلسلي التقليدي:</span>
            <p className="text-slate-400 leading-relaxed">
              انتظار انتهاء lint (ثانيتان) ثم test (3 ثوانٍ) ثم build (4 ثوانٍ). الزمن الكلي = مجموع الأزمنة (9 ثوانٍ!).
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو محاكاة توزيع المهام المتوازية على أنوية المعالج (Multi-Core Concurrency Visualizer)
import React, { useState } from 'react';

// محاكي أنوية المعالج الأربعة وتوزيع المهام عليها
export function ConcurrencyStudio() {
  const [cores, setCores] = useState([
    { id: 1, currentTask: 'apps/web: lint', progress: 85, color: 'bg-blue-500' },
    { id: 2, currentTask: 'apps/admin: test', progress: 60, color: 'bg-indigo-500' },
    { id: 3, currentTask: 'packages/ui: build', progress: 95, color: 'bg-emerald-500' },
    { id: 4, currentTask: 'packages/utils: test', progress: 40, color: 'bg-purple-500' }
  ]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">التشغيل المتوازي للمهام (CPU Concurrency)</h3>
          <p className="text-xs text-slate-400">استغلال كافة أنوية المعالج لتشغيل الفحوصات والبناء في وقت واحد</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20">
          4 Cores Active
        </span>
      </div>

      <div className="space-y-3 mb-6">
        {cores.map((core) => (
          <div key={core.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs mb-1.5 font-mono">
              <span className="text-slate-400">نواة المعالج CPU #{core.id}</span>
              <span className="text-slate-200 font-bold">{core.currentTask}</span>
            </div>
            {/* شريط تقدم المهمة */}
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className={\`h-full rounded-full transition-all duration-300 \${core.color}\`}
                style={{ width: \`\${core.progress}%\` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
        🚀 <strong className="text-slate-200">النتيجة:</strong> بفضل الاستغلال المتوازي للأنوية، تنتهي مهام الفحص والاختبار لجميع التطبيقات في نفس الوقت الذي يستغرقه اختبار تطبيق واحد فقط!
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا النموذج كيف يدير Turborepo استغلال أنوية المعالج المتعددة؛ حيث يوزع المهام المستقلة بالتوازي على الأنوية في نفس اللحظة بدلاً من إهدار قدرات الحاسوب في انتظار تسلسلي بطيء.",
      commonMistakes: [
        {
          mistake: "تشغيل مهام ذات اعتماديات متبادلة بالتوازي القسري عبر وسيط --parallel دون احترام ترتيب التبعيات.",
          why: "إذا حاولت بناء تطبيق web قبل اكتمال بناء مكتبة ui التي يعتمد عليها، ستفشل عملية التجميع فوراً بسبب نقص ملفات التوزيع.",
          fix: "اعتمد على مخطط المهام في turbo.json ودع Turborepo يقرر ما يمكن تشغيله بالتوازي وما يجب انتظاره."
        },
        {
          mistake: "تخصيص عدد خيوط معالجة (concurrency) يفوق عدد أنوية الجهاز الفعلي بأضعاف مضاعفة.",
          why: "هذا يسبب اختناق المعالج وتبديل السياق المفرط (Context Switching) مما يبطئ الجهاز بدلاً من تسريعه.",
          fix: "دع Turborepo يحدد التوازي تلقائياً بناءً على عدد أنوية حاسوبك المتاحة."
        }
      ],
      bestPractices: [
        "افصل المهام التي لا تنتج ملفات (مثل lint وtype-check) واجعلها تعمل بالتوازي الكامل دون قيود.",
        "استخدم وسيط --concurrency في خوادم الـ CI لمطابقة عدد الأنوية المتاحة في حاوية البناء.",
        "اضبط تنسيق مخرجات الطرفية في Turborepo ليكون مجمعاً ومرتباً لكل مهمة لسهولة قراءة السجلات.",
        "اختبر الأداء عبر ميزة turbo run build --summarize لفحص مدة كل مهمة واكتشاف عنق الزجاجة."
      ],
      visualInfographic: {
        title: "التشغيل المتوازي للمهام (Parallel Task Concurrency)",
        description: "كيف يختصر التنفيذ المتوازي زمن بناء المستودع الموحد",
        visualSteps: [
          "تحليل شجرة المهام 📊 (تحديد المهام المستقلة القابلة للتوازي)",
          "توزيع المهام على الأنوية 💻 (تخصيص كل مهمة لنواة معالج مستقلة)",
          "التنفيذ المتزامن في نفس اللحظة ⚡ (تشغيل Lint, Test, Build معاً)",
          "احترام التبعيات الحرجة 🛑 (بناء الحزم التابعة فور اكتمال متطلباتها)",
          "توفير هائل في الوقت ⏱️ (انخفاض زمن البناء الإجمالي بنسبة تفوق 75%)"
        ]
      }
    },
    {
      id: "30.3.h",
      title: "استراتيجيات التخزين المؤقت للبناء (Build Caching & Remote Cache)",
      englishTerm: {
        term: "Build Caching & Remote Cache",
        pronunciation: "بيلد كاشينغ آند ريموت كاش",
        meaning: "التخزين المؤقت لنتائج البناء ومشاركته سحابياً بين الفريق"
      },
      description: "التخزين المؤقت للبناء (Build Caching) هو الابتكار التقني الأهم الذي جعل معمارية Monorepo سريعة وعملية للشركات الضخمة. يعتمد المفهوم على أن 'الكود الذي تم بناؤه واختباره مسبقاً ولم يتغير، لا يجب إعادة بنائه أو اختباره أبداً!'. يقوم Turborepo بحساب تجزئة تشفيرية فريدة (Hash Fingerprint) لكل مهمة بناءً على: محتويات ملفات الكود المصدري، متغيرات البيئة، وإصدارات الحزم التابعة. إذا تطابقت التجزئة مع عملية سابقة، يتخطى Turborepo إعادة تشغيل الكود ويسترجع ملفات dist وسجلات الطرفية من الكاش فوراً. والأروع من ذلك هو التخزين المؤقت السحابي (Remote Caching)؛ حيث يتم مشاركة هذا الكاش عبر السحابة؛ فإذا قام زميلك ببناء الحزمة على حاسوبه في الصباح، لن يحتاج أي مطور آخر ولا خادم الـ CI لإعادة بنائها؛ بل يتم تنزيل النتيجة الجاهزة في ثوانٍ معدودة!",
      realWorldAnalogy: "يشبه التخزين المؤقت للبناء حل الواجبات المدرسية مع توثيق الإجابات النموذجية؛ إذا سألك المعلم نفس المسألة الحسابية التي قمت بحلها أمس بالأرقام ذاتها، لا تحتاج لإعادة كتابة خطوات القسمة المطولة من الصفر على ورقة مسودة؛ بل تفتح دفترك وتعطيه النتيجة النهائية الصحيحة فوراً.",
      whyItMatters: "يحول Remote Caching مسارات الـ CI/CD إلى سرعات خارقة؛ حيث تسجل الشركات انخفاضاً بنسبة 60% إلى 80% في وقت انتظار المطورين لنتائج الفحص والدمج، وتوفيراً شهرياً بآلاف الدولارات في فواتير خوادم GitHub Actions وAWS.",
      syntax: "# ربط Turborepo بالتخزين المؤقت السحابي في Vercel:\nnpx turbo login\nnpx turbo link",
      simpleExample: `// استعراض محاكاة فحص البصمة والتخزين المؤقت في Turborepo
import React, { useState } from 'react';

export function BuildCacheSimulator() {
  const [hasCodeChanged, setHasCodeChanged] = useState(false);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-indigo-400">محاكي التخزين المؤقت (Build Cache)</h4>
        <button 
          onClick={() => setHasCodeChanged(!hasCodeChanged)}
          className="px-2 py-0.5 bg-slate-800 rounded text-[10px] font-bold"
        >
          {hasCodeChanged ? 'تراجع عن التعديل' : 'تعديل سطر كود'}
        </button>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono">
        {hasCodeChanged ? (
          <div>
            <span className="text-amber-400 block font-bold">⚠️ تم رصد تغير في البصمة (Cache Miss)</span>
            <p className="text-slate-400 text-[11px] mt-1">تغير كود المكون &rarr; إعادة تشغيل البناء واختبار الوحدات (استغرق 8.2s).</p>
          </div>
        ) : (
          <div>
            <span className="text-emerald-400 block font-bold">⚡ تطابق البصمة تماماً [FULL TURBO]</span>
            <p className="text-slate-400 text-[11px] mt-1">الكود لم يتغير &rarr; استرجاع ملفات dist من الكاش فوراً (استغرق 12ms!).</p>
          </div>
        )}
      </div>
    </div>
  );
}`,
      advancedExample: `// استوديو توضيحي لمحاكاة التخزين المؤقت السحابي المشترك (Remote Cache Flow) بين الفريق والـ CI
import React, { useState } from 'react';

// محاكاة تدفق الكاش المشترك بين المطور والـ CI
export function RemoteCacheFlowStudio() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      actor: 'المطور أحمد (حاسوبه المحلي)',
      action: 'قام ببناء الحزمة @my-org/ui بعد تعديل زر.',
      cacheStatus: 'رفع نواتج البناء إلى Remote Cache السحابي ☁️',
      time: 'استغرق 12 ثانية'
    },
    {
      actor: 'خادم CI/CD (GitHub Actions)',
      action: 'قام بفتح Pull Request لتشغيل الفحوصات.',
      cacheStatus: 'تنزيل ناتج البناء الجاهز من الكاش السحابي [Cache HIT]',
      time: 'استغرق 1.1 ثانية فقط! (وفر 90% من الوقت)'
    },
    {
      actor: 'المطورة سارة (حاسوبها المحلي)',
      action: 'سحبت أحدث نسخة من الكود وشغلت التطبيق.',
      cacheStatus: 'قراءة فورية للكاش السحابي دون إعادة بناء',
      time: 'استغرق 0.2 ثانية'
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-base font-bold">التخزين المؤقت السحابي المشترك (Remote Caching)</h3>
          <p className="text-xs text-slate-400">مشاركة مخرجات البناء السحابية بين جميع المطورين وخوادم الـ CI</p>
        </div>
        <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded-full border border-cyan-500/20">
          Cloud Cache
        </span>
      </div>

      <div className="space-y-3 mb-6">
        {steps.map((st, idx) => (
          <div 
            key={idx}
            className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-slate-200">{st.actor}</span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">{st.time}</span>
            </div>
            <p className="text-slate-400 mb-1.5">{st.action}</p>
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20 inline-block">
              {st.cacheStatus}
            </span>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-200">الأثر الحقيقي:</strong> التخزين المؤقت السحابي يعني أن مهمة البناء التي يتم تنفيذها مرة واحدة بنجاح في أي مكان في العالم، لا يُعاد تنفيذها مجدداً لأي مطور آخر!
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح هذا المثال كيفية عمل التخزين المؤقت السحابي الموزع (Remote Cache) في Turborepo؛ حيث يتم رفع نتائج ومخرجات البناء السليمة إلى السحابة فور إنهائها بواسطة أحد المطورين، ليقوم خادم الـ CI وباقي أعضاء الفريق بتنزيلها واستخدامها فوراً دون تكرار أي جهد حسابي.",
      commonMistakes: [
        {
          mistake: "تضمين متغيرات بيئة غير مستقرة أو ديناميكية (مثل التاريخ الزمني اللحظي) في حساب بصمة الكاش.",
          why: "تغير القيمة في كل ثانية يفسد تطابق البصمة ويجعل Turborepo يتجاهل الكاش ويعيد البناء دائماً.",
          fix: "حدد فقط المتغيرات المؤثرة فعلياً على كود البناء في مصفوفة env داخل ملف turbo.json."
        },
        {
          mistake: "نسيان تضمين مفتاح TURBO_TOKEN في إعدادات GitHub Actions لتفعيل الكاش السحابي.",
          why: "بدون توكن المصادقة، يفشل الـ CI في الوصول للكاش السحابي ويعود للعمل البطيء التقليدي.",
          fix: "أضف TURBO_TOKEN و TURBO_TEAM في أسرار مستودع GitHub (Repository Secrets)."
        }
      ],
      bestPractices: [
        "فعّل دائماً ميزة Remote Caching مع Vercel أو خوادم التخزين الذاتي مفتوحة المصدر (Self-hosted Remote Cache).",
        "حدد مصفوفة outputs بعناية في ملف turbo.json لتحديد الملفات الدقيقة التي يجب تخزينها واستعادتها.",
        "استخدم وسيط --filter لتشغيل المهام على الحزم المتأثرة بالتعديل فقط: turbo run build --filter=...[origin/main].",
        "تأكد من تنظيف الكاش محلياً عند الشك في أي سلوك عبر أمر: npx turbo clean."
      ],
      visualInfographic: {
        title: "دورة عمل التخزين المؤقت السحابي (Remote Caching)",
        description: "كيف يتم استرجاع نواتج البناء دون إعادة تشغيل الكود",
        visualSteps: [
          "حساب البصمة الرقمية 🧮 (تجزئة تشفيرية Hash لكود الملفات والتبعيات)",
          "فحص الكاش المحلي والسحابي 🔍 (البحث عن مخرجات سابقة تطابق البصمة)",
          "حالة التطابق الكامل Cache HIT ⚡ (استرجاع المخرجات فوراً في أجزاء من الثانية)",
          "حالة الكود الجديد Cache MISS ⚙️ (تنفيذ البناء الفعلي فقط للأجزاء المعدلة)",
          "تحديث الكاش السحابي ☁️ (رفع المخرجات الجديدة ليستفيد منها باقي الفريق)"
        ]
      }
    },
    {
      id: "30.3.i",
      title: "إعداد مسارات CI/CD لمشروع Monorepo (Turborepo & Affected CI)",
      englishTerm: {
        term: "Monorepo CI/CD & Affected Pipelines",
        pronunciation: "مونوريبو سي آي/سي دي آند أفكتيد بايبلاينز",
        meaning: "هندسة مسارات البناء الذكي للحزم المتأثرة بالتعديل فقط"
      },
      description: "في مستودع موحد يضم 30 مشروعاً مختلفاً، يُعد تشغيل اختبارات وبناء كافة المشاريع في كل Pull Request كارثة هندسية تستنزف الوقت والمال. تكمن احترافية إعداد مسارات التكامل والنشر المستمر (CI/CD) لمشاريع Monorepo في تطبيق تقنية 'البناء المتأثر فقط' (Affected Builds). باستخدام قدرات Turborepo وGit، يفحص مسار GitHub Actions التغييرات التي طرأت في الـ PR مقارنة بالفرع الرئيسي main، ويحدد بدقة الحزم التي تم تعديلها والحزم التي تعتمد عليها فقط (Downstream Affected Packages)، مع تجاهل باقي المشاريع غير المتأثرة تماماً. يضمن هذا النهج اختبار كل ما هو ضروري بسرعة قياسية ونشر التطبيقات المعنية فقط بشكل مستقل.",
      realWorldAnalogy: "يشبه مسار الـ CI الذكي للمستودع الموحد مفتش الصيانة في قطار طويل يضم 50 مقطورة؛ إذا أبلغ الركاب عن عطل في مكيف الهواء في المقطورة رقم 3 فقط، لا يقوم المفتش بفك وفحص محركات المقطورات الـ 49 السليمة؛ بل يتجه مباشرة للمقطورة المتأثرة ويصلحها ويفحص العربات المتصلة بها فقط.",
      whyItMatters: "يقلل فحص الحزم المتأثرة زمن تشغيل مسار الـ CI/CD بنسبة تفوق 85%، ويمنع تعطيل نشر تطبيق المتجر إذا كان التعديل في لوحة الإدارة فقط، ويضمن استقلالية تامة في النشر لكل فريق داخل المؤسسة.",
      syntax: "# أمر تشغيل الاختبارات للحزم المتأثرة بالـ PR الحالي فقط:\nturbo run test --filter=...[origin/main]\n\n# أمر بناء التطبيق المحدد وحزمه التابعة فقط:\nturbo run build --filter=@my-org/web...",
      simpleExample: `// استعراض محاكاة مفهوم فلترة الحزم المتأثرة بالتعديل في الـ CI
import React, { useState } from 'react';

export function AffectedCILogicDemo() {
  const [modifiedPackage, setModifiedPackage] = useState('ui');

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-bold text-xs text-slate-300">محاكي الفلترة (Affected CI)</h4>
        <select 
          value={modifiedPackage} 
          onChange={(e) => setModifiedPackage(e.target.value)}
          className="p-1 bg-slate-800 border border-slate-700 rounded text-[11px] text-white"
        >
          <option value="ui">تعديل في packages/ui</option>
          <option value="admin">تعديل في apps/admin فقط</option>
        </select>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        {modifiedPackage === 'ui' ? (
          <div>
            <span className="text-amber-400 font-bold block mb-1">الحزم المتأثرة بالاختبار:</span>
            <p className="text-slate-400 text-[11px]">
              يتم اختبار [packages/ui] + التطبيقات التي تعتمد عليها [apps/web و apps/admin].
            </p>
          </div>
        ) : (
          <div>
            <span className="text-emerald-400 font-bold block mb-1">الحزم المتأثرة بالاختبار:</span>
            <p className="text-slate-400 text-[11px]">
              يتم اختبار [apps/admin] فقط! تم تجاهل [apps/web] و [packages/ui] لتوفير الوقت.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}`,
      advancedExample: `// سير عمل GitHub Actions المتكامل والذكي لمستودع Monorepo مع التخزين السحابي وفحص الحزم المتأثرة
// .github/workflows/monorepo-ci.yml
name: مسار التحقق والنشر الذكي للـ Monorepo

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  validate-affected:
    name: فحص واختبار الحزم المتأثرة بالتعديل
    runs-on: ubuntu-latest
    steps:
      - name: سحب الكود مع كامل تاريخ Git للمقارنة
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # إلزامي لمقارنة التغييرات مع origin/main

      - name: تثبيت مدير الحزم pnpm الحديث
        uses: pnpm/action-setup@v3
        with:
          version: 9

      - name: تهيئة بيئة Node.js مع كاش pnpm
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - name: التثبيت الصارم للاعتماديات المشتركة
        run: pnpm install --frozen-lockfile

      # تشغيل الفحص والاختبار للحزم المتأثرة بالتعديل فقط عبر فلتر Turborepo
      - name: تشغيل الفحص والاختبارات للحزم المتأثرة بالتعديل
        run: pnpm turbo run lint test --filter=...[origin/main]
        env:
          TURBO_TOKEN: \${{ secrets.TURBO_TOKEN }}
          TURBO_TEAM: \${{ secrets.TURBO_TEAM }}

      # بناء الحزم المتأثرة مع الاستفادة من الكاش السحابي
      - name: بناء المشاريع المتأثرة بالتعديل
        run: pnpm turbo run build --filter=...[origin/main]
        env:
          TURBO_TOKEN: \${{ secrets.TURBO_TOKEN }}
          TURBO_TEAM: \${{ secrets.TURBO_TEAM }}`,
      outputExplanation: "يوضح هذا الملف مسار CI/CD احترافي وعالي الكفاءة لمستودع Monorepo؛ حيث يسحب تاريخ Git ويستخدم فلتر Turborepo الذكي (--filter=...[origin/main]) لحصر الفحص والاختبار والبناء على الحزم المعدلة وتوابعها فقط، مع ربط الكاش السحابي عبر TURBO_TOKEN لتقليص مدة الفحص إلى أقصى حد.",
      commonMistakes: [
        {
          mistake: "استخدام actions/checkout الافتراضي بدون ضبط fetch-depth: 0 في مسار الـ CI.",
          why: "الافتراضي يسحب أحدث commit فقط، مما يجعل Git عاجزاً عن معرفة الفارق بين الفرع الحالي وفرع origin/main ويفشل فلتر الحزم المتأثرة.",
          fix: "اضبط دائماً fetch-depth: 0 داخل actions/checkout للسماح بحساب الفوارق بدقة."
        },
        {
          mistake: "إعادة بناء ونشر جميع تطبيقات الشركة عند كل دمج حتى لو كان التعديل في ملف README فقط.",
          why: "هذا يهدر موارد الخوادم ويتسبب في نشر تحديثات وهمية غير ضرورية لبيئات الإنتاج.",
          fix: "استخدم فلتر Turborepo لتحديد ما إذا كان التطبيق متأثراً فعلياً قبل إطلاق خطوة النشر الخاصة به."
        }
      ],
      bestPractices: [
        "قسّم مسارات الـ CI إلى وظائف مستقلة (Jobs) يمكن تشغيلها بالتوازي لزيادة السرعة.",
        "استخدم ميزة Concurrency في GitHub Actions لإلغاء عمليات الفحص السابقة لنفس الـ PR عند رفع commit جديد.",
        "اربط منصات النشر السحابي (مثل Vercel أو Cloudflare) بالـ Monorepo مع ضبط أمر Ignored Build Step لتخطي البناء غير المتأثر.",
        "احرص على ألا تتجاوز مدة اجتياز مسار الـ CI الكامل في الـ Monorepo حاجز 3 إلى 5 دقائق كحد أقصى."
      ],
      visualInfographic: {
        title: "مسار البناء الذكي للحزم المتأثرة (Affected CI Pipeline)",
        description: "كيف يحدد مسار الـ CI ما يجب اختباره وبناؤه بدقة متناهية",
        visualSteps: [
          "فتح طلب السحب 🚀 (Pull Request يستهدف فرع main)",
          "مقارنة فوارق Git 🔍 (تحليل الملفات المعدلة بدقة عبر fetch-depth: 0)",
          "حساب شجرة التأثر 📊 (تحديد الحزمة المعدلة والتطبيقات التي تعتمد عليها)",
          "تطبيق الفلتر الذكي 🎯 (--filter=...[origin/main] يتجاهل الحزم السليمة)",
          "سرعة إنجاز فائقة ⚡ (بناء الحزم المتأثرة فقط مع سحب الكاش في دقائق)"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-30-3-1",
      question: "ما هي الميزة الجوهرية لاستخدام بروتوكول workspace:* في ملفات package.json داخل مساحات عمل pnpm؟",
      options: [
        "تشفير كود المشروع ومنع المطورين من قراءته.",
        "ربط الحزمة الداخلية بالحزم المشتركة المحلية مباشرة عبر روابط رمزية (Symlinks) دون الحاجة لنشرها على npm.",
        "تحويل كود React إلى لغة أسمبلي.",
        "إيقاف تشغيل الإنترنت في جهاز المطور."
      ],
      correctAnswer: 1,
      explanation: "يتيح بروتوكول workspace:* استهلاك الحزم والمكتبات المشتركة الموجودة في نفس المستودع محلياً ومباشرة، مما يضمن انعكاس التعديلات فوراً دون الحاجة لنشر الحزم على npm."
    },
    {
      id: "quiz-30-3-2",
      question: "ما هو الدور المعماري الرئيسي لأداة Turborepo في إدارة المستودعات الموحدة؟",
      options: [
        "تصميم واجهات المستخدم باستخدام الذكاء الاصطناعي.",
        "تنظيم وتشغيل مهام البناء والاختبار بالتوازي وفق شجرة الاعتماديات، وتوفير نظام تخزين مؤقت حاسوبي وسحابي فائق السرعة.",
        "استبدال لغة TypeScript بلغة بايثون.",
        "إرسال إشعارات SMS للمطورين عند حدوث أخطاء."
      ],
      correctAnswer: 1,
      explanation: "يعمل Turborepo كمحرك تنسيق فائق السرعة يحلل الاعتماديات ويشغل المهام بالتوازي ويسترجع نتائج المهام غير المعدلة من الكاش السحابي والمحلي لتسريع البناء."
    },
    {
      id: "quiz-30-3-3",
      question: "ما الفائدة من استخدام وسيط الفلترة --filter=...[origin/main] في مسارات الـ CI/CD لمشاريع Monorepo؟",
      options: [
        "حذف جميع ملفات المشروع التي لم تعدل منذ شهر.",
        "حصر عمليات الفحص والاختبار والبناء على الحزم التي تم تعديلها فعلياً وتوابعها فقط، وتخطي كافة المشاريع غير المتأثرة لتوفير الوقت.",
        "إعادة تنزيل كافة الحزم من الإنترنت في كل مرة.",
        "إجبار المطورين على كتابة اختبارات جديدة دائماً."
      ],
      correctAnswer: 1,
      explanation: "يقوم فلتر الحزم المتأثرة (Affected Filter) بفحص التغييرات مقارنة بالفرع الرئيسي وتشغيل المهام فقط على الحزم المعدلة وتوابعها، مما يوفر أكثر من 80% من وقت الـ CI."
    }
  ],
  practicalExercise: {
    id: "exercise-30-3",
    title: "تمرين تطبيقي: تصميم هيكل مستودع موحد (Monorepo Workspace) مع مشاركة الحزم وضبط turbo.json",
    scenario: "طُلب منك في شركتك إعداد البنية المعمارية لمستودع موحد يضم تطبيقين (apps/web و apps/admin) ومكتبتين مشتركتين (packages/ui و packages/utils). المطلوب كتابة ملف pnpm-workspace.yaml، وملف turbo.json، وتجهيز ملف package.json لتطبيق web يستهلك الحزم الداخلية ببروتوكول workspace:*.",
    tasks: [
      "كتابة تكوين pnpm-workspace.yaml لتحديد مسارات apps/* و packages/*.",
      "كتابة ملف turbo.json يحدد مهمة البناء build مع تبعية ^build ومهمة lint المتوازية.",
      "كتابة ملف package.json لتطبيق apps/web يستهلك @my-org/ui و @my-org/utils.",
      "ضمان اتساق البنية المعمارية وخلوها من الاعتماديات الدائرية."
    ],
    hints: [
      "استخدم ^build في dependsOn لضمان بناء الحزم المشتركة قبل التطبيق.",
      "استخدم 'workspace:*' في dependencies لربط الحزم المحلية.",
      "اضبط private: true في التطبيق لمنع نشره بالخطأ."
    ],
    solution: `// الحل النموذجي للتمرين التطبيقي: معمارية Monorepo متكاملة

// 1. ملف pnpm-workspace.yaml
/*
packages:
  - 'apps/*'
  - 'packages/*'
*/

// 2. ملف turbo.json في جذر المستودع
/*
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "lint": {
      "dependsOn": []
    },
    "test": {
      "dependsOn": ["^build"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
*/

// 3. ملف apps/web/package.json
/*
{
  "name": "@my-org/web-app",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint ."
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@my-org/ui": "workspace:*",
    "@my-org/utils": "workspace:*"
  },
  "devDependencies": {
    "@my-org/tsconfig": "workspace:*",
    "vite": "^5.4.0"
  }
}
*/`
  },
  visualInfographic: {
    title: "خارطة طريق إدارة المستودعات المتعددة (Monorepo Blueprint)",
    description: "الأعمدة الأربعة لإدارة المشروعات البرمجية الموحدة بكفاءة",
    visualSteps: [
      "مساحات العمل pnpm Workspaces 📦 (الروابط الصلبة Symlinks ومخزن الحزم الموحد)",
      "المكتبات والحزم الداخلية 🧩 (مشاركة نظام التصميم والأدوات بروتوكول workspace:*)",
      "محرك المهام Turborepo ⚡ (تشغيل المهام بالتوازي والتخزين المؤقت Build Cache)",
      "مسارات الـ CI المتأثرة 🤖 (Affected Pipelines: فحص وبناء ما تغير فقط بنسبة 100%)"
    ]
  }
};

