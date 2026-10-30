// src/data/sections/section7/topic3.js
// الموضوع 3: استخدام useRef في React (References, DOM Access & Mutable Values)

export const SECTION_7_TOPIC_3 = {
  id: "7.3",
  title: "استخدام useRef",
  englishTerm: "Using useRef for References & DOM",
  description: "الصندوق السري للمكون: فهم ماهية المراجع (Refs)، الوصول المباشر لعقد DOM، التركيز على الحقول، الاحتفاظ بمعرفات المؤقتات والبيانات المتغيرة دون إطلاق إعادة تصيير، والمقارنة الفاصلة بين useRef و useState.",
  subtopics: [
    {
      id: "7.3.a",
      title: "مفهوم References",
      englishTerm: "References Concept (Secret Box & Mutable Memory)",
      description: "المفهوم الهندسي للمرجع (Reference) في React. هو عبارة عن 'صندوق سري' أو كائن عادي في الذاكرة يحمل خاصية واحدة قابلة للتعديل تُدعى .current. على عكس الـ State، فإن تعديل قيمة ref.current لا يؤدي إطلاقاً إلى إعادة تصيير المكون (No Re-render)، ومع ذلك فإن القيمة تظل محفوظة ومستقرة في الذاكرة عبر كافة دورات التصيير المتتابعة طوال حياة المكون.",
      realLifeAnalogy: "مثل جيب معطفك السري؛ تضع فيه مفتاح سيارتك وملاحظاتك الشخصية دون أن يعلم أحد ودون أن تضطر لتغيير ملابسك بالكامل أو إعادة تصفيف شعرك (Re-render) في كل مرة تضع فيها المفتاح في جيبك.",
      whyItMatters: "ضروري للغاية في السيناريوهات التي تحتاج فيها لتذكر معلومة هامة (مثل: رقم معرّف مؤقت، عدد نقرات سرية، القيمة السابقة للحالة، أو مؤشر لموضع التمرير) دون إزعاج المستخدم أو إجبار الشاشة على إعادة الرسم.",
      syntax: "import { useRef } from 'react';\nconst myRef = useRef(initialValue);\n// القراءة والتعديل:\nmyRef.current = newValue;",
      simpleExample: `// استيراد useRef
import { useRef } from "react";

function SecretClickTracker() {
  // إنشاء مرجع يبدأ بالرقم 0
  const clickCountRef = useRef(0);

  const handleClick = () => {
    // تعديل القيمة مباشرة في مكانها دون إطلاق أي رندر على الإطلاق!
    clickCountRef.current += 1;
    console.log("النقرات المسجلة سراً في الذاكرة:", clickCountRef.current);
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>اضغط الزر ولاحظ أن الشاشة لا تومض ولا تتأثر، والقيمة تسجل في الكونسول:</p>
      <button onClick={handleClick} className="px-3 py-1 bg-indigo-600 rounded font-bold">
        تسجيل نقرة صامتة
      </button>
    </div>
  );
}`,
      advancedExample: `// استعراض مقارنة حية بين التعديل الصامت في useRef والتعديل البصري في useState
import { useState, useRef } from "react";

export function RefVsStateLiveStudio() {
  const [renderCount, setRenderCount] = useState(0);
  const secretClicks = useRef(0);

  const handleSilentClick = () => {
    secretClicks.current += 1;
    alert(\`تم تسجيل النقرة في الذاكرة سراً (العدد: \${secretClicks.current}). الشاشة لم يُعد رندرها!\`);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مختبر مفهوم المرجع (useRef Concept)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          No Re-render
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-slate-400 block font-bold">رندرات الشاشة (useState):</span>
          <p className="text-2xl font-black font-mono text-emerald-400">{renderCount}</p>
          <button
            onClick={() => setRenderCount((r) => r + 1)}
            className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold transition-all"
          >
            إطلاق رندر بصري +1
          </button>
        </div>

        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-slate-400 block font-bold">الذاكرة الصامتة (useRef):</span>
          <p className="text-2xl font-black font-mono text-amber-400">{secretClicks.current}</p>
          <button
            onClick={handleSilentClick}
            className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold transition-all border border-slate-700"
          >
            تعديل صامت سري +1
          </button>
        </div>
      </div>

      <p className="text-[10px] text-slate-400 leading-relaxed">
        💡 اضغط 'تعديل صامت' 3 مرات، ثم اضغط 'إطلاق رندر بصري'؛ ستتفاجأ بأن الرقم في الـ useRef قفز للرقم 3 فور حدوث أول رندر، لأنه احتفظ بالرقم طوال الوقت!
      </p>
    </div>
  );
}`,
      output: "المكون يوضح الفرق الجوهري؛ useRef يحتفظ بالمعلومات المتغيرة في الذاكرة سراً دون لمس الواجهة أو التسبب في أي رندر غير مرغوب فيه.",
      commonMistakes: [
        {
          mistake: "محاولة استخدام useRef لعرض نصوص تتغير على الشاشة وتوقع أن تظهر للمستخدم فوراً.",
          why: "تعديل ref.current لا يطلق رندراً؛ فلن يعلم المتصفح أن الرقم تغير ولن يظهر الرقم الجديد في الواجهة حتى يقع رندر آخر بسبب useState!",
          fix: "إذا كانت المعلومة مرئية للمستخدم وتؤثر على الشاشة، استخدم useState؛ وإذا كانت معلومة برمجية خلف الكواليس، استخدم useRef."
        }
      ],
      bestPractices: [
        "تذكر: useRef = كائن عادي ثابت المرجع: { current: initialValue } تحتفظ به React طوال حياة المكون.",
        "لا تستخدم متغيرات JavaScript العادية خارج المكون لتخزين القيم، لأنها ستكون مشتركة بالخطأ بين كافة نسخ المكون في الصفحة، بينما useRef يضمن ذاكرة معزولة لكل نسخة مكون مستقلة."
      ],
      infographicCard: {
        type: "box-concept",
        title: "تشريح كائن المرجع useRef",
        structure: [
          "const myRef = useRef('بداية');",
          "// الناتج في الذاكرة كائن مستقر:",
          "{ current: 'بداية' }",
          "// التعديل: myRef.current = 'جديد' (صامت وبلا رندر!)"
        ]
      }
    },
    {
      id: "7.3.b",
      title: "إنشاء Ref باستخدام useRef",
      englishTerm: "Declaring Ref with useRef & The .current Property",
      description: "طريقة تعريف وإنشاء المرجع واستخدام خاصية .current المدمجة. يُرجع خطاف useRef دائماً كائناً عادياً له خاصية واحدة فقط اسمها current. يتم تمرير القيمة الابتدائية كمعامل لـ useRef (مثل null لعقد الـ DOM، أو أرقام وسلاسل للبيانات). يظل هذا الكائن بنفس عنوان الذاكرة تماماً عبر كافة الرندرات.",
      realLifeAnalogy: "مثل مظروف أوراق رسمي معنون باسم ثابت؛ يمكنك فتح المظروف وتبديل الورقة الموضوعة بداخله (.current) بمستند جديد في أي وقت، ولكن المظروف الخارجي نفسه وموقعه في درج المكتب يظل ثابتاً لا يتغير.",
      whyItMatters: "يوفر مرجعاً مستقراً (Stable Reference) يمكن تمريره للمؤقتات أو لمعالجات الأحداث أو لعناصر JSX دون القلق من تغير عنوان الذاكرة للكائن.",
      syntax: "const inputRef = useRef(null);\nconsole.log(inputRef.current); // القيمة الحالية",
      simpleExample: `// إنشاء مرجع بسيط وفحص خاصية current
import { useRef } from "react";

function RefSyntaxDemo() {
  // إنشاء مرجع بقيمة أولية نصية
  const statusRef = useRef("جاهز للعمل");

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>قيمة الخاصية current: <strong className="text-emerald-400 font-mono">{statusRef.current}</strong></p>
      <button 
        onClick={() => { statusRef.current = "تم التحديث بنجاح"; alert(statusRef.current); }}
        className="px-3 py-1 bg-indigo-600 rounded"
      >
        تحديث وقراءة current
      </button>
    </div>
  );
}`,
      advancedExample: `// استعراض ثبات مرجع كائن useRef عبر عمليات الرندر المتتابعة
import { useState, useRef } from "react";

export function StableRefIdentityDemo() {
  const [renderCount, setRenderCount] = useState(0);
  const stableBoxRef = useRef({ createdAt: new Date().toLocaleTimeString() });

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">ثبات هوية كائن الـ Ref</h4>
        <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">
          رندر #{renderCount}
        </span>
      </div>

      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono">
        <p className="text-slate-400">وقت إنشاء الكائن في أول رندر:</p>
        <p className="text-emerald-400 text-lg font-bold">{stableBoxRef.current.createdAt}</p>
        <p className="text-[10px] text-slate-500 font-sans">
          الوقت بالأعلى لم يتغير نهائياً رغم تكرار رندر المكون عدة مرات!
        </p>
      </div>

      <button
        onClick={() => setRenderCount((c) => c + 1)}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/40"
      >
        إعادة رندر المكون (+1)
      </button>
    </div>
  );
}`,
      output: "مهما قمت بإعادة رندر المكون، يظل كائن الـ Ref بنفس الوقت وقيمة الذاكرة الأولى دون إعادة تهيئة، مما يثبت استقراره الدائم.",
      commonMistakes: [
        {
          mistake: "نسيان كتابة .current عند قراءة المرجع، مثل: if (myRef === 5) بدلاً من if (myRef.current === 5).",
          why: "myRef هو كائن كامل يحتوي على { current: 5 }؛ مقارنته بالرقم 5 مباشرة ستكون false دائماً!",
          fix: "اقرأ واكتب دائماً من خلال الخاصية: myRef.current."
        }
      ],
      bestPractices: [
        "هيئ المراجع المخصصة لعناصر DOM دائماً بالقيمة المبدئية null: const divRef = useRef(null);.",
        "لا تستدعِ دالة تهيئة مكلفة رياضياً داخل useRef مباشرة، لأنها ستُنفذ في كل رندر دون جدوى."
      ],
      infographicCard: {
        type: "code-anatomy",
        title: "الصيغة القياسية لـ useRef",
        formula: "const myRef = useRef(null); // myRef.current هي النافذة للبيانات"
      }
    },
    {
      id: "7.3.c",
      title: "الوصول إلى عناصر DOM",
      englishTerm: "Accessing Real DOM Nodes with ref Attribute",
      description: "الاستخدام الأشهر والأوسع لـ useRef في React: ربط المرجع بعنصر HTML حقيقي في المتصفح. تقوم بتمرير المرجع إلى خاصية ref={myRef} في أي وسم JSX، فتقوم React في مرحلة التثبيت (Commit Phase) بوضع عقدة الـ DOM الحقيقية مباشرة داخل myRef.current. يمنحك هذا وصولاً آمناً للعنصر دون الحاجة لاستخدام document.getElementById المرفوضة في React.",
      realLifeAnalogy: "مثل توكيل محامٍ رسمي لتمثيلك؛ بدلاً من أن تذهب للمحكمة بنفسك وتصرخ في القاعة بحثاً عن ملفك القديم بين آلاف الملفات (getElementById)، توكل المحامي (ref) ليتسلم ملفك الرسمي مباشرة من القاضي ويضعه في يدك بأمان.",
      whyItMatters: "الطريقة الشرعية الوحيدة في React للوصول لعقد الـ DOM للقيام بعمليات لا يدعمها الـ JSX المباشر: مثل قياس أبعاد العنصر (BoundingClientRect)، إدارة التمرير الداخلي (scrollIntoView)، واستدعاء واجهات الوسائط كتشغيل الفيديو.",
      syntax: "const divRef = useRef(null);\n<div ref={divRef}>محتوى</div>\n// الوصول لعقدة المتصفح:\nconsole.log(divRef.current); // HTMLDivElement",
      simpleExample: `// الوصول المباشر لعقدة وسم div وقياس عرضه الحقيقي في المتصفح
import { useRef, useEffect, useState } from "react";

function DomElementMeasure() {
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);

  useEffect(() => {
    // الوصول لعقدة الـ DOM الحقيقية وقياس عرضها الفعلي
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="space-y-2 text-xs text-white">
      {/* ربط المرجع بالوسم عبر خاصية ref */}
      <div ref={boxRef} className="p-4 bg-indigo-900/50 border border-indigo-500 rounded-xl">
        هذا الصندوق يتم قياسه برمجياً من الـ DOM الحقيقي.
      </div>
      <p className="font-mono text-emerald-400">العرض المقاس: {boxWidth} بكسل</p>
    </div>
  );
}`,
      advancedExample: `// مشغل فيديو تفاعلي يتحكم في عقدة الـ DOM الحقيقية (<video>) عبر useRef
import { useRef, useState } from "react";

export function CustomVideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    // الوصول لدوال المتصفح الحقيقية في عقدة الـ DOM
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // تعديل خاصية في عقدة الـ DOM
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-sm mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">التحكم في الـ DOM: مشغل الفيديو</h4>
        <span className="text-[10px] font-mono text-slate-400">HTML5 Video Node</span>
      </div>

      {/* عنصر الفيديو الحقيقي مربوط بالمرجع videoRef */}
      <div className="rounded-2xl overflow-hidden border border-slate-800 bg-black aspect-video flex items-center justify-center relative">
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={togglePlay}
          className={\`flex-1 py-2 rounded-xl text-xs font-bold transition-all \${
            isPlaying ? "bg-amber-600 hover:bg-amber-500 text-white" : "bg-emerald-600 hover:bg-emerald-500 text-white"
          }\`}
        >
          {isPlaying ? "إيقاف مؤقت ⏸️" : "تشغيل الفيديو ▶️"}
        </button>
        <button
          onClick={handleRestart}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold border border-slate-700"
        >
          إعادة من الصفر 🔄
        </button>
      </div>
    </div>
  );
}`,
      output: "المكون يتحكم في وسم الفيديو مباشرة في المتصفح (.play() و .pause() و .currentTime = 0) بنظافة وبدون الحاجة لتعريف معرفات id في HTML.",
      commonMistakes: [
        {
          mistake: "استخدام document.querySelector أو document.getElementById في مكونات React بدلاً من useRef.",
          why: "البحث في document يبحث في كامل الصفحة عالمياً؛ فإذا قمت بتكرار المكون 3 مرات سيتحكم الكود بأول مكون فقط ويتجاهل الباقي ويسبب تضارباً كارثياً!",
          fix: "استخدم دائماً useRef؛ فهو يضمن عزل المرجع لكل نسخة مستقلة من المكون."
        }
      ],
      bestPractices: [
        "تحقق دائماً من وجود العقدة قبل استدعاء دوالها: if (myRef.current) { ... } لمنع أخطاء Cannot read properties of null.",
        "تذكر: خاصية ref تصبح متاحة بعد اكتمال مرحلة التثبيت (Commit Phase)، لذا اقرأها داخل معالجات الأحداث أو داخل useEffect وليس في جسم المكون مباشرة."
      ],
      infographicCard: {
        type: "flow-dom-binding",
        title: "كيف تربط React المرجع بعقدة المتصفح؟",
        steps: [
          "1. إنشاء المرجع: const nodeRef = useRef(null)",
          "2. الربط في JSX: <div ref={nodeRef} />",
          "3. في مرحلة Commit: تضع React عقدة الـ DOM الحقيقية داخل nodeRef.current تلقائياً!"
        ]
      }
    },
    {
      id: "7.3.d",
      title: "التركيز على حقول الإدخال",
      englishTerm: "Focusing Inputs, Scrolling & Measuring Sizes",
      description: "التطبيقات العملية الثلاثة الأكثر شيوعاً واحترافية للوصول لـ DOM عبر useRef: 1) التركيز التلقائي على حقل الإدخال برمجياً عبر inputRef.current.focus() (مثل التركيز على حقل البحث عند فتح النافذة)، 2) التمرير السلس نحو عنصر محدد عبر elementRef.current.scrollIntoView({ behavior: 'smooth' }) (مثل التمرير لآخر رسالة في الدردشة)، 3) قياس أبعاد وموضع العنصر عبر getBoundingClientRect().",
      realLifeAnalogy: "مثل إشارة الليزر التي يوجهها المحاضر في القاعة على رسم بياني محدد في الشاشة العملاقة؛ يوجه انتباه ونظر الجميع فوراً إلى تلك النقطة بدقة دون أن يلمس لوحة العرض بيده.",
      whyItMatters: "تحسين تجربة الاستخدام (UX) وإمكانية الوصول (Accessibility) بشكل دراماتيكي، كأن ينتقل المؤشر تلقائياً للخطأ عند فشل إرسال النموذج.",
      syntax: "inputRef.current.focus();\nchatBottomRef.current.scrollIntoView({ behavior: 'smooth' });",
      simpleExample: `// التركيز التلقائي على حقل إدخال بنقرة زر
import { useRef } from "react";

function InputFocusButtonDemo() {
  const inputRef = useRef(null);

  const handleClickFocus = () => {
    // توجيه مؤشر الكتابة والتركيز مباشرة إلى الحقل
    inputRef.current?.focus();
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-3">
      <input 
        ref={inputRef}
        placeholder="انقر الزر بالأسفل ليأتيك المؤشر هنا..."
        className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-white"
      />
      <button onClick={handleClickFocus} className="px-3 py-1.5 bg-indigo-600 rounded font-bold">
        التركيز على الحقل (Focus)
      </button>
    </div>
  );
}`,
      advancedExample: `// تطبيق محادثة فورية يمرر تلقائياً لأسفل الشاشة (Auto-Scroll) عند وصول كل رسالة جديدة
import { useState, useRef, useEffect } from "react";

export function AutoScrollChatRoom() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "الدعم الفني", text: "مرحباً بك! كيف يمكننا مساعدتك اليوم؟" },
    { id: 2, sender: "أنت", text: "أريد الاستفسار عن كورس React المتقدم." }
  ]);
  const [inputText, setInputText] = useState("");

  // مرجع يشير إلى العنصر غير المرئي في قاع المحادثة
  const messagesEndRef = useRef(null);
  const inputFieldRef = useRef(null);

  // التمرير التلقائي للأسفل كلما تغيرت مصفوفة الرسائل
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "أنت", text: inputText }
    ]);
    setInputText("");

    // إعادة التركيز فوراً على حقل الكتابة بعد الإرسال
    inputFieldRef.current?.focus();
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-sm mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">محادثة مع التمرير الذكي (Auto-Scroll)</h4>
        <span className="text-[10px] font-mono text-emerald-400">Smooth Scroll</span>
      </div>

      {/* صندوق الرسائل ذو شريط التمرير */}
      <div className="h-44 overflow-y-auto space-y-2 p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs">
        {messages.map((m) => (
          <div key={m.id} className={\`p-2.5 rounded-xl max-w-[85%] \${
            m.sender === "أنت" ? "bg-indigo-600 mr-auto text-white" : "bg-slate-800 text-slate-200"
          }\`}>
            <span className="text-[10px] block opacity-75 font-bold mb-0.5">{m.sender}</span>
            <p>{m.text}</p>
          </div>
        ))}
        {/* عنصر وهمي فارغ في القاع لضبط التمرير عنده */}
        <div ref={messagesEndRef} />
      </div>

      {/* نموذج الإرسال مع التركيز التلقائي */}
      <form onSubmit={handleSendMessage} className="flex gap-2">
        <input
          ref={inputFieldRef}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="اكتب رسالتك..."
          className="flex-1 p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/40"
        >
          إرسال
        </button>
      </form>
    </div>
  );
}`,
      output: "مع كل رسالة جديدة يكتبها المستخدم، ينساب صندوق المحادثة بنعومة فائقة نحو الأسفل بفضل scrollIntoView، مع بقاء مؤشر الكتابة نشطاً داخل الحقل بفضل focus().",
      commonMistakes: [
        {
          mistake: "محاولة استدعاء inputRef.current.focus() في جسم المكون مباشرة أثناء الرندر بدلاً من معالج الحدث أو useEffect.",
          why: "أثناء مرحلة الرندر لم تكن عقدة الـ DOM قد تم ربطها بعد، فتكون قيمة inputRef.current تساوي null ويتحطم الكود بخطأ قاتل!",
          fix: "استدعِ دوال الـ DOM دائماً داخل معالج حدث (onClick/onSubmit) أو داخل خطاف useEffect."
        }
      ],
      bestPractices: [
        "استخدم العامل الآمن (Optional Chaining) دائماً: myRef.current?.focus() لمنع أي انهيار في حال كان العنصر غير موجود في الشاشة.",
        "استخدم مرجعاً وهمياً فارغاً <div ref={endRef} /> لتحديد نهاية القوائم الطويلة والتمرير إليها بسهولة."
      ],
      infographicCard: {
        type: "actions-card",
        title: "العمليات الثلاث الكبرى لعقد DOM عبر useRef",
        actions: [
          { name: "1. التركيز الفوري", code: "inputRef.current.focus()" },
          { name: "2. التمرير الانسيابي", code: "targetRef.current.scrollIntoView({ behavior: 'smooth' })" },
          { name: "3. قياس الأبعاد", code: "const rect = divRef.current.getBoundingClientRect()" }
        ]
      }
    },
    {
      id: "7.3.e",
      title: "تخزين قيم لا تتطلب إعادة تصيير",
      englishTerm: "Storing Non-rendering Values (State Cache & Metrics)",
      description: "استخدام useRef كمتغير عام خاص بالمكون لتخزين معلومات تشغيلية وتاريخية تتغير باستمرار ولكن لا يرغب المطور في أن يؤدي تغيرها لإعادة رسم الصفحة (No Re-render). من أمثلتها: الاحتفاظ بالقيمة السابقة لخاصية معينة (Previous Props Tracker)، تسجيل عدد المرات التي نقر فيها المستخدم، أو تخزين مؤشرات زمنية لحساب سرعة الإنجاز.",
      realLifeAnalogy: "مثل عداد الكيلومترات المخفي في لوحة محرك السيارة؛ يسجل المسافة الإجمالية التي قطعتها السيارة في الذاكرة دون أن يصدر صوتاً أو يغير إضاءة الشاشة في كل متر تقطعه.",
      whyItMatters: "يوفر قدراً هائلاً من استهلاك المعالج ويحمي التطبيق من الرندرات المهدرة (Wasted Re-renders) الناتجة عن تتبع قيم خفية لا يراها المستخدم.",
      syntax: "const prevCountRef = useRef();\nuseEffect(() => {\n  prevCountRef.current = currentCount;\n});\nconst prevCount = prevCountRef.current;",
      simpleExample: `// تتبع القيمة السابقة للعداد باستخدام useRef
import { useState, useEffect, useRef } from "react";

function PreviousValueTrackerDemo() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    // تخزين القيمة الحالية لتصبح هي القيمة السابقة في الرندر القادم
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>القيمة الحالية: <span className="font-bold text-emerald-400">{count}</span></p>
      <p>القيمة السابقة المحفوظة بالـ Ref: <span className="font-bold text-amber-400">{prevCountRef.current}</span></p>
      <button onClick={() => setCount(c => c + 1)} className="px-3 py-1 bg-indigo-600 rounded">
        زيادة العداد
      </button>
    </div>
  );
}`,
      advancedExample: `// أداة قياس زمن استجابة وتفاعل المستخدم (Interaction Latency Tracker) بـ useRef
import { useState, useRef } from "react";

export function LatencyPerformanceTracker() {
  const [clickTotal, setClickTotal] = useState(0);
  const [lastLatency, setLastLatency] = useState(0);

  // استخدام useRef لحفظ توقيت آخر نقرة دون إطلاق رندر إضافي
  const lastClickTimeRef = useRef(Date.now());

  const handleUserAction = () => {
    const now = Date.now();
    const timeDelta = now - lastClickTimeRef.current;
    lastClickTimeRef.current = now; // تحديث التوقيت صمتاً

    setLastLatency(timeDelta);
    setClickTotal((c) => c + 1);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مقياس سرعة التفاعل الصامت (useRef)</h4>
        <span className="text-[10px] font-mono text-slate-400">Metrics Tracker</span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] block uppercase">إجمالي النقرات</span>
          <span className="text-xl font-black text-indigo-400">{clickTotal}</span>
        </div>
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <span className="text-slate-500 text-[10px] block uppercase">الفاصل الزمني بين النقرتين</span>
          <span className="text-xl font-black text-emerald-400">{lastLatency} ms</span>
        </div>
      </div>

      <button
        onClick={handleUserAction}
        className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/40"
      >
        انقر هنا لتسجيل التوقيت وحساب الفارق ⚡
      </button>
    </div>
  );
}`,
      output: "يتم تسجيل التوقيت الدقيق للنقرة السابقة داخل lastClickTimeRef.current وحساب الفارق الزمني بالميلي ثانية بسلاسة مطلقة ودون رندرات مزدوجة.",
      commonMistakes: [
        {
          mistake: "استخدام useState لحفظ توقيت النقرة السابقة (lastClickTime) واستدعاء setTime مع setCount في نفس الوقت.",
          why: "هذا يثقل كود المكون بحالة ثانوية لا تظهر للمستخدم بذاتها، مما يزيد تعقيد مصفوفة الاعتماديات في التأثيرات اللاحقة.",
          fix: "استخدم useRef لحفظ أي قيمة تشغيلية لا تظهر على الشاشة."
        }
      ],
      bestPractices: [
        "استخدم نمط usePrevious المعتمد لحفظ القيمة السابقة لأي prop أو state بسهولة.",
        "عامل useRef كـ 'Instance Variable' خاص بالمكون كما في البرمجة الموجهة للكائنات (OOP)."
      ],
      infographicCard: {
        type: "rule-box",
        title: "متى تستخدم useRef للبيانات العادية؟",
        cases: [
          "1. حفظ معرّف مؤقت (Timer ID) لتنظيفه لاحقاً.",
          "2. تتبع القيمة السابقة (Previous State).",
          "3. حساب مقاييس الأداء والإحصائيات الصامتة التي لا تظهر كـ UI."
        ]
      }
    },
    {
      id: "7.3.f",
      title: "الاحتفاظ بمعرّفات المؤقتات",
      englishTerm: "Holding Timer IDs Across Renders with useRef",
      description: "النمط القياسي الأكثر موثوقية لإدارة المؤقتات (Timers) عندما تحتاج لتشغيل مؤقت في معالج حدث معين (مثل onClick) وإيقافه في معالج حدث آخر أو في دالة التنظيف. نظراً لأن المتغيرات العادية تُمسح مع كل رندر، فإن useRef يوفر المكان المثالي للاحتفاظ برقم معرّف المؤقت (timerRef.current) مستقراً ومتاحاً عبر كافة الأزرار والتأثيرات.",
      realLifeAnalogy: "مثل تذكرة استلام السيارة من خدمة صف السيارات (Valet Parking)؛ تضع التذكرة في محفظتك (useRef)، وتتجول في المول براحتك لساعات، وعندما تنتهي تبرز نفس التذكرة للموظف الآخر عند بوابة الخروج ليسترجع سيارتك المحددة.",
      whyItMatters: "يمنع فقدان السيطرة على المؤقتات النشطة؛ فلو حفظت المعرف في متغير عادي داخل دالة، ستفقد إمكانية الوصول إليه عند النقر على زر 'إيقاف' في دالة أخرى.",
      syntax: "const timerRef = useRef(null);\nconst start = () => { timerRef.current = setInterval(...); };\nconst stop = () => { clearInterval(timerRef.current); };",
      simpleExample: `// تشغيل وإيقاف مؤقت من أزرار منفصلة عبر useRef
import { useState, useRef, useEffect } from "react";

function TimerHolderDemo() {
  const [seconds, setSeconds] = useState(0);
  // حفظ معرف المؤقت في الـ Ref
  const timerIdRef = useRef(null);

  const startTimer = () => {
    // منع تكرار المؤقت إذا كان يعمل بالفعل
    if (timerIdRef.current !== null) return;
    timerIdRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  // تنظيف أمان عند هدم المكون
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2 font-mono">
      <p>الوقت: <span className="text-emerald-400 font-bold">{seconds}s</span></p>
      <div className="flex gap-2">
        <button onClick={startTimer} className="px-3 py-1 bg-emerald-600 rounded">تشغيل</button>
        <button onClick={stopTimer} className="px-3 py-1 bg-rose-600 rounded">إيقاف</button>
      </div>
    </div>
  );
}`,
      advancedExample: `// مؤقت عد تنازلي لإلغاء إرسال رسالة بريدية (Undo Send Email Timer)
import { useState, useRef, useEffect } from "react";

export function UndoSendEmailSimulator() {
  const [isSending, setIsSending] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isSentFinal, setIsSentFinal] = useState(false);

  // مراجع لحفظ معرّف الفاصل الزمني ومعرّف مؤقت الإرسال النهائي
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleTriggerSend = () => {
    setIsSending(true);
    setCountdown(5);
    setIsSentFinal(false);

    // 1. مؤقت لتحديث رقم العد التنازلي كل ثانية
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // 2. مؤقت للإرسال الحقيقي النهائي بعد انقضاء الـ 5 ثوانٍ
    timeoutRef.current = setTimeout(() => {
      clearInterval(intervalRef.current);
      setIsSending(false);
      setIsSentFinal(true);
    }, 5000);
  };

  // زر التراجع الفوري: يلغي المؤقتين بأمان عبر المراجع
  const handleUndo = () => {
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    setIsSending(false);
    alert("تم التراجع عن إرسال البريد بنجاح! لم تخرج الرسالة من صندوقك.");
  };

  useEffect(() => {
    // تنظيف شامل عند خروج المستخدم من الصفحة
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">نظام التراجع عن الإرسال (Undo Timer)</h4>
        <span className="text-[10px] font-mono text-slate-400">Gmail-style Pattern</span>
      </div>

      {!isSending && !isSentFinal && (
        <button
          onClick={handleTriggerSend}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
        >
          إرسال البريد الإلكتروني العاجل ✉️
        </button>
      )}

      {isSending && (
        <div className="p-4 bg-slate-950 rounded-2xl border border-amber-500/40 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>سيتم الإرسال خلال: <strong className="font-mono text-amber-400">{countdown}s</strong></span>
          </div>
          <button
            onClick={handleUndo}
            className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg font-bold text-xs transition-all shadow-md"
          >
            تراجع فوري! ↩️
          </button>
        </div>
      )}

      {isSentFinal && (
        <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl text-emerald-400 text-xs text-center font-bold">
          ✅ تم إرسال البريد إلى المستلم بنجاح تام!
        </div>
      )}
    </div>
  );
}`,
      output: "يستطيع المستخدم التراجع عن الإرسال في أي ثانية خلال فترة العد التنازلي؛ حيث يقوم زر التراجع بإلغاء المؤقت المحفوظ في intervalRef.current و timeoutRef.current فوراً وبأعلى موثوقية.",
      commonMistakes: [
        {
          mistake: "تخزين معرّف المؤقت في متغير let داخل المكون مثل: let timer; ثم محاولة مسحه في زر الإيقاف.",
          why: "في كل مرة يُعاد فيها رندر المكون، يُعاد إنشاء المتغير timer بالقيمة undefined، فيفقد زر الإيقاف معرف المؤقت القديم ويستحيل إيقافه!",
          fix: "احفظ معرف المؤقت دائماً في useRef: const timerRef = useRef(null)."
        }
      ],
      bestPractices: [
        "اضبط قيمة timerRef.current = null فور مسح المؤقت بـ clearInterval لتعرف لاحقاً ما إذا كان المؤقت قيد التشغيل أم متوقفاً."
      ],
      infographicCard: {
        type: "flow-timer-ref",
        title: "هندسة إدارة المؤقتات عبر useRef",
        steps: [
          "1. تعريف الحاوية: const timerRef = useRef(null)",
          "2. التفعيل في زر البدء: timerRef.current = setInterval(tick, 1000)",
          "3. الإيقاف في زر التوقف أو الـ Cleanup: clearInterval(timerRef.current)"
        ]
      }
    },
    {
      id: "7.3.g",
      title: "الفرق بين useRef وuseState",
      englishTerm: "useRef vs useState: Comprehensive Architectural Comparison",
      description: "المقارنة الهندسية الشاملة بين الأداة المخصصة للبيانات المرئية التفاعلية (useState) والأداة المخصصة للبيانات الصامتة وعقد المتصفح (useRef). تلخص المقارنة متى تختار كل منهما وفق معايير: إطلاق الرندر، قابلية التعديل، والارتباط بـ DOM.",
      realLifeAnalogy: "مثل شاشة عرض التلفزيون (State) التي يراها كل من في الصالة وتتغير صورها باستمرار، مقابل الهارديسك الداخلي في جهاز الاستقبال (Ref) الذي يسجل البرامج في الخلفية بهدوء تام دون أن يلاحظ أحد.",
      whyItMatters: "يحميك من إجهاد التطبيق بالرندرات الزائدة أو إخفاء بيانات كان يجب أن تظهر للمستخدم فوراً.",
      syntax: "// useState: للبيانات المرئية (Re-render)\n// useRef: للبيانات الصامتة وعقد DOM (No Re-render)",
      simpleExample: `// مقارنة مباشرة بالرمز
import { useState, useRef } from "react";

function ComparisonDemo() {
  const [visualState, setVisualState] = useState(0); // يغير الشاشة
  const silentRef = useRef(0);                       // لا يغير الشاشة

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>مرئي في الشاشة (State): {visualState}</p>
      <button onClick={() => setVisualState(v => v + 1)} className="px-2 py-1 bg-indigo-600 rounded">
        تحديث State
      </button>
    </div>
  );
}`,
      advancedExample: `// جدول المقارنة المعمارية التفاعلي الكامل بين useState و useRef
export function RefVsStateMasterTable() {
  const matrix = [
    { criteria: "هل التحديث يطلق Re-render؟", state: "نعم، فوراً وبشكل تلقائي ✅", ref: "لا، صامت تماماً بلا أي رندر ❌" },
    { criteria: "طريقة تعديل القيمة", state: "دالة الـ Setter فقط (Immutably)", ref: "مباشرة في خاصية .current (Mutable)" },
    { criteria: "الاستخدام المثالي", state: "نصوص، قوائم، أزرار، بيانات معروضة", ref: "عقد DOM، معرفات المؤقتات، القيمة السابقة" },
    { criteria: "اللقطة الزمنية (Snapshot)", state: "ثابتة كلقطة في كل رندر", ref: "حية ومحدثة باستمرار في نفس الكائن" },
    { criteria: "القراءة أثناء مرحلة الرندر", state: "آمنة ومطلوبة لبناء JSX", ref: "محظورة تماماً وغير نقية ⚠️" }
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-white p-5 max-w-lg mx-auto">
      <h4 className="font-bold text-sm text-indigo-400 mb-3">المقارنة المعمارية الفاصلة: useState مقابل useRef</h4>
      
      <table className="w-full text-right text-xs">
        <thead className="bg-slate-950/60 text-slate-400">
          <tr>
            <th className="p-2.5">المعيار</th>
            <th className="p-2.5 text-emerald-400">حالة useState</th>
            <th className="p-2.5 text-amber-400">مرجع useRef</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {matrix.map((row, i) => (
            <tr key={i} className="hover:bg-slate-800/40">
              <td className="p-2.5 font-bold text-slate-300">{row.criteria}</td>
              <td className="p-2.5 text-slate-200">{row.state}</td>
              <td className="p-2.5 text-slate-300">{row.ref}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
      output: "يقدم المكون مرجعاً هندسياً حاسماً لاختيار الأداة المناسبة لكل نوع بيانات في تطبيقك.",
      commonMistakes: [
        {
          mistake: "استبدال useState بـ useRef لتسريع التطبيق وحفظ المدخلات دون إعادة تصيير.",
          why: "هذا يعيدك إلى عالم البرمجة التفاعلية القديمة (Imperative) ويفقدك قوة وميزات React في العرض الشرطي والمزامنة.",
          fix: "التزم بـ useState لكافة البيانات التي تؤثر على ما يراه المستخدم في الشاشة."
        }
      ],
      bestPractices: [
        "استخدم useState عندما ترغب في أن يرى المستخدم التغيير فوراً على الشاشة.",
        "استخدم useRef عندما ترغب في أن يتذكر المكون معلومة تشغيلية في الخلفية دون أن يراها المستخدم."
      ],
      infographicCard: {
        type: "versus-cards",
        title: "متى تختار useState ومتى تختار useRef؟",
        left: { title: "useState", detail: "بيانات مرئية في واجهة المستخدم (تطلق رندراً فورياً)" },
        right: { title: "useRef", detail: "عقد DOM وبيانات تشغيلية صامتة (لا تطلق أي رندر)" }
      }
    },
    {
      id: "7.3.h",
      title: "التعامل مع قيود قراءة Ref أثناء Render",
      englishTerm: "Don't Read or Write ref.current during Render Phase",
      description: "القاعدة الصارمة التي تفرضها فلسفة React على استخدام المراجع: 'لا تقرأ ولا تكتب خاصية ref.current أثناء مرحلة التصيير المباشرة (Render Phase) داخل جسم دالة المكون'. مرحلة الرندر يجب أن تظل دالة نقية تماماً (Pure Function) تعتمد فقط على Props و State. يُسمح بقراءة وتعديل ref.current حصراً داخل: 1) معالجات الأحداث (Event Handlers)، 2) داخل خطافات التأثيرات الجانبية (useEffect أو useLayoutEffect).",
      realLifeAnalogy: "مثل قواعد السلامة في غرفة العمليات الجراحية؛ لا يجوز للطبيب أن يفتح هاتفه المحمول ويكتب رسائل شخصية أثناء إجراء العملية الجراحية الدقيقة للمريض (مرحلة الرندر)، بل يؤجل مراجعة الهاتف إلى غرفة الاستراحة بعد انتهاء العملية بالكامل (معالجات الأحداث و useEffect).",
      whyItMatters: "انتهاك هذه القاعدة يجعل المكون غير متوقع وسلوكه مشوهاً في أوضاع React الحديثة مثل التصيير المتزامن (Concurrent Rendering)؛ حيث قد تعيد React حساب الرندر عدة مرات قبل عرضه، مما يفسد حسابات الـ Ref.",
      syntax: "// ❌ خطأ ممنوع: تعديل أو قراءة في الرندر المباشر\nfunction Bad() {\n  myRef.current = 100; // انتهاك للنقاء!\n  return <div>{myRef.current}</div>; // قراءة غير موثوقة في الرندر!\n}\n\n// ✅ سليم: القراءة والتعديل في المعالجات أو التأثيرات\nuseEffect(() => {\n  console.log(myRef.current);\n}, []);",
      simpleExample: `// مثال يوضح المكان الممنوع والمكان المسموح
import { useRef, useEffect } from "react";

function RefRenderRulesDemo() {
  const countRef = useRef(0);

  // ❌ ممنوع: countRef.current += 1; هنا في جسم الدالة مباشرة!

  // ✅ سليم: التعديل داخل useEffect
  useEffect(() => {
    countRef.current += 1;
    console.log("تم التعديل بأمان داخل useEffect:", countRef.current);
  });

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs">
      قاعدة نقاء الرندر مطبقة بنجاح بنسبة 100%.
    </div>
  );
}`,
      advancedExample: `// استعراض حي لتحذيرات React Compiler ومبادئ النقاء البرمجي
export function RefPurityConsultant() {
  const scenarios = [
    {
      action: "تعديل ref.current في جسم الدالة مباشرة",
      verdict: "ممنوع قطعاً ❌",
      reason: "يكسر نقاء دالة المكون ويجعل ناتج الرندر غير مستقر في Concurrent Mode."
    },
    {
      action: "قراءة ref.current لعرضه مباشرة في JSX",
      verdict: "غير موصى به ⚠️",
      reason: "إذا تغير المرجع فلن تُحدث React الشاشة، وسيظهر نص قديم مضلل للمستخدم."
    },
    {
      action: "القراءة والتعديل داخل onClick أو onSubmit",
      verdict: "مسموح وممتاز ✅",
      reason: "معالجات الأحداث لا تؤثر على نقاء الرندر وتعمل استجابة لفعل حقيقي."
    },
    {
      action: "القراءة والتعديل داخل useEffect",
      verdict: "مسموح وممتاز ✅",
      reason: "تُنفذ بعد اكتمال مرحلة Commit وتحديث DOM بالكامل بأمان تام."
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">قواعد أمان قراءة وتعديل ref.current</h4>
      
      <div className="space-y-2.5">
        {scenarios.map((sc, i) => (
          <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-200">{sc.action}</span>
              <span className="text-[10px] font-bold">{sc.verdict}</span>
            </div>
            <p className="text-[11px] text-slate-400">{sc.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يقدم المكون توجيهاً صارماً يؤكد على أن useRef هو أداة جانبية لا يجوز إقحامها في حسابات شجرة JSX المباشرة للحفاظ على نقاء المكونات.",
      commonMistakes: [
        {
          mistake: "محاولة حساب عداد الرندرات بزيادة myRef.current += 1 في سطر return مباشرة.",
          why: "هذا تعديل مباشر للذاكرة في مرحلة الرندر؛ في Strict Mode أو React 19 قد يُلغى الرندر ويعاد حسابه، فيقفز العداد مرتين بالخطأ!",
          fix: "ضع الزيادة دائماً داخل useEffect: useEffect(() => { renderCountRef.current += 1; });."
        }
      ],
      bestPractices: [
        "القاعدة الذهبية: عامل ref.current كأنه خط أحمر لا تلمسه أثناء الرندر؛ تعامل معه فقط في Event Handlers أو في useEffect.",
        "إذا كنت مضطراً لعرض القيمة في JSX، فهذا دليل قاطع على أنك بحاجة لـ useState وليس useRef."
      ],
      infographicCard: {
        type: "traffic-light",
        title: "إشارة المرور لـ ref.current",
        lights: [
          { color: "أحمر 🛑", desc: "ممنوع: داخل جسم دالة المكون أثناء مرحلة Render" },
          { color: "أصفر ⚠️", desc: "تحذير: القراءة المباشرة داخل وسوم JSX المعروضة" },
          { color: "أخضر 🟢", desc: "مسموح: داخل معالجات الأحداث (onClick) والتأثيرات (useEffect)" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q7-3-1",
      question: "ما الفرق الأساسي بين تعديل حالة useState وتعديل خاصية ref.current في useRef؟",
      options: [
        "تعديل useState بطيء وتعديل useRef سريع جداً",
        "تعديل useState يجدول إعادة تصيير فورية للمكون (Re-render)، بينما تعديل ref.current صامت تماماً ولا يطلق أي رندر على الإطلاق",
        "تعديل useRef يؤدي لحذف المكون من شجرة المتصفح",
        "لا يوجد فرق حقيقي بينهما كلاهما يعيد رسم الشاشة بنفس الطريقة"
      ],
      correctAnswer: 1,
      explanation: "الفرق الجوهري هو أن تعديل الـ State يطلب من React إعادة رسم الشاشة (Re-render)، بينما تعديل ref.current يغير القيمة في الذاكرة بهدوء دون إزعاج الواجهة أو إعادة تشغيل دالة المكون."
    },
    {
      id: "q7-3-2",
      question: "كيف تصل لعقدة الـ DOM الحقيقية لحقل إدخال في React للتركيز عليه بـ .focus()؟",
      options: [
        "باستخدام document.getElementById('my-input').focus()",
        "بإنشاء مرجع const inputRef = useRef(null) وتمريره للوسم <input ref={inputRef} /> ثم استدعاء inputRef.current.focus()",
        "بكتابة كلمة autoFocus في كل مكونات الصفحة",
        "باستخدام دالة window.focusAllInputs()"
      ],
      correctAnswer: 1,
      explanation: "الأسلوب القياسي والنظيف في React هو ربط المرجع بالوسم عبر خاصية ref={inputRef}؛ ثم الوصول للدالة القياسية في المتصفح عبر inputRef.current.focus() بأمان."
    },
    {
      id: "q7-3-3",
      question: "أين يُسمح بقراءة وتعديل خاصية ref.current بأمان وفق قواعد نقاء React؟",
      options: [
        "في جسم دالة المكون مباشرة أثناء مرحلة Render",
        "داخل معالجات الأحداث (Event Handlers) وداخل خطافات التأثيرات (useEffect)",
        "في ملفات CSS الخارجية فقط",
        "يُحظر تعديل ref.current نهائياً بعد إنشائها"
      ],
      correctAnswer: 1,
      explanation: "مرحلة الرندر يجب أن تظل دالة نقية؛ لذا يحظر قراءة أو تعديل ref.current أثناء الرندر المباشر، ويُسمح بها حصراً داخل معالجات الأحداث والتأثيرات الجانبية."
    }
  ],
  exercise: {
    id: "ex7-3",
    title: "بناء مسجل ملاحظات صوتي وسريع مع التركيز التلقائي ومؤقت آمن بـ useRef",
    description: "المطلوب بناء مكون تفاعلي باسم QuickVoiceMemoStudio يجمع كافة استخدامات useRef: 1) زر 'تدوين ملاحظة جديدة' يقوم بفتح حقل الكتابة والتركيز عليه فوراً عبر inputRef.current.focus()، 2) مؤقت زمني يسجل مدة التدوين مع الاحتفاظ بمعرف المؤقت في timerRef دون فقدانه عبر الرندرات، 3) تتبع القيمة السابقة لعدد الملاحظات المحفوظة عبر prevCountRef، مع إمكانية التمرير التلقائي لآخر ملاحظة في القائمة عبر scrollIntoView.",
    starterCode: `export function QuickVoiceMemoStudio() {
  // اكتب كود المراجع والملاحظات هنا
  return (
    <div>
      {/* صمم الاستوديو */}
    </div>
  );
}`,
    hints: [
      "عرف inputRef = useRef(null) للتركيز التلقائي على الحقل.",
      "عرف timerRef = useRef(null) لحفظ معرّف setInterval عند بدء التسجيل.",
      "عرف bottomRef = useRef(null) للتمرير التلقائي scrollIntoView عند إضافة ملاحظة جديدة.",
      "استخدم useEffect لتحديث prevCountRef.current بعدد الملاحظات السابقة."
    ],
    solution: `import { useState, useRef, useEffect } from "react";

export function QuickVoiceMemoStudio() {
  const [memos, setMemos] = useState([
    { id: "m-1", text: "مراجعة قواعد الخطافات في React 19", time: "10:30 ص" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordDuration, setRecordDuration] = useState(0);

  // 1. مرجع للتركيز التلقائي على حقل الإدخال
  const inputRef = useRef(null);

  // 2. مرجع لحفظ معرف المؤقت الزمني بأمان دون رندرات
  const timerRef = useRef(null);

  // 3. مرجع للتمرير التلقائي لأسفل القائمة
  const listBottomRef = useRef(null);

  // 4. مرجع لتتبع القيمة السابقة لعدد الملاحظات
  const prevCountRef = useRef(memos.length);

  useEffect(() => {
    prevCountRef.current = memos.length;
    listBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [memos]);

  // بدء وإيقاف مؤقت التسجيل الصامت
  const toggleRecording = () => {
    if (isRecording) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsRecording(false);
    } else {
      setRecordDuration(0);
      setIsRecording(true);
      timerRef.current = setInterval(() => {
        setRecordDuration((prev) => prev + 1);
      }, 1000);
    }
  };

  // التركيز التلقائي على الحقل
  const handleFocusClick = () => {
    inputRef.current?.focus();
  };

  const handleAddMemo = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMemos((prev) => [
      ...prev,
      { id: \`m-\${Date.now()}\`, text: inputText, time: new Date().toLocaleTimeString() }
    ]);
    setInputText("");
    inputRef.current?.focus();
  };

  // تنظيف المؤقت عند إغلاق المكون
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-5 max-w-md mx-auto font-sans shadow-2xl">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-black text-slate-100">استوديو الملاحظات السريعة</h3>
          <p className="text-[11px] text-slate-400">تطبيق عملي متكامل لكافة وظائف useRef الهندسية</p>
        </div>
        <button
          onClick={handleFocusClick}
          className="text-xs px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all shadow-md shadow-indigo-900/40"
        >
          تركيز الحقل 🎯
        </button>
      </div>

      {/* شريط المؤقت المسجل بالمرجع */}
      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center text-xs">
        <div className="flex items-center gap-2">
          <span className={\`w-2.5 h-2.5 rounded-full \${isRecording ? "bg-rose-500 animate-ping" : "bg-slate-600"}\`}></span>
          <span className="font-mono">مدة التسجيل: {recordDuration} ثانية</span>
        </div>
        <button
          onClick={toggleRecording}
          className={\`px-3 py-1 rounded-lg font-bold text-xs transition-colors \${
            isRecording ? "bg-rose-600 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }\`}
        >
          {isRecording ? "إيقاف المؤقت ⏹️" : "بدء مؤقت الصوت 🎙️"}
        </button>
      </div>

      {/* قائمة الملاحظات ذات التمرير التلقائي scrollIntoView */}
      <div className="h-40 overflow-y-auto space-y-2 p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs">
        {memos.map((m) => (
          <div key={m.id} className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
            <span className="text-slate-200">{m.text}</span>
            <span className="text-[10px] font-mono text-slate-500">{m.time}</span>
          </div>
        ))}
        <div ref={listBottomRef} />
      </div>

      <div className="flex justify-between text-[11px] font-mono text-slate-400 px-1">
        <span>العدد الحالي: {memos.length}</span>
        <span>العدد السابق (useRef): {prevCountRef.current}</span>
      </div>

      {/* نموذج الإدخال مربوط بـ inputRef */}
      <form onSubmit={handleAddMemo} className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="اكتب ملاحظة جديدة واضغط Enter..."
          className="flex-1 p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-emerald-900/40"
        >
          إضافة
        </button>
      </form>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان useRef والوصول للـ DOM",
    description: "الدليل المرئي الشامل للمراجع، السيطرة على المتصفح، والذاكرة الصامتة.",
    sections: [
      {
        heading: "1. الوصول لعقد DOM الحقيقية",
        bullets: [
          "التركيز الآلي: inputRef.current.focus() لتوجيه المؤشر بنعومة.",
          "التمرير التلقائي: elementRef.current.scrollIntoView() للمحادثات.",
          "القياسات الفيزيائية: getBoundingClientRect() لحساب الأبعاد والموضع."
        ]
      },
      {
        heading: "2. الصندوق السري الصامت (Silent Box)",
        bullets: [
          "تعديل بلا رندر: myRef.current = val لا يزعج شجرة العناصر.",
          "حفظ المؤقتات: timerRef.current لحفظ معرف setInterval بين الأزرار.",
          "تتبع التاريخ: prevValRef.current لمعرفة القيمة في الرندر السابق."
        ]
      },
      {
        heading: "3. قواعد النقاء الصارمة (Purity Rules)",
        bullets: [
          "ممنوع في الرندر: لا تقرأ ولا تعدل ref.current داخل جسم الدالة مباشرة.",
          "المكان المعتمد: فقط داخل معالجات الأحداث (onClick) أو داخل useEffect."
        ]
      }
    ]
  }
};
