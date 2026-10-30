// src/data/sections/section7/section7Meta.js
// بيانات القسم 7: الملخص، جدول المرجع السريع، والمشروع المصغر

export const SECTION_7_META = {
  id: "section-7",
  title: "القسم 7: React Hooks الأساسية",
  englishTitle: "Essential React Hooks Architecture & Custom Hooks",
  description: "المحرك التقني الأقوى في منظومة React الحديثة: القواعد الدستورية للخطافات، إدارة الآثار الجانبية ومزامنة الأنظمة الخارجية بـ useEffect، الذاكرة الصامتة والتحكم المباشر في عقد DOM بـ useRef، بث البيانات الشاملة وتخطي Props Drilling بـ useContext، معمارية آلات الحالات النقية بـ useReducer، وهندسة ترسانة Custom Hooks كاملة قابلة لإعادة الاستخدام.",
  summary: [
    "قواعد الخطافات الصارمة (Rules of Hooks): تُستدعى دائماً في المستوى الأعلى (Top-Level) قبل أي شروط if أو حلقات تكرارية أو return مبكر، وتُستدعى حصراً داخل المكونات الوظيفية والخطافات المخصصة.",
    "تعتمد React على الترتيب التتابعي الصارم (Linked List Cursor)؛ أي تغيير في عدد أو تسلسل الخطافات بين الرندرات يفسد مطابقة الذاكرة ويؤدي لانهيار فوري للتطبيق.",
    "إدارة الآثار الجانبية بـ useEffect: تعمل بعد اكتمال مرحلة التثبيت (Commit Phase). مصفوفة [] تعني التنفيذ عند التركيب فقط، وتضمين كافة المتغيرات المستعملة داخل المصفوفة إلزامي لمنع الوقوع في فخاخ Stale Closures.",
    "دوال التنظيف (Cleanup Functions) في useEffect حاسمة: يجب إلغاء مؤقتات setInterval، إزالة مستمعات window.removeEventListener، وإلغاء طلبات الشبكة المعلقة عبر AbortController لمنع مشاكل السباق (Race Conditions).",
    "الذاكرة الصامتة بـ useRef: كائن ثابت بهوية مستقرة { current: ... } يحتفظ بالقيم عبر الرندرات دون إطلاق إعادة تصيير، وهو الوسيلة القياسية للوصول المباشر لعقد DOM وحفظ معرفات المؤقتات.",
    "السياق العام بـ useContext: يحل أزمة Props Drilling بتوفير مصدر حقيقة عام؛ ويجب تجزئة السياقات (Context Splitting) إلى سياق بيانات وسياق إجراءات لمنع إعادة تصيير شجرة المكونات بالكامل عند كل تعديل بسيط.",
    "آلة الحالات النقية بـ useReducer: المعمارية القياسية لإدارة الحالات المعقدة والمتعددة المترابطة؛ يعتمد على دالة نقية (state, action) => nextState وكائنات إجراءات واضحة تفصل 'ماذا حدث' عن 'كيف تتغير الحالة'.",
    "الخطافات المخصصة Custom Hooks: تصدير المنطق المشترك في دوال تبدأ بـ use وتستدعي خطافات React؛ تمنح كل مكون مساحة ذاكرة مستقلة بنقاء تام، مع اعتماد نمط المصفوفة [val, fn] للمتغيرات الفردية ونمط الكائن { data, loading, error } للعمليات المركبة."
  ],
  cheatSheet: [
    {
      concept: "قاعدة المستوى الأعلى Top-Level Rule",
      syntax: "// في قمة المكون دائماً وقبل أي if أو loop\nconst [val, setVal] = useState(0);\nuseEffect(() => { ... }, []);",
      note: "يُحظر استدعاء أي خطاف داخل الشروط أو الحلقات للحفاظ على مؤشر القائمة المترابطة بالذاكرة."
    },
    {
      concept: "تنفيذ التأثير عند البداية فقط Mount Effect",
      syntax: "useEffect(() => {\n  console.log('تم التحميل مرة واحدة');\n}, []);",
      note: "المصفوفة الفارغة [] تخبر React بأن التأثير لا يعتمد على أي حالة متغيرة فيعمل عند التركيب فقط."
    },
    {
      concept: "التأثير التفاعلي مع المتغيرات Dependency Effect",
      syntax: "useEffect(() => {\n  fetchUser(userId);\n}, [userId]);",
      note: "يعاد تشغيل التأثير فقط عندما تتغير القيمة المرجعية لـ userId بين رندر وآخر."
    },
    {
      concept: "دالة تنظيف التأثير Cleanup Function",
      syntax: "useEffect(() => {\n  const id = setInterval(tick, 1000);\n  return () => clearInterval(id);\n}, []);",
      note: "تعمل الدالة المرجعة قبل تنفيذ التأثير القادم وعند تفكيك المكون (Unmount) لتفريغ الذاكرة."
    },
    {
      concept: "إلغاء الطلبات المعلقة AbortController",
      syntax: "const ctl = new AbortController();\nfetch(url, { signal: ctl.signal });\nreturn () => ctl.abort();",
      note: "الحل النموذجي لحماية التطبيق من سباق البيانات (Race Conditions) وتجاهل الطلبات القديمة."
    },
    {
      concept: "الوصول المباشر لعنصر DOM عبر useRef",
      syntax: "const inputRef = useRef(null);\n// في JSX:\n<input ref={inputRef} />\n// للتركيز:\ninputRef.current.focus();",
      note: "يربط المرجع بعقدة DOM الحقيقية بمجرد اكتمال مرحلة التثبيت في الشاشة."
    },
    {
      concept: "حفظ قيمة متغيرة دون رندر Mutable Ref",
      syntax: "const timerId = useRef(null);\ntimerId.current = setTimeout(...);",
      note: "تغيير timerId.current لا يطلق إعادة تصيير إطلاقاً؛ ممتاز لحفظ المؤقتات والقيم السابقة."
    },
    {
      concept: "إنشاء السياق createContext",
      syntax: "export const ThemeContext = createContext('dark');",
      note: "ينشئ كائن السياق مع قيمة افتراضية اختيارية تُستخدم فقط عند غياب الـ Provider."
    },
    {
      concept: "توفير القيمة Context.Provider",
      syntax: "<ThemeContext.Provider value={{ theme, toggleTheme }}>\n  <App />\n</ThemeContext.Provider>",
      note: "يغلف شجرة المكونات لبث البيانات والدوال لكافة الأبناء والأحفاد دون تمرير Props."
    },
    {
      concept: "استهلاك السياق useContext",
      syntax: "const { theme, toggleTheme } = useContext(ThemeContext);",
      note: "يعيد أحدث قيمة موجودة في أقرب Provider في الشجرة، ويعيد تصيير المكون فور تغيرها."
    },
    {
      concept: "فصل السياقات Context Splitting",
      syntax: "<DataContext.Provider value={data}>\n  <DispatchContext.Provider value={dispatch}>\n    ...\n  </DispatchContext.Provider>\n</DataContext.Provider>",
      note: "تقنية تحسين أداء متقدمة تمنع إعادة تصيير المكونات التي ترسل أوامر فقط دون قراءة البيانات."
    },
    {
      concept: "دالة المخفض useReducer Reducer",
      syntax: "function reducer(state, action) {\n  switch(action.type) {\n    case 'ADD': return { ...state, count: state.count + 1 };\n    default: return state;\n  }\n}",
      note: "دالة نقية 100% بدون آثار جانبية تحسب الحالة التالية اعتماداً على نوع الإجراء والبيانات."
    },
    {
      concept: "إرسال الإجراءات dispatch",
      syntax: "dispatch({ type: 'ADD', payload: 5 });",
      note: "ترسل كائن الإجراء للـ Reducer؛ ودالة dispatch تملك مرجعاً ثابتاً ومستقراً لا يتغير أبداً."
    },
    {
      concept: "التهيئة الكسولة في useReducer",
      syntax: "const [state, dispatch] = useReducer(reducer, arg, initFn);",
      note: "تمرير دالة initFn كمعامل ثالث يؤجل قراءة الذاكرة والتخزين المحلي حتى لحظة بدء التشغيل فقط."
    },
    {
      concept: "بادئة تسمية الخطافات use Prefix",
      syntax: "function useAuthToken() { ... } // ✅ متوافق\nfunction getAuthToken() { ... } // ❌ غير مفحوص",
      note: "بادئة use إلزامية لتفعيل فحص وتدقيق أداة eslint-plugin-react-hooks التلقائي."
    },
    {
      concept: "خطاف التبديل المنطقي useToggle",
      syntax: "const [isOpen, toggle, setTrue, setFalse] = useToggle(false);",
      note: "يختصر إدارة القوائم والنوافذ المنبثقة بدوال مساعدة مثبتة المرجع عبر useCallback."
    },
    {
      concept: "مزامنة التخزين useLocalStorage",
      syntax: "const [theme, setTheme] = useLocalStorage('theme', 'dark');",
      note: "يربط حالة React بـ localStorage تلقائياً مع تشفير وفك تشفير JSON والتهيئة الكسولة."
    },
    {
      concept: "تأخير المدخلات useDebounce",
      syntax: "const debouncedQuery = useDebounce(query, 500);",
      note: "يؤخر تحديث القيمة حتى يتوقف المستخدم عن الكتابة لمدة 500ms لتوفير طلبات السيرفر."
    },
    {
      concept: "مراقبة أبعاد الشاشة useWindowSize",
      syntax: "const { width, height, isMobile } = useWindowSize();",
      note: "يستمع لحدث window.resize مع تنظيف المستمع عند التفكيك وحماية ضد أخطاء السيرفر SSR."
    },
    {
      concept: "جلب البيانات useFetch",
      syntax: "const { data, loading, error, refetch } = useFetch('/api/items');",
      note: "يدير حالات التحميل والأخطاء تلقائياً ويدعم إلغاء الطلبات المتأخرة عبر AbortController."
    },
    {
      concept: "اختبار الخطافات renderHook & act",
      syntax: "const { result } = renderHook(() => useCounter());\nact(() => { result.current.increment(); });",
      note: "الأداة المعيارية من @testing-library/react لاختبار منطق الخطافات المخصصة بمعزل عن الواجهة."
    }
  ],
  miniProject: {
    id: "mini-project-section-7",
    title: "منصة HooksCraft Pro: استوديو الخطافات المتكامل وإدارة التزامن",
    englishTitle: "HooksCraft Pro: Full-Stack React Hooks & Custom Logic Studio",
    description: "تطبيق عملي متكامل يجمع ترسانة القسم السابع بالكامل في لوحة تفاعلية واحدة: تطبيق useReducer لإدارة آلة حالات المهام المتقدمة (إضافة، تعديل، أرشفة، تصفية)، استخدام useContext لبث سمات المظهر والإعدادات العامة، توظيف useRef لتركيز الإدخال التلقائي وحفظ معرفات مؤقت الجلسة التنازلي، بناء وممارسة Custom Hooks حقيقية مثل useLocalStorage لحفظ تفضيلات الجلسة، useDebounce لتهدئة استعلامات البحث في المهام، useToggle لفتح وإغلاق النوافذ الجانبية، و useWindowSize لعرض أبعاد نافذة المطور الحية.",
    code: `import { useState, useEffect, useRef, useReducer, useContext, createContext, useCallback } from "react";

// ==========================================
// 1. هندسة السياق العام (Global Settings Context)
// ==========================================
const SettingsContext = createContext(null);

function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}

// ==========================================
// 2. ترسانة الخطافات المخصصة (Custom Hooks Arsenal)
// ==========================================

// خطاف useToggle لإدارة القيم الثنائية
function useToggle(initial = false) {
  const [val, setVal] = useState(Boolean(initial));
  const toggle = useCallback(() => setVal((v) => !v), []);
  const setTrue = useCallback(() => setVal(true), []);
  const setFalse = useCallback(() => setVal(false), []);
  return [val, toggle, setTrue, setFalse];
}

// خطاف useDebounce لتأخير قيمة البحث
function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

// خطاف useLocalStorage لتخزين الحالة محلياً
function useLocalStorage(key, fallback) {
  const [stored, setStored] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(stored));
    } catch (e) {
      console.error(e);
    }
  }, [key, stored]);

  return [stored, setStored];
}

// ==========================================
// 3. آلة الحالات useReducer لإدارة سجل الأنشطة
// ==========================================
const initialTasks = [
  { id: 1, title: "مراجعة قواعد الخطافات النظيفة", status: "completed", tag: "Architecture" },
  { id: 2, title: "بناء خطاف useDebounce مخصص", status: "in-progress", tag: "Performance" },
  { id: 3, title: "تطبيق معمارية Context Splitting", status: "pending", tag: "Optimization" }
];

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [{ id: Date.now(), title: action.payload.title, status: "pending", tag: action.payload.tag || "General" }, ...state];
    case "TOGGLE":
      return state.map((t) =>
        t.id === action.payload ? { ...t, status: t.status === "completed" ? "pending" : "completed" } : t
      );
    case "DELETE":
      return state.filter((t) => t.id !== action.payload);
    case "RESET":
      return initialTasks;
    default:
      return state;
  }
}

// ==========================================
// 4. المكون الرئيسي: HooksCraft Pro Studio
// ==========================================
export function HooksCraftStudio() {
  // تفضيلات محفوظة محلياً عبر Custom Hook
  const [brandTheme, setBrandTheme] = useLocalStorage("hookscraft_theme", "emerald");
  // إدارة حالة فتح/إغلاق اللوحة الجانبية
  const [isStatsOpen, toggleStats] = useToggle(true);

  // إدارة آلة الحالات المعقدة للمهام عبر useReducer
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // حالة البحث مع الخطاف المخصص useDebounce
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 350);

  // مرجع DOM لحقل الإدخال السريع عبر useRef
  const inputRef = useRef(null);

  // مرجع لحفظ معرف المؤقت الزمني للجلسة الصامتة
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const timerRef = useRef(null);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // تشغيل المؤقت وإدارته بـ useEffect و useRef
  useEffect(() => {
    if (isTimerRunning) {
      timerRef.current = setInterval(() => {
        setSessionSeconds((s) => s + 1);
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning]);

  // التركيز التلقائي على حقل الإدخال
  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  // معالجة إضافة مهمة جديدة
  const [newTitle, setNewTitle] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    dispatch({ type: "ADD", payload: { title: newTitle.trim(), tag: "CustomHook" } });
    setNewTitle("");
    inputRef.current?.focus();
  };

  // تصفية المهام المشتقة بالاعتماد على useDebounce
  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const completedCount = tasks.filter((t) => t.status === "completed").length;

  return (
    <SettingsContext.Provider value={{ brandTheme, setBrandTheme }}>
      <div className="p-6 bg-slate-950 border border-slate-800 rounded-3xl text-white max-w-4xl mx-auto space-y-6 shadow-2xl font-sans" dir="rtl">
        {/* ترويسة الاستوديو الرئيسية */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 rounded-xl text-lg">🪝</span>
              <div>
                <h3 className="text-lg font-black text-white">منصة HooksCraft Pro التفاعلية</h3>
                <p className="text-xs text-slate-400">لوحة تحكم معمارية تجمع useState, useEffect, useRef, useContext, useReducer و Custom Hooks</p>
              </div>
            </div>
          </div>

          {/* مؤقت الجلسة التنازلي وعداد الثواني المعتمد على useRef */}
          <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-2xl border border-slate-800 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-slate-400">وقت الجلسة:</span>
            <span className="font-mono font-bold text-emerald-400 text-sm">
              {Math.floor(sessionSeconds / 60)}:{(sessionSeconds % 60).toString().padStart(2, "0")}
            </span>
            <button
              onClick={() => setIsTimerRunning((r) => !r)}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded text-slate-300 transition-colors"
            >
              {isTimerRunning ? "إيقاف مؤقت ⏸️" : "استئناف ▶️"}
            </button>
          </div>
        </div>

        {/* شريط الأدوات: البحث المؤجل بـ useDebounce وزر التركيز بـ useRef وتبديل النوافذ بـ useToggle */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* حقل البحث المتصل بـ useDebounce */}
          <div className="relative md:col-span-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث في المهام (استعلام مؤجل بـ useDebounce تلقائياً)..."
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            {debouncedSearch && (
              <span className="absolute left-3 top-2.5 text-[10px] font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded">
                مؤجل: "{debouncedSearch}"
              </span>
            )}
          </div>

          {/* أزرار الإجراءات السريعة */}
          <div className="flex gap-2">
            <button
              onClick={handleFocusInput}
              className="flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-bold text-slate-300 transition-all flex items-center justify-center gap-1.5"
            >
              <span>تركيز الإدخال 🎯</span>
              <span className="text-[10px] text-slate-500 font-mono">(useRef)</span>
            </button>
            <button
              onClick={toggleStats}
              className="py-2 px-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-bold text-slate-300 transition-all"
              title="تبديل عرض الإحصائيات عبر useToggle"
            >
              {isStatsOpen ? "إخفاء اللوحة 🔼" : "إظهار اللوحة 🔽"}
            </button>
          </div>
        </div>

        {/* لوحة الإحصائيات القابلة للطي عبر useToggle */}
        {isStatsOpen && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl">
              <span className="text-[10px] text-slate-400 block mb-1">إجمالي المهام (useReducer):</span>
              <span className="text-xl font-bold font-mono text-indigo-400">{tasks.length}</span>
            </div>
            <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl">
              <span className="text-[10px] text-slate-400 block mb-1">المهام المكتملة:</span>
              <span className="text-xl font-bold font-mono text-emerald-400">{completedCount}</span>
            </div>
            <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl">
              <span className="text-[10px] text-slate-400 block mb-1">المظهر المحفوظ محلياً:</span>
              <span className="text-xs font-bold font-mono text-amber-400 bg-amber-950/50 px-2 py-1 rounded inline-block mt-1">
                {brandTheme} (useLocalStorage)
              </span>
            </div>
            <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block mb-1">إعادة تعيين الحالة:</span>
                <span className="text-[11px] text-slate-500">استعادة المهام الأصلية</span>
              </div>
              <button
                onClick={() => dispatch({ type: "RESET" })}
                className="text-xs p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors"
                title="إرسال إجراء RESET للـ Reducer"
              >
                🔄
              </button>
            </div>
          </div>
        )}

        {/* نموذج إضافة مهمة جديدة مع التركيز بـ inputRef */}
        <form onSubmit={handleAddTask} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="اكتب مهمة هندسية جديدة واضغط Enter..."
            className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-900/30"
          >
            إضافة للمصفوفة ➕
          </button>
        </form>

        {/* قائمة المهام التفاعلية المدارة بـ useReducer */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-400 px-1">
            <span>سجل الأنشطة والمطابقة ({filteredTasks.length} مهام مطابقة):</span>
            <span className="text-[11px] font-mono text-slate-500">Reducer Dispatch Engine</span>
          </div>

          {filteredTasks.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs border border-dashed border-slate-800 rounded-2xl">
              لا توجد مهام مطابقة لاستعلام البحث "{debouncedSearch}"
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl flex justify-between items-center text-xs transition-all hover:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}
                    className={\`w-5 h-5 rounded-lg flex items-center justify-center font-bold text-xs transition-colors \${
                      task.status === "completed"
                        ? "bg-emerald-500 text-slate-950"
                        : "border border-slate-600 hover:border-slate-400 text-transparent"
                    }\`}
                  >
                    ✓
                  </button>
                  <span className={\`font-medium \${task.status === "completed" ? "line-through text-slate-500" : "text-slate-100"}\`}>
                    {task.title}
                  </span>
                  <span className="text-[9px] font-mono bg-slate-950 text-indigo-400 border border-slate-800 px-2 py-0.5 rounded-full">
                    {task.tag}
                  </span>
                </div>

                <button
                  onClick={() => dispatch({ type: "DELETE", payload: task.id })}
                  className="text-slate-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </SettingsContext.Provider>
  );
}
`,
    infographic: {
      title: "معمارية منصة HooksCraft Pro المتكاملة",
      description: "التنسيق الهرمي لخطافات React الأساسية والمخصصة لإدارة الحالة والآثار والذاكرة في تطبيق واحد.",
      sections: [
        {
          heading: "1. طبقة السياق والذاكرة العامة (Context Layer)",
          bullets: [
            "SettingsContext: بث تفضيلات المظهر والتنسيق لكافة أرجاء التطبيق بدون Props Drilling.",
            "useLocalStorage: ربط الحالة المستمرة بذاكرة المتصفح للثبات بعد إعادة التحميل."
          ]
        },
        {
          heading: "2. طبقة آلة الحالات (Reducer State Machine)",
          bullets: [
            "taskReducer: دالة نقية تدير إجراءات ADD, TOGGLE, DELETE, RESET.",
            "dispatch: إرسال إجراءات قياسية معزولة ومحمية من التعديل المباشر."
          ]
        },
        {
          heading: "3. طبقة الأداء والتفاعل (Optimization & DOM)",
          bullets: [
            "useDebounce: تأخير فلترة استعلام البحث لتوفير موارد المعالجة.",
            "useRef: التحكم المباشر في تركيز حقل الإدخال والاحتفاظ بمعرف المؤقت الزمني الصامت.",
            "useToggle: تحكم أنيق في فتح وغلق النوافذ المنبثقة والإحصائيات."
          ]
        }
      ]
    }
  },
  infographic: {
    title: "خارطة React Hooks الأساسية الشاملة",
    description: "الدليل المرجعي الكامل للخطافات الستة الرئيسية وهندسة Custom Hooks في منظومة React 19.",
    sections: [
      {
        heading: "1. خطافات الحالة والذاكرة (State & Memory)",
        bullets: [
          "useState: إدارة الحالة المحلية الفردية مع التحديث الوظيفي والتجميع التلقائي.",
          "useReducer: آلة حالات نقية معقدة للحالات المتشعبة وإجراءات dispatch.",
          "useRef: ذاكرة صامتة لا تطلق رندر لحفظ مؤقتات المتصفح والوصول لـ DOM."
        ]
      },
      {
        heading: "2. خطافات التأثيرات والأنظمة الخارجية (Effects & Sync)",
        bullets: [
          "useEffect: مزامنة الأنظمة الخارجية والشبكة مع دوال التنظيف وإلغاء AbortController.",
          "قواعد الخطافات الصارمة: الاستدعاء في القمة دائماً ونفس الترتيب في كل رندر."
        ]
      },
      {
        heading: "3. خطافات الاتصال وإعادة الاستخدام (Context & Custom Hooks)",
        bullets: [
          "useContext: بث البيانات العامة وتخطي Props Drilling مع تقنية Context Splitting.",
          "Custom Hooks: استخراج منطق الحالة المشترك في دوال تبدأ بـ use لحماية DRY.",
          "ترسانة الإنتاج: useToggle, useLocalStorage, useDebounce, useWindowSize, useFetch."
        ]
      }
    ]
  }
};
