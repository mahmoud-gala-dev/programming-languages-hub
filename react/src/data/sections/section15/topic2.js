// topic2.js - القسم 15: React Hooks المتقدمة ومفاهيم React الحديثة
// الموضوع 2: استخدام useLayoutEffect و useImperativeHandle

export const topic2 = {
  id: "15.2",
  title: "استخدام useLayoutEffect و useImperativeHandle",
  englishTitle: "Using useLayoutEffect & useImperativeHandle",
  description: "التعمق في الخطافات المتزامنة والتحكم الإجرائي المتقدم: متى تفضل useLayoutEffect لقياس الـ DOM ومنع الوميض البصري، وكيف تصمم واجهات Ref مخصصة ومحكمة باستخدام useImperativeHandle، وفهم تطور تمرير الـ ref في React 19 مقارنة بـ forwardRef الكلاسيكي.",
  subtopics: [
    {
      id: "15.2.a",
      title: "الفرق بين useEffect و useLayoutEffect",
      englishTerm: {
        term: "useEffect vs useLayoutEffect",
        pronunciation: "يوز إيفكت فيرسس يوز لاي آوت إيفكت",
        meaning: "المقارنة الزمنية بين التأثيرات غير المتزامنة بعد رسم الشاشة والتأثيرات المتزامنة قبل رسم الشاشة للمستخدم"
      },
      description: "الفارق الجوهري بين الخطافين هو توقيت التنفيذ (Execution Timing):\n1. `useEffect`: يعمل بشكل غير متزامن (Asynchronously) بعد أن ينتهي المتصفح من رسم وتلوين البكسلات على الشاشة (After Paint)، مما يجعله مثالياً لجلب البيانات والاشتراكات والمؤقتات لأنه لا يعطل استجابة الواجهة.\n2. `useLayoutEffect`: يعمل بشكل متزامن (Synchronously) فور قيام React بتعديل شجرة الـ DOM وقبل أن يقوم المتصفح برسم الصورة على الشاشة (Before Paint). هذا يعني أنه يحجب الرسم (Blocks Paint) ريثما ينتهي من التنفيذ، مما يجعله الأداة المثالية للعمليات التي تؤثر مباشرة على تخطيط العناصر المرئية.",
      analogy: "تخيل أن لديك مسرحاً؛ `useLayoutEffect` يشبه مهندس الديكور الذي يعدل الستائر ويضع الكراسي في أماكنها الصحيحة تماماً والمقاعد مغطاة بالستارة قبل أن يفتح الستار للجمهور. بينما `useEffect` يشبه عاملاً يدخل لإشعال البخور بعد أن فتح الستار وجلس المشاهدون يتابعون العرض!",
      whyItMatters: "استخدام الخطاف الخاطئ قد يؤدي إما لتعطيل سلاسة الواجهة (إذا وضعت عمليات ثقيلة غير مرئية داخل useLayoutEffect)، أو التسبب في قفزات بصرية مزعجة (Layout Shift) إذا عدلت أبعاد العناصر بـ useEffect بعد ظهورها للمستخدم.",
      syntax: "// التأثير العادي بعد الرسم:\nuseEffect(() => { ... }, []);\n\n// التأثير المتزامن قبل الرسم:\nuseLayoutEffect(() => { ... }, []);",
      simpleExample: `// استيراد الخطافين للمقارنة البسيطة
import { useEffect, useLayoutEffect, useState } from 'react';

export function SimpleTimingDemo() {
  const [logs, setLogs] = useState<string[]>([]);

  // يتم تنفيذه أولاً ومتزامناً قبل أن يرسم المتصفح أي بكسل
  useLayoutEffect(() => {
    console.log("1️⃣ useLayoutEffect: تنفيذي قبل الرسم على الشاشة مباشرة!");
  }, []);

  // يتم تنفيذه ثانياً وبشكل غير متزامن بعد اكتمال الرسم
  useEffect(() => {
    console.log("2️⃣ useEffect: تنفيذي بعد أن رأى المستخدم الشاشة ورسمت بالكامل!");
  }, []);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <h4 className="font-bold text-cyan-400 mb-2">توقيت التنفيذ في الكونسول</h4>
      <p className="text-xs text-slate-300">افتح أدوات المطورين وراقب ترتيب ظهور رسائل الكونسول.</p>
    </div>
  );
}`,
      advancedExample: `// مقارنة واقعية تبرز حجب الرسم مقابل عدمه
import { useState, useEffect, useLayoutEffect, useRef } from 'react';

export function ExecutionTimingInspector() {
  const [effectCount, setEffectCount] = useState<number>(0);
  const [layoutCount, setLayoutCount] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'useEffect' | 'useLayoutEffect'>('useEffect');

  const boxRef = useRef<HTMLDivElement>(null);

  // استخدام useEffect: قد يرى المستخدم القيمة الأصلية للحظة خاطفة
  useEffect(() => {
    if (activeTab === 'useEffect' && effectCount === 0) {
      // تعديل الحالة بعد الرسم
      setEffectCount(100);
    }
  }, [activeTab, effectCount]);

  // استخدام useLayoutEffect: يُطبق التعديل قبل أي رسم على الشاشة نهائياً
  useLayoutEffect(() => {
    if (activeTab === 'useLayoutEffect' && layoutCount === 0) {
      // تعديل متزامن قبل الرسم يمنع رؤية الصفر
      setLayoutCount(100);
    }
  }, [activeTab, layoutCount]);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-amber-400 mb-3">مفتش توقيت التنفيذ الدقيق</h3>
      
      {/* أزرار التبديل */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => { setActiveTab('useEffect'); setEffectCount(0); }}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${activeTab === 'useEffect' ? 'bg-blue-600' : 'bg-slate-800'}\`}
        >
          تجربة useEffect
        </button>
        <button
          onClick={() => { setActiveTab('useLayoutEffect'); setLayoutCount(0); }}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${activeTab === 'useLayoutEffect' ? 'bg-emerald-600' : 'bg-slate-800'}\`}
        >
          تجربة useLayoutEffect
        </button>
      </div>

      {/* شاشة العرض */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl space-y-2 text-xs">
        <p>الوضع الحالي: <span className="font-bold text-cyan-300">{activeTab}</span></p>
        <p>القيمة المسجلة: <span className="font-mono text-emerald-400 font-bold">{activeTab === 'useEffect' ? effectCount : layoutCount}</span></p>
        <p className="text-slate-400 text-[11px] pt-2 border-t border-slate-800">
          * useLayoutEffect يحجب رسم المتصفح حتى يتم تحديث الحالة إلى 100، فلن تظهر القيمة 0 للمستخدم مطلقاً!
        </p>
      </div>
    </div>
  );
}`,
      outputExplanation: "الكود يبرهن على أن `useLayoutEffect` يعطل الرسم في المتصفح حتى ينتهي منطق الدالة بالكامل، مما يضمن أن المستخدم لن يشاهد أبداً الحالة الانتقالية الأولية، في حين أن `useEffect` يسمح للمتصفح بالرسم أولاً ثم ينفذ منطقه لاحقاً.",
      commonMistakes: [
        {
          mistake: "استخدام useLayoutEffect في جلب بيانات الشبكة (Data Fetching)",
          fix: "استخدم useEffect العادي لعمليات الشبكة؛ فوضعها في useLayoutEffect يعطل معالجة الصفحة وتفاعل المتصفح دون أي داعٍ."
        },
        {
          mistake: "تجاهل تحذير SSR عند استخدام useLayoutEffect في Next.js أو SSR",
          fix: "لا يمكن تشغيل useLayoutEffect على الخادم لغياب الـ DOM؛ استخدم useEffect أو تحوط بشرط `typeof window !== 'undefined'`."
        }
      ],
      bestPractices: [
        "اجعل `useEffect` خيارك الافتراضي في 98% من الحالات لضمان عدم حجب واجهة المستخدم.",
        "احصر استخدام `useLayoutEffect` في حالات قياس وتعديل الـ DOM المباشرة التي تسبب وميضاً بصرياً فقط."
      ],
      infographic: {
        title: "خط التوقيت الزمني: useEffect مقابل useLayoutEffect",
        points: [
          "1. React Render: حساب الفروقات في الـ Virtual DOM وتجهيز التغييرات.",
          "2. DOM Mutation: كتابة التغييرات في عناصر الـ DOM الحقيقية.",
          "3. ⚡ useLayoutEffect: ينطلق هنا متزامناً (قبل أي رسم على الشاشة).",
          "4. 🎨 Browser Paint: يقوم المتصفح بتلوين ورسم البكسلات على الشاشة.",
          "5. ⏱️ useEffect: ينطلق هنا غير متزامن بعد اكتمال الرسم بنجاح."
        ]
      }
    },
    {
      id: "15.2.b",
      title: "قياس أبعاد عناصر DOM",
      englishTerm: {
        term: "Measuring DOM Elements",
        pronunciation: "ميجيرينغ دوم إيليمنتس",
        meaning: "قراءة إحداثيات وأبعاد العناصر في شجرة DOM الحقيقية مثل الارتفاع والعرض لتحديد مواضع المكونات التابعة"
      },
      description: "تحتاج العديد من مكونات واجهة المستخدم المتقدمة - مثل التلميحات المنبثقة (Tooltips)، والقوائم المنسدلة (Dropdowns)، والنوافذ العائمة (Modals) - إلى معرفة الارتفاع والعرض الدقيقين لعنصر الزر أو الحاوية لتثبيت موضعها بجانبه بدقة. تتم هذه العملية عبر استدعاء `getBoundingClientRect()` أو خصائص `offsetWidth` و `offsetHeight`، ويجب أن تتم داخل `useLayoutEffect` حتى نتمكن من حساب الموضع وتطبيقه قبل أن يقوم المتصفح بالرسم الأولي.",
      analogy: "يشبه الأمر تفصيل بدلة عند خياط؛ يقوم الخياط بأخذ قياسات طول الذراع ومحيط الصدر بشريط القياس قبل أن يبدأ بقص القماش وخياطته، وليس بعد أن تنتهي الحفلة ويرتدي الزبون البدلة مقلوبة!",
      whyItMatters: "إذا تم قياس الموضع داخل `useEffect`، فستظهر القائمة المنبثقة أولاً في إحداثيات خاطئة (مثلاً في أعلى الزاوية اليسرى للشاشة `0, 0`)، ثم تقفز فجأة إلى مكانها بجانب الزر بعد جزء من الثانية، وهو ما يفسد تجربة المستخدم تماماً.",
      syntax: "useLayoutEffect(() => {\n  if (ref.current) {\n    const rect = ref.current.getBoundingClientRect();\n    setCoords({ x: rect.left, y: rect.bottom });\n  }\n}, []);",
      simpleExample: `// استيراد useLayoutEffect و useRef لقياس عنصر
import { useState, useRef, useLayoutEffect } from 'react';

export function SimpleElementMeasurer() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  // قياس العنصر فور إدراجه في الـ DOM وقبل رسم الشاشة
  useLayoutEffect(() => {
    if (boxRef.current) {
      // قراءة الأبعاد الفعلية بالبكسل
      setDimensions({
        width: boxRef.current.offsetWidth,
        height: boxRef.current.offsetHeight
      });
    }
  }, []);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <div ref={boxRef} className="p-3 bg-blue-600/30 border border-blue-500 rounded-lg mb-3">
        عنصر خاضع للقياس الفوري
      </div>
      <p className="text-xs text-slate-300">
        الأبعاد المقاسة: <span className="font-mono text-emerald-400 font-bold">{dimensions.width}px × {dimensions.height}px</span>
      </p>
    </div>
  );
}`,
      advancedExample: `// بناء Tooltip ذكي يحسب موضعه بدقة باستخدام useLayoutEffect
import React, { useState, useRef, useLayoutEffect } from 'react';

interface TooltipButtonProps {
  text: string;
  tooltipContent: string;
}

export function SmartPositionedTooltip({ text, tooltipContent }: TooltipButtonProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // استخدام useLayoutEffect لحساب موضع التلميح بدقة قبل أن يرسم على الشاشة
  useLayoutEffect(() => {
    if (isOpen && buttonRef.current && tooltipRef.current) {
      // أبعاد الزر في الصفحة
      const btnRect = buttonRef.current.getBoundingClientRect();
      // أبعاد صندوق التلميح نفسه
      const tipRect = tooltipRef.current.getBoundingClientRect();

      // حساب الموضع ليتوسط فوق الزر تماماً
      const calculatedTop = btnRect.top - tipRect.height - 8;
      const calculatedLeft = btnRect.left + (btnRect.width / 2) - (tipRect.width / 2);

      setTooltipPos({
        top: Math.max(8, calculatedTop), // منع الخروج خارج أعلى الشاشة
        left: calculatedLeft
      });
    }
  }, [isOpen]);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white text-center">
      <h4 className="text-base font-bold text-cyan-400 mb-4">التلميحات الذكية الموزونة بـ useLayoutEffect</h4>

      {/* الزر المستهدف */}
      <button
        ref={buttonRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 font-bold rounded-xl text-xs transition-all shadow-lg shadow-indigo-600/20"
      >
        {text}
      </button>

      {/* صندوق التلميح المنبثق المحسوب موقعه قبل الرسم لمنع القفزات */}
      {isOpen && (
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed',
            top: \`\${tooltipPos.top}px\`,
            left: \`\${tooltipPos.left}px\`
          }}
          className="z-50 px-3 py-1.5 bg-slate-800 border border-cyan-500/40 text-cyan-200 text-xs rounded-lg shadow-2xl pointer-events-none whitespace-nowrap animate-in fade-in zoom-in-95 duration-100"
        >
          {tooltipContent}
          {/* سهم صغير أسفل التلميح */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </div>
  );
}`,
      outputExplanation: "بفضل حساب إحداثيات التلميح وقراءة أبعاد `btnRect` و `tipRect` داخل `useLayoutEffect`، يظهر التلميح في موضعه المعتدل فوراً فوق الزر دون أن يشهد المستخدم أي ارتعاش أو وميض أولي في الزاوية.",
      commonMistakes: [
        {
          mistake: "استدعاء getBoundingClientRect() بشكل عشوائي في كل سطر مما يسبب Layout Thrashing",
          fix: "اجمع قراءات الأبعاد ونفذ التعديلات في دفعة واحدة داخل useLayoutEffect لتفادي إعادة حساب تخطيط الصفحة المتكرر."
        },
        {
          mistake: "نسيان التحقق من وجود `ref.current !== null` قبل قراءة أبعاد العنصر",
          fix: "تحقق دائماً من أن المرجع متصل بعنصر حقيقي قبل قراءة الخصائص."
        }
      ],
      bestPractices: [
        "استخدم `getBoundingClientRect()` لقياس المواضع بالنسبة لـ viewport و `offsetWidth/offsetHeight` للأبعاد النسبية.",
        "اجعل قياسات القوائم المنبثقة والتلميحات داخل `useLayoutEffect` حصراً لحماية تجربة المستخدم البصرية."
      ],
      infographic: {
        title: "خطوات قياس وتموضع العناصر دون ارتعاش",
        points: [
          "1. طلب الظهور: المستخدم يمرر الفأرة فوق الزر ➔ تفعيل حالة `isOpen: true`.",
          "2. الإدراج في الـ DOM: إدراج عنصر التلميح في الشجرة قبل أن يراه المستخدم.",
          "3. القياس بـ useLayoutEffect: حساب أبعاد الزر والتلميح بدقة بيكسلية.",
          "4. تطبيق الإحداثيات: ضبط `top` و `left` بأسلوب متزامن.",
          "5. الرسم النهائي: يرى المستخدم التلميح فوراً في مكانه الصحيح بنسبة 100%!"
        ]
      }
    },
    {
      id: "15.2.c",
      title: "تجنب الوميض البصري",
      englishTerm: {
        term: "Avoiding Visual Flickering",
        pronunciation: "أفويدينغ فيجوال فليكرينغ",
        meaning: "منع ظاهرة قفز العناصر أو وميضها الناتج عن تحديث الخصائص بعد رسم الشاشة"
      },
      description: "الوميض البصري (Visual Flickering أو Layout Jitter) هو ظاهرة تحدث عندما يظهر العنصر على الشاشة بحجم أو موضع أو لون معين، ثم بعد بضعة أجزاء من الميلي ثانية يقفز فجأة إلى حجمه أو موضعه المعدل. هذه المشكلة تسبب ارتباكاً كبيراً للمستخدم وتؤدي لهبوط مؤشر أداء الويب Core Web Vitals (مؤشر Cumulative Layout Shift - CLS). يوفر `useLayoutEffect` الحل الجذري لهذه المعضلة عن طريق ضمان حدوث كافة التعديلات قبل أن يرى المستخدم أي شيء على الشاشة.",
      analogy: "يشبه الأمر تقديم هدية ملفوفة بعناية في صندوق جميل؛ يتم تغليف الصندوق ووضع الشريط الحريري الملون عليه خلف الكواليس (`useLayoutEffect`). بينما الوميض البصري يشبه أن تعطي الصندوق مفتوحاً للضيف، ثم تخطفه من يده فجأة لتربط عليه الشريط الحريري أمامه!",
      whyItMatters: "المظهر الاحترافي للتطبيقات الكبرى (مثل Stripe و Linear و GitHub) يعتمد على غياب أي قفزات بصرية في الواجهة؛ والقضاء على الوميض يرفع من تقييم جودة التطبيق وثقة المستخدمين به.",
      syntax: "useLayoutEffect(() => {\n  // تعديل التنسيقات مباشرة قبل الرسم لمنع الوميض البصري\n  element.style.transform = `translateY(${offset}px)`;\n}, [offset]);",
      simpleExample: `// مثال يوضح تجنب الوميض في شريط التمرير المخصص
import { useState, useLayoutEffect, useRef } from 'react';

export function FlickerFreeScrollBox() {
  const listRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<string[]>(['رسالة 1', 'رسالة 2', 'رسالة 3']);

  // استخدام useLayoutEffect لتثبيت التمرير في الأسفل فوراً قبل الرسم
  useLayoutEffect(() => {
    if (listRef.current) {
      // ضبط موقع التمرير في قاع الصندوق مباشرة وبشكل غير مرئي للمستخدم
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = () => {
    setMessages((prev) => [...prev, \`رسالة جديدة \${prev.length + 1}\`]);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <div ref={listRef} className="h-28 overflow-y-auto bg-slate-950 p-2 rounded-lg space-y-1 mb-3">
        {messages.map((m, i) => (
          <p key={i} className="text-xs bg-slate-850 p-1 rounded text-slate-300">• {m}</p>
        ))}
      </div>
      <button onClick={addMessage} className="px-3 py-1 bg-emerald-600 rounded text-xs font-bold">
        + إضافة رسالة
      </button>
    </div>
  );
}`,
      advancedExample: `// محاكاة حية لمقارنة الوميض البصري بين الخطافين
import { useState, useEffect, useLayoutEffect, useRef } from 'react';

export function VisualFlickerLab() {
  const [mode, setMode] = useState<'withFlicker' | 'smooth'>('smooth');
  const [boxLeft, setBoxLeft] = useState<number>(0);
  const [trigger, setTrigger] = useState<number>(0);

  // 1. وضع الوميض: باستخدام useEffect (يحدث بعد الرسم ➔ يرى المستخدم قفزة)
  useEffect(() => {
    if (mode === 'withFlicker') {
      // محاكاة تأخير بسيط لإبراز الوميض بوضوح
      const start = performance.now();
      while (performance.now() - start < 15) { /* تأخير مصطنع */ }
      setBoxLeft(200);
    }
  }, [trigger, mode]);

  // 2. وضع السلاسة التامة: باستخدام useLayoutEffect (قبل الرسم ➔ لا وميض نهائياً)
  useLayoutEffect(() => {
    if (mode === 'smooth') {
      // يتم التعديل متزامناً قبل أن ترسم الشاشة البكسل الأول
      setBoxLeft(200);
    }
  }, [trigger, mode]);

  const handleTest = () => {
    // تصفير الموضع أولاً لمحاكاة إعادة التموضع
    setBoxLeft(0);
    setTrigger((t) => t + 1);
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">مختبر القضاء على الوميض البصري</h3>
      <p className="text-xs text-slate-400 mb-4">
        قارن بين الوميض الناتج عن التعديل المتأخر والنعومة التامة لـ useLayoutEffect.
      </p>

      {/* خيارات الوضع */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setMode('smooth'); handleTest(); }}
          className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${mode === 'smooth' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          وضع useLayoutEffect (بلا وميض ✅)
        </button>
        <button
          onClick={() => { setMode('withFlicker'); handleTest(); }}
          className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${mode === 'withFlicker' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
        >
          وضع useEffect (مع وميض ❌)
        </button>
      </div>

      {/* مضمار الحركة */}
      <div className="relative h-20 bg-slate-900 border border-slate-800 rounded-xl p-3 overflow-hidden mb-4">
        <div
          style={{ transform: \`translateX(\${boxLeft}px)\` }}
          className="absolute top-4 w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center font-bold text-slate-950 text-xs shadow-lg transition-none"
        >
          Box
        </div>
      </div>

      <button
        onClick={handleTest}
        className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl border border-slate-700"
      >
        إعادة تشغيل الحركة واختبار الوميض 🔄
      </button>
    </div>
  );
}`,
      outputExplanation: "في وضع `useLayoutEffect`، لا تظهر الكتلة إطلاقاً في موضع الصفر الأولي؛ بل يتم تعديل موضعها إلى 200px قبل قيام المتصفح برسم الإطار للمستخدم، مما يمحو أي وميض أو قفزة بصرية بنسبة 100%.",
      commonMistakes: [
        {
          mistake: "استخدام transitions في CSS بالتزامن مع useLayoutEffect مما يفسد القفزة اللحظية النظيفة",
          fix: "عطل الانتقال التلقائي `transition: none` أثناء تطبيق القياسات المبدئية لضمان ثبات الموضع الفوري."
        },
        {
          mistake: "محاولة علاج وميض الصور بـ useLayoutEffect",
          fix: "تذكر أن تحميل الصور عملية شبكية خارجية؛ useLayoutEffect يعالج وميض عناصر الـ DOM والتنسيقات الهندسية فقط."
        }
      ],
      bestPractices: [
        "راقب دائماً مقياس Cumulative Layout Shift (CLS) في تقارير Lighthouse للتأكد من خلو واجهاتك من القفزات.",
        "استخدم useLayoutEffect فوراً عند ملاحظة أي ارتعاش في القوائم المنبثقة أو أشرطة التمرير الذاتية."
      ],
      infographic: {
        title: "كيف يقضي useLayoutEffect على الوميض؟",
        points: [
          "مع useEffect: رسم الواجهة بالموضع القديم ➔ عين المستخدم ترى الخطأ ➔ ثم قفزة للموضع الجديد (وميض!).",
          "مع useLayoutEffect: تعديل الموضع في الذاكرة ➔ حجب الرسم حتى اكتمال التعديل ➔ رسم الواجهة في الموضع الصحيح مباشرة (صفر وميض!)."
        ]
      }
    },
    {
      id: "15.2.d",
      title: "مفهوم Imperative Handles",
      englishTerm: {
        term: "Imperative Handles Concept",
        pronunciation: "إمبيراتيف هاندلز كونسيبت",
        meaning: "مفهوم توفير واجهة تحكم إجرائية مخصصة تتيح للمكون الأب إعطاء أوامر مباشرة للمكون الابن"
      },
      description: "الأصل في React أنها مكتبة تعتمد على البرمجة التصريحية (Declarative Programming)، حيث تمرر الحالة عبر الـ Props وتتغير الواجهة بناء عليها. ولكن هناك حالات استثنائية ونادرة تتطلب نمطاً إجرائياً (Imperative Programming)؛ مثل توجيه مؤشر الكتابة لحقل نصي، أو تشغيل مقطع فيديو، أو التمرير إلى قسم معين، أو إعادة ضبط نموذج معقد. مفهوم 'المقبض الإجرائي' (Imperative Handle) هو بمثابة نافذة تحكم صغيرة ونظيفة يفتحها المكون الابن للأب ليسمح له باستدعاء دوال محددة بأمان.",
      analogy: "يشبه الأمر جهاز التحكم عن بعد (الريموت كونترول) الخاص بمكيف الهواء؛ الريموت لا يسمح لك بالعبث بمحرك المكيف أو تغيير ضغط غاز التبريد بيديك، بل يقدم لك أزراراً محددة ومخصصة مثل: 'تشغيل'، 'تبريد'، 'زيادة الدرجة'. هذه الأزرار المحددة هي الـ Imperative Handle للمكيف!",
      whyItMatters: "يحميك استخدام المقابض الإجرائية المخصصة من كشف عنصر الـ DOM الخام كاملاً للأب؛ فبدلاً من إعطاء الأب وصولاً مطلقاً لعنصر `<input>` يعبث فيه كيفما يشاء، تعطيه فقط دالة `focus()` ودالة `clear()`، مما يحافظ على مبدأ التغليف (Encapsulation).",
      syntax: "// واجهة التحكم الإجرائي المخصصة:\nexport interface CustomHandle {\n  focus: () => void;\n  reset: () => void;\n}",
      simpleExample: `// مثال تمهيدي يوضح فكرة المقبض الإجرائي
// تعريف نوع الأوامر التي يسمح المكون الابن للأب باستدعائها
export interface VideoPlayerHandle {
  play: () => void;
  pause: () => void;
  seekToStart: () => void;
}

// تخيل أن هذا المكون الابن يقدم هذه الدوال للأب عبر مرجع (Ref)
export function explainHandleIdea() {
  console.log("المقبض الإجرائي هو كائن يحتوي على دوال تنفيذية محددة فقط.");
}`,
      advancedExample: `// تطبيق عملي تفاعلي يوضح المقارنة بين التحكم التصريحي والإجرائي
import { useState, useRef } from 'react';

// واجهة المقبض الإجرائي لصندوق الإدخال الذكي
export interface SmartInputHandle {
  focusInput: () => void;
  clearText: () => void;
  highlightError: () => void;
}

// مكون فرعي يطبق المقبض الإجرائي لمحاكاة الأوامر المباشرة
export function ImperativeConceptExplainer() {
  const [internalText, setInternalText] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const inputDomRef = useRef<HTMLInputElement>(null);

  // دالة تمثل المقبض الذي يستهلكه الأب
  const handleObject: SmartInputHandle = {
    focusInput: () => {
      inputDomRef.current?.focus();
    },
    clearText: () => {
      setInternalText('');
      setHasError(false);
    },
    highlightError: () => {
      setHasError(true);
      inputDomRef.current?.focus();
    }
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white">
      <h3 className="text-xl font-bold text-emerald-400 mb-2">مفهوم Imperative Handles عملياً</h3>
      <p className="text-xs text-slate-400 mb-4">
        المكون الأب يضغط على أزرار الأوامر، والمكون الابن ينفذ الإجراء داخلياً بدون كشف الـ DOM.
      </p>

      {/* حقل الإدخال المحمي */}
      <div className="mb-4">
        <input
          ref={inputDomRef}
          type="text"
          value={internalText}
          onChange={(e) => setInternalText(e.target.value)}
          placeholder="اكتب هنا أو استخدم أزرار التحكم..."
          className={\`w-full px-4 py-2 bg-slate-900 border rounded-xl text-xs focus:outline-none transition-colors \${hasError ? 'border-rose-500 ring-2 ring-rose-500/30' : 'border-slate-800 focus:border-cyan-500'}\`}
        />
      </div>

      {/* أزرار لوحة التحكم الإجرائية (المقبض) */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleObject.focusInput()}
          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-semibold"
        >
          أمر: التركيز (Focus)
        </button>
        <button
          onClick={() => handleObject.clearText()}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold"
        >
          أمر: المسح (Clear)
        </button>
        <button
          onClick={() => handleObject.highlightError()}
          className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-semibold"
        >
          أمر: إظهار الخطأ والتركيز
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "يوضح المثال كيف يمكن للمكون الابن أن يوفر 'مقبضاً' (Handle) يحتوي على دوال محددة بدقة (`focusInput`, `clearText`)، مما يتيح للأب التفاعل معه بأسلوب إجرائي دون الحاجة لكشف الخصائص الداخلية غير المرغوبة للـ DOM.",
      commonMistakes: [
        {
          mistake: "الاعتماد على المقابض الإجرائية كبديل دائم لتمرير الـ State عبر Props",
          fix: "استخدم النمط التصريحي (Declarative) العادي في 95% من الحالات؛ واقصر المقابض الإجرائية على حالات التركيز والتمرير والوسائط فقط."
        },
        {
          mistake: "تعديل قيم الـ State المعقدة للمكون الابن بشكل إجرائي مباشر من الأب",
          fix: "دع المكون الابن يدير حالته بنفسه، واجعل المقبض للأفعال السلوكية (Actions) فقط."
        }
      ],
      bestPractices: [
        "صمم واجهة الـ Handle كـ TypeScript Interface واضحة ومحددة المعالم.",
        "حافظ على مبدأ الفصل والتغليف؛ لا تكشف إلا الحد الأدنى من الدوال التي يحتاجها الأب فعلاً."
      ],
      infographic: {
        title: "التحكم التصريحي مقابل التحكم الإجرائي",
        points: [
          "التحكم التصريحي (Declarative - الافتراضي): الأب يمرر `isOpen={true}` ➔ والابن يقرر كيف يظهر نفسه.",
          "التحكم الإجرائي (Imperative - استثنائي): الأب يستدعي `ref.current.open()` ➔ تنفيذ أمر لحظي مباشر.",
          "المقبض الإجرائي: واجهة مصقولة تفصل بين كود الأب وتفاصيل الـ DOM الداخلية للابن."
        ]
      }
    },
    {
      id: "15.2.e",
      title: "تخصيص واجهة Ref باستخدام useImperativeHandle",
      englishTerm: {
        term: "Customizing Ref with useImperativeHandle",
        pronunciation: "كستومايزينغ ريف وذ يوز إمبيراتيف هاندل",
        meaning: "استخدام خطاف useImperativeHandle لتخصيص القيمة التي يستلمها المكون الأب عبر المرجع بدلاً من عنصر الـ DOM الافتراضي"
      },
      description: "خطاف `useImperativeHandle` هو الأداة الرسمية في React لتخصيص ما يكشفه المكون الابن للمكون الأب عبر خاصية `ref`. يستقبل الخطاف المرجع الممرر `ref`، ودالة مصنع (Factory Function) تُرجع كائناً يحتوي على الدوال والخصائص التي نريد إتاحتها حصراً، بالإضافة لمصفوفة اعتماديات. هذا يمنع الأب من الوصول لعنصر الـ DOM الحقيقي مباشرة ويحميه من العبث بخصائص غير مسموح بتعديلها.",
      analogy: "يشبه الأمر شباك خدمة العملاء في مصرف محمي بزجاج مصفح؛ الموظف يعطيك نموذجاً لتوقيعه ويأخذ منك النقود عبر فتحة مخصصة محكمة، ولا يسمح لك بالدخول إلى خلف الزجاج للوصول إلى الخزنة المركزية وحاسوب البنك الرئيسي!",
      whyItMatters: "يحقق هذا الخطاف مبدأ إخفاء التفاصيل وتأمين كود المشروع (Information Hiding)؛ فلو غيرت بنية المكون الابن الداخلية مستقبلاً من `<input>` إلى `<div>` مخصص، لن ينكسر كود المكون الأب طالما حافظت على نفس دوال الـ Handle.",
      syntax: "useImperativeHandle(ref, () => ({\n  focus: () => inputRef.current?.focus(),\n  scroll: () => containerRef.current?.scrollIntoView()\n}), []);",
      simpleExample: `// استيراد useImperativeHandle و useRef من React
import { useRef, useImperativeHandle } from 'react';

// تعريف واجهة المقبض الإجرائي
export interface CustomInputHandle {
  focus: () => void;
  reset: () => void;
}

// مكون الحقل المخصص (في React 19 نمرر ref كخاصية عادية!)
export function CustomInputField({ ref }: { ref: React.Ref<CustomInputHandle> }) {
  const inputRef = useRef<HTMLInputElement>(null);

  // تخصيص المرجع الذي يستلمه الأب
  useImperativeHandle(ref, () => ({
    // توفير دالة التركيز فقط
    focus: () => {
      inputRef.current?.focus();
    },
    // توفير دالة التصفير
    reset: () => {
      if (inputRef.current) inputRef.current.value = '';
    }
  }), []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="حقل محمي بواجهة useImperativeHandle..."
      className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
    />
  );
}`,
      advancedExample: `// بناء مشغل فيديو مخصص متكامل بواجهة useImperativeHandle صارمة
import React, { useRef, useImperativeHandle, useState } from 'react';

// واجهة المقبض الإجرائي لمشغل الفيديو
export interface MediaPlayerHandle {
  play: () => void;
  pause: () => void;
  toggleMute: () => boolean;
  restart: () => void;
}

// مكون مشغل الوسائط المخصص
export function CustomMediaPlayer({ ref }: { ref: React.Ref<MediaPlayerHandle> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // تخصيص المرجع بواسطة useImperativeHandle
  useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current?.play();
      setIsPlaying(true);
    },
    pause: () => {
      videoRef.current?.pause();
      setIsPlaying(false);
    },
    toggleMute: () => {
      if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
        return videoRef.current.muted;
      }
      return false;
    },
    restart: () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }), []);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
      {/* عنصر الفيديو الفعلي المحمي بالداخل */}
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        className="w-full h-44 object-cover"
        onEnded={() => setIsPlaying(false)}
      />
      {/* شريط حالة داخلي */}
      <div className="p-3 bg-slate-950/80 flex justify-between items-center text-xs text-slate-300">
        <span>الحالة: {isPlaying ? '▶️ يعمل الآن' : '⏸️ متوقف'}</span>
        <span>الصوت: {isMuted ? '🔇 مكتوم' : '🔊 مفعّل'}</span>
      </div>
    </div>
  );
}

// المكون الأب الذي يتحكم بالمشغل من الخارج عبر المرجع
export function MediaPlayerController() {
  // مرجع مقيد بنوع المقبض الإجرائي MediaPlayerHandle
  const playerRef = useRef<MediaPlayerHandle>(null);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-3">مشغل وسائط بـ useImperativeHandle</h3>
      
      {/* تضمين المكون الابن وتمرير المرجع */}
      <div className="mb-4">
        <CustomMediaPlayer ref={playerRef} />
      </div>

      {/* لوحة أزرار التحكم الخارجية في المكون الأب */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => playerRef.current?.play()}
          className="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold"
        >
          تشغيل (Play)
        </button>
        <button
          onClick={() => playerRef.current?.pause()}
          className="px-3 py-2 bg-amber-600 hover:bg-amber-500 rounded-xl text-xs font-bold"
        >
          إيقاف مؤقت (Pause)
        </button>
        <button
          onClick={() => playerRef.current?.toggleMute()}
          className="px-3 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-xs font-bold"
        >
          كتم/تفعيل الصوت
        </button>
        <button
          onClick={() => playerRef.current?.restart()}
          className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold"
        >
          إعادة من البداية ⏪
        </button>
      </div>
    </div>
  );
}`,
      outputExplanation: "المكون الأب `MediaPlayerController` يمتلك مرجعاً من نوع `MediaPlayerHandle` يحتوي فقط وحصراً على الدوال الأربع المسموحة (`play`, `pause`, `toggleMute`, `restart`). لا يستطيع الأب الوصول المباشر لخصائص مثل `video.src` أو التلاعب بمسارات الفيديو، مما يضمن التغليف البرمجي المتين.",
      commonMistakes: [
        {
          mistake: "نسيان مصفوفة الاعتماديات في `useImperativeHandle(ref, createHandle, [])`",
          fix: "ضع مصفوفة الاعتماديات دائماً؛ إذا كانت الدوال بالداخل تعتمد على State، فيجب وضعها في المصفوفة لتحديث المرجع."
        },
        {
          mistake: "محاولة استخدام useImperativeHandle بدون ربطه بمرجع قادم كـ Prop",
          fix: "يجب أن يكون المعامل الأول هو المرجع `ref` الذي تم استلامه من المكون الأب."
        }
      ],
      bestPractices: [
        "صدّر الـ TypeScript Interface الخاصة بالـ Handle دائماً من ملف المكون الابن لتسهيل استخدامها في الأب.",
        "اجعل كائن الـ Handle يحتوي على أفعال وظيفية واضحة ومباشرة ولا تعيد عناصر DOM خاماً من خلاله."
      ],
      infographic: {
        title: "هندسة تخصيص المرجع بـ useImperativeHandle",
        points: [
          "بدون التخصيص: `ref.current` يكشف كامل عنصر الـ HTML ➔ خطورة العبث بخصائص الـ DOM العميقة.",
          "مع useImperativeHandle: `ref.current` يكشف فقط الكائن المحدد من المطور ➔ تحكم مقنن ومغلف وآمن 100%.",
          "توافقية عالية: يسمح بتغيير عناصر الـ DOM الداخلية مستقبلاً دون أن ينكسر كود المكونات الآباء."
        ]
      }
    },
    {
      id: "15.2.f",
      title: "إنشاء مكونات قابلة للتحكم البرمجي",
      englishTerm: {
        term: "Building Programmatically Controllable Components",
        pronunciation: "بيلدينغ بروغراماتيكالي كونترولابل كومبوننتس",
        meaning: "تصميم مكونات مرنة تجمع بين التحكم التلقائي الداخلي وإمكانية قيادتها إجرائياً بواسطة مراجع الأب"
      },
      description: "المكونات المتقدمة في مكتبات الواجهات الاحترافية (مثل مكتبات Radix UI و Ant Design و Headless UI) تُصمم لتكون قابلة للتحكم التلقائي من المستخدم، وفي نفس الوقت قابلة للتحكم البرمجي الكامل (Programmatically Controllable) من المطور بواسطة كود JavaScript. أمثلة ذلك: نموذج خطوات متعددة (Form Stepper) يتقدم تلقائياً بالنقرات ولكن يمكن للبرنامج استدعاء `stepperRef.current.goToStep(3)` عند ورود استجابة من الخادم.",
      analogy: "يشبه الأمر سيارة ذاتية القيادة متطورة؛ يمكنك الجلوس وترك السيارة تقود نفسها وتستجيب لحركة الطريق تلقائياً، ولكن متى ما أردت التدخل، تمسك بعجلة القيادة وتضغط على الدواسة بيدك لتوجيه السيارة لمسار مختلف فوراً!",
      whyItMatters: "يوفر هذا النمط المعماري أقصى درجات المرونة لفرق التطوير؛ فالمكون يعمل بشكل مستقل دون إعدادات معقدة في السيناريوهات العادية، ويمنح المطور القوة الكاملة لقيادته برمجياً في الحالات المتقدمة.",
      syntax: "export interface StepperHandle {\n  next: () => void;\n  prev: () => void;\n  reset: () => void;\n  currentStep: number;\n}",
      simpleExample: `// مكون عداد قابل للتحكم البرمجي البسيط
import { useState, useImperativeHandle, Ref } from 'react';

export interface CounterHandle {
  setCountValue: (val: number) => void;
  reset: () => void;
}

export function ControllableCounter({ ref }: { ref: Ref<CounterHandle> }) {
  const [count, setCount] = useState<number>(0);

  // إتاحة التحكم الإجرائي للأب
  useImperativeHandle(ref, () => ({
    setCountValue: (val) => setCount(val),
    reset: () => setCount(0)
  }), []);

  return (
    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-white text-xs">
      القيمة الداخلية: <span className="font-bold text-cyan-400">{count}</span>
    </div>
  );
}`,
      advancedExample: `// نموذج خطوات متعددة (Form Wizard) قابل للتحكم التلقائي والبرمجي
import React, { useState, useImperativeHandle, useRef } from 'react';

// واجهة المقبض الإجرائي للنموذج
export interface WizardHandle {
  nextStep: () => boolean;
  prevStep: () => void;
  goToStep: (stepNumber: number) => void;
  getCurrentStep: () => number;
  isComplete: () => boolean;
}

// مكون معالج الخطوات
export function MultiStepWizard({ ref }: { ref: React.Ref<WizardHandle> }) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 3;

  // تخصيص المقبض الإجرائي
  useImperativeHandle(ref, () => ({
    nextStep: () => {
      if (currentStep < totalSteps) {
        setCurrentStep((s) => s + 1);
        return true;
      }
      return false; // وصل للنهاية
    },
    prevStep: () => {
      if (currentStep > 1) {
        setCurrentStep((s) => s - 1);
      }
    },
    goToStep: (step: number) => {
      if (step >= 1 && step <= totalSteps) {
        setCurrentStep(step);
      }
    },
    getCurrentStep: () => currentStep,
    isComplete: () => currentStep === totalSteps
  }), [currentStep]);

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
      {/* مؤشر الخطوات البصري */}
      <div className="flex justify-between items-center mb-6 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={\`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all \${currentStep === step ? 'bg-cyan-500 text-slate-950 ring-4 ring-cyan-500/20' : currentStep > step ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
          >
            {currentStep > step ? '✓' : step}
          </div>
        ))}
      </div>

      {/* محتوى كل خطوة */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl mb-4 text-center">
        {currentStep === 1 && <p className="text-xs text-slate-300">الخطوة 1: إدخال البيانات الشخصية والبريد الإلكتروني</p>}
        {currentStep === 2 && <p className="text-xs text-slate-300">الخطوة 2: اختيار خطة الاشتراك والخيارات الإضافية</p>}
        {currentStep === 3 && <p className="text-xs text-emerald-300 font-bold">الخطوة 3: تأكيد الطلب والمراجعة النهائية 🎉</p>}
      </div>
    </div>
  );
}

// المكون الأب الذي يقود النموذج برمجياً
export function WizardParentDashboard() {
  const wizardRef = useRef<WizardHandle>(null);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-amber-400 mb-2">مكون خطوات متعددة قابل للتحكم البرمجي</h3>
      <p className="text-xs text-slate-400 mb-4">تحكم في مسار المعالج من خارج حدوده تماماً عبر المرجع.</p>

      {/* تضمين معالج الخطوات */}
      <div className="mb-4">
        <MultiStepWizard ref={wizardRef} />
      </div>

      {/* أزرار التحكم الخارجي */}
      <div className="flex gap-2">
        <button
          onClick={() => wizardRef.current?.prevStep()}
          className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-xl"
        >
          ← الخطوة السابقة
        </button>
        <button
          onClick={() => wizardRef.current?.nextStep()}
          className="flex-1 py-2 bg-cyan-600 hover:bg-cyan-500 text-xs font-bold rounded-xl"
        >
          الخطوة التالية →
        </button>
      </div>

      {/* قفز مباشر برمجياً */}
      <button
        onClick={() => wizardRef.current?.goToStep(3)}
        className="w-full mt-2 py-1.5 bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-400 rounded-lg border border-slate-800"
      >
        ⚡ قفز مباشر للخطوة الأخيرة برمجياً
      </button>
    </div>
  );
}`,
      outputExplanation: "يوفر المكون `MultiStepWizard` واجهة كاملة يمكن التفاعل معها برمجياً عبر `wizardRef.current` للتنقل بين الخطوات أو القفز المباشر أو الاستعلام عن حالة الاكتمال، مع بقاء منطق العرض والتصميم معزولاً ومستقلاً داخل المكون.",
      commonMistakes: [
        {
          mistake: "نسيان تمرير المتغيرات المستمرة في مصفوفة اعتماديات useImperativeHandle",
          fix: "إذا كان الـ Handle يقرأ قيمة مثل `currentStep`، فيجب وضعها في مصفوفة الاعتماديات وإلا سيقرأ المرجع قيمة قديمة (Stale Value)."
        },
        {
          mistake: "جعل كل مكون في التطبيق قابلاً للتحكم البرمجي بلا مبرر",
          fix: "استخدم هذا النمط فقط للمكونات المعقدة التي تحتاج تدخلاً برمجياً كالمعالجات والنوافذ والوسائط."
        }
      ],
      bestPractices: [
        "أرجع دائماً قيماً منطقية (Booleans) من دوال التحكم (مثل `return success;`) لمساعدة الأب في معرفة نتيجة الأمر.",
        "وفر دوال استعلام مساعدة مثل `isComplete()` أو `isValid()` لتبسيط منطق المكون الأب."
      ],
      infographic: {
        title: "أنماط المكونات القابلة للتحكم البرمجي",
        points: [
          "واجهة مستخدم ذاتية: تدير حالتها وتستجيب لتفاعلات النقر تلقائياً.",
          "قنوات تحكم خارجية: توفر مقبضاً إجرائياً عبر `ref` لتلقي الأوامر من الأب.",
          "تنسيق موحد: يعمل بسلاسة في النظم الضخمة لتنسيق الخطوات والنماذج المعقدة."
        ]
      }
    },
    {
      id: "15.2.g",
      title: "تمرير ref في React الحديثة (React 19)",
      englishTerm: {
        term: "Ref as a Regular Prop in React 19",
        pronunciation: "ريف آز آ ريغيولار بروب إن رياكت ناينتين",
        meaning: "ميزة React 19 الثورية التي تجعل ref خاصية عادية كباقي الـ Props دون الحاجة لتغليف المكون بـ forwardRef"
      },
      description: "في إصدارات React السابقة (16 حتى 18)، كانت كلمة `ref` كلمة محجوزة خاصة لا يمكن استقبالها كخاصية عادية داخل المكون، وكان المطورون مجبرين على استخدام دالة التغليف المعقدة `forwardRef((props, ref) => ...)`. ولكن بدءاً من React 19، قامت React بإلغاء هذا التعقيد نهائياً؛ حيث أصبح `ref` مجرد خاصية عادية (Standard Prop) يمكنك استقبالها مباشرة في معاملات المكون مثل `function MyInput({ ref, label })` وتمريرها لأي عنصر أو استخدامها مع `useImperativeHandle` بمنتهى السلاسة.",
      analogy: "يشبه الأمر إرسال طرد خاص عبر البريد؛ في الماضي كنت تحتاج لمعاملة وتصريح استثنائي وختم خاص من كاتب العدل لترسل هذا النوع من الطرود (`forwardRef`). أما في النظام الحديث، فقد أصبح الطرد معاملة عادية كأي رسالة بريدية تضع عليها طابعاً وتمررها عبر الباب مباشرة!",
      whyItMatters: "يبسط هذا التحديث بنية شفرة React بنسبة كبيرة، ويقضي على تعقيدات TypeScript مع `forwardRef` (حيث كان ترتيب المعاملات معكوساً دائماً: `forwardRef<RefType, PropsType>`)، ويسهل قراءة وصيانة المكونات بشكل مذهل.",
      syntax: "// في React 19 الحديثة (Ref كـ Prop عادي):\nfunction MyComponent({ ref, ...props }: { ref?: React.Ref<HTMLInputElement> }) {\n  return <input ref={ref} {...props} />;\n}",
      simpleExample: `// مثال يوضح بساطة تمرير ref في React 19
import { useRef } from 'react';

// مكون فرعي يستقبل ref مباشرة كـ prop عادي دون الحاجة لـ forwardRef!
function ModernInput({ ref, label }: { ref?: React.Ref<HTMLInputElement>; label: string }) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-slate-400 block">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder="أدخل النص..."
        className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white"
      />
    </div>
  );
}

// المكون الأب
export function ModernRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-white">
      <h4 className="font-bold text-emerald-400 mb-2">تمرير ref كـ Prop عادي في React 19</h4>
      <ModernInput ref={inputRef} label="الاسم الكامل:" />
      <button onClick={handleFocus} className="mt-3 px-3 py-1 bg-emerald-600 rounded text-xs font-bold">
        تركيز المؤشر
      </button>
    </div>
  );
}`,
      advancedExample: `// نموذج متقدم يوضح تمرير ref كـ Prop مع TypeScript في React 19
import React, { useRef, useState } from 'react';

// تعريف واجهة خصائص حقل البحث المتقدم
interface SearchBoxProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  // في React 19، يتم تعريف ref كخاصية اختيارية عادية داخل الـ Interface!
  ref?: React.Ref<HTMLInputElement>;
}

// مكون حقل البحث العصري الخالي من أي forwardRef
export function ModernSearchBox({ ref, placeholder = 'ابحث هنا...', onSearch }: SearchBoxProps) {
  const [text, setText] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(text);
    }
  };

  return (
    <div className="relative">
      <input
        ref={ref}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 pl-10"
      />
      <button
        onClick={() => onSearch(text)}
        className="absolute left-2 top-1/2 -translate-y-1/2 px-2 py-0.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded-lg text-[10px]"
      >
        بحث 🔍
      </button>
    </div>
  );
}

// المكون الأب الذي يستفيد من تمرير ref العصري
export function ModernSearchContainer() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [lastQuery, setLastQuery] = useState<string>('');

  // دالة تفعيل البحث مع التركيز التلقائي
  const triggerQuickSearch = (keyword: string) => {
    setLastQuery(keyword);
    if (searchInputRef.current) {
      searchInputRef.current.value = keyword;
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">حقل البحث مع React 19 Ref Prop</h3>
      <p className="text-xs text-slate-400 mb-4">
        تم استقبال ref كـ prop عادي دون أي تعقيد أو دالة forwardRef إضافية.
      </p>

      {/* استخدام المكون وتمرير المرجع بسلاسة تامة */}
      <div className="mb-4">
        <ModernSearchBox
          ref={searchInputRef}
          onSearch={(q) => setLastQuery(q)}
          placeholder="اكتب كلمة البحث..."
        />
      </div>

      {/* الكلمات المفتاحية السريعة */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[11px] text-slate-400">كلمات شائعة:</span>
        {['React 19', 'Next.js 15', 'TypeScript'].map((tag) => (
          <button
            key={tag}
            onClick={() => triggerQuickSearch(tag)}
            className="px-2 py-0.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded text-[10px]"
          >
            {tag}
          </button>
        ))}
      </div>

      {lastQuery && (
        <p className="text-xs text-emerald-400">آخر استعلام تم تنفيذه: {lastQuery}</p>
      )}
    </div>
  );
}`,
      outputExplanation: "الكود يوضح كيف أصبحت كتابة المكونات التي تستقبل مراجع في React 19 أمراً طبيعياً ومباشراً؛ لا توجد أي دوال إضافية لتغليف المكون، ويتم تعريف نوع المرجع ببساطة كـ `ref?: React.Ref<Type>` داخل واجهة الـ Props كأي خاصية أخرى.",
      commonMistakes: [
        {
          mistake: "الاستمرار في كتابة `React.forwardRef` في مشاريع React 19 الجديدة دون حاجة",
          fix: "تخلص من forwardRef واكتب المكون كدالة عادية تستقبل ref كـ prop؛ فهذا هو الأسلوب العصري المعتمد."
        },
        {
          mistake: "محاولة تسمية الخاصية باسم بديل مثل `inputRef` للهروب من قيود React القديمة",
          fix: "في React 19 يمكنك استخدام الاسم القياسي `ref` مباشرة دون الحاجة لأسماء بديلة."
        }
      ],
      bestPractices: [
        "استخدم `ref?: React.Ref<HTMLElement>` في تعريف واجهات TypeScript للمكونات في React 19.",
        "استفد من بساطة المكونات العادية للتخلص من تعقيد الأنواع المعكوسة في forwardRef."
      ],
      infographic: {
        title: "التطور التاريخي لتمرير المراجع في React",
        points: [
          "React 16 إلى 18: `ref` كلمة محجوزة ➔ إجبار المطور على `forwardRef((props, ref) => ...)` المعقد.",
          "React 19 وما بعدها: `ref` خاصية عادية كأي Prop ➔ كتابة مباشرة: `function Input({ ref, ...props })`.",
          "النتيجة: كود أنظف، أخطاء تجميع أقل، وسهولة تامة مع TypeScript!"
        ]
      }
    },
    {
      id: "15.2.h",
      title: "فهم forwardRef في الأكواد القديمة",
      englishTerm: {
        term: "Understanding Legacy forwardRef",
        pronunciation: "أندرستاندينغ ليغاسي فورورد ريف",
        meaning: "فهم كيفية عمل دالة forwardRef التاريخية لقراءة وصيانة وترقية المشاريع المبنية على إصدارات React السابقة"
      },
      description: "رغم أن React 19 ألغت الحاجة لـ `forwardRef`، إلا أن ملايين المشاريع البرمجية والمكتبات الشائعة (مثل MUI و Chakra UI والإصدارات السابقة من Radix) كُتبت وما زالت تعمل باستخدام `forwardRef`. من الضروري جداً لأي مهندس React محترف فهم كيفية عمل هذه الدالة، وتذكر ترتيب الأنواع المعكوس الشهير في TypeScript معها: `React.forwardRef<RefType, PropsType>((props, ref) => ...)`. كما أعلنت React أن `forwardRef` سيتم إهماله تدريجياً وإزالته في إصدارات مستقبلية بعيدة، مما يجعل معرفة خطة الترقية مهارة لا غنى عنها.",
      analogy: "يشبه الأمر محركات الديزل القديمة؛ السيارات الكهربائية الحديثة لا تحتاج لصمامات وقود ولا فلاتر ديزل، لكن إذا كنت تعمل مهندس صيانة في شركة كبرى، فيجب أن تعرف كيف يعمل محرك الديزل لأن نصف أسطول الشاحنات في السوق ما زال يعتمد عليه حتى تكتمل خطة الترقية!",
      whyItMatters: "تتطلب مقابلات العمل وقراءة المكتبات الخارجية مفتوحة المصدر فهماً دقيقاً لـ `forwardRef`؛ فبدون هذا الفهم لن تستطيع إصلاح أخطاء الأنواع المعقدة في المشاريع القائمة التي تقوم بصيانتها.",
      syntax: "// النمط الكلاسيكي في React 16-18:\nconst OldInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {\n  return <input ref={ref} {...props} />;\n});\nOldInput.displayName = 'OldInput';",
      simpleExample: `// استيراد React الكلاسيكي
import React from 'react';

interface LegacyButtonProps {
  label: string;
  onClick?: () => void;
}

// المكون الكلاسيكي باستخدام forwardRef
// لاحظ أن النوع الأول في الـ Generics هو نوع الـ Ref، والثاني هو الـ Props!
export const LegacyButton = React.forwardRef<HTMLButtonElement, LegacyButtonProps>(
  (props, ref) => {
    return (
      <button
        ref={ref}
        onClick={props.onClick}
        className="px-3 py-1.5 bg-blue-600 rounded text-xs text-white"
      >
        {props.label}
      </button>
    );
  }
);

// تحديد الاسم التوضيحي للأداة في DevTools
LegacyButton.displayName = 'LegacyButton';`,
      advancedExample: `// دليل شامل لمقارنة الكود القديم بـ forwardRef وترقيته إلى React 19
import React, { useRef } from 'react';

// ==========================================
// 1. النمط القديم الكلاسيكي (React 16 - 18)
// ==========================================

interface LegacyCardProps {
  title: string;
  description: string;
}

// دالة التغليف القديمة مع الـ Generic المعكوس
const LegacyCard = React.forwardRef<HTMLDivElement, LegacyCardProps>(
  ({ title, description }, ref) => {
    return (
      <div ref={ref} className="p-4 bg-slate-900 border border-slate-800 rounded-xl mb-3">
        <h4 className="font-bold text-amber-400 text-sm">{title} (كود قديم)</h4>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    );
  }
);
LegacyCard.displayName = 'LegacyCard';

// ==========================================
// 2. النمط العصري الحديث (React 19)
// ==========================================

interface ModernCardProps {
  title: string;
  description: string;
  ref?: React.Ref<HTMLDivElement>;
}

// دالة عادية تماماً تقبل الـ ref في سطر واحد وبدون displayName
function ModernCard({ ref, title, description }: ModernCardProps) {
  return (
    <div ref={ref} className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
      <h4 className="font-bold text-emerald-400 text-sm">{title} (كود React 19)</h4>
      <p className="text-xs text-slate-400">{description}</p>
    </div>
  );
}

// ==========================================
// 3. مكون الاختبار والمقارنة
// ==========================================

export function ForwardRefMigrationGuide() {
  const legacyCardRef = useRef<HTMLDivElement>(null);
  const modernCardRef = useRef<HTMLDivElement>(null);

  const highlightBoth = () => {
    // تطبيق تأثير وميض على كلا المرجعين لإثبات تطابق النتيجة
    legacyCardRef.current?.classList.add('ring-2', 'ring-amber-500');
    modernCardRef.current?.classList.add('ring-2', 'ring-emerald-500');

    setTimeout(() => {
      legacyCardRef.current?.classList.remove('ring-2', 'ring-amber-500');
      modernCardRef.current?.classList.remove('ring-2', 'ring-emerald-500');
    }, 600);
  };

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">مقارنة وترقية forwardRef</h3>
      <p className="text-xs text-slate-400 mb-4">
        كلا الأسلوبين يؤدي نفس الغرض تماماً، ولكن كود React 19 أكثر بساطة وأقل تعقيداً في الأنواع.
      </p>

      {/* الكود القديم */}
      <LegacyCard
        ref={legacyCardRef}
        title="بطاقة الأسلوب الكلاسيكي"
        description="تستخدم React.forwardRef مع تعقيد ترتيب Generics."
      />

      {/* الكود الحديث */}
      <ModernCard
        ref={modernCardRef}
        title="بطاقة الأسلوب العصري"
        description="تستقبل ref كـ Prop عادي وبدون أي دوال تغليف إضافية."
      />

      <button
        onClick={highlightBoth}
        className="w-full mt-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl border border-slate-700"
      >
        اختبار كفاءة المرجعين معاً ⚡
      </button>
    </div>
  );
}`,
      outputExplanation: "يوضح الكود التكافؤ الوظيفي الكامل بين النمطين؛ حيث يستطيع المكون الأب التحكم بالـ DOM في الحالتين بنفس الطريقة، بينما يتفوق كود React 19 بالتخلص من دالة `forwardRef` وتفادي نسيان `displayName` في أدوات المطورين.",
      commonMistakes: [
        {
          mistake: "الخلط بين ترتيب الـ Generics في forwardRef: كتابة `<Props, Ref>` بدلاً من `<Ref, Props>`",
          fix: "تذكر دائماً أن forwardRef تعكس الترتيب: الأول هو نوع المرجع `Ref` والثاني هو نوع الخصائص `Props`."
        },
        {
          mistake: "نسيان كتابة `Component.displayName` مع forwardRef مما يجعل المكون يظهر كـ 'Anonymous' في React DevTools",
          fix: "أضف `Component.displayName = 'Name'` دائماً عند استخدام النمط القديم لتسهيل التصحيح."
        }
      ],
      bestPractices: [
        "افهم forwardRef جيداً لقراءة المشاريع التراثية والمكتبات الشائعة بثقة.",
        "عند بناء مشروع جديد يعتمد على React 19، اعتمد حصراً على أسلوب الـ ref كـ Prop عادي لتوفير أسطر الكود والتعقيد."
      ],
      infographic: {
        title: "جدول مقارنة forwardRef والنمط الحديث",
        points: [
          "forwardRef (React 16-18): يحتاج دالة تغليف، ترتيب Generics معكوس `<Ref, Props>`، ويلزم إضافة displayName يدوياً.",
          "Ref as Prop (React 19+): دالة عادية، الـ ref جزء طبيعي من interface Props، وdisplayName تلقائي من اسم الدالة.",
          "مسار الترقية: استبدال `React.forwardRef` بتمرير `ref` مباشرة في بارامترات المكون."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q15.2.1",
      question: "ما هو الفارق الأساسي بين توقيت تنفيذ useEffect وتوقيت useLayoutEffect؟",
      options: [
        "useEffect يعمل قبل رسم الشاشة، بينما useLayoutEffect يعمل بعد رسمها",
        "useLayoutEffect يعمل بشكل متزامن قبل أن يقوم المتصفح برسم البكسلات على الشاشة (Before Paint)، بينما useEffect يعمل بعد اكتمال الرسم (After Paint)",
        "useLayoutEffect مخصص للعمليات غير المتزامنة كجلب البيانات من الشبكة",
        "لا يوجد أي فرق بينهما وهما متطابقان تماماً في الأداء والتوقيت"
      ],
      correctAnswer: 1,
      explanation: "يحجب `useLayoutEffect` رسم المتصفح وينفذ منطقه متزامناً فور تعديل شجرة الـ DOM وقبل تلوين الشاشة، مما يمنع الوميض البصري عند قياس وتعديل الأبعاد، بينما `useEffect` ينطلق غير متزامن بعد الرسم."
    },
    {
      id: "q15.2.2",
      question: "ما هي الفائدة المعمارية الأهم لاستخدام خطاف useImperativeHandle؟",
      options: [
        "زيادة سرعة التجميع في TypeScript",
        "تخصيص وتقنين ما يكشفه المكون الابن للمكون الأب عبر خاصية ref، مما يحمي الـ DOM الداخلي ويحقق مبدأ التغليف (Encapsulation)",
        "تحويل المكون من Functional إلى Class Component",
        "إجبار المتصفح على تشغيل الرسوم المتحركة بمعدل 120 إطاراً في الثانية"
      ],
      correctAnswer: 1,
      explanation: "يتيح `useImperativeHandle` للمطور تعريف كائن تحكم إجرائي يحتوي فقط على دوال محددة بدلاً من كشف عنصر الـ DOM بالكامل للأب، مما يعزل التفاصيل الداخلية ويحافظ على استقرار الكود."
    },
    {
      id: "q15.2.3",
      question: "كيف تغير التعامل مع خاصية ref في إصدار React 19 مقارنة بالإصدارات السابقة؟",
      options: [
        "تم إلغاء المراجع ref بالكامل واستبدالها بحقول مخفية",
        "أصبح بالإمكان استقبال ref كخاصية عادية (Standard Prop) مباشرة في معاملات المكون دون الحاجة لدالة forwardRef القديمة",
        "أصبح استخدام ref يتطلب دفع رسوم ترخيص إضافية",
        "أصبح ref مقتصراً على عناصر الفيديو والصوت فقط"
      ],
      correctAnswer: 1,
      explanation: "في React 19، تخلصت React من دالة `forwardRef` المعقدة، وأصبح بالإمكان كتابة `function MyInput({ ref, label })` وتمرير المرجع كخاصية طبيعية مثل أي خاصية أخرى."
    }
  ],
  exercise: {
    id: "ex-15.2",
    title: "تمرين عملي: بناء حقل نصي ذكي بمقبض إجرائي useImperativeHandle في React 19",
    description: "قم بإنشاء مكون `SmartInputField` في React 19 يستقبل `ref` كخاصية عادية، ويستخدم `useImperativeHandle` لتوفير مقبض إجرائي `SmartFieldHandle` يحتوي على ثلاث دوال: `focus()`, `clear()`, `shake()` لإحداث اهتزاز بصري للخطأ. ثم أنشئ مكوناً أباً يتحكم بهذا الحقل عبر أزرار مخصصة.",
    hints: [
      "في React 19 استقبل `ref` في معاملات دالة المكون كـ Prop عادي بدون `forwardRef`.",
      "استخدم `useRef<HTMLInputElement>(null)` داخلياً للوصول لعنصر الإدخال الحقيقي.",
      "في دالة `shake()` أضف صنف CSS للاهتزاز ثم قم بإزالته بعد 400 ميلي ثانية باستخدام `setTimeout`.",
      "استخدم `useImperativeHandle(ref, () => ({ ... }), [])` لتخصيص الدوال الثلاث."
    ],
    solution: `// استيراد الأدوات من React
import React, { useRef, useImperativeHandle, useState } from 'react';

// 1. تعريف واجهة المقبض الإجرائي
export interface SmartFieldHandle {
  focus: () => void;
  clear: () => void;
  shake: () => void;
}

// 2. المكون الفرعي بأسلوب React 19 (Ref كخاصية عادية)
interface SmartInputFieldProps {
  placeholder?: string;
  ref?: React.Ref<SmartFieldHandle>;
}

export function SmartInputField({ ref, placeholder }: SmartInputFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShaking, setIsShaking] = useState<boolean>(false);

  // تخصيص المرجع المتاح للأب
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) inputRef.current.value = '';
    },
    shake: () => {
      setIsShaking(true);
      inputRef.current?.focus();
      setTimeout(() => setIsShaking(false), 400);
    }
  }), []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder || 'اكتب هنا...'}
      className={\`w-full px-4 py-2 bg-slate-900 border rounded-xl text-xs text-white focus:outline-none transition-all \${isShaking ? 'border-rose-500 ring-4 ring-rose-500/20 translate-x-1' : 'border-slate-800 focus:border-cyan-500'}\`}
    />
  );
}

// 3. المكون الأب لاختبار التحكم الإجرائي
export function SmartFieldController() {
  const fieldRef = useRef<SmartFieldHandle>(null);

  return (
    <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold text-cyan-400 mb-3">حقل ذكي بمقبض إجرائي (React 19)</h3>
      
      <div className="mb-4">
        <SmartInputField ref={fieldRef} placeholder="حقل خاضع للأوامر الخارجية..." />
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => fieldRef.current?.focus()}
          className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-bold"
        >
          تركيز (Focus)
        </button>
        <button
          onClick={() => fieldRef.current?.clear()}
          className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold"
        >
          مسح (Clear)
        </button>
        <button
          onClick={() => fieldRef.current?.shake()}
          className="flex-1 py-1.5 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-bold"
        >
          اهتزاز خطأ (Shake)
        </button>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خريطة useLayoutEffect و useImperativeHandle",
    nodes: [
      { id: "1", title: "useLayoutEffect", desc: "متزامن قبل رسم المتصفح لقياس الـ DOM ومنع الوميض البصري" },
      { id: "2", title: "تجنب الوميض", desc: "تطبيق الإحداثيات قبل إطار الرسم الأول يضمن صفر قفزات (CLS = 0)" },
      { id: "3", title: "useImperativeHandle", desc: "تخصيص ما يكشفه المكون عبر الـ ref وحماية عناصر الـ DOM الداخلية" },
      { id: "4", title: "مكونات قابلة للتحكم", desc: "تصميم مرن يجمع بين الاستجابة التلقائية والأوامر الإجرائية" },
      { id: "5", title: "React 19 Ref Prop", desc: "تمرير ref كخاصية عادية كأي prop بدون الحاجة لدوال تغليف" },
      { id: "6", title: "إرث forwardRef", desc: "فهم الكود القديم لصيانة وترقية الأنظمة التاريخية بثقة" }
    ]
  }
};
