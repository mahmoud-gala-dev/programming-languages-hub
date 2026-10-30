// src/data/sections/section12/topic2.js
// القسم 12: إدارة الحالة المتقدمة - الموضوع 2: Redux Toolkit

export const topic2 = {
  id: "12.2",
  title: "Redux Toolkit",
  description: "المرجع المعياري الشامل لأقوى مكتبة إدارة حالة في منظومة React: حزمة Redux Toolkit (RTK) الحديثة، ومبادئ تدفق البيانات أحادي الاتجاه (Unidirectional Data Flow)، وبناء المخزن المركزي بـ configureStore والشرائح بـ createSlice، واستخدام خطافي useSelector و useDispatch، وإدارة العمليات غير المتزامنة بـ createAsyncThunk، وتطبيع البيانات بـ createEntityAdapter، وتتبع الأحداث بـ Redux DevTools.",
  subtopics: [
    {
      id: "12.2.a",
      title: "مفهوم Redux",
      englishTerm: "Redux Fundamentals (مَفْهُومُ رِيدَكْس: إدارة الحالة المركزية الصارمة)",
      description: "مكتبة Redux هي نمط ومكتبة برمجية لإدارة وتوقع حالة التطبيق المركزية (Centralized State Container). تقوم على ثلاثة مبادئ مقدسة: 1) مصدر الحقيقة الوحيد (Single Source of Truth): كل حالة التطبيق تعيش في شجرة كائنات واحدة داخل مخزن مركزي يسمى Store؛ 2) الحالة للقراءة فقط (State is Read-Only): الطريقة الوحيدة لتغيير الحالة هي إرسال كائن إجراء (Action) يصف ما حدث؛ 3) التغييرات تتم بدوال نقية (Pure Reducers): دوال تستقبل الحالة الحالية والإجراء وتحسب الحالة التالية دون أي تعديل مباشر على الأصل (Immutability).",
      analogy: "مثل البنك المركزي المحكم: أموال وحسابات العملاء (State) لا يمكن لأي موظف أو عميل أن يمد يده في الخزنة ويأخذ منها مباشرة؛ بل يجب تقديم استمارة طلب رسمية مختومة (Action) توضح رقم الحساب والمبلغ، ويقوم نظام البنك المصرفي الآلي (Reducer) بمعالجة الطلب وتحديث الرصيد بدقة وتسجيل كل هللة في دفتر الحسابات العام (Store).",
      whyItMatters: "يوفر أعلى درجات القابلية للتوقع (Predictability) وسهولة تتبع الأخطاء واختبار النظام، مما يجعله المعيار المفضل لدى البنوك والشركات العالمية الكبرى في أنظمتها الحساسة.",
      syntax: "Action (Event) ---> Dispatch ---> Reducer (Pure Function) ---> New State in Store ---> UI Re-renders",
      simpleExample: `// مثال مفاهيمي يوضح الركائز الثلاث لـ Redux الصرف
// 1. الحالة الابتدائية
const initialState = { count: 0 };

// 2. دالة المخفض النقية (Reducer)
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/increment':
      // حساب حالة جديدة دون تعديل الأصل
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

// 3. الإجراء (Action)
const incrementAction = { type: 'counter/increment' };

// تطبيق الإجراء:
const nextState = counterReducer(initialState, incrementAction);
console.log('الحالة الجديدة بعد الإجراء:', nextState); // { count: 1 }`,
      advancedExample: `// مقارنة عملية بين تعديل الحالة غير المنضبط ونمط Redux المتوقع
// الطريقة الخطرة (Mutable State):
const badState = { balance: 1000 };
badState.balance = 500; // تم التعديل خلسة، لا أحد يعلم من قام بالتعديل أو متى أو لماذا!

// طريقة Redux الاحترافية (Auditable State Flow):
class SafeStore {
  constructor(reducer, initial) {
    this.reducer = reducer;
    this.state = initial;
    this.listeners = [];
  }

  getState() { return this.state; }

  // إرسال الإجراءات وتحديث الحالة وتنبيه المشتركين
  dispatch(action) {
    console.log('⚡ تم إرسال الإجراء:', action.type, action.payload || '');
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => { this.listeners = this.listeners.filter(l => l !== listener); };
  }
}`,
      output: "نظام إدارة حالة فائق الدقة والتوقع يسجل كل تغيير كإجراء رسمي يمكن مراقبته وتتبعه زمنياً.",
      commonMistakes: [
        {
          mistake: "تعديل كائن الحالة مباشرة داخل دالة reducer مثل state.count++ في Redux القديم.",
          fix: "يجب دائماً إرجاع كائن جديد منسوخ، أو الاعتماد على Redux Toolkit المدمج بمكتبة Immer.",
          explanation: "تعديل الحالة مكانياً يكسر مقارنة المراجع السطحية في React ويمنع إعادة تصيير المكونات."
        }
      ],
      bestPractices: [
        "استخدم دائماً حزمة Redux Toolkit الرسمية وتجنب تماماً كتابة Redux القديم (Legacy Redux) من الصفر.",
        "اجعل كائنات الإجراءات تحمل أسماء ذات دلالة تصف الحدث مثل 'cart/itemAdded' بدلاً من أوامر عامة."
      ],
      infographic: {
        title: "المبادئ الثلاثة الأساسية لـ Redux",
        elements: [
          { label: "1. Single Source of Truth", role: "شجرة حالة واحدة مركزية تضم كافة بيانات التطبيق المشتركة", color: "blue" },
          { label: "2. State is Read-Only", role: "لا تعديل مباشر إطلاقاً؛ الإجراءات Actions هي الطريقة الوحيدة", color: "amber" },
          { label: "3. Pure Reducers", role: "دوال نقية تحسب الحالة التالية بدقة استناداً إلى (state, action)", color: "emerald" },
          { label: "سجل التدقيق الكامل", role: "كل تغيير في التطبيق مسجل زمنياً وقابل للتتبع والتراجع", color: "purple" }
        ]
      }
    },
    {
      id: "12.2.b",
      title: "تدفق البيانات أحادي الاتجاه",
      englishTerm: "Unidirectional Data Flow (تَدَفُّقُ البَيَانَاتِ أُحَادِيُّ الاِتِّجَاه: دورة الحركة الدائرية المغلقة)",
      description: "تدفق البيانات أحادي الاتجاه في Redux يضمن أن البيانات تسير دائماً في اتجاه واحد لا رجعة فيه ولا عشوائية فيه: 1) تعرض واجهة المستخدم (View) الحالة الحالية المخزنة في Store؛ 2) عند حدوث تفاعل ينقر المستخدم على زر، فيقوم المكون بإطلاق إجراء (Dispatch Action)؛ 3) يستقبل المخزن الإجراء ويمرره لدالة الـ Reducer؛ 4) تحسب الدالة الحالة الجديدة وتحفظها في الـ Store؛ 5) يستشعر المكون تحديث الـ Store ويعيد رسم نفسه بالبيانات الجديدة.",
      analogy: "مثل حزام نقل الحقائب الدائري في صالة الوصول بالمطار: الحقائب تسير دائماً في مسار دائري باتجاه واحد محدد؛ لا يمكن لحقيبة أن تسير فجأة بالاتجاه المعاكس أو تقفز عشوائياً، مما يمنع تصادم الحقائب وفوضى الصالة.",
      whyItMatters: "يلغي تماماً مشاكل التزامن المعقدة وتأثيرات الجوانب الخفية (Side Effects) المتشابكة، ويجعل حركة كل بايت في تطبيقك واضحة وقابلة للرسم البياني.",
      syntax: "View (User Click) ---> dispatch(action) ---> Reducer ---> Store Update ---> View Re-render",
      simpleExample: `// رسم مسار التدفق أحادي الاتجاه في كود بسيط
// 1. الحالة في المتجر
let storeState = { likes: 10 };

// 2. دالة الـ Reducer
function likesReducer(state, action) {
  if (action.type === 'LIKE') return { likes: state.likes + 1 };
  return state;
}

// 3. نقر المستخدم على زر الإعجاب في الواجهة (View Click)
function onLikeButtonClick() {
  // إطلاق الإجراء في اتجاه واحد
  const action = { type: 'LIKE' };
  // تحديث المتجر
  storeState = likesReducer(storeState, action);
  // إعادة رسم الواجهة
  renderView(storeState);
}

function renderView(state) {
  console.log('عدد الإعجابات المعروض على الشاشة:', state.likes);
}`,
      advancedExample: `// محاكي لدورة تدفق البيانات أحادية الاتجاه مع طباعة مسار الحدث
function createFlowSimulator() {
  let state = { cartTotal: 0, items: [] };

  function reducer(currentState, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          cartTotal: currentState.cartTotal + action.payload.price,
          items: [...currentState.items, action.payload.name],
        };
      default:
        return currentState;
    }
  }

  return {
    dispatch(action) {
      console.log('--- [1. انطلاق الإجراء من الواجهة] --->', action.type);
      console.log('--- [2. معالجة في المخفض Reducer] --->');
      state = reducer(state, action);
      console.log('--- [3. تم تحديث المتجر Store بنجاح] --->', state);
      console.log('--- [4. تحديث مكونات الواجهة View تلقائياً] ---');
    },
    getState: () => state,
  };
}

const flowApp = createFlowSimulator();
flowApp.dispatch({ type: 'ADD_ITEM', payload: { name: 'لوحة مفاتيح', price: 80 } });`,
      output: "سلسلة خطوات دائرية منضبطة تبدأ من نقرة المستخدم وتمر بالمخفض وتعود لتحديث الشاشة بانتظام تام.",
      commonMistakes: [
        {
          mistake: "محاولة تعديل الحالة من داخل واجهة العرض View دون المرور بـ dispatch(action).",
          fix: "التزم دائماً بإرسال إجراء Dispatch لكل عملية تغيير.",
          explanation: "كسر تدفق البيانات أحادي الاتجاه يعيد التطبيق إلى فوضى الحالات غير المتوقعة (Two-Way Binding Chaos)."
        }
      ],
      bestPractices: [
        "اجعل كائنات الإجراءات Actions مجرد أوصاف مقتضبة للحدث (Events) وليست دوالاً لتعديل البيانات.",
        "عزل التأثيرات الجانبية للشبكة (Async APIs) خارج دوال الـ Reducer واجعل الـ Reducers نقية 100%."
      ],
      infographic: {
        title: "دورة تدفق البيانات أحادية الاتجاه في Redux",
        elements: [
          { label: "1. View (الواجهة)", role: "المستخدم ينقر زراً أو يدخل نصاً في شاشة التطبيق", color: "blue" },
          { label: "2. Action (الإجراء)", role: "توليد كائن يصف الحدث: { type: 'cart/add', payload: item }", color: "amber" },
          { label: "3. Reducer (المخفض)", role: "حساب الحالة الجديدة بطريقة نقية دون تعديل الأصل", color: "purple" },
          { label: "4. Store (المخزن)", role: "حفظ الحالة الجديدة وإخطار المكونات لإعادة الرندر فوراً", color: "emerald" }
        ]
      }
    },
    {
      id: "12.2.c",
      title: "تثبيت Redux Toolkit وReact Redux",
      englishTerm: "Installing @reduxjs/toolkit & react-redux (تَثْبِيتُ حُزْمَةِ رِيدَكْس تُولْكِيت وَالرَّابِطِ الرَّسْمِيّ)",
      description: "لبدء استخدام Redux في تطبيق React الحديث، نحتاج إلى تثبيت حزمتين معتمدتين معاً: 1) `@reduxjs/toolkit` (وتسمى اختصاراً RTK): وهي الحزمة الرسمية الموصى بها التي تحتوي على كافة الأدوات العصرية مثل `configureStore` و `createSlice` وتدمج محرك Immer و Redux Thunk افتراضياً؛ 2) `react-redux`: وهي طبقة الربط الرسمية التي تتيح لمكونات React التحدث مع متجر Redux عبر خطافي `useSelector` و `useDispatch` وموفر السياق `<Provider>`.",
      analogy: "مثل شراء جهاز حاسوب متطور ومعه كابل التوصيل بالشاشة: حزمة @reduxjs/toolkit هي المعالج والذاكرة والمحرك الداخلي، بينما حزمة react-redux هي كابل الـ HDMI الذي يربط المحرك بشاشة العرض لترى النتائج بعينك.",
      whyItMatters: "حزمة Redux Toolkit تلغي 80% من الكود المكرر والملل القديم لـ Redux (Boilerplate) وتضبط الإعدادات المثالية والأمان والاتصال بـ DevTools تلقائياً بضغطة زر.",
      syntax: "npm install @reduxjs/toolkit react-redux",
      simpleExample: `// أمر التثبيت في سطر الأوامر (Terminal):
// npm install @reduxjs/toolkit react-redux

// فحص الحزم المثبتة في ملف package.json:
// {
//   "dependencies": {
//     "@reduxjs/toolkit": "^2.5.0",
//     "react-redux": "^9.2.0"
//   }
// }

// استيراد الدوال الأساسية لبدء بناء المتجر:
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';`,
      advancedExample: `// مثال على التأكد البرمجي من تهيئة موفر Redux Provider في مدخل التطبيق
import React from 'react';
import ReactDOM from 'react-dom/client';
// استيراد موفر Redux الرسمي
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

// إنشاء متجر فارغ مؤقت للتحقق
const store = configureStore({
  reducer: {
    system: (state = { ready: true }) => state,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* تغليف التطبيق بالكامل بـ Provider وتمرير المتجر المركزي */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);`,
      output: "جاهزية تامة لتطبيق React للاستفادة من قدرات Redux Toolkit وإتاحة المتجر لكافة المكونات.",
      commonMistakes: [
        {
          mistake: "تثبيت حزمة redux القديمة مجردة بدون toolkit: npm install redux.",
          fix: "استخدم دائماً @reduxjs/toolkit فهو المعيار الحديث الرسمي والموصى به من فريق Redux.",
          explanation: "حزمة redux القديمة أصبحت مهجورة وتتطلب إعدادات يدوية معقدة ومكتبات إضافية."
        },
        {
          mistake: "نسيان تغليف التطبيق بمكون <Provider store={store}>.",
          fix: "تأكد من تغليف شجرة المكونات بموفر Provider وتمرير خاصية store.",
          explanation: "بدون Provider، ستفشل خطافات useSelector و useDispatch وتقذف استثناء 'could not find react-redux context value'."
        }
      ],
      bestPractices: [
        "احرص دائماً على تثبيت كلا الحزمتين معاً: @reduxjs/toolkit للنواة و react-redux للربط بالواجهة.",
        "ضع <Provider> في أعلى مستوى للتطبيق (في main.jsx أو index.jsx) لضمان وصول كافة الصفحات للمتجر."
      ],
      infographic: {
        title: "حزمتا العمل الأساسيتان لـ Redux في React",
        elements: [
          { label: "@reduxjs/toolkit (RTK)", role: "نواة المتجر، إنشاء الشرائح، دمج Immer و Thunk وضبط DevTools", color: "purple" },
          { label: "react-redux", role: "جسر التواصل مع واجهات React عبر <Provider> و useSelector و useDispatch", color: "blue" },
          { label: "أمر التثبيت", role: "npm install @reduxjs/toolkit react-redux", color: "emerald" },
          { label: "النتيجة", role: "بنية إدارة حالة معيارية متكاملة وسريعة بدون تعقيدات", color: "amber" }
        ]
      }
    },
    {
      id: "12.2.d",
      title: "إنشاء Store باستخدام configureStore",
      englishTerm: "Creating the Store with configureStore (إِنْشَاءُ المَخْزَنِ المَرْكَزِيّ: قلب تطبيق Redux)",
      description: "دالة `configureStore()` هي الدالة الرسمية في Redux Toolkit لإنشاء المخزن المركزي (The Store). تقوم بتبسيط إعداد المتجر تلقائياً في خطوة واحدة: تجمع مخفضات الشرائح (Slice Reducers)، وتدمج البرمجيات الوسيطة الأساسية (Middleware مثل redux-thunk لإدارة العمليات غير المتزامنة)، وتفحص أخطاء تعديل الحالة المباشرة (Immutability Check)، وتفعل الاتصال بإضافة المتصفح الشهيرة Redux DevTools تلقائياً دون الحاجة لأي سطر إضافي.",
      analogy: "مثل إعداد السيرفر المركزي في غرفة تكنولوجيا المعلومات بالشركة: تأتي الدالة كوحدة سيرفر مجهزة مسبقاً بنظام التشغيل، وجدران الحماية، وبرامج مراقبة الشبكة، وتوصيلات الكابلات؛ تضعها في القابس وتعمل فوراً بكل جاهزية.",
      whyItMatters: "استبدلت دالة createStore القديمة التي كانت تتطلب 30 سطراً من الأكواد اليدوية لدمج الـ Thunk والـ DevTools، وقدمت أماناً معمارياً يمنع أخطاء التطوير الشائعة.",
      syntax: "export const store = configureStore({\n  reducer: {\n    counter: counterReducer,\n    auth: authReducer,\n  },\n});",
      simpleExample: `import { configureStore } from '@reduxjs/toolkit';

// مخفض بسيط تجريبي
function themeReducer(state = { isDark: true }, action) {
  if (action.type === 'TOGGLE_THEME') return { isDark: !state.isDark };
  return state;
}

// إنشاء المخزن المركزي وتصديره
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

console.log('حالة المتجر الابتدائية:', store.getState()); // { theme: { isDark: true } }`,
      advancedExample: `// تكوين متجر مؤسسي متكامل يجمع عدة شرائح مع وسائط مخصصة (Custom Middleware)
import { configureStore } from '@reduxjs/toolkit';

// برمجية وسيطة مخصصة لتسجيل كافة الإجراءات في وحدة التحكم
const actionLoggerMiddleware = (storeApi) => (next) => (action) => {
  console.group('🚀 إرسال إجراء جديد: ' + action.type);
  console.log('الحالة السابقة:', storeApi.getState());
  console.log('بيانات الإجراء Payload:', action.payload);
  const result = next(action);
  console.log('الحالة التالية المحدثة:', storeApi.getState());
  console.groupEnd();
  return result;
};

// إنشاء المتجر المركزي المتقدم
export const masterStore = configureStore({
  reducer: {
    // هنا تضاف كافة مخفضات الشرائح مثل cartReducer و userReducer
    systemLogs: (state = []) => state,
  },
  // دمج الوسيطة المخصصة مع وسائط Redux Toolkit الافتراضية
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true, // فحص عدم تمرير دوال أو كائنات غير قابلة للتسلسل
    }).concat(actionLoggerMiddleware),
  devTools: process.env.NODE_ENV !== 'production', // تفعيل DevTools في بيئة التطوير فقط
});`,
      output: "مخزن بيانات مركزي موحد، محمي ومراقب بدقة ومجهز بكافة وسائط الأمان والتحكم.",
      commonMistakes: [
        {
          mistake: "تمرير دالة مخفض واحدة مباشرة لخاصية reducer بدلاً من كائن يجمع الشرائح: configureStore({ reducer: myReducer }).",
          fix: "مرر كائناً يحدد أسماء المفاتيح: configureStore({ reducer: { mySlice: myReducer } }).",
          explanation: "تمرير كائن يسمح بتقسيم حالة التطبيق إلى أقسام منطقية منظمة (مثل store.cart و store.user)."
        }
      ],
      bestPractices: [
        "أنشئ المتجر في ملف مخصص باسم `src/store/index.js` أو `src/app/store.js`.",
        "صدّر المتجر كـ export const store لتمريره لـ <Provider store={store}> في جذر التطبيق."
      ],
      infographic: {
        title: "ماذا تقدم دالة configureStore() تلقائياً؟",
        elements: [
          { label: "دمج المخفضات", role: "تجميع مخفضات الشرائح المختلفة عبر combineReducers داخلياً", color: "blue" },
          { label: "دعم Thunk التلقائي", role: "تفعيل وسيطة redux-thunk لإدارة العمليات غير المتزامنة والـ APIs", color: "emerald" },
          { label: "Redux DevTools", role: "ربط المتجر بإضافة المتصفح فوراً بدون أي إعدادات إضافية", color: "purple" },
          { label: "فحص الأخطاء والـ Immutability", role: "تحذير المطور فوراً إذا حاول تعديل الحالة أو تمرير بيانات غير متسلسلة", color: "amber" }
        ]
      }
    },
    {
      id: "12.2.e",
      title: "إنشاء Slice باستخدام createSlice",
      englishTerm: "Creating Slices with createSlice (إِنْشَاءُ الشَّرَائِحِ: دمج الحالة والمخفضات والإجراءات)",
      description: "دالة `createSlice()` هي الابتكار الأبرز في Redux Toolkit: تتيح لك تعريف شريحة كاملة من حالة التطبيق (مثل شريحة المستخدم أو شريحة السلة) في مكان واحد مدمج. تستقبل كائن إعدادات يحدد: اسم الشريحة `name`، والحالة الابتدائية `initialState`، وكائن المخفضات `reducers`. يقوم createSlice تلقائياً بتوليد منشئات الإجراءات (Action Creators) ودالة المخفض (Reducer) ومطابقة أنواع الإجراءات تلقائياً.",
      analogy: "مثل قسم مستقل داخل شركة تجارية (قسم المبيعات أو قسم الموارد البشرية): كل قسم له ميزانيته الابتدائية، ولوائحه التنظيمية الخاصة، وموظفوه المستقلون، وتتعامل معه الإدارة العامة كوحدة عمل مكتملة.",
      whyItMatters: "قضت تماماً على الحاجة لإنشاء 3 ملفات منفصلة لكل ميزة (ملف actions، ملف constants، وملف reducer)، وجمعت كل شيء في ملف واحد أنيق.",
      syntax: "const mySlice = createSlice({\n  name: 'feature',\n  initialState: { ... },\n  reducers: { ... }\n});",
      simpleExample: `import { createSlice } from '@reduxjs/toolkit';

// إنشاء شريحة العداد Counter Slice
export const counterSlice = createSlice({
  // اسم الشريحة (يستخدم كبادئة لأسماء الإجراءات)
  name: 'counter',
  // الحالة الابتدائية للشريحة
  initialState: { value: 0 },
  // كائن المخفضات
  reducers: {
    increment: (state) => {
      // بفضل مكتبة Immer المدمجة، يمكننا كتابة كود يبدو كأنه تعديل مباشر!
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// تصدير منشئات الإجراءات المولدة تلقائياً
export const { increment, decrement, reset } = counterSlice.actions;

// تصدير دالة المخفض لدمجها في المتجر العام
export default counterSlice.reducer;`,
      advancedExample: `import { createSlice } from '@reduxjs/toolkit';

// شريحة متقدمة لإدارة سلة المشتريات مع تمرير Payload والتحكم في الكميات
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // [{ id, title, price, quantity }]
    totalAmount: 0,
  },
  reducers: {
    // إضافة منتج جديد أو زيادة كميته إذا كان موجوداً
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
      state.totalAmount += newItem.price;
    },

    // إنقاص كمية منتج أو حذفه إذا أصبحت الكمية صفراً
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount -= existingItem.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },

    // تفريغ السلة بالكامل
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;`,
      output: "توليد تلقائي لكافة الإجراءات والمخفضات بنقاء تام وسهولة مذهلة في قراءة وكتابة الكود.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن تعديل state.items.push() هو تعديل غير نقي يخالف مبادئ Redux.",
          fix: "في createSlice، يُسمح بكتابة كود التعديل المباشر 'Mutating syntax' بفضل مكتبة Immer التي تحوله خلف الكواليس لنسخة نقية جديدة 100%.",
          explanation: "مكتبة Immer تراقب التعديلات عبر Proxies وتنشئ كائناً جديداً منسوخاً بأمان تام."
        },
        {
          mistake: "محاولة تنفيذ استدعاءات غير متزامنة (async fetch) داخل كائن reducers في createSlice.",
          fix: "كائن reducers مخصص للعمليات المتزامنة الصرفة فقط؛ استخدم createAsyncThunk للعمليات غير المتزامنة.",
          explanation: "دوال الـ reducers يجب أن تكون نقية وفورية ولا تقبل async/await."
        }
      ],
      bestPractices: [
        "نظم كل شريحة في ملف مستقل باسم معبر مثل `cartSlice.js` أو `authSlice.js`.",
        "صدّر كلاً من الإجراءات actions والمخفض reducer كأفضل ممارسة معيارية."
      ],
      infographic: {
        title: "مكونات الشريحة في createSlice()",
        elements: [
          { label: "name", role: "اسم الشريحة وبادئة أسماء الإجراءات المولدة: 'cart/addItem'", color: "blue" },
          { label: "initialState", role: "كائن الحالة المبدئية للبيانات التابعة لهذه الميزة", color: "amber" },
          { label: "reducers", role: "دوال التعديل النقي (المدعومة بقدرات محرك Immer)", color: "emerald" },
          { label: "المخرجات التلقائية", role: "تصدير slice.actions للإرسال، وتصدير slice.reducer للمتجر", color: "purple" }
        ]
      }
    },
    {
      id: "12.2.f",
      title: "إنشاء Reducers وActions",
      englishTerm: "Reducers & Action Creators (المُخَفِّضَاتُ وَمُنْشِئَاتُ الإِجْرَاءَات: محركات التغيير)",
      description: "في معمارية Redux، الإجراء (Action) هو كائن جافاسكريبت يحتوي على خاصية إلزامية تسمى `type` تحدد نوع الحدث، وخاصية اختيارية تسمى `payload` تحمل البيانات المصاحبة. منشئ الإجراء (Action Creator) هو دالة تنشئ هذا الكائن وترجعه. المخفض (Reducer) هو الدالة التي تستقبل `(state, action)` وتقوم بتطبيق التعديل. في Redux Toolkit، لا نكتب هذه الأشياء يدوياً، بل تولدها `createSlice` تلقائياً وبدقة نوعية فائقة.",
      analogy: "الإجراء يشبه بطاقة شحن رصيد الهاتف: نوع البطاقة هو (شحن رصيد: Action Type)، والرقم السري المشفر المكتوب عليها هو الحمولة (Payload)؛ ونظام شبكة الاتصالات هو الـ Reducer الذي يقرأ الرقم ويزيد رصيد هاتفك فورياً.",
      whyItMatters: "توحيد صياغة الأحداث يمنع الفوضى، ويجعل كل حدث في النظام قابلاً للطباعة والفحص وإعادة التشغيل (Replay).",
      syntax: "const myAction = slice.actions.actionName(payload);\n// يُرجع: { type: 'slice/actionName', payload: ... }",
      simpleExample: `import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    // مخفض يستقبل payload يحتوي على عنوان المهمة الجديدة
    addTodo: (state, action) => {
      // action.payload يحمل البيانات الممررة عند الاستدعاء
      state.push({ id: Date.now(), text: action.payload, done: false });
    },
  },
});

export const { addTodo } = todoSlice.actions;

// تجربة استدعاء منشئ الإجراء في الكود:
const createdAction = addTodo('تعلم Redux Toolkit');
console.log('كائن الإجراء الناتج تلقائياً:', createdAction);
// النتيجة: { type: 'todos/addTodo', payload: 'تعلم Redux Toolkit' }`,
      advancedExample: `// استخدام دالة الإعداد المسبق للحمولة (prepare callback) في reducers
import { createSlice, nanoid } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    // استخدام دالة prepare لتوليد المعرف والتاريخ تلقائياً قبل وصول الإجراء للمخفض
    addNote: {
      reducer: (state, action) => {
        state.unshift(action.payload);
      },
      prepare: (title, content) => {
        // تجهيز الحمولة وتوليد معرف فريد وطابع زمني
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export const { addNote } = notesSlice.actions;

// الاستدعاء في المكون يصبح نظيفاً وبسيطاً:
// dispatch(addNote('ملاحظة هامة', 'محتوى الملاحظة'));`,
      output: "توليد كائنات إجراءات منسقة تلقائياً ومطابقة لمعايير Flux Standard Action (FSA).",
      commonMistakes: [
        {
          mistake: "تمرير عدة معاملات لمنشئ الإجراء مثل: dispatch(addNote(title, content)) دون استخدام كائن أو prepare callback.",
          fix: "منشئ الإجراءات الافتراضي يقبل معاملاً واحداً فقط كـ payload؛ مرر كائناً: dispatch(addNote({ title, content })).",
          explanation: "إذا مررت معاملين، سيتجاهل Redux المعامل الثاني ويأخذ الأول فقط كـ payload ما لم تعرف prepare callback."
        }
      ],
      bestPractices: [
        "مرر كائناً دائماً كـ payload عند وجود أكثر من معلومة: dispatch(updateUser({ id, name, role })).",
        "استخدم دالة prepare callback لإضافة المعرفات التلقائية (nanoid) أو الطوابع الزمنية قبل وصولها للـ reducer."
      ],
      infographic: {
        title: "هيكل كائن الإجراء المعياري (Flux Standard Action)",
        elements: [
          { label: "type (إلزامي)", role: "سلسلة نصية تصف الحدث مثل: 'todos/addTodo'", color: "blue" },
          { label: "payload (اختياري)", role: "الحمولة والبيانات المنقولة (كائن، نص، رقم، مصفوفة)", color: "emerald" },
          { label: "error (اختياري)", role: "قيمة منطقية تدل على أن الإجراء يمثل خطأ استثنائياً", color: "rose" },
          { label: "meta (اختياري)", role: "معلومات وصفية إضافية غير متعلقة بالبيانات التجارية الأساسية", color: "amber" }
        ]
      }
    },
    {
      id: "12.2.g",
      title: "استخدام useSelector",
      englishTerm: "Reading State with useSelector (قِرَاءَةُ البَيَانَاتِ عَبْرَ يُوزْ سِيلِكْتُور: الاستعلام الدقيق)",
      description: "خطاف `useSelector()` هو الأداة الرسمية في `react-redux` لقراءة واستخراج بيانات معينة من متجر Redux المركزي داخل مكونات React. يستقبل دالة اختيار (Selector Function) تأخذ كائن الحالة العام `state` وتعيد الجزء المطلوب فقط (مثل `state.cart.items`). يتميز الخطاف بذكاء فائق في مراقبة النتيجة: فهو لا يعيد تصيير المكون إلا إذا تغيرت القيمة المستخرجة فعلياً (عبر المقارنة الصارمة `===`).",
      analogy: "مثل توجيه عدسة الكاميرا والميكروفون نحو شخص واحد فقط في حفل زفاف ضخم: مهما رقص وتحدث باقي المئات من الضيوف في القاعة، لن تنتبه الكاميرا ولن تسجل سوى الشخص الذي حددته في العدسة بدقة.",
      whyItMatters: "يحمي المكونات من إعادة التصيير غير الضرورية (Prevent Wasted Re-renders) ويمنحك وصولاً مباشراً وسهلاً لأي جزء من الحالة من أي مكان في شجرة المكونات.",
      syntax: "const count = useSelector((state) => state.counter.value);",
      simpleExample: `import React from 'react';
// استيراد خطاف قراءة الحالة
import { useSelector } from 'react-redux';

function CartCounterBadge() {
  // استخراج عدد عناصر السلة فقط من المتجر العام
  const cartItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
      <span>سلة التسوق: 🛒</span>
      <span style={{ fontWeight: 'bold', color: '#2563eb' }}>{cartItemsCount}</span>
    </div>
  );
}`,
      advancedExample: `// استخدام محددات دقيقة (Fine-Grained Selectors) لمنع إعادة تصيير البطاقة
import React from 'react';
import { useSelector } from 'react-redux';

// مكون يعرض إجمالي المبيعات فقط
export function TotalSalesDisplay() {
  // هذا المكون لن يعاد تصييره إطلاقاً إذا تغير اسم المستخدم أو الثيم؛
  // سيعاد تصييره فقط وفقط إذا تغير totalAmount!
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const itemsCount = useSelector((state) => state.cart.items.length);

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl max-w-xs text-white text-right space-y-1">
      <span className="text-xs text-slate-400">إجمالي الطلب الحالي</span>
      <div className="text-2xl font-black text-emerald-400 font-mono">
        {totalAmount} $
      </div>
      <p className="text-[11px] text-slate-500">
        يحتوي على {itemsCount} منتج مختار
      </p>
    </div>
  );
}`,
      output: "استخراج لحظي للبيانات المطلوبة من المتجر العام مع أداء عالي وعزل كامل لإعادة التصيير.",
      commonMistakes: [
        {
          mistake: "استخراج كائن المتجر بالكامل مثل: const state = useSelector(state => state).",
          fix: "استخرج دائماً أصغر وأدق قيمة تحتاجها: const user = useSelector(state => state.auth.user).",
          explanation: "استخراج المتجر كاملاً يجعل المكون يعاد تصييره مع كل حركة أو إجراء يحدث في أي جزء من أجزاء التطبيق."
        },
        {
          mistake: "إنشاء مصفوفة جديدة داخل useSelector مثل state.items.filter(...) دون استخدام createSelector.",
          fix: "إرجاع مصفوفة جديدة من .filter() أو .map() داخل useSelector يرجع مرجعاً جديداً في كل مرة ويعيد تصيير المكون دائماً.",
          explanation: "useSelector يقارن المرجع السابق بالجديد بـ ===؛ المصفوفات الجديدة لها مراجع مختلفة دائماً."
        }
      ],
      bestPractices: [
        "اكتب دوال محددات قابلة لإعادة الاستخدام في ملف الشريحة: export const selectCartTotal = (state) => state.cart.total.",
        "استخدم مكتبة Reselect أو createSelector من Redux Toolkit للمحددات التي تتطلب حسابات ميموية ثقيلة."
      ],
      infographic: {
        title: "آلية عمل خطاف useSelector() الذكي",
        elements: [
          { label: "1. Store Update", role: "تحديث أي جزء في متجر Redux المركزي", color: "blue" },
          { label: "2. تشغيل Selector", role: "تشغيل دالة الاختيار: selector(state) لاستخراج القيمة", color: "amber" },
          { label: "3. فحص المرجع (===)", role: "هل القيمة المستخرجة تختلف عن القيمة السابقة؟", color: "purple" },
          { label: "4. قرار الرندر", role: "إذا كانت مختلفة: رندر المكون | إذا كانت متطابقة: منع الرندر تماماً", color: "emerald" }
        ]
      }
    },
    {
      id: "12.2.h",
      title: "استخدام useDispatch",
      englishTerm: "Dispatching Actions with useDispatch (إِرْسَالُ الإِجْرَاءَاتِ: تفعيل وتغيير الحالة)",
      description: "خطاف `useDispatch()` هو الأداة الرسمية في `react-redux` التي تمنح مكون React القدرة على إرسال الإجراءات (Dispatch Actions) إلى متجر Redux المركزي. يعيد الخطاف مرجعاً لدالة `dispatch`؛ وعند استدعائها وتمرير منشئ الإجراء إليها (مثل `dispatch(increment())` أو `dispatch(addItem(product))`)، يوجه المتجر هذا الإجراء إلى المخفض المناسب لتحديث الحالة فوراً.",
      analogy: "مثل زر الإطلاق أو جهاز التحكم عن بعد: تضغط على زر 'رفع الصوت' في الريموت (Dispatch)، فيرسل إشارة لاسلكية فورية للتلفاز لزيادة مستوى الصوت بدرجة واحدة.",
      whyItMatters: "هو القناة الوحيدة التي تستطيع مكونات الواجهة من خلالها طلب تعديل أو كتابة أي بيانات في متجر Redux بأمان ونظام صارم.",
      syntax: "const dispatch = useDispatch();\ndispatch(actionCreator(payload));",
      simpleExample: `import React from 'react';
import { useDispatch } from 'react-redux';
// استيراد منشئات الإجراءات من الشريحة
import { increment, decrement } from './counterSlice';

function CounterButtons() {
  // الحصول على دالة الإرسال
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <button onClick={() => dispatch(increment())}>
        زيادة ➕
      </button>
      <button onClick={() => dispatch(decrement())}>
        نقصان ➖
      </button>
    </div>
  );
}`,
      advancedExample: `// إرسال إجراءات متعددة مع حمولة بيانات في معالج أحداث مركب
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './cartSlice';

export function ProductPurchaseCard({ product }) {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);

    // إرسال الإجراء مع تمرير كائن المنتج كـ Payload
    dispatch(
      addItemToCart({
        id: product.id,
        title: product.title,
        price: product.price,
      })
    );

    // تأثير بصري سريع لنجاح الإضافة
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl max-w-xs text-white text-right space-y-3">
      <h4 className="font-bold text-sm text-slate-100">{product.title}</h4>
      <p className="text-emerald-400 font-mono font-bold text-lg">{product.price} $</p>
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-blue-600/25"
      >
        {isAdding ? 'تمت الإضافة بنجاح ✔️' : 'إضافة إلى السلة 🛒'}
      </button>
    </div>
  );
}`,
      output: "إرسال سلس للبيانات من الواجهة إلى المتجر وتحديث كافة الشاشات المرتبطة بنقرة زر واحدة.",
      commonMistakes: [
        {
          mistake: "نسيان استدعاء منشئ الإجراء بالأقواس مثل: dispatch(increment) بدلاً من dispatch(increment()).",
          fix: "استدعِ منشئ الإجراء دائماً كدالة: dispatch(increment()).",
          explanation: "منشئ الإجراء increment هو دالة تعيد كائن { type: '...' }؛ إذا لم تستدعِها بالأقواس سترسل الدالة نفسها وسيقذف Redux خطأ."
        }
      ],
      bestPractices: [
        "مرجع دالة dispatch مستقر وثابت دائماً ولا يتغير بين عمليات الرندر، لذا يمكنك استخدامه بأمان في مصفوفات اعتماديات useEffect.",
        "عزل استدعاءات dispatch المعقدة داخل دوال معالجة واضحة (Handers) لتحسين مقروئية الـ JSX."
      ],
      infographic: {
        title: "خطوات عمل دالة useDispatch()",
        elements: [
          { label: "1. خطاف useDispatch", role: "الحصول على دالة الإرسال المركزية من سياق react-redux", color: "blue" },
          { label: "2. منشئ الإجراء Action()", role: "تجهيز كائن الحدث والحمولة: addItem({ id: 1 })", color: "purple" },
          { label: "3. dispatch(action)", role: "إطلاق الإجراء وتوجيهه إلى قنوات الـ Middleware والـ Reducers", color: "emerald" },
          { label: "4. التحديث والتنبيه", role: "تحديث شجرة المتجر وإشعار خطافات useSelector لإعادة الرندر", color: "amber" }
        ]
      }
    },
    {
      id: "12.2.i",
      title: "تنفيذ Async Logic باستخدام createAsyncThunk",
      englishTerm: "Async Logic with createAsyncThunk (الْعَمَلِيَّاتُ غَيْرُ المُتَزَامِنَةِ: جلب البيانات ومعالجة الحالات الثلاث)",
      description: "دالة `createAsyncThunk()` هي الأداة القياسية في Redux Toolkit لمعالجة العمليات غير المتزامنة (مثل طلبات جلب الـ API الخارجية). تستقبل اسم الإجراء ودالة غير متزامنة ترجع وعداً (Promise)، وتقوم تلقائياً بتوليد 3 إجراءات فرعية تمثل دورة حياة الطلب: 1) `pending` (الطلب قيد التنفيذ)، 2) `fulfilled` (نجح الطلب وتوفرت البيانات)، و 3) `rejected` (فشل الطلب مع الخطأ). يتم استقبال هذه الحالات في الشريحة داخل خاصية `extraReducers` لتحديث الـ State وفق كل مرحلة.",
      analogy: "مثل توصيل طلب من متجر إلكتروني: 1) في الطريق / جاري الشحن (Pending)، 2) تم التوصيل واستلام البضاعة (Fulfilled)، 3) تعذر التسليم لعنوان خاطئ (Rejected)؛ لكل مرحلة رسالة وحالة واضحة في تتبع الشحنة.",
      whyItMatters: "يقضي على تعقيد كتابة أكواد الـ Thunks اليدوية، ويوحد طريقة التعامل مع مؤشرات التحميل وأخطاء الشبكة عبر كامل التطبيق.",
      syntax: "export const fetchUsers = createAsyncThunk('users/fetch', async () => {\n  const res = await api.get('/users');\n  return res.data;\n});",
      simpleExample: `import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. إنشاء الـ Thunk لجلب المستخدمين
export const fetchUsersList = createAsyncThunk(
  'users/fetchList',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
    return response.json(); // القيمة المرجعة تصبح action.payload في حالة fulfilled
  }
);

// 2. معالجة حالات الـ Thunk داخل الشريحة عبر extraReducers
export const usersSlice = createSlice({
  name: 'users',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // حالة بدء الطلب
      .addCase(fetchUsersList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // حالة النجاح
      .addCase(fetchUsersList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      // حالة الفشل
      .addCase(fetchUsersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});`,
      advancedExample: `// استخدام Thunk متقدم مع RejectWithValue للتحكم في رسائل الخادم الخاصة
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk يقبل معاملات ويدير الأخطاء المعقدة
export const authenticateUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await fetch('https://api.example.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();
      if (!res.ok) {
        // إرجاع رسالة الخادم المخصصة بدلاً من خطأ جافاسكريبت الافتراضي
        return rejectWithValue(data.message || 'بيانات الدخول غير صحيحة');
      }
      return data;
    } catch (networkError) {
      return rejectWithValue('انقطع الاتصال بخادم التوثيق');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, status: 'idle', errorMessage: null },
  reducers: {
    logout: (state) => { state.user = null; state.status = 'idle'; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.status = 'loading';
        state.errorMessage = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.errorMessage = action.payload; // الرسالة القادمة من rejectWithValue
      });
  },
});`,
      output: "إدارة متينة لدورة حياة استدعاءات الشبكة مع عزل دقيق لحالات التحميل والأخطاء المخصصة.",
      commonMistakes: [
        {
          mistake: "وضع معالجة Thunk داخل كائن reducers العادي بدلاً من extraReducers.",
          fix: "استخدم دائماً خاصية extraReducers: (builder) => { ... } للاستماع للإجراءات غير المتزامنة.",
          explanation: "كائن reducers يولد إجراءات متزامنة خاصة به؛ بينما extraReducers مخصص للاستماع لإجراءات خارجية كـ Thunks."
        }
      ],
      bestPractices: [
        "استخدم دالة rejectWithValue في Thunk لتمرير استجابات أخطاء الـ API بصيغة JSON نظيفة للواجهة.",
        "في التطبيقات الحديثة التي تركز على جلب البيانات من الـ API، فضل استخدام RTK Query على createAsyncThunk لأنها توفر التخزين المؤقت التلقائي."
      ],
      infographic: {
        title: "الحالات الثلاث لـ createAsyncThunk",
        elements: [
          { label: "1. pending", role: "يطلق فور استدعاء الدالة -> تعيين loading = true ومسح الأخطاء", color: "blue" },
          { label: "2. fulfilled", role: "يطلق عند نجاح الوعد -> تعيين loading = false وتخزين البيانات", color: "emerald" },
          { label: "3. rejected", role: "يطلق عند رمي استثناء -> تعيين loading = false وتخزين الخطأ", color: "rose" },
          { label: "extraReducers", role: "المستقبل الرسمي للحالات الثلاث داخل كائن الشريحة عبر builder", color: "purple" }
        ]
      }
    },
    {
      id: "12.2.j",
      title: "استخدام createEntityAdapter",
      englishTerm: "Normalized State with createEntityAdapter (تَطْبِيعُ البَيَانَاتِ: إدارة المجموعات بمعرفاتها)",
      description: "دالة `createEntityAdapter()` هي أداة متقدمة في Redux Toolkit لإدارة مجموعات البيانات بطريقة مطبعة (Normalized State) كجداول قواعد البيانات: بدلاً من حفظ البيانات في مصفوفة عادية `items: []` تتطلب البحث عبر `.find()` و `.filter()` بتعقيد زمني بطيء O(N)؛ يقوم المحول بحفظ البيانات في كائنين: `ids: []` (مصفوفة المعرفات للترتيب) و `entities: {}` (خريطة الكائنات بحسب المعرف للوصول السريع الفوري بتعقيد O(1)).",
      analogy: "مثل خزانة الملفات المفهرسة برقم الهوية: بدلاً من البحث في كومة أوراق عشوائية من البداية للنهاية للعثور على ملف الموظف رقم 402، تفتح الدرج وتتوجه للملف 402 مباشرة في نصف ثانية دون لمس باقي الملفات.",
      whyItMatters: "يوفر سرعة خارقة في عمليات البحث والتعديل والحذف في الشاشات التي تعرض آلاف السجلات، ويقدم دوال جاهزة مثل `setAll` و `addOne` و `removeOne` و `updateOne`.",
      syntax: "const usersAdapter = createEntityAdapter();\nconst initialState = usersAdapter.getInitialState();",
      simpleExample: `import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

// 1. إنشاء محول الكيانات
const productsAdapter = createEntityAdapter();

// 2. إنشاء الشريحة مع الحالة المطبعة { ids: [], entities: {} }
export const productsSlice = createSlice({
  name: 'products',
  initialState: productsAdapter.getInitialState({ loading: false }),
  reducers: {
    // دوال مساعدة فائقة السرعة مدمجة في المحول:
    addOneProduct: productsAdapter.addOne,
    removeProduct: productsAdapter.removeOne,
    updateProduct: productsAdapter.updateOne,
    setAllProducts: productsAdapter.setAll,
  },
});

export const { addOneProduct, removeProduct, updateProduct, setAllProducts } = productsSlice.actions;
export default productsSlice.reducer;`,
      advancedExample: `import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

// محول كيانات مخصص مع ترتيب أبجدي تلقائي وتحديد المفتاح الفريد
const usersAdapter = createEntityAdapter({
  // تحديد الحقل الذي يمثل المعرف الفريد
  selectId: (user) => user.userId,
  // الترتيب التلقائي للكيانات حسب الاسم
  sortComparer: (a, b) => a.name.localeCompare(b.name, 'ar'),
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({ activeFilter: 'all' }),
  reducers: {
    setUsers: usersAdapter.setAll,
    removeUser: usersAdapter.removeOne,
  },
});

// استخراج محددات جاهزة فائقة الأداء من المحول تلقائياً:
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectTotal: selectTotalUsersCount,
} = usersAdapter.getSelectors((state) => state.users);

// في المكون:
// const allUsers = useSelector(selectAllUsers); // مصفوفة مرتبة جاهزة
// const user = useSelector(state => selectUserById(state, 'u-123')); // وصول فوري بـ O(1)!`,
      output: "هيكل بيانات مطبع يوفر أقصى درجات الأداء الرياضي لعمليات الـ CRUD في التطبيقات الكبيرة.",
      commonMistakes: [
        {
          mistake: "نسيان تحديد selectId عندما يكون معرف الكائن حقل آخر غير id (مثل _id في MongoDB أو userId).",
          fix: "حدد خاصية selectId: (item) => item._id في إعدادات createEntityAdapter.",
          explanation: "المحول يبحث عن حقل id افتراضياً؛ إذا لم يجده سيفشل في فهرسة الكائنات."
        }
      ],
      bestPractices: [
        "استخدم createEntityAdapter للجداول والقوائم الكبيرة (أكثر من 100 عنصر) لتسريع عمليات القراءة والتحديث.",
        "استغل المحددات الجاهزة getSelectors التي يوفرها المحول تلقائياً لتوفير كتابة دوال الاستعلام اليدوية."
      ],
      infographic: {
        title: "بنية البيانات المطبعة في createEntityAdapter",
        elements: [
          { label: "ids: ['u1', 'u2']", role: "مصفوفة المعرفات للحفاظ على الترتيب الدقيق للعناصر", color: "blue" },
          { label: "entities: { 'u1': {...} }", role: "خريطة القواميس للوصول الفوري للعنصر عبر معرّفه بـ O(1)", color: "emerald" },
          { label: "دوال CRUD الجاهزة", role: "addOne, addMany, setAll, removeOne, updateOne, upsertOne", color: "purple" },
          { label: "getSelectors", role: "توليد محددات ميموية سريعة: selectAll, selectById, selectTotal", color: "amber" }
        ]
      }
    },
    {
      id: "12.2.k",
      title: "تنظيم ملفات Redux",
      englishTerm: "Redux Codebase Architecture (تَنْظِيمُ وَهَيْكَلَةُ مَلَفَّاتِ رِيدَكْس: نهج الميزات Ducks Pattern)",
      description: "في المشاريع الكبيرة، يوصي فريق Redux الرسمي بنمط 'تنظيم الميزات' (Feature-based Folder Structure أو Ducks Pattern): حيث يتم تجميع كل ميزة تجارية (مثل السلة أو المصادقة) في مجلد مستقل يحتوي على الشريحة والخدمات والمحددات الخاصة بها داخل `src/features/cart/cartSlice.js`، بدلاً من التقسيم القديم السيئ الذي يضع كل الـ reducers في مجلد وكل الـ actions في مجلد آخر.",
      analogy: "مثل تنظيم حقيبة السفر: بدلاً من وضع كل الجوارب في حقيبة وكل القمصان في حقيبة أخرى وكل البنطلونات في حقيبة ثالثة؛ تضع طقماً كاملاً لكل يوم في منظم مستقل، فتخرج طقم اليوم بسهولة وسرعة دون بعثرة باقي الحقائب.",
      whyItMatters: "يجعل إضافة ميزة جديدة أو حذف ميزة قديمة أمراً في غاية السهولة، دون تشتت المطور بين 5 مجلدات متباعدة لتعديل ميزة واحدة.",
      syntax: "// src/app/store.js -> المخزن العام\n// src/features/cart/cartSlice.js -> الشريحة والمحددات الخاصة بالسلة\n// src/features/auth/authSlice.js -> الشريحة الخاصة بالمصادقة",
      simpleExample: `// الهيكل النموذجي لمشروع Redux Toolkit الحديث:
// src/
// ├── app/
// │   └── store.js          # تكوين المخزن المركزي
// ├── features/
// │   ├── auth/
// │   │   ├── authSlice.js  # الشريحة + الإجراءات + المحددات
// │   │   └── Login.jsx     # المكون المرتبط
// │   └── cart/
// │       ├── cartSlice.js  # الشريحة + الإجراءات
// │       └── CartView.jsx  # المكون المرتبط
// └── main.jsx              # التغليف بـ Provider`,
      advancedExample: `// مثال على تجميع وتصدير المحددات والأنواع من ملف الشريحة المعياري
// ملف: src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0, step: 1 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => { state.count += state.step; },
    setStep: (state, action) => { state.step = action.payload; },
  },
});

// 1. تصدير الإجراءات
export const { increment, setStep } = counterSlice.actions;

// 2. تصدير المحددات (Selectors) في نفس الملف لمركزية المعرفة
export const selectCurrentCount = (state) => state.counter.count;
export const selectCurrentStep = (state) => state.counter.step;

// 3. تصدير المخفض
export default counterSlice.reducer;`,
      output: "هيكل برمجي فائق الوضوح والتنظيم يسهل على الفرق الكبيرة العمل بالتوازي وصيانة الكود لسنوات.",
      commonMistakes: [
        {
          mistake: "فصل الإجراءات في مجلد actions/ والمخفضات في مجلد reducers/ لكل ميزة.",
          fix: "اجمع الشريحة كاملة (المخفض والإجراءات والمحددات) في ملف slice واحد داخل مجلد الميزة.",
          explanation: "نمط Ducks ومجلد الميزات Feature-based هو المعيار الرسمي المعاصر لـ Redux Toolkit."
        }
      ],
      bestPractices: [
        "ضع كائن الحالة الابتدائية initialState في بداية ملف الشريحة ليكون وثيقة واضحة لشكل البيانات.",
        "صدّر المحددات Selectors من نفس ملف الشريحة لتجنب كتابة مسارات الحالة العميقة في المكونات."
      ],
      infographic: {
        title: "الهيكل المعماري الموصى به لـ Redux Toolkit",
        elements: [
          { label: "src/app/store.js", role: "المخزن المركزي الموحد ونقطة تكوين configureStore", color: "blue" },
          { label: "src/features/cart", role: "مجلد ميزة السلة يضم cartSlice.js ومكونات العرض", color: "emerald" },
          { label: "src/features/auth", role: "مجلد ميزة المصادقة يضم authSlice.js والحراس والمكونات", color: "purple" },
          { label: "Feature-First", role: "سهولة النقل والصيانة وحذف الميزات دون التأثير على باقي النظام", color: "amber" }
        ]
      }
    },
    {
      id: "12.2.l",
      title: "استخدام Redux DevTools",
      englishTerm: "Debugging with Redux DevTools (تَتَبُّعُ الأَعْطَالِ وَالتَّرَاجُعُ الزَّمَنِيّ: إضافة المتصفح الخارقة)",
      description: "إضافة Redux DevTools هي أقوى أداة تصحيح أخطاء وتتبع في عالم الواجهات الأمامية. تتيح للمطور: رؤية شجرة الحالة كاملة في أي ثانية، ومشاهدة كل إجراء (Action) يتم إرساله وحمولته الدقيقة، وفحص الفروقات (State Diff) التي أحدثها كل إجراء بلون أخضر وأحمر، وميزة 'التراجع الزمني' (Time-Travel Debugging) التي تتيح القفز بين حالات الماضي والمستقبل وإعادة تشغيل الأحداث كشريط فيديو مسجل، وتصدير واستيراد سجل الحالة لمشاركة الأعطال مع الفريق.",
      analogy: "مثل الصندوق الأسود في الطائرة أو كاميرات المراقبة التلفزيونية ذات الدقة العالية: تسجل كل ثانية بالصوت والصورة، ويمكنك ترجيع الشريط للخلف للتحقق من اللحظة الدقيقة التي وقع فيها الخطأ لمعرفة سببه الجذري في ثوانٍ.",
      whyItMatters: "تختصر 90% من وقت تصحيح الأخطاء المعقدة؛ فلن تحتاج لكتابة console.log بعد اليوم لمعرفة كيف تغيرت بيانات التطبيق.",
      syntax: "// مفعلة تلقائياً في Redux Toolkit بدون أي كود إضافي!\nconfigureStore({ reducer: ... });",
      simpleExample: `// Redux DevTools مفعلة افتراضياً بمجرد استخدام configureStore
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    demo: (state = { ticks: 0 }, action) => {
      if (action.type === 'TICK') return { ticks: state.ticks + 1 };
      return state;
    },
  },
  // خاصية devTools مدمجة ومفعلة تلقائياً كـ true في بيئة التطوير
});

// افتح المتصفح واضغط F12 ثم اختر تبويب Redux لرؤية السحر اللحظي!`,
      advancedExample: `// تكوين خيارات Redux DevTools المتقدمة لتصفية الإجراءات وتحديد عمق السجل
import { configureStore } from '@reduxjs/toolkit';

export const devToolsOptimizedStore = configureStore({
  reducer: {
    system: (state = { status: 'online' }) => state,
  },
  devTools: {
    name: 'تطبيق الإدارة المتقدم v2',
    // الحد الأقصى للإجراءات المحفوظة في شريط التراجع الزمني
    maxAge: 50,
    // تصفية وحجب إجراءات نبضات القلب السريعة لمنع تشويش السجل
    actionsDenylist: ['heartbeat/ping'],
    // تتبع موقع الكود المصدري الذي أطلق الإجراء (Action Stack Trace)
    trace: true,
    traceLimit: 25,
  },
});`,
      output: "لوحة تحكم تفاعلية مذهلة في المتصفح تعرض سجل الأحداث، شجرة الحالة، الفروقات، وميزة التراجع الزمني.",
      commonMistakes: [
        {
          mistake: "ترك خاصية trace: true مفعلة في الإنتاج مما يسبب استهلاكاً إضافياً للذاكرة.",
          fix: "فعل خيارات التتبع العميق devTools فقط في بيئة التطوير process.env.NODE_ENV !== 'production'.",
          explanation: "تتبع مكدس الاستدعاءات (Stack Trace) لكل إجراء يستهلك جزءاً من أداء المتصفح."
        }
      ],
      bestPractices: [
        "استغل ميزة 'Action Export' في DevTools لتحميل ملف JSON بسجل الأخطاء ومشاركته مع زملائك لإعادة إنتاج المشكلة فوراً.",
        "استخدم ميزة 'Commit' لتصفير سجل الأحداث عند بدء اختبار سيناريو جديد في لوحة التحكم."
      ],
      infographic: {
        title: "قدرات إضافة Redux DevTools الخارقة",
        elements: [
          { label: "Action Log", role: "قائمة زمنية مرتبة بكل إجراء أُرسل مع اسمه وحمولته الدقيقة", color: "blue" },
          { label: "State Diff", role: "تظليل الحقول التي تغيرت فقط باللونين الأخضر والأحمر", color: "emerald" },
          { label: "Time-Travel", role: "القفز للماضي أو المستقبل وإلغاء إجراء معين لرؤية أثره", color: "purple" },
          { label: "State Tree View", role: "فحص شجرة كائنات المتجر كاملة والبحث بداخلها لحظياً", color: "amber" }
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q12.2.1",
      question: "ما الفائدة الجوهرية من استخدام createSlice في Redux Toolkit؟",
      options: [
        "تجمع تعريف الحالة والمخفضات ومنشئات الإجراءات في مكان واحد وتدعم كود التعديل المباشر بفضل Immer.",
        "تقوم بتحويل كود جافاسكريبت إلى بايثون تلقائياً.",
        "تمنع المستخدم من كتابة أي استدعاءات شبكية.",
        "تزيد من سرعة بطاقة الرسوميات GPU في المتصفح."
      ],
      correctAnswer: 0,
      explanation: "دالة createSlice تجمع هندسة الشريحة وتولد الإجراءات وتدمج محرك Immer لمنع أخطاء التعديل المباشر."
    },
    {
      id: "q12.2.2",
      question: "لماذا نستخدم useSelector مع محدد دقيق بدلاً من استخراج كائن المتجر كاملاً؟",
      options: [
        "لأن المتصفح يمنع قراءة أكثر من خاصية واحدة في جافاسكريبت.",
        "لأن useSelector يقارن القيمة المستخرجة بـ === ويمنع إعادة تصيير المكون إذا لم تتغير تلك القيمة المحددة.",
        "لأن استخراج المتجر كاملاً يقوم بحذف البيانات تلقائياً.",
        "لا يوجد أي فرق في الأداء بين الطريقتين."
      ],
      correctAnswer: 1,
      explanation: "المحدد الدقيق يضمن عزل الرندر وإعادة تصيير المكون فقط عند تغير القيمة التي يهتم بها فعلياً."
    },
    {
      id: "q12.2.3",
      question: "ما هي الحالات الثلاث التلقائية التي يولدها خطاف createAsyncThunk؟",
      options: [
        "start, running, end",
        "pending, fulfilled, rejected",
        "open, close, pause",
        "request, wait, finish"
      ],
      correctAnswer: 1,
      explanation: "يولد createAsyncThunk الحالات الثلاث: pending للانتظار، fulfilled للنجاح، و rejected للفشل."
    }
  ],
  exercise: {
    id: "ex-12.2",
    title: "بناء شريحة مهام متكاملة بـ Redux Toolkit مع إحصائيات متزامنة (Redux Toolkit Task Suite)",
    description: "قم بإنشاء شريحة كاملة باسم `tasksSlice` تحتوي على: 1) إضافة مهمة جديدة مع توليد معرف فريد، 2) تبديل حالة الإنجاز (toggle)، 3) حذف مهمة، 4) محددات (Selectors) لحساب عدد المهام الكلي والمنجز، و 5) دمج الشريحة في متجر بـ configureStore.",
    starterCode: `import { configureStore, createSlice } from '@reduxjs/toolkit';

// 1. أنشئ tasksSlice
// 2. صدّر الإجراءات والمحددات
// 3. أنشئ المتجر store بـ configureStore
`,
    hints: [
      "في الشريحة: استخدم state.push(action.payload) لإضافة المهمة بفضل Immer.",
      "في التبديل: ابحث عن المهمة بـ state.find(t => t.id === action.payload) ثم t.completed = !t.completed.",
      "عرف محددات مثل: export const selectCompletedTasks = (state) => state.tasks.filter(t => t.completed).length."
    ],
    solution: `import { configureStore, createSlice } from '@reduxjs/toolkit';

// 1. إنشاء شريحة المهام
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: 1, title: 'تثبيت Redux Toolkit', completed: true },
    { id: 2, title: 'بناء الشريحة والمتجر', completed: true },
    { id: 3, title: 'ربط المكونات بـ useSelector و useDispatch', completed: false },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

// 2. تصدير الإجراءات
export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;

// 3. تصدير المحددات الميموية
export const selectAllTasks = (state) => state.tasks;
export const selectCompletedTasksCount = (state) =>
  state.tasks.filter((t) => t.completed).length;
export const selectTotalTasksCount = (state) => state.tasks.length;

// 4. إنشاء المتجر المركزي الموحد
export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});`
  },
  infographic: {
    title: "خريطة طريق احتراف Redux Toolkit (RTK)",
    description: "الأركان الأربعة لبناء معمارية حالة متينة ومستقرة في التطبيقات الكبرى",
    steps: [
      { step: "1", title: "configureStore", desc: "تأسيس المتجر المركزي ودمج Thunk والوسائط و DevTools تلقائياً" },
      { step: "2", title: "createSlice", desc: "تجميع الحالة والمخفضات والإجراءات في ملف واحد مع قدرات Immer" },
      { step: "3", title: "useSelector & useDispatch", desc: "القراءة الدقيقة المعزولة للبيانات وإرسال الإجراءات من الواجهة" },
      { step: "4", title: "createAsyncThunk", desc: "إدارة العمليات غير المتزامنة والـ APIs بالحالات الثلاث pending/fulfilled/rejected" }
    ]
  }
};
