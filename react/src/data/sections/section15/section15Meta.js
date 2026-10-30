// section15Meta.js - القسم 15: React Hooks المتقدمة ومفاهيم React الحديثة

export const section15Meta = {
  id: 15,
  title: "React Hooks المتقدمة ومفاهيم React الحديثة",
  englishTitle: "Advanced React Hooks & Modern React",
  description: "المرجع الشامل والاحترافي لإتقان خطافات React المتقدمة وتقنيات الأداء الحديثة؛ بدءاً من التخزين المؤقت وحسابات useMemo و useCallback، وقياس الـ DOM المتزامن بـ useLayoutEffect والمقابض الإجرائية useImperativeHandle، وتوليد المعرفات بـ useId، والاشتراك الآمن بـ useSyncExternalStore، وصولاً إلى ثورة React 19 في الإجراءات (Actions)، والتحديثات المتفائلة بـ useOptimistic، والواجهة الثورية use، ومستقبل المعالجة مع React Compiler.",
  summary: [
    "قس الأداء دائماً بواسطة React Profiler و performance.now() قبل إضافة useMemo أو useCallback؛ فالتحسين المبكر يزيد من تعقيد الشفرة واستهلاك الذاكرة دون مبرر.",
    "استخدم useMemo للعمليات الحسابية التي تتجاوز 1 ملي ثانية ولتثبيت مراجع الكائنات والمصفوفات الممرة للمكونات الفرعية المغلفة بـ React.memo.",
    "تذكر أن useCallback لا يقدم أي مكسب بمفرده ما لم يكن المكون المستهلك مغلفاً بحارس React.memo أو كانت الدالة داخل مصفوفة اعتماديات لـ useEffect.",
    "اختر useEffect كخيار افتراضي في 98% من الحالات، واحصر استخدام useLayoutEffect في قياس أبعاد الـ DOM وتطبيق المواضع المتزامنة قبل رسم الشاشة لمنع الوميض البصري.",
    "في React 19، أصبح بالإمكان استقبال ref كخاصية عادية (Standard Prop) مباشرة في معاملات المكون دون الحاجة لدالة forwardRef القديمة.",
    "استخدم useId حصراً لسمات الـ DOM وإمكانية الوصول (htmlFor و aria-describedby) لتفادي أخطاء الـ Hydration، ويُحظر استخدامه لتوليد مفاتيح key في القوائم.",
    "استعن بـ useSyncExternalStore للاشتراك في مصادر البيانات وواجهات المتصفح الخارجية لمنع ظاهرة التمزق (Tearing) في المعالجة المتزامنة.",
    "استفد من ثورة React 19 في استخدام Actions لإدارة النماذج، و useOptimistic لتوفير استجابة لحظية بـ 0ms، والواجهة use لفك الوعود والسياق شرطياً."
  ],
  cheatSheet: [
    {
      concept: "useMemo",
      syntax: "const val = useMemo(() => heavy(a, b), [a, b]);",
      description: "حفظ ناتج عملية حسابية مكلفة وتثبيت مراجع الكائنات عبر عمليات إعادة التصيير."
    },
    {
      concept: "useCallback",
      syntax: "const fn = useCallback((x) => doWork(x), [dep]);",
      description: "تثبيت مرجع الدالة في الذاكرة لتفادي إعادة تصيير المكونات المغلفة بـ React.memo."
    },
    {
      concept: "React.memo",
      syntax: "const MemoComponent = React.memo(MyComponent);",
      description: "مقارنة سطحية لـ Props لتخطي إعادة تصيير المكون إذا لم تتغير خصائصه."
    },
    {
      concept: "useEffect Timing",
      syntax: "useEffect(() => { ... }, []);",
      description: "تنفيذ غير متزامن بعد اكتمال رسم الشاشة (After Paint)؛ الخيار الافتراضي دائماً."
    },
    {
      concept: "useLayoutEffect Timing",
      syntax: "useLayoutEffect(() => { ... }, []);",
      description: "تنفيذ متزامن يحجب رسم المتصفح (Before Paint)؛ مخصص لقياس الـ DOM ومنع الوميض."
    },
    {
      concept: "useImperativeHandle",
      syntax: "useImperativeHandle(ref, () => ({ focus, reset }), []);",
      description: "تخصيص وتقنين ما يكشفه المكون الابن للمكون الأب عبر المرجع لحماية الـ DOM الداخلي."
    },
    {
      concept: "React 19 Ref Prop",
      syntax: "function Input({ ref, label }) { return <input ref={ref} />; }",
      description: "استقبال ref كـ Prop عادي بدون الحاجة لـ React.forwardRef القديمة."
    },
    {
      concept: "useId",
      syntax: "const id = useId();",
      description: "توليد معرف فريد ومستقر متطابق 100% بين السيرفر والمتصفح لحقول النماذج و a11y."
    },
    {
      concept: "htmlFor & aria-describedby",
      syntax: "<label htmlFor={id}> <input id={id} aria-describedby={`${id}-hint`} />",
      description: "الربط القياسي المعتمد لحقول الإدخال لتوسيع مساحة النقر ودعم قارئات الشاشة."
    },
    {
      concept: "External Store",
      syntax: "store.subscribe(callback) + store.getSnapshot()",
      description: "مصدر بيانات يعيش خارج شجرة React (مثل Zustand أو navigator.onLine)."
    },
    {
      concept: "useSyncExternalStore",
      syntax: "const val = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);",
      description: "الاشتراك الرسمي في المخازن الخارجية لمنع Tearing مع دعم كامل لـ SSR."
    },
    {
      concept: "Urgent vs Non-Urgent",
      syntax: "setInputValue(val) [عاجل] مقابل startTransition(() => setQuery(val)) [غير عاجل]",
      description: "التمييز بين التفاعلات الفورية والعمليات الخلفية القابلة للمقاطعة في المعالجة المتزامنة."
    },
    {
      concept: "useTransition",
      syntax: "const [isPending, startTransition] = useTransition();",
      description: "تغليف تحديثات الحالة كـ Transitions وتوفير مؤشر انتظار منطقي isPending."
    },
    {
      concept: "startTransition Standalone",
      syntax: "import { startTransition } from 'react'; startTransition(() => ...);",
      description: "دالة مستقلة لتسجيل التحديثات منخفضة الأولوية دون الحاجة لحالة isPending."
    },
    {
      concept: "useDeferredValue",
      syntax: "const deferredVal = useDeferredValue(val);",
      description: "تأجيل قيمة معينة كبديل ذكي لـ Debounce يتكيف تلقائياً مع سرعة معالج المستخدم."
    },
    {
      concept: "React 19 Actions",
      syntax: "<form action={async (formData) => { await save(formData); }}>",
      description: "دوال غير متزامنة مدمجة تدير حالات النماذج والانتقالات تلقائياً."
    },
    {
      concept: "useOptimistic",
      syntax: "const [optState, setOpt] = useOptimistic(state, (prev, val) => ...);",
      description: "تطبيق التحديث المتفائل اللحظي بـ 0ms مع تراجع تلقائي كامل (Rollback) عند الخطأ."
    },
    {
      concept: "useActionState",
      syntax: "const [state, formAction, isPending] = useActionState(actionFn, init);",
      description: "إدارة شاملة لدورات حياة النماذج والأخطاء ومؤشر isPending في React 19."
    },
    {
      concept: "use API (Promise & Context)",
      syntax: "const data = use(promise); if (c) { const ctx = use(MyContext); }",
      description: "واجهة React 19 الثورية لفك الوعود والسياق مع إمكانية الاستدعاء داخل جمل if."
    },
    {
      concept: "React Compiler",
      syntax: "// أتمتة التخزين المؤقت في وقت البناء (Build-time Auto Memoization)",
      description: "مترجم ذكي يحلل الشفرة ويحقن التحسينات تلقائياً مما ينهي عهد useMemo اليدوية."
    }
  ],
  miniProject: {
    id: "hookcraft-studio",
    title: "مشروع HookCraft Studio: استوديو خطافات React الحديثة والتفاعلية",
    englishTitle: "HookCraft Studio: Advanced React Hooks & React 19 Action Lab",
    description: "تطبيق استوديو تفاعلي يجمع كافة مهارات القسم 15 في بيئة تدريبية حية: مقارنة حية بين التحديث العاجل والانتقال المتزامن، واستخدام useOptimistic للتفاعل اللحظي بـ 0ms، وحقل نصي ذكي بمقبض إجرائي useImperativeHandle، وقياس الأداء بدقة بـ performance.now.",
    code: `// HookCraft Studio - Advanced React Hooks & Modern React 19 Lab
// استوديو تطبيقي يجمع أحدث خطافات React ومفاهيم المعالجة المتزامنة

import React, { useState, useTransition, useDeferredValue, useOptimistic, useRef, useImperativeHandle, useId, useMemo, useSyncExternalStore } from 'react';

// ==========================================
// 1. مخزن خارجي متزامن لمراقبة الشبكة (useSyncExternalStore)
// ==========================================

const networkStore = {
  subscribe: (cb: () => void) => {
    if (typeof window === 'undefined') return () => {};
    window.addEventListener('online', cb);
    window.addEventListener('offline', cb);
    return () => {
      window.removeEventListener('online', cb);
      window.removeEventListener('offline', cb);
    };
  },
  getSnapshot: () => (typeof navigator !== 'undefined' ? navigator.onLine : true),
  getServerSnapshot: () => true
};

function useOnlineStatus() {
  return useSyncExternalStore(networkStore.subscribe, networkStore.getSnapshot, networkStore.getServerSnapshot);
}

// ==========================================
// 2. مقبض إجرائي لحقل ذكي (useImperativeHandle بأسلوب React 19)
// ==========================================

export interface SmartFieldHandle {
  focus: () => void;
  clear: () => void;
  shakeError: () => void;
}

function ModernSmartInput({ ref, label, placeholder }: { ref?: React.Ref<SmartFieldHandle>; label: string; placeholder?: string }) {
  const domInputRef = useRef<HTMLInputElement>(null);
  const [shaking, setShaking] = useState(false);
  const inputId = useId();

  useImperativeHandle(ref, () => ({
    focus: () => domInputRef.current?.focus(),
    clear: () => {
      if (domInputRef.current) domInputRef.current.value = '';
    },
    shakeError: () => {
      setShaking(true);
      domInputRef.current?.focus();
      setTimeout(() => setShaking(false), 400);
    }
  }), []);

  return (
    <div className="space-y-1 mb-4">
      <label htmlFor={inputId} className="block text-xs font-semibold text-slate-300">
        {label}
      </label>
      <input
        ref={domInputRef}
        id={inputId}
        type="text"
        placeholder={placeholder}
        className={\`w-full px-3 py-2 bg-slate-900 border rounded-xl text-xs text-white focus:outline-none transition-all \${shaking ? 'border-rose-500 ring-4 ring-rose-500/20 translate-x-1' : 'border-slate-800 focus:border-cyan-500'}\`}
      />
    </div>
  );
}

// ==========================================
// 3. مكون النتائج المحسن بـ React.memo و useDeferredValue
// ==========================================

interface SearchItem {
  id: number;
  name: string;
  category: string;
}

const HEAVY_DATABASE: SearchItem[] = Array.from({ length: 3000 }, (_, i) => ({
  id: i + 1,
  name: \`حزمة برمجية متقدمة #\${i + 1}\`,
  category: i % 3 === 0 ? 'خطافات متزامنة' : i % 2 === 0 ? 'تحسين أداء' : 'إدارة خوادم'
}));

const SearchResultsGrid = React.memo(({ filterQuery }: { filterQuery: string }) => {
  const filtered = useMemo(() => {
    if (!filterQuery.trim()) return HEAVY_DATABASE.slice(0, 6);
    return HEAVY_DATABASE.filter((item) =>
      item.name.includes(filterQuery) || item.category.includes(filterQuery)
    ).slice(0, 6);
  }, [filterQuery]);

  return (
    <div className="grid grid-cols-2 gap-2">
      {filtered.map((item) => (
        <div key={item.id} className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs">
          <p className="font-semibold text-slate-200">{item.name}</p>
          <span className="text-[10px] text-cyan-400 font-mono">{item.category}</span>
        </div>
      ))}
    </div>
  );
});

// ==========================================
// 4. المكون الرئيسي: HookCraftStudioApp
// ==========================================

export default function HookCraftStudioApp() {
  const isOnline = useOnlineStatus();
  const smartInputRef = useRef<SmartFieldHandle>(null);

  // حالات البحث المتزامن بـ useDeferredValue
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const isStale = searchTerm !== deferredSearchTerm;

  // حالة التحديثات المتفائلة (useOptimistic)
  const [likes, setLikes] = useState(128);
  const [optimisticLikes, setOptimisticLikes] = useOptimistic(
    likes,
    (current, add: number) => current + add
  );

  // خطاف الانتقال useTransition لتبديل التبويبات
  const [tab, setTab] = useState<'search' | 'imperative' | 'optimistic'>('search');
  const [isPendingTab, startTabTransition] = useTransition();

  // معالج إعجاب متفائل
  const handleOptimisticLike = async () => {
    setOptimisticLikes(1);
    await new Promise((r) => setTimeout(r, 600));
    setLikes((l) => l + 1);
  };

  return (
    <div className="p-6 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl max-w-4xl mx-auto font-sans" dir="rtl">
      {/* الترويسة والشارات */}
      <div className="flex flex-wrap justify-between items-center pb-6 border-b border-slate-800 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg">
            React 19 Hooks Lab
          </span>
          <h1 className="text-2xl font-black text-white mt-2">استوديو HookCraft Pro</h1>
          <p className="text-xs text-slate-400">مختبر تطبيقي لأحدث خطافات المعالجة المتزامنة والتحكم الإجرائي في React</p>
        </div>

        <div className="flex items-center gap-2">
          <span className={\`text-xs px-3 py-1 rounded-full font-bold \${isOnline ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-400'}\`}>
            {isOnline ? 'الشبكة متصلة 🟢' : 'غير متصل 🔴'}
          </span>
        </div>
      </div>

      {/* أزرار التبويبات المدعومة بـ useTransition */}
      <div className="flex gap-2 my-6">
        {[
          { id: 'search', label: 'البحث المتزامن (useDeferredValue)' },
          { id: 'imperative', label: 'المقبض الإجرائي (useImperativeHandle)' },
          { id: 'optimistic', label: 'التحديث المتفائل (useOptimistic)' }
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => {
              startTabTransition(() => {
                setTab(t.id as any);
              });
            }}
            className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${tab === t.id ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/20' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}\`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* منطقة التبويب المحمية بخفض الشفافية أثناء isPendingTab */}
      <div className={\`transition-opacity duration-150 \${isPendingTab ? 'opacity-40' : 'opacity-100'}\`}>
        {tab === 'search' && (
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-slate-200">محرك البحث فائق الاستجابة (3,000 سجل)</h3>
              {isStale && <span className="text-[10px] text-cyan-400 font-bold animate-pulse">جاري المزامنة ⚡</span>}
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="اكتب للبحث السلس بدون أي تجميد..."
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500 mb-4"
            />
            <div className={\`transition-opacity \${isStale ? 'opacity-50' : 'opacity-100'}\`}>
              <SearchResultsGrid filterQuery={deferredSearchTerm} />
            </div>
          </div>
        )}

        {tab === 'imperative' && (
          <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl max-w-md mx-auto">
            <h3 className="text-sm font-bold text-slate-200 mb-3">التحكم الإجرائي بالمكونات عبر Ref</h3>
            <ModernSmartInput ref={smartInputRef} label="حقل اسم المستخدم الآمن:" placeholder="أدخل اسمك..." />
            <div className="flex gap-2">
              <button
                onClick={() => smartInputRef.current?.focus()}
                className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-bold"
              >
                تركيز المؤشر
              </button>
              <button
                onClick={() => smartInputRef.current?.clear()}
                className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold"
              >
                مسح المحتوى
              </button>
              <button
                onClick={() => smartInputRef.current?.shakeError()}
                className="flex-1 py-1.5 bg-rose-600 hover:bg-rose-500 rounded-xl text-xs font-bold"
              >
                اهتزاز الخطأ
              </button>
            </div>
          </div>
        )}

        {tab === 'optimistic' && (
          <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl text-center max-w-md mx-auto">
            <h3 className="text-sm font-bold text-slate-200 mb-2">التحديث المتفائل بـ useOptimistic</h3>
            <p className="text-xs text-slate-400 mb-4">الاستجابة اللحظية بـ 0ms دون انتظار رد الخادم.</p>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl mb-4">
              <span className="text-3xl font-black text-rose-500 block mb-1">❤️ {optimisticLikes}</span>
              <span className="text-[11px] text-slate-400">
                القيمة المعتمدة على الخادم: <span className="font-mono text-cyan-400">{likes}</span>
              </span>
            </div>

            <button
              onClick={handleOptimisticLike}
              className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 font-bold rounded-xl text-xs transition-colors"
            >
              إرسال إعجاب فوري متفائل 🚀
            </button>
          </div>
        )}
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان React Hooks ومفاهيم React 19 الحديثة",
    nodes: [
      { id: "1", title: "التخزين المؤقت القياسي", desc: "useMemo للحسابات الثقيلة و useCallback مع React.memo" },
      { id: "2", title: "قياس الـ DOM والمقابض", desc: "useLayoutEffect لمنع الوميض و useImperativeHandle لتخصيص الـ ref" },
      { id: "3", title: "المعرفات والمخازن", desc: "useId لـ a11y و useSyncExternalStore لحظر الـ Tearing" },
      { id: "4", title: "الانتقالات المتزامنة", desc: "useTransition و useDeferredValue لاستجابة فورية 0ms" },
      { id: "5", title: "ثورة React 19", desc: "Actions و useOptimistic و useActionState و use API" },
      { id: "6", title: "React Compiler", desc: "أتمتة التخزين المؤقت في الـ Build والاستغناء عن التحسين اليدوي" }
    ]
  }
};
