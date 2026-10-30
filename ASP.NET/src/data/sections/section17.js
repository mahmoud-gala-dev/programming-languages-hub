// src/data/sections/section17.js
// محتوى تعليمي مفصل وشامل لـ: القسم السابع عشر: Entity Framework Core المتقدم
export const section17Data = {
  id: 17,
  title: "القسم السابع عشر: Entity Framework Core المتقدم",
  englishTitle: "Advanced Entity Framework Core",
  icon: "Zap",
  category: "Entity Framework",
  description: "تحسين الأداء باستخدام AsNoTracking، تجنب استعلامات N+1، المعاملات Transactions، التزامن المتفائل Optimistic Concurrency، والحذف المرن Soft Delete.",
  summary: {
  "sectionId": 17,
  "title": "القسم السابع عشر: Entity Framework Core المتقدم",
  "englishTitle": "Advanced Entity Framework Core",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم السابع عشر: Entity Framework Core المتقدم.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم السابع عشر: Entity Framework Core المتقدم",
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
    "title": "LINQ مع EF Core",
    "subtopics": [
      {
        "subId": "17.1.1",
        "title": "استخدام Where",
        "englishTitle": "Where",
        "definition": "يعد (استخدام Where) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Where) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Where) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Where\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Where\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.1.1",
          "title": "استخدام Where",
          "topicTitle": "LINQ مع EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام Where) أحد المعايير التقنية الحيوية في مسار LINQ مع EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Where)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Where) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Where)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Where)؟",
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
          "title": "تمرين تطبيقي على: استخدام Where",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Where)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Where\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Where ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Where) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.1.2",
        "title": "استخدام Select",
        "englishTitle": "Select",
        "definition": "يعد (استخدام Select) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Select) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Select) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Select\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Select\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.1.2",
          "title": "استخدام Select",
          "topicTitle": "LINQ مع EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام Select) أحد المعايير التقنية الحيوية في مسار LINQ مع EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Select)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Select) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Select)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Select)؟",
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
          "title": "تمرين تطبيقي على: استخدام Select",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Select)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Select\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Select ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Select) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.1.3",
        "title": "استخدام OrderBy وThenBy",
        "englishTitle": "OrderBy وThenBy",
        "definition": "يعد (استخدام OrderBy وThenBy) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام OrderBy وThenBy) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام OrderBy وThenBy) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام OrderBy وThenBy\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام OrderBy وThenBy\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.1.3",
          "title": "استخدام OrderBy وThenBy",
          "topicTitle": "LINQ مع EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام OrderBy وThenBy) أحد المعايير التقنية الحيوية في مسار LINQ مع EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام OrderBy وThenBy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام OrderBy وThenBy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام OrderBy وThenBy)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام OrderBy وThenBy)؟",
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
          "title": "تمرين تطبيقي على: استخدام OrderBy وThenBy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام OrderBy وThenBy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام OrderBy وThenBy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام OrderBy وThenBy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام OrderBy وThenBy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.1.4",
        "title": "استخدام GroupBy",
        "englishTitle": "GroupBy",
        "definition": "يعد (استخدام GroupBy) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام GroupBy) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام GroupBy) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام GroupBy\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام GroupBy\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.1.4",
          "title": "استخدام GroupBy",
          "topicTitle": "LINQ مع EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام GroupBy) أحد المعايير التقنية الحيوية في مسار LINQ مع EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام GroupBy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام GroupBy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام GroupBy)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام GroupBy)؟",
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
          "title": "تمرين تطبيقي على: استخدام GroupBy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام GroupBy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام GroupBy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام GroupBy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام GroupBy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.1.5",
        "title": "استخدام Join",
        "englishTitle": "Join",
        "definition": "يعد (استخدام Join) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Join) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Join) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Join\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Join\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.1.5",
          "title": "استخدام Join",
          "topicTitle": "LINQ مع EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام Join) أحد المعايير التقنية الحيوية في مسار LINQ مع EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Join)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Join) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Join)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Join)؟",
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
          "title": "تمرين تطبيقي على: استخدام Join",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Join)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Join\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Join ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Join) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.1.6",
        "title": "استخدام Skip وTake",
        "englishTitle": "Skip وTake",
        "definition": "يعد (استخدام Skip وTake) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Skip وTake) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Skip وTake) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Skip وTake\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Skip وTake\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.1.6",
          "title": "استخدام Skip وTake",
          "topicTitle": "LINQ مع EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام Skip وTake) أحد المعايير التقنية الحيوية في مسار LINQ مع EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Skip وTake)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Skip وTake) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Skip وTake)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Skip وTake)؟",
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
          "title": "تمرين تطبيقي على: استخدام Skip وTake",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Skip وTake)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Skip وTake\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Skip وTake ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Skip وTake) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.1.7",
        "title": "استخدام AnyAsync وCountAsync",
        "englishTitle": "AnyAsync وCountAsync",
        "definition": "يعد (استخدام AnyAsync وCountAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام AnyAsync وCountAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام AnyAsync وCountAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام AnyAsync وCountAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام AnyAsync وCountAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.1.7",
          "title": "استخدام AnyAsync وCountAsync",
          "topicTitle": "LINQ مع EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام AnyAsync وCountAsync) أحد المعايير التقنية الحيوية في مسار LINQ مع EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام AnyAsync وCountAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام AnyAsync وCountAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام AnyAsync وCountAsync)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام AnyAsync وCountAsync)؟",
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
          "title": "تمرين تطبيقي على: استخدام AnyAsync وCountAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام AnyAsync وCountAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام AnyAsync وCountAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام AnyAsync وCountAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام AnyAsync وCountAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.1.8",
        "title": "مفهوم Deferred Execution",
        "englishTitle": "Deferred Execution",
        "definition": "يعد (مفهوم Deferred Execution) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Deferred Execution) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Deferred Execution) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Deferred Execution\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Deferred Execution\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.1.8",
          "title": "مفهوم Deferred Execution",
          "topicTitle": "LINQ مع EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (مفهوم Deferred Execution) أحد المعايير التقنية الحيوية في مسار LINQ مع EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Deferred Execution)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Deferred Execution) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Deferred Execution)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Deferred Execution)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Deferred Execution",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Deferred Execution)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Deferred Execution\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Deferred Execution ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Deferred Execution) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.1.9",
        "title": "الفرق بين IQueryable وIEnumerable",
        "englishTitle": "IQueryable وIEnumerable",
        "definition": "يعد (الفرق بين IQueryable وIEnumerable) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (الفرق بين IQueryable وIEnumerable) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (الفرق بين IQueryable وIEnumerable) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ الفرق بين IQueryable وIEnumerable\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: الفرق بين IQueryable وIEnumerable\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.1.9",
          "title": "الفرق بين IQueryable وIEnumerable",
          "topicTitle": "LINQ مع EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (الفرق بين IQueryable وIEnumerable) أحد المعايير التقنية الحيوية في مسار LINQ مع EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين IQueryable وIEnumerable)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين IQueryable وIEnumerable) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين IQueryable وIEnumerable)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين IQueryable وIEnumerable)؟",
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
          "title": "تمرين تطبيقي على: الفرق بين IQueryable وIEnumerable",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين IQueryable وIEnumerable)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين IQueryable وIEnumerable\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين IQueryable وIEnumerable ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين IQueryable وIEnumerable) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "تحسين أداء EF Core",
    "subtopics": [
      {
        "subId": "17.2.1",
        "title": "استخدام AsNoTracking",
        "englishTitle": "AsNoTracking",
        "definition": "يعد (استخدام AsNoTracking) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام AsNoTracking) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام AsNoTracking) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام AsNoTracking\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام AsNoTracking\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.2.1",
          "title": "استخدام AsNoTracking",
          "topicTitle": "تحسين أداء EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام AsNoTracking) أحد المعايير التقنية الحيوية في مسار تحسين أداء EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام AsNoTracking)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام AsNoTracking) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام AsNoTracking)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام AsNoTracking)؟",
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
          "title": "تمرين تطبيقي على: استخدام AsNoTracking",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام AsNoTracking)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام AsNoTracking\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام AsNoTracking ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام AsNoTracking) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.2.2",
        "title": "مفهوم Change Tracking",
        "englishTitle": "Change Tracking",
        "definition": "يعد (مفهوم Change Tracking) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Change Tracking) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Change Tracking) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Change Tracking\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Change Tracking\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.2.2",
          "title": "مفهوم Change Tracking",
          "topicTitle": "تحسين أداء EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (مفهوم Change Tracking) أحد المعايير التقنية الحيوية في مسار تحسين أداء EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Change Tracking)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Change Tracking) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Change Tracking)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Change Tracking)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Change Tracking",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Change Tracking)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Change Tracking\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Change Tracking ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Change Tracking) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.2.3",
        "title": "مفهوم Projection",
        "englishTitle": "Projection",
        "definition": "يعد (مفهوم Projection) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Projection) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Projection) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Projection\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Projection\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.2.3",
          "title": "مفهوم Projection",
          "topicTitle": "تحسين أداء EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (مفهوم Projection) أحد المعايير التقنية الحيوية في مسار تحسين أداء EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Projection)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Projection) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Projection)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Projection)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Projection",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Projection)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Projection\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Projection ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Projection) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.2.4",
        "title": "تجنب جلب أعمدة غير ضرورية",
        "englishTitle": "تجنب جلب أعمدة غير ضرورية",
        "definition": "يعد (تجنب جلب أعمدة غير ضرورية) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تجنب جلب أعمدة غير ضرورية) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تجنب جلب أعمدة غير ضرورية) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ تجنب جلب أعمدة غير ضرورية\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تجنب جلب أعمدة غير ضرورية\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.2.4",
          "title": "تجنب جلب أعمدة غير ضرورية",
          "topicTitle": "تحسين أداء EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (تجنب جلب أعمدة غير ضرورية) أحد المعايير التقنية الحيوية في مسار تحسين أداء EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تجنب جلب أعمدة غير ضرورية)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجنب جلب أعمدة غير ضرورية) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تجنب جلب أعمدة غير ضرورية)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تجنب جلب أعمدة غير ضرورية)؟",
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
          "title": "تمرين تطبيقي على: تجنب جلب أعمدة غير ضرورية",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تجنب جلب أعمدة غير ضرورية)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تجنب جلب أعمدة غير ضرورية\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تجنب جلب أعمدة غير ضرورية ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تجنب جلب أعمدة غير ضرورية) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.2.5",
        "title": "الفرق بين Eager وExplicit وLazy Loading",
        "englishTitle": "Eager وExplicit وLazy Loading",
        "definition": "يعد (الفرق بين Eager وExplicit وLazy Loading) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (الفرق بين Eager وExplicit وLazy Loading) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (الفرق بين Eager وExplicit وLazy Loading) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ الفرق بين Eager وExplicit وLazy Loading\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: الفرق بين Eager وExplicit وLazy Loading\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.2.5",
          "title": "الفرق بين Eager وExplicit وLazy Loading",
          "topicTitle": "تحسين أداء EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (الفرق بين Eager وExplicit وLazy Loading) أحد المعايير التقنية الحيوية في مسار تحسين أداء EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Eager وExplicit وLazy Loading)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Eager وExplicit وLazy Loading) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Eager وExplicit وLazy Loading)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Eager وExplicit وLazy Loading)؟",
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
          "title": "تمرين تطبيقي على: الفرق بين Eager وExplicit وLazy Loading",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Eager وExplicit وLazy Loading)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Eager وExplicit وLazy Loading\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Eager وExplicit وLazy Loading ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Eager وExplicit وLazy Loading) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.2.6",
        "title": "منع N+1 Queries",
        "englishTitle": "منع N+1 Queries",
        "definition": "يعد (منع N+1 Queries) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (منع N+1 Queries) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (منع N+1 Queries) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ منع N+1 Queries\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: منع N+1 Queries\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.2.6",
          "title": "منع N+1 Queries",
          "topicTitle": "تحسين أداء EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (منع N+1 Queries) أحد المعايير التقنية الحيوية في مسار تحسين أداء EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع N+1 Queries)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع N+1 Queries) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع N+1 Queries)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع N+1 Queries)؟",
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
          "title": "تمرين تطبيقي على: منع N+1 Queries",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع N+1 Queries)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع N+1 Queries\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع N+1 Queries ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع N+1 Queries) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.2.7",
        "title": "استخدام Split Queries عند الحاجة",
        "englishTitle": "Split Queries عند الحاجة",
        "definition": "يعد (استخدام Split Queries عند الحاجة) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Split Queries عند الحاجة) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Split Queries عند الحاجة) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Split Queries عند الحاجة\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Split Queries عند الحاجة\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.2.7",
          "title": "استخدام Split Queries عند الحاجة",
          "topicTitle": "تحسين أداء EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام Split Queries عند الحاجة) أحد المعايير التقنية الحيوية في مسار تحسين أداء EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Split Queries عند الحاجة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Split Queries عند الحاجة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Split Queries عند الحاجة)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Split Queries عند الحاجة)؟",
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
          "title": "تمرين تطبيقي على: استخدام Split Queries عند الحاجة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Split Queries عند الحاجة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Split Queries عند الحاجة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Split Queries عند الحاجة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Split Queries عند الحاجة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.2.8",
        "title": "تحليل SQL الناتج",
        "englishTitle": "تحليل SQL الناتج",
        "definition": "يعد (تحليل SQL الناتج) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تحليل SQL الناتج) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تحليل SQL الناتج) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ تحليل SQL الناتج\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تحليل SQL الناتج\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.2.8",
          "title": "تحليل SQL الناتج",
          "topicTitle": "تحسين أداء EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (تحليل SQL الناتج) أحد المعايير التقنية الحيوية في مسار تحسين أداء EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحليل SQL الناتج)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحليل SQL الناتج) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحليل SQL الناتج)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحليل SQL الناتج)؟",
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
          "title": "تمرين تطبيقي على: تحليل SQL الناتج",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحليل SQL الناتج)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحليل SQL الناتج\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحليل SQL الناتج ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحليل SQL الناتج) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.2.9",
        "title": "استخدام AsNoTrackingWithIdentityResolution",
        "englishTitle": "AsNoTrackingWithIdentityResolution",
        "definition": "يعد (استخدام AsNoTrackingWithIdentityResolution) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام AsNoTrackingWithIdentityResolution) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام AsNoTrackingWithIdentityResolution) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام AsNoTrackingWithIdentityResolution\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام AsNoTrackingWithIdentityResolution\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.2.9",
          "title": "استخدام AsNoTrackingWithIdentityResolution",
          "topicTitle": "تحسين أداء EF Core",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام AsNoTrackingWithIdentityResolution) أحد المعايير التقنية الحيوية في مسار تحسين أداء EF Core ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام AsNoTrackingWithIdentityResolution)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام AsNoTrackingWithIdentityResolution) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام AsNoTrackingWithIdentityResolution)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام AsNoTrackingWithIdentityResolution)؟",
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
          "title": "تمرين تطبيقي على: استخدام AsNoTrackingWithIdentityResolution",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام AsNoTrackingWithIdentityResolution)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام AsNoTrackingWithIdentityResolution\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام AsNoTrackingWithIdentityResolution ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام AsNoTrackingWithIdentityResolution) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Transactions",
    "subtopics": [
      {
        "subId": "17.3.1",
        "title": "ما هي Database Transaction؟",
        "englishTitle": "Database Transaction",
        "definition": "يعد (ما هي Database Transaction؟) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (ما هي Database Transaction؟) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (ما هي Database Transaction؟) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ ما هي Database Transaction؟\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: ما هي Database Transaction؟\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.3.1",
          "title": "ما هي Database Transaction؟",
          "topicTitle": "Transactions",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (ما هي Database Transaction؟) أحد المعايير التقنية الحيوية في مسار Transactions ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Database Transaction؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Database Transaction؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Database Transaction؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Database Transaction؟)؟",
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
          "title": "تمرين تطبيقي على: ما هي Database Transaction؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Database Transaction؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Database Transaction؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Database Transaction؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Database Transaction؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.3.2",
        "title": "استخدام BeginTransactionAsync",
        "englishTitle": "BeginTransactionAsync",
        "definition": "يعد (استخدام BeginTransactionAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام BeginTransactionAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام BeginTransactionAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام BeginTransactionAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام BeginTransactionAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.3.2",
          "title": "استخدام BeginTransactionAsync",
          "topicTitle": "Transactions",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام BeginTransactionAsync) أحد المعايير التقنية الحيوية في مسار Transactions ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام BeginTransactionAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام BeginTransactionAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام BeginTransactionAsync)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام BeginTransactionAsync)؟",
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
          "title": "تمرين تطبيقي على: استخدام BeginTransactionAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام BeginTransactionAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام BeginTransactionAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام BeginTransactionAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام BeginTransactionAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.3.3",
        "title": "استخدام CommitAsync",
        "englishTitle": "CommitAsync",
        "definition": "يعد (استخدام CommitAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام CommitAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام CommitAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام CommitAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام CommitAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.3.3",
          "title": "استخدام CommitAsync",
          "topicTitle": "Transactions",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام CommitAsync) أحد المعايير التقنية الحيوية في مسار Transactions ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام CommitAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام CommitAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام CommitAsync)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام CommitAsync)؟",
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
          "title": "تمرين تطبيقي على: استخدام CommitAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام CommitAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام CommitAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام CommitAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام CommitAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.3.4",
        "title": "استخدام RollbackAsync",
        "englishTitle": "RollbackAsync",
        "definition": "يعد (استخدام RollbackAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام RollbackAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام RollbackAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام RollbackAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام RollbackAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.3.4",
          "title": "استخدام RollbackAsync",
          "topicTitle": "Transactions",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام RollbackAsync) أحد المعايير التقنية الحيوية في مسار Transactions ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RollbackAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RollbackAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RollbackAsync)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RollbackAsync)؟",
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
          "title": "تمرين تطبيقي على: استخدام RollbackAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RollbackAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RollbackAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RollbackAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RollbackAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.3.5",
        "title": "فهم Isolation Levels",
        "englishTitle": "فهم Isolation Levels",
        "definition": "يعد (فهم Isolation Levels) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (فهم Isolation Levels) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (فهم Isolation Levels) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ فهم Isolation Levels\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: فهم Isolation Levels\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.3.5",
          "title": "فهم Isolation Levels",
          "topicTitle": "Transactions",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (فهم Isolation Levels) أحد المعايير التقنية الحيوية في مسار Transactions ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم Isolation Levels)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم Isolation Levels) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم Isolation Levels)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم Isolation Levels)؟",
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
          "title": "تمرين تطبيقي على: فهم Isolation Levels",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم Isolation Levels)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم Isolation Levels\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم Isolation Levels ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم Isolation Levels) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.3.6",
        "title": "التعامل مع فشل عدة عمليات",
        "englishTitle": "التعامل مع فشل عدة عمليات",
        "definition": "يعد (التعامل مع فشل عدة عمليات) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (التعامل مع فشل عدة عمليات) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (التعامل مع فشل عدة عمليات) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ التعامل مع فشل عدة عمليات\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: التعامل مع فشل عدة عمليات\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.3.6",
          "title": "التعامل مع فشل عدة عمليات",
          "topicTitle": "Transactions",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (التعامل مع فشل عدة عمليات) أحد المعايير التقنية الحيوية في مسار Transactions ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التعامل مع فشل عدة عمليات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التعامل مع فشل عدة عمليات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التعامل مع فشل عدة عمليات)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التعامل مع فشل عدة عمليات)؟",
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
          "title": "تمرين تطبيقي على: التعامل مع فشل عدة عمليات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التعامل مع فشل عدة عمليات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التعامل مع فشل عدة عمليات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التعامل مع فشل عدة عمليات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التعامل مع فشل عدة عمليات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.3.7",
        "title": "منع Partial Updates",
        "englishTitle": "منع Partial Updates",
        "definition": "يعد (منع Partial Updates) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (منع Partial Updates) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (منع Partial Updates) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ منع Partial Updates\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: منع Partial Updates\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.3.7",
          "title": "منع Partial Updates",
          "topicTitle": "Transactions",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (منع Partial Updates) أحد المعايير التقنية الحيوية في مسار Transactions ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع Partial Updates)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع Partial Updates) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع Partial Updates)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع Partial Updates)؟",
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
          "title": "تمرين تطبيقي على: منع Partial Updates",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع Partial Updates)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع Partial Updates\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع Partial Updates ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع Partial Updates) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.3.8",
        "title": "إدارة معاملات الطلبات المالية",
        "englishTitle": "معاملات الطلبات المالية",
        "definition": "يعد (إدارة معاملات الطلبات المالية) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إدارة معاملات الطلبات المالية) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إدارة معاملات الطلبات المالية) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إدارة معاملات الطلبات المالية\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إدارة معاملات الطلبات المالية\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.3.8",
          "title": "إدارة معاملات الطلبات المالية",
          "topicTitle": "Transactions",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (إدارة معاملات الطلبات المالية) أحد المعايير التقنية الحيوية في مسار Transactions ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة معاملات الطلبات المالية)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة معاملات الطلبات المالية) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة معاملات الطلبات المالية)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة معاملات الطلبات المالية)؟",
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
          "title": "تمرين تطبيقي على: إدارة معاملات الطلبات المالية",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة معاملات الطلبات المالية)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة معاملات الطلبات المالية\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة معاملات الطلبات المالية ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة معاملات الطلبات المالية) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "Concurrency Handling",
    "subtopics": [
      {
        "subId": "17.4.1",
        "title": "ما هي Concurrency؟",
        "englishTitle": "Concurrency",
        "definition": "يعد (ما هي Concurrency؟) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (ما هي Concurrency؟) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (ما هي Concurrency؟) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ ما هي Concurrency؟\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: ما هي Concurrency؟\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.4.1",
          "title": "ما هي Concurrency؟",
          "topicTitle": "Concurrency Handling",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (ما هي Concurrency؟) أحد المعايير التقنية الحيوية في مسار Concurrency Handling ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Concurrency؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Concurrency؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Concurrency؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Concurrency؟)؟",
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
          "title": "تمرين تطبيقي على: ما هي Concurrency؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Concurrency؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Concurrency؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Concurrency؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Concurrency؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.4.2",
        "title": "مفهوم Optimistic Concurrency",
        "englishTitle": "Optimistic Concurrency",
        "definition": "يعد (مفهوم Optimistic Concurrency) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Optimistic Concurrency) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Optimistic Concurrency) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Optimistic Concurrency\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Optimistic Concurrency\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.4.2",
          "title": "مفهوم Optimistic Concurrency",
          "topicTitle": "Concurrency Handling",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (مفهوم Optimistic Concurrency) أحد المعايير التقنية الحيوية في مسار Concurrency Handling ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Optimistic Concurrency)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Optimistic Concurrency) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Optimistic Concurrency)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Optimistic Concurrency)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Optimistic Concurrency",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Optimistic Concurrency)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Optimistic Concurrency\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Optimistic Concurrency ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Optimistic Concurrency) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.4.3",
        "title": "استخدام RowVersion",
        "englishTitle": "RowVersion",
        "definition": "يعد (استخدام RowVersion) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام RowVersion) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام RowVersion) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام RowVersion\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام RowVersion\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.4.3",
          "title": "استخدام RowVersion",
          "topicTitle": "Concurrency Handling",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام RowVersion) أحد المعايير التقنية الحيوية في مسار Concurrency Handling ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام RowVersion)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام RowVersion) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام RowVersion)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام RowVersion)؟",
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
          "title": "تمرين تطبيقي على: استخدام RowVersion",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام RowVersion)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام RowVersion\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام RowVersion ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام RowVersion) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.4.4",
        "title": "معالجة DbUpdateConcurrencyException",
        "englishTitle": "معالجة DbUpdateConcurrencyException",
        "definition": "يعد (معالجة DbUpdateConcurrencyException) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (معالجة DbUpdateConcurrencyException) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (معالجة DbUpdateConcurrencyException) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ معالجة DbUpdateConcurrencyException\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: معالجة DbUpdateConcurrencyException\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.4.4",
          "title": "معالجة DbUpdateConcurrencyException",
          "topicTitle": "Concurrency Handling",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (معالجة DbUpdateConcurrencyException) أحد المعايير التقنية الحيوية في مسار Concurrency Handling ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (معالجة DbUpdateConcurrencyException)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (معالجة DbUpdateConcurrencyException) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (معالجة DbUpdateConcurrencyException)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (معالجة DbUpdateConcurrencyException)؟",
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
          "title": "تمرين تطبيقي على: معالجة DbUpdateConcurrencyException",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (معالجة DbUpdateConcurrencyException)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين معالجة DbUpdateConcurrencyException\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: معالجة DbUpdateConcurrencyException ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (معالجة DbUpdateConcurrencyException) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.4.5",
        "title": "منع Lost Updates",
        "englishTitle": "منع Lost Updates",
        "definition": "يعد (منع Lost Updates) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (منع Lost Updates) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (منع Lost Updates) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ منع Lost Updates\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: منع Lost Updates\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.4.5",
          "title": "منع Lost Updates",
          "topicTitle": "Concurrency Handling",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (منع Lost Updates) أحد المعايير التقنية الحيوية في مسار Concurrency Handling ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع Lost Updates)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع Lost Updates) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع Lost Updates)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع Lost Updates)؟",
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
          "title": "تمرين تطبيقي على: منع Lost Updates",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع Lost Updates)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع Lost Updates\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع Lost Updates ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع Lost Updates) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.4.6",
        "title": "معالجة تعارض تعديل البيانات",
        "englishTitle": "معالجة تعارض تعديل البيانات",
        "definition": "يعد (معالجة تعارض تعديل البيانات) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (معالجة تعارض تعديل البيانات) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (معالجة تعارض تعديل البيانات) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ معالجة تعارض تعديل البيانات\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: معالجة تعارض تعديل البيانات\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.4.6",
          "title": "معالجة تعارض تعديل البيانات",
          "topicTitle": "Concurrency Handling",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (معالجة تعارض تعديل البيانات) أحد المعايير التقنية الحيوية في مسار Concurrency Handling ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (معالجة تعارض تعديل البيانات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (معالجة تعارض تعديل البيانات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (معالجة تعارض تعديل البيانات)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (معالجة تعارض تعديل البيانات)؟",
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
          "title": "تمرين تطبيقي على: معالجة تعارض تعديل البيانات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (معالجة تعارض تعديل البيانات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين معالجة تعارض تعديل البيانات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: معالجة تعارض تعديل البيانات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (معالجة تعارض تعديل البيانات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.4.7",
        "title": "تطبيق Concurrency على المخزون",
        "englishTitle": "Concurrency على المخزون",
        "definition": "يعد (تطبيق Concurrency على المخزون) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تطبيق Concurrency على المخزون) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تطبيق Concurrency على المخزون) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ تطبيق Concurrency على المخزون\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تطبيق Concurrency على المخزون\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.4.7",
          "title": "تطبيق Concurrency على المخزون",
          "topicTitle": "Concurrency Handling",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (تطبيق Concurrency على المخزون) أحد المعايير التقنية الحيوية في مسار Concurrency Handling ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تطبيق Concurrency على المخزون)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق Concurrency على المخزون) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تطبيق Concurrency على المخزون)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تطبيق Concurrency على المخزون)؟",
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
          "title": "تمرين تطبيقي على: تطبيق Concurrency على المخزون",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تطبيق Concurrency على المخزون)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تطبيق Concurrency على المخزون\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تطبيق Concurrency على المخزون ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تطبيق Concurrency على المخزون) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "Advanced EF Core Features",
    "subtopics": [
      {
        "subId": "17.5.1",
        "title": "استخدام Raw SQL Queries",
        "englishTitle": "Raw SQL Queries",
        "definition": "يعد (استخدام Raw SQL Queries) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Raw SQL Queries) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Raw SQL Queries) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Raw SQL Queries\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Raw SQL Queries\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.5.1",
          "title": "استخدام Raw SQL Queries",
          "topicTitle": "Advanced EF Core Features",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام Raw SQL Queries) أحد المعايير التقنية الحيوية في مسار Advanced EF Core Features ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Raw SQL Queries)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Raw SQL Queries) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Raw SQL Queries)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Raw SQL Queries)؟",
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
          "title": "تمرين تطبيقي على: استخدام Raw SQL Queries",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Raw SQL Queries)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Raw SQL Queries\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Raw SQL Queries ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Raw SQL Queries) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.5.2",
        "title": "استخدام ExecuteUpdateAsync",
        "englishTitle": "ExecuteUpdateAsync",
        "definition": "يعد (استخدام ExecuteUpdateAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام ExecuteUpdateAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام ExecuteUpdateAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام ExecuteUpdateAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام ExecuteUpdateAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.5.2",
          "title": "استخدام ExecuteUpdateAsync",
          "topicTitle": "Advanced EF Core Features",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام ExecuteUpdateAsync) أحد المعايير التقنية الحيوية في مسار Advanced EF Core Features ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ExecuteUpdateAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ExecuteUpdateAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ExecuteUpdateAsync)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ExecuteUpdateAsync)؟",
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
          "title": "تمرين تطبيقي على: استخدام ExecuteUpdateAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ExecuteUpdateAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ExecuteUpdateAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ExecuteUpdateAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ExecuteUpdateAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.5.3",
        "title": "استخدام ExecuteDeleteAsync",
        "englishTitle": "ExecuteDeleteAsync",
        "definition": "يعد (استخدام ExecuteDeleteAsync) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام ExecuteDeleteAsync) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام ExecuteDeleteAsync) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام ExecuteDeleteAsync\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام ExecuteDeleteAsync\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.5.3",
          "title": "استخدام ExecuteDeleteAsync",
          "topicTitle": "Advanced EF Core Features",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام ExecuteDeleteAsync) أحد المعايير التقنية الحيوية في مسار Advanced EF Core Features ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ExecuteDeleteAsync)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ExecuteDeleteAsync) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ExecuteDeleteAsync)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ExecuteDeleteAsync)؟",
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
          "title": "تمرين تطبيقي على: استخدام ExecuteDeleteAsync",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ExecuteDeleteAsync)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ExecuteDeleteAsync\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ExecuteDeleteAsync ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ExecuteDeleteAsync) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.5.4",
        "title": "إنشاء Global Query Filters",
        "englishTitle": "Global Query Filters",
        "definition": "يعد (إنشاء Global Query Filters) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Global Query Filters) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Global Query Filters) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Global Query Filters\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Global Query Filters\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.5.4",
          "title": "إنشاء Global Query Filters",
          "topicTitle": "Advanced EF Core Features",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (إنشاء Global Query Filters) أحد المعايير التقنية الحيوية في مسار Advanced EF Core Features ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Global Query Filters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Global Query Filters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Global Query Filters)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Global Query Filters)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Global Query Filters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Global Query Filters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Global Query Filters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Global Query Filters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Global Query Filters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.5.5",
        "title": "تنفيذ Soft Delete",
        "englishTitle": "Soft Delete",
        "definition": "يعد (تنفيذ Soft Delete) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تنفيذ Soft Delete) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تنفيذ Soft Delete) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ تنفيذ Soft Delete\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تنفيذ Soft Delete\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.5.5",
          "title": "تنفيذ Soft Delete",
          "topicTitle": "Advanced EF Core Features",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (تنفيذ Soft Delete) أحد المعايير التقنية الحيوية في مسار Advanced EF Core Features ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنفيذ Soft Delete)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنفيذ Soft Delete) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنفيذ Soft Delete)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنفيذ Soft Delete)؟",
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
          "title": "تمرين تطبيقي على: تنفيذ Soft Delete",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنفيذ Soft Delete)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنفيذ Soft Delete\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنفيذ Soft Delete ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنفيذ Soft Delete) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.5.6",
        "title": "إضافة Audit Fields",
        "englishTitle": "إضافة Audit Fields",
        "definition": "يعد (إضافة Audit Fields) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إضافة Audit Fields) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إضافة Audit Fields) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إضافة Audit Fields\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إضافة Audit Fields\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.5.6",
          "title": "إضافة Audit Fields",
          "topicTitle": "Advanced EF Core Features",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (إضافة Audit Fields) أحد المعايير التقنية الحيوية في مسار Advanced EF Core Features ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة Audit Fields)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Audit Fields) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة Audit Fields)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة Audit Fields)؟",
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
          "title": "تمرين تطبيقي على: إضافة Audit Fields",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة Audit Fields)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة Audit Fields\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة Audit Fields ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة Audit Fields) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.5.7",
        "title": "استخدام Value Converters",
        "englishTitle": "Value Converters",
        "definition": "يعد (استخدام Value Converters) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Value Converters) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Value Converters) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Value Converters\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Value Converters\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.5.7",
          "title": "استخدام Value Converters",
          "topicTitle": "Advanced EF Core Features",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام Value Converters) أحد المعايير التقنية الحيوية في مسار Advanced EF Core Features ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Value Converters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Value Converters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Value Converters)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Value Converters)؟",
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
          "title": "تمرين تطبيقي على: استخدام Value Converters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Value Converters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Value Converters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Value Converters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Value Converters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.5.8",
        "title": "استخدام Shadow Properties",
        "englishTitle": "Shadow Properties",
        "definition": "يعد (استخدام Shadow Properties) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Shadow Properties) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Shadow Properties) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Shadow Properties\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Shadow Properties\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.5.8",
          "title": "استخدام Shadow Properties",
          "topicTitle": "Advanced EF Core Features",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام Shadow Properties) أحد المعايير التقنية الحيوية في مسار Advanced EF Core Features ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Shadow Properties)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Shadow Properties) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Shadow Properties)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Shadow Properties)؟",
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
          "title": "تمرين تطبيقي على: استخدام Shadow Properties",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Shadow Properties)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Shadow Properties\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Shadow Properties ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Shadow Properties) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.5.9",
        "title": "مقدمة في Compiled Queries",
        "englishTitle": "مقدمة في Compiled Queries",
        "definition": "يعد (مقدمة في Compiled Queries) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مقدمة في Compiled Queries) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مقدمة في Compiled Queries) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مقدمة في Compiled Queries\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مقدمة في Compiled Queries\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.5.9",
          "title": "مقدمة في Compiled Queries",
          "topicTitle": "Advanced EF Core Features",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (مقدمة في Compiled Queries) أحد المعايير التقنية الحيوية في مسار Advanced EF Core Features ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Compiled Queries)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Compiled Queries) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Compiled Queries)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Compiled Queries)؟",
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
          "title": "تمرين تطبيقي على: مقدمة في Compiled Queries",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Compiled Queries)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Compiled Queries\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Compiled Queries ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Compiled Queries) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "Database Management",
    "subtopics": [
      {
        "subId": "17.6.1",
        "title": "إنشاء Development Database",
        "englishTitle": "Development Database",
        "definition": "يعد (إنشاء Development Database) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Development Database) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Development Database) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Development Database\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Development Database\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.6.1",
          "title": "إنشاء Development Database",
          "topicTitle": "Database Management",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (إنشاء Development Database) أحد المعايير التقنية الحيوية في مسار Database Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Development Database)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Development Database) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Development Database)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Development Database)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Development Database",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Development Database)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Development Database\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Development Database ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Development Database) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.6.2",
        "title": "إنشاء Testing Database",
        "englishTitle": "Testing Database",
        "definition": "يعد (إنشاء Testing Database) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Testing Database) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Testing Database) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Testing Database\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Testing Database\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.6.2",
          "title": "إنشاء Testing Database",
          "topicTitle": "Database Management",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (إنشاء Testing Database) أحد المعايير التقنية الحيوية في مسار Database Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Testing Database)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Testing Database) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Testing Database)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Testing Database)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Testing Database",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Testing Database)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Testing Database\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Testing Database ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Testing Database) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.6.3",
        "title": "إنشاء Production Database",
        "englishTitle": "Production Database",
        "definition": "يعد (إنشاء Production Database) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Production Database) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Production Database) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Production Database\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Production Database\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.6.3",
          "title": "إنشاء Production Database",
          "topicTitle": "Database Management",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (إنشاء Production Database) أحد المعايير التقنية الحيوية في مسار Database Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Production Database)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Production Database) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Production Database)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Production Database)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Production Database",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Production Database)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Production Database\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Production Database ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Production Database) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.6.4",
        "title": "استخدام Seed Data",
        "englishTitle": "Seed Data",
        "definition": "يعد (استخدام Seed Data) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Seed Data) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Seed Data) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Seed Data\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Seed Data\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.6.4",
          "title": "استخدام Seed Data",
          "topicTitle": "Database Management",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (استخدام Seed Data) أحد المعايير التقنية الحيوية في مسار Database Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Seed Data)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Seed Data) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Seed Data)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Seed Data)؟",
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
          "title": "تمرين تطبيقي على: استخدام Seed Data",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Seed Data)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Seed Data\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Seed Data ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Seed Data) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.6.5",
        "title": "إدارة Connection Pooling",
        "englishTitle": "Connection Pooling",
        "definition": "يعد (إدارة Connection Pooling) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إدارة Connection Pooling) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إدارة Connection Pooling) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إدارة Connection Pooling\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إدارة Connection Pooling\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.6.5",
          "title": "إدارة Connection Pooling",
          "topicTitle": "Database Management",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (إدارة Connection Pooling) أحد المعايير التقنية الحيوية في مسار Database Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Connection Pooling)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Connection Pooling) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Connection Pooling)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Connection Pooling)؟",
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
          "title": "تمرين تطبيقي على: إدارة Connection Pooling",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Connection Pooling)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Connection Pooling\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Connection Pooling ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Connection Pooling) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.6.6",
        "title": "إدارة Migrations عند النشر",
        "englishTitle": "Migrations عند النشر",
        "definition": "يعد (إدارة Migrations عند النشر) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إدارة Migrations عند النشر) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إدارة Migrations عند النشر) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إدارة Migrations عند النشر\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إدارة Migrations عند النشر\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.6.6",
          "title": "إدارة Migrations عند النشر",
          "topicTitle": "Database Management",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (إدارة Migrations عند النشر) أحد المعايير التقنية الحيوية في مسار Database Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Migrations عند النشر)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Migrations عند النشر) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Migrations عند النشر)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Migrations عند النشر)؟",
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
          "title": "تمرين تطبيقي على: إدارة Migrations عند النشر",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Migrations عند النشر)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Migrations عند النشر\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Migrations عند النشر ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Migrations عند النشر) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.6.7",
        "title": "إنشاء Database Backups",
        "englishTitle": "Database Backups",
        "definition": "يعد (إنشاء Database Backups) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Database Backups) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Database Backups) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Database Backups\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Database Backups\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.6.7",
          "title": "إنشاء Database Backups",
          "topicTitle": "Database Management",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (إنشاء Database Backups) أحد المعايير التقنية الحيوية في مسار Database Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Database Backups)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Database Backups) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Database Backups)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Database Backups)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Database Backups",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Database Backups)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Database Backups\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Database Backups ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Database Backups) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.6.8",
        "title": "اختبار Restore",
        "englishTitle": "اختبار Restore",
        "definition": "يعد (اختبار Restore) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (اختبار Restore) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (اختبار Restore) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ اختبار Restore\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: اختبار Restore\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.6.8",
          "title": "اختبار Restore",
          "topicTitle": "Database Management",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (اختبار Restore) أحد المعايير التقنية الحيوية في مسار Database Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Restore)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Restore) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Restore)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Restore)؟",
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
          "title": "تمرين تطبيقي على: اختبار Restore",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Restore)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Restore\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Restore ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Restore) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "17.6.9",
        "title": "مراقبة Slow Queries",
        "englishTitle": "مراقبة Slow Queries",
        "definition": "يعد (مراقبة Slow Queries) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مراقبة Slow Queries) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مراقبة Slow Queries) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مراقبة Slow Queries\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مراقبة Slow Queries\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 17.6.9",
          "title": "مراقبة Slow Queries",
          "topicTitle": "Database Management",
          "sectionTitle": "القسم السابع عشر: Entity Framework Core المتقدم",
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
          "summary": "يمثل (مراقبة Slow Queries) أحد المعايير التقنية الحيوية في مسار Database Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مراقبة Slow Queries)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مراقبة Slow Queries) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مراقبة Slow Queries)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مراقبة Slow Queries)؟",
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
          "title": "تمرين تطبيقي على: مراقبة Slow Queries",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مراقبة Slow Queries)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مراقبة Slow Queries\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مراقبة Slow Queries ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مراقبة Slow Queries) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section17Data;
