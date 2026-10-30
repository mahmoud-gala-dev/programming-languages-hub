// src/data/roadmapMeta.js
// بيانات الفهرس الشامل لخريطة طريق Node.js (23 قسماً تعليمياً متكاملاً)

export const ROADMAP_SECTIONS = [
  {
    id: 1,
    number: "01",
    title: "القسم الأول: أساسيات البرمجة وتطوير الويب",
    englishTitle: "Web Development Fundamentals",
    badge: "مبتدئ جداً",
    color: "from-blue-600 to-cyan-500",
    topicsCount: 4,
    description: "فهم بنية الويب، دور المتصفح والخادم، بروتوكولات الإنترنت (HTTP/HTTPS/TCP)، أساسيات واجهات البرمجة (APIs)، وأساسيات سطر الأوامر (Terminal)."
  },
  {
    id: 2,
    number: "02",
    title: "القسم الثاني: التعرف على Node.js وإعداد بيئة العمل",
    englishTitle: "Introduction to Node.js & Setup",
    badge: "مبتدئ",
    color: "from-emerald-600 to-green-500",
    topicsCount: 5,
    description: "فلسفة Node.js، محرك V8، تثبيت Node.js وإدارة الإصدارات عبر nvm، إعداد VS Code، إنشاء أول مشروع، ومقدمة في Git وGitHub."
  },
  {
    id: 3,
    number: "03",
    title: "القسم الثالث: أساسيات JavaScript اللازمة لتعلم Node.js",
    englishTitle: "JavaScript Core for Node.js",
    badge: "مبتدئ - متوسط",
    color: "from-amber-600 to-yellow-500",
    topicsCount: 7,
    description: "المتغيرات، أنواع البيانات، العمليات والشروط، الحلقات، الدوال والنطاق (Scope/Closures)، المصفوفات والكائنات، والمفاهيم المتوسطة (this, Classes, Prototypes)."
  },
  {
    id: 4,
    number: "04",
    title: "القسم الرابع: JavaScript غير المتزامنة وEvent Loop",
    englishTitle: "Asynchronous JavaScript & Event Loop",
    badge: "متوسط",
    color: "from-purple-600 to-indigo-500",
    topicsCount: 5,
    description: "فهم العمليات غير المتزامنة، Callbacks، وعود Promises، async/await، وتفاصيل محرك ومراحل Event Loop وMicrotasks في Node.js."
  },
  {
    id: 5,
    number: "05",
    title: "القسم الخامس: إدارة المشاريع والحزم والوحدات",
    englishTitle: "Packages, Modules & Project Management",
    badge: "متوسط",
    color: "from-red-600 to-rose-500",
    topicsCount: 5,
    description: "مدير الحزم npm وpackage.json، إدارة الإصدارات والاعتماديات، نظام الوحدات CommonJS وES Modules، وأدوات المطورين ونشر الحزم."
  },
  {
    id: 6,
    number: "06",
    title: "القسم السادس: الوحدات الأساسية في Node.js",
    englishTitle: "Node.js Core Modules",
    badge: "متوسط",
    color: "from-teal-600 to-emerald-500",
    topicsCount: 6,
    description: "استخدام node:os وnode:process، نظام المسارات node:path وnode:url، التعامل مع الملفات node:fs، معمارية الأحداث EventEmitter، والبيانات الثنائية Buffers وStreams."
  },
  {
    id: 7,
    number: "07",
    title: "القسم السابع: بناء خوادم HTTP باستخدام Node.js",
    englishTitle: "Building HTTP Servers with Node.js",
    badge: "متوسط",
    color: "from-sky-600 to-blue-500",
    topicsCount: 5,
    description: "إنشاء HTTP Server عبر node:http، معالجة Requests وResponses، إدارة المسارات Routing يدوياً، وبناء مشروع خادم منتجات متكامل بدون أطر عمل."
  },
  {
    id: 8,
    number: "08",
    title: "القسم الثامن: احتراف Express.js وبناء REST APIs",
    englishTitle: "Mastering Express.js & RESTful APIs",
    badge: "متوسط - متقدم",
    color: "from-slate-700 to-slate-900",
    topicsCount: 7,
    description: "إطار عمل Express.js، إدارة المسارات، منظومة الوسائط Middleware، تصميم REST APIs بمعايير احترافية، التحقق عبر Zod، ومعالجة الأخطاء والتوثيق عبر Swagger."
  },
  {
    id: 9,
    number: "09",
    title: "القسم التاسع: استخدام TypeScript مع Node.js",
    englishTitle: "TypeScript with Node.js",
    badge: "متوسط - متقدم",
    color: "from-blue-700 to-indigo-600",
    topicsCount: 5,
    description: "أساسيات الأنواع في TypeScript، Interfaces وGenerics، إعداد tsconfig.json، واستخدام TypeScript لبناء خوادم Express متينة خالية من أخطاء الأنواع."
  },
  {
    id: 10,
    number: "10",
    title: "القسم العاشر: قواعد البيانات العلائقية SQL",
    englishTitle: "Relational Databases & SQL",
    badge: "متقدم",
    color: "from-cyan-700 to-blue-600",
    topicsCount: 6,
    description: "قواعد البيانات، لغة SQL، ربط PostgreSQL عبر مكتبة pg وحوض الاتصالات Connection Pool، تصميم الجداول وERD، واستخدام Prisma ORM وDrizzle."
  },
  {
    id: 11,
    number: "11",
    title: "القسم الحادي عشر: قواعد بيانات NoSQL والتخزين المؤقت",
    englishTitle: "NoSQL Databases & Redis Caching",
    badge: "متقدم",
    color: "from-emerald-700 to-green-600",
    topicsCount: 5,
    description: "مفهوم NoSQL ومقارنتها بـ SQL، قواعد بيانات MongoDB، إطار Mongoose، واستخدام Redis للتخزين المؤقت وحماية الخوادم عبر Rate Limiting."
  },
  {
    id: 12,
    number: "12",
    title: "القسم الثاني عشر: المصادقة والتفويض وأمان التطبيقات",
    englishTitle: "Authentication, Authorization & Security",
    badge: "متقدم",
    color: "from-rose-700 to-red-600",
    topicsCount: 6,
    description: "أنظمة التسجيل والدخول، تشفير كلمات المرور بـ bcrypt/argon2، رموز JWT وإدارة Refresh Tokens، صلاحيات RBAC، وتسجيل الدخول عبر Google OAuth وحماية OWASP."
  },
  {
    id: 13,
    number: "13",
    title: "القسم الثالث عشر: رفع الملفات والتعامل مع Streams",
    englishTitle: "File Uploads, Streams & Cloud Storage",
    badge: "متقدم",
    color: "from-violet-700 to-purple-600",
    topicsCount: 4,
    description: "رفع الملفات عبر Multer، التدفقات المتقدمة Streams (Readable, Writable, Transform)، معالجة الصور عبر Sharp، ورفع وتخزين الملفات سحابياً عبر Amazon S3."
  },
  {
    id: 14,
    number: "14",
    title: "القسم الرابع عشر: هندسة تطبيقات Backend",
    englishTitle: "Backend Architecture & Clean Code",
    badge: "متقدم - خبير",
    color: "from-amber-700 to-orange-600",
    topicsCount: 6,
    description: "هيكلة المشاريع الكبرى، مبادئ SOLID وClean Code، أنماط التصميم (Repository, Factory, DI)، معمارية Clean Architecture، ومقدمة في الأنظمة الموزعة Microservices."
  },
  {
    id: 15,
    number: "15",
    title: "القسم الخامس عشر: الاختبارات وتصحيح الأخطاء وجودة الكود",
    englishTitle: "Testing, Debugging & Code Quality",
    badge: "متقدم",
    color: "from-fuchsia-700 to-pink-600",
    topicsCount: 6,
    description: "أنواع الاختبارات (Unit, Integration, E2E)، مشغل الاختبارات المدمج node:test، أداة Supertest لاختبار REST APIs، تصحيح الأخطاء عبر Breakpoints، وأدوات ESLint وCI."
  },
  {
    id: 16,
    number: "16",
    title: "القسم السادس عشر: تطبيقات الوقت الحقيقي والمهام الخلفية",
    englishTitle: "Real-Time WebSockets & Background Queues",
    badge: "متقدم - خبير",
    color: "from-emerald-800 to-teal-700",
    topicsCount: 5,
    description: "تقنيات الوقت الحقيقي (SSE, WebSockets)، مكتبة Socket.IO وإدارة الغرف، طوابير المهام الخلفية عبر BullMQ وRedis، والمهام المجدولة Cron Jobs."
  },
  {
    id: 17,
    number: "17",
    title: "القسم السابع عشر: تحسين الأداء والتوسع",
    englishTitle: "Performance Optimization & Scaling",
    badge: "خبير",
    color: "from-cyan-800 to-blue-700",
    topicsCount: 5,
    description: "فهم libuv ومحرك V8 والذاكرة، العمليات المتعددة عبر Worker Threads وCluster، كشف تسريبات الذاكرة، تحسين الاستعلامات، والتوسع الأفقي Horizontal Scaling."
  },
  {
    id: 18,
    number: "18",
    title: "القسم الثامن عشر: التكامل مع الخدمات الخارجية وواجهات API المتقدمة",
    englishTitle: "External Integrations, Webhooks & AI APIs",
    badge: "خبير",
    color: "from-indigo-800 to-purple-700",
    topicsCount: 5,
    description: "التعامل مع APIs الخارجية، استقبال ومعالجة Webhooks الآمنة، إرسال البريد عبر Nodemailer، مقدمة في GraphQL وgRPC، ودمج نماذج الذكاء الاصطناعي LLMs."
  },
  {
    id: 19,
    number: "19",
    title: "القسم التاسع عشر: Docker والنشر وDevOps",
    englishTitle: "Docker, Deployment & CI/CD",
    badge: "خبير",
    color: "from-sky-800 to-teal-700",
    topicsCount: 6,
    description: "أساسيات خوادم Linux وSSH، حاويات Docker وبناء صور خفيفة Multi-stage، إدارة الخدمات بـ Docker Compose، النشر على VPS مع Nginx، وخطوط أنابيب CI/CD."
  },
  {
    id: 20,
    number: "20",
    title: "القسم العشرون: مراقبة تطبيقات الإنتاج والموثوقية",
    englishTitle: "Production Monitoring & Reliability",
    badge: "خبير",
    color: "from-rose-800 to-red-700",
    topicsCount: 5,
    description: "تسجيل الأحداث المهيكل بـ Pino، المراقبة بـ Prometheus وGrafana وOpenTelemetry، تصميم أنظمة عالية الموثوقية (Circuit Breakers)، وخطط النسخ الاحتياطي وإدارة الحوادث."
  },
  {
    id: 21,
    number: "21",
    title: "القسم الحادي والعشرون: الموضوعات المتقدمة في Node.js",
    englishTitle: "Advanced Node.js Internals & Systems",
    badge: "خبير متمرس",
    color: "from-purple-900 to-indigo-800",
    topicsCount: 5,
    description: "الشبكات المنخفضة TCP/UDP عبر node:net، أدوات التشخيص المتقدمة AsyncLocalStorage وDiagnostic Channels، الإمكانات الحديثة، وهندسة الأنظمة واسعة النطاق (Event Sourcing, Saga)."
  },
  {
    id: 22,
    number: "22",
    title: "القسم الثاني والعشرون: المشروعات التطبيقية من المبتدئ إلى المحترف",
    englishTitle: "Applied Capstone Projects (Junior to Pro)",
    badge: "تطبيقي شامل",
    color: "from-emerald-700 to-cyan-600",
    topicsCount: 8,
    description: "8 مشروعات حقيقية متدرجة: تطبيق مهام JSON، خادم منتجات REST API، نظام مصادقة JWT، تطبيق محادثة فورية، متجر إلكتروني متكامل، منصة تعليمية LMS، نظام أتمتة، ومشروع نهائي Production-ready."
  },
  {
    id: 23,
    number: "23",
    title: "القسم الثالث والعشرون: الاستعداد لسوق العمل والاحتراف",
    englishTitle: "Career Readiness, Interviews & Portfolio",
    badge: "احتراف مهني",
    color: "from-yellow-700 to-amber-600",
    topicsCount: 5,
    description: "مهارات مهندس الـ Backend، أسئلة المقابلات التقنية الشائعة، حل الخوارزميات والتراكيب، بناء Portfolio قوي ومميز على GitHub، وخطة التطوير المهني المستمر."
  }
];
