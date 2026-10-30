// src/data/sections/section6/topic4.js
// الموضوع 4: مشاركة الحالة بين المكونات (Sharing State, Lifting State Up & Controlled Components)

export const SECTION_6_TOPIC_4 = {
  id: "6.4",
  title: "مشاركة الحالة بين المكونات",
  englishTerm: "Sharing State Between Components",
  description: "الأنماط المعمارية لتوزيع البيانات ومزامنتها: رفع الحالة للأب المشترك (Lifting State Up)، تمرير دوال التحديث، التمييز الصارم بين المكونات المضبوطة (Controlled) وغير المضبوطة، وتجنب فخ الحالة المشتقة المكررة.",
  subtopics: [
    {
      id: "6.4.a",
      title: "تمرير State عبر Props",
      englishTerm: "Passing State Down as Props",
      description: "النمط الأساسي لتدفق البيانات أحادي الاتجاه (Unidirectional Data Flow) في React. يقوم المكون الأب بامتلاك الحالة (State Owner)، ثم يمرر قيمتها كخاصية عادية (Props) إلى المكونات الأبناء ليقوموا بعرضها. عندما تتغير الحالة في الأب، تتدفق القيمة الجديدة تلقائياً إلى كافة الأبناء وتُحدث واجهاتهم.",
      realLifeAnalogy: "مثل خزان المياه المركزي في سطح العمارة السكنية؛ الخزان هو المالك الأصلي للمياه (State Holder)، وتنحدر منه أنابيب المياه (Props) لتغذية كل الشقق في الأدوار السفلية بالماء النقي بانتظام.",
      whyItMatters: "يحافظ على مركزية مصدر الحقيقة للبيانات (Single Source of Truth)؛ بدلاً من أن يمتلك كل مكون نسخته المتضاربة من البيانات، يمتلك الأب الحقيقة الكاملة ويوزعها بعدالة.",
      syntax: "// الأب يملك الحالة ويمررها للابن كخاصية\nconst [score, setScore] = useState(100);\n<ScoreBoard currentScore={score} />",
      simpleExample: `// استيراد useState
import { useState } from "react";

// مكون الابن: يستقبل الحالة كخاصية ويعرضها كنص نقي
function DisplayCard({ textValue }) {
  return (
    <div className="p-3 bg-slate-800 rounded-lg text-emerald-400 font-mono text-xs">
      القيمة المستلمة من الأب: {textValue}
    </div>
  );
}

// مكون الأب: يمتلك الحالة ويمررها للابن
function StateProviderParent() {
  const [message, setMessage] = useState("أهلاً بكم في عالم React!");

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3">
      <button 
        onClick={() => setMessage("تم تحديث الرسالة بنجاح!")}
        className="px-3 py-1 bg-indigo-600 rounded text-xs font-bold"
      >
        تحديث رسالة الأب
      </button>
      {/* تمرير الحالة message كخاصية للابن */}
      <DisplayCard textValue={message} />
    </div>
  );
}`,
      advancedExample: `// نظام مراقبة خوادم سحابي يوزع الحالة المركزية على عدة بطاقات فرعية متخصصة
import { useState } from "react";

// مكون فرعي 1: شارة حالة الخادم
function ServerStatusBadge({ isOnline }) {
  return (
    <div className={\`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 \${
      isOnline ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
    }\`}>
      <span className={\`w-2 h-2 rounded-full \${isOnline ? "bg-emerald-400 animate-pulse" : "bg-rose-400"}\`}></span>
      <span>{isOnline ? "الخادم يعمل بكفاءة" : "الخادم متوقف عن العمل"}</span>
    </div>
  );
}

// مكون فرعي 2: لوحة قياس استخدام الموارد
function ResourceGauge({ percentage }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-slate-400">ضغط المعالج (CPU):</span>
        <span className="font-mono text-indigo-400 font-bold">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <div 
          style={{ width: \`\${percentage}%\` }}
          className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 transition-all duration-300"
        />
      </div>
    </div>
  );
}

// مكون الأب المركزي: يمتلك حالة المنظومة ويغذي الأبناء
export function CloudServerMonitor() {
  const [serverState, setServerState] = useState({
    isOnline: true,
    cpuUsage: 42
  });

  const toggleServer = () => {
    setServerState((prev) => ({ ...prev, isOnline: !prev.isOnline }));
  };

  const simulateLoad = () => {
    setServerState((prev) => ({
      ...prev,
      cpuUsage: Math.floor(Math.random() * 60) + 30
    }));
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">غرفة العمليات السحابية</h4>
        <ServerStatusBadge isOnline={serverState.isOnline} />
      </div>

      <ResourceGauge percentage={serverState.cpuUsage} />

      <div className="flex gap-2 pt-2">
        <button
          onClick={toggleServer}
          className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all"
        >
          {serverState.isOnline ? "إيقاف الخادم 🛑" : "تشغيل الخادم ⚡"}
        </button>
        <button
          onClick={simulateLoad}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-900/40"
        >
          محاكاة زيادة الضغط 📈
        </button>
      </div>
    </div>
  );
}`,
      output: "المكون الأب يمتلك كائن الحالة كاملاً، ويوزع isOnline للابن الأول و cpuUsage للابن الثاني؛ وعند النقر على الأزرار تتحدث شاشات الأبناء المتخصصة فوراً بتناغم كامل.",
      commonMistakes: [
        {
          mistake: "محاولة نسخ الحالة المستلمة كخاصية إلى useState داخل المكون الابن مثل: const [myVal, setMyVal] = useState(props.textValue).",
          why: "هذا يخلق حالة مكررة وميتة (Stale Duplicate State)؛ فالقيمة الابتدائية لـ useState تُنفذ مرة واحدة فقط عند الرندر الأول، ولن يتحدث المكون الابن إذا تغيرت قيمة props.textValue في الأب لاحقاً!",
          fix: "استخدم props.textValue مباشرة في الابن دون تخزينها في useState إضافي داخل الابن."
        }
      ],
      bestPractices: [
        "مرر فقط الخصائص التي يحتاجها الابن فعلياً دون تمرير كائن الحالة الضخم بالكامل إذا لم تكن هناك حاجة له.",
        "اجعل مكونات العرض (Presentational Components) غبية ونقية (Dumb Components) تعتمد فقط على الـ Props الواردة إليها."
      ],
      infographicCard: {
        type: "flow-down",
        title: "انحدار الحالة أحادي الاتجاه (Unidirectional Flow)",
        levels: [
          "👑 المكون الأب: يمتلك الحالة الحقيقية [data, setData] = useState()",
          "   ▼ تمرير عبر الخصائص: <ChildWidget data={data} />",
          "👶 المكون الابن: يستقبل الخصائص للقراءة فقط ويعرضها في الشاشة"
        ]
      }
    },
    {
      id: "6.4.b",
      title: "تمرير دوال تحديث الحالة",
      englishTerm: "Passing State Updater Callbacks Down",
      description: "الآلية التي تسمح للمكون الابن بالتواصل مع المكون الأب وطلب تعديل حالته. نظراً لأن الخصائص Props للقراءة فقط ولا يمكن للابن تغيير حالة الأب مباشرة، يمرر الأب دالة استدعاء (Callback Function) إلى الابن كخاصية، فيقوم الابن باستدعاء هذه الدالة عند وقوع حدث معين لديه.",
      realLifeAnalogy: "مثل جهاز الاتصال اللاسلكي (Walkie-Talkie) المعطى لحارس الأمن عند البوابة؛ الحارس لا يملك مفاتيح الخزينة المركزية في الشركة، ولكنه يضغط زر الاتصال ليطلب من المدير في الإدارة العليا فتح البوابة لسيارة معينة.",
      whyItMatters: "يحافظ على سلامة تدفق البيانات ويمنح المكونات الفرعية القدرة على إطلاق إجراءات وتفاعلات دون كسر مبدأ النقاء وحظر التعديل المباشر.",
      syntax: "// الأب يمرر دالة التحديث كخاصية\n<ActionButton onTrigger={() => setCount(c => c + 1)} />",
      simpleExample: `// مكون الابن: يستقبل دالة التحديث وينفذها عند النقر
function ChildTrigger({ onIncrement }) {
  return (
    <button 
      onClick={onIncrement}
      className="px-3 py-1.5 bg-emerald-600 text-white rounded text-xs font-bold"
    >
      زيادة عداد الأب من الابن +
    </button>
  );
}

// مكون الأب: يعرف الحالة ويمرر دالتها للابن
function CallbackParentDemo() {
  const [total, setTotal] = useState(0);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3">
      <h3 className="text-sm font-bold">العداد في الأب: {total}</h3>
      {/* تمرير دالة تحديث الحالة كخاصية onIncrement */}
      <ChildTrigger onIncrement={() => setTotal(t => t + 1)} />
    </div>
  );
}`,
      advancedExample: `// لوحة إدارة إشعارات النظام مع تفويض دوال الحذف والتصفير للأبناء
import { useState } from "react";

// مكون عنصر الإشعار الفردي يستقبل دالة الحذف الخاصة به
function NotificationCard({ item, onDismiss }) {
  return (
    <div className="flex justify-between items-center p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs">
      <div>
        <p className="font-bold text-slate-200">{item.title}</p>
        <span className="text-[10px] text-slate-400 font-mono">{item.time}</span>
      </div>
      {/* استدعاء دالة الأب وتمرير معرف الإشعار */}
      <button
        onClick={() => onDismiss(item.id)}
        className="text-slate-400 hover:text-rose-400 p-1 rounded-lg text-xs"
        title="تجاهل التنبيه"
      >
        ✕
      </button>
    </div>
  );
}

// مكون الأب الحاوي لقائمة الإشعارات
export function NotificationHub() {
  const [notifications, setNotifications] = useState([
    { id: "notif-1", title: "تم تسجيل الدخول بنجاح", time: "منذ دقيقتين" },
    { id: "notif-2", title: "فاتورة مشتريات جديدة متاحة", time: "منذ 10 دقائق" },
    { id: "notif-3", title: "تحديث أمني جديد للمنصة", time: "منذ ساعة" }
  ]);

  // دالة الحذف التي ستُمرر للأبناء
  const handleDismiss = (notifId) => {
    setNotifications((prev) => prev.filter((n) => n.id !== notifId));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h4 className="font-bold text-sm text-indigo-400">مركز الإشعارات ({notifications.length})</h4>
          <span className="text-[10px] text-slate-400">تفويض دوال الـ Callbacks للأبناء</span>
        </div>
        {notifications.length > 0 && (
          <button
            onClick={handleClearAll}
            className="text-xs text-rose-400 hover:text-rose-300 font-semibold"
          >
            مسح الكل
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <p className="text-xs text-center text-slate-500 py-6">لا توجد إشعارات جديدة حالياً.</p>
      ) : (
        <div className="space-y-2">
          {notifications.map((item) => (
            <NotificationCard
              key={item.id}
              item={item}
              onDismiss={handleDismiss}
            />
          ))}
        </div>
      )}
    </div>
  );
}`,
      output: "ينقر المستخدم على زر ✕ في المكون الابن NotificationCard، فيستدعي الدالة onDismiss الممررة من الأب مع معرّف العنصر، فيقوم الأب بحذف الإشعار وإعادة رندر القائمة بانسيابية تامة.",
      commonMistakes: [
        {
          mistake: "استدعاء دالة الـ Callback فوراً أثناء تمريرها كـ prop مثل: <Child onSave={handleSave()} /> بالأقواس!",
          why: "كما في معالجات الأحداث، وضع الأقواس يستدعي الدالة في زمن رندر الأب وليس عند نقر الابن، مما يسبب أخطاء رندر غير متوقعة.",
          fix: "مرر مرجع الدالة فقط: onSave={handleSave} أو دالة سهمية: onSave={() => handleSave(id)}."
        }
      ],
      bestPractices: [
        "اتبع اتفاقية التسمية القياسية: سمِّ الخاصية في الابن بصيغة onEvent (مثل onSelect, onDelete) وسمِّ الدالة المنفذة في الأب بصيغة handleEvent (مثل handleSelect, handleDelete).",
        "احرص على توثيق المعاملات التي ترسلها دالة الـ Callback ليكون العقد البرمجي بين الأب والابن واضحاً."
      ],
      infographicCard: {
        type: "two-way-contract",
        title: "عقد التعاون بين الأب والابن (Props Down, Events Up)",
        flow: [
          "1. البيانات تتدفق للأسفل: الأب يمرر State كـ Props للابن (Data Down)",
          "2. الأحداث تصعد للأعلى: الابن يستدعي دالة Callback لتنبيه الأب (Events Up)",
          "3. النتيجة: تناغم وتكامل كامل دون كسر تدفق البيانات أحادي الاتجاه"
        ]
      }
    },
    {
      id: "6.4.c",
      title: "رفع الحالة إلى المكون الأب Lifting State Up",
      englishTerm: "Lifting State Up Pattern & Single Source of Truth",
      description: "النمط المعماري الكلاسيكي في React عندما يحتاج مكونان شقيقان (Sibling Components) أو أكثر إلى مشاركة نفس البيانات والتزامن معاً. بدلاً من محاولة نقل الحالة أفقياً بين الشقيقين (وهو أمر مستحيل في React)، نقوم بنقل الحالة (Lifting) للأعلى إلى أقرب مكون أب مشترك بينهما (Closest Common Ancestor)، ثم تمرير الحالة كـ Props ودوال التحديث كـ Callbacks لكلا الشقيقين.",
      realLifeAnalogy: "مثل نزاع طفلين في غرفة المعيشة حول جهاز التحكم عن بُعد للتلفزيون؛ يتدخل الأب ويأخذ جهاز التحكم في يده (رفع الحالة للأب المشترك) ليتحكم هو بالقنوات بالتناوب وبشكل متناسق بين الطفلين لمنع الخلاف.",
      whyItMatters: "هو الحل الهندسي لتوحيد مصادر البيانات في التطبيق ومنع تضارب الشاشات (State Desynchronization) دون الحاجة لمكتبات إدارة حالة خارجية معقدة.",
      syntax: "// نقل الحالة للأب المشترك وتوزيعها على الشقيقين\nfunction Parent() {\n  const [shared, setShared] = useState(0);\n  return (\n    <>\n      <SiblingA value={shared} onChange={setShared} />\n      <SiblingB value={shared} />\n    </>\n  );\n}",
      simpleExample: `// مثال شقيقين متزامنين لمحول عملات مصغر
import { useState } from "react";

// مكون الأب المشترك: يحمل القيمة المشتركة بالريال
function CurrencyLiftingDemo() {
  const [sarAmount, setSarAmount] = useState(100);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3 text-xs">
      <h3 className="font-bold text-sm text-indigo-400">محول العملات المرفوع الحالة للأب</h3>
      {/* الشقيق الأول: حقل تعديل الريال */}
      <div>
        <label className="text-slate-400 block mb-1">المبلغ بالريال السعودي:</label>
        <input 
          type="number"
          value={sarAmount}
          onChange={(e) => setSarAmount(Number(e.target.value))}
          className="p-1.5 bg-slate-850 border border-slate-700 rounded text-white w-full"
        />
      </div>
      {/* الشقيق الثاني: شاشة عرض المعادل بالدولار الأمريكي */}
      <div className="p-2.5 bg-slate-800 rounded font-mono text-emerald-400">
        المعادل بالدولار: {(sarAmount / 3.75).toFixed(2)} USD
      </div>
    </div>
  );
}`,
      advancedExample: `// تطبيق مزامنة درجات الحرارة الكلاسيكي (مئوية وفهرنهايت) برفع الحالة للأب المشترك
import { useState } from "react";

// مكون إدخال درجة الحرارة الفرعي (مكون مخصص يقبل المقياس والقيمة ودالة التغيير)
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = { c: "سليزيوس (°C)", f: "فهرنهايت (°F)" };

  return (
    <div className="space-y-1">
      <label className="text-xs text-slate-300 font-bold block">
        درجة الحرارة بمقياس {scaleNames[scale]}:
      </label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-slate-100 font-mono focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
}

// دوال تحويل نقية ومستقلة
const toCelsius = (f) => ((f - 32) * 5) / 9;
const toFahrenheit = (c) => (c * 9) / 5 + 32;

function tryConvert(temperature, convertFn) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return "";
  const output = convertFn(input);
  return (Math.round(output * 100) / 100).toString();
}

// المكون الأب المشترك: هو المالك الوحيد للحالة (Lifting State Up)
export function TemperatureSynchronizer() {
  const [temperature, setTemperature] = useState("100");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (val) => {
    setScale("c");
    setTemperature(val);
  };

  const handleFahrenheitChange = (val) => {
    setScale("f");
    setTemperature(val);
  };

  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مزامنة المكونات برفع الحالة للأب</h4>
        <span className="text-[10px] font-mono text-slate-400">Lifting State Up</span>
      </div>

      <div className="space-y-3">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={handleFahrenheitChange}
        />
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-center">
        {parseFloat(celsius) >= 100 ? (
          <p className="text-rose-400 font-bold">🔥 الماء سيصل إلى درجة الغليان!</p>
        ) : (
          <p className="text-sky-400 font-medium">❄️ الماء لن يصل لدرجة الغليان بعد.</p>
        )}
      </div>
    </div>
  );
}`,
      output: "بمجرد أن يكتب المستخدم في حقل السليزيوس، يُحدث الأب الحالة، فيتغير حقل الفهرنهايت تلقائياً وفي نفس اللحظة، والعكس صحيح، مع الحفاظ على تزامن مطلق بين الشقيقين.",
      commonMistakes: [
        {
          mistake: "محاولة ربط المكونين الشقيقين مباشرة عبر متغيرات عامة (Global Variables) أو أحداث DOM مخصصة.",
          why: "ينتهك هذا نموذج تدفق البيانات الصارم في React ويصعب تتبع الأخطاء والتصيير.",
          fix: "ارفع الحالة دائماً للأب المشترك ومررها للأسفل عبر Props."
        }
      ],
      bestPractices: [
        "ابحث عن أقرب مكون أب مشترك (Lowest Common Ancestor) يجمع كل المكونات المحتاجة للحالة فقط ولا ترفعها لأعلى من ذلك دون داعٍ.",
        "تذكر: كل معلومة في تطبيقك يجب أن تمتلك مصدراً وحيداً للحقيقة (Single Source of Truth)."
      ],
      infographicCard: {
        type: "lifting-diagram",
        title: "خطوات تطبيق نمط Lifting State Up",
        steps: [
          "1. اكتشاف أن مكونين شقيقين (A و B) بحاجة لنفس المعلومة",
          "2. حذف الحالة المحلية من داخل A و B",
          "3. نقل الحالة إلى المكون الأب المشترك الحاوي لهما",
          "4. تمرير القيمة كـ Prop وتمرير دالة التحديث كـ Callback لكلا المكونين"
        ]
      }
    },
    {
      id: "6.4.d",
      title: "مزامنة مكونين باستخدام حالة مشتركة",
      englishTerm: "Synchronizing Sibling Components with Shared State",
      description: "التطبيق العملي لمزامنة مكونين منفصلين وظيفياً في الواجهة ولكن يعتمد كل منهما على خيارات الآخر (مثل شريط جانبي يحدد قسماً وشاشة رئيسية تعرض محتوى ذلك القسم، أو خريطة تفاعلية وقائمة فنادق جانبية تبرز الفندق المحدد على الخريطة).",
      realLifeAnalogy: "مثل شاشة عرض الركاب وشاشة سائق أوبر؛ عندما يقبل السائق الطلب في هاتفه، تتزامن شاشة الراكب في نفس اللحظة وتظهر له مسار السائق واسمه على الخريطة.",
      whyItMatters: "يوفر تجربة استخدام تفاعلية غنية ومترابطة تحاكي تطبيقات سطح المكتب وتمنع أي تنافر في واجهة المستخدم.",
      syntax: "const [activeId, setActiveId] = useState(null);\n<Sidebar active={activeId} onSelect={setActiveId} />\n<ContentPanel activeId={activeId} />",
      simpleExample: `// مزامنة زر تبويب مع صندوق العرض المقابل له
import { useState } from "react";

function TabSyncDemo() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3 text-xs">
      <div className="flex gap-2">
        <button 
          onClick={() => setActiveTab("home")} 
          className={\`px-3 py-1 rounded \${activeTab === "home" ? "bg-indigo-600" : "bg-slate-800"}\`}
        >
          الرئيسية
        </button>
        <button 
          onClick={() => setActiveTab("settings")} 
          className={\`px-3 py-1 rounded \${activeTab === "settings" ? "bg-indigo-600" : "bg-slate-800"}\`}
        >
          الإعدادات
        </button>
      </div>

      <div className="p-3 bg-slate-800 rounded">
        محتوى علامة التبويب المتزامنة: <strong className="text-emerald-400">{activeTab}</strong>
      </div>
    </div>
  );
}`,
      advancedExample: `// تطبيق محاكي للمتجر: قائمة مصغرة متزامنة مع نافذة المعاينة السريعة
import { useState } from "react";

// بيانات تجريبية
const TECH_ARTICLES = [
  { id: "art-1", title: "مستقبل الذكاء الاصطناعي التوليدي", reads: 1420, summary: "استعراض لأحدث النماذج اللغوية العملاقة وقدرتها على إعادة تشكيل البرمجيات." },
  { id: "art-2", title: "هندسة معمارية React 19 الحديثة", reads: 2890, summary: "نظرة عميقة على ميزات React Compiler ودوال Actions ونظام Server Components." },
  { id: "art-3", title: "دليل إتقان CSS Grid والتصميم المتجاوب", reads: 940, summary: "أسرار بناء شبكات تخطيط معقدة بدون كتابة مئات سطور Media Queries." }
];

// الشقيق 1: قائمة المقالات الجانبية
function ArticleSidebarList({ articles, selectedId, onSelectArticle }) {
  return (
    <div className="space-y-2">
      {articles.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelectArticle(item.id)}
          className={\`w-full text-right p-3 rounded-xl transition-all border text-xs block \${
            selectedId === item.id
              ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-900/40"
              : "bg-slate-800/80 border-slate-700/60 text-slate-300 hover:bg-slate-800"
          }\`}
        >
          <p className="font-bold">{item.title}</p>
          <span className="text-[10px] opacity-75 font-mono">{item.reads} قراءة</span>
        </button>
      ))}
    </div>
  );
}

// الشقيق 2: شاشة المعاينة والقراءة المتزامنة
function ArticlePreviewPanel({ article }) {
  if (!article) {
    return <div className="p-6 text-center text-slate-500 text-xs">يرجى اختيار مقال من القائمة لقراءته.</div>;
  }

  return (
    <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
          المعرف: {article.id}
        </span>
        <span className="text-xs text-slate-400 font-mono">👁️ {article.reads} مشاهدة</span>
      </div>

      <h3 className="font-black text-sm text-slate-100">{article.title}</h3>
      <p className="text-xs text-slate-300 leading-relaxed">{article.summary}</p>
    </div>
  );
}

// الأب المشترك المنسق للمزامنة
export function SynchronizedMasterDetailApp() {
  const [selectedArticleId, setSelectedArticleId] = useState(TECH_ARTICLES[0].id);

  const selectedArticle = TECH_ARTICLES.find((a) => a.id === selectedArticleId);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-xl mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">مزامنة الشقيقين (Master-Detail Sync)</h4>
        <span className="text-xs text-slate-400">حالة مشتركة واحدة</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        <ArticleSidebarList
          articles={TECH_ARTICLES}
          selectedId={selectedArticleId}
          onSelectArticle={setSelectedArticleId}
        />
        <ArticlePreviewPanel article={selectedArticle} />
      </div>
    </div>
  );
}`,
      output: "عند النقر على أي مقال في القائمة الجانبية باليمين، تتحدث الشاشة التفصيلية باليسار في نفس اللحظة وبدون أي وميض بفضل إدارة المعرف المختار في حالة الأب المشتركة.",
      commonMistakes: [
        {
          mistake: "تخزين كائن المقال كاملاً في الحالة بدلاً من تخزين معرّفه id فقط.",
          why: "تخزين الكائن كاملاً يسبب تكرار البيانات (Duplication)؛ فإذا تم تعديل عنوان المقال في مكان آخر، سيظل كائن الحالة القديم يحمل العنوان القديم المتضارب!",
          fix: "احفظ المعرف الفريد فقط في الحالة: setSelectedId(id) واستخرج الكائن بعملية find خفيفة وسريعة."
        }
      ],
      bestPractices: [
        "خزن الحد الأدنى من الحالة (Minimal State)؛ احفظ المعرف واستنتج التفاصيل منه.",
        "اجعل أحد العناصر محدداً افتراضياً لمنع ظهور مساحات بيضاء فارغة للمستخدم."
      ],
      infographicCard: {
        type: "sync-diagram",
        title: "هندسة مزامنة المكونات الشقيقة",
        diagram: [
          "🏛️ المكون الأب: [selectedId, setSelectedId]",
          "   ├── 👈 الشقيق الأيسر (القائمة): يستقبل selectedId ويلونه + يرسل النقرة",
          "   └── 👉 الشقيق الأيمن (المعاينة): يستقبل selectedId ويعرض تفاصيله فوراً"
        ]
      }
    },
    {
      id: "6.4.e",
      title: "الفرق بين Controlled وUncontrolled",
      englishTerm: "Controlled vs Uncontrolled Components (Form Inputs)",
      description: "المقارنة الجوهرية والفاصلة في كيفية إدارة مدخلات النماذج وحقول الإدخال في React. 1) المكون المضبوط (Controlled Component): هو الحقل الذي تتحكم فيه React بالكامل؛ حيث تكون قيمته مستمدة من State عبر خاصية value={state}، ويتم تحديثها حصراً عبر onChange. 2) المكون غير المضبوط (Uncontrolled Component): هو الحقل الذي يترك التحكم لمتصفح الويب (DOM) للاحتفاظ بقيمته داخلياً، ويتم قراءتها عند الحاجة فقط باستخدام مرجع (useRef).",
      realLifeAnalogy: "مثل قيادة الطائرة؛ المكون المضبوط هو الطيران الآلي المتصل بحاسوب الملاحة الذكي (React State) حيث يعرف الحاسوب موضع الطائرة في كل ثانية بدقة. بينما المكون غير المضبوط هو وضع عصا التحكم في يد السائق اليدوي والاتصال به بالهاتف عند الهبوط فقط لسؤاله: 'أين موقعك الآن؟'.",
      whyItMatters: "المكونات المضبوطة هي المعيار القياسي الموصى به في React لأنها تتيح التحقق الفوري من الإدخال (Real-time Validation)، وتعطيل الأزرار ديناميكياً، وتنسيق الأرقام أثناء الكتابة.",
      syntax: "// Controlled (مضبوط بـ React State):\n<input value={text} onChange={e => setText(e.target.value)} />\n\n// Uncontrolled (متروك للـ DOM عبر ref):\n<input ref={inputRef} defaultValue='افتراضي' />",
      simpleExample: `// مقارنة برمجية مباشرة بين النمطين
import { useState, useRef } from "react";

function ControlledVsUncontrolled() {
  // 1. المضبوط: يمتلك حالة React
  const [controlledVal, setControlledVal] = useState("");
  // 2. غير المضبوط: يمتلك مرجع DOM
  const uncontrolledRef = useRef(null);

  const checkValues = () => {
    alert(\`المضبوط: \${controlledVal} | غير المضبوط: \${uncontrolledRef.current.value}\`);
  };

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3 text-xs">
      <div>
        <label className="text-emerald-400 block mb-1">حقل مضبوط (Controlled):</label>
        <input 
          value={controlledVal}
          onChange={(e) => setControlledVal(e.target.value)}
          placeholder="تتحكم فيه React لحظياً..."
          className="p-1.5 bg-slate-800 rounded text-white w-full border border-slate-700"
        />
      </div>

      <div>
        <label className="text-amber-400 block mb-1">حقل غير مضبوط (Uncontrolled):</label>
        <input 
          ref={uncontrolledRef}
          defaultValue="نص بدائي في الـ DOM"
          className="p-1.5 bg-slate-800 rounded text-white w-full border border-slate-700"
        />
      </div>

      <button onClick={checkValues} className="px-3 py-1 bg-indigo-600 rounded font-bold">
        فحص القيمتين
      </button>
    </div>
  );
}`,
      advancedExample: `// نموذج تحقق فوري يوضح القوة الخارقة للمكونات المضبوطة (Controlled Validation)
import { useState } from "react";

export function ControlledCreditCardFormatter() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  // ميزة المكون المضبوط: التحكم الصارم في كل حرف يكتبه المستخدم في الوقت الفعلي
  const handleCardNumberChange = (e) => {
    // إزالة أي مسافات أو حروف غير رقمية
    const rawDigits = e.target.value.replace(/\\D/g, "").slice(0, 16);
    // تنسيق الأرقام في مجموعات رباعية (XXXX XXXX XXXX XXXX)
    const formatted = rawDigits.match(/.{1,4}/g)?.join(" ") || rawDigits;
    setCardNumber(formatted);
  };

  const handleHolderChange = (e) => {
    // إجبار حروف الاسم على أن تكون كبيرة (Uppercase) دائماً
    setCardHolder(e.target.value.toUpperCase());
  };

  const isComplete = cardNumber.replace(/\\s/g, "").length === 16 && cardHolder.length >= 3;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-5 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">قوة المكونات المضبوطة: تنسيق بطاقة الائتمان</h4>

      {/* معاينة البطاقة الحية */}
      <div className="p-5 rounded-2xl bg-gradient-to-tr from-indigo-900 to-slate-950 border border-indigo-700/50 shadow-2xl space-y-4">
        <span className="text-xs text-indigo-300 font-mono tracking-widest block uppercase">بطاقة دفع إلكترونية</span>
        <p className="text-lg font-mono font-black tracking-widest text-emerald-400">
          {cardNumber || "•••• •••• •••• ••••"}
        </p>
        <div className="flex justify-between text-[11px] text-slate-300 font-mono">
          <span>حامل البطاقة: {cardHolder || "اسم العميل"}</span>
          <span>EXP: 12/29</span>
        </div>
      </div>

      {/* حقول الإدخال المضبوطة */}
      <div className="space-y-3 text-xs">
        <div>
          <label className="text-slate-400 block mb-1">رقم البطاقة (تنسيق فوري):</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="0000 0000 0000 0000"
            className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono"
          />
        </div>

        <div>
          <label className="text-slate-400 block mb-1">اسم حامل البطاقة (أحرف كبيرة إجبارية):</label>
          <input
            type="text"
            value={cardHolder}
            onChange={handleHolderChange}
            placeholder="MOHAMMED AL-OTAIBI"
            className="w-full p-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white font-mono uppercase"
          />
        </div>
      </div>

      <button
        disabled={!isComplete}
        className={\`w-full py-2.5 rounded-xl text-xs font-bold transition-all \${
          isComplete 
            ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/40" 
            : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
        }\`}
      >
        {isComplete ? "إتمام عملية الدفع الآمن ✅" : "يرجى استكمال بيانات البطاقة"}
      </button>
    </div>
  );
}`,
      output: "المكون المضبوط ينسق أرقام البطاقة تلقائياً في مجموعات رباعية ويجبر الحروف على التحول إلى أحرف كبيرة فور كتابتها، ويعطل زر الدفع حتى تكتمل الـ 16 رقماً بدقة.",
      commonMistakes: [
        {
          mistake: "تمرير value={undefined} في الرندر الأول ثم تمرير قيمة نصية لاحقاً، مما يطلق تحذير: A component is changing an uncontrolled input to be controlled.",
          why: "إذا كانت قيمة value الابتدائية undefined، تعتبر React الحقل غير مضبوط (Uncontrolled)، فإذا استلم نصاً لاحقاً تعتقد أنك بدلت نوع الحقل في منتصف الطريق!",
          fix: "اجعل القيمة الابتدائية دائماً نصاً فارغاً '' وليس undefined أو null: useState('')."
        }
      ],
      bestPractices: [
        "استخدم المكونات المضبوطة (Controlled) كخيارك الافتراضي الدائم في React.",
        "استخدم المكونات غير المضبوطة (Uncontrolled) في حالات استثنائية فقط: مثل حقول رفع الملفات <input type='file' /> (لأنها للقراءة فقط في المتصفح) أو مع مكتبات النماذج الكبيرة كـ React Hook Form لتحقيق أعلى سرعة مع النماذج الضخمة جداً."
      ],
      infographicCard: {
        type: "comparison-matrix",
        title: "المكونات المضبوطة مقابل غير المضبوطة",
        headers: ["المعيار", "المضبوط Controlled", "غير المضبوط Uncontrolled"],
        rows: [
          ["مصدر الحقيقة", "حالة React State", "عقدة المتصفح DOM"],
          ["التحقق اللحظي", "سهل وفوري مع كل نقرة", "معقد ولا يتم إلا عند الإرسال"],
          ["التعديل والتنسيق", "كامل وقوي (أحرف كبيرة، فواصل)", "صعب ومحدود"],
          ["الأداء مع 100 حقل", "قد يحتاج لتحسينات خفيفة", "سريع جداً لعدم وجود رندر مستمر"]
        ]
      }
    },
    {
      id: "6.4.f",
      title: "اختيار مكان تخزين الحالة",
      englishTerm: "Where to Put State: Location Decision Framework",
      description: "الإطار الهندسي المنهجي لتحديد الموضع الدقيق لتخزين الحالة في شجرة المكونات. القاعدة الذهبية تنص على: اجعل الحالة محلية في أصغر مكون ممكن، ولا ترفعها للأعلى إلا عندما يتطلب الأمر مشاركتها بين أكثر من مكون، ولا تضعها في الحالة العامة (Global State) إلا إذا كانت مستخدمة في أقسام متباعدة جداً من التطبيق كلياً.",
      realLifeAnalogy: "مثل تخزين الأدوية؛ قطرة العين الشخصية تحتفظ بها في جيبك (حالة محلية)، وصندوق الإسعافات الأولية للأسرة تضعه في صالة المنزل المشتركة (حالة مرفوعة للأب)، بينما بنك الدم المركزي يحتفظ به المستشفى العام للمدينة كاملة (حالة عامة Global).",
      whyItMatters: "وضع الحالة في مكان أعلى من اللازم يسبب إعادة تصيير عشوائية لكامل الشجرة؛ ووضعها في مكان أدنى من اللازم يمنع المكونات الشقيقة من الوصول إليها.",
      syntax: "// 1. Local State: داخل المكون نفسه\n// 2. Shared/Lifted State: في الأب المشترك\n// 3. Global State: في Context API أو Redux/Zustand",
      simpleExample: `// مثال يوضح أين يجب أن تعيش كل حالة
function SearchBar() {
  // حالة نص البحث محلية هنا لأنها لا تهم بقية الصفحة إلا عند الضغط
  const [localQuery, setLocalQuery] = useState("");
  return <input value={localQuery} onChange={e => setLocalQuery(e.target.value)} placeholder="بحث..." />;
}

function Page() {
  // حالة المستخدم مسجلة هنا لأن الهيدر والفوتر كلاهما يحتاجان معرفة الاسم
  const [currentUser, setCurrentUser] = useState("خالد");
  return (
    <div>
      <SearchBar />
      <p>المستخدم الحالي: {currentUser}</p>
    </div>
  );
}`,
      advancedExample: `// مخطط استشاري تفاعلي لاتخاذ قرار مكان تخزين الحالة (State Decision Tree)
export function StatePlacementConsultant() {
  const decisionRules = [
    {
      level: "1. حالة محلية (Local State)",
      question: "هل هذا المتغير يخص هذا المكون فقط ولا يهتم به أي مكون آخر في التطبيق؟",
      example: "مثل: فتح وإغلاق قائمة منسدلة Dropdown، حالة مؤشر التحميل لزر معين، النص المكتوب داخل حقل إدخال قبل الإرسال.",
      recommendation: "ضعه في نفس المكون باستخدام useState() المحلي."
    },
    {
      level: "2. حالة مشتركة مرفوعة (Lifted State)",
      question: "هل يحتاج مكونان شقيقان أو أكثر للوصول لنفس البيانات وتحديثها معاً؟",
      example: "مثل: سلة الشراء وشريط العد العلوي، قائمة الفلاتر الجانبية وشبكة المنتجات، محول العملات.",
      recommendation: "ارفعه إلى أقرب مكون أب مشترك بينهما فقط."
    },
    {
      level: "3. حالة عامة للتطبيق (Global App State)",
      question: "هل هذه البيانات يحتاجها عدد ضخم من المكونات المتباعدة في شجرة التطبيق (مثل الهيدر والإعدادات والصفحات المختلفة)؟",
      example: "مثل: بيانات المستخدم المسجل والتوكن Auth Token، الثيم المظلم/الفاتح، لغة التطبيق الحالية (عربي/إنجليزي).",
      recommendation: "استخدم React Context API أو مكتبات إدارة الحالة (Zustand / Redux Toolkit)."
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-lg mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">دليل اتخاذ القرار: أين يجب أن تعيش حالتك؟</h4>

      <div className="space-y-3">
        {decisionRules.map((rule, idx) => (
          <div key={idx} className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5 text-xs">
            <h5 className="font-bold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              {rule.level}
            </h5>
            <p className="text-slate-300 font-medium">{rule.question}</p>
            <p className="text-[11px] text-slate-500">{rule.example}</p>
            <div className="p-2 bg-indigo-950/40 rounded-lg text-indigo-300 font-mono text-[10px] mt-1 border border-indigo-900/50">
              💡 القرار: {rule.recommendation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يقدم إطار عمل منطقي يساعد المطور على اختيار الموضع الأمثل للحالة وتجنب رمي كل شيء في الحالة العامة (Global State Overuse).",
      commonMistakes: [
        {
          mistake: "وضع كافة متغيرات التطبيق في Redux أو Context API منذ اليوم الأول للمشروع!",
          why: "هذا تعقيد معماري مفرط (Over-engineering)؛ يجعل تتبع الكود صعباً ويبطئ عمليات التطوير بدون أي فائدة ملموسة.",
          fix: "ابدأ دائماً بـ Local State، وعندما تقتضي الحاجة ارفعها للأب، وفقط إذا عانيت من Props Drilling عبر 5 مستويات فكر في الـ Context."
        }
      ],
      bestPractices: [
        "ضع الحالة في أدنى مستوى ممكن (Co-locate State) لتقليل مساحة الرندرات.",
        "راجع مكان الحالة كل فترة؛ إذا لاحظت أن المكون الأب لا يحتاج الحالة بل يمررها فقط لابن وسيط، أعد نقلها لأسفل."
      ],
      infographicCard: {
        type: "pyramid-levels",
        title: "هرم مستويات تخزين الحالة في React",
        levels: [
          "🔺 المستوى 3 (القِمة): Global State (بيانات التوثيق واللغة والثيم)",
          "🟦 المستوى 2 (الوسط): Lifted State (مشاركة بين شقيقين أو ثلاثة)",
          "🟩 المستوى 1 (القاعدة الكبرى): Local State (90% من حالات التطبيق تعيش هنا!)"
        ]
      }
    },
    {
      id: "6.4.g",
      title: "تجنب تكرار الحالة المشتقة",
      englishTerm: "Avoiding Redundant / Derived State (Compute on the Fly)",
      description: "المبدأ المعماري الحاسم الذي ينص على: 'لا تضع في State أي قيمة يمكنك حسابها واستنتاجها رياضياً أو منطقياً من الخصائص (Props) أو من حالات أخرى موجودة بالفعل'. تكرار الحالة المشتقة هو المصدر رقم 1 لعدم تزامن البيانات وظهور معلومات قديمة (Stale Bugs) في الواجهة.",
      realLifeAnalogy: "مثل حساب المتبقي من الراتب في تطبيق مصرفي؛ يسجل البنك إجمالي راتبك والمدفوعات التي سددتها، ويحسب المتبقي بعملية طرح رياضية (الراتب - المصروفات) في كل لحظة، بدلاً من إنشاء حقل ثالث منفصل يتطلب تعديلاً يدوياً بعد كل عملية شراء.",
      whyItMatters: "يوفر أسطر كود برمجية لا حصر لها، ويلغي الحاجة لحلقات useEffect لمزامنة الحالات، ويضمن أن الحسابات دقيقة ومستحيل أن تتضارب.",
      syntax: "// ❌ خطأ: تخزين حالة مشتقة مكررة\nconst [fullName, setFullName] = useState(firstName + ' ' + lastName);\n\n// ✅ الصواب: حساب سريع أثناء الرندر\nconst fullName = firstName + ' ' + lastName;",
      simpleExample: `// مقارنة حاسمة: حساب البيانات بدلاً من تكرار الحالة
import { useState } from "react";

function DerivedStateDemo() {
  const [firstName, setFirstName] = useState("عبدالرحمن");
  const [lastName, setLastName] = useState("الغامدي");

  // ✅ حساب مباشر في زمن الرندر (لا يحتاج useState ولا useEffect إطلاقاً!)
  const fullName = \`\${firstName} \${lastName}\`;

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3 text-xs">
      <div className="flex gap-2">
        <input value={firstName} onChange={e => setFirstName(e.target.value)} className="p-1 bg-slate-800 rounded text-white" />
        <input value={lastName} onChange={e => setLastName(e.target.value)} className="p-1 bg-slate-800 rounded text-white" />
      </div>
      <p className="font-bold text-emerald-400">الاسم الكامل المحسوب تلقائياً: {fullName}</p>
    </div>
  );
}`,
      advancedExample: `// متجر فواتير ذكي يوضح 4 حالات مشتقة شائعة تُحسب تلقائياً دون تكرار
import { useState } from "react";

export function SmartInvoiceCalculations() {
  const [items, setItems] = useState([
    { id: 1, name: "تصميم واجهة مستخدم", hours: 10, rate: 150 },
    { id: 2, name: "تطوير مكونات React", hours: 25, rate: 200 },
    { id: 3, name: "اختبارات الجودة الشاملة", hours: 8, rate: 120 }
  ]);
  const [taxRate, setTaxRate] = useState(15); // نسبة ضريبة القيمة المضافة 15%

  // 1. حالة مشتقة: إجمالي الساعات (تُحسب بالـ reduce)
  const totalHours = items.reduce((acc, item) => acc + item.hours, 0);

  // 2. حالة مشتقة: المجموع الفرعي قبل الضريبة
  const subtotal = items.reduce((acc, item) => acc + item.hours * item.rate, 0);

  // 3. حالة مشتقة: مبلغ الضريبة
  const taxAmount = (subtotal * taxRate) / 100;

  // 4. حالة مشتقة: الإجمالي النهائي المستحق
  const grandTotal = subtotal + taxAmount;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">فاتورة الخدمات (كل الحسابات مشتقة)</h4>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
          No Redundant State
        </span>
      </div>

      <div className="space-y-2 text-xs">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800">
            <span>{item.name} ({item.hours} س × {item.rate} ر.س)</span>
            <span className="font-mono text-slate-300 font-bold">{item.hours * item.rate} ر.س</span>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-1.5 text-xs font-mono">
        <div className="flex justify-between text-slate-300">
          <span>إجمالي الساعات:</span>
          <span>{totalHours} ساعة عمل</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>المجموع الفرعي:</span>
          <span>{subtotal.toLocaleString()} ر.س</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>ضريبة القيمة المضافة ({taxRate}%):</span>
          <span>{taxAmount.toLocaleString()} ر.س</span>
        </div>
        <div className="flex justify-between text-sm font-bold text-emerald-400 pt-2 border-t border-slate-700">
          <span>الإجمالي النهائي المستحق:</span>
          <span>{grandTotal.toLocaleString()} ر.س</span>
        </div>
      </div>
    </div>
  );
}`,
      output: "تُحسب الفاتورة وإجمالي الساعات والضرائب آلياً مع كل رندر؛ لو غيرت أي ساعة أو سعر، تتعدل كافة الأرقام الأربعة فوراً دون كتابة سطر setState واحد لها!",
      commonMistakes: [
        {
          mistake: "استخدام useEffect لتحديث حالة ثانوية كلما تغيرت حالة أولية: useEffect(() => { setTotal(price * qty); }, [price, qty]);.",
          why: "هذا يسبب رندراً مزدوجاً (Double Render) لا داعي له، ويبطئ التطبيق، ويزيد احتمالية تضارب البيانات في زمن الوميض بين الرندرين.",
          fix: "احسبها مباشرة في جسم الدالة: const total = price * qty; بدون أي useEffect أو useState إضافي!"
        }
      ],
      bestPractices: [
        "القاعدة الذهبية: إذا أمكنك حساب القيمة من المتغيرات الموجودة، فلا تضعها في useState إطلاقاً.",
        "إذا كانت العملية الحسابية المشتقة مكلفة جداً (مثل فرز مصفوفة تحوي 100 ألف عنصر)، استخدم خطاف useMemo لتخزين النتيجة الحسابية مؤقتاً."
      ],
      infographicCard: {
        type: "code-comparison",
        title: "الحالة المشتقة: الكود السيئ مقابل الكود السليم",
        structure: [
          "❌ نمط رديء: [items] + [itemCount, setItemCount] + useEffect لمزامنتهما!",
          "✅ نمط ذهبي: [items] فقط + const itemCount = items.length في سطر واحد!"
        ]
      }
    },
    {
      id: "6.4.h",
      title: "الفرق بين Local State وShared State",
      englishTerm: "Local State vs Shared State Scope",
      description: "المقارنة المعمارية الختامية لفهم حدود ونطاق الحالة (Scope). الحالة المحلية (Local State) هي الحالة المحصورة داخل مكون واحد ولا تؤثر على سواه (مثل حالة فتح القائمة المنسدلة). أما الحالة المشتركة (Shared State) فهي الحالة التي يحتاجها مكونان أو أكثر معاً ويتم رفعها للأب المشترك أو للـ Context لتنسيق العمل بين أجزاء الشاشة.",
      realLifeAnalogy: "مثل دفتر الملاحظات الشخصي في جيبك (حالة محلية لا يراها أحد) مقابل لوحة الإعلانات العامة المعلقة في ممر الشركة (حالة مشتركة يقرؤها ويتأثر بها كافة الموظفين).",
      whyItMatters: "الوضوح في التمييز بينهما يمنع تكدس الشفرة في المكونات العليا ويحمي المطور من تعقيدات إدارة الحالة الزائدة عن الحاجة.",
      syntax: "// Local: useState() داخل المكون الفردي\n// Shared: useState() في الأب وتمريره كـ Props لأكثر من ابن",
      simpleExample: `// استعراض النطاقين في مكونين متجاورين
import { useState } from "react";

// مكون بزر محلي له حالته الخاصة المعزولة
function LocalCounter() {
  const [local, setLocal] = useState(0);
  return <button onClick={() => setLocal(l => l + 1)} className="px-2 py-1 bg-slate-800 rounded text-xs">نقراتي المحلية: {local}</button>;
}

// مكون يجمع حالتين محليتين وحالة مشتركة
function ScopeComparisonDemo() {
  const [shared, setShared] = useState(0);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white space-y-3 text-xs">
      <div className="flex gap-2">
        <LocalCounter />
        <LocalCounter />
      </div>
      <div className="pt-2 border-t border-slate-800">
        <p>الحالة المشتركة: {shared}</p>
        <button onClick={() => setShared(s => s + 1)} className="px-3 py-1 bg-indigo-600 rounded mt-1">تحديث المشترك</button>
      </div>
    </div>
  );
}`,
      advancedExample: `// لوحة تحكم متكاملة تجسد التعايش المثالي بين الحالات المحلية والمشتركة
import { useState } from "react";

// مكون فرعي يمتلك حالة محلية (إظهار كلمة المرور) ويشارك حالة عامة (الاسم)
function UserCredentialRow({ user, onRoleChange }) {
  // حالة محلية 100%: تخص هذا السطر فقط ولا تهم بقية الصفحة إطلاقاً
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-between items-center p-3 bg-slate-800/80 rounded-xl text-xs border border-slate-700">
      <div>
        <p className="font-bold text-slate-100">{user.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-mono text-slate-400">
            {showPassword ? user.rawPassword : "••••••••••••"}
          </span>
          <button
            onClick={() => setShowPassword((p) => !p)}
            className="text-[10px] text-indigo-400 hover:text-indigo-300 underline"
          >
            {showPassword ? "إخفاء" : "إظهار"}
          </button>
        </div>
      </div>

      {/* تفاعل مع الحالة المشتركة عبر دالة الأب */}
      <button
        onClick={() => onRoleChange(user.id, user.role === "admin" ? "member" : "admin")}
        className={\`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all \${
          user.role === "admin" ? "bg-amber-500/20 text-amber-300" : "bg-slate-700 text-slate-300"
        }\`}
      >
        {user.role === "admin" ? "مدير نظام 👑" : "عضو عادي"}
      </button>
    </div>
  );
}

// المكون الأب الحاوي للحالة المشتركة
export function HybridScopeManager() {
  // حالة مشتركة: مصفوفة المستخدمين وصلاحياتهم
  const [users, setUsers] = useState([
    { id: "u1", name: "عبدالله السالم", rawPassword: "SecretPass@2026", role: "admin" },
    { id: "u2", name: "سارة التميمي", rawPassword: "PassDev#9981", role: "member" }
  ]);

  const handleRoleChange = (id, newRole) => {
    setUsers((prev) => prev.map((u) => u.id === id ? { ...u, role: newRole } : u));
  };

  const adminCount = users.filter((u) => u.role === "admin").length;

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">التكامل بين Local و Shared State</h4>
        <span className="text-xs text-amber-400 font-mono font-bold">المدراء: {adminCount}</span>
      </div>

      <div className="space-y-2">
        {users.map((user) => (
          <UserCredentialRow
            key={user.id}
            user={user}
            onRoleChange={handleRoleChange}
          />
        ))}
      </div>
    </div>
  );
}`,
      output: "كل سطر يتحكم في إظهار أو إخفاء كلمة مروره محلياً دون أن تتأثر الأسطر الأخرى، بينما تشترك جميع الأسطر في مصفوفة الأدوار التي يحسب منها الأب عدد المدراء الإجمالي بنظام متناغم.",
      commonMistakes: [
        {
          mistake: "رفع كل الحالات الصغيرة (مثل حالة ظهور قائمة منسدلة بسيطة) للأب لمجرد الاعتقاد بأن الأب يجب أن يعرف كل شيء.",
          why: "هذا يثقل كود الأب بمتغيرات لا فائدة منها، ويجبر الأب على إعادة الرندر في كل مرة يفتح فيها المستخدم قائمة فرعية تافهة.",
          fix: "اترك الحالة المحلية في مكانها طالما لا يوجد مكون آخر يحتاجها."
        }
      ],
      bestPractices: [
        "احتفظ بالحالة محلية قدر الإمكان (Keep state as local as possible).",
        "لا ترفع الحالة إلا عندما تجد مكوناً آخر يصرخ طلباً لنفس المعلومة."
      ],
      infographicCard: {
        type: "scope-comparison",
        title: "مقارنة النطاقات: Local State مقابل Shared State",
        items: [
          { type: "الحالة المحلية Local", scope: "داخل المكون الفردي فقط", example: "إظهار/إخفاء، نصوص الحقول التمهيدية، حالة Hover" },
          { type: "الحالة المشتركة Shared", scope: "في الأب المشترك أو Context", example: "سلة التسوق، المقال المحدد، التوثيق، الفلاتر" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q6-4-1",
      question: "ما هو نمط 'Lifting State Up' ومتى يجب استخدامه في React؟",
      options: [
        "هو نقل كود التطبيق إلى خوادم سحابية لزيادة سرعة التحميل",
        "هو نقل الحالة إلى أقرب مكون أب مشترك عندما يحتاج مكونان شقيقان لمشاركة نفس البيانات والتزامن معاً",
        "هو تحويل المكونات الوظيفية إلى Class Components قديمة",
        "هو إلغاء استخدام خطاف useState واستبداله بمتغيرات جافاسكريبت عامة"
      ],
      correctAnswer: 1,
      explanation: "Lifting State Up يعني نقل ملكية الحالة من المكونات الفرعية إلى أقرب مكون أب مشترك، ليمتلك الأب الحقيقة الكاملة ويمررها كـ Props ودوال تحديث للأبناء."
    },
    {
      id: "q6-4-2",
      question: "ما الفرق الأساسي بين المكون المضبوط (Controlled) والمكون غير المضبوط (Uncontrolled) في النماذج؟",
      options: [
        "المكون المضبوط يدعم اللغة العربية فقط، وغير المضبوط يدعم الإنجليزية",
        "المكون المضبوط تتحكم به حالة React State عبر value و onChange، بينما غير المضبوط يحتفظ ببياناته في متصفح DOM ونصل إليها عبر المراجع refs",
        "المكون غير المضبوط لا يمكن استخدامه داخل وسوم form إطلاقاً",
        "المكون المضبوط لا يعمل إلا بعد تثبيت مكتبة خارجية"
      ],
      correctAnswer: 1,
      explanation: "في Controlled Components، تمتلك React القيمة لحظياً عبر value={state} وتتحكم في كل حرف يكتبه المستخدم؛ أما في Uncontrolled، فإن المتصفح DOM هو المتحكم ويتم استخراج القيمة عند الطلب."
    },
    {
      id: "q6-4-3",
      question: "لماذا يُعد تخزين حالة مشتقة (Derived State) مثل const [fullName, setFullName] = useState('') ممارسة سيئة إذا كان لديك firstName و lastName؟",
      options: [
        "لأنها تستهلك كل مساحة التخزين على القرص الصلب",
        "لأنها تخلق بيانات مكررة تسبب تضارباً وظهور نصوص قديمة وتتطلب مزامنة شاقة بـ useEffect، بينما يمكن حسابها في سطر واحد سريع أثناء الرندر",
        "لأن محرك المتصفح يمنع دمج النصوص في جافاسكريبت",
        "لأن لغة React تحظر وجود أكثر من حالتين في نفس المكون"
      ],
      correctAnswer: 1,
      explanation: "البيانات التي يمكن حسابها بعملية حسابية أو دمج بسيط لا يجوز تخزينها في useState؛ حسابها المباشر أثناء الرندر يضمن دقتها بنسبة 100% ويمنع أخطاء التضارب ومشاكل الرندر المزدوج."
    }
  ],
  exercise: {
    id: "ex6-4",
    title: "بناء نظام تحويل ومزامنة أسعار الرحلات السياحية (Lifting State Up)",
    description: "المطلوب بناء مكون React تفاعلي باسم TravelBudgetPlanner يجسد كافة مهارات مشاركة الحالة: يمتلك الأب ميزانية الرحلة الإجمالية، ويوزعها على شقيقين: الشقيق الأول (BudgetSlider) يسمح بضبط الميزانية عبر شريط تمرير، والشقيق الثاني (ExpenseBreakdown) يعرض توزيع الميزانية المشتقة تلقائياً (40% طيران، 35% فنادق، 25% مصاريف يومية) مع حساب الأرقام تلقائياً دون تكرار الحالة المشتقة.",
    starterCode: `export function TravelBudgetPlanner() {
  // اكتب كود الميزانية والمزامنة هنا
  return (
    <div>
      {/* صمم المخطط */}
    </div>
  );
}`,
    hints: [
      "ضع حالة الميزانية [totalBudget, setTotalBudget] في المكون الأب.",
      "مرر totalBudget ودالة التحديث للابن الأول BudgetSlider.",
      "احسب نسب الطيران والفنادق والمصروفات بعمليات حسابية مباشرة في الأب أو الابن الثاني دون useState إضافي.",
      "اعرض رسالة تنبيهية شرطية إذا تجاوزت الميزانية حداً معيناً."
    ],
    solution: `import { useState } from "react";

// 1. الشقيق الأول: شريط ضبط الميزانية المخصص (مكون مضبوط Controlled)
function BudgetSlider({ budget, onBudgetChange }) {
  return (
    <div className="space-y-2 p-4 bg-slate-950 rounded-2xl border border-slate-800">
      <div className="flex justify-between items-center text-xs">
        <label className="text-slate-300 font-bold">حدد ميزانية رحلتك الإجمالية:</label>
        <span className="font-mono text-emerald-400 font-black text-sm">{budget.toLocaleString()} ر.س</span>
      </div>
      <input
        type="range"
        min="3000"
        max="50000"
        step="500"
        value={budget}
        onChange={(e) => onBudgetChange(Number(e.target.value))}
        className="w-full accent-indigo-500 cursor-pointer"
      />
      <div className="flex justify-between text-[10px] text-slate-500 font-mono">
        <span>3,000 ر.س (اقتصادي)</span>
        <span>50,000 ر.س (فاخر VIP)</span>
      </div>
    </div>
  );
}

// 2. الشقيق الثاني: تفصيل المصروفات المحسوبة تلقائياً (حالات مشتقة)
function ExpenseBreakdown({ budget }) {
  // حسابات مشتقة نقية وفورية
  const flights = Math.round(budget * 0.40);
  const hotels = Math.round(budget * 0.35);
  const daily = Math.round(budget * 0.25);

  const categories = [
    { label: "تذاكر الطيران (40%)", amount: flights, color: "text-sky-400", bg: "bg-sky-500/20" },
    { label: "الإقامة الفندقية (35%)", amount: hotels, color: "text-indigo-400", bg: "bg-indigo-500/20" },
    { label: "المصاريف والتنقلات (25%)", amount: daily, color: "text-emerald-400", bg: "bg-emerald-500/20" }
  ];

  return (
    <div className="space-y-2.5 p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs">
      <h5 className="font-bold text-slate-200 mb-2">التوزيع المقترح للمصروفات (محسوب آلياً):</h5>
      {categories.map((cat, i) => (
        <div key={i} className="flex justify-between items-center p-2.5 bg-slate-900 rounded-xl border border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className={\`w-2 h-2 rounded-full \${cat.bg}\`}></span>
            <span className="text-slate-300 font-medium">{cat.label}</span>
          </div>
          <span className={\`font-mono font-bold \${cat.color}\`}>{cat.amount.toLocaleString()} ر.س</span>
        </div>
      ))}
    </div>
  );
}

// 3. المكون الأب المشترك المنسق (Lifting State Up Master)
export function TravelBudgetPlanner() {
  const [budget, setBudget] = useState(15000);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto text-white space-y-4 font-sans shadow-2xl">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-black text-slate-100">مخطط ميزانية السفر الذكي</h3>
          <p className="text-[11px] text-slate-400">تطبيق تفاعلي يجسد Lifting State Up والحسابات المشتقة</p>
        </div>
        <span className="text-2xl">✈️</span>
      </div>

      {/* الشقيق الأول: تعديل الميزانية */}
      <BudgetSlider budget={budget} onBudgetChange={setBudget} />

      {/* الشقيق الثاني: عرض التفاصيل المتزامنة */}
      <ExpenseBreakdown budget={budget} />

      {/* تنبيه شرطي ختامي */}
      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-[11px] text-slate-400 text-center">
        {budget >= 30000 ? (
          <span className="text-amber-400 font-bold">🌟 رحلة بمستوى راقٍ وتصنيف 5 نجوم مع خدمات خاصة!</span>
        ) : (
          <span>💡 خطة ذكية ومتوازنة تناسب الإجازات الصيفية العائلية.</span>
        )}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة مشاركة الحالة وتدفق البيانات في React",
    description: "الدليل المرئي الشامل لرفع الحالة، المكونات المضبوطة، وقواعد الحسابات المشتقة النظيفة.",
    sections: [
      {
        heading: "1. رفع الحالة للأب (Lifting State Up)",
        bullets: [
          "مصدر الحقيقة: الأب يمتلك الحالة ويمررها كـ Props للأبناء (Data Down).",
          "التواصل العكسي: الأب يمرر دوال استدعاء (Callbacks) للأبناء لتنبيهه عند التغيير (Events Up).",
          "التزامن التلقائي: الشقيقان يتزامنان في نفس اللحظة بدون أي تعقيد."
        ]
      },
      {
        heading: "2. المكونات المضبوطة (Controlled Components)",
        bullets: [
          "تحكم React الكامل: الحقل مربوط بـ value={state} و onChange={setter}.",
          "التحقق الفوري: إمكانية فحص الإدخال وتنسيق البطاقات والأرقام أثناء الكتابة."
        ]
      },
      {
        heading: "3. تجنب الحالة المشتقة المكررة",
        bullets: [
          "قانون النقاء: ما يمكن حسابه برمجياً من Props أو State لا يوضع في useState أبداً.",
          "توفير الرندرات: إلغاء الحاجة لـ useEffects غير المبررة لمنع التضارب وحلقات الوميض."
        ]
      }
    ]
  }
};
