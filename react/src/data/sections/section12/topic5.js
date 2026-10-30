// src/data/sections/section12/topic5.js

export const topic5 = {
  id: "12-5",
  title: "مقارنة حلول إدارة الحالة المعمارية",
  englishTitle: "Comparing Architectural State Management Solutions",
  description:
    "دليل تحليلي ومعماري شامل لمقارنة حلول إدارة الحالة المختلفة في منظومة React (Context API، Redux Toolkit، Zustand، useState/useReducer)، وتحديد متى يُكتفى بالحلول البسيطة، وكيفية الفصل الجذري بين حالة الخادم (Server State) وحالة العميل (Client State)، وحساب البيانات المشتقة لتجنب الازدواجية وتناقض البيانات، واختيار الحل الأمثل وفقاً لحجم المشروع ومتطلبات الفريق.",
  subtopics: [
    {
      id: "12-5-a",
      title: "Context API مقابل Redux Toolkit",
      englishTitle: "Context API vs Redux Toolkit",
      pronunciation: "كونتكست إيه بي آي فيرسس ريدكس تولكيت",
      meaning: "المقارنة التقنية والمعمارية بين سياق رياكت المدمج ومكتبة ريدكس المركزية",
      description:
        "المقارنة بين React Context وRedux Toolkit هي واحدة من أكثر المعارك المفاهيمية انتشاراً بين مطوري React. من الضروري إدراك أن React Context ليست أداة لإدارة الحالة (State Management Tool) في جوهرها، بل هي وسيلة 'لنقل واعتماد التبعيات وتفادي الحفر عبر الخصائص' (Dependency Injection / Props Drilling Prevention mechanism). عندما تتغير قيمة المزود Provider في Context، يُعاد تصيير (re-render) جميع المكونات المستهلكة (consumers) التي تستدعي useContext دون أي تدقيق دقيق في الحقول التي تم استهلاكها بالفعل ما لم تُقسَّم السياقات بعناية فائقة. في المقابل، Redux Toolkit هي محرك متكامل لإدارة الحالة المعقدة يقدم نظام اشتراكات دقيقاً للغاية (fine-grained subscription system) عبر مكتبة Reselect وuseSelector، فلا يُعاد تصيير المكون إلا إذا تغير الحقل المحدد فعلياً وفقاً لمقارنة مساواة مرجعية أو مخصصة. علاوة على ذلك، توفر RTK وسائط مساعدة (Middlewares)، وتاريخاً كاملاً للأحداث قابلاً للرجوع عبر الزمن (Time-Travel Debugging)، وقواعد قياسية موحدة تلائم فرق العمل الضخمة والمشاريع التي تتطلب قابلية تتبع صارمة للأحداث والعمليات غير المتزامنة المعقدة.",
      analogy:
        "React Context يشبه مكبر صوت في مكتب عام؛ إذا أراد المدير إعلان رسالة لموظف واحد في قسم المحاسبة، يضطر كل الموظفين في الغرفة إلى سماع الإعلان والتوقف عن العمل لحظياً. بينما Redux Toolkit يشبه نظام اتصالات لاسلكي مشفر يحتوي على قنوات ترددية مخصصة ومسجل للمحادثات؛ الموظف المعني فقط يستقبل الإشارة ويتجاوب، بينما يتم أرشفة كل اتصال في سجل العمليات المركزي.",
      whyItMatters:
        "استخدام Context API لإدارة حالات تتغير بمعدل مرتفع (مثل إحداثيات مؤشر الفأرة، أو تدفقات الدردشة اللحظية، أو الرسوم المتحركة المتغيرة بالمللي ثانية) يؤدي إلى انهيار جذري في أداء التطبيق وتجميد الشاشة بسبب تكرار إعادة تصيير شجرة المكونات بالكامل. فهم الفارق المعماري يحمي التطبيق من مشاكل الأداء الخفية ويحدد متى يكون Context كافياً تماماً ومتى يصبح Redux حتمياً.",
      syntax: `// متى تستخدم Context:
// للبيانات ذات التكرار المنخفض في التغيير مثل الثيم واللغة وحساب المستخدم المسجل:
const ThemeContext = createContext();

// متى تستخدم Redux Toolkit:
// للبيانات المركزية المعقدة ذات التحديثات المتكررة والمتعددة المصادر:
const appStore = configureStore({
  reducer: { cart: cartReducer, checkout: checkoutReducer, telemetry: telemetryReducer }
});`,
      simpleExample: `// مقارنة استهلاك السياق البسيط مقابل انتقاء ريدكس
import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

// إنشاء سياق تجريبي للمستخدم
const UserContext = createContext(null);

// مكون يستهلك سياق رياكت - سيعاد تصييره كلما تغير أي جزء في كائن المستخدم
export function ContextProfileBadge() {
  // استهلاك السياق الكامل
  const user = useContext(UserContext);
  // إرجاع واجهة المستخدم
  return <span className="font-bold">{user?.name}</span>;
}

// مكون يستهلك ريدكس - لن يعاد تصييره إلا إذا تغير اسم المستخدم تحديداً
export function ReduxProfileBadge() {
  // انتقاء دقيق للخاصية المعنية فقط لمنع الريندر العبثي
  const userName = useSelector((state) => state.auth.user.name);
  // إرجاع واجهة المستخدم
  return <span className="font-bold text-emerald-600">{userName}</span>;
}`,
      advancedExample: `// بنية معمارية توضح تقسيم السياقات لتفادي إعادة الريندر ومقارنتها بمحددات ريدكس
import React, { createContext, useContext, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// 1. تقسيم Context إلى سياق للقراءة وسياق للتحديث لتفادي تصيير غير الضروري
const CounterValueContext = createContext(null);
const CounterDispatchContext = createContext(null);

// مزود مخصص لفصل القيمة عن الإجراء
export function CounterProvider({ children }) {
  // حالة العداد
  const [count, setCount] = useState(0);

  // مذكرة دالة التحديث لتظل مرجعيتها مستقرة
  const increment = useMemo(() => () => setCount((c) => c + 1), []);

  // إرجاع المزودات المتداخلة
  return (
    <CounterDispatchContext.Provider value={increment}>
      <CounterValueContext.Provider value={count}>
        {children}
      </CounterValueContext.Provider>
    </CounterDispatchContext.Provider>
  );
}

// مكون الزر الذي يحتاج فقط لدالة التحديث دون القراءة
export function ContextOptimizedButton() {
  // استدعاء دالة التحديث المستقرة
  const increment = useContext(CounterDispatchContext);
  // طباعة أثر التصيير في وحدة التحكم
  console.log("Context Button rendered!");
  // إرجاع زر ينفذ التحديث دون إعادة تصيير عند تغير count
  return <button onClick={increment} className="btn-modern">زيادة السياق</button>;
}

// 2. المكافئ في Redux Toolkit بفضل بنية الاشتراكات الصافية
export function ReduxOptimizedButton() {
  // الحصول على دالة الإرسال من ريدكس المستقرة ذاتياً
  const dispatch = useDispatch();
  // طباعة أثر التصيير في وحدة التحكم
  console.log("Redux Button rendered!");
  // الزر لا يشترك في أي حالة فلا يعاد تصييره إطلاقاً عند تغير العداد
  return (
    <button
      onClick={() => dispatch({ type: 'counter/increment' })}
      className="btn-redux"
    >
      زيادة ريدكس
    </button>
  );
}`,
      outputExplanation:
        "يوضح المثالان الفرق بين تكلفة تحسين Context عبر تقسيمه إلى سياقين منفصلين (واحد للقيمة وآخر للإجراء) لمنع إعادة تصيير الأزرار، وبين طبيعة Redux Toolkit التي توفر هذا العزل والتفريق تلقائياً من خلال useDispatch وuseSelector دون الحاجة لبناء طبقات Provider متداخلة.",
      commonMistakes: [
        {
          mistake: "وضع الحالة العالمية بأكملها في Context واحد ضخم وتمرير كائن يتغير مرجعه في كل عملية ريندر.",
          fix: "تقسيم السياقات حسب مجال المسؤولية ومعدل التحديث (مثل: AuthContext, ThemeContext)، أو الانتقال لحل اشتراكي مخصص مثل Redux Toolkit أو Zustand."
        },
        {
          mistake: "الاعتقاد بأن Redux يلغي الحاجة إلى React Context، أو أن أحدهما يلغي الآخر تماماً.",
          fix: "استيعاب أن الأداتين تكملان بعضهما؛ Context ممتاز للبيانات الشاملة البطيئة والتبعيات، بينما Redux ممتاز لحالة الأعمال المعقدة ومتعددة الشاشات."
        }
      ],
      bestPractices: [
        "استخدم Context API للبيانات ذات معدل التغيير المنخفض مثل السمات المظهرية (Themes)، لغة الواجهة (i18n)، ومعلومات جلسة تسجيل الدخول البسيطة.",
        "استخدم Redux Toolkit للمنصات التجارية الضخمة، والأنظمة المالية، أو لوحات التحكم التفاعلية ذات الحالات متعددة الخطوات والتعديلات المتزامنة المعقدة."
      ],
      visualInfographic: {
        type: "comparison-table",
        title: "مقارنة معمارية: Context API مقابل Redux Toolkit",
        columns: ["المعيار", "React Context API", "Redux Toolkit"],
        rows: [
          ["الغرض الأساسي", "تفادي Props Drilling وحقن التبعيات", "إدارة وتتبع الحالات المعقدة المركزية"],
          ["مستوى الاشتراكات", "شامل للمزود بأكمله (Coarse-grained)", "دقيق للحقول المحددة (Fine-grained)"],
          ["إعادة التصيير (Re-renders)", "يصيب جميع المستهلكين ما لم يُقسم", "يصيب المكون فقط إذا تغير حقله المختار"],
          ["التعامل مع العمليات غير المتزامنة", "يتطلب بناء تأثيرات يدوية مخصصة", "مدمج عبر createAsyncThunk وRTK Query"],
          ["أدوات الفحص والتحليل", "تقتصر على React DevTools القياسية", "Redux DevTools مع Time-Travel كامل"],
          ["حجم الحزمة وحجم الشفرة", "مدمج برياكت (0 كيلوبايت إضافية)", "يتطلب تثبيت حزمة RTK المدمجة"]
        ]
      }
    },
    {
      id: "12-5-b",
      title: "Redux Toolkit مقابل Zustand",
      englishTitle: "Redux Toolkit vs Zustand",
      pronunciation: "ريدكس تولكيت فيرسس زوستاند",
      meaning: "المقارنة التقنية المباشرة بين ريدكس الحديث ومكتبة زوستاند الخفيفة",
      description:
        "يمثل كل من Redux Toolkit وZustand أحدث وأقوى حلول إدارة حالة العميل في عالم React الحديث، وكلاهما يعتمد نموذج المخزن الخارجي (External Store) مع اشتراكات دقيقة (Fine-Grained Selectors) متوافقة تماماً مع React 18+ وuseSyncExternalStore. ومع ذلك، تختلف الفلسفة المعمارية بينهما جذرياً: Redux Toolkit تتبنى النهج 'المنظم القياسي الصارم' القائم على تدفق البيانات أحادي الاتجاه الصارم المعتمد على Actions وReducers وImmer وMiddleware وسجلات DevTools التاريخية، ما يجعلها الخيار النموذجي للشركات الكبرى والفرق الضخمة التي تحتاج توحيد أسلوب العمل وفرض قيود على تعديل الحالة وتتبع الأحداث بدقة. على النقيض من ذلك، تتبنى Zustand فلسفة 'البساطة والتحرر والسرعة الخاطفة' بدون الحاجة لأي Context Provider يغلف التطبيق، وتتيح إنشاء خطافات مخصصة (Custom Hooks) مباشرة من المخزن، مع إمكانية تعديل الحالة بدوال عادية متزامنة أو غير متزامنة، وبحجم حزمة متناهي الصغر (~1.2 كيلوبايت مقابل ~11 كيلوبايت لـ RTK).",
      analogy:
        "Redux Toolkit يشبه قطاراً فائق السرعة يسير على خطوط سكك حديدية صارمة ولديه محطات وجداول زمنية وبروتوكولات أمان صارمة؛ مستحيل أن ينحرف عن المسار، ومثالي لنقل آلاف الركاب بتنظيم تام. بينما Zustand يشبه سيارة رياضية كهربائية رشيقة؛ تستقلها فوراً وتنطلق بأسرع مسار دون الحاجة لانتظار قطار أو محطات تذاكر، ومثالية للرحلات السريعة والمشاريع الذكية.",
      whyItMatters:
        "معرفة الفروق الدقيقة بين RTK وZustand يجنب الفرق الهندسية الوقوع في فخ الإفراط الهندسي (Over-engineering) واستهلاك وقت التطوير في كتابة boilerplate غير ضروري، أو العكس: الوقوع في فخ العشوائية في التطبيقات المؤسسية الضخمة عند غياب التوجيه الصارم.",
      syntax: `// بنية Redux Toolkit المنظمة:
const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: { addItem: (state, action) => { ... } }
});

// بنية Zustand المرنة المباشرة:
const useCartStore = create((set, get) => ({
  items: [],
  addItem: (product) => set((state) => ({ items: [...state.items, product] }))
}));`,
      simpleExample: `// مثال مقارن لإنشاء متجر عداد في كلا الحلين
import { create } from 'zustand';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// 1. تعريف العداد في Zustand: سطرين بدون مزود
export const useCounterZustand = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

// 2. تعريف العداد في Redux Toolkit: شريحة ومخزن
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1; }
  }
});
export const { increment } = counterSlice.actions;
export const reduxStore = configureStore({ reducer: { counter: counterSlice.reducer } });`,
      advancedExample: `// مقارنة عملية لتنفيذ عملية جلب غير متزامنة مع تحديث الحالة
import { create } from 'zustand';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// =================== نهج ZUSTAND ===================
export const useUserZustand = create((set) => ({
  users: [],
  isLoading: false,
  error: null,

  // دالة عادية غير متزامنة تحدث الحالة مباشرة
  fetchUsers: async () => {
    // تفعيل حالة التحميل
    set({ isLoading: true, error: null });
    try {
      // إرسال طلب الشبكة
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      // تحويل البيانات لـ JSON
      const data = await res.json();
      // تحديث الحالة بالبيانات مع إلغاء التحميل
      set({ users: data, isLoading: false });
    } catch (err) {
      // تسجيل الخطأ وإلغاء التحميل
      set({ error: err.message, isLoading: false });
    }
  }
}));

// =================== نهج REDUX TOOLKIT ===================
// 1. إنشاء ثانك غير متزامن منفصل
export const fetchUsersThunk = createAsyncThunk('users/fetch', async () => {
  // إرسال الطلب
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // إرجاع البيانات
  return await res.json();
});

// 2. ربط دورة حياة الثانك داخل الشريحة
export const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // عند بدء الطلب
      .addCase(fetchUsersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // عند نجاح الطلب
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      // عند فشل الطلب
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});`,
      outputExplanation:
        "يوضح المثال المقارن كيف تتيح Zustand التعامل مع الدوال غير المتزامنة كدوال عادية ومباشرة داخل المتجر في بضعة أسطر، بينما تتطلب Redux Toolkit هيكلية منفصلة عبر createAsyncThunk مع معالجة واضحة لكل من الحالات الثلاث (pending, fulfilled, rejected). كلاهما يقدم نفس النتيجة، لكن RTK تفرض توثيقاً صريحاً لكل حالة حدث.",
      commonMistakes: [
        {
          mistake: "افتراض أن Zustand تفتقر للقدرة على التعامل مع المشاريع الكبيرة بسبب صغر حجمها.",
          fix: "استيعاب أن Zustand تدعم تقسيم المتاجر (Slice Pattern)، والبرمجيات الوسيطة (Middlewares)، وRedux DevTools، وتعمل بكفاءة استثنائية في أضخم التطبيقات."
        },
        {
          mistake: "استخدام Zustand دون Selectors (استدعاء useStore() كاملاً) والشكوى من كثرة إعادة التصيير.",
          fix: "دائماً استخرج الحقول المطلوبة فقط: useStore((state) => state.field) واستخدم useShallow عند استخراج عدة خصائص في كائن واحد."
        }
      ],
      bestPractices: [
        "اختر Zustand لمعظم تطبيقات React الحديثة إذا كنت تريد مخزناً خفيفاً وسريعاً ومرناً دون التضحية بدقة الاشتراكات.",
        "اختر Redux Toolkit إذا كان مشروعك يضم عشرات المطورين، أو يتطلب استخدام RTK Query المتكامل، أو كانت المعايير الهندسية تتطلب توحيداً صارماً ومسارات تدقيق تاريخية مفصلة."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "متى تختار Redux Toolkit ومتى تختار Zustand؟",
        items: [
          {
            title: "اختر Zustand إذا:",
            points: [
              "تريد حلاً خفيفاً وسريع التأسيس دون Boilerplate",
              "لا ترغب في تغليف التطبيق بـ Provider شجري",
              "فريقك يفضل كتابة دوال عادية ومباشرة",
              "تريد استهلاك الحالة داخل وخارج شجرة React بسهولة",
              "أداء الحزمة (Bundle Size) هو أولوية قصوى (~1.2KB)"
            ]
          },
          {
            title: "اختر Redux Toolkit إذا:",
            points: [
              "فريق كبير يحتاج معايير وقواعد معمارية صارمة لا تسمح بالاجتهاد",
              "تريد حل جلب بيانات وتخزين مؤقت مدمج متكامل (RTK Query)",
              "تحتاج أدوات تتبع تاريخية متقدمة للأحداث وسجلات تصحيح دقيقة",
              "المشروع يعتمد بالفعل على Redux وميراث برمجي قديم",
              "تتطلب هندسة النظام تطبيق Middlewares مخصصة ومعقدة"
            ]
          }
        ]
      }
    },
    {
      id: "12-5-c",
      title: "متى يكفي useState وuseReducer بدون مكتبات",
      englishTitle: "When useState and useReducer are Sufficient",
      pronunciation: "وين يوز ستيت آند يوز ريديوسر آر سافيشننت",
      meaning: "معايير الاكتفاء بخطافات رياكت المدمجة وتجنب الإفراط الهندسي",
      description:
        "أحد أكثر الأخطاء شيوعاً في مجتمع مطوري React هو التسرع في تثبيت مكتبات خارجية لإدارة الحالة (مثل Redux أو Zustand أو MobX) قبل تقييم الاحتياجات الفعلية للتطبيق. في الحقيقة، توفر React أداتين قويتين مدمجتين تماماً: useState للحالات البسيطة والمستقلة، وuseReducer للحالات المعقدة محلياً التي تحتوي على حالات فرعية متداخلة أو انتقالات تعتمد على منطق أعمال متفرع ومحدد مسبقاً. يكفي استخدام useState وuseReducer تماماً عندما تكون الحالة تخص مكوناً واحداً، أو مكوناً ومجموعة صغيرة ومباشرة من أبنائه (Local & Lifted State)، أو عندما تكون الحالة مؤقتة تخص واجهة المستخدم (مثل فتح نافذة منبثقة، وتفعيل تبويب، أو حالة إدخال في نموذج). اللجوء إلى مكتبة خارجية لا يصبح ضرورياً إلا عندما تتشارك شاشات أو مسارات بعيدة تماماً في شجرة المكونات نفس البيانات وتحتاج إلى تحديثها بشكل متزامن، أو عندما يصبح تمرير الخصائص (Props Drilling) يمر عبر أكثر من 3 إلى 4 مستويات دون مبرر منطقي لمكونات وسيطة.",
      analogy:
        "استخدام Redux Toolkit لفتح وإغلاق قائمة منسدلة (Dropdown) في بطاقة واحدة يشبه استئجار شاحنة نقل عملاقة لنقل كوب قهوة من المطبخ إلى الصالة؛ الأداة تعمل بالتأكيد، ولكن التكلفة والمشقة والتعقيد الهندسي لا يتناسب نهائياً مع حجم المهمة.",
      whyItMatters:
        "تجنب الإفراط الهندسي يقلل من حجم الحزمة النهائية (Bundle Size)، ويسرع وقت تحميل الصفحات، ويحافظ على بساطة الكود وصيانته وقابليته للفهم من قبل أي مطور جديد دون الحاجة لقضاء ساعات في قراءة مسارات تدفق معقدة لا حاجة لها.",
      syntax: `// 1. استخدام useState للحالات البسيطة
const [isOpen, setIsOpen] = useState(false);

// 2. استخدام useReducer للحالات المحلية المتشابكة
const [state, dispatch] = useReducer(formReducer, initialFormState);`,
      simpleExample: `// مثال على استخدام useReducer المحلي للتحكم في نموذج معقد دون مكتبة خارجية
import React, { useReducer } from 'react';

// الحالة الابتدائية للنموذج
const initialState = { name: '', email: '', isSubmitting: false, errors: {} };

// دالة المخفض لإدارة انتقالات الحالة المترابطة
function formReducer(state, action) {
  switch (action.type) {
    case 'FIELD_CHANGE':
      // تعديل حقل محدد ومسح الخطأ المرتبط به
      return { ...state, [action.field]: action.value, errors: { ...state.errors, [action.field]: null } };
    case 'START_SUBMIT':
      // تفعيل حالة الإرسال
      return { ...state, isSubmitting: true };
    case 'SET_ERRORS':
      // تسجيل الأخطاء وإلغاء حالة الإرسال
      return { ...state, isSubmitting: false, errors: action.errors };
    default:
      return state;
  }
}

export function LocalFormManager() {
  // إدارة الحالة بالكامل محلياً بكفاءة تامة
  const [formState, dispatch] = useReducer(formReducer, initialState);

  // إرجاع واجهة نموذج محلية نظيفة
  return (
    <form className="p-4 border rounded-xl">
      <input
        value={formState.name}
        onChange={(e) => dispatch({ type: 'FIELD_CHANGE', field: 'name', value: e.target.value })}
        placeholder="الاسم"
        className="input-field"
      />
    </form>
  );
}`,
      advancedExample: `// نمط رفع الحالة الذكي (State Lifting) وتوزيعها محلياً دون مساس بالحالة العالمية
import React, { useState } from 'react';

// المكون الحاوي الأب الذي يدير حالة الحوار
export function MultiStepWizard() {
  // رقم الخطوة الحالية
  const [currentStep, setCurrentStep] = useState(1);
  // بيانات النموذج المجمعة
  const [wizardData, setWizardData] = useState({ plan: 'pro', billingCycle: 'monthly' });

  // دالة تحديث الحقول المجمعة
  const updateWizard = (key, value) => {
    setWizardData((prev) => ({ ...prev, [key]: value }));
  };

  // إرجاع الشاشات مع تمرير الحالة للأبناء المباشرين فقط
  return (
    <div className="wizard-container">
      <h3 className="text-lg font-bold">معالج الاشتراك - خطوة {currentStep}</h3>
      {currentStep === 1 && (
        <StepOnePlan
          selectedPlan={wizardData.plan}
          onSelect={(plan) => updateWizard('plan', plan)}
          onNext={() => setCurrentStep(2)}
        />
      )}
      {currentStep === 2 && (
        <StepTwoBilling
          billingCycle={wizardData.billingCycle}
          onSelect={(cycle) => updateWizard('billingCycle', cycle)}
          onBack={() => setCurrentStep(1)}
        />
      )}
    </div>
  );
}

// مكون فرعي يستقبل خصائص صريحة ونظيفة
function StepOnePlan({ selectedPlan, onSelect, onNext }) {
  return (
    <div>
      <p>الخطة المختارة: {selectedPlan}</p>
      <button onClick={() => onSelect('enterprise')} className="btn-option">اختر Enterprise</button>
      <button onClick={onNext} className="btn-primary">التالي</button>
    </div>
  );
}

// مكون فرعي للخطوة الثانية
function StepTwoBilling({ billingCycle, onSelect, onBack }) {
  return (
    <div>
      <p>دورة الدفع: {billingCycle}</p>
      <button onClick={onBack} className="btn-secondary">السابق</button>
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثالان كيف يمكن إدارة نماذج معقدة ومعالجات متعددة الخطوات (Multi-step Wizards) بنجاح فائق واحترافية عالية باستخدام useReducer ورفع الحالة البسيط (State Lifting) دون الحاجة لتثبيت أي حزم خارجية أو تلويث المتجر العالمي بتفاصيل مؤقتة تخص شاشة واحدة.",
      commonMistakes: [
        {
          mistake: "تخزين كل صغيرة وكبيرة في المتجر العالمي (Global Store) مثل نصوص حقول الإدخال أثناء الكتابة وحالة القوائم المنسدلة.",
          fix: "الالتزام بقاعدة: 'اجعل الحالة محلية لأقصى حد ممكن، ولا ترفعها إلا عندما يطلب مكون آخر قراءتها أو تعديلها'."
        },
        {
          mistake: "كتابة عشرات الـ useState المستقلة في مكون واحد بدلاً من تجميعها عبر useReducer.",
          fix: "إذا كان لديك 4 حالات أو أكثر تتغير معاً في نفس التوقيت، استبدل useState فوراً بـ useReducer لتوحيد منطق التحويلات."
        }
      ],
      bestPractices: [
        "استخدم useState إذا كانت الحالة بسيطة وقيمتها أولية ولا ترتبط منطقياً بحالات أخرى.",
        "استخدم useReducer عندما تكون الحالة التالية تعتمد على حسابات سابقة متعددة، أو عندما تحتوي الحالة على كائنات ومصفوفات تتفاعل سوياً.",
        "لا تستخدم مكتبة خارجية إلا إذا كنت مضطراً لمشاركة الحالة عبر مسارات (Routes) متباعدة أو مكونات غير متصلة شجرياً."
      ],
      visualInfographic: {
        type: "flowchart",
        title: "مخطط اتخاذ القرار: هل تحتاج مكتبة حالة خارجية؟",
        nodes: [
          { id: "1", label: "أين تُستخدم هذه الحالة؟", shape: "diamond" },
          { id: "2", label: "داخل مكون واحد فقط", shape: "box" },
          { id: "3", label: "بين مكون وأبنائه المباشرين", shape: "box" },
          { id: "4", label: "بين مكونات متباعدة ومسارات مختلفة", shape: "diamond" },
          { id: "5", label: "استخدم useState أو useReducer", shape: "pill", highlight: "green" },
          { id: "6", label: "ارفع الحالة للأب المشترك (Lifting State)", shape: "pill", highlight: "blue" },
          { id: "7", label: "هل هي بيانات خادم (Server Cache)؟", shape: "diamond" },
          { id: "8", label: "استخدم TanStack Query أو RTK Query", shape: "pill", highlight: "purple" },
          { id: "9", label: "استخدم Zustand أو Redux Toolkit", shape: "pill", highlight: "amber" }
        ],
        connections: [
          { from: "1", to: "2", label: "محلية" },
          { from: "1", to: "3", label: "شبه محلية" },
          { from: "1", to: "4", label: "عالمية" },
          { from: "2", to: "5" },
          { from: "3", to: "6" },
          { from: "4", to: "7" },
          { from: "7", to: "8", label: "نعم" },
          { from: "7", to: "9", label: "لا (Client State)" }
        ]
      }
    },
    {
      id: "12-5-d",
      title: "الفصل الجذري بين Client State وServer State",
      englishTitle: "Separating Client State from Server State",
      pronunciation: "سيباريتنج كلاينت ستيت فروم سيرفر ستيت",
      meaning: "التمييز المعماري الصارم بين بيانات الخادم المستعارة وحالة العميل المتزامنة",
      description:
        "تاريخياً في العقد الماضي، كان مطورو React يضعون كل البيانات القادمة من الخادم (مثل قوائم المنتجات، وبيانات المقالات، والمستخدمين) داخل متجر Redux المركزي جنباً إلى جنب مع حالة واجهة المستخدم مثل الثيم، أو حالة القوائم الجانبية، أو محتويات سلة التسوق المحلية. هذا الخلط المعماري تسبب في كوابيس برمجية؛ لأن Server State تختلف جذرياً في طبيعتها عن Client State: بيانات الخادم ليست ملكاً للتطبيق المحلي، بل هي 'لقطة مؤقتة' (Snapshot/Cache) لبيانات تقيم على خادم بعيد قد يغيرها مستخدمون آخرون في نفس اللحظة، وتتطلب آليات دورية لإعادة الجلب (Refetching)، والتحقق من الصلاحية (Invalidation)، والتعامل مع فقدان الاتصال وحالات التحميل والخطأ. بينما Client State هي ملك خالص لتطبيق المتصفح وتتغير تزامناً مع نقرات المستخدم (مثل تبديل الوضع الليلي أو إدخال نص). الحل المعماري القياسي اليوم هو الفصل الجذري: تخصيص مكتبة متخصصة لإدارة حالة الخادم والتخزين المؤقت (مثل TanStack Query أو RTK Query)، وترك مكتبات حالة العميل (مثل Zustand أو Context أو useState) تركز حصراً على تفاعلات الواجهة الصافية.",
      analogy:
        "Client State تشبه وضعية ضبط مقعد سيارتك ودرجة حرارة المكيف؛ أنت وحدك المتحكم بها وتتغير فور لمسك للأزرار وتظل كما هي. أما Server State فتشبه جدول مواعيد إقلاع الطائرات في المطار؛ أنت لا تملك الجدول بل تستعرض شاشة تعرض نسخة منه قد تتأخر أو تُلغى أو تتغير في أي ثانية من قِبل إدارة المطار دون علمك.",
      whyItMatters:
        "الفصل بين الحالتين يقضي على ما يزيد عن 80% من الكود النمطي (Boilerplate) في تطبيقات React؛ حيث تتكفل أدوات إدارة حالة الخادم بمشاكل التخزين المؤقت والمحاولات التلقائية ومؤشرات التحميل، مما يحرر متجر العميل ليصبح خفيفاً ونقياً بنسبة 100%.",
      syntax: `// 1. إدارة Server State بواسطة TanStack Query أو RTK Query
const { data: posts, isLoading } = useGetPostsQuery();

// 2. إدارة Client State بواسطة Zustand أو useState
const isSidebarOpen = useUIStore((state) => state.isSidebarOpen);`,
      simpleExample: `// مثال يعكس الفصل النظيف بين حالة الخادم وحالة العميل في نفس المكون
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

// مكون يعرض قائمة مقالات مع فلتر محلي
export function PostFeed() {
  // حالة العميل المحلية: فلتر الفئة المحددة حالياً في واجهة المتصفح
  const [selectedCategory, setSelectedCategory] = useState('all');

  // حالة الخادم المستقلة: يتم التعامل مع التخزين المؤقت وإعادة الجلب تلقائياً
  const { data: posts = [], isLoading, isError } = useQuery({
    queryKey: ['posts', selectedCategory],
    queryFn: () => fetch(\`/api/posts?category=\${selectedCategory}\`).then((res) => res.json())
  });

  // فحص حالة تحميل الخادم
  if (isLoading) return <div>جارٍ جلب البيانات من الخادم...</div>;
  // فحص أخطاء الاتصال بالخادم
  if (isError) return <div>تعذر الاتصال بالخادم.</div>;

  // إرجاع واجهة تجمع بين تحكم العميل وبيانات الخادم
  return (
    <div>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">الكل</option>
        <option value="tech">تقنية</option>
      </select>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `// تطبيق معماري يفصل تماماً بين متجر حالة العميل (Zustand) ومحرك استعلامات الخادم
import { create } from 'zustand';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// ================= 1. متجر حالة العميل فقط (ZUSTAND) =================
// يحتوي فقط على تفضيلات الواجهة وحالة التفاعل المحلي
export const useFilterStore = create((set) => ({
  searchTerm: '',
  sortBy: 'latest',
  viewMode: 'grid', // 'grid' | 'list'
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSortBy: (sort) => set({ sortBy: sort }),
  toggleViewMode: () => set((s) => ({ viewMode: s.viewMode === 'grid' ? 'list' : 'grid' }))
}));

// ================= 2. استهلاك وتنسيق حالة الخادم مع حالة العميل =================
export function ProductsCatalog() {
  // استدعاء تفضيلات العميل من Zustand
  const { searchTerm, sortBy, viewMode, toggleViewMode } = useFilterStore();
  // مدير الاستعلامات لإبطال التخزين المؤقت
  const queryClient = useQueryClient();

  // جلب بيانات الخادم بناءً على معايير العميل، وإدارتها عبر React Query
  const { data: products, isLoading } = useQuery({
    queryKey: ['products', { searchTerm, sortBy }],
    queryFn: async () => {
      const res = await fetch(\`/api/products?q=\${searchTerm}&sort=\${sortBy}\`);
      return res.json();
    }
  });

  // طفرة لتحديث مخزون منتج على الخادم
  const mutation = useMutation({
    mutationFn: (productId) => fetch(\`/api/products/\${productId}/buy\`, { method: 'POST' }),
    onSuccess: () => {
      // إبطال التخزين المؤقت لجلب البيانات الحديثة تلقائياً من الخادم
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
  });

  return (
    <div className="catalog-wrapper">
      <div className="flex justify-between p-4">
        <button onClick={toggleViewMode} className="btn-toggle">
          نمط العرض: {viewMode === 'grid' ? 'شبكي' : 'قائمة'}
        </button>
      </div>
      {isLoading ? (
        <p>جارٍ التحميل...</p>
      ) : (
        <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex flex-col gap-2'}>
          {products?.map((item) => (
            <div key={item.id} className="p-4 border rounded">
              <h4>{item.name}</h4>
              <button onClick={() => mutation.mutate(item.id)} className="btn-buy">شراء</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`,
      outputExplanation:
        "يوضح المثال المعماري كيف تتكامل حالة العميل (المتحكمة في شكل العرض وكلمات البحث) بسلاسة مع حالة الخادم (المسؤولة عن توفير بيانات المنتجات وتحديثها وإبطال الكاش)، دون أن يتدخل أحدهما في إدارة مسؤوليات الآخر.",
      commonMistakes: [
        {
          mistake: "محاولة كتابة دوال يدوية في Redux أو Zustand لإدارة loading وerror وcaching لكل طلب API فردي.",
          fix: "الاعتماد على TanStack Query أو RTK Query؛ فهما مخصصان بالكامل لهذا الغرض ويوفران مئات الأسطر النمطية."
        },
        {
          mistake: "تخزين بيانات الخادم في متجر العميل وتحديثها يدوياً دون مزامنة مع أي تعديلات قد تحدث على السيرفر.",
          fix: "استخدم آلية Query Invalidation أو Mutations مع التحديث التفاؤلي لضمان تزامن حالة التطبيق مع الحقيقة المطلقة على الخادم."
        }
      ],
      bestPractices: [
        "ضع في متجر العميل (Zustand/Redux) فقط البيانات التي تنشأ في المتصفح وتنتهي فيه.",
        "اترك لـ TanStack Query أو RTK Query إدارة كل ما يتم جلبه بواسطة fetch أو axios مع الخوادم السحابية.",
        "لا تكرر بيانات الخادم داخل حالة العميل مطلقاً لتفادي تباين البيانات وتشتت مصدر الحقيقة."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "الفصل المعماري: Client State مقابل Server State",
        items: [
          {
            title: "حالة العميل (Client State)",
            points: [
              "المصدر: متصفح المستخدم ونشاطه التفاعلي",
              "الملكية: ملك كامل للتطبيق المحلي في المتصفح",
              "التزامن: متزامن وفوري بنسبة 100% مع نقرات المستخدم",
              "الأمثلة: الوضع المظلم، القوائم الجانبية، خطوات الـ Wizard، حقول النماذج",
              "الأداة المثلى: useState, useReducer, Zustand, Context"
            ]
          },
          {
            title: "حالة الخادم (Server State)",
            points: [
              "المصدر: قواعد البيانات والواجهات البرمجية البعيدة (APIs)",
              "الملكية: ملك للخادم، والعميل يملك فقط نسخة كاش مؤقتة",
              "التزامن: غير متزامن ويحتمل التأخير وتغير البيانات من مستخدمين آخرين",
              "الأمثلة: قائمة المنتجات، الملفات الشخصية، الإشعارات، التعليقات",
              "الأداة المثلى: TanStack Query (React Query), RTK Query, SWR"
            ]
          }
        ]
      }
    },
    {
      id: "12-5-e",
      title: "تجنب تخزين البيانات المكررة والمشتقة",
      englishTitle: "Avoiding Redundant and Derived State",
      pronunciation: "أفويدنج ريدندانت آند ديرايفد ستيت",
      meaning: "حساب القيم المستنبطة فورياً بدلاً من حفظها في الحالة لتفادي التناقض",
      description:
        "من القواعد الذهبية الأزلية في هندسة برمجيات React: 'لا تضع في الحالة أي قيمة يمكن حسابها اشتقاقياً من حالات موجودة بالفعل' (Don't put derived data in state). يقع المطورون كثيراً في خطأ تخزين قائمة العناصر (items) وتخزين عدد العناصر (count) وتخزين إجمالي الأسعار (totalPrice) وتخزين العناصر المفلترة (filteredItems) كأربع حالات منفصلة في useState أو في المتجر. هذا التصميم السيئ يؤدي حتماً إلى ما يُعرف بـ 'تزامن الحالات الفاسد' (Out-of-sync Bugs)؛ ففي حال تم حذف عنصر أو تعديل سعره ونُسي تحديث الحالات الثلاث الأخرى، تظهر الواجهة بأرقام متناقضة تماماً. النهج الصحيح هو تخزين 'الحد الأدنى الضروري من الحقيقة' (Minimal State of Truth)، وحساب أي قيم تابعة بشكل ديناميكي أثناء التصيير، مع استخدام useMemo أو محددات Reselect memoized selectors لتفادي كلفة إعادة الحساب في العمليات الحسابية الثقيلة.",
      analogy:
        "تخزين البيانات المشتقة في الحالة يشبه أن تسأل شخصاً عن تاريخ ميلاده، ثم تسأله في حقل منفصل عن عمره بالسنوات؛ إذا تغيرت السنة ولم يقم بتعديل حقل العمر يدوياً، سيتناقض عمره المكتوب مع تاريخ ميلاده الحقيقي. الحل البديل هو فقط تخزين تاريخ الميلاد وحساب العمر تلقائياً في كل مرة تحتاج معرفته.",
      whyItMatters:
        "القضاء على البيانات المكررة يلغي فئة كاملة من أعقد الأخطاء المنطقية وتناقض واجهات المستخدم، ويقلل عدد عمليات dispatch والـ re-renders المرتبطة بها، ويجعل متجر الحالة بسيطاً وقابلاً للفحص والصيانة بسهولة.",
      syntax: `// خطأ فادح: تخزين بيانات مشتقة
const [items, setItems] = useState([]);
const [totalPrice, setTotalPrice] = useState(0); // مكرر وخطر

// الصواب المعماري: اشتقاق فوري أثناء الريندر
const [items, setItems] = useState([]);
const totalPrice = useMemo(() => {
  return items.reduce((sum, item) => sum + item.price, 0);
}, [items]);`,
      simpleExample: `// مثال على تصفية قائمة المنتجات اشتقاقياً دون حالة ثانية
import React, { useState } from 'react';

export function SearchableUserList({ users }) {
  // الحالة الوحيدة الحقيقية: نص البحث المدخل
  const [searchTerm, setSearchTerm] = useState('');

  // حساب القائمة المفلترة فورياً أثناء التصيير دون الحاجة لـ useState ثانٍ
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // إرجاع واجهة دقيقة ومتزامنة بنسبة 100% دائماً
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث عن مستخدم..."
        className="input-search"
      />
      <p className="text-sm">النتائج المطابقة: {filteredUsers.length}</p>
      <ul>
        {filteredUsers.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}`,
      advancedExample: `// تطبيق محددات Reselect الميموية داخل Redux Toolkit لاشتقاق إحصائيات معقدة
import { createSlice, configureStore, createSelector } from '@reduxjs/toolkit';

// شريحة إدارة المهام
const tasksSlice = createSlice({
  name: 'tasks',
  // نخزن فقط الحد الأدنى من الحقيقة: مصفوفة المهام وفلتر العرض
  initialState: {
    items: [
      { id: 1, title: 'تصميم الواجهة', completed: true, points: 5 },
      { id: 2, title: 'إعداد الخادم', completed: false, points: 8 },
      { id: 3, title: 'كتابة الاختبارات', completed: false, points: 3 }
    ],
    filter: 'all' // 'all' | 'completed' | 'active'
  },
  reducers: {
    toggleTask: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { toggleTask, setFilter } = tasksSlice.actions;

// =================== محددات مشتقة بمذكرة ذكية (RESELECT) ===================
// 1. استخراج الحالات الأساسية الصافية
const selectTasksItems = (state) => state.tasks.items;
const selectTasksFilter = (state) => state.tasks.filter;

// 2. اشتقاق المهام المفلترة تلقائياً - لن يعاد الحساب إلا إذا تغيرت المهام أو الفلتر
export const selectVisibleTasks = createSelector(
  [selectTasksItems, selectTasksFilter],
  (items, filter) => {
    console.log("Recalculating visible tasks...");
    switch (filter) {
      case 'completed':
        return items.filter((t) => t.completed);
      case 'active':
        return items.filter((t) => !t.completed);
      default:
        return items;
    }
  }
);

// 3. اشتقاق الإحصائيات العامة من المهام الأساسية
export const selectTaskStats = createSelector(
  [selectTasksItems],
  (items) => {
    console.log("Calculating task stats...");
    const total = items.length;
    const completedCount = items.filter((t) => t.completed).length;
    const totalPoints = items.reduce((sum, t) => sum + t.points, 0);
    const completedPoints = items
      .filter((t) => t.completed)
      .reduce((sum, t) => sum + t.points, 0);

    return {
      total,
      completedCount,
      progressPercentage: total === 0 ? 0 : Math.round((completedCount / total) * 100),
      totalPoints,
      completedPoints
    };
  }
);`,
      outputExplanation:
        "يوضح المثال استخدام createSelector لبناء خط إنتاج اشتقاقي ذكي وميموي. لا يتم تخزين أي من (progressPercentage, totalPoints, completedCount) في المتجر، بل تُحسب عند الطلب وتُخزن نتائجها مؤقتاً طالما لم تتغير مصفوفة المهام، ما يضمن استحالة حدوث أي تضارب حسابي.",
      commonMistakes: [
        {
          mistake: "استخدام useEffect لمراقبة حالة معينة وتحديث حالة ثانية معتمدة عليها (مثل: useEffect(() => setTotal(items.length), [items])).",
          fix: "إلغاء الـ useEffect والـ useState الإضافي تماماً وحساب القيمة كمتغير مباشر const total = items.length أثناء الريندر."
        },
        {
          mistake: "نسخ خصائص الـ Props الواردة وتخزينها في useState محلي دون الحاجة لتعديلها.",
          fix: "استهلك الخاصية مباشرة من الـ Props، وتجنب حفظ نسخة محلية إلا إذا كنت تصمم حقل إدخال مسودة قابلاً للإلغاء والتراجع."
        }
      ],
      bestPractices: [
        "احرص دائماً على أن تكون شريحة الحالة (State) خالية تماماً من أي قيم حسابية ثانوية.",
        "استخدم useMemo في المكونات أو createSelector في Redux عندما تكون عملية الاشتقاق مكلفة حسابياً وتتضمن مصفوفات ضخمة.",
        "تذكر: تكرار الحسابات الخفيفة في الذاكرة أثناء الريندر أسرع بآلاف المرات من كلفة تصحيح أخطاء عدم تزامن الحالات المتعددة."
      ],
      visualInfographic: {
        type: "flowchart",
        title: "هندسة الحقيقة الواحدة: كيف تشتق البيانات بذكاء؟",
        nodes: [
          { id: "1", label: "الحد الأدنى من الحقيقة (Single Source of Truth):\n- قائمة المهام items\n- قيمة الفلتر filter", shape: "box", highlight: "blue" },
          { id: "2", label: "محرك الاشتقاق الحسابي (Derived Logic):\n- useMemo أو createSelector", shape: "diamond", highlight: "purple" },
          { id: "3", label: "المهام المفلترة\n(Visible Tasks)", shape: "pill", highlight: "green" },
          { id: "4", label: "نسبة الإنجاز %\n(Progress Rate)", shape: "pill", highlight: "green" },
          { id: "5", label: "إجمالي النقاط\n(Total Points)", shape: "pill", highlight: "green" }
        ],
        connections: [
          { from: "1", to: "2", label: "تمرير كمدخلات" },
          { from: "2", to: "3", label: "اشتقاق ميموي" },
          { from: "2", to: "4", label: "اشتقاق ميموي" },
          { from: "2", to: "5", label: "اشتقاق ميموي" }
        ]
      }
    },
    {
      id: "12-5-f",
      title: "اختيار الحل المعماري حسب حجم المشروع",
      englishTitle: "Selecting State Architecture by Project Scale",
      pronunciation: "سيليكتنج ستيت آركيتكتشر باي بروجكت سكيل",
      meaning: "خارطة طريق اتخاذ القرار الاستراتيجي لإدارة الحالة وفق تعقيد النظام",
      description:
        "لا توجد أداة واحدة لإدارة الحالة تعتبر 'الأفضل' في المطلق؛ بل الأداة الفضلى هي التي تحقق أعلى توازن بين متطلبات المشروع، وحجم الفريق الهندسي، وسرعة التطوير، وتكلفة الصيانة على المدى الطويل. في المشاريع البسيطة والتطبيقات الصغيرة (مثل مواقع الهبوط، والمدونات، وتطبيقات المهام الفردية)، يكفي تماماً استخدام خطافات React المدمجة (useState, useReducer, Context API) دون أي مكتبات إضافية. في المشاريع المتوسطة إلى الكبيرة ذات التفاعلات الغنية (مثل المتاجر الإلكترونية، وتطبيقات الـ SaaS، ولوحات تحكم التحليلات)، تبرز توليفة Zustand لحالة العميل التفاعلية مع TanStack Query لحالة الخادم كأقوى وأرشق معيار معاصر يوفر أقصى إنتاجية بأقل كود ممكن. أما في المشاريع المؤسسية الضخمة (Enterprise Apps) التي يشارك فيها عشرات المهندسين عبر فرق متعددة وتتطلب سياسات صارمة لتدقيق العمليات، وإعادة تشغيل الأحداث، والتحكم بالوصول، فإن Redux Toolkit (مع RTK Query) تظل المعيار الصناعي الأكثر استقراراً وقابلية للتنبؤ والتوسع.",
      analogy:
        "اختيار بنية إدارة الحالة يشبه اختيار وسيلة النقل: للمسافات القصيرة داخل الحي تختار دراجة خفيفة (useState/Context)، وللتنقل اليومي السريع بين المدن تختار سيارة سيدان حديثة وعملية (Zustand + React Query)، أما لنقل حمولات تجارية ضخمة لشركة عالمية فتحتاج أسطول شاحنات مجهزة بنظام تتبع عبر الأقمار الصناعية (Redux Toolkit + RTK Query).",
      whyItMatters:
        "اتخاذ قرار معماري غير متوازن في بداية المشروع يكلف المؤسسات شهوراً من العمل الضائع؛ فالبدء بأداة معقدة جداً يبطئ إطلاق المنتج الأولي، بينما البدء بأدوات عشوائية في نظام ضخم يؤدي إلى تشابك كودي مستحيل الصيانة يتطلب إعادة بناء كاملة لاحقاً.",
      syntax: `// مصفوفة الاختيار المعماري حسب النطاق:
// 1. تطبيق صغير:
// React State (useState/useReducer) + Context API

// 2. تطبيق متوسط إلى كبير (النمط الحديث الرائج):
// Zustand (Client State) + TanStack Query (Server State)

// 3. تطبيق مؤسسي فائق التعقيد (Enterprise System):
// Redux Toolkit + RTK Query + Reselect`,
      simpleExample: `// استراتيجية النمط الحديث: متجر حالة عميل مصغر متكامل مع كاش الخادم
import { create } from 'zustand';

// متجر بسيط لإدارة تفضيلات الجلسة والواجهة لتطبيق متوسط الحجم
export const useAppSettingsStore = create((set) => ({
  theme: 'dark',
  locale: 'ar',
  notificationsCount: 0,
  setTheme: (theme) => set({ theme }),
  setLocale: (locale) => set({ locale }),
  incrementNotifications: () => set((s) => ({ notificationsCount: s.notificationsCount + 1 }))
}));

// يُستهلك هذا المتجر بكل سلاسة وبدون أي Provider في أي مكان بالتطبيق
export function ThemeToggleButton() {
  const { theme, setTheme } = useAppSettingsStore();
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="btn-theme"
    >
      الوضع الحالي: {theme === 'dark' ? 'ليلي' : 'نهاري'}
    </button>
  );
}`,
      advancedExample: `// دليل اتخاذ القرار البرمجي: وحدة تحقق معمارية تحاكي مطابقة النظام مع الأداة المناسبة
export class ArchitectureAdvisor {
  // تحليل متطلبات المشروع وإرجاع التوصية المعمارية الدقيقة
  static recommendStack(requirements) {
    const {
      teamSize,
      screensCount,
      hasComplexServerCache,
      needsTimeTravelDebugging,
      bundleBudgetKb
    } = requirements;

    // مصفوفة التوصيات
    const recommendation = {
      primaryClientState: '',
      serverStateTool: '',
      rationale: ''
    };

    // 1. فحص الشروط المؤسسية المعقدة
    if (teamSize > 15 || needsTimeTravelDebugging) {
      recommendation.primaryClientState = 'Redux Toolkit';
      recommendation.serverStateTool = 'RTK Query';
      recommendation.rationale = 'فريق كبير يحتاج صرامة معمارية، وتوحيد قياسي، وأدوات تتبع تاريخية متقدمة.';
      return recommendation;
    }

    // 2. فحص التطبيقات الصغيرة والخفيفة
    if (screensCount < 5 && bundleBudgetKb < 50) {
      recommendation.primaryClientState = 'React Context & useReducer';
      recommendation.serverStateTool = 'Native Fetch with Custom Hooks';
      recommendation.rationale = 'تطبيق خفيف ومحدود النطاق، لا داعي لتثبيت أي مكتبات خارجية لتوفير الحجم.';
      return recommendation;
    }

    // 3. التوصية القياسية لمعظم المشاريع الحديثة (Modern Best Practice)
    recommendation.primaryClientState = 'Zustand';
    recommendation.serverStateTool = hasComplexServerCache ? 'TanStack Query (React Query)' : 'Native Fetch';
    recommendation.rationale = 'النمط الحديث الأمثل: رشاقة تامة بحجم خفيف جداً، وفصل جذري بين العميل والخادم، وسرعة تطوير فائقة.';
    return recommendation;
  }
}

// اختبار عملي للمستشار المعماري
const projectAnalysis = ArchitectureAdvisor.recommendStack({
  teamSize: 4,
  screensCount: 25,
  hasComplexServerCache: true,
  needsTimeTravelDebugging: false,
  bundleBudgetKb: 150
});

console.log("التوصية المعمارية:", projectAnalysis);
// النتيجة: Zustand + TanStack Query`,
      outputExplanation:
        "يوضح المثال كوداً استشارياً يبرز كيفية تقييم المعايير التقنية (حجم الفريق، الميزانية، عمق الكاش، متطلبات التتبع) للوصول إلى التوليفة المعمارية الأمثل، مؤكداً أن معيار الصناعة السائد للمشاريع الحديثة هو ثنائية (Zustand + TanStack Query).",
      commonMistakes: [
        {
          mistake: "تطبيق نفس الحل على كل مشروع بدون استثناء لمجرد التعود عليه في المشروع السابق.",
          fix: "إجراء تقييم معماري موضوعي لكل مشروع جديد بناءً على متطلباته ونطاقه الفعلي وحجم فريقه."
        },
        {
          mistake: "الاعتقاد بأن الانتقال بين المكتبات مستحيل لاحقاً إذا تغير حجم المشروع.",
          fix: "إذا تم عزل منطق الحالة في Selectors وCustom Hooks نظيفة، فإن الترحيل بين Zustand وRedux أو العكس يكون سلساً للغاية دون الحاجة لإعادة كتابة مكونات العرض."
        }
      ],
      bestPractices: [
        "ابدأ دائماً بأبسط حل يلبي متطلباتك الحالية دون تخمين مفرط للمستقبل (YAGNI principle).",
        "احرص على فصل منطق الواجهة (UI) عن كود إدارة الحالة من خلال خطافات مخصصة (Custom Hooks) لتسهيل استبدال محرك الحالة عند الحاجة.",
        "اجعل توليفة (Zustand + TanStack Query) هي خيارك الافتراضي الأول لمعظم تطبيقات React المعاصرة حتى يثبت العكس."
      ],
      visualInfographic: {
        type: "cards-grid",
        title: "دليل اختيار بنية إدارة الحالة حسب تصنيف المشاريع",
        items: [
          {
            title: "المستوى 1: المشاريع البسيطة (Small)",
            points: [
              "النطاق: 1-5 شاشات، مواقع شخصية، أدوات فردية",
              "الحل الموصى به: useState + useReducer + Context API",
              "المزايا: صفر حزم إضافية، سرعة إطلاق فورية، بساطة مطلقة",
              "حالة الخادم: Custom Hooks مع Fetch بسيط"
            ]
          },
          {
            title: "المستوى 2: المشاريع المتوسطة والحديثة (Modern SaaS)",
            points: [
              "النطاق: منصات SaaS، متاجر، لوحات تحكم ديناميكية",
              "الحل الموصى به: Zustand (Client) + TanStack Query (Server)",
              "المزايا: أداء اشتراكي فائق، كاش متطور تلقائي، حجم ضئيل للغاية",
              "التوازن: أسرع معدل إنتاجية للفريق الهندسي"
            ]
          },
          {
            title: "المستوى 3: الأنظمة المؤسسية الضخمة (Enterprise)",
            points: [
              "النطاق: تطبيقات بنكية، منصات عملاقة، فرق عمل متعددة",
              "الحل الموصى به: Redux Toolkit + RTK Query + Reselect",
              "المزايا: نمط هندسي صارم، سجل تدقيق أحداث كامل، قيود أمان ومراجعة",
              "الملاءمة: مثالي للمشاريع التي تتطلب قابلية تنبؤ وتحكم دقيق"
            ]
          }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q12-5-1",
      question: "ما هو السبب الجوهري الذي يجعل React Context غير مناسب للحالات سريعة التغير مقارنة بـ Redux Toolkit أو Zustand؟",
      options: [
        "لأن Context غير متوافق مع نظام الخطافات في React",
        "لأن تحديث المزود (Provider) يؤدي لإعادة تصيير جميع المكونات المستهلكة دون اشتراك دقيق للحقول",
        "لأن Context يتطلب بالضرورة تثبيت مكتبات خارجية ثقيلة",
        "لأن Context لا يدعم تخزين الكائنات والمصفوفات"
      ],
      correctAnswer: 1,
      explanation:
        "المشكلة الرئيسية في Context هي غياب نظام الاشتراكات الدقيق (Fine-grained subscriptions)؛ فعندما تتغير أي خاصية داخل كائن الـ Provider، يُعاد تصيير جميع المكونات التي تستدعي useContext(MyContext) حتى لو لم تكن مهتمة إلا بخاصية لم تتغير إطلاقاً، بخلاف RTK وZustand اللتين تستخدمان Selectors دقيقة."
    },
    {
      id: "q12-5-2",
      question: "ما هو المبدأ المعماري الصحيح للتعامل مع البيانات المشتقة (Derived State) في React؟",
      options: [
        "تخزين كل قيمة مشتقة في useState منفصل وتحديثها عبر useEffect مستمر",
        "عدم تخزين أي بيانات مشتقة في الحالة إطلاقاً وحسابها فورياً أثناء الريندر مع استخدام useMemo عند الحاجة",
        "إرسال طلب إلى الخادم لحساب أي عملية رياضية أو تصفية مصفوفة",
        "حفظ البيانات المشتقة في LocalStorage فقط"
      ],
      correctAnswer: 1,
      explanation:
        "تخزين البيانات المشتقة في الحالة يؤدي حتماً إلى عدم التزامن (Out-of-sync bugs). القاعدة المعمارية الذهبية تنص على تخزين الحد الأدنى من الحقيقة (Minimal State) وحساب أي قيمة مشتقة أثناء التصيير بشكل فوري أو ميموي بواسطة useMemo أو createSelector."
    },
    {
      id: "q12-5-3",
      question: "وفقاً لأفضل الممارسات المعمارية الحديثة، كيف ينبغي تقسيم إدارة الحالة في تطبيقات React؟",
      options: [
        "وضع جميع بيانات الخادم والواجهة معاً في متجر Redux مركزي واحد ضخم",
        "الفصل الجذري: إدارة حالة الخادم والكاش بأداة متخصصة (مثل TanStack Query أو RTK Query) وترك حالة العميل لـ Zustand أو useState",
        "الاعتماد على LocalStorage كبديل كامل لجميع مكتبات إدارة الحالة",
        "استخدام useReducer واحد فقط لكل شاشة مهما كان تعقيدها"
      ],
      correctAnswer: 1,
      explanation:
        "الفصل المعماري الصارم بين حالة العميل (Client State) وحالة الخادم (Server State) هو المعيار السائد؛ حيث تتكفل أدوات مثل TanStack Query بالكاش وإعادة الجلب وحالات الخطأ، بينما تدير Zustand أو useState تفاعلات واجهة المستخدم النقية."
    }
  ],
  exercise: {
    title: "تمرين معماري: بناء محول حالة مشتقة ومقارنة أنماط التحديث",
    instruction:
      "قم ببناء مكون سلة مشتريات تفاعلي يطبق مبدأ 'الحد الأدنى من الحقيقة' (Minimal State). قم بتخزين قائمة العناصر فقط، واشتق كلاً من: إجمالي السعر، وعدد العناصر الفريدة، وقيمة الخصم تلقائياً دون أي useState مكرر، مع إتاحة فلترة العناصر بالبحث النصي دون إنشاء حالة قائمة مفلترة ثانية.",
    starterCode: `import React, { useState, useMemo } from 'react';

export function SmartCartExercise() {
  // الحد الأدنى من الحقيقة: قائمة المنتجات ومصطلح البحث
  const [items, setItems] = useState([
    { id: 1, name: 'سماعات بلوتوث', price: 150, qty: 1 },
    { id: 2, name: 'لوحة مفاتيح ميكانيكية', price: 300, qty: 2 }
  ]);
  const [search, setSearch] = useState('');

  // TODO: قم باشتقاق القيم التالية دون useState:
  // 1. filteredItems: العناصر المطابقة لكلمة search
  // 2. totalQty: إجمالي عدد القطع
  // 3. totalPrice: إجمالي السعر قبل الخصم
  // 4. discountedTotal: إجمالي السعر بعد تطبيق خصم 10% إذا تجاوز الإجمالي 500

  return (
    <div className="p-4 border rounded-xl max-w-md mx-auto">
      <h3 className="font-bold text-lg mb-2">سلة المشتريات الذكية</h3>
      {/* واجهة الإدخال والعرض */}
    </div>
  );
}`,
    hints: [
      "استخدم useMemo لاشتقاق القيم الحسابية بناءً على مصفوفة items.",
      "لحساب filteredItems: استخدم items.filter مع التحقق من مطابقة search.toLowerCase().",
      "لحساب totalQty: استخدم items.reduce((sum, item) => sum + item.qty, 0).",
      "لحساب totalPrice: اضرب price في qty داخل الـ reduce."
    ],
    solutionCode: `import React, { useState, useMemo } from 'react';

export function SmartCartExercise() {
  // 1. الحد الأدنى الصافي من الحقيقة
  const [items, setItems] = useState([
    { id: 1, name: 'سماعات بلوتوث', price: 150, qty: 1 },
    { id: 2, name: 'لوحة مفاتيح ميكانيكية', price: 300, qty: 2 }
  ]);
  const [search, setSearch] = useState('');

  // 2. اشتقاق العناصر المفلترة فورياً أثناء التصيير
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  // 3. اشتقاق الإحصائيات الحسابية بدون أي useState إضافي
  const { totalQty, totalPrice, discountedTotal, hasDiscount } = useMemo(() => {
    // حساب عدد القطع الكلي
    const qty = items.reduce((sum, i) => sum + i.qty, 0);
    // حساب السعر الإجمالي
    const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    // فحص استحقاق الخصم
    const eligible = total >= 500;
    // تطبيق الخصم
    const finalPrice = eligible ? total * 0.9 : total;

    return {
      totalQty: qty,
      totalPrice: total,
      discountedTotal: finalPrice,
      hasDiscount: eligible
    };
  }, [items]);

  // دوال تعديل الكمية
  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <div className="p-4 border rounded-xl max-w-md mx-auto bg-slate-900 text-white shadow-xl">
      <h3 className="font-bold text-lg mb-4 text-emerald-400">سلة المشتريات المعمارية الذكية</h3>

      {/* حقل البحث المشتق */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="تصفية المنتجات..."
        className="w-full p-2 mb-4 bg-slate-800 border border-slate-700 rounded text-sm focus:outline-none focus:border-emerald-500"
      />

      {/* قائمة المنتجات */}
      <div className="space-y-3 mb-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
            <div>
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs text-slate-400">{item.price} ر.س للقطعة</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, -1)}
                className="w-6 h-6 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center font-bold text-sm"
              >
                -
              </button>
              <span className="text-sm font-semibold w-6 text-center">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, 1)}
                className="w-6 h-6 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center font-bold text-sm"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* الإحصائيات المشتقة بدون أي خطر لعدم التزامن */}
      <div className="p-3 bg-slate-800/90 rounded-lg border border-slate-700 space-y-1.5 text-sm">
        <div className="flex justify-between text-slate-300">
          <span>إجمالي القطع:</span>
          <span className="font-bold text-white">{totalQty} قطعة</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>السعر قبل الخصم:</span>
          <span className="font-bold text-white">{totalPrice} ر.س</span>
        </div>
        {hasDiscount && (
          <div className="flex justify-between text-emerald-400 text-xs font-semibold">
            <span>تم تطبيق خصم المشتريات الكبرى (10%):</span>
            <span>-{(totalPrice * 0.1).toFixed(0)} ر.س</span>
          </div>
        )}
        <div className="border-t border-slate-700 pt-2 mt-2 flex justify-between font-bold text-base text-emerald-400">
          <span>المبلغ النهائي المستحق:</span>
          <span>{discountedTotal.toFixed(0)} ر.س</span>
        </div>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "مخطط المقارنة الشاملة لحلول إدارة الحالة في React",
    description: "نظرة شمولية توضح الفوارق الحاسمة ومواضع الاستخدام المثلى لكل حل معماري.",
    elements: [
      {
        title: "React Context API",
        subtitle: "حقن التبعيات وتفادي Props Drilling",
        badge: "مدمج برياكت",
        color: "blue",
        details: [
          "الأفضل لـ: الثيم، اللغة، بيانات الجلسة البسيطة",
          "معدل التغيير: بطيء إلى نادر جداً",
          "نظام الاشتراكات: شامل للمزود بالكامل (Coarse)",
          "حجم الحزمة: 0 كيلوبايت"
        ]
      },
      {
        title: "Zustand",
        subtitle: "إدارة حالة العميل الرشيقة والحديثة",
        badge: "الخيار الأحدث",
        color: "emerald",
        details: [
          "الأفضل لـ: تطبيقات SaaS، المتاجر، الحالات التفاعلية",
          "معدل التغيير: فوري وعالي التردد",
          "نظام الاشتراكات: دقيق جداً عبر Selectors (Fine-grained)",
          "حجم الحزمة: ~1.2 كيلوبايت"
        ]
      },
      {
        title: "Redux Toolkit",
        subtitle: "إدارة الحالة الصارمة للأنظمة المؤسسية",
        badge: "معيار الشركات",
        color: "purple",
        details: [
          "الأفضل لـ: الأنظمة المالية، الفرق الكبيرة، تدقيق العمليات",
          "معدل التغيير: متوسط إلى مرتفع مع تتبع تاريخي",
          "نظام الاشتراكات: دقيق عبر Reselect ومخزن أحادي",
          "حجم الحزمة: ~11 كيلوبايت مع RTK"
        ]
      },
      {
        title: "TanStack Query / RTK Query",
        subtitle: "إدارة وتخزين حالة الخادم المؤقتة",
        badge: "حالة الخادم فقط",
        color: "amber",
        details: [
          "الأفضل لـ: جلب البيانات، التخزين المؤقت، التحديث التفاؤلي",
          "معدل التغيير: متزامن مع الخادم عبر الشبكة",
          "نظام الاشتراكات: مبني على مفاتيح الكاش (Query Keys)",
          "القضاء على الكود: يلغي 80% من كود الـ Boilerplate"
        ]
      }
    ]
  }
};
