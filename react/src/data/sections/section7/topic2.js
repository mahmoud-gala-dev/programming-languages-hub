// src/data/sections/section7/topic2.js
// الموضوع 2: استخدام useEffect في React (Side Effects, Synchronization & Cleanup)

export const SECTION_7_TOPIC_2 = {
  id: "7.2",
  title: "استخدام useEffect",
  englishTerm: "Using useEffect for Side Effects",
  description: "النافذة السحرية للتواصل مع العالم الخارجي: فهم مفهوم الآثار الجانبية (Side Effects)، مصفوفة الاعتماديات (Dependencies Array)، دوال التنظيف (Cleanup Functions)، التعامل مع المؤقتات والاشتراكات، تفادي حالات السباق (Race Conditions)، ومتى يجب عليك تجنب استخدام useEffect تماماً.",
  subtopics: [
    {
      id: "7.2.a",
      title: "مفهوم Effects",
      englishTerm: "Effects Concept (Side Effects & Pure Calculations)",
      description: "المفهوم الهندسي للآثار الجانبية (Side Effects) في عالم React. دوال المكونات مصممة لتكون دوالاً نقية (Pure Functions) تحسب واجهة JSX بناءً على الـ Props و State فقط. أما أي فعل يخرج عن هذا النطاق ويتفاعل مع أنظمة خارج دورة الحساب (مثل: جلب البيانات عبر الشبكة fetch، تعديل عنوان المتصفح document.title، تشغيل مؤقتات setTimeout، أو الاتصال بقنوات الـ WebSocket) يُسمى 'أثراً جانبياً' (Side Effect)، ويوفر خطاف useEffect مكاناً آمناً ومعزولاً لتشغيل هذه الآثار بعد أن يكتمل رسم الصفحة في المتصفح.",
      realLifeAnalogy: "مثل إعداد وجبة طعام في مطبخ مغلق؛ الطهي وتقطيع الخضار هو الحساب النقي (Render). أما عندما يرن جرس الباب وتخرج لاستلام طرد من مندوب التوصيل أو تشغيل مكيف الهواء في الصالة، فهذا 'أثر جانبي' خارجي لا علاقة له بطبخ الوجبة نفسها.",
      whyItMatters: "حماية التطبيق من الانهيار؛ تشغيل الآثار الجانبية داخل جسم دالة المكون مباشرة أثناء مرحلة الرندر يسبب بطئاً شاقاً، وتكرار طلبات الشبكة مئات المرات، وظهور أخطاء كارثية.",
      syntax: "import { useEffect } from 'react';\nuseEffect(() => {\n  // الآثار الجانبية تعمل هنا بعد اكتمال الرندر\n}, [dependencies]);",
      simpleExample: `// استيراد خطافي الحالة والتأثير
import { useState, useEffect } from "react";

function TitleUpdaterDemo() {
  const [clickCount, setClickCount] = useState(0);

  // استخدام useEffect لتحديث عنوان تبويب المتصفح (أثر جانبي خارجي)
  useEffect(() => {
    // تعديل واجهة برمجة المتصفح document.title بأمان
    document.title = \`نقراتك: \${clickCount} | تطبيقي\`;
  }, [clickCount]);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>راقب عنوان تبويب المتصفح بالأعلى في كل مرة تنقر فيها:</p>
      <button 
        onClick={() => setClickCount(c => c + 1)}
        className="px-3 py-1 bg-indigo-600 rounded font-bold"
      >
        زيادة العداد ({clickCount})
      </button>
    </div>
  );
}`,
      advancedExample: `// لوحة تشخيصية توضح الفرق بين الكود النقي في الرندر والآثار الجانبية في useEffect
import { useState, useEffect } from "react";

export function EffectsAnatomyVisualizer() {
  const [renderCount, setRenderCount] = useState(1);
  const [effectLogs, setEffectLogs] = useState([]);

  // هذا الكود يُنفذ أثناء الرندر (Render Phase - حساب نقي)
  const calculationMessage = \`الرقم المضاعف المحسوب: \${renderCount * 2}\`;

  // هذا الكود يُنفذ بعد اكتمال الرندر والتثبيت (Commit Phase - أثر جانبي)
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    // محاكاة تسجيل حدث في خدمة مراقبة خارجية
    setEffectLogs((prev) => [
      ...prev.slice(-3),
      \`⚡ تم تنفيذ التأثير الجانبي بنجاح في: \${timestamp} بعد رندر الرقم [\${renderCount}]\`
    ]);
  }, [renderCount]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">تشريح التأثيرات الجانبية (useEffect)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          After-Commit Execution
        </span>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-xs">
        <p className="text-slate-300">1. الحساب النقي (أثناء الرندر): <span className="text-emerald-400 font-mono font-bold">{calculationMessage}</span></p>
        <p className="text-slate-400 text-[11px]">يحدث داخل دالة المكون فوراً دون لمس أي نظام خارجي.</p>
      </div>

      <div className="space-y-1 text-xs">
        <span className="text-slate-400 block font-bold">2. سجل الآثار الجانبية (داخل useEffect):</span>
        <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1 font-mono text-[10px] text-indigo-300">
          {effectLogs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setRenderCount((c) => c + 1)}
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/40"
      >
        إطلاق رندر جديد (رقم: {renderCount})
      </button>
    </div>
  );
}`,
      output: "يقوم المكون بحساب المعادلة الرياضية فوراً أثناء الرندر، وبعد أن يكتمل رسم العناصر في المتصفح، يُطلق useEffect التأثير الجانبي ويسجل التوقيت في السجل بأمان.",
      commonMistakes: [
        {
          mistake: "وضع استدعاء fetch أو تعديل document.title مباشرة في جسم دالة المكون خارج useEffect.",
          why: "جسم دالة المكون يُنفذ في كل رندر؛ وضعه بالخارج يرسل طلبات HTTP في كل ميكروثانية مع أي حركة ماوس أو إعادة رسم، مما يسبب حظر خادمك (DDOS) وتجمد المتصفح!",
          fix: "غلف دائماً أي اتصال بالخادم أو تعديل خارجي داخل خطاف useEffect."
        }
      ],
      bestPractices: [
        "تذكر القاعدة: العمليات الحسابية الخالصة مكانها جسم الدالة؛ التفاعل مع أنظمة المتصفح والشبكة مكانه useEffect.",
        "اجعل كل خطاف useEffect مركزاً على مهمة واحدة مستقلة بدلاً من جمع 5 عمليات مختلفة داخل تأثير عملاق واحد."
      ],
      infographicCard: {
        type: "split-comparison",
        title: "أين تضع كودك في المكون؟",
        left: { title: "داخل جسم المكون (Render Logic)", items: ["حسابات رياضية نقية", "تجهيز عناصر JSX", "دمج وتنسيق النصوص"] },
        right: { title: "داخل خطاف useEffect (Side Effects)", items: ["طلبات الشبكة Fetch / API", "مؤقتات setTimeout / setInterval", "تعديل document.title والـ DOM الخارجي", "الاستماع لأحداث window"] }
      }
    },
    {
      id: "7.2.b",
      title: "مزامنة المكونات مع الأنظمة الخارجية",
      englishTerm: "Synchronizing with External Systems (Third-Party & Web APIs)",
      description: "الهدف والتعريف الفلسفي الحقيقي لـ useEffect وفق توثيق React الرسمي الحديث: ليس مجرد أداة لتتبع دورة الحياة، بل هو أداة 'مزامنة' (Synchronization Mechanism). يُستخدم للحفاظ على اتساق مكون React مع أي نظام غير مبني بـ React (External Non-React System)، مثل: مكتبة خرائط Google Maps أو Leaflet، مشغل فيديو HTML5 كـ video.play()، أو خادم دردشة عبر WebSocket.",
      realLifeAnalogy: "مثل نظام التكييف الذكي (Thermostat) المتصل بحساس درجة الحرارة الخارجية؛ كلما تغيرت درجة حرارة الجو في الخارج، يقوم الجهاز بضبط قوة التبريد تلقائياً لمزامنة برودة الغرفة مع الرقم المطلوب على الشاشة.",
      whyItMatters: "يمكنك من دمج أي مكتبة جافاسكريبت عريقة ومشهورة في العالم داخل تطبيقات React بأمان كامل دون أي تعارض في السيطرة على الـ DOM.",
      syntax: "useEffect(() => {\n  const connection = createConnection(serverUrl, roomId);\n  connection.connect();\n  return () => connection.disconnect();\n}, [roomId]);",
      simpleExample: `// مزامنة حالة تشغيل مشغل وسائط صوتي خارجي
import { useState, useEffect, useRef } from "react";

function AudioPlayerSync() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // مزامنة حالة React مع واجهة مشغل الصوت في المتصفح
  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play().catch(() => {});
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <audio ref={audioRef} src="https://www.w3schools.com/html/horse.mp3" />
      <button 
        onClick={() => setIsPlaying(p => !p)}
        className="px-3 py-1 bg-indigo-600 rounded font-bold"
      >
        {isPlaying ? "إيقاف الصوت ⏸️" : "تشغيل الصوت ▶️"}
      </button>
    </div>
  );
}`,
      advancedExample: `// مزامنة مكون React مع نظام خادم دردشة خارجي تجريبي (External Chat Service)
import { useState, useEffect } from "react";

// محاكاة واجهة API خارجية غير مبنية بـ React
function createExternalChatConnection(roomId) {
  return {
    connect() {
      console.log(\`✅ متصل بنجاح بالغرفة الخارجية: #\${roomId}\`);
    },
    disconnect() {
      console.log(\`❌ تم قطع الاتصال بالغرفة الخارجية: #\${roomId}\`);
    }
  };
}

export function ExternalSystemSyncDemo() {
  const [roomId, setRoomId] = useState("general");
  const [isConnected, setIsConnected] = useState(false);

  // مزامنة اتصال الشبكة مع قيمة roomId في React
  useEffect(() => {
    // 1. بدء الاتصال بالنظام الخارجي
    const connection = createExternalChatConnection(roomId);
    connection.connect();
    setIsConnected(true);

    // 2. دالة التنظيف: قطع الاتصال السابق عند تبديل الغرفة أو مغادرة الصفحة
    return () => {
      connection.disconnect();
      setIsConnected(false);
    };
  }, [roomId]); // إعادة المزامنة في كل مرة يتغير فيها معرف الغرفة

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مزامنة الأنظمة الخارجية</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold \${
          isConnected ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
        }\`}>
          {isConnected ? "متصل بالخادم" : "غير متصل"}
        </span>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-slate-300 font-bold block">اختر غرفة الدردشة الخارجية:</label>
        <div className="flex gap-2">
          {["general", "react-help", "announcements"].map((room) => (
            <button
              key={room}
              onClick={() => setRoomId(room)}
              className={\`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all border \${
                roomId === room
                  ? "bg-indigo-600 border-indigo-500 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-300"
              }\`}
            >
              #{room}
            </button>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed">
        افتح كونسول المتصفح F12 ولاحظ: عند التبديل، يقوم useEffect بقطع الاتصال بالغرفة القديمة تلقائياً ثم يتصل بالغرفة الجديدة.
      </p>
    </div>
  );
}`,
      output: "يقوم useEffect بمزامنة حالة الاتصال مع قيمة roomId بدقة متناهية؛ يقطع الاتصال بالغرفة السابقة ويفتح اتصالاً جديداً مع كل تبديل دون ترك اتصالات معلقة.",
      commonMistakes: [
        {
          mistake: "نسيان دالة التنظيف (Cleanup) عند الاتصال بأنظمة خارجية.",
          why: "بدون تنظيف، ستتراكم الاتصالات المتعددة في الخلفية (Connection Leaks) مما يستهلك موارد الخادم والذاكرة.",
          fix: "أرجع دائماً دالة قطع الاتصال أو الإلغاء في نهاية useEffect: return () => cleanup();."
        }
      ],
      bestPractices: [
        "فكر دائماً: ما هو النظام الخارجي الذي أحاول مزامنته مع مكوني؟ إذا لم يكن هناك نظام خارجي، فغالباً أنت لست بحاجة لـ useEffect."
      ],
      infographicCard: {
        type: "sync-loop",
        title: "حلقة المزامنة مع الأنظمة الخارجية",
        loop: [
          "1. رندر المكون وتحديث شجرة واجهة المستخدم",
          "2. تشغيل دالة useEffect لضبط وتغذية النظام الخارجي",
          "3. في حال تغير المدخلات: تنظيف وإلغاء المزامنة السابقة",
          "4. إعادة المزامنة بالقيمة الجديدة فوراً"
        ]
      }
    },
    {
      id: "7.2.c",
      title: "مصفوفة الاعتماديات Dependencies",
      englishTerm: "Dependency Array: [], [deps], or no array",
      description: "المعامل الثاني في دالة useEffect (المصفوفة المعقوفة []) الذي يحدد لـ React متى بالضبط يجب تشغيل التأثير ومتى يجب تخطيه. تمتلك المصفوفة 3 سيناريوهات حاسمة: 1) مصفوفة فارغة ([]): يُنفذ التأثير مرة واحدة فقط عند تركيب المكون (Mount) ولا يُعاد أبداً، 2) مصفوفة تحوي متغيرات ([a, b]): يُنفذ عند التركيب وفي كل مرة تتغير فيها قيمة a أو b، 3) بدون مصفوفة إطلاقاً (حذف المعامل الثاني): يُنفذ بعد كل رندر للمكون بلا استثناء.",
      realLifeAnalogy: "مثل إشعار وصول الرحلات في تطبيق الطيران؛ إذا اشتركت في تنبيه 'رحلة رقم 101' فقط (مصفوفة [flightId])، فلن يهتز هاتفك إلا إذا حدث تغيير في تلك الرحلة المحددة، ولن يزعجك التطبيق بآلاف الرحلات الأخرى التي لم تشترك بها.",
      whyItMatters: "التحكم في مصفوفة الاعتماديات هو ما يمنع الحلقات اللانهائية والطلبات الشبكية الزائدة، ويضمن تزامن الكود مع القيم الحديثة فقط.",
      syntax: "// 1. مرة واحدة عند البداية\nuseEffect(() => {}, []);\n\n// 2. عند تغير متغير محدد\nuseEffect(() => {}, [userId]);\n\n// 3. بعد كل رندر (نادراً ما يستخدم)\nuseEffect(() => {});",
      simpleExample: `// المقارنة العملية للسيناريوهات الثلاثة
import { useState, useEffect } from "react";

function DependenciesComparison() {
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);

  // سيناريو 1: مصفوفة فارغة -> رندر البداية فقط
  useEffect(() => {
    console.log("🚀 تم تركيب المكون لأول مرة (Mount) فقط!");
  }, []);

  // سيناريو 2: مراقبة valA فقط
  useEffect(() => {
    console.log("🎯 تغيرت قيمة valA فقط:", valA);
  }, [valA]);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <button onClick={() => setValA(a => a + 1)} className="px-2 py-1 bg-indigo-600 rounded ml-2">
        تحديث valA ({valA})
      </button>
      <button onClick={() => setValB(b => b + 1)} className="px-2 py-1 bg-emerald-600 rounded">
        تحديث valB ({valB})
      </button>
    </div>
  );
}`,
      advancedExample: `// محاكي تفاعلي حي لاختبار سيناريوهات مصفوفة الاعتماديات الثلاثة
import { useState, useEffect } from "react";

export function DependencyMatrixSimulator() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [logs, setLogs] = useState([]);

  const addLog = (msg, color) => {
    setLogs((prev) => [...prev.slice(-4), { msg, color, id: Date.now() + Math.random() }]);
  };

  // السيناريو أ: مصفوفة فارغة []
  useEffect(() => {
    addLog("🟢 السيناريو []: نُفذ عند التركيب الأولي للمكون (مرة واحدة)", "text-emerald-400");
  }, []);

  // السيناريو ب: مراقبة countA فقط [countA]
  useEffect(() => {
    if (countA > 0) {
      addLog(\`🔵 السيناريو [countA]: نُفذ لأن countA تغيرت إلى \${countA}\`, "text-sky-400");
    }
  }, [countA]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">مختبر مصفوفة الاعتماديات (Dependencies Lab)</h4>

      <div className="flex gap-2">
        <button
          onClick={() => setCountA((c) => c + 1)}
          className="flex-1 py-2 bg-sky-600 hover:bg-sky-500 rounded-xl text-xs font-bold transition-all"
        >
          زيادة المتغير A ({countA})
        </button>
        <button
          onClick={() => setCountB((c) => c + 1)}
          className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold transition-all border border-slate-700"
        >
          زيادة المتغير B ({countB})
        </button>
      </div>

      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 space-y-1 font-mono text-[10px]">
        <p className="text-slate-500 font-sans mb-1">سجل استجابة التأثيرات:</p>
        {logs.map((log) => (
          <div key={log.id} className={log.color}>{log.msg}</div>
        ))}
      </div>

      <p className="text-[10px] text-slate-400">
        💡 لاحظ: النقر على المتغير B يغير الواجهة ولكنه لا يطلق التأثير الأزرق، لأن المتغير B غير موجود في مصفوفة اعتمادياته!
      </p>
    </div>
  );
}`,
      output: "المكون يثبت بدقة أن التأثير لا يستجيب إلا للمتغيرات المسجلة صراحة داخل مصفوفة اعتمادياته، متجاهلاً التغييرات في المتغيرات الأخرى.",
      commonMistakes: [
        {
          mistake: "الكذب على مصفوفة الاعتماديات بحذف متغير مستخدم داخل التأثير لإيقاف تكراره (Lying to dependencies).",
          why: "حذف المتغير يجعل التأثير يرى قيمة قديمة مجمدة في الذاكرة (Stale Closure) لا تتحدث أبداً عند تغير المدخلات الحقيقية!",
          fix: "ضع دائماً كل متغير أو خاصية أو دالة مستخدمة داخل جسم التأثير في مصفوفة الاعتماديات دون استثناء."
        }
      ],
      bestPractices: [
        "استمع دائماً لتحذيرات إضافة ESLint (react-hooks/exhaustive-deps).",
        "تجنب وضع كائنات أو مصفوفات تنشأ في الرندر مباشرة داخل مصفوفة الاعتماديات لأن مراجعها تتغير في كل رندر مسببة تكراراً لا ينتهي."
      ],
      infographicCard: {
        type: "decision-cards",
        title: "الخيارات الثلاثة لمصفوفة الاعتماديات",
        cards: [
          { pattern: "useEffect(fn)", timing: "بعد كل رندر (خطر الحلقات اللانهائية)" },
          { pattern: "useEffect(fn, [])", timing: "مرة واحدة فقط عند تركيب المكون (Mount)" },
          { pattern: "useEffect(fn, [a, b])", timing: "عند التركيب + كلما تغيرت قيمة a أو b" }
        ]
      }
    },
    {
      id: "7.2.d",
      title: "تنفيذ Cleanup Function",
      englishTerm: "The Cleanup Function (Tidying up before next effect/unmount)",
      description: "الدالة التي يُرجعها خطاف useEffect اختيارياً (عبر return () => { ... }). تُنفذ هذه الدالة في وقتين محددين: 1) قبل تنفيذ التأثير القادم مباشرة لتنظيف مخلفات التأثير السابق، 2) عند إزالة المكون نهائياً من الشاشة (Unmount). وظيفتها تنظيف الاشتراكات، وإلغاء مؤقتات الوقت، وإزالة مستمعات الأحداث لمنع تسرب الذاكرة (Memory Leaks).",
      realLifeAnalogy: "مثل إغلاق صنبور الماء وإطفاء الأنوار عند مغادرة الغرفة الفندقية؛ لا تترك الأجهزة تعمل وتهدر الطاقة بعد خروجك، بل تنظف المكان وتغلق كل شيء قبل تسليم المفتاح.",
      whyItMatters: "بدون دالة التنظيف، ستظل دوال المؤقتات والاشتراكات القديمة تعمل في الخفاء في ذاكرة المتصفح وتستهلك المعالج وتسبب أخطاء محاولة تحديث مكونات غير موجودة.",
      syntax: "useEffect(() => {\n  // 1. إعداد الاشتراك أو المؤقت\n  return () => {\n    // 2. دالة التنظيف: إلغاء الاشتراك أو المؤقت\n  };\n}, [deps]);",
      simpleExample: `// مثال بسيط لدالة التنظيف مع مستمع حدث لوحة المفاتيح
import { useState, useEffect } from "react";

function KeyboardListenerDemo() {
  const [lastKey, setLastKey] = useState("لا يوجد");

  useEffect(() => {
    const handleKeyDown = (e) => setLastKey(e.key);
    // 1. إضافة المستمع
    window.addEventListener("keydown", handleKeyDown);

    // 2. دالة التنظيف: إزالة المستمع فور هدم المكون أو تحديثه!
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs">
      اضغط أي زر في الكيبورد: <strong className="text-emerald-400 font-mono">{lastKey}</strong>
    </div>
  );
}`,
      advancedExample: `// تجربة حية توضح توقيت عمل دالة التنظيف عند تبديل المكونات (Mount vs Unmount)
import { useState, useEffect } from "react";

function DisposableSubscriber({ channelId }) {
  const [log, setLog] = useState("");

  useEffect(() => {
    console.log(\`🔌 [Setup]: تم تفعيل الاشتراك للقناة \${channelId}\`);
    setLog(\`اشتراك نشط للقناة #\${channelId}\`);

    // دالة التنظيف
    return () => {
      console.log(\`🧹 [Cleanup]: تم تنظيف وإلغاء اشتراك القناة \${channelId}\`);
    };
  }, [channelId]);

  return (
    <div className="p-3 bg-slate-800 rounded-xl text-xs text-emerald-300 font-mono border border-emerald-500/30">
      {log}
    </div>
  );
}

export function CleanupLifecycleVisualizer() {
  const [isVisible, setIsVisible] = useState(true);
  const [channel, setChannel] = useState("news");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مختبر دالة التنظيف (Cleanup Lifecycle)</h4>
        <button
          onClick={() => setIsVisible((v) => !v)}
          className="text-xs px-2.5 py-1 bg-rose-600/30 text-rose-300 border border-rose-500/40 rounded-lg font-bold"
        >
          {isVisible ? "هدم المكون (Unmount)" : "تركيب المكون (Mount)"}
        </button>
      </div>

      {isVisible && (
        <div className="space-y-3">
          <div className="flex gap-2 text-xs">
            <button
              onClick={() => setChannel("news")}
              className={\`px-3 py-1 rounded-lg font-bold \${channel === "news" ? "bg-indigo-600" : "bg-slate-800"}\`}
            >
              قناة الأخبار
            </button>
            <button
              onClick={() => setChannel("sports")}
              className={\`px-3 py-1 rounded-lg font-bold \${channel === "sports" ? "bg-indigo-600" : "bg-slate-800"}\`}
            >
              قناة الرياضة
            </button>
          </div>

          <DisposableSubscriber channelId={channel} />
        </div>
      )}

      <p className="text-[10px] text-slate-400">
        افتح الكونسول F12 واضغط 'هدم المكون'؛ ستشاهد رسالة 🧹 [Cleanup] فوراً تأكيداً على تنظيف الذاكرة.
      </p>
    </div>
  );
}`,
      output: "عند التبديل بين القنوات أو إخفاء المكون، يتم استدعاء دالة التنظيف فوراً لإلغاء الاشتراك القديم قبل تفعيل الجديد، مما يحافظ على نظافة الذاكرة تماماً.",
      commonMistakes: [
        {
          mistake: "نسيان إزالة مستمعات الأحداث removeEventListener في دالة التنظيف.",
          why: "في كل مرة يُعاد رندر المكون، يتم إضافة مستمع حدث جديد، مما يؤدي لوجود 10 أو 20 مستمعاً لنفس الزر وتكرار تنفيذ الدالة 20 مرة في وقت واحد!",
          fix: "احرص دائماً على كتابة دالة التنظيف المطابقة لإلغاء أي مستمع حدث تم تسجيله."
        }
      ],
      bestPractices: [
        "ضع دالة التنظيف دائماً كدالة سهمية مباشرة في نهاية useEffect: return () => cleanup();.",
        "تأكد أن الدالة الممررة لـ removeEventListener هي نفس مرجع الدالة التي مُررت لـ addEventListener."
      ],
      infographicCard: {
        type: "lifecycle-loop",
        title: "متى تعمل دالة التنظيف Cleanup؟",
        triggers: [
          "1. قبل تشغيل التأثير الجديد (عند تغير إحدى الاعتماديات في deps)",
          "2. عند إزالة المكون نهائياً من شاشة المتصفح (Unmount)"
        ]
      }
    },
    {
      id: "7.2.e",
      title: "التعامل مع المؤقتات",
      englishTerm: "Working with Timers (setInterval & setTimeout)",
      description: "القواعد والأنماط المعمارية الصحيحة لاستخدام دوال التوقيت في JavaScript (مثل setInterval لتكرار العمليات دورياً، أو setTimeout لتأخير التنفيذ) داخل React. تتطلب المؤقتات تعاملاً خاصاً لحفظ معرف المؤقت (Timer ID) وتنظيفه بـ clearInterval أو clearTimeout لتفادي تسرب الذاكرة والحفاظ على دقة الوقت.",
      realLifeAnalogy: "مثل ضبط ساعة المنبه لتوقظك في الصباح؛ بعد أن تستيقظ وتنهض من سريرك، يجب أن تضغط زر إيقاف المنبه، وإلا سيستمر المنبه في الرنين وإزعاج الجيران طوال النهار وأنت لست في المنزل.",
      whyItMatters: "المؤقتات غير المنظفة هي المتهم الأول في بطء تطبيقات الويب واستهلاك بطارية أجهزة المستخدمين على الهواتف الذكية.",
      syntax: "useEffect(() => {\n  const timer = setInterval(() => {\n    // العمل الدوري هنا\n  }, 1000);\n  return () => clearInterval(timer);\n}, []);",
      simpleExample: `// ساعة توقيت رقمية بسيطة ومحمية بالتنظيف
import { useState, useEffect } from "react";

function SafeTimerDemo() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. بدء مؤقت يزيد ثانية كل 1000 ميلي ثانية
    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // 2. خطوة إلزامية: مسح المؤقت عند هدم المكون
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs font-mono">
      ⏱️ الثواني المنقضية: <span className="text-emerald-400 font-bold">{seconds}s</span>
    </div>
  );
}`,
      advancedExample: `// ساعة إيقاف متكاملة قابلة للتشغيل والإيقاف المؤقت والتصفير
import { useState, useEffect } from "react";

export function StopwatchPro() {
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;

    // لا نشغل المؤقت إلا إذا كانت حالة التشغيل true
    if (isRunning) {
      intervalId = setInterval(() => {
        setMilliseconds((prev) => prev + 10);
      }, 10);
    }

    // تنظيف المؤقت عند الإيقاف أو التبديل
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setMilliseconds(0);
  };

  // تنسيق الوقت
  const totalSeconds = Math.floor(milliseconds / 1000);
  const displayMs = Math.floor((milliseconds % 1000) / 10);
  const displaySec = totalSeconds % 60;
  const displayMin = Math.floor(totalSeconds / 60);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-sm mx-auto text-center">
      <h4 className="font-bold text-sm text-indigo-400">ساعة إيقاف احترافية (Stopwatch Pro)</h4>

      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 font-mono text-3xl font-black text-emerald-400 tracking-wider">
        {String(displayMin).padStart(2, "0")}:{String(displaySec).padStart(2, "0")}.{String(displayMs).padStart(2, "0")}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setIsRunning((r) => !r)}
          className={\`flex-1 py-2 rounded-xl text-xs font-bold transition-all \${
            isRunning 
              ? "bg-amber-600 hover:bg-amber-500 text-white" 
              : "bg-emerald-600 hover:bg-emerald-500 text-white"
          }\`}
        >
          {isRunning ? "إيقاف مؤقت ⏸️" : "تشغيل العداد ▶️"}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold border border-slate-700"
        >
          تصفير 🔄
        </button>
      </div>
    </div>
  );
}`,
      output: "تعمل ساعة الإيقاف بدقة 10 أجزاء من الثانية مع إمكانية الإيقاف المؤقت والاستئناف والتصفير مع تنظيف فوري لمؤقت الذاكرة في كل لحظة.",
      commonMistakes: [
        {
          mistake: "كتابة setSeconds(seconds + 1) داخل setInterval بدلاً من التحديث الوظيفي setSeconds(s => s + 1).",
          why: "بسبب ظاهرة الـ Stale Closure، تتجمد قيمة seconds داخل المؤقت عند القيمة 0، فيظل العداد يعرض 1 إلى الأبد ولن يزيد أبداً!",
          fix: "استخدم دائماً التحديث الوظيفي: setSeconds(prev => prev + 1) داخل المؤقتات."
        }
      ],
      bestPractices: [
        "استخدم دائماً التحديث الوظيفي prev => next داخل دوال التوقيت.",
        "احفظ مرجع المؤقت في متغير محلي ونظفه بـ clearInterval(id) في دالة الـ return."
      ],
      infographicCard: {
        type: "timer-rule",
        title: "الشرطان الذهبيان للمؤقتات في React",
        rules: [
          "1. التحديث الوظيفي: setCount(c => c + 1) لحل مشكلة Stale Closures.",
          "2. دالة التنظيف: return () => clearInterval(id) لمنع تسرب الذاكرة."
        ]
      }
    },
    {
      id: "7.2.f",
      title: "إضافة Event Listeners وإزالتها",
      englishTerm: "Adding & Removing Window/Document Event Listeners",
      description: "النمط الموصى به للاستماع لأحداث المتصفح العالمية التي لا تقع على عنصر JSX محدد (مثل: تغيير حجم النافذة window.onresize، التمرير window.onscroll، حركة الماوس العالمية mousemove، أو أحداث لوحة المفاتيح keydown). يتم تسجيل المستمع في useEffect وإزالته حتماً في دالة الـ Cleanup.",
      realLifeAnalogy: "مثل إعداد كاميرا مراقبة على مدخل المبنى العام؛ تقوم بتركيب الكاميرا عند افتتاح المبنى (addEventListener)، ولكن إذا قررت إغلاق المبنى وهدمه، يجب أن تفك الكاميرا وتوقف تسجيلها (removeEventListener) لمنع إهدار سعة التخزين والكهرباء.",
      whyItMatters: "يتيح بناء ميزات واجهات مستخدم مذهلة: مثل أشرطة التمرير التقدمية، النوافذ المنبثقة التي تغلق بمفتاح Escape، والقوائم التي تتجاوب مع اختصارات لوحة المفاتيح السريعة.",
      syntax: "useEffect(() => {\n  const handler = () => { ... };\n  window.addEventListener('scroll', handler);\n  return () => window.removeEventListener('scroll', handler);\n}, []);",
      simpleExample: `// إغلاق النافذة عند الضغط على زر Escape في لوحة المفاتيح
import { useState, useEffect } from "react";

function EscapeKeyDemo() {
  const [isAlertOpen, setIsAlertOpen] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // التحقق من الضغط على زر الهروب Escape
      if (e.key === "Escape") {
        setIsAlertOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      {isAlertOpen ? (
        <div className="p-3 bg-amber-500/20 border border-amber-500/40 rounded-lg text-amber-300 flex justify-between">
          <span>اضغط مفتاح [Escape] في لوحة المفاتيح لإغلاق هذا التنبيه فوراً!</span>
          <button onClick={() => setIsAlertOpen(false)}>✕</button>
        </div>
      ) : (
        <button onClick={() => setIsAlertOpen(true)} className="px-3 py-1 bg-indigo-600 rounded">
          إعادة فتح التنبيه
        </button>
      )}
    </div>
  );
}`,
      advancedExample: `// شريط تتبع تقدم التمرير في الصفحة (Scroll Progress Indicator)
import { useState, useEffect } from "react";

export function WindowScrollTracker() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const calculateScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollPercentage(Math.round(progress));
    };

    // تسجيل المستمع على كائن window العام
    window.addEventListener("scroll", calculateScroll, { passive: true });
    calculateScroll(); // الحساب المبدئي الفوري

    // تنظيف المستمع عند الخروج
    return () => window.removeEventListener("scroll", calculateScroll);
  }, []);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">عداد التمرير العالمي (Scroll Tracker)</h4>
        <span className="font-mono text-emerald-400 font-bold text-sm">{scrollPercentage}%</span>
      </div>

      <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
        <div
          style={{ width: \`\${scrollPercentage}%\` }}
          className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-150"
        />
      </div>

      <p className="text-[11px] text-slate-400">
        حرّك شريط تمرير الصفحة بالماوس؛ يستمع useEffect لحركة window.scroll ويعرض نسبة تقدم القراءة بمرونة فائقة.
      </p>
    </div>
  );
}`,
      output: "يقوم التطبيق بحساب موضع التمرير بالنسبة لارتفاع الصفحة في الوقت الفعلي مع إزالة المستمع فور هدم المكون لضمان صفر استهلاك للذاكرة.",
      commonMistakes: [
        {
          mistake: "تمرير دالة مجهولة لـ removeEventListener مختلفة عن دالة addEventListener مثل: window.removeEventListener('scroll', () => calculate()).",
          why: "الدالة السهمية الجديدة تمتلك مرجعاً مختلفاً في الذاكرة، مما يجعل المتصفح يفشل في العثور على المستمع الأصلي وإزالته!",
          fix: "عرف الدالة في متغير مستقل const handleScroll = () => { ... } واستخدم نفس المتغير في كل من addEventListener و removeEventListener."
        }
      ],
      bestPractices: [
        "استخدم { passive: true } مع أحداث scroll و touchmove لتحسين سلاسة التمرير في المتصفح.",
        "إذا كان الحدث يُطلق مئات المرات في الثانية (كـ mousemove أو resize)، فكر في استخدام تقنية Debouncing أو Throttling."
      ],
      infographicCard: {
        type: "event-binding-card",
        title: "التسجيل والإلغاء الصحيح لمستمعات الأحداث",
        steps: [
          "1. تعريف الدالة باسم مستقل: const onKey = (e) => ...",
          "2. التسجيل في بداية التأثير: window.addEventListener('keydown', onKey)",
          "3. الإلغاء بنفس المرجع تماماً: return () => window.removeEventListener('keydown', onKey)"
        ]
      }
    },
    {
      id: "7.2.g",
      title: "التعامل مع عمليات الاشتراك",
      englishTerm: "Subscriptions & WebSocket Handling in Effects",
      description: "النمط المعماري للاشتراك في مصادر البيانات الحية المباشرة (مثل: WebSockets، خوادم البث المباشر Server-Sent Events، أو واجهات Firebase / Supabase Realtime). يتم فتح قناة الاشتراك في بداية التأثير، والاستماع للرسائل الواردة لتحديث الحالة، وقطع القناة في دالة التنظيف Cleanup لمنع بقاء اتصالات يتيمة تستهلك الحزمة السحابية.",
      realLifeAnalogy: "مثل الاشتراك في خدمة توصيل الصحيفة اليومية إلى باب منزلك؛ تتصل بالشركة لتسجيل اشتراكك، وتستلم الصحيفة يومياً. وعندما تقرر الانتقال إلى مدينة أخرى، تتصل بالشركة لإلغاء الاشتراك (Unsubscribe) حتى لا يظل المندوب يلقي الصحف أمام باب منزل مهجور.",
      whyItMatters: "هو البنية التحتية لتطبيقات المحادثات الحية (Chat apps)، ولوحات متابعة أسعار العملات الرقمية والأسهم لحظة بلحظة، ومنصات الألعاب التفاعلية.",
      syntax: "useEffect(() => {\n  const socket = new WebSocket(url);\n  socket.onmessage = (event) => setData(JSON.parse(event.data));\n  return () => socket.close();\n}, [url]);",
      simpleExample: `// اشتراك مبسط في قناة بث أحداث وهمية
import { useState, useEffect } from "react";

function SimpleSubscriptionDemo() {
  const [livePrice, setLivePrice] = useState(150);

  useEffect(() => {
    // محاكاة اشتراك في بورصة أسهم
    const timer = setInterval(() => {
      // تحديث السعر بقيمة عشوائية
      setLivePrice(prev => prev + (Math.random() > 0.5 ? 2 : -2));
    }, 1500);

    // إلغاء الاشتراك عند الخروج
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs font-mono">
      سهم أبل المباشر: <span className="text-emerald-400 font-bold">\${livePrice}</span>
    </div>
  );
}`,
      advancedExample: `// محاكي متقدم لغرفة تداول عملات رقمية فورية مع فتح وإغلاق اتصال WebSocket بأمان
import { useState, useEffect } from "react";

export function CryptoTickerSubscription() {
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [priceHistory, setPriceHistory] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // 1. فتح قناة الاشتراك للعملة المحددة
    setIsSubscribed(true);
    const initialPrice = selectedCoin === "BTC" ? 94500 : selectedCoin === "ETH" ? 3400 : 180;
    
    // تسجيل نبضة أولية
    setPriceHistory([{ price: initialPrice, time: new Date().toLocaleTimeString() }]);

    // محاكاة رسائل واردة عبر WebSocket
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * (selectedCoin === "BTC" ? 200 : 15);
      const newPrice = Math.round(initialPrice + delta);

      setPriceHistory((prev) => [
        ...prev.slice(-3),
        { price: newPrice, time: new Date().toLocaleTimeString() }
      ]);
    }, 1200);

    // 2. دالة التنظيف: إغلاق اتصال القناة القديمة عند تبديل العملة
    return () => {
      clearInterval(interval);
      setIsSubscribed(false);
    };
  }, [selectedCoin]);

  const latestPrice = priceHistory[priceHistory.length - 1]?.price || 0;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">بث مباشر للعملات الرقمية (WebSocket)</h4>
        <span className={\`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold flex items-center gap-1.5 \${
          isSubscribed ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-800 text-slate-400"
        }\`}>
          <span className={\`w-2 h-2 rounded-full \${isSubscribed ? "bg-emerald-400 animate-pulse" : "bg-slate-500"}\`}></span>
          <span>{isSubscribed ? "بث حي نشط" : "مغلق"}</span>
        </span>
      </div>

      <div className="flex gap-2">
        {["BTC", "ETH", "SOL"].map((coin) => (
          <button
            key={coin}
            onClick={() => setSelectedCoin(coin)}
            className={\`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all border \${
              selectedCoin === coin
                ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-900/40"
                : "bg-slate-800 border-slate-700 text-slate-300"
            }\`}
          >
            {coin}
          </button>
        ))}
      </div>

      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-center font-mono">
        <span className="text-[10px] text-slate-400 block uppercase">{selectedCoin} السعر الحالي</span>
        <span className="text-3xl font-black text-emerald-400">\${latestPrice.toLocaleString()}</span>
      </div>
    </div>
  );
}`,
      output: "يقوم المكون ببث أسعار العملات في الوقت الفعلي؛ وعند تبديل العملة من BTC إلى ETH يغلق الاشتراك الأول فوراً ويفتح اشتراك العملة الجديدة دون أي تداخل في الأسعار.",
      commonMistakes: [
        {
          mistake: "تراكم الاشتراكات المزدوجة عند كل رندر بسبب غياب دالة التنظيف socket.close().",
          why: "إذا لم تقطع الاتصال في دالة التنظيف، ستبقى القناة مفتوحة، ومع كل رندر تنشئ قناة ثانية وثالثة، مما يسبب مضاعفة استهلاك البيانات ورسائل مكررة في الواجهة.",
          fix: "استدعِ دائماً socket.close() أو unsubscribe() في دالة إرجاع useEffect."
        }
      ],
      bestPractices: [
        "أغلق القناة المفتوحة دائماً في دالة الـ Cleanup.",
        "عالج حالات انقطاع الاتصال المفاجئ بإظهار شارة 'جارٍ إعادة الاتصال...' لتوفير تجربة مستخدم ممتازة."
      ],
      infographicCard: {
        type: "stream-diagram",
        title: "دورة حياة الاشتراك في البيانات الحية",
        steps: [
          "1. فتح القناة: ws.connect() أو subscribe()",
          "2. استقبال الرسائل: ws.onMessage(data => setState(data))",
          "3. الإغلاق والتنظيف: return () => ws.close() عند مغادرة الصفحة أو تبديل المعرف"
        ]
      }
    },
    {
      id: "7.2.h",
      title: "منع حالات السباق Race Conditions",
      englishTerm: "Preventing Race Conditions (Ignore Flag / AbortController)",
      description: "المعضلة الخبيثة التي تحدث عندما يقوم المستخدم بتغيير خياراته بسرعة (مثل النقر على المستخدم 1 ثم المستخدم 2 بسرعة فائقة). نظراً لأن استجابات الشبكة غير متزامنة وغير متوقعة في زمن وصولها، قد يستغرق طلب المستخدم 1 وقتاً أطول ويصل بعد وصول طلب المستخدم 2، مما يؤدي لعرض بيانات المستخدم 1 القديمة فوق الشاشة الحديثة! تُحل هذه المشكلة في React باستخدام متغير تجاهل محلي (Ignore Flag) أو عبر كائن الإلغاء القياسي (AbortController).",
      realLifeAnalogy: "مثل إرسال خطابين بالبريد إلى نفس الشخص؛ أرسلت الخطاب الأول في الصباح، ثم غيرت رأيك وأرسلت خطاباً ثانياً في الظهر. لو تأخر ساعي البريد وسلم الخطاب الأول بعد الخطاب الثاني، سيقرأ المستلم معلومات قديمة ملغاة ما لم تكن قد كتبت على الخطاب الثاني: 'تجاهل أي خطاب يحمل تاريخاً سابقاً لهذا الخطاب'.",
      whyItMatters: "حماية التطبيق من عرض بيانات خاطئة أو غير متطابقة للمستخدم عند البحث السريع أو التنقل بين علامات التبويب.",
      syntax: "// أسلوب متغير التجاهل Ignore Flag:\nuseEffect(() => {\n  let ignore = false;\n  fetchData(id).then(data => {\n    if (!ignore) setData(data);\n  });\n  return () => { ignore = true; };\n}, [id]);",
      simpleExample: `// مثال يوضح نمط راية التجاهل (Ignore Flag) البسيط
import { useState, useEffect } from "react";

function SafeFetchDemo({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // 1. إنشاء راية محلية في هذا الرندر المحدد
    let ignore = false;

    // محاكاة طلب شبكة يستغرق وقتاً
    setTimeout(() => {
      // 2. التحقق من الراية قبل تحديث الحالة
      if (!ignore) {
        setUserData(\`بيانات المستخدم رقم: \${userId}\`);
      }
    }, 1000);

    // 3. عند تغير userId يُنفذ التنظيف وتتحول الراية لـ true
    return () => {
      ignore = true;
    };
  }, [userId]);

  return <div className="text-xs text-white">النتيجة: {userData || "جارٍ الجلب..."}</div>;
}`,
      advancedExample: `// محاكاة واقعية لحالة السباق (Race Condition) وحلها باستخدام AbortController القياسي
import { useState, useEffect } from "react";

export function RaceConditionShield() {
  const [queryId, setQueryId] = useState("user-A");
  const [profile, setProfile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 1. إنشاء وحدة تحكم بالإلغاء AbortController
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    // محاكاة سرعات شبكة عشوائية لكل مستخدم
    const simulatedDelay = queryId === "user-A" ? 2500 : 800; // user-A بطيء جداً و user-B سريع!

    const timer = setTimeout(() => {
      // فحص إشارة الإلغاء
      if (!signal.aborted) {
        setProfile(\`الملف الشخصي النهائي: [\${queryId.toUpperCase()}] تم تسليمه بنجاح.\`);
        setIsLoading(false);
      }
    }, simulatedDelay);

    // 2. دالة التنظيف: إلغاء الطلب السابق فوراً إذا تغير queryId قبل وصول الرد
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [queryId]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">درع الحماية من حالات السباق (Race Condition)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          AbortController
        </span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setQueryId("user-A")}
          className={\`flex-1 py-2 rounded-xl text-xs font-bold transition-all border \${
            queryId === "user-A" ? "bg-indigo-600 border-indigo-500" : "bg-slate-800 border-slate-700"
          }\`}
        >
          طلب A (بطيء: 2.5 ثانية)
        </button>
        <button
          onClick={() => setQueryId("user-B")}
          className={\`flex-1 py-2 rounded-xl text-xs font-bold transition-all border \${
            queryId === "user-B" ? "bg-indigo-600 border-indigo-500" : "bg-slate-800 border-slate-700"
          }\`}
        >
          طلب B (سريع: 0.8 ثانية)
        </button>
      </div>

      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 min-h-[70px] flex items-center justify-center text-xs">
        {isLoading ? (
          <span className="text-amber-400 flex items-center gap-2">
            <span className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></span>
            جارٍ جلب البيانات بأمان...
          </span>
        ) : (
          <span className="text-emerald-400 font-mono font-bold">{profile}</span>
        )}
      </div>

      <p className="text-[10px] text-slate-400 leading-relaxed">
        💡 <strong>اختبار الذكاء:</strong> اضغط طلب A ثم اضغط فوراً طلب B! بفضل AbortController، يتم إلغاء طلب A ولن يستطيع الكتابة فوق شاشة طلب B أبداً.
      </p>
    </div>
  );
}`,
      output: "حتى لو تأخر طلب A في الشبكة، فإن دالة التنظيف تلغيه فور انتقال المستخدم إلى B، مما يضمن عرض نتيجة الطلب الأخير دائماً دون أي تشويش.",
      commonMistakes: [
        {
          mistake: "الاعتماد على أن الطلبات ستصل بالترتيب الذي أُرسلت به في الشبكة.",
          why: "شبكة الإنترنت غير متوقعة؛ طلب صغير قد يصل في 100ms وطلب كبير في 3000ms، مما يسبب كوارث اختلاط البيانات.",
          fix: "استخدم دائماً نمط let ignore = false أو AbortController مع كل طلب جلب في useEffect."
        }
      ],
      bestPractices: [
        "في التطبيقات الكبيرة، استخدم مكتبات إدارة الخوادم الذكية مثل TanStack Query (React Query) أو SWR؛ فهي تتكفل بحل مشكلة حالات السباق والتخزين المؤقت تلقائياً دون كتابة كود يدوي."
      ],
      infographicCard: {
        type: "race-diagram",
        title: "كيف يمنع نمط Ignore Flag حالات السباق؟",
        timeline: [
          "1. المستخدم يضغط زر العميل 1 (يبدأ طلب بطيء: ignore1 = false)",
          "2. المستخدم يغير رأيه فوراً ويضغط العميل 2",
          "3. تنظيف الرندر 1 ينطلق فوراً: ignore1 = true!",
          "4. عندما يصل رد العميل 1 متأخراً يجد ignore1 = true فيتم إهماله بسلام",
          "5. تُعرض فقط بيانات العميل 2 الحديثة والصحيحة 🎯"
        ]
      }
    },
    {
      id: "7.2.i",
      title: "فهم تشغيل Effects في Strict Mode",
      englishTerm: "Strict Mode Double Invocation (Setup -> Cleanup -> Setup)",
      description: "الميزة التعليمية والوقائية التي يفرضها وضع الصرامة (React StrictMode) في بيئة التطوير (Development Mode فقط). في بيئة التطوير، تقوم React بتشغيل دورة التأثير مرتين متتاليتين عند التركيب الأول للمكون: Setup -> Cleanup -> Setup. الهدف من هذا التشغيل المزدوج هو فحص كودك والتأكد من أن دالة التنظيف (Cleanup) تعمل بكفاءة تامة وتستطيع استعادة الحالة الأصلية دون تسرب أي اتصالات أو مؤقتات.",
      realLifeAnalogy: "مثل اختبار فحص الفرامل في مصنع السيارات؛ قبل تسليم السيارة للعميل، يضغط الفاحص دواسة الفرامل بقوة ثم يحررها ثم يضغطها مرة ثانية ليتأكد من أنها تستجيب وتعود لوضعها الطبيعي دون تعليق.",
      whyItMatters: "يحميك مبكراً من اكتشاف ثغرات تسرب الذاكرة ومشاكل الاشتراكات المزدوجة التي كان يصعب اكتشافها في بيئة الإنتاج.",
      syntax: "// في بيئة التطوير فقط مع <React.StrictMode>:\n// 1. تشغيل التأثير Setup\n// 2. تشغيل التنظيف Cleanup فوراً لاختبار قدرته على التصفير\n// 3. إعادة تشغيل التأثير Setup",
      simpleExample: `// مراقبة التشغيل المزدوج في وضع التطوير
import { useEffect } from "react";

function StrictModeProof() {
  useEffect(() => {
    console.log("1. مرحباً من Setup");

    return () => {
      console.log("2. وداعاً من Cleanup (اختبار الصرامة)");
    };
  }, []);

  return <div className="text-xs text-white">افتح الكونسول لمشاهدة التسلسل المزدوج في وضع التطوير!</div>;
}`,
      advancedExample: `// مكون تعليمي يوضح بصرياً دورة التشغيل المزدوج في StrictMode ولماذا لا يعتبر خطأً
export function StrictModeVisualExplainer() {
  const steps = [
    { name: "1. الإعداد الأول (Mount Setup)", desc: "يبدأ الاتصال أو المؤقت كما في الواقع.", color: "text-emerald-400" },
    { name: "2. فحص التنظيف التجريبي (Stress-Test Cleanup)", desc: "تقوم React فوراً بإلغاء كل شيء لاختبار دالة الـ return الخاصة بك.", color: "text-amber-400" },
    { name: "3. إعادة الإعداد الحقيقي (Remount Setup)", desc: "إعادة بناء الاتصال النهائي للاستمرار في العمل.", color: "text-sky-400" }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">سلوك Strict Mode في التطوير</h4>
        <span className="text-[10px] font-mono bg-amber-950 text-amber-300 px-2 py-0.5 rounded">
          Dev Only (Not in Production)
        </span>
      </div>

      <div className="space-y-2">
        {steps.map((st, i) => (
          <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
            <span className={\`font-bold \${st.color}\`}>{st.name}</span>
            <p className="text-[11px] text-slate-400">{st.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 text-[11px] text-slate-300">
        💡 <strong>قاعدة ذهبية:</strong> إذا انكسر كودك بسبب التشغيل المزدوج في StrictMode، فهذا دليل قاطع على أن دالة التنظيف Cleanup لديك ناقصة أو مكتوبة بشكل خاطئ وتحتاج لإصلاحها، ولا يعني وجود خلل في React!
      </div>
    </div>
  );
}`,
      output: "يوضح المكون أن التشغيل المزدوج هو ميزة أمان وحماية تعمل فقط في بيئة التطوير، وتختفي تماماً وتعمل مرة واحدة طبيعية في بيئة الإنتاج (Production Build).",
      commonMistakes: [
        {
          mistake: "محاولة استخدام متغيرات useRef لمنع التشغيل المزدوج وإجبار التأثير على العمل مرة واحدة في StrictMode.",
          why: "هذا يعطل الفحص الأمني لـ React ويخفي المشكلة الحقيقية المتمثلة في نسيان كتابة دالة Cleanup سليمة!",
          fix: "اكتب دالة تنظيف متوازنة تعيد الحالة كما كانت (Symmetrical cleanup) بدلاً من التحايل على المحرك."
        }
      ],
      bestPractices: [
        "تأكد دائماً أن التأثير قابل للإلغاء وإعادة التشغيل (Resilient to remounting).",
        "لا تعطل <React.StrictMode> في ملف main.jsx؛ فهو أفضل صديق لحمايتك من الأخطاء الخفية."
      ],
      infographicCard: {
        type: "flow-badge",
        title: "تسلسل Strict Mode المزدوج",
        flow: [
          "Setup 🟢 -> Cleanup 🟡 -> Setup 🔵",
          "فقط في التطوير (Development) لضمان متانة الكود وجودته!"
        ]
      }
    },
    {
      id: "7.2.j",
      title: "تجنب حلقات التحديث اللانهائية",
      englishTerm: "Avoiding Infinite Update Loops in useEffect",
      description: "الكابوس البرمجي الأكثر شهرة للمبتدئين في React؛ عندما يؤدي تنفيذ useEffect إلى استدعاء دالة تحديث حالة (setState)، مما يطلق رندراً جديداً، فيتسبب الرندر في إعادة تشغيل useEffect مجدداً، ليعيد استدعاء setState، فيدخل التطبيق في حلقة مفرغة لا تنتهي حتى يجمد المتصفح بالكامل ويظهر خطأ: Maximum update depth exceeded.",
      realLifeAnalogy: "مثل وضع مرآتين متقابلتين وجهاً لوجه؛ ترى انعكاس المرآة الأولى في الثانية، وانعكاس الثانية في الأولى، إلى ما لا نهاية في نفق بصري لانهائي يستهلك النظر.",
      whyItMatters: "حماية استقرار التطبيق ومنع انهيار حواسيب وهواتف المستخدمين وتفادي استهلاك باقات الإنترنت بالكامل في ثوانٍ معدودة.",
      syntax: "// ❌ حلقة لانهائية قاتلة:\nuseEffect(() => {\n  setCount(count + 1); // يطلق رندراً يعيد تشغيل التأثير!\n}); // نسيان مصفوفة الاعتماديات!",
      simpleExample: `// مثال يوضح كيف تقع الحلقة اللانهائية وكيف تُكسر فوراً
import { useState, useEffect } from "react";

function InfiniteLoopRescue() {
  const [count, setCount] = useState(0);

  // ✅ الكود السليم: إضافة مصفوفة اعتماديات فارغة يكسر الحلقة وينفذ التأثير مرة واحدة فقط
  useEffect(() => {
    // محاكاة تهيئة أولية
    setCount(10);
  }, []); // [] تضمن التوقف وعدم الدوران!

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs">
      العداد محمي من الدوران اللانهائي: <span className="text-emerald-400 font-bold">{count}</span>
    </div>
  );
}`,
      advancedExample: `// أداة كشف أسباب الحلقات اللانهائية الثلاثة الأكثر شيوعاً وحلولها الجذرية
export function InfiniteLoopAnatomyGuide() {
  const loopCauses = [
    {
      title: "1. نسيان مصفوفة الاعتماديات تماماً",
      bad: "useEffect(() => { setCount(c + 1); }); // بدون []",
      why: "يتم تشغيل التأثير بعد كل رندر، وتحديث الحالة يطلق رندراً جديداً = حلقة لانهائية!",
      fix: "أضف مصفوفة اعتماديات محددة [count] أو []."
    },
    {
      title: "2. تمرير كائن أو مصفوفة جديدة في [deps]",
      bad: "useEffect(() => { ... }, [{ id: 1 }]); // كائن جديد في كل رندر!",
      why: "في كل رندر يُنشأ كائن جديد بعنوان ذاكرة مختلف، فتعتقد React أن الاعتماديات تغيرت دائماً!",
      fix: "مرر القيم الأولية: [item.id] أو استخدم useMemo."
    },
    {
      title: "3. تحديث مصفوفة الحالة المشتقة بداخل التأثير",
      bad: "useEffect(() => { setTotal(price * qty); }, [price, qty]);",
      why: "رندر مزدوج لا داعي له قد يتداخل ويدخل في حلقة تكرار.",
      fix: "احسبها فوراً في جسم المكون: const total = price * qty; بلا أي useEffect!"
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-rose-400">التشريح الجنائي للحلقات اللانهائية في useEffect</h4>

      <div className="space-y-3">
        {loopCauses.map((cause, i) => (
          <div key={i} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-1">
            <h5 className="font-bold text-slate-100">{cause.title}</h5>
            <div className="p-2 bg-rose-950/20 border border-rose-900/40 rounded-lg text-rose-300 font-mono text-[10px]">
              {cause.bad}
            </div>
            <p className="text-[11px] text-slate-400">{cause.why}</p>
            <div className="p-1.5 bg-emerald-950/20 rounded-lg text-emerald-400 font-mono text-[10px]">
              ✅ الحل: {cause.fix}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يقدم المكون دليلاً قاطعاً يوضح الأسباب الجذرية الثلاثة للحلقات اللانهائية وكيفية تجنبها بقواعد هندسية نظيفة.",
      commonMistakes: [
        {
          mistake: "استدعاء دالة تجلب بيانات من الخادم وتقوم بعمل setState داخل useEffect بدون مصفوفة اعتماديات.",
          why: "هذا يرسل ملايين طلبات الـ HTTP في دقائق معدودة مما يؤدي لحظر عنوان IP الخاص بك من الخوادم وتوقف موقعك!",
          fix: "ضع دائماً مصفوفة اعتماديات [] أو [id] مع أي طلب جلب بيانات في useEffect."
        }
      ],
      bestPractices: [
        "لا تستدعِ setState داخل useEffect أبداً إذا كان يمكنك حساب القيمة مباشرة أثناء الرندر.",
        "احرص دائماً على وجود المعامل الثاني لـ useEffect (المصفوفة [])."
      ],
      infographicCard: {
        type: "danger-loop",
        title: "حلقة الموت اللانهائية (Infinite Loop of Death)",
        loop: [
          "1. رندر المكون",
          "2. تشغيل useEffect",
          "3. استدعاء setState()",
          "4. إعادة رندر المكون -> العودة للخطوة 1 وتكرار المأساة إلى ما لا نهاية!"
        ]
      }
    },
    {
      id: "7.2.k",
      title: "متى لا تحتاج إلى useEffect",
      englishTerm: "When You Don't Need useEffect (Think Declarative)",
      description: "المقال والتوجيه الأكثر تأثيراً في توثيق React الرسمي الحديث تحت عنوان 'You Might Not Need an Effect'. يوضح الحالات الشائعة التي يفرط فيها المطورون في استخدام useEffect بينما يوجد حل أبسط وأنظف وأسرع بكثير: 1) تحويل البيانات والحسابات الرياضية لا تحتاج useEffect (احسبها أثناء الرندر مباشرة)، 2) معالجة تفاعلات المستخدم كالنقر والإرسال مكانها معالجات الأحداث (Event Handlers) وليس useEffect، 3) تصفير نماذج الإدخال مكانه خاصية key وليس useEffect.",
      realLifeAnalogy: "مثل استخدام رافعة أثقال عملاقة بقدرة 50 طناً فقط لرفع فنجان قهوة من الطاولة إلى فمك! يمكنك رفع الفنجان بيدك في ثانية واحدة دون تشغيل آلات هيدروليكية معقدة.",
      whyItMatters: "حذف الـ useEffects غير اللازمة يسرع التطبيق بمقدار الضعف، ويقلل حجم الأكواد بنسبة تزيد عن 30%، ويقضي على أخطاء التضارب تماماً.",
      syntax: "// ❌ غير لازم ومفرط:\nuseEffect(() => { setFiltered(items.filter(...)); }, [items]);\n\n// ✅ نظيف وفوري في سطر واحد:\nconst filtered = items.filter(...);",
      simpleExample: `// مثال يوضح الاستغناء التام عن useEffect
import { useState } from "react";

function NoEffectNeededDemo() {
  const [firstName, setFirstName] = useState("خالد");
  const [lastName, setLastName] = useState("الروقي");

  // ✅ لا نحتاج useEffect إطلاقاً لمزامنة الاسم الكامل!
  const fullName = \`\${firstName} \${lastName}\`;

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs">
      الاسم الكامل المحسوب مباشرة: <strong className="text-emerald-400">{fullName}</strong>
    </div>
  );
}`,
      advancedExample: `// دليل مقارنة الحالات الأربع الكبرى للاستغناء عن useEffect
export function YouMightNotNeedAnEffectMatrix() {
  const cases = [
    {
      situation: "1. تحويل أو فرز أو تصفية البيانات (Filtering/Sorting)",
      badWay: "تخزين النتائج في state واستخدام useEffect لتصفيتها عند تغير القائمة.",
      goodWay: "احسبها مباشرة في جسم المكون: const filtered = list.filter(...) (أو بـ useMemo إذا كانت ضخمة جداً)."
    },
    {
      situation: "2. تفاعلات ونوايا المستخدم (User Actions)",
      badWay: "وضع flag في state وتفعيل useEffect لإظهار إشعار 'تم الشراء بنجاح'.",
      goodWay: "ضع الإشعار والمنطق داخل معالج حدث النقر نفسه: handleBuyClick()."
    },
    {
      situation: "3. تصفير النموذج عند اختيار مستخدم آخر",
      badWay: "كتابة useEffect يستمع لـ userId ويقوم بتصفير كل الحقول يدوياً.",
      goodWay: "مرر خاصية key={userId} على المكون الأب ليقوم المحرك بتصفيره تلقائياً."
    },
    {
      situation: "4. إبلاغ المكون الأب بتغير الحالة",
      badWay: "استخدام useEffect لاستدعاء props.onChange(state) في كل مرة تتغير فيها الحالة.",
      goodWay: "استدعِ دالة الأب في نفس اللحظة التي تُحدث فيها الحالة في معالج الحدث."
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">متى لا تحتاج إلى useEffect؟ (فلسفة التفكير النقي)</h4>

      <div className="space-y-3">
        {cases.map((cs, i) => (
          <div key={i} className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-1.5">
            <h5 className="font-bold text-slate-100">{cs.situation}</h5>
            <p className="text-[11px] text-rose-400 bg-rose-950/20 p-2 rounded-lg border border-rose-900/30">
              ❌ أسلوب رديء: {cs.badWay}
            </p>
            <p className="text-[11px] text-emerald-400 bg-emerald-950/20 p-2 rounded-lg border border-emerald-900/30">
              ✅ الأسلوب الذهبي: {cs.goodWay}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يقدم المكون مرجعاً فلسفياً صارماً يساعد المطور على التوقف عن إقحام useEffect في كل شاردة وواردة والاعتماد على الحسابات النقية ومعالجات الأحداث.",
      commonMistakes: [
        {
          mistake: "استخدام useEffect كأول أداة تخطر على البال بمجرد التفكير في ربط متغيرين.",
          why: "هذا ناتج عن عادات قديمة من عصر componentDidUpdate؛ في React الحديثة، الحسابات الفورية أثناء الرندر أسرع وأكثر استقراراً.",
          fix: "اسأل نفسك دائماً: هل يمكنني حساب هذه القيمة مباشرة في جسم الدالة؟ إذا كانت الإجابة نعم، احذف useEffect فوراً."
        }
      ],
      bestPractices: [
        "استخدم useEffect فقط عندما يكون هناك نظام خارجي (External System) يتطلب مزامنة حقيقية.",
        "احصر معالجة إجراءات المستخدم (User Interactions) داخل الـ Event Handlers المباشرة."
      ],
      infographicCard: {
        type: "filter-decision",
        title: "فلتر القرار: هل تحتاج حقاً إلى useEffect؟",
        questions: [
          "هل تقوم بحساب بيانات من props أو state؟ -> لا تحتاج (احسبها فوراً)",
          "هل المنطق ناتج عن نقرة زر أو إرسال نموذج؟ -> لا تحتاج (ضعه في معالج الحدث)",
          "هل تريد تصفير الحقول لكيان جديد؟ -> لا تحتاج (استخدم key)",
          "هل تقوم بمزامنة مع خادم خارجي أو مؤقت أو واجهة متصفح؟ -> نعم تحتاج useEffect! 🎯"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q7-2-1",
      question: "ماذا يعني تمرير مصفوفة اعتماديات فارغة [] كمعامل ثانٍ لخطاف useEffect؟",
      options: [
        "أن التأثير لن يُنفذ على الإطلاق طوال حياة المكون",
        "أن التأثير سيُنفذ مرة واحدة فقط عند تركيب المكون (Mount) ولن يُعاد تشغيله عند الرندرات اللاحقة",
        "أن التأثير سيُنفذ بعد كل ميكروثانية باستمرار",
        "أنه سيتم حذف المكون من الذاكرة فوراً"
      ],
      correctAnswer: 1,
      explanation: "المصفوفة الفارغة [] تعني عدم وجود أي متغيرات يعتمد عليها التأثير؛ وبالتالي تُنفذه React مرة واحدة فقط عند ظهور المكون في المتصفح أول مرة، ولا تعيد تشغيله إلا إذا تم هدم المكون وتركيبه مجدداً."
    },
    {
      id: "q7-2-2",
      question: "متى يتم استدعاء دالة التنظيف (Cleanup Function) المرجعة من useEffect؟",
      options: [
        "في بداية كل رندر قبل قراءة الـ JSX",
        "قبل تنفيذ التأثير الجديد مباشرة (عند تغير الاعتماديات) وعند إزالة المكون نهائياً من الشاشة (Unmount)",
        "فقط إذا حدث خطأ برمجي أحمر في التطبيق",
        "في وقت إغلاق متصفح الويب بالكامل"
      ],
      correctAnswer: 1,
      explanation: "تُنفذ دالة التنظيف لتصفية مخلفات التأثير السابق قبل انطلاق التأثير التالي، وأيضاً عند إزالة المكون من شجرة العناصر (Unmounting) لمنع تسرب الذاكرة."
    },
    {
      id: "q7-2-3",
      question: "كيف تحل مشكلة حالات السباق (Race Conditions) عند جلب البيانات في useEffect؟",
      options: [
        "باستخدام دالة sleep لإبطاء التطبيق",
        "باستخدام راية تجاهل محلية (let ignore = false) وتفعيلها في دالة التنظيف، أو باستخدام AbortController لإلغاء الطلب السابق",
        "بحذف دالة useEffect واستبدالها بحلقة for",
        "بمنع المستخدم من النقر السريع عبر إخفاء الماوس"
      ],
      correctAnswer: 1,
      explanation: "نمط راية التجاهل (Ignore Flag) أو AbortController يضمن أنه في حال تغير المدخلات ووصول رد قديم متأخر في الشبكة، يتم إهماله فوراً وعدم تحديث الشاشة به."
    }
  ],
  exercise: {
    id: "ex7-2",
    title: "بناء تطبيق مراقبة الاتصال الشبكي مع تنظيف كامل ومنع حالات السباق",
    description: "المطلوب بناء مكون React تفاعلي باسم NetworkStatusAndDataHub يقوم بالآتي: 1) الاستماع لحالة اتصال الإنترنت في المتصفح عبر أحداث window.online و window.offline مع تنظيف المستمعات في دالة الـ return، 2) جلب تفاصيل مستخدم محدد مع استخدام AbortController لمنع حالات السباق عند التبديل السريع بين المستخدمين، 3) ساعة توقيت رقمية نشطة مع تنظيف clearInterval لمنع تسرب الذاكرة.",
    starterCode: `export function NetworkStatusAndDataHub() {
  // اكتب كود المزامنة والتنظيف هنا
  return (
    <div>
      {/* صمم واجهة المركز */}
    </div>
  );
}`,
    hints: [
      "في تأثير حالة الشبكة: استمع لـ window.addEventListener('online') ونظف بـ removeEventListener.",
      "في تأثير جلب المستخدم: استخدم AbortController واضبط signal في طلب الجلب ونظف بـ controller.abort().",
      "في تأثير العداد: استخدم setInterval مع التحديث الوظيفي prev => prev + 1 ونظف بـ clearInterval."
    ],
    solution: `import { useState, useEffect } from "react";

export function NetworkStatusAndDataHub() {
  // 1. حالة الاتصال بالإنترنت
  const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);

  // 2. حالة العداد الآمن
  const [activeSeconds, setActiveSeconds] = useState(0);

  // 3. حالة جلب المستخدم المختار
  const [selectedId, setSelectedId] = useState("u-1");
  const [userData, setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // التأثير 1: مراقبة حالة اتصال المتصفح بالإنترنت مع التنظيف
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // التأثير 2: مؤقت زمني نظيف مع استخدام التحديث الوظيفي
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // التأثير 3: جلب بيانات المستخدم مع درع الحماية من حالات السباق (AbortController)
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);

    const mockProfiles = {
      "u-1": { name: "المهندس فيصل الشهري", role: "قائد فريق البنية التحتية", speed: 1200 },
      "u-2": { name: "الدكتورة مريم العازمي", role: "أخصائية ذكاء اصطناعي", speed: 400 },
      "u-3": { name: "الأستاذ زياد المطيري", role: "مصمم تجربة مستخدم", speed: 2000 }
    };

    const targetUser = mockProfiles[selectedId];

    // محاكاة جلب غير متزامن
    const timerId = setTimeout(() => {
      if (!signal.aborted) {
        setUserData(\`\${targetUser.name} - \${targetUser.role}\`);
        setIsLoading(false);
      }
    }, targetUser.speed);

    return () => {
      controller.abort();
      clearTimeout(timerId);
    };
  }, [selectedId]);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-5 max-w-md mx-auto font-sans shadow-2xl">
      {/* رأس الصفحة مع شارة الاتصال العالمية */}
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-black text-slate-100">مركز المزامنة والشبكة</h3>
          <p className="text-[11px] text-slate-400">تطبيق عملي لمستمعات الأحداث و AbortController والمؤقتات</p>
        </div>
        <span className={\`text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 \${
          isOnline ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
        }\`}>
          <span className={\`w-2 h-2 rounded-full \${isOnline ? "bg-emerald-400 animate-pulse" : "bg-rose-400"}\`}></span>
          <span>{isOnline ? "متصل بالإنترنت" : "أوفلاين"}</span>
        </span>
      </div>

      {/* العداد الرقمي النظيف */}
      <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center text-xs font-mono">
        <span className="text-slate-400">زمن الجلسة النشطة (setInterval):</span>
        <span className="text-indigo-400 font-bold text-sm">{activeSeconds} ثانية</span>
      </div>

      {/* أزرار التبديل السريع لاختبار حالات السباق */}
      <div className="space-y-2">
        <label className="text-xs text-slate-300 font-bold">بدل بين الأعضاء بسرعة لاختبار AbortController:</label>
        <div className="flex gap-2">
          {["u-1", "u-2", "u-3"].map((id) => (
            <button
              key={id}
              onClick={() => setSelectedId(id)}
              className={\`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all border \${
                selectedId === id
                  ? "bg-indigo-600 border-indigo-500 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-300"
              }\`}
            >
              عضو {id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* عرض البيانات مع مؤشر التحميل */}
      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 min-h-[60px] flex items-center justify-center text-xs">
        {isLoading ? (
          <span className="text-amber-400 flex items-center gap-2">
            <span className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></span>
            جارٍ جلب الملف الشخصي بأمان...
          </span>
        ) : (
          <span className="text-emerald-400 font-bold">{userData}</span>
        )}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان useEffect والآثار الجانبية",
    description: "الدليل المرئي الشامل للمزامنة النظيفة، مصفوفة الاعتماديات، وإلغاء التسربات.",
    sections: [
      {
        heading: "1. قواعد الاعتماديات (Dependencies Rules)",
        bullets: [
          "المصفوفة الفارغة []: رندر البداية فقط (Mount).",
          "المصفوفة المشروطة [a, b]: عند التركيب وكلما تغيرت قيمة a أو b.",
          "الأمانة التامة: ضع كل متغير مستخدم في التأثير داخل المصفوفة."
        ]
      },
      {
        heading: "2. ميثاق التنظيف (The Cleanup Pact)",
        bullets: [
          "تصفية المؤقتات: clearInterval و clearTimeout في دالة الـ return.",
          "إلغاء المستمعات: removeEventListener بنفس مرجع الدالة تماماً.",
          "حظر حالات السباق: استخدام AbortController أو Ignore Flag لإهمال الردود القديمة."
        ]
      },
      {
        heading: "3. ترشيد استخدام التأثيرات (When NOT to use)",
        bullets: [
          "حساب البيانات: احسبها أثناء الرندر في سطر واحد دون الحاجة لـ useEffect.",
          "تفاعلات الأزرار: مكانها معالجات الأحداث (onClick) المباشرة.",
          "تصفير النماذج: استخدم خاصية key={id} لتصفير المكون تلقائياً."
        ]
      }
    ]
  }
};
