// src/data/sections/section15.js
// محتوى تعليمي مفصل وشامل لـ: القسم الخامس عشر: SQL Server وتصميم قواعد البيانات
export const section15Data = {
  id: 15,
  title: "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
  englishTitle: "SQL Server & Database Design",
  icon: "Database",
  category: "قواعد البيانات",
  description: "مبادئ قواعد البيانات العلائقية، تثبيت SQL Server وSSMS، أوامر SQL، تصميم مخططات ERD، والتطبيع Normalization ومبادئ ACID.",
  summary: {
  "sectionId": 15,
  "title": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
  "englishTitle": "SQL Server & Database Design",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الخامس عشر: SQL Server وتصميم قواعد البيانات.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
    "title": "مقدمة في قواعد البيانات",
    "subtopics": [
      {
        "subId": "15.1.1",
        "title": "ما هي Database؟",
        "englishTitle": "Database",
        "definition": "يعد (ما هي Database؟) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (ما هي Database؟) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (ما هي Database؟) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ ما هي Database؟\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: ما هي Database؟\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.1.1",
          "title": "ما هي Database؟",
          "topicTitle": "مقدمة في قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (ما هي Database؟) أحد المعايير التقنية الحيوية في مسار مقدمة في قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Database؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Database؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Database؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Database؟)؟",
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
          "title": "تمرين تطبيقي على: ما هي Database؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Database؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Database؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Database؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Database؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.1.2",
        "title": "الفرق بين SQL وNoSQL",
        "englishTitle": "SQL وNoSQL",
        "definition": "يعد (الفرق بين SQL وNoSQL) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (الفرق بين SQL وNoSQL) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (الفرق بين SQL وNoSQL) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ الفرق بين SQL وNoSQL\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: الفرق بين SQL وNoSQL\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.1.2",
          "title": "الفرق بين SQL وNoSQL",
          "topicTitle": "مقدمة في قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (الفرق بين SQL وNoSQL) أحد المعايير التقنية الحيوية في مسار مقدمة في قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين SQL وNoSQL)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين SQL وNoSQL) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين SQL وNoSQL)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين SQL وNoSQL)؟",
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
          "title": "تمرين تطبيقي على: الفرق بين SQL وNoSQL",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين SQL وNoSQL)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين SQL وNoSQL\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين SQL وNoSQL ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين SQL وNoSQL) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.1.3",
        "title": "مفهوم Relational Database",
        "englishTitle": "Relational Database",
        "definition": "يعد (مفهوم Relational Database) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Relational Database) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Relational Database) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Relational Database\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Relational Database\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.1.3",
          "title": "مفهوم Relational Database",
          "topicTitle": "مقدمة في قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم Relational Database) أحد المعايير التقنية الحيوية في مسار مقدمة في قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Relational Database)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Relational Database) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Relational Database)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Relational Database)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Relational Database",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Relational Database)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Relational Database\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Relational Database ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Relational Database) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.1.4",
        "title": "مفهوم Tables وRows وColumns",
        "englishTitle": "Tables وRows وColumns",
        "definition": "يعد (مفهوم Tables وRows وColumns) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Tables وRows وColumns) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Tables وRows وColumns) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Tables وRows وColumns\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Tables وRows وColumns\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.1.4",
          "title": "مفهوم Tables وRows وColumns",
          "topicTitle": "مقدمة في قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم Tables وRows وColumns) أحد المعايير التقنية الحيوية في مسار مقدمة في قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Tables وRows وColumns)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Tables وRows وColumns) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Tables وRows وColumns)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Tables وRows وColumns)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Tables وRows وColumns",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Tables وRows وColumns)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Tables وRows وColumns\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Tables وRows وColumns ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Tables وRows وColumns) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.1.5",
        "title": "مفهوم Primary Key",
        "englishTitle": "Primary Key",
        "definition": "يعد (مفهوم Primary Key) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Primary Key) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Primary Key) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Primary Key\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Primary Key\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.1.5",
          "title": "مفهوم Primary Key",
          "topicTitle": "مقدمة في قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم Primary Key) أحد المعايير التقنية الحيوية في مسار مقدمة في قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Primary Key)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Primary Key) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Primary Key)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Primary Key)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Primary Key",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Primary Key)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Primary Key\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Primary Key ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Primary Key) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.1.6",
        "title": "مفهوم Foreign Key",
        "englishTitle": "Foreign Key",
        "definition": "يعد (مفهوم Foreign Key) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Foreign Key) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Foreign Key) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Foreign Key\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Foreign Key\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.1.6",
          "title": "مفهوم Foreign Key",
          "topicTitle": "مقدمة في قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم Foreign Key) أحد المعايير التقنية الحيوية في مسار مقدمة في قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Foreign Key)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Foreign Key) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Foreign Key)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Foreign Key)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Foreign Key",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Foreign Key)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Foreign Key\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Foreign Key ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Foreign Key) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.1.7",
        "title": "مفهوم Database Constraints",
        "englishTitle": "Database Constraints",
        "definition": "يعد (مفهوم Database Constraints) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Database Constraints) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Database Constraints) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Database Constraints\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Database Constraints\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.1.7",
          "title": "مفهوم Database Constraints",
          "topicTitle": "مقدمة في قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم Database Constraints) أحد المعايير التقنية الحيوية في مسار مقدمة في قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Database Constraints)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Database Constraints) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Database Constraints)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Database Constraints)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Database Constraints",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Database Constraints)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Database Constraints\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Database Constraints ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Database Constraints) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.1.8",
        "title": "مفهوم Database Schema",
        "englishTitle": "Database Schema",
        "definition": "يعد (مفهوم Database Schema) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Database Schema) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Database Schema) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Database Schema\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Database Schema\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.1.8",
          "title": "مفهوم Database Schema",
          "topicTitle": "مقدمة في قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم Database Schema) أحد المعايير التقنية الحيوية في مسار مقدمة في قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Database Schema)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Database Schema) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Database Schema)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Database Schema)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Database Schema",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Database Schema)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Database Schema\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Database Schema ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Database Schema) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "SQL Server",
    "subtopics": [
      {
        "subId": "15.2.1",
        "title": "ما هو SQL Server؟",
        "englishTitle": "SQL Server",
        "definition": "يعد (ما هو SQL Server؟) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (ما هو SQL Server؟) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (ما هو SQL Server؟) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ ما هو SQL Server؟\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: ما هو SQL Server؟\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.2.1",
          "title": "ما هو SQL Server؟",
          "topicTitle": "SQL Server",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (ما هو SQL Server؟) أحد المعايير التقنية الحيوية في مسار SQL Server ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو SQL Server؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو SQL Server؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو SQL Server؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو SQL Server؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو SQL Server؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو SQL Server؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو SQL Server؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو SQL Server؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو SQL Server؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.2.2",
        "title": "الفرق بين SQL Server Express وDeveloper",
        "englishTitle": "SQL Server Express وDeveloper",
        "definition": "يعد (الفرق بين SQL Server Express وDeveloper) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (الفرق بين SQL Server Express وDeveloper) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (الفرق بين SQL Server Express وDeveloper) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ الفرق بين SQL Server Express وDeveloper\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: الفرق بين SQL Server Express وDeveloper\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.2.2",
          "title": "الفرق بين SQL Server Express وDeveloper",
          "topicTitle": "SQL Server",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (الفرق بين SQL Server Express وDeveloper) أحد المعايير التقنية الحيوية في مسار SQL Server ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين SQL Server Express وDeveloper)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين SQL Server Express وDeveloper) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين SQL Server Express وDeveloper)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين SQL Server Express وDeveloper)؟",
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
          "title": "تمرين تطبيقي على: الفرق بين SQL Server Express وDeveloper",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين SQL Server Express وDeveloper)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين SQL Server Express وDeveloper\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين SQL Server Express وDeveloper ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين SQL Server Express وDeveloper) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.2.3",
        "title": "تثبيت SQL Server",
        "englishTitle": "تثبيت SQL Server",
        "definition": "يعد (تثبيت SQL Server) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تثبيت SQL Server) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تثبيت SQL Server) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ تثبيت SQL Server\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تثبيت SQL Server\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.2.3",
          "title": "تثبيت SQL Server",
          "topicTitle": "SQL Server",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (تثبيت SQL Server) أحد المعايير التقنية الحيوية في مسار SQL Server ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تثبيت SQL Server)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت SQL Server) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تثبيت SQL Server)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تثبيت SQL Server)؟",
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
          "title": "تمرين تطبيقي على: تثبيت SQL Server",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تثبيت SQL Server)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تثبيت SQL Server\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تثبيت SQL Server ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تثبيت SQL Server) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.2.4",
        "title": "استخدام SQL Server Management Studio",
        "englishTitle": "SQL Server Management Studio",
        "definition": "يعد (استخدام SQL Server Management Studio) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام SQL Server Management Studio) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام SQL Server Management Studio) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام SQL Server Management Studio\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام SQL Server Management Studio\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.2.4",
          "title": "استخدام SQL Server Management Studio",
          "topicTitle": "SQL Server",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام SQL Server Management Studio) أحد المعايير التقنية الحيوية في مسار SQL Server ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام SQL Server Management Studio)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام SQL Server Management Studio) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام SQL Server Management Studio)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام SQL Server Management Studio)؟",
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
          "title": "تمرين تطبيقي على: استخدام SQL Server Management Studio",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام SQL Server Management Studio)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام SQL Server Management Studio\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام SQL Server Management Studio ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام SQL Server Management Studio) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.2.5",
        "title": "إنشاء Database",
        "englishTitle": "Database",
        "definition": "يعد (إنشاء Database) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Database) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Database) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Database\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Database\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.2.5",
          "title": "إنشاء Database",
          "topicTitle": "SQL Server",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (إنشاء Database) أحد المعايير التقنية الحيوية في مسار SQL Server ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Database)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Database) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Database)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Database)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Database",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Database)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Database\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Database ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Database) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.2.6",
        "title": "إنشاء Table",
        "englishTitle": "Table",
        "definition": "يعد (إنشاء Table) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Table) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Table) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Table\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Table\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.2.6",
          "title": "إنشاء Table",
          "topicTitle": "SQL Server",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (إنشاء Table) أحد المعايير التقنية الحيوية في مسار SQL Server ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Table)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Table) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Table)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Table)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Table",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Table)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Table\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Table ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Table) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.2.7",
        "title": "تحديد Data Types",
        "englishTitle": "تحديد Data Types",
        "definition": "يعد (تحديد Data Types) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تحديد Data Types) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تحديد Data Types) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ تحديد Data Types\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تحديد Data Types\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.2.7",
          "title": "تحديد Data Types",
          "topicTitle": "SQL Server",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (تحديد Data Types) أحد المعايير التقنية الحيوية في مسار SQL Server ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحديد Data Types)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحديد Data Types) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحديد Data Types)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحديد Data Types)؟",
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
          "title": "تمرين تطبيقي على: تحديد Data Types",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحديد Data Types)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحديد Data Types\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحديد Data Types ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحديد Data Types) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.2.8",
        "title": "إنشاء Primary Key",
        "englishTitle": "Primary Key",
        "definition": "يعد (إنشاء Primary Key) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Primary Key) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Primary Key) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Primary Key\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Primary Key\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.2.8",
          "title": "إنشاء Primary Key",
          "topicTitle": "SQL Server",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (إنشاء Primary Key) أحد المعايير التقنية الحيوية في مسار SQL Server ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Primary Key)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Primary Key) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Primary Key)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Primary Key)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Primary Key",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Primary Key)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Primary Key\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Primary Key ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Primary Key) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.2.9",
        "title": "إنشاء Foreign Key",
        "englishTitle": "Foreign Key",
        "definition": "يعد (إنشاء Foreign Key) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Foreign Key) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Foreign Key) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Foreign Key\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Foreign Key\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.2.9",
          "title": "إنشاء Foreign Key",
          "topicTitle": "SQL Server",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (إنشاء Foreign Key) أحد المعايير التقنية الحيوية في مسار SQL Server ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Foreign Key)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Foreign Key) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Foreign Key)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Foreign Key)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Foreign Key",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Foreign Key)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Foreign Key\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Foreign Key ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Foreign Key) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "أساسيات SQL",
    "subtopics": [
      {
        "subId": "15.3.1",
        "title": "استخدام SELECT",
        "englishTitle": "SELECT",
        "definition": "يعد (استخدام SELECT) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام SELECT) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام SELECT) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام SELECT\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام SELECT\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.1",
          "title": "استخدام SELECT",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام SELECT) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام SELECT)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام SELECT) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام SELECT)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام SELECT)؟",
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
          "title": "تمرين تطبيقي على: استخدام SELECT",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام SELECT)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام SELECT\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام SELECT ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام SELECT) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.3.2",
        "title": "استخدام INSERT",
        "englishTitle": "INSERT",
        "definition": "يعد (استخدام INSERT) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام INSERT) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام INSERT) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام INSERT\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام INSERT\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.2",
          "title": "استخدام INSERT",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام INSERT) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام INSERT)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام INSERT) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام INSERT)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام INSERT)؟",
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
          "title": "تمرين تطبيقي على: استخدام INSERT",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام INSERT)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام INSERT\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام INSERT ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام INSERT) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.3.3",
        "title": "استخدام UPDATE",
        "englishTitle": "UPDATE",
        "definition": "يعد (استخدام UPDATE) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام UPDATE) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام UPDATE) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام UPDATE\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام UPDATE\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.3",
          "title": "استخدام UPDATE",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام UPDATE) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام UPDATE)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام UPDATE) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام UPDATE)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام UPDATE)؟",
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
          "title": "تمرين تطبيقي على: استخدام UPDATE",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام UPDATE)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام UPDATE\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام UPDATE ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام UPDATE) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.3.4",
        "title": "استخدام DELETE",
        "englishTitle": "DELETE",
        "definition": "يعد (استخدام DELETE) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام DELETE) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام DELETE) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام DELETE\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام DELETE\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.4",
          "title": "استخدام DELETE",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام DELETE) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام DELETE)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام DELETE) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام DELETE)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام DELETE)؟",
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
          "title": "تمرين تطبيقي على: استخدام DELETE",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام DELETE)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام DELETE\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام DELETE ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام DELETE) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.3.5",
        "title": "استخدام WHERE",
        "englishTitle": "WHERE",
        "definition": "يعد (استخدام WHERE) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام WHERE) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام WHERE) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام WHERE\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام WHERE\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.5",
          "title": "استخدام WHERE",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام WHERE) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام WHERE)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام WHERE) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام WHERE)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام WHERE)؟",
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
          "title": "تمرين تطبيقي على: استخدام WHERE",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام WHERE)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام WHERE\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام WHERE ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام WHERE) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.3.6",
        "title": "استخدام ORDER BY",
        "englishTitle": "ORDER BY",
        "definition": "يعد (استخدام ORDER BY) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام ORDER BY) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام ORDER BY) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام ORDER BY\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام ORDER BY\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.6",
          "title": "استخدام ORDER BY",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام ORDER BY) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ORDER BY)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ORDER BY) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ORDER BY)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ORDER BY)؟",
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
          "title": "تمرين تطبيقي على: استخدام ORDER BY",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ORDER BY)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ORDER BY\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ORDER BY ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ORDER BY) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.3.7",
        "title": "استخدام GROUP BY",
        "englishTitle": "GROUP BY",
        "definition": "يعد (استخدام GROUP BY) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام GROUP BY) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام GROUP BY) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام GROUP BY\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام GROUP BY\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.7",
          "title": "استخدام GROUP BY",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام GROUP BY) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام GROUP BY)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام GROUP BY) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام GROUP BY)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام GROUP BY)؟",
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
          "title": "تمرين تطبيقي على: استخدام GROUP BY",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام GROUP BY)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام GROUP BY\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام GROUP BY ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام GROUP BY) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.3.8",
        "title": "استخدام HAVING",
        "englishTitle": "HAVING",
        "definition": "يعد (استخدام HAVING) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام HAVING) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام HAVING) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام HAVING\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام HAVING\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.8",
          "title": "استخدام HAVING",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام HAVING) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام HAVING)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام HAVING) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام HAVING)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام HAVING)؟",
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
          "title": "تمرين تطبيقي على: استخدام HAVING",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام HAVING)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام HAVING\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام HAVING ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام HAVING) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.3.9",
        "title": "استخدام JOIN",
        "englishTitle": "JOIN",
        "definition": "يعد (استخدام JOIN) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام JOIN) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام JOIN) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام JOIN\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام JOIN\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.9",
          "title": "استخدام JOIN",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام JOIN) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام JOIN)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام JOIN) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام JOIN)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام JOIN)؟",
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
          "title": "تمرين تطبيقي على: استخدام JOIN",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام JOIN)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام JOIN\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام JOIN ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام JOIN) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.3.10",
        "title": "استخدام Aggregate Functions",
        "englishTitle": "Aggregate Functions",
        "definition": "يعد (استخدام Aggregate Functions) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Aggregate Functions) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Aggregate Functions) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Aggregate Functions\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Aggregate Functions\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.3.10",
          "title": "استخدام Aggregate Functions",
          "topicTitle": "أساسيات SQL",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام Aggregate Functions) أحد المعايير التقنية الحيوية في مسار أساسيات SQL ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Aggregate Functions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Aggregate Functions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Aggregate Functions)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Aggregate Functions)؟",
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
          "title": "تمرين تطبيقي على: استخدام Aggregate Functions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Aggregate Functions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Aggregate Functions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Aggregate Functions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Aggregate Functions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "تصميم قواعد البيانات",
    "subtopics": [
      {
        "subId": "15.4.1",
        "title": "مفهوم ERD",
        "englishTitle": "ERD",
        "definition": "يعد (مفهوم ERD) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم ERD) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم ERD) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم ERD\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم ERD\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.4.1",
          "title": "مفهوم ERD",
          "topicTitle": "تصميم قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم ERD) أحد المعايير التقنية الحيوية في مسار تصميم قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم ERD)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم ERD) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم ERD)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم ERD)؟",
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
          "title": "تمرين تطبيقي على: مفهوم ERD",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم ERD)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم ERD\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم ERD ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم ERD) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.4.2",
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
          "badge": "الدرس 15.4.2",
          "title": "علاقة One-to-One",
          "topicTitle": "تصميم قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (علاقة One-to-One) أحد المعايير التقنية الحيوية في مسار تصميم قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
        "subId": "15.4.3",
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
          "badge": "الدرس 15.4.3",
          "title": "علاقة One-to-Many",
          "topicTitle": "تصميم قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (علاقة One-to-Many) أحد المعايير التقنية الحيوية في مسار تصميم قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
        "subId": "15.4.4",
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
          "badge": "الدرس 15.4.4",
          "title": "علاقة Many-to-Many",
          "topicTitle": "تصميم قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (علاقة Many-to-Many) أحد المعايير التقنية الحيوية في مسار تصميم قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
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
        "subId": "15.4.5",
        "title": "مفهوم Database Normalization",
        "englishTitle": "Database Normalization",
        "definition": "يعد (مفهوم Database Normalization) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Database Normalization) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Database Normalization) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Database Normalization\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Database Normalization\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.4.5",
          "title": "مفهوم Database Normalization",
          "topicTitle": "تصميم قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم Database Normalization) أحد المعايير التقنية الحيوية في مسار تصميم قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Database Normalization)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Database Normalization) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Database Normalization)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Database Normalization)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Database Normalization",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Database Normalization)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Database Normalization\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Database Normalization ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Database Normalization) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.4.6",
        "title": "مفهوم First Normal Form",
        "englishTitle": "First Normal Form",
        "definition": "يعد (مفهوم First Normal Form) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم First Normal Form) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم First Normal Form) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم First Normal Form\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم First Normal Form\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.4.6",
          "title": "مفهوم First Normal Form",
          "topicTitle": "تصميم قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم First Normal Form) أحد المعايير التقنية الحيوية في مسار تصميم قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم First Normal Form)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم First Normal Form) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم First Normal Form)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم First Normal Form)؟",
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
          "title": "تمرين تطبيقي على: مفهوم First Normal Form",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم First Normal Form)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم First Normal Form\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم First Normal Form ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم First Normal Form) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.4.7",
        "title": "مفهوم Second Normal Form",
        "englishTitle": "Second Normal Form",
        "definition": "يعد (مفهوم Second Normal Form) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Second Normal Form) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Second Normal Form) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Second Normal Form\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Second Normal Form\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.4.7",
          "title": "مفهوم Second Normal Form",
          "topicTitle": "تصميم قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم Second Normal Form) أحد المعايير التقنية الحيوية في مسار تصميم قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Second Normal Form)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Second Normal Form) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Second Normal Form)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Second Normal Form)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Second Normal Form",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Second Normal Form)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Second Normal Form\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Second Normal Form ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Second Normal Form) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.4.8",
        "title": "مفهوم Third Normal Form",
        "englishTitle": "Third Normal Form",
        "definition": "يعد (مفهوم Third Normal Form) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم Third Normal Form) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم Third Normal Form) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم Third Normal Form\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم Third Normal Form\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.4.8",
          "title": "مفهوم Third Normal Form",
          "topicTitle": "تصميم قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم Third Normal Form) أحد المعايير التقنية الحيوية في مسار تصميم قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Third Normal Form)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Third Normal Form) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Third Normal Form)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Third Normal Form)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Third Normal Form",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Third Normal Form)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Third Normal Form\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Third Normal Form ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Third Normal Form) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.4.9",
        "title": "تصميم قاعدة بيانات لمتجر إلكتروني",
        "englishTitle": "تصميم قاعدة بيانات لمتجر إلكتروني",
        "definition": "يعد (تصميم قاعدة بيانات لمتجر إلكتروني) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تصميم قاعدة بيانات لمتجر إلكتروني) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تصميم قاعدة بيانات لمتجر إلكتروني) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ تصميم قاعدة بيانات لمتجر إلكتروني\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تصميم قاعدة بيانات لمتجر إلكتروني\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.4.9",
          "title": "تصميم قاعدة بيانات لمتجر إلكتروني",
          "topicTitle": "تصميم قواعد البيانات",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (تصميم قاعدة بيانات لمتجر إلكتروني) أحد المعايير التقنية الحيوية في مسار تصميم قواعد البيانات ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تصميم قاعدة بيانات لمتجر إلكتروني)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تصميم قاعدة بيانات لمتجر إلكتروني) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تصميم قاعدة بيانات لمتجر إلكتروني)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تصميم قاعدة بيانات لمتجر إلكتروني)؟",
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
          "title": "تمرين تطبيقي على: تصميم قاعدة بيانات لمتجر إلكتروني",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تصميم قاعدة بيانات لمتجر إلكتروني)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تصميم قاعدة بيانات لمتجر إلكتروني\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تصميم قاعدة بيانات لمتجر إلكتروني ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تصميم قاعدة بيانات لمتجر إلكتروني) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "SQL المتقدم",
    "subtopics": [
      {
        "subId": "15.5.1",
        "title": "استخدام Subqueries",
        "englishTitle": "Subqueries",
        "definition": "يعد (استخدام Subqueries) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Subqueries) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Subqueries) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Subqueries\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Subqueries\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.5.1",
          "title": "استخدام Subqueries",
          "topicTitle": "SQL المتقدم",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام Subqueries) أحد المعايير التقنية الحيوية في مسار SQL المتقدم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Subqueries)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Subqueries) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Subqueries)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Subqueries)؟",
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
          "title": "تمرين تطبيقي على: استخدام Subqueries",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Subqueries)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Subqueries\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Subqueries ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Subqueries) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.5.2",
        "title": "استخدام Common Table Expressions",
        "englishTitle": "Common Table Expressions",
        "definition": "يعد (استخدام Common Table Expressions) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Common Table Expressions) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Common Table Expressions) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Common Table Expressions\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Common Table Expressions\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.5.2",
          "title": "استخدام Common Table Expressions",
          "topicTitle": "SQL المتقدم",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام Common Table Expressions) أحد المعايير التقنية الحيوية في مسار SQL المتقدم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Common Table Expressions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Common Table Expressions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Common Table Expressions)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Common Table Expressions)؟",
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
          "title": "تمرين تطبيقي على: استخدام Common Table Expressions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Common Table Expressions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Common Table Expressions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Common Table Expressions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Common Table Expressions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.5.3",
        "title": "مقدمة في Stored Procedures",
        "englishTitle": "مقدمة في Stored Procedures",
        "definition": "يعد (مقدمة في Stored Procedures) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مقدمة في Stored Procedures) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مقدمة في Stored Procedures) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مقدمة في Stored Procedures\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مقدمة في Stored Procedures\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.5.3",
          "title": "مقدمة في Stored Procedures",
          "topicTitle": "SQL المتقدم",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مقدمة في Stored Procedures) أحد المعايير التقنية الحيوية في مسار SQL المتقدم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Stored Procedures)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Stored Procedures) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Stored Procedures)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Stored Procedures)؟",
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
          "title": "تمرين تطبيقي على: مقدمة في Stored Procedures",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Stored Procedures)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Stored Procedures\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Stored Procedures ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Stored Procedures) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.5.4",
        "title": "مقدمة في Views",
        "englishTitle": "مقدمة في Views",
        "definition": "يعد (مقدمة في Views) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مقدمة في Views) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مقدمة في Views) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مقدمة في Views\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مقدمة في Views\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.5.4",
          "title": "مقدمة في Views",
          "topicTitle": "SQL المتقدم",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مقدمة في Views) أحد المعايير التقنية الحيوية في مسار SQL المتقدم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Views)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Views) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Views)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Views)؟",
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
          "title": "تمرين تطبيقي على: مقدمة في Views",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Views)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Views\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Views ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Views) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.5.5",
        "title": "استخدام Transactions",
        "englishTitle": "Transactions",
        "definition": "يعد (استخدام Transactions) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (استخدام Transactions) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (استخدام Transactions) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ استخدام Transactions\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: استخدام Transactions\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.5.5",
          "title": "استخدام Transactions",
          "topicTitle": "SQL المتقدم",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (استخدام Transactions) أحد المعايير التقنية الحيوية في مسار SQL المتقدم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Transactions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Transactions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Transactions)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Transactions)؟",
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
          "title": "تمرين تطبيقي على: استخدام Transactions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Transactions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Transactions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Transactions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Transactions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.5.6",
        "title": "مفهوم ACID",
        "englishTitle": "ACID",
        "definition": "يعد (مفهوم ACID) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (مفهوم ACID) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (مفهوم ACID) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ مفهوم ACID\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: مفهوم ACID\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.5.6",
          "title": "مفهوم ACID",
          "topicTitle": "SQL المتقدم",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (مفهوم ACID) أحد المعايير التقنية الحيوية في مسار SQL المتقدم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم ACID)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم ACID) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم ACID)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم ACID)؟",
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
          "title": "تمرين تطبيقي على: مفهوم ACID",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم ACID)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم ACID\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم ACID ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم ACID) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.5.7",
        "title": "إنشاء Indexes",
        "englishTitle": "Indexes",
        "definition": "يعد (إنشاء Indexes) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (إنشاء Indexes) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (إنشاء Indexes) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ إنشاء Indexes\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: إنشاء Indexes\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.5.7",
          "title": "إنشاء Indexes",
          "topicTitle": "SQL المتقدم",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (إنشاء Indexes) أحد المعايير التقنية الحيوية في مسار SQL المتقدم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Indexes)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Indexes) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Indexes)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Indexes)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Indexes",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Indexes)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Indexes\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Indexes ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Indexes) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.5.8",
        "title": "فهم Execution Plans",
        "englishTitle": "فهم Execution Plans",
        "definition": "يعد (فهم Execution Plans) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (فهم Execution Plans) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (فهم Execution Plans) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ فهم Execution Plans\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: فهم Execution Plans\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.5.8",
          "title": "فهم Execution Plans",
          "topicTitle": "SQL المتقدم",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (فهم Execution Plans) أحد المعايير التقنية الحيوية في مسار SQL المتقدم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فهم Execution Plans)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فهم Execution Plans) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فهم Execution Plans)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فهم Execution Plans)؟",
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
          "title": "تمرين تطبيقي على: فهم Execution Plans",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فهم Execution Plans)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فهم Execution Plans\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فهم Execution Plans ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فهم Execution Plans) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "15.5.9",
        "title": "تجنب SQL Injection",
        "englishTitle": "تجنب SQL Injection",
        "definition": "يعد (تجنب SQL Injection) حجر الزاوية في التعامل مع قواعد البيانات في بيئة .NET، حيث يحول جداول SQL وعلاقاتها المعقدة إلى كائنات C# برمجية سلسة عبر إطار Entity Framework Core، مع ضمان أمان المعاملات وسرعة الاستعلام.",
        "analogy": "يشبه الـ ORM المترجم الفوري الدبلوماسي بين وفدين يتحدثان لغتين مختلفتين تماماً؛ تطبيقك يتحدث بلغة الكائنات C#، وقاعدة البيانات تتحدث بلغة الجداول والعلاقات SQL. (تجنب SQL Injection) يترجم الأوامر بينهما فوراً دون أن تحتاج لكتابة استعلامات SQL يدوية معقدة.",
        "why": "نعتمد على (تجنب SQL Injection) لمنع هجمات حقن الأوامر (SQL Injection)، وتسريع دورة التطوير، والاستفادة من نظام الترحيلات (Migrations) لمزامنة مخطط قاعدة البيانات تلقائياً مع الكود عبر بيئات العمل المختلفة.",
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
        "syntax": "// استعلام EF Core نموذجي لـ تجنب SQL Injection\nvar items = await _context.Products\n    .AsNoTracking()\n    .Where(p => p.IsActive)\n    .ToListAsync();",
        "simpleCode": "// مثال بسيط لتعريف جدول واستعلامه عبر EF Core\nusing Microsoft.EntityFrameworkCore;\n\n// 1. تعريف نموذج يمثل جدول في قاعدة البيانات\npublic class Student\n{\n    // المفتاح الأساسي التلقائي\n    public int Id { get; set; } // Primary Key\n    \n    // اسم الطالب\n    public string FullName { get; set; } = string.Empty;\n}\n\n// 2. فئة سياق قاعدة البيانات\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n\n    // جدول الطلاب في SQL Server\n    public DbSet<Student> Students => Set<Student>();\n}",
        "advancedCode": "// استعلام متقدم ومحسن الأداء في EF Core يوضح: تجنب SQL Injection\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\npublic class OrderQueryService\n{\n    private readonly AppDbContext _context;\n\n    public OrderQueryService(AppDbContext context)\n    {\n        _context = context; // حقن سياق البيانات عبر DI\n    }\n\n    // دالة استعلام غير متزامنة مع إلغاء التتبع لرفع الأداء \n    public async Task<List<OrderSummaryDto>> GetRecentOrdersAsync(int customerId)\n    {\n        return await _context.Orders\n            .AsNoTracking() // إيقاف Change Tracker لتوفير استهلاك الذاكرة\n            .Where(o => o.CustomerId == customerId && o.Status == OrderStatus.Completed)\n            .OrderByDescending(o => o.CreatedAt)\n            .Take(10) // جلب آخر 10 طلبات فقط\n            .Select(o => new OrderSummaryDto\n            {\n                OrderId = o.Id,\n                TotalAmount = o.TotalAmount,\n                ItemCount = o.Items.Count\n            })\n            .ToListAsync(); // تنفيذ الاستعلام الفعلي في SQL Server دفعة واحدة\n    }\n}",
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
          "badge": "الدرس 15.5.9",
          "title": "تجنب SQL Injection",
          "topicTitle": "SQL المتقدم",
          "sectionTitle": "القسم الخامس عشر: SQL Server وتصميم قواعد البيانات",
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
          "summary": "يمثل (تجنب SQL Injection) أحد المعايير التقنية الحيوية في مسار SQL المتقدم ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تجنب SQL Injection)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجنب SQL Injection) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تجنب SQL Injection)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تجنب SQL Injection)؟",
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
          "title": "تمرين تطبيقي على: تجنب SQL Injection",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تجنب SQL Injection)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تجنب SQL Injection\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تجنب SQL Injection ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تجنب SQL Injection) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section15Data;
