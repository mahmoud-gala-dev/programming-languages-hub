// src/data/roadmapMeta.js
// بيانات الفهرس الشامل لخريطة طريق React.js (34 قسماً و 137 موضوعاً رئيسياً)

export const ROADMAP_SECTIONS = [
  {
    id: 1,
    number: "01",
    title: "القسم 1: أساسيات تطوير الويب",
    englishTitle: "Web Development Fundamentals",
    badge: "مبتدئ جداً",
    color: "from-blue-500 to-cyan-500",
    topicsCount: 4,
    subtopicsCount: 35,
    isCompleted: false,
    isCurrent: true,
    description: "فهم كيفية عمل الإنترنت، المتصفح والخادم، أساسيات HTML الدلالية، تنسيقات CSS ونماذج التخطيط الحديثة، وأدوات المطور الأساسية.",
    topics: [
      { id: "1.1", title: "مقدمة في تطوير الويب", subtopicsCount: 7 },
      { id: "1.2", title: "أساسيات HTML", subtopicsCount: 8 },
      { id: "1.3", title: "أساسيات CSS", subtopicsCount: 12 },
      { id: "1.4", title: "أدوات تطوير الويب", subtopicsCount: 8 }
    ]
  },
  {
    id: 2,
    number: "02",
    title: "القسم 2: أساسيات JavaScript",
    englishTitle: "JavaScript Fundamentals",
    badge: "مبتدئ",
    color: "from-amber-500 to-yellow-400",
    topicsCount: 3,
    subtopicsCount: 28,
    isCompleted: false,
    description: "المتغيرات، أنواع البيانات، الدوال، نطاق المتغيرات، التلاعب بالمصفوفات والكائنات، والتفاعل المباشر مع شجرة DOM.",
    topics: [
      { id: "2.1", title: "المفاهيم الأساسية", subtopicsCount: 10 },
      { id: "2.2", title: "المصفوفات والكائنات", subtopicsCount: 10 },
      { id: "2.3", title: "التعامل مع DOM", subtopicsCount: 8 }
    ]
  },
  {
    id: 3,
    number: "03",
    title: "القسم 3: JavaScript الحديثة والمتقدمة",
    englishTitle: "Modern & Advanced JavaScript",
    badge: "مبتدئ - متوسط",
    color: "from-emerald-500 to-teal-400",
    topicsCount: 4,
    subtopicsCount: 39,
    isCompleted: false,
    description: "ميزات ES6+ (Destructuring, Spread, Arrow Functions)، المفاهيم المتقدمة (Closures, Scope, Immutability)، البرمجة غير المتزامنة (Promises, async/await)، وواجهات المتصفح.",
    topics: [
      { id: "3.1", title: "ميزات ES6 وما بعدها", subtopicsCount: 10 },
      { id: "3.2", title: "مفاهيم JavaScript المتقدمة", subtopicsCount: 10 },
      { id: "3.3", title: "البرمجة غير المتزامنة", subtopicsCount: 11 },
      { id: "3.4", title: "التخزين وواجهات المتصفح", subtopicsCount: 8 }
    ]
  },
  {
    id: 4,
    number: "04",
    title: "القسم 4: التعرف على React وإعداد البيئة",
    englishTitle: "Introduction to React & Setup",
    badge: "مبتدئ React",
    color: "from-cyan-500 to-blue-600",
    topicsCount: 3,
    subtopicsCount: 26,
    isCompleted: false,
    description: "فلسفة React، شجرة المكونات (Component Tree)، إنشاء المشاريع عبر Vite، وأدوات React Developer Tools.",
    topics: [
      { id: "4.1", title: "مقدمة إلى React", subtopicsCount: 9 },
      { id: "4.2", title: "إنشاء مشروع React", subtopicsCount: 10 },
      { id: "4.3", title: "أدوات React", subtopicsCount: 7 }
    ]
  },
  {
    id: 5,
    number: "05",
    title: "القسم 5: JSX والمكونات",
    englishTitle: "JSX & Components",
    badge: "مبتدئ React",
    color: "from-indigo-500 to-purple-500",
    topicsCount: 4,
    subtopicsCount: 39,
    isCompleted: false,
    description: "قواعد كتابة JSX، بناء المكونات الوظيفية، تمرير الخصائص Props، والعرض الشرطي وعرض القوائم باستخدام map وkeys.",
    topics: [
      { id: "5.1", title: "أساسيات JSX", subtopicsCount: 10 },
      { id: "5.2", title: "إنشاء المكونات", subtopicsCount: 9 },
      { id: "5.3", title: "الخصائص Props", subtopicsCount: 10 },
      { id: "5.4", title: "عرض البيانات", subtopicsCount: 10 }
    ]
  },
  {
    id: 6,
    number: "06",
    title: "القسم 6: الأحداث والحالة في React",
    englishTitle: "Events & State in React",
    badge: "أساسي React",
    color: "from-rose-500 to-pink-500",
    topicsCount: 4,
    subtopicsCount: 36,
    isCompleted: false,
    description: "معالجة أحداث النقر والإدخال، إدارة الحالة useState وتحديث البيانات دون تعديل الأصل، ودورة التصيير (Render Cycle).",
    topics: [
      { id: "6.1", title: "التعامل مع الأحداث", subtopicsCount: 9 },
      { id: "6.2", title: "إدارة الحالة باستخدام useState", subtopicsCount: 10 },
      { id: "6.3", title: "دورة التصيير في React", subtopicsCount: 8 },
      { id: "6.4", title: "مشاركة الحالة بين المكونات", subtopicsCount: 8 }
    ]
  },
  {
    id: 7,
    number: "07",
    title: "القسم 7: React Hooks الأساسية",
    englishTitle: "Essential React Hooks",
    badge: "أساسي React",
    color: "from-violet-500 to-purple-600",
    topicsCount: 6,
    subtopicsCount: 52,
    isCompleted: false,
    description: "إتقان useEffect, useRef, useContext, useReducer وقواعد الهوكس وكيفية صناعة Custom Hooks مخصصة.",
    topics: [
      { id: "7.1", title: "قواعد استخدام Hooks", subtopicsCount: 6 },
      { id: "7.2", title: "استخدام useEffect", subtopicsCount: 11 },
      { id: "7.3", title: "استخدام useRef", subtopicsCount: 8 },
      { id: "7.4", title: "استخدام useContext", subtopicsCount: 9 },
      { id: "7.5", title: "استخدام useReducer", subtopicsCount: 9 },
      { id: "7.6", title: "إنشاء Custom Hooks", subtopicsCount: 10 }
    ]
  },
  {
    id: 8,
    number: "08",
    title: "القسم 8: النماذج والتعامل مع المستخدم",
    englishTitle: "Forms & User Input",
    badge: "متوسط",
    color: "from-orange-500 to-amber-500",
    topicsCount: 4,
    subtopicsCount: 35,
    isCompleted: false,
    description: "النماذج المضبوطة (Controlled Forms)، التحقق بواسطة React Hook Form وZod، وForm Actions الحديثة في React 19.",
    topics: [
      { id: "8.1", title: "أساسيات النماذج", subtopicsCount: 9 },
      { id: "8.2", title: "التحقق من البيانات", subtopicsCount: 9 },
      { id: "8.3", title: "مكتبات إدارة النماذج", subtopicsCount: 10 },
      { id: "8.4", title: "نماذج React الحديثة", subtopicsCount: 7 }
    ]
  },
  {
    id: 9,
    number: "09",
    title: "القسم 9: تنسيق واجهات React",
    englishTitle: "Styling React Applications",
    badge: "متوسط",
    color: "from-teal-500 to-emerald-600",
    topicsCount: 4,
    subtopicsCount: 35,
    isCompleted: false,
    description: "CSS Modules, Tailwind CSS, shadcn/ui و Radix UI وتصميم نظم واجهات متجاوبة تدعم الوضع الداكن وRTL.",
    topics: [
      { id: "9.1", title: "طرق كتابة CSS في React", subtopicsCount: 7 },
      { id: "9.2", title: "استخدام Tailwind CSS", subtopicsCount: 9 },
      { id: "9.3", title: "مكتبات مكونات الواجهة", subtopicsCount: 8 },
      { id: "9.4", title: "تصميم واجهات احترافية", subtopicsCount: 10 }
    ]
  },
  {
    id: 10,
    number: "10",
    title: "القسم 10: التعامل مع APIs والبيانات الخارجية",
    englishTitle: "APIs & Data Fetching",
    badge: "متوسط",
    color: "from-sky-500 to-blue-600",
    topicsCount: 4,
    subtopicsCount: 35,
    isCompleted: false,
    description: "بروتوكول REST API، استخدام Fetch وAxios، عمليات CRUD الكاملة، والبحث والفلترة والترقيم المتزامن مع URL.",
    topics: [
      { id: "10.1", title: "أساسيات REST API", subtopicsCount: 8 },
      { id: "10.2", title: "جلب البيانات في React", subtopicsCount: 10 },
      { id: "10.3", title: "عمليات CRUD", subtopicsCount: 8 },
      { id: "10.4", title: "البحث والترقيم والفلترة", subtopicsCount: 8 }
    ]
  },
  {
    id: 11,
    number: "11",
    title: "القسم 11: التوجيه والتنقل باستخدام React Router",
    englishTitle: "Routing with React Router",
    badge: "متوسط",
    color: "from-red-500 to-rose-600",
    topicsCount: 4,
    subtopicsCount: 31,
    isCompleted: false,
    description: "التنقل من جانب العميل، المسارات المتداخلة (Nested Routes)، حماية المسارات (Protected Routes)، والـ Data Loaders الحديثة.",
    topics: [
      { id: "11.1", title: "مقدمة إلى Routing", subtopicsCount: 7 },
      { id: "11.2", title: "التنقل بين الصفحات", subtopicsCount: 8 },
      { id: "11.3", title: "المسارات المتقدمة", subtopicsCount: 8 },
      { id: "11.4", title: "واجهات React Router الحديثة", subtopicsCount: 8 }
    ]
  },
  {
    id: 12,
    number: "12",
    title: "القسم 12: إدارة الحالة المتقدمة",
    englishTitle: "Advanced State Management",
    badge: "متوسط - متقدم",
    color: "from-purple-600 to-indigo-700",
    topicsCount: 5,
    subtopicsCount: 43,
    isCompleted: false,
    description: "تصنيف أنواع الحالة، Redux Toolkit، RTK Query، Zustand، والمقارنة الشاملة لاختيار الحل الأنسب.",
    topics: [
      { id: "12.1", title: "تصنيف أنواع الحالة", subtopicsCount: 8 },
      { id: "12.2", title: "Redux Toolkit", subtopicsCount: 12 },
      { id: "12.3", title: "RTK Query", subtopicsCount: 9 },
      { id: "12.4", title: "Zustand", subtopicsCount: 8 },
      { id: "12.5", title: "مقارنة حلول إدارة الحالة", subtopicsCount: 6 }
    ]
  },
  {
    id: 13,
    number: "13",
    title: "القسم 13: إدارة Server State باستخدام TanStack Query",
    englishTitle: "Server State with TanStack Query",
    badge: "متقدم",
    color: "from-rose-600 to-amber-600",
    topicsCount: 4,
    subtopicsCount: 31,
    isCompleted: false,
    description: "التخزين المؤقت للبيانات، staleTime vs gcTime، استخدام useMutation والتحديث المتفائل (Optimistic Updates)، وInfinite Queries.",
    topics: [
      { id: "13.1", title: "أساسيات TanStack Query", subtopicsCount: 8 },
      { id: "13.2", title: "التخزين المؤقت وإعادة الجلب", subtopicsCount: 8 },
      { id: "13.3", title: "تعديل بيانات الخادم", subtopicsCount: 7 },
      { id: "13.4", title: "المفاهيم المتقدمة", subtopicsCount: 8 }
    ]
  },
  {
    id: 14,
    number: "14",
    title: "القسم 14: TypeScript مع React",
    englishTitle: "TypeScript with React",
    badge: "متقدم",
    color: "from-blue-600 to-sky-700",
    topicsCount: 4,
    subtopicsCount: 37,
    isCompleted: false,
    description: "أنواع Props، Generics، تعريف أنواع الهوكس والأحداث، وبناء تطبيقات كبيرة بنظام كتابة قوي خالٍ من any.",
    topics: [
      { id: "14.1", title: "أساسيات TypeScript", subtopicsCount: 12 },
      { id: "14.2", title: "إعداد React مع TypeScript", subtopicsCount: 8 },
      { id: "14.3", title: "TypeScript مع Hooks", subtopicsCount: 7 },
      { id: "14.4", title: "TypeScript في المشاريع الكبيرة", subtopicsCount: 10 }
    ]
  },
  {
    id: 15,
    number: "15",
    title: "القسم 15: React Hooks المتقدمة ومفاهيم React الحديثة",
    englishTitle: "Advanced Hooks & Modern React 19",
    badge: "متقدم",
    color: "from-fuchsia-600 to-pink-600",
    topicsCount: 5,
    subtopicsCount: 40,
    isCompleted: false,
    description: "useMemo, useCallback, useTransition, useActionState, useOptimistic, والـ React Compiler وتأثيره على التحسين التلقائي.",
    topics: [
      { id: "15.1", title: "استخدام useMemo وuseCallback", subtopicsCount: 7 },
      { id: "15.2", title: "استخدام useLayoutEffect وuseImperativeHandle", subtopicsCount: 8 },
      { id: "15.3", title: "استخدام useId وuseSyncExternalStore", subtopicsCount: 7 },
      { id: "15.4", title: "التحديثات والانتقالات", subtopicsCount: 7 },
      { id: "15.5", title: "React الحديثة (React 19)", subtopicsCount: 11 }
    ]
  },
  {
    id: 16,
    number: "16",
    title: "القسم 16: أنماط التصميم وتنظيم التطبيقات",
    englishTitle: "Design Patterns & Architecture",
    badge: "متقدم",
    color: "from-indigo-600 to-blue-700",
    topicsCount: 4,
    subtopicsCount: 35,
    isCompleted: false,
    description: "Compound Components, Headless Components, Feature-Based Architecture ومبادئ الكود النظيف وقابلية الصيانة.",
    topics: [
      { id: "16.1", title: "أنماط بناء المكونات", subtopicsCount: 9 },
      { id: "16.2", title: "هندسة ملفات المشروع", subtopicsCount: 9 },
      { id: "16.3", title: "مبادئ كتابة كود قابل للصيانة", subtopicsCount: 10 },
      { id: "16.4", title: "مفاهيم React القديمة وحلول الهجرة", subtopicsCount: 7 }
    ]
  },
  {
    id: 17,
    number: "17",
    title: "القسم 17: المصادقة والصلاحيات والأمان",
    englishTitle: "Authentication & Security",
    badge: "متقدم",
    color: "from-emerald-600 to-green-700",
    topicsCount: 4,
    subtopicsCount: 33,
    isCompleted: false,
    description: "JWT, Refresh Tokens, HttpOnly Cookies, Role-Based Access Control (RBAC), والحماية من ثغرات XSS وCSRF.",
    topics: [
      { id: "17.1", title: "أساسيات Authentication", subtopicsCount: 8 },
      { id: "17.2", title: "تنفيذ واجهات المصادقة", subtopicsCount: 9 },
      { id: "17.3", title: "إدارة الصلاحيات", subtopicsCount: 6 },
      { id: "17.4", title: "أمان تطبيقات React", subtopicsCount: 10 }
    ]
  },
  {
    id: 18,
    number: "18",
    title: "القسم 18: تحسين الأداء",
    englishTitle: "Performance Optimization",
    badge: "متقدم",
    color: "from-amber-600 to-orange-700",
    topicsCount: 5,
    subtopicsCount: 40,
    isCompleted: false,
    description: "React Profiler, Code Splitting, List Virtualization مع TanStack Virtual، وتحسين Core Web Vitals (LCP, INP, CLS).",
    topics: [
      { id: "18.1", title: "تحليل الأداء", subtopicsCount: 7 },
      { id: "18.2", title: "تقليل عمليات التصيير", subtopicsCount: 8 },
      { id: "18.3", title: "تحميل الموارد بكفاءة", subtopicsCount: 10 },
      { id: "18.4", title: "تحسين عرض البيانات الكبيرة", subtopicsCount: 8 },
      { id: "18.5", title: "مؤشرات أداء الويب", subtopicsCount: 8 }
    ]
  },
  {
    id: 19,
    number: "19",
    title: "القسم 19: الاختبارات وتصحيح الأخطاء",
    englishTitle: "Testing & Debugging",
    badge: "متقدم",
    color: "from-cyan-600 to-teal-700",
    topicsCount: 6,
    subtopicsCount: 50,
    isCompleted: false,
    description: "Vitest, React Testing Library, Mock Service Worker (MSW), واختبارات Playwright End-to-End، وأساليب تتبع الأخطاء.",
    topics: [
      { id: "19.1", title: "أساسيات الاختبارات", subtopicsCount: 7 },
      { id: "19.2", title: "الاختبارات باستخدام Vitest", subtopicsCount: 8 },
      { id: "19.3", title: "React Testing Library", subtopicsCount: 11 },
      { id: "19.4", title: "محاكاة الشبكة والاختبارات المتكاملة", subtopicsCount: 7 },
      { id: "19.5", title: "اختبارات End-to-End مع Playwright", subtopicsCount: 9 },
      { id: "19.6", title: "تصحيح الأخطاء Debugging", subtopicsCount: 8 }
    ]
  },
  {
    id: 20,
    number: "20",
    title: "القسم 20: إمكانية الوصول وتجربة المستخدم",
    englishTitle: "Accessibility (a11y) & UX",
    badge: "احترافي",
    color: "from-blue-500 to-indigo-600",
    topicsCount: 3,
    subtopicsCount: 25,
    isCompleted: false,
    description: "معايير WCAG، سمات ARIA، إدارة التركيز (Focus Management)، وحالات التجربة الفارغة والتحميل المتفائل.",
    topics: [
      { id: "20.1", title: "أساسيات Accessibility", subtopicsCount: 9 },
      { id: "20.2", title: "إمكانية الوصول في مكونات React", subtopicsCount: 8 },
      { id: "20.3", title: "تحسين تجربة المستخدم", subtopicsCount: 8 }
    ]
  },
  {
    id: 21,
    number: "21",
    title: "القسم 21: الترجمة والتطبيقات متعددة اللغات",
    englishTitle: "Internationalization (i18n) & RTL",
    badge: "احترافي",
    color: "from-teal-600 to-emerald-700",
    topicsCount: 3,
    subtopicsCount: 22,
    isCompleted: false,
    description: "مكتبة react-i18next، الترجمة الديناميكية، قواعد الجمع والأرقام، والدعم الكامل للاتجاه من اليمين إلى اليسار (RTL).",
    topics: [
      { id: "21.1", title: "مفاهيم التدويل", subtopicsCount: 8 },
      { id: "21.2", title: "استخدام react-i18next", subtopicsCount: 8 },
      { id: "21.3", title: "دعم اللغة العربية وRTL", subtopicsCount: 6 }
    ]
  },
  {
    id: 22,
    number: "22",
    title: "القسم 22: الرسوم المتحركة والواجهات التفاعلية",
    englishTitle: "Animations & Gestures",
    badge: "احترافي",
    color: "from-pink-500 to-rose-600",
    topicsCount: 3,
    subtopicsCount: 21,
    isCompleted: false,
    description: "مكتبة Motion for React (Framer Motion سابقاً)، تحريكات الدخول والخروج والـ Layout، والسحب والإفلات بـ dnd-kit.",
    topics: [
      { id: "22.1", title: "الرسوم المتحركة الأساسية", subtopicsCount: 6 },
      { id: "22.2", title: "مكتبات Animation", subtopicsCount: 9 },
      { id: "22.3", title: "التفاعلات المتقدمة وDnD", subtopicsCount: 6 }
    ]
  },
  {
    id: 23,
    number: "23",
    title: "القسم 23: عرض البيانات والتطبيقات المتقدمة",
    englishTitle: "Advanced Data Tables & Realtime",
    badge: "احترافي",
    color: "from-violet-600 to-indigo-700",
    topicsCount: 4,
    subtopicsCount: 39,
    isCompleted: false,
    description: "TanStack Table، الرسوم البيانية التفاعلية Recharts، رفع الملفات متعدد المراحل، والاتصال الفوري بـ WebSockets.",
    topics: [
      { id: "23.1", title: "الجداول المتقدمة", subtopicsCount: 10 },
      { id: "23.2", title: "الرسوم البيانية", subtopicsCount: 8 },
      { id: "23.3", title: "رفع الملفات والتعامل معها", subtopicsCount: 9 },
      { id: "23.4", title: "البيانات الفورية Real-Time", subtopicsCount: 10 }
    ]
  },
  {
    id: 24,
    number: "24",
    title: "القسم 24: Server-Side Rendering وReact Server Components",
    englishTitle: "SSR & React Server Components",
    badge: "خبير",
    color: "from-purple-700 to-fuchsia-800",
    topicsCount: 3,
    subtopicsCount: 25,
    isCompleted: false,
    description: "مقارنة CSR, SSR, SSG, ISR، شجرة الخادم والعميل، مفهوم 'use client' و 'use server'، وStreaming SSR.",
    topics: [
      { id: "24.1", title: "استراتيجيات عرض الصفحات", subtopicsCount: 8 },
      { id: "24.2", title: "أساسيات React على الخادم", subtopicsCount: 8 },
      { id: "24.3", title: "React Server Components", subtopicsCount: 9 }
    ]
  },
  {
    id: 25,
    number: "25",
    title: "القسم 25: تعلم Next.js مع React",
    englishTitle: "Next.js App Router Masterclass",
    badge: "خبير",
    color: "from-slate-800 to-zinc-950",
    topicsCount: 5,
    subtopicsCount: 39,
    isCompleted: false,
    description: "Next.js App Router، Server Components، Server Actions، Route Handlers، والتحسين الفائق للصور والخطوط ومحركات البحث.",
    topics: [
      { id: "25.1", title: "مقدمة إلى Next.js", subtopicsCount: 7 },
      { id: "25.2", title: "Routing في Next.js", subtopicsCount: 9 },
      { id: "25.3", title: "جلب البيانات والتصيير", subtopicsCount: 8 },
      { id: "25.4", title: "العمليات على الخادم", subtopicsCount: 8 },
      { id: "25.5", title: "تحسين تطبيقات Next.js", subtopicsCount: 8 }
    ]
  },
  {
    id: 26,
    number: "26",
    title: "القسم 26: SEO وتطبيقات الويب التقدمية",
    englishTitle: "SEO & Progressive Web Apps (PWA)",
    badge: "خبير",
    color: "from-amber-500 to-emerald-600",
    topicsCount: 2,
    subtopicsCount: 19,
    isCompleted: false,
    description: "تحسين محركات البحث، Open Graph و Structured Data، و Service Workers، وتثبيت التطبيق كـ PWA مع العمل دون إنترنت.",
    topics: [
      { id: "26.1", title: "تحسين محركات البحث SEO", subtopicsCount: 9 },
      { id: "26.2", title: "Progressive Web Apps", subtopicsCount: 10 }
    ]
  },
  {
    id: 27,
    number: "27",
    title: "القسم 27: Git وGitHub والعمل الجماعي",
    englishTitle: "Git, GitHub & Team Collaboration",
    badge: "احترافي",
    color: "from-orange-600 to-red-700",
    topicsCount: 3,
    subtopicsCount: 30,
    isCompleted: false,
    description: "أوامر Git الاحترافية، حل النزاعات (Conflicts)، Conventional Commits، مراجعة الكود، و Husky و Git Hooks.",
    topics: [
      { id: "27.1", title: "أساسيات Git", subtopicsCount: 11 },
      { id: "27.2", title: "العمل باستخدام GitHub", subtopicsCount: 10 },
      { id: "27.3", title: "معايير العمل الجماعي", subtopicsCount: 9 }
    ]
  },
  {
    id: 28,
    number: "28",
    title: "القسم 28: بناء التطبيقات ونشرها",
    englishTitle: "Build, Deployment & CI/CD",
    badge: "مهندس إنتاج",
    color: "from-blue-600 to-indigo-800",
    topicsCount: 4,
    subtopicsCount: 35,
    isCompleted: false,
    description: "إعداد Production Build، النشر على Vercel وNetlify وCloudflare، أتمتة GitHub Actions، وحاويات Docker وNginx.",
    topics: [
      { id: "28.1", title: "إعداد نسخة الإنتاج", subtopicsCount: 8 },
      { id: "28.2", title: "استضافة تطبيقات React", subtopicsCount: 9 },
      { id: "28.3", title: "CI/CD Pipelines", subtopicsCount: 10 },
      { id: "28.4", title: "Docker ومفاهيم النشر المتقدمة", subtopicsCount: 8 }
    ]
  },
  {
    id: 29,
    number: "29",
    title: "القسم 29: مراقبة التطبيقات وصيانتها",
    englishTitle: "Monitoring & Maintenance",
    badge: "مهندس إنتاج",
    color: "from-rose-700 to-pink-800",
    topicsCount: 3,
    subtopicsCount: 25,
    isCompleted: false,
    description: "تتبع الأخطاء باستخدام Sentry، تحليل الأداء الحقيقي (RUM)، ترقية الحزم وCodemods وإدارة الديون التقنية.",
    topics: [
      { id: "29.1", title: "مراقبة الأخطاء", subtopicsCount: 8 },
      { id: "29.2", title: "مراقبة الأداء والاستخدام", subtopicsCount: 8 },
      { id: "29.3", title: "صيانة المشاريع والترقية", subtopicsCount: 9 }
    ]
  },
  {
    id: 30,
    number: "30",
    title: "القسم 30: المعمارية المتقدمة والتوسع",
    englishTitle: "Enterprise Architecture & Monorepos",
    badge: "مهندس برمجيات",
    color: "from-purple-800 to-slate-900",
    topicsCount: 4,
    subtopicsCount: 36,
    isCompleted: false,
    description: "بناء مكتبات مكونات Storybook، إدارة Monorepo بـ Turborepo، وهندسة Micro Frontends بـ Module Federation.",
    topics: [
      { id: "30.1", title: "هندسة تطبيقات React الكبيرة", subtopicsCount: 9 },
      { id: "30.2", title: "إنشاء مكتبة مكونات ونشرها", subtopicsCount: 11 },
      { id: "30.3", title: "Monorepo وTurborepo", subtopicsCount: 9 },
      { id: "30.4", title: "Micro Frontends", subtopicsCount: 8 }
    ]
  },
  {
    id: 31,
    number: "31",
    title: "القسم 31: مشاريع تطبيقية للمبتدئين",
    englishTitle: "Beginner Practical Projects",
    badge: "مشاريع عملية",
    color: "from-emerald-500 to-cyan-500",
    topicsCount: 5,
    subtopicsCount: 42,
    isCompleted: false,
    description: "5 مشاريع عملية كاملة: تطبيق العداد الذكي، قائمة المهام Todo مع LocalStorage، تطبيق الطقس بالـ API، تطبيق الملاحظات، وتطبيق الاختبار التفاعلي.",
    topics: [
      { id: "31.1", title: "مشروع 1: تطبيق العداد", subtopicsCount: 8 },
      { id: "31.2", title: "مشروع 2: تطبيق قائمة المهام", subtopicsCount: 9 },
      { id: "31.3", title: "مشروع 3: تطبيق الطقس", subtopicsCount: 8 },
      { id: "31.4", title: "مشروع 4: تطبيق ملاحظات", subtopicsCount: 8 },
      { id: "31.5", title: "مشروع 5: تطبيق اختبار تفاعلي", subtopicsCount: 9 }
    ]
  },
  {
    id: 32,
    number: "32",
    title: "القسم 32: مشاريع تطبيقية للمستوى المتوسط",
    englishTitle: "Intermediate Projects",
    badge: "مشاريع عملية",
    color: "from-blue-600 to-violet-600",
    topicsCount: 4,
    subtopicsCount: 40,
    isCompleted: false,
    description: "4 مشاريع حقيقية: متجر إلكتروني بسلة تسوق متكاملة، لوحة تحكم Dashboard مع Charts، تطبيق إدارة المستخدمين بـ CRUD، وتطبيق إدارة المصروفات.",
    topics: [
      { id: "32.1", title: "مشروع 6: متجر إلكتروني", subtopicsCount: 11 },
      { id: "32.2", title: "مشروع 7: لوحة تحكم Dashboard", subtopicsCount: 10 },
      { id: "32.3", title: "مشروع 8: تطبيق إدارة المستخدمين", subtopicsCount: 10 },
      { id: "32.4", title: "مشروع 9: تطبيق إدارة المصروفات", subtopicsCount: 9 }
    ]
  },
  {
    id: 33,
    number: "33",
    title: "القسم 33: مشاريع متقدمة واحترافية",
    englishTitle: "Advanced & Enterprise Projects",
    badge: "مشاريع عملاقة",
    color: "from-amber-600 to-rose-600",
    topicsCount: 5,
    subtopicsCount: 69,
    isCompleted: false,
    description: "5 منصات إنتاجية كبرى: منصة تجارة إلكترونية كاملة، تطبيق Kanban لإدارة المشاريع مع السحب والإفلات، تطبيق محادثة فورية، منصة تعليم إلكتروني، وتطبيق SaaS بـ Next.js.",
    topics: [
      { id: "33.1", title: "مشروع 10: منصة تجارة إلكترونية متكاملة", subtopicsCount: 15 },
      { id: "33.2", title: "مشروع 11: منصة إدارة مشاريع وكانبان", subtopicsCount: 12 },
      { id: "33.3", title: "مشروع 12: تطبيق محادثة فورية", subtopicsCount: 13 },
      { id: "33.4", title: "مشروع 13: منصة تعليم إلكتروني", subtopicsCount: 12 },
      { id: "33.5", title: "مشروع 14: تطبيق SaaS باستخدام Next.js", subtopicsCount: 17 }
    ]
  },
  {
    id: 34,
    number: "34",
    title: "القسم 34: الاستعداد لسوق العمل واحتراف React",
    englishTitle: "Career Readiness & Mastery",
    badge: "سوق العمل والوظائف",
    color: "from-teal-600 to-cyan-700",
    topicsCount: 5,
    subtopicsCount: 52,
    isCompleted: false,
    description: "بناء معرض أعمال Portfolio يخطف الأنظار، أسئلة مقابلات JavaScript و React المتقدمة، مهارات مهندس البرمجيات المحترف، والتطوير المستمر.",
    topics: [
      { id: "34.1", title: "بناء معرض أعمال Portfolio", subtopicsCount: 9 },
      { id: "34.2", title: "الاستعداد لمقابلات JavaScript", subtopicsCount: 8 },
      { id: "34.3", title: "الاستعداد لمقابلات React", subtopicsCount: 15 },
      { id: "34.4", title: "مهارات المهندس المحترف", subtopicsCount: 10 },
      { id: "34.5", title: "التعلم المستمر والتخصص", subtopicsCount: 10 }
    ]
  }
];

