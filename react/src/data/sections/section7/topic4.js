// src/data/sections/section7/topic4.js
// الموضوع 4: استخدام useContext في React (React Context, Providers & Props Drilling Solution)

export const SECTION_7_TOPIC_4 = {
  id: "7.4",
  title: "استخدام useContext",
  englishTerm: "Using useContext for Global State",
  description: "المصعد الهوائي لتجاوز حفر Props Drilling: فهم سياق React Context، إنشاء الموفر (Provider)، استهلاك البيانات بـ useContext، إدارة الثيم والمصادقة واللغة، وتحسين الأداء بفصل السياقات وتجنب الرندرات الزائدة.",
  subtopics: [
    {
      id: "7.4.a",
      title: "مفهوم React Context",
      englishTerm: "React Context Concept & The Props Drilling Nightmare",
      description: "الميزة الرسمية في React لمشاركة البيانات عبر شجرة المكونات بالكامل دون الحاجة لتمرير الخصائص يدوياً عبر كل مستوى وسيط (حل مشكلة Props Drilling). تخيل أن لديك مكوناً في المستوى الخامس في قاع الشجرة يحتاج لمعرفة اسم المستخدم الحالي؛ بدلاً من تمرير user={user} عبر المكون 1 ثم 2 ثم 3 ثم 4، يقوم Context بإنشاء قناة بث مباشرة تصل من قمة الشجرة إلى المكون الهدف فوراً.",
      realLifeAnalogy: "مثل شبكة الكهرباء المنزلية اللاسلكية (أو شبكة Wi-Fi)؛ بدلاً من مد سلك كهربائي طويل يمر عبر غرفة الجلوس والممر والمطبخ ليصل إلى جهاز التلفاز في غرفة النوم، تبث شبكة Wi-Fi الإشارة في هواء المنزل بأكمله ليتصل بها أي جهاز متوافق مباشرة بكلمة المرور دون أي أسلاك.",
      whyItMatters: "يقضي على تعقيد الكود وتلوث المكونات الوسيطة بخصائص لا تعنيها ولا تستخدمها سوى لتمريرها لمن تحتها.",
      syntax: "// 1. إنشاء السياق\nconst MyContext = createContext(defaultValue);\n// 2. توفير القيمة في الأب\n<MyContext.Provider value={data}>\n// 3. قراءة القيمة في أي ابن عميق\nconst data = useContext(MyContext);",
      simpleExample: `// استعراض فكرة السياق البسيطة
import { createContext, useContext } from "react";

// 1. إنشاء سياق السمة البصرية
const ThemeContext = createContext("dark");

function DeepChildButton() {
  // 3. استهلاك القيمة مباشرة من الهواء دون استلام أي props من الأب!
  const theme = useContext(ThemeContext);
  return (
    <button className={\`px-3 py-1.5 rounded text-xs font-bold \${
      theme === "dark" ? "bg-slate-800 text-white" : "bg-amber-100 text-slate-900"
    }\`}>
      الوضع الحالي المستلم عبر السياق: {theme}
    </button>
  );
}

function ContextOverviewDemo() {
  return (
    // 2. تغليف الشجرة بالموفر Provider
    <ThemeContext.Provider value="dark">
      <div className="p-4 bg-slate-900 rounded-xl space-y-2">
        <h4 className="text-white text-xs font-bold">بث مباشر للبيانات عبر Context</h4>
        <DeepChildButton />
      </div>
    </ThemeContext.Provider>
  );
}`,
      advancedExample: `// محاكاة بصرية لمشكلة Props Drilling وكيف يحلها React Context بأناقة
export function PropsDrillingVsContextVisualizer() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-5 max-w-md mx-auto">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">كابوس Props Drilling مقابل Context</h4>
        <span className="text-[10px] font-mono bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded">
          Architecture
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        {/* عمود Props Drilling */}
        <div className="p-3 bg-rose-950/20 border border-rose-900/40 rounded-2xl space-y-2">
          <span className="font-bold text-rose-400 block">❌ كابوس Props Drilling</span>
          <div className="space-y-1 font-mono text-[10px] text-slate-400">
            <p className="text-slate-200">App (يملك user)</p>
            <p className="mr-2">↳ Header (user={'{user}'})</p>
            <p className="mr-4">↳ Nav (user={'{user}'})</p>
            <p className="mr-6">↳ UserBadge (user={'{user}'})</p>
            <p className="mr-8 text-emerald-400 font-bold">↳ Avatar (يحتاج user أخيراً!)</p>
          </div>
          <p className="text-[10px] text-rose-300 mt-2">
            3 مكونات وسيطة تم تلويثها بخصائص لا تحتاجها مطلقاً!
          </p>
        </div>

        {/* عمود React Context */}
        <div className="p-3 bg-emerald-950/20 border border-emerald-900/40 rounded-2xl space-y-2">
          <span className="font-bold text-emerald-400">✅ الحل بـ React Context</span>
          <div className="space-y-1 font-mono text-[10px] text-slate-400">
            <p className="text-emerald-300 font-bold">App &lt;UserContext.Provider&gt;</p>
            <p className="mr-2 text-slate-500">↳ Header (نظيف بلا props)</p>
            <p className="mr-4 text-slate-500">↳ Nav (نظيف بلا props)</p>
            <p className="mr-6 text-slate-500">↳ UserBadge (نظيف بلا props)</p>
            <p className="mr-8 text-emerald-400 font-bold">↳ Avatar: useContext() 🎯</p>
          </div>
          <p className="text-[10px] text-emerald-300 mt-2">
            اتصال فوري من القمة إلى القاع كالمصعد السريع دون إزعاج الوسطاء!
          </p>
        </div>
      </div>
    </div>
  );
}`,
      output: "يقدم المكون مقارنة هيكلية واضحة تثبت كيف يحرر Context المكونات الوسيطة من عناء تمرير الخصائص التي لا تخصها.",
      commonMistakes: [
        {
          mistake: "استخدام Context لمشاركة كل متغير بسيط بين مكونين متجاورين.",
          why: "هذا إفراط في استخدام الأداة؛ فإذا كان المكونان متجاورين، فإن نمط Lifting State Up العادي أبسط وأسرع بكثير.",
          fix: "احصر Context في البيانات العامة الحقيقية (Global/Sub-tree Data) مثل بيانات الدخول، الثيم، واللغة."
        }
      ],
      bestPractices: [
        "فكر أولاً: هل يمكن حل المشكلة بـ Component Composition (تمرير المكون كـ children)؟ إذا كان الجواب نعم، فهذا أفضل من Context.",
        "عزل كل سياق في ملف مستقل في مجلد src/context/."
      ],
      infographicCard: {
        type: "elevator-diagram",
        title: "مصعد البيانات السريع (React Context Elevator)",
        levels: [
          "الطابق 5 (القمة): App Context Provider يبث البيانات 📡",
          "الطابق 4: مكون وسيط (تم تجاوزه بسلام)",
          "الطابق 3: مكون وسيط (تم تجاوزه بسلام)",
          "الطابق 2: مكون وسيط (تم تجاوزه بسلام)",
          "الطابق 1 (القاع): Child Component يستقبل البيانات عبر useContext فوراً! 🎯"
        ]
      }
    },
    {
      id: "7.4.b",
      title: "إنشاء Context",
      englishTerm: "Creating Context with createContext & Default Values",
      description: "الخطوة الأولى لتأسيس قناة السياق عبر استدعاء دالة createContext() من مكتبة React. تأخذ الدالة معاملاً واحداً اختيارياً يمثل القيمة الافتراضية (Default Value). تُستخدم هذه القيمة الافتراضية كشبكة أمان في حال تم استدعاء useContext من مكون يقع خارج نطاق الـ Provider.",
      realLifeAnalogy: "مثل إنشاء تردد راديو إذاعي جديد (مثل تردد 100.5 FM)؛ التردد في حد ذاته هو القناة الفارغة المعرّفة في الفضاء، والتي ستستخدمها محطة البث لاحقاً لإرسال برامجها.",
      whyItMatters: "تحديد قيمة افتراضية واضحة ومكتملة الخصائص يساعد أدوات الإكمال التلقائي (TypeScript / VS Code) في تقديم اقتراحات ذكية أثناء كتابة الكود ويمنع انهيار التطبيق عند اختبار المكونات بمعزل عن التطبيق (Unit Testing).",
      syntax: "import { createContext } from 'react';\nexport const AuthContext = createContext({\n  user: null,\n  login: () => {},\n  logout: () => {}\n});",
      simpleExample: `// إنشاء سياق لغة التطبيق بقيمة افتراضية عربية
import { createContext } from "react";

// إنشاء وتصدير السياق
export const LanguageContext = createContext("ar");

function LanguageReaderDemo() {
  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs">
      تم إنشاء السياق بنجاح بقيمة افتراضية: <strong className="text-emerald-400 font-mono">"ar"</strong>
    </div>
  );
}`,
      advancedExample: `// النموذج الهندسي القياسي لإنشاء ملف Context مخصص مع كائن افتراضي مكتمل
import { createContext } from "react";

// تعريف شكل البيانات الافتراضية الشاملة
const initialUserContextFallback = {
  currentUser: {
    id: "guest",
    name: "زائر مؤقت",
    role: "read-only",
    avatar: "👤"
  },
  isAuthenticated: false,
  login: () => {
    console.warn("⚠️ تم استدعاء login خارج نطاق الـ Provider!");
  },
  logout: () => {
    console.warn("⚠️ تم استدعاء logout خارج نطاق الـ Provider!");
  }
};

// إنشاء وتصدير السياق بالقيمة الاحتياطية
export const UserSessionContext = createContext(initialUserContextFallback);

export function ContextCreationStandardsCard() {
  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-3 max-w-md mx-auto text-xs">
      <h4 className="font-bold text-sm text-indigo-400">المعايير الهندسية لإنشاء Context</h4>
      <p className="text-slate-300">
        يُفضل دائماً توفير كائن كامل للـ Default Value يحتوي دوال وهمية فارغة:
      </p>
      <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-emerald-400 space-y-1">
        <p>1. يوفر حماية من أخطاء Cannot read property of undefined.</p>
        <p>2. يسهل اختبار المكونات الفردية داخل Storybook أو Jest دون الحاجة لتغليفها بموفر.</p>
        <p>3. يعطي المحرر ذكاءً برمجياً كاملاً (IntelliSense) للاقتراحات التلقائية.</p>
      </div>
    </div>
  );
}`,
      output: "تم إنشاء كائن السياق بنجاح وتأمينه بقيم ودوال احتياطية جاهزة للبث والاستهلاك.",
      commonMistakes: [
        {
          mistake: "الاعتقاد بأن القيمة الافتراضية الممررة لـ createContext(defaultValue) تتغير عندما تتغير حالة المكون لاحقاً.",
          why: "القيمة الافتراضية لـ createContext هي قيمة ثابتة لا تتغير أبداً؛ وتعمل فقط كـ Fallback عند غياب الـ Provider!",
          fix: "لتمرير قيم ديناميكية متغيرة، يجب استخدام خاصية value الخاصة بالموفر: <Context.Provider value={dynamicState}>."
        }
      ],
      bestPractices: [
        "أنشئ ملفاً مستقلاً لكل سياق وضع فيه دالة إنشاء السياق، ومكون الـ Provider، وCustom Hook مخصص لقراءته (مثل useAuth).",
        "سمِّ كائن السياق دائماً باسم ينتهي بكلمة Context وبحرف كبير (مثل AuthContext, ThemeContext)."
      ],
      infographicCard: {
        type: "code-box",
        title: "الخطوة الأولى: إنشاء القناة",
        code: "export const AppContext = createContext(initialFallbackValue);"
      }
    },
    {
      id: "7.4.c",
      title: "توفير القيم للمكونات",
      englishTerm: "Context.Provider Component & the value Prop",
      description: "المكون الموفر الخاص بالسياق (<Context.Provider>). يُوضع في قمة الشجرة أو الفرع المستهدف، ويستقبل خاصية إجبارية اسمها value. كافة المكونات الموجودة داخل وسمي الفتح والإغلاق لهذا الموفر (Children) تستطيع التقاط هذه القيمة في أي لحظة. عندما تتغير قيمة value الممررة للموفر، تُعيد React تصيير كافة المكونات المشتركة المستهلكة لهذا السياق فوراً.",
      realLifeAnalogy: "مثل برج بث شبكة الاتصالات الخلوية (5G Tower)؛ بمجرد تشغيل البرج وضبط تردده (value)، تبدأ كافة الهواتف الموجودة في نطاق التغطية الجغرافية للبرج باستقبال إشارات الاتصال والإنترنت فوراً.",
      whyItMatters: "يمثل بوابة التحكم المركزية في البيانات؛ يتيح للمكون الأب التحكم الكامل في ما يبثه للأبناء، بل ويمكن تداخل عدة موفرات (Nested Providers) لتخصيص قيم مختلفة لأقسام فرعية محددة في نفس الصفحة.",
      syntax: "<ThemeContext.Provider value={currentTheme}>\n  <AppLayout />\n</ThemeContext.Provider>",
      simpleExample: `// تغليف المكونات بالموفر وتمرير القيمة الحية
import { createContext, useState } from "react";

const CounterContext = createContext(0);

function DisplayNumber() {
  return <div className="text-emerald-400 font-mono text-xs">الموفر يبث الرقم للأبناء بنجاح!</div>;
}

function ProviderWrapperDemo() {
  const [activeNumber, setActiveNumber] = useState(42);

  return (
    // توفير القيمة عبر خاصية value
    <CounterContext.Provider value={activeNumber}>
      <div className="p-4 bg-slate-900 rounded-xl text-white space-y-2 text-xs">
        <p>الرقم المبثوث حالياً من الموفر: {activeNumber}</p>
        <DisplayNumber />
        <button onClick={() => setActiveNumber(n => n + 1)} className="px-3 py-1 bg-indigo-600 rounded">
          تغيير القيمة المبثوثة
        </button>
      </div>
    </CounterContext.Provider>
  );
}`,
      advancedExample: `// تداخل الموفرات (Nested Providers) لتخصيص ثيم مختلف لقسم فرعي محدد
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("dark");

function ThemedBox({ label }) {
  const theme = useContext(ThemeContext);
  return (
    <div className={\`p-3 rounded-xl border text-xs flex justify-between items-center \${
      theme === "dark" 
        ? "bg-slate-950 border-slate-800 text-slate-200" 
        : "bg-amber-100 border-amber-300 text-slate-900"
    }\`}>
      <span className="font-bold">{label}</span>
      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/20">
        السمة المقروءة: {theme}
      </span>
    </div>
  );
}

export function NestedProvidersDemo() {
  const [globalTheme, setGlobalTheme] = useState("dark");

  return (
    // 1. الموفر العام للجذر (Global Theme)
    <ThemeContext.Provider value={globalTheme}>
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
        <div className="flex justify-between items-center pb-2 border-b border-slate-800">
          <h4 className="font-bold text-sm text-indigo-400">تداخل الموفرات (Nested Providers)</h4>
          <button
            onClick={() => setGlobalTheme(t => t === "dark" ? "light" : "dark")}
            className="px-2.5 py-1 bg-indigo-600 rounded-lg text-xs font-bold"
          >
            تبديل الثيم العام
          </button>
        </div>

        {/* صندوق يقرأ من الموفر العام */}
        <ThemedBox label="قسم رئيسي (يتبع الثيم العام للبرج)" />

        {/* 2. موفر متداخل محلي يعزل ثيم محدد لقسم فرعي مخصص (Local Override) */}
        <ThemeContext.Provider value="light">
          <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
            <span className="text-[10px] text-amber-400 block font-bold">منطقة معزولة بموفّر فرعي ثانٍ (value="light"):</span>
            <ThemedBox label="بطاقة فرعية مضيئة دائماً" />
          </div>
        </ThemeContext.Provider>
      </div>
    </ThemeContext.Provider>
  );
}`,
      output: "يقوم الصندوق الأول باتباع الثيم العام المتغير بالزر، بينما يتمسك الصندوق الثاني بالثيم الفاتح المعزول عبر الموفر المتداخل الخاص به.",
      commonMistakes: [
        {
          mistake: "نسيان كتابة خاصية value للموفر مثل: <ThemeContext.Provider> بدون value!.",
          why: "إذا نسيت تمرير خاصية value، ستعتبر React القيمة المبثوثة تساوي undefined، ولن تعود للقيمة الافتراضية، مما يسبب أخطاء قراءة لكافة الأبناء!",
          fix: "مرر دائماً خاصية value صراحة: <ThemeContext.Provider value={myValue}>."
        }
      ],
      bestPractices: [
        "ضع موفرات السياقات العامة في أعلى شجرة التطبيق في ملف App.jsx أو main.jsx.",
        "إذا كانت القيمة كائناً يحتوي دوالاً وحالات، استخدم useMemo لتثبيت مرجع الكائن لمنع الرندرات الزائدة للأبناء (كما سنفصل في النقطة 7.4.h)."
      ],
      infographicCard: {
        type: "tower-broadcast",
        title: "منطقة تغطية الموفر (Provider Coverage)",
        diagram: [
          "📡 <UserContext.Provider value={user}> (يبدأ البث هنا)",
          "   ├── 📦 المكون A (داخل نطاق البث -> يستلم القيمة الحية)",
          "   │    └── 📦 المكون B (داخل نطاق البث -> يستلم القيمة الحية)",
          "❌ المكون X (خارج وسم الموفر -> يستلم فقط الـ Default Value الاحتياطية)"
        ]
      }
    },
    {
      id: "7.4.d",
      title: "قراءة القيم باستخدام useContext",
      englishTerm: "Consuming Context with useContext Hook",
      description: "الخطوة الثالثة والنهائية لاستقبال البيانات: استدعاء خطاف useContext() داخل أي مكون ابن وتمرير كائن السياق له (مثل: useContext(AuthContext)). يقوم الخطاف بالبحث صعوداً في شجرة المكونات للعثور على أقرب <Provider> مطابق، واستخراج أحدث قيمة مخزنة في خاصية value وإرجاعها لك فوراً.",
      realLifeAnalogy: "مثل تشغيل جهاز التلفاز وضبط القناة على 100.5 FM؛ بمجرد ضبط التردد، يلتقط التلفاز البث المباشر الصادر من برج المحطة في تلك الثانية ويعرضه بالصوت والصورة.",
      whyItMatters: "استبدل الأسلوب القديم البشع والمعقد المعتمد على Render Props ومكونات <Consumer> التي كانت تسبب تداخل الأقواس (Wrapper Hell)، وحول قراءة السياق إلى سطر برمجي واحد فائق النقاء.",
      syntax: "const value = useContext(MyContext);",
      simpleExample: `// استهلاك السياق في سطر واحد نظيف
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext("ضيف عزيز");

function UserHeaderBadge() {
  // قراءة القيمة بسطر واحد مريح
  const currentUser = useContext(UserContext);

  return (
    <div className="p-3 bg-slate-900 rounded-xl text-white text-xs">
      أهلاً وسهلاً بك يا: <strong className="text-emerald-400">{currentUser}</strong>
    </div>
  );
}`,
      advancedExample: `// إنشاء Custom Hook مخصص للقراءة الآمنة مع كشف الأخطاء التلقائي (Standard Pattern)
import { createContext, useContext, useState } from "react";

// 1. إنشاء السياق
const CartContext = createContext(null);

// 2. موفر مخصص أنيق
export function CartProvider({ children }) {
  const [itemCount, setItemCount] = useState(3);
  const addItem = () => setItemCount(c => c + 1);

  return (
    <CartContext.Provider value={{ itemCount, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. الخطاف المخصص الآمن: يفحص وجود الموفر ويطلق خطأً توضيحياً إذا نسي المبرمج تغليف المكون!
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("❌ خطأ معماري: لا يمكن استدعاء useCart إلا داخل نطاق <CartProvider>!");
  }
  return context;
}

// مكون فرعي يستهلك الخطاف المخصص بسهولة فائقة
function CartIndicator() {
  const { itemCount, addItem } = useCart();

  return (
    <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
      <span className="text-slate-300">عناصر السلة: <strong className="text-indigo-400 font-mono text-sm">{itemCount}</strong></span>
      <button onClick={addItem} className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-bold text-white">
        + إضافة قطعة
      </button>
    </div>
  );
}

export function CustomConsumerHookDemo() {
  return (
    <CartProvider>
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-3 max-w-sm mx-auto">
        <h4 className="font-bold text-sm text-indigo-400">النمط القياسي: Custom Hook للقراءة الآمنة</h4>
        <CartIndicator />
      </div>
    </CartProvider>
  );
}`,
      output: "يتم استهلاك عناصر السلة والدوال في سطر واحد const { itemCount, addItem } = useCart()، مع حماية برمجية تامة تحذر المطور فوراً إذا استخدم المكون خارج الـ Provider.",
      commonMistakes: [
        {
          mistake: "تمرير الموفر نفسه لخطاف useContext بدلاً من كائن السياق، مثل: useContext(MyContext.Provider) ❌!.",
          why: "المعامل المطلوب لـ useContext هو كائن السياق الأصلي كاملاً: useContext(MyContext) وليس الخاصية الفرعية Provider.",
          fix: "مرر كائن السياق دائماً: useContext(ThemeContext)."
        }
      ],
      bestPractices: [
        "اعتمد دائماً نمط إنشاء Custom Hook لكل سياق (مثل useTheme, useAuth, useCart) بدلاً من استدعاء useContext(Context) يدوياً في كل ملف.",
        "أضف فحص if (!context) داخل الخطاف المخصص لإطلاق خطأ صريح يساعد زملاءك في الفريق فوراً."
      ],
      infographicCard: {
        type: "code-pattern",
        title: "النمط المعماري الذهبي لاستهلاك السياق",
        pattern: "export const useAuth = () => {\n  const ctx = useContext(AuthContext);\n  if (!ctx) throw new Error('useAuth must be used within AuthProvider');\n  return ctx;\n};"
      }
    },
    {
      id: "7.4.e",
      title: "مشاركة اللغة والثيم",
      englishTerm: "Theme & Localization Context Architecture",
      description: "التطبيق الواقعي الأكثر شهرة وشيوعاً لـ React Context في كل تطبيقات العالم: إدارة وتغيير سمة المظهر (Dark/Light Theme) ولغة الواجهة واتجاه النص (RTL/LTR Localization). يتم حفظ الخيار المفضل في أعلى جذر التطبيق وتمريره للأسفل لتغيير نصوص الموقع والألوان والاتجاهات بانسيابية تامة بنقرة زر.",
      realLifeAnalogy: "مثل تغيير لغة لوحات الإرشاد ونظام الصوتيات في مطار دولي؛ بضغطة زر واحدة من غرفة التحكم المركزية، تتحول كافة الشاشات التلفزيونية في صالات المغادرة إلى اللغة العربية والإنجليزية وتتغير إضاءة الممرات بتناغم تام.",
      whyItMatters: "يحول تطبيقك إلى تطبيق عالمي متعدد اللغات ويدعم تفضيلات المستخدمين في التعتيم الليلي والنهاري بأعلى معايير الاحترافية.",
      syntax: "const { theme, toggleTheme } = useTheme();\nconst { t, locale, changeLocale } = useLocale();",
      simpleExample: `// سياق مظهر ليلي/نهاري بسيط ومتكامل
import { createContext, useContext, useState } from "react";

const ThemeCtx = createContext();

function ThemeConsumerCard() {
  const { isDark, toggle } = useContext(ThemeCtx);
  return (
    <div className={\`p-4 rounded-xl text-xs space-y-2 \${isDark ? "bg-slate-950 text-white" : "bg-amber-50 text-slate-900 border border-amber-200"}\`}>
      <p>الوضع المفعل الآن: {isDark ? "الوضع المظلم 🌙" : "الوضع المضيء ☀️"}</p>
      <button onClick={toggle} className="px-3 py-1 bg-indigo-600 text-white rounded font-bold">
        تبديل المظهر
      </button>
    </div>
  );
}

function ThemeContextSimpleDemo() {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeCtx.Provider value={{ isDark, toggle: () => setIsDark(d => !d) }}>
      <ThemeConsumerCard />
    </ThemeCtx.Provider>
  );
}`,
      advancedExample: `// نظام متعدد اللغات متكامل (Localization & Direction Studio) يدعم العربية والإنجليزية
import { createContext, useContext, useState } from "react";

// قواميس الترجمة البسيطة
const TRANSLATIONS = {
  ar: {
    title: "منصة التقنية الحديثة",
    welcome: "مرحباً بك في مجتمع مطوري React بالعالم العربي!",
    action: "تصفح الدورات",
    direction: "rtl"
  },
  en: {
    title: "Modern Tech Platform",
    welcome: "Welcome to the premier React developer community!",
    action: "Browse Courses",
    direction: "ltr"
  }
};

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [lang, setLang] = useState("ar");

  const switchLanguage = (newLang) => {
    setLang(newLang);
    document.documentElement.dir = TRANSLATIONS[newLang].direction;
    document.documentElement.lang = newLang;
  };

  const value = {
    lang,
    t: TRANSLATIONS[lang],
    switchLanguage
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

// مكون الواجهة المستهلك للسياق
function LocalizedHeroCard() {
  const { lang, t, switchLanguage } = useLocale();

  return (
    <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 text-white">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <h4 className="font-bold text-sm text-indigo-400">{t.title}</h4>
        <div className="flex gap-1.5">
          <button
            onClick={() => switchLanguage("ar")}
            className={\`px-2 py-0.5 rounded text-[10px] font-bold \${lang === "ar" ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-400"}\`}
          >
            العربية
          </button>
          <button
            onClick={() => switchLanguage("en")}
            className={\`px-2 py-0.5 rounded text-[10px] font-bold \${lang === "en" ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-400"}\`}
          >
            English
          </button>
        </div>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">{t.welcome}</p>

      <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs font-bold text-white transition-all shadow-md shadow-emerald-900/40">
        {t.action} →
      </button>
    </div>
  );
}

export function LocalizationContextSuiteDemo() {
  return (
    <LocaleProvider>
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto">
        <LocalizedHeroCard />
      </div>
    </LocaleProvider>
  );
}`,
      output: "بنقرة زر واحدة، تتبدل لغة النصوص والترجمة بالكامل بين العربية والإنجليزية في كل مكونات الصفحة وتتغير محاذاة النص والاتجاه (dir) بسلاسة فائقة.",
      commonMistakes: [
        {
          mistake: "تخزين النصوص المترجمة كاملة في state بدلاً من تخزين رمز اللغة فقط (مثل 'ar' أو 'en').",
          why: "هذا يهدر مساحة الذاكرة؛ يكفي تخزين رمز اللغة lang في الـ State واستخراج النصوص كـ Derived Data من كائن القاموس الثابت.",
          fix: "خزن فقط رمز اللغة: const [locale, setLocale] = useState('ar')."
        }
      ],
      bestPractices: [
        "احرص على مزامنة اتجاه الصفحة document.documentElement.dir = 'rtl' عند اختيار اللغة العربية.",
        "احفظ خيار المستخدم المفضل في localStorage حتى يتذكره المتصفح عند عودته لاحقاً."
      ],
      infographicCard: {
        type: "localization-architecture",
        title: "هندسة سياق الثيم واللغة",
        elements: [
          "State: خيار اللغة (ar / en) أو الثيم (dark / light)",
          "Provider: يبث القاموس ودالة التبديل switchLang()",
          "Consumers: أي بطاقة في الموقع تستدعي useLocale() وتأخذ نصوصها واتجاهها فوراً"
        ]
      }
    },
    {
      id: "7.4.f",
      title: "مشاركة بيانات المستخدم",
      englishTerm: "Authentication & User Session Context Architecture",
      description: "العمود الفقري لإدارة جلسة تسجيل الدخول وتوثيق المستخدمين (Authentication Context) في تطبيقات الويب الحديثة. يوفر هذا السياق بيانات المستخدم الحالي (User Profile)، وحالة تسجيل الدخول (isAuthenticated)، ودوال تسجيل الدخول (login) وتسجيل الخروج (logout)، مع إمكانية فحص وحماية المسارات والصفحات الحساسة بناءً على رتبة وصلاحيات المستخدم (RBAC).",
      realLifeAnalogy: "مثل بطاقة الهوية الرقمية أو تصريح الدخول الأمني في مجمع الشركات؛ يحمل التصريح اسمك وصورتك ومستوى أمانك. يبرزه الموظف عند أي بوابة داخلية للتحقق مما إذا كان مسموحاً له بدخول غرفة الاجتماعات أو السيرفرات.",
      whyItMatters: "يمنع تكرار طلب بيانات المستخدم من الخادم في كل صفحة، ويوفر تجربة دخول وخروج متسقة ومحمية في كامل التطبيق.",
      syntax: "const { user, login, logout, isAdmin } = useAuth();",
      simpleExample: `// سياق جلسة مستخدم مبسط
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

function UserProfileWidget() {
  const { user, logout } = useContext(AuthContext);

  if (!user) return <div className="text-xs text-slate-400">زائر غير مسجل.</div>;

  return (
    <div className="p-3 bg-slate-800 rounded-lg text-xs space-y-1">
      <p className="font-bold text-white">العضو: {user.name} ({user.role})</p>
      <button onClick={logout} className="px-2 py-0.5 bg-rose-600 text-white rounded text-[11px]">
        خروج
      </button>
    </div>
  );
}

function SimpleAuthDemo() {
  const [user, setUser] = useState({ name: "أحمد النجار", role: "مشرف عام" });

  return (
    <AuthContext.Provider value={{ user, logout: () => setUser(null) }}>
      <UserProfileWidget />
    </AuthContext.Provider>
  );
}`,
      advancedExample: `// نظام مصادقة متكامل بـ AuthContext مع تسجيل الدخول والخروج والتحقق من الصلاحيات
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const loginAsAdmin = () => {
    setUser({
      id: "usr-admin-1",
      name: "سارة المنصور",
      email: "sara@company.com",
      role: "admin",
      permissions: ["read", "write", "delete"]
    });
  };

  const loginAsUser = () => {
    setUser({
      id: "usr-normal-2",
      name: "ماجد الهذلي",
      email: "majed@gmail.com",
      role: "user",
      permissions: ["read"]
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: user !== null,
    isAdmin: user?.role === "admin",
    loginAsAdmin,
    loginAsUser,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider!");
  return ctx;
}

// مكون محمي يعرض لوحة تحكم حسب الصلاحية
function ProtectedDashboardPanel() {
  const { user, isAuthenticated, isAdmin, loginAsAdmin, loginAsUser, logout } = useAuth();

  return (
    <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 text-white text-xs">
      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
        <span className="font-bold text-indigo-400">بوابة التوثيق وجلسة المستخدم</span>
        <span className={\`px-2.5 py-0.5 rounded-full font-bold text-[10px] \${
          isAuthenticated ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-800 text-slate-400"
        }\`}>
          {isAuthenticated ? "جلسة نشطة ✅" : "جلسة ضيف ❌"}
        </span>
      </div>

      {!isAuthenticated ? (
        <div className="space-y-3 py-2">
          <p className="text-slate-400">يرجى تسجيل الدخول لتجربة صلاحيات المستخدمين:</p>
          <div className="flex gap-2">
            <button
              onClick={loginAsAdmin}
              className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all text-white shadow-md shadow-indigo-900/40"
            >
              دخول كـ مدير نظام 👑
            </button>
            <button
              onClick={loginAsUser}
              className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-all text-slate-200 border border-slate-700"
            >
              دخول كـ مستخدم عادي 👤
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
            <p className="font-bold text-slate-100">{user.name}</p>
            <p className="text-slate-400 font-mono text-[10px]">{user.email}</p>
            <span className={\`inline-block px-2 py-0.5 rounded text-[10px] font-bold mt-1 \${
              isAdmin ? "bg-amber-500/20 text-amber-300" : "bg-sky-500/20 text-sky-300"
            }\`}>
              الرتبة: {isAdmin ? "مدير نظام كامل الصلاحيات" : "عضو قياسي"}
            </span>
          </div>

          {/* قسم سري يظهر للمدراء فقط */}
          {isAdmin ? (
            <div className="p-3 bg-amber-950/20 border border-amber-800/40 rounded-xl text-amber-300">
              ⚡ <strong>منطقة العمليات السرية:</strong> يحق لك حذف قواعد البيانات وإدارة المستخدمين.
            </div>
          ) : (
            <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl text-slate-400">
              🔒 العمليات الإدارية مقفلة؛ تحتاج صلاحية Admin للوصول للوحة التحكم العليا.
            </div>
          )}

          <button
            onClick={logout}
            className="w-full py-2 bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white rounded-xl font-bold transition-all border border-rose-500/40"
          >
            تسجيل الخروج من الجلسة 🚪
          </button>
        </div>
      )}
    </div>
  );
}

export function AuthContextSuiteDemo() {
  return (
    <AuthProvider>
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto">
        <ProtectedDashboardPanel />
      </div>
    </AuthProvider>
  );
}`,
      output: "يقوم AuthContext بالتحكم الكامل في واجهة الموقع؛ يبدل الشاشات من تسجيل الدخول إلى الملف الشخصي، ويعرض أدوات الإدارة للمشرف فقط، ويصفر الجلسة عند الخروج فوراً.",
      commonMistakes: [
        {
          mistake: "تخزين كلمة المرور الخام أو التوكن السري في كائن user المعروض في Context.",
          why: "أي مكون في التطبيق يمكنه قراءة كائن user كاملاً، وتخزين كلمات المرور أو التوكنات الحساسة في الذاكرة العادية يعرضها للسرقة عبر هجمات XSS!",
          fix: "خزن فقط بيانات العرض (name, email, role) واحتفظ بالـ JWT token في HttpOnly Cookie آمن."
        }
      ],
      bestPractices: [
        "مرر خصائص مساعدة مشتقة ومريحة داخل السياق مثل: isAuthenticated و isAdmin لتسهيل كتابة الشروط في كافة المكونات.",
        "استرجع بيانات الجلسة المخزنة في localStorage أو الكوكيز عند التركيب الأول للموفر (Mount)."
      ],
      infographicCard: {
        type: "auth-flow-card",
        title: "حماية الواجهات عبر سياق المصادقة AuthContext",
        steps: [
          "1. التحقق: const { isAuthenticated, isAdmin } = useAuth()",
          "2. الحماية: if (!isAuthenticated) return <LoginPage />",
          "3. الصلاحيات: {isAdmin && <SuperAdminControls />}"
        ]
      }
    },
    {
      id: "7.4.g",
      title: "تحديث بيانات Context",
      englishTerm: "Providing Updater Functions via Context Value",
      description: "النمط المعماري الذي يسمح للمكونات الأبناء العميقة بتحديث بيانات السياق المشتركة. بدلاً من تمرير القيمة فقط (value={data})، يقوم الموفر بتمرير كائن يحتوي على القيمة ودالة التحديث معاً (value={{ data, setData }} أو دوال مساعدة متخصصة مثل addItem, deleteItem).",
      realLifeAnalogy: "مثل فتح حساب بنكي مشترك؛ يمنح البنك كلا الشريكين دفتر شيكات وبطاقات صراف، فيستطيع أي منهما إيداع أموال أو سحب مبالغ وتحديث الرصيد المشترك للطرفين.",
      whyItMatters: "يمكن المكونات الفرعية البعيدة من إطلاق تحديثات في كامل التطبيق دون الحاجة لتمرير دوال callbacks شاقة عبر 10 طبقات من المكونات.",
      syntax: "<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>",
      simpleExample: `// تمرير القيمة ودالة التحديث معاً
import { createContext, useContext, useState } from "react";

const CounterCtx = createContext();

function ChildIncrementer() {
  // استقبال دالة التحديث من قلب السياق
  const { count, increment } = useContext(CounterCtx);
  return (
    <button onClick={increment} className="px-3 py-1 bg-emerald-600 rounded text-xs text-white font-bold">
      زيادة العداد المشترك ({count})
    </button>
  );
}

function ContextUpdaterDemo() {
  const [count, setCount] = useState(10);
  const increment = () => setCount(c => c + 1);

  return (
    <CounterCtx.Provider value={{ count, increment }}>
      <div className="p-4 bg-slate-900 rounded-xl space-y-2">
        <ChildIncrementer />
      </div>
    </CounterCtx.Provider>
  );
}`,
      advancedExample: `// مركز عمليات متعدد المهام يوفر دوال تعديل وإضافة وحذف كاملة عبر السياق
import { createContext, useContext, useState } from "react";

const TeamContext = createContext(null);

export function TeamProvider({ children }) {
  const [members, setMembers] = useState([
    { id: 1, name: "عمر الفاروق", active: true },
    { id: 2, name: "منى الشمري", active: false }
  ]);

  const addMember = (name) => {
    setMembers((prev) => [...prev, { id: Date.now(), name, active: true }]);
  };

  const toggleStatus = (id) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, active: !m.active } : m))
    );
  };

  const removeMember = (id) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <TeamContext.Provider value={{ members, addMember, toggleStatus, removeMember }}>
      {children}
    </TeamContext.Provider>
  );
}

function TeamListManager() {
  const { members, toggleStatus, removeMember } = useContext(TeamContext);

  return (
    <div className="space-y-2 text-xs">
      {members.map((m) => (
        <div key={m.id} className="flex justify-between items-center p-2.5 bg-slate-950 rounded-xl border border-slate-800">
          <span className={m.active ? "text-slate-100 font-bold" : "text-slate-500 line-through"}>
            {m.name}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => toggleStatus(m.id)}
              className="text-[10px] px-2 py-0.5 bg-slate-800 rounded text-indigo-400"
            >
              {m.active ? "تعطيل" : "تفعيل"}
            </button>
            <button
              onClick={() => removeMember(m.id)}
              className="text-[10px] px-2 py-0.5 bg-rose-600/30 text-rose-300 rounded"
            >
              حذف
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContextUpdatersSuiteDemo() {
  return (
    <TeamProvider>
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm mx-auto text-white space-y-4">
        <h4 className="font-bold text-sm text-indigo-400">تحديثات السياق المتقدمة</h4>
        <TeamListManager />
      </div>
    </TeamProvider>
  );
}`,
      output: "يقوم الابن باستدعاء addMember و toggleStatus و removeMember المستلمة مباشرة من السياق وتحديث كامل شجرة الأعضاء بنظافة وانسيابية.",
      commonMistakes: [
        {
          mistake: "تمرير دالة setState مباشرة في السياق بدون تغليف مثل: value={{ data, setData }} وإتاحة المجال لأي مكون للعبث بالبيانات.",
          why: "تمرير setData مباشرة يفقدك السيطرة على منطق الأعمال (Business Logic)؛ فلو قام مكون بكتابة بيانات مشوهة ستنهار بقية المكونات!",
          fix: "مرر دوالاً ذات أسماء أفعال واضحة وقواعد عمل محددة (مثل addItem, updateProfile) بدلاً من تمرير setter عشوائي."
        }
      ],
      bestPractices: [
        "قدم دوالاً تعبر عن نوايا المستخدم (Action-oriented functions) مثل: toggleTodo, addComment.",
        "احرص على استخدام التحديث الوظيفي prev => next داخل دوال التحديث لمنع حالات السباق."
      ],
      infographicCard: {
        type: "capsule-pattern",
        title: "حزمة الموفر المثالية (State + Actions)",
        value: "value={{ state, actions: { add, remove, toggle } }}"
      }
    },
    {
      id: "7.4.h",
      title: "تجنب إعادة التصيير غير الضرورية",
      englishTerm: "Context Performance Optimization (Splitting & useMemo)",
      description: "الحل الهندسي للمشكلة الأدائية الشهيرة في React Context: عندما تتغير قيمة value الممررة للموفر، فإن كل مكون يستدعي useContext(MyContext) يُعاد تصييره تلقائياً حتى لو كان الجزء الذي يحتاجه لم يتغير! يتم حل هذه المشكلة بتقنيتين معماريتين: 1) تثبيت مرجع الكائن باستخدام useMemo لمنع إعادة الرندر عند إعادة تصيير الأب، 2) فصل السياق إلى سياقين مستقلين: سياق للبيانات وسياق لدوال الإجراءات (Splitting State and Dispatch Contexts).",
      realLifeAnalogy: "مثل فصل عداد الكهرباء عن عداد المياه؛ لو زاد استهلاكك للماء، لن يتأثر عداد الكهرباء ولن تأتيك فاتورة كهرباء مضاعفة لأن كل شبكة معزولة في عداد مستقل.",
      whyItMatters: "يحمي التطبيقات الكبيرة من بطء الاستجابة ويضمن أن المكونات التي تحتاج دوال التحديث فقط لا يُعاد تصييرها عندما تتغير البيانات المعروضة.",
      syntax: "// 1. تثبيت كائن القيمة بـ useMemo\nconst contextValue = useMemo(() => ({ data, actions }), [data]);\n<MyContext.Provider value={contextValue}>\n\n// 2. فصل السياقين\n<StateContext.Provider value={state}>\n  <DispatchContext.Provider value={dispatch}>",
      simpleExample: `// تثبيت كائن القيمة باستخدام useMemo
import { createContext, useState, useMemo } from "react";

const MyOptimizedContext = createContext();

function OptimizedProviderWrapper({ children }) {
  const [data, setData] = useState("بيانات ثابتة");

  // خطوة جوهرية: تثبيت كائن القيمة في الذاكرة بـ useMemo
  const memoizedValue = useMemo(() => ({
    data,
    update: () => setData("بيانات جديدة")
  }), [data]);

  return (
    <MyOptimizedContext.Provider value={memoizedValue}>
      {children}
    </MyOptimizedContext.Provider>
  );
}`,
      advancedExample: `// النمط المتقدم العالمي: فصل سياق البيانات عن سياق دوال التحديث (State & Dispatch Splitting)
import { createContext, useContext, useState } from "react";

// سياق 1: مخصص للبيانات فقط (يتغير كثيراً)
const CounterStateContext = createContext(null);
// سياق 2: مخصص لدوال التحديث فقط (ثابت للأبد ولا يتغير!)
const CounterDispatchContext = createContext(null);

export function SeparatedCounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);

  return (
    <CounterStateContext.Provider value={count}>
      <CounterDispatchContext.Provider value={increment}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

// مكون العرض: يستمع للـ State فقط (يُعاد رندره عند تغير الرقم)
function CounterValueDisplay() {
  const count = useContext(CounterStateContext);
  console.log("🔄 رندر شاشة العرض CounterValueDisplay!");
  return <div className="text-xl font-bold font-mono text-emerald-400">{count}</div>;
}

// مكون الزر: يستمع للـ Dispatch فقط (لن يُعاد رندره نهائياً عند زيادة العداد!)
function CounterActionButton() {
  const increment = useContext(CounterDispatchContext);
  console.log("⚡ رندر زر الإجراء CounterActionButton (يحدث مرة واحدة فقط!)");
  return (
    <button
      onClick={increment}
      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-bold text-white transition-all shadow-md shadow-indigo-900/40"
    >
      زيادة العداد (زر محمي من إعادة الرندر)
    </button>
  );
}

export function ContextOptimizationSuiteDemo() {
  return (
    <SeparatedCounterProvider>
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm mx-auto text-white space-y-4 text-center">
        <h4 className="font-bold text-sm text-indigo-400">عزل السياق (Context Splitting Optimization)</h4>
        <CounterValueDisplay />
        <CounterActionButton />
        <p className="text-[10px] text-slate-400">
          افتح الكونسول F12؛ ستلاحظ أن الزر لا يُعاد رندره إطلاقاً عند النقر بفضل فصل السياقين!
        </p>
      </div>
    </SeparatedCounterProvider>
  );
}`,
      output: "المكون الزر لا يُعاد رندره عند زيادة العداد إطلاقاً لأنه مشترك في سياق CounterDispatchContext الثابت في الذاكرة، مما يوفر طاقة المعالجة بنسبة 100%.",
      commonMistakes: [
        {
          mistake: "كتابة value={{ user, setUser }} ككائن مضمن جديد داخل JSX في كل رندر دون useMemo.",
          why: "في كل رندر للأب، يتم إنشاء كائن جافاسكريبت جديد بعنوان ذاكرة جديد ({ user } !== { user })، مما يجبر كل مكون في التطبيق يقرأ هذا السياق على إعادة الرندر حتى لو لم تتغير قيمة user!",
          fix: "استخدم useMemo لتثبيت كائن القيمة: const val = useMemo(() => ({ user, setUser }), [user]);."
        }
      ],
      bestPractices: [
        "استخدم نمط Context Splitting في التطبيقات ذات التحديثات السريعة والمتكررة.",
        "إذا وجدت نفسك تقسم أكثر من 5 سياقات لتفادي مشاكل الأداء، فهذه إشارة واضحة لاستخدام مكتبات إدارة الحالة المتخصصة (مثل Zustand) التي تعتمد على المحددات الذكية (Selectors)."
      ],
      infographicCard: {
        type: "split-optimization",
        title: "هندسة فصل السياقات (Context Splitting Architecture)",
        columns: [
          { name: "StateContext", purpose: "يحمل البيانات فقط (مثل count)", behavior: "يُعيد رندر المكونات التي تقرأ الرقم فقط" },
          { name: "DispatchContext", purpose: "يحمل الدوال فقط (مثل increment)", behavior: "ثابت في الذاكرة ولا يُعيد رندر الأزرار أبداً!" }
        ]
      }
    },
    {
      id: "7.4.i",
      title: "متى تستخدم Context ومتى تتجنبها",
      englishTerm: "When to Use Context vs Component Composition",
      description: "الموازنة الهندسية والبوصلة الاستشارية لاتخاذ القرار الصحيح: هل تحتاج حقاً إلى React Context؟ في كثير من الأحيان، يلجأ المطورون إلى Context لمجرد تجنب تمرير props عبر طبقتين، مما يجعل المكونات معتمدة على سياق خارجي ويصعب إعادة استخدامها (Tightly Coupled). البديل الأبسط والأقوى في أغلب الأحيان هو تركيب المكونات (Component Composition) بتمرير المكون كـ children.",
      realLifeAnalogy: "مثل شراء تذكرة طيران خاصة بكامل الطائرة لمجرد أنك تريد السفر إلى المدينة المجاورة! يمكنك ركوب سيارتك الخاصة في 20 دقيقة (Composition) بدلاً من استئجار طائرة ومطار وطاقم ملاحة كامل (Context).",
      whyItMatters: "يحافظ على مرونة المكونات وسهولة اختبارها وإعادة استخدامها في مشاريع متعددة دون الارتباط بموفرات خارجية مفروضة.",
      syntax: "// بديل Context الذكي: تمرير المكون كـ children\nfunction Layout({ sidebar, content }) {\n  return <div>{sidebar} {content}</div>;\n}",
      simpleExample: `// حل مشكلة تمرير البيانات بالتركيب Composition بدلاً من Context
function PageHeader({ userBadge }) {
  // الهيدر لا يعرف شيئاً عن user؛ يستلم المكون الجاهز ويعرضه فقط!
  return <header className="p-3 bg-slate-800 rounded">{userBadge}</header>;
}

function CompositionAlternativeDemo() {
  const user = { name: "فاطمة" };

  return (
    <div className="p-4 bg-slate-900 rounded-xl text-white text-xs">
      {/* تمرير المكون جاهزاً كـ prop يلغي الحاجة لـ Context تماماً! */}
      <PageHeader userBadge={<span className="text-emerald-400 font-bold">{user.name}</span>} />
    </div>
  );
}`,
      advancedExample: `// دليل اتخاذ القرار المعماري الشامل: مقارنة البدائل
export function ContextDecisionMatrixSuite() {
  const matrix = [
    {
      case: "1. بيانات الثيم العام (Dark/Light) ولغة الواجهة (i18n)",
      choice: "استخدم React Context فوراً ✅",
      reason: "تستخدمها 90% من مكونات التطبيق في كافة أرجاء الشجرة."
    },
    {
      case: "2. بيانات جلسة المستخدم والتوثيق (Current User)",
      choice: "استخدم React Context فوراً ✅",
      reason: "بيانات عامة يحتاجها الهيدر والشريط الجانبي وحماية الروابط."
    },
    {
      case: "3. تمرير بيانات عبر طبقتين فقط (الأب -> الحاوية -> الابن)",
      choice: "استخدم Component Composition (children) 💡",
      reason: "أبسط بمراحل ويحافظ على استقلالية المكونات وإمكانية اختبارها."
    },
    {
      case: "4. بيانات متقلبة وسريعة جداً (تتغير 60 مرة في الثانية كالرسوم)",
      choice: "تجنب Context! استخدم Zustand أو مراجع useRef ⚡",
      reason: "تحديثات Context تؤدي لإعادة رندر كل المشتركين مما يسبب تشنج الحركة."
    }
  ];

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-white space-y-4 max-w-md mx-auto">
      <h4 className="font-bold text-sm text-indigo-400">بوصلة القرار: هل تحتاج حقاً إلى React Context؟</h4>

      <div className="space-y-2.5">
        {matrix.map((row, i) => (
          <div key={i} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-1">
            <h5 className="font-bold text-slate-200">{row.case}</h5>
            <p className="text-emerald-400 font-semibold text-[11px]">{row.choice}</p>
            <p className="text-[10px] text-slate-400">{row.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
      output: "يقدم المكون توجيهاً معمارياً متوازناً يحمي المطور من الإفراط في استخدام Context ويوجه نحو الحلول الأبسط كالتكوين Composition.",
      commonMistakes: [
        {
          mistake: "استخدام Context كبديل أعمى لأي تمرير Props في التطبيق.",
          why: "يجعل المكونات 'مقيدة' بشدة (Tightly coupled) بالموفر؛ فإذا أردت استخدام نفس المكون في صفحة أخرى دون الموفر، سينهار التطبيق فوراً!",
          fix: "استخدم Props أولاً، ثم Composition، وفقط إذا كانت البيانات عامة على مستوى التطبيق بالكامل، استخدم Context."
        }
      ],
      bestPractices: [
        "قبل إنشاء سياق جديد، جرب دائماً نمط: <Layout header={<Header user={user} />} />.",
        "عامل React Context كأداة لحقن الاعتماديات والبيانات العامة (Dependency Injection) وليس كأداة لإدارة تدفق العمليات اليومية البسيطة."
      ],
      infographicCard: {
        type: "decision-flowchart",
        title: "مسار اختيار إدارة البيانات في React",
        path: [
          "هل تحتاج البيانات في مكون ابن مباشر؟ -> Props عادية",
          "هل تعاني من تمريرها عبر 2-3 طبقات وسيطة؟ -> جرب Component Composition (children)",
          "هل البيانات عامة ويحتاجها كامل التطبيق (ثيم/توثيق)؟ -> استخدم React Context! 🎯",
          "هل البيانات معقدة جداً وتتطلب فلاتر واختيارات دقيقة؟ -> استخدم Zustand / Redux"
        ]
      }
    }
  ],
  quizzes: [
    {
      id: "q7-4-1",
      question: "ما هي المشكلة الأساسية التي صُمم React Context لحلها؟",
      options: [
        "تسريع اتصال قاعدة البيانات بالمتصفح",
        "حل مشكلة تمرير الخصائص اليدوي المرهق عبر العديد من المستويات الوسيطة (Props Drilling)",
        "تحويل ملفات JavaScript إلى لغة ثنائية Binary",
        "حذف الحاجة لكتابة وسوم HTML"
      ],
      correctAnswer: 1,
      explanation: "الهدف الرئيسي لـ Context هو مشاركة البيانات العامة (كالمستخدم والثيم واللغة) مع كافة المكونات في الشجرة دون الحاجة لتمريرها كخصائص عبر المكونات الوسيطة التي لا تحتاجها."
    },
    {
      id: "q7-4-2",
      question: "ماذا سيحدث للمكونات التي تستدعي useContext(MyContext) عندما تتغير قيمة value الممررة للـ Provider؟",
      options: [
        "لن يحدث لها أي شيء وتبقى على قيمتها القديمة",
        "ستُعاد تصييرها تلقائياً (Re-render) بالبيانات الجديدة حتى لو كانت مغلفة بـ React.memo",
        "سيتم حذفها من شجرة العناصر فوراً",
        "ستتوقف عن قبول نقرات المستخدم"
      ],
      correctAnswer: 1,
      explanation: "عندما تتغير خاصية value في الموفر، تقوم React بإعادة تصيير كافة المكونات المشتركة المستهلكة لهذا السياق فوراً لضمان تحديث الواجهة بالبيانات الجديدة."
    },
    {
      id: "q7-4-3",
      question: "كيف يمكنك تحسين أداء React Context وتفادي الرندرات الزائدة للأزرار التي تحتاج دوال التحديث فقط؟",
      options: [
        "بإلغاء استخدام خطاف useContext",
        "بفصل السياق إلى سياقين مستقلين: StateContext للبيانات و DispatchContext للدوال (Context Splitting)، وتثبيت كائن القيمة بـ useMemo",
        "بحذف دالة useState واستبدالها بمتغيرات عامة",
        "بوضع جميع المكونات في ملف واحد"
      ],
      correctAnswer: 1,
      explanation: "فصل سياق البيانات عن سياق الإجراءات (Context Splitting) واستخدام useMemo يضمن أن المكونات التي تحتاج الدوال فقط لن يُعاد تصييرها عندما تتغير البيانات المعروضة."
    }
  ],
  exercise: {
    id: "ex7-4",
    title: "بناء نظام ثيم ولغة متكامل عبر Context مع حماية من الرندرات الزائدة",
    description: "المطلوب بناء منظومة سياق متكاملة باسم AppPreferencesSuite تتضمن: 1) إنشاء PreferencesContext يوفر سمة المظهر (dark/light) واللغة (ar/en) مع دوال التبديل الخاصة بهما، 2) تغليف كائن القيمة الممررة للموفر بـ useMemo لمنع الرندرات الزائدة، 3) إنشاء Custom Hook باسم usePreferences مع فحص الأمان (throw Error if null)، 4) مكونين فرعيين عميقين يستهلكان الخيارات ويغيران مظهر واتجاه ولغة الصفحة بانسيابية تامة.",
    starterCode: `export function AppPreferencesSuite() {
  // اكتب كود السياق والموفر والمكونات هنا
  return (
    <div>
      {/* صمم الجناح */}
    </div>
  );
}`,
    hints: [
      "أنشئ PreferencesContext = createContext(null).",
      "في الموفر، استخدم useMemo لتثبيت كائن القيمة: useMemo(() => ({ theme, lang, toggleTheme, toggleLang }), [theme, lang]).",
      "في usePreferences: افحص if (!ctx) throw new Error(...).",
      "في المكونات الفرعية: استدعِ usePreferences واستخدم الخصائص لتغيير الألوان والنصوص."
    ],
    solution: `import { createContext, useContext, useState, useMemo } from "react";

// 1. إنشاء السياق
const PreferencesContext = createContext(null);

// قاموس الترجمة البسيط
const DICTIONARY = {
  ar: {
    title: "تفضيلات النظام الشاملة",
    desc: "نظام متكامل لإدارة الثيم واللغة والاتجاه عبر React Context",
    themeLabel: "الوضع البصري الحالي:",
    dark: "الوضع الليلي 🌙",
    light: "الوضع النهاري ☀️",
    switchTheme: "تبديل المظهر",
    switchLang: "English"
  },
  en: {
    title: "Global App Preferences",
    desc: "Complete Theme, Language & Direction suite via React Context",
    themeLabel: "Active Visual Theme:",
    dark: "Dark Mode 🌙",
    light: "Light Mode ☀️",
    switchTheme: "Toggle Theme",
    switchLang: "العربية"
  }
};

// 2. الموفر المحسن بـ useMemo
export function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("ar");

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));

  // تثبيت كائن القيمة لمنع الرندرات الزائدة للأبناء
  const value = useMemo(() => ({
    theme,
    lang,
    t: DICTIONARY[lang],
    toggleTheme,
    toggleLang
  }), [theme, lang]);

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

// 3. الخطاف المخصص الآمن مع فحص الأمان
export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("❌ usePreferences must be used within <PreferencesProvider>!");
  }
  return context;
}

// 4. مكون فرعي عميق يستهلك التفضيلات
function PreferencesControlPanel() {
  const { theme, lang, t, toggleTheme, toggleLang } = usePreferences();

  const isDark = theme === "dark";

  return (
    <div className={\`p-6 rounded-3xl border transition-all duration-300 space-y-4 \${
      isDark 
        ? "bg-slate-950 border-slate-800 text-white" 
        : "bg-amber-50 border-amber-200 text-slate-900 shadow-xl"
    }\`}>
      <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
        <h4 className="font-bold text-sm text-indigo-400">{t.title}</h4>
        <button
          onClick={toggleLang}
          className="text-xs px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold"
        >
          {t.switchLang}
        </button>
      </div>

      <p className="text-xs opacity-80 leading-relaxed">{t.desc}</p>

      <div className="flex justify-between items-center p-3 rounded-2xl bg-black/10 border border-black/10 text-xs">
        <span>{t.themeLabel} <strong>{isDark ? t.dark : t.light}</strong></span>
        <button
          onClick={toggleTheme}
          className={\`px-3 py-1.5 rounded-xl font-bold transition-all shadow-md \${
            isDark ? "bg-indigo-600 text-white" : "bg-slate-900 text-white"
          }\`}
        >
          {t.switchTheme}
        </button>
      </div>
    </div>
  );
}

// 5. المكون الرئيسي المنظم
export function AppPreferencesSuite() {
  return (
    <PreferencesProvider>
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-md mx-auto font-sans">
        <PreferencesControlPanel />
      </div>
    </PreferencesProvider>
  );
}`
  },
  infographic: {
    title: "خارطة إتقان React Context الشاملة",
    description: "الدليل المرئي الكامل لإنشاء وتوفير واستهلاك السياق وتحسين الأداء المعماري.",
    sections: [
      {
        heading: "1. الثالوث المقدس لـ Context",
        bullets: [
          "createContext: إنشاء القناة مع قيمة افتراضية Fallback.",
          "Provider: برج البث الأب الحاوي لخاصية value المحددة.",
          "useContext: جهاز الاستقبال في الابن لالتقاط القيمة بسطر واحد."
        ]
      },
      {
        heading: "2. الأنماط القياسية في الإنتاج",
        bullets: [
          "Custom Hook مخصص: إنشاء useAuth() و useTheme() مع فحص الأمان if (!ctx).",
          "تثبيت المرجع بـ useMemo: لمنع إعادة رندر الأبناء عند رندر الموفر.",
          "عزل السياقات: فصل StateContext عن DispatchContext لأعلى سرعة."
        ]
      },
      {
        heading: "3. ترشيد الاستخدام (Context vs Composition)",
        bullets: [
          "البيانات العامة (Auth, Theme, i18n): استخدم React Context فوراً.",
          "التمرير القصير لطبقتين: استخدم Component Composition (children) ببساطة."
        ]
      }
    ]
  }
};
