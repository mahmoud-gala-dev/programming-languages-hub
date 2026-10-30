// e:\KD\lang\react\src\data\sections\section29\section29Meta.js
// بيانات وصفية وموجز وتطبيق ختامي للقسم 29: مراقبة التطبيقات وصيانتها

export const section29Meta = {
  id: "section-29",
  title: "مراقبة التطبيقات وصيانتها (Monitoring & Maintenance)",
  description: "الدليل الشامل لاحتراف مراقبة تطبيقات React في بيئة الإنتاج الحية، تتبع الأخطاء البرمجية عبر Sentry، رصد أداء المستخدمين الفعليين (RUM) ومؤشرات Core Web Vitals، تحليل زمن استجابة الـ API، إدارة موافقات الخصوصية GDPR، وصيانة الاعتماديات ومكافحة الثغرات والديون التقنية بأمان.",
  
  // 8 قواعد ذهبية للمراقبة والصيانة الاحترافية
  summary: [
    "اعزل أخطاء الواجهة في الإنتاج باستخدام Sentry وError Boundaries لتفادي انهيار الشاشة بالكامل وتقديم تجربة تعافٍ سلسة.",
    "احمِ خصوصية مستخدميك دائماً بتطهير البيانات الحساسة (PII Scrubbing) وحجب كلمات المرور والأرقام الائتمانية قبل إرسال التقارير.",
    "ارفع ملفات Source Maps إلى خادم المراقبة حصراً أثناء مرحلة البناء واحظر نشرها للعامة لحماية أسرار الكود التجاري.",
    "قِس الأداء الحقيقي للمستخدمين (RUM) وركّز على Core Web Vitals المعتمدة (LCP أقل من 2.5s وINP أقل من 200ms وCLS أقل من 0.1).",
    "احقن معرفات تتبع موحدة (Trace IDs) في جميع طلبات واجهات البرمجة لربط نقرات الواجهة بمسار المعالجة في الخوادم الخلفية.",
    "استخدم أمر npm ci في جميع مسارات CI/CD وخوادم الإنتاج لضمان تثبيت مطابق 100% لملف package-lock.json المشفر.",
    "أتمت الفحص الأمني للاعتماديات عبر GitHub Dependabot وSnyk وتخلص من الحزم الميتة بانتظام بواسطة depcheck.",
    "طبّق قاعدة الـ 20% الهندسية في كل دورة تطوير (Sprint) لسداد الديون التقنية وإعادة هيكلة وتفكيك المكونات المتضخمة."
  ],

  // ورقة المفاهيم والأوامر المرجعية (Cheat Sheet)
  cheatSheet: [
    { term: "Sentry.init()", description: "تهيئة منصة تتبع الأخطاء وتسجيل الـ DSN ومعدل أخذ العينات وبيئة التشغيل." },
    { term: "Sentry.ErrorBoundary", description: "مكون يحيط بشجرة React لالتقاط أخطاء التصيير وإظهار واجهة بديلة وتسجيل الخطأ تلقائياً." },
    { term: "beforeSend Hook", description: "دالة تنقية تفحص حمولة الخطأ وتطهر البيانات الشخصية الحساسة (PII) قبل إرسالها للسحابة." },
    { term: "Real User Monitoring (RUM)", description: "مراقبة الأداء المباشر الصادر من أجهزة وشبكات المستخدمين الفعليين في العالم الواقعي." },
    { term: "Largest Contentful Paint (LCP)", description: "مؤشر سرعة ظهور أكبر كتلة مرئية في الشاشة (الهدف: أقل من 2.5 ثانية)." },
    { term: "Interaction to Next Paint (INP)", description: "مؤشر سرعة استجابة وسلاسة الواجهة لجميع نقرات وتفاعلات الزائر (الهدف: أقل من 200ms)." },
    { term: "Cumulative Layout Shift (CLS)", description: "مقياس الاستقرار البصري ومقدار القفزات المفاجئة في تخطيط الشاشة (الهدف: أقل من 0.1)." },
    { term: "Navigation Timing API", description: "واجهة متصفح متقدمة لتفكيك أوقات استعلام DNS ومصافحة TCP وزمن أول بايت TTFB." },
    { term: "Time to First Byte (TTFB)", description: "الزمن المستغرق بين إرسال المتصفح لطلب الصفحة واستلامه لأول بايت من الخادم." },
    { term: "Distributed Tracing (X-Trace-ID)", description: "حقن معرف تتبع موحد في ترويسات HTTP لربط طلبات الواجهة بمسار الميكروسيرفيس." },
    { term: "Crash-Free Sessions Rate", description: "النسبة المئوية للجلسات التي تمت بنجاح تام دون أن يواجه المستخدم أي عطل برمجي أو شبكي." },
    { term: "Exponential Backoff", description: "خوارزمية إعادة محاولة الطلبات الفاشلة بفترات تأخير متضاعفة لتفادي اختناق الخوادم." },
    { term: "Product Analytics", description: "تتبع سلوك المستخدمين ونقراتهم ومسارات التنقل لفهم كيفية استخدام الميزات (مثل PostHog)." },
    { term: "Conversion Funnel", description: "سلسلة الخطوات المتتابعة لإتمام هدف تجاري مع قياس نسب التسرب (Drop-off Rate)." },
    { term: "GDPR Consent Management", description: "إدارة موافقات ملفات الارتباط وحظر سكربتات التتبع حتى يمنح الزائر موافقته الصريحة." },
    { term: "npm outdated", description: "فحص الحزم المثبتة واكتشاف الإصدارات الأحدث المتوفرة في مستودع npm." },
    { term: "Semantic Versioning (SemVer)", description: "نظام ترقيم الإصدارات الثلاثي (MAJOR للكسر، MINOR للميزات، PATCH للإصلاحات)." },
    { term: "npm ci", description: "تثبيت صارم ونظيف وسريع مطابق بنسبة 100% لملف القفل package-lock.json." },
    { term: "npm audit & Dependabot", description: "المسح التلقائي للثغرات الأمنية في الحزم وتوليد طلبات سحب ترقية مؤتمتة." },
    { term: "depcheck", description: "أداة فحص ثابت تكشف الحزم المسجلة في package.json وغير المستخدمة في الكود." },
    { term: "Codemods (jscodeshift)", description: "أدوات تحويل برمجي ذكية تعدل آلاف الملفات تلقائياً عبر شجرة القواعد النحوية AST." },
    { term: "Technical Debt (قاعدة 20%)", description: "تخصيص خمس وقت كل Sprint لسداد المشاكل المعمارية وتفكيك المكونات المتضخمة." },
    { term: "TSDoc / JSDoc Standards", description: "التوثيق المعياري للمكونات لتوليد تلميحات ذكية في محررات الأكواد ومواقع التوثيق." }
  ],

  // المشروع العملي الشامل للقسم (Capstone Project Studio)
  capstoneProject: {
    id: "capstone-29",
    title: "منصة المراقبة والاستدامة الهندسية (Observability & Health Studio Pro)",
    description: "تطبيق لوحة تحكم متكامل وعالي الاحترافية يدمج رصد الأخطاء البرمجية اللحظي، قياس مؤشرات Core Web Vitals الحية، محاكي تتبع زمن استجابة شبكة الـ API، وفاحص أمان وصحة الاعتماديات والديون التقنية في واجهة واحدة متكاملة.",
    learningGoals: [
      "بناء لوحة قياس موحدة لمراقبة صحة تطبيقات React في بيئة الإنتاج.",
      "تطبيق واجهات تفاعلية لرصد أخطاء Sentry مع استعراض مسار الخطأ والـ Breadcrumbs.",
      "عرض حي ومباشر لمؤشرات أداء الويب Core Web Vitals مع تقييم ألوان معتمد من جوجل.",
      "فحص زمن استجابة نقاط نهاية الـ API وحساب معدل الجلسات الخالية من الأعطال (Crash-Free Rate).",
      "إدارة الاعتماديات البرمجية وتقدير ساعات الدين التقني لجدولتها في دورات السبرنت."
    ],
    features: [
      "محدد تبويبات ديناميكي للتبديل بين رصد الأخطاء، مقاييس الويب الحيوية، تتبع الـ API، وصحة الحزم.",
      "محاكي أخطاء برمجية يلتقط الاستثناءات ويطهر بيانات المستخدم الحساسة PII تلقائياً.",
      "عدادات بصرية لمؤشرات LCP وINP وCLS مع تصنيف الجودة (Good / Needs Improvement / Poor).",
      "أداة اختبار للشبكة تقيس سرعة الاستجابة بالمللي ثانية وتعترض الاستدعاءات البطيئة.",
      "لوحة ديون تقنية تفاعلية مع حاسبة مؤشر صحة الكود الإجمالي."
    ],
    code: `// e:\\KD\\lang\\react\\src\\capstone\\ObservabilityStudio.jsx
// تطبيق استوديو المراقبة والاستدامة الهندسية الشامل (Observability & Health Studio Pro)
import React, { useState, useEffect } from 'react';

// المكون الرئيسي للاستوديو الشامل
export default function ObservabilityStudio() {
  // تتبع التبويب النشط
  const [activeTab, setActiveTab] = useState('vitals');

  // تبويبات لوحة التحكم
  const tabs = [
    { id: 'vitals', label: 'مؤشرات Core Web Vitals', icon: '⚡' },
    { id: 'errors', label: 'مركز رصد الأخطاء (Sentry Mock)', icon: '🚨' },
    { id: 'api', label: 'تتبع استجابة الـ API والشبكة', icon: '📡' },
    { id: 'deps', label: 'صيانة الاعتماديات والديون', icon: '📦' }
  ];

  return (
    <div className="min-h-[600px] p-6 bg-slate-950 border border-slate-800 rounded-3xl text-white shadow-2xl font-sans" dir="rtl">
      {/* الترويسة الرئيسية */}
      <div className="flex flex-wrap justify-between items-center pb-5 border-b border-slate-800 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-indigo-600/20 text-indigo-400 rounded-xl text-xl border border-indigo-500/30">
              🛡️
            </span>
            <div>
              <h2 className="text-xl font-black text-white">منصة المراقبة والاستدامة الهندسية Pro</h2>
              <p className="text-xs text-slate-400 mt-0.5">لوحة الرصد اللحظي للأداء والأخطاء وتتبع سلامة الاعتماديات في الإنتاج</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400 font-bold">نظام الرصد نشط ومحدث</span>
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

      {/* محتوى التبويبات الديناميكي */}
      <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80">
        {activeTab === 'vitals' && <WebVitalsTab />}
        {activeTab === 'errors' && <ErrorTrackingTab />}
        {activeTab === 'api' && <ApiTracingTab />}
        {activeTab === 'deps' && <DependencyMaintenanceTab />}
      </div>
    </div>
  );
}

// 1. تبويب مؤشرات Core Web Vitals الحية
function WebVitalsTab() {
  // حالة مقاييس جوجل الحيوية
  const [vitals, setVitals] = useState({
    lcp: 1.82, // ثانية
    inp: 85,   // مللي ثانية
    cls: 0.04  // درجة التوازن
  });

  // محاكاة تحسن أو تدهور المقياس عند تفاعل المستخدم
  const simulateInteraction = () => {
    setVitals({
      lcp: parseFloat((Math.random() * 1.5 + 1.2).toFixed(2)),
      inp: Math.round(Math.random() * 120 + 40),
      cls: parseFloat((Math.random() * 0.08).toFixed(3))
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold text-slate-200">قياسات Core Web Vitals المعتمدة من Google</h3>
        <button 
          onClick={simulateInteraction}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold rounded-lg transition"
        >
          محاكاة تفاعل وقياس جديد
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* بطاقة LCP */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Largest Contentful Paint</span>
            <span className="font-mono text-cyan-400 font-bold">LCP</span>
          </div>
          <div className="text-3xl font-black font-mono text-emerald-400 mb-2">
            {vitals.lcp}s
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">الحد الأقصى: 2.5s</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
              ممتاز (GOOD)
            </span>
          </div>
        </div>

        {/* بطاقة INP */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Interaction to Next Paint</span>
            <span className="font-mono text-violet-400 font-bold">INP</span>
          </div>
          <div className="text-3xl font-black font-mono text-emerald-400 mb-2">
            {vitals.inp}ms
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">الحد الأقصى: 200ms</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
              سريع جداً (GOOD)
            </span>
          </div>
        </div>

        {/* بطاقة CLS */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Cumulative Layout Shift</span>
            <span className="font-mono text-amber-400 font-bold">CLS</span>
          </div>
          <div className="text-3xl font-black font-mono text-emerald-400 mb-2">
            {vitals.cls}
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">الحد الأقصى: 0.10</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
              مستقر بصرياً (GOOD)
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
        💡 <strong className="text-slate-200">النتيجة الهندسية:</strong> تطبيقك يحقق جميع المعايير الخضراء في تقييم جوجل لسرعة تصفح الويب، مما يمنحه دفعة قوية في نتائج البحث (SEO) ويخفض معدل ارتداد الزوار بنسبة تفوق 25%.
      </div>
    </div>
  );
}

// 2. تبويب رصد الأخطاء البرمجية ومحاكي Sentry
function ErrorTrackingTab() {
  // قائمة سجل الأخطاء
  const [errorLogs, setErrorLogs] = useState([
    {
      id: 'err-1',
      title: 'TypeError: Cannot read properties of undefined (reading "token")',
      location: 'src/services/auth.js:42',
      time: 'منذ 3 دقائق',
      breadcrumbs: ['Click on [تسجيل الدخول]', 'API /api/auth 401', 'State transition to ERROR'],
      scrubbed: true
    }
  ]);

  // محاكاة إطلاق خطأ جديد واعتراضه
  const triggerSimulatedError = () => {
    const newErr = {
      id: 'err-' + Date.now(),
      title: 'ReferenceError: activeCartItem is not defined',
      location: 'src/components/CheckoutModal.jsx:88',
      time: 'الآن',
      breadcrumbs: ['Open Cart Modal', 'Click on [إتمام الشراء]', 'Validation passed'],
      scrubbed: true
    };
    setErrorLogs(prev => [newErr, ...prev]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-200">سجل الأخطاء والاستثناءات المباشرة (Sentry Console)</h3>
          <p className="text-xs text-slate-400">تتبع مسار الخطأ وفتات الخبز مع التطهير التلقائي للبيانات الحساسة PII</p>
        </div>
        <button 
          onClick={triggerSimulatedError}
          className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition"
        >
          محاكاة استثناء برمجي (Trigger Crash)
        </button>
      </div>

      <div className="space-y-3">
        {errorLogs.map((err) => (
          <div key={err.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono font-bold text-rose-400 text-xs">{err.title}</span>
              <span className="text-[10px] text-slate-500 font-mono">{err.time}</span>
            </div>
            <p className="text-xs text-slate-400 font-mono mb-3">📍 الموقع: {err.location}</p>
            
            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="text-slate-500 block mb-1">فتات الخبز السابقة للخطأ (Breadcrumbs):</span>
              <ul className="list-disc list-inside space-y-0.5 text-slate-400">
                {err.breadcrumbs.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="mt-2 text-right">
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                🛡️ تم تطهير البيانات الحساسة PII بنجاح
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. تبويب تتبع زمن استجابة الـ API والشبكة
function ApiTracingTab() {
  const [requests, setRequests] = useState([
    { endpoint: '/api/v1/user/profile', duration: 48, status: 200, traceId: 'tr-9941a' },
    { endpoint: '/api/v1/products?category=electronics', duration: 120, status: 200, traceId: 'tr-8821b' },
    { endpoint: '/api/v1/analytics/realtime', duration: 620, status: 200, traceId: 'tr-1102c' }
  ]);
  const [testing, setTesting] = useState(false);

  // دالة قياس واختبار طلب حي
  const sendMonitoredCall = async () => {
    setTesting(true);
    const start = performance.now();
    try {
      await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const time = Math.round(performance.now() - start);
      setRequests(prev => [
        {
          endpoint: 'https://jsonplaceholder.typicode.com/todos/1',
          duration: time,
          status: 200,
          traceId: 'tr-' + Math.random().toString(36).substring(2, 7)
        },
        ...prev
      ]);
    } catch (e) {
      console.error(e);
    } finally {
      setTesting(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-200">مراقبة زمن استجابة واجهات البرمجة (Distributed Tracing)</h3>
          <p className="text-xs text-slate-400">تسجيل أوقات الاستجابة ورموز الحالة مع حقن ترويسات Trace ID</p>
        </div>
        <button 
          onClick={sendMonitoredCall}
          disabled={testing}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold rounded-lg transition disabled:opacity-50"
        >
          {testing ? 'جاري القياس...' : 'إرسال طلب شبكي وقياس الأداء'}
        </button>
      </div>

      <div className="space-y-2">
        {requests.map((req, idx) => (
          <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
            <div>
              <span className="font-mono font-bold text-slate-200 block">{req.endpoint}</span>
              <span className="text-[10px] text-slate-500 font-mono">Trace ID: {req.traceId} | حالة: {req.status}</span>
            </div>
            <div className="text-right">
              <span className={\`font-mono font-bold text-sm \${req.duration > 500 ? 'text-amber-400' : 'text-emerald-400'}\`}>
                {req.duration} ms
              </span>
              <span className="block text-[10px] text-slate-500">
                {req.duration > 500 ? '⚠️ استجابة بطيئة' : 'سرعة ممتازة'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 4. تبويب صيانة الاعتماديات والديون التقنية
function DependencyMaintenanceTab() {
  const [debts, setDebts] = useState([
    { id: 1, title: 'تفكيك مكون تفاصيل الدفع (1200 سطر)', hours: 14, category: 'هيكلة المكونات' },
    { id: 2, title: 'ترقية مكتبة React إلى الإصدار 19 الرسمي', hours: 20, category: 'ترقية التبعيات' },
    { id: 3, title: 'تشغيل depcheck وإزالة الحزم الميتة', hours: 4, category: 'تنظيف الحزم' }
  ]);

  const totalHours = debts.reduce((acc, d) => acc + d.hours, 0);

  const resolveDebtItem = (id) => {
    setDebts(prev => prev.filter(d => d.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-200">لوحة صيانة المشروع وإدارة الديون التقنية</h3>
          <p className="text-xs text-slate-400">تطبيق قاعدة الـ 20% لتسديد الديون المعمارية وتحديث الحزم الدورية</p>
        </div>
        <div className="text-right">
          <span className="text-xl font-black text-cyan-400 font-mono">{totalHours} ساعة</span>
          <span className="block text-[10px] text-slate-400">إجمالي الجهد المتبقي</span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {debts.map((item) => (
          <div key={item.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
            <div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-bold mb-1 inline-block">
                {item.category}
              </span>
              <p className="font-bold text-slate-200">{item.title}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-slate-400">{item.hours} ساعة</span>
              <button 
                onClick={() => resolveDebtItem(item.id)}
                className="px-2.5 py-1 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded-lg text-xs font-bold border border-emerald-500/30 transition"
              >
                سداد
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-200">ملاحظة هندسية:</strong> سداد 8 ساعات أسبوعياً يحافظ على رشاقة المشروع ويمنع التدهور المعماري.
      </div>
    </div>
  );
}`
  },

  // إنفوجرافيك القسم الشامل
  visualInfographic: {
    title: "الهندسة الشاملة لمراقبة وصيانة تطبيقات React",
    description: "الأركان الأربعة المتكاملة لاستقرار واستدامة البرمجيات في الإنتاج",
    visualSteps: [
      "رصد الأخطاء والتعافي 🚨 (Sentry Integration, Breadcrumbs, Error Boundaries & PII Scrubbing)",
      "مراقبة تجربة المستخدم الحقيقية ⚡ (RUM, Core Web Vitals: LCP, INP, CLS & Navigation Waterfall)",
      "تتبع الشبكة وسلوك الزوار 📡 (Distributed Tracing, API Latency, Funnels & GDPR Compliance)",
      "صيانة الاعتماديات ورشاقة الكود 📦 (npm ci Lockfiles, Dependabot, Codemods & Tech Debt Refactoring)"
    ]
  }
};

