// src/data/sections/section16/section16Meta.js
// بيانات وملخص القسم 16: أنماط التصميم وتنظيم التطبيقات (Design Patterns & Application Architecture)

export const section16Meta = {
  id: "section-16",
  title: "أنماط التصميم وتنظيم التطبيقات في React",
  description:
    "المرجع المعماري المتقدم لهندسة مشاريع React الضخمة: إتقان أنماط التصميم المتطورة (Compound Components, Headless, Render Props, HOCs, Custom Hooks)، تنظيم المجلدات بالمعمارية القائمة على الميزات (Feature-Based Architecture)، تطبيق مبادئ SOLID وDRY وKISS وYAGNI في React، وإتقان التعامل مع الشيفرات القديمة (Legacy Class Components) وترحيلها بأمان واحترافية.",

  // 8 قواعد ذهبية معمارية تلخص القسم
  summary: [
    {
      rule: 1,
      title: "فضل تركيب المكونات (Composition) دائماً على الوراثة والتجريد المعقد",
      desc: "تركيب المكونات عبر خاصية children ونمط Compound Components يمنحك مرونة هائلة وتجربة استخدام بديهية دون الحاجة لخلق طبقات وراثة جامدة أو تمرير عشرات الـ Props التعسفية.",
    },
    {
      rule: 2,
      title: "افصل منطق العمل (Business Logic) تماماً عن واجهة العرض التقديمية",
      desc: "استخرج استدعاءات الشبكة، والتحقق من صحة القواعد، والحسابات إلى Custom Hooks معزولة، ودع مكونات العرض تكون دوال نقية (Pure Presentational Views) تعتمد على Props فقط.",
    },
    {
      rule: 3,
      title: "اعتمد معمارية المجلدات القائمة على الميزات (Feature-Based Architecture)",
      desc: "في المشاريع المتوسطة والكبيرة، اجمع كل ما يتعلق بالميزة الواحدة (مكونات، خطافات، خدمات API، اختبارات وأنواع) داخل مجلد `features/feature-name` لضمان التماسك العالي واستقلالية الحذف والتطوير.",
    },
    {
      rule: 4,
      title: "التزم بمبدأ المسؤولية الواحدة (Single Responsibility Principle)",
      desc: "يجب أن تمتلك كل وحدة برمجية (مكون أو خطاف) سبباً واحداً فقط للتعديل. لا تجعل المكون يجلب البيانات من الخادم، ويفحص الاستمارات، ويقوم بتنسيق الرسوميات في ملف واحد متضخم.",
    },
    {
      rule: 5,
      title: "قاعدة الثلاثة في DRY: لا تجرد مبكراً",
      desc: "التكرار الطفيف لسطور من التصميم البصري أرخص بكثير من التجريد المعماري الخاطئ والمتسرع (Premature Abstraction). لا تستخرج منطقاً مشتركاً إلا بعد تكراره في 3 أماكن متطابقة على الأقل.",
    },
    {
      rule: 6,
      title: "KISS و YAGNI: الكود البسيط يفوز دائماً",
      desc: "ابنِ فقط ما يحتاجه التطبيق اليوم للمتطلبات الملموسة. تجنب إضافة خواص تخمينية للمستقبل (Speculative Generality) واستخدم أبسط الحلول المباشرة وتجنب المبالغة الهندسية.",
    },
    {
      rule: 7,
      title: "قلل الاقتران (Loose Coupling) واعكس الاعتماديات الخارجية",
      desc: "لا تجعل مكونات واجهة المستخدم تعتمد مباشرة على بنى كائنات معقدة من الـ Backend أو مكتبات طرف ثالث محددة؛ بل اعتمد على واجهات تجريدية وحقن الخدمات لتسهيل الاختبارات والاستبدال.",
    },
    {
      rule: 8,
      title: "افهم دورة حياة React القديمة لترقية الأكواد بأمان",
      desc: "فهم الفرق بين componentDidMount/Update/Unmount ونظيرها العصري في useEffect يجعلك قادراً على صيانة وترحيل ملايين أسطر الكود القديم في المؤسسات الكبرى بثقة واحترافية.",
    },
  ],

  // جدول المرجع السريع (Cheat Sheet) - أكثر من 20 صفاً تفصيلياً
  cheatSheet: [
    {
      concept: "Compound Components",
      type: "نمط تصميم",
      usage: "مكونات مترابطة تشترك بالحالة ضمنياً (مثل <Tabs><Tabs.List><Tabs.Tab /></Tabs.List></Tabs>).",
      modernAlternative: "React Context الداخلي مع خاصية children",
    },
    {
      concept: "Headless Components",
      type: "نمط تصميم",
      usage: "فصل منطق وسلوك المكون التفاعلي وإمكانية الوصول كلياً عن التصميم والشكل الخارجي.",
      modernAlternative: "Custom Hooks (مثل useTable, useCombobox) أو مكتبات كـ Radix UI",
    },
    {
      concept: "Render Props",
      type: "نمط تصميم قديم",
      usage: "تمرير دالة كخاصية (prop) للمكون لتحديد ما يتم تصييره استناداً لحالة المكون الداخلية.",
      modernAlternative: "تم استبدال معظم حالاته بـ Custom Hooks الحديثة",
    },
    {
      concept: "Higher-Order Components (HOC)",
      type: "نمط تصميم كلاسيكي",
      usage: "دالة تستقبل مكوناً وترجع مكوناً محسناً ومزوداً ببيانات أو صلاحيات إضافية.",
      modernAlternative: "Custom Hooks أو تركيب المكونات بالـ Composition",
    },
    {
      concept: "Single Responsibility (SRP)",
      type: "مبدأ نظيف",
      usage: "جعل كل مكون مسؤولاً عن مهمة واحدة محددة وامتلاكه سبباً واحداً فقط للتعديل.",
      modernAlternative: "عزل البيانات في Hooks وعزل العرض في Presentational Components",
    },
    {
      concept: "Feature-Based Architecture",
      type: "هندسة ملفات",
      usage: "تنظيم الملفات في مجلدات حسب مجال العمل الوظيفي (features/auth, features/cart).",
      modernAlternative: "أفضل ممارسة في كافة مشاريع React المتوسطة والضخمة اليوم",
    },
    {
      concept: "Path Aliases (@/*)",
      type: "إعدادات البنية",
      usage: "استبدال المسارات النسبية الطويلة (../../../components) باختصار نظيف ومطلق مثل (@/components).",
      modernAlternative: "تكوين tsconfig.json و vite.config.ts",
    },
    {
      concept: "Barrel Exports (index.ts)",
      type: "هندسة ملفات",
      usage: "تصدير الوظائف والمكونات العامة من ملف index مركزي كواجهة تعاقدية واضحة للوحدة.",
      modernAlternative: "استخدامها بحكمة لمنع التبعيات الدائرية والانتفاخ",
    },
    {
      concept: "Circular Dependencies",
      type: "خطر معماري",
      usage: "اعتماد ملف A على B واعتماد ملف B في نفس الوقت على A مما يسبب أخطاء وقت التشغيل.",
      modernAlternative: "استخراج المشترك لملف C ثالث أو استخدام أدوات فحص كـ madge",
    },
    {
      concept: "DRY Principle",
      type: "مبدأ نظيف",
      usage: "عدم تكرار المنطق البرمجي والحسابات والتحقق، مع احترام قاعدة الثلاثة لتجنب التجريد الخاطئ.",
      modernAlternative: "استخراج الدوال النفعية النقية في src/utils",
    },
    {
      concept: "KISS Principle",
      type: "مبدأ نظيف",
      usage: "إبقاء الكود بسيطاً ومباشراً وتجنب المبالغة الهندسية أو استخدام مكتبات معقدة لحالات بسيطة.",
      modernAlternative: "تفضيل useState على Redux للحالات المحلية واحتساب القيم مشتقة",
    },
    {
      concept: "YAGNI Principle",
      type: "مبدأ نظيف",
      usage: "عدم إضافة ميزات أو معاملات مرونة تخمينية لم يطلبها المستخدمون فعلياً اليوم.",
      modernAlternative: "كتابة الحد الأدنى المطلوب وتطوير الكود تدرجياً عند الحاجة",
    },
    {
      concept: "Loose Coupling",
      type: "مبدأ معماري",
      usage: "تقليل اعتماد المكون على تفاصيل المكونات الأخرى أو تفاصيل بنية خادم الـ API.",
      modernAlternative: "تمرير Props صريحة محددة فقط وتجنب تمرير كائنات الـ API الخام المكدسة",
    },
    {
      concept: "Dependency Inversion (DIP)",
      type: "مبدأ معماري",
      usage: "اعتماد واجهات المستخدم على خدمات مجردة بدلاً من استيراد مكتبات خارجية مباشرة.",
      modernAlternative: "حقن عملاء الـ API عبر React Context أو Custom Hooks",
    },
    {
      concept: "Refactoring Loop",
      type: "ممارسة برمجية",
      usage: "تحسين بنية الكود الداخلية تدريجياً دون تغيير سلوكه الخارجي بعد تأمين اختبارات خضراء.",
      modernAlternative: "Boy Scout Rule: ترك الكود أنظف مما وجدته في كل مهمة",
    },
    {
      concept: "Class Component",
      type: "React كلاسيكي",
      usage: "فئات ES6 ترث من React.Component وتحتوي على دالة constructor و render.",
      modernAlternative: "Functional Components مع React Hooks",
    },
    {
      concept: "componentDidMount",
      type: "دورة حياة قديمة",
      usage: "تُستدعى مرة واحدة فقط فور ظهور المكون في شجرة DOM الحقيقي لطلب الشبكة.",
      modernAlternative: "useEffect(() => { ... }, []) بمصفوفة تبعيات فارغة",
    },
    {
      concept: "componentDidUpdate",
      type: "دورة حياة قديمة",
      usage: "تُستدعى فور اكتمال إعادة التصيير الناتجة عن تغير props أو state.",
      modernAlternative: "useEffect(() => { ... }, [dependencies]) بوضع المتغيرات المتبعة",
    },
    {
      concept: "componentWillUnmount",
      type: "دورة حياة قديمة",
      usage: "تُستدعى قبيل إزالة المكون من الـ DOM لتنظيف المؤقتات والاشتراكات لمنع تسريب الذاكرة.",
      modernAlternative: "دالة الإرجاع النظيفة return () => { cleanup() } داخل useEffect",
    },
    {
      concept: "React.PureComponent",
      type: "React كلاسيكي",
      usage: "فئة تنفذ مقارنة سطحية (Shallow Comparison) تلقائياً على props و state لمنع التصيير الزائد.",
      modernAlternative: "React.memo(FunctionalComponent)",
    },
    {
      concept: "Callback Refs",
      type: "React كلاسيكي",
      usage: "دالة تمرر إلى خاصية ref لتخزين عنصر DOM مباشرة كمتغير في كائن الفئة.",
      modernAlternative: "useRef() الحديث",
    },
    {
      concept: "UNSAFE_ Lifecycle",
      type: "نمط مهجور",
      usage: "توابع componentWillMount و componentWillReceiveProps القديمة التي تم إلغاؤها لخطورتها.",
      modernAlternative: "محظورة تماماً في React 18+ ويجب استبدالها بـ useEffect أو الحالات المشتقة",
    },
    {
      concept: "ReactDOM.findDOMNode",
      type: "نمط محظور",
      usage: "دالة قديمة للبحث المباشر عن عنصر DOM لكائن مكون؛ تكسر التغليف المعماري.",
      modernAlternative: "محذوفة نهائياً؛ استخدم React Refs المباشرة حصراً",
    },
  ],

  // المشروع التطبيقي الختامي للقسم (Capstone Studio)
  capstoneProject: {
    id: "capstone-16",
    title: "ArchCraft Pro: منصة تدقيق ومعمارية مكونات React الاحترافية",
    subtitle: "استوديو هندسي تفاعلي يجمع أنماط التصميم النظيفة، ومحاكي الترحيل، والتدقيق المعماري المباشر",
    description:
      "مشروع تطبيقي متكامل يعمل كاستوديو للمهندسين المعماريين: يتضمن 1) محاكي تفاعلي لمكونات Compound Components (ألسنة تبويب وبطاقات مركبة)، 2) أداة فحص واكتشاف انتهاكات مبادئ SOLID وDRY وKISS ومشاكل الاعتماديات الدائرية مع تقديم توصيات تصحيحية فورية، 3) محول حي تفاعلي يوضح ترحيل مكون Class قديم إلى Functional Component حديث مع مقارنة مباشرة للشفرة واختبار دورة الحياة.",
    techStack: [
      "React 19 Functional Architecture",
      "Compound Components Design Pattern",
      "Clean Architecture & Feature Isolation",
      "Tailwind CSS v4 Modern Styling",
      "Interactive Code Comparison & Architecture Audit",
    ],
    features: [
      "نظام تبويبات تفاعلي كامل مبني بنمط Compound Components ونمط Context الضمني",
      "مدقق معماري تفاعلي يفحص الشيفرات ضد انتهاكات SRP وKISS وProps Drilling ويقدم درجات جودة",
      "محاكي ترحيل فوري جنباً إلى جنب (Class Component إلى Functional Hook) مع تجربة تشغيلية حية",
      "مصفوفة تتبع صحة الاعتماديات ومنع العلاقات الدائرية في المشاريع الضخمة",
    ],
    code: `import React, { useState, createContext, useContext } from 'react';

// ==========================================
// 1. نمط Compound Components: نظام التبويبات المتطور
// ==========================================
const TabsContext = createContext(null);

function TabsRoot({ activeTab, onTabChange, children }) {
  return (
    <TabsContext.Provider value={{ activeTab, onTabChange }}>
      <div className="space-y-4">{children}</div>
    </TabsContext.Provider>
  );
}

function TabsHeader({ children }) {
  return <div className="flex gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl">{children}</div>;
}

function TabTrigger({ value, icon, children }) {
  const { activeTab, onTabChange } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => onTabChange(value)}
      className={'flex-1 py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition ' + (
        isActive
          ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
          : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
      )}
    >
      <span>{icon}</span>
      <span>{children}</span>
    </button>
  );
}

function TabContent({ value, children }) {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;
  return <div className="animate-fadeIn">{children}</div>;
}

// دمج المكونات الفرعية كخصائص للمكون الرئيسي
export const CompoundTabs = Object.assign(TabsRoot, {
  Header: TabsHeader,
  Trigger: TabTrigger,
  Content: TabContent,
});

// ==========================================
// 2. محاكي التدقيق المعماري (Architecture Auditor)
// ==========================================
const ARCHITECTURE_RULES = [
  {
    id: 'srp',
    title: 'مبدأ المسؤولية الواحدة (SRP)',
    passed: true,
    score: 95,
    note: 'المكونات مفصولة بدقة: جلب البيانات في خطافات منفصلة ومكونات العرض نقية.',
  },
  {
    id: 'dry',
    title: 'مبدأ عدم التكرار (DRY)',
    passed: true,
    score: 90,
    note: 'تنسيقات العملة والتواريخ مستخرجة لدوال نفعية موحدة في طبقة utils.',
  },
  {
    id: 'props_drilling',
    title: 'مكافحة Props Drilling',
    passed: true,
    score: 88,
    note: 'تم التخلص من حفر الخصائص عبر نمط Compound Components وسياق Context الداخلي.',
  },
  {
    id: 'circular_deps',
    title: 'خلو الاعتماديات الدائرية',
    passed: true,
    score: 100,
    note: 'تدفق الاستيراد يسير في اتجاه أحادي صارم دون أي تداخل متبادل.',
  },
];

function ArchitectureAuditorWidget() {
  const [rules, setRules] = useState(ARCHITECTURE_RULES);
  const totalScore = Math.round(rules.reduce((acc, r) => acc + r.score, 0) / rules.length);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-6">
      <header className="flex justify-between items-center pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-base font-bold text-white">تقرير الجودة والتدقيق المعماري</h3>
          <p className="text-xs text-slate-400">فحص الامتثال لمبادئ هندسة React وتصميم النظم</p>
        </div>
        <div className="text-center px-4 py-2 bg-emerald-950/60 border border-emerald-500/40 rounded-xl">
          <span className="text-xl font-bold font-mono text-emerald-400">{totalScore}%</span>
          <span className="text-[10px] text-emerald-300 block">درجة الجودة</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rules.map((rule) => (
          <div key={rule.id} className="p-4 bg-slate-850/80 border border-slate-800 rounded-xl space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white">{rule.title}</span>
              <span className="text-xs font-mono font-bold text-sky-400">{rule.score}%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-sky-500 h-full rounded-full" style={{ width: rule.score + '%' }} />
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">{rule.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 3. محاكي الترحيل التفاعلي (Class to Hook Migration)
// ==========================================
function MigrationStudioWidget() {
  const [mode, setMode] = useState('functional'); // 'class' vs 'functional'
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-base font-bold text-white">محاكي الترحيل المعماري الحي</h3>
          <p className="text-xs text-slate-400">قارن بين كود الفئات الكلاسيكي وكود الدوال الحديث</p>
        </div>
        <div className="flex gap-2 p-1 bg-slate-800 rounded-lg">
          <button
            onClick={() => setMode('functional')}
            className={'px-3 py-1 text-xs font-bold rounded-md transition ' + (
              mode === 'functional' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-white'
            )}
          >
            المكون الدالي الحديث (Hooks)
          </button>
          <button
            onClick={() => setMode('class')}
            className={'px-3 py-1 text-xs font-bold rounded-md transition ' + (
              mode === 'class' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
            )}
          >
            المكون الفئوي القديم (Class)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* معاينة الكود */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2 font-mono text-[11px] text-slate-300 overflow-x-auto">
          <div className="flex justify-between text-slate-500 pb-2 border-b border-slate-800">
            <span>{mode === 'functional' ? 'CounterComponent.jsx (Modern)' : 'CounterComponent.jsx (Legacy)'}</span>
            <span className="text-sky-400">{mode === 'functional' ? '18 سطر' : '38 سطر'}</span>
          </div>
          {mode === 'functional' ? (
            <pre className="text-sky-300 leading-relaxed">
{\`// React 19 Modern Functional Component
import React, { useState, useEffect } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Mount / Update:', count);
  }, [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      العداد: {count}
    </button>
  );
}\`}
            </pre>
          ) : (
            <pre className="text-amber-300 leading-relaxed">
{\`// Legacy React Class Component
import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  componentDidMount() {
    console.log('Mount:', this.state.count);
  }

  componentDidUpdate() {
    console.log('Update:', this.state.count);
  }

  increment() {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  render() {
    return (
      <button onClick={this.increment}>
        العداد: {this.state.count}
      </button>
    );
  }
}\`}
            </pre>
          )}
        </div>

        {/* الواجهة التفاعلية الحية الناتجة */}
        <div className="p-6 bg-slate-850 border border-slate-800 rounded-xl space-y-4 text-center">
          <span className="text-xs text-slate-400 block">المعاينة التشغيلية للمكون</span>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <span className="text-3xl font-mono font-bold text-white block mb-3">{count}</span>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="px-5 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition"
            >
              زيادة العداد +
            </button>
          </div>
          <p className="text-xs text-slate-400">
            {mode === 'functional'
              ? 'يعمل بخفة عبر خطاف useState و useEffect المدمج دون أي كائن this.'
              : 'يعمل عبر فئة ES6 و this.setState ودوال دورة الحياة الكلاسيكية.'}
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. التطبيق الرئيسي الجامع لـ ArchCraft Pro
// ==========================================
export default function ArchCraftProCapstone() {
  const [activeTab, setActiveTab] = useState('compound');

  return (
    <div className="p-8 bg-slate-950 border border-slate-800 rounded-3xl max-w-5xl mx-auto space-y-6 shadow-2xl">
      <header className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏛️</span>
            <h2 className="text-2xl font-black text-white tracking-wide">ArchCraft Pro Studio</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            المنصة المعمارية الاحترافية لتدقيق وهندسة مكونات React الحديثة
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1 bg-sky-950/80 text-sky-400 border border-sky-500/30 rounded-full font-mono font-bold">
            React 19 Architecture Standard
          </span>
        </div>
      </header>

      {/* استهلاك نمط Compound Components للتبويبات */}
      <CompoundTabs activeTab={activeTab} onTabChange={setActiveTab}>
        <CompoundTabs.Header>
          <CompoundTabs.Trigger value="compound" icon="🧩">
            Compound Components
          </CompoundTabs.Trigger>
          <CompoundTabs.Trigger value="audit" icon="🛡️">
            تدقيق المعمارية (Clean Audit)
          </CompoundTabs.Trigger>
          <CompoundTabs.Trigger value="migration" icon="⚡">
            استوديو الترحيل (Legacy Migration)
          </CompoundTabs.Trigger>
        </CompoundTabs.Header>

        <CompoundTabs.Content value="compound">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
            <h3 className="text-base font-bold text-white">العرض الحي لنمط Compound Components</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              لاحظ كيف يتم توزيع الحالة بين المكون الحاضن <code className="text-sky-400 font-mono">CompoundTabs</code> وأزرار <code className="text-sky-400 font-mono">Trigger</code> ومحتوى <code className="text-sky-400 font-mono">Content</code> بسلاسة تامة دون تمرير أي Props يدوية مكررة بينها!
            </p>
            <div className="p-4 bg-slate-850 rounded-xl border border-slate-800 text-xs text-emerald-400 font-mono">
              ✓ تم تمرير الحالة ضمنياً عبر TabsContext الداخلي الخاص بالنمط.
            </div>
          </div>
        </CompoundTabs.Content>

        <CompoundTabs.Content value="audit">
          <ArchitectureAuditorWidget />
        </CompoundTabs.Content>

        <CompoundTabs.Content value="migration">
          <MigrationStudioWidget />
        </CompoundTabs.Content>
      </CompoundTabs>
    </div>
  );
}`,
  },

  // الإنفوجرافيك الشامل للقسم 16
  infographic: {
    title: "خريطة طريق معمارية وأنماط تصميم React في المشاريع الكبرى",
    caption: "من تنظيم الملفات وأنماط التصميم إلى الكود النظيف وترحيل الفئات القديمة",
    steps: [
      {
        number: 1,
        label: "أنماط بناء المكونات",
        desc: "Compound Components, Headless UI, Custom Hooks, والمقارنة مع HOCs القديمة",
      },
      {
        number: 2,
        label: "هندسة ملفات المشاريع",
        desc: "معمارية الميزات (Feature-Based), Path Aliases, ومنع التبعيات الدائرية",
      },
      {
        number: 3,
        label: "الكود النظيف في React",
        desc: "تطبيق مبادئ SOLID, SRP, DRY, KISS, YAGNI, وفصل منطق العمل عن العرض",
      },
      {
        number: 4,
        label: "التعامل مع الشيفرات القديمة",
        desc: "فهم Class Components ودورة الحياة وترحيلها بنجاح إلى المكونات الدالية",
      },
    ],
  },
};
