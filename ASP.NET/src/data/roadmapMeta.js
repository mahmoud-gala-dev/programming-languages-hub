// src/data/roadmapMeta.js
// بيانات وصفية لخريطة طريق ASP.NET Core MVC الكاملة
export const ROADMAP_TITLE = "خريطة الطريق الشاملة لتعلم ASP.NET Core MVC من الصفر إلى الاحتراف";
export const ROADMAP_ENGLISH_TITLE = "Complete ASP.NET Core MVC Roadmap from Zero to Hero";
export const TOTAL_SECTIONS = 33;
export const TOTAL_TOPICS = 206;
export const TOTAL_SUBTOPICS = 1803;

export const CATEGORIES = [
  "الكل",
  "الأساسيات",
  "لغة C#",
  "بيئة .NET",
  "ASP.NET Core MVC",
  "قواعد البيانات",
  "Entity Framework",
  "معمارية .NET",
  "الأمان والمصادقة",
  "إدارة الموارد",
  "تطوير APIs",
  "الواجهات المتقدمة",
  "الاختبارات والجودة",
  "الأداء والتطوير المتقدم",
  "التطبيقات الفورية",
  "المعمارية المتقدمة",
  "النشر والعمليات",
  "المشاريع العملية",
  "سوق العمل والاحتراف"
];

export const SECTIONS_META = [
  {
    "id": 1,
    "title": "القسم الأول: أساسيات البرمجة وتطوير الويب",
    "englishTitle": "Programming Fundamentals & Web Development",
    "icon": "Globe",
    "category": "الأساسيات",
    "description": "فهم أسس البرمجة، الإنترنت، معمارية العميل والخادم، بروتوكول HTTP، أدوات المطورين، وبناء صفحات الويب الأولية.",
    "topicsCount": 6,
    "subtopicsCount": 49
  },
  {
    "id": 2,
    "title": "القسم الثاني: أساسيات لغة C#",
    "englishTitle": "C# Programming Fundamentals",
    "icon": "Code2",
    "category": "لغة C#",
    "description": "إتقان قواعد لغة C#، المتغيرات، أنواع البيانات، الجمل الشرطية، الحلقات التكرارية، الدوال، والمصفوفات.",
    "topicsCount": 8,
    "subtopicsCount": 67
  },
  {
    "id": 3,
    "title": "القسم الثالث: البرمجة كائنية التوجه OOP باستخدام C#",
    "englishTitle": "Object-Oriented Programming (OOP) in C#",
    "icon": "Boxes",
    "category": "لغة C#",
    "description": "فهم الكائنات والفئات، التغليف، الوراثة، تعدد الأشكال، التجريد، الواجهات، ومبادئ SOLID الهندسية.",
    "topicsCount": 7,
    "subtopicsCount": 56
  },
  {
    "id": 4,
    "title": "القسم الرابع: مفاهيم C# المتقدمة اللازمة لتطوير الويب",
    "englishTitle": "Advanced C# Concepts for Web Developers",
    "icon": "Cpu",
    "category": "لغة C#",
    "description": "إدارة الاستثناءات، Generics، Delegates، تعبيرات Lambda، استعلامات LINQ، البرمجة غير المتزامنة Async/Await، ومعالجة JSON.",
    "topicsCount": 7,
    "subtopicsCount": 60
  },
  {
    "id": 5,
    "title": "القسم الخامس: التعرف على منصة .NET وإعداد البيئة",
    "englishTitle": ".NET Platform & Environment Setup",
    "icon": "Layers",
    "category": "بيئة .NET",
    "description": "فهم بنية .NET وCLR، ميزات ASP.NET Core، إعداد Visual Studio وVS Code، وأوامر dotnet CLI وإدارة الحزم NuGet.",
    "topicsCount": 5,
    "subtopicsCount": 42
  },
  {
    "id": 6,
    "title": "القسم السادس: مقدمة في ASP.NET Core MVC وبناء أول مشروع",
    "englishTitle": "Introduction to ASP.NET Core MVC & First Project",
    "icon": "LayoutGrid",
    "category": "ASP.NET Core MVC",
    "description": "فهم نمط MVC، مقارنة تقنيات ASP.NET، بناء وتشغيل أول تطبيق MVC، وفهم بنية المجلدات وملف Program.cs.",
    "topicsCount": 6,
    "subtopicsCount": 47
  },
  {
    "id": 7,
    "title": "القسم السابع: Controllers وActions وAction Results",
    "englishTitle": "Controllers, Actions & Action Results",
    "icon": "Sliders",
    "category": "ASP.NET Core MVC",
    "description": "بناء وحدات التحكم Controllers، توجيه الإجراءات Actions، أنواع نتائج الإرجاع Action Results، وتمرير البيانات للواجهات.",
    "topicsCount": 6,
    "subtopicsCount": 48
  },
  {
    "id": 8,
    "title": "القسم الثامن: Routing في ASP.NET Core MVC",
    "englishTitle": "Routing & URL Management",
    "icon": "Compass",
    "category": "ASP.NET Core MVC",
    "description": "إتقان Conventional Routing وAttribute Routing، قيود المسارات Route Constraints، وتوليد الروابط الصديقة لمحركات البحث SEO.",
    "topicsCount": 6,
    "subtopicsCount": 45
  },
  {
    "id": 9,
    "title": "القسم التاسع: Middleware وHTTP Request Pipeline",
    "englishTitle": "Middleware & Request Pipeline",
    "icon": "GitBranch",
    "category": "ASP.NET Core MVC",
    "description": "فهم خط سير معالجة الطلبات، إنشاء برمجيات وسيطة مخصصة Custom Middleware، إدارة الترتيب والأمان.",
    "topicsCount": 5,
    "subtopicsCount": 38
  },
  {
    "id": 10,
    "title": "القسم العاشر: Models وModel Binding",
    "englishTitle": "Models & Model Binding",
    "icon": "Database",
    "category": "ASP.NET Core MVC",
    "description": "بناء النماذج Models، ربط البيانات القادمة من الروابط والنماذج والـ Headers، استخدام ViewModels وDTOs ومنع الـ Overposting.",
    "topicsCount": 5,
    "subtopicsCount": 40
  },
  {
    "id": 11,
    "title": "القسم الحادي عشر: Data Annotations وModel Validation",
    "englishTitle": "Data Annotations & Model Validation",
    "icon": "CheckSquare",
    "category": "ASP.NET Core MVC",
    "description": "التحقق من صحة المدخلات على جهتي العميل والخادم، وسوم Data Annotations، وقواعد التحقق المخصصة Custom Validation.",
    "topicsCount": 5,
    "subtopicsCount": 40
  },
  {
    "id": 12,
    "title": "القسم الثاني عشر: Razor View Engine",
    "englishTitle": "Razor View Engine",
    "icon": "FileCode",
    "category": "ASP.NET Core MVC",
    "description": "بناء الواجهات التفاعلية باستخدام محرك Razor، قواعد بناء الشفرات @، العرض الموجه Strongly Typed، وإدارة ViewData وTempData.",
    "topicsCount": 6,
    "subtopicsCount": 46
  },
  {
    "id": 13,
    "title": "القسم الثالث عشر: Layouts وPartial Views وTag Helpers",
    "englishTitle": "Layouts, Partial Views & Tag Helpers",
    "icon": "LayoutTemplate",
    "category": "ASP.NET Core MVC",
    "description": "تصميم القوالب العامة Layouts، إعادة استخدام أجزاء الواجهة Partial Views، استخدام Tag Helpers وبناء View Components المخصصة.",
    "topicsCount": 6,
    "subtopicsCount": 48
  },
  {
    "id": 14,
    "title": "القسم الرابع عشر: Forms وCRUD وواجهة المستخدم",
    "englishTitle": "Forms, CRUD Operations & UI Integration",
    "icon": "Table2",
    "category": "ASP.NET Core MVC",
    "description": "بناء النماذج، تنفيذ عمليات الإضافة والتعديل والحذف CRUD، نمط Post-Redirect-Get، دمج Bootstrap والـ AJAX والبحث والترقيم Pagination.",
    "topicsCount": 6,
    "subtopicsCount": 52
  },
  {
    "id": 15,
    "title": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
    "englishTitle": "SQL Server & Database Design",
    "icon": "Database",
    "category": "قواعد البيانات",
    "description": "مبادئ قواعد البيانات العلائقية، تثبيت SQL Server وSSMS، أوامر SQL، تصميم مخططات ERD، والتطبيع Normalization ومبادئ ACID.",
    "topicsCount": 5,
    "subtopicsCount": 45
  },
  {
    "id": 16,
    "title": "القسم السادس عشر: Entity Framework Core",
    "englishTitle": "Entity Framework Core Fundamentals",
    "icon": "Network",
    "category": "Entity Framework",
    "description": "فهم ORM وEF Core، نهج Code-First والترحيلات Migrations، عمليات CRUD، إدارة العلاقات One-to-Many و Many-to-Many، و Scaffolding.",
    "topicsCount": 7,
    "subtopicsCount": 59
  },
  {
    "id": 17,
    "title": "القسم السابع عشر: Entity Framework Core المتقدم",
    "englishTitle": "Advanced Entity Framework Core",
    "icon": "Zap",
    "category": "Entity Framework",
    "description": "تحسين الأداء باستخدام AsNoTracking، تجنب استعلامات N+1، المعاملات Transactions، التزامن المتفائل Optimistic Concurrency، والحذف المرن Soft Delete.",
    "topicsCount": 6,
    "subtopicsCount": 51
  },
  {
    "id": 18,
    "title": "القسم الثامن عشر: Dependency Injection وServices وConfiguration",
    "englishTitle": "Dependency Injection, Services & Configuration",
    "icon": "Share2",
    "category": "معمارية .NET",
    "description": "حقن التبعيات DI، فترات حياة الخدمات Lifetimes (Transient, Scoped, Singleton)، طبقة الخدمات ومستودع البيانات، ونظام الإعدادات والـ Logging.",
    "topicsCount": 6,
    "subtopicsCount": 49
  },
  {
    "id": 19,
    "title": "القسم التاسع عشر: Authentication باستخدام ASP.NET Core Identity",
    "englishTitle": "Authentication with ASP.NET Core Identity",
    "icon": "KeyRound",
    "category": "الأمان والمصادقة",
    "description": "بناء أنظمة المصادقة وتسجيل الدخول والخروج، ملفات تعريف المستخدمين، تأكيد البريد، إعادة تعيين كلمة المرور، والمصادقة الخارجية 2FA و OAuth.",
    "topicsCount": 7,
    "subtopicsCount": 56
  },
  {
    "id": 20,
    "title": "القسم العشرون: Authorization وإدارة الأدوار والصلاحيات",
    "englishTitle": "Authorization, Roles & Permission Management",
    "icon": "ShieldCheck",
    "category": "الأمان والمصادقة",
    "description": "إدارة الصلاحيات عبر الأدوار RBAC، الصلاحيات القائمة على الادعاءات Claims، سياسات الأمان المخصصة Policies، وحماية لوحة التحكم.",
    "topicsCount": 6,
    "subtopicsCount": 46
  },
  {
    "id": 21,
    "title": "القسم الحادي والعشرون: أمن ASP.NET Core MVC",
    "englishTitle": "Web Security & OWASP Top 10",
    "icon": "Lock",
    "category": "الأمان والمصادقة",
    "description": "الحماية من ثغرات XSS، CSRF، حقن SQL، Overposting، إعداد ترويسات الأمان Security Headers، إدارة الأسرار وRate Limiting.",
    "topicsCount": 7,
    "subtopicsCount": 56
  },
  {
    "id": 22,
    "title": "القسم الثاني والعشرون: إدارة الحالة والملفات والبريد الإلكتروني",
    "englishTitle": "State Management, File Handling & Email",
    "icon": "FileSpreadsheet",
    "category": "إدارة الموارد",
    "description": "إدارة الجلسات Sessions و Cookies، رفع وتحميل وتصدير الملفات (CSV, Excel, PDF)، خدمات إرسال البريد MailKit والتخزين السحابي Blob.",
    "topicsCount": 6,
    "subtopicsCount": 50
  },
  {
    "id": 23,
    "title": "القسم الثالث والعشرون: Areas وFilters وتنظيم التطبيقات الكبيرة",
    "englishTitle": "Areas, MVC Filters & Application Architecture",
    "icon": "FolderTree",
    "category": "معمارية .NET",
    "description": "تقسيم التطبيق إلى مناطق Areas (لوحة التحكم، العملاء)، استخدام مرشحات MVC Filters (Action, Exception, Resource)، والنمط النمطي Modular.",
    "topicsCount": 5,
    "subtopicsCount": 40
  },
  {
    "id": 24,
    "title": "القسم الرابع والعشرون: Web APIs والتكامل مع الأنظمة الخارجية",
    "englishTitle": "Web APIs & External Integrations",
    "icon": "Webhook",
    "category": "تطوير APIs",
    "description": "بناء واجهات RESTful APIs، مصادقة JWT، توثيق OpenAPI/Swagger، استهلاك الخدمات بـ HttpClient، واستقبال Webhooks و gRPC.",
    "topicsCount": 8,
    "subtopicsCount": 68
  },
  {
    "id": 25,
    "title": "القسم الخامس والعشرون: Localization وواجهات المستخدم المتقدمة",
    "englishTitle": "Localization, RTL & Modern UI Integration",
    "icon": "Languages",
    "category": "الواجهات المتقدمة",
    "description": "دعم اللغات المتعددة، ملفات الموارد Resx، اتجاه RTL/LTR، معايير إمكانية الوصول WCAG، تهيئة محركات البحث SEO، ودمج Tailwind وReact.",
    "topicsCount": 5,
    "subtopicsCount": 40
  },
  {
    "id": 26,
    "title": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
    "englishTitle": "Software Testing, Debugging & Code Quality",
    "icon": "Bug",
    "category": "الاختبارات والجودة",
    "description": "اختبارات الوحدة xUnit، تقنيات المحاكاة Moq، اختبارات التكامل WebApplicationFactory، اختبارات الواجهة Playwright، وأدوات التنقيح والتحليل.",
    "topicsCount": 7,
    "subtopicsCount": 60
  },
  {
    "id": 27,
    "title": "القسم السابع والعشرون: الأداء والتخزين المؤقت والمهام الخلفية",
    "englishTitle": "Performance, Caching & Background Services",
    "icon": "Gauge",
    "category": "الأداء والتطوير المتقدم",
    "description": "التخزين المؤقت MemoryCache و Redis، التخزين المؤقت للمخرجات Output Caching، المهام الخلفية BackgroundService وجدولة المهام بـ Hangfire.",
    "topicsCount": 7,
    "subtopicsCount": 59
  },
  {
    "id": 28,
    "title": "القسم الثامن والعشرون: SignalR والتطبيقات الفورية",
    "englishTitle": "SignalR & Real-Time Communication",
    "icon": "Radio",
    "category": "التطبيقات الفورية",
    "description": "الاتصال اللحظي بتقنية WebSockets، بناء SignalR Hubs، إرسال واستقبال الرسائل، وإدارة المجموعات وبناء نظام إشعارات فورية متزامن.",
    "topicsCount": 4,
    "subtopicsCount": 31
  },
  {
    "id": 29,
    "title": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
    "englishTitle": "Software Architecture & Enterprise Design",
    "icon": "Network",
    "category": "المعمارية المتقدمة",
    "description": "العمارة النظيفة Clean Architecture، التصميم الموجه بالمجال DDD، أنماط التصميم Design Patterns، نمط CQRS مع MediatR، والأنظمة متعددة المستأجرين Multi-Tenant.",
    "topicsCount": 8,
    "subtopicsCount": 71
  },
  {
    "id": 30,
    "title": "القسم الثلاثون: Docker والنشر وDevOps",
    "englishTitle": "Docker, Deployment & CI/CD",
    "icon": "Container",
    "category": "النشر والعمليات",
    "description": "حاويات Docker، إعداد Compose لمشروع MVC مع SQL Server و Redis، النشر على خوادم IIS و Linux/Nginx، وخطوط أنابيب GitHub Actions CI/CD.",
    "topicsCount": 7,
    "subtopicsCount": 68
  },
  {
    "id": 31,
    "title": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
    "englishTitle": "Monitoring, Observability & Site Reliability",
    "icon": "Activity",
    "category": "النشر والعمليات",
    "description": "مراقبة التطبيقات في بيئات الإنتاج، المقاييس والسجلات والتتبع (Logs, Metrics, Traces)، تقنيات OpenTelemetry و Application Insights وخطط التعافي من الكوارث.",
    "topicsCount": 5,
    "subtopicsCount": 40
  },
  {
    "id": 32,
    "title": "القسم الثاني والثلاثون: المشروعات العملية من المبتدئ إلى المحترف",
    "englishTitle": "Practical Real-World Projects (Beginner to Pro)",
    "icon": "Rocket",
    "category": "المشاريع العملية",
    "description": "9 مشاريع حقيقية متدرجة الصعوبة: موقع تعريفي، نظام طلاب، إدارة مخزون، نظام صلاحيات، مدونة CMS، متجر إلكتروني، منصة تعليمية LMS، نظام ERP، ومشروع التخرج النهائي المتكامل.",
    "topicsCount": 9,
    "subtopicsCount": 160
  },
  {
    "id": 33,
    "title": "القسم الثالث والثلاثون: الاستعداد لسوق العمل والاحتراف",
    "englishTitle": "Career Preparation & Interview Mastery",
    "icon": "Briefcase",
    "category": "سوق العمل والاحتراف",
    "description": "مراجعة شاملة لأسئلة المقابلات التقنية في C# و ASP.NET Core MVC و EF Core، تصميم الأنظمة System Design، وبناء معرض أعمال Portfolio يجذب مسؤولي التوظيف.",
    "topicsCount": 7,
    "subtopicsCount": 76
  }
];
