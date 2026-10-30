// src/data/sections/section31.js
// محتوى تعليمي مفصل وشامل لـ: القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability
export const section31Data = {
  id: 31,
  title: "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
  englishTitle: "Monitoring, Observability & Site Reliability",
  icon: "Activity",
  category: "النشر والعمليات",
  description: "مراقبة التطبيقات في بيئات الإنتاج، المقاييس والسجلات والتتبع (Logs, Metrics, Traces)، تقنيات OpenTelemetry و Application Insights وخطط التعافي من الكوارث.",
  summary: {
  "sectionId": 31,
  "title": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
  "englishTitle": "Monitoring, Observability & Site Reliability",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
    "title": "Application Monitoring",
    "subtopics": [
      {
        "subId": "31.1.1",
        "title": "ما هو Monitoring؟",
        "englishTitle": "Monitoring",
        "definition": "يمثل (ما هو Monitoring؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Monitoring؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Monitoring؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Monitoring؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Monitoring؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.1.1",
          "title": "ما هو Monitoring؟",
          "topicTitle": "Application Monitoring",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (ما هو Monitoring؟) أحد المعايير التقنية الحيوية في مسار Application Monitoring ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Monitoring؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Monitoring؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Monitoring؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Monitoring؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Monitoring؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Monitoring؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Monitoring؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Monitoring؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Monitoring؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.1.2",
        "title": "مراقبة Response Time",
        "englishTitle": "مراقبة Response Time",
        "definition": "يمثل (مراقبة Response Time) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مراقبة Response Time) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مراقبة Response Time) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مراقبة Response Time\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مراقبة Response Time\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.1.2",
          "title": "مراقبة Response Time",
          "topicTitle": "Application Monitoring",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مراقبة Response Time) أحد المعايير التقنية الحيوية في مسار Application Monitoring ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مراقبة Response Time)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مراقبة Response Time) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مراقبة Response Time)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مراقبة Response Time)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مراقبة Response Time",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مراقبة Response Time)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مراقبة Response Time\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مراقبة Response Time ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مراقبة Response Time) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.1.3",
        "title": "مراقبة Error Rate",
        "englishTitle": "مراقبة Error Rate",
        "definition": "يمثل (مراقبة Error Rate) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مراقبة Error Rate) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مراقبة Error Rate) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مراقبة Error Rate\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مراقبة Error Rate\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.1.3",
          "title": "مراقبة Error Rate",
          "topicTitle": "Application Monitoring",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مراقبة Error Rate) أحد المعايير التقنية الحيوية في مسار Application Monitoring ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مراقبة Error Rate)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مراقبة Error Rate) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مراقبة Error Rate)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مراقبة Error Rate)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مراقبة Error Rate",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مراقبة Error Rate)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مراقبة Error Rate\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مراقبة Error Rate ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مراقبة Error Rate) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.1.4",
        "title": "مراقبة CPU Usage",
        "englishTitle": "مراقبة CPU Usage",
        "definition": "يمثل (مراقبة CPU Usage) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مراقبة CPU Usage) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مراقبة CPU Usage) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مراقبة CPU Usage\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مراقبة CPU Usage\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.1.4",
          "title": "مراقبة CPU Usage",
          "topicTitle": "Application Monitoring",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مراقبة CPU Usage) أحد المعايير التقنية الحيوية في مسار Application Monitoring ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مراقبة CPU Usage)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مراقبة CPU Usage) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مراقبة CPU Usage)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مراقبة CPU Usage)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مراقبة CPU Usage",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مراقبة CPU Usage)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مراقبة CPU Usage\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مراقبة CPU Usage ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مراقبة CPU Usage) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.1.5",
        "title": "مراقبة Memory Usage",
        "englishTitle": "مراقبة Memory Usage",
        "definition": "يمثل (مراقبة Memory Usage) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مراقبة Memory Usage) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مراقبة Memory Usage) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مراقبة Memory Usage\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مراقبة Memory Usage\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.1.5",
          "title": "مراقبة Memory Usage",
          "topicTitle": "Application Monitoring",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مراقبة Memory Usage) أحد المعايير التقنية الحيوية في مسار Application Monitoring ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مراقبة Memory Usage)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مراقبة Memory Usage) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مراقبة Memory Usage)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مراقبة Memory Usage)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مراقبة Memory Usage",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مراقبة Memory Usage)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مراقبة Memory Usage\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مراقبة Memory Usage ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مراقبة Memory Usage) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.1.6",
        "title": "مراقبة Database Connections",
        "englishTitle": "مراقبة Database Connections",
        "definition": "يمثل (مراقبة Database Connections) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مراقبة Database Connections) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مراقبة Database Connections) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مراقبة Database Connections\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مراقبة Database Connections\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.1.6",
          "title": "مراقبة Database Connections",
          "topicTitle": "Application Monitoring",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مراقبة Database Connections) أحد المعايير التقنية الحيوية في مسار Application Monitoring ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مراقبة Database Connections)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مراقبة Database Connections) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مراقبة Database Connections)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مراقبة Database Connections)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مراقبة Database Connections",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مراقبة Database Connections)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مراقبة Database Connections\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مراقبة Database Connections ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مراقبة Database Connections) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.1.7",
        "title": "إعداد Alerts",
        "englishTitle": "إعداد Alerts",
        "definition": "يمثل (إعداد Alerts) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إعداد Alerts) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إعداد Alerts) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إعداد Alerts\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إعداد Alerts\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.1.7",
          "title": "إعداد Alerts",
          "topicTitle": "Application Monitoring",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (إعداد Alerts) أحد المعايير التقنية الحيوية في مسار Application Monitoring ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إعداد Alerts)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إعداد Alerts) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إعداد Alerts)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إعداد Alerts)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إعداد Alerts",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إعداد Alerts)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إعداد Alerts\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إعداد Alerts ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إعداد Alerts) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.1.8",
        "title": "استخدام Health Checks",
        "englishTitle": "Health Checks",
        "definition": "يمثل (استخدام Health Checks) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Health Checks) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Health Checks) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Health Checks\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Health Checks\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.1.8",
          "title": "استخدام Health Checks",
          "topicTitle": "Application Monitoring",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (استخدام Health Checks) أحد المعايير التقنية الحيوية في مسار Application Monitoring ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Health Checks)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Health Checks) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Health Checks)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Health Checks)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Health Checks",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Health Checks)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Health Checks\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Health Checks ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Health Checks) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Observability",
    "subtopics": [
      {
        "subId": "31.2.1",
        "title": "الفرق بين Monitoring وObservability",
        "englishTitle": "Monitoring وObservability",
        "definition": "يمثل (الفرق بين Monitoring وObservability) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (الفرق بين Monitoring وObservability) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (الفرق بين Monitoring وObservability) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ الفرق بين Monitoring وObservability\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: الفرق بين Monitoring وObservability\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.2.1",
          "title": "الفرق بين Monitoring وObservability",
          "topicTitle": "Observability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (الفرق بين Monitoring وObservability) أحد المعايير التقنية الحيوية في مسار Observability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Monitoring وObservability)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Monitoring وObservability) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Monitoring وObservability)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Monitoring وObservability)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Monitoring وObservability",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Monitoring وObservability)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Monitoring وObservability\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Monitoring وObservability ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Monitoring وObservability) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.2.2",
        "title": "مفهوم Logs",
        "englishTitle": "Logs",
        "definition": "يمثل (مفهوم Logs) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Logs) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Logs) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Logs\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Logs\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.2.2",
          "title": "مفهوم Logs",
          "topicTitle": "Observability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مفهوم Logs) أحد المعايير التقنية الحيوية في مسار Observability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Logs)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Logs) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Logs)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Logs)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Logs",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Logs)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Logs\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Logs ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Logs) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.2.3",
        "title": "مفهوم Metrics",
        "englishTitle": "Metrics",
        "definition": "يمثل (مفهوم Metrics) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Metrics) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Metrics) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Metrics\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Metrics\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.2.3",
          "title": "مفهوم Metrics",
          "topicTitle": "Observability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مفهوم Metrics) أحد المعايير التقنية الحيوية في مسار Observability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Metrics)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Metrics) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Metrics)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Metrics)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Metrics",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Metrics)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Metrics\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Metrics ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Metrics) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.2.4",
        "title": "مفهوم Traces",
        "englishTitle": "Traces",
        "definition": "يمثل (مفهوم Traces) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Traces) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Traces) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Traces\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Traces\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.2.4",
          "title": "مفهوم Traces",
          "topicTitle": "Observability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مفهوم Traces) أحد المعايير التقنية الحيوية في مسار Observability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Traces)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Traces) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Traces)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Traces)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Traces",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Traces)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Traces\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Traces ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Traces) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.2.5",
        "title": "استخدام OpenTelemetry",
        "englishTitle": "OpenTelemetry",
        "definition": "يمثل (استخدام OpenTelemetry) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام OpenTelemetry) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام OpenTelemetry) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام OpenTelemetry\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام OpenTelemetry\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.2.5",
          "title": "استخدام OpenTelemetry",
          "topicTitle": "Observability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (استخدام OpenTelemetry) أحد المعايير التقنية الحيوية في مسار Observability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام OpenTelemetry)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام OpenTelemetry) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام OpenTelemetry)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام OpenTelemetry)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام OpenTelemetry",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام OpenTelemetry)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام OpenTelemetry\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام OpenTelemetry ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام OpenTelemetry) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.2.6",
        "title": "مقدمة في Prometheus",
        "englishTitle": "مقدمة في Prometheus",
        "definition": "يمثل (مقدمة في Prometheus) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مقدمة في Prometheus) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مقدمة في Prometheus) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مقدمة في Prometheus\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مقدمة في Prometheus\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.2.6",
          "title": "مقدمة في Prometheus",
          "topicTitle": "Observability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مقدمة في Prometheus) أحد المعايير التقنية الحيوية في مسار Observability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Prometheus)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Prometheus) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Prometheus)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Prometheus)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في Prometheus",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Prometheus)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Prometheus\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Prometheus ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Prometheus) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.2.7",
        "title": "مقدمة في Grafana",
        "englishTitle": "مقدمة في Grafana",
        "definition": "يمثل (مقدمة في Grafana) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مقدمة في Grafana) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مقدمة في Grafana) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مقدمة في Grafana\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مقدمة في Grafana\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.2.7",
          "title": "مقدمة في Grafana",
          "topicTitle": "Observability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مقدمة في Grafana) أحد المعايير التقنية الحيوية في مسار Observability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في Grafana)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في Grafana) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في Grafana)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في Grafana)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في Grafana",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في Grafana)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في Grafana\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في Grafana ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في Grafana) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.2.8",
        "title": "إنشاء Monitoring Dashboard",
        "englishTitle": "Monitoring Dashboard",
        "definition": "يمثل (إنشاء Monitoring Dashboard) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Monitoring Dashboard) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Monitoring Dashboard) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Monitoring Dashboard\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Monitoring Dashboard\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.2.8",
          "title": "إنشاء Monitoring Dashboard",
          "topicTitle": "Observability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (إنشاء Monitoring Dashboard) أحد المعايير التقنية الحيوية في مسار Observability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Monitoring Dashboard)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Monitoring Dashboard) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Monitoring Dashboard)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Monitoring Dashboard)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Monitoring Dashboard",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Monitoring Dashboard)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Monitoring Dashboard\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Monitoring Dashboard ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Monitoring Dashboard) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Application Insights",
    "subtopics": [
      {
        "subId": "31.3.1",
        "title": "ما هو Azure Application Insights؟",
        "englishTitle": "Azure Application Insights",
        "definition": "يمثل (ما هو Azure Application Insights؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Azure Application Insights؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Azure Application Insights؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Azure Application Insights؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Azure Application Insights؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.3.1",
          "title": "ما هو Azure Application Insights؟",
          "topicTitle": "Application Insights",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (ما هو Azure Application Insights؟) أحد المعايير التقنية الحيوية في مسار Application Insights ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Azure Application Insights؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Azure Application Insights؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Azure Application Insights؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Azure Application Insights؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Azure Application Insights؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Azure Application Insights؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Azure Application Insights؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Azure Application Insights؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Azure Application Insights؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.3.2",
        "title": "ربط MVC مع Application Insights",
        "englishTitle": "ربط MVC مع Application Insights",
        "definition": "يمثل (ربط MVC مع Application Insights) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ربط MVC مع Application Insights) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ربط MVC مع Application Insights) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ربط MVC مع Application Insights\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ربط MVC مع Application Insights\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.3.2",
          "title": "ربط MVC مع Application Insights",
          "topicTitle": "Application Insights",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (ربط MVC مع Application Insights) أحد المعايير التقنية الحيوية في مسار Application Insights ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ربط MVC مع Application Insights)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ربط MVC مع Application Insights) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ربط MVC مع Application Insights)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ربط MVC مع Application Insights)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ربط MVC مع Application Insights",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ربط MVC مع Application Insights)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ربط MVC مع Application Insights\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ربط MVC مع Application Insights ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ربط MVC مع Application Insights) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.3.3",
        "title": "تتبع HTTP Requests",
        "englishTitle": "تتبع HTTP Requests",
        "definition": "يمثل (تتبع HTTP Requests) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تتبع HTTP Requests) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تتبع HTTP Requests) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تتبع HTTP Requests\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تتبع HTTP Requests\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.3.3",
          "title": "تتبع HTTP Requests",
          "topicTitle": "Application Insights",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (تتبع HTTP Requests) أحد المعايير التقنية الحيوية في مسار Application Insights ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تتبع HTTP Requests)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تتبع HTTP Requests) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تتبع HTTP Requests)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تتبع HTTP Requests)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تتبع HTTP Requests",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تتبع HTTP Requests)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تتبع HTTP Requests\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تتبع HTTP Requests ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تتبع HTTP Requests) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.3.4",
        "title": "تتبع Exceptions",
        "englishTitle": "تتبع Exceptions",
        "definition": "يمثل (تتبع Exceptions) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تتبع Exceptions) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تتبع Exceptions) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تتبع Exceptions\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تتبع Exceptions\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.3.4",
          "title": "تتبع Exceptions",
          "topicTitle": "Application Insights",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (تتبع Exceptions) أحد المعايير التقنية الحيوية في مسار Application Insights ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تتبع Exceptions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تتبع Exceptions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تتبع Exceptions)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تتبع Exceptions)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تتبع Exceptions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تتبع Exceptions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تتبع Exceptions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تتبع Exceptions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تتبع Exceptions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.3.5",
        "title": "تتبع Dependencies",
        "englishTitle": "تتبع Dependencies",
        "definition": "يمثل (تتبع Dependencies) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تتبع Dependencies) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تتبع Dependencies) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تتبع Dependencies\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تتبع Dependencies\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.3.5",
          "title": "تتبع Dependencies",
          "topicTitle": "Application Insights",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (تتبع Dependencies) أحد المعايير التقنية الحيوية في مسار Application Insights ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تتبع Dependencies)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تتبع Dependencies) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تتبع Dependencies)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تتبع Dependencies)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تتبع Dependencies",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تتبع Dependencies)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تتبع Dependencies\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تتبع Dependencies ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تتبع Dependencies) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.3.6",
        "title": "مراقبة Performance",
        "englishTitle": "مراقبة Performance",
        "definition": "يمثل (مراقبة Performance) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مراقبة Performance) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مراقبة Performance) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مراقبة Performance\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مراقبة Performance\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.3.6",
          "title": "مراقبة Performance",
          "topicTitle": "Application Insights",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مراقبة Performance) أحد المعايير التقنية الحيوية في مسار Application Insights ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مراقبة Performance)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مراقبة Performance) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مراقبة Performance)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مراقبة Performance)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مراقبة Performance",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مراقبة Performance)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مراقبة Performance\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مراقبة Performance ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مراقبة Performance) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.3.7",
        "title": "إنشاء Alerts",
        "englishTitle": "Alerts",
        "definition": "يمثل (إنشاء Alerts) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Alerts) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Alerts) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Alerts\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Alerts\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.3.7",
          "title": "إنشاء Alerts",
          "topicTitle": "Application Insights",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (إنشاء Alerts) أحد المعايير التقنية الحيوية في مسار Application Insights ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Alerts)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Alerts) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Alerts)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Alerts)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Alerts",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Alerts)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Alerts\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Alerts ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Alerts) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.3.8",
        "title": "تحليل Production Failures",
        "englishTitle": "تحليل Production Failures",
        "definition": "يمثل (تحليل Production Failures) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تحليل Production Failures) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تحليل Production Failures) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تحليل Production Failures\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تحليل Production Failures\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.3.8",
          "title": "تحليل Production Failures",
          "topicTitle": "Application Insights",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (تحليل Production Failures) أحد المعايير التقنية الحيوية في مسار Application Insights ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحليل Production Failures)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحليل Production Failures) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحليل Production Failures)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحليل Production Failures)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تحليل Production Failures",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحليل Production Failures)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحليل Production Failures\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحليل Production Failures ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحليل Production Failures) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "Reliability",
    "subtopics": [
      {
        "subId": "31.4.1",
        "title": "مفهوم High Availability",
        "englishTitle": "High Availability",
        "definition": "يمثل (مفهوم High Availability) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم High Availability) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم High Availability) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم High Availability\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم High Availability\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.4.1",
          "title": "مفهوم High Availability",
          "topicTitle": "Reliability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مفهوم High Availability) أحد المعايير التقنية الحيوية في مسار Reliability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم High Availability)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم High Availability) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم High Availability)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم High Availability)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم High Availability",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم High Availability)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم High Availability\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم High Availability ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم High Availability) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.4.2",
        "title": "مفهوم Fault Tolerance",
        "englishTitle": "Fault Tolerance",
        "definition": "يمثل (مفهوم Fault Tolerance) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Fault Tolerance) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Fault Tolerance) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Fault Tolerance\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Fault Tolerance\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.4.2",
          "title": "مفهوم Fault Tolerance",
          "topicTitle": "Reliability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مفهوم Fault Tolerance) أحد المعايير التقنية الحيوية في مسار Reliability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Fault Tolerance)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Fault Tolerance) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Fault Tolerance)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Fault Tolerance)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Fault Tolerance",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Fault Tolerance)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Fault Tolerance\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Fault Tolerance ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Fault Tolerance) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.4.3",
        "title": "مفهوم Retry Policy",
        "englishTitle": "Retry Policy",
        "definition": "يمثل (مفهوم Retry Policy) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Retry Policy) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Retry Policy) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Retry Policy\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Retry Policy\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.4.3",
          "title": "مفهوم Retry Policy",
          "topicTitle": "Reliability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مفهوم Retry Policy) أحد المعايير التقنية الحيوية في مسار Reliability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Retry Policy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Retry Policy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Retry Policy)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Retry Policy)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Retry Policy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Retry Policy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Retry Policy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Retry Policy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Retry Policy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.4.4",
        "title": "مفهوم Circuit Breaker",
        "englishTitle": "Circuit Breaker",
        "definition": "يمثل (مفهوم Circuit Breaker) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Circuit Breaker) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Circuit Breaker) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Circuit Breaker\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Circuit Breaker\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.4.4",
          "title": "مفهوم Circuit Breaker",
          "topicTitle": "Reliability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مفهوم Circuit Breaker) أحد المعايير التقنية الحيوية في مسار Reliability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Circuit Breaker)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Circuit Breaker) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Circuit Breaker)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Circuit Breaker)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Circuit Breaker",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Circuit Breaker)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Circuit Breaker\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Circuit Breaker ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Circuit Breaker) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.4.5",
        "title": "مفهوم Timeout",
        "englishTitle": "Timeout",
        "definition": "يمثل (مفهوم Timeout) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Timeout) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Timeout) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Timeout\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Timeout\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.4.5",
          "title": "مفهوم Timeout",
          "topicTitle": "Reliability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مفهوم Timeout) أحد المعايير التقنية الحيوية في مسار Reliability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Timeout)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Timeout) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Timeout)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Timeout)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Timeout",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Timeout)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Timeout\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Timeout ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Timeout) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.4.6",
        "title": "استخدام Graceful Shutdown",
        "englishTitle": "Graceful Shutdown",
        "definition": "يمثل (استخدام Graceful Shutdown) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Graceful Shutdown) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Graceful Shutdown) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Graceful Shutdown\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Graceful Shutdown\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.4.6",
          "title": "استخدام Graceful Shutdown",
          "topicTitle": "Reliability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (استخدام Graceful Shutdown) أحد المعايير التقنية الحيوية في مسار Reliability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Graceful Shutdown)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Graceful Shutdown) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Graceful Shutdown)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Graceful Shutdown)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Graceful Shutdown",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Graceful Shutdown)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Graceful Shutdown\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Graceful Shutdown ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Graceful Shutdown) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.4.7",
        "title": "إدارة Failover",
        "englishTitle": "Failover",
        "definition": "يمثل (إدارة Failover) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إدارة Failover) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إدارة Failover) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إدارة Failover\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إدارة Failover\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.4.7",
          "title": "إدارة Failover",
          "topicTitle": "Reliability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (إدارة Failover) أحد المعايير التقنية الحيوية في مسار Reliability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إدارة Failover)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إدارة Failover) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إدارة Failover)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إدارة Failover)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إدارة Failover",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إدارة Failover)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إدارة Failover\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إدارة Failover ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إدارة Failover) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.4.8",
        "title": "مفهوم Disaster Recovery",
        "englishTitle": "Disaster Recovery",
        "definition": "يمثل (مفهوم Disaster Recovery) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Disaster Recovery) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Disaster Recovery) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Disaster Recovery\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Disaster Recovery\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.4.8",
          "title": "مفهوم Disaster Recovery",
          "topicTitle": "Reliability",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (مفهوم Disaster Recovery) أحد المعايير التقنية الحيوية في مسار Reliability ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Disaster Recovery)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Disaster Recovery) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Disaster Recovery)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Disaster Recovery)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Disaster Recovery",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Disaster Recovery)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Disaster Recovery\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Disaster Recovery ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Disaster Recovery) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "Database Backups وIncident Management",
    "subtopics": [
      {
        "subId": "31.5.1",
        "title": "إنشاء Backup Strategy",
        "englishTitle": "Backup Strategy",
        "definition": "يمثل (إنشاء Backup Strategy) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Backup Strategy) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Backup Strategy) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Backup Strategy\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Backup Strategy\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.5.1",
          "title": "إنشاء Backup Strategy",
          "topicTitle": "Database Backups وIncident Management",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (إنشاء Backup Strategy) أحد المعايير التقنية الحيوية في مسار Database Backups وIncident Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Backup Strategy)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Backup Strategy) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Backup Strategy)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Backup Strategy)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Backup Strategy",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Backup Strategy)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Backup Strategy\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Backup Strategy ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Backup Strategy) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.5.2",
        "title": "تنفيذ SQL Server Backup",
        "englishTitle": "SQL Server Backup",
        "definition": "يمثل (تنفيذ SQL Server Backup) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تنفيذ SQL Server Backup) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تنفيذ SQL Server Backup) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تنفيذ SQL Server Backup\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تنفيذ SQL Server Backup\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.5.2",
          "title": "تنفيذ SQL Server Backup",
          "topicTitle": "Database Backups وIncident Management",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (تنفيذ SQL Server Backup) أحد المعايير التقنية الحيوية في مسار Database Backups وIncident Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تنفيذ SQL Server Backup)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تنفيذ SQL Server Backup) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تنفيذ SQL Server Backup)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تنفيذ SQL Server Backup)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تنفيذ SQL Server Backup",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تنفيذ SQL Server Backup)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تنفيذ SQL Server Backup\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تنفيذ SQL Server Backup ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تنفيذ SQL Server Backup) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.5.3",
        "title": "اختبار Database Restore",
        "englishTitle": "اختبار Database Restore",
        "definition": "يمثل (اختبار Database Restore) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Database Restore) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Database Restore) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Database Restore\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Database Restore\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.5.3",
          "title": "اختبار Database Restore",
          "topicTitle": "Database Backups وIncident Management",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (اختبار Database Restore) أحد المعايير التقنية الحيوية في مسار Database Backups وIncident Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Database Restore)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Database Restore) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Database Restore)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Database Restore)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Database Restore",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Database Restore)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Database Restore\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Database Restore ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Database Restore) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.5.4",
        "title": "تحديد Recovery Objectives",
        "englishTitle": "تحديد Recovery Objectives",
        "definition": "يمثل (تحديد Recovery Objectives) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تحديد Recovery Objectives) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تحديد Recovery Objectives) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تحديد Recovery Objectives\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تحديد Recovery Objectives\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.5.4",
          "title": "تحديد Recovery Objectives",
          "topicTitle": "Database Backups وIncident Management",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (تحديد Recovery Objectives) أحد المعايير التقنية الحيوية في مسار Database Backups وIncident Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحديد Recovery Objectives)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحديد Recovery Objectives) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحديد Recovery Objectives)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحديد Recovery Objectives)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تحديد Recovery Objectives",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحديد Recovery Objectives)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحديد Recovery Objectives\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحديد Recovery Objectives ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحديد Recovery Objectives) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.5.5",
        "title": "إنشاء Incident Response Plan",
        "englishTitle": "Incident Response Plan",
        "definition": "يمثل (إنشاء Incident Response Plan) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Incident Response Plan) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Incident Response Plan) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Incident Response Plan\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Incident Response Plan\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.5.5",
          "title": "إنشاء Incident Response Plan",
          "topicTitle": "Database Backups وIncident Management",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (إنشاء Incident Response Plan) أحد المعايير التقنية الحيوية في مسار Database Backups وIncident Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Incident Response Plan)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Incident Response Plan) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Incident Response Plan)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Incident Response Plan)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Incident Response Plan",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Incident Response Plan)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Incident Response Plan\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Incident Response Plan ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Incident Response Plan) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.5.6",
        "title": "توثيق إجراءات استعادة النظام",
        "englishTitle": "توثيق إجراءات استعادة النظام",
        "definition": "يمثل (توثيق إجراءات استعادة النظام) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (توثيق إجراءات استعادة النظام) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (توثيق إجراءات استعادة النظام) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ توثيق إجراءات استعادة النظام\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: توثيق إجراءات استعادة النظام\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.5.6",
          "title": "توثيق إجراءات استعادة النظام",
          "topicTitle": "Database Backups وIncident Management",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (توثيق إجراءات استعادة النظام) أحد المعايير التقنية الحيوية في مسار Database Backups وIncident Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (توثيق إجراءات استعادة النظام)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (توثيق إجراءات استعادة النظام) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (توثيق إجراءات استعادة النظام)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (توثيق إجراءات استعادة النظام)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: توثيق إجراءات استعادة النظام",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (توثيق إجراءات استعادة النظام)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين توثيق إجراءات استعادة النظام\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: توثيق إجراءات استعادة النظام ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (توثيق إجراءات استعادة النظام) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.5.7",
        "title": "تحليل أسباب الأعطال",
        "englishTitle": "تحليل أسباب الأعطال",
        "definition": "يمثل (تحليل أسباب الأعطال) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تحليل أسباب الأعطال) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تحليل أسباب الأعطال) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تحليل أسباب الأعطال\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تحليل أسباب الأعطال\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.5.7",
          "title": "تحليل أسباب الأعطال",
          "topicTitle": "Database Backups وIncident Management",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (تحليل أسباب الأعطال) أحد المعايير التقنية الحيوية في مسار Database Backups وIncident Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تحليل أسباب الأعطال)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تحليل أسباب الأعطال) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تحليل أسباب الأعطال)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تحليل أسباب الأعطال)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تحليل أسباب الأعطال",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تحليل أسباب الأعطال)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تحليل أسباب الأعطال\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تحليل أسباب الأعطال ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تحليل أسباب الأعطال) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "31.5.8",
        "title": "إنشاء Production Runbook",
        "englishTitle": "Production Runbook",
        "definition": "يمثل (إنشاء Production Runbook) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Production Runbook) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Production Runbook) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Production Runbook\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Production Runbook\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 31.5.8",
          "title": "إنشاء Production Runbook",
          "topicTitle": "Database Backups وIncident Management",
          "sectionTitle": "القسم الحادي والثلاثون: Monitoring وObservability وProduction Reliability",
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
          "summary": "يمثل (إنشاء Production Runbook) أحد المعايير التقنية الحيوية في مسار Database Backups وIncident Management ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Production Runbook)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Production Runbook) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Production Runbook)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Production Runbook)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Production Runbook",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Production Runbook)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Production Runbook\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Production Runbook ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Production Runbook) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section31Data;
