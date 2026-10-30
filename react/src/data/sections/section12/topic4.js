// src/data/sections/section12/topic4.js
// القسم 12: إدارة الحالة المتقدمة - الموضوع 4: Zustand

export const topic4 = {
  id: "12.4",
  title: "Zustand",
  description: "المكتبة الأسرع والأكثر شعبية لإدارة الحالة المشتركة في React: فلسفة Zustand وبساطتها، إنشاء المخازن بدون Provider عبر دالة create، القراءة المعزولة بالمحددات (Selectors)، تحديث الحالة بالـ Actions، تقسيم المتجر لشرائح بنمط Slice Pattern، الحفظ المستمر بـ persist middleware، الربط مع DevTools، واستراتيجيات تقليل إعادة التصيير إلى الحد الأدنى.",
  subtopics: [
    {
      id: "12.4.a",
      title: "مقدمة إلى Zustand",
      englishTerm: "Introduction to Zustand (مُقَدِّمَةٌ إِلَى زُوسْتَانْد: خفة الحركة والبساطة المطلقة)",
      description: "مكتبة Zustand (وتعني بالألمانية 'الحالة') هي مكتبة إدارة حالة حديثة وخفيفة الوزن للغاية (أقل من 1 كيلوبايت) أحدثت ثورة في مجتمع React. تخلصت تماماً من تعقيدات Redux القديمة: لا تحتاج إلى تغليف التطبيق بموفر `<Provider>`، ولا تحتاج إلى كتابة Types أو Dispatchers منفصلة، وتعمل كخطاف React طبيعي وبديهي يعتمد على مبدأ 'أبسط شيء ممكن يحقق الغرض' مع أداء فائق وتوافق كامل مع ميزات React 18 و 19.",
      analogy: "إذا كان Redux مثل السفر في رحلة طيران دولية تتطلب إصدار جواز سفر وتأشيرات وتفتيش أمني صارم؛ فإن Zustand هو مثل المشي في حديقة عامة مفتوحة الأبواب: تدخل مباشرة وتستمتع بوقتك دون أي إجراءات روتينية خانقة.",
      whyItMatters: "هي المكتبة الأسرع نمواً في مجتمع جافاسكريبت والبديل الأول الذي تلجأ إليه الشركات الناشئة وكبرى منصات التقنية لتقليل تعقيد الكود وسرعة التطوير.",
      syntax: "npm install zustand\nimport { create } from 'zustand';",
      simpleExample: `// مثال مصغر يوضح بساطة وسرعة Zustand
import { create } from 'zustand';

// 1. إنشاء المتجر مباشرة بسطرين بدون أي Provider!
export const useCounterStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

// 2. استخدام المتجر في أي مكون وكأنه خطاف عادي:
import React from 'react';

function CounterView() {
  const count = useCounterStore((state) => state.count);
  const inc = useCounterStore((state) => state.inc);

  return <button onClick={inc}>العداد: {count}</button>;
}`,
      advancedExample: `// مقارنة حجم وتعقيد الكود بين Redux Toolkit و Zustand
// في Zustand: المتجر، الحالة، والإجراءات معاً في ملف واحد من 10 أسطر:
import { create } from 'zustand';

export const useUserSessionStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  
  // إجراء تسجيل الدخول
  login: (userData) => set({ user: userData, isAuthenticated: true }),
  
  // إجراء تسجيل الخروج
  logout: () => set({ user: null, isAuthenticated: false }),
  
  // إمكانية قراءة الحالة الحالية داخل الإجراء عبر دالة get()
  getUserRole: () => get().user?.role || 'guest',
}));

// في أي مكان بالتطبيق (حتى خارج مكونات React وفي دوال عادية!):
// useUserSessionStore.getState().login({ name: 'سارة', role: 'admin' });`,
      output: "إدارة حالة في غاية الرشاقة والسرعة بدون أي كود زائد وبأداء يضاهي أسرع المحركات العالمية.",
      commonMistakes: [
        {
          mistake: "البحث عن مكون <Provider> لتغليف التطبيق به كما في Redux.",
          fix: "تذكر أن Zustand لا تحتاج لأي Provider على الإطلاق؛ استورد الخطاف واستخدمه مباشرة في أي ملف.",
          explanation: "مخازن Zustand تعيش خارج شجرة مكونات React ككائنات مستقلة في الذاكرة."
        }
      ],
      bestPractices: [
        "استخدم Zustand كخيارك الافتراضي الأول لإدارة Shared Client State في كافة المشاريع الجديدة.",
        "استغل إمكانية استدعاء useStore.getState() لقراءة وتعديل الحالة من خارج مكونات React (مثل ملفات الخدمات أو معترضات Axios)."
      ],
      infographic: {
        title: "لماذا يحب المطورون مكتبة Zustand؟",
        elements: [
          { label: "حجم خفيف للغاية", role: "أقل من 1KB وتأثيرها على سرعة التنزيل شبه منعدم", color: "emerald" },
          { label: "بدون Provider", role: "تعمل بدون تغليف الشجرة وبدون أخطاء Context المفقود", color: "blue" },
          { label: "Hooks-First", role: "المتجر هو خطاف React طبيعي وبديهي 100%", color: "purple" },
          { label: "كود فائق النقاء", role: "إلغاء أطنان الكود المكرر والملل القديم", color: "amber" }
        ]
      }
    },
    {
      id: "12.4.b",
      title: "إنشاء Store",
      englishTerm: "Creating Stores with create() (إِنْشَاءُ المَخْزَنِ: تعريف الحالة والدوال)",
      description: "يتم إنشاء متجر Zustand باستخدام الدالة الأساسية `create()` المستوردة من `zustand`. تستقبل الدالة دالة رد اتصال (Callback) توفر معاملين أساسيين: `set` (لتحديث وتعديل أجزاء من الحالة)، و `get` (لقراءة الحالة الحالية داخل الإجراءات). يعيد الاستدعاء خطافاً مخصصاً (Custom Hook) يبدأ اسمه عادةً بـ `use...Store` يجمع الحالة الابتدائية والدوال الإجرائية في كائن واحد متجانس.",
      analogy: "مثل فتح حساب توفير في البنك الرقمي الذكي عبر هاتفك: تفتح التطبيق، تضغط زر 'إنشاء حساب'، فيعطيك رقم الحساب والبطاقة الرقمية في ثوانٍ معدودة وتبدأ في الإيداع والتحويل فوراً دون توقيع استمارات ورقية.",
      whyItMatters: "بساطة الإنشاء تجعل المطور يركز على منطق التطبيق الحقيقي بدلاً من إضاعة الوقت في ضبط إعدادات ومحددات معقدة.",
      syntax: "export const useStore = create((set, get) => ({\n  data: initialValue,\n  updateData: (val) => set({ data: val })\n}));",
      simpleExample: `import { create } from 'zustand';

// إنشاء متجر لإدارة السمة اللونية للتطبيق
export const useThemeStore = create((set) => ({
  // الحالة
  isDarkMode: true,
  // الإجراء لتغيير الحالة (set تدمج التعديل تلقائياً)
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));`,
      advancedExample: `import { create } from 'zustand';

// متجر متكامل لإدارة مشغل الموسيقى مع استخدام set و get
export const useAudioPlayerStore = create((set, get) => ({
  track: null,
  isPlaying: false,
  volume: 80,

  // تشغيل مقطع صوتي جديد
  playTrack: (newTrack) => {
    set({ track: newTrack, isPlaying: true });
  },

  // تبديل حالة التشغيل بالاعتماد على الحالة الحالية
  togglePlay: () => {
    // دمج بسيط للحالة مع عكس القيمة الحالية
    set((state) => ({ isPlaying: !state.isPlaying }));
  },

  // تعديل الصوت مع فحص القيود عبر دالة get()
  setVolume: (level) => {
    const current = get().volume;
    if (level >= 0 && level <= 100) {
      set({ volume: level });
    }
  },
}));`,
      output: "خطاف مخصص فائق الجاهزية يوفر بيانات وحركات المكون في كائن واحد منظم.",
      commonMistakes: [
        {
          mistake: "نسيان أن دالة set() في Zustand تقوم بعمل دمج سطحي (Shallow Merge) تلقائي للكائن.",
          fix: "لا داعي لكتابة set(state => ({ ...state, count: 5 }))؛ يكفي كتابة set({ count: 5 }) فقط.",
          explanation: "دالة set تدمج الخصائص المرسلة مع باقي كائن الحالة تلقائياً دون محو الخصائص الأخرى."
        }
      ],
      bestPractices: [
        "ضع الدوال الإجرائية التي تعدل الحالة (Actions) داخل المتجر نفسه بجوار البيانات لتسهيل صيانتها.",
        "استخدم دالة get() عندما تحتاج لقراءة بيانات أخرى من المتجر أثناء تنفيذ إجراء معين."
      ],
      infographic: {
        title: "مكونات دالة create() في Zustand",
        elements: [
          { label: "دالة set", role: "تحديث الحالة مع دمج سطحي تلقائي: set({ key: value })", color: "blue" },
          { label: "دالة get", role: "قراءة الحالة الحالية في أي لحظة داخل الإجراء: get().myKey", color: "emerald" },
          { label: "الحالة والـ Actions", role: "كلاهما يعيشان معاً في نفس الكائن بانسجام تام", color: "purple" },
          { label: "Custom Hook الناتج", role: "خطاف جاهز للاستهلاك في أي مكان: useMyStore()", color: "amber" }
        ]
      }
    },
    {
      id: "12.4.c",
      title: "قراءة الحالة باستخدام Selectors",
      englishTerm: "Subscribing via Selectors (قِرَاءَةُ الحَالَةِ بِالْمُحَدِّدَات: منع إعادة التصيير الفائضة)",
      description: "المحددات (Selectors) في Zustand هي القاعدة الذهبية للحصول على أعلى أداء ممكن: عند استدعاء المتجر داخل المكون، نمرر له دالة اختيار تحدد بدقة ما نحتاجه (مثل `useStore((state) => state.cartCount)`). بفضل هذا المحدد، يشترك المكون فقط في تلك القيمة المحددة، ولن يعاد تصييره إطلاقاً إذا تغيرت أي خاصية أخرى في المتجر، مما يضمن أداءً فائقاً وعزلاً تاماً لرندر الشاشة.",
      analogy: "مثل الاشتراك في قناة إخبارية متخصصة: تشترك فقط في 'أخبار الطقس'؛ فلن يرسل لك الهاتف إشعاراً إذا انخفضت أسعار البورصة أو فاز فريق كرة قدم، بل يرسل لك إشعاراً فقط إذا تغيرت درجة الحرارة.",
      whyItMatters: "يحمي تطبيقك من إعادة تصيير مئات المكونات عند كل تعديل طفيف، ويوفر سرعة استجابة لا مثيل لها حتى على الهواتف الضعيفة.",
      syntax: "const value = useStore((state) => state.targetValue);",
      simpleExample: `import React from 'react';
import { useCounterStore } from './counterStore';

function JustTheCount() {
  // قراءة حقل count فقط عبر دالة المحدد Selector
  const count = useCounterStore((state) => state.count);

  return <div>الرقم الحالي: {count}</div>;
}

function JustTheButton() {
  // استخراج دالة الزيادة فقط؛ هذا المكون لن يعاد تصييره أبداً عند تغير count!
  const inc = useCounterStore((state) => state.inc);

  return <button onClick={inc}>زيادة ➕</button>;
}`,
      advancedExample: `// استخدام محددات متعددة واستخراج كائن مخصص بـ useShallow
import React from 'react';
import { create } from 'zustand';
// استيراد أداة المقارنة السطحية useShallow من zustand
import { useShallow } from 'zustand/react/shallow';

const useUserStore = create(() => ({
  firstName: 'خالد',
  lastName: 'المنصور',
  age: 29,
  city: 'الرياض',
}));

export function UserSummaryCard() {
  // استخراج خاصيتين معاً في كائن واحد مع منع الرندر إذا لم تتغيرا عبر useShallow
  const { firstName, lastName } = useUserStore(
    useShallow((state) => ({
      firstName: state.firstName,
      lastName: state.lastName,
    }))
  );

  // هذا المكون لن يعاد تصييره إطلاقاً إذا تغير age أو city!
  return (
    <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 text-right">
      <h4 className="font-bold text-sm text-blue-400">الاسم الكامل:</h4>
      <p className="text-lg font-black text-emerald-400">{firstName} {lastName}</p>
    </div>
  );
}`,
      output: "تحديث المكونات المعنية فقط عند تغير خصائصها مع استقرار تام لكافة المكونات الشقيقة الأخرى.",
      commonMistakes: [
        {
          mistake: "استدعاء المتجر كاملاً بدون محدد: const store = useStore() ثم قراءة store.count.",
          fix: "مرر محدد دائماً: const count = useStore(state => state.count).",
          explanation: "استدعاء useStore() بدون محدد يشترك في كائن المتجر بالكامل ويعيد تصيير المكون مع أي حركة في المتجر."
        },
        {
          mistake: "إرجاع كائن جديد بدون useShallow مثل: useStore(s => ({ a: s.a, b: s.b })).",
          fix: "استخدم useShallow من zustand/react/shallow لتفادي الرندر الدائم الناتج عن اختلاف المراجع.",
          explanation: "في جافاسكريبت، الكائنات الجديدة { } تملك مراجع مختلفة دائماً مما يخدع React بأن الحالة تغيرت."
        }
      ],
      bestPractices: [
        "استخرج دائماً كل خاصية في سطر منفصل كأفضل وأبسط ممارسة: const a = useStore(s => s.a); const b = useStore(s => s.b);",
        "استخدم useShallow عند استخراج عدة قيم في كائن أو مصفوفة معاً."
      ],
      infographic: {
        title: "كيف تحمي المحددات Selectors تطبيقك من بطء الرندر؟",
        elements: [
          { label: "بدون Selector", role: "const s = useStore() -> يعيد رندر المكون عند أي تغيير في أي مكان بالمتجر!", color: "rose" },
          { label: "مع Selector دقيق", role: "const c = useStore(s => s.count) -> يعيد الرندر فقط وفقط عند تغير count", color: "emerald" },
          { label: "استخراج الدوال فقط", role: "const inc = useStore(s => s.inc) -> صفر إعادة تصيير Zero Re-renders!", color: "blue" },
          { label: "useShallow Helper", role: "مقارنة سطحية ذكية لحزم الكائنات والمصفوفات المستخرجة معاً", color: "purple" }
        ]
      }
    },
    {
      id: "12.4.d",
      title: "تحديث الحالة باستخدام Actions",
      englishTerm: "Mutating State with Actions (تَحْدِيثُ الحَالَةِ بِالإِجْرَاءَات: إدارة التغييرات داخل المتجر)",
      description: "في Zustand، الإجراءات (Actions) ليست كائنات معقدة يتم إرسالها عبر Dispatch كما في Redux؛ بل هي دوال جافاسكريبت عادية وبسيطة تُعرف داخل نفس كائن المتجر وتستخدم دالة `set` لتطبيق التغيير. يمكن لهذه الدوال أن تكون متزامنة (Synchronous) أو غير متزامنة (Async/Await لجلب بيانات من API)، مما يجعل إدارة العمليات والآثار الجانبية في غاية السهولة والمباشرة دون وسائط إضافية.",
      analogy: "مثل المفاتيح والأزرار المثبتة على نفس لوحة القيادة: الزر والمحرك متصلان معاً بسلك مباشر؛ بمجرد أن تنقر على زر تشغيل المكيف، يعمل المكيف فوراً دون الحاجة لمراسلة مركز الصيانة والحصول على موافقة خطية.",
      whyItMatters: "يلغي الحاجة لـ Reducers و Action Creators و Action Types المنفصلة، ويجعل الكود مقروءاً وبديهياً لأي مطور جافاسكريبت من اليوم الأول.",
      syntax: "const useStore = create((set) => ({\n  data: [],\n  fetchData: async () => {\n    const res = await api.get('/items');\n    set({ data: res });\n  }\n}));",
      simpleExample: `import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  todos: [],

  // إجراء متزامن لإضافة مهمة
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),

  // إجراء لتبديل حالة الإنجاز
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    })),
}));`,
      advancedExample: `// إجراءات متقدمة تدمج العمليات غير المتزامنة (Async) وحالات التحميل والأخطاء داخل المتجر
import { create } from 'zustand';

export const useProductsStore = create((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  // إجراء غير متزامن متكامل لجلب المنتجات من الخادم
  fetchProducts: async () => {
    // 1. تفعيل حالة التحميل
    set({ isLoading: true, error: null });

    try {
      const response = await fetch('https://dummyjson.com/products?limit=5');
      if (!response.ok) throw new Error('فشل جلب المنتجات من الخادم');
      const data = await response.json();

      // 2. تحديث المنتجات بنجاح
      set({ products: data.products, isLoading: false });
    } catch (err) {
      // 3. تسجيل الخطأ في حال الفشل
      set({ error: err.message, isLoading: false });
    }
  },

  // إجراء متفائل لحذف منتج مع التراجع
  deleteOptimistic: async (id) => {
    const backup = get().products;
    // تحديث الشاشة فوراً في 0 ثانية
    set({ products: backup.filter((p) => p.id !== id) });

    try {
      const res = await fetch('https://dummyjson.com/products/' + id, { method: 'DELETE' });
      if (!res.ok) throw new Error('فشل الحذف');
    } catch {
      // التراجع الفوري عند الفشل
      set({ products: backup, error: 'تعذر حذف المنتج، تمت استعادته.' });
    }
  },
}));`,
      output: "إجراءات نظيفة ومباشرة تدير العمليات المتزامنة وغير المتزامنة في نفس المكان دون أي تعقيد معماري.",
      commonMistakes: [
        {
          mistake: "محاولة استدعاء set() داخل مكونات React مباشرة بدلاً من تعريف إجراء Action داخل المتجر.",
          fix: "عرف كافة العمليات كدوال إجرائية داخل المتجر واستدعها من المكون لمركزية المنطق.",
          explanation: "تشتيت استدعاءات set داخل ملفات المكونات يجعل تتبع التغييرات وصيانتها أمراً صعباً."
        }
      ],
      bestPractices: [
        "أبقِ منطق تعديل البيانات داخل دوال الإجراءات في المتجر، واجعل المكونات تكتفي باستدعاء الدالة فقط.",
        "استغل دعم async/await الطبيعي داخل إجراءات Zustand لإجراء استدعاءات الشبكة بسهولة."
      ],
      infographic: {
        title: "أنواع الإجراءات في متجر Zustand",
        elements: [
          { label: "إجراء متزامن (Sync)", role: "تعديل فوري محلي: set(state => ({ count: state.count + 1 }))", color: "blue" },
          { label: "إجراء غير متزامن (Async)", role: "استدعاء APIs مع async/await وتعيين isLoading و data", color: "emerald" },
          { label: "التحديث المتفائل (Optimistic)", role: "تعديل الكاش في 0ms مع استعادة النسخة الاحتياطية عند الفشل", color: "purple" },
          { label: "دالة get() المساعدة", role: "قراءة لقطة فورية من المتجر داخل أي إجراء دون وسائط", color: "amber" }
        ]
      }
    },
    {
      id: "12.4.e",
      title: "تقسيم Store إلى Slices",
      englishTerm: "Slice Pattern in Zustand (تَقْسِيمُ المَخْزَنِ إِلَى شَرَائِح: تنظيم الميزات في التطبيقات الكبيرة)",
      description: "عندما يكبر حجم تطبيقك، يصبح وضع كافة البيانات في متجر واحد ضخم أمراً غير عملي. نمط الشرائح (Slice Pattern) في Zustand هو المعيار المعتمد لتقسيم المتجر إلى وحدات منطقية مستقلة (مثل `createAuthSlice` و `createCartSlice` و `createNotificationSlice`)؛ حيث تمثل كل شريحة دالة عادية، ثم يتم تجميع كافة الشرائح في متجر نهائي موحد يسمى `useBoundStore` يمتلك كافة الحالات والإجراءات.",
      analogy: "مثل تجميع قطع الأثاث من متجر إيكيا: كل قطعة (شريحة) تأتي في صندوق مستقل بتعليماتها الخاصة (أرجل الطاولة، لوح السطح، المسامير)، وعند التركيب تجمع كافة القطع معاً لتصنع طاولة مكتب واحدة متكاملة وقوية.",
      whyItMatters: "يحافظ على سهولة قراءة الكود، ويتيح تقسيم العمل بين عدة مطورين في نفس المشروع دون تعارض، ويسهل اختبار كل شريحة بمعزل عن الأخرى.",
      syntax: "const createFishSlice = (set) => ({ fishes: 0, addFish: () => set(...) });\nconst useStore = create((...a) => ({ ...createFishSlice(...a), ...createBearSlice(...a) }));",
      simpleExample: `// 1. شريحة المستخدم (User Slice)
const createUserSlice = (set) => ({
  username: 'طارق',
  setUsername: (name) => set({ username: name }),
});

// 2. شريحة المظهر (Theme Slice)
const createThemeSlice = (set) => ({
  theme: 'dark',
  setTheme: (t) => set({ theme: t }),
});

// 3. تجميع الشرائح في متجر واحد مركزي (Bound Store)
import { create } from 'zustand';

export const useAppStore = create((...a) => ({
  ...createUserSlice(...a),
  ...createThemeSlice(...a),
}));

// في المكونات:
// const user = useAppStore(state => state.username);
// const theme = useAppStore(state => state.theme);`,
      advancedExample: `// تطبيق نمط الشرائح المتقدم للتجارة الإلكترونية مع تداخل الحالات بين الشرائح
import { create } from 'zustand';

// شريحة المصادقة
export const createAuthSlice = (set, get) => ({
  user: null,
  token: null,
  setUser: (user, token) => set({ user, token }),
  logout: () => {
    set({ user: null, token: null });
    // يمكن للشريحة استدعاء إجراء من شريحة أخرى بعد التجميع!
    get().clearCart();
  },
});

// شريحة سلة الشراء
export const createCartSlice = (set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  clearCart: () => set({ items: [] }),
});

// المتجر الموحد الشامل
export const useBoundStore = create((...a) => ({
  ...createAuthSlice(...a),
  ...createCartSlice(...a),
}));`,
      output: "بنية كود غاية في النظافة والتكامل تسمح للشرائح بالتواصل فيما بينها بسلاسة عبر دالة get().",
      commonMistakes: [
        {
          mistake: "نسيان تمرير معاملات البناء (...a) إلى دوال الشرائح مثل: ...createAuthSlice().",
          fix: "مرر مصفوفة المعاملات بالكامل: create((...a) => ({ ...createAuthSlice(...a), ...createCartSlice(...a) })).",
          explanation: "معاملات (...a) تتضمن دوال (set, get, store) التي تحتاجها كل شريحة لتعمل بشكل سليم."
        }
      ],
      bestPractices: [
        "ضع كل شريحة في ملف مستقل داخل مجلد features (مثل `src/features/cart/cartSlice.js`).",
        "اجمع كافة الشرائح في ملف مركزي واحد باسم `src/store/useBoundStore.js`."
      ],
      infographic: {
        title: "نمط الشرائح (Slice Pattern) في Zustand",
        elements: [
          { label: "Auth Slice", role: "شريحة مستقلة تدير المستخدم وبيانات التوثيق والرموز", color: "blue" },
          { label: "Cart Slice", role: "شريحة مستقلة تدير سلة المشتريات والحسابات والكميات", color: "emerald" },
          { label: "UI Slice", role: "شريحة تدير النوافذ المنبثقة والإشعارات وسمات المظهر", color: "purple" },
          { label: "Bound Store", role: "المتجر النهائي المجمع: useBoundStore يضم كافة الميزات معاً", color: "amber" }
        ]
      }
    },
    {
      id: "12.4.f",
      title: "استخدام Persist Middleware",
      englishTerm: "Persist Middleware in Zustand (حِفْظُ الحَالَةِ فِي الذَّاكِرَة: الثبات بعد إعادة التحميل)",
      description: "برمجية الحفظ المستمر `persist` هي وسيطة رسمية مدمجة في Zustand تقوم تلقائياً بمزامنة وحفظ حالة المتجر (أو أجزاء محددة منه) داخل ذاكرة المتصفح (`localStorage` أو `sessionStorage`). عند قيام المستخدم بتحديث الصفحة (F5) أو إغلاق المتصفح وفتحه لاحقاً، تقوم الوسيطة بإعادة تحميل وتركيب البيانات تلقائياً (Rehydration) في الصفر ثانية دون أن يفقد المستخدم سلة مشترياته أو جلسة دخوله.",
      analogy: "مثل الحفظ التلقائي (Auto-Save) في برامج معالجة النصوص أو ألعاب الفيديو: كلما كتبت سطراً أو حصلت على نقاط جديدة، تحفظ اللعبة تقدمك فوراً على القرص الصلب، بحيث إذا انقطعت الكهرباء فجأة تعود لنفس النقطة دون ضياع تقدمك.",
      whyItMatters: "يحول التطبيق إلى تجربة متينة ومستقرة تحتفظ بتفضيلات وسلات المستخدمين وتمنع إحباط تسجيل الدخول المتكرر بعد كل زيارة.",
      syntax: "import { persist } from 'zustand/middleware';\nexport const useStore = create(persist((set) => ({ ... }), { name: 'storage-key' }));",
      simpleExample: `import { create } from 'zustand';
// استيراد وسيطة الحفظ التلقائي
import { persist } from 'zustand/middleware';

export const useSettingsStore = create(
  // تغليف المتجر بوسيطة persist
  persist(
    (set) => ({
      language: 'ar',
      fontSize: 16,
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      // المفتاح الذي ستخزن به البيانات في localStorage
      name: 'app-settings-storage',
    }
  )
);`,
      advancedExample: `// تكوين متقدم للحفظ المستمر مع تصفية الحقول المحفوظة (Partialize) ودعم AsyncStorage
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useSecureAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      tempSessionPassword: '', // حقل حساس مؤقت لا نريد حفظه في الذاكرة الدائمة!

      login: (userData, token) => set({ user: userData, token }),
      logout: () => set({ user: null, token: null, tempSessionPassword: '' }),
    }),
    {
      name: 'secure-auth-vault',
      storage: createJSONStorage(() => localStorage),
      // ميزة partialize: تحديد الحقول المسموح بحفظها فقط واستبعاد الحقول الحساسة أو المؤقتة
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
      // دالة استدعاء فور اكتمال استرجاع البيانات من الذاكرة (On Rehydrate)
      onRehydrateStorage: () => (state) => {
        console.log('تم استرجاع بيانات الجلسة من الذاكرة بنجاح!', state?.user?.name);
      },
    }
  )
);`,
      output: "حفظ واسترجاع فوري لبيانات الجلسة وتفضيلات المستخدم حتى بعد إغلاق المتصفح وإعادة فتحه.",
      commonMistakes: [
        {
          mistake: "حفظ كائنات ضخمة أو حالات مؤقتة سريعة التغير في localStorage مما يستهلك حد الـ 5MB المسموح.",
          fix: "استخدم خاصية partialize لتحديد الحقول الدائمة فقط واستبعاد المتغيرات المؤقتة.",
          explanation: "ذاكرة localStorage محدودة المساحة وبطيئة في التشفير إذا امتلأت بميغابايتات من البيانات."
        }
      ],
      bestPractices: [
        "استخدم خاصية partialize دائماً لمنع حفظ البيانات السرية المؤقتة في نصوص localStorage المكشوفة.",
        "اختر أسماء مفاتيح فريدة في خاصية name (مثل 'myproject_cart_v1') لتفادي التضارب مع مواقع أخرى تعمل على localhost."
      ],
      infographic: {
        title: "آلية عمل وسيطة persist في Zustand",
        elements: [
          { label: "1. تحديث الحالة", role: "المستخدم يغير اللغة أو يضيف منتجاً للسلة عبر دالة set", color: "blue" },
          { label: "2. المزامنة الفورية", role: "تقوم persist بتحويل البيانات لنص JSON وحفظها في localStorage", color: "emerald" },
          { label: "3. إغلاق / تحديث F5", role: "المتصفح يفرغ ذاكرة جافاسكريبت المؤقتة", color: "amber" },
          { label: "4. Rehydration", role: "عند الإقلاع: استعادة البيانات فوراً وإعادتها لحالة المتجر بـ 0 ثانية", color: "purple" }
        ]
      }
    },
    {
      id: "12.4.g",
      title: "ربط Zustand مع DevTools",
      englishTerm: "Redux DevTools Integration with devtools middleware (رَبْطُ زُوسْتَانْد مَعَ دِيفْ تُولْز)",
      description: "على الرغم من أن Zustand تعمل بدون Redux، إلا أنها تمتلك وسيطة رسمية مدمجة تسمى `devtools` تتيح ربط أي متجر Zustand بإضافة المتصفح الشهيرة Redux DevTools بكل سهولة. تمكنك هذه الوسيطة من مشاهدة سجل الحالات، ومراقبة كل تعديل يتم على المتجر مع اسمه الدقيق، وفحص الفروقات (Diff)، والاستفادة من ميزة التراجع الزمني (Time-Travel) الرائعة أثناء التطوير.",
      analogy: "مثل تركيب شاشة مراقبة زجاجية على محرك السيارة الشفاف: ترى التروس والأسطوانات وهي تتحرك وتتفاعل في كل لحظة، وتعرف بالضبط أي قطعة تعمل وأيها توقفت دون الحاجة لتفكيك المحرك.",
      whyItMatters: "تمنحك نفس قدرات التتبع والمراقبة الخارقة التي يفتخر بها Redux، ولكن مع البساطة والخفة الفائقة لـ Zustand.",
      syntax: "import { devtools } from 'zustand/middleware';\nexport const useStore = create(devtools((set) => ({ ... })));",
      simpleExample: `import { create } from 'zustand';
// استيراد وسيطة devtools
import { devtools } from 'zustand/middleware';

export const useCounterStore = create(
  // تغليف المتجر بـ devtools
  devtools((set) => ({
    count: 0,
    // تسمية الإجراء صراحة في المعامل الثاني لـ set ليظهر باسمه في DevTools!
    increment: () => set((state) => ({ count: state.count + 1 }), false, 'counter/increment'),
    decrement: () => set((state) => ({ count: state.count - 1 }), false, 'counter/decrement'),
  }))
);`,
      advancedExample: `// دمج وسيطتي devtools و persist معاً في متجر متقدم
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useProductionCartStore = create(
  // التغليف بـ devtools أولاً ثم persist بالداخل
  devtools(
    persist(
      (set) => ({
        cart: [],
        addToCart: (product) =>
          set(
            (state) => ({ cart: [...state.cart, product] }),
            false,
            'cart/addToCart' // يظهر في Redux DevTools بهذا الاسم الواضح!
          ),
        emptyCart: () =>
          set({ cart: [] }, false, 'cart/emptyCart'),
      }),
      { name: 'shopping-cart-cache' }
    ),
    { name: 'سلة المشتريات - متجر الإنتاج' }
  )
);`,
      output: "ظهور متجر Zustand داخل تبويب Redux DevTools في المتصفح مع إمكانية التراجع والتتبع اللحظي.",
      commonMistakes: [
        {
          mistake: "نسيان تمرير اسم الإجراء كمعامل ثالث في دالة set(...) مما يجعل كل الأحداث تظهر باسم 'anonymous' في DevTools.",
          fix: "مرر false كمعامل ثانٍ واسم الإجراء كمعامل ثالث: set(nextState, false, 'action/name').",
          explanation: "المعامل الثاني يحدد هل تستبدل الحالة أم تدمجها، والمعامل الثالث هو الاسم الذي يظهر في شريط DevTools."
        }
      ],
      bestPractices: [
        "رتب الوسائط بهذا الترتيب دائماً: devtools(persist(...)) لضمان عمل كلاهما بأمان تام.",
        "سمِّ إجراءاتك بأسماء واضحة تتبع نمط feature/actionName لسهولة القراءة في شريط التاريخ."
      ],
      infographic: {
        title: "دمج وسائط Zustand (Middleware Composition)",
        elements: [
          { label: "1. devtools", role: "الطبقة الخارجية: تراقب وترسل الأحداث لـ Redux DevTools", color: "purple" },
          { label: "2. persist", role: "الطبقة المتوسطة: تحفظ التعديلات في localStorage", color: "blue" },
          { label: "3. المتجر الأصلي", role: "الطبقة الداخلية: الحالة والدوال التجارية الحقيقية", color: "emerald" },
          { label: "أفضل تجربة تطوير DX", role: "ثبات للبيانات بعد F5 مع تتبع زمني احترافي في المتصفح", color: "amber" }
        ]
      }
    },
    {
      id: "12.4.h",
      title: "تقليل إعادة التصيير",
      englishTerm: "Minimizing Re-renders in Zustand (تَقْلِيلُ إِعَادَةِ التَّصْيِير: الأداء الخارق والمقارنة السطحية)",
      description: "تعتبر Zustand من أكثر مكتبات إدارة الحالة كفاءة في استهلاك المعالج وتقليل إعادة التصيير. لتحقيق هذا الأداء الخارق، تتبع 3 استراتيجيات أساسية: 1) استخدام المحددات الذرية (Atomic Selectors): استخراج قيمة واحدة فقط في كل خطاف؛ 2) استخدام المقارنة السطحية `useShallow`: عند استخراج كائن أو مصفوفة؛ 3) التحديث المؤقت الصامت (Transient Updates عبر `subscribe`): الاشتراك في تحديثات الحالة لتعديل عناصر DOM مباشرة (مثل تحريك إحداثيات مؤشر الفأرة أو شريط الصوت بـ 60 إطاراً في الثانية) دون استدعاء رندر React إطلاقاً.",
      analogy: "مثل جرس الباب الذكي الذي يتعرف على بصمة الوجه: لا يرن الجرس ويوقظ كل سكان البيت إلا إذا كان الطارق هو الشخص المطلوب بالضبط؛ وإذا كان طارقاً عابراً لا يوقظ أحداً.",
      whyItMatters: "يحول التطبيقات الثقيلة (مثل تطبيقات تعديل الرسوميات، الجداول التي تضم 10,000 صف، ومحررات النصوص) إلى تجربة فائقة السلاسة بسرعة 60FPS دون أي تعليق.",
      syntax: "const a = useStore((s) => s.a);\n// أو التحديث الصامت بدون رندر:\nuseStore.subscribe((state) => { ref.current.textContent = state.val; });",
      simpleExample: `import React from 'react';
import { create } from 'zustand';

const useScoreStore = create((set) => ({
  homeScore: 0,
  awayScore: 0,
  scoreHome: () => set((s) => ({ homeScore: s.homeScore + 1 })),
}));

// هذا المكون لن يعاد تصييره إطلاقاً إذا سجل الفريق الضيف (awayScore)!
function HomeTeamScoreBoard() {
  const homeScore = useScoreStore((state) => state.homeScore);

  return <div style={{ color: 'green', fontSize: '20px' }}>الفريق المضيف: {homeScore}</div>;
}`,
      advancedExample: `// استخدام التحديث الصامت Transient Update لتحريك عنصر بسرعة 60FPS دون إعادة تصيير React!
import React, { useEffect, useRef } from 'react';
import { create } from 'zustand';

// متجر سريع لتتبع إحداثيات مؤشر الفأرة
export const useCursorStore = create((set) => ({
  x: 0,
  y: 0,
  setPosition: (x, y) => set({ x, y }),
}));

export function FastCursorFollower() {
  const cursorDotRef = useRef(null);

  useEffect(() => {
    // الاشتراك مباشرة في تحديثات المتجر بدون أي إعادة تصيير لـ React نهائياً!
    const unsubscribe = useCursorStore.subscribe((state) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform =
          'translate3d(' + state.x + 'px, ' + state.y + 'px, 0)';
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      ref={cursorDotRef}
      className="fixed top-0 left-0 w-6 h-6 bg-emerald-400 rounded-full pointer-events-none shadow-lg shadow-emerald-400/50 transition-transform duration-75 z-50"
    />
  );
}`,
      output: "تحريك العناصر على الشاشة بسرعة 60 إطاراً في الثانية دون إطلاق رندر واحد في شجرة React.",
      commonMistakes: [
        {
          mistake: "استخراج كائن يحتوي على دوال وقيم معاً بدون useShallow مثل: const { count, inc } = useStore(s => ({ count: s.count, inc: s.inc })).",
          fix: "استخرج الدالة وحدها والقيمة وحدها، أو استخدم useShallow.",
          explanation: "إرجاع كائن جديد { count, inc } في كل رندر يعيد تصيير المكون دائماً حتى لو لم يتغير count."
        }
      ],
      bestPractices: [
        "قاعدة ذهبية: استخرج دائماً أدق معلومة ممكنة عبر Atomic Selectors.",
        "استخدم تقنية Transient Updates عبر subscribe لتطبيقات الألعاب والحركات والرسوم ثلاثية الأبعاد."
      ],
      infographic: {
        title: "استراتيجيات تحسين الأداء في Zustand",
        elements: [
          { label: "1. Atomic Selectors", role: "استخراج كل متغير في سطر مستقل لمنع إعادة التصيير", color: "blue" },
          { label: "2. useShallow", role: "مقارنة سطحية تمنع الرندر عند استخراج كائنات أو مصفوفات متعددة", color: "emerald" },
          { label: "3. Action Isolation", role: "استخراج الدوال بمفردها يمنح المكون صفر إعادة تصيير Zero Renders", color: "purple" },
          { label: "4. Transient Updates", role: "الاشتراك الصامت وتعديل DOM مباشرة دون المرور بـ React", color: "amber" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q12.4.1",
      question: "ما الذي يميز Zustand بشكل أساسي مقارنة بـ Redux و Context API في إعداد المتجر؟",
      options: [
        "لا تحتاج إلى تغليف شجرة التطبيق بمكون <Provider> وتعمل كخطاف مخصص مباشرة.",
        "لا تدعم التعامل مع الأرقام نهائياً.",
        "تتطلب كتابة ملفات XML مخصصة لكل شريحة.",
        "تعمل فقط مع متصفح فايرفوكس."
      ],
      correctAnswer: 0,
      explanation: "Zustand تلغي الحاجة لـ <Provider> كلياً، وتتيح إنشاء المخزن كخطاف عادي يُستدعى في أي مكان."
    },
    {
      id: "q12.4.2",
      question: "لماذا نستخدم وسيطة persist في Zustand؟",
      options: [
        "لتشفير كود جافاسكريبت ومنع سرقته.",
        "لحفظ ومزامنة حالة المتجر تلقائياً في ذاكرة المتصفح (localStorage) لتبقى ثابتة بعد تحديث الصفحة.",
        "لتسريع سرعة الإنترنت 5 أضعاف.",
        "لحذف الحسابات غير النشطة تلقائياً."
      ],
      correctAnswer: 1,
      explanation: "وسيطة persist تحفظ بيانات المتجر في localStorage وتستعيدها تلقائياً عند إعادة تحميل الصفحة."
    },
    {
      id: "q12.4.3",
      question: "ما هي الفائدة من استخدام useShallow في محددات Zustand؟",
      options: [
        "تمنع إعادة تصيير المكون إذا تم استخراج كائن يحتوي على عدة قيم لم تتغير فعلياً بمقارنة المراجع السطحية.",
        "تقوم بتحويل النصوص إلى حروف صغيرة.",
        "تمنع المستخدم من كتابة كلمات المرور.",
        "تغلق المتصفح عند حدوث خطأ."
      ],
      correctAnswer: 0,
      explanation: "تمنع useShallow الرندر غير اللازم الناتج عن إرجاع كائنات جديدة بمقارنة خصائص الكائن سطحياً."
    }
  ],
  exercise: {
    id: "ex-12.4",
    title: "بناء متجر Zustand متكامل لسلة مشتريات مع Persist و DevTools و Selectors (Zustand Cart Suite)",
    description: "قم بإنشاء متجر Zustand متكامل باسم `useCartStore` يدمج: 1) مصفوفة عناصر السلة وحساب الإجمالي، 2) إجراءات إضافة منتج، حذف، وتفريغ، 3) وسيطة `persist` لحفظ السلة في localStorage، و 4) وسيطة `devtools` للتتبع في المتصفح.",
    starterCode: `import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// اكتب متجر useCartStore المتكامل هنا مع الوسائط
`,
    hints: [
      "رتب الوسائط: create(devtools(persist((set, get) => ({ ... }), { name: 'cart-storage' })))",
      "في الإضافة: افحص هل العنصر موجود، ثم زد الكمية أو أضف عنصراً جديداً.",
      "احسب الإجمالي تلقائياً أو عبر دالة مشتقة في المتجر."
    ],
    solution: `import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useCartStore = create(
  devtools(
    persist(
      (set, get) => ({
        items: [], // [{ id, title, price, quantity }]

        // إضافة منتج للسلة
        addItem: (product) => {
          const currentItems = get().items;
          const existing = currentItems.find((i) => i.id === product.id);

          if (existing) {
            set(
              {
                items: currentItems.map((i) =>
                  i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
              },
              false,
              'cart/increaseQuantity'
            );
          } else {
            set(
              { items: [...currentItems, { ...product, quantity: 1 }] },
              false,
              'cart/addItem'
            );
          }
        },

        // حذف منتج بالمعرف
        removeItem: (id) =>
          set(
            (state) => ({ items: state.items.filter((i) => i.id !== id) }),
            false,
            'cart/removeItem'
          ),

        // تفريغ السلة
        clearCart: () => set({ items: [] }, false, 'cart/clearCart'),

        // حساب إجمالي السعر مشتقاً
        getTotalPrice: () =>
          get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

        // حساب إجمالي عدد القطع
        getTotalCount: () =>
          get().items.reduce((sum, item) => sum + item.quantity, 0),
      }),
      {
        name: 'my-modern-cart-storage',
      }
    ),
    { name: 'Cart Store' }
  )
);`
  },
  infographic: {
    title: "خريطة طريق احتراف Zustand",
    description: "الأركان الأربعة للبساطة المطلقة والأداء العالي في إدارة الحالة",
    steps: [
      { step: "1", title: "create((set, get))", desc: "إنشاء المتجر كخطاف React طبيعي بدون أي Provider" },
      { step: "2", title: "Atomic Selectors", desc: "استخراج القيم الدقيقة لعزل الرندر وتحقيق سرعة 60FPS" },
      { step: "3", title: "Slice Pattern", desc: "تقسيم الميزات المعقدة لشرائح مستقلة وتجميعها بـ useBoundStore" },
      { step: "4", title: "persist & devtools", desc: "حفظ الحالة تلقائياً في localStorage مع تتبع كامل في المتصفح" }
    ]
  }
};
