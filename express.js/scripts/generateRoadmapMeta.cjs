const fs = require('fs');
const path = require('path');

const roadmap = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'roadmapRaw.json'), 'utf8'));

const metaInfo = [
  {
    englishTitle: "Prerequisites for Express.js",
    badge: "المتطلبات الأساسية",
    color: "from-blue-600 to-cyan-500",
    desc: "المفاهيم التأسيسية لتطوير الويب، بروتوكول HTTP، أساسيات JavaScript الحديثة غير المتزامنة، مقدمة في Node.js وREST APIs."
  },
  {
    englishTitle: "Introduction to Express.js & Setup",
    badge: "البداية والإعداد",
    color: "from-amber-500 to-yellow-600",
    desc: "فلسفة ومميزات Express.js، مقارنتها مع أطر العمل الأخرى، إعداد البيئة وتثبيت Express 5، وإنشاء أول خادم ويب."
  },
  {
    englishTitle: "Request & Response Deep Dive",
    badge: "الأساسيات الجوهرية",
    color: "from-emerald-600 to-teal-500",
    desc: "تشريح كائن الطلب req وكائن الاستجابة res، معالجة المسارات والمدخلات والترويسات وحالات HTTP وتدفقات Streams."
  },
  {
    englishTitle: "Mastering Routing in Express.js",
    badge: "التوجيه والمسارات",
    color: "from-orange-500 to-amber-600",
    desc: "إنشاء مسارات ديناميكية، استخدام express.Router()، تنظيم المسارات الهرمية، والتعبيرات النمطية وحماية المسارات."
  },
  {
    englishTitle: "Middleware Mastery",
    badge: "البرمجيات الوسيطة",
    color: "from-purple-600 to-indigo-500",
    desc: "فهم دورة حياة Middleware، الوسائط المدمجة ومكتبات الطرف الثالث، وبناء وسائط مخصصة للتوثيق والتحقق والأداء."
  },
  {
    englishTitle: "Error Handling Architecture",
    badge: "معالجة الأخطاء",
    color: "from-rose-600 to-red-500",
    desc: "بناء فئات أخطاء مخصصة Custom Errors، وسيط الأخطاء العام، التعامل مع الأخطاء غير المتزامنة في Express 5، والمراقبة."
  },
  {
    englishTitle: "Building Professional RESTful APIs",
    badge: "بناء REST APIs",
    color: "from-indigo-600 to-blue-500",
    desc: "مبادئ بنية REST، تصميم Endpoints قياسية، التصفح والفرز والبحث (Pagination, Sorting, Filtering)، وإصدارات API."
  },
  {
    englishTitle: "Validation & Sanitization",
    badge: "التحقق والتعقيم",
    color: "from-teal-600 to-emerald-500",
    desc: "حماية الخادم والبيانات باستخدام Zod وJoi وexpress-validator، تعقيم المدخلات، وتوحيد رسائل أخطاء التحقق للمستخدم."
  },
  {
    englishTitle: "Project Architecture & Clean Code",
    badge: "الهيكلة النظيفة",
    color: "from-sky-600 to-blue-600",
    desc: "تنظيم المشروعات الكبيرة وفق نمط Controller-Service-Repository، فصل المسؤوليات، وإدارة المتغيرات البيئية بأمان."
  },
  {
    englishTitle: "SQL Databases with Express.js",
    badge: "قواعد بيانات SQL",
    color: "from-blue-700 to-indigo-600",
    desc: "ربط Express بقواعد PostgreSQL وMySQL وSQLite، إدارة الاتصالات عبر Connection Pools، واستخدام Prisma وSequelize."
  },
  {
    englishTitle: "MongoDB & Mongoose with Express",
    badge: "قواعد NoSQL",
    color: "from-green-600 to-emerald-600",
    desc: "ربط MongoDB مع Express، تعريف المخططات والنماذج عبر Mongoose، الاستعلامات والعلاقات وخطوط أنابيب التجميع Aggregation."
  },
  {
    englishTitle: "Authentication & User Management",
    badge: "المصادقة والأمان",
    color: "from-violet-600 to-purple-600",
    desc: "تسجيل الدخول، تشفير كلمات المرور باستخدام Bcrypt/Argon2، المصادقة عبر JWT وSession Cookies، وتأمين التوكنات وتجديدها."
  },
  {
    englishTitle: "Authorization & Role-Based Access Control",
    badge: "إدارة الصلاحيات",
    color: "from-fuchsia-600 to-pink-600",
    desc: "التحكم في الوصول حسب الأدوار (RBAC)، التحكم القائم على السمات (ABAC)، مكتبات CASL، وحماية المسارات الحساسة."
  },
  {
    englishTitle: "Express.js Security & Hardening",
    badge: "الحماية والأمان",
    color: "from-red-600 to-rose-700",
    desc: "تأمين الخادم باستخدام Helmet وCORS ومحدد المعدل Rate Limiting، والوقاية من هجمات XSS وCSRF وحقن SQL وNoSQL."
  },
  {
    englishTitle: "Static Files, Templates & Uploads",
    badge: "الملفات والقوالب",
    color: "from-yellow-600 to-amber-600",
    desc: "خدمة الملفات الثابتة بأمان، رفع الملفات والتحقق منها عبر Multer، محركات القوالب EJS، والتخزين السحابي (S3/Cloudinary)."
  },
  {
    englishTitle: "Advanced HTTP & Browser Integration",
    badge: "HTTP المتقدم",
    color: "from-cyan-600 to-teal-600",
    desc: "إدارة الـ Cookies وSessions المتقدمة، سياسات التخزين المؤقت Cache-Control، ورؤوس Content Security Policy المتقدمة."
  },
  {
    englishTitle: "External Services, APIs & Webhooks",
    badge: "الخدمات الخارجية",
    color: "from-blue-600 to-indigo-700",
    desc: "إرسال طلبات HTTP الخارجية باستخدام Axios وFetch، معالجة واستقبال Webhooks بأمان والتحقق من التوقيعات الرقمية، وبوابات الدفع."
  },
  {
    englishTitle: "TypeScript with Express.js",
    badge: "تايب سكريبت",
    color: "from-blue-600 to-sky-500",
    desc: "بناء تطبيقات Express احترافية باستخدام TypeScript، إعداد tsconfig، كتابة وتوسيع الأنواع لكائنات Request وResponse."
  },
  {
    englishTitle: "Testing & Debugging Express.js",
    badge: "الاختبارات والتنقيح",
    color: "from-green-600 to-lime-600",
    desc: "كتابة اختبارات الوحدة والتكامل باستخدام Vitest/Jest وSupertest، محاكاة الخدمات، واختبار المسارات وتصحيح الأخطاء."
  },
  {
    englishTitle: "API Documentation & Alternatives",
    badge: "التوثيق وGraphQL",
    color: "from-amber-600 to-orange-600",
    desc: "توثيق APIs عبر Swagger/OpenAPI وPostman، نظرة عملية على GraphQL والتكامل مع Apollo Server، ومقارنة tRPC وgRPC."
  },
  {
    englishTitle: "Real-time & Background Jobs",
    badge: "الوقت الحقيقي والخلفي",
    color: "from-purple-600 to-fuchsia-600",
    desc: "الاتصالات الحية ثنائية الاتجاه عبر Socket.IO، أحداث SSE، طوابير المهام الخلفية عبر BullMQ وRedis، والمهام المجدولة Cron."
  },
  {
    englishTitle: "Performance, Caching & Scaling",
    badge: "الأداء والتوسع",
    color: "from-emerald-600 to-cyan-600",
    desc: "التخزين المؤقت بواسطة Redis، ضغط البيانات Gzip/Brotli، تحسين استعلامات قواعد البيانات، وتعدد الأنوية عبر Node Cluster."
  },
  {
    englishTitle: "Deployment, Docker & DevOps",
    badge: "النشر والحاويات",
    color: "from-sky-700 to-blue-800",
    desc: "حزم التطبيق داخل Docker Multi-stage Containers، النشر عبر النوافذ السحابية، إدارة البيئات، وسلاسل CI/CD المتكاملة."
  },
  {
    englishTitle: "Logging, Monitoring & Reliability",
    badge: "المراقبة والموثوقية",
    color: "from-rose-600 to-purple-600",
    desc: "التسجيل الهيكلي عبر Winston وPino، مقاييس Prometheus وGrafana، تتبع الأخطاء Sentry، والفحوصات الصحية Health Checks."
  },
  {
    englishTitle: "Express 5 & Advanced Patterns",
    badge: "Express 5 المتقدم",
    color: "from-amber-500 to-rose-600",
    desc: "أبرز ميزات وتغييرات Express 5، المعالجة التلقائية للوعود المرفوضة، ترقية المشروعات القديمة، وأنماط التصميم المعمارية المتقدمة."
  },
  {
    englishTitle: "Comprehensive Capstone Projects",
    badge: "المشاريع الشاملة",
    color: "from-orange-600 to-red-600",
    desc: "10 مشاريع حقيقية متدرجة تبدأ من تطبيق ToDo بسيط حتى منصة تجارة إلكترونية وشبكة تواصل متكاملة جاهزة للإنتاج."
  },
  {
    englishTitle: "Career & Interview Preparation",
    badge: "الاحتراف وسوق العمل",
    color: "from-yellow-500 to-amber-700",
    desc: "أهم الأسئلة التقنية لمقابلات Express.js، تصميم معمارية النظم System Design، بناء سيرة ذاتية ومعرض أعمال منافس، وأخلاقيات المهنة."
  }
];

const sectionsExport = roadmap.map((sec, idx) => {
  const meta = metaInfo[idx] || {
    englishTitle: `Section ${sec.id}`,
    badge: "متقدم",
    color: "from-amber-600 to-orange-500",
    desc: sec.title
  };

  const subCount = sec.mainTopics.reduce((acc, t) => acc + t.subtopics.length, 0);

  return {
    id: sec.id,
    number: String(sec.id).padStart(2, '0'),
    title: sec.title,
    englishTitle: meta.englishTitle,
    badge: meta.badge,
    color: meta.color,
    topicsCount: sec.mainTopics.length,
    subtopicsCount: subCount,
    description: meta.desc
  };
});

const content = `// src/data/roadmapMeta.js
// بيانات الفهرس الشامل لخريطة طريق Express.js (27 قسماً تعليمياً متكاملاً)

export const ROADMAP_SECTIONS = ${JSON.stringify(sectionsExport, null, 2)};

export const TOTAL_SECTIONS = 27;
export const TOTAL_MAIN_TOPICS = 154;
export const TOTAL_SUBTOPICS = 1315;
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'roadmapMeta.js'), content, 'utf8');
console.log('Successfully created src/data/roadmapMeta.js');
