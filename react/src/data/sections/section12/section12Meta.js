// src/data/sections/section12/section12Meta.js
// بيانات القسم 12: الملخص، جدول المرجع السريع، والمشروع المصغر

export const SECTION_12_META = {
  id: "section-12",
  title: "القسم 12: إدارة الحالة المتقدمة",
  englishTitle: "Advanced State Management Architecture (Redux Toolkit, RTK Query, Zustand & State Selection)",
  description: "الدليل المعماري والعملي الشامل لاحتراف إدارة الحالة المعقدة في React: من التصنيف المنهجي لأنواع الحالة ومصفوفة التوزيع، إلى إتقان Redux Toolkit الكامل (configureStore, createSlice, createAsyncThunk, createEntityAdapter)، ومحرك التخزين المؤقت المتقدم RTK Query بالتحديث التفاؤلي وإبطال الكاش بالوسوم، وبديل المستقبل الخفيف والمباشر Zustand بالاشتراكات الدقيقة والـ Middleware والـ Slice Pattern، وصولاً إلى المقارنة المعمارية الاستراتيجية للفصل الجذري بين حالة العميل وحالة الخادم واختيار الحل الأمثل وفقاً لحجم الفريق وتحديات النظام.",
  summary: [
    "تصنيف الحالة ومصفوفة التوزيع: تقسيم الحالات إلى (Local UI, Shared Client, Server, URL, Form, Derived) واختيار أضيق نطاق ممكن لكل حالة لمنع التلوث المعماري.",
    "فلسفة Redux Toolkit أحادية الاتجاه: تدفق البيانات عبر Actions -> Reducer -> Store -> Selectors مع توظيف Immer الداخلي لكتابة كود يبدو متحولاً لكنه يولد حالة غير قابلة للتعديل بأمان تام.",
    "محرك الاشتراكات الدقيقة (Fine-Grained Subscriptions): استخدام useSelector و Reselect في Redux أو Selectors المخصصة مع useShallow في Zustand لمنع إعادة تصيير المكونات إلا إذا تغيرت الحقول المعنية فعلياً.",
    "إتقان العمليات غير المتزامنة بـ createAsyncThunk: تقسيم دورة حياة طلبات الشبكة الصعبة إلى حالات صريحة وواضحة (pending, fulfilled, rejected) قابلة للتتبع والمراقبة.",
    "تسوية البيانات بـ createEntityAdapter: تحويل مصفوفات البيانات إلى جداول مفهرسة { ids: [], entities: {} } للوصول المباشر بزمن O(1) وتفادي التكرار.",
    "ثورة RTK Query في إدارة Server State: أتمتة عمليات الكاش بالكامل، وجلب البيانات الذكي، وإبطال التخزين المؤقت بنظام الوسوم (Tags Invalidation)، ودعم التحديث التفاؤلي الفوري.",
    "رشاقة وبساطة Zustand: إنشاء مخازن مركزية فائقة السرعة بحجم ~1.2KB فقط دون الحاجة لأي Context Provider شجري، مع دعم كامل للـ Slices والـ Persist وDevTools.",
    "هندسة الحقيقة الواحدة وتجنب البيانات المشتقة: حظر تخزين أي قيم يمكن حسابها ديناميكياً في الحالة، واستخدام المذكرة (useMemo/createSelector) لحساب الإحصائيات والفلاتر دون خطر تضارب البيانات."
  ],
  cheatSheet: [
    {
      concept: "إنشاء مخزن ريدكس configureStore",
      syntax: "const store = configureStore({\n  reducer: { cart: cartReducer, auth: authReducer },\n  middleware: (getDefault) => getDefault().concat(logger)\n});",
      note: "يجمع شرائح المخفضات ويفعل Redux Thunk وRedux DevTools تلقائياً بضوابط قياسية."
    },
    {
      concept: "شريحة الحالة createSlice",
      syntax: "const cartSlice = createSlice({\n  name: 'cart',\n  initialState: { items: [] },\n  reducers: {\n    addItem: (state, action) => { state.items.push(action.payload); }\n  }\n});",
      note: "يولد الأفعال (actions) والمخفضات (reducers) تلقائياً ويدمج مكتبة Immer للتحديث الآمن."
    },
    {
      concept: "إرسال الأفعال useDispatch",
      syntax: "const dispatch = useDispatch();\ndispatch(addItem({ id: 1, title: 'كتاب' }));",
      note: "الخطاف الأساسي لإرسال الإشارات إلى مخزن Redux لتعديل الحالة."
    },
    {
      concept: "انتقاء الحالة useSelector",
      syntax: "const totalItems = useSelector((state) => state.cart.items.length);",
      note: "يشترك بدقة في جزء محدد من الحالة ولا يعيد تصيير المكون إلا إذا تغيرت القيمة الناتجة."
    },
    {
      concept: "المهمة غير المتزامنة createAsyncThunk",
      syntax: "export const fetchUsers = createAsyncThunk('users/fetch', async (id) => {\n  const res = await api.get(`/users/${id}`);\n  return res.data;\n});",
      note: "يدير دورة حياة الطلبات غير المتزامنة ويولد تلقائياً pending وfulfilled وrejected."
    },
    {
      concept: "محول الكيانات createEntityAdapter",
      syntax: "const usersAdapter = createEntityAdapter({ selectId: (u) => u.id });\n// initialState: usersAdapter.getInitialState()",
      note: "يوفر إدارة معيارية للحالات المسواة (Normalized) مع دوال سريعة مثل setAll وaddOne."
    },
    {
      concept: "واجهة استعلامات الخادم createApi",
      syntax: "export const apiSlice = createApi({\n  reducerPath: 'api',\n  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),\n  tagTypes: ['Posts'],\n  endpoints: (builder) => ({ ... })\n});",
      note: "جوهر RTK Query لبناء واجهات استعلامات الخادم والتخزين المؤقت المتقدم."
    },
    {
      concept: "خطاف الاستعلام التلقائي useQuery",
      syntax: "const { data, isLoading, isError } = useGetPostsQuery({ page: 1 });",
      note: "يجلب البيانات تلقائياً ويدير دورة حياة التحميل والكاش والاشتراك في 0 ثانية."
    },
    {
      concept: "طفرات التعديل useMutation",
      syntax: "const [addPost, { isLoading }] = useAddPostMutation();\nawait addPost(newPost).unwrap();",
      note: "ينفذ عمليات الإضافة والتعديل والحذف على الخادم مع دعم فك النتائج بـ unwrap."
    },
    {
      concept: "إبطال الكاش بالوسوم Invalidation",
      syntax: "providesTags: (result) => ['Posts'],\ninvalidatesTags: ['Posts']",
      note: "يعيد جلب البيانات تلقائياً وتحديث الشاشة فور نجاح عملية الطفرة المرتبطة."
    },
    {
      concept: "التحديث التفاؤلي onQueryStarted",
      syntax: "async onQueryStarted(arg, { dispatch, queryFulfilled }) {\n  const patch = dispatch(api.util.updateQueryData(...));\n  try { await queryFulfilled; } catch { patch.undo(); }\n}",
      note: "يعدل واجهة المستخدم فوراً قبل استجابة السيرفر، مع التراجع الآلي عند الفشل."
    },
    {
      concept: "إنشاء متجر زوستاند create",
      syntax: "import { create } from 'zustand';\nconst useStore = create((set, get) => ({\n  bears: 0,\n  increase: () => set((state) => ({ bears: state.bears + 1 }))\n}));",
      note: "ينشئ خطافاً مخصصاً مباشراً دون الحاجة لتغليف التطبيق بـ Provider شجري."
    },
    {
      concept: "انتقاء الخصائص في زوستاند",
      syntax: "const bears = useStore((state) => state.bears);",
      note: "يضمن عدم إعادة تصيير المكون إلا إذا تغيرت قيمة الخاصية المختارة تحديداً."
    },
    {
      concept: "المقارنة السطحية useShallow في زوستاند",
      syntax: "import { useShallow } from 'zustand/react/shallow';\nconst { name, age } = useStore(useShallow((s) => ({ name: s.name, age: s.age })));",
      note: "يمنع تكرار الرندر العبثي عند استخراج كائن يحتوي على عدة خصائص مجتمعة."
    },
    {
      concept: "الحفظ الدائم في زوستاند persist",
      syntax: "import { persist } from 'zustand/middleware';\nconst useStore = create(persist((set) => ({ ... }), { name: 'storage-key' }));",
      note: "يحفظ الحالة تلقائياً في LocalStorage ويسترجعها فورياً عند إعادة فتح الصفحة."
    },
    {
      concept: "توصيل زوستاند بـ DevTools",
      syntax: "import { devtools } from 'zustand/middleware';\nconst useStore = create(devtools((set) => ({ ... }), { name: 'AppStore' }));",
      note: "يتيح فحص أفعال وحالات زوستاند عبر إضافة Redux DevTools في المتصفح."
    },
    {
      concept: "المحددات الميموية createSelector",
      syntax: "const selectTotal = createSelector(\n  [(state) => state.cart.items],\n  (items) => items.reduce((sum, i) => sum + i.price, 0)\n);",
      note: "يحسب القيم المشتقة ويخزن نتائجها في الذاكرة لتفادي العمليات الحسابية المكلفة."
    },
    {
      concept: "الفصل بين حالة الخادم وحالة العميل",
      syntax: "// Server State -> TanStack Query / RTK Query\n// Client State -> Zustand / useState",
      note: "المعيار الحديث: ترك كاش الشبكة للمكتبات المتخصصة وترك تفضيلات الواجهة لمتاجر العميل."
    },
    {
      concept: "تجنب البيانات المشتقة Derived State",
      syntax: "// خطأ: const [count, setCount] = useState(items.length);\n// صواب: const count = items.length;",
      note: "حساب القيم التابعة أثناء الريندر يلغي كلياً أخطاء تباين وتناقض البيانات."
    },
    {
      concept: "قاعدة اختيار الأداة حسب النطاق",
      syntax: "// صغير: useState + Context\n// متوسط/حديث: Zustand + TanStack Query\n// مؤسسي ضخم: Redux Toolkit + RTK Query",
      note: "توفير التوازن الأمثل بين سرعة التطوير، حجم الحزمة، وسهولة الصيانة والمراقبة."
    }
  ],
  miniProject: {
    id: "mini-project-section-12",
    title: "منصة StateCraft Pro: استوديو مقارنة ومحاكاة إدارة الحالة الشامل",
    englishTitle: "StateCraft Pro: Interactive State Architecture Simulator, DevTools Inspector & Engine Suite",
    description: "استوديو تطبيقي حي ومحاكي معماري شامل يدمج مقارنة حية بين ثلاثة محركات لإدارة الحالة (Redux Toolkit vs Zustand vs React Context) بمراقبة دقيقة لعدد مرات إعادة التصيير (Render Counters) لإثبات كفاءة الاشتراكات الذرية، مع محاكي حقيقي لإضافة Redux DevTools مع سجل الأفعال وميزة التراجع الزمني للأحداث (Time-Travel Debugging)، ومختبر متقدم للبيانات المسواة (Normalized Entities O(1)) والمشتقة (Derived Memoization)، ومستشار تفاعلي لتحديد البنية المثلى وفقاً لحجم الفريق وتحديات النظام.",
    code: `import React, { useState, useMemo } from 'react';

// ==========================================
// 1. المكون الرئيسي: استوديو StateCraft Pro
// ==========================================
export function StateCraftStudio() {
  // التبويب النشط في الاستوديو
  const [activeTab, setActiveTab] = useState('comparison'); // 'comparison' | 'devtools' | 'derived' | 'advisor'

  // =========================================================================
  // 1. محاكاة محركات الحالة الثلاثة مع مراقبة عدد الـ Renders الفعلي
  // =========================================================================
  
  // أ. محاكاة Redux Toolkit (Store + Actions + History)
  const [reduxState, setReduxState] = useState({
    user: { name: 'عمر خالد', role: 'Lead Architect', points: 120 },
    counter: 10,
    theme: 'dark',
    notifications: 3
  });

  // سجل DevTools لتتبع الأفعال التاريخية (Time Travel)
  const [actionLog, setActionLog] = useState([
    { id: 1, type: '@@INIT', payload: null, timestamp: '10:00:00', stateSnapshot: { ...reduxState } }
  ]);
  const [selectedActionIndex, setSelectedActionIndex] = useState(0);

  // دالة إرسال Redux المحاكية مع تسجيل الـ Action
  const dispatchReduxAction = (actionType, payload, updater) => {
    setReduxState((prevState) => {
      const nextState = updater(prevState);
      const newEntry = {
        id: Date.now(),
        type: actionType,
        payload,
        timestamp: new Date().toLocaleTimeString(),
        stateSnapshot: nextState
      };
      setActionLog((prevLog) => [...prevLog, newEntry]);
      setSelectedActionIndex((prev) => prev + 1);
      return nextState;
    });
  };

  // ب. محاكاة Zustand (Direct atomic updates + Outside Store Hook)
  const [zustandState, setZustandState] = useState({
    user: { name: 'عمر خالد', role: 'Lead Architect', points: 120 },
    counter: 10,
    theme: 'dark',
    notifications: 3
  });

  // ج. محاكاة Context API (تحديث المزود بالكامل)
  const [contextState, setContextState] = useState({
    user: { name: 'عمر خالد', role: 'Lead Architect', points: 120 },
    counter: 10,
    theme: 'dark',
    notifications: 3
  });

  // عدادات إعادة التصيير الفعلية (Render Counters) لإثبات الفوارق المعمارية
  const [renderStats, setRenderStats] = useState({
    reduxUserCard: 1,
    reduxCounterBtn: 1,
    zustandUserCard: 1,
    zustandCounterBtn: 1,
    contextUserCard: 1,
    contextCounterBtn: 1
  });

  // دوال تنفيذ الأحداث في المحركات الثلاثة مع محاكاة فروق الاستهلاك
  const handleIncrementCounter = () => {
    // 1. Redux: المكون المهتم فقط بالعداد يعاد تصييره، بينما بطاقة المستخدم تظل ثابتة بفضل useSelector
    dispatchReduxAction('counter/increment', { step: 1 }, (s) => ({ ...s, counter: s.counter + 1 }));
    setRenderStats((prev) => ({
      ...prev,
      reduxCounterBtn: prev.reduxCounterBtn + 1
    }));

    // 2. Zustand: اشتراك دقيق، بطاقة المستخدم لا يعاد تصييرها
    setZustandState((s) => ({ ...s, counter: s.counter + 1 }));
    setRenderStats((prev) => ({
      ...prev,
      zustandCounterBtn: prev.zustandCounterBtn + 1
    }));

    // 3. Context: المزود بالكامل يتغير مرجعه، فيعاد تصيير بطاقة المستخدم وزر العداد معاً!
    setContextState((s) => ({ ...s, counter: s.counter + 1 }));
    setRenderStats((prev) => ({
      ...prev,
      contextCounterBtn: prev.contextCounterBtn + 1,
      contextUserCard: prev.contextUserCard + 1 // أثر الـ Context Coarse-grained re-render!
    }));
  };

  const handleAddUserPoints = () => {
    // تحديث نقاط المستخدم
    dispatchReduxAction('user/addPoints', { amount: 50 }, (s) => ({
      ...s,
      user: { ...s.user, points: s.user.points + 50 }
    }));
    setRenderStats((prev) => ({
      ...prev,
      reduxUserCard: prev.reduxUserCard + 1
    }));

    setZustandState((s) => ({
      ...s,
      user: { ...s.user, points: s.user.points + 50 }
    }));
    setRenderStats((prev) => ({
      ...prev,
      zustandUserCard: prev.zustandUserCard + 1
    }));

    setContextState((s) => ({
      ...s,
      user: { ...s.user, points: s.user.points + 50 }
    }));
    setRenderStats((prev) => ({
      ...prev,
      contextUserCard: prev.contextUserCard + 1,
      contextCounterBtn: prev.contextCounterBtn + 1 // Context يعيد تصيير حتى زر العداد غير المعني!
    }));
  };

  // =========================================================================
  // 2. معمل البيانات المسواة (Normalized) والمشتقة (Derived Memoized Metrics)
  // =========================================================================
  const [normalizedStore, setNormalizedStore] = useState({
    ids: [1, 2, 3, 4],
    entities: {
      1: { id: 1, title: 'تصميم هيكل البيانات المسواة', priority: 'high', status: 'completed', score: 95 },
      2: { id: 2, title: 'بناء متجر زوستاند مع الميدلوير', priority: 'critical', status: 'completed', score: 100 },
      3: { id: 3, title: 'ربط واجهة RTK Query وتحديث الكاش', priority: 'high', status: 'in_progress', score: 70 },
      4: { id: 4, title: 'اختبارات التحمل وتفادي الريندر العبثي', priority: 'medium', status: 'pending', score: 40 }
    }
  });
  const [filterStatus, setFilterStatus] = useState('all');
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemPriority, setNewItemPriority] = useState('high');

  // حساب البيانات المشتقة Memoized بمحاكاة Reselect
  const { visibleItems, derivedStats } = useMemo(() => {
    const allEntities = normalizedStore.ids.map((id) => normalizedStore.entities[id]);
    const filtered = filterStatus === 'all'
      ? allEntities
      : allEntities.filter((item) => item.status === filterStatus);

    const totalScore = allEntities.reduce((sum, item) => sum + item.score, 0);
    const avgScore = allEntities.length === 0 ? 0 : Math.round(totalScore / allEntities.length);
    const completedCount = allEntities.filter((item) => item.status === 'completed').length;
    const completionRate = allEntities.length === 0 ? 0 : Math.round((completedCount / allEntities.length) * 100);

    return {
      visibleItems: filtered,
      derivedStats: { total: allEntities.length, completedCount, avgScore, completionRate }
    };
  }, [normalizedStore, filterStatus]);

  // دالة إضافة عنصر مسوى O(1)
  const handleAddNormalizedItem = (e) => {
    e.preventDefault();
    if (!newItemTitle.trim()) return;
    const newId = Date.now();
    setNormalizedStore((prev) => ({
      ids: [newId, ...prev.ids],
      entities: {
        ...prev.entities,
        [newId]: {
          id: newId,
          title: newItemTitle,
          priority: newItemPriority,
          status: 'in_progress',
          score: 60
        }
      }
    }));
    setNewItemTitle('');
  };

  // دالة تغيير حالة العنصر بزمن O(1) مباشر
  const toggleItemStatus = (id) => {
    setNormalizedStore((prev) => {
      const current = prev.entities[id];
      const nextStatus = current.status === 'completed' ? 'in_progress' : 'completed';
      const nextScore = nextStatus === 'completed' ? 100 : 60;
      return {
        ...prev,
        entities: {
          ...prev.entities,
          [id]: { ...current, status: nextStatus, score: nextScore }
        }
      };
    });
  };

  // =========================================================================
  // 3. مستشار اتخاذ القرار المعماري التفاعلي
  // =========================================================================
  const [advisorAnswers, setAdvisorAnswers] = useState({
    teamSize: 5,
    serverComplexity: 'heavy', // 'light' | 'moderate' | 'heavy'
    needTimeTravel: false,
    bundleSensitivity: 'normal' // 'critical' | 'normal'
  });

  const architecturalRecommendation = useMemo(() => {
    const { teamSize, serverComplexity, needTimeTravel, bundleSensitivity } = advisorAnswers;

    if (needTimeTravel || teamSize > 12) {
      return {
        title: "Redux Toolkit + RTK Query",
        color: "text-purple-400 border-purple-500/50 bg-purple-950/20",
        summary: "نظام مؤسسي صارم وموحد يوفر أعلى قابلية للتنبؤ ومراجعة الأحداث التاريخية.",
        why: [
          "فريق كبير يحتاج معايير صارمة وقوالب عمل جاهزة تمنع الاجتهادات العشوائية.",
          "دعم Redux DevTools الكامل مع سجلات التراجع الزمني الدقيق (Time-Travel).",
          "حل متكامل يدمج RTK Query لكاش الخادم دون الحاجة لتثبيت مكاتب إضافية."
        ]
      };
    }

    if (bundleSensitivity === 'critical' || (teamSize <= 8 && serverComplexity !== 'heavy')) {
      return {
        title: "Zustand + TanStack Query",
        color: "text-emerald-400 border-emerald-500/50 bg-emerald-950/20",
        summary: "النمط العصري الأرشق والأكثر إنتاجية لتطبيقات الويب الحديثة.",
        why: [
          "حجم حزمة متناهي الصغر (~1.2KB) مع اشتراكات دقيقة بدون Provider شجري.",
          "فصل جذري بين حالة واجهة العميل (Zustand) وحالة كاش الخادم (React Query).",
          "أعلى سرعة تطوير وإنتاجية للفريق مع مرونة وسهولة استهلاك خارقة."
        ]
      };
    }

    return {
      title: "Zustand + RTK Query / TanStack Query",
      color: "text-cyan-400 border-cyan-500/50 bg-cyan-950/20",
      summary: "مزيج متوازن يجمع بين خفة وسرعة متجر العميل وقوة محرك الكاش السحابي.",
      why: [
        "توفير كاش شبكي قوي وتحديثات تفاؤلية دون إثقال كود واجهة العميل.",
        "إمكانية تقسيم المتجر بنمط Slices مستقبلاً عند زيادة تعقيد النظام."
      ]
    };
  }, [advisorAnswers]);

  // دالة التراجع الزمني في DevTools (Time Travel Jump)
  const handleTimeTravelJump = (index) => {
    setSelectedActionIndex(index);
    const targetSnapshot = actionLog[index].stateSnapshot;
    setReduxState(targetSnapshot);
  };

  return (
    <div className="bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 p-4 md:p-6 shadow-2xl my-6">
      {/* ترويسة الاستوديو التفاعلي */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-black rounded-full shadow-lg">
              StateCraft Pro v12.0
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white">
              استوديو المقارنة وإدارة الحالة المعمارية
            </h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            محاكاة حية للفوارق الأدائية بين Redux Toolkit وZustand وContext، وتجربة Time-Travel الحقيقية.
          </p>
        </div>

        {/* أزرار التنقل بين أجنحة الاستوديو */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('comparison')}
            className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all \${
              activeTab === 'comparison'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }\`}
          >
            ⚖️ المقارنة الأدائية الحية
          </button>
          <button
            onClick={() => setActiveTab('devtools')}
            className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all \${
              activeTab === 'devtools'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }\`}
          >
            ⏱️ محاكي Redux DevTools ({actionLog.length})
          </button>
          <button
            onClick={() => setActiveTab('derived')}
            className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all \${
              activeTab === 'derived'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }\`}
          >
            🧬 البيانات المسواة والمشتقة
          </button>
          <button
            onClick={() => setActiveTab('advisor')}
            className={\`px-3 py-1.5 rounded-lg text-xs font-bold transition-all \${
              activeTab === 'advisor'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
            }\`}
          >
            🧭 المستشار المعماري
          </button>
        </div>
      </div>

      {/* الجناح 1: المقارنة الأدائية الحية */}
      {activeTab === 'comparison' && (
        <div className="space-y-6">
          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white mb-1">لوحة إرسال الأحداث المشتركة</h4>
              <p className="text-xs text-slate-400">
                انقر فوق الأزرار ولاحظ كيف تتفاعل عدادات إعادة التصيير (Renders) في كل محرك:
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleIncrementCounter}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg shadow transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>➕ زيادة العداد (+1)</span>
              </button>
              <button
                onClick={handleAddUserPoints}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>⭐ إضافة 50 نقطة للمستخدم</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Redux Toolkit */}
            <div className="bg-slate-900/70 border border-purple-500/40 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-purple-500" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    Redux Toolkit
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">useSelector()</span>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 mb-3">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-400">مكون المستخدم:</span>
                    <span className="font-mono text-purple-400 font-bold bg-purple-950/50 px-1.5 py-0.5 rounded border border-purple-800/40">
                      {renderStats.reduxUserCard} Renders
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">{reduxState.user.name}</p>
                  <p className="text-xs text-amber-400 mt-0.5 font-semibold">
                    النقاط: {reduxState.user.points} نقطة
                  </p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-400">مكون العداد:</span>
                    <span className="font-mono text-purple-400 font-bold bg-purple-950/50 px-1.5 py-0.5 rounded border border-purple-800/40">
                      {renderStats.reduxCounterBtn} Renders
                    </span>
                  </div>
                  <p className="text-xl font-black text-white font-mono">{reduxState.counter}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                💡 <span className="text-purple-300 font-semibold">اشتراك دقيق:</span> عند تغيير العداد، لا يعاد تصيير بطاقة المستخدم إطلاقاً!
              </div>
            </div>

            {/* Zustand */}
            <div className="bg-slate-900/70 border border-emerald-500/40 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-emerald-500" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    Zustand
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">useStore(s =&gt; s.p)</span>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 mb-3">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-400">مكون المستخدم:</span>
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-800/40">
                      {renderStats.zustandUserCard} Renders
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">{zustandState.user.name}</p>
                  <p className="text-xs text-amber-400 mt-0.5 font-semibold">
                    النقاط: {zustandState.user.points} نقطة
                  </p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-400">مكون العداد:</span>
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-800/40">
                      {renderStats.zustandCounterBtn} Renders
                    </span>
                  </div>
                  <p className="text-xl font-black text-white font-mono">{zustandState.counter}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                ⚡ <span className="text-emerald-300 font-semibold">أداء فائق:</span> دقة ذرية وبدون Provider شجري وبحجم 1.2KB فقط.
              </div>
            </div>

            {/* Context API */}
            <div className="bg-slate-900/70 border border-rose-500/40 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-rose-500" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                    Context API
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">useContext(Ctx)</span>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 mb-3">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-400">مكون المستخدم:</span>
                    <span className="font-mono text-rose-400 font-bold bg-rose-950/50 px-1.5 py-0.5 rounded border border-rose-800/40">
                      {renderStats.contextUserCard} Renders ⚠️
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white">{contextState.user.name}</p>
                  <p className="text-xs text-amber-400 mt-0.5 font-semibold">
                    النقاط: {contextState.user.points} نقطة
                  </p>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                  <div className="flex justify-between items-center text-xs mb-1">
                    <span className="text-slate-400">مكون العداد:</span>
                    <span className="font-mono text-rose-400 font-bold bg-rose-950/50 px-1.5 py-0.5 rounded border border-rose-800/40">
                      {renderStats.contextCounterBtn} Renders ⚠️
                    </span>
                  </div>
                  <p className="text-xl font-black text-white font-mono">{contextState.counter}</p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-rose-300 font-medium">
                ⚠️ <span className="font-bold">ريندر عبثي:</span> أي تغيير في أي خاصية يعيد تصيير جميع المستهلكين في Context!
              </div>
            </div>
          </div>
        </div>
      )}

      {/* الجناح 2: محاكي DevTools */}
      {activeTab === 'devtools' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 bg-slate-900/90 rounded-xl border border-slate-800 p-4">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                سجل أفعال Redux (Action Log)
              </h4>
              <span className="text-[10px] text-slate-400 font-mono">{actionLog.length} Actions</span>
            </div>

            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1">
              {actionLog.map((act, idx) => (
                <div
                  key={act.id}
                  onClick={() => handleTimeTravelJump(idx)}
                  className={\`p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between text-xs \${
                    selectedActionIndex === idx
                      ? 'bg-purple-950/60 border-purple-500 text-white font-bold shadow'
                      : 'bg-slate-950/50 border-slate-800/60 text-slate-300 hover:bg-slate-800/50'
                  }\`}
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-[10px] font-mono text-purple-400">#{idx}</span>
                    <span className="font-mono truncate">{act.type}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] text-slate-500 font-mono">{act.timestamp}</span>
                    {selectedActionIndex === idx && (
                      <span className="px-1.5 py-0.5 bg-purple-500 text-[9px] text-white rounded font-bold">
                        اللقطة الحالية
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900/90 rounded-xl border border-slate-800 p-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-800">
                <div>
                  <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    فحص الحالة عند الفعل: {actionLog[selectedActionIndex]?.type}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    اللقطة الزمنية للحالة في الذاكرة (Time-Travel Snapshot):
                  </p>
                </div>
                <button
                  onClick={() => handleTimeTravelJump(selectedActionIndex)}
                  className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded shadow transition-all active:scale-95 flex items-center gap-1"
                >
                  <span>⏱️ القفز إلى هذه اللحظة (Jump)</span>
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto max-h-[250px]">
                <pre>{JSON.stringify(actionLog[selectedActionIndex]?.stateSnapshot, null, 2)}</pre>
              </div>

              <div className="mt-3 p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">حمولة الفعل (Action Payload):</span>
                <span className="font-mono text-xs text-amber-300">
                  {actionLog[selectedActionIndex]?.payload
                    ? JSON.stringify(actionLog[selectedActionIndex]?.payload)
                    : 'null (تهيئة أولية)'}
                </span>
              </div>
            </div>

            <div className="mt-4 p-2.5 bg-purple-950/20 border border-purple-900/40 rounded-lg text-[11px] text-purple-300">
              ⚡ ميزة <span className="font-bold">Time-Travel Debugging</span> تتيح العودة بالزمن لأي لقطة سابقة لإعادة تشغيل الحالات واكتشاف مصدر الخلل بدقة خارقة.
            </div>
          </div>
        </div>
      )}

      {/* الجناح 3: البيانات المسواة والمشتقة */}
      {activeTab === 'derived' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">إجمالي المهام المسواة:</span>
              <span className="text-xl font-black text-white font-mono">{derivedStats.total}</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">المهام المنجزة:</span>
              <span className="text-xl font-black text-emerald-400 font-mono">{derivedStats.completedCount}</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">نسبة الإنجاز (Derived %):</span>
              <span className="text-xl font-black text-cyan-400 font-mono">{derivedStats.completionRate}%</span>
            </div>
            <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">متوسط كفاءة الإنجاز:</span>
              <span className="text-xl font-black text-purple-400 font-mono">{derivedStats.avgScore}/100</span>
            </div>
          </div>

          <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-4 justify-between items-center">
            <form onSubmit={handleAddNormalizedItem} className="flex gap-2 w-full md:w-auto">
              <input
                type="text"
                placeholder="عنوان المهمة الهندسية الجديدة..."
                value={newItemTitle}
                onChange={(e) => setNewItemTitle(e.target.value)}
                className="px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-purple-500 w-full md:w-64"
              />
              <select
                value={newItemPriority}
                onChange={(e) => setNewItemPriority(e.target.value)}
                className="px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300"
              >
                <option value="critical">حرجة</option>
                <option value="high">عالية</option>
                <option value="medium">متوسطة</option>
              </select>
              <button
                type="submit"
                className="px-4 py-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg shadow whitespace-nowrap"
              >
                ➕ إضافة مسواة O(1)
              </button>
            </form>

            <div className="flex gap-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800">
              {['all', 'completed', 'in_progress', 'pending'].map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={\`px-2.5 py-1 text-xs font-bold rounded transition-all \${
                    filterStatus === st ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                  }\`}
                >
                  {st === 'all' ? 'الكل' : st === 'completed' ? 'منجز' : st === 'in_progress' ? 'قيد التنفيذ' : 'معلق'}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center justify-between hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleItemStatus(item.id)}
                    className={\`w-5 h-5 rounded flex items-center justify-center border transition-all \${
                      item.status === 'completed'
                        ? 'bg-emerald-600 border-emerald-500 text-white font-bold text-xs'
                        : 'border-slate-700 hover:border-slate-500'
                    }\`}
                  >
                    {item.status === 'completed' && '✓'}
                  </button>
                  <div>
                    <span className={\`text-xs font-bold \${item.status === 'completed' ? 'line-through text-slate-500' : 'text-white'}\`}>
                      {item.title}
                    </span>
                    <div className="flex gap-2 mt-0.5">
                      <span className={\`text-[10px] px-1.5 rounded font-mono \${
                        item.priority === 'critical' ? 'bg-rose-950 text-rose-300' : 'bg-slate-800 text-slate-400'
                      }\`}>
                        {item.priority}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">Entity ID: #{item.id}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">Score: {item.score}</span>
                  <button
                    onClick={() => toggleItemStatus(item.id)}
                    className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] rounded"
                  >
                    تبديل الحالة
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* الجناح 4: المستشار المعماري */}
      {activeTab === 'advisor' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 bg-slate-900/90 rounded-xl border border-slate-800 p-5 space-y-4">
            <h4 className="text-sm font-bold text-white mb-2">معايير ومتطلبات نظامك البرمجي</h4>

            <div>
              <label className="text-xs text-slate-400 block mb-1">
                حجم الفريق البرمجي: <span className="text-white font-bold">{advisorAnswers.teamSize} مطورين</span>
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={advisorAnswers.teamSize}
                onChange={(e) => setAdvisorAnswers((prev) => ({ ...prev, teamSize: Number(e.target.value) }))}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                <span>1 (فردي)</span>
                <span>15 (متوسط)</span>
                <span>30+ (مؤسسي)</span>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1">تعقيد وتكرار كاش الخادم (APIs):</label>
              <div className="grid grid-cols-3 gap-2">
                {['light', 'moderate', 'heavy'].map((level) => (
                  <button
                    key={level}
                    onClick={() => setAdvisorAnswers((prev) => ({ ...prev, serverComplexity: level }))}
                    className={\`p-2 rounded-lg text-xs font-bold border transition-all \${
                      advisorAnswers.serverComplexity === level
                        ? 'bg-purple-600 border-purple-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                    }\`}
                  >
                    {level === 'light' ? 'بسيط' : level === 'moderate' ? 'متوسط' : 'معقد ومكثف'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1">الأولوية لحجم حزمة التحميل (Bundle Size):</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setAdvisorAnswers((prev) => ({ ...prev, bundleSensitivity: 'critical' }))}
                  className={\`p-2 rounded-lg text-xs font-bold border transition-all \${
                    advisorAnswers.bundleSensitivity === 'critical'
                      ? 'bg-purple-600 border-purple-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }\`}
                >
                  أولوية قصوى (~1KB فقط)
                </button>
                <button
                  onClick={() => setAdvisorAnswers((prev) => ({ ...prev, bundleSensitivity: 'normal' }))}
                  className={\`p-2 rounded-lg text-xs font-bold border transition-all \${
                    advisorAnswers.bundleSensitivity === 'normal'
                      ? 'bg-purple-600 border-purple-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                  }\`}
                >
                  حجم طبيعي مقبول (~15KB)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="needTimeTravel"
                checked={advisorAnswers.needTimeTravel}
                onChange={(e) => setAdvisorAnswers((prev) => ({ ...prev, needTimeTravel: e.target.checked }))}
                className="w-4 h-4 accent-purple-500 cursor-pointer"
              />
              <label htmlFor="needTimeTravel" className="text-xs text-slate-300 cursor-pointer">
                نحتاج سجلات تدقيق دقيقة وإمكانية الرجوع الزمني للأحداث (Time-Travel Logging).
              </label>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className={\`p-5 rounded-xl border \${architecturalRecommendation.color} space-y-4\`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 uppercase tracking-widest font-black">
                  الحكم المعماري الموصى به
                </span>
                <span className="text-xs font-bold">مطابقة معمارية 100%</span>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white">
                {architecturalRecommendation.title}
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                {architecturalRecommendation.summary}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-xs font-bold text-white block">لماذا هذه التوليفة بالذات؟</span>
                {architecturalRecommendation.why.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-400">
              📌 <span className="text-white font-bold">نصيحة الفريق الاستشاري:</span> لا تختر مكتبة معقدة قبل أن تطلبها المشكلة الفعلية؛ حافظ على بساطة المعمارية وابدأ بـ (Zustand + React Query) كمعيار حديث متوازن.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`
  },
  infographic: {
    title: "المخطط الهيكلي الشامل لإدارة الحالة في منظومة React الحديثة",
    description: "الدليل المرجعي الكامل للمهندسين لاختيار وتوزيع وتهيئة مخازن الحالة بين العميل والخادم بدقة واحتراف.",
    sections: [
      {
        heading: "1. مصفوفة تصنيف وتوزيع الحالة (State Placement)",
        bullets: [
          "Local UI State: لحالات المكون الفردي (Modal, Dropdown) عبر useState أو useReducer.",
          "Shared Client State: للحالات المشتركة بين شاشات متباعدة عبر Zustand أو Redux Toolkit.",
          "Server State: لبيانات الـ APIs والكاش السحابي عبر TanStack Query أو RTK Query.",
          "Derived State: بيانات مستنبطة أثناء التصيير بـ useMemo أو createSelector دون useState ثانٍ."
        ]
      },
      {
        heading: "2. معمارية Redux Toolkit المؤسسية (Enterprise RTK)",
        bullets: [
          "createSlice: توليد الأفعال والمخفضات تلقائياً مع دمج محرك Immer الداخلي لتعديلات آمنة.",
          "createAsyncThunk: تقسيم دورة حياة طلبات الشبكة الصعبة لـ pending وfulfilled وrejected.",
          "createEntityAdapter: تسوية البيانات (Normalization) لتمكين الوصول المباشر O(1).",
          "RTK Query: إدارة كاش الخادم التلقائي بنظام الوسوم (Tags) والتحديث التفاؤلي الفوري."
        ]
      },
      {
        heading: "3. بنية Zustand الرشيقة والحديثة (Modern Zustand)",
        bullets: [
          "No-Provider Architecture: إنشاء خطافات مباشرة دون الحاجة لتغليف شجرة المكونات.",
          "Fine-Grained Selectors: اشتراكات ذرية دقيقة عبر useStore(s => s.prop) و useShallow.",
          "Slice Pattern: تجزئة المتاجر المعقدة إلى شرائح منطقية مستقلة ودمجها بمرونة.",
          "Built-in Middlewares: حفظ الحالة في التخزين المحلي بـ persist والربط بـ devtools."
        ]
      },
      {
        heading: "4. قواعد ومعايير المقارنة الاستراتيجية (Best Practices)",
        bullets: [
          "الفصل الجذري: حظر خلط بيانات الخادم المؤقتة مع حالة واجهة العميل الصافية.",
          "الحد الأدنى من الحقيقة (Single Source of Truth): تجنب تخزين الإحصائيات والفلاتر كحالات مستقلة.",
          "القرار حسب النطاق: ابدأ بـ (Zustand + Query) للتطبيقات الحديثة، وRTK للمشاريع المؤسسية العملاقة."
        ]
      }
    ]
  }
};

export default SECTION_12_META;
