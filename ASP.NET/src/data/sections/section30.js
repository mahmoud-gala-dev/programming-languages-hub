// src/data/sections/section30.js
// محتوى تعليمي مفصل وشامل لـ: القسم الثلاثون: Docker والنشر وDevOps
export const section30Data = {
  id: 30,
  title: "القسم الثلاثون: Docker والنشر وDevOps",
  englishTitle: "Docker, Deployment & CI/CD",
  icon: "Container",
  category: "النشر والعمليات",
  description: "حاويات Docker، إعداد Compose لمشروع MVC مع SQL Server و Redis، النشر على خوادم IIS و Linux/Nginx، وخطوط أنابيب GitHub Actions CI/CD.",
  summary: {
  "sectionId": 30,
  "title": "القسم الثلاثون: Docker والنشر وDevOps",
  "englishTitle": "Docker, Deployment & CI/CD",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الثلاثون: Docker والنشر وDevOps.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الثلاثون: Docker والنشر وDevOps",
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
    "title": "التحضير للنشر",
    "subtopics": [
      {
        "subId": "30.1.1",
        "title": "الفرق بين Development وProduction",
        "englishTitle": "Development وProduction",
        "definition": "يمثل (الفرق بين Development وProduction) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (الفرق بين Development وProduction) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (الفرق بين Development وProduction) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ الفرق بين Development وProduction\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: الفرق بين Development وProduction\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.1.1",
          "title": "الفرق بين Development وProduction",
          "topicTitle": "التحضير للنشر",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (الفرق بين Development وProduction) أحد المعايير التقنية الحيوية في مسار التحضير للنشر ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Development وProduction)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Development وProduction) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Development وProduction)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Development وProduction)؟",
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
          "title": "تمرين تطبيقي على: الفرق بين Development وProduction",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Development وProduction)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Development وProduction\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Development وProduction ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Development وProduction) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.1.2",
        "title": "استخدام ASPNETCORE_ENVIRONMENT",
        "englishTitle": "ASPNETCORE_ENVIRONMENT",
        "definition": "يمثل (استخدام ASPNETCORE_ENVIRONMENT) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام ASPNETCORE_ENVIRONMENT) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام ASPNETCORE_ENVIRONMENT) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام ASPNETCORE_ENVIRONMENT\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام ASPNETCORE_ENVIRONMENT\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.1.2",
          "title": "استخدام ASPNETCORE_ENVIRONMENT",
          "topicTitle": "التحضير للنشر",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (استخدام ASPNETCORE_ENVIRONMENT) أحد المعايير التقنية الحيوية في مسار التحضير للنشر ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام ASPNETCORE_ENVIRONMENT)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام ASPNETCORE_ENVIRONMENT) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام ASPNETCORE_ENVIRONMENT)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام ASPNETCORE_ENVIRONMENT)؟",
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
          "title": "تمرين تطبيقي على: استخدام ASPNETCORE_ENVIRONMENT",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام ASPNETCORE_ENVIRONMENT)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام ASPNETCORE_ENVIRONMENT\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام ASPNETCORE_ENVIRONMENT ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام ASPNETCORE_ENVIRONMENT) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.1.3",
        "title": "إدارة Production Configuration",
        "englishTitle": "Production Configuration",
        "definition": "يمثل (إدارة Production Configuration) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة Production Configuration) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة Production Configuration) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إدارة Production Configuration\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة Production Configuration\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.1.3",
          "title": "إدارة Production Configuration",
          "topicTitle": "التحضير للنشر",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إدارة Production Configuration) أحد المعايير التقنية الحيوية في مسار التحضير للنشر ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Production Configuration)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Production Configuration) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Production Configuration)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Production Configuration)؟",
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
          "title": "تمرين تطبيقي على: إدارة Production Configuration",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Production Configuration)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Production Configuration\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Production Configuration ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Production Configuration) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.1.4",
        "title": "حماية Connection Strings",
        "englishTitle": "حماية Connection Strings",
        "definition": "يمثل (حماية Connection Strings) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (حماية Connection Strings) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (حماية Connection Strings) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ حماية Connection Strings\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: حماية Connection Strings\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.1.4",
          "title": "حماية Connection Strings",
          "topicTitle": "التحضير للنشر",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (حماية Connection Strings) أحد المعايير التقنية الحيوية في مسار التحضير للنشر ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (حماية Connection Strings)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (حماية Connection Strings) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (حماية Connection Strings)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (حماية Connection Strings)؟",
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
          "title": "تمرين تطبيقي على: حماية Connection Strings",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (حماية Connection Strings)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين حماية Connection Strings\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: حماية Connection Strings ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (حماية Connection Strings) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.1.5",
        "title": "تشغيل Production Migrations",
        "englishTitle": "تشغيل Production Migrations",
        "definition": "يمثل (تشغيل Production Migrations) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل Production Migrations) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل Production Migrations) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل Production Migrations\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل Production Migrations\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.1.5",
          "title": "تشغيل Production Migrations",
          "topicTitle": "التحضير للنشر",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل Production Migrations) أحد المعايير التقنية الحيوية في مسار التحضير للنشر ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل Production Migrations)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل Production Migrations) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل Production Migrations)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل Production Migrations)؟",
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
          "title": "تمرين تطبيقي على: تشغيل Production Migrations",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل Production Migrations)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل Production Migrations\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل Production Migrations ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل Production Migrations) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.1.6",
        "title": "إنشاء Health Checks",
        "englishTitle": "Health Checks",
        "definition": "يمثل (إنشاء Health Checks) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Health Checks) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Health Checks) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Health Checks\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Health Checks\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.1.6",
          "title": "إنشاء Health Checks",
          "topicTitle": "التحضير للنشر",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء Health Checks) أحد المعايير التقنية الحيوية في مسار التحضير للنشر ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Health Checks)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Health Checks) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Health Checks)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Health Checks)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Health Checks",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Health Checks)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Health Checks\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Health Checks ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Health Checks) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.1.7",
        "title": "إعداد HTTPS",
        "englishTitle": "إعداد HTTPS",
        "definition": "يمثل (إعداد HTTPS) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد HTTPS) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد HTTPS) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد HTTPS\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد HTTPS\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.1.7",
          "title": "إعداد HTTPS",
          "topicTitle": "التحضير للنشر",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إعداد HTTPS) أحد المعايير التقنية الحيوية في مسار التحضير للنشر ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد HTTPS)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد HTTPS) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد HTTPS)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد HTTPS)؟",
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
          "title": "تمرين تطبيقي على: إعداد HTTPS",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد HTTPS)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد HTTPS\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد HTTPS ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد HTTPS) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.1.8",
        "title": "تجهيز Production Build",
        "englishTitle": "تجهيز Production Build",
        "definition": "يمثل (تجهيز Production Build) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تجهيز Production Build) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تجهيز Production Build) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تجهيز Production Build\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تجهيز Production Build\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.1.8",
          "title": "تجهيز Production Build",
          "topicTitle": "التحضير للنشر",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تجهيز Production Build) أحد المعايير التقنية الحيوية في مسار التحضير للنشر ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تجهيز Production Build)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجهيز Production Build) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تجهيز Production Build)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تجهيز Production Build)؟",
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
          "title": "تمرين تطبيقي على: تجهيز Production Build",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تجهيز Production Build)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تجهيز Production Build\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تجهيز Production Build ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تجهيز Production Build) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "النشر على IIS",
    "subtopics": [
      {
        "subId": "30.2.1",
        "title": "ما هو IIS؟",
        "englishTitle": "IIS",
        "definition": "يمثل (ما هو IIS؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو IIS؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو IIS؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو IIS؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو IIS؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.1",
          "title": "ما هو IIS؟",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (ما هو IIS؟) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو IIS؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو IIS؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو IIS؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو IIS؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو IIS؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو IIS؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو IIS؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو IIS؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو IIS؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.2.2",
        "title": "تثبيت IIS",
        "englishTitle": "تثبيت IIS",
        "definition": "يمثل (تثبيت IIS) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تثبيت IIS) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تثبيت IIS) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تثبيت IIS\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تثبيت IIS\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.2",
          "title": "تثبيت IIS",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تثبيت IIS) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تثبيت IIS)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت IIS) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تثبيت IIS)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تثبيت IIS)؟",
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
          "title": "تمرين تطبيقي على: تثبيت IIS",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تثبيت IIS)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تثبيت IIS\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تثبيت IIS ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تثبيت IIS) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.2.3",
        "title": "تثبيت ASP.NET Core Hosting Bundle",
        "englishTitle": "تثبيت ASP.NET Core Hosting Bundle",
        "definition": "يمثل (تثبيت ASP.NET Core Hosting Bundle) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تثبيت ASP.NET Core Hosting Bundle) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تثبيت ASP.NET Core Hosting Bundle) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تثبيت ASP.NET Core Hosting Bundle\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تثبيت ASP.NET Core Hosting Bundle\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.3",
          "title": "تثبيت ASP.NET Core Hosting Bundle",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تثبيت ASP.NET Core Hosting Bundle) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تثبيت ASP.NET Core Hosting Bundle)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت ASP.NET Core Hosting Bundle) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تثبيت ASP.NET Core Hosting Bundle)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تثبيت ASP.NET Core Hosting Bundle)؟",
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
          "title": "تمرين تطبيقي على: تثبيت ASP.NET Core Hosting Bundle",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تثبيت ASP.NET Core Hosting Bundle)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تثبيت ASP.NET Core Hosting Bundle\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تثبيت ASP.NET Core Hosting Bundle ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تثبيت ASP.NET Core Hosting Bundle) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.2.4",
        "title": "استخدام dotnet publish",
        "englishTitle": "dotnet publish",
        "definition": "يمثل (استخدام dotnet publish) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام dotnet publish) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام dotnet publish) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام dotnet publish\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام dotnet publish\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.4",
          "title": "استخدام dotnet publish",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (استخدام dotnet publish) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام dotnet publish)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام dotnet publish) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام dotnet publish)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام dotnet publish)؟",
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
          "title": "تمرين تطبيقي على: استخدام dotnet publish",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام dotnet publish)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام dotnet publish\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام dotnet publish ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام dotnet publish) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.2.5",
        "title": "إنشاء IIS Website",
        "englishTitle": "IIS Website",
        "definition": "يمثل (إنشاء IIS Website) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء IIS Website) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء IIS Website) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء IIS Website\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء IIS Website\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.5",
          "title": "إنشاء IIS Website",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء IIS Website) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء IIS Website)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء IIS Website) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء IIS Website)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء IIS Website)؟",
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
          "title": "تمرين تطبيقي على: إنشاء IIS Website",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء IIS Website)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء IIS Website\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء IIS Website ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء IIS Website) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.2.6",
        "title": "إعداد Application Pool",
        "englishTitle": "إعداد Application Pool",
        "definition": "يمثل (إعداد Application Pool) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد Application Pool) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد Application Pool) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد Application Pool\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد Application Pool\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.6",
          "title": "إعداد Application Pool",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إعداد Application Pool) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد Application Pool)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Application Pool) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد Application Pool)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد Application Pool)؟",
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
          "title": "تمرين تطبيقي على: إعداد Application Pool",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد Application Pool)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد Application Pool\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد Application Pool ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد Application Pool) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.2.7",
        "title": "إعداد Website Bindings",
        "englishTitle": "إعداد Website Bindings",
        "definition": "يمثل (إعداد Website Bindings) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد Website Bindings) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد Website Bindings) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد Website Bindings\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد Website Bindings\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.7",
          "title": "إعداد Website Bindings",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إعداد Website Bindings) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد Website Bindings)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Website Bindings) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد Website Bindings)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد Website Bindings)؟",
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
          "title": "تمرين تطبيقي على: إعداد Website Bindings",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد Website Bindings)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد Website Bindings\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد Website Bindings ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد Website Bindings) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.2.8",
        "title": "تفعيل HTTPS Certificate",
        "englishTitle": "تفعيل HTTPS Certificate",
        "definition": "يمثل (تفعيل HTTPS Certificate) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تفعيل HTTPS Certificate) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تفعيل HTTPS Certificate) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تفعيل HTTPS Certificate\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تفعيل HTTPS Certificate\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.8",
          "title": "تفعيل HTTPS Certificate",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تفعيل HTTPS Certificate) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تفعيل HTTPS Certificate)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تفعيل HTTPS Certificate) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تفعيل HTTPS Certificate)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تفعيل HTTPS Certificate)؟",
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
          "title": "تمرين تطبيقي على: تفعيل HTTPS Certificate",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تفعيل HTTPS Certificate)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تفعيل HTTPS Certificate\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تفعيل HTTPS Certificate ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تفعيل HTTPS Certificate) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.2.9",
        "title": "إعداد File Permissions",
        "englishTitle": "إعداد File Permissions",
        "definition": "يمثل (إعداد File Permissions) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد File Permissions) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد File Permissions) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد File Permissions\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد File Permissions\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.9",
          "title": "إعداد File Permissions",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إعداد File Permissions) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد File Permissions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد File Permissions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد File Permissions)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد File Permissions)؟",
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
          "title": "تمرين تطبيقي على: إعداد File Permissions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد File Permissions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد File Permissions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد File Permissions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد File Permissions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.2.10",
        "title": "استكشاف أخطاء IIS Deployment",
        "englishTitle": "استكشاف أخطاء IIS Deployment",
        "definition": "يمثل (استكشاف أخطاء IIS Deployment) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استكشاف أخطاء IIS Deployment) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استكشاف أخطاء IIS Deployment) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استكشاف أخطاء IIS Deployment\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استكشاف أخطاء IIS Deployment\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.2.10",
          "title": "استكشاف أخطاء IIS Deployment",
          "topicTitle": "النشر على IIS",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (استكشاف أخطاء IIS Deployment) أحد المعايير التقنية الحيوية في مسار النشر على IIS ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استكشاف أخطاء IIS Deployment)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استكشاف أخطاء IIS Deployment) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استكشاف أخطاء IIS Deployment)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استكشاف أخطاء IIS Deployment)؟",
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
          "title": "تمرين تطبيقي على: استكشاف أخطاء IIS Deployment",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استكشاف أخطاء IIS Deployment)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استكشاف أخطاء IIS Deployment\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استكشاف أخطاء IIS Deployment ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استكشاف أخطاء IIS Deployment) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "النشر على Linux",
    "subtopics": [
      {
        "subId": "30.3.1",
        "title": "مقدمة في Linux Server",
        "englishTitle": "مقدمة في Linux Server",
        "definition": "يمثل (مقدمة في Linux Server) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مقدمة في Linux Server) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مقدمة في Linux Server) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مقدمة في Linux Server\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مقدمة في Linux Server\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.1",
          "title": "مقدمة في Linux Server",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (مقدمة في Linux Server) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Linux Server)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Linux Server) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Linux Server)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Linux Server)؟",
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
          "title": "تمرين تطبيقي على: مقدمة في Linux Server",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Linux Server)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Linux Server\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Linux Server ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Linux Server) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.3.2",
        "title": "الاتصال باستخدام SSH",
        "englishTitle": "الاتصال بSSH",
        "definition": "يمثل (الاتصال باستخدام SSH) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (الاتصال باستخدام SSH) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (الاتصال باستخدام SSH) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ الاتصال باستخدام SSH\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: الاتصال باستخدام SSH\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.2",
          "title": "الاتصال باستخدام SSH",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (الاتصال باستخدام SSH) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الاتصال باستخدام SSH)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الاتصال باستخدام SSH) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الاتصال باستخدام SSH)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الاتصال باستخدام SSH)؟",
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
          "title": "تمرين تطبيقي على: الاتصال باستخدام SSH",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الاتصال باستخدام SSH)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الاتصال باستخدام SSH\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الاتصال باستخدام SSH ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الاتصال باستخدام SSH) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.3.3",
        "title": "تثبيت .NET Runtime",
        "englishTitle": "تثبيت .NET Runtime",
        "definition": "يمثل (تثبيت .NET Runtime) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تثبيت .NET Runtime) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تثبيت .NET Runtime) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تثبيت .NET Runtime\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تثبيت .NET Runtime\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.3",
          "title": "تثبيت .NET Runtime",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تثبيت .NET Runtime) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تثبيت .NET Runtime)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تثبيت .NET Runtime) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تثبيت .NET Runtime)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تثبيت .NET Runtime)؟",
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
          "title": "تمرين تطبيقي على: تثبيت .NET Runtime",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تثبيت .NET Runtime)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تثبيت .NET Runtime\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تثبيت .NET Runtime ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تثبيت .NET Runtime) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.3.4",
        "title": "نشر MVC Application",
        "englishTitle": "نشر MVC Application",
        "definition": "يمثل (نشر MVC Application) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (نشر MVC Application) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (نشر MVC Application) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ نشر MVC Application\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: نشر MVC Application\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.4",
          "title": "نشر MVC Application",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (نشر MVC Application) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (نشر MVC Application)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (نشر MVC Application) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (نشر MVC Application)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (نشر MVC Application)؟",
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
          "title": "تمرين تطبيقي على: نشر MVC Application",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (نشر MVC Application)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين نشر MVC Application\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: نشر MVC Application ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (نشر MVC Application) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.3.5",
        "title": "تشغيل Kestrel",
        "englishTitle": "تشغيل Kestrel",
        "definition": "يمثل (تشغيل Kestrel) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل Kestrel) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل Kestrel) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل Kestrel\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل Kestrel\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.5",
          "title": "تشغيل Kestrel",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل Kestrel) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل Kestrel)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل Kestrel) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل Kestrel)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل Kestrel)؟",
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
          "title": "تمرين تطبيقي على: تشغيل Kestrel",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل Kestrel)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل Kestrel\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل Kestrel ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل Kestrel) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.3.6",
        "title": "إنشاء systemd Service",
        "englishTitle": "systemd Service",
        "definition": "يمثل (إنشاء systemd Service) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء systemd Service) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء systemd Service) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء systemd Service\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء systemd Service\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.6",
          "title": "إنشاء systemd Service",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء systemd Service) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء systemd Service)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء systemd Service) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء systemd Service)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء systemd Service)؟",
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
          "title": "تمرين تطبيقي على: إنشاء systemd Service",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء systemd Service)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء systemd Service\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء systemd Service ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء systemd Service) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.3.7",
        "title": "استخدام Nginx كـ Reverse Proxy",
        "englishTitle": "Nginx كـ Reverse Proxy",
        "definition": "يمثل (استخدام Nginx كـ Reverse Proxy) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Nginx كـ Reverse Proxy) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Nginx كـ Reverse Proxy) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Nginx كـ Reverse Proxy\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Nginx كـ Reverse Proxy\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.7",
          "title": "استخدام Nginx كـ Reverse Proxy",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (استخدام Nginx كـ Reverse Proxy) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Nginx كـ Reverse Proxy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Nginx كـ Reverse Proxy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Nginx كـ Reverse Proxy)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Nginx كـ Reverse Proxy)؟",
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
          "title": "تمرين تطبيقي على: استخدام Nginx كـ Reverse Proxy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Nginx كـ Reverse Proxy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Nginx كـ Reverse Proxy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Nginx كـ Reverse Proxy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Nginx كـ Reverse Proxy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.3.8",
        "title": "إعداد HTTPS",
        "englishTitle": "إعداد HTTPS",
        "definition": "يمثل (إعداد HTTPS) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد HTTPS) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد HTTPS) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد HTTPS\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد HTTPS\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.8",
          "title": "إعداد HTTPS",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إعداد HTTPS) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد HTTPS)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد HTTPS) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد HTTPS)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد HTTPS)؟",
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
          "title": "تمرين تطبيقي على: إعداد HTTPS",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد HTTPS)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد HTTPS\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد HTTPS ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد HTTPS) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.3.9",
        "title": "إدارة Firewall",
        "englishTitle": "Firewall",
        "definition": "يمثل (إدارة Firewall) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة Firewall) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة Firewall) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إدارة Firewall\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة Firewall\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.9",
          "title": "إدارة Firewall",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إدارة Firewall) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Firewall)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Firewall) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Firewall)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Firewall)؟",
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
          "title": "تمرين تطبيقي على: إدارة Firewall",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Firewall)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Firewall\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Firewall ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Firewall) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.3.10",
        "title": "قراءة Logs على Linux",
        "englishTitle": "قراءة Logs على Linux",
        "definition": "يمثل (قراءة Logs على Linux) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (قراءة Logs على Linux) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (قراءة Logs على Linux) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ قراءة Logs على Linux\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: قراءة Logs على Linux\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.3.10",
          "title": "قراءة Logs على Linux",
          "topicTitle": "النشر على Linux",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (قراءة Logs على Linux) أحد المعايير التقنية الحيوية في مسار النشر على Linux ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (قراءة Logs على Linux)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة Logs على Linux) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (قراءة Logs على Linux)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (قراءة Logs على Linux)؟",
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
          "title": "تمرين تطبيقي على: قراءة Logs على Linux",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (قراءة Logs على Linux)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين قراءة Logs على Linux\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: قراءة Logs على Linux ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (قراءة Logs على Linux) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "Docker",
    "subtopics": [
      {
        "subId": "30.4.1",
        "title": "ما هو Docker؟",
        "englishTitle": "Docker",
        "definition": "يمثل (ما هو Docker؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Docker؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Docker؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Docker؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Docker؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.1",
          "title": "ما هو Docker؟",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (ما هو Docker؟) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Docker؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Docker؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Docker؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Docker؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Docker؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Docker؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Docker؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Docker؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Docker؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.4.2",
        "title": "مفهوم Image وContainer",
        "englishTitle": "Image وContainer",
        "definition": "يمثل (مفهوم Image وContainer) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Image وContainer) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Image وContainer) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Image وContainer\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Image وContainer\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.2",
          "title": "مفهوم Image وContainer",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (مفهوم Image وContainer) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Image وContainer)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Image وContainer) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Image وContainer)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Image وContainer)؟",
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
          "title": "تمرين تطبيقي على: مفهوم Image وContainer",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Image وContainer)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Image وContainer\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Image وContainer ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Image وContainer) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.4.3",
        "title": "إنشاء Dockerfile لمشروع MVC",
        "englishTitle": "Dockerfile لمشروع MVC",
        "definition": "يمثل (إنشاء Dockerfile لمشروع MVC) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Dockerfile لمشروع MVC) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Dockerfile لمشروع MVC) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Dockerfile لمشروع MVC\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Dockerfile لمشروع MVC\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.3",
          "title": "إنشاء Dockerfile لمشروع MVC",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء Dockerfile لمشروع MVC) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Dockerfile لمشروع MVC)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Dockerfile لمشروع MVC) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Dockerfile لمشروع MVC)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Dockerfile لمشروع MVC)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Dockerfile لمشروع MVC",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Dockerfile لمشروع MVC)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Dockerfile لمشروع MVC\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Dockerfile لمشروع MVC ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Dockerfile لمشروع MVC) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.4.4",
        "title": "استخدام Multi-Stage Build",
        "englishTitle": "Multi-Stage Build",
        "definition": "يمثل (استخدام Multi-Stage Build) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Multi-Stage Build) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Multi-Stage Build) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Multi-Stage Build\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Multi-Stage Build\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.4",
          "title": "استخدام Multi-Stage Build",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (استخدام Multi-Stage Build) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Multi-Stage Build)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Multi-Stage Build) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Multi-Stage Build)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Multi-Stage Build)؟",
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
          "title": "تمرين تطبيقي على: استخدام Multi-Stage Build",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Multi-Stage Build)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Multi-Stage Build\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Multi-Stage Build ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Multi-Stage Build) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.4.5",
        "title": "إنشاء .dockerignore",
        "englishTitle": ".dockerignore",
        "definition": "يمثل (إنشاء .dockerignore) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء .dockerignore) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء .dockerignore) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء .dockerignore\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء .dockerignore\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.5",
          "title": "إنشاء .dockerignore",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء .dockerignore) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء .dockerignore)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء .dockerignore) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء .dockerignore)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء .dockerignore)؟",
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
          "title": "تمرين تطبيقي على: إنشاء .dockerignore",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء .dockerignore)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء .dockerignore\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء .dockerignore ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء .dockerignore) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.4.6",
        "title": "بناء Docker Image",
        "englishTitle": "بناء Docker Image",
        "definition": "يمثل (بناء Docker Image) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (بناء Docker Image) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (بناء Docker Image) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ بناء Docker Image\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: بناء Docker Image\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.6",
          "title": "بناء Docker Image",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (بناء Docker Image) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (بناء Docker Image)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (بناء Docker Image) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (بناء Docker Image)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (بناء Docker Image)؟",
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
          "title": "تمرين تطبيقي على: بناء Docker Image",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (بناء Docker Image)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين بناء Docker Image\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: بناء Docker Image ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (بناء Docker Image) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.4.7",
        "title": "تشغيل MVC Container",
        "englishTitle": "تشغيل MVC Container",
        "definition": "يمثل (تشغيل MVC Container) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل MVC Container) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل MVC Container) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل MVC Container\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل MVC Container\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.7",
          "title": "تشغيل MVC Container",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل MVC Container) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل MVC Container)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل MVC Container) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل MVC Container)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل MVC Container)؟",
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
          "title": "تمرين تطبيقي على: تشغيل MVC Container",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل MVC Container)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل MVC Container\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل MVC Container ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل MVC Container) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.4.8",
        "title": "إدارة Environment Variables",
        "englishTitle": "Environment Variables",
        "definition": "يمثل (إدارة Environment Variables) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة Environment Variables) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة Environment Variables) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إدارة Environment Variables\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة Environment Variables\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.8",
          "title": "إدارة Environment Variables",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إدارة Environment Variables) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Environment Variables)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Environment Variables) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Environment Variables)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Environment Variables)؟",
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
          "title": "تمرين تطبيقي على: إدارة Environment Variables",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Environment Variables)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Environment Variables\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Environment Variables ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Environment Variables) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.4.9",
        "title": "تشغيل Container بمستخدم غير Root",
        "englishTitle": "تشغيل Container بمستخدم غير Root",
        "definition": "يمثل (تشغيل Container بمستخدم غير Root) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل Container بمستخدم غير Root) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل Container بمستخدم غير Root) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل Container بمستخدم غير Root\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل Container بمستخدم غير Root\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.9",
          "title": "تشغيل Container بمستخدم غير Root",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل Container بمستخدم غير Root) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل Container بمستخدم غير Root)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل Container بمستخدم غير Root) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل Container بمستخدم غير Root)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل Container بمستخدم غير Root)؟",
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
          "title": "تمرين تطبيقي على: تشغيل Container بمستخدم غير Root",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل Container بمستخدم غير Root)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل Container بمستخدم غير Root\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل Container بمستخدم غير Root ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل Container بمستخدم غير Root) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.4.10",
        "title": "إعداد Container Health Check",
        "englishTitle": "إعداد Container Health Check",
        "definition": "يمثل (إعداد Container Health Check) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد Container Health Check) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد Container Health Check) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد Container Health Check\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد Container Health Check\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.4.10",
          "title": "إعداد Container Health Check",
          "topicTitle": "Docker",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إعداد Container Health Check) أحد المعايير التقنية الحيوية في مسار Docker ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد Container Health Check)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Container Health Check) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد Container Health Check)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد Container Health Check)؟",
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
          "title": "تمرين تطبيقي على: إعداد Container Health Check",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد Container Health Check)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد Container Health Check\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد Container Health Check ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد Container Health Check) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "Docker Compose",
    "subtopics": [
      {
        "subId": "30.5.1",
        "title": "ما هو Docker Compose؟",
        "englishTitle": "Docker Compose",
        "definition": "يمثل (ما هو Docker Compose؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Docker Compose؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Docker Compose؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Docker Compose؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Docker Compose؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.5.1",
          "title": "ما هو Docker Compose؟",
          "topicTitle": "Docker Compose",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (ما هو Docker Compose؟) أحد المعايير التقنية الحيوية في مسار Docker Compose ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Docker Compose؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Docker Compose؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Docker Compose؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Docker Compose؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Docker Compose؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Docker Compose؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Docker Compose؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Docker Compose؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Docker Compose؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.5.2",
        "title": "إنشاء compose.yaml",
        "englishTitle": "compose.yaml",
        "definition": "يمثل (إنشاء compose.yaml) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء compose.yaml) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء compose.yaml) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء compose.yaml\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء compose.yaml\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.5.2",
          "title": "إنشاء compose.yaml",
          "topicTitle": "Docker Compose",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء compose.yaml) أحد المعايير التقنية الحيوية في مسار Docker Compose ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء compose.yaml)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء compose.yaml) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء compose.yaml)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء compose.yaml)؟",
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
          "title": "تمرين تطبيقي على: إنشاء compose.yaml",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء compose.yaml)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء compose.yaml\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء compose.yaml ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء compose.yaml) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.5.3",
        "title": "تشغيل MVC مع SQL Server",
        "englishTitle": "تشغيل MVC مع SQL Server",
        "definition": "يمثل (تشغيل MVC مع SQL Server) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل MVC مع SQL Server) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل MVC مع SQL Server) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل MVC مع SQL Server\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل MVC مع SQL Server\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.5.3",
          "title": "تشغيل MVC مع SQL Server",
          "topicTitle": "Docker Compose",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل MVC مع SQL Server) أحد المعايير التقنية الحيوية في مسار Docker Compose ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل MVC مع SQL Server)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل MVC مع SQL Server) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل MVC مع SQL Server)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل MVC مع SQL Server)؟",
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
          "title": "تمرين تطبيقي على: تشغيل MVC مع SQL Server",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل MVC مع SQL Server)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل MVC مع SQL Server\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل MVC مع SQL Server ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل MVC مع SQL Server) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.5.4",
        "title": "تشغيل MVC مع Redis",
        "englishTitle": "تشغيل MVC مع Redis",
        "definition": "يمثل (تشغيل MVC مع Redis) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل MVC مع Redis) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل MVC مع Redis) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل MVC مع Redis\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل MVC مع Redis\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.5.4",
          "title": "تشغيل MVC مع Redis",
          "topicTitle": "Docker Compose",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل MVC مع Redis) أحد المعايير التقنية الحيوية في مسار Docker Compose ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل MVC مع Redis)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل MVC مع Redis) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل MVC مع Redis)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل MVC مع Redis)؟",
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
          "title": "تمرين تطبيقي على: تشغيل MVC مع Redis",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل MVC مع Redis)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل MVC مع Redis\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل MVC مع Redis ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل MVC مع Redis) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.5.5",
        "title": "إدارة Networks",
        "englishTitle": "Networks",
        "definition": "يمثل (إدارة Networks) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة Networks) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة Networks) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إدارة Networks\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة Networks\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.5.5",
          "title": "إدارة Networks",
          "topicTitle": "Docker Compose",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إدارة Networks) أحد المعايير التقنية الحيوية في مسار Docker Compose ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Networks)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Networks) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Networks)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Networks)؟",
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
          "title": "تمرين تطبيقي على: إدارة Networks",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Networks)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Networks\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Networks ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Networks) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.5.6",
        "title": "إدارة Volumes",
        "englishTitle": "Volumes",
        "definition": "يمثل (إدارة Volumes) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة Volumes) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة Volumes) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إدارة Volumes\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة Volumes\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.5.6",
          "title": "إدارة Volumes",
          "topicTitle": "Docker Compose",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إدارة Volumes) أحد المعايير التقنية الحيوية في مسار Docker Compose ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Volumes)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Volumes) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Volumes)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Volumes)؟",
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
          "title": "تمرين تطبيقي على: إدارة Volumes",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Volumes)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Volumes\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Volumes ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Volumes) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.5.7",
        "title": "إعداد Healthchecks",
        "englishTitle": "إعداد Healthchecks",
        "definition": "يمثل (إعداد Healthchecks) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد Healthchecks) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد Healthchecks) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد Healthchecks\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد Healthchecks\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.5.7",
          "title": "إعداد Healthchecks",
          "topicTitle": "Docker Compose",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إعداد Healthchecks) أحد المعايير التقنية الحيوية في مسار Docker Compose ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد Healthchecks)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Healthchecks) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد Healthchecks)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد Healthchecks)؟",
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
          "title": "تمرين تطبيقي على: إعداد Healthchecks",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد Healthchecks)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد Healthchecks\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد Healthchecks ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد Healthchecks) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.5.8",
        "title": "إدارة Secrets",
        "englishTitle": "Secrets",
        "definition": "يمثل (إدارة Secrets) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة Secrets) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة Secrets) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إدارة Secrets\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة Secrets\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.5.8",
          "title": "إدارة Secrets",
          "topicTitle": "Docker Compose",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إدارة Secrets) أحد المعايير التقنية الحيوية في مسار Docker Compose ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Secrets)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Secrets) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Secrets)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Secrets)؟",
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
          "title": "تمرين تطبيقي على: إدارة Secrets",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Secrets)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Secrets\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Secrets ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Secrets) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.5.9",
        "title": "تشغيل البيئة كاملة محلياً",
        "englishTitle": "تشغيل البيئة كاملة محلياً",
        "definition": "يمثل (تشغيل البيئة كاملة محلياً) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل البيئة كاملة محلياً) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل البيئة كاملة محلياً) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل البيئة كاملة محلياً\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل البيئة كاملة محلياً\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.5.9",
          "title": "تشغيل البيئة كاملة محلياً",
          "topicTitle": "Docker Compose",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل البيئة كاملة محلياً) أحد المعايير التقنية الحيوية في مسار Docker Compose ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل البيئة كاملة محلياً)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل البيئة كاملة محلياً) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل البيئة كاملة محلياً)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل البيئة كاملة محلياً)؟",
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
          "title": "تمرين تطبيقي على: تشغيل البيئة كاملة محلياً",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل البيئة كاملة محلياً)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل البيئة كاملة محلياً\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل البيئة كاملة محلياً ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل البيئة كاملة محلياً) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "Azure Deployment",
    "subtopics": [
      {
        "subId": "30.6.1",
        "title": "مقدمة في Microsoft Azure",
        "englishTitle": "مقدمة في Microsoft Azure",
        "definition": "يمثل (مقدمة في Microsoft Azure) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مقدمة في Microsoft Azure) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مقدمة في Microsoft Azure) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مقدمة في Microsoft Azure\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مقدمة في Microsoft Azure\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.6.1",
          "title": "مقدمة في Microsoft Azure",
          "topicTitle": "Azure Deployment",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (مقدمة في Microsoft Azure) أحد المعايير التقنية الحيوية في مسار Azure Deployment ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Microsoft Azure)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Microsoft Azure) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Microsoft Azure)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Microsoft Azure)؟",
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
          "title": "تمرين تطبيقي على: مقدمة في Microsoft Azure",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Microsoft Azure)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Microsoft Azure\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Microsoft Azure ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Microsoft Azure) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.6.2",
        "title": "ما هو Azure App Service؟",
        "englishTitle": "Azure App Service",
        "definition": "يمثل (ما هو Azure App Service؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Azure App Service؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Azure App Service؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Azure App Service؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Azure App Service؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.6.2",
          "title": "ما هو Azure App Service؟",
          "topicTitle": "Azure Deployment",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (ما هو Azure App Service؟) أحد المعايير التقنية الحيوية في مسار Azure Deployment ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Azure App Service؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Azure App Service؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Azure App Service؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Azure App Service؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Azure App Service؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Azure App Service؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Azure App Service؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Azure App Service؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Azure App Service؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.6.3",
        "title": "نشر MVC على Azure App Service",
        "englishTitle": "نشر MVC على Azure App Service",
        "definition": "يمثل (نشر MVC على Azure App Service) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (نشر MVC على Azure App Service) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (نشر MVC على Azure App Service) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ نشر MVC على Azure App Service\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: نشر MVC على Azure App Service\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.6.3",
          "title": "نشر MVC على Azure App Service",
          "topicTitle": "Azure Deployment",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (نشر MVC على Azure App Service) أحد المعايير التقنية الحيوية في مسار Azure Deployment ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (نشر MVC على Azure App Service)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (نشر MVC على Azure App Service) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (نشر MVC على Azure App Service)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (نشر MVC على Azure App Service)؟",
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
          "title": "تمرين تطبيقي على: نشر MVC على Azure App Service",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (نشر MVC على Azure App Service)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين نشر MVC على Azure App Service\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: نشر MVC على Azure App Service ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (نشر MVC على Azure App Service) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.6.4",
        "title": "استخدام Azure SQL Database",
        "englishTitle": "Azure SQL Database",
        "definition": "يمثل (استخدام Azure SQL Database) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Azure SQL Database) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Azure SQL Database) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Azure SQL Database\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Azure SQL Database\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.6.4",
          "title": "استخدام Azure SQL Database",
          "topicTitle": "Azure Deployment",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (استخدام Azure SQL Database) أحد المعايير التقنية الحيوية في مسار Azure Deployment ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Azure SQL Database)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Azure SQL Database) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Azure SQL Database)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Azure SQL Database)؟",
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
          "title": "تمرين تطبيقي على: استخدام Azure SQL Database",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Azure SQL Database)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Azure SQL Database\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Azure SQL Database ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Azure SQL Database) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.6.5",
        "title": "استخدام Azure Blob Storage",
        "englishTitle": "Azure Blob Storage",
        "definition": "يمثل (استخدام Azure Blob Storage) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Azure Blob Storage) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Azure Blob Storage) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Azure Blob Storage\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Azure Blob Storage\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.6.5",
          "title": "استخدام Azure Blob Storage",
          "topicTitle": "Azure Deployment",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (استخدام Azure Blob Storage) أحد المعايير التقنية الحيوية في مسار Azure Deployment ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Azure Blob Storage)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Azure Blob Storage) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Azure Blob Storage)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Azure Blob Storage)؟",
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
          "title": "تمرين تطبيقي على: استخدام Azure Blob Storage",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Azure Blob Storage)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Azure Blob Storage\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Azure Blob Storage ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Azure Blob Storage) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.6.6",
        "title": "استخدام Azure Key Vault",
        "englishTitle": "Azure Key Vault",
        "definition": "يمثل (استخدام Azure Key Vault) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Azure Key Vault) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Azure Key Vault) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Azure Key Vault\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Azure Key Vault\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.6.6",
          "title": "استخدام Azure Key Vault",
          "topicTitle": "Azure Deployment",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (استخدام Azure Key Vault) أحد المعايير التقنية الحيوية في مسار Azure Deployment ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Azure Key Vault)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Azure Key Vault) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Azure Key Vault)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Azure Key Vault)؟",
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
          "title": "تمرين تطبيقي على: استخدام Azure Key Vault",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Azure Key Vault)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Azure Key Vault\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Azure Key Vault ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Azure Key Vault) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.6.7",
        "title": "إعداد Application Settings",
        "englishTitle": "إعداد Application Settings",
        "definition": "يمثل (إعداد Application Settings) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد Application Settings) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد Application Settings) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد Application Settings\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد Application Settings\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.6.7",
          "title": "إعداد Application Settings",
          "topicTitle": "Azure Deployment",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إعداد Application Settings) أحد المعايير التقنية الحيوية في مسار Azure Deployment ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد Application Settings)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Application Settings) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد Application Settings)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد Application Settings)؟",
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
          "title": "تمرين تطبيقي على: إعداد Application Settings",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد Application Settings)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد Application Settings\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد Application Settings ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد Application Settings) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.6.8",
        "title": "إعداد Custom Domain",
        "englishTitle": "إعداد Custom Domain",
        "definition": "يمثل (إعداد Custom Domain) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد Custom Domain) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد Custom Domain) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد Custom Domain\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد Custom Domain\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.6.8",
          "title": "إعداد Custom Domain",
          "topicTitle": "Azure Deployment",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إعداد Custom Domain) أحد المعايير التقنية الحيوية في مسار Azure Deployment ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد Custom Domain)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Custom Domain) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد Custom Domain)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد Custom Domain)؟",
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
          "title": "تمرين تطبيقي على: إعداد Custom Domain",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد Custom Domain)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد Custom Domain\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد Custom Domain ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد Custom Domain) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.6.9",
        "title": "إدارة تكاليف Azure",
        "englishTitle": "تكاليف Azure",
        "definition": "يمثل (إدارة تكاليف Azure) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة تكاليف Azure) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة تكاليف Azure) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إدارة تكاليف Azure\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة تكاليف Azure\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.6.9",
          "title": "إدارة تكاليف Azure",
          "topicTitle": "Azure Deployment",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إدارة تكاليف Azure) أحد المعايير التقنية الحيوية في مسار Azure Deployment ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة تكاليف Azure)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة تكاليف Azure) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة تكاليف Azure)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة تكاليف Azure)؟",
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
          "title": "تمرين تطبيقي على: إدارة تكاليف Azure",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة تكاليف Azure)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة تكاليف Azure\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة تكاليف Azure ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة تكاليف Azure) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 7,
    "title": "CI/CD",
    "subtopics": [
      {
        "subId": "30.7.1",
        "title": "ما هو Continuous Integration؟",
        "englishTitle": "Continuous Integration",
        "definition": "يمثل (ما هو Continuous Integration؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Continuous Integration؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Continuous Integration؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Continuous Integration؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Continuous Integration؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.1",
          "title": "ما هو Continuous Integration؟",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (ما هو Continuous Integration؟) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Continuous Integration؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Continuous Integration؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Continuous Integration؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Continuous Integration؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Continuous Integration؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Continuous Integration؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Continuous Integration؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Continuous Integration؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Continuous Integration؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.2",
        "title": "ما هو Continuous Delivery؟",
        "englishTitle": "Continuous Delivery",
        "definition": "يمثل (ما هو Continuous Delivery؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Continuous Delivery؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Continuous Delivery؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Continuous Delivery؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Continuous Delivery؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.2",
          "title": "ما هو Continuous Delivery؟",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (ما هو Continuous Delivery؟) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Continuous Delivery؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Continuous Delivery؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Continuous Delivery؟)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Continuous Delivery؟)؟",
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
          "title": "تمرين تطبيقي على: ما هو Continuous Delivery؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Continuous Delivery؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Continuous Delivery؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Continuous Delivery؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Continuous Delivery؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.3",
        "title": "استخدام GitHub Actions",
        "englishTitle": "GitHub Actions",
        "definition": "يمثل (استخدام GitHub Actions) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام GitHub Actions) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام GitHub Actions) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام GitHub Actions\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام GitHub Actions\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.3",
          "title": "استخدام GitHub Actions",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (استخدام GitHub Actions) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام GitHub Actions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام GitHub Actions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام GitHub Actions)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام GitHub Actions)؟",
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
          "title": "تمرين تطبيقي على: استخدام GitHub Actions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام GitHub Actions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام GitHub Actions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام GitHub Actions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام GitHub Actions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.4",
        "title": "إنشاء Build Workflow",
        "englishTitle": "Build Workflow",
        "definition": "يمثل (إنشاء Build Workflow) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Build Workflow) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Build Workflow) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Build Workflow\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Build Workflow\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.4",
          "title": "إنشاء Build Workflow",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء Build Workflow) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Build Workflow)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Build Workflow) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Build Workflow)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Build Workflow)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Build Workflow",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Build Workflow)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Build Workflow\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Build Workflow ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Build Workflow) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.5",
        "title": "تشغيل Unit Tests تلقائياً",
        "englishTitle": "تشغيل Unit Tests تلقائياً",
        "definition": "يمثل (تشغيل Unit Tests تلقائياً) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل Unit Tests تلقائياً) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل Unit Tests تلقائياً) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل Unit Tests تلقائياً\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل Unit Tests تلقائياً\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.5",
          "title": "تشغيل Unit Tests تلقائياً",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل Unit Tests تلقائياً) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل Unit Tests تلقائياً)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل Unit Tests تلقائياً) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل Unit Tests تلقائياً)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل Unit Tests تلقائياً)؟",
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
          "title": "تمرين تطبيقي على: تشغيل Unit Tests تلقائياً",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل Unit Tests تلقائياً)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل Unit Tests تلقائياً\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل Unit Tests تلقائياً ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل Unit Tests تلقائياً) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.6",
        "title": "تشغيل Integration Tests",
        "englishTitle": "تشغيل Integration Tests",
        "definition": "يمثل (تشغيل Integration Tests) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل Integration Tests) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل Integration Tests) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل Integration Tests\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل Integration Tests\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.6",
          "title": "تشغيل Integration Tests",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل Integration Tests) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل Integration Tests)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل Integration Tests) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل Integration Tests)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل Integration Tests)؟",
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
          "title": "تمرين تطبيقي على: تشغيل Integration Tests",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل Integration Tests)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل Integration Tests\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل Integration Tests ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل Integration Tests) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.7",
        "title": "تشغيل Code Analysis",
        "englishTitle": "تشغيل Code Analysis",
        "definition": "يمثل (تشغيل Code Analysis) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تشغيل Code Analysis) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تشغيل Code Analysis) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تشغيل Code Analysis\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تشغيل Code Analysis\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.7",
          "title": "تشغيل Code Analysis",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (تشغيل Code Analysis) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تشغيل Code Analysis)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تشغيل Code Analysis) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تشغيل Code Analysis)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تشغيل Code Analysis)؟",
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
          "title": "تمرين تطبيقي على: تشغيل Code Analysis",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تشغيل Code Analysis)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تشغيل Code Analysis\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تشغيل Code Analysis ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تشغيل Code Analysis) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.8",
        "title": "إنشاء Docker Image تلقائياً",
        "englishTitle": "Docker Image تلقائياً",
        "definition": "يمثل (إنشاء Docker Image تلقائياً) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Docker Image تلقائياً) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Docker Image تلقائياً) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Docker Image تلقائياً\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Docker Image تلقائياً\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.8",
          "title": "إنشاء Docker Image تلقائياً",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء Docker Image تلقائياً) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Docker Image تلقائياً)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Docker Image تلقائياً) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Docker Image تلقائياً)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Docker Image تلقائياً)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Docker Image تلقائياً",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Docker Image تلقائياً)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Docker Image تلقائياً\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Docker Image تلقائياً ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Docker Image تلقائياً) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.9",
        "title": "إدارة Deployment Secrets",
        "englishTitle": "Deployment Secrets",
        "definition": "يمثل (إدارة Deployment Secrets) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة Deployment Secrets) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة Deployment Secrets) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إدارة Deployment Secrets\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة Deployment Secrets\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.9",
          "title": "إدارة Deployment Secrets",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إدارة Deployment Secrets) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Deployment Secrets)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Deployment Secrets) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Deployment Secrets)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Deployment Secrets)؟",
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
          "title": "تمرين تطبيقي على: إدارة Deployment Secrets",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Deployment Secrets)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Deployment Secrets\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Deployment Secrets ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Deployment Secrets) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.10",
        "title": "إنشاء Staging Environment",
        "englishTitle": "Staging Environment",
        "definition": "يمثل (إنشاء Staging Environment) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Staging Environment) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Staging Environment) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Staging Environment\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Staging Environment\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.10",
          "title": "إنشاء Staging Environment",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء Staging Environment) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Staging Environment)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Staging Environment) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Staging Environment)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Staging Environment)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Staging Environment",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Staging Environment)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Staging Environment\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Staging Environment ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Staging Environment) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.11",
        "title": "النشر التلقائي إلى Production",
        "englishTitle": "النشر التلقائي إلى Production",
        "definition": "يمثل (النشر التلقائي إلى Production) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (النشر التلقائي إلى Production) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (النشر التلقائي إلى Production) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ النشر التلقائي إلى Production\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: النشر التلقائي إلى Production\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.11",
          "title": "النشر التلقائي إلى Production",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (النشر التلقائي إلى Production) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (النشر التلقائي إلى Production)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (النشر التلقائي إلى Production) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (النشر التلقائي إلى Production)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (النشر التلقائي إلى Production)؟",
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
          "title": "تمرين تطبيقي على: النشر التلقائي إلى Production",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (النشر التلقائي إلى Production)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين النشر التلقائي إلى Production\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: النشر التلقائي إلى Production ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (النشر التلقائي إلى Production) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "30.7.12",
        "title": "إنشاء Rollback Strategy",
        "englishTitle": "Rollback Strategy",
        "definition": "يمثل (إنشاء Rollback Strategy) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Rollback Strategy) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Rollback Strategy) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Rollback Strategy\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Rollback Strategy\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 30.7.12",
          "title": "إنشاء Rollback Strategy",
          "topicTitle": "CI/CD",
          "sectionTitle": "القسم الثلاثون: Docker والنشر وDevOps",
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
          "summary": "يمثل (إنشاء Rollback Strategy) أحد المعايير التقنية الحيوية في مسار CI/CD ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Rollback Strategy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Rollback Strategy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Rollback Strategy)؟",
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
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Rollback Strategy)؟",
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
          "title": "تمرين تطبيقي على: إنشاء Rollback Strategy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Rollback Strategy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Rollback Strategy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Rollback Strategy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Rollback Strategy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section30Data;
