// e:\KD\lang\react\src\data\sections\section29\topic2.js
// الموضوع الثاني من القسم 29: مراقبة الأداء وسلوك المستخدم (RUM, Web Vitals, API Tracking, Analytics & Privacy)

export const topic2 = {
  id: "topic-29-2",
  title: "مراقبة الأداء وسلوك المستخدم في الإنتاج",
  description: "دليل تطبيقي شامل لاحتراف مراقبة تجربة المستخدم الحقيقية (Real User Monitoring - RUM)، قياس مؤشرات الويب الحيوية الأساسية (Core Web Vitals)، تتبع زمن استجابة واجهات البرمجة (API Latency)، تحليلات تفاعل وسلوك المستخدمين (Product Analytics)، وتطبيق معايير الامتثال والخصوصية الصارمة (GDPR / Privacy).",
  subtopics: [
    {
      id: "29.2.a",
      title: "مفهوم Real User Monitoring (RUM)",
      englishTerm: {
        term: "Real User Monitoring (RUM)",
        pronunciation: "ريل يوزر مونيتورينغ",
        meaning: "مراقبة المستخدمين الفعليين أثناء تصفحهم الحي للتطبيق"
      },
      description: "تقنية Real User Monitoring (تُختصر بـ RUM) هي منهجية متطورة لمراقبة أداء التطبيق وسلوك واجهته من خلال جمع وتحليل البيانات المباشرة الناتجة عن أجهزة ومتصفحات المستخدمين الحقيقيين في العالم الفعلي، بدلاً من الاعتماد على بيئات الفحص الافتراضية المعزولة (Synthetic Testing). في المختبر الداخلي لجهاز المطور، يعمل التطبيق على اتصال ألياف بصرية فائق السرعة ومعالج حاسوب خارق؛ ولكن في العالم الواقعي، يتصفح المستخدم موقعك عبر هاتف ذكي متواضع بشبكة خلوية 3G ضعيفة في قطار سريع. يتيح لك RUM التقاط هذه الفروقات بدقة متناهية وفهم كيف تؤثر شبكات المستخدمين، متصفحاتهم المتنوعة، ومواقعهم الجغرافية على سرعة واستجابة وتجربة تطبيق React.",
      realWorldAnalogy: "يشبه RUM نظام الملاحة الذكي (مثل Google Maps) الذي يجمع بيانات حركة المرور الحية من ملايين السائقين الفعليين على الطرق السريعة والشوارع الفرعية ليعطيك صورة صادقة ومحدثة عن الازدحامات؛ بينما يشبه الاختبار الاصطناعي (Synthetic Testing) سيارة اختبار واحدة تجري تجربة على حلبة سباق مغلقة ومجهزة بأفضل الظروف.",
      whyItMatters: "تكمن أهمية RUM في أنه يمنح فريق التطوير الحقيقة المطلقة حول تجربة المستخدم الفعلي (Ground Truth). يساعد RUM في تحديد المشكلات التي لا تظهر أبداً في بيئات الاختبار المحلية، مثل بطء الاستجابة في مناطق جغرافية محددة، أو تجميد الواجهة على أجهزة أندرويد الاقتصادية، مما يوجه الموارد الهندسية لتحسين الأجزاء التي ترفع معدلات التحويل (Conversion Rate) وتقلل نسب مغادرة الزوار (Bounce Rate).",
      syntax: "// نموذج خدمة جمع مقاييس RUM وإرسالها للخادم التحليلي\nconst recordMetric = (metricName, duration, metaData = {}) => {\n  const payload = JSON.stringify({ metricName, duration, ...metaData });\n  navigator.sendBeacon('/analytics/rum', payload);\n};",
      simpleExample: `// إعداد دالة مبسطة لقياس وتسجيل زمن تحميل وعرض أحد المكونات الحيوية
import React, { useEffect } from 'react';

// تعريف المكون الحقيقي الموجه للمستخدم
export function ProductCatalogRUMTracker() {
  // استخدام useEffect لتسجيل وقت اكتمال تجهيز الواجهة للمستخدم
  useEffect(() => {
    // التقاط العلامة الزمنية الحالية بالمللي ثانية بدقة متناهية
    const renderEndTime = performance.now();
    
    // إرسال القياس باستخدام تقنية sendBeacon لضمان عدم حظر التصفح
    const payload = JSON.stringify({
      component: 'ProductCatalog',
      renderTimeMs: Math.round(renderEndTime),
      deviceMemory: navigator.deviceMemory || 'غير معروف',
      effectiveType: navigator.connection ? navigator.connection.effectiveType : 'غير محدد'
    });
    
    // إرسال البيانات فوراً للخلفية التحليلية
    navigator.sendBeacon('/api/rum-metrics', payload);
  }, []);

  // إرجاع واجهة عرض كتالوج المنتجات
  return (
    <div className="p-4 bg-slate-900 text-white rounded-xl">
      {/* عنوان الشاشة الرئيسية */}
      <h3 className="text-xl font-bold">كتالوج المنتجات المميزة</h3>
      {/* نص يوضح تفعيل تقنية المراقبة الحية */}
      <p className="text-sm text-slate-400 mt-2">يتم قياس تجربة الاستخدام الحقيقية تلقائياً في الخلفية.</p>
    </div>
  );
}`,
      advancedExample: `// نظام متقدم متكامل لمراقبة المستخدمين الفعليين (RUM Provider) في React
import React, { createContext, useContext, useEffect, useRef } from 'react';

// إنشاء سياق React لمشاركة إحصائيات وأدوات RUM عبر الشجرة
const RUMContext = createContext(null);

// مزود خدمة المراقبة الشاملة لتجربة المستخدم الحقيقي
export function RUMProvider({ children, appId, reportingEndpoint }) {
  // تخزين الجلسة ومؤشرات أداء التنقل بين المسارات
  const sessionRef = useRef({
    sessionId: crypto.randomUUID(),
    navigationStartTime: performance.now(),
    deviceDetails: {
      userAgent: navigator.userAgent,
      hardwareConcurrency: navigator.hardwareConcurrency || 2,
      connectionType: navigator.connection ? navigator.connection.effectiveType : '4g'
    }
  });

  // تتبع زمن التنقل عبر مسارات التطبيق المختلفة
  const trackRouteTransition = (routePath) => {
    // حساب الزمن المستغرق منذ فتح الصفحة أو الانتقال السابق
    const now = performance.now();
    // حساب الفارق الزمني بالمللي ثانية
    const timeSpent = Math.round(now - sessionRef.current.navigationStartTime);
    
    // إنشاء كائن تقرير RUM المتكامل
    const rumReport = {
      appId: appId,
      sessionId: sessionRef.current.sessionId,
      eventType: 'ROUTE_CHANGE',
      path: routePath,
      durationMs: timeSpent,
      device: sessionRef.current.deviceDetails,
      timestamp: new Date().toISOString()
    };

    // تحديث علامة البداية للخطوة القادمة
    sessionRef.current.navigationStartTime = now;

    // إرسال التقرير التحليلي عبر fetch بطلب غير معطل (Non-blocking)
    if (navigator.sendBeacon) {
      // تفضيل sendBeacon لأنه مضمون الوصول حتى لو أغلق الزائر التبويب
      const blob = new Blob([JSON.stringify(rumReport)], { type: 'application/json' });
      // إرسال حزمة RUM للخادم الخلفي
      navigator.sendBeacon(reportingEndpoint, blob);
    } else {
      // الاعتماد على fetch التقليدي في حال عدم توفر sendBeacon
      fetch(reportingEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rumReport),
        keepalive: true
      }).catch((err) => console.warn('تعذر إرسال تقرير RUM:', err));
    }
  };

  // مراقبة حالات تجميد الخيط الرئيسي (Long Tasks) عبر المتصفح
  useEffect(() => {
    // التأكد من دعم متصفح المستخدم لواجهة مراقبة المهام الطويلة
    if ('PerformanceObserver' in window) {
      try {
        // تهيئة مراقب المهام الطويلة للكشف عن توقف واجهة React
        const longTaskObserver = new PerformanceObserver((entryList) => {
          // استخراج المهام التي حجزت المعالج أكثر من 50 مللي ثانية
          for (const entry of entryList.getEntries()) {
            // تسجيل تفاصيل المهمة الخانقة للواجهة
            const longTaskData = {
              appId: appId,
              sessionId: sessionRef.current.sessionId,
              eventType: 'LONG_TASK_BLOCKED',
              durationMs: Math.round(entry.duration),
              startTime: Math.round(entry.startTime),
              timestamp: new Date().toISOString()
            };
            // إرسال تقرير تجميد الواجهة إلى خادم RUM
            navigator.sendBeacon(reportingEndpoint, JSON.stringify(longTaskData));
          }
        });
        // بدء الاستماع للمهام الطويلة في خيط المعالجة الرئيسي
        longTaskObserver.observe({ entryTypes: ['longtask'] });

        // تنظيف المراقب عند إلغاء تركيب المكون المزود
        return () => longTaskObserver.disconnect();
      } catch (err) {
        // تجاهل الخطأ في المتصفحات القديمة غير المدعومة
        console.warn('مراقبة المهام الطويلة غير مدعومة في هذا المتصفح', err);
      }
    }
  }, [appId, reportingEndpoint]);

  // إرجاع المزود وتزويد الشجرة بدالة تتبع المسارات
  return (
    <RUMContext.Provider value={{ trackRouteTransition, session: sessionRef.current }}>
      {children}
    </RUMContext.Provider>
  );
}

// خطاف مخصص لاستدعاء أدوات RUM بسهولة في أي شاشة
export function useRUM() {
  // قراءة سياق المراقبة
  const context = useContext(RUMContext);
  // التأكد من استدعاء الخطاف داخل المزود الخاص به
  if (!context) {
    throw new Error('يجب استخدام useRUM داخل RUMProvider حصراً.');
  }
  // إرجاع كائن التتبع
  return context;
}`,
      outputExplanation: "يقوم كود المزود بتهيئة معرف جلسة فريد لكل مستخدم، وتتبع زمن تحميل كل صفحة، ومراقبة خيط المعالجة الرئيسي للمتصفح عبر PerformanceObserver لاكتشاف أي عمليات برمجية تجمد الواجهة لأكثر من 50ms، ثم إرسال هذه القياسات المجمعة فوراً عبر تقنية navigator.sendBeacon الخفيفة دون أي تأثير على سرعة تجاوب التطبيق.",
      commonMistakes: [
        {
          mistake: "إرسال طلبات RUM عبر fetch تقليدي داخل معالج إلغاء تركيب المكون عند مغادرة الصفحة.",
          why: "المتصفحات تلغي طلبات fetch العادية فوراً إذا قام المستخدم بإغلاق النافذة أو الانتقال لموقع آخر، مما يسبب فقدان 30% إلى 50% من بيانات الجلسات الختامية.",
          fix: "استخدم دائماً navigator.sendBeacon() أو فعّل خيار keepalive: true في خيارات دالة fetch لضمان استمرار الإرسال بعد خروج الزائر."
        },
        {
          mistake: "إرسال تقرير تحليلي منفصل مع كل ضغطة زر أو حدث صغير جداً.",
          why: "إغراق شبكة المتصفح بمئات الطلبات الصغيرة يؤدي لبطء استجابة التطبيق واستهلاك حزمة بيانات هاتف المستخدم دون فائدة ملموسة.",
          fix: "اجمع المقاييس (Batching) في مصفوفة بالذاكرة وأرسلها على دفعات دورية كل 15-30 ثانية أو عند الانتقال بين الصفحات الرئيسية."
        }
      ],
      bestPractices: [
        "استخدم تقنية navigator.sendBeacon لتسجيل مقاييس الخروج وتجنب حظر إغلاق التبويب.",
        "احرص على أخذ عينات عشوائية (Sampling Rate) مثل 10% في التطبيقات الضخمة لتقليل تكلفة استضافة خوادم المقاييس التحليلية.",
        "اربط مقاييس RUM بمعرف الإصدار (Release Version) لاكتشاف أي انخفاض فجائي في سرعة التطبيق بعد التحديثات.",
        "تتبع مواصفات أجهزة المستخدمين (الذاكرة، نوع الاتصال، أبعاد الشاشة) لتفسير أسباب التباين في سرعة الأداء."
      ],
      visualInfographic: {
        title: "هندسة Real User Monitoring (RUM) في React",
        description: "مخطط يوضح تدفق جمع بيانات الأداء الحية من متصفحات المستخدمين ونقلها إلى لوحة التحليلات المركزية",
        visualSteps: [
          "تفاعل المستخدم الحي 📱 (جهاز حقيقي بشبكة متقلبة)",
          "التقاط الأحداث والمؤشرات عبر Web APIs ⏱️ (PerformanceObserver & sendBeacon)",
          "تجميع المقاييس في الذاكرة 📦 (Batching & Sampling Engine)",
          "إرسال الحزم غير المعطل للشبكة 🚀 (Background Beacon Transmission)",
          "لوحة المراقبة الرسومية 📊 (توزيع زمن الاستجابة حسب البلد ونوع الجهاز)"
        ]
      }
    },
    {
      id: "29.2.b",
      title: "جمع وقياس Web Vitals (LCP, INP, CLS)",
      englishTerm: {
        term: "Core Web Vitals",
        pronunciation: "كور ويب فايتالز",
        meaning: "مؤشرات أداء الويب الحيوية الأساسية المعتمدة من Google"
      },
      description: "مؤشرات Core Web Vitals هي مجموعة من المعايير القياسية العالمية التي وضعتها شركة Google لتقييم الجودة الحقيقية لتجربة المستخدم على الويب بدقة بالغة. تتألف هذه المعايير من ثلاثة مؤشرات محورية: 1) مؤشر LCP (Largest Contentful Paint) الذي يقيس سرعة تحميل وظهور أكبر عنصر محتوى مرئي في الشاشة (مثل الصورة الرئيسية أو كتلة النص الأساسية) ويجب أن يقل عن 2.5 ثانية؛ 2) مؤشر INP (Interaction to Next Paint) الذي أصبح المعيار الرسمي لاستجابة وتفاعل الواجهة عند النقر أو الكتابة ويجب أن يقل عن 200 مللي ثانية؛ 3) مؤشر CLS (Cumulative Layout Shift) الذي يقيس الاستقرار البصري ومقدار القفزات المزعجة في تخطيط الصفحة ويجب أن يقل عن 0.1. تتيح حزمة web-vitals الرسمية دمج هذه القياسات بسلاسة داخل تطبيقات React.",
      realWorldAnalogy: "تشبه مؤشرات الويب الحيوية الفحص الطبي الشامل للعلامات الحيوية للإنسان (ضغط الدم، النبض، ودرجة الحرارة)؛ فإذا كانت العلامات الثلاث طبيعية يتمتع الجسم بصحة مثالية؛ كذلك LCP وINP وCLS هي المؤشرات التي تثبت أن تطبيق React رشيق، مستقر بصرياً، وسريع الاستجابة لنقرات زواره.",
      whyItMatters: "تعد Core Web Vitals المعيار الأول الذي تعتمد عليه Google في ترتيب نتائج البحث (SEO Ranking) ومعدل رضا الزوار. المواقع التي تحقق نتائج خضراء في هذه المؤشرات تسجل انخفاضاً هائلاً في معدلات الارتداد بنسبة تفوق 24%، وارتفاعاً ملحوظاً في المبيعات وتفاعل الزوار؛ بينما التطبيقات ذات المؤشرات المتدنية تفقد ترتيبها في محركات البحث وينفر زوارها بسبب بطء الاستجابة والقفزات المربكة.",
      syntax: "// تثبيت الحزمة الرسمية: npm install web-vitals\nimport { onLCP, onINP, onCLS } from 'web-vitals';\n\nonLCP(console.log);\nonINP(console.log);\nonCLS(console.log);",
      simpleExample: `// قياس وتسجيل مؤشرات Core Web Vitals الأساسية في تطبيق React
import { useEffect } from 'react';
// استيراد دوال قياس المؤشرات الحيوية من المكتبة الرسمية
import { onCLS, onINP, onLCP } from 'web-vitals';

// مكون مخصص لمراقبة وتسجيل المؤشرات الثلاثة المعتمدة
export function WebVitalsMonitor() {
  // استخدام useEffect لتسجيل مستمعي المؤشرات عند بدء تشغيل التطبيق
  useEffect(() => {
    // دالة مساعدة لمعالجة وطباعة المؤشر المستلم
    const sendMetricToBackend = (metric) => {
      // تفكيك خصائص المؤشر الحيوي
      const { name, value, rating } = metric;
      // طباعة النتيجة في الطرفية لمساعدة المطور
      console.log(\`[Web-Vitals] \${name}: \${value.toFixed(2)} (التقييم: \${rating})\`);
      
      // إرسال المؤشر لخادم المراقبة
      navigator.sendBeacon('/analytics/vitals', JSON.stringify({
        metricName: name,
        metricValue: value,
        evaluation: rating,
        url: window.location.pathname
      }));
    };

    // الاستماع لمؤشر سرعة تحميل أكبر محتوى مرئي
    onLCP(sendMetricToBackend);
    // الاستماع لمؤشر سرعة الاستجابة للنقر والتفاعل
    onINP(sendMetricToBackend);
    // الاستماع لمؤشر ثبات وتوازن تخطيط الصفحة
    onCLS(sendMetricToBackend);
  }, []);

  // المكون غير مرئي ويعمل في الخلفية فقط
  return null;
}`,
      advancedExample: `// شاشة تفاعلية كاملة لمراقبة وعرض مقاييس Core Web Vitals مع تقييم ملون ولحظي
import React, { useState, useEffect } from 'react';
// استيراد دوال جمع المقاييس الحيوية الأساسية والإضافية
import { onLCP, onINP, onCLS, onFCP, onTTFB } from 'web-vitals';

// مكون لوحة شرف مؤشرات الويب الحيوية في React
export function WebVitalsDashboard() {
  // حالة لتخزين المقاييس الحيوية المجمعة في الجلسة الحالية
  const [metrics, setMetrics] = useState({
    LCP: null,
    INP: null,
    CLS: null,
    FCP: null,
    TTFB: null
  });

  // تسجيل المستمعين لجميع مؤشرات جوجل الحيوية عند التركيب
  useEffect(() => {
    // دالة لتحديث حالة المقياس وإدراجه في لوحة المراقبة
    const handleMetric = (metric) => {
      // تحديث الحالة بحسب اسم المقياس الوارد
      setMetrics((prev) => ({
        ...prev,
        [metric.name]: {
          value: metric.value,
          rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
          delta: metric.delta,
          id: metric.id
        }
      }));
    };

    // الاستماع لمؤشرات الأداء الأساسية
    onLCP(handleMetric);
    onINP(handleMetric);
    onCLS(handleMetric);
    // الاستماع للمؤشرات المساندة لتشخيص المشكلات
    onFCP(handleMetric);
    onTTFB(handleMetric);
  }, []);

  // دالة مساعدة لتحديد لون التقييم وفق معايير جوجل
  const getBadgeStyle = (rating) => {
    // إذا كان التقييم ممتاز
    if (rating === 'good') return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
    // إذا كان التقييم يحتاج تحسين
    if (rating === 'needs-improvement') return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
    // إذا كان التقييم ضعيفاً
    if (rating === 'poor') return 'bg-rose-500/20 text-rose-400 border-rose-500/40';
    // الحالة الافتراضية أثناء الانتظار
    return 'bg-slate-800 text-slate-400 border-slate-700';
  };

  // إرجاع واجهة بطاقات المؤشرات الحيوية
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl mx-auto shadow-2xl">
      {/* عنوان لوحة القياسات */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">مؤشرات Core Web Vitals اللحظية</h2>
          <p className="text-xs text-slate-400 mt-1">المعايير المعتمدة لتقييم تجربة تصفح المستخدم وتصنيف محركات البحث</p>
        </div>
        <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs rounded-full font-mono">
          Google Standard 2026
        </span>
      </div>

      {/* شبكة بطاقات المقاييس */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* بطاقة قياس LCP */}
        <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-slate-400">Largest Contentful Paint</span>
              <span className="text-xs font-mono font-bold text-cyan-400">LCP</span>
            </div>
            <div className="text-2xl font-black text-white font-mono">
              {metrics.LCP ? \`\${(metrics.LCP.value / 1000).toFixed(2)} ثانية\` : 'بانتظار العرض...'}
            </div>
            <p className="text-xs text-slate-400 mt-2">الهدف المثالي: أقل من 2.5 ثانية</p>
          </div>
          <div className="mt-4">
            <span className={\`text-xs px-2.5 py-1 rounded-md border font-medium inline-block \${getBadgeStyle(metrics.LCP?.rating)}\`}>
              {metrics.LCP ? metrics.LCP.rating.toUpperCase() : 'قيد القياس'}
            </span>
          </div>
        </div>

        {/* بطاقة قياس INP */}
        <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-slate-400">Interaction to Next Paint</span>
              <span className="text-xs font-mono font-bold text-violet-400">INP</span>
            </div>
            <div className="text-2xl font-black text-white font-mono">
              {metrics.INP ? \`\${Math.round(metrics.INP.value)} مللي ثانية\` : 'انقر للتفاعل...'}
            </div>
            <p className="text-xs text-slate-400 mt-2">الهدف المثالي: أقل من 200 مللي ثانية</p>
          </div>
          <div className="mt-4">
            <span className={\`text-xs px-2.5 py-1 rounded-md border font-medium inline-block \${getBadgeStyle(metrics.INP?.rating)}\`}>
              {metrics.INP ? metrics.INP.rating.toUpperCase() : 'بانتظار نقرة'}
            </span>
          </div>
        </div>

        {/* بطاقة قياس CLS */}
        <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-slate-400">Cumulative Layout Shift</span>
              <span className="text-xs font-mono font-bold text-amber-400">CLS</span>
            </div>
            <div className="text-2xl font-black text-white font-mono">
              {metrics.CLS ? metrics.CLS.value.toFixed(3) : 'جاري الاحتساب...'}
            </div>
            <p className="text-xs text-slate-400 mt-2">الهدف المثالي: أقل من 0.1</p>
          </div>
          <div className="mt-4">
            <span className={\`text-xs px-2.5 py-1 rounded-md border font-medium inline-block \${getBadgeStyle(metrics.CLS?.rating)}\`}>
              {metrics.CLS ? metrics.CLS.rating.toUpperCase() : 'قيد القياس'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}`,
      outputExplanation: "توفر لوحة المراقبة واجهة متزامنة لحظياً تستمع لأحداث مؤشرات Core Web Vitals المعتمدة عالمياً وتستعرض القيم المسجلة مع إشارات لونية تعكس دقة تصنيف جوجل؛ حيث يتم تقييم LCP عند اكتمال رسم الشاشة، وINP فور تفاعل المستخدم ونقره على أي عنصر، وCLS مع أي تغير غير متوقع في محاذاة وتخطيط العناصر.",
      commonMistakes: [
        {
          mistake: "الاستمرار في قياس مؤشر FID القديم وتجاهل مؤشر INP الحديث.",
          why: "أعلنت Google رسمياً استبدال مؤشر First Input Delay (FID) بمؤشر Interaction to Next Paint (INP) كمعيار رئيسي رسمي لأن FID كان يقيس التأخير الأول فقط بينما INP يقيس استجابة كل التفاعلات طوال مدة زيارة الصفحة.",
          fix: "استخدم دائماً دالة onINP من الإصدار الرابع فما فوق لحزمة web-vitals وتخلص من استخدام onFID نهائياً."
        },
        {
          mistake: "عدم حجز أبعاد محددة (width وheight أو aspect-ratio) للصور والإعلانات والمكونات التي تُجلب بشكل غير متزامن.",
          why: "تحميل الصور أو الصناديق المتأخرة بدون أبعاد مسبقة يدفع المحتوى السفلي للأسفل فجأة، مما يرفع مؤشر CLS ويتسبب في تجربة استخدام سيئة وعقوبة في ترتيب محركات البحث.",
          fix: "حدد دائماً أبعاد العناصر مسبقاً أو استخدم حاويات الهياكل العظمية (Skeleton Loaders) لحجز المساحة ومنع القفزات البصرية."
        }
      ],
      bestPractices: [
        "استخدم ميزة reportAllChanges: false (الافتراضية) لتسجيل القيمة النهائية الأكثر دقة لكل مقياس عند انتهاء الجلسة.",
        "قسّم مستويات الأداء إلى مئينات (Percentiles) وتحديداً 75th percentile (p75) لتقييم تجربة الغالبية العظمى من زوارك.",
        "قلل حجم حزم JavaScript المبدئية واعتمد على التحميل الكسول (Lazy Loading) لتحسين مقياس LCP بشكل جذري.",
        "تجنب تنفيذ عمليات حسابية معقدة ومتزامنة في معالجات الأحداث (onClick) لحماية مقياس INP من التدهور."
      ],
      visualInfographic: {
        title: "المؤشرات الحيوية الثلاثة Core Web Vitals",
        description: "مقارنة بصرية بين مؤشرات جوجل الحيوية الثلاثة وحدود الأداء المثالية لكل منها",
        visualSteps: [
          "LCP 🖼️ (سرعة تحميل أكبر كتلة مرئية - الهدف: أقل من 2.5 ثانية)",
          "INP ⚡ (سرعة استجابة الشاشة بعد أي تفاعل - الهدف: أقل من 200 مللي ثانية)",
          "CLS 📐 (الاستقرار البصري وثبات تخطيط الشاشة - الهدف: أقل من 0.1)",
          "التصنيف الثلاثي 🚦 (Good أخضر | Needs Improvement أصفر | Poor أحمر)"
        ]
      }
    },
    {
      id: "29.2.c",
      title: "تحليل أوقات تحميل الصفحات (Navigation Timing API)",
      englishTerm: {
        term: "Page Load Timing & Navigation API",
        pronunciation: "بيج لود تايمنغ آند نافيجيشن إيه بي آي",
        meaning: "تحليل مراحل التحميل الدقيقة وزمن وصول أول بايت من الخادم"
      },
      description: "توفر واجهة برمجة تطبيقات التنقل Navigation Timing API للمطورين وصولاً برمجياً دقيقاً ومفصلاً إلى كل مليمتر زمني يمر به طلب الصفحة منذ اللحظة الأولى التي يضغط فيها المستخدم Enter على شريط العنوان، مروراً بمراحل استعلام DNS، إتمام مصافحة TCP وتأمين اتصال TLS/SSL، وزمن استجابة الخادم وصولاً لأول بايت (Time to First Byte - TTFB)، وحتى اكتمال تنزيل مستند HTML ومعالجة شجرة DOM وبدء تنفيذ حزم JavaScript وتصيير أول بكسل مرئي (First Contentful Paint - FCP). تتيح هذه البيانات لمهندسي React التمييز بدقة بين بطء البنية التحتية للخوادم والشبكة (Server/Network Bottlenecks) وبين بطء معالجة حزم الجافاسكريبت داخل المتصفح (Client-side Overhead).",
      realWorldAnalogy: "تشبه Navigation Timing API بوليصة تتبع الشحن المفصلة التي تسجل وقت خروج الطرد من المستودع، وقت وصوله إلى مطار التصدير، وقت إتمام إجراءات الجمارك، ووقت تسليمه لمندوب التوصيل النهائي؛ فإذا حدث تأخير، تعرف بالضبط في أي محطة توقف الشحن دون أي تخمين.",
      whyItMatters: "بدون تفكيك مراحل التحميل، يتهم المطورون كود React ظلماً عند بطء الصفحة، بينما قد يكون السبب الحقيقي تأخر استعلام DNS أو بطء استجابة خادم التخزين السحابي (High TTFB). معرفة تفاصيل Navigation Timing توجه الفريق نحو الحل الصحيح: هل نحتاج لتفعيل Edge Caching؟ أم ضغط حزم البناء؟ أم تحسين أداء استعلامات قواعد البيانات في الخادم؟",
      syntax: "// قراءة مقاييس التنقل الرسمية للمتصفح\nconst [navigationTiming] = performance.getEntriesByType('navigation');\nconst ttfb = navigationTiming.responseStart - navigationTiming.requestStart;\nconst domLoad = navigationTiming.domContentLoadedEventEnd - navigationTiming.startTime;",
      simpleExample: `// استخراج أوقات مراحل التحميل الأساسية وتحليل TTFB في React
import React, { useEffect } from 'react';

// مكون لاستخراج ونشر أوقات التنقل الحيوية
export function NavigationTimingTracker() {
  // استخدام useEffect لقراءة قياسات المتصفح بعد اكتمال التحميل
  useEffect(() => {
    // التأكد من توفر نافذة performance ومدخلات التنقل
    const navEntries = performance.getEntriesByType('navigation');
    
    // فحص توفر بيانات التنقل
    if (navEntries.length > 0) {
      // الحصول على السجل الأول الخاص بالتنقل الحالي
      const nav = navEntries[0];
      
      // حساب زمن وصول أول بايت من الخادم (TTFB)
      const ttfb = Math.round(nav.responseStart - nav.requestStart);
      // حساب زمن معالجة وتجهيز شجرة DOM
      const domProcessing = Math.round(nav.domComplete - nav.responseEnd);
      // حساب إجمالي وقت إتمام تحميل الصفحة كاملاً
      const totalLoadTime = Math.round(nav.loadEventEnd - nav.startTime);

      // طباعة التقرير الشامل في الطرفية
      console.log('--- تقرير مراحل تحميل الصفحة ---');
      console.log(\`زمن أول بايت من الخادم (TTFB): \${ttfb}ms\`);
      console.log(\`زمن تجهيز مستند DOM: \${domProcessing}ms\`);
      console.log(\`إجمالي وقت التحميل الكامل: \${totalLoadTime}ms\`);
    }
  }, []);

  // المكون يؤدي وظيفته برمجياً
  return null;
}`,
      advancedExample: `// خطاف مخصص ومحلل متقدم لمراحل تحميل الصفحة (Deep Navigation Profiler)
import React, { useState, useEffect } from 'react';

// خطاف مخصص لاستخراج وتفكيك كامل أطوار Navigation Timing API
export function useNavigationProfiler() {
  // حالة لحفظ تفاصيل كل مرحلة من مراحل التحميل
  const [timingBreakdown, setTimingBreakdown] = useState(null);

  // تنفيذ القياس بعد اكتمال نافذة window.load
  useEffect(() => {
    // دالة لاستخراج وحساب فروق الأوقات الزمنية
    const analyzeNavigation = () => {
      // جلب سجلات التنقل
      const entries = performance.getEntriesByType('navigation');
      // التحقق من وجود السجل واكتمال مرحلة loadEventEnd
      if (!entries || entries.length === 0) return;
      
      // استخراج مدخل التنقل الرئيسي
      const nav = entries[0];
      
      // إذا لم يكتمل حدث التحميل بعد، ننتظر لحظة
      if (nav.loadEventEnd === 0) {
        setTimeout(analyzeNavigation, 100);
        return;
      }

      // بناء هيكل التحليل الزمني الدقيق بالمللي ثانية
      const breakdown = {
        // وقت البحث في عناوين النطاقات
        dnsLookup: Math.max(0, Math.round(nav.domainLookupEnd - nav.domainLookupStart)),
        // وقت مصافحة الاتصال وتشفير SSL
        tcpHandshake: Math.max(0, Math.round(nav.connectEnd - nav.connectStart)),
        // زمن استجابة الخادم وإرسال أول بايت
        timeToFirstByte: Math.max(0, Math.round(nav.responseStart - nav.requestStart)),
        // وقت تنزيل ملف HTML كاملاً عبر الشبكة
        contentDownload: Math.max(0, Math.round(nav.responseEnd - nav.responseStart)),
        // وقت تحليل الـ HTML وبناء شجرة DOM والتنفيذ المبدئي
        domParsing: Math.max(0, Math.round(nav.domInteractive - nav.responseEnd)),
        // وقت تنزيل وتنفيذ الموارد التابعة وسكربتات React
        resourceHandling: Math.max(0, Math.round(nav.domComplete - nav.domInteractive)),
        // الزمن الإجمالي منذ بدء التنقل وحتى جاهزية الصفحة الكاملة
        totalDuration: Math.round(nav.loadEventEnd - nav.startTime),
        // نوع التنقل: تنقل عادي، إعادة تحميل، أو انتقال للأمام/الخلف
        navigationType: nav.type
      };

      // تحديث الحالة بالبيانات المفصلة
      setTimingBreakdown(breakdown);
    };

    // التحقق مما إذا كانت الصفحة قد أكملت التحميل مسبقاً
    if (document.readyState === 'complete') {
      analyzeNavigation();
    } else {
      // الاستماع لحدث اكتمال التحميل
      window.addEventListener('load', analyzeNavigation);
      return () => window.removeEventListener('load', analyzeNavigation);
    }
  }, []);

  // إرجاع نتائج التحليل الزمني
  return timingBreakdown;
}

// مكون مرئي يعرض تفكيك مراحل تحميل الصفحة بشكل رسومي أنيق
export function PageTimingVisualizer() {
  // استدعاء الخطاف المخصص
  const timing = useNavigationProfiler();

  // في حال كانت الصفحة لا تزال تكمل تحميل الموارد
  if (!timing) {
    return (
      <div className="p-4 bg-slate-900 text-slate-400 rounded-xl text-center text-sm">
        جاري رصد مراحل تحميل الصفحة وحساب أزمنة الاتصال...
      </div>
    );
  }

  // مصفوفة المراحل للعرض المرئي المتسلسل
  const stages = [
    { label: 'استعلام DNS', time: timing.dnsLookup, color: 'bg-blue-500' },
    { label: 'مصافحة TCP / TLS', time: timing.tcpHandshake, color: 'bg-indigo-500' },
    { label: 'استجابة الخادم (TTFB)', time: timing.timeToFirstByte, color: 'bg-amber-500' },
    { label: 'تنزيل مستند HTML', time: timing.contentDownload, color: 'bg-emerald-500' },
    { label: 'بناء DOM المبدئي', time: timing.domParsing, color: 'bg-cyan-500' },
    { label: 'تنفيذ سكربتات React', time: timing.resourceHandling, color: 'bg-purple-500' },
  ];

  // إرجاع واجهة العرض الرسومية للمراحل
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-xl">
      {/* عنوان العرض ونوع التنقل */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">تفكيك مراحل تحميل الصفحة (Waterfall)</h3>
          <p className="text-xs text-slate-400 mt-1">البيانات مستخرجة بدقة متناهية من Navigation Timing API</p>
        </div>
        <span className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">
          نوع التنقل: {timing.navigationType}
        </span>
      </div>

      {/* شريط الإجمالي الزمني */}
      <div className="mb-6 p-4 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
        <span className="text-sm font-semibold text-slate-300">إجمالي زمن التحميل الكلي:</span>
        <span className="text-xl font-black text-emerald-400 font-mono">{timing.totalDuration} ms</span>
      </div>

      {/* قائمة المراحل الزمنية المفككة */}
      <div className="space-y-3">
        {stages.map((stage, idx) => (
          <div key={idx} className="bg-slate-950/40 p-3 rounded-lg border border-slate-800/80">
            <div className="flex justify-between text-xs font-medium mb-1">
              <span className="text-slate-300">{stage.label}</span>
              <span className="font-mono text-slate-400">{stage.time} ms</span>
            </div>
            {/* شريط بياني نسبي */}
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className={\`h-full rounded-full \${stage.color}\`}
                style={{ width: \`\${Math.min(100, Math.max(4, (stage.time / timing.totalDuration) * 100))}%\` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوفر الخطاف المخصص تحليلاً مفصلاً لمسار التحميل (Waterfall) مقسماً بالمللي ثانية: من استعلام النطاق ومصافحة الاتصال، إلى زمن وصول أول بايت (TTFB)، ثم تنزيل ملف الـ HTML وتجهيز شجرة العناصر وصولاً إلى وقت تنفيذ سكربتات وحزم React وإتمام التفاعل التام.",
      commonMistakes: [
        {
          mistake: "محاولة قراءة كائن performance.timing القديم وغير المعياري (Deprecated).",
          why: "واجهة performance.timing القديمة أصبحت غير معتمدة وتعطي قياسات تفتقر للدقة العالية كما أنها محذوفة من المتصفحات الحديثة.",
          fix: "استخدم دائماً performance.getEntriesByType('navigation')[0] وفق المعيار الأحدث Navigation Timing Level 2."
        },
        {
          mistake: "قراءة مقاييس التنقل فور تحميل المكون المبدئي قبل إطلاق حدث window.load.",
          why: "قبل اكتمال تحميل جميع الموارد التابعة للصفحة، تكون قيم مثل loadEventEnd مساوية لصفر، مما يفسد دقة الحسابات الإجمالية.",
          fix: "انتظر حدث 'load' على كائن window أو تأكد من أن document.readyState === 'complete' قبل حساب أوقات التحميل الشاملة."
        }
      ],
      bestPractices: [
        "راقب معدل TTFB بعناية؛ إذا زاد عن 600ms، فهذا مؤشر قاطع على بطء الخادم الخلفي أو غياب التخزين المؤقت CDN وليس بطء React.",
        "استبعد الزيارات الناتجة عن ميزة prerender أو bfcache (Back/Forward Cache) لأن أزمنتها تكون شبه صفرية وتشوه المتوسطات الحسابية.",
        "أرسل مقاييس أوقات التنقل مجمعة مع تفاصيل البلد وشبكة الاتصال لعزل مشاكل البنية التحتية الإقليمية.",
        "قارن بين أزمنة التنقل الأول (Hard Navigation) وأزمنة الانتقال بين صفحات الـ SPA الداخلية (Client-side Navigation)."
      ],
      visualInfographic: {
        title: "مخطط شلال مراحل التحميل (Navigation Timing)",
        description: "مراحل رحلة طلب الصفحة من المتصفح إلى الخادم وحتى جاهزية واجهة React",
        visualSteps: [
          "طلب العنوان 🌐 (بداية التنقل Navigation Start)",
          "استعلام DNS ومصافحة TCP 🔌 (تأسيس الاتصال الآمن TLS)",
          "انتظار أول بايت TTFB ⏱️ (معالجة الخادم وإرسال الاستجابة)",
          "تنزيل HTML وبناء DOM 📄 (تحليل هيكل المستند)",
          "تنفيذ حزم React ⚛️ (ترطيب المكونات وجاهزية التفاعل Load Complete)"
        ]
      }
    },
    {
      id: "29.2.d",
      title: "مراقبة وتتبع طلبات API (API Latency & Tracing)",
      englishTerm: {
        term: "API Latency & Tracing",
        pronunciation: "إيه بي آي ليتينسي آند تريسنغ",
        meaning: "قياس زمن استجابة واجهات البرمجة الخلفية وتتبع مسارها"
      },
      description: "تمثل طلبات واجهات البرمجة (HTTP API Calls) شريان الحياة في أي تطبيق React تفاعلي؛ حيث يعتمد جلب بيانات المستخدم، المنتجات، والعمليات المالية على هذه الشبكة الخلفية. تتضمن مراقبة وتتبع طلبات API قياس المدة الزمنية الدقيقة (Latency) لكل استدعاء شبكي، تسجيل رموز الاستجابة (Status Codes مثل 200 و404 و500)، رصد أحجام الحمولات المستلمة والمُرسلة، وربط كل طلب بمعرف تتبع موحد (Trace ID / Request Correlation ID). يتيح لك هذا التتبع الربط بين نقرة المستخدم في واجهة React والمسار البرمجي الذي تم تنفيذه في الخدمات الخلفية (Microservices)، مما يضمن الكشف الفوري عن أي استعلامات بطيئة أو نقاط اختناق في خوادم التطبيق.",
      realWorldAnalogy: "تشبه مراقبة طلبات API وتتبعها برقم التتبع البريدي الدولي الذي يطبع على الطرد؛ فإذا تأخر وصول الشحنة، يمكنك برقم التتبع معرفة المطار، مكتب الفرز، أو شاحنة التوصيل المسؤولة عن التأخير بدقة لا تحتمل الجدل.",
      whyItMatters: "غالباً ما يشتكي المستخدمون من بطء تطبيق React قائلين: 'الموقع يعلق!' بينما في الواقع، يكون كود واجهة React قد نفذ عمليته في 5 مللي ثانية فقط ولكن طلب API الخلفي لجلب قائمة المنتجات استغرق 6 ثوان كاملة في قاعدة البيانات. بدون تتبع دقيق لـ API Latency، يضيع وقت مطوري الواجهات في تحسينات وهمية بينما تكمن العلة الأساسية في الخادم الخلفي.",
      syntax: "// إضافة قاطع (Interceptor) لقياس زمن الاستجابة في Axios أو Fetch\nconst startTime = performance.now();\nconst response = await fetch('/api/data');\nconst duration = performance.now() - startTime;\nconsole.log(`استغرق الطلب: ${duration.toFixed(2)}ms`);",
      simpleExample: `// مغلف طلبات Fetch مخصص لقياس أزمنة استجابة API وتنبيه المطور بالطلبات البطيئة
import React, { useState } from 'react';

// دالة جلب بيانات ذكية مزودة بمؤقت زمني وتتبع للأداء
export async function measuredFetch(url, options = {}) {
  // تسجيل لحظة بدء إرسال الطلب
  const startTimestamp = performance.now();
  
  try {
    // تنفيذ استدعاء الشبكة الأصلي
    const response = await fetch(url, options);
    // حساب المدة المستغرقة بالمللي ثانية
    const duration = Math.round(performance.now() - startTimestamp);

    // إذا تجاوز الطلب حاجز الثانيتين يتم تسجيله كطلب بطيء جداً
    if (duration > 2000) {
      console.warn(\`⚠️ تحذير: استدعاء بطيء لـ \${url} استغرق \${duration}ms\`);
    }

    // إرسال قياس زمن استجابة الـ API إلى خدمة المراقبة
    navigator.sendBeacon('/analytics/api-timing', JSON.stringify({
      endpoint: url,
      durationMs: duration,
      status: response.status,
      timestamp: new Date().toISOString()
    }));

    // إرجاع الاستجابة الأصلية
    return response;
  } catch (error) {
    // في حال فشل الاتصال بالشبكة تماماً
    const duration = Math.round(performance.now() - startTimestamp);
    console.error(\`❌ فشل الطلب الشبكي لـ \${url} بعد \${duration}ms:\`, error);
    throw error;
  }
}

// مكون تجريبي لاستدعاء API وقياس الأداء
export function APITrackerDemo() {
  // حالة لعرض وقت الاستجابة للمستخدم
  const [latency, setLatency] = useState(null);

  // دالة لتنفيذ الطلب وتحديث الواجهة
  const handleFetchData = async () => {
    const start = performance.now();
    await measuredFetch('https://jsonplaceholder.typicode.com/posts/1');
    setLatency(Math.round(performance.now() - start));
  };

  // إرجاع الواجهة التفاعلية
  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white">
      <button 
        onClick={handleFetchData}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-semibold transition"
      >
        اختبار طلب API وقياس زمن الاستجابة
      </button>
      {latency && (
        <p className="mt-3 text-sm text-emerald-400">
          اكتمل الطلب بنجاح خلال: <span className="font-mono font-bold">{latency} ms</span>
        </p>
      )}
    </div>
  );
}`,
      advancedExample: `// نظام متكامل لاعتراض وتتبع ومراقبة طلبات API وتوليد معرفات التتبع (Distributed Tracing Client)
import React, { useState } from 'react';

// فئة مخصصة لإدارة شبكة الـ API مع نظام تتبع موزّع ومراقبة دقيقة
class MonitoredApiClient {
  constructor(baseUrl, reportingUrl) {
    // عنوان الخادم الأساسي
    this.baseUrl = baseUrl;
    // عنوان خادم تلقي تقارير الأداء
    this.reportingUrl = reportingUrl;
  }

  // دالة تنفيذ طلبات الشبكة مع حقن ترويسات التتبع وقياس الحمولات
  async request(endpoint, options = {}) {
    // توليد معرف تتبع فريد موحد لهذا الطلب (Trace ID)
    const traceId = crypto.randomUUID();
    // التقاط وقت بداية الطلب بدقة متناهية
    const startTime = performance.now();
    // تكوين الرابط الكامل
    const fullUrl = \`\${this.baseUrl}\${endpoint}\`;

    // دمج ترويسات التتبع الموزع (W3C Trace Context)
    const headers = {
      'Content-Type': 'application/json',
      'X-Trace-ID': traceId,
      'traceparent': \`00-\${traceId.replace(/-/g, '')}-0000000000000001-01\`,
      ...(options.headers || {})
    };

    // كائن تقرير الأداء المبدئي
    const traceReport = {
      traceId: traceId,
      endpoint: endpoint,
      method: options.method || 'GET',
      startTimeIso: new Date().toISOString(),
      durationMs: 0,
      statusCode: 0,
      success: false,
      payloadSizeBytes: 0
    };

    try {
      // تنفيذ استدعاء الشبكة الفعلي
      const response = await fetch(fullUrl, { ...options, headers });
      
      // احتساب المدة المنقضية
      traceReport.durationMs = Math.round(performance.now() - startTime);
      traceReport.statusCode = response.status;
      traceReport.success = response.ok;

      // قراءة حجم المحتوى المستلم من الترويسات إن وجد
      const contentLength = response.headers.get('content-length');
      if (contentLength) {
        traceReport.payloadSizeBytes = parseInt(contentLength, 10);
      }

      // إرسال تقرير التتبع إلى خادم المراقبة في الخلفية
      this.sendTrace(traceReport);

      // إذا كان الطلب غير ناجح برمجياً (مثلاً 500 أو 404)
      if (!response.ok) {
        throw new Error(\`فشل طلب API برمز الحالة: \${response.status}\`);
      }

      // إرجاع البيانات المحلولة بتنسيق JSON
      return await response.json();
    } catch (error) {
      // احتساب المدة حتى لحظة الفشل
      traceReport.durationMs = Math.round(performance.now() - startTime);
      traceReport.errorMessage = error.message;
      traceReport.success = false;

      // إرسال تقرير الفشل أيضاً
      this.sendTrace(traceReport);
      // إعادة رمي الخطأ للتعامل معه في واجهة React
      throw error;
    }
  }

  // إرسال تقارير التتبع الشبكي دون تعطيل واجهة المستخدم
  sendTrace(report) {
    // التأكد من توفر خاصية sendBeacon أو استدعاء fetch خفيف
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(report)], { type: 'application/json' });
      navigator.sendBeacon(this.reportingUrl, blob);
    }
  }
}

// تهيئة عميل الـ API التتبعي
const apiClient = new MonitoredApiClient('https://dummyjson.com', '/analytics/traces');

// مكون استعراض سجل تتبع مكالمات الـ API
export function APITracingMonitor() {
  // حالة لتخزين سجل الطلبات الأخيرة
  const [logs, setLogs] = useState([]);
  // حالة تفعيل مؤشر التحميل
  const [loading, setLoading] = useState(false);

  // استدعاء تجريبي لواجهة برمجة سريعة
  const handleFastCall = async () => {
    setLoading(true);
    const start = performance.now();
    try {
      const data = await apiClient.request('/products/1');
      const time = Math.round(performance.now() - start);
      setLogs((prev) => [
        { id: crypto.randomUUID(), name: 'جلب منتج مفرد (سريع)', duration: time, status: 200, isSlow: false },
        ...prev
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // استدعاء تجريبي يحاكي طلباً معقداً
  const handleSlowCall = async () => {
    setLoading(true);
    const start = performance.now();
    try {
      // استدعاء مسار محاكاة التأخير لـ 1.5 ثانية
      const data = await apiClient.request('/products?delay=1500&limit=30');
      const time = Math.round(performance.now() - start);
      setLogs((prev) => [
        { id: crypto.randomUUID(), name: 'جلب 30 منتج مع تأخير مصطنع', duration: time, status: 200, isSlow: true },
        ...prev
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // إرجاع واجهة عرض سجلات تتبع الـ API
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">تتبع زمن استجابة واجهات البرمجة (Distributed Tracing)</h3>
          <p className="text-xs text-slate-400 mt-1">حقن معرفات X-Trace-ID ومراقبة زمن الاستجابة لكل نقطة نهاية</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleFastCall}
            disabled={loading}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition disabled:opacity-50"
          >
            طلب عادي
          </button>
          <button 
            onClick={handleSlowCall}
            disabled={loading}
            className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-lg transition disabled:opacity-50"
          >
            طلب بطيء
          </button>
        </div>
      </div>

      {/* جدول عرض سجلات الطلبات */}
      <div className="space-y-2">
        {logs.length === 0 ? (
          <p className="text-center text-xs text-slate-500 py-6">لم يتم تنفيذ أي طلبات شبكية بعد. اضغط الأزرار أعلاه لتجربة التتبع.</p>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-sm font-semibold text-slate-200 block">{log.name}</span>
                <span className="text-xs text-slate-500 font-mono">رمز الاستجابة: {log.status}</span>
              </div>
              <div className="text-right">
                <span className={\`text-sm font-mono font-bold \${log.isSlow ? 'text-amber-400' : 'text-emerald-400'}\`}>
                  {log.duration} ms
                </span>
                <span className={\`block text-[10px] font-bold px-2 py-0.5 rounded mt-1 \${log.isSlow ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'}\`}>
                  {log.isSlow ? 'طلب بطيء' : 'استجابة مثالية'}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح المثال المتقدم كيفية إنشاء عميل API مركزي يعترض جميع الاستدعاءات، ويولد ترويسة تتبع موحدة (X-Trace-ID)، ويقيس بدقة متناهية أزمنة الاستجابة وأحجام الحزم المستلمة ورموز الحالة، ثم يرسل تقارير الأداء تلقائياً في الخلفية مع تنبيه الفريق فور تجاوز الطلب للحدود المسموح بها.",
      commonMistakes: [
        {
          mistake: "تضمين حمولات الطلبات الحساسة (مثل كلمات المرور أو أرقام البطاقات الائتمانية) داخل تقارير تتبع الـ API.",
          why: "تسجيل بيانات المستخدمين الحساسة (PII) في سجلات التتبع يمثل خرقاً فادحاً لخصوصية العملاء وقوانين أمن المعلومات العالمية.",
          fix: "سجل فقط البيانات الوصفية (Metadata) مثل رابط نقطة النهاية، رمز الحالة، زمن الاستجابة، وحجم الحزمة، وتجنب تسجيل محتوى body للطلبات الحساسة نهائياً."
        },
        {
          mistake: "استخدام مسار كامل متغير (مثل /users/123/orders/456) كاسم لنقطة النهاية عند تجميع الإحصائيات.",
          why: "تضمين المعرفات المتغيرة ينشئ ملايين المسارات الفريدة، مما يجعل تجميع متوسطات زمن الاستجابة مستحيلاً في لوحة المراقبة.",
          fix: "استبدل المعرفات الرقمية أو الـ UUID بقالب موحد مثل /users/:id/orders/:orderId قبل إرسال المقياس."
        }
      ],
      bestPractices: [
        "احقن معايير W3C Trace Context (مثل ترويسة traceparent) لتمكين التتبع الموزع بين المتصفح وخوادم الـ Microservices.",
        "حدد حداً زمنياً أقصى (Timeout) لكل طلب شبكي (مثلاً 8 ثوانٍ) لمنع تعليق واجهة React في حالة تعطل الخادم الخلفي.",
        "احرص على مراقبة مؤشر p99 وp95 بدلاً من الاكتفاء بالمتوسط الحسابي البسيط لاكتشاف الحالات الاستثنائية التي يعاني منها بعض المستخدمين.",
        "استخدم تقنيات التخزين المؤقت للطلبات (مثل TanStack Query) لتقليل عدد مكالمات الـ API المكررة وزيادة سرعة الاستجابة."
      ],
      visualInfographic: {
        title: "دورة تتبع مكالمات الـ API الموزعة (Tracing)",
        description: "كيف يتم ربط نقرة الواجهة باستدعاء الشبكة ومسار المعالجة في الخوادم الخلفية",
        visualSteps: [
          "نقرة المستخدم في React 🖱️ (توليد X-Trace-ID فريد)",
          "إرسال الطلب مع الترويسات 📨 (W3C traceparent header)",
          "معالجة الطلب في الخوادم ⚙️ (تسجيل الـ Trace ID في سجلات السيرفر)",
          "استلام الاستجابة في المتصفح ⏱️ (حساب زمن الرحلة بالمللي ثانية)",
          "إرسال تقرير الأداء 📊 (تحليل الطلبات البطيئة ومعدلات الخطأ)"
        ]
      }
    },
    {
      id: "29.2.e",
      title: "تحليل حالات فشل الشبكة ومعدل الأعطال (Network Failures & Crash Rate)",
      englishTerm: {
        term: "Network Failures & Crash Rate",
        pronunciation: "نتورك فيليرز آند كراش ريت",
        meaning: "رصد انقطاع الاتصال وأعطال الشبكة وحساب معدل الجلسات الخالية من الانهيارات"
      },
      description: "في العالم الحقيقي، ليست شبكة الإنترنت سلكاً ثابتاً لا ينقطع أبداً؛ بل تتأرجح اتصالات الهواتف المحمولة في المصاعد والأنفاق والمناطق النائية، وتتعرض الخوادم لانقطاعات مفاجئة أو أخطاء تجاوز المهلة (Timeouts). يتضمن تحليل حالات فشل الشبكة ومعدل الأعطال رصد كل سيناريو يفشل فيه الاتصال بالكامل (Network Offline / DNS Failure / CORS Errors)، وتصنيف هذه الأخطاء، وحساب المقياس الذهبي لجودة البرمجيات: نسبة الجلسات الخالية من الأعطال (Crash-Free Sessions Rate) ونسبة المستخدمين الذين لم يواجهوا أي خطأ كارثي (Crash-Free Users Rate). يتيح هذا التحليل لفريق تطوير React بناء آليات صمود شبكي فائقة تشمل المحاولات التلقائية الذكية (Exponential Backoff Retries) وعرض واجهات بديلة واضحة تحافظ على ولاء العميل.",
      realWorldAnalogy: "يشبه تحليل حالات فشل الشبكة الصندوق الأسود في الطائرات؛ فعندما تواجه الرحلة مطبات هوائية شديدة أو عطلاً مفاجئاً، يسجل الصندوق كل تفصيلة بدقة متناهية ليحدد ما إذا كان العطل ناتجاً عن اضطراب الطقس الخارجي (فشل شبكة الاتصال) أم عن خلل في محركات الطائرة نفسها (أخطاء كود التطبيق الداخلي).",
      whyItMatters: "يعتبر معدل الجلسات الخالية من الأعطال (Crash-Free Rate) المؤشر الأول لتقييم صحة التطبيق لدى الإدارة الهندسية وأصحاب القرار؛ حيث يهدف أي تطبيق عالمي للوصول إلى نسبة لا تقل عن 99.9%. إذا انخفضت هذه النسبة إلى 97%، فهذا يعني أن 3 من كل 100 زائر يواجهون شاشة بيضاء أو فشلاً في إتمام عملياتهم، مما يدمر سمعة المنتج ويتسبب في خسائر مالية فورية.",
      syntax: "// التحقق من حالة الاتصال وحساب معدل الأعطال\nconst isOnline = navigator.onLine;\nconst crashFreeSessionsRate = ((totalSessions - crashedSessions) / totalSessions) * 100;",
      simpleExample: `// مكون للاستماع التلقائي لحالة الشبكة وتحذير المستخدم عند انقطاع الاتصال
import React, { useState, useEffect } from 'react';

// مكون شريط تنبيه الشبكة الحي
export function NetworkStatusBanner() {
  // حالة لمعرفة ما إذا كان المتصفح متصلاً بالإنترنت
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // استخدام useEffect للاستماع لأحداث المتصفح المتعلقة بالشبكة
  useEffect(() => {
    // دالة تحديث الحالة عند عودة الاتصال
    const handleOnline = () => {
      setIsOnline(true);
      console.log('✅ تم استعادة الاتصال بالإنترنت بنجاح.');
    };

    // دالة تحديث الحالة عند انقطاع الاتصال
    const handleOffline = () => {
      setIsOnline(false);
      console.warn('⚠️ انقطع الاتصال بالإنترنت تماماً.');
    };

    // تسجيل المستمعين على كائن window
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // تنظيف المستمعين عند إلغاء التركيب
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // إذا كان المستخدم متصلاً بشكل طبيعي، لا نظهر أي شريط مزعج
  if (isOnline) return null;

  // إرجاع شريط تنبيه بارز باللون الكهرماني
  return (
    <div className="bg-amber-600 text-white text-xs font-bold py-2 px-4 text-center sticky top-0 z-50 shadow-md">
      أنت غير متصل بالإنترنت حالياً. يتم الاحتفاظ بتعديلاتك وسنعيد المزامنة فور عودة الشبكة.
    </div>
  );
}`,
      advancedExample: `// نظام متقدم لمعالجة فشل الشبكة مع إعادة المحاولة الذكية وحساب معدل السلامة (Crash-Free Engine)
import React, { useState } from 'react';

// دالة تنفيذ طلبات شبكية محصنة بخوارزمية إعادة المحاولة المتصاعدة (Exponential Backoff)
export async function resilientFetch(url, options = {}, maxRetries = 3) {
  // تتبع المحاولة الحالية
  let attempt = 0;

  // حلقة المحاولات المتكررة حتى استنفاد الحد الأقصى
  while (attempt < maxRetries) {
    try {
      // التحقق أولاً من أن المتصفح متصل بالشبكة
      if (!navigator.onLine) {
        throw new Error('NETWORK_OFFLINE: لا يوجد اتصال فعلي بالإنترنت.');
      }

      // محاولة تنفيذ استدعاء الشبكة
      const response = await fetch(url, options);

      // في حال كانت حالة الاستجابة تعبر عن خطأ في السيرفر (5xx)
      if (response.status >= 500) {
        throw new Error(\`SERVER_ERROR_\${response.status}\`);
      }

      // إذا نجح الطلب نرجع النتيجة فوراً
      return response;
    } catch (error) {
      // زيادة عداد المحاولات
      attempt++;
      // إذا استنفدنا كل المحاولات المتاحة
      if (attempt >= maxRetries) {
        // تسجيل تقرير فشل الشبكة الكارثي
        navigator.sendBeacon('/analytics/network-crashes', JSON.stringify({
          url: url,
          error: error.message,
          totalAttempts: attempt,
          timestamp: new Date().toISOString()
        }));
        // إعادة رمي الخطأ
        throw error;
      }

      // حساب زمن التأخير المتصاعد مع عنصر عشوائي (Jitter) لتجنب اختناق الخادم
      const delay = Math.pow(2, attempt) * 500 + Math.random() * 200;
      console.warn(\`فشلت المحاولة \${attempt}، إعادة المحاولة بعد \${Math.round(delay)}ms...\`);
      
      // انتظار المدة المحسوبة قبل تكرار المحاولة
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

// مكون تفاعلي لمراقبة أعطال الشبكة وحساب معدل الجلسات الآمنة
export function CrashRateMonitor() {
  // حالة إحصاء الجلسات والأعطال
  const [stats, setStats] = useState({
    totalRequests: 250,
    failedRequests: 2,
    retriedSuccesses: 14
  });
  // حالة إشعار الاختبار
  const [statusMsg, setStatusMsg] = useState('');

  // حساب نسبة السلامة من الأعطال بدقة
  const crashFreeRate = (((stats.totalRequests - stats.failedRequests) / stats.totalRequests) * 100).toFixed(2);

  // تجربة محاكاة طلب فاشل يثير خوارزمية الصمود
  const handleTestFailingNetwork = async () => {
    setStatusMsg('جاري اختبار طلب شبكي متعثر...');
    try {
      // استدعاء رابط غير موجود لمحاكاة الفشل
      await resilientFetch('https://invalid-non-existing-domain-test-123.com/api', {}, 3);
      setStatusMsg('تم الطلب بنجاح');
    } catch (err) {
      // تحديث الإحصائيات برصد الفشل
      setStats((prev) => ({
        ...prev,
        totalRequests: prev.totalRequests + 1,
        failedRequests: prev.failedRequests + 1
      }));
      setStatusMsg('فشلت جميع المحاولات وتم احتساب العطل في مقياس الأمان.');
    }
  };

  // إرجاع واجهة لوحة تحكم معدل الأعطال
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-2xl">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">مؤشر الجلسات الخالية من الأعطال (Crash-Free Rate)</h3>
          <p className="text-xs text-slate-400 mt-1">رصد فشل الاتصال ومعدلات تعافي الشبكة عبر Exponential Backoff</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-emerald-400 font-mono">{crashFreeRate}%</span>
          <span className="block text-[10px] text-slate-400 font-semibold">معدل السلامة العالمي</span>
        </div>
      </div>

      {/* بطاقات الإحصائيات السريعة */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
          <span className="text-xs text-slate-400 block mb-1">إجمالي الطلبات</span>
          <span className="text-lg font-bold text-white font-mono">{stats.totalRequests}</span>
        </div>
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
          <span className="text-xs text-slate-400 block mb-1">أعطال الشبكة</span>
          <span className="text-lg font-bold text-rose-400 font-mono">{stats.failedRequests}</span>
        </div>
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
          <span className="text-xs text-slate-400 block mb-1">تعافي ذكي (Retries)</span>
          <span className="text-lg font-bold text-cyan-400 font-mono">{stats.retriedSuccesses}</span>
        </div>
      </div>

      {/* زر الاختبار التفاعلي */}
      <div className="text-center">
        <button 
          onClick={handleTestFailingNetwork}
          className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition shadow-lg"
        >
          محاكاة انقطاع شبكي وفحص معدل الأمان
        </button>
        {statusMsg && (
          <p className="mt-3 text-xs text-amber-400 font-mono">{statusMsg}</p>
        )}
      </div>
    </div>
  );
}`,
      outputExplanation: "يقدم المثال محرك صمود شبكي يدمج خوارزمية Exponential Backoff with Jitter لإعادة المحاولة بذكاء عند انقطاع الاتصال المؤقت أو أخطاء الخوادم، مع احتساب مؤشر Crash-Free Sessions Rate الذي يقيس نسبة العمليات التي اكتملت بنجاح دون أن يتعرض المستخدم لأي انقطاع محبط.",
      commonMistakes: [
        {
          mistake: "إعادة المحاولة فوراً وبشكل متكرر ومكثف عند كل فشل للشبكة دون أي تأخير زمني.",
          why: "إرسال عشرات الطلبات في أجزاء من الثانية يتسبب في ظاهرة تسمى 'عاصفة إعادة المحاولة' (Retry Storm)، مما يسقط خوادمك الخلفية المتعثرة أصلاً تحت وطأة ضغط هائل.",
          fix: "استخدم دائماً التراجع الأسي (Exponential Backoff) مع إضافة تأخير عشوائي خفيف (Jitter) لتفريق أوقات المحاولات بين المستخدمين."
        },
        {
          mistake: "إعادة محاولة الطلبات غير الآمنة أو غير القابلة للتكرار (Non-Idempotent) مثل عمليات الخصم المالي بدون Idempotency Key.",
          why: "إذا انقطع الاتصال أثناء انتظار تأكيد عملية الدفع وأعدت المحاولة تلقائياً، فقد يتم خصم المبلغ من بطاقة العميل مرتين أو ثلاث مرات.",
          fix: "أعد المحاولة فقط لطلبات القراءة (GET) أو أرسل دائماً ترويسة Idempotency-Key فريدة تمنع الخادم من تنفيذ العملية مرتين."
        }
      ],
      bestPractices: [
        "ضع حداً مستهدفاً لـ Crash-Free Sessions Rate لا يقل عن 99.9% في بيئة الإنتاج وقم بربطه بنظام إنذار فوري (PagerDuty).",
        "احرص على إظهار رسائل واضحة ومطمئنة للمستخدم توضح أن المشكلة في اتصال الإنترنت لديه وليست عيباً في تطبيقك.",
        "استخدم ميزة التخزين المؤقت المحلي (Local Storage / IndexedDB) للاحتفاظ ببيانات النماذج غير المكتملة لمنع فقدان عمل الزائر عند انقطاع الشبكة.",
        "فرّق دائماً بين فشل الشبكة الحقيقي (Offline / Timeout) وبين أخطاء الصلاحيات والمنطق البرمجي (401 Unauthorized / 403 Forbidden)."
      ],
      visualInfographic: {
        title: "هندسة التعافي التلقائي من أعطال الشبكة",
        description: "كيف يتعامل تطبيق React المرن مع انقطاع الاتصال دون خفض مؤشر الأمان",
        visualSteps: [
          "فشل الطلب الشبكي ⚠️ (Timeout أو انقطاع مفاجئ للاتصال)",
          "تفعيل التراجع الأسي ⏳ (Exponential Backoff + Jitter)",
          "إعادة المحاولة التلقائية 🔄 (المحاولة 1 ثم 2 ثم 3 بذكاء)",
          "حفظ البيانات محلياً 💾 (تخزين المسودات في Offline Queue)",
          "تحديث مؤشر الأمان 🛡️ (احتساب Crash-Free Rate وتوثيق الحادث)"
        ]
      }
    },
    {
      id: "29.2.f",
      title: "مفهوم Product Analytics (PostHog, Mixpanel)",
      englishTerm: {
        term: "Product Analytics",
        pronunciation: "بروداكت أناليتكس",
        meaning: "تحليلات المنتج وسلوك وتفاعل المستخدمين مع الميزات"
      },
      description: "بينما تركز مراقبة الأداء (RUM) على السرعة والأعطال التقنية، تركز تحليلات المنتج (Product Analytics) عبر منصات حديثة مثل PostHog وMixpanel على الإجابة عن السؤال الجوهري: 'ماذا يفعل المستخدمون داخل تطبيق React، ولماذا؟'. تهتم تحليلات المنتج بتتبع سلوك المستخدمين الفعلي، مثل الميزات الأكثر استخداماً، النقاط التي يتوقف عندها الزوار ويغادرون التطبيق، مسارات التصفح (Funnels)، تسجيل جلسات التصفح بالفيديو التفاعلي (Session Replay)، وتوليد الخرائط الحرارية (Heatmaps). يتيح دمج هذه الأدوات لمهندسي React ومديري المنتجات اتخاذ قرارات تطوير قائمة على بيانات واقعية وحقائق قاطعة بدلاً من التخمينات والآراء الشخصية.",
      realWorldAnalogy: "إذا كانت مراقبة الأخطاء (Sentry) تشبه جهاز الإنذار الذي ينطلق عند اندلاع حريق في المتجر، فإن تحليلات المنتج (PostHog) تشبه كاميرات المراقبة الذكية التي ترصد الأقسام الأكثر جذباً للزبائن، المنتجات التي يلتقطونها ويفحصونها، والرفوف التي يتجاهلونها تماماً.",
      whyItMatters: "تساعد تحليلات المنتج الفرق الهندسية على تجنب إهدار مئات الساعات في بناء ميزات معقدة لا يستخدمها أحد. كما تكشف بدقة عن مواطن الاحتكاك (Friction Points) في تجربة المستخدم، مثل وجود زر مبهم يدفع 40% من الزوار لإلغاء طلب الشراء، مما يساعد المطورين على إصلاح الواجهات ورفع أرباح الشركة بشكل ملموس.",
      syntax: "// تهيئة وتتبع حدث في منصة PostHog الحديثة\nimport posthog from 'posthog-js';\nposthog.init('YOUR_API_KEY', { api_host: 'https://eu.posthog.com' });\nposthog.capture('checkout_completed', { plan: 'pro', price: 99 });",
      simpleExample: `// إعداد دالة مبسطة لتتبع أحداث وسلوك المستخدم في React
import React from 'react';

// خدمة وهمية مبسّطة تمثل عميل تحليلات المنتج
const analytics = {
  // دالة التقاط الأحداث مع الخصائص المرافقة
  track: (eventName, properties = {}) => {
    console.log(\`📊 [Analytics] تم تسجيل الحدث: \${eventName}\`, properties);
    // إرسال الحدث إلى منصة التحليلات في الإنتاج
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics-events', JSON.stringify({ eventName, properties }));
    }
  }
};

// زر تفاعلي يوثق نقرات المستخدم
export function FeatureTrackButton() {
  // معالج النقر على زر ترقية الحساب
  const handleUpgradeClick = () => {
    // تسجيل الحدث التحليلي مع خصائص مهمة لتحديد السياق
    analytics.track('upgrade_button_clicked', {
      sourceLocation: 'pricing_banner',
      tierSelected: 'enterprise',
      discountApplied: true
    });
  };

  // إرجاع واجهة الزر
  return (
    <button 
      onClick={handleUpgradeClick}
      className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition"
    >
      ترقية الحساب الآن إلى باقة الشركات
    </button>
  );
}`,
      advancedExample: `// مزود تحليلات المنتج الشامل (Product Analytics Provider) مع دعم الجلسات وتتبع الميزات
import React, { createContext, useContext, useEffect, useRef } from 'react';

// إنشاء سياق تحليلات المنتج
const AnalyticsContext = createContext(null);

// مزود التحليلات المتكامل في تطبيق React
export function AnalyticsProvider({ children, currentUserId }) {
  // حفظ خصائص الجلسة الثابتة
  const sessionTraits = useRef({
    userId: currentUserId || 'anonymous',
    screenResolution: \`\${window.innerWidth}x\${window.innerHeight}\`,
    referrer: document.referrer || 'direct',
    pagePath: window.location.pathname
  });

  // تسجيل هوية المستخدم فور تسجيل دخوله (Identity Resolution)
  useEffect(() => {
    sessionTraits.current.userId = currentUserId || 'anonymous';
    // إرسال حدث التعرف على المستخدم للمنصة
    trackEvent('$identify', { userId: currentUserId });
  }, [currentUserId]);

  // دالة التقاط الأحداث المركزية
  const trackEvent = (eventName, customProperties = {}) => {
    // دمج الخصائص الأساسية مع الخصائص المخصصة للحدث
    const eventPayload = {
      event: eventName,
      properties: {
        ...sessionTraits.current,
        ...customProperties,
        timestamp: new Date().toISOString(),
        locale: navigator.language
      }
    };

    // طباعة الحدث في بيئة التطوير
    if (process.env.NODE_ENV !== 'production') {
      console.log(\`🎯 [Analytics Track] \${eventName}:\`, eventPayload);
    }

    // إرسال الحدث عبر طلب غير معطل
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/track', JSON.stringify(eventPayload));
    }
  };

  // إرجاع المزود وتزويد الشجرة بالدالة المعتمدة
  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

// خطاف مخصص لاستخدام تحليلات المنتج بسهولة داخل المكونات
export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('يجب استدعاء useAnalytics داخل AnalyticsProvider حصراً.');
  }
  return context;
}

// مكون بطاقة منتج تفاعلية تسجل كل خطوات التفاعل في مسار التحليل
export function ProductAnalyticsCard({ product }) {
  // استدعاء دالة التحليلات
  const { trackEvent } = useAnalytics();

  // تتبع فتح تفاصيل المنتج
  const handleViewDetails = () => {
    trackEvent('product_card_clicked', {
      productId: product.id,
      productName: product.name,
      price: product.price,
      action: 'view_details'
    });
  };

  // تتبع إضافة المنتج إلى سلة الشراء
  const handleAddToCart = () => {
    trackEvent('cart_item_added', {
      productId: product.id,
      productName: product.name,
      price: product.price,
      currency: 'USD'
    });
  };

  // إرجاع واجهة بطاقة المنتج
  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl max-w-sm text-white">
      <div className="h-32 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 text-xs mb-3">
        صورة المنتج: {product.name}
      </div>
      <h4 className="font-bold text-base">{product.name}</h4>
      <p className="text-emerald-400 font-mono font-bold mt-1">\${product.price}</p>
      
      <div className="flex gap-2 mt-4">
        <button 
          onClick={handleViewDetails}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition"
        >
          التفاصيل
        </button>
        <button 
          onClick={handleAddToCart}
          className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded-lg transition"
        >
          أضف للسلة
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "يقدم المزود بنية معمارية شاملة لتحليلات المنتج تدمج بيانات المستخدم والجلسة تلقائياً في كل حدث يتم التقاطه عبر خطاف useAnalytics المخصص، مما يمكن منصات مثل PostHog من ربط النقرات بمسارات الشراء وسلوك العميل دون تكرار الكود.",
      commonMistakes: [
        {
          mistake: "تسمية الأحداث بأسماء عشوائية وغير موحدة (مثل 'clickedBtn', 'user_btn_1', 'PurchaseDone').",
          why: "غياب معايير تسمية صارمة للأحداث يحول لوحة التحليلات بعد بضعة أشهر إلى فوضى عارمة يستحيل بناء تقارير مسارات تحويل دقيقة من خلالها.",
          fix: "اعتمد دائماً قاموس تسمية موحد مثل (Object + Action) بصيغة الفعل الماضي: 'product_viewed', 'cart_updated', 'payment_completed'."
        },
        {
          mistake: "تتبع كل نقرة أو حركة ماوس في الواجهة كحدث منفصل في قاعدة البيانات التحليلية.",
          why: "إغراق خادم التحليلات بملايين الأحداث التافهة يستنزف الميزانية المالية للمنصة ويشتت التركيز عن مؤشرات الأداء الجوهرية (KPIs).",
          fix: "تتبع فقط الأحداث ذات القيمة الفعلية للأعمال (Business Milestones)، واترك تسجيل الحركات البصرية لأدوات Session Replay المخصصة."
        }
      ],
      bestPractices: [
        "استخدم خاصية identify فور تسجيل دخول المستخدم لربط نشاطه السابق كزائر مجهول بحسابه المعتمد.",
        "احرص على إنشاء وثيقة قاموس التتبع (Tracking Plan / Schema) يتفق عليها فريق الواجهات وفريق المنتجات مسبقاً.",
        "وفّر دائماً خيار إلغاء التتبع (Opt-out) واحترم إشارات الخصوصية لحماية حقوق المستخدمين.",
        "استخدم ميزات Session Replay في PostHog لتشخيص مشكلات واجهة المستخدم بصرياً دون الحاجة لإعادة إنتاج الخطأ يدوياً."
      ],
      visualInfographic: {
        title: "منظومة تحليلات المنتج (Product Analytics)",
        description: "كيف تتحول تفاعلات المستخدم داخل واجهة React إلى قرارات استراتيجية للمنتج",
        visualSteps: [
          "تفاعل الواجهة 🖱️ (نقرة المستخدم أو فتح ميزة جديدة)",
          "توليد الحدث التحليلي 📝 (Event Name + Context Properties)",
          "المعالجة والربط بالهوية 🆔 (Identify Resolution & Session Linking)",
          "منصة التحليل 📈 (PostHog / Mixpanel Funnels & Retention)",
          "اتخاذ القرارات الهندسية 🚀 (تطوير الميزات الأكثر طلباً وإصلاح نقاط الهدر)"
        ]
      }
    },
    {
      id: "29.2.g",
      title: "قياس التفاعلات المهمة ومسارات التحويل (Funnels & Conversion)",
      englishTerm: {
        term: "Conversion Funnels & Micro-Conversions",
        pronunciation: "كونفيرجن فانيلز آند مايكرو كونفيرجنز",
        meaning: "مسارات التحويل المتسلسلة وقياس نقاط تسرب ومغادرة الزوار"
      },
      description: "مسار التحويل (Conversion Funnel) هو السلسلة المتتابعة من الخطوات والإجراءات التي يجب أن يمر بها المستخدم داخل تطبيق React لتحقيق هدف تجاري أو وظيفي محدد، مثل: زيارة الصفحة الرئيسية -> تصفح كتالوج المنتجات -> إضافة منتج للسلة -> إدخال بيانات الشحن -> إتمام الدفع بنجاح. يُطلق عليه اسم 'قمع' لأن عدد المستخدمين يتناقص طبيعياً في كل خطوة تالية. تتيح مراقبة وتحليل مسارات التحويل للمطورين معرفة النسبة الدقيقة للمستخدمين الذين يكملون كل مرحلة، والأهم من ذلك: تحديد 'نقطة التسرب الأكبر' (Drop-off Point) التي يغادر عندها معظم المستخدمين لإعادة هندستها وتحسينها فوراً.",
      realWorldAnalogy: "يشبه مسار التحويل ممر التفتيش وإجراءات السفر في المطارات؛ يدخل 1000 مسافر عبر بوابة المطار، ثم يمر 950 عبر فحص الحقائب، ثم يختم 900 جوازاتهم، وأخيراً يصعد 880 إلى الطائرة. إذا لاحظ مسؤولو المطار أن 400 مسافر علقوا عند فحص الجوازات، سيعلمون فوراً أن الخلل يكمن في قلة عدد موظفي الجوازات وليس في بوابة المطار الأولى.",
      whyItMatters: "تعد مسارات التحويل حلقة الوصل المباشرة بين الكود البرمجي وعائدات الشركة وأرباحها المالية. تحسين بسيط بنسبة 5% في مرحلة إدخال بيانات الشحن عبر تبسيط حقول الإدخال وتسريع استجابة الواجهة قد يترجم إلى مئات الآلاف من الدولارات الإضافية سنوياً للشركة، مما يبرهن على القيمة الاستراتيجية لمهندس React المحترف.",
      syntax: "// نموذج لتسجيل خطوات مسار التحويل المتسلسلة\nconst trackFunnelStep = (funnelName, stepNumber, stepName, meta = {}) => {\n  posthog.capture('funnel_step_reached', {\n    funnel: funnelName,\n    step: stepNumber,\n    step_name: stepName,\n    ...meta\n  });\n};",
      simpleExample: `// تتبع مسار تسجيل حساب جديد خطوة بخطوة في React
import React, { useState } from 'react';

// مكون معالج التسجيل ذو الخطوات المتسلسلة
export function RegistrationFunnelDemo() {
  // تتبع الخطوة الحالية للمستخدم
  const [currentStep, setCurrentStep] = useState(1);

  // دالة تسجيل التقدم في مسار التسجيل
  const handleProceedStep = (nextStep, stepName) => {
    console.log(\`📈 [Funnel] المسار: التسجيل | الخطوة \${nextStep}: \${stepName}\`);
    // إرسال مؤشر المسار إلى خدمة التحليلات
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/funnel-step', JSON.stringify({
        funnel: 'user_onboarding',
        stepIndex: nextStep,
        stepTitle: stepName
      }));
    }
    // الانتقال للخطوة التالية
    setCurrentStep(nextStep);
  };

  // إرجاع واجهة الخطوات
  return (
    <div className="p-4 bg-slate-900 text-white rounded-xl max-w-md">
      <h3 className="font-bold text-lg mb-3">مسار إنشاء الحساب (الخطوة {currentStep} من 3)</h3>
      {currentStep === 1 && (
        <button 
          onClick={() => handleProceedStep(2, 'البريد_وكلمة_المرور')}
          className="w-full py-2 bg-blue-600 rounded-lg text-sm font-semibold"
        >
          الخطوة 1: بدء التسجيل عبر البريد
        </button>
      )}
      {currentStep === 2 && (
        <button 
          onClick={() => handleProceedStep(3, 'تأكيد_رقم_الهاتف')}
          className="w-full py-2 bg-indigo-600 rounded-lg text-sm font-semibold"
        >
          الخطوة 2: تأكيد بيانات الهاتف
        </button>
      )}
      {currentStep === 3 && (
        <div className="text-emerald-400 font-bold text-center py-2">
          🎉 تهانينا! اكتمل مسار التحويل بنجاح 100%.
        </div>
      )}
    </div>
  );
}`,
      advancedExample: `// محرك تفاعلي متقدم لإدارة وعرض مسارات التحويل وحساب معدلات الهبوط والتسرب (Drop-off Rate)
import React, { useState } from 'react';

// مكون لوحة قياس مسار الشراء (E-commerce Checkout Funnel Visualizer)
export function CheckoutFunnelAnalytics() {
  // بيانات تجريبية تحاكي أعداد المستخدمين في كل مرحلة من مراحل الشراء
  const [funnelData] = useState([
    { step: 1, name: 'زيارة صفحة المنتج', visitors: 10000 },
    { step: 2, name: 'إضافة منتج للسلة', visitors: 3200 },
    { step: 3, name: 'بدء الدفع وتعبئة العنوان', visitors: 1600 },
    { step: 4, name: 'إدخال بطاقة الدفع', visitors: 1100 },
    { step: 5, name: 'إتمام الشراء بنجاح', visitors: 950 }
  ]);

  // إجمالي الزوار في الخطوة الأولى لحساب معدل التحويل الكلي
  const initialVisitors = funnelData[0].visitors;

  // إرجاع واجهة القمع التحليلي
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl mx-auto shadow-2xl">
      {/* عنوان لوحة مسار التحويل */}
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">مسار التحويل لمراحل الشراء (Conversion Funnel)</h3>
          <p className="text-xs text-slate-400 mt-1">تتبع رحلة العميل من تصفح المنتج وحتى الدفع مع رصد نقاط التسرب</p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-emerald-400 font-mono">
            {((funnelData[funnelData.length - 1].visitors / initialVisitors) * 100).toFixed(1)}%
          </span>
          <span className="block text-[10px] text-slate-400 font-semibold">معدل التحويل النهائي</span>
        </div>
      </div>

      {/* قائمة مراحل المسار التنازلي */}
      <div className="space-y-4">
        {funnelData.map((stage, idx) => {
          // حساب النسبة المئوية من الإجمالي المبدئي
          const percentOfTotal = ((stage.visitors / initialVisitors) * 100).toFixed(1);
          // حساب نسبة التسرب مقارنة بالخطوة السابقة
          const previousCount = idx > 0 ? funnelData[idx - 1].visitors : null;
          const dropOffPercent = previousCount ? (((previousCount - stage.visitors) / previousCount) * 100).toFixed(1) : null;

          return (
            <div key={stage.step} className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-indigo-400 text-xs font-bold flex items-center justify-center font-mono">
                    {stage.step}
                  </span>
                  <span className="text-sm font-semibold text-white">{stage.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-slate-300">
                    {stage.visitors.toLocaleString()} مستخدم ({percentOfTotal}%)
                  </span>
                  {dropOffPercent && (
                    <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                      تسرب: -{dropOffPercent}%
                    </span>
                  )}
                </div>
              </div>

              {/* شريط تمثيل حجم القمع البصري */}
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: \`\${percentOfTotal}%\` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ملاحظة تحليلية للإدارة الهندسية */}
      <div className="mt-6 p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300 flex items-center gap-2">
        <span>💡</span>
        <span>أكبر نقطة تسرب تقع بين الخطوة 1 و2 (68% تسرب)؛ يوصى بتحسين زر إضافة للسلة وإبراز العروض الترويجية.</span>
      </div>
    </div>
  );
}`,
      outputExplanation: "تستعرض هذه اللوحة التحليلية خطوات مسار الشراء الخمسة بالتفصيل، موضحة أعداد المستخدمين، النسبة المتبقية من إجمالي الزوار، ونسبة التسرب (Drop-off Rate) المحسوبة تلقائياً عند كل مرحلة لتوجيه المطورين نحو المكون الذي يحتاج إلى تبسيط وإعادة تصميم.",
      commonMistakes: [
        {
          mistake: "تعريف مسارات تحويل تتضمن خطوات غير متسلسلة أو إلزامية يمكن للمستخدم تخطيها والوصول للهدف مباشرة.",
          why: "إذا كان يمكن للمستخدم تسجيل الدخول عبر حساب Google بنقرة واحدة وتخطي 3 خطوات، فإن حسابات التسرب التقليدية ستكون مضللة تماماً.",
          fix: "أنشئ مسارات تحويل مرنة أو افصل المسارات بحسب خيار العميل (مثلاً: مسار التسجيل السريع مقابل مسار التسجيل التقليدي)."
        },
        {
          mistake: "إطلاق تغييرات جذرية على مكونات مسار التحويل دون تطبيق اختبارات A/B Testing.",
          why: "قد تعتقد أن التصميم الجديد أجمل بينما يتسبب في إرباك الزوار وخفض معدل التحويل النهائي.",
          fix: "استخدم ميزة تقسيم التجارب (Feature Flags & A/B Tests) لقياس تأثير التصميم الجديد على نسبة التحويل قبل اعتماده بنسبة 100%."
        }
      ],
      bestPractices: [
        "راقب كلاً من التحويلات الكبرى (Macro-Conversions مثل الشراء النهائي) والتحويلات المصغرة (Micro-Conversions مثل الاشتراك في النشرة البريدية).",
        "احرص على تقليل حقول الإدخال في النماذج المتسلسلة؛ فكل حقل إضافي يرفع نسبة التسرب بمعدل 4% إلى 7%.",
        "اربط مقاييس الأداء التقني (مثل LCP وINP) بكل خطوة في المسار لمعرفة هل التسرب ناتج عن بطء الواجهة أم بسبب التصميم.",
        "استخدم تقنية الحفظ التلقائي للمسودات لمنع شعور الزائر بالإحباط إذا أغلق الصفحة بالخطأ أثناء إكمال المسار."
      ],
      visualInfographic: {
        title: "تشريح مسار التحويل (Conversion Funnel Anatomy)",
        description: "كيف تتدفق حركة الزوار عبر مراحل القمع وكيف يتم احتساب التسرب",
        visualSteps: [
          "مدخل القمع 🚪 (100% من الزوار يتصفحون الواجهة)",
          "تفاعل الاهتمام 🎯 (إضافة المنتجات أو تعبئة أول حقل)",
          "مرحلة الالتزام 📝 (إدخال بيانات العنوان والشحن)",
          "مرحلة الدفع 💳 (إدخال البطاقة البنكية وتأكيد الطلب)",
          "مخرج القمع 🏆 (إتمام التحويل بنجاح وحساب معدل العائد النهائي)"
        ]
      }
    },
    {
      id: "29.2.h",
      title: "احترام خصوصية المستخدم وقوانين حماية البيانات (Privacy & GDPR)",
      englishTerm: {
        term: "User Privacy, Consent Management & GDPR",
        pronunciation: "يوزر برايفاسي، كونسنت مانيجمنت آند جي دي بي آر",
        meaning: "إدارة موافقات الخصوصية والامتثال للتشريعات العالمية"
      },
      description: "مع تزايد التشريعات الدولية الصارمة لحماية خصوصية البيانات الرقمية مثل النظام الأوروبي العام لحماية البيانات (GDPR) وقانون خصوصية المستهلك في كاليفورنيا (CCPA)، أصبح جمع المقاييس والتحليلات أمراً مشروطاً بالامتثال القانوني والأخلاقي التام. يتضمن احترام خصوصية المستخدم في تطبيقات React بناء أنظمة إدارة موافقة متطورة (Consent Management Platforms - CMP)، احترام تفضيل عدم التتبع الصادر من المتصفح (Do Not Track - DNT وإشارات Global Privacy Control - GPC)، إخفاء هوية عناوين الإنترنت (IP Anonymization)، وتطهير البيانات الحساسة المحددة للهوية (Personally Identifiable Information - PII). يعني ذلك برمجياً حظر تنزيل سكربتات التتبع أو إرسال أي أحداث تحليلات حتى يمنح المستخدم موافقته الصريحة والواعية.",
      realWorldAnalogy: "يشبه احترام خصوصية المستخدم وقوانين GDPR طرق باب المنزل وطلب الإذن المهذب قبل الدخول؛ فلا يحق لأي شخص الدخول وتصوير الغرف بمجرد أن الباب لم يكن مقفلاً بالمفتاح؛ بل يجب الحصول على موافقة خطية صريحة تحدد ما يسمح له بالاطلاع عليه وما يمنع عنه منعاً باتاً.",
      whyItMatters: "قد يؤدي تجاهل قوانين الخصوصية إلى فرض غرامات مالية مدمرة على الشركات تصل إلى 20 مليون يورو أو 4% من إجمالي الدخل السنوي للشركة عالمياً، بالإضافة إلى حظر التطبيق في أسواق حيوية وفقدان ثقة العملاء تماماً. علاوة على ذلك، يمثل احترام خصوصية الزوار ميزة تنافسية أخلاقية تجذب المستخدمين الواعين.",
      syntax: "// التحقق من إشارة المتصفح العالمية لمنع التتبع (GPC / DNT)\nconst isDoNotTrackEnabled = navigator.doNotTrack === '1' || window.globalPrivacyControl === true;\nif (isDoNotTrackEnabled) {\n  // تعطيل أدوات التحليلات تلقائياً احتراماً لرغبة المستخدم\n  disableAllTracking();\n}",
      simpleExample: `// التحقق من تفضيل عدم التتبع في المتصفح وتعطيل التحليلات تلقائياً
import React, { useEffect, useState } from 'react';

// مكون لاحترام إشارات منع التتبع الصادرة من نظام المستخدم
export function PrivacyGuard() {
  // حالة لمعرفة هل المستخدم يطلب عدم التتبع
  const [dntActive, setDntActive] = useState(false);

  // فحص إشارات المتصفح عند التركيب
  useEffect(() => {
    // التحقق من إشارة Do Not Track أو Global Privacy Control
    const doNotTrack = navigator.doNotTrack === '1' || window.doNotTrack === '1';
    const gpc = window.globalPrivacyControl === true;

    // إذا كان أي منهما مفعلاً
    if (doNotTrack || gpc) {
      setDntActive(true);
      console.log('🔒 تم رصد إشارة الخصوصية (DNT/GPC). تم إيقاف جميع سكربتات التتبع.');
    }
  }, []);

  // إرجاع إشعار للمستخدم إذا كان خيار الخصوصية مفعلاً
  if (!dntActive) return null;

  return (
    <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs text-center">
      🛡️ تم تفعيل وضع الخصوصية الصارمة احتراماً لتفضيلات متصفحك. تم حظر كل أدوات التتبع الخارجية.
    </div>
  );
}`,
      advancedExample: `// نظام متكامل لإدارة موافقات الخصوصية (Consent Management Platform - CMP) في React
import React, { createContext, useContext, useState, useEffect } from 'react';

// إنشاء سياق إدارة الموافقات
const ConsentContext = createContext(null);

// مزود إدارة الخصوصية والموافقات وفق معايير GDPR
export function ConsentProvider({ children }) {
  // حالة الموافقات المفصلة للمستخدم
  const [consent, setConsent] = useState(() => {
    // استرجاع الموافقات المخزنة محلياً إن وجدت
    const saved = localStorage.getItem('user_cookie_consent');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  // حفظ تفضيلات المستخدم عند تغييرها وتحديث سكربتات التتبع
  const updateConsent = (preferences) => {
    // هيكل كائن الموافقة المعتمد
    const updated = {
      necessary: true, // ملفات تعريف الارتباط الأساسية للتشغيل إلزامية دائماً
      analytics: Boolean(preferences.analytics),
      marketing: Boolean(preferences.marketing),
      timestamp: new Date().toISOString()
    };

    // حفظ في التخزين المحلي
    localStorage.setItem('user_cookie_consent', JSON.stringify(updated));
    // تحديث الحالة
    setConsent(updated);

    // تطبيق القرارات برمجياً فوراً
    applyTrackingRestrictions(updated);
  };

  // دالة لتطبيق القرارات وتطهير السكربتات
  const applyTrackingRestrictions = (currentConsent) => {
    if (!currentConsent.analytics) {
      // إيقاف خدمات التحليلات وحذف ملفات تعريف الارتباط الخاصة بها
      console.log('🚫 تم حظر تحليلات PostHog وGoogle Analytics وفق تفضيلات العميل.');
      // إذا توفر كائن posthog العالمي نلغي تتبعه
      if (window.posthog) window.posthog.opt_out_capturing();
    } else {
      console.log('✅ تم تفعيل تحليلات الأداء بناء على موافقة العميل الصريحة.');
      if (window.posthog) window.posthog.opt_in_capturing();
    }
  };

  // فحص أولي عند بدء التطبيق
  useEffect(() => {
    if (consent) {
      applyTrackingRestrictions(consent);
    }
  }, []);

  // إرجاع المزود
  return (
    <ConsentContext.Provider value={{ consent, updateConsent }}>
      {children}
      {/* عرض نافذة طلب الموافقة إذا لم يحدد المستخدم خياره بعد */}
      {consent === null && <CookieConsentModal onSave={updateConsent} />}
    </ConsentContext.Provider>
  );
}

// مكون النافذة المنبثقة لخيارات الموافقة وفق النظام الأوروبي GDPR
function CookieConsentModal({ onSave }) {
  // حالات الخيارات القابلة للتخصيص
  const [allowAnalytics, setAllowAnalytics] = useState(false);
  const [allowMarketing, setAllowMarketing] = useState(false);

  // قبول الكل
  const handleAcceptAll = () => {
    onSave({ analytics: true, marketing: true });
  };

  // رفض غير الضروري
  const handleRejectAll = () => {
    onSave({ analytics: false, marketing: false });
  };

  // حفظ التخصيص
  const handleSaveCustom = () => {
    onSave({ analytics: allowAnalytics, marketing: allowMarketing });
  };

  // إرجاع واجهة النافذة
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-lg bg-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl z-50 text-white">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">🍪</span>
        <h4 className="font-bold text-base">إعدادات الخصوصية وملفات الارتباط</h4>
      </div>
      <p className="text-xs text-slate-300 leading-relaxed mb-4">
        نحن نحترم خصوصيتك بالكامل. نستخدم ملفات تعريف الارتباط الضرورية لتشغيل التطبيق، ونطلب إذنك لاستخدام ملفات التحليلات المجهولة لتحسين تجربة التصفح.
      </p>

      {/* خيارات التخصيص */}
      <div className="space-y-2 mb-4 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
        <div className="flex justify-between items-center text-slate-400">
          <span>الملفات الأساسية للتشغيل</span>
          <span className="font-mono text-emerald-400 font-bold">إلزامية دائماً</span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-slate-800">
          <span>تحليلات الأداء وRUM المجهولة</span>
          <input 
            type="checkbox" 
            checked={allowAnalytics} 
            onChange={(e) => setAllowAnalytics(e.target.checked)}
            className="w-4 h-4 accent-indigo-600 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* أزرار اتخاذ القرار */}
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={handleAcceptAll}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-bold rounded-lg transition"
        >
          قبول الكل
        </button>
        <button 
          onClick={handleRejectAll}
          className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-lg transition"
        >
          رفض غير الضروري
        </button>
        <button 
          onClick={handleSaveCustom}
          className="w-full py-1.5 border border-slate-700 hover:bg-slate-800 text-xs font-semibold rounded-lg text-slate-300 transition"
        >
          حفظ خياراتي المخصصة
        </button>
      </div>
    </div>
  );
}

// خطاف مخصص لاستعلام حالة الموافقة في أي مكان
export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('يجب استدعاء useConsent داخل ConsentProvider حصراً.');
  }
  return context;
}`,
      outputExplanation: "يقدم هذا النظام المتقدم منصة كاملة لإدارة موافقات الخصوصية (CMP) تمنع تشغيل أي سكربت تحليلات حتى يختار المستخدم بوعي تفضيلاته، مع توفير خيارات قبول الكل، رفض الكل، أو تخصيص الأذونات، وتخزين القرار بصيغة زمنية معتمدة قانونياً وفق معايير GDPR وCCPA.",
      commonMistakes: [
        {
          mistake: "تفعيل سكربتات التحليلات مسبقاً قبل نقر المستخدم على زر الموافقة في نافذة الـ Cookie Banner.",
          why: "وفقاً للنظام الأوروبي GDPR، يجب أن تكون الموافقة مسبقة وصريحة (Prior Explicit Consent)؛ ويعتبر تفعيل التتبع قبل الموافقة خرقاً قانونياً صريحاً يستوجب الغرامة.",
          fix: "احظر تحميل سكربتات التتبع أو تفعيل كائن التحليلات حتى يتم تسجيل موافقة صريحة من الزائر."
        },
        {
          mistake: "وضع علامة صح مسبقاً (Pre-ticked checkboxes) على خيارات ملفات الارتباط التسويقية والتحليلية.",
          why: "حكمت محكمة العدل الأوروبية بعدم قانونية المربعات المحددة مسبقاً، واشترطت أن يقوم المستخدم بنفسه بتفعيل المربع بإرادته الإيجابية.",
          fix: "اجعل مربعات الاختيار فارغة دائماً واترك للمستخدم حرية تفعيلها بنفسه."
        }
      ],
      bestPractices: [
        "احترم دائماً إشارات Global Privacy Control (GPC) وDo Not Track (DNT) كأمر ملزم بتعطيل التتبع.",
        "وفّر رابطاً واضحاً وسهل الوصول في تذييل كل صفحة بعنوان 'إعدادات الخصوصية' يتيح للمستخدم تعديل أو سحب موافقته في أي وقت.",
        "فعّل دائماً ميزة إخفاء هوية عناوين الإنترنت (IP Anonymization / IP Masking) في جميع أدوات التحليلات لحماية مواقع زوارك الجغرافية.",
        "طهّر البيانات وافصل أي معرفات شخصية (مثل البريد والاسم) عن سجلات تتبع الأداء وسلوك الواجهات."
      ],
      visualInfographic: {
        title: "هندسة الامتثال والخصوصية (GDPR Consent Engine)",
        description: "مراحل فحص الأذونات وإدارة موافقات التتبع في تطبيقات React",
        visualSteps: [
          "فحص إشارات المتصفح 🔍 (رصد إشارات Do Not Track وGPC التلقائية)",
          "حظر التحليلات المبدئي 🛑 (منع تحميل سكربتات التتبع قبل الموافقة)",
          "عرض نافذة الخصوصية 🍪 (Consent Modal بخيارات واضحة وغير مضللة)",
          "تسجيل القرار الصريح ✍️ (تخزين الموافقة مع طابع زمني Timestamp)",
          "تفعيل مشروط ومقيد 🔓 (إتاحة الميزات المصرح بها فقط مع تطهير PII)"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "quiz-29-2-1",
      question: "ما هو الفارق الجوهري بين مؤشر Interaction to Next Paint (INP) ومؤشر First Input Delay (FID) في تقييم أداء React؟",
      options: [
        "مؤشر FID يقيس حجم ملفات الجافاسكريبت بينما INP يقيس سرعة استجابة قاعدة البيانات.",
        "مؤشر FID كان يقيس فقط زمن التأخير عند أول تفاعل للزائر، بينما يقيس INP استجابة وسلاسة جميع التفاعلات طوال فترة بقاء المستخدم في الصفحة.",
        "لا يوجد أي فرق بينهما؛ كلاهما يقيس زمن وصول أول بايت من الخادم الخلفي (TTFB).",
        "مؤشر INP يقيس سرعة تحميل صور الغلاف فقط، بينما FID يقيس سرعة الانتقال بين المسارات."
      ],
      correctAnswer: 1,
      explanation: "اعتمدت Google مؤشر INP كبديل رسمي وأكثر شمولاً لـ FID لأنه يراقب ويقيس زمن تأخير استجابة الواجهة لكل تفاعل ونقرة يقوم بها المستخدم طوال فترة بقائه في الصفحة، وليس التفاعل الأول فقط."
    },
    {
      id: "quiz-29-2-2",
      question: "لماذا يفضل استخدام navigator.sendBeacon بدلاً من fetch التقليدي عند إرسال تقارير RUM التحليلية عند مغادرة الصفحة؟",
      options: [
        "لأن sendBeacon يرسل البيانات بسرعة تفوق سرعة الضوء ولا يحتاج إلى شبكة إنترنت.",
        "لأن طلبات fetch العادية قد يلغيها المتصفح فوراً إذا قام المستخدم بإغلاق النافذة أو التبويب، بينما تضمن sendBeacon وصول البيانات في الخلفية دون تعطيل الإغلاق.",
        "لأن sendBeacon يدعم فقط ملفات الفيديو المضغوطة.",
        "لأن fetch محظور تماماً وفق قوانين حماية البيانات والخصوصية GDPR."
      ],
      correctAnswer: 1,
      explanation: "تم تصميم واجهة navigator.sendBeacon خصيصاً لإرسال التحليلات ومقاييس الأداء في الخلفية دون حظر تفريغ الذاكرة أو تأخير إغلاق الصفحة، وضمان عدم إلغاء المتصفح للطلب عند خروج الزائر."
    },
    {
      id: "quiz-29-2-3",
      question: "ما هو الإجراء الإلزامي قانونياً وفق معايير GDPR الأوروبية قبل البدء في تتبع أحداث المستخدمين عبر أدوات التحليلات؟",
      options: [
        "طلب رقم هاتف المستخدم وتأكيده عبر رسالة SMS.",
        "الحصول على موافقة صريحة ومسبقة من المستخدم مع حظر تفعيل سكربتات التتبع قبل صدور هذه الموافقة.",
        "تفعيل التتبع فوراً طالما أن المستخدم لم يقدم شكوى رسمية في المحكمة.",
        "تشفير الكود المصدري لمشروع React بلغة الأسمبلي."
      ],
      correctAnswer: 1,
      explanation: "تشترط تشريعات GDPR وCCPA الحصول على موافقة مسبقة وواعية وصريحة (Prior Informed Consent) قبل تشغيل أي كود لتتبع السلوك أو زرع ملفات تعريف ارتباط غير ضرورية للتشغيل الأساسي."
    }
  ],
  practicalExercise: {
    id: "exercise-29-2",
    title: "تمرين تطبيقي: بناء مزود مراقبة الأداء التفاعلي (Live RUM & Vitals Guard)",
    scenario: "طُلب منك في شركتك بناء مكون React يراقب مؤشر LCP اللحظي، ويعترض مكالمات الـ API لقياس زمن استجابتها بالمللي ثانية، ويعرض شريطاً تنبيهياً للمطور إذا تجاوز أي طلب حاجز 1500 مللي ثانية، مع مراعاة خصوصية الزائر وإلغاء التتبع إذا كان خيار Do Not Track مفعلاً.",
    tasks: [
      "فحص إشارة عدم التتبع navigator.doNotTrack قبل بدء أي عملية مراقبة.",
      "استخدام PerformanceObserver للاستماع لأحداث أكبر رسم محتوى مرئي (largest-contentful-paint).",
      "بناء دالة جلب بيانات تغلف fetch وتقيس زمن الاستجابة بدقة بالغة عبر performance.now().",
      "عرض النتائج في واجهة مستخدم نظيفة ومنسقة بأسلوب Tailwind CSS مع إبراز حالات التحذير."
    ],
    hints: [
      "تأكد من وجود 'PerformanceObserver' in window قبل محاولة تهيئته لتفادي أخطاء المتصفحات القديمة.",
      "لحساب المدة المنقضية بدقة، اطرح startTime من endTime باستخدام performance.now().",
      "إذا كان navigator.doNotTrack === '1'، اعرض رسالة تفيد باحترام رغبة الخصوصية وتوقف عن المراقبة."
    ],
    solution: `// الحل النموذجي للتمرين التطبيقي: نظام مراقبة الأداء الحي مع احترام الخصوصية
import React, { useState, useEffect } from 'react';

// المكون الرئيسي لمراقبة الأداء والاستجابة الحية
export function PerformanceAndVitalsGuard() {
  // حالة رصد خصوصية المستخدم
  const [isDNT, setIsDNT] = useState(false);
  // حالة قيمة مؤشر LCP المسجلة
  const [lcpValue, setLcpValue] = useState(null);
  // حالة زمن استجابة آخر طلب API
  const [apiTiming, setApiTiming] = useState(null);
  // حالة تنبيه الطلبات البطيئة
  const [slowWarning, setSlowWarning] = useState(false);

  // التأكد من تفضيلات الخصوصية ومراقبة LCP
  useEffect(() => {
    // 1. التحقق من إشارة منع التتبع
    if (navigator.doNotTrack === '1') {
      setIsDNT(true);
      return;
    }

    // 2. تفعيل مراقب LCP عبر PerformanceObserver
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            // تحويل الزمن إلى ثوانٍ وتحديث الحالة
            setLcpValue((lastEntry.startTime / 1000).toFixed(2));
          }
        });
        // بدء الاستماع لأكبر كتلة محتوى مرئي
        observer.observe({ type: 'largest-contentful-paint', buffered: true });

        // تنظيف المراقب عند الخروج
        return () => observer.disconnect();
      } catch (e) {
        console.warn('مراقب LCP غير مدعوم في بيئتك الحالية', e);
      }
    }
  }, []);

  // 3. دالة جلب بيانات مع قياس زمن الاستجابة
  const triggerMonitoredApi = async () => {
    // إعادة تعيين التنبيه السابق
    setSlowWarning(false);
    // التقاط وقت البدء
    const startTime = performance.now();

    try {
      // استدعاء تجريبي لواجهة عامة
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      // حساب المدة بالمللي ثانية
      const duration = Math.round(performance.now() - startTime);
      setApiTiming(duration);

      // فحص إذا تجاوز الطلب حاجز الـ 1500 مللي ثانية
      if (duration > 1500) {
        setSlowWarning(true);
      }
    } catch (error) {
      console.error('فشل الطلب الشبكي:', error);
    }
  };

  // في حال كان المستخدم يطلب عدم التتبع
  if (isDNT) {
    return (
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-center text-xs text-emerald-400">
        🛡️ وضع الخصوصية مفعل (Do Not Track). تم إيقاف نظام المراقبة احتراماً لطلبك.
      </div>
    );
  }

  // إرجاع واجهة التمرين المتكاملة
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl max-w-xl mx-auto shadow-2xl text-white">
      <h3 className="text-lg font-bold mb-4 border-b border-slate-800 pb-3">لوحة الأداء الحية (RUM & API Monitor)</h3>

      {/* عرض مؤشر LCP */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center mb-3">
        <div>
          <span className="text-xs text-slate-400 block">أكبر رسم للمحتوى (LCP)</span>
          <span className="text-base font-bold text-cyan-400 font-mono">
            {lcpValue ? \`\${lcpValue} ثانية\` : 'بانتظار اكتمال الرسم...'}
          </span>
        </div>
        <span className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20 font-mono">
          هدف: &lt; 2.5s
        </span>
      </div>

      {/* عرض زمن استجابة الـ API */}
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center mb-4">
        <div>
          <span className="text-xs text-slate-400 block">زمن استجابة واجهة البرمجة (API Latency)</span>
          <span className="text-base font-bold text-violet-400 font-mono">
            {apiTiming !== null ? \`\${apiTiming} مللي ثانية\` : 'اضغط الزر لاختبار الطلب'}
          </span>
        </div>
        {slowWarning && (
          <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded border border-rose-500/30 font-bold">
            ⚠️ استجابة بطيئة (&gt;1.5s)
          </span>
        )}
      </div>

      {/* زر الاختبار التفاعلي */}
      <button 
        onClick={triggerMonitoredApi}
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 font-bold text-xs rounded-xl transition shadow-lg"
      >
        تنفيذ طلب API شبكي وقياس الأداء
      </button>
    </div>
  );
}`
  },
  visualInfographic: {
    title: "خارطة طريق مراقبة الأداء وسلوك المستخدم الشاملة",
    description: "الأعمدة الأربعة لمراقبة التطبيقات في بيئة الإنتاج الحية",
    visualSteps: [
      "مراقبة تجربة المستخدم RUM 📱 (جمع الأداء الفعلي عبر أجهزة وشبكات واقعية)",
      "مؤشرات Core Web Vitals ⚡ (قياس LCP للتحميل، INP للاستجابة، CLS للثبات)",
      "تتبع الـ API والشبكة 📡 (قياس زمن الاستجابة، ترويسات Trace ID، وصمود الأعطال)",
      "تحليلات المنتج ومسارات التحويل 📈 (تحليل Funnels، سلوك الزوار، والامتثال الصارم لـ GDPR)"
    ]
  }
};

