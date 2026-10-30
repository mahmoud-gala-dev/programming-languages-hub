// section34Meta.js - القسم 34: الاستعداد لسوق العمل واحتراف React (Career Path & Interview Prep - The Grand Finale)
// البيانات الوصفية، الملخص الشامل، جدول المرجع السريع، والمشروع الختامي التفاعلي

export const SECTION_34_META = {
  summaryRules: [
    {
      ruleNumber: 1,
      title: "إتقان النواة الداخلية قبل تجريدات المكتبات (Deep Internal Mechanics over Surface Syntaxes)",
      description: "المقابل التقني المحترف لا يسألك عن طريقة كتابة `useState` بل يسألك كيف يرتبط بـ Fiber Node وكيف تحافظ React على ترتيب الخطافات عبر قائمة أحادية الترابط (Linked List). فهم الآليات العميقة يميز مهندس الـ 1% عن مجرد مستخدم للأدوات."
    },
    {
      ruleNumber: 2,
      title: "السرد التقني المتمحور حول التحديات والمفاضلات (Decision-Centric Storytelling in Portfolio)",
      description: "في معرض أعمالك ومقابلاتك، لا تتحدث فقط عما بنيته، بل اشرح المشكلة التي واجهتك، البدائل التقنية التي درستها، لماذا استبعدت بعضها، وما هي المقاييس الكمية (Lighthouse score، زمن التحميل، التوفير في استهلاك الذاكرة) التي حققتها."
    },
    {
      ruleNumber: 3,
      title: "التحليل الخوارزمي والكفاءة المكانية في JavaScript (Algorithmic & Spatial Complexity O(N))",
      description: "تجنب الحلقات المتداخلة `O(N²)` التي تقتل أداء المتصفح؛ استبدل البحث بالـ `find` داخل المصفوفات بقواميس وجداول تجزئة (Hash Maps / Sets) لتحقيق وصول سريع في زمن ثابت `O(1)`."
    },
    {
      ruleNumber: 4,
      title: "استيعاب ثنائية مرحلة التصيير والالتزام (Render vs Commit Mental Model)",
      description: "اعلم دائماً أن مرحلة Render نقية، قابلة للمقاطعة، ولا تحدث أي تأثير في شجرة DOM الحقيقية. بينما مرحلة Commit متزامنة وغير قابلة للمقاطعة وتكتب التغييرات للـ DOM وتشغل `useLayoutEffect` ثم تطلق `useEffect` بعد طلاء الشاشة."
    },
    {
      ruleNumber: 5,
      title: "القياس والتشخيص بالأدوات قبل التحسين العشوائي (Profile First, Memoize Never Prematurely)",
      description: "لا تغلف كل دالة وقيمة بـ `useCallback` و `useMemo`؛ فالتحسين المبكر يستهلك ذاكرة إضافية ويعقد الكود بدون فائدة. استخدم React DevTools Profiler واكتشف الاختناقات الحقيقية قبل تطبيق المذكرة."
    },
    {
      ruleNumber: 6,
      title: "اختبار سلوك المستخدم لا تفاصيل التنفيذ الداخلية (Behavior-Driven Testing over Implementation Details)",
      description: "اختبر ما يراه ويلمسه المستخدم (`getByRole('button', { name: /تأكيد/i })`) ولا تختبر أسماء الدوال الداخلية أو قيم الـ State الخاصة. هذا يجعل اختباراتك صلبة ومقاومة للكسر عند إعادة هيكلة الكود (Refactoring)."
    },
    {
      ruleNumber: 7,
      title: "البراغماتية الهندسية ومبدأ YAGNI (Pragmatic Engineering & YAGNI Principle)",
      description: "لا تبنِ تجريدات معقدة وأنظمة معمارية ضخمة تحسباً لاحتياجات مستقبلية افتراضية لم يطلبها العميل. اكتب كوداً بسيطاً ومباشراً وقابلاً للتوسع عندما تفرض الحاجة ذلك فعلياً (You Aren't Gonna Need It)."
    },
    {
      ruleNumber: 8,
      title: "النموذج T-Shaped والتعلم النشط المستمر (T-Shaped Mastery & Living RFC Tracking)",
      description: "اجمع بين عمق استثنائي في بيئة عمل React (Stem of the T) وفهم عريض للمجالات المحيطة كالأمان، وتجربة المستخدم، وشبكات الويب، وهندسة البنية التحتية (Bar of the T). تابع مقترحات RFC الرسمية ولا تتوقف عن التجربة والابتكار."
    }
  ],

  cheatSheet: [
    { topic: "Lexical Scope & TDZ", syntax: "let x; (ReferenceError if accessed before)", purpose: "المتغيرات المعرفة بـ let/const ترفع ولكن تبقى في منطقة ميتة حتى سطر التهيئة" },
    { topic: "Closures", syntax: "function outer() { return () => secret; }", purpose: "احتفاظ الدالة الداخلية بالنطاق المعجمي للدالة الأب حتى بعد انتهاء تنفيذها" },
    { topic: "Event Loop Priority", syntax: "Microtasks (Promises) > Macrotasks (setTimeout)", purpose: "طابور المهام الدقيقة يفرغ بالكامل قبل الانتقال للماكرو-تاسك القادم" },
    { topic: "Promise Combinators", syntax: "Promise.allSettled([p1, p2])", purpose: "انتظار كافة الوعود وإرجاع تقرير بحالة كل وعد سواء نجح أو فشل دون إيقاف العملية" },
    { topic: "Functional Pipelines", syntax: "data.filter(...).map(...).reduce(...)", purpose: "معالجة البيانات بأسلوب وظيفي غير تعديلي (Immutable) ونقي بدون آثار جانبية" },
    { topic: "Hash Map Lookup", syntax: "const map = new Map(); map.get(id);", purpose: "تحويل البحث من تعقيد زمني بطيء O(N) إلى وصول فائق السرعة O(1)" },
    { topic: "Debounce Pattern", syntax: "clearTimeout(timer); timer = setTimeout(fn, delay);", purpose: "تأخير تنفيذ الدالة حتى يتوقف المستخدم عن الكتابة أو إطلاق الأحداث لفترة محددة" },
    { topic: "Throttle Pattern", syntax: "if (Date.now() - lastRun >= limit) { fn(); }", purpose: "ضمان تنفيذ الدالة بمعدل أقصى مرة واحدة كل فترة زمنية (Scroll / Resize)" },
    { topic: "Render vs Commit", syntax: "Render (V-DOM Diffing) -> Commit (Real DOM Mutate)", purpose: "الفصل المعماري بين حساب الفروقات (قابل للإلغاء) وتطبيقها في الشاشة (متزامن)" },
    { topic: "Fiber Linked List", syntax: "fiber.child -> fiber.sibling -> fiber.return", purpose: "هيكلية شجرة React Fiber كقائمة أحادية الترابط تسمح بجدولة وتجزئة العمل" },
    { topic: "Rules of Hooks", syntax: "Only at Top Level (No loops, ifs, nested functions)", purpose: "ضمان الحفاظ على نفس ترتيب استدعاء المؤشرات في Linked List الخاص بالمكون" },
    { topic: "useLayoutEffect", syntax: "useLayoutEffect(() => { measureDOM(); }, [])", purpose: "التنفيذ المتزامن مباشرة بعد تحديث DOM وقبل قيام المتصفح بطلاء البكسلات لتفادي الوميض" },
    { topic: "useMemo & useCallback", syntax: "useMemo(() => compute(), [deps]) / useCallback(fn, [deps])", purpose: "تخزين ناتج العمليات الحسابية الثقيلة أو استقرار مراجع الدوال عبر دورات التصيير" },
    { topic: "useRef Escape Hatch", syntax: "const ref = useRef(val); ref.current = newVal;", purpose: "الاحتفاظ بقيمة قابلة للتعديل أو مرجع عنصر DOM دون إطلاق إعادة تصيير للمكون" },
    { topic: "Context vs Zustand", syntax: "create((set) => ({ count: 0 }))", purpose: "عزل المشتركين وتفادي إعادة تصيير المكونات غير المهتمة التي يسببها React Context" },
    { topic: "Error Boundary", syntax: "componentDidCatch(error, info) { ... }", purpose: "صيد الأخطاء البرمجية في شجرة المكونات وعرض واجهة بديلة دون انهيار التطبيق بالكامل" },
    { topic: "React.memo", syntax: "export default React.memo(MyComp, arePropsEqual);", purpose: "منع إعادة تصيير المكون النقي إذا لم تتغير قيمه المدخلة عبر مقارنة سطحية" },
    { topic: "Code Splitting", syntax: "const LazyComp = React.lazy(() => import('./Comp'));", purpose: "تقسيم حزمة الكود وتنزيل أجزاء التطبيق عند الحاجة فقط لتقليل زمن التحميل الأولي" },
    { topic: "Rendering Matrix", syntax: "CSR (Client) / SSR (Request) / SSG (Build) / ISR (Stale-While)", purpose: "الموازنة المعمارية بين كفاءة محركات البحث وسرعة التحميل وديناميكية البيانات" },
    { topic: "Server Components (RSC)", syntax: "async function ServerComponent() { await db.query(); }", purpose: "تنفيذ منطق البيانات على الخادم وإرسال كود HTML/JSX فقط بحجم حزمة جافاسكريبت صفرية" },
    { topic: "PERT Estimation", syntax: "E = (O + 4M + P) / 6 | σ = (P - O) / 6", purpose: "حساب التقدير الهندسي الواقعي للمهام البرمجية بناءً على التفاؤل والواقع والتشاؤم" },
    { topic: "Conventional Commits", syntax: "feat(auth): add OAuth2 google login provider", purpose: "صياغة رسائل التعديل في Git وفق معيار هندسي موحد يسهل توليد سجل التغييرات آلياً" },
    { topic: "Behavior Testing", syntax: "expect(screen.getByRole('heading')).toBeInTheDocument();", purpose: "محاكاة التفاعل البشري الفعلي دون الالتفات إلى تفاصيل الكود الداخلية" },
    { topic: "SemVer Architecture", syntax: "MAJOR.MINOR.PATCH (Breaking.Feature.Bugfix)", purpose: "إدارة إصدارات المكتبات وحزم البرمجيات بضمانات عدم كسر التوافقية العكسية" },
    { topic: "React Native Primitives", syntax: "<View>, <Text>, <Pressable>, <FlatList>", purpose: "مكونات أصلية تترجم إلى عناصر نظام التشغيل الحقيقية (UIView / Android View)" },
    { topic: "T-Shaped Model", syntax: "Depth: React/JS/Web | Breadth: UI/UX, Cloud, DevOps, Sec", purpose: "بناء مسار وظيفي استثنائي يجمع بين التخصص العميق والقدرة على قيادة المنظومة ككل" }
  ],

  capstoneProject: {
    id: "capstone-34",
    title: "المشروع الختامي 15: منصة محاكاة المقابلات وحاسبة التقدير الهندسي الشاملة (Career & Interview Master Studio)",
    description: "تطبيق مهني متكامل يجمع ثلاثة أدوات أساسية لكل مهندس برمجيات محترف: محاكي مقابلات تقنية تفاعلي يختبر مفاهيم React و JavaScript العميقة مع تصحيح فوري وشروحات، حاسبة التقديرات الهندسية بنموذج PERT الرياضي لحساب زمن المهام وتحديد نسب المخاطر، وبوصلة التخصص المهني T-Shaped لتقييم المهارات واكتشاف مسار التطور المستقبلي.",
    features: [
      "محاكي مقابلات تفاعلي حي يضم أسئلة خوارزميات وReact داخلية مع مؤقت وتفسير فوري للإجابات",
      "حاسبة PERT الهندسية لحساب الوقت المتوقع والانحراف المعياري ودرجة المخاطرة للمشاريع",
      "بوصلة التخصص T-Shaped التفاعلية لحساب مؤشر الجاهزية لسوق العمل (Career Readiness Score)",
      "تصميم عصري متجاوب يدعم الاتجاهين مع واجهة مستخدم داكنة متطورة وإحصائيات رسومية فورية"
    ],
    code: `import React, { useState, useMemo } from 'react';

// أسئلة محاكي المقابلات التقنية الحية
const INTERVIEW_QUESTIONS = [
  {
    id: 1,
    topic: "React Internals",
    question: "لماذا تفرض React استدعاء الخطافات (Hooks) في المستوى الأعلى فقط دون وضعها داخل الشروط أو الحلقات؟",
    options: [
      { text: "لأن JavaScript لا تدعم الدوال المغلقة داخل الشروط", correct: false },
      { text: "لأن React تعتمد على ترتيب الاستدعاء لتتبع قيم الـ State في القائمة الأحادية (Linked List) لـ Fiber", correct: true },
      { text: "لتوفير مساحة الذاكرة في المتصفح فقط", correct: false },
      { text: "لأنها تترجم إلى عناصر HTML ثابتة أثناء مرحلة البناء", correct: false }
    ],
    explanation: "تخزن React خطافات المكون في قائمة أحادية الترابط (Linked List) مرتبطة بـ Fiber Node. إذا تم استدعاء خطاف داخل شرط قد لا يتحقق، سيختل ترتيب المؤشرات وتصبح قيم الحالة غير متطابقة."
  },
  {
    id: 2,
    topic: "JavaScript Engine",
    question: "ما هو الترتيب الدقيق لتنفيذ المهام التالية في الـ Event Loop؟",
    codeSnippet: "console.log('1');\\nsetTimeout(() => console.log('2'), 0);\\nPromise.resolve().then(() => console.log('3'));\\nconsole.log('4');",
    options: [
      { text: "1 ثم 2 ثم 3 ثم 4", correct: false },
      { text: "1 ثم 4 ثم 2 ثم 3", correct: false },
      { text: "1 ثم 4 ثم 3 ثم 2", correct: true },
      { text: "3 ثم 1 ثم 4 ثم 2", correct: false }
    ],
    explanation: "الكود المتزامن يعمل أولاً (1 ثم 4). بعد إفراغ الـ Call Stack، تفرغ طابور المهام الدقيقة Microtasks (Promise يطبع 3)، ثم تفرغ طابور الماكرو Macrotasks (setTimeout يطبع 2)."
  },
  {
    id: 3,
    topic: "Rendering Performance",
    question: "متى يكون استخدام React.memo مضراً للأداء بدلاً من تحسينه؟",
    options: [
      { text: "عندما يكون المكون يستقبل نصوصاً وأرقاماً فقط", correct: false },
      { text: "عندما يعيد المكون التصيير دائماً بمدخلات جديدة أو عندما تكون كلفة المقارنة السطحية أكبر من كلفة إعادة رسم المكون البسيط", correct: true },
      { text: "عندما يحتوي المكون على أزرار تفاعلية", correct: false },
      { text: "React.memo لا يضر بالأداء في أي سيناريو أبداً", correct: false }
    ],
    explanation: "تغليف المكونات البسيطة بـ React.memo يضيف كلفة حسابية لمقارنة الـ Props قبل كل تصيير. إذا كانت الـ Props تتغير دائماً، فستتحمل كلفة المقارنة بالإضافة لكلفة إعادة التصيير معاً."
  }
];

// مهارات بوصلة التخصص المهني T-Shaped
const DEFAULT_SKILLS = [
  { id: 'react', name: 'React & Ecosystem Depth', level: 90, category: 'Core (Vertical)' },
  { id: 'js', name: 'Modern JS / TS Mechanics', level: 85, category: 'Core (Vertical)' },
  { id: 'perf', name: 'Web Performance & CWV', level: 75, category: 'Core (Vertical)' },
  { id: 'backend', name: 'APIs & Backend Integration', level: 65, category: 'Breadth (Horizontal)' },
  { id: 'testing', name: 'Automated Testing (E2E/Unit)', level: 80, category: 'Breadth (Horizontal)' },
  { id: 'devops', name: 'CI/CD & Cloud Deployment', level: 60, category: 'Breadth (Horizontal)' },
  { id: 'soft', name: 'Estimation & Communication', level: 85, category: 'Breadth (Horizontal)' }
];

export default function CareerStudioApp() {
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' | 'pert' | 'tshaped'

  // حالة محاكي المقابلات
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // حالة حاسبة PERT
  const [taskName, setTaskName] = useState("تطوير نظام الاشتراكات والمصادقة");
  const [optimisticHours, setOptimisticHours] = useState(8);
  const [nominalHours, setNominalHours] = useState(16);
  const [pessimisticHours, setPessimisticHours] = useState(36);

  // حالة بوصلة T-Shaped
  const [skills, setSkills] = useState(DEFAULT_SKILLS);

  // حساب معادلات PERT
  const pertCalculations = useMemo(() => {
    const o = Number(optimisticHours) || 0;
    const m = Number(nominalHours) || 0;
    const p = Number(pessimisticHours) || 0;
    const expected = (o + 4 * m + p) / 6;
    const stdDev = (p - o) / 6;
    const riskRange = [Math.max(0, expected - stdDev).toFixed(1), (expected + stdDev).toFixed(1)];
    return {
      expected: expected.toFixed(1),
      stdDev: stdDev.toFixed(1),
      riskRange,
      confidence95: [(expected - 2 * stdDev).toFixed(1), (expected + 2 * stdDev).toFixed(1)]
    };
  }, [optimisticHours, nominalHours, pessimisticHours]);

  // مؤشر الجاهزية لسوق العمل T-Shaped
  const careerReadinessScore = useMemo(() => {
    const total = skills.reduce((acc, s) => acc + s.level, 0);
    return Math.round(total / skills.length);
  }, [skills]);

  // التعامل مع إجابة السؤال
  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (INTERVIEW_QUESTIONS[currentQIndex].options[idx].correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex + 1 < INTERVIEW_QUESTIONS.length) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const handleUpdateSkill = (id, newLevel) => {
    setSkills(prev => prev.map(s => s.id === id ? { ...s, level: Number(newLevel) } : s));
  };

  return (
    <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl border border-slate-800 shadow-2xl max-w-5xl mx-auto font-sans text-start" dir="rtl">
      {/* الترويسة الرئيسية */}
      <header className="border-b border-slate-800 pb-5 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-cyan-500/20 text-cyan-400 text-xs px-2.5 py-0.5 rounded-full border border-cyan-500/30 font-mono">
              React Career Studio Pro • Final Capstone
            </span>
            <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-mono">
              جاهز لسوق العمل
            </span>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            منصة الإعداد الوظيفي وهندسة المقابلات البرمجية
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            الأداة الشاملة لمحاكاة أسئلة المقابلات المعمقة، احتساب التقديرات الهندسية الواقعية، وتقييم المهارات T-Shaped
          </p>
        </div>

        {/* أزرار التبويب */}
        <div className="flex bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/60">
          <button
            onClick={() => setActiveTab('quiz')}
            className={\`px-4 py-2 rounded-lg text-sm font-medium transition-all \${
              activeTab === 'quiz' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white'
            }\`}
          >
            🎯 محاكي المقابلات
          </button>
          <button
            onClick={() => setActiveTab('pert')}
            className={\`px-4 py-2 rounded-lg text-sm font-medium transition-all \${
              activeTab === 'pert' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white'
            }\`}
          >
            ⏱️ حاسبة PERT الهندسية
          </button>
          <button
            onClick={() => setActiveTab('tshaped')}
            className={\`px-4 py-2 rounded-lg text-sm font-medium transition-all \${
              activeTab === 'tshaped' ? 'bg-cyan-500 text-slate-950 font-bold shadow-md' : 'text-slate-300 hover:text-white'
            }\`}
          >
            🧭 بوصلة T-Shaped
          </button>
        </div>
      </header>

      {/* المحتوى بحسب التبويب */}
      {activeTab === 'quiz' && (
        <section className="space-y-6">
          {!quizFinished ? (
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="bg-slate-700 px-2 py-1 rounded text-cyan-300 font-mono">
                  الموضوع: {INTERVIEW_QUESTIONS[currentQIndex].topic}
                </span>
                <span>سؤال {currentQIndex + 1} من {INTERVIEW_QUESTIONS.length}</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-100 leading-relaxed">
                {INTERVIEW_QUESTIONS[currentQIndex].question}
              </h3>

              {INTERVIEW_QUESTIONS[currentQIndex].codeSnippet && (
                <pre className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto" dir="ltr">
                  {INTERVIEW_QUESTIONS[currentQIndex].codeSnippet}
                </pre>
              )}

              <div className="space-y-2.5 pt-2">
                {INTERVIEW_QUESTIONS[currentQIndex].options.map((opt, idx) => {
                  let optStyle = "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-750 hover:border-slate-600";
                  if (isAnswered) {
                    if (opt.correct) {
                      optStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-300 font-medium";
                    } else if (selectedOption === idx) {
                      optStyle = "bg-rose-950/60 border-rose-500 text-rose-300";
                    } else {
                      optStyle = "bg-slate-900/40 border-slate-800 text-slate-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={\`w-full p-3.5 rounded-lg border text-sm text-start transition-all flex items-center justify-between \${optStyle}\`}
                    >
                      <span>{opt.text}</span>
                      {isAnswered && opt.correct && <span className="text-emerald-400 text-xs font-bold">✓ صحيح</span>}
                      {isAnswered && selectedOption === idx && !opt.correct && <span className="text-rose-400 text-xs font-bold">✗ خطأ</span>}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="bg-cyan-950/30 border border-cyan-800/50 p-4 rounded-lg text-sm text-cyan-200 mt-4 space-y-2 animate-fadeIn">
                  <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                    💡 الشرح المعماري للمقابل التقني:
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {INTERVIEW_QUESTIONS[currentQIndex].explanation}
                  </p>
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleNextQuestion}
                      className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                    >
                      {currentQIndex + 1 < INTERVIEW_QUESTIONS.length ? "السؤال التالي ←" : "عرض النتيجة النهائية"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center bg-slate-800/50 p-8 rounded-xl border border-slate-700/60 space-y-4">
              <div className="text-5xl">🏆</div>
              <h3 className="text-2xl font-bold text-white">اكتمل اختبار المحاكاة بنجاح!</h3>
              <p className="text-slate-300 text-sm">
                حققت نتيجة <span className="text-cyan-400 font-bold font-mono text-lg">{score}</span> من أصل <span className="font-mono text-lg">{INTERVIEW_QUESTIONS.length}</span>
              </p>
              <div className="inline-block bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-xs text-slate-400">
                {score === INTERVIEW_QUESTIONS.length
                  ? "🌟 أداء استثنائي يماثل مهندسي الـ 1% (Senior Ready)"
                  : "👍 أداء جيد جداً! راجع الشروحات الهندسية لتعزيز النقاط العميقة"}
              </div>
              <div className="pt-2">
                <button
                  onClick={handleRestartQuiz}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-5 py-2 rounded-lg text-sm transition-all"
                >
                  إعادة الاختبار 🔄
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {activeTab === 'pert' && (
        <section className="space-y-6">
          <div className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
            <h3 className="text-base font-bold text-cyan-300 mb-1">
              حاسبة التقدير الهندسي الرياضي (PERT Estimation Engine)
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              تعتمد الشركات العالمية على معادلة بيتا الإحصائية لتقدير زمن المهام البرمجية بدقة وتفادي الوعود غير الواقعية:
              <code className="text-cyan-400 font-mono mx-1">Expected = (O + 4M + P) / 6</code>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-slate-300 font-medium block mb-1">عنوان المهمة الهندسية:</label>
                  <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-[11px] text-emerald-400 block mb-1">متفائل (O) ساعات:</label>
                    <input
                      type="number"
                      value={optimisticHours}
                      onChange={(e) => setOptimisticHours(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-cyan-400 block mb-1">واقعي (M) ساعات:</label>
                    <input
                      type="number"
                      value={nominalHours}
                      onChange={(e) => setNominalHours(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-rose-400 block mb-1">متشائم (P) ساعات:</label>
                    <input
                      type="number"
                      value={pessimisticHours}
                      onChange={(e) => setPessimisticHours(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-slate-400 mb-1">الزمن المتوقع هندسياً (Expected Hours):</div>
                  <div className="text-3xl font-bold font-mono text-cyan-400">
                    {pertCalculations.expected} <span className="text-xs text-slate-400 font-normal">ساعة عمل</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-500 block">الانحراف المعياري (σ):</span>
                    <span className="font-mono text-amber-400 font-semibold">±{pertCalculations.stdDev} ساعة</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">نطاق الثقة 68%:</span>
                    <span className="font-mono text-slate-200">{pertCalculations.riskRange[0]} - {pertCalculations.riskRange[1]} س</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-400 mt-2">
                  🎯 في مراجعات Sprint، قدم للإدارة: <span className="text-cyan-300 font-mono font-bold">{pertCalculations.expected}h</span> مع مخاطرة حتى <span className="text-rose-400 font-mono font-bold">{pertCalculations.confidence95[1]}h</span> بنسبة ثقة 95%.
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'tshaped' && (
        <section className="space-y-6">
          <div className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-base font-bold text-cyan-300">مقياس التخصص المهني T-Shaped Compass</h3>
                <p className="text-xs text-slate-400">
                  قيم مستواك الحالي في الأعمدة الرأسية العميقة والمهارات العريضة لمعرفة مؤشر الجاهزية
                </p>
              </div>
              <div className="bg-slate-900 border border-cyan-500/40 px-4 py-2 rounded-xl text-center">
                <span className="text-[11px] text-slate-400 block">مؤشر الجاهزية لسوق العمل:</span>
                <span className="text-2xl font-bold font-mono text-cyan-400">{careerReadinessScore}%</span>
              </div>
            </div>

            <div className="space-y-3">
              {skills.map(skill => (
                <div key={skill.id} className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500 font-mono">{skill.category}</span>
                      <span className="font-mono text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={skill.level}
                    onChange={(e) => handleUpdateSkill(skill.id, e.target.value)}
                    className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* تذييل الواجهة التفاعلية */}
      <footer className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
        <div>🚀 تهانينا! لقد أتممت دراسة خريطة طريق React.js الاحترافية بالكامل.</div>
        <div className="font-mono text-slate-400">34 Sections • 137 Topics • 1217 Subtopics • Master Level</div>
      </footer>
    </div>
  );
}
`,
    livePreviewAvailable: true
  },

  sectionInfographic: {
    title: "خريطة عبور سوق العمل والاحتراف الهندسي الشامل",
    subtitle: "Section 34: Career Path, Technical Interviews & Continuous Mastery",
    pillars: [
      {
        title: "معرض الأعمال الفعال (Portfolio)",
        description: "مشاريع واقعية قليلة وعميقة مع كود نظيف وتوثيق هندسي STAR واستضافة سريعة."
      },
      {
        title: "جوهر JavaScript و React",
        description: "فهم الـ Event Loop، الـ Fiber Tree، الـ Closures، وآليات الـ Reconciliation."
      },
      {
        title: "المهندس المحترف (Soft & Hard)",
        description: "تقديرات PERT الرياضية، المراجعات البناءة، وعزل تفاصيل التنفيذ في الاختبارات."
      },
      {
        title: "التوسع المستمر (T-Shaped)",
        description: "متابعة مقترحات RFC، استكشاف React Native و Next.js، وبناء حزم NPM عامة."
      }
    ],
    milestones: [
      "إعداد معرض الأعمال وفق معيار STAR مع توثيق القرارات المعمارية ADRs",
      "اجتياز مقابلات JavaScript المعقدة (Event Loop, Async, O(N) Maps)",
      "اجتياز مقابلات React الداخلية (Fiber, Reconciliation, Linked-List Hooks)",
      "تبني التفكير الهندسي البراغماتي ومبدأ YAGNI والاختبار المبني على السلوك",
      "الوصول إلى مستوى الـ 1% كمهندس برمجيات T-Shaped رائد في سوق العمل العالمي"
    ]
  }
};

