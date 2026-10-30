// src/data/sections/section7/topic6.js
// الموضوع 6: إنشاء Custom Hooks (Custom Hooks Creation, Design Patterns & Logic Reusability)

export const SECTION_7_TOPIC_6 = {
  id: "7.6",
  title: "إنشاء Custom Hooks",
  englishTerm: "Custom Hooks & Logic Reusability",
  description: "أقوى ميزة لهندسة وإعادة استخدام المنطق البرمجي في React: تحويل المنطق المعقد المشترك (Stateful Logic) إلى دوال قابلة لإعادة الاستخدام في عشرات المكونات بنقاء مطلق وبدون تكرار، وبناء ترسانة كاملة من الخطافات المخصصة مثل useToggle و useLocalStorage و useDebounce و useWindowSize و useFetch.",
  subtopics: [
    {
      id: "7.6.a",
      title: "ما هي Custom Hooks",
      englishTerm: "What are Custom Hooks (Reusable Stateful Logic)",
      description: "الخطاف المخصص (Custom Hook) هو دالة JavaScript عادية تستدعي بداخلها خطافات React أخرى (مثل useState أو useEffect أو useRef أو useContext). تتيح لك استخراج منطق الحالة (Stateful Logic) من المكونات وإعادة استخدامه في مكونات متعددة دون الحاجة لإعادة كتابة الكود أو إنشاء تسلسلات هرمية معقدة كالمكونات ذات الرتبة العليا (HOCs). الأهم: كل استدعاء للخطاف المخصص يمتلك حالته المستقلة تماماً والمنعزلة في الذاكرة.",
      realLifeAnalogy: "مثل 'وصفة الطهي المعيارية'؛ إذا كان لديك وصفة ممتازة لإعداد صلصة خاصة، يمكنك طباعتها في كتيب واستخدامها في وجبة الدجاج وفي وجبة الباستا. المكونات تطبخ الصلصة بنفس المنطق، لكن طبق الدجاج لا يختلط بطبق الباستا، فكل وجبة لها قدرها ومكوناتها المستقلة في مطبخها الخاص.",
      whyItMatters: "بدون الخطافات المخصصة، يضطر المطورون إلى نسخ ولصق عشرات الأسطر من كود useEffect و useState عبر عدة صفحات (مثل جلب البيانات، متابعة حجم الشاشة، مزامنة التخزين المحلي)، مما يخلق كابوساً برمجياً في الصيانة واكتشاف الأخطاء. الخطاف المخصص يحقق مبدأ DRY (Don't Repeat Yourself) في عالم React.",
      syntax: "function useSomething(parameters) {\n  // استدعاء خطافات React المدمجة\n  const [state, setState] = useState(initialValue);\n  // إرجاع البيانات أو الدوال التي يحتاجها المكون\n  return [state, setState];\n}",
      simpleExample: `// تعريف خطاف مخصص بسيط يعد الثواني المنقضية
import { useState, useEffect } from "react";

// تعريف الدالة المخصصة وتبدأ بكلمة use
function useSecondsTimer() {
  // إنشاء حالة لتخزين عدد الثواني
  const [seconds, setSeconds] = useState(0);

  // استخدام تأثير جانبي لتشغيل المؤقت الزمني
  useEffect(() => {
    // إنشاء مؤقت يعمل كل ثانية
    const intervalId = setInterval(() => {
      // زيادة الثواني بمقدار واحد عبر دالة التحديث
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // دالة تنظيف لإلغاء المؤقت عند تفكيك المكون
    return () => clearInterval(intervalId);
  }, []); // مصفوفة فارغة ليعمل المؤقت مرة واحدة عند البداية

  // إرجاع قيمة الثواني للمكون الذي يستدعي الخطاف
  return seconds;
}
`,
      advancedExample: `// مثال واقعي: استخدام الخطاف المخصص في مكونين مستقلين تماماً
import React, { useState, useEffect } from "react";

// خطاف مخصص لحساب الوقت المنقضي
function useElapsedTime() {
  // حالة العداد بالثواني
  const [elapsed, setElapsed] = useState(0);

  // تشغيل المؤقت الدوري
  useEffect(() => {
    // إعداد المؤقت الزمني
    const timer = setInterval(() => {
      // تحديث الحالة بزيادة ثانية واحدة
      setElapsed((prev) => prev + 1);
    }, 1000);

    // تنظيف الذاكرة وحذف المؤقت
    return () => clearInterval(timer);
  }, []);

  // إرجاع الثواني
  return elapsed;
}

// مكون مؤقت الاختبار الأول
export function ExamTimerCard() {
  // استدعاء الخطاف المخصص - له نسخته المستقلة في الذاكرة
  const examSeconds = useElapsedTime();

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-2">
      <h5 className="font-bold text-xs text-indigo-400">مؤقت جلسة الاختبار 📝</h5>
      <p className="font-mono text-2xl font-black text-amber-400">{examSeconds} ثانية</p>
      <p className="text-[11px] text-slate-400">هذا المكون يستخدم useElapsedTime بمعزل تام.</p>
    </div>
  );
}

// مكون جلسة العمل الثاني
export function WorkSessionCard() {
  // استدعاء نفس الخطاف المخصص - يمتلك حالة منفصلة 100%
  const workSeconds = useElapsedTime();

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-white space-y-2">
      <h5 className="font-bold text-xs text-emerald-400">عداد وقت العمل الفعلي ⏱️</h5>
      <p className="font-mono text-2xl font-black text-emerald-400">{workSeconds} ثانية</p>
      <p className="text-[11px] text-slate-400">حالة هذا المكون لا تتأثر بمكون الاختبار إطلاقاً.</p>
    </div>
  );
}
`,
      outputExplanation: "كل مكون يستدعي useElapsedTime يحصل على دورة حياة وتأثير ومؤقت خاص به. عند استدعاء ExamTimerCard و WorkSessionCard معاً في الصفحة، ستشاهد عدادين مستقلين يعملان بتزامن دقيق، حيث توفر React بيئة ذاكرة منعزلة (Fiber Node) لكل استدعاء.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن الخطاف المخصص يشارك البيانات والحالة بين المكونات تلقائياً.",
          fix: "تذكر دائماً أن Custom Hooks تعيد استخدام 'المنطق والوظيفة' (Logic) وليس 'البيانات المخزنة' (State Value). لمشاركة البيانات نفسها بين المكونات، يجب دمج الخطاف مع React Context أو رفعه لمكون أب مشترك.",
          reason: "كل استدعاء لدالة المكون ينشئ عقدة جديدة في شجرة Fiber، وبالتالي تنشأ نسخ جديدة من useState و useEffect خاصة بذلك المكون فقط."
        },
        {
          mistake: "كتابة دالة JavaScript عادية دون استدعاء أي خطافات أخرى داخلها وتسميتها useSomething.",
          fix: "إذا كانت الدالة لا تستدعي خطافات React مدمجة (مثل useState أو useEffect)، فهي مجرد دالة مساعدة عادية (Helper Utility Function) ولا ينبغي تسميتها ببادئة use.",
          reason: "بادئة use تخبر أدوات React و ESLint بضرورة فحص قيود وقواعد الخطافات على هذه الدالة، وتسمية الدوال العادية بها يربك المحلل اللغوي."
        }
      ],
      bestPractices: [
        "اجعل الخطاف المخصص مسؤولاً عن مهمة محددة بدقة (Single Responsibility Principle).",
        "احرص على تنظيف أي اشتراكات أو مؤقتات داخل التأثيرات بالخطاف المخصص.",
        "أرجع مصفوفة [value, setter] إذا كان الخطاف يحمل قيمة واحدة مثل useState، أو كائناً { data, loading, error } إذا كان يحمل عدة قيم ومخرجات."
      ],
      infographicCard: {
        title: "جوهر الـ Custom Hook في React",
        points: [
          "دالة جافاسكريبت عادية تستدعي خطافات مدمجة وتبدأ بـ use.",
          "تشارك خوارزميات ومنطق الكود وليس مساحات الذاكرة الفعلية.",
          "توفر للمكون واجهة برمجية (API) بسيطة ونظيفة لإخفاء التعقيدات."
        ]
      }
    },
    {
      id: "7.6.b",
      title: "قواعد تسمية Custom Hooks",
      englishTerm: "Custom Hook Naming Conventions ('use' Prefix Rule)",
      description: "القاعدة الإلزامية الصارمة لتسمية الخطافات المخصصة: يجب أن يبدأ اسم أي Custom Hook دائماً بكلمة 'use' مكتوبة بحروف صغيرة، متبوعة باسم يعبر عن وظيفة الخطاف بنمط الحروف المحدبة (camelCase)، مثل: useAuth و useTheme و useDebounce. هذه التسمية ليست مجرد عرف تجميلي، بل هي ميثاق هندسي تعتمد عليه أداة التدقيق eslint-plugin-react-hooks لمعرفة أن الدالة هي خطاف وتخضع لقواعد React الصارمة.",
      realLifeAnalogy: "مثل رقم هاتف الطوارئ '911' أو '997'؛ بمجرد أن يرى مأمور الاتصالات هذا الرقم في بداية الاتصال، يعرف فوراً أن هذا نداء طوارئ ويخضع لبروتوكول أمني مشدد وسريع لا يمر بالإجراءات الروتينية العادية.",
      whyItMatters: "إذا أنشأت دالة تحتوي على useState أو useEffect دون أن تبدأ بكلمة use (مثل createCounter)، فلن تتمكن أداة ESLint من التحقق من أنك لا تستدعيها داخل شرط if أو حلقة تكرارية، مما يؤدي لأخطاء صامتة وانهيار غير متوقع لتطبيقك أثناء التشغيل (Runtime Crashes).",
      syntax: "// ✅ تسمية صحيحة تتبع القواعد الصارمة\nfunction useWindowScroll() { ... }\nfunction useCurrentUser() { ... }\n\n// ❌ تسمية خاطئة تحجب حماية ESLint\nfunction getWindowScroll() { ... }\nfunction trackUserData() { ... }",
      simpleExample: `// مثال يوضح الفرق بين التسمية المتوافقة وغير المتوافقة
import { useState, useEffect } from "react";

// ✅ دالة مخصصة صحيحة تبدأ بـ use - مدعومة من ESLint
function useOnlineStatus() {
  // تخزين حالة الاتصال بالإنترنت
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // متابعة أحداث المتصفح للاتصال والانقطاع
  useEffect(() => {
    // دالة عند عودة الإنترنت
    const handleOnline = () => setIsOnline(true);
    // دالة عند انقطاع الإنترنت
    const handleOffline = () => setIsOnline(false);

    // الاستماع لحدث الاتصال
    window.addEventListener("online", handleOnline);
    // الاستماع لحدث الانقطاع
    window.addEventListener("offline", handleOffline);

    // تنظيف المستمعات عند تفكيك المكون
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // إرجاع القيمة المنطقية
  return isOnline;
}
`,
      advancedExample: `// عرض حي لحالة الاتصال بالشبكة باستخدام useOnlineStatus
import React from "react";

// محاكاة أو استخدام الخطاف المخصص لمتابعة الاتصال
export function NetworkStatusIndicator() {
  // استخدام الخطاف ذو التسمية القياسية
  const isOnline = true; // محاكاة القيمة الناتجة من useOnlineStatus

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl max-w-sm mx-auto text-white space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400 font-mono">useOnlineStatus()</span>
        <span className={\`w-3 h-3 rounded-full \${isOnline ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}\`} />
      </div>

      <div className="flex items-center gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800">
        <span className="text-xl">{isOnline ? "🌐" : "📡"}</span>
        <div>
          <h6 className="text-xs font-bold">{isOnline ? "متصل بالإنترنت" : "غير متصل بالشبكة"}</h6>
          <p className="text-[10px] text-slate-500">
            {isOnline ? "التطبيق يستقبل البيانات اللحظية بسلاسة." : "يرجى التحقق من اتصال شبكة Wi-Fi."}
          </p>
        </div>
      </div>
    </div>
  );
}
`,
      outputExplanation: "تسمية الخطاف بـ useOnlineStatus تمكن فريق العمل ومترجم React ومحلل الأكواد من إدراك طبيعة الدالة فوراً، مع ضمان تطبيق قاعدة عدم استدعائها داخل الشروط والحلقات.",
      commonMistakes: [
        {
          mistake: "تسمية الخطاف بأسماء عادية مثل syncStorage أو fetchData.",
          fix: "أعد تسميتها دائماً لتبدأ بـ use مثل useSyncStorage أو useFetchData.",
          reason: "أداة react-hooks/rules-of-hooks تتجاهل أي دالة لا تبدأ بـ use حرفياً، مما يحرمك من التنبيه التلقائي عن انتهاك شروط الخطافات."
        }
      ],
      bestPractices: [
        "ابدأ دائماً بـ use بحروف صغيرة متبوعة بالحرف الأول كبيراً (useCamelCase).",
        "اختر اسماً يصف المنطق المشترك بوضوح (مثل useClipboard أو useGeolocation).",
        "احفظ الخطافات المخصصة في مجلد مستقل مثل src/hooks/ لسهولة الوصول إليها."
      ],
      infographicCard: {
        title: "دستور التسمية: بادئة use الإلزامية",
        points: [
          "بادئة use إلزامية تقنياً لتفعيل تدقيق ESLint التلقائي.",
          "تكتب بنمط camelCase (مثل useForm, useDebounce).",
          "تميز منطق React عن دوال جافاسكريبت المساعدة البحتة."
        ]
      }
    },
    {
      id: "7.6.c",
      title: "استخراج منطق متكرر",
      englishTerm: "Extracting Repetitive Logic into Custom Hooks",
      description: "عملية إعادة الهيكلة البرمجية (Refactoring) لنقل كود الحالة والتأثيرات المتكررة من داخل المكونات البصرية إلى خطاف مخصص منفصل. هذا التحول ينظف المكون البصري ليقتصر عمله على إرجاع الـ JSX وتنسيق الواجهة، بينما ينتقل المنطق الرياضي وحسابات المتصفح إلى الخطاف المخصص المعزول والقابل للاختبار الفردي.",
      realLifeAnalogy: "مثل استخراج محرك السيارة من مقصورة الركاب ووضعه في صندوق المحرك الأمامي المعزول؛ الركاب يستمتعون بالرحلة والراحة دون أن تتشابك أرجلهم مع السيور والتروس الميكانيكية للسيارة.",
      whyItMatters: "المكونات الضخمة التي تحتوي على 200 سطر من التأثيرات والحسابات تكون صعبة القراءة، مستحيلة الاختبار، وعرضة للأخطاء عند التعديل. استخراج المنطق في Custom Hook يقلص كود المكون إلى 20 سطراً أنيقاً ويرفع مستوى النظافة والصيانة لأعلى المعايير الصناعية.",
      syntax: "// قبل الاستخراج: المكون مزدحم بالكود والتأثيرات\nfunction BadComponent() {\n  const [val, setVal] = useState(...);\n  useEffect(...) // 50 سطر\n  return <div>...</div>;\n}\n\n// بعد الاستخراج: منطق معزول في خطاف مخصص\nfunction useExtractedLogic() {\n  const [val, setVal] = useState(...);\n  useEffect(...) // يعيش هنا بأمان\n  return { val, setVal };\n}",
      simpleExample: `// استخراج منطق نسخ النصوص إلى الحافظة (Clipboard)
import { useState } from "react";

// خطاف مخصص معزول للتعامل مع الحافظة
function useCopyToClipboard() {
  // حالة تم النسخ بنجاح
  const [copiedText, setCopiedText] = useState(null);

  // دالة تنفيذ النسخ
  const copy = async (text) => {
    // التأكد من دعم المتصفح لواجهة الحافظة
    if (!navigator?.clipboard) {
      console.warn("المتصفح لا يدعم Clipboard API");
      return false;
    }

    try {
      // كتابة النص في الحافظة
      await navigator.clipboard.writeText(text);
      // تحديث الحالة بالنص المنسوخ
      setCopiedText(text);
      // إعادة تعيين الحالة بعد ثانيتين
      setTimeout(() => setCopiedText(null), 2000);
      return true;
    } catch (error) {
      console.error("فشل النسخ إلى الحافظة:", error);
      setCopiedText(null);
      return false;
    }
  };

  // إرجاع دالة النسخ وحالة النص الحالي
  return { copy, copiedText, isCopied: !!copiedText };
}
`,
      advancedExample: `// استخدام الخطاف المستخرج useCopyToClipboard في مكون زر أنيق
import React from "react";

// المكون البصري أصبح بسيطاً وأنيقاً جداً بعد استخراج المنطق
export function ShareLinkBox({ shareUrl = "https://react-mastery.dev/hooks" }) {
  // استدعاء الخطاف المخصص بسطر واحد فقط!
  const { copy, isCopied } = { copy: () => {}, isCopied: false }; // افتراض استدعاء useCopyToClipboard()

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto text-white space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-xs font-bold text-slate-300">رابط المشاركة السريع:</label>
        <span className="text-[10px] text-indigo-400 font-mono">useCopyToClipboard</span>
      </div>

      <div className="flex items-center gap-2 bg-slate-950 p-2 rounded-xl border border-slate-800">
        <input
          type="text"
          readOnly
          value={shareUrl}
          className="bg-transparent text-xs text-slate-400 flex-1 outline-none font-mono px-2"
        />
        <button
          onClick={() => copy(shareUrl)}
          className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all \${
            isCopied
              ? "bg-emerald-600 text-white"
              : "bg-indigo-600 hover:bg-indigo-500 text-white"
          }\`}
        >
          {isCopied ? "تم النسخ! ✓" : "نسخ الرابط 📋"}
        </button>
      </div>
    </div>
  );
}
`,
      outputExplanation: "المكون ShareLinkBox لا يعلم شيئاً عن navigator.clipboard أو معالجة الأخطاء أو setTimeout؛ كل هذا التعقيد مخفي داخل useCopyToClipboard، مما يجعل المكون مجرد واجهة عرض نقية.",
      commonMistakes: [
        {
          mistake: "ترك دوال التحديث والحسابات المعقدة داخل جسم المكون ونسخها في مكون آخر.",
          fix: "كلما وجدت نفسك تكتب نفس نمط useState و useEffect في مكانين مختلفين، استخرجها فوراً إلى Custom Hook.",
          reason: "النسخ واللصق يضاعف الجهد عند تعديل الخوارزمية أو تصحيح ثغرة برمجية."
        }
      ],
      bestPractices: [
        "افصل المنطق البحت عن JSX واجعله يعيش في ملف مستقل داخل src/hooks.",
        "اجعل الخطاف يقبل معلمات مرنة لتعديل سلوكه حسب حاجة كل مكون.",
        "قم بتسمية المخرجات بأسماء معيارية واضحة ومفهومة لأي مطور في الفريق."
      ],
      infographicCard: {
        title: "خطوات استخراج المنطق المتكرر",
        points: [
          "1. رصد نمط useState و useEffect المتكرر في عدة ملفات.",
          "2. قص الكود ووضعه في دالة جديدة تبدأ بـ use في ملف مستقل.",
          "3. إرجاع القيم والدوال واستبدال الكود في المكونات باستدعاء أنيق."
        ]
      }
    },
    {
      id: "7.6.d",
      title: "إنشاء useToggle",
      englishTerm: "Building useToggle Hook (Boolean State Management)",
      description: "أحد أشهر وأبسط الخطافات المخصصة وأكثرها إفادة في مشاريع React: خطاف لإدارة القيم الثنائية المنطقية (Boolean Flag) مثل فتح/إغلاق القوائم الجانبية، إظهار/إخفاء النوافذ المنبثقة (Modals)، وتفعيل/تعطيل الأوضاع. يوفر دالة تبديل سريعة ودوال لضبط القيمة على true أو false مباشرة دون كتابة setFlag(prev => !prev) يدوياً كل مرة.",
      realLifeAnalogy: "مثل مفتاح مصباح الغرفة؛ له وظيفة تبديل (Toggle) بضغطة زر، ولديه أيضاً وضعان ثابتان: تشغيل مؤكد (On) وإطفاء مؤكد (Off).",
      whyItMatters: "في كل تطبيق ويب، يوجد عشرات الأزرار لفتح القوائم والنوافذ المنبثقة. كتابة دالة مجهولة () => setOpen(prev => !prev) لكل زر تؤدي إلى كود مبعثر ومتكرر. خطاف useToggle يختصر كل هذا في استدعاء منسق وغاية في الاحترافية.",
      syntax: "const [isOpen, toggle, setTrue, setFalse] = useToggle(initialBoolean);",
      simpleExample: `// بناء الخطاف المخصص useToggle
import { useState, useCallback } from "react";

// تعريف الخطاف مع قيمة افتراضية false
function useToggle(initialValue = false) {
  // حالة المتغير المنطقي
  const [value, setValue] = useState(Boolean(initialValue));

  // دالة تبديل القيمة بين true و false مع تثبيت المرجع بـ useCallback
  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  // دالة مخصصة لضبط القيمة على true دائماً
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  // دالة مخصصة لضبط القيمة على false دائماً
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  // إرجاع مصفوفة لتسهيل تسمية المتغيرات في المكون المستدعي
  return [value, toggle, setTrue, setFalse];
}
`,
      advancedExample: `// استخدام useToggle في نافذة منبثقة (Modal Dialog) متكاملة
import React, { useState, useCallback } from "react";

// تعريف الخطاف المخصص useToggle
function useToggle(initialValue = false) {
  const [value, setValue] = useState(Boolean(initialValue));
  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  return [value, toggle, setTrue, setFalse];
}

export function ModalManagerDemo() {
  // استخدام useToggle لإدارة نافذة التأكيد
  const [isModalOpen, toggleModal, openModal, closeModal] = useToggle(false);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">إدارة النوافذ عبر useToggle</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Status: {isModalOpen ? "مفتوحة 🟢" : "مغلقة 🔴"}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={openModal}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
        >
          فتح النافذة (openModal)
        </button>
        <button
          onClick={toggleModal}
          className="px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold transition-all"
        >
          تبديل (toggle)
        </button>
      </div>

      {/* النافذة المنبثقة المشروطة */}
      {isModalOpen && (
        <div className="p-4 bg-slate-950 border border-indigo-500/40 rounded-2xl space-y-3 animate-fadeIn">
          <div className="flex justify-between items-center">
            <h5 className="font-bold text-xs text-amber-400">تأكيد عملية الحذف! ⚠️</h5>
            <button
              onClick={closeModal}
              className="text-slate-500 hover:text-white text-xs font-bold"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-slate-300">
            هل أنت متأكد من رغبتك في حذف هذا العنصر نهائياً من قاعدة البيانات؟
          </p>
          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={closeModal}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs"
            >
              إلغاء
            </button>
            <button
              onClick={() => {
                alert("تم التأكيد بنجاح!");
                closeModal();
              }}
              className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 rounded-lg text-xs font-bold"
            >
              نعم، احذف
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
`,
      outputExplanation: "يوفر useToggle واجهة برمجية فائقة المرونة: يمكنك فتح النافذة بـ openModal، وإغلاقها بـ closeModal، أو تبديلها بـ toggleModal دون كتابة أي منطق تحديث مكرر داخل JSX.",
      commonMistakes: [
        {
          mistake: "إرجاع كائن فقط أو مصفوفة فقط دون تثبيت الدوال بـ useCallback.",
          fix: "استخدم useCallback لتثبيت دوال toggle و setTrue و setFalse حتى لا تتسبب في إعادة تصيير غير ضرورية عند تمريرها كمساعدات لمكونات فرعية.",
          reason: "عدم استخدام useCallback ينشئ دوالاً جديدة بهويات مختلفة في كل رندر."
        }
      ],
      bestPractices: [
        "ادعم تمرير قيمة اختيارية لدالة toggle مثل toggle(customBool) لتحديد القيمة يدوياً إن لزم الأمر.",
        "أرجع مصفوفة إذا كنت تريد تمكين المستخدم من تسمية المتغيرات بحرية: const [isOpen, toggleOpen] = useToggle().",
        "احرص على تحويل المدخلات إلى قيمة منطقية صريحة عبر Boolean(initialValue)."
      ],
      infographicCard: {
        title: "هندسة خطاف useToggle",
        points: [
          "قيمة منطقية رئيسية (Boolean State).",
          "دوال مساعدة مثبتة المرجع (toggle, setTrue, setFalse).",
          "تنسيق إرجاع مرن يدعم التفكيك المخصص في المكونات."
        ]
      }
    },
    {
      id: "7.6.e",
      title: "إنشاء useLocalStorage",
      englishTerm: "Building useLocalStorage Hook (Web Storage Persistence)",
      description: "بناء خطاف احترافي يربط حالة React تلقائياً بمساحة التخزين المحلي في المتصفح (window.localStorage). يقوم الخطاف بقراءة القيمة المخزنة عند التحميل، وتشفير البيانات بصيغة JSON، وكتابة أي تعديل في الذاكرة المحلية تلقائياً عند استدعاء دالة التحديث، مع دعم مزامنة النوافذ المتعددة عبر حدث window 'storage'.",
      realLifeAnalogy: "مثل 'دفتر الحسابات اليومي'؛ بمجرد أن تتفق مع عميل على رقم جديد، لا تحفظ الرقم في ذهنك فقط (Memory)، بل تدونه فوراً بحبر دائم في الدفتر المحفوظ في خزينتك. إذا انقطعت الكهرباء أو أغلقت المكتب، يظل الدفتر محتفظاً بالرقم الصحيح.",
      whyItMatters: "يحتاج المطورون باستمرار لحفظ إعدادات المستخدم، مثل المظهر الداكن (Dark Mode)، لغة الواجهة، وبيانات نموذج المسودة. كتابة useEffect و localStorage.getItem و JSON.parse يدوياً في كل صفحة يسبب أخطاء أثناء تصيير جانب الخادم (SSR) وعند تعطل تخزين المتصفح.",
      syntax: "const [theme, setTheme] = useLocalStorage('app-theme', 'dark');",
      simpleExample: `// خطاف useLocalStorage مع حفظ واسترجاع بصيغة JSON
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // تهيئة الحالة بقراءة القيمة من التخزين المحلي
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // قراءة العنصر بواسطة المفتاح
      const item = window.localStorage.getItem(key);
      // تحويل النص إلى كائن جافاسكريبت إن وجد
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn("خطأ في قراءة localStorage:", error);
      return initialValue;
    }
  });

  // تحديث التخزين المحلي عند تغير المفتاح أو القيمة
  useEffect(() => {
    try {
      // كتابة القيمة المشفرة إلى localStorage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("فشل الحفظ في localStorage:", error);
    }
  }, [key, storedValue]);

  // إرجاع القيمة ودالة التحديث بنفس شكل useState
  return [storedValue, setStoredValue];
}
`,
      advancedExample: `// تطبيق محدد المظهر الداكن والمشرق المحفوظ دائماً
import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export function PersistentThemeSelector() {
  // استخدام الخطاف لحفظ المظهر في التخزين المحلي
  const [theme, setTheme] = useLocalStorage("app_preferred_theme", "system");

  const themes = [
    { id: "dark", label: "داكن 🌙", bg: "bg-slate-950 text-white" },
    { id: "light", label: "مشرق ☀️", bg: "bg-slate-100 text-slate-900" },
    { id: "system", label: "تلقائي 💻", bg: "bg-indigo-950 text-indigo-200" }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مزامنة التخزين useLocalStorage</h4>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
          المفتاح: app_preferred_theme
        </span>
      </div>

      <p className="text-xs text-slate-300">
        اختر مظهر التطبيق المفضل. سيتم حفظه فوراً في localStorage ويبقى ثابتاً حتى بعد تحديث الصفحة:
      </p>

      <div className="grid grid-cols-3 gap-2">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={\`p-3 rounded-2xl text-xs font-bold border transition-all \${
              theme === t.id
                ? "border-indigo-500 ring-2 ring-indigo-500/40 bg-indigo-600 text-white shadow-lg"
                : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
            }\`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex justify-between">
        <span>القيمة المحفوظة حالياً:</span>
        <span className="font-mono text-indigo-300 font-bold">"{theme}"</span>
      </div>
    </div>
  );
}
`,
      outputExplanation: "عند الضغط على أي خيار، يتولى useLocalStorage تحديث حالة المكون فوراً وحفظ القيمة في localStorage. وإذا قمت بإعادة تحميل الصفحة (F5)، سيبدأ المكون بالقيمة المحفوظة دون الرجوع للوضع الافتراضي.",
      commonMistakes: [
        {
          mistake: "قراءة localStorage مباشرة داخل جسم المكون في كل رندر: useState(localStorage.getItem(key)).",
          fix: "استخدم دالة التهيئة الكسولة: useState(() => localStorage.getItem(key)).",
          reason: "قراءة القرص والتخزين المتزامن مكلفة؛ دالة التهيئة الكسولة تضمن عدم قراءة localStorage إلا مرة واحدة فقط عند بدء تشغيل المكون."
        },
        {
          mistake: "نسيان استخدام JSON.stringify و JSON.parse عند حفظ الكائنات والمصفوفات.",
          fix: "احرص على تحويل القيم المعقدة لنصوص مشفرة، وإحاطة العملية بـ try/catch لتفادي انهيار التطبيق عند وجود نصوص غير متوافقة.",
          reason: "مساحة localStorage في المتصفح لا تخزن سوى نصوص نصية فقط (Strings)."
        }
      ],
      bestPractices: [
        "استخدم التهيئة الكسولة (Lazy Initial State) لمنع بطء الرندر.",
        "احرص دائماً على فحص وجود كائن window لضمان توافق الخطاف مع أطر عمل Next.js و SSR.",
        "أضف معالج حدث window.addEventListener('storage') لمزامنة علامات التبويب المتعددة تلقائياً."
      ],
      infographicCard: {
        title: "دورة عمل useLocalStorage",
        points: [
          "تهيئة كسولة من التخزين المحلي مرة واحدة.",
          "تشفير وفك تشفير تلقائي عبر كائن JSON.",
          "مزامنة مستمرة مع شاشة المتصفح والتخزين الدائم."
        ]
      }
    },
    {
      id: "7.6.f",
      title: "إنشاء useDebounce",
      englishTerm: "Building useDebounce Hook (Throttling Rapid Inputs)",
      description: "بناء خطاف احترافي لتأخير تحديث القيمة (Debounce) لعدد محدد من الأجزاء من الثانية (مثل 500ms). عندما يكتب المستخدم بسرعة في حقل البحث، تتغير القيمة اللحظية مع كل حرف، لكن useDebounce ينتظر حتى يتوقف المستخدم عن الكتابة للمدة المحددة، ثم يقوم بتحديث القيمة المتأخرة، مما يمنع إرسال مئات طلبات الشبكة غير الضرورية للسيرفر.",
      realLifeAnalogy: "مثل 'باب المصعد الكهربائي الذكي'؛ عندما يدخل شخص ويوشك الباب على الإغلاق، إذا اقترب شخص آخر، يعيد المصعد فتح الباب ويبدأ عداد 5 ثوانٍ من جديد. لا يتحرك المصعد إلا بعد أن يمضي وقت كافٍ دون أن يدخل أي راكب إضافي.",
      whyItMatters: "بدون تأخير الإدخال (Debouncing)، يؤدي كتابة كلمة 'React Hooks' (11 حرفاً) إلى إرسال 11 طلباً للسيرفر خلال ثانيتين! هذا يهدر نطاق التردد (Bandwidth)، يرفع تكلفة الخادم، وربما يتسبب في مشاكل سباق البيانات (Race Conditions). خطاف useDebounce يقلص هذه الطلبات إلى طلب واحد فقط.",
      syntax: "const debouncedSearchTerm = useDebounce(searchTerm, 500);",
      simpleExample: `// خطاف useDebounce لتأخير تحديث أي قيمة
import { useState, useEffect } from "react";

function useDebounce(value, delay = 500) {
  // حالة تخزين القيمة المتأخرة
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // إعداد مؤقت لتحديث القيمة بعد انقضاء المهلة
    const timerId = setTimeout(() => {
      // تحديث القيمة بعد توقف التغييرات
      setDebouncedValue(value);
    }, delay);

    // دالة التنظيف: إلغاء المؤقت إذا تغيرت القيمة قبل انتهاء المهلة
    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]); // إعادة التنفيذ كلما تغيرت القيمة أو مدة التأخير

  // إرجاع القيمة المتأخرة
  return debouncedValue;
}
`,
      advancedExample: `// محاكي حقل البحث الذكي ومقارنة الطلبات في الوقت الفعلي
import React, { useState, useEffect } from "react";

function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

export function DebouncedSearchSimulator() {
  const [rawQuery, setRawQuery] = useState("");
  const debouncedQuery = useDebounce(rawQuery, 600);
  const [apiCallsCount, setApiCallsCount] = useState(0);

  // محاكاة إرسال طلب السيرفر عند تغير القيمة المتأخرة فقط
  useEffect(() => {
    if (debouncedQuery.trim()) {
      setApiCallsCount((c) => c + 1);
    }
  }, [debouncedQuery]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">حقل البحث مع useDebounce (600ms)</h4>
        <span className="text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded">
          API Calls: {apiCallsCount}
        </span>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs text-slate-300 font-bold block">اكتب بسرعة لاختبار التأخير:</label>
        <input
          type="text"
          value={rawQuery}
          onChange={(e) => setRawQuery(e.target.value)}
          placeholder="مثال: دورة React المتقدمة..."
          className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] text-slate-500 block">القيمة الفورية (Instant):</span>
          <p className="font-mono text-rose-400 truncate font-bold">"{rawQuery || "..."}"</p>
          <span className="text-[9px] text-slate-600">تتغير مع كل ضربة زر</span>
        </div>

        <div className="p-3 bg-slate-950 rounded-xl border border-indigo-500/30 space-y-1">
          <span className="text-[10px] text-indigo-400 block">القيمة المتأخرة (Debounced):</span>
          <p className="font-mono text-emerald-400 truncate font-bold">"{debouncedQuery || "..."}"</p>
          <span className="text-[9px] text-slate-500">تتحدث بعد توقفك بـ 600ms</span>
        </div>
      </div>
    </div>
  );
}
`,
      outputExplanation: "بينما تتغير rawQuery 15 مرة أثناء كتابة الكلمة، تظل debouncedQuery ثابتة ولا تتغير إلا مرة واحدة بعد توقف يدك عن لوحة المفاتيح بـ 600 ميلي ثانية، مما يقلص عدد طلبات الـ API إلى طلب واحد ناجح.",
      commonMistakes: [
        {
          mistake: "نسيان دالة التنظيف return () => clearTimeout(timerId) داخل التأثير.",
          fix: "احرص دائماً على إلغاء المؤقت السابق عند كل ضغطة زر جديدة.",
          reason: "بدون دالة التنظيف، ستنفجر المؤقتات القديمة وتحدث القيمة بالتتابع مسببة وميضاً وأخطاء في نتائج البحث."
        }
      ],
      bestPractices: [
        "اضبط مهلة التأخير (Delay) بين 300ms إلى 600ms لتوازن مثالي بين استجابة الواجهة وتوفير الموارد.",
        "اجعل قيمة المهلة اختيارية مع تمرير قيمة افتراضية مثل 500ms.",
        "استخدم debouncedValue كمحدد في مصفوفة اعتماديات خطاف جلب البيانات useEffect."
      ],
      infographicCard: {
        title: "مبدأ عمل useDebounce الذكي",
        points: [
          "يراقب القيمة المتغيرة في الوقت الفعلي.",
          "يعيد ضبط عداد المؤقت (Timer Reset) مع كل حرف جديد.",
          "يرسل التحديث للسيرفر فقط عند صمت المستخدم واستقرار الإدخال."
        ]
      }
    },
    {
      id: "7.6.g",
      title: "إنشاء useWindowSize",
      englishTerm: "Building useWindowSize Hook (Responsive Layout & Viewport Tracking)",
      description: "بناء خطاف احترافي لمراقبة أبعاد نافذة المتصفح (العرض والارتفاع - Width & Height) في الوقت الحقيقي. يستمع الخطاف لحدث 'resize' في كائن window، ويقوم بتحديث الحالة عند تغيير حجم النافذة من قبل المستخدم، مع الحرص على تنظيف مستمع الأحداث لمنع تسريب الذاكرة، ودعم بيئات التصيير من جانب الخادم (SSR Safe).",
      realLifeAnalogy: "مثل 'مقياس الرياح والحرارة الرقمي' المثبت على جدار البناية؛ يقرأ باستمرار مقاييس الطقس الخارجية، وعندما تتغير درجة الحرارة، يرسل إشارة لجهاز التكييف المركزي ليعيد ضبط التبريد تلقائياً.",
      whyItMatters: "يحتاج المطورون لمعرفة أبعاد الشاشة لتبديل المكونات برمجياً (مثل استبدال شريط التنقل الكامل بقائمة همبرغر للموبايل، أو تغيير حجم رسومات ومخططات Canvas/SVG التفاعلية). خطاف useWindowSize يوفر هذه المقاييس في أي مكان في شجرة المكونات بنقاء مطلق.",
      syntax: "const { width, height, isMobile } = useWindowSize();",
      simpleExample: `// خطاف useWindowSize لمتابعة حجم نافذة المتصفح
import { useState, useEffect } from "react";

function useWindowSize() {
  // حالة تخزين الأبعاد الحالية
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800
  });

  useEffect(() => {
    // دالة استخراج الأبعاد وتحديث الحالة
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // الاستماع لحدث تغيير الحجم في المتصفح
    window.addEventListener("resize", handleResize);

    // استدعاء أولي لضبط المقاييس الدقيقة فور اكتمال التركيب
    handleResize();

    // تنظيف المستمع عند تفكيك المكون
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // إرجاع كائن الأبعاد مع خاصية مساعدة للشاشات الصغيرة
  return {
    ...windowSize,
    isMobile: windowSize.width < 768
  };
}
`,
      advancedExample: `// لوحة قياس دقة الشاشة المتجاوبة والتكيف البرمجي
import React from "react";

export function ViewportInspectorCard() {
  // محاكاة أو استخدام الخطاف المخصص useWindowSize
  const windowWidth = 1024;
  const windowHeight = 768;
  const isMobile = windowWidth < 768;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مراقب أبعاد الشاشة useWindowSize</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded font-bold \${
          isMobile ? "bg-amber-950 text-amber-400" : "bg-emerald-950 text-emerald-400"
        }\`}>
          {isMobile ? "شاشة هاتف (Mobile)" : "شاشة حاسوب (Desktop)"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block">العرض (Width):</span>
          <span className="text-xl font-mono font-black text-indigo-400">{windowWidth}px</span>
        </div>

        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase block">الارتفاع (Height):</span>
          <span className="text-xl font-mono font-black text-indigo-400">{windowHeight}px</span>
        </div>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
        💡 <strong className="text-slate-200">فائدة معمارية:</strong> يتيح لك هذا الخطاف إلغاء تصيير المكونات الثقيلة برمجياً على شاشات الهواتف المحمولة لتسريع الأداء دون الاعتماد فقط على CSS display: none.
      </div>
    </div>
  );
}
`,
      outputExplanation: "يوفر useWindowSize قياسات فورية للعرض والارتفاع، مما يتيح لك اتخاذ قرارات برمجية ديناميكية لتصيير مكونات مختلفة بناءً على حجم شاشة المستخدم الفعلي.",
      commonMistakes: [
        {
          mistake: "قراءة window.innerWidth مباشرة دون التحقق من typeof window !== 'undefined'.",
          fix: "احرص على توفير قيم افتراضية آمنة عند تشغيل الكود في بيئة الخادم (SSR/Next.js) حيث لا يوجد كائن window.",
          reason: "محاولة الوصول إلى window على السيرفر تسبب خطأ قاتلاً: ReferenceError: window is not defined."
        }
      ],
      bestPractices: [
        "ادمج حدث resize مع تقنية throttling أو debouncing إذا كان المكون يحتوي على حسابات ثقيلة جداً.",
        "احرص دائماً على حذف مستمع الحدث removeEventListener في دالة التنظيف.",
        "أرجع خصائص مساعدة مفيدة مثل isMobile أو isTablet لتسهيل القراءة في كود المكونات."
      ],
      infographicCard: {
        title: "خطاف useWindowSize المتجاوب",
        points: [
          "استماع مباشر لحدث resize في كائن window.",
          "تنظيف فوري للمستمعات عند التفكيك لمنع التسريب.",
          "حماية ضد أخطاء تصيير جانب الخادم (SSR Safe Guard)."
        ]
      }
    },
    {
      id: "7.6.h",
      title: "إنشاء useFetch تعليمي",
      englishTerm: "Building an Educational useFetch Hook (Data, Loading & Error State)",
      description: "بناء خطاف شامل ومتكامل لجلب البيانات من خوادم الويب (API Data Fetching). يدير الخطاف الحالات الثلاث الأساسية للشبكة: حالة البيانات (Data)، حالة التحميل (Loading)، وحالة الخطأ (Error)، مع دعم إعادة الجلب (Refetch)، وحماية ضد مشاكل السباق (Race Conditions) وإلغاء الطلبات المعلقة باستخدام كائن AbortController.",
      realLifeAnalogy: "مثل 'مكتب البريد السريع'؛ تسلمهم عنوان الطرد (URL)، فيضعون الطلب في حالة (قيد الشحن/Loading). إذا وصل الطرد سيسلمونه لك (Data)، وإن حدثت مشكلة في الطريق يبلغونك بسبب التعثر (Error). ولديك دائماً زر لإلغاء الشحنة إذا غيرت رأيك (Abort).",
      whyItMatters: "جلب البيانات هو عصب تطبيقات الويب الحديثة. كتابة 30 سطراً من useState و useEffect و try/catch و AbortController في كل مكون يستهلك وقتاً هائلاً ويفتح الباب لأخطاء تسريب الذاكرة وعرض بيانات قديمة. خطاف useFetch يختصر كل هذه الدورة في استدعاء واحد فائق القوة.",
      syntax: "const { data, loading, error, refetch } = useFetch(url, options);",
      simpleExample: `// خطاف useFetch تعليمي متكامل وآمن
import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  // حالة البيانات المستلمة
  const [data, setData] = useState(null);
  // حالة انتظار التحميل
  const [loading, setLoading] = useState(true);
  // حالة الأخطاء إن وجدت
  const [error, setError] = useState(null);

  // دالة جلب البيانات مع دعم إلغاء الطلبات السابقة
  const fetchData = useCallback(async (abortSignal) => {
    // إعادة تعيين الحالات عند بدء طلب جديد
    setLoading(true);
    setError(null);

    try {
      // إرسال طلب الشبكة مع تمرير إشارة الإلغاء
      const response = await fetch(url, { signal: abortSignal });

      // التحقق من سلامة استجابة الخادم
      if (!response.ok) {
        throw new Error(\`خطأ من السيرفر: كود الحالة \${response.status}\`);
      }

      // تحويل الاستجابة إلى صيغة JSON
      const jsonResult = await response.json();
      // تخزين البيانات
      setData(jsonResult);
    } catch (err) {
      // تجاهل أخطاء الإلغاء المتعمدة
      if (err.name !== "AbortError") {
        setError(err.message || "حدث خطأ غير متوقع في الشبكة");
      }
    } finally {
      // إنهاء حالة التحميل
      setLoading(false);
    }
  }, [url]);

  // تشغيل التأثير عند تغير الرابط
  useEffect(() => {
    // إنشاء وحدة تحكم بالإلغاء
    const controller = new AbortController();
    // جلب البيانات وتمرير الإشارة
    fetchData(controller.signal);

    // إلغاء الطلب عند تفكيك المكون أو تغير الرابط
    return () => {
      controller.abort();
    };
  }, [fetchData]);

  // دالة لإعادة جلب البيانات يدوياً
  const refetch = () => {
    const controller = new AbortController();
    fetchData(controller.signal);
  };

  // إرجاع كائن الحالات ودالة إعادة الجلب
  return { data, loading, error, refetch };
}
`,
      advancedExample: `// عرض بطاقة مستخدم ديناميكية باستخدام useFetch
import React, { useState, useEffect } from "react";

export function FetchUserCardDemo() {
  // محاكاة حالات الخطاف المخصص
  const [userId, setUserId] = useState(1);
  const loading = false;
  const user = { id: 1, name: "عبدالله الشمري", role: "مهندس واجهات أول", email: "abdullah@example.com" };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">جلب البيانات عبر useFetch</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          /api/users/{userId}
        </span>
      </div>

      {loading ? (
        <div className="p-8 text-center space-y-2">
          <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-slate-400">جارٍ جلب بيانات المستخدم من الخادم...</p>
        </div>
      ) : (
        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-600/30 border border-indigo-500 flex items-center justify-center font-bold text-indigo-300">
              {user.name.charAt(0)}
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-200">{user.name}</h5>
              <p className="text-[10px] text-slate-400">{user.role}</p>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-900 text-[11px] text-slate-400 flex justify-between">
            <span>البريد الإلكتروني:</span>
            <span className="font-mono text-indigo-300">{user.email}</span>
          </div>
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => setUserId((id) => (id === 1 ? 2 : 1))}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
        >
          تبديل المستخدم 🔄
        </button>
      </div>
    </div>
  );
}
`,
      outputExplanation: "يوفر useFetch حماية ثلاثية: عرض مؤشر التحميل تلقائياً، إظهار رسالة الخطأ بأناقة إن تعثرت الشبكة، وإلغاء الطلب القديم فوراً عبر AbortController إذا اختار المستخدم معرفاً جديداً قبل اكتمال الطلب السابق.",
      commonMistakes: [
        {
          mistake: "نسيان استخدام AbortController لإلغاء طلبات الشبكة المعلقة.",
          fix: "مرر controller.signal إلى fetch واستدعِ controller.abort() داخل دالة تنظيف التأثير.",
          reason: "بدون الإلغاء، قد يصل رد الطلب القديم بعد الطلب الجديد ويحدث الحالة ببيانات خاطئة (Race Condition)."
        }
      ],
      bestPractices: [
        "أرجع كائناً { data, loading, error, refetch } لتسهيل استخراج الخصائص المطلوبة فقط.",
        "في التطبيقات الإنتاجية الضخمة، يُنصح بالاعتماد على مكتبات متخصصة كـ TanStack Query (React Query) للتخزين المؤقت المتقدم (Caching).",
        "احرص على تجاهل خطأ AbortError حتى لا يتم تسجيله كخطأ شبكة حقيقي يزعج المستخدم."
      ],
      infographicCard: {
        title: "معمارية خطاف useFetch المتكامل",
        points: [
          "إدارة ثلاثية للحالات: { data, loading, error }.",
          "حماية ضد مشاكل السباق عبر كائن AbortController.",
          "دعم دالة إعادة الجلب اليدوي (refetch function)."
        ]
      }
    },
    {
      id: "7.6.i",
      title: "تمرير المعاملات وإرجاع القيم",
      englishTerm: "Hook API Design (Parameters & Return Conventions)",
      description: "المعايير الهندسية لتصميم الواجهة البرمجية (API Design) للخطافات المخصصة: متى ترجع مصفوفة ذات تسلسل ثابت (Tuple Array مثل useState) لتمكين المستخدم من تسمية المتغيرات بحرية، ومتى ترجع كائناً ذا مفاتيح مسمية (Object مثل useFetch) لتسهيل استخراج الخصائص وإمكانية إضافة ميزات مستقبلية دون كسر التوافقية (Non-Breaking Changes).",
      realLifeAnalogy: "مثل الاختيار بين 'طقم علب طعام ذات أحجام وألوان مختلفة' (مصفوفة ترتبها بنفسك بحرية)، وبين 'صندوق أدوات منظم يحمل بطاقات وملصقات مكتوبة' (كائن يحمل أسماء ثابتة لا يمكن الخلط بينها مهما تغير الترتيب).",
      whyItMatters: "تصميم واجهة الخطاف بشكل سيئ يجعل استخدامه معقداً ومربكاً للمطورين الآخرين في الفريق. إذا أرجعت مصفوفة تحتوي على 6 عناصر، سيضطر المطور لكتابة فاصلات فارغة [a, , , d] للوصول للعنصر الأخير، بينما إرجاع الكائن يحل هذه المشكلة في سطر واحد.",
      syntax: "// نمط المصفوفة: مناسب للقيم الفردية أو المزدوجة (1-2 قيم)\nreturn [value, setValue];\n\n// نمط الكائن: مناسب لعدة قيم تتجاوز قيمتين (3+ قيم)\nreturn { data, loading, error, refetch, reset };",
      simpleExample: `// مقارنة بين نمطي الإرجاع في الخطافات
import { useState } from "react";

// 1. نمط المصفوفة (Tuple Array): حرية التسمية
function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((c) => c + 1);
  // إرجاع مصفوفة من عنصرين
  return [count, increment];
}

// 2. نمط الكائن (Object): أسماء ثابتة ومرونة في الاستخراج
function useUserData(userId) {
  const [name, setName] = useState("أحمد");
  const [role, setRole] = useState("مسؤول");
  // إرجاع كائن بمفاتيح صريحة
  return { name, role, isAdmin: role === "مسؤول" };
}

// تجربة الاستهلاك في المكونات:
// حرية في التسمية:
const [myAge, addYear] = useCounter(25);
// استخراج مريح دون التقيد بالترتيب:
const { isAdmin, name } = useUserData("usr-1");
`,
      advancedExample: `// دليل معايير تصميم الخطافات المخصصة للمطورين المحترفين
import React from "react";

export function HookDesignRulesCard() {
  const patterns = [
    {
      pattern: "نمط المصفوفة (Tuple Pattern)",
      syntax: "return [state, setState];",
      bestFor: "القيم الفردية كالحالات والتبديل (1 إلى 2 عناصر)",
      pros: "حرية مطلقة للمطور في اختيار الأسماء عند التفكيك: const [age, setAge] = ...",
      cons: "صعوبة التوسع عند تجاوز 3 عناصر، لأن الترتيب إلزامي."
    },
    {
      pattern: "نمط الكائن (Object Pattern)",
      syntax: "return { data, loading, error, refetch };",
      bestFor: "الحالات المعقدة وطلبات الشبكة والأدوات (3 عناصر فأكثر)",
      pros: "استخراج ما تحتاجه فقط دون التقيد بالترتيب، وإمكانية إضافة خصائص جديدة مستقبلاً بأمان.",
      cons: "يجب إعادة تسمية الخصائص يدوياً إذا استخدمت الخطاف مرتين: const { data: users } = ..."
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">معايير هندسة مخرجات الخطافات</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          API Best Practices
        </span>
      </div>

      <div className="space-y-3">
        {patterns.map((p, i) => (
          <div key={i} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="font-bold text-emerald-400">{p.pattern}</span>
              <code className="text-[10px] text-indigo-300 font-mono bg-slate-900 px-1.5 py-0.5 rounded">
                {p.syntax}
              </code>
            </div>
            <p className="text-slate-300"><strong className="text-slate-400">الاستخدام:</strong> {p.bestFor}</p>
            <p className="text-[11px] text-emerald-300/80">✓ {p.pros}</p>
            <p className="text-[11px] text-rose-300/80">⚠ {p.cons}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
`,
      outputExplanation: "القاعدة الذهبية المعتمدة في مجتمع React: استخدم نمط المصفوفة [val, fn] إذا كان الخطاف يحاكي useState ولا يتجاوز عنصرين. استخدم نمط الكائن { a, b, c } إذا كان الخطاف يرجع 3 عناصر أو أكثر لتفادي ارتباك الترتيب.",
      commonMistakes: [
        {
          mistake: "إرجاع مصفوفة طويلة تحتوي على 5 عناصر: return [data, loading, error, refetch, abort].",
          fix: "حولها فوراً إلى كائن: return { data, loading, error, refetch, abort }.",
          reason: "المصفوفة الطويلة تجبر المستخدم على كتابة فواصل مزعجة [,,, refetch] لاستخراج عنصر واحد وتجعل الكود غير مقروء."
        }
      ],
      bestPractices: [
        "اقبل كائناً كمعامل اختياري للتهيئة: useHook(requiredArg, { option1, option2 } = {}).",
        "تأكد من أن جميع الدوال المرجعة مثبتة المرجع عبر useCallback إن كانت ستُستخدم داخل تأثيرات.",
        "اجعل المعاملات الإلزامية في البداية والمعاملات الاختيارية في النهاية كقيم افتراضية."
      ],
      infographicCard: {
        title: "مصفوفة قرارات تصميم Custom Hook API",
        points: [
          "1 إلى 2 عناصر: مصفوفة [value, setter] لحرية التسمية.",
          "3 عناصر أو أكثر: كائن { a, b, c } لمرونة الاستخراج والاستقرار.",
          "تثبيت الدوال المرجعة بـ useCallback لحماية الأداء."
        ]
      }
    },
    {
      id: "7.6.j",
      title: "اختبار Custom Hooks",
      englishTerm: "Testing Custom Hooks (renderHook & act in React Testing Library)",
      description: "منهجية اختبار الخطافات المخصصة بمعزل تام عن المكونات البصرية باستخدام دالة renderHook ودالة act من مكتبة @testing-library/react. نظراً لأن الخطافات لا يمكن استدعاؤها إلا داخل بيئة React، توفر renderHook مكوناً وهمياً لاختبار سلوك الخطاف والتأكد من تحديث الحالة والاستجابة للتأثيرات بدقة فائقة.",
      realLifeAnalogy: "مثل 'منصة اختبار محركات الطائرات' (Engine Test Stand)؛ يتم ربط المحرك بجهاز محاكاة متطور في ورشة الاختبار دون الحاجة لتركيبه على جسم طائرة حقيقية، لاختبار قوة الدفع واستهلاك الوقود بدقة وعزل تام.",
      whyItMatters: "اختبار الخطاف المخصص بشكل منفصل يضمن صحة منطق التطبيق وحساباته الرياضية دون التشويش بعناصر الواجهة وCSS. إذا اجتاز الخطاف المخصص الاختبارات الوحدوية (Unit Tests)، ستعمل كافة المكونات التي تعتمد عليه بثقة واستقرار.",
      syntax: "import { renderHook, act } from '@testing-library/react';\n\nconst { result } = renderHook(() => useCustomHook());\nact(() => {\n  result.current.someAction();\n});\nexpect(result.current.value).toBe(expected);",
      simpleExample: `// مثال لاختبار خطاف useToggle باستخدام vitest أو jest
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useToggle } from "./useToggle";

// تعريف مجموعة اختبارات الخطاف
describe("useToggle Hook Tests", () => {
  // اختبار القيمة الافتراضية
  it("يجب أن يبدأ بالقيمة الافتراضية false", () => {
    // تصيير الخطاف في بيئة الاختبار
    const { result } = renderHook(() => useToggle(false));

    // التحقق من أن القيمة الأولى هي false
    expect(result.current[0]).toBe(false);
  });

  // اختبار وظيفة التبديل toggle
  it("يجب أن يبدل القيمة عند استدعاء دالة toggle", () => {
    const { result } = renderHook(() => useToggle(false));

    // تنفيذ تحديث الحالة داخل كتلة act
    act(() => {
      // استدعاء دالة التبديل
      result.current[1]();
    });

    // التحقق من تحول القيمة إلى true
    expect(result.current[0]).toBe(true);
  });
});
`,
      advancedExample: `// محاكي نتائج اختبار الخطافات في بيئة المطور
import React, { useState } from "react";

export function HookTestRunnerCard() {
  const [testResults, setTestResults] = useState([
    { name: "useToggle: Initial state is false", status: "PASSED", time: "1.2ms" },
    { name: "useToggle: toggle() flips value to true", status: "PASSED", time: "2.1ms" },
    { name: "useDebounce: delays update by 500ms", status: "PASSED", time: "504ms" },
    { name: "useLocalStorage: syncs with window.localStorage", status: "PASSED", time: "3.4ms" }
  ]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">نتائج اختبار الخطافات عبر renderHook</h4>
        <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
          4 / 4 Passed ✓
        </span>
      </div>

      <div className="space-y-2">
        {testResults.map((t, i) => (
          <div key={i} className="flex justify-between items-center p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              <span className="text-slate-300 font-mono text-[11px]">{t.name}</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">{t.time}</span>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
        📌 <strong className="text-slate-300">ملاحظة هندسية:</strong> يجب دائماً تغليف أي استدعاء يغير الحالة داخل دالة <code className="text-indigo-400 font-mono">act(() =&gt; &#123; ... &#125;)</code> لضمان استقرار دورة التحديث قبل فحص النتيجة بـ expect.
      </div>
    </div>
  );
}
`,
      outputExplanation: "دالة renderHook تنشئ مكوناً داخلياً لاختبار الخطاف وتعيد كائن result.current، بينما تضمن دالة act اكتمال كافة تأثيرات وتصييرات React قبل تنفيذ عبارات التحقق expect.",
      commonMistakes: [
        {
          mistake: "استدعاء دوال تحديث الحالة خارج دالة act(...) في بيئة الاختبار.",
          fix: "قم بتغليف أي استدعاء يحدث الحالة بـ act(() => { result.current.action(); }).",
          reason: "بدون act، ستظهر تحذيرات في سطر الأوامر تفيد بحدوث تحديث للحالة خارج نطاق دورة React مما قد يتسبب في فشل الفحص."
        }
      ],
      bestPractices: [
        "استخدم renderHook من مكتبة @testing-library/react كخيار قياسي في Vitest أو Jest.",
        "اختبر الحالات الحدية (Edge Cases) كالأخطاء، وانقطاع الاتصال، والمدخلات الفارغة.",
        "تأكد من تنظيف التأثيرات والمؤقتات باستخدام waitFor أو vi.useFakeTimers."
      ],
      infographicCard: {
        title: "ركائز اختبار Custom Hooks",
        points: [
          "renderHook: لإنشاء بيئة React وهمية معزولة للخطاف.",
          "result.current: لقراءة أحدث قيمة مرجعة من الخطاف.",
          "act(): لضمان تزامن واكتمال تحديثات الحالة قبل التحقق."
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q7-6-1",
      question: "ما هو التعريف الأدق للخطاف المخصص (Custom Hook) في مكتبة React؟",
      options: [
        "مكون بصري خاص يرجع عناصر HTML مشفرة مسبقاً",
        "دالة JavaScript عادية تبدأ بـ use وتستدعي بداخلها خطافات React أخرى لإعادة استخدام المنطق",
        "أداة خاصة بلغة TypeScript للتحقق من أنواع البيانات",
        "مكتبة خارجية يجب تثبيتها عبر npm بواسطة أمر خاص"
      ],
      correctAnswer: 1,
      explanation: "الخطاف المخصص هو دالة جافاسكريبت عادية تبدأ ببادئة 'use' وتستدعي خطافات React مدمجة (مثل useState أو useEffect) لمشاركة وإعادة استخدام المنطق بين المكونات."
    },
    {
      id: "q7-6-2",
      question: "إذا قمت باستدعاء Custom Hook يحمل بداخله useState في مكونين مختلفين في نفس الصفحة، فماذا يحدث للحالة؟",
      options: [
        "يشترك المكونان في نفس الحالة تلقائياً وتتزامن بياناتهما",
        "يحصل كل مكون على نسخته المستقلة تماماً من الحالة بمعزل عن المكون الآخر",
        "يحدث خطأ تضارب في React وتتوقف الصفحة عن العمل",
        "يقوم المكون الثاني بإلغاء واستبدال حالة المكون الأول"
      ],
      correctAnswer: 1,
      explanation: "الخطافات المخصصة تعيد استخدام 'المنطق البرمجي' فقط وليس مساحات الذاكرة؛ كل استدعاء للخطاف ينشئ عقدة مستقلة وحالة معزولة خاصة بالمكون المستدعي."
    },
    {
      id: "q7-6-3",
      question: "لماذا تُلزمنا React ببدء اسم أي Custom Hook ببادئة 'use' حصراً؟",
      options: [
        "لأن السيرفر لا يفهم سوى الكلمات التي تبدأ بحرف u",
        "لتمكين أداة فحص الكود (eslint-plugin-react-hooks) من تمييز الخطاف وتطبيق قواعد الخطافات الصارمة عليه",
        "لتسريع استدعاء الدوال في محرك المتصفح V8",
        "مجرد تقليد قديم يمكن للمطور تجاهله دون أي مشاكل"
      ],
      correctAnswer: 1,
      explanation: "بدون بادئة use، لا تستطيع أدوات التدقيق كـ ESLint معرفة أن الدالة تحوي خطافات، مما قد يجعلك تستدعيها داخل شروط أو حلقات دون تلقي تحذيرات تمنع انهيار التطبيق."
    }
  ],
  exercise: {
    id: "ex7-6",
    title: "بناء خطاف useDocumentTitle لتحديث عنوان الصفحة ديناميكياً",
    description: "المطلوب بناء خطاف مخصص باسم useDocumentTitle يقبل عنوان الصفحة (title) ويقوم بتحديث document.title في المتصفح تلقائياً عند تغيير العنوان أو تركيب المكون، مع إرجاع العنوان الأصلي السابق عند تفكيك المكون (Cleanup).",
    starterCode: `import { useEffect } from "react";

// قم بإكمال كود الخطاف المخصص useDocumentTitle
export function useDocumentTitle(title) {
  // 1. استخدم useEffect لمراقبة تغير title
  // 2. احفظ العنوان السابق واستعده عند تفكيك المكون
  // 3. حدث document.title بالعنوان الجديد
}

// مكون تجريبي لاستخدام الخطاف
export function DocumentTitleDemo() {
  // استخدم الخطاف لتغيير عنوان الصفحة
  return (
    <div className="p-4 text-white">
      اختبر الخطاف هنا
    </div>
  );
}`,
    hints: [
      "استدعِ useEffect وضع [title] في مصفوفة الاعتماديات.",
      "قبل تغيير العنوان، احفظ document.title الحالي في متغير محلي.",
      "داخل دالة تنظيف التأثير return () => { ... }، أعد العنوان الأصلي المحفوظ."
    ],
    solution: `import { useEffect, useRef } from "react";

// ✅ الحل النموذجي لخطاف useDocumentTitle مع استعادة العنوان السابق
export function useDocumentTitle(title, restoreOnUnmount = true) {
  // استخدام useRef لحفظ العنوان الأصلي للصفحة قبل تدخل الخطاف
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    // تحديث عنوان نافذة المتصفح بالعنوان الجديد
    document.title = title;
  }, [title]);

  useEffect(() => {
    // دالة تنظيف تستعيد العنوان القديم عند تفكيك المكون
    return () => {
      if (restoreOnUnmount) {
        document.title = defaultTitle.current;
      }
    };
  }, [restoreOnUnmount]);
}

// مكون تجريبي متكامل
export function DocumentTitleDemo() {
  const [counter, setCounter] = useState(0);

  // تحديث عنوان الصفحة بعداد الإشعارات
  useDocumentTitle(\`(\${counter}) رسائل جديدة | لوحة التحكم\`);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm mx-auto text-white space-y-4">
      <h4 className="font-bold text-sm text-indigo-400">تحديث عنوان الصفحة تلقائياً 🏷️</h4>
      <p className="text-xs text-slate-300">
        شاهد شريط عنوان المتصفح في الأعلى يتغير في كل مرة تضغط فيها على الزر:
      </p>
      <div className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
        <span className="text-xs">عدد الإشعارات:</span>
        <span className="font-mono text-emerald-400 font-bold text-lg">{counter}</span>
      </div>
      <button
        onClick={() => setCounter((c) => c + 1)}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all"
      >
        إرسال إشعار جديد (+1)
      </button>
    </div>
  );
}`
  },
  infographic: {
    title: "الدليل الشامل لهندسة Custom Hooks في React",
    description: "الخارطة المعمارية لاحتراف استخراج منطق الحالة وإعادة استخدامه عبر الخطافات المخصصة.",
    sections: [
      {
        heading: "1. القواعد الجوهرية (Golden Rules)",
        bullets: [
          "يبدأ بـ use دائماً: لتفعيل حماية وفحص ESLint التلقائي.",
          "حالة مستقلة لكل استدعاء: المنطق مشترك لكن الذاكرة منعزلة تماماً.",
          "مسؤولية واحدة محددة: خطاف واحد لكل وظيفة منفصلة (SRP)."
        ]
      },
      {
        heading: "2. أنماط الإرجاع القياسية (Return Patterns)",
        bullets: [
          "مصفوفة [value, setter]: للمتغيرات الفردية مثل useToggle.",
          "كائن { data, loading, error }: للعمليات متعددة القيم مثل useFetch.",
          "تثبيت المراجع: تغليف الدوال المرجعة دائماً بـ useCallback."
        ]
      },
      {
        heading: "3. ترسانة الخطافات الجاهزة (The Starter Arsenal)",
        bullets: [
          "useToggle: للقيم الثنائية والنوافذ المنبثقة والقوائم.",
          "useLocalStorage: لحفظ الإعدادات والمظهر في ذاكرة المتصفح.",
          "useDebounce: لتهدئة ضربات لوحة المفاتيح وتوفير طلبات السيرفر.",
          "useWindowSize: لمراقبة أبعاد الشاشة وبناء واجهات متجاوبة.",
          "useFetch: لإدارة دورة جلب البيانات وإلغاء الطلبات القديمة."
        ]
      }
    ]
  }
};
