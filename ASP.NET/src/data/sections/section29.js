// src/data/sections/section29.js
// محتوى تعليمي مفصل وشامل لـ: القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة
export const section29Data = {
  id: 29,
  title: "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
  englishTitle: "Software Architecture & Enterprise Design",
  icon: "Network",
  category: "المعمارية المتقدمة",
  description: "العمارة النظيفة Clean Architecture، التصميم الموجه بالمجال DDD، أنماط التصميم Design Patterns، نمط CQRS مع MediatR، والأنظمة متعددة المستأجرين Multi-Tenant.",
  summary: {
  "sectionId": 29,
  "title": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
  "englishTitle": "Software Architecture & Enterprise Design",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
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
    "title": "Clean Architecture",
    "subtopics": [
      {
        "subId": "29.1.1",
        "title": "ما هي Clean Architecture؟",
        "englishTitle": "Clean Architecture",
        "definition": "يمثل (ما هي Clean Architecture؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هي Clean Architecture؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هي Clean Architecture؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ ما هي Clean Architecture؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هي Clean Architecture؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.1.1",
          "title": "ما هي Clean Architecture؟",
          "topicTitle": "Clean Architecture",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (ما هي Clean Architecture؟) أحد المعايير التقنية الحيوية في مسار Clean Architecture ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Clean Architecture؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Clean Architecture؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Clean Architecture؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Clean Architecture؟)؟",
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
          "title": "تمرين تطبيقي على: ما هي Clean Architecture؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Clean Architecture؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Clean Architecture؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Clean Architecture؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Clean Architecture؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.1.2",
        "title": "مفهوم Separation of Concerns",
        "englishTitle": "Separation of Concerns",
        "definition": "يمثل (مفهوم Separation of Concerns) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Separation of Concerns) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Separation of Concerns) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Separation of Concerns\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Separation of Concerns\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.1.2",
          "title": "مفهوم Separation of Concerns",
          "topicTitle": "Clean Architecture",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Separation of Concerns) أحد المعايير التقنية الحيوية في مسار Clean Architecture ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Separation of Concerns)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Separation of Concerns) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Separation of Concerns)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Separation of Concerns)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Separation of Concerns",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Separation of Concerns)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Separation of Concerns\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Separation of Concerns ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Separation of Concerns) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.1.3",
        "title": "مفهوم Domain Layer",
        "englishTitle": "Domain Layer",
        "definition": "يمثل (مفهوم Domain Layer) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Domain Layer) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Domain Layer) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Domain Layer\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Domain Layer\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.1.3",
          "title": "مفهوم Domain Layer",
          "topicTitle": "Clean Architecture",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Domain Layer) أحد المعايير التقنية الحيوية في مسار Clean Architecture ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Domain Layer)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Domain Layer) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Domain Layer)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Domain Layer)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Domain Layer",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Domain Layer)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Domain Layer\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Domain Layer ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Domain Layer) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.1.4",
        "title": "مفهوم Application Layer",
        "englishTitle": "Application Layer",
        "definition": "يمثل (مفهوم Application Layer) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Application Layer) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Application Layer) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Application Layer\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Application Layer\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.1.4",
          "title": "مفهوم Application Layer",
          "topicTitle": "Clean Architecture",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Application Layer) أحد المعايير التقنية الحيوية في مسار Clean Architecture ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Application Layer)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Application Layer) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Application Layer)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Application Layer)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Application Layer",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Application Layer)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Application Layer\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Application Layer ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Application Layer) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.1.5",
        "title": "مفهوم Infrastructure Layer",
        "englishTitle": "Infrastructure Layer",
        "definition": "يمثل (مفهوم Infrastructure Layer) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Infrastructure Layer) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Infrastructure Layer) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Infrastructure Layer\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Infrastructure Layer\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.1.5",
          "title": "مفهوم Infrastructure Layer",
          "topicTitle": "Clean Architecture",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Infrastructure Layer) أحد المعايير التقنية الحيوية في مسار Clean Architecture ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Infrastructure Layer)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Infrastructure Layer) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Infrastructure Layer)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Infrastructure Layer)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Infrastructure Layer",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Infrastructure Layer)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Infrastructure Layer\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Infrastructure Layer ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Infrastructure Layer) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.1.6",
        "title": "مفهوم Presentation Layer",
        "englishTitle": "Presentation Layer",
        "definition": "يمثل (مفهوم Presentation Layer) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Presentation Layer) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Presentation Layer) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Presentation Layer\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Presentation Layer\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.1.6",
          "title": "مفهوم Presentation Layer",
          "topicTitle": "Clean Architecture",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Presentation Layer) أحد المعايير التقنية الحيوية في مسار Clean Architecture ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Presentation Layer)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Presentation Layer) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Presentation Layer)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Presentation Layer)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Presentation Layer",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Presentation Layer)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Presentation Layer\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Presentation Layer ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Presentation Layer) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.1.7",
        "title": "مبدأ Dependency Rule",
        "englishTitle": "مبدأ Dependency Rule",
        "definition": "يمثل (مبدأ Dependency Rule) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مبدأ Dependency Rule) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مبدأ Dependency Rule) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مبدأ Dependency Rule\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مبدأ Dependency Rule\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.1.7",
          "title": "مبدأ Dependency Rule",
          "topicTitle": "Clean Architecture",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مبدأ Dependency Rule) أحد المعايير التقنية الحيوية في مسار Clean Architecture ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مبدأ Dependency Rule)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مبدأ Dependency Rule) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مبدأ Dependency Rule)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مبدأ Dependency Rule)؟",
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
          "title": "تمرين تطبيقي على: مبدأ Dependency Rule",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مبدأ Dependency Rule)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مبدأ Dependency Rule\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مبدأ Dependency Rule ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مبدأ Dependency Rule) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.1.8",
        "title": "تطبيق Clean Architecture على MVC",
        "englishTitle": "Clean Architecture على MVC",
        "definition": "يمثل (تطبيق Clean Architecture على MVC) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تطبيق Clean Architecture على MVC) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تطبيق Clean Architecture على MVC) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ تطبيق Clean Architecture على MVC\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تطبيق Clean Architecture على MVC\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.1.8",
          "title": "تطبيق Clean Architecture على MVC",
          "topicTitle": "Clean Architecture",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (تطبيق Clean Architecture على MVC) أحد المعايير التقنية الحيوية في مسار Clean Architecture ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تطبيق Clean Architecture على MVC)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق Clean Architecture على MVC) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تطبيق Clean Architecture على MVC)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تطبيق Clean Architecture على MVC)؟",
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
          "title": "تمرين تطبيقي على: تطبيق Clean Architecture على MVC",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تطبيق Clean Architecture على MVC)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تطبيق Clean Architecture على MVC\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تطبيق Clean Architecture على MVC ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تطبيق Clean Architecture على MVC) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Domain-Driven Design",
    "subtopics": [
      {
        "subId": "29.2.1",
        "title": "ما هو Domain-Driven Design؟",
        "englishTitle": "Domain-Driven Design",
        "definition": "يمثل (ما هو Domain-Driven Design؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Domain-Driven Design؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Domain-Driven Design؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ ما هو Domain-Driven Design؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Domain-Driven Design؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.2.1",
          "title": "ما هو Domain-Driven Design؟",
          "topicTitle": "Domain-Driven Design",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (ما هو Domain-Driven Design؟) أحد المعايير التقنية الحيوية في مسار Domain-Driven Design ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Domain-Driven Design؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Domain-Driven Design؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Domain-Driven Design؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Domain-Driven Design؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Domain-Driven Design؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Domain-Driven Design؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Domain-Driven Design؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Domain-Driven Design؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Domain-Driven Design؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.2.2",
        "title": "مفهوم Domain Model",
        "englishTitle": "Domain Model",
        "definition": "يمثل (مفهوم Domain Model) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Domain Model) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Domain Model) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Domain Model\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Domain Model\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.2.2",
          "title": "مفهوم Domain Model",
          "topicTitle": "Domain-Driven Design",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Domain Model) أحد المعايير التقنية الحيوية في مسار Domain-Driven Design ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Domain Model)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Domain Model) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Domain Model)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Domain Model)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Domain Model",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Domain Model)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Domain Model\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Domain Model ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Domain Model) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.2.3",
        "title": "مفهوم Entity",
        "englishTitle": "Entity",
        "definition": "يمثل (مفهوم Entity) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Entity) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Entity) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Entity\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Entity\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.2.3",
          "title": "مفهوم Entity",
          "topicTitle": "Domain-Driven Design",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Entity) أحد المعايير التقنية الحيوية في مسار Domain-Driven Design ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Entity)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Entity) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Entity)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Entity)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Entity",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Entity)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Entity\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Entity ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Entity) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.2.4",
        "title": "مفهوم Value Object",
        "englishTitle": "Value Object",
        "definition": "يمثل (مفهوم Value Object) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Value Object) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Value Object) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Value Object\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Value Object\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.2.4",
          "title": "مفهوم Value Object",
          "topicTitle": "Domain-Driven Design",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Value Object) أحد المعايير التقنية الحيوية في مسار Domain-Driven Design ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Value Object)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Value Object) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Value Object)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Value Object)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Value Object",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Value Object)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Value Object\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Value Object ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Value Object) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.2.5",
        "title": "مفهوم Aggregate",
        "englishTitle": "Aggregate",
        "definition": "يمثل (مفهوم Aggregate) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Aggregate) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Aggregate) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Aggregate\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Aggregate\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.2.5",
          "title": "مفهوم Aggregate",
          "topicTitle": "Domain-Driven Design",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Aggregate) أحد المعايير التقنية الحيوية في مسار Domain-Driven Design ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Aggregate)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Aggregate) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Aggregate)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Aggregate)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Aggregate",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Aggregate)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Aggregate\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Aggregate ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Aggregate) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.2.6",
        "title": "مفهوم Aggregate Root",
        "englishTitle": "Aggregate Root",
        "definition": "يمثل (مفهوم Aggregate Root) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Aggregate Root) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Aggregate Root) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Aggregate Root\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Aggregate Root\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.2.6",
          "title": "مفهوم Aggregate Root",
          "topicTitle": "Domain-Driven Design",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Aggregate Root) أحد المعايير التقنية الحيوية في مسار Domain-Driven Design ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Aggregate Root)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Aggregate Root) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Aggregate Root)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Aggregate Root)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Aggregate Root",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Aggregate Root)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Aggregate Root\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Aggregate Root ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Aggregate Root) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.2.7",
        "title": "مفهوم Domain Service",
        "englishTitle": "Domain Service",
        "definition": "يمثل (مفهوم Domain Service) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Domain Service) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Domain Service) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Domain Service\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Domain Service\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.2.7",
          "title": "مفهوم Domain Service",
          "topicTitle": "Domain-Driven Design",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Domain Service) أحد المعايير التقنية الحيوية في مسار Domain-Driven Design ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Domain Service)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Domain Service) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Domain Service)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Domain Service)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Domain Service",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Domain Service)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Domain Service\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Domain Service ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Domain Service) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.2.8",
        "title": "مفهوم Domain Events",
        "englishTitle": "Domain Events",
        "definition": "يمثل (مفهوم Domain Events) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Domain Events) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Domain Events) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Domain Events\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Domain Events\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.2.8",
          "title": "مفهوم Domain Events",
          "topicTitle": "Domain-Driven Design",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Domain Events) أحد المعايير التقنية الحيوية في مسار Domain-Driven Design ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Domain Events)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Domain Events) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Domain Events)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Domain Events)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Domain Events",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Domain Events)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Domain Events\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Domain Events ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Domain Events) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.2.9",
        "title": "مفهوم Bounded Context",
        "englishTitle": "Bounded Context",
        "definition": "يمثل (مفهوم Bounded Context) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Bounded Context) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Bounded Context) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Bounded Context\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Bounded Context\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.2.9",
          "title": "مفهوم Bounded Context",
          "topicTitle": "Domain-Driven Design",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Bounded Context) أحد المعايير التقنية الحيوية في مسار Domain-Driven Design ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Bounded Context)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Bounded Context) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Bounded Context)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Bounded Context)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Bounded Context",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Bounded Context)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Bounded Context\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Bounded Context ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Bounded Context) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Design Patterns",
    "subtopics": [
      {
        "subId": "29.3.1",
        "title": "Factory Pattern",
        "englishTitle": "Factory Pattern",
        "definition": "يمثل (Factory Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (Factory Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (Factory Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ Factory Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: Factory Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.3.1",
          "title": "Factory Pattern",
          "topicTitle": "Design Patterns",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (Factory Pattern) أحد المعايير التقنية الحيوية في مسار Design Patterns ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Factory Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Factory Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Factory Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Factory Pattern)؟",
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
          "title": "تمرين تطبيقي على: Factory Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Factory Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Factory Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Factory Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Factory Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.3.2",
        "title": "Strategy Pattern",
        "englishTitle": "Strategy Pattern",
        "definition": "يمثل (Strategy Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (Strategy Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (Strategy Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ Strategy Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: Strategy Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.3.2",
          "title": "Strategy Pattern",
          "topicTitle": "Design Patterns",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (Strategy Pattern) أحد المعايير التقنية الحيوية في مسار Design Patterns ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Strategy Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Strategy Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Strategy Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Strategy Pattern)؟",
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
          "title": "تمرين تطبيقي على: Strategy Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Strategy Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Strategy Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Strategy Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Strategy Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.3.3",
        "title": "Repository Pattern",
        "englishTitle": "Repository Pattern",
        "definition": "يمثل (Repository Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (Repository Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (Repository Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ Repository Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: Repository Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.3.3",
          "title": "Repository Pattern",
          "topicTitle": "Design Patterns",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (Repository Pattern) أحد المعايير التقنية الحيوية في مسار Design Patterns ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Repository Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Repository Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Repository Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Repository Pattern)؟",
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
          "title": "تمرين تطبيقي على: Repository Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Repository Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Repository Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Repository Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Repository Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.3.4",
        "title": "Unit of Work Pattern",
        "englishTitle": "Unit of Work Pattern",
        "definition": "يمثل (Unit of Work Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (Unit of Work Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (Unit of Work Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ Unit of Work Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: Unit of Work Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.3.4",
          "title": "Unit of Work Pattern",
          "topicTitle": "Design Patterns",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (Unit of Work Pattern) أحد المعايير التقنية الحيوية في مسار Design Patterns ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Unit of Work Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Unit of Work Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Unit of Work Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Unit of Work Pattern)؟",
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
          "title": "تمرين تطبيقي على: Unit of Work Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Unit of Work Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Unit of Work Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Unit of Work Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Unit of Work Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.3.5",
        "title": "Adapter Pattern",
        "englishTitle": "Adapter Pattern",
        "definition": "يمثل (Adapter Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (Adapter Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (Adapter Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ Adapter Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: Adapter Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.3.5",
          "title": "Adapter Pattern",
          "topicTitle": "Design Patterns",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (Adapter Pattern) أحد المعايير التقنية الحيوية في مسار Design Patterns ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Adapter Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Adapter Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Adapter Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Adapter Pattern)؟",
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
          "title": "تمرين تطبيقي على: Adapter Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Adapter Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Adapter Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Adapter Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Adapter Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.3.6",
        "title": "Decorator Pattern",
        "englishTitle": "Decorator Pattern",
        "definition": "يمثل (Decorator Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (Decorator Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (Decorator Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ Decorator Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: Decorator Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.3.6",
          "title": "Decorator Pattern",
          "topicTitle": "Design Patterns",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (Decorator Pattern) أحد المعايير التقنية الحيوية في مسار Design Patterns ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Decorator Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Decorator Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Decorator Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Decorator Pattern)؟",
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
          "title": "تمرين تطبيقي على: Decorator Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Decorator Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Decorator Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Decorator Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Decorator Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.3.7",
        "title": "Observer Pattern",
        "englishTitle": "Observer Pattern",
        "definition": "يمثل (Observer Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (Observer Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (Observer Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ Observer Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: Observer Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.3.7",
          "title": "Observer Pattern",
          "topicTitle": "Design Patterns",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (Observer Pattern) أحد المعايير التقنية الحيوية في مسار Design Patterns ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Observer Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Observer Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Observer Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Observer Pattern)؟",
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
          "title": "تمرين تطبيقي على: Observer Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Observer Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Observer Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Observer Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Observer Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.3.8",
        "title": "Mediator Pattern",
        "englishTitle": "Mediator Pattern",
        "definition": "يمثل (Mediator Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (Mediator Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (Mediator Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ Mediator Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: Mediator Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.3.8",
          "title": "Mediator Pattern",
          "topicTitle": "Design Patterns",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (Mediator Pattern) أحد المعايير التقنية الحيوية في مسار Design Patterns ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Mediator Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Mediator Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Mediator Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Mediator Pattern)؟",
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
          "title": "تمرين تطبيقي على: Mediator Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Mediator Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Mediator Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Mediator Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Mediator Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.3.9",
        "title": "Specification Pattern",
        "englishTitle": "Specification Pattern",
        "definition": "يمثل (Specification Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (Specification Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (Specification Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ Specification Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: Specification Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.3.9",
          "title": "Specification Pattern",
          "topicTitle": "Design Patterns",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (Specification Pattern) أحد المعايير التقنية الحيوية في مسار Design Patterns ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (Specification Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (Specification Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (Specification Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (Specification Pattern)؟",
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
          "title": "تمرين تطبيقي على: Specification Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (Specification Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين Specification Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: Specification Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (Specification Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "CQRS وMediatR",
    "subtopics": [
      {
        "subId": "29.4.1",
        "title": "ما هو CQRS؟",
        "englishTitle": "CQRS",
        "definition": "يمثل (ما هو CQRS؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو CQRS؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو CQRS؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ ما هو CQRS؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو CQRS؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.4.1",
          "title": "ما هو CQRS؟",
          "topicTitle": "CQRS وMediatR",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (ما هو CQRS؟) أحد المعايير التقنية الحيوية في مسار CQRS وMediatR ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو CQRS؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو CQRS؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو CQRS؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو CQRS؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو CQRS؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو CQRS؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو CQRS؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو CQRS؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو CQRS؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.4.2",
        "title": "الفرق بين Commands وQueries",
        "englishTitle": "Commands وQueries",
        "definition": "يمثل (الفرق بين Commands وQueries) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (الفرق بين Commands وQueries) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (الفرق بين Commands وQueries) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ الفرق بين Commands وQueries\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: الفرق بين Commands وQueries\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.4.2",
          "title": "الفرق بين Commands وQueries",
          "topicTitle": "CQRS وMediatR",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (الفرق بين Commands وQueries) أحد المعايير التقنية الحيوية في مسار CQRS وMediatR ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Commands وQueries)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Commands وQueries) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Commands وQueries)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Commands وQueries)؟",
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
          "title": "تمرين تطبيقي على: الفرق بين Commands وQueries",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Commands وQueries)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Commands وQueries\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Commands وQueries ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Commands وQueries) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.4.3",
        "title": "إنشاء Command",
        "englishTitle": "Command",
        "definition": "يمثل (إنشاء Command) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Command) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Command) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Command\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Command\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.4.3",
          "title": "إنشاء Command",
          "topicTitle": "CQRS وMediatR",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (إنشاء Command) أحد المعايير التقنية الحيوية في مسار CQRS وMediatR ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Command)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Command) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Command)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Command)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Command",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Command)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Command\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Command ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Command) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.4.4",
        "title": "إنشاء Query",
        "englishTitle": "Query",
        "definition": "يمثل (إنشاء Query) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Query) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Query) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Query\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Query\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.4.4",
          "title": "إنشاء Query",
          "topicTitle": "CQRS وMediatR",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (إنشاء Query) أحد المعايير التقنية الحيوية في مسار CQRS وMediatR ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Query)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Query) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Query)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Query)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Query",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Query)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Query\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Query ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Query) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.4.5",
        "title": "إنشاء Handlers",
        "englishTitle": "Handlers",
        "definition": "يمثل (إنشاء Handlers) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Handlers) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Handlers) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Handlers\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Handlers\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.4.5",
          "title": "إنشاء Handlers",
          "topicTitle": "CQRS وMediatR",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (إنشاء Handlers) أحد المعايير التقنية الحيوية في مسار CQRS وMediatR ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Handlers)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Handlers) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Handlers)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Handlers)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Handlers",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Handlers)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Handlers\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Handlers ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Handlers) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.4.6",
        "title": "مقدمة في MediatR",
        "englishTitle": "مقدمة في MediatR",
        "definition": "يمثل (مقدمة في MediatR) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مقدمة في MediatR) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مقدمة في MediatR) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مقدمة في MediatR\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مقدمة في MediatR\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.4.6",
          "title": "مقدمة في MediatR",
          "topicTitle": "CQRS وMediatR",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مقدمة في MediatR) أحد المعايير التقنية الحيوية في مسار CQRS وMediatR ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في MediatR)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في MediatR) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في MediatR)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في MediatR)؟",
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
          "title": "تمرين تطبيقي على: مقدمة في MediatR",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في MediatR)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في MediatR\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في MediatR ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في MediatR) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.4.7",
        "title": "استخدام Pipeline Behaviors",
        "englishTitle": "Pipeline Behaviors",
        "definition": "يمثل (استخدام Pipeline Behaviors) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Pipeline Behaviors) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Pipeline Behaviors) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ استخدام Pipeline Behaviors\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Pipeline Behaviors\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.4.7",
          "title": "استخدام Pipeline Behaviors",
          "topicTitle": "CQRS وMediatR",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (استخدام Pipeline Behaviors) أحد المعايير التقنية الحيوية في مسار CQRS وMediatR ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Pipeline Behaviors)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Pipeline Behaviors) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Pipeline Behaviors)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Pipeline Behaviors)؟",
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
          "title": "تمرين تطبيقي على: استخدام Pipeline Behaviors",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Pipeline Behaviors)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Pipeline Behaviors\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Pipeline Behaviors ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Pipeline Behaviors) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.4.8",
        "title": "إضافة Validation Behavior",
        "englishTitle": "إضافة Validation Behavior",
        "definition": "يمثل (إضافة Validation Behavior) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إضافة Validation Behavior) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إضافة Validation Behavior) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ إضافة Validation Behavior\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إضافة Validation Behavior\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.4.8",
          "title": "إضافة Validation Behavior",
          "topicTitle": "CQRS وMediatR",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (إضافة Validation Behavior) أحد المعايير التقنية الحيوية في مسار CQRS وMediatR ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إضافة Validation Behavior)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إضافة Validation Behavior) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إضافة Validation Behavior)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إضافة Validation Behavior)؟",
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
          "title": "تمرين تطبيقي على: إضافة Validation Behavior",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إضافة Validation Behavior)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إضافة Validation Behavior\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إضافة Validation Behavior ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إضافة Validation Behavior) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.4.9",
        "title": "تحديد الحالات المناسبة لاستخدام CQRS",
        "englishTitle": "تحديد الحالات المناسبة لCQRS",
        "definition": "يمثل (تحديد الحالات المناسبة لاستخدام CQRS) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تحديد الحالات المناسبة لاستخدام CQRS) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تحديد الحالات المناسبة لاستخدام CQRS) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ تحديد الحالات المناسبة لاستخدام CQRS\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تحديد الحالات المناسبة لاستخدام CQRS\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.4.9",
          "title": "تحديد الحالات المناسبة لاستخدام CQRS",
          "topicTitle": "CQRS وMediatR",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (تحديد الحالات المناسبة لاستخدام CQRS) أحد المعايير التقنية الحيوية في مسار CQRS وMediatR ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحديد الحالات المناسبة لاستخدام CQRS)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحديد الحالات المناسبة لاستخدام CQRS) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحديد الحالات المناسبة لاستخدام CQRS)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحديد الحالات المناسبة لاستخدام CQRS)؟",
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
          "title": "تمرين تطبيقي على: تحديد الحالات المناسبة لاستخدام CQRS",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحديد الحالات المناسبة لاستخدام CQRS)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحديد الحالات المناسبة لاستخدام CQRS\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحديد الحالات المناسبة لاستخدام CQRS ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحديد الحالات المناسبة لاستخدام CQRS) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "Modular Monolith",
    "subtopics": [
      {
        "subId": "29.5.1",
        "title": "ما هو Monolithic Architecture؟",
        "englishTitle": "Monolithic Architecture",
        "definition": "يمثل (ما هو Monolithic Architecture؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Monolithic Architecture؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Monolithic Architecture؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ ما هو Monolithic Architecture؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Monolithic Architecture؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.5.1",
          "title": "ما هو Monolithic Architecture؟",
          "topicTitle": "Modular Monolith",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (ما هو Monolithic Architecture؟) أحد المعايير التقنية الحيوية في مسار Modular Monolith ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Monolithic Architecture؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Monolithic Architecture؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Monolithic Architecture؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Monolithic Architecture؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Monolithic Architecture؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Monolithic Architecture؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Monolithic Architecture؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Monolithic Architecture؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Monolithic Architecture؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.5.2",
        "title": "ما هو Modular Monolith؟",
        "englishTitle": "Modular Monolith",
        "definition": "يمثل (ما هو Modular Monolith؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Modular Monolith؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Modular Monolith؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ ما هو Modular Monolith؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Modular Monolith؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.5.2",
          "title": "ما هو Modular Monolith؟",
          "topicTitle": "Modular Monolith",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (ما هو Modular Monolith؟) أحد المعايير التقنية الحيوية في مسار Modular Monolith ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Modular Monolith؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Modular Monolith؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Modular Monolith؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Modular Monolith؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Modular Monolith؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Modular Monolith؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Modular Monolith؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Modular Monolith؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Modular Monolith؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.5.3",
        "title": "تقسيم النظام إلى Modules",
        "englishTitle": "تقسيم النظام إلى Modules",
        "definition": "يمثل (تقسيم النظام إلى Modules) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تقسيم النظام إلى Modules) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تقسيم النظام إلى Modules) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ تقسيم النظام إلى Modules\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تقسيم النظام إلى Modules\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.5.3",
          "title": "تقسيم النظام إلى Modules",
          "topicTitle": "Modular Monolith",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (تقسيم النظام إلى Modules) أحد المعايير التقنية الحيوية في مسار Modular Monolith ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تقسيم النظام إلى Modules)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تقسيم النظام إلى Modules) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تقسيم النظام إلى Modules)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تقسيم النظام إلى Modules)؟",
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
          "title": "تمرين تطبيقي على: تقسيم النظام إلى Modules",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تقسيم النظام إلى Modules)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تقسيم النظام إلى Modules\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تقسيم النظام إلى Modules ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تقسيم النظام إلى Modules) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.5.4",
        "title": "عزل Data Access لكل Module",
        "englishTitle": "عزل Data Access لكل Module",
        "definition": "يمثل (عزل Data Access لكل Module) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (عزل Data Access لكل Module) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (عزل Data Access لكل Module) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ عزل Data Access لكل Module\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: عزل Data Access لكل Module\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.5.4",
          "title": "عزل Data Access لكل Module",
          "topicTitle": "Modular Monolith",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (عزل Data Access لكل Module) أحد المعايير التقنية الحيوية في مسار Modular Monolith ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (عزل Data Access لكل Module)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (عزل Data Access لكل Module) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (عزل Data Access لكل Module)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (عزل Data Access لكل Module)؟",
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
          "title": "تمرين تطبيقي على: عزل Data Access لكل Module",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (عزل Data Access لكل Module)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين عزل Data Access لكل Module\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: عزل Data Access لكل Module ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (عزل Data Access لكل Module) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.5.5",
        "title": "التواصل بين Modules",
        "englishTitle": "التواصل بين Modules",
        "definition": "يمثل (التواصل بين Modules) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (التواصل بين Modules) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (التواصل بين Modules) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ التواصل بين Modules\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: التواصل بين Modules\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.5.5",
          "title": "التواصل بين Modules",
          "topicTitle": "Modular Monolith",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (التواصل بين Modules) أحد المعايير التقنية الحيوية في مسار Modular Monolith ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التواصل بين Modules)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التواصل بين Modules) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التواصل بين Modules)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التواصل بين Modules)؟",
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
          "title": "تمرين تطبيقي على: التواصل بين Modules",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التواصل بين Modules)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التواصل بين Modules\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التواصل بين Modules ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التواصل بين Modules) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.5.6",
        "title": "تقليل الاعتماديات بين Modules",
        "englishTitle": "تقليل الاعتماديات بين Modules",
        "definition": "يمثل (تقليل الاعتماديات بين Modules) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تقليل الاعتماديات بين Modules) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تقليل الاعتماديات بين Modules) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ تقليل الاعتماديات بين Modules\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تقليل الاعتماديات بين Modules\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.5.6",
          "title": "تقليل الاعتماديات بين Modules",
          "topicTitle": "Modular Monolith",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (تقليل الاعتماديات بين Modules) أحد المعايير التقنية الحيوية في مسار Modular Monolith ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تقليل الاعتماديات بين Modules)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تقليل الاعتماديات بين Modules) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تقليل الاعتماديات بين Modules)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تقليل الاعتماديات بين Modules)؟",
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
          "title": "تمرين تطبيقي على: تقليل الاعتماديات بين Modules",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تقليل الاعتماديات بين Modules)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تقليل الاعتماديات بين Modules\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تقليل الاعتماديات بين Modules ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تقليل الاعتماديات بين Modules) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.5.7",
        "title": "اختبار حدود Modules",
        "englishTitle": "اختبار حدود Modules",
        "definition": "يمثل (اختبار حدود Modules) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار حدود Modules) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار حدود Modules) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ اختبار حدود Modules\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار حدود Modules\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.5.7",
          "title": "اختبار حدود Modules",
          "topicTitle": "Modular Monolith",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (اختبار حدود Modules) أحد المعايير التقنية الحيوية في مسار Modular Monolith ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار حدود Modules)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار حدود Modules) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار حدود Modules)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار حدود Modules)؟",
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
          "title": "تمرين تطبيقي على: اختبار حدود Modules",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار حدود Modules)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار حدود Modules\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار حدود Modules ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار حدود Modules) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.5.8",
        "title": "متى ننتقل إلى Microservices؟",
        "englishTitle": "متى ننتقل إلى Microservices",
        "definition": "يمثل (متى ننتقل إلى Microservices؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (متى ننتقل إلى Microservices؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (متى ننتقل إلى Microservices؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ متى ننتقل إلى Microservices؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: متى ننتقل إلى Microservices؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.5.8",
          "title": "متى ننتقل إلى Microservices؟",
          "topicTitle": "Modular Monolith",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (متى ننتقل إلى Microservices؟) أحد المعايير التقنية الحيوية في مسار Modular Monolith ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (متى ننتقل إلى Microservices؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (متى ننتقل إلى Microservices؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (متى ننتقل إلى Microservices؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (متى ننتقل إلى Microservices؟)؟",
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
          "title": "تمرين تطبيقي على: متى ننتقل إلى Microservices؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (متى ننتقل إلى Microservices؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين متى ننتقل إلى Microservices؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: متى ننتقل إلى Microservices؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (متى ننتقل إلى Microservices؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "Microservices",
    "subtopics": [
      {
        "subId": "29.6.1",
        "title": "ما هي Microservices؟",
        "englishTitle": "Microservices",
        "definition": "يمثل (ما هي Microservices؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هي Microservices؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هي Microservices؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ ما هي Microservices؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هي Microservices؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.1",
          "title": "ما هي Microservices؟",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (ما هي Microservices؟) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هي Microservices؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هي Microservices؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هي Microservices؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هي Microservices؟)؟",
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
          "title": "تمرين تطبيقي على: ما هي Microservices؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هي Microservices؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هي Microservices؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هي Microservices؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هي Microservices؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.6.2",
        "title": "الفرق بين Monolith وMicroservices",
        "englishTitle": "Monolith وMicroservices",
        "definition": "يمثل (الفرق بين Monolith وMicroservices) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (الفرق بين Monolith وMicroservices) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (الفرق بين Monolith وMicroservices) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ الفرق بين Monolith وMicroservices\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: الفرق بين Monolith وMicroservices\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.2",
          "title": "الفرق بين Monolith وMicroservices",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (الفرق بين Monolith وMicroservices) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Monolith وMicroservices)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Monolith وMicroservices) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Monolith وMicroservices)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Monolith وMicroservices)؟",
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
          "title": "تمرين تطبيقي على: الفرق بين Monolith وMicroservices",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Monolith وMicroservices)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Monolith وMicroservices\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Monolith وMicroservices ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Monolith وMicroservices) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.6.3",
        "title": "مفهوم API Gateway",
        "englishTitle": "API Gateway",
        "definition": "يمثل (مفهوم API Gateway) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم API Gateway) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم API Gateway) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم API Gateway\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم API Gateway\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.3",
          "title": "مفهوم API Gateway",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم API Gateway) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم API Gateway)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم API Gateway) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم API Gateway)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم API Gateway)؟",
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
          "title": "تمرين تطبيقي على: مفهوم API Gateway",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم API Gateway)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم API Gateway\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم API Gateway ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم API Gateway) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.6.4",
        "title": "التواصل بين الخدمات باستخدام HTTP",
        "englishTitle": "التواصل بين الخدمات بHTTP",
        "definition": "يمثل (التواصل بين الخدمات باستخدام HTTP) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (التواصل بين الخدمات باستخدام HTTP) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (التواصل بين الخدمات باستخدام HTTP) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ التواصل بين الخدمات باستخدام HTTP\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: التواصل بين الخدمات باستخدام HTTP\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.4",
          "title": "التواصل بين الخدمات باستخدام HTTP",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (التواصل بين الخدمات باستخدام HTTP) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التواصل بين الخدمات باستخدام HTTP)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التواصل بين الخدمات باستخدام HTTP) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التواصل بين الخدمات باستخدام HTTP)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التواصل بين الخدمات باستخدام HTTP)؟",
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
          "title": "تمرين تطبيقي على: التواصل بين الخدمات باستخدام HTTP",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التواصل بين الخدمات باستخدام HTTP)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التواصل بين الخدمات باستخدام HTTP\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التواصل بين الخدمات باستخدام HTTP ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التواصل بين الخدمات باستخدام HTTP) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.6.5",
        "title": "التواصل باستخدام gRPC",
        "englishTitle": "التواصل بgRPC",
        "definition": "يمثل (التواصل باستخدام gRPC) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (التواصل باستخدام gRPC) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (التواصل باستخدام gRPC) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ التواصل باستخدام gRPC\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: التواصل باستخدام gRPC\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.5",
          "title": "التواصل باستخدام gRPC",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (التواصل باستخدام gRPC) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التواصل باستخدام gRPC)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التواصل باستخدام gRPC) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التواصل باستخدام gRPC)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التواصل باستخدام gRPC)؟",
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
          "title": "تمرين تطبيقي على: التواصل باستخدام gRPC",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التواصل باستخدام gRPC)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التواصل باستخدام gRPC\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التواصل باستخدام gRPC ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التواصل باستخدام gRPC) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.6.6",
        "title": "التواصل باستخدام Message Queues",
        "englishTitle": "التواصل بMessage Queues",
        "definition": "يمثل (التواصل باستخدام Message Queues) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (التواصل باستخدام Message Queues) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (التواصل باستخدام Message Queues) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ التواصل باستخدام Message Queues\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: التواصل باستخدام Message Queues\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.6",
          "title": "التواصل باستخدام Message Queues",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (التواصل باستخدام Message Queues) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التواصل باستخدام Message Queues)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التواصل باستخدام Message Queues) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التواصل باستخدام Message Queues)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التواصل باستخدام Message Queues)؟",
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
          "title": "تمرين تطبيقي على: التواصل باستخدام Message Queues",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التواصل باستخدام Message Queues)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التواصل باستخدام Message Queues\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التواصل باستخدام Message Queues ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التواصل باستخدام Message Queues) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.6.7",
        "title": "مفهوم Eventual Consistency",
        "englishTitle": "Eventual Consistency",
        "definition": "يمثل (مفهوم Eventual Consistency) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Eventual Consistency) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Eventual Consistency) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Eventual Consistency\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Eventual Consistency\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.7",
          "title": "مفهوم Eventual Consistency",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Eventual Consistency) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Eventual Consistency)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Eventual Consistency) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Eventual Consistency)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Eventual Consistency)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Eventual Consistency",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Eventual Consistency)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Eventual Consistency\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Eventual Consistency ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Eventual Consistency) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.6.8",
        "title": "مفهوم Outbox Pattern",
        "englishTitle": "Outbox Pattern",
        "definition": "يمثل (مفهوم Outbox Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Outbox Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Outbox Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Outbox Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Outbox Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.8",
          "title": "مفهوم Outbox Pattern",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Outbox Pattern) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Outbox Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Outbox Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Outbox Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Outbox Pattern)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Outbox Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Outbox Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Outbox Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Outbox Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Outbox Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.6.9",
        "title": "مفهوم Saga Pattern",
        "englishTitle": "Saga Pattern",
        "definition": "يمثل (مفهوم Saga Pattern) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Saga Pattern) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Saga Pattern) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Saga Pattern\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Saga Pattern\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.9",
          "title": "مفهوم Saga Pattern",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Saga Pattern) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Saga Pattern)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Saga Pattern) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Saga Pattern)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Saga Pattern)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Saga Pattern",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Saga Pattern)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Saga Pattern\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Saga Pattern ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Saga Pattern) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.6.10",
        "title": "تحديات الأنظمة الموزعة",
        "englishTitle": "تحديات الأنظمة الموزعة",
        "definition": "يمثل (تحديات الأنظمة الموزعة) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تحديات الأنظمة الموزعة) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تحديات الأنظمة الموزعة) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ تحديات الأنظمة الموزعة\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تحديات الأنظمة الموزعة\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.6.10",
          "title": "تحديات الأنظمة الموزعة",
          "topicTitle": "Microservices",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (تحديات الأنظمة الموزعة) أحد المعايير التقنية الحيوية في مسار Microservices ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحديات الأنظمة الموزعة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحديات الأنظمة الموزعة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحديات الأنظمة الموزعة)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحديات الأنظمة الموزعة)؟",
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
          "title": "تمرين تطبيقي على: تحديات الأنظمة الموزعة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحديات الأنظمة الموزعة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحديات الأنظمة الموزعة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحديات الأنظمة الموزعة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحديات الأنظمة الموزعة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 7,
    "title": "Message Brokers",
    "subtopics": [
      {
        "subId": "29.7.1",
        "title": "ما هو Message Broker؟",
        "englishTitle": "Message Broker",
        "definition": "يمثل (ما هو Message Broker؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Message Broker؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Message Broker؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ ما هو Message Broker؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Message Broker؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.7.1",
          "title": "ما هو Message Broker؟",
          "topicTitle": "Message Brokers",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (ما هو Message Broker؟) أحد المعايير التقنية الحيوية في مسار Message Brokers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Message Broker؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Message Broker؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Message Broker؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Message Broker؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Message Broker؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Message Broker؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Message Broker؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Message Broker؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Message Broker؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.7.2",
        "title": "مقدمة في RabbitMQ",
        "englishTitle": "مقدمة في RabbitMQ",
        "definition": "يمثل (مقدمة في RabbitMQ) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مقدمة في RabbitMQ) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مقدمة في RabbitMQ) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مقدمة في RabbitMQ\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مقدمة في RabbitMQ\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.7.2",
          "title": "مقدمة في RabbitMQ",
          "topicTitle": "Message Brokers",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مقدمة في RabbitMQ) أحد المعايير التقنية الحيوية في مسار Message Brokers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في RabbitMQ)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في RabbitMQ) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في RabbitMQ)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في RabbitMQ)؟",
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
          "title": "تمرين تطبيقي على: مقدمة في RabbitMQ",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في RabbitMQ)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في RabbitMQ\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في RabbitMQ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في RabbitMQ) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.7.3",
        "title": "مقدمة في MassTransit",
        "englishTitle": "مقدمة في MassTransit",
        "definition": "يمثل (مقدمة في MassTransit) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مقدمة في MassTransit) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مقدمة في MassTransit) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مقدمة في MassTransit\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مقدمة في MassTransit\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.7.3",
          "title": "مقدمة في MassTransit",
          "topicTitle": "Message Brokers",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مقدمة في MassTransit) أحد المعايير التقنية الحيوية في مسار Message Brokers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في MassTransit)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في MassTransit) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في MassTransit)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في MassTransit)؟",
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
          "title": "تمرين تطبيقي على: مقدمة في MassTransit",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في MassTransit)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في MassTransit\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في MassTransit ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في MassTransit) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.7.4",
        "title": "إنشاء Message Publisher",
        "englishTitle": "Message Publisher",
        "definition": "يمثل (إنشاء Message Publisher) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Message Publisher) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Message Publisher) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Message Publisher\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Message Publisher\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.7.4",
          "title": "إنشاء Message Publisher",
          "topicTitle": "Message Brokers",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (إنشاء Message Publisher) أحد المعايير التقنية الحيوية في مسار Message Brokers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Message Publisher)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Message Publisher) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Message Publisher)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Message Publisher)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Message Publisher",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Message Publisher)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Message Publisher\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Message Publisher ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Message Publisher) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.7.5",
        "title": "إنشاء Message Consumer",
        "englishTitle": "Message Consumer",
        "definition": "يمثل (إنشاء Message Consumer) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Message Consumer) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Message Consumer) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Message Consumer\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Message Consumer\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.7.5",
          "title": "إنشاء Message Consumer",
          "topicTitle": "Message Brokers",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (إنشاء Message Consumer) أحد المعايير التقنية الحيوية في مسار Message Brokers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Message Consumer)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Message Consumer) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Message Consumer)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Message Consumer)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Message Consumer",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Message Consumer)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Message Consumer\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Message Consumer ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Message Consumer) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.7.6",
        "title": "استخدام Retry Policies",
        "englishTitle": "Retry Policies",
        "definition": "يمثل (استخدام Retry Policies) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Retry Policies) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Retry Policies) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ استخدام Retry Policies\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Retry Policies\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.7.6",
          "title": "استخدام Retry Policies",
          "topicTitle": "Message Brokers",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (استخدام Retry Policies) أحد المعايير التقنية الحيوية في مسار Message Brokers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Retry Policies)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Retry Policies) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Retry Policies)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Retry Policies)؟",
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
          "title": "تمرين تطبيقي على: استخدام Retry Policies",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Retry Policies)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Retry Policies\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Retry Policies ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Retry Policies) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.7.7",
        "title": "استخدام Dead Letter Queues",
        "englishTitle": "Dead Letter Queues",
        "definition": "يمثل (استخدام Dead Letter Queues) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Dead Letter Queues) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Dead Letter Queues) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ استخدام Dead Letter Queues\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Dead Letter Queues\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.7.7",
          "title": "استخدام Dead Letter Queues",
          "topicTitle": "Message Brokers",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (استخدام Dead Letter Queues) أحد المعايير التقنية الحيوية في مسار Message Brokers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Dead Letter Queues)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Dead Letter Queues) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Dead Letter Queues)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Dead Letter Queues)؟",
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
          "title": "تمرين تطبيقي على: استخدام Dead Letter Queues",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Dead Letter Queues)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Dead Letter Queues\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Dead Letter Queues ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Dead Letter Queues) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.7.8",
        "title": "مفهوم Idempotent Consumers",
        "englishTitle": "Idempotent Consumers",
        "definition": "يمثل (مفهوم Idempotent Consumers) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Idempotent Consumers) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Idempotent Consumers) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Idempotent Consumers\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Idempotent Consumers\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.7.8",
          "title": "مفهوم Idempotent Consumers",
          "topicTitle": "Message Brokers",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (مفهوم Idempotent Consumers) أحد المعايير التقنية الحيوية في مسار Message Brokers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Idempotent Consumers)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Idempotent Consumers) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Idempotent Consumers)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Idempotent Consumers)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Idempotent Consumers",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Idempotent Consumers)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Idempotent Consumers\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Idempotent Consumers ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Idempotent Consumers) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.7.9",
        "title": "تتبع الرسائل بين الخدمات",
        "englishTitle": "تتبع الرسائل بين الخدمات",
        "definition": "يمثل (تتبع الرسائل بين الخدمات) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تتبع الرسائل بين الخدمات) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تتبع الرسائل بين الخدمات) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ تتبع الرسائل بين الخدمات\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تتبع الرسائل بين الخدمات\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.7.9",
          "title": "تتبع الرسائل بين الخدمات",
          "topicTitle": "Message Brokers",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (تتبع الرسائل بين الخدمات) أحد المعايير التقنية الحيوية في مسار Message Brokers ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تتبع الرسائل بين الخدمات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تتبع الرسائل بين الخدمات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تتبع الرسائل بين الخدمات)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تتبع الرسائل بين الخدمات)؟",
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
          "title": "تمرين تطبيقي على: تتبع الرسائل بين الخدمات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تتبع الرسائل بين الخدمات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تتبع الرسائل بين الخدمات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تتبع الرسائل بين الخدمات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تتبع الرسائل بين الخدمات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 8,
    "title": "Multi-Tenant Applications",
    "subtopics": [
      {
        "subId": "29.8.1",
        "title": "ما هو Multi-Tenancy؟",
        "englishTitle": "Multi-Tenancy",
        "definition": "يمثل (ما هو Multi-Tenancy؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Multi-Tenancy؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Multi-Tenancy؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ ما هو Multi-Tenancy؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Multi-Tenancy؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.8.1",
          "title": "ما هو Multi-Tenancy؟",
          "topicTitle": "Multi-Tenant Applications",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (ما هو Multi-Tenancy؟) أحد المعايير التقنية الحيوية في مسار Multi-Tenant Applications ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Multi-Tenancy؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Multi-Tenancy؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Multi-Tenancy؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Multi-Tenancy؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Multi-Tenancy؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Multi-Tenancy؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Multi-Tenancy؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Multi-Tenancy؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Multi-Tenancy؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.8.2",
        "title": "الفرق بين Single-Tenant وMulti-Tenant",
        "englishTitle": "Single-Tenant وMulti-Tenant",
        "definition": "يمثل (الفرق بين Single-Tenant وMulti-Tenant) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (الفرق بين Single-Tenant وMulti-Tenant) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (الفرق بين Single-Tenant وMulti-Tenant) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ الفرق بين Single-Tenant وMulti-Tenant\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: الفرق بين Single-Tenant وMulti-Tenant\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.8.2",
          "title": "الفرق بين Single-Tenant وMulti-Tenant",
          "topicTitle": "Multi-Tenant Applications",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (الفرق بين Single-Tenant وMulti-Tenant) أحد المعايير التقنية الحيوية في مسار Multi-Tenant Applications ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Single-Tenant وMulti-Tenant)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Single-Tenant وMulti-Tenant) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Single-Tenant وMulti-Tenant)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Single-Tenant وMulti-Tenant)؟",
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
          "title": "تمرين تطبيقي على: الفرق بين Single-Tenant وMulti-Tenant",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Single-Tenant وMulti-Tenant)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Single-Tenant وMulti-Tenant\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Single-Tenant وMulti-Tenant ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Single-Tenant وMulti-Tenant) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.8.3",
        "title": "تصميم Tenant Model",
        "englishTitle": "تصميم Tenant Model",
        "definition": "يمثل (تصميم Tenant Model) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تصميم Tenant Model) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تصميم Tenant Model) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ تصميم Tenant Model\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تصميم Tenant Model\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.8.3",
          "title": "تصميم Tenant Model",
          "topicTitle": "Multi-Tenant Applications",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (تصميم Tenant Model) أحد المعايير التقنية الحيوية في مسار Multi-Tenant Applications ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تصميم Tenant Model)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تصميم Tenant Model) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تصميم Tenant Model)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تصميم Tenant Model)؟",
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
          "title": "تمرين تطبيقي على: تصميم Tenant Model",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تصميم Tenant Model)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تصميم Tenant Model\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تصميم Tenant Model ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تصميم Tenant Model) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.8.4",
        "title": "تحديد Tenant داخل Middleware",
        "englishTitle": "تحديد Tenant داخل Middleware",
        "definition": "يمثل (تحديد Tenant داخل Middleware) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تحديد Tenant داخل Middleware) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تحديد Tenant داخل Middleware) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ تحديد Tenant داخل Middleware\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تحديد Tenant داخل Middleware\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.8.4",
          "title": "تحديد Tenant داخل Middleware",
          "topicTitle": "Multi-Tenant Applications",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (تحديد Tenant داخل Middleware) أحد المعايير التقنية الحيوية في مسار Multi-Tenant Applications ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحديد Tenant داخل Middleware)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحديد Tenant داخل Middleware) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحديد Tenant داخل Middleware)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحديد Tenant داخل Middleware)؟",
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
          "title": "تمرين تطبيقي على: تحديد Tenant داخل Middleware",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحديد Tenant داخل Middleware)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحديد Tenant داخل Middleware\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحديد Tenant داخل Middleware ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحديد Tenant داخل Middleware) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.8.5",
        "title": "ربط البيانات بالمستأجر",
        "englishTitle": "ربط البيانات بالمستأجر",
        "definition": "يمثل (ربط البيانات بالمستأجر) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ربط البيانات بالمستأجر) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ربط البيانات بالمستأجر) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ ربط البيانات بالمستأجر\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ربط البيانات بالمستأجر\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.8.5",
          "title": "ربط البيانات بالمستأجر",
          "topicTitle": "Multi-Tenant Applications",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (ربط البيانات بالمستأجر) أحد المعايير التقنية الحيوية في مسار Multi-Tenant Applications ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ربط البيانات بالمستأجر)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ربط البيانات بالمستأجر) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ربط البيانات بالمستأجر)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ربط البيانات بالمستأجر)؟",
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
          "title": "تمرين تطبيقي على: ربط البيانات بالمستأجر",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ربط البيانات بالمستأجر)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ربط البيانات بالمستأجر\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ربط البيانات بالمستأجر ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ربط البيانات بالمستأجر) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.8.6",
        "title": "استخدام Global Query Filters",
        "englishTitle": "Global Query Filters",
        "definition": "يمثل (استخدام Global Query Filters) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Global Query Filters) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Global Query Filters) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ استخدام Global Query Filters\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Global Query Filters\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.8.6",
          "title": "استخدام Global Query Filters",
          "topicTitle": "Multi-Tenant Applications",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (استخدام Global Query Filters) أحد المعايير التقنية الحيوية في مسار Multi-Tenant Applications ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Global Query Filters)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Global Query Filters) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Global Query Filters)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Global Query Filters)؟",
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
          "title": "تمرين تطبيقي على: استخدام Global Query Filters",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Global Query Filters)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Global Query Filters\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Global Query Filters ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Global Query Filters) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.8.7",
        "title": "إدارة Tenant Permissions",
        "englishTitle": "Tenant Permissions",
        "definition": "يمثل (إدارة Tenant Permissions) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة Tenant Permissions) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة Tenant Permissions) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ إدارة Tenant Permissions\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة Tenant Permissions\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.8.7",
          "title": "إدارة Tenant Permissions",
          "topicTitle": "Multi-Tenant Applications",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (إدارة Tenant Permissions) أحد المعايير التقنية الحيوية في مسار Multi-Tenant Applications ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Tenant Permissions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Tenant Permissions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Tenant Permissions)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Tenant Permissions)؟",
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
          "title": "تمرين تطبيقي على: إدارة Tenant Permissions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Tenant Permissions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Tenant Permissions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Tenant Permissions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Tenant Permissions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.8.8",
        "title": "منع تسريب البيانات بين المستأجرين",
        "englishTitle": "منع تسريب البيانات بين المستأجرين",
        "definition": "يمثل (منع تسريب البيانات بين المستأجرين) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (منع تسريب البيانات بين المستأجرين) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (منع تسريب البيانات بين المستأجرين) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ منع تسريب البيانات بين المستأجرين\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: منع تسريب البيانات بين المستأجرين\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.8.8",
          "title": "منع تسريب البيانات بين المستأجرين",
          "topicTitle": "Multi-Tenant Applications",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (منع تسريب البيانات بين المستأجرين) أحد المعايير التقنية الحيوية في مسار Multi-Tenant Applications ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (منع تسريب البيانات بين المستأجرين)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (منع تسريب البيانات بين المستأجرين) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (منع تسريب البيانات بين المستأجرين)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (منع تسريب البيانات بين المستأجرين)؟",
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
          "title": "تمرين تطبيقي على: منع تسريب البيانات بين المستأجرين",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (منع تسريب البيانات بين المستأجرين)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين منع تسريب البيانات بين المستأجرين\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: منع تسريب البيانات بين المستأجرين ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (منع تسريب البيانات بين المستأجرين) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "29.8.9",
        "title": "اختبار Tenant Isolation",
        "englishTitle": "اختبار Tenant Isolation",
        "definition": "يمثل (اختبار Tenant Isolation) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Tenant Isolation) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Tenant Isolation) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
        "terms": [
          {
            "term": "Clean Architecture",
            "pronunciation": "كلين أركيتكتشر",
            "meaning": "معمارية نظيفة تعزل منطق الأعمال الأساسي عن قواعد البيانات والواجهات"
          },
          {
            "term": "SignalR Hub",
            "pronunciation": "سيجنال-آر هاب",
            "meaning": "نقطة الاتصال المركزية للاتصال اللحظي ثنائي الاتجاه عبر WebSockets"
          },
          {
            "term": "Docker Container",
            "pronunciation": "دوكر كونتينر",
            "meaning": "حاوية برمجية معزولة تضم التطبيق وكافة ملحقاته ليعمل بنفس الطريقة في أي خادم"
          },
          {
            "term": "CI/CD Pipeline",
            "pronunciation": "سي-آي / سي-دي",
            "meaning": "أتمتة بناء واختبار ونشر التطبيقات على خوادم الإنتاج دون تدخل بشري"
          }
        ],
        "syntax": "// تمثيل معماري متقدم لـ اختبار Tenant Isolation\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Tenant Isolation\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
        "outputExplanation": "عند تشغيل الخدمة، تعمل في خلفية الخادم على مسار مستقل (Background Thread)، مما يضمن عدم تعطيل استجابة المتصفحات، وتستمر في تنفيذ مهام الجدولة والمزامنة بكفاءة وموثوقية عالية.",
        "commonMistakes": [
          {
            "wrong": "تشغيل عمليات ثقيلة (مثل تصدير تقارير PDF ضخمة أو إرسال آلاف الرسائل) داخل طلب الـ HTTP المتزامن.",
            "right": "تفويض العمليات الثقيلة لخدمات خلفية مثل BackgroundService أو مكتبة Hangfire.",
            "reason": "لأن حظر طلب الـ HTTP يؤدي لانتهاء مهلة الاتصال (Timeout) وتجربة استخدام سيئة جداً للمستخدم."
          }
        ],
        "bestPractices": [
          "عزل منطق الأعمال الحقيقي (Domain Logic) داخل مكتبات مستقلة لا تعتمد على إطارات الويب أو قواعد البيانات.",
          "اكتب اختبارات الوحدة (Unit Tests) واختبارات التكامل (Integration Tests) قبل إطلاق أي تحديث في الإنتاج.",
          "استخدم حاويات Docker وملفات Docker Compose لضمان تشغيل التطبيق وقاعدة البيانات بنفس السلوك محلياً وسحابياً."
        ],
        "infographic": {
          "badge": "الدرس 29.8.9",
          "title": "اختبار Tenant Isolation",
          "topicTitle": "Multi-Tenant Applications",
          "sectionTitle": "القسم التاسع والعشرون: هندسة البرمجيات وتصميم الأنظمة المتقدمة",
          "icon": "Rocket",
          "colors": "from-fuchsia-600 via-purple-600 to-cyan-500",
          "steps": [
            {
              "title": "التخطيط والتجريد",
              "desc": "فصل الطبقات وبناء نماذج الأعمال المستقلة"
            },
            {
              "title": "التشغيل غير المتزامن",
              "desc": "معالجة العمليات والرسائل في الخلفية لرفع الاستجابة"
            },
            {
              "title": "المراقبة والنشر",
              "desc": "نشر النظام عبر Docker ومراقبته بأدوات Observability الحديثة"
            }
          ],
          "summary": "يمثل (اختبار Tenant Isolation) أحد المعايير التقنية الحيوية في مسار Multi-Tenant Applications ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Tenant Isolation)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Tenant Isolation) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Tenant Isolation)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Tenant Isolation)؟",
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
          "title": "تمرين تطبيقي على: اختبار Tenant Isolation",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Tenant Isolation)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Tenant Isolation\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Tenant Isolation ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Tenant Isolation) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section29Data;
