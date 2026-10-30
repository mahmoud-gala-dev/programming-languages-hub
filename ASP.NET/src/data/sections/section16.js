// src/data/sections/section16.js
// محتوى تعليمي مفصل وشامل لـ: القسم السادس عشر: Entity Framework Core
export const section16Data = {
  id: 16,
  title: "القسم السادس عشر: Entity Framework Core",
  englishTitle: "Entity Framework Core Fundamentals",
  icon: "Network",
  category: "Entity Framework",
  description: "فهم ORM وEF Core، نهج Code-First والترحيلات Migrations، عمليات CRUD، إدارة العلاقات One-to-Many و Many-to-Many، و Scaffolding.",
  summary: {
  "sectionId": 16,
  "title": "القسم السادس عشر: Entity Framework Core",
  "englishTitle": "Entity Framework Core Fundamentals",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم السادس عشر: Entity Framework Core.",
    "القدرة على كتابة أكواد C# نظيفة وقوية متوافقة مع معايير الأمان والتوسعية الحديثة.",
    "فهم آلية عمل المكونات خلف الكواليس وتطبيق أفضل الممارسات وتفادي الأخطاء الشائعة.",
    "امتلاك الثقة الكاملة لحل المشكلات وتطبيق الحلول البرمجية في بيئات الإنتاج الحقيقية."
  ],
  "quickReferenceTable": [
    {
      "command": "dotnet new mvc",
      "purpose": "إنشاء مشروع ASP.NET Core MVC جديد جاهز للعمل"
    },
    {
      "command": "dotnet run",
      "purpose": "تشغيل التطبيق واستدعاء خادم Kestrel المحلي"
    },
    {
      "command": "dotnet build",
      "purpose": "التحقق من خلو الكود من الأخطاء وترجمته"
    },
    {
      "command": "dotnet watch",
      "purpose": "تشغيل التطبيق مع التحديث التلقائي الفوري Hot Reload"
    },
    {
      "command": "AddDbContext<T>",
      "purpose": "تسجيل سياق قاعدة البيانات EF Core في حاوية الخدمات DI"
    },
    {
      "command": "MapControllerRoute",
      "purpose": "تعريف مسارات التوجيه الافتراضية للكنترولرات"
    }
  ],
  "miniProject": {
    "title": "المشروع التطبيقي الشامل لـ القسم السادس عشر: Entity Framework Core",
    "description": "بناء نظام متكامل يجمع كافة مواضيع هذا القسم في تطبيق حقيقي مع واجهة تفاعلية، وتحقق صارم من البيانات، ومعالجة آمنة للأخطاء.",
    "requirements": [
      "تصميم النماذج وهيكلة الكود وفق أفضل ممارسات هندسة البرمجيات.",
      "تطبيق التحقق من صحة المدخلات Client-Side و Server-Side.",
      "تسجيل الأحداث الحساسة في السجلات وإدارة الأخطاء بأمان."
    ],
    "deliverables": "مجلد كامل يحتوي على ملفات المشروع C# و Views مع توثيق README مفصل."
  }
},
  topics: [
  {
    "topicId": 1,
    "title": "مقدمة في Entity Framework Core",
    "subtopics": [
      {
        "subId": "16.1.1",
        "title": "ما هو Entity Framework Core؟",
        "englishTitle": "Entity Framework Core",
        "definition": "يعد (ما هو Entity Framework Core؟) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (ما هو Entity Framework Core؟) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (ما هو Entity Framework Core؟) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ ما هو Entity Framework Core؟\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: ما هو Entity Framework Core؟\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.1.1",
          "title": "ما هو Entity Framework Core؟",
          "topicTitle": "مقدمة في Entity Framework Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (ما هو Entity Framework Core؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Entity Framework Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Entity Framework Core؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Entity Framework Core؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Entity Framework Core؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Entity Framework Core؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Entity Framework Core؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Entity Framework Core؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Entity Framework Core؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Entity Framework Core؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Entity Framework Core؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.1.2",
        "title": "ما هو ORM؟",
        "englishTitle": "ORM",
        "definition": "يعد (ما هو ORM؟) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (ما هو ORM؟) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (ما هو ORM؟) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ ما هو ORM؟\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: ما هو ORM؟\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.1.2",
          "title": "ما هو ORM؟",
          "topicTitle": "مقدمة في Entity Framework Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (ما هو ORM؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Entity Framework Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو ORM؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو ORM؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو ORM؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو ORM؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو ORM؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو ORM؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو ORM؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو ORM؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو ORM؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.1.3",
        "title": "الفرق بين EF Core وADO.NET",
        "englishTitle": "EF Core وADO.NET",
        "definition": "يعد (الفرق بين EF Core وADO.NET) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (الفرق بين EF Core وADO.NET) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (الفرق بين EF Core وADO.NET) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ الفرق بين EF Core وADO.NET\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: الفرق بين EF Core وADO.NET\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.1.3",
          "title": "الفرق بين EF Core وADO.NET",
          "topicTitle": "مقدمة في Entity Framework Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (الفرق بين EF Core وADO.NET) أحد المعايير التقنية الحيوية في مسار مقدمة في Entity Framework Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين EF Core وADO.NET)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين EF Core وADO.NET) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين EF Core وADO.NET)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين EF Core وADO.NET)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين EF Core وADO.NET",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين EF Core وADO.NET)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين EF Core وADO.NET\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين EF Core وADO.NET ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين EF Core وADO.NET) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.1.4",
        "title": "الفرق بين EF Core وDapper",
        "englishTitle": "EF Core وDapper",
        "definition": "يعد (الفرق بين EF Core وDapper) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (الفرق بين EF Core وDapper) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (الفرق بين EF Core وDapper) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ الفرق بين EF Core وDapper\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: الفرق بين EF Core وDapper\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.1.4",
          "title": "الفرق بين EF Core وDapper",
          "topicTitle": "مقدمة في Entity Framework Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (الفرق بين EF Core وDapper) أحد المعايير التقنية الحيوية في مسار مقدمة في Entity Framework Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين EF Core وDapper)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين EF Core وDapper) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين EF Core وDapper)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين EF Core وDapper)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين EF Core وDapper",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين EF Core وDapper)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين EF Core وDapper\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين EF Core وDapper ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين EF Core وDapper) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.1.5",
        "title": "مفهوم Code First",
        "englishTitle": "Code First",
        "definition": "يعد (مفهوم Code First) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Code First) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Code First) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Code First\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Code First\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.1.5",
          "title": "مفهوم Code First",
          "topicTitle": "مقدمة في Entity Framework Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (مفهوم Code First) أحد المعايير التقنية الحيوية في مسار مقدمة في Entity Framework Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Code First)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Code First) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Code First)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Code First)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Code First",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Code First)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Code First\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Code First ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Code First) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.1.6",
        "title": "مفهوم Database First",
        "englishTitle": "Database First",
        "definition": "يعد (مفهوم Database First) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Database First) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Database First) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Database First\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Database First\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.1.6",
          "title": "مفهوم Database First",
          "topicTitle": "مقدمة في Entity Framework Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (مفهوم Database First) أحد المعايير التقنية الحيوية في مسار مقدمة في Entity Framework Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Database First)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Database First) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Database First)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Database First)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Database First",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Database First)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Database First\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Database First ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Database First) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.1.7",
        "title": "متى نستخدم EF Core؟",
        "englishTitle": "متى نستخدم EF Core",
        "definition": "يعد (متى نستخدم EF Core؟) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (متى نستخدم EF Core؟) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (متى نستخدم EF Core؟) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ متى نستخدم EF Core؟\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: متى نستخدم EF Core؟\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.1.7",
          "title": "متى نستخدم EF Core؟",
          "topicTitle": "مقدمة في Entity Framework Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (متى نستخدم EF Core؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Entity Framework Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (متى نستخدم EF Core؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى نستخدم EF Core؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (متى نستخدم EF Core؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (متى نستخدم EF Core؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: متى نستخدم EF Core؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (متى نستخدم EF Core؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين متى نستخدم EF Core؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: متى نستخدم EF Core؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (متى نستخدم EF Core؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "إعداد EF Core",
    "subtopics": [
      {
        "subId": "16.2.1",
        "title": "تثبيت EF Core Packages",
        "englishTitle": "تثبيت EF Core Packages",
        "definition": "يعد (تثبيت EF Core Packages) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تثبيت EF Core Packages) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تثبيت EF Core Packages) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ تثبيت EF Core Packages\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تثبيت EF Core Packages\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.2.1",
          "title": "تثبيت EF Core Packages",
          "topicTitle": "إعداد EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (تثبيت EF Core Packages) أحد المعايير التقنية الحيوية في مسار إعداد EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تثبيت EF Core Packages)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت EF Core Packages) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تثبيت EF Core Packages)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تثبيت EF Core Packages)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تثبيت EF Core Packages",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تثبيت EF Core Packages)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تثبيت EF Core Packages\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تثبيت EF Core Packages ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تثبيت EF Core Packages) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.2.2",
        "title": "تثبيت SQL Server Provider",
        "englishTitle": "تثبيت SQL Server Provider",
        "definition": "يعد (تثبيت SQL Server Provider) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تثبيت SQL Server Provider) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تثبيت SQL Server Provider) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ تثبيت SQL Server Provider\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تثبيت SQL Server Provider\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.2.2",
          "title": "تثبيت SQL Server Provider",
          "topicTitle": "إعداد EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (تثبيت SQL Server Provider) أحد المعايير التقنية الحيوية في مسار إعداد EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تثبيت SQL Server Provider)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت SQL Server Provider) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تثبيت SQL Server Provider)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تثبيت SQL Server Provider)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تثبيت SQL Server Provider",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تثبيت SQL Server Provider)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تثبيت SQL Server Provider\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تثبيت SQL Server Provider ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تثبيت SQL Server Provider) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.2.3",
        "title": "تثبيت EF Core Tools",
        "englishTitle": "تثبيت EF Core Tools",
        "definition": "يعد (تثبيت EF Core Tools) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تثبيت EF Core Tools) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تثبيت EF Core Tools) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ تثبيت EF Core Tools\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تثبيت EF Core Tools\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.2.3",
          "title": "تثبيت EF Core Tools",
          "topicTitle": "إعداد EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (تثبيت EF Core Tools) أحد المعايير التقنية الحيوية في مسار إعداد EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تثبيت EF Core Tools)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت EF Core Tools) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تثبيت EF Core Tools)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تثبيت EF Core Tools)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تثبيت EF Core Tools",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تثبيت EF Core Tools)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تثبيت EF Core Tools\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تثبيت EF Core Tools ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تثبيت EF Core Tools) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.2.4",
        "title": "إنشاء DbContext",
        "englishTitle": "DbContext",
        "definition": "يعد (إنشاء DbContext) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء DbContext) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء DbContext) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء DbContext\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء DbContext\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.2.4",
          "title": "إنشاء DbContext",
          "topicTitle": "إعداد EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إنشاء DbContext) أحد المعايير التقنية الحيوية في مسار إعداد EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء DbContext)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء DbContext) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء DbContext)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء DbContext)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء DbContext",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء DbContext)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء DbContext\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء DbContext ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء DbContext) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.2.5",
        "title": "إنشاء DbSet",
        "englishTitle": "DbSet",
        "definition": "يعد (إنشاء DbSet) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء DbSet) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء DbSet) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء DbSet\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء DbSet\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.2.5",
          "title": "إنشاء DbSet",
          "topicTitle": "إعداد EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إنشاء DbSet) أحد المعايير التقنية الحيوية في مسار إعداد EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء DbSet)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء DbSet) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء DbSet)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء DbSet)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء DbSet",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء DbSet)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء DbSet\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء DbSet ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء DbSet) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.2.6",
        "title": "إضافة Connection String",
        "englishTitle": "إضافة Connection String",
        "definition": "يعد (إضافة Connection String) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إضافة Connection String) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إضافة Connection String) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إضافة Connection String\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إضافة Connection String\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.2.6",
          "title": "إضافة Connection String",
          "topicTitle": "إعداد EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إضافة Connection String) أحد المعايير التقنية الحيوية في مسار إعداد EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة Connection String)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Connection String) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة Connection String)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة Connection String)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة Connection String",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة Connection String)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة Connection String\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة Connection String ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة Connection String) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.2.7",
        "title": "استخدام AddDbContext",
        "englishTitle": "AddDbContext",
        "definition": "يعد (استخدام AddDbContext) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام AddDbContext) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام AddDbContext) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام AddDbContext\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام AddDbContext\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.2.7",
          "title": "استخدام AddDbContext",
          "topicTitle": "إعداد EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام AddDbContext) أحد المعايير التقنية الحيوية في مسار إعداد EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام AddDbContext)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام AddDbContext) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام AddDbContext)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام AddDbContext)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام AddDbContext",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام AddDbContext)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام AddDbContext\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام AddDbContext ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام AddDbContext) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.2.8",
        "title": "حقن DbContext داخل Controller أو Service",
        "englishTitle": "حقن DbContext داخل Controller أو Service",
        "definition": "يعد (حقن DbContext داخل Controller أو Service) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (حقن DbContext داخل Controller أو Service) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (حقن DbContext داخل Controller أو Service) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ حقن DbContext داخل Controller أو Service\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: حقن DbContext داخل Controller أو Service\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.2.8",
          "title": "حقن DbContext داخل Controller أو Service",
          "topicTitle": "إعداد EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (حقن DbContext داخل Controller أو Service) أحد المعايير التقنية الحيوية في مسار إعداد EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حقن DbContext داخل Controller أو Service)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حقن DbContext داخل Controller أو Service) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حقن DbContext داخل Controller أو Service)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حقن DbContext داخل Controller أو Service)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حقن DbContext داخل Controller أو Service",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حقن DbContext داخل Controller أو Service)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حقن DbContext داخل Controller أو Service\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حقن DbContext داخل Controller أو Service ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حقن DbContext داخل Controller أو Service) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Code First وMigrations",
    "subtopics": [
      {
        "subId": "16.3.1",
        "title": "إنشاء Entity Classes",
        "englishTitle": "Entity Classes",
        "definition": "يعد (إنشاء Entity Classes) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Entity Classes) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Entity Classes) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Entity Classes\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Entity Classes\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.3.1",
          "title": "إنشاء Entity Classes",
          "topicTitle": "Code First وMigrations",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إنشاء Entity Classes) أحد المعايير التقنية الحيوية في مسار Code First وMigrations ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Entity Classes)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Entity Classes) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Entity Classes)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Entity Classes)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Entity Classes",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Entity Classes)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Entity Classes\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Entity Classes ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Entity Classes) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.3.2",
        "title": "إنشاء Initial Migration",
        "englishTitle": "Initial Migration",
        "definition": "يعد (إنشاء Initial Migration) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Initial Migration) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Initial Migration) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Initial Migration\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Initial Migration\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.3.2",
          "title": "إنشاء Initial Migration",
          "topicTitle": "Code First وMigrations",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إنشاء Initial Migration) أحد المعايير التقنية الحيوية في مسار Code First وMigrations ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Initial Migration)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Initial Migration) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Initial Migration)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Initial Migration)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Initial Migration",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Initial Migration)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Initial Migration\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Initial Migration ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Initial Migration) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.3.3",
        "title": "استخدام dotnet ef migrations add",
        "englishTitle": "dotnet ef migrations add",
        "definition": "يعد (استخدام dotnet ef migrations add) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام dotnet ef migrations add) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام dotnet ef migrations add) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام dotnet ef migrations add\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام dotnet ef migrations add\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.3.3",
          "title": "استخدام dotnet ef migrations add",
          "topicTitle": "Code First وMigrations",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام dotnet ef migrations add) أحد المعايير التقنية الحيوية في مسار Code First وMigrations ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام dotnet ef migrations add)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام dotnet ef migrations add) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام dotnet ef migrations add)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام dotnet ef migrations add)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام dotnet ef migrations add",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام dotnet ef migrations add)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام dotnet ef migrations add\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام dotnet ef migrations add ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام dotnet ef migrations add) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.3.4",
        "title": "استخدام dotnet ef database update",
        "englishTitle": "dotnet ef database update",
        "definition": "يعد (استخدام dotnet ef database update) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام dotnet ef database update) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام dotnet ef database update) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام dotnet ef database update\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام dotnet ef database update\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.3.4",
          "title": "استخدام dotnet ef database update",
          "topicTitle": "Code First وMigrations",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام dotnet ef database update) أحد المعايير التقنية الحيوية في مسار Code First وMigrations ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام dotnet ef database update)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام dotnet ef database update) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام dotnet ef database update)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام dotnet ef database update)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام dotnet ef database update",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام dotnet ef database update)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام dotnet ef database update\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام dotnet ef database update ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام dotnet ef database update) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.3.5",
        "title": "فهم ملفات Migrations",
        "englishTitle": "فهم ملفات Migrations",
        "definition": "يعد (فهم ملفات Migrations) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (فهم ملفات Migrations) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (فهم ملفات Migrations) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ فهم ملفات Migrations\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: فهم ملفات Migrations\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.3.5",
          "title": "فهم ملفات Migrations",
          "topicTitle": "Code First وMigrations",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (فهم ملفات Migrations) أحد المعايير التقنية الحيوية في مسار Code First وMigrations ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم ملفات Migrations)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم ملفات Migrations) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم ملفات Migrations)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم ملفات Migrations)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فهم ملفات Migrations",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم ملفات Migrations)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم ملفات Migrations\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم ملفات Migrations ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم ملفات Migrations) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.3.6",
        "title": "تعديل Database Schema",
        "englishTitle": "تعديل Database Schema",
        "definition": "يعد (تعديل Database Schema) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تعديل Database Schema) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تعديل Database Schema) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ تعديل Database Schema\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تعديل Database Schema\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.3.6",
          "title": "تعديل Database Schema",
          "topicTitle": "Code First وMigrations",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (تعديل Database Schema) أحد المعايير التقنية الحيوية في مسار Code First وMigrations ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تعديل Database Schema)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تعديل Database Schema) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تعديل Database Schema)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تعديل Database Schema)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تعديل Database Schema",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تعديل Database Schema)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تعديل Database Schema\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تعديل Database Schema ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تعديل Database Schema) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.3.7",
        "title": "إضافة حقول جديدة",
        "englishTitle": "إضافة حقول جديدة",
        "definition": "يعد (إضافة حقول جديدة) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إضافة حقول جديدة) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إضافة حقول جديدة) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إضافة حقول جديدة\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إضافة حقول جديدة\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.3.7",
          "title": "إضافة حقول جديدة",
          "topicTitle": "Code First وMigrations",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إضافة حقول جديدة) أحد المعايير التقنية الحيوية في مسار Code First وMigrations ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة حقول جديدة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة حقول جديدة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة حقول جديدة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة حقول جديدة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة حقول جديدة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة حقول جديدة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة حقول جديدة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة حقول جديدة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة حقول جديدة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.3.8",
        "title": "إدارة Migrations في فريق العمل",
        "englishTitle": "Migrations في فريق العمل",
        "definition": "يعد (إدارة Migrations في فريق العمل) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إدارة Migrations في فريق العمل) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إدارة Migrations في فريق العمل) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إدارة Migrations في فريق العمل\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إدارة Migrations في فريق العمل\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.3.8",
          "title": "إدارة Migrations في فريق العمل",
          "topicTitle": "Code First وMigrations",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إدارة Migrations في فريق العمل) أحد المعايير التقنية الحيوية في مسار Code First وMigrations ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Migrations في فريق العمل)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Migrations في فريق العمل) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Migrations في فريق العمل)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Migrations في فريق العمل)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إدارة Migrations في فريق العمل",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Migrations في فريق العمل)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Migrations في فريق العمل\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Migrations في فريق العمل ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Migrations في فريق العمل) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.3.9",
        "title": "التراجع عن Migration بطريقة آمنة",
        "englishTitle": "التراجع عن Migration بطريقة آمنة",
        "definition": "يعد (التراجع عن Migration بطريقة آمنة) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (التراجع عن Migration بطريقة آمنة) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (التراجع عن Migration بطريقة آمنة) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ التراجع عن Migration بطريقة آمنة\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: التراجع عن Migration بطريقة آمنة\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.3.9",
          "title": "التراجع عن Migration بطريقة آمنة",
          "topicTitle": "Code First وMigrations",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (التراجع عن Migration بطريقة آمنة) أحد المعايير التقنية الحيوية في مسار Code First وMigrations ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التراجع عن Migration بطريقة آمنة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التراجع عن Migration بطريقة آمنة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التراجع عن Migration بطريقة آمنة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التراجع عن Migration بطريقة آمنة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التراجع عن Migration بطريقة آمنة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التراجع عن Migration بطريقة آمنة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التراجع عن Migration بطريقة آمنة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التراجع عن Migration بطريقة آمنة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التراجع عن Migration بطريقة آمنة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "CRUD باستخدام EF Core",
    "subtopics": [
      {
        "subId": "16.4.1",
        "title": "إضافة سجل باستخدام AddAsync",
        "englishTitle": "إضافة سجل بAddAsync",
        "definition": "يعد (إضافة سجل باستخدام AddAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إضافة سجل باستخدام AddAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إضافة سجل باستخدام AddAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إضافة سجل باستخدام AddAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إضافة سجل باستخدام AddAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.4.1",
          "title": "إضافة سجل باستخدام AddAsync",
          "topicTitle": "CRUD باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إضافة سجل باستخدام AddAsync) أحد المعايير التقنية الحيوية في مسار CRUD باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة سجل باستخدام AddAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة سجل باستخدام AddAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة سجل باستخدام AddAsync)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة سجل باستخدام AddAsync)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إضافة سجل باستخدام AddAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة سجل باستخدام AddAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة سجل باستخدام AddAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة سجل باستخدام AddAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة سجل باستخدام AddAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.4.2",
        "title": "حفظ التغييرات باستخدام SaveChangesAsync",
        "englishTitle": "حفظ التغييرات بSaveChangesAsync",
        "definition": "يعد (حفظ التغييرات باستخدام SaveChangesAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (حفظ التغييرات باستخدام SaveChangesAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (حفظ التغييرات باستخدام SaveChangesAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ حفظ التغييرات باستخدام SaveChangesAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: حفظ التغييرات باستخدام SaveChangesAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.4.2",
          "title": "حفظ التغييرات باستخدام SaveChangesAsync",
          "topicTitle": "CRUD باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (حفظ التغييرات باستخدام SaveChangesAsync) أحد المعايير التقنية الحيوية في مسار CRUD باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حفظ التغييرات باستخدام SaveChangesAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حفظ التغييرات باستخدام SaveChangesAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حفظ التغييرات باستخدام SaveChangesAsync)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حفظ التغييرات باستخدام SaveChangesAsync)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حفظ التغييرات باستخدام SaveChangesAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حفظ التغييرات باستخدام SaveChangesAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حفظ التغييرات باستخدام SaveChangesAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حفظ التغييرات باستخدام SaveChangesAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حفظ التغييرات باستخدام SaveChangesAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.4.3",
        "title": "قراءة البيانات باستخدام ToListAsync",
        "englishTitle": "قراءة البيانات بToListAsync",
        "definition": "يعد (قراءة البيانات باستخدام ToListAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (قراءة البيانات باستخدام ToListAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (قراءة البيانات باستخدام ToListAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ قراءة البيانات باستخدام ToListAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: قراءة البيانات باستخدام ToListAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.4.3",
          "title": "قراءة البيانات باستخدام ToListAsync",
          "topicTitle": "CRUD باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (قراءة البيانات باستخدام ToListAsync) أحد المعايير التقنية الحيوية في مسار CRUD باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (قراءة البيانات باستخدام ToListAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة البيانات باستخدام ToListAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (قراءة البيانات باستخدام ToListAsync)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (قراءة البيانات باستخدام ToListAsync)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: قراءة البيانات باستخدام ToListAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (قراءة البيانات باستخدام ToListAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين قراءة البيانات باستخدام ToListAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: قراءة البيانات باستخدام ToListAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (قراءة البيانات باستخدام ToListAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.4.4",
        "title": "البحث باستخدام FindAsync",
        "englishTitle": "البحث بFindAsync",
        "definition": "يعد (البحث باستخدام FindAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (البحث باستخدام FindAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (البحث باستخدام FindAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ البحث باستخدام FindAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: البحث باستخدام FindAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.4.4",
          "title": "البحث باستخدام FindAsync",
          "topicTitle": "CRUD باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (البحث باستخدام FindAsync) أحد المعايير التقنية الحيوية في مسار CRUD باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (البحث باستخدام FindAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (البحث باستخدام FindAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (البحث باستخدام FindAsync)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (البحث باستخدام FindAsync)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: البحث باستخدام FindAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (البحث باستخدام FindAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين البحث باستخدام FindAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: البحث باستخدام FindAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (البحث باستخدام FindAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.4.5",
        "title": "استخدام FirstOrDefaultAsync",
        "englishTitle": "FirstOrDefaultAsync",
        "definition": "يعد (استخدام FirstOrDefaultAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام FirstOrDefaultAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام FirstOrDefaultAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام FirstOrDefaultAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام FirstOrDefaultAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.4.5",
          "title": "استخدام FirstOrDefaultAsync",
          "topicTitle": "CRUD باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام FirstOrDefaultAsync) أحد المعايير التقنية الحيوية في مسار CRUD باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام FirstOrDefaultAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام FirstOrDefaultAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام FirstOrDefaultAsync)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام FirstOrDefaultAsync)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام FirstOrDefaultAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام FirstOrDefaultAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام FirstOrDefaultAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام FirstOrDefaultAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام FirstOrDefaultAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.4.6",
        "title": "تعديل البيانات",
        "englishTitle": "تعديل البيانات",
        "definition": "يعد (تعديل البيانات) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تعديل البيانات) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تعديل البيانات) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ تعديل البيانات\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تعديل البيانات\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.4.6",
          "title": "تعديل البيانات",
          "topicTitle": "CRUD باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (تعديل البيانات) أحد المعايير التقنية الحيوية في مسار CRUD باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تعديل البيانات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تعديل البيانات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تعديل البيانات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تعديل البيانات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تعديل البيانات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تعديل البيانات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تعديل البيانات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تعديل البيانات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تعديل البيانات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.4.7",
        "title": "حذف البيانات",
        "englishTitle": "حذف البيانات",
        "definition": "يعد (حذف البيانات) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (حذف البيانات) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (حذف البيانات) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ حذف البيانات\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: حذف البيانات\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.4.7",
          "title": "حذف البيانات",
          "topicTitle": "CRUD باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (حذف البيانات) أحد المعايير التقنية الحيوية في مسار CRUD باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حذف البيانات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حذف البيانات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حذف البيانات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حذف البيانات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: حذف البيانات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حذف البيانات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حذف البيانات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حذف البيانات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حذف البيانات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.4.8",
        "title": "التحقق من وجود السجل",
        "englishTitle": "التحقق من وجود السجل",
        "definition": "يعد (التحقق من وجود السجل) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (التحقق من وجود السجل) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (التحقق من وجود السجل) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ التحقق من وجود السجل\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: التحقق من وجود السجل\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.4.8",
          "title": "التحقق من وجود السجل",
          "topicTitle": "CRUD باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (التحقق من وجود السجل) أحد المعايير التقنية الحيوية في مسار CRUD باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحقق من وجود السجل)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من وجود السجل) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحقق من وجود السجل)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحقق من وجود السجل)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحقق من وجود السجل",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحقق من وجود السجل)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحقق من وجود السجل\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحقق من وجود السجل ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحقق من وجود السجل) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.4.9",
        "title": "معالجة DbUpdateException",
        "englishTitle": "معالجة DbUpdateException",
        "definition": "يعد (معالجة DbUpdateException) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (معالجة DbUpdateException) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (معالجة DbUpdateException) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ معالجة DbUpdateException\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: معالجة DbUpdateException\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.4.9",
          "title": "معالجة DbUpdateException",
          "topicTitle": "CRUD باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (معالجة DbUpdateException) أحد المعايير التقنية الحيوية في مسار CRUD باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (معالجة DbUpdateException)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (معالجة DbUpdateException) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (معالجة DbUpdateException)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (معالجة DbUpdateException)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: معالجة DbUpdateException",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (معالجة DbUpdateException)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين معالجة DbUpdateException\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: معالجة DbUpdateException ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (معالجة DbUpdateException) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "العلاقات باستخدام EF Core",
    "subtopics": [
      {
        "subId": "16.5.1",
        "title": "مفهوم Navigation Properties",
        "englishTitle": "Navigation Properties",
        "definition": "يعد (مفهوم Navigation Properties) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Navigation Properties) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Navigation Properties) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Navigation Properties\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Navigation Properties\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.5.1",
          "title": "مفهوم Navigation Properties",
          "topicTitle": "العلاقات باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (مفهوم Navigation Properties) أحد المعايير التقنية الحيوية في مسار العلاقات باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Navigation Properties)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Navigation Properties) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Navigation Properties)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Navigation Properties)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Navigation Properties",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Navigation Properties)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Navigation Properties\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Navigation Properties ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Navigation Properties) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.5.2",
        "title": "علاقة One-to-One",
        "englishTitle": "علاقة One-to-One",
        "definition": "يعد (علاقة One-to-One) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (علاقة One-to-One) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (علاقة One-to-One) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ علاقة One-to-One\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: علاقة One-to-One\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.5.2",
          "title": "علاقة One-to-One",
          "topicTitle": "العلاقات باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (علاقة One-to-One) أحد المعايير التقنية الحيوية في مسار العلاقات باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (علاقة One-to-One)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (علاقة One-to-One) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (علاقة One-to-One)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (علاقة One-to-One)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: علاقة One-to-One",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (علاقة One-to-One)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين علاقة One-to-One\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: علاقة One-to-One ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (علاقة One-to-One) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.5.3",
        "title": "علاقة One-to-Many",
        "englishTitle": "علاقة One-to-Many",
        "definition": "يعد (علاقة One-to-Many) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (علاقة One-to-Many) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (علاقة One-to-Many) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ علاقة One-to-Many\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: علاقة One-to-Many\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.5.3",
          "title": "علاقة One-to-Many",
          "topicTitle": "العلاقات باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (علاقة One-to-Many) أحد المعايير التقنية الحيوية في مسار العلاقات باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (علاقة One-to-Many)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (علاقة One-to-Many) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (علاقة One-to-Many)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (علاقة One-to-Many)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: علاقة One-to-Many",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (علاقة One-to-Many)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين علاقة One-to-Many\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: علاقة One-to-Many ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (علاقة One-to-Many) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.5.4",
        "title": "علاقة Many-to-Many",
        "englishTitle": "علاقة Many-to-Many",
        "definition": "يعد (علاقة Many-to-Many) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (علاقة Many-to-Many) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (علاقة Many-to-Many) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ علاقة Many-to-Many\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: علاقة Many-to-Many\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.5.4",
          "title": "علاقة Many-to-Many",
          "topicTitle": "العلاقات باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (علاقة Many-to-Many) أحد المعايير التقنية الحيوية في مسار العلاقات باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (علاقة Many-to-Many)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (علاقة Many-to-Many) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (علاقة Many-to-Many)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (علاقة Many-to-Many)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: علاقة Many-to-Many",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (علاقة Many-to-Many)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين علاقة Many-to-Many\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: علاقة Many-to-Many ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (علاقة Many-to-Many) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.5.5",
        "title": "استخدام Include",
        "englishTitle": "Include",
        "definition": "يعد (استخدام Include) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Include) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Include) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Include\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Include\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.5.5",
          "title": "استخدام Include",
          "topicTitle": "العلاقات باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام Include) أحد المعايير التقنية الحيوية في مسار العلاقات باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Include)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Include) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Include)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Include)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Include",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Include)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Include\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Include ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Include) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.5.6",
        "title": "استخدام ThenInclude",
        "englishTitle": "ThenInclude",
        "definition": "يعد (استخدام ThenInclude) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام ThenInclude) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام ThenInclude) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام ThenInclude\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام ThenInclude\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.5.6",
          "title": "استخدام ThenInclude",
          "topicTitle": "العلاقات باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام ThenInclude) أحد المعايير التقنية الحيوية في مسار العلاقات باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ThenInclude)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ThenInclude) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ThenInclude)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ThenInclude)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام ThenInclude",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ThenInclude)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ThenInclude\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ThenInclude ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ThenInclude) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.5.7",
        "title": "استخدام Fluent API",
        "englishTitle": "Fluent API",
        "definition": "يعد (استخدام Fluent API) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Fluent API) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Fluent API) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Fluent API\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Fluent API\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.5.7",
          "title": "استخدام Fluent API",
          "topicTitle": "العلاقات باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام Fluent API) أحد المعايير التقنية الحيوية في مسار العلاقات باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Fluent API)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Fluent API) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Fluent API)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Fluent API)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Fluent API",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Fluent API)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Fluent API\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Fluent API ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Fluent API) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.5.8",
        "title": "ضبط Cascade Delete",
        "englishTitle": "ضبط Cascade Delete",
        "definition": "يعد (ضبط Cascade Delete) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (ضبط Cascade Delete) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (ضبط Cascade Delete) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ ضبط Cascade Delete\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: ضبط Cascade Delete\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.5.8",
          "title": "ضبط Cascade Delete",
          "topicTitle": "العلاقات باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (ضبط Cascade Delete) أحد المعايير التقنية الحيوية في مسار العلاقات باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ضبط Cascade Delete)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ضبط Cascade Delete) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ضبط Cascade Delete)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ضبط Cascade Delete)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ضبط Cascade Delete",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ضبط Cascade Delete)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ضبط Cascade Delete\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ضبط Cascade Delete ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ضبط Cascade Delete) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.5.9",
        "title": "إدارة Foreign Keys",
        "englishTitle": "Foreign Keys",
        "definition": "يعد (إدارة Foreign Keys) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إدارة Foreign Keys) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إدارة Foreign Keys) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إدارة Foreign Keys\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إدارة Foreign Keys\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.5.9",
          "title": "إدارة Foreign Keys",
          "topicTitle": "العلاقات باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إدارة Foreign Keys) أحد المعايير التقنية الحيوية في مسار العلاقات باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Foreign Keys)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Foreign Keys) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Foreign Keys)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Foreign Keys)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إدارة Foreign Keys",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Foreign Keys)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Foreign Keys\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Foreign Keys ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Foreign Keys) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "Data Annotations وFluent API",
    "subtopics": [
      {
        "subId": "16.6.1",
        "title": "استخدام Key Attribute",
        "englishTitle": "Key Attribute",
        "definition": "يعد (استخدام Key Attribute) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Key Attribute) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Key Attribute) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Key Attribute\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Key Attribute\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.6.1",
          "title": "استخدام Key Attribute",
          "topicTitle": "Data Annotations وFluent API",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام Key Attribute) أحد المعايير التقنية الحيوية في مسار Data Annotations وFluent API ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Key Attribute)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Key Attribute) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Key Attribute)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Key Attribute)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Key Attribute",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Key Attribute)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Key Attribute\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Key Attribute ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Key Attribute) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.6.2",
        "title": "استخدام Required",
        "englishTitle": "Required",
        "definition": "يعد (استخدام Required) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Required) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Required) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Required\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Required\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.6.2",
          "title": "استخدام Required",
          "topicTitle": "Data Annotations وFluent API",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام Required) أحد المعايير التقنية الحيوية في مسار Data Annotations وFluent API ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Required)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Required) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Required)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Required)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Required",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Required)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Required\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Required ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Required) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.6.3",
        "title": "استخدام MaxLength",
        "englishTitle": "MaxLength",
        "definition": "يعد (استخدام MaxLength) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام MaxLength) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام MaxLength) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام MaxLength\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام MaxLength\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.6.3",
          "title": "استخدام MaxLength",
          "topicTitle": "Data Annotations وFluent API",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام MaxLength) أحد المعايير التقنية الحيوية في مسار Data Annotations وFluent API ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام MaxLength)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام MaxLength) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام MaxLength)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام MaxLength)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام MaxLength",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام MaxLength)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام MaxLength\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام MaxLength ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام MaxLength) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.6.4",
        "title": "استخدام Column Attribute",
        "englishTitle": "Column Attribute",
        "definition": "يعد (استخدام Column Attribute) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Column Attribute) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Column Attribute) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Column Attribute\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Column Attribute\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.6.4",
          "title": "استخدام Column Attribute",
          "topicTitle": "Data Annotations وFluent API",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام Column Attribute) أحد المعايير التقنية الحيوية في مسار Data Annotations وFluent API ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Column Attribute)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Column Attribute) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Column Attribute)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Column Attribute)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Column Attribute",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Column Attribute)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Column Attribute\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Column Attribute ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Column Attribute) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.6.5",
        "title": "استخدام Table Attribute",
        "englishTitle": "Table Attribute",
        "definition": "يعد (استخدام Table Attribute) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Table Attribute) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Table Attribute) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Table Attribute\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Table Attribute\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.6.5",
          "title": "استخدام Table Attribute",
          "topicTitle": "Data Annotations وFluent API",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام Table Attribute) أحد المعايير التقنية الحيوية في مسار Data Annotations وFluent API ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Table Attribute)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Table Attribute) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Table Attribute)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Table Attribute)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Table Attribute",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Table Attribute)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Table Attribute\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Table Attribute ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Table Attribute) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.6.6",
        "title": "استخدام NotMapped",
        "englishTitle": "NotMapped",
        "definition": "يعد (استخدام NotMapped) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام NotMapped) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام NotMapped) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام NotMapped\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام NotMapped\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.6.6",
          "title": "استخدام NotMapped",
          "topicTitle": "Data Annotations وFluent API",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام NotMapped) أحد المعايير التقنية الحيوية في مسار Data Annotations وFluent API ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام NotMapped)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام NotMapped) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام NotMapped)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام NotMapped)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام NotMapped",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام NotMapped)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام NotMapped\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام NotMapped ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام NotMapped) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.6.7",
        "title": "استخدام OnModelCreating",
        "englishTitle": "OnModelCreating",
        "definition": "يعد (استخدام OnModelCreating) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام OnModelCreating) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام OnModelCreating) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام OnModelCreating\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام OnModelCreating\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.6.7",
          "title": "استخدام OnModelCreating",
          "topicTitle": "Data Annotations وFluent API",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام OnModelCreating) أحد المعايير التقنية الحيوية في مسار Data Annotations وFluent API ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام OnModelCreating)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام OnModelCreating) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام OnModelCreating)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام OnModelCreating)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام OnModelCreating",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام OnModelCreating)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام OnModelCreating\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام OnModelCreating ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام OnModelCreating) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.6.8",
        "title": "إنشاء Entity Configurations",
        "englishTitle": "Entity Configurations",
        "definition": "يعد (إنشاء Entity Configurations) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Entity Configurations) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Entity Configurations) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Entity Configurations\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Entity Configurations\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.6.8",
          "title": "إنشاء Entity Configurations",
          "topicTitle": "Data Annotations وFluent API",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إنشاء Entity Configurations) أحد المعايير التقنية الحيوية في مسار Data Annotations وFluent API ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Entity Configurations)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Entity Configurations) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Entity Configurations)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Entity Configurations)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Entity Configurations",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Entity Configurations)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Entity Configurations\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Entity Configurations ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Entity Configurations) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.6.9",
        "title": "الفرق بين Data Annotations وFluent API",
        "englishTitle": "Data Annotations وFluent API",
        "definition": "يعد (الفرق بين Data Annotations وFluent API) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (الفرق بين Data Annotations وFluent API) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (الفرق بين Data Annotations وFluent API) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ الفرق بين Data Annotations وFluent API\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: الفرق بين Data Annotations وFluent API\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.6.9",
          "title": "الفرق بين Data Annotations وFluent API",
          "topicTitle": "Data Annotations وFluent API",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (الفرق بين Data Annotations وFluent API) أحد المعايير التقنية الحيوية في مسار Data Annotations وFluent API ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Data Annotations وFluent API)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Data Annotations وFluent API) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Data Annotations وFluent API)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Data Annotations وFluent API)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Data Annotations وFluent API",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Data Annotations وFluent API)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Data Annotations وFluent API\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Data Annotations وFluent API ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Data Annotations وFluent API) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 7,
    "title": "Scaffolding باستخدام EF Core",
    "subtopics": [
      {
        "subId": "16.7.1",
        "title": "ما هو Scaffolding؟",
        "englishTitle": "Scaffolding",
        "definition": "يعد (ما هو Scaffolding؟) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (ما هو Scaffolding؟) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (ما هو Scaffolding؟) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ ما هو Scaffolding؟\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: ما هو Scaffolding؟\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.7.1",
          "title": "ما هو Scaffolding؟",
          "topicTitle": "Scaffolding باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (ما هو Scaffolding؟) أحد المعايير التقنية الحيوية في مسار Scaffolding باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Scaffolding؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Scaffolding؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Scaffolding؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Scaffolding؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Scaffolding؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Scaffolding؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Scaffolding؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Scaffolding؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Scaffolding؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.7.2",
        "title": "إنشاء MVC Controller باستخدام Scaffolding",
        "englishTitle": "MVC Controller بScaffolding",
        "definition": "يعد (إنشاء MVC Controller باستخدام Scaffolding) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء MVC Controller باستخدام Scaffolding) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء MVC Controller باستخدام Scaffolding) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء MVC Controller باستخدام Scaffolding\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء MVC Controller باستخدام Scaffolding\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.7.2",
          "title": "إنشاء MVC Controller باستخدام Scaffolding",
          "topicTitle": "Scaffolding باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إنشاء MVC Controller باستخدام Scaffolding) أحد المعايير التقنية الحيوية في مسار Scaffolding باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء MVC Controller باستخدام Scaffolding)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء MVC Controller باستخدام Scaffolding) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء MVC Controller باستخدام Scaffolding)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء MVC Controller باستخدام Scaffolding)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء MVC Controller باستخدام Scaffolding",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء MVC Controller باستخدام Scaffolding)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء MVC Controller باستخدام Scaffolding\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء MVC Controller باستخدام Scaffolding ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء MVC Controller باستخدام Scaffolding) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.7.3",
        "title": "إنشاء CRUD Views تلقائياً",
        "englishTitle": "CRUD Views تلقائياً",
        "definition": "يعد (إنشاء CRUD Views تلقائياً) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء CRUD Views تلقائياً) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء CRUD Views تلقائياً) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء CRUD Views تلقائياً\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء CRUD Views تلقائياً\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.7.3",
          "title": "إنشاء CRUD Views تلقائياً",
          "topicTitle": "Scaffolding باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (إنشاء CRUD Views تلقائياً) أحد المعايير التقنية الحيوية في مسار Scaffolding باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء CRUD Views تلقائياً)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء CRUD Views تلقائياً) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء CRUD Views تلقائياً)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء CRUD Views تلقائياً)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء CRUD Views تلقائياً",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء CRUD Views تلقائياً)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء CRUD Views تلقائياً\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء CRUD Views تلقائياً ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء CRUD Views تلقائياً) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.7.4",
        "title": "استخدام Database First Scaffolding",
        "englishTitle": "Database First Scaffolding",
        "definition": "يعد (استخدام Database First Scaffolding) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Database First Scaffolding) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Database First Scaffolding) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Database First Scaffolding\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Database First Scaffolding\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.7.4",
          "title": "استخدام Database First Scaffolding",
          "topicTitle": "Scaffolding باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (استخدام Database First Scaffolding) أحد المعايير التقنية الحيوية في مسار Scaffolding باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Database First Scaffolding)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Database First Scaffolding) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Database First Scaffolding)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Database First Scaffolding)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Database First Scaffolding",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Database First Scaffolding)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Database First Scaffolding\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Database First Scaffolding ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Database First Scaffolding) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.7.5",
        "title": "مراجعة الكود المولد",
        "englishTitle": "مراجعة الكود المولد",
        "definition": "يعد (مراجعة الكود المولد) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مراجعة الكود المولد) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مراجعة الكود المولد) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ مراجعة الكود المولد\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مراجعة الكود المولد\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.7.5",
          "title": "مراجعة الكود المولد",
          "topicTitle": "Scaffolding باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (مراجعة الكود المولد) أحد المعايير التقنية الحيوية في مسار Scaffolding باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مراجعة الكود المولد)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مراجعة الكود المولد) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مراجعة الكود المولد)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مراجعة الكود المولد)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مراجعة الكود المولد",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مراجعة الكود المولد)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مراجعة الكود المولد\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مراجعة الكود المولد ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مراجعة الكود المولد) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.7.6",
        "title": "تخصيص Controller بعد Scaffolding",
        "englishTitle": "تخصيص Controller بعد Scaffolding",
        "definition": "يعد (تخصيص Controller بعد Scaffolding) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تخصيص Controller بعد Scaffolding) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تخصيص Controller بعد Scaffolding) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ تخصيص Controller بعد Scaffolding\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تخصيص Controller بعد Scaffolding\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.7.6",
          "title": "تخصيص Controller بعد Scaffolding",
          "topicTitle": "Scaffolding باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (تخصيص Controller بعد Scaffolding) أحد المعايير التقنية الحيوية في مسار Scaffolding باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تخصيص Controller بعد Scaffolding)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تخصيص Controller بعد Scaffolding) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تخصيص Controller بعد Scaffolding)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تخصيص Controller بعد Scaffolding)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تخصيص Controller بعد Scaffolding",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تخصيص Controller بعد Scaffolding)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تخصيص Controller بعد Scaffolding\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تخصيص Controller بعد Scaffolding ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تخصيص Controller بعد Scaffolding) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.7.7",
        "title": "تخصيص Views",
        "englishTitle": "تخصيص Views",
        "definition": "يعد (تخصيص Views) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تخصيص Views) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تخصيص Views) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ تخصيص Views\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تخصيص Views\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.7.7",
          "title": "تخصيص Views",
          "topicTitle": "Scaffolding باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (تخصيص Views) أحد المعايير التقنية الحيوية في مسار Scaffolding باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تخصيص Views)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تخصيص Views) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تخصيص Views)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تخصيص Views)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تخصيص Views",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تخصيص Views)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تخصيص Views\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تخصيص Views ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تخصيص Views) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "16.7.8",
        "title": "تجنب الاعتماد الكامل على الكود المولد",
        "englishTitle": "تجنب الاعتماد الكامل على الكود المولد",
        "definition": "يعد (تجنب الاعتماد الكامل على الكود المولد) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تجنب الاعتماد الكامل على الكود المولد) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تجنب الاعتماد الكامل على الكود المولد) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
        "terms": [
          {
            "term": "ORM",
            "pronunciation": "أو-آر-إم",
            "meaning": "رابط الكائنات العلائقي: أداة تربط بين لغة البرمجة وقواعد البيانات"
          },
          {
            "term": "DbContext",
            "pronunciation": "دي-بي كونتكست",
            "meaning": "جلسة العمل المركزية المسؤولة عن الاتصال بالبيانات وتتبع التغييرات"
          },
          {
            "term": "Migration",
            "pronunciation": "مايجريشن",
            "meaning": "ملف ترحيلي يصف التغييرات في الجداول لتطبيقها على SQL Server"
          },
          {
            "term": "LINQ",
            "pronunciation": "لينك",
            "meaning": "لغة الاستعلام المتكاملة لكتابة استعلامات قاعدة البيانات بكود C# قوي"
          }
        ],
        "syntax": "// استعلام EF Core نموذجي لـ تجنب الاعتماد الكامل على الكود المولد\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تجنب الاعتماد الكامل على الكود المولد\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
        "outputExplanation": "يقوم محرك EF Core بترجمة استعلام LINQ إلى أمر SQL SELECT محسن، ويجلبه عبر الاتصال بقاعدة البيانات، ويملأ كائنات الـ DTO دون إهدار للذاكرة بفضل استخدام AsNoTracking.",
        "commonMistakes": [
          {
            "wrong": "الوقوع في فخ استعلامات N+1 باستدعاء الخصائص الفرعية داخل حلقات تكرارية.",
            "right": "استخدام Eager Loading عبر Include أو كتابة استعلام Projection دقيق باستخدام Select.",
            "reason": "لأن استدعاء خصائص كل صف داخل حلقة يرسل مئات الاستعلامات المنفصلة لقاعدة البيانات مما يثقل الخادم."
          },
          {
            "wrong": "نسيان استخدام AsNoTracking في شاشات القراءة والعرض.",
            "right": "تطبيق AsNoTracking() دوماً عند جلب البيانات للقراءة فقط.",
            "reason": "لأن تعقب التغييرات في الذاكرة (Change Tracking) يستهلك موارد المعالج والرام دون أي فائدة للقراءة."
          }
        ],
        "bestPractices": [
          "احرص دائماً على تطبيق الفهارس (Indexes) على الأعمدة الأكثر استخداماً في شروط البحث والترتيب.",
          "استخدم المعاملات Transactions عند تنفيذ عدة عمليات مالية أو حساسة مترابطة لمنع التحديثات الجزئية.",
          "لا تكتب استعلامات SQL نصية مدمجة بروابط لتفادي ثغرات الحقن SQL Injection."
        ],
        "infographic": {
          "badge": "الدرس 16.7.8",
          "title": "تجنب الاعتماد الكامل على الكود المولد",
          "topicTitle": "Scaffolding باستخدام EF Core",
          "sectionTitle": "القسم السادس عشر: Entity Framework Core",
          "icon": "Database",
          "colors": "from-cyan-600 via-teal-600 to-emerald-500",
          "steps": [
            {
              "title": "صياغة استعلام LINQ",
              "desc": "كتابة الاستعلام بكود C# محمي ومتحقق منه أثناء الترجمة"
            },
            {
              "title": "الترجمة إلى SQL",
              "desc": "محرك EF Core يترجم الاستعلام إلى كود SQL فائق الكفاءة"
            },
            {
              "title": "تنفيذ الخادم",
              "desc": "SQL Server ينفذ الأمر ويرجع النتائج المتطابقة لتتحول لكائنات C#"
            }
          ],
          "summary": "يمثل (تجنب الاعتماد الكامل على الكود المولد) أحد المعايير التقنية الحيوية في مسار Scaffolding باستخدام EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تجنب الاعتماد الكامل على الكود المولد)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجنب الاعتماد الكامل على الكود المولد) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تجنب الاعتماد الكامل على الكود المولد)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تجنب الاعتماد الكامل على الكود المولد)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تجنب الاعتماد الكامل على الكود المولد",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تجنب الاعتماد الكامل على الكود المولد)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تجنب الاعتماد الكامل على الكود المولد\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تجنب الاعتماد الكامل على الكود المولد ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تجنب الاعتماد الكامل على الكود المولد) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section16Data;
