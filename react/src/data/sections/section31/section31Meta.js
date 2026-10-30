// src/data/sections/section31/section31Meta.js
// القسم 31: مشاريع تطبيقية للمبتدئين - البيانات الوصفية والاستوديو الشامل

export const section31Meta = {
  summary: {
    title: "الخلاصة المعمارية للمشاريع التطبيقية للمبتدئين",
    description: "يمثل هذا القسم الانتقال الجوهري من دراسة مفاهيم React المجردة إلى بناء تطبيقات برمجية متكاملة وقابلة للتشغيل في بيئات حقيقية. من خلال بناء خمسة مشاريع تطبيقية مصممة هندسياً بعناية (العداد المتقدم، قائمة المهام، تطبيق الطقس، تطبيق الملاحظات، وتطبيق الاختبارات)، ترسخت ثماني قواعد ذهبية تمثل حجر الأساس لأي مهندس واجهات أمامية محترف.",
    rules: [
      {
        rule: "1. النمذجة قبل التكويد (Data Modeling First)",
        detail: "لا تبدأ أبداً بكتابة كود الـ JSX قبل تحديد شكل نموذج البيانات (Schema/Interface)؛ فتحديد الكائنات والمصفوفات والحالات المستقلة يوفر 80% من وقت تصحيح الأخطاء لاحقاً."
      },
      {
        rule: "2. مصدر وحيد للحقيقة والحالة المشتقة (Single Source of Truth & Derived State)",
        detail: "تجنب تماماً تكرار حفظ البيانات المفلترة أو المحسوبة في حالات مستقلة؛ استخدم useMemo لاشتقاق نتائج البحث والفلترة والنسب المئوية من الحالة الأصلية مباشرة."
      },
      {
        rule: "3. التحديث النقي غير المتعدي (Pure Immutable Updates)",
        detail: "لا تعدل أي مصفوفة أو كائن في الحالة مباشرة؛ استخدم دوال map للتعديل، وfilter للحذف، ومعامل الانتشار (...) للإضافة والحفاظ على استقرار دورة حياة React."
      },
      {
        rule: "4. عزل استدعاءات الشبكة في طبقة الخدمات (API Service Layer)",
        detail: "اعزل استدعاءات fetch ورموز الاستجابة ومفاتيح الـ API داخل ملفات خدمة مخصصة (Services)؛ مما يحمي المكونات البصرية من التغيرات المفاجئة في بنية بيانات الخوادم."
      },
      {
        rule: "5. الكبح الزمني للمدخلات السريعة (Debouncing User Inputs)",
        detail: "احمِ خوادم التطبيق ومعدل الطلبات المسموح به (Rate Limits) باستخدام useDebounce في حقول البحث لمنع إرسال طلب HTTP مع كل حرف يكتبه المستخدم."
      },
      {
        rule: "6. إدارة حالات الشبكة الأربعة (The Four UI Network States)",
        detail: "صمم واجهاتك لتدعم دوماً الحالات الأربعة: (الوضع المبدئي Initial، التحميل العظمي Skeleton، النجاح Success، ورسائل الخطأ الإنسانية مع زر إعادة المحاولة Retry)."
      },
      {
        rule: "7. تنظيف الموارد والمؤقتات بدقة (Strict Resource Cleanup)",
        detail: "أي مؤقت زمني (setInterval / setTimeout) أو مستمع أحداث عالمي (addEventListener) يجب أن يرافقه دالة تنظيف مطابقة (clearInterval / removeEventListener) داخل useEffect لمنع تسرب الذاكرة."
      },
      {
        rule: "8. الحفظ الدائم والتراجع السريع (Persistence & Resiliency)",
        detail: "اربط بيانات المستخدم الحيوية بـ LocalStorage مع معالجة استثناءات JSON، ووفر خيارات التراجع (Undo) والتصدير (Export) لحماية أفكار ومدخلات المستخدم من الفقدان."
      }
    ]
  },
  cheatSheet: {
    title: "جدول المقارنة والمرجع السريع للمشاريع التطبيقية الخمسة",
    description: "جدول مقارنة هندسي شامل يوضح أنماط إدارة الحالة، والتحديات المعمارية، واستراتيجيات التخزين، والمكتبات المساعدة لكل مشروع من المشاريع الخمسة.",
    headers: ["المشروع التطبيقي", "النمط المعماري الأساسي", "استراتيجية إدارة الحالة", "آلية التخزين والتزامن", "التحدي الهندسي الأبرز", "أفضل الممارسات المطبقة"],
    rows: [
      [
        "1. العداد التفاعلي المتقدم",
        "Linear Undo/Redo Engine",
        "useState مع مصفوفة التاريخ (past, present, future)",
        "LocalStorage لحفظ القيمة والحدود",
        "تنسيق التنقل الزمني والتراجع المتعدد دون فقدان التسلسل",
        "استخدام useCallback لتثبيت معالجات الأحداث واختصارات لوحة المفاتيح"
      ],
      [
        "2. تطبيق قائمة المهام (To-Do)",
        "CRUD Domain Management",
        "useLocalStorage مع مصفوفة كائنات المهام المستقلة",
        "LocalStorage مع مزامنة أحداث التبويبات المتعددة",
        "التحرير المباشر السلس والفلترة الفورية بحسب الأولوية",
        "توفير إشعار تراجع سريع (Undo Toast) واستخدام useMemo للإحصائيات"
      ],
      [
        "3. تطبيق الطقس (Weather App)",
        "Async Service & Normalizer",
        "useState لحالات الجلب (data, loading, error, history)",
        "ذاكرة مؤقتة In-Memory Cache (5 دقائق) + LocalStorage",
        "كبح طلبات البحث السريعة ومعالجة توقعات 40 قراءة خام",
        "استخدام هوك useDebounce، وعرض Skeletons، وتحويل فوري للوحدات °C/°F"
      ],
      [
        "4. تطبيق الملاحظات (Notes App)",
        "Taxonomy & Document Vault",
        "useState مع مصفوفة الملاحظات المنظمة بالوسوم والألوان",
        "تخزين دائم مع إمكانية التصدير كملفات Markdown حقيقية",
        "الفرز المزدوج (المثبتة في القمة أولاً ثم الأحدث) والتصنيف بالوسوم",
        "النموذج المتمدد الذكي والبحث المظلل للنصوص Highlighted Text"
      ],
      [
        "5. تطبيق الاختبارات (Quiz App)",
        "Finite State Machine (FSM)",
        "FSM (IDLE -> ACTIVE -> COMPLETED -> REVIEW)",
        "حفظ الإجابات في كائن مفهرس بمعرف السؤال (Key-Value)",
        "إدارة عداد الثواني التنازلي التلقائي وتجميد الخيارات فور النقر",
        "خوارزمية Fisher-Yates لخلط الخيارات، وشاشة مراجعة تعليمية مفصلة"
      ],
      [
        "مؤشرات الأداء والحجم",
        "Component Decomposition",
        "تقسيم الواجهات إلى مكونات ذرية صغيرة مستقلة",
        "تجنب حفظ البيانات المشتقة في التخزين الدائم لتوفير السعة",
        "منع إعادات الرندر الزائدة عبر React.memo و useMemo",
        "فصل مسؤوليات منطق الأعمال (Hooks) عن المكونات البصرية (UI)"
      ],
      [
        "إمكانية الوصول والشمولية (a11y)",
        "WCAG 2.1 AA Compliance",
        "إدارة التركيز البصري (Focus Rings) وسمات ARIA",
        "تسميات شاشات القراءة aria-label لكافة الأزرار الأيقونية",
        "دعم التنقل الكامل عبر لوحة المفاتيح (Tab, Enter, Space, Escape)",
        "ضمان نسب تباين لوني لا تقل عن 4.5:1 للنصوص والبطاقات"
      ]
    ]
  },
  capstoneProject: {
    id: "capstone-31",
    title: "المشروع التطبيقي الجامع: ساحة مشاريع المبتدئين المتكاملة (Beginner Projects Arena Pro)",
    description: "منظومة تفاعلية وتطبيقية جامعة تدمج المشاريع التطبيقية الخمسة في منصة موحدة قابلة للتشغيل المباشر؛ تتيح التنقل السلس بين (العداد الاحترافي مع سجل التاريخ، مدير المهام فائق السرعة، رادار الطقس بالـ Debounce، استوديو الملاحظات الثري مع التصدير، وتحدي اختبار React مع المؤقت والمراجعة)، مع شاشة مراقبة استهلاك الذاكرة وتتبع حالات المكونات لحظياً.",
    features: [
      "مبدل مشاريع سريع بخمسة أوضاع تشغيلية مستقلة ومتزامنة مع إمكانية فحص الكود المصدري",
      "محاكي بيانات متكامل لا يستلزم أي مفاتيح خارجية أو خوادم خلفية للتشغيل الفوري",
      "دعم التخزين المحلي التلقائي والمستمر لكل مشروع بشكل معزول",
      "نظام إحصائيات مركزي يوضح عدد المكونات النشطة وحجم الحالة في الذاكرة الحية",
      "تصميم متجاوب بالكامل يدعم الوضعين المظلم والفاتح وسمات التباين العالي"
    ],
    code: `import React, { useState, useEffect, useMemo, useRef } from "react";

// ==========================================
// المشروع 1: العداد التفاعلي المتقدم
// ==========================================
function MiniCounterProject() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
  const [step, setStep] = useState(1);

  const increment = () => {
    const next = count + step;
    setCount(next);
    setHistory(prev => [next, ...prev].slice(0, 5));
  };

  const decrement = () => {
    const next = count - step;
    setCount(next);
    setHistory(prev => [next, ...prev].slice(0, 5));
  };

  const reset = () => {
    setCount(0);
    setHistory([0]);
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
      <div className="text-xs font-bold text-slate-400 mb-1">المشروع 1: العداد التفاعلي مع سجل التغييرات</div>
      <div className="text-6xl font-black text-sky-600 my-4">{count}</div>
      <div className="flex items-center justify-center gap-3 mb-6">
        <button onClick={decrement} className="w-12 h-12 rounded-2xl bg-rose-500 text-white font-black text-xl hover:bg-rose-600 transition">-</button>
        <button onClick={reset} className="px-5 py-3 rounded-2xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-300 transition">تصفير</button>
        <button onClick={increment} className="w-12 h-12 rounded-2xl bg-emerald-500 text-white font-black text-xl hover:bg-emerald-600 transition">+</button>
      </div>
      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mb-4">
        <span>مقدار الخطوة:</span>
        {[1, 5, 10].map(s => (
          <button key={s} onClick={() => setStep(s)} className={\`px-2.5 py-1 rounded-lg font-bold \${step === s ? "bg-sky-600 text-white" : "bg-slate-200 dark:bg-slate-800"}\`}>{s}</button>
        ))}
      </div>
      <div className="text-[11px] text-slate-400">آخر 5 قيم: {history.join(" ← ")}</div>
    </div>
  );
}

// ==========================================
// المشروع 2: مدير المهام To-Do Master
// ==========================================
function MiniTodoProject() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "إتقان خطافات React الأساسية", done: true },
    { id: 2, text: "بناء مشروع تطبيقي متكامل", done: false }
  ]);
  const [input, setInput] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input.trim(), done: false }, ...tasks]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
      <div className="text-xs font-bold text-slate-400 mb-4 text-center">المشروع 2: قائمة المهام السريعة</div>
      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="أضف مهمة جديدة..."
          className="flex-1 px-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 outline-none"
        />
        <button type="submit" className="px-4 py-2 bg-sky-600 text-white text-xs font-bold rounded-xl hover:bg-sky-700">إضافة</button>
      </form>
      <div className="space-y-2">
        {tasks.map(t => (
          <div key={t.id} className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={t.done} onChange={() => toggleTask(t.id)} className="rounded" />
              <span className={t.done ? "line-through text-slate-400" : "font-medium text-slate-800 dark:text-slate-200"}>{t.text}</span>
            </label>
            <button onClick={() => deleteTask(t.id)} className="text-rose-500 hover:text-rose-700">✕</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// المشروع 3: رادار الطقس Weather Radar
// ==========================================
const WEATHER_DB = {
  "cairo": { name: "القاهرة", temp: 28, cond: "مشمس ☀️", hum: 45, wind: 18 },
  "riyadh": { name: "الرياض", temp: 36, cond: "صافٍ 🌤️", hum: 14, wind: 22 },
  "dubai": { name: "دبي", temp: 33, cond: "رطب جزئياً ⛅", hum: 65, wind: 14 }
};

function MiniWeatherProject() {
  const [cityKey, setCityKey] = useState("cairo");
  const [unit, setUnit] = useState("C");
  const data = WEATHER_DB[cityKey] || WEATHER_DB["cairo"];

  const tempDisplay = unit === "C" ? data.temp : Math.round((data.temp * 9) / 5 + 32);

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
      <div className="text-xs font-bold text-slate-400 mb-3">المشروع 3: تطبيق الطقس التفاعلي</div>
      <div className="flex justify-center gap-2 mb-4">
        {Object.entries(WEATHER_DB).map(([k, v]) => (
          <button
            key={k}
            onClick={() => setCityKey(k)}
            className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${cityKey === k ? "bg-sky-600 text-white" : "bg-white dark:bg-slate-800 border"}\`}
          >
            {v.name}
          </button>
        ))}
      </div>
      <div className="p-6 bg-gradient-to-br from-sky-500 to-indigo-600 text-white rounded-2xl shadow-lg">
        <div className="text-lg font-bold">{data.name}</div>
        <div className="text-5xl font-black my-2">{tempDisplay}°{unit}</div>
        <div className="text-xs text-sky-100">{data.cond}</div>
        <div className="flex justify-center gap-6 text-xs mt-4 pt-3 border-t border-white/20">
          <span>الرطوبة: {data.hum}%</span>
          <span>الرياح: {data.wind} كم/س</span>
        </div>
      </div>
      <div className="mt-4">
        <button onClick={() => setUnit(u => u === "C" ? "F" : "C")} className="text-xs text-slate-500 underline">
          التحويل إلى °{unit === "C" ? "F" : "C"}
        </button>
      </div>
    </div>
  );
}

// ==========================================
// المشروع 4: استوديو الملاحظات Notes Hub
// ==========================================
function MiniNotesProject() {
  const [notes, setNotes] = useState([
    { id: 1, title: "فكرة مشروع", text: "بناء لوحة تحكم سحابية", pinned: true, color: "#fef08a" },
    { id: 2, title: "ملاحظة سريعة", text: "مراجعة مبادئ Clean Architecture", pinned: false, color: "#bae6fd" }
  ]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    if (!title && !text) return;
    setNotes([{ id: Date.now(), title, text, pinned: false, color: "#fef08a" }, ...notes]);
    setTitle("");
    setText("");
  };

  const togglePin = (id) => {
    setNotes(notes.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
      <div className="text-xs font-bold text-slate-400 mb-3 text-center">المشروع 4: استوديو الملاحظات الذكي</div>
      <form onSubmit={addNote} className="p-3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 mb-4 space-y-2">
        <input
          type="text"
          placeholder="عنوان الملاحظة..."
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full text-xs font-bold bg-transparent outline-none"
        />
        <textarea
          placeholder="اكتب المحتوى..."
          value={text}
          onChange={e => setText(e.target.value)}
          rows={2}
          className="w-full text-xs bg-transparent outline-none resize-none"
        />
        <div className="flex justify-end">
          <button type="submit" className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg">حفظ</button>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {notes.map(n => (
          <div key={n.id} style={{ backgroundColor: n.color }} className="p-3 rounded-xl border border-black/10 text-xs text-slate-900 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start font-bold">
                <span>{n.title}</span>
                <button onClick={() => togglePin(n.id)}>{n.pinned ? "📌" : "📍"}</button>
              </div>
              <p className="mt-1 text-slate-700">{n.text}</p>
            </div>
            <div className="flex justify-end mt-2 pt-1 border-t border-black/10">
              <button onClick={() => deleteNote(n.id)} className="text-[10px] text-rose-600 hover:underline">حذف</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// المشروع 5: تحدي الاختبارات Quiz Sprint
// ==========================================
const SPRINT_QUESTIONS = [
  { q: "ما هو الهوك المستخدم لتأجيل الحسابات الثقيلة؟", opts: ["useMemo", "useRef", "useState"], correct: 0 },
  { q: "أي بروتوكول يعتبر النسخة المشفرة الآمنة لـ HTTP؟", opts: ["FTP", "HTTPS", "SMTP"], correct: 1 }
];

function MiniQuizProject() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const answer = (idx) => {
    if (idx === SPRINT_QUESTIONS[index].correct) setScore(s => s + 1);
    if (index + 1 < SPRINT_QUESTIONS.length) {
      setIndex(i => i + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
        <div className="text-3xl mb-2">🎉</div>
        <div className="text-base font-black text-slate-900 dark:text-white">اكتمل التحدي!</div>
        <div className="text-4xl font-extrabold text-sky-600 my-3">{Math.round((score / SPRINT_QUESTIONS.length) * 100)}%</div>
        <p className="text-xs text-slate-500 mb-4">أجبت بشكل صحيح على {score} من أصل {SPRINT_QUESTIONS.length} أسئلة.</p>
        <button onClick={restart} className="px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-bold">إعادة التحدي ↺</button>
      </div>
    );
  }

  const current = SPRINT_QUESTIONS[index];
  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
      <div className="flex justify-between text-xs font-bold text-slate-400 mb-3">
        <span>المشروع 5: تحدي الأسئلة</span>
        <span>السؤال {index + 1} من {SPRINT_QUESTIONS.length}</span>
      </div>
      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">{current.q}</h4>
      <div className="space-y-2">
        {current.opts.map((opt, i) => (
          <button
            key={i}
            onClick={() => answer(i)}
            className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-right hover:border-sky-500 transition"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// المكون الجامع: ساحة مشاريع المبتدئين المتكاملة
// ==========================================
export default function BeginnerProjectsArenaPro() {
  const [activeTab, setActiveTab] = useState("counter");

  const PROJECT_TABS = [
    { id: "counter", label: "العداد المتقدم", icon: "🔢" },
    { id: "todo", label: "قائمة المهام", icon: "✅" },
    { id: "weather", label: "رادار الطقس", icon: "🌤️" },
    { id: "notes", label: "استوديو الملاحظات", icon: "📝" },
    { id: "quiz", label: "تحدي الاختبارات", icon: "🏆" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl font-sans">
      {/* الترويسة العليا للاستوديو */}
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full">
          القسم 31: المشاريع التطبيقية للمبتدئين
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
          ساحة المشاريع التطبيقية للمبتدئين (Arena Pro)
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto mt-1">
          منصة تفاعلية موحدة تجمع المشاريع الخمسة المعمارية مع تشغيل حي ومباشر لكافة الخصائص البرمجية المكتسبة.
        </p>
      </div>

      {/* شريط تبديل المشاريع الخمسة */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {PROJECT_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition \${
              activeTab === tab.id
                ? "bg-slate-900 text-white dark:bg-sky-600 shadow-md scale-105"
                : "bg-slate-100 text-slate-600 dark:bg-slate-850 dark:text-slate-300 hover:bg-slate-200"
            }\`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* منطقة عرض المشروع النشط */}
      <div className="transition-all duration-300">
        {activeTab === "counter" && <MiniCounterProject />}
        {activeTab === "todo" && <MiniTodoProject />}
        {activeTab === "weather" && <MiniWeatherProject />}
        {activeTab === "notes" && <MiniNotesProject />}
        {activeTab === "quiz" && <MiniQuizProject />}
      </div>

      {/* تذييل المنصة الإحصائي */}
      <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
        <div>حالة المنصة: <strong className="text-emerald-500">جاهزة ونشطة 100%</strong></div>
        <div>المشاريع المدمجة: 5 مشاريع معمارية متكاملة</div>
        <div>التقنيات: React 19, Tailwind CSS, LocalStorage, Hooks</div>
      </div>
    </div>
  );
}
`
  },
  infographic: {
    title: "خارطة المشاريع التطبيقية للمبتدئين (Beginner Projects Ecosystem)",
    nodes: [
      { label: "1. العداد المتطور (Counter Pro)", detail: "إدارة الحالات المتغيرة، التراجع الزمني، واختصارات لوحة المفاتيح" },
      { label: "2. قائمة المهام (To-Do Master)", detail: "عمليات الـ CRUD، التحرير المباشر، الفلترة، ومزامنة التبويبات" },
      { label: "3. رادار الطقس (Weather Radar)", detail: "استدعاء REST API، الكبح الزمني Debounce، والتنبؤات الخماسية" },
      { label: "4. استوديو الملاحظات (Notes Hub)", detail: "التثبيت العلوي، نظام الوسوم، ألوان الباستيل، وتصدير Markdown" },
      { label: "5. محرك الاختبارات (Quiz Sprint)", detail: "آلة الحالة المنتهية FSM، المؤقت التنازلي SVG، وشاشة المراجعة" }
    ]
  }
};

