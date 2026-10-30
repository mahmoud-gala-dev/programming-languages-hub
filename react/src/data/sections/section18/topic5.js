// src/data/sections/section18/topic5.js

export const topic5 = {
  id: "18.5",
  title: "مؤشرات أداء الويب (Core Web Vitals - LCP, INP, CLS)",
  description: "الدليل الشامل لمعايير ومؤشرات جوجل الأساسية لتجربة المستخدم (Core Web Vitals)؛ تحسين سرعة تحميل أكبر عنصر مرئي (LCP)، الاستجابة للتفاعل (INP)، استقرار التخطيط وتجنب القفزات البصرية (CLS)، قياس أداء المستخدمين الحقيقيين (RUM)، واستخدام مكتبة web-vitals الرسمية.",
  subtopics: [
    {
      id: "18.5.a",
      title: "فهم Core Web Vitals",
      englishTerm: "Core Web Vitals Overview (كور ويب فايتالز)",
      description: "مجموعة من ثلاثة مقاييس قياسية حددتها شركة Google لقياس جودة تجربة المستخدم الحقيقية لأي موقع ويب في ثلاثة أبعاد حيوية: سرعة التحميل (LCP)، استجابة التفاعل (INP - والذي حل محل FID)، والاستقرار البصري للتخطيط (CLS). تُعتبر هذه المقاييس عاملاً حاسماً في تصنيف نتائج البحث (SEO) ورضا المستخدم.",
      analogy: "تشبه العلامات الحيوية الثلاث التي يفحصها الطبيب في الطوارئ (ضغط الدم، النبض، ودرجة الحرارة) لمعرفة هل المريض بصحة ممتازة أم بحاجة لتدخل علاجي عاجل.",
      whyItMatters: "المواقع التي تجتاز مؤشرات Core Web Vitals تحقق معدلات ارتداد (Bounce Rate) أقل بنسبة 24%، ومعدلات تحويل مبيعات أعلى بكثير، بالإضافة إلى أفضلية كبرى في ترتيب الظهور في محرك بحث Google.",
      syntax: "// المعايير المستهدفة للدرجة الممتازة (Good):\n// LCP <= 2.5s | INP <= 200ms | CLS <= 0.1",
      simpleExample: `// استيراد React مع كارت توضيحي للحدود المقبولة لكل مقياس
import React from 'react';

export default function WebVitalsSummaryCard() {
  const vitals = [
    { name: 'LCP (زمن أكبر محتوى)', good: '<= 2.5 ثانية', desc: 'يقيس سرعة ظهور أكبر عنصر مرئي' },
    { name: 'INP (الاستجابة للتفاعل)', good: '<= 200 مللي ثانية', desc: 'يقيس مدى سلاسة استجابة النقر والكتابة' },
    { name: 'CLS (استقرار التخطيط)', good: '<= 0.1', desc: 'يقيس عدم قفز واهتزاز العناصر فجأة' }
  ];

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white space-y-3">
      <h3 className="text-base font-bold text-sky-400">مؤشرات Core Web Vitals القياسية</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {vitals.map(v => (
          <div key={v.name} className="p-3 bg-slate-800 rounded-lg">
            <p className="font-bold text-sm text-emerald-400">{v.name}</p>
            <p className="text-xs text-white my-1">الحد الممتاز: {v.good}</p>
            <p className="text-xs text-slate-400">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      advancedExample: [
        "// لوحة قياس حية تستخرج مقاييس Web Vitals من واجهة PerformanceObserver المدمجة في المتصفح",
        "import React, { useState, useEffect } from 'react';",
        "",
        "export function LiveVitalsMonitor() {",
        "  const [scores, setScores] = useState({ lcp: 0, cls: 0 });",
        "",
        "  useEffect(() => {",
        "    // التحقق من دعم المتصفح لمراقب الأداء",
        "    if (!('PerformanceObserver' in window)) return;",
        "",
        "    // مراقبة LCP (Largest Contentful Paint)",
        "    try {",
        "      const lcpObserver = new PerformanceObserver((entryList) => {",
        "        const entries = entryList.getEntries();",
        "        const lastEntry = entries[entries.length - 1];",
        "        if (lastEntry) {",
        "          setScores(prev => ({ ...prev, lcp: Number((lastEntry.startTime / 1000).toFixed(2)) }));",
        "        }",
        "      });",
        "      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });",
        "",
        "      // مراقبة CLS (Cumulative Layout Shift)",
        "      let clsValue = 0;",
        "      const clsObserver = new PerformanceObserver((entryList) => {",
        "        for (const entry of entryList.getEntries()) {",
        "          if (!entry.hadRecentInput) {",
        "            clsValue += entry.value;",
        "            setScores(prev => ({ ...prev, cls: Number(clsValue.toFixed(3)) }));",
        "          }",
        "        }",
        "      });",
        "      clsObserver.observe({ type: 'layout-shift', buffered: true });",
        "    } catch (e) {",
        "      console.warn('تعذر تفعيل بعض مراقبي الأداء:', e);",
        "    }",
        "  }, []);",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-950 border border-slate-800 rounded-xl text-slate-100'>",
        "      <h4 className='font-bold text-white mb-4'>مراقبة Core Web Vitals المباشرة</h4>",
        "      <div className='flex gap-4'>",
        "        <div className='p-4 bg-slate-900 rounded-lg flex-1'>",
        "          <span className='text-xs text-slate-400 block'>LCP الحقيقي:</span>",
        "          <span className={'text-xl font-bold ' + (scores.lcp <= 2.5 ? 'text-emerald-400' : 'text-rose-400')}>",
        "            {scores.lcp} ثانية",
        "          </span>",
        "        </div>",
        "        <div className='p-4 bg-slate-900 rounded-lg flex-1'>",
        "          <span className='text-xs text-slate-400 block'>CLS الحقيقي:</span>",
        "          <span className={'text-xl font-bold ' + (scores.cls <= 0.1 ? 'text-emerald-400' : 'text-rose-400')}>",
        "            {scores.cls}",
        "          </span>",
        "        </div>",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقيس المتصفح أزمنة LCP وانزلاقات CLS فور حدوثها في الجلسة المباشرة ويعرضها ملونة بالأخضر إذا كانت ممتازة وبالأحمر عند التجاوز.",
      commonMistakes: "التركيز على قياس مقياس واحد فقط وتجاهل البقية؛ مثل الحصول على LCP سريع جداً لكن الصفحة تهتز بعنف (CLS سيء) أو تتجمد عند النقر (INP سيء). تجربة المستخدم تتطلب توازن المؤشرات الثلاثة معاً.",
      bestPractices: "اجعل هدف فريق التطوير دائماً هو الوقوع في النطاق الأخضر (75% من الزوار يحصلون على تجربة ممتازة بحسب بيانات حقل CrUX الحقيقية).",
      visualDiagram: "The Core Web Vitals Triangle:\n       [LCP: Loading Speed <= 2.5s]\n                 ▲\n                / \\\n               /   \\\n              /     \\\n [INP: Responsiveness] ──► [CLS: Visual Stability]\n    (<= 200ms)                  (<= 0.1 ratio)"
    },
    {
      id: "18.5.b",
      title: "تحسين Largest Contentful Paint (LCP)",
      englishTerm: "Largest Contentful Paint Optimization (إل سي بي)",
      description: "المقياس الذي يقيس الوقت المنقضي من بداية فتح الصفحة وحتى ظهور أكبر عنصر مرئي للمستخدم (غالباً ما يكون صورة البانر الرئيسية، أو كتلة نصية ضخمة H1، أو ملصق فيديو). الحد المثالي لـ LCP هو أن يظهر هذا العنصر في غضون 2.5 ثانية أو أقل.",
      analogy: "يشبه فتح ستارة المسرح؛ الجمهور لا يعتبر العرض قد بدأ حتى يظهر البطل الرئيسي على خشبة المسرح وتبدأ الموسيقى، ولا يهمه إذا كان عمال الإضاءة قد دخلوا خلسة في الظلام.",
      whyItMatters: "هو المقياس الأكثر إدراكاً من جانب المستخدم؛ إذا تأخر LCP يشعر الزائر بأن الموقع معطل أو بطيء ويفكر في المغادرة فوراً.",
      syntax: "// إضافة توجيهات أولوية الجلب العالية لعنصر الـ LCP:\n<img src=\"hero.webp\" fetchpriority=\"high\" loading=\"eager\" />",
      simpleExample: `// استيراد React مع مكون البانر المحسن لتحقيق أفضل LCP
import React from 'react';

export default function HeroBannerLCP() {
  return (
    <section className="relative p-8 bg-slate-950 text-white rounded-2xl overflow-hidden">
      {/* 
        عنصر الـ LCP الرئيسي:
        1. loading="eager" لتجاوز أي تأخير كسول
        2. fetchpriority="high" لتنزيله بأعلى أولوية شبكية ممكنة
      */}
      <img
        src="/assets/main-hero.webp"
        alt="البانر الرئيسي للمنصة"
        fetchpriority="high"
        loading="eager"
        width="1200"
        height="600"
        className="w-full h-auto object-cover rounded-xl shadow-2xl"
      />
      <h1 className="text-3xl font-extrabold mt-4 text-sky-400">
        احترف تطوير تطبيقات React الحديثة 2026
      </h1>
    </section>
  );
}`,
      advancedExample: [
        "// تكوين استراتيجية تحسين LCP الكاملة: Preload في رأس الصفحة + أولوية قصوى + تحسين الخط المصاحب",
        "import React, { useEffect } from 'react';",
        "",
        "export function UltraFastHeroSection({ heroImageUrl, headlineText }) {",
        "  useEffect(() => {",
        "    // إضافة رابط preload فوري في رأس الصفحة <head> لعنصر الـ LCP",
        "    const link = document.createElement('link');",
        "    link.rel = 'preload';",
        "    link.as = 'image';",
        "    link.href = heroImageUrl;",
        "    link.fetchPriority = 'high'; // أولوية تنزيل قصوى في كروم",
        "    document.head.appendChild(link);",
        "",
        "    return () => {",
        "      document.head.removeChild(link);",
        "    };",
        "  }, [heroImageUrl]);",
        "",
        "  return (",
        "    <header className='relative min-h-[400px] flex flex-col justify-end p-8 bg-gradient-to-t from-slate-950 to-slate-900 rounded-3xl overflow-hidden'>",
        "      {/* صورة البانر المحملة مسبقاً */}",
        "      <img",
        "        src={heroImageUrl}",
        "        alt='صورة الواجهة الرئيسية'",
        "        fetchpriority='high'",
        "        loading='eager'",
        "        decoding='sync' // فك تشفير سريع ومتزامن لعنصر البداية",
        "        className='absolute inset-0 w-full h-full object-cover -z-10 brightness-75'",
        "      />",
        "      <div className='relative z-10 max-w-2xl space-y-2'>",
        "        <span className='px-3 py-1 bg-sky-500/20 text-sky-300 border border-sky-500/40 rounded-full text-xs font-semibold'>",
        "          مسار التدريب الاحترافي",
        "        </span>",
        "        <h1 className='text-3xl sm:text-4xl font-black text-white leading-tight'>",
        "          {headlineText}",
        "        </h1>",
        "      </div>",
        "    </header>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقوم المتصفح بطلب صورة البانر فور استلام أول سطر من الـ HTML بأعلى أولوية في الشبكة، مما يقلص زمن ظهورها إلى أقل من ثانية واحدة (LCP < 1.0s).",
      commonMistakes: "عرض صورة الـ LCP عبر خاصية CSS الخلفية background-image: url(...) بدلاً من استخدام وسم <img> صريح؛ لأن المتصفح لا يكتشف صور CSS إلا بعد تحليل ملف التنسيق وبناء شجرة CSSOM، مما يُضيع مئات المللي ثوانٍ الثمينة.",
      bestPractices: "استخدم وسم <img> الصريح لعنصر الـ LCP وضع عليه خاصية fetchpriority='high'، واستضف الصورة على نفس النطاق (Same Origin) أو استخدم CDN فائق السرعة مع Preconnect.",
      visualDiagram: "LCP Discovery Comparison:\nWith CSS background:  HTML ──► CSS Fetch ──► CSSOM Build ──► Image Discovered (LCP: 3.8s ⚠️)\nWith <img> + Preload: HTML (Preload image in <head>) ──► Immediate Fetch (LCP: 0.9s ⚡)"
    },
    {
      id: "18.5.c",
      title: "تحسين Interaction to Next Paint (INP)",
      englishTerm: "Interaction to Next Paint (INP) (آي إن بي)",
      description: "المقياس المعتمد رسمياً في Core Web Vitals (بديلاً لـ FID القديم) لقياس استجابة الصفحة لجميع تفاعلات المستخدم طوال مدة زيارته (نقرات الأزرار، التفاعل مع القوائم، أو الكتابة في حقول الإدخال). يقيس الوقت من لحظة قيام المستخدم بالتفاعل وحتى يرى التحديث البصري التالي على الشاشة (Next Paint). الحد المقبول هو 200ms أو أقل.",
      analogy: "يشبه الضغط على مفتاح الإضاءة في غرفتك؛ تتوقع أن يضيء المصباح في نفس اللحظة التي تلمس فيها المفتاح، ولا ترغب في الانتظار ثانيتين في الظلام حتى تستجيب الكهرباء.",
      whyItMatters: "يحمي المستخدم من الشعور بتجمد الواجهة (Unresponsive UI)؛ حيث يقيس أسوأ زمن استجابة في الجلسة وليس فقط التفاعل الأول.",
      syntax: "// تقسيم المهام واستخدام startTransition أو setTimeout لتأخير العمليات غير العاجلة:\nReact.startTransition(() => {\n  setHeavyState(data);\n});",
      simpleExample: `// استيراد useState و useTransition لتحسين استجابة INP
import React, { useState, useTransition } from 'react';

export default function FastResponseInput() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);
  // استخدام خطاف الانتقال لحماية استجابة لوحة المفاتيح
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const val = e.target.value;
    // تحديث فوري عالي الأولوية ليرى المستخدم الحرف المكتوب في كسر من الثانية
    setInputValue(val);

    // ترحيل العملية الحسابية الثقيلة للـ Transition بعيداً عن مسار الاستجابة
    startTransition(() => {
      const items = [];
      for (let i = 0; i < 5000; i++) items.push(val + ' #' + i);
      setList(items);
    });
  }

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg space-y-3">
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="اكتب هنا لترى الاستجابة السلسة..."
        className="w-full p-2 bg-slate-800 rounded border border-slate-700 text-white"
      />
      {isPending && <p className="text-xs text-sky-400">جاري معالجة القائمة في الخلفية...</p>}
      <p className="text-xs text-slate-400">العناصر المحسوبة: {list.length}</p>
    </div>
  );
}`,
      advancedExample: [
        "// نمط التحديثات المتفائلة (Optimistic UI) لتحقيق استجابة بصرية فورية (Zero INP Latency)",
        "import React, { useState } from 'react';",
        "",
        "export function OptimisticLikeButton({ initialLikes = 42, onServerSync }) {",
        "  const [likes, setLikes] = useState(initialLikes);",
        "  const [isLiked, setIsLiked] = useState(false);",
        "",
        "  // معالج حدث يُحدّث الشاشة في 0ms قبل إرسال طلب الشبكة (Next Paint فوري)",
        "  const handleToggleLike = async () => {",
        "    // 1. التحديث المتفائل المباشر لضمان طلاء الشاشة فوراً (Paint < 16ms)",
        "    const newLikedState = !isLiked;",
        "    const newCount = newLikedState ? likes + 1 : likes - 1;",
        "    ",
        "    setIsLiked(newLikedState);",
        "    setLikes(newCount);",
        "",
        "    // 2. مزامنة الخادم في الخلفية بدون حجب الواجهة أو التسبب في تأخير INP",
        "    try {",
        "      await onServerSync(newLikedState);",
        "    } catch (err) {",
        "      // التراجع في حال حدوث خطأ في الشبكة",
        "      console.error('فشل المزامنة، جاري التراجع:', err);",
        "      setIsLiked(!newLikedState);",
        "      setLikes(likes);",
        "    }",
        "  };",
        "",
        "  return (",
        "    <button",
        "      onClick={handleToggleLike}",
        "      className={'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-transform active:scale-95 ' + (isLiked ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700')}",
        "    >",
        "      <span>{isLiked ? '❤️ أعجبني' : '🤍 إعجاب'}</span>",
        "      <span className='font-mono text-xs'>({likes})</span>",
        "    </button>",
        "  );",
        "}"
      ].join('\n'),
      output: "بمجرد النقر على الزر، تتغير حالته البصرية في أقل من 16 مللي ثانية (Next Paint فوري)، محققاً درجة INP ممتازة وخالية تماماً من التأخير.",
      commonMistakes: "تنفيذ عمليات حسابية معقدة أو حلقات تكرارية ضخمة متزامنة داخل معالج الأحداث onClick أو onChange؛ هذا يعطل المسار الرئيسي ويمنع المتصفح من رسم الإطار التالي، مما يؤدي إلى قفزة كارثية في مقياس INP تتجاوز 500ms.",
      bestPractices: "استخدم React 18/19 Transitions (مثل useTransition و useDeferredValue) لتفريق التحديثات العاجلة (تفاعل الواجهة) عن التحديثات غير العاجلة (حساب القوائم)، واعتمد نمط Optimistic UI.",
      visualDiagram: "INP Phases Breakdown:\nUser Interaction (Click)\n  ├── 1. Input Delay (Waiting for main thread)\n  ├── 2. Processing Time (Running JavaScript handler)\n  └── 3. Presentation Delay (Style, Layout & Next Paint)\nTotal Time must be <= 200ms for \"GOOD\" INP score!"
    },
    {
      id: "18.5.d",
      title: "تحسين Cumulative Layout Shift (CLS)",
      englishTerm: "Cumulative Layout Shift (CLS) Optimization (سي إل إس)",
      description: "المقياس الذي يقيس الاستقرار البصري لصفحة الويب؛ يحسب مجموع كل درجات التحول والتزحزح غير المتوقع للعناصر المرئية أثناء قراءة أو تصفح المستخدم للصفحة (مثل ظهور إعلان فجأة يدفع النص للأسفل بينما كنت على وشك النقر). الحد المستهدف لـ CLS هو أقل من أو يساوي 0.1.",
      analogy: "يشبه محاولة قراءة كتاب وفجأة يقوم شخص بسحب الطاولة أو هز الكرسي بقوة كل نصف دقيقة؛ مما يجعلك تفقد السطر الذي كنت تقرأه وتصاب بالدوار.",
      whyItMatters: "يحمي المستخدمين من النقر الخاطئ (Accidental Clicks)؛ كم مرة حاولت النقر على 'إلغاء' وفجأة قفز التصميم فنقرت على 'شراء الآن' أو 'تأكيد الحذف' بسبب انزياح العناصر؟!",
      syntax: "/* حجز الأبعاد دائماً في الـ CSS لمنع اهتزاز التصميم */\nimg, video, iframe {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n}",
      simpleExample: `// استيراد React مع مكوّن يحجز مساحة المحتوى الديناميكي مسبقاً
import React from 'react';

export default function StableAdSlot({ adLoaded, children }) {
  return (
    <div className="space-y-4 text-slate-100">
      <h2 className="text-xl font-bold">مقال إخباري شيق</h2>
      <p className="text-sm text-slate-400">هذه هي الفقرة الأولى من المقال المستقر بصرياً...</p>

      {/* 
        حاوية الإعلان أو المحتوى الديناميكي: 
        حجز ارتفاع أدنى محدد (min-height) يمنع قفز الفقرات التالية عند اكتمال جلب الإعلان
      */}
      <div className="min-h-[250px] w-full bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
        {adLoaded ? children : <span className="text-xs text-slate-500">مساحة إعلانية محجوزة مسبقاً</span>}
      </div>

      <p className="text-sm text-slate-400">هذه الفقرة لن تقفز للأسفل أبداً لأن المساحة محجوزة مسبقاً!</p>
    </div>
  );
}`,
      advancedExample: [
        "// استخدام خاصية aspect-ratio ومؤشرات Skeleton لتثبيت التخطيط بنسبة 100% (CLS = 0.000)",
        "import React, { useState, useEffect } from 'react';",
        "",
        "export function ZeroClsCard({ imageUrl, title, description }) {",
        "  const [loaded, setLoaded] = useState(false);",
        "",
        "  return (",
        "    <div className='max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3 shadow-xl'>",
        "      {/* ",
        "        تثبيت نسبة العرض إلى الارتفاع الصريحة (aspect-ratio):",
        "        المتصفح يعرف مساحة الصندوق بدقة قبل تنزيل حتى بايت واحد من الصورة!",
        "      */}",
        "      <div className='relative w-full aspect-video bg-slate-800 rounded-xl overflow-hidden'>",
        "        {!loaded && (",
        "          <div className='absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center text-xs text-slate-500'>",
        "            جاري تجهيز الصورة...",
        "          </div>",
        "        )}",
        "        <img",
        "          src={imageUrl}",
        "          alt={title}",
        "          width='640'",
        "          height='360'",
        "          loading='lazy'",
        "          onLoad={() => setLoaded(true)}",
        "          className={'w-full h-full object-cover transition-opacity duration-300 ' + (loaded ? 'opacity-100' : 'opacity-0')}",
        "        />",
        "      </div>",
        "",
        "      <div className='space-y-1'>",
        "        <h3 className='font-bold text-white text-base'>{title}</h3>",
        "        <p className='text-xs text-slate-400 leading-relaxed'>{description}</p>",
        "      </div>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "لا تتحرك أي عناصر في الصفحة إطلاقاً عند تحميل الصور أو الإعلانات، وتكون قيمة مقياس CLS صفراً مطلقاً (0.000).",
      commonMistakes: "إدراج صور أو إعلانات أو نوافذ إشعار ديناميكية بدون تحديد width و height أو min-height مسبق في الـ CSS؛ مما يجعل مساحتها 0px في البداية ثم تقفز إلى 250px فجأة وتدفع باقي الصفحة للأسفل.",
      bestPractices: "استخدم دائماً خاصية aspect-ratio في CSS، وحدد أبعاداً افتراضية لكل وسائط الفيديو والصور، واحجز مساحات ثابتة للمحتوى القادم من خوادم الإعلانات الخارجية.",
      visualDiagram: "CLS Impact Comparison:\nWithout Dimensions: [Title] ──► Image loads (0px -> 300px) ──► [Title pushed down violently! CLS: 0.35 ⚠️]\nWith aspect-ratio:  [Title] ──► [300px Box Reserved] ──► Image fills box smoothly! (CLS: 0.000 ⚡)"
    },
    {
      id: "18.5.e",
      title: "قياس الأداء في بيئة الإنتاج Real User Monitoring (RUM)",
      englishTerm: "Real User Monitoring (RUM) (ريل يوزر مونيترينغ)",
      description: "منهجية لمراقبة وجمع بيانات الأداء وتجربة الاستخدام الفعلية من أجهزة ومتصفحات الزوار الحقيقيين في العالم الواقعي (Field Data)، على عكس الاختبارات الاصطناعية المعملية (Lab Data مثل Lighthouse على جهاز المطور). تُرسل هذه البيانات عبر تقنيات خفيفة مثل Navigator.sendBeacon دون التأثير على سرعة المستخدم.",
      analogy: "يشبه الفرق بين اختبار سيارة داخل مصنع مغلق ومعقم في درجات حرارة مثالية، وبين مراقبة أداء 10,000 سيارة يقودها الناس في الشوارع المزدحمة تحت المطر والحرارة الشديدة.",
      whyItMatters: "أجهزة المستخدمين الحقيقيين تختلف بشدة (هواتف قديمة، شبكات متقطعة، أجهزة بطيئة)؛ و RUM هو الأداة الوحيدة التي تعطيك الحقيقة الصادقة عن أداء موقعك عند كافة شرائح العملاء.",
      syntax: "// إرسال المقاييس بخاصية Beacon التي تعمل في الخلفية حتى لو أغلق المستخدم الصفحة:\nnavigator.sendBeacon('/api/rum-analytics', JSON.stringify(metrics));",
      simpleExample: `// استيراد React مع دالة تجميع وإرسال المقاييس
import React, { useEffect } from 'react';

// دالة خفيفة لإرسال تقارير الأداء لخادم الإحصائيات
function sendRumMetric(name, value) {
  const payload = JSON.stringify({ name, value, path: window.location.pathname });
  // استخدام sendBeacon لضمان وصول البيانات حتى عند إغلاق التبويب
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/telemetry', payload);
  } else {
    fetch('/api/telemetry', { method: 'POST', body: payload, keepalive: true });
  }
}

export default function RumTracker() {
  useEffect(() => {
    // رصد زمن اكتمال تحميل الصفحة للمستخدم الحقيقي
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        sendRumMetric('PageLoadTime', perfData.loadEventEnd.toFixed(0));
      }
    });
  }, []);

  return null; // مكون خدمات خلفي
}`,
      advancedExample: [
        "// عميل RUM متكامل يقوم بأخذ عينات (Sampling) وربط المقاييس بنوع شبكة المستخدم وجهازه",
        "import React, { useEffect } from 'react';",
        "",
        "export function useProductionRumCollector({ sampleRate = 0.1, endpoint = '/api/rum' }) {",
        "  useEffect(() => {",
        "    // تطبيق أخذ العينات (مثلاً 10% من الزوار فقط) لتقليل العبء على الخادم",
        "    if (Math.random() > sampleRate) return;",
        "",
        "    // استخراج معلومات جهاز العميل وسرعة الاتصال",
        "    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;",
        "    const deviceMemory = navigator.deviceMemory || 'unknown';",
        "    const networkType = connection ? connection.effectiveType : 'unknown';",
        "",
        "    const sessionMetrics = {",
        "      url: window.location.href,",
        "      userAgent: navigator.userAgent,",
        "      networkType,",
        "      deviceMemory,",
        "      timestamp: Date.now(),",
        "      vitals: {}",
        "    };",
        "",
        "    // تسجيل المقاييس عبر PerformanceObserver",
        "    if ('PerformanceObserver' in window) {",
        "      const observer = new PerformanceObserver((list) => {",
        "        for (const entry of list.getEntries()) {",
        "          if (entry.entryType === 'largest-contentful-paint') {",
        "            sessionMetrics.vitals.lcp = Math.round(entry.startTime);",
        "          }",
        "        }",
        "      });",
        "      observer.observe({ type: 'largest-contentful-paint', buffered: true });",
        "    }",
        "",
        "    // إرسال البيانات عند مغادرة المستخدم للصفحة",
        "    const flush = () => {",
        "      if (Object.keys(sessionMetrics.vitals).length > 0) {",
        "        navigator.sendBeacon(endpoint, JSON.stringify(sessionMetrics));",
        "      }",
        "    };",
        "",
        "    window.addEventListener('visibilitychange', () => {",
        "      if (document.visibilityState === 'hidden') flush();",
        "    });",
        "  }, [sampleRate, endpoint]);",
        "}"
      ].join('\n'),
      output: "يقوم التطبيق بجمع إحصائيات دقيقة من 10% من الزوار الحقيقيين وربطها بنوع شبكتهم وأجهزتهم وإرسالها عند مغادرة الصفحة دون أي تأثير على السرعة.",
      commonMistakes: "إرسال مقاييس الأداء عبر طلب fetch عادي متزامن عند حدوث الحدث؛ هذا قد يستهلك اتصالات المتصفح أو يتعطل إذا أغلق المستخدم الصفحة قبل اكتمال الطلب. الحل الصحيح هو دائماً navigator.sendBeacon أو fetch مع خاصية keepalive: true.",
      bestPractices: "استخدم نسبة أخذ العينات (Sampling Rate) في المواقع الكبيرة لمنع إغراق خادم الإحصائيات بملايين الطلبات، واعتمد على تقارير الشرائح المئوية (P75 و P95) بدلاً من المتوسط الحسابي العادي.",
      visualDiagram: "Lab Data vs Real User Monitoring (RUM):\nLab (Lighthouse): [Simulated environment, single machine, controlled settings]\nRUM (Field):     [Real devices, varied 4G/3G connections, actual user CPU load] ──► Real Truth!"
    },
    {
      id: "18.5.f",
      title: "استخدام حزمة web-vitals",
      englishTerm: "web-vitals Library (جوجل ويب-فايتالز)",
      description: "المكتبة الرسمية الصغيرة والمعيارية من تطوير فريق Google لقياس مؤشرات أداء الويب الحقيقية بدقة تامة ومطابقة 100% لطريقة قياس متصفح Chrome لبيانات تقرير تجربة مستخدم كروم (CrUX). توفر دوال مخصصة لكل مقياس (onLCP, onINP, onCLS, onFCP, onTTFB).",
      analogy: "يشبه استخدام المسطرة أو الميزان المعياري الصادر من هيئة المقاييس والمواصفات العالمية بدلاً من استخدام شريط قياس يدوي قد يكون غير دقيق.",
      whyItMatters: "تتولى المكتبة التعامل مع كافة الفروقات والتعقيدات وحالات الحافة (Edge Cases) بين إصدارات المتصفحات المختلفة، بحجم متناهي الصغر (أقل من 2KB).",
      syntax: "import { onCLS, onINP, onLCP } from 'web-vitals';\nonLCP(console.log);\nonINP(console.log);\nonCLS(console.log);",
      simpleExample: `// استيراد الدوال الرسمية من مكتبة web-vitals
import { onCLS, onINP, onLCP } from 'web-vitals';

// دالة مساعدة لطباعة ومراقبة المؤشرات في شاشة التحكم
export function initWebVitalsLogger() {
  // قياس LCP
  onLCP(metric => {
    console.log('مقياس LCP:', metric.value + 'ms', 'التقييم:', metric.rating);
  });

  // قياس INP
  onINP(metric => {
    console.log('مقياس INP:', metric.value + 'ms', 'التقييم:', metric.rating);
  });

  // قياس CLS
  onCLS(metric => {
    console.log('مقياس CLS:', metric.value, 'التقييم:', metric.rating);
  });
}`,
      advancedExample: [
        "// تكامل احترافي لمكتبة web-vitals مع Google Analytics 4 (GA4) أو نقطة نهاية مخصصة",
        "import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';",
        "",
        "// دالة معالجة موحدة تُرسل البيانات إلى خدمة التحليلات بصيغة غنية",
        "function sendToAnalytics(metric) {",
        "  // تجهيز الكائن التحليلي",
        "  const body = {",
        "    name: metric.name,             // اسم المقياس (مثال: 'LCP')",
        "    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),",
        "    rating: metric.rating,         // 'good' أو 'needs-improvement' أو 'poor'",
        "    delta: metric.delta,           // التغير منذ آخر قراءة",
        "    id: metric.id,                 // معرف فريد للحدث",
        "    navigationType: metric.navigationType // هل هو أول تحميل، أم إعادة تحديث، أم تنقل خلفي/أمامي",
        "  };",
        "",
        "  // الإرسال المتوافق مع Google Analytics 4 عبر gtag",
        "  if (window.gtag) {",
        "    window.gtag('event', metric.name, {",
        "      value: body.value,",
        "      metric_rating: metric.rating,",
        "      metric_id: metric.id,",
        "      event_category: 'Web Vitals',",
        "      non_interaction: true // لا تحتسبه كانتهاء لجلسة الارتداد",
        "    });",
        "  }",
        "",
        "  // إرسال نسخة لخادم Telemetry المخصص عبر Beacon API",
        "  const blob = new Blob([JSON.stringify(body)], { type: 'application/json' });",
        "  navigator.sendBeacon('/api/vitals-sink', blob);",
        "}",
        "",
        "// دالة تهيئة شاملة تغطي كافة المقاييس الخمسة",
        "export function setupFullWebVitalsReporter() {",
        "  onCLS(sendToAnalytics);",
        "  onINP(sendToAnalytics);",
        "  onLCP(sendToAnalytics);",
        "  onFCP(sendToAnalytics);",
        "  onTTFB(sendToAnalytics);",
        "}"
      ].join('\n'),
      output: "يقوم النظام تلقائياً بتغذية لوحات تحكم Google Analytics وخوادم المراقبة بقيم LCP و INP و CLS مصنفة تلقائياً بحسب جودتها (Good, Needs Improvement, Poor).",
      commonMistakes: "الاعتماد على FID بدلاً من INP في المشاريع الجديدة؛ حيث أوقفت Google دعم First Input Delay رسمياً واستبدلته بمقياس Interaction to Next Paint الأكثر شمولاً ودقة.",
      bestPractices: "قم بتثبيت أحدث إصدار من `web-vitals` (الإصدار 4 فما فوق) الذي يدعم INP بشكل قياسي، واستدع دالة التهيئة في ملف `main.jsx` مباشرة.",
      visualDiagram: "web-vitals Metric Lifecycle:\nUser Navigation ──► onFCP / onTTFB fired\n                      │\n                      ▼\nUser sees Largest Block ──► onLCP fired (rating: 'good')\n                      │\n                      ▼\nUser Clicks & Types     ──► onINP fired per interaction\n                      │\nUser Leaves Page        ──► onCLS final score captured ──► Beacon Sent"
    },
    {
      id: "18.5.g",
      title: "تحسين First Contentful Paint (FCP)",
      englishTerm: "First Contentful Paint (FCP) Optimization (إف سي بي)",
      description: "المقياس الذي يحسب الوقت المنقضي من لحظة بدء الانتقال إلى الصفحة وحتى قيام المتصفح برسم أي جزء من محتوى الـ DOM على الشاشة (سواء كان نصاً، أو صورة، أو عنصراً غير فارغ من الـ SVG). الحد الممتاز لـ FCP هو 1.8 ثانية أو أقل.",
      analogy: "يشبه إشارة الضوء الأخضر في إشارة المرور أو الإشعار الأول الذي يؤكد لك أن الرسالة قد وصلت، حتى قبل أن تقرأ تفاصيلها.",
      whyItMatters: "يطمئن المستخدم فوراً بأن الموقع حي ويعمل بنجاح، ويزيل القلق من كون الرابط معطلاً أو أن الصفحة عالقة.",
      syntax: "<!-- استخدام استضافة الخطوط المحلية وتصغير الـ CSS الحرج لتسريع FCP -->\n<link rel=\"preconnect\" href=\"https://api.myapp.com\" />",
      simpleExample: `// استيراد React مع مكون يضمن عرض نص بسيط فوري
import React from 'react';

export default function FastFcpPage() {
  return (
    <div className="p-4 bg-slate-950 text-white min-h-screen">
      {/* نص فوري خفيف يظهر في أول إطار للمتصفح (FCP < 1.0s) */}
      <header className="border-b border-slate-800 pb-3">
        <h1 className="text-xl font-bold text-sky-400">منصة كود المستقبل</h1>
        <p className="text-xs text-slate-400">جاري تحميل أحدث البيانات والخدمات...</p>
      </header>
    </div>
  );
}`,
      advancedExample: [
        "// تقنية تضمين الـ Critical CSS وتخفيف الكتل الحاجبة للتصيير (Render-Blocking Resources) لتسريع FCP",
        "// هذا التكوين يُطبق في index.html أو إعدادات Vite/Next.js",
        "export const fastFcpHtmlTemplate = [",
        "  '<!DOCTYPE html>',",
        "  '<html lang=\"ar\" dir=\"rtl\">',",
        "  '<head>',",
        "  '  <meta charset=\"UTF-8\" />',",
        "  '  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />',",
        "  '  <title>تطبيق فائق السرعة</title>',",
        "  '  <!-- 1. تضمين الأنماط الحرجة فقط في الرأس مباشرة لمنع توقف الرسم -->',",
        "  '  <style>',",
        "  '    body { margin: 0; background: #020617; color: #f8fafc; font-family: system-ui, sans-serif; }',",
        "  '    .app-skeleton { padding: 1.5rem; text-align: center; }',",
        "  '  </style>',",
        "  '  <!-- 2. تأجيل تحميل ملفات الـ CSS والـ JS الضخمة وغير العاجلة -->',",
        "  '  <link rel=\"modulepreload\" href=\"/src/main.jsx\" />',",
        "  '</head>',",
        "  '<body>',",
        "  '  <div id=\"root\">',",
        "  '    <!-- هيكل بديل يظهر فوراً بدون انتظار تحميل أي سطر JS لتحقيق FCP قياسي -->',",
        "  '    <div class=\"app-skeleton\">',",
        "  '      <h2 style=\"color: #38bdf8;\">أكاديمية البرمجة المتقدمة</h2>',",
        "  '      <p style=\"font-size: 0.875rem; color: #94a3b8;\">جاري تهيئة الواجهة التفاعلية...</p>',",
        "  '    </div>',",
        "  '  </div>',",
        "  '  <script type=\"module\" src=\"/src/main.jsx\"></script>',",
        "  '</body>',",
        "  '</html>'",
        "].join('\\n');"
      ].join('\n'),
      output: "بمجرد وصول ملف HTML، يرى المستخدم الهيكل الترحيبي والنصوص الأساسية في أقل من 500ms، مما يحقق درجة FCP استثنائية وخضراء تماماً.",
      commonMistakes: "وضع روابط سكربتات خارجية غير متزامنة (بدون defer أو async) في وسم <head>؛ يتوقف المتصفح عن قراءة وبناء الصفحة لحين اكتمال تنزيل وتنفيذ السكربت، مما يؤخر الـ FCP لثوانٍ.",
      bestPractices: "تجنب الموارد الحاجبة للتصيير (Render-blocking resources)، واستخدم دائماً خاصية type='module' أو defer مع السكربتات، واطبع كود الـ Skeleton الأولي داخل وسم <div id='root'> مباشرة في ملف index.html.",
      visualDiagram: "FCP Timeline:\nNavigation ──► DNS/TTFB ──► HTML Arrives ──► First DOM Content Painted! (FCP)\n                                                 │\n                                                 └──► LCP (Largest element painted later)"
    },
    {
      id: "18.5.h",
      title: "تحسين Time to First Byte (TTFB)",
      englishTerm: "Time to First Byte (TTFB) Optimization (تي تي إف بي)",
      description: "المقياس الأساسي للبنية التحتية الذي يقيس الوقت الذي يستغرقه المتصفح من لحظة إرسال طلب الصفحة عبر الشبكة وحتى استلام أول بايت من البيانات من خادم الويب. يتأثر بزمن استجابة الـ DNS، ومصافحة الـ TLS، وسرعة معالجة الخادم وقاعدة البيانات، واستخدام شبكات توصيل المحتوى (CDNs). الحد المثالي هو أقل من 800ms.",
      analogy: "يشبه الوقت الذي يستغرقه مطبخ المطعم لتحضير وإخراج أول طبق مقبلات صغير إلى طاولتك بعد أن أعطيت النادل طلبك.",
      whyItMatters: "هو حجر الأساس لكل مقاييس الأداء اللاحقة؛ إذا كان TTFB بطيئاً ويستغرق ثانيتين، فمن المستحيل رياضياً أن تحقق LCP أو FCP في أقل من ثانيتين!",
      syntax: "// إعداد ترويسات التخزين المؤقت في خادم الويب (Cache-Control):\nCache-Control: public, max-age=31536000, immutable",
      simpleExample: `// مثال على تكوين ترويسات الكاش الفائقة للأصول الثابتة في خادم النشر
export const cacheControlConfig = {
  // ترويسة ملفات HTML: لا تخزنها في كاش دائم لضمان حصول المستخدم على أحدث إصدار
  'index.html': 'no-cache',
  // ترويسة الأصول المشفرة بالـ Hash (مثل assets/index-a83d.js): خزنها في كاش المتصفح لعام كامل
  'assets/*': 'public, max-age=31536000, immutable'
};`,
      advancedExample: [
        "// إعداد خادم Edge Worker (مثل Cloudflare Workers / Vercel Edge) لتقديم استجابة TTFB متناهية السرعة (<50ms)",
        "/* كود خادم الحافة (Edge Function): */",
        "export const edgeServerSnippet = [",
        "  'export default {',",
        "  '  async fetch(request, env, ctx) {',",
        "  '    const cache = caches.default;',",
        "  '    // 1. محاولة استرجاع الصفحة المخزنة على خادم الحافة الجغرافي الأقرب للزائر',",
        "  '    let response = await cache.match(request);',",
        "  '    if (response) {',",
        "  '      // إضافة ترويسة تفيد بإصابة الكاش واسترجاع الرد في أقل من 30 مللي ثانية!',",
        "  '      const newHeaders = new Headers(response.headers);',",
        "  '      newHeaders.set(\"X-Cache-Status\", \"HIT\");',",
        "  '      return new Response(response.body, { ...response, headers: newHeaders });',",
        "  '    }',",
        "  '',",
        "  '    // 2. إذا لم توجد، يتم جلبها من خادم الأصل وتخزينها للمستخدمين التاليين',",
        "  '    response = await fetch(request);',",
        "  '    ctx.waitUntil(cache.put(request, response.clone()));',",
        "  '    return response;',",
        "  '  }',",
        "  '};'",
        "].join('\\n');"
      ].join('\n'),
      output: "يتم تسليم أول بايت للمستخدم من أقرب خادم CDN جغرافي له في أقل من 40 مللي ثانية (TTFB < 50ms)، مما يمهد الطريق لتجربة تصفح فورية وخاطفة.",
      commonMistakes: "تجاهل استخدام شبكة توصيل محتوى (CDN) واستضافة تطبيق الـ SPA على خادم مركزي واحد في قارة أخرى؛ مما يضيف 300ms إضافية في زمن تأخير الشبكة (Round Trip Time) لكل طلب.",
      bestPractices: "استخدم شبكات CDN حديثة (مثل Cloudflare, Vercel, Fastly)، وفعل ضغط Brotli أو Gzip على الخادم، واضبط ترويسات Cache-Control بدقة للأصول الثابتة.",
      visualDiagram: "TTFB Waterfall Breakdown:\nClient Request ──► [DNS Lookup] ──► [TCP Handshake] ──► [TLS SSL Negotiation] ──► [Server Processing] ──► First Byte Arrives!\n                    └───────────────────────── TTFB Duration ────────────────────────┘"
    }
  ],
  quizzes: [
    {
      id: "q18.5.1",
      question: "ما هو التغيير الأساسي الذي أجرته Google في Core Web Vitals في ربيع 2024 بخصوص مقاييس التفاعل؟",
      options: [
        "تم إلغاء مقاييس التفاعل بالكامل.",
        "تم استبدال مقياس First Input Delay (FID) رسمياً بمقياس Interaction to Next Paint (INP) لقياس كافة تفاعلات الزيارة بدقة.",
        "تم تغيير اسم LCP إلى INP.",
        "تم منع استخدام React في المواقع التي ترغب في تصدر نتائج البحث."
      ],
      correctAnswer: 1,
      explanation: "كان FID يقيس فقط التأخير الأولي لأول تفاعل للمستخدم ويتجاهل باقي مدة الزيارة، لذلك قامت Google باستبداله بـ INP الذي يراقب كل التفاعلات ويقيس الزمن الإجمالي حتى رسم الإطار التالي (Next Paint)."
    },
    {
      id: "q18.5.2",
      question: "ما السبب الأكثر شيوعاً لتدهور نتيجة مقياس Cumulative Layout Shift (CLS)؟",
      options: [
        "استخدام ألوان غامقة في التصميم.",
        "الصور وعناصر الفيديو والإعلانات التي لا تحتوي على أبعاد محددة مسبقاً (width/height أو aspect-ratio) في الـ CSS.",
        "استخدام دالة console.log داخل الكود.",
        "كتابة كود TypeScript بدلاً من JavaScript."
      ],
      correctAnswer: 1,
      explanation: "عندما تفتقر الصور والحاويات الإعلانية إلى أبعاد مسبقة، يتعامل معها المتصفح كـ 0 بكسل حتى تكتمل عملية التنزيل، ثم تتسع فجأة دافعة باقي محتويات الصفحة للأسفل، مما يُحدث قفزة بصرية مزعجة ترفع CLS."
    },
    {
      id: "q18.5.3",
      question: "لماذا يُعتبر مقياس Time to First Byte (TTFB) حاسماً لجميع مقاييس الأداء الأخرى؟",
      options: [
        "لأنه يحدد لون الخط المستخدم في الصفحة.",
        "لأنه يمثل خط البداية الزمني لتلقي أي بيانات؛ فإذا تأخر الخادم في إرسال أول بايت، سيتأخر بالتبعية كل من FCP و LCP بنفس المقدار.",
        "لأنه يتحكم في حجم ذاكرة الهاتف العشوائية (RAM).",
        "لأنه يلغي الحاجة إلى كتابة كود CSS."
      ],
      correctAnswer: 1,
      explanation: "لا يستطيع المتصفح البدء في فك تشفير الـ HTML أو تنزيل الأنماط والصور حتى يستلم أول بايت من الخادم (TTFB)، ولذلك فإن بطء الخادم يمثل تأخيراً إجبارياً يُضاف على كافة مقاييس الصفحة."
    }
  ],
  exercise: {
    title: "تمرين عملي: إنشاء مكوّن لتسجيل وإرسال تقارير Core Web Vitals إلى السيرفر",
    description: "قم بإنشاء خطاف useWebVitalsReporter يستدعي دوال مكتبة web-vitals الرسمية (onLCP, onINP, onCLS) ويقوم بإرسال المقاييس إلى نقطة نهاية API تجريبية باستخدام navigator.sendBeacon.",
    hints: [
      "استورد دوال onCLS, onINP, onLCP من مكتبة web-vitals.",
      "اكتب دالة إرسال تستخدم navigator.sendBeacon مع صياغة JSON.",
      "نفذ الربط داخل useEffect مرة واحدة عند تحميل التطبيق."
    ],
    solution: `import { useEffect } from 'react';
import { onCLS, onINP, onLCP } from 'web-vitals';

export function useWebVitalsReporter(analyticsEndpoint = '/api/vitals') {
  useEffect(() => {
    function sendMetric(metric) {
      const data = JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
        timestamp: Date.now()
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon(analyticsEndpoint, data);
      } else {
        fetch(analyticsEndpoint, { method: 'POST', body: data, keepalive: true });
      }
      console.log('[Web Vitals Reported]:', metric.name, metric.value, metric.rating);
    }

    onCLS(sendMetric);
    onINP(sendMetric);
    onLCP(sendMetric);
  }, [analyticsEndpoint]);
}`
  },
  infographic: {
    title: "أركان مؤشرات Core Web Vitals الثلاثية",
    subtitle: "المعايير المعتمدة لسرعة وتفاعل واستقرار مواقع الويب الحديثة",
    steps: [
      { step: "1", title: "LCP (سرعة التحميل)", desc: "أقل من 2.5 ثانية: تحسين صورة الـ Hero بالأولوية العالية واستضافة الخطوط محلياً." },
      { step: "2", title: "INP (سلاسة التفاعل)", desc: "أقل من 200 مللي ثانية: ترحيل الحسابات الثقيلة بـ startTransition والرد بـ Optimistic UI." },
      { step: "3", title: "CLS (الاستقرار البصري)", desc: "أقل من 0.1: حجز أبعاد الصور والإعلانات مسبقاً عبر aspect-ratio ومنع قفزات النصوص." },
      { step: "4", title: "RUM & web-vitals", desc: "قياس التجربة الحقيقية من زوار الموقع الميدانيين عبر مكتبة web-vitals و sendBeacon." }
    ]
  }
};
