// e:\KD\lang\react\src\data\sections\section30\section30Meta.js
// بيانات وصفية وموجز وتطبيق ختامي للقسم 30: المعمارية المتقدمة والتوسع (Advanced Architecture & Scale)

export const section30Meta = {
  id: "section-30",
  title: "المعمارية المتقدمة والتوسع (Advanced Architecture & Scale)",
  description: "الدليل المعماري الشامل لبناء وتوسيع تطبيقات React المؤسسية الضخمة: الهيكلة الموجهة بالميزات (Feature-Based Architecture)، فصل منطق الأعمال النقي، طبقة الوصول للبيانات (DAL)، بناء وتوثيق أنظمة التصميم وStorybook بمواصفات CSF 3، إدارة المستودعات المتعددة Monorepo عبر pnpm وTurborepo، وهندسة الواجهات المصغرة Micro Frontends عبر Module Federation.",
  
  // 8 قواعد ذهبية للمعمارية المتقدمة والتوسع
  summary: [
    "قسّم مشاريع React الكبيرة حسب ميزات الأعمال (Feature-Based) مع كبسلة الملفات وتصدير واجهة عامة موحدة عبر index.ts.",
    "افصل منطق الأعمال والقواعد الحسابية تماماً في دوال نقية (Pure Domain Functions) معزولة عن شفرة الـ JSX لضمان سهولة الاختبار.",
    "وحّد استدعاءات الشبكة والتحقق من الاستجابة عبر طبقة الوصول للبيانات (Data Access Layer - DAL) لمنع تسرب تفاصيل الـ API للمكونات.",
    "قسّم إدارة الحالة إلى أربعة أركان متخصصة: TanStack Query لحالة الخادم، وZustand للواجهة العامة، وReact Hook Form للنماذج، والـ URL للخيارات التفاعلية.",
    "طوّر المكونات بمعزل تام في Storybook وفق مواصفات CSF 3 الحديثة، واختبر تفاعلاتها بـ play function وانحدارها البصري عبر Chromatic.",
    "ابنِ نظام التصميم فوق رموز التصميم الذرية (Design Tokens) وحوّلها تلقائياً باستخدام Style Dictionary لتضمن هوية موحدة عبر الويب والهواتف.",
    "أدر المستودعات المتعددة Monorepo باستخدام pnpm Workspaces ومحرك Turborepo لتشغيل المهام بالتوازي والاستفادة من التخزين المؤقت السحابي (Remote Cache).",
    "اعتمد معمارية الواجهات المصغرة (Micro Frontends) باستخدام Module Federation للفرق الكبيرة لتحقيق استقلالية النشر التامة بنسبة 100%."
  ],

  // ورقة المفاهيم والأوامر المرجعية (Cheat Sheet)
  cheatSheet: [
    { term: "Feature-Based Structure", description: "تنظيم الملفات بجمع الـ Components والـ Hooks والـ API الخاصة بكل نطاق أعمال في مجلد مستقل." },
    { term: "Domain Logic Decoupling", description: "عزل القواعد الحسابية والمنطقية في دوال نقية تماماً خارج شجرة ودورة حياة React." },
    { term: "Data Access Layer (DAL)", description: "طبقة موحدة تعزل تفاصيل الشبكة والترويسات وتكيف استجابة الـ API لحماية المكونات." },
    { term: "The 4 Pillars of State", description: "التصنيف الرباعي للحالة: الخادم (Query)، الواجهة (Zustand)، الرابط (URL Params)، والنماذج (Hook Form)." },
    { term: "Clean Architecture", description: "معمارية الدوائر متحدة المركز التي تجعل كيانات النطاق وحالات الاستخدام في القلب ومستقلة عن الأطر." },
    { term: "Container / Presentational", description: "نمط فصل المكونات الذكية التي تدير الحالة عن المكونات البصرية النقية التي تقتصر على عرض الـ JSX." },
    { term: "Fail-Fast Env Config", description: "التحقق المركزي من متغيرات البيئة عبر Zod وإيقاف البناء فوراً عند نقص أي مفتاح أساسي." },
    { term: "Granular Vendor Chunking", description: "فصل مكتبات الطرف الثالث المستقرة (مثل React) في حزم كاش طويلة الأجل (Immutable Caching)." },
    { term: "Storybook (CSF 3)", description: "المعيار الكائني الحديث لكتابة قصص المكونات المعزولة باستخدام Default Meta و Named Story Objects." },
    { term: "play Function (Interactions)", description: "دالة محاكاة ونقر وكتابة المستخدم داخل Storybook للتحقق الآلي من سلوك المكون وتفاعله." },
    { term: "Chromatic Visual Testing", description: "التقاط لقطات شاشة بكسل تلو الآخر لقصص Storybook ومقارنتها بالنسخة السابقة لمنع تشوهات الـ CSS." },
    { term: "Design Tokens", description: "المتغيرات الذرية المحايدة للقرارات البصرية (الألوان والمسافات والخطوط) المخزنة في ملفات JSON." },
    { term: "Style Dictionary", description: "أداة تحويل رموز الـ JSON آلياً إلى متغيرات CSS و Tailwind و TypeScript و Swift و Kotlin." },
    { term: "Semantic Theming & Dark Mode", description: "استخدام متغيرات CSS الدلالية للتبديل الفوري بين الأنماط المظلمة والفاتحة دون إعادة بناء." },
    { term: "Rollup Library Mode", description: "حزم وتصدير مكتبة المكونات بصيغتي ESM و CJS مع جعل React اعتماداً نظيراً peerDependency." },
    { term: "Changesets & SemVer", description: "أتمتة رفع أرقام الإصدارات الدلالية وتوليد سجل CHANGELOG.md والنشر الرسمي على npm." },
    { term: "Monorepo vs Polyrepo", description: "إدارة كافة التطبيقات والمكتبات في مستودع Git موحد بدلاً من تشتيتها في مستودعات متعددة." },
    { term: "pnpm Workspaces (workspace:*)", description: "ربط الحزم الداخلية بروابط صلبة Symlinks واستهلاكها محلياً دون الحاجة لنشرها على npm." },
    { term: "Turborepo & DAG Pipeline", description: "تحليل شجرة التبعيات وتشغيل المهام بالتوازي واسترجاع المخرجات فوراً عبر ميزة Full Turbo." },
    { term: "Remote Caching", description: "مشاركة مخرجات البناء السحابية بين جميع المطورين وخوادم الـ CI لتوفير 80% من وقت البناء." },
    { term: "Affected CI (--filter)", description: "حصر الفحص والاختبار في مسارات الـ CI على الحزم التي طرأ عليها تعديل فعلي فقط وتوابعها." },
    { term: "Micro Frontends & Host/Remote", description: "تفكيك الواجهة إلى تطبيقات مستقلة تنشر على خوادم منفصلة وتندمج في وقت التشغيل." },
    { term: "Webpack / Vite Module Federation", description: "تحميل المكونات البرمجية ديناميكياً عبر الشبكة في وقت التشغيل مع المشاركة التلقائية لـ React." },
    { term: "Global Event Bus (Pub/Sub)", description: "تبادل الرسائل الخفيف بين التطبيقات المصغرة باستخدام أحداث المتصفح المخصصة CustomEvent." }
  ],

  // التطبيق العملي الشامل للقسم (Capstone Project Studio)
  capstoneProject: {
    id: "capstone-30",
    title: "استوديو المعمارية المؤسسية والتوسع (Enterprise Architecture Studio Pro)",
    description: "لوحة تحكم معمارية متكاملة واحترافية تجسد الأركان الأربعة للتوسع المؤسسي: متصفح الهيكلة الموجهة بالميزات (Feature Explorer)، منصة Storybook لمكونات نظام التصميم، محاكي خط أنابيب Turborepo المتوازي، ومحاكي دمج الواجهات المصغرة (Module Federation Shell).",
    learningGoals: [
      "فهم وتطبيق الهيكلة الموجهة بالميزات مع العقد الخارجي index.ts.",
      "فحص حالات المكونات البصرية التفاعلية بنمط Storybook المستقل.",
      "محاكاة تنفيذ مهام Monorepo بالتوازي وتتبع وفر الوقت بفضل التخزين المؤقت (Full Turbo).",
      "محاكاة دمج التطبيقات المصغرة وتوليد أحداث ناقل الأحداث (Event Bus) في وقت التشغيل.",
      "إتقان المفاهيم المعمارية الكبرى التي تميز كبار مهندسي الـ Frontend."
    ],
    features: [
      "محدد تبويبات ديناميكي للتبديل بين ركائز المعمارية الأربعة.",
      "شجرة تفاعلية لاستعراض بنية الميزات المستقلة ومجلداتها الداخلية.",
      "منصة تفاعلية لاختبار مكونات نظام التصميم مع التحكم بالخصائص والوضع المظلم.",
      "محاكي مهام بناء Turborepo يوضح التوازي واسترجاع الحزم من الكاش السحابي.",
      "تطبيق مضيف متكامل يستدعي تطبيقات مصغرة بعيدة عبر محاكاة Module Federation."
    ],
    code: `// e:\\KD\\lang\\react\\src\\capstone\\EnterpriseStudio.jsx
// تطبيق استوديو المعمارية المؤسسية والتوسع الشامل (Enterprise Architecture Studio Pro)
import React, { useState } from 'react';

// المكون الرئيسي للاستوديو المعماري
export default function EnterpriseStudio() {
  const [activeTab, setActiveTab] = useState('features');

  const tabs = [
    { id: 'features', label: 'الهيكلة الموجهة بالميزات (Features)', icon: '🏬' },
    { id: 'storybook', label: 'مختبر Storybook ونظام التصميم', icon: '🎨' },
    { id: 'monorepo', label: 'محرك Turborepo المتوازي', icon: '⚡' },
    { id: 'mfe', label: 'الواجهات المصغرة (Federation Shell)', icon: '🌐' }
  ];

  return (
    <div className="min-h-[620px] p-6 bg-slate-950 border border-slate-800 rounded-3xl text-white shadow-2xl font-sans" dir="rtl">
      {/* الترويسة الرئيسية */}
      <div className="flex flex-wrap justify-between items-center pb-5 border-b border-slate-800 mb-6">
        <div className="flex items-center gap-3">
          <span className="p-2.5 bg-indigo-600/20 text-indigo-400 rounded-xl text-xl border border-indigo-500/30">
            🏛️
          </span>
          <div>
            <h2 className="text-xl font-black text-white">استوديو المعمارية المؤسسية والتوسع Pro</h2>
            <p className="text-xs text-slate-400 mt-0.5">لوحة القيادة الهندسية لتقنيات Monorepo وStorybook وMicro Frontends</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs rounded-full font-mono font-bold">
            Staff Engineer Level
          </span>
        </div>
      </div>

      {/* أزرار التبويبات */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all \${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800'
            }\`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* محتوى التبويبات المعمارية */}
      <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
        {activeTab === 'features' && <FeatureArchitectureTab />}
        {activeTab === 'storybook' && <StorybookDesignSystemTab />}
        {activeTab === 'monorepo' && <TurborepoEngineTab />}
        {activeTab === 'mfe' && <MicroFrontendShellTab />}
      </div>
    </div>
  );
}

// 1. تبويب استعراض الهيكلة الموجهة بالميزات (Feature-Based Explorer)
function FeatureArchitectureTab() {
  const [selectedDomain, setSelectedDomain] = useState('billing');

  const domains = {
    billing: {
      title: 'نطاق الفواتير والاشتراكات (src/features/billing)',
      folders: ['api/getInvoices.ts', 'components/PricingCard.tsx', 'hooks/useCheckout.ts', 'types/invoice.ts', 'index.ts'],
      publicApi: 'export { PricingCard } from \"./components/PricingCard\";\\nexport { useCheckout } from \"./hooks/useCheckout\";',
      desc: 'كبسلة كاملة لمنطق الدفع وحسابات الضرائب مع تصدير نظيف عبر index.ts.'
    },
    auth: {
      title: 'نطاق المصادقة والأمان (src/features/auth)',
      folders: ['api/login.ts', 'components/LoginForm.tsx', 'hooks/useAuth.ts', 'types/user.ts', 'index.ts'],
      publicApi: 'export { LoginForm } from \"./components/LoginForm\";\\nexport { useAuth } from \"./hooks/useAuth\";',
      desc: 'إدارة جلسات المستخدمين وتخزين التوكنات وتجديد الصلاحيات.'
    }
  };

  const cur = domains[selectedDomain];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-200">هندسة الميزات المستقلة (Feature-Based Design)</h3>
          <p className="text-xs text-slate-400">تجميع كود النطاق في مجلد مكتفٍ ذاتياً مع عقد تصدير خارجي موحد</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setSelectedDomain('billing')} 
            className={\`px-3 py-1 rounded-lg text-xs font-bold font-mono transition \${selectedDomain === 'billing' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400'}\`}
          >
            features/billing
          </button>
          <button 
            onClick={() => setSelectedDomain('auth')} 
            className={\`px-3 py-1 rounded-lg text-xs font-bold font-mono transition \${selectedDomain === 'auth' ? 'bg-indigo-600 text-white' : 'bg-slate-950 text-slate-400'}\`}
          >
            features/auth
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-xs font-bold text-slate-300 block mb-2 font-mono">📁 شجرة ملفات الميزة المعزولة:</span>
          <div className="space-y-1.5 font-mono text-xs text-slate-400">
            {cur.folders.map((f, i) => (
              <div key={i} className="flex items-center gap-2 p-1.5 bg-slate-900/60 rounded">
                <span className="text-indigo-400">📄</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-xs font-bold text-emerald-400 block mb-2 font-mono">🔒 العقد الخارجي (index.ts Public API):</span>
          <pre className="p-3 bg-slate-900 rounded-lg text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
            {cur.publicApi}
          </pre>
          <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
            {cur.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

// 2. تبويب مختبر Storybook ونظام التصميم
function StorybookDesignSystemTab() {
  const [variant, setVariant] = useState('primary');
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-200">مختبر Storybook ونظام التصميم (Design System Workshop)</h3>
          <p className="text-xs text-slate-400">فحص مكون الزر المشترك بكافة حالاته وسماته بمعزل عن التطبيق</p>
        </div>
        <button 
          onClick={() => setIsDark(!isDark)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg border border-slate-700 transition"
        >
          {isDark ? '🌙 الوضع المظلم' : '☀️ الوضع الفاتح'}
        </button>
      </div>

      <div className={\`p-8 rounded-2xl border transition-colors mb-4 flex items-center justify-center min-h-[140px] \${
        isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300 text-slate-900'
      }\`}>
        <button className={\`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 \${
          variant === 'primary' 
            ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30' 
            : variant === 'danger'
            ? 'bg-rose-600 hover:bg-rose-500 text-white'
            : 'bg-slate-800 text-slate-300 border border-slate-700'
        }\`}>
          {isLoading && <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
          <span>تأكيد الإجراء التفاعلي</span>
        </button>
      </div>

      {/* لوحة Controls Addon */}
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-wrap gap-4 text-xs items-center">
        <div>
          <span className="text-slate-400 block mb-1">النمط (variant):</span>
          <select 
            value={variant} 
            onChange={(e) => setVariant(e.target.value)}
            className="p-1.5 bg-slate-900 border border-slate-700 rounded text-white font-mono"
          >
            <option value="primary">primary</option>
            <option value="danger">danger</option>
            <option value="secondary">secondary</option>
          </select>
        </div>

        <div className="flex items-center gap-2 pt-4">
          <input 
            type="checkbox" 
            checked={isLoading} 
            onChange={(e) => setIsLoading(e.target.checked)}
            className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
          />
          <span className="text-slate-300">حالة مؤشر التحميل (isLoading)</span>
        </div>
      </div>
    </div>
  );
}

// 3. تبويب محرك Turborepo المتوازي
function TurborepoEngineTab() {
  const [logs, setLogs] = useState([]);
  const [running, setRunning] = useState(false);

  const simulateBuild = () => {
    setRunning(true);
    setLogs([]);

    const steps = [
      { text: '• turbo: قراءة شجرة مساحات عمل pnpm Workspaces...', fast: false, delay: 300 },
      { text: '⚡ @my-org/tokens: تم الاسترجاع من الكاش [FULL TURBO] في 4ms', fast: true, delay: 600 },
      { text: '⚡ @my-org/ui: تم الاسترجاع من Remote Cache السحابي في 12ms', fast: true, delay: 900 },
      { text: '• apps/web: جاري البناء بالتوازي على النواة 1...', fast: false, delay: 1400 },
      { text: '• apps/admin: جاري البناء بالتوازي على النواة 2...', fast: false, delay: 1700 },
      { text: '🎉 تم بناء كافة المشاريع بنجاح خلال 1.7 ثانية فقط (وفر كاش 75%)!', fast: true, delay: 2100 }
    ];

    steps.forEach((s) => {
      setTimeout(() => {
        setLogs(prev => [...prev, s]);
        if (s.text.includes('تم بناء')) setRunning(false);
      }, s.delay);
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-200">محاكي محرك Turborepo (Pipeline & Remote Cache)</h3>
          <p className="text-xs text-slate-400">تشغيل المهام بالتوازي واسترجاع الحزم غير المعدلة من الكاش فوراً</p>
        </div>
        <button 
          onClick={simulateBuild}
          disabled={running}
          className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 hover:opacity-90 font-bold text-xs rounded-xl transition shadow disabled:opacity-50"
        >
          {running ? 'جاري البناء بالتوازي...' : 'تشغيل turbo run build'}
        </button>
      </div>

      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs min-h-[160px] space-y-1.5">
        {logs.length === 0 ? (
          <span className="text-slate-600">اضغط الزر لمحاكاة مسار البناء المتوازي واستعراض ميزة Full Turbo...</span>
        ) : (
          logs.map((l, i) => (
            <div key={i} className={l.fast ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
              {l.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// 4. تبويب محاكي الواجهات المصغرة (Module Federation Shell)
function MicroFrontendShellTab() {
  const [cartCount, setCartCount] = useState(2);
  const [lastAction, setLastAction] = useState('جاهز لاستقبال الأحداث');

  const handleAddItem = () => {
    setCartCount(c => c + 1);
    setLastAction(\`تم إضافة منتج جديد في \${new Date().toLocaleTimeString()} عبر Event Bus\`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-200">التطبيق المضيف (Host Application Shell)</h3>
          <p className="text-xs text-slate-400">دمج تطبيقات الكتالوج والسلة المستقلة عبر Module Federation وEvent Bus</p>
        </div>
        <span className="text-xs font-mono bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20 font-bold">
          Host Port: 3000
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* التطبيق المصغر البعيد 1 */}
        <div className="p-4 bg-blue-950/20 border border-blue-500/30 rounded-xl text-xs space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-400">تطبيق الكتالوج (Catalog Remote :3001)</span>
            <span className="text-[10px] font-mono text-slate-500">React 19 Shared</span>
          </div>
          <p className="text-slate-300">حاسوب محمول فائق النحافة ($1199)</p>
          <button 
            onClick={handleAddItem}
            className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition"
          >
            إضافة للسلة (بث حدث EventBus)
          </button>
        </div>

        {/* التطبيق المصغر البعيد 2 */}
        <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-xs space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-emerald-400">تطبيق السلة (Cart Remote :3002)</span>
            <span className="text-[10px] font-mono text-slate-500">React 19 Shared</span>
          </div>
          <div className="text-2xl font-black font-mono text-emerald-300">
            {cartCount} منتجات في السلة
          </div>
          <p className="text-[11px] text-slate-400 font-mono">{lastAction}</p>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
        🛡️ <strong className="text-slate-200">الاستقلالية التامة:</strong> يعمل كل تطبيق على خادم منفصل وينشر بشكل مستقل، مع تشارك نسخة واحدة من مكتبة React في الذاكرة لمنع تكرار التحميل.
      </div>
    </div>
  );
}`
  },

  // إنفوجرافيك القسم الشامل
  visualInfographic: {
    title: "خارطة طريق المعمارية المتقدمة والتوسع المؤسسي",
    description: "الأعمدة الأربعة لهندسة تطبيقات الويب فائقة المقياس والتعقيد",
    visualSteps: [
      "الهيكلة الموجهة بالميزات 🏬 (Feature-Based Design, Domain Logic Decoupling & Clean Architecture)",
      "نظام التصميم وStorybook 🎨 (Component Story Format 3, Tokens, Style Dictionary & Chromatic)",
      "المستودعات الموحدة Monorepo 🏢 (pnpm Workspaces, Turborepo DAG, Build Caching & Affected CI)",
      "الواجهات المصغرة Micro Frontends 🌐 (Module Federation, Cross-App Routing & Decoupled Deployments)"
    ]
  }
};

