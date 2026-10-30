// src/data/roadmapMeta.js
// بيانات الفهرس الشامل لخريطة طريق Express.js (27 قسماً تعليمياً متكاملاً)

export const ROADMAP_SECTIONS = [
  {
    "id": 1,
    "number": "01",
    "title": "القسم الأول: المتطلبات الأساسية قبل تعلم Express.js",
    "englishTitle": "Prerequisites for Express.js",
    "badge": "المتطلبات الأساسية",
    "color": "from-blue-600 to-cyan-500",
    "topicsCount": 5,
    "subtopicsCount": 42,
    "description": "المفاهيم التأسيسية لتطوير الويب، بروتوكول HTTP، أساسيات JavaScript الحديثة غير المتزامنة، مقدمة في Node.js وREST APIs."
  },
  {
    "id": 2,
    "number": "02",
    "title": "القسم الثاني: التعرف على Express.js وإعداد بيئة العمل",
    "englishTitle": "Introduction to Express.js & Setup",
    "badge": "البداية والإعداد",
    "color": "from-amber-500 to-yellow-600",
    "topicsCount": 6,
    "subtopicsCount": 47,
    "description": "فلسفة ومميزات Express.js، مقارنتها مع أطر العمل الأخرى، إعداد البيئة وتثبيت Express 5، وإنشاء أول خادم ويب."
  },
  {
    "id": 3,
    "number": "03",
    "title": "القسم الثالث: فهم Request وResponse بالتفصيل",
    "englishTitle": "Request & Response Deep Dive",
    "badge": "الأساسيات الجوهرية",
    "color": "from-emerald-600 to-teal-500",
    "topicsCount": 6,
    "subtopicsCount": 53,
    "description": "تشريح كائن الطلب req وكائن الاستجابة res، معالجة المسارات والمدخلات والترويسات وحالات HTTP وتدفقات Streams."
  },
  {
    "id": 4,
    "number": "04",
    "title": "القسم الرابع: احتراف Routing في Express.js",
    "englishTitle": "Mastering Routing in Express.js",
    "badge": "التوجيه والمسارات",
    "color": "from-orange-500 to-amber-600",
    "topicsCount": 5,
    "subtopicsCount": 40,
    "description": "إنشاء مسارات ديناميكية، استخدام express.Router()، تنظيم المسارات الهرمية، والتعبيرات النمطية وحماية المسارات."
  },
  {
    "id": 5,
    "number": "05",
    "title": "القسم الخامس: Middleware من الأساسيات إلى الاحتراف",
    "englishTitle": "Middleware Mastery",
    "badge": "البرمجيات الوسيطة",
    "color": "from-purple-600 to-indigo-500",
    "topicsCount": 6,
    "subtopicsCount": 44,
    "description": "فهم دورة حياة Middleware، الوسائط المدمجة ومكتبات الطرف الثالث، وبناء وسائط مخصصة للتوثيق والتحقق والأداء."
  },
  {
    "id": 6,
    "number": "06",
    "title": "القسم السادس: معالجة الأخطاء Error Handling",
    "englishTitle": "Error Handling Architecture",
    "badge": "معالجة الأخطاء",
    "color": "from-rose-600 to-red-500",
    "topicsCount": 4,
    "subtopicsCount": 30,
    "description": "بناء فئات أخطاء مخصصة Custom Errors، وسيط الأخطاء العام، التعامل مع الأخطاء غير المتزامنة في Express 5، والمراقبة."
  },
  {
    "id": 7,
    "number": "07",
    "title": "القسم السابع: بناء RESTful APIs احترافية",
    "englishTitle": "Building Professional RESTful APIs",
    "badge": "بناء REST APIs",
    "color": "from-indigo-600 to-blue-500",
    "topicsCount": 6,
    "subtopicsCount": 47,
    "description": "مبادئ بنية REST، تصميم Endpoints قياسية، التصفح والفرز والبحث (Pagination, Sorting, Filtering)، وإصدارات API."
  },
  {
    "id": 8,
    "number": "08",
    "title": "القسم الثامن: التحقق من البيانات Validation وSanitization",
    "englishTitle": "Validation & Sanitization",
    "badge": "التحقق والتعقيم",
    "color": "from-teal-600 to-emerald-500",
    "topicsCount": 4,
    "subtopicsCount": 32,
    "description": "حماية الخادم والبيانات باستخدام Zod وJoi وexpress-validator، تعقيم المدخلات، وتوحيد رسائل أخطاء التحقق للمستخدم."
  },
  {
    "id": 9,
    "number": "09",
    "title": "القسم التاسع: تنظيم المشروع وهندسة Express.js",
    "englishTitle": "Project Architecture & Clean Code",
    "badge": "الهيكلة النظيفة",
    "color": "from-sky-600 to-blue-600",
    "topicsCount": 6,
    "subtopicsCount": 46,
    "description": "تنظيم المشروعات الكبيرة وفق نمط Controller-Service-Repository، فصل المسؤوليات، وإدارة المتغيرات البيئية بأمان."
  },
  {
    "id": 10,
    "number": "10",
    "title": "القسم العاشر: قواعد البيانات SQL مع Express.js",
    "englishTitle": "SQL Databases with Express.js",
    "badge": "قواعد بيانات SQL",
    "color": "from-blue-700 to-indigo-600",
    "topicsCount": 7,
    "subtopicsCount": 58,
    "description": "ربط Express بقواعد PostgreSQL وMySQL وSQLite، إدارة الاتصالات عبر Connection Pools، واستخدام Prisma وSequelize."
  },
  {
    "id": 11,
    "number": "11",
    "title": "القسم الحادي عشر: MongoDB وMongoose مع Express",
    "englishTitle": "MongoDB & Mongoose with Express",
    "badge": "قواعد NoSQL",
    "color": "from-green-600 to-emerald-600",
    "topicsCount": 5,
    "subtopicsCount": 40,
    "description": "ربط MongoDB مع Express، تعريف المخططات والنماذج عبر Mongoose، الاستعلامات والعلاقات وخطوط أنابيب التجميع Aggregation."
  },
  {
    "id": 12,
    "number": "12",
    "title": "القسم الثاني عشر: المصادقة وإدارة المستخدمين Authentication",
    "englishTitle": "Authentication & User Management",
    "badge": "المصادقة والأمان",
    "color": "from-violet-600 to-purple-600",
    "topicsCount": 6,
    "subtopicsCount": 49,
    "description": "تسجيل الدخول، تشفير كلمات المرور باستخدام Bcrypt/Argon2، المصادقة عبر JWT وSession Cookies، وتأمين التوكنات وتجديدها."
  },
  {
    "id": 13,
    "number": "13",
    "title": "القسم الثالث عشر: الصلاحيات Authorization وإدارة الأدوار",
    "englishTitle": "Authorization & Role-Based Access Control",
    "badge": "إدارة الصلاحيات",
    "color": "from-fuchsia-600 to-pink-600",
    "topicsCount": 5,
    "subtopicsCount": 35,
    "description": "التحكم في الوصول حسب الأدوار (RBAC)، التحكم القائم على السمات (ABAC)، مكتبات CASL، وحماية المسارات الحساسة."
  },
  {
    "id": 14,
    "number": "14",
    "title": "القسم الرابع عشر: أمن Express.js وحماية REST APIs",
    "englishTitle": "Express.js Security & Hardening",
    "badge": "الحماية والأمان",
    "color": "from-red-600 to-rose-700",
    "topicsCount": 7,
    "subtopicsCount": 58,
    "description": "تأمين الخادم باستخدام Helmet وCORS ومحدد المعدل Rate Limiting، والوقاية من هجمات XSS وCSRF وحقن SQL وNoSQL."
  },
  {
    "id": 15,
    "number": "15",
    "title": "القسم الخامس عشر: الملفات والقوالب والمحتوى الثابت",
    "englishTitle": "Static Files, Templates & Uploads",
    "badge": "الملفات والقوالب",
    "color": "from-yellow-600 to-amber-600",
    "topicsCount": 6,
    "subtopicsCount": 48,
    "description": "خدمة الملفات الثابتة بأمان، رفع الملفات والتحقق منها عبر Multer، محركات القوالب EJS، والتخزين السحابي (S3/Cloudinary)."
  },
  {
    "id": 16,
    "number": "16",
    "title": "القسم السادس عشر: HTTP المتقدم والتكامل مع المتصفح",
    "englishTitle": "Advanced HTTP & Browser Integration",
    "badge": "HTTP المتقدم",
    "color": "from-cyan-600 to-teal-600",
    "topicsCount": 4,
    "subtopicsCount": 33,
    "description": "إدارة الـ Cookies وSessions المتقدمة، سياسات التخزين المؤقت Cache-Control، ورؤوس Content Security Policy المتقدمة."
  },
  {
    "id": 17,
    "number": "17",
    "title": "القسم السابع عشر: الخدمات الخارجية وWebhooks",
    "englishTitle": "External Services, APIs & Webhooks",
    "badge": "الخدمات الخارجية",
    "color": "from-blue-600 to-indigo-700",
    "topicsCount": 6,
    "subtopicsCount": 51,
    "description": "إرسال طلبات HTTP الخارجية باستخدام Axios وFetch، معالجة واستقبال Webhooks بأمان والتحقق من التوقيعات الرقمية، وبوابات الدفع."
  },
  {
    "id": 18,
    "number": "18",
    "title": "القسم الثامن عشر: TypeScript مع Express.js",
    "englishTitle": "TypeScript with Express.js",
    "badge": "تايب سكريبت",
    "color": "from-blue-600 to-sky-500",
    "topicsCount": 5,
    "subtopicsCount": 40,
    "description": "بناء تطبيقات Express احترافية باستخدام TypeScript، إعداد tsconfig، كتابة وتوسيع الأنواع لكائنات Request وResponse."
  },
  {
    "id": 19,
    "number": "19",
    "title": "القسم التاسع عشر: اختبارات Express.js وتصحيح الأخطاء",
    "englishTitle": "Testing & Debugging Express.js",
    "badge": "الاختبارات والتنقيح",
    "color": "from-green-600 to-lime-600",
    "topicsCount": 7,
    "subtopicsCount": 54,
    "description": "كتابة اختبارات الوحدة والتكامل باستخدام Vitest/Jest وSupertest، محاكاة الخدمات، واختبار المسارات وتصحيح الأخطاء."
  },
  {
    "id": 20,
    "number": "20",
    "title": "القسم العشرون: توثيق APIs وGraphQL والتقنيات البديلة",
    "englishTitle": "API Documentation & Alternatives",
    "badge": "التوثيق وGraphQL",
    "color": "from-amber-600 to-orange-600",
    "topicsCount": 4,
    "subtopicsCount": 33,
    "description": "توثيق APIs عبر Swagger/OpenAPI وPostman، نظرة عملية على GraphQL والتكامل مع Apollo Server، ومقارنة tRPC وgRPC."
  },
  {
    "id": 21,
    "number": "21",
    "title": "القسم الحادي والعشرون: الوقت الحقيقي والمهام الخلفية",
    "englishTitle": "Real-time & Background Jobs",
    "badge": "الوقت الحقيقي والخلفي",
    "color": "from-purple-600 to-fuchsia-600",
    "topicsCount": 5,
    "subtopicsCount": 41,
    "description": "الاتصالات الحية ثنائية الاتجاه عبر Socket.IO، أحداث SSE، طوابير المهام الخلفية عبر BullMQ وRedis، والمهام المجدولة Cron."
  },
  {
    "id": 22,
    "number": "22",
    "title": "القسم الثاني والعشرون: تحسين الأداء والتخزين المؤقت والتوسع",
    "englishTitle": "Performance, Caching & Scaling",
    "badge": "الأداء والتوسع",
    "color": "from-emerald-600 to-cyan-600",
    "topicsCount": 6,
    "subtopicsCount": 48,
    "description": "التخزين المؤقت بواسطة Redis، ضغط البيانات Gzip/Brotli، تحسين استعلامات قواعد البيانات، وتعدد الأنوية عبر Node Cluster."
  },
  {
    "id": 23,
    "number": "23",
    "title": "القسم الثالث والعشرون: النشر وDocker وDevOps",
    "englishTitle": "Deployment, Docker & DevOps",
    "badge": "النشر والحاويات",
    "color": "from-sky-700 to-blue-800",
    "topicsCount": 7,
    "subtopicsCount": 60,
    "description": "حزم التطبيق داخل Docker Multi-stage Containers، النشر عبر النوافذ السحابية، إدارة البيئات، وسلاسل CI/CD المتكاملة."
  },
  {
    "id": 24,
    "number": "24",
    "title": "القسم الرابع والعشرون: Logging وMonitoring والموثوقية",
    "englishTitle": "Logging, Monitoring & Reliability",
    "badge": "المراقبة والموثوقية",
    "color": "from-rose-600 to-purple-600",
    "topicsCount": 5,
    "subtopicsCount": 40,
    "description": "التسجيل الهيكلي عبر Winston وPino، مقاييس Prometheus وGrafana، تتبع الأخطاء Sentry، والفحوصات الصحية Health Checks."
  },
  {
    "id": 25,
    "number": "25",
    "title": "القسم الخامس والعشرون: Express 5 والموضوعات المتقدمة",
    "englishTitle": "Express 5 & Advanced Patterns",
    "badge": "Express 5 المتقدم",
    "color": "from-amber-500 to-rose-600",
    "topicsCount": 6,
    "subtopicsCount": 52,
    "description": "أبرز ميزات وتغييرات Express 5، المعالجة التلقائية للوعود المرفوضة، ترقية المشروعات القديمة، وأنماط التصميم المعمارية المتقدمة."
  },
  {
    "id": 26,
    "number": "26",
    "title": "القسم السادس والعشرون: المشروعات التطبيقية المتدرجة",
    "englishTitle": "Comprehensive Capstone Projects",
    "badge": "المشاريع الشاملة",
    "color": "from-orange-600 to-red-600",
    "topicsCount": 10,
    "subtopicsCount": 144,
    "description": "10 مشاريع حقيقية متدرجة تبدأ من تطبيق ToDo بسيط حتى منصة تجارة إلكترونية وشبكة تواصل متكاملة جاهزة للإنتاج."
  },
  {
    "id": 27,
    "number": "27",
    "title": "القسم السابع والعشرون: الاستعداد للعمل كمطور Express.js محترف",
    "englishTitle": "Career & Interview Preparation",
    "badge": "الاحتراف وسوق العمل",
    "color": "from-yellow-500 to-amber-700",
    "topicsCount": 5,
    "subtopicsCount": 50,
    "description": "أهم الأسئلة التقنية لمقابلات Express.js، تصميم معمارية النظم System Design، بناء سيرة ذاتية ومعرض أعمال منافس، وأخلاقيات المهنة."
  }
];

export const TOTAL_SECTIONS = 27;
export const TOTAL_MAIN_TOPICS = 154;
export const TOTAL_SUBTOPICS = 1315;
