// src/data/sections/section13/section13Meta.js
// بيانات القسم 13: الملخص، جدول المرجع السريع، والمشروع المصغر

export const SECTION_13_META = {
  id: "section-13",
  title: "القسم 13: إدارة Server State باستخدام TanStack Query",
  englishTitle: "Server State Management with TanStack Query v5",
  description: "الدليل المعماري والعملي الشامل لاحتراف إدارة حالة الخادم (Server State) والتخزين المؤقت المتقدم باستخدام TanStack Query (React Query v5): من ضبط عميل الاستعلامات المركزي QueryClient ومصفوفات مفاتيح الكاش الهرمية (Query Keys)، إلى التحكم الدقيق في فترات الحداثة staleTime وتنظيف الذاكرة gcTime، وأتمتة إعادة الجلب اللحظية عند التركيز، والتعامل مع أخطاء الشبكة بالانحدار الأسي الذكي وإلغاء الطلبات بـ AbortSignal، وصولاً إلى بناء الطفرات المتقدمة بـ useMutation، والتحديثات التفاؤلية الفورية (0ms Latency Optimistic Updates) مع التراجع الآمن Rollback، والتمرير اللانهائي بـ useInfiniteQuery، والترقيم السلس بـ keepPreviousData، والتكامل مع أطر SSR و Next.js عبر Dehydration و Hydration.",
  summary: [
    "جوهر حالة الخادم (Server State): إدراك أن بيانات الخادم ليست ملكاً لتطبيق المتصفح بل هي نسخة مؤقتة مستعارة (Cache) تتطلب آليات دورية لإعادة الجلب والتحقق من الصلاحية.",
    "معمارية QueryClient و QueryClientProvider: تهيئة المحرك المركزي للكاش وضبط الخيارات الافتراضية العامة وبث السياق في قمة شجرة التطبيق.",
    "استدعاء useQuery التقريري: توفير البيانات وحالات التحميل (isLoading و isFetching) والخطأ تلقائياً مع دعم إلغاء الطلبات بـ AbortSignal.",
    "التفرقة الحاسمة بين staleTime و gcTime: staleTime يحدد مدة حداثة البيانات لمنع طلبات الشبكة، بينما gcTime يحدد مدة بقاء البيانات الخاملة في الرام قبل مسحها.",
    "إعادة الجلب الذاتية والتصاعد الأسي: تحديث صامت للبيانات فور عودة التركيز للنافذة (Window Focus) أو استعادة الإنترنت، مع إعادة محاولة ذكية بالانحدار الأسي.",
    "طفرات الخادم useMutation وإبطال الكاش: تنفيذ عمليات الإنشاء والتعديل والحذف إجرائياً، وتحديث شاشات التطبيق فوراً عبر invalidateQueries أو setQueryData المباشر.",
    "التحديثات التفاؤلية الفورية (Optimistic Updates): تعديل واجهة المستخدم في 0 ثانية بنقرة الزر عبر onMutate، مع تأمين شبكة أمان للتراجع التلقائي السليم (Rollback) في onError.",
    "الأنماط المعمارية المتقدمة: التمرير اللانهائي بـ useInfiniteQuery، وتثبيت الجداول المرقمة بـ keepPreviousData، والتجفيف والتمييه (Dehydration & Hydration) لخوادم SSR."
  ],
  cheatSheet: [
    {
      concept: "إنشاء عميل الاستعلامات QueryClient",
      syntax: "const queryClient = new QueryClient({\n  defaultOptions: { queries: { staleTime: 1000 * 60 * 3 } }\n});",
      note: "المحرك المركزي لإدارة كاش الاستعلامات وتحديد السياسات الافتراضية لكافة الشاشات."
    },
    {
      concept: "مزود سياق الكاش QueryClientProvider",
      syntax: "<QueryClientProvider client={queryClient}>\n  <App />\n  <ReactQueryDevtools />\n</QueryClientProvider>",
      note: "يغلف التطبيق في main.jsx لبث سياق الكاش وتمكين خطافات useQuery."
    },
    {
      concept: "جلب البيانات التقريري useQuery",
      syntax: "const { data, isLoading, isFetching, isError, error, refetch } = useQuery({\n  queryKey: ['users', id],\n  queryFn: ({ signal }) => fetchUser(id, { signal })\n});",
      note: "الخطاف الأساسي لإدارة دورة حياة جلب البيانات والتخزين المؤقت والاشتراك."
    },
    {
      concept: "مصفوفة مفتاح الكاش Query Key",
      syntax: "queryKey: ['todos', 'list', { status: 'completed', page: 2 }]",
      note: "معرف الكاش الحصري ومصفوفة التبعيات؛ تغير أي عنصر فيها يطلق استعلاماً جديداً فوراً."
    },
    {
      concept: "مدة حداثة البيانات staleTime",
      syntax: "staleTime: 1000 * 60 * 5 // 5 دقائق (أو Infinity للبيانات الثابتة)",
      note: "المدة التي تعتبر البيانات خلالها طازجة ويُمنع إرسال أي طلب شبكة إضافي طوال سريانها."
    },
    {
      concept: "مدة تنظيف الذاكرة gcTime",
      syntax: "gcTime: 1000 * 60 * 15 // 15 دقيقة بعد خمول الاستعلام",
      note: "مدة بقاء البيانات في الذاكرة بعد مغادرة المكون قبل حذفها لتوفير موارد المتصفح."
    },
    {
      concept: "الاستعلام المشروط بخاصية enabled",
      syntax: "const { data } = useQuery({\n  queryKey: ['projects', userId],\n  queryFn: fetchProjects,\n  enabled: !!userId\n});",
      note: "يوقف الاستعلام تماماً ولا يرسل أي طلب شبكة حتى يتحقق الشرط المنطقي."
    },
    {
      concept: "إلغاء الطلبات بـ AbortSignal",
      syntax: "queryFn: async ({ signal }) => {\n  const res = await fetch('/api/search', { signal });\n  return res.json();\n}",
      note: "يقطع اتصال HTTP على مستوى المتصفح فور مغادرة الصفحة أو تغير نص البحث لمنع السباق."
    },
    {
      concept: "الجلب المسبق الذكي prefetchQuery",
      syntax: "await queryClient.prefetchQuery({\n  queryKey: ['post', nextId],\n  queryFn: () => fetchPost(nextId),\n  staleTime: 60000\n});",
      note: "تحميل بيانات الشاشة التالية في الكاش عند تحريك الفأرة لعرضها في 0ms عند النقر."
    },
    {
      concept: "طفرة تعديل بيانات الخادم useMutation",
      syntax: "const { mutate, isPending, isSuccess } = useMutation({\n  mutationFn: (newTodo) => api.post('/todos', newTodo)\n});\nmutate({ title: 'مهمة' });",
      note: "تنفيذ عمليات الإنشاء والتعديل والحذف الإجرائية المرتبطة بنقرات المستخدم."
    },
    {
      concept: "إبطال الكاش الذكي invalidateQueries",
      syntax: "queryClient.invalidateQueries({ queryKey: ['todos'] });",
      note: "يعلن تقادم الاستعلامات ويعيد جلب بياناتها في الخلفية فورياً للشاشات النشطة."
    },
    {
      concept: "التعديل المباشر في الذاكرة setQueryData",
      syntax: "queryClient.setQueryData(['user', id], (old) => ({ ...old, name: 'أحمد' }));",
      note: "تعديل محتوى الكاش متزامناً في الذاكرة بزمن 0ms دون إرسال طلب شبكة إضافي."
    },
    {
      concept: "التحديث التفاؤلي الكامل Optimistic Update",
      syntax: "useMutation({\n  onMutate: async (newTodo) => {\n    await queryClient.cancelQueries({ queryKey: ['todos'] });\n    const previous = queryClient.getQueryData(['todos']);\n    queryClient.setQueryData(['todos'], old => [...old, newTodo]);\n    return { previous };\n  },\n  onError: (err, newTodo, ctx) => queryClient.setQueryData(['todos'], ctx.previous),\n  onSettled: () => queryClient.invalidateQueries({ queryKey: ['todos'] })\n});",
      note: "تحديث الشاشة فوراً في 0 ثانية مع تأمين خطة تراجع آمنة (Rollback) عند فشل الخادم."
    },
    {
      concept: "التمرير اللانهائي useInfiniteQuery",
      syntax: "const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({\n  queryKey: ['feed'],\n  queryFn: ({ pageParam }) => fetchFeed(pageParam),\n  initialPageParam: 1,\n  getNextPageParam: (lastPage, allPages) => lastPage.nextCursor\n});",
      note: "تجميع وتكديس الصفحات المتتالية في مصفوفة data.pages لتجارب التمرير المستمر."
    },
    {
      concept: "الترقيم السلس بـ keepPreviousData",
      syntax: "import { keepPreviousData } from '@tanstack/react-query';\nuseQuery({\n  queryKey: ['items', page],\n  queryFn: () => fetchItems(page),\n  placeholderData: keepPreviousData\n});",
      note: "تثبيت محتوى الصفحة السابقة على الشاشة ومنع وميض التحميل الأبيض أثناء جلب الصفحة الجديدة."
    },
    {
      concept: "الاستعلامات المتوازية useQueries",
      syntax: "const results = useQueries({\n  queries: ids.map(id => ({ queryKey: ['item', id], queryFn: () => fetchItem(id) })),\n  combine: (res) => ({ data: res.map(r => r.data), isPending: res.some(r => r.isPending) })\n});",
      note: "جلب مصفوفة ديناميكية متغيرة الطول بالتوازي الكامل دون خرق قواعد خطافات React."
    },
    {
      concept: "أنماط الشبكة networkMode",
      syntax: "useQuery({\n  queryKey: ['offline-sync'],\n  queryFn: fetchLocal,\n  networkMode: 'online' // 'online' | 'always' | 'offlineFirst'\n});",
      note: "تعليق الاستعلام (fetchStatus: 'paused') أثناء انقطاع الإنترنت واستئنافه تلقائياً فور عودته."
    },
    {
      concept: "تجفيف كاش الخادم dehydrate",
      syntax: "const queryClient = new QueryClient();\nawait queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: fetchPosts });\nconst dehydratedState = dehydrate(queryClient);",
      note: "تحويل كاش الخادم في SSR إلى كائن تسلسلي آمن يُرسل مع كود الـ HTML الأولي."
    },
    {
      concept: "تمييه الكاش في العميل HydrationBoundary",
      syntax: "<HydrationBoundary state={dehydratedState}>\n  <ClientApp />\n</HydrationBoundary>",
      note: "حقن كاش السيرفر المجفف في متصفح العميل فورياً ليجد useQuery البيانات جاهزة في 0ms."
    },
    {
      concept: "طبقة الخطافات المخصصة Custom Query Hooks",
      syntax: "export function useArticles(category) {\n  return useQuery({\n    queryKey: ['articles', category],\n    queryFn: () => fetchArticles(category),\n    staleTime: 1000 * 60 * 3\n  });\n}",
      note: "عزل تفاصيل الـ API والكاش خلف واجهات برمجية نظيفة قابلة لإعادة الاستخدام والصيانة."
    }
  ],
  miniProject: {
    id: "mini-project-section-13",
    title: "منصة QueryCraft Pro: استوديو كاش الخادم والتحديث التفاؤلي المتكامل",
    englishTitle: "QueryCraft Pro: Interactive Server State, Cache Matrix & Optimistic Simulator Suite",
    description: "استوديو تطبيقي حي ومحاكي معماري شامل يدمج كافة ترسانة TanStack Query v5 في واجهة واحدة: محاكاة حية لسلوك الكاش ومقارنة فترات staleTime و gcTime، معمل التحديثات التفاؤلية (Optimistic Updates) مع اختبار التراجع الآمن (Rollback) عند محاكاة أخطاء الخادم، خلاصة التمرير اللانهائي التفاعلية بـ useInfiniteQuery مع زر التحميل ومؤشرات الصفحات، ومحاكي لوحة TanStack DevTools لفحص الاستعلامات النشطة والمتقادمة والخاملة والتحكم في إبطالها بنقرة زر.",
    code: `import React, { useState, useMemo, useEffect } from 'react';

// ==========================================
// 1. المكون الرئيسي: منصة QueryCraft Pro
// ==========================================
export function QueryCraftPro() {
  const [activeTab, setActiveTab] = useState('cacheMatrix'); // 'cacheMatrix' | 'optimistic' | 'infinite' | 'devtools'

  // =========================================================================
  // 1. جناح محاكاة كاش الاستعلامات ومصفوفة staleTime / gcTime
  // =========================================================================
  const [staleSeconds, setStaleSeconds] = useState(10);
  const [gcSeconds, setGcSeconds] = useState(30);
  const [queryCategory, setQueryCategory] = useState('tech');

  // محاكاة حالة الاستعلام في الذاكرة
  const [cacheEntry, setCacheEntry] = useState({
    data: [
      { id: 1, title: 'هندسة الكاش المتقدمة بـ TanStack Query v5', views: '3.2k' },
      { id: 2, title: 'التحديث التفاؤلي ومصفوفة التراجع Rollback', views: '5.1k' }
    ],
    updatedAt: Date.now(),
    isFetching: false,
    fetchCount: 1
  });

  const [secondsSinceLastFetch, setSecondsSinceLastFetch] = useState(0);

  // مؤقت حساب تقادم الكاش (Fresh vs Stale)
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsSinceLastFetch(Math.floor((Date.now() - cacheEntry.updatedAt) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [cacheEntry.updatedAt]);

  const isFresh = secondsSinceLastFetch < staleSeconds;
  const isExpiredGc = secondsSinceLastFetch >= gcSeconds;

  // محاكاة إعادة الجلب
  const triggerRefetch = () => {
    setCacheEntry((prev) => ({ ...prev, isFetching: true }));
    setTimeout(() => {
      setCacheEntry({
        data: [
          { id: 1, title: \`مقال محدث [\${queryCategory.toUpperCase()}] #\${Math.floor(Math.random() * 900) + 100}\`, views: '4.8k' },
          { id: 2, title: \`تقنية متقدمة جديدة #\${Math.floor(Math.random() * 900) + 100}\`, views: '2.9k' }
        ],
        updatedAt: Date.now(),
        isFetching: false,
        fetchCount: cacheEntry.fetchCount + 1
      });
      setSecondsSinceLastFetch(0);
    }, 800);
  };

  // =========================================================================
  // 2. جناح التحديث التفاؤلي ومحاكي فشل الخادم والتراجع (Rollback Studio)
  // =========================================================================
  const [optimisticTodos, setOptimisticTodos] = useState([
    { id: 1, title: 'إتقان staleTime و gcTime المعماري', completed: true },
    { id: 2, title: 'فهم مصفوفة التراجع Rollback في onError', completed: false }
  ]);
  const [newTodoInput, setNewTodoInput] = useState('');
  const [simulateServerError, setSimulateServerError] = useState(false);
  const [mutationLog, setMutationLog] = useState([]);

  const handleAddOptimisticTodo = (e) => {
    e.preventDefault();
    if (!newTodoInput.trim()) return;

    const currentTitle = newTodoInput;
    setNewTodoInput('');

    // 1. onMutate: أخذ لقطة الكاش الحالية وإضافة العنصر فوراً في 0ms
    const previousSnapshot = [...optimisticTodos];
    const tempId = 'temp-' + Date.now();

    setOptimisticTodos((prev) => [
      ...prev,
      { id: tempId, title: currentTitle, completed: false, isOptimistic: true }
    ]);

    setMutationLog((prev) => [
      { id: Date.now(), text: \`⚡ onMutate: تمت إضافة "\${currentTitle}" تفاؤلياً في 0ms!\`, type: 'opt' },
      ...prev
    ]);

    // محاكاة طلب الشبكة إلى الخادم
    setTimeout(() => {
      if (simulateServerError) {
        // 2. onError: فشل الخادم -> التراجع واستعادة اللقطة السابقة فوراً!
        setOptimisticTodos(previousSnapshot);
        setMutationLog((prev) => [
          { id: Date.now(), text: \`❌ onError: تعثر الخادم (500)! تم تنفيذ Rollback واستعادة الحالة السابقة.\`, type: 'error' },
          ...prev
        ]);
      } else {
        // 3. onSuccess: نجاح الخادم -> تثبيت العنصر بالمعرف الحقيقي
        setOptimisticTodos((prev) =>
          prev.map((item) =>
            item.id === tempId ? { ...item, id: Date.now(), isOptimistic: false } : item
          )
        );
        setMutationLog((prev) => [
          { id: Date.now(), text: \`✅ onSuccess: تم تثبيت المهمة على الخادم بنجاح.\`, type: 'success' },
          ...prev
        ]);
      }
    }, 1200);
  };

  // =========================================================================
  // 3. جناح خلاصة التمرير اللانهائي (useInfiniteQuery Simulator)
  // =========================================================================
  const [infinitePages, setInfinitePages] = useState([
    [
      { id: 101, title: 'المقال الأول في الخلاصة اللانهائية', author: 'أحمد السعيد' },
      { id: 102, title: 'هندسة الاستعلامات المتوازية بـ useQueries', author: 'سارة خالد' }
    ]
  ]);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
  const maxPages = 4;
  const hasNextPage = infinitePages.length < maxPages;

  const handleFetchNextPage = () => {
    if (!hasNextPage || isFetchingNextPage) return;
    setIsFetchingNextPage(true);

    setTimeout(() => {
      const nextPageNum = infinitePages.length + 1;
      const newItems = [
        { id: 100 + nextPageNum * 2 - 1, title: \`مقال جديد في صفحة الخلاصة #\${nextPageNum}\`, author: 'عمر ياسين' },
        { id: 100 + nextPageNum * 2, title: \`تقنية جديدة في دورة حياة الكاش #\${nextPageNum}\`, author: 'فاطمة علي' }
      ];
      setInfinitePages((prev) => [...prev, newItems]);
      setIsFetchingNextPage(false);
    }, 900);
  };

  // =========================================================================
  // 4. جناح محاكي لوحة TanStack DevTools
  // =========================================================================
  const devtoolsQueries = [
    { key: "['projects', 'list', 'tech']", status: isFresh ? 'fresh' : 'stale', observers: 2, updatedAt: cacheEntry.updatedAt },
    { key: "['optimistic-todos']", status: 'fresh', observers: 1, updatedAt: Date.now() - 5000 },
    { key: "['infinite-feed']", status: 'fresh', observers: 1, updatedAt: Date.now() - 12000 },
    { key: "['user-profile', 101]", status: 'inactive', observers: 0, updatedAt: Date.now() - 45000 }
  ];

  return (
    <div className="bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 p-4 md:p-6 shadow-2xl my-6">
      {/* ترويسة المنصة والاستوديو */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-black rounded-full shadow-lg">
              QueryCraft Pro v13.0
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white">
              استوديو إدارة كاش الخادم TanStack Query
            </h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            محاكاة معمارية حية لمحرك الكاش، التحديثات التفاؤلية 0ms، التمرير اللانهائي، وأدوات DevTools.
          </p>
        </div>

        {/* أزرار التبويبات الرئيسية */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('cacheMatrix')}
            className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all \${
              activeTab === 'cacheMatrix'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }\`}
          >
            ⏱️ مصفوفة stale / gc Time
          </button>
          <button
            onClick={() => setActiveTab('optimistic')}
            className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all \${
              activeTab === 'optimistic'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }\`}
          >
            ⚡ التحديث التفاؤلي و Rollback
          </button>
          <button
            onClick={() => setActiveTab('infinite')}
            className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all \${
              activeTab === 'infinite'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }\`}
          >
            📜 التمرير اللانهائي ({infinitePages.length})
          </button>
          <button
            onClick={() => setActiveTab('devtools')}
            className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all \${
              activeTab === 'devtools'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }\`}
          >
            🛠️ محاكي DevTools
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* الجناح 1: مصفوفة staleTime و gcTime التفاعلية */}
      {/* ========================================================================= */}
      {activeTab === 'cacheMatrix' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-slate-900/90 rounded-xl border border-slate-800 p-5 space-y-4">
            <h4 className="text-sm font-bold text-white mb-2">معاملات توقيت الكاش في الذاكرة</h4>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>مدة حداثة البيانات (staleTime):</span>
                <span className="font-mono text-emerald-400 font-bold">{staleSeconds} ثوانٍ</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                value={staleSeconds}
                onChange={(e) => setStaleSeconds(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
              <p className="text-[10px] text-slate-500 mt-0.5">
                طالما الوقت المنقضي أقل من {staleSeconds} ثانية، البيانات 'Fresh' ولن يتم إرسال طلب شبكة إضافي.
              </p>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>مدة تنظيف الذاكرة (gcTime):</span>
                <span className="font-mono text-purple-400 font-bold">{gcSeconds} ثانية</span>
              </div>
              <input
                type="range"
                min="20"
                max="60"
                value={gcSeconds}
                onChange={(e) => setGcSeconds(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <p className="text-[10px] text-slate-500 mt-0.5">
                تُحذف البيانات نهائياً من الذاكرة إذا ظلت خاملة لأكثر من {gcSeconds} ثانية.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-400">إجراءات الاستعلام:</span>
              <button
                onClick={triggerRefetch}
                disabled={cacheEntry.isFetching}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-bold rounded-lg shadow transition-all"
              >
                {cacheEntry.isFetching ? 'جارٍ جلب البيانات من الخادم...' : 'طلب إعادة الجلب refetch() 🔄'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-slate-400">
                  queryKey: ['projects', '{queryCategory}']
                </span>
                <span className={\`px-2.5 py-0.5 rounded text-xs font-bold font-mono border \${
                  isFresh
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                    : 'bg-amber-950 text-amber-300 border-amber-800'
                }\`}>
                  {isFresh ? 'Fresh (طازج)' : 'Stale (متقادم)'}
                </span>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>الوقت المنقضي منذ آخر جلب:</span>
                  <span className="font-mono text-white font-bold">{secondsSinceLastFetch}s</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>إجمالي مرات الاستدعاء:</span>
                  <span className="font-mono text-cyan-400 font-bold">{cacheEntry.fetchCount} مرات</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>حالة تنظيف الذاكرة (GC Status):</span>
                  <span className={isExpiredGc ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                    {isExpiredGc ? 'مؤهل للتطهير والمسح' : 'آمن في ذاكرة الكاش'}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-bold text-slate-300 block">البيانات المعروضة حالياً من الكاش:</span>
                {cacheEntry.data.map((item) => (
                  <div key={item.id} className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between text-xs">
                    <span className="text-slate-200 truncate">{item.title}</span>
                    <span className="text-slate-500 font-mono">{item.views}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-400">
              💡 <span className="text-white font-bold">المعادلة الذهبية:</span> طالما العداد &lt; staleTime، أي استدعاء جديد يعرض الكاش في 0 ثانية وصفر طلبات شبكة!
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* الجناح 2: معمل التحديث التفاؤلي والتراجع الآمن (Rollback Studio) */}
      {/* ========================================================================= */}
      {activeTab === 'optimistic' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-slate-900/90 rounded-xl border border-slate-800 p-5 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-white">إضافة مهام بتحديث تفاؤلي (0ms)</h4>
              <span className="text-[10px] text-emerald-400 font-mono font-bold">Zero Latency UI</span>
            </div>

            <form onSubmit={handleAddOptimisticTodo} className="flex gap-2">
              <input
                value={newTodoInput}
                onChange={(e) => setNewTodoInput(e.target.value)}
                placeholder="أدخل عنوان مهمة لاختبار التحديث التفاؤلي..."
                className="flex-1 p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 font-bold text-xs rounded-lg shadow whitespace-nowrap"
              >
                ➕ إضافة تفاؤلية
              </button>
            </form>

            {/* مفتاح محاكاة فشل الخادم */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-200">محاكاة تعثر الخادم السحابي:</span>
                <p className="text-[10px] text-slate-500">لاختبار استعادة الحالة السابقة تلقائياً في onError</p>
              </div>
              <button
                onClick={() => setSimulateServerError(!simulateServerError)}
                className={\`px-3 py-1.5 text-xs font-bold rounded-lg transition-all \${
                  simulateServerError
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                    : 'bg-slate-800 text-slate-400'
                }\`}
              >
                {simulateServerError ? 'الخادم سيعطل الطلب ❌' : 'الخادم سيعمل بنجاح ✅'}
              </button>
            </div>

            {/* قائمة المهام التفاؤلية */}
            <div className="space-y-2">
              {optimisticTodos.map((todo) => (
                <div
                  key={todo.id}
                  className={\`p-3 rounded-xl border text-xs flex justify-between items-center transition-all \${
                    todo.isOptimistic
                      ? 'bg-amber-950/40 border-amber-500/60 text-amber-200 animate-pulse'
                      : 'bg-slate-950 border-slate-800 text-slate-200'
                  }\`}
                >
                  <span className="font-semibold">{todo.title}</span>
                  {todo.isOptimistic ? (
                    <span className="text-[10px] text-amber-400 font-mono">⚡ جارٍ المزامنة بالسيرفر...</span>
                  ) : (
                    <span className="text-[10px] text-emerald-400 font-mono">مثبت في قاعدة البيانات ✔️</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* سجل أحداث الطفرة والتراجع */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-xl border border-slate-800 p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  سجل أحداث الطفرة (Mutation Lifecycle Log)
                </h4>
                <span className="text-[10px] text-slate-400 font-mono">{mutationLog.length} أحداث</span>
              </div>

              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {mutationLog.length === 0 ? (
                  <p className="text-slate-500 text-center py-8 text-xs">
                    أضف مهمة جديدة لتشاهد كيف ينطلق onMutate ثم onSuccess أو Rollback.
                  </p>
                ) : (
                  mutationLog.map((log) => (
                    <div
                      key={log.id}
                      className={\`p-2.5 rounded-lg border text-xs font-mono \${
                        log.type === 'opt'
                          ? 'bg-amber-950/40 border-amber-800 text-amber-300'
                          : log.type === 'error'
                          ? 'bg-rose-950/50 border-rose-800 text-rose-300'
                          : 'bg-emerald-950/40 border-emerald-800 text-emerald-300'
                      }\`}
                    >
                      {log.text}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="mt-4 p-2.5 bg-emerald-950/20 border border-emerald-900/40 rounded-lg text-[11px] text-emerald-300">
              🛡️ <span className="font-bold">استراتيجية التراجع:</span> دالة onMutate تحتفظ بلقطة الكاش السابقة، وفي حال الفشل تقوم دالة onError باستعادتها فوراً لكي لا تترك بيانات وهمية على شاشة المستخدم.
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* الجناح 3: خلاصة التمرير اللانهائي (useInfiniteQuery Simulator) */}
      {/* ========================================================================= */}
      {activeTab === 'infinite' && (
        <div className="max-w-md mx-auto space-y-4">
          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
            <div>
              <h4 className="text-sm font-bold text-white">خلاصة التمرير اللانهائي</h4>
              <p className="text-xs text-slate-400">تجميع الصفحات المتتالية في كائن data.pages</p>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-800">
              صفحة {infinitePages.length} / {maxPages}
            </span>
          </div>

          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {infinitePages.map((page, pageIdx) => (
              <React.Fragment key={pageIdx}>
                <div className="text-[10px] text-slate-500 font-mono text-center my-1">
                  ─── بداية محتوى الصفحة رقم #{pageIdx + 1} ───
                </div>
                {page.map((item) => (
                  <div key={item.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-emerald-400 font-mono block">منشور #{item.id}</span>
                    <p className="text-xs font-bold text-slate-200 mt-0.5">{item.title}</p>
                    <span className="text-[10px] text-slate-500 mt-1 block">الكاتب: {item.author}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>

          <div className="pt-2">
            {hasNextPage ? (
              <button
                onClick={handleFetchNextPage}
                disabled={isFetchingNextPage}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow transition-all active:scale-95"
              >
                {isFetchingNextPage ? 'جارٍ سحب الصفحة التالية من الخادم...' : 'تحميل الصفحة التالية ⬇️ (fetchNextPage)'}
              </button>
            ) : (
              <p className="text-xs text-slate-500 text-center py-2 font-mono">
                🎉 تم الوصول لنهاية السجلات (hasNextPage = false)
              </p>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* الجناح 4: محاكي لوحة TanStack DevTools */}
      {/* ========================================================================= */}
      {activeTab === 'devtools' && (
        <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <h4 className="text-sm font-bold text-white uppercase font-mono">
                TanStack Query DevTools Inspector
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400">
              إجمالي الاستعلامات بالكاش: {devtoolsQueries.length}
            </span>
          </div>

          <div className="space-y-2">
            {devtoolsQueries.map((q, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">
                    {q.key}
                  </span>
                  <div className="flex gap-2 text-[10px]">
                    <span className={\`px-1.5 py-0.5 rounded font-bold uppercase \${
                      q.status === 'fresh'
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : q.status === 'stale'
                        ? 'bg-amber-950 text-amber-300 border border-amber-800'
                        : 'bg-slate-800 text-slate-400'
                    }\`}>
                      {q.status}
                    </span>
                    <span className="text-slate-400">المراقبون: {q.observers} Observers</span>
                  </div>
                </div>

                <div className="flex gap-1.5">
                  <button
                    onClick={triggerRefetch}
                    className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-xs text-white rounded transition-all"
                  >
                    Refetch
                  </button>
                  <button
                    onClick={() => alert(\`تم إبطال الكاش للمفتاح \${q.key}\`)}
                    className="px-2.5 py-1 bg-rose-950 hover:bg-rose-900 text-rose-300 text-xs rounded transition-all"
                  >
                    Invalidate
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-[11px] text-slate-400">
            🔍 لوحة DevTools هي رفيقك اليومي لمعرفة سبب كل طلب شبكة، والتأكد من عدم وجود استعلامات مكررة أو نسيان لضبط staleTime.
          </div>
        </div>
      )}
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي الشامل لمنظومة TanStack Query v5",
    description: "الدليل المرجعي الكامل للمهندسين لاحتراف إدارة حالة الخادم، استراتيجيات الكاش، والتحديث التفاؤلي الفوري.",
    sections: [
      {
        heading: "1. النواة والاستعلامات (Core & useQuery)",
        bullets: [
          "QueryClient: العقل المركزي لحفظ الكاش وضبط السياسات الافتراضية.",
          "queryKey: مصفوفات التبعيات الحتمية التي تحدد هوية الكاش ومسار التخزين.",
          "staleTime vs gcTime: التفرقة بين مدة حداثة البيانات وزمن تطهير الذاكرة الرامية.",
          "Automatic Refetch: مزامنة تلقائية هادئة عند عودة التركيز للنافذة (Window Focus)."
        ]
      },
      {
        heading: "2. طفرات الخادم والتحديث التفاؤلي (Mutations & Optimistic)",
        bullets: [
          "useMutation: تنفيذ عمليات الإنشاء والتعديل والحذف (POST, PUT, DELETE).",
          "invalidateQueries: إبطال الكاش لإجبار الاستعلامات المعروضة على التحديث الفوري.",
          "onMutate: حقن التعديل في 0 ثانية مع حفظ لقطة الكاش السابقة في context.",
          "Safe Rollback: استعادة الحالة الأصلية فورياً في onError عند تعثر السيرفر."
        ]
      },
      {
        heading: "3. الأنماط المتقدمة والتصفح السلس (Advanced UX)",
        bullets: [
          "useInfiniteQuery: تجميع الصفحات المتتالية في data.pages للتمرير المستمر.",
          "keepPreviousData: تثبيت الصفحة السابقة ومنع وميض الشاشة الأبيض في الترقيم.",
          "useQueries: جلب مصفوفة ديناميكية من الموارد بالتوازي الكامل ودمجها بـ combine.",
          "networkMode: تعليق الطلبات تلقائياً أثناء انقطاع الإنترنت واستئنافها فور عودته."
        ]
      },
      {
        heading: "4. معمارية الـ Full-Stack والخطافات النظيفة (Architecture)",
        bullets: [
          "Dehydration & Hydration: نقل كاش الخادم في SSR للعميل دون أي طلب مزدوج.",
          "Custom Hooks Layer: عزل منطق الـ API والكاش خلف خطافات نقية مثل useUsers().",
          "Query Key Factory: تنظيم وتوليد المفاتيح في مكان موحد لمنع التضارب والأخطاء."
        ]
      }
    ]
  }
};

export default SECTION_13_META;
