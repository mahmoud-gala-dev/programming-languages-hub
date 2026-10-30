// src/data/sections/section18/topic1.js

export const topic1 = {
  id: "18.1",
  title: "تحليل الأداء (Performance Profiling & Measurement)",
  description: "دليل عملي واحترافي شامل للتعرف على أدوات وتقنيات فحص وتحليل أداء تطبيقات React، قياس زمن التصيير، واكتشاف عنق الزجاجة (Bottlenecks) وحجم الحزم البرمجية.",
  subtopics: [
    {
      id: "18.1.a",
      title: "استخدام React Profiler",
      englishTerm: "React Profiler API & Extension (ري-آكت بروفايلر)",
      description: "أداة React Profiler هي مكوّن مدمج في نواة React (React.Profiler) وإضافة رسمية في أدوات المطور (React DevTools) تُتيح تسجيل وقياس تكلفة تصيير كل مكوّن في شجرة المكونات. تساعد المطورين على معرفة عدد المرات التي تم فيها تصيير المكوّن، والزمن المستغرق في مرحلتي Commit و Render، لتحديد الأجزاء البطيئة في الواجهة.",
      analogy: "يشبه جهاز رسم القلب (ECG) في الطب؛ لا يغير طريقة نبض القلب، لكنه يرسم بدقة متناهية كل نبضة والزمن الذي استغرقته لرصد أي خلل مفاجئ أو عبء غير طبيعي.",
      whyItMatters: "بدون أداة Profiler، يُبنى تحسين الأداء على التخمين والحدس، مما يؤدي إلى تعقيد الكود بمحاولات تحسين غير مجدية. يوفر Profiler بيانات كمية وأرقاماً دقيقة تقود قرارات التحسين المبنية على الحقائق.",
      syntax: "<Profiler id=\"ComponentName\" onRender={callback}>\n  <MyComponent />\n</Profiler>",
      simpleExample: `// استيراد مكون المراقبة Profiler من مكتبة React
import React, { Profiler } from 'react';

// دالة رد النداء التي تُستدعى بعد كل تصيير لتسجيل القياسات
function onRenderCallback(
  // المعرف الفريد لشجرة المكونات الخاضعة للقياس
  id,
  // نوع العملية: هل هي أول تركيب mount أم تحديث update
  phase,
  // الزمن الفعلي المستغرق في تصيير هذه الشجرة بالمللي ثانية
  actualDuration,
  // الزمن المقدر لتصيير الشجرة كاملة بدون استخدام الذاكرة المؤقتة
  baseDuration,
  // التوقيت الزمني لبدء معالجة هذا التحديث بواسطة React
  startTime,
  // التوقيت الزمني لانتهاء التحديث وإرساله للـ DOM
  commitTime
) {
  // طباعة بيانات الأداء بدقة داخل شاشة التحكم
  console.log('مكون:', id, 'الطور:', phase, 'الزمن الفعلي:', actualDuration, 'ms');
}

// المكون الرئيسي الذي يدمج Profiler حول الجزء المراد مراقبته
export default function SimpleProfilerApp() {
  // إرجاع واجهة المستخدم مع تغليف قائمة المنتجات بـ Profiler
  return (
    // تغليف المكون ومراقبته بمعرف فريد ودالة المعالجة
    <Profiler id="ProductFeed" onRender={onRenderCallback}>
      {/* عنصر بسيط يمثل محتوى الواجهة الخاضع للاختبار */}
      <div className="p-4 bg-slate-900 text-white rounded-lg">
        {/* عنوان يعبر عن تغليف المكون */}
        <h2 className="text-xl font-bold">قائمة المنتجات المراقبة</h2>
      </div>
    </Profiler>
  );
}`,
      advancedExample: [
        "// استيراد الخطافات الأساسية والمكون Profiler من React",
        "import React, { Profiler, useState, useCallback } from 'react';",
        "",
        "// دالة مساعدة لإرسال مقاييس الأداء إلى خادم تحليلات خارجي (Telemetry)",
        "function sendToAnalytics(metric) {",
        "  // محاكاة إرسال البيانات بدقة عالية عبر Beacon API أو Fetch",
        "  console.info('[Analytics Beacon]', JSON.stringify(metric));",
        "}",
        "",
        "// مكوّن غلاف احترافي لإعادة الاستخدام يدمج قياس الأداء وحساب معدلات التدهور",
        "export function PerformanceObserver({ id, thresholdMs = 16, children }) {",
        "  // الاحتفاظ بسجل تاريخي لمتوسط زمن التصيير لتنبيه الفريق عند البطء",
        "  const [renderCount, setRenderCount] = useState(0);",
        "",
        "  // دالة المعالجة المجهزة لتجنب إعادة الإنشاء وحساب الأرقام",
        "  const handleRender = useCallback((profId, phase, actualDuration, baseDuration) => {",
        "    // زيادة عدد عمليات التصيير المسجلة",
        "    setRenderCount(prev => prev + 1);",
        "    ",
        "    // فحص ما إذا كان زمن التصيير تجاوز ميزانية الإطارات المحددة (16ms لـ 60fps)",
        "    const isJanky = actualDuration > thresholdMs;",
        "    ",
        "    // تجهيز كائن المقاييس الغني بالمعلومات",
        "    const payload = {",
        "      componentId: profId,",
        "      phase,",
        "      actualDuration: Number(actualDuration.toFixed(2)),",
        "      baseDuration: Number(baseDuration.toFixed(2)),",
        "      isJanky,",
        "      timestamp: Date.now()",
        "    };",
        "    ",
        "    // في حال بطء التصيير يتم إرسال تنبيه فوري",
        "    if (isJanky) {",
        "      console.warn('⚠️ تحذير أداء: المكون ' + profId + ' استغرق ' + actualDuration.toFixed(2) + 'ms');",
        "    }",
        "    ",
        "    // إرسال المقياس إلى الخادم",
        "    sendToAnalytics(payload);",
        "  }, [thresholdMs]);",
        "",
        "  // إرجاع مكوّن Profiler مع واجهة معلومات تعرض عدد مرات التصيير",
        "  return (",
        "    <div className='relative border border-emerald-500/30 rounded-xl p-4 bg-slate-950 text-slate-100'>",
        "      {/* شريط معلومات يوضح عدد مرات التصيير المراقبة */}",
        "      <div className='mb-2 flex justify-between text-xs text-emerald-400 font-mono'>",
        "        <span>المراقب: {id}</span>",
        "        <span>مرات التصيير: {renderCount}</span>",
        "      </div>",
        "      {/* تغليف الأبناء بـ Profiler المدمج */}",
        "      <Profiler id={id} onRender={handleRender}>",
        "        {children}",
        "      </Profiler>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "يقوم Profiler بحساب الأزمنة بدقة ميكروثانية ويطبع في الكونسول أو يُرسل للخادم تقريراً يحتوي على (actualDuration) و(baseDuration) بعد كل عملية Render و Commit.",
      commonMistakes: "ترك مكوّنات <Profiler> تعمل في بيئة الإنتاج على كافة أجزاء التطبيق، مما يُسبب عبئاً إضافياً طفيفاً في تتبع كل تصيير. يجب تفعيلها فقط لأغراض المراقبة المستهدفة أو تجميع العينات (Sampling).",
      bestPractices: "استخدم قياس actualDuration لاكتشاف التباطؤ، وقارنه بـ baseDuration؛ إذا كان actualDuration أصغر بكثير من baseDuration، فهذا يعني أن آليات الحفظ المؤقت (Memoization) تعمل بنجاح.",
      visualDiagram: "┌────────────────────────────────────────┐\n│         React Virtual DOM Update       │\n└───────────────────┬────────────────────┘\n                    ▼\n┌────────────────────────────────────────┐\n│       <Profiler id=\"TableFeed\">        │\n│  ├── Render Phase: actualDuration      │\n│  └── Commit Phase: DOM Mount Time      │\n└───────────────────┬────────────────────┘\n                    ▼\n       onRenderCallback(id, phase, ...)"
    },
    {
      id: "18.1.b",
      title: "قياس زمن تصيير المكونات",
      englishTerm: "Measuring Component Render Duration (مِيجرينغ ريندر ديوريشن)",
      description: "القياس الزمني الدقيق للعمليات الحسابية وبناء شجرة الـ Virtual DOM للمكونات. يُقاس الزمن باستخدام واجهات Performance API القياسية في المتصفح مثل performance.mark() و performance.measure()، إلى جانب مقاييس React الدقيقة لمعرفة كم مللي ثانية يستهلك المكوّن من ميزانية الإطار (Frame Budget).",
      analogy: "يشبه ساعة الإيقاف في سباقات الجري؛ حيث يُسجل وقت الانطلاق ووقت الوصول بدقة كسر من الألف من الثانية لمعرفة أي متسابق استغرق زمناً أطول من المعتاد.",
      whyItMatters: "يحتاج المتصفح إلى تقديم 60 إطاراً في الثانية (60 FPS) للحفاظ على سلاسة الواجهة، مما يمنح كل إطار 16.6 مللي ثانية فقط. تجاوز هذا الزمن يتسبب في تقطيع الحركة (Jank) وفقدان استجابة الواجهة.",
      syntax: "performance.mark('render-start');\n// عمليات التصيير\nperformance.mark('render-end');\nperformance.measure('render-duration', 'render-start', 'render-end');",
      simpleExample: `// استيراد خطاف التأثير وخطاف الحالة لقياس زمن الدورة
import React, { useEffect, useState } from 'react';

// مكوّن يقوم بقياس الزمن المستغرق من بدء التركيب حتى انتهاء الـ DOM
export default function TimerBenchmark() {
  // تعريف حالة لتخزين النتيجة بالمللي ثانية
  const [duration, setDuration] = useState(null);

  // وضع علامة البداية قبل بدء الحسابات
  performance.mark('benchmark-start');

  // خطاف useEffect يعمل بعد اكتمال مرحلة الـ Commit وظهور العنصر
  useEffect(() => {
    // وضع علامة النهاية فور اكتمال العرض
    performance.mark('benchmark-end');
    // حساب الفرق الزمني بين العلامتين بدقة عالية
    performance.measure('benchmark-measure', 'benchmark-start', 'benchmark-end');
    
    // جلب القياس المحسوب من مخزن أداء المتصفح
    const entries = performance.getEntriesByName('benchmark-measure');
    // استخراج قيمة المدة الزمنية المستغرقة
    const lastEntry = entries[entries.length - 1];
    
    // تخزين الزمن في الحالة لعرضه للمستخدم
    if (lastEntry) {
      setDuration(lastEntry.duration.toFixed(2));
    }
  }, []);

  // إرجاع واجهة بسيطة تعرض الزمن المقاس
  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <p>زمن التصيير والتركيب: {duration ? duration + ' مللي ثانية' : 'جاري الحساب...'}</p>
    </div>
  );
}`,
      advancedExample: [
        "// استيراد الخطافات اللازمة لإنشاء Custom Hook لقياس أداء أي مكوّن",
        "import { useEffect, useRef } from 'react';",
        "",
        "// خطاف مخصص فائق الدقة يقيس زمن التصيير والتحديثات لكل دورة حياة",
        "export function useRenderBenchmark(componentName) {",
        "  // مرجع للاحتفاظ برقم الدورة الحالية",
        "  const renderCount = useRef(0);",
        "  // مرجع لحفظ توقيت بداية التصيير في هذه الدورة",
        "  const startTimeRef = useRef(performance.now());",
        "",
        "  // في كل مرة يُنفذ فيها جسم الدالة (Render Phase) يتم تجديد وقت البداية",
        "  startTimeRef.current = performance.now();",
        "  // زيادة عدد دورات التصيير للمكون",
        "  renderCount.current += 1;",
        "",
        "  // خطاف التأثير يُنفذ بعد انتهاء الطلاء على الشاشة (Commit Phase)",
        "  useEffect(() => {",
        "    // حساب التوقيت عند اكتمال العرض في الـ DOM",
        "    const endTime = performance.now();",
        "    // حساب الفارق الزمني بدقة الكسر العشري",
        "    const delta = endTime - startTimeRef.current;",
        "    ",
        "    // إعداد تقرير مخصص بالألوان في وحدة التحكم",
        "    const badgeStyle = delta > 16 ",
        "      ? 'background: #ef4444; color: white; padding: 2px 6px; border-radius: 4px;' ",
        "      : 'background: #10b981; color: white; padding: 2px 6px; border-radius: 4px;';",
        "    ",
        "    // طباعة تقرير مفصل عن الدورة والزمن مع تنبيه ملون",
        "    console.log(",
        "      '%c' + componentName + ' [دورة ' + renderCount.current + ']%c استغرق: ' + delta.toFixed(3) + ' ms',",
        "      badgeStyle,",
        "      'color: #38bdf8; font-weight: bold;'",
        "    );",
        "  });",
        "}"
      ].join('\n'),
      output: "يقيس بدقة الفارق الزمني بين بداية معالجة المكون والانتهاء من رسمه على الشاشة، مما يوضح في الكونسول إذا كانت العملية تجاوزت 16 مللي ثانية.",
      commonMistakes: "استخدام Date.now() بدلاً من performance.now() لقياس الأداء. دالة Date.now() ليست متناهية الدقة وتعتمد على ساعة نظام التشغيل التي قد تتذبذب، بينما توفر Performance API دقة بالميكروثانية.",
      bestPractices: "قم بإنشاء Hook مخصص مثل useRenderBenchmark وقم بتفعيله فقط في وضع التطوير (process.env.NODE_ENV === 'development') لتجنب أي استهلاك غير ضروري في بيئة الإنتاج.",
      visualDiagram: "Render Phase (performance.now) ────────┐\n  │ JSX generation & Virtual DOM Diffing │\n  ▼                                      │ Total Render\nCommit Phase (useEffect/useLayoutEffect) ┼─► Duration (ms)\n  │ Real DOM Mutation & Layout Paint     │\n  ▼                                      │\nFinished Screen Paint ───────────────────┘"
    },
    {
      id: "18.1.c",
      title: "تحديد أسباب إعادة التصيير",
      englishTerm: "Identifying Re-render Causes (أيدينتيفاينغ ري-ريندر كوزز)",
      description: "معرفة العامل الحقيقي الذي أجبر مكوّن React على إعادة التصيير، سواء كان تغيراً في الـ Props، أو تحديثاً في الـ State، أو تغيراً في سياق Context، أو تصييراً من المكوّن الأب. تتيح أدوات مثل React DevTools (تسليط الضوء Highlight updates) ومكتبات مثل 'why-did-you-render' رصد التحديثات غير المفيدة ومقارنة القيم السابقة بالجديدة.",
      analogy: "يشبه المحقق الجنائي الذي يبحث في مسرح الجريمة عن البصمة التي سببت إنذار الحريق: هل كان دخاناً حقيقياً (بيانات تغيرت فعلاً) أم اهتزازاً كاذباً في المستشعر (كائن جديد بنفس الخصائص)؟",
      whyItMatters: "أكثر من 80% من مشاكل بطء تطبيقات React تنتج عن تصيير المكونات بدون وجود أي تغيير بصري حقيقي (Wasted Renders)، وتحديد السبب هو الخطوة الأولى والأساسية لإيقاف الهدر.",
      syntax: "// تشغيل ميزة تسجيل أسباب التحديث في React DevTools\n// Settings -> Profiler -> Record why each component rendered",
      simpleExample: `// استيراد الخطافات لمعاينة وتتبع تغير الـ Props
import React, { useEffect, useRef } from 'react';

// مكون يستقبل خصائص ويوضح بالضبط أي خاصية تغيرت وسببت التحديث
export function WhyDidIRender({ title, count, user }) {
  // مرجع للاحتفاظ بالخصائص السابقة لمقارنتها
  const prevProps = useRef({ title, count, user });

  // فحص المقارنة في كل دورة تحديث
  useEffect(() => {
    // تجميع الخصائص المتغيرة في كائن
    const changes = {};
    // فحص جميع الخصائص ومقارنة القيمة القديمة بالجديدة بالمساواة المرجعية
    Object.keys({ title, count, user }).forEach(key => {
      if (prevProps.current[key] !== { title, count, user }[key]) {
        changes[key] = {
          from: prevProps.current[key],
          to: { title, count, user }[key]
        };
      }
    });

    // إذا وجدنا تغيرات نقوم بطباعتها
    if (Object.keys(changes).length > 0) {
      console.log('سبب إعادة التصيير هو تغير الخصائص:', changes);
    } else {
      console.log('إعادة تصيير ناتجة عن المكون الأب بدون أي تغير في الـ Props!');
    }

    // تحديث المرجع بالخصائص الجديدة للمقارنة القادمة
    prevProps.current = { title, count, user };
  });

  return <div className="p-3 bg-slate-800 text-white rounded">العنوان: {title} | العداد: {count}</div>;
}`,
      advancedExample: [
        "// استيراد الخطافات لبناء Hook عام يكشف سبب إعادة التصيير لأي مكوّن",
        "import { useEffect, useRef } from 'react';",
        "",
        "// خطاف احترافي whyDidYouUpdate يفحص المراجع والقيم السطحية بدقة",
        "export function useWhyDidYouUpdate(name, props) {",
        "  // حفظ الخصائص السابقة في مرجع دائم",
        "  const previousProps = useRef();",
        "",
        "  // تنفيذ الفحص بعد كل عملية تحديث للمكون",
        "  useEffect(() => {",
        "    // التحقق من وجود خصائص سابقة (أي ليست أول عملية تركيب)",
        "    if (previousProps.current) {",
        "      // استخراج جميع المفاتيح الفريدة بين الخصائص السابقة والحالية",
        "      const allKeys = Object.keys({ ...previousProps.current, ...props });",
        "      // كائن لتجميع الفروقات المكتشفة",
        "      const changesObj = {};",
        "      ",
        "      // تكرار على كل مفتاح لاكتشاف الاختلاف",
        "      allKeys.forEach(key => {",
        "        // فحص إذا كانت القيمة السابقة تختلف بالمرجع عن القيمة الحالية",
        "        if (previousProps.current[key] !== props[key]) {",
        "          // التحقق مما إذا كان المحتوى متطابقاً رغم اختلاف المرجع (المشكلة الأشهر)",
        "          const isSameContent = JSON.stringify(previousProps.current[key]) === JSON.stringify(props[key]);",
        "          ",
        "          // تسجيل الفارق بالتفصيل مع توضيح سبب المشكلة المرجعية",
        "          changesObj[key] = {",
        "            oldValue: previousProps.current[key],",
        "            newValue: props[key],",
        "            isReferentialOnly: isSameContent",
        "          };",
        "        }",
        "      });",
        "      ",
        "      // طباعة التقرير إذا تم رصد أي تحديث",
        "      if (Object.keys(changesObj).length) {",
        "        console.group('[WhyDidYouUpdate] المكون: ' + name);",
        "        console.table(changesObj);",
        "        console.groupEnd();",
        "      }",
        "    }",
        "    // تحديث المرجع بالخصائص الحالية للدورة التالية",
        "    previousProps.current = props;",
        "  });",
        "}"
      ].join('\n'),
      output: "يعرض كائناً تحليلياً يوضح بالضبط أسماء الـ Props المتغيرة، ويكشف ما إذا كان التغير بسبب إنشاء كائن جديد في الذاكرة يحمل نفس القيم القديمة (Referential Inequality).",
      commonMistakes: "الاعتقاد بأن المكون يعيد التصيير فقط عندما تتغير الـ Props الخاصة به. في الحقيقة، القاعدة الافتراضية في React هي: عندما يعيد المكون الأب التصيير، فإن جميع أبنائه يعيدون التصيير تلقائياً ما لم يتم تغليفهم بـ React.memo.",
      bestPractices: "قم بتفعيل خيار 'Record why each component rendered' من إعدادات React DevTools في تبويب Profiler، لترى أمام كل مكوّن سبب التحديث مكتوباً بوضوح (مثل Hook 2 changed أو Props changed).",
      visualDiagram: "Re-render Trigger?\n ├── 1. State Changed in Component? ────► [Legitimate Re-render]\n ├── 2. Parent Re-rendered? ─────────────► [Check if memo is needed]\n ├── 3. Context Value Mutated? ─────────► [Check context splitting]\n └── 4. New Object/Function Prop? ──────► [Fix with useMemo/useCallback]"
    },
    {
      id: "18.1.d",
      title: "استخدام Lighthouse لتحليل الأداء",
      englishTerm: "Lighthouse Performance Auditing (لايت-هاوس بيرفورمانس)",
      description: "أداة تدقيق آلية ومفتوحة المصدر مدمجة داخل متصفح Google Chrome، تُقيم تطبيق الويب عبر 5 محاور رئيسية: الأداء (Performance)، إمكانية الوصول (Accessibility)، أفضل الممارسات (Best Practices)، تحسين محركات البحث (SEO)، وتطبيقات الويب التقدمية (PWA). تمنح درجات من 100 وتقدم توصيات عملية محددة لتحسين سرعة التحميل.",
      analogy: "يشبه الفحص الفني الشامل للسيارة قبل السفر على الطريق السريع؛ يقيس كفاءة الفرامل والمحرك والعجلات ويعطيك قائمة واضحة بما يجب إصلاؤه للحصول على أعلى سرعة بأمان.",
      whyItMatters: "تستخدم Google مقاييس Lighthouse وخوارزميات Core Web Vitals كعامل أساسي في ترتيب نتائج البحث (SEO)، بالإضافة إلى التأثير المباشر لسرعة الصفحة على معدلات التحويل (Conversion Rates) وبقاء المستخدمين.",
      syntax: "# تشغيل Lighthouse عبر سطر الأوامر (CLI)\nnpx lighthouse https://myapp.com --view --preset=desktop",
      simpleExample: `// تكوين إعدادات Lighthouse البرمجية للتشغيل الآلي في اختبارات CI/CD
// استيراد دالة الفحص من مكتبة lighthouse الرسمية
import lighthouse from 'lighthouse';
// استيراد chrome-launcher لتشغيل متصفح خفي للفحص
import * as chromeLauncher from 'chrome-launcher';

// دالة غير متزامنة لفحص رابط التطبيق محلياً
async function runPerformanceAudit(targetUrl) {
  // تشغيل متصفح كروم في الوضع الخفي بدون واجهة رسومية
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  
  // خيارات الفحص المحددة للأداء والمنصة
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port
  };

  // تنفيذ الفحص وجلب تقرير النتائج
  const runnerResult = await lighthouse(targetUrl, options);
  
  // استخراج النتيجة الإجمالية للأداء من 100
  const performanceScore = runnerResult.lhr.categories.performance.score * 100;
  // طباعة النتيجة النهائية
  console.log('درجة الأداء الإجمالية في Lighthouse:', performanceScore);

  // إغلاق جلسة المتصفح
  await chrome.kill();
  return performanceScore;
}`,
      advancedExample: [
        "// برنامج نصي متقدم لفحص معايير Core Web Vitals ومقارنتها بميزانية الأداء (Performance Budget)",
        "import lighthouse from 'lighthouse';",
        "import * as chromeLauncher from 'chrome-launcher';",
        "",
        "// تعريف الحدود المسموح بها لميزانية الأداء قبل الموافقة على الإصدار",
        "const PERFORMANCE_BUDGET = {",
        "  minScore: 90,                  // لا نقبل أقل من 90%",
        "  maxLCP: 2500,                  // Largest Contentful Paint أقل من 2.5 ثانية",
        "  maxTBT: 200,                   // Total Blocking Time أقل من 200ms",
        "  maxCLS: 0.1                    // Cumulative Layout Shift أقل من 0.1",
        "};",
        "",
        "export async function assertPerformanceBudget(url) {",
        "  // تشغيل المتصفح المحاكي لشبكة الجيل الرابع والأجهزة المتوسطة",
        "  const chrome = await chromeLauncher.launch({",
        "    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']",
        "  });",
        "",
        "  // ضبط إعدادات الفحص مع محاكاة هاتف محمول لبيان الأداء الواقعي",
        "  const options = {",
        "    port: chrome.port,",
        "    output: 'json',",
        "    onlyCategories: ['performance'],",
        "    throttlingMethod: 'simulate'",
        "  };",
        "",
        "  // تشغيل التدقيق واستخراج بيانات المقاييس الأساسية",
        "  const result = await lighthouse(url, options);",
        "  const audits = result.lhr.audits;",
        "  const score = result.lhr.categories.performance.score * 100;",
        "",
        "  // استخراج قيم المقاييس المستهدفة",
        "  const metrics = {",
        "    score,",
        "    lcp: audits['largest-contentful-paint'].numericValue,",
        "    tbt: audits['total-blocking-time'].numericValue,",
        "    cls: audits['cumulative-layout-shift'].numericValue",
        "  };",
        "",
        "  // مقارنة النتائج بالميزانية المحددة وتسجيل الخروقات",
        "  const violations = [];",
        "  if (metrics.score < PERFORMANCE_BUDGET.minScore) {",
        "    violations.push('النتيجة ' + metrics.score + ' أقل من الحد الأدنى ' + PERFORMANCE_BUDGET.minScore);",
        "  }",
        "  if (metrics.lcp > PERFORMANCE_BUDGET.maxLCP) {",
        "    violations.push('مقياس LCP ' + metrics.lcp.toFixed(0) + 'ms تجاوز ' + PERFORMANCE_BUDGET.maxLCP + 'ms');",
        "  }",
        "  if (metrics.tbt > PERFORMANCE_BUDGET.maxTBT) {",
        "    violations.push('مقياس TBT ' + metrics.tbt.toFixed(0) + 'ms تجاوز ' + PERFORMANCE_BUDGET.maxTBT + 'ms');",
        "  }",
        "",
        "  // إغلاق المتصفح",
        "  await chrome.kill();",
        "",
        "  // إرجاع تقرير الفحص والتحقق من النجاح أو الفشل",
        "  return {",
        "    passed: violations.length === 0,",
        "    metrics,",
        "    violations",
        "  };",
        "}"
      ].join('\n'),
      output: "يُنتج تقريراً شاملاً بدرجة تقييم ملونة (أخضر 90-100، برتقالي 50-89، أحمر 0-49) مع قائمة بالفرص المتاحة (Opportunities) مثل تصغير الصور، وتأجيل تحميل JavaScript غير المستخدم.",
      commonMistakes: "تشغيل فحص Lighthouse في وضع التطوير (npm run dev) أثناء عمل خادم Vite أو Webpack مع Hot Module Replacement، أو تشغيله أثناء وجود إضافات مفعلة في المتصفح. هذا يعطي نتائج سيئة ومضللة تماماً.",
      bestPractices: "قم ببناء التطبيق دائماً بنسخة الإنتاج (npm run build) ثم شغله محلياً (npm run preview)، وافتح نافذة تصفح خفي (Incognito Window) بدون أي إضافات قبل تشغيل تدقيق Lighthouse للحصول على نتائج مطابقة للواقع.",
      visualDiagram: "Lighthouse Audit Flow:\n┌───────────────────────────────────────────────┐\n│ Build Production -> Launch Incognito Window   │\n└──────────────────────┬────────────────────────┘\n                       ▼\n┌───────────────────────────────────────────────┐\n│  Network Throttling + CPU 4x Slowdown Emulate │\n└──────────────────────┬────────────────────────┘\n                       ▼\n  Score (0-100) | LCP (ms) | TBT (ms) | CLS (ratio)"
    },
    {
      id: "18.1.e",
      title: "استخدام أدوات Chrome DevTools Performance",
      englishTerm: "Chrome DevTools Performance Panel (كروم ديف-تولز بيرفورمانس)",
      description: "اللوحة الأكثر عمقاً وتفصيلاً لتحليل أداء الواجهات في المتصفح. تُتيح تسجيل لقطات زمنية كاملة (Flames Chart) توضح كل ميكروثانية يقضيها المسار الرئيسي (Main Thread) في: تنفيذ كود JavaScript (Evaluate Script)، وحساب الأنماط (Recalculate Style)، والتخطيط (Layout)، والرسم (Paint).",
      analogy: "يشبه الصندوق الأسود وتسجيلات الرادار في الطائرات؛ يسجل كل ثانية من الرحلة بالتفصيل متى صعدت الطائرة، ومتى حدثت مطبات هوائية، وما المحرك الذي كان يستهلك طاقة مفرطة.",
      whyItMatters: "تسمح لك باكتشاف 'المهام الطويلة' (Long Tasks التي تتجاوز 50ms) وحالات تجميد الواجهة (UI Freezing)، ورصد توقيتات دوال React الحقيقية داخل متصفح المستخدم.",
      syntax: "// تشغيل التسجيل البرمجي أو الضغط على زر Record في تبويب Performance\nconsole.profile('MyProfile');\n// العمليات المستهدفة\nconsole.profileEnd('MyProfile');",
      simpleExample: `// استيراد React مع مكون يقوم بعملية حسابية مجهدة لاختبارها في DevTools
import React, { useState } from 'react';

export default function HeavyComputationDemo() {
  const [result, setResult] = useState(0);

  // دالة تُحاكي مهمة طويلة تسد المسار الرئيسي للمتصفح (Long Task)
  function handleCalculate() {
    // بدء علامة زمنية باسم محدد تظهر مباشرة في لوحة الأداء
    console.time('heavy-loop');
    
    let sum = 0;
    // حلقة تكرارية ثقيلة تستهلك ملايين الدورات
    for (let i = 0; i < 20000000; i++) {
      sum += Math.sqrt(i);
    }
    
    // إنهاء القياس الزمني وطباعة المدة في الكونسول
    console.timeEnd('heavy-loop');
    // تحديث النتيجة في الواجهة
    setResult(sum.toFixed(2));
  }

  return (
    <div className="p-4 bg-slate-900 text-white rounded-lg">
      <button 
        onClick={handleCalculate}
        className="px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded font-bold"
      >
        بدء الحساب الثقيل (تسجيل في DevTools)
      </button>
      <p className="mt-2">النتيجة: {result}</p>
    </div>
  );
}`,
      advancedExample: [
        "// دالة متقدمة لتجزئة المهام الحسابية الضخمة لمنع انسداد المسار الرئيسي (Yield to Main Thread)",
        "import React, { useState } from 'react';",
        "",
        "// دالة مساعدة تسلم التحكم للمتصفح باستخدام scheduler.yield أو setTimeout لتقسيم المهمة",
        "function yieldToMainThread() {",
        "  // استخدام الواجهة الحديثة إذا كانت مدعومة أو الرجوع إلى setTimeout",
        "  if ('scheduler' in window && 'yield' in window.scheduler) {",
        "    return window.scheduler.yield();",
        "  }",
        "  return new Promise(resolve => setTimeout(resolve, 0));",
        "}",
        "",
        "export function ChunkedTaskProcessor() {",
        "  const [progress, setProgress] = useState(0);",
        "  const [isProcessing, setIsProcessing] = useState(false);",
        "",
        "  // معالجة 100,000 عنصر على دفعات مع إعطاء فرصة للمتصفح لطلاء الواجهة والاستجابة",
        "  async function processLargeDataset() {",
        "    setIsProcessing(true);",
        "    const totalItems = 100000;",
        "    const chunkSize = 5000;",
        "    ",
        "    // وضع علامة أداء مخصصة لـ Chrome DevTools Timings",
        "    performance.mark('chunked-processing-start');",
        "",
        "    for (let i = 0; i < totalItems; i += chunkSize) {",
        "      // معالجة دفعة واحدة من البيانات الحسابية",
        "      for (let j = i; j < i + chunkSize && j < totalItems; j++) {",
        "        Math.sin(j) * Math.cos(j);",
        "      }",
        "",
        "      // تحديث شريط التقدم في الواجهة",
        "      setProgress(Math.round(((i + chunkSize) / totalItems) * 100));",
        "",
        "      // إعطاء فرصة للمسار الرئيسي ليرسم الواجهة ويتعامل مع نقرات المستخدم",
        "      await yieldToMainThread();",
        "    }",
        "",
        "    performance.mark('chunked-processing-end');",
        "    performance.measure('Chunked Processing Total', 'chunked-processing-start', 'chunked-processing-end');",
        "    setIsProcessing(false);",
        "  }",
        "",
        "  return (",
        "    <div className='p-6 bg-slate-900 border border-slate-700 rounded-xl text-slate-100'>",
        "      <h3 className='text-lg font-bold text-sky-400 mb-2'>معالجة المهام بدون تجميد الواجهة</h3>",
        "      <button",
        "        onClick={processLargeDataset}",
        "        disabled={isProcessing}",
        "        className='px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-gray-600 rounded-lg text-white font-medium'",
        "      >",
        "        {isProcessing ? 'جاري المعالجة السلسة...' : 'بدء المعالجة المقسمة'}",
        "      </button>",
        "      <div className='mt-4 w-full bg-slate-800 rounded-full h-4 overflow-hidden'>",
        "        <div className='bg-emerald-500 h-full transition-all duration-150' style={{ width: progress + '%' }} />",
        "      </div>",
        "      <span className='text-xs text-slate-400 mt-1 block'>{progress}% منجز</span>",
        "    </div>",
        "  );",
        "}"
      ].join('\n'),
      output: "في لوحة Performance بكروم، ستظهر المهام المقسمة كأشرطة صغيرة خضراء بدون ظهور أي شريط أحمر للـ Long Tasks، مما يحافظ على استجابة الواجهة بنسبة 100%.",
      commonMistakes: "النظر فقط إلى الرسم البياني الإجمالي دون تفعيل خيار 'CPU Throttling' (مثل 4x أو 6x slowdown) أثناء التسجيل؛ لأن جهاز المطور القوي قد يخفي بطء المهام الذي يعاني منه مستخدمو الهواتف الذكية المتوسطة.",
      bestPractices: "ابحث دائماً عن الأشرطة التي تحمل مثلثاً أحمر في لوحة الأداء (Long Tasks > 50ms) واستخدم نمط التجزئة (Yielding / Time Slicing) لتحويلها إلى مهام متناهية الصغر.",
      visualDiagram: "Chrome Main Thread Timeline:\nUnoptimized: [████████████ Long Task: 380ms (UI Frozen) ████████████]\nOptimized:   [█ Chunk 1] ➔ (Paint) ➔ [█ Chunk 2] ➔ (Paint) ➔ [█ Chunk 3]"
    },
    {
      id: "18.1.f",
      title: "تحليل حجم الحزمة Bundle Size",
      englishTerm: "Bundle Size Analysis (باندل سايز أناليسيس)",
      description: "عملية فحص وتشريح ملفات JavaScript النهائية التي يتم إنتاجها بعد عملية البناء (Build Artifacts)، لمعرفة حجم كل مكتبة وكود مخصص في الحزمة، واكتشاف المكتبات المتضخمة غير الضرورية أو المكررة التي تبطئ تحميل الموقع عبر الشبكة.",
      analogy: "يشبه وزن حقائب السفر في المطار وفتح الحقيبة لمعرفة أي الأغراض تزن 20 كيلوجراماً وتكلفك رسوماً إضافية باهظة دون أن تحتاج إليها فعلاً خلال الرحلة.",
      whyItMatters: "كل 100 كيلوبايت إضافية من كود JavaScript لا تستهلك فقط وقتاً أطول في التنزيل عبر شبكة الهاتف، بل تستهلك وقتاً أطول في فك الضغط (Decompress) والتحليل (Parse) والتنفيذ (Compile & Execute) في معالج جهاز المستخدم.",
      syntax: "// في مشروع Vite: إضافة rollup-plugin-visualizer داخل vite.config.js\nimport { visualizer } from 'rollup-plugin-visualizer';\nexport default { plugins: [visualizer({ open: true })] };",
      simpleExample: `// مثال على كيفية تكوين vite.config.js لدمج أداة تحليل الحزم التفاعلية
// استيراد دالة تعريف الإعدادات من vite
import { defineConfig } from 'vite';
// استيراد إضافة React الرسمية
import react from '@vitejs/plugin-react';
// استيراد إضافة التحليل المرئي للحزم
import { visualizer } from 'rollup-plugin-visualizer';

// تصدير الإعدادات المحدثة
export default defineConfig({
  plugins: [
    // دعم تجميع كود React
    react(),
    // إضافة أداة التحليل لإنشاء تقرير HTML تفاعلي بعد كل build
    visualizer({
      filename: 'stats.html', // اسم ملف التقرير التفاعلي الناتج
      open: true,             // فتح الملف تلقائياً في المتصفح فور انتهاء البناء
      gzipSize: true,         // إظهار الحجم التقريبي بعد ضغط Gzip الواقعي
      brotliSize: true        // إظهار الحجم مع ضغط Brotli فائق الكفاءة
    })
  ]
});`,
      advancedExample: [
        "// إعداد متقدم لـ Vite لتقسيم الحزم (Manual Chunks) وتجنب تضخم ملف الـ Vendor",
        "import { defineConfig } from 'vite';",
        "import react from '@vitejs/plugin-react';",
        "import { visualizer } from 'rollup-plugin-visualizer';",
        "",
        "export default defineConfig({",
        "  plugins: [",
        "    react(),",
        "    visualizer({",
        "      filename: 'bundle-report.html',",
        "      template: 'treemap', // عرض خريطة شجرية ملونة تفاعلية",
        "      gzipSize: true",
        "    })",
        "  ],",
        "  build: {",
        "    // ضبط حد التحذير لحجم الملف (500 كيلوبايت)",
        "    chunkSizeWarningLimit: 500,",
        "    rollupOptions: {",
        "      output: {",
        "        // تقسيم المكتبات الخارجية الكبيرة إلى ملفات منفصلة تُحمّل بالتوازي وتُخزن في الكاش",
        "        manualChunks(id) {",
        "          // فصل نواة React ومكتباتها الأساسية في حزمة مستقلة",
        "          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {",
        "            return 'react-core';",
        "          }",
        "          // فصل مكتبات الرسوم البيانية الضخمة",
        "          if (id.includes('node_modules/chart.js') || id.includes('node_modules/recharts')) {",
        "            return 'charts-vendor';",
        "          }",
        "          // فصل مكتبات الأيقونات وتنسيقات التواريخ",
        "          if (id.includes('node_modules/lucide-react') || id.includes('node_modules/date-fns')) {",
        "            return 'ui-utils';",
        "          }",
        "        }",
        "      }",
        "    }",
        "  }",
        "});"
      ].join('\n'),
      output: "ينتج ملف stats.html أو bundle-report.html تفاعلي يمثل خريطة شجرية (Treemap) يمكنك النقر على أي صندوق فيها لمعرفة حجم المكتبة وما تحتويه من دوال بدقة الكيلوبايت.",
      commonMistakes: "استيراد مكتبة ضخمة بالكامل مثل 'lodash' عبر (import lodash from 'lodash') بدلاً من استيراد الدوال الجزئية المحددة مثل (import debounce from 'lodash/debounce')، مما يحزم المكتبة بأكملها.",
      bestPractices: "قم بفحص حجم الحزمة دورياً، وضع قاعدة في مستودع الكود (مثل bundlesize أو size-limit) ترفض تلقائياً أي Pull Request يزيد حجم الحزمة عن سقف محدد مسبقاً.",
      visualDiagram: "Treemap Visual Output:\n┌────────────────────────────────────────────────────────┐\n│ Vendor Chunks (850 KB total)                           │\n│ ┌─────────────────────────┬──────────────────────────┐ │\n│ │ react-dom: 135 KB       │ chart.js: 320 KB (Alert!)│ │\n│ ├─────────────────────────┼──────────────────────────┤ │\n│ │ lucide-react: 45 KB     │ date-fns: 75 KB          │ │\n│ └─────────────────────────┴──────────────────────────┘ │\n└────────────────────────────────────────────────────────┘"
    },
    {
      id: "18.1.g",
      title: "استخدام Source Map Explorer",
      englishTerm: "Source Map Explorer Tool (سورس ماب إكسبلورر)",
      description: "أداة متقدمة تقوم بقراءة خريطة المصدر (Source Maps) الناتجة عن عملية تجميع وضغط الكود، لترسم خريطة بيانية متناهية الدقة تكشف عن حجم البايتات الحقيقية التي يشغلها كل سطر وملف كود بعد تطبيق جميع التحسينات وتفريغ الكود الميت.",
      analogy: "يشبه الأشعة السينية (X-Ray) للملف المضغوط؛ يريك الهيكل العظمي والمكونات الدقيقة للملف النهائي لتعرف بالضبط أي سطر برمجي كتبته كان السبب في كبر حجم الملف النهائي.",
      whyItMatters: "بينما تقرأ بعض الأدوات كود المصدر قبل التصغير، يقرأ Source Map Explorer الحزمة النهائية المصغرة والمضغوطة كما تنزل فعلياً في متصفح العميل، مما يعطي أدق رقم ممكن للحجم الحقيقي.",
      syntax: "# تثبيت الأداة محلياً أو تشغيلها عبر npx\nnpx source-map-explorer 'dist/assets/*.js'",
      simpleExample: `// كيفية إضافة أمر فحص الخريطة في package.json وتفعيل الخرائط في vite.config.js
// جزء من ملف vite.config.js لتفعيل إنشاء source maps لأغراض الفحص
export const viteConfigSnippet = {
  build: {
    // تفعيل توليد ملفات الخريطة (.map) أثناء بناء الإنتاج لفحصها
    sourcemap: true
  }
};

// جزء من ملف package.json لإضافة أمر الفحص السريع
/*
{
  "scripts": {
    "build": "vite build",
    "analyze": "source-map-explorer 'dist/assets/*.js' --html result.html"
  }
}
*/`,
      advancedExample: [
        "// سكربت Node.js أوتوماتيكي لفحص ملفات التوزيع ومقارنة أحجامها مع إصدار تنبيه عند التجاوز",
        "import { execSync } from 'child_process';",
        "import fs from 'fs';",
        "import path from 'path';",
        "",
        "export function runSourceMapAudit() {",
        "  console.log('🚀 بدء بناء المشروع مع خرائط المصدر...');",
        "  // تنفيذ أمر البناء الخاص بـ Vite مع توليد الخرائط",
        "  execSync('npx vite build --sourcemap', { stdio: 'inherit' });",
        "",
        "  console.log('🔍 تشغيل Source Map Explorer...');",
        "  const outputPath = path.resolve('dist/sourcemap-analysis.json');",
        "  ",
        "  // استخراج النتيجة بتنسيق JSON لتحليلها برمجياً",
        "  execSync(",
        "    'npx source-map-explorer dist/assets/*.js --json ' + outputPath,",
        "    { stdio: 'inherit' }",
        "  );",
        "",
        "  // قراءة وتحليل التقرير المولد",
        "  if (fs.existsSync(outputPath)) {",
        "    const report = JSON.parse(fs.readFileSync(outputPath, 'utf8'));",
        "    console.log('✅ تم إنشاء التقرير بنجاح!');",
        "    ",
        "    // فحص أكبر 3 ملفات تستهلك حجماً",
        "    console.log('أكبر الملفات المساهمة في الحجم:');",
        "    // طباعة مسارات الملفات الكبرى",
        "  }",
        "}"
      ].join('\n'),
      output: "شاشة تفاعلية توضح الحجم الفعلي لكل ملف بالبايتات والنسبة المئوية التي يشغلها من إجمالي الملف المضغوط.",
      commonMistakes: "نشر ملفات الـ Source Maps (.map) على خادم الإنتاج العام للجمهور دون حماية؛ حيث يمكن لأي شخص من خلالها استرجاع الكود المصدري الأصلي للتطبيق بالكامل، بالإضافة إلى إبطاء استجابة الخادم إذا فُتحت أدوات المطور.",
      bestPractices: "قم بإنشاء الـ Source Maps أثناء فحص الأداء المحلي أو اختبارات CI/CD، وتأكد من حذفها أو حظر الوصول إليها في خادم الإنتاج النهائي، أو رفعها حصرياً إلى خدمات مراقبة الأخطاء مثل Sentry.",
      visualDiagram: "Build Artifacts (.js + .js.map) ──► source-map-explorer\n                                           │\n                                           ▼\n┌────────────────────────────────────────────────────────┐\n│ Interactive Visual Hierarchy                           │\n│ ├─ node_modules (72%)                                  │\n│ │   ├─ @tanstack/react-query (34%)                     │\n│ │   └─ axios (18%)                                     │\n│ └─ src/ (28%)                                          │\n│     ├─ components/ (19%)                               │\n│     └─ pages/ (9%)                                     │\n└────────────────────────────────────────────────────────┘"
    }
  ],
  quizzes: [
    {
      id: "q18.1.1",
      question: "ما الفرق الأساسي بين actualDuration و baseDuration في React Profiler؟",
      options: [
        "actualDuration هو حجم ملف المكون، بينما baseDuration هو عدد أسطر الكود.",
        "actualDuration هو الزمن الفعلي المستغرق في تصيير الشجرة الحالية مع التخزين المؤقت، بينما baseDuration هو الزمن المقدر لتصييرها كاملة من الصفر بدون أي memoization.",
        "baseDuration يُقاس بالثواني، بينما actualDuration يُقاس بالدقائق.",
        "لا يوجد فرق بينهما وهما قيمتان متطابقتان دائماً."
      ],
      correctAnswer: 1,
      explanation: "قيمة actualDuration توضح الزمن الحقيقي الذي استغرقه التحديث الأخير مستفيداً من المكونات المخزنة، بينما baseDuration تمثل أسوأ سيناريو في حال اضطرت React لتصيير كل شجرة المكون من الصفر."
    },
    {
      id: "q18.1.2",
      question: "لماذا يُعتبر تشغيل تدقيق Lighthouse في بيئة التطوير (Development Mode) خطأً شائعاً؟",
      options: [
        "لأن Lighthouse لا يعمل إلا مع صفحات HTTPS فقط.",
        "لأن كود التطوير يحتوي على أدوات فحص وتصحيح وإعادة تحميل سريع (HMR) وكود غير مضغوط، مما يعطي درجات أداء متدنية وغير واقعية.",
        "لأن المتصفح يتعطل تلقائياً عند فتح Lighthouse في التطوير.",
        "لأن تقارير التطوير تتجاهل مقاييس الأداء بالكامل."
      ],
      correctAnswer: 1,
      explanation: "في بيئة التطوير تكون حزم الكود غير مصغرة (Unminified)، وتعمل آليات React الإضافية مثل التحقق من الأنواع والتكرار في Strict Mode، مما يضاعف زمن التنفيذ مقارنة ببيئة الإنتاج الحقيقية."
    },
    {
      id: "q18.1.3",
      question: "ما المقصود بـ 'Long Task' في لوحة Chrome DevTools Performance؟",
      options: [
        "أي مهمة تتجاوز مدة تنفيذها 50 مللي ثانية، مما يعطل استجابة المسار الرئيسي للواجهة.",
        "أي طلب شبكة يستغرق أكثر من 5 ثوانٍ.",
        "أي ملف JavaScript يتجاوز حجمه 1 ميجابايت.",
        "أي مكون يحتوي على أكثر من 500 سطر برمجي."
      ],
      correctAnswer: 0,
      explanation: "تُعرّف مواصفات متصفحات الويب المهمة الطويلة (Long Task) بأنها أي كود يحتكر المسار الرئيسي (Main Thread) لأكثر من 50ms، وهو الحد الذي يلاحظ بعده المستخدم تأخراً في استجابة النقر أو الكتابة."
    }
  ],
  exercise: {
    title: "تمرين عملي: بناء مكوّن لمراقبة وتنبيه أداء التصيير البطيء (Slow Render Guard)",
    description: "قم بإنشاء مكوّن عالي الرتبة (HOC) أو مكوّن غلاف Wrapper يعتمد على React.Profiler، ويقوم بقياس زمن تصيير أي مكوّن يُوضع بداخله، وإذا تجاوز زمن التصيير 16ms، يقوم بإظهار شارة تحذيرية حمراء لطيفة فوق المكوّن توضح عدد الإطارات المفقودة والزمن بالمللي ثانية.",
    hints: [
      "استخدم مكوّن <Profiler> المدمج من React وزوده بخاصية onRender ومعرف فريد id.",
      "احسب الإطارات المفقودة من خلال قسمة actualDuration على 16.66ms.",
      "خزن حالة التحذير والزمن داخل State محلية لتحديث الشارة المرئية."
    ],
    solution: `import React, { Profiler, useState } from 'react';

// مكون حارس الأداء الذي يراقب الأطفال ويظهر شارة عند البطء
export function SlowRenderGuard({ id, children }) {
  // حالة لحفظ أحدث زمن مسجل
  const [lastDuration, setLastDuration] = useState(0);
  // حالة لمعرفة هل التصيير تجاوز ميزانية 16.6ms
  const [isSlow, setIsSlow] = useState(false);

  // دالة رد النداء لمعالجة قياسات Profiler
  function handleRender(profId, phase, actualDuration) {
    setLastDuration(actualDuration);
    // فحص تجاوز حد الإطار السلس (16.6 مللي ثانية لـ 60 FPS)
    setIsSlow(actualDuration > 16.6);
  }

  // حساب عدد الإطارات المفقودة تقريبياً
  const droppedFrames = isSlow ? Math.floor(lastDuration / 16.6) : 0;

  return (
    <div className="relative border border-slate-700 rounded-lg p-2 my-2">
      {/* شارة التحذير تظهر فقط عند بطء التصيير */}
      {isSlow && (
        <div className="absolute top-2 left-2 z-10 bg-rose-600/90 text-white text-xs px-2 py-1 rounded shadow-lg animate-pulse">
          ⚠️ تصيير بطيء: {lastDuration.toFixed(1)}ms (فقدان ~{droppedFrames} إطار)
        </div>
      )}
      
      {/* تغليف المحتوى بـ Profiler */}
      <Profiler id={id} onRender={handleRender}>
        {children}
      </Profiler>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة طريق قياس وتحليل أداء React الشاملة",
    subtitle: "الأدوات والمقاييس من الكود المصدري حتى شاشة المستخدم النهائي",
    steps: [
      { step: "1", title: "React Profiler", desc: "قياس زمن تصيير المكونات وحساب actualDuration و baseDuration واكتشاف التحديثات المتكررة." },
      { step: "2", title: "Chrome DevTools", desc: "فحص المسار الرئيسي، ورصد الـ Long Tasks (>50ms)، وتحديد أسباب تجمد الواجهة." },
      { step: "3", title: "Lighthouse Audit", desc: "تقييم شامل لـ Core Web Vitals (LCP, TBT, CLS) مع محاكاة ظروف الشبكة والأجهزة الضعيفة." },
      { step: "4", title: "Bundle Inspection", desc: "تحليل ملفات التوزيع باستخدام rollup-plugin-visualizer و source-map-explorer لتقليص حجم JS." }
    ]
  }
};
