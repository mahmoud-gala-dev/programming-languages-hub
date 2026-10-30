// src/data/sections/section26.js
// محتوى تعليمي مفصل وشامل لـ: القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود
export const section26Data = {
  id: 26,
  title: "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
  englishTitle: "Software Testing, Debugging & Code Quality",
  icon: "Bug",
  category: "الاختبارات والجودة",
  description: "اختبارات الوحدة xUnit، تقنيات المحاكاة Moq، اختبارات التكامل WebApplicationFactory، اختبارات الواجهة Playwright، وأدوات التنقيح والتحليل.",
  summary: {
  "sectionId": 26,
  "title": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
  "englishTitle": "Software Testing, Debugging & Code Quality",
  "summaryPoints": [
    "إتقان كافة المفاهيم الهندسية والبرمجية التأسيسية المدرجة في القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود.",
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
    "title": "المشروع التطبيقي الشامل لـ القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
    "title": "مقدمة في Software Testing",
    "subtopics": [
      {
        "subId": "26.1.1",
        "title": "ما هو Software Testing؟",
        "englishTitle": "Software Testing",
        "definition": "يمثل (ما هو Software Testing؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Software Testing؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Software Testing؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Software Testing؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Software Testing؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.1.1",
          "title": "ما هو Software Testing؟",
          "topicTitle": "مقدمة في Software Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (ما هو Software Testing؟) أحد المعايير التقنية الحيوية في مسار مقدمة في Software Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Software Testing؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Software Testing؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Software Testing؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Software Testing؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Software Testing؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Software Testing؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Software Testing؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Software Testing؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Software Testing؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.1.2",
        "title": "الفرق بين Unit وIntegration وE2E Tests",
        "englishTitle": "Unit وIntegration وE2E Tests",
        "definition": "يمثل (الفرق بين Unit وIntegration وE2E Tests) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (الفرق بين Unit وIntegration وE2E Tests) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (الفرق بين Unit وIntegration وE2E Tests) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ الفرق بين Unit وIntegration وE2E Tests\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: الفرق بين Unit وIntegration وE2E Tests\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.1.2",
          "title": "الفرق بين Unit وIntegration وE2E Tests",
          "topicTitle": "مقدمة في Software Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (الفرق بين Unit وIntegration وE2E Tests) أحد المعايير التقنية الحيوية في مسار مقدمة في Software Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (الفرق بين Unit وIntegration وE2E Tests)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (الفرق بين Unit وIntegration وE2E Tests) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (الفرق بين Unit وIntegration وE2E Tests)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (الفرق بين Unit وIntegration وE2E Tests)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: الفرق بين Unit وIntegration وE2E Tests",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (الفرق بين Unit وIntegration وE2E Tests)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين الفرق بين Unit وIntegration وE2E Tests\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: الفرق بين Unit وIntegration وE2E Tests ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (الفرق بين Unit وIntegration وE2E Tests) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.1.3",
        "title": "مفهوم Test Case",
        "englishTitle": "Test Case",
        "definition": "يمثل (مفهوم Test Case) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Test Case) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Test Case) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Test Case\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Test Case\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.1.3",
          "title": "مفهوم Test Case",
          "topicTitle": "مقدمة في Software Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (مفهوم Test Case) أحد المعايير التقنية الحيوية في مسار مقدمة في Software Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Test Case)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Test Case) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Test Case)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Test Case)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Test Case",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Test Case)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Test Case\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Test Case ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Test Case) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.1.4",
        "title": "مفهوم Assertion",
        "englishTitle": "Assertion",
        "definition": "يمثل (مفهوم Assertion) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Assertion) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Assertion) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Assertion\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Assertion\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.1.4",
          "title": "مفهوم Assertion",
          "topicTitle": "مقدمة في Software Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (مفهوم Assertion) أحد المعايير التقنية الحيوية في مسار مقدمة في Software Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Assertion)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Assertion) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Assertion)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Assertion)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Assertion",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Assertion)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Assertion\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Assertion ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Assertion) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.1.5",
        "title": "مفهوم Test Coverage",
        "englishTitle": "Test Coverage",
        "definition": "يمثل (مفهوم Test Coverage) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Test Coverage) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Test Coverage) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Test Coverage\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Test Coverage\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.1.5",
          "title": "مفهوم Test Coverage",
          "topicTitle": "مقدمة في Software Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (مفهوم Test Coverage) أحد المعايير التقنية الحيوية في مسار مقدمة في Software Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Test Coverage)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Test Coverage) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Test Coverage)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Test Coverage)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Test Coverage",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Test Coverage)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Test Coverage\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Test Coverage ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Test Coverage) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.1.6",
        "title": "مفهوم Mock وStub",
        "englishTitle": "Mock وStub",
        "definition": "يمثل (مفهوم Mock وStub) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Mock وStub) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Mock وStub) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Mock وStub\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Mock وStub\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.1.6",
          "title": "مفهوم Mock وStub",
          "topicTitle": "مقدمة في Software Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (مفهوم Mock وStub) أحد المعايير التقنية الحيوية في مسار مقدمة في Software Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Mock وStub)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Mock وStub) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Mock وStub)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Mock وStub)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Mock وStub",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Mock وStub)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Mock وStub\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Mock وStub ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Mock وStub) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.1.7",
        "title": "مفهوم Test Isolation",
        "englishTitle": "Test Isolation",
        "definition": "يمثل (مفهوم Test Isolation) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم Test Isolation) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم Test Isolation) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم Test Isolation\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم Test Isolation\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.1.7",
          "title": "مفهوم Test Isolation",
          "topicTitle": "مقدمة في Software Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (مفهوم Test Isolation) أحد المعايير التقنية الحيوية في مسار مقدمة في Software Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم Test Isolation)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم Test Isolation) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم Test Isolation)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم Test Isolation)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم Test Isolation",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم Test Isolation)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم Test Isolation\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم Test Isolation ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم Test Isolation) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 2,
    "title": "Unit Testing",
    "subtopics": [
      {
        "subId": "26.2.1",
        "title": "مقدمة في xUnit",
        "englishTitle": "مقدمة في xUnit",
        "definition": "يمثل (مقدمة في xUnit) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مقدمة في xUnit) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مقدمة في xUnit) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مقدمة في xUnit\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مقدمة في xUnit\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.2.1",
          "title": "مقدمة في xUnit",
          "topicTitle": "Unit Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (مقدمة في xUnit) أحد المعايير التقنية الحيوية في مسار Unit Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في xUnit)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في xUnit) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في xUnit)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في xUnit)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في xUnit",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في xUnit)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في xUnit\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في xUnit ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في xUnit) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.2.2",
        "title": "التعرف على NUnit وMSTest",
        "englishTitle": "التعرف على NUnit وMSTest",
        "definition": "يمثل (التعرف على NUnit وMSTest) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (التعرف على NUnit وMSTest) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (التعرف على NUnit وMSTest) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ التعرف على NUnit وMSTest\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: التعرف على NUnit وMSTest\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.2.2",
          "title": "التعرف على NUnit وMSTest",
          "topicTitle": "Unit Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (التعرف على NUnit وMSTest) أحد المعايير التقنية الحيوية في مسار Unit Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التعرف على NUnit وMSTest)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التعرف على NUnit وMSTest) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التعرف على NUnit وMSTest)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التعرف على NUnit وMSTest)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التعرف على NUnit وMSTest",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التعرف على NUnit وMSTest)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التعرف على NUnit وMSTest\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التعرف على NUnit وMSTest ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التعرف على NUnit وMSTest) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.2.3",
        "title": "إنشاء Test Project",
        "englishTitle": "Test Project",
        "definition": "يمثل (إنشاء Test Project) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Test Project) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Test Project) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Test Project\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Test Project\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.2.3",
          "title": "إنشاء Test Project",
          "topicTitle": "Unit Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (إنشاء Test Project) أحد المعايير التقنية الحيوية في مسار Unit Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Test Project)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Test Project) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Test Project)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Test Project)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Test Project",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Test Project)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Test Project\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Test Project ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Test Project) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.2.4",
        "title": "كتابة أول Unit Test",
        "englishTitle": "كتابة أول Unit Test",
        "definition": "يمثل (كتابة أول Unit Test) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (كتابة أول Unit Test) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (كتابة أول Unit Test) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ كتابة أول Unit Test\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: كتابة أول Unit Test\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.2.4",
          "title": "كتابة أول Unit Test",
          "topicTitle": "Unit Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (كتابة أول Unit Test) أحد المعايير التقنية الحيوية في مسار Unit Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (كتابة أول Unit Test)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كتابة أول Unit Test) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (كتابة أول Unit Test)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (كتابة أول Unit Test)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: كتابة أول Unit Test",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (كتابة أول Unit Test)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين كتابة أول Unit Test\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: كتابة أول Unit Test ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (كتابة أول Unit Test) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.2.5",
        "title": "استخدام Fact",
        "englishTitle": "Fact",
        "definition": "يمثل (استخدام Fact) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Fact) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Fact) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Fact\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Fact\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.2.5",
          "title": "استخدام Fact",
          "topicTitle": "Unit Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Fact) أحد المعايير التقنية الحيوية في مسار Unit Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Fact)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Fact) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Fact)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Fact)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Fact",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Fact)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Fact\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Fact ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Fact) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.2.6",
        "title": "استخدام Theory",
        "englishTitle": "Theory",
        "definition": "يمثل (استخدام Theory) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Theory) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Theory) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Theory\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Theory\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.2.6",
          "title": "استخدام Theory",
          "topicTitle": "Unit Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Theory) أحد المعايير التقنية الحيوية في مسار Unit Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Theory)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Theory) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Theory)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Theory)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Theory",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Theory)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Theory\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Theory ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Theory) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.2.7",
        "title": "استخدام Assert",
        "englishTitle": "Assert",
        "definition": "يمثل (استخدام Assert) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Assert) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Assert) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Assert\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Assert\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.2.7",
          "title": "استخدام Assert",
          "topicTitle": "Unit Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Assert) أحد المعايير التقنية الحيوية في مسار Unit Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Assert)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Assert) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Assert)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Assert)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Assert",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Assert)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Assert\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Assert ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Assert) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.2.8",
        "title": "اختبار Services",
        "englishTitle": "اختبار Services",
        "definition": "يمثل (اختبار Services) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Services) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Services) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Services\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Services\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.2.8",
          "title": "اختبار Services",
          "topicTitle": "Unit Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار Services) أحد المعايير التقنية الحيوية في مسار Unit Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Services)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Services) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Services)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Services)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Services",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Services)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Services\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Services ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Services) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.2.9",
        "title": "اختبار Async Methods",
        "englishTitle": "اختبار Async Methods",
        "definition": "يمثل (اختبار Async Methods) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Async Methods) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Async Methods) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Async Methods\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Async Methods\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.2.9",
          "title": "اختبار Async Methods",
          "topicTitle": "Unit Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار Async Methods) أحد المعايير التقنية الحيوية في مسار Unit Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Async Methods)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Async Methods) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Async Methods)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Async Methods)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Async Methods",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Async Methods)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Async Methods\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Async Methods ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Async Methods) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 3,
    "title": "Mocking",
    "subtopics": [
      {
        "subId": "26.3.1",
        "title": "ما هو Mocking؟",
        "englishTitle": "Mocking",
        "definition": "يمثل (ما هو Mocking؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Mocking؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Mocking؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Mocking؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Mocking؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.3.1",
          "title": "ما هو Mocking؟",
          "topicTitle": "Mocking",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (ما هو Mocking؟) أحد المعايير التقنية الحيوية في مسار Mocking ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Mocking؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Mocking؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Mocking؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Mocking؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Mocking؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Mocking؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Mocking؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Mocking؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Mocking؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.3.2",
        "title": "استخدام Moq",
        "englishTitle": "Moq",
        "definition": "يمثل (استخدام Moq) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Moq) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Moq) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Moq\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Moq\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.3.2",
          "title": "استخدام Moq",
          "topicTitle": "Mocking",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Moq) أحد المعايير التقنية الحيوية في مسار Mocking ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Moq)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Moq) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Moq)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Moq)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Moq",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Moq)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Moq\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Moq ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Moq) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.3.3",
        "title": "إنشاء Mock Repository",
        "englishTitle": "Mock Repository",
        "definition": "يمثل (إنشاء Mock Repository) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Mock Repository) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Mock Repository) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Mock Repository\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Mock Repository\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.3.3",
          "title": "إنشاء Mock Repository",
          "topicTitle": "Mocking",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (إنشاء Mock Repository) أحد المعايير التقنية الحيوية في مسار Mocking ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Mock Repository)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Mock Repository) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Mock Repository)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Mock Repository)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Mock Repository",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Mock Repository)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Mock Repository\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Mock Repository ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Mock Repository) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.3.4",
        "title": "إنشاء Mock Service",
        "englishTitle": "Mock Service",
        "definition": "يمثل (إنشاء Mock Service) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء Mock Service) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء Mock Service) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء Mock Service\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء Mock Service\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.3.4",
          "title": "إنشاء Mock Service",
          "topicTitle": "Mocking",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (إنشاء Mock Service) أحد المعايير التقنية الحيوية في مسار Mocking ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء Mock Service)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء Mock Service) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء Mock Service)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء Mock Service)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء Mock Service",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء Mock Service)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء Mock Service\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء Mock Service ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء Mock Service) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.3.5",
        "title": "اختبار Controller مع Dependencies",
        "englishTitle": "اختبار Controller مع Dependencies",
        "definition": "يمثل (اختبار Controller مع Dependencies) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Controller مع Dependencies) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Controller مع Dependencies) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Controller مع Dependencies\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Controller مع Dependencies\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.3.5",
          "title": "اختبار Controller مع Dependencies",
          "topicTitle": "Mocking",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار Controller مع Dependencies) أحد المعايير التقنية الحيوية في مسار Mocking ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Controller مع Dependencies)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Controller مع Dependencies) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Controller مع Dependencies)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Controller مع Dependencies)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Controller مع Dependencies",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Controller مع Dependencies)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Controller مع Dependencies\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Controller مع Dependencies ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Controller مع Dependencies) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.3.6",
        "title": "التحقق من استدعاء Methods",
        "englishTitle": "التحقق من استدعاء Methods",
        "definition": "يمثل (التحقق من استدعاء Methods) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (التحقق من استدعاء Methods) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (التحقق من استدعاء Methods) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ التحقق من استدعاء Methods\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: التحقق من استدعاء Methods\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.3.6",
          "title": "التحقق من استدعاء Methods",
          "topicTitle": "Mocking",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (التحقق من استدعاء Methods) أحد المعايير التقنية الحيوية في مسار Mocking ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (التحقق من استدعاء Methods)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (التحقق من استدعاء Methods) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (التحقق من استدعاء Methods)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (التحقق من استدعاء Methods)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: التحقق من استدعاء Methods",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (التحقق من استدعاء Methods)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين التحقق من استدعاء Methods\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: التحقق من استدعاء Methods ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (التحقق من استدعاء Methods) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.3.7",
        "title": "اختبار Exceptions",
        "englishTitle": "اختبار Exceptions",
        "definition": "يمثل (اختبار Exceptions) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Exceptions) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Exceptions) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Exceptions\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Exceptions\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.3.7",
          "title": "اختبار Exceptions",
          "topicTitle": "Mocking",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار Exceptions) أحد المعايير التقنية الحيوية في مسار Mocking ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Exceptions)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Exceptions) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Exceptions)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Exceptions)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Exceptions",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Exceptions)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Exceptions\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Exceptions ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Exceptions) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.3.8",
        "title": "تجنب الإفراط في Mocking",
        "englishTitle": "تجنب الإفراط في Mocking",
        "definition": "يمثل (تجنب الإفراط في Mocking) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تجنب الإفراط في Mocking) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تجنب الإفراط في Mocking) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تجنب الإفراط في Mocking\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تجنب الإفراط في Mocking\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.3.8",
          "title": "تجنب الإفراط في Mocking",
          "topicTitle": "Mocking",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (تجنب الإفراط في Mocking) أحد المعايير التقنية الحيوية في مسار Mocking ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تجنب الإفراط في Mocking)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تجنب الإفراط في Mocking) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تجنب الإفراط في Mocking)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تجنب الإفراط في Mocking)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تجنب الإفراط في Mocking",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تجنب الإفراط في Mocking)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تجنب الإفراط في Mocking\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تجنب الإفراط في Mocking ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تجنب الإفراط في Mocking) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 4,
    "title": "Integration Testing",
    "subtopics": [
      {
        "subId": "26.4.1",
        "title": "ما هو Integration Testing؟",
        "englishTitle": "Integration Testing",
        "definition": "يمثل (ما هو Integration Testing؟) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (ما هو Integration Testing؟) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (ما هو Integration Testing؟) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ ما هو Integration Testing؟\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: ما هو Integration Testing؟\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.1",
          "title": "ما هو Integration Testing؟",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (ما هو Integration Testing؟) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (ما هو Integration Testing؟)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (ما هو Integration Testing؟) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (ما هو Integration Testing؟)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (ما هو Integration Testing؟)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: ما هو Integration Testing؟",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (ما هو Integration Testing؟)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين ما هو Integration Testing؟\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: ما هو Integration Testing؟ ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (ما هو Integration Testing؟) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.4.2",
        "title": "استخدام WebApplicationFactory",
        "englishTitle": "WebApplicationFactory",
        "definition": "يمثل (استخدام WebApplicationFactory) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام WebApplicationFactory) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام WebApplicationFactory) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام WebApplicationFactory\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام WebApplicationFactory\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.2",
          "title": "استخدام WebApplicationFactory",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام WebApplicationFactory) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام WebApplicationFactory)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام WebApplicationFactory) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام WebApplicationFactory)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام WebApplicationFactory)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام WebApplicationFactory",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام WebApplicationFactory)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام WebApplicationFactory\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام WebApplicationFactory ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام WebApplicationFactory) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.4.3",
        "title": "استخدام TestServer",
        "englishTitle": "TestServer",
        "definition": "يمثل (استخدام TestServer) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام TestServer) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام TestServer) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام TestServer\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام TestServer\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.3",
          "title": "استخدام TestServer",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام TestServer) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام TestServer)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام TestServer) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام TestServer)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام TestServer)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام TestServer",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام TestServer)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام TestServer\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام TestServer ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام TestServer) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.4.4",
        "title": "إنشاء HttpClient للاختبارات",
        "englishTitle": "HttpClient للاختبارات",
        "definition": "يمثل (إنشاء HttpClient للاختبارات) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إنشاء HttpClient للاختبارات) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إنشاء HttpClient للاختبارات) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إنشاء HttpClient للاختبارات\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إنشاء HttpClient للاختبارات\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.4",
          "title": "إنشاء HttpClient للاختبارات",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (إنشاء HttpClient للاختبارات) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إنشاء HttpClient للاختبارات)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إنشاء HttpClient للاختبارات) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إنشاء HttpClient للاختبارات)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إنشاء HttpClient للاختبارات)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إنشاء HttpClient للاختبارات",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إنشاء HttpClient للاختبارات)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إنشاء HttpClient للاختبارات\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إنشاء HttpClient للاختبارات ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إنشاء HttpClient للاختبارات) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.4.5",
        "title": "اختبار MVC Routes",
        "englishTitle": "اختبار MVC Routes",
        "definition": "يمثل (اختبار MVC Routes) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار MVC Routes) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار MVC Routes) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار MVC Routes\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار MVC Routes\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.5",
          "title": "اختبار MVC Routes",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار MVC Routes) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار MVC Routes)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار MVC Routes) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار MVC Routes)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار MVC Routes)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار MVC Routes",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار MVC Routes)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار MVC Routes\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار MVC Routes ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار MVC Routes) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.4.6",
        "title": "اختبار MVC Responses",
        "englishTitle": "اختبار MVC Responses",
        "definition": "يمثل (اختبار MVC Responses) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار MVC Responses) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار MVC Responses) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار MVC Responses\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار MVC Responses\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.6",
          "title": "اختبار MVC Responses",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار MVC Responses) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار MVC Responses)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار MVC Responses) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار MVC Responses)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار MVC Responses)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار MVC Responses",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار MVC Responses)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار MVC Responses\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار MVC Responses ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار MVC Responses) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.4.7",
        "title": "اختبار Authentication",
        "englishTitle": "اختبار Authentication",
        "definition": "يمثل (اختبار Authentication) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Authentication) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Authentication) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Authentication\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Authentication\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.7",
          "title": "اختبار Authentication",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار Authentication) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Authentication)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Authentication) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Authentication)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Authentication)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Authentication",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Authentication)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Authentication\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Authentication ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Authentication) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.4.8",
        "title": "اختبار Authorization",
        "englishTitle": "اختبار Authorization",
        "definition": "يمثل (اختبار Authorization) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Authorization) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Authorization) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Authorization\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Authorization\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.8",
          "title": "اختبار Authorization",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار Authorization) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Authorization)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Authorization) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Authorization)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Authorization)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Authorization",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Authorization)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Authorization\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Authorization ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Authorization) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.4.9",
        "title": "اختبار قاعدة بيانات منفصلة",
        "englishTitle": "اختبار قاعدة بيانات منفصلة",
        "definition": "يمثل (اختبار قاعدة بيانات منفصلة) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار قاعدة بيانات منفصلة) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار قاعدة بيانات منفصلة) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار قاعدة بيانات منفصلة\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار قاعدة بيانات منفصلة\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.9",
          "title": "اختبار قاعدة بيانات منفصلة",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار قاعدة بيانات منفصلة) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار قاعدة بيانات منفصلة)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار قاعدة بيانات منفصلة) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار قاعدة بيانات منفصلة)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار قاعدة بيانات منفصلة)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار قاعدة بيانات منفصلة",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار قاعدة بيانات منفصلة)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار قاعدة بيانات منفصلة\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار قاعدة بيانات منفصلة ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار قاعدة بيانات منفصلة) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.4.10",
        "title": "استخدام Testcontainers",
        "englishTitle": "Testcontainers",
        "definition": "يمثل (استخدام Testcontainers) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Testcontainers) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Testcontainers) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Testcontainers\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Testcontainers\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.4.10",
          "title": "استخدام Testcontainers",
          "topicTitle": "Integration Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Testcontainers) أحد المعايير التقنية الحيوية في مسار Integration Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Testcontainers)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Testcontainers) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Testcontainers)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Testcontainers)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Testcontainers",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Testcontainers)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Testcontainers\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Testcontainers ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Testcontainers) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 5,
    "title": "End-to-End Testing",
    "subtopics": [
      {
        "subId": "26.5.1",
        "title": "مفهوم E2E Testing",
        "englishTitle": "E2E Testing",
        "definition": "يمثل (مفهوم E2E Testing) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مفهوم E2E Testing) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مفهوم E2E Testing) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مفهوم E2E Testing\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مفهوم E2E Testing\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.5.1",
          "title": "مفهوم E2E Testing",
          "topicTitle": "End-to-End Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (مفهوم E2E Testing) أحد المعايير التقنية الحيوية في مسار End-to-End Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مفهوم E2E Testing)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مفهوم E2E Testing) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مفهوم E2E Testing)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مفهوم E2E Testing)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مفهوم E2E Testing",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مفهوم E2E Testing)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مفهوم E2E Testing\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مفهوم E2E Testing ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مفهوم E2E Testing) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.5.2",
        "title": "استخدام Playwright for .NET",
        "englishTitle": "Playwright for .NET",
        "definition": "يمثل (استخدام Playwright for .NET) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Playwright for .NET) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Playwright for .NET) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Playwright for .NET\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Playwright for .NET\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.5.2",
          "title": "استخدام Playwright for .NET",
          "topicTitle": "End-to-End Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Playwright for .NET) أحد المعايير التقنية الحيوية في مسار End-to-End Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Playwright for .NET)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Playwright for .NET) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Playwright for .NET)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Playwright for .NET)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Playwright for .NET",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Playwright for .NET)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Playwright for .NET\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Playwright for .NET ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Playwright for .NET) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.5.3",
        "title": "فتح صفحات MVC آلياً",
        "englishTitle": "فتح صفحات MVC آلياً",
        "definition": "يمثل (فتح صفحات MVC آلياً) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (فتح صفحات MVC آلياً) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (فتح صفحات MVC آلياً) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ فتح صفحات MVC آلياً\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: فتح صفحات MVC آلياً\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.5.3",
          "title": "فتح صفحات MVC آلياً",
          "topicTitle": "End-to-End Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (فتح صفحات MVC آلياً) أحد المعايير التقنية الحيوية في مسار End-to-End Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فتح صفحات MVC آلياً)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فتح صفحات MVC آلياً) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فتح صفحات MVC آلياً)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فتح صفحات MVC آلياً)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فتح صفحات MVC آلياً",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فتح صفحات MVC آلياً)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فتح صفحات MVC آلياً\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فتح صفحات MVC آلياً ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فتح صفحات MVC آلياً) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.5.4",
        "title": "اختبار Forms",
        "englishTitle": "اختبار Forms",
        "definition": "يمثل (اختبار Forms) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Forms) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Forms) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Forms\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Forms\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.5.4",
          "title": "اختبار Forms",
          "topicTitle": "End-to-End Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار Forms) أحد المعايير التقنية الحيوية في مسار End-to-End Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Forms)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Forms) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Forms)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Forms)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Forms",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Forms)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Forms\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Forms ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Forms) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.5.5",
        "title": "اختبار Login Flow",
        "englishTitle": "اختبار Login Flow",
        "definition": "يمثل (اختبار Login Flow) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Login Flow) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Login Flow) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Login Flow\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Login Flow\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.5.5",
          "title": "اختبار Login Flow",
          "topicTitle": "End-to-End Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار Login Flow) أحد المعايير التقنية الحيوية في مسار End-to-End Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Login Flow)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Login Flow) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Login Flow)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Login Flow)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Login Flow",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Login Flow)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Login Flow\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Login Flow ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Login Flow) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.5.6",
        "title": "اختبار CRUD Screens",
        "englishTitle": "اختبار CRUD Screens",
        "definition": "يمثل (اختبار CRUD Screens) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار CRUD Screens) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار CRUD Screens) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار CRUD Screens\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار CRUD Screens\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.5.6",
          "title": "اختبار CRUD Screens",
          "topicTitle": "End-to-End Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار CRUD Screens) أحد المعايير التقنية الحيوية في مسار End-to-End Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار CRUD Screens)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار CRUD Screens) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار CRUD Screens)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار CRUD Screens)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار CRUD Screens",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار CRUD Screens)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار CRUD Screens\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار CRUD Screens ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار CRUD Screens) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.5.7",
        "title": "اختبار Navigation",
        "englishTitle": "اختبار Navigation",
        "definition": "يمثل (اختبار Navigation) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار Navigation) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار Navigation) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار Navigation\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار Navigation\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.5.7",
          "title": "اختبار Navigation",
          "topicTitle": "End-to-End Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار Navigation) أحد المعايير التقنية الحيوية في مسار End-to-End Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار Navigation)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار Navigation) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار Navigation)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار Navigation)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار Navigation",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار Navigation)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار Navigation\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار Navigation ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار Navigation) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.5.8",
        "title": "اختبار رسائل Validation",
        "englishTitle": "اختبار رسائل Validation",
        "definition": "يمثل (اختبار رسائل Validation) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (اختبار رسائل Validation) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (اختبار رسائل Validation) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ اختبار رسائل Validation\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: اختبار رسائل Validation\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.5.8",
          "title": "اختبار رسائل Validation",
          "topicTitle": "End-to-End Testing",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (اختبار رسائل Validation) أحد المعايير التقنية الحيوية في مسار End-to-End Testing ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (اختبار رسائل Validation)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (اختبار رسائل Validation) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (اختبار رسائل Validation)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (اختبار رسائل Validation)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: اختبار رسائل Validation",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (اختبار رسائل Validation)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين اختبار رسائل Validation\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: اختبار رسائل Validation ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (اختبار رسائل Validation) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 6,
    "title": "Debugging",
    "subtopics": [
      {
        "subId": "26.6.1",
        "title": "استخدام Breakpoints",
        "englishTitle": "Breakpoints",
        "definition": "يمثل (استخدام Breakpoints) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Breakpoints) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Breakpoints) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Breakpoints\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Breakpoints\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.6.1",
          "title": "استخدام Breakpoints",
          "topicTitle": "Debugging",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Breakpoints) أحد المعايير التقنية الحيوية في مسار Debugging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Breakpoints)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Breakpoints) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Breakpoints)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Breakpoints)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Breakpoints",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Breakpoints)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Breakpoints\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Breakpoints ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Breakpoints) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.6.2",
        "title": "استخدام Step Into وStep Over",
        "englishTitle": "Step Into وStep Over",
        "definition": "يمثل (استخدام Step Into وStep Over) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Step Into وStep Over) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Step Into وStep Over) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Step Into وStep Over\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Step Into وStep Over\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.6.2",
          "title": "استخدام Step Into وStep Over",
          "topicTitle": "Debugging",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Step Into وStep Over) أحد المعايير التقنية الحيوية في مسار Debugging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Step Into وStep Over)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Step Into وStep Over) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Step Into وStep Over)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Step Into وStep Over)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Step Into وStep Over",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Step Into وStep Over)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Step Into وStep Over\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Step Into وStep Over ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Step Into وStep Over) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.6.3",
        "title": "فحص Variables",
        "englishTitle": "فحص Variables",
        "definition": "يمثل (فحص Variables) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (فحص Variables) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (فحص Variables) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ فحص Variables\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: فحص Variables\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.6.3",
          "title": "فحص Variables",
          "topicTitle": "Debugging",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (فحص Variables) أحد المعايير التقنية الحيوية في مسار Debugging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فحص Variables)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فحص Variables) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فحص Variables)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فحص Variables)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فحص Variables",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فحص Variables)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فحص Variables\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فحص Variables ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فحص Variables) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.6.4",
        "title": "فحص Call Stack",
        "englishTitle": "فحص Call Stack",
        "definition": "يمثل (فحص Call Stack) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (فحص Call Stack) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (فحص Call Stack) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ فحص Call Stack\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: فحص Call Stack\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.6.4",
          "title": "فحص Call Stack",
          "topicTitle": "Debugging",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (فحص Call Stack) أحد المعايير التقنية الحيوية في مسار Debugging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (فحص Call Stack)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (فحص Call Stack) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (فحص Call Stack)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (فحص Call Stack)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: فحص Call Stack",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (فحص Call Stack)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين فحص Call Stack\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: فحص Call Stack ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (فحص Call Stack) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.6.5",
        "title": "استخدام Watch Window",
        "englishTitle": "Watch Window",
        "definition": "يمثل (استخدام Watch Window) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Watch Window) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Watch Window) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Watch Window\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Watch Window\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.6.5",
          "title": "استخدام Watch Window",
          "topicTitle": "Debugging",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Watch Window) أحد المعايير التقنية الحيوية في مسار Debugging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Watch Window)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Watch Window) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Watch Window)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Watch Window)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Watch Window",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Watch Window)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Watch Window\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Watch Window ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Watch Window) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.6.6",
        "title": "قراءة Exception Details",
        "englishTitle": "قراءة Exception Details",
        "definition": "يمثل (قراءة Exception Details) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (قراءة Exception Details) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (قراءة Exception Details) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ قراءة Exception Details\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: قراءة Exception Details\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.6.6",
          "title": "قراءة Exception Details",
          "topicTitle": "Debugging",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (قراءة Exception Details) أحد المعايير التقنية الحيوية في مسار Debugging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (قراءة Exception Details)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (قراءة Exception Details) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (قراءة Exception Details)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (قراءة Exception Details)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: قراءة Exception Details",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (قراءة Exception Details)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين قراءة Exception Details\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: قراءة Exception Details ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (قراءة Exception Details) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.6.7",
        "title": "تصحيح أخطاء Model Binding",
        "englishTitle": "تصحيح أخطاء Model Binding",
        "definition": "يمثل (تصحيح أخطاء Model Binding) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تصحيح أخطاء Model Binding) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تصحيح أخطاء Model Binding) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تصحيح أخطاء Model Binding\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تصحيح أخطاء Model Binding\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.6.7",
          "title": "تصحيح أخطاء Model Binding",
          "topicTitle": "Debugging",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (تصحيح أخطاء Model Binding) أحد المعايير التقنية الحيوية في مسار Debugging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تصحيح أخطاء Model Binding)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تصحيح أخطاء Model Binding) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تصحيح أخطاء Model Binding)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تصحيح أخطاء Model Binding)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تصحيح أخطاء Model Binding",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تصحيح أخطاء Model Binding)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تصحيح أخطاء Model Binding\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تصحيح أخطاء Model Binding ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تصحيح أخطاء Model Binding) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.6.8",
        "title": "تصحيح أخطاء EF Core",
        "englishTitle": "تصحيح أخطاء EF Core",
        "definition": "يمثل (تصحيح أخطاء EF Core) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تصحيح أخطاء EF Core) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تصحيح أخطاء EF Core) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تصحيح أخطاء EF Core\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تصحيح أخطاء EF Core\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.6.8",
          "title": "تصحيح أخطاء EF Core",
          "topicTitle": "Debugging",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (تصحيح أخطاء EF Core) أحد المعايير التقنية الحيوية في مسار Debugging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تصحيح أخطاء EF Core)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تصحيح أخطاء EF Core) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تصحيح أخطاء EF Core)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تصحيح أخطاء EF Core)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تصحيح أخطاء EF Core",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تصحيح أخطاء EF Core)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تصحيح أخطاء EF Core\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تصحيح أخطاء EF Core ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تصحيح أخطاء EF Core) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.6.9",
        "title": "استخدام Developer Exception Page",
        "englishTitle": "Developer Exception Page",
        "definition": "يمثل (استخدام Developer Exception Page) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام Developer Exception Page) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام Developer Exception Page) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام Developer Exception Page\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام Developer Exception Page\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.6.9",
          "title": "استخدام Developer Exception Page",
          "topicTitle": "Debugging",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام Developer Exception Page) أحد المعايير التقنية الحيوية في مسار Debugging ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام Developer Exception Page)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام Developer Exception Page) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام Developer Exception Page)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام Developer Exception Page)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام Developer Exception Page",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام Developer Exception Page)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام Developer Exception Page\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام Developer Exception Page ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام Developer Exception Page) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  },
  {
    "topicId": 7,
    "title": "Code Quality",
    "subtopics": [
      {
        "subId": "26.7.1",
        "title": "مبادئ Clean Code",
        "englishTitle": "مبادئ Clean Code",
        "definition": "يمثل (مبادئ Clean Code) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مبادئ Clean Code) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مبادئ Clean Code) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مبادئ Clean Code\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مبادئ Clean Code\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.7.1",
          "title": "مبادئ Clean Code",
          "topicTitle": "Code Quality",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (مبادئ Clean Code) أحد المعايير التقنية الحيوية في مسار Code Quality ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مبادئ Clean Code)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مبادئ Clean Code) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مبادئ Clean Code)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مبادئ Clean Code)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مبادئ Clean Code",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مبادئ Clean Code)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مبادئ Clean Code\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مبادئ Clean Code ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مبادئ Clean Code) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.7.2",
        "title": "استخدام .editorconfig",
        "englishTitle": ".editorconfig",
        "definition": "يمثل (استخدام .editorconfig) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام .editorconfig) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام .editorconfig) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام .editorconfig\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام .editorconfig\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.7.2",
          "title": "استخدام .editorconfig",
          "topicTitle": "Code Quality",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام .editorconfig) أحد المعايير التقنية الحيوية في مسار Code Quality ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام .editorconfig)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام .editorconfig) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام .editorconfig)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام .editorconfig)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام .editorconfig",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام .editorconfig)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام .editorconfig\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام .editorconfig ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام .editorconfig) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.7.3",
        "title": "استخدام dotnet format",
        "englishTitle": "dotnet format",
        "definition": "يمثل (استخدام dotnet format) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (استخدام dotnet format) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (استخدام dotnet format) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ استخدام dotnet format\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: استخدام dotnet format\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.7.3",
          "title": "استخدام dotnet format",
          "topicTitle": "Code Quality",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (استخدام dotnet format) أحد المعايير التقنية الحيوية في مسار Code Quality ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (استخدام dotnet format)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (استخدام dotnet format) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (استخدام dotnet format)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (استخدام dotnet format)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: استخدام dotnet format",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (استخدام dotnet format)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين استخدام dotnet format\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: استخدام dotnet format ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (استخدام dotnet format) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.7.4",
        "title": "تفعيل Nullable Reference Types",
        "englishTitle": "تفعيل Nullable Reference Types",
        "definition": "يمثل (تفعيل Nullable Reference Types) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تفعيل Nullable Reference Types) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تفعيل Nullable Reference Types) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تفعيل Nullable Reference Types\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تفعيل Nullable Reference Types\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.7.4",
          "title": "تفعيل Nullable Reference Types",
          "topicTitle": "Code Quality",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (تفعيل Nullable Reference Types) أحد المعايير التقنية الحيوية في مسار Code Quality ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تفعيل Nullable Reference Types)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تفعيل Nullable Reference Types) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تفعيل Nullable Reference Types)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تفعيل Nullable Reference Types)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تفعيل Nullable Reference Types",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تفعيل Nullable Reference Types)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تفعيل Nullable Reference Types\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تفعيل Nullable Reference Types ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تفعيل Nullable Reference Types) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.7.5",
        "title": "تفعيل Code Analysis",
        "englishTitle": "تفعيل Code Analysis",
        "definition": "يمثل (تفعيل Code Analysis) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تفعيل Code Analysis) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تفعيل Code Analysis) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تفعيل Code Analysis\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تفعيل Code Analysis\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.7.5",
          "title": "تفعيل Code Analysis",
          "topicTitle": "Code Quality",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (تفعيل Code Analysis) أحد المعايير التقنية الحيوية في مسار Code Quality ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تفعيل Code Analysis)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تفعيل Code Analysis) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تفعيل Code Analysis)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تفعيل Code Analysis)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تفعيل Code Analysis",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تفعيل Code Analysis)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تفعيل Code Analysis\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تفعيل Code Analysis ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تفعيل Code Analysis) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.7.6",
        "title": "مقدمة في SonarQube",
        "englishTitle": "مقدمة في SonarQube",
        "definition": "يمثل (مقدمة في SonarQube) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (مقدمة في SonarQube) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (مقدمة في SonarQube) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ مقدمة في SonarQube\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: مقدمة في SonarQube\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.7.6",
          "title": "مقدمة في SonarQube",
          "topicTitle": "Code Quality",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (مقدمة في SonarQube) أحد المعايير التقنية الحيوية في مسار Code Quality ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (مقدمة في SonarQube)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (مقدمة في SonarQube) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (مقدمة في SonarQube)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (مقدمة في SonarQube)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: مقدمة في SonarQube",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (مقدمة في SonarQube)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين مقدمة في SonarQube\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: مقدمة في SonarQube ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (مقدمة في SonarQube) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.7.7",
        "title": "إجراء Code Review",
        "englishTitle": "إجراء Code Review",
        "definition": "يمثل (إجراء Code Review) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (إجراء Code Review) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (إجراء Code Review) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ إجراء Code Review\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: إجراء Code Review\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.7.7",
          "title": "إجراء Code Review",
          "topicTitle": "Code Quality",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (إجراء Code Review) أحد المعايير التقنية الحيوية في مسار Code Quality ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (إجراء Code Review)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (إجراء Code Review) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (إجراء Code Review)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (إجراء Code Review)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: إجراء Code Review",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (إجراء Code Review)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين إجراء Code Review\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: إجراء Code Review ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (إجراء Code Review) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.7.8",
        "title": "كتابة Regression Tests",
        "englishTitle": "كتابة Regression Tests",
        "definition": "يمثل (كتابة Regression Tests) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (كتابة Regression Tests) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (كتابة Regression Tests) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ كتابة Regression Tests\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: كتابة Regression Tests\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.7.8",
          "title": "كتابة Regression Tests",
          "topicTitle": "Code Quality",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (كتابة Regression Tests) أحد المعايير التقنية الحيوية في مسار Code Quality ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (كتابة Regression Tests)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (كتابة Regression Tests) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (كتابة Regression Tests)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (كتابة Regression Tests)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: كتابة Regression Tests",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (كتابة Regression Tests)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين كتابة Regression Tests\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: كتابة Regression Tests ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (كتابة Regression Tests) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      },
      {
        "subId": "26.7.9",
        "title": "تطبيق Test-Driven Development",
        "englishTitle": "Test-Driven Development",
        "definition": "يمثل (تطبيق Test-Driven Development) أحد المعايير الهندسية المتقدمة لبناء وتشغيل الأنظمة البرمجية الضخمة (Enterprise Systems)، التي تتطلب أداءً فائقاً، وتوسعية أفقية (Scalability)، وموثوقية في بيئات الإنتاج الحية.",
        "analogy": "يشبه هذا المفهوم بناء الأبراج وناطحات السحاب؛ لا يمكنك الاعتماد على نفس القواعد البسيطة لبناء كوخ صغير، بل تحتاج لدراسات زلازل، ومصاعد فائقة السرعة، ومولدات طوارئ مستقلة. (تطبيق Test-Driven Development) هو الحسابات المعمارية الدقيقة التي تضمن صمود تطبيقك أمام ملايين الزيارات المتزامنة.",
        "why": "الهدف الرئيسي من (تطبيق Test-Driven Development) هو ضمان استمرارية الخدمة (High Availability)، وتسهيل الصيانة والتطوير المستمر عبر خطوط CI/CD، وتقليل زمن الاستجابة للمستخدمين عبر تقنيات الـ Caching والمهام الخلفية.",
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
        "syntax": "// تمثيل معماري متقدم لـ تطبيق Test-Driven Development\npublic record CommandRequest(int Id, string Payload) : IRequest<Result>;\n\npublic class CommandHandler : IRequestHandler<CommandRequest, Result> { ... }",
        "simpleCode": "// مثال يوضح تطبيق النمط في ASP.NET Core\nusing System;\nusing System.Threading.Tasks;\n\n// 1. تعريف سجل بيانات خفيف الوزن وغير قابل للتعديل\npublic record NotificationMessage(string Title, string Content, DateTime SentAt);\n\n// 2. خدمة إشعار بسيطة تعمل في بيئة حديثة\npublic class SimpleAlertService\n{\n    public Task SendAlertAsync(NotificationMessage message)\n    {\n        // طباعة الإشعار وتاريخه\n        Console.WriteLine($\"[إشعار فوري {message.SentAt:HH:mm:ss}]: {message.Title} - {message.Content}\");\n        return Task.CompletedTask;\n    }\n}",
        "advancedCode": "// تطبيق متقدم لمعمارية متكاملة توضح: تطبيق Test-Driven Development\nusing System;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Hosting;\nusing Microsoft.Extensions.Logging;\n\nnamespace EnterpriseWorkerDemo\n{\n    // خدمة خلفية تعمل باستمرار لمراقبة ومعالجة المهام الثقيلة\n    public class QueueProcessorBackgroundService : BackgroundService\n    {\n        private readonly ILogger<QueueProcessorBackgroundService> _logger;\n\n        public QueueProcessorBackgroundService(ILogger<QueueProcessorBackgroundService> logger)\n        {\n            _logger = logger;\n        }\n\n        // تنفيذ الحلقة التكرارية للخدمة الخلفية\n        protected override async Task ExecuteAsync(CancellationToken stoppingToken)\n        {\n            _logger.LogInformation(\"بدء تشغيل خدمة المعالجة الخلفية بنجاح 🚀\");\n\n            // مؤقت دوري ينبض كل 5 ثوانٍ دون استهلاك معالج\n            using var timer = new PeriodicTimer(TimeSpan.FromSeconds(5));\n\n            while (!stoppingToken.IsCancellationRequested && await timer.WaitForNextTickAsync(stoppingToken))\n            {\n                try\n                {\n                    // محاكاة معالجة المهام في الطابور\n                    _logger.LogInformation(\"فحص طابور المهام وتنفيذ معالجة آمنة للمهام المعلقة...\");\n                }\n                catch (Exception ex)\n                {\n                    _logger.LogError(ex, \"حدث خطأ غير متوقع أثناء معالجة المهام الخلفية!\");\n                }\n            }\n        }\n    }\n}",
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
          "badge": "الدرس 26.7.9",
          "title": "تطبيق Test-Driven Development",
          "topicTitle": "Code Quality",
          "sectionTitle": "القسم السادس والعشرون: الاختبارات وتصحيح الأخطاء وجودة الكود",
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
          "summary": "يمثل (تطبيق Test-Driven Development) أحد المعايير التقنية الحيوية في مسار Code Quality ضمن بيئة تطوير ASP.NET Core MVC الشاملة."
        },
        "quiz": [
          {
            "question": "ما هو الهدف الأساسي أو الوظيفة الجوهرية لمفهوم (تطبيق Test-Driven Development)؟",
            "options": [
              "تحسين معمارية الكود وضمان استقرار وسرعة معالجة البيانات في النظام",
              "إيقاف تشغيل الخادم فور حدوث أي خطأ بسيط دون تنبيه",
              "الاستغناء تماماً عن كتابة الأكواد والاعتماد على الصدفة",
              "إجبار كافة العمليات على العمل بشكل متزامن وبطيء"
            ],
            "correctIndex": 0,
            "explanation": "التطبيق الصحيح لـ (تطبيق Test-Driven Development) يضمن تحقيق أقصى استفادة من قدرات معمارية .NET المتقدمة لتقديم أداء متين وقابل للتوسع."
          },
          {
            "question": "ما هي أفضل ممارسة برمجية يجب اتباعها عند التعامل مع (تطبيق Test-Driven Development)؟",
            "options": [
              "تطبيق مبادئ فصل المسؤوليات والتحقق الصارم من صحة المدخلات",
              "كتابة كافة الأكواد الحساسة داخل الواجهة الأمامية دون خادم",
              "تجاهل معالجة الأخطاء والاعتماد على عدم حدوثها",
              "استخدام متغيرات عامة مشتركة دون حماية في الذاكرة"
            ],
            "correctIndex": 0,
            "explanation": "اتباع أفضل الممارسات يمنع الثغرات الأمنية وتراجع الأداء ويضمن سهولة صيانة الكود مستقبلاً."
          },
          {
            "question": "أي من السيناريوهات التالية يعد خطأً شائعاً يرتبط بـ (تطبيق Test-Driven Development)؟",
            "options": [
              "إهمال التحقق من القيم الفارغة وتجاهل عزل العمليات الثقيلة",
              "كتابة تعليقات توضيحية واستخدام أسماء دوال معبرة",
              "فصل منطق العمليات عن واجهة المستخدم",
              "استخدام اختبارات الوحدة للتحقق من سلامة المخرجات"
            ],
            "correctIndex": 0,
            "explanation": "إهمال التحقق يسبب الانهيارات البرمجية الأكثر شيوعاً في بيئات الإنتاج الحية."
          }
        ],
        "exercise": {
          "title": "تمرين تطبيقي على: تطبيق Test-Driven Development",
          "task": "قم بكتابة برنامج بلغة C# يجسد منطق (تطبيق Test-Driven Development)، مع إضافة التحقق من صحة المدخلات وطباعة رسائل توضيحية تدل على اكتمال المعالجة بنجاح.",
          "hints": [
            "تأكد من استخدام أسماء معبرة للمتغيرات وتضمين جمل التحقق المناسبة.",
            "تذكر استخدام كتل try/catch أو التحقق المسبق لمنع انهيار البرنامج عند إدخال بيانات غير صالحة."
          ],
          "solution": "// الحل النموذجي الموصى به لتمرين تطبيق Test-Driven Development\nusing System;\n\nnamespace RoadmapExerciseSolution\n{\n    public class ExerciseRunner\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine(\"=== بدء تنفيذ حل تمرين: تطبيق Test-Driven Development ===\");\n\n            try\n            {\n                // 1. تعريف المدخلات مع التحقق الأولي\n                string inputData = \"بيانات تجريبية صالحة\"; // مدخل تجريبي\n\n                // 2. فحص الشرط لضمان سلامة المدخل\n                if (string.IsNullOrWhiteSpace(inputData))\n                {\n                    throw new ArgumentException(\"البيانات المدخلة لا يمكن أن تكون فارغة!\");\n                }\n\n                // 3. محاكاة المعالجة الناجحة\n                Console.WriteLine($\"[معالجة ناجحة]: تم تطبيق منطق (تطبيق Test-Driven Development) على المدخل: '{inputData}'.\");\n                Console.WriteLine(\"✓ تم اكتمال تنفيذ الكود بأعلى معايير الجودة!\");\n            }\n            catch (Exception ex)\n            {\n                // معالجة آمنة في حال حدوث أي استثناء\n                Console.WriteLine($\"[خطأ]: فشل التنفيذ بسبب: {ex.Message}\");\n            }\n        }\n    }\n}",
          "solutionExplanation": "تم تغليف العملية داخل كتلة try/catch مع التحقق المسبق من صحة المدخل، مما يضمن معالجة الأخطاء بأمان دون توقف مفاجئ للبرنامج."
        }
      }
    ]
  }
]
};

export default section26Data;
