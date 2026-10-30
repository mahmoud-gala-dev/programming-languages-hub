// src/data/sections/section7/topic5.js
// الموضوع 5: استخدام useReducer في React (Reducers, Actions, Dispatch & Lightweight Redux)

export const SECTION_7_TOPIC_5 = {
  id: "7.5",
  title: "استخدام useReducer",
  englishTerm: "State Management with useReducer",
  description: "المحرك المتقدم لإدارة الحالات المعقدة والمتشعبة: فهم نمط الـ Reducer كآلة حالات نقية (State Machine)، كائنات الـ Actions، دالة dispatch، التهيئة الكسولة، والجمع الأسطوري بين useReducer و useContext لبناء معمارية تشبه Redux خفيفة الوزن.",
  subtopics: [
    {
      id: "7.5.a",
      title: "مفهوم Reducer",
      englishTerm: "Reducer Concept (State Machine & Pure Transition Function)",
      description: "المفهوم الهندسي لدالة المخفّض (Reducer). هي دالة جافاسكريبت نقية تماماً (Pure Function) تأخذ قيمتين: 1) الحالة الحالية (Current State)، 2) كائن الإجراء أو الحدث (Action Object)، وتقوم بحساب وإرجاع الحالة الجديدة القادمة (Next State). مستوحاة من دالة Array.prototype.reduce في لغة جافاسكريبت وفلسفة مكتبة Redux الشهيرة.",
      realLifeAnalogy: "مثل ماكينة بيع المشروبات الغازية الآلية (Vending Machine)؛ الماكينة في حالة خاملة تنتظر (Current State). عندما تضع فيها عملة معدنية بقيمة 5 ريالات وتضغط زر الكولا (Action)، تطبق الماكينة معادلة حسابية دقيقة، وتخرج لك علبة الكولا، وتتحول حالتها الجديدة إلى: (إخراج العلبة وإرجاع الباقي).",
      whyItMatters: "يفصل منطق إدارة الحالة (State Logic) عن كود الواجهة البصرية (UI Components) بالكامل. بدلاً من أن يمتلئ المكون بدوال setState متناثرة في كل مكان، يقتصر دور المكون على إرسال 'ماذا حدث' (Dispatch Action)، بينما يتكفل الـ Reducer بحساب 'كيف تتغير الحالة'.",
      syntax: "function myReducer(state, action) {\n  // يرجع الحالة الجديدة دائماً\n  return nextState;\n}",
      simpleExample: `// دالة مخفض بسيطة لعداد
function counterReducer(state, action) {
  // فحص نوع الحدث الذي وقع
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }
  // إرجاع نفس الحالة إذا لم يطابق الإجراء
  return state;
}

// تجربة الدالة كنقاء رياضي بحت
const initial = { count: 0 };
const afterIncrement = counterReducer(initial, { type: "INCREMENT" });
console.log("الحالة الناتجة من الـ Reducer:", afterIncrement); // { count: 1 }
`,
      advancedExample: `// محاكي آلة الحالات المحدودة (State Machine Simulator) لفهم نقاء الـ Reducer
export function StateMachineReducerVisualizer() {
  const transitions = [
    { currentState: "خامل (IDLE)", action: "{ type: 'FETCH_START' }", nextState: "جارٍ التحميل (LOADING)" },
    { currentState: "جارٍ التحميل (LOADING)", action: "{ type: 'FETCH_SUCCESS', payload: data }", nextState: "نجاح وجاهزية (SUCCESS)" },
    { currentState: "جارٍ التحميل (LOADING)", action: "{ type: 'FETCH_ERROR', payload: error }", nextState: "خطأ في الشبكة (ERROR)" },
    { currentState: "خطأ (ERROR)", action: "{ type: 'RETRY' }", nextState: "جارٍ التحميل (LOADING)" }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">فلسفة دالة Reducer: آلة الحالات (State Machine)</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          (state, action) =&gt; nextState
        </span>
      </div>

      <p className="text-xs text-slate-300">
        دالة الـ Reducer هي منظم المرور الوحيد المسؤول عن نقل التطبيق من حالة لأخرى بنقاء تام:
      </p>

      <div className="space-y-2">
        {transitions.map((tr, i) => (
          <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-mono text-[10px]">{tr.currentState}</span>
              <span className="text-indigo-400 font-bold">→</span>
              <span className="text-emerald-400 font-mono text-[10px] font-bold">{tr.nextState}</span>
            </div>
            <div className="p-1.5 bg-slate-900 rounded-lg text-amber-300 font-mono text-[10px] border border-slate-800">
              الحدث المحفز: {tr.action}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يقدم المكون توضيحاً علمياً يثبت أن الـ Reducer هو دالة نقل حتمية (Deterministic Transition Function) خالية من المفاجآت أو الآثار الجانبية العشوائية.",
      commonMistakes: [
        {
          mistake: "إجراء اتصالات بالخادم (Fetch) أو استدعاء Math.random() أو Date.now() داخل دالة الـ Reducer.",
          why: "دالة الـ Reducer يجب أن تكون دالة نقية 100%؛ إقحام تواريخ أو أرقام عشوائية أو طلبات غير متزامنة يكسر إمكانية التنبؤ بالحالة ويعطل أدوات التصحيح (Time-Travel Debugging)!",
          fix: "اجعل الـ Reducer حسابياً بحتاً؛ وجهز التواريخ والبيانات العشوائية في الحدث (Action payload) قبل إرسالها للـ Reducer."
        }
      ],
      bestPractices: [
        "عامل الـ Reducer كقلب منطق أعمالك (Core Business Logic) وضعه في ملف مستقل خارج المكونات لسهولة اختباره (Unit Testing).",
        "احرص دائماً على وجود فرع default يعيد نفس الحالة القديمة state في حال استلام حدث غير معروف."
      ],
      infographicCard: {
        type: "state-machine-box",
        title: "المعادلة الرياضية للـ Reducer",
        equation: "Next State = Reducer(Current State, Action)"
      }
    },
    {
      id: "7.5.b",
      title: "إنشاء Reducer Function",
      englishTerm: "Defining the Reducer Function with switch/case",
      description: "الهيكل البرمجي القياسي لكتابة دالة الـ Reducer في React. يُستخدم عادة تعبير switch (action.type) للتعامل مع مختلف السيناريوهات الممكنة بنظافة ووضوح. في كل حالة case، يتم إرجاع كائن الحالة الجديد بالكامل دون المساس بالأصل، مع وجود حالة default إجبارية.",
      realLifeAnalogy: "مثل موظف فرز الرسائل في البريد المركزي؛ يقرأ الختم المكتوب على الطرد (action.type)؛ فإذا كان مكتوباً 'طيران سريع' يضعه في حقيبة الطائرة، وإذا كان 'شحن بحري' يضعه في الحاوية، وإذا كان نوعاً غير معروف يتركه في مكانه كما هو (default: return state).",
      whyItMatters: "يوفر هيكلاً موحداً وقابلاً للقراءة والتوسع؛ مهما كبر حجم تطبيقك وأصبح لديك 20 عملية مختلفة، تظل دالة الـ Reducer واضحة وقابلة للتتبع سطر بسطر.",
      syntax: "function todoReducer(state, action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return [...state, action.payload];\n    case 'DELETE_TODO':\n      return state.filter(t => t.id !== action.payload);\n    default:\n      return state;\n  }\n}",
      simpleExample: `// دالة مخفض قياسية بنمط switch/case
function statusReducer(state, action) {
  switch (action.type) {
    case "ACTIVATE":
      return { status: "نشط", color: "emerald" };
    case "DEACTIVATE":
      return { status: "معطل", color: "rose" };
    case "RESET":
      return { status: "خامل", color: "slate" };
    default:
      // إرجاع الحالة القديمة دون تغيير إذا كان الإجراء مجهولاً
      return state;
  }
}

// تجربة سريعة
const currentStatus = statusReducer({ status: "خامل", color: "slate" }, { type: "ACTIVATE" });
console.log("الحالة المحدثة:", currentStatus);
`,
      advancedExample: `// دالة Reducer متطورة لإدارة جلسة المصادقة والأمان مع معالجة شاملة
export function authReducerMaster(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        errorMessage: null
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        errorMessage: action.payload.error
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        errorMessage: null
      };

    default:
      // قاعدة أمان: إرجاع الحالة دون مساس إذا كان الإجراء غير معروف
      return state;
  }
}

export function ReducerDefinitionShowcase() {
  const sampleState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto text-xs">
      <h4 className="font-bold text-sm text-indigo-400">الهيكل المعماري لدالة Reducer احترافية</h4>
      <p className="text-slate-300">
        الدالة تعالج 4 حالات واضحة عبر نمط switch/case مع المحافظة التامة على الـ Immutability:
      </p>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[10px] space-y-1 text-slate-300">
        <p className="text-amber-400">case "LOGIN_START": يرفع حالة التحميل ويصفر الأخطاء</p>
        <p className="text-emerald-400">case "LOGIN_SUCCESS": يحفظ المستخدم والتوكن</p>
        <p className="text-rose-400">case "LOGIN_FAILURE": يسجل رسالة الخطأ الواردة</p>
        <p className="text-sky-400">case "LOGOUT": يصفر الجلسة بالكامل</p>
        <p className="text-slate-500">default: return state (خط الدفاع الأساسي)</p>
      </div>
    </div>
  );
}`,
      output: "الدالة تمثل نموذجاً معمارياً موحداً يجمع كل احتمالات وتفريعات تحديث الحالة في مكان واحد منظم يسهل صيانته.",
      commonMistakes: [
        {
          mistake: "نسيان كلمة return في أحد فروع case، مما يؤدي لسقوط الكود وتنفيذ الـ case التالية (Fall-through bug)!",
          why: "في تعبير switch، إذا لم تُرجع قيمة أو تكتب break، سينزلق التنفيذ لسطور الحالة التالية بالخطأ.",
          fix: "احرص على كتابة return صريحة في كل فرع case دون استثناء."
        }
      ],
      bestPractices: [
        "اكتب أسماء action.type بحروف كبيرة واضحة تفصل بين كلماتها بشرطة سفلية كـ CONSTANTS (مثل: 'FETCH_DATA_SUCCESS').",
        "احرص على استخدام معامل الانتشار ...state في بداية كل كائن ترجعه للحفاظ على الخصائص غير المعدلة."
      ],
      infographicCard: {
        type: "switch-tree",
        title: "تشريح نمط switch/case في الـ Reducer",
        cases: [
          "switch (action.type) {",
          "  case 'ACTION_A': return { ...state, val: 1 };",
          "  case 'ACTION_B': return { ...state, val: 2 };",
          "  default: return state;",
          "}"
        ]
      }
    },
    {
      id: "7.5.c",
      title: "تعريف Actions",
      englishTerm: "Action Objects (type, payload & Flux Standard Action)",
      description: "كائن جافاسكريبت عادي يصف 'ماذا حدث في التطبيق'. وفق المعيار القياسي لـ Flux (Flux Standard Action - FSA)، يجب أن يحتوي كائن الـ Action على خاصية إجبارية اسمها type (سلسلة نصية تصف الحدث بنمط إخباري بالماضي)، وخاصية اختيارية اسمها payload تحتوي على البيانات الإضافية التي يحتاجها الـ Reducer لإتمام التحديث.",
      realLifeAnalogy: "مثل استمارة إيداع بنكية تملؤها بخط يدك؛ خانة 'نوع المعاملة' (type) مكتوب فيها 'إيداع نقدي'، وخانة 'المبلغ المودع' (payload) مكتوب فيها '500 ريال'. تقدم الاستمارة للصراف لينفذ العملية بدقة.",
      whyItMatters: "توحيد صياغة الأحداث يجعل التطبيق قابلاً للتسجيل والأرشفة (Event Sourcing) وإعادة تشغيل الأحداث السابقة خطوة بخطوة للتشخيص السريع.",
      syntax: "const action = {\n  type: 'ADD_ITEM',\n  payload: { id: 1, title: 'كتاب جديد', price: 50 }\n};",
      simpleExample: `// أمثلة لأشكال كائنات الـ Action المختلفة
// 1. حدث بسيط بلا بيانات إضافية (مجرد نوع)
const resetAction = { type: "RESET_SCORE" };

// 2. حدث يحمل حمولة بيانات (payload)
const updateUserAction = {
  type: "UPDATE_PROFILE_NAME",
  payload: "عبدالعزيز السليمان"
};

console.log("نوع الإجراء:", updateUserAction.type);
console.log("البيانات المرفقة:", updateUserAction.payload);
`,
      advancedExample: `// دوال إنشاء الإجراءات (Action Creators Pattern) لتوحيد كتابة الأحداث ومنع الأخطاء المطبعية
export const ActionTypes = {
  SET_SEARCH_QUERY: "SET_SEARCH_QUERY",
  SET_ACTIVE_FILTER: "SET_ACTIVE_FILTER",
  RESET_ALL_FILTERS: "RESET_ALL_FILTERS"
};

// Action Creators: دوال مساعدة ترجع كائنات Action منضبطة
export const setSearchQuery = (query) => ({
  type: ActionTypes.SET_SEARCH_QUERY,
  payload: query
});

export const setActiveFilter = (filterName) => ({
  type: ActionTypes.SET_ACTIVE_FILTER,
  payload: filterName
});

export const resetAllFilters = () => ({
  type: ActionTypes.RESET_ALL_FILTERS
});

export function ActionCreatorsShowcase() {
  const sample = setSearchQuery("React 19 Hooks");

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto text-xs">
      <h4 className="font-bold text-sm text-indigo-400">معيار كائنات الـ Action (FSA Standard)</h4>
      <p className="text-slate-300">
        استخدام دوال Action Creators يمنع الأخطاء المطبعية (Typos) في كتابة النصوص:
      </p>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-400">
        {JSON.stringify(sample, null, 2)}
      </div>

      <p className="text-[10px] text-slate-500">
        كائن يحوي دائماً خاصية type وخاصية payload الموحدة.
      </p>
    </div>
  );
}`,
      output: "تم تصميم كائنات الـ Action وفق المواصفات القياسية العالمية مما يمنع الأخطاء الإملائية ويسهل إعادة استخدامها في كافة الشاشات.",
      commonMistakes: [
        {
          mistake: "تسمية خاصية البيانات بأسماء عشوائية مختلفة في كل حدث، مثل: { type: 'ADD', text: 'x' } ثم { type: 'UPDATE', data: 'y' }.",
          why: "اختلاف تسميات الخصائص يربك الـ Reducer ويجبرك على تذكر ما إذا كانت الخاصية text أو data أو info!",
          fix: "وحد التسمية دائماً باستخدام الكلمة القياسية العالمية: payload."
        }
      ],
      bestPractices: [
        "صف الأحداث بنمط إخباري يصف 'ماذا فعل المستخدم' وليس 'كيف يجب أن يتغير الـ State' (مثل: 'USER_CLICKED_LOGOUT' بدلاً من 'CLEAR_USER_DATA').",
        "احفظ أسماء الـ Types في كائن ثوابت ثابت ActionTypes لتفادي الأخطاء الإملائية."
      ],
      infographicCard: {
        type: "anatomy-card",
        title: "تشريح كائن الـ Action القياسي",
        fields: [
          { key: "type (إلزامي)", desc: "سلسلة نصية فريدة تصف الحدث مثل: 'CART_ADD_ITEM'" },
          { key: "payload (اختياري)", desc: "كائن أو رقم أو نص يحمل البيانات الجديدة المرفقة" }
        ]
      }
    },
    {
      id: "7.5.d",
      title: "استخدام dispatch",
      englishTerm: "Dispatching Actions to Trigger State Transitions",
      description: "الدالة التنفيذية التي يُرجعها خطاف useReducer (مثل: const [state, dispatch] = useReducer(...)). وظيفتها الوحيدة هي استقبال كائن الـ Action وإرساله فوراً إلى دالة الـ Reducer لتشغيل التحديث وإعادة تصيير المكون. تتميز دالة dispatch بأنها مستقرة المرجع في الذاكرة (Stable Reference) ولا تتغير هويتها بين الرندرات إطلاقاً.",
      realLifeAnalogy: "مثل زر إطلاق الصاروخ في منصة الإطلاق؛ الضغط على الزر (dispatch) يرسل الإشارة الكهربائية الفورية لنظام المحركات للبدء بالاشتعال والانطلاق وفق الخطة الموضوعة مسبقاً.",
      whyItMatters: "تمنحك وسيلة آمنة ونظيفة لتفويض عمليات التحديث؛ يمكنك تمرير دالة dispatch عبر Props أو Context إلى أعمق المكونات الأبناء دون أن تتسبب في أي إعادة تصيير غير ضرورية لأن مرجعها ثابت في الذاكرة للأبد.",
      syntax: "dispatch({ type: 'INCREMENT' });\ndispatch({ type: 'SET_QUERY', payload: 'نص البحث' });",
      simpleExample: `// استخدام useReducer واستدعاء dispatch بنقرة زر
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INC": return state + 1;
    case "DEC": return state - 1;
    default: return state;
  }
}

function SimpleDispatchDemo() {
  // إنشاء الخطاف: يستقبل الـ reducer والقيمة المبدئية
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2 font-mono">
      <p>العداد الحالي: <strong className="text-emerald-400">{count}</strong></p>
      <div className="flex gap-2 font-sans">
        {/* إرسال حدث الزيادة عبر دالة dispatch */}
        <button onClick={() => dispatch({ type: "INC" })} className="px-3 py-1 bg-indigo-600 rounded font-bold">
          زيادة +
        </button>
        {/* إرسال حدث النقصان عبر دالة dispatch */}
        <button onClick={() => dispatch({ type: "DEC" })} className="px-3 py-1 bg-rose-600 rounded font-bold">
          نقصان -
        </button>
      </div>
    </div>
  );
}`,
      advancedExample: `// لوحة تحكم لتسجيل حركة المعاملات المصرفية عبر استدعاءات dispatch المتعددة
import { useReducer } from "react";

function walletReducer(state, action) {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.payload,
        logs: [\`إيداع نقدي: +\${action.payload} ر.س\`, ...state.logs.slice(0, 3)]
      };
    case "WITHDRAW":
      if (state.balance < action.payload) {
        alert("⚠️ رصيدك الحالي لا يكفي لإتمام هذه العملية!");
        return state;
      }
      return {
        ...state,
        balance: state.balance - action.payload,
        logs: [\`سحب نقدي: -\${action.payload} ر.س\`, ...state.logs.slice(0, 3)]
      };
    default:
      return state;
  }
}

export function BankWalletDispatchStudio() {
  const [wallet, dispatch] = useReducer(walletReducer, {
    balance: 5000,
    logs: ["تم فتح المحفظة برصيد افتتاحي 5000 ر.س"]
  });

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto text-xs">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">محفظة الحساب المالي (dispatch)</h4>
        <span className="font-mono text-emerald-400 font-black text-sm">{wallet.balance} ر.س</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => dispatch({ type: "DEPOSIT", payload: 500 })}
          className="py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold transition-all text-white"
        >
          إيداع 500 ر.س 💵
        </button>
        <button
          onClick={() => dispatch({ type: "WITHDRAW", payload: 1000 })}
          className="py-2 bg-rose-600 hover:bg-rose-500 rounded-xl font-bold transition-all text-white"
        >
          سحب 1000 ر.س 💳
        </button>
      </div>

      <div className="space-y-1 pt-2 border-t border-slate-800 font-mono text-[10px]">
        <span className="text-slate-500 font-sans block mb-1">سجل العمليات الصادرة عن الـ Reducer:</span>
        {wallet.logs.map((log, i) => (
          <div key={i} className="p-2 bg-slate-950 rounded-lg text-slate-300 border border-slate-800">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يقوم المكون باستدعاء دالة dispatch مع إرسال نوع المعاملة والحمولة المالية، ويقوم الـ Reducer بفحص الرصيد وإجراء الحسابات وتحديث السجل بأمان تام.",
      commonMistakes: [
        {
          mistake: "تمرير نوع الإجراء كنص عادي مباشر لـ dispatch مثل: dispatch('INCREMENT') بدلاً من كائن { type: 'INCREMENT' }.",
          why: "تتوقع دوال الـ Reducer المنضبطة كائناً يحتوي على .type؛ تمرير نص مفرد يكسر تعبير switch(action.type) ويسبب قراءة undefined!",
          fix: "مرر دائماً كائناً صريحاً: dispatch({ type: 'INCREMENT' })."
        }
      ],
      bestPractices: [
        "تذكر: دالة dispatch لا تُرجع أي قيمة (return undefined)؛ لا تحاول كتابة const res = dispatch(...).",
        "استغل ثبات مرجع dispatch في مصفوفات الاعتماديات؛ لست مضطراً لوضع dispatch في [deps] لـ useEffect لأن React تضمن ثباته دائماً."
      ],
      infographicCard: {
        type: "flow-dispatch",
        title: "مسار تدفق الإجراء في useReducer",
        steps: [
          "1. المستخدم ينقر الزر: onClick",
          "2. إطلاق الحدث: dispatch({ type: 'ADD', payload: 10 })",
          "3. استلام الـ Reducer: reducer(currentState, action)",
          "4. خروج الحالة الجديدة (Next State) وإعادة رندر المكون بنقاء"
        ]
      }
    },
    {
      id: "7.5.e",
      title: "إدارة الحالات المعقدة",
      englishTerm: "Managing Complex State Objects with Multi-field Transitions",
      description: "المجال الحيوي الذي يتفوق فيه خطاف useReducer بجدارة ساحقة على useState: إدارة الحالات المترابطة المعقدة (Complex Multi-Field State). عندما تتطلب خطوة واحدة في التطبيق تغيير 4 أو 5 متغيرات في وقت واحد (مثل: تبديل حالة التحميل، تصفير رسائل الخطأ، تخزين الرد، وتحديث رقم الصفحة)، فإن استخدام useState ينتج عنه فوضى من التحديثات المتفرقة، بينما يجمعها useReducer في حالة واحدة منضبطة.",
      realLifeAnalogy: "مثل قيادة الطائرة النفاثة أثناء الهبوط؛ بضغطة زر واحدة على ذراع الهبوط 'Landing Gear'، تنزل العجلات الثلاث، وتفتح جنيحات المكابح الهوائية على الأجنحة، ويُخفض صوت المحرك آلياً في نفس الثانية بقرار واحد موحد.",
      whyItMatters: "يمنع ظهور حالات مستحيلة أو متناقضة في الواجهة (Impossible States)، مثل أن تكون حالة isLoading = true وحالة data موجودة وحالة error = true في نفس الوقت!",
      syntax: "const [state, dispatch] = useReducer(formReducer, initialComplexState);",
      simpleExample: `// إدارة حالة طلب شبكة معقدة (Loading + Data + Error) بـ useReducer
import { useReducer } from "react";

const initialState = { loading: false, data: null, error: null };

function fetchStateReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      // حالة موحدة تضمن تصفير الخطأ ورفع التحميل معاً
      return { loading: true, data: null, error: null };
    case "FETCH_SUCCESS":
      return { loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
}

function ComplexFetchStateDemo() {
  const [state, dispatch] = useReducer(fetchStateReducer, initialState);

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
      <p>الحالة: {state.loading ? "جارٍ التحميل..." : state.data || state.error || "خامل"}</p>
      <button 
        onClick={() => {
          dispatch({ type: "FETCH_START" });
          setTimeout(() => dispatch({ type: "FETCH_SUCCESS", payload: "بيانات الخادم جاهزة!" }), 1000);
        }}
        className="px-3 py-1 bg-indigo-600 rounded font-bold"
      >
        محاكاة الجلب
      </button>
    </div>
  );
}`,
      advancedExample: `// نظام تسجيل حساب مستخدم متعدد الحقول والشروط مع إدارة الأخطاء المعقدة
import { useReducer } from "react";

const initialForm = {
  step: 1,
  username: "",
  email: "",
  plan: "pro",
  termsAccepted: false,
  isSubmitting: false,
  submissionSuccess: false
};

function checkoutWizardReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: Math.min(state.step + 1, 3)
      };

    case "PREV_STEP":
      return {
        ...state,
        step: Math.max(state.step - 1, 1)
      };

    case "SUBMIT_START":
      return {
        ...state,
        isSubmitting: true
      };

    case "SUBMIT_COMPLETE":
      return {
        ...state,
        isSubmitting: false,
        submissionSuccess: true,
        step: 3
      };

    case "RESET":
      return initialForm;

    default:
      return state;
  }
}

export function MultiStepWizardStudio() {
  const [form, dispatch] = useReducer(checkoutWizardReducer, initialForm);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto text-xs">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">معالج التسجيل متعدد الخطوات (useReducer)</h4>
        <span className="font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded font-bold">
          الخطوة {form.step} من 3
        </span>
      </div>

      {form.step === 1 && (
        <div className="space-y-2">
          <label className="text-slate-300 block font-bold">البيانات الشخصية:</label>
          <input
            type="text"
            value={form.username}
            onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "username", value: e.target.value })}
            placeholder="اسم المستخدم..."
            className="w-full p-2 bg-slate-950 border border-slate-700 rounded-xl text-white"
          />
          <input
            type="email"
            value={form.email}
            onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })}
            placeholder="البريد الإلكتروني..."
            className="w-full p-2 bg-slate-950 border border-slate-700 rounded-xl text-white"
          />
        </div>
      )}

      {form.step === 2 && (
        <div className="space-y-2">
          <label className="text-slate-300 block font-bold">اختر باقة الاشتراك:</label>
          <select
            value={form.plan}
            onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "plan", value: e.target.value })}
            className="w-full p-2 bg-slate-950 border border-slate-700 rounded-xl text-white"
          >
            <option value="basic">الباقة الأساسية (مجاناً)</option>
            <option value="pro">الباقة الاحترافية (99 ر.س/شهر)</option>
            <option value="enterprise">باقة الشركات (499 ر.س/شهر)</option>
          </select>
        </div>
      )}

      {form.step === 3 && (
        <div className="p-4 bg-emerald-950/30 border border-emerald-800/40 rounded-2xl text-center space-y-2">
          <span className="text-3xl block">🎉</span>
          <h5 className="font-bold text-emerald-400">تهانينا! اكتمل التسجيل بنجاح</h5>
          <p className="text-[11px] text-slate-300">
            العضو: {form.username || "عضو تجريبي"} | الباقة: {form.plan.toUpperCase()}
          </p>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-white mt-2"
          >
            إعادة تعيين المعالج
          </button>
        </div>
      )}

      {form.step < 3 && (
        <div className="flex justify-between pt-2 border-t border-slate-800">
          <button
            onClick={() => dispatch({ type: "PREV_STEP" })}
            disabled={form.step === 1}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded-xl font-bold text-slate-300"
          >
            ← السابق
          </button>
          <button
            onClick={() => dispatch({ type: "NEXT_STEP" })}
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold text-white shadow-md shadow-indigo-900/40"
          >
            التالي →
          </button>
        </div>
      )}
    </div>
  );
}`,
      output: "يقوم useReducer بالتحكم في معالج متعدد الخطوات بسلاسة تامة، مع إمكانية تحديث أي حقل ديناميكياً وتنسيق الانتقال بين المراحل بأعلى موثوقية.",
      commonMistakes: [
        {
          mistake: "استخدام 6 أو 7 خطافات useState مستقلة لنفس النموذج المعقد ومحاولة مزامنتها بـ useEffects متداخلة.",
          why: "هذا يسبب كوداً مشوهاً لا يمكن صيانته وصعوبة بالغة في إعادة تعيين النموذج أو تتبعه.",
          fix: "استبدل الحالات المتعددة المترابطة بـ useReducer واحد يجمع كافة الحقول في كائن موحد."
        }
      ],
      bestPractices: [
        "استخدم نمط الإجراء الموحد UPDATE_FIELD مع تمرير اسم الحقل والقيمة لتجنب كتابة action type مستقل لكل حقل إدخال في النماذج الكبيرة."
      ],
      infographicCard: {
        type: "comparison-gauge",
        title: "متى ترقي من useState إلى useReducer؟",
        threshold: "إذا كان لديك أكثر من 3 حالات تتغير معاً استجابة لنفس الحدث = useReducer فوراً! 🚀"
      }
    },
    {
      id: "7.5.f",
      title: "التحديث غير القابل للتغيير داخل Reducer",
      englishTerm: "Immutability inside Reducer (Strict Non-Mutating Patterns)",
      description: "القواعد والضوابط الصارمة للامتناع عن تعديل الحالة الأصلية داخل دالة الـ Reducer. كما هو الحال في useState، يُحظر تماماً تعديل كائن state الممرر للدالة مباشرة (مثل: state.count++ أو state.todos.push()). يجب دائماً إرجاع كائن جديد بنسخ الخصائص بمعامل الانتشار ...state وتعديل المصفوفات بـ filter و map.",
      realLifeAnalogy: "مثل القاضي في المحكمة؛ عندما تصدر المحكمة حكماً جديداً في قضية استئناف، لا يأخذ القاضي صك الحكم القديم ليشطب عليه بالحبر، بل يكتب صكاً قضائياً جديداً بالكامل يحمل منطوق الحكم النهائي وتاريخ الجلسة الجديدة.",
      whyItMatters: "تعديل الـ State مباشرة داخل الـ Reducer يدمر خاصية المقارنة المرجعية السريعة (Object.is) ويمنع React من إدراك حدوث تغيير، مما يجمد الشاشة على بيانات قديمة.",
      syntax: "// ❌ خطأ: state.completed = true; return state;\n// ✅ سليم: return { ...state, completed: true };",
      simpleExample: `// مثال يوضح النسخ النقي بالـ Spread داخل الـ Reducer
function profileReducer(state, action) {
  switch (action.type) {
    case "UPDATE_CITY":
      // نسخ الكائن القديم واستبدال المدينة فقط بنقاء تام
      return {
        ...state,
        city: action.payload
      };
    default:
      return state;
  }
}

const original = { name: "سعد", city: "أبها" };
const updated = profileReducer(original, { type: "UPDATE_CITY", payload: "الطائف" });
console.log("هل تغير الكائن الأصلي؟", original.city); // "أبها" (سليم لم يتغير)
console.log("الكائن الجديد:", updated.city);           // "الطائف"
`,
      advancedExample: `// معالجة متقدمة لتحديث مصفوفة كائنات متشعبة داخل الـ Reducer بأعلى معايير الـ Immutability
export function complexCartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // فحص ما إذا كان المنتج موجوداً مسبقاً لزيادة كميته
      const existingIndex = state.items.findIndex((it) => it.id === action.payload.id);
      if (existingIndex > -1) {
        return {
          ...state,
          items: state.items.map((it, idx) =>
            idx === existingIndex ? { ...it, qty: it.qty + 1 } : it
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((it) => it.id !== action.payload)
      };

    default:
      return state;
  }
}

export function ReducerImmutabilityCard() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-3 max-w-md mx-auto text-xs">
      <h4 className="font-bold text-sm text-indigo-400">قوانين النقاء اللاتبديلي داخل الـ Reducer</h4>
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-[11px] font-mono">
        <p className="text-rose-400">❌ ممنوع: state.items.push(item)</p>
        <p className="text-emerald-400">✅ صواب: items: [...state.items, item]</p>
        <p className="text-rose-400">❌ ممنوع: state.user.age = 30</p>
        <p className="text-emerald-400">✅ صواب: user: { '{ ...state.user, age: 30 }' }</p>
      </div>
      <p className="text-[10px] text-slate-400">
        الالتزام بهذه الأنماط هو الضمان الوحيد لاكتشاف التغييرات وإعادة تصيير شاشتك فوراً.
      </p>
    </div>
  );
}`,
      output: "يتم تطبيق التحديثات اللاتبديلية داخل الـ Reducer بدقة متناهية ودون المساس بالذاكرة الأصلية.",
      commonMistakes: [
        {
          mistake: "استخدام الدوال المعدلة للأصل مثل state.list.sort() أو state.list.splice() داخل الـ Reducer.",
          why: "هذه الدوال تعدل نفس المصفوفة في مكانها، فتعتقد React أن الحالة لم تتغير وتفشل في تحديث الواجهة!",
          fix: "انسخ المصفوفة أولاً قبل فرزها: [...state.list].sort()، واستخدم filter للحذف."
        }
      ],
      bestPractices: [
        "إذا كانت شجرة البيانات عميقة جداً ومتشعبة، يمكنك الاستعانة بمكتبة Immer لتبسيط كتابة التحديثات اللاتبديلية بنمط يبدو كأنه تعديل مباشر."
      ],
      infographicCard: {
        type: "rule-box",
        title: "دستور النقاء داخل دالة الـ Reducer",
        rules: [
          "1. دالة نقية 100% بلا آثار جانبية أو استدعاءات عشوائية.",
          "2. حظر التعديل المباشر لكائن state إطلاقاً.",
          "3. دائماً كائن جديد بـ Spread (...) مع الحفاظ على بقية الخصائص."
        ]
      }
    },
    {
      id: "7.5.g",
      title: "تهيئة الحالة الأولية",
      englishTerm: "Lazy Initialization with init Argument in useReducer",
      description: "الميزة المتطورة في خطاف useReducer للتهيئة الكسولة للذاكرة (Lazy Initialization). يستقبل useReducer معاملاً ثالثاً اختيارياً يُدعى دالة التهيئة (init function): useReducer(reducer, initialArg, init). تقوم React بتمرير initialArg إلى دالة init لتشغيلها واستخراج الحالة الابتدائية فقط في أول رندر عند تركيب المكون، وتتجاهلها في الرندرات التالية.",
      realLifeAnalogy: "مثل تشغيل محطة تبريد مركزية ضخمة؛ بدلاً من أن تبدأ المحطة بالعمل بكامل طاقتها واستهلاك الكهرباء قبل وصول الموظفين بساعات، يتم ضبط مؤقت ذكي ليشغل دورة التبريد الثقيلة فقط عند أول لمسة لبطاقة الدخول للمبنى.",
      whyItMatters: "ممتاز جداً لقراءة البيانات الابتدائية من localStorage أو فك تشفير كوكيز أو إجراء عمليات حسابية ثقيلة دون تكرار تنفيذها في كل إعادة تصيير للمكون.",
      syntax: "const [state, dispatch] = useReducer(reducer, initialArg, initFunction);",
      simpleExample: `// التهيئة الكسولة لحالة الـ Reducer عبر دالة init
import { useReducer } from "react";

function myReducer(state, action) {
  if (action.type === "ADD") return state + 1;
  return state;
}

// دالة تهيئة تُنفذ مرة واحدة فقط في البداية
function initCount(initial) {
  console.log("⚡ تم تشغيل دالة init الثقيلة مرة واحدة فقط!");
  return initial * 10;
}

function LazyReducerDemo() {
  // تمرير initCount كمعامل ثالث
  const [count, dispatch] = useReducer(myReducer, 5, initCount);

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs space-y-1 font-mono">
      <p>القيمة الابتدائية المحسوبة كسولاً: <strong className="text-emerald-400">{count}</strong></p>
      <button onClick={() => dispatch({ type: "ADD" })} className="px-2 py-0.5 bg-indigo-600 rounded">
        +1
      </button>
    </div>
  );
}`,
      advancedExample: `// استعادة وإعادة تصفير الإعدادات من الذاكرة المحلية localStorage بنمط التهيئة الكسولة
import { useReducer } from "react";

const STORAGE_KEY = "my_app_preferences_v1";

function preferencesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SOUND":
      return { ...state, soundEnabled: !state.soundEnabled };
    case "RESET_TO_DEFAULTS":
      // إعادة استدعاء دالة التهيئة لإرجاع القيم النظيفة!
      return action.payload;
    default:
      return state;
  }
}

// دالة التهيئة الكسولة: تقرأ بأمان من الذاكرة المحلية أو تعتمد القيم الافتراضية
function initializePreferences(defaultValues) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (err) {
    console.warn("تعذر قراءة التخزين المحلي:", err);
  }
  return defaultValues;
}

export function LazyReducerStorageDemo() {
  const defaultSettings = { soundEnabled: true, volume: 80 };

  const [settings, dispatch] = useReducer(
    preferencesReducer,
    defaultSettings,
    initializePreferences
  );

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto text-xs">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">التهيئة الكسولة للـ Reducer (init)</h4>
        <span className="text-[10px] font-mono text-emerald-400">Lazy Loading</span>
      </div>

      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono space-y-1">
        <p>الأصوات مفعلة: {settings.soundEnabled ? "نعم 🔊" : "مكتوم 🔇"}</p>
        <p>مستوى الصوت الافتراضي: {settings.volume}%</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: "TOGGLE_SOUND" })}
          className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all text-white"
        >
          تبديل الصوت
        </button>
        <button
          onClick={() => dispatch({ type: "RESET_TO_DEFAULTS", payload: defaultSettings })}
          className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold border border-slate-700"
        >
          استعادة الأصل 🔄
        </button>
      </div>
    </div>
  );
}`,
      output: "تُقرأ البيانات من الذاكرة في أول رندر فقط وبأعلى سرعة ممكنة مع إتاحة إعادة تصفير الحالة بسهولة بتمرير القيم الأصلية لدالة الـ Reducer.",
      commonMistakes: [
        {
          mistake: "استدعاء دالة التهيئة مباشرة في المعامل الثاني مثل: useReducer(reducer, initializeSettings()) دون استخدام المعامل الثالث.",
          why: "وضع الأقواس () يجعل الدالة تنفذ في كل رندر للمكون وتكرر قراءة الـ localStorage وتثقل التطبيق دون فائدة!",
          fix: "مرر دالة التهيئة كمعامل ثالث دون أقواس: useReducer(reducer, defaultVal, initializeSettings)."
        }
      ],
      bestPractices: [
        "استخدم دالة init دائماً عندما تكون تهيئة الحالة تتطلب قراءة من localStorage أو حسابات مكلفة رياضياً.",
        "استغل دالة init لإعادة تصفير الحالة في زر Reset بتمرير نفس دالة التهيئة كـ payload."
      ],
      infographicCard: {
        type: "lazy-init-card",
        title: "المعامل الثالث لـ useReducer (Lazy Init)",
        formula: "useReducer(reducer, initialArg, initFn)"
      }
    },
    {
      id: "7.5.h",
      title: "الجمع بين useReducer وContext",
      englishTerm: "Combining useReducer + useContext (Lightweight Redux Architecture)",
      description: "النمط المعماري العالمي الأكثر قوة واعتماداً في عالم React الحديث لبناء منظومة إدارة حالة كاملة بدون مكتبات خارجية (Lightweight Redux Architecture). ندمج قوة useReducer في إدارة المنطق المعقد وقوة React Context في بث البيانات؛ فنقوم بتوفير الحالة (State) ودالة الإرسال (dispatch) عبر السياق لكافة أجزاء التطبيق.",
      realLifeAnalogy: "مثل شبكة القيادة العسكرية المركزية؛ قائد العمليات في غرفة القيادة العليا (useReducer) يضع الخطط ويتخذ القرارات، وشبكة الرادار واللاسلكي الموحدة (Context) تبث الأوامر وتستقبل تقارير الجنود الميدانيين في كافة الجبهات فوراً.",
      whyItMatters: "يمنحك 95% من مميزات مكتبة Redux الشهيرة بدون تثبيت أي باقة خارجية، وبكود نظيف تماماً وخالٍ من التعقيدات الزائدة.",
      syntax: "const [state, dispatch] = useReducer(myReducer, initial);\n<StateContext.Provider value={state}>\n  <DispatchContext.Provider value={dispatch}>\n    {children}\n  </DispatchContext.Provider>\n</StateContext.Provider>",
      simpleExample: `// هيكل الجمع بين useReducer و Context
import { createContext, useContext, useReducer } from "react";

const ScoreStateContext = createContext(null);
const ScoreDispatchContext = createContext(null);

function scoreReducer(state, action) {
  if (action.type === "ADD") return state + 10;
  return state;
}

function DeepScoreButton() {
  // استدعاء dispatch من أعماق الشجرة عبر السياق!
  const dispatch = useContext(ScoreDispatchContext);
  return (
    <button onClick={() => dispatch({ type: "ADD" })} className="px-3 py-1 bg-indigo-600 rounded text-xs font-bold text-white">
      +10 نقاط (من أعمق مكون)
    </button>
  );
}

function MiniReduxDemo() {
  const [score, dispatch] = useReducer(scoreReducer, 100);

  return (
    <ScoreStateContext.Provider value={score}>
      <ScoreDispatchContext.Provider value={dispatch}>
        <div className="p-4 bg-slate-900 rounded-xl text-white text-xs space-y-2">
          <p>النقاط الإجمالية: <strong className="text-emerald-400 font-mono">{score}</strong></p>
          <DeepScoreButton />
        </div>
      </ScoreDispatchContext.Provider>
    </ScoreStateContext.Provider>
  );
}`,
      advancedExample: `// معمارية Redux المصغرة الكاملة لتطبيق مهام ومشاريع عالمي (Mini-Redux Suite)
import { createContext, useContext, useReducer } from "react";

// 1. تعريف الحالات ودالة الـ Reducer المركزية
const TaskStateContext = createContext(null);
const TaskDispatchContext = createContext(null);

const initialTasksState = [
  { id: 1, title: "إنشاء معمارية useReducer + Context", done: true },
  { id: 2, title: "اختبار فحص الـ Dispatch الموحد", done: false }
];

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), title: action.payload, done: false }];
    case "TOGGLE":
      return state.map((t) => (t.id === action.payload ? { ...t, done: !t.done } : t));
    case "DELETE":
      return state.filter((t) => t.id !== action.payload);
    default:
      return state;
  }
}

// 2. الموفر الشامل المزدوج (State + Dispatch Provider)
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasksState);

  return (
    <TaskStateContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskStateContext.Provider>
  );
}

// 3. الخطافات المخصصة للقراءة والإرسال
export function useTasks() {
  const ctx = useContext(TaskStateContext);
  if (!ctx) throw new Error("useTasks must be used within TasksProvider");
  return ctx;
}

export function useTasksDispatch() {
  const ctx = useContext(TaskDispatchContext);
  if (!ctx) throw new Error("useTasksDispatch must be used within TasksProvider");
  return ctx;
}

// 4. المكونات المستهلكة
function TaskItemView({ task }) {
  const dispatch = useTasksDispatch();

  return (
    <div className="flex justify-between items-center p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
      <span
        onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}
        className={\`cursor-pointer select-none \${task.done ? "line-through text-slate-500" : "text-slate-200 font-bold"}\`}
      >
        {task.title}
      </span>
      <button
        onClick={() => dispatch({ type: "DELETE", payload: task.id })}
        className="text-slate-500 hover:text-rose-400 p-1 rounded"
      >
        ✕
      </button>
    </div>
  );
}

function TaskListView() {
  const tasks = useTasks();
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItemView key={task.id} task={task} />
      ))}
    </div>
  );
}

export function MiniReduxSuiteDemo() {
  return (
    <TasksProvider>
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
        <div className="flex justify-between items-center pb-2 border-b border-slate-800">
          <h4 className="font-bold text-sm text-indigo-400">معمارية useReducer + Context الشاملة</h4>
          <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
            Full Store Pattern
          </span>
        </div>
        <TaskListView />
      </div>
    </TasksProvider>
  );
}`,
      output: "بناء معمارية تشبه Redux بالكامل بنقاء مطلق وبدون أي حزم خارجية: المكونات تقرأ الحالة بـ useTasks() وترسل الأوامر بـ useTasksDispatch() بانسيابية فائقة.",
      commonMistakes: [
        {
          mistake: "وضع state و dispatch معاً في كائن واحد في سياق مفرد: <Context.Provider value={{ state, dispatch }}> دون فصلهما.",
          why: "هذا يلغي ميزة تحسين الأداء؛ فالمكونات التي تحتاج dispatch فقط ستُعاد تصييرها في كل مرة تتغير فيها أي خاصية في state!",
          fix: "افصل سياق الحالة StateContext عن سياق الإجراءات DispatchContext دائماً."
        }
      ],
      bestPractices: [
        "استخدم هذه المعمارية كبديلك الأول لمكتبات إدارة الحالة في التطبيقات المتوسطة والكبيرة قبل التفكير في تثبيت Redux Toolkit أو Zustand.",
        "عزل منطق الـ Provider والخطافات في ملف مستقل في مجلد src/context/."
      ],
      infographicCard: {
        type: "redux-pattern-card",
        title: "ثالوث معمارية Redux المصغرة في React",
        pillars: [
          "1. دالة الـ Reducer المركزية: تدير كافة العمليات المعقدة بنقاء تام",
          "2. موفر مزدوج Context: سياق للبيانات وسياق للأوامر dispatch",
          "3. خطافان مخصصان: useStoreState() و useStoreDispatch()"
        ]
      }
    },
    {
      id: "7.5.i",
      title: "الفرق بين useState وuseReducer",
      englishTerm: "useState vs useReducer: Complete Decision Matrix",
      description: "الدليل الاستشاري والمعماري الختامي لاختيار الأداة المثلى لإدارة الحالة في مكوناتك: متى يكفيك استخدام useState البسيط، ومتى يجب عليك حتماً الترقية إلى useReducer. يُلخص المعايير وفق: حجم الكود، سهولة القراءة، تعقيد منطق الأعمال، وسهولة الاختبار المعزول (Testing).",
      realLifeAnalogy: "مثل وسيلة التنقل؛ الدراجة الهوائية الخفيفة (useState) ممتازة وسريعة للذهاب للبقالة المجاورة في 3 دقائق، بينما الشاحنة الكبيرة (useReducer) إلزامية لنقل أثاث المنزل والبضائع الثقيلة ولا غنى عنها للمهام الضخمة.",
      whyItMatters: "يحميك من التعقيد الزائد في الحالات البسيطة، ويحميك من فوضى الأكواد في الحالات المعقدة.",
      syntax: "// useState: للحالات البسيطة المستقلة (1-3 متغيرات)\n// useReducer: للحالات المعقدة والمترابطة ومنطق الأعمال الضخم",
      simpleExample: `// مقارنة مباشرة بالرمز
import { useState, useReducer } from "react";

// خيار 1: useState بسيط لتبديل حالة
function ToggleSimple() {
  const [isOn, setIsOn] = useState(false);
  return <button onClick={() => setIsOn(!isOn)}>الوضع: {isOn ? "نعم" : "لا"}</button>;
}

// خيار 2: useReducer لحالة متعددة الأطراف
function WizardComplex() {
  const [state, dispatch] = useReducer((s, a) => ({ ...s, step: a.step }), { step: 1, valid: false });
  return <button onClick={() => dispatch({ step: 2 })}>الخطوة: {state.step}</button>;
}`,
      advancedExample: `// مصفوفة القرار الاستشارية التفاعلية الكاملة للمقارنة بين useState و useReducer
export function ReducerVsStateDecisionConsultant() {
  const decisionRules = [
    {
      criteria: "حجم الكود وسهولة الكتابة",
      useState: "كود قليل وسريع ومباشر بسطر واحد ✅",
      useReducer: "يتطلب تعريف reducer و actions و dispatch ⚠️"
    },
    {
      criteria: "تعقيد منطق الأعمال (Business Logic)",
      useState: "يتناثر المنطق داخل معالجات أحداث المكون",
      useReducer: "يُجمع كل منطق الأعمال في دالة نقية واحدة مركزية 🎯"
    },
    {
      criteria: "الحالات المترابطة المتشعبة",
      useState: "صعب ويسبب أخطاء تضارب وحالات مستحيلة",
      useReducer: "مثالي ومصمم خصيصاً لإدارة عدة حقول معاً 🏆"
    },
    {
      criteria: "سهولة الاختبار المعزول (Unit Testing)",
      useState: "يصعب اختباره بمعزل عن شاشة المكون",
      useReducer: "فائق السهولة: دالة نقية عادية تختبرها بـ Jest في ثوانٍ! 🧪"
    },
    {
      criteria: "القرار الهندسي المعتمد",
      useState: "ابدأ به دائماً في 80% من مكوناتك",
      useReducer: "انتقل إليه فوراً عندما تزيد تعقيدات الحالة"
    }
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-white p-5 max-w-lg mx-auto text-xs">
      <h4 className="font-bold text-sm text-indigo-400 mb-3">مصفوفة القرار: useState مقابل useReducer</h4>
      
      <table className="w-full text-right">
        <thead className="bg-slate-950/60 text-slate-400">
          <tr>
            <th className="p-2.5">المعيار الهندسي</th>
            <th className="p-2.5 text-emerald-400">useState</th>
            <th className="p-2.5 text-indigo-400">useReducer</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {decisionRules.map((r, i) => (
            <tr key={i} className="hover:bg-slate-800/40">
              <td className="p-2.5 font-bold text-slate-300">{r.criteria}</td>
              <td className="p-2.5 text-slate-200">{r.useState}</td>
              <td className="p-2.5 text-slate-200">{r.useReducer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
      output: "يقدم المكون توجيهاً معمارياً متكاملاً يساعد المطور في اختيار الأداة الأنسب لكل سيناريو عمل دون تردد.",
      commonMistakes: [
        {
          mistake: "استخدام useReducer لعداد بسيط أو زر فتح وإغلاق قائمة منسدلة صغيرة.",
          why: "هذا تعقيد مفرط (Over-engineering)؛ سطر واحد بـ useState(false) كافٍ ويفي بالغرض وزيادة.",
          fix: "استخدم useState للحالات البسيطة، واستخدم useReducer فقط عندما تلاحظ أن منطق الحالة بدأ يتعقد ويتشعب."
        }
      ],
      bestPractices: [
        "ابدأ دائماً بـ useState؛ وإذا وجدت أن الكود يحتاج تحديث 3 متغيرات مترابطة استجابة لحدث واحد، قم بإعادة هيكلته (Refactor) إلى useReducer فوراً."
      ],
      infographicCard: {
        type: "decision-cards",
        title: "قاعدة القرار الذهبية",
        cards: [
          { hook: "useState", verdict: "بيانات أولية (String, Number, Bool) ومنطق بسيط" },
          { hook: "useReducer", verdict: "كائنات متشعبة، خطوات متعددة، وحسابات مترابطة" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q7-5-1",
      question: "ما هي المدخلات والمخرجات الأساسية لدالة الـ Reducer في React؟",
      options: [
        "تأخذ ملف HTML وترجع ملف CSS",
        "تأخذ الحالة الحالية (Current State) وكائن الإجراء (Action)، وتُرجع الحالة الجديدة القادمة (Next State)",
        "تأخذ رابط الموقع وترجع استجابة الخادم",
        "تأخذ اسم المستخدم وترجع كلمة المرور"
      ],
      correctAnswer: 1,
      explanation: "دالة الـ Reducer هي دالة نقية رياضية صيغتها القياسية: (state, action) => newState تحسب الحالة الجديدة بناءً على نوع الحدث والبيانات المرفقة."
    },
    {
      id: "q7-5-2",
      question: "ما الفائدة الكبرى من ثبات مرجع دالة dispatch في useReducer؟",
      options: [
        "أنها تمنع المستخدم من كتابة رسائل في الحقول",
        "أن هويتها في الذاكرة ثابتة للأبد ولا تتغير بين الرندرات، مما يسمح بتمريرها للأبناء بأمان دون التسبب في إعادة تصييرهم",
        "أنها تحذف ملفات المشروع المؤقتة",
        "أنها تعمل بدون الحاجة لمتصفح إنترنت"
      ],
      correctAnswer: 1,
      explanation: "تضمن React أن مرجع دالة dispatch مستقر وثابت دائماً؛ وبالتالي تمريرها للأبناء لا يكسر الـ Memoization ولا يسبب رندرات زائدة."
    },
    {
      id: "q7-5-3",
      question: "كيف تحقق معمارية Redux خفيفة الوزن في تطبيقك دون تثبيت أي مكتبات خارجية؟",
      options: [
        "بحذف لغة جافاسكريبت واستخدام بايثون",
        "بالجمع بين خطاف useReducer لإدارة المنطق وخطاف useContext لبث الحالة ودالة dispatch عبر شجرة المكونات",
        "بكتابة كافة المتغيرات في ملف index.html",
        "باستخدام localStorage لكل الحالات"
      ],
      correctAnswer: 1,
      explanation: "الدمج بين useReducer لإدارة المنطق المعقد و React Context لنقل البيانات ودوال dispatch يمنحك متجراً مركزياً متكاملاً يشبه Redux تماماً وبكود نقي وخفيف."
    }
  ],
  exercise: {
    id: "ex7-5",
    title: "بناء نظام حجز تذاكر طيران متكامل بـ useReducer (State Machine)",
    description: "المطلوب بناء مكون تفاعلي باسم FlightBookingWizard يدير عملية حجز تذاكر طيران كاملة بـ useReducer: 1) يدير حالة متعددة الحقول (وجهة السفر، عدد المسافرين، درجة المقعد: اقتصادي/أعمال، الوجبة الإضافية، الإجمالي المالي)، 2) دالة Reducer نقية تستجيب لأحداث: SELECT_DESTINATION و SET_PASSENGERS و TOGGLE_MEAL و RESET، 3) حساب السعر الإجمالي تلقائياً داخل الـ Reducer بنقاء تام وبدون أي تعديل مباشر للأصل.",
    starterCode: `export function FlightBookingWizard() {
  // اكتب كود الـ Reducer والحجز هنا
  return (
    <div>
      {/* صمم المعالج */}
    </div>
  );
}`,
    hints: [
      "عرف الحالة الابتدائية: { destination: 'DXB', passengers: 1, isBusiness: false, meal: true, total: 1200 }.",
      "في دالة الـ Reducer: في كل case، احسب total الجديد بناءً على المسافرين والدرجة والوجهة وأرجعه في كائن جديد بـ Spread.",
      "استخدم dispatch({ type: '...', payload: ... }) في كافة الأزرار وحقول الإدخال."
    ],
    solution: `import { useReducer } from "react";

// بيانات أسعار الوجهات
const DESTINATIONS = {
  DXB: { name: "دبي (DXB)", basePrice: 1200 },
  LHR: { name: "لندن (LHR)", basePrice: 2800 },
  IST: { name: "إسطنبول (IST)", basePrice: 1600 }
};

const initialBooking = {
  destination: "DXB",
  passengers: 1,
  isBusiness: false,
  hasMeal: true,
  totalPrice: 1250
};

// دالة مساعدة نقية لحساب السعر الإجمالي
function calculateTotal(destination, passengers, isBusiness, hasMeal) {
  const base = DESTINATIONS[destination].basePrice;
  const seatMultiplier = isBusiness ? 2.2 : 1;
  const mealCost = hasMeal ? 50 : 0;
  return Math.round((base * seatMultiplier + mealCost) * passengers);
}

// دالة الـ Reducer المركزية
function bookingReducer(state, action) {
  switch (action.type) {
    case "SET_DESTINATION": {
      const nextDest = action.payload;
      return {
        ...state,
        destination: nextDest,
        totalPrice: calculateTotal(nextDest, state.passengers, state.isBusiness, state.hasMeal)
      };
    }

    case "SET_PASSENGERS": {
      const count = Math.max(1, Math.min(action.payload, 8)); // بين 1 و 8 مسافرين
      return {
        ...state,
        passengers: count,
        totalPrice: calculateTotal(state.destination, count, state.isBusiness, state.hasMeal)
      };
    }

    case "TOGGLE_BUSINESS": {
      const nextBusiness = !state.isBusiness;
      return {
        ...state,
        isBusiness: nextBusiness,
        totalPrice: calculateTotal(state.destination, state.passengers, nextBusiness, state.hasMeal)
      };
    }

    case "TOGGLE_MEAL": {
      const nextMeal = !state.hasMeal;
      return {
        ...state,
        hasMeal: nextMeal,
        totalPrice: calculateTotal(state.destination, state.passengers, state.isBusiness, nextMeal)
      };
    }

    case "RESET":
      return initialBooking;

    default:
      return state;
  }
}

export function FlightBookingWizard() {
  const [booking, dispatch] = useReducer(bookingReducer, initialBooking);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-5 max-w-md mx-auto font-sans shadow-2xl">
      <div className="flex justify-between items-center pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-black text-slate-100">حجز تذاكر الطيران الذكي</h3>
          <p className="text-[11px] text-slate-400">إدارة آلة الحالات المعقدة بنقاء تام عبر useReducer</p>
        </div>
        <span className="text-2xl">✈️</span>
      </div>

      {/* اختيار الوجهة */}
      <div className="space-y-1.5">
        <label className="text-xs text-slate-300 font-bold block">اختر وجهة السفر:</label>
        <div className="grid grid-cols-3 gap-2">
          {Object.keys(DESTINATIONS).map((code) => (
            <button
              key={code}
              onClick={() => dispatch({ type: "SET_DESTINATION", payload: code })}
              className={\`p-2.5 rounded-xl text-xs font-bold transition-all border \${
                booking.destination === code
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-900/40"
                  : "bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800"
              }\`}
            >
              {DESTINATIONS[code].name}
            </button>
          ))}
        </div>
      </div>

      {/* عدد المسافرين */}
      <div className="flex justify-between items-center p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs">
        <span className="text-slate-300 font-medium">عدد المسافرين (1 - 8):</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch({ type: "SET_PASSENGERS", payload: booking.passengers - 1 })}
            className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 font-bold text-slate-200"
          >
            -
          </button>
          <span className="font-mono font-bold text-sm text-indigo-400 w-4 text-center">
            {booking.passengers}
          </span>
          <button
            onClick={() => dispatch({ type: "SET_PASSENGERS", payload: booking.passengers + 1 })}
            className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 font-bold text-slate-200"
          >
            +
          </button>
        </div>
      </div>

      {/* خيارات إضافية (درجة الأعمال والوجبة) */}
      <div className="space-y-2 text-xs">
        <div 
          onClick={() => dispatch({ type: "TOGGLE_BUSINESS" })}
          className="flex justify-between items-center p-3 bg-slate-950 rounded-2xl border border-slate-800 cursor-pointer select-none"
        >
          <span>ترقية لدرجة رجال الأعمال (VIP):</span>
          <span className={\`font-bold \${booking.isBusiness ? "text-amber-400" : "text-slate-500"}\`}>
            {booking.isBusiness ? "مفعلة 👑" : "اقتصادية"}
          </span>
        </div>

        <div 
          onClick={() => dispatch({ type: "TOGGLE_MEAL" })}
          className="flex justify-between items-center p-3 bg-slate-950 rounded-2xl border border-slate-800 cursor-pointer select-none"
        >
          <span>إضافة وجبة طعام ساخنة (+50 ر.س):</span>
          <span className={\`font-bold \${booking.hasMeal ? "text-emerald-400" : "text-slate-500"}\`}>
            {booking.hasMeal ? "مضافة 🍱" : "بدون وجبة"}
          </span>
        </div>
      </div>

      {/* الملخص المالي المحسوب بنقاء في الـ Reducer */}
      <div className="p-4 bg-slate-950 rounded-2xl border border-indigo-500/30 flex justify-between items-center">
        <div>
          <span className="text-[10px] text-slate-400 uppercase block">السعر الإجمالي النهائي:</span>
          <span className="text-2xl font-black font-mono text-emerald-400">
            {booking.totalPrice.toLocaleString()} ر.س
          </span>
        </div>

        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="text-xs px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-xl transition-colors"
        >
          إعادة تعيين 🔄
        </button>
      </div>
    </div>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان useReducer الشاملة",
    description: "الدليل المرئي لإدارة الحالات المعقدة، كائنات الإجراءات، وآلة الحالات النقية.",
    sections: [
      {
        heading: "1. قواعد الـ Reducer الصارمة",
        bullets: [
          "دالة نقية 100%: (state, action) => nextState بدون آثار جانبية.",
          "كائن Action قياسي: يحمل type إلزامي و payload اختياري.",
          "دالة dispatch مستقرة: لا تتغير هويتها بين الرندرات."
        ]
      },
      {
        heading: "2. مجالات التميز (When useReducer Wins)",
        bullets: [
          "الحالات المتعددة المترابطة: تغيير عدة حقول استجابة لحدث واحد.",
          "تجنب الحالات المستحيلة: منع التضارب بين التحميل والأخطاء.",
          "معمارية Mini-Redux: بالدمج مع React Context لإدارة الحالة العامة."
        ]
      },
      {
        heading: "3. التهيئة والتحسين",
        bullets: [
          "دالة init الكسولة: المعامل الثالث لقراءة الـ localStorage مرة واحدة.",
          "فصل السياقات: StateContext للبيانات و DispatchContext للأوامر."
        ]
      }
    ]
  }
};
