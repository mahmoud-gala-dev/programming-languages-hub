// topic4.js - القسم 34، الموضوع 4: مهارات المهندس المحترف (Professional Software Engineering Mindset)
// يحتوي على 10 مواضيع فرعية مفصلة وفق معايير الجودة الصارمة والشرح من الصفر

export const TOPIC_34_4 = {
  id: "topic-34-4",
  title: "مهارات المهندس المحترف",
  description: "دليل المهارات غير البرمجية والهندسية المتقدمة التي تميز مهندس البرمجيات المحترف (Senior Mindset) عن المبرمج المبتدئ: كيفية تفكيك المتطلبات الغامضة إلى تذاكر تنفيذية دقيقة، التقدير الزمني الواقعي، مراجعة الكود البناءة (Code Reviews)، التواصل الفعال مع فرق الـ Backend ومصممي الـ UI/UX، وإدارة دورة حياة تطوير البرمجيات (SDLC).",
  subtopics: [
    {
      id: "34.4.a",
      title: "تحليل المتطلبات وتحويلها إلى مهام تنفيذية (Requirements Deconstruction & Task Breakdown)",
      technicalTerm: {
        english: "Requirements Deconstruction & Epics-to-Stories Breakdown",
        pronunciation: "ريكوايرمينتس دي كونستركشن آند إيبيكس تو ستوريز بريك داون",
        arabicMeaning: "تفكيك المتطلبات وتحويل الملاحم الكبرى إلى قصص مستخدم"
      },
      description: "نادراً ما تأتي المتطلبات من مديري المنتجات (Product Managers) بشكل كود جاهز؛ بل تأتي في صورة عبارات عامة غامضة مثل: 'نريد إضافة إمكانية تصدير التقارير'. دور المهندس المحترف هو تفكيك هذا المطلب الكبير (Epic) إلى أسئلة محددة وقصص مستخدم (User Stories) ومهام هندسية صغيرة (Atomic Technical Tasks): ما الصيغ المدعومة (CSV/PDF)؟ هل التصدير يتم في العميل أم في الخادم؟ كيف نتعامل مع مجموعات البيانات الكبيرة (أكثر من 50,000 صف)؟ وما هي حالات الخطأ والحدود القصوى؟",
      realWorldAnalogy: "مثل مقاول البناء؛ عندما يطلب منه العميل 'بناء فيلا مريحة'، لا يبدأ الحفر فوراً، بل يفكك الطلب إلى: حفر الأساسات، تمديد أنابيب الصرف، بناء الأعمدة الخرسانية، وتركيب عوازل الصوت والحرارة.",
      whyItMatters: "البدء الفوري في كتابة الكود دون تفكيك وتحليل المتطلبات هو السبب الأول في فشل 70% من المشاريع البرمجية وتجاوز ميزانياتها.",
      syntax: "// نموذج تفكيك الملحمة إلى تذاكر هندسية\nEpic: Export Invoices\n├── Task 1: Design CSV generator with UTF-8 BOM\n├── Task 2: Implement server-side streaming endpoint\n└── Task 3: Build client-side progress bar and download trigger",
      simpleExample: `// مثال لهيكل تفكيك مهمة معقدة إلى خطوات هندسية واضحة
export const taskBreakdownExample = {
  featureTitle: "نظام مصادقة وتأكيد البريد الإلكتروني",
  subTasks: [
    { id: 1, title: "تصميم واجهة إدخال رمز التحقق (OTP) المكون من 6 أرقام", estimate: "4h" },
    { id: 2, title: "إنشاء خطاف التحقق والعد التنازلي لإعادة الإرسال", estimate: "2h" },
    { id: 3, title: "معالجة أخطاء الرمز المنتهي وإظهار التنبيهات المنسقة", estimate: "3h" },
    { id: 4, title: "كتابة اختبارات الوحدة لمنطق التحقق", estimate: "3h" }
  ]
};`,
      advancedExample: `// نموذج بطاقة متطلبات هندسية كاملة (Technical Spec Ticket Template)
export class FeatureSpecDocument {
  constructor(public title: string, public userStory: string) {}

  // تعريف معايير القبول (Acceptance Criteria) التي تحدد انتهاء المهمة
  acceptanceCriteria: string[] = [];
  // تعريف الحالات الحدية (Edge Cases)
  edgeCases: string[] = [];
  // قرارات التصميم المعماري
  architectureNotes: string = '';

  addAcceptanceCriterion(criterion: string) {
    this.acceptanceCriteria.push(criterion);
    return this;
  }

  addEdgeCase(edgeCase: string) {
    this.edgeCases.push(edgeCase);
    return this;
  }
}

// إنشاء مواصفة ميزة حقيقية
export const exportFeatureSpec = new FeatureSpecDocument(
  'تصدير كشف حساب العميل بصيغة CSV',
  'بصفتي مديراً مالياً، أريد تنزيل سجل المعاملات المالية كملف CSV، حتى أتمكن من مراجعته في Excel.'
)
  .addAcceptanceCriterion('يجب أن يدعم الملف الحروف العربية بشكل سليم عبر تضمين UTF-8 BOM')
  .addAcceptanceCriterion('يجب ألا يتسبب التصدير في تجميد واجهة المستخدم حتى مع 20,000 سجل')
  .addEdgeCase('إذا كانت القائمة فارغة، يجب تعطيل زر التصدير وإظهار تنبيه توضيحي')
  .addEdgeCase('إذا انقطع الاتصال أثناء التوليد، يجب إظهار زر إعادة المحاولة مع تنظيف الذاكرة');`,
      outputExplanation: "يوفر هذا المستند الهندسي مرجعاً لا يقبل الشك؛ حيث يعرف المطور ومختبر الجودة (QA) ومدير المنتج بدقة متى يعتبر العمل منجزاً بنجاح بنسبة 100%.",
      commonMistakes: "البدء في البرمجة بمجرد سماع الفكرة العامة دون كتابة معايير القبول (Acceptance Criteria)، مما يؤدي لرفض الميزة أثناء مرحلة الاختبار لعدم مطابقتها للتوقعات.",
      bestPractices: "طبق قاعدة 'Investigate First, Code Later'؛ اقضِ 20% من وقت المهمة في تفكيك الأسئلة والحالات الحدية قبل كتابة أول سطر كود.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="150" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="105" y="75" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">Vague PM Request</text>
  <text x="105" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">"Add export feature"</text>
  <path d="M 185 90 L 235 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="320" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Technical Breakdown</text>
  <text x="320" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Tasks, Edge Cases, Schemas</text>
  <path d="M 405 90 L 455 90" stroke="#10b981" strokeWidth="2" />
  <rect x="460" y="45" width="110" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="515" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Clean Delivery</text>
  <text x="515" y="98" fill="#cbd5e1" fontSize="9" textAnchor="middle">Zero Surprises ✓</text>
</svg>`
    },
    {
      id: "34.4.b",
      title: "تقدير حجم العمل الزمني بواقعية (Realistic Engineering Estimation)",
      technicalTerm: {
        english: "Sprint Estimation, Buffer Buffering & PERT Analysis",
        pronunciation: "سبرينت إستيميشن بافر بافرينج آند بيرت أناليسيس",
        arabicMeaning: "تقدير دورات السبرينت والاحتياطي الزمني وتحليل PERT"
      },
      description: "المطور المبتدئ يقدر الوقت بافتراض 'السيناريو المثالي' (Happy Path: كل شيء سيعمل فوراً دون أخطاء أو انقطاع)، فيقول 'سأنتهي في ساعتين' ثم يستغرق يومين! المهندس المحترف يدرك وجود معوقات حتمية: مراجعات الكود، دمج الفروع (Merge Conflicts)، كتابة الاختبارات، واكتشاف ثغرات غير متوقعة. يتم استخدام معادلة PERT الثلاثية: `التقدير = (المتفائل + 4 × الأكثر احتمالاً + المتشائم) / 6` مع إضافة هامش أمان (Buffer) بنسبة 20% إلى 30%.",
      realWorldAnalogy: "مثل قيادة سيارة في ساعة الذروة؛ إذا كان الطريق في الفجر يستغرق 20 دقيقة، لا تخبر موعدك أنك ستصل في 20 دقيقة، بل تحسب حساب إشارات المرور والازدحام وتبلغهم بـ 45 دقيقة لتصل في الموعد بدقة.",
      whyItMatters: "التقدير الدقيق يحمي مصداقيتك المهنية ويمنع احتراقك النفسي (Burnout) تحت وطأة مواعيد تسليم غير واقعية.",
      syntax: "// صيغة PERT للتقدير الهندسي الواقعي\nconst estimate = (optimistic + (4 * mostLikely) + pessimistic) / 6;",
      simpleExample: `// دالة حساب التقدير الزمني الواقعي بمعادلة PERT
export function calculateRealisticEstimate(optimisticHours, likelyHours, pessimisticHours) {
  // حساب المتوسط المرجح
  const weightedHours = (optimisticHours + 4 * likelyHours + pessimisticHours) / 6;
  // إضافة هامش أمان 20% للطوارئ والاجتماعات غير المجدولة
  const finalEstimateWithBuffer = weightedHours * 1.2;

  return Math.round(finalEstimateWithBuffer);
}

// مثال: مهمة استهلاك واجهة دفع
// متفائل: 4 ساعات، محتمل: 8 ساعات، متشائم: 20 ساعة
console.log('التقدير الواقعي الموصى به:', calculateRealisticEstimate(4, 8, 20), 'ساعات'); // 11 ساعة`,
      advancedExample: `// مصفوفة تعقيد التقدير الهندسي (Story Point Complexity Matrix)
export const COMPLEXITY_POINTS_GUIDE = {
  1: { desc: 'تعديل نص بسيط أو تغيير لون في Tailwind (أقل من ساعة)', risk: 'منعدم' },
  2: { desc: 'إنشاء مكون عرض بسيط بدون حالة معقدة (ساعتان إلى 4 ساعات)', risk: 'منخفض' },
  3: { desc: 'نموذج إدخال مع التحقق وحالات الأخطاء (نصف يوم إلى يوم)', risk: 'متوسط' },
  5: { desc: 'صفحة كاملة مع جلب بيانات وتخزين مؤقت وتحديث متفائل (يومان)', risk: 'متوسط إلى عالي' },
  8: { desc: 'ميزة معقدة تتطلب ربط نظام جديد (Stripe / WebSockets) وبحث معماري (3 إلى 5 أيام)', risk: 'عالي - يفضل تفكيكها' }
};`,
      outputExplanation: "تساعد مصفوفة التعقيد الفرق الهندسية على توحيد لغة التقدير؛ فالمهمة ذات 8 نقاط تعني أنها تحتوي على مخاطر مجهولة وتتطلب تقسيمها لمهام أصغر لتقليل المخاطر.",
      commonMistakes: "الموافقة على مواعيد تسليم مستحيلة يفرضها المدير التنفيذي بدافع الخجل أو الرغبة في إثبات الذات، مما يضطر المطور لكتابة كود رديء مليء بالثغرات.",
      bestPractices: "تعلم أن تقول 'لا' بطريقة هندسية: 'يمكننا تسليم النسخة الأساسية في هذا الموعد إذا قمنا بتأجيل الميزات الإضافية إلى التحديث القادم'.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="110" y="75" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">Junior Guess</text>
  <text x="110" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">"Takes 2 hours!" (Happy path)</text>
  <path d="M 195 90 L 245 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="250" y="45" width="160" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="330" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Senior Reality</text>
  <text x="330" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Tests + PR Review + Edge cases</text>
  <path d="M 415 90 L 465 90" stroke="#10b981" strokeWidth="2" />
  <rect x="470" y="45" width="100" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="520" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">On-Time</text>
  <text x="520" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">High Trust 🎯</text>
</svg>`
    },
    {
      id: "34.4.c",
      title: "قراءة التوثيق الرسمي ومصادر الحقيقة (Reading Official Documentation & RFCs)",
      technicalTerm: {
        english: "Canonical Documentation Literacy & RFC Standards",
        pronunciation: "كانونيكال دوكيومنتيشن ليتراسي آند آر إف سي ستاندردز",
        arabicMeaning: "مهارة قراءة التوثيق المعياري الرسمي ومعايير RFC"
      },
      description: "المطور الهاوي يبحث عن مشاكله في مقاطع الفيديو القديمة أو مقالات المدونات غير المحدثة، بينما المهندس المحترف يعتمد على 'المصدر الوحيد للحقيقة' (Canonical Documentation): التوثيق الرسمي لمكتبة React (react.dev)، مواصفات MDN Web Docs، وطلبات التعليقات الرسمية (React RFCs) ومستودعات GitHub للمكتبات لقراءة كود المصدر الفعلي. قراءة التوثيق الرسمي تمنحك فهماً للمبادئ الفلسفية التي صُممت الأداة بناءً عليها.",
      realWorldAnalogy: "مثل رجل القانون الذي يرجع إلى الدستور ونصوص القوانين الرسمية في الجريدة الرسمية، بدلاً من الاعتماد على منشورات مواقع التواصل الاجتماعي المليئة بالشائعات والتفسيرات الخاطئة.",
      whyItMatters: "المقالات والمدونات تتقادم في غضون أشهر، بينما التوثيق الرسمي يُحدث يومياً ويعكس أفضل الممارسات المعتمدة من صناع المكتبة أنفسهم.",
      syntax: "// مراجع الحقيقة الأساسية لكل مهندس React:\nhttps://react.dev (React Official)\nhttps://developer.mozilla.org (Web APIs)\nhttps://github.com/reactjs/rfcs (Architecture Discussions)",
      simpleExample: `// الفرق بين نمط مقال قديم في 2019 والنمط المعتمد رسمياً في react.dev الحديث
// ❌ نمط المقالات القديمة (مزامنة State داخل useEffect):
// useEffect(() => {
//   setFullName(firstName + ' ' + lastName);
// }, [firstName, lastName]);

// ✅ النمط المعتمد رسمياً في التوثيق الحديث (حساب الحالة المشتقة أثناء التصيير):
export function UserNamePresenter({ firstName, lastName }) {
  // لا نحتاج لـ useEffect أو State إضافية! الحساب متزامن ونقي
  const fullName = \`\${firstName} \${lastName}\`;
  return <div className="text-white text-xs font-bold">{fullName}</div>;
}`,
      advancedExample: `// كيفية فحص ملفات تعريف الأنواع (TypeScript .d.ts) كمصدر موثوق للمواصفات
/**
 * عند الشك في سلوك دالة معينة، انقر بـ Ctrl+Click على الدالة في VS Code
 * لقراءة ملف التعريف الرسمي الخاص بها في @types/react.
 * 
 * مثال: فحص تعريف useState في d.ts:
 * type Dispatch<A> = (value: A) => void;
 * type SetStateAction<S> = S | ((prevState: S) => S);
 * function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
 * 
 * الاستنتاج الهندسي المباشر من التوثيق:
 * 1. initialState يمكن أن يكون دالة (Lazy initial state).
 * 2. دالة التحديث يمكن أن تستقبل دالة تعتمد على prevState.
 */`,
      outputExplanation: "تظهر هذه المهارة كيف يستخرج المهندس المحترف الحقائق البرمجية الدقيقة من شفرة المصدر وملفات الأنواع الرسمية مباشرة دون الاعتماد على التخمين.",
      commonMistakes: "تطبيق حلول مأخوذة من Stack Overflow يعود تاريخها لـ 2016 تستخدم ميزات قديمة مثل Component Lifecycle الدائرية المهملة.",
      bestPractices: "اجعل react.dev وMDN بوابتك الأولى في أي بحث تقني، وتصفح سجل التغييرات (Changelog) عند ترقية أي مكتبة لمعرفة التغييرات الجذرية (Breaking Changes).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="220" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="140" y="75" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">Outdated Blog (2018)</text>
  <text x="140" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">Sync state in useEffect (Anti-pattern)</text>
  <path d="M 270 90 L 310 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="45" width="240" height="90" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">react.dev Official Docs</text>
  <text x="450" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Derived State during Render (Pure)</text>
</svg>`
    },
    {
      id: "34.4.d",
      title: "منهجية البحث عن المشكلات التقنية وتصحيح الأخطاء (Systematic Debugging Methodology)",
      technicalTerm: {
        english: "Scientific Debugging & Binary Search Troubleshooting",
        pronunciation: "ساينتيفيك ديباجينج آند باينري سيرش تروبل شوتينج",
        arabicMeaning: "تصحيح الأخطاء بالمنهج العلمي واستكشاف الأخطاء بالبحث الثنائي"
      },
      description: "التصحيح العشوائي (Shotgun Debugging: تغيير أسطر كود وتجربتها عشوائياً حتى يعمل التطبيق بالصدفة) هو سلوك الهواة. المهندس المحترف يتبع 'المنهج العلمي لتصحيح الأخطاء' (Scientific Debugging): 1. إعادة إنتاج الخطأ بخطوات ثابتة (Reproduce)، 2. قراءة رسالة الخطأ ومسار التتبع (Stack Trace) بعناية فائقة، 3. عزل المشكلة بالبحث الثنائي (Binary Search / Git Bisect: تعطيل نصف الكود لتحديد موضع العطل)، 4. وضع فرضية محددة واختبارها عبر نقاط التوقف (Breakpoints) في Chrome DevTools، 5. كتابة اختبار آلي يضمن عدم تكرار المشكلة نهائياً.",
      realWorldAnalogy: "مثل الطبيب البشري؛ لا يعطيك 10 أدوية عشوائية ليجرب أيها سيعالجك، بل يطلب فحص دم محدد، ويعزل الأعراض، ويضع تشخيصاً دقيقاً مبنياً على الدليل قبل وصف الدواء المناسب.",
      whyItMatters: "يحول عملية حل المشاكل المستعصية من ساعات من الإحباط والتوتر إلى مسار علمي منهجي يستغرق دقائق معدودة.",
      syntax: "// استخدام نقاط التوقف البرمجية\ndebugger;\nconsole.trace('تتبع مسار الاستدعاء الكامل');",
      simpleExample: `// استخدام console.trace لمعرفة من يستدعي الدالة بشكل مفرط
export function trackRogueCalls(callerName) {
  // يطبع في الكونسول شجرة استدعاء الدالة خطوة بخطوة بالملفات وأرقام الأسطر
  console.trace(\`استدعاء وارد من: \${callerName}\`);
}`,
      advancedExample: `// دليل خطوات تصحيح الأخطاء البرمجية المنهجي (Debugging Protocol)
export class SystematicDebugger {
  // الخطوة 1: عزل المتغيرات
  static isolateIssue(componentName: string, props: any) {
    console.group(\`🔍 جلسة فحص المكون: \${componentName}\`);
    console.table(props); // عرض الخصائص كجدول منظم وسهل القراءة
    console.groupEnd();
  }

  // الخطوة 2: اختبار الفرضية قبل التعديل
  static verifyHypothesis(expectedCondition: boolean, failureExplanation: string) {
    if (!expectedCondition) {
      console.error(\`❌ فرضية خاطئة: \${failureExplanation}\`);
    } else {
      console.log('✅ الفرضية صحيحة، تم حصر السبب الجذري!');
    }
  }
}`,
      outputExplanation: "يساعد هذا البروتوكول المهندسين على تتبع البيانات المعقدة كجداول منظمة واختبار الفرضيات علمياً دون تشتت.",
      commonMistakes: "القفز لتعديل الكود فوراً ومسح وتثبيت `node_modules` دون قراءة السطر ورقم الملف الموضح في رسالة الخطأ الحمراء بالكونسول.",
      bestPractices: "تعلم استخدام نقاط التوقف (Breakpoints) وميزة Conditional Breakpoints في أدوات المطور بدلاً من ملء الكود بـ `console.log` العشوائية.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="25" y="45" width="120" height="90" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="85" y="75" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">1. Reproduce</text>
  <text x="85" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">Deterministic Steps</text>
  <path d="M 150 90 L 175 90" stroke="#94a3b8" strokeWidth="2" />
  <rect x="180" y="45" width="125" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="242" y="75" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">2. Read Stack</text>
  <text x="242" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Find File & Line</text>
  <path d="M 310 90 L 335 90" stroke="#94a3b8" strokeWidth="2" />
  <rect x="340" y="45" width="125" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" />
  <text x="402" y="75" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">3. Isolate</text>
  <text x="402" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Binary search / Breakpoint</text>
  <path d="M 470 90 L 495 90" stroke="#10b981" strokeWidth="2" />
  <rect x="500" y="45" width="75" height="90" rx="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" />
  <text x="537" y="85" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">4. Fix & Test</text>
  <text x="537" y="105" fill="#10b981" fontSize="8" textAnchor="middle">Add unit test</text>
</svg>`
    },
    {
      id: "34.4.e",
      title: "مراجعة الكود باحترافية وتقديم الملاحظات البناءة (Constructive Code Reviews)",
      technicalTerm: {
        english: "Code Review Etiquette & Nitpick Separation",
        pronunciation: "كود ريفيو إيتيكيت آند نيت بيك سيباريشن",
        arabicMeaning: "آداب مراجعة الكود وفصل الملاحظات الثانوية"
      },
      description: "مراجعة الكود (Pull Request Review) ليست ساحة لإثبات الذكاء أو البحث عن الأخطاء الشخصية، بل هي عملية جماعية لضمان جودة البرمجيات ونقل المعرفة بين أعضاء الفريق. المهندس المحترف يتبع آداب المراجعة: 1. مراجعة البنية والمنطق أولاً، وترك التنسيق للمدقق الآلي (Prettier)، 2. تقديم الملاحظات بأسلوب لطيف بصيغة أسئلة بدلاً من أوامر جافة، 3. استخدام وسوم واضحة مثل `[nit]` للملاحظات التجميلية غير الإلزامية التي لا تعطل دمج الكود.",
      realWorldAnalogy: "مثل مراجعة مسودة كتاب أدبي؛ المحرر المتميز يناقش الكاتب في تسلسل الأحداث وحبكة الرواية ويقترح أفكاراً تجعل النص أكثر إشراقاً، بدلاً من توبيخه بقسوة على خطأ في علامات الترقيم.",
      whyItMatters: "المراجعات الراقية تبني بيئة عمل مريحة وصحية (Psychological Safety) تشجع الجميع على التعلم وتمنع تسرب العيوب إلى بيئة الإنتاج.",
      syntax: "// تصنيف ملاحظات المراجعة في GitHub PR\n// [blocking]: ثغرة أمنية أو خطأ منطقي يمنع الدمج\n// [suggestion]: اقتراح لتحسين الأداء أو القراءة\n// [nit]: ملاحظة تجميلية اختيارية تماماً",
      simpleExample: `// أمثلة لصياغة ملاحظات Code Review ممتازة مقابل الملاحظات الرديئة
// ❌ تعليق رديء وعدواني:
// "هذا الكود سيء وبطيء جداً، لماذا لم تستخدم useMemo؟ أعد كتابته فوراً!"

// ✅ تعليق احترافي وبناء:
// "أحسنت في بناء هذا المنطق! أتساءل هل فكرت في استخدام useMemo هنا؟
// نظراً لأن مصفوفة orders قد تتجاوز 1,000 عنصر، قد يوفر التخزين المؤقت بعض دورات التصيير.
// ما رأيك؟ [suggestion]"`,
      advancedExample: `// قائمة معايير مراجعة الكود الصارمة (Code Review Checklist Protocol)
export const CODE_REVIEW_STANDARD = {
  architecture: [
    'هل يحترم الكود مبدأ المسؤولية الواحدة (Single Responsibility)؟',
    'هل تم عزل استدعاءات الخادم في طبقة الخدمات بدلاً من حشوها في المكونات؟'
  ],
  security: [
    'هل تم تنقيح وتطهير مدخلات المستخدم لمنع هجمات XSS؟',
    'هل توجد أي مفاتيح سرية مكشوفة في كود العميل؟'
  ],
  performance: [
    'هل تم وضع مفاتيح keys مستقرة للقوائم؟',
    'هل تم تنظيف اشتراكات WebSockets والمؤقتات في دالة الإرجاع بـ useEffect؟'
  ]
};`,
      outputExplanation: "يوفر هذا المعيار إطاراً موضوعياً للمراجعة، يركز على سلامة المعمارية والأمان والأداء بدلاً من الجدال حول التفضيلات الشخصية.",
      commonMistakes: "التعليق على تنسيق المسافات والفواصل في مراجعة الكود؛ هذه المهمة يجب أن تتولاها أدوات الفحص التلقائية (ESLint وPrettier) في خط أنابيب الـ CI.",
      bestPractices: "امدح الكود الجميل والحلول المبتكرة التي كتبها زميلك في المراجعة (Give Praise)؛ فالتقدير الإيجابي يرفع الروح المعنوية للفريق بشكل مذهل.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="220" height="100" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="140" y="65" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">❌ Toxic Review</text>
  <text x="140" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">"Rewrite this, it's terrible"</text>
  <text x="140" y="110" fill="#f87171" fontSize="9" textAnchor="middle">Harms morale & creates fear</text>
  <path d="M 270 90 L 310 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="65" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">✅ Constructive Review</text>
  <text x="450" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">"Great work! What do you think of..."</text>
  <text x="450" y="110" fill="#38bdf8" fontSize="9" textAnchor="middle">Tagging: [nit], [suggestion], [blocking]</text>
</svg>`
    },
    {
      id: "34.4.f",
      title: "كتابة اختبارات موثوقة ومقاومة للتغيير (Writing Resilient Tests)",
      technicalTerm: {
        english: "Behavior-Driven Testing & Implementation Details Avoidance",
        pronunciation: "بيهافيور دريفن تيستنج آند إمبليمنتيشن ديتيلز أفويدنس",
        arabicMeaning: "الاختبار القائم على السلوك وتجنب تفاصيل التنفيذ الداخلية"
      },
      description: "القاعدة الذهبية التي أرساها كينت دودز (Kent C. Dodds) في مكتبة React Testing Library: 'كلما كانت اختباراتك تشبه الطريقة التي يُستخدم بها برنامجك في الواقع، كلما زادت ثقتك فيها'. الاختبارات الهشة (Brittle Tests) هي التي تختبر تفاصيل التنفيذ الداخلية للمكون (مثل فحص أسماء الـ State أو التحقق من وجود فئة CSS معينة)، والتي تنكسر فور إعادة ترتيب الكود رغم أن الزر لا يزال يعمل! الاختبار الموثوق يختبر 'سلوك المستخدم' فقط: النقر على الزر، والتحقق من ظهور النص الصحيح على الشاشة عبر `getByRole`.",
      realWorldAnalogy: "مثل اختبار سيارة في الفحص الدوري؛ يختبر الفاحص هل تضيء المصابيح وتتوقف العجلات عند الضغط على المكابح (السلوك الخارجي)، دون أن يشترط أن تكون أسلاك الفرامل باللون الأزرق أو الأخضر داخل حجرة المحرك.",
      whyItMatters: "الاختبارات القائمة على السلوك تسمح لك بإعادة هيكلة الكود (Refactoring) وتغيير المكتبات الداخلية بحرية تامة دون أن تفشل الاختبارات ظلماً.",
      syntax: "// النمط الموثوق المعتمد على الأدوار وسلوك المستخدم\nconst submitBtn = screen.getByRole('button', { name: /إرسال/i });\nawait userEvent.click(submitBtn);\nexpect(screen.getByText(/تم بنجاح/i)).toBeInTheDocument();",
      simpleExample: `// مقارنة بين اختبار هش يختبر التفاصيل واختبار موثوق يختبر السلوك
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToggleComponent } from './Toggle';

// ❌ اختبار هش ينكسر بمجرد تغيير اسم المتغير الداخلي:
// test('bad: checks internal state', () => {
//   const wrapper = shallow(<ToggleComponent />);
//   expect(wrapper.state('isOpen')).toBe(false); // تفاصيل داخلية!
// });

// ✅ اختبار موثوق يختبر ما يراه ويلمسه المستخدم:
test('good: toggles visibility on button click', async () => {
  render(<ToggleComponent />);

  const toggleBtn = screen.getByRole('button', { name: /عرض التفاصيل/i });
  await userEvent.click(toggleBtn);

  // التحقق من ظهور المحتوى للعين المجردة
  expect(screen.getByText(/المحتوى السري المعروض/i)).toBeVisible();
});`,
      advancedExample: `// اختبار تكامل يحاكي تدفق المستخدم الكامل مع مكتبة MSW لمحاكاة الخادم
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProfileEditor } from './UserProfileEditor';

test('يجب أن يسمح للمستخدم بتعديل اسمه وعرض رسالة نجاح', async () => {
  render(<UserProfileEditor initialName="سارة" />);

  // 1. تحديد حقل الإدخال بالاسم الدلالي
  const nameInput = screen.getByLabelText(/الاسم الكامل/i);
  await userEvent.clear(nameInput);
  await userEvent.type(nameInput, 'سارة أحمد');

  // 2. النقر على زر الحفظ
  const saveBtn = screen.getByRole('button', { name: /حفظ التعديلات/i });
  await userEvent.click(saveBtn);

  // 3. التحقق من ظهور حالة النجاح بعد اكتمال الاتصال المحاكى
  await waitFor(() => {
    expect(screen.getByText(/تم حفظ التعديلات بنجاح/i)).toBeInTheDocument();
  });
});`,
      outputExplanation: "يحاكي هذا الاختبار تجربة إنسان حقيقي يكتب على لوحة المفاتيح وينقر بالماوس، مما يمنح الفريق أعلى درجات الثقة في أن ميزة تعديل الاسم تعمل في بيئة الإنتاج.",
      commonMistakes: "استخدام المحددات المادية مثل `container.querySelector('.btn-primary')` للبحث عن العناصر بدلاً من المحددات الدلالية لإمكانية الوصول مثل `getByRole`.",
      bestPractices: "استخدم دائماً محددات `getByRole`, `getByLabelText`, و`getByText` لأنها تختبر إمكانية الوصول وسلوك المستخدم الحقيقي في نفس الوقت.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="220" height="100" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="140" y="65" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">❌ Testing Implementation</text>
  <text x="140" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Checks wrapper.state('isOpen')</text>
  <text x="140" y="110" fill="#f87171" fontSize="9" textAnchor="middle">Breaks on harmless refactoring</text>
  <path d="M 270 90 L 310 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="65" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">✅ Testing User Behavior</text>
  <text x="450" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">getByRole('button') + user.click()</text>
  <text x="450" y="110" fill="#38bdf8" fontSize="9" textAnchor="middle">Refactor-proof & guarantees UX</text>
</svg>`
    },
    {
      id: "34.4.g",
      title: "اتخاذ القرارات المعمارية المتزنة ومقاومة الإفراط الهندسي (Pragmatic Architecture & YAGNI)",
      technicalTerm: {
        english: "Pragmatic Architecture & YAGNI Principle",
        pronunciation: "براج ماتيك آركيتكتشر آند ياجني برينسيبل",
        arabicMeaning: "المعمارية العملية ومبدأ لن تحتاجه الآن (YAGNI)"
      },
      description: "أكبر فخ يقع فيه المطورون متوسطو الخبرة هو 'الإفراط الهندسي' (Over-engineering): بناء تجريدات معقدة وأنظمة مسبقة لميزات غير مطلوبة حالياً تحت ذريعة 'ربما نحتاجها مستقبلاً!'. المهندس المحترف يعتنق مبدأ YAGNI (You Aren't Gonna Need It) ومبدأ KISS (Keep It Simple, Stupid)؛ فهو يختار أبسط معمارية تحل المشكلة الحالية بكفاءة، مع كتابة كود نظيف وسهل التعديل عندما تنشأ الحاجة الحقيقية للتوسع لاحقاً.",
      realWorldAnalogy: "مثل بناء جسر لعبور نهر صغير في قرية هادئة؛ تبني جسراً متيناً يتسع للسيارات الحالية، ولا تبني نفقاً تحت الأرض بثمانية مسارات وقطار فائق السرعة تحسباً لاحتمال تحول القرية إلى مدينة صناعية بعد 50 عاماً.",
      whyItMatters: "يحمي الشركات من استنزاف ميزانياتها في بناء تعقيدات برمجية وهمية تؤخر إطلاق المنتجات وتزيد تكلفة الصيانة.",
      syntax: "// مبدأ YAGNI: لا تبني التجريد حتى يتكرر الكود 3 مرات (Rule of Three)\n// 1st time: اكتب الكود المباشر البسيط.\n// 2nd time: استنسخ الكود ولا تقلق.\n// 3rd time: قم ببناء التجريد المشترك (Refactor).",
      simpleExample: `// مثال يوضح الإفراط الهندسي مقابل الحل العملي المباشر
// ❌ إفراط هندسي لمهمة بسيطة (Over-engineering):
// إنشاء Context وCustom Hook وReducer كامل لمجرد إخفاء وإظهار قائمة جانبية!

// ✅ الحل العملي البسيط والأنيق (Pragmatic):
import React, { useState } from 'react';

export function SimpleSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white text-xs">
        {isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
      </button>
      {isOpen && <aside className="p-4 bg-slate-800 text-white text-xs">محتوى القائمة</aside>}
    </div>
  );
}`,
      advancedExample: `// مصفوفة تقييم القرارات المعمارية للمشاريع الكبيرة (Architectural Trade-off Matrix)
export function evaluateArchitectureDecision(decisionName: string) {
  const decisions = {
    'adopt-microfrontends': {
      pros: 'استقلالية النشر لفرق متعددة تزيد عن 50 مهندساً.',
      cons: 'تعقيد هائل في البنية التحتية، تكرار تحميل الحزم، وصعوبة مشاركة الحالة.',
      verdict: 'مرفوض للفرق الصغيرة والمتوسطة؛ البديل هو Monorepo نظيف عبر Turborepo.'
    },
    'graphql-vs-rest': {
      pros: 'طلب الحقول المحددة بدقة ومنع الـ Over-fetching.',
      cons: 'صعوبة التخزين المؤقت في المتصفح مقارنة بـ HTTP Caching لـ REST.',
      verdict: 'استخدم REST / Server Actions إلا إذا كان تطبيقك يحتوي على شبكة علاقات معقدة متعددة الأجهزة.'
    }
  };

  return decisions[decisionName];
}`,
      outputExplanation: "يوضح هذا التقييم كيف يوازن المهندس المحترف بين المزايا والعيوب (Pros & Cons) قبل تبني أي تقنية جديدة بدلاً من الانجراف وراء صرعات التقنية العابرة.",
      commonMistakes: "إدخال مكتبات ضخمة ومعقدة (مثل Redux Toolkit أو RxJS) في مشروع صغير لا يحتوي إلا على بضع صفحات ونماذج بسيطة.",
      bestPractices: "ابدأ بأبسط حل ممكن يعمل بكفاءة، وقم بتجريد الكود وتوسيعه فقط عندما تفرض البيانات والنمو الحقيقي ذلك (Evolutionary Architecture).",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="40" width="220" height="100" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="140" y="65" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="middle">❌ Over-Engineering</text>
  <text x="140" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">5 Abstraction Layers for a Button</text>
  <text x="140" y="110" fill="#f87171" fontSize="9" textAnchor="middle">High complexity & slow delivery</text>
  <path d="M 270 90 L 310 90" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="330" y="40" width="240" height="100" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="450" y="65" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">✅ Pragmatic YAGNI</text>
  <text x="450" y="90" fill="#cbd5e1" fontSize="10" textAnchor="middle">Simplest code that solves the problem</text>
  <text x="450" y="110" fill="#38bdf8" fontSize="9" textAnchor="middle">Easy to refactor when scale arrives</text>
</svg>`
    },
    {
      id: "34.4.h",
      title: "التواصل الفعال مع فريق Backend ومصممي الـ UI/UX (Cross-Functional Collaboration)",
      technicalTerm: {
        english: "API Contract Negotiation & Design Token Synchronization",
        pronunciation: "إيه بي آي كونتراكت نيجوشييشن آند ديزاين توكن سينكرونايزيشن",
        arabicMeaning: "التفاوض على عقود الـ API ومزامنة رموز التصميم"
      },
      description: "لا يعمل مهندس الواجهات في جزيرة منعزلة؛ بل هو حلقة الوصل بين مصممي واجهة المستخدم (UI/UX) ومهندسي الواجهات الخلفية (Backend). مع فريق التصميم، يحرص على توحيد 'رموز التصميم' (Design Tokens: الألوان، الهوامش، والخطوط عبر Figma Tokens وTailwind). ومع فريق الـ Backend، يمارس التفاوض المبكر على 'عقود الـ API' (API Contracts عبر OpenAPI / Swagger): شكل استجابة الخطأ، دعم التصفح والفرز (Pagination & Cursor)، وحالات البيانات الفارغة قبل كتابة أي كود مشترك.",
      realWorldAnalogy: "مثل التعاون بين مهندس الديكور الداخلي والسباك والكهربائي في بناء شقة؛ يجب أن يتفقوا على أماكن مفاتيح الكهرباء وأنابيب المياه على المخطط أولاً قبل صب الجدران لمنع تكسير السيراميك لاحقاً.",
      whyItMatters: "يمنع سوء الفهم والتعطيل المتبادل (Blockers)، ويسمح لمهندس الواجهات بتطوير الشاشات باستخدام بيانات وهمية مطابقة للعقد (Mock Data) بالتوازي مع بناء الـ Backend.",
      syntax: "// نموذج عقد استجابة API متفق عليه مع فريق الـ Backend\ninterface ApiResponse<T> {\n  data: T;\n  error: { code: string; message: string; } | null;\n  meta?: { cursor?: string; hasMore: boolean; };\n}",
      simpleExample: `// استخدام محاكاة متطابقة مع عقد الـ Backend للعمل بالتوازي دون انتظار
export const MOCK_API_CONTRACT = {
  endpoint: '/api/v1/projects',
  mockResponse: {
    data: [
      { id: 'p1', name: 'إعادة تصميم المنصة', status: 'active' }
    ],
    error: null,
    meta: { hasMore: false }
  }
};`,
      advancedExample: `// طبقة محول البيانات (Data Adapter Layer) لعزل الواجهة عن تغييرات أسماء حقول الخادم
// إذا قرر فريق Backend تغيير اسم الحقل من user_first_name إلى firstName
export class UserApiAdapter {
  static transformFromBackend(rawBackendUser: any) {
    return {
      id: rawBackendUser.id,
      // تأمين الواجهة بتوحيد الأسماء بغض النظر عن طريقة صياغة الـ Backend
      fullName: rawBackendUser.user_full_name || rawBackendUser.name || 'مستخدم غير معروف',
      isActive: rawBackendUser.status === 'ACTIVE',
      avatarUrl: rawBackendUser.avatar_url || '/default-avatar.png'
    };
  }
}`,
      outputExplanation: "تحمي طبقة المحول (Adapter) مكونات واجهة React من الانهيار إذا قرر مهندسو الـ Backend إعادة تسمية حقول قاعدة البيانات، حيث يتم تعديل المحول في مكان واحد فقط.",
      commonMistakes: "الانتظار حتى ينتهي فريق الـ Backend من بناء الـ APIs بالكامل قبل البدء في كتابة كود الواجهة، مما يهدر أسابيع من وقت المشروع.",
      bestPractices: "اتفق على مواصفة العقد (Swagger / TypeScript Interface) في أول يوم في السبرينت، واعمل بمحاكاة MSW حتى يكتمل الخادم الفعلي.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#a855f7" />
  <text x="100" y="75" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle">UI/UX Designer</text>
  <text x="100" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Figma Design Tokens</text>
  <path d="M 175 90 L 225 90" stroke="#a855f7" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="230" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="300" y="75" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Frontend Engineer</text>
  <text x="300" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Center of Delivery</text>
  <path d="M 375 90 L 425 90" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="430" y="45" width="140" height="90" rx="8" fill="#1e293b" stroke="#10b981" />
  <text x="500" y="75" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Backend Engineer</text>
  <text x="500" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Typed API Contract</text>
</svg>`
    },
    {
      id: "34.4.i",
      title: "إدارة الوقت والأولويات والتركيز العميق (Deep Work & Time Management)",
      technicalTerm: {
        english: "Deep Work Flow & Eisenhower Task Prioritization",
        pronunciation: "ديب ويرك فلو آند آيزنهاور تاسك برايروتايزيشن",
        arabicMeaning: "تدفق العمل العميق وتحديد الأولويات بمصفوفة أيزنهاور"
      },
      description: "البرمجة عمل ذهني إبداعي معقد يتطلب تركيزاً عميقاً (Deep Work). التشتت المستمر بالإشعارات والرسائل الفورية في Slack يكسر 'حالة التدفق الذهني' (Flow State)؛ حيث تشير الأبحاث إلى أن استعادة التركيز بعد كل مقاطعة تستغرق 23 دقيقة! المهندس المحترف يدير وقته بمصفوفة أيزنهاور (العاجل مقابل المهم)، ويخصص فترات تركيز محجوبة في تقويمه (Calendar Focus Blocks) خالية من الاجتماعات لكتابة الكود المعماري المعقد.",
      realWorldAnalogy: "مثل جراح المخ والأعصاب أثناء إجراء عملية دقيقة؛ يغلق باب غرفة العمليات ويمنع أي شخص من الدخول أو رنين الهواتف حتى ينتهي من الجزء الحرج من الجراحة.",
      whyItMatters: "يحميك من إهدار يومك في مهام ثانوية تافهة، ويضاعف إنتاجيتك وجودة كودك في نصف الوقت المعتاد.",
      syntax: "// مصفوفة أيزنهاور للأولويات الهندسية:\nQ1: عاجل ومهم -> إصلاح ثغرة أمنية أو عطل الإنتاج الفوري\nQ2: غير عاجل لكن مهم جداً -> كتابة الاختبارات، التوثيق، وإعادة الهيكلة المعمارية",
      simpleExample: `// نموذج تنظيم يوم المهندس المحترف في جدول زمني
export const ENGINEER_IDEAL_DAY = [
  { time: "09:00 - 09:30", type: "مزامنة", activity: "مراجعة المهام والـ Standup اليومي" },
  { time: "09:30 - 12:30", type: "عمل عميق (Deep Work)", activity: "حظر الإشعارات وبناء الميزة الهندسية الكبرى" },
  { time: "13:30 - 14:30", type: "تعاون", activity: "مراجعة الـ Pull Requests والرد على استفسارات الفريق" },
  { time: "14:30 - 16:30", type: "تطوير واختبار", activity: "كتابة اختبارات الوحدة وتحسين الأداء" }
];`,
      advancedExample: `// محاكي مبسط لتقييم أولوية المهام بمصفوفة أيزنهاور
export function prioritizeEngineeringTask(task: { isUrgent: boolean; isImportant: boolean }) {
  if (task.isUrgent && task.isImportant) {
    return { priority: 'P0 - فوري', action: 'نفذها الآن بدون أي تأخير (عطل إنتاج أو ثغرة أمان)' };
  }
  if (!task.isUrgent && task.isImportant) {
    return { priority: 'P1 - استراتيجي', action: 'جدول لها وقتاً في مفكرتك اليوم (إعادة هيكلة واختبارات وتوثيق)' };
  }
  if (task.isUrgent && !task.isImportant) {
    return { priority: 'P2 - تفويض', action: 'حاول أتمتتها بأداة أو تفويضها (طلب تقرير يدوي مكرر)' };
  }
  return { priority: 'P3 - استبعاد', action: 'احذفها من قائمتك (مهام تجميلية لا تقدم أي قيمة للأعمال)' };
}`,
      outputExplanation: "يوجه هذا المصنف المهندس لتخصيص معظم طاقته للمهام ذات الأثر الاستراتيجي (P1) التي تمنع حدوث الأعطال الطارئة في المستقبل.",
      commonMistakes: "الاستجابة الفورية لكل رسالة أو تنبيه في Slack أثناء كتابة كود معقد، مما يتسبب في تشتت الذهن وكتابة ثغرات منطقية خفية.",
      bestPractices: "اغلق برامج المحادثة واجعل هاتفك في وضع عدم الإزعاج لمدة ساعتين متواصلتين يومياً أثناء كتابة الكود المعماري الحساس.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <rect x="30" y="35" width="250" height="60" rx="8" fill="#1e293b" stroke="#ef4444" />
  <text x="155" y="60" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">Q1: Urgent & Important</text>
  <text x="155" y="80" fill="#cbd5e1" fontSize="9" textAnchor="middle">Production Down, Security Fixes (DO NOW)</text>
  <rect x="320" y="35" width="250" height="60" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="445" y="60" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">Q2: Not Urgent, HIGH Value</text>
  <text x="445" y="80" fill="#ffffff" fontSize="9" textAnchor="middle">Refactoring, Architecture, Tests (DEEP WORK)</text>
  <rect x="30" y="105" width="250" height="60" rx="8" fill="#1e293b" stroke="#f59e0b" />
  <text x="155" y="130" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Q3: Urgent, Low Value</text>
  <text x="155" y="150" fill="#cbd5e1" fontSize="9" textAnchor="middle">Interrupting meetings, noise (Automate/Delegate)</text>
  <rect x="320" y="105" width="250" height="60" rx="8" fill="#1e293b" stroke="#64748b" />
  <text x="445" y="130" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">Q4: Not Urgent, Low Value</text>
  <text x="445" y="150" fill="#cbd5e1" fontSize="9" textAnchor="middle">Endless bike-shedding (ELIMINATE)</text>
</svg>`
    },
    {
      id: "34.4.j",
      title: "فهم دورة حياة تطوير البرمجيات الشاملة (Software Development Life Cycle - SDLC)",
      technicalTerm: {
        english: "Agile SDLC, Release Management & Trunk-Based Development",
        pronunciation: "أجايل إس دي إل سي ريليس مانيجمينت آند ترانك بيزد ديفلوبمنت",
        arabicMeaning: "دورة حياة تطوير البرمجيات الرشيقة وإدارة الإصدارات"
      },
      description: "كتابة الكود تمثل 30% فقط من دورة حياة البرمجيات. المهندس الشامل يستوعب دورة الـ SDLC الكاملة: 1. مرحلة التخطيط والتصميم (Planning & Spec)، 2. مرحلة التطوير وكتابة الكود (Development)، 3. مرحلة المراجعة وفحص الجودة الآلي (Code Review & QA)، 4. مرحلة النشر التدريجي (Staging vs Production / Canary Deployments)، 5. مرحلة المراقبة والاستقرار وحل الحوادث (Monitoring & Incident Response). كما يدرك أهمية استراتيجية الفروع المبنية على الجذع الرئيسي (Trunk-Based Development) بدلاً من الفروع طويلة الأمد المعرضة للنزاعات.",
      realWorldAnalogy: "مثل إطلاق صاروخ إلى الفضاء؛ مرحلة تصنيع الصاروخ في المصنع هي خطوة واحدة فقط تسبقها دراسات الجدوى والفيزياء، وتتبعها اختبارات منصة الإطلاق، ومتابعة مدار الصاروخ في الفضاء لسنوات عبر الأقمار الصناعية.",
      whyItMatters: "يمنحك رؤية بانورامية لكيفية وصول ميزتك من مجرد فكرة في رأس المدير إلى منتج مستقر يخدم ملايين المستخدمين حول العالم دون أعطال.",
      syntax: "// مراحل دورة الـ SDLC الحديثة:\nPlan -> Code -> Test (CI) -> Stage -> Prod (Canary) -> Monitor (APM)",
      simpleExample: `// مصفوفة بيئات النشر المعيارية في الشركات
export const DEPLOYMENT_ENVIRONMENTS = {
  local: { name: 'المحلي (Localhost)', purpose: 'كتابة وتجربة الكود السريعة' },
  preview: { name: 'بيئة المعاينة (PR Preview)', purpose: 'فحص ميزة المطور من قِبل الزملاء والـ QA' },
  staging: { name: 'بيئة المطابقة (Staging)', purpose: 'محاكاة بيئة الإنتاج تماماً مع بيانات حقيقية' },
  production: { name: 'بيئة الإنتاج المباشرة (Production)', purpose: 'النسخة المتاحة للعملاء الفعليين' }
};`,
      advancedExample: `// نموذج إدارة إطلاق الميزات بأعلام الميزات (Feature Flag Architecture)
export class FeatureFlagManager {
  // تفعيل الميزة لنسبة محددة من المستخدمين لتقليل المخاطر (Canary Rollout)
  static isFeatureEnabledForUser(featureKey: string, userId: string, rolloutPercentage: number = 20): boolean {
    // حساب قيمة هاش ثابتة لمعرف المستخدم
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
      hash = (hash << 5) - hash + userId.charCodeAt(i);
      hash |= 0;
    }
    const userBucket = Math.abs(hash) % 100;

    // الميزة مفعلة فقط إذا كان المستخدم يقع ضمن النطاق المئوي المسموح
    return userBucket < rolloutPercentage;
  }
}`,
      outputExplanation: "يوضح الكود كيف تطرح كبرى شركات التقنية ميزاتها لـ 10% أو 20% من المستخدمين أولاً للتأكد من خلوها من الأخطاء قبل تعميمها للجميع.",
      commonMistakes: "النشر المباشر للكود إلى بيئة الإنتاج (Production) دون المرور ببيئة المعاينة (Preview) واختبارات التكامل المؤتمتة.",
      bestPractices: "استخدم أعلام الميزات (Feature Flags) لفصل نشر الكود (Deployment) عن تفعيل الميزة للجمهور (Release)، مما يتيح التراجع الفوري دون إعادة بناء التطبيق.",
      visualInfographic: `<svg viewBox="0 0 600 180" className="w-full h-auto">
  <rect width="600" height="180" rx="14" fill="#0f172a" />
  <circle cx="60" cy="90" r="30" fill="#1e293b" stroke="#38bdf8" />
  <text x="60" y="94" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">1. Plan</text>
  <path d="M 95 90 L 135 90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <circle cx="170" cy="90" r="30" fill="#1e293b" stroke="#818cf8" />
  <text x="170" y="94" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">2. Code</text>
  <path d="M 205 90 L 245 90" stroke="#818cf8" strokeWidth="2" markerEnd="url(#arrow)" />
  <circle cx="280" cy="90" r="30" fill="#1e293b" stroke="#f59e0b" />
  <text x="280" y="94" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">3. CI Test</text>
  <path d="M 315 90 L 355 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />
  <circle cx="390" cy="90" r="30" fill="#1e293b" stroke="#a855f7" />
  <text x="390" y="94" fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle">4. Stage</text>
  <path d="M 425 90 L 465 90" stroke="#10b981" strokeWidth="2" />
  <circle cx="500" cy="90" r="30" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
  <text x="500" y="94" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">5. Prod 🚀</text>
</svg>`
    }
  ],
  quizzes: [
    {
      id: "quiz-34-4-1",
      question: "ما القاعدة الذهبية لمكتبة React Testing Library في كتابة الاختبارات الموثوقة؟",
      options: [
        "اختبار المتغيرات الداخلية والحالات الخاصة داخل المكون",
        "اختبار سلوك المستخدم الخارجي وما يراه على الشاشة وتجنب اختبار تفاصيل التنفيذ الداخلية تماماً",
        "التأكد من أن أسماء الفئات تبدأ بـ 'btn-'",
        "إيقاف تشغيل الاختبارات قبل النشر"
      ],
      correctAnswer: 1,
      explanation: "اختبار السلوك الخارجي يضمن أن التطبيق يعمل بشكل سليم للمستخدم الحقيقي ويمنع انكسار الاختبارات عند إعادة هيكلة الكود داخلياً."
    },
    {
      id: "quiz-34-4-2",
      question: "ما هو مبدأ YAGNI (You Aren't Gonna Need It) في المعمارية الهندسية؟",
      options: [
        "إضافة كل الميزات المعقدة مسبقاً قبل طلبها",
        "تجنب بناء تجريدات معقدة أو ميزات استباقية لم يطلبها أحد حالياً، والاكتفاء بالحل الأبسط الذي يحل المشكلة الحالية",
        "حذف قاعدة البيانات كل أسبوع",
        "عدم كتابة أي توثيق للبرمجيات"
      ],
      correctAnswer: 1,
      explanation: "يحمي مبدأ YAGNI الفرق من الإفراط الهندسي (Over-engineering) ويوفر الوقت لبناء ما يقدم قيمة حقيقية للعملاء الآن."
    },
    {
      id: "quiz-34-4-3",
      question: "كيف يساهم أسلوب فحص الأخطاء المنهجي (Scientific Debugging) في توفير وقت المهندس؟",
      options: [
        "بتغيير الكود عشوائياً وتكرار التجربة حتى ينجح بالصدفة",
        "بإعادة إنتاج الخطأ، وفحص مسار الاستدعاء (Stack Trace)، وعزل المتغيرات بالبحث الثنائي، وتأكيد الفرضية بدقة قبل كتابة الحل",
        "بإعادة تشغيل الكمبيوتر",
        "بطلب المساعدة فوراً دون قراءة رسالة الخطأ"
      ],
      correctAnswer: 1,
      explanation: "المنهج العلمي يحصر السبب الجذري للعطل بدقة عبر الأدلة والبراهين، مما يوفر ساعات طويلة من التخمين العشوائي المحبط."
    }
  ],
  practicalExercise: {
    id: "exercise-34-4",
    title: "بناء حاسبة تقدير المهام الواقعية بنموذج PERT الهندسي",
    description: "قم بإنشاء مكون تفاعلي يسمح للمهندس بإدخال الساعات المتفائلة، والمحتملة، والمتشائمة، وحساب التقدير النهائي المرجح مع هامش الأمان وعرض مستوى المخاطرة.",
    hints: [
      "استخدم المعادلة: (O + 4M + P) / 6 مع زيادة 20% هامش أمان.",
      "حدد مستوى المخاطرة: إذا كان الفارق بين المتشائم والمتفائل كبيراً، اعتبر المهمة عالية المخاطر.",
      "احرص على كتابة تعليق عربي فوق كل سطر برمجي يوضح الغرض من الكود."
    ],
    solution: `// الحل النموذجي لحاسبة التقدير الهندسي الواقعي بنموذج PERT
import React, { useState } from 'react';

export function PertEstimationCalculator() {
  // حالة الساعات المتفائلة (أفضل الظروف)
  const [optimistic, setOptimistic] = useState(4);
  // حالة الساعات الأكثر احتمالاً (المتوسط الواقعي)
  const [likely, setLikely] = useState(8);
  // حالة الساعات المتشائمة (أسوأ الظروف والمفاجآت)
  const [pessimistic, setPessimistic] = useState(16);

  // حساب التقدير المرجح بمعادلة PERT
  const rawEstimate = (optimistic + 4 * likely + pessimistic) / 6;
  // إضافة هامش أمان بنسبة 20%
  const finalEstimate = Math.round(rawEstimate * 1.2);

  // فحص درجة المخاطرة والغموض في المهمة
  const variance = pessimistic - optimistic;
  const isHighRisk = variance > 10;

  return (
    <div className="w-full max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 font-sans text-xs">
      <div>
        <h3 className="text-base font-black text-white">حاسبة التقدير الهندسي الواقعي (PERT)</h3>
        <p className="text-slate-400 mt-1">
          احسب مواعيد تسليم مهامك بدقة تحميك من الاحتراق النفسي وتكسبك ثقة فريقك.
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-emerald-400 font-semibold block mb-1">السيناريو المتفائل (ساعات):</label>
          <input
            type="number"
            min="1"
            value={optimistic}
            onChange={(e) => setOptimistic(Number(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 p-2 text-white rounded-xl"
          />
        </div>

        <div>
          <label className="text-sky-400 font-semibold block mb-1">السيناريو الأكثر احتمالاً (ساعات):</label>
          <input
            type="number"
            min="1"
            value={likely}
            onChange={(e) => setLikely(Number(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 p-2 text-white rounded-xl"
          />
        </div>

        <div>
          <label className="text-rose-400 font-semibold block mb-1">السيناريو المتشائم (ساعات):</label>
          <input
            type="number"
            min="1"
            value={pessimistic}
            onChange={(e) => setPessimistic(Number(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 p-2 text-white rounded-xl"
          />
        </div>
      </div>

      <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800 text-center space-y-2">
        <span className="text-slate-400 block text-xs">التقدير النهائي الموصى بإبلاغه للإدارة:</span>
        <div className="text-3xl font-black text-indigo-400 font-mono">
          {finalEstimate} ساعة عمل
        </div>
        <span className={\`text-[11px] font-bold block \${isHighRisk ? 'text-amber-400' : 'text-emerald-400'}\`}>
          {isHighRisk ? '⚠️ مهمة ذات تباين عالي ومخاطر مرتفعة (يفضل تفكيكها)' : '✓ تقدير متزن ومنخفض المخاطر'}
        </span>
      </div>
    </div>
  );
}`
  },
  topicInfographic: `<svg viewBox="0 0 600 240" className="w-full h-auto">
  <rect width="600" height="240" rx="16" fill="#0f172a" />
  <text x="300" y="35" fill="#38bdf8" fontSize="15" fontWeight="bold" textAnchor="middle">Professional Software Engineering Mindset Blueprint</text>
  <rect x="40" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
  <text x="115" y="85" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">Execution Core</text>
  <text x="115" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Requirements Specs</text>
  <text x="115" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">PERT Estimation</text>
  <text x="115" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Scientific Debugging</text>
  <text x="115" y="185" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">Predictable Results</text>
  <path d="M 195 135 L 235 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="240" y="60" width="150" height="150" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="2" />
  <text x="315" y="85" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">Collaboration</text>
  <text x="315" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">Constructive Reviews</text>
  <text x="315" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Typed API Contracts</text>
  <text x="315" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Deep Work Focus</text>
  <text x="315" y="185" fill="#818cf8" fontSize="10" fontWeight="bold" textAnchor="middle">High Team Trust</text>
  <path d="M 395 135 L 435 135" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
  <rect x="440" y="60" width="130" height="150" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
  <text x="505" y="85" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">Pragmatic Scale</text>
  <text x="505" y="115" fill="#94a3b8" fontSize="10" textAnchor="middle">YAGNI Simplicity</text>
  <text x="505" y="135" fill="#94a3b8" fontSize="10" textAnchor="middle">Behavioral Tests</text>
  <text x="505" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">Agile SDLC Mastery</text>
  <text x="505" y="185" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">Senior Mindset</text>
</svg>`
};

